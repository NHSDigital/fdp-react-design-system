import * as Y from "react";
import ut, { useState as Le, useEffect as ze, useCallback as ge, useRef as Ee, createElement as Ao, useMemo as Me, useContext as sc, createContext as oc, forwardRef as yn, useImperativeHandle as Ro, useReducer as Bo, memo as ic, useLayoutEffect as lc, useId as Zn } from "react";
import { createPortal as cc } from "react-dom";
function dc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Un = { exports: {} }, wn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ps;
function uc() {
  if (Ps) return wn;
  Ps = 1;
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
  return wn.Fragment = t, wn.jsx = r, wn.jsxs = r, wn;
}
var Sn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Es;
function fc() {
  return Es || (Es = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === C ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case v:
          return "Fragment";
        case g:
          return "Profiler";
        case p:
          return "StrictMode";
        case P:
          return "Suspense";
        case D:
          return "SuspenseList";
        case _:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case w:
            return "Portal";
          case I:
            return (R.displayName || "Context") + ".Provider";
          case F:
            return (R._context.displayName || "Context") + ".Consumer";
          case j:
            var W = R.render;
            return R = R.displayName, R || (R = W.displayName || W.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case A:
            return W = R.displayName || null, W !== null ? W : e(R.type) || "Memo";
          case T:
            W = R._payload, R = R._init;
            try {
              return e(R(W));
            } catch {
            }
        }
      return null;
    }
    function t(R) {
      return "" + R;
    }
    function r(R) {
      try {
        t(R);
        var W = !1;
      } catch {
        W = !0;
      }
      if (W) {
        W = console;
        var B = W.error, ae = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return B.call(
          W,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ae
        ), t(R);
      }
    }
    function a(R) {
      if (R === v) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === T)
        return "<...>";
      try {
        var W = e(R);
        return W ? "<" + W + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var R = k.A;
      return R === null ? null : R.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(R) {
      if (h.call(R, "key")) {
        var W = Object.getOwnPropertyDescriptor(R, "key").get;
        if (W && W.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function l(R, W) {
      function B() {
        b || (b = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          W
        ));
      }
      B.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: B,
        configurable: !0
      });
    }
    function d() {
      var R = e(this.type);
      return S[R] || (S[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function c(R, W, B, ae, z, fe, ve, le) {
      return B = fe.ref, R = {
        $$typeof: y,
        type: R,
        key: W,
        props: fe,
        _owner: z
      }, (B !== void 0 ? B : null) !== null ? Object.defineProperty(R, "ref", {
        enumerable: !1,
        get: d
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
        value: ve
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function u(R, W, B, ae, z, fe, ve, le) {
      var ue = W.children;
      if (ue !== void 0)
        if (ae)
          if (M(ue)) {
            for (ae = 0; ae < ue.length; ae++)
              f(ue[ae]);
            Object.freeze && Object.freeze(ue);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(ue);
      if (h.call(W, "key")) {
        ue = e(R);
        var J = Object.keys(W).filter(function(de) {
          return de !== "key";
        });
        ae = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", U[ue + ae] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ae,
          ue,
          J,
          ue
        ), U[ue + ae] = !0);
      }
      if (ue = null, B !== void 0 && (r(B), ue = "" + B), i(W) && (r(W.key), ue = "" + W.key), "key" in W) {
        B = {};
        for (var ee in W)
          ee !== "key" && (B[ee] = W[ee]);
      } else B = W;
      return ue && l(
        B,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), c(
        R,
        ue,
        fe,
        z,
        s(),
        B,
        ve,
        le
      );
    }
    function f(R) {
      typeof R == "object" && R !== null && R.$$typeof === y && R._store && (R._store.validated = 1);
    }
    var m = ut, y = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), I = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), C = Symbol.for("react.client.reference"), k = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, h = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var b, S = {}, $ = m.react_stack_bottom_frame.bind(
      m,
      o
    )(), te = N(a(o)), U = {};
    Sn.Fragment = v, Sn.jsx = function(R, W, B, ae, z) {
      var fe = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        R,
        W,
        B,
        !1,
        ae,
        z,
        fe ? Error("react-stack-top-frame") : $,
        fe ? N(a(R)) : te
      );
    }, Sn.jsxs = function(R, W, B, ae, z) {
      var fe = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        R,
        W,
        B,
        !0,
        ae,
        z,
        fe ? Error("react-stack-top-frame") : $,
        fe ? N(a(R)) : te
      );
    };
  })()), Sn;
}
var As;
function pc() {
  return As || (As = 1, process.env.NODE_ENV === "production" ? Un.exports = uc() : Un.exports = fc()), Un.exports;
}
var n = pc(), ia = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Rs;
function hc() {
  return Rs || (Rs = 1, (function(e) {
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
  })(ia)), ia.exports;
}
var mc = hc();
const be = /* @__PURE__ */ dc(mc), Tx = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...s
}) => {
  const o = be(
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
}, gc = ({
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
      className: be(
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
          className: be("nhsuk-account__item nhsuk-header__account-item", o.className),
          children: s(o)
        },
        i
      )) })
    }
  );
};
function xc(e) {
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
const { forwardRef: bc, useCallback: Ot, useState: la } = Y;
function yc(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: s = "default",
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, u] = la(!1), [f, m] = la(!1), [y, w] = la(!1), v = xc({
    variant: a,
    size: s,
    fullWidth: o,
    className: i,
    preventDoubleClick: l,
    href: "href" in d ? d.href : void 0
  }), p = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", g = {
    ...c && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...y && { "data-focused": "true" },
    ...p && { "data-disabled": "true" }
  }, F = Ot(
    () => !p && u(!0),
    [p]
  ), I = Ot(() => u(!1), []), j = Ot(
    () => !p && m(!0),
    [p]
  ), P = Ot(() => {
    m(!1), u(!1);
  }, []), D = Ot(() => w(!0), []), A = Ot(() => w(!1), []), T = Ot(
    (ue) => {
      ue.key === " " && ("href" in d || ue.currentTarget.getAttribute("role") === "button") && (ue.preventDefault(), ue.currentTarget.click());
    },
    [d]
  ), _ = Ot(
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
      title: ee,
      ["aria-label"]: de,
      ["aria-describedby"]: x,
      ["aria-labelledby"]: E,
      tabIndex: H,
      ...Z
    } = d, V = d;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: V.href,
        target: V.target,
        rel: V.rel,
        className: v.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...g,
        ...l && { "data-prevent-double-click": "true" },
        ...Z,
        onKeyDown: (ne) => {
          V.onKeyDown?.(ne), T(ne);
        },
        onClick: (ne) => {
          V.onClick?.(ne), _(ne);
        },
        onMouseDown: (ne) => {
          V.onMouseDown?.(ne), F();
        },
        onMouseUp: (ne) => {
          V.onMouseUp?.(ne), I();
        },
        onMouseEnter: (ne) => {
          V.onMouseEnter?.(ne), j();
        },
        onMouseLeave: (ne) => {
          V.onMouseLeave?.(ne), P();
        },
        onFocus: (ne) => {
          V.onFocus?.(ne), D();
        },
        onBlur: (ne) => {
          V.onBlur?.(ne), A();
        },
        "aria-disabled": V["aria-disabled"],
        ...V["aria-disabled"] === "true" && { tabIndex: -1 },
        id: ue,
        style: J,
        title: ee,
        "aria-label": de,
        "aria-describedby": x,
        "aria-labelledby": E,
        tabIndex: H,
        children: r
      }
    );
  }
  const {
    id: C,
    style: k,
    title: h,
    ["aria-label"]: M,
    ["aria-describedby"]: N,
    ["aria-labelledby"]: b,
    tabIndex: S,
    name: $,
    value: te,
    form: U,
    formAction: R,
    formEncType: W,
    formMethod: B,
    formNoValidate: ae,
    formTarget: z,
    autoFocus: fe,
    ...ve
  } = d, le = d;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: le.type || "button",
      disabled: le.disabled,
      className: v.classes,
      "data-module": "nhs-button",
      ...g,
      ...l && { "data-prevent-double-click": "true" },
      ...le.disabled && { "aria-disabled": "true" },
      ...ve,
      onKeyDown: (ue) => {
        le.onKeyDown?.(ue), T(ue);
      },
      onClick: (ue) => {
        le.onClick?.(ue), _(ue);
      },
      onMouseDown: (ue) => {
        le.onMouseDown?.(ue), F();
      },
      onMouseUp: (ue) => {
        le.onMouseUp?.(ue), I();
      },
      onMouseEnter: (ue) => {
        le.onMouseEnter?.(ue), j();
      },
      onMouseLeave: (ue) => {
        le.onMouseLeave?.(ue), P();
      },
      onFocus: (ue) => {
        le.onFocus?.(ue), D();
      },
      onBlur: (ue) => {
        le.onBlur?.(ue), A();
      },
      id: C,
      style: k,
      title: h,
      "aria-label": M,
      "aria-describedby": N,
      "aria-labelledby": b,
      tabIndex: S,
      name: $,
      value: te,
      form: U,
      formAction: R,
      formEncType: W,
      formMethod: B,
      formNoValidate: ae,
      formTarget: z,
      autoFocus: fe,
      children: r
    }
  );
}
const ot = bc(yc);
ot.displayName = "Button";
const Na = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = be(
    "nhsuk-back-link",
    a
  ), d = be(
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
function vc(e) {
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
const He = ({
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
  const u = vc({ color: a, noBorder: s, closable: o, disabled: l, className: d }), f = (m) => {
    m.preventDefault(), m.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: u.classes, ...c, children: [
    r || (t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    o && /* @__PURE__ */ n.jsx(
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
}, _c = ({
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
  onBlur: f,
  onFocus: m,
  attributes: y,
  ...w
}) => {
  const [v, p] = Le(a), g = r !== void 0, F = g ? r : v;
  ze(() => {
    g || p(a);
  }, [a, g]);
  const I = (T) => {
    const _ = T.target.checked;
    g || p(_), u?.(_, T);
  }, j = i ? `${e}-hint` : void 0, P = l ? `${e}-error` : void 0, D = [j, P].filter(Boolean).join(" ") || void 0, A = be(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ n.jsx("div", { className: A, ...w, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: o,
        checked: F,
        disabled: s,
        onChange: I,
        onBlur: f,
        onFocus: m,
        "aria-describedby": D,
        ...y
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ n.jsx("div", { id: j, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: P, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
_c.displayName = "Checkbox";
function wc(e) {
  const r = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    r ? "nhsuk-input--range" : "",
    !r && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: r };
}
const us = ({
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
  className: f,
  width: m = "full",
  inputMode: y,
  autoComplete: w,
  maxLength: v,
  minLength: p,
  pattern: g,
  step: F,
  min: I,
  max: j,
  showValueLabels: P = !1,
  showCurrentValue: D = !1,
  valueLabels: A,
  onChange: T,
  onBlur: _,
  onFocus: C,
  onKeyDown: k,
  ...h
}) => {
  const [M, N] = Le(a || s || (r === "range" ? I || "0" : ""));
  ze(() => {
    a !== void 0 && N(a);
  }, [a]);
  const b = (z) => {
    const fe = z.target;
    N(fe.value), ("type" in z && z.nativeEvent || z.type === "keydown") && T?.(z);
  }, { classes: S, isRange: $ } = wc({ type: r, hasError: c, width: m, className: f }), te = a !== void 0, U = {
    id: e,
    name: t,
    type: r,
    placeholder: o,
    disabled: i,
    readOnly: l,
    required: d,
    "aria-describedby": u,
    inputMode: y,
    autoComplete: w,
    maxLength: v,
    minLength: p,
    pattern: g,
    step: F,
    min: I,
    max: j,
    onChange: b,
    onBlur: _,
    onFocus: C,
    onKeyDown: (z) => {
      if ($ && /[0-9]/.test(z.key)) {
        const fe = (M?.toString() || "") + z.key;
        z.target.value = fe, b(z);
      }
      k?.(z);
    },
    ...h
  }, R = !te && s !== void 0 ? { defaultValue: s } : {}, W = te ? { value: a } : {}, B = () => /* @__PURE__ */ n.jsx(
    "input",
    {
      className: S,
      ...W,
      ...R,
      "data-current-value": M,
      ...U
    }
  ), ae = $ ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    P && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: A?.min || I || "0" }),
      B(),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: A?.max || j || "100" })
    ] }),
    !P && B(),
    D && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      A?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: M })
    ] }) })
  ] }) : null;
  return $ ? ae : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: S,
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
      inputMode: y,
      autoComplete: w,
      maxLength: v,
      minLength: p,
      pattern: g,
      step: F,
      min: I,
      max: j,
      onChange: T,
      onBlur: _,
      onFocus: C,
      onKeyDown: k,
      ...h
    }
  );
};
function Sc(e) {
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
const fs = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: s,
  ...o
}) => {
  const i = Sc({ size: a, isPageHeading: r, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ n.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...o, children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: s }) : s });
}, ps = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...s
}) => {
  const o = be(
    "nhsuk-fieldset",
    r
  ), i = be(
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
}, kc = ({
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
  fieldsetAttributes: f,
  attributes: m,
  ...y
}) => {
  const [w, v] = Le(
    e.filter((T) => T.checked).map((T) => T.value)
  ), p = r || t, g = i ? `${p}-hint` : void 0, F = l ? `${p}-error` : void 0, I = [g, F].filter(Boolean).join(" ") || void 0, j = (T, _) => {
    let C;
    _ ? C = [...w, T] : C = w.filter((k) => k !== T), v(C), u?.(C);
  }, P = () => e.map((T, _) => {
    const C = `${p}-${_ + 1}`, k = `${C}-conditional`, h = w.includes(T.value), M = T.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: C,
          name: t,
          type: "checkbox",
          value: T.value,
          checked: h,
          disabled: M,
          onChange: (N) => j(T.value, N.target.checked),
          "aria-describedby": T.hint ? `${C}-hint` : I,
          ...T.conditional && {
            "aria-controls": k,
            "aria-expanded": h ? "true" : "false"
          },
          ...T.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: C, children: T.text }),
      T.hint && /* @__PURE__ */ n.jsx("div", { id: `${C}-hint`, className: "nhsuk-checkboxes__hint", children: T.hint }),
      T.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: be("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !h
          }),
          id: k,
          children: typeof T.conditional == "object" && T.conditional !== null && "label" in T.conditional && "id" in T.conditional && "name" in T.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            T.conditional.label && /* @__PURE__ */ n.jsx(fs, { htmlFor: T.conditional.id, children: T.conditional.label }),
            /* @__PURE__ */ n.jsx(us, { ...T.conditional })
          ] }) : T.conditional
        }
      )
    ] }, T.value);
  }), D = be(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": c
    },
    d
  ), A = be("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: A, ...m, ...y, children: /* @__PURE__ */ n.jsxs(
    ps,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: I,
      ...f,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: g, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: F, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: D, children: P() })
      ]
    }
  ) });
};
kc.displayName = "Checkboxes";
const Cc = ({
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
  rows: f = 5,
  cols: m,
  maxLength: y,
  minLength: w,
  wrap: v = "soft",
  resize: p = "vertical",
  autoComplete: g,
  spellCheck: F,
  onChange: I,
  onBlur: j,
  onFocus: P,
  onKeyDown: D,
  ...A
}) => {
  const T = be(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": d,
      [`nhsuk-textarea--resize-${p}`]: p !== "vertical"
    },
    u
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: T,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      placeholder: s,
      disabled: o,
      readOnly: i,
      required: l,
      "aria-describedby": c,
      rows: f,
      cols: m,
      maxLength: y,
      minLength: w,
      wrap: v,
      autoComplete: g,
      spellCheck: F,
      onChange: I,
      onBlur: j,
      onFocus: P,
      onKeyDown: D,
      ...A
    }
  );
};
function jc(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Ho = ({ id: e, className: t, children: r, ...a }) => {
  const s = jc({ id: e, className: t });
  return /* @__PURE__ */ n.jsx("div", { className: s.classes, id: s.id, ...a, children: r });
}, Dx = ({
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
  onChange: f,
  ...m
}) => {
  const y = o ?? i ?? "", [w, v] = Le(y), [p, g] = Le(0), [F, I] = Le(!1), [j, P] = Le(!1), D = ge((h) => r ? h.trim() === "" ? 0 : h.trim().split(/\s+/).length : h.length, [r]);
  ze(() => {
    const h = D(w), M = t || r || 0, N = M - h, b = Math.floor(M * (a / 100));
    g(N), I(h > M), P(h >= b || h > M), u && u(h, N);
  }, [w, t, r, a, D, u]);
  const A = (h) => {
    const M = h.target.value;
    v(M), f && f(h);
  }, T = () => {
    const h = t || r || 0, M = r ? "word" : "character", N = r ? "words" : "characters";
    if (!j)
      return `You can enter up to ${h} ${h === 1 ? M : N}`;
    if (F) {
      const b = Math.abs(p);
      return `You have ${b} ${b === 1 ? M : N} too many`;
    } else
      return `You have ${p} ${p === 1 ? M : N} remaining`;
  }, _ = be(
    "nhsuk-character-count",
    d
  ), C = be(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !j,
      "nhsuk-error-message": F
    },
    c?.classes
  ), k = be(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": F
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: _,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          Cc,
          {
            id: e,
            name: s,
            value: o !== void 0 ? w : void 0,
            defaultValue: o === void 0 ? i ?? w : void 0,
            rows: l,
            className: k,
            onChange: A,
            "aria-describedby": `${e}-info`,
            "aria-invalid": F || void 0,
            ...m
          }
        ),
        /* @__PURE__ */ n.jsx(
          Ho,
          {
            id: `${e}-info`,
            className: C,
            role: "status",
            "aria-live": "polite",
            children: T()
          }
        )
      ]
    }
  );
}, Nc = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: s,
  ...o
}) => {
  const i = be(
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
}, Tc = ({
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
  size: f,
  autoComplete: m,
  options: y,
  children: w,
  onChange: v,
  onBlur: p,
  onFocus: g,
  ...F
}) => {
  const I = be(
    "nhsuk-select",
    {
      "nhsuk-select--error": l
    },
    c
  ), j = () => y ? y.map((D, A) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: D.value,
      disabled: D.disabled,
      "data-initial-selected": D.selected || void 0,
      children: D.text
    },
    `${D.value}-${A}`
  )) : null, P = s === void 0 && a === void 0 && y ? y.find((D) => D.selected)?.value : void 0;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: I,
      id: e,
      name: t,
      "aria-label": r,
      value: a,
      defaultValue: s !== void 0 ? s : P,
      disabled: o,
      required: i,
      "aria-describedby": d,
      multiple: u,
      size: f,
      autoComplete: m,
      onChange: v,
      onBlur: p,
      onFocus: g,
      ...F,
      children: w || j()
    }
  );
}, Jn = Tc;
Jn.Option = Nc;
function zo(e, {
  variant: t,
  selectedValue: r,
  enableBehaviourAttr: a,
  handleChange: s,
  handleBlur: o,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: d
}) {
  const { onChange: c, onBlur: u, onFocus: f, ...m } = e, {
    name: y,
    hasError: w = !1,
    describedBy: v,
    className: p,
    size: g = "normal",
    inline: F = !1,
    options: I,
    ...j
  } = m, P = be(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": w,
      "nhsuk-radios--small": g === "small",
      "nhsuk-radios--inline": F
    },
    p
  );
  return /* @__PURE__ */ n.jsx(ps, { children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: P,
      ...j,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: I.map((D, A) => {
        const T = `${y}-${A}`, _ = D.conditional ? `${T}-conditional` : void 0, C = r === D.value;
        return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: T,
              name: y,
              type: "radio",
              value: D.value,
              disabled: D.disabled,
              ...t === "client" ? { checked: C, onChange: s, onBlur: o, onFocus: i, onKeyDown: l, ref: (k) => {
                k && d && (d.current[A] = k);
              } } : { defaultChecked: C, "data-nhs-radios-input": !0 },
              "aria-describedby": v
            }
          ),
          /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: T, children: D.text }),
          D.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: D.hint }),
          D.conditional && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: be("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !C
              }),
              id: _,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof D.conditional == "object" && D.conditional !== null && "label" in D.conditional && "id" in D.conditional && "name" in D.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
                D.conditional.label && /* @__PURE__ */ n.jsx(fs, { htmlFor: D.conditional.id, children: D.conditional.label }),
                /* @__PURE__ */ n.jsx(us, { ...D.conditional })
              ] }) : D.conditional
            }
          )
        ] }, D.value);
      })
    }
  ) });
}
const $x = ({ value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: s, ...o }) => {
  const [i, l] = Le(e || t || ""), d = Ee([]), c = Ee(i), u = (y) => {
    const w = y.target.value;
    w !== c.current && (c.current = w, l(w), r?.(y));
  }, f = (y) => {
    s?.(y);
  }, m = ge((y) => {
    const { key: w } = y;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(w)) return;
    y.preventDefault();
    const v = d.current.filter((I) => I && !I.disabled), p = v.indexOf(y.currentTarget);
    if (p === -1) return;
    let g = p;
    ["ArrowDown", "ArrowRight"].includes(w) ? g = (p + 1) % v.length : ["ArrowUp", "ArrowLeft"].includes(w) && (g = (p - 1 + v.length) % v.length);
    const F = v[g];
    F && (F.focus(), F.checked || F.click());
  }, []);
  return zo(
    { value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: s, ...o },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: u,
      handleBlur: a,
      handleFocus: f,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: m,
      itemsRef: d
    }
  );
}, Ix = ({ value: e, defaultValue: t, ...r }) => {
  const a = e || t || "";
  return zo(
    { value: e, defaultValue: t, ...r },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0
    }
  );
}, Wo = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  style: s,
  ...o
}) => {
  const i = be(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), l = a ? { maxWidth: a, ...s || {} } : s;
  return /* @__PURE__ */ n.jsx("div", { className: i, style: l, ...o, children: e });
}, Jt = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const s = be("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: s, style: r, ...a, children: e });
}, $n = ({
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
  const u = be(
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
}, Ta = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const o = ut.Children.toArray(e)[0], i = ut.isValidElement(o) && (o.type === Jt || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(Wo, { className: t, style: r, ...a, children: i ? e : /* @__PURE__ */ n.jsx(Jt, { children: e }) });
}, Dc = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: s,
  role: o,
  as: i,
  ...l
}) => {
  const d = i || (t === "number" ? "ol" : "ul"), c = be(
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
}, $c = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = be("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, Ic = Dc;
Ic.Item = $c;
const Mx = ({
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
}, Lx = {
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
}, Fx = ({
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
}, Px = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Ex = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Oo = ({
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
function Mc(e) {
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
function Lc(e) {
  const t = e.level ?? Mc(e.size), r = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: r, style: a };
}
const At = ({ level: e, className: t, text: r, html: a, children: s, size: o, marginBottom: i, ...l }) => {
  const d = Lc({ level: e, size: o, className: t, marginBottom: i }), c = s || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r);
  return Ao(d.tag, { className: d.classes, style: d.style, ...l }, c);
};
function Fc(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const Bs = ({ id: e, className: t, visuallyHiddenText: r = "Error:", children: a, ...s }) => {
  const o = Fc({ id: e, className: t, visuallyHiddenText: r });
  return /* @__PURE__ */ n.jsxs("span", { className: o.classes, id: o.id, ...s, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      o.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, Ax = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: a,
  errorList: s,
  className: o,
  children: i,
  ...l
}) => {
  const d = Ee(null);
  ze(() => {
    d.current && d.current.focus();
  }, []);
  const c = be(
    "nhsuk-error-summary",
    o
  ), u = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, m = (y) => {
    const w = y.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } }) : y.text;
    return y.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: y.href,
        ...y.attributes,
        children: w
      }
    ) : w;
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
          !i && (r || a) && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: f() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((y, w) => /* @__PURE__ */ n.jsx("li", { children: m(y) }, w)) })
        ] })
      ]
    }
  );
}, Rx = ({
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
  const [u, f] = Le(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [m, y] = Le({}), w = (b) => b % 4 === 0 && b % 100 !== 0 || b % 400 === 0, v = (b, S) => {
    const $ = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return b === 2 && w(S) ? 29 : $[b - 1];
  }, p = (b, S, $) => {
    if (!b) return;
    if (!/^\d+$/.test(b)) return "Day must be a number";
    const te = parseInt(b, 10);
    if (te < 1 || te > 31) return "Day must be between 1 and 31";
    if (S && $) {
      const U = parseInt(S, 10), R = parseInt($, 10);
      if (!isNaN(U) && !isNaN(R) && U >= 1 && U <= 12) {
        const W = v(U, R);
        if (te > W)
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
          ][U - 1]} ${R} only has ${W} days`;
      }
    }
  }, g = (b) => {
    if (!b) return;
    if (!/^\d+$/.test(b)) return "Month must be a number";
    const S = parseInt(b, 10);
    if (S < 1 || S > 12) return "Month must be between 1 and 12";
  }, F = (b) => {
    if (!b) return;
    if (!/^\d+$/.test(b)) return "Year must be a number";
    const S = parseInt(b, 10), $ = (/* @__PURE__ */ new Date()).getFullYear();
    if (S < 1900 || S > $ + 10)
      return `Year must be between 1900 and ${$ + 10}`;
  }, I = (b, S, $) => {
    if (!b || !S || !$) return;
    const te = parseInt(b, 10), U = parseInt(S, 10), R = parseInt($, 10);
    if (isNaN(te) || isNaN(U) || isNaN(R) || U < 1 || U > 12 || R < 1900) return;
    const W = v(U, R);
    te < 1 || te > W;
  }, j = ge((b, S) => {
    const $ = {
      ...u,
      [b]: S
    };
    f($), d && d($);
  }, [u, d]), P = ge((b) => {
    const S = u[b];
    let $;
    if (b === "day")
      $ = p(S, u.month, u.year);
    else if (b === "month") {
      if ($ = g(S), !$ && u.day) {
        const te = p(u.day, S, u.year);
        y((U) => ({
          ...U,
          day: te
        }));
      }
    } else if (b === "year" && ($ = F(S), !$ && u.day && u.month)) {
      const te = p(u.day, u.month, S);
      y((U) => ({
        ...U,
        day: te
      }));
    }
    if (y((te) => ({
      ...te,
      [b]: $
    })), u.day && u.month && u.year) {
      const te = I(
        b === "day" ? S : u.day,
        b === "month" ? S : u.month,
        b === "year" ? S : u.year
      );
      te && y((U) => ({
        ...U,
        day: te
      }));
    }
  }, [u, p, g, F, I]), D = Me(() => [
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
  ], []), A = r || D;
  let T = o?.describedBy || "";
  const _ = i ? `${e}-hint` : "", C = l ? `${e}-error` : "";
  _ && (T = T ? `${T} ${_}` : _), C && (T = T ? `${T} ${C}` : C);
  const k = Object.values(m).some((b) => b), h = be(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || k
    }
  ), M = be(
    "nhsuk-date-input",
    t
  ), N = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Ho,
      {
        id: _,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      Bs,
      {
        id: C,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(m).map(
      ([b, S]) => S ? /* @__PURE__ */ n.jsxs(
        Bs,
        {
          id: `${e}-${b}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            S
          ]
        },
        `${b}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: M, id: e, "data-testid": "date-input", ...c, children: A.map((b) => {
      const S = b.id || `${e}-${b.name}`, $ = a ? `${a}[${b.name}]` : b.name, te = b.label || b.name.charAt(0).toUpperCase() + b.name.slice(1), U = m[b.name], R = u[b.name] || "";
      let W = T;
      if (U) {
        const B = `${e}-${b.name}-error`;
        W = W ? `${W} ${B}` : B;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          fs,
          {
            htmlFor: S,
            className: "nhsuk-date-input__label",
            children: te
          }
        ),
        /* @__PURE__ */ n.jsx(
          us,
          {
            id: S,
            name: $,
            value: R,
            className: be("nhsuk-date-input__input", b.classes, {
              "nhsuk-input--error": U
            }),
            inputMode: b.inputmode,
            autoComplete: b.autocomplete,
            pattern: b.pattern,
            "aria-describedby": W || void 0,
            hasError: !!U,
            onChange: (B) => j(b.name, B.target.value),
            onBlur: () => P(b.name)
          }
        )
      ] }, b.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: h, children: o ? /* @__PURE__ */ n.jsx(
    ps,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: T || void 0,
      children: N()
    }
  ) : N() });
}, Uo = {
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
}, Go = oc(Uo), Pc = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...Uo, ...t };
  return /* @__PURE__ */ n.jsx(Go.Provider, { value: r, children: e });
}, Bx = () => {
  const e = sc(Go);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Ec() {
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
function Ac() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Ec(), document.head.appendChild(e);
}
const Hx = ({ children: e, theme: t }) => (ze(() => {
  Ac();
}, []), /* @__PURE__ */ n.jsx(Pc, { theme: t, children: e })), Rc = ({
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
  isLoading: f = !1,
  showResults: m = !1,
  results: y = [],
  formAttributes: w = {},
  inputAttributes: v = {},
  buttonAttributes: p = {},
  preventDefaultSubmit: g = !1,
  debounceMs: F = 300,
  minQueryLength: I = 1
}) => {
  const [j, P] = Le(""), [D, A] = Le(!1), T = Ee(void 0), _ = Ee(null), C = Ee(null), k = e === "controlled" && s !== void 0, h = k ? s : j, M = ge((ae) => {
    T.current && clearTimeout(T.current), T.current = setTimeout(() => {
      u.onChange && ae.length >= I && u.onChange(ae);
    }, F);
  }, [u.onChange, F, I]), N = ge((ae) => {
    const z = ae.target.value;
    k || P(z), e !== "form" && M(z);
  }, [k, e, M]), b = ge((ae) => {
    const z = h.trim(), fe = {
      query: z,
      timestamp: Date.now(),
      formData: new FormData(ae.currentTarget)
    };
    e === "controlled" || e === "hybrid" && g ? (ae.preventDefault(), u.onSearch && z.length >= I && u.onSearch(fe)) : e === "hybrid" && u.onSearch && z.length >= I && u.onSearch(fe);
  }, [e, h, u.onSearch, g, I]), S = ge(() => {
    A(!0), u.onFocus?.();
  }, [u.onFocus]), $ = ge(() => {
    A(!1), u.onBlur?.();
  }, [u.onBlur]), te = ge(() => {
    k || P(""), u.onClear?.(), C.current?.focus();
  }, [k, u.onClear]);
  ze(() => () => {
    T.current && clearTimeout(T.current);
  }, []);
  const U = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: be("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": f
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), R = () => /* @__PURE__ */ n.jsx(
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
  ), W = () => !h || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: te,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), B = () => !m || !y.length || !D ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: y.map((ae) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: ae.href ? /* @__PURE__ */ n.jsxs("a", { href: ae.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: ae.title }),
    ae.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: ae.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => u.onSearch?.({ query: ae.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: ae.title }),
        ae.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: ae.description })
      ]
    }
  ) }, ae.id)) });
  return /* @__PURE__ */ n.jsxs("div", { className: be("nhsuk-header__search", d, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": f,
    "nhsuk-header__search--focused": D,
    "nhsuk-header__search--has-results": m && y.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: _,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        role: "search",
        onSubmit: b,
        ...w,
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
                value: h,
                onChange: N,
                onFocus: S,
                onBlur: $,
                disabled: c || f,
                ...m && y.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...v
              }
            ),
            W()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || f || e !== "form" && h.length < I,
              ...p,
              children: [
                f ? R() : U(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    B()
  ] });
};
function Vo(e, {
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
    logo: f = {},
    service: m = {},
    organisation: y,
    search: w,
    account: v,
    navigation: p,
    containerClasses: g,
    variant: F = "default",
    attributes: I = {},
    maxVisibleItems: j,
    // deprecated (ignored)
    responsiveNavigation: P = !0,
    ...D
  } = e;
  "maxVisibleItems" in D && delete D.maxVisibleItems;
  const A = m.href && !f.href || m.href && m.href === f.href, T = A ? m.href : f.href, _ = be(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": F === "organisation" || y,
      "nhsuk-header--white": F === "white"
    },
    u
  ), C = be(
    "nhsuk-header__container",
    g
  ), k = be(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": p?.white,
      "nhsuk-header__navigation--justified": p?.justified
    },
    p?.className
  ), h = () => /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsx("title", { children: f.ariaLabel || "NHS" }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), M = () => f.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: f.src,
      width: "280",
      alt: f.ariaLabel || "NHS"
    }
  ) : h(), N = () => y ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      y.name,
      y.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        y.split
      ] })
    ] }),
    y.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: y.descriptor })
  ] }) : null, b = (W, B) => W ? B ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: B, children: W }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: W }) : null, S = (W) => W.active || W.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: W.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: W.html } }) : W.text }) : W.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: W.html } }) : W.text, $ = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), te = t === "server" && p?.items && !P, U = te ? [] : p?.items, R = te ? p.items : [];
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: _,
      role: "banner",
      "data-module": "nhsuk-header",
      ...I,
      ...D,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: C, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            T ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: T, children: [
              M(),
              N(),
              A && b(m.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              M(),
              N(),
              A && b(m.text)
            ] }),
            m.text && !A && b(m.text, m.href)
          ] }),
          w && /* @__PURE__ */ n.jsx(Rc, { ...w }),
          /* @__PURE__ */ n.jsx(
            gc,
            {
              ...v,
              variant: F === "white" ? "white" : "default"
            }
          )
        ] }),
        p && p.items && p.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: k,
            "aria-label": p.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: be(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": r && t === "client",
                    "nhsuk-header__navigation-container--ssr": !r
                  },
                  g
                ),
                ref: t === "client" ? d : void 0,
                children: /* @__PURE__ */ n.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: t === "client" ? c : void 0,
                    children: [
                      (t === "server" ? U || [] : p?.items || []).map((W, B) => /* @__PURE__ */ n.jsx(
                        "li",
                        {
                          className: be(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": W.active || W.current,
                              "nhsuk-header__navigation-item--hidden": t === "client" && s && o !== void 0 && B >= (o ?? 0)
                            },
                            W.className
                          ),
                          ...W.attributes || {},
                          children: /* @__PURE__ */ n.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: W.href,
                              ...W.active || W.current ? { "aria-current": W.current ? "page" : "true" } : {},
                              children: S(W)
                            }
                          )
                        },
                        B
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
                            $()
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
        t === "client" && r && p && p.items && p.items.length > 0 && a && i && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: p.items.slice(o ?? 0).map((W, B) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: be("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": W.active || W.current
                }),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: W.href,
                    ...W.active || W.current ? { "aria-current": W.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: S(W)
                  }
                )
              },
              `overflow-${(o ?? 0) + B}`
            )) })
          }
        ),
        t === "server" && te && R.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: R.map((W, B) => /* @__PURE__ */ n.jsx(
          "li",
          {
            className: be("nhsuk-header__dropdown-item", {
              "nhsuk-header__dropdown-item--current": W.active || W.current
            }),
            children: /* @__PURE__ */ n.jsx(
              "a",
              {
                className: "nhsuk-header__dropdown-link",
                href: W.href,
                ...W.active || W.current ? { "aria-current": W.current ? "page" : "true" } : {},
                children: S(W)
              }
            )
          },
          `overflow-server-${B}`
        )) }) })
      ]
    }
  );
}
const Yo = ({
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
  const [f, m] = Le(!1), [y, w] = Le(!1), [v, p] = Le(i?.items?.length || 0), [g, F] = Le(!1), [I, j] = Le(!1), P = Ee(null), D = Ee(null), A = Ee(!1);
  ze(() => {
    typeof window > "u" || j(!0);
  }, []), ze(() => {
    if (typeof document > "u") return;
    const k = (h) => {
      h.key === "Escape" && f && m(!1);
    };
    if (f)
      return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [f]);
  const T = Ee(null), _ = ge(() => {
    if (!I || !i?.items || i.items.length === 0 || A.current) return;
    const k = P.current, h = D.current;
    if (!k || !h) return;
    A.current = !0, k.classList.add("nhsuk-header__navigation-container--measuring");
    const M = k.clientWidth, N = Array.from(h.children);
    if (!N.length) {
      k.classList.remove("nhsuk-header__navigation-container--measuring"), A.current = !1;
      return;
    }
    if (T.current == null) {
      const z = document.createElement("button");
      z.type = "button", z.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", z.style.position = "absolute", z.style.visibility = "hidden", z.style.pointerEvents = "none", z.innerHTML = "<span>More</span>", k.appendChild(z), T.current = z.getBoundingClientRect().width || 104, k.removeChild(z);
    }
    const b = T.current + 16;
    let S = 0, $ = 0;
    const te = window.getComputedStyle(k), U = parseFloat(te.paddingLeft) || 0, R = parseFloat(te.paddingRight) || 0;
    let W = U + R;
    for (const z of N) {
      const fe = z.getBoundingClientRect().width;
      if (S + fe + b + W > M) break;
      S += fe, $ += 1;
    }
    const B = $ < i.items.length, ae = B ? $ : i.items.length;
    w((z) => z === B ? z : B), p((z) => z === ae ? z : ae), k.classList.remove("nhsuk-header__navigation-container--measuring"), A.current = !1;
  }, [I, i?.items]);
  ze(() => {
    if (!I) return;
    const k = P.current;
    if (!k) return;
    let h = null;
    const M = () => {
      h == null && (h = window.requestAnimationFrame(() => {
        h = null, _();
      }));
    };
    _();
    const N = new ResizeObserver(() => M());
    return N.observe(k), D.current && N.observe(D.current), () => {
      h != null && window.cancelAnimationFrame(h), N.disconnect();
    };
  }, [I, _]), ze(() => {
    I && _();
  }, [i?.items?.length, I, _]);
  const C = (k) => {
    k && (k.preventDefault(), k.stopPropagation());
    const h = !f;
    m(h), F(h);
  };
  return Vo(
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
      menuOpen: f,
      showMoreButton: y,
      visibleItems: v,
      dropdownVisible: g,
      toggleMenu: C,
      navContainerRef: P,
      navListRef: D
    }
  );
}, zx = (e) => Vo(e, {
  variant: "server",
  isClient: !1
}), Bc = ({
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
  ].filter(Boolean).join(" "), f = [
    "nhsuk-width-container",
    i,
    o ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), m = [
    "nhsuk-hero__heading",
    r,
    !d && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), y = d || e || a || s, w = () => {
    if (!e) return null;
    const v = { className: m };
    switch (t) {
      case 1:
        return /* @__PURE__ */ n.jsx("h1", { ...v, children: e });
      case 2:
        return /* @__PURE__ */ n.jsx("h2", { ...v, children: e });
      case 3:
        return /* @__PURE__ */ n.jsx("h3", { ...v, children: e });
      case 4:
        return /* @__PURE__ */ n.jsx("h4", { ...v, children: e });
      case 5:
        return /* @__PURE__ */ n.jsx("h5", { ...v, children: e });
      case 6:
        return /* @__PURE__ */ n.jsx("h6", { ...v, children: e });
      default:
        return /* @__PURE__ */ n.jsx("h1", { ...v, children: e });
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
        o && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: y && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          w(),
          d || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && y && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          w(),
          d || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Bc.displayName = "Hero";
const qo = ({
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
  const f = (y, w = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: be("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": w
      }),
      children: /* @__PURE__ */ n.jsx(
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
  ), m = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...d }, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: be("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ n.jsx("div", { className: be("nhsuk-footer", e), style: c, children: m ? (
            // Multi-column layout
            /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((y) => f(y)) }),
              r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((y) => f(y)) }),
              a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((y) => f(y)) }),
              s && s.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((y) => f(y)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((y) => f(y, !0)),
              (r || []).map((y) => f(y, !0)),
              (a || []).map((y) => f(y, !0)),
              (s || []).map((y) => f(y, !0))
            ] })
          ) }),
          !m && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: o }) })
        ]
      }
    ),
    m && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: o }) }) })
  ] }) });
};
function Xn(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Hc(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function hs(e) {
  let t, r, a;
  e.length !== 2 ? (t = Xn, r = (l, d) => Xn(e(l), d), a = (l, d) => e(l) - d) : (t = e === Xn || e === Hc ? e : zc, r = e, a = e);
  function s(l, d, c = 0, u = l.length) {
    if (c < u) {
      if (t(d, d) !== 0) return u;
      do {
        const f = c + u >>> 1;
        r(l[f], d) < 0 ? c = f + 1 : u = f;
      } while (c < u);
    }
    return c;
  }
  function o(l, d, c = 0, u = l.length) {
    if (c < u) {
      if (t(d, d) !== 0) return u;
      do {
        const f = c + u >>> 1;
        r(l[f], d) <= 0 ? c = f + 1 : u = f;
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
function zc() {
  return 0;
}
function Wc(e) {
  return e === null ? NaN : +e;
}
const Oc = hs(Xn), Uc = Oc.right;
hs(Wc).center;
function Xo(e, t) {
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
class Hs extends Map {
  constructor(t, r = Yc) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [a, s] of t) this.set(a, s);
  }
  get(t) {
    return super.get(zs(this, t));
  }
  has(t) {
    return super.has(zs(this, t));
  }
  set(t, r) {
    return super.set(Gc(this, t), r);
  }
  delete(t) {
    return super.delete(Vc(this, t));
  }
}
function zs({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : r;
}
function Gc({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : (e.set(a, r), r);
}
function Vc({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) && (r = e.get(a), e.delete(a)), r;
}
function Yc(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const qc = Math.sqrt(50), Xc = Math.sqrt(10), Kc = Math.sqrt(2);
function Qn(e, t, r) {
  const a = (t - e) / Math.max(0, r), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= qc ? 10 : o >= Xc ? 5 : o >= Kc ? 2 : 1;
  let l, d, c;
  return s < 0 ? (c = Math.pow(10, -s) / i, l = Math.round(e * c), d = Math.round(t * c), l / c < e && ++l, d / c > t && --d, c = -c) : (c = Math.pow(10, s) * i, l = Math.round(e / c), d = Math.round(t / c), l * c < e && ++l, d * c > t && --d), d < l && 0.5 <= r && r < 2 ? Qn(e, t, r * 2) : [l, d, c];
}
function Zc(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [s, o, i] = a ? Qn(t, e, r) : Qn(e, t, r);
  if (!(o >= s)) return [];
  const l = o - s + 1, d = new Array(l);
  if (a)
    if (i < 0) for (let c = 0; c < l; ++c) d[c] = (o - c) / -i;
    else for (let c = 0; c < l; ++c) d[c] = (o - c) * i;
  else if (i < 0) for (let c = 0; c < l; ++c) d[c] = (s + c) / -i;
  else for (let c = 0; c < l; ++c) d[c] = (s + c) * i;
  return d;
}
function Da(e, t, r) {
  return t = +t, e = +e, r = +r, Qn(e, t, r)[2];
}
function $a(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, s = a ? Da(t, e, r) : Da(e, t, r);
  return (a ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function Jc(e, t, r) {
  e = +e, t = +t, r = (s = arguments.length) < 2 ? (t = e, e = 0, 1) : s < 3 ? 1 : +r;
  for (var a = -1, s = Math.max(0, Math.ceil((t - e) / r)) | 0, o = new Array(s); ++a < s; )
    o[a] = e + a * r;
  return o;
}
function Or(e, t) {
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
const Ws = Symbol("implicit");
function Ko() {
  var e = new Hs(), t = [], r = [], a = Ws;
  function s(o) {
    let i = e.get(o);
    if (i === void 0) {
      if (a !== Ws) return a;
      e.set(o, i = t.push(o) - 1);
    }
    return r[i % r.length];
  }
  return s.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [], e = new Hs();
    for (const i of o)
      e.has(i) || e.set(i, t.push(i) - 1);
    return s;
  }, s.range = function(o) {
    return arguments.length ? (r = Array.from(o), s) : r.slice();
  }, s.unknown = function(o) {
    return arguments.length ? (a = o, s) : a;
  }, s.copy = function() {
    return Ko(t, r).unknown(a);
  }, Or.apply(s, arguments), s;
}
function Zo() {
  var e = Ko().unknown(void 0), t = e.domain, r = e.range, a = 0, s = 1, o, i, l = !1, d = 0, c = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var m = t().length, y = s < a, w = y ? s : a, v = y ? a : s;
    o = (v - w) / Math.max(1, m - d + c * 2), l && (o = Math.floor(o)), w += (v - w - o * (m - d)) * u, i = o * (1 - d), l && (w = Math.round(w), i = Math.round(i));
    var p = Jc(m).map(function(g) {
      return w + o * g;
    });
    return r(y ? p.reverse() : p);
  }
  return e.domain = function(m) {
    return arguments.length ? (t(m), f()) : t();
  }, e.range = function(m) {
    return arguments.length ? ([a, s] = m, a = +a, s = +s, f()) : [a, s];
  }, e.rangeRound = function(m) {
    return [a, s] = m, a = +a, s = +s, l = !0, f();
  }, e.bandwidth = function() {
    return i;
  }, e.step = function() {
    return o;
  }, e.round = function(m) {
    return arguments.length ? (l = !!m, f()) : l;
  }, e.padding = function(m) {
    return arguments.length ? (d = Math.min(1, c = +m), f()) : d;
  }, e.paddingInner = function(m) {
    return arguments.length ? (d = Math.min(1, m), f()) : d;
  }, e.paddingOuter = function(m) {
    return arguments.length ? (c = +m, f()) : c;
  }, e.align = function(m) {
    return arguments.length ? (u = Math.max(0, Math.min(1, m)), f()) : u;
  }, e.copy = function() {
    return Zo(t(), [a, s]).round(l).paddingInner(d).paddingOuter(c).align(u);
  }, Or.apply(f(), arguments);
}
function ms(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Jo(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function Rn() {
}
var In = 0.7, er = 1 / In, fn = "\\s*([+-]?\\d+)\\s*", Mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", vt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Qc = /^#([0-9a-f]{3,8})$/, ed = new RegExp(`^rgb\\(${fn},${fn},${fn}\\)$`), td = new RegExp(`^rgb\\(${vt},${vt},${vt}\\)$`), nd = new RegExp(`^rgba\\(${fn},${fn},${fn},${Mn}\\)$`), rd = new RegExp(`^rgba\\(${vt},${vt},${vt},${Mn}\\)$`), ad = new RegExp(`^hsl\\(${Mn},${vt},${vt}\\)$`), sd = new RegExp(`^hsla\\(${Mn},${vt},${vt},${Mn}\\)$`), Os = {
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
ms(Rn, Ln, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Us,
  // Deprecated! Use color.formatHex.
  formatHex: Us,
  formatHex8: od,
  formatHsl: id,
  formatRgb: Gs,
  toString: Gs
});
function Us() {
  return this.rgb().formatHex();
}
function od() {
  return this.rgb().formatHex8();
}
function id() {
  return Qo(this).formatHsl();
}
function Gs() {
  return this.rgb().formatRgb();
}
function Ln(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Qc.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Vs(t) : r === 3 ? new dt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Gn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Gn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ed.exec(e)) ? new dt(t[1], t[2], t[3], 1) : (t = td.exec(e)) ? new dt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = nd.exec(e)) ? Gn(t[1], t[2], t[3], t[4]) : (t = rd.exec(e)) ? Gn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ad.exec(e)) ? Xs(t[1], t[2] / 100, t[3] / 100, 1) : (t = sd.exec(e)) ? Xs(t[1], t[2] / 100, t[3] / 100, t[4]) : Os.hasOwnProperty(e) ? Vs(Os[e]) : e === "transparent" ? new dt(NaN, NaN, NaN, 0) : null;
}
function Vs(e) {
  return new dt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Gn(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new dt(e, t, r, a);
}
function ld(e) {
  return e instanceof Rn || (e = Ln(e)), e ? (e = e.rgb(), new dt(e.r, e.g, e.b, e.opacity)) : new dt();
}
function Ia(e, t, r, a) {
  return arguments.length === 1 ? ld(e) : new dt(e, t, r, a ?? 1);
}
function dt(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
ms(dt, Ia, Jo(Rn, {
  brighter(e) {
    return e = e == null ? er : Math.pow(er, e), new dt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? In : Math.pow(In, e), new dt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new dt(Zt(this.r), Zt(this.g), Zt(this.b), tr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ys,
  // Deprecated! Use color.formatHex.
  formatHex: Ys,
  formatHex8: cd,
  formatRgb: qs,
  toString: qs
}));
function Ys() {
  return `#${Kt(this.r)}${Kt(this.g)}${Kt(this.b)}`;
}
function cd() {
  return `#${Kt(this.r)}${Kt(this.g)}${Kt(this.b)}${Kt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function qs() {
  const e = tr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Zt(this.r)}, ${Zt(this.g)}, ${Zt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function tr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Zt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Kt(e) {
  return e = Zt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Xs(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ht(e, t, r, a);
}
function Qo(e) {
  if (e instanceof ht) return new ht(e.h, e.s, e.l, e.opacity);
  if (e instanceof Rn || (e = Ln(e)), !e) return new ht();
  if (e instanceof ht) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, s = Math.min(t, r, a), o = Math.max(t, r, a), i = NaN, l = o - s, d = (o + s) / 2;
  return l ? (t === o ? i = (r - a) / l + (r < a) * 6 : r === o ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= d < 0.5 ? o + s : 2 - o - s, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new ht(i, l, d, e.opacity);
}
function dd(e, t, r, a) {
  return arguments.length === 1 ? Qo(e) : new ht(e, t, r, a ?? 1);
}
function ht(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
ms(ht, dd, Jo(Rn, {
  brighter(e) {
    return e = e == null ? er : Math.pow(er, e), new ht(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? In : Math.pow(In, e), new ht(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - a;
    return new dt(
      ca(e >= 240 ? e - 240 : e + 120, s, a),
      ca(e, s, a),
      ca(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new ht(Ks(this.h), Vn(this.s), Vn(this.l), tr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = tr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ks(this.h)}, ${Vn(this.s) * 100}%, ${Vn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ks(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Vn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ca(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const gs = (e) => () => e;
function ud(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function fd(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function pd(e) {
  return (e = +e) == 1 ? ei : function(t, r) {
    return r - t ? fd(t, r, e) : gs(isNaN(t) ? r : t);
  };
}
function ei(e, t) {
  var r = t - e;
  return r ? ud(e, r) : gs(isNaN(e) ? t : e);
}
const Zs = (function e(t) {
  var r = pd(t);
  function a(s, o) {
    var i = r((s = Ia(s)).r, (o = Ia(o)).r), l = r(s.g, o.g), d = r(s.b, o.b), c = ei(s.opacity, o.opacity);
    return function(u) {
      return s.r = i(u), s.g = l(u), s.b = d(u), s.opacity = c(u), s + "";
    };
  }
  return a.gamma = e, a;
})(1);
function hd(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), s;
  return function(o) {
    for (s = 0; s < r; ++s) a[s] = e[s] * (1 - o) + t[s] * o;
    return a;
  };
}
function md(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function gd(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, s = new Array(a), o = new Array(r), i;
  for (i = 0; i < a; ++i) s[i] = xs(e[i], t[i]);
  for (; i < r; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) o[i] = s[i](l);
    return o;
  };
}
function xd(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function nr(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function bd(e, t) {
  var r = {}, a = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? r[s] = xs(e[s], t[s]) : a[s] = t[s];
  return function(o) {
    for (s in r) a[s] = r[s](o);
    return a;
  };
}
var Ma = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, da = new RegExp(Ma.source, "g");
function yd(e) {
  return function() {
    return e;
  };
}
function vd(e) {
  return function(t) {
    return e(t) + "";
  };
}
function _d(e, t) {
  var r = Ma.lastIndex = da.lastIndex = 0, a, s, o, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (a = Ma.exec(e)) && (s = da.exec(t)); )
    (o = s.index) > r && (o = t.slice(r, o), l[i] ? l[i] += o : l[++i] = o), (a = a[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, d.push({ i, x: nr(a, s) })), r = da.lastIndex;
  return r < t.length && (o = t.slice(r), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? d[0] ? vd(d[0].x) : yd(t) : (t = d.length, function(c) {
    for (var u = 0, f; u < t; ++u) l[(f = d[u]).i] = f.x(c);
    return l.join("");
  });
}
function xs(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? gs(t) : (r === "number" ? nr : r === "string" ? (a = Ln(t)) ? (t = a, Zs) : _d : t instanceof Ln ? Zs : t instanceof Date ? xd : md(t) ? hd : Array.isArray(t) ? gd : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? bd : nr)(e, t);
}
function wd(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Sd(e) {
  return function() {
    return e;
  };
}
function kd(e) {
  return +e;
}
var Js = [0, 1];
function dn(e) {
  return e;
}
function La(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Sd(isNaN(t) ? NaN : 0.5);
}
function Cd(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function jd(e, t, r) {
  var a = e[0], s = e[1], o = t[0], i = t[1];
  return s < a ? (a = La(s, a), o = r(i, o)) : (a = La(a, s), o = r(o, i)), function(l) {
    return o(a(l));
  };
}
function Nd(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, s = new Array(a), o = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    s[i] = La(e[i], e[i + 1]), o[i] = r(t[i], t[i + 1]);
  return function(l) {
    var d = Uc(e, l, 1, a) - 1;
    return o[d](s[d](l));
  };
}
function ti(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Td() {
  var e = Js, t = Js, r = xs, a, s, o, i = dn, l, d, c;
  function u() {
    var m = Math.min(e.length, t.length);
    return i !== dn && (i = Cd(e[0], e[m - 1])), l = m > 2 ? Nd : jd, d = c = null, f;
  }
  function f(m) {
    return m == null || isNaN(m = +m) ? o : (d || (d = l(e.map(a), t, r)))(a(i(m)));
  }
  return f.invert = function(m) {
    return i(s((c || (c = l(t, e.map(a), nr)))(m)));
  }, f.domain = function(m) {
    return arguments.length ? (e = Array.from(m, kd), u()) : e.slice();
  }, f.range = function(m) {
    return arguments.length ? (t = Array.from(m), u()) : t.slice();
  }, f.rangeRound = function(m) {
    return t = Array.from(m), r = wd, u();
  }, f.clamp = function(m) {
    return arguments.length ? (i = m ? !0 : dn, u()) : i !== dn;
  }, f.interpolate = function(m) {
    return arguments.length ? (r = m, u()) : r;
  }, f.unknown = function(m) {
    return arguments.length ? (o = m, f) : o;
  }, function(m, y) {
    return a = m, s = y, u();
  };
}
function ni() {
  return Td()(dn, dn);
}
function Dd(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function rr(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, a = e.slice(0, r);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(r + 1)
  ];
}
function gn(e) {
  return e = rr(Math.abs(e)), e ? e[1] : NaN;
}
function $d(e, t) {
  return function(r, a) {
    for (var s = r.length, o = [], i = 0, l = e[0], d = 0; s > 0 && l > 0 && (d + l + 1 > a && (l = Math.max(1, a - d)), o.push(r.substring(s -= l, s + l)), !((d += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return o.reverse().join(t);
  };
}
function Id(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var Md = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ar(e) {
  if (!(t = Md.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new bs({
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
ar.prototype = bs.prototype;
function bs(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
bs.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ld(e) {
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
var ri;
function Fd(e, t) {
  var r = rr(e, t);
  if (!r) return e + "";
  var a = r[0], s = r[1], o = s - (ri = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, i = a.length;
  return o === i ? a : o > i ? a + new Array(o - i + 1).join("0") : o > 0 ? a.slice(0, o) + "." + a.slice(o) : "0." + new Array(1 - o).join("0") + rr(e, Math.max(0, t + o - 1))[0];
}
function Qs(e, t) {
  var r = rr(e, t);
  if (!r) return e + "";
  var a = r[0], s = r[1];
  return s < 0 ? "0." + new Array(-s).join("0") + a : a.length > s + 1 ? a.slice(0, s + 1) + "." + a.slice(s + 1) : a + new Array(s - a.length + 2).join("0");
}
const eo = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Dd,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Qs(e * 100, t),
  r: Qs,
  s: Fd,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function to(e) {
  return e;
}
var no = Array.prototype.map, ro = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Pd(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? to : $d(no.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? to : Id(no.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", d = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = ar(f);
    var m = f.fill, y = f.align, w = f.sign, v = f.symbol, p = f.zero, g = f.width, F = f.comma, I = f.precision, j = f.trim, P = f.type;
    P === "n" ? (F = !0, P = "g") : eo[P] || (I === void 0 && (I = 12), j = !0, P = "g"), (p || m === "0" && y === "=") && (p = !0, m = "0", y = "=");
    var D = v === "$" ? r : v === "#" && /[boxX]/.test(P) ? "0" + P.toLowerCase() : "", A = v === "$" ? a : /[%p]/.test(P) ? i : "", T = eo[P], _ = /[defgprs%]/.test(P);
    I = I === void 0 ? 6 : /[gprs]/.test(P) ? Math.max(1, Math.min(21, I)) : Math.max(0, Math.min(20, I));
    function C(k) {
      var h = D, M = A, N, b, S;
      if (P === "c")
        M = T(k) + M, k = "";
      else {
        k = +k;
        var $ = k < 0 || 1 / k < 0;
        if (k = isNaN(k) ? d : T(Math.abs(k), I), j && (k = Ld(k)), $ && +k == 0 && w !== "+" && ($ = !1), h = ($ ? w === "(" ? w : l : w === "-" || w === "(" ? "" : w) + h, M = (P === "s" ? ro[8 + ri / 3] : "") + M + ($ && w === "(" ? ")" : ""), _) {
          for (N = -1, b = k.length; ++N < b; )
            if (S = k.charCodeAt(N), 48 > S || S > 57) {
              M = (S === 46 ? s + k.slice(N + 1) : k.slice(N)) + M, k = k.slice(0, N);
              break;
            }
        }
      }
      F && !p && (k = t(k, 1 / 0));
      var te = h.length + k.length + M.length, U = te < g ? new Array(g - te + 1).join(m) : "";
      switch (F && p && (k = t(U + k, U.length ? g - M.length : 1 / 0), U = ""), y) {
        case "<":
          k = h + k + M + U;
          break;
        case "=":
          k = h + U + k + M;
          break;
        case "^":
          k = U.slice(0, te = U.length >> 1) + h + k + M + U.slice(te);
          break;
        default:
          k = U + h + k + M;
          break;
      }
      return o(k);
    }
    return C.toString = function() {
      return f + "";
    }, C;
  }
  function u(f, m) {
    var y = c((f = ar(f), f.type = "f", f)), w = Math.max(-8, Math.min(8, Math.floor(gn(m) / 3))) * 3, v = Math.pow(10, -w), p = ro[8 + w / 3];
    return function(g) {
      return y(v * g) + p;
    };
  }
  return {
    format: c,
    formatPrefix: u
  };
}
var Yn, ai, si;
Ed({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ed(e) {
  return Yn = Pd(e), ai = Yn.format, si = Yn.formatPrefix, Yn;
}
function Ad(e) {
  return Math.max(0, -gn(Math.abs(e)));
}
function Rd(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(gn(t) / 3))) * 3 - gn(Math.abs(e)));
}
function Bd(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, gn(t) - gn(e)) + 1;
}
function Hd(e, t, r, a) {
  var s = $a(e, t, r), o;
  switch (a = ar(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(o = Rd(s, i)) && (a.precision = o), si(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(o = Bd(s, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = o - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(o = Ad(s)) && (a.precision = o - (a.type === "%") * 2);
      break;
    }
  }
  return ai(a);
}
function zd(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var a = t();
    return Zc(a[0], a[a.length - 1], r ?? 10);
  }, e.tickFormat = function(r, a) {
    var s = t();
    return Hd(s[0], s[s.length - 1], r ?? 10, a);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var a = t(), s = 0, o = a.length - 1, i = a[s], l = a[o], d, c, u = 10;
    for (l < i && (c = i, i = l, l = c, c = s, s = o, o = c); u-- > 0; ) {
      if (c = Da(i, l, r), c === d)
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
function sr() {
  var e = ni();
  return e.copy = function() {
    return ti(e, sr());
  }, Or.apply(e, arguments), zd(e);
}
function Wd(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, s = e[r], o = e[a], i;
  return o < s && (i = r, r = a, a = i, i = s, s = o, o = i), e[r] = t.floor(s), e[a] = t.ceil(o), e;
}
const ua = /* @__PURE__ */ new Date(), fa = /* @__PURE__ */ new Date();
function et(e, t, r, a) {
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
  }, s.filter = (o) => et((i) => {
    if (i >= i) for (; e(i), !o(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !o(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !o(i); )
          ;
  }), r && (s.count = (o, i) => (ua.setTime(+o), fa.setTime(+i), e(ua), e(fa), Math.floor(r(ua, fa))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(a ? (i) => a(i) % o === 0 : (i) => s.count(0, i) % o === 0) : s)), s;
}
const or = et(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
or.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? et((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : or);
or.range;
const Pt = 1e3, pt = Pt * 60, Et = pt * 60, Rt = Et * 24, ys = Rt * 7, ao = Rt * 30, pa = Rt * 365, un = et((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Pt);
}, (e, t) => (t - e) / Pt, (e) => e.getUTCSeconds());
un.range;
const vs = et((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Pt);
}, (e, t) => {
  e.setTime(+e + t * pt);
}, (e, t) => (t - e) / pt, (e) => e.getMinutes());
vs.range;
const Od = et((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * pt);
}, (e, t) => (t - e) / pt, (e) => e.getUTCMinutes());
Od.range;
const _s = et((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Pt - e.getMinutes() * pt);
}, (e, t) => {
  e.setTime(+e + t * Et);
}, (e, t) => (t - e) / Et, (e) => e.getHours());
_s.range;
const Ud = et((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Et);
}, (e, t) => (t - e) / Et, (e) => e.getUTCHours());
Ud.range;
const Bn = et(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * pt) / Rt,
  (e) => e.getDate() - 1
);
Bn.range;
const ws = et((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Rt, (e) => e.getUTCDate() - 1);
ws.range;
const Gd = et((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Rt, (e) => Math.floor(e / Rt));
Gd.range;
function tn(e) {
  return et((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * pt) / ys);
}
const Ur = tn(0), ir = tn(1), Vd = tn(2), Yd = tn(3), xn = tn(4), qd = tn(5), Xd = tn(6);
Ur.range;
ir.range;
Vd.range;
Yd.range;
xn.range;
qd.range;
Xd.range;
function nn(e) {
  return et((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / ys);
}
const oi = nn(0), lr = nn(1), Kd = nn(2), Zd = nn(3), bn = nn(4), Jd = nn(5), Qd = nn(6);
oi.range;
lr.range;
Kd.range;
Zd.range;
bn.range;
Jd.range;
Qd.range;
const Fn = et((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Fn.range;
const eu = et((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
eu.range;
const Bt = et((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Bt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : et((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Bt.range;
const Qt = et((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Qt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : et((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Qt.range;
function tu(e, t, r, a, s, o) {
  const i = [
    [un, 1, Pt],
    [un, 5, 5 * Pt],
    [un, 15, 15 * Pt],
    [un, 30, 30 * Pt],
    [o, 1, pt],
    [o, 5, 5 * pt],
    [o, 15, 15 * pt],
    [o, 30, 30 * pt],
    [s, 1, Et],
    [s, 3, 3 * Et],
    [s, 6, 6 * Et],
    [s, 12, 12 * Et],
    [a, 1, Rt],
    [a, 2, 2 * Rt],
    [r, 1, ys],
    [t, 1, ao],
    [t, 3, 3 * ao],
    [e, 1, pa]
  ];
  function l(c, u, f) {
    const m = u < c;
    m && ([c, u] = [u, c]);
    const y = f && typeof f.range == "function" ? f : d(c, u, f), w = y ? y.range(c, +u + 1) : [];
    return m ? w.reverse() : w;
  }
  function d(c, u, f) {
    const m = Math.abs(u - c) / f, y = hs(([, , p]) => p).right(i, m);
    if (y === i.length) return e.every($a(c / pa, u / pa, f));
    if (y === 0) return or.every(Math.max($a(c, u, f), 1));
    const [w, v] = i[m / i[y - 1][2] < i[y][2] / m ? y - 1 : y];
    return w.every(v);
  }
  return [l, d];
}
const [nu, ru] = tu(Bt, Fn, Ur, Bn, _s, vs);
function ha(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ma(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function kn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function au(e) {
  var t = e.dateTime, r = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = Cn(s), u = jn(s), f = Cn(o), m = jn(o), y = Cn(i), w = jn(i), v = Cn(l), p = jn(l), g = Cn(d), F = jn(d), I = {
    a: $,
    A: te,
    b: U,
    B: R,
    c: null,
    d: uo,
    e: uo,
    f: Nu,
    g: Au,
    G: Bu,
    H: ku,
    I: Cu,
    j: ju,
    L: ii,
    m: Tu,
    M: Du,
    p: W,
    q: B,
    Q: ho,
    s: mo,
    S: $u,
    u: Iu,
    U: Mu,
    V: Lu,
    w: Fu,
    W: Pu,
    x: null,
    X: null,
    y: Eu,
    Y: Ru,
    Z: Hu,
    "%": po
  }, j = {
    a: ae,
    A: z,
    b: fe,
    B: ve,
    c: null,
    d: fo,
    e: fo,
    f: Uu,
    g: ef,
    G: nf,
    H: zu,
    I: Wu,
    j: Ou,
    L: ci,
    m: Gu,
    M: Vu,
    p: le,
    q: ue,
    Q: ho,
    s: mo,
    S: Yu,
    u: qu,
    U: Xu,
    V: Ku,
    w: Zu,
    W: Ju,
    x: null,
    X: null,
    y: Qu,
    Y: tf,
    Z: rf,
    "%": po
  }, P = {
    a: C,
    A: k,
    b: h,
    B: M,
    c: N,
    d: lo,
    e: lo,
    f: vu,
    g: io,
    G: oo,
    H: co,
    I: co,
    j: gu,
    L: yu,
    m: mu,
    M: xu,
    p: _,
    q: hu,
    Q: wu,
    s: Su,
    S: bu,
    u: cu,
    U: du,
    V: uu,
    w: lu,
    W: fu,
    x: b,
    X: S,
    y: io,
    Y: oo,
    Z: pu,
    "%": _u
  };
  I.x = D(r, I), I.X = D(a, I), I.c = D(t, I), j.x = D(r, j), j.X = D(a, j), j.c = D(t, j);
  function D(J, ee) {
    return function(de) {
      var x = [], E = -1, H = 0, Z = J.length, V, ne, he;
      for (de instanceof Date || (de = /* @__PURE__ */ new Date(+de)); ++E < Z; )
        J.charCodeAt(E) === 37 && (x.push(J.slice(H, E)), (ne = so[V = J.charAt(++E)]) != null ? V = J.charAt(++E) : ne = V === "e" ? " " : "0", (he = ee[V]) && (V = he(de, ne)), x.push(V), H = E + 1);
      return x.push(J.slice(H, E)), x.join("");
    };
  }
  function A(J, ee) {
    return function(de) {
      var x = kn(1900, void 0, 1), E = T(x, J, de += "", 0), H, Z;
      if (E != de.length) return null;
      if ("Q" in x) return new Date(x.Q);
      if ("s" in x) return new Date(x.s * 1e3 + ("L" in x ? x.L : 0));
      if (ee && !("Z" in x) && (x.Z = 0), "p" in x && (x.H = x.H % 12 + x.p * 12), x.m === void 0 && (x.m = "q" in x ? x.q : 0), "V" in x) {
        if (x.V < 1 || x.V > 53) return null;
        "w" in x || (x.w = 1), "Z" in x ? (H = ma(kn(x.y, 0, 1)), Z = H.getUTCDay(), H = Z > 4 || Z === 0 ? lr.ceil(H) : lr(H), H = ws.offset(H, (x.V - 1) * 7), x.y = H.getUTCFullYear(), x.m = H.getUTCMonth(), x.d = H.getUTCDate() + (x.w + 6) % 7) : (H = ha(kn(x.y, 0, 1)), Z = H.getDay(), H = Z > 4 || Z === 0 ? ir.ceil(H) : ir(H), H = Bn.offset(H, (x.V - 1) * 7), x.y = H.getFullYear(), x.m = H.getMonth(), x.d = H.getDate() + (x.w + 6) % 7);
      } else ("W" in x || "U" in x) && ("w" in x || (x.w = "u" in x ? x.u % 7 : "W" in x ? 1 : 0), Z = "Z" in x ? ma(kn(x.y, 0, 1)).getUTCDay() : ha(kn(x.y, 0, 1)).getDay(), x.m = 0, x.d = "W" in x ? (x.w + 6) % 7 + x.W * 7 - (Z + 5) % 7 : x.w + x.U * 7 - (Z + 6) % 7);
      return "Z" in x ? (x.H += x.Z / 100 | 0, x.M += x.Z % 100, ma(x)) : ha(x);
    };
  }
  function T(J, ee, de, x) {
    for (var E = 0, H = ee.length, Z = de.length, V, ne; E < H; ) {
      if (x >= Z) return -1;
      if (V = ee.charCodeAt(E++), V === 37) {
        if (V = ee.charAt(E++), ne = P[V in so ? ee.charAt(E++) : V], !ne || (x = ne(J, de, x)) < 0) return -1;
      } else if (V != de.charCodeAt(x++))
        return -1;
    }
    return x;
  }
  function _(J, ee, de) {
    var x = c.exec(ee.slice(de));
    return x ? (J.p = u.get(x[0].toLowerCase()), de + x[0].length) : -1;
  }
  function C(J, ee, de) {
    var x = y.exec(ee.slice(de));
    return x ? (J.w = w.get(x[0].toLowerCase()), de + x[0].length) : -1;
  }
  function k(J, ee, de) {
    var x = f.exec(ee.slice(de));
    return x ? (J.w = m.get(x[0].toLowerCase()), de + x[0].length) : -1;
  }
  function h(J, ee, de) {
    var x = g.exec(ee.slice(de));
    return x ? (J.m = F.get(x[0].toLowerCase()), de + x[0].length) : -1;
  }
  function M(J, ee, de) {
    var x = v.exec(ee.slice(de));
    return x ? (J.m = p.get(x[0].toLowerCase()), de + x[0].length) : -1;
  }
  function N(J, ee, de) {
    return T(J, t, ee, de);
  }
  function b(J, ee, de) {
    return T(J, r, ee, de);
  }
  function S(J, ee, de) {
    return T(J, a, ee, de);
  }
  function $(J) {
    return i[J.getDay()];
  }
  function te(J) {
    return o[J.getDay()];
  }
  function U(J) {
    return d[J.getMonth()];
  }
  function R(J) {
    return l[J.getMonth()];
  }
  function W(J) {
    return s[+(J.getHours() >= 12)];
  }
  function B(J) {
    return 1 + ~~(J.getMonth() / 3);
  }
  function ae(J) {
    return i[J.getUTCDay()];
  }
  function z(J) {
    return o[J.getUTCDay()];
  }
  function fe(J) {
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
      var ee = D(J += "", I);
      return ee.toString = function() {
        return J;
      }, ee;
    },
    parse: function(J) {
      var ee = A(J += "", !1);
      return ee.toString = function() {
        return J;
      }, ee;
    },
    utcFormat: function(J) {
      var ee = D(J += "", j);
      return ee.toString = function() {
        return J;
      }, ee;
    },
    utcParse: function(J) {
      var ee = A(J += "", !0);
      return ee.toString = function() {
        return J;
      }, ee;
    }
  };
}
var so = { "-": "", _: " ", 0: "0" }, rt = /^\s*\d+/, su = /^%/, ou = /[\\^$*+?|[\]().{}]/g;
function Re(e, t, r) {
  var a = e < 0 ? "-" : "", s = (a ? -e : e) + "", o = s.length;
  return a + (o < r ? new Array(r - o + 1).join(t) + s : s);
}
function iu(e) {
  return e.replace(ou, "\\$&");
}
function Cn(e) {
  return new RegExp("^(?:" + e.map(iu).join("|") + ")", "i");
}
function jn(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function lu(e, t, r) {
  var a = rt.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function cu(e, t, r) {
  var a = rt.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function du(e, t, r) {
  var a = rt.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function uu(e, t, r) {
  var a = rt.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function fu(e, t, r) {
  var a = rt.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function oo(e, t, r) {
  var a = rt.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function io(e, t, r) {
  var a = rt.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function pu(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function hu(e, t, r) {
  var a = rt.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function mu(e, t, r) {
  var a = rt.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function lo(e, t, r) {
  var a = rt.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function gu(e, t, r) {
  var a = rt.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function co(e, t, r) {
  var a = rt.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function xu(e, t, r) {
  var a = rt.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function bu(e, t, r) {
  var a = rt.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function yu(e, t, r) {
  var a = rt.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function vu(e, t, r) {
  var a = rt.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function _u(e, t, r) {
  var a = su.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function wu(e, t, r) {
  var a = rt.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Su(e, t, r) {
  var a = rt.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function uo(e, t) {
  return Re(e.getDate(), t, 2);
}
function ku(e, t) {
  return Re(e.getHours(), t, 2);
}
function Cu(e, t) {
  return Re(e.getHours() % 12 || 12, t, 2);
}
function ju(e, t) {
  return Re(1 + Bn.count(Bt(e), e), t, 3);
}
function ii(e, t) {
  return Re(e.getMilliseconds(), t, 3);
}
function Nu(e, t) {
  return ii(e, t) + "000";
}
function Tu(e, t) {
  return Re(e.getMonth() + 1, t, 2);
}
function Du(e, t) {
  return Re(e.getMinutes(), t, 2);
}
function $u(e, t) {
  return Re(e.getSeconds(), t, 2);
}
function Iu(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Mu(e, t) {
  return Re(Ur.count(Bt(e) - 1, e), t, 2);
}
function li(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? xn(e) : xn.ceil(e);
}
function Lu(e, t) {
  return e = li(e), Re(xn.count(Bt(e), e) + (Bt(e).getDay() === 4), t, 2);
}
function Fu(e) {
  return e.getDay();
}
function Pu(e, t) {
  return Re(ir.count(Bt(e) - 1, e), t, 2);
}
function Eu(e, t) {
  return Re(e.getFullYear() % 100, t, 2);
}
function Au(e, t) {
  return e = li(e), Re(e.getFullYear() % 100, t, 2);
}
function Ru(e, t) {
  return Re(e.getFullYear() % 1e4, t, 4);
}
function Bu(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? xn(e) : xn.ceil(e), Re(e.getFullYear() % 1e4, t, 4);
}
function Hu(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Re(t / 60 | 0, "0", 2) + Re(t % 60, "0", 2);
}
function fo(e, t) {
  return Re(e.getUTCDate(), t, 2);
}
function zu(e, t) {
  return Re(e.getUTCHours(), t, 2);
}
function Wu(e, t) {
  return Re(e.getUTCHours() % 12 || 12, t, 2);
}
function Ou(e, t) {
  return Re(1 + ws.count(Qt(e), e), t, 3);
}
function ci(e, t) {
  return Re(e.getUTCMilliseconds(), t, 3);
}
function Uu(e, t) {
  return ci(e, t) + "000";
}
function Gu(e, t) {
  return Re(e.getUTCMonth() + 1, t, 2);
}
function Vu(e, t) {
  return Re(e.getUTCMinutes(), t, 2);
}
function Yu(e, t) {
  return Re(e.getUTCSeconds(), t, 2);
}
function qu(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Xu(e, t) {
  return Re(oi.count(Qt(e) - 1, e), t, 2);
}
function di(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? bn(e) : bn.ceil(e);
}
function Ku(e, t) {
  return e = di(e), Re(bn.count(Qt(e), e) + (Qt(e).getUTCDay() === 4), t, 2);
}
function Zu(e) {
  return e.getUTCDay();
}
function Ju(e, t) {
  return Re(lr.count(Qt(e) - 1, e), t, 2);
}
function Qu(e, t) {
  return Re(e.getUTCFullYear() % 100, t, 2);
}
function ef(e, t) {
  return e = di(e), Re(e.getUTCFullYear() % 100, t, 2);
}
function tf(e, t) {
  return Re(e.getUTCFullYear() % 1e4, t, 4);
}
function nf(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? bn(e) : bn.ceil(e), Re(e.getUTCFullYear() % 1e4, t, 4);
}
function rf() {
  return "+0000";
}
function po() {
  return "%";
}
function ho(e) {
  return +e;
}
function mo(e) {
  return Math.floor(+e / 1e3);
}
var on, ui;
af({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function af(e) {
  return on = au(e), ui = on.format, on.parse, on.utcFormat, on.utcParse, on;
}
function sf(e) {
  return new Date(e);
}
function of(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function fi(e, t, r, a, s, o, i, l, d, c) {
  var u = ni(), f = u.invert, m = u.domain, y = c(".%L"), w = c(":%S"), v = c("%I:%M"), p = c("%I %p"), g = c("%a %d"), F = c("%b %d"), I = c("%B"), j = c("%Y");
  function P(D) {
    return (d(D) < D ? y : l(D) < D ? w : i(D) < D ? v : o(D) < D ? p : a(D) < D ? s(D) < D ? g : F : r(D) < D ? I : j)(D);
  }
  return u.invert = function(D) {
    return new Date(f(D));
  }, u.domain = function(D) {
    return arguments.length ? m(Array.from(D, of)) : m().map(sf);
  }, u.ticks = function(D) {
    var A = m();
    return e(A[0], A[A.length - 1], D ?? 10);
  }, u.tickFormat = function(D, A) {
    return A == null ? P : c(A);
  }, u.nice = function(D) {
    var A = m();
    return (!D || typeof D.range != "function") && (D = t(A[0], A[A.length - 1], D ?? 10)), D ? m(Wd(A, D)) : u;
  }, u.copy = function() {
    return ti(u, fi(e, t, r, a, s, o, i, l, d, c));
  }, u;
}
function Ss() {
  return Or.apply(fi(nu, ru, Bt, Fn, Ur, Bn, _s, vs, un, ui).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function lf({
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
  const c = Ee(null), [u, f] = Le(!1), [m, y] = Le(!1), w = t(e.start), v = t(e.end), p = Math.max(v - w, 20), g = () => {
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
  }, F = e.progress ? p * e.progress / 100 : 0, I = () => {
    r?.(e);
  }, j = () => {
    a?.(e);
  }, P = (h) => {
    h.key === "Enter" ? (h.preventDefault(), I()) : h.key === " " && (h.preventDefault(), j());
  }, D = () => {
    f(!0);
  }, A = () => {
    f(!1);
  }, T = () => {
    y(!0), l?.();
  }, _ = () => {
    y(!1);
  }, C = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (m || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), k = {
    "--task-left": `${w}px`,
    "--task-width": `${p}px`,
    "--task-color": g(),
    left: `${w}px`,
    width: `${p}px`,
    backgroundColor: g()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": o,
      className: C,
      style: k,
      onClick: I,
      onDoubleClick: j,
      onKeyDown: P,
      onMouseDown: D,
      onMouseUp: A,
      onFocus: T,
      onBlur: _,
      "aria-label": d || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${F}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function cf({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let y = e.getTime(); y <= t.getTime(); y += 864e5)
    a.push(new Date(y));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = Le(-1), d = Ee(null), c = (y) => {
    if (y.key === "ArrowLeft") {
      y.preventDefault();
      const w = Math.max(0, i === -1 ? 0 : i - 1);
      l(w), m(w);
    } else if (y.key === "ArrowRight") {
      y.preventDefault();
      const w = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(w), m(w);
    } else if (y.key === "ArrowDown") {
      y.preventDefault();
      const w = document.querySelector(".gantt-row .timeline-container");
      w && w.focus();
    } else if (y.key === "Home")
      y.preventDefault(), l(0), m(0);
    else if (y.key === "End") {
      y.preventDefault();
      const w = a.length - 1;
      l(w), m(w);
    }
  }, u = (y) => {
    if (y.key === "ArrowDown") {
      y.preventDefault();
      const w = document.querySelector(".gantt-row .resource-label");
      w && w.focus();
    } else if (y.key === "ArrowRight") {
      y.preventDefault();
      const w = d.current;
      w && w.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => m(0), 0));
  }, m = (y) => {
    const w = d.current?.querySelector(`[data-date-index="${y}"]`);
    w && w.focus();
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
            onFocus: f,
            children: a.map((y, w) => {
              const v = y.getTime() === o.getTime(), p = i === w;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": w,
                  className: `date-column ${v ? "today" : ""} ${p ? "focused" : ""}`,
                  tabIndex: p ? 0 : -1,
                  role: "button",
                  "aria-label": `${y.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${v ? " (Today)" : ""}`,
                  onFocus: () => l(w),
                  onKeyDown: c,
                  children: y.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                w
              );
            })
          }
        )
      ]
    }
  );
}
function df({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, d] = Le(!1), [c, u] = Le(-1), f = Ee(null);
  ze(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
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
          v.preventDefault(), f.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
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
        const p = Math.max(0, c - 1);
        u(p), f.current?.querySelector(`[data-task-index="${p}"]`)?.focus();
        break;
      case "ArrowRight":
        v.preventDefault();
        const F = Math.min(t.length - 1, c + 1);
        u(F), f.current?.querySelector(`[data-task-index="${F}"]`)?.focus();
        break;
      case "Enter":
        v.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        v.preventDefault(), c >= 0 && s?.(t[c]);
        break;
      case "Escape":
        v.preventDefault(), d(!1), u(-1), f.current?.focus();
        break;
    }
  }, y = (v) => {
    switch (v.key) {
      case "ArrowUp":
        v.preventDefault(), o === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        v.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        v.preventDefault(), f.current?.focus();
        break;
    }
  }, w = (v) => {
    l && u(v);
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
            onKeyDown: y,
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
            onKeyDown: m,
            onFocus: () => {
              l || u(-1);
            },
            children: t.map((v, p) => /* @__PURE__ */ n.jsx(
              lf,
              {
                task: v,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && c === p,
                taskIndex: p,
                tabIndex: l && c === p ? 0 : -1,
                onFocus: () => w(p)
              },
              v.id
            ))
          }
        )
      ]
    }
  );
}
function Wx({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: s,
  onTaskDoubleClick: o
}) {
  const i = Ee(null), [l, d] = Le(800), c = Me(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const v = new Date(r);
    return isNaN(v.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : v;
  }, [r]), u = Me(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const v = new Date(a);
    return isNaN(v.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : v;
  }, [a]), f = Me(() => Math.ceil((u.getTime() - c.getTime()) / 864e5) + 1, [c, u]);
  ze(() => {
    if (!i.current) return;
    const v = new ResizeObserver((p) => {
      const g = p[0];
      g && d(Math.max(g.contentRect.width - 220, 400));
    });
    return v.observe(i.current), () => v.disconnect();
  }, []);
  const m = Me(
    () => Ss().domain([c, u]).range([0, l]),
    [c, u, l]
  ), y = Me(() => {
    const v = /* @__PURE__ */ new Map();
    return t.forEach((p) => {
      const g = v.get(p.resourceId) || [];
      g.push(p), v.set(p.resourceId, g);
    }), v;
  }, [t]), w = (v) => {
    if (v.target === v.currentTarget)
      switch (v.key) {
        case "ArrowDown":
          v.preventDefault();
          const p = i.current?.querySelector(".gantt-row .resource-label");
          p && p.focus();
          break;
        case "Home":
          v.preventDefault();
          const g = i.current?.querySelector(".header-resource");
          g && g.focus();
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
      onKeyDown: w,
      children: [
        /* @__PURE__ */ n.jsx(cf, { viewStart: c, viewEnd: u, dateCount: f }),
        /* @__PURE__ */ n.jsx(
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
            children: e.map((v, p) => /* @__PURE__ */ n.jsx(
              df,
              {
                resource: v,
                tasks: y.get(v.id) || [],
                scale: m,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: p,
                dateCount: f
              },
              v.id
            ))
          }
        )
      ]
    }
  );
}
const cr = ({
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
) }), uf = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: s,
  text: o,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const d = () => t ? ut.Children.toArray(t).filter(
    (p) => ut.isValidElement(p) && (p.type === cr || p.type?.displayName === "BreadcrumbItem")
  ).map((p) => ({
    text: typeof p.props.children == "string" ? p.props.children : String(p.props.children),
    href: p.props.href,
    active: p.props.active,
    attributes: p.props.attributes
  })) : [], c = () => t ? d() : s && o ? [{ href: s, text: o }] : e, u = () => {
    const v = c();
    if (v && v.length > 0) {
      const p = v.slice().reverse().find((g) => g.href && !g.active);
      if (p)
        return { href: p.href, text: p.text };
    }
    return { text: "Home" };
  }, f = c(), m = u(), y = be(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), w = a;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: y,
      "aria-label": w,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          ut.Children.map(t, (v, p) => ut.isValidElement(v) && (v.type === cr || v.type?.displayName === "BreadcrumbItem") ? ut.cloneElement(v, { key: p }) : null)
        ) : (
          // Render from items array
          f?.filter((v) => v.active || !!v.href).map((v, p) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: v.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...v.attributes || {},
              children: v.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: v.href,
              role: "link",
              ...v.attributes || {},
              children: v.text
            }
          ) }, p))
        ) }),
        m.href && /* @__PURE__ */ n.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ n.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: m.href,
            role: "link",
            "aria-label": `Back to ${m.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              m.text
            ]
          }
        ) })
      ]
    }
  );
}, ff = uf;
ff.Item = cr;
cr.displayName = "BreadcrumbItem";
const pi = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [s, o] = Le(!1);
  ze(() => {
    o(!0);
  }, []), ze(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (d) => {
      const c = d.target, u = c.getAttribute("href");
      if (u && u.startsWith("#")) {
        const f = document.querySelector(u);
        if (f) {
          f.hasAttribute("tabindex") || f.setAttribute("tabindex", "-1"), f.focus(), f.classList.add("nhsuk-skip-link-focused-element");
          const m = window.setTimeout(() => {
            f.classList.remove("nhsuk-skip-link-focused-element"), f.getAttribute("tabindex") === "-1" && f.removeAttribute("tabindex");
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
  const i = be("nhsuk-skip-link", r);
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
}, Ox = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: s,
  attributes: o = {}
}) => {
  const i = be("nhsuk-pagination", s);
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
}, Ux = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const s = be("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, hi = ut.forwardRef(({
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
}, f) => {
  const m = [
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
  ].filter(Boolean).join(" "), w = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), v = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const F = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      At,
      {
        level: a,
        className: w,
        children: F()
      }
    );
  }, p = () => u.children ? u.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: o }) : null, g = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      className: m,
      ref: f,
      children: [
        d && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: d,
            alt: c || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: y, children: [
          v(),
          p(),
          g()
        ] })
      ]
    }
  );
});
hi.displayName = "Card";
const Gx = ({
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
}, Vx = ({
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
}, Yx = ({
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
  "aria-label": f,
  "aria-labelledby": m,
  "aria-describedby": y
}) => {
  const w = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), v = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), p = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const F = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], I = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        F,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      At,
      {
        level: a,
        className: v,
        children: I
      }
    );
  }, g = () => d || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: w,
      "data-testid": c,
      id: u,
      "aria-label": f,
      "aria-labelledby": m,
      "aria-describedby": y,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          p(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: g() })
      ]
    }
  );
}, pf = ({
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
  const c = be(
    "nhsuk-panel",
    t
  ), u = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    At,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    At,
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
  ) : o ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ n.jsx("p", { children: o }) }) : null;
  return /* @__PURE__ */ n.jsxs("div", { className: c, id: e, ...d, children: [
    u(),
    f()
  ] });
}, qx = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...s
}) => {
  const o = be("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: o, ...s, children: i() });
}, Xx = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const s = be(
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
}, Nn = { current: null }, hf = () => {
  if (Nn.current) return Nn.current;
  try {
    Nn.current = require("prismjs");
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
    Nn.current = null;
  }
  return Nn.current;
}, mf = (e) => {
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
}, dr = (e, t, r) => {
  if (r || !t) return e;
  const a = hf();
  if (a && a.languages) {
    const s = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (s)
      try {
        return a.highlight(e, a.languages[s], s);
      } catch {
      }
  }
  return mf(e);
}, gf = ({
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
  classes: f,
  attributes: m,
  "data-testid": y,
  columns: w,
  data: v,
  visuallyHiddenCaption: p = !1
}) => {
  const g = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), F = be(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    u
  ), I = be(f), j = (_, C) => {
    const k = be(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${_.format}`]: _.format
      },
      _.classes
    ), h = {
      scope: "col",
      ..._.colspan && { colSpan: _.colspan },
      ..._.rowspan && { rowSpan: _.rowspan },
      ...o && { role: "columnheader" },
      ..._.attributes
    };
    let M;
    if (_.node != null)
      M = /* @__PURE__ */ n.jsx(n.Fragment, { children: _.node });
    else if (_.html)
      M = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } });
    else if (_.code != null) {
      const N = Array.isArray(_.code), b = N ? _.code.join(`
`) : _.code, S = N || b.includes(`
`), $ = {
        className: be("nhsuk-table__code", _.codeClassName, {
          "nhsuk-table__code--block": S,
          "nhsuk-table__code--inline": !S
        }),
        ..._.codeLanguage ? { "data-language": _.codeLanguage } : {}
      }, te = dr(b, _.codeLanguage);
      M = S ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
        "code",
        {
          ...$,
          dangerouslySetInnerHTML: { __html: te }
        }
      ) }) : /* @__PURE__ */ n.jsx(
        "code",
        {
          ...$,
          dangerouslySetInnerHTML: { __html: te }
        }
      );
    } else
      M = _.text;
    return /* @__PURE__ */ n.jsx("th", { className: k, ...h, children: M }, C);
  }, P = (_, C, k) => {
    const h = s && k || _.rowHeader, M = be(
      h ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${h ? "header" : "cell"}--${_.format}`]: _.format
      },
      _.classes
    ), N = {
      ...h && { scope: "row" },
      ..._.colspan && { colSpan: _.colspan },
      ..._.rowspan && { rowSpan: _.rowspan },
      ...o && {
        role: h ? "rowheader" : "cell",
        ..._.header && { "data-label": _.header }
      },
      ..._.attributes
    };
    let b;
    if (_.node != null)
      b = /* @__PURE__ */ n.jsx(n.Fragment, { children: _.node });
    else if (_.html)
      b = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } });
    else if (_.code != null) {
      const te = Array.isArray(_.code), U = te ? _.code.join(`
`) : _.code, R = te || U.includes(`
`), W = {
        className: be("nhsuk-table__code", _.codeClassName, {
          "nhsuk-table__code--block": R,
          "nhsuk-table__code--inline": !R
        }),
        ..._.codeLanguage ? { "data-language": _.codeLanguage } : {}
      }, B = dr(
        U,
        _.codeLanguage,
        _.disableHighlight
      );
      b = R ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
        "code",
        {
          ...W,
          dangerouslySetInnerHTML: { __html: B }
        }
      ) }) : /* @__PURE__ */ n.jsx(
        "code",
        {
          ...W,
          dangerouslySetInnerHTML: { __html: B }
        }
      );
    } else
      b = _.text;
    const S = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      o && _.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        _.header,
        " "
      ] }),
      b
    ] }), $ = h ? "th" : "td";
    return /* @__PURE__ */ n.jsx($, { className: M, ...N, children: S }, C);
  };
  let D = t, A = e;
  !D && w && w.length && (D = w.map((_) => ({
    text: _.title,
    format: _.format,
    classes: _.headerClasses,
    attributes: _.headerAttributes
  }))), !A && w && v && v.length && (A = v.map((_, C) => w.map((k) => {
    const h = k.accessor ? k.accessor(_, C) : _[k.key];
    let M = { format: k.format, classes: k.cellClasses, attributes: k.cellAttributes };
    if (k.rowHeader && (M.rowHeader = !0), k.render) {
      const N = k.render(h, _, C, k);
      return N == null || typeof N == "boolean" ? { ...M, text: "" } : typeof N == "string" || typeof N == "number" ? { ...M, text: String(N) } : { ...M, ...N };
    }
    return { ...M, text: h != null ? String(h) : "" };
  })));
  const T = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: F,
      ...o && { role: "table" },
      ...m,
      ...y && { "data-testid": y },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: be(g, p && "nhsuk-u-visually-hidden"), children: r }),
        D && D.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...o && { role: "row" }, children: D.map(
              (_, C) => j(_, C)
            ) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: A && A.map((_, C) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: _.map(
              (k, h) => P(k, h, h === 0)
            )
          },
          C
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ n.jsxs(pf, { className: c, children: [
    i && /* @__PURE__ */ n.jsx(At, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    T()
  ] }) : I ? /* @__PURE__ */ n.jsx("div", { className: I, children: T() }) : T();
}, xf = ({
  children: e,
  size: t,
  className: r
}) => {
  const a = be(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    r
  );
  return /* @__PURE__ */ n.jsx("caption", { className: a, children: e });
}, mi = ({
  responsive: e,
  className: t,
  children: r,
  ...a
}) => {
  const s = e ? { role: "row" } : {};
  return /* @__PURE__ */ n.jsx("tr", { className: t, ...s, ...a, children: r });
}, gi = ({
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
  attributes: f,
  responsive: m,
  as: y = "th"
}) => {
  const w = be(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    d
  ), v = {
    scope: "col",
    ...c && { colSpan: c },
    ...u && { rowSpan: u },
    ...m && { role: "columnheader" },
    ...f
  };
  let p;
  if (r != null) p = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) p = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const F = Array.isArray(a), I = F ? a.join(`
`) : a, j = F || I.includes(`
`), P = {
      className: be("nhsuk-table__code", o, {
        "nhsuk-table__code--block": j,
        "nhsuk-table__code--inline": !j
      }),
      ...s ? { "data-language": s } : {}
    }, D = dr(
      I,
      s,
      i
    );
    p = j ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
      "code",
      {
        ...P,
        dangerouslySetInnerHTML: { __html: D }
      }
    ) }) : /* @__PURE__ */ n.jsx("code", { ...P, dangerouslySetInnerHTML: { __html: D } });
  } else p = e;
  const g = y;
  return /* @__PURE__ */ n.jsx(g, { className: w, ...v, children: p });
}, bf = ({
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
  attributes: f,
  responsive: m,
  rowHeader: y
}) => {
  const w = !!y, v = w ? "th" : "td", p = be(
    w ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${w ? "header" : "cell"}--${l}`,
    d
  ), g = {
    ...c && { colSpan: c },
    ...u && { rowSpan: u },
    ...w && { scope: "row" },
    ...m && { role: w ? "rowheader" : "cell" },
    ...f
  };
  let F;
  if (r != null) F = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) F = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const I = Array.isArray(a), j = I ? a.join(`
`) : a, P = I || j.includes(`
`), D = {
      className: be("nhsuk-table__code", o, {
        "nhsuk-table__code--block": P,
        "nhsuk-table__code--inline": !P
      }),
      ...s ? { "data-language": s } : {}
    }, A = dr(j, s, i);
    F = P ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx("code", { ...D, dangerouslySetInnerHTML: { __html: A } }) }) : /* @__PURE__ */ n.jsx("code", { ...D, dangerouslySetInnerHTML: { __html: A } });
  } else F = e;
  return /* @__PURE__ */ n.jsx(v, { className: p, ...g, children: F });
}, Ht = gf;
Ht.Caption = xf;
Ht.BodyRow = mi;
Ht.HeaderCell = gi;
Ht.Cell = bf;
let go = !1, xo = !1;
Object.defineProperty(Ht, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !go && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), go = !0), mi;
  }
});
Object.defineProperty(Ht, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !xo && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), xo = !0), gi;
  }
});
const Kx = yn(({
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
  ...f
}, m) => {
  const y = r !== void 0, [w, v] = Le(() => t || e[0]?.id || ""), p = y ? r : w, g = Ee(null), F = Ee(/* @__PURE__ */ new Map()), I = ge((C) => {
    y || v(C), a?.(C);
  }, [y, a]), j = ge((C) => {
    s?.(C), l && I(C);
  }, [s, l, I]), P = ge((C, k) => {
    const h = e.filter((b) => !b.disabled).map((b) => b.id), M = h.indexOf(k);
    let N = null;
    switch (C.key) {
      case "ArrowLeft":
        N = M > 0 ? M - 1 : h.length - 1;
        break;
      case "ArrowRight":
        N = M < h.length - 1 ? M + 1 : 0;
        break;
      case "Home":
        N = 0;
        break;
      case "End":
        N = h.length - 1;
        break;
      case "Escape":
        C.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (N !== null) {
      C.preventDefault();
      const b = h[N], S = F.current.get(b);
      S && (S.focus(), j(b));
    }
  }, [e, j, i]), D = ge((C, k) => {
    k ? F.current.set(C, k) : F.current.delete(C);
  }, []), A = ge((C) => {
    const k = F.current.get(C);
    k && k.focus();
  }, []);
  Ro(m, () => ({
    focusTab: A,
    getActiveTab: () => p,
    getTabListElement: () => g.current
  }), [A, p]);
  const T = ge((C) => {
    const k = C.relatedTarget;
    g.current?.contains(k) || o?.();
  }, [o]), _ = be("nhsuk-tabs", d);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: _,
      id: c,
      "data-testid": u,
      ...f,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: g,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: T,
                children: e.map((C) => {
                  const k = C.id === p, h = C.disabled, M = be("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": k,
                    "nhsuk-tabs__list-item--disabled": h
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: M, role: "presentation", children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (N) => D(C.id, N),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": k,
                      "aria-controls": `${C.id}-panel`,
                      id: `${C.id}-tab`,
                      tabIndex: k ? 0 : -1,
                      disabled: h,
                      onClick: () => !h && I(C.id),
                      onKeyDown: (N) => !h && P(N, C.id),
                      onFocus: () => !h && j(C.id),
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
          const k = C.id === p;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${C.id}-tab`,
              id: `${C.id}-panel`,
              hidden: !k,
              children: C.content
            },
            C.id
          );
        })
      ]
    }
  );
}), yf = yn(
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
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ n.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let m;
    return l ? m = l : a ? m = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (m = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: u,
        open: s,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
yf.displayName = "Details";
const vf = yn(
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
    ), f = (y) => t === "cross" && !a ? `do not ${y}` : y, m = () => /* @__PURE__ */ n.jsx(
      At,
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
          m(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: c.join(" "), role: "list", children: r.map((y, w) => /* @__PURE__ */ n.jsxs("li", { children: [
            u(),
            f(y.item)
          ] }, w)) }) })
        ]
      }
    );
  }
);
vf.displayName = "DoDontList";
const _f = yn(
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
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ n.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let m;
    return l ? m = l : a ? m = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (m = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: u,
        open: s,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
_f.displayName = "Expander";
const wf = yn(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, s) => {
    const o = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, d) => {
      const c = d + 1, u = `${t}-${c}-hint`, f = `${t}-${c}-status`, m = !!l.href, y = [
        "nhsuk-task-list__item",
        m && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), w = [
        l.hint && u,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Sf,
        {
          item: l,
          itemClasses: y,
          hasLink: m,
          hintId: u,
          statusId: f,
          ariaDescribedBy: w
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
), Sf = ({
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
    return e.status.tag ? u = /* @__PURE__ */ n.jsx(He, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ n.jsx("div", { className: c, id: s, children: u });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    d()
  ] });
};
wf.displayName = "TaskList";
const Zx = ({
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
        Ao(
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
}, Jx = ({
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
}, kf = ({
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
    /* @__PURE__ */ n.jsx(ot, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ n.jsx(ot, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ n.jsx(ot, { variant: "secondary", size: "small", onClick: r, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ n.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ n.jsx(
      Jn,
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
      Jn,
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
] }), Cf = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ n.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((r) => /* @__PURE__ */ n.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ n.jsx(He, { color: jf(r.status), text: r.label }) }, r.status)) });
function jf(e) {
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
const Qx = ({
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
  enableDefaultToolbar: f = !0,
  legendItems: m,
  enableDefaultLegend: y = !0,
  legendPlacement: w = "bottom",
  onA11yModeChange: v
}) => {
  const [p, g] = Le("grid"), F = i || p, [I, j] = Le(a || []), P = r ?? I, D = Me(() => {
    const N = /* @__PURE__ */ new Set();
    return e.forEach((b) => N.add(new Date(b.start).getTime())), Array.from(N).sort((b, S) => b - S);
  }, [e]), A = Me(() => {
    const N = {};
    return e.forEach((b) => {
      const S = new Date(b.start).getTime();
      N[S] || (N[S] = {});
      const $ = b.capacity - b.booked - (b.held || 0);
      N[S][b.sessionId] = { slot: b, remaining: $ };
    }), N;
  }, [e]), T = ge((N) => {
    if (o === "single") {
      const b = [N.id];
      r || j(b), s?.(b, { lastAction: "select" });
    } else {
      const b = P.includes(N.id), S = b ? P.filter(($) => $ !== N.id) : [...P, N.id];
      r || j(S), s?.(S, { lastAction: b ? "deselect" : "select" });
    }
  }, [o, P, r, s]), _ = Me(() => m || (y ? Array.from(new Set(e.map((b) => b.status))).map((b) => ({
    status: b,
    label: b.charAt(0).toUpperCase() + b.slice(1)
  })) : void 0), [m, y, e]), C = _ ? /* @__PURE__ */ n.jsx(
    Cf,
    {
      items: _,
      orientation: w === "left" || w === "right" ? "vertical" : "horizontal"
    }
  ) : null, k = (N) => {
    i || g(N), v?.(N);
  }, h = u || (f ? /* @__PURE__ */ n.jsx(
    kf,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: F,
      onA11yModeChange: k
    }
  ) : null), M = /* @__PURE__ */ n.jsx("div", { style: d, className: be(l), children: /* @__PURE__ */ n.jsx(Ta, { className: be("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(Jt, { children: /* @__PURE__ */ n.jsx($n, { width: "full", children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    h,
    w === "top" && C,
    /* @__PURE__ */ n.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((N) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => T(N), "aria-pressed": P.includes(N.id), children: [
      Tn(new Date(N.start)),
      " – ",
      Tn(new Date(N.end)),
      " (",
      N.status,
      ")"
    ] }) }, N.id)) }),
    w === "bottom" && C
  ] }) }) }) }) });
  return F === "list" ? M : /* @__PURE__ */ n.jsx("div", { style: d, className: be(l), children: /* @__PURE__ */ n.jsx(Ta, { className: be("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(Jt, { children: /* @__PURE__ */ n.jsx($n, { width: "full", children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    h,
    w === "top" && C,
    /* @__PURE__ */ n.jsxs("div", { role: "grid", "aria-rowcount": D.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((N) => /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": `Session ${N.specialty}`, className: "nhs-slot-matrix__session-header", children: N.specialty }, N.id))
      ] }),
      D.map((N) => /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Tn(new Date(N)), children: Tn(new Date(N)) }),
        t.map((b) => {
          const S = A[N]?.[b.id];
          if (!S)
            return /* @__PURE__ */ n.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, b.id);
          const { slot: $, remaining: te } = S, U = P.includes($.id), R = c ? c($) : `Slot ${Tn(new Date($.start))} ${$.status}${te === 0 ? " full" : ""}`;
          return /* @__PURE__ */ n.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": $.status,
              className: be("nhs-slot-matrix__cell", U && "nhs-slot-matrix__cell--selected"),
              "aria-label": R,
              "aria-selected": U || void 0,
              onClick: () => T($),
              children: te > 0 ? `${te} left` : "Full"
            },
            $.id
          );
        })
      ] }, N))
    ] }),
    w === "bottom" && C
  ] }) }) }) }) });
};
function bo(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Tn(e) {
  return `${bo(e.getHours())}:${bo(e.getMinutes())}`;
}
const Nf = ({
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
    /* @__PURE__ */ n.jsx(At, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, eb = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(Ta, { children: /* @__PURE__ */ n.jsx(Jt, { children: e.map((s, o) => /* @__PURE__ */ n.jsx(
    $n,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": o,
      children: /* @__PURE__ */ n.jsx(Nf, { ...s })
    },
    o
  )) }) }) });
}, Tf = ut.forwardRef(
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
    className: f,
    tableClassName: m,
    bordered: y = !1,
    striped: w = !1,
    responsive: v = !1,
    tableType: p = "default"
  }, g) => {
    const F = Ee(null), I = Ee(null), j = Ee(null);
    ut.useImperativeHandle(g, () => F.current, []);
    const [P, D] = Le(0), [A, T] = Le(0), [_, C] = Le("headers"), [k, h] = Le("browse"), M = t.length, N = e.length, b = Me(() => !r || r.length === 0 ? e : [...e].sort((B, ae) => {
      for (const { key: z, direction: fe } of r) {
        const ve = B[z], le = ae[z];
        if (ve == null && le == null) continue;
        if (ve == null) return 1;
        if (le == null) return -1;
        let ue = 0;
        if (typeof ve == "number" && typeof le == "number" ? ue = ve - le : ue = String(ve).localeCompare(String(le)), ue !== 0)
          return fe === "asc" ? ue : -ue;
      }
      return 0;
    }), [e, r]), S = ge((B, ae) => {
      setTimeout(() => {
        const z = F.current?.querySelector(
          `tbody tr:nth-child(${B + 1}) td:nth-child(${ae + 1})`
        );
        z && (z.focus(), typeof z.scrollIntoView == "function" && z.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), $ = ge((B) => {
      setTimeout(() => {
        const ae = F.current?.querySelector(`th:nth-child(${B + 1})`);
        ae && (ae.focus(), typeof ae.scrollIntoView == "function" && ae.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), te = ge((B) => {
      a?.(B);
    }, [a]), U = ge((B) => {
      o?.(B);
    }, [o]), R = ge((B) => {
      const { key: ae } = B;
      switch (ae) {
        case "Enter":
          if (B.preventDefault(), _ === "headers" && k === "browse")
            h("navigate"), $(A);
          else if (_ === "headers" && k === "navigate") {
            const z = t[A];
            z && te(z.key);
          } else _ === "cells" && k === "browse" ? (h("navigate"), S(P, A)) : _ === "cells" && k === "navigate" && U(P);
          break;
        case "Escape":
          B.preventDefault(), (_ === "headers" && k === "navigate" || _ === "cells" && k === "navigate") && h("browse");
          break;
        case "ArrowLeft":
          if (B.preventDefault(), k === "navigate" || k === "browse" && _ === "headers") {
            if (_ === "headers") {
              const z = Math.max(0, A - 1);
              T(z), $(z);
            } else if (_ === "cells") {
              const z = Math.max(0, A - 1);
              T(z), S(P, z);
            }
          }
          break;
        case "ArrowRight":
          if (B.preventDefault(), k === "navigate" || k === "browse" && _ === "headers") {
            if (_ === "headers") {
              const z = Math.min(M - 1, A + 1);
              T(z), $(z);
            } else if (_ === "cells") {
              const z = Math.min(M - 1, A + 1);
              T(z), S(P, z);
            }
          }
          break;
        case "ArrowUp":
          if (B.preventDefault(), _ === "cells") {
            if (k === "browse") {
              const z = Math.max(0, P - 1);
              D(z), S(z, 0), T(0);
            } else if (k === "navigate")
              if (P > 0) {
                const z = P - 1;
                D(z), S(z, A);
              } else
                C("headers"), h("browse"), $(A);
          }
          break;
        case "ArrowDown":
          if (B.preventDefault(), _ === "headers" && k === "browse")
            C("cells"), D(0), T(0), S(0, 0);
          else if (_ === "cells") {
            const z = N - 1;
            if (k === "browse") {
              const fe = Math.min(z, P + 1);
              D(fe), S(fe, 0), T(0);
            } else if (k === "navigate" && P < z) {
              const fe = P + 1;
              D(fe), S(fe, A);
            }
          }
          break;
        case "Home":
          B.preventDefault(), _ === "headers" ? (T(0), $(0)) : _ === "cells" && (B.ctrlKey ? (D(0), T(0), S(0, 0)) : (T(0), S(P, 0)));
          break;
        case "End":
          if (B.preventDefault(), _ === "headers") {
            const z = M - 1;
            T(z), $(z);
          } else if (_ === "cells")
            if (B.ctrlKey) {
              const z = N - 1, fe = M - 1;
              D(z), T(fe), S(z, fe);
            } else {
              const z = M - 1;
              T(z), S(P, z);
            }
          break;
        case " ":
          if (B.preventDefault(), _ === "headers" && k === "navigate") {
            const z = t[A];
            z && te(z.key);
          } else _ === "cells" && k === "navigate" && U(P);
          break;
      }
    }, [
      _,
      k,
      A,
      P,
      M,
      N,
      t,
      S,
      $,
      te,
      U
    ]);
    ze(() => {
      const B = F.current;
      if (B)
        return B.addEventListener("keydown", R), () => B.removeEventListener("keydown", R);
    }, [R]);
    const W = be(
      "nhsuk-table",
      m,
      {
        "nhsuk-table--responsive": v,
        "nhsuk-table--bordered": y,
        "nhsuk-table--striped": w,
        "nhsuk-table--compact": p === "compact"
      },
      f
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: F,
        className: W,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": c,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: I, role: "row", children: t.map((B, ae) => {
            const z = r?.find((le) => le.key === B.key), fe = !!z, ve = _ === "headers" && A === ae;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: be("sortable-header", {
                  "sortable-header--focused": ve
                }),
                role: "columnheader",
                tabIndex: ve ? 0 : -1,
                onClick: () => te(B.key),
                onKeyDown: (le) => {
                  (le.key === "Enter" || le.key === " ") && (le.preventDefault(), te(B.key));
                },
                "aria-sort": fe ? z?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: B.label }),
                  fe && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((le) => le.key === B.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: z?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              B.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: j, className: "nhsuk-table__body", role: "rowgroup", children: b.map((B, ae) => {
            const z = s === ae, fe = _ === "cells" && P === ae;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: be("data-row", {
                  "data-row--selected": z,
                  "data-row--focused": fe
                }),
                "aria-selected": z,
                children: t.map((ve, le) => {
                  const ue = ve.tableRenderer ? ve.tableRenderer(B) : ve.render ? ve.render(B) : B[ve.key], J = _ === "cells" && P === ae && A === le, ee = () => typeof ue == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: ue ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: ue ? "Yes" : "No" })
                  ] }) : String(ue ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: be("data-cell", {
                        "data-cell--focused": J
                      }),
                      tabIndex: J ? 0 : -1,
                      onClick: () => U(ae),
                      children: ee()
                    },
                    ve.key
                  );
                })
              },
              ae
            );
          }) })
        ]
      }
    );
  }
);
Tf.displayName = "AriaDataGrid";
const xi = ({
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
  const f = Ee(null), m = Ee(null), y = Ee(null), w = ge((_, C) => {
    d || (m.current = C, _.dataTransfer.effectAllowed = "move", _.dataTransfer.setData("text/plain", C));
  }, [d]), v = ge((_, C) => {
    d || m.current === C || (_.preventDefault(), _.dataTransfer.dropEffect = "move", y.current = C);
  }, [d]), p = ge((_, C) => {
    if (d) return;
    _.preventDefault();
    const k = m.current;
    if (!k || k === C) return;
    const h = e.findIndex((N) => N.key === k), M = e.findIndex((N) => N.key === C);
    if (h !== -1 && M !== -1) {
      const N = [...e], [b] = N.splice(h, 1);
      N.splice(M, 0, b), r(N);
    }
    m.current = null, y.current = null;
  }, [d, e, r]), g = ge(() => {
    m.current = null, y.current = null;
  }, []), F = ge((_) => {
    const C = t.find((k) => k.key === _);
    return C ? C.label : _;
  }, [t]), I = ge((_) => ["red", "orange", "blue", "aqua-green", "grey"][_] || "grey", []), j = ge((_) => {
    if (d) return;
    const C = e.map(
      (k) => k.key === _ ? { ...k, direction: k.direction === "asc" ? "desc" : "asc" } : k
    );
    r(C);
  }, [e, r, d]), P = ge((_) => {
    if (d) return;
    const C = e.filter((k) => k.key !== _);
    r(C);
  }, [e, r, d]), D = ge(() => {
    d || r([]);
  }, [r, d]), A = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const _ = e.map((C, k) => {
      const h = C.direction === "asc" ? "ascending" : "descending";
      return `${k + 1}. ${F(C.key)} (${h})`;
    });
    if (_.length === 1)
      return `Sorted by: ${_[0]}`;
    if (_.length === 2)
      return `Sorted by: ${_.join(" and ")}`;
    {
      const C = _.pop();
      return `Sorted by: ${_.join(", ")}, and ${C}`;
    }
  }, T = Me(() => {
    const _ = ["sort-description"];
    return l && _.push("sort-help"), u && _.push(u), _.join(" ");
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
        children: A()
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: f,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": c,
          "aria-describedby": T,
          children: e.map((_, C) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (k) => w(k, _.key),
              onDragOver: (k) => v(k, _.key),
              onDrop: (k) => p(k, _.key),
              onDragEnd: g,
              onClick: () => j(_.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${_.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": _.key,
              children: /* @__PURE__ */ n.jsx(
                He,
                {
                  color: I(C),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => P(_.key),
                  disabled: d,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${C + 1}`, children: C + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: F(_.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (k) => {
                          k.stopPropagation(), j(_.key);
                        },
                        disabled: d,
                        "aria-label": `Toggle sort direction for ${F(_.key)}. Currently ${_.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${_.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${_.direction}`,
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
            _.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        ot,
        {
          variant: "secondary",
          onClick: D,
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
function Df(e, t) {
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
const Fa = yn(function(t, r) {
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
    orientation: m = "horizontal",
    id: y,
    isLoading: w = !1,
    loadingComponent: v,
    error: p = null,
    errorComponent: g,
    "data-testid": F,
    actions: I,
    actionsMinGap: j = 16,
    forceActionsAbove: P = !1
  } = t, A = Ee(
    y || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, T = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), _ = `${A}-description`, C = `${A}-navigation-help`, {
    dataComparator: k = (L, K) => JSON.stringify(L) === JSON.stringify(K),
    filterFunction: h = (L) => L,
    booleanRenderer: M = (L) => L ? "✓" : "✗"
  } = a || {}, N = o !== void 0, b = o ?? 0, [S, $] = Le({
    focusArea: "tabs",
    focusedTabIndex: b,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), te = Me(() => ({
    selectedIndex: b,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [b]), [U, R] = Bo(Df, te);
  ze(() => {
    const L = U.tabLoadingStates.length, K = s.length;
    L !== K && R({ type: "ADJUST_ARRAYS", payload: { newLength: K } });
  }, [s.length]), ze(() => {
    N && R({ type: "SET_SELECTED_INDEX", payload: b });
  }, [b, N]), ze(() => {
    $((L) => ({
      ...L,
      focusArea: "tabs",
      focusedTabIndex: U.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [U.selectedIndex]), ze(() => {
    l && l(U.globalSelectedRowData);
  }, [U.globalSelectedRowData, l]);
  const W = ge(
    (L, K) => k(L, K),
    [k]
  ), B = ge(
    (L) => {
      L >= 0 && L < s.length && !s[L].disabled && (R({ type: "SET_SELECTED_INDEX", payload: L }), $((K) => ({
        ...K,
        focusedTabIndex: L,
        focusArea: "tabs"
      })), i?.(L));
    },
    [s, i]
  ), ae = Ee(!1), z = ge(
    (L, K) => {
      if (!K?.force && !ae.current && L === 0) {
        ae.current = !0;
        return;
      }
      ae.current = !0, setTimeout(() => {
        const oe = fe.current[L], X = oe?.parentElement;
        if (oe && X) {
          const O = oe.offsetLeft, se = oe.offsetWidth, me = X.clientWidth, ce = O - me / 2 + se / 2;
          try {
            X.scrollTo({
              left: Math.max(0, ce),
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
          tabListElementExists: !!X
        });
      }, 50);
    },
    []
  ), fe = Ee([]), ve = Ee([]), le = ge(
    (L, K) => {
      const oe = U.sortConfig || [], X = oe.find(
        (me) => me.key === K
      );
      let O;
      X ? X.direction === "asc" ? O = oe.map(
        (me) => me.key === K ? { ...me, direction: "desc" } : me
      ) : O = oe.filter(
        (me) => me.key !== K
      ) : O = [...oe, { key: K, direction: "asc" }], R({
        type: "SET_SORT",
        payload: O
      }), s[L].onSort?.(K);
    },
    [U.sortConfig, s]
  ), ue = ge(
    (L) => {
      setTimeout(() => {
        const K = document.querySelector(
          `[data-tab-panel="${U.selectedIndex}"] th:nth-child(${L + 1})`
        );
        K && K.focus();
      }, 0);
    },
    [U.selectedIndex]
  ), J = ge(
    (L) => M(L),
    [M]
  ), ee = ge(
    (L, K) => {
      setTimeout(() => {
        const oe = document.querySelector(
          `[data-tab-panel="${U.selectedIndex}"] tbody tr:nth-child(${L + 1}) td:nth-child(${K + 1})`
        );
        oe && oe.focus();
      }, 0);
    },
    [U.selectedIndex]
  );
  ze(() => {
    S.isGridActive && (S.focusArea === "headers" ? setTimeout(() => {
      ue(S.focusedHeaderIndex);
    }, 0) : S.focusArea === "cells" && setTimeout(() => {
      ee(
        S.focusedRowIndex,
        S.focusedColumnIndex
      );
    }, 0));
  }, [
    S.focusArea,
    S.isGridActive,
    S.focusedHeaderIndex,
    S.focusedRowIndex,
    S.focusedColumnIndex,
    ue,
    ee
  ]), ze(() => {
    z(U.selectedIndex);
  }, [U.selectedIndex, z]);
  const de = ge(
    (L, K) => {
      const { key: oe } = L, X = s[U.selectedIndex], O = X?.columns.length || 0;
      switch (oe) {
        case "ArrowLeft":
          L.preventDefault();
          const se = Math.max(0, K - 1);
          $((je) => ({
            ...je,
            focusedHeaderIndex: se
          })), ue(se);
          break;
        case "ArrowRight":
          L.preventDefault();
          const me = Math.min(O - 1, K + 1);
          $((je) => ({
            ...je,
            focusedHeaderIndex: me
          })), ue(me);
          break;
        case "ArrowUp":
          L.preventDefault(), $((je) => ({
            ...je,
            focusArea: "tabs",
            focusedTabIndex: U.selectedIndex
          })), z(U.selectedIndex), fe.current[U.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          L.preventDefault(), $((je) => ({
            ...je,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: K,
            isGridActive: !0
          }));
          break;
        case "Home":
          L.preventDefault(), $((je) => ({ ...je, focusedHeaderIndex: 0 })), ue(0);
          break;
        case "End":
          L.preventDefault();
          const ce = O - 1;
          $((je) => ({
            ...je,
            focusedHeaderIndex: ce
          })), ue(ce);
          break;
        case "Enter":
        case " ":
          L.preventDefault();
          const ke = X?.columns[K]?.key;
          ke && le(U.selectedIndex, ke);
          break;
      }
    },
    [
      s,
      U.selectedIndex,
      le,
      $,
      ue,
      ee,
      fe
    ]
  ), x = ge(
    (L, K, oe) => {
      const { key: X } = L, O = s[U.selectedIndex], se = O?.data.length || 0, me = O?.columns.length || 0;
      switch (X) {
        case "ArrowUp":
          if (L.preventDefault(), K === 0)
            $((ye) => ({
              ...ye,
              focusArea: "headers",
              focusedHeaderIndex: oe,
              isGridActive: !1
            })), ue(oe);
          else {
            const ye = K - 1;
            $(($e) => ({
              ...$e,
              focusedRowIndex: ye
            })), ee(ye, oe);
          }
          break;
        case "ArrowDown":
          L.preventDefault();
          const ce = Math.min(se - 1, K + 1);
          $((ye) => ({
            ...ye,
            focusedRowIndex: ce
          })), ee(ce, oe);
          break;
        case "ArrowLeft":
          L.preventDefault();
          const ke = Math.max(0, oe - 1);
          $((ye) => ({
            ...ye,
            focusedColumnIndex: ke
          })), ee(K, ke);
          break;
        case "ArrowRight":
          L.preventDefault();
          const je = Math.min(me - 1, oe + 1);
          $((ye) => ({
            ...ye,
            focusedColumnIndex: je
          })), ee(K, je);
          break;
        case "Home":
          L.preventDefault(), L.ctrlKey ? ($((ye) => ({
            ...ye,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), ee(0, 0)) : ($((ye) => ({ ...ye, focusedColumnIndex: 0 })), ee(K, 0));
          break;
        case "End":
          if (L.preventDefault(), L.ctrlKey) {
            const ye = se - 1, $e = me - 1;
            $((Be) => ({
              ...Be,
              focusedRowIndex: ye,
              focusedColumnIndex: $e
            })), ee(ye, $e);
          } else {
            const ye = me - 1;
            $(($e) => ({
              ...$e,
              focusedColumnIndex: ye
            })), ee(K, ye);
          }
          break;
        case "Enter":
        case " ":
          if (L.preventDefault(), O && O.data[K]) {
            const ye = O.data.some(
              (Pe) => "ews_data" in Pe
            ) ? h(O.data, U.filters) : O.data, $e = U.sortConfig;
            let Be = ye;
            if ($e && $e.length > 0 && (Be = [...ye].sort((Pe, Ae) => {
              for (const { key: Ge, direction: Ve } of $e) {
                let Je = Pe[Ge], xt = Ae[Ge];
                const Qe = O.columns.find(
                  (vn) => vn.key === Ge
                );
                if (Qe?.tableRenderer ? (Je = Qe.tableRenderer(Pe), xt = Qe.tableRenderer(Ae)) : Qe?.render && (Je = Qe.render(Pe), xt = Qe.render(Ae)), Je == null && xt == null) continue;
                if (Je == null) return Ve === "asc" ? -1 : 1;
                if (xt == null) return Ve === "asc" ? 1 : -1;
                let tt = 0;
                if (typeof Je == "number" && typeof xt == "number" ? tt = Je - xt : tt = String(Je).localeCompare(
                  String(xt),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), tt !== 0)
                  return Ve === "asc" ? tt : -tt;
              }
              return 0;
            })), Be[K]) {
              const Pe = Be[K], Ge = U.globalSelectedRowData && W(U.globalSelectedRowData, Pe) ? null : Pe;
              R({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: Ge
              });
            }
          }
          break;
      }
    },
    [
      s,
      U.selectedIndex,
      U.filters,
      U.sortConfig,
      h,
      W,
      R,
      $,
      ue,
      ee
    ]
  ), E = ge(
    (L, K) => h(L, K),
    [h]
  );
  if (Ro(
    r,
    () => ({
      selectTab: (L) => {
        L >= 0 && L < s.length && (R({ type: "SET_SELECTED_INDEX", payload: L }), i?.(L));
      },
      refreshData: (L) => {
        console.log("Refreshing data for tab:", L ?? "all");
      },
      exportData: (L) => {
        const K = L ?? U.selectedIndex, oe = s[K];
        return oe ? oe.data : [];
      },
      getSelectedRows: (L) => U.globalSelectedRowData ? [] : [],
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
    [U.selectedIndex, U.selectedRows, s, i]
  ), w)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": F,
        children: v || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx(
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
  if (p)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`,
        "data-testid": F,
        children: g || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ n.jsx("p", { children: p })
        ] })
      }
    );
  const H = Ee(null), Z = Ee(null), V = Ee(null), [ne, he] = Le(!0);
  ze(() => {
    if (!I) {
      he(!1);
      return;
    }
    if (P) {
      he(!1);
      return;
    }
    function L() {
      if (!H.current || !Z.current || !V.current) return;
      const X = H.current.clientWidth, O = Array.from(
        Z.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), se = O.reduce((je, ye) => je + ye.offsetWidth, 0), me = V.current.offsetWidth, ce = Math.max(8 * (O.length - 1), 0), ke = se + ce + me + j <= X;
      he(ke);
    }
    const K = requestAnimationFrame(() => L()), oe = new ResizeObserver(() => L());
    return H.current && oe.observe(H.current), Z.current && oe.observe(Z.current), () => {
      cancelAnimationFrame(K), oe.disconnect();
    };
  }, [I, j, P, s.length]);
  const we = V, ie = ge(() => we.current ? Array.from(
    we.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((L) => !L.hasAttribute("disabled")) : [], []), q = ge(
    (L) => {
      const K = ie();
      if (!K.length) return;
      const oe = Math.max(0, Math.min(L, K.length - 1));
      K[oe].focus(), $((X) => ({ ...X, focusArea: "actions", focusedActionIndex: oe }));
    },
    [ie]
  ), G = ge(() => q(0), [q]), re = ge(
    (L, K) => {
      const { key: oe } = L, X = s.length - 1;
      switch (oe) {
        case "ArrowUp": {
          I && !ne && (L.preventDefault(), G());
          break;
        }
        case "ArrowLeft": {
          L.preventDefault();
          const O = K > 0 ? K - 1 : X;
          B(O), z(O), fe.current[O]?.focus();
          break;
        }
        case "ArrowRight": {
          if (L.preventDefault(), K === X && I && ne) {
            G();
            return;
          }
          const O = K < X ? K + 1 : 0;
          B(O), z(O), fe.current[O]?.focus();
          break;
        }
        case "ArrowDown": {
          L.preventDefault(), $((O) => ({
            ...O,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          L.preventDefault(), B(0), z(0), fe.current[0]?.focus();
          break;
        }
        case "End": {
          L.preventDefault(), B(X), z(X), fe.current[X]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          L.preventDefault(), B(K);
          break;
        }
        case "Tab": {
          !L.shiftKey && K === X && I && ne && G();
          break;
        }
      }
    },
    [s.length, B, z, I, ne, G]
  ), Q = ge((L) => {
    const { key: K } = L, oe = ie();
    if (!oe.length) return;
    const X = oe.findIndex((O) => O === document.activeElement);
    switch (K) {
      case "ArrowLeft": {
        if (ne)
          if (X > 0)
            L.preventDefault(), q(X - 1);
          else {
            L.preventDefault();
            const O = s.length - 1;
            B(O), z(O), fe.current[O]?.focus(), $((se) => ({ ...se, focusArea: "tabs", focusedTabIndex: O }));
          }
        break;
      }
      case "ArrowRight": {
        ne && (X < oe.length - 1 ? (L.preventDefault(), q(X + 1)) : (L.preventDefault(), B(0), z(0), fe.current[0]?.focus(), $((O) => ({ ...O, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (ne)
          L.preventDefault(), $((O) => ({ ...O, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          L.preventDefault();
          const O = U.selectedIndex;
          fe.current[O]?.focus(), $((se) => ({ ...se, focusArea: "tabs", focusedTabIndex: O }));
        }
        break;
      }
    }
  }, [ie, ne, q, s.length, B, z, U.selectedIndex]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${m} ${u}`,
      id: y,
      "data-testid": F,
      ref: H,
      children: [
        c && !T && /* @__PURE__ */ n.jsx("div", { id: _, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: C,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ n.jsx(
          xi,
          {
            sortConfig: U.sortConfig || [],
            columns: s.flatMap(
              (L) => L.columns.map((K) => ({ key: K.key, label: K.label }))
            ).filter(
              (L, K, oe) => oe.findIndex((X) => X.key === L.key) === K
              // Remove duplicates
            ),
            onSortChange: (L) => {
              R({ type: "SET_SORT", payload: L });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        I && !ne && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: V,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: Q,
            children: I
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${ne ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": c ? T ? c : _ : C,
              "aria-orientation": m,
              className: "aria-tabs-datagrid__tabs",
              ref: Z,
              children: s.map((L, K) => {
                const oe = K === U.selectedIndex, X = L.disabled || f;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${L.id}`,
                    "aria-controls": `panel-${L.id}`,
                    "aria-selected": oe,
                    "aria-disabled": X,
                    tabIndex: oe ? 0 : -1,
                    ref: (O) => {
                      fe.current[K] = O;
                    },
                    onClick: () => B(K),
                    onKeyDown: (O) => re(O, K),
                    disabled: X,
                    className: [
                      "aria-tabs-datagrid__tab",
                      oe ? "aria-tabs-datagrid__tab--selected" : "",
                      X ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: L.label }),
                      U.tabLoadingStates[K] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      U.tabErrors[K] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  L.id
                );
              })
            }
          ),
          I && ne && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: V,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: Q,
              children: I
            }
          )
        ] }),
        s.map((L, K) => {
          const oe = K === U.selectedIndex;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${L.id}`,
              "aria-labelledby": `tab-${L.id}`,
              tabIndex: 0,
              hidden: !oe,
              ref: (X) => {
                ve.current[K] = X;
              },
              className: `aria-tabs-datagrid__panel ${L.className || ""}`,
              "data-tab-panel": K,
              children: oe && (() => {
                const X = L.data.some(
                  (se) => "ews_data" in se
                ) ? E(L.data, U.filters) : L.data, O = Me(() => {
                  const se = U.sortConfig;
                  return !se || se.length === 0 ? X : [...X].sort((me, ce) => {
                    for (const { key: ke, direction: je } of se) {
                      let ye = me[ke], $e = ce[ke];
                      const Be = L.columns.find(
                        (Ae) => Ae.key === ke
                      );
                      if (Be?.tableRenderer ? (ye = Be.tableRenderer(me), $e = Be.tableRenderer(ce)) : Be?.render && (ye = Be.render(me), $e = Be.render(ce)), ye == null && $e == null) continue;
                      if (ye == null) return 1;
                      if ($e == null) return -1;
                      let Pe = 0;
                      if (typeof ye == "number" && typeof $e == "number" ? Pe = ye - $e : typeof ye == "boolean" && typeof $e == "boolean" ? Pe = ye === $e ? 0 : ye ? 1 : -1 : Pe = String(ye).localeCompare(
                        String($e),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Pe !== 0)
                        return je === "asc" ? Pe : -Pe;
                    }
                    return 0;
                  });
                }, [X, U.sortConfig, L.columns]);
                return /* @__PURE__ */ n.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": L.ariaLabel,
                    "aria-describedby": L.ariaDescription ? `panel-${L.id}-description` : void 0,
                    children: [
                      L.ariaDescription && /* @__PURE__ */ n.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${L.id}-description`,
                          children: L.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: L.columns.map((se, me) => {
                        const ce = U.sortConfig?.find(
                          (ye) => ye.key === se.key
                        ), ke = !!ce, je = S.focusArea === "headers" && S.focusedHeaderIndex === me;
                        return /* @__PURE__ */ n.jsx(
                          "th",
                          {
                            className: `sortable-header ${je ? "sortable-header--focused" : ""} ${ke ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: je ? 0 : -1,
                            onClick: () => le(K, se.key),
                            onKeyDown: (ye) => de(ye, me),
                            "aria-sort": ke ? ce?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ n.jsx("span", { className: "header-label", children: se.label }),
                              /* @__PURE__ */ n.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${ke ? `sort-indicator--${ce?.direction}` : ""}`,
                                  children: [
                                    U.sortConfig && U.sortConfig.length > 0 && U.sortConfig.findIndex(
                                      (ye) => ye.key === se.key
                                    ) !== -1 && /* @__PURE__ */ n.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${U.sortConfig.findIndex((ye) => ye.key === se.key) + 1}`,
                                        "data-priority": U.sortConfig.findIndex(
                                          (ye) => ye.key === se.key
                                        ) + 1,
                                        title: `Sort priority: ${U.sortConfig.findIndex((ye) => ye.key === se.key) + 1}`,
                                        children: U.sortConfig.findIndex(
                                          (ye) => ye.key === se.key
                                        ) + 1
                                      }
                                    ),
                                    ke && /* @__PURE__ */ n.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${ce?.direction}`,
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
                      /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: O.map((se, me) => {
                        const ce = U.globalSelectedRowData && W(U.globalSelectedRowData, se), ke = S.focusArea === "cells" && S.focusedRowIndex === me;
                        return /* @__PURE__ */ n.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ce ? "data-row--selected" : ""} ${ke ? "data-row--focused" : ""}`,
                            "aria-selected": ce,
                            children: L.columns.map((je, ye) => {
                              const $e = se[je.key];
                              let Be;
                              je.tableRenderer ? Be = je.tableRenderer(se) : je.render ? Be = je.render(se) : Be = $e;
                              const Pe = S.focusArea === "cells" && S.focusedRowIndex === me && S.focusedColumnIndex === ye, Ae = () => {
                                if (je.customRenderer) {
                                  const Ge = je.customRenderer(
                                    $e,
                                    se
                                  );
                                  return /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: Ge
                                    }
                                  );
                                }
                                return typeof $e == "boolean" && Be === $e ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  J($e),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: $e ? "Yes" : "No" })
                                ] }) : ut.isValidElement(Be) || typeof Be != "object" ? Be ?? "" : Be;
                              };
                              return /* @__PURE__ */ n.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Pe ? "data-cell--focused" : ""}`,
                                  tabIndex: Pe ? 0 : -1,
                                  onClick: () => {
                                    const Ve = U.globalSelectedRowData && W(
                                      U.globalSelectedRowData,
                                      se
                                    ) ? null : se;
                                    R({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: Ve
                                    });
                                  },
                                  onKeyDown: (Ge) => x(Ge, me, ye),
                                  children: Ae()
                                },
                                je.key
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
}), qn = {
  asc: "↑",
  desc: "↓"
}, $f = (e) => [...e].sort((t, r) => t.priority - r.priority);
function ga(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function If(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Mf(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function Lf(e, t) {
  const r = t.find((s) => s.id === e), a = If(t);
  return r ? r.priority < a : !1;
}
const tb = ({
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
  const u = Me(() => $f(e), [e]), f = ge((F) => {
    if (l) return;
    const I = e.map(
      (j) => j.id === F ? { ...j, direction: j.direction === "asc" ? "desc" : "asc" } : j
    );
    t(I);
  }, [e, t, l]), m = ge((F) => {
    if (l) return;
    const I = e.findIndex((P) => P.id === F);
    if (I <= 0) return;
    const j = [...e];
    [j[I], j[I - 1]] = [j[I - 1], j[I]], t(ga(j));
  }, [e, t, l]), y = ge((F) => {
    if (l) return;
    const I = e.findIndex((P) => P.id === F);
    if (I >= e.length - 1 || I === -1) return;
    const j = [...e];
    [j[I], j[I + 1]] = [j[I + 1], j[I]], t(ga(j));
  }, [e, t, l]), w = ge((F) => {
    if (l) return;
    const I = e.filter((j) => j.id !== F);
    t(ga(I));
  }, [e, t, l]), v = ge(() => {
    l || t([]);
  }, [t, l]), p = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const F = u.map((I, j) => {
      const P = I.direction === "asc" ? "ascending" : "descending";
      return `${j + 1}. ${I.label} (${P})`;
    });
    if (F.length === 1)
      return `Sorted by: ${F[0]}`;
    if (F.length === 2)
      return `Sorted by: ${F.join(" and ")}`;
    {
      const I = F.pop();
      return `Sorted by: ${F.join(", ")}, and ${I}`;
    }
  }, g = Me(() => {
    const F = ["sort-description"];
    return i && F.push("sort-help"), c && F.push(c), F.join(" ");
  }, [i, c]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: p()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: p()
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": d,
        "aria-describedby": g,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((F) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                He,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => w(F.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: F.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: F.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(F.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${F.label}. Currently ${F.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: F.direction === "asc" ? qn.asc : qn.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m(F.id),
                          disabled: l || !Mf(F.id, e),
                          "aria-label": `Move ${F.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => y(F.id),
                          disabled: l || !Lf(F.id, e),
                          "aria-label": `Move ${F.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            F.id
          ))
        ]
      }
    ),
    o && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      ot,
      {
        variant: "secondary",
        onClick: v,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsxs("small", { children: [
      "Click ",
      qn.asc,
      "/",
      qn.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, ks = (e, t) => t.map((r) => ({
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
})), Pa = [
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
], Ff = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Pf = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, s] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, Ef = (e) => {
  if (typeof e == "boolean") {
    const r = Pa.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = Pa.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, Af = (e) => `${e.name}-${e.bed_name}`, Rf = () => ({
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
}), nb = (e) => {
  const t = Rf();
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
}, Bf = {
  dataComparator: Ff,
  filterFunction: Pf,
  booleanRenderer: Ef,
  getDataId: Af
};
function yo(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: s = [],
    badges: o = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: d,
    fieldRenderers: c = {},
    classPrefix: u = "adaptive-card"
  } = r, f = t.find((I) => I.key === a), m = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", y = () => s.filter((j) => !i.includes(j) && e[j]).slice(0, 3).map((j) => {
    const P = t.find((_) => _.key === j), D = e[j], A = c[j] ? c[j](D, e) : P?.cardRenderer ? P.cardRenderer(e) : P?.render ? P.render(e) : D;
    return `${P?.label || j}: ${A}`;
  }).join(" • "), w = () => o.length === 0 ? null : o.filter((I) => e[I.fieldKey] !== void 0).map((I) => {
    const j = e[I.fieldKey], P = I.render ? I.render(j, e) : j;
    return `<span class="nhsuk-tag ${Hf(I, j)}">${P}</span>`;
  }).join(""), v = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", p = w(), g = y(), F = p ? `${g}${p ? `<div class="adaptive-card__badges">${p}</div>` : ""}` : g;
  return {
    variant: v(),
    heading: String(m),
    descriptionHtml: F,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${m}`
  };
}
function Hf(e, t) {
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
const zf = {
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
}, bi = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: a,
  priority: s = "medium",
  status: o = "active"
}) => {
  const i = e.name, l = e.age, d = e.ward_name, c = e.bed_name, u = e.ews_score, f = e.speciality, m = e.consultant;
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
            He,
            {
              color: Of(wi(u)),
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
            /* @__PURE__ */ n.jsx("dd", { children: f })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ n.jsx("dd", { children: m })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            ot,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (y) => {
                y.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            ot,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (y) => {
                y.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            ot,
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
}, yi = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        He,
        {
          color: Uf(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        He,
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
      ot,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      ot,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), vi = ({
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
        He,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        He,
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
      ot,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      ot,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), _i = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: a = "medium"
}) => {
  const s = e.name, o = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, d = e.ews_data?.temperature, c = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
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
            o !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Wf(o)}`, children: [
              "EWS: ",
              o
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ n.jsxs(
            He,
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
            ot,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (m) => {
                m.stopPropagation(), r?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ n.jsx(
            ot,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (m) => {
                m.stopPropagation(), r?.("record-new", e);
              },
              children: "Record New"
            }
          )
        ] })
      ]
    }
  );
};
function wi(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Wf(e) {
  return wi(e);
}
function Of(e) {
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
function Uf(e) {
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
const Gf = [
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
], Si = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Vf = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Yf = (e) => Si(e) === "high" || e.status === "urgent" ? "primary" : "default", qf = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Xf = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Gf,
  hiddenFields: [],
  getPriority: Si,
  getStatus: Vf,
  getVariant: Yf,
  fieldRenderers: qf,
  classPrefix: "adaptive-card--healthcare"
}, Kf = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", s = r.getStatus?.(e) || "active", o = s === "urgent" ? "active" : s;
    return /* @__PURE__ */ n.jsx(
      bi,
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
      yi,
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
      vi,
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
      _i,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (s) => console.log("Vitals selected:", s),
        onAction: (s, o) => console.log("Vitals action:", s, o)
      }
    );
  }
}, Zf = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, vo = {
  name: "healthcare",
  defaultCardConfig: Xf,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Kf,
  fieldTypes: Zf
};
function _o(e) {
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
function wo(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function Jf(e, t) {
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
function Qf(e, t) {
  const [r, a] = Le("cards");
  return ze(() => {
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
function ep(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function tp(e, t, r, a) {
  const s = a ? { ...a.defaultCardConfig, ...r } : { ...zf, ...r };
  if (a && a.cardTemplates) {
    const o = ep(e);
    if (o && a.cardTemplates[o]) {
      const i = a.cardTemplates[o](e, t, s);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return s.cardTemplate && s.cardTemplate(e, t, s), yo(e, t, s);
}
const rb = ({
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
  selectedIndex: f,
  onTabChange: m,
  ariaLabel: y = "Data grid",
  ariaDescription: w,
  orientation: v = "horizontal",
  id: p,
  disabled: g = !1,
  className: F,
  ...I
}) => {
  const j = Qf(e, t), P = f !== void 0, D = f ?? 0, A = Me(() => {
    if (c.some(
      (G) => G.data && G.data.length > 0 && wo(G.data)
    )) {
      const G = _o(r);
      return {
        ...vo.defaultCardConfig,
        ...G
      };
    } else
      return _o(r);
  }, [r, c]), T = Me(() => c.some(
    (G) => G.data && G.data.length > 0 && wo(G.data)
  ) ? vo : void 0, [c]), _ = Me(() => ({
    selectedIndex: D,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [D, c.length]), [C, k] = Bo(Jf, _), h = Ee([]), M = Ee([]), N = Ee([]), b = Ee(null), [S, $] = Le({
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
  }), te = ge((q) => {
    if (!q.current)
      return { columns: 1, rows: 0 };
    const G = q.current, re = G.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (re.length === 0)
      return { columns: 1, rows: 0 };
    const Q = G.offsetWidth, K = re[0].offsetWidth, oe = Math.floor(Q / K) || 1, X = Math.ceil(re.length / oe);
    return { columns: oe, rows: X };
  }, []), U = ge((q, G) => ({
    row: Math.floor(q / G),
    col: q % G
  }), []), R = ge((q, G, re) => q * re + G, []), W = ge((q, G, re, Q) => {
    const { row: L, col: K } = U(q, Q);
    let oe = L, X = K;
    switch (G) {
      case "up":
        oe = Math.max(0, L - 1);
        break;
      case "down":
        oe = Math.min(Math.floor((re - 1) / Q), L + 1);
        break;
      case "left":
        X = Math.max(0, K - 1);
        break;
      case "right":
        X = Math.min(Q - 1, K + 1);
        break;
    }
    const O = R(oe, X, Q);
    return Math.min(O, re - 1);
  }, [U, R]);
  ze(() => {
    S.isCardNavigationActive && S.focusedCardElementIndex >= 0 && S.cardElements.length > 0 && setTimeout(() => {
      const q = S.cardElements[S.focusedCardElementIndex];
      q && (q.element.focus(), q.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [S.isCardNavigationActive, S.focusedCardElementIndex, S.cardElements.length]), ze(() => {
    const q = () => {
      if (j === "cards" && b.current) {
        const { columns: Q, rows: L } = te(b);
        $((K) => ({
          ...K,
          gridColumns: Q,
          gridRows: L
        }));
      }
    }, G = setTimeout(q, 200), re = () => {
      setTimeout(q, 100);
    };
    return window.addEventListener("resize", re), () => {
      clearTimeout(G), window.removeEventListener("resize", re);
    };
  }, [j, c, te]), ze(() => {
    const q = C.tabLoadingStates.length, G = c.length;
    q !== G && k({ type: "ADJUST_ARRAYS", payload: { newLength: G } });
  }, [c.length, C.tabLoadingStates.length]), ze(() => {
    P && f !== C.selectedIndex && k({ type: "SET_SELECTED_INDEX", payload: f });
  }, [P, f, C.selectedIndex]);
  const B = ge((q) => {
    q >= 0 && q < c.length && !c[q].disabled && (k({ type: "SET_SELECTED_INDEX", payload: q }), m?.(q));
  }, [c, m]), ae = ge((q) => {
    console.log("Card selected:", q), k({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: q
    });
  }, []), z = ge((q) => {
    const G = M.current[q];
    G && (G.focus(), G.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), fe = ge((q) => {
    const G = M.current[q];
    if (!G) return [];
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
    ].join(", "), Q = G.querySelectorAll(re);
    return Array.from(Q).map((L, K) => ({
      id: L.id || `card-${q}-element-${K}`,
      element: L,
      label: L.getAttribute("aria-label") || L.textContent?.trim() || L.getAttribute("title") || `Element ${K + 1}`,
      type: L.tagName.toLowerCase() === "button" ? "button" : L.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(L.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), ve = Ee(null), le = ge((q) => {
    const G = ve.current;
    if (!G) return;
    const re = document.createElement("div");
    re.setAttribute("aria-live", "polite"), re.setAttribute("aria-atomic", "true"), re.className = "sr-only", re.textContent = q, G.appendChild(re), setTimeout(() => {
      G.contains(re) && G.removeChild(re);
    }, 1e3);
  }, []), ue = ge((q) => {
    const G = q.filter((Q) => Q.sortable !== !1), re = [
      { value: "", label: "Sort by..." }
    ];
    return G.forEach((Q) => {
      const L = Q.label || Q.key;
      Q.key === "name" ? re.push(
        { value: `${Q.key}-asc`, label: `${L} (A-Z)` },
        { value: `${Q.key}-desc`, label: `${L} (Z-A)` }
      ) : Q.key === "ews_score" || Q.key.includes("score") ? re.push(
        { value: `${Q.key}-desc`, label: `${L} (High-Low)` },
        { value: `${Q.key}-asc`, label: `${L} (Low-High)` }
      ) : Q.key === "age" || Q.key.includes("date") || Q.key.includes("time") ? re.push(
        { value: `${Q.key}-desc`, label: `${L} (Oldest-Youngest)` },
        { value: `${Q.key}-asc`, label: `${L} (Youngest-Oldest)` }
      ) : re.push(
        { value: `${Q.key}-asc`, label: `${L} (A-Z)` },
        { value: `${Q.key}-desc`, label: `${L} (Z-A)` }
      );
    }), re;
  }, []), J = ge((q, G) => G ? [...q].sort((re, Q) => {
    const L = re[G.key], K = Q[G.key];
    if (L == null && K == null) return 0;
    if (L == null) return 1;
    if (K == null) return -1;
    const oe = Number(L), X = Number(K);
    if (!isNaN(oe) && !isNaN(X))
      return G.direction === "asc" ? oe - X : X - oe;
    const O = String(L).toLowerCase(), se = String(K).toLowerCase(), me = O.localeCompare(se);
    return G.direction === "asc" ? me : -me;
  }) : q, []), ee = ge((q) => {
    if (!q) {
      $((O) => ({ ...O, cardSortConfig: null })), le("Card sorting cleared");
      return;
    }
    const [G, re] = q.split("-"), Q = { key: G, direction: re };
    $((O) => ({ ...O, cardSortConfig: Q }));
    const oe = c[C.selectedIndex]?.columns.find((O) => O.key === G)?.label || G;
    le(`Cards sorted by ${oe} in ${re === "asc" ? "ascending" : "descending"} order`);
  }, [c, C.selectedIndex, le]), de = ge((q) => {
    const Q = c[C.selectedIndex]?.columns.find((K) => K.key === q.key)?.label || q.key, L = q.direction === "asc" ? "ascending" : "descending";
    return `${Q} (${L})`;
  }, [c, C.selectedIndex]), x = ge((q) => {
    const G = c[C.selectedIndex];
    if (s) {
      const re = C.sortConfig;
      return !re || re.length === 0 ? q : [...q].sort((Q, L) => {
        for (const { key: K, direction: oe } of re) {
          let X = Q[K], O = L[K];
          const se = G?.columns.find(($e) => $e.key === K);
          if (se?.cardRenderer ? (X = se.cardRenderer(Q), O = se.cardRenderer(L)) : se?.render && (X = se.render(Q), O = se.render(L)), X == null && O == null) continue;
          if (X == null) return oe === "asc" ? -1 : 1;
          if (O == null) return oe === "asc" ? 1 : -1;
          const me = Number(X), ce = Number(O);
          if (!isNaN(me) && !isNaN(ce)) {
            const $e = me - ce;
            if ($e !== 0) return oe === "asc" ? $e : -$e;
            continue;
          }
          const ke = String(X).toLowerCase(), je = String(O).toLowerCase(), ye = ke.localeCompare(je);
          if (ye !== 0) return oe === "asc" ? ye : -ye;
        }
        return 0;
      });
    } else
      return J(q, S.cardSortConfig);
  }, [s, C.sortConfig, S.cardSortConfig, J, c, C.selectedIndex]), E = ge((q, G) => {
    const re = fe(q), Q = re[G];
    if (Q) {
      Q.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const L = `Focused on ${Q.label}, ${Q.type} ${G + 1} of ${re.length} within card`;
      le(L);
    }
  }, [fe, le]), H = ge((q) => {
    h.current[q]?.focus();
  }, []), Z = ge(() => {
    const q = N.current[0];
    if (!q) return [];
    const G = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), re = q.querySelectorAll(G);
    return Array.from(re);
  }, []), V = ge((q) => {
    if (q === 0) {
      const G = N.current[0], re = G?.querySelector(".sort-controls-row");
      if (re) {
        re.setAttribute("tabindex", "-1"), re.focus();
        const L = `Sort controls group with ${Z().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        le(L);
      } else G && G.focus();
    } else {
      const G = Z(), re = q - 1, Q = G[re];
      if (Q) {
        Q.focus();
        const L = Q.tagName.toLowerCase() === "select", K = Q.tagName.toLowerCase() === "button", oe = L ? "dropdown" : K ? "button" : "control", X = L ? ". Use Space key to open dropdown" : "", O = `${oe} ${re + 1} of ${G.length}${X}`;
        le(O);
      }
    }
  }, [Z, le]), ne = ge((q, G) => {
    const { key: re } = q, Q = c[C.selectedIndex], L = Q?.data.length || 0;
    if (re === "ArrowLeft" && q.shiftKey) {
      q.preventDefault(), q.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (re === "ArrowRight" && q.shiftKey) {
      q.preventDefault(), q.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!S.isCardNavigationActive) {
      switch (re) {
        case "ArrowUp":
          if (q.preventDefault(), G === 0)
            $((O) => ({ ...O, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), V(0);
          else {
            const O = W(G, "up", L, S.gridColumns);
            O !== G && ($((se) => ({ ...se, focusedCardIndex: O })), z(O), le(`Moved to card ${O + 1} of ${L}`));
          }
          break;
        case "ArrowDown":
          q.preventDefault();
          const K = W(G, "down", L, S.gridColumns);
          K !== G && ($((O) => ({ ...O, focusedCardIndex: K })), z(K), le(`Moved to card ${K + 1} of ${L}`));
          break;
        case "ArrowLeft":
          q.preventDefault();
          const oe = W(G, "left", L, S.gridColumns);
          oe !== G ? ($((O) => ({ ...O, focusedCardIndex: oe })), z(oe), le(`Moved to card ${oe + 1} of ${L}`)) : C.selectedIndex > 0 && (k({ type: "SET_SELECTED_INDEX", payload: C.selectedIndex - 1 }), $((O) => ({ ...O, focusArea: "tabs" })), setTimeout(() => H(C.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          q.preventDefault();
          const X = W(G, "right", L, S.gridColumns);
          X !== G ? ($((O) => ({ ...O, focusedCardIndex: X })), z(X), le(`Moved to card ${X + 1} of ${L}`)) : C.selectedIndex < c.length - 1 && (k({ type: "SET_SELECTED_INDEX", payload: C.selectedIndex + 1 }), $((O) => ({ ...O, focusArea: "tabs" })), setTimeout(() => H(C.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (Q?.data[G]) {
            q.preventDefault(), $((se) => ({
              ...se,
              selectedCardIndex: G
            }));
            const O = fe(G);
            O.length > 0 ? ($((se) => ({
              ...se,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: O,
              selectedCardIndex: G
              // Ensure selection is maintained
            })), le(`Card ${G + 1} selected and navigation activated. ${O.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : le(`Card ${G + 1} selected.`);
          }
          break;
        case " ":
          if (Q?.data[G]) {
            q.preventDefault(), $((se) => ({
              ...se,
              selectedCardIndex: se.selectedCardIndex === G ? -1 : G
            }));
            const O = S.selectedCardIndex === G;
            le(`Card ${G + 1} ${O ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (re) {
      case "ArrowUp":
      case "ArrowLeft":
        q.preventDefault();
        const K = Math.max(0, S.focusedCardElementIndex - 1);
        $((se) => ({ ...se, focusedCardElementIndex: K })), E(G, K);
        break;
      case "ArrowDown":
      case "ArrowRight":
        q.preventDefault();
        const oe = Math.min(S.cardElements.length - 1, S.focusedCardElementIndex + 1);
        $((se) => ({ ...se, focusedCardElementIndex: oe })), E(G, oe);
        break;
      case "Enter":
        q.preventDefault();
        const X = S.cardElements[S.focusedCardElementIndex];
        X && (X.element.click(), le(`Activated ${X.label}`));
        break;
      case " ":
        q.preventDefault();
        const O = S.cardElements[S.focusedCardElementIndex];
        if (O) {
          const se = new MouseEvent("dblclick", { bubbles: !0 });
          O.element.dispatchEvent(se), le(`Double-clicked ${O.label}`);
        }
        break;
      case "Escape":
        q.preventDefault(), $((se) => ({
          ...se,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => z(G), 0), le("Exited card navigation, returned to card level");
        break;
      case "Home":
        q.preventDefault(), S.cardElements.length > 0 && ($((se) => ({ ...se, focusedCardElementIndex: 0 })), E(G, 0));
        break;
      case "End":
        if (q.preventDefault(), S.cardElements.length > 0) {
          const se = S.cardElements.length - 1;
          $((me) => ({ ...me, focusedCardElementIndex: se })), E(G, se);
        }
        break;
    }
  }, [S, C.selectedIndex, c, ae, z, H, $, fe, E, le]), he = ge((q) => {
    const G = h.current[q], re = G?.parentElement;
    if (!G || !re) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const Q = G.getBoundingClientRect(), L = re.getBoundingClientRect();
    Q.left >= L.left && Q.right <= L.right || (console.log("Tab not visible, scrolling into view (mobile)"), G.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), we = ge((q, G) => {
    if (j !== "cards")
      return;
    const { key: re } = q;
    switch (re) {
      case "ArrowLeft":
        q.preventDefault();
        const Q = G > 0 ? G - 1 : c.length - 1;
        B(Q), $((X) => ({ ...X, focusedTabIndex: Q })), h.current[Q]?.focus(), he(Q);
        break;
      case "ArrowRight":
        q.preventDefault();
        const L = G < c.length - 1 ? G + 1 : 0;
        B(L), $((X) => ({ ...X, focusedTabIndex: L })), h.current[L]?.focus(), he(L);
        break;
      case "ArrowDown":
        q.preventDefault();
        const K = c[C.selectedIndex];
        K && K.columns && K.columns.length > 0 ? ($((X) => ({
          ...X,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), V(0)) : ($((X) => ({
          ...X,
          focusArea: "cards",
          focusedCardIndex: 0
        })), z(0));
        break;
      case "Home":
        q.preventDefault(), B(0), $((X) => ({ ...X, focusedTabIndex: 0 })), h.current[0]?.focus(), he(0);
        break;
      case "End":
        q.preventDefault();
        const oe = c.length - 1;
        B(oe), $((X) => ({ ...X, focusedTabIndex: oe })), h.current[oe]?.focus(), he(oe);
        break;
      case "Enter":
      case " ":
        q.preventDefault(), B(G);
        break;
    }
  }, [c.length, B, j, z, $, he]), ie = ge((q, G) => {
    if (j !== "cards")
      return;
    const { key: re } = q, Q = c[C.selectedIndex];
    if (G === 0 && !S.isSortControlsActive) {
      switch (re) {
        case "ArrowUp":
          q.preventDefault(), $((K) => ({
            ...K,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), H(C.selectedIndex);
          break;
        case "ArrowDown":
          q.preventDefault(), Q?.data && Q.data.length > 0 && ($((K) => ({
            ...K,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), z(0));
          break;
        case "Enter":
        case " ":
          q.preventDefault();
          const L = Z();
          if (L.length > 0) {
            $((oe) => ({
              ...oe,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), V(1);
            const K = `Entered sort controls navigation mode. ${L.length} controls available. Use arrow keys to navigate between controls.`;
            le(K);
          }
          break;
        case "Escape":
          q.preventDefault(), $((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), H(C.selectedIndex);
          break;
      }
      return;
    }
    if (S.isSortControlsActive) {
      const K = Z().length;
      switch (re) {
        case "ArrowLeft":
          q.preventDefault();
          const oe = S.focusedSortControlIndex > 1 ? S.focusedSortControlIndex - 1 : K;
          $((O) => ({ ...O, focusedSortControlIndex: oe })), V(oe);
          break;
        case "ArrowRight":
          q.preventDefault();
          const X = S.focusedSortControlIndex < K ? S.focusedSortControlIndex + 1 : 1;
          $((O) => ({ ...O, focusedSortControlIndex: X })), V(X);
          break;
        case "ArrowDown":
          if (q.preventDefault(), S.isSortControlsActive) {
            const O = S.focusedSortControlIndex < K ? S.focusedSortControlIndex + 1 : 1;
            $((se) => ({ ...se, focusedSortControlIndex: O })), V(O);
          } else
            Q?.data && Q.data.length > 0 && ($((O) => ({
              ...O,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), z(0));
          break;
        case "ArrowUp":
          q.preventDefault(), $((O) => ({
            ...O,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), V(0);
          break;
        case "Escape":
          q.preventDefault(), $((O) => ({
            ...O,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), V(0);
          break;
      }
    }
  }, [j, c, C.selectedIndex, S.isSortControlsActive, S.focusedSortControlIndex, V, H, z, $, le]);
  if (j === "cards") {
    const q = c[C.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${F || ""}`, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": y,
            "aria-describedby": `${w || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
            "aria-orientation": v,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((G, re) => {
              const Q = re === C.selectedIndex, L = G.disabled || g;
              return /* @__PURE__ */ n.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${G.id}`,
                  "aria-controls": `panel-${G.id}`,
                  "aria-selected": Q,
                  "aria-disabled": L,
                  tabIndex: Q ? 0 : -1,
                  ref: (K) => {
                    h.current[re] = K;
                  },
                  onClick: () => B(re),
                  onKeyDown: (K) => we(K, re),
                  disabled: L,
                  className: [
                    "aria-tabs-datagrid__tab",
                    Q ? "aria-tabs-datagrid__tab--selected" : "",
                    L ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: G.label }),
                    C.tabLoadingStates[re] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    C.tabErrors[re] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                G.id
              );
            })
          }
        ),
        o && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: o })
      ] }),
      q && q.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: s ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          xi,
          {
            sortConfig: C.sortConfig || [],
            columns: q.columns.map((G) => ({ key: G.key, label: G.label })),
            onSortChange: (G) => {
              k({ type: "SET_SORT", payload: G });
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
            tabIndex: S.focusArea === "sort-controls" ? 0 : -1,
            ref: (G) => {
              N.current[0] = G;
            },
            onKeyDown: (G) => ie(G, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${q.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  Jn,
                  {
                    id: `card-sort-${q.id}`,
                    name: `card-sort-${q.id}`,
                    value: S.cardSortConfig ? `${S.cardSortConfig.key}-${S.cardSortConfig.direction}` : "",
                    onChange: (G) => ee(G.target.value),
                    className: "sort-select",
                    children: ue(q.columns).map((G) => /* @__PURE__ */ n.jsx("option", { value: G.value, children: G.label }, G.value))
                  }
                )
              ] }),
              S.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  de(S.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  ot,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => ee(""),
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
          ref: b,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${q?.label || "Data"} cards in ${S.gridRows} rows and ${S.gridColumns} columns`,
          "aria-rowcount": S.gridRows,
          "aria-colcount": S.gridColumns,
          id: `panel-${q?.id}`,
          "aria-labelledby": `tab-${q?.id}`,
          children: x(q?.data || []).map((G, re) => {
            const Q = S.selectedCardIndex === re, L = S.focusedCardIndex === re && S.focusArea === "cards", K = S.focusedCardIndex === re && S.focusArea === "card" && S.isCardNavigationActive, oe = re === 0 && S.focusArea !== "cards", X = L || oe, O = U(re, S.gridColumns);
            if (r.cardTemplate) {
              const ce = r.cardTemplate(G, q.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": O.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ n.jsx(
                    "div",
                    {
                      ref: (ke) => {
                        M.current[re] = ke;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        Q ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        L ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        K ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": O.col + 1,
                      "aria-selected": Q,
                      "aria-expanded": K,
                      "aria-description": K ? `Card navigation active. ${S.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: X ? 0 : -1,
                      onClick: () => {
                        $((ke) => ({
                          ...ke,
                          selectedCardIndex: ke.selectedCardIndex === re ? -1 : re
                        })), ae(G);
                      },
                      onKeyDown: (ke) => ne(ke, re),
                      onFocus: () => {
                        $((ke) => ke.isCardNavigationActive ? ke : ke.focusedCardIndex !== re || ke.focusArea !== "cards" ? {
                          ...ke,
                          focusedCardIndex: re,
                          focusArea: "cards"
                        } : ke);
                      },
                      children: ce
                    }
                  )
                },
                `card-${re}`
              );
            }
            const se = tp(G, q.columns, A, T), me = [
              se.className || "",
              Q ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              L ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              K ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": O.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      Q ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      L ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      K ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": O.col + 1,
                    "aria-selected": Q,
                    "aria-expanded": K,
                    onKeyDown: (ce) => {
                      ce.key === "Enter" && (ce.preventDefault(), $((ke) => ({
                        ...ke,
                        selectedCardIndex: re
                      }))), ne(ce, re);
                    },
                    children: /* @__PURE__ */ n.jsx(
                      hi,
                      {
                        ...se,
                        ref: (ce) => {
                          M.current[re] = ce;
                        },
                        className: me,
                        "aria-label": `${se["aria-label"] || se.heading}. ${K ? `Card navigation active with ${S.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: X ? 0 : -1,
                        onClick: () => {
                          $((ce) => ({
                            ...ce,
                            selectedCardIndex: ce.selectedCardIndex === re ? -1 : re
                          })), ae(G);
                        },
                        onKeyDown: (ce) => ne(ce, re),
                        onFocus: () => {
                          S.isCardNavigationActive || $((ce) => ce.focusedCardIndex !== re || ce.focusArea !== "cards" ? {
                            ...ce,
                            focusedCardIndex: re,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : ce);
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
  return j === "hybrid" ? /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${F || ""}`, children: [
    o && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ n.jsx(
      Fa,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: y,
        ariaDescription: w,
        orientation: v,
        id: p,
        disabled: g,
        selectedIndex: f,
        onTabChange: m,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: d,
        ...I
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${F || ""}`, children: [
    o && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ n.jsx(
      Fa,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: y,
        ariaDescription: w,
        orientation: v,
        id: p,
        disabled: g,
        selectedIndex: f,
        onTabChange: m,
        actions: l,
        forceActionsAbove: d,
        ...I
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, ki = (e) => {
  const t = Pa.find((r) => r.value === e);
  return t ? t.icon : null;
}, np = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, s] = t.priceRange, o = r.discountedPrice || r.price;
      if (o < a || o > s) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => ki(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, rp = (e) => ks(e, [
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
]), ap = {
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
  booleanRenderer: (e) => ki(e),
  getDataId: (e) => `financial-${e.id}`
}, sp = (e) => ks(e, [
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
]), op = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: np,
    createTabs: rp
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: ap,
    createTabs: sp
  }
}, So = (e, t) => {
  const r = op[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, Ci = [
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
], ip = [
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
], lp = [
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
], cp = [
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
], ko = [
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
], Co = [
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
], jo = [
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
], dp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, up = () => [
  {
    id: "patients",
    label: "Patients",
    data: Ci,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      bi,
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
    data: ip,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      yi,
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
    data: lp,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      vi,
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
    data: cp,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      _i,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], fp = () => {
  const [e, t] = Le("healthcare"), r = Me(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: Bf,
      tabPanels: up(),
      data: Ci
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...So("ecommerce", ko),
      data: ko
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...So("financial", Co),
      data: Co
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: dp,
      tabPanels: ks(jo, [
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
      data: jo
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
        ot,
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
      Fa,
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
}, ab = fp, ji = (e) => /* @__PURE__ */ n.jsx(Wo, { ...e }), sb = ({
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
  account: f,
  organisation: m,
  logo: y,
  className: w,
  ...v
}) => {
  const p = {
    service: d,
    navigation: c,
    search: u,
    account: f,
    organisation: m,
    logo: y,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(pi, { ...o }),
    /* @__PURE__ */ n.jsx(Yo, { ...p }),
    /* @__PURE__ */ n.jsx(ji, { className: w, ...v, children: /* @__PURE__ */ n.jsx(Oo, { size: s, children: /* @__PURE__ */ n.jsx(Jt, { children: /* @__PURE__ */ n.jsxs($n, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(At, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(qo, { ...l })
  ] });
}, ob = ({
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
  logo: f,
  className: m,
  ...y
}) => {
  const w = {
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
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(pi, { ...o }),
    /* @__PURE__ */ n.jsx(Yo, { ...w }),
    /* @__PURE__ */ n.jsxs(ji, { className: m, ...y, children: [
      d && /* @__PURE__ */ n.jsx(Na, { ...d }),
      /* @__PURE__ */ n.jsx(Oo, { size: s, children: /* @__PURE__ */ n.jsx(Jt, { children: /* @__PURE__ */ n.jsxs($n, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(At, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(qo, { ...l })
  ] });
}, Ni = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = be("nhsuk-back-link", a), d = be("nhsuk-back-link__link"), c = () => /* @__PURE__ */ n.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
Ni.displayName = "ForwardLink";
const cn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function No() {
  return typeof window > "u" ? cn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function Ti() {
  const [e, t] = Y.useState(No());
  Y.useEffect(() => {
    if (typeof window > "u") return;
    const o = () => t(No());
    return window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, []);
  const r = Y.useCallback((o) => e >= cn[o], [e]), a = Y.useCallback((o) => e < cn[o], [e]), s = Y.useCallback((o, i) => e >= cn[o] && e < cn[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: s,
    /** Raw numeric values */
    values: cn
  };
}
function ib(e) {
  const { width: t, values: r } = Ti();
  let a = e.base;
  const s = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const o of s) {
    const i = r[o];
    t >= i && e[o] !== void 0 && (a = e[o]);
  }
  return a;
}
function pp(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [s, o] = Y.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = Y.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return Y.useEffect(() => {
    if (!t || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search);
    s ? d.set(r, String(s)) : d.delete(r), d.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${d.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [s, i, t, r, a]), { selectedId: s, setSelectedId: o, drilledIn: i, setDrilledIn: l };
}
const hp = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
), mp = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
function gp(e) {
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
    nextLabel: f = "Next",
    isLoading: m = !1,
    emptyState: y,
    a11y: w,
    className: v,
    getId: p = (pe) => pe.id,
    orientation: g = "vertical",
    autoEnableThirdColumn: F = !0,
    onDrillChange: I,
    navigationInstructions: j = "Use arrow keys to navigate, Enter to open.",
    initialFocus: P = "first",
    skipFocusOnSelect: D = !1,
    skipAnnouncements: A = !1,
    onFocusChange: T,
    syncUrl: _ = !1,
    urlParamSelected: C = "nsv",
    urlParamDrill: k = "nsvDrill",
    urlSyncDebounceMs: h = 0,
    lazySecondary: M = !1,
    navFooter: N,
    collapsibleNav: b = !1,
    navInitiallyCollapsed: S = !1,
    onNavCollapseChange: $,
    collapseToggleLabelShow: te = "Show navigation",
    collapseToggleLabelHide: U = "Hide navigation",
    collapseToggleIconShow: R,
    collapseToggleIconHide: W,
    persistNavCollapsed: B,
    navCollapsedStorageKey: ae = "nsvCollapsed",
    navCollapsedUrlParam: z = "nsvCollapsed",
    autoContentHeader: fe,
    contentHeaderLevel: ve = 2,
    renderContentHeader: le,
    contentSubheader: ue,
    secondarySubheader: J
  } = e, { up: ee } = Ti(), [de, x] = Y.useState(!1);
  Y.useEffect(() => {
    x(!0);
  }, []);
  const E = de && ee("medium"), H = de && ee("xlarge");
  let Z;
  d ? Z = d : E ? Z = "two-column" : Z = "list", !d && F && l && H && (Z = "three-column");
  const V = pp({
    enabled: _,
    paramSelected: C,
    paramDrill: k
  }), [ne, he] = Y.useState(
    () => V.selectedId !== void 0 ? V.selectedId : a
  ), we = r !== void 0 ? r : ne, ie = t.find((pe) => p(pe) === we), [q, G] = Y.useState(
    void 0
  );
  Y.useEffect(() => {
    if (we === void 0) return;
    G(we);
    const pe = setTimeout(() => G(void 0), 220);
    return () => clearTimeout(pe);
  }, [we]);
  const re = Y.useRef(null), Q = Y.useRef(null), L = Y.useRef(null), K = Y.useRef(null), [oe, X] = Y.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [O, se] = Y.useState(() => "nav"), [me, ce] = Y.useState(0), ke = () => [
    K.current,
    Q.current,
    L.current
  ].filter(Boolean), je = (pe) => {
    const Se = ke(), xe = Math.max(0, Math.min(pe, Se.length - 1));
    Se[xe]?.focus(), ce(xe);
  }, ye = Y.useCallback(
    (pe) => pe ? Array.from(pe.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (xe) => !xe.hasAttribute("disabled") && xe.tabIndex !== -1
    ) : [],
    []
  ), $e = Y.useCallback(
    (pe) => {
      const Se = ye(Q.current);
      if (!Se.length) {
        Q.current?.focus();
        return;
      }
      const xe = Math.max(0, Math.min(pe, Se.length - 1)), De = Se[xe];
      De.focus(), setTimeout(() => {
        document.activeElement !== De && (De.focus(), setTimeout(() => {
          document.activeElement !== De && De.click();
        }, 10));
      }, 10), X((We) => ({ ...We, contentIndex: xe }));
      const Ye = (We) => {
        We.key === "Escape" && (We.preventDefault(), We.stopPropagation(), Q.current?.focus(), De.removeEventListener("keydown", Ye));
      };
      Se.forEach((We) => {
        const Oe = We._escapeHandler;
        Oe && We.removeEventListener("keydown", Oe);
      }), De._escapeHandler = Ye, De.addEventListener("keydown", Ye);
    },
    [ye]
  ), Be = Y.useCallback(
    (pe) => {
      const Se = ye(L.current);
      if (!Se.length) {
        L.current?.focus();
        return;
      }
      const xe = Math.max(0, Math.min(pe, Se.length - 1)), De = Se[xe];
      De.focus(), setTimeout(() => {
        document.activeElement !== De && (De.focus(), setTimeout(() => {
          document.activeElement !== De && De.click();
        }, 10));
      }, 10), X((We) => ({ ...We, secondaryIndex: xe }));
      const Ye = (We) => {
        We.key === "Escape" && (We.preventDefault(), We.stopPropagation(), L.current?.focus(), De.removeEventListener("keydown", Ye));
      };
      Se.forEach((We) => {
        const Oe = We._escapeHandler;
        Oe && We.removeEventListener("keydown", Oe);
      }), De._escapeHandler = Ye, De.addEventListener("keydown", Ye);
    },
    [ye]
  ), Pe = (pe) => {
    if (pe.defaultPrevented) return;
    const Se = pe.key, xe = pe.target, De = !!at.current && at.current.contains(xe), Ye = !!Q.current && Q.current.contains(xe), We = !!L.current && L.current.contains(xe), Oe = !!L.current, sn = xe === K.current || xe === Q.current || xe === L.current, Yt = Ae && (Z === "list" || Z === "cards"), On = Ye && !!xe.closest(".nhs-navigation-split-view__header");
    if (O === "containers" && sn) {
      if (Se === "ArrowRight") {
        pe.preventDefault();
        const Ie = ke(), Ue = Math.min(Ie.length - 1, me + 1);
        je(Ue);
        return;
      }
      if (Se === "ArrowLeft") {
        pe.preventDefault();
        const Ie = Math.max(0, me - 1);
        je(Ie);
        return;
      }
      if (Se === "Home") {
        pe.preventDefault(), je(0);
        return;
      }
      if (Se === "End") {
        pe.preventDefault(), je(ke().length - 1);
        return;
      }
      if (Se === "Enter" || Se === " ") {
        if (pe.preventDefault(), xe === K.current) {
          if (se("nav"), at.current) {
            const Ie = Array.from(
              at.current.querySelectorAll("[data-nav-item]")
            );
            (Ie[Xe >= 0 ? Xe : 0] || Ie[0])?.focus();
          }
        } else xe === Q.current ? (se("content"), $e(oe.contentIndex)) : xe === L.current && (se("secondary"), Be(oe.secondaryIndex));
        return;
      }
      return;
    }
    if (Se === "Escape") {
      if (O === "content" || O === "secondary") {
        if (Ye || We) {
          if (pe.preventDefault(), se("nav"), at.current) {
            const Ue = Array.from(
              at.current.querySelectorAll("[data-nav-item]")
            )[Xe >= 0 ? Xe : 0];
            setTimeout(() => Ue?.focus(), 10);
          }
        } else if ((xe === Q.current || xe === L.current) && (pe.preventDefault(), se("nav"), at.current)) {
          const Ue = Array.from(
            at.current.querySelectorAll("[data-nav-item]")
          )[Xe >= 0 ? Xe : 0];
          setTimeout(() => Ue?.focus(), 10);
        }
      }
      return;
    }
    if (Se === "Enter" || Se === " ") {
      if (xe.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (xe === Q.current && O === "content") {
        pe.preventDefault(), pe.stopPropagation(), ye(Q.current).length > 0 && setTimeout(() => {
          $e(oe.contentIndex);
        }, 50);
        return;
      }
      if (xe === L.current && O === "secondary") {
        pe.preventDefault(), pe.stopPropagation(), ye(
          L.current
        ).length > 0 && setTimeout(() => {
          Be(oe.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Yt && On && !sn && (Se === "ArrowRight" || Se === "ArrowLeft")) {
      const Ie = ye(Q.current).filter(
        (Ue) => Ue.closest(".nhs-navigation-split-view__header")
      );
      if (Ie.length > 1) {
        const Ue = Ie.indexOf(xe);
        if (Ue >= 0) {
          const Ls = (Ue + (Se === "ArrowRight" ? 1 : -1) + Ie.length) % Ie.length;
          pe.preventDefault(), Ie[Ls].focus();
          return;
        }
      }
    }
    if (Se === "ArrowRight") {
      if (De || O === "nav") {
        pe.preventDefault(), se("content"), setTimeout(() => Q.current?.focus(), 10);
        return;
      }
      if (Ye || O === "content") {
        Oe && (pe.preventDefault(), se("secondary"), setTimeout(() => L.current?.focus(), 10));
        return;
      }
    }
    if (Se === "ArrowLeft") {
      if (We || O === "secondary") {
        pe.preventDefault(), se("content"), setTimeout(() => Q.current?.focus(), 10);
        return;
      }
      if (Ye || O === "content") {
        if (pe.preventDefault(), se("nav"), at.current) {
          const Ue = Array.from(
            at.current.querySelectorAll("[data-nav-item]")
          )[Xe >= 0 ? Xe : 0];
          setTimeout(() => Ue?.focus(), 10);
        }
        return;
      }
    }
    if (Se === "Home" && !De && (pe.preventDefault(), se("nav"), at.current)) {
      const Ie = Array.from(
        at.current.querySelectorAll("[data-nav-item]")
      ), Ue = Ie[Xe >= 0 ? Xe : 0] || Ie[0];
      setTimeout(() => Ue?.focus(), 10);
    }
    if (Se === "End") {
      const Ie = Oe ? L.current : Q.current;
      Ie && !Ie.contains(xe) && (pe.preventDefault(), Oe ? (se("secondary"), setTimeout(() => L.current?.focus(), 10)) : (se("content"), setTimeout(() => Q.current?.focus(), 10)));
    }
    if (Se === "ArrowDown" || Se === "ArrowUp") {
      if (xe === Q.current && Se === "ArrowDown") {
        pe.preventDefault(), ye(Q.current).length > 0 && $e(0);
        return;
      }
      if (xe === L.current && Se === "ArrowDown") {
        pe.preventDefault(), ye(
          L.current
        ).length > 0 && Be(0);
        return;
      }
      if (Ye) {
        const Ie = ye(Q.current);
        if (Ie.length) {
          pe.preventDefault();
          const Ue = Se === "ArrowDown" ? 1 : -1, yt = (oe.contentIndex + Ue + Ie.length) % Ie.length;
          $e(yt);
        }
      } else if (We) {
        const Ie = ye(L.current);
        if (Ie.length) {
          pe.preventDefault();
          const Ue = Se === "ArrowDown" ? 1 : -1, yt = (oe.secondaryIndex + Ue + Ie.length) % Ie.length;
          Be(yt);
        }
      }
    }
  }, Ae = !!ie && (Z === "list" || Z === "cards"), Ge = Y.useMemo(() => fe === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : fe === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : fe === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: fe.mobile !== void 0 ? fe.mobile : !0,
    tablet: fe.tablet || !1,
    desktop: fe.desktop || !1
  }, [fe]), Ve = de && ee("medium") && !ee("xlarge"), Je = de && ee("xlarge"), xt = !!l, Qe = Z === "three-column", [tt, vn] = Y.useState(!1);
  Y.useEffect(() => {
    Qe && tt && vn(!1);
  }, [Qe, tt]), Y.useEffect(() => {
    tt && !Qe && (se("secondary"), ce(2), setTimeout(() => {
      L.current?.focus();
    }, 50));
  }, [tt, Qe]), Y.useEffect(() => {
    !tt && !Qe && O === "secondary" && (se("content"), ce(1), setTimeout(() => {
      Q.current?.focus();
    }, 50));
  }, [tt, Qe, O]);
  const Jr = !!ie && (Ae && Ge.mobile || !Ae && Ve && Ge.tablet || !Ae && Je && Ge.desktop) || xt && !Qe, Xl = `h${ve}`, Qr = ie ? Y.createElement(
    Xl,
    {
      style: {
        marginLeft: Ae ? 32 : 0,
        marginRight: Ae ? 32 : 0
      }
    },
    ie.label
  ) : null, Is = Ae ? "mobile" : Ve ? "tablet" : "desktop", Kl = xt && !Qe && !tt, ea = Ae && Ge.mobile ? /* @__PURE__ */ n.jsx(
    Na,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => an(void 0, void 0)
    }
  ) : void 0, ta = Kl ? /* @__PURE__ */ n.jsx(
    Ni,
    {
      element: "button",
      text: f,
      onClick: () => {
        vn(!0);
      }
    }
  ) : void 0, na = !Qe && tt ? /* @__PURE__ */ n.jsx(
    Na,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => vn(!1)
    }
  ) : void 0, Zl = Y.useMemo(() => {
    if (!Jr || !ie) return null;
    if (le)
      return le({
        item: ie,
        detailActive: Ae,
        context: Is,
        backLink: ea,
        defaultHeading: Qr
      });
    const pe = ie && ue ? typeof ue == "function" ? ue(ie) : ue : null;
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
            na || ea,
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
                  Qr,
                  pe && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: pe })
                ]
              }
            )
          ]
        }
      ),
      ta && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: ta })
    ] });
  }, [
    Jr,
    ie,
    le,
    Ae,
    Is,
    ea,
    na,
    Qr,
    ta,
    ue
  ]);
  Y.useEffect(() => {
    if (!_) return;
    const pe = Z === "three-column";
    let Se = !1;
    const xe = () => {
      Se || (V.selectedId !== we && V.setSelectedId(we), V.drilledIn !== pe && V.setDrilledIn(pe));
    };
    if (h && h > 0) {
      const De = setTimeout(xe, h);
      return () => {
        Se = !0, clearTimeout(De);
      };
    } else
      xe();
  }, [_, V, we, Z, h]), Y.useEffect(() => {
    if (!_) return;
    const pe = () => {
      const Se = new URLSearchParams(window.location.search), xe = Se.get(C);
      Se.get(k), he(xe === null ? void 0 : xe);
    };
    return window.addEventListener("popstate", pe), () => window.removeEventListener("popstate", pe);
  }, [
    _,
    C,
    k,
    d,
    l
  ]);
  const Wn = Y.useRef(0), St = Y.useRef(
    null
  ), an = Y.useCallback(
    (pe, Se) => {
      pe !== we && (r === void 0 && he(pe), s?.(pe, Se));
    },
    [r, s, we]
  );
  Y.useEffect(() => {
    if (!D && Ae && Q.current) {
      const pe = setTimeout(() => Q.current?.focus(), 30);
      return () => clearTimeout(pe);
    }
  }, [Ae, we, D]);
  const at = Y.useRef(null), [Xe, _n] = Y.useState(
    () => P === "first" ? 0 : -1
  );
  Y.useEffect(() => {
    if (Xe < 0 || !at.current) return;
    const Se = Array.from(
      at.current.querySelectorAll("[data-nav-item]")
    )[Xe];
    if (Se) {
      document.activeElement !== Se && Se.focus(), Wn.current = Xe;
      const xe = t[Xe];
      T?.(
        xe ? p(xe) : void 0,
        xe,
        Xe
      );
    }
  }, [Xe, t, T, p]);
  const Jl = (pe) => {
    const Se = g === "vertical" ? "ArrowDown" : "ArrowRight", xe = g === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (pe.key === "ArrowRight" && g === "vertical") {
      pe.preventDefault(), tt ? (se("secondary"), setTimeout(() => {
        L.current?.focus();
      }, 10)) : (se("content"), setTimeout(() => {
        Q.current?.focus();
      }, 10));
      return;
    }
    if (pe.key === Se)
      pe.preventDefault(), _n((De) => Math.min(t.length - 1, De + 1));
    else if (pe.key === xe)
      pe.preventDefault(), _n((De) => Math.max(0, De - 1));
    else if (pe.key === "Home")
      pe.preventDefault(), _n(0);
    else if (pe.key === "End")
      pe.preventDefault(), _n(t.length - 1);
    else if (pe.key === "Enter" || pe.key === " ") {
      pe.preventDefault();
      const De = t[Xe];
      De && !De.disabled && an(p(De), De);
    } else if (pe.key.length === 1 && /[a-z0-9]/i.test(pe.key)) {
      St.current || (St.current = { buffer: "", last: 0 });
      const De = Date.now(), Ye = 700, We = pe.key.toLowerCase();
      De - St.current.last > Ye ? St.current.buffer = We : St.current.buffer += We, St.current.last = De;
      let Oe = St.current.buffer;
      const sn = Oe.split("").every((yt) => yt === Oe[0]), Yt = t.map(
        (yt) => String(yt.label || "").toLowerCase()
      );
      let On = 0;
      Xe >= 0 && (On = (Xe + 1) % t.length);
      let Ie;
      const Ue = (yt, Ls) => {
        const Fs = t.length;
        for (let sa = 0; sa < Fs; sa++) {
          const oa = (On + sa) % Fs;
          if (!t[oa].disabled && Yt[oa].startsWith(yt))
            return oa;
        }
      };
      sn && Oe.length > 1 ? Ie = Ue(Oe[0]) : (Ie = Ue(Oe), Ie === void 0 && Oe.length > 1 && (Ie = Ue(Oe[Oe.length - 1]), Ie !== void 0 && St.current && (St.current.buffer = Oe[Oe.length - 1]))), Ie !== void 0 && _n(Ie);
    }
  }, Ql = Y.useMemo(() => {
    if (B && (B === "url" || B === "both") && typeof window < "u") {
      const Se = new URLSearchParams(window.location.search).get(z);
      if (Se === "1") return !0;
      if (Se === "0") return !1;
    }
    if (B && (B === "localStorage" || B === "both") && typeof window < "u")
      try {
        const pe = window.localStorage.getItem(ae);
        if (pe === "1") return !0;
        if (pe === "0") return !1;
      } catch {
      }
    return S;
  }, [
    B,
    S,
    ae,
    z
  ]), [bt, ec] = Y.useState(Ql);
  Y.useEffect(() => {
    $?.(bt);
  }, [bt, $]);
  const tc = Y.useCallback(() => {
    E && b && ec((pe) => !pe);
  }, [E, b]);
  Y.useEffect(() => {
    if (B && !(typeof window > "u")) {
      if (B === "localStorage" || B === "both")
        try {
          window.localStorage.setItem(
            ae,
            bt ? "1" : "0"
          );
        } catch {
        }
      if (B === "url" || B === "both") {
        const pe = new URLSearchParams(window.location.search);
        pe.set(z, bt ? "1" : "0");
        const Se = `${window.location.pathname}?${pe.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", Se);
      }
    }
  }, [
    bt,
    B,
    ae,
    z
  ]);
  const nc = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Ae ? "nhs-navigation-split-view--detail-active" : "",
    Z === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    b && E && bt ? "nhs-navigation-split-view--nav-collapsed" : "",
    v
  ].filter(Boolean).join(" "), ra = Y.useRef(null);
  Y.useEffect(() => {
    if (!A && ra.current) {
      const pe = ie ? `Selected ${ie.label}` : "Selection cleared";
      ra.current.textContent = pe;
    }
  }, [ie, A]), Y.useEffect(() => {
    !Ae && we == null && at.current && at.current.querySelectorAll("[data-nav-item]")[Wn.current]?.focus();
  }, [Ae, we]);
  const Wt = Z === "three-column", [aa, rc] = Y.useState(!1);
  Y.useEffect(() => {
    Wt && !aa && rc(!0);
  }, [Wt, aa]);
  const Ms = Y.useRef(Wt);
  Y.useEffect(() => {
    Ms.current !== Wt && (I?.(Wt), Ms.current = Wt);
  }, [Wt, I]);
  const ac = () => {
    if (Z === "cards")
      return /* @__PURE__ */ n.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": we ? String(we) : void 0,
          children: [
            t.map((xe) => {
              const De = p(xe), Ye = De === we;
              return /* @__PURE__ */ n.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": Ye,
                  children: /* @__PURE__ */ n.jsxs(
                    "button",
                    {
                      id: String(De),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": Ye || void 0,
                      "data-disabled": xe.disabled || void 0,
                      disabled: xe.disabled,
                      onClick: () => !xe.disabled && an(De, xe),
                      children: [
                        xe.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: xe.icon }),
                        /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: xe.label }),
                        xe.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: xe.description }),
                        o?.(xe),
                        xe.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: xe.badge })
                      ]
                    }
                  )
                },
                De
              );
            }),
            t.length === 0 && !m && /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                "aria-disabled": "true",
                children: y || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const pe = "nsv-nav-instructions", Se = Y.useMemo(() => Y.memo(
      ({
        item: xe,
        idx: De,
        selected: Ye,
        focused: We
      }) => {
        const Oe = p(xe), sn = xe.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: We ? 0 : -1,
          onClick: () => {
            Wn.current = De, an(Oe, xe);
          },
          onKeyDown: (Yt) => {
            (Yt.key === "Enter" || Yt.key === " ") && (Yt.preventDefault(), Wn.current = De, an(Oe, xe));
          }
        };
        return /* @__PURE__ */ n.jsxs(
          "li",
          {
            id: String(Oe),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": Ye,
            "aria-current": Ye ? "true" : void 0,
            "data-selected": Ye || void 0,
            "data-disabled": xe.disabled || void 0,
            ...sn,
            children: [
              xe.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: xe.icon }),
              /* @__PURE__ */ n.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: xe.label }),
                xe.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: xe.description }),
                o?.(xe)
              ] }),
              xe.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: xe.badge })
            ]
          }
        );
      }
    ), [p, an, o]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: at,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Jl,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": pe,
          "aria-activedescendant": we ? String(we) : void 0,
          children: [
            t.map((xe, De) => /* @__PURE__ */ n.jsx(
              Se,
              {
                item: xe,
                idx: De,
                selected: p(xe) === we,
                focused: De === Xe || Xe === -1 && De === 0 && P === "first",
                "data-just-selected": p(xe) === q ? "true" : void 0
              },
              p(xe)
            )),
            t.length === 0 && !m && /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__list-item",
                "aria-disabled": "true",
                children: y || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          id: pe,
          style: {
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0 0 0 0)"
          },
          children: j
        }
      )
    ] });
  };
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: re,
      className: nc,
      "aria-label": w?.rootLabel,
      "data-layout": Z,
      onKeyDown: Pe,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Ae || void 0,
            style: { transform: Ae ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: K,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": w?.navigationLabel || "Items",
                  "data-collapsed": bt || void 0,
                  tabIndex: 0,
                  children: [
                    b && E && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: tc,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": bt ? te : U,
                        title: bt ? te : U,
                        children: bt ? R || /* @__PURE__ */ n.jsx(mp, {}) : W || /* @__PURE__ */ n.jsx(hp, {})
                      }
                    ) }),
                    /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: ac() }),
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
                  ref: Q,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": w?.contentLabel || "Content",
                  "data-has-selection": !!ie || void 0,
                  tabIndex: 0,
                  style: {
                    display: tt && !Qe ? "none" : void 0
                  },
                  children: [
                    Jr && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: Zl }),
                    /* @__PURE__ */ n.jsx(
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
              Z === "three-column" && (!M || aa) || tt && !Qe ? /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: L,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": w?.secondaryContentLabel || "Secondary",
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
                        tt && !Qe && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ n.jsx(
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
                                  na,
                                  /* @__PURE__ */ n.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ n.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: ie && typeof ie == "object" && "label" in ie ? ie.label : String(ie) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        ie && J && /* @__PURE__ */ n.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof J == "function" ? J(ie) : J
                          }
                        ),
                        /* @__PURE__ */ n.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(ie) })
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
            ref: ra,
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
            children: Wt ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
gp.displayName = "NavigationSplitView";
const To = (e, t, r, a) => e == null || Number.isNaN(e) ? a : Math.min(r, Math.max(t, e)), xp = ({ item: e, maxLines: t, enableDrilldown: r, onExpand: a, isActive: s, topLaneIndex: o }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, d = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${o})`, u = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), m = r && e.childItems && e.childItems.length > 0, y = (v) => {
    m && (v.preventDefault(), a?.(e));
  }, w = m ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": s || !1,
    onClick: y,
    onKeyDown: (v) => {
      (v.key === "Enter" || v.key === " ") && y(v), v.key === "Escape" && s && y(v);
    }
  } : {};
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: be("nhsuk-product-roadmap__item", m && "nhsuk-product-roadmap__item--expandable", s && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: d, top: c, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": u,
      "aria-colspan": f,
      ...w,
      children: [
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          m && /* @__PURE__ */ n.jsx("span", { className: be("nhsuk-product-roadmap__item-expander", s && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, bp = ic(({
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
  const [u, f] = Le(() => /* @__PURE__ */ new Set()), [m, y] = Le(() => /* @__PURE__ */ new Set()), w = Ee(/* @__PURE__ */ new Set()), v = ge((h) => u.has(h), [u]), p = ge((h) => {
    f((M) => {
      const N = new Set(M);
      return N.has(h.id) ? (N.delete(h.id), y((b) => {
        const S = new Set(b);
        return S.add(h.id), S;
      }), setTimeout(() => y((b) => {
        const S = new Set(b);
        return S.delete(h.id), S;
      }), 240), l?.(h.id, !1)) : (N.add(h.id), l?.(h.id, !0)), N;
    });
  }, [l]);
  lc(() => {
    if (d !== "inline" || !i) return;
    const h = [];
    if (u.forEach((S) => {
      w.current.has(S) || h.push(S);
    }), w.current = new Set(u), !h.length) return;
    const M = typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches, N = h.map((S) => `.nhsuk-product-roadmap__inline-children[data-parent="${S}"] .nhsuk-product-roadmap__inline-child`).join(","), b = Array.from(document.querySelectorAll(N));
    if (b.length) {
      if (M) {
        b.forEach((S) => {
          S.style.opacity = "1", S.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((S) => {
        (S.gsap || S.default || S).to(b, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        b.forEach((S) => {
          S.style.opacity = "1", S.style.transform = "translateY(0)";
        });
      });
    }
  }, [u, d, i]);
  const g = ge(() => {
    u.size && f(/* @__PURE__ */ new Set());
  }, [u]), F = be("nhsuk-product-roadmap", s), I = To(r, 120, 1200, 400), j = To(a, 1, 6, 2), P = Me(() => e.map((h) => /* @__PURE__ */ new Date(h + " 01")), [e]), D = Me(() => {
    if (P.length === 0) {
      const N = /* @__PURE__ */ new Date();
      return [N, N];
    }
    const h = new Date(P[0]), M = Fn.offset(new Date(P[P.length - 1]), 1);
    return [h, M];
  }, [P]), A = Me(() => Ss().domain(D).range([0, P.length * I]), [D, P.length, I]), T = ge((h) => {
    if (h.startDate) {
      const U = new Date(h.startDate), R = new Date(h.endDate ?? h.startDate);
      R < U && R.setTime(U.getTime());
      const W = A(U), B = Fn.offset(new Date(R), 1);
      let ae = A(B);
      Number.isFinite(ae) || (ae = W + I);
      const z = Math.max(I * 0.25, ae - W), fe = W / I, ve = z / I;
      return { ...h, _pxLeft: W, _pxWidth: z, _startFraction: fe, _spanColumns: ve };
    }
    const M = h.date ?? 1, N = h.dateOffset ?? 0, b = h.length ?? 1, S = h.partialLength ?? 1, $ = M - 1 + N, te = b - 1 + S;
    return { ...h, _pxLeft: $ * I, _pxWidth: te * I, _startFraction: $, _spanColumns: te };
  }, [A, I]), _ = Me(() => t.map((h) => {
    const N = h.roadmapItems.map((S) => {
      const $ = !S.childItems && S.children ? { ...S, childItems: S.children } : { ...S };
      return T($);
    }).sort((S, $) => S._pxLeft !== $._pxLeft ? S._pxLeft - $._pxLeft : $._pxWidth - S._pxWidth), b = [];
    return N.forEach((S) => {
      const $ = S._pxLeft, te = S._pxLeft + S._pxWidth;
      let U = b.findIndex((R) => R <= $);
      U === -1 && (U = b.length, b.push(0)), b[U] = te, S.verticalPosition = U + 1;
    }), { ...h, roadmapItems: N, _laneCount: b.length };
  }), [t, T]), C = Me(() => _.map((h) => h._laneCount || 1), [_]), k = Me(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: F,
      style: { "--column-width": `${I}px`, gridTemplateColumns: k },
      role: "grid",
      "aria-label": o,
      "aria-colcount": e.length + 1,
      "aria-rowcount": _.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((h, M) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": M + 2, children: h }, `${h}-${M}`))
        ] }),
        _.map((h, M) => {
          const N = M + 2, b = C[M];
          let S, $ = 0, te = [];
          i && d === "inline" && (te = h.roadmapItems.filter((B) => v(B.id) && B.childItems && B.childItems.length).map((B) => ({ id: B.id, lane: B.verticalPosition || 1, count: B.childItems.length })).sort((B, ae) => B.lane - ae.lane), $ = te.reduce((B, ae) => B + ae.count, 0));
          const U = b + $;
          S = `calc((${U} * var(--roadmap-item-block-height)) + (max(0, ${U} - 1) * var(--roadmap-row-gap)))`;
          const R = {};
          let W = 0;
          return te.forEach((B) => {
            W += B.count, R[B.lane + 1] = W;
          }), /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": N, children: [
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: h.heading }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: S }, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: h.roadmapItems.map((B, ae) => {
              const z = (B.verticalPosition || 1) - 1, fe = te.filter((J) => J.lane - 1 < z).reduce((J, ee) => J + ee.count, 0), ve = z + fe, le = v(B.id), ue = m.has(B.id);
              return /* @__PURE__ */ n.jsxs(ut.Fragment, { children: [
                /* @__PURE__ */ n.jsx(xp, { item: B, maxLines: j, enableDrilldown: i, onExpand: p, isActive: le, topLaneIndex: ve, laneOffset: fe }),
                i && d === "inline" && (le || ue) && B.childItems && /* @__PURE__ */ n.jsx("div", { "data-parent": B.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${B.title} child tasks`, children: B.childItems.map((J, ee) => {
                  const de = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let x = B._pxLeft, E = B._pxWidth;
                  if (J.startDate) {
                    const V = new Date(J.startDate);
                    let ne = J.endDate ? new Date(J.endDate) : new Date(V);
                    ne < V && (ne = new Date(V));
                    const he = new Date(ne);
                    he.setDate(he.getDate() + 1);
                    const we = A(V);
                    let ie = A(he);
                    (!Number.isFinite(ie) || ie <= we) && (ie = we + 6), x = we, E = Math.max(6, ie - we);
                  }
                  const Z = ve + 1 + ee;
                  return /* @__PURE__ */ n.jsxs(
                    "div",
                    {
                      className: be("nhsuk-product-roadmap__inline-child", J.status && `nhsuk-product-roadmap__inline-child--status-${J.status}`, !le && ue && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${x}px`, width: `${E}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${Z})`, height: de, opacity: le ? 0 : void 0, transform: le ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: J.title })
                      ]
                    },
                    J.id ?? ee
                  );
                }) })
              ] }, B.id ?? ae);
            }) }) })
          ] }, `${h.heading}-${M}`);
        }),
        i && d === "overlay" && u.size === 1 && (() => {
          const h = Array.from(u)[0], M = t.flatMap((N) => N.roadmapItems).find((N) => N.id === h);
          return !M || !M.childItems ? null : /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${M.title} details`, children: [
            /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ n.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: M.title }),
                /* @__PURE__ */ n.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: g, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: M.content }),
              /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: M.childItems.map((N, b) => /* @__PURE__ */ n.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: N.title }),
                N.content && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: N.content })
              ] }, N.id ?? b)) })
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: g, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
bp.displayName = "ProductRoadmap";
function Di(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = Di(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function ur() {
  for (var e, t, r = 0, a = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = Di(e)) && (a && (a += " "), a += t);
  return a;
}
function nt(e) {
  return function() {
    return e;
  };
}
const Ea = Math.PI, Aa = 2 * Ea, Xt = 1e-6, yp = Aa - Xt;
function $i(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function vp(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return $i;
  const r = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let s = 1, o = a.length; s < o; ++s)
      this._ += Math.round(arguments[s] * r) / r + a[s];
  };
}
class _p {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? $i : vp(t);
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
    let i = this._x1, l = this._y1, d = a - t, c = s - r, u = i - t, f = l - r, m = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (m > Xt) if (!(Math.abs(f * d - c * u) > Xt) || !o)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let y = a - i, w = s - l, v = d * d + c * c, p = y * y + w * w, g = Math.sqrt(v), F = Math.sqrt(m), I = o * Math.tan((Ea - Math.acos((v + m - p) / (2 * g * F))) / 2), j = I / F, P = I / g;
      Math.abs(j - 1) > Xt && this._append`L${t + j * u},${r + j * f}`, this._append`A${o},${o},0,0,${+(f * y > u * w)},${this._x1 = t + P * d},${this._y1 = r + P * c}`;
    }
  }
  arc(t, r, a, s, o, i) {
    if (t = +t, r = +r, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(s), d = a * Math.sin(s), c = t + l, u = r + d, f = 1 ^ i, m = i ? s - o : o - s;
    this._x1 === null ? this._append`M${c},${u}` : (Math.abs(this._x1 - c) > Xt || Math.abs(this._y1 - u) > Xt) && this._append`L${c},${u}`, a && (m < 0 && (m = m % Aa + Aa), m > yp ? this._append`A${a},${a},0,1,${f},${t - l},${r - d}A${a},${a},0,1,${f},${this._x1 = c},${this._y1 = u}` : m > Xt && this._append`A${a},${a},0,${+(m >= Ea)},${f},${this._x1 = t + a * Math.cos(o)},${this._y1 = r + a * Math.sin(o)}`);
  }
  rect(t, r, a, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${a = +a}v${+s}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function Ii(e) {
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
  }, () => new _p(t);
}
function Mi(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Li(e) {
  this._context = e;
}
Li.prototype = {
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
function Fi(e) {
  return new Li(e);
}
function Pi(e) {
  return e[0];
}
function Ei(e) {
  return e[1];
}
function Ai(e, t) {
  var r = nt(!0), a = null, s = Fi, o = null, i = Ii(l);
  e = typeof e == "function" ? e : e === void 0 ? Pi : nt(e), t = typeof t == "function" ? t : t === void 0 ? Ei : nt(t);
  function l(d) {
    var c, u = (d = Mi(d)).length, f, m = !1, y;
    for (a == null && (o = s(y = i())), c = 0; c <= u; ++c)
      !(c < u && r(f = d[c], c, d)) === m && ((m = !m) ? o.lineStart() : o.lineEnd()), m && o.point(+e(f, c, d), +t(f, c, d));
    if (y) return o = null, y + "" || null;
  }
  return l.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : nt(+d), l) : e;
  }, l.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : nt(+d), l) : t;
  }, l.defined = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : nt(!!d), l) : r;
  }, l.curve = function(d) {
    return arguments.length ? (s = d, a != null && (o = s(a)), l) : s;
  }, l.context = function(d) {
    return arguments.length ? (d == null ? a = o = null : o = s(a = d), l) : a;
  }, l;
}
function Ra(e, t, r) {
  var a = null, s = nt(!0), o = null, i = Fi, l = null, d = Ii(c);
  e = typeof e == "function" ? e : e === void 0 ? Pi : nt(+e), t = typeof t == "function" ? t : nt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Ei : nt(+r);
  function c(f) {
    var m, y, w, v = (f = Mi(f)).length, p, g = !1, F, I = new Array(v), j = new Array(v);
    for (o == null && (l = i(F = d())), m = 0; m <= v; ++m) {
      if (!(m < v && s(p = f[m], m, f)) === g)
        if (g = !g)
          y = m, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), w = m - 1; w >= y; --w)
            l.point(I[w], j[w]);
          l.lineEnd(), l.areaEnd();
        }
      g && (I[m] = +e(p, m, f), j[m] = +t(p, m, f), l.point(a ? +a(p, m, f) : I[m], r ? +r(p, m, f) : j[m]));
    }
    if (F) return l = null, F + "" || null;
  }
  function u() {
    return Ai().defined(s).curve(i).context(o);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : nt(+f), a = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : nt(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : nt(+f), c) : a;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : nt(+f), r = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : nt(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : nt(+f), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return u().x(e).y(t);
  }, c.lineY1 = function() {
    return u().x(e).y(r);
  }, c.lineX1 = function() {
    return u().x(a).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : nt(!!f), c) : s;
  }, c.curve = function(f) {
    return arguments.length ? (i = f, o != null && (l = i(o)), c) : i;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? o = l = null : l = i(o = f), c) : o;
  }, c;
}
function Do(e) {
  return e < 0 ? -1 : 1;
}
function $o(e, t, r) {
  var a = e._x1 - e._x0, s = t - e._x1, o = (e._y1 - e._y0) / (a || s < 0 && -0), i = (r - e._y1) / (s || a < 0 && -0), l = (o * s + i * a) / (a + s);
  return (Do(o) + Do(i)) * Math.min(Math.abs(o), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function Io(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function xa(e, t, r) {
  var a = e._x0, s = e._y0, o = e._x1, i = e._y1, l = (o - a) / 3;
  e._context.bezierCurveTo(a + l, s + l * t, o - l, i - l * r, o, i);
}
function fr(e) {
  this._context = e;
}
fr.prototype = {
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
        xa(this, this._t0, Io(this, this._t0));
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
          this._point = 3, xa(this, Io(this, r = $o(this, e, t)), r);
          break;
        default:
          xa(this, this._t0, r = $o(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
Object.create(fr.prototype).point = function(e, t) {
  fr.prototype.point.call(this, t, e);
};
function pr(e) {
  return new fr(e);
}
function wp(e, t, r) {
  const a = Xo(e, t);
  return Ss().domain(a).range(r);
}
function Mo(e, t, r) {
  const [a, s] = Xo(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(s)))
    return sr().domain([0, 0]).range(r);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const d = s - a, c = (d > 0 ? d : a) * 0.1;
    i = Math.max(0, a - c), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = s ?? 0;
  return sr().domain([i, l]).nice().range(r);
}
function Ba(e, t, r, a) {
  const s = Ai().x(t).y(r);
  return a?.smooth !== !1 && s.curve(pr), s(e) ?? "";
}
function Sp(e = {}) {
  const t = Y.useRef(null), r = Y.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, s] = Y.useState({ width: 0, height: 0 });
  Y.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((d) => {
      for (const c of d) {
        const { width: u, height: f } = c.contentRect;
        s({ width: u, height: f });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const o = Math.max(0, a.width - r.left - r.right), i = Math.max(0, a.height - r.top - r.bottom);
  return { width: a.width, height: a.height, innerWidth: o, innerHeight: i, margin: r, ref: t };
}
const Ri = Y.createContext(null);
function Vt() {
  return Y.useContext(Ri);
}
const kp = ({
  height: e = 240,
  margin: t,
  width: r,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: s,
  role: o = "group",
  ariaLabel: i
}) => {
  const l = Sp(t), d = { height: e, position: "relative" };
  return r !== void 0 && (d.width = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n.jsx("div", { ref: l.ref, className: a, style: d, role: o, "aria-label": i, children: /* @__PURE__ */ n.jsx(Ri.Provider, { value: l, children: s }) });
}, Cs = Y.createContext(null), rn = () => Y.useContext(Cs), Cp = ({
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
  const u = Vt(), f = t ?? u?.innerWidth ?? 0, m = r ?? u?.innerHeight ?? 0, y = Y.useMemo(() => e.flatMap((j) => j.data), [e]), w = Y.useCallback((j) => {
    if (a) return a(j);
    const P = j.x;
    return P instanceof Date ? P : new Date(P);
  }, [a]), v = d ?? 6, p = c ?? 6, g = Y.useMemo(() => wp(y, w, [v, Math.max(0, f - v)]), [y, w, f, v]), F = Y.useMemo(() => {
    if (l) {
      const j = Mo([], (P) => P.y, [Math.max(0, m - p), p]);
      return j.domain(l), j;
    }
    return Mo(y, (j) => j.y, [Math.max(0, m - p), p]);
  }, [y, m, l]), I = Y.useMemo(() => ({
    xScale: g,
    yScale: F,
    getXTicks: (j = o) => g.ticks(j),
    getYTicks: (j = i) => F.ticks(j)
  }), [g, F, o, i]);
  return /* @__PURE__ */ n.jsx(Cs.Provider, { value: I, children: s });
}, Lo = ({
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
  labelAngle: f = 0,
  allowLabelWrap: m = !0,
  tickFormatPreset: y
}) => {
  const w = rn(), v = Vt(), p = t || (e === "x" ? w?.xScale : w?.yScale), g = r ?? (e === "x" ? 6 : 5), F = typeof s == "function", I = Y.useMemo(() => {
    if (F || !y) return;
    const D = (A) => new Intl.DateTimeFormat(void 0, A);
    switch (y) {
      case "dayShortMonth":
        return (A) => {
          const T = A instanceof Date ? A : new Date(A);
          return `${T.getDate()}
${D({ month: "short" }).format(T)}`;
        };
      case "dayShortMonthYear":
        return (A) => {
          const T = A instanceof Date ? A : new Date(A);
          return `${T.getDate()}
${D({ month: "short" }).format(T)} ${T.getFullYear()}`;
        };
      case "shortMonth":
        return (A) => {
          const T = A instanceof Date ? A : new Date(A);
          return D({ month: "short" }).format(T);
        };
      case "shortMonthYear":
        return (A) => {
          const T = A instanceof Date ? A : new Date(A);
          return `${D({ month: "short" }).format(T)} ${T.getFullYear()}`;
        };
      case "hourMinute":
        return (A) => {
          const T = A instanceof Date ? A : new Date(A);
          return D({ hour: "2-digit", minute: "2-digit" }).format(T);
        };
      default:
        return;
    }
  }, [F, y]);
  let j = F ? s : I || ((D) => String(D));
  const P = Y.useMemo(() => a && Array.isArray(a) ? a : p ? typeof p.ticks == "function" ? p.ticks(g) : p.domain ? p.domain() : [] : [], [p, g, a]);
  if (e === "x" && !F && !y && P.length && P.every((D) => D instanceof Date)) {
    const D = P[0], A = P[P.length - 1], T = A.getTime() - D.getTime(), _ = 24 * 3600 * 1e3, C = 365 * _, k = D.getFullYear() === A.getFullYear(), h = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (T < 2 * _) {
      const M = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      j = (N) => M.format(N);
    } else if (T < 32 * _)
      j = (M) => {
        const N = M;
        return `${N.getDate()} ${h.format(N)}`;
      };
    else if (T < C && k)
      j = (M) => h.format(M);
    else if (T < 2 * C) {
      const M = /* @__PURE__ */ new Set();
      j = (N) => {
        const b = N, S = b.getMonth();
        return M.has(S) || M.add(S), `${h.format(b)} ${b.getFullYear()}`;
      };
    } else
      j = (M) => String(M.getFullYear());
  }
  if (!p || !v) return null;
  if (e === "x") {
    const D = i ?? v.innerHeight, A = typeof p.bandwidth == "function", T = A ? p.bandwidth() : 0, _ = (h) => {
      const M = p(h);
      return A ? M + T / 2 : M;
    };
    let C = d ?? 0;
    if (u && d == null) {
      const h = P.map((N) => j(N).replace(/\n.*/g, "")), M = h.length ? h.reduce((N, b) => N + b.length, 0) / h.length : 0;
      C = Math.max(12, Math.round(M * 6 + 4));
    }
    const k = Y.useMemo(() => {
      if (a && Array.isArray(a) || C <= 0) return P;
      const h = [];
      let M = -1 / 0;
      for (const N of P) {
        const b = _(N);
        b - M >= C && (h.push(N), M = b);
      }
      return h;
    }, [P, p, C, a, A, T]);
    return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${D})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ n.jsx("line", { x1: 0, x2: v.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      k.map((h, M) => {
        const N = j(h), b = c && N.length > c ? N.slice(0, Math.max(1, c - 1)) + "…" : N, S = m ? b.split(/\n/) : [b.replace(/\n/g, " ")], $ = f < 0 ? "end" : f > 0 ? "start" : "middle";
        return /* @__PURE__ */ n.jsxs("g", { transform: `translate(${_(h)},0)`, children: [
          /* @__PURE__ */ n.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ n.jsxs("text", { y: 9, textAnchor: $, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: f ? `rotate(${f})` : void 0, fontFamily: "inherit", children: [
            S.map((te, U) => /* @__PURE__ */ n.jsx("tspan", { x: 0, dy: U === 0 ? 0 : "1.1em", children: te }, U)),
            b !== N && /* @__PURE__ */ n.jsx("title", { children: N })
          ] })
        ] }, h?.toString?.() || M);
      })
    ] });
  }
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    P.map((D, A) => {
      const T = j(D), _ = c && T.length > c ? T.slice(0, Math.max(1, c - 1)) + "…" : T, C = m ? _.split(/\n/) : [_.replace(/\n/g, " ")];
      return /* @__PURE__ */ n.jsxs("g", { transform: `translate(0,${p(D)})`, children: [
        /* @__PURE__ */ n.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ n.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          C.map((k, h) => /* @__PURE__ */ n.jsx("tspan", { x: -9, dy: h === 0 ? 0 : "1.1em", children: k }, h)),
          _ !== T && /* @__PURE__ */ n.jsx("title", { children: T })
        ] })
      ] }, D?.toString?.() || A);
    }),
    o && /* @__PURE__ */ n.jsx("text", { transform: "rotate(-90)", x: -v.innerHeight / 2, y: -v.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: o })
  ] });
}, jp = ({
  axis: e = "y",
  tickCount: t,
  stroke: r = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: s
}) => {
  const o = rn(), i = Vt();
  if (!o || !i) return null;
  const l = e === "y" ? o.getYTicks(t) : o.getXTicks(t);
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-grid", s].filter(Boolean).join(" "), children: [
    e === "y" && l.map((d, c) => /* @__PURE__ */ n.jsx("line", { x1: 0, x2: i.innerWidth, y1: o.yScale(d), y2: o.yScale(d), stroke: r, strokeDasharray: a }, c)),
    e === "x" && l.map((d, c) => /* @__PURE__ */ n.jsx("line", { y1: 0, y2: i.innerHeight, x1: o.xScale(d), x2: o.xScale(d), stroke: r, strokeDasharray: a }, c))
  ] });
}, Np = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, Hn = {
  color: Np
}, Tp = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Gr = {
  color: Tp
}, Dp = [
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
let ba = null, ya = null, va = null, Bi = "optimized";
function $p() {
  const e = { color: { ...Gr.color, ...Hn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
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
    return Dp;
  }
}
function Ip() {
  return ba || (ba = $p()), ba;
}
function Mp(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function _a(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Lp(e, t, r) {
  const a = _a(e), s = _a(t), o = _a(r), i = a * 0.4124 + s * 0.3576 + o * 0.1805, l = a * 0.2126 + s * 0.7152 + o * 0.0722, d = a * 0.0193 + s * 0.1192 + o * 0.9505;
  return { x: i * 100, y: l * 100, z: d * 100 };
}
function Fp(e, t, r) {
  let i = e / 95.047, l = t / 100, d = r / 108.883;
  const c = (u) => u > 8856e-6 ? Math.cbrt(u) : 7.787 * u + 16 / 116;
  return i = c(i), l = c(l), d = c(d), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - d) };
}
function Hi(e) {
  const t = Mp(e);
  if (!t) return null;
  const r = Lp(t.r, t.g, t.b);
  return Fp(r.x, r.y, r.z);
}
function Fo(e, t) {
  const r = e.L - t.L, a = e.a - t.a, s = e.b - t.b;
  return Math.sqrt(r * r + a * a + s * s);
}
function Pp() {
  const e = Ip();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Hi(i));
  let r = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let d = 0, c = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (d += Fo(l, t[f]), c++);
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
      for (const f of o) {
        const m = t[f];
        if (m) {
          const y = Fo(c, m);
          y < u && (u = y);
        }
      }
      u > l && (l = u, i = d);
    }
    o.push(i), s.delete(i);
  }
  return o.map((i) => e[i]);
}
function Ep() {
  return ya || (ya = Pp()), ya;
}
function Ap(e, t, r) {
  const a = (e + 16) / 116, s = t / 500 + a, o = a - r / 200, i = (u) => {
    const f = u * u * u;
    return f > 8856e-6 ? f : (u - 16 / 116) / 7.787;
  }, l = i(s) * 95.047, d = i(a) * 100, c = i(o) * 108.883;
  return { X: l, Y: d, Z: c };
}
function Rp(e, t, r) {
  e /= 100, t /= 100, r /= 100;
  let a = e * 3.2406 + t * -1.5372 + r * -0.4986, s = e * -0.9689 + t * 1.8758 + r * 0.0415, o = e * 0.0557 + t * -0.204 + r * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), s = Math.min(1, Math.max(0, i(s))), o = Math.min(1, Math.max(0, i(o))), { r: Math.round(a * 255), g: Math.round(s * 255), b: Math.round(o * 255) };
}
function Bp(e, t, r) {
  return `#${[e, t, r].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function Hp(e, t) {
  const r = Hi(e);
  if (!r) return e;
  const a = Math.min(100, Math.max(0, r.L + t)), { X: s, Y: o, Z: i } = Ap(a, r.a, r.b), l = Rp(s, o, i);
  return Bp(l.r, l.g, l.b);
}
function zp() {
  const e = Ep(), r = [12, -12, 24, -24].map((s) => e.map((o) => Hp(o, s))), a = [...e];
  return r.forEach((s) => a.push(...s)), a;
}
function Wp() {
  return (!va || Op()) && (va = zp(), zi = Bi), va;
}
let zi = null;
function Op() {
  return zi !== Bi;
}
function _t(e) {
  const t = Wp();
  return t[e % t.length];
}
let pn = null, Pn = null, En = null, An = null;
function Up() {
  const e = Hn?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    pn = [];
    for (let o = 1; o <= 12; o++) {
      const i = t[String(o)]?.$value || t[String(o)]?.value;
      pn.push(typeof i == "string" ? i : "#212b32");
    }
    const r = e.region || {};
    Pn = {}, Object.keys(r).forEach((o) => {
      const i = r[o]?.$value || r[o]?.value;
      typeof i == "string" && (Pn[o] = i);
    });
    const a = e.severity || {}, s = e["org-level"] || {};
    An = {}, Object.keys(s).forEach((o) => {
      const i = s[o]?.$value || s[o]?.value;
      typeof i == "string" && (An[o] = i);
    }), En = {}, Object.keys(a).forEach((o) => {
      const i = a[o]?.$value || a[o]?.value;
      typeof i == "string" && (En[o] = i);
    });
  }
}
function Vr() {
  (!pn || !Pn || !En || !An) && Up();
}
function en(e) {
  return Vr(), pn ? pn[e % pn.length] : "#212b32";
}
function Gp(e) {
  return Vr(), Pn ? Pn[e] : void 0;
}
function hr(e, t) {
  return Gp(e) || en(t);
}
const Ha = ["low", "moderate", "high", "critical"];
let wa = null;
function Vp() {
  const e = { color: { ...Gr.color, ...Hn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, r = {};
  return Ha.forEach((a) => {
    const s = t(`color.data-viz.severity.${a}`);
    s && (r[a] = s);
  }), r;
}
function Wi() {
  return wa || (wa = Vp()), wa;
}
function Yp(e) {
  return Wi()[e.toLowerCase()];
}
function qp(e, t) {
  return Yp(e) || Wi()[Ha[t % Ha.length]] || _t(t);
}
function Xp(e) {
  return Vr(), En ? En[e] : void 0;
}
function Kp(e, t) {
  return Xp(e) || en(t);
}
const za = ["trust", "ambulance", "icb", "region"];
let Sa = null;
function Zp() {
  const e = { color: { ...Gr.color, ...Hn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, r = {};
  return za.forEach((a) => {
    const s = t(`color.data-viz.org-level.${a}`);
    s && (r[a] = s);
  }), r;
}
function Oi() {
  return Sa || (Sa = Zp()), Sa;
}
function Jp(e) {
  return Oi()[e.toLowerCase()];
}
function Qp(e, t) {
  return Jp(e) || Oi()[za[t % za.length]] || _t(t);
}
function eh(e) {
  return Vr(), An ? An[e] : void 0;
}
function th(e, t) {
  return eh(e) || en(t);
}
let ka = null;
const nh = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function rh(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function ah() {
  const e = { color: { ...Gr.color, ...Hn.color } }, t = (s, o = /* @__PURE__ */ new Set()) => {
    if (o.has(s)) return;
    o.add(s);
    const i = s.split(".").reduce((d, c) => d ? d[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), o) : typeof l == "string" ? l : void 0;
  }, r = {}, a = [];
  return nh.forEach((s) => {
    const o = t(`color.data-viz.region.${s}`);
    o ? r[s] = o : a.push(s);
  }), process.env.NODE_ENV !== "production" && (Object.keys(r).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), r;
}
function sh() {
  return ka || (ka = ah()), ka;
}
function oh(e) {
  return sh()[rh(e)];
}
function hn(e, t) {
  return oh(e) || _t(t);
}
const Ui = Y.createContext(null), zn = () => Y.useContext(Ui), lb = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: r,
  onChange: a
}) => {
  const [s, o] = Y.useState(() => new Set(e)), i = r !== void 0, l = Y.useMemo(() => i ? new Set(r) : s, [i, r, s]), d = Y.useCallback((u) => {
    i || o(new Set(u)), a?.(Array.from(u));
  }, [i, a]), c = Y.useMemo(() => ({
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
  return /* @__PURE__ */ n.jsx(Ui.Provider, { value: c, children: t });
}, Gi = Y.createContext(null), zt = () => Y.useContext(Gi), ih = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: r = !1
}) => {
  const a = rn(), s = zn(), [o, i] = Y.useState(null), l = Y.useRef(/* @__PURE__ */ new Map()), [d, c] = Y.useState([]), u = Y.useCallback(
    (A, T) => {
      l.current.set(A, T);
    },
    []
  ), f = Y.useCallback((A) => {
    l.current.delete(A);
  }, []), m = Y.useCallback(
    (A, T) => {
      if (!a) return;
      const { xScale: _, yScale: C } = a;
      let k = null, h = 1 / 0;
      l.current.forEach((M, N) => {
        M.forEach((b, S) => {
          const $ = _(b.x), te = C(b.y), U = $ - A, R = te - T, W = Math.sqrt(U * U + R * R);
          W < h && (h = W, k = {
            seriesId: N,
            index: S,
            x: b.x,
            y: b.y,
            clientX: $,
            clientY: te
          });
        });
      }), k && h <= t ? i(k) : i(null);
    },
    [a, t]
  ), y = Y.useCallback(() => i(null), []);
  Y.useEffect(() => {
    if (!o) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: A, yScale: T } = a, _ = [];
    l.current.forEach((C, k) => {
      C.forEach((h, M) => {
        (o.x instanceof Date && h.x instanceof Date ? h.x.getTime() === o.x.getTime() : h.x === o.x) && _.push({
          seriesId: k,
          index: M,
          x: h.x,
          y: h.y,
          clientX: A(h.x),
          clientY: T(h.y)
        });
      });
    }), _.sort((C, k) => C.seriesId.localeCompare(k.seriesId)), c(_);
  }, [o, a]);
  const w = Y.useCallback(
    (A) => {
      if (!o) return;
      const T = l.current.get(o.seriesId);
      if (!T) return;
      let _ = o.index + A;
      if (_ < 0 || _ >= T.length) {
        if (!r) return;
        _ = (_ + T.length) % T.length;
      }
      const C = T[_];
      if (!a) return;
      const { xScale: k, yScale: h } = a;
      i({
        seriesId: o.seriesId,
        index: _,
        x: C.x,
        y: C.y,
        clientX: k(C.x),
        clientY: h(C.y)
      });
    },
    [o, a, r]
  ), v = Y.useCallback(
    (A) => {
      let T = Array.from(l.current.keys());
      if (s && (T = T.filter(($) => !s.isHidden($))), T.length === 0) return;
      if (!o) {
        const $ = T[0], te = l.current.get($);
        if (!te || !a) return;
        const { xScale: U, yScale: R } = a, W = te[0];
        i({
          seriesId: $,
          index: 0,
          x: W.x,
          y: W.y,
          clientX: U(W.x),
          clientY: R(W.y)
        });
        return;
      }
      const _ = T.indexOf(o.seriesId);
      if (_ === -1) return;
      let C = _ + A;
      if (C < 0 || C >= T.length) {
        if (!r) return;
        C = (C + T.length) % T.length;
      }
      const k = T[C], h = l.current.get(k);
      if (!h || !a) return;
      const M = Math.min(o.index, h.length - 1), N = h[M], { xScale: b, yScale: S } = a;
      i({
        seriesId: k,
        index: M,
        x: N.x,
        y: N.y,
        clientX: b(N.x),
        clientY: S(N.y)
      });
    },
    [o, a, r, s]
  ), p = Y.useCallback(() => {
    let A = Array.from(l.current.keys());
    if (s && (A = A.filter((M) => !s.isHidden(M))), A.length === 0) return;
    const T = o ? o.seriesId : A[0], _ = l.current.get(T);
    if (!_ || _.length === 0 || !a) return;
    const C = _[0], { xScale: k, yScale: h } = a;
    i({
      seriesId: T,
      index: 0,
      x: C.x,
      y: C.y,
      clientX: k(C.x),
      clientY: h(C.y)
    });
  }, [o, a, s]), g = Y.useCallback(() => {
    let A = Array.from(l.current.keys());
    if (s && (A = A.filter((N) => !s.isHidden(N))), A.length === 0) return;
    const T = o ? o.seriesId : A[0], _ = l.current.get(T);
    if (!_ || _.length === 0 || !a) return;
    const C = _.length - 1, k = _[C], { xScale: h, yScale: M } = a;
    i({
      seriesId: T,
      index: C,
      x: k.x,
      y: k.y,
      clientX: h(k.x),
      clientY: M(k.y)
    });
  }, [o, a, s]), F = Y.useCallback(
    () => w(1),
    [w]
  ), I = Y.useCallback(
    () => w(-1),
    [w]
  ), j = Y.useCallback(
    () => v(1),
    [v]
  ), P = Y.useCallback(
    () => v(-1),
    [v]
  ), D = Y.useMemo(
    () => ({
      focused: o,
      setFocused: i,
      aggregated: d,
      focusNearest: m,
      clear: y,
      registerSeries: u,
      unregisterSeries: f,
      focusNextPoint: F,
      focusPrevPoint: I,
      focusNextSeries: j,
      focusPrevSeries: P,
      focusFirstPoint: p,
      focusLastPoint: g
    }),
    [
      o,
      d,
      m,
      y,
      u,
      f,
      F,
      I,
      j,
      P,
      p,
      g
    ]
  );
  return /* @__PURE__ */ n.jsx(Gi.Provider, { value: D, children: e });
}, lh = ({
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
  colors: f
}) => {
  const m = rn();
  if (!m) return null;
  const { xScale: y, yScale: w } = m, p = zn()?.isHidden(e.id) ?? !1, g = p && l === "fade";
  if (p && l === "remove")
    return null;
  const F = zt();
  Y.useEffect(() => {
    if (!F) return;
    const T = e.data.map((_) => ({ x: i(_), y: _.y }));
    return F.registerSeries(e.id, T), () => F.unregisterSeries(e.id);
  }, [F, e.id, e.data, i]);
  const I = Y.useMemo(
    () => Ba(
      e.data,
      (T) => y(i(T)),
      (T) => w(T.y),
      { smooth: c }
    ),
    [e.data, y, w, i, c]
  ), j = Y.useMemo(() => {
    if (!e.data.length) return "";
    const [T] = w.domain(), _ = Ra().x((C) => y(i(C))).y0(() => w(T)).y1((C) => w(C.y));
    return c && _.curve(pr), _(e.data) || "";
  }, [e.data, y, w, i, c]), P = f && f[t], D = e.color || P || (r === "region" ? hn(e.id, t) : _t(t)), A = r === "region" ? hr(e.id, t) : en(t);
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: g ? 0.25 : 1,
      "aria-hidden": g ? !0 : void 0,
      children: [
        u && /* @__PURE__ */ n.jsx(
          "path",
          {
            d: j,
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
            stroke: D,
            strokeWidth: d,
            role: "presentation"
          }
        ),
        a && e.data.map((T, _) => {
          const C = y(i(T)), k = w(T.y), h = s ? 0 : -1, M = !g && (s && _ === o || F?.focused?.seriesId === e.id && F.focused.index === _), N = () => {
            F && !g && F.setFocused({
              seriesId: e.id,
              index: _,
              x: i(T),
              y: T.y,
              clientX: C,
              clientY: k
            });
          }, b = () => {
            F && F.focused?.seriesId === e.id && F.focused.index === _ && F.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: C,
              cy: k,
              r: M ? 5 : 3.5,
              stroke: M ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : A,
              strokeWidth: M ? 2 : 1,
              fill: M ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : D,
              className: "fdp-line-point",
              tabIndex: g ? -1 : h,
              "aria-label": `${e.label || e.id} ${i(T).toDateString()} value ${T.y}`,
              "data-series": e.id,
              "data-index": _,
              onMouseEnter: N,
              onFocus: N,
              onMouseLeave: b,
              onBlur: b
            },
            _
          );
        })
      ]
    }
  );
}, ch = ({ polite: e = !0, format: t }) => {
  const r = zt(), [a, s] = Y.useState(""), o = Y.useRef("");
  return Y.useEffect(() => {
    if (!r?.focused) return;
    const { focused: i, aggregated: l } = r;
    let d;
    if (l && l.length > 1) {
      const c = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      d = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      d = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : dh(i.seriesId, i.x, i.y, i.index);
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
function dh(e, t, r, a) {
  const s = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${s}, value ${r}`;
}
const cb = () => {
  const e = zt(), t = Vt();
  if (!e || !t || !e.focused) return null;
  const { focused: r, aggregated: a } = e, { innerWidth: s, innerHeight: o } = t, i = Math.min(Math.max(r.clientX, 0), s), l = Math.min(Math.max(r.clientY, 0), o), d = i + 8, c = l - 8, u = a.length > 1, f = r.x instanceof Date ? r.x.toDateString() : String(r.x), m = u ? f : `${f} • ${r.y}`, y = /\d+$/.exec(r.seriesId || ""), w = y ? parseInt(y[0], 10) - 1 : 0, v = _t(w >= 0 ? w : 0) || "#005eb8", p = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ n.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: p, strokeWidth: 3 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: p, strokeWidth: 1.5 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 2.5, fill: v, stroke: "#fff", strokeWidth: 0.5 }),
    u ? (() => {
      const F = a.map((A) => `${A.seriesId}: ${A.y}`), I = [m, ...F], j = I.reduce((A, T) => Math.max(A, T.length), 0), P = Math.max(90, j * 6.2 + 16), D = 16 * I.length + 8;
      return /* @__PURE__ */ n.jsxs("g", { children: [
        /* @__PURE__ */ n.jsx("rect", { x: d, y: c - D, rx: 4, ry: 4, width: P, height: D, fill: "#212b32", opacity: 0.92 }),
        I.map((A, T) => /* @__PURE__ */ n.jsx("text", { x: d + 8, y: c - D + 6 + 16 * (T + 0.7), fill: "#fff", fontSize: 12, children: A }, T))
      ] });
    })() : /* @__PURE__ */ n.jsxs("g", { children: [
      /* @__PURE__ */ n.jsx("rect", { x: d, y: c - 24, rx: 4, ry: 4, width: Math.max(60, m.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ n.jsx("text", { x: d + 8, y: c - 8, fill: "#fff", fontSize: 12, children: m })
    ] })
  ] });
}, db = ({
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
  const c = zn(), u = !!(c && !a && !l && o === void 0), f = a || u, m = e || [], y = o !== void 0, [w, v] = Y.useState(new Set(i)), p = y ? new Set(o) : w, [g, F] = Y.useState(""), I = (j) => {
    if (u && c) {
      const h = c.isHidden(j);
      c.toggle(j);
      const N = m.find((S) => S.id === j)?.label || j, b = d ? d(j, h, N) : `${N} ${h ? "shown" : "hidden"}`;
      F(b);
      return;
    }
    if (!f) return;
    const P = new Set(p), D = P.has(j);
    D ? P.delete(j) : P.add(j), y || v(P);
    const A = m.filter((h) => !P.has(h.id)).map((h) => h.id), T = Array.from(P);
    l?.(A, T);
    const C = m.find((h) => h.id === j)?.label || j, k = d ? d(j, D, C) : `${C} ${D ? "shown" : "hidden"}`;
    F(k);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ n.jsx("ul", { className: `fdp-legend fdp-legend--${r}`, children: m.map((j, P) => {
      const D = j.palette || t, A = j.color || (D === "region" ? hn(j.id, P) : D === "severity" ? qp(j.id, P) : D === "org-level" ? Qp(j.id, P) : _t(P));
      let T = j.stroke || (D === "region" ? hr(j.id, P) : D === "severity" ? Kp(j.id, P) : D === "org-level" ? th(j.id, P) : en(P));
      if (s && T) {
        const k = T.trim().toLowerCase();
        (k === "#fff" || k === "#ffffff" || k === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(k)) && (T = "#212b32");
      }
      const _ = u && c ? c.isHidden(j.id) : p.has(j.id), C = f ? {
        "aria-pressed": !_,
        "aria-label": `${j.label} (${_ ? "show" : "hide"})`,
        onClick: () => I(j.id)
      } : { "aria-label": j.label };
      return /* @__PURE__ */ n.jsxs("li", { className: `fdp-legend__item${_ ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: A,
              backgroundImage: j.patternDataUrl ? `url(${j.patternDataUrl})` : void 0,
              backgroundSize: j.patternDataUrl ? "auto" : void 0,
              borderColor: T
            },
            ...C
          }
        ),
        /* @__PURE__ */ n.jsx("span", { className: "fdp-legend__label", children: j.label })
      ] }, j.id);
    }) }),
    f && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: g })
  ] });
}, ub = ({
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
  const f = rn();
  if (!f) return null;
  const { xScale: m, yScale: y } = f, v = zn()?.isHidden(e.id) ?? !1, p = v && o === "fade";
  if (v && o === "remove") return null;
  const g = zt();
  Y.useEffect(() => {
    if (!g) return;
    const A = e.data.map((T) => ({ x: a(T), y: T.y }));
    return g.registerSeries(e.id, A), () => g.unregisterSeries(e.id);
  }, [g, e.id, e.data, a]);
  const F = u && u[t], I = e.color || F || (r === "region" ? hn(e.id, t) : _t(t)), j = Y.useMemo(() => d && d.length === e.data.length ? Ba(
    e.data,
    (A) => m(a(A)),
    (A) => {
      const T = e.data.indexOf(A);
      return y(d[T].y1);
    },
    { smooth: l }
  ) : Ba(
    e.data,
    (A) => m(a(A)),
    (A) => y(A.y),
    { smooth: l }
  ), [e.data, d, m, y, a, l]), P = Y.useMemo(() => {
    if (d && d.length === e.data.length) {
      const k = Ra().x((h) => m(a(h))).y0((h, M) => y(d[M].y0)).y1((h, M) => y(d[M].y1));
      return l && k.curve(pr), k(e.data) || "";
    }
    const [A, T] = y.domain();
    let _ = i;
    _ < A ? _ = A : _ > T && (_ = T);
    const C = Ra().x((k) => m(a(k))).y0(() => y(_)).y1((k) => y(k.y));
    return l && C.curve(pr), C(e.data) || "";
  }, [e.data, d, m, y, a, i, l]), D = Y.useId();
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: p ? 0.25 : 1,
      "aria-hidden": p ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs("linearGradient", { id: D, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: I, stopOpacity: 0.25 }),
          /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: I, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: P,
            fill: c ? `url(#${D})` : I,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !s && /* @__PURE__ */ n.jsx("path", { d: j, fill: "none", stroke: I, strokeWidth: 1 })
      ]
    }
  );
}, fb = ({
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
  visibilityMode: f = "remove",
  colorMode: m = "series",
  allSeries: y,
  stacked: w,
  gapRatio: v = 0.15,
  minBarWidth: p,
  gradientFill: g = !0,
  gradientStrokeMatch: F = !0,
  opacity: I = 1,
  fadedOpacity: j = 0.25,
  flatFillOpacity: P = 1,
  colors: D
}) => {
  const A = Math.max(0, v), T = rn(), _ = Vt();
  if (!T || !_) return null;
  const { xScale: C, yScale: k } = T, M = zn()?.isHidden(e.id) ?? !1, N = M && f === "fade";
  if (M && f === "remove") return null;
  const b = zt();
  Y.useEffect(() => {
    if (!b) return;
    const J = e.data.map((ee) => ({ x: s(ee), y: ee.y }));
    return b.registerSeries(e.id, J), () => b.unregisterSeries(e.id);
  }, [b, e.id, e.data, s]);
  const S = typeof C.bandwidth == "function", $ = S ? C.bandwidth() : void 0, te = Y.useMemo(() => {
    if ($ != null) return $;
    const J = y && y.length ? y : [e], ee = [];
    J.forEach((H) => {
      H.data.forEach((Z) => {
        const V = C(s(Z));
        Number.isFinite(V) && ee.push(V);
      });
    });
    const de = ee.sort((H, Z) => H - Z);
    if (de.length <= 1) return 40;
    const x = [];
    for (let H = 1; H < de.length; H++)
      x.push(de[H] - de[H - 1]);
    return x.sort((H, Z) => H - Z), (x[Math.floor(x.length / 2)] || 40) * i;
  }, [e.data, y, C, s, i, $]), { basePerBar: U } = Y.useMemo(() => {
    if (S) {
      const de = te, x = Math.max(
        1,
        (de - l * (r - 1)) / r
      ), E = e.barWidth ?? d;
      let H = E ? Math.min(E, de) : x;
      if (c) {
        const Z = de * Math.min(1, Math.max(0.05, u)), V = Math.max(
          1,
          (Z - l * (r - 1)) / r
        );
        H = E ? Math.min(H, V) : V;
      }
      return { basePerBar: H };
    }
    const J = e.barWidth ?? d, ee = Math.max(
      1,
      (te - l * (r - 1)) / r
    );
    if (c) {
      const de = y && y.length ? y : [e], x = [];
      de.forEach(
        (he) => he.data.forEach((we) => {
          const ie = C(s(we));
          Number.isFinite(ie) && x.push(ie);
        })
      ), x.sort((he, we) => he - we);
      const E = [];
      for (let he = 1; he < x.length; he++)
        E.push(x[he] - x[he - 1]);
      E.sort((he, we) => he - we);
      const Z = (E[Math.floor(E.length / 2)] || te) * Math.min(1, Math.max(0.05, u)), V = Math.max(
        1,
        (Z - l * (r - 1)) / r
      );
      return { basePerBar: J ? Math.min(J, V) : V };
    }
    return J ? { basePerBar: Math.min(J, ee) } : { basePerBar: ee };
  }, [
    S,
    te,
    l,
    r,
    d,
    e.barWidth,
    c,
    u,
    y,
    C,
    s
  ]), R = Y.useMemo(() => {
    if (S) return [];
    const J = [];
    return (y && y.length ? y : [e]).forEach(
      (de) => de.data.forEach((x) => {
        const E = C(s(x));
        Number.isFinite(E) && J.push(E);
      })
    ), J.sort((de, x) => de - x), Array.from(new Set(J));
  }, [S, y, e, C, s]), W = Y.useMemo(() => {
    if (S)
      return [];
    if (!R.length) return [];
    if (R.length === 1)
      return [
        { center: R[0], left: 0, right: _.innerWidth }
      ];
    const J = [];
    for (let ee = 0; ee < R.length; ee++) {
      const de = R[ee], x = ee === 0 ? 0 : (R[ee - 1] + de) / 2, E = ee === R.length - 1 ? _.innerWidth : (de + R[ee + 1]) / 2;
      J.push({
        center: de,
        left: Math.max(0, x),
        right: Math.min(_.innerWidth, E)
      });
    }
    return J;
  }, [S, R, _.innerWidth]), B = Y.useMemo(() => {
    if (S || !W.length)
      return;
    const J = Math.min(1, Math.max(0.05, i)), ee = W.map((Z) => Math.max(2, Z.right - Z.left)), de = ee.map(
      (Z) => Math.max(2, Math.min(Z - 1, Z * J))
    );
    let x = Math.min(...de);
    if (p)
      if (r <= 1) {
        const Z = Math.min(...ee.map((V) => V - 1));
        Z >= p && x < p && (x = Math.min(Z, p));
      } else {
        const Z = Math.min(...ee.map((ne) => ne - 1)), V = p * r + (r - 1) * (p * A);
        V <= Z && x < V && (x = V);
      }
    if (r <= 1)
      return p && x < p && ee.every((V) => V >= p) ? { groupWidth: p, barWidth: p } : { groupWidth: x, barWidth: x };
    let E = x / (r + (r - 1) * A);
    return E < 1 && (E = 1), p && E < p && p * r + (r - 1) * (p * A) <= x && (E = p), { groupWidth: E * r + (r - 1) * (E * A), barWidth: E };
  }, [
    S,
    W,
    i,
    r,
    A,
    p
  ]), ae = D && D[t] ? D[t] : void 0, z = e.color || ae || (a === "region" ? hn(e.id, t) : _t(t)), fe = a === "region" ? hr(e.id, t) : en(t), ve = F && (e.color || ae) ? z : fe, le = Number.isFinite(k(0)) ? k(0) : k.range()[0], ue = Y.useId();
  return w && w.length === e.data.length ? /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: N ? j : I,
      "aria-hidden": N ? !0 : void 0,
      children: [
        g && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs(
          "linearGradient",
          {
            id: ue,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: z, stopOpacity: 0.3 }),
              /* @__PURE__ */ n.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: z,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ n.jsx(
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
        e.data.map((J, ee) => {
          const de = s(J), x = C(S ? J.x : de);
          let E, H;
          if (S)
            E = te, H = x;
          else {
            const re = W.find(
              (Q) => Math.abs(Q.center - x) < 0.5
            );
            if (!re || !B)
              E = U, H = x - U / 2;
            else {
              const { groupWidth: Q } = B;
              E = Q;
              let L = x - Q / 2;
              L < re.left && (L = re.left), L + Q > re.right && (L = Math.max(re.left, re.right - Q)), H = L;
            }
          }
          const Z = w[ee], V = k(Z.y0), ne = k(Z.y1), he = Math.min(V, ne), we = Math.abs(ne - V) || 1;
          if (!S && p && E < p) {
            const re = W.find(
              (Q) => Math.abs(Q.center - x) < 0.5
            );
            if (re) {
              const Q = Math.max(2, re.right - re.left - 1), L = Math.min(Q, p);
              L > E && (E = L, H = Math.max(
                re.left,
                Math.min(re.right - E, x - E / 2)
              ));
            }
          }
          const ie = !N && b?.focused?.seriesId === e.id && b.focused.index === ee, q = () => {
            !b || N || b.setFocused({
              seriesId: e.id,
              index: ee,
              x: de,
              y: Z.y1 - Z.y0,
              clientX: H + E / 2,
              clientY: he
            });
          }, G = () => {
            b?.focused?.seriesId === e.id && b.focused.index === ee && b.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: H,
              y: he,
              width: E,
              height: we,
              fill: g ? `url(#${ue})` : z,
              ...g ? {} : { fillOpacity: P },
              stroke: ie ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : g && F ? z : void 0,
              strokeWidth: ie ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: N || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${Z.y1 - Z.y0}`,
              onMouseEnter: q,
              onFocus: q,
              onMouseLeave: G,
              onBlur: G
            },
            ee
          );
        })
      ]
    }
  ) : /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: N ? j : I,
      "aria-hidden": N ? !0 : void 0,
      children: [
        g && /* @__PURE__ */ n.jsxs("defs", { children: [
          m === "series" && /* @__PURE__ */ n.jsxs(
            "linearGradient",
            {
              id: ue,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: z, stopOpacity: 0.3 }),
                /* @__PURE__ */ n.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: z,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ n.jsx(
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
          m === "category" && e.data.map((J, ee) => {
            const x = D && D[ee] || (a === "region" ? hn(String(J.x), ee) : _t(ee)), E = `${ue}-${ee}`;
            return /* @__PURE__ */ n.jsxs(
              "linearGradient",
              {
                id: E,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: x, stopOpacity: 0.3 }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "60%", stopColor: x, stopOpacity: 0.14 }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: x, stopOpacity: 0.06 })
                ]
              },
              E
            );
          })
        ] }),
        e.data.map((J, ee) => {
          const de = s(J), x = C(S ? J.x : de);
          let E, H;
          if (S) {
            const oe = te;
            if (r <= 1)
              H = oe, E = x;
            else {
              H = Math.max(
                1,
                oe / (r + (r - 1) * A)
              );
              const X = H * A, O = H * r + X * (r - 1);
              E = x + (oe - O) / 2 + t * (H + X);
            }
          } else {
            const oe = W.find((X) => X.center === x);
            if (!oe || !B)
              H = U, E = x - U / 2, p && H < p && (H = p, E = x - H / 2);
            else {
              const { barWidth: X } = B;
              H = X;
              const O = r > 1 ? X * A : 0, se = H * r + O * (r - 1);
              let me = x - se / 2;
              me < oe.left && (me = oe.left), me + se > oe.right && (me = Math.max(oe.left, oe.right - se)), E = me + t * (H + O);
            }
            if (p && H < p) {
              const X = W.find(
                (O) => Math.abs(O.center - x) < 0.5
              );
              if (X) {
                const O = Math.max(2, X.right - X.left - 1), se = Math.min(O, p);
                if (se > H)
                  if (r <= 1)
                    H = se, E = Math.max(
                      X.left,
                      Math.min(X.right - H, x - H / 2)
                    );
                  else {
                    const me = se * A, ce = se * r + me * (r - 1);
                    if (ce <= X.right - X.left - 1) {
                      H = se;
                      const ke = ce;
                      let je = x - ke / 2;
                      je < X.left && (je = X.left), je + ke > X.right && (je = Math.max(
                        X.left,
                        X.right - ke
                      )), E = je + t * (H + me);
                    }
                  }
              }
            }
          }
          const Z = E + H / 2, V = k(J.y), ne = Math.min(le, V), he = Math.abs(le - V), we = !N && b?.focused?.seriesId === e.id && b.focused.index === ee, ie = () => {
            !b || N || b.setFocused({
              seriesId: e.id,
              index: ee,
              x: de,
              y: J.y,
              clientX: Z,
              clientY: V
            });
          }, q = () => {
            b?.focused?.seriesId === e.id && b.focused.index === ee && b.clear();
          }, G = m === "category" && D ? D[ee] : void 0, re = m === "category" ? G || (a === "region" ? hn(String(J.x), ee) : _t(ee)) : z, Q = m === "category" ? `${ue}-${ee}` : ue, L = g && F ? re : m === "category" ? a === "region" ? hr(String(J.x), ee) : en(ee) : ve, K = we ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : L || re;
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: E,
              y: ne,
              width: H,
              height: he || 1,
              fill: g ? `url(#${Q})` : re,
              ...g ? {} : { fillOpacity: P },
              stroke: K,
              strokeWidth: we ? 2 : 1,
              className: "fdp-bar",
              tabIndex: N || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${J.y}`,
              onMouseEnter: ie,
              onFocus: ie,
              onMouseLeave: q,
              onBlur: q
            },
            ee
          );
        })
      ]
    }
  );
}, pb = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  paddingInner: a = 0.1,
  paddingOuter: s = 0.05,
  children: o,
  yTickCount: i = 5
}) => {
  const l = Vt(), d = t ?? l?.innerWidth ?? 0, c = r ?? l?.innerHeight ?? 0, u = Y.useMemo(() => e.flatMap((p) => p.data), [e]), f = Y.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    return u.forEach((g) => p.add(g.x)), Array.from(p);
  }, [u]), m = Y.useMemo(
    () => Math.max(0, ...u.map((p) => p.y)),
    [u]
  ), y = Y.useMemo(
    () => Zo().domain(f).range([0, d]).paddingInner(a).paddingOuter(s),
    [f, d, a, s]
  ), w = Y.useMemo(
    () => sr().domain([0, m]).nice().range([c, 0]),
    [m, c]
  ), v = Y.useMemo(
    () => ({
      xScale: y,
      yScale: w,
      getXTicks: () => f,
      getYTicks: (p = i) => w.ticks(p)
    }),
    [y, w, f, i]
  );
  return /* @__PURE__ */ n.jsx(Cs.Provider, { value: v, children: o });
}, hb = ({
  title: e,
  description: t,
  source: r,
  table: a,
  className: s,
  id: o,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const d = Y.useId(), c = o || d, u = t ? `${c}-desc` : void 0, f = r ? `${c}-src` : void 0, m = typeof window < "u" && !l;
  return /* @__PURE__ */ n.jsxs(
    "figure",
    {
      id: c,
      className: ur("fdp-chart fdp-chart--noscript", s),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": ur(u, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ n.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ n.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ n.jsx("p", { id: u, className: "fdp-chart__description", children: t }),
        !m && /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ n.jsx("noscript", { children: /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ n.jsx(Ht, { ...a }) }) }),
          /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ n.jsx(Ht, { ...a }) })
        ] }),
        r && /* @__PURE__ */ n.jsx("figcaption", { className: "fdp-chart__caption", children: r && /* @__PURE__ */ n.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          r
        ] }) })
      ]
    }
  );
}, mb = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: r = 0, children: a }) => {
  const s = Y.useRef(null);
  return Y.useEffect(() => {
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
}, gb = ({
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
  valueFormatter: f,
  className: m,
  id: y,
  announceDelta: w = !0
}) => {
  const v = Y.useId(), p = y || v, g = `${p}-label`, F = `${p}-value`, I = `${p}-delta`, j = typeof t == "number" && !Number.isNaN(t), P = c ? "—" : u ? "" : j ? f ? f(t) : t.toLocaleString() : t;
  let D, A = "", T = "";
  if (a && !c && !u) {
    D = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const _ = Math.abs(a.value), C = D === "up" ? `+${_}` : D === "down" ? `-${_}` : "0", k = a.isPercent ? "%" : "";
    if (A = `${C}${k}`, a.ariaLabel)
      T = a.ariaLabel;
    else {
      const h = a.invert ? D === "down" : D === "up";
      T = `${D === "neutral" ? "no change" : D === "up" ? "up" : "down"} ${_}${k}${D === "neutral" ? "" : h ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: ur(
        "fdp-metric-card",
        o && `fdp-metric-card--${o}`,
        s && `fdp-metric-card--status-${s}`,
        c && "fdp-metric-card--loading",
        u && "fdp-metric-card--error",
        m
      ),
      role: "group",
      "aria-labelledby": g,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ n.jsx("h3", { id: g, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ n.jsx("div", { id: F, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : u ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: u }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__number", children: P }),
              r && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__unit", children: r })
            ] }) }),
            i && !c && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ n.jsxs(
            "div",
            {
              id: I,
              "aria-label": T,
              className: ur(
                "fdp-metric-card__delta",
                D && `fdp-metric-card__delta--${D}`
              ),
              children: [
                /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-value", children: A }),
                a.period && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          d && d.length > 0 && !c && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        w && a && !a.ariaLabel && !c && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: T })
      ] })
    }
  );
};
var kt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(kt || {}), Ne = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Ne || {}), Ce = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.None = "none", e.Suppressed = "suppressed", e))(Ce || {}), st = /* @__PURE__ */ ((e) => (e.SinglePoint = "single_point", e.TwoSigma = "two_sigma", e.Shift = "shift", e.Trend = "trend", e))(st || {});
const js = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
], Po = js.reduce(
  (e, t, r) => (e[t] = r + 1, e),
  {}
), uh = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, fh = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, mr = js.reduce(
  (e, t, r) => (e[t] = {
    id: t,
    rank: r + 1,
    label: uh[t],
    category: fh[t],
    participatesInRanking: !0
  }, e),
  {}
);
js.map(
  (e) => mr[e]
);
var Ze = /* @__PURE__ */ ((e) => (e.Up = "up", e.Down = "down", e))(Ze || {}), it = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(it || {}), qe = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(qe || {}), Kn = /* @__PURE__ */ ((e) => (e.Legacy = "legacy", e.DirectionalFirst = "directional_first", e))(Kn || {}), Vi = /* @__PURE__ */ ((e) => (e.None = "none", e.SqlRankingV26a = "sql_ranking_v2_6a", e))(Vi || {}), mt = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(mt || {}), Ns = /* @__PURE__ */ ((e) => (e.Sql = "sql", e.Conflict = "conflict", e))(Ns || {}), Dn = /* @__PURE__ */ ((e) => (e.ImprovementValueBeforePruning = "improvementValueBeforePruning", e.ConcernValueBeforePruning = "concernValueBeforePruning", e))(Dn || {});
const mn = {
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
function Yr(e) {
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
function qr(e) {
  switch (e) {
    case Ce.Improvement:
      return "Improvement signal";
    case Ce.Concern:
      return "Concern signal";
    case Ce.Neither:
      return "Common cause variation";
    case Ce.None:
    // deprecated alias
    case Ce.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function Yi(e) {
  switch (e) {
    case qe.Pass:
      return "Target met";
    case qe.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function ph(e, t, r) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((r - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const gt = {
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
  },
  suppressed: {
    token: "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)",
    hex: "#490092"
  }
};
function qi(e) {
  return e ? gt[e]?.token ?? gt.neither.token : gt.neither.token;
}
function hh(e) {
  return e ? gt[e]?.hex ?? gt.neither.hex : gt.neither.hex;
}
const _e = (e) => typeof e == "number" && Number.isFinite(e), mh = (e) => e.reduce((t, r) => t + r, 0), wt = (e) => e.length ? mh(e) / e.length : NaN;
function Xi(e, t) {
  const r = new Array(e.length).fill(null);
  let a = null;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (!t[s] && _e(o)) {
      if (a !== null) {
        const i = e[a];
        r[s] = _e(i) ? Math.abs(o - i) : null;
      }
      a = s;
    }
  }
  return r;
}
function Ki(e, t) {
  const r = e.filter((o) => _e(o));
  if (!r.length) return { mrMean: NaN, mrUcl: NaN };
  let a = wt(r), s = 3.267 * a;
  if (t) {
    const o = r.filter((i) => i <= s);
    o.length && o.length !== r.length && (a = wt(o), s = 3.267 * a);
  }
  return { mrMean: a, mrUcl: s };
}
function gh(e, t) {
  if (!_e(e) || !_e(t))
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
const xh = 0.2777, bh = 3.6, yh = (e) => _e(e) && e >= 0 ? Math.pow(e, xh) : null, qt = (e) => _e(e) && e >= 0 ? Math.pow(e, bh) : null;
function vh(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
const ln = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function _h(e) {
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
  const t = 1 / (e + 1), r = (u) => vh(u, t) - 1, a = r(0.5), s = Math.max(0, r(ln.three.low)), o = r(ln.three.high), i = Math.max(0, r(ln.one.low)), l = r(ln.one.high), d = Math.max(0, r(ln.two.low)), c = r(ln.two.high);
  return { cl: a, lcl: s, ucl: o, oneLow: i, oneHigh: l, twoLow: d, twoHigh: c };
}
function wh(e, t, r) {
  const a = e.map((T) => _e(T) ? yh(T) : null), s = Xi(a, t), { mrMean: o } = Ki(s, !!r), i = a.filter((T, _) => !t[_] && _e(T)), l = i.length ? wt(i) : NaN;
  if (!_e(l) || !_e(o))
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
  const d = 2.66, c = 2 / 3 * d, u = 1 / 3 * d, f = l + d * o, m = l - d * o, y = l + c * o, w = l - c * o, v = l + u * o, p = l - u * o, g = qt(l), F = qt(f), I = m <= 0 ? null : qt(m), j = qt(v), P = p <= 0 ? null : qt(p), D = qt(y), A = w <= 0 ? null : qt(w);
  return {
    center: g ?? null,
    upperProcessLimit: F ?? null,
    lowerProcessLimit: I ?? null,
    upperTwoSigma: D ?? null,
    lowerTwoSigma: A ?? null,
    upperOneSigma: j ?? null,
    lowerOneSigma: P ?? null,
    mr: s,
    mrMean: o,
    mrUcl: _e(o) ? 3.267 * o : null
  };
}
function Sh(e) {
  const {
    metricImprovement: t,
    capabilityMode: r,
    value: a,
    mean: s,
    upperProcessLimit: o,
    lowerProcessLimit: i,
    target: l
  } = e, d = (c) => typeof c == "number" && Number.isFinite(c);
  return !d(a) || s === null || !d(l) ? qe.None : r && d(o) && d(i) ? t === Ne.Up ? d(i) && i > l ? qe.Pass : d(o) && o < l ? qe.Fail : qe.None : t === Ne.Down ? d(o) && o < l ? qe.Pass : d(i) && i > l ? qe.Fail : qe.None : qe.None : t === Ne.Down ? a <= l ? qe.Pass : qe.Fail : t === Ne.Up ? a >= l ? qe.Pass : qe.Fail : qe.None;
}
function kh(e, t) {
  const {
    W: r,
    minGap: a,
    minDeltaSigma: s,
    scoreThreshold: o,
    isShiftUpAt: i,
    isShiftDownAt: l,
    isTrendUpAt: d,
    isTrendDownAt: c,
    isSingleUpAt: u,
    isSingleDownAt: f
  } = t, m = [];
  let y = 0;
  for (let w = 0; w < e.length; w++) {
    const v = e[w];
    w > 0 && e[w - 1].partitionId !== v.partitionId && (y = w);
    const p = w > 0 && i(w - 1), g = w > 0 && l(w - 1), F = w > 0 && d(w - 1), I = w > 0 && c(w - 1), j = w > 0 && u(w - 1), P = w > 0 && f(w - 1), D = i(w), A = l(w), T = d(w), _ = c(w), C = u(w), k = f(w), h = [];
    D && !p && h.push({ reason: "shift", index: w }), A && !g && h.push({ reason: "shift", index: w }), T && !F && h.push({ reason: "trend", index: w }), _ && !I && h.push({ reason: "trend", index: w }), C && !j && h.push({ reason: "point", index: w }), k && !P && h.push({ reason: "point", index: w });
    for (const M of h) {
      if (M.index - y < a) continue;
      const N = Math.max(0, M.index - r), b = M.index - 1;
      if (b - N + 1 < r) continue;
      const S = M.index, $ = M.index + r - 1;
      if ($ >= e.length) continue;
      const te = e.slice(N, b + 1).map((x) => x.value).filter(
        (x) => typeof x == "number" && Number.isFinite(x)
      ), U = e.slice(S, $ + 1).map((x) => x.value).filter(
        (x) => typeof x == "number" && Number.isFinite(x)
      );
      if (te.length < r || U.length < r) continue;
      const R = e[M.index];
      let W = null;
      if (typeof R.upperProcessLimit == "number" && typeof R.mean == "number") {
        const x = R.upperProcessLimit - R.mean;
        x > 0 && (W = x / 3);
      }
      if (!W || W <= 0) continue;
      const B = wt(te), ae = wt(U), z = ae - B;
      if (Math.abs(z) < s * W) continue;
      const ve = e.slice(S, $ + 1).filter(
        (x) => x.variationIcon === "concern"
      ).length;
      if (ve > 1) continue;
      const le = (x) => {
        const E = wt(x);
        return x.length ? x.reduce((H, Z) => H + (Z - E) * (Z - E), 0) / x.length : 0;
      }, ue = le(te), J = le(U);
      let ee = M.reason === "shift" ? 90 : M.reason === "trend" ? 70 : 60;
      if (J < ue && (ee += 10), ee -= ve * 15, ee < o) continue;
      const de = m.find((x) => x.index === M.index);
      if (de) {
        const x = (E) => E === "shift" ? 3 : E === "trend" ? 2 : 1;
        (x(M.reason) > x(de.reason) || ee > de.score) && (de.reason = M.reason, de.score = ee, de.deltaMean = z, de.oldMean = B, de.newMean = ae, de.window = [S, $]);
      } else
        m.push({
          index: M.index,
          reason: M.reason,
          score: ee,
          deltaMean: z,
          oldMean: B,
          newMean: ae,
          window: [S, $]
        });
    }
  }
  return m.sort((w, v) => w.index - v.index), m;
}
function Ca() {
  const e = globalThis;
  if (typeof e.__SPC_PHASE4_STRICT < "u") return !!e.__SPC_PHASE4_STRICT;
  if (typeof process < "u") {
    const t = process?.env?.SPC_PHASE4_STRICT;
    if (typeof t < "u") {
      const r = String(t).toLowerCase();
      if (r === "1" || r === "true") return !0;
      if (r === "0" || r === "false") return !1;
    }
  }
  return !0;
}
var Ut = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Ut || {}), Zi = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Zi || {}), Ji = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Ji || {});
function Ch(e) {
  const t = [], r = [];
  e.specialCauseSinglePointUp && t.push(st.SinglePoint), e.specialCauseSinglePointDown && r.push(st.SinglePoint), e.specialCauseTwoOfThreeUp && t.push(st.TwoSigma), e.specialCauseTwoOfThreeDown && r.push(st.TwoSigma), e.specialCauseShiftUp && t.push(st.Shift), e.specialCauseShiftDown && r.push(st.Shift), e.specialCauseTrendUp && t.push(st.Trend), e.specialCauseTrendDown && r.push(st.Trend);
  const a = t.reduce((o, i) => Math.max(o, mr[i].rank), 0), s = r.reduce((o, i) => Math.max(o, mr[i].rank), 0);
  return { upRules: t, downRules: r, upMax: a, downMax: s, hasUp: t.length > 0, hasDown: r.length > 0 };
}
var Qi = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(Qi || {});
function jh(e) {
  const t = [];
  let r = [];
  for (const a of e)
    a.baseline && r.length && (t.push(r), r = []), r.push(a);
  return r.length && t.push(r), t;
}
function Nh(e, t, r) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const s = e.map((u, f) => ({ idx: f, value: u.value })).filter((u) => _e(u.value));
  if (s.length < a * 2) return;
  const o = r === Ne.Up || r === Ne.Neither, i = r === Ne.Down;
  function l(u, f) {
    const m = s.slice(u, f).map((y) => y.value);
    return m.length ? wt(m) : NaN;
  }
  let d = null;
  if (s.length > 1) {
    const u = [];
    for (let m = 1; m < s.length; m++) u.push(Math.abs(s[m].value - s[m - 1].value));
    const f = wt(u);
    _e(f) && f > 0 && (d = f * (2.66 / 3));
  }
  if (!d || d <= 0) return;
  const c = t.autoRecalculateDeltaSigma ?? 0.5;
  for (let u = a; u <= s.length - a; u++) {
    const f = u - a, m = l(f, u), y = l(u, u + a);
    if (!_e(m) || !_e(y)) continue;
    const v = (y - m) / d;
    if (!(o ? v >= c : i ? -v >= c : Math.abs(v) >= c)) continue;
    const g = s.slice(u, u + a).map((j) => j.value);
    if (!(o ? g.every((j) => j > m) : i ? g.every((j) => j < m) : g.every((j) => o ? j > m : j < m))) continue;
    const I = s[u].idx;
    e[I].baseline || (e[I].baseline = !0);
    return;
  }
}
function el(e) {
  if (!e) return {};
  const t = e, r = e, a = r.rules ?? {}, s = r.precedence ?? {}, o = r.thresholds ?? {}, i = r.warnings ?? {}, l = r.rareEvent ?? {}, d = r.capability ?? {}, c = r.grace ?? {}, u = r.baselineSuggest ?? {}, f = r.autoRecalc ?? {}, m = c.emergingEnabled ?? r.emergingGraceEnabled ?? t.emergingGraceEnabled ?? t.emergingDirectionGrace, y = a.collapseWeakerClusterRules ?? r.collapseWeakerClusterRules ?? t.collapseWeakerClusterRules ?? t.collapseClusterRules;
  if (Ca()) {
    if (t.emergingDirectionGrace !== void 0)
      throw new Error("[spc][phase4] emergingDirectionGrace is no longer supported. Use settings.grace.emergingEnabled.");
    if (t.collapseClusterRules !== void 0)
      throw new Error("[spc][phase4] collapseClusterRules is no longer supported. Use settings.rules.collapseWeakerClusterRules.");
  }
  const w = globalThis;
  !Ca() && t.emergingDirectionGrace !== void 0 && r.emergingGraceEnabled === void 0 && c.emergingEnabled === void 0 && !w.__spc_warn_emergingDirectionGrace && (w.__spc_warn_emergingDirectionGrace = !0, console.warn("[spc] emergingDirectionGrace is deprecated; use grace.emergingEnabled")), !Ca() && t.collapseClusterRules !== void 0 && a.collapseWeakerClusterRules === void 0 && r.collapseWeakerClusterRules === void 0 && !w.__spc_warn_collapseClusterRules && (w.__spc_warn_collapseClusterRules = !0, console.warn("[spc] collapseClusterRules is deprecated; use rules.collapseWeakerClusterRules"));
  const v = (F) => {
    const I = {};
    for (const j of Object.keys(F)) {
      const P = F[j];
      P !== void 0 && (I[j] = P);
    }
    return I;
  }, p = v({
    // Rare event / MR
    excludeMovingRangeOutliers: l.excludeMovingRangeOutliers ?? t.excludeMovingRangeOutliers,
    // Rules
    specialCauseShiftPoints: a.shiftPoints ?? t.specialCauseShiftPoints,
    specialCauseTrendPoints: a.trendPoints ?? t.specialCauseTrendPoints,
    enableFourOfFiveRule: a.fourOfFiveEnabled ?? t.enableFourOfFiveRule,
    enableFifteenInInnerThirdRule: a.fifteenInnerThirdEnabled ?? t.enableFifteenInInnerThirdRule,
    collapseWeakerClusterRules: y ?? t.collapseWeakerClusterRules,
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
    autoRecalculateAfterShift: f.enabled ?? t.autoRecalculateAfterShift,
    autoRecalculateShiftLength: f.shiftLength ?? t.autoRecalculateShiftLength,
    autoRecalculateDeltaSigma: f.deltaSigma ?? t.autoRecalculateDeltaSigma
  }), g = { ...p, ...v(t) };
  if (m !== void 0 && (g.emergingGraceEnabled = m, g.grace = { ...g.grace, emergingEnabled: m }), p.collapseWeakerClusterRules !== void 0) {
    const F = p.collapseWeakerClusterRules;
    g.collapseWeakerClusterRules = F, g.rules = { ...g.rules, collapseWeakerClusterRules: F };
  }
  return v(g);
}
function Ts(e) {
  const {
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: s = {}
  } = e, o = el(s), i = {
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
    precedenceStrategy: Kn.DirectionalFirst,
    emergingDirectionGrace: !1,
    rules: {},
    grace: {},
    ...o
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
  if (o?.autoRecalculateAfterShift)
    try {
      Nh(l, o, r);
    } catch {
    }
  const d = jh(l), c = [], u = [], m = l.filter(
    (p) => !p.ghost && _e(p.value)
  ).length >= (i.minimumPoints ?? 13);
  let y = 0;
  const w = {};
  for (const p of d) {
    y++;
    const g = p.map((h) => h.value), F = p.map((h) => h.ghost);
    let I = new Array(g.length).fill(null), j = NaN, P = NaN, D = NaN, A = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      I = Xi(g, F);
      const h = g.filter(
        (N, b) => !F[b] && _e(N)
      );
      j = h.length ? wt(h) : NaN;
      const M = Ki(
        I,
        !!i.excludeMovingRangeOutliers
      );
      P = M.mrMean, D = M.mrUcl, A = gh(j, P);
    } else if (t === "T") {
      const h = wh(
        g,
        F,
        !!i.excludeMovingRangeOutliers
      );
      I = h.mr, P = h.mrMean ?? NaN, D = h.mrUcl ?? NaN, j = h.center ?? NaN, A = {
        upperProcessLimit: h.upperProcessLimit,
        lowerProcessLimit: h.lowerProcessLimit,
        upperTwoSigma: h.upperTwoSigma,
        lowerTwoSigma: h.lowerTwoSigma,
        upperOneSigma: h.upperOneSigma,
        lowerOneSigma: h.lowerOneSigma
      };
    } else if (t === "G") {
      const h = g.filter(
        (b, S) => !F[S] && _e(b)
      ), M = h.length ? wt(h) : NaN, N = _h(M);
      j = N.cl ?? NaN, A = {
        upperProcessLimit: N.ucl,
        lowerProcessLimit: N.lcl,
        upperTwoSigma: N.twoHigh,
        lowerTwoSigma: N.twoLow,
        upperOneSigma: N.oneHigh,
        lowerOneSigma: N.oneLow
      }, I = new Array(g.length).fill(null), P = NaN, D = NaN;
    } else
      u.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const T = p.map((h, M) => {
      const N = !h.ghost && _e(h.value) ? g.slice(0, M + 1).filter((te, U) => !F[U] && _e(te)).length : 0, b = m, S = b ? A : {
        upperProcessLimit: null,
        lowerProcessLimit: null,
        upperTwoSigma: null,
        lowerTwoSigma: null,
        upperOneSigma: null,
        lowerOneSigma: null
      };
      return {
        rowId: h.rowId,
        x: h.x,
        value: _e(h.value) ? h.value : null,
        ghost: h.ghost,
        partitionId: y,
        pointRank: N,
        mean: b && _e(j) ? j : null,
        mr: _e(I[M]) ? I[M] : null,
        mrMean: b && _e(P) ? P : null,
        mrUcl: b && _e(D) ? D : null,
        upperProcessLimit: _e(S.upperProcessLimit) ? S.upperProcessLimit : null,
        lowerProcessLimit: _e(S.lowerProcessLimit) ? S.lowerProcessLimit : null,
        upperTwoSigma: _e(S.upperTwoSigma) ? S.upperTwoSigma : null,
        lowerTwoSigma: _e(S.lowerTwoSigma) ? S.lowerTwoSigma : null,
        upperOneSigma: _e(S.upperOneSigma) ? S.upperOneSigma : null,
        lowerOneSigma: _e(S.lowerOneSigma) ? S.lowerOneSigma : null,
        target: _e(h.target) ? h.target : null,
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
        variationIcon: Ce.Suppressed,
        assuranceIcon: qe.None,
        upperBaseline: b && _e(j) ? j : null,
        lowerBaseline: b && _e(j) ? j : null,
        movingRangeHighPointValue: b && _e(D) ? D : null,
        ghostValue: h.ghost && _e(h.value) ? h.value : null,
        ghostFlag: !!h.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    w[y] = T.filter(
      (h) => !h.ghost && _e(h.value)
    ).length;
    const _ = i.specialCauseShiftPoints ?? 6, C = i.specialCauseTrendPoints ?? 6, k = [];
    for (let h = 0; h < T.length; h++) {
      const M = T[h], N = M.value;
      if (!M.ghost && _e(N) && k.push(h), !(_e(M.mean) && _e(M.upperProcessLimit) && _e(M.lowerProcessLimit)) || M.ghost || !_e(N)) {
        c.push(M);
        continue;
      }
      M.specialCauseSinglePointUp = _e(M.upperProcessLimit) ? N > M.upperProcessLimit : !1, M.specialCauseSinglePointDown = _e(M.lowerProcessLimit) ? N < M.lowerProcessLimit : !1, c.push(M);
    }
    if (k.length) {
      const h = (b) => T[b];
      let M = [], N = [];
      for (const b of k) {
        const S = h(b);
        if (!_e(S.mean) || !_e(S.value)) {
          M = [], N = [];
          continue;
        }
        if (S.value > S.mean ? (M.push(b), N = []) : S.value < S.mean ? (N.push(b), M = []) : (M = [], N = []), M.length >= _)
          for (const $ of M) {
            const te = h($);
            te.specialCauseShiftUp = !0;
          }
        if (N.length >= _)
          for (const $ of N) {
            const te = h($);
            te.specialCauseShiftDown = !0;
          }
      }
      for (let b = 0; b <= k.length - 3; b++) {
        const $ = k.slice(b, b + 3).map(h);
        if (!$.every((le) => _e(le.mean) && _e(le.value))) continue;
        const te = $[0].mean, U = $.every((le) => le.value > te), R = $.every((le) => le.value < te);
        if (!U && !R) continue;
        const W = $[0].upperTwoSigma ?? 1 / 0, B = $[0].lowerTwoSigma ?? -1 / 0, ae = $[0].upperProcessLimit ?? 1 / 0, z = $[0].lowerProcessLimit ?? -1 / 0, fe = $.filter((le) => le.value > W && le.value <= ae), ve = $.filter((le) => le.value < B && le.value >= z);
        if (U && fe.length >= 2)
          for (const le of fe)
            le.specialCauseTwoOfThreeUp = !0;
        if (R && ve.length >= 2)
          for (const le of ve)
            le.specialCauseTwoOfThreeDown = !0;
      }
      if (i.enableFourOfFiveRule)
        for (let b = 0; b <= k.length - 5; b++) {
          const $ = k.slice(b, b + 5).map(h);
          if (!$.every((ae) => _e(ae.mean) && _e(ae.value))) continue;
          const te = $[0].mean;
          if (!$.every((ae) => ae.value > te) && !$.every((ae) => ae.value < te)) continue;
          const U = $[0].upperOneSigma ?? 1 / 0, R = $[0].lowerOneSigma ?? -1 / 0, W = $.filter((ae) => ae.value > U), B = $.filter((ae) => ae.value < R);
          if ($.every((ae) => ae.value > te) && W.length >= 4)
            for (const ae of W)
              ae.specialCauseFourOfFiveUp = !0;
          if ($.every((ae) => ae.value < te) && B.length >= 4)
            for (const ae of B)
              ae.specialCauseFourOfFiveDown = !0;
        }
      for (let b = 0; b <= k.length - C; b++) {
        const S = k.slice(b, b + C), $ = S.map(h);
        if (!$.every((R) => _e(R.value))) continue;
        let te = !0, U = !0;
        for (let R = 1; R < $.length && ($[R].value > $[R - 1].value || (te = !1), $[R].value < $[R - 1].value || (U = !1), !(!te && !U)); R++)
          ;
        if (te) for (const R of S) {
          const W = h(R);
          W.specialCauseTrendUp = !0;
        }
        if (U) for (const R of S) {
          const W = h(R);
          W.specialCauseTrendDown = !0;
        }
      }
      if (i.enableFifteenInInnerThirdRule) {
        let b = [];
        for (const S of k) {
          const $ = h(S);
          if (!_e($.value) || !_e($.mean) || !_e($.upperOneSigma) || !_e($.lowerOneSigma)) {
            b = [];
            continue;
          }
          if (!($.value < $.upperOneSigma && $.value > $.lowerOneSigma)) {
            b = [];
            continue;
          }
          if (b.push(S), b.length >= 15) {
            const U = b.map(h), R = U.some((B) => B.value > B.mean), W = U.some((B) => B.value < B.mean);
            if (R && W)
              for (const B of b) h(B).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition)) {
      const h = i.maximumPointsPartition;
      let M = 0;
      for (const N of c.filter((b) => b.partitionId === y))
        !N.ghost && _e(N.value) && M++, M > h && (N.mean = N.upperProcessLimit = N.lowerProcessLimit = null, N.upperTwoSigma = N.lowerTwoSigma = N.upperOneSigma = N.lowerOneSigma = null);
    }
  }
  for (const p of c) {
    if (p.ruleTags && p.ruleTags.length) continue;
    const g = [];
    p.specialCauseShiftUp && g.push(it.ShiftHigh), p.specialCauseShiftDown && g.push(it.ShiftLow), p.specialCauseTrendUp && g.push(it.TrendIncreasing), p.specialCauseTrendDown && g.push(it.TrendDecreasing), p.specialCauseSinglePointUp && g.push(it.SinglePointAbove), p.specialCauseSinglePointDown && g.push(it.SinglePointBelow), p.specialCauseTwoOfThreeUp && g.push(it.TwoOfThreeAbove), p.specialCauseTwoOfThreeDown && g.push(it.TwoOfThreeBelow), p.specialCauseFourOfFiveUp && g.push(it.FourOfFiveAbove), p.specialCauseFourOfFiveDown && g.push(it.FourOfFiveBelow), p.specialCauseFifteenInnerThird && g.push(it.FifteenInnerThird), g.length && (p.ruleTags = g);
  }
  for (let p = 0; p < c.length; p++) {
    const g = c[p];
    if (Object.prototype.hasOwnProperty.call(g, Dn.ImprovementValueBeforePruning) || Object.defineProperty(g, Dn.ImprovementValueBeforePruning, {
      get() {
        return g.originalSpecialCauseImprovementValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.prototype.hasOwnProperty.call(g, Dn.ConcernValueBeforePruning) || Object.defineProperty(g, Dn.ConcernValueBeforePruning, {
      get() {
        return g.originalSpecialCauseConcernValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), g.ghost || !_e(g.value) || g.mean === null) {
      g.variationIcon = Ce.Suppressed;
      continue;
    }
    const F = g.value > g.mean, I = g.value < g.mean;
    i.rules?.collapseWeakerClusterRules && (g.specialCauseTwoOfThreeUp && g.specialCauseFourOfFiveUp && (g.specialCauseTwoOfThreeUp = !1), g.specialCauseTwoOfThreeDown && g.specialCauseFourOfFiveDown && (g.specialCauseTwoOfThreeDown = !1));
    const j = g.specialCauseTrendUp && F, P = g.specialCauseTrendDown && I, D = g.specialCauseSinglePointUp || g.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && g.specialCauseFourOfFiveUp || g.specialCauseShiftUp || j, A = g.specialCauseSinglePointDown || g.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && g.specialCauseFourOfFiveDown || g.specialCauseShiftDown || P;
    let T = !1;
    if (i.precedenceStrategy === Kn.DirectionalFirst && (i.grace?.emergingEnabled || i.emergingGraceEnabled || i.emergingDirectionGrace)) {
      const C = i.specialCauseTrendPoints || 6;
      if (C > 1 && !(g.specialCauseTrendUp || g.specialCauseTrendDown)) {
        const k = C - 1, h = [];
        for (let M = p; M >= 0 && h.length < k; M--) {
          const N = c[M];
          !N.ghost && _e(N.value) && N.mean !== null && h.unshift(N);
        }
        if (h.length === k) {
          let M = !0;
          for (let N = 1; N < h.length && M; N++)
            r === Ne.Up ? h[N].value > h[N - 1].value || (M = !1) : r === Ne.Down && h[N].value < h[N - 1].value || (M = !1);
          T = M;
        }
      }
    }
    if (i.precedenceStrategy === Kn.DirectionalFirst) {
      const k = r === Ne.Up ? D : r === Ne.Down ? A : !1, h = r === Ne.Up ? A : r === Ne.Down ? D : !1;
      k && !h ? g.variationIcon = Ce.Improvement : h && !k ? g.variationIcon = T ? Ce.Neither : Ce.Concern : k && h ? g.variationIcon = T || g.specialCauseTrendUp || g.specialCauseTrendDown ? Ce.Improvement : Ce.Neither : g.variationIcon = Ce.Neither;
    } else
      r === Ne.Up ? g.variationIcon = D ? Ce.Improvement : A ? Ce.Concern : Ce.Neither : r === Ne.Down ? g.variationIcon = A ? Ce.Improvement : D ? Ce.Concern : Ce.Neither : g.variationIcon = Ce.Neither;
    const _ = D || A;
    if (g.specialCauseImprovementValue = _ && g.variationIcon === Ce.Improvement ? g.value : null, g.specialCauseConcernValue = _ && g.variationIcon === Ce.Concern ? g.value : null, g.specialCauseNeitherValue = _ && g.variationIcon === Ce.Neither ? g.value : null, i.conflictPrecedenceMode === Vi.SqlRankingV26a && g.specialCauseImprovementValue !== null && g.specialCauseConcernValue !== null) {
      const C = [];
      g.specialCauseSinglePointUp && C.push({ id: st.SinglePoint, rank: 1, side: Ze.Up }), g.specialCauseSinglePointDown && C.push({ id: st.SinglePoint, rank: 1, side: Ze.Down }), g.specialCauseTwoOfThreeUp && C.push({ id: st.TwoSigma, rank: 2, side: Ze.Up }), g.specialCauseTwoOfThreeDown && C.push({ id: st.TwoSigma, rank: 2, side: Ze.Down }), g.specialCauseShiftUp && C.push({ id: st.Shift, rank: 3, side: Ze.Up }), g.specialCauseShiftDown && C.push({ id: st.Shift, rank: 3, side: Ze.Down }), g.specialCauseTrendUp && C.push({ id: st.Trend, rank: 4, side: Ze.Up }), g.specialCauseTrendDown && C.push({ id: st.Trend, rank: 4, side: Ze.Down });
      const k = C.filter((U) => U.side === Ze.Up).reduce((U, R) => Math.max(U, R.rank), 0), h = C.filter((U) => U.side === Ze.Down).reduce((U, R) => Math.max(U, R.rank), 0);
      let M;
      k > h ? M = mt.Upwards : h > k ? M = mt.Downwards : M = mt.Same;
      const N = g.specialCauseImprovementValue, b = g.specialCauseConcernValue;
      M === mt.Upwards ? r === Ne.Up ? g.specialCauseConcernValue = null : r === Ne.Down && (g.specialCauseImprovementValue = null) : M === mt.Downwards ? r === Ne.Up ? g.specialCauseImprovementValue = null : r === Ne.Down && (g.specialCauseConcernValue = null) : g.variationIcon === Ce.Improvement ? g.specialCauseConcernValue = null : g.variationIcon === Ce.Concern ? g.specialCauseImprovementValue = null : g.specialCauseConcernValue = null, g.specialCauseImprovementValue !== null && g.specialCauseConcernValue === null ? g.variationIcon = Ce.Improvement : g.specialCauseConcernValue !== null && g.specialCauseImprovementValue === null ? g.variationIcon = Ce.Concern : g.specialCauseImprovementValue === null && g.specialCauseConcernValue === null && (g.variationIcon = Ce.Neither);
      const S = g.specialCauseImprovementValue !== null ? Ze.Up : g.specialCauseConcernValue !== null ? Ze.Down : void 0, $ = S === Ze.Up ? k : S === Ze.Down ? h : Math.max(k, h), te = C.find((U) => U.rank === $ && (!S || U.side === S));
      g.conflictPrimeDirection = M, g.conflictResolved = !0, g.conflictResolvedRank = $ || void 0, te && (g.conflictResolvedByRuleId = te.id), g.pruningMode = Ns.Conflict, g.originalSpecialCauseImprovementValue = N, g.originalSpecialCauseConcernValue = b;
    }
    {
      const C = l[g.rowId - 1], k = Sh({
        metricImprovement: r,
        capabilityMode: i.assuranceCapabilityMode,
        value: g.value,
        mean: g.mean,
        upperProcessLimit: g.upperProcessLimit,
        lowerProcessLimit: g.lowerProcessLimit,
        target: _e(C?.target) ? C.target : null
      });
      g.assuranceIcon = k;
    }
  }
  if ((i.minimumPointsWarning ?? !1) && !m) {
    const p = l.filter(
      (g) => !g.ghost && _e(g.value)
    ).length;
    u.push({
      code: "insufficient_points_global",
      category: "data",
      severity: "warning",
      message: `Only ${p} non-ghost points available; minimum required is ${i.minimumPoints}. Limits and icons suppressed.`,
      context: { available: p, minimumRequired: i.minimumPoints }
    });
  }
  if (i.variationIconConflictWarning)
    for (const p of c)
      p.variationIcon === Ce.Improvement && (p.specialCauseSinglePointUp || p.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && p.specialCauseFourOfFiveUp || p.specialCauseShiftUp || p.specialCauseTrendUp) && (p.specialCauseSinglePointDown || p.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && p.specialCauseFourOfFiveDown || p.specialCauseShiftDown || p.specialCauseTrendDown) && u.push({
        code: "variation_conflict_row",
        category: "logic",
        severity: "warning",
        message: `Row ${p.rowId}: simultaneous high/low special-cause signals – variation icon may be ambiguous.`,
        context: { rowId: p.rowId }
      });
  if (i.maximumPoints && Number.isFinite(i.maximumPoints)) {
    const p = i.maximumPoints;
    let g = 0;
    for (const F of c)
      !F.ghost && _e(F.value) && g++, g > p && (F.mean = F.upperProcessLimit = F.lowerProcessLimit = null, F.upperTwoSigma = F.lowerTwoSigma = F.upperOneSigma = F.lowerOneSigma = null);
  }
  if (i.nullValueWarning && (t === kt.XmR || t === kt.G)) {
    const p = l.filter(
      (g) => !g.ghost && (g.value === null || g.value === void 0 || !_e(g.value))
    ).length;
    p && u.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${p} null/missing value(s) excluded from calculations.`,
      context: { nullCount: p }
    });
  }
  if (i.targetSuppressedWarning && (t === kt.T || t === kt.G) && l.some((g) => _e(g.target)) && u.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), i.ghostOnRareEventWarning && (t === kt.T || t === kt.G)) {
    const p = l.filter((g) => g.ghost).length;
    p && u.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${p} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: p }
    });
  }
  if (i.partitionSizeWarnings && Object.entries(w).forEach(([p, g]) => {
    g < i.minimumPointsPartition && u.push({
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
    }), p.length && u.push({
      code: "baseline_with_special_cause",
      category: "baseline",
      severity: "warning",
      message: `Baseline set with special-cause present at row(s): ${p.join(", ")}.`,
      context: { rows: p }
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
    const p = i.baselineSuggestStabilityPoints, g = i.baselineSuggestMinGap, F = i.baselineSuggestMinDeltaSigma, I = i.baselineSuggestScoreThreshold;
    v = kh(
      c.map((P) => ({
        value: P.value,
        partitionId: P.partitionId,
        variationIcon: P.variationIcon,
        mean: P.mean,
        upperProcessLimit: P.upperProcessLimit
      })),
      {
        W: p,
        minGap: g,
        minDeltaSigma: F,
        scoreThreshold: I,
        isShiftUpAt: (P) => !!c[P].specialCauseShiftUp,
        isShiftDownAt: (P) => !!c[P].specialCauseShiftDown,
        isTrendUpAt: (P) => !!c[P].specialCauseTrendUp,
        isTrendDownAt: (P) => !!c[P].specialCauseTrendDown,
        isSingleUpAt: (P) => !!c[P].specialCauseSinglePointUp,
        isSingleDownAt: (P) => !!c[P].specialCauseSinglePointDown
      }
    ).map((P) => ({
      index: P.index,
      reason: P.reason,
      score: P.score,
      deltaMean: P.deltaMean,
      oldMean: P.oldMean,
      newMean: P.newMean,
      window: P.window
    }));
  }
  return { rows: c, warnings: u, ...v ? { suggestedBaselines: v } : {} };
}
const tl = ({
  engineRows: e,
  limits: t,
  pointDescriber: r,
  measureName: a,
  measureUnit: s,
  dateFormatter: o,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const d = zt(), c = Vt(), [u, f] = Y.useState(null), [m, y] = Y.useState(!1), w = Y.useRef(null);
  Y.useEffect(() => {
    if (d) {
      if (d.focused && (f(d.focused), w.current && (cancelAnimationFrame(w.current), w.current = null)), !d.focused && !m) {
        const ie = requestAnimationFrame(() => {
          f(null), w.current = null;
        });
        w.current = ie;
      }
      return () => {
        w.current && (cancelAnimationFrame(w.current), w.current = null);
      };
    }
  }, [d, d?.focused, m]);
  const v = d && (d.focused || (m ? u : null) || u), [p, g] = Y.useState(!1);
  Y.useEffect(() => {
    const ie = requestAnimationFrame(() => g(!0));
    return () => cancelAnimationFrame(ie);
  }, [v?.index]);
  const F = c?.innerWidth ?? 0, I = c?.innerHeight ?? 0, j = v ? Math.min(Math.max(v.clientX, 0), F) : 0, P = v ? Math.min(Math.max(v.clientY, 0), I) : 0, A = c.ref?.current;
  if (!v)
    return null;
  const T = e?.[v.index], C = Yr(T).map((ie) => ({ id: ie, label: mn[ie].tooltip })), k = v.x instanceof Date ? v.x : new Date(v.x), h = o ? o(k) : k.toDateString(), M = s ? `${s}` : "", N = a || M ? `${v.y}${M ? "" + M : " "}${a ? " " + a : ""}` : `${v.y}`, b = qr(T?.variationIcon), S = Yi(T?.assuranceIcon), $ = ph(
    t.mean ?? null,
    t.sigma,
    v.y
  ), te = r ? r(v.index, { x: v.x, y: v.y }) : void 0, U = b || S || $, R = T?.specialCauseTrendUp || T?.specialCauseTrendDown, W = T?.variationIcon === Ce.Neither && R, B = l && W ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, ae = C.length > 0, z = T?.primeDirection, fe = T?.primeRuleId, ve = i && T?.variationIcon === Ce.Neither && ae, le = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", ue = qi(T?.variationIcon), J = 6.2, de = [
    te || "",
    `${h} • ${N}`
  ].filter(Boolean).reduce(
    (ie, q) => Math.max(ie, q.length * J + 32),
    0
  ), x = 200, E = 440, H = Math.min(E, Math.max(x, de));
  let Z = j + 12, ne = (c.margin?.top ?? 0) + P + 16;
  Z + H > F && (Z = j - -60 - H), Z < 0 && (Z = Math.max(0, F - H));
  const he = v ? `spc-tooltip-${v.index}` : "spc-tooltip", we = A ? cc(
    /* @__PURE__ */ n.jsx(
      "div",
      {
        id: he,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (p ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: Z,
          top: ne,
          width: H,
          maxWidth: E,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": p ? "false" : "true",
        "data-floating": !0,
        "data-placement": Z + H + 12 > F ? "left" : "right",
        onPointerEnter: () => {
          y(!0), w.current && (cancelAnimationFrame(w.current), w.current = null);
        },
        onPointerLeave: () => {
          if (y(!1), !d?.focused) {
            const ie = requestAnimationFrame(() => {
              f(null), w.current = null;
            });
            w.current = ie;
          }
        },
        children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: h })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: N })
          ] }),
          U && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: b?.toLowerCase().includes("concern") ? /* @__PURE__ */ n.jsx(
              He,
              {
                text: b,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : b?.toLowerCase().includes("improvement") ? /* @__PURE__ */ n.jsx(
              He,
              {
                text: b,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : ve ? /* @__PURE__ */ n.jsx(
              He,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : b ? /* @__PURE__ */ n.jsx(
              He,
              {
                text: b,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          S && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const ie = S.toLowerCase(), G = !(ie.includes("not met") || ie.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(ie);
              return /* @__PURE__ */ n.jsx(
                He,
                {
                  text: S,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${G ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${S}`
                }
              );
            })() })
          ] }),
          $ && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ n.jsx(
              He,
              {
                text: (() => {
                  const ie = $.toLowerCase();
                  return ie.startsWith("within 1") ? "≤1σ" : ie.startsWith("1–2") ? "1–2σ" : ie.startsWith("2–3") ? "2–3σ" : ie.startsWith(">3") ? ">3σ" : $;
                })(),
                color: $.includes(">3") ? "orange" : $.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${$}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          B && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: B })
          ] }),
          ae && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: C.map(({ id: ie, label: q }) => {
                  const G = String(ie), Q = G === it.TrendIncreasing || G === it.TrendDecreasing ? "fdp-spc-tag--trend" : ve ? "fdp-spc-tag--no-judgement" : b ? b.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : b.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ n.jsx(
                    He,
                    {
                      text: q,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${Q}`,
                      "data-rule-id": G
                    },
                    G
                  );
                })
              }
            ),
            z && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ n.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const ie = ve ? "fdp-spc-tag--no-judgement" : b ? b.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : b.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", q = `${z}${fe ? ` (${fe})` : ""}`;
                return /* @__PURE__ */ n.jsx(
                  He,
                  {
                    text: q,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${ie}`,
                    "aria-label": `Prime direction ${z}${fe ? ` via ${fe}` : ""}`
                  }
                );
              })()
            ] })
          ] })
        ] })
      }
    ),
    A
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
            cx: j,
            cy: P,
            r: 7,
            fill: "none",
            stroke: le,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: j,
            cy: P,
            r: 5,
            fill: "#000",
            stroke: le,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: j,
            cy: P,
            r: 2.5,
            fill: ue,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        we
      ]
    }
  );
};
let Wa = null;
try {
  Wa = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const ft = (e, t) => {
  if (!Wa) return t;
  const r = e.split(".");
  let a = Wa;
  for (const o of r) {
    if (a == null) break;
    a = a[o];
  }
  const s = a;
  return s == null ? t : typeof s == "string" || typeof s == "number" ? String(s) : s.$value != null ? String(s.$value) : s.value != null ? String(s.value) : t;
}, nl = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: ft("gradient.stop.start-opacity", "0.12"),
  mid: ft("gradient.stop.mid-opacity", "0.03"),
  end: ft("gradient.stop.end-opacity", "0"),
  triStart: ft(
    "gradient.stop.triangle-start-opacity",
    ft("gradient.stop.start-opacity", "0.12")
  ),
  triMid: ft(
    "gradient.stop.triangle-mid-opacity",
    ft("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: ft(
    "gradient.stop.triangle-end-opacity",
    ft("gradient.stop.end-opacity", "0")
  )
});
var Gt = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(Gt || {});
const Th = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, Dh = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var Ke = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Ke || {}), Te = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Te || {}), lt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(lt || {}), Fe = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Fe || {});
const $h = (e) => {
  const t = e.replace("#", ""), r = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, s = parseInt(t.slice(4, 6), 16) / 255, o = [r, a, s].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2] < 0.55 ? "#ffffff" : "#212b32";
}, Ds = {
  special_cause_deteriorating: {
    hex: gt.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: gt.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: gt.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: gt.none.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(Ds).forEach((e) => {
  e.text || (e.text = $h(e.hex));
});
const $s = (e) => Ds[e], Xr = (e) => Ds[e].judgement || "none", Eo = {
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
function Ih(e, t) {
  let r;
  return e === "common_cause" ? r = Eo.common : r = Eo.special[t === "lower" ? "lower" : "higher"], r.map((a) => ({ ...a }));
}
const rl = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    if (i.variationIcon === Ce.None && !globalThis.__spcIconNoneDeprecationEmitted) {
      try {
        console.warn("[SPCVariationIcon] VariationIcon.None is deprecated; use VariationIcon.Suppressed.");
      } catch {
      }
      globalThis.__spcIconNoneDeprecationEmitted = !0;
    }
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === Ne.Up ? Ke.HigherIsBetter : i.improvementDirection === Ne.Down ? Ke.LowerIsBetter : Ke.ContextDependent : i.polarity && (l = i.polarity);
    let d;
    switch (i.variationIcon) {
      case Ce.Improvement:
        d = Fe.SpecialCauseImproving;
        break;
      case Ce.Concern:
        d = Fe.SpecialCauseDeteriorating;
        break;
      case Ce.Neither:
        d = i.specialCauseNeutral ? Fe.SpecialCauseNoJudgement : Fe.CommonCause;
        break;
      case Ce.Suppressed:
      case Ce.None:
      default:
        d = Fe.SpecialCauseNoJudgement;
        break;
    }
    let c = i.trend;
    return c || (d === Fe.SpecialCauseImproving ? c = l === Ke.LowerIsBetter ? Te.Lower : Te.Higher : d === Fe.SpecialCauseDeteriorating ? c = l === Ke.LowerIsBetter ? Te.Higher : Te.Lower : d === Fe.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? c = Te.Higher : i.lowSideSignal && !i.highSideSignal ? c = Te.Lower : c = Te.Higher : c = Te.Higher), { state: d, direction: c, polarity: l ?? Ke.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Fe.SpecialCauseImproving || i.state === Fe.SpecialCauseDeteriorating) && i.polarity && (i.state === Fe.SpecialCauseImproving ? l = i.polarity === Ke.LowerIsBetter ? Te.Lower : Te.Higher : l = i.polarity === Ke.LowerIsBetter ? Te.Higher : Te.Lower), l || (i.state === Fe.SpecialCauseImproving ? l = Te.Higher : i.state === Fe.SpecialCauseDeteriorating ? l = Te.Lower : l = Te.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? Ke.ContextDependent
    };
  }
  const r = e;
  t();
  const s = {
    [lt.Improving]: Fe.SpecialCauseImproving,
    [lt.Deteriorating]: Fe.SpecialCauseDeteriorating,
    [lt.No_Judgement]: Fe.SpecialCauseNoJudgement,
    [lt.None]: Fe.CommonCause
  }[r.judgement];
  let o;
  return r.judgement === lt.Improving ? o = r.polarity === Ke.LowerIsBetter ? Te.Lower : Te.Higher : r.judgement === lt.Deteriorating ? o = r.polarity === Ke.LowerIsBetter ? Te.Higher : Te.Lower : o = r.trend ?? Te.Higher, { state: s, direction: o, polarity: r.polarity };
};
function Mh(e, t) {
  const { state: r, direction: a, polarity: s } = rl(e), o = Xr(r), i = a === Te.Higher ? "above" : "below", l = a === Te.Higher ? "upwards" : "downwards", d = (() => {
    switch (s) {
      case Ke.HigherIsBetter:
        return "For this measure, higher values are better.";
      case Ke.LowerIsBetter:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  return [
    (() => {
      switch (o) {
        case lt.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case lt.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case lt.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case lt.None:
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
const ja = (e, t, r, a, s, o) => /* @__PURE__ */ n.jsxs("defs", { children: [
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
] }), Kr = ({
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
  const f = Zn(), m = Zn(), {
    start: y,
    mid: w,
    end: v,
    triStart: p,
    triMid: g,
    triEnd: F
  } = nl(), { state: I, direction: j, polarity: P } = Me(
    () => rl(e),
    [e]
  ), D = Me(() => $s(I), [I]), A = Me(() => Xr(I), [I]), T = A === lt.Improving || A === lt.Deteriorating;
  let _ = "";
  a && T && (d === "polarity" ? P === Ke.HigherIsBetter ? _ = "H" : P === Ke.LowerIsBetter ? _ = "L" : _ = "" : _ = j === Te.Higher ? "H" : "L"), c !== void 0 && (_ = c);
  const C = I !== Fe.CommonCause, k = I === Fe.SpecialCauseNoJudgement, h = ft("common-cause", "#A6A6A6"), M = C ? D.hex : h, N = Me(
    () => Ih(I, j),
    [I, j]
  ), b = r || `${D.label}${_ ? j === Te.Higher ? " – Higher" : " – Lower" : ""}`, S = Mh(
    e
  );
  if (i === "triangleWithRun") {
    const W = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], B = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let ae = null;
    I === Fe.SpecialCauseImproving || I === Fe.SpecialCauseDeteriorating ? ae = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (j === Te.Higher ? W : B).map((E) => E.join(",")).join(" "),
        fill: D.hex,
        stroke: D.hex,
        strokeWidth: 6,
        transform: j === Te.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : I === Fe.SpecialCauseNoJudgement && (ae = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: j === Te.Higher ? W.map((E) => E.join(",")).join(" ") : B.map((E) => E.join(",")).join(" "),
        fill: D.hex,
        stroke: D.hex,
        strokeWidth: 6,
        transform: j === Te.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const z = Math.max(0, Math.min(5, Math.floor(l || 0))), fe = I === Fe.CommonCause ? 160 : j === Te.Higher ? 220 : 70, ve = 10, le = 26, ue = 150 - 2 * le, J = I === Fe.SpecialCauseImproving ? ft("improvement", "#00B0F0") : I === Fe.SpecialCauseDeteriorating ? ft("concern", "#E46C0A") : h, ee = Array.from({ length: 5 }).map((E, H) => {
      const V = (I === Fe.SpecialCauseImproving || I === Fe.SpecialCauseDeteriorating) && H >= 5 - z ? J : h;
      return /* @__PURE__ */ n.jsx(
        "circle",
        {
          cx: ue + H * le,
          cy: fe,
          r: ve,
          fill: V,
          stroke: V,
          strokeWidth: 1
        },
        H
      );
    }), de = ja(
      D.hex,
      f,
      m,
      s,
      o,
      [
        { offset: "0%", opacity: p },
        { offset: "75%", opacity: g },
        { offset: "100%", opacity: F }
      ]
    ), x = I === Fe.CommonCause || j === Te.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": b,
        "aria-description": S,
        ...u,
        children: [
          de,
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: "none",
              fill: o ? `url(#${m})` : "#ffffff",
              ...s ? { filter: `url(#${f})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: D.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsxs("g", { transform: x, children: [
            ae,
            _ && /* @__PURE__ */ n.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: j === Te.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: _
              }
            ),
            ee
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
    ], B = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], ae = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let z = null;
    I === Fe.SpecialCauseImproving || I === Fe.SpecialCauseDeteriorating ? z = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (j === Te.Higher ? W : B).map((ve) => ve.join(",")).join(" "),
        fill: D.hex,
        stroke: D.hex,
        strokeWidth: 8,
        transform: j === Te.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : I === Fe.SpecialCauseNoJudgement ? z = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: j === Te.Higher ? W.map((ve) => ve.join(",")).join(" ") : B.map((ve) => ve.join(",")).join(" "),
        fill: D.hex,
        stroke: D.hex,
        strokeWidth: 8,
        transform: j === Te.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : I === Fe.CommonCause && (z = /* @__PURE__ */ n.jsx(
      "line",
      {
        x1: ae[0][0],
        y1: ae[0][1],
        x2: ae[1][0],
        y2: ae[1][1],
        stroke: D.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const fe = ja(
      D.hex,
      f,
      m,
      s,
      o,
      [
        { offset: "0%", opacity: p },
        { offset: "65%", opacity: g },
        { offset: "100%", opacity: F }
      ]
    );
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": b,
        "aria-description": S,
        ...u,
        children: [
          fe,
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: "none",
              fill: o ? `url(#${m})` : "#ffffff",
              ...s ? { filter: `url(#${f})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: D.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          z,
          _ && (I === Fe.SpecialCauseImproving || I === Fe.SpecialCauseDeteriorating) && /* @__PURE__ */ n.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: j === Te.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: _
            }
          )
        ]
      }
    );
  }
  const $ = ja(
    D.hex,
    f,
    m,
    s,
    o,
    [
      { offset: "0%", opacity: y },
      { offset: "65%", opacity: w },
      { offset: "100%", opacity: v }
    ]
  );
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": b,
      "aria-description": S,
      ...u,
      children: [
        $,
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: "none",
            fill: o ? `url(#${m})` : "#ffffff",
            ...s ? { filter: `url(#${f})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: D.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        _ && /* @__PURE__ */ n.jsx(
          "text",
          {
            fill: D.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ n.jsx("tspan", { x: "120", y: j === Te.Lower ? "340" : "155", children: _ })
          }
        ),
        k ? /* @__PURE__ */ n.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: D.hex,
            ...j === Te.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          N.length === 5 && /* @__PURE__ */ n.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: h,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${N.map((te) => `${te.cx} ${te.cy}`).join(" L ")}`
            }
          ),
          N.map((te, U) => {
            const W = U >= N.length - 2 && C ? M : h, B = W;
            return /* @__PURE__ */ n.jsx(
              "circle",
              {
                stroke: B,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: W,
                cx: te.cx,
                cy: te.cy,
                r: 16
              },
              U
            );
          })
        ] })
      ]
    }
  );
};
Kr.displayName = "SPCVariationIcon";
const Zr = ({
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
  const c = Zn(), u = Zn(), { start: f, mid: m, end: y } = nl(), w = s || Th[e], v = (i || Dh[e]).slice(0, 2), p = r || `Assurance ${e}`;
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": p,
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
            /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: w, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "65%", stopColor: w, stopOpacity: parseFloat(m) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(y) })
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
            fill: w,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            x: 0,
            y: 0,
            transform: "translate(121.01, 32) scale(0.5, 0.5)",
            textAnchor: "middle",
            children: /* @__PURE__ */ n.jsx("tspan", { x: 60, y: 184, children: v })
          }
        ),
        l && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          e === Gt.Fail ? /* @__PURE__ */ n.jsx(
            "path",
            {
              id: "fail-line",
              stroke: w,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 33,143 L 268,143"
            }
          ) : e === Gt.Uncertain ? /* @__PURE__ */ n.jsx(
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
              stroke: w,
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
              stroke: w,
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
Zr.displayName = "SPCAssuranceIcon";
function Lh(e, t) {
  const r = Ch(e), a = r.upMax, s = r.downMax, o = r.upRules.map((v) => ({ id: v, rank: Po[v] })), i = r.downRules.map((v) => ({ id: v, rank: Po[v] }));
  let l;
  a > s ? l = mt.Upwards : s > a ? l = mt.Downwards : l = mt.Same;
  const d = a > 0, c = s > 0, u = t === Ne.Up && d || t === Ne.Down && c ? e.value : null, f = t === Ne.Up && c || t === Ne.Down && d ? e.value : null;
  e.sqlOriginalImprovementValue = u, e.sqlOriginalConcernValue = f, u !== null && f !== null && (e.sqlPruned = !0, l === mt.Upwards ? t === Ne.Up || t === Ne.Down && (e.sqlOriginalImprovementValue = null) : l === mt.Downwards ? t === Ne.Up ? e.sqlOriginalImprovementValue = null : Ne.Down : u !== null ? e.sqlOriginalConcernValue = null : f !== null && (e.sqlOriginalImprovementValue = null)), e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = Ce.Improvement : !e.sqlOriginalImprovementValue && e.sqlOriginalConcernValue ? e.variationIcon = Ce.Concern : !e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = Ce.Neither : e.variationIcon = Ce.Improvement, e.primeDirection = l, e.primeRank = Math.max(a, s) || void 0, e.pruningMode = Ns.Sql;
  const w = ((e.variationIcon === Ce.Concern ? t === Ne.Up ? Ze.Down : Ze.Up : t === Ne.Up ? Ze.Up : Ze.Down) === Ze.Up ? o : i).reduce(
    (v, p) => !v || p.rank > v.rank ? p : v,
    void 0
  );
  w && (e.primeRuleId = w.id);
}
function Fh(e) {
  const {
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: s = {}
  } = e, o = Ts({
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: {
      ...s
    }
  }), i = o.rows.map((l) => ({ ...l }));
  for (const l of i)
    Lh(l, r);
  return { rows: i, warnings: o.warnings };
}
const Ph = ({
  engineRows: e,
  measureName: t,
  measureUnit: r,
  onSignalFocus: a
}) => {
  const s = zt(), o = s?.focused ?? null, i = o?.index ?? null, l = typeof i == "number" && e ? e[i] : null, d = Y.useMemo(() => l ? Yr(l) : [], [l]), c = Y.useMemo(
    () => Array.from(
      new Set(d.map((v) => mn[v]?.narration).filter(Boolean))
    ),
    [d]
  ), u = l ? qr(l.variationIcon) : null, f = l ? Yi(l.assuranceIcon) : null, m = d.length > 0, y = l ? l.variationIcon === Ce.Neither && m : !1, w = Y.useRef(null);
  return Y.useEffect(() => {
    if (!a || !o || l == null) return;
    const v = `${o.seriesId}:${o.index}`;
    if (w.current !== v) {
      w.current = v;
      try {
        a({
          index: o.index,
          x: o.x,
          y: o.y,
          row: l,
          rules: d
        });
      } catch {
      }
    }
  }, [o?.seriesId, o?.index, o?.x, o?.y, l, d, a]), /* @__PURE__ */ n.jsxs(
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
        !l || !o ? /* @__PURE__ */ n.jsx("p", { className: "fdp-spc-inspector__empty", children: "No point selected." }) : /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-inspector__body", children: [
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: "fdp-spc-inspector__summary",
              style: { display: "flex", gap: 16, flexWrap: "wrap" },
              children: [
                /* @__PURE__ */ n.jsxs("span", { children: [
                  /* @__PURE__ */ n.jsx("strong", { children: "Point:" }),
                  " ",
                  o.index + 1
                ] }),
                /* @__PURE__ */ n.jsxs("span", { children: [
                  /* @__PURE__ */ n.jsx("strong", { children: "Value:" }),
                  " ",
                  o.y,
                  r ? ` ${r}` : "",
                  t ? ` ${t}` : ""
                ] })
              ]
            }
          ),
          (u || y || f) && /* @__PURE__ */ n.jsx(
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
                      He,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : u?.toLowerCase().includes("improvement") ? /* @__PURE__ */ n.jsx(
                      He,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : y ? /* @__PURE__ */ n.jsx(
                      He,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : u ? /* @__PURE__ */ n.jsx(
                      He,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const v = f.toLowerCase(), g = !(v.includes("not met") || v.includes("not achieved")) && /^|\b(met|achieved)\b|$/.test(v);
                      return /* @__PURE__ */ n.jsx(
                        He,
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
                children: d.length === 0 ? /* @__PURE__ */ n.jsx("span", { children: " None" }) : d.map((v) => {
                  const p = String(v), F = p === it.TrendIncreasing || p === it.TrendDecreasing ? "fdp-spc-tag--trend" : y ? "fdp-spc-tag--no-judgement" : u ? u.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : u.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", I = mn[v]?.tooltip || p;
                  return /* @__PURE__ */ n.jsx(
                    He,
                    {
                      text: I,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${F}`,
                      "data-rule-id": p,
                      title: mn[v]?.tooltip
                    },
                    p
                  );
                })
              }
            )
          ] }),
          c.length > 0 && /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: "fdp-spc-inspector__narration",
              style: { marginTop: 8 },
              children: [
                /* @__PURE__ */ n.jsx("strong", { children: "Summary:" }),
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
let Eh = 0;
const Ah = ({
  data: e,
  ariaLabel: t = "SPC chart",
  height: r = 260,
  showZones: a = !0,
  showPoints: s = !0,
  announceFocus: o = !1,
  className: i,
  unit: l,
  highlightOutOfControl: d = !0,
  chartType: c = kt.XmR,
  metricImprovement: u = Ne.Neither,
  enableRules: f = !0,
  showIcons: m = !1,
  showEmbeddedIcon: y = !0,
  embeddedIconVariant: w = "classic",
  embeddedIconRunLength: v,
  targets: p,
  baselines: g,
  ghosts: F,
  settings: I,
  narrationContext: j,
  gradientSequences: P = !1,
  sequenceTransition: D = "slope",
  processLineWidth: A = 2,
  showWarningsPanel: T = !1,
  warningsFilter: _,
  enableNeutralNoJudgement: C = !0,
  showTrendGatingExplanation: k = !0,
  trendVisualMode: h = "ungated",
  disableTrendSideGating: M,
  source: N,
  alwaysShowZeroY: b = !1,
  alwaysShowHundredY: S = !1,
  percentScale: $ = !1,
  useSqlCompatEngine: te = !1,
  showTrendStartMarkers: U = !1,
  showFirstFavourableCrossMarkers: R = !1,
  showTrendBridgeOverlay: W = !1,
  showSignalsInspector: B = !1,
  onSignalFocus: ae
}) => {
  const z = Y.useCallback(
    (X) => String(X).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((se) => se.length ? se[0].toUpperCase() + se.slice(1) : se).join(" "),
    []
  ), fe = Y.useCallback(
    (X) => String(X).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((O) => O.length ? O[0].toUpperCase() + O.slice(1) : O).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && M !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const ve = Y.useMemo(() => {
    const X = e.map((O, se) => ({
      x: O.x,
      value: O.y,
      target: p?.[se] ?? void 0,
      baseline: g?.[se] ?? void 0,
      ghost: F?.[se] ?? void 0
    }));
    try {
      const O = I ? { ...I } : void 0;
      return te ? Fh({
        chartType: c,
        metricImprovement: u,
        data: X,
        settings: O
      }) : Ts({ chartType: c, metricImprovement: u, data: X, settings: O });
    } catch {
      return null;
    }
  }, [
    e,
    p,
    g,
    F,
    c,
    u,
    I,
    te
  ]), le = ve?.rows.slice().reverse().find((X) => X.mean != null), ue = le?.mean ?? null, J = ve?.warnings || [], ee = Y.useMemo(() => J.length ? _ ? J.filter((X) => !(_.severities && X.severity && !_.severities.includes(X.severity) || _.categories && X.category && !_.categories.includes(X.category) || _.codes && !_.codes.includes(X.code))) : J : [], [J, _]), [de, x] = Y.useState(""), E = Y.useRef("");
  Y.useEffect(() => {
    if (!T) {
      E.current !== "" && (E.current = "", x(""));
      return;
    }
    const X = ee.length;
    if (!X) {
      const ce = "Diagnostics: no warnings.";
      ce !== E.current && (E.current = ce, x(ce));
      return;
    }
    const O = {
      error: ee.filter(
        (ce) => ce.severity === Ut.Error
      ).length,
      warning: ee.filter(
        (ce) => ce.severity === Ut.Warning
      ).length,
      info: ee.filter(
        (ce) => ce.severity === Ut.Info
      ).length
    }, se = [];
    O.error && se.push(
      `${O.error} error${O.error === 1 ? "" : "s"}`
    ), O.warning && se.push(
      `${O.warning} warning${O.warning === 1 ? "" : "s"}`
    ), O.info && se.push(`${O.info} info`);
    const me = `Diagnostics updated: ${X} warning${X === 1 ? "" : "s"} (${se.join(", ")}).`;
    me !== E.current && (E.current = me, x(me));
  }, [T, ee]);
  const H = le?.upperProcessLimit ?? null, Z = le?.lowerProcessLimit ?? null, V = le?.upperOneSigma ?? null, ne = le?.lowerOneSigma ?? null, he = le?.upperTwoSigma ?? null, we = le?.lowerTwoSigma ?? null, ie = ue != null && V != null ? Math.abs(V - ue) : 0, q = Y.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), G = Y.useMemo(() => {
    if ($) {
      const ce = e.map((ye) => ye.y), ke = Math.max(100, ...ce), je = Math.min(0, ...ce);
      return [je < 0 ? je : 0, ke > 100 ? ke : 100];
    }
    const O = [...e.map((ce) => ce.y)];
    if ([ue, H, Z, V, ne, he, we].forEach((ce) => {
      ce != null && O.push(ce);
    }), p && p.forEach((ce) => {
      typeof ce == "number" && !isNaN(ce) && O.push(ce);
    }), !O.length) return;
    let se = Math.min(...O), me = Math.max(...O);
    return b && (se = Math.min(0, se)), S && (me = Math.max(100, me)), [se, me];
  }, [e, ue, H, Z, V, ne, he, we, p, b, S, $]), re = Y.useMemo(() => {
    if (!(l || j?.measureUnit) && e.length)
      return e.every((X) => X.y >= 0 && X.y <= 1) ? "%" : void 0;
  }, [l, j?.measureUnit, e]), Q = l ?? j?.measureUnit ?? re, L = Y.useMemo(() => Q ? { ...j || {}, measureUnit: Q } : j, [j, Q]), K = Y.useMemo(() => {
    if (!ve?.rows) return [];
    const X = [];
    for (let O = 1; O < ve.rows.length; O++)
      ve.rows[O].partitionId !== ve.rows[O - 1].partitionId && X.push(O);
    return X;
  }, [ve?.rows]), oe = Y.useMemo(() => {
    if (!y || !ve?.rows?.length) return null;
    const X = ve.rows, O = I?.minimumPoints ?? 13;
    if (X.filter(
      (Ve) => !Ve.ghost && Ve.value != null
    ).length < O) return null;
    let me = -1;
    for (let Ve = X.length - 1; Ve >= 0; Ve--) {
      const Je = X[Ve];
      if (Je && Je.value != null && !Je.ghost) {
        me = Ve;
        break;
      }
    }
    if (me === -1) return null;
    const ce = X[me], ke = ce.variationIcon, je = ke === Ce.None ? Ce.Suppressed : ke, ye = ce.assuranceIcon, $e = je === Ce.Neither && !!ce.specialCauseNeitherValue, Be = ye === qe.Pass ? Gt.Pass : ye === qe.Fail ? Gt.Fail : Gt.Uncertain;
    let Pe;
    if (je === Ce.Suppressed) {
      const Ve = ce.specialCauseSinglePointUp, Je = ce.specialCauseSinglePointDown;
      u === Ne.Up ? Ve ? Pe = Te.Higher : Je && (Pe = Te.Lower) : u === Ne.Down ? Je ? Pe = Te.Lower : Ve && (Pe = Te.Higher) : Pe = Te.Higher;
    } else if (je === Ce.Neither && $e) {
      const Ve = ce.specialCauseSinglePointUp || ce.specialCauseTwoOfThreeUp || ce.specialCauseFourOfFiveUp || ce.specialCauseShiftUp || ce.specialCauseTrendUp, Je = ce.specialCauseSinglePointDown || ce.specialCauseTwoOfThreeDown || ce.specialCauseFourOfFiveDown || ce.specialCauseShiftDown || ce.specialCauseTrendDown;
      Ve && !Je ? Pe = Te.Higher : Je && !Ve ? Pe = Te.Lower : Pe = Te.Higher;
    }
    let Ae;
    u === Ne.Up ? Ae = Ke.HigherIsBetter : u === Ne.Down ? Ae = Ke.LowerIsBetter : Ae = Ke.ContextDependent;
    const Ge = 80;
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        style: { display: "flex", gap: 12, marginRight: 16 },
        children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-icon",
              "data-variation": String(je),
              "data-trend-raw": Pe ? String(Pe) : "none",
              "data-trend": Pe ? String(Pe) : "none",
              "data-polarity": String(Ae ?? "unknown"),
              style: { width: Ge, height: Ge },
              children: /* @__PURE__ */ n.jsx(
                Kr,
                {
                  dropShadow: !1,
                  data: {
                    variationIcon: ke,
                    improvementDirection: u,
                    polarity: Ae,
                    specialCauseNeutral: $e,
                    highSideSignal: ce.specialCauseSinglePointUp || ce.specialCauseTwoOfThreeUp || ce.specialCauseFourOfFiveUp || ce.specialCauseShiftUp || ce.specialCauseTrendUp,
                    lowSideSignal: ce.specialCauseSinglePointDown || ce.specialCauseTwoOfThreeDown || ce.specialCauseFourOfFiveDown || ce.specialCauseShiftDown || ce.specialCauseTrendDown,
                    ...Pe ? { trend: Pe } : {}
                  },
                  letterMode: u === Ne.Neither ? "direction" : "polarity",
                  size: Ge,
                  variant: w,
                  runLength: w === "triangleWithRun" ? v : void 0
                }
              )
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-assurance-icon",
              "data-assurance": String(ye),
              style: { width: Ge, height: Ge },
              children: /* @__PURE__ */ n.jsx(
                Zr,
                {
                  status: Be,
                  size: Ge,
                  dropShadow: !1
                }
              )
            }
          )
        ]
      },
      `embedded-icon-${me}`
    );
  }, [
    y,
    ve?.rows,
    u,
    I?.minimumPoints,
    p,
    w,
    v
  ]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: i ? `fdp-spc-chart-wrapper ${i}` : "fdp-spc-chart-wrapper",
      children: [
        y && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "fdp-spc-chart__top-row",
            style: {
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 4
            },
            children: oe
          }
        ),
        /* @__PURE__ */ n.jsx(
          kp,
          {
            height: r,
            ariaLabel: t,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ n.jsx(Cp, { series: q, yDomain: G, children: /* @__PURE__ */ n.jsx(
              Rh,
              {
                series: q,
                showPoints: s,
                announceFocus: o,
                limits: { mean: ue, ucl: H, lcl: Z, sigma: ie, onePos: V, oneNeg: ne, twoPos: he, twoNeg: we },
                showZones: a,
                highlightOutOfControl: d,
                engineRows: ve?.rows || null,
                enableRules: f,
                showIcons: m,
                narrationContext: L,
                gradientSequences: P,
                sequenceTransition: D,
                processLineWidth: A,
                effectiveUnit: Q,
                partitionMarkers: K,
                ariaLabel: t,
                enableNeutralNoJudgement: C,
                showTrendGatingExplanation: k,
                trendVisualMode: h,
                metricImprovement: u,
                showTrendStartMarkers: U,
                showFirstFavourableCrossMarkers: R,
                showTrendBridgeOverlay: W,
                showSignalsInspector: B,
                onSignalFocus: ae
              }
            ) })
          }
        ),
        N && /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof N == "string" ? /* @__PURE__ */ n.jsxs("small", { children: [
          "Source: ",
          N
        ] }) : N }),
        T && de && /* @__PURE__ */ n.jsx(
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
            children: de
          }
        ),
        T && ee.length > 0 && /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "fdp-spc-chart__warnings",
            role: "region",
            "aria-label": "SPC diagnostics",
            children: [
              /* @__PURE__ */ n.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
              /* @__PURE__ */ n.jsx(
                Ht,
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
                  rows: ee.map((X) => {
                    let O = "grey";
                    return X.severity === Ut.Error ? O = "red" : X.severity === Ut.Warning ? O = "orange" : X.severity === Ut.Info && (O = "blue"), [
                      {
                        node: /* @__PURE__ */ n.jsx(
                          He,
                          {
                            color: O,
                            text: (X.severity ? String(X.severity) : "Info").replace(
                              /^[a-z]/,
                              (se) => se.toUpperCase()
                            )
                          }
                        ),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
                      },
                      {
                        node: X.category ? /* @__PURE__ */ n.jsx(
                          He,
                          {
                            color: "purple",
                            text: fe(X.category)
                          }
                        ) : /* @__PURE__ */ n.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
                      },
                      {
                        node: /* @__PURE__ */ n.jsx(He, { color: "grey", text: z(X.code) }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
                      },
                      {
                        node: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                          /* @__PURE__ */ n.jsx("span", { children: X.message }),
                          X.context && Object.keys(X.context).length > 0 && /* @__PURE__ */ n.jsxs(
                            "details",
                            {
                              className: "fdp-spc-chart__warning-context",
                              style: { marginTop: 4 },
                              children: [
                                /* @__PURE__ */ n.jsx("summary", { children: "context" }),
                                /* @__PURE__ */ n.jsx("pre", { children: JSON.stringify(X.context, null, 2) })
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
}, Rh = ({
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
  sequenceTransition: f,
  processLineWidth: m,
  effectiveUnit: y,
  partitionMarkers: w,
  ariaLabel: v,
  metricImprovement: p,
  enableNeutralNoJudgement: g = !0,
  showTrendGatingExplanation: F = !0,
  trendVisualMode: I = "ungated",
  showTrendStartMarkers: j = !1,
  showFirstFavourableCrossMarkers: P = !1,
  showTrendBridgeOverlay: D = !1,
  showSignalsInspector: A = !1,
  onSignalFocus: T
}) => {
  const _ = rn(), C = Vt();
  if (!_) return null;
  const { xScale: k, yScale: h } = _, M = Y.useRef(
    "spc-seq-" + ++Eh
  ), N = zt(), b = e[0]?.data || [], S = Y.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const x = /* @__PURE__ */ new Set();
    return b.forEach((E, H) => {
      (a.ucl != null && E.y > a.ucl || a.lcl != null && E.y < a.lcl) && x.add(H);
    }), x;
  }, [b, a.ucl, a.lcl]), $ = Y.useMemo(() => {
    if (!i) return null;
    const x = {};
    return i.forEach((E, H) => {
      if (E.value == null || E.ghost) return;
      const Z = E.specialCauseSinglePointUp || E.specialCauseSinglePointDown || E.specialCauseTwoOfThreeUp || E.specialCauseTwoOfThreeDown || E.specialCauseFourOfFiveUp || E.specialCauseFourOfFiveDown || E.specialCauseShiftUp || E.specialCauseShiftDown || E.specialCauseTrendUp || E.specialCauseTrendDown;
      x[H] = {
        variation: E.variationIcon,
        assurance: E.assuranceIcon,
        special: Z,
        concern: E.variationIcon === Ce.Concern,
        improvement: E.variationIcon === Ce.Improvement,
        trendUp: !!E.specialCauseTrendUp,
        trendDown: !!E.specialCauseTrendDown
      };
    }), x;
  }, [i]), te = Y.useMemo(() => {
    if (!i || !i.length) return null;
    const x = [];
    for (const H of i)
      typeof H.target == "number" && !isNaN(H.target) && x.push(H.target);
    if (!x.length) return null;
    const E = x[0];
    return x.every((H) => H === E) ? E : null;
  }, [i]), U = Y.useMemo(() => {
    if (!$ || !b.length)
      return [];
    const x = b.map((H, Z) => {
      const V = $?.[Z];
      if (V?.concern) return "concern";
      if (V?.improvement) return "improvement";
      if (V?.special && V.variation === Ce.Neither) {
        if (I === "ungated" && p && p !== Ne.Neither) {
          if (V.trendUp)
            return p === Ne.Up ? "improvement" : "concern";
          if (V.trendDown)
            return p === Ne.Down ? "improvement" : "concern";
        }
        if (g) return "noJudgement";
      }
      return "common";
    });
    return v?.includes("Rule Clash") && console.log(
      `[${v}] Raw categories:`,
      x.map((H, Z) => `${Z}:${H}(${b[Z].y})`).join(", ")
    ), x;
  }, [$, b, v, g]), R = Y.useMemo(() => {
    if (!u || !U.length)
      return [];
    const x = [...U];
    let E = 0;
    for (; E < x.length; ) {
      const V = x[E];
      let ne = E + 1;
      for (; ne < x.length && x[ne] === V; ) ne++;
      ne - E === 1 && V !== "common" && (x[E] = "common"), E = ne;
    }
    const H = [];
    if (x.length) {
      let V = 0;
      for (let ne = 1; ne <= x.length; ne++)
        if (ne === x.length || x[ne] !== x[V]) {
          const he = x[V], we = ne - 1, ie = we - V + 1;
          (he === "common" || ie >= 2) && H.push({ start: V, end: we, category: he }), V = ne;
        }
    }
    return v?.includes("Rule Clash") && console.log(
      `[${v}] Final sequences:`,
      H.map((V) => `${V.start}-${V.end}:${V.category}`).join(", ")
    ), H;
  }, [u, U, v]), W = Y.useMemo(
    () => b.map((x) => k(x.x instanceof Date ? x.x : new Date(x.x))),
    [b, k]
  ), B = k.range()[1], ae = Y.useMemo(() => {
    if (!i || !i.length) return null;
    let x = Number.POSITIVE_INFINITY, E = Number.POSITIVE_INFINITY;
    if (i.forEach((ie, q) => {
      ie.specialCauseTrendUp && (x = Math.min(x, q)), ie.specialCauseTrendDown && (E = Math.min(E, q));
    }), !Number.isFinite(x) && !Number.isFinite(E)) return null;
    const H = x <= E, Z = H ? "up" : "down", V = H ? x : E, ne = (ie) => p == null || p === Ne.Neither || ie == null || typeof ie.value != "number" || typeof ie.mean != "number" ? !1 : Z === "up" ? p === Ne.Up ? ie.value > ie.mean : ie.value < ie.mean : p === Ne.Down ? ie.value < ie.mean : ie.value > ie.mean;
    let he = null;
    for (let ie = V; ie < i.length; ie++) {
      const q = i[ie];
      if (!(H ? !!q.specialCauseTrendUp : !!q.specialCauseTrendDown)) break;
      if (ne(q)) {
        he = ie;
        break;
      }
    }
    let we = !1;
    if (he != null) {
      let ie = 0;
      for (let q = he; q < i.length; q++) {
        const G = i[q];
        if (!(H ? !!G.specialCauseTrendUp : !!G.specialCauseTrendDown)) break;
        ne(G) && ie++;
      }
      we = ie >= 2;
    }
    return { direction: Z, detectedAt: V, firstFavourableCrossAt: he, persistedAcrossMean: we };
  }, [i, p]), z = Y.useMemo(() => {
    if (!i || !i.length) return null;
    const x = (E) => {
      const H = [];
      let Z = null, V = null;
      for (let ne = 0; ne < i.length; ne++) {
        const he = i[ne], we = typeof he[E] == "number" ? he[E] : null;
        if (we == null || isNaN(we)) {
          Z !== null && V != null && (H.push({
            x1: W[Z],
            x2: W[ne - 1],
            y: h(V)
          }), Z = null, V = null);
          continue;
        }
        if (Z === null) {
          Z = ne, V = we;
          continue;
        }
        V != null && Math.abs(we - V) <= 1e-9 || (V != null && H.push({
          x1: W[Z],
          x2: W[ne - 1],
          y: h(V)
        }), Z = ne, V = we);
      }
      return Z !== null && V != null && H.push({
        x1: W[Z],
        x2: W[i.length - 1],
        y: h(V)
      }), H;
    };
    return {
      mean: x("mean"),
      ucl: x("upperProcessLimit"),
      lcl: x("lowerProcessLimit"),
      onePos: x("upperOneSigma"),
      oneNeg: x("lowerOneSigma"),
      twoPos: x("upperTwoSigma"),
      twoNeg: x("lowerTwoSigma")
    };
  }, [i, W, h]), fe = Y.useMemo(() => R.length ? /* @__PURE__ */ n.jsxs("defs", { children: [
    /* @__PURE__ */ n.jsxs("linearGradient", { id: `${M.current}-grad-common`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.28 }),
      /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.12 }),
      /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.045 })
    ] }),
    R.map((x, E) => {
      const H = `${M.current}-grad-${E}`;
      let Z, V = 0.28, ne = 0.12, he = 0.045;
      switch (x.category) {
        case "concern":
          Z = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", V = 0.28, ne = 0.12, he = 0.045;
          break;
        case "improvement":
          Z = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", V = 0.26, ne = 0.11, he = 0.045;
          break;
        case "noJudgement":
          Z = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", V = 0.26, ne = 0.11, he = 0.045;
          break;
        default:
          Z = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ n.jsxs("linearGradient", { id: H, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: Z, stopOpacity: V }),
        /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: Z, stopOpacity: ne }),
        /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: Z, stopOpacity: he })
      ] }, H);
    })
  ] }) : null, [R]), ve = Y.useMemo(() => {
    if (!R.length) return null;
    const [x] = h.domain(), E = h(x), H = R.map((Z, V) => {
      const { start: ne, end: he, category: we } = Z;
      if (ne < 0 || he >= W.length || ne > he)
        return null;
      const ie = W[ne], q = W[he];
      let G = "";
      if (we === "common") {
        const re = V > 0 ? R[V - 1] : null, Q = V < R.length - 1 ? R[V + 1] : null, L = re ? W[re.end] : 0, K = re ? h(b[re.end].y) : E, oe = Q ? W[Q.start] : B, X = Q ? h(b[Q.start].y) : E;
        G = `M ${L} ${E}`, G += ` L ${L} ${K}`;
        for (let O = ne; O <= he; O++)
          G += ` L ${W[O]} ${h(b[O].y)}`;
        G += ` L ${oe} ${X}`, G += ` L ${oe} ${E} Z`;
      } else {
        const re = V > 0 ? R[V - 1] : null, Q = V < R.length - 1 ? R[V + 1] : null, L = re && re.category !== "common", K = Q && Q.category !== "common", oe = h(b[ne].y), X = h(b[he].y);
        let O = ie, se = q;
        if (L) {
          const me = W[re.end], ce = h(b[re.end].y), ke = b[ne].y - b[re.end].y;
          f === "slope" && ke > 0 ? (G = `M ${me} ${ce} L ${ie} ${oe}`, O = me) : (G = `M ${ie} ${E} L ${ie} ${oe}`, O = ie);
        } else
          G = `M ${ie} ${E} L ${ie} ${oe}`;
        for (let me = ne + 1; me <= he; me++)
          G += ` L ${W[me]} ${h(b[me].y)}`;
        if (G += ` L ${q} ${X}`, K) {
          const me = W[Q.start], ce = h(b[Q.start].y), ke = b[Q.start].y - b[he].y;
          (f === "slope" && ke <= 0 || f === "extend") && (G += ` L ${me} ${ce}`, se = me);
        }
        if (G += ` L ${se} ${E}`, G += ` L ${O} ${E} Z`, f === "neutral" && L) {
          const me = W[re.end], ce = h(b[re.end].y), ke = /* @__PURE__ */ n.jsx(
            "path",
            {
              d: `M ${me} ${E} L ${me} ${ce} L ${ie} ${oe} L ${ie} ${E} Z`,
              fill: `url(#${M.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${V}`
          );
          return /* @__PURE__ */ n.jsxs("g", { children: [
            ke,
            /* @__PURE__ */ n.jsx(
              "path",
              {
                d: G,
                fill: `url(#${M.current}-grad-${V})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${V}`
            )
          ] }, `seq-group-${V}`);
        }
      }
      return /* @__PURE__ */ n.jsx(
        "path",
        {
          d: G,
          fill: `url(#${M.current}-grad-${V})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${V}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ n.jsx("g", { className: "fdp-spc__sequence-bgs", children: H });
  }, [R, W, B, h, b, f]), le = Y.useMemo(() => {
    if (!c?.timeframe && b.length >= 2) {
      const x = b.map((he) => he.x instanceof Date ? he.x : new Date(he.x)), E = new Date(Math.min(...x.map((he) => he.getTime()))), H = new Date(Math.max(...x.map((he) => he.getTime()))), Z = Math.round((H.getTime() - E.getTime()) / 864e5) || 0;
      if (Z < 14)
        return `The chart shows a timeframe of ${Z + 1} days`;
      const V = Math.round(Z / 7);
      return V < 20 ? `The chart shows a timeframe of ${V} weeks` : `The chart shows a timeframe of ${(H.getFullYear() - E.getFullYear()) * 12 + (H.getMonth() - E.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, b]), ue = (x) => {
    const E = x % 10, H = x % 100;
    return E === 1 && H !== 11 ? `${x}st` : E === 2 && H !== 12 ? `${x}nd` : E === 3 && H !== 13 ? `${x}rd` : `${x}th`;
  }, J = (x) => `${ue(x.getDate())} ${x.toLocaleString("en-GB", { month: "long" })}, ${x.getFullYear()}`, ee = Y.useCallback(
    ({
      index: x,
      x: E,
      y: H
    }) => {
      const Z = i?.[x], V = E instanceof Date ? E : new Date(E), ne = J(V), he = c?.measureUnit ? ` ${c.measureUnit}` : "", we = c?.measureName ? ` ${c.measureName}` : "";
      if (!Z)
        return `General summary is: ${le ? le + ". " : ""}Point ${x + 1}, ${ne}, ${H}${he}${we}`;
      const ie = qr(Z.variationIcon) || "Variation", q = Yr(Z), G = q.length ? ` Rules: ${[...new Set(q.map((Q) => mn[Q].narration))].join("; ")}.` : " No special cause rules.", re = [];
      return c?.measureName && re.push(`Measure: ${c.measureName}.`), c?.datasetContext && re.push(`${c.datasetContext}.`), c?.organisation && re.push(`Organisation: ${c.organisation}.`), c?.additionalNote && re.push(c.additionalNote), [
        "General summary is:",
        ...re,
        `Point ${x + 1} recorded on `,
        ne + ",",
        `with a value of ${H} ${he}${we}`,
        ie + ".",
        G
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, le]
  ), de = Y.useCallback(
    (x, E) => i?.[x] ? ee({
      index: x,
      seriesId: "process",
      x: E.x instanceof Date ? E.x : new Date(E.x),
      y: E.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, ee]
  );
  return /* @__PURE__ */ n.jsx(ih, { children: /* @__PURE__ */ n.jsxs(
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
            width: _.xScale.range()[1] + 56 + 16,
            height: _.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ n.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ n.jsx(Lo, { type: "x" }),
              /* @__PURE__ */ n.jsx(Lo, { type: "y" }),
              /* @__PURE__ */ n.jsx(jp, { axis: "y" }),
              fe,
              ve,
              w.map((x, E) => {
                const H = b[x];
                if (!H) return null;
                const Z = k(H.x instanceof Date ? H.x : new Date(H.x));
                return /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    x1: Z,
                    x2: Z,
                    y1: 0,
                    y2: h.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${E}`
                );
              }),
              z?.mean.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                z.mean.map((x, E) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__cl", x1: x.x1, x2: x.x2, y1: x.y, y2: x.y }, `mean-${E}`)),
                z.mean.map((x, E) => {
                  if (E === z.mean.length - 1) return null;
                  const H = z.mean[E + 1];
                  if (!H || x.y === H.y) return null;
                  const V = Math.max(4, H.x1 - x.x2 || 0) * 0.5, ne = `M ${x.x2},${x.y} C ${x.x2 + V},${x.y} ${H.x1 - V},${H.y} ${H.x1},${H.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__cl fdp-spc__cl-join", d: ne, fill: "none" }, `mean-join-${E}`);
                })
              ] }) : null,
              te != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ n.jsx(n.Fragment, {}),
              z?.ucl.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--ucl", children: [
                z.ucl.map((x, E) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--ucl", x1: x.x1, x2: x.x2, y1: x.y, y2: x.y, strokeWidth: 2 }, `ucl-${E}`)),
                z.ucl.map((x, E) => {
                  if (E === z.ucl.length - 1) return null;
                  const H = z.ucl[E + 1];
                  if (!H || x.y === H.y) return null;
                  const V = Math.max(4, H.x1 - x.x2 || 0) * 0.5, ne = `M ${x.x2},${x.y} C ${x.x2 + V},${x.y} ${H.x1 - V},${H.y} ${H.x1},${H.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join", d: ne, fill: "none", strokeWidth: 2 }, `ucl-join-${E}`);
                })
              ] }) : null,
              z?.lcl.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--lcl", children: [
                z.lcl.map((x, E) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--lcl", x1: x.x1, x2: x.x2, y1: x.y, y2: x.y, strokeWidth: 2 }, `lcl-${E}`)),
                z.lcl.map((x, E) => {
                  if (E === z.lcl.length - 1) return null;
                  const H = z.lcl[E + 1];
                  if (!H || x.y === H.y) return null;
                  const V = Math.max(4, H.x1 - x.x2 || 0) * 0.5, ne = `M ${x.x2},${x.y} C ${x.x2 + V},${x.y} ${H.x1 - V},${H.y} ${H.x1},${H.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join", d: ne, fill: "none", strokeWidth: 2 }, `lcl-join-${E}`);
                })
              ] }) : null,
              te != null && /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: k.range()[1],
                    y1: h(te),
                    y2: h(te),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: k.range()[0] - 7,
                    y: h(te) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      te,
                      " ",
                      y || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              s && z && z.mean.length > 0 && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                z.onePos.map((x, E) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: x.x1,
                    x2: x.x2,
                    y1: x.y,
                    y2: x.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${E}`
                )),
                z.oneNeg.map((x, E) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: x.x1,
                    x2: x.x2,
                    y1: x.y,
                    y2: x.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${E}`
                )),
                z.twoPos.map((x, E) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: x.x1,
                    x2: x.x2,
                    y1: x.y,
                    y2: x.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${E}`
                )),
                z.twoNeg.map((x, E) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: x.x1,
                    x2: x.x2,
                    y1: x.y,
                    y2: x.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${E}`
                ))
              ] }),
              ae && (j || P || D) && (() => {
                const x = ae.detectedAt, E = ae.firstFavourableCrossAt, H = b[x] ? k(b[x].x instanceof Date ? b[x].x : new Date(b[x].x)) : null, Z = b[x] ? h(b[x].y) : null, V = E != null && b[E] ? k(b[E].x instanceof Date ? b[E].x : new Date(b[E].x)) : null, ne = E != null && b[E] ? h(b[E].y) : null;
                return /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  D && H != null && Z != null && V != null && ne != null && /* @__PURE__ */ n.jsx("line", { x1: H, y1: Z, x2: V, y2: ne, stroke: "#888", strokeDasharray: "4 4", strokeWidth: 2, children: /* @__PURE__ */ n.jsx("title", { children: "Trend bridge: start to first favourable-side point" }) }),
                  j && H != null && Z != null && /* @__PURE__ */ n.jsx("circle", { cx: H, cy: Z, r: 6, fill: "white", stroke: "#555", strokeWidth: 2, children: /* @__PURE__ */ n.jsx("title", { children: "Trend start (run reached N)" }) }),
                  P && V != null && ne != null && /* @__PURE__ */ n.jsx("circle", { cx: V, cy: ne, r: 5, fill: "#555", children: /* @__PURE__ */ n.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ n.jsx(
                lh,
                {
                  series: e[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (x) => x.x instanceof Date ? x.x : new Date(x.x),
                  smooth: !1,
                  strokeWidth: m
                }
              ),
              t && b.map((x, E) => {
                const H = k(x.x instanceof Date ? x.x : new Date(x.x)), Z = h(x.y), V = S.has(E), ne = $?.[E], he = I === "ungated" && !!ne?.special && ne?.variation === Ce.Neither && p != null && p !== Ne.Neither, we = he && (ne?.trendUp && p === Ne.Up || ne?.trendDown && p === Ne.Down), ie = he && (ne?.trendUp && p === Ne.Down || ne?.trendDown && p === Ne.Up), q = !!(ne?.improvement || we), G = !!(ne?.concern || ie), re = [
                  "fdp-spc__point",
                  V && o ? "fdp-spc__point--ooc" : null,
                  l && ne?.special && G ? "fdp-spc__point--sc-concern" : null,
                  l && ne?.special && q ? "fdp-spc__point--sc-improvement" : null,
                  // Neutral (context-dependent) metrics: show purple when special cause present but neither improvement nor concern
                  l && g && ne?.special && ne.variation === Ce.Neither && !q && !G ? "fdp-spc__point--sc-no-judgement" : null,
                  ne?.assurance === qe.Pass ? "fdp-spc__point--assurance-pass" : null,
                  ne?.assurance === qe.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), Q = `Point ${E + 1} value ${x.y}` + (ne?.special ? " special cause" : "") + (ne?.variation === Ce.Improvement ? " improving" : ne?.variation === Ce.Concern ? " concern" : ""), L = N?.focused?.index === E;
                return /* @__PURE__ */ n.jsx(
                  "circle",
                  {
                    cx: H,
                    cy: Z,
                    r: 5,
                    className: re,
                    "data-variation": ne?.variation,
                    "data-assurance": ne?.assurance,
                    "aria-label": Q,
                    ...L ? { "aria-describedby": `spc-tooltip-${E}` } : {}
                  },
                  E
                );
              }),
              d && l && $ && b.map((x, E) => {
                const H = $[E];
                if (!H || !(H.concern || H.improvement)) return null;
                const Z = k(x.x instanceof Date ? x.x : new Date(x.x)), V = h(x.y);
                let ne = V - 10;
                const he = 12, we = h.range()[0] - 4;
                ne < he && (ne = Math.min(V + 16, we));
                const ie = k.range()[1], q = Math.min(Math.max(Z, 0), ie - 0);
                return /* @__PURE__ */ n.jsx(
                  "text",
                  {
                    x: q,
                    y: ne,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${H.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: H.concern ? "!" : "★"
                  },
                  `icon-${E}`
                );
              }),
              C && /* @__PURE__ */ n.jsx(
                Bh,
                {
                  width: k.range()[1],
                  height: h.range()[0]
                }
              ),
              !A && /* @__PURE__ */ n.jsx(
                tl,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: de,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (x) => J(x),
                  enableNeutralNoJudgement: g,
                  showTrendGatingExplanation: F
                }
              )
            ] })
          }
        ),
        A && /* @__PURE__ */ n.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ n.jsx(
          Ph,
          {
            engineRows: i,
            measureName: c?.measureName,
            measureUnit: y || c?.measureUnit,
            onSignalFocus: T
          }
        ) }),
        r && /* @__PURE__ */ n.jsx(
          ch,
          {
            format: (x) => ee({ ...x, x: x.x instanceof Date ? x.x : new Date(x.x) })
          }
        )
      ]
    }
  ) });
}, Bh = ({
  width: e,
  height: t
}) => {
  const r = zt();
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
}, Hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: Gt,
  Direction: Te,
  MetricPolarity: Ke,
  SPCAssuranceIcon: Zr,
  SPCVariationIcon: Kr,
  VariationJudgement: lt,
  VariationState: Fe,
  getVariationColour: $s,
  getVariationTrend: Xr
}, Symbol.toStringTag, { value: "Module" })), xb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: qe,
  AssuranceResult: Gt,
  BaselineSuggestionReason: Qi,
  ChartType: kt,
  Direction: Te,
  Icons: Hh,
  ImprovementDirection: Ne,
  MetricPolarity: Ke,
  RULE_METADATA: mr,
  SPCAssuranceIcon: Zr,
  SPCChart: Ah,
  SPCTooltipOverlay: tl,
  SPCVariationIcon: Kr,
  SpcWarningCategory: Zi,
  SpcWarningCode: Ji,
  SpcWarningSeverity: Ut,
  VARIATION_COLOR_TOKENS: gt,
  VariationIcon: Ce,
  VariationJudgement: lt,
  VariationState: Fe,
  buildSpc: Ts,
  extractRuleIds: Yr,
  getVariationColorHex: hh,
  getVariationColorToken: qi,
  getVariationColour: $s,
  getVariationTrend: Xr,
  normaliseSpcSettings: el,
  ruleGlossary: mn,
  variationLabel: qr
}, Symbol.toStringTag, { value: "Module" })), zh = "150ms", Wh = "300ms", Oh = "500ms", Uh = "cubic-bezier(0.4, 0, 1, 1)", Gh = "cubic-bezier(0, 0, 0.2, 1)", Vh = "cubic-bezier(0.4, 0, 0.2, 1)", Yh = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", qh = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Xh = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Kh = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Zh = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Jh = "1px", Qh = "2px", em = "4px", tm = "4px", nm = "4px", rm = "2px", am = "1px", sm = "0px", om = "4px", im = "8px", lm = "12px", al = "#d8dde0", sl = "#4c6272", ol = "#d8dde0", il = "#aeb7bd", ll = "#d5281b", cl = "#005eb8", dl = "#ffffff", ul = "#212b32", fl = "#007f3b", pl = "#330072", hl = "#7c2855", ml = "#d5281b", gl = "#ffeb3b", xl = "#fff9c4", bl = "#ffb81c", yl = "#ed8b00", vl = "#00a499", _l = "#ae2573", wl = "#4c6272", Sl = "#768692", kl = "#aeb7bd", Cl = "#d8dde0", jl = "#f0f4f5", cm = "#212b32", dm = "#4c6272", um = "#ffffff", fm = "#212b32", pm = "#005eb8", hm = "#7c2855", mm = "#003087", gm = "#330072", xm = "#ffeb3b", bm = "#212b32", ym = "#d8dde0", vm = "#ffffff33", _m = "#d5281b", wm = "#4c6272", Sm = "#ffffff", km = "#007f3b", Cm = "#ffffff", jm = "#006530", Nm = "#004021", Tm = "#004021", Dm = "#00000000", $m = "#ffffff", Im = "#005eb8", Mm = "#005eb8", Lm = "#d9e5f2", Fm = "#c7daf0", Pm = "#005eb8", Em = "#ffffff", Am = "#212b32", Rm = "#d9dde0", Bm = "#b3bcc2", Hm = "#b3bcc2", zm = "#d5281b", Wm = "#aa2016", Om = "#6a140e", Um = "#6a140e", Gm = "#005eb8", Vm = "#004b93", Ym = "#002f5c", qm = "#002f5c", Xm = "8px", Km = "16px", Zm = "12px", Jm = "16px", Qm = "4px", eg = "40px", tg = "4px", ng = "40px", rg = "12px", ag = "16px", sg = "32px", og = "16px", ig = "20px", lg = "28px", cg = "9px", dg = "2px", ug = "16px", fg = "24px", pg = "8px", hg = "24px", mg = "16px", gg = "4px", xg = "4px", bg = "4px", yg = "8px", vg = "4px", _g = "16px", wg = "#007f3b", Sg = "#006530", kg = "#004021", Cg = "#d8dde0", jg = "#ffffff", Ng = "#768692", Tg = "#00000000", Dg = "#ffeb3b", $g = "#00000000", Ig = "#ffffff", Mg = "#d9e5f2", Lg = "#c7daf0", Fg = "#005eb8", Pg = "#005eb8", Nl = "8px", Tl = "16px", Dl = "12px", $l = "16px", Eg = "2px", Ag = "4px", Rg = "4px", Bg = "600", Hg = "#ffffff", zg = "#d8dde0", Wg = "#aeb7bd", Og = "#f0f4f5", Ug = "#212b32", Gg = "#212b32", Vg = "#005eb8", Il = "16px", Ml = "32px", Ll = "16px", Yg = "1px", qg = "4px", Xg = "none", Kg = "0 2px 4px rgba(0, 0, 0, 0.1)", Zg = "#ffffff", Jg = "#ffffff", Qg = "#d8dde0", e0 = "#ffffff", t0 = "#4c6272", n0 = "#ffeb3b", r0 = "#d5281b", a0 = "#aeb7bd", s0 = "#212b32", o0 = "#4c6272", i0 = "#768692", l0 = "#212b32", c0 = "#ffffff", d0 = "600", u0 = "#d5281b", f0 = "600", p0 = "#4c6272", Fl = "4px", Pl = "40px", El = "40px", Al = "12px", h0 = "2px", m0 = "4px", g0 = "0px", x0 = "16px", b0 = "18px", y0 = "24px", v0 = "32px", _0 = "34px", w0 = "32px", S0 = "40px", k0 = "48px", C0 = "5.4ex", j0 = "7.2ex", N0 = "9ex", T0 = "10.8ex", D0 = "20ex", $0 = "38ex", I0 = "56ex", M0 = "44px", L0 = "40px", F0 = "1020px", P0 = "100%", E0 = "50%", A0 = "33.333%", R0 = "25%", B0 = "20%", H0 = "320px", z0 = "641px", W0 = "1025px", O0 = "1280px", U0 = "960px", G0 = "32px", V0 = "16px", Y0 = "#d5281b", q0 = "#d5281b", X0 = "#ffffff", K0 = "#007f3b", Z0 = "#007f3b", J0 = "#ffffff", Q0 = "#ffeb3b", ex = "#ffeb3b", tx = "#212b32", nx = "#005eb8", rx = "#005eb8", ax = "#ffffff", sx = "#d8dde0", ox = "#aeb7bd", ix = "#768692", lx = "0 4px 0 #004021", cx = "0 4px 0 #005eb8", dx = "0 4px 0 #6a140e", ux = "0 4px 0 #ffeb3b", fx = "none", px = "0 2px 4px rgba(0, 0, 0, 0.1)", hx = "4px", mx = "0px", gx = "solid", xx = "0 0 0 3px #ffeb3b", bx = "0 0 0 3px #ffeb3b", yx = "none", vx = "0 1px 3px rgba(0, 0, 0, 0.12)", _x = "0 2px 6px rgba(0, 0, 0, 0.16)", wx = "0 4px 12px rgba(0, 0, 0, 0.20)", Rl = "0", Bl = "4px", Hl = "8px", zl = "16px", Wl = "24px", Ol = "32px", Ul = "40px", Gl = "48px", Vl = "56px", Yl = "64px", Oa = "0", Ua = "0", Ga = "4px", Va = "4px", Ya = "8px", qa = "8px", Xa = "8px", Ka = "16px", Za = "16px", Ja = "24px", Qa = "24px", es = "32px", ts = "32px", ns = "40px", rs = "40px", as = "48px", ss = "48px", os = "56px", is = "56px", ls = "64px", gr = "Frutiger W01", xr = "Arial, Helvetica, sans-serif", br = "sans-serif", yr = "400", vr = "600", _r = "400", wr = "12px", Sr = "14px", kr = "12pt", Cr = "14px", jr = "16px", Nr = "12pt", Tr = "16px", Dr = "19px", $r = "13pt", Ir = "19px", Mr = "22px", Lr = "15pt", Fr = "22px", Pr = "26px", Er = "17pt", Ar = "27px", Rr = "36px", Br = "20pt", Hr = "33px", zr = "48px", Wr = "24pt", cs = "16px", ds = "24px", Ct = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, jt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Nt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Tt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Dt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, $t = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, It = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Mt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Lt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ft = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Sx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: zh,
  AnimationDurationNormal: Wh,
  AnimationDurationSlow: Oh,
  AnimationEasingBounce: Yh,
  AnimationEasingEaseIn: Uh,
  AnimationEasingEaseInOut: Vh,
  AnimationEasingEaseOut: Gh,
  BorderColorCard: ol,
  BorderColorCardHover: il,
  BorderColorDefault: al,
  BorderColorError: ll,
  BorderColorForm: sl,
  BorderRadiusLarge: lm,
  BorderRadiusMedium: im,
  BorderRadiusNone: sm,
  BorderRadiusSmall: om,
  BorderWidthCardBottom: tm,
  BorderWidthDefault: Jh,
  BorderWidthFormElement: Qh,
  BorderWidthFormElementError: em,
  BorderWidthPanel: nm,
  BorderWidthTableCell: am,
  BorderWidthTableHeader: rm,
  BreakpointDesktop: W0,
  BreakpointLargeDesktop: O0,
  BreakpointMobile: H0,
  BreakpointTablet: z0,
  ButtonBorderRadius: Ag,
  ButtonBorderWidth: Eg,
  ButtonPrimaryBackgroundActive: kg,
  ButtonPrimaryBackgroundDefault: wg,
  ButtonPrimaryBackgroundDisabled: Cg,
  ButtonPrimaryBackgroundHover: Sg,
  ButtonPrimaryBorderDefault: Tg,
  ButtonPrimaryBorderFocus: Dg,
  ButtonPrimaryTextDefault: jg,
  ButtonPrimaryTextDisabled: Ng,
  ButtonSecondaryBackgroundActive: Lg,
  ButtonSecondaryBackgroundDefault: $g,
  ButtonSecondaryBackgroundHover: Mg,
  ButtonSecondaryBackgroundSolid: Ig,
  ButtonSecondaryBorderDefault: Pg,
  ButtonSecondaryTextDefault: Fg,
  ButtonShadowSize: Rg,
  ButtonSpacingPaddingHorizontalDesktop: $l,
  ButtonSpacingPaddingHorizontalMobile: Tl,
  ButtonSpacingPaddingVerticalDesktop: Dl,
  ButtonSpacingPaddingVerticalMobile: Nl,
  ButtonTypographyWeight: Bg,
  CardBackgroundDefault: Hg,
  CardBorderBottom: Og,
  CardBorderDefault: zg,
  CardBorderHover: Wg,
  CardBorderWidthBottom: qg,
  CardBorderWidthDefault: Yg,
  CardShadowDefault: Xg,
  CardShadowHover: Kg,
  CardSpacingHeadingMargin: Ll,
  CardSpacingPaddingDesktop: Ml,
  CardSpacingPaddingMobile: Il,
  CardTextDescription: Gg,
  CardTextHeading: Ug,
  CardTextLink: Vg,
  ColorBorderDefault: ym,
  ColorBorderSecondary: vm,
  ColorButtonLoginActive: Ym,
  ColorButtonLoginBackground: Gm,
  ColorButtonLoginHover: Vm,
  ColorButtonLoginShadow: qm,
  ColorButtonPrimaryActive: Nm,
  ColorButtonPrimaryBackground: km,
  ColorButtonPrimaryHover: jm,
  ColorButtonPrimaryShadow: Tm,
  ColorButtonPrimaryText: Cm,
  ColorButtonReverseActive: Bm,
  ColorButtonReverseBackground: Em,
  ColorButtonReverseHover: Rm,
  ColorButtonReverseShadow: Hm,
  ColorButtonReverseText: Am,
  ColorButtonSecondaryActive: Fm,
  ColorButtonSecondaryBackground: Dm,
  ColorButtonSecondaryBackgroundSolid: $m,
  ColorButtonSecondaryBorder: Im,
  ColorButtonSecondaryHover: Lm,
  ColorButtonSecondaryShadow: Pm,
  ColorButtonSecondaryText: Mm,
  ColorButtonWarningActive: Om,
  ColorButtonWarningBackground: zm,
  ColorButtonWarningHover: Wm,
  ColorButtonWarningShadow: Um,
  ColorError: _m,
  ColorFocusBackground: xm,
  ColorFocusText: bm,
  ColorFormBackground: Sm,
  ColorFormBorder: wm,
  ColorGrey1: wl,
  ColorGrey2: Sl,
  ColorGrey3: kl,
  ColorGrey4: Cl,
  ColorGrey5: jl,
  ColorLinkActive: mm,
  ColorLinkDefault: pm,
  ColorLinkHover: hm,
  ColorLinkVisited: gm,
  ColorPrimaryBlack: ul,
  ColorPrimaryBlue: cl,
  ColorPrimaryDarkPink: hl,
  ColorPrimaryGreen: fl,
  ColorPrimaryPurple: pl,
  ColorPrimaryRed: ml,
  ColorPrimaryWhite: dl,
  ColorPrimaryYellow: gl,
  ColorSecondaryAquaGreen: vl,
  ColorSecondaryOrange: yl,
  ColorSecondaryPaleYellow: xl,
  ColorSecondaryPink: _l,
  ColorSecondaryWarmYellow: bl,
  ColorTextPrimary: cm,
  ColorTextPrint: fm,
  ColorTextReverse: um,
  ColorTextSecondary: dm,
  ComponentBlur: xg,
  ComponentBreadcrumbChevronMarginLeft: cg,
  ComponentBreadcrumbChevronMarginRight: dg,
  ComponentBreadcrumbPaddingTopDesktop: fg,
  ComponentBreadcrumbPaddingTopMobile: ug,
  ComponentButtonPaddingDesktopHorizontal: Jm,
  ComponentButtonPaddingDesktopVertical: Zm,
  ComponentButtonPaddingMobileHorizontal: Km,
  ComponentButtonPaddingMobileVertical: Xm,
  ComponentButtonShadowSize: Qm,
  ComponentCardHeadingMargin: og,
  ComponentCardPaddingDesktop: sg,
  ComponentCardPaddingMobile: ag,
  ComponentDetails: yg,
  ComponentExpander: vg,
  ComponentFormCheckboxLabelPadding: rg,
  ComponentFormCheckboxSize: ng,
  ComponentFormInputMinHeight: eg,
  ComponentFormInputPadding: tg,
  ComponentLink: bg,
  ComponentPagination: _g,
  ComponentPanelPaddingDesktop: lg,
  ComponentPanelPaddingMobile: ig,
  ComponentSpread: gg,
  ComponentSummaryListCellPaddingHorizontal: hg,
  ComponentSummaryListCellPaddingVertical: pg,
  ComponentSummaryListRowMargin: mg,
  ElevationHigh: wx,
  ElevationLow: vx,
  ElevationMedium: _x,
  ElevationNone: yx,
  FocusOutlineOffset: mx,
  FocusOutlineStyle: gx,
  FocusOutlineWidth: hx,
  FocusShadowButton: bx,
  FocusShadowInput: xx,
  FontFamilyBase: gr,
  FontFamilyFallback: xr,
  FontFamilyPrint: br,
  FontLineHeightBase: ds,
  FontSize14Mobile: wr,
  FontSize14Print: kr,
  FontSize14Tablet: Sr,
  FontSize16Mobile: Cr,
  FontSize16Print: Nr,
  FontSize16Tablet: jr,
  FontSize19Mobile: Tr,
  FontSize19Print: $r,
  FontSize19Tablet: Dr,
  FontSize22Mobile: Ir,
  FontSize22Print: Lr,
  FontSize22Tablet: Mr,
  FontSize26Mobile: Fr,
  FontSize26Print: Er,
  FontSize26Tablet: Pr,
  FontSize36Mobile: Ar,
  FontSize36Print: Br,
  FontSize36Tablet: Rr,
  FontSize48Mobile: Hr,
  FontSize48Print: Wr,
  FontSize48Tablet: zr,
  FontSizeBase: cs,
  FontWeightBold: vr,
  FontWeightLight: _r,
  FontWeightNormal: yr,
  FormBorderRadius: g0,
  FormBorderWidthDefault: h0,
  FormBorderWidthError: m0,
  FormErrorTextDefault: u0,
  FormErrorTypographyWeight: f0,
  FormHintTextDefault: p0,
  FormInputBackgroundDefault: Zg,
  FormInputBackgroundDisabled: Qg,
  FormInputBackgroundError: e0,
  FormInputBackgroundFocus: Jg,
  FormInputBorderDefault: t0,
  FormInputBorderDisabled: a0,
  FormInputBorderError: r0,
  FormInputBorderFocus: n0,
  FormInputTextDefault: s0,
  FormInputTextDisabled: i0,
  FormInputTextPlaceholder: o0,
  FormLabelTextDefault: l0,
  FormLabelTextRequired: c0,
  FormLabelTypographyWeight: d0,
  FormSpacingCheckboxLabelPadding: Al,
  FormSpacingCheckboxSize: El,
  FormSpacingInputMinHeight: Pl,
  FormSpacingInputPadding: Fl,
  GridGutter: G0,
  GridGutterHalf: V0,
  GridPageWidth: U0,
  HeadingsNhsukHeadingL: jt,
  HeadingsNhsukHeadingM: Nt,
  HeadingsNhsukHeadingS: Tt,
  HeadingsNhsukHeadingXl: Ct,
  HeadingsNhsukHeadingXs: Dt,
  LayoutColumnActions: B0,
  LayoutColumnFull: P0,
  LayoutColumnHalf: E0,
  LayoutColumnQuarter: R0,
  LayoutColumnThird: A0,
  LayoutContainerMaxWidth: F0,
  ParagraphsBody: $t,
  ParagraphsBodyLarge: It,
  ParagraphsBodySmall: Mt,
  ParagraphsLedeText: Lt,
  ParagraphsLedeTextSmall: Ft,
  ShadowButtonDefault: lx,
  ShadowButtonFocus: ux,
  ShadowButtonSecondary: cx,
  ShadowButtonWarning: dx,
  ShadowCardDefault: fx,
  ShadowCardHover: px,
  SizeButtonMinHeightDesktop: L0,
  SizeButtonMinHeightMobile: M0,
  SizeFormControlLarge: k0,
  SizeFormControlMedium: S0,
  SizeFormControlSmall: w0,
  SizeFormInputWidth2xl: $0,
  SizeFormInputWidth3xl: I0,
  SizeFormInputWidthLg: T0,
  SizeFormInputWidthMd: N0,
  SizeFormInputWidthSm: j0,
  SizeFormInputWidthXl: D0,
  SizeFormInputWidthXs: C0,
  SizeIconExtraLarge: v0,
  SizeIconLarge: y0,
  SizeIconMedium: b0,
  SizeIconNhsDefault: _0,
  SizeIconSmall: x0,
  Spacing0: Rl,
  Spacing1: Bl,
  Spacing2: Hl,
  Spacing3: zl,
  Spacing4: Wl,
  Spacing5: Ol,
  Spacing6: Ul,
  Spacing7: Gl,
  Spacing8: Vl,
  Spacing9: Yl,
  SpacingResponsive0Mobile: Oa,
  SpacingResponsive0Tablet: Ua,
  SpacingResponsive1Mobile: Ga,
  SpacingResponsive1Tablet: Va,
  SpacingResponsive2Mobile: Ya,
  SpacingResponsive2Tablet: qa,
  SpacingResponsive3Mobile: Xa,
  SpacingResponsive3Tablet: Ka,
  SpacingResponsive4Mobile: Za,
  SpacingResponsive4Tablet: Ja,
  SpacingResponsive5Mobile: Qa,
  SpacingResponsive5Tablet: es,
  SpacingResponsive6Mobile: ts,
  SpacingResponsive6Tablet: ns,
  SpacingResponsive7Mobile: rs,
  SpacingResponsive7Tablet: as,
  SpacingResponsive8Mobile: ss,
  SpacingResponsive8Tablet: os,
  SpacingResponsive9Mobile: is,
  SpacingResponsive9Tablet: ls,
  StateDisabledBackground: sx,
  StateDisabledBorder: ox,
  StateDisabledText: ix,
  StateErrorBackground: Y0,
  StateErrorBorder: q0,
  StateErrorText: X0,
  StateInfoBackground: nx,
  StateInfoBorder: rx,
  StateInfoText: ax,
  StateSuccessBackground: K0,
  StateSuccessBorder: Z0,
  StateSuccessText: J0,
  StateWarningBackground: Q0,
  StateWarningBorder: ex,
  StateWarningText: tx,
  TransitionButtonDefault: qh,
  TransitionButtonShadow: Xh,
  TransitionCardHover: Zh,
  TransitionInputFocus: Kh
}, Symbol.toStringTag, { value: "Module" })), bb = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), yb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
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
), vb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
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
), _b = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
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
), wb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
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
), Sb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
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
), kb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: $t.fontFamily,
      fontWeight: $t.fontWeight,
      fontSize: $t.fontSize.mobile,
      lineHeight: $t.lineHeight,
      marginTop: $t.marginTop,
      marginBottom: $t.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Cb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: It.fontFamily,
      fontWeight: It.fontWeight,
      fontSize: It.fontSize.mobile,
      lineHeight: It.lineHeight,
      marginTop: It.marginTop,
      marginBottom: It.marginBottom.mobile,
      ...r
    },
    children: e
  }
), jb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Mt.fontFamily,
      fontWeight: Mt.fontWeight,
      fontSize: Mt.fontSize.mobile,
      lineHeight: Mt.lineHeight,
      marginTop: Mt.marginTop,
      marginBottom: Mt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Nb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Lt.fontFamily,
      fontWeight: Lt.fontWeight,
      fontSize: Lt.fontSize.mobile,
      lineHeight: Lt.lineHeight,
      marginTop: Lt.marginTop,
      marginBottom: Lt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Tb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ft.fontFamily,
      fontWeight: Ft.fontWeight,
      fontSize: Ft.fontSize.mobile,
      lineHeight: Ft.lineHeight,
      marginTop: Ft.marginTop,
      marginBottom: Ft.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Db = () => Me(() => Sx, []), $b = () => Me(() => ({
  // Border colors
  BorderColorDefault: al,
  BorderColorForm: sl,
  BorderColorCard: ol,
  BorderColorCardHover: il,
  BorderColorError: ll,
  // Primary colors
  ColorPrimaryBlue: cl,
  ColorPrimaryWhite: dl,
  ColorPrimaryBlack: ul,
  ColorPrimaryGreen: fl,
  ColorPrimaryPurple: pl,
  ColorPrimaryDarkPink: hl,
  ColorPrimaryRed: ml,
  ColorPrimaryYellow: gl,
  // Secondary colors
  ColorSecondaryPaleYellow: xl,
  ColorSecondaryWarmYellow: bl,
  ColorSecondaryOrange: yl,
  ColorSecondaryAquaGreen: vl,
  ColorSecondaryPink: _l,
  // Grey scale
  ColorGrey1: wl,
  ColorGrey2: Sl,
  ColorGrey3: kl,
  ColorGrey4: Cl,
  ColorGrey5: jl
}), []), Ib = () => Me(() => ({
  Spacing0: Rl,
  Spacing1: Bl,
  Spacing2: Hl,
  Spacing3: zl,
  Spacing4: Wl,
  Spacing5: Ol,
  Spacing6: Ul,
  Spacing7: Gl,
  Spacing8: Vl,
  Spacing9: Yl
}), []), Mb = () => Me(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: wr,
    Size16: Cr,
    Size19: Tr,
    Size22: Ir,
    Size26: Fr,
    Size36: Ar,
    Size48: Hr
  },
  Tablet: {
    Size14: Sr,
    Size16: jr,
    Size19: Dr,
    Size22: Mr,
    Size26: Pr,
    Size36: Rr,
    Size48: zr
  },
  Print: {
    Size14: kr,
    Size16: Nr,
    Size19: $r,
    Size22: Lr,
    Size26: Er,
    Size36: Br,
    Size48: Wr
  },
  Family: {
    Base: gr,
    Fallback: xr,
    Print: br
  },
  Weight: {
    Normal: yr,
    Bold: vr,
    Light: _r
  },
  Base: {
    Size: cs,
    LineHeight: ds
  },
  // Backward compatibility - individual exports
  FontFamilyBase: gr,
  FontFamilyFallback: xr,
  FontFamilyPrint: br,
  FontWeightNormal: yr,
  FontWeightBold: vr,
  FontWeightLight: _r,
  FontSize14Mobile: wr,
  FontSize14Tablet: Sr,
  FontSize14Print: kr,
  FontSize16Mobile: Cr,
  FontSize16Tablet: jr,
  FontSize16Print: Nr,
  FontSize19Mobile: Tr,
  FontSize19Tablet: Dr,
  FontSize19Print: $r,
  FontSize22Mobile: Ir,
  FontSize22Tablet: Mr,
  FontSize22Print: Lr,
  FontSize26Mobile: Fr,
  FontSize26Tablet: Pr,
  FontSize26Print: Er,
  FontSize36Mobile: Ar,
  FontSize36Tablet: Rr,
  FontSize36Print: Br,
  FontSize48Mobile: Hr,
  FontSize48Tablet: zr,
  FontSize48Print: Wr,
  FontSizeBase: cs,
  FontLineHeightBase: ds
}), []), Lb = () => Me(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Oa,
    Size1: Ga,
    Size2: Ya,
    Size3: Xa,
    Size4: Za,
    Size5: Qa,
    Size6: ts,
    Size7: rs,
    Size8: ss,
    Size9: is
  },
  Tablet: {
    Size0: Ua,
    Size1: Va,
    Size2: qa,
    Size3: Ka,
    Size4: Ja,
    Size5: es,
    Size6: ns,
    Size7: as,
    Size8: os,
    Size9: ls
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Oa,
  SpacingResponsive0Tablet: Ua,
  SpacingResponsive1Mobile: Ga,
  SpacingResponsive1Tablet: Va,
  SpacingResponsive2Mobile: Ya,
  SpacingResponsive2Tablet: qa,
  SpacingResponsive3Mobile: Xa,
  SpacingResponsive3Tablet: Ka,
  SpacingResponsive4Mobile: Za,
  SpacingResponsive4Tablet: Ja,
  SpacingResponsive5Mobile: Qa,
  SpacingResponsive5Tablet: es,
  SpacingResponsive6Mobile: ts,
  SpacingResponsive6Tablet: ns,
  SpacingResponsive7Mobile: rs,
  SpacingResponsive7Tablet: as,
  SpacingResponsive8Mobile: ss,
  SpacingResponsive8Tablet: os,
  SpacingResponsive9Mobile: is,
  SpacingResponsive9Tablet: ls
}), []), Fb = () => Me(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Nl,
  ButtonSpacingPaddingHorizontalMobile: Tl,
  ButtonSpacingPaddingVerticalDesktop: Dl,
  ButtonSpacingPaddingHorizontalDesktop: $l,
  // Card spacing	
  CardSpacingPaddingMobile: Il,
  CardSpacingPaddingDesktop: Ml,
  CardSpacingHeadingMargin: Ll,
  // Form spacing
  FormSpacingInputPadding: Fl,
  FormSpacingInputMinHeight: Pl,
  FormSpacingCheckboxSize: El,
  FormSpacingCheckboxLabelPadding: Al
}), []), Pb = () => Me(() => ({
  xl: Ct,
  l: jt,
  m: Nt,
  s: Tt,
  xs: Dt
}), []), Eb = () => Me(() => ({
  body: $t,
  bodyLarge: It,
  bodySmall: Mt,
  ledeText: Lt,
  ledeTextSmall: Ft
}), []), Ab = () => Me(() => ({
  headings: {
    xl: Ct,
    l: jt,
    m: Nt,
    s: Tt,
    xs: Dt
  },
  paragraphs: {
    body: $t,
    bodyLarge: It,
    bodySmall: Mt,
    ledeText: Lt,
    ledeTextSmall: Ft
  },
  fonts: {
    family: {
      base: gr,
      fallback: xr,
      print: br
    },
    weight: {
      normal: yr,
      bold: vr,
      light: _r
    },
    sizes: {
      mobile: {
        size14: wr,
        size16: Cr,
        size19: Tr,
        size22: Ir,
        size26: Fr,
        size36: Ar,
        size48: Hr
      },
      tablet: {
        size14: Sr,
        size16: jr,
        size19: Dr,
        size22: Mr,
        size26: Pr,
        size36: Rr,
        size48: zr
      },
      print: {
        size14: kr,
        size16: Nr,
        size19: $r,
        size22: Lr,
        size26: Er,
        size36: Br,
        size48: Wr
      }
    }
  }
}), []);
function Rb(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: r = "two-column" } = e, [a, s] = Y.useState(t), o = Y.useCallback(() => s("three-column"), []), i = Y.useCallback(() => s((d) => d === "three-column" ? r : d), [r]), l = Y.useCallback(() => s((d) => d === "three-column" ? r : "three-column"), [r]);
  return {
    forceLayout: a,
    setLayout: s,
    drillIn: o,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const ql = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, ct = {
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
function Bb(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...ql, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${ct.normal.eot}?#iefix") format("eot"),
       url("${t}${ct.normal.woff2}") format("woff2"),
       url("${t}${ct.normal.woff}") format("woff"),
       url("${t}${ct.normal.ttf}") format("truetype");
  src: url("${t}${ct.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${ct.bold.eot}?#iefix") format("eot"),
       url("${t}${ct.bold.woff2}") format("woff2"),
       url("${t}${ct.bold.woff}") format("woff"),
       url("${t}${ct.bold.ttf}") format("truetype");
  src: url("${t}${ct.bold.eot}");
}`), a.join(`
`);
}
function Hb(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...ql, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${ct.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${ct.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${ct.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${ct.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((s) => {
    const o = document.createElement("link");
    o.rel = "preload", o.href = s.href, o.as = s.as, o.type = s.type, o.crossOrigin = "anonymous", document.head.appendChild(o);
  });
}
const zb = '"Frutiger W01", Arial, Helvetica, sans-serif', Wb = "Arial, Helvetica, sans-serif";
async function Ob() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  gc as Account,
  Tx as ActionLink,
  rb as AdaptiveDataGrid,
  zh as AnimationDurationFast,
  Wh as AnimationDurationNormal,
  Oh as AnimationDurationSlow,
  Yh as AnimationEasingBounce,
  Uh as AnimationEasingEaseIn,
  Vh as AnimationEasingEaseInOut,
  Gh as AnimationEasingEaseOut,
  yi as AppointmentCard,
  ub as AreaSeriesPrimitive,
  Tf as AriaDataGrid,
  Fa as AriaTabsDataGrid,
  rb as AriaTabsDataGridAdaptive,
  Lo as Axis,
  Na as BackLink,
  pb as BandScalesProvider,
  fb as BarSeriesPrimitive,
  ol as BorderColorCard,
  il as BorderColorCardHover,
  al as BorderColorDefault,
  ll as BorderColorError,
  sl as BorderColorForm,
  lm as BorderRadiusLarge,
  im as BorderRadiusMedium,
  sm as BorderRadiusNone,
  om as BorderRadiusSmall,
  tm as BorderWidthCardBottom,
  Jh as BorderWidthDefault,
  Qh as BorderWidthFormElement,
  em as BorderWidthFormElementError,
  nm as BorderWidthPanel,
  am as BorderWidthTableCell,
  rm as BorderWidthTableHeader,
  ff as Breadcrumb,
  W0 as BreakpointDesktop,
  O0 as BreakpointLargeDesktop,
  H0 as BreakpointMobile,
  z0 as BreakpointTablet,
  ot as Button,
  Ag as ButtonBorderRadius,
  Eg as ButtonBorderWidth,
  kg as ButtonPrimaryBackgroundActive,
  wg as ButtonPrimaryBackgroundDefault,
  Cg as ButtonPrimaryBackgroundDisabled,
  Sg as ButtonPrimaryBackgroundHover,
  Tg as ButtonPrimaryBorderDefault,
  Dg as ButtonPrimaryBorderFocus,
  jg as ButtonPrimaryTextDefault,
  Ng as ButtonPrimaryTextDisabled,
  Lg as ButtonSecondaryBackgroundActive,
  $g as ButtonSecondaryBackgroundDefault,
  Mg as ButtonSecondaryBackgroundHover,
  Ig as ButtonSecondaryBackgroundSolid,
  Pg as ButtonSecondaryBorderDefault,
  Fg as ButtonSecondaryTextDefault,
  Rg as ButtonShadowSize,
  $l as ButtonSpacingPaddingHorizontalDesktop,
  Tl as ButtonSpacingPaddingHorizontalMobile,
  Dl as ButtonSpacingPaddingVerticalDesktop,
  Nl as ButtonSpacingPaddingVerticalMobile,
  Bg as ButtonTypographyWeight,
  hi as Card,
  Hg as CardBackgroundDefault,
  Og as CardBorderBottom,
  zg as CardBorderDefault,
  Wg as CardBorderHover,
  qg as CardBorderWidthBottom,
  Yg as CardBorderWidthDefault,
  Gx as CardGroup,
  Vx as CardGroupItem,
  Xg as CardShadowDefault,
  Kg as CardShadowHover,
  Ll as CardSpacingHeadingMargin,
  Ml as CardSpacingPaddingDesktop,
  Il as CardSpacingPaddingMobile,
  Gg as CardTextDescription,
  Ug as CardTextHeading,
  Vg as CardTextLink,
  Yx as CareCard,
  Dx as CharacterCount,
  mb as ChartEnhancer,
  hb as ChartNoScript,
  kp as ChartRoot,
  _c as Checkbox,
  kc as Checkboxes,
  ym as ColorBorderDefault,
  vm as ColorBorderSecondary,
  Ym as ColorButtonLoginActive,
  Gm as ColorButtonLoginBackground,
  Vm as ColorButtonLoginHover,
  qm as ColorButtonLoginShadow,
  Nm as ColorButtonPrimaryActive,
  km as ColorButtonPrimaryBackground,
  jm as ColorButtonPrimaryHover,
  Tm as ColorButtonPrimaryShadow,
  Cm as ColorButtonPrimaryText,
  Bm as ColorButtonReverseActive,
  Em as ColorButtonReverseBackground,
  Rm as ColorButtonReverseHover,
  Hm as ColorButtonReverseShadow,
  Am as ColorButtonReverseText,
  Fm as ColorButtonSecondaryActive,
  Dm as ColorButtonSecondaryBackground,
  $m as ColorButtonSecondaryBackgroundSolid,
  Im as ColorButtonSecondaryBorder,
  Lm as ColorButtonSecondaryHover,
  Pm as ColorButtonSecondaryShadow,
  Mm as ColorButtonSecondaryText,
  Om as ColorButtonWarningActive,
  zm as ColorButtonWarningBackground,
  Wm as ColorButtonWarningHover,
  Um as ColorButtonWarningShadow,
  _m as ColorError,
  xm as ColorFocusBackground,
  bm as ColorFocusText,
  Sm as ColorFormBackground,
  wm as ColorFormBorder,
  wl as ColorGrey1,
  Sl as ColorGrey2,
  kl as ColorGrey3,
  Cl as ColorGrey4,
  jl as ColorGrey5,
  mm as ColorLinkActive,
  pm as ColorLinkDefault,
  hm as ColorLinkHover,
  gm as ColorLinkVisited,
  ul as ColorPrimaryBlack,
  cl as ColorPrimaryBlue,
  hl as ColorPrimaryDarkPink,
  fl as ColorPrimaryGreen,
  pl as ColorPrimaryPurple,
  ml as ColorPrimaryRed,
  dl as ColorPrimaryWhite,
  gl as ColorPrimaryYellow,
  vl as ColorSecondaryAquaGreen,
  yl as ColorSecondaryOrange,
  xl as ColorSecondaryPaleYellow,
  _l as ColorSecondaryPink,
  bl as ColorSecondaryWarmYellow,
  cm as ColorTextPrimary,
  fm as ColorTextPrint,
  um as ColorTextReverse,
  dm as ColorTextSecondary,
  $n as Column,
  xg as ComponentBlur,
  cg as ComponentBreadcrumbChevronMarginLeft,
  dg as ComponentBreadcrumbChevronMarginRight,
  fg as ComponentBreadcrumbPaddingTopDesktop,
  ug as ComponentBreadcrumbPaddingTopMobile,
  Jm as ComponentButtonPaddingDesktopHorizontal,
  Zm as ComponentButtonPaddingDesktopVertical,
  Km as ComponentButtonPaddingMobileHorizontal,
  Xm as ComponentButtonPaddingMobileVertical,
  Qm as ComponentButtonShadowSize,
  og as ComponentCardHeadingMargin,
  sg as ComponentCardPaddingDesktop,
  ag as ComponentCardPaddingMobile,
  yg as ComponentDetails,
  vg as ComponentExpander,
  rg as ComponentFormCheckboxLabelPadding,
  ng as ComponentFormCheckboxSize,
  eg as ComponentFormInputMinHeight,
  tg as ComponentFormInputPadding,
  bg as ComponentLink,
  _g as ComponentPagination,
  lg as ComponentPanelPaddingDesktop,
  ig as ComponentPanelPaddingMobile,
  gg as ComponentSpread,
  hg as ComponentSummaryListCellPaddingHorizontal,
  pg as ComponentSummaryListCellPaddingVertical,
  mg as ComponentSummaryListRowMargin,
  Wo as Container,
  Ux as ContentsList,
  ql as DEFAULT_FONT_CONFIG,
  eb as DashboardSummaryGrid,
  Rx as DateInput,
  yf as Details,
  vf as DoDontList,
  wx as ElevationHigh,
  vx as ElevationLow,
  _x as ElevationMedium,
  yx as ElevationNone,
  Bs as ErrorMessage,
  Ax as ErrorSummary,
  _f as Expander,
  ct as FRUTIGER_FONT_FILES,
  ps as Fieldset,
  mx as FocusOutlineOffset,
  gx as FocusOutlineStyle,
  hx as FocusOutlineWidth,
  bx as FocusShadowButton,
  xx as FocusShadowInput,
  gr as FontFamilyBase,
  xr as FontFamilyFallback,
  br as FontFamilyPrint,
  ds as FontLineHeightBase,
  wr as FontSize14Mobile,
  kr as FontSize14Print,
  Sr as FontSize14Tablet,
  Cr as FontSize16Mobile,
  Nr as FontSize16Print,
  jr as FontSize16Tablet,
  Tr as FontSize19Mobile,
  $r as FontSize19Print,
  Dr as FontSize19Tablet,
  Ir as FontSize22Mobile,
  Lr as FontSize22Print,
  Mr as FontSize22Tablet,
  Fr as FontSize26Mobile,
  Er as FontSize26Print,
  Pr as FontSize26Tablet,
  Ar as FontSize36Mobile,
  Br as FontSize36Print,
  Rr as FontSize36Tablet,
  Hr as FontSize48Mobile,
  Wr as FontSize48Print,
  zr as FontSize48Tablet,
  cs as FontSizeBase,
  vr as FontWeightBold,
  _r as FontWeightLight,
  yr as FontWeightNormal,
  qo as Footer,
  g0 as FormBorderRadius,
  h0 as FormBorderWidthDefault,
  m0 as FormBorderWidthError,
  u0 as FormErrorTextDefault,
  f0 as FormErrorTypographyWeight,
  p0 as FormHintTextDefault,
  Zg as FormInputBackgroundDefault,
  Qg as FormInputBackgroundDisabled,
  e0 as FormInputBackgroundError,
  Jg as FormInputBackgroundFocus,
  t0 as FormInputBorderDefault,
  a0 as FormInputBorderDisabled,
  r0 as FormInputBorderError,
  n0 as FormInputBorderFocus,
  s0 as FormInputTextDefault,
  i0 as FormInputTextDisabled,
  o0 as FormInputTextPlaceholder,
  l0 as FormLabelTextDefault,
  c0 as FormLabelTextRequired,
  d0 as FormLabelTypographyWeight,
  Al as FormSpacingCheckboxLabelPadding,
  El as FormSpacingCheckboxSize,
  Pl as FormSpacingInputMinHeight,
  Fl as FormSpacingInputPadding,
  Wx as GanttChart,
  Ta as Grid,
  G0 as GridGutter,
  V0 as GridGutterHalf,
  jp as GridLines,
  U0 as GridPageWidth,
  Yo as Header,
  zx as HeaderSSR,
  Rc as HeaderSearch,
  Yo as HeaderStatic,
  At as Heading,
  jt as HeadingsNhsukHeadingL,
  Nt as HeadingsNhsukHeadingM,
  Tt as HeadingsNhsukHeadingS,
  Ct as HeadingsNhsukHeadingXl,
  Dt as HeadingsNhsukHeadingXs,
  Bc as Hero,
  Ho as Hint,
  Jx as Images,
  us as Input,
  qx as InsetText,
  fs as Label,
  B0 as LayoutColumnActions,
  P0 as LayoutColumnFull,
  E0 as LayoutColumnHalf,
  R0 as LayoutColumnQuarter,
  A0 as LayoutColumnThird,
  F0 as LayoutContainerMaxWidth,
  db as Legend,
  Cp as LineScalesProvider,
  lh as LineSeriesPrimitive,
  Ic as List,
  Oo as MainWrapper,
  vi as MedicationCard,
  gb as MetricCard,
  kb as NHSBodyText,
  Cb as NHSBodyTextLarge,
  jb as NHSBodyTextSmall,
  yb as NHSHeading1,
  vb as NHSHeading2,
  _b as NHSHeading3,
  wb as NHSHeading4,
  Sb as NHSHeading5,
  Nb as NHSLedeText,
  Tb as NHSLedeTextSmall,
  Hx as NHSThemeProvider,
  Wb as NHS_FALLBACK_FONT_STACK,
  zb as NHS_FONT_STACK,
  gp as NavigationSplitView,
  sb as PageTemplate,
  Ox as Pagination,
  pf as Panel,
  $t as ParagraphsBody,
  It as ParagraphsBodyLarge,
  Mt as ParagraphsBodySmall,
  Lt as ParagraphsLedeText,
  Ft as ParagraphsLedeTextSmall,
  bi as PatientCard,
  bp as ProductRoadmap,
  $x as Radios,
  Ix as RadiosServer,
  rb as ResponsiveDataGrid,
  ab as ResponsiveDataGridDemo,
  Jt as Row,
  xb as SPC,
  Ah as SPCChart,
  Jn as Select,
  Nc as SelectOption,
  lx as ShadowButtonDefault,
  ux as ShadowButtonFocus,
  cx as ShadowButtonSecondary,
  dx as ShadowButtonWarning,
  fx as ShadowCardDefault,
  px as ShadowCardHover,
  L0 as SizeButtonMinHeightDesktop,
  M0 as SizeButtonMinHeightMobile,
  k0 as SizeFormControlLarge,
  S0 as SizeFormControlMedium,
  w0 as SizeFormControlSmall,
  $0 as SizeFormInputWidth2xl,
  I0 as SizeFormInputWidth3xl,
  T0 as SizeFormInputWidthLg,
  N0 as SizeFormInputWidthMd,
  j0 as SizeFormInputWidthSm,
  D0 as SizeFormInputWidthXl,
  C0 as SizeFormInputWidthXs,
  v0 as SizeIconExtraLarge,
  y0 as SizeIconLarge,
  b0 as SizeIconMedium,
  _0 as SizeIconNhsDefault,
  x0 as SizeIconSmall,
  pi as SkipLink,
  Qx as SlotMatrix,
  tb as SortStatusControl,
  Rl as Spacing0,
  Bl as Spacing1,
  Hl as Spacing2,
  zl as Spacing3,
  Wl as Spacing4,
  Ol as Spacing5,
  Ul as Spacing6,
  Gl as Spacing7,
  Vl as Spacing8,
  Yl as Spacing9,
  Oa as SpacingResponsive0Mobile,
  Ua as SpacingResponsive0Tablet,
  Ga as SpacingResponsive1Mobile,
  Va as SpacingResponsive1Tablet,
  Ya as SpacingResponsive2Mobile,
  qa as SpacingResponsive2Tablet,
  Xa as SpacingResponsive3Mobile,
  Ka as SpacingResponsive3Tablet,
  Za as SpacingResponsive4Mobile,
  Ja as SpacingResponsive4Tablet,
  Qa as SpacingResponsive5Mobile,
  es as SpacingResponsive5Tablet,
  ts as SpacingResponsive6Mobile,
  ns as SpacingResponsive6Tablet,
  rs as SpacingResponsive7Mobile,
  as as SpacingResponsive7Tablet,
  ss as SpacingResponsive8Mobile,
  os as SpacingResponsive8Tablet,
  is as SpacingResponsive9Mobile,
  ls as SpacingResponsive9Tablet,
  Mx as SpacingUtilities,
  sx as StateDisabledBackground,
  ox as StateDisabledBorder,
  ix as StateDisabledText,
  Y0 as StateErrorBackground,
  q0 as StateErrorBorder,
  X0 as StateErrorText,
  nx as StateInfoBackground,
  rx as StateInfoBorder,
  ax as StateInfoText,
  K0 as StateSuccessBackground,
  Z0 as StateSuccessBorder,
  J0 as StateSuccessText,
  Q0 as StateWarningBackground,
  ex as StateWarningBorder,
  tx as StateWarningText,
  Nf as SummaryCard,
  Xx as SummaryList,
  Ht as Table,
  Kx as Tabs,
  He as Tag,
  wf as TaskList,
  Cc as Textarea,
  cb as TooltipOverlay,
  ih as TooltipProvider,
  ob as TransactionalPageTemplate,
  qh as TransitionButtonDefault,
  Xh as TransitionButtonShadow,
  Zh as TransitionCardHover,
  Kh as TransitionInputFocus,
  lb as VisibilityProvider,
  _i as VitalsCard,
  Ex as WIDTH_FRACTIONS,
  Zx as WarningCallout,
  ji as WidthContainer,
  Fx as WidthUtilities,
  Ob as checkFrutigerLoaded,
  ks as createGenericTabsConfig,
  nb as createTCHTabsConfig,
  Bb as generateFrutigerFontFace,
  bb as getResponsiveStyles,
  Lx as getSpacingClass,
  Px as getWidthClass,
  Hb as preloadFrutigerFonts,
  Bf as tchDataConfig,
  $b as useColors,
  Fb as useComponentSpacing,
  Pb as useNHSHeadings,
  Eb as useNHSParagraphs,
  Bx as useNHSTheme,
  Ab as useNHSTypographySystem,
  Rb as useNavigationSplitDrill,
  pp as useNavigationSplitUrlSync,
  Ti as useNhsFdpBreakpoints,
  Lb as useResponsiveSpacing,
  ib as useResponsiveValue,
  Ib as useSpacing,
  Db as useTokens,
  Mb as useTypography
};
//# sourceMappingURL=index.esm.js.map
