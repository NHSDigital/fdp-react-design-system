import * as Y from "react";
import ft, { useState as Le, useEffect as ze, useCallback as ge, useRef as Ee, createElement as Oo, useMemo as Me, useContext as fc, createContext as hc, forwardRef as Sn, useImperativeHandle as Uo, useReducer as Go, memo as pc, useLayoutEffect as mc, useId as rr } from "react";
import { createPortal as gc } from "react-dom";
function xc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xn = { exports: {} }, jn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zs;
function bc() {
  if (zs) return jn;
  zs = 1;
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
  return jn.Fragment = t, jn.jsx = r, jn.jsxs = r, jn;
}
var Nn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ws;
function yc() {
  return Ws || (Ws = 1, process.env.NODE_ENV !== "production" && (function() {
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
        case h:
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
      if (p.call(R, "key")) {
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
      if (p.call(W, "key")) {
        ue = e(R);
        var Z = Object.keys(W).filter(function(de) {
          return de !== "key";
        });
        ae = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", U[ue + ae] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ae,
          ue,
          Z,
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
    var m = ft, y = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), I = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), C = Symbol.for("react.client.reference"), k = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
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
    Nn.Fragment = v, Nn.jsx = function(R, W, B, ae, z) {
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
    }, Nn.jsxs = function(R, W, B, ae, z) {
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
  })()), Nn;
}
var Os;
function vc() {
  return Os || (Os = 1, process.env.NODE_ENV === "production" ? Xn.exports = bc() : Xn.exports = yc()), Xn.exports;
}
var n = vc(), ha = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Us;
function _c() {
  return Us || (Us = 1, (function(e) {
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
  })(ha)), ha.exports;
}
var wc = _c();
const be = /* @__PURE__ */ xc(wc), Ax = ({
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
}, Sc = ({
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
var Vo = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e))(Vo || {}), Yo = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(Yo || {});
function kc(e) {
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
const { forwardRef: Cc, useCallback: Gt, useState: pa } = Y;
function jc(e, t) {
  const {
    children: r,
    variant: a = Vo.Primary,
    size: s = Yo.Default,
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, u] = pa(!1), [f, m] = pa(!1), [y, w] = pa(!1), v = kc({
    variant: a,
    size: s,
    fullWidth: o,
    className: i,
    preventDoubleClick: l,
    href: "href" in d ? d.href : void 0
  }), h = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", g = {
    ...c && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...y && { "data-focused": "true" },
    ...h && { "data-disabled": "true" }
  }, F = Gt(
    () => !h && u(!0),
    [h]
  ), I = Gt(() => u(!1), []), j = Gt(
    () => !h && m(!0),
    [h]
  ), P = Gt(() => {
    m(!1), u(!1);
  }, []), D = Gt(() => w(!0), []), A = Gt(() => w(!1), []), T = Gt(
    (ue) => {
      ue.key === " " && ("href" in d || ue.currentTarget.getAttribute("role") === "button") && (ue.preventDefault(), ue.currentTarget.click());
    },
    [d]
  ), _ = Gt(
    (ue) => {
      if (l) {
        const Z = ue.currentTarget;
        if (Z.getAttribute("data-processing") === "true") {
          ue.preventDefault();
          return;
        }
        Z.setAttribute("data-processing", "true"), setTimeout(() => {
          Z.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in d && d.href) {
    const {
      id: ue,
      style: Z,
      title: ee,
      ["aria-label"]: de,
      ["aria-describedby"]: x,
      ["aria-labelledby"]: E,
      tabIndex: H,
      ...J
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
        ...J,
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
        style: Z,
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
    title: p,
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
      title: p,
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
const it = Cc(jc);
it.displayName = "Button";
const La = ({
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
function Nc(e) {
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
  const u = Nc({ color: a, noBorder: s, closable: o, disabled: l, className: d }), f = (m) => {
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
}, Tc = ({
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
  const [v, h] = Le(a), g = r !== void 0, F = g ? r : v;
  ze(() => {
    g || h(a);
  }, [a, g]);
  const I = (T) => {
    const _ = T.target.checked;
    g || h(_), u?.(_, T);
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
Tc.displayName = "Checkbox";
function Dc(e) {
  const r = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    r ? "nhsuk-input--range" : "",
    !r && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: r };
}
const xs = ({
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
  minLength: h,
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
  ...p
}) => {
  const [M, N] = Le(a || s || (r === "range" ? I || "0" : ""));
  ze(() => {
    a !== void 0 && N(a);
  }, [a]);
  const b = (z) => {
    const fe = z.target;
    N(fe.value), ("type" in z && z.nativeEvent || z.type === "keydown") && T?.(z);
  }, { classes: S, isRange: $ } = Dc({ type: r, hasError: c, width: m, className: f }), te = a !== void 0, U = {
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
    minLength: h,
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
    ...p
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
      minLength: h,
      pattern: g,
      step: F,
      min: I,
      max: j,
      onChange: T,
      onBlur: _,
      onFocus: C,
      onKeyDown: k,
      ...p
    }
  );
};
function $c(e) {
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
const bs = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: s,
  ...o
}) => {
  const i = $c({ size: a, isPageHeading: r, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ n.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...o, children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: s }) : s });
}, ys = ({
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
}, Ic = ({
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
  ), h = r || t, g = i ? `${h}-hint` : void 0, F = l ? `${h}-error` : void 0, I = [g, F].filter(Boolean).join(" ") || void 0, j = (T, _) => {
    let C;
    _ ? C = [...w, T] : C = w.filter((k) => k !== T), v(C), u?.(C);
  }, P = () => e.map((T, _) => {
    const C = `${h}-${_ + 1}`, k = `${C}-conditional`, p = w.includes(T.value), M = T.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: C,
          name: t,
          type: "checkbox",
          value: T.value,
          checked: p,
          disabled: M,
          onChange: (N) => j(T.value, N.target.checked),
          "aria-describedby": T.hint ? `${C}-hint` : I,
          ...T.conditional && {
            "aria-controls": k,
            "aria-expanded": p ? "true" : "false"
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
            "nhsuk-checkboxes__conditional--hidden": !p
          }),
          id: k,
          children: typeof T.conditional == "object" && T.conditional !== null && "label" in T.conditional && "id" in T.conditional && "name" in T.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            T.conditional.label && /* @__PURE__ */ n.jsx(bs, { htmlFor: T.conditional.id, children: T.conditional.label }),
            /* @__PURE__ */ n.jsx(xs, { ...T.conditional })
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
    ys,
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
Ic.displayName = "Checkboxes";
const Mc = ({
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
  resize: h = "vertical",
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
      [`nhsuk-textarea--resize-${h}`]: h !== "vertical"
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
function Lc(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const qo = ({ id: e, className: t, children: r, ...a }) => {
  const s = Lc({ id: e, className: t });
  return /* @__PURE__ */ n.jsx("div", { className: s.classes, id: s.id, ...a, children: r });
}, Rx = ({
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
  const y = o ?? i ?? "", [w, v] = Le(y), [h, g] = Le(0), [F, I] = Le(!1), [j, P] = Le(!1), D = ge((p) => r ? p.trim() === "" ? 0 : p.trim().split(/\s+/).length : p.length, [r]);
  ze(() => {
    const p = D(w), M = t || r || 0, N = M - p, b = Math.floor(M * (a / 100));
    g(N), I(p > M), P(p >= b || p > M), u && u(p, N);
  }, [w, t, r, a, D, u]);
  const A = (p) => {
    const M = p.target.value;
    v(M), f && f(p);
  }, T = () => {
    const p = t || r || 0, M = r ? "word" : "character", N = r ? "words" : "characters";
    if (!j)
      return `You can enter up to ${p} ${p === 1 ? M : N}`;
    if (F) {
      const b = Math.abs(h);
      return `You have ${b} ${b === 1 ? M : N} too many`;
    } else
      return `You have ${h} ${h === 1 ? M : N} remaining`;
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
          Mc,
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
          qo,
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
}, Fc = ({
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
}, Pc = ({
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
  onBlur: h,
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
      onBlur: h,
      onFocus: g,
      ...F,
      children: w || j()
    }
  );
}, ar = Pc;
ar.Option = Fc;
function Xo(e, {
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
    className: h,
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
    h
  );
  return /* @__PURE__ */ n.jsx(ys, { children: /* @__PURE__ */ n.jsx(
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
                D.conditional.label && /* @__PURE__ */ n.jsx(bs, { htmlFor: D.conditional.id, children: D.conditional.label }),
                /* @__PURE__ */ n.jsx(xs, { ...D.conditional })
              ] }) : D.conditional
            }
          )
        ] }, D.value);
      })
    }
  ) });
}
const Bx = ({ value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: s, ...o }) => {
  const [i, l] = Le(e || t || ""), d = Ee([]), c = Ee(i), u = (y) => {
    const w = y.target.value;
    w !== c.current && (c.current = w, l(w), r?.(y));
  }, f = (y) => {
    s?.(y);
  }, m = ge((y) => {
    const { key: w } = y;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(w)) return;
    y.preventDefault();
    const v = d.current.filter((I) => I && !I.disabled), h = v.indexOf(y.currentTarget);
    if (h === -1) return;
    let g = h;
    ["ArrowDown", "ArrowRight"].includes(w) ? g = (h + 1) % v.length : ["ArrowUp", "ArrowLeft"].includes(w) && (g = (h - 1 + v.length) % v.length);
    const F = v[g];
    F && (F.focus(), F.checked || F.click());
  }, []);
  return Xo(
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
}, Hx = ({ value: e, defaultValue: t, ...r }) => {
  const a = e || t || "";
  return Xo(
    { value: e, defaultValue: t, ...r },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0
    }
  );
};
var tn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(tn || {}), Ec = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(Ec || {}), Ac = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(Ac || {}), er = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(er || {});
const Ko = ({
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
}, nn = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const s = be("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: s, style: r, ...a, children: e });
}, Fn = ({
  children: e,
  width: t = tn.Full,
  mobileWidth: r,
  tabletWidth: a,
  desktopWidth: s,
  start: o,
  className: i,
  forceWidth: l = !1,
  style: d,
  align: c,
  ...u
}) => {
  const f = be(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${t}`]: !l,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${t}`]: l,
      // Responsive width overrides
      [`nhsuk-u-${r}-mobile`]: !!r,
      [`nhsuk-u-${a}-tablet`]: !!a,
      [`nhsuk-u-${s}-desktop`]: !!s,
      // Grid positioning
      [`nhsuk-grid-column-start-${o}`]: o && o >= 1 && o <= 7,
      // Alignment
      "nhsuk-grid-align-left": c === er.Left,
      "nhsuk-grid-align-center": c === er.Center,
      "nhsuk-grid-align-right": c === er.Right
    },
    i
  );
  return /* @__PURE__ */ n.jsx("div", { className: f, style: d, ...u, children: e });
}, Fa = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const o = ft.Children.toArray(e)[0], i = ft.isValidElement(o) && (o.type === nn || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(Ko, { className: t, style: r, ...a, children: i ? e : /* @__PURE__ */ n.jsx(nn, { children: e }) });
}, Rc = ({
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
}, Bc = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = be("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, Hc = Rc;
Hc.Item = Bc;
const zx = ({
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
}, Wx = {
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
}, Ox = ({
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
}, Ux = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Gx = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Jo = ({
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
function zc(e) {
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
function Wc(e) {
  const t = e.level ?? zc(e.size), r = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: r, style: a };
}
const Bt = ({ level: e, className: t, text: r, html: a, children: s, size: o, marginBottom: i, ...l }) => {
  const d = Wc({ level: e, size: o, className: t, marginBottom: i }), c = s || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r);
  return Oo(d.tag, { className: d.classes, style: d.style, ...l }, c);
};
function Oc(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const Gs = ({ id: e, className: t, visuallyHiddenText: r = "Error:", children: a, ...s }) => {
  const o = Oc({ id: e, className: t, visuallyHiddenText: r });
  return /* @__PURE__ */ n.jsxs("span", { className: o.classes, id: o.id, ...s, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      o.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, Vx = ({
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
}, Yx = ({
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
  }, h = (b, S, $) => {
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
      $ = h(S, u.month, u.year);
    else if (b === "month") {
      if ($ = g(S), !$ && u.day) {
        const te = h(u.day, S, u.year);
        y((U) => ({
          ...U,
          day: te
        }));
      }
    } else if (b === "year" && ($ = F(S), !$ && u.day && u.month)) {
      const te = h(u.day, u.month, S);
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
  }, [u, h, g, F, I]), D = Me(() => [
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
  const k = Object.values(m).some((b) => b), p = be(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || k
    }
  ), M = be(
    "nhsuk-date-input",
    t
  ), N = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      qo,
      {
        id: _,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      Gs,
      {
        id: C,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(m).map(
      ([b, S]) => S ? /* @__PURE__ */ n.jsxs(
        Gs,
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
          bs,
          {
            htmlFor: S,
            className: "nhsuk-date-input__label",
            children: te
          }
        ),
        /* @__PURE__ */ n.jsx(
          xs,
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
  return /* @__PURE__ */ n.jsx("div", { className: p, children: o ? /* @__PURE__ */ n.jsx(
    ys,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: T || void 0,
      children: N()
    }
  ) : N() });
}, Zo = {
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
}, Qo = hc(Zo), Uc = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...Zo, ...t };
  return /* @__PURE__ */ n.jsx(Qo.Provider, { value: r, children: e });
}, qx = () => {
  const e = fc(Qo);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Gc() {
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
function Vc() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Gc(), document.head.appendChild(e);
}
const Xx = ({ children: e, theme: t }) => (ze(() => {
  Vc();
}, []), /* @__PURE__ */ n.jsx(Uc, { theme: t, children: e })), Yc = ({
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
  buttonAttributes: h = {},
  preventDefaultSubmit: g = !1,
  debounceMs: F = 300,
  minQueryLength: I = 1
}) => {
  const [j, P] = Le(""), [D, A] = Le(!1), T = Ee(void 0), _ = Ee(null), C = Ee(null), k = e === "controlled" && s !== void 0, p = k ? s : j, M = ge((ae) => {
    T.current && clearTimeout(T.current), T.current = setTimeout(() => {
      u.onChange && ae.length >= I && u.onChange(ae);
    }, F);
  }, [u.onChange, F, I]), N = ge((ae) => {
    const z = ae.target.value;
    k || P(z), e !== "form" && M(z);
  }, [k, e, M]), b = ge((ae) => {
    const z = p.trim(), fe = {
      query: z,
      timestamp: Date.now(),
      formData: new FormData(ae.currentTarget)
    };
    e === "controlled" || e === "hybrid" && g ? (ae.preventDefault(), u.onSearch && z.length >= I && u.onSearch(fe)) : e === "hybrid" && u.onSearch && z.length >= I && u.onSearch(fe);
  }, [e, p, u.onSearch, g, I]), S = ge(() => {
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
  ), W = () => !p || e === "form" ? null : /* @__PURE__ */ n.jsx(
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
                value: p,
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
              disabled: c || f || e !== "form" && p.length < I,
              ...h,
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
function ei(e, {
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
    navigation: h,
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
      "nhsuk-header__navigation--white": h?.white,
      "nhsuk-header__navigation--justified": h?.justified
    },
    h?.className
  ), p = () => /* @__PURE__ */ n.jsxs(
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
  ) : p(), N = () => y ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
  ), te = t === "server" && h?.items && !P, U = te ? [] : h?.items, R = te ? h.items : [];
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
          w && /* @__PURE__ */ n.jsx(Yc, { ...w }),
          /* @__PURE__ */ n.jsx(
            Sc,
            {
              ...v,
              variant: F === "white" ? "white" : "default"
            }
          )
        ] }),
        h && h.items && h.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: k,
            "aria-label": h.ariaLabel || "Menu",
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
                      (t === "server" ? U || [] : h?.items || []).map((W, B) => /* @__PURE__ */ n.jsx(
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
        t === "client" && r && h && h.items && h.items.length > 0 && a && i && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: h.items.slice(o ?? 0).map((W, B) => /* @__PURE__ */ n.jsx(
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
const ti = ({
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
  const [f, m] = Le(!1), [y, w] = Le(!1), [v, h] = Le(i?.items?.length || 0), [g, F] = Le(!1), [I, j] = Le(!1), P = Ee(null), D = Ee(null), A = Ee(!1);
  ze(() => {
    typeof window > "u" || j(!0);
  }, []), ze(() => {
    if (typeof document > "u") return;
    const k = (p) => {
      p.key === "Escape" && f && m(!1);
    };
    if (f)
      return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [f]);
  const T = Ee(null), _ = ge(() => {
    if (!I || !i?.items || i.items.length === 0 || A.current) return;
    const k = P.current, p = D.current;
    if (!k || !p) return;
    A.current = !0, k.classList.add("nhsuk-header__navigation-container--measuring");
    const M = k.clientWidth, N = Array.from(p.children);
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
    w((z) => z === B ? z : B), h((z) => z === ae ? z : ae), k.classList.remove("nhsuk-header__navigation-container--measuring"), A.current = !1;
  }, [I, i?.items]);
  ze(() => {
    if (!I) return;
    const k = P.current;
    if (!k) return;
    let p = null;
    const M = () => {
      p == null && (p = window.requestAnimationFrame(() => {
        p = null, _();
      }));
    };
    _();
    const N = new ResizeObserver(() => M());
    return N.observe(k), D.current && N.observe(D.current), () => {
      p != null && window.cancelAnimationFrame(p), N.disconnect();
    };
  }, [I, _]), ze(() => {
    I && _();
  }, [i?.items?.length, I, _]);
  const C = (k) => {
    k && (k.preventDefault(), k.stopPropagation());
    const p = !f;
    m(p), F(p);
  };
  return ei(
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
}, Kx = (e) => ei(e, {
  variant: "server",
  isClient: !1
}), qc = ({
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
qc.displayName = "Hero";
const ni = ({
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
function tr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Xc(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function vs(e) {
  let t, r, a;
  e.length !== 2 ? (t = tr, r = (l, d) => tr(e(l), d), a = (l, d) => e(l) - d) : (t = e === tr || e === Xc ? e : Kc, r = e, a = e);
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
function Kc() {
  return 0;
}
function Jc(e) {
  return e === null ? NaN : +e;
}
const Zc = vs(tr), Qc = Zc.right;
vs(Jc).center;
function ri(e, t) {
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
class Vs extends Map {
  constructor(t, r = nd) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [a, s] of t) this.set(a, s);
  }
  get(t) {
    return super.get(Ys(this, t));
  }
  has(t) {
    return super.has(Ys(this, t));
  }
  set(t, r) {
    return super.set(ed(this, t), r);
  }
  delete(t) {
    return super.delete(td(this, t));
  }
}
function Ys({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : r;
}
function ed({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : (e.set(a, r), r);
}
function td({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) && (r = e.get(a), e.delete(a)), r;
}
function nd(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const rd = Math.sqrt(50), ad = Math.sqrt(10), sd = Math.sqrt(2);
function sr(e, t, r) {
  const a = (t - e) / Math.max(0, r), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= rd ? 10 : o >= ad ? 5 : o >= sd ? 2 : 1;
  let l, d, c;
  return s < 0 ? (c = Math.pow(10, -s) / i, l = Math.round(e * c), d = Math.round(t * c), l / c < e && ++l, d / c > t && --d, c = -c) : (c = Math.pow(10, s) * i, l = Math.round(e / c), d = Math.round(t / c), l * c < e && ++l, d * c > t && --d), d < l && 0.5 <= r && r < 2 ? sr(e, t, r * 2) : [l, d, c];
}
function od(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [s, o, i] = a ? sr(t, e, r) : sr(e, t, r);
  if (!(o >= s)) return [];
  const l = o - s + 1, d = new Array(l);
  if (a)
    if (i < 0) for (let c = 0; c < l; ++c) d[c] = (o - c) / -i;
    else for (let c = 0; c < l; ++c) d[c] = (o - c) * i;
  else if (i < 0) for (let c = 0; c < l; ++c) d[c] = (s + c) / -i;
  else for (let c = 0; c < l; ++c) d[c] = (s + c) * i;
  return d;
}
function Pa(e, t, r) {
  return t = +t, e = +e, r = +r, sr(e, t, r)[2];
}
function Ea(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, s = a ? Pa(t, e, r) : Pa(e, t, r);
  return (a ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function id(e, t, r) {
  e = +e, t = +t, r = (s = arguments.length) < 2 ? (t = e, e = 0, 1) : s < 3 ? 1 : +r;
  for (var a = -1, s = Math.max(0, Math.ceil((t - e) / r)) | 0, o = new Array(s); ++a < s; )
    o[a] = e + a * r;
  return o;
}
function Xr(e, t) {
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
const qs = Symbol("implicit");
function ai() {
  var e = new Vs(), t = [], r = [], a = qs;
  function s(o) {
    let i = e.get(o);
    if (i === void 0) {
      if (a !== qs) return a;
      e.set(o, i = t.push(o) - 1);
    }
    return r[i % r.length];
  }
  return s.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [], e = new Vs();
    for (const i of o)
      e.has(i) || e.set(i, t.push(i) - 1);
    return s;
  }, s.range = function(o) {
    return arguments.length ? (r = Array.from(o), s) : r.slice();
  }, s.unknown = function(o) {
    return arguments.length ? (a = o, s) : a;
  }, s.copy = function() {
    return ai(t, r).unknown(a);
  }, Xr.apply(s, arguments), s;
}
function si() {
  var e = ai().unknown(void 0), t = e.domain, r = e.range, a = 0, s = 1, o, i, l = !1, d = 0, c = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var m = t().length, y = s < a, w = y ? s : a, v = y ? a : s;
    o = (v - w) / Math.max(1, m - d + c * 2), l && (o = Math.floor(o)), w += (v - w - o * (m - d)) * u, i = o * (1 - d), l && (w = Math.round(w), i = Math.round(i));
    var h = id(m).map(function(g) {
      return w + o * g;
    });
    return r(y ? h.reverse() : h);
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
    return si(t(), [a, s]).round(l).paddingInner(d).paddingOuter(c).align(u);
  }, Xr.apply(f(), arguments);
}
function _s(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function oi(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function On() {
}
var Pn = 0.7, or = 1 / Pn, gn = "\\s*([+-]?\\d+)\\s*", En = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ld = /^#([0-9a-f]{3,8})$/, cd = new RegExp(`^rgb\\(${gn},${gn},${gn}\\)$`), dd = new RegExp(`^rgb\\(${wt},${wt},${wt}\\)$`), ud = new RegExp(`^rgba\\(${gn},${gn},${gn},${En}\\)$`), fd = new RegExp(`^rgba\\(${wt},${wt},${wt},${En}\\)$`), hd = new RegExp(`^hsl\\(${En},${wt},${wt}\\)$`), pd = new RegExp(`^hsla\\(${En},${wt},${wt},${En}\\)$`), Xs = {
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
_s(On, An, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ks,
  // Deprecated! Use color.formatHex.
  formatHex: Ks,
  formatHex8: md,
  formatHsl: gd,
  formatRgb: Js,
  toString: Js
});
function Ks() {
  return this.rgb().formatHex();
}
function md() {
  return this.rgb().formatHex8();
}
function gd() {
  return ii(this).formatHsl();
}
function Js() {
  return this.rgb().formatRgb();
}
function An(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = ld.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Zs(t) : r === 3 ? new ut(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Kn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Kn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = cd.exec(e)) ? new ut(t[1], t[2], t[3], 1) : (t = dd.exec(e)) ? new ut(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ud.exec(e)) ? Kn(t[1], t[2], t[3], t[4]) : (t = fd.exec(e)) ? Kn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = hd.exec(e)) ? to(t[1], t[2] / 100, t[3] / 100, 1) : (t = pd.exec(e)) ? to(t[1], t[2] / 100, t[3] / 100, t[4]) : Xs.hasOwnProperty(e) ? Zs(Xs[e]) : e === "transparent" ? new ut(NaN, NaN, NaN, 0) : null;
}
function Zs(e) {
  return new ut(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Kn(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new ut(e, t, r, a);
}
function xd(e) {
  return e instanceof On || (e = An(e)), e ? (e = e.rgb(), new ut(e.r, e.g, e.b, e.opacity)) : new ut();
}
function Aa(e, t, r, a) {
  return arguments.length === 1 ? xd(e) : new ut(e, t, r, a ?? 1);
}
function ut(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
_s(ut, Aa, oi(On, {
  brighter(e) {
    return e = e == null ? or : Math.pow(or, e), new ut(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Pn : Math.pow(Pn, e), new ut(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ut(Qt(this.r), Qt(this.g), Qt(this.b), ir(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Qs,
  // Deprecated! Use color.formatHex.
  formatHex: Qs,
  formatHex8: bd,
  formatRgb: eo,
  toString: eo
}));
function Qs() {
  return `#${Zt(this.r)}${Zt(this.g)}${Zt(this.b)}`;
}
function bd() {
  return `#${Zt(this.r)}${Zt(this.g)}${Zt(this.b)}${Zt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function eo() {
  const e = ir(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Qt(this.r)}, ${Qt(this.g)}, ${Qt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ir(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Qt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Zt(e) {
  return e = Qt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function to(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new gt(e, t, r, a);
}
function ii(e) {
  if (e instanceof gt) return new gt(e.h, e.s, e.l, e.opacity);
  if (e instanceof On || (e = An(e)), !e) return new gt();
  if (e instanceof gt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, s = Math.min(t, r, a), o = Math.max(t, r, a), i = NaN, l = o - s, d = (o + s) / 2;
  return l ? (t === o ? i = (r - a) / l + (r < a) * 6 : r === o ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= d < 0.5 ? o + s : 2 - o - s, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new gt(i, l, d, e.opacity);
}
function yd(e, t, r, a) {
  return arguments.length === 1 ? ii(e) : new gt(e, t, r, a ?? 1);
}
function gt(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
_s(gt, yd, oi(On, {
  brighter(e) {
    return e = e == null ? or : Math.pow(or, e), new gt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Pn : Math.pow(Pn, e), new gt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - a;
    return new ut(
      ma(e >= 240 ? e - 240 : e + 120, s, a),
      ma(e, s, a),
      ma(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new gt(no(this.h), Jn(this.s), Jn(this.l), ir(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ir(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${no(this.h)}, ${Jn(this.s) * 100}%, ${Jn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function no(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Jn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ma(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const ws = (e) => () => e;
function vd(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function _d(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function wd(e) {
  return (e = +e) == 1 ? li : function(t, r) {
    return r - t ? _d(t, r, e) : ws(isNaN(t) ? r : t);
  };
}
function li(e, t) {
  var r = t - e;
  return r ? vd(e, r) : ws(isNaN(e) ? t : e);
}
const ro = (function e(t) {
  var r = wd(t);
  function a(s, o) {
    var i = r((s = Aa(s)).r, (o = Aa(o)).r), l = r(s.g, o.g), d = r(s.b, o.b), c = li(s.opacity, o.opacity);
    return function(u) {
      return s.r = i(u), s.g = l(u), s.b = d(u), s.opacity = c(u), s + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Sd(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), s;
  return function(o) {
    for (s = 0; s < r; ++s) a[s] = e[s] * (1 - o) + t[s] * o;
    return a;
  };
}
function kd(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Cd(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, s = new Array(a), o = new Array(r), i;
  for (i = 0; i < a; ++i) s[i] = Ss(e[i], t[i]);
  for (; i < r; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) o[i] = s[i](l);
    return o;
  };
}
function jd(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function lr(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Nd(e, t) {
  var r = {}, a = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? r[s] = Ss(e[s], t[s]) : a[s] = t[s];
  return function(o) {
    for (s in r) a[s] = r[s](o);
    return a;
  };
}
var Ra = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ga = new RegExp(Ra.source, "g");
function Td(e) {
  return function() {
    return e;
  };
}
function Dd(e) {
  return function(t) {
    return e(t) + "";
  };
}
function $d(e, t) {
  var r = Ra.lastIndex = ga.lastIndex = 0, a, s, o, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (a = Ra.exec(e)) && (s = ga.exec(t)); )
    (o = s.index) > r && (o = t.slice(r, o), l[i] ? l[i] += o : l[++i] = o), (a = a[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, d.push({ i, x: lr(a, s) })), r = ga.lastIndex;
  return r < t.length && (o = t.slice(r), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? d[0] ? Dd(d[0].x) : Td(t) : (t = d.length, function(c) {
    for (var u = 0, f; u < t; ++u) l[(f = d[u]).i] = f.x(c);
    return l.join("");
  });
}
function Ss(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? ws(t) : (r === "number" ? lr : r === "string" ? (a = An(t)) ? (t = a, ro) : $d : t instanceof An ? ro : t instanceof Date ? jd : kd(t) ? Sd : Array.isArray(t) ? Cd : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Nd : lr)(e, t);
}
function Id(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Md(e) {
  return function() {
    return e;
  };
}
function Ld(e) {
  return +e;
}
var ao = [0, 1];
function pn(e) {
  return e;
}
function Ba(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Md(isNaN(t) ? NaN : 0.5);
}
function Fd(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Pd(e, t, r) {
  var a = e[0], s = e[1], o = t[0], i = t[1];
  return s < a ? (a = Ba(s, a), o = r(i, o)) : (a = Ba(a, s), o = r(o, i)), function(l) {
    return o(a(l));
  };
}
function Ed(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, s = new Array(a), o = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    s[i] = Ba(e[i], e[i + 1]), o[i] = r(t[i], t[i + 1]);
  return function(l) {
    var d = Qc(e, l, 1, a) - 1;
    return o[d](s[d](l));
  };
}
function ci(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ad() {
  var e = ao, t = ao, r = Ss, a, s, o, i = pn, l, d, c;
  function u() {
    var m = Math.min(e.length, t.length);
    return i !== pn && (i = Fd(e[0], e[m - 1])), l = m > 2 ? Ed : Pd, d = c = null, f;
  }
  function f(m) {
    return m == null || isNaN(m = +m) ? o : (d || (d = l(e.map(a), t, r)))(a(i(m)));
  }
  return f.invert = function(m) {
    return i(s((c || (c = l(t, e.map(a), lr)))(m)));
  }, f.domain = function(m) {
    return arguments.length ? (e = Array.from(m, Ld), u()) : e.slice();
  }, f.range = function(m) {
    return arguments.length ? (t = Array.from(m), u()) : t.slice();
  }, f.rangeRound = function(m) {
    return t = Array.from(m), r = Id, u();
  }, f.clamp = function(m) {
    return arguments.length ? (i = m ? !0 : pn, u()) : i !== pn;
  }, f.interpolate = function(m) {
    return arguments.length ? (r = m, u()) : r;
  }, f.unknown = function(m) {
    return arguments.length ? (o = m, f) : o;
  }, function(m, y) {
    return a = m, s = y, u();
  };
}
function di() {
  return Ad()(pn, pn);
}
function Rd(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function cr(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, a = e.slice(0, r);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(r + 1)
  ];
}
function vn(e) {
  return e = cr(Math.abs(e)), e ? e[1] : NaN;
}
function Bd(e, t) {
  return function(r, a) {
    for (var s = r.length, o = [], i = 0, l = e[0], d = 0; s > 0 && l > 0 && (d + l + 1 > a && (l = Math.max(1, a - d)), o.push(r.substring(s -= l, s + l)), !((d += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return o.reverse().join(t);
  };
}
function Hd(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var zd = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function dr(e) {
  if (!(t = zd.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new ks({
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
dr.prototype = ks.prototype;
function ks(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
ks.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Wd(e) {
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
var ui;
function Od(e, t) {
  var r = cr(e, t);
  if (!r) return e + "";
  var a = r[0], s = r[1], o = s - (ui = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, i = a.length;
  return o === i ? a : o > i ? a + new Array(o - i + 1).join("0") : o > 0 ? a.slice(0, o) + "." + a.slice(o) : "0." + new Array(1 - o).join("0") + cr(e, Math.max(0, t + o - 1))[0];
}
function so(e, t) {
  var r = cr(e, t);
  if (!r) return e + "";
  var a = r[0], s = r[1];
  return s < 0 ? "0." + new Array(-s).join("0") + a : a.length > s + 1 ? a.slice(0, s + 1) + "." + a.slice(s + 1) : a + new Array(s - a.length + 2).join("0");
}
const oo = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Rd,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => so(e * 100, t),
  r: so,
  s: Od,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function io(e) {
  return e;
}
var lo = Array.prototype.map, co = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ud(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? io : Bd(lo.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? io : Hd(lo.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", d = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = dr(f);
    var m = f.fill, y = f.align, w = f.sign, v = f.symbol, h = f.zero, g = f.width, F = f.comma, I = f.precision, j = f.trim, P = f.type;
    P === "n" ? (F = !0, P = "g") : oo[P] || (I === void 0 && (I = 12), j = !0, P = "g"), (h || m === "0" && y === "=") && (h = !0, m = "0", y = "=");
    var D = v === "$" ? r : v === "#" && /[boxX]/.test(P) ? "0" + P.toLowerCase() : "", A = v === "$" ? a : /[%p]/.test(P) ? i : "", T = oo[P], _ = /[defgprs%]/.test(P);
    I = I === void 0 ? 6 : /[gprs]/.test(P) ? Math.max(1, Math.min(21, I)) : Math.max(0, Math.min(20, I));
    function C(k) {
      var p = D, M = A, N, b, S;
      if (P === "c")
        M = T(k) + M, k = "";
      else {
        k = +k;
        var $ = k < 0 || 1 / k < 0;
        if (k = isNaN(k) ? d : T(Math.abs(k), I), j && (k = Wd(k)), $ && +k == 0 && w !== "+" && ($ = !1), p = ($ ? w === "(" ? w : l : w === "-" || w === "(" ? "" : w) + p, M = (P === "s" ? co[8 + ui / 3] : "") + M + ($ && w === "(" ? ")" : ""), _) {
          for (N = -1, b = k.length; ++N < b; )
            if (S = k.charCodeAt(N), 48 > S || S > 57) {
              M = (S === 46 ? s + k.slice(N + 1) : k.slice(N)) + M, k = k.slice(0, N);
              break;
            }
        }
      }
      F && !h && (k = t(k, 1 / 0));
      var te = p.length + k.length + M.length, U = te < g ? new Array(g - te + 1).join(m) : "";
      switch (F && h && (k = t(U + k, U.length ? g - M.length : 1 / 0), U = ""), y) {
        case "<":
          k = p + k + M + U;
          break;
        case "=":
          k = p + U + k + M;
          break;
        case "^":
          k = U.slice(0, te = U.length >> 1) + p + k + M + U.slice(te);
          break;
        default:
          k = U + p + k + M;
          break;
      }
      return o(k);
    }
    return C.toString = function() {
      return f + "";
    }, C;
  }
  function u(f, m) {
    var y = c((f = dr(f), f.type = "f", f)), w = Math.max(-8, Math.min(8, Math.floor(vn(m) / 3))) * 3, v = Math.pow(10, -w), h = co[8 + w / 3];
    return function(g) {
      return y(v * g) + h;
    };
  }
  return {
    format: c,
    formatPrefix: u
  };
}
var Zn, fi, hi;
Gd({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Gd(e) {
  return Zn = Ud(e), fi = Zn.format, hi = Zn.formatPrefix, Zn;
}
function Vd(e) {
  return Math.max(0, -vn(Math.abs(e)));
}
function Yd(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(vn(t) / 3))) * 3 - vn(Math.abs(e)));
}
function qd(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, vn(t) - vn(e)) + 1;
}
function Xd(e, t, r, a) {
  var s = Ea(e, t, r), o;
  switch (a = dr(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(o = Yd(s, i)) && (a.precision = o), hi(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(o = qd(s, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = o - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(o = Vd(s)) && (a.precision = o - (a.type === "%") * 2);
      break;
    }
  }
  return fi(a);
}
function Kd(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var a = t();
    return od(a[0], a[a.length - 1], r ?? 10);
  }, e.tickFormat = function(r, a) {
    var s = t();
    return Xd(s[0], s[s.length - 1], r ?? 10, a);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var a = t(), s = 0, o = a.length - 1, i = a[s], l = a[o], d, c, u = 10;
    for (l < i && (c = i, i = l, l = c, c = s, s = o, o = c); u-- > 0; ) {
      if (c = Pa(i, l, r), c === d)
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
function ur() {
  var e = di();
  return e.copy = function() {
    return ci(e, ur());
  }, Xr.apply(e, arguments), Kd(e);
}
function Jd(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, s = e[r], o = e[a], i;
  return o < s && (i = r, r = a, a = i, i = s, s = o, o = i), e[r] = t.floor(s), e[a] = t.ceil(o), e;
}
const xa = /* @__PURE__ */ new Date(), ba = /* @__PURE__ */ new Date();
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
  }), r && (s.count = (o, i) => (xa.setTime(+o), ba.setTime(+i), e(xa), e(ba), Math.floor(r(xa, ba))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(a ? (i) => a(i) % o === 0 : (i) => s.count(0, i) % o === 0) : s)), s;
}
const fr = et(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
fr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? et((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : fr);
fr.range;
const At = 1e3, mt = At * 60, Rt = mt * 60, Ht = Rt * 24, Cs = Ht * 7, uo = Ht * 30, ya = Ht * 365, mn = et((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * At);
}, (e, t) => (t - e) / At, (e) => e.getUTCSeconds());
mn.range;
const js = et((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * At);
}, (e, t) => {
  e.setTime(+e + t * mt);
}, (e, t) => (t - e) / mt, (e) => e.getMinutes());
js.range;
const Zd = et((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * mt);
}, (e, t) => (t - e) / mt, (e) => e.getUTCMinutes());
Zd.range;
const Ns = et((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * At - e.getMinutes() * mt);
}, (e, t) => {
  e.setTime(+e + t * Rt);
}, (e, t) => (t - e) / Rt, (e) => e.getHours());
Ns.range;
const Qd = et((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Rt);
}, (e, t) => (t - e) / Rt, (e) => e.getUTCHours());
Qd.range;
const Un = et(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * mt) / Ht,
  (e) => e.getDate() - 1
);
Un.range;
const Ts = et((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ht, (e) => e.getUTCDate() - 1);
Ts.range;
const eu = et((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ht, (e) => Math.floor(e / Ht));
eu.range;
function sn(e) {
  return et((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * mt) / Cs);
}
const Kr = sn(0), hr = sn(1), tu = sn(2), nu = sn(3), _n = sn(4), ru = sn(5), au = sn(6);
Kr.range;
hr.range;
tu.range;
nu.range;
_n.range;
ru.range;
au.range;
function on(e) {
  return et((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Cs);
}
const pi = on(0), pr = on(1), su = on(2), ou = on(3), wn = on(4), iu = on(5), lu = on(6);
pi.range;
pr.range;
su.range;
ou.range;
wn.range;
iu.range;
lu.range;
const Rn = et((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Rn.range;
const cu = et((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
cu.range;
const zt = et((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
zt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : et((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
zt.range;
const rn = et((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
rn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : et((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
rn.range;
function du(e, t, r, a, s, o) {
  const i = [
    [mn, 1, At],
    [mn, 5, 5 * At],
    [mn, 15, 15 * At],
    [mn, 30, 30 * At],
    [o, 1, mt],
    [o, 5, 5 * mt],
    [o, 15, 15 * mt],
    [o, 30, 30 * mt],
    [s, 1, Rt],
    [s, 3, 3 * Rt],
    [s, 6, 6 * Rt],
    [s, 12, 12 * Rt],
    [a, 1, Ht],
    [a, 2, 2 * Ht],
    [r, 1, Cs],
    [t, 1, uo],
    [t, 3, 3 * uo],
    [e, 1, ya]
  ];
  function l(c, u, f) {
    const m = u < c;
    m && ([c, u] = [u, c]);
    const y = f && typeof f.range == "function" ? f : d(c, u, f), w = y ? y.range(c, +u + 1) : [];
    return m ? w.reverse() : w;
  }
  function d(c, u, f) {
    const m = Math.abs(u - c) / f, y = vs(([, , h]) => h).right(i, m);
    if (y === i.length) return e.every(Ea(c / ya, u / ya, f));
    if (y === 0) return fr.every(Math.max(Ea(c, u, f), 1));
    const [w, v] = i[m / i[y - 1][2] < i[y][2] / m ? y - 1 : y];
    return w.every(v);
  }
  return [l, d];
}
const [uu, fu] = du(zt, Rn, Kr, Un, Ns, js);
function va(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function _a(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Tn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function hu(e) {
  var t = e.dateTime, r = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = Dn(s), u = $n(s), f = Dn(o), m = $n(o), y = Dn(i), w = $n(i), v = Dn(l), h = $n(l), g = Dn(d), F = $n(d), I = {
    a: $,
    A: te,
    b: U,
    B: R,
    c: null,
    d: xo,
    e: xo,
    f: Eu,
    g: Vu,
    G: qu,
    H: Lu,
    I: Fu,
    j: Pu,
    L: mi,
    m: Au,
    M: Ru,
    p: W,
    q: B,
    Q: vo,
    s: _o,
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
    "%": yo
  }, j = {
    a: ae,
    A: z,
    b: fe,
    B: ve,
    c: null,
    d: bo,
    e: bo,
    f: Qu,
    g: df,
    G: ff,
    H: Ku,
    I: Ju,
    j: Zu,
    L: xi,
    m: ef,
    M: tf,
    p: le,
    q: ue,
    Q: vo,
    s: _o,
    S: nf,
    u: rf,
    U: af,
    V: sf,
    w: of,
    W: lf,
    x: null,
    X: null,
    y: cf,
    Y: uf,
    Z: hf,
    "%": yo
  }, P = {
    a: C,
    A: k,
    b: p,
    B: M,
    c: N,
    d: mo,
    e: mo,
    f: Du,
    g: po,
    G: ho,
    H: go,
    I: go,
    j: Cu,
    L: Tu,
    m: ku,
    M: ju,
    p: _,
    q: Su,
    Q: Iu,
    s: Mu,
    S: Nu,
    u: bu,
    U: yu,
    V: vu,
    w: xu,
    W: _u,
    x: b,
    X: S,
    y: po,
    Y: ho,
    Z: wu,
    "%": $u
  };
  I.x = D(r, I), I.X = D(a, I), I.c = D(t, I), j.x = D(r, j), j.X = D(a, j), j.c = D(t, j);
  function D(Z, ee) {
    return function(de) {
      var x = [], E = -1, H = 0, J = Z.length, V, ne, pe;
      for (de instanceof Date || (de = /* @__PURE__ */ new Date(+de)); ++E < J; )
        Z.charCodeAt(E) === 37 && (x.push(Z.slice(H, E)), (ne = fo[V = Z.charAt(++E)]) != null ? V = Z.charAt(++E) : ne = V === "e" ? " " : "0", (pe = ee[V]) && (V = pe(de, ne)), x.push(V), H = E + 1);
      return x.push(Z.slice(H, E)), x.join("");
    };
  }
  function A(Z, ee) {
    return function(de) {
      var x = Tn(1900, void 0, 1), E = T(x, Z, de += "", 0), H, J;
      if (E != de.length) return null;
      if ("Q" in x) return new Date(x.Q);
      if ("s" in x) return new Date(x.s * 1e3 + ("L" in x ? x.L : 0));
      if (ee && !("Z" in x) && (x.Z = 0), "p" in x && (x.H = x.H % 12 + x.p * 12), x.m === void 0 && (x.m = "q" in x ? x.q : 0), "V" in x) {
        if (x.V < 1 || x.V > 53) return null;
        "w" in x || (x.w = 1), "Z" in x ? (H = _a(Tn(x.y, 0, 1)), J = H.getUTCDay(), H = J > 4 || J === 0 ? pr.ceil(H) : pr(H), H = Ts.offset(H, (x.V - 1) * 7), x.y = H.getUTCFullYear(), x.m = H.getUTCMonth(), x.d = H.getUTCDate() + (x.w + 6) % 7) : (H = va(Tn(x.y, 0, 1)), J = H.getDay(), H = J > 4 || J === 0 ? hr.ceil(H) : hr(H), H = Un.offset(H, (x.V - 1) * 7), x.y = H.getFullYear(), x.m = H.getMonth(), x.d = H.getDate() + (x.w + 6) % 7);
      } else ("W" in x || "U" in x) && ("w" in x || (x.w = "u" in x ? x.u % 7 : "W" in x ? 1 : 0), J = "Z" in x ? _a(Tn(x.y, 0, 1)).getUTCDay() : va(Tn(x.y, 0, 1)).getDay(), x.m = 0, x.d = "W" in x ? (x.w + 6) % 7 + x.W * 7 - (J + 5) % 7 : x.w + x.U * 7 - (J + 6) % 7);
      return "Z" in x ? (x.H += x.Z / 100 | 0, x.M += x.Z % 100, _a(x)) : va(x);
    };
  }
  function T(Z, ee, de, x) {
    for (var E = 0, H = ee.length, J = de.length, V, ne; E < H; ) {
      if (x >= J) return -1;
      if (V = ee.charCodeAt(E++), V === 37) {
        if (V = ee.charAt(E++), ne = P[V in fo ? ee.charAt(E++) : V], !ne || (x = ne(Z, de, x)) < 0) return -1;
      } else if (V != de.charCodeAt(x++))
        return -1;
    }
    return x;
  }
  function _(Z, ee, de) {
    var x = c.exec(ee.slice(de));
    return x ? (Z.p = u.get(x[0].toLowerCase()), de + x[0].length) : -1;
  }
  function C(Z, ee, de) {
    var x = y.exec(ee.slice(de));
    return x ? (Z.w = w.get(x[0].toLowerCase()), de + x[0].length) : -1;
  }
  function k(Z, ee, de) {
    var x = f.exec(ee.slice(de));
    return x ? (Z.w = m.get(x[0].toLowerCase()), de + x[0].length) : -1;
  }
  function p(Z, ee, de) {
    var x = g.exec(ee.slice(de));
    return x ? (Z.m = F.get(x[0].toLowerCase()), de + x[0].length) : -1;
  }
  function M(Z, ee, de) {
    var x = v.exec(ee.slice(de));
    return x ? (Z.m = h.get(x[0].toLowerCase()), de + x[0].length) : -1;
  }
  function N(Z, ee, de) {
    return T(Z, t, ee, de);
  }
  function b(Z, ee, de) {
    return T(Z, r, ee, de);
  }
  function S(Z, ee, de) {
    return T(Z, a, ee, de);
  }
  function $(Z) {
    return i[Z.getDay()];
  }
  function te(Z) {
    return o[Z.getDay()];
  }
  function U(Z) {
    return d[Z.getMonth()];
  }
  function R(Z) {
    return l[Z.getMonth()];
  }
  function W(Z) {
    return s[+(Z.getHours() >= 12)];
  }
  function B(Z) {
    return 1 + ~~(Z.getMonth() / 3);
  }
  function ae(Z) {
    return i[Z.getUTCDay()];
  }
  function z(Z) {
    return o[Z.getUTCDay()];
  }
  function fe(Z) {
    return d[Z.getUTCMonth()];
  }
  function ve(Z) {
    return l[Z.getUTCMonth()];
  }
  function le(Z) {
    return s[+(Z.getUTCHours() >= 12)];
  }
  function ue(Z) {
    return 1 + ~~(Z.getUTCMonth() / 3);
  }
  return {
    format: function(Z) {
      var ee = D(Z += "", I);
      return ee.toString = function() {
        return Z;
      }, ee;
    },
    parse: function(Z) {
      var ee = A(Z += "", !1);
      return ee.toString = function() {
        return Z;
      }, ee;
    },
    utcFormat: function(Z) {
      var ee = D(Z += "", j);
      return ee.toString = function() {
        return Z;
      }, ee;
    },
    utcParse: function(Z) {
      var ee = A(Z += "", !0);
      return ee.toString = function() {
        return Z;
      }, ee;
    }
  };
}
var fo = { "-": "", _: " ", 0: "0" }, at = /^\s*\d+/, pu = /^%/, mu = /[\\^$*+?|[\]().{}]/g;
function Re(e, t, r) {
  var a = e < 0 ? "-" : "", s = (a ? -e : e) + "", o = s.length;
  return a + (o < r ? new Array(r - o + 1).join(t) + s : s);
}
function gu(e) {
  return e.replace(mu, "\\$&");
}
function Dn(e) {
  return new RegExp("^(?:" + e.map(gu).join("|") + ")", "i");
}
function $n(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function xu(e, t, r) {
  var a = at.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function bu(e, t, r) {
  var a = at.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function yu(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function vu(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function _u(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function ho(e, t, r) {
  var a = at.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function po(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function wu(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function Su(e, t, r) {
  var a = at.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function ku(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function mo(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function Cu(e, t, r) {
  var a = at.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function go(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function ju(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function Nu(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function Tu(e, t, r) {
  var a = at.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function Du(e, t, r) {
  var a = at.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function $u(e, t, r) {
  var a = pu.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function Iu(e, t, r) {
  var a = at.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Mu(e, t, r) {
  var a = at.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function xo(e, t) {
  return Re(e.getDate(), t, 2);
}
function Lu(e, t) {
  return Re(e.getHours(), t, 2);
}
function Fu(e, t) {
  return Re(e.getHours() % 12 || 12, t, 2);
}
function Pu(e, t) {
  return Re(1 + Un.count(zt(e), e), t, 3);
}
function mi(e, t) {
  return Re(e.getMilliseconds(), t, 3);
}
function Eu(e, t) {
  return mi(e, t) + "000";
}
function Au(e, t) {
  return Re(e.getMonth() + 1, t, 2);
}
function Ru(e, t) {
  return Re(e.getMinutes(), t, 2);
}
function Bu(e, t) {
  return Re(e.getSeconds(), t, 2);
}
function Hu(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function zu(e, t) {
  return Re(Kr.count(zt(e) - 1, e), t, 2);
}
function gi(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? _n(e) : _n.ceil(e);
}
function Wu(e, t) {
  return e = gi(e), Re(_n.count(zt(e), e) + (zt(e).getDay() === 4), t, 2);
}
function Ou(e) {
  return e.getDay();
}
function Uu(e, t) {
  return Re(hr.count(zt(e) - 1, e), t, 2);
}
function Gu(e, t) {
  return Re(e.getFullYear() % 100, t, 2);
}
function Vu(e, t) {
  return e = gi(e), Re(e.getFullYear() % 100, t, 2);
}
function Yu(e, t) {
  return Re(e.getFullYear() % 1e4, t, 4);
}
function qu(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? _n(e) : _n.ceil(e), Re(e.getFullYear() % 1e4, t, 4);
}
function Xu(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Re(t / 60 | 0, "0", 2) + Re(t % 60, "0", 2);
}
function bo(e, t) {
  return Re(e.getUTCDate(), t, 2);
}
function Ku(e, t) {
  return Re(e.getUTCHours(), t, 2);
}
function Ju(e, t) {
  return Re(e.getUTCHours() % 12 || 12, t, 2);
}
function Zu(e, t) {
  return Re(1 + Ts.count(rn(e), e), t, 3);
}
function xi(e, t) {
  return Re(e.getUTCMilliseconds(), t, 3);
}
function Qu(e, t) {
  return xi(e, t) + "000";
}
function ef(e, t) {
  return Re(e.getUTCMonth() + 1, t, 2);
}
function tf(e, t) {
  return Re(e.getUTCMinutes(), t, 2);
}
function nf(e, t) {
  return Re(e.getUTCSeconds(), t, 2);
}
function rf(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function af(e, t) {
  return Re(pi.count(rn(e) - 1, e), t, 2);
}
function bi(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? wn(e) : wn.ceil(e);
}
function sf(e, t) {
  return e = bi(e), Re(wn.count(rn(e), e) + (rn(e).getUTCDay() === 4), t, 2);
}
function of(e) {
  return e.getUTCDay();
}
function lf(e, t) {
  return Re(pr.count(rn(e) - 1, e), t, 2);
}
function cf(e, t) {
  return Re(e.getUTCFullYear() % 100, t, 2);
}
function df(e, t) {
  return e = bi(e), Re(e.getUTCFullYear() % 100, t, 2);
}
function uf(e, t) {
  return Re(e.getUTCFullYear() % 1e4, t, 4);
}
function ff(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? wn(e) : wn.ceil(e), Re(e.getUTCFullYear() % 1e4, t, 4);
}
function hf() {
  return "+0000";
}
function yo() {
  return "%";
}
function vo(e) {
  return +e;
}
function _o(e) {
  return Math.floor(+e / 1e3);
}
var un, yi;
pf({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function pf(e) {
  return un = hu(e), yi = un.format, un.parse, un.utcFormat, un.utcParse, un;
}
function mf(e) {
  return new Date(e);
}
function gf(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function vi(e, t, r, a, s, o, i, l, d, c) {
  var u = di(), f = u.invert, m = u.domain, y = c(".%L"), w = c(":%S"), v = c("%I:%M"), h = c("%I %p"), g = c("%a %d"), F = c("%b %d"), I = c("%B"), j = c("%Y");
  function P(D) {
    return (d(D) < D ? y : l(D) < D ? w : i(D) < D ? v : o(D) < D ? h : a(D) < D ? s(D) < D ? g : F : r(D) < D ? I : j)(D);
  }
  return u.invert = function(D) {
    return new Date(f(D));
  }, u.domain = function(D) {
    return arguments.length ? m(Array.from(D, gf)) : m().map(mf);
  }, u.ticks = function(D) {
    var A = m();
    return e(A[0], A[A.length - 1], D ?? 10);
  }, u.tickFormat = function(D, A) {
    return A == null ? P : c(A);
  }, u.nice = function(D) {
    var A = m();
    return (!D || typeof D.range != "function") && (D = t(A[0], A[A.length - 1], D ?? 10)), D ? m(Jd(A, D)) : u;
  }, u.copy = function() {
    return ci(u, vi(e, t, r, a, s, o, i, l, d, c));
  }, u;
}
function Ds() {
  return Xr.apply(vi(uu, fu, zt, Rn, Kr, Un, Ns, js, mn, yi).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function xf({
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
  const c = Ee(null), [u, f] = Le(!1), [m, y] = Le(!1), w = t(e.start), v = t(e.end), h = Math.max(v - w, 20), g = () => {
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
  }, F = e.progress ? h * e.progress / 100 : 0, I = () => {
    r?.(e);
  }, j = () => {
    a?.(e);
  }, P = (p) => {
    p.key === "Enter" ? (p.preventDefault(), I()) : p.key === " " && (p.preventDefault(), j());
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
    "--task-width": `${h}px`,
    "--task-color": g(),
    left: `${w}px`,
    width: `${h}px`,
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
function bf({ viewStart: e, viewEnd: t, dateCount: r }) {
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
              const v = y.getTime() === o.getTime(), h = i === w;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": w,
                  className: `date-column ${v ? "today" : ""} ${h ? "focused" : ""}`,
                  tabIndex: h ? 0 : -1,
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
function yf({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
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
        const h = Math.max(0, c - 1);
        u(h), f.current?.querySelector(`[data-task-index="${h}"]`)?.focus();
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
            children: t.map((v, h) => /* @__PURE__ */ n.jsx(
              xf,
              {
                task: v,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && c === h,
                taskIndex: h,
                tabIndex: l && c === h ? 0 : -1,
                onFocus: () => w(h)
              },
              v.id
            ))
          }
        )
      ]
    }
  );
}
function Jx({
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
    const v = new ResizeObserver((h) => {
      const g = h[0];
      g && d(Math.max(g.contentRect.width - 220, 400));
    });
    return v.observe(i.current), () => v.disconnect();
  }, []);
  const m = Me(
    () => Ds().domain([c, u]).range([0, l]),
    [c, u, l]
  ), y = Me(() => {
    const v = /* @__PURE__ */ new Map();
    return t.forEach((h) => {
      const g = v.get(h.resourceId) || [];
      g.push(h), v.set(h.resourceId, g);
    }), v;
  }, [t]), w = (v) => {
    if (v.target === v.currentTarget)
      switch (v.key) {
        case "ArrowDown":
          v.preventDefault();
          const h = i.current?.querySelector(".gantt-row .resource-label");
          h && h.focus();
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
        /* @__PURE__ */ n.jsx(bf, { viewStart: c, viewEnd: u, dateCount: f }),
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
            children: e.map((v, h) => /* @__PURE__ */ n.jsx(
              yf,
              {
                resource: v,
                tasks: y.get(v.id) || [],
                scale: m,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: h,
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
const mr = ({
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
) }), vf = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: s,
  text: o,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const d = () => t ? ft.Children.toArray(t).filter(
    (h) => ft.isValidElement(h) && (h.type === mr || h.type?.displayName === "BreadcrumbItem")
  ).map((h) => ({
    text: typeof h.props.children == "string" ? h.props.children : String(h.props.children),
    href: h.props.href,
    active: h.props.active,
    attributes: h.props.attributes
  })) : [], c = () => t ? d() : s && o ? [{ href: s, text: o }] : e, u = () => {
    const v = c();
    if (v && v.length > 0) {
      const h = v.slice().reverse().find((g) => g.href && !g.active);
      if (h)
        return { href: h.href, text: h.text };
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
          ft.Children.map(t, (v, h) => ft.isValidElement(v) && (v.type === mr || v.type?.displayName === "BreadcrumbItem") ? ft.cloneElement(v, { key: h }) : null)
        ) : (
          // Render from items array
          f?.filter((v) => v.active || !!v.href).map((v, h) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: v.active ? /* @__PURE__ */ n.jsx(
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
          ) }, h))
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
}, _f = vf;
_f.Item = mr;
mr.displayName = "BreadcrumbItem";
const _i = ({
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
}, Zx = ({
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
}, Qx = ({
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
}, wi = ft.forwardRef(({
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
      Bt,
      {
        level: a,
        className: w,
        children: F()
      }
    );
  }, h = () => u.children ? u.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: o }) : null, g = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
          h(),
          g()
        ] })
      ]
    }
  );
});
wi.displayName = "Card";
const eb = ({
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
}, tb = ({
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
}, nb = ({
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
  ].filter(Boolean).join(" "), h = () => {
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
      Bt,
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
          h(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: g() })
      ]
    }
  );
}, wf = ({
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
    Bt,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Bt,
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
}, rb = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...s
}) => {
  const o = be("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: o, ...s, children: i() });
}, ab = ({
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
}, In = { current: null }, Sf = () => {
  if (In.current) return In.current;
  try {
    In.current = require("prismjs");
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
    In.current = null;
  }
  return In.current;
}, kf = (e) => {
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
}, gr = (e, t, r) => {
  if (r || !t) return e;
  const a = Sf();
  if (a && a.languages) {
    const s = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (s)
      try {
        return a.highlight(e, a.languages[s], s);
      } catch {
      }
  }
  return kf(e);
}, Cf = ({
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
  visuallyHiddenCaption: h = !1
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
    ), p = {
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
      }, te = gr(b, _.codeLanguage);
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
    return /* @__PURE__ */ n.jsx("th", { className: k, ...p, children: M }, C);
  }, P = (_, C, k) => {
    const p = s && k || _.rowHeader, M = be(
      p ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${p ? "header" : "cell"}--${_.format}`]: _.format
      },
      _.classes
    ), N = {
      ...p && { scope: "row" },
      ..._.colspan && { colSpan: _.colspan },
      ..._.rowspan && { rowSpan: _.rowspan },
      ...o && {
        role: p ? "rowheader" : "cell",
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
      }, B = gr(
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
    ] }), $ = p ? "th" : "td";
    return /* @__PURE__ */ n.jsx($, { className: M, ...N, children: S }, C);
  };
  let D = t, A = e;
  !D && w && w.length && (D = w.map((_) => ({
    text: _.title,
    format: _.format,
    classes: _.headerClasses,
    attributes: _.headerAttributes
  }))), !A && w && v && v.length && (A = v.map((_, C) => w.map((k) => {
    const p = k.accessor ? k.accessor(_, C) : _[k.key];
    let M = { format: k.format, classes: k.cellClasses, attributes: k.cellAttributes };
    if (k.rowHeader && (M.rowHeader = !0), k.render) {
      const N = k.render(p, _, C, k);
      return N == null || typeof N == "boolean" ? { ...M, text: "" } : typeof N == "string" || typeof N == "number" ? { ...M, text: String(N) } : { ...M, ...N };
    }
    return { ...M, text: p != null ? String(p) : "" };
  })));
  const T = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: F,
      ...o && { role: "table" },
      ...m,
      ...y && { "data-testid": y },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: be(g, h && "nhsuk-u-visually-hidden"), children: r }),
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
              (k, p) => P(k, p, p === 0)
            )
          },
          C
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ n.jsxs(wf, { className: c, children: [
    i && /* @__PURE__ */ n.jsx(Bt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    T()
  ] }) : I ? /* @__PURE__ */ n.jsx("div", { className: I, children: T() }) : T();
}, jf = ({
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
}, Si = ({
  responsive: e,
  className: t,
  children: r,
  ...a
}) => {
  const s = e ? { role: "row" } : {};
  return /* @__PURE__ */ n.jsx("tr", { className: t, ...s, ...a, children: r });
}, ki = ({
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
  let h;
  if (r != null) h = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) h = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const F = Array.isArray(a), I = F ? a.join(`
`) : a, j = F || I.includes(`
`), P = {
      className: be("nhsuk-table__code", o, {
        "nhsuk-table__code--block": j,
        "nhsuk-table__code--inline": !j
      }),
      ...s ? { "data-language": s } : {}
    }, D = gr(
      I,
      s,
      i
    );
    h = j ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
      "code",
      {
        ...P,
        dangerouslySetInnerHTML: { __html: D }
      }
    ) }) : /* @__PURE__ */ n.jsx("code", { ...P, dangerouslySetInnerHTML: { __html: D } });
  } else h = e;
  const g = y;
  return /* @__PURE__ */ n.jsx(g, { className: w, ...v, children: h });
}, Nf = ({
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
  const w = !!y, v = w ? "th" : "td", h = be(
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
    }, A = gr(j, s, i);
    F = P ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx("code", { ...D, dangerouslySetInnerHTML: { __html: A } }) }) : /* @__PURE__ */ n.jsx("code", { ...D, dangerouslySetInnerHTML: { __html: A } });
  } else F = e;
  return /* @__PURE__ */ n.jsx(v, { className: h, ...g, children: F });
}, Wt = Cf;
Wt.Caption = jf;
Wt.BodyRow = Si;
Wt.HeaderCell = ki;
Wt.Cell = Nf;
let wo = !1, So = !1;
Object.defineProperty(Wt, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !wo && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), wo = !0), Si;
  }
});
Object.defineProperty(Wt, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !So && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), So = !0), ki;
  }
});
const sb = Sn(({
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
  const y = r !== void 0, [w, v] = Le(() => t || e[0]?.id || ""), h = y ? r : w, g = Ee(null), F = Ee(/* @__PURE__ */ new Map()), I = ge((C) => {
    y || v(C), a?.(C);
  }, [y, a]), j = ge((C) => {
    s?.(C), l && I(C);
  }, [s, l, I]), P = ge((C, k) => {
    const p = e.filter((b) => !b.disabled).map((b) => b.id), M = p.indexOf(k);
    let N = null;
    switch (C.key) {
      case "ArrowLeft":
        N = M > 0 ? M - 1 : p.length - 1;
        break;
      case "ArrowRight":
        N = M < p.length - 1 ? M + 1 : 0;
        break;
      case "Home":
        N = 0;
        break;
      case "End":
        N = p.length - 1;
        break;
      case "Escape":
        C.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (N !== null) {
      C.preventDefault();
      const b = p[N], S = F.current.get(b);
      S && (S.focus(), j(b));
    }
  }, [e, j, i]), D = ge((C, k) => {
    k ? F.current.set(C, k) : F.current.delete(C);
  }, []), A = ge((C) => {
    const k = F.current.get(C);
    k && k.focus();
  }, []);
  Uo(m, () => ({
    focusTab: A,
    getActiveTab: () => h,
    getTabListElement: () => g.current
  }), [A, h]);
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
                  const k = C.id === h, p = C.disabled, M = be("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": k,
                    "nhsuk-tabs__list-item--disabled": p
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
                      disabled: p,
                      onClick: () => !p && I(C.id),
                      onKeyDown: (N) => !p && P(N, C.id),
                      onFocus: () => !p && j(C.id),
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
          const k = C.id === h;
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
}), Tf = Sn(
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
Tf.displayName = "Details";
const Df = Sn(
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
      Bt,
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
Df.displayName = "DoDontList";
const $f = Sn(
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
$f.displayName = "Expander";
const If = Sn(
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
        Mf,
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
), Mf = ({
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
If.displayName = "TaskList";
const ob = ({
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
        Oo(
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
}, ib = ({
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
}, Lf = ({
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
    /* @__PURE__ */ n.jsx(it, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ n.jsx(it, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ n.jsx(it, { variant: "secondary", size: "small", onClick: r, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ n.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ n.jsx(
      ar,
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
      ar,
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
] }), Ff = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ n.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((r) => /* @__PURE__ */ n.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ n.jsx(He, { color: Pf(r.status), text: r.label }) }, r.status)) });
function Pf(e) {
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
const lb = ({
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
  const [h, g] = Le("grid"), F = i || h, [I, j] = Le(a || []), P = r ?? I, D = Me(() => {
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
    Ff,
    {
      items: _,
      orientation: w === "left" || w === "right" ? "vertical" : "horizontal"
    }
  ) : null, k = (N) => {
    i || g(N), v?.(N);
  }, p = u || (f ? /* @__PURE__ */ n.jsx(
    Lf,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: F,
      onA11yModeChange: k
    }
  ) : null), M = /* @__PURE__ */ n.jsx("div", { style: d, className: be(l), children: /* @__PURE__ */ n.jsx(Fa, { className: be("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(nn, { children: /* @__PURE__ */ n.jsx(Fn, { width: tn.Full, children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    p,
    w === "top" && C,
    /* @__PURE__ */ n.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((N) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => T(N), "aria-pressed": P.includes(N.id), children: [
      Mn(new Date(N.start)),
      " – ",
      Mn(new Date(N.end)),
      " (",
      N.status,
      ")"
    ] }) }, N.id)) }),
    w === "bottom" && C
  ] }) }) }) }) });
  return F === "list" ? M : /* @__PURE__ */ n.jsx("div", { style: d, className: be(l), children: /* @__PURE__ */ n.jsx(Fa, { className: be("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(nn, { children: /* @__PURE__ */ n.jsx(Fn, { width: tn.Full, children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    p,
    w === "top" && C,
    /* @__PURE__ */ n.jsxs("div", { role: "grid", "aria-rowcount": D.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((N) => /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": `Session ${N.specialty}`, className: "nhs-slot-matrix__session-header", children: N.specialty }, N.id))
      ] }),
      D.map((N) => /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Mn(new Date(N)), children: Mn(new Date(N)) }),
        t.map((b) => {
          const S = A[N]?.[b.id];
          if (!S)
            return /* @__PURE__ */ n.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, b.id);
          const { slot: $, remaining: te } = S, U = P.includes($.id), R = c ? c($) : `Slot ${Mn(new Date($.start))} ${$.status}${te === 0 ? " full" : ""}`;
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
function ko(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Mn(e) {
  return `${ko(e.getHours())}:${ko(e.getMinutes())}`;
}
const Ef = ({
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
    /* @__PURE__ */ n.jsx(Bt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, cb = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(Fa, { children: /* @__PURE__ */ n.jsx(nn, { children: e.map((s, o) => /* @__PURE__ */ n.jsx(
    Fn,
    {
      width: tn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": o,
      children: /* @__PURE__ */ n.jsx(Ef, { ...s })
    },
    o
  )) }) }) });
}, Af = ft.forwardRef(
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
    tableType: h = "default"
  }, g) => {
    const F = Ee(null), I = Ee(null), j = Ee(null);
    ft.useImperativeHandle(g, () => F.current, []);
    const [P, D] = Le(0), [A, T] = Le(0), [_, C] = Le("headers"), [k, p] = Le("browse"), M = t.length, N = e.length, b = Me(() => !r || r.length === 0 ? e : [...e].sort((B, ae) => {
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
            p("navigate"), $(A);
          else if (_ === "headers" && k === "navigate") {
            const z = t[A];
            z && te(z.key);
          } else _ === "cells" && k === "browse" ? (p("navigate"), S(P, A)) : _ === "cells" && k === "navigate" && U(P);
          break;
        case "Escape":
          B.preventDefault(), (_ === "headers" && k === "navigate" || _ === "cells" && k === "navigate") && p("browse");
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
                C("headers"), p("browse"), $(A);
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
        "nhsuk-table--compact": h === "compact"
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
                  const ue = ve.tableRenderer ? ve.tableRenderer(B) : ve.render ? ve.render(B) : B[ve.key], Z = _ === "cells" && P === ae && A === le, ee = () => typeof ue == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: ue ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: ue ? "Yes" : "No" })
                  ] }) : String(ue ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: be("data-cell", {
                        "data-cell--focused": Z
                      }),
                      tabIndex: Z ? 0 : -1,
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
Af.displayName = "AriaDataGrid";
const Ci = ({
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
  }, [d]), h = ge((_, C) => {
    if (d) return;
    _.preventDefault();
    const k = m.current;
    if (!k || k === C) return;
    const p = e.findIndex((N) => N.key === k), M = e.findIndex((N) => N.key === C);
    if (p !== -1 && M !== -1) {
      const N = [...e], [b] = N.splice(p, 1);
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
      const p = C.direction === "asc" ? "ascending" : "descending";
      return `${k + 1}. ${F(C.key)} (${p})`;
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
              onDrop: (k) => h(k, _.key),
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
        it,
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
function Rf(e, t) {
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
const Ha = Sn(function(t, r) {
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
    error: h = null,
    errorComponent: g,
    "data-testid": F,
    actions: I,
    actionsMinGap: j = 16,
    forceActionsAbove: P = !1
  } = t, A = Ee(
    y || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, T = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), _ = `${A}-description`, C = `${A}-navigation-help`, {
    dataComparator: k = (L, K) => JSON.stringify(L) === JSON.stringify(K),
    filterFunction: p = (L) => L,
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
  }), [b]), [U, R] = Go(Rf, te);
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
  ), Z = ge(
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
            ) ? p(O.data, U.filters) : O.data, $e = U.sortConfig;
            let Be = ye;
            if ($e && $e.length > 0 && (Be = [...ye].sort((Pe, Ae) => {
              for (const { key: Ge, direction: Ve } of $e) {
                let Ze = Pe[Ge], yt = Ae[Ge];
                const Qe = O.columns.find(
                  (kn) => kn.key === Ge
                );
                if (Qe?.tableRenderer ? (Ze = Qe.tableRenderer(Pe), yt = Qe.tableRenderer(Ae)) : Qe?.render && (Ze = Qe.render(Pe), yt = Qe.render(Ae)), Ze == null && yt == null) continue;
                if (Ze == null) return Ve === "asc" ? -1 : 1;
                if (yt == null) return Ve === "asc" ? 1 : -1;
                let tt = 0;
                if (typeof Ze == "number" && typeof yt == "number" ? tt = Ze - yt : tt = String(Ze).localeCompare(
                  String(yt),
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
      p,
      W,
      R,
      $,
      ue,
      ee
    ]
  ), E = ge(
    (L, K) => p(L, K),
    [p]
  );
  if (Uo(
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
  if (h)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`,
        "data-testid": F,
        children: g || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ n.jsx("p", { children: h })
        ] })
      }
    );
  const H = Ee(null), J = Ee(null), V = Ee(null), [ne, pe] = Le(!0);
  ze(() => {
    if (!I) {
      pe(!1);
      return;
    }
    if (P) {
      pe(!1);
      return;
    }
    function L() {
      if (!H.current || !J.current || !V.current) return;
      const X = H.current.clientWidth, O = Array.from(
        J.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), se = O.reduce((je, ye) => je + ye.offsetWidth, 0), me = V.current.offsetWidth, ce = Math.max(8 * (O.length - 1), 0), ke = se + ce + me + j <= X;
      pe(ke);
    }
    const K = requestAnimationFrame(() => L()), oe = new ResizeObserver(() => L());
    return H.current && oe.observe(H.current), J.current && oe.observe(J.current), () => {
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
          Ci,
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
              ref: J,
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
                                  Z($e),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: $e ? "Yes" : "No" })
                                ] }) : ft.isValidElement(Be) || typeof Be != "object" ? Be ?? "" : Be;
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
}), Qn = {
  asc: "↑",
  desc: "↓"
}, Bf = (e) => [...e].sort((t, r) => t.priority - r.priority);
function wa(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function Hf(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function zf(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function Wf(e, t) {
  const r = t.find((s) => s.id === e), a = Hf(t);
  return r ? r.priority < a : !1;
}
const db = ({
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
  const u = Me(() => Bf(e), [e]), f = ge((F) => {
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
    [j[I], j[I - 1]] = [j[I - 1], j[I]], t(wa(j));
  }, [e, t, l]), y = ge((F) => {
    if (l) return;
    const I = e.findIndex((P) => P.id === F);
    if (I >= e.length - 1 || I === -1) return;
    const j = [...e];
    [j[I], j[I + 1]] = [j[I + 1], j[I]], t(wa(j));
  }, [e, t, l]), w = ge((F) => {
    if (l) return;
    const I = e.filter((j) => j.id !== F);
    t(wa(I));
  }, [e, t, l]), v = ge(() => {
    l || t([]);
  }, [t, l]), h = () => {
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
      children: h()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: h()
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
                        children: F.direction === "asc" ? Qn.asc : Qn.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m(F.id),
                          disabled: l || !zf(F.id, e),
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
                          disabled: l || !Wf(F.id, e),
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
      it,
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
      Qn.asc,
      "/",
      Qn.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, $s = (e, t) => t.map((r) => ({
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
})), za = [
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
], Of = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Uf = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, s] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, Gf = (e) => {
  if (typeof e == "boolean") {
    const r = za.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = za.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, Vf = (e) => `${e.name}-${e.bed_name}`, Yf = () => ({
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
}), ub = (e) => {
  const t = Yf();
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
}, qf = {
  dataComparator: Of,
  filterFunction: Uf,
  booleanRenderer: Gf,
  getDataId: Vf
};
function Co(e, t, r) {
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
    return `<span class="nhsuk-tag ${Xf(I, j)}">${P}</span>`;
  }).join(""), v = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", h = w(), g = y(), F = h ? `${g}${h ? `<div class="adaptive-card__badges">${h}</div>` : ""}` : g;
  return {
    variant: v(),
    heading: String(m),
    descriptionHtml: F,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${m}`
  };
}
function Xf(e, t) {
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
const Kf = {
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
}, ji = ({
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
              color: Zf($i(u)),
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
            it,
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
            it,
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
            it,
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
}, Ni = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        He,
        {
          color: Qf(e.status || "active"),
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
      it,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      it,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), Ti = ({
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
      it,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      it,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), Di = ({
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
            o !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Jf(o)}`, children: [
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
            it,
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
            it,
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
function $i(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Jf(e) {
  return $i(e);
}
function Zf(e) {
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
function Qf(e) {
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
const eh = [
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
], Ii = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", th = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, nh = (e) => Ii(e) === "high" || e.status === "urgent" ? "primary" : "default", rh = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, ah = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: eh,
  hiddenFields: [],
  getPriority: Ii,
  getStatus: th,
  getVariant: nh,
  fieldRenderers: rh,
  classPrefix: "adaptive-card--healthcare"
}, sh = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", s = r.getStatus?.(e) || "active", o = s === "urgent" ? "active" : s;
    return /* @__PURE__ */ n.jsx(
      ji,
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
      Ni,
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
      Ti,
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
      Di,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (s) => console.log("Vitals selected:", s),
        onAction: (s, o) => console.log("Vitals action:", s, o)
      }
    );
  }
}, oh = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, jo = {
  name: "healthcare",
  defaultCardConfig: ah,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: sh,
  fieldTypes: oh
};
function No(e) {
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
function To(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function ih(e, t) {
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
function lh(e, t) {
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
function ch(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function dh(e, t, r, a) {
  const s = a ? { ...a.defaultCardConfig, ...r } : { ...Kf, ...r };
  if (a && a.cardTemplates) {
    const o = ch(e);
    if (o && a.cardTemplates[o]) {
      const i = a.cardTemplates[o](e, t, s);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return s.cardTemplate && s.cardTemplate(e, t, s), Co(e, t, s);
}
const fb = ({
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
  id: h,
  disabled: g = !1,
  className: F,
  ...I
}) => {
  const j = lh(e, t), P = f !== void 0, D = f ?? 0, A = Me(() => {
    if (c.some(
      (G) => G.data && G.data.length > 0 && To(G.data)
    )) {
      const G = No(r);
      return {
        ...jo.defaultCardConfig,
        ...G
      };
    } else
      return No(r);
  }, [r, c]), T = Me(() => c.some(
    (G) => G.data && G.data.length > 0 && To(G.data)
  ) ? jo : void 0, [c]), _ = Me(() => ({
    selectedIndex: D,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [D, c.length]), [C, k] = Go(ih, _), p = Ee([]), M = Ee([]), N = Ee([]), b = Ee(null), [S, $] = Le({
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
  }, []), Z = ge((q, G) => G ? [...q].sort((re, Q) => {
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
      return Z(q, S.cardSortConfig);
  }, [s, C.sortConfig, S.cardSortConfig, Z, c, C.selectedIndex]), E = ge((q, G) => {
    const re = fe(q), Q = re[G];
    if (Q) {
      Q.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const L = `Focused on ${Q.label}, ${Q.type} ${G + 1} of ${re.length} within card`;
      le(L);
    }
  }, [fe, le]), H = ge((q) => {
    p.current[q]?.focus();
  }, []), J = ge(() => {
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
        const L = `Sort controls group with ${J().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        le(L);
      } else G && G.focus();
    } else {
      const G = J(), re = q - 1, Q = G[re];
      if (Q) {
        Q.focus();
        const L = Q.tagName.toLowerCase() === "select", K = Q.tagName.toLowerCase() === "button", oe = L ? "dropdown" : K ? "button" : "control", X = L ? ". Use Space key to open dropdown" : "", O = `${oe} ${re + 1} of ${G.length}${X}`;
        le(O);
      }
    }
  }, [J, le]), ne = ge((q, G) => {
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
  }, [S, C.selectedIndex, c, ae, z, H, $, fe, E, le]), pe = ge((q) => {
    const G = p.current[q], re = G?.parentElement;
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
        B(Q), $((X) => ({ ...X, focusedTabIndex: Q })), p.current[Q]?.focus(), pe(Q);
        break;
      case "ArrowRight":
        q.preventDefault();
        const L = G < c.length - 1 ? G + 1 : 0;
        B(L), $((X) => ({ ...X, focusedTabIndex: L })), p.current[L]?.focus(), pe(L);
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
        q.preventDefault(), B(0), $((X) => ({ ...X, focusedTabIndex: 0 })), p.current[0]?.focus(), pe(0);
        break;
      case "End":
        q.preventDefault();
        const oe = c.length - 1;
        B(oe), $((X) => ({ ...X, focusedTabIndex: oe })), p.current[oe]?.focus(), pe(oe);
        break;
      case "Enter":
      case " ":
        q.preventDefault(), B(G);
        break;
    }
  }, [c.length, B, j, z, $, pe]), ie = ge((q, G) => {
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
          const L = J();
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
      const K = J().length;
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
            "aria-describedby": `${w || ""} ${h ? `${h}-navigation-help` : ""}`.trim(),
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
                    p.current[re] = K;
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
          Ci,
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
                  ar,
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
                  it,
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
            const se = dh(G, q.columns, A, T), me = [
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
                      wi,
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
      Ha,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: y,
        ariaDescription: w,
        orientation: v,
        id: h,
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
      Ha,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: y,
        ariaDescription: w,
        orientation: v,
        id: h,
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
}, Mi = (e) => {
  const t = za.find((r) => r.value === e);
  return t ? t.icon : null;
}, uh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, s] = t.priceRange, o = r.discountedPrice || r.price;
      if (o < a || o > s) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => Mi(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, fh = (e) => $s(e, [
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
]), hh = {
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
  booleanRenderer: (e) => Mi(e),
  getDataId: (e) => `financial-${e.id}`
}, ph = (e) => $s(e, [
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
]), mh = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: uh,
    createTabs: fh
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: hh,
    createTabs: ph
  }
}, Do = (e, t) => {
  const r = mh[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, Li = [
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
], gh = [
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
], xh = [
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
], bh = [
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
], $o = [
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
], Io = [
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
], Mo = [
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
], yh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, vh = () => [
  {
    id: "patients",
    label: "Patients",
    data: Li,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ji,
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
    data: gh,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Ni,
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
    data: xh,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Ti,
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
    data: bh,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Di,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], _h = () => {
  const [e, t] = Le("healthcare"), r = Me(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: qf,
      tabPanels: vh(),
      data: Li
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Do("ecommerce", $o),
      data: $o
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Do("financial", Io),
      data: Io
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: yh,
      tabPanels: $s(Mo, [
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
      data: Mo
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
        it,
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
      Ha,
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
}, hb = _h, Fi = (e) => /* @__PURE__ */ n.jsx(Ko, { ...e }), pb = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = tn.TwoThirds,
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
  const h = {
    service: d,
    navigation: c,
    search: u,
    account: f,
    organisation: m,
    logo: y,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(_i, { ...o }),
    /* @__PURE__ */ n.jsx(ti, { ...h }),
    /* @__PURE__ */ n.jsx(Fi, { className: w, ...v, children: /* @__PURE__ */ n.jsx(Jo, { size: s, children: /* @__PURE__ */ n.jsx(nn, { children: /* @__PURE__ */ n.jsxs(Fn, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Bt, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(ni, { ...l })
  ] });
}, mb = ({
  children: e,
  title: t,
  pageHeadingProps: r,
  columnWidth: a = tn.TwoThirds,
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
    /* @__PURE__ */ n.jsx(_i, { ...o }),
    /* @__PURE__ */ n.jsx(ti, { ...w }),
    /* @__PURE__ */ n.jsxs(Fi, { className: m, ...y, children: [
      d && /* @__PURE__ */ n.jsx(La, { ...d }),
      /* @__PURE__ */ n.jsx(Jo, { size: s, children: /* @__PURE__ */ n.jsx(nn, { children: /* @__PURE__ */ n.jsxs(Fn, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Bt, { style: { marginTop: "3rem" }, size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(ni, { ...l })
  ] });
}, Pi = ({
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
Pi.displayName = "ForwardLink";
const hn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function Lo() {
  return typeof window > "u" ? hn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function Ei() {
  const [e, t] = Y.useState(Lo());
  Y.useEffect(() => {
    if (typeof window > "u") return;
    const o = () => t(Lo());
    return window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, []);
  const r = Y.useCallback((o) => e >= hn[o], [e]), a = Y.useCallback((o) => e < hn[o], [e]), s = Y.useCallback((o, i) => e >= hn[o] && e < hn[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: s,
    /** Raw numeric values */
    values: hn
  };
}
function gb(e) {
  const { width: t, values: r } = Ei();
  let a = e.base;
  const s = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const o of s) {
    const i = r[o];
    t >= i && e[o] !== void 0 && (a = e[o]);
  }
  return a;
}
function wh(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [s, o] = Y.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = Y.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return Y.useEffect(() => {
    if (!t || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search);
    s ? d.set(r, String(s)) : d.delete(r), d.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${d.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [s, i, t, r, a]), { selectedId: s, setSelectedId: o, drilledIn: i, setDrilledIn: l };
}
const Sh = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
), kh = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
function Ch(e) {
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
    getId: h = (he) => he.id,
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
    urlSyncDebounceMs: p = 0,
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
    secondarySubheader: Z
  } = e, { up: ee } = Ei(), [de, x] = Y.useState(!1);
  Y.useEffect(() => {
    x(!0);
  }, []);
  const E = de && ee("medium"), H = de && ee("xlarge");
  let J;
  d ? J = d : E ? J = "two-column" : J = "list", !d && F && l && H && (J = "three-column");
  const V = wh({
    enabled: _,
    paramSelected: C,
    paramDrill: k
  }), [ne, pe] = Y.useState(
    () => V.selectedId !== void 0 ? V.selectedId : a
  ), we = r !== void 0 ? r : ne, ie = t.find((he) => h(he) === we), [q, G] = Y.useState(
    void 0
  );
  Y.useEffect(() => {
    if (we === void 0) return;
    G(we);
    const he = setTimeout(() => G(void 0), 220);
    return () => clearTimeout(he);
  }, [we]);
  const re = Y.useRef(null), Q = Y.useRef(null), L = Y.useRef(null), K = Y.useRef(null), [oe, X] = Y.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [O, se] = Y.useState(() => "nav"), [me, ce] = Y.useState(0), ke = () => [
    K.current,
    Q.current,
    L.current
  ].filter(Boolean), je = (he) => {
    const Se = ke(), xe = Math.max(0, Math.min(he, Se.length - 1));
    Se[xe]?.focus(), ce(xe);
  }, ye = Y.useCallback(
    (he) => he ? Array.from(he.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (xe) => !xe.hasAttribute("disabled") && xe.tabIndex !== -1
    ) : [],
    []
  ), $e = Y.useCallback(
    (he) => {
      const Se = ye(Q.current);
      if (!Se.length) {
        Q.current?.focus();
        return;
      }
      const xe = Math.max(0, Math.min(he, Se.length - 1)), De = Se[xe];
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
    (he) => {
      const Se = ye(L.current);
      if (!Se.length) {
        L.current?.focus();
        return;
      }
      const xe = Math.max(0, Math.min(he, Se.length - 1)), De = Se[xe];
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
  ), Pe = (he) => {
    if (he.defaultPrevented) return;
    const Se = he.key, xe = he.target, De = !!st.current && st.current.contains(xe), Ye = !!Q.current && Q.current.contains(xe), We = !!L.current && L.current.contains(xe), Oe = !!L.current, dn = xe === K.current || xe === Q.current || xe === L.current, Xt = Ae && (J === "list" || J === "cards"), qn = Ye && !!xe.closest(".nhs-navigation-split-view__header");
    if (O === "containers" && dn) {
      if (Se === "ArrowRight") {
        he.preventDefault();
        const Ie = ke(), Ue = Math.min(Ie.length - 1, me + 1);
        je(Ue);
        return;
      }
      if (Se === "ArrowLeft") {
        he.preventDefault();
        const Ie = Math.max(0, me - 1);
        je(Ie);
        return;
      }
      if (Se === "Home") {
        he.preventDefault(), je(0);
        return;
      }
      if (Se === "End") {
        he.preventDefault(), je(ke().length - 1);
        return;
      }
      if (Se === "Enter" || Se === " ") {
        if (he.preventDefault(), xe === K.current) {
          if (se("nav"), st.current) {
            const Ie = Array.from(
              st.current.querySelectorAll("[data-nav-item]")
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
          if (he.preventDefault(), se("nav"), st.current) {
            const Ue = Array.from(
              st.current.querySelectorAll("[data-nav-item]")
            )[Xe >= 0 ? Xe : 0];
            setTimeout(() => Ue?.focus(), 10);
          }
        } else if ((xe === Q.current || xe === L.current) && (he.preventDefault(), se("nav"), st.current)) {
          const Ue = Array.from(
            st.current.querySelectorAll("[data-nav-item]")
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
        he.preventDefault(), he.stopPropagation(), ye(Q.current).length > 0 && setTimeout(() => {
          $e(oe.contentIndex);
        }, 50);
        return;
      }
      if (xe === L.current && O === "secondary") {
        he.preventDefault(), he.stopPropagation(), ye(
          L.current
        ).length > 0 && setTimeout(() => {
          Be(oe.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Xt && qn && !dn && (Se === "ArrowRight" || Se === "ArrowLeft")) {
      const Ie = ye(Q.current).filter(
        (Ue) => Ue.closest(".nhs-navigation-split-view__header")
      );
      if (Ie.length > 1) {
        const Ue = Ie.indexOf(xe);
        if (Ue >= 0) {
          const Bs = (Ue + (Se === "ArrowRight" ? 1 : -1) + Ie.length) % Ie.length;
          he.preventDefault(), Ie[Bs].focus();
          return;
        }
      }
    }
    if (Se === "ArrowRight") {
      if (De || O === "nav") {
        he.preventDefault(), se("content"), setTimeout(() => Q.current?.focus(), 10);
        return;
      }
      if (Ye || O === "content") {
        Oe && (he.preventDefault(), se("secondary"), setTimeout(() => L.current?.focus(), 10));
        return;
      }
    }
    if (Se === "ArrowLeft") {
      if (We || O === "secondary") {
        he.preventDefault(), se("content"), setTimeout(() => Q.current?.focus(), 10);
        return;
      }
      if (Ye || O === "content") {
        if (he.preventDefault(), se("nav"), st.current) {
          const Ue = Array.from(
            st.current.querySelectorAll("[data-nav-item]")
          )[Xe >= 0 ? Xe : 0];
          setTimeout(() => Ue?.focus(), 10);
        }
        return;
      }
    }
    if (Se === "Home" && !De && (he.preventDefault(), se("nav"), st.current)) {
      const Ie = Array.from(
        st.current.querySelectorAll("[data-nav-item]")
      ), Ue = Ie[Xe >= 0 ? Xe : 0] || Ie[0];
      setTimeout(() => Ue?.focus(), 10);
    }
    if (Se === "End") {
      const Ie = Oe ? L.current : Q.current;
      Ie && !Ie.contains(xe) && (he.preventDefault(), Oe ? (se("secondary"), setTimeout(() => L.current?.focus(), 10)) : (se("content"), setTimeout(() => Q.current?.focus(), 10)));
    }
    if (Se === "ArrowDown" || Se === "ArrowUp") {
      if (xe === Q.current && Se === "ArrowDown") {
        he.preventDefault(), ye(Q.current).length > 0 && $e(0);
        return;
      }
      if (xe === L.current && Se === "ArrowDown") {
        he.preventDefault(), ye(
          L.current
        ).length > 0 && Be(0);
        return;
      }
      if (Ye) {
        const Ie = ye(Q.current);
        if (Ie.length) {
          he.preventDefault();
          const Ue = Se === "ArrowDown" ? 1 : -1, _t = (oe.contentIndex + Ue + Ie.length) % Ie.length;
          $e(_t);
        }
      } else if (We) {
        const Ie = ye(L.current);
        if (Ie.length) {
          he.preventDefault();
          const Ue = Se === "ArrowDown" ? 1 : -1, _t = (oe.secondaryIndex + Ue + Ie.length) % Ie.length;
          Be(_t);
        }
      }
    }
  }, Ae = !!ie && (J === "list" || J === "cards"), Ge = Y.useMemo(() => fe === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : fe === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : fe === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: fe.mobile !== void 0 ? fe.mobile : !0,
    tablet: fe.tablet || !1,
    desktop: fe.desktop || !1
  }, [fe]), Ve = de && ee("medium") && !ee("xlarge"), Ze = de && ee("xlarge"), yt = !!l, Qe = J === "three-column", [tt, kn] = Y.useState(!1);
  Y.useEffect(() => {
    Qe && tt && kn(!1);
  }, [Qe, tt]), Y.useEffect(() => {
    tt && !Qe && (se("secondary"), ce(2), setTimeout(() => {
      L.current?.focus();
    }, 50));
  }, [tt, Qe]), Y.useEffect(() => {
    !tt && !Qe && O === "secondary" && (se("content"), ce(1), setTimeout(() => {
      Q.current?.focus();
    }, 50));
  }, [tt, Qe, O]);
  const aa = !!ie && (Ae && Ge.mobile || !Ae && Ve && Ge.tablet || !Ae && Ze && Ge.desktop) || yt && !Qe, nc = `h${ve}`, sa = ie ? Y.createElement(
    nc,
    {
      style: {
        marginLeft: Ae ? 32 : 0,
        marginRight: Ae ? 32 : 0
      }
    },
    ie.label
  ) : null, As = Ae ? "mobile" : Ve ? "tablet" : "desktop", rc = yt && !Qe && !tt, oa = Ae && Ge.mobile ? /* @__PURE__ */ n.jsx(
    La,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => cn(void 0, void 0)
    }
  ) : void 0, ia = rc ? /* @__PURE__ */ n.jsx(
    Pi,
    {
      element: "button",
      text: f,
      onClick: () => {
        kn(!0);
      }
    }
  ) : void 0, la = !Qe && tt ? /* @__PURE__ */ n.jsx(
    La,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => kn(!1)
    }
  ) : void 0, ac = Y.useMemo(() => {
    if (!aa || !ie) return null;
    if (le)
      return le({
        item: ie,
        detailActive: Ae,
        context: As,
        backLink: oa,
        defaultHeading: sa
      });
    const he = ie && ue ? typeof ue == "function" ? ue(ie) : ue : null;
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
            la || oa,
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
                  sa,
                  he && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: he })
                ]
              }
            )
          ]
        }
      ),
      ia && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: ia })
    ] });
  }, [
    aa,
    ie,
    le,
    Ae,
    As,
    oa,
    la,
    sa,
    ia,
    ue
  ]);
  Y.useEffect(() => {
    if (!_) return;
    const he = J === "three-column";
    let Se = !1;
    const xe = () => {
      Se || (V.selectedId !== we && V.setSelectedId(we), V.drilledIn !== he && V.setDrilledIn(he));
    };
    if (p && p > 0) {
      const De = setTimeout(xe, p);
      return () => {
        Se = !0, clearTimeout(De);
      };
    } else
      xe();
  }, [_, V, we, J, p]), Y.useEffect(() => {
    if (!_) return;
    const he = () => {
      const Se = new URLSearchParams(window.location.search), xe = Se.get(C);
      Se.get(k), pe(xe === null ? void 0 : xe);
    };
    return window.addEventListener("popstate", he), () => window.removeEventListener("popstate", he);
  }, [
    _,
    C,
    k,
    d,
    l
  ]);
  const Yn = Y.useRef(0), Ct = Y.useRef(
    null
  ), cn = Y.useCallback(
    (he, Se) => {
      he !== we && (r === void 0 && pe(he), s?.(he, Se));
    },
    [r, s, we]
  );
  Y.useEffect(() => {
    if (!D && Ae && Q.current) {
      const he = setTimeout(() => Q.current?.focus(), 30);
      return () => clearTimeout(he);
    }
  }, [Ae, we, D]);
  const st = Y.useRef(null), [Xe, Cn] = Y.useState(
    () => P === "first" ? 0 : -1
  );
  Y.useEffect(() => {
    if (Xe < 0 || !st.current) return;
    const Se = Array.from(
      st.current.querySelectorAll("[data-nav-item]")
    )[Xe];
    if (Se) {
      document.activeElement !== Se && Se.focus(), Yn.current = Xe;
      const xe = t[Xe];
      T?.(
        xe ? h(xe) : void 0,
        xe,
        Xe
      );
    }
  }, [Xe, t, T, h]);
  const sc = (he) => {
    const Se = g === "vertical" ? "ArrowDown" : "ArrowRight", xe = g === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (he.key === "ArrowRight" && g === "vertical") {
      he.preventDefault(), tt ? (se("secondary"), setTimeout(() => {
        L.current?.focus();
      }, 10)) : (se("content"), setTimeout(() => {
        Q.current?.focus();
      }, 10));
      return;
    }
    if (he.key === Se)
      he.preventDefault(), Cn((De) => Math.min(t.length - 1, De + 1));
    else if (he.key === xe)
      he.preventDefault(), Cn((De) => Math.max(0, De - 1));
    else if (he.key === "Home")
      he.preventDefault(), Cn(0);
    else if (he.key === "End")
      he.preventDefault(), Cn(t.length - 1);
    else if (he.key === "Enter" || he.key === " ") {
      he.preventDefault();
      const De = t[Xe];
      De && !De.disabled && cn(h(De), De);
    } else if (he.key.length === 1 && /[a-z0-9]/i.test(he.key)) {
      Ct.current || (Ct.current = { buffer: "", last: 0 });
      const De = Date.now(), Ye = 700, We = he.key.toLowerCase();
      De - Ct.current.last > Ye ? Ct.current.buffer = We : Ct.current.buffer += We, Ct.current.last = De;
      let Oe = Ct.current.buffer;
      const dn = Oe.split("").every((_t) => _t === Oe[0]), Xt = t.map(
        (_t) => String(_t.label || "").toLowerCase()
      );
      let qn = 0;
      Xe >= 0 && (qn = (Xe + 1) % t.length);
      let Ie;
      const Ue = (_t, Bs) => {
        const Hs = t.length;
        for (let ua = 0; ua < Hs; ua++) {
          const fa = (qn + ua) % Hs;
          if (!t[fa].disabled && Xt[fa].startsWith(_t))
            return fa;
        }
      };
      dn && Oe.length > 1 ? Ie = Ue(Oe[0]) : (Ie = Ue(Oe), Ie === void 0 && Oe.length > 1 && (Ie = Ue(Oe[Oe.length - 1]), Ie !== void 0 && Ct.current && (Ct.current.buffer = Oe[Oe.length - 1]))), Ie !== void 0 && Cn(Ie);
    }
  }, oc = Y.useMemo(() => {
    if (B && (B === "url" || B === "both") && typeof window < "u") {
      const Se = new URLSearchParams(window.location.search).get(z);
      if (Se === "1") return !0;
      if (Se === "0") return !1;
    }
    if (B && (B === "localStorage" || B === "both") && typeof window < "u")
      try {
        const he = window.localStorage.getItem(ae);
        if (he === "1") return !0;
        if (he === "0") return !1;
      } catch {
      }
    return S;
  }, [
    B,
    S,
    ae,
    z
  ]), [vt, ic] = Y.useState(oc);
  Y.useEffect(() => {
    $?.(vt);
  }, [vt, $]);
  const lc = Y.useCallback(() => {
    E && b && ic((he) => !he);
  }, [E, b]);
  Y.useEffect(() => {
    if (B && !(typeof window > "u")) {
      if (B === "localStorage" || B === "both")
        try {
          window.localStorage.setItem(
            ae,
            vt ? "1" : "0"
          );
        } catch {
        }
      if (B === "url" || B === "both") {
        const he = new URLSearchParams(window.location.search);
        he.set(z, vt ? "1" : "0");
        const Se = `${window.location.pathname}?${he.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", Se);
      }
    }
  }, [
    vt,
    B,
    ae,
    z
  ]);
  const cc = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Ae ? "nhs-navigation-split-view--detail-active" : "",
    J === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    b && E && vt ? "nhs-navigation-split-view--nav-collapsed" : "",
    v
  ].filter(Boolean).join(" "), ca = Y.useRef(null);
  Y.useEffect(() => {
    if (!A && ca.current) {
      const he = ie ? `Selected ${ie.label}` : "Selection cleared";
      ca.current.textContent = he;
    }
  }, [ie, A]), Y.useEffect(() => {
    !Ae && we == null && st.current && st.current.querySelectorAll("[data-nav-item]")[Yn.current]?.focus();
  }, [Ae, we]);
  const Ut = J === "three-column", [da, dc] = Y.useState(!1);
  Y.useEffect(() => {
    Ut && !da && dc(!0);
  }, [Ut, da]);
  const Rs = Y.useRef(Ut);
  Y.useEffect(() => {
    Rs.current !== Ut && (I?.(Ut), Rs.current = Ut);
  }, [Ut, I]);
  const uc = () => {
    if (J === "cards")
      return /* @__PURE__ */ n.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": we ? String(we) : void 0,
          children: [
            t.map((xe) => {
              const De = h(xe), Ye = De === we;
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
                      onClick: () => !xe.disabled && cn(De, xe),
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
    const he = "nsv-nav-instructions", Se = Y.useMemo(() => Y.memo(
      ({
        item: xe,
        idx: De,
        selected: Ye,
        focused: We
      }) => {
        const Oe = h(xe), dn = xe.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: We ? 0 : -1,
          onClick: () => {
            Yn.current = De, cn(Oe, xe);
          },
          onKeyDown: (Xt) => {
            (Xt.key === "Enter" || Xt.key === " ") && (Xt.preventDefault(), Yn.current = De, cn(Oe, xe));
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
            ...dn,
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
    ), [h, cn, o]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: st,
          className: "nhs-navigation-split-view__list",
          onKeyDown: sc,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": he,
          "aria-activedescendant": we ? String(we) : void 0,
          children: [
            t.map((xe, De) => /* @__PURE__ */ n.jsx(
              Se,
              {
                item: xe,
                idx: De,
                selected: h(xe) === we,
                focused: De === Xe || Xe === -1 && De === 0 && P === "first",
                "data-just-selected": h(xe) === q ? "true" : void 0
              },
              h(xe)
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
          id: he,
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
      className: cc,
      "aria-label": w?.rootLabel,
      "data-layout": J,
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
                  "data-collapsed": vt || void 0,
                  tabIndex: 0,
                  children: [
                    b && E && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: lc,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": vt ? te : U,
                        title: vt ? te : U,
                        children: vt ? R || /* @__PURE__ */ n.jsx(kh, {}) : W || /* @__PURE__ */ n.jsx(Sh, {})
                      }
                    ) }),
                    /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: uc() }),
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
                    aa && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: ac }),
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
              J === "three-column" && (!M || da) || tt && !Qe ? /* @__PURE__ */ n.jsx(
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
                                  la,
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
                        ie && Z && /* @__PURE__ */ n.jsx(
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
            ref: ca,
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
            children: Ut ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
Ch.displayName = "NavigationSplitView";
const Fo = (e, t, r, a) => e == null || Number.isNaN(e) ? a : Math.min(r, Math.max(t, e)), jh = ({ item: e, maxLines: t, enableDrilldown: r, onExpand: a, isActive: s, topLaneIndex: o }) => {
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
}, Nh = pc(({
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
  const [u, f] = Le(() => /* @__PURE__ */ new Set()), [m, y] = Le(() => /* @__PURE__ */ new Set()), w = Ee(/* @__PURE__ */ new Set()), v = ge((p) => u.has(p), [u]), h = ge((p) => {
    f((M) => {
      const N = new Set(M);
      return N.has(p.id) ? (N.delete(p.id), y((b) => {
        const S = new Set(b);
        return S.add(p.id), S;
      }), setTimeout(() => y((b) => {
        const S = new Set(b);
        return S.delete(p.id), S;
      }), 240), l?.(p.id, !1)) : (N.add(p.id), l?.(p.id, !0)), N;
    });
  }, [l]);
  mc(() => {
    if (d !== "inline" || !i) return;
    const p = [];
    if (u.forEach((S) => {
      w.current.has(S) || p.push(S);
    }), w.current = new Set(u), !p.length) return;
    const M = typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches, N = p.map((S) => `.nhsuk-product-roadmap__inline-children[data-parent="${S}"] .nhsuk-product-roadmap__inline-child`).join(","), b = Array.from(document.querySelectorAll(N));
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
  }, [u]), F = be("nhsuk-product-roadmap", s), I = Fo(r, 120, 1200, 400), j = Fo(a, 1, 6, 2), P = Me(() => e.map((p) => /* @__PURE__ */ new Date(p + " 01")), [e]), D = Me(() => {
    if (P.length === 0) {
      const N = /* @__PURE__ */ new Date();
      return [N, N];
    }
    const p = new Date(P[0]), M = Rn.offset(new Date(P[P.length - 1]), 1);
    return [p, M];
  }, [P]), A = Me(() => Ds().domain(D).range([0, P.length * I]), [D, P.length, I]), T = ge((p) => {
    if (p.startDate) {
      const U = new Date(p.startDate), R = new Date(p.endDate ?? p.startDate);
      R < U && R.setTime(U.getTime());
      const W = A(U), B = Rn.offset(new Date(R), 1);
      let ae = A(B);
      Number.isFinite(ae) || (ae = W + I);
      const z = Math.max(I * 0.25, ae - W), fe = W / I, ve = z / I;
      return { ...p, _pxLeft: W, _pxWidth: z, _startFraction: fe, _spanColumns: ve };
    }
    const M = p.date ?? 1, N = p.dateOffset ?? 0, b = p.length ?? 1, S = p.partialLength ?? 1, $ = M - 1 + N, te = b - 1 + S;
    return { ...p, _pxLeft: $ * I, _pxWidth: te * I, _startFraction: $, _spanColumns: te };
  }, [A, I]), _ = Me(() => t.map((p) => {
    const N = p.roadmapItems.map((S) => {
      const $ = !S.childItems && S.children ? { ...S, childItems: S.children } : { ...S };
      return T($);
    }).sort((S, $) => S._pxLeft !== $._pxLeft ? S._pxLeft - $._pxLeft : $._pxWidth - S._pxWidth), b = [];
    return N.forEach((S) => {
      const $ = S._pxLeft, te = S._pxLeft + S._pxWidth;
      let U = b.findIndex((R) => R <= $);
      U === -1 && (U = b.length, b.push(0)), b[U] = te, S.verticalPosition = U + 1;
    }), { ...p, roadmapItems: N, _laneCount: b.length };
  }), [t, T]), C = Me(() => _.map((p) => p._laneCount || 1), [_]), k = Me(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
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
          e.map((p, M) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": M + 2, children: p }, `${p}-${M}`))
        ] }),
        _.map((p, M) => {
          const N = M + 2, b = C[M];
          let S, $ = 0, te = [];
          i && d === "inline" && (te = p.roadmapItems.filter((B) => v(B.id) && B.childItems && B.childItems.length).map((B) => ({ id: B.id, lane: B.verticalPosition || 1, count: B.childItems.length })).sort((B, ae) => B.lane - ae.lane), $ = te.reduce((B, ae) => B + ae.count, 0));
          const U = b + $;
          S = `calc((${U} * var(--roadmap-item-block-height)) + (max(0, ${U} - 1) * var(--roadmap-row-gap)))`;
          const R = {};
          let W = 0;
          return te.forEach((B) => {
            W += B.count, R[B.lane + 1] = W;
          }), /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": N, children: [
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: p.heading }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: S }, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: p.roadmapItems.map((B, ae) => {
              const z = (B.verticalPosition || 1) - 1, fe = te.filter((Z) => Z.lane - 1 < z).reduce((Z, ee) => Z + ee.count, 0), ve = z + fe, le = v(B.id), ue = m.has(B.id);
              return /* @__PURE__ */ n.jsxs(ft.Fragment, { children: [
                /* @__PURE__ */ n.jsx(jh, { item: B, maxLines: j, enableDrilldown: i, onExpand: h, isActive: le, topLaneIndex: ve, laneOffset: fe }),
                i && d === "inline" && (le || ue) && B.childItems && /* @__PURE__ */ n.jsx("div", { "data-parent": B.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${B.title} child tasks`, children: B.childItems.map((Z, ee) => {
                  const de = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let x = B._pxLeft, E = B._pxWidth;
                  if (Z.startDate) {
                    const V = new Date(Z.startDate);
                    let ne = Z.endDate ? new Date(Z.endDate) : new Date(V);
                    ne < V && (ne = new Date(V));
                    const pe = new Date(ne);
                    pe.setDate(pe.getDate() + 1);
                    const we = A(V);
                    let ie = A(pe);
                    (!Number.isFinite(ie) || ie <= we) && (ie = we + 6), x = we, E = Math.max(6, ie - we);
                  }
                  const J = ve + 1 + ee;
                  return /* @__PURE__ */ n.jsxs(
                    "div",
                    {
                      className: be("nhsuk-product-roadmap__inline-child", Z.status && `nhsuk-product-roadmap__inline-child--status-${Z.status}`, !le && ue && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${x}px`, width: `${E}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${J})`, height: de, opacity: le ? 0 : void 0, transform: le ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: Z.title })
                      ]
                    },
                    Z.id ?? ee
                  );
                }) })
              ] }, B.id ?? ae);
            }) }) })
          ] }, `${p.heading}-${M}`);
        }),
        i && d === "overlay" && u.size === 1 && (() => {
          const p = Array.from(u)[0], M = t.flatMap((N) => N.roadmapItems).find((N) => N.id === p);
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
Nh.displayName = "ProductRoadmap";
function Ai(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = Ai(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function xr() {
  for (var e, t, r = 0, a = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = Ai(e)) && (a && (a += " "), a += t);
  return a;
}
function rt(e) {
  return function() {
    return e;
  };
}
const Wa = Math.PI, Oa = 2 * Wa, Jt = 1e-6, Th = Oa - Jt;
function Ri(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Dh(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Ri;
  const r = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let s = 1, o = a.length; s < o; ++s)
      this._ += Math.round(arguments[s] * r) / r + a[s];
  };
}
class $h {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Ri : Dh(t);
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
    else if (m > Jt) if (!(Math.abs(f * d - c * u) > Jt) || !o)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let y = a - i, w = s - l, v = d * d + c * c, h = y * y + w * w, g = Math.sqrt(v), F = Math.sqrt(m), I = o * Math.tan((Wa - Math.acos((v + m - h) / (2 * g * F))) / 2), j = I / F, P = I / g;
      Math.abs(j - 1) > Jt && this._append`L${t + j * u},${r + j * f}`, this._append`A${o},${o},0,0,${+(f * y > u * w)},${this._x1 = t + P * d},${this._y1 = r + P * c}`;
    }
  }
  arc(t, r, a, s, o, i) {
    if (t = +t, r = +r, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(s), d = a * Math.sin(s), c = t + l, u = r + d, f = 1 ^ i, m = i ? s - o : o - s;
    this._x1 === null ? this._append`M${c},${u}` : (Math.abs(this._x1 - c) > Jt || Math.abs(this._y1 - u) > Jt) && this._append`L${c},${u}`, a && (m < 0 && (m = m % Oa + Oa), m > Th ? this._append`A${a},${a},0,1,${f},${t - l},${r - d}A${a},${a},0,1,${f},${this._x1 = c},${this._y1 = u}` : m > Jt && this._append`A${a},${a},0,${+(m >= Wa)},${f},${this._x1 = t + a * Math.cos(o)},${this._y1 = r + a * Math.sin(o)}`);
  }
  rect(t, r, a, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${a = +a}v${+s}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function Bi(e) {
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
  }, () => new $h(t);
}
function Hi(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function zi(e) {
  this._context = e;
}
zi.prototype = {
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
function Wi(e) {
  return new zi(e);
}
function Oi(e) {
  return e[0];
}
function Ui(e) {
  return e[1];
}
function Gi(e, t) {
  var r = rt(!0), a = null, s = Wi, o = null, i = Bi(l);
  e = typeof e == "function" ? e : e === void 0 ? Oi : rt(e), t = typeof t == "function" ? t : t === void 0 ? Ui : rt(t);
  function l(d) {
    var c, u = (d = Hi(d)).length, f, m = !1, y;
    for (a == null && (o = s(y = i())), c = 0; c <= u; ++c)
      !(c < u && r(f = d[c], c, d)) === m && ((m = !m) ? o.lineStart() : o.lineEnd()), m && o.point(+e(f, c, d), +t(f, c, d));
    if (y) return o = null, y + "" || null;
  }
  return l.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : rt(+d), l) : e;
  }, l.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : rt(+d), l) : t;
  }, l.defined = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : rt(!!d), l) : r;
  }, l.curve = function(d) {
    return arguments.length ? (s = d, a != null && (o = s(a)), l) : s;
  }, l.context = function(d) {
    return arguments.length ? (d == null ? a = o = null : o = s(a = d), l) : a;
  }, l;
}
function Ua(e, t, r) {
  var a = null, s = rt(!0), o = null, i = Wi, l = null, d = Bi(c);
  e = typeof e == "function" ? e : e === void 0 ? Oi : rt(+e), t = typeof t == "function" ? t : rt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Ui : rt(+r);
  function c(f) {
    var m, y, w, v = (f = Hi(f)).length, h, g = !1, F, I = new Array(v), j = new Array(v);
    for (o == null && (l = i(F = d())), m = 0; m <= v; ++m) {
      if (!(m < v && s(h = f[m], m, f)) === g)
        if (g = !g)
          y = m, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), w = m - 1; w >= y; --w)
            l.point(I[w], j[w]);
          l.lineEnd(), l.areaEnd();
        }
      g && (I[m] = +e(h, m, f), j[m] = +t(h, m, f), l.point(a ? +a(h, m, f) : I[m], r ? +r(h, m, f) : j[m]));
    }
    if (F) return l = null, F + "" || null;
  }
  function u() {
    return Gi().defined(s).curve(i).context(o);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : rt(+f), a = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : rt(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : rt(+f), c) : a;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : rt(+f), r = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : rt(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : rt(+f), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return u().x(e).y(t);
  }, c.lineY1 = function() {
    return u().x(e).y(r);
  }, c.lineX1 = function() {
    return u().x(a).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : rt(!!f), c) : s;
  }, c.curve = function(f) {
    return arguments.length ? (i = f, o != null && (l = i(o)), c) : i;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? o = l = null : l = i(o = f), c) : o;
  }, c;
}
function Po(e) {
  return e < 0 ? -1 : 1;
}
function Eo(e, t, r) {
  var a = e._x1 - e._x0, s = t - e._x1, o = (e._y1 - e._y0) / (a || s < 0 && -0), i = (r - e._y1) / (s || a < 0 && -0), l = (o * s + i * a) / (a + s);
  return (Po(o) + Po(i)) * Math.min(Math.abs(o), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function Ao(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Sa(e, t, r) {
  var a = e._x0, s = e._y0, o = e._x1, i = e._y1, l = (o - a) / 3;
  e._context.bezierCurveTo(a + l, s + l * t, o - l, i - l * r, o, i);
}
function br(e) {
  this._context = e;
}
br.prototype = {
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
        Sa(this, this._t0, Ao(this, this._t0));
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
          this._point = 3, Sa(this, Ao(this, r = Eo(this, e, t)), r);
          break;
        default:
          Sa(this, this._t0, r = Eo(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
Object.create(br.prototype).point = function(e, t) {
  br.prototype.point.call(this, t, e);
};
function yr(e) {
  return new br(e);
}
function Ih(e, t, r) {
  const a = ri(e, t);
  return Ds().domain(a).range(r);
}
function Ro(e, t, r) {
  const [a, s] = ri(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(s)))
    return ur().domain([0, 0]).range(r);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const d = s - a, c = (d > 0 ? d : a) * 0.1;
    i = Math.max(0, a - c), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = s ?? 0;
  return ur().domain([i, l]).nice().range(r);
}
function Ga(e, t, r, a) {
  const s = Gi().x(t).y(r);
  return a?.smooth !== !1 && s.curve(yr), s(e) ?? "";
}
function Mh(e = {}) {
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
const Vi = Y.createContext(null);
function qt() {
  return Y.useContext(Vi);
}
const Lh = ({
  height: e = 240,
  margin: t,
  width: r,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: s,
  role: o = "group",
  ariaLabel: i
}) => {
  const l = Mh(t), d = { height: e, position: "relative" };
  return r !== void 0 && (d.width = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n.jsx("div", { ref: l.ref, className: a, style: d, role: o, "aria-label": i, children: /* @__PURE__ */ n.jsx(Vi.Provider, { value: l, children: s }) });
}, Is = Y.createContext(null), ln = () => Y.useContext(Is), Fh = ({
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
  const u = qt(), f = t ?? u?.innerWidth ?? 0, m = r ?? u?.innerHeight ?? 0, y = Y.useMemo(() => e.flatMap((j) => j.data), [e]), w = Y.useCallback((j) => {
    if (a) return a(j);
    const P = j.x;
    return P instanceof Date ? P : new Date(P);
  }, [a]), v = d ?? 6, h = c ?? 6, g = Y.useMemo(() => Ih(y, w, [v, Math.max(0, f - v)]), [y, w, f, v]), F = Y.useMemo(() => {
    if (l) {
      const j = Ro([], (P) => P.y, [Math.max(0, m - h), h]);
      return j.domain(l), j;
    }
    return Ro(y, (j) => j.y, [Math.max(0, m - h), h]);
  }, [y, m, l]), I = Y.useMemo(() => ({
    xScale: g,
    yScale: F,
    getXTicks: (j = o) => g.ticks(j),
    getYTicks: (j = i) => F.ticks(j)
  }), [g, F, o, i]);
  return /* @__PURE__ */ n.jsx(Is.Provider, { value: I, children: s });
}, Bo = ({
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
  const w = ln(), v = qt(), h = t || (e === "x" ? w?.xScale : w?.yScale), g = r ?? (e === "x" ? 6 : 5), F = typeof s == "function", I = Y.useMemo(() => {
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
  const P = Y.useMemo(() => a && Array.isArray(a) ? a : h ? typeof h.ticks == "function" ? h.ticks(g) : h.domain ? h.domain() : [] : [], [h, g, a]);
  if (e === "x" && !F && !y && P.length && P.every((D) => D instanceof Date)) {
    const D = P[0], A = P[P.length - 1], T = A.getTime() - D.getTime(), _ = 24 * 3600 * 1e3, C = 365 * _, k = D.getFullYear() === A.getFullYear(), p = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (T < 2 * _) {
      const M = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      j = (N) => M.format(N);
    } else if (T < 32 * _)
      j = (M) => {
        const N = M;
        return `${N.getDate()} ${p.format(N)}`;
      };
    else if (T < C && k)
      j = (M) => p.format(M);
    else if (T < 2 * C) {
      const M = /* @__PURE__ */ new Set();
      j = (N) => {
        const b = N, S = b.getMonth();
        return M.has(S) || M.add(S), `${p.format(b)} ${b.getFullYear()}`;
      };
    } else
      j = (M) => String(M.getFullYear());
  }
  if (!h || !v) return null;
  if (e === "x") {
    const D = i ?? v.innerHeight, A = typeof h.bandwidth == "function", T = A ? h.bandwidth() : 0, _ = (p) => {
      const M = h(p);
      return A ? M + T / 2 : M;
    };
    let C = d ?? 0;
    if (u && d == null) {
      const p = P.map((N) => j(N).replace(/\n.*/g, "")), M = p.length ? p.reduce((N, b) => N + b.length, 0) / p.length : 0;
      C = Math.max(12, Math.round(M * 6 + 4));
    }
    const k = Y.useMemo(() => {
      if (a && Array.isArray(a) || C <= 0) return P;
      const p = [];
      let M = -1 / 0;
      for (const N of P) {
        const b = _(N);
        b - M >= C && (p.push(N), M = b);
      }
      return p;
    }, [P, h, C, a, A, T]);
    return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${D})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ n.jsx("line", { x1: 0, x2: v.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      k.map((p, M) => {
        const N = j(p), b = c && N.length > c ? N.slice(0, Math.max(1, c - 1)) + "…" : N, S = m ? b.split(/\n/) : [b.replace(/\n/g, " ")], $ = f < 0 ? "end" : f > 0 ? "start" : "middle";
        return /* @__PURE__ */ n.jsxs("g", { transform: `translate(${_(p)},0)`, children: [
          /* @__PURE__ */ n.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ n.jsxs("text", { y: 9, textAnchor: $, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: f ? `rotate(${f})` : void 0, fontFamily: "inherit", children: [
            S.map((te, U) => /* @__PURE__ */ n.jsx("tspan", { x: 0, dy: U === 0 ? 0 : "1.1em", children: te }, U)),
            b !== N && /* @__PURE__ */ n.jsx("title", { children: N })
          ] })
        ] }, p?.toString?.() || M);
      })
    ] });
  }
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    P.map((D, A) => {
      const T = j(D), _ = c && T.length > c ? T.slice(0, Math.max(1, c - 1)) + "…" : T, C = m ? _.split(/\n/) : [_.replace(/\n/g, " ")];
      return /* @__PURE__ */ n.jsxs("g", { transform: `translate(0,${h(D)})`, children: [
        /* @__PURE__ */ n.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ n.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          C.map((k, p) => /* @__PURE__ */ n.jsx("tspan", { x: -9, dy: p === 0 ? 0 : "1.1em", children: k }, p)),
          _ !== T && /* @__PURE__ */ n.jsx("title", { children: T })
        ] })
      ] }, D?.toString?.() || A);
    }),
    o && /* @__PURE__ */ n.jsx("text", { transform: "rotate(-90)", x: -v.innerHeight / 2, y: -v.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: o })
  ] });
}, Ph = ({
  axis: e = "y",
  tickCount: t,
  stroke: r = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: s
}) => {
  const o = ln(), i = qt();
  if (!o || !i) return null;
  const l = e === "y" ? o.getYTicks(t) : o.getXTicks(t);
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-grid", s].filter(Boolean).join(" "), children: [
    e === "y" && l.map((d, c) => /* @__PURE__ */ n.jsx("line", { x1: 0, x2: i.innerWidth, y1: o.yScale(d), y2: o.yScale(d), stroke: r, strokeDasharray: a }, c)),
    e === "x" && l.map((d, c) => /* @__PURE__ */ n.jsx("line", { y1: 0, y2: i.innerHeight, x1: o.xScale(d), x2: o.xScale(d), stroke: r, strokeDasharray: a }, c))
  ] });
}, Eh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, Gn = {
  color: Eh
}, Ah = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Jr = {
  color: Ah
}, Rh = [
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
let ka = null, Ca = null, ja = null, Yi = "optimized";
function Bh() {
  const e = { color: { ...Jr.color, ...Gn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
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
    return Rh;
  }
}
function Hh() {
  return ka || (ka = Bh()), ka;
}
function zh(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function Na(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Wh(e, t, r) {
  const a = Na(e), s = Na(t), o = Na(r), i = a * 0.4124 + s * 0.3576 + o * 0.1805, l = a * 0.2126 + s * 0.7152 + o * 0.0722, d = a * 0.0193 + s * 0.1192 + o * 0.9505;
  return { x: i * 100, y: l * 100, z: d * 100 };
}
function Oh(e, t, r) {
  let i = e / 95.047, l = t / 100, d = r / 108.883;
  const c = (u) => u > 8856e-6 ? Math.cbrt(u) : 7.787 * u + 16 / 116;
  return i = c(i), l = c(l), d = c(d), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - d) };
}
function qi(e) {
  const t = zh(e);
  if (!t) return null;
  const r = Wh(t.r, t.g, t.b);
  return Oh(r.x, r.y, r.z);
}
function Ho(e, t) {
  const r = e.L - t.L, a = e.a - t.a, s = e.b - t.b;
  return Math.sqrt(r * r + a * a + s * s);
}
function Uh() {
  const e = Hh();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => qi(i));
  let r = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let d = 0, c = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (d += Ho(l, t[f]), c++);
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
          const y = Ho(c, m);
          y < u && (u = y);
        }
      }
      u > l && (l = u, i = d);
    }
    o.push(i), s.delete(i);
  }
  return o.map((i) => e[i]);
}
function Gh() {
  return Ca || (Ca = Uh()), Ca;
}
function Vh(e, t, r) {
  const a = (e + 16) / 116, s = t / 500 + a, o = a - r / 200, i = (u) => {
    const f = u * u * u;
    return f > 8856e-6 ? f : (u - 16 / 116) / 7.787;
  }, l = i(s) * 95.047, d = i(a) * 100, c = i(o) * 108.883;
  return { X: l, Y: d, Z: c };
}
function Yh(e, t, r) {
  e /= 100, t /= 100, r /= 100;
  let a = e * 3.2406 + t * -1.5372 + r * -0.4986, s = e * -0.9689 + t * 1.8758 + r * 0.0415, o = e * 0.0557 + t * -0.204 + r * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), s = Math.min(1, Math.max(0, i(s))), o = Math.min(1, Math.max(0, i(o))), { r: Math.round(a * 255), g: Math.round(s * 255), b: Math.round(o * 255) };
}
function qh(e, t, r) {
  return `#${[e, t, r].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function Xh(e, t) {
  const r = qi(e);
  if (!r) return e;
  const a = Math.min(100, Math.max(0, r.L + t)), { X: s, Y: o, Z: i } = Vh(a, r.a, r.b), l = Yh(s, o, i);
  return qh(l.r, l.g, l.b);
}
function Kh() {
  const e = Gh(), r = [12, -12, 24, -24].map((s) => e.map((o) => Xh(o, s))), a = [...e];
  return r.forEach((s) => a.push(...s)), a;
}
function Jh() {
  return (!ja || Zh()) && (ja = Kh(), Xi = Yi), ja;
}
let Xi = null;
function Zh() {
  return Xi !== Yi;
}
function St(e) {
  const t = Jh();
  return t[e % t.length];
}
let xn = null, Bn = null, Hn = null, zn = null;
function Qh() {
  const e = Gn?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    xn = [];
    for (let o = 1; o <= 12; o++) {
      const i = t[String(o)]?.$value || t[String(o)]?.value;
      xn.push(typeof i == "string" ? i : "#212b32");
    }
    const r = e.region || {};
    Bn = {}, Object.keys(r).forEach((o) => {
      const i = r[o]?.$value || r[o]?.value;
      typeof i == "string" && (Bn[o] = i);
    });
    const a = e.severity || {}, s = e["org-level"] || {};
    zn = {}, Object.keys(s).forEach((o) => {
      const i = s[o]?.$value || s[o]?.value;
      typeof i == "string" && (zn[o] = i);
    }), Hn = {}, Object.keys(a).forEach((o) => {
      const i = a[o]?.$value || a[o]?.value;
      typeof i == "string" && (Hn[o] = i);
    });
  }
}
function Zr() {
  (!xn || !Bn || !Hn || !zn) && Qh();
}
function an(e) {
  return Zr(), xn ? xn[e % xn.length] : "#212b32";
}
function ep(e) {
  return Zr(), Bn ? Bn[e] : void 0;
}
function vr(e, t) {
  return ep(e) || an(t);
}
const Va = ["low", "moderate", "high", "critical"];
let Ta = null;
function tp() {
  const e = { color: { ...Jr.color, ...Gn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, r = {};
  return Va.forEach((a) => {
    const s = t(`color.data-viz.severity.${a}`);
    s && (r[a] = s);
  }), r;
}
function Ki() {
  return Ta || (Ta = tp()), Ta;
}
function np(e) {
  return Ki()[e.toLowerCase()];
}
function rp(e, t) {
  return np(e) || Ki()[Va[t % Va.length]] || St(t);
}
function ap(e) {
  return Zr(), Hn ? Hn[e] : void 0;
}
function sp(e, t) {
  return ap(e) || an(t);
}
const Ya = ["trust", "ambulance", "icb", "region"];
let Da = null;
function op() {
  const e = { color: { ...Jr.color, ...Gn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, r = {};
  return Ya.forEach((a) => {
    const s = t(`color.data-viz.org-level.${a}`);
    s && (r[a] = s);
  }), r;
}
function Ji() {
  return Da || (Da = op()), Da;
}
function ip(e) {
  return Ji()[e.toLowerCase()];
}
function lp(e, t) {
  return ip(e) || Ji()[Ya[t % Ya.length]] || St(t);
}
function cp(e) {
  return Zr(), zn ? zn[e] : void 0;
}
function dp(e, t) {
  return cp(e) || an(t);
}
let $a = null;
const up = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function fp(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function hp() {
  const e = { color: { ...Jr.color, ...Gn.color } }, t = (s, o = /* @__PURE__ */ new Set()) => {
    if (o.has(s)) return;
    o.add(s);
    const i = s.split(".").reduce((d, c) => d ? d[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), o) : typeof l == "string" ? l : void 0;
  }, r = {}, a = [];
  return up.forEach((s) => {
    const o = t(`color.data-viz.region.${s}`);
    o ? r[s] = o : a.push(s);
  }), process.env.NODE_ENV !== "production" && (Object.keys(r).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), r;
}
function pp() {
  return $a || ($a = hp()), $a;
}
function mp(e) {
  return pp()[fp(e)];
}
function bn(e, t) {
  return mp(e) || St(t);
}
const Zi = Y.createContext(null), Vn = () => Y.useContext(Zi), xb = ({
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
  return /* @__PURE__ */ n.jsx(Zi.Provider, { value: c, children: t });
}, Qi = Y.createContext(null), Ot = () => Y.useContext(Qi), gp = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: r = !1
}) => {
  const a = ln(), s = Vn(), [o, i] = Y.useState(null), l = Y.useRef(/* @__PURE__ */ new Map()), [d, c] = Y.useState([]), u = Y.useCallback(
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
      let k = null, p = 1 / 0;
      l.current.forEach((M, N) => {
        M.forEach((b, S) => {
          const $ = _(b.x), te = C(b.y), U = $ - A, R = te - T, W = Math.sqrt(U * U + R * R);
          W < p && (p = W, k = {
            seriesId: N,
            index: S,
            x: b.x,
            y: b.y,
            clientX: $,
            clientY: te
          });
        });
      }), k && p <= t ? i(k) : i(null);
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
      C.forEach((p, M) => {
        (o.x instanceof Date && p.x instanceof Date ? p.x.getTime() === o.x.getTime() : p.x === o.x) && _.push({
          seriesId: k,
          index: M,
          x: p.x,
          y: p.y,
          clientX: A(p.x),
          clientY: T(p.y)
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
      const { xScale: k, yScale: p } = a;
      i({
        seriesId: o.seriesId,
        index: _,
        x: C.x,
        y: C.y,
        clientX: k(C.x),
        clientY: p(C.y)
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
      const k = T[C], p = l.current.get(k);
      if (!p || !a) return;
      const M = Math.min(o.index, p.length - 1), N = p[M], { xScale: b, yScale: S } = a;
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
  ), h = Y.useCallback(() => {
    let A = Array.from(l.current.keys());
    if (s && (A = A.filter((M) => !s.isHidden(M))), A.length === 0) return;
    const T = o ? o.seriesId : A[0], _ = l.current.get(T);
    if (!_ || _.length === 0 || !a) return;
    const C = _[0], { xScale: k, yScale: p } = a;
    i({
      seriesId: T,
      index: 0,
      x: C.x,
      y: C.y,
      clientX: k(C.x),
      clientY: p(C.y)
    });
  }, [o, a, s]), g = Y.useCallback(() => {
    let A = Array.from(l.current.keys());
    if (s && (A = A.filter((N) => !s.isHidden(N))), A.length === 0) return;
    const T = o ? o.seriesId : A[0], _ = l.current.get(T);
    if (!_ || _.length === 0 || !a) return;
    const C = _.length - 1, k = _[C], { xScale: p, yScale: M } = a;
    i({
      seriesId: T,
      index: C,
      x: k.x,
      y: k.y,
      clientX: p(k.x),
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
      focusFirstPoint: h,
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
      h,
      g
    ]
  );
  return /* @__PURE__ */ n.jsx(Qi.Provider, { value: D, children: e });
}, xp = ({
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
  const m = ln();
  if (!m) return null;
  const { xScale: y, yScale: w } = m, h = Vn()?.isHidden(e.id) ?? !1, g = h && l === "fade";
  if (h && l === "remove")
    return null;
  const F = Ot();
  Y.useEffect(() => {
    if (!F) return;
    const T = e.data.map((_) => ({ x: i(_), y: _.y }));
    return F.registerSeries(e.id, T), () => F.unregisterSeries(e.id);
  }, [F, e.id, e.data, i]);
  const I = Y.useMemo(
    () => Ga(
      e.data,
      (T) => y(i(T)),
      (T) => w(T.y),
      { smooth: c }
    ),
    [e.data, y, w, i, c]
  ), j = Y.useMemo(() => {
    if (!e.data.length) return "";
    const [T] = w.domain(), _ = Ua().x((C) => y(i(C))).y0(() => w(T)).y1((C) => w(C.y));
    return c && _.curve(yr), _(e.data) || "";
  }, [e.data, y, w, i, c]), P = f && f[t], D = e.color || P || (r === "region" ? bn(e.id, t) : St(t)), A = r === "region" ? vr(e.id, t) : an(t);
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
          const C = y(i(T)), k = w(T.y), p = s ? 0 : -1, M = !g && (s && _ === o || F?.focused?.seriesId === e.id && F.focused.index === _), N = () => {
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
              tabIndex: g ? -1 : p,
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
}, bp = ({ polite: e = !0, format: t }) => {
  const r = Ot(), [a, s] = Y.useState(""), o = Y.useRef("");
  return Y.useEffect(() => {
    if (!r?.focused) return;
    const { focused: i, aggregated: l } = r;
    let d;
    if (l && l.length > 1) {
      const c = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      d = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      d = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : yp(i.seriesId, i.x, i.y, i.index);
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
function yp(e, t, r, a) {
  const s = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${s}, value ${r}`;
}
const bb = () => {
  const e = Ot(), t = qt();
  if (!e || !t || !e.focused) return null;
  const { focused: r, aggregated: a } = e, { innerWidth: s, innerHeight: o } = t, i = Math.min(Math.max(r.clientX, 0), s), l = Math.min(Math.max(r.clientY, 0), o), d = i + 8, c = l - 8, u = a.length > 1, f = r.x instanceof Date ? r.x.toDateString() : String(r.x), m = u ? f : `${f} • ${r.y}`, y = /\d+$/.exec(r.seriesId || ""), w = y ? parseInt(y[0], 10) - 1 : 0, v = St(w >= 0 ? w : 0) || "#005eb8", h = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ n.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: h, strokeWidth: 3 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: h, strokeWidth: 1.5 }),
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
}, yb = ({
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
  const c = Vn(), u = !!(c && !a && !l && o === void 0), f = a || u, m = e || [], y = o !== void 0, [w, v] = Y.useState(new Set(i)), h = y ? new Set(o) : w, [g, F] = Y.useState(""), I = (j) => {
    if (u && c) {
      const p = c.isHidden(j);
      c.toggle(j);
      const N = m.find((S) => S.id === j)?.label || j, b = d ? d(j, p, N) : `${N} ${p ? "shown" : "hidden"}`;
      F(b);
      return;
    }
    if (!f) return;
    const P = new Set(h), D = P.has(j);
    D ? P.delete(j) : P.add(j), y || v(P);
    const A = m.filter((p) => !P.has(p.id)).map((p) => p.id), T = Array.from(P);
    l?.(A, T);
    const C = m.find((p) => p.id === j)?.label || j, k = d ? d(j, D, C) : `${C} ${D ? "shown" : "hidden"}`;
    F(k);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ n.jsx("ul", { className: `fdp-legend fdp-legend--${r}`, children: m.map((j, P) => {
      const D = j.palette || t, A = j.color || (D === "region" ? bn(j.id, P) : D === "severity" ? rp(j.id, P) : D === "org-level" ? lp(j.id, P) : St(P));
      let T = j.stroke || (D === "region" ? vr(j.id, P) : D === "severity" ? sp(j.id, P) : D === "org-level" ? dp(j.id, P) : an(P));
      if (s && T) {
        const k = T.trim().toLowerCase();
        (k === "#fff" || k === "#ffffff" || k === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(k)) && (T = "#212b32");
      }
      const _ = u && c ? c.isHidden(j.id) : h.has(j.id), C = f ? {
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
}, vb = ({
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
  const f = ln();
  if (!f) return null;
  const { xScale: m, yScale: y } = f, v = Vn()?.isHidden(e.id) ?? !1, h = v && o === "fade";
  if (v && o === "remove") return null;
  const g = Ot();
  Y.useEffect(() => {
    if (!g) return;
    const A = e.data.map((T) => ({ x: a(T), y: T.y }));
    return g.registerSeries(e.id, A), () => g.unregisterSeries(e.id);
  }, [g, e.id, e.data, a]);
  const F = u && u[t], I = e.color || F || (r === "region" ? bn(e.id, t) : St(t)), j = Y.useMemo(() => d && d.length === e.data.length ? Ga(
    e.data,
    (A) => m(a(A)),
    (A) => {
      const T = e.data.indexOf(A);
      return y(d[T].y1);
    },
    { smooth: l }
  ) : Ga(
    e.data,
    (A) => m(a(A)),
    (A) => y(A.y),
    { smooth: l }
  ), [e.data, d, m, y, a, l]), P = Y.useMemo(() => {
    if (d && d.length === e.data.length) {
      const k = Ua().x((p) => m(a(p))).y0((p, M) => y(d[M].y0)).y1((p, M) => y(d[M].y1));
      return l && k.curve(yr), k(e.data) || "";
    }
    const [A, T] = y.domain();
    let _ = i;
    _ < A ? _ = A : _ > T && (_ = T);
    const C = Ua().x((k) => m(a(k))).y0(() => y(_)).y1((k) => y(k.y));
    return l && C.curve(yr), C(e.data) || "";
  }, [e.data, d, m, y, a, i, l]), D = Y.useId();
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: h ? 0.25 : 1,
      "aria-hidden": h ? !0 : void 0,
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
}, _b = ({
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
  minBarWidth: h,
  gradientFill: g = !0,
  gradientStrokeMatch: F = !0,
  opacity: I = 1,
  fadedOpacity: j = 0.25,
  flatFillOpacity: P = 1,
  colors: D
}) => {
  const A = Math.max(0, v), T = ln(), _ = qt();
  if (!T || !_) return null;
  const { xScale: C, yScale: k } = T, M = Vn()?.isHidden(e.id) ?? !1, N = M && f === "fade";
  if (M && f === "remove") return null;
  const b = Ot();
  Y.useEffect(() => {
    if (!b) return;
    const Z = e.data.map((ee) => ({ x: s(ee), y: ee.y }));
    return b.registerSeries(e.id, Z), () => b.unregisterSeries(e.id);
  }, [b, e.id, e.data, s]);
  const S = typeof C.bandwidth == "function", $ = S ? C.bandwidth() : void 0, te = Y.useMemo(() => {
    if ($ != null) return $;
    const Z = y && y.length ? y : [e], ee = [];
    Z.forEach((H) => {
      H.data.forEach((J) => {
        const V = C(s(J));
        Number.isFinite(V) && ee.push(V);
      });
    });
    const de = ee.sort((H, J) => H - J);
    if (de.length <= 1) return 40;
    const x = [];
    for (let H = 1; H < de.length; H++)
      x.push(de[H] - de[H - 1]);
    return x.sort((H, J) => H - J), (x[Math.floor(x.length / 2)] || 40) * i;
  }, [e.data, y, C, s, i, $]), { basePerBar: U } = Y.useMemo(() => {
    if (S) {
      const de = te, x = Math.max(
        1,
        (de - l * (r - 1)) / r
      ), E = e.barWidth ?? d;
      let H = E ? Math.min(E, de) : x;
      if (c) {
        const J = de * Math.min(1, Math.max(0.05, u)), V = Math.max(
          1,
          (J - l * (r - 1)) / r
        );
        H = E ? Math.min(H, V) : V;
      }
      return { basePerBar: H };
    }
    const Z = e.barWidth ?? d, ee = Math.max(
      1,
      (te - l * (r - 1)) / r
    );
    if (c) {
      const de = y && y.length ? y : [e], x = [];
      de.forEach(
        (pe) => pe.data.forEach((we) => {
          const ie = C(s(we));
          Number.isFinite(ie) && x.push(ie);
        })
      ), x.sort((pe, we) => pe - we);
      const E = [];
      for (let pe = 1; pe < x.length; pe++)
        E.push(x[pe] - x[pe - 1]);
      E.sort((pe, we) => pe - we);
      const J = (E[Math.floor(E.length / 2)] || te) * Math.min(1, Math.max(0.05, u)), V = Math.max(
        1,
        (J - l * (r - 1)) / r
      );
      return { basePerBar: Z ? Math.min(Z, V) : V };
    }
    return Z ? { basePerBar: Math.min(Z, ee) } : { basePerBar: ee };
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
    const Z = [];
    return (y && y.length ? y : [e]).forEach(
      (de) => de.data.forEach((x) => {
        const E = C(s(x));
        Number.isFinite(E) && Z.push(E);
      })
    ), Z.sort((de, x) => de - x), Array.from(new Set(Z));
  }, [S, y, e, C, s]), W = Y.useMemo(() => {
    if (S)
      return [];
    if (!R.length) return [];
    if (R.length === 1)
      return [
        { center: R[0], left: 0, right: _.innerWidth }
      ];
    const Z = [];
    for (let ee = 0; ee < R.length; ee++) {
      const de = R[ee], x = ee === 0 ? 0 : (R[ee - 1] + de) / 2, E = ee === R.length - 1 ? _.innerWidth : (de + R[ee + 1]) / 2;
      Z.push({
        center: de,
        left: Math.max(0, x),
        right: Math.min(_.innerWidth, E)
      });
    }
    return Z;
  }, [S, R, _.innerWidth]), B = Y.useMemo(() => {
    if (S || !W.length)
      return;
    const Z = Math.min(1, Math.max(0.05, i)), ee = W.map((J) => Math.max(2, J.right - J.left)), de = ee.map(
      (J) => Math.max(2, Math.min(J - 1, J * Z))
    );
    let x = Math.min(...de);
    if (h)
      if (r <= 1) {
        const J = Math.min(...ee.map((V) => V - 1));
        J >= h && x < h && (x = Math.min(J, h));
      } else {
        const J = Math.min(...ee.map((ne) => ne - 1)), V = h * r + (r - 1) * (h * A);
        V <= J && x < V && (x = V);
      }
    if (r <= 1)
      return h && x < h && ee.every((V) => V >= h) ? { groupWidth: h, barWidth: h } : { groupWidth: x, barWidth: x };
    let E = x / (r + (r - 1) * A);
    return E < 1 && (E = 1), h && E < h && h * r + (r - 1) * (h * A) <= x && (E = h), { groupWidth: E * r + (r - 1) * (E * A), barWidth: E };
  }, [
    S,
    W,
    i,
    r,
    A,
    h
  ]), ae = D && D[t] ? D[t] : void 0, z = e.color || ae || (a === "region" ? bn(e.id, t) : St(t)), fe = a === "region" ? vr(e.id, t) : an(t), ve = F && (e.color || ae) ? z : fe, le = Number.isFinite(k(0)) ? k(0) : k.range()[0], ue = Y.useId();
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
        e.data.map((Z, ee) => {
          const de = s(Z), x = C(S ? Z.x : de);
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
          const J = w[ee], V = k(J.y0), ne = k(J.y1), pe = Math.min(V, ne), we = Math.abs(ne - V) || 1;
          if (!S && h && E < h) {
            const re = W.find(
              (Q) => Math.abs(Q.center - x) < 0.5
            );
            if (re) {
              const Q = Math.max(2, re.right - re.left - 1), L = Math.min(Q, h);
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
              y: J.y1 - J.y0,
              clientX: H + E / 2,
              clientY: pe
            });
          }, G = () => {
            b?.focused?.seriesId === e.id && b.focused.index === ee && b.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: H,
              y: pe,
              width: E,
              height: we,
              fill: g ? `url(#${ue})` : z,
              ...g ? {} : { fillOpacity: P },
              stroke: ie ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : g && F ? z : void 0,
              strokeWidth: ie ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: N || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${J.y1 - J.y0}`,
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
          m === "category" && e.data.map((Z, ee) => {
            const x = D && D[ee] || (a === "region" ? bn(String(Z.x), ee) : St(ee)), E = `${ue}-${ee}`;
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
        e.data.map((Z, ee) => {
          const de = s(Z), x = C(S ? Z.x : de);
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
              H = U, E = x - U / 2, h && H < h && (H = h, E = x - H / 2);
            else {
              const { barWidth: X } = B;
              H = X;
              const O = r > 1 ? X * A : 0, se = H * r + O * (r - 1);
              let me = x - se / 2;
              me < oe.left && (me = oe.left), me + se > oe.right && (me = Math.max(oe.left, oe.right - se)), E = me + t * (H + O);
            }
            if (h && H < h) {
              const X = W.find(
                (O) => Math.abs(O.center - x) < 0.5
              );
              if (X) {
                const O = Math.max(2, X.right - X.left - 1), se = Math.min(O, h);
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
          const J = E + H / 2, V = k(Z.y), ne = Math.min(le, V), pe = Math.abs(le - V), we = !N && b?.focused?.seriesId === e.id && b.focused.index === ee, ie = () => {
            !b || N || b.setFocused({
              seriesId: e.id,
              index: ee,
              x: de,
              y: Z.y,
              clientX: J,
              clientY: V
            });
          }, q = () => {
            b?.focused?.seriesId === e.id && b.focused.index === ee && b.clear();
          }, G = m === "category" && D ? D[ee] : void 0, re = m === "category" ? G || (a === "region" ? bn(String(Z.x), ee) : St(ee)) : z, Q = m === "category" ? `${ue}-${ee}` : ue, L = g && F ? re : m === "category" ? a === "region" ? vr(String(Z.x), ee) : an(ee) : ve, K = we ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : L || re;
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: E,
              y: ne,
              width: H,
              height: pe || 1,
              fill: g ? `url(#${Q})` : re,
              ...g ? {} : { fillOpacity: P },
              stroke: K,
              strokeWidth: we ? 2 : 1,
              className: "fdp-bar",
              tabIndex: N || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${Z.y}`,
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
}, wb = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  paddingInner: a = 0.1,
  paddingOuter: s = 0.05,
  children: o,
  yTickCount: i = 5
}) => {
  const l = qt(), d = t ?? l?.innerWidth ?? 0, c = r ?? l?.innerHeight ?? 0, u = Y.useMemo(() => e.flatMap((h) => h.data), [e]), f = Y.useMemo(() => {
    const h = /* @__PURE__ */ new Set();
    return u.forEach((g) => h.add(g.x)), Array.from(h);
  }, [u]), m = Y.useMemo(
    () => Math.max(0, ...u.map((h) => h.y)),
    [u]
  ), y = Y.useMemo(
    () => si().domain(f).range([0, d]).paddingInner(a).paddingOuter(s),
    [f, d, a, s]
  ), w = Y.useMemo(
    () => ur().domain([0, m]).nice().range([c, 0]),
    [m, c]
  ), v = Y.useMemo(
    () => ({
      xScale: y,
      yScale: w,
      getXTicks: () => f,
      getYTicks: (h = i) => w.ticks(h)
    }),
    [y, w, f, i]
  );
  return /* @__PURE__ */ n.jsx(Is.Provider, { value: v, children: o });
}, Sb = ({
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
      className: xr("fdp-chart fdp-chart--noscript", s),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": xr(u, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ n.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ n.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ n.jsx("p", { id: u, className: "fdp-chart__description", children: t }),
        !m && /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ n.jsx("noscript", { children: /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ n.jsx(Wt, { ...a }) }) }),
          /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ n.jsx(Wt, { ...a }) })
        ] }),
        r && /* @__PURE__ */ n.jsx("figcaption", { className: "fdp-chart__caption", children: r && /* @__PURE__ */ n.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          r
        ] }) })
      ]
    }
  );
}, kb = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: r = 0, children: a }) => {
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
}, Cb = ({
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
  const v = Y.useId(), h = y || v, g = `${h}-label`, F = `${h}-value`, I = `${h}-delta`, j = typeof t == "number" && !Number.isNaN(t), P = c ? "—" : u ? "" : j ? f ? f(t) : t.toLocaleString() : t;
  let D, A = "", T = "";
  if (a && !c && !u) {
    D = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const _ = Math.abs(a.value), C = D === "up" ? `+${_}` : D === "down" ? `-${_}` : "0", k = a.isPercent ? "%" : "";
    if (A = `${C}${k}`, a.ariaLabel)
      T = a.ariaLabel;
    else {
      const p = a.invert ? D === "down" : D === "up";
      T = `${D === "neutral" ? "no change" : D === "up" ? "up" : "down"} ${_}${k}${D === "neutral" ? "" : p ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: xr(
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
              className: xr(
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
var jt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(jt || {}), Ne = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Ne || {}), Ce = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(Ce || {}), ot = /* @__PURE__ */ ((e) => (e.SinglePoint = "single_point", e.TwoSigma = "two_sigma", e.Shift = "shift", e.Trend = "trend", e))(ot || {});
const Ms = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
], zo = Ms.reduce(
  (e, t, r) => (e[t] = r + 1, e),
  {}
), vp = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, _p = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, _r = Ms.reduce(
  (e, t, r) => (e[t] = {
    id: t,
    rank: r + 1,
    label: vp[t],
    category: _p[t],
    participatesInRanking: !0
  }, e),
  {}
);
Ms.map(
  (e) => _r[e]
);
var Je = /* @__PURE__ */ ((e) => (e.Up = "up", e.Down = "down", e))(Je || {}), lt = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(lt || {}), qe = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(qe || {}), ht = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(ht || {}), nr = /* @__PURE__ */ ((e) => (e.Legacy = "legacy", e.DirectionalFirst = "directional_first", e))(nr || {}), el = /* @__PURE__ */ ((e) => (e.None = "none", e.SqlRankingV26a = "sql_ranking_v2_6a", e))(el || {}), xt = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(xt || {}), Ls = /* @__PURE__ */ ((e) => (e.Sql = "sql", e.Conflict = "conflict", e))(Ls || {}), Ln = /* @__PURE__ */ ((e) => (e.ImprovementValueBeforePruning = "improvementValueBeforePruning", e.ConcernValueBeforePruning = "concernValueBeforePruning", e))(Ln || {});
const yn = {
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
function Qr(e) {
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
function ea(e) {
  switch (e) {
    case Ce.Improvement:
      return "Improvement signal";
    case Ce.Concern:
      return "Concern signal";
    case Ce.Neither:
      return "Common cause variation";
    case Ce.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function tl(e) {
  switch (e) {
    case qe.Pass:
      return "Target met";
    case qe.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function wp(e, t, r) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((r - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const bt = {
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
function nl(e) {
  return e ? bt[e]?.token ?? bt.neither.token : bt.neither.token;
}
function Sp(e) {
  return e ? bt[e]?.hex ?? bt.neither.hex : bt.neither.hex;
}
const rl = ({
  engineRows: e,
  limits: t,
  pointDescriber: r,
  measureName: a,
  measureUnit: s,
  dateFormatter: o,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const d = Ot(), c = qt(), [u, f] = Y.useState(null), [m, y] = Y.useState(!1), w = Y.useRef(null);
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
  const v = d && (d.focused || (m ? u : null) || u), [h, g] = Y.useState(!1);
  Y.useEffect(() => {
    const ie = requestAnimationFrame(() => g(!0));
    return () => cancelAnimationFrame(ie);
  }, [v?.index]);
  const F = c?.innerWidth ?? 0, I = c?.innerHeight ?? 0, j = v ? Math.min(Math.max(v.clientX, 0), F) : 0, P = v ? Math.min(Math.max(v.clientY, 0), I) : 0, A = c.ref?.current;
  if (!v)
    return null;
  const T = e?.[v.index], C = Qr(T).map((ie) => ({ id: ie, label: yn[ie].tooltip })), k = v.x instanceof Date ? v.x : new Date(v.x), p = o ? o(k) : k.toDateString(), M = s ? `${s}` : "", N = a || M ? `${v.y}${M ? "" + M : " "}${a ? " " + a : ""}` : `${v.y}`, b = ea(T?.variationIcon), S = tl(T?.assuranceIcon), $ = wp(
    t.mean ?? null,
    t.sigma,
    v.y
  ), te = r ? r(v.index, { x: v.x, y: v.y }) : void 0, U = b || S || $, R = T?.specialCauseTrendUp || T?.specialCauseTrendDown, W = T?.variationIcon === Ce.Neither && R, B = l && W ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, ae = C.length > 0, z = T?.primeDirection, fe = T?.primeRuleId, ve = i && T?.variationIcon === Ce.Neither && ae, le = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", ue = nl(T?.variationIcon), Z = 6.2, de = [
    te || "",
    `${p} • ${N}`
  ].filter(Boolean).reduce(
    (ie, q) => Math.max(ie, q.length * Z + 32),
    0
  ), x = 200, E = 440, H = Math.min(E, Math.max(x, de));
  let J = j + 12, ne = (c.margin?.top ?? 0) + P + 16;
  J + H > F && (J = j - -60 - H), J < 0 && (J = Math.max(0, F - H));
  const pe = v ? `spc-tooltip-${v.index}` : "spc-tooltip", we = A ? gc(
    /* @__PURE__ */ n.jsx(
      "div",
      {
        id: pe,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (h ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: J,
          top: ne,
          width: H,
          maxWidth: E,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": h ? "false" : "true",
        "data-floating": !0,
        "data-placement": J + H + 12 > F ? "left" : "right",
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
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: p })
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
                  const G = String(ie), Q = G === lt.TrendIncreasing || G === lt.TrendDecreasing ? "fdp-spc-tag--trend" : ve ? "fdp-spc-tag--no-judgement" : b ? b.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : b.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
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
let qa = null;
try {
  qa = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const pt = (e, t) => {
  if (!qa) return t;
  const r = e.split(".");
  let a = qa;
  for (const o of r) {
    if (a == null) break;
    a = a[o];
  }
  const s = a;
  return s == null ? t : typeof s == "string" || typeof s == "number" ? String(s) : s.$value != null ? String(s.$value) : s.value != null ? String(s.value) : t;
}, al = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: pt("gradient.stop.start-opacity", "0.12"),
  mid: pt("gradient.stop.mid-opacity", "0.03"),
  end: pt("gradient.stop.end-opacity", "0"),
  triStart: pt(
    "gradient.stop.triangle-start-opacity",
    pt("gradient.stop.start-opacity", "0.12")
  ),
  triMid: pt(
    "gradient.stop.triangle-mid-opacity",
    pt("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: pt(
    "gradient.stop.triangle-end-opacity",
    pt("gradient.stop.end-opacity", "0")
  )
});
var Yt = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(Yt || {});
const kp = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, Cp = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var Ke = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Ke || {}), Te = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Te || {}), ct = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(ct || {}), Fe = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Fe || {});
const jp = (e) => {
  const t = e.replace("#", ""), r = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, s = parseInt(t.slice(4, 6), 16) / 255, o = [r, a, s].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2] < 0.55 ? "#ffffff" : "#212b32";
}, Fs = {
  special_cause_deteriorating: {
    hex: bt.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: bt.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: bt.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: bt.suppressed.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(Fs).forEach((e) => {
  e.text || (e.text = jp(e.hex));
});
const Ps = (e) => Fs[e], ta = (e) => Fs[e].judgement || "none", Wo = {
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
function Np(e, t) {
  let r;
  return e === "common_cause" ? r = Wo.common : r = Wo.special[t === "lower" ? "lower" : "higher"], r.map((a) => ({ ...a }));
}
var nt = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(nt || {}), en = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(en || {}), Wn = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(Wn || {});
const sl = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
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
    [ct.Improving]: Fe.SpecialCauseImproving,
    [ct.Deteriorating]: Fe.SpecialCauseDeteriorating,
    [ct.No_Judgement]: Fe.SpecialCauseNoJudgement,
    [ct.None]: Fe.CommonCause
  }[r.judgement];
  let o;
  return r.judgement === ct.Improving ? o = r.polarity === Ke.LowerIsBetter ? Te.Lower : Te.Higher : r.judgement === ct.Deteriorating ? o = r.polarity === Ke.LowerIsBetter ? Te.Higher : Te.Lower : o = r.trend ?? Te.Higher, { state: s, direction: o, polarity: r.polarity };
};
function Tp(e, t) {
  const { state: r, direction: a, polarity: s } = sl(e), o = ta(r), i = a === Te.Higher ? "above" : "below", l = a === Te.Higher ? "upwards" : "downwards", d = (() => {
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
        case ct.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case ct.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case ct.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case ct.None:
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
const Ia = (e, t, r, a, s, o) => /* @__PURE__ */ n.jsxs("defs", { children: [
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
] }), na = ({
  data: e,
  size: t = 44,
  ariaLabel: r,
  showLetter: a = !0,
  dropShadow: s = !0,
  gradientWash: o = !1,
  variant: i = en.Classic,
  runLength: l = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: d = Wn.Polarity,
  letterOverride: c,
  ...u
}) => {
  const f = rr(), m = rr(), {
    start: y,
    mid: w,
    end: v,
    triStart: h,
    triMid: g,
    triEnd: F
  } = al(), { state: I, direction: j, polarity: P } = Me(
    () => sl(e),
    [e]
  ), D = Me(() => Ps(I), [I]), A = Me(() => ta(I), [I]), T = A === ct.Improving || A === ct.Deteriorating;
  let _ = "";
  a && T && (d === Wn.Polarity ? P === Ke.HigherIsBetter ? _ = "H" : P === Ke.LowerIsBetter ? _ = "L" : _ = "" : _ = j === Te.Higher ? "H" : "L"), c !== void 0 && (_ = c);
  const C = I !== Fe.CommonCause, k = I === Fe.SpecialCauseNoJudgement, p = pt("common-cause", "#A6A6A6"), M = C ? D.hex : p, N = Me(
    () => Np(I, j),
    [I, j]
  ), b = r || `${D.label}${_ ? j === Te.Higher ? " – Higher" : " – Lower" : ""}`, S = Tp(
    e
  );
  if (i === en.TriangleWithRun) {
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
    const z = Math.max(0, Math.min(5, Math.floor(l || 0))), fe = I === Fe.CommonCause ? 160 : j === Te.Higher ? 220 : 70, ve = 10, le = 26, ue = 150 - 2 * le, Z = I === Fe.SpecialCauseImproving ? pt("improvement", "#00B0F0") : I === Fe.SpecialCauseDeteriorating ? pt("concern", "#E46C0A") : p, ee = Array.from({ length: 5 }).map((E, H) => {
      const V = (I === Fe.SpecialCauseImproving || I === Fe.SpecialCauseDeteriorating) && H >= 5 - z ? Z : p;
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
    }), de = Ia(
      D.hex,
      f,
      m,
      s,
      o,
      [
        { offset: "0%", opacity: h },
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
  if (i === en.Triangle) {
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
    const fe = Ia(
      D.hex,
      f,
      m,
      s,
      o,
      [
        { offset: "0%", opacity: h },
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
  const $ = Ia(
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
              stroke: p,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${N.map((te) => `${te.cx} ${te.cy}`).join(" L ")}`
            }
          ),
          N.map((te, U) => {
            const W = U >= N.length - 2 && C ? M : p, B = W;
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
na.displayName = "SPCVariationIcon";
const ra = ({
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
  const c = rr(), u = rr(), { start: f, mid: m, end: y } = al(), w = s || kp[e], v = (i || Cp[e]).slice(0, 2), h = r || `Assurance ${e}`;
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": h,
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
          e === Yt.Fail ? /* @__PURE__ */ n.jsx(
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
          ) : e === Yt.Uncertain ? /* @__PURE__ */ n.jsx(
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
ra.displayName = "SPCAssuranceIcon";
const _e = (e) => typeof e == "number" && Number.isFinite(e), Dp = (e) => e.reduce((t, r) => t + r, 0), kt = (e) => e.length ? Dp(e) / e.length : NaN;
function ol(e, t) {
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
function il(e, t) {
  const r = e.filter((o) => _e(o));
  if (!r.length) return { mrMean: NaN, mrUcl: NaN };
  let a = kt(r), s = 3.267 * a;
  if (t) {
    const o = r.filter((i) => i <= s);
    o.length && o.length !== r.length && (a = kt(o), s = 3.267 * a);
  }
  return { mrMean: a, mrUcl: s };
}
function $p(e, t) {
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
const Ip = 0.2777, Mp = 3.6, Lp = (e) => _e(e) && e >= 0 ? Math.pow(e, Ip) : null, Kt = (e) => _e(e) && e >= 0 ? Math.pow(e, Mp) : null;
function Fp(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
const fn = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function Pp(e) {
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
  const t = 1 / (e + 1), r = (u) => Fp(u, t) - 1, a = r(0.5), s = Math.max(0, r(fn.three.low)), o = r(fn.three.high), i = Math.max(0, r(fn.one.low)), l = r(fn.one.high), d = Math.max(0, r(fn.two.low)), c = r(fn.two.high);
  return { cl: a, lcl: s, ucl: o, oneLow: i, oneHigh: l, twoLow: d, twoHigh: c };
}
function Ep(e, t, r) {
  const a = e.map((T) => _e(T) ? Lp(T) : null), s = ol(a, t), { mrMean: o } = il(s, !!r), i = a.filter((T, _) => !t[_] && _e(T)), l = i.length ? kt(i) : NaN;
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
  const d = 2.66, c = 2 / 3 * d, u = 1 / 3 * d, f = l + d * o, m = l - d * o, y = l + c * o, w = l - c * o, v = l + u * o, h = l - u * o, g = Kt(l), F = Kt(f), I = m <= 0 ? null : Kt(m), j = Kt(v), P = h <= 0 ? null : Kt(h), D = Kt(y), A = w <= 0 ? null : Kt(w);
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
function Ap(e) {
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
function Rp(e, t) {
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
    const h = w > 0 && i(w - 1), g = w > 0 && l(w - 1), F = w > 0 && d(w - 1), I = w > 0 && c(w - 1), j = w > 0 && u(w - 1), P = w > 0 && f(w - 1), D = i(w), A = l(w), T = d(w), _ = c(w), C = u(w), k = f(w), p = [];
    D && !h && p.push({ reason: ht.Shift, index: w }), A && !g && p.push({ reason: ht.Shift, index: w }), T && !F && p.push({ reason: ht.Trend, index: w }), _ && !I && p.push({ reason: ht.Trend, index: w }), C && !j && p.push({ reason: ht.Point, index: w }), k && !P && p.push({ reason: ht.Point, index: w });
    for (const M of p) {
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
      const B = kt(te), ae = kt(U), z = ae - B;
      if (Math.abs(z) < s * W) continue;
      const ve = e.slice(S, $ + 1).filter(
        (x) => x.variationIcon === Ce.Concern
      ).length;
      if (ve > 1) continue;
      const le = (x) => {
        const E = kt(x);
        return x.length ? x.reduce((H, J) => H + (J - E) * (J - E), 0) / x.length : 0;
      }, ue = le(te), Z = le(U);
      let ee = M.reason === ht.Shift ? 90 : M.reason === ht.Trend ? 70 : 60;
      if (Z < ue && (ee += 10), ee -= ve * 15, ee < o) continue;
      const de = m.find((x) => x.index === M.index);
      if (de) {
        const x = (E) => E === ht.Shift ? 3 : E === ht.Trend ? 2 : 1;
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
function Ma() {
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
var Vt = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Vt || {}), ll = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(ll || {}), cl = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(cl || {});
function Bp(e) {
  const t = [], r = [];
  e.specialCauseSinglePointUp && t.push(ot.SinglePoint), e.specialCauseSinglePointDown && r.push(ot.SinglePoint), e.specialCauseTwoOfThreeUp && t.push(ot.TwoSigma), e.specialCauseTwoOfThreeDown && r.push(ot.TwoSigma), e.specialCauseShiftUp && t.push(ot.Shift), e.specialCauseShiftDown && r.push(ot.Shift), e.specialCauseTrendUp && t.push(ot.Trend), e.specialCauseTrendDown && r.push(ot.Trend);
  const a = t.reduce((o, i) => Math.max(o, _r[i].rank), 0), s = r.reduce((o, i) => Math.max(o, _r[i].rank), 0);
  return { upRules: t, downRules: r, upMax: a, downMax: s, hasUp: t.length > 0, hasDown: r.length > 0 };
}
function Hp(e) {
  const t = [];
  let r = [];
  for (const a of e)
    a.baseline && r.length && (t.push(r), r = []), r.push(a);
  return r.length && t.push(r), t;
}
function zp(e, t, r) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const s = e.map((u, f) => ({ idx: f, value: u.value })).filter((u) => _e(u.value));
  if (s.length < a * 2) return;
  const o = r === Ne.Up || r === Ne.Neither, i = r === Ne.Down;
  function l(u, f) {
    const m = s.slice(u, f).map((y) => y.value);
    return m.length ? kt(m) : NaN;
  }
  let d = null;
  if (s.length > 1) {
    const u = [];
    for (let m = 1; m < s.length; m++) u.push(Math.abs(s[m].value - s[m - 1].value));
    const f = kt(u);
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
function dl(e) {
  if (!e) return {};
  const t = e, r = e, a = r.rules ?? {}, s = r.precedence ?? {}, o = r.thresholds ?? {}, i = r.warnings ?? {}, l = r.rareEvent ?? {}, d = r.capability ?? {}, c = r.grace ?? {}, u = r.baselineSuggest ?? {}, f = r.autoRecalc ?? {}, m = c.emergingEnabled ?? r.emergingGraceEnabled ?? t.emergingGraceEnabled ?? t.emergingDirectionGrace, y = a.collapseWeakerClusterRules ?? r.collapseWeakerClusterRules ?? t.collapseWeakerClusterRules ?? t.collapseClusterRules;
  if (Ma()) {
    if (t.emergingDirectionGrace !== void 0)
      throw new Error("[spc][phase4] emergingDirectionGrace is no longer supported. Use settings.grace.emergingEnabled.");
    if (t.collapseClusterRules !== void 0)
      throw new Error("[spc][phase4] collapseClusterRules is no longer supported. Use settings.rules.collapseWeakerClusterRules.");
  }
  const w = globalThis;
  !Ma() && t.emergingDirectionGrace !== void 0 && r.emergingGraceEnabled === void 0 && c.emergingEnabled === void 0 && !w.__spc_warn_emergingDirectionGrace && (w.__spc_warn_emergingDirectionGrace = !0, console.warn("[spc] emergingDirectionGrace is deprecated; use grace.emergingEnabled")), !Ma() && t.collapseClusterRules !== void 0 && a.collapseWeakerClusterRules === void 0 && r.collapseWeakerClusterRules === void 0 && !w.__spc_warn_collapseClusterRules && (w.__spc_warn_collapseClusterRules = !0, console.warn("[spc] collapseClusterRules is deprecated; use rules.collapseWeakerClusterRules"));
  const v = (F) => {
    const I = {};
    for (const j of Object.keys(F)) {
      const P = F[j];
      P !== void 0 && (I[j] = P);
    }
    return I;
  }, h = v({
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
  }), g = { ...h, ...v(t) };
  if (m !== void 0 && (g.emergingGraceEnabled = m, g.grace = { ...g.grace, emergingEnabled: m }), h.collapseWeakerClusterRules !== void 0) {
    const F = h.collapseWeakerClusterRules;
    g.collapseWeakerClusterRules = F, g.rules = { ...g.rules, collapseWeakerClusterRules: F };
  }
  return v(g);
}
function Es(e) {
  const {
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: s = {}
  } = e, o = dl(s), i = {
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
    precedenceStrategy: nr.DirectionalFirst,
    emergingDirectionGrace: !1,
    rules: {},
    grace: {},
    ...o
  };
  if (!Array.isArray(a)) throw new Error("data must be an array of rows");
  const l = a.map((h, g) => ({
    rowId: g + 1,
    x: h.x,
    value: _e(h.value) ? h.value : null,
    ghost: !!h.ghost,
    baseline: !!h.baseline,
    target: _e(h.target) ? h.target : null
  }));
  if (o?.autoRecalculateAfterShift)
    try {
      zp(l, o, r);
    } catch {
    }
  const d = Hp(l), c = [], u = [], m = l.filter(
    (h) => !h.ghost && _e(h.value)
  ).length >= (i.minimumPoints ?? 13);
  let y = 0;
  const w = {};
  for (const h of d) {
    y++;
    const g = h.map((p) => p.value), F = h.map((p) => p.ghost);
    let I = new Array(g.length).fill(null), j = NaN, P = NaN, D = NaN, A = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      I = ol(g, F);
      const p = g.filter(
        (N, b) => !F[b] && _e(N)
      );
      j = p.length ? kt(p) : NaN;
      const M = il(
        I,
        !!i.excludeMovingRangeOutliers
      );
      P = M.mrMean, D = M.mrUcl, A = $p(j, P);
    } else if (t === "T") {
      const p = Ep(
        g,
        F,
        !!i.excludeMovingRangeOutliers
      );
      I = p.mr, P = p.mrMean ?? NaN, D = p.mrUcl ?? NaN, j = p.center ?? NaN, A = {
        upperProcessLimit: p.upperProcessLimit,
        lowerProcessLimit: p.lowerProcessLimit,
        upperTwoSigma: p.upperTwoSigma,
        lowerTwoSigma: p.lowerTwoSigma,
        upperOneSigma: p.upperOneSigma,
        lowerOneSigma: p.lowerOneSigma
      };
    } else if (t === "G") {
      const p = g.filter(
        (b, S) => !F[S] && _e(b)
      ), M = p.length ? kt(p) : NaN, N = Pp(M);
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
    const T = h.map((p, M) => {
      const N = !p.ghost && _e(p.value) ? g.slice(0, M + 1).filter((te, U) => !F[U] && _e(te)).length : 0, b = m, S = b ? A : {
        upperProcessLimit: null,
        lowerProcessLimit: null,
        upperTwoSigma: null,
        lowerTwoSigma: null,
        upperOneSigma: null,
        lowerOneSigma: null
      };
      return {
        rowId: p.rowId,
        x: p.x,
        value: _e(p.value) ? p.value : null,
        ghost: p.ghost,
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
        target: _e(p.target) ? p.target : null,
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
        ghostValue: p.ghost && _e(p.value) ? p.value : null,
        ghostFlag: !!p.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    w[y] = T.filter(
      (p) => !p.ghost && _e(p.value)
    ).length;
    const _ = i.specialCauseShiftPoints ?? 6, C = i.specialCauseTrendPoints ?? 6, k = [];
    for (let p = 0; p < T.length; p++) {
      const M = T[p], N = M.value;
      if (!M.ghost && _e(N) && k.push(p), !(_e(M.mean) && _e(M.upperProcessLimit) && _e(M.lowerProcessLimit)) || M.ghost || !_e(N)) {
        c.push(M);
        continue;
      }
      M.specialCauseSinglePointUp = _e(M.upperProcessLimit) ? N > M.upperProcessLimit : !1, M.specialCauseSinglePointDown = _e(M.lowerProcessLimit) ? N < M.lowerProcessLimit : !1, c.push(M);
    }
    if (k.length) {
      const p = (b) => T[b];
      let M = [], N = [];
      for (const b of k) {
        const S = p(b);
        if (!_e(S.mean) || !_e(S.value)) {
          M = [], N = [];
          continue;
        }
        if (S.value > S.mean ? (M.push(b), N = []) : S.value < S.mean ? (N.push(b), M = []) : (M = [], N = []), M.length >= _)
          for (const $ of M) {
            const te = p($);
            te.specialCauseShiftUp = !0;
          }
        if (N.length >= _)
          for (const $ of N) {
            const te = p($);
            te.specialCauseShiftDown = !0;
          }
      }
      for (let b = 0; b <= k.length - 3; b++) {
        const $ = k.slice(b, b + 3).map(p);
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
          const $ = k.slice(b, b + 5).map(p);
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
        const S = k.slice(b, b + C), $ = S.map(p);
        if (!$.every((R) => _e(R.value))) continue;
        let te = !0, U = !0;
        for (let R = 1; R < $.length && ($[R].value > $[R - 1].value || (te = !1), $[R].value < $[R - 1].value || (U = !1), !(!te && !U)); R++)
          ;
        if (te) for (const R of S) {
          const W = p(R);
          W.specialCauseTrendUp = !0;
        }
        if (U) for (const R of S) {
          const W = p(R);
          W.specialCauseTrendDown = !0;
        }
      }
      if (i.enableFifteenInInnerThirdRule) {
        let b = [];
        for (const S of k) {
          const $ = p(S);
          if (!_e($.value) || !_e($.mean) || !_e($.upperOneSigma) || !_e($.lowerOneSigma)) {
            b = [];
            continue;
          }
          if (!($.value < $.upperOneSigma && $.value > $.lowerOneSigma)) {
            b = [];
            continue;
          }
          if (b.push(S), b.length >= 15) {
            const U = b.map(p), R = U.some((B) => B.value > B.mean), W = U.some((B) => B.value < B.mean);
            if (R && W)
              for (const B of b) p(B).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition)) {
      const p = i.maximumPointsPartition;
      let M = 0;
      for (const N of c.filter((b) => b.partitionId === y))
        !N.ghost && _e(N.value) && M++, M > p && (N.mean = N.upperProcessLimit = N.lowerProcessLimit = null, N.upperTwoSigma = N.lowerTwoSigma = N.upperOneSigma = N.lowerOneSigma = null);
    }
  }
  for (const h of c) {
    if (h.ruleTags && h.ruleTags.length) continue;
    const g = [];
    h.specialCauseShiftUp && g.push(lt.ShiftHigh), h.specialCauseShiftDown && g.push(lt.ShiftLow), h.specialCauseTrendUp && g.push(lt.TrendIncreasing), h.specialCauseTrendDown && g.push(lt.TrendDecreasing), h.specialCauseSinglePointUp && g.push(lt.SinglePointAbove), h.specialCauseSinglePointDown && g.push(lt.SinglePointBelow), h.specialCauseTwoOfThreeUp && g.push(lt.TwoOfThreeAbove), h.specialCauseTwoOfThreeDown && g.push(lt.TwoOfThreeBelow), h.specialCauseFourOfFiveUp && g.push(lt.FourOfFiveAbove), h.specialCauseFourOfFiveDown && g.push(lt.FourOfFiveBelow), h.specialCauseFifteenInnerThird && g.push(lt.FifteenInnerThird), g.length && (h.ruleTags = g);
  }
  for (let h = 0; h < c.length; h++) {
    const g = c[h];
    if (Object.prototype.hasOwnProperty.call(g, Ln.ImprovementValueBeforePruning) || Object.defineProperty(g, Ln.ImprovementValueBeforePruning, {
      get() {
        return g.originalSpecialCauseImprovementValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.prototype.hasOwnProperty.call(g, Ln.ConcernValueBeforePruning) || Object.defineProperty(g, Ln.ConcernValueBeforePruning, {
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
    if (i.precedenceStrategy === nr.DirectionalFirst && (i.grace?.emergingEnabled || i.emergingGraceEnabled || i.emergingDirectionGrace)) {
      const C = i.specialCauseTrendPoints || 6;
      if (C > 1 && !(g.specialCauseTrendUp || g.specialCauseTrendDown)) {
        const k = C - 1, p = [];
        for (let M = h; M >= 0 && p.length < k; M--) {
          const N = c[M];
          !N.ghost && _e(N.value) && N.mean !== null && p.unshift(N);
        }
        if (p.length === k) {
          let M = !0;
          for (let N = 1; N < p.length && M; N++)
            r === Ne.Up ? p[N].value > p[N - 1].value || (M = !1) : r === Ne.Down && p[N].value < p[N - 1].value || (M = !1);
          T = M;
        }
      }
    }
    if (i.precedenceStrategy === nr.DirectionalFirst) {
      const k = r === Ne.Up ? D : r === Ne.Down ? A : !1, p = r === Ne.Up ? A : r === Ne.Down ? D : !1;
      k && !p ? g.variationIcon = Ce.Improvement : p && !k ? g.variationIcon = T ? Ce.Neither : Ce.Concern : k && p ? g.variationIcon = T || g.specialCauseTrendUp || g.specialCauseTrendDown ? Ce.Improvement : Ce.Neither : g.variationIcon = Ce.Neither;
    } else
      r === Ne.Up ? g.variationIcon = D ? Ce.Improvement : A ? Ce.Concern : Ce.Neither : r === Ne.Down ? g.variationIcon = A ? Ce.Improvement : D ? Ce.Concern : Ce.Neither : g.variationIcon = Ce.Neither;
    const _ = D || A;
    if (g.specialCauseImprovementValue = _ && g.variationIcon === Ce.Improvement ? g.value : null, g.specialCauseConcernValue = _ && g.variationIcon === Ce.Concern ? g.value : null, g.specialCauseNeitherValue = _ && g.variationIcon === Ce.Neither ? g.value : null, i.conflictPrecedenceMode === el.SqlRankingV26a && g.specialCauseImprovementValue !== null && g.specialCauseConcernValue !== null) {
      const C = [];
      g.specialCauseSinglePointUp && C.push({ id: ot.SinglePoint, rank: 1, side: Je.Up }), g.specialCauseSinglePointDown && C.push({ id: ot.SinglePoint, rank: 1, side: Je.Down }), g.specialCauseTwoOfThreeUp && C.push({ id: ot.TwoSigma, rank: 2, side: Je.Up }), g.specialCauseTwoOfThreeDown && C.push({ id: ot.TwoSigma, rank: 2, side: Je.Down }), g.specialCauseShiftUp && C.push({ id: ot.Shift, rank: 3, side: Je.Up }), g.specialCauseShiftDown && C.push({ id: ot.Shift, rank: 3, side: Je.Down }), g.specialCauseTrendUp && C.push({ id: ot.Trend, rank: 4, side: Je.Up }), g.specialCauseTrendDown && C.push({ id: ot.Trend, rank: 4, side: Je.Down });
      const k = C.filter((U) => U.side === Je.Up).reduce((U, R) => Math.max(U, R.rank), 0), p = C.filter((U) => U.side === Je.Down).reduce((U, R) => Math.max(U, R.rank), 0);
      let M;
      k > p ? M = xt.Upwards : p > k ? M = xt.Downwards : M = xt.Same;
      const N = g.specialCauseImprovementValue, b = g.specialCauseConcernValue;
      M === xt.Upwards ? r === Ne.Up ? g.specialCauseConcernValue = null : r === Ne.Down && (g.specialCauseImprovementValue = null) : M === xt.Downwards ? r === Ne.Up ? g.specialCauseImprovementValue = null : r === Ne.Down && (g.specialCauseConcernValue = null) : g.variationIcon === Ce.Improvement ? g.specialCauseConcernValue = null : g.variationIcon === Ce.Concern ? g.specialCauseImprovementValue = null : g.specialCauseConcernValue = null, g.specialCauseImprovementValue !== null && g.specialCauseConcernValue === null ? g.variationIcon = Ce.Improvement : g.specialCauseConcernValue !== null && g.specialCauseImprovementValue === null ? g.variationIcon = Ce.Concern : g.specialCauseImprovementValue === null && g.specialCauseConcernValue === null && (g.variationIcon = Ce.Neither);
      const S = g.specialCauseImprovementValue !== null ? Je.Up : g.specialCauseConcernValue !== null ? Je.Down : void 0, $ = S === Je.Up ? k : S === Je.Down ? p : Math.max(k, p), te = C.find((U) => U.rank === $ && (!S || U.side === S));
      g.conflictPrimeDirection = M, g.conflictResolved = !0, g.conflictResolvedRank = $ || void 0, te && (g.conflictResolvedByRuleId = te.id), g.pruningMode = Ls.Conflict, g.originalSpecialCauseImprovementValue = N, g.originalSpecialCauseConcernValue = b;
    }
    {
      const C = l[g.rowId - 1], k = Ap({
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
    const h = l.filter(
      (g) => !g.ghost && _e(g.value)
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
      h.variationIcon === Ce.Improvement && (h.specialCauseSinglePointUp || h.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && h.specialCauseFourOfFiveUp || h.specialCauseShiftUp || h.specialCauseTrendUp) && (h.specialCauseSinglePointDown || h.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && h.specialCauseFourOfFiveDown || h.specialCauseShiftDown || h.specialCauseTrendDown) && u.push({
        code: "variation_conflict_row",
        category: "logic",
        severity: "warning",
        message: `Row ${h.rowId}: simultaneous high/low special-cause signals – variation icon may be ambiguous.`,
        context: { rowId: h.rowId }
      });
  if (i.maximumPoints && Number.isFinite(i.maximumPoints)) {
    const h = i.maximumPoints;
    let g = 0;
    for (const F of c)
      !F.ghost && _e(F.value) && g++, g > h && (F.mean = F.upperProcessLimit = F.lowerProcessLimit = null, F.upperTwoSigma = F.lowerTwoSigma = F.upperOneSigma = F.lowerOneSigma = null);
  }
  if (i.nullValueWarning && (t === jt.XmR || t === jt.G)) {
    const h = l.filter(
      (g) => !g.ghost && (g.value === null || g.value === void 0 || !_e(g.value))
    ).length;
    h && u.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${h} null/missing value(s) excluded from calculations.`,
      context: { nullCount: h }
    });
  }
  if (i.targetSuppressedWarning && (t === jt.T || t === jt.G) && l.some((g) => _e(g.target)) && u.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), i.ghostOnRareEventWarning && (t === jt.T || t === jt.G)) {
    const h = l.filter((g) => g.ghost).length;
    h && u.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${h} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: h }
    });
  }
  if (i.partitionSizeWarnings && Object.entries(w).forEach(([h, g]) => {
    g < i.minimumPointsPartition && u.push({
      code: "insufficient_points_partition",
      category: "partition",
      severity: "warning",
      message: `Partition ${h} has only ${g} non-ghost point(s); below recommended ${i.minimumPointsPartition}.`,
      context: {
        partitionId: Number(h),
        count: g,
        minimum: i.minimumPointsPartition
      }
    });
  }), i.baselineSpecialCauseWarning) {
    const h = [];
    c.forEach((g) => {
      l[g.rowId - 1].baseline && (g.specialCauseSinglePointUp || g.specialCauseSinglePointDown || g.specialCauseTwoOfThreeUp || g.specialCauseTwoOfThreeDown || g.specialCauseFourOfFiveUp || g.specialCauseFourOfFiveDown || g.specialCauseShiftUp || g.specialCauseShiftDown || g.specialCauseTrendUp || g.specialCauseTrendDown) && h.push(g.rowId);
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
  let v;
  if (i.baselineSuggest) {
    const h = i.baselineSuggestStabilityPoints, g = i.baselineSuggestMinGap, F = i.baselineSuggestMinDeltaSigma, I = i.baselineSuggestScoreThreshold;
    v = Rp(
      c.map((P) => ({
        value: P.value,
        partitionId: P.partitionId,
        variationIcon: P.variationIcon,
        mean: P.mean,
        upperProcessLimit: P.upperProcessLimit
      })),
      {
        W: h,
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
function Wp(e, t) {
  const r = Bp(e), a = r.upMax, s = r.downMax, o = r.upRules.map((v) => ({ id: v, rank: zo[v] })), i = r.downRules.map((v) => ({ id: v, rank: zo[v] }));
  let l;
  a > s ? l = xt.Upwards : s > a ? l = xt.Downwards : l = xt.Same;
  const d = a > 0, c = s > 0, u = t === Ne.Up && d || t === Ne.Down && c ? e.value : null, f = t === Ne.Up && c || t === Ne.Down && d ? e.value : null;
  e.sqlOriginalImprovementValue = u, e.sqlOriginalConcernValue = f, u !== null && f !== null && (e.sqlPruned = !0, l === xt.Upwards ? t === Ne.Up || t === Ne.Down && (e.sqlOriginalImprovementValue = null) : l === xt.Downwards ? t === Ne.Up ? e.sqlOriginalImprovementValue = null : Ne.Down : u !== null ? e.sqlOriginalConcernValue = null : f !== null && (e.sqlOriginalImprovementValue = null)), e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = Ce.Improvement : !e.sqlOriginalImprovementValue && e.sqlOriginalConcernValue ? e.variationIcon = Ce.Concern : !e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = Ce.Neither : e.variationIcon = Ce.Improvement, e.primeDirection = l, e.primeRank = Math.max(a, s) || void 0, e.pruningMode = Ls.Sql;
  const w = ((e.variationIcon === Ce.Concern ? t === Ne.Up ? Je.Down : Je.Up : t === Ne.Up ? Je.Up : Je.Down) === Je.Up ? o : i).reduce(
    (v, h) => !v || h.rank > v.rank ? h : v,
    void 0
  );
  w && (e.primeRuleId = w.id);
}
function Op(e) {
  const {
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: s = {}
  } = e, o = Es({
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: {
      ...s
    }
  }), i = o.rows.map((l) => ({ ...l }));
  for (const l of i)
    Wp(l, r);
  return { rows: i, warnings: o.warnings };
}
const Up = ({
  engineRows: e,
  measureName: t,
  measureUnit: r,
  onSignalFocus: a
}) => {
  const s = Ot(), o = s?.focused ?? null, i = o?.index ?? null, l = typeof i == "number" && e ? e[i] : null, d = Y.useMemo(() => l ? Qr(l) : [], [l]), c = Y.useMemo(
    () => Array.from(
      new Set(d.map((v) => yn[v]?.narration).filter(Boolean))
    ),
    [d]
  ), u = l ? ea(l.variationIcon) : null, f = l ? tl(l.assuranceIcon) : null, m = d.length > 0, y = l ? l.variationIcon === Ce.Neither && m : !1, w = Y.useRef(null);
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
                  const h = String(v), F = h === lt.TrendIncreasing || h === lt.TrendDecreasing ? "fdp-spc-tag--trend" : y ? "fdp-spc-tag--no-judgement" : u ? u.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : u.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", I = yn[v]?.tooltip || h;
                  return /* @__PURE__ */ n.jsx(
                    He,
                    {
                      text: I,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${F}`,
                      "data-rule-id": h,
                      title: yn[v]?.tooltip
                    },
                    h
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
let Gp = 0;
const Vp = ({
  data: e,
  ariaLabel: t = "SPC chart",
  height: r = 260,
  showZones: a = !0,
  showPoints: s = !0,
  announceFocus: o = !1,
  className: i,
  unit: l,
  highlightOutOfControl: d = !0,
  chartType: c = jt.XmR,
  metricImprovement: u = Ne.Neither,
  enableRules: f = !0,
  showIcons: m = !1,
  showEmbeddedIcon: y = !0,
  embeddedIconVariant: w = en.Classic,
  embeddedIconRunLength: v,
  targets: h,
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
  trendVisualMode: p = "ungated",
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
      target: h?.[se] ?? void 0,
      baseline: g?.[se] ?? void 0,
      ghost: F?.[se] ?? void 0
    }));
    try {
      const O = I ? { ...I } : void 0;
      return te ? Op({
        chartType: c,
        metricImprovement: u,
        data: X,
        settings: O
      }) : Es({ chartType: c, metricImprovement: u, data: X, settings: O });
    } catch {
      return null;
    }
  }, [
    e,
    h,
    g,
    F,
    c,
    u,
    I,
    te
  ]), le = ve?.rows.slice().reverse().find((X) => X.mean != null), ue = le?.mean ?? null, Z = ve?.warnings || [], ee = Y.useMemo(() => Z.length ? _ ? Z.filter((X) => !(_.severities && X.severity && !_.severities.includes(X.severity) || _.categories && X.category && !_.categories.includes(X.category) || _.codes && !_.codes.includes(X.code))) : Z : [], [Z, _]), [de, x] = Y.useState(""), E = Y.useRef("");
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
        (ce) => ce.severity === Vt.Error
      ).length,
      warning: ee.filter(
        (ce) => ce.severity === Vt.Warning
      ).length,
      info: ee.filter(
        (ce) => ce.severity === Vt.Info
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
  const H = le?.upperProcessLimit ?? null, J = le?.lowerProcessLimit ?? null, V = le?.upperOneSigma ?? null, ne = le?.lowerOneSigma ?? null, pe = le?.upperTwoSigma ?? null, we = le?.lowerTwoSigma ?? null, ie = ue != null && V != null ? Math.abs(V - ue) : 0, q = Y.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), G = Y.useMemo(() => {
    if ($) {
      const ce = e.map((ye) => ye.y), ke = Math.max(100, ...ce), je = Math.min(0, ...ce);
      return [je < 0 ? je : 0, ke > 100 ? ke : 100];
    }
    const O = [...e.map((ce) => ce.y)];
    if ([ue, H, J, V, ne, pe, we].forEach((ce) => {
      ce != null && O.push(ce);
    }), h && h.forEach((ce) => {
      typeof ce == "number" && !isNaN(ce) && O.push(ce);
    }), !O.length) return;
    let se = Math.min(...O), me = Math.max(...O);
    return b && (se = Math.min(0, se)), S && (me = Math.max(100, me)), [se, me];
  }, [e, ue, H, J, V, ne, pe, we, h, b, S, $]), re = Y.useMemo(() => {
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
      const Ze = X[Ve];
      if (Ze && Ze.value != null && !Ze.ghost) {
        me = Ve;
        break;
      }
    }
    if (me === -1) return null;
    const ce = X[me], ke = ce.variationIcon, je = ke, ye = ce.assuranceIcon, $e = je === Ce.Neither && !!ce.specialCauseNeitherValue, Be = ye === qe.Pass ? Yt.Pass : ye === qe.Fail ? Yt.Fail : Yt.Uncertain;
    let Pe;
    if (je === Ce.Suppressed) {
      const Ve = ce.specialCauseSinglePointUp, Ze = ce.specialCauseSinglePointDown;
      u === Ne.Up ? Ve ? Pe = Te.Higher : Ze && (Pe = Te.Lower) : u === Ne.Down ? Ze ? Pe = Te.Lower : Ve && (Pe = Te.Higher) : Pe = Te.Higher;
    } else if (je === Ce.Neither && $e) {
      const Ve = ce.specialCauseSinglePointUp || ce.specialCauseTwoOfThreeUp || ce.specialCauseFourOfFiveUp || ce.specialCauseShiftUp || ce.specialCauseTrendUp, Ze = ce.specialCauseSinglePointDown || ce.specialCauseTwoOfThreeDown || ce.specialCauseFourOfFiveDown || ce.specialCauseShiftDown || ce.specialCauseTrendDown;
      Ve && !Ze ? Pe = Te.Higher : Ze && !Ve ? Pe = Te.Lower : Pe = Te.Higher;
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
                na,
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
                  letterMode: u === Ne.Neither ? Wn.Direction : Wn.Polarity,
                  size: Ge,
                  variant: w,
                  runLength: w === en.TriangleWithRun ? v : void 0
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
                ra,
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
    h,
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
          Lh,
          {
            height: r,
            ariaLabel: t,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ n.jsx(Fh, { series: q, yDomain: G, children: /* @__PURE__ */ n.jsx(
              Yp,
              {
                series: q,
                showPoints: s,
                announceFocus: o,
                limits: { mean: ue, ucl: H, lcl: J, sigma: ie, onePos: V, oneNeg: ne, twoPos: pe, twoNeg: we },
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
                trendVisualMode: p,
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
                Wt,
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
                    return X.severity === Vt.Error ? O = "red" : X.severity === Vt.Warning ? O = "orange" : X.severity === Vt.Info && (O = "blue"), [
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
}, Yp = ({
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
  metricImprovement: h,
  enableNeutralNoJudgement: g = !0,
  showTrendGatingExplanation: F = !0,
  trendVisualMode: I = "ungated",
  showTrendStartMarkers: j = !1,
  showFirstFavourableCrossMarkers: P = !1,
  showTrendBridgeOverlay: D = !1,
  showSignalsInspector: A = !1,
  onSignalFocus: T
}) => {
  const _ = ln(), C = qt();
  if (!_) return null;
  const { xScale: k, yScale: p } = _, M = Y.useRef(
    "spc-seq-" + ++Gp
  ), N = Ot(), b = e[0]?.data || [], S = Y.useMemo(() => {
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
      const J = E.specialCauseSinglePointUp || E.specialCauseSinglePointDown || E.specialCauseTwoOfThreeUp || E.specialCauseTwoOfThreeDown || E.specialCauseFourOfFiveUp || E.specialCauseFourOfFiveDown || E.specialCauseShiftUp || E.specialCauseShiftDown || E.specialCauseTrendUp || E.specialCauseTrendDown;
      x[H] = {
        variation: E.variationIcon,
        assurance: E.assuranceIcon,
        special: J,
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
    const x = b.map((H, J) => {
      const V = $?.[J];
      if (V?.concern) return nt.Concern;
      if (V?.improvement) return nt.Improvement;
      if (V?.special && V.variation === Ce.Neither) {
        if (I === "ungated" && h && h !== Ne.Neither) {
          if (V.trendUp)
            return h === Ne.Up ? nt.Improvement : nt.Concern;
          if (V.trendDown)
            return h === Ne.Down ? nt.Improvement : nt.Concern;
        }
        if (g) return nt.NoJudgement;
      }
      return nt.Common;
    });
    return v?.includes("Rule Clash") && console.log(
      `[${v}] Raw categories:`,
      x.map((H, J) => `${J}:${H}(${b[J].y})`).join(", ")
    ), x;
  }, [$, b, v, g, I, h]), R = Y.useMemo(() => {
    if (!u || !U.length)
      return [];
    const x = [...U];
    let E = 0;
    for (; E < x.length; ) {
      const V = x[E];
      let ne = E + 1;
      for (; ne < x.length && x[ne] === V; ) ne++;
      ne - E === 1 && V !== nt.Common && (x[E] = nt.Common), E = ne;
    }
    const H = [];
    if (x.length) {
      let V = 0;
      for (let ne = 1; ne <= x.length; ne++)
        if (ne === x.length || x[ne] !== x[V]) {
          const pe = x[V], we = ne - 1, ie = we - V + 1;
          (pe === nt.Common || ie >= 2) && H.push({ start: V, end: we, category: pe }), V = ne;
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
    const H = x <= E, J = H ? "up" : "down", V = H ? x : E, ne = (ie) => h == null || h === Ne.Neither || ie == null || typeof ie.value != "number" || typeof ie.mean != "number" ? !1 : J === "up" ? h === Ne.Up ? ie.value > ie.mean : ie.value < ie.mean : h === Ne.Down ? ie.value < ie.mean : ie.value > ie.mean;
    let pe = null;
    for (let ie = V; ie < i.length; ie++) {
      const q = i[ie];
      if (!(H ? !!q.specialCauseTrendUp : !!q.specialCauseTrendDown)) break;
      if (ne(q)) {
        pe = ie;
        break;
      }
    }
    let we = !1;
    if (pe != null) {
      let ie = 0;
      for (let q = pe; q < i.length; q++) {
        const G = i[q];
        if (!(H ? !!G.specialCauseTrendUp : !!G.specialCauseTrendDown)) break;
        ne(G) && ie++;
      }
      we = ie >= 2;
    }
    return { direction: J, detectedAt: V, firstFavourableCrossAt: pe, persistedAcrossMean: we };
  }, [i, h]), z = Y.useMemo(() => {
    if (!i || !i.length) return null;
    const x = (E) => {
      const H = [];
      let J = null, V = null;
      for (let ne = 0; ne < i.length; ne++) {
        const pe = i[ne], we = typeof pe[E] == "number" ? pe[E] : null;
        if (we == null || isNaN(we)) {
          J !== null && V != null && (H.push({
            x1: W[J],
            x2: W[ne - 1],
            y: p(V)
          }), J = null, V = null);
          continue;
        }
        if (J === null) {
          J = ne, V = we;
          continue;
        }
        V != null && Math.abs(we - V) <= 1e-9 || (V != null && H.push({
          x1: W[J],
          x2: W[ne - 1],
          y: p(V)
        }), J = ne, V = we);
      }
      return J !== null && V != null && H.push({
        x1: W[J],
        x2: W[i.length - 1],
        y: p(V)
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
  }, [i, W, p]), fe = Y.useMemo(() => R.length ? /* @__PURE__ */ n.jsxs("defs", { children: [
    /* @__PURE__ */ n.jsxs("linearGradient", { id: `${M.current}-grad-common`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.28 }),
      /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.12 }),
      /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.045 })
    ] }),
    R.map((x, E) => {
      const H = `${M.current}-grad-${E}`;
      let J, V = 0.28, ne = 0.12, pe = 0.045;
      switch (x.category) {
        case nt.Concern:
          J = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", V = 0.28, ne = 0.12, pe = 0.045;
          break;
        case nt.Improvement:
          J = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", V = 0.26, ne = 0.11, pe = 0.045;
          break;
        case nt.NoJudgement:
          J = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", V = 0.26, ne = 0.11, pe = 0.045;
          break;
        default:
          J = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ n.jsxs("linearGradient", { id: H, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: J, stopOpacity: V }),
        /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: J, stopOpacity: ne }),
        /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: J, stopOpacity: pe })
      ] }, H);
    })
  ] }) : null, [R]), ve = Y.useMemo(() => {
    if (!R.length) return null;
    const [x] = p.domain(), E = p(x), H = R.map((J, V) => {
      const { start: ne, end: pe, category: we } = J;
      if (ne < 0 || pe >= W.length || ne > pe)
        return null;
      const ie = W[ne], q = W[pe];
      let G = "";
      if (we === nt.Common) {
        const re = V > 0 ? R[V - 1] : null, Q = V < R.length - 1 ? R[V + 1] : null, L = re ? W[re.end] : 0, K = re ? p(b[re.end].y) : E, oe = Q ? W[Q.start] : B, X = Q ? p(b[Q.start].y) : E;
        G = `M ${L} ${E}`, G += ` L ${L} ${K}`;
        for (let O = ne; O <= pe; O++)
          G += ` L ${W[O]} ${p(b[O].y)}`;
        G += ` L ${oe} ${X}`, G += ` L ${oe} ${E} Z`;
      } else {
        const re = V > 0 ? R[V - 1] : null, Q = V < R.length - 1 ? R[V + 1] : null, L = re && re.category !== nt.Common, K = Q && Q.category !== nt.Common, oe = p(b[ne].y), X = p(b[pe].y);
        let O = ie, se = q;
        if (L) {
          const me = W[re.end], ce = p(b[re.end].y), ke = b[ne].y - b[re.end].y;
          f === "slope" && ke > 0 ? (G = `M ${me} ${ce} L ${ie} ${oe}`, O = me) : (G = `M ${ie} ${E} L ${ie} ${oe}`, O = ie);
        } else
          G = `M ${ie} ${E} L ${ie} ${oe}`;
        for (let me = ne + 1; me <= pe; me++)
          G += ` L ${W[me]} ${p(b[me].y)}`;
        if (G += ` L ${q} ${X}`, K) {
          const me = W[Q.start], ce = p(b[Q.start].y), ke = b[Q.start].y - b[pe].y;
          (f === "slope" && ke <= 0 || f === "extend") && (G += ` L ${me} ${ce}`, se = me);
        }
        if (G += ` L ${se} ${E}`, G += ` L ${O} ${E} Z`, f === "neutral" && L) {
          const me = W[re.end], ce = p(b[re.end].y), ke = /* @__PURE__ */ n.jsx(
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
  }, [R, W, B, p, b, f]), le = Y.useMemo(() => {
    if (!c?.timeframe && b.length >= 2) {
      const x = b.map((pe) => pe.x instanceof Date ? pe.x : new Date(pe.x)), E = new Date(Math.min(...x.map((pe) => pe.getTime()))), H = new Date(Math.max(...x.map((pe) => pe.getTime()))), J = Math.round((H.getTime() - E.getTime()) / 864e5) || 0;
      if (J < 14)
        return `The chart shows a timeframe of ${J + 1} days`;
      const V = Math.round(J / 7);
      return V < 20 ? `The chart shows a timeframe of ${V} weeks` : `The chart shows a timeframe of ${(H.getFullYear() - E.getFullYear()) * 12 + (H.getMonth() - E.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, b]), ue = (x) => {
    const E = x % 10, H = x % 100;
    return E === 1 && H !== 11 ? `${x}st` : E === 2 && H !== 12 ? `${x}nd` : E === 3 && H !== 13 ? `${x}rd` : `${x}th`;
  }, Z = (x) => `${ue(x.getDate())} ${x.toLocaleString("en-GB", { month: "long" })}, ${x.getFullYear()}`, ee = Y.useCallback(
    ({
      index: x,
      x: E,
      y: H
    }) => {
      const J = i?.[x], V = E instanceof Date ? E : new Date(E), ne = Z(V), pe = c?.measureUnit ? ` ${c.measureUnit}` : "", we = c?.measureName ? ` ${c.measureName}` : "";
      if (!J)
        return `General summary is: ${le ? le + ". " : ""}Point ${x + 1}, ${ne}, ${H}${pe}${we}`;
      const ie = ea(J.variationIcon) || "Variation", q = Qr(J), G = q.length ? ` Rules: ${[...new Set(q.map((Q) => yn[Q].narration))].join("; ")}.` : " No special cause rules.", re = [];
      return c?.measureName && re.push(`Measure: ${c.measureName}.`), c?.datasetContext && re.push(`${c.datasetContext}.`), c?.organisation && re.push(`Organisation: ${c.organisation}.`), c?.additionalNote && re.push(c.additionalNote), [
        "General summary is:",
        ...re,
        `Point ${x + 1} recorded on `,
        ne + ",",
        `with a value of ${H} ${pe}${we}`,
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
  return /* @__PURE__ */ n.jsx(gp, { children: /* @__PURE__ */ n.jsxs(
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
              /* @__PURE__ */ n.jsx(Bo, { type: "x" }),
              /* @__PURE__ */ n.jsx(Bo, { type: "y" }),
              /* @__PURE__ */ n.jsx(Ph, { axis: "y" }),
              fe,
              ve,
              w.map((x, E) => {
                const H = b[x];
                if (!H) return null;
                const J = k(H.x instanceof Date ? H.x : new Date(H.x));
                return /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    x1: J,
                    x2: J,
                    y1: 0,
                    y2: p.range()[0],
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
                    y1: p(te),
                    y2: p(te),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: k.range()[0] - 7,
                    y: p(te) - 5,
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
                const x = ae.detectedAt, E = ae.firstFavourableCrossAt, H = b[x] ? k(b[x].x instanceof Date ? b[x].x : new Date(b[x].x)) : null, J = b[x] ? p(b[x].y) : null, V = E != null && b[E] ? k(b[E].x instanceof Date ? b[E].x : new Date(b[E].x)) : null, ne = E != null && b[E] ? p(b[E].y) : null;
                return /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  D && H != null && J != null && V != null && ne != null && /* @__PURE__ */ n.jsx("line", { x1: H, y1: J, x2: V, y2: ne, stroke: "#888", strokeDasharray: "4 4", strokeWidth: 2, children: /* @__PURE__ */ n.jsx("title", { children: "Trend bridge: start to first favourable-side point" }) }),
                  j && H != null && J != null && /* @__PURE__ */ n.jsx("circle", { cx: H, cy: J, r: 6, fill: "white", stroke: "#555", strokeWidth: 2, children: /* @__PURE__ */ n.jsx("title", { children: "Trend start (run reached N)" }) }),
                  P && V != null && ne != null && /* @__PURE__ */ n.jsx("circle", { cx: V, cy: ne, r: 5, fill: "#555", children: /* @__PURE__ */ n.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ n.jsx(
                xp,
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
                const H = k(x.x instanceof Date ? x.x : new Date(x.x)), J = p(x.y), V = S.has(E), ne = $?.[E], pe = I === "ungated" && !!ne?.special && ne?.variation === Ce.Neither && h != null && h !== Ne.Neither, we = pe && (ne?.trendUp && h === Ne.Up || ne?.trendDown && h === Ne.Down), ie = pe && (ne?.trendUp && h === Ne.Down || ne?.trendDown && h === Ne.Up), q = !!(ne?.improvement || we), G = !!(ne?.concern || ie), re = [
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
                    cy: J,
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
                const J = k(x.x instanceof Date ? x.x : new Date(x.x)), V = p(x.y);
                let ne = V - 10;
                const pe = 12, we = p.range()[0] - 4;
                ne < pe && (ne = Math.min(V + 16, we));
                const ie = k.range()[1], q = Math.min(Math.max(J, 0), ie - 0);
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
                qp,
                {
                  width: k.range()[1],
                  height: p.range()[0]
                }
              ),
              !A && /* @__PURE__ */ n.jsx(
                rl,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: de,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (x) => Z(x),
                  enableNeutralNoJudgement: g,
                  showTrendGatingExplanation: F
                }
              )
            ] })
          }
        ),
        A && /* @__PURE__ */ n.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ n.jsx(
          Up,
          {
            engineRows: i,
            measureName: c?.measureName,
            measureUnit: y || c?.measureUnit,
            onSignalFocus: T
          }
        ) }),
        r && /* @__PURE__ */ n.jsx(
          bp,
          {
            format: (x) => ee({ ...x, x: x.x instanceof Date ? x.x : new Date(x.x) })
          }
        )
      ]
    }
  ) });
}, qp = ({
  width: e,
  height: t
}) => {
  const r = Ot();
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
}, Xp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: Yt,
  Direction: Te,
  MetricPolarity: Ke,
  SPCAssuranceIcon: ra,
  SPCVariationIcon: na,
  VariationJudgement: ct,
  VariationState: Fe,
  getVariationColour: Ps,
  getVariationTrend: ta
}, Symbol.toStringTag, { value: "Module" })), jb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: qe,
  AssuranceResult: Yt,
  BaselineSuggestionReason: ht,
  ChartType: jt,
  Direction: Te,
  Icons: Xp,
  ImprovementDirection: Ne,
  MetricPolarity: Ke,
  RULE_METADATA: _r,
  SPCAssuranceIcon: ra,
  SPCChart: Vp,
  SPCTooltipOverlay: rl,
  SPCVariationIcon: na,
  SpcEmbeddedIconVariant: en,
  SpcWarningCategory: ll,
  SpcWarningCode: cl,
  SpcWarningSeverity: Vt,
  VARIATION_COLOR_TOKENS: bt,
  VariationIcon: Ce,
  VariationJudgement: ct,
  VariationState: Fe,
  buildSpc: Es,
  extractRuleIds: Qr,
  getVariationColorHex: Sp,
  getVariationColorToken: nl,
  getVariationColour: Ps,
  getVariationTrend: ta,
  normaliseSpcSettings: dl,
  ruleGlossary: yn,
  variationLabel: ea
}, Symbol.toStringTag, { value: "Module" })), Kp = "150ms", Jp = "300ms", Zp = "500ms", Qp = "cubic-bezier(0.4, 0, 1, 1)", em = "cubic-bezier(0, 0, 0.2, 1)", tm = "cubic-bezier(0.4, 0, 0.2, 1)", nm = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", rm = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", am = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", sm = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", om = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", im = "1px", lm = "2px", cm = "4px", dm = "4px", um = "4px", fm = "2px", hm = "1px", pm = "0px", mm = "4px", gm = "8px", xm = "12px", ul = "#d8dde0", fl = "#4c6272", hl = "#d8dde0", pl = "#aeb7bd", ml = "#d5281b", gl = "#005eb8", xl = "#ffffff", bl = "#212b32", yl = "#007f3b", vl = "#330072", _l = "#7c2855", wl = "#d5281b", Sl = "#ffeb3b", kl = "#fff9c4", Cl = "#ffb81c", jl = "#ed8b00", Nl = "#00a499", Tl = "#ae2573", Dl = "#4c6272", $l = "#768692", Il = "#aeb7bd", Ml = "#d8dde0", Ll = "#f0f4f5", bm = "#212b32", ym = "#4c6272", vm = "#ffffff", _m = "#212b32", wm = "#005eb8", Sm = "#7c2855", km = "#003087", Cm = "#330072", jm = "#ffeb3b", Nm = "#212b32", Tm = "#d8dde0", Dm = "#ffffff33", $m = "#d5281b", Im = "#4c6272", Mm = "#ffffff", Lm = "#007f3b", Fm = "#ffffff", Pm = "#006530", Em = "#004021", Am = "#004021", Rm = "#00000000", Bm = "#ffffff", Hm = "#005eb8", zm = "#005eb8", Wm = "#d9e5f2", Om = "#c7daf0", Um = "#005eb8", Gm = "#ffffff", Vm = "#212b32", Ym = "#d9dde0", qm = "#b3bcc2", Xm = "#b3bcc2", Km = "#d5281b", Jm = "#aa2016", Zm = "#6a140e", Qm = "#6a140e", eg = "#005eb8", tg = "#004b93", ng = "#002f5c", rg = "#002f5c", ag = "8px", sg = "16px", og = "12px", ig = "16px", lg = "4px", cg = "40px", dg = "4px", ug = "40px", fg = "12px", hg = "16px", pg = "32px", mg = "16px", gg = "20px", xg = "28px", bg = "9px", yg = "2px", vg = "16px", _g = "24px", wg = "8px", Sg = "24px", kg = "16px", Cg = "4px", jg = "4px", Ng = "4px", Tg = "8px", Dg = "4px", $g = "16px", Ig = "#007f3b", Mg = "#006530", Lg = "#004021", Fg = "#d8dde0", Pg = "#ffffff", Eg = "#768692", Ag = "#00000000", Rg = "#ffeb3b", Bg = "#00000000", Hg = "#ffffff", zg = "#d9e5f2", Wg = "#c7daf0", Og = "#005eb8", Ug = "#005eb8", Fl = "8px", Pl = "16px", El = "12px", Al = "16px", Gg = "2px", Vg = "4px", Yg = "4px", qg = "600", Xg = "#ffffff", Kg = "#d8dde0", Jg = "#aeb7bd", Zg = "#f0f4f5", Qg = "#212b32", e0 = "#212b32", t0 = "#005eb8", Rl = "16px", Bl = "32px", Hl = "16px", n0 = "1px", r0 = "4px", a0 = "none", s0 = "0 2px 4px rgba(0, 0, 0, 0.1)", o0 = "#ffffff", i0 = "#ffffff", l0 = "#d8dde0", c0 = "#ffffff", d0 = "#4c6272", u0 = "#ffeb3b", f0 = "#d5281b", h0 = "#aeb7bd", p0 = "#212b32", m0 = "#4c6272", g0 = "#768692", x0 = "#212b32", b0 = "#ffffff", y0 = "600", v0 = "#d5281b", _0 = "600", w0 = "#4c6272", zl = "4px", Wl = "40px", Ol = "40px", Ul = "12px", S0 = "2px", k0 = "4px", C0 = "0px", j0 = "16px", N0 = "18px", T0 = "24px", D0 = "32px", $0 = "34px", I0 = "32px", M0 = "40px", L0 = "48px", F0 = "5.4ex", P0 = "7.2ex", E0 = "9ex", A0 = "10.8ex", R0 = "20ex", B0 = "38ex", H0 = "56ex", z0 = "44px", W0 = "40px", O0 = "1020px", U0 = "100%", G0 = "50%", V0 = "33.333%", Y0 = "25%", q0 = "20%", X0 = "320px", K0 = "641px", J0 = "1025px", Z0 = "1280px", Q0 = "960px", ex = "32px", tx = "16px", nx = "#d5281b", rx = "#d5281b", ax = "#ffffff", sx = "#007f3b", ox = "#007f3b", ix = "#ffffff", lx = "#ffeb3b", cx = "#ffeb3b", dx = "#212b32", ux = "#005eb8", fx = "#005eb8", hx = "#ffffff", px = "#d8dde0", mx = "#aeb7bd", gx = "#768692", xx = "0 4px 0 #004021", bx = "0 4px 0 #005eb8", yx = "0 4px 0 #6a140e", vx = "0 4px 0 #ffeb3b", _x = "none", wx = "0 2px 4px rgba(0, 0, 0, 0.1)", Sx = "4px", kx = "0px", Cx = "solid", jx = "0 0 0 3px #ffeb3b", Nx = "0 0 0 3px #ffeb3b", Tx = "none", Dx = "0 1px 3px rgba(0, 0, 0, 0.12)", $x = "0 2px 6px rgba(0, 0, 0, 0.16)", Ix = "0 4px 12px rgba(0, 0, 0, 0.20)", Gl = "0", Vl = "4px", Yl = "8px", ql = "16px", Xl = "24px", Kl = "32px", Jl = "40px", Zl = "48px", Ql = "56px", ec = "64px", Xa = "0", Ka = "0", Ja = "4px", Za = "4px", Qa = "8px", es = "8px", ts = "8px", ns = "16px", rs = "16px", as = "24px", ss = "24px", os = "32px", is = "32px", ls = "40px", cs = "40px", ds = "48px", us = "48px", fs = "56px", hs = "56px", ps = "64px", wr = "Frutiger W01", Sr = "Arial, Helvetica, sans-serif", kr = "sans-serif", Cr = "400", jr = "600", Nr = "400", Tr = "12px", Dr = "14px", $r = "12pt", Ir = "14px", Mr = "16px", Lr = "12pt", Fr = "16px", Pr = "19px", Er = "13pt", Ar = "19px", Rr = "22px", Br = "15pt", Hr = "22px", zr = "26px", Wr = "17pt", Or = "27px", Ur = "36px", Gr = "20pt", Vr = "33px", Yr = "48px", qr = "24pt", ms = "16px", gs = "24px", Nt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Tt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Dt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, $t = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, It = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Mt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Lt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Ft = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Pt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Et = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Mx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Kp,
  AnimationDurationNormal: Jp,
  AnimationDurationSlow: Zp,
  AnimationEasingBounce: nm,
  AnimationEasingEaseIn: Qp,
  AnimationEasingEaseInOut: tm,
  AnimationEasingEaseOut: em,
  BorderColorCard: hl,
  BorderColorCardHover: pl,
  BorderColorDefault: ul,
  BorderColorError: ml,
  BorderColorForm: fl,
  BorderRadiusLarge: xm,
  BorderRadiusMedium: gm,
  BorderRadiusNone: pm,
  BorderRadiusSmall: mm,
  BorderWidthCardBottom: dm,
  BorderWidthDefault: im,
  BorderWidthFormElement: lm,
  BorderWidthFormElementError: cm,
  BorderWidthPanel: um,
  BorderWidthTableCell: hm,
  BorderWidthTableHeader: fm,
  BreakpointDesktop: J0,
  BreakpointLargeDesktop: Z0,
  BreakpointMobile: X0,
  BreakpointTablet: K0,
  ButtonBorderRadius: Vg,
  ButtonBorderWidth: Gg,
  ButtonPrimaryBackgroundActive: Lg,
  ButtonPrimaryBackgroundDefault: Ig,
  ButtonPrimaryBackgroundDisabled: Fg,
  ButtonPrimaryBackgroundHover: Mg,
  ButtonPrimaryBorderDefault: Ag,
  ButtonPrimaryBorderFocus: Rg,
  ButtonPrimaryTextDefault: Pg,
  ButtonPrimaryTextDisabled: Eg,
  ButtonSecondaryBackgroundActive: Wg,
  ButtonSecondaryBackgroundDefault: Bg,
  ButtonSecondaryBackgroundHover: zg,
  ButtonSecondaryBackgroundSolid: Hg,
  ButtonSecondaryBorderDefault: Ug,
  ButtonSecondaryTextDefault: Og,
  ButtonShadowSize: Yg,
  ButtonSpacingPaddingHorizontalDesktop: Al,
  ButtonSpacingPaddingHorizontalMobile: Pl,
  ButtonSpacingPaddingVerticalDesktop: El,
  ButtonSpacingPaddingVerticalMobile: Fl,
  ButtonTypographyWeight: qg,
  CardBackgroundDefault: Xg,
  CardBorderBottom: Zg,
  CardBorderDefault: Kg,
  CardBorderHover: Jg,
  CardBorderWidthBottom: r0,
  CardBorderWidthDefault: n0,
  CardShadowDefault: a0,
  CardShadowHover: s0,
  CardSpacingHeadingMargin: Hl,
  CardSpacingPaddingDesktop: Bl,
  CardSpacingPaddingMobile: Rl,
  CardTextDescription: e0,
  CardTextHeading: Qg,
  CardTextLink: t0,
  ColorBorderDefault: Tm,
  ColorBorderSecondary: Dm,
  ColorButtonLoginActive: ng,
  ColorButtonLoginBackground: eg,
  ColorButtonLoginHover: tg,
  ColorButtonLoginShadow: rg,
  ColorButtonPrimaryActive: Em,
  ColorButtonPrimaryBackground: Lm,
  ColorButtonPrimaryHover: Pm,
  ColorButtonPrimaryShadow: Am,
  ColorButtonPrimaryText: Fm,
  ColorButtonReverseActive: qm,
  ColorButtonReverseBackground: Gm,
  ColorButtonReverseHover: Ym,
  ColorButtonReverseShadow: Xm,
  ColorButtonReverseText: Vm,
  ColorButtonSecondaryActive: Om,
  ColorButtonSecondaryBackground: Rm,
  ColorButtonSecondaryBackgroundSolid: Bm,
  ColorButtonSecondaryBorder: Hm,
  ColorButtonSecondaryHover: Wm,
  ColorButtonSecondaryShadow: Um,
  ColorButtonSecondaryText: zm,
  ColorButtonWarningActive: Zm,
  ColorButtonWarningBackground: Km,
  ColorButtonWarningHover: Jm,
  ColorButtonWarningShadow: Qm,
  ColorError: $m,
  ColorFocusBackground: jm,
  ColorFocusText: Nm,
  ColorFormBackground: Mm,
  ColorFormBorder: Im,
  ColorGrey1: Dl,
  ColorGrey2: $l,
  ColorGrey3: Il,
  ColorGrey4: Ml,
  ColorGrey5: Ll,
  ColorLinkActive: km,
  ColorLinkDefault: wm,
  ColorLinkHover: Sm,
  ColorLinkVisited: Cm,
  ColorPrimaryBlack: bl,
  ColorPrimaryBlue: gl,
  ColorPrimaryDarkPink: _l,
  ColorPrimaryGreen: yl,
  ColorPrimaryPurple: vl,
  ColorPrimaryRed: wl,
  ColorPrimaryWhite: xl,
  ColorPrimaryYellow: Sl,
  ColorSecondaryAquaGreen: Nl,
  ColorSecondaryOrange: jl,
  ColorSecondaryPaleYellow: kl,
  ColorSecondaryPink: Tl,
  ColorSecondaryWarmYellow: Cl,
  ColorTextPrimary: bm,
  ColorTextPrint: _m,
  ColorTextReverse: vm,
  ColorTextSecondary: ym,
  ComponentBlur: jg,
  ComponentBreadcrumbChevronMarginLeft: bg,
  ComponentBreadcrumbChevronMarginRight: yg,
  ComponentBreadcrumbPaddingTopDesktop: _g,
  ComponentBreadcrumbPaddingTopMobile: vg,
  ComponentButtonPaddingDesktopHorizontal: ig,
  ComponentButtonPaddingDesktopVertical: og,
  ComponentButtonPaddingMobileHorizontal: sg,
  ComponentButtonPaddingMobileVertical: ag,
  ComponentButtonShadowSize: lg,
  ComponentCardHeadingMargin: mg,
  ComponentCardPaddingDesktop: pg,
  ComponentCardPaddingMobile: hg,
  ComponentDetails: Tg,
  ComponentExpander: Dg,
  ComponentFormCheckboxLabelPadding: fg,
  ComponentFormCheckboxSize: ug,
  ComponentFormInputMinHeight: cg,
  ComponentFormInputPadding: dg,
  ComponentLink: Ng,
  ComponentPagination: $g,
  ComponentPanelPaddingDesktop: xg,
  ComponentPanelPaddingMobile: gg,
  ComponentSpread: Cg,
  ComponentSummaryListCellPaddingHorizontal: Sg,
  ComponentSummaryListCellPaddingVertical: wg,
  ComponentSummaryListRowMargin: kg,
  ElevationHigh: Ix,
  ElevationLow: Dx,
  ElevationMedium: $x,
  ElevationNone: Tx,
  FocusOutlineOffset: kx,
  FocusOutlineStyle: Cx,
  FocusOutlineWidth: Sx,
  FocusShadowButton: Nx,
  FocusShadowInput: jx,
  FontFamilyBase: wr,
  FontFamilyFallback: Sr,
  FontFamilyPrint: kr,
  FontLineHeightBase: gs,
  FontSize14Mobile: Tr,
  FontSize14Print: $r,
  FontSize14Tablet: Dr,
  FontSize16Mobile: Ir,
  FontSize16Print: Lr,
  FontSize16Tablet: Mr,
  FontSize19Mobile: Fr,
  FontSize19Print: Er,
  FontSize19Tablet: Pr,
  FontSize22Mobile: Ar,
  FontSize22Print: Br,
  FontSize22Tablet: Rr,
  FontSize26Mobile: Hr,
  FontSize26Print: Wr,
  FontSize26Tablet: zr,
  FontSize36Mobile: Or,
  FontSize36Print: Gr,
  FontSize36Tablet: Ur,
  FontSize48Mobile: Vr,
  FontSize48Print: qr,
  FontSize48Tablet: Yr,
  FontSizeBase: ms,
  FontWeightBold: jr,
  FontWeightLight: Nr,
  FontWeightNormal: Cr,
  FormBorderRadius: C0,
  FormBorderWidthDefault: S0,
  FormBorderWidthError: k0,
  FormErrorTextDefault: v0,
  FormErrorTypographyWeight: _0,
  FormHintTextDefault: w0,
  FormInputBackgroundDefault: o0,
  FormInputBackgroundDisabled: l0,
  FormInputBackgroundError: c0,
  FormInputBackgroundFocus: i0,
  FormInputBorderDefault: d0,
  FormInputBorderDisabled: h0,
  FormInputBorderError: f0,
  FormInputBorderFocus: u0,
  FormInputTextDefault: p0,
  FormInputTextDisabled: g0,
  FormInputTextPlaceholder: m0,
  FormLabelTextDefault: x0,
  FormLabelTextRequired: b0,
  FormLabelTypographyWeight: y0,
  FormSpacingCheckboxLabelPadding: Ul,
  FormSpacingCheckboxSize: Ol,
  FormSpacingInputMinHeight: Wl,
  FormSpacingInputPadding: zl,
  GridGutter: ex,
  GridGutterHalf: tx,
  GridPageWidth: Q0,
  HeadingsNhsukHeadingL: Tt,
  HeadingsNhsukHeadingM: Dt,
  HeadingsNhsukHeadingS: $t,
  HeadingsNhsukHeadingXl: Nt,
  HeadingsNhsukHeadingXs: It,
  LayoutColumnActions: q0,
  LayoutColumnFull: U0,
  LayoutColumnHalf: G0,
  LayoutColumnQuarter: Y0,
  LayoutColumnThird: V0,
  LayoutContainerMaxWidth: O0,
  ParagraphsBody: Mt,
  ParagraphsBodyLarge: Lt,
  ParagraphsBodySmall: Ft,
  ParagraphsLedeText: Pt,
  ParagraphsLedeTextSmall: Et,
  ShadowButtonDefault: xx,
  ShadowButtonFocus: vx,
  ShadowButtonSecondary: bx,
  ShadowButtonWarning: yx,
  ShadowCardDefault: _x,
  ShadowCardHover: wx,
  SizeButtonMinHeightDesktop: W0,
  SizeButtonMinHeightMobile: z0,
  SizeFormControlLarge: L0,
  SizeFormControlMedium: M0,
  SizeFormControlSmall: I0,
  SizeFormInputWidth2xl: B0,
  SizeFormInputWidth3xl: H0,
  SizeFormInputWidthLg: A0,
  SizeFormInputWidthMd: E0,
  SizeFormInputWidthSm: P0,
  SizeFormInputWidthXl: R0,
  SizeFormInputWidthXs: F0,
  SizeIconExtraLarge: D0,
  SizeIconLarge: T0,
  SizeIconMedium: N0,
  SizeIconNhsDefault: $0,
  SizeIconSmall: j0,
  Spacing0: Gl,
  Spacing1: Vl,
  Spacing2: Yl,
  Spacing3: ql,
  Spacing4: Xl,
  Spacing5: Kl,
  Spacing6: Jl,
  Spacing7: Zl,
  Spacing8: Ql,
  Spacing9: ec,
  SpacingResponsive0Mobile: Xa,
  SpacingResponsive0Tablet: Ka,
  SpacingResponsive1Mobile: Ja,
  SpacingResponsive1Tablet: Za,
  SpacingResponsive2Mobile: Qa,
  SpacingResponsive2Tablet: es,
  SpacingResponsive3Mobile: ts,
  SpacingResponsive3Tablet: ns,
  SpacingResponsive4Mobile: rs,
  SpacingResponsive4Tablet: as,
  SpacingResponsive5Mobile: ss,
  SpacingResponsive5Tablet: os,
  SpacingResponsive6Mobile: is,
  SpacingResponsive6Tablet: ls,
  SpacingResponsive7Mobile: cs,
  SpacingResponsive7Tablet: ds,
  SpacingResponsive8Mobile: us,
  SpacingResponsive8Tablet: fs,
  SpacingResponsive9Mobile: hs,
  SpacingResponsive9Tablet: ps,
  StateDisabledBackground: px,
  StateDisabledBorder: mx,
  StateDisabledText: gx,
  StateErrorBackground: nx,
  StateErrorBorder: rx,
  StateErrorText: ax,
  StateInfoBackground: ux,
  StateInfoBorder: fx,
  StateInfoText: hx,
  StateSuccessBackground: sx,
  StateSuccessBorder: ox,
  StateSuccessText: ix,
  StateWarningBackground: lx,
  StateWarningBorder: cx,
  StateWarningText: dx,
  TransitionButtonDefault: rm,
  TransitionButtonShadow: am,
  TransitionCardHover: om,
  TransitionInputFocus: sm
}, Symbol.toStringTag, { value: "Module" })), Nb = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Tb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
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
), Db = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
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
), $b = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
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
), Ib = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
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
), Mb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
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
), Lb = ({
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
), Fb = ({
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
), Pb = ({
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
), Eb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Pt.fontFamily,
      fontWeight: Pt.fontWeight,
      fontSize: Pt.fontSize.mobile,
      lineHeight: Pt.lineHeight,
      marginTop: Pt.marginTop,
      marginBottom: Pt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Ab = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Et.fontFamily,
      fontWeight: Et.fontWeight,
      fontSize: Et.fontSize.mobile,
      lineHeight: Et.lineHeight,
      marginTop: Et.marginTop,
      marginBottom: Et.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Rb = () => Me(() => Mx, []), Bb = () => Me(() => ({
  // Border colors
  BorderColorDefault: ul,
  BorderColorForm: fl,
  BorderColorCard: hl,
  BorderColorCardHover: pl,
  BorderColorError: ml,
  // Primary colors
  ColorPrimaryBlue: gl,
  ColorPrimaryWhite: xl,
  ColorPrimaryBlack: bl,
  ColorPrimaryGreen: yl,
  ColorPrimaryPurple: vl,
  ColorPrimaryDarkPink: _l,
  ColorPrimaryRed: wl,
  ColorPrimaryYellow: Sl,
  // Secondary colors
  ColorSecondaryPaleYellow: kl,
  ColorSecondaryWarmYellow: Cl,
  ColorSecondaryOrange: jl,
  ColorSecondaryAquaGreen: Nl,
  ColorSecondaryPink: Tl,
  // Grey scale
  ColorGrey1: Dl,
  ColorGrey2: $l,
  ColorGrey3: Il,
  ColorGrey4: Ml,
  ColorGrey5: Ll
}), []), Hb = () => Me(() => ({
  Spacing0: Gl,
  Spacing1: Vl,
  Spacing2: Yl,
  Spacing3: ql,
  Spacing4: Xl,
  Spacing5: Kl,
  Spacing6: Jl,
  Spacing7: Zl,
  Spacing8: Ql,
  Spacing9: ec
}), []), zb = () => Me(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Tr,
    Size16: Ir,
    Size19: Fr,
    Size22: Ar,
    Size26: Hr,
    Size36: Or,
    Size48: Vr
  },
  Tablet: {
    Size14: Dr,
    Size16: Mr,
    Size19: Pr,
    Size22: Rr,
    Size26: zr,
    Size36: Ur,
    Size48: Yr
  },
  Print: {
    Size14: $r,
    Size16: Lr,
    Size19: Er,
    Size22: Br,
    Size26: Wr,
    Size36: Gr,
    Size48: qr
  },
  Family: {
    Base: wr,
    Fallback: Sr,
    Print: kr
  },
  Weight: {
    Normal: Cr,
    Bold: jr,
    Light: Nr
  },
  Base: {
    Size: ms,
    LineHeight: gs
  },
  // Backward compatibility - individual exports
  FontFamilyBase: wr,
  FontFamilyFallback: Sr,
  FontFamilyPrint: kr,
  FontWeightNormal: Cr,
  FontWeightBold: jr,
  FontWeightLight: Nr,
  FontSize14Mobile: Tr,
  FontSize14Tablet: Dr,
  FontSize14Print: $r,
  FontSize16Mobile: Ir,
  FontSize16Tablet: Mr,
  FontSize16Print: Lr,
  FontSize19Mobile: Fr,
  FontSize19Tablet: Pr,
  FontSize19Print: Er,
  FontSize22Mobile: Ar,
  FontSize22Tablet: Rr,
  FontSize22Print: Br,
  FontSize26Mobile: Hr,
  FontSize26Tablet: zr,
  FontSize26Print: Wr,
  FontSize36Mobile: Or,
  FontSize36Tablet: Ur,
  FontSize36Print: Gr,
  FontSize48Mobile: Vr,
  FontSize48Tablet: Yr,
  FontSize48Print: qr,
  FontSizeBase: ms,
  FontLineHeightBase: gs
}), []), Wb = () => Me(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Xa,
    Size1: Ja,
    Size2: Qa,
    Size3: ts,
    Size4: rs,
    Size5: ss,
    Size6: is,
    Size7: cs,
    Size8: us,
    Size9: hs
  },
  Tablet: {
    Size0: Ka,
    Size1: Za,
    Size2: es,
    Size3: ns,
    Size4: as,
    Size5: os,
    Size6: ls,
    Size7: ds,
    Size8: fs,
    Size9: ps
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Xa,
  SpacingResponsive0Tablet: Ka,
  SpacingResponsive1Mobile: Ja,
  SpacingResponsive1Tablet: Za,
  SpacingResponsive2Mobile: Qa,
  SpacingResponsive2Tablet: es,
  SpacingResponsive3Mobile: ts,
  SpacingResponsive3Tablet: ns,
  SpacingResponsive4Mobile: rs,
  SpacingResponsive4Tablet: as,
  SpacingResponsive5Mobile: ss,
  SpacingResponsive5Tablet: os,
  SpacingResponsive6Mobile: is,
  SpacingResponsive6Tablet: ls,
  SpacingResponsive7Mobile: cs,
  SpacingResponsive7Tablet: ds,
  SpacingResponsive8Mobile: us,
  SpacingResponsive8Tablet: fs,
  SpacingResponsive9Mobile: hs,
  SpacingResponsive9Tablet: ps
}), []), Ob = () => Me(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Fl,
  ButtonSpacingPaddingHorizontalMobile: Pl,
  ButtonSpacingPaddingVerticalDesktop: El,
  ButtonSpacingPaddingHorizontalDesktop: Al,
  // Card spacing	
  CardSpacingPaddingMobile: Rl,
  CardSpacingPaddingDesktop: Bl,
  CardSpacingHeadingMargin: Hl,
  // Form spacing
  FormSpacingInputPadding: zl,
  FormSpacingInputMinHeight: Wl,
  FormSpacingCheckboxSize: Ol,
  FormSpacingCheckboxLabelPadding: Ul
}), []), Ub = () => Me(() => ({
  xl: Nt,
  l: Tt,
  m: Dt,
  s: $t,
  xs: It
}), []), Gb = () => Me(() => ({
  body: Mt,
  bodyLarge: Lt,
  bodySmall: Ft,
  ledeText: Pt,
  ledeTextSmall: Et
}), []), Vb = () => Me(() => ({
  headings: {
    xl: Nt,
    l: Tt,
    m: Dt,
    s: $t,
    xs: It
  },
  paragraphs: {
    body: Mt,
    bodyLarge: Lt,
    bodySmall: Ft,
    ledeText: Pt,
    ledeTextSmall: Et
  },
  fonts: {
    family: {
      base: wr,
      fallback: Sr,
      print: kr
    },
    weight: {
      normal: Cr,
      bold: jr,
      light: Nr
    },
    sizes: {
      mobile: {
        size14: Tr,
        size16: Ir,
        size19: Fr,
        size22: Ar,
        size26: Hr,
        size36: Or,
        size48: Vr
      },
      tablet: {
        size14: Dr,
        size16: Mr,
        size19: Pr,
        size22: Rr,
        size26: zr,
        size36: Ur,
        size48: Yr
      },
      print: {
        size14: $r,
        size16: Lr,
        size19: Er,
        size22: Br,
        size26: Wr,
        size36: Gr,
        size48: qr
      }
    }
  }
}), []);
function Yb(e = {}) {
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
const tc = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, dt = {
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
function qb(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...tc, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${dt.normal.eot}?#iefix") format("eot"),
       url("${t}${dt.normal.woff2}") format("woff2"),
       url("${t}${dt.normal.woff}") format("woff"),
       url("${t}${dt.normal.ttf}") format("truetype");
  src: url("${t}${dt.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${dt.bold.eot}?#iefix") format("eot"),
       url("${t}${dt.bold.woff2}") format("woff2"),
       url("${t}${dt.bold.woff}") format("woff"),
       url("${t}${dt.bold.ttf}") format("truetype");
  src: url("${t}${dt.bold.eot}");
}`), a.join(`
`);
}
function Xb(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...tc, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${dt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${dt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${dt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${dt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((s) => {
    const o = document.createElement("link");
    o.rel = "preload", o.href = s.href, o.as = s.as, o.type = s.type, o.crossOrigin = "anonymous", document.head.appendChild(o);
  });
}
const Kb = '"Frutiger W01", Arial, Helvetica, sans-serif', Jb = "Arial, Helvetica, sans-serif";
async function Zb() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Sc as Account,
  Ax as ActionLink,
  fb as AdaptiveDataGrid,
  Kp as AnimationDurationFast,
  Jp as AnimationDurationNormal,
  Zp as AnimationDurationSlow,
  nm as AnimationEasingBounce,
  Qp as AnimationEasingEaseIn,
  tm as AnimationEasingEaseInOut,
  em as AnimationEasingEaseOut,
  Ni as AppointmentCard,
  vb as AreaSeriesPrimitive,
  Af as AriaDataGrid,
  Ha as AriaTabsDataGrid,
  fb as AriaTabsDataGridAdaptive,
  Bo as Axis,
  La as BackLink,
  wb as BandScalesProvider,
  _b as BarSeriesPrimitive,
  hl as BorderColorCard,
  pl as BorderColorCardHover,
  ul as BorderColorDefault,
  ml as BorderColorError,
  fl as BorderColorForm,
  xm as BorderRadiusLarge,
  gm as BorderRadiusMedium,
  pm as BorderRadiusNone,
  mm as BorderRadiusSmall,
  dm as BorderWidthCardBottom,
  im as BorderWidthDefault,
  lm as BorderWidthFormElement,
  cm as BorderWidthFormElementError,
  um as BorderWidthPanel,
  hm as BorderWidthTableCell,
  fm as BorderWidthTableHeader,
  _f as Breadcrumb,
  Ec as Breakpoint,
  J0 as BreakpointDesktop,
  Z0 as BreakpointLargeDesktop,
  X0 as BreakpointMobile,
  K0 as BreakpointTablet,
  it as Button,
  Vg as ButtonBorderRadius,
  Gg as ButtonBorderWidth,
  Lg as ButtonPrimaryBackgroundActive,
  Ig as ButtonPrimaryBackgroundDefault,
  Fg as ButtonPrimaryBackgroundDisabled,
  Mg as ButtonPrimaryBackgroundHover,
  Ag as ButtonPrimaryBorderDefault,
  Rg as ButtonPrimaryBorderFocus,
  Pg as ButtonPrimaryTextDefault,
  Eg as ButtonPrimaryTextDisabled,
  Wg as ButtonSecondaryBackgroundActive,
  Bg as ButtonSecondaryBackgroundDefault,
  zg as ButtonSecondaryBackgroundHover,
  Hg as ButtonSecondaryBackgroundSolid,
  Ug as ButtonSecondaryBorderDefault,
  Og as ButtonSecondaryTextDefault,
  Yg as ButtonShadowSize,
  Yo as ButtonSize,
  Al as ButtonSpacingPaddingHorizontalDesktop,
  Pl as ButtonSpacingPaddingHorizontalMobile,
  El as ButtonSpacingPaddingVerticalDesktop,
  Fl as ButtonSpacingPaddingVerticalMobile,
  qg as ButtonTypographyWeight,
  Vo as ButtonVariant,
  wi as Card,
  Xg as CardBackgroundDefault,
  Zg as CardBorderBottom,
  Kg as CardBorderDefault,
  Jg as CardBorderHover,
  r0 as CardBorderWidthBottom,
  n0 as CardBorderWidthDefault,
  eb as CardGroup,
  tb as CardGroupItem,
  a0 as CardShadowDefault,
  s0 as CardShadowHover,
  Hl as CardSpacingHeadingMargin,
  Bl as CardSpacingPaddingDesktop,
  Rl as CardSpacingPaddingMobile,
  e0 as CardTextDescription,
  Qg as CardTextHeading,
  t0 as CardTextLink,
  nb as CareCard,
  Rx as CharacterCount,
  kb as ChartEnhancer,
  Sb as ChartNoScript,
  Lh as ChartRoot,
  Tc as Checkbox,
  Ic as Checkboxes,
  Tm as ColorBorderDefault,
  Dm as ColorBorderSecondary,
  ng as ColorButtonLoginActive,
  eg as ColorButtonLoginBackground,
  tg as ColorButtonLoginHover,
  rg as ColorButtonLoginShadow,
  Em as ColorButtonPrimaryActive,
  Lm as ColorButtonPrimaryBackground,
  Pm as ColorButtonPrimaryHover,
  Am as ColorButtonPrimaryShadow,
  Fm as ColorButtonPrimaryText,
  qm as ColorButtonReverseActive,
  Gm as ColorButtonReverseBackground,
  Ym as ColorButtonReverseHover,
  Xm as ColorButtonReverseShadow,
  Vm as ColorButtonReverseText,
  Om as ColorButtonSecondaryActive,
  Rm as ColorButtonSecondaryBackground,
  Bm as ColorButtonSecondaryBackgroundSolid,
  Hm as ColorButtonSecondaryBorder,
  Wm as ColorButtonSecondaryHover,
  Um as ColorButtonSecondaryShadow,
  zm as ColorButtonSecondaryText,
  Zm as ColorButtonWarningActive,
  Km as ColorButtonWarningBackground,
  Jm as ColorButtonWarningHover,
  Qm as ColorButtonWarningShadow,
  $m as ColorError,
  jm as ColorFocusBackground,
  Nm as ColorFocusText,
  Mm as ColorFormBackground,
  Im as ColorFormBorder,
  Dl as ColorGrey1,
  $l as ColorGrey2,
  Il as ColorGrey3,
  Ml as ColorGrey4,
  Ll as ColorGrey5,
  km as ColorLinkActive,
  wm as ColorLinkDefault,
  Sm as ColorLinkHover,
  Cm as ColorLinkVisited,
  bl as ColorPrimaryBlack,
  gl as ColorPrimaryBlue,
  _l as ColorPrimaryDarkPink,
  yl as ColorPrimaryGreen,
  vl as ColorPrimaryPurple,
  wl as ColorPrimaryRed,
  xl as ColorPrimaryWhite,
  Sl as ColorPrimaryYellow,
  Nl as ColorSecondaryAquaGreen,
  jl as ColorSecondaryOrange,
  kl as ColorSecondaryPaleYellow,
  Tl as ColorSecondaryPink,
  Cl as ColorSecondaryWarmYellow,
  bm as ColorTextPrimary,
  _m as ColorTextPrint,
  vm as ColorTextReverse,
  ym as ColorTextSecondary,
  Fn as Column,
  er as ColumnAlign,
  jg as ComponentBlur,
  bg as ComponentBreadcrumbChevronMarginLeft,
  yg as ComponentBreadcrumbChevronMarginRight,
  _g as ComponentBreadcrumbPaddingTopDesktop,
  vg as ComponentBreadcrumbPaddingTopMobile,
  ig as ComponentButtonPaddingDesktopHorizontal,
  og as ComponentButtonPaddingDesktopVertical,
  sg as ComponentButtonPaddingMobileHorizontal,
  ag as ComponentButtonPaddingMobileVertical,
  lg as ComponentButtonShadowSize,
  mg as ComponentCardHeadingMargin,
  pg as ComponentCardPaddingDesktop,
  hg as ComponentCardPaddingMobile,
  Tg as ComponentDetails,
  Dg as ComponentExpander,
  fg as ComponentFormCheckboxLabelPadding,
  ug as ComponentFormCheckboxSize,
  cg as ComponentFormInputMinHeight,
  dg as ComponentFormInputPadding,
  Ng as ComponentLink,
  $g as ComponentPagination,
  xg as ComponentPanelPaddingDesktop,
  gg as ComponentPanelPaddingMobile,
  Cg as ComponentSpread,
  Sg as ComponentSummaryListCellPaddingHorizontal,
  wg as ComponentSummaryListCellPaddingVertical,
  kg as ComponentSummaryListRowMargin,
  Ko as Container,
  Qx as ContentsList,
  tc as DEFAULT_FONT_CONFIG,
  cb as DashboardSummaryGrid,
  Yx as DateInput,
  Tf as Details,
  Df as DoDontList,
  Ix as ElevationHigh,
  Dx as ElevationLow,
  $x as ElevationMedium,
  Tx as ElevationNone,
  Gs as ErrorMessage,
  Vx as ErrorSummary,
  $f as Expander,
  dt as FRUTIGER_FONT_FILES,
  ys as Fieldset,
  Ac as Float,
  kx as FocusOutlineOffset,
  Cx as FocusOutlineStyle,
  Sx as FocusOutlineWidth,
  Nx as FocusShadowButton,
  jx as FocusShadowInput,
  wr as FontFamilyBase,
  Sr as FontFamilyFallback,
  kr as FontFamilyPrint,
  gs as FontLineHeightBase,
  Tr as FontSize14Mobile,
  $r as FontSize14Print,
  Dr as FontSize14Tablet,
  Ir as FontSize16Mobile,
  Lr as FontSize16Print,
  Mr as FontSize16Tablet,
  Fr as FontSize19Mobile,
  Er as FontSize19Print,
  Pr as FontSize19Tablet,
  Ar as FontSize22Mobile,
  Br as FontSize22Print,
  Rr as FontSize22Tablet,
  Hr as FontSize26Mobile,
  Wr as FontSize26Print,
  zr as FontSize26Tablet,
  Or as FontSize36Mobile,
  Gr as FontSize36Print,
  Ur as FontSize36Tablet,
  Vr as FontSize48Mobile,
  qr as FontSize48Print,
  Yr as FontSize48Tablet,
  ms as FontSizeBase,
  jr as FontWeightBold,
  Nr as FontWeightLight,
  Cr as FontWeightNormal,
  ni as Footer,
  C0 as FormBorderRadius,
  S0 as FormBorderWidthDefault,
  k0 as FormBorderWidthError,
  v0 as FormErrorTextDefault,
  _0 as FormErrorTypographyWeight,
  w0 as FormHintTextDefault,
  o0 as FormInputBackgroundDefault,
  l0 as FormInputBackgroundDisabled,
  c0 as FormInputBackgroundError,
  i0 as FormInputBackgroundFocus,
  d0 as FormInputBorderDefault,
  h0 as FormInputBorderDisabled,
  f0 as FormInputBorderError,
  u0 as FormInputBorderFocus,
  p0 as FormInputTextDefault,
  g0 as FormInputTextDisabled,
  m0 as FormInputTextPlaceholder,
  x0 as FormLabelTextDefault,
  b0 as FormLabelTextRequired,
  y0 as FormLabelTypographyWeight,
  Ul as FormSpacingCheckboxLabelPadding,
  Ol as FormSpacingCheckboxSize,
  Wl as FormSpacingInputMinHeight,
  zl as FormSpacingInputPadding,
  Jx as GanttChart,
  Fa as Grid,
  ex as GridGutter,
  tx as GridGutterHalf,
  Ph as GridLines,
  Q0 as GridPageWidth,
  tn as GridWidth,
  ti as Header,
  Kx as HeaderSSR,
  Yc as HeaderSearch,
  ti as HeaderStatic,
  Bt as Heading,
  Tt as HeadingsNhsukHeadingL,
  Dt as HeadingsNhsukHeadingM,
  $t as HeadingsNhsukHeadingS,
  Nt as HeadingsNhsukHeadingXl,
  It as HeadingsNhsukHeadingXs,
  qc as Hero,
  qo as Hint,
  ib as Images,
  xs as Input,
  rb as InsetText,
  bs as Label,
  q0 as LayoutColumnActions,
  U0 as LayoutColumnFull,
  G0 as LayoutColumnHalf,
  Y0 as LayoutColumnQuarter,
  V0 as LayoutColumnThird,
  O0 as LayoutContainerMaxWidth,
  yb as Legend,
  Fh as LineScalesProvider,
  xp as LineSeriesPrimitive,
  Hc as List,
  Jo as MainWrapper,
  Ti as MedicationCard,
  Cb as MetricCard,
  Lb as NHSBodyText,
  Fb as NHSBodyTextLarge,
  Pb as NHSBodyTextSmall,
  Tb as NHSHeading1,
  Db as NHSHeading2,
  $b as NHSHeading3,
  Ib as NHSHeading4,
  Mb as NHSHeading5,
  Eb as NHSLedeText,
  Ab as NHSLedeTextSmall,
  Xx as NHSThemeProvider,
  Jb as NHS_FALLBACK_FONT_STACK,
  Kb as NHS_FONT_STACK,
  Ch as NavigationSplitView,
  pb as PageTemplate,
  Zx as Pagination,
  wf as Panel,
  Mt as ParagraphsBody,
  Lt as ParagraphsBodyLarge,
  Ft as ParagraphsBodySmall,
  Pt as ParagraphsLedeText,
  Et as ParagraphsLedeTextSmall,
  ji as PatientCard,
  Nh as ProductRoadmap,
  Bx as Radios,
  Hx as RadiosServer,
  fb as ResponsiveDataGrid,
  hb as ResponsiveDataGridDemo,
  nn as Row,
  jb as SPC,
  Vp as SPCChart,
  ar as Select,
  Fc as SelectOption,
  xx as ShadowButtonDefault,
  vx as ShadowButtonFocus,
  bx as ShadowButtonSecondary,
  yx as ShadowButtonWarning,
  _x as ShadowCardDefault,
  wx as ShadowCardHover,
  W0 as SizeButtonMinHeightDesktop,
  z0 as SizeButtonMinHeightMobile,
  L0 as SizeFormControlLarge,
  M0 as SizeFormControlMedium,
  I0 as SizeFormControlSmall,
  B0 as SizeFormInputWidth2xl,
  H0 as SizeFormInputWidth3xl,
  A0 as SizeFormInputWidthLg,
  E0 as SizeFormInputWidthMd,
  P0 as SizeFormInputWidthSm,
  R0 as SizeFormInputWidthXl,
  F0 as SizeFormInputWidthXs,
  D0 as SizeIconExtraLarge,
  T0 as SizeIconLarge,
  N0 as SizeIconMedium,
  $0 as SizeIconNhsDefault,
  j0 as SizeIconSmall,
  _i as SkipLink,
  lb as SlotMatrix,
  db as SortStatusControl,
  Gl as Spacing0,
  Vl as Spacing1,
  Yl as Spacing2,
  ql as Spacing3,
  Xl as Spacing4,
  Kl as Spacing5,
  Jl as Spacing6,
  Zl as Spacing7,
  Ql as Spacing8,
  ec as Spacing9,
  Xa as SpacingResponsive0Mobile,
  Ka as SpacingResponsive0Tablet,
  Ja as SpacingResponsive1Mobile,
  Za as SpacingResponsive1Tablet,
  Qa as SpacingResponsive2Mobile,
  es as SpacingResponsive2Tablet,
  ts as SpacingResponsive3Mobile,
  ns as SpacingResponsive3Tablet,
  rs as SpacingResponsive4Mobile,
  as as SpacingResponsive4Tablet,
  ss as SpacingResponsive5Mobile,
  os as SpacingResponsive5Tablet,
  is as SpacingResponsive6Mobile,
  ls as SpacingResponsive6Tablet,
  cs as SpacingResponsive7Mobile,
  ds as SpacingResponsive7Tablet,
  us as SpacingResponsive8Mobile,
  fs as SpacingResponsive8Tablet,
  hs as SpacingResponsive9Mobile,
  ps as SpacingResponsive9Tablet,
  zx as SpacingUtilities,
  px as StateDisabledBackground,
  mx as StateDisabledBorder,
  gx as StateDisabledText,
  nx as StateErrorBackground,
  rx as StateErrorBorder,
  ax as StateErrorText,
  ux as StateInfoBackground,
  fx as StateInfoBorder,
  hx as StateInfoText,
  sx as StateSuccessBackground,
  ox as StateSuccessBorder,
  ix as StateSuccessText,
  lx as StateWarningBackground,
  cx as StateWarningBorder,
  dx as StateWarningText,
  Ef as SummaryCard,
  ab as SummaryList,
  Wt as Table,
  sb as Tabs,
  He as Tag,
  If as TaskList,
  Mc as Textarea,
  bb as TooltipOverlay,
  gp as TooltipProvider,
  mb as TransactionalPageTemplate,
  rm as TransitionButtonDefault,
  am as TransitionButtonShadow,
  om as TransitionCardHover,
  sm as TransitionInputFocus,
  xb as VisibilityProvider,
  Di as VitalsCard,
  Gx as WIDTH_FRACTIONS,
  ob as WarningCallout,
  Fi as WidthContainer,
  Ox as WidthUtilities,
  Zb as checkFrutigerLoaded,
  $s as createGenericTabsConfig,
  ub as createTCHTabsConfig,
  qb as generateFrutigerFontFace,
  Nb as getResponsiveStyles,
  Wx as getSpacingClass,
  Ux as getWidthClass,
  Xb as preloadFrutigerFonts,
  qf as tchDataConfig,
  Bb as useColors,
  Ob as useComponentSpacing,
  Ub as useNHSHeadings,
  Gb as useNHSParagraphs,
  qx as useNHSTheme,
  Vb as useNHSTypographySystem,
  Yb as useNavigationSplitDrill,
  wh as useNavigationSplitUrlSync,
  Ei as useNhsFdpBreakpoints,
  Wb as useResponsiveSpacing,
  gb as useResponsiveValue,
  Hb as useSpacing,
  Rb as useTokens,
  zb as useTypography
};
//# sourceMappingURL=index.esm.js.map
