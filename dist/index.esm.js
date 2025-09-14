import * as Y from "react";
import ft, { useState as Fe, useEffect as ze, useCallback as xe, useRef as Ae, createElement as Wo, useMemo as $e, useContext as hc, createContext as mc, forwardRef as Sn, useImperativeHandle as Uo, useReducer as Go, memo as gc, useId as nr } from "react";
import { createPortal as xc } from "react-dom";
function bc(e) {
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
var Os;
function yc() {
  if (Os) return jn;
  Os = 1;
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
var zs;
function vc() {
  return zs || (zs = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === N ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case y:
          return "Fragment";
        case g:
          return "Profiler";
        case p:
          return "StrictMode";
        case $:
          return "Suspense";
        case T:
          return "SuspenseList";
        case v:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case C:
            return "Portal";
          case A:
            return (R.displayName || "Context") + ".Provider";
          case F:
            return (R._context.displayName || "Context") + ".Consumer";
          case D:
            var H = R.render;
            return R = R.displayName, R || (R = H.displayName || H.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case L:
            return H = R.displayName || null, H !== null ? H : e(R.type) || "Memo";
          case j:
            H = R._payload, R = R._init;
            try {
              return e(R(H));
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
        var H = !1;
      } catch {
        H = !0;
      }
      if (H) {
        H = console;
        var W = H.error, se = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return W.call(
          H,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          se
        ), t(R);
      }
    }
    function a(R) {
      if (R === y) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === j)
        return "<...>";
      try {
        var H = e(R);
        return H ? "<" + H + ">" : "<...>";
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
      if (h.call(R, "key")) {
        var H = Object.getOwnPropertyDescriptor(R, "key").get;
        if (H && H.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function l(R, H) {
      function W() {
        b || (b = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          H
        ));
      }
      W.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: W,
        configurable: !0
      });
    }
    function u() {
      var R = e(this.type);
      return _[R] || (_[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function c(R, H, W, se, z, pe, we, le) {
      return W = pe.ref, R = {
        $$typeof: w,
        type: R,
        key: H,
        props: pe,
        _owner: z
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(R, "ref", {
        enumerable: !1,
        get: u
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
        value: we
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function d(R, H, W, se, z, pe, we, le) {
      var fe = H.children;
      if (fe !== void 0)
        if (se)
          if (P(fe)) {
            for (se = 0; se < fe.length; se++)
              f(fe[se]);
            Object.freeze && Object.freeze(fe);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(fe);
      if (h.call(H, "key")) {
        fe = e(R);
        var ne = Object.keys(H).filter(function(ue) {
          return ue !== "key";
        });
        se = 0 < ne.length ? "{key: someKey, " + ne.join(": ..., ") + ": ...}" : "{key: someKey}", V[fe + se] || (ne = 0 < ne.length ? "{" + ne.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          se,
          fe,
          ne,
          fe
        ), V[fe + se] = !0);
      }
      if (fe = null, W !== void 0 && (r(W), fe = "" + W), i(H) && (r(H.key), fe = "" + H.key), "key" in H) {
        W = {};
        for (var Z in H)
          Z !== "key" && (W[Z] = H[Z]);
      } else W = H;
      return fe && l(
        W,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), c(
        R,
        fe,
        pe,
        z,
        s(),
        W,
        we,
        le
      );
    }
    function f(R) {
      typeof R == "object" && R !== null && R.$$typeof === w && R._store && (R._store.validated = 1);
    }
    var m = ft, w = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), A = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), v = Symbol.for("react.activity"), N = Symbol.for("react.client.reference"), S = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, h = Object.prototype.hasOwnProperty, P = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var b, _ = {}, M = m.react_stack_bottom_frame.bind(
      m,
      o
    )(), re = k(a(o)), V = {};
    Nn.Fragment = y, Nn.jsx = function(R, H, W, se, z) {
      var pe = 1e4 > S.recentlyCreatedOwnerStacks++;
      return d(
        R,
        H,
        W,
        !1,
        se,
        z,
        pe ? Error("react-stack-top-frame") : M,
        pe ? k(a(R)) : re
      );
    }, Nn.jsxs = function(R, H, W, se, z) {
      var pe = 1e4 > S.recentlyCreatedOwnerStacks++;
      return d(
        R,
        H,
        W,
        !0,
        se,
        z,
        pe ? Error("react-stack-top-frame") : M,
        pe ? k(a(R)) : re
      );
    };
  })()), Nn;
}
var Ws;
function wc() {
  return Ws || (Ws = 1, process.env.NODE_ENV === "production" ? Xn.exports = yc() : Xn.exports = vc()), Xn.exports;
}
var n = wc(), ma = { exports: {} };
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
  })(ma)), ma.exports;
}
var Sc = _c();
const ve = /* @__PURE__ */ bc(Sc), Jx = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...s
}) => {
  const o = ve(
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
}, Vo = ({
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
    ) : null, l = o.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: o.html } }) : o.text, u = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      i,
      l
    ] });
    return o.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: o.href,
        children: u
      }
    ) : o.action ? /* @__PURE__ */ n.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: o.action,
        method: o.method || "post",
        children: /* @__PURE__ */ n.jsx("button", { className: "nhsuk-account__button", type: "submit", role: "button", children: u })
      }
    ) : /* @__PURE__ */ n.jsx("span", { children: u });
  };
  return /* @__PURE__ */ n.jsx(
    "nav",
    {
      className: ve(
        "nhsuk-account",
        {
          "nhsuk-account--white": a === "white"
        },
        r
      ),
      "aria-label": e,
      children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-account__list", children: t.map(
        (o, i) => o && /* @__PURE__ */ n.jsx(
          "li",
          {
            className: ve(
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
var Yo = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(Yo || {}), qo = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(qo || {});
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
const { forwardRef: Cc, useCallback: Gt, useState: ga } = Y;
function jc(e, t) {
  const {
    children: r,
    variant: a = Yo.Primary,
    size: s = qo.Default,
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...u
  } = e, [c, d] = ga(!1), [f, m] = ga(!1), [w, C] = ga(!1), y = kc({
    variant: a,
    size: s,
    fullWidth: o,
    className: i,
    preventDoubleClick: l,
    href: "href" in u ? u.href : void 0
  }), p = "disabled" in u ? u.disabled : u["aria-disabled"] === "true", g = {
    ...c && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...w && { "data-focused": "true" },
    ...p && { "data-disabled": "true" }
  }, F = Gt(
    () => !p && d(!0),
    [p]
  ), A = Gt(() => d(!1), []), D = Gt(
    () => !p && m(!0),
    [p]
  ), $ = Gt(() => {
    m(!1), d(!1);
  }, []), T = Gt(() => C(!0), []), L = Gt(() => C(!1), []), j = Gt(
    (fe) => {
      fe.key === " " && ("href" in u || fe.currentTarget.getAttribute("role") === "button") && (fe.preventDefault(), fe.currentTarget.click());
    },
    [u]
  ), v = Gt(
    (fe) => {
      if (l) {
        const ne = fe.currentTarget;
        if (ne.getAttribute("data-processing") === "true") {
          fe.preventDefault();
          return;
        }
        ne.setAttribute("data-processing", "true"), setTimeout(() => {
          ne.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in u && u.href) {
    const {
      id: fe,
      style: ne,
      title: Z,
      ["aria-label"]: ue,
      ["aria-describedby"]: x,
      ["aria-labelledby"]: B,
      tabIndex: G,
      ...ee
    } = u, X = u;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: X.href,
        target: X.target,
        rel: X.rel,
        className: y.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...g,
        ...l && { "data-prevent-double-click": "true" },
        ...ee,
        onKeyDown: (ae) => {
          X.onKeyDown?.(ae), j(ae);
        },
        onClick: (ae) => {
          X.onClick?.(ae), v(ae);
        },
        onMouseDown: (ae) => {
          X.onMouseDown?.(ae), F();
        },
        onMouseUp: (ae) => {
          X.onMouseUp?.(ae), A();
        },
        onMouseEnter: (ae) => {
          X.onMouseEnter?.(ae), D();
        },
        onMouseLeave: (ae) => {
          X.onMouseLeave?.(ae), $();
        },
        onFocus: (ae) => {
          X.onFocus?.(ae), T();
        },
        onBlur: (ae) => {
          X.onBlur?.(ae), L();
        },
        "aria-disabled": X["aria-disabled"],
        ...X["aria-disabled"] === "true" && { tabIndex: -1 },
        id: fe,
        style: ne,
        title: Z,
        "aria-label": ue,
        "aria-describedby": x,
        "aria-labelledby": B,
        tabIndex: G,
        children: r
      }
    );
  }
  const {
    id: N,
    style: S,
    title: h,
    ["aria-label"]: P,
    ["aria-describedby"]: k,
    ["aria-labelledby"]: b,
    tabIndex: _,
    name: M,
    value: re,
    form: V,
    formAction: R,
    formEncType: H,
    formMethod: W,
    formNoValidate: se,
    formTarget: z,
    autoFocus: pe,
    ...we
  } = u, le = u;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: le.type || "button",
      disabled: le.disabled,
      className: y.classes,
      "data-module": "nhs-button",
      ...g,
      ...l && { "data-prevent-double-click": "true" },
      ...le.disabled && { "aria-disabled": "true" },
      ...we,
      onKeyDown: (fe) => {
        le.onKeyDown?.(fe), j(fe);
      },
      onClick: (fe) => {
        le.onClick?.(fe), v(fe);
      },
      onMouseDown: (fe) => {
        le.onMouseDown?.(fe), F();
      },
      onMouseUp: (fe) => {
        le.onMouseUp?.(fe), A();
      },
      onMouseEnter: (fe) => {
        le.onMouseEnter?.(fe), D();
      },
      onMouseLeave: (fe) => {
        le.onMouseLeave?.(fe), $();
      },
      onFocus: (fe) => {
        le.onFocus?.(fe), T();
      },
      onBlur: (fe) => {
        le.onBlur?.(fe), L();
      },
      id: N,
      style: S,
      title: h,
      "aria-label": P,
      "aria-describedby": k,
      "aria-labelledby": b,
      tabIndex: _,
      name: M,
      value: re,
      form: V,
      formAction: R,
      formEncType: H,
      formMethod: W,
      formNoValidate: se,
      formTarget: z,
      autoFocus: pe,
      children: r
    }
  );
}
const lt = Cc(jc);
lt.displayName = "Button";
const Fa = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = ve(
    "nhsuk-back-link",
    a
  ), u = ve(
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
      className: u,
      onClick: o,
      type: "button",
      ...i,
      children: c()
    }
  ) : /* @__PURE__ */ n.jsx(
    "a",
    {
      className: u,
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
const Oe = ({
  text: e,
  html: t,
  children: r,
  color: a = "default",
  noBorder: s = !1,
  closable: o = !1,
  onClose: i,
  disabled: l = !1,
  className: u,
  ...c
}) => {
  const d = Nc({ color: a, noBorder: s, closable: o, disabled: l, className: u }), f = (m) => {
    m.preventDefault(), m.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: d.classes, ...c, children: [
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
  className: u,
  children: c,
  onChange: d,
  onBlur: f,
  onFocus: m,
  attributes: w,
  ...C
}) => {
  const [y, p] = Fe(a), g = r !== void 0, F = g ? r : y;
  ze(() => {
    g || p(a);
  }, [a, g]);
  const A = (j) => {
    const v = j.target.checked;
    g || p(v), d?.(v, j);
  }, D = i ? `${e}-hint` : void 0, $ = l ? `${e}-error` : void 0, T = [D, $].filter(Boolean).join(" ") || void 0, L = ve(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    u
  );
  return /* @__PURE__ */ n.jsx("div", { className: L, ...C, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
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
        onChange: A,
        onBlur: f,
        onFocus: m,
        "aria-describedby": T,
        ...w
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ n.jsx("div", { id: D, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: $, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
Tc.displayName = "Checkbox";
function Xo(e) {
  const r = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    r ? "nhsuk-input--range" : "",
    !r && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: r };
}
const ys = ({
  id: e,
  name: t,
  type: r = "text",
  value: a,
  defaultValue: s,
  placeholder: o,
  disabled: i = !1,
  readOnly: l = !1,
  required: u = !1,
  hasError: c = !1,
  describedBy: d,
  className: f,
  width: m = "full",
  inputMode: w,
  autoComplete: C,
  maxLength: y,
  minLength: p,
  pattern: g,
  step: F,
  min: A,
  max: D,
  showValueLabels: $ = !1,
  showCurrentValue: T = !1,
  valueLabels: L,
  onChange: j,
  onBlur: v,
  onFocus: N,
  onKeyDown: S,
  ...h
}) => {
  const [P, k] = Fe(a || s || (r === "range" ? A || "0" : ""));
  ze(() => {
    a !== void 0 && k(a);
  }, [a]);
  const b = (z) => {
    const pe = z.target;
    k(pe.value), ("type" in z && z.nativeEvent || z.type === "keydown") && j?.(z);
  }, { classes: _, isRange: M } = Xo({ type: r, hasError: c, width: m, className: f }), re = a !== void 0, V = {
    id: e,
    name: t,
    type: r,
    placeholder: o,
    disabled: i,
    readOnly: l,
    required: u,
    "aria-describedby": d,
    inputMode: w,
    autoComplete: C,
    maxLength: y,
    minLength: p,
    pattern: g,
    step: F,
    min: A,
    max: D,
    onChange: b,
    onBlur: v,
    onFocus: N,
    onKeyDown: (z) => {
      if (M && /[0-9]/.test(z.key)) {
        const pe = (P?.toString() || "") + z.key;
        z.target.value = pe, b(z);
      }
      S?.(z);
    },
    ...h
  }, R = !re && s !== void 0 ? { defaultValue: s } : {}, H = re ? { value: a } : {}, W = () => /* @__PURE__ */ n.jsx(
    "input",
    {
      className: _,
      ...H,
      ...R,
      "data-current-value": P,
      ...V
    }
  ), se = M ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    $ && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: L?.min || A || "0" }),
      W(),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: L?.max || D || "100" })
    ] }),
    !$ && W(),
    T && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      L?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: P })
    ] }) })
  ] }) : null;
  return M ? se : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: _,
      id: e,
      name: t,
      type: r,
      value: a,
      ...a === void 0 && s !== void 0 ? { defaultValue: s } : {},
      placeholder: o,
      disabled: i,
      readOnly: l,
      required: u,
      "aria-describedby": d,
      inputMode: w,
      autoComplete: C,
      maxLength: y,
      minLength: p,
      pattern: g,
      step: F,
      min: A,
      max: D,
      onChange: j,
      onBlur: v,
      onFocus: N,
      onKeyDown: S,
      ...h
    }
  );
};
function Dc(e) {
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
const vs = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: s,
  ...o
}) => {
  const i = Dc({ size: a, isPageHeading: r, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ n.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...o, children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: s }) : s });
};
function $c(e) {
  const t = ["nhsuk-fieldset", e.className || ""].filter(Boolean).join(" "), r = e.legend ? [
    "nhsuk-fieldset__legend",
    e.legend.size ? `nhsuk-fieldset__legend--${e.legend.size}` : "",
    e.legend.className || ""
  ].filter(Boolean).join(" ") : void 0;
  return {
    fieldsetClasses: t,
    legendClasses: r,
    legendIsPageHeading: !!e.legend?.isPageHeading,
    describedBy: e.describedBy
  };
}
const ws = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...s
}) => {
  const o = $c({
    className: r,
    describedBy: a,
    legend: t ? {
      size: t.size,
      className: t.className,
      isPageHeading: t.isPageHeading
    } : void 0
  }), i = () => {
    const l = t?.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return o.legendIsPageHeading ? /* @__PURE__ */ n.jsx("h1", { className: "nhsuk-fieldset__heading", children: l }) : l;
  };
  return /* @__PURE__ */ n.jsxs(
    "fieldset",
    {
      className: o.fieldsetClasses,
      "aria-describedby": o.describedBy,
      ...s,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ n.jsx("legend", { className: o.legendClasses, children: i() }),
        e
      ]
    }
  );
};
function Ic(e) {
  const t = [
    "nhsuk-checkboxes",
    e.small ? "nhsuk-checkboxes--small" : "",
    e.className || ""
  ].filter(Boolean).join(" "), r = [
    "nhsuk-form-group",
    e.hasError ? "nhsuk-form-group--error" : ""
  ].filter(Boolean).join(" ");
  return { classes: t, formGroupClasses: r };
}
const Mc = ({
  items: e,
  name: t,
  idPrefix: r,
  legend: a,
  isPageHeading: s = !1,
  legendSize: o = "l",
  hint: i,
  errorMessage: l,
  className: u = "",
  small: c = !1,
  onChange: d,
  fieldsetAttributes: f,
  attributes: m,
  ...w
}) => {
  const [C, y] = Fe(
    e.filter((j) => j.checked).map((j) => j.value)
  ), p = r || t, g = i ? `${p}-hint` : void 0, F = l ? `${p}-error` : void 0, A = [g, F].filter(Boolean).join(" ") || void 0, D = (j, v) => {
    let N;
    v ? N = [...C, j] : N = C.filter((S) => S !== j), y(N), d?.(N);
  }, $ = () => e.map((j, v) => {
    const N = `${p}-${v + 1}`, S = `${N}-conditional`, h = C.includes(j.value), P = j.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: N,
          name: t,
          type: "checkbox",
          value: j.value,
          checked: h,
          disabled: P,
          onChange: (k) => D(j.value, k.target.checked),
          "aria-describedby": j.hint ? `${N}-hint` : A,
          ...j.conditional && {
            "aria-controls": S,
            "aria-expanded": h ? "true" : "false"
          },
          ...j.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: N, children: j.text }),
      j.hint && /* @__PURE__ */ n.jsx("div", { id: `${N}-hint`, className: "nhsuk-checkboxes__hint", children: j.hint }),
      j.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: ve("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !h
          }),
          id: S,
          children: typeof j.conditional == "object" && j.conditional !== null && "label" in j.conditional && "id" in j.conditional && "name" in j.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            j.conditional.label && /* @__PURE__ */ n.jsx(vs, { htmlFor: j.conditional.id, children: j.conditional.label }),
            /* @__PURE__ */ n.jsx(ys, { ...j.conditional })
          ] }) : j.conditional
        }
      )
    ] }, j.value);
  }), { classes: T, formGroupClasses: L } = Ic({ small: c, className: u, hasError: !!l });
  return /* @__PURE__ */ n.jsx("div", { className: L, ...m, ...w, children: /* @__PURE__ */ n.jsxs(
    ws,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: A,
      ...f,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: g, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: F, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: T, children: $() })
      ]
    }
  ) });
};
Mc.displayName = "Checkboxes";
function Lc(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const Pc = ({
  id: e,
  name: t,
  value: r,
  defaultValue: a,
  placeholder: s,
  disabled: o = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: u = !1,
  describedBy: c,
  className: d,
  rows: f = 5,
  cols: m,
  maxLength: w,
  minLength: C,
  wrap: y = "soft",
  resize: p = "vertical",
  autoComplete: g,
  spellCheck: F,
  onChange: A,
  onBlur: D,
  onFocus: $,
  onKeyDown: T,
  ...L
}) => {
  const { classes: j, describedBy: v } = Lc({ hasError: u, resize: p, className: d, describedBy: c });
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: j,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      placeholder: s,
      disabled: o,
      readOnly: i,
      required: l,
      "aria-describedby": v,
      rows: f,
      cols: m,
      maxLength: w,
      minLength: C,
      wrap: y,
      autoComplete: g,
      spellCheck: F,
      onChange: A,
      onBlur: D,
      onFocus: $,
      onKeyDown: T,
      ...L
    }
  );
};
function Fc(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Ko = ({ id: e, className: t, children: r, ...a }) => {
  const s = Fc({ id: e, className: t });
  return /* @__PURE__ */ n.jsx("div", { className: s.classes, id: s.id, ...a, children: r });
}, Zx = ({
  id: e,
  maxLength: t,
  maxWords: r,
  threshold: a = 75,
  name: s,
  value: o,
  defaultValue: i,
  rows: l,
  className: u,
  countMessage: c,
  onCountChange: d,
  onChange: f,
  ...m
}) => {
  const w = o ?? i ?? "", [C, y] = Fe(w), [p, g] = Fe(0), [F, A] = Fe(!1), [D, $] = Fe(!1), T = xe((h) => r ? h.trim() === "" ? 0 : h.trim().split(/\s+/).length : h.length, [r]);
  ze(() => {
    const h = T(C), P = t || r || 0, k = P - h, b = Math.floor(P * (a / 100));
    g(k), A(h > P), $(h >= b || h > P), d && d(h, k);
  }, [C, t, r, a, T, d]);
  const L = (h) => {
    const P = h.target.value;
    y(P), f && f(h);
  }, j = () => {
    const h = t || r || 0, P = r ? "word" : "character", k = r ? "words" : "characters";
    if (!D)
      return `You can enter up to ${h} ${h === 1 ? P : k}`;
    if (F) {
      const b = Math.abs(p);
      return `You have ${b} ${b === 1 ? P : k} too many`;
    } else
      return `You have ${p} ${p === 1 ? P : k} remaining`;
  }, v = ve(
    "nhsuk-character-count",
    u
  ), N = ve(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !D,
      "nhsuk-error-message": F
    },
    c?.classes
  ), S = ve(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": F
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: v,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          Pc,
          {
            id: e,
            name: s,
            value: o !== void 0 ? C : void 0,
            defaultValue: o === void 0 ? i ?? C : void 0,
            rows: l,
            className: S,
            onChange: L,
            "aria-describedby": `${e}-info`,
            "aria-invalid": F || void 0,
            ...m
          }
        ),
        /* @__PURE__ */ n.jsx(
          Ko,
          {
            id: `${e}-info`,
            className: N,
            role: "status",
            "aria-live": "polite",
            children: j()
          }
        )
      ]
    }
  );
};
function Ac(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const Ec = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: s,
  ...o
}) => {
  const i = ve(
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
}, Rc = ({
  id: e,
  name: t,
  ariaLabel: r,
  value: a,
  defaultValue: s,
  disabled: o = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: u,
  className: c,
  multiple: d = !1,
  size: f,
  autoComplete: m,
  options: w,
  children: C,
  onChange: y,
  onBlur: p,
  onFocus: g,
  ...F
}) => {
  const { classes: A } = Ac({ hasError: l, className: c }), D = () => w ? w.map((T, L) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: T.value,
      disabled: T.disabled,
      "data-initial-selected": T.selected || void 0,
      children: T.text
    },
    `${T.value}-${L}`
  )) : null, $ = s === void 0 && a === void 0 && w ? w.find((T) => T.selected)?.value : void 0;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: A,
      id: e,
      name: t,
      "aria-label": r,
      value: a,
      defaultValue: s !== void 0 ? s : $,
      disabled: o,
      required: i,
      "aria-describedby": u,
      multiple: d,
      size: f,
      autoComplete: m,
      onChange: y,
      onBlur: p,
      onFocus: g,
      ...F,
      children: C || D()
    }
  );
}, rr = Rc;
rr.Option = Ec;
function Bc(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function Jo(e, {
  variant: t,
  selectedValue: r,
  enableBehaviourAttr: a,
  handleChange: s,
  handleBlur: o,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: u,
  InputComponent: c
}) {
  const {
    onChange: d,
    onBlur: f,
    onFocus: m,
    ...w
  } = e, {
    name: C,
    hasError: y = !1,
    describedBy: p,
    className: g,
    size: F = "normal",
    inline: A = !1,
    options: D,
    ...$
  } = w, { classes: T, describedBy: L } = Bc({ hasError: y, size: F, inline: A, className: g, describedBy: p });
  return /* @__PURE__ */ n.jsx(ws, { children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: T,
      ...$,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: D.map((j, v) => {
        const N = `${C}-${v}`, S = j.conditional ? `${N}-conditional` : void 0, h = r === j.value;
        return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: N,
              name: C,
              type: "radio",
              value: j.value,
              disabled: j.disabled,
              ...t === "client" ? {
                checked: h,
                onChange: s,
                onBlur: o,
                onFocus: i,
                onKeyDown: l,
                ref: (P) => {
                  P && u && (u.current[v] = P);
                }
              } : {
                defaultChecked: h,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": L
            }
          ),
          /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: N, children: j.text }),
          j.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: j.hint }),
          j.conditional && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: ve("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !h
              }),
              id: S,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof j.conditional == "object" && j.conditional !== null && "label" in j.conditional && "id" in j.conditional && "name" in j.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
                j.conditional.label && /* @__PURE__ */ n.jsx(
                  vs,
                  {
                    htmlFor: j.conditional.id,
                    children: j.conditional.label
                  }
                ),
                /* @__PURE__ */ n.jsx(
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
const Qx = ({ value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: s, ...o }) => {
  const [i, l] = Fe(e || t || ""), u = Ae([]), c = Ae(i), d = (w) => {
    const C = w.target.value;
    C !== c.current && (c.current = C, l(C), r?.(w));
  }, f = (w) => {
    s?.(w);
  }, m = xe((w) => {
    const { key: C } = w;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(C)) return;
    w.preventDefault();
    const y = u.current.filter((A) => A && !A.disabled), p = y.indexOf(w.currentTarget);
    if (p === -1) return;
    let g = p;
    ["ArrowDown", "ArrowRight"].includes(C) ? g = (p + 1) % y.length : ["ArrowUp", "ArrowLeft"].includes(C) && (g = (p - 1 + y.length) % y.length);
    const F = y[g];
    F && (F.focus(), F.checked || F.click());
  }, []);
  return Jo(
    { value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: s, ...o },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: d,
      handleBlur: a,
      handleFocus: f,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: m,
      itemsRef: u,
      InputComponent: ys
    }
  );
};
function Hc(e) {
  const {
    id: t,
    name: r,
    type: a = "text",
    value: s,
    defaultValue: o,
    placeholder: i,
    disabled: l = !1,
    readOnly: u = !1,
    required: c = !1,
    hasError: d = !1,
    describedBy: f,
    className: m,
    width: w = "full",
    inputMode: C,
    autoComplete: y,
    maxLength: p,
    minLength: g,
    pattern: F,
    step: A,
    min: D,
    max: $,
    showValueLabels: T = !1,
    showCurrentValue: L = !1,
    valueLabels: j,
    // Strip interactive handlers in server variant
    onChange: v,
    onBlur: N,
    onFocus: S,
    onKeyDown: h,
    ...P
  } = e, { classes: k, isRange: b } = Xo({
    type: a,
    hasError: d,
    width: w,
    className: m
  }), _ = {
    id: t,
    name: r,
    type: a,
    placeholder: i,
    disabled: l,
    readOnly: u,
    required: c,
    "aria-describedby": f,
    inputMode: C,
    autoComplete: y,
    maxLength: p,
    minLength: g,
    pattern: F,
    step: A,
    min: D,
    max: $,
    ...P
  };
  if (b) {
    const M = s ?? o ?? (typeof D < "u" ? String(D) : "0"), re = /* @__PURE__ */ n.jsx(
      "input",
      {
        className: k,
        ...s !== void 0 ? { value: s } : {},
        ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
        "data-current-value": M,
        ..._
      }
    );
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      T ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: j?.min || D || "0" }),
        re,
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: j?.max || $ || "100" })
      ] }) : re,
      L && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        j?.current || "Current value:",
        " ",
        /* @__PURE__ */ n.jsx("strong", { children: M })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ n.jsx(
    "input",
    {
      className: k,
      ...s !== void 0 ? { value: s } : {},
      ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
      ..._
    }
  );
}
const eb = ({ value: e, defaultValue: t, ...r }) => {
  const a = e || t || "";
  return Jo(
    { value: e, defaultValue: t, ...r },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: Hc
    }
  );
};
var tn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(tn || {}), Oc = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(Oc || {}), zc = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(zc || {}), Wc = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Wc || {});
const Zo = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  style: s,
  ...o
}) => {
  const i = ve(
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
  const s = ve("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: s, style: r, ...a, children: e });
}, Pn = ({
  children: e,
  width: t = tn.Full,
  mobileWidth: r,
  tabletWidth: a,
  desktopWidth: s,
  start: o,
  className: i,
  forceWidth: l = !1,
  style: u,
  align: c,
  ...d
}) => {
  const f = ve(
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
      // Alignment (robust string-based class to avoid enum identity issues)
      ...c ? { [`nhsuk-grid-align-${c}`]: !0 } : {}
    },
    i
  );
  return /* @__PURE__ */ n.jsx("div", { className: f, style: u, ...d, children: e });
}, Aa = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const o = ft.Children.toArray(e)[0], i = ft.isValidElement(o) && (o.type === nn || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(Zo, { className: t, style: r, ...a, children: i ? e : /* @__PURE__ */ n.jsx(nn, { children: e }) });
}, Uc = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: s,
  role: o,
  as: i,
  ...l
}) => {
  const u = i || (t === "number" ? "ol" : "ul"), c = ve(
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
  return /* @__PURE__ */ n.jsx(u, { className: c, role: o, ...l, children: e });
}, Gc = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = ve("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, Vc = Uc;
Vc.Item = Gc;
const tb = ({
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
}, nb = {
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
}, rb = ({
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
}, ab = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, sb = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Qo = ({
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
function Yc(e) {
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
function qc(e) {
  const t = e.level ?? Yc(e.size), r = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: r, style: a };
}
const Bt = ({ level: e, className: t, text: r, html: a, children: s, size: o, marginBottom: i, ...l }) => {
  const u = qc({ level: e, size: o, className: t, marginBottom: i }), c = s || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r);
  return Wo(u.tag, { className: u.classes, style: u.style, ...l }, c);
};
function Xc(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const Gs = ({ id: e, className: t, visuallyHiddenText: r = "Error:", children: a, ...s }) => {
  const o = Xc({ id: e, className: t, visuallyHiddenText: r });
  return /* @__PURE__ */ n.jsxs("span", { className: o.classes, id: o.id, ...s, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      o.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, ob = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: a,
  errorList: s,
  className: o,
  children: i,
  ...l
}) => {
  const u = Ae(null);
  ze(() => {
    u.current && u.current.focus();
  }, []);
  const c = ve(
    "nhsuk-error-summary",
    o
  ), d = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, m = (w) => {
    const C = w.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text;
    return w.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: w.href,
        ...w.attributes,
        children: C
      }
    ) : C;
  };
  return /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: d() }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: i }),
          !i && (r || a) && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: f() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((w, C) => /* @__PURE__ */ n.jsx("li", { children: m(w) }, C)) })
        ] })
      ]
    }
  );
}, ib = ({
  id: e,
  className: t,
  items: r,
  namePrefix: a,
  values: s = {},
  fieldset: o,
  hint: i,
  errorMessage: l,
  onChange: u,
  ...c
}) => {
  const [d, f] = Fe(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [m, w] = Fe({}), C = (b) => b % 4 === 0 && b % 100 !== 0 || b % 400 === 0, y = (b, _) => {
    const M = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return b === 2 && C(_) ? 29 : M[b - 1];
  }, p = (b, _, M) => {
    if (!b) return;
    if (!/^\d+$/.test(b)) return "Day must be a number";
    const re = parseInt(b, 10);
    if (re < 1 || re > 31) return "Day must be between 1 and 31";
    if (_ && M) {
      const V = parseInt(_, 10), R = parseInt(M, 10);
      if (!isNaN(V) && !isNaN(R) && V >= 1 && V <= 12) {
        const H = y(V, R);
        if (re > H)
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
          ][V - 1]} ${R} only has ${H} days`;
      }
    }
  }, g = (b) => {
    if (!b) return;
    if (!/^\d+$/.test(b)) return "Month must be a number";
    const _ = parseInt(b, 10);
    if (_ < 1 || _ > 12) return "Month must be between 1 and 12";
  }, F = (b) => {
    if (!b) return;
    if (!/^\d+$/.test(b)) return "Year must be a number";
    const _ = parseInt(b, 10), M = (/* @__PURE__ */ new Date()).getFullYear();
    if (_ < 1900 || _ > M + 10)
      return `Year must be between 1900 and ${M + 10}`;
  }, A = (b, _, M) => {
    if (!b || !_ || !M) return;
    const re = parseInt(b, 10), V = parseInt(_, 10), R = parseInt(M, 10);
    if (isNaN(re) || isNaN(V) || isNaN(R) || V < 1 || V > 12 || R < 1900) return;
    const H = y(V, R);
    re < 1 || re > H;
  }, D = xe((b, _) => {
    const M = {
      ...d,
      [b]: _
    };
    f(M), u && u(M);
  }, [d, u]), $ = xe((b) => {
    const _ = d[b];
    let M;
    if (b === "day")
      M = p(_, d.month, d.year);
    else if (b === "month") {
      if (M = g(_), !M && d.day) {
        const re = p(d.day, _, d.year);
        w((V) => ({
          ...V,
          day: re
        }));
      }
    } else if (b === "year" && (M = F(_), !M && d.day && d.month)) {
      const re = p(d.day, d.month, _);
      w((V) => ({
        ...V,
        day: re
      }));
    }
    if (w((re) => ({
      ...re,
      [b]: M
    })), d.day && d.month && d.year) {
      const re = A(
        b === "day" ? _ : d.day,
        b === "month" ? _ : d.month,
        b === "year" ? _ : d.year
      );
      re && w((V) => ({
        ...V,
        day: re
      }));
    }
  }, [d, p, g, F, A]), T = $e(() => [
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
  ], []), L = r || T;
  let j = o?.describedBy || "";
  const v = i ? `${e}-hint` : "", N = l ? `${e}-error` : "";
  v && (j = j ? `${j} ${v}` : v), N && (j = j ? `${j} ${N}` : N);
  const S = Object.values(m).some((b) => b), h = ve(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || S
    }
  ), P = ve(
    "nhsuk-date-input",
    t
  ), k = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Ko,
      {
        id: v,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      Gs,
      {
        id: N,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(m).map(
      ([b, _]) => _ ? /* @__PURE__ */ n.jsxs(
        Gs,
        {
          id: `${e}-${b}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            _
          ]
        },
        `${b}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: P, id: e, "data-testid": "date-input", ...c, children: L.map((b) => {
      const _ = b.id || `${e}-${b.name}`, M = a ? `${a}[${b.name}]` : b.name, re = b.label || b.name.charAt(0).toUpperCase() + b.name.slice(1), V = m[b.name], R = d[b.name] || "";
      let H = j;
      if (V) {
        const W = `${e}-${b.name}-error`;
        H = H ? `${H} ${W}` : W;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          vs,
          {
            htmlFor: _,
            className: "nhsuk-date-input__label",
            children: re
          }
        ),
        /* @__PURE__ */ n.jsx(
          ys,
          {
            id: _,
            name: M,
            value: R,
            className: ve("nhsuk-date-input__input", b.classes, {
              "nhsuk-input--error": V
            }),
            inputMode: b.inputmode,
            autoComplete: b.autocomplete,
            pattern: b.pattern,
            "aria-describedby": H || void 0,
            hasError: !!V,
            onChange: (W) => D(b.name, W.target.value),
            onBlur: () => $(b.name)
          }
        )
      ] }, b.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: h, children: o ? /* @__PURE__ */ n.jsx(
    ws,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: j || void 0,
      children: k()
    }
  ) : k() });
}, ei = {
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
}, ti = mc(ei), Kc = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...ei, ...t };
  return /* @__PURE__ */ n.jsx(ti.Provider, { value: r, children: e });
}, lb = () => {
  const e = hc(ti);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Jc() {
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
function Zc() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Jc(), document.head.appendChild(e);
}
const cb = ({ children: e, theme: t }) => (ze(() => {
  Zc();
}, []), /* @__PURE__ */ n.jsx(Kc, { theme: t, children: e }));
function Qc(e, {
  variant: t,
  isClient: r,
  menuOpen: a = !1,
  showMoreButton: s = !1,
  visibleItems: o,
  dropdownVisible: i,
  toggleMenu: l,
  navContainerRef: u,
  navListRef: c,
  searchNode: d
}) {
  const {
    className: f,
    logo: m = {},
    service: w = {},
    serviceName: C,
    organisation: y,
    search: p,
    account: g,
    navigation: F,
    containerClasses: A,
    variant: D = "default",
    attributes: $ = {},
    maxVisibleItems: T,
    // deprecated (ignored)
    responsiveNavigation: L = !0,
    ...j
  } = e, v = {
    ...w,
    text: w?.text ?? C
  };
  "maxVisibleItems" in j && delete j.maxVisibleItems;
  const N = v.href && !m.href || v.href && v.href === m.href, S = N ? v.href : m.href, h = ve(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": D === "organisation" || y,
      "nhsuk-header--white": D === "white"
    },
    f
  ), P = ve(
    "nhsuk-header__container",
    A
  ), k = ve(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": F?.white,
      "nhsuk-header__navigation--justified": F?.justified
    },
    F?.className
  ), b = () => /* @__PURE__ */ n.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": m.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ n.jsx("title", { children: m.ariaLabel || "NHS" }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), _ = () => m.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: m.src,
      width: "280",
      alt: m.ariaLabel || "NHS"
    }
  ) : b(), M = () => y ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      y.name,
      y.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        y.split
      ] })
    ] }),
    y.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: y.descriptor })
  ] }) : null, re = (H, W) => H ? W ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: W, children: H }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: H }) : null, V = (H) => H.active || H.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: H.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: H.html } }) : H.text }) : H.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: H.html } }) : H.text, R = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  );
  return F?.items, /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: h,
      role: "banner",
      "data-module": "nhsuk-header",
      ...$,
      ...j,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: P, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            S ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: S, children: [
              _(),
              M(),
              N && re(v.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              _(),
              M(),
              N && re(v.text)
            ] }),
            v.text && !N && re(v.text, v.href)
          ] }),
          d ?? null,
          /* @__PURE__ */ n.jsx(
            Vo,
            {
              ...g,
              variant: D === "white" ? "white" : "default"
            }
          )
        ] }),
        F && F.items && F.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: k,
            "aria-label": F.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: ve(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": r && t === "client",
                    "nhsuk-header__navigation-container--ssr": !r
                  },
                  A
                ),
                ref: u,
                children: /* @__PURE__ */ n.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: c,
                    children: [
                      (F?.items || []).map((H, W) => /* @__PURE__ */ n.jsx(
                        "li",
                        {
                          className: ve(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": H.active || H.current,
                              "nhsuk-header__navigation-item--hidden": s && o !== void 0 && W >= (o ?? 0)
                            },
                            H.className
                          ),
                          ...H.attributes || {},
                          children: /* @__PURE__ */ n.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: H.href,
                              ...H.active || H.current ? { "aria-current": H.current ? "page" : "true" } : {},
                              children: V(H)
                            }
                          )
                        },
                        W
                      )),
                      s && o !== void 0 && /* @__PURE__ */ n.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ n.jsxs(
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
        r && F && F.items && F.items.length > 0 && a && i && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: F.items.slice(o ?? 0).map((H, W) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: ve("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": H.active || H.current
                }),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: H.href,
                    ...H.active || H.current ? { "aria-current": H.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: V(H)
                  }
                )
              },
              `overflow-${(o ?? 0) + W}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const eu = ({
  mode: e = "form",
  action: t = "/search",
  method: r = "get",
  name: a = "q",
  value: s,
  placeholder: o = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: u,
  disabled: c = !1,
  callbacks: d = {},
  isLoading: f = !1,
  showResults: m = !1,
  results: w = [],
  formAttributes: C = {},
  inputAttributes: y = {},
  buttonAttributes: p = {},
  preventDefaultSubmit: g = !1,
  debounceMs: F = 300,
  minQueryLength: A = 1
}) => {
  const [D, $] = Fe(""), [T, L] = Fe(!1), j = Ae(void 0), v = Ae(null), N = Ae(null), S = e === "controlled" && s !== void 0, h = S ? s : D, P = xe((se) => {
    j.current && clearTimeout(j.current), j.current = setTimeout(() => {
      d.onChange && se.length >= A && d.onChange(se);
    }, F);
  }, [d.onChange, F, A]), k = xe((se) => {
    const z = se.target.value;
    S || $(z), e !== "form" && P(z);
  }, [S, e, P]), b = xe((se) => {
    const z = h.trim(), pe = {
      query: z,
      timestamp: Date.now(),
      formData: new FormData(se.currentTarget)
    };
    e === "controlled" || e === "hybrid" && g ? (se.preventDefault(), d.onSearch && z.length >= A && d.onSearch(pe)) : e === "hybrid" && d.onSearch && z.length >= A && d.onSearch(pe);
  }, [e, h, d.onSearch, g, A]), _ = xe(() => {
    L(!0), d.onFocus?.();
  }, [d.onFocus]), M = xe(() => {
    L(!1), d.onBlur?.();
  }, [d.onBlur]), re = xe(() => {
    S || $(""), d.onClear?.(), N.current?.focus();
  }, [S, d.onClear]);
  ze(() => () => {
    j.current && clearTimeout(j.current);
  }, []);
  const V = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: ve("nhsuk-icon nhsuk-icon__search", {
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
  ), H = () => !h || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: re,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), W = () => !m || !w.length || !T ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: w.map((se) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: se.href ? /* @__PURE__ */ n.jsxs("a", { href: se.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: se.title }),
    se.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: se.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => d.onSearch?.({ query: se.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: se.title }),
        se.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: se.description })
      ]
    }
  ) }, se.id)) });
  return /* @__PURE__ */ n.jsxs("div", { className: ve("nhsuk-header__search", u, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": f,
    "nhsuk-header__search--focused": T,
    "nhsuk-header__search--has-results": m && w.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: v,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        role: "search",
        onSubmit: b,
        ...C,
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
                ref: N,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: o,
                autoComplete: "off",
                value: h,
                onChange: k,
                onFocus: _,
                onBlur: M,
                disabled: c || f,
                ...m && w.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...y
              }
            ),
            H()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || f || e !== "form" && h.length < A,
              ...p,
              children: [
                f ? R() : V(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    W()
  ] });
}, ni = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: u = "default",
  attributes: c = {},
  ...d
}) => {
  const [f, m] = Fe(!1), [w, C] = Fe(!1), [y, p] = Fe(i?.items?.length || 0), [g, F] = Fe(!1), [A, D] = Fe(!1), $ = Ae(null), T = Ae(null), L = Ae(!1);
  ze(() => {
    typeof window > "u" || D(!0);
  }, []), ze(() => {
    if (typeof document > "u") return;
    const S = (h) => {
      h.key === "Escape" && f && m(!1);
    };
    if (f)
      return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
  }, [f]);
  const j = Ae(null), v = xe(() => {
    if (!A || !i?.items || i.items.length === 0 || L.current) return;
    const S = $.current, h = T.current;
    if (!S || !h) return;
    L.current = !0, S.classList.add("nhsuk-header__navigation-container--measuring");
    const P = S.clientWidth, k = Array.from(h.children);
    if (!k.length) {
      S.classList.remove("nhsuk-header__navigation-container--measuring"), L.current = !1;
      return;
    }
    if (j.current == null) {
      const z = document.createElement("button");
      z.type = "button", z.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", z.style.position = "absolute", z.style.visibility = "hidden", z.style.pointerEvents = "none", z.innerHTML = "<span>More</span>", S.appendChild(z), j.current = z.getBoundingClientRect().width || 104, S.removeChild(z);
    }
    const b = j.current + 16;
    let _ = 0, M = 0;
    const re = window.getComputedStyle(S), V = parseFloat(re.paddingLeft) || 0, R = parseFloat(re.paddingRight) || 0;
    let H = V + R;
    for (const z of k) {
      const pe = z.getBoundingClientRect().width;
      if (_ + pe + b + H > P) break;
      _ += pe, M += 1;
    }
    const W = M < i.items.length, se = W ? M : i.items.length;
    C((z) => z === W ? z : W), p((z) => z === se ? z : se), S.classList.remove("nhsuk-header__navigation-container--measuring"), L.current = !1;
  }, [A, i?.items]);
  ze(() => {
    if (!A) return;
    const S = $.current;
    if (!S) return;
    let h = null;
    const P = () => {
      h == null && (h = window.requestAnimationFrame(() => {
        h = null, v();
      }));
    };
    v();
    const k = new ResizeObserver(() => P());
    return k.observe(S), T.current && k.observe(T.current), () => {
      h != null && window.cancelAnimationFrame(h), k.disconnect();
    };
  }, [A, v]), ze(() => {
    A && v();
  }, [i?.items?.length, A, v]);
  const N = (S) => {
    S && (S.preventDefault(), S.stopPropagation());
    const h = !f;
    m(h), F(h);
  };
  return Qc(
    {
      className: e,
      logo: t,
      service: r,
      organisation: a,
      search: s,
      account: o,
      navigation: i,
      containerClasses: l,
      variant: u,
      attributes: c,
      ...d
    },
    {
      variant: "client",
      isClient: A,
      menuOpen: f,
      showMoreButton: w,
      visibleItems: y,
      dropdownVisible: g,
      toggleMenu: N,
      navContainerRef: $,
      navListRef: T,
      // Provide interactive search node for client build only
      searchNode: s ? /* @__PURE__ */ n.jsx(eu, { ...s }) : null
    }
  );
};
function tu(e, { variant: t, isClient: r }) {
  const {
    className: a,
    logo: s = {},
    service: o = {},
    serviceName: i,
    organisation: l,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: u,
    navigation: c,
    containerClasses: d,
    variant: f = "default",
    attributes: m = {},
    maxVisibleItems: w,
    // deprecated (ignored)
    responsiveNavigation: C = !0,
    ...y
  } = e;
  "maxVisibleItems" in y && delete y.maxVisibleItems;
  const p = {
    ...o,
    text: o?.text ?? i
  }, g = p.href && !s.href || p.href && p.href === s.href, F = g ? p.href : s.href, A = ve(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    a
  ), D = ve("nhsuk-header__container", d), $ = ve(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": c?.white,
      "nhsuk-header__navigation--justified": c?.justified
    },
    c?.className
  ), T = () => /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsx("title", { children: s.ariaLabel || "NHS" }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), L = () => s.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: s.src,
      width: "280",
      alt: s.ariaLabel || "NHS"
    }
  ) : T(), j = () => l ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, v = (k, b) => k ? b ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: b, children: k }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: k }) : null, N = (k) => k.active || k.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text }) : k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text, S = c?.items && !C, h = S ? [] : c?.items, P = S ? c.items : [];
  return /* @__PURE__ */ n.jsxs("header", { className: A, role: "banner", "data-module": "nhsuk-header", ...m, ...y, children: [
    /* @__PURE__ */ n.jsxs("div", { className: D, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
        F ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: F, children: [
          L(),
          j(),
          g && v(p.text)
        ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          L(),
          j(),
          g && v(p.text)
        ] }),
        p.text && !g && v(p.text, p.href)
      ] }),
      /* @__PURE__ */ n.jsx(Vo, { ...u, variant: f === "white" ? "white" : "default" })
    ] }),
    c && c.items && c.items.length > 0 && /* @__PURE__ */ n.jsx("nav", { className: $, "aria-label": c.ariaLabel || "Menu", children: /* @__PURE__ */ n.jsx(
      "div",
      {
        className: ve(
          "nhsuk-header_navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--ssr": !r
          },
          d
        ),
        children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-list", children: (h || []).map((k, b) => /* @__PURE__ */ n.jsx(
          "li",
          {
            className: ve("nhsuk-header__navigation-item", {
              "nhsuk-header__navigation-item--current": k.active || k.current
            }, k.className),
            ...k.attributes || {},
            children: /* @__PURE__ */ n.jsx(
              "a",
              {
                className: "nhsuk-header__navigation-link",
                href: k.href,
                ...k.active || k.current ? { "aria-current": k.current ? "page" : "true" } : {},
                children: N(k)
              }
            )
          },
          b
        )) })
      }
    ) }),
    S && P.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: P.map((k, b) => /* @__PURE__ */ n.jsx(
      "li",
      {
        className: ve("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": k.active || k.current
        }),
        children: /* @__PURE__ */ n.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: k.href,
            ...k.active || k.current ? { "aria-current": k.current ? "page" : "true" } : {},
            children: N(k)
          }
        )
      },
      `overflow-server-${b}`
    )) }) })
  ] });
}
const ub = (e) => tu(e, {
  variant: "server",
  isClient: !1
}), nu = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: r = "",
  text: a,
  html: s,
  imageURL: o,
  containerClasses: i = "",
  classes: l = "",
  children: u,
  ...c
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
  ].filter(Boolean).join(" "), m = [
    "nhsuk-hero__heading",
    r,
    !u && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), w = u || e || a || s, C = () => {
    if (!e) return null;
    const y = { className: m };
    switch (t) {
      case 1:
        return /* @__PURE__ */ n.jsx("h1", { ...y, children: e });
      case 2:
        return /* @__PURE__ */ n.jsx("h2", { ...y, children: e });
      case 3:
        return /* @__PURE__ */ n.jsx("h3", { ...y, children: e });
      case 4:
        return /* @__PURE__ */ n.jsx("h4", { ...y, children: e });
      case 5:
        return /* @__PURE__ */ n.jsx("h5", { ...y, children: e });
      case 6:
        return /* @__PURE__ */ n.jsx("h6", { ...y, children: e });
      default:
        return /* @__PURE__ */ n.jsx("h1", { ...y, children: e });
    }
  };
  return /* @__PURE__ */ n.jsxs(
    "section",
    {
      className: d,
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...c,
      children: [
        o && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: w && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          C(),
          u || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && w && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          C(),
          u || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
nu.displayName = "Hero";
const ri = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: a,
  metaLinks: s,
  copyright: o = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: u,
  footerStyle: c,
  containerStyle: d
}) => {
  const f = (w, C = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: ve("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": C
      }),
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: w.URL,
          target: w.newWindow ? "_blank" : void 0,
          rel: w.newWindow ? "noopener noreferrer" : void 0,
          children: w.label
        }
      )
    },
    `${w.URL}-${w.label}`
  ), m = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...u }, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: ve("nhsuk-width-container", i),
        style: d,
        children: [
          /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ n.jsx("div", { className: ve("nhsuk-footer", e), style: c, children: m ? (
            // Multi-column layout
            /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((w) => f(w)) }),
              r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((w) => f(w)) }),
              a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((w) => f(w)) }),
              s && s.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((w) => f(w)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((w) => f(w, !0)),
              (r || []).map((w) => f(w, !0)),
              (a || []).map((w) => f(w, !0)),
              (s || []).map((w) => f(w, !0))
            ] })
          ) }),
          !m && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: o }) })
        ]
      }
    ),
    m && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: o }) }) })
  ] }) });
};
function er(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ru(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function _s(e) {
  let t, r, a;
  e.length !== 2 ? (t = er, r = (l, u) => er(e(l), u), a = (l, u) => e(l) - u) : (t = e === er || e === ru ? e : au, r = e, a = e);
  function s(l, u, c = 0, d = l.length) {
    if (c < d) {
      if (t(u, u) !== 0) return d;
      do {
        const f = c + d >>> 1;
        r(l[f], u) < 0 ? c = f + 1 : d = f;
      } while (c < d);
    }
    return c;
  }
  function o(l, u, c = 0, d = l.length) {
    if (c < d) {
      if (t(u, u) !== 0) return d;
      do {
        const f = c + d >>> 1;
        r(l[f], u) <= 0 ? c = f + 1 : d = f;
      } while (c < d);
    }
    return c;
  }
  function i(l, u, c = 0, d = l.length) {
    const f = s(l, u, c, d - 1);
    return f > c && a(l[f - 1], u) > -a(l[f], u) ? f - 1 : f;
  }
  return { left: s, center: i, right: o };
}
function au() {
  return 0;
}
function su(e) {
  return e === null ? NaN : +e;
}
const ou = _s(er), iu = ou.right;
_s(su).center;
function ai(e, t) {
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
  constructor(t, r = uu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [a, s] of t) this.set(a, s);
  }
  get(t) {
    return super.get(Ys(this, t));
  }
  has(t) {
    return super.has(Ys(this, t));
  }
  set(t, r) {
    return super.set(lu(this, t), r);
  }
  delete(t) {
    return super.delete(cu(this, t));
  }
}
function Ys({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : r;
}
function lu({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : (e.set(a, r), r);
}
function cu({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) && (r = e.get(a), e.delete(a)), r;
}
function uu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const du = Math.sqrt(50), fu = Math.sqrt(10), pu = Math.sqrt(2);
function ar(e, t, r) {
  const a = (t - e) / Math.max(0, r), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= du ? 10 : o >= fu ? 5 : o >= pu ? 2 : 1;
  let l, u, c;
  return s < 0 ? (c = Math.pow(10, -s) / i, l = Math.round(e * c), u = Math.round(t * c), l / c < e && ++l, u / c > t && --u, c = -c) : (c = Math.pow(10, s) * i, l = Math.round(e / c), u = Math.round(t / c), l * c < e && ++l, u * c > t && --u), u < l && 0.5 <= r && r < 2 ? ar(e, t, r * 2) : [l, u, c];
}
function hu(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [s, o, i] = a ? ar(t, e, r) : ar(e, t, r);
  if (!(o >= s)) return [];
  const l = o - s + 1, u = new Array(l);
  if (a)
    if (i < 0) for (let c = 0; c < l; ++c) u[c] = (o - c) / -i;
    else for (let c = 0; c < l; ++c) u[c] = (o - c) * i;
  else if (i < 0) for (let c = 0; c < l; ++c) u[c] = (s + c) / -i;
  else for (let c = 0; c < l; ++c) u[c] = (s + c) * i;
  return u;
}
function Ea(e, t, r) {
  return t = +t, e = +e, r = +r, ar(e, t, r)[2];
}
function Ra(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, s = a ? Ea(t, e, r) : Ea(e, t, r);
  return (a ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function mu(e, t, r) {
  e = +e, t = +t, r = (s = arguments.length) < 2 ? (t = e, e = 0, 1) : s < 3 ? 1 : +r;
  for (var a = -1, s = Math.max(0, Math.ceil((t - e) / r)) | 0, o = new Array(s); ++a < s; )
    o[a] = e + a * r;
  return o;
}
function qr(e, t) {
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
function si() {
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
    return si(t, r).unknown(a);
  }, qr.apply(s, arguments), s;
}
function oi() {
  var e = si().unknown(void 0), t = e.domain, r = e.range, a = 0, s = 1, o, i, l = !1, u = 0, c = 0, d = 0.5;
  delete e.unknown;
  function f() {
    var m = t().length, w = s < a, C = w ? s : a, y = w ? a : s;
    o = (y - C) / Math.max(1, m - u + c * 2), l && (o = Math.floor(o)), C += (y - C - o * (m - u)) * d, i = o * (1 - u), l && (C = Math.round(C), i = Math.round(i));
    var p = mu(m).map(function(g) {
      return C + o * g;
    });
    return r(w ? p.reverse() : p);
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
    return arguments.length ? (u = Math.min(1, c = +m), f()) : u;
  }, e.paddingInner = function(m) {
    return arguments.length ? (u = Math.min(1, m), f()) : u;
  }, e.paddingOuter = function(m) {
    return arguments.length ? (c = +m, f()) : c;
  }, e.align = function(m) {
    return arguments.length ? (d = Math.max(0, Math.min(1, m)), f()) : d;
  }, e.copy = function() {
    return oi(t(), [a, s]).round(l).paddingInner(u).paddingOuter(c).align(d);
  }, qr.apply(f(), arguments);
}
function Ss(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function ii(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function Wn() {
}
var Fn = 0.7, sr = 1 / Fn, gn = "\\s*([+-]?\\d+)\\s*", An = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", St = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", gu = /^#([0-9a-f]{3,8})$/, xu = new RegExp(`^rgb\\(${gn},${gn},${gn}\\)$`), bu = new RegExp(`^rgb\\(${St},${St},${St}\\)$`), yu = new RegExp(`^rgba\\(${gn},${gn},${gn},${An}\\)$`), vu = new RegExp(`^rgba\\(${St},${St},${St},${An}\\)$`), wu = new RegExp(`^hsl\\(${An},${St},${St}\\)$`), _u = new RegExp(`^hsla\\(${An},${St},${St},${An}\\)$`), Xs = {
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
Ss(Wn, En, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ks,
  // Deprecated! Use color.formatHex.
  formatHex: Ks,
  formatHex8: Su,
  formatHsl: ku,
  formatRgb: Js,
  toString: Js
});
function Ks() {
  return this.rgb().formatHex();
}
function Su() {
  return this.rgb().formatHex8();
}
function ku() {
  return li(this).formatHsl();
}
function Js() {
  return this.rgb().formatRgb();
}
function En(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = gu.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Zs(t) : r === 3 ? new pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Kn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Kn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = xu.exec(e)) ? new pt(t[1], t[2], t[3], 1) : (t = bu.exec(e)) ? new pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = yu.exec(e)) ? Kn(t[1], t[2], t[3], t[4]) : (t = vu.exec(e)) ? Kn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = wu.exec(e)) ? to(t[1], t[2] / 100, t[3] / 100, 1) : (t = _u.exec(e)) ? to(t[1], t[2] / 100, t[3] / 100, t[4]) : Xs.hasOwnProperty(e) ? Zs(Xs[e]) : e === "transparent" ? new pt(NaN, NaN, NaN, 0) : null;
}
function Zs(e) {
  return new pt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Kn(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new pt(e, t, r, a);
}
function Cu(e) {
  return e instanceof Wn || (e = En(e)), e ? (e = e.rgb(), new pt(e.r, e.g, e.b, e.opacity)) : new pt();
}
function Ba(e, t, r, a) {
  return arguments.length === 1 ? Cu(e) : new pt(e, t, r, a ?? 1);
}
function pt(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
Ss(pt, Ba, ii(Wn, {
  brighter(e) {
    return e = e == null ? sr : Math.pow(sr, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Fn : Math.pow(Fn, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pt(Qt(this.r), Qt(this.g), Qt(this.b), or(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Qs,
  // Deprecated! Use color.formatHex.
  formatHex: Qs,
  formatHex8: ju,
  formatRgb: eo,
  toString: eo
}));
function Qs() {
  return `#${Zt(this.r)}${Zt(this.g)}${Zt(this.b)}`;
}
function ju() {
  return `#${Zt(this.r)}${Zt(this.g)}${Zt(this.b)}${Zt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function eo() {
  const e = or(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Qt(this.r)}, ${Qt(this.g)}, ${Qt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function or(e) {
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
function li(e) {
  if (e instanceof gt) return new gt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Wn || (e = En(e)), !e) return new gt();
  if (e instanceof gt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, s = Math.min(t, r, a), o = Math.max(t, r, a), i = NaN, l = o - s, u = (o + s) / 2;
  return l ? (t === o ? i = (r - a) / l + (r < a) * 6 : r === o ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= u < 0.5 ? o + s : 2 - o - s, i *= 60) : l = u > 0 && u < 1 ? 0 : i, new gt(i, l, u, e.opacity);
}
function Nu(e, t, r, a) {
  return arguments.length === 1 ? li(e) : new gt(e, t, r, a ?? 1);
}
function gt(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
Ss(gt, Nu, ii(Wn, {
  brighter(e) {
    return e = e == null ? sr : Math.pow(sr, e), new gt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Fn : Math.pow(Fn, e), new gt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - a;
    return new pt(
      xa(e >= 240 ? e - 240 : e + 120, s, a),
      xa(e, s, a),
      xa(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new gt(no(this.h), Jn(this.s), Jn(this.l), or(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = or(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${no(this.h)}, ${Jn(this.s) * 100}%, ${Jn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function no(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Jn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function xa(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const ks = (e) => () => e;
function Tu(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Du(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function $u(e) {
  return (e = +e) == 1 ? ci : function(t, r) {
    return r - t ? Du(t, r, e) : ks(isNaN(t) ? r : t);
  };
}
function ci(e, t) {
  var r = t - e;
  return r ? Tu(e, r) : ks(isNaN(e) ? t : e);
}
const ro = (function e(t) {
  var r = $u(t);
  function a(s, o) {
    var i = r((s = Ba(s)).r, (o = Ba(o)).r), l = r(s.g, o.g), u = r(s.b, o.b), c = ci(s.opacity, o.opacity);
    return function(d) {
      return s.r = i(d), s.g = l(d), s.b = u(d), s.opacity = c(d), s + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Iu(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), s;
  return function(o) {
    for (s = 0; s < r; ++s) a[s] = e[s] * (1 - o) + t[s] * o;
    return a;
  };
}
function Mu(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Lu(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, s = new Array(a), o = new Array(r), i;
  for (i = 0; i < a; ++i) s[i] = Cs(e[i], t[i]);
  for (; i < r; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) o[i] = s[i](l);
    return o;
  };
}
function Pu(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function ir(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Fu(e, t) {
  var r = {}, a = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? r[s] = Cs(e[s], t[s]) : a[s] = t[s];
  return function(o) {
    for (s in r) a[s] = r[s](o);
    return a;
  };
}
var Ha = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ba = new RegExp(Ha.source, "g");
function Au(e) {
  return function() {
    return e;
  };
}
function Eu(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ru(e, t) {
  var r = Ha.lastIndex = ba.lastIndex = 0, a, s, o, i = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (a = Ha.exec(e)) && (s = ba.exec(t)); )
    (o = s.index) > r && (o = t.slice(r, o), l[i] ? l[i] += o : l[++i] = o), (a = a[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, u.push({ i, x: ir(a, s) })), r = ba.lastIndex;
  return r < t.length && (o = t.slice(r), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? u[0] ? Eu(u[0].x) : Au(t) : (t = u.length, function(c) {
    for (var d = 0, f; d < t; ++d) l[(f = u[d]).i] = f.x(c);
    return l.join("");
  });
}
function Cs(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? ks(t) : (r === "number" ? ir : r === "string" ? (a = En(t)) ? (t = a, ro) : Ru : t instanceof En ? ro : t instanceof Date ? Pu : Mu(t) ? Iu : Array.isArray(t) ? Lu : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Fu : ir)(e, t);
}
function Bu(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Hu(e) {
  return function() {
    return e;
  };
}
function Ou(e) {
  return +e;
}
var ao = [0, 1];
function hn(e) {
  return e;
}
function Oa(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Hu(isNaN(t) ? NaN : 0.5);
}
function zu(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Wu(e, t, r) {
  var a = e[0], s = e[1], o = t[0], i = t[1];
  return s < a ? (a = Oa(s, a), o = r(i, o)) : (a = Oa(a, s), o = r(o, i)), function(l) {
    return o(a(l));
  };
}
function Uu(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, s = new Array(a), o = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    s[i] = Oa(e[i], e[i + 1]), o[i] = r(t[i], t[i + 1]);
  return function(l) {
    var u = iu(e, l, 1, a) - 1;
    return o[u](s[u](l));
  };
}
function ui(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Gu() {
  var e = ao, t = ao, r = Cs, a, s, o, i = hn, l, u, c;
  function d() {
    var m = Math.min(e.length, t.length);
    return i !== hn && (i = zu(e[0], e[m - 1])), l = m > 2 ? Uu : Wu, u = c = null, f;
  }
  function f(m) {
    return m == null || isNaN(m = +m) ? o : (u || (u = l(e.map(a), t, r)))(a(i(m)));
  }
  return f.invert = function(m) {
    return i(s((c || (c = l(t, e.map(a), ir)))(m)));
  }, f.domain = function(m) {
    return arguments.length ? (e = Array.from(m, Ou), d()) : e.slice();
  }, f.range = function(m) {
    return arguments.length ? (t = Array.from(m), d()) : t.slice();
  }, f.rangeRound = function(m) {
    return t = Array.from(m), r = Bu, d();
  }, f.clamp = function(m) {
    return arguments.length ? (i = m ? !0 : hn, d()) : i !== hn;
  }, f.interpolate = function(m) {
    return arguments.length ? (r = m, d()) : r;
  }, f.unknown = function(m) {
    return arguments.length ? (o = m, f) : o;
  }, function(m, w) {
    return a = m, s = w, d();
  };
}
function di() {
  return Gu()(hn, hn);
}
function Vu(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function lr(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, a = e.slice(0, r);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(r + 1)
  ];
}
function vn(e) {
  return e = lr(Math.abs(e)), e ? e[1] : NaN;
}
function Yu(e, t) {
  return function(r, a) {
    for (var s = r.length, o = [], i = 0, l = e[0], u = 0; s > 0 && l > 0 && (u + l + 1 > a && (l = Math.max(1, a - u)), o.push(r.substring(s -= l, s + l)), !((u += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return o.reverse().join(t);
  };
}
function qu(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var Xu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function cr(e) {
  if (!(t = Xu.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new js({
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
cr.prototype = js.prototype;
function js(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
js.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ku(e) {
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
var fi;
function Ju(e, t) {
  var r = lr(e, t);
  if (!r) return e + "";
  var a = r[0], s = r[1], o = s - (fi = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, i = a.length;
  return o === i ? a : o > i ? a + new Array(o - i + 1).join("0") : o > 0 ? a.slice(0, o) + "." + a.slice(o) : "0." + new Array(1 - o).join("0") + lr(e, Math.max(0, t + o - 1))[0];
}
function so(e, t) {
  var r = lr(e, t);
  if (!r) return e + "";
  var a = r[0], s = r[1];
  return s < 0 ? "0." + new Array(-s).join("0") + a : a.length > s + 1 ? a.slice(0, s + 1) + "." + a.slice(s + 1) : a + new Array(s - a.length + 2).join("0");
}
const oo = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Vu,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => so(e * 100, t),
  r: so,
  s: Ju,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function io(e) {
  return e;
}
var lo = Array.prototype.map, co = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Zu(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? io : Yu(lo.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? io : qu(lo.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = cr(f);
    var m = f.fill, w = f.align, C = f.sign, y = f.symbol, p = f.zero, g = f.width, F = f.comma, A = f.precision, D = f.trim, $ = f.type;
    $ === "n" ? (F = !0, $ = "g") : oo[$] || (A === void 0 && (A = 12), D = !0, $ = "g"), (p || m === "0" && w === "=") && (p = !0, m = "0", w = "=");
    var T = y === "$" ? r : y === "#" && /[boxX]/.test($) ? "0" + $.toLowerCase() : "", L = y === "$" ? a : /[%p]/.test($) ? i : "", j = oo[$], v = /[defgprs%]/.test($);
    A = A === void 0 ? 6 : /[gprs]/.test($) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function N(S) {
      var h = T, P = L, k, b, _;
      if ($ === "c")
        P = j(S) + P, S = "";
      else {
        S = +S;
        var M = S < 0 || 1 / S < 0;
        if (S = isNaN(S) ? u : j(Math.abs(S), A), D && (S = Ku(S)), M && +S == 0 && C !== "+" && (M = !1), h = (M ? C === "(" ? C : l : C === "-" || C === "(" ? "" : C) + h, P = ($ === "s" ? co[8 + fi / 3] : "") + P + (M && C === "(" ? ")" : ""), v) {
          for (k = -1, b = S.length; ++k < b; )
            if (_ = S.charCodeAt(k), 48 > _ || _ > 57) {
              P = (_ === 46 ? s + S.slice(k + 1) : S.slice(k)) + P, S = S.slice(0, k);
              break;
            }
        }
      }
      F && !p && (S = t(S, 1 / 0));
      var re = h.length + S.length + P.length, V = re < g ? new Array(g - re + 1).join(m) : "";
      switch (F && p && (S = t(V + S, V.length ? g - P.length : 1 / 0), V = ""), w) {
        case "<":
          S = h + S + P + V;
          break;
        case "=":
          S = h + V + S + P;
          break;
        case "^":
          S = V.slice(0, re = V.length >> 1) + h + S + P + V.slice(re);
          break;
        default:
          S = V + h + S + P;
          break;
      }
      return o(S);
    }
    return N.toString = function() {
      return f + "";
    }, N;
  }
  function d(f, m) {
    var w = c((f = cr(f), f.type = "f", f)), C = Math.max(-8, Math.min(8, Math.floor(vn(m) / 3))) * 3, y = Math.pow(10, -C), p = co[8 + C / 3];
    return function(g) {
      return w(y * g) + p;
    };
  }
  return {
    format: c,
    formatPrefix: d
  };
}
var Zn, pi, hi;
Qu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Qu(e) {
  return Zn = Zu(e), pi = Zn.format, hi = Zn.formatPrefix, Zn;
}
function ed(e) {
  return Math.max(0, -vn(Math.abs(e)));
}
function td(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(vn(t) / 3))) * 3 - vn(Math.abs(e)));
}
function nd(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, vn(t) - vn(e)) + 1;
}
function rd(e, t, r, a) {
  var s = Ra(e, t, r), o;
  switch (a = cr(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(o = td(s, i)) && (a.precision = o), hi(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(o = nd(s, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = o - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(o = ed(s)) && (a.precision = o - (a.type === "%") * 2);
      break;
    }
  }
  return pi(a);
}
function ad(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var a = t();
    return hu(a[0], a[a.length - 1], r ?? 10);
  }, e.tickFormat = function(r, a) {
    var s = t();
    return rd(s[0], s[s.length - 1], r ?? 10, a);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var a = t(), s = 0, o = a.length - 1, i = a[s], l = a[o], u, c, d = 10;
    for (l < i && (c = i, i = l, l = c, c = s, s = o, o = c); d-- > 0; ) {
      if (c = Ea(i, l, r), c === u)
        return a[s] = i, a[o] = l, t(a);
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
function ur() {
  var e = di();
  return e.copy = function() {
    return ui(e, ur());
  }, qr.apply(e, arguments), ad(e);
}
function sd(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, s = e[r], o = e[a], i;
  return o < s && (i = r, r = a, a = i, i = s, s = o, o = i), e[r] = t.floor(s), e[a] = t.ceil(o), e;
}
const ya = /* @__PURE__ */ new Date(), va = /* @__PURE__ */ new Date();
function tt(e, t, r, a) {
  function s(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return s.floor = (o) => (e(o = /* @__PURE__ */ new Date(+o)), o), s.ceil = (o) => (e(o = new Date(o - 1)), t(o, 1), e(o), o), s.round = (o) => {
    const i = s(o), l = s.ceil(o);
    return o - i < l - o ? i : l;
  }, s.offset = (o, i) => (t(o = /* @__PURE__ */ new Date(+o), i == null ? 1 : Math.floor(i)), o), s.range = (o, i, l) => {
    const u = [];
    if (o = s.ceil(o), l = l == null ? 1 : Math.floor(l), !(o < i) || !(l > 0)) return u;
    let c;
    do
      u.push(c = /* @__PURE__ */ new Date(+o)), t(o, l), e(o);
    while (c < o && o < i);
    return u;
  }, s.filter = (o) => tt((i) => {
    if (i >= i) for (; e(i), !o(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !o(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !o(i); )
          ;
  }), r && (s.count = (o, i) => (ya.setTime(+o), va.setTime(+i), e(ya), e(va), Math.floor(r(ya, va))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(a ? (i) => a(i) % o === 0 : (i) => s.count(0, i) % o === 0) : s)), s;
}
const dr = tt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
dr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? tt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : dr);
dr.range;
const Et = 1e3, mt = Et * 60, Rt = mt * 60, Ht = Rt * 24, Ns = Ht * 7, uo = Ht * 30, wa = Ht * 365, mn = tt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Et);
}, (e, t) => (t - e) / Et, (e) => e.getUTCSeconds());
mn.range;
const Ts = tt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Et);
}, (e, t) => {
  e.setTime(+e + t * mt);
}, (e, t) => (t - e) / mt, (e) => e.getMinutes());
Ts.range;
const od = tt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * mt);
}, (e, t) => (t - e) / mt, (e) => e.getUTCMinutes());
od.range;
const Ds = tt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Et - e.getMinutes() * mt);
}, (e, t) => {
  e.setTime(+e + t * Rt);
}, (e, t) => (t - e) / Rt, (e) => e.getHours());
Ds.range;
const id = tt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Rt);
}, (e, t) => (t - e) / Rt, (e) => e.getUTCHours());
id.range;
const Un = tt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * mt) / Ht,
  (e) => e.getDate() - 1
);
Un.range;
const $s = tt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ht, (e) => e.getUTCDate() - 1);
$s.range;
const ld = tt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ht, (e) => Math.floor(e / Ht));
ld.range;
function sn(e) {
  return tt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * mt) / Ns);
}
const Xr = sn(0), fr = sn(1), cd = sn(2), ud = sn(3), wn = sn(4), dd = sn(5), fd = sn(6);
Xr.range;
fr.range;
cd.range;
ud.range;
wn.range;
dd.range;
fd.range;
function on(e) {
  return tt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Ns);
}
const mi = on(0), pr = on(1), pd = on(2), hd = on(3), _n = on(4), md = on(5), gd = on(6);
mi.range;
pr.range;
pd.range;
hd.range;
_n.range;
md.range;
gd.range;
const Rn = tt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Rn.range;
const xd = tt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
xd.range;
const Ot = tt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ot.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : tt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Ot.range;
const rn = tt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
rn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : tt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
rn.range;
function bd(e, t, r, a, s, o) {
  const i = [
    [mn, 1, Et],
    [mn, 5, 5 * Et],
    [mn, 15, 15 * Et],
    [mn, 30, 30 * Et],
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
    [r, 1, Ns],
    [t, 1, uo],
    [t, 3, 3 * uo],
    [e, 1, wa]
  ];
  function l(c, d, f) {
    const m = d < c;
    m && ([c, d] = [d, c]);
    const w = f && typeof f.range == "function" ? f : u(c, d, f), C = w ? w.range(c, +d + 1) : [];
    return m ? C.reverse() : C;
  }
  function u(c, d, f) {
    const m = Math.abs(d - c) / f, w = _s(([, , p]) => p).right(i, m);
    if (w === i.length) return e.every(Ra(c / wa, d / wa, f));
    if (w === 0) return dr.every(Math.max(Ra(c, d, f), 1));
    const [C, y] = i[m / i[w - 1][2] < i[w][2] / m ? w - 1 : w];
    return C.every(y);
  }
  return [l, u];
}
const [yd, vd] = bd(Ot, Rn, Xr, Un, Ds, Ts);
function _a(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Sa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Tn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function wd(e) {
  var t = e.dateTime, r = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, u = e.shortMonths, c = Dn(s), d = $n(s), f = Dn(o), m = $n(o), w = Dn(i), C = $n(i), y = Dn(l), p = $n(l), g = Dn(u), F = $n(u), A = {
    a: M,
    A: re,
    b: V,
    B: R,
    c: null,
    d: xo,
    e: xo,
    f: Ud,
    g: ef,
    G: nf,
    H: Od,
    I: zd,
    j: Wd,
    L: gi,
    m: Gd,
    M: Vd,
    p: H,
    q: W,
    Q: vo,
    s: wo,
    S: Yd,
    u: qd,
    U: Xd,
    V: Kd,
    w: Jd,
    W: Zd,
    x: null,
    X: null,
    y: Qd,
    Y: tf,
    Z: rf,
    "%": yo
  }, D = {
    a: se,
    A: z,
    b: pe,
    B: we,
    c: null,
    d: bo,
    e: bo,
    f: lf,
    g: bf,
    G: vf,
    H: af,
    I: sf,
    j: of,
    L: bi,
    m: cf,
    M: uf,
    p: le,
    q: fe,
    Q: vo,
    s: wo,
    S: df,
    u: ff,
    U: pf,
    V: hf,
    w: mf,
    W: gf,
    x: null,
    X: null,
    y: xf,
    Y: yf,
    Z: wf,
    "%": yo
  }, $ = {
    a: N,
    A: S,
    b: h,
    B: P,
    c: k,
    d: mo,
    e: mo,
    f: Ed,
    g: ho,
    G: po,
    H: go,
    I: go,
    j: Ld,
    L: Ad,
    m: Md,
    M: Pd,
    p: v,
    q: Id,
    Q: Bd,
    s: Hd,
    S: Fd,
    u: jd,
    U: Nd,
    V: Td,
    w: Cd,
    W: Dd,
    x: b,
    X: _,
    y: ho,
    Y: po,
    Z: $d,
    "%": Rd
  };
  A.x = T(r, A), A.X = T(a, A), A.c = T(t, A), D.x = T(r, D), D.X = T(a, D), D.c = T(t, D);
  function T(ne, Z) {
    return function(ue) {
      var x = [], B = -1, G = 0, ee = ne.length, X, ae, me;
      for (ue instanceof Date || (ue = /* @__PURE__ */ new Date(+ue)); ++B < ee; )
        ne.charCodeAt(B) === 37 && (x.push(ne.slice(G, B)), (ae = fo[X = ne.charAt(++B)]) != null ? X = ne.charAt(++B) : ae = X === "e" ? " " : "0", (me = Z[X]) && (X = me(ue, ae)), x.push(X), G = B + 1);
      return x.push(ne.slice(G, B)), x.join("");
    };
  }
  function L(ne, Z) {
    return function(ue) {
      var x = Tn(1900, void 0, 1), B = j(x, ne, ue += "", 0), G, ee;
      if (B != ue.length) return null;
      if ("Q" in x) return new Date(x.Q);
      if ("s" in x) return new Date(x.s * 1e3 + ("L" in x ? x.L : 0));
      if (Z && !("Z" in x) && (x.Z = 0), "p" in x && (x.H = x.H % 12 + x.p * 12), x.m === void 0 && (x.m = "q" in x ? x.q : 0), "V" in x) {
        if (x.V < 1 || x.V > 53) return null;
        "w" in x || (x.w = 1), "Z" in x ? (G = Sa(Tn(x.y, 0, 1)), ee = G.getUTCDay(), G = ee > 4 || ee === 0 ? pr.ceil(G) : pr(G), G = $s.offset(G, (x.V - 1) * 7), x.y = G.getUTCFullYear(), x.m = G.getUTCMonth(), x.d = G.getUTCDate() + (x.w + 6) % 7) : (G = _a(Tn(x.y, 0, 1)), ee = G.getDay(), G = ee > 4 || ee === 0 ? fr.ceil(G) : fr(G), G = Un.offset(G, (x.V - 1) * 7), x.y = G.getFullYear(), x.m = G.getMonth(), x.d = G.getDate() + (x.w + 6) % 7);
      } else ("W" in x || "U" in x) && ("w" in x || (x.w = "u" in x ? x.u % 7 : "W" in x ? 1 : 0), ee = "Z" in x ? Sa(Tn(x.y, 0, 1)).getUTCDay() : _a(Tn(x.y, 0, 1)).getDay(), x.m = 0, x.d = "W" in x ? (x.w + 6) % 7 + x.W * 7 - (ee + 5) % 7 : x.w + x.U * 7 - (ee + 6) % 7);
      return "Z" in x ? (x.H += x.Z / 100 | 0, x.M += x.Z % 100, Sa(x)) : _a(x);
    };
  }
  function j(ne, Z, ue, x) {
    for (var B = 0, G = Z.length, ee = ue.length, X, ae; B < G; ) {
      if (x >= ee) return -1;
      if (X = Z.charCodeAt(B++), X === 37) {
        if (X = Z.charAt(B++), ae = $[X in fo ? Z.charAt(B++) : X], !ae || (x = ae(ne, ue, x)) < 0) return -1;
      } else if (X != ue.charCodeAt(x++))
        return -1;
    }
    return x;
  }
  function v(ne, Z, ue) {
    var x = c.exec(Z.slice(ue));
    return x ? (ne.p = d.get(x[0].toLowerCase()), ue + x[0].length) : -1;
  }
  function N(ne, Z, ue) {
    var x = w.exec(Z.slice(ue));
    return x ? (ne.w = C.get(x[0].toLowerCase()), ue + x[0].length) : -1;
  }
  function S(ne, Z, ue) {
    var x = f.exec(Z.slice(ue));
    return x ? (ne.w = m.get(x[0].toLowerCase()), ue + x[0].length) : -1;
  }
  function h(ne, Z, ue) {
    var x = g.exec(Z.slice(ue));
    return x ? (ne.m = F.get(x[0].toLowerCase()), ue + x[0].length) : -1;
  }
  function P(ne, Z, ue) {
    var x = y.exec(Z.slice(ue));
    return x ? (ne.m = p.get(x[0].toLowerCase()), ue + x[0].length) : -1;
  }
  function k(ne, Z, ue) {
    return j(ne, t, Z, ue);
  }
  function b(ne, Z, ue) {
    return j(ne, r, Z, ue);
  }
  function _(ne, Z, ue) {
    return j(ne, a, Z, ue);
  }
  function M(ne) {
    return i[ne.getDay()];
  }
  function re(ne) {
    return o[ne.getDay()];
  }
  function V(ne) {
    return u[ne.getMonth()];
  }
  function R(ne) {
    return l[ne.getMonth()];
  }
  function H(ne) {
    return s[+(ne.getHours() >= 12)];
  }
  function W(ne) {
    return 1 + ~~(ne.getMonth() / 3);
  }
  function se(ne) {
    return i[ne.getUTCDay()];
  }
  function z(ne) {
    return o[ne.getUTCDay()];
  }
  function pe(ne) {
    return u[ne.getUTCMonth()];
  }
  function we(ne) {
    return l[ne.getUTCMonth()];
  }
  function le(ne) {
    return s[+(ne.getUTCHours() >= 12)];
  }
  function fe(ne) {
    return 1 + ~~(ne.getUTCMonth() / 3);
  }
  return {
    format: function(ne) {
      var Z = T(ne += "", A);
      return Z.toString = function() {
        return ne;
      }, Z;
    },
    parse: function(ne) {
      var Z = L(ne += "", !1);
      return Z.toString = function() {
        return ne;
      }, Z;
    },
    utcFormat: function(ne) {
      var Z = T(ne += "", D);
      return Z.toString = function() {
        return ne;
      }, Z;
    },
    utcParse: function(ne) {
      var Z = L(ne += "", !0);
      return Z.toString = function() {
        return ne;
      }, Z;
    }
  };
}
var fo = { "-": "", _: " ", 0: "0" }, st = /^\s*\d+/, _d = /^%/, Sd = /[\\^$*+?|[\]().{}]/g;
function Be(e, t, r) {
  var a = e < 0 ? "-" : "", s = (a ? -e : e) + "", o = s.length;
  return a + (o < r ? new Array(r - o + 1).join(t) + s : s);
}
function kd(e) {
  return e.replace(Sd, "\\$&");
}
function Dn(e) {
  return new RegExp("^(?:" + e.map(kd).join("|") + ")", "i");
}
function $n(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Cd(e, t, r) {
  var a = st.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function jd(e, t, r) {
  var a = st.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function Nd(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function Td(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function Dd(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function po(e, t, r) {
  var a = st.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function ho(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function $d(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function Id(e, t, r) {
  var a = st.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function Md(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function mo(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function Ld(e, t, r) {
  var a = st.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function go(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function Pd(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function Fd(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function Ad(e, t, r) {
  var a = st.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function Ed(e, t, r) {
  var a = st.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function Rd(e, t, r) {
  var a = _d.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function Bd(e, t, r) {
  var a = st.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Hd(e, t, r) {
  var a = st.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function xo(e, t) {
  return Be(e.getDate(), t, 2);
}
function Od(e, t) {
  return Be(e.getHours(), t, 2);
}
function zd(e, t) {
  return Be(e.getHours() % 12 || 12, t, 2);
}
function Wd(e, t) {
  return Be(1 + Un.count(Ot(e), e), t, 3);
}
function gi(e, t) {
  return Be(e.getMilliseconds(), t, 3);
}
function Ud(e, t) {
  return gi(e, t) + "000";
}
function Gd(e, t) {
  return Be(e.getMonth() + 1, t, 2);
}
function Vd(e, t) {
  return Be(e.getMinutes(), t, 2);
}
function Yd(e, t) {
  return Be(e.getSeconds(), t, 2);
}
function qd(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Xd(e, t) {
  return Be(Xr.count(Ot(e) - 1, e), t, 2);
}
function xi(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? wn(e) : wn.ceil(e);
}
function Kd(e, t) {
  return e = xi(e), Be(wn.count(Ot(e), e) + (Ot(e).getDay() === 4), t, 2);
}
function Jd(e) {
  return e.getDay();
}
function Zd(e, t) {
  return Be(fr.count(Ot(e) - 1, e), t, 2);
}
function Qd(e, t) {
  return Be(e.getFullYear() % 100, t, 2);
}
function ef(e, t) {
  return e = xi(e), Be(e.getFullYear() % 100, t, 2);
}
function tf(e, t) {
  return Be(e.getFullYear() % 1e4, t, 4);
}
function nf(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? wn(e) : wn.ceil(e), Be(e.getFullYear() % 1e4, t, 4);
}
function rf(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Be(t / 60 | 0, "0", 2) + Be(t % 60, "0", 2);
}
function bo(e, t) {
  return Be(e.getUTCDate(), t, 2);
}
function af(e, t) {
  return Be(e.getUTCHours(), t, 2);
}
function sf(e, t) {
  return Be(e.getUTCHours() % 12 || 12, t, 2);
}
function of(e, t) {
  return Be(1 + $s.count(rn(e), e), t, 3);
}
function bi(e, t) {
  return Be(e.getUTCMilliseconds(), t, 3);
}
function lf(e, t) {
  return bi(e, t) + "000";
}
function cf(e, t) {
  return Be(e.getUTCMonth() + 1, t, 2);
}
function uf(e, t) {
  return Be(e.getUTCMinutes(), t, 2);
}
function df(e, t) {
  return Be(e.getUTCSeconds(), t, 2);
}
function ff(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function pf(e, t) {
  return Be(mi.count(rn(e) - 1, e), t, 2);
}
function yi(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? _n(e) : _n.ceil(e);
}
function hf(e, t) {
  return e = yi(e), Be(_n.count(rn(e), e) + (rn(e).getUTCDay() === 4), t, 2);
}
function mf(e) {
  return e.getUTCDay();
}
function gf(e, t) {
  return Be(pr.count(rn(e) - 1, e), t, 2);
}
function xf(e, t) {
  return Be(e.getUTCFullYear() % 100, t, 2);
}
function bf(e, t) {
  return e = yi(e), Be(e.getUTCFullYear() % 100, t, 2);
}
function yf(e, t) {
  return Be(e.getUTCFullYear() % 1e4, t, 4);
}
function vf(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? _n(e) : _n.ceil(e), Be(e.getUTCFullYear() % 1e4, t, 4);
}
function wf() {
  return "+0000";
}
function yo() {
  return "%";
}
function vo(e) {
  return +e;
}
function wo(e) {
  return Math.floor(+e / 1e3);
}
var dn, vi;
_f({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function _f(e) {
  return dn = wd(e), vi = dn.format, dn.parse, dn.utcFormat, dn.utcParse, dn;
}
function Sf(e) {
  return new Date(e);
}
function kf(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function wi(e, t, r, a, s, o, i, l, u, c) {
  var d = di(), f = d.invert, m = d.domain, w = c(".%L"), C = c(":%S"), y = c("%I:%M"), p = c("%I %p"), g = c("%a %d"), F = c("%b %d"), A = c("%B"), D = c("%Y");
  function $(T) {
    return (u(T) < T ? w : l(T) < T ? C : i(T) < T ? y : o(T) < T ? p : a(T) < T ? s(T) < T ? g : F : r(T) < T ? A : D)(T);
  }
  return d.invert = function(T) {
    return new Date(f(T));
  }, d.domain = function(T) {
    return arguments.length ? m(Array.from(T, kf)) : m().map(Sf);
  }, d.ticks = function(T) {
    var L = m();
    return e(L[0], L[L.length - 1], T ?? 10);
  }, d.tickFormat = function(T, L) {
    return L == null ? $ : c(L);
  }, d.nice = function(T) {
    var L = m();
    return (!T || typeof T.range != "function") && (T = t(L[0], L[L.length - 1], T ?? 10)), T ? m(sd(L, T)) : d;
  }, d.copy = function() {
    return ui(d, wi(e, t, r, a, s, o, i, l, u, c));
  }, d;
}
function Is() {
  return qr.apply(wi(yd, vd, Ot, Rn, Xr, Un, Ds, Ts, mn, vi).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Cf({
  task: e,
  scale: t,
  onTaskClick: r,
  onTaskDoubleClick: a,
  isSelected: s = !1,
  taskIndex: o,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": u
}) {
  const c = Ae(null), [d, f] = Fe(!1), [m, w] = Fe(!1), C = t(e.start), y = t(e.end), p = Math.max(y - C, 20), g = () => {
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
  }, F = e.progress ? p * e.progress / 100 : 0, A = () => {
    r?.(e);
  }, D = () => {
    a?.(e);
  }, $ = (h) => {
    h.key === "Enter" ? (h.preventDefault(), A()) : h.key === " " && (h.preventDefault(), D());
  }, T = () => {
    f(!0);
  }, L = () => {
    f(!1);
  }, j = () => {
    w(!0), l?.();
  }, v = () => {
    w(!1);
  }, N = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (m || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), S = {
    "--task-left": `${C}px`,
    "--task-width": `${p}px`,
    "--task-color": g(),
    left: `${C}px`,
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
      className: N,
      style: S,
      onClick: A,
      onDoubleClick: D,
      onKeyDown: $,
      onMouseDown: T,
      onMouseUp: L,
      onFocus: j,
      onBlur: v,
      "aria-label": u || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
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
function jf({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let w = e.getTime(); w <= t.getTime(); w += 864e5)
    a.push(new Date(w));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = Fe(-1), u = Ae(null), c = (w) => {
    if (w.key === "ArrowLeft") {
      w.preventDefault();
      const C = Math.max(0, i === -1 ? 0 : i - 1);
      l(C), m(C);
    } else if (w.key === "ArrowRight") {
      w.preventDefault();
      const C = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(C), m(C);
    } else if (w.key === "ArrowDown")
      w.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (w.key === "Home")
      w.preventDefault(), l(0), m(0);
    else if (w.key === "End") {
      w.preventDefault();
      const C = a.length - 1;
      l(C), m(C);
    }
  }, d = (w) => {
    if (w.key === "ArrowDown")
      w.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .resource-label") : null)?.focus();
    else if (w.key === "ArrowRight") {
      w.preventDefault();
      const C = u.current;
      C && C.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => m(0), 0));
  }, m = (w) => {
    const C = u.current?.querySelector(`[data-date-index="${w}"]`);
    C && C.focus();
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
            onKeyDown: d,
            children: "Resources"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: u,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": r,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: c,
            onFocus: f,
            children: a.map((w, C) => {
              const y = w.getTime() === o.getTime(), p = i === C;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": C,
                  className: `date-column ${y ? "today" : ""} ${p ? "focused" : ""}`,
                  tabIndex: p ? 0 : -1,
                  role: "button",
                  "aria-label": `${w.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${y ? " (Today)" : ""}`,
                  onFocus: () => l(C),
                  onKeyDown: c,
                  children: w.toLocaleDateString("en-GB", {
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
function Nf({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, u] = Fe(!1), [c, d] = Fe(-1), f = Ae(null);
  ze(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
    }, 0);
  }, [l, c, t.length]);
  const m = (y) => {
    if (y.key === "ArrowLeft" && y.shiftKey) {
      y.preventDefault(), y.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (y.key === "ArrowRight" && y.shiftKey) {
      y.preventDefault(), y.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!l) {
      switch (y.key) {
        case "ArrowUp":
          y.preventDefault(), o === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-timeline") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 1}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowDown":
          y.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 3}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowLeft":
          y.preventDefault(), f.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (y.preventDefault(), u(!0), d(0));
          break;
      }
      return;
    }
    switch (y.key) {
      case "ArrowLeft":
        y.preventDefault();
        const p = Math.max(0, c - 1);
        d(p), f.current?.querySelector(`[data-task-index="${p}"]`)?.focus();
        break;
      case "ArrowRight":
        y.preventDefault();
        const F = Math.min(t.length - 1, c + 1);
        d(F), f.current?.querySelector(`[data-task-index="${F}"]`)?.focus();
        break;
      case "Enter":
        y.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        y.preventDefault(), c >= 0 && s?.(t[c]);
        break;
      case "Escape":
        y.preventDefault(), u(!1), d(-1), f.current?.focus();
        break;
    }
  }, w = (y) => {
    switch (y.key) {
      case "ArrowUp":
        y.preventDefault(), o === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-resource") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowDown":
        y.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowRight":
        y.preventDefault(), f.current?.focus();
        break;
    }
  }, C = (y) => {
    l && d(y);
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
            onKeyDown: w,
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
              l || d(-1);
            },
            children: t.map((y, p) => /* @__PURE__ */ n.jsx(
              Cf,
              {
                task: y,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && c === p,
                taskIndex: p,
                tabIndex: l && c === p ? 0 : -1,
                onFocus: () => C(p)
              },
              y.id
            ))
          }
        )
      ]
    }
  );
}
function db({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: s,
  onTaskDoubleClick: o
}) {
  const i = Ae(null), [l, u] = Fe(800), c = $e(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const y = new Date(r);
    return isNaN(y.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : y;
  }, [r]), d = $e(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const y = new Date(a);
    return isNaN(y.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : y;
  }, [a]), f = $e(() => Math.ceil((d.getTime() - c.getTime()) / 864e5) + 1, [c, d]);
  ze(() => {
    if (!i.current || typeof window > "u") return;
    const y = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!y) return;
    const p = new y((g) => {
      const F = g[0];
      F && u(Math.max(F.contentRect.width - 220, 400));
    });
    return p.observe(i.current), () => p.disconnect();
  }, []);
  const m = $e(
    () => Is().domain([c, d]).range([0, l]),
    [c, d, l]
  ), w = $e(() => {
    const y = /* @__PURE__ */ new Map();
    return t.forEach((p) => {
      const g = y.get(p.resourceId) || [];
      g.push(p), y.set(p.resourceId, g);
    }), y;
  }, [t]), C = (y) => {
    if (y.target === y.currentTarget)
      switch (y.key) {
        case "ArrowDown":
          y.preventDefault(), typeof document < "u" && i.current?.querySelector(".gantt-row .resource-label")?.focus();
          break;
        case "Home":
          y.preventDefault(), typeof document < "u" && i.current?.querySelector(".header-resource")?.focus();
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
      onKeyDown: C,
      children: [
        /* @__PURE__ */ n.jsx(jf, { viewStart: c, viewEnd: d, dateCount: f }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: i,
            className: "gantt-grid",
            role: "rowgroup",
            "aria-label": "Gantt chart data rows",
            tabIndex: 0,
            onKeyDown: (y) => {
              y.key === "ArrowLeft" && y.altKey ? (y.preventDefault(), i.current?.scrollBy({ left: -50, behavior: "smooth" })) : y.key === "ArrowRight" && y.altKey ? (y.preventDefault(), i.current?.scrollBy({ left: 50, behavior: "smooth" })) : y.key === "ArrowUp" && y.altKey ? (y.preventDefault(), i.current?.scrollBy({ top: -50, behavior: "smooth" })) : y.key === "ArrowDown" && y.altKey && (y.preventDefault(), i.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((y, p) => /* @__PURE__ */ n.jsx(
              Nf,
              {
                resource: y,
                tasks: w.get(y.id) || [],
                scale: m,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: p,
                dateCount: f
              },
              y.id
            ))
          }
        )
      ]
    }
  );
}
const hr = ({
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
) }), Tf = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: s,
  text: o,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const u = () => t ? ft.Children.toArray(t).filter(
    (p) => ft.isValidElement(p) && (p.type === hr || p.type?.displayName === "BreadcrumbItem")
  ).map((p) => ({
    text: typeof p.props.children == "string" ? p.props.children : String(p.props.children),
    href: p.props.href,
    active: p.props.active,
    attributes: p.props.attributes
  })) : [], c = () => t ? u() : s && o ? [{ href: s, text: o }] : e, d = () => {
    const y = c();
    if (y && y.length > 0) {
      const p = y.slice().reverse().find((g) => g.href && !g.active);
      if (p)
        return { href: p.href, text: p.text };
    }
    return { text: "Home" };
  }, f = c(), m = d(), w = ve(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), C = a;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: w,
      "aria-label": C,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          ft.Children.map(t, (y, p) => ft.isValidElement(y) && (y.type === hr || y.type?.displayName === "BreadcrumbItem") ? ft.cloneElement(y, { key: p }) : null)
        ) : (
          // Render from items array
          f?.filter((y) => y.active || !!y.href).map((y, p) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: y.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...y.attributes || {},
              children: y.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: y.href,
              role: "link",
              ...y.attributes || {},
              children: y.text
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
}, Df = Tf;
Df.Item = hr;
hr.displayName = "BreadcrumbItem";
const _i = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [s, o] = Fe(!1);
  ze(() => {
    o(!0);
  }, []), ze(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (u) => {
      const c = u.target, d = c.getAttribute("href");
      if (d && d.startsWith("#")) {
        const f = typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(d) : null;
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
  }, [s]);
  const i = ve("nhsuk-skip-link", r);
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
}, fb = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: s,
  attributes: o = {}
}) => {
  const i = ve("nhsuk-pagination", s);
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
}, pb = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const s = ve("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, Si = ft.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: r,
  headingLevel: a = 2,
  headingClasses: s,
  description: o,
  descriptionHtml: i,
  href: l,
  imgURL: u,
  imgAlt: c,
  ...d
}, f) => {
  const m = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    d.className
  ].filter(Boolean).join(" "), w = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), C = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), y = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const F = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Bt,
      {
        level: a,
        className: C,
        children: F()
      }
    );
  }, p = () => d.children ? d.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: o }) : null, g = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      ...d,
      className: m,
      ref: f,
      children: [
        u && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: u,
            alt: c || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: w, children: [
          y(),
          p(),
          g()
        ] })
      ]
    }
  );
});
Si.displayName = "Card";
const hb = ({
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
}, mb = ({
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
}, gb = ({
  type: e,
  heading: t,
  headingHtml: r,
  headingLevel: a = 3,
  headingClasses: s,
  description: o,
  descriptionHtml: i,
  className: l,
  children: u,
  "data-testid": c,
  id: d,
  "aria-label": f,
  "aria-labelledby": m,
  "aria-describedby": w
}) => {
  const C = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), y = [
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
    }[e], A = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
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
        className: y,
        children: A
      }
    );
  }, g = () => u || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: C,
      "data-testid": c,
      id: d,
      "aria-label": f,
      "aria-labelledby": m,
      "aria-describedby": w,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          p(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: g() })
      ]
    }
  );
}, $f = ({
  id: e,
  className: t,
  headingText: r,
  headingHtml: a,
  headingLevel: s = 2,
  bodyText: o,
  bodyHtml: i,
  children: l,
  ...u
}) => {
  const c = ve(
    "nhsuk-panel",
    t
  ), d = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
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
  return /* @__PURE__ */ n.jsxs("div", { className: c, id: e, ...u, children: [
    d(),
    f()
  ] });
}, xb = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...s
}) => {
  const o = ve("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: o, ...s, children: i() });
}, bb = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const s = ve(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    r
  ), o = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((u, c) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-summary-list__actions-list-item",
      children: /* @__PURE__ */ n.jsxs(
        "a",
        {
          href: u.href,
          className: "nhsuk-link",
          ...u.attributes,
          children: [
            o(u),
            u.visuallyHiddenText && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: u.visuallyHiddenText })
          ]
        }
      )
    },
    c
  )) }) });
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ n.jsx("dl", { className: s, ...a, children: e.map((l, u) => /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ n.jsx("dt", { className: "nhsuk-summary-list__key", children: o(l.key) }),
    /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__value", children: o(l.value) }),
    i(l.actions)
  ] }, u)) }) });
}, In = { current: null }, If = () => {
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
}, Mf = (e) => {
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
}, mr = (e, t, r) => {
  if (r || !t) return e;
  const a = If();
  if (a && a.languages) {
    const s = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (s)
      try {
        return a.highlight(e, a.languages[s], s);
      } catch {
      }
  }
  return Mf(e);
}, Lf = ({
  rows: e,
  head: t,
  caption: r,
  captionSize: a,
  firstCellIsHeader: s = !1,
  responsive: o = !1,
  heading: i,
  headingLevel: l = 3,
  panel: u = !1,
  panelClasses: c,
  tableClasses: d,
  classes: f,
  attributes: m,
  "data-testid": w,
  columns: C,
  data: y,
  visuallyHiddenCaption: p = !1
}) => {
  const g = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), F = ve(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    d
  ), A = ve(f), D = (v, N) => {
    const S = ve(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${v.format}`]: v.format
      },
      v.classes
    ), h = {
      scope: "col",
      ...v.colspan && { colSpan: v.colspan },
      ...v.rowspan && { rowSpan: v.rowspan },
      ...o && { role: "columnheader" },
      ...v.attributes
    };
    let P;
    if (v.node != null)
      P = /* @__PURE__ */ n.jsx(n.Fragment, { children: v.node });
    else if (v.html)
      P = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } });
    else if (v.code != null) {
      const k = Array.isArray(v.code), b = k ? v.code.join(`
`) : v.code, _ = k || b.includes(`
`), M = {
        className: ve("nhsuk-table__code", v.codeClassName, {
          "nhsuk-table__code--block": _,
          "nhsuk-table__code--inline": !_
        }),
        ...v.codeLanguage ? { "data-language": v.codeLanguage } : {}
      }, re = mr(b, v.codeLanguage);
      P = _ ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
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
      P = v.text;
    return /* @__PURE__ */ n.jsx("th", { className: S, ...h, children: P }, N);
  }, $ = (v, N, S) => {
    const h = s && S || v.rowHeader, P = ve(
      h ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${h ? "header" : "cell"}--${v.format}`]: v.format
      },
      v.classes
    ), k = {
      ...h && { scope: "row" },
      ...v.colspan && { colSpan: v.colspan },
      ...v.rowspan && { rowSpan: v.rowspan },
      ...o && {
        role: h ? "rowheader" : "cell",
        ...v.header && { "data-label": v.header }
      },
      ...v.attributes
    };
    let b;
    if (v.node != null)
      b = /* @__PURE__ */ n.jsx(n.Fragment, { children: v.node });
    else if (v.html)
      b = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } });
    else if (v.code != null) {
      const re = Array.isArray(v.code), V = re ? v.code.join(`
`) : v.code, R = re || V.includes(`
`), H = {
        className: ve("nhsuk-table__code", v.codeClassName, {
          "nhsuk-table__code--block": R,
          "nhsuk-table__code--inline": !R
        }),
        ...v.codeLanguage ? { "data-language": v.codeLanguage } : {}
      }, W = mr(
        V,
        v.codeLanguage,
        v.disableHighlight
      );
      b = R ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: W }
        }
      ) }) : /* @__PURE__ */ n.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: W }
        }
      );
    } else
      b = v.text;
    const _ = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      o && v.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        v.header,
        " "
      ] }),
      b
    ] }), M = h ? "th" : "td";
    return /* @__PURE__ */ n.jsx(M, { className: P, ...k, children: _ }, N);
  };
  let T = t, L = e;
  !T && C && C.length && (T = C.map((v) => ({
    text: v.title,
    format: v.format,
    classes: v.headerClasses,
    attributes: v.headerAttributes
  }))), !L && C && y && y.length && (L = y.map((v, N) => C.map((S) => {
    const h = S.accessor ? S.accessor(v, N) : v[S.key];
    let P = { format: S.format, classes: S.cellClasses, attributes: S.cellAttributes };
    if (S.rowHeader && (P.rowHeader = !0), S.render) {
      const k = S.render(h, v, N, S);
      return k == null || typeof k == "boolean" ? { ...P, text: "" } : typeof k == "string" || typeof k == "number" ? { ...P, text: String(k) } : { ...P, ...k };
    }
    return { ...P, text: h != null ? String(h) : "" };
  })));
  const j = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: F,
      ...o && { role: "table" },
      ...m,
      ...w && { "data-testid": w },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: ve(g, p && "nhsuk-u-visually-hidden"), children: r }),
        T && T.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...o && { role: "row" }, children: T.map(
              (v, N) => D(v, N)
            ) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: L && L.map((v, N) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: v.map(
              (S, h) => $(S, h, h === 0)
            )
          },
          N
        )) })
      ]
    }
  );
  return u ? /* @__PURE__ */ n.jsxs($f, { className: c, children: [
    i && /* @__PURE__ */ n.jsx(Bt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    j()
  ] }) : A ? /* @__PURE__ */ n.jsx("div", { className: A, children: j() }) : j();
}, Pf = ({
  children: e,
  size: t,
  className: r
}) => {
  const a = ve(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    r
  );
  return /* @__PURE__ */ n.jsx("caption", { className: a, children: e });
}, ki = ({
  responsive: e,
  className: t,
  children: r,
  ...a
}) => {
  const s = e ? { role: "row" } : {};
  return /* @__PURE__ */ n.jsx("tr", { className: t, ...s, ...a, children: r });
}, Ci = ({
  text: e,
  html: t,
  node: r,
  code: a,
  codeLanguage: s,
  codeClassName: o,
  disableHighlight: i,
  format: l,
  classes: u,
  colspan: c,
  rowspan: d,
  attributes: f,
  responsive: m,
  as: w = "th"
}) => {
  const C = ve(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    u
  ), y = {
    scope: "col",
    ...c && { colSpan: c },
    ...d && { rowSpan: d },
    ...m && { role: "columnheader" },
    ...f
  };
  let p;
  if (r != null) p = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) p = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const F = Array.isArray(a), A = F ? a.join(`
`) : a, D = F || A.includes(`
`), $ = {
      className: ve("nhsuk-table__code", o, {
        "nhsuk-table__code--block": D,
        "nhsuk-table__code--inline": !D
      }),
      ...s ? { "data-language": s } : {}
    }, T = mr(
      A,
      s,
      i
    );
    p = D ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
      "code",
      {
        ...$,
        dangerouslySetInnerHTML: { __html: T }
      }
    ) }) : /* @__PURE__ */ n.jsx("code", { ...$, dangerouslySetInnerHTML: { __html: T } });
  } else p = e;
  const g = w;
  return /* @__PURE__ */ n.jsx(g, { className: C, ...y, children: p });
}, Ff = ({
  text: e,
  html: t,
  node: r,
  code: a,
  codeLanguage: s,
  codeClassName: o,
  disableHighlight: i,
  format: l,
  classes: u,
  colspan: c,
  rowspan: d,
  attributes: f,
  responsive: m,
  rowHeader: w
}) => {
  const C = !!w, y = C ? "th" : "td", p = ve(
    C ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${C ? "header" : "cell"}--${l}`,
    u
  ), g = {
    ...c && { colSpan: c },
    ...d && { rowSpan: d },
    ...C && { scope: "row" },
    ...m && { role: C ? "rowheader" : "cell" },
    ...f
  };
  let F;
  if (r != null) F = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) F = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const A = Array.isArray(a), D = A ? a.join(`
`) : a, $ = A || D.includes(`
`), T = {
      className: ve("nhsuk-table__code", o, {
        "nhsuk-table__code--block": $,
        "nhsuk-table__code--inline": !$
      }),
      ...s ? { "data-language": s } : {}
    }, L = mr(D, s, i);
    F = $ ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx("code", { ...T, dangerouslySetInnerHTML: { __html: L } }) }) : /* @__PURE__ */ n.jsx("code", { ...T, dangerouslySetInnerHTML: { __html: L } });
  } else F = e;
  return /* @__PURE__ */ n.jsx(y, { className: p, ...g, children: F });
}, zt = Lf;
zt.Caption = Pf;
zt.BodyRow = ki;
zt.HeaderCell = Ci;
zt.Cell = Ff;
let _o = !1, So = !1;
Object.defineProperty(zt, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !_o && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), _o = !0), ki;
  }
});
Object.defineProperty(zt, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !So && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), So = !0), Ci;
  }
});
const yb = Sn(({
  items: e,
  defaultActiveTab: t,
  activeTab: r,
  onTabChange: a,
  onTabFocus: s,
  onTabListBlur: o,
  onEscape: i,
  autoActivate: l = !0,
  className: u,
  id: c,
  "data-testid": d,
  ...f
}, m) => {
  const w = r !== void 0, [C, y] = Fe(() => t || e[0]?.id || ""), p = w ? r : C, g = Ae(null), F = Ae(/* @__PURE__ */ new Map()), A = xe((N) => {
    w || y(N), a?.(N);
  }, [w, a]), D = xe((N) => {
    s?.(N), l && A(N);
  }, [s, l, A]), $ = xe((N, S) => {
    const h = e.filter((b) => !b.disabled).map((b) => b.id), P = h.indexOf(S);
    let k = null;
    switch (N.key) {
      case "ArrowLeft":
        k = P > 0 ? P - 1 : h.length - 1;
        break;
      case "ArrowRight":
        k = P < h.length - 1 ? P + 1 : 0;
        break;
      case "Home":
        k = 0;
        break;
      case "End":
        k = h.length - 1;
        break;
      case "Escape":
        N.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (k !== null) {
      N.preventDefault();
      const b = h[k], _ = F.current.get(b);
      _ && (_.focus(), D(b));
    }
  }, [e, D, i]), T = xe((N, S) => {
    S ? F.current.set(N, S) : F.current.delete(N);
  }, []), L = xe((N) => {
    const S = F.current.get(N);
    S && S.focus();
  }, []);
  Uo(m, () => ({
    focusTab: L,
    getActiveTab: () => p,
    getTabListElement: () => g.current
  }), [L, p]);
  const j = xe((N) => {
    const S = N.relatedTarget;
    g.current?.contains(S) || o?.();
  }, [o]), v = ve("nhsuk-tabs", u);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: v,
      id: c,
      "data-testid": d,
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
                onBlur: j,
                children: e.map((N) => {
                  const S = N.id === p, h = N.disabled, P = ve("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": S,
                    "nhsuk-tabs__list-item--disabled": h
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: P, role: "presentation", children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (k) => T(N.id, k),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": S,
                      "aria-controls": `${N.id}-panel`,
                      id: `${N.id}-tab`,
                      tabIndex: S ? 0 : -1,
                      disabled: h,
                      onClick: () => !h && A(N.id),
                      onKeyDown: (k) => !h && $(k, N.id),
                      onFocus: () => !h && D(N.id),
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
          const S = N.id === p;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${N.id}-tab`,
              id: `${N.id}-panel`,
              hidden: !S,
              children: N.content
            },
            N.id
          );
        })
      ]
    }
  );
}), Af = Sn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...u
  }, c) => {
    const d = [
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
        className: d,
        open: s,
        ...u,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
Af.displayName = "Details";
const Ef = Sn(
  ({
    title: e,
    type: t,
    items: r,
    hidePrefix: a = !1,
    headingLevel: s = 3,
    className: o,
    ...i
  }, l) => {
    const u = ["nhsuk-do-dont-list"];
    o && u.push(o);
    const c = [
      "nhsuk-list",
      t === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ], d = () => t === "cross" ? /* @__PURE__ */ n.jsxs(
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
    ), f = (w) => t === "cross" && !a ? `do not ${w}` : w, m = () => /* @__PURE__ */ n.jsx(
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
        className: u.join(" "),
        ...i,
        children: [
          m(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: c.join(" "), role: "list", children: r.map((w, C) => /* @__PURE__ */ n.jsxs("li", { children: [
            d(),
            f(w.item)
          ] }, C)) }) })
        ]
      }
    );
  }
);
Ef.displayName = "DoDontList";
const Rf = Sn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...u
  }, c) => {
    const d = [
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
        className: d,
        open: s,
        ...u,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
Rf.displayName = "Expander";
const Bf = Sn(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, s) => {
    const o = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, u) => {
      const c = u + 1, d = `${t}-${c}-hint`, f = `${t}-${c}-status`, m = !!l.href, w = [
        "nhsuk-task-list__item",
        m && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), C = [
        l.hint && d,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Hf,
        {
          item: l,
          itemClasses: w,
          hasLink: m,
          hintId: d,
          statusId: f,
          ariaDescribedBy: C
        },
        u
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
), Hf = ({
  item: e,
  itemClasses: t,
  hasLink: r,
  hintId: a,
  statusId: s,
  ariaDescribedBy: o
}) => {
  const i = () => {
    const c = e.title.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, d = [
      r ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return r ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: d,
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
  ) : /* @__PURE__ */ n.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, u = () => {
    const c = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let d;
    return e.status.tag ? d = /* @__PURE__ */ n.jsx(Oe, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ n.jsx("div", { className: c, id: s, children: d });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    u()
  ] });
};
Bf.displayName = "TaskList";
const vb = ({
  heading: e,
  headingLevel: t = 3,
  text: r,
  html: a,
  children: s,
  className: o,
  ...i
}) => {
  const l = /important/i.test(e), u = () => s || (a ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r ? /* @__PURE__ */ n.jsx("p", { children: r }) : null), c = [
    "nhsuk-warning-callout",
    o
  ].filter(Boolean).join(" "), d = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: c,
      ...i,
      children: [
        Wo(
          d,
          { className: "nhsuk-warning-callout__label" },
          l ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            e,
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" })
          ] }) : /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Important: " }),
            e
          ] })
        ),
        u()
      ]
    }
  );
}, wb = ({
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
}, Of = ({
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
    /* @__PURE__ */ n.jsx(lt, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ n.jsx(lt, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ n.jsx(lt, { variant: "secondary", size: "small", onClick: r, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ n.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ n.jsx(
      rr,
      {
        id: "slot-matrix-density-select",
        name: "slot-matrix-density",
        ariaLabel: "Change density",
        value: s,
        onChange: (u) => o?.(u.target.value),
        options: [
          { value: "comfortable", text: "Comfortable" },
          { value: "compact", text: "Compact" }
        ]
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ n.jsx(
      rr,
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
] }), zf = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ n.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((r) => /* @__PURE__ */ n.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ n.jsx(Oe, { color: Wf(r.status), text: r.label }) }, r.status)) });
function Wf(e) {
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
const _b = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: r,
  defaultValue: a,
  onChange: s,
  selectionMode: o = "single",
  a11yMode: i,
  className: l,
  style: u,
  getSlotAriaLabel: c,
  toolbar: d,
  enableDefaultToolbar: f = !0,
  legendItems: m,
  enableDefaultLegend: w = !0,
  legendPlacement: C = "bottom",
  onA11yModeChange: y
}) => {
  const [p, g] = Fe("grid"), F = i || p, [A, D] = Fe(a || []), $ = r ?? A, T = $e(() => {
    const k = /* @__PURE__ */ new Set();
    return e.forEach((b) => k.add(new Date(b.start).getTime())), Array.from(k).sort((b, _) => b - _);
  }, [e]), L = $e(() => {
    const k = {};
    return e.forEach((b) => {
      const _ = new Date(b.start).getTime();
      k[_] || (k[_] = {});
      const M = b.capacity - b.booked - (b.held || 0);
      k[_][b.sessionId] = { slot: b, remaining: M };
    }), k;
  }, [e]), j = xe((k) => {
    if (o === "single") {
      const b = [k.id];
      r || D(b), s?.(b, { lastAction: "select" });
    } else {
      const b = $.includes(k.id), _ = b ? $.filter((M) => M !== k.id) : [...$, k.id];
      r || D(_), s?.(_, { lastAction: b ? "deselect" : "select" });
    }
  }, [o, $, r, s]), v = $e(() => m || (w ? Array.from(new Set(e.map((b) => b.status))).map((b) => ({
    status: b,
    label: b.charAt(0).toUpperCase() + b.slice(1)
  })) : void 0), [m, w, e]), N = v ? /* @__PURE__ */ n.jsx(
    zf,
    {
      items: v,
      orientation: C === "left" || C === "right" ? "vertical" : "horizontal"
    }
  ) : null, S = (k) => {
    i || g(k), y?.(k);
  }, h = d || (f ? /* @__PURE__ */ n.jsx(
    Of,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: F,
      onA11yModeChange: S
    }
  ) : null), P = /* @__PURE__ */ n.jsx("div", { style: u, className: ve(l), children: /* @__PURE__ */ n.jsx(Aa, { className: ve("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(nn, { children: /* @__PURE__ */ n.jsx(Pn, { width: tn.Full, children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    h,
    C === "top" && N,
    /* @__PURE__ */ n.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((k) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => j(k), "aria-pressed": $.includes(k.id), children: [
      Mn(new Date(k.start)),
      " – ",
      Mn(new Date(k.end)),
      " (",
      k.status,
      ")"
    ] }) }, k.id)) }),
    C === "bottom" && N
  ] }) }) }) }) });
  return F === "list" ? P : /* @__PURE__ */ n.jsx("div", { style: u, className: ve(l), children: /* @__PURE__ */ n.jsx(Aa, { className: ve("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(nn, { children: /* @__PURE__ */ n.jsx(Pn, { width: tn.Full, children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    h,
    C === "top" && N,
    /* @__PURE__ */ n.jsxs("div", { role: "grid", "aria-rowcount": T.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((k) => /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": `Session ${k.specialty}`, className: "nhs-slot-matrix__session-header", children: k.specialty }, k.id))
      ] }),
      T.map((k) => /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Mn(new Date(k)), children: Mn(new Date(k)) }),
        t.map((b) => {
          const _ = L[k]?.[b.id];
          if (!_)
            return /* @__PURE__ */ n.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, b.id);
          const { slot: M, remaining: re } = _, V = $.includes(M.id), R = c ? c(M) : `Slot ${Mn(new Date(M.start))} ${M.status}${re === 0 ? " full" : ""}`;
          return /* @__PURE__ */ n.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": M.status,
              className: ve("nhs-slot-matrix__cell", V && "nhs-slot-matrix__cell--selected"),
              "aria-label": R,
              "aria-selected": V || void 0,
              onClick: () => j(M),
              children: re > 0 ? `${re} left` : "Full"
            },
            M.id
          );
        })
      ] }, k))
    ] }),
    C === "bottom" && N
  ] }) }) }) }) });
};
function ko(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Mn(e) {
  return `${ko(e.getHours())}:${ko(e.getMinutes())}`;
}
const Uf = ({
  title: e,
  value: t,
  subtitle: r,
  variant: a = "default",
  href: s,
  className: o = "",
  ariaLabel: i,
  ...l
}) => {
  const u = [
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
      className: `${u} nhs-fdp-summary-card--clickable`,
      href: s,
      "aria-label": i || `${e}: ${t}`,
      ...l,
      children: c
    }
  ) : /* @__PURE__ */ n.jsx(
    "div",
    {
      className: u,
      "aria-label": i,
      ...l,
      children: c
    }
  );
}, Sb = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(Aa, { children: /* @__PURE__ */ n.jsx(nn, { children: e.map((s, o) => /* @__PURE__ */ n.jsx(
    Pn,
    {
      width: tn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": o,
      children: /* @__PURE__ */ n.jsx(Uf, { ...s })
    },
    o
  )) }) }) });
}, Gf = ft.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: r,
    onSort: a,
    selectedRowIndex: s,
    onRowSelect: o,
    id: i,
    testId: l,
    ariaLabel: u,
    ariaLabelledby: c,
    ariaDescribedby: d,
    className: f,
    tableClassName: m,
    bordered: w = !1,
    striped: C = !1,
    responsive: y = !1,
    tableType: p = "default"
  }, g) => {
    const F = Ae(null), A = Ae(null), D = Ae(null);
    ft.useImperativeHandle(g, () => F.current, []);
    const [$, T] = Fe(0), [L, j] = Fe(0), [v, N] = Fe("headers"), [S, h] = Fe("browse"), P = t.length, k = e.length, b = $e(() => !r || r.length === 0 ? e : [...e].sort((W, se) => {
      for (const { key: z, direction: pe } of r) {
        const we = W[z], le = se[z];
        if (we == null && le == null) continue;
        if (we == null) return 1;
        if (le == null) return -1;
        let fe = 0;
        if (typeof we == "number" && typeof le == "number" ? fe = we - le : fe = String(we).localeCompare(String(le)), fe !== 0)
          return pe === "asc" ? fe : -fe;
      }
      return 0;
    }), [e, r]), _ = xe((W, se) => {
      setTimeout(() => {
        const z = F.current?.querySelector(
          `tbody tr:nth-child(${W + 1}) td:nth-child(${se + 1})`
        );
        z && (z.focus(), typeof z.scrollIntoView == "function" && z.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), M = xe((W) => {
      setTimeout(() => {
        const se = F.current?.querySelector(`th:nth-child(${W + 1})`);
        se && (se.focus(), typeof se.scrollIntoView == "function" && se.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), re = xe((W) => {
      a?.(W);
    }, [a]), V = xe((W) => {
      o?.(W);
    }, [o]), R = xe((W) => {
      const { key: se } = W;
      switch (se) {
        case "Enter":
          if (W.preventDefault(), v === "headers" && S === "browse")
            h("navigate"), M(L);
          else if (v === "headers" && S === "navigate") {
            const z = t[L];
            z && re(z.key);
          } else v === "cells" && S === "browse" ? (h("navigate"), _($, L)) : v === "cells" && S === "navigate" && V($);
          break;
        case "Escape":
          W.preventDefault(), (v === "headers" && S === "navigate" || v === "cells" && S === "navigate") && h("browse");
          break;
        case "ArrowLeft":
          if (W.preventDefault(), S === "navigate" || S === "browse" && v === "headers") {
            if (v === "headers") {
              const z = Math.max(0, L - 1);
              j(z), M(z);
            } else if (v === "cells") {
              const z = Math.max(0, L - 1);
              j(z), _($, z);
            }
          }
          break;
        case "ArrowRight":
          if (W.preventDefault(), S === "navigate" || S === "browse" && v === "headers") {
            if (v === "headers") {
              const z = Math.min(P - 1, L + 1);
              j(z), M(z);
            } else if (v === "cells") {
              const z = Math.min(P - 1, L + 1);
              j(z), _($, z);
            }
          }
          break;
        case "ArrowUp":
          if (W.preventDefault(), v === "cells") {
            if (S === "browse") {
              const z = Math.max(0, $ - 1);
              T(z), _(z, 0), j(0);
            } else if (S === "navigate")
              if ($ > 0) {
                const z = $ - 1;
                T(z), _(z, L);
              } else
                N("headers"), h("browse"), M(L);
          }
          break;
        case "ArrowDown":
          if (W.preventDefault(), v === "headers" && S === "browse")
            N("cells"), T(0), j(0), _(0, 0);
          else if (v === "cells") {
            const z = k - 1;
            if (S === "browse") {
              const pe = Math.min(z, $ + 1);
              T(pe), _(pe, 0), j(0);
            } else if (S === "navigate" && $ < z) {
              const pe = $ + 1;
              T(pe), _(pe, L);
            }
          }
          break;
        case "Home":
          W.preventDefault(), v === "headers" ? (j(0), M(0)) : v === "cells" && (W.ctrlKey ? (T(0), j(0), _(0, 0)) : (j(0), _($, 0)));
          break;
        case "End":
          if (W.preventDefault(), v === "headers") {
            const z = P - 1;
            j(z), M(z);
          } else if (v === "cells")
            if (W.ctrlKey) {
              const z = k - 1, pe = P - 1;
              T(z), j(pe), _(z, pe);
            } else {
              const z = P - 1;
              j(z), _($, z);
            }
          break;
        case " ":
          if (W.preventDefault(), v === "headers" && S === "navigate") {
            const z = t[L];
            z && re(z.key);
          } else v === "cells" && S === "navigate" && V($);
          break;
      }
    }, [
      v,
      S,
      L,
      $,
      P,
      k,
      t,
      _,
      M,
      re,
      V
    ]);
    ze(() => {
      const W = F.current;
      if (W)
        return W.addEventListener("keydown", R), () => W.removeEventListener("keydown", R);
    }, [R]);
    const H = ve(
      "nhsuk-table",
      m,
      {
        "nhsuk-table--responsive": y,
        "nhsuk-table--bordered": w,
        "nhsuk-table--striped": C,
        "nhsuk-table--compact": p === "compact"
      },
      f
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: F,
        className: H,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": u,
        "aria-labelledby": c,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: A, role: "row", children: t.map((W, se) => {
            const z = r?.find((le) => le.key === W.key), pe = !!z, we = v === "headers" && L === se;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: ve("sortable-header", {
                  "sortable-header--focused": we
                }),
                role: "columnheader",
                tabIndex: we ? 0 : -1,
                onClick: () => re(W.key),
                onKeyDown: (le) => {
                  (le.key === "Enter" || le.key === " ") && (le.preventDefault(), re(W.key));
                },
                "aria-sort": pe ? z?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: W.label }),
                  pe && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((le) => le.key === W.key) + 1 }),
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
              W.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: D, className: "nhsuk-table__body", role: "rowgroup", children: b.map((W, se) => {
            const z = s === se, pe = v === "cells" && $ === se;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: ve("data-row", {
                  "data-row--selected": z,
                  "data-row--focused": pe
                }),
                "aria-selected": z,
                children: t.map((we, le) => {
                  const fe = we.tableRenderer ? we.tableRenderer(W) : we.render ? we.render(W) : W[we.key], ne = v === "cells" && $ === se && L === le, Z = () => typeof fe == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: fe ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: fe ? "Yes" : "No" })
                  ] }) : String(fe ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ve("data-cell", {
                        "data-cell--focused": ne
                      }),
                      tabIndex: ne ? 0 : -1,
                      onClick: () => V(se),
                      children: Z()
                    },
                    we.key
                  );
                })
              },
              se
            );
          }) })
        ]
      }
    );
  }
);
Gf.displayName = "AriaDataGrid";
const ji = ({
  sortConfig: e,
  columns: t,
  onSortChange: r,
  className: a = "",
  emptyDescription: s = "No sorting applied",
  activeDescription: o,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: u = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const f = Ae(null), m = Ae(null), w = Ae(null), C = xe((v, N) => {
    u || (m.current = N, v.dataTransfer.effectAllowed = "move", v.dataTransfer.setData("text/plain", N));
  }, [u]), y = xe((v, N) => {
    u || m.current === N || (v.preventDefault(), v.dataTransfer.dropEffect = "move", w.current = N);
  }, [u]), p = xe((v, N) => {
    if (u) return;
    v.preventDefault();
    const S = m.current;
    if (!S || S === N) return;
    const h = e.findIndex((k) => k.key === S), P = e.findIndex((k) => k.key === N);
    if (h !== -1 && P !== -1) {
      const k = [...e], [b] = k.splice(h, 1);
      k.splice(P, 0, b), r(k);
    }
    m.current = null, w.current = null;
  }, [u, e, r]), g = xe(() => {
    m.current = null, w.current = null;
  }, []), F = xe((v) => {
    const N = t.find((S) => S.key === v);
    return N ? N.label : v;
  }, [t]), A = xe((v) => ["red", "orange", "blue", "aqua-green", "grey"][v] || "grey", []), D = xe((v) => {
    if (u) return;
    const N = e.map(
      (S) => S.key === v ? { ...S, direction: S.direction === "asc" ? "desc" : "asc" } : S
    );
    r(N);
  }, [e, r, u]), $ = xe((v) => {
    if (u) return;
    const N = e.filter((S) => S.key !== v);
    r(N);
  }, [e, r, u]), T = xe(() => {
    u || r([]);
  }, [r, u]), L = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const v = e.map((N, S) => {
      const h = N.direction === "asc" ? "ascending" : "descending";
      return `${S + 1}. ${F(N.key)} (${h})`;
    });
    if (v.length === 1)
      return `Sorted by: ${v[0]}`;
    if (v.length === 2)
      return `Sorted by: ${v.join(" and ")}`;
    {
      const N = v.pop();
      return `Sorted by: ${v.join(", ")}, and ${N}`;
    }
  }, j = $e(() => {
    const v = ["sort-description"];
    return l && v.push("sort-help"), d && v.push(d), v.join(" ");
  }, [l, d]);
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
          ref: f,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": c,
          "aria-describedby": j,
          children: e.map((v, N) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !u,
              onDragStart: (S) => C(S, v.key),
              onDragOver: (S) => y(S, v.key),
              onDrop: (S) => p(S, v.key),
              onDragEnd: g,
              onClick: () => D(v.key),
              style: { cursor: u ? "default" : "pointer" },
              title: u ? "" : `Click to toggle sort direction. Currently ${v.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": v.key,
              children: /* @__PURE__ */ n.jsx(
                Oe,
                {
                  color: A(N),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => $(v.key),
                  disabled: u,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${N + 1}`, children: N + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: F(v.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (S) => {
                          S.stopPropagation(), D(v.key);
                        },
                        disabled: u,
                        "aria-label": `Toggle sort direction for ${F(v.key)}. Currently ${v.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${v.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${v.direction}`,
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
            v.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        lt,
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
    l && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] });
};
function Vf(e, t) {
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
      const { newLength: o } = t.payload, i = new Array(o).fill(!1), l = new Array(o).fill(null), u = new Array(o).fill([]);
      for (let c = 0; c < Math.min(e.tabLoadingStates.length, o); c++)
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
const za = Sn(function(t, r) {
  const {
    dataConfig: a = {},
    tabPanels: s,
    selectedIndex: o,
    onTabChange: i,
    onGlobalRowSelectionChange: l,
    ariaLabel: u,
    ariaDescription: c,
    className: d = "",
    disabled: f = !1,
    orientation: m = "horizontal",
    id: w,
    isLoading: C = !1,
    loadingComponent: y,
    error: p = null,
    errorComponent: g,
    "data-testid": F,
    actions: A,
    actionsMinGap: D = 16,
    forceActionsAbove: $ = !1
  } = t, L = Ae(
    w || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, j = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), v = `${L}-description`, N = `${L}-navigation-help`, {
    dataComparator: S = (I, K) => JSON.stringify(I) === JSON.stringify(K),
    filterFunction: h = (I) => I,
    booleanRenderer: P = (I) => I ? "✓" : "✗"
  } = a || {}, k = o !== void 0, b = o ?? 0, [_, M] = Fe({
    focusArea: "tabs",
    focusedTabIndex: b,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), re = $e(() => ({
    selectedIndex: b,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [b]), [V, R] = Go(Vf, re);
  ze(() => {
    const I = V.tabLoadingStates.length, K = s.length;
    I !== K && R({ type: "ADJUST_ARRAYS", payload: { newLength: K } });
  }, [s.length]), ze(() => {
    k && R({ type: "SET_SELECTED_INDEX", payload: b });
  }, [b, k]), ze(() => {
    M((I) => ({
      ...I,
      focusArea: "tabs",
      focusedTabIndex: V.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [V.selectedIndex]), ze(() => {
    l && l(V.globalSelectedRowData);
  }, [V.globalSelectedRowData, l]);
  const H = xe(
    (I, K) => S(I, K),
    [S]
  ), W = xe(
    (I) => {
      I >= 0 && I < s.length && !s[I].disabled && (R({ type: "SET_SELECTED_INDEX", payload: I }), M((K) => ({
        ...K,
        focusedTabIndex: I,
        focusArea: "tabs"
      })), i?.(I));
    },
    [s, i]
  ), se = Ae(!1), z = xe(
    (I, K) => {
      if (!K?.force && !se.current && I === 0) {
        se.current = !0;
        return;
      }
      se.current = !0, setTimeout(() => {
        const oe = pe.current[I], U = oe?.parentElement;
        if (oe && U) {
          const O = oe.offsetLeft, te = oe.offsetWidth, de = U.clientWidth, ie = O - de / 2 + te / 2;
          try {
            U.scrollTo({
              left: Math.max(0, ie),
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
          tabListElementExists: !!U
        });
      }, 50);
    },
    []
  ), pe = Ae([]), we = Ae([]), le = xe(
    (I, K) => {
      const oe = V.sortConfig || [], U = oe.find(
        (de) => de.key === K
      );
      let O;
      U ? U.direction === "asc" ? O = oe.map(
        (de) => de.key === K ? { ...de, direction: "desc" } : de
      ) : O = oe.filter(
        (de) => de.key !== K
      ) : O = [...oe, { key: K, direction: "asc" }], R({
        type: "SET_SORT",
        payload: O
      }), s[I].onSort?.(K);
    },
    [V.sortConfig, s]
  ), fe = xe(
    (I) => {
      setTimeout(() => {
        const K = document.querySelector(
          `[data-tab-panel="${V.selectedIndex}"] th:nth-child(${I + 1})`
        );
        K && K.focus();
      }, 0);
    },
    [V.selectedIndex]
  ), ne = xe(
    (I) => P(I),
    [P]
  ), Z = xe(
    (I, K) => {
      setTimeout(() => {
        const oe = document.querySelector(
          `[data-tab-panel="${V.selectedIndex}"] tbody tr:nth-child(${I + 1}) td:nth-child(${K + 1})`
        );
        oe && oe.focus();
      }, 0);
    },
    [V.selectedIndex]
  );
  ze(() => {
    _.isGridActive && (_.focusArea === "headers" ? setTimeout(() => {
      fe(_.focusedHeaderIndex);
    }, 0) : _.focusArea === "cells" && setTimeout(() => {
      Z(
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
    fe,
    Z
  ]), ze(() => {
    z(V.selectedIndex);
  }, [V.selectedIndex, z]);
  const ue = xe(
    (I, K) => {
      const { key: oe } = I, U = s[V.selectedIndex], O = U?.columns.length || 0;
      switch (oe) {
        case "ArrowLeft":
          I.preventDefault();
          const te = Math.max(0, K - 1);
          M((Ce) => ({
            ...Ce,
            focusedHeaderIndex: te
          })), fe(te);
          break;
        case "ArrowRight":
          I.preventDefault();
          const de = Math.min(O - 1, K + 1);
          M((Ce) => ({
            ...Ce,
            focusedHeaderIndex: de
          })), fe(de);
          break;
        case "ArrowUp":
          I.preventDefault(), M((Ce) => ({
            ...Ce,
            focusArea: "tabs",
            focusedTabIndex: V.selectedIndex
          })), z(V.selectedIndex), pe.current[V.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          I.preventDefault(), M((Ce) => ({
            ...Ce,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: K,
            isGridActive: !0
          }));
          break;
        case "Home":
          I.preventDefault(), M((Ce) => ({ ...Ce, focusedHeaderIndex: 0 })), fe(0);
          break;
        case "End":
          I.preventDefault();
          const ie = O - 1;
          M((Ce) => ({
            ...Ce,
            focusedHeaderIndex: ie
          })), fe(ie);
          break;
        case "Enter":
        case " ":
          I.preventDefault();
          const be = U?.columns[K]?.key;
          be && le(V.selectedIndex, be);
          break;
      }
    },
    [
      s,
      V.selectedIndex,
      le,
      M,
      fe,
      Z,
      pe
    ]
  ), x = xe(
    (I, K, oe) => {
      const { key: U } = I, O = s[V.selectedIndex], te = O?.data.length || 0, de = O?.columns.length || 0;
      switch (U) {
        case "ArrowUp":
          if (I.preventDefault(), K === 0)
            M((ge) => ({
              ...ge,
              focusArea: "headers",
              focusedHeaderIndex: oe,
              isGridActive: !1
            })), fe(oe);
          else {
            const ge = K - 1;
            M((Ie) => ({
              ...Ie,
              focusedRowIndex: ge
            })), Z(ge, oe);
          }
          break;
        case "ArrowDown":
          I.preventDefault();
          const ie = Math.min(te - 1, K + 1);
          M((ge) => ({
            ...ge,
            focusedRowIndex: ie
          })), Z(ie, oe);
          break;
        case "ArrowLeft":
          I.preventDefault();
          const be = Math.max(0, oe - 1);
          M((ge) => ({
            ...ge,
            focusedColumnIndex: be
          })), Z(K, be);
          break;
        case "ArrowRight":
          I.preventDefault();
          const Ce = Math.min(de - 1, oe + 1);
          M((ge) => ({
            ...ge,
            focusedColumnIndex: Ce
          })), Z(K, Ce);
          break;
        case "Home":
          I.preventDefault(), I.ctrlKey ? (M((ge) => ({
            ...ge,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), Z(0, 0)) : (M((ge) => ({ ...ge, focusedColumnIndex: 0 })), Z(K, 0));
          break;
        case "End":
          if (I.preventDefault(), I.ctrlKey) {
            const ge = te - 1, Ie = de - 1;
            M((He) => ({
              ...He,
              focusedRowIndex: ge,
              focusedColumnIndex: Ie
            })), Z(ge, Ie);
          } else {
            const ge = de - 1;
            M((Ie) => ({
              ...Ie,
              focusedColumnIndex: ge
            })), Z(K, ge);
          }
          break;
        case "Enter":
        case " ":
          if (I.preventDefault(), O && O.data[K]) {
            const ge = O.data.some(
              (Pe) => "ews_data" in Pe
            ) ? h(O.data, V.filters) : O.data, Ie = V.sortConfig;
            let He = ge;
            if (Ie && Ie.length > 0 && (He = [...ge].sort((Pe, Ee) => {
              for (const { key: Ye, direction: qe } of Ie) {
                let Qe = Pe[Ye], yt = Ee[Ye];
                const et = O.columns.find(
                  (kn) => kn.key === Ye
                );
                if (et?.tableRenderer ? (Qe = et.tableRenderer(Pe), yt = et.tableRenderer(Ee)) : et?.render && (Qe = et.render(Pe), yt = et.render(Ee)), Qe == null && yt == null) continue;
                if (Qe == null) return qe === "asc" ? -1 : 1;
                if (yt == null) return qe === "asc" ? 1 : -1;
                let nt = 0;
                if (typeof Qe == "number" && typeof yt == "number" ? nt = Qe - yt : nt = String(Qe).localeCompare(
                  String(yt),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), nt !== 0)
                  return qe === "asc" ? nt : -nt;
              }
              return 0;
            })), He[K]) {
              const Pe = He[K], Ye = V.globalSelectedRowData && H(V.globalSelectedRowData, Pe) ? null : Pe;
              R({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: Ye
              });
            }
          }
          break;
      }
    },
    [
      s,
      V.selectedIndex,
      V.filters,
      V.sortConfig,
      h,
      H,
      R,
      M,
      fe,
      Z
    ]
  ), B = xe(
    (I, K) => h(I, K),
    [h]
  );
  if (Uo(
    r,
    () => ({
      selectTab: (I) => {
        I >= 0 && I < s.length && (R({ type: "SET_SELECTED_INDEX", payload: I }), i?.(I));
      },
      refreshData: (I) => {
        console.log("Refreshing data for tab:", I ?? "all");
      },
      exportData: (I) => {
        const K = I ?? V.selectedIndex, oe = s[K];
        return oe ? oe.data : [];
      },
      getSelectedRows: (I) => V.globalSelectedRowData ? [] : [],
      clearSelection: (I) => {
        R({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (I) => {
        R({ type: "SET_FILTERS", payload: I });
      }
    }),
    [V.selectedIndex, V.selectedRows, s, i]
  ), C)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`,
        "data-testid": F,
        children: y || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx(
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
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`,
        "data-testid": F,
        children: g || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ n.jsx("p", { children: p })
        ] })
      }
    );
  const G = Ae(null), ee = Ae(null), X = Ae(null), [ae, me] = Fe(!0);
  ze(() => {
    if (!A) {
      me(!1);
      return;
    }
    if ($) {
      me(!1);
      return;
    }
    function I() {
      if (!G.current || !ee.current || !X.current) return;
      const U = G.current.clientWidth, O = Array.from(
        ee.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), te = O.reduce((Ce, ge) => Ce + ge.offsetWidth, 0), de = X.current.offsetWidth, ie = Math.max(8 * (O.length - 1), 0), be = te + ie + de + D <= U;
      me(be);
    }
    const K = requestAnimationFrame(() => I()), oe = new ResizeObserver(() => I());
    return G.current && oe.observe(G.current), ee.current && oe.observe(ee.current), () => {
      cancelAnimationFrame(K), oe.disconnect();
    };
  }, [A, D, $, s.length]);
  const Se = X, ce = xe(() => Se.current ? Array.from(
    Se.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((I) => !I.hasAttribute("disabled")) : [], []), J = xe(
    (I) => {
      const K = ce();
      if (!K.length) return;
      const oe = Math.max(0, Math.min(I, K.length - 1));
      K[oe].focus(), M((U) => ({ ...U, focusArea: "actions", focusedActionIndex: oe }));
    },
    [ce]
  ), E = xe(() => J(0), [J]), Q = xe(
    (I, K) => {
      const { key: oe } = I, U = s.length - 1;
      switch (oe) {
        case "ArrowUp": {
          A && !ae && (I.preventDefault(), E());
          break;
        }
        case "ArrowLeft": {
          I.preventDefault();
          const O = K > 0 ? K - 1 : U;
          W(O), z(O), pe.current[O]?.focus();
          break;
        }
        case "ArrowRight": {
          if (I.preventDefault(), K === U && A && ae) {
            E();
            return;
          }
          const O = K < U ? K + 1 : 0;
          W(O), z(O), pe.current[O]?.focus();
          break;
        }
        case "ArrowDown": {
          I.preventDefault(), M((O) => ({
            ...O,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          I.preventDefault(), W(0), z(0), pe.current[0]?.focus();
          break;
        }
        case "End": {
          I.preventDefault(), W(U), z(U), pe.current[U]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          I.preventDefault(), W(K);
          break;
        }
        case "Tab": {
          !I.shiftKey && K === U && A && ae && E();
          break;
        }
      }
    },
    [s.length, W, z, A, ae, E]
  ), q = xe((I) => {
    const { key: K } = I, oe = ce();
    if (!oe.length) return;
    const U = oe.findIndex((O) => O === document.activeElement);
    switch (K) {
      case "ArrowLeft": {
        if (ae)
          if (U > 0)
            I.preventDefault(), J(U - 1);
          else {
            I.preventDefault();
            const O = s.length - 1;
            W(O), z(O), pe.current[O]?.focus(), M((te) => ({ ...te, focusArea: "tabs", focusedTabIndex: O }));
          }
        break;
      }
      case "ArrowRight": {
        ae && (U < oe.length - 1 ? (I.preventDefault(), J(U + 1)) : (I.preventDefault(), W(0), z(0), pe.current[0]?.focus(), M((O) => ({ ...O, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (ae)
          I.preventDefault(), M((O) => ({ ...O, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          I.preventDefault();
          const O = V.selectedIndex;
          pe.current[O]?.focus(), M((te) => ({ ...te, focusArea: "tabs", focusedTabIndex: O }));
        }
        break;
      }
    }
  }, [ce, ae, J, s.length, W, z, V.selectedIndex]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${m} ${d}`,
      id: w,
      "data-testid": F,
      ref: G,
      children: [
        c && !j && /* @__PURE__ */ n.jsx("div", { id: v, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: N,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ n.jsx(
          ji,
          {
            sortConfig: V.sortConfig || [],
            columns: s.flatMap(
              (I) => I.columns.map((K) => ({ key: K.key, label: K.label }))
            ).filter(
              (I, K, oe) => oe.findIndex((U) => U.key === I.key) === K
              // Remove duplicates
            ),
            onSortChange: (I) => {
              R({ type: "SET_SORT", payload: I });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        A && !ae && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: X,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: q,
            children: A
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${ae ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": u,
              "aria-describedby": c ? j ? c : v : N,
              "aria-orientation": m,
              className: "aria-tabs-datagrid__tabs",
              ref: ee,
              children: s.map((I, K) => {
                const oe = K === V.selectedIndex, U = I.disabled || f;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${I.id}`,
                    "aria-controls": `panel-${I.id}`,
                    "aria-selected": oe,
                    "aria-disabled": U,
                    tabIndex: oe ? 0 : -1,
                    ref: (O) => {
                      pe.current[K] = O;
                    },
                    onClick: () => W(K),
                    onKeyDown: (O) => Q(O, K),
                    disabled: U,
                    className: [
                      "aria-tabs-datagrid__tab",
                      oe ? "aria-tabs-datagrid__tab--selected" : "",
                      U ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: I.label }),
                      V.tabLoadingStates[K] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      V.tabErrors[K] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  I.id
                );
              })
            }
          ),
          A && ae && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: X,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: q,
              children: A
            }
          )
        ] }),
        s.map((I, K) => {
          const oe = K === V.selectedIndex;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${I.id}`,
              "aria-labelledby": `tab-${I.id}`,
              tabIndex: 0,
              hidden: !oe,
              ref: (U) => {
                we.current[K] = U;
              },
              className: `aria-tabs-datagrid__panel ${I.className || ""}`,
              "data-tab-panel": K,
              children: oe && (() => {
                const U = I.data.some(
                  (te) => "ews_data" in te
                ) ? B(I.data, V.filters) : I.data, O = $e(() => {
                  const te = V.sortConfig;
                  return !te || te.length === 0 ? U : [...U].sort((de, ie) => {
                    for (const { key: be, direction: Ce } of te) {
                      let ge = de[be], Ie = ie[be];
                      const He = I.columns.find(
                        (Ee) => Ee.key === be
                      );
                      if (He?.tableRenderer ? (ge = He.tableRenderer(de), Ie = He.tableRenderer(ie)) : He?.render && (ge = He.render(de), Ie = He.render(ie)), ge == null && Ie == null) continue;
                      if (ge == null) return 1;
                      if (Ie == null) return -1;
                      let Pe = 0;
                      if (typeof ge == "number" && typeof Ie == "number" ? Pe = ge - Ie : typeof ge == "boolean" && typeof Ie == "boolean" ? Pe = ge === Ie ? 0 : ge ? 1 : -1 : Pe = String(ge).localeCompare(
                        String(Ie),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Pe !== 0)
                        return Ce === "asc" ? Pe : -Pe;
                    }
                    return 0;
                  });
                }, [U, V.sortConfig, I.columns]);
                return /* @__PURE__ */ n.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": I.ariaLabel,
                    "aria-describedby": I.ariaDescription ? `panel-${I.id}-description` : void 0,
                    children: [
                      I.ariaDescription && /* @__PURE__ */ n.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${I.id}-description`,
                          children: I.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: I.columns.map((te, de) => {
                        const ie = V.sortConfig?.find(
                          (ge) => ge.key === te.key
                        ), be = !!ie, Ce = _.focusArea === "headers" && _.focusedHeaderIndex === de;
                        return /* @__PURE__ */ n.jsx(
                          "th",
                          {
                            className: `sortable-header ${Ce ? "sortable-header--focused" : ""} ${be ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: Ce ? 0 : -1,
                            onClick: () => le(K, te.key),
                            onKeyDown: (ge) => ue(ge, de),
                            "aria-sort": be ? ie?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ n.jsx("span", { className: "header-label", children: te.label }),
                              /* @__PURE__ */ n.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${be ? `sort-indicator--${ie?.direction}` : ""}`,
                                  children: [
                                    V.sortConfig && V.sortConfig.length > 0 && V.sortConfig.findIndex(
                                      (ge) => ge.key === te.key
                                    ) !== -1 && /* @__PURE__ */ n.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${V.sortConfig.findIndex((ge) => ge.key === te.key) + 1}`,
                                        "data-priority": V.sortConfig.findIndex(
                                          (ge) => ge.key === te.key
                                        ) + 1,
                                        title: `Sort priority: ${V.sortConfig.findIndex((ge) => ge.key === te.key) + 1}`,
                                        children: V.sortConfig.findIndex(
                                          (ge) => ge.key === te.key
                                        ) + 1
                                      }
                                    ),
                                    be && /* @__PURE__ */ n.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${ie?.direction}`,
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
                          te.key
                        );
                      }) }) }),
                      /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: O.map((te, de) => {
                        const ie = V.globalSelectedRowData && H(V.globalSelectedRowData, te), be = _.focusArea === "cells" && _.focusedRowIndex === de;
                        return /* @__PURE__ */ n.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ie ? "data-row--selected" : ""} ${be ? "data-row--focused" : ""}`,
                            "aria-selected": ie,
                            children: I.columns.map((Ce, ge) => {
                              const Ie = te[Ce.key];
                              let He;
                              Ce.tableRenderer ? He = Ce.tableRenderer(te) : Ce.render ? He = Ce.render(te) : He = Ie;
                              const Pe = _.focusArea === "cells" && _.focusedRowIndex === de && _.focusedColumnIndex === ge, Ee = () => {
                                if (Ce.customRenderer) {
                                  const Ye = Ce.customRenderer(
                                    Ie,
                                    te
                                  );
                                  return /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: Ye
                                    }
                                  );
                                }
                                return typeof Ie == "boolean" && He === Ie ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  ne(Ie),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: Ie ? "Yes" : "No" })
                                ] }) : ft.isValidElement(He) || typeof He != "object" ? He ?? "" : He;
                              };
                              return /* @__PURE__ */ n.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Pe ? "data-cell--focused" : ""}`,
                                  tabIndex: Pe ? 0 : -1,
                                  onClick: () => {
                                    const qe = V.globalSelectedRowData && H(
                                      V.globalSelectedRowData,
                                      te
                                    ) ? null : te;
                                    R({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: qe
                                    });
                                  },
                                  onKeyDown: (Ye) => x(Ye, de, ge),
                                  children: Ee()
                                },
                                Ce.key
                              );
                            })
                          },
                          de
                        );
                      }) })
                    ]
                  }
                );
              })()
            },
            I.id
          );
        })
      ]
    }
  );
}), Qn = {
  asc: "↑",
  desc: "↓"
}, Yf = (e) => [...e].sort((t, r) => t.priority - r.priority);
function ka(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function qf(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Xf(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function Kf(e, t) {
  const r = t.find((s) => s.id === e), a = qf(t);
  return r ? r.priority < a : !1;
}
const kb = ({
  sortConfig: e,
  onSortChange: t,
  className: r = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: s,
  showReset: o = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: u = "Sort configuration",
  ariaDescribedBy: c
}) => {
  const d = $e(() => Yf(e), [e]), f = xe((F) => {
    if (l) return;
    const A = e.map(
      (D) => D.id === F ? { ...D, direction: D.direction === "asc" ? "desc" : "asc" } : D
    );
    t(A);
  }, [e, t, l]), m = xe((F) => {
    if (l) return;
    const A = e.findIndex(($) => $.id === F);
    if (A <= 0) return;
    const D = [...e];
    [D[A], D[A - 1]] = [D[A - 1], D[A]], t(ka(D));
  }, [e, t, l]), w = xe((F) => {
    if (l) return;
    const A = e.findIndex(($) => $.id === F);
    if (A >= e.length - 1 || A === -1) return;
    const D = [...e];
    [D[A], D[A + 1]] = [D[A + 1], D[A]], t(ka(D));
  }, [e, t, l]), C = xe((F) => {
    if (l) return;
    const A = e.filter((D) => D.id !== F);
    t(ka(A));
  }, [e, t, l]), y = xe(() => {
    l || t([]);
  }, [t, l]), p = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const F = d.map((A, D) => {
      const $ = A.direction === "asc" ? "ascending" : "descending";
      return `${D + 1}. ${A.label} (${$})`;
    });
    if (F.length === 1)
      return `Sorted by: ${F[0]}`;
    if (F.length === 2)
      return `Sorted by: ${F.join(" and ")}`;
    {
      const A = F.pop();
      return `Sorted by: ${F.join(", ")}, and ${A}`;
    }
  }, g = $e(() => {
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
        "aria-label": u,
        "aria-describedby": g,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((F) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                Oe,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => C(F.id),
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
                          disabled: l || !Xf(F.id, e),
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
                          onClick: () => w(F.id),
                          disabled: l || !Kf(F.id, e),
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
      lt,
      {
        variant: "secondary",
        onClick: y,
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
}, Ms = (e, t) => t.map((r) => ({
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
})), Wa = [
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
], Jf = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Zf = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, s] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, Qf = (e) => {
  if (typeof e == "boolean") {
    const r = Wa.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = Wa.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, ep = (e) => `${e.name}-${e.bed_name}`, tp = () => ({
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
}), Cb = (e) => {
  const t = tp();
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
}, np = {
  dataComparator: Jf,
  filterFunction: Zf,
  booleanRenderer: Qf,
  getDataId: ep
};
function Co(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: s = [],
    badges: o = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: u,
    fieldRenderers: c = {},
    classPrefix: d = "adaptive-card"
  } = r, f = t.find((A) => A.key === a), m = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", w = () => s.filter((D) => !i.includes(D) && e[D]).slice(0, 3).map((D) => {
    const $ = t.find((v) => v.key === D), T = e[D], L = c[D] ? c[D](T, e) : $?.cardRenderer ? $.cardRenderer(e) : $?.render ? $.render(e) : T;
    return `${$?.label || D}: ${L}`;
  }).join(" • "), C = () => o.length === 0 ? null : o.filter((A) => e[A.fieldKey] !== void 0).map((A) => {
    const D = e[A.fieldKey], $ = A.render ? A.render(D, e) : D;
    return `<span class="nhsuk-tag ${rp(A, D)}">${$}</span>`;
  }).join(""), y = () => u ? u(e) : l?.(e) === "high" ? "primary" : "default", p = C(), g = w(), F = p ? `${g}${p ? `<div class="adaptive-card__badges">${p}</div>` : ""}` : g;
  return {
    variant: y(),
    heading: String(m),
    descriptionHtml: F,
    className: `adaptive-card ${d}`,
    "aria-label": `Record for ${m}`
  };
}
function rp(e, t) {
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
const ap = {
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
}, Ni = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: a,
  priority: s = "medium",
  status: o = "active"
}) => {
  const i = e.name, l = e.age, u = e.ward_name, c = e.bed_name, d = e.ews_score, f = e.speciality, m = e.consultant;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${s} healthcare-card--${o}`,
      onClick: () => r?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${i}, Age ${l}, Ward ${u}, Bed ${c}`,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__identity", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__patient-name", children: i }),
            /* @__PURE__ */ n.jsxs("p", { className: "healthcare-card__age-info", children: [
              /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__label", children: "Age: " }),
              /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__value", children: l })
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: d !== void 0 && /* @__PURE__ */ n.jsxs(
            Oe,
            {
              color: op(Ii(d)),
              className: "healthcare-card__alert",
              children: [
                "EWS: ",
                d
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ n.jsxs("dl", { className: "healthcare-card__details", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Ward" }),
            /* @__PURE__ */ n.jsx("dd", { children: u })
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
            lt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (w) => {
                w.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            lt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (w) => {
                w.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            lt,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (w) => {
                w.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, Ti = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        Oe,
        {
          color: ip(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        Oe,
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
      lt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      lt,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), Di = ({
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
        Oe,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        Oe,
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
      lt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      lt,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), $i = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: a = "medium"
}) => {
  const s = e.name, o = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, u = e.ews_data?.temperature, c = e.ews_data?.systolic_bp, d = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
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
            o !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${sp(o)}`, children: [
              "EWS: ",
              o
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ n.jsxs(
            Oe,
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
          u !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Temperature" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              u,
              "°C"
            ] })
          ] }),
          c !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-value", children: c })
          ] }),
          d !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Heart Rate" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              d,
              " bpm"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            lt,
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
            lt,
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
function Ii(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function sp(e) {
  return Ii(e);
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
function ip(e) {
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
const lp = [
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
], Mi = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", cp = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, up = (e) => Mi(e) === "high" || e.status === "urgent" ? "primary" : "default", dp = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, fp = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: lp,
  hiddenFields: [],
  getPriority: Mi,
  getStatus: cp,
  getVariant: up,
  fieldRenderers: dp,
  classPrefix: "adaptive-card--healthcare"
}, pp = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", s = r.getStatus?.(e) || "active", o = s === "urgent" ? "active" : s;
    return /* @__PURE__ */ n.jsx(
      Ni,
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
      Ti,
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
      Di,
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
      $i,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (s) => console.log("Vitals selected:", s),
        onAction: (s, o) => console.log("Vitals action:", s, o)
      }
    );
  }
}, hp = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, jo = {
  name: "healthcare",
  defaultCardConfig: fp,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: pp,
  fieldTypes: hp
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
function mp(e, t) {
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
      const { newLength: o } = t.payload, i = new Array(o).fill(!1), l = new Array(o).fill(null), u = new Array(o).fill([]);
      for (let c = 0; c < Math.min(e.tabLoadingStates.length, o); c++)
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
function gp(e, t) {
  const [r, a] = Fe("cards");
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
function xp(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function bp(e, t, r, a) {
  const s = a ? { ...a.defaultCardConfig, ...r } : { ...ap, ...r };
  if (a && a.cardTemplates) {
    const o = xp(e);
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
const jb = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: r = {},
  experimental: a = {},
  enableAdvancedSorting: s = !1,
  topActions: o,
  bottomActions: i,
  gridActions: l,
  forceGridActionsAbove: u,
  // Standard AriaTabsDataGrid props
  tabPanels: c,
  dataConfig: d,
  selectedIndex: f,
  onTabChange: m,
  ariaLabel: w = "Data grid",
  ariaDescription: C,
  orientation: y = "horizontal",
  id: p,
  disabled: g = !1,
  className: F,
  ...A
}) => {
  const D = gp(e, t), $ = f !== void 0, T = f ?? 0, L = $e(() => {
    if (c.some(
      (E) => E.data && E.data.length > 0 && To(E.data)
    )) {
      const E = No(r);
      return {
        ...jo.defaultCardConfig,
        ...E
      };
    } else
      return No(r);
  }, [r, c]), j = $e(() => c.some(
    (E) => E.data && E.data.length > 0 && To(E.data)
  ) ? jo : void 0, [c]), v = $e(() => ({
    selectedIndex: T,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [T, c.length]), [N, S] = Go(mp, v), h = Ae([]), P = Ae([]), k = Ae([]), b = Ae(null), [_, M] = Fe({
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
  }), re = xe((J) => {
    if (!J.current)
      return { columns: 1, rows: 0 };
    const E = J.current, Q = E.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (Q.length === 0)
      return { columns: 1, rows: 0 };
    const q = E.offsetWidth, K = Q[0].offsetWidth, oe = Math.floor(q / K) || 1, U = Math.ceil(Q.length / oe);
    return { columns: oe, rows: U };
  }, []), V = xe((J, E) => ({
    row: Math.floor(J / E),
    col: J % E
  }), []), R = xe((J, E, Q) => J * Q + E, []), H = xe((J, E, Q, q) => {
    const { row: I, col: K } = V(J, q);
    let oe = I, U = K;
    switch (E) {
      case "up":
        oe = Math.max(0, I - 1);
        break;
      case "down":
        oe = Math.min(Math.floor((Q - 1) / q), I + 1);
        break;
      case "left":
        U = Math.max(0, K - 1);
        break;
      case "right":
        U = Math.min(q - 1, K + 1);
        break;
    }
    const O = R(oe, U, q);
    return Math.min(O, Q - 1);
  }, [V, R]);
  ze(() => {
    _.isCardNavigationActive && _.focusedCardElementIndex >= 0 && _.cardElements.length > 0 && setTimeout(() => {
      const J = _.cardElements[_.focusedCardElementIndex];
      J && (J.element.focus(), J.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [_.isCardNavigationActive, _.focusedCardElementIndex, _.cardElements.length]), ze(() => {
    const J = () => {
      if (D === "cards" && b.current) {
        const { columns: q, rows: I } = re(b);
        M((K) => ({
          ...K,
          gridColumns: q,
          gridRows: I
        }));
      }
    }, E = setTimeout(J, 200), Q = () => {
      setTimeout(J, 100);
    };
    return window.addEventListener("resize", Q), () => {
      clearTimeout(E), window.removeEventListener("resize", Q);
    };
  }, [D, c, re]), ze(() => {
    const J = N.tabLoadingStates.length, E = c.length;
    J !== E && S({ type: "ADJUST_ARRAYS", payload: { newLength: E } });
  }, [c.length, N.tabLoadingStates.length]), ze(() => {
    $ && f !== N.selectedIndex && S({ type: "SET_SELECTED_INDEX", payload: f });
  }, [$, f, N.selectedIndex]);
  const W = xe((J) => {
    J >= 0 && J < c.length && !c[J].disabled && (S({ type: "SET_SELECTED_INDEX", payload: J }), m?.(J));
  }, [c, m]), se = xe((J) => {
    console.log("Card selected:", J), S({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: J
    });
  }, []), z = xe((J) => {
    const E = P.current[J];
    E && (E.focus(), E.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), pe = xe((J) => {
    const E = P.current[J];
    if (!E) return [];
    const Q = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), q = E.querySelectorAll(Q);
    return Array.from(q).map((I, K) => ({
      id: I.id || `card-${J}-element-${K}`,
      element: I,
      label: I.getAttribute("aria-label") || I.textContent?.trim() || I.getAttribute("title") || `Element ${K + 1}`,
      type: I.tagName.toLowerCase() === "button" ? "button" : I.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(I.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), we = Ae(null), le = xe((J) => {
    const E = we.current;
    if (!E) return;
    const Q = document.createElement("div");
    Q.setAttribute("aria-live", "polite"), Q.setAttribute("aria-atomic", "true"), Q.className = "sr-only", Q.textContent = J, E.appendChild(Q), setTimeout(() => {
      E.contains(Q) && E.removeChild(Q);
    }, 1e3);
  }, []), fe = xe((J) => {
    const E = J.filter((q) => q.sortable !== !1), Q = [
      { value: "", label: "Sort by..." }
    ];
    return E.forEach((q) => {
      const I = q.label || q.key;
      q.key === "name" ? Q.push(
        { value: `${q.key}-asc`, label: `${I} (A-Z)` },
        { value: `${q.key}-desc`, label: `${I} (Z-A)` }
      ) : q.key === "ews_score" || q.key.includes("score") ? Q.push(
        { value: `${q.key}-desc`, label: `${I} (High-Low)` },
        { value: `${q.key}-asc`, label: `${I} (Low-High)` }
      ) : q.key === "age" || q.key.includes("date") || q.key.includes("time") ? Q.push(
        { value: `${q.key}-desc`, label: `${I} (Oldest-Youngest)` },
        { value: `${q.key}-asc`, label: `${I} (Youngest-Oldest)` }
      ) : Q.push(
        { value: `${q.key}-asc`, label: `${I} (A-Z)` },
        { value: `${q.key}-desc`, label: `${I} (Z-A)` }
      );
    }), Q;
  }, []), ne = xe((J, E) => E ? [...J].sort((Q, q) => {
    const I = Q[E.key], K = q[E.key];
    if (I == null && K == null) return 0;
    if (I == null) return 1;
    if (K == null) return -1;
    const oe = Number(I), U = Number(K);
    if (!isNaN(oe) && !isNaN(U))
      return E.direction === "asc" ? oe - U : U - oe;
    const O = String(I).toLowerCase(), te = String(K).toLowerCase(), de = O.localeCompare(te);
    return E.direction === "asc" ? de : -de;
  }) : J, []), Z = xe((J) => {
    if (!J) {
      M((O) => ({ ...O, cardSortConfig: null })), le("Card sorting cleared");
      return;
    }
    const [E, Q] = J.split("-"), q = { key: E, direction: Q };
    M((O) => ({ ...O, cardSortConfig: q }));
    const oe = c[N.selectedIndex]?.columns.find((O) => O.key === E)?.label || E;
    le(`Cards sorted by ${oe} in ${Q === "asc" ? "ascending" : "descending"} order`);
  }, [c, N.selectedIndex, le]), ue = xe((J) => {
    const q = c[N.selectedIndex]?.columns.find((K) => K.key === J.key)?.label || J.key, I = J.direction === "asc" ? "ascending" : "descending";
    return `${q} (${I})`;
  }, [c, N.selectedIndex]), x = xe((J) => {
    const E = c[N.selectedIndex];
    if (s) {
      const Q = N.sortConfig;
      return !Q || Q.length === 0 ? J : [...J].sort((q, I) => {
        for (const { key: K, direction: oe } of Q) {
          let U = q[K], O = I[K];
          const te = E?.columns.find((Ie) => Ie.key === K);
          if (te?.cardRenderer ? (U = te.cardRenderer(q), O = te.cardRenderer(I)) : te?.render && (U = te.render(q), O = te.render(I)), U == null && O == null) continue;
          if (U == null) return oe === "asc" ? -1 : 1;
          if (O == null) return oe === "asc" ? 1 : -1;
          const de = Number(U), ie = Number(O);
          if (!isNaN(de) && !isNaN(ie)) {
            const Ie = de - ie;
            if (Ie !== 0) return oe === "asc" ? Ie : -Ie;
            continue;
          }
          const be = String(U).toLowerCase(), Ce = String(O).toLowerCase(), ge = be.localeCompare(Ce);
          if (ge !== 0) return oe === "asc" ? ge : -ge;
        }
        return 0;
      });
    } else
      return ne(J, _.cardSortConfig);
  }, [s, N.sortConfig, _.cardSortConfig, ne, c, N.selectedIndex]), B = xe((J, E) => {
    const Q = pe(J), q = Q[E];
    if (q) {
      q.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const I = `Focused on ${q.label}, ${q.type} ${E + 1} of ${Q.length} within card`;
      le(I);
    }
  }, [pe, le]), G = xe((J) => {
    h.current[J]?.focus();
  }, []), ee = xe(() => {
    const J = k.current[0];
    if (!J) return [];
    const E = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), Q = J.querySelectorAll(E);
    return Array.from(Q);
  }, []), X = xe((J) => {
    if (J === 0) {
      const E = k.current[0], Q = E?.querySelector(".sort-controls-row");
      if (Q) {
        Q.setAttribute("tabindex", "-1"), Q.focus();
        const I = `Sort controls group with ${ee().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        le(I);
      } else E && E.focus();
    } else {
      const E = ee(), Q = J - 1, q = E[Q];
      if (q) {
        q.focus();
        const I = q.tagName.toLowerCase() === "select", K = q.tagName.toLowerCase() === "button", oe = I ? "dropdown" : K ? "button" : "control", U = I ? ". Use Space key to open dropdown" : "", O = `${oe} ${Q + 1} of ${E.length}${U}`;
        le(O);
      }
    }
  }, [ee, le]), ae = xe((J, E) => {
    const { key: Q } = J, q = c[N.selectedIndex], I = q?.data.length || 0;
    if (Q === "ArrowLeft" && J.shiftKey) {
      J.preventDefault(), J.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (Q === "ArrowRight" && J.shiftKey) {
      J.preventDefault(), J.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!_.isCardNavigationActive) {
      switch (Q) {
        case "ArrowUp":
          if (J.preventDefault(), E === 0)
            M((O) => ({ ...O, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), X(0);
          else {
            const O = H(E, "up", I, _.gridColumns);
            O !== E && (M((te) => ({ ...te, focusedCardIndex: O })), z(O), le(`Moved to card ${O + 1} of ${I}`));
          }
          break;
        case "ArrowDown":
          J.preventDefault();
          const K = H(E, "down", I, _.gridColumns);
          K !== E && (M((O) => ({ ...O, focusedCardIndex: K })), z(K), le(`Moved to card ${K + 1} of ${I}`));
          break;
        case "ArrowLeft":
          J.preventDefault();
          const oe = H(E, "left", I, _.gridColumns);
          oe !== E ? (M((O) => ({ ...O, focusedCardIndex: oe })), z(oe), le(`Moved to card ${oe + 1} of ${I}`)) : N.selectedIndex > 0 && (S({ type: "SET_SELECTED_INDEX", payload: N.selectedIndex - 1 }), M((O) => ({ ...O, focusArea: "tabs" })), setTimeout(() => G(N.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          J.preventDefault();
          const U = H(E, "right", I, _.gridColumns);
          U !== E ? (M((O) => ({ ...O, focusedCardIndex: U })), z(U), le(`Moved to card ${U + 1} of ${I}`)) : N.selectedIndex < c.length - 1 && (S({ type: "SET_SELECTED_INDEX", payload: N.selectedIndex + 1 }), M((O) => ({ ...O, focusArea: "tabs" })), setTimeout(() => G(N.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (q?.data[E]) {
            J.preventDefault(), M((te) => ({
              ...te,
              selectedCardIndex: E
            }));
            const O = pe(E);
            O.length > 0 ? (M((te) => ({
              ...te,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: O,
              selectedCardIndex: E
              // Ensure selection is maintained
            })), le(`Card ${E + 1} selected and navigation activated. ${O.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : le(`Card ${E + 1} selected.`);
          }
          break;
        case " ":
          if (q?.data[E]) {
            J.preventDefault(), M((te) => ({
              ...te,
              selectedCardIndex: te.selectedCardIndex === E ? -1 : E
            }));
            const O = _.selectedCardIndex === E;
            le(`Card ${E + 1} ${O ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (Q) {
      case "ArrowUp":
      case "ArrowLeft":
        J.preventDefault();
        const K = Math.max(0, _.focusedCardElementIndex - 1);
        M((te) => ({ ...te, focusedCardElementIndex: K })), B(E, K);
        break;
      case "ArrowDown":
      case "ArrowRight":
        J.preventDefault();
        const oe = Math.min(_.cardElements.length - 1, _.focusedCardElementIndex + 1);
        M((te) => ({ ...te, focusedCardElementIndex: oe })), B(E, oe);
        break;
      case "Enter":
        J.preventDefault();
        const U = _.cardElements[_.focusedCardElementIndex];
        U && (U.element.click(), le(`Activated ${U.label}`));
        break;
      case " ":
        J.preventDefault();
        const O = _.cardElements[_.focusedCardElementIndex];
        if (O) {
          const te = new MouseEvent("dblclick", { bubbles: !0 });
          O.element.dispatchEvent(te), le(`Double-clicked ${O.label}`);
        }
        break;
      case "Escape":
        J.preventDefault(), M((te) => ({
          ...te,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => z(E), 0), le("Exited card navigation, returned to card level");
        break;
      case "Home":
        J.preventDefault(), _.cardElements.length > 0 && (M((te) => ({ ...te, focusedCardElementIndex: 0 })), B(E, 0));
        break;
      case "End":
        if (J.preventDefault(), _.cardElements.length > 0) {
          const te = _.cardElements.length - 1;
          M((de) => ({ ...de, focusedCardElementIndex: te })), B(E, te);
        }
        break;
    }
  }, [_, N.selectedIndex, c, se, z, G, M, pe, B, le]), me = xe((J) => {
    const E = h.current[J], Q = E?.parentElement;
    if (!E || !Q) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const q = E.getBoundingClientRect(), I = Q.getBoundingClientRect();
    q.left >= I.left && q.right <= I.right || (console.log("Tab not visible, scrolling into view (mobile)"), E.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), Se = xe((J, E) => {
    if (D !== "cards")
      return;
    const { key: Q } = J;
    switch (Q) {
      case "ArrowLeft":
        J.preventDefault();
        const q = E > 0 ? E - 1 : c.length - 1;
        W(q), M((U) => ({ ...U, focusedTabIndex: q })), h.current[q]?.focus(), me(q);
        break;
      case "ArrowRight":
        J.preventDefault();
        const I = E < c.length - 1 ? E + 1 : 0;
        W(I), M((U) => ({ ...U, focusedTabIndex: I })), h.current[I]?.focus(), me(I);
        break;
      case "ArrowDown":
        J.preventDefault();
        const K = c[N.selectedIndex];
        K && K.columns && K.columns.length > 0 ? (M((U) => ({
          ...U,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), X(0)) : (M((U) => ({
          ...U,
          focusArea: "cards",
          focusedCardIndex: 0
        })), z(0));
        break;
      case "Home":
        J.preventDefault(), W(0), M((U) => ({ ...U, focusedTabIndex: 0 })), h.current[0]?.focus(), me(0);
        break;
      case "End":
        J.preventDefault();
        const oe = c.length - 1;
        W(oe), M((U) => ({ ...U, focusedTabIndex: oe })), h.current[oe]?.focus(), me(oe);
        break;
      case "Enter":
      case " ":
        J.preventDefault(), W(E);
        break;
    }
  }, [c.length, W, D, z, M, me]), ce = xe((J, E) => {
    if (D !== "cards")
      return;
    const { key: Q } = J, q = c[N.selectedIndex];
    if (E === 0 && !_.isSortControlsActive) {
      switch (Q) {
        case "ArrowUp":
          J.preventDefault(), M((K) => ({
            ...K,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), G(N.selectedIndex);
          break;
        case "ArrowDown":
          J.preventDefault(), q?.data && q.data.length > 0 && (M((K) => ({
            ...K,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), z(0));
          break;
        case "Enter":
        case " ":
          J.preventDefault();
          const I = ee();
          if (I.length > 0) {
            M((oe) => ({
              ...oe,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), X(1);
            const K = `Entered sort controls navigation mode. ${I.length} controls available. Use arrow keys to navigate between controls.`;
            le(K);
          }
          break;
        case "Escape":
          J.preventDefault(), M((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), G(N.selectedIndex);
          break;
      }
      return;
    }
    if (_.isSortControlsActive) {
      const K = ee().length;
      switch (Q) {
        case "ArrowLeft":
          J.preventDefault();
          const oe = _.focusedSortControlIndex > 1 ? _.focusedSortControlIndex - 1 : K;
          M((O) => ({ ...O, focusedSortControlIndex: oe })), X(oe);
          break;
        case "ArrowRight":
          J.preventDefault();
          const U = _.focusedSortControlIndex < K ? _.focusedSortControlIndex + 1 : 1;
          M((O) => ({ ...O, focusedSortControlIndex: U })), X(U);
          break;
        case "ArrowDown":
          if (J.preventDefault(), _.isSortControlsActive) {
            const O = _.focusedSortControlIndex < K ? _.focusedSortControlIndex + 1 : 1;
            M((te) => ({ ...te, focusedSortControlIndex: O })), X(O);
          } else
            q?.data && q.data.length > 0 && (M((O) => ({
              ...O,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), z(0));
          break;
        case "ArrowUp":
          J.preventDefault(), M((O) => ({
            ...O,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), X(0);
          break;
        case "Escape":
          J.preventDefault(), M((O) => ({
            ...O,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), X(0);
          break;
      }
    }
  }, [D, c, N.selectedIndex, _.isSortControlsActive, _.focusedSortControlIndex, X, G, z, M, le]);
  if (D === "cards") {
    const J = c[N.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${F || ""}`, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": w,
            "aria-describedby": `${C || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
            "aria-orientation": y,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((E, Q) => {
              const q = Q === N.selectedIndex, I = E.disabled || g;
              return /* @__PURE__ */ n.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${E.id}`,
                  "aria-controls": `panel-${E.id}`,
                  "aria-selected": q,
                  "aria-disabled": I,
                  tabIndex: q ? 0 : -1,
                  ref: (K) => {
                    h.current[Q] = K;
                  },
                  onClick: () => W(Q),
                  onKeyDown: (K) => Se(K, Q),
                  disabled: I,
                  className: [
                    "aria-tabs-datagrid__tab",
                    q ? "aria-tabs-datagrid__tab--selected" : "",
                    I ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: E.label }),
                    N.tabLoadingStates[Q] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    N.tabErrors[Q] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                E.id
              );
            })
          }
        ),
        o && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: o })
      ] }),
      J && J.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: s ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          ji,
          {
            sortConfig: N.sortConfig || [],
            columns: J.columns.map((E) => ({ key: E.key, label: E.label })),
            onSortChange: (E) => {
              S({ type: "SET_SORT", payload: E });
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
            tabIndex: _.focusArea === "sort-controls" ? 0 : -1,
            ref: (E) => {
              k.current[0] = E;
            },
            onKeyDown: (E) => ce(E, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${J.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  rr,
                  {
                    id: `card-sort-${J.id}`,
                    name: `card-sort-${J.id}`,
                    value: _.cardSortConfig ? `${_.cardSortConfig.key}-${_.cardSortConfig.direction}` : "",
                    onChange: (E) => Z(E.target.value),
                    className: "sort-select",
                    children: fe(J.columns).map((E) => /* @__PURE__ */ n.jsx("option", { value: E.value, children: E.label }, E.value))
                  }
                )
              ] }),
              _.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  ue(_.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  lt,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => Z(""),
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
          "aria-label": `${J?.label || "Data"} cards in ${_.gridRows} rows and ${_.gridColumns} columns`,
          "aria-rowcount": _.gridRows,
          "aria-colcount": _.gridColumns,
          id: `panel-${J?.id}`,
          "aria-labelledby": `tab-${J?.id}`,
          children: x(J?.data || []).map((E, Q) => {
            const q = _.selectedCardIndex === Q, I = _.focusedCardIndex === Q && _.focusArea === "cards", K = _.focusedCardIndex === Q && _.focusArea === "card" && _.isCardNavigationActive, oe = Q === 0 && _.focusArea !== "cards", U = I || oe, O = V(Q, _.gridColumns);
            if (r.cardTemplate) {
              const ie = r.cardTemplate(E, J.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": O.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ n.jsx(
                    "div",
                    {
                      ref: (be) => {
                        P.current[Q] = be;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        q ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        I ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        K ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": O.col + 1,
                      "aria-selected": q,
                      "aria-expanded": K,
                      "aria-description": K ? `Card navigation active. ${_.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: U ? 0 : -1,
                      onClick: () => {
                        M((be) => ({
                          ...be,
                          selectedCardIndex: be.selectedCardIndex === Q ? -1 : Q
                        })), se(E);
                      },
                      onKeyDown: (be) => ae(be, Q),
                      onFocus: () => {
                        M((be) => be.isCardNavigationActive ? be : be.focusedCardIndex !== Q || be.focusArea !== "cards" ? {
                          ...be,
                          focusedCardIndex: Q,
                          focusArea: "cards"
                        } : be);
                      },
                      children: ie
                    }
                  )
                },
                `card-${Q}`
              );
            }
            const te = bp(E, J.columns, L, j), de = [
              te.className || "",
              q ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              I ? "aria-tabs-datagrid-adaptive__card--focused" : "",
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
                      q ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      I ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      K ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": O.col + 1,
                    "aria-selected": q,
                    "aria-expanded": K,
                    onKeyDown: (ie) => {
                      ie.key === "Enter" && (ie.preventDefault(), M((be) => ({
                        ...be,
                        selectedCardIndex: Q
                      }))), ae(ie, Q);
                    },
                    children: /* @__PURE__ */ n.jsx(
                      Si,
                      {
                        ...te,
                        ref: (ie) => {
                          P.current[Q] = ie;
                        },
                        className: de,
                        "aria-label": `${te["aria-label"] || te.heading}. ${K ? `Card navigation active with ${_.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: U ? 0 : -1,
                        onClick: () => {
                          M((ie) => ({
                            ...ie,
                            selectedCardIndex: ie.selectedCardIndex === Q ? -1 : Q
                          })), se(E);
                        },
                        onKeyDown: (ie) => ae(ie, Q),
                        onFocus: () => {
                          _.isCardNavigationActive || M((ie) => ie.focusedCardIndex !== Q || ie.focusArea !== "cards" ? {
                            ...ie,
                            focusedCardIndex: Q,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : ie);
                        }
                      }
                    )
                  }
                )
              },
              `card-${Q}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: we,
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
  return D === "hybrid" ? /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${F || ""}`, children: [
    o && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ n.jsx(
      za,
      {
        tabPanels: c,
        dataConfig: d,
        ariaLabel: w,
        ariaDescription: C,
        orientation: y,
        id: p,
        disabled: g,
        selectedIndex: f,
        onTabChange: m,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: u,
        ...A
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${F || ""}`, children: [
    o && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ n.jsx(
      za,
      {
        tabPanels: c,
        dataConfig: d,
        ariaLabel: w,
        ariaDescription: C,
        orientation: y,
        id: p,
        disabled: g,
        selectedIndex: f,
        onTabChange: m,
        actions: l,
        forceActionsAbove: u,
        ...A
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, Li = (e) => {
  const t = Wa.find((r) => r.value === e);
  return t ? t.icon : null;
}, yp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, s] = t.priceRange, o = r.discountedPrice || r.price;
      if (o < a || o > s) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => Li(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, vp = (e) => Ms(e, [
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
]), wp = {
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
  booleanRenderer: (e) => Li(e),
  getDataId: (e) => `financial-${e.id}`
}, _p = (e) => Ms(e, [
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
]), Sp = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: yp,
    createTabs: vp
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: wp,
    createTabs: _p
  }
}, Do = (e, t) => {
  const r = Sp[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, Pi = [
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
], kp = [
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
], Cp = [
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
], Np = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Tp = () => [
  {
    id: "patients",
    label: "Patients",
    data: Pi,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Ni,
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
    data: kp,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Ti,
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
    data: Cp,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Di,
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
    data: jp,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      $i,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], Dp = () => {
  const [e, t] = Fe("healthcare"), r = $e(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: np,
      tabPanels: Tp(),
      data: Pi
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
      dataConfig: Np,
      tabPanels: Ms(Mo, [
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
        lt,
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
      za,
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
}, Nb = Dp, Fi = (e) => /* @__PURE__ */ n.jsx(Zo, { ...e }), Tb = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = tn.TwoThirds,
  mainWrapperSize: s,
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  service: u,
  navigation: c,
  search: d,
  account: f,
  organisation: m,
  logo: w,
  className: C,
  ...y
}) => {
  const p = {
    service: u,
    navigation: c,
    search: d,
    account: f,
    organisation: m,
    logo: w,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(_i, { ...o }),
    /* @__PURE__ */ n.jsx(ni, { ...p }),
    /* @__PURE__ */ n.jsx(Fi, { className: C, ...y, children: /* @__PURE__ */ n.jsx(Qo, { size: s, children: /* @__PURE__ */ n.jsx(nn, { children: /* @__PURE__ */ n.jsxs(Pn, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Bt, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(ri, { ...l })
  ] });
}, Db = ({
  children: e,
  title: t,
  pageHeadingProps: r,
  columnWidth: a = tn.TwoThirds,
  mainWrapperSize: s = "small",
  // Default to small size for transactional forms
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  backLinkProps: u,
  serviceName: c,
  serviceHref: d,
  logo: f,
  className: m,
  ...w
}) => {
  const C = {
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
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(_i, { ...o }),
    /* @__PURE__ */ n.jsx(ni, { ...C }),
    /* @__PURE__ */ n.jsxs(Fi, { className: m, ...w, children: [
      u && /* @__PURE__ */ n.jsx(Fa, { ...u }),
      /* @__PURE__ */ n.jsx(Qo, { size: s, children: /* @__PURE__ */ n.jsx(nn, { children: /* @__PURE__ */ n.jsxs(Pn, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Bt, { style: { marginTop: "3rem" }, size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(ri, { ...l })
  ] });
}, Ai = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = ve("nhsuk-back-link", a), u = ve("nhsuk-back-link__link"), c = () => /* @__PURE__ */ n.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ n.jsx("div", { className: l, children: s === "button" ? /* @__PURE__ */ n.jsx("button", { className: u, type: "button", onClick: o, ...i, children: c() }) : /* @__PURE__ */ n.jsx("a", { className: u, href: r, ...i, children: c() }) });
};
Ai.displayName = "ForwardLink";
const pn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function Lo() {
  return typeof window > "u" ? pn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function Ei() {
  const [e, t] = Y.useState(Lo());
  Y.useEffect(() => {
    if (typeof window > "u") return;
    const o = () => t(Lo());
    return window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, []);
  const r = Y.useCallback((o) => e >= pn[o], [e]), a = Y.useCallback((o) => e < pn[o], [e]), s = Y.useCallback((o, i) => e >= pn[o] && e < pn[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: s,
    /** Raw numeric values */
    values: pn
  };
}
function $b(e) {
  const { width: t, values: r } = Ei();
  let a = e.base;
  const s = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const o of s) {
    const i = r[o];
    t >= i && e[o] !== void 0 && (a = e[o]);
  }
  return a;
}
function $p(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [s, o] = Y.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = Y.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return Y.useEffect(() => {
    if (!t || typeof window > "u") return;
    const u = new URLSearchParams(window.location.search);
    s ? u.set(r, String(s)) : u.delete(r), u.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${u.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [s, i, t, r, a]), { selectedId: s, setSelectedId: o, drilledIn: i, setDrilledIn: l };
}
const Ip = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
), Mp = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
function Lp(e) {
  const {
    items: t,
    selectedId: r,
    defaultSelectedId: a,
    onSelectionChange: s,
    renderItemContent: o,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: u,
    animated: c = !0,
    backLabel: d = "Back",
    nextLabel: f = "Next",
    isLoading: m = !1,
    emptyState: w,
    a11y: C,
    className: y,
    getId: p = (he) => he.id,
    orientation: g = "vertical",
    autoEnableThirdColumn: F = !0,
    onDrillChange: A,
    navigationInstructions: D = "Use arrow keys to navigate, Enter to open.",
    initialFocus: $ = "first",
    skipFocusOnSelect: T = !1,
    skipAnnouncements: L = !1,
    onFocusChange: j,
    syncUrl: v = !1,
    urlParamSelected: N = "nsv",
    urlParamDrill: S = "nsvDrill",
    urlSyncDebounceMs: h = 0,
    lazySecondary: P = !1,
    navFooter: k,
    collapsibleNav: b = !1,
    navInitiallyCollapsed: _ = !1,
    onNavCollapseChange: M,
    collapseToggleLabelShow: re = "Show navigation",
    collapseToggleLabelHide: V = "Hide navigation",
    collapseToggleIconShow: R,
    collapseToggleIconHide: H,
    persistNavCollapsed: W,
    navCollapsedStorageKey: se = "nsvCollapsed",
    navCollapsedUrlParam: z = "nsvCollapsed",
    autoContentHeader: pe,
    contentHeaderLevel: we = 2,
    renderContentHeader: le,
    contentSubheader: fe,
    secondarySubheader: ne
  } = e, { up: Z } = Ei(), [ue, x] = Y.useState(!1);
  Y.useEffect(() => {
    x(!0);
  }, []);
  const B = ue && Z("medium"), G = ue && Z("xlarge");
  let ee;
  u ? ee = u : B ? ee = "two-column" : ee = "list", !u && F && l && G && (ee = "three-column");
  const X = $p({
    enabled: v,
    paramSelected: N,
    paramDrill: S
  }), [ae, me] = Y.useState(
    () => X.selectedId !== void 0 ? X.selectedId : a
  ), Se = r !== void 0 ? r : ae, ce = t.find((he) => p(he) === Se), [J, E] = Y.useState(
    void 0
  );
  Y.useEffect(() => {
    if (Se === void 0) return;
    E(Se);
    const he = setTimeout(() => E(void 0), 220);
    return () => clearTimeout(he);
  }, [Se]);
  const Q = Y.useRef(null), q = Y.useRef(null), I = Y.useRef(null), K = Y.useRef(null), [oe, U] = Y.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [O, te] = Y.useState(() => "nav"), [de, ie] = Y.useState(0), be = () => [
    K.current,
    q.current,
    I.current
  ].filter(Boolean), Ce = (he) => {
    const Ne = be(), ye = Math.max(0, Math.min(he, Ne.length - 1));
    Ne[ye]?.focus(), ie(ye);
  }, ge = Y.useCallback(
    (he) => he ? Array.from(he.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (ye) => !ye.hasAttribute("disabled") && ye.tabIndex !== -1
    ) : [],
    []
  ), Ie = Y.useCallback(
    (he) => {
      const Ne = ge(q.current);
      if (!Ne.length) {
        q.current?.focus();
        return;
      }
      const ye = Math.max(0, Math.min(he, Ne.length - 1)), Me = Ne[ye];
      Me.focus(), setTimeout(() => {
        document.activeElement !== Me && (Me.focus(), setTimeout(() => {
          document.activeElement !== Me && Me.click();
        }, 10));
      }, 10), U((We) => ({ ...We, contentIndex: ye }));
      const Xe = (We) => {
        We.key === "Escape" && (We.preventDefault(), We.stopPropagation(), q.current?.focus(), Me.removeEventListener("keydown", Xe));
      };
      Ne.forEach((We) => {
        const Ue = We._escapeHandler;
        Ue && We.removeEventListener("keydown", Ue);
      }), Me._escapeHandler = Xe, Me.addEventListener("keydown", Xe);
    },
    [ge]
  ), He = Y.useCallback(
    (he) => {
      const Ne = ge(I.current);
      if (!Ne.length) {
        I.current?.focus();
        return;
      }
      const ye = Math.max(0, Math.min(he, Ne.length - 1)), Me = Ne[ye];
      Me.focus(), setTimeout(() => {
        document.activeElement !== Me && (Me.focus(), setTimeout(() => {
          document.activeElement !== Me && Me.click();
        }, 10));
      }, 10), U((We) => ({ ...We, secondaryIndex: ye }));
      const Xe = (We) => {
        We.key === "Escape" && (We.preventDefault(), We.stopPropagation(), I.current?.focus(), Me.removeEventListener("keydown", Xe));
      };
      Ne.forEach((We) => {
        const Ue = We._escapeHandler;
        Ue && We.removeEventListener("keydown", Ue);
      }), Me._escapeHandler = Xe, Me.addEventListener("keydown", Xe);
    },
    [ge]
  ), Pe = (he) => {
    if (he.defaultPrevented) return;
    const Ne = he.key, ye = he.target, Me = !!ot.current && ot.current.contains(ye), Xe = !!q.current && q.current.contains(ye), We = !!I.current && I.current.contains(ye), Ue = !!I.current, un = ye === K.current || ye === q.current || ye === I.current, Xt = Ee && (ee === "list" || ee === "cards"), qn = Xe && !!ye.closest(".nhs-navigation-split-view__header");
    if (O === "containers" && un) {
      if (Ne === "ArrowRight") {
        he.preventDefault();
        const Le = be(), Ge = Math.min(Le.length - 1, de + 1);
        Ce(Ge);
        return;
      }
      if (Ne === "ArrowLeft") {
        he.preventDefault();
        const Le = Math.max(0, de - 1);
        Ce(Le);
        return;
      }
      if (Ne === "Home") {
        he.preventDefault(), Ce(0);
        return;
      }
      if (Ne === "End") {
        he.preventDefault(), Ce(be().length - 1);
        return;
      }
      if (Ne === "Enter" || Ne === " ") {
        if (he.preventDefault(), ye === K.current) {
          if (te("nav"), ot.current) {
            const Le = Array.from(
              ot.current.querySelectorAll("[data-nav-item]")
            );
            (Le[Je >= 0 ? Je : 0] || Le[0])?.focus();
          }
        } else ye === q.current ? (te("content"), Ie(oe.contentIndex)) : ye === I.current && (te("secondary"), He(oe.secondaryIndex));
        return;
      }
      return;
    }
    if (Ne === "Escape") {
      if (O === "content" || O === "secondary") {
        if (Xe || We) {
          if (he.preventDefault(), te("nav"), ot.current) {
            const Ge = Array.from(
              ot.current.querySelectorAll("[data-nav-item]")
            )[Je >= 0 ? Je : 0];
            setTimeout(() => Ge?.focus(), 10);
          }
        } else if ((ye === q.current || ye === I.current) && (he.preventDefault(), te("nav"), ot.current)) {
          const Ge = Array.from(
            ot.current.querySelectorAll("[data-nav-item]")
          )[Je >= 0 ? Je : 0];
          setTimeout(() => Ge?.focus(), 10);
        }
      }
      return;
    }
    if (Ne === "Enter" || Ne === " ") {
      if (ye.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (ye === q.current && O === "content") {
        he.preventDefault(), he.stopPropagation(), ge(q.current).length > 0 && setTimeout(() => {
          Ie(oe.contentIndex);
        }, 50);
        return;
      }
      if (ye === I.current && O === "secondary") {
        he.preventDefault(), he.stopPropagation(), ge(
          I.current
        ).length > 0 && setTimeout(() => {
          He(oe.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Xt && qn && !un && (Ne === "ArrowRight" || Ne === "ArrowLeft")) {
      const Le = ge(q.current).filter(
        (Ge) => Ge.closest(".nhs-navigation-split-view__header")
      );
      if (Le.length > 1) {
        const Ge = Le.indexOf(ye);
        if (Ge >= 0) {
          const Bs = (Ge + (Ne === "ArrowRight" ? 1 : -1) + Le.length) % Le.length;
          he.preventDefault(), Le[Bs].focus();
          return;
        }
      }
    }
    if (Ne === "ArrowRight") {
      if (Me || O === "nav") {
        he.preventDefault(), te("content"), setTimeout(() => q.current?.focus(), 10);
        return;
      }
      if (Xe || O === "content") {
        Ue && (he.preventDefault(), te("secondary"), setTimeout(() => I.current?.focus(), 10));
        return;
      }
    }
    if (Ne === "ArrowLeft") {
      if (We || O === "secondary") {
        he.preventDefault(), te("content"), setTimeout(() => q.current?.focus(), 10);
        return;
      }
      if (Xe || O === "content") {
        if (he.preventDefault(), te("nav"), ot.current) {
          const Ge = Array.from(
            ot.current.querySelectorAll("[data-nav-item]")
          )[Je >= 0 ? Je : 0];
          setTimeout(() => Ge?.focus(), 10);
        }
        return;
      }
    }
    if (Ne === "Home" && !Me && (he.preventDefault(), te("nav"), ot.current)) {
      const Le = Array.from(
        ot.current.querySelectorAll("[data-nav-item]")
      ), Ge = Le[Je >= 0 ? Je : 0] || Le[0];
      setTimeout(() => Ge?.focus(), 10);
    }
    if (Ne === "End") {
      const Le = Ue ? I.current : q.current;
      Le && !Le.contains(ye) && (he.preventDefault(), Ue ? (te("secondary"), setTimeout(() => I.current?.focus(), 10)) : (te("content"), setTimeout(() => q.current?.focus(), 10)));
    }
    if (Ne === "ArrowDown" || Ne === "ArrowUp") {
      if (ye === q.current && Ne === "ArrowDown") {
        he.preventDefault(), ge(q.current).length > 0 && Ie(0);
        return;
      }
      if (ye === I.current && Ne === "ArrowDown") {
        he.preventDefault(), ge(
          I.current
        ).length > 0 && He(0);
        return;
      }
      if (Xe) {
        const Le = ge(q.current);
        if (Le.length) {
          he.preventDefault();
          const Ge = Ne === "ArrowDown" ? 1 : -1, wt = (oe.contentIndex + Ge + Le.length) % Le.length;
          Ie(wt);
        }
      } else if (We) {
        const Le = ge(I.current);
        if (Le.length) {
          he.preventDefault();
          const Ge = Ne === "ArrowDown" ? 1 : -1, wt = (oe.secondaryIndex + Ge + Le.length) % Le.length;
          He(wt);
        }
      }
    }
  }, Ee = !!ce && (ee === "list" || ee === "cards"), Ye = Y.useMemo(() => pe === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : pe === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : pe === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: pe.mobile !== void 0 ? pe.mobile : !0,
    tablet: pe.tablet || !1,
    desktop: pe.desktop || !1
  }, [pe]), qe = ue && Z("medium") && !Z("xlarge"), Qe = ue && Z("xlarge"), yt = !!l, et = ee === "three-column", [nt, kn] = Y.useState(!1);
  Y.useEffect(() => {
    et && nt && kn(!1);
  }, [et, nt]), Y.useEffect(() => {
    nt && !et && (te("secondary"), ie(2), setTimeout(() => {
      I.current?.focus();
    }, 50));
  }, [nt, et]), Y.useEffect(() => {
    !nt && !et && O === "secondary" && (te("content"), ie(1), setTimeout(() => {
      q.current?.focus();
    }, 50));
  }, [nt, et, O]);
  const oa = !!ce && (Ee && Ye.mobile || !Ee && qe && Ye.tablet || !Ee && Qe && Ye.desktop) || yt && !et, ac = `h${we}`, ia = ce ? Y.createElement(
    ac,
    {
      style: {
        marginLeft: Ee ? 32 : 0,
        marginRight: Ee ? 32 : 0
      }
    },
    ce.label
  ) : null, Es = Ee ? "mobile" : qe ? "tablet" : "desktop", sc = yt && !et && !nt, la = Ee && Ye.mobile ? /* @__PURE__ */ n.jsx(
    Fa,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => cn(void 0, void 0)
    }
  ) : void 0, ca = sc ? /* @__PURE__ */ n.jsx(
    Ai,
    {
      element: "button",
      text: f,
      onClick: () => {
        kn(!0);
      }
    }
  ) : void 0, ua = !et && nt ? /* @__PURE__ */ n.jsx(
    Fa,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => kn(!1)
    }
  ) : void 0, oc = Y.useMemo(() => {
    if (!oa || !ce) return null;
    if (le)
      return le({
        item: ce,
        detailActive: Ee,
        context: Es,
        backLink: la,
        defaultHeading: ia
      });
    const he = ce && fe ? typeof fe == "function" ? fe(ce) : fe : null;
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
            ua || la,
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
                  ia,
                  he && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: he })
                ]
              }
            )
          ]
        }
      ),
      ca && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: ca })
    ] });
  }, [
    oa,
    ce,
    le,
    Ee,
    Es,
    la,
    ua,
    ia,
    ca,
    fe
  ]);
  Y.useEffect(() => {
    if (!v) return;
    const he = ee === "three-column";
    let Ne = !1;
    const ye = () => {
      Ne || (X.selectedId !== Se && X.setSelectedId(Se), X.drilledIn !== he && X.setDrilledIn(he));
    };
    if (h && h > 0) {
      const Me = setTimeout(ye, h);
      return () => {
        Ne = !0, clearTimeout(Me);
      };
    } else
      ye();
  }, [v, X, Se, ee, h]), Y.useEffect(() => {
    if (!v) return;
    const he = () => {
      const Ne = new URLSearchParams(window.location.search), ye = Ne.get(N);
      Ne.get(S), me(ye === null ? void 0 : ye);
    };
    return window.addEventListener("popstate", he), () => window.removeEventListener("popstate", he);
  }, [
    v,
    N,
    S,
    u,
    l
  ]);
  const Yn = Y.useRef(0), jt = Y.useRef(
    null
  ), cn = Y.useCallback(
    (he, Ne) => {
      he !== Se && (r === void 0 && me(he), s?.(he, Ne));
    },
    [r, s, Se]
  );
  Y.useEffect(() => {
    if (!T && Ee && q.current) {
      const he = setTimeout(() => q.current?.focus(), 30);
      return () => clearTimeout(he);
    }
  }, [Ee, Se, T]);
  const ot = Y.useRef(null), [Je, Cn] = Y.useState(
    () => $ === "first" ? 0 : -1
  );
  Y.useEffect(() => {
    if (Je < 0 || !ot.current) return;
    const Ne = Array.from(
      ot.current.querySelectorAll("[data-nav-item]")
    )[Je];
    if (Ne) {
      document.activeElement !== Ne && Ne.focus(), Yn.current = Je;
      const ye = t[Je];
      j?.(
        ye ? p(ye) : void 0,
        ye,
        Je
      );
    }
  }, [Je, t, j, p]);
  const ic = (he) => {
    const Ne = g === "vertical" ? "ArrowDown" : "ArrowRight", ye = g === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (he.key === "ArrowRight" && g === "vertical") {
      he.preventDefault(), nt ? (te("secondary"), setTimeout(() => {
        I.current?.focus();
      }, 10)) : (te("content"), setTimeout(() => {
        q.current?.focus();
      }, 10));
      return;
    }
    if (he.key === Ne)
      he.preventDefault(), Cn((Me) => Math.min(t.length - 1, Me + 1));
    else if (he.key === ye)
      he.preventDefault(), Cn((Me) => Math.max(0, Me - 1));
    else if (he.key === "Home")
      he.preventDefault(), Cn(0);
    else if (he.key === "End")
      he.preventDefault(), Cn(t.length - 1);
    else if (he.key === "Enter" || he.key === " ") {
      he.preventDefault();
      const Me = t[Je];
      Me && !Me.disabled && cn(p(Me), Me);
    } else if (he.key.length === 1 && /[a-z0-9]/i.test(he.key)) {
      jt.current || (jt.current = { buffer: "", last: 0 });
      const Me = Date.now(), Xe = 700, We = he.key.toLowerCase();
      Me - jt.current.last > Xe ? jt.current.buffer = We : jt.current.buffer += We, jt.current.last = Me;
      let Ue = jt.current.buffer;
      const un = Ue.split("").every((wt) => wt === Ue[0]), Xt = t.map(
        (wt) => String(wt.label || "").toLowerCase()
      );
      let qn = 0;
      Je >= 0 && (qn = (Je + 1) % t.length);
      let Le;
      const Ge = (wt, Bs) => {
        const Hs = t.length;
        for (let pa = 0; pa < Hs; pa++) {
          const ha = (qn + pa) % Hs;
          if (!t[ha].disabled && Xt[ha].startsWith(wt))
            return ha;
        }
      };
      un && Ue.length > 1 ? Le = Ge(Ue[0]) : (Le = Ge(Ue), Le === void 0 && Ue.length > 1 && (Le = Ge(Ue[Ue.length - 1]), Le !== void 0 && jt.current && (jt.current.buffer = Ue[Ue.length - 1]))), Le !== void 0 && Cn(Le);
    }
  }, lc = Y.useMemo(() => {
    if (W && (W === "url" || W === "both") && typeof window < "u") {
      const Ne = new URLSearchParams(window.location.search).get(z);
      if (Ne === "1") return !0;
      if (Ne === "0") return !1;
    }
    if (W && (W === "localStorage" || W === "both") && typeof window < "u")
      try {
        const he = window.localStorage.getItem(se);
        if (he === "1") return !0;
        if (he === "0") return !1;
      } catch {
      }
    return _;
  }, [
    W,
    _,
    se,
    z
  ]), [vt, cc] = Y.useState(lc);
  Y.useEffect(() => {
    M?.(vt);
  }, [vt, M]);
  const uc = Y.useCallback(() => {
    B && b && cc((he) => !he);
  }, [B, b]);
  Y.useEffect(() => {
    if (W && !(typeof window > "u")) {
      if (W === "localStorage" || W === "both")
        try {
          window.localStorage.setItem(
            se,
            vt ? "1" : "0"
          );
        } catch {
        }
      if (W === "url" || W === "both") {
        const he = new URLSearchParams(window.location.search);
        he.set(z, vt ? "1" : "0");
        const Ne = `${window.location.pathname}?${he.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", Ne);
      }
    }
  }, [
    vt,
    W,
    se,
    z
  ]);
  const dc = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Ee ? "nhs-navigation-split-view--detail-active" : "",
    ee === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    b && B && vt ? "nhs-navigation-split-view--nav-collapsed" : "",
    y
  ].filter(Boolean).join(" "), da = Y.useRef(null);
  Y.useEffect(() => {
    if (!L && da.current) {
      const he = ce ? `Selected ${ce.label}` : "Selection cleared";
      da.current.textContent = he;
    }
  }, [ce, L]), Y.useEffect(() => {
    !Ee && Se == null && ot.current && ot.current.querySelectorAll("[data-nav-item]")[Yn.current]?.focus();
  }, [Ee, Se]);
  const Ut = ee === "three-column", [fa, fc] = Y.useState(!1);
  Y.useEffect(() => {
    Ut && !fa && fc(!0);
  }, [Ut, fa]);
  const Rs = Y.useRef(Ut);
  Y.useEffect(() => {
    Rs.current !== Ut && (A?.(Ut), Rs.current = Ut);
  }, [Ut, A]);
  const pc = () => {
    if (ee === "cards")
      return /* @__PURE__ */ n.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": Se ? String(Se) : void 0,
          children: [
            t.map((ye) => {
              const Me = p(ye), Xe = Me === Se;
              return /* @__PURE__ */ n.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": Xe,
                  children: /* @__PURE__ */ n.jsxs(
                    "button",
                    {
                      id: String(Me),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": Xe || void 0,
                      "data-disabled": ye.disabled || void 0,
                      disabled: ye.disabled,
                      onClick: () => !ye.disabled && cn(Me, ye),
                      children: [
                        ye.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ye.icon }),
                        /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ye.label }),
                        ye.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ye.description }),
                        o?.(ye),
                        ye.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: ye.badge })
                      ]
                    }
                  )
                },
                Me
              );
            }),
            t.length === 0 && !m && /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                "aria-disabled": "true",
                children: w || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const he = "nsv-nav-instructions", Ne = Y.useMemo(() => Y.memo(
      ({
        item: ye,
        idx: Me,
        selected: Xe,
        focused: We
      }) => {
        const Ue = p(ye), un = ye.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: We ? 0 : -1,
          onClick: () => {
            Yn.current = Me, cn(Ue, ye);
          },
          onKeyDown: (Xt) => {
            (Xt.key === "Enter" || Xt.key === " ") && (Xt.preventDefault(), Yn.current = Me, cn(Ue, ye));
          }
        };
        return /* @__PURE__ */ n.jsxs(
          "li",
          {
            id: String(Ue),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": Xe,
            "aria-current": Xe ? "true" : void 0,
            "data-selected": Xe || void 0,
            "data-disabled": ye.disabled || void 0,
            ...un,
            children: [
              ye.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ye.icon }),
              /* @__PURE__ */ n.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ye.label }),
                ye.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ye.description }),
                o?.(ye)
              ] }),
              ye.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: ye.badge })
            ]
          }
        );
      }
    ), [p, cn, o]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: ot,
          className: "nhs-navigation-split-view__list",
          onKeyDown: ic,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": he,
          "aria-activedescendant": Se ? String(Se) : void 0,
          children: [
            t.map((ye, Me) => /* @__PURE__ */ n.jsx(
              Ne,
              {
                item: ye,
                idx: Me,
                selected: p(ye) === Se,
                focused: Me === Je || Je === -1 && Me === 0 && $ === "first",
                "data-just-selected": p(ye) === J ? "true" : void 0
              },
              p(ye)
            )),
            t.length === 0 && !m && /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__list-item",
                "aria-disabled": "true",
                children: w || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
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
      ref: Q,
      className: dc,
      "aria-label": C?.rootLabel,
      "data-layout": ee,
      onKeyDown: Pe,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Ee || void 0,
            style: { transform: Ee ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: K,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": C?.navigationLabel || "Items",
                  "data-collapsed": vt || void 0,
                  tabIndex: 0,
                  children: [
                    b && B && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: uc,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": vt ? re : V,
                        title: vt ? re : V,
                        children: vt ? R || /* @__PURE__ */ n.jsx(Mp, {}) : H || /* @__PURE__ */ n.jsx(Ip, {})
                      }
                    ) }),
                    /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: pc() }),
                    k && /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: k
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: q,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": C?.contentLabel || "Content",
                  "data-has-selection": !!ce || void 0,
                  tabIndex: 0,
                  style: {
                    display: nt && !et ? "none" : void 0
                  },
                  children: [
                    oa && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: oc }),
                    /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(ce)
                      }
                    )
                  ]
                }
              ),
              ee === "three-column" && (!P || fa) || nt && !et ? /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: I,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": C?.secondaryContentLabel || "Secondary",
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
                        nt && !et && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ n.jsx(
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
                                  ua,
                                  /* @__PURE__ */ n.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ n.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: ce && typeof ce == "object" && "label" in ce ? ce.label : String(ce) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        ce && ne && /* @__PURE__ */ n.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof ne == "function" ? ne(ce) : ne
                          }
                        ),
                        /* @__PURE__ */ n.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(ce) })
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
            ref: da,
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
Lp.displayName = "NavigationSplitView";
const Pp = typeof window < "u" && window.document ? Y.useLayoutEffect : Y.useEffect, Po = (e, t, r, a) => e == null || Number.isNaN(e) ? a : Math.min(r, Math.max(t, e)), Fp = ({ item: e, maxLines: t, enableDrilldown: r, onExpand: a, isActive: s, topLaneIndex: o }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, u = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${o})`, d = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), m = r && e.childItems && e.childItems.length > 0, w = (y) => {
    m && (y.preventDefault(), a?.(e));
  }, C = m ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": s || !1,
    onClick: w,
    onKeyDown: (y) => {
      (y.key === "Enter" || y.key === " ") && w(y), y.key === "Escape" && s && w(y);
    }
  } : {};
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: ve("nhsuk-product-roadmap__item", m && "nhsuk-product-roadmap__item--expandable", s && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: u, top: c, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": d,
      "aria-colspan": f,
      ...C,
      children: [
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          m && /* @__PURE__ */ n.jsx("span", { className: ve("nhsuk-product-roadmap__item-expander", s && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Ap = gc(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: r = 400,
  itemMaxLines: a = 2,
  className: s,
  ariaLabel: o = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: u = "overlay",
  ...c
}) => {
  const [d, f] = Fe(() => /* @__PURE__ */ new Set()), [m, w] = Fe(() => /* @__PURE__ */ new Set()), C = Ae(/* @__PURE__ */ new Set()), y = xe((h) => d.has(h), [d]), p = xe((h) => {
    f((P) => {
      const k = new Set(P);
      return k.has(h.id) ? (k.delete(h.id), w((b) => {
        const _ = new Set(b);
        return _.add(h.id), _;
      }), setTimeout(() => w((b) => {
        const _ = new Set(b);
        return _.delete(h.id), _;
      }), 240), l?.(h.id, !1)) : (k.add(h.id), l?.(h.id, !0)), k;
    });
  }, [l]);
  Pp(() => {
    if (u !== "inline" || !i || typeof document > "u") return;
    const h = [];
    if (d.forEach((_) => {
      C.current.has(_) || h.push(_);
    }), C.current = new Set(d), !h.length) return;
    const P = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, k = h.map((_) => `.nhsuk-product-roadmap__inline-children[data-parent="${_}"] .nhsuk-product-roadmap__inline-child`).join(","), b = Array.from(document.querySelectorAll(k));
    if (b.length) {
      if (P) {
        b.forEach((_) => {
          _.style.opacity = "1", _.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((_) => {
        (_.gsap || _.default || _).to(b, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        b.forEach((_) => {
          _.style.opacity = "1", _.style.transform = "translateY(0)";
        });
      });
    }
  }, [d, u, i]);
  const g = xe(() => {
    d.size && f(/* @__PURE__ */ new Set());
  }, [d]), F = ve("nhsuk-product-roadmap", s), A = Po(r, 120, 1200, 400), D = Po(a, 1, 6, 2), $ = $e(() => e.map((h) => /* @__PURE__ */ new Date(h + " 01")), [e]), T = $e(() => {
    if ($.length === 0) {
      const k = /* @__PURE__ */ new Date();
      return [k, k];
    }
    const h = new Date($[0]), P = Rn.offset(new Date($[$.length - 1]), 1);
    return [h, P];
  }, [$]), L = $e(() => Is().domain(T).range([0, $.length * A]), [T, $.length, A]), j = xe((h) => {
    if (h.startDate) {
      const V = new Date(h.startDate), R = new Date(h.endDate ?? h.startDate);
      R < V && R.setTime(V.getTime());
      const H = L(V), W = Rn.offset(new Date(R), 1);
      let se = L(W);
      Number.isFinite(se) || (se = H + A);
      const z = Math.max(A * 0.25, se - H), pe = H / A, we = z / A;
      return { ...h, _pxLeft: H, _pxWidth: z, _startFraction: pe, _spanColumns: we };
    }
    const P = h.date ?? 1, k = h.dateOffset ?? 0, b = h.length ?? 1, _ = h.partialLength ?? 1, M = P - 1 + k, re = b - 1 + _;
    return { ...h, _pxLeft: M * A, _pxWidth: re * A, _startFraction: M, _spanColumns: re };
  }, [L, A]), v = $e(() => t.map((h) => {
    const k = h.roadmapItems.map((_) => {
      const M = !_.childItems && _.children ? { ..._, childItems: _.children } : { ..._ };
      return j(M);
    }).sort((_, M) => _._pxLeft !== M._pxLeft ? _._pxLeft - M._pxLeft : M._pxWidth - _._pxWidth), b = [];
    return k.forEach((_) => {
      const M = _._pxLeft, re = _._pxLeft + _._pxWidth;
      let V = b.findIndex((R) => R <= M);
      V === -1 && (V = b.length, b.push(0)), b[V] = re, _.verticalPosition = V + 1;
    }), { ...h, roadmapItems: k, _laneCount: b.length };
  }), [t, j]), N = $e(() => v.map((h) => h._laneCount || 1), [v]), S = $e(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: F,
      style: { "--column-width": `${A}px`, gridTemplateColumns: S },
      role: "grid",
      "aria-label": o,
      "aria-colcount": e.length + 1,
      "aria-rowcount": v.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((h, P) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": P + 2, children: h }, `${h}-${P}`))
        ] }),
        v.map((h, P) => {
          const k = P + 2, b = N[P];
          let _, M = 0, re = [];
          i && u === "inline" && (re = h.roadmapItems.filter((W) => y(W.id) && W.childItems && W.childItems.length).map((W) => ({ id: W.id, lane: W.verticalPosition || 1, count: W.childItems.length })).sort((W, se) => W.lane - se.lane), M = re.reduce((W, se) => W + se.count, 0));
          const V = b + M;
          _ = `calc((${V} * var(--roadmap-item-block-height)) + (max(0, ${V} - 1) * var(--roadmap-row-gap)))`;
          const R = {};
          let H = 0;
          return re.forEach((W) => {
            H += W.count, R[W.lane + 1] = H;
          }), /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": k, children: [
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: h.heading }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: _ }, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: h.roadmapItems.map((W, se) => {
              const z = (W.verticalPosition || 1) - 1, pe = re.filter((ne) => ne.lane - 1 < z).reduce((ne, Z) => ne + Z.count, 0), we = z + pe, le = y(W.id), fe = m.has(W.id);
              return /* @__PURE__ */ n.jsxs(ft.Fragment, { children: [
                /* @__PURE__ */ n.jsx(Fp, { item: W, maxLines: D, enableDrilldown: i, onExpand: p, isActive: le, topLaneIndex: we, laneOffset: pe }),
                i && u === "inline" && (le || fe) && W.childItems && /* @__PURE__ */ n.jsx("div", { "data-parent": W.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${W.title} child tasks`, children: W.childItems.map((ne, Z) => {
                  const ue = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let x = W._pxLeft, B = W._pxWidth;
                  if (ne.startDate) {
                    const X = new Date(ne.startDate);
                    let ae = ne.endDate ? new Date(ne.endDate) : new Date(X);
                    ae < X && (ae = new Date(X));
                    const me = new Date(ae);
                    me.setDate(me.getDate() + 1);
                    const Se = L(X);
                    let ce = L(me);
                    (!Number.isFinite(ce) || ce <= Se) && (ce = Se + 6), x = Se, B = Math.max(6, ce - Se);
                  }
                  const ee = we + 1 + Z;
                  return /* @__PURE__ */ n.jsxs(
                    "div",
                    {
                      className: ve("nhsuk-product-roadmap__inline-child", ne.status && `nhsuk-product-roadmap__inline-child--status-${ne.status}`, !le && fe && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${x}px`, width: `${B}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${ee})`, height: ue, opacity: le ? 0 : void 0, transform: le ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: ne.title })
                      ]
                    },
                    ne.id ?? Z
                  );
                }) })
              ] }, W.id ?? se);
            }) }) })
          ] }, `${h.heading}-${P}`);
        }),
        i && u === "overlay" && d.size === 1 && (() => {
          const h = Array.from(d)[0], P = t.flatMap((k) => k.roadmapItems).find((k) => k.id === h);
          return !P || !P.childItems ? null : /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${P.title} details`, children: [
            /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ n.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: P.title }),
                /* @__PURE__ */ n.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: g, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: P.content }),
              /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: P.childItems.map((k, b) => /* @__PURE__ */ n.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: k.title }),
                k.content && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: k.content })
              ] }, k.id ?? b)) })
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: g, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Ap.displayName = "ProductRoadmap";
function Ri(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = Ri(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function gr() {
  for (var e, t, r = 0, a = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = Ri(e)) && (a && (a += " "), a += t);
  return a;
}
function at(e) {
  return function() {
    return e;
  };
}
const Ua = Math.PI, Ga = 2 * Ua, Jt = 1e-6, Ep = Ga - Jt;
function Bi(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Rp(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Bi;
  const r = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let s = 1, o = a.length; s < o; ++s)
      this._ += Math.round(arguments[s] * r) / r + a[s];
  };
}
class Bp {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Bi : Rp(t);
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
    let i = this._x1, l = this._y1, u = a - t, c = s - r, d = i - t, f = l - r, m = d * d + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (m > Jt) if (!(Math.abs(f * u - c * d) > Jt) || !o)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let w = a - i, C = s - l, y = u * u + c * c, p = w * w + C * C, g = Math.sqrt(y), F = Math.sqrt(m), A = o * Math.tan((Ua - Math.acos((y + m - p) / (2 * g * F))) / 2), D = A / F, $ = A / g;
      Math.abs(D - 1) > Jt && this._append`L${t + D * d},${r + D * f}`, this._append`A${o},${o},0,0,${+(f * w > d * C)},${this._x1 = t + $ * u},${this._y1 = r + $ * c}`;
    }
  }
  arc(t, r, a, s, o, i) {
    if (t = +t, r = +r, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(s), u = a * Math.sin(s), c = t + l, d = r + u, f = 1 ^ i, m = i ? s - o : o - s;
    this._x1 === null ? this._append`M${c},${d}` : (Math.abs(this._x1 - c) > Jt || Math.abs(this._y1 - d) > Jt) && this._append`L${c},${d}`, a && (m < 0 && (m = m % Ga + Ga), m > Ep ? this._append`A${a},${a},0,1,${f},${t - l},${r - u}A${a},${a},0,1,${f},${this._x1 = c},${this._y1 = d}` : m > Jt && this._append`A${a},${a},0,${+(m >= Ua)},${f},${this._x1 = t + a * Math.cos(o)},${this._y1 = r + a * Math.sin(o)}`);
  }
  rect(t, r, a, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${a = +a}v${+s}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function Hi(e) {
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
  }, () => new Bp(t);
}
function Oi(e) {
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
function Ui(e) {
  return e[0];
}
function Gi(e) {
  return e[1];
}
function Vi(e, t) {
  var r = at(!0), a = null, s = Wi, o = null, i = Hi(l);
  e = typeof e == "function" ? e : e === void 0 ? Ui : at(e), t = typeof t == "function" ? t : t === void 0 ? Gi : at(t);
  function l(u) {
    var c, d = (u = Oi(u)).length, f, m = !1, w;
    for (a == null && (o = s(w = i())), c = 0; c <= d; ++c)
      !(c < d && r(f = u[c], c, u)) === m && ((m = !m) ? o.lineStart() : o.lineEnd()), m && o.point(+e(f, c, u), +t(f, c, u));
    if (w) return o = null, w + "" || null;
  }
  return l.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : at(+u), l) : e;
  }, l.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : at(+u), l) : t;
  }, l.defined = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : at(!!u), l) : r;
  }, l.curve = function(u) {
    return arguments.length ? (s = u, a != null && (o = s(a)), l) : s;
  }, l.context = function(u) {
    return arguments.length ? (u == null ? a = o = null : o = s(a = u), l) : a;
  }, l;
}
function Va(e, t, r) {
  var a = null, s = at(!0), o = null, i = Wi, l = null, u = Hi(c);
  e = typeof e == "function" ? e : e === void 0 ? Ui : at(+e), t = typeof t == "function" ? t : at(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Gi : at(+r);
  function c(f) {
    var m, w, C, y = (f = Oi(f)).length, p, g = !1, F, A = new Array(y), D = new Array(y);
    for (o == null && (l = i(F = u())), m = 0; m <= y; ++m) {
      if (!(m < y && s(p = f[m], m, f)) === g)
        if (g = !g)
          w = m, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), C = m - 1; C >= w; --C)
            l.point(A[C], D[C]);
          l.lineEnd(), l.areaEnd();
        }
      g && (A[m] = +e(p, m, f), D[m] = +t(p, m, f), l.point(a ? +a(p, m, f) : A[m], r ? +r(p, m, f) : D[m]));
    }
    if (F) return l = null, F + "" || null;
  }
  function d() {
    return Vi().defined(s).curve(i).context(o);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : at(+f), a = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : at(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : at(+f), c) : a;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : at(+f), r = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : at(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : at(+f), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return d().x(e).y(t);
  }, c.lineY1 = function() {
    return d().x(e).y(r);
  }, c.lineX1 = function() {
    return d().x(a).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : at(!!f), c) : s;
  }, c.curve = function(f) {
    return arguments.length ? (i = f, o != null && (l = i(o)), c) : i;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? o = l = null : l = i(o = f), c) : o;
  }, c;
}
function Fo(e) {
  return e < 0 ? -1 : 1;
}
function Ao(e, t, r) {
  var a = e._x1 - e._x0, s = t - e._x1, o = (e._y1 - e._y0) / (a || s < 0 && -0), i = (r - e._y1) / (s || a < 0 && -0), l = (o * s + i * a) / (a + s);
  return (Fo(o) + Fo(i)) * Math.min(Math.abs(o), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function Eo(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Ca(e, t, r) {
  var a = e._x0, s = e._y0, o = e._x1, i = e._y1, l = (o - a) / 3;
  e._context.bezierCurveTo(a + l, s + l * t, o - l, i - l * r, o, i);
}
function xr(e) {
  this._context = e;
}
xr.prototype = {
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
        Ca(this, this._t0, Eo(this, this._t0));
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
          this._point = 3, Ca(this, Eo(this, r = Ao(this, e, t)), r);
          break;
        default:
          Ca(this, this._t0, r = Ao(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
Object.create(xr.prototype).point = function(e, t) {
  xr.prototype.point.call(this, t, e);
};
function br(e) {
  return new xr(e);
}
function Hp(e, t, r) {
  const a = ai(e, t);
  return Is().domain(a).range(r);
}
function Ro(e, t, r) {
  const [a, s] = ai(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(s)))
    return ur().domain([0, 0]).range(r);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const u = s - a, c = (u > 0 ? u : a) * 0.1;
    i = Math.max(0, a - c), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = s ?? 0;
  return ur().domain([i, l]).nice().range(r);
}
function Ya(e, t, r, a) {
  const s = Vi().x(t).y(r);
  return a?.smooth !== !1 && s.curve(br), s(e) ?? "";
}
function Op(e = {}) {
  const t = Y.useRef(null), r = Y.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, s] = Y.useState({ width: 0, height: 0 });
  Y.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((u) => {
      for (const c of u) {
        const { width: d, height: f } = c.contentRect;
        s({ width: d, height: f });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const o = Math.max(0, a.width - r.left - r.right), i = Math.max(0, a.height - r.top - r.bottom);
  return { width: a.width, height: a.height, innerWidth: o, innerHeight: i, margin: r, ref: t };
}
const Yi = Y.createContext(null);
function qt() {
  return Y.useContext(Yi);
}
const zp = ({
  height: e = 240,
  margin: t,
  width: r,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: s,
  role: o = "group",
  ariaLabel: i
}) => {
  const l = Op(t), u = { height: e, position: "relative" };
  return r !== void 0 && (u.width = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n.jsx("div", { ref: l.ref, className: a, style: u, role: o, "aria-label": i, children: /* @__PURE__ */ n.jsx(Yi.Provider, { value: l, children: s }) });
}, Ls = Y.createContext(null), ln = () => Y.useContext(Ls), Wp = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  parseX: a,
  children: s,
  xTickCount: o = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: u,
  yPadding: c
}) => {
  const d = qt(), f = t ?? d?.innerWidth ?? 0, m = r ?? d?.innerHeight ?? 0, w = Y.useMemo(() => e.flatMap((D) => D.data), [e]), C = Y.useCallback((D) => {
    if (a) return a(D);
    const $ = D.x;
    return $ instanceof Date ? $ : new Date($);
  }, [a]), y = u ?? 6, p = c ?? 6, g = Y.useMemo(() => Hp(w, C, [y, Math.max(0, f - y)]), [w, C, f, y]), F = Y.useMemo(() => {
    if (l) {
      const D = Ro([], ($) => $.y, [Math.max(0, m - p), p]);
      return D.domain(l), D;
    }
    return Ro(w, (D) => D.y, [Math.max(0, m - p), p]);
  }, [w, m, l]), A = Y.useMemo(() => ({
    xScale: g,
    yScale: F,
    getXTicks: (D = o) => g.ticks(D),
    getYTicks: (D = i) => F.ticks(D)
  }), [g, F, o, i]);
  return /* @__PURE__ */ n.jsx(Ls.Provider, { value: A, children: s });
}, Bo = ({
  type: e,
  scale: t,
  tickCount: r,
  tickValues: a,
  formatTick: s,
  label: o,
  offset: i,
  className: l,
  minLabelSpacing: u,
  maxTickLabelLength: c,
  autoMinLabelSpacing: d = e === "x",
  labelAngle: f = 0,
  allowLabelWrap: m = !0,
  tickFormatPreset: w
}) => {
  const C = ln(), y = qt(), p = t || (e === "x" ? C?.xScale : C?.yScale), g = r ?? (e === "x" ? 6 : 5), F = typeof s == "function", A = Y.useMemo(() => {
    if (F || !w) return;
    const T = (L) => new Intl.DateTimeFormat(void 0, L);
    switch (w) {
      case "dayShortMonth":
        return (L) => {
          const j = L instanceof Date ? L : new Date(L);
          return `${j.getDate()}
${T({ month: "short" }).format(j)}`;
        };
      case "dayShortMonthYear":
        return (L) => {
          const j = L instanceof Date ? L : new Date(L);
          return `${j.getDate()}
${T({ month: "short" }).format(j)} ${j.getFullYear()}`;
        };
      case "shortMonth":
        return (L) => {
          const j = L instanceof Date ? L : new Date(L);
          return T({ month: "short" }).format(j);
        };
      case "shortMonthYear":
        return (L) => {
          const j = L instanceof Date ? L : new Date(L);
          return `${T({ month: "short" }).format(j)} ${j.getFullYear()}`;
        };
      case "hourMinute":
        return (L) => {
          const j = L instanceof Date ? L : new Date(L);
          return T({ hour: "2-digit", minute: "2-digit" }).format(j);
        };
      default:
        return;
    }
  }, [F, w]);
  let D = F ? s : A || ((T) => String(T));
  const $ = Y.useMemo(() => a && Array.isArray(a) ? a : p ? typeof p.ticks == "function" ? p.ticks(g) : p.domain ? p.domain() : [] : [], [p, g, a]);
  if (e === "x" && !F && !w && $.length && $.every((T) => T instanceof Date)) {
    const T = $[0], L = $[$.length - 1], j = L.getTime() - T.getTime(), v = 24 * 3600 * 1e3, N = 365 * v, S = T.getFullYear() === L.getFullYear(), h = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (j < 2 * v) {
      const P = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      D = (k) => P.format(k);
    } else if (j < 32 * v)
      D = (P) => {
        const k = P;
        return `${k.getDate()} ${h.format(k)}`;
      };
    else if (j < N && S)
      D = (P) => h.format(P);
    else if (j < 2 * N) {
      const P = /* @__PURE__ */ new Set();
      D = (k) => {
        const b = k, _ = b.getMonth();
        return P.has(_) || P.add(_), `${h.format(b)} ${b.getFullYear()}`;
      };
    } else
      D = (P) => String(P.getFullYear());
  }
  if (!p || !y) return null;
  if (e === "x") {
    const T = i ?? y.innerHeight, L = typeof p.bandwidth == "function", j = L ? p.bandwidth() : 0, v = (h) => {
      const P = p(h);
      return L ? P + j / 2 : P;
    };
    let N = u ?? 0;
    if (d && u == null) {
      const h = $.map((k) => D(k).replace(/\n.*/g, "")), P = h.length ? h.reduce((k, b) => k + b.length, 0) / h.length : 0;
      N = Math.max(12, Math.round(P * 6 + 4));
    }
    const S = Y.useMemo(() => {
      if (a && Array.isArray(a) || N <= 0) return $;
      const h = [];
      let P = -1 / 0;
      for (const k of $) {
        const b = v(k);
        b - P >= N && (h.push(k), P = b);
      }
      return h;
    }, [$, p, N, a, L, j]);
    return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${T})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ n.jsx("line", { x1: 0, x2: y.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      S.map((h, P) => {
        const k = D(h), b = c && k.length > c ? k.slice(0, Math.max(1, c - 1)) + "…" : k, _ = m ? b.split(/\n/) : [b.replace(/\n/g, " ")], M = f < 0 ? "end" : f > 0 ? "start" : "middle";
        return /* @__PURE__ */ n.jsxs("g", { transform: `translate(${v(h)},0)`, children: [
          /* @__PURE__ */ n.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ n.jsxs("text", { y: 9, textAnchor: M, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: f ? `rotate(${f})` : void 0, fontFamily: "inherit", children: [
            _.map((re, V) => /* @__PURE__ */ n.jsx("tspan", { x: 0, dy: V === 0 ? 0 : "1.1em", children: re }, V)),
            b !== k && /* @__PURE__ */ n.jsx("title", { children: k })
          ] })
        ] }, h?.toString?.() || P);
      })
    ] });
  }
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    $.map((T, L) => {
      const j = D(T), v = c && j.length > c ? j.slice(0, Math.max(1, c - 1)) + "…" : j, N = m ? v.split(/\n/) : [v.replace(/\n/g, " ")];
      return /* @__PURE__ */ n.jsxs("g", { transform: `translate(0,${p(T)})`, children: [
        /* @__PURE__ */ n.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ n.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          N.map((S, h) => /* @__PURE__ */ n.jsx("tspan", { x: -9, dy: h === 0 ? 0 : "1.1em", children: S }, h)),
          v !== j && /* @__PURE__ */ n.jsx("title", { children: j })
        ] })
      ] }, T?.toString?.() || L);
    }),
    o && /* @__PURE__ */ n.jsx("text", { transform: "rotate(-90)", x: -y.innerHeight / 2, y: -y.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: o })
  ] });
}, Up = ({
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
    e === "y" && l.map((u, c) => /* @__PURE__ */ n.jsx("line", { x1: 0, x2: i.innerWidth, y1: o.yScale(u), y2: o.yScale(u), stroke: r, strokeDasharray: a }, c)),
    e === "x" && l.map((u, c) => /* @__PURE__ */ n.jsx("line", { y1: 0, y2: i.innerHeight, x1: o.xScale(u), x2: o.xScale(u), stroke: r, strokeDasharray: a }, c))
  ] });
}, Gp = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, Gn = {
  color: Gp
}, Vp = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Kr = {
  color: Vp
}, Yp = [
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
let ja = null, Na = null, Ta = null, qi = "optimized";
function qp() {
  const e = { color: { ...Kr.color, ...Gn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, u) => l ? l[u] : void 0, e);
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
    return Yp;
  }
}
function Xp() {
  return ja || (ja = qp()), ja;
}
function Kp(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function Da(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Jp(e, t, r) {
  const a = Da(e), s = Da(t), o = Da(r), i = a * 0.4124 + s * 0.3576 + o * 0.1805, l = a * 0.2126 + s * 0.7152 + o * 0.0722, u = a * 0.0193 + s * 0.1192 + o * 0.9505;
  return { x: i * 100, y: l * 100, z: u * 100 };
}
function Zp(e, t, r) {
  let i = e / 95.047, l = t / 100, u = r / 108.883;
  const c = (d) => d > 8856e-6 ? Math.cbrt(d) : 7.787 * d + 16 / 116;
  return i = c(i), l = c(l), u = c(u), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - u) };
}
function Xi(e) {
  const t = Kp(e);
  if (!t) return null;
  const r = Jp(t.r, t.g, t.b);
  return Zp(r.x, r.y, r.z);
}
function Ho(e, t) {
  const r = e.L - t.L, a = e.a - t.a, s = e.b - t.b;
  return Math.sqrt(r * r + a * a + s * s);
}
function Qp() {
  const e = Xp();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Xi(i));
  let r = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let u = 0, c = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (u += Ho(l, t[f]), c++);
    const d = u / Math.max(1, c);
    d > a && (a = d, r = i);
  }
  const s = new Set(e.map((i, l) => l)), o = [];
  for (o.push(r), s.delete(r); s.size; ) {
    let i = Array.from(s)[0], l = -1;
    for (const u of s) {
      const c = t[u];
      if (!c) continue;
      let d = 1 / 0;
      for (const f of o) {
        const m = t[f];
        if (m) {
          const w = Ho(c, m);
          w < d && (d = w);
        }
      }
      d > l && (l = d, i = u);
    }
    o.push(i), s.delete(i);
  }
  return o.map((i) => e[i]);
}
function eh() {
  return Na || (Na = Qp()), Na;
}
function th(e, t, r) {
  const a = (e + 16) / 116, s = t / 500 + a, o = a - r / 200, i = (d) => {
    const f = d * d * d;
    return f > 8856e-6 ? f : (d - 16 / 116) / 7.787;
  }, l = i(s) * 95.047, u = i(a) * 100, c = i(o) * 108.883;
  return { X: l, Y: u, Z: c };
}
function nh(e, t, r) {
  e /= 100, t /= 100, r /= 100;
  let a = e * 3.2406 + t * -1.5372 + r * -0.4986, s = e * -0.9689 + t * 1.8758 + r * 0.0415, o = e * 0.0557 + t * -0.204 + r * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), s = Math.min(1, Math.max(0, i(s))), o = Math.min(1, Math.max(0, i(o))), { r: Math.round(a * 255), g: Math.round(s * 255), b: Math.round(o * 255) };
}
function rh(e, t, r) {
  return `#${[e, t, r].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function ah(e, t) {
  const r = Xi(e);
  if (!r) return e;
  const a = Math.min(100, Math.max(0, r.L + t)), { X: s, Y: o, Z: i } = th(a, r.a, r.b), l = nh(s, o, i);
  return rh(l.r, l.g, l.b);
}
function sh() {
  const e = eh(), r = [12, -12, 24, -24].map((s) => e.map((o) => ah(o, s))), a = [...e];
  return r.forEach((s) => a.push(...s)), a;
}
function oh() {
  return (!Ta || ih()) && (Ta = sh(), Ki = qi), Ta;
}
let Ki = null;
function ih() {
  return Ki !== qi;
}
function kt(e) {
  const t = oh();
  return t[e % t.length];
}
let xn = null, Bn = null, Hn = null, On = null;
function lh() {
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
    On = {}, Object.keys(s).forEach((o) => {
      const i = s[o]?.$value || s[o]?.value;
      typeof i == "string" && (On[o] = i);
    }), Hn = {}, Object.keys(a).forEach((o) => {
      const i = a[o]?.$value || a[o]?.value;
      typeof i == "string" && (Hn[o] = i);
    });
  }
}
function Jr() {
  (!xn || !Bn || !Hn || !On) && lh();
}
function an(e) {
  return Jr(), xn ? xn[e % xn.length] : "#212b32";
}
function ch(e) {
  return Jr(), Bn ? Bn[e] : void 0;
}
function yr(e, t) {
  return ch(e) || an(t);
}
const qa = ["low", "moderate", "high", "critical"];
let $a = null;
function uh() {
  const e = { color: { ...Kr.color, ...Gn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, u) => l ? l[u] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, r = {};
  return qa.forEach((a) => {
    const s = t(`color.data-viz.severity.${a}`);
    s && (r[a] = s);
  }), r;
}
function Ji() {
  return $a || ($a = uh()), $a;
}
function dh(e) {
  return Ji()[e.toLowerCase()];
}
function fh(e, t) {
  return dh(e) || Ji()[qa[t % qa.length]] || kt(t);
}
function ph(e) {
  return Jr(), Hn ? Hn[e] : void 0;
}
function hh(e, t) {
  return ph(e) || an(t);
}
const Xa = ["trust", "ambulance", "icb", "region"];
let Ia = null;
function mh() {
  const e = { color: { ...Kr.color, ...Gn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, u) => l ? l[u] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, r = {};
  return Xa.forEach((a) => {
    const s = t(`color.data-viz.org-level.${a}`);
    s && (r[a] = s);
  }), r;
}
function Zi() {
  return Ia || (Ia = mh()), Ia;
}
function gh(e) {
  return Zi()[e.toLowerCase()];
}
function xh(e, t) {
  return gh(e) || Zi()[Xa[t % Xa.length]] || kt(t);
}
function bh(e) {
  return Jr(), On ? On[e] : void 0;
}
function yh(e, t) {
  return bh(e) || an(t);
}
let Ma = null;
const vh = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function wh(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function _h() {
  const e = { color: { ...Kr.color, ...Gn.color } }, t = (s, o = /* @__PURE__ */ new Set()) => {
    if (o.has(s)) return;
    o.add(s);
    const i = s.split(".").reduce((u, c) => u ? u[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), o) : typeof l == "string" ? l : void 0;
  }, r = {}, a = [];
  return vh.forEach((s) => {
    const o = t(`color.data-viz.region.${s}`);
    o ? r[s] = o : a.push(s);
  }), process.env.NODE_ENV !== "production" && (Object.keys(r).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), r;
}
function Sh() {
  return Ma || (Ma = _h()), Ma;
}
function kh(e) {
  return Sh()[wh(e)];
}
function bn(e, t) {
  return kh(e) || kt(t);
}
const Qi = Y.createContext(null), Vn = () => Y.useContext(Qi), Ib = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: r,
  onChange: a
}) => {
  const [s, o] = Y.useState(() => new Set(e)), i = r !== void 0, l = Y.useMemo(() => i ? new Set(r) : s, [i, r, s]), u = Y.useCallback((d) => {
    i || o(new Set(d)), a?.(Array.from(d));
  }, [i, a]), c = Y.useMemo(() => ({
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
  return /* @__PURE__ */ n.jsx(Qi.Provider, { value: c, children: t });
}, el = Y.createContext(null), Wt = () => Y.useContext(el), Ch = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: r = !1
}) => {
  const a = ln(), s = Vn(), [o, i] = Y.useState(null), l = Y.useRef(/* @__PURE__ */ new Map()), [u, c] = Y.useState([]), d = Y.useCallback(
    (L, j) => {
      l.current.set(L, j);
    },
    []
  ), f = Y.useCallback((L) => {
    l.current.delete(L);
  }, []), m = Y.useCallback(
    (L, j) => {
      if (!a) return;
      const { xScale: v, yScale: N } = a;
      let S = null, h = 1 / 0;
      l.current.forEach((P, k) => {
        P.forEach((b, _) => {
          const M = v(b.x), re = N(b.y), V = M - L, R = re - j, H = Math.sqrt(V * V + R * R);
          H < h && (h = H, S = {
            seriesId: k,
            index: _,
            x: b.x,
            y: b.y,
            clientX: M,
            clientY: re
          });
        });
      }), S && h <= t ? i(S) : i(null);
    },
    [a, t]
  ), w = Y.useCallback(() => i(null), []);
  Y.useEffect(() => {
    if (!o) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: L, yScale: j } = a, v = [];
    l.current.forEach((N, S) => {
      N.forEach((h, P) => {
        (o.x instanceof Date && h.x instanceof Date ? h.x.getTime() === o.x.getTime() : h.x === o.x) && v.push({
          seriesId: S,
          index: P,
          x: h.x,
          y: h.y,
          clientX: L(h.x),
          clientY: j(h.y)
        });
      });
    }), v.sort((N, S) => N.seriesId.localeCompare(S.seriesId)), c(v);
  }, [o, a]);
  const C = Y.useCallback(
    (L) => {
      if (!o) return;
      const j = l.current.get(o.seriesId);
      if (!j) return;
      let v = o.index + L;
      if (v < 0 || v >= j.length) {
        if (!r) return;
        v = (v + j.length) % j.length;
      }
      const N = j[v];
      if (!a) return;
      const { xScale: S, yScale: h } = a;
      i({
        seriesId: o.seriesId,
        index: v,
        x: N.x,
        y: N.y,
        clientX: S(N.x),
        clientY: h(N.y)
      });
    },
    [o, a, r]
  ), y = Y.useCallback(
    (L) => {
      let j = Array.from(l.current.keys());
      if (s && (j = j.filter((M) => !s.isHidden(M))), j.length === 0) return;
      if (!o) {
        const M = j[0], re = l.current.get(M);
        if (!re || !a) return;
        const { xScale: V, yScale: R } = a, H = re[0];
        i({
          seriesId: M,
          index: 0,
          x: H.x,
          y: H.y,
          clientX: V(H.x),
          clientY: R(H.y)
        });
        return;
      }
      const v = j.indexOf(o.seriesId);
      if (v === -1) return;
      let N = v + L;
      if (N < 0 || N >= j.length) {
        if (!r) return;
        N = (N + j.length) % j.length;
      }
      const S = j[N], h = l.current.get(S);
      if (!h || !a) return;
      const P = Math.min(o.index, h.length - 1), k = h[P], { xScale: b, yScale: _ } = a;
      i({
        seriesId: S,
        index: P,
        x: k.x,
        y: k.y,
        clientX: b(k.x),
        clientY: _(k.y)
      });
    },
    [o, a, r, s]
  ), p = Y.useCallback(() => {
    let L = Array.from(l.current.keys());
    if (s && (L = L.filter((P) => !s.isHidden(P))), L.length === 0) return;
    const j = o ? o.seriesId : L[0], v = l.current.get(j);
    if (!v || v.length === 0 || !a) return;
    const N = v[0], { xScale: S, yScale: h } = a;
    i({
      seriesId: j,
      index: 0,
      x: N.x,
      y: N.y,
      clientX: S(N.x),
      clientY: h(N.y)
    });
  }, [o, a, s]), g = Y.useCallback(() => {
    let L = Array.from(l.current.keys());
    if (s && (L = L.filter((k) => !s.isHidden(k))), L.length === 0) return;
    const j = o ? o.seriesId : L[0], v = l.current.get(j);
    if (!v || v.length === 0 || !a) return;
    const N = v.length - 1, S = v[N], { xScale: h, yScale: P } = a;
    i({
      seriesId: j,
      index: N,
      x: S.x,
      y: S.y,
      clientX: h(S.x),
      clientY: P(S.y)
    });
  }, [o, a, s]), F = Y.useCallback(
    () => C(1),
    [C]
  ), A = Y.useCallback(
    () => C(-1),
    [C]
  ), D = Y.useCallback(
    () => y(1),
    [y]
  ), $ = Y.useCallback(
    () => y(-1),
    [y]
  ), T = Y.useMemo(
    () => ({
      focused: o,
      setFocused: i,
      aggregated: u,
      focusNearest: m,
      clear: w,
      registerSeries: d,
      unregisterSeries: f,
      focusNextPoint: F,
      focusPrevPoint: A,
      focusNextSeries: D,
      focusPrevSeries: $,
      focusFirstPoint: p,
      focusLastPoint: g
    }),
    [
      o,
      u,
      m,
      w,
      d,
      f,
      F,
      A,
      D,
      $,
      p,
      g
    ]
  );
  return /* @__PURE__ */ n.jsx(el.Provider, { value: T, children: e });
}, jh = ({
  series: e,
  seriesIndex: t,
  palette: r,
  showPoints: a,
  focusablePoints: s,
  focusIndex: o,
  parseX: i,
  visibilityMode: l = "remove",
  strokeWidth: u = 1,
  smooth: c = !0,
  gradientFillId: d,
  colors: f
}) => {
  const m = ln();
  if (!m) return null;
  const { xScale: w, yScale: C } = m, p = Vn()?.isHidden(e.id) ?? !1, g = p && l === "fade";
  if (p && l === "remove")
    return null;
  const F = Wt();
  Y.useEffect(() => {
    if (!F) return;
    const j = e.data.map((v) => ({ x: i(v), y: v.y }));
    return F.registerSeries(e.id, j), () => F.unregisterSeries(e.id);
  }, [F, e.id, e.data, i]);
  const A = Y.useMemo(
    () => Ya(
      e.data,
      (j) => w(i(j)),
      (j) => C(j.y),
      { smooth: c }
    ),
    [e.data, w, C, i, c]
  ), D = Y.useMemo(() => {
    if (!e.data.length) return "";
    const [j] = C.domain(), v = Va().x((N) => w(i(N))).y0(() => C(j)).y1((N) => C(N.y));
    return c && v.curve(br), v(e.data) || "";
  }, [e.data, w, C, i, c]), $ = f && f[t], T = e.color || $ || (r === "region" ? bn(e.id, t) : kt(t)), L = r === "region" ? yr(e.id, t) : an(t);
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: g ? 0.25 : 1,
      "aria-hidden": g ? !0 : void 0,
      children: [
        d && /* @__PURE__ */ n.jsx(
          "path",
          {
            d: D,
            fill: `url(#${d})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            d: A,
            fill: "none",
            stroke: T,
            strokeWidth: u,
            role: "presentation"
          }
        ),
        a && e.data.map((j, v) => {
          const N = w(i(j)), S = C(j.y), h = s ? 0 : -1, P = !g && (s && v === o || F?.focused?.seriesId === e.id && F.focused.index === v), k = () => {
            F && !g && F.setFocused({
              seriesId: e.id,
              index: v,
              x: i(j),
              y: j.y,
              clientX: N,
              clientY: S
            });
          }, b = () => {
            F && F.focused?.seriesId === e.id && F.focused.index === v && F.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: N,
              cy: S,
              r: P ? 5 : 3.5,
              stroke: P ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : L,
              strokeWidth: P ? 2 : 1,
              fill: P ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : T,
              className: "fdp-line-point",
              tabIndex: g ? -1 : h,
              "aria-label": `${e.label || e.id} ${i(j).toDateString()} value ${j.y}`,
              "data-series": e.id,
              "data-index": v,
              onMouseEnter: k,
              onFocus: k,
              onMouseLeave: b,
              onBlur: b
            },
            v
          );
        })
      ]
    }
  );
}, Nh = ({ polite: e = !0, format: t }) => {
  const r = Wt(), [a, s] = Y.useState(""), o = Y.useRef("");
  return Y.useEffect(() => {
    if (!r?.focused) return;
    const { focused: i, aggregated: l } = r;
    let u;
    if (l && l.length > 1) {
      const c = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      u = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      u = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : Th(i.seriesId, i.x, i.y, i.index);
    if (u !== o.current) {
      o.current = u, s("");
      const c = setTimeout(() => s(u), 10);
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
function Th(e, t, r, a) {
  const s = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${s}, value ${r}`;
}
const Mb = () => {
  const e = Wt(), t = qt();
  if (!e || !t || !e.focused) return null;
  const { focused: r, aggregated: a } = e, { innerWidth: s, innerHeight: o } = t, i = Math.min(Math.max(r.clientX, 0), s), l = Math.min(Math.max(r.clientY, 0), o), u = i + 8, c = l - 8, d = a.length > 1, f = r.x instanceof Date ? r.x.toDateString() : String(r.x), m = d ? f : `${f} • ${r.y}`, w = /\d+$/.exec(r.seriesId || ""), C = w ? parseInt(w[0], 10) - 1 : 0, y = kt(C >= 0 ? C : 0) || "#005eb8", p = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ n.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: p, strokeWidth: 3 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: p, strokeWidth: 1.5 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 2.5, fill: y, stroke: "#fff", strokeWidth: 0.5 }),
    d ? (() => {
      const F = a.map((L) => `${L.seriesId}: ${L.y}`), A = [m, ...F], D = A.reduce((L, j) => Math.max(L, j.length), 0), $ = Math.max(90, D * 6.2 + 16), T = 16 * A.length + 8;
      return /* @__PURE__ */ n.jsxs("g", { children: [
        /* @__PURE__ */ n.jsx("rect", { x: u, y: c - T, rx: 4, ry: 4, width: $, height: T, fill: "#212b32", opacity: 0.92 }),
        A.map((L, j) => /* @__PURE__ */ n.jsx("text", { x: u + 8, y: c - T + 6 + 16 * (j + 0.7), fill: "#fff", fontSize: 12, children: L }, j))
      ] });
    })() : /* @__PURE__ */ n.jsxs("g", { children: [
      /* @__PURE__ */ n.jsx("rect", { x: u, y: c - 24, rx: 4, ry: 4, width: Math.max(60, m.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ n.jsx("text", { x: u + 8, y: c - 8, fill: "#fff", fontSize: 12, children: m })
    ] })
  ] });
}, Lb = ({
  items: e,
  palette: t = "categorical",
  direction: r = "row",
  interactive: a = !1,
  adjustStrokeForWhiteBackground: s = !0,
  hiddenIds: o,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: u
}) => {
  const c = Vn(), d = !!(c && !a && !l && o === void 0), f = a || d, m = e || [], w = o !== void 0, [C, y] = Y.useState(new Set(i)), p = w ? new Set(o) : C, [g, F] = Y.useState(""), A = (D) => {
    if (d && c) {
      const h = c.isHidden(D);
      c.toggle(D);
      const k = m.find((_) => _.id === D)?.label || D, b = u ? u(D, h, k) : `${k} ${h ? "shown" : "hidden"}`;
      F(b);
      return;
    }
    if (!f) return;
    const $ = new Set(p), T = $.has(D);
    T ? $.delete(D) : $.add(D), w || y($);
    const L = m.filter((h) => !$.has(h.id)).map((h) => h.id), j = Array.from($);
    l?.(L, j);
    const N = m.find((h) => h.id === D)?.label || D, S = u ? u(D, T, N) : `${N} ${T ? "shown" : "hidden"}`;
    F(S);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ n.jsx("ul", { className: `fdp-legend fdp-legend--${r}`, children: m.map((D, $) => {
      const T = D.palette || t, L = D.color || (T === "region" ? bn(D.id, $) : T === "severity" ? fh(D.id, $) : T === "org-level" ? xh(D.id, $) : kt($));
      let j = D.stroke || (T === "region" ? yr(D.id, $) : T === "severity" ? hh(D.id, $) : T === "org-level" ? yh(D.id, $) : an($));
      if (s && j) {
        const S = j.trim().toLowerCase();
        (S === "#fff" || S === "#ffffff" || S === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(S)) && (j = "#212b32");
      }
      const v = d && c ? c.isHidden(D.id) : p.has(D.id), N = f ? {
        "aria-pressed": !v,
        "aria-label": `${D.label} (${v ? "show" : "hide"})`,
        onClick: () => A(D.id)
      } : { "aria-label": D.label };
      return /* @__PURE__ */ n.jsxs("li", { className: `fdp-legend__item${v ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: L,
              backgroundImage: D.patternDataUrl ? `url(${D.patternDataUrl})` : void 0,
              backgroundSize: D.patternDataUrl ? "auto" : void 0,
              borderColor: j
            },
            ...N
          }
        ),
        /* @__PURE__ */ n.jsx("span", { className: "fdp-legend__label", children: D.label })
      ] }, D.id);
    }) }),
    f && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: g })
  ] });
}, Pb = ({
  series: e,
  seriesIndex: t,
  palette: r,
  parseX: a,
  areaOnly: s = !1,
  visibilityMode: o = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: u,
  gradientFill: c = !0,
  colors: d
}) => {
  const f = ln();
  if (!f) return null;
  const { xScale: m, yScale: w } = f, y = Vn()?.isHidden(e.id) ?? !1, p = y && o === "fade";
  if (y && o === "remove") return null;
  const g = Wt();
  Y.useEffect(() => {
    if (!g) return;
    const L = e.data.map((j) => ({ x: a(j), y: j.y }));
    return g.registerSeries(e.id, L), () => g.unregisterSeries(e.id);
  }, [g, e.id, e.data, a]);
  const F = d && d[t], A = e.color || F || (r === "region" ? bn(e.id, t) : kt(t)), D = Y.useMemo(() => u && u.length === e.data.length ? Ya(
    e.data,
    (L) => m(a(L)),
    (L) => {
      const j = e.data.indexOf(L);
      return w(u[j].y1);
    },
    { smooth: l }
  ) : Ya(
    e.data,
    (L) => m(a(L)),
    (L) => w(L.y),
    { smooth: l }
  ), [e.data, u, m, w, a, l]), $ = Y.useMemo(() => {
    if (u && u.length === e.data.length) {
      const S = Va().x((h) => m(a(h))).y0((h, P) => w(u[P].y0)).y1((h, P) => w(u[P].y1));
      return l && S.curve(br), S(e.data) || "";
    }
    const [L, j] = w.domain();
    let v = i;
    v < L ? v = L : v > j && (v = j);
    const N = Va().x((S) => m(a(S))).y0(() => w(v)).y1((S) => w(S.y));
    return l && N.curve(br), N(e.data) || "";
  }, [e.data, u, m, w, a, i, l]), T = Y.useId();
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: p ? 0.25 : 1,
      "aria-hidden": p ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs("linearGradient", { id: T, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: A, stopOpacity: 0.25 }),
          /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: A, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: $,
            fill: c ? `url(#${T})` : A,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !s && /* @__PURE__ */ n.jsx("path", { d: D, fill: "none", stroke: A, strokeWidth: 1 })
      ]
    }
  );
}, Fb = ({
  series: e,
  seriesIndex: t,
  seriesCount: r,
  palette: a,
  parseX: s,
  focusable: o = !0,
  widthFactor: i = 0.8,
  groupGap: l = 2,
  barWidth: u,
  adaptive: c = !1,
  adaptiveGroupOccupancy: d = 0.9,
  visibilityMode: f = "remove",
  colorMode: m = "series",
  allSeries: w,
  stacked: C,
  gapRatio: y = 0.15,
  minBarWidth: p,
  gradientFill: g = !0,
  gradientStrokeMatch: F = !0,
  opacity: A = 1,
  fadedOpacity: D = 0.25,
  flatFillOpacity: $ = 1,
  colors: T
}) => {
  const L = Math.max(0, y), j = ln(), v = qt();
  if (!j || !v) return null;
  const { xScale: N, yScale: S } = j, P = Vn()?.isHidden(e.id) ?? !1, k = P && f === "fade";
  if (P && f === "remove") return null;
  const b = Wt();
  Y.useEffect(() => {
    if (!b) return;
    const ne = e.data.map((Z) => ({ x: s(Z), y: Z.y }));
    return b.registerSeries(e.id, ne), () => b.unregisterSeries(e.id);
  }, [b, e.id, e.data, s]);
  const _ = typeof N.bandwidth == "function", M = _ ? N.bandwidth() : void 0, re = Y.useMemo(() => {
    if (M != null) return M;
    const ne = w && w.length ? w : [e], Z = [];
    ne.forEach((G) => {
      G.data.forEach((ee) => {
        const X = N(s(ee));
        Number.isFinite(X) && Z.push(X);
      });
    });
    const ue = Z.sort((G, ee) => G - ee);
    if (ue.length <= 1) return 40;
    const x = [];
    for (let G = 1; G < ue.length; G++)
      x.push(ue[G] - ue[G - 1]);
    return x.sort((G, ee) => G - ee), (x[Math.floor(x.length / 2)] || 40) * i;
  }, [e.data, w, N, s, i, M]), { basePerBar: V } = Y.useMemo(() => {
    if (_) {
      const ue = re, x = Math.max(
        1,
        (ue - l * (r - 1)) / r
      ), B = e.barWidth ?? u;
      let G = B ? Math.min(B, ue) : x;
      if (c) {
        const ee = ue * Math.min(1, Math.max(0.05, d)), X = Math.max(
          1,
          (ee - l * (r - 1)) / r
        );
        G = B ? Math.min(G, X) : X;
      }
      return { basePerBar: G };
    }
    const ne = e.barWidth ?? u, Z = Math.max(
      1,
      (re - l * (r - 1)) / r
    );
    if (c) {
      const ue = w && w.length ? w : [e], x = [];
      ue.forEach(
        (me) => me.data.forEach((Se) => {
          const ce = N(s(Se));
          Number.isFinite(ce) && x.push(ce);
        })
      ), x.sort((me, Se) => me - Se);
      const B = [];
      for (let me = 1; me < x.length; me++)
        B.push(x[me] - x[me - 1]);
      B.sort((me, Se) => me - Se);
      const ee = (B[Math.floor(B.length / 2)] || re) * Math.min(1, Math.max(0.05, d)), X = Math.max(
        1,
        (ee - l * (r - 1)) / r
      );
      return { basePerBar: ne ? Math.min(ne, X) : X };
    }
    return ne ? { basePerBar: Math.min(ne, Z) } : { basePerBar: Z };
  }, [
    _,
    re,
    l,
    r,
    u,
    e.barWidth,
    c,
    d,
    w,
    N,
    s
  ]), R = Y.useMemo(() => {
    if (_) return [];
    const ne = [];
    return (w && w.length ? w : [e]).forEach(
      (ue) => ue.data.forEach((x) => {
        const B = N(s(x));
        Number.isFinite(B) && ne.push(B);
      })
    ), ne.sort((ue, x) => ue - x), Array.from(new Set(ne));
  }, [_, w, e, N, s]), H = Y.useMemo(() => {
    if (_)
      return [];
    if (!R.length) return [];
    if (R.length === 1)
      return [
        { center: R[0], left: 0, right: v.innerWidth }
      ];
    const ne = [];
    for (let Z = 0; Z < R.length; Z++) {
      const ue = R[Z], x = Z === 0 ? 0 : (R[Z - 1] + ue) / 2, B = Z === R.length - 1 ? v.innerWidth : (ue + R[Z + 1]) / 2;
      ne.push({
        center: ue,
        left: Math.max(0, x),
        right: Math.min(v.innerWidth, B)
      });
    }
    return ne;
  }, [_, R, v.innerWidth]), W = Y.useMemo(() => {
    if (_ || !H.length)
      return;
    const ne = Math.min(1, Math.max(0.05, i)), Z = H.map((ee) => Math.max(2, ee.right - ee.left)), ue = Z.map(
      (ee) => Math.max(2, Math.min(ee - 1, ee * ne))
    );
    let x = Math.min(...ue);
    if (p)
      if (r <= 1) {
        const ee = Math.min(...Z.map((X) => X - 1));
        ee >= p && x < p && (x = Math.min(ee, p));
      } else {
        const ee = Math.min(...Z.map((ae) => ae - 1)), X = p * r + (r - 1) * (p * L);
        X <= ee && x < X && (x = X);
      }
    if (r <= 1)
      return p && x < p && Z.every((X) => X >= p) ? { groupWidth: p, barWidth: p } : { groupWidth: x, barWidth: x };
    let B = x / (r + (r - 1) * L);
    return B < 1 && (B = 1), p && B < p && p * r + (r - 1) * (p * L) <= x && (B = p), { groupWidth: B * r + (r - 1) * (B * L), barWidth: B };
  }, [
    _,
    H,
    i,
    r,
    L,
    p
  ]), se = T && T[t] ? T[t] : void 0, z = e.color || se || (a === "region" ? bn(e.id, t) : kt(t)), pe = a === "region" ? yr(e.id, t) : an(t), we = F && (e.color || se) ? z : pe, le = Number.isFinite(S(0)) ? S(0) : S.range()[0], fe = Y.useId();
  return C && C.length === e.data.length ? /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: k ? D : A,
      "aria-hidden": k ? !0 : void 0,
      children: [
        g && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs(
          "linearGradient",
          {
            id: fe,
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
        e.data.map((ne, Z) => {
          const ue = s(ne), x = N(_ ? ne.x : ue);
          let B, G;
          if (_)
            B = re, G = x;
          else {
            const Q = H.find(
              (q) => Math.abs(q.center - x) < 0.5
            );
            if (!Q || !W)
              B = V, G = x - V / 2;
            else {
              const { groupWidth: q } = W;
              B = q;
              let I = x - q / 2;
              I < Q.left && (I = Q.left), I + q > Q.right && (I = Math.max(Q.left, Q.right - q)), G = I;
            }
          }
          const ee = C[Z], X = S(ee.y0), ae = S(ee.y1), me = Math.min(X, ae), Se = Math.abs(ae - X) || 1;
          if (!_ && p && B < p) {
            const Q = H.find(
              (q) => Math.abs(q.center - x) < 0.5
            );
            if (Q) {
              const q = Math.max(2, Q.right - Q.left - 1), I = Math.min(q, p);
              I > B && (B = I, G = Math.max(
                Q.left,
                Math.min(Q.right - B, x - B / 2)
              ));
            }
          }
          const ce = !k && b?.focused?.seriesId === e.id && b.focused.index === Z, J = () => {
            !b || k || b.setFocused({
              seriesId: e.id,
              index: Z,
              x: ue,
              y: ee.y1 - ee.y0,
              clientX: G + B / 2,
              clientY: me
            });
          }, E = () => {
            b?.focused?.seriesId === e.id && b.focused.index === Z && b.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: G,
              y: me,
              width: B,
              height: Se,
              fill: g ? `url(#${fe})` : z,
              ...g ? {} : { fillOpacity: $ },
              stroke: ce ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : g && F ? z : void 0,
              strokeWidth: ce ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: k || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${ue instanceof Date ? ue.toDateString() : ue} value ${ee.y1 - ee.y0}`,
              onMouseEnter: J,
              onFocus: J,
              onMouseLeave: E,
              onBlur: E
            },
            Z
          );
        })
      ]
    }
  ) : /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: k ? D : A,
      "aria-hidden": k ? !0 : void 0,
      children: [
        g && /* @__PURE__ */ n.jsxs("defs", { children: [
          m === "series" && /* @__PURE__ */ n.jsxs(
            "linearGradient",
            {
              id: fe,
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
          m === "category" && e.data.map((ne, Z) => {
            const x = T && T[Z] || (a === "region" ? bn(String(ne.x), Z) : kt(Z)), B = `${fe}-${Z}`;
            return /* @__PURE__ */ n.jsxs(
              "linearGradient",
              {
                id: B,
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
              B
            );
          })
        ] }),
        e.data.map((ne, Z) => {
          const ue = s(ne), x = N(_ ? ne.x : ue);
          let B, G;
          if (_) {
            const oe = re;
            if (r <= 1)
              G = oe, B = x;
            else {
              G = Math.max(
                1,
                oe / (r + (r - 1) * L)
              );
              const U = G * L, O = G * r + U * (r - 1);
              B = x + (oe - O) / 2 + t * (G + U);
            }
          } else {
            const oe = H.find((U) => U.center === x);
            if (!oe || !W)
              G = V, B = x - V / 2, p && G < p && (G = p, B = x - G / 2);
            else {
              const { barWidth: U } = W;
              G = U;
              const O = r > 1 ? U * L : 0, te = G * r + O * (r - 1);
              let de = x - te / 2;
              de < oe.left && (de = oe.left), de + te > oe.right && (de = Math.max(oe.left, oe.right - te)), B = de + t * (G + O);
            }
            if (p && G < p) {
              const U = H.find(
                (O) => Math.abs(O.center - x) < 0.5
              );
              if (U) {
                const O = Math.max(2, U.right - U.left - 1), te = Math.min(O, p);
                if (te > G)
                  if (r <= 1)
                    G = te, B = Math.max(
                      U.left,
                      Math.min(U.right - G, x - G / 2)
                    );
                  else {
                    const de = te * L, ie = te * r + de * (r - 1);
                    if (ie <= U.right - U.left - 1) {
                      G = te;
                      const be = ie;
                      let Ce = x - be / 2;
                      Ce < U.left && (Ce = U.left), Ce + be > U.right && (Ce = Math.max(
                        U.left,
                        U.right - be
                      )), B = Ce + t * (G + de);
                    }
                  }
              }
            }
          }
          const ee = B + G / 2, X = S(ne.y), ae = Math.min(le, X), me = Math.abs(le - X), Se = !k && b?.focused?.seriesId === e.id && b.focused.index === Z, ce = () => {
            !b || k || b.setFocused({
              seriesId: e.id,
              index: Z,
              x: ue,
              y: ne.y,
              clientX: ee,
              clientY: X
            });
          }, J = () => {
            b?.focused?.seriesId === e.id && b.focused.index === Z && b.clear();
          }, E = m === "category" && T ? T[Z] : void 0, Q = m === "category" ? E || (a === "region" ? bn(String(ne.x), Z) : kt(Z)) : z, q = m === "category" ? `${fe}-${Z}` : fe, I = g && F ? Q : m === "category" ? a === "region" ? yr(String(ne.x), Z) : an(Z) : we, K = Se ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : I || Q;
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: B,
              y: ae,
              width: G,
              height: me || 1,
              fill: g ? `url(#${q})` : Q,
              ...g ? {} : { fillOpacity: $ },
              stroke: K,
              strokeWidth: Se ? 2 : 1,
              className: "fdp-bar",
              tabIndex: k || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${ue instanceof Date ? ue.toDateString() : ue} value ${ne.y}`,
              onMouseEnter: ce,
              onFocus: ce,
              onMouseLeave: J,
              onBlur: J
            },
            Z
          );
        })
      ]
    }
  );
}, Ab = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  paddingInner: a = 0.1,
  paddingOuter: s = 0.05,
  children: o,
  yTickCount: i = 5
}) => {
  const l = qt(), u = t ?? l?.innerWidth ?? 0, c = r ?? l?.innerHeight ?? 0, d = Y.useMemo(() => e.flatMap((p) => p.data), [e]), f = Y.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    return d.forEach((g) => p.add(g.x)), Array.from(p);
  }, [d]), m = Y.useMemo(
    () => Math.max(0, ...d.map((p) => p.y)),
    [d]
  ), w = Y.useMemo(
    () => oi().domain(f).range([0, u]).paddingInner(a).paddingOuter(s),
    [f, u, a, s]
  ), C = Y.useMemo(
    () => ur().domain([0, m]).nice().range([c, 0]),
    [m, c]
  ), y = Y.useMemo(
    () => ({
      xScale: w,
      yScale: C,
      getXTicks: () => f,
      getYTicks: (p = i) => C.ticks(p)
    }),
    [w, C, f, i]
  );
  return /* @__PURE__ */ n.jsx(Ls.Provider, { value: y, children: o });
}, Eb = ({
  title: e,
  description: t,
  source: r,
  table: a,
  className: s,
  id: o,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const u = Y.useId(), c = o || u, d = t ? `${c}-desc` : void 0, f = r ? `${c}-src` : void 0, m = typeof window < "u" && !l;
  return /* @__PURE__ */ n.jsxs(
    "figure",
    {
      id: c,
      className: gr("fdp-chart fdp-chart--noscript", s),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": gr(d, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ n.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ n.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ n.jsx("p", { id: d, className: "fdp-chart__description", children: t }),
        !m && /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ n.jsx("noscript", { children: /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ n.jsx(zt, { ...a }) }) }),
          /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ n.jsx(zt, { ...a }) })
        ] }),
        r && /* @__PURE__ */ n.jsx("figcaption", { className: "fdp-chart__caption", children: r && /* @__PURE__ */ n.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          r
        ] }) })
      ]
    }
  );
}, Rb = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: r = 0, children: a }) => {
  const s = Y.useRef(null);
  return Y.useEffect(() => {
    const o = s.current;
    if (!o) return;
    const i = () => {
      const l = Array.from(o.querySelectorAll(e));
      if (l.length === 0) return;
      const u = [];
      l.forEach((c) => {
        c.classList.contains("fdp-chart--enhanced") || (c.classList.add("fdp-chart--enhanced"), u.push(c));
      }), u.length && t && t(u);
    };
    if (r > 0) {
      if (typeof window > "u") return;
      const l = window.setTimeout(i, r);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, r]), /* @__PURE__ */ n.jsx("div", { ref: s, children: a });
}, Dh = ({
  label: e,
  value: t,
  unit: r,
  delta: a,
  status: s = "neutral",
  variant: o = "default",
  subtitle: i,
  metadata: l,
  trendData: u,
  loading: c = !1,
  error: d,
  valueFormatter: f,
  className: m,
  style: w,
  id: C,
  announceDelta: y = !0,
  visual: p
}) => {
  const g = Y.useId(), F = C || g, A = `${F}-label`, D = `${F}-value`, $ = `${F}-delta`, T = typeof t == "number" && !Number.isNaN(t), L = c ? "—" : d ? "" : T ? f ? f(t) : t.toLocaleString() : t;
  let j, v = "", N = "";
  if (a && !c && !d) {
    j = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const S = Math.abs(a.value), h = j === "up" ? `+${S}` : j === "down" ? `-${S}` : "0", P = a.isPercent ? "%" : "";
    if (v = `${h}${P}`, a.ariaLabel)
      N = a.ariaLabel;
    else {
      const k = a.invert ? j === "down" : j === "up";
      N = `${j === "neutral" ? "no change" : j === "up" ? "up" : "down"} ${S}${P}${j === "neutral" ? "" : k ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: gr(
        "fdp-metric-card",
        o && `fdp-metric-card--${o}`,
        s && `fdp-metric-card--status-${s}`,
        c && "fdp-metric-card--loading",
        d && "fdp-metric-card--error",
        m
      ),
      style: w,
      role: "group",
      "aria-labelledby": A,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ n.jsx("h3", { id: A, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ n.jsx("div", { id: D, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : d ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: d }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__number", children: L }),
              r && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__unit", children: r })
            ] }) }),
            i && !c && !d && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !d && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ n.jsxs(
            "div",
            {
              id: $,
              "aria-label": N,
              className: gr(
                "fdp-metric-card__delta",
                j && `fdp-metric-card__delta--${j}`
              ),
              children: [
                /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-value", children: v }),
                a.period && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          u && u.length > 0 && !c && !d && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        p && !d && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: p }),
        y && a && !a.ariaLabel && !c && !d && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: N })
      ] })
    }
  );
};
let Ka = null;
try {
  Ka = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const Re = (e, t) => {
  if (!Ka) return t;
  const r = e.split(".");
  let a = Ka;
  for (const o of r) {
    if (a == null) break;
    a = a[o];
  }
  const s = a;
  return s == null ? t : typeof s == "string" || typeof s == "number" ? String(s) : s.$value != null ? String(s.$value) : s.value != null ? String(s.value) : t;
}, Zr = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: Re("gradient.stop.start-opacity", "0.12"),
  mid: Re("gradient.stop.mid-opacity", "0.03"),
  end: Re("gradient.stop.end-opacity", "0"),
  triStart: Re(
    "gradient.stop.triangle-start-opacity",
    Re("gradient.stop.start-opacity", "0.12")
  ),
  triMid: Re(
    "gradient.stop.triangle-mid-opacity",
    Re("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: Re(
    "gradient.stop.triangle-end-opacity",
    Re("gradient.stop.end-opacity", "0")
  )
});
var _t = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(_t || {}), je = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(je || {}), Te = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(Te || {}), it = /* @__PURE__ */ ((e) => (e.SinglePoint = "single_point", e.TwoSigma = "two_sigma", e.Shift = "shift", e.Trend = "trend", e))(it || {});
const Ps = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
], Oo = Ps.reduce(
  (e, t, r) => (e[t] = r + 1, e),
  {}
), $h = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, Ih = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, vr = Ps.reduce(
  (e, t, r) => (e[t] = {
    id: t,
    rank: r + 1,
    label: $h[t],
    category: Ih[t],
    participatesInRanking: !0
  }, e),
  {}
);
Ps.map(
  (e) => vr[e]
);
var Ze = /* @__PURE__ */ ((e) => (e.Up = "up", e.Down = "down", e))(Ze || {}), ct = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(ct || {}), Ke = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(Ke || {}), ht = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(ht || {}), tr = /* @__PURE__ */ ((e) => (e.Legacy = "legacy", e.DirectionalFirst = "directional_first", e))(tr || {}), tl = /* @__PURE__ */ ((e) => (e.None = "none", e.SqlRankingV26a = "sql_ranking_v2_6a", e))(tl || {}), xt = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(xt || {}), Fs = /* @__PURE__ */ ((e) => (e.Sql = "sql", e.Conflict = "conflict", e))(Fs || {}), Ln = /* @__PURE__ */ ((e) => (e.ImprovementValueBeforePruning = "improvementValueBeforePruning", e.ConcernValueBeforePruning = "concernValueBeforePruning", e))(Ln || {});
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
    case Te.Improvement:
      return "Improvement signal";
    case Te.Concern:
      return "Concern signal";
    case Te.Neither:
      return "Common cause variation";
    case Te.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function nl(e) {
  switch (e) {
    case Ke.Pass:
      return "Target met";
    case Ke.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Mh(e, t, r) {
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
function rl(e) {
  return e ? bt[e]?.token ?? bt.neither.token : bt.neither.token;
}
function Lh(e) {
  return e ? bt[e]?.hex ?? bt.neither.hex : bt.neither.hex;
}
var Yt = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(Yt || {});
const Ph = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, Fh = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var Ve = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Ve || {}), De = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(De || {}), ut = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(ut || {}), _e = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(_e || {});
const Ah = (e) => {
  const t = e.replace("#", ""), r = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, s = parseInt(t.slice(4, 6), 16) / 255, o = [r, a, s].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2] < 0.55 ? "#ffffff" : "#212b32";
}, ta = {
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
Object.values(ta).forEach((e) => {
  e.text || (e.text = Ah(e.hex));
});
const As = (e) => ta[e], na = (e) => ta[e].judgement || "none", zo = {
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
function Eh(e, t) {
  let r;
  return e === "common_cause" ? r = zo.common : r = zo.special[t === "lower" ? "lower" : "higher"], r.map((a) => ({ ...a }));
}
var rt = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(rt || {}), en = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(en || {}), zn = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(zn || {});
const al = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === je.Up ? Ve.HigherIsBetter : i.improvementDirection === je.Down ? Ve.LowerIsBetter : Ve.ContextDependent : i.polarity && (l = i.polarity);
    let u;
    switch (i.variationIcon) {
      case Te.Improvement:
        u = _e.SpecialCauseImproving;
        break;
      case Te.Concern:
        u = _e.SpecialCauseDeteriorating;
        break;
      case Te.Neither:
        u = i.specialCauseNeutral ? _e.SpecialCauseNoJudgement : _e.CommonCause;
        break;
      case Te.Suppressed:
      default:
        u = _e.SpecialCauseNoJudgement;
        break;
    }
    let c = i.trend;
    return c || (u === _e.SpecialCauseImproving ? c = l === Ve.LowerIsBetter ? De.Lower : De.Higher : u === _e.SpecialCauseDeteriorating ? c = l === Ve.LowerIsBetter ? De.Higher : De.Lower : u === _e.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? c = De.Higher : i.lowSideSignal && !i.highSideSignal ? c = De.Lower : c = De.Higher : c = De.Higher), { state: u, direction: c, polarity: l ?? Ve.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === _e.SpecialCauseImproving || i.state === _e.SpecialCauseDeteriorating) && i.polarity && (i.state === _e.SpecialCauseImproving ? l = i.polarity === Ve.LowerIsBetter ? De.Lower : De.Higher : l = i.polarity === Ve.LowerIsBetter ? De.Higher : De.Lower), l || (i.state === _e.SpecialCauseImproving ? l = De.Higher : i.state === _e.SpecialCauseDeteriorating ? l = De.Lower : l = De.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? Ve.ContextDependent
    };
  }
  const r = e;
  t();
  const s = {
    [ut.Improving]: _e.SpecialCauseImproving,
    [ut.Deteriorating]: _e.SpecialCauseDeteriorating,
    [ut.No_Judgement]: _e.SpecialCauseNoJudgement,
    [ut.None]: _e.CommonCause
  }[r.judgement];
  let o;
  return r.judgement === ut.Improving ? o = r.polarity === Ve.LowerIsBetter ? De.Lower : De.Higher : r.judgement === ut.Deteriorating ? o = r.polarity === Ve.LowerIsBetter ? De.Higher : De.Lower : o = r.trend ?? De.Higher, { state: s, direction: o, polarity: r.polarity };
};
function sl(e, t) {
  const { state: r, direction: a, polarity: s } = al(e), o = na(r), i = a === De.Higher ? "above" : "below", l = a === De.Higher ? "upwards" : "downwards", u = (() => {
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
        case ut.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case ut.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case ut.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case ut.None:
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
const La = (e, t, r, a, s, o) => /* @__PURE__ */ n.jsxs("defs", { children: [
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
] }), ra = ({
  data: e,
  size: t = 44,
  ariaLabel: r,
  showLetter: a = !0,
  dropShadow: s = !0,
  gradientWash: o = !1,
  variant: i = en.Classic,
  runLength: l = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: u = zn.Polarity,
  letterOverride: c,
  ...d
}) => {
  const f = nr(), m = nr(), {
    start: w,
    mid: C,
    end: y,
    triStart: p,
    triMid: g,
    triEnd: F
  } = Zr(), { state: A, direction: D, polarity: $ } = $e(
    () => al(e),
    [e]
  ), T = $e(() => As(A), [A]), L = $e(() => na(A), [A]), j = L === ut.Improving || L === ut.Deteriorating;
  let v = "";
  a && j && (u === zn.Polarity ? $ === Ve.HigherIsBetter ? v = "H" : $ === Ve.LowerIsBetter ? v = "L" : v = "" : v = D === De.Higher ? "H" : "L"), c !== void 0 && (v = c);
  const N = A !== _e.CommonCause, S = A === _e.SpecialCauseNoJudgement, h = Re("common-cause", "#A6A6A6"), P = N ? T.hex : h, k = $e(
    () => Eh(A, D),
    [A, D]
  ), b = r || `${T.label}${v ? D === De.Higher ? " – Higher" : " – Lower" : ""}`, _ = sl(
    e
  );
  if (i === en.TriangleWithRun) {
    const H = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], W = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let se = null;
    A === _e.SpecialCauseImproving || A === _e.SpecialCauseDeteriorating ? se = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (D === De.Higher ? H : W).map((B) => B.join(",")).join(" "),
        fill: T.hex,
        stroke: T.hex,
        strokeWidth: 6,
        transform: D === De.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : A === _e.SpecialCauseNoJudgement && (se = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: D === De.Higher ? H.map((B) => B.join(",")).join(" ") : W.map((B) => B.join(",")).join(" "),
        fill: T.hex,
        stroke: T.hex,
        strokeWidth: 6,
        transform: D === De.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const z = Math.max(0, Math.min(5, Math.floor(l || 0))), pe = A === _e.CommonCause ? 160 : D === De.Higher ? 220 : 70, we = 10, le = 26, fe = 150 - 2 * le, ne = A === _e.SpecialCauseImproving ? Re("improvement", "#00B0F0") : A === _e.SpecialCauseDeteriorating ? Re("concern", "#E46C0A") : h, Z = Array.from({ length: 5 }).map((B, G) => {
      const X = (A === _e.SpecialCauseImproving || A === _e.SpecialCauseDeteriorating) && G >= 5 - z ? ne : h;
      return /* @__PURE__ */ n.jsx(
        "circle",
        {
          cx: fe + G * le,
          cy: pe,
          r: we,
          fill: X,
          stroke: X,
          strokeWidth: 1
        },
        G
      );
    }), ue = La(
      T.hex,
      f,
      m,
      s,
      o,
      [
        { offset: "0%", opacity: p },
        { offset: "75%", opacity: g },
        { offset: "100%", opacity: F }
      ]
    ), x = A === _e.CommonCause || D === De.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": b,
        "aria-description": _,
        ...d,
        children: [
          ue,
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
              stroke: T.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsxs("g", { transform: x, children: [
            se,
            v && /* @__PURE__ */ n.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: D === De.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: v
              }
            ),
            Z
          ] })
        ]
      }
    );
  }
  if (i === en.Triangle) {
    const H = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], W = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], se = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let z = null;
    A === _e.SpecialCauseImproving || A === _e.SpecialCauseDeteriorating ? z = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (D === De.Higher ? H : W).map((we) => we.join(",")).join(" "),
        fill: T.hex,
        stroke: T.hex,
        strokeWidth: 8,
        transform: D === De.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : A === _e.SpecialCauseNoJudgement ? z = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: D === De.Higher ? H.map((we) => we.join(",")).join(" ") : W.map((we) => we.join(",")).join(" "),
        fill: T.hex,
        stroke: T.hex,
        strokeWidth: 8,
        transform: D === De.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : A === _e.CommonCause && (z = /* @__PURE__ */ n.jsx(
      "line",
      {
        x1: se[0][0],
        y1: se[0][1],
        x2: se[1][0],
        y2: se[1][1],
        stroke: T.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const pe = La(
      T.hex,
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
        "aria-description": _,
        ...d,
        children: [
          pe,
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
          v && (A === _e.SpecialCauseImproving || A === _e.SpecialCauseDeteriorating) && /* @__PURE__ */ n.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: D === De.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: v
            }
          )
        ]
      }
    );
  }
  const M = La(
    T.hex,
    f,
    m,
    s,
    o,
    [
      { offset: "0%", opacity: w },
      { offset: "65%", opacity: C },
      { offset: "100%", opacity: y }
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
      "aria-description": _,
      ...d,
      children: [
        M,
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
            stroke: T.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        v && /* @__PURE__ */ n.jsx(
          "text",
          {
            fill: T.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ n.jsx("tspan", { x: "120", y: D === De.Lower ? "340" : "155", children: v })
          }
        ),
        S ? /* @__PURE__ */ n.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: T.hex,
            ...D === De.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          k.length === 5 && /* @__PURE__ */ n.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: h,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${k.map((re) => `${re.cx} ${re.cy}`).join(" L ")}`
            }
          ),
          k.map((re, V) => {
            const H = V >= k.length - 2 && N ? P : h, W = H;
            return /* @__PURE__ */ n.jsx(
              "circle",
              {
                stroke: W,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: H,
                cx: re.cx,
                cy: re.cy,
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
ra.displayName = "SPCVariationIcon";
const Rh = {
  xs: { height: 24, pointR: 2, stroke: 1 },
  sm: { height: 32, pointR: 3, stroke: 1 },
  md: { height: 44, pointR: 4, stroke: 1 }
};
function Bh(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function Hh(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const r = t.reduce((i, l) => i + l.value, 0) / t.length, a = [...e].reverse().findIndex((i) => i.value != null), s = a >= 0 ? e.length - 1 - a : null, o = s != null ? e[s].value : null;
  return { mean: r, latestValue: o, latestIndex: s };
}
function Oh(e) {
  switch (e) {
    case _e.SpecialCauseImproving:
      return Re("improvement", "#00B0F0");
    case _e.SpecialCauseDeteriorating:
      return Re("concern", "#E46C0A");
    case _e.SpecialCauseNoJudgement:
      return Re("no-judgement", "#490092");
    case _e.CommonCause:
      return Re("common-cause", "#A6A6A6");
    default:
      return Re("common-cause", "#A6A6A6");
  }
}
const ol = ({
  data: e,
  windowSize: t,
  minPointsForSignals: r = 13,
  showMean: a = !0,
  showLimits: s = !0,
  showLimitBand: o = !0,
  showInnerBands: i = !1,
  showLatestMarker: l = !0,
  showStateGlyph: u = !0,
  variationState: c,
  autoClassify: d = !1,
  metricImprovement: f,
  gradientWash: m = !1,
  size: w = "sm",
  ariaLabel: C,
  className: y,
  onPointClick: p,
  onClassification: g,
  maxPoints: F,
  thinningStrategy: A = "stride",
  colorPointsBySignal: D = !0,
  centerLine: $,
  controlLimits: T,
  sigmaBands: L,
  pointSignals: j,
  pointNeutralSpecialCause: v
}) => {
  const N = f, S = $e(
    () => Bh(e, t),
    [e, t]
  ), h = $e(() => Hh(S), [S]), P = Rh[w], k = Math.max(S.length * 6, 60), b = P.height, _ = 4, M = 2, re = $e(() => (e?.length ?? 0) - (S?.length ?? 0), [e?.length, S?.length]), R = S.filter((E) => E.value != null).map((E) => E.value), H = $ ?? h.mean, W = $e(() => {
    if (H == null) return null;
    const E = [];
    if (L?.upperOne != null && E.push(Math.abs(L.upperOne - H)), L?.lowerOne != null && E.push(Math.abs(H - L.lowerOne)), E.length) return E.reduce((q, I) => q + I, 0) / E.length;
    const Q = [];
    return T?.upper != null && Q.push(Math.abs(T.upper - H) / 3), T?.lower != null && Q.push(Math.abs(H - T.lower) / 3), Q.length ? Q.reduce((q, I) => q + I, 0) / Q.length : null;
  }, [L?.upperOne, L?.lowerOne, T?.upper, T?.lower, H]), se = $e(() => {
    if (W != null || !R.length || H == null || R.length < 2) return null;
    const E = [];
    for (let q = 1; q < R.length; q++) {
      const I = R[q - 1], K = R[q];
      I != null && K != null && E.push(Math.abs(K - I));
    }
    return E.length ? E.reduce((q, I) => q + I, 0) / E.length / 1.128 : null;
  }, [W, R.join(","), H]), z = W ?? se, pe = $e(() => {
    if (!s) return null;
    if (T) return T;
    if (H == null || z == null) return null;
    const E = 3 * z;
    return { lower: H - E, upper: H + E };
  }, [s, H, z, T?.lower, T?.upper]), we = $e(() => {
    if (c)
      return {
        state: c,
        firedRules: [],
        mean: h.mean,
        stdDev: z
      };
    if (!d || !z || z === 0 || H == null || h.latestValue == null)
      return {
        state: _e.CommonCause,
        firedRules: [],
        mean: h.mean,
        stdDev: z
      };
    const E = [], Q = h.latestValue, q = T?.upper ?? (z != null && H != null ? H + 3 * z : null), I = T?.lower ?? (z != null && H != null ? H - 3 * z : null);
    q != null && I != null && (Q > q || Q < I) && E.push("point-beyond-3sigma");
    const K = R.slice(-8);
    if (K.length === 8) {
      const te = K.every((ie) => ie > H), de = K.every((ie) => ie < H);
      (te || de) && E.push("eight-point-run");
    }
    const oe = R.slice(-5);
    if (oe.length === 5) {
      const te = oe.every((Ce, ge, Ie) => ge === 0 || Ce >= Ie[ge - 1]), de = oe.every((Ce, ge, Ie) => ge === 0 || Ce <= Ie[ge - 1]), ie = L?.upperOne ?? (z != null && H != null ? H + z : null), be = L?.lowerOne ?? (z != null && H != null ? H - z : null);
      te && ie != null && oe[oe.length - 1] > ie && E.push("five-point-trend"), de && be != null && oe[oe.length - 1] < be && E.push("five-point-trend");
    }
    const U = R.slice(-3);
    if (U.length === 3 && (z != null || L)) {
      const te = L?.upperTwo ?? (H != null && z != null ? H + 2 * z : null), de = L?.lowerTwo ?? (H != null && z != null ? H - 2 * z : null);
      if (te != null && de != null) {
        const ie = U.filter((Ce) => Ce > te).length, be = U.filter((Ce) => Ce < de).length;
        ie >= 2 && E.push("two-of-three-near-limit"), be >= 2 && E.push("two-of-three-near-limit");
      }
    }
    let O = _e.CommonCause;
    if (E.includes("point-beyond-3sigma") ? O = Q > H ? _e.SpecialCauseImproving : _e.SpecialCauseDeteriorating : (E.includes("eight-point-run") || E.includes("five-point-trend") || E.includes("two-of-three-near-limit")) && (O = R[R.length - 1] > H ? _e.SpecialCauseImproving : _e.SpecialCauseDeteriorating), d && !c && E.length === 1 && E[0] === "point-beyond-3sigma") {
      const te = R.slice(-9, -1);
      if (te.length >= 5) {
        const de = te.filter((be) => be > H).length, ie = te.filter((be) => be < H).length;
        de > 0 && ie > 0 && (O = _e.SpecialCauseNoJudgement);
      }
    }
    return {
      state: O,
      firedRules: E,
      mean: H,
      stdDev: z,
      side: h.latestValue != null && H != null ? h.latestValue > H ? "above" : "below" : void 0
    };
  }, [
    c,
    d,
    z,
    H,
    h.latestValue,
    R.join(",")
  ]);
  ft.useEffect(() => {
    d && !c && g && g(we);
  }, [we, d, c, g]);
  const le = we.state, fe = $e(() => c === _e.SpecialCauseNoJudgement || le === _e.SpecialCauseNoJudgement, [c, le]), ne = Oh(le), Z = (E) => {
    const Q = S.filter((oe) => oe.value != null);
    if (!Q.length) return b / 2;
    const q = Q.map((oe) => oe.value);
    pe && (pe.lower != null && q.push(pe.lower), pe.upper != null && q.push(pe.upper));
    const I = Math.min(...q), K = Math.max(...q);
    return I === K ? b / 2 : b - (E - I) / (K - I) * (b - M * 2) - M;
  }, ue = $e(() => {
    if (!F || S.length <= F)
      return S.map((U, O) => O);
    if (A === "stride") {
      const U = Math.max(2, F), O = (S.length - 1) / (U - 1), te = /* @__PURE__ */ new Set();
      for (let de = 0; de < U; de++) te.add(Math.round(de * O));
      return te.add(S.length - 1), Array.from(te).sort((de, ie) => de - ie);
    }
    const E = S.map((U, O) => ({ i: O, v: U.value }));
    function Q(U, O, te) {
      const de = U.i, ie = U.v ?? 0, be = O.i, Ce = O.v ?? 0, ge = te.i, Ie = te.v ?? 0, He = Math.abs((Ie - Ce) * de - (ge - be) * ie + ge * Ce - Ie * be), Pe = Math.hypot(Ie - Ce, ge - be);
      return Pe === 0 ? 0 : He / Pe;
    }
    function q(U, O) {
      if (U.length <= 2) return U;
      let te = -1, de = -1;
      for (let ie = 1; ie < U.length - 1; ie++) {
        const be = Q(U[ie], U[0], U[U.length - 1]);
        be > te && (te = be, de = ie);
      }
      if (te > O) {
        const ie = q(U.slice(0, de + 1), O), be = q(U.slice(de), O);
        return [...ie.slice(0, -1), ...be];
      }
      return [U[0], U[U.length - 1]];
    }
    let I = 0.1, K = E;
    for (let U = 0; U < 8 && (K = q(E, I), !(K.length <= F)); U++)
      I *= 1.6;
    const oe = new Set(K.map((U) => U.i));
    return oe.add(0), oe.add(S.length - 1), Array.from(oe).sort((U, O) => U - O);
  }, [S, F, A]), x = $e(
    () => ue.map((E) => S[E]),
    [ue, S]
  ), B = $e(() => {
    let E = "";
    return x.forEach((Q, q) => {
      if (Q.value == null) return;
      const I = Z(Q.value), K = q / (x.length - 1 || 1) * (k - _ * 2) + _;
      E += E ? ` L ${K} ${I}` : `M ${K} ${I}`;
    }), E;
  }, [x, k]), G = h.latestIndex ?? -1, ee = pe, X = Zr(), ae = $e(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [S.length, m]
  ), me = S.length >= (r || 0), Se = C || "SPC sparkline", ce = (() => {
    if (!le) return;
    const E = N === je.Up ? Ve.HigherIsBetter : N === je.Down ? Ve.LowerIsBetter : Ve.ContextDependent, Q = {
      variationIcon: le === _e.SpecialCauseImproving ? "improvement" : le === _e.SpecialCauseDeteriorating ? "concern" : le === _e.SpecialCauseNoJudgement ? "none" : "neither",
      trend: N === je.Up ? De.Higher : De.Lower,
      polarity: E
    };
    try {
      return sl(Q);
    } catch {
      return;
    }
  })(), J = $e(() => {
    if (!me) return 10;
    const E = [...S].reverse().filter((q) => q.value != null).slice(0, 6).map((q) => Z(q.value));
    return E.length && E.reduce((q, I) => q + I, 0) / E.length < b / 2 ? b : 10;
  }, [S, me, b]);
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": Se,
      "aria-description": ce,
      width: k,
      height: b,
      className: y,
      viewBox: `0 0 ${k} ${b}`,
      children: [
        m && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs("linearGradient", { id: ae, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ n.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: ne,
                stopOpacity: Number(X.start)
              }
            ),
            /* @__PURE__ */ n.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: ne,
                stopOpacity: Number(X.mid)
              }
            ),
            /* @__PURE__ */ n.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: ne,
                stopOpacity: Number(X.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: k,
              height: b,
              fill: `url(#${ae})`
            }
          )
        ] }),
        ee && ee.lower != null && ee.upper != null && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          o && /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                Z(ee.upper),
                Z(ee.lower)
              ),
              width: k,
              height: Math.abs(
                Z(ee.upper) - Z(ee.lower)
              ),
              fill: ne,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ n.jsx(
            "line",
            {
              x1: 0,
              x2: k,
              y1: Z(ee.lower),
              y2: Z(ee.lower),
              stroke: ne,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ n.jsx(
            "line",
            {
              x1: 0,
              x2: k,
              y1: Z(ee.upper),
              y2: Z(ee.upper),
              stroke: ne,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          L && i && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            L.lowerTwo != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: k,
                y1: Z(L.lowerTwo),
                y2: Z(L.lowerTwo),
                stroke: ne,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            L.lowerOne != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: k,
                y1: Z(L.lowerOne),
                y2: Z(L.lowerOne),
                stroke: ne,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            L.upperOne != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: k,
                y1: Z(L.upperOne),
                y2: Z(L.upperOne),
                stroke: ne,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            L.upperTwo != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: k,
                y1: Z(L.upperTwo),
                y2: Z(L.upperTwo),
                stroke: ne,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        a && h.mean != null && /* @__PURE__ */ n.jsx(
          "line",
          {
            x1: 0,
            x2: k,
            y1: Z(h.mean),
            y2: Z(h.mean),
            stroke: Re("common-cause", "#A6A6A6"),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            d: B,
            fill: "none",
            stroke: Re("common-cause", "#A6A6A6"),
            strokeWidth: P.stroke,
            strokeLinecap: "round"
          }
        ),
        ue.map((E, Q) => {
          const q = S[E];
          if (!q || q.value == null) return null;
          const I = Z(q.value), K = Q / (x.length - 1 || 1) * (k - _ * 2) + _, U = (E === G && l ? P.pointR + 1 : P.pointR) - 0.5;
          let O = Re("common-cause", "#A6A6A6");
          if (D) {
            const te = j?.[re + E];
            if (fe)
              te === "improvement" || te === "concern" ? O = Re("no-judgement", "#490092") : te === "neither" ? O = v?.[re + E] ? Re("no-judgement", "#490092") : Re("common-cause", "#A6A6A6") : O = Re("common-cause", "#A6A6A6");
            else if (te === "improvement")
              O = Re("improvement", "#00B0F0");
            else if (te === "concern")
              O = Re("concern", "#E46C0A");
            else if (te === "suppressed")
              O = Re("no-judgement", "#490092");
            else if (H != null) {
              const de = q.value, ie = T?.upper ?? (z != null ? H + 3 * z : null), be = T?.lower ?? (z != null ? H - 3 * z : null);
              ie != null && de > ie ? O = fe ? Re("no-judgement", "#490092") : Re("improvement", "#00B0F0") : be != null && de < be ? O = fe ? Re("no-judgement", "#490092") : Re("concern", "#E46C0A") : O = Re("common-cause", "#A6A6A6");
            }
          }
          return /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: K,
              cy: I,
              r: U,
              fill: O,
              stroke: "none",
              strokeWidth: 0,
              onClick: p ? () => p(E, q) : void 0,
              style: p ? { cursor: "pointer" } : void 0,
              "data-index": E,
              "data-signal-colour": D ? O : void 0
            },
            E
          );
        }),
        u && me && le && le !== _e.CommonCause && N && /* @__PURE__ */ n.jsx(
          "text",
          {
            x: k - 4,
            y: J,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: ne,
            "data-glyph-pos": J < b / 2 ? "top" : "bottom",
            children: N === je.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
ol.displayName = "SPCSpark";
const ke = (e) => typeof e == "number" && Number.isFinite(e), zh = (e) => e.reduce((t, r) => t + r, 0), Ct = (e) => e.length ? zh(e) / e.length : NaN;
function il(e, t) {
  const r = new Array(e.length).fill(null);
  let a = null;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (!t[s] && ke(o)) {
      if (a !== null) {
        const i = e[a];
        r[s] = ke(i) ? Math.abs(o - i) : null;
      }
      a = s;
    }
  }
  return r;
}
function ll(e, t) {
  const r = e.filter((o) => ke(o));
  if (!r.length) return { mrMean: NaN, mrUcl: NaN };
  let a = Ct(r), s = 3.267 * a;
  if (t) {
    const o = r.filter((i) => i <= s);
    o.length && o.length !== r.length && (a = Ct(o), s = 3.267 * a);
  }
  return { mrMean: a, mrUcl: s };
}
function Wh(e, t) {
  if (!ke(e) || !ke(t))
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
const Uh = 0.2777, Gh = 3.6, Vh = (e) => ke(e) && e >= 0 ? Math.pow(e, Uh) : null, Kt = (e) => ke(e) && e >= 0 ? Math.pow(e, Gh) : null;
function Yh(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
const fn = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function qh(e) {
  if (!ke(e) || e < 0)
    return {
      cl: null,
      lcl: null,
      ucl: null,
      oneLow: null,
      oneHigh: null,
      twoLow: null,
      twoHigh: null
    };
  const t = 1 / (e + 1), r = (d) => Yh(d, t) - 1, a = r(0.5), s = Math.max(0, r(fn.three.low)), o = r(fn.three.high), i = Math.max(0, r(fn.one.low)), l = r(fn.one.high), u = Math.max(0, r(fn.two.low)), c = r(fn.two.high);
  return { cl: a, lcl: s, ucl: o, oneLow: i, oneHigh: l, twoLow: u, twoHigh: c };
}
function Xh(e, t, r) {
  const a = e.map((j) => ke(j) ? Vh(j) : null), s = il(a, t), { mrMean: o } = ll(s, !!r), i = a.filter((j, v) => !t[v] && ke(j)), l = i.length ? Ct(i) : NaN;
  if (!ke(l) || !ke(o))
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
  const u = 2.66, c = 2 / 3 * u, d = 1 / 3 * u, f = l + u * o, m = l - u * o, w = l + c * o, C = l - c * o, y = l + d * o, p = l - d * o, g = Kt(l), F = Kt(f), A = m <= 0 ? null : Kt(m), D = Kt(y), $ = p <= 0 ? null : Kt(p), T = Kt(w), L = C <= 0 ? null : Kt(C);
  return {
    center: g ?? null,
    upperProcessLimit: F ?? null,
    lowerProcessLimit: A ?? null,
    upperTwoSigma: T ?? null,
    lowerTwoSigma: L ?? null,
    upperOneSigma: D ?? null,
    lowerOneSigma: $ ?? null,
    mr: s,
    mrMean: o,
    mrUcl: ke(o) ? 3.267 * o : null
  };
}
function Kh(e) {
  const {
    metricImprovement: t,
    capabilityMode: r,
    value: a,
    mean: s,
    upperProcessLimit: o,
    lowerProcessLimit: i,
    target: l
  } = e, u = (c) => typeof c == "number" && Number.isFinite(c);
  return !u(a) || s === null || !u(l) ? Ke.None : r && u(o) && u(i) ? t === je.Up ? u(i) && i > l ? Ke.Pass : u(o) && o < l ? Ke.Fail : Ke.None : t === je.Down ? u(o) && o < l ? Ke.Pass : u(i) && i > l ? Ke.Fail : Ke.None : Ke.None : t === je.Down ? a <= l ? Ke.Pass : Ke.Fail : t === je.Up ? a >= l ? Ke.Pass : Ke.Fail : Ke.None;
}
function Jh(e, t) {
  const {
    W: r,
    minGap: a,
    minDeltaSigma: s,
    scoreThreshold: o,
    isShiftUpAt: i,
    isShiftDownAt: l,
    isTrendUpAt: u,
    isTrendDownAt: c,
    isSingleUpAt: d,
    isSingleDownAt: f
  } = t, m = [];
  let w = 0;
  for (let C = 0; C < e.length; C++) {
    const y = e[C];
    C > 0 && e[C - 1].partitionId !== y.partitionId && (w = C);
    const p = C > 0 && i(C - 1), g = C > 0 && l(C - 1), F = C > 0 && u(C - 1), A = C > 0 && c(C - 1), D = C > 0 && d(C - 1), $ = C > 0 && f(C - 1), T = i(C), L = l(C), j = u(C), v = c(C), N = d(C), S = f(C), h = [];
    T && !p && h.push({ reason: ht.Shift, index: C }), L && !g && h.push({ reason: ht.Shift, index: C }), j && !F && h.push({ reason: ht.Trend, index: C }), v && !A && h.push({ reason: ht.Trend, index: C }), N && !D && h.push({ reason: ht.Point, index: C }), S && !$ && h.push({ reason: ht.Point, index: C });
    for (const P of h) {
      if (P.index - w < a) continue;
      const k = Math.max(0, P.index - r), b = P.index - 1;
      if (b - k + 1 < r) continue;
      const _ = P.index, M = P.index + r - 1;
      if (M >= e.length) continue;
      const re = e.slice(k, b + 1).map((x) => x.value).filter(
        (x) => typeof x == "number" && Number.isFinite(x)
      ), V = e.slice(_, M + 1).map((x) => x.value).filter(
        (x) => typeof x == "number" && Number.isFinite(x)
      );
      if (re.length < r || V.length < r) continue;
      const R = e[P.index];
      let H = null;
      if (typeof R.upperProcessLimit == "number" && typeof R.mean == "number") {
        const x = R.upperProcessLimit - R.mean;
        x > 0 && (H = x / 3);
      }
      if (!H || H <= 0) continue;
      const W = Ct(re), se = Ct(V), z = se - W;
      if (Math.abs(z) < s * H) continue;
      const we = e.slice(_, M + 1).filter(
        (x) => x.variationIcon === Te.Concern
      ).length;
      if (we > 1) continue;
      const le = (x) => {
        const B = Ct(x);
        return x.length ? x.reduce((G, ee) => G + (ee - B) * (ee - B), 0) / x.length : 0;
      }, fe = le(re), ne = le(V);
      let Z = P.reason === ht.Shift ? 90 : P.reason === ht.Trend ? 70 : 60;
      if (ne < fe && (Z += 10), Z -= we * 15, Z < o) continue;
      const ue = m.find((x) => x.index === P.index);
      if (ue) {
        const x = (B) => B === ht.Shift ? 3 : B === ht.Trend ? 2 : 1;
        (x(P.reason) > x(ue.reason) || Z > ue.score) && (ue.reason = P.reason, ue.score = Z, ue.deltaMean = z, ue.oldMean = W, ue.newMean = se, ue.window = [_, M]);
      } else
        m.push({
          index: P.index,
          reason: P.reason,
          score: Z,
          deltaMean: z,
          oldMean: W,
          newMean: se,
          window: [_, M]
        });
    }
  }
  return m.sort((C, y) => C.index - y.index), m;
}
function Pa() {
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
var Vt = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Vt || {}), cl = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(cl || {}), ul = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(ul || {});
function Zh(e) {
  const t = [], r = [];
  e.specialCauseSinglePointUp && t.push(it.SinglePoint), e.specialCauseSinglePointDown && r.push(it.SinglePoint), e.specialCauseTwoOfThreeUp && t.push(it.TwoSigma), e.specialCauseTwoOfThreeDown && r.push(it.TwoSigma), e.specialCauseShiftUp && t.push(it.Shift), e.specialCauseShiftDown && r.push(it.Shift), e.specialCauseTrendUp && t.push(it.Trend), e.specialCauseTrendDown && r.push(it.Trend);
  const a = t.reduce((o, i) => Math.max(o, vr[i].rank), 0), s = r.reduce((o, i) => Math.max(o, vr[i].rank), 0);
  return { upRules: t, downRules: r, upMax: a, downMax: s, hasUp: t.length > 0, hasDown: r.length > 0 };
}
function Qh(e) {
  const t = [];
  let r = [];
  for (const a of e)
    a.baseline && r.length && (t.push(r), r = []), r.push(a);
  return r.length && t.push(r), t;
}
function em(e, t, r) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const s = e.map((d, f) => ({ idx: f, value: d.value })).filter((d) => ke(d.value));
  if (s.length < a * 2) return;
  const o = r === je.Up || r === je.Neither, i = r === je.Down;
  function l(d, f) {
    const m = s.slice(d, f).map((w) => w.value);
    return m.length ? Ct(m) : NaN;
  }
  let u = null;
  if (s.length > 1) {
    const d = [];
    for (let m = 1; m < s.length; m++) d.push(Math.abs(s[m].value - s[m - 1].value));
    const f = Ct(d);
    ke(f) && f > 0 && (u = f * (2.66 / 3));
  }
  if (!u || u <= 0) return;
  const c = t.autoRecalculateDeltaSigma ?? 0.5;
  for (let d = a; d <= s.length - a; d++) {
    const f = d - a, m = l(f, d), w = l(d, d + a);
    if (!ke(m) || !ke(w)) continue;
    const y = (w - m) / u;
    if (!(o ? y >= c : i ? -y >= c : Math.abs(y) >= c)) continue;
    const g = s.slice(d, d + a).map((D) => D.value);
    if (!(o ? g.every((D) => D > m) : i ? g.every((D) => D < m) : g.every((D) => o ? D > m : D < m))) continue;
    const A = s[d].idx;
    e[A].baseline || (e[A].baseline = !0);
    return;
  }
}
function dl(e) {
  if (!e) return {};
  const t = e, r = e, a = r.rules ?? {}, s = r.precedence ?? {}, o = r.thresholds ?? {}, i = r.warnings ?? {}, l = r.rareEvent ?? {}, u = r.capability ?? {}, c = r.grace ?? {}, d = r.baselineSuggest ?? {}, f = r.autoRecalc ?? {}, m = c.emergingEnabled ?? r.emergingGraceEnabled ?? t.emergingGraceEnabled ?? t.emergingDirectionGrace, w = a.collapseWeakerClusterRules ?? r.collapseWeakerClusterRules ?? t.collapseWeakerClusterRules ?? t.collapseClusterRules;
  if (Pa()) {
    if (t.emergingDirectionGrace !== void 0)
      throw new Error("[spc][phase4] emergingDirectionGrace is no longer supported. Use settings.grace.emergingEnabled.");
    if (t.collapseClusterRules !== void 0)
      throw new Error("[spc][phase4] collapseClusterRules is no longer supported. Use settings.rules.collapseWeakerClusterRules.");
  }
  const C = globalThis;
  !Pa() && t.emergingDirectionGrace !== void 0 && r.emergingGraceEnabled === void 0 && c.emergingEnabled === void 0 && !C.__spc_warn_emergingDirectionGrace && (C.__spc_warn_emergingDirectionGrace = !0, console.warn("[spc] emergingDirectionGrace is deprecated; use grace.emergingEnabled")), !Pa() && t.collapseClusterRules !== void 0 && a.collapseWeakerClusterRules === void 0 && r.collapseWeakerClusterRules === void 0 && !C.__spc_warn_collapseClusterRules && (C.__spc_warn_collapseClusterRules = !0, console.warn("[spc] collapseClusterRules is deprecated; use rules.collapseWeakerClusterRules"));
  const y = (F) => {
    const A = {};
    for (const D of Object.keys(F)) {
      const $ = F[D];
      $ !== void 0 && (A[D] = $);
    }
    return A;
  }, p = y({
    // Rare event / MR
    excludeMovingRangeOutliers: l.excludeMovingRangeOutliers ?? t.excludeMovingRangeOutliers,
    // Rules
    specialCauseShiftPoints: a.shiftPoints ?? t.specialCauseShiftPoints,
    specialCauseTrendPoints: a.trendPoints ?? t.specialCauseTrendPoints,
    enableFourOfFiveRule: a.fourOfFiveEnabled ?? t.enableFourOfFiveRule,
    enableFifteenInInnerThirdRule: a.fifteenInnerThirdEnabled ?? t.enableFifteenInInnerThirdRule,
    collapseWeakerClusterRules: w ?? t.collapseWeakerClusterRules,
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
    assuranceCapabilityMode: u.assuranceCapabilityMode ?? t.assuranceCapabilityMode,
    // Grace
    emergingGraceEnabled: m,
    emergingDirectionGrace: m,
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
  }), g = { ...p, ...y(t) };
  if (m !== void 0 && (g.emergingGraceEnabled = m, g.grace = { ...g.grace, emergingEnabled: m }), p.collapseWeakerClusterRules !== void 0) {
    const F = p.collapseWeakerClusterRules;
    g.collapseWeakerClusterRules = F, g.rules = { ...g.rules, collapseWeakerClusterRules: F };
  }
  return y(g);
}
function aa(e) {
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
    precedenceStrategy: tr.DirectionalFirst,
    emergingDirectionGrace: !1,
    rules: {},
    grace: {},
    ...o
  };
  if (!Array.isArray(a)) throw new Error("data must be an array of rows");
  const l = a.map((p, g) => ({
    rowId: g + 1,
    x: p.x,
    value: ke(p.value) ? p.value : null,
    ghost: !!p.ghost,
    baseline: !!p.baseline,
    target: ke(p.target) ? p.target : null
  }));
  if (o?.autoRecalculateAfterShift)
    try {
      em(l, o, r);
    } catch {
    }
  const u = Qh(l), c = [], d = [], m = l.filter(
    (p) => !p.ghost && ke(p.value)
  ).length >= (i.minimumPoints ?? 13);
  let w = 0;
  const C = {};
  for (const p of u) {
    w++;
    const g = p.map((h) => h.value), F = p.map((h) => h.ghost);
    let A = new Array(g.length).fill(null), D = NaN, $ = NaN, T = NaN, L = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      A = il(g, F);
      const h = g.filter(
        (k, b) => !F[b] && ke(k)
      );
      D = h.length ? Ct(h) : NaN;
      const P = ll(
        A,
        !!i.excludeMovingRangeOutliers
      );
      $ = P.mrMean, T = P.mrUcl, L = Wh(D, $);
    } else if (t === "T") {
      const h = Xh(
        g,
        F,
        !!i.excludeMovingRangeOutliers
      );
      A = h.mr, $ = h.mrMean ?? NaN, T = h.mrUcl ?? NaN, D = h.center ?? NaN, L = {
        upperProcessLimit: h.upperProcessLimit,
        lowerProcessLimit: h.lowerProcessLimit,
        upperTwoSigma: h.upperTwoSigma,
        lowerTwoSigma: h.lowerTwoSigma,
        upperOneSigma: h.upperOneSigma,
        lowerOneSigma: h.lowerOneSigma
      };
    } else if (t === "G") {
      const h = g.filter(
        (b, _) => !F[_] && ke(b)
      ), P = h.length ? Ct(h) : NaN, k = qh(P);
      D = k.cl ?? NaN, L = {
        upperProcessLimit: k.ucl,
        lowerProcessLimit: k.lcl,
        upperTwoSigma: k.twoHigh,
        lowerTwoSigma: k.twoLow,
        upperOneSigma: k.oneHigh,
        lowerOneSigma: k.oneLow
      }, A = new Array(g.length).fill(null), $ = NaN, T = NaN;
    } else
      d.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const j = p.map((h, P) => {
      const k = !h.ghost && ke(h.value) ? g.slice(0, P + 1).filter((re, V) => !F[V] && ke(re)).length : 0, b = m, _ = b ? L : {
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
        value: ke(h.value) ? h.value : null,
        ghost: h.ghost,
        partitionId: w,
        pointRank: k,
        mean: b && ke(D) ? D : null,
        mr: ke(A[P]) ? A[P] : null,
        mrMean: b && ke($) ? $ : null,
        mrUcl: b && ke(T) ? T : null,
        upperProcessLimit: ke(_.upperProcessLimit) ? _.upperProcessLimit : null,
        lowerProcessLimit: ke(_.lowerProcessLimit) ? _.lowerProcessLimit : null,
        upperTwoSigma: ke(_.upperTwoSigma) ? _.upperTwoSigma : null,
        lowerTwoSigma: ke(_.lowerTwoSigma) ? _.lowerTwoSigma : null,
        upperOneSigma: ke(_.upperOneSigma) ? _.upperOneSigma : null,
        lowerOneSigma: ke(_.lowerOneSigma) ? _.lowerOneSigma : null,
        target: ke(h.target) ? h.target : null,
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
        variationIcon: Te.Suppressed,
        assuranceIcon: Ke.None,
        upperBaseline: b && ke(D) ? D : null,
        lowerBaseline: b && ke(D) ? D : null,
        movingRangeHighPointValue: b && ke(T) ? T : null,
        ghostValue: h.ghost && ke(h.value) ? h.value : null,
        ghostFlag: !!h.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    C[w] = j.filter(
      (h) => !h.ghost && ke(h.value)
    ).length;
    const v = i.specialCauseShiftPoints ?? 6, N = i.specialCauseTrendPoints ?? 6, S = [];
    for (let h = 0; h < j.length; h++) {
      const P = j[h], k = P.value;
      if (!P.ghost && ke(k) && S.push(h), !(ke(P.mean) && ke(P.upperProcessLimit) && ke(P.lowerProcessLimit)) || P.ghost || !ke(k)) {
        c.push(P);
        continue;
      }
      P.specialCauseSinglePointUp = ke(P.upperProcessLimit) ? k > P.upperProcessLimit : !1, P.specialCauseSinglePointDown = ke(P.lowerProcessLimit) ? k < P.lowerProcessLimit : !1, c.push(P);
    }
    if (S.length) {
      const h = (b) => j[b];
      let P = [], k = [];
      for (const b of S) {
        const _ = h(b);
        if (!ke(_.mean) || !ke(_.value)) {
          P = [], k = [];
          continue;
        }
        if (_.value > _.mean ? (P.push(b), k = []) : _.value < _.mean ? (k.push(b), P = []) : (P = [], k = []), P.length >= v)
          for (const M of P) {
            const re = h(M);
            re.specialCauseShiftUp = !0;
          }
        if (k.length >= v)
          for (const M of k) {
            const re = h(M);
            re.specialCauseShiftDown = !0;
          }
      }
      for (let b = 0; b <= S.length - 3; b++) {
        const M = S.slice(b, b + 3).map(h);
        if (!M.every((le) => ke(le.mean) && ke(le.value))) continue;
        const re = M[0].mean, V = M.every((le) => le.value > re), R = M.every((le) => le.value < re);
        if (!V && !R) continue;
        const H = M[0].upperTwoSigma ?? 1 / 0, W = M[0].lowerTwoSigma ?? -1 / 0, se = M[0].upperProcessLimit ?? 1 / 0, z = M[0].lowerProcessLimit ?? -1 / 0, pe = M.filter((le) => le.value > H && le.value <= se), we = M.filter((le) => le.value < W && le.value >= z);
        if (V && pe.length >= 2)
          for (const le of pe)
            le.specialCauseTwoOfThreeUp = !0;
        if (R && we.length >= 2)
          for (const le of we)
            le.specialCauseTwoOfThreeDown = !0;
      }
      if (i.enableFourOfFiveRule)
        for (let b = 0; b <= S.length - 5; b++) {
          const M = S.slice(b, b + 5).map(h);
          if (!M.every((se) => ke(se.mean) && ke(se.value))) continue;
          const re = M[0].mean;
          if (!M.every((se) => se.value > re) && !M.every((se) => se.value < re)) continue;
          const V = M[0].upperOneSigma ?? 1 / 0, R = M[0].lowerOneSigma ?? -1 / 0, H = M.filter((se) => se.value > V), W = M.filter((se) => se.value < R);
          if (M.every((se) => se.value > re) && H.length >= 4)
            for (const se of H)
              se.specialCauseFourOfFiveUp = !0;
          if (M.every((se) => se.value < re) && W.length >= 4)
            for (const se of W)
              se.specialCauseFourOfFiveDown = !0;
        }
      for (let b = 0; b <= S.length - N; b++) {
        const _ = S.slice(b, b + N), M = _.map(h);
        if (!M.every((R) => ke(R.value))) continue;
        let re = !0, V = !0;
        for (let R = 1; R < M.length && (M[R].value > M[R - 1].value || (re = !1), M[R].value < M[R - 1].value || (V = !1), !(!re && !V)); R++)
          ;
        if (re) for (const R of _) {
          const H = h(R);
          H.specialCauseTrendUp = !0;
        }
        if (V) for (const R of _) {
          const H = h(R);
          H.specialCauseTrendDown = !0;
        }
      }
      if (i.enableFifteenInInnerThirdRule) {
        let b = [];
        for (const _ of S) {
          const M = h(_);
          if (!ke(M.value) || !ke(M.mean) || !ke(M.upperOneSigma) || !ke(M.lowerOneSigma)) {
            b = [];
            continue;
          }
          if (!(M.value < M.upperOneSigma && M.value > M.lowerOneSigma)) {
            b = [];
            continue;
          }
          if (b.push(_), b.length >= 15) {
            const V = b.map(h), R = V.some((W) => W.value > W.mean), H = V.some((W) => W.value < W.mean);
            if (R && H)
              for (const W of b) h(W).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition)) {
      const h = i.maximumPointsPartition;
      let P = 0;
      for (const k of c.filter((b) => b.partitionId === w))
        !k.ghost && ke(k.value) && P++, P > h && (k.mean = k.upperProcessLimit = k.lowerProcessLimit = null, k.upperTwoSigma = k.lowerTwoSigma = k.upperOneSigma = k.lowerOneSigma = null);
    }
  }
  for (const p of c) {
    if (p.ruleTags && p.ruleTags.length) continue;
    const g = [];
    p.specialCauseShiftUp && g.push(ct.ShiftHigh), p.specialCauseShiftDown && g.push(ct.ShiftLow), p.specialCauseTrendUp && g.push(ct.TrendIncreasing), p.specialCauseTrendDown && g.push(ct.TrendDecreasing), p.specialCauseSinglePointUp && g.push(ct.SinglePointAbove), p.specialCauseSinglePointDown && g.push(ct.SinglePointBelow), p.specialCauseTwoOfThreeUp && g.push(ct.TwoOfThreeAbove), p.specialCauseTwoOfThreeDown && g.push(ct.TwoOfThreeBelow), p.specialCauseFourOfFiveUp && g.push(ct.FourOfFiveAbove), p.specialCauseFourOfFiveDown && g.push(ct.FourOfFiveBelow), p.specialCauseFifteenInnerThird && g.push(ct.FifteenInnerThird), g.length && (p.ruleTags = g);
  }
  for (let p = 0; p < c.length; p++) {
    const g = c[p];
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
    }), g.ghost || !ke(g.value) || g.mean === null) {
      g.variationIcon = Te.Suppressed;
      continue;
    }
    const F = g.value > g.mean, A = g.value < g.mean;
    i.rules?.collapseWeakerClusterRules && (g.specialCauseTwoOfThreeUp && g.specialCauseFourOfFiveUp && (g.specialCauseTwoOfThreeUp = !1), g.specialCauseTwoOfThreeDown && g.specialCauseFourOfFiveDown && (g.specialCauseTwoOfThreeDown = !1));
    const D = g.specialCauseTrendUp && F, $ = g.specialCauseTrendDown && A, T = g.specialCauseSinglePointUp || g.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && g.specialCauseFourOfFiveUp || g.specialCauseShiftUp || D, L = g.specialCauseSinglePointDown || g.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && g.specialCauseFourOfFiveDown || g.specialCauseShiftDown || $;
    let j = !1;
    if (i.precedenceStrategy === tr.DirectionalFirst && (i.grace?.emergingEnabled || i.emergingGraceEnabled || i.emergingDirectionGrace)) {
      const N = i.specialCauseTrendPoints || 6;
      if (N > 1 && !(g.specialCauseTrendUp || g.specialCauseTrendDown)) {
        const S = N - 1, h = [];
        for (let P = p; P >= 0 && h.length < S; P--) {
          const k = c[P];
          !k.ghost && ke(k.value) && k.mean !== null && h.unshift(k);
        }
        if (h.length === S) {
          let P = !0;
          for (let k = 1; k < h.length && P; k++)
            r === je.Up ? h[k].value > h[k - 1].value || (P = !1) : r === je.Down && h[k].value < h[k - 1].value || (P = !1);
          j = P;
        }
      }
    }
    if (i.precedenceStrategy === tr.DirectionalFirst) {
      const S = r === je.Up ? T : r === je.Down ? L : !1, h = r === je.Up ? L : r === je.Down ? T : !1;
      S && !h ? g.variationIcon = Te.Improvement : h && !S ? g.variationIcon = j ? Te.Neither : Te.Concern : S && h ? g.variationIcon = j || g.specialCauseTrendUp || g.specialCauseTrendDown ? Te.Improvement : Te.Neither : g.variationIcon = Te.Neither;
    } else
      r === je.Up ? g.variationIcon = T ? Te.Improvement : L ? Te.Concern : Te.Neither : r === je.Down ? g.variationIcon = L ? Te.Improvement : T ? Te.Concern : Te.Neither : g.variationIcon = Te.Neither;
    const v = T || L;
    if (g.specialCauseImprovementValue = v && g.variationIcon === Te.Improvement ? g.value : null, g.specialCauseConcernValue = v && g.variationIcon === Te.Concern ? g.value : null, g.specialCauseNeitherValue = v && g.variationIcon === Te.Neither ? g.value : null, i.conflictPrecedenceMode === tl.SqlRankingV26a && g.specialCauseImprovementValue !== null && g.specialCauseConcernValue !== null) {
      const N = [];
      g.specialCauseSinglePointUp && N.push({ id: it.SinglePoint, rank: 1, side: Ze.Up }), g.specialCauseSinglePointDown && N.push({ id: it.SinglePoint, rank: 1, side: Ze.Down }), g.specialCauseTwoOfThreeUp && N.push({ id: it.TwoSigma, rank: 2, side: Ze.Up }), g.specialCauseTwoOfThreeDown && N.push({ id: it.TwoSigma, rank: 2, side: Ze.Down }), g.specialCauseShiftUp && N.push({ id: it.Shift, rank: 3, side: Ze.Up }), g.specialCauseShiftDown && N.push({ id: it.Shift, rank: 3, side: Ze.Down }), g.specialCauseTrendUp && N.push({ id: it.Trend, rank: 4, side: Ze.Up }), g.specialCauseTrendDown && N.push({ id: it.Trend, rank: 4, side: Ze.Down });
      const S = N.filter((V) => V.side === Ze.Up).reduce((V, R) => Math.max(V, R.rank), 0), h = N.filter((V) => V.side === Ze.Down).reduce((V, R) => Math.max(V, R.rank), 0);
      let P;
      S > h ? P = xt.Upwards : h > S ? P = xt.Downwards : P = xt.Same;
      const k = g.specialCauseImprovementValue, b = g.specialCauseConcernValue;
      P === xt.Upwards ? r === je.Up ? g.specialCauseConcernValue = null : r === je.Down && (g.specialCauseImprovementValue = null) : P === xt.Downwards ? r === je.Up ? g.specialCauseImprovementValue = null : r === je.Down && (g.specialCauseConcernValue = null) : g.variationIcon === Te.Improvement ? g.specialCauseConcernValue = null : g.variationIcon === Te.Concern ? g.specialCauseImprovementValue = null : g.specialCauseConcernValue = null, g.specialCauseImprovementValue !== null && g.specialCauseConcernValue === null ? g.variationIcon = Te.Improvement : g.specialCauseConcernValue !== null && g.specialCauseImprovementValue === null ? g.variationIcon = Te.Concern : g.specialCauseImprovementValue === null && g.specialCauseConcernValue === null && (g.variationIcon = Te.Neither);
      const _ = g.specialCauseImprovementValue !== null ? Ze.Up : g.specialCauseConcernValue !== null ? Ze.Down : void 0, M = _ === Ze.Up ? S : _ === Ze.Down ? h : Math.max(S, h), re = N.find((V) => V.rank === M && (!_ || V.side === _));
      g.conflictPrimeDirection = P, g.conflictResolved = !0, g.conflictResolvedRank = M || void 0, re && (g.conflictResolvedByRuleId = re.id), g.pruningMode = Fs.Conflict, g.originalSpecialCauseImprovementValue = k, g.originalSpecialCauseConcernValue = b;
    }
    {
      const N = l[g.rowId - 1], S = Kh({
        metricImprovement: r,
        capabilityMode: i.assuranceCapabilityMode,
        value: g.value,
        mean: g.mean,
        upperProcessLimit: g.upperProcessLimit,
        lowerProcessLimit: g.lowerProcessLimit,
        target: ke(N?.target) ? N.target : null
      });
      g.assuranceIcon = S;
    }
  }
  if ((i.minimumPointsWarning ?? !1) && !m) {
    const p = l.filter(
      (g) => !g.ghost && ke(g.value)
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
      p.variationIcon === Te.Improvement && (p.specialCauseSinglePointUp || p.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && p.specialCauseFourOfFiveUp || p.specialCauseShiftUp || p.specialCauseTrendUp) && (p.specialCauseSinglePointDown || p.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && p.specialCauseFourOfFiveDown || p.specialCauseShiftDown || p.specialCauseTrendDown) && d.push({
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
      !F.ghost && ke(F.value) && g++, g > p && (F.mean = F.upperProcessLimit = F.lowerProcessLimit = null, F.upperTwoSigma = F.lowerTwoSigma = F.upperOneSigma = F.lowerOneSigma = null);
  }
  if (i.nullValueWarning && (t === _t.XmR || t === _t.G)) {
    const p = l.filter(
      (g) => !g.ghost && (g.value === null || g.value === void 0 || !ke(g.value))
    ).length;
    p && d.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${p} null/missing value(s) excluded from calculations.`,
      context: { nullCount: p }
    });
  }
  if (i.targetSuppressedWarning && (t === _t.T || t === _t.G) && l.some((g) => ke(g.target)) && d.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), i.ghostOnRareEventWarning && (t === _t.T || t === _t.G)) {
    const p = l.filter((g) => g.ghost).length;
    p && d.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${p} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: p }
    });
  }
  if (i.partitionSizeWarnings && Object.entries(C).forEach(([p, g]) => {
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
  let y;
  if (i.baselineSuggest) {
    const p = i.baselineSuggestStabilityPoints, g = i.baselineSuggestMinGap, F = i.baselineSuggestMinDeltaSigma, A = i.baselineSuggestScoreThreshold;
    y = Jh(
      c.map(($) => ({
        value: $.value,
        partitionId: $.partitionId,
        variationIcon: $.variationIcon,
        mean: $.mean,
        upperProcessLimit: $.upperProcessLimit
      })),
      {
        W: p,
        minGap: g,
        minDeltaSigma: F,
        scoreThreshold: A,
        isShiftUpAt: ($) => !!c[$].specialCauseShiftUp,
        isShiftDownAt: ($) => !!c[$].specialCauseShiftDown,
        isTrendUpAt: ($) => !!c[$].specialCauseTrendUp,
        isTrendDownAt: ($) => !!c[$].specialCauseTrendDown,
        isSingleUpAt: ($) => !!c[$].specialCauseSinglePointUp,
        isSingleDownAt: ($) => !!c[$].specialCauseSinglePointDown
      }
    ).map(($) => ({
      index: $.index,
      reason: $.reason,
      score: $.score,
      deltaMean: $.deltaMean,
      oldMean: $.oldMean,
      newMean: $.newMean,
      window: $.window
    }));
  }
  return { rows: c, warnings: d, ...y ? { suggestedBaselines: y } : {} };
}
function tm(e) {
  const {
    values: t,
    x: r,
    chartType: a = _t.XmR,
    metricImprovement: s = je.Neither,
    showLimits: o = !0,
    showLimitBand: i = !1,
    showInnerBands: l = !1,
    showMean: u = !1,
    autoClassify: c = !0
  } = e, d = Y.useMemo(() => {
    const $ = [];
    for (let T = 0; T < t.length; T++)
      $.push({ x: r?.[T], value: t[T] });
    return $;
  }, [t, r?.length]), f = Y.useMemo(() => {
    try {
      return aa({
        chartType: a,
        metricImprovement: s,
        data: d.map(($, T) => ({ x: $.x ?? T, value: $.value })),
        settings: {}
      });
    } catch {
      return null;
    }
  }, [d, a, s]), m = Y.useMemo(() => {
    const $ = f?.rows;
    if (!$ || $.length === 0) return null;
    for (let T = $.length - 1; T >= 0; T--) {
      const L = $[T];
      if (L && L.value != null && !L.ghost) return L;
    }
    return $[$.length - 1] ?? null;
  }, [f]), w = Y.useMemo(() => {
    const $ = f?.rowsRepresentative ?? f?.rows;
    if (!$ || !Array.isArray($) || $.length === 0) return null;
    const T = $[$.length - 1], L = T?.variationIcon, j = (T?.specialCauseNeitherValue ?? null) != null;
    return L === "improvement" ? _e.SpecialCauseImproving : L === "concern" ? _e.SpecialCauseDeteriorating : L === "suppressed" || L === "neither" && j ? _e.SpecialCauseNoJudgement : L === "neither" ? _e.CommonCause : null;
  }, [f]), C = Y.useMemo(() => m?.mean ?? null, [m]), y = Y.useMemo(() => {
    if (!m) return null;
    const $ = m?.lowerProcessLimit ?? null, T = m?.upperProcessLimit ?? null;
    return $ == null && T == null ? null : { lower: $, upper: T };
  }, [m]), p = Y.useMemo(() => m ? {
    upperOne: m?.upperOneSigma ?? null,
    upperTwo: m?.upperTwoSigma ?? null,
    lowerOne: m?.lowerOneSigma ?? null,
    lowerTwo: m?.lowerTwoSigma ?? null
  } : null, [m]), g = Y.useMemo(() => {
    const $ = f?.rows;
    if (!(!$ || $.length === 0))
      return $.map((T) => {
        const L = !!T?.specialCauseSinglePointUp || !!T?.specialCauseTwoOfThreeUp || !!T?.specialCauseFourOfFiveUp || !!T?.specialCauseShiftUp || !!T?.specialCauseTrendUp, j = !!T?.specialCauseSinglePointDown || !!T?.specialCauseTwoOfThreeDown || !!T?.specialCauseFourOfFiveDown || !!T?.specialCauseShiftDown || !!T?.specialCauseTrendDown;
        switch (s) {
          case je.Up:
            return L ? "improvement" : j ? "concern" : "neither";
          case je.Down:
            return j ? "improvement" : L ? "concern" : "neither";
          case je.Neither:
          default:
            return "neither";
        }
      });
  }, [f, s]), F = Y.useMemo(() => {
    const $ = f?.rows;
    if (!(!$ || $.length === 0))
      return $.map((T) => !!T?.specialCauseNeitherValue);
  }, [f]), A = Y.useMemo(() => {
    const $ = f?.rows;
    let T = null;
    if ($ && $.length > 0)
      for (let b = $.length - 1; b >= 0; b--) {
        const _ = $[b];
        if (!_ || _.value == null || _.ghost) continue;
        const M = _.variationIcon, re = (_?.specialCauseNeitherValue ?? null) != null;
        w === _e.SpecialCauseNoJudgement ? M === "improvement" || M === "concern" || M === "suppressed" || M === "neither" && re ? T = _e.SpecialCauseNoJudgement : T = _e.CommonCause : M === "improvement" ? T = _e.SpecialCauseImproving : M === "concern" ? T = _e.SpecialCauseDeteriorating : M === "suppressed" || M === "neither" && re ? T = _e.SpecialCauseNoJudgement : T = _e.CommonCause;
        break;
      }
    const L = T ?? _e.CommonCause, j = ta[L].hex, v = (b) => {
      const _ = b.replace("#", "");
      return [
        parseInt(_.slice(0, 2), 16),
        parseInt(_.slice(2, 4), 16),
        parseInt(_.slice(4, 6), 16)
      ];
    }, [N, S, h] = v(j), P = Zr();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${N}, ${S}, ${h}, ${P.start}) 0%, rgba(${N}, ${S}, ${h}, ${P.mid}) 50%, rgba(${N}, ${S}, ${h}, ${P.end}) 100%)`,
      "--fdp-metric-card-accent": j
    };
  }, [f, w]);
  return { sparkProps: Y.useMemo(() => ({
    data: d,
    showMean: u,
    showLimits: o,
    showLimitBand: i,
    showInnerBands: l,
    metricImprovement: s,
    centerLine: C,
    controlLimits: y,
    sigmaBands: p,
    pointSignals: g,
    pointNeutralSpecialCause: F,
    variationState: w ?? void 0,
    autoClassify: !!(c && !w),
    onClassification: () => {
    }
  }), [
    d,
    u,
    o,
    i,
    l,
    s,
    c,
    w,
    C,
    y?.lower,
    y?.upper,
    p?.upperOne,
    p?.upperTwo,
    p?.lowerOne,
    p?.lowerTwo,
    g?.length,
    F?.length
  ]), metricCardStyle: A, latestState: w };
}
const Bb = ({
  sparkData: e,
  direction: t = je.Neither,
  showMean: r = !1,
  showLimits: a = !0,
  showLimitBand: s = !1,
  showInnerBands: o = !1,
  autoClassify: i = !0,
  maxPoints: l,
  ...u
}) => {
  const c = tm({
    values: e.map((f) => f.value ?? null),
    metricImprovement: t,
    showLimits: a,
    showLimitBand: s,
    showInnerBands: o,
    showMean: r,
    autoClassify: i
  }), d = /* @__PURE__ */ n.jsx(ol, { ...c.sparkProps, maxPoints: l });
  return /* @__PURE__ */ n.jsx(Dh, { ...u, visual: d, style: c.metricCardStyle });
}, fl = ({
  engineRows: e,
  limits: t,
  pointDescriber: r,
  measureName: a,
  measureUnit: s,
  dateFormatter: o,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const u = Wt(), c = qt(), [d, f] = Y.useState(null), [m, w] = Y.useState(!1), C = Y.useRef(null);
  Y.useEffect(() => {
    if (u) {
      if (u.focused && (f(u.focused), C.current && (cancelAnimationFrame(C.current), C.current = null)), !u.focused && !m) {
        const ce = requestAnimationFrame(() => {
          f(null), C.current = null;
        });
        C.current = ce;
      }
      return () => {
        C.current && (cancelAnimationFrame(C.current), C.current = null);
      };
    }
  }, [u, u?.focused, m]);
  const y = u && (u.focused || (m ? d : null) || d), [p, g] = Y.useState(!1);
  Y.useEffect(() => {
    const ce = requestAnimationFrame(() => g(!0));
    return () => cancelAnimationFrame(ce);
  }, [y?.index]);
  const F = c?.innerWidth ?? 0, A = c?.innerHeight ?? 0, D = y ? Math.min(Math.max(y.clientX, 0), F) : 0, $ = y ? Math.min(Math.max(y.clientY, 0), A) : 0, L = c.ref?.current;
  if (!y)
    return null;
  const j = e?.[y.index], N = Qr(j).map((ce) => ({ id: ce, label: yn[ce].tooltip })), S = y.x instanceof Date ? y.x : new Date(y.x), h = o ? o(S) : S.toDateString(), P = s ? `${s}` : "", k = a || P ? `${y.y}${P ? "" + P : " "}${a ? " " + a : ""}` : `${y.y}`, b = ea(j?.variationIcon), _ = nl(j?.assuranceIcon), M = Mh(
    t.mean ?? null,
    t.sigma,
    y.y
  ), re = r ? r(y.index, { x: y.x, y: y.y }) : void 0, V = b || _ || M, R = j?.specialCauseTrendUp || j?.specialCauseTrendDown, H = j?.variationIcon === Te.Neither && R, W = l && H ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, se = N.length > 0, z = j?.primeDirection, pe = j?.primeRuleId, we = i && j?.variationIcon === Te.Neither && se, le = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", fe = rl(j?.variationIcon), ne = 6.2, ue = [
    re || "",
    `${h} • ${k}`
  ].filter(Boolean).reduce(
    (ce, J) => Math.max(ce, J.length * ne + 32),
    0
  ), x = 200, B = 440, G = Math.min(B, Math.max(x, ue));
  let ee = D + 12, ae = (c.margin?.top ?? 0) + $ + 16;
  ee + G > F && (ee = D - -60 - G), ee < 0 && (ee = Math.max(0, F - G));
  const me = y ? `spc-tooltip-${y.index}` : "spc-tooltip", Se = L ? xc(
    /* @__PURE__ */ n.jsx(
      "div",
      {
        id: me,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (p ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: ee,
          top: ae,
          width: G,
          maxWidth: B,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": p ? "false" : "true",
        "data-floating": !0,
        "data-placement": ee + G + 12 > F ? "left" : "right",
        onPointerEnter: () => {
          w(!0), C.current && (cancelAnimationFrame(C.current), C.current = null);
        },
        onPointerLeave: () => {
          if (w(!1), !u?.focused) {
            const ce = requestAnimationFrame(() => {
              f(null), C.current = null;
            });
            C.current = ce;
          }
        },
        children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: h })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: k })
          ] }),
          V && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: b?.toLowerCase().includes("concern") ? /* @__PURE__ */ n.jsx(
              Oe,
              {
                text: b,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : b?.toLowerCase().includes("improvement") ? /* @__PURE__ */ n.jsx(
              Oe,
              {
                text: b,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : we ? /* @__PURE__ */ n.jsx(
              Oe,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : b ? /* @__PURE__ */ n.jsx(
              Oe,
              {
                text: b,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          _ && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const ce = _.toLowerCase(), E = !(ce.includes("not met") || ce.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(ce);
              return /* @__PURE__ */ n.jsx(
                Oe,
                {
                  text: _,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${E ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${_}`
                }
              );
            })() })
          ] }),
          M && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ n.jsx(
              Oe,
              {
                text: (() => {
                  const ce = M.toLowerCase();
                  return ce.startsWith("within 1") ? "≤1σ" : ce.startsWith("1–2") ? "1–2σ" : ce.startsWith("2–3") ? "2–3σ" : ce.startsWith(">3") ? ">3σ" : M;
                })(),
                color: M.includes(">3") ? "orange" : M.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${M}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          W && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: W })
          ] }),
          se && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: N.map(({ id: ce, label: J }) => {
                  const E = String(ce), q = E === ct.TrendIncreasing || E === ct.TrendDecreasing ? "fdp-spc-tag--trend" : we ? "fdp-spc-tag--no-judgement" : b ? b.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : b.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ n.jsx(
                    Oe,
                    {
                      text: J,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${q}`,
                      "data-rule-id": E
                    },
                    E
                  );
                })
              }
            ),
            z && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ n.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const ce = we ? "fdp-spc-tag--no-judgement" : b ? b.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : b.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", J = `${z}${pe ? ` (${pe})` : ""}`;
                return /* @__PURE__ */ n.jsx(
                  Oe,
                  {
                    text: J,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${ce}`,
                    "aria-label": `Prime direction ${z}${pe ? ` via ${pe}` : ""}`
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
            cy: $,
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
            cy: $,
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
            cy: $,
            r: 2.5,
            fill: fe,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        Se
      ]
    }
  );
}, sa = ({
  status: e,
  size: t = 44,
  ariaLabel: r,
  dropShadow: a = !0,
  colourOverride: s,
  gradientWash: o = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...u
}) => {
  const c = nr(), d = nr(), { start: f, mid: m, end: w } = Zr(), C = s || Ph[e], y = (i || Fh[e]).slice(0, 2), p = r || `Assurance ${e}`;
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": p,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("defs", { children: [
          a && /* @__PURE__ */ n.jsxs("filter", { id: c, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ n.jsx("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ n.jsx("feOffset", { dx: "-1", dy: "15", result: "blur" }),
            /* @__PURE__ */ n.jsx("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }),
            /* @__PURE__ */ n.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ n.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          o && /* @__PURE__ */ n.jsxs("linearGradient", { id: d, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: C, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "65%", stopColor: C, stopOpacity: parseFloat(m) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(w) })
          ] })
        ] }),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: "none",
            fill: o ? `url(#${d})` : "#ffffff",
            ...a ? { filter: `url(#${c})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ n.jsx(
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
            children: /* @__PURE__ */ n.jsx("tspan", { x: 60, y: 184, children: y })
          }
        ),
        l && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          e === Yt.Fail ? /* @__PURE__ */ n.jsx(
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
              stroke: C,
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
sa.displayName = "SPCAssuranceIcon";
function nm(e, t) {
  const r = Zh(e), a = r.upMax, s = r.downMax, o = r.upRules.map((y) => ({ id: y, rank: Oo[y] })), i = r.downRules.map((y) => ({ id: y, rank: Oo[y] }));
  let l;
  a > s ? l = xt.Upwards : s > a ? l = xt.Downwards : l = xt.Same;
  const u = a > 0, c = s > 0, d = t === je.Up && u || t === je.Down && c ? e.value : null, f = t === je.Up && c || t === je.Down && u ? e.value : null;
  e.sqlOriginalImprovementValue = d, e.sqlOriginalConcernValue = f, d !== null && f !== null && (e.sqlPruned = !0, l === xt.Upwards ? t === je.Up || t === je.Down && (e.sqlOriginalImprovementValue = null) : l === xt.Downwards ? t === je.Up ? e.sqlOriginalImprovementValue = null : je.Down : d !== null ? e.sqlOriginalConcernValue = null : f !== null && (e.sqlOriginalImprovementValue = null)), e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = Te.Improvement : !e.sqlOriginalImprovementValue && e.sqlOriginalConcernValue ? e.variationIcon = Te.Concern : !e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = Te.Neither : e.variationIcon = Te.Improvement, e.primeDirection = l, e.primeRank = Math.max(a, s) || void 0, e.pruningMode = Fs.Sql;
  const C = ((e.variationIcon === Te.Concern ? t === je.Up ? Ze.Down : Ze.Up : t === je.Up ? Ze.Up : Ze.Down) === Ze.Up ? o : i).reduce(
    (y, p) => !y || p.rank > y.rank ? p : y,
    void 0
  );
  C && (e.primeRuleId = C.id);
}
function rm(e) {
  const {
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: s = {}
  } = e, o = aa({
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: {
      ...s
    }
  }), i = o.rows.map((l) => ({ ...l }));
  for (const l of i)
    nm(l, r);
  return { rows: i, warnings: o.warnings };
}
const am = ({
  engineRows: e,
  measureName: t,
  measureUnit: r,
  onSignalFocus: a
}) => {
  const s = Wt(), o = s?.focused ?? null, i = o?.index ?? null, l = typeof i == "number" && e ? e[i] : null, u = Y.useMemo(() => l ? Qr(l) : [], [l]), c = Y.useMemo(
    () => Array.from(
      new Set(u.map((y) => yn[y]?.narration).filter(Boolean))
    ),
    [u]
  ), d = l ? ea(l.variationIcon) : null, f = l ? nl(l.assuranceIcon) : null, m = u.length > 0, w = l ? l.variationIcon === Te.Neither && m : !1, C = Y.useRef(null);
  return Y.useEffect(() => {
    if (!a || !o || l == null) return;
    const y = `${o.seriesId}:${o.index}`;
    if (C.current !== y) {
      C.current = y;
      try {
        a({
          index: o.index,
          x: o.x,
          y: o.y,
          row: l,
          rules: u
        });
      } catch {
      }
    }
  }, [o?.seriesId, o?.index, o?.x, o?.y, l, u, a]), /* @__PURE__ */ n.jsxs(
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
          (d || w || f) && /* @__PURE__ */ n.jsx(
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
                    d?.toLowerCase().includes("concern") ? /* @__PURE__ */ n.jsx(
                      Oe,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : d?.toLowerCase().includes("improvement") ? /* @__PURE__ */ n.jsx(
                      Oe,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : w ? /* @__PURE__ */ n.jsx(
                      Oe,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : d ? /* @__PURE__ */ n.jsx(
                      Oe,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const y = f.toLowerCase(), g = !(y.includes("not met") || y.includes("not achieved")) && /^|\b(met|achieved)\b|$/.test(y);
                      return /* @__PURE__ */ n.jsx(
                        Oe,
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
                children: u.length === 0 ? /* @__PURE__ */ n.jsx("span", { children: " None" }) : u.map((y) => {
                  const p = String(y), F = p === ct.TrendIncreasing || p === ct.TrendDecreasing ? "fdp-spc-tag--trend" : w ? "fdp-spc-tag--no-judgement" : d ? d.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : d.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", A = yn[y]?.tooltip || p;
                  return /* @__PURE__ */ n.jsx(
                    Oe,
                    {
                      text: A,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${F}`,
                      "data-rule-id": p,
                      title: yn[y]?.tooltip
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
let sm = 0;
const om = ({
  data: e,
  ariaLabel: t = "SPC chart",
  height: r = 260,
  showZones: a = !0,
  showPoints: s = !0,
  announceFocus: o = !1,
  className: i,
  unit: l,
  highlightOutOfControl: u = !0,
  chartType: c = _t.XmR,
  metricImprovement: d = je.Neither,
  enableRules: f = !0,
  showIcons: m = !1,
  showEmbeddedIcon: w = !0,
  embeddedIconVariant: C = en.Classic,
  embeddedIconRunLength: y,
  targets: p,
  baselines: g,
  ghosts: F,
  settings: A,
  narrationContext: D,
  gradientSequences: $ = !1,
  sequenceTransition: T = "slope",
  processLineWidth: L = 2,
  showWarningsPanel: j = !1,
  warningsFilter: v,
  enableNeutralNoJudgement: N = !0,
  showTrendGatingExplanation: S = !0,
  trendVisualMode: h = "ungated",
  disableTrendSideGating: P,
  source: k,
  alwaysShowZeroY: b = !1,
  alwaysShowHundredY: _ = !1,
  percentScale: M = !1,
  useSqlCompatEngine: re = !1,
  showTrendStartMarkers: V = !1,
  showFirstFavourableCrossMarkers: R = !1,
  showTrendBridgeOverlay: H = !1,
  showSignalsInspector: W = !1,
  onSignalFocus: se
}) => {
  const z = Y.useCallback(
    (U) => String(U).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((te) => te.length ? te[0].toUpperCase() + te.slice(1) : te).join(" "),
    []
  ), pe = Y.useCallback(
    (U) => String(U).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((O) => O.length ? O[0].toUpperCase() + O.slice(1) : O).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && P !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const we = Y.useMemo(() => {
    const U = e.map((O, te) => ({
      x: O.x,
      value: O.y,
      target: p?.[te] ?? void 0,
      baseline: g?.[te] ?? void 0,
      ghost: F?.[te] ?? void 0
    }));
    try {
      const O = A ? { ...A } : void 0;
      return re ? rm({
        chartType: c,
        metricImprovement: d,
        data: U,
        settings: O
      }) : aa({ chartType: c, metricImprovement: d, data: U, settings: O });
    } catch {
      return null;
    }
  }, [
    e,
    p,
    g,
    F,
    c,
    d,
    A,
    re
  ]), le = we?.rows.slice().reverse().find((U) => U.mean != null), fe = le?.mean ?? null, ne = we?.warnings || [], Z = Y.useMemo(() => ne.length ? v ? ne.filter((U) => !(v.severities && U.severity && !v.severities.includes(U.severity) || v.categories && U.category && !v.categories.includes(U.category) || v.codes && !v.codes.includes(U.code))) : ne : [], [ne, v]), [ue, x] = Y.useState(""), B = Y.useRef("");
  Y.useEffect(() => {
    if (!j) {
      B.current !== "" && (B.current = "", x(""));
      return;
    }
    const U = Z.length;
    if (!U) {
      const ie = "Diagnostics: no warnings.";
      ie !== B.current && (B.current = ie, x(ie));
      return;
    }
    const O = {
      error: Z.filter(
        (ie) => ie.severity === Vt.Error
      ).length,
      warning: Z.filter(
        (ie) => ie.severity === Vt.Warning
      ).length,
      info: Z.filter(
        (ie) => ie.severity === Vt.Info
      ).length
    }, te = [];
    O.error && te.push(
      `${O.error} error${O.error === 1 ? "" : "s"}`
    ), O.warning && te.push(
      `${O.warning} warning${O.warning === 1 ? "" : "s"}`
    ), O.info && te.push(`${O.info} info`);
    const de = `Diagnostics updated: ${U} warning${U === 1 ? "" : "s"} (${te.join(", ")}).`;
    de !== B.current && (B.current = de, x(de));
  }, [j, Z]);
  const G = le?.upperProcessLimit ?? null, ee = le?.lowerProcessLimit ?? null, X = le?.upperOneSigma ?? null, ae = le?.lowerOneSigma ?? null, me = le?.upperTwoSigma ?? null, Se = le?.lowerTwoSigma ?? null, ce = fe != null && X != null ? Math.abs(X - fe) : 0, J = Y.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), E = Y.useMemo(() => {
    if (M) {
      const ie = e.map((ge) => ge.y), be = Math.max(100, ...ie), Ce = Math.min(0, ...ie);
      return [Ce < 0 ? Ce : 0, be > 100 ? be : 100];
    }
    const O = [...e.map((ie) => ie.y)];
    if ([fe, G, ee, X, ae, me, Se].forEach((ie) => {
      ie != null && O.push(ie);
    }), p && p.forEach((ie) => {
      typeof ie == "number" && !isNaN(ie) && O.push(ie);
    }), !O.length) return;
    let te = Math.min(...O), de = Math.max(...O);
    return b && (te = Math.min(0, te)), _ && (de = Math.max(100, de)), [te, de];
  }, [e, fe, G, ee, X, ae, me, Se, p, b, _, M]), Q = Y.useMemo(() => {
    if (!(l || D?.measureUnit) && e.length)
      return e.every((U) => U.y >= 0 && U.y <= 1) ? "%" : void 0;
  }, [l, D?.measureUnit, e]), q = l ?? D?.measureUnit ?? Q, I = Y.useMemo(() => q ? { ...D || {}, measureUnit: q } : D, [D, q]), K = Y.useMemo(() => {
    if (!we?.rows) return [];
    const U = [];
    for (let O = 1; O < we.rows.length; O++)
      we.rows[O].partitionId !== we.rows[O - 1].partitionId && U.push(O);
    return U;
  }, [we?.rows]), oe = Y.useMemo(() => {
    if (!w || !we?.rows?.length) return null;
    const U = we.rows, O = A?.minimumPoints ?? 13;
    if (U.filter(
      (qe) => !qe.ghost && qe.value != null
    ).length < O) return null;
    let de = -1;
    for (let qe = U.length - 1; qe >= 0; qe--) {
      const Qe = U[qe];
      if (Qe && Qe.value != null && !Qe.ghost) {
        de = qe;
        break;
      }
    }
    if (de === -1) return null;
    const ie = U[de], be = ie.variationIcon, Ce = be, ge = ie.assuranceIcon, Ie = Ce === Te.Neither && !!ie.specialCauseNeitherValue, He = ge === Ke.Pass ? Yt.Pass : ge === Ke.Fail ? Yt.Fail : Yt.Uncertain;
    let Pe;
    if (Ce === Te.Suppressed) {
      const qe = ie.specialCauseSinglePointUp, Qe = ie.specialCauseSinglePointDown;
      d === je.Up ? qe ? Pe = De.Higher : Qe && (Pe = De.Lower) : d === je.Down ? Qe ? Pe = De.Lower : qe && (Pe = De.Higher) : Pe = De.Higher;
    } else if (Ce === Te.Neither && Ie) {
      const qe = ie.specialCauseSinglePointUp || ie.specialCauseTwoOfThreeUp || ie.specialCauseFourOfFiveUp || ie.specialCauseShiftUp || ie.specialCauseTrendUp, Qe = ie.specialCauseSinglePointDown || ie.specialCauseTwoOfThreeDown || ie.specialCauseFourOfFiveDown || ie.specialCauseShiftDown || ie.specialCauseTrendDown;
      qe && !Qe ? Pe = De.Higher : Qe && !qe ? Pe = De.Lower : Pe = De.Higher;
    }
    let Ee;
    d === je.Up ? Ee = Ve.HigherIsBetter : d === je.Down ? Ee = Ve.LowerIsBetter : Ee = Ve.ContextDependent;
    const Ye = 80;
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        style: { display: "flex", gap: 12, marginRight: 16 },
        children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-icon",
              "data-variation": String(Ce),
              "data-trend-raw": Pe ? String(Pe) : "none",
              "data-trend": Pe ? String(Pe) : "none",
              "data-polarity": String(Ee ?? "unknown"),
              style: { width: Ye, height: Ye },
              children: /* @__PURE__ */ n.jsx(
                ra,
                {
                  dropShadow: !1,
                  data: {
                    variationIcon: be,
                    improvementDirection: d,
                    polarity: Ee,
                    specialCauseNeutral: Ie,
                    highSideSignal: ie.specialCauseSinglePointUp || ie.specialCauseTwoOfThreeUp || ie.specialCauseFourOfFiveUp || ie.specialCauseShiftUp || ie.specialCauseTrendUp,
                    lowSideSignal: ie.specialCauseSinglePointDown || ie.specialCauseTwoOfThreeDown || ie.specialCauseFourOfFiveDown || ie.specialCauseShiftDown || ie.specialCauseTrendDown,
                    ...Pe ? { trend: Pe } : {}
                  },
                  letterMode: d === je.Neither ? zn.Direction : zn.Polarity,
                  size: Ye,
                  variant: C,
                  runLength: C === en.TriangleWithRun ? y : void 0
                }
              )
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-assurance-icon",
              "data-assurance": String(ge),
              style: { width: Ye, height: Ye },
              children: /* @__PURE__ */ n.jsx(
                sa,
                {
                  status: He,
                  size: Ye,
                  dropShadow: !1
                }
              )
            }
          )
        ]
      },
      `embedded-icon-${de}`
    );
  }, [
    w,
    we?.rows,
    d,
    A?.minimumPoints,
    p,
    C,
    y
  ]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: i ? `fdp-spc-chart-wrapper ${i}` : "fdp-spc-chart-wrapper",
      children: [
        w && /* @__PURE__ */ n.jsx(
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
          zp,
          {
            height: r,
            ariaLabel: t,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ n.jsx(Wp, { series: J, yDomain: E, children: /* @__PURE__ */ n.jsx(
              im,
              {
                series: J,
                showPoints: s,
                announceFocus: o,
                limits: { mean: fe, ucl: G, lcl: ee, sigma: ce, onePos: X, oneNeg: ae, twoPos: me, twoNeg: Se },
                showZones: a,
                highlightOutOfControl: u,
                engineRows: we?.rows || null,
                enableRules: f,
                showIcons: m,
                narrationContext: I,
                gradientSequences: $,
                sequenceTransition: T,
                processLineWidth: L,
                effectiveUnit: q,
                partitionMarkers: K,
                ariaLabel: t,
                enableNeutralNoJudgement: N,
                showTrendGatingExplanation: S,
                trendVisualMode: h,
                metricImprovement: d,
                showTrendStartMarkers: V,
                showFirstFavourableCrossMarkers: R,
                showTrendBridgeOverlay: H,
                showSignalsInspector: W,
                onSignalFocus: se
              }
            ) })
          }
        ),
        k && /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof k == "string" ? /* @__PURE__ */ n.jsxs("small", { children: [
          "Source: ",
          k
        ] }) : k }),
        j && ue && /* @__PURE__ */ n.jsx(
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
            children: ue
          }
        ),
        j && Z.length > 0 && /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "fdp-spc-chart__warnings",
            role: "region",
            "aria-label": "SPC diagnostics",
            children: [
              /* @__PURE__ */ n.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
              /* @__PURE__ */ n.jsx(
                zt,
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
                  rows: Z.map((U) => {
                    let O = "grey";
                    return U.severity === Vt.Error ? O = "red" : U.severity === Vt.Warning ? O = "orange" : U.severity === Vt.Info && (O = "blue"), [
                      {
                        node: /* @__PURE__ */ n.jsx(
                          Oe,
                          {
                            color: O,
                            text: (U.severity ? String(U.severity) : "Info").replace(
                              /^[a-z]/,
                              (te) => te.toUpperCase()
                            )
                          }
                        ),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
                      },
                      {
                        node: U.category ? /* @__PURE__ */ n.jsx(
                          Oe,
                          {
                            color: "purple",
                            text: pe(U.category)
                          }
                        ) : /* @__PURE__ */ n.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
                      },
                      {
                        node: /* @__PURE__ */ n.jsx(Oe, { color: "grey", text: z(U.code) }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
                      },
                      {
                        node: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                          /* @__PURE__ */ n.jsx("span", { children: U.message }),
                          U.context && Object.keys(U.context).length > 0 && /* @__PURE__ */ n.jsxs(
                            "details",
                            {
                              className: "fdp-spc-chart__warning-context",
                              style: { marginTop: 4 },
                              children: [
                                /* @__PURE__ */ n.jsx("summary", { children: "context" }),
                                /* @__PURE__ */ n.jsx("pre", { children: JSON.stringify(U.context, null, 2) })
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
}, im = ({
  series: e,
  showPoints: t,
  announceFocus: r,
  limits: a,
  showZones: s,
  highlightOutOfControl: o,
  engineRows: i,
  enableRules: l,
  showIcons: u,
  narrationContext: c,
  gradientSequences: d,
  sequenceTransition: f,
  processLineWidth: m,
  effectiveUnit: w,
  partitionMarkers: C,
  ariaLabel: y,
  metricImprovement: p,
  enableNeutralNoJudgement: g = !0,
  showTrendGatingExplanation: F = !0,
  trendVisualMode: A = "ungated",
  showTrendStartMarkers: D = !1,
  showFirstFavourableCrossMarkers: $ = !1,
  showTrendBridgeOverlay: T = !1,
  showSignalsInspector: L = !1,
  onSignalFocus: j
}) => {
  const v = ln(), N = qt();
  if (!v) return null;
  const { xScale: S, yScale: h } = v, P = Y.useRef(
    "spc-seq-" + ++sm
  ), k = Wt(), b = e[0]?.data || [], _ = Y.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const x = /* @__PURE__ */ new Set();
    return b.forEach((B, G) => {
      (a.ucl != null && B.y > a.ucl || a.lcl != null && B.y < a.lcl) && x.add(G);
    }), x;
  }, [b, a.ucl, a.lcl]), M = Y.useMemo(() => {
    if (!i) return null;
    const x = {};
    return i.forEach((B, G) => {
      if (B.value == null || B.ghost) return;
      const ee = B.specialCauseSinglePointUp || B.specialCauseSinglePointDown || B.specialCauseTwoOfThreeUp || B.specialCauseTwoOfThreeDown || B.specialCauseFourOfFiveUp || B.specialCauseFourOfFiveDown || B.specialCauseShiftUp || B.specialCauseShiftDown || B.specialCauseTrendUp || B.specialCauseTrendDown;
      x[G] = {
        variation: B.variationIcon,
        assurance: B.assuranceIcon,
        special: ee,
        concern: B.variationIcon === Te.Concern,
        improvement: B.variationIcon === Te.Improvement,
        trendUp: !!B.specialCauseTrendUp,
        trendDown: !!B.specialCauseTrendDown
      };
    }), x;
  }, [i]), re = Y.useMemo(() => {
    if (!i || !i.length) return null;
    const x = [];
    for (const G of i)
      typeof G.target == "number" && !isNaN(G.target) && x.push(G.target);
    if (!x.length) return null;
    const B = x[0];
    return x.every((G) => G === B) ? B : null;
  }, [i]), V = Y.useMemo(() => {
    if (!M || !b.length)
      return [];
    const x = b.map((G, ee) => {
      const X = M?.[ee];
      if (X?.concern) return rt.Concern;
      if (X?.improvement) return rt.Improvement;
      if (X?.special && X.variation === Te.Neither) {
        if (A === "ungated" && p && p !== je.Neither) {
          if (X.trendUp)
            return p === je.Up ? rt.Improvement : rt.Concern;
          if (X.trendDown)
            return p === je.Down ? rt.Improvement : rt.Concern;
        }
        if (g) return rt.NoJudgement;
      }
      return rt.Common;
    });
    return y?.includes("Rule Clash") && console.log(
      `[${y}] Raw categories:`,
      x.map((G, ee) => `${ee}:${G}(${b[ee].y})`).join(", ")
    ), x;
  }, [M, b, y, g, A, p]), R = Y.useMemo(() => {
    if (!d || !V.length)
      return [];
    const x = [...V];
    let B = 0;
    for (; B < x.length; ) {
      const X = x[B];
      let ae = B + 1;
      for (; ae < x.length && x[ae] === X; ) ae++;
      ae - B === 1 && X !== rt.Common && (x[B] = rt.Common), B = ae;
    }
    const G = [];
    if (x.length) {
      let X = 0;
      for (let ae = 1; ae <= x.length; ae++)
        if (ae === x.length || x[ae] !== x[X]) {
          const me = x[X], Se = ae - 1, ce = Se - X + 1;
          (me === rt.Common || ce >= 2) && G.push({ start: X, end: Se, category: me }), X = ae;
        }
    }
    return y?.includes("Rule Clash") && console.log(
      `[${y}] Final sequences:`,
      G.map((X) => `${X.start}-${X.end}:${X.category}`).join(", ")
    ), G;
  }, [d, V, y]), H = Y.useMemo(
    () => b.map((x) => S(x.x instanceof Date ? x.x : new Date(x.x))),
    [b, S]
  ), W = S.range()[1], se = Y.useMemo(() => {
    if (!i || !i.length) return null;
    let x = Number.POSITIVE_INFINITY, B = Number.POSITIVE_INFINITY;
    if (i.forEach((ce, J) => {
      ce.specialCauseTrendUp && (x = Math.min(x, J)), ce.specialCauseTrendDown && (B = Math.min(B, J));
    }), !Number.isFinite(x) && !Number.isFinite(B)) return null;
    const G = x <= B, ee = G ? "up" : "down", X = G ? x : B, ae = (ce) => p == null || p === je.Neither || ce == null || typeof ce.value != "number" || typeof ce.mean != "number" ? !1 : ee === "up" ? p === je.Up ? ce.value > ce.mean : ce.value < ce.mean : p === je.Down ? ce.value < ce.mean : ce.value > ce.mean;
    let me = null;
    for (let ce = X; ce < i.length; ce++) {
      const J = i[ce];
      if (!(G ? !!J.specialCauseTrendUp : !!J.specialCauseTrendDown)) break;
      if (ae(J)) {
        me = ce;
        break;
      }
    }
    let Se = !1;
    if (me != null) {
      let ce = 0;
      for (let J = me; J < i.length; J++) {
        const E = i[J];
        if (!(G ? !!E.specialCauseTrendUp : !!E.specialCauseTrendDown)) break;
        ae(E) && ce++;
      }
      Se = ce >= 2;
    }
    return { direction: ee, detectedAt: X, firstFavourableCrossAt: me, persistedAcrossMean: Se };
  }, [i, p]), z = Y.useMemo(() => {
    if (!i || !i.length) return null;
    const x = (B) => {
      const G = [];
      let ee = null, X = null;
      for (let ae = 0; ae < i.length; ae++) {
        const me = i[ae], Se = typeof me[B] == "number" ? me[B] : null;
        if (Se == null || isNaN(Se)) {
          ee !== null && X != null && (G.push({
            x1: H[ee],
            x2: H[ae - 1],
            y: h(X)
          }), ee = null, X = null);
          continue;
        }
        if (ee === null) {
          ee = ae, X = Se;
          continue;
        }
        X != null && Math.abs(Se - X) <= 1e-9 || (X != null && G.push({
          x1: H[ee],
          x2: H[ae - 1],
          y: h(X)
        }), ee = ae, X = Se);
      }
      return ee !== null && X != null && G.push({
        x1: H[ee],
        x2: H[i.length - 1],
        y: h(X)
      }), G;
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
  }, [i, H, h]), pe = Y.useMemo(() => R.length ? /* @__PURE__ */ n.jsxs("defs", { children: [
    /* @__PURE__ */ n.jsxs("linearGradient", { id: `${P.current}-grad-common`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.28 }),
      /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.12 }),
      /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.045 })
    ] }),
    R.map((x, B) => {
      const G = `${P.current}-grad-${B}`;
      let ee, X = 0.28, ae = 0.12, me = 0.045;
      switch (x.category) {
        case rt.Concern:
          ee = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", X = 0.28, ae = 0.12, me = 0.045;
          break;
        case rt.Improvement:
          ee = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", X = 0.26, ae = 0.11, me = 0.045;
          break;
        case rt.NoJudgement:
          ee = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", X = 0.26, ae = 0.11, me = 0.045;
          break;
        default:
          ee = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ n.jsxs("linearGradient", { id: G, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: ee, stopOpacity: X }),
        /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: ee, stopOpacity: ae }),
        /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: ee, stopOpacity: me })
      ] }, G);
    })
  ] }) : null, [R]), we = Y.useMemo(() => {
    if (!R.length) return null;
    const [x] = h.domain(), B = h(x), G = R.map((ee, X) => {
      const { start: ae, end: me, category: Se } = ee;
      if (ae < 0 || me >= H.length || ae > me)
        return null;
      const ce = H[ae], J = H[me];
      let E = "";
      if (Se === rt.Common) {
        const Q = X > 0 ? R[X - 1] : null, q = X < R.length - 1 ? R[X + 1] : null, I = Q ? H[Q.end] : 0, K = Q ? h(b[Q.end].y) : B, oe = q ? H[q.start] : W, U = q ? h(b[q.start].y) : B;
        E = `M ${I} ${B}`, E += ` L ${I} ${K}`;
        for (let O = ae; O <= me; O++)
          E += ` L ${H[O]} ${h(b[O].y)}`;
        E += ` L ${oe} ${U}`, E += ` L ${oe} ${B} Z`;
      } else {
        const Q = X > 0 ? R[X - 1] : null, q = X < R.length - 1 ? R[X + 1] : null, I = Q && Q.category !== rt.Common, K = q && q.category !== rt.Common, oe = h(b[ae].y), U = h(b[me].y);
        let O = ce, te = J;
        if (I) {
          const de = H[Q.end], ie = h(b[Q.end].y), be = b[ae].y - b[Q.end].y;
          f === "slope" && be > 0 ? (E = `M ${de} ${ie} L ${ce} ${oe}`, O = de) : (E = `M ${ce} ${B} L ${ce} ${oe}`, O = ce);
        } else
          E = `M ${ce} ${B} L ${ce} ${oe}`;
        for (let de = ae + 1; de <= me; de++)
          E += ` L ${H[de]} ${h(b[de].y)}`;
        if (E += ` L ${J} ${U}`, K) {
          const de = H[q.start], ie = h(b[q.start].y), be = b[q.start].y - b[me].y;
          (f === "slope" && be <= 0 || f === "extend") && (E += ` L ${de} ${ie}`, te = de);
        }
        if (E += ` L ${te} ${B}`, E += ` L ${O} ${B} Z`, f === "neutral" && I) {
          const de = H[Q.end], ie = h(b[Q.end].y), be = /* @__PURE__ */ n.jsx(
            "path",
            {
              d: `M ${de} ${B} L ${de} ${ie} L ${ce} ${oe} L ${ce} ${B} Z`,
              fill: `url(#${P.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${X}`
          );
          return /* @__PURE__ */ n.jsxs("g", { children: [
            be,
            /* @__PURE__ */ n.jsx(
              "path",
              {
                d: E,
                fill: `url(#${P.current}-grad-${X})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${X}`
            )
          ] }, `seq-group-${X}`);
        }
      }
      return /* @__PURE__ */ n.jsx(
        "path",
        {
          d: E,
          fill: `url(#${P.current}-grad-${X})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${X}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ n.jsx("g", { className: "fdp-spc__sequence-bgs", children: G });
  }, [R, H, W, h, b, f]), le = Y.useMemo(() => {
    if (!c?.timeframe && b.length >= 2) {
      const x = b.map((me) => me.x instanceof Date ? me.x : new Date(me.x)), B = new Date(Math.min(...x.map((me) => me.getTime()))), G = new Date(Math.max(...x.map((me) => me.getTime()))), ee = Math.round((G.getTime() - B.getTime()) / 864e5) || 0;
      if (ee < 14)
        return `The chart shows a timeframe of ${ee + 1} days`;
      const X = Math.round(ee / 7);
      return X < 20 ? `The chart shows a timeframe of ${X} weeks` : `The chart shows a timeframe of ${(G.getFullYear() - B.getFullYear()) * 12 + (G.getMonth() - B.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, b]), fe = (x) => {
    const B = x % 10, G = x % 100;
    return B === 1 && G !== 11 ? `${x}st` : B === 2 && G !== 12 ? `${x}nd` : B === 3 && G !== 13 ? `${x}rd` : `${x}th`;
  }, ne = (x) => `${fe(x.getDate())} ${x.toLocaleString("en-GB", { month: "long" })}, ${x.getFullYear()}`, Z = Y.useCallback(
    ({
      index: x,
      x: B,
      y: G
    }) => {
      const ee = i?.[x], X = B instanceof Date ? B : new Date(B), ae = ne(X), me = c?.measureUnit ? ` ${c.measureUnit}` : "", Se = c?.measureName ? ` ${c.measureName}` : "";
      if (!ee)
        return `General summary is: ${le ? le + ". " : ""}Point ${x + 1}, ${ae}, ${G}${me}${Se}`;
      const ce = ea(ee.variationIcon) || "Variation", J = Qr(ee), E = J.length ? ` Rules: ${[...new Set(J.map((q) => yn[q].narration))].join("; ")}.` : " No special cause rules.", Q = [];
      return c?.measureName && Q.push(`Measure: ${c.measureName}.`), c?.datasetContext && Q.push(`${c.datasetContext}.`), c?.organisation && Q.push(`Organisation: ${c.organisation}.`), c?.additionalNote && Q.push(c.additionalNote), [
        "General summary is:",
        ...Q,
        `Point ${x + 1} recorded on `,
        ae + ",",
        `with a value of ${G} ${me}${Se}`,
        ce + ".",
        E
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, le]
  ), ue = Y.useCallback(
    (x, B) => i?.[x] ? Z({
      index: x,
      seriesId: "process",
      x: B.x instanceof Date ? B.x : new Date(B.x),
      y: B.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, Z]
  );
  return /* @__PURE__ */ n.jsx(Ch, { children: /* @__PURE__ */ n.jsxs(
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
            width: v.xScale.range()[1] + 56 + 16,
            height: v.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ n.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ n.jsx(Bo, { type: "x" }),
              /* @__PURE__ */ n.jsx(Bo, { type: "y" }),
              /* @__PURE__ */ n.jsx(Up, { axis: "y" }),
              pe,
              we,
              C.map((x, B) => {
                const G = b[x];
                if (!G) return null;
                const ee = S(G.x instanceof Date ? G.x : new Date(G.x));
                return /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    x1: ee,
                    x2: ee,
                    y1: 0,
                    y2: h.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${B}`
                );
              }),
              z?.mean.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                z.mean.map((x, B) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__cl", x1: x.x1, x2: x.x2, y1: x.y, y2: x.y }, `mean-${B}`)),
                z.mean.map((x, B) => {
                  if (B === z.mean.length - 1) return null;
                  const G = z.mean[B + 1];
                  if (!G || x.y === G.y) return null;
                  const X = Math.max(4, G.x1 - x.x2 || 0) * 0.5, ae = `M ${x.x2},${x.y} C ${x.x2 + X},${x.y} ${G.x1 - X},${G.y} ${G.x1},${G.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__cl fdp-spc__cl-join", d: ae, fill: "none" }, `mean-join-${B}`);
                })
              ] }) : null,
              re != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ n.jsx(n.Fragment, {}),
              z?.ucl.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--ucl", children: [
                z.ucl.map((x, B) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--ucl", x1: x.x1, x2: x.x2, y1: x.y, y2: x.y, strokeWidth: 2 }, `ucl-${B}`)),
                z.ucl.map((x, B) => {
                  if (B === z.ucl.length - 1) return null;
                  const G = z.ucl[B + 1];
                  if (!G || x.y === G.y) return null;
                  const X = Math.max(4, G.x1 - x.x2 || 0) * 0.5, ae = `M ${x.x2},${x.y} C ${x.x2 + X},${x.y} ${G.x1 - X},${G.y} ${G.x1},${G.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join", d: ae, fill: "none", strokeWidth: 2 }, `ucl-join-${B}`);
                })
              ] }) : null,
              z?.lcl.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--lcl", children: [
                z.lcl.map((x, B) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--lcl", x1: x.x1, x2: x.x2, y1: x.y, y2: x.y, strokeWidth: 2 }, `lcl-${B}`)),
                z.lcl.map((x, B) => {
                  if (B === z.lcl.length - 1) return null;
                  const G = z.lcl[B + 1];
                  if (!G || x.y === G.y) return null;
                  const X = Math.max(4, G.x1 - x.x2 || 0) * 0.5, ae = `M ${x.x2},${x.y} C ${x.x2 + X},${x.y} ${G.x1 - X},${G.y} ${G.x1},${G.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join", d: ae, fill: "none", strokeWidth: 2 }, `lcl-join-${B}`);
                })
              ] }) : null,
              re != null && /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: S.range()[1],
                    y1: h(re),
                    y2: h(re),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: S.range()[0] - 7,
                    y: h(re) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      re,
                      " ",
                      w || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              s && z && z.mean.length > 0 && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                z.onePos.map((x, B) => /* @__PURE__ */ n.jsx(
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
                  `onePos-${B}`
                )),
                z.oneNeg.map((x, B) => /* @__PURE__ */ n.jsx(
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
                  `oneNeg-${B}`
                )),
                z.twoPos.map((x, B) => /* @__PURE__ */ n.jsx(
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
                  `twoPos-${B}`
                )),
                z.twoNeg.map((x, B) => /* @__PURE__ */ n.jsx(
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
                  `twoNeg-${B}`
                ))
              ] }),
              se && (D || $ || T) && (() => {
                const x = se.detectedAt, B = se.firstFavourableCrossAt, G = b[x] ? S(b[x].x instanceof Date ? b[x].x : new Date(b[x].x)) : null, ee = b[x] ? h(b[x].y) : null, X = B != null && b[B] ? S(b[B].x instanceof Date ? b[B].x : new Date(b[B].x)) : null, ae = B != null && b[B] ? h(b[B].y) : null;
                return /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  T && G != null && ee != null && X != null && ae != null && /* @__PURE__ */ n.jsx("line", { x1: G, y1: ee, x2: X, y2: ae, stroke: "#888", strokeDasharray: "4 4", strokeWidth: 2, children: /* @__PURE__ */ n.jsx("title", { children: "Trend bridge: start to first favourable-side point" }) }),
                  D && G != null && ee != null && /* @__PURE__ */ n.jsx("circle", { cx: G, cy: ee, r: 6, fill: "white", stroke: "#555", strokeWidth: 2, children: /* @__PURE__ */ n.jsx("title", { children: "Trend start (run reached N)" }) }),
                  $ && X != null && ae != null && /* @__PURE__ */ n.jsx("circle", { cx: X, cy: ae, r: 5, fill: "#555", children: /* @__PURE__ */ n.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ n.jsx(
                jh,
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
              t && b.map((x, B) => {
                const G = S(x.x instanceof Date ? x.x : new Date(x.x)), ee = h(x.y), X = _.has(B), ae = M?.[B], me = A === "ungated" && !!ae?.special && ae?.variation === Te.Neither && p != null && p !== je.Neither, Se = me && (ae?.trendUp && p === je.Up || ae?.trendDown && p === je.Down), ce = me && (ae?.trendUp && p === je.Down || ae?.trendDown && p === je.Up), J = !!(ae?.improvement || Se), E = !!(ae?.concern || ce), Q = [
                  "fdp-spc__point",
                  X && o ? "fdp-spc__point--ooc" : null,
                  l && ae?.special && E ? "fdp-spc__point--sc-concern" : null,
                  l && ae?.special && J ? "fdp-spc__point--sc-improvement" : null,
                  // Neutral (context-dependent) metrics: show purple when special cause present but neither improvement nor concern
                  l && g && ae?.special && ae.variation === Te.Neither && !J && !E ? "fdp-spc__point--sc-no-judgement" : null,
                  ae?.assurance === Ke.Pass ? "fdp-spc__point--assurance-pass" : null,
                  ae?.assurance === Ke.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), q = `Point ${B + 1} value ${x.y}` + (ae?.special ? " special cause" : "") + (ae?.variation === Te.Improvement ? " improving" : ae?.variation === Te.Concern ? " concern" : ""), I = k?.focused?.index === B;
                return /* @__PURE__ */ n.jsx(
                  "circle",
                  {
                    cx: G,
                    cy: ee,
                    r: 5,
                    className: Q,
                    "data-variation": ae?.variation,
                    "data-assurance": ae?.assurance,
                    "aria-label": q,
                    ...I ? { "aria-describedby": `spc-tooltip-${B}` } : {}
                  },
                  B
                );
              }),
              u && l && M && b.map((x, B) => {
                const G = M[B];
                if (!G || !(G.concern || G.improvement)) return null;
                const ee = S(x.x instanceof Date ? x.x : new Date(x.x)), X = h(x.y);
                let ae = X - 10;
                const me = 12, Se = h.range()[0] - 4;
                ae < me && (ae = Math.min(X + 16, Se));
                const ce = S.range()[1], J = Math.min(Math.max(ee, 0), ce - 0);
                return /* @__PURE__ */ n.jsx(
                  "text",
                  {
                    x: J,
                    y: ae,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${G.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: G.concern ? "!" : "★"
                  },
                  `icon-${B}`
                );
              }),
              N && /* @__PURE__ */ n.jsx(
                lm,
                {
                  width: S.range()[1],
                  height: h.range()[0]
                }
              ),
              !L && /* @__PURE__ */ n.jsx(
                fl,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: ue,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (x) => ne(x),
                  enableNeutralNoJudgement: g,
                  showTrendGatingExplanation: F
                }
              )
            ] })
          }
        ),
        L && /* @__PURE__ */ n.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ n.jsx(
          am,
          {
            engineRows: i,
            measureName: c?.measureName,
            measureUnit: w || c?.measureUnit,
            onSignalFocus: j
          }
        ) }),
        r && /* @__PURE__ */ n.jsx(
          Nh,
          {
            format: (x) => Z({ ...x, x: x.x instanceof Date ? x.x : new Date(x.x) })
          }
        )
      ]
    }
  ) });
}, lm = ({
  width: e,
  height: t
}) => {
  const r = Wt();
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
}, cm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: Yt,
  Direction: De,
  MetricPolarity: Ve,
  SPCAssuranceIcon: sa,
  SPCVariationIcon: ra,
  VariationJudgement: ut,
  VariationState: _e,
  getVariationColour: As,
  getVariationTrend: na
}, Symbol.toStringTag, { value: "Module" })), Hb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: Ke,
  AssuranceResult: Yt,
  BaselineSuggestionReason: ht,
  ChartType: _t,
  Direction: De,
  Icons: cm,
  ImprovementDirection: je,
  MetricPolarity: Ve,
  RULE_METADATA: vr,
  SPCAssuranceIcon: sa,
  SPCChart: om,
  SPCTooltipOverlay: fl,
  SPCVariationIcon: ra,
  SpcEmbeddedIconVariant: en,
  SpcWarningCategory: cl,
  SpcWarningCode: ul,
  SpcWarningSeverity: Vt,
  VARIATION_COLOR_TOKENS: bt,
  VariationIcon: Te,
  VariationJudgement: ut,
  VariationState: _e,
  buildSpc: aa,
  extractRuleIds: Qr,
  getVariationColorHex: Lh,
  getVariationColorToken: rl,
  getVariationColour: As,
  getVariationTrend: na,
  normaliseSpcSettings: dl,
  ruleGlossary: yn,
  variationLabel: ea
}, Symbol.toStringTag, { value: "Module" })), um = "150ms", dm = "300ms", fm = "500ms", pm = "cubic-bezier(0.4, 0, 1, 1)", hm = "cubic-bezier(0, 0, 0.2, 1)", mm = "cubic-bezier(0.4, 0, 0.2, 1)", gm = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", xm = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", bm = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", ym = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", vm = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", wm = "1px", _m = "2px", Sm = "4px", km = "4px", Cm = "4px", jm = "2px", Nm = "1px", Tm = "0px", Dm = "4px", $m = "8px", Im = "12px", pl = "#d8dde0", hl = "#4c6272", ml = "#d8dde0", gl = "#aeb7bd", xl = "#d5281b", bl = "#005eb8", yl = "#ffffff", vl = "#212b32", wl = "#007f3b", _l = "#330072", Sl = "#7c2855", kl = "#d5281b", Cl = "#ffeb3b", jl = "#fff9c4", Nl = "#ffb81c", Tl = "#ed8b00", Dl = "#00a499", $l = "#ae2573", Il = "#4c6272", Ml = "#768692", Ll = "#aeb7bd", Pl = "#d8dde0", Fl = "#f0f4f5", Mm = "#212b32", Lm = "#4c6272", Pm = "#ffffff", Fm = "#212b32", Am = "#005eb8", Em = "#7c2855", Rm = "#003087", Bm = "#330072", Hm = "#ffeb3b", Om = "#212b32", zm = "#d8dde0", Wm = "#ffffff33", Um = "#d5281b", Gm = "#4c6272", Vm = "#ffffff", Ym = "#007f3b", qm = "#ffffff", Xm = "#006530", Km = "#004021", Jm = "#004021", Zm = "#00000000", Qm = "#ffffff", eg = "#005eb8", tg = "#005eb8", ng = "#d9e5f2", rg = "#c7daf0", ag = "#005eb8", sg = "#ffffff", og = "#212b32", ig = "#d9dde0", lg = "#b3bcc2", cg = "#b3bcc2", ug = "#d5281b", dg = "#aa2016", fg = "#6a140e", pg = "#6a140e", hg = "#005eb8", mg = "#004b93", gg = "#002f5c", xg = "#002f5c", bg = "8px", yg = "16px", vg = "12px", wg = "16px", _g = "4px", Sg = "40px", kg = "4px", Cg = "40px", jg = "12px", Ng = "16px", Tg = "32px", Dg = "16px", $g = "20px", Ig = "28px", Mg = "9px", Lg = "2px", Pg = "16px", Fg = "24px", Ag = "8px", Eg = "24px", Rg = "16px", Bg = "4px", Hg = "4px", Og = "4px", zg = "8px", Wg = "4px", Ug = "16px", Gg = "#007f3b", Vg = "#006530", Yg = "#004021", qg = "#d8dde0", Xg = "#ffffff", Kg = "#768692", Jg = "#00000000", Zg = "#ffeb3b", Qg = "#00000000", e0 = "#ffffff", t0 = "#d9e5f2", n0 = "#c7daf0", r0 = "#005eb8", a0 = "#005eb8", Al = "8px", El = "16px", Rl = "12px", Bl = "16px", s0 = "2px", o0 = "4px", i0 = "4px", l0 = "600", c0 = "#ffffff", u0 = "#d8dde0", d0 = "#aeb7bd", f0 = "#f0f4f5", p0 = "#212b32", h0 = "#212b32", m0 = "#005eb8", Hl = "16px", Ol = "32px", zl = "16px", g0 = "1px", x0 = "4px", b0 = "none", y0 = "0 2px 4px rgba(0, 0, 0, 0.1)", v0 = "#ffffff", w0 = "#ffffff", _0 = "#d8dde0", S0 = "#ffffff", k0 = "#4c6272", C0 = "#ffeb3b", j0 = "#d5281b", N0 = "#aeb7bd", T0 = "#212b32", D0 = "#4c6272", $0 = "#768692", I0 = "#212b32", M0 = "#ffffff", L0 = "600", P0 = "#d5281b", F0 = "600", A0 = "#4c6272", Wl = "4px", Ul = "40px", Gl = "40px", Vl = "12px", E0 = "2px", R0 = "4px", B0 = "0px", H0 = "16px", O0 = "18px", z0 = "24px", W0 = "32px", U0 = "34px", G0 = "32px", V0 = "40px", Y0 = "48px", q0 = "5.4ex", X0 = "7.2ex", K0 = "9ex", J0 = "10.8ex", Z0 = "20ex", Q0 = "38ex", ex = "56ex", tx = "44px", nx = "40px", rx = "1020px", ax = "100%", sx = "50%", ox = "33.333%", ix = "25%", lx = "20%", cx = "320px", ux = "641px", dx = "1025px", fx = "1280px", px = "960px", hx = "32px", mx = "16px", gx = "#d5281b", xx = "#d5281b", bx = "#ffffff", yx = "#007f3b", vx = "#007f3b", wx = "#ffffff", _x = "#ffeb3b", Sx = "#ffeb3b", kx = "#212b32", Cx = "#005eb8", jx = "#005eb8", Nx = "#ffffff", Tx = "#d8dde0", Dx = "#aeb7bd", $x = "#768692", Ix = "0 4px 0 #004021", Mx = "0 4px 0 #005eb8", Lx = "0 4px 0 #6a140e", Px = "0 4px 0 #ffeb3b", Fx = "none", Ax = "0 2px 4px rgba(0, 0, 0, 0.1)", Ex = "4px", Rx = "0px", Bx = "solid", Hx = "0 0 0 3px #ffeb3b", Ox = "0 0 0 3px #ffeb3b", zx = "none", Wx = "0 1px 3px rgba(0, 0, 0, 0.12)", Ux = "0 2px 6px rgba(0, 0, 0, 0.16)", Gx = "0 4px 12px rgba(0, 0, 0, 0.20)", Yl = "0", ql = "4px", Xl = "8px", Kl = "16px", Jl = "24px", Zl = "32px", Ql = "40px", ec = "48px", tc = "56px", nc = "64px", Ja = "0", Za = "0", Qa = "4px", es = "4px", ts = "8px", ns = "8px", rs = "8px", as = "16px", ss = "16px", os = "24px", is = "24px", ls = "32px", cs = "32px", us = "40px", ds = "40px", fs = "48px", ps = "48px", hs = "56px", ms = "56px", gs = "64px", wr = "Frutiger W01", _r = "Arial, Helvetica, sans-serif", Sr = "sans-serif", kr = "400", Cr = "600", jr = "400", Nr = "12px", Tr = "14px", Dr = "12pt", $r = "14px", Ir = "16px", Mr = "12pt", Lr = "16px", Pr = "19px", Fr = "13pt", Ar = "19px", Er = "22px", Rr = "15pt", Br = "22px", Hr = "26px", Or = "17pt", zr = "27px", Wr = "36px", Ur = "20pt", Gr = "33px", Vr = "48px", Yr = "24pt", xs = "16px", bs = "24px", Nt = {
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
}, Pt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ft = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, At = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Vx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: um,
  AnimationDurationNormal: dm,
  AnimationDurationSlow: fm,
  AnimationEasingBounce: gm,
  AnimationEasingEaseIn: pm,
  AnimationEasingEaseInOut: mm,
  AnimationEasingEaseOut: hm,
  BorderColorCard: ml,
  BorderColorCardHover: gl,
  BorderColorDefault: pl,
  BorderColorError: xl,
  BorderColorForm: hl,
  BorderRadiusLarge: Im,
  BorderRadiusMedium: $m,
  BorderRadiusNone: Tm,
  BorderRadiusSmall: Dm,
  BorderWidthCardBottom: km,
  BorderWidthDefault: wm,
  BorderWidthFormElement: _m,
  BorderWidthFormElementError: Sm,
  BorderWidthPanel: Cm,
  BorderWidthTableCell: Nm,
  BorderWidthTableHeader: jm,
  BreakpointDesktop: dx,
  BreakpointLargeDesktop: fx,
  BreakpointMobile: cx,
  BreakpointTablet: ux,
  ButtonBorderRadius: o0,
  ButtonBorderWidth: s0,
  ButtonPrimaryBackgroundActive: Yg,
  ButtonPrimaryBackgroundDefault: Gg,
  ButtonPrimaryBackgroundDisabled: qg,
  ButtonPrimaryBackgroundHover: Vg,
  ButtonPrimaryBorderDefault: Jg,
  ButtonPrimaryBorderFocus: Zg,
  ButtonPrimaryTextDefault: Xg,
  ButtonPrimaryTextDisabled: Kg,
  ButtonSecondaryBackgroundActive: n0,
  ButtonSecondaryBackgroundDefault: Qg,
  ButtonSecondaryBackgroundHover: t0,
  ButtonSecondaryBackgroundSolid: e0,
  ButtonSecondaryBorderDefault: a0,
  ButtonSecondaryTextDefault: r0,
  ButtonShadowSize: i0,
  ButtonSpacingPaddingHorizontalDesktop: Bl,
  ButtonSpacingPaddingHorizontalMobile: El,
  ButtonSpacingPaddingVerticalDesktop: Rl,
  ButtonSpacingPaddingVerticalMobile: Al,
  ButtonTypographyWeight: l0,
  CardBackgroundDefault: c0,
  CardBorderBottom: f0,
  CardBorderDefault: u0,
  CardBorderHover: d0,
  CardBorderWidthBottom: x0,
  CardBorderWidthDefault: g0,
  CardShadowDefault: b0,
  CardShadowHover: y0,
  CardSpacingHeadingMargin: zl,
  CardSpacingPaddingDesktop: Ol,
  CardSpacingPaddingMobile: Hl,
  CardTextDescription: h0,
  CardTextHeading: p0,
  CardTextLink: m0,
  ColorBorderDefault: zm,
  ColorBorderSecondary: Wm,
  ColorButtonLoginActive: gg,
  ColorButtonLoginBackground: hg,
  ColorButtonLoginHover: mg,
  ColorButtonLoginShadow: xg,
  ColorButtonPrimaryActive: Km,
  ColorButtonPrimaryBackground: Ym,
  ColorButtonPrimaryHover: Xm,
  ColorButtonPrimaryShadow: Jm,
  ColorButtonPrimaryText: qm,
  ColorButtonReverseActive: lg,
  ColorButtonReverseBackground: sg,
  ColorButtonReverseHover: ig,
  ColorButtonReverseShadow: cg,
  ColorButtonReverseText: og,
  ColorButtonSecondaryActive: rg,
  ColorButtonSecondaryBackground: Zm,
  ColorButtonSecondaryBackgroundSolid: Qm,
  ColorButtonSecondaryBorder: eg,
  ColorButtonSecondaryHover: ng,
  ColorButtonSecondaryShadow: ag,
  ColorButtonSecondaryText: tg,
  ColorButtonWarningActive: fg,
  ColorButtonWarningBackground: ug,
  ColorButtonWarningHover: dg,
  ColorButtonWarningShadow: pg,
  ColorError: Um,
  ColorFocusBackground: Hm,
  ColorFocusText: Om,
  ColorFormBackground: Vm,
  ColorFormBorder: Gm,
  ColorGrey1: Il,
  ColorGrey2: Ml,
  ColorGrey3: Ll,
  ColorGrey4: Pl,
  ColorGrey5: Fl,
  ColorLinkActive: Rm,
  ColorLinkDefault: Am,
  ColorLinkHover: Em,
  ColorLinkVisited: Bm,
  ColorPrimaryBlack: vl,
  ColorPrimaryBlue: bl,
  ColorPrimaryDarkPink: Sl,
  ColorPrimaryGreen: wl,
  ColorPrimaryPurple: _l,
  ColorPrimaryRed: kl,
  ColorPrimaryWhite: yl,
  ColorPrimaryYellow: Cl,
  ColorSecondaryAquaGreen: Dl,
  ColorSecondaryOrange: Tl,
  ColorSecondaryPaleYellow: jl,
  ColorSecondaryPink: $l,
  ColorSecondaryWarmYellow: Nl,
  ColorTextPrimary: Mm,
  ColorTextPrint: Fm,
  ColorTextReverse: Pm,
  ColorTextSecondary: Lm,
  ComponentBlur: Hg,
  ComponentBreadcrumbChevronMarginLeft: Mg,
  ComponentBreadcrumbChevronMarginRight: Lg,
  ComponentBreadcrumbPaddingTopDesktop: Fg,
  ComponentBreadcrumbPaddingTopMobile: Pg,
  ComponentButtonPaddingDesktopHorizontal: wg,
  ComponentButtonPaddingDesktopVertical: vg,
  ComponentButtonPaddingMobileHorizontal: yg,
  ComponentButtonPaddingMobileVertical: bg,
  ComponentButtonShadowSize: _g,
  ComponentCardHeadingMargin: Dg,
  ComponentCardPaddingDesktop: Tg,
  ComponentCardPaddingMobile: Ng,
  ComponentDetails: zg,
  ComponentExpander: Wg,
  ComponentFormCheckboxLabelPadding: jg,
  ComponentFormCheckboxSize: Cg,
  ComponentFormInputMinHeight: Sg,
  ComponentFormInputPadding: kg,
  ComponentLink: Og,
  ComponentPagination: Ug,
  ComponentPanelPaddingDesktop: Ig,
  ComponentPanelPaddingMobile: $g,
  ComponentSpread: Bg,
  ComponentSummaryListCellPaddingHorizontal: Eg,
  ComponentSummaryListCellPaddingVertical: Ag,
  ComponentSummaryListRowMargin: Rg,
  ElevationHigh: Gx,
  ElevationLow: Wx,
  ElevationMedium: Ux,
  ElevationNone: zx,
  FocusOutlineOffset: Rx,
  FocusOutlineStyle: Bx,
  FocusOutlineWidth: Ex,
  FocusShadowButton: Ox,
  FocusShadowInput: Hx,
  FontFamilyBase: wr,
  FontFamilyFallback: _r,
  FontFamilyPrint: Sr,
  FontLineHeightBase: bs,
  FontSize14Mobile: Nr,
  FontSize14Print: Dr,
  FontSize14Tablet: Tr,
  FontSize16Mobile: $r,
  FontSize16Print: Mr,
  FontSize16Tablet: Ir,
  FontSize19Mobile: Lr,
  FontSize19Print: Fr,
  FontSize19Tablet: Pr,
  FontSize22Mobile: Ar,
  FontSize22Print: Rr,
  FontSize22Tablet: Er,
  FontSize26Mobile: Br,
  FontSize26Print: Or,
  FontSize26Tablet: Hr,
  FontSize36Mobile: zr,
  FontSize36Print: Ur,
  FontSize36Tablet: Wr,
  FontSize48Mobile: Gr,
  FontSize48Print: Yr,
  FontSize48Tablet: Vr,
  FontSizeBase: xs,
  FontWeightBold: Cr,
  FontWeightLight: jr,
  FontWeightNormal: kr,
  FormBorderRadius: B0,
  FormBorderWidthDefault: E0,
  FormBorderWidthError: R0,
  FormErrorTextDefault: P0,
  FormErrorTypographyWeight: F0,
  FormHintTextDefault: A0,
  FormInputBackgroundDefault: v0,
  FormInputBackgroundDisabled: _0,
  FormInputBackgroundError: S0,
  FormInputBackgroundFocus: w0,
  FormInputBorderDefault: k0,
  FormInputBorderDisabled: N0,
  FormInputBorderError: j0,
  FormInputBorderFocus: C0,
  FormInputTextDefault: T0,
  FormInputTextDisabled: $0,
  FormInputTextPlaceholder: D0,
  FormLabelTextDefault: I0,
  FormLabelTextRequired: M0,
  FormLabelTypographyWeight: L0,
  FormSpacingCheckboxLabelPadding: Vl,
  FormSpacingCheckboxSize: Gl,
  FormSpacingInputMinHeight: Ul,
  FormSpacingInputPadding: Wl,
  GridGutter: hx,
  GridGutterHalf: mx,
  GridPageWidth: px,
  HeadingsNhsukHeadingL: Tt,
  HeadingsNhsukHeadingM: Dt,
  HeadingsNhsukHeadingS: $t,
  HeadingsNhsukHeadingXl: Nt,
  HeadingsNhsukHeadingXs: It,
  LayoutColumnActions: lx,
  LayoutColumnFull: ax,
  LayoutColumnHalf: sx,
  LayoutColumnQuarter: ix,
  LayoutColumnThird: ox,
  LayoutContainerMaxWidth: rx,
  ParagraphsBody: Mt,
  ParagraphsBodyLarge: Lt,
  ParagraphsBodySmall: Pt,
  ParagraphsLedeText: Ft,
  ParagraphsLedeTextSmall: At,
  ShadowButtonDefault: Ix,
  ShadowButtonFocus: Px,
  ShadowButtonSecondary: Mx,
  ShadowButtonWarning: Lx,
  ShadowCardDefault: Fx,
  ShadowCardHover: Ax,
  SizeButtonMinHeightDesktop: nx,
  SizeButtonMinHeightMobile: tx,
  SizeFormControlLarge: Y0,
  SizeFormControlMedium: V0,
  SizeFormControlSmall: G0,
  SizeFormInputWidth2xl: Q0,
  SizeFormInputWidth3xl: ex,
  SizeFormInputWidthLg: J0,
  SizeFormInputWidthMd: K0,
  SizeFormInputWidthSm: X0,
  SizeFormInputWidthXl: Z0,
  SizeFormInputWidthXs: q0,
  SizeIconExtraLarge: W0,
  SizeIconLarge: z0,
  SizeIconMedium: O0,
  SizeIconNhsDefault: U0,
  SizeIconSmall: H0,
  Spacing0: Yl,
  Spacing1: ql,
  Spacing2: Xl,
  Spacing3: Kl,
  Spacing4: Jl,
  Spacing5: Zl,
  Spacing6: Ql,
  Spacing7: ec,
  Spacing8: tc,
  Spacing9: nc,
  SpacingResponsive0Mobile: Ja,
  SpacingResponsive0Tablet: Za,
  SpacingResponsive1Mobile: Qa,
  SpacingResponsive1Tablet: es,
  SpacingResponsive2Mobile: ts,
  SpacingResponsive2Tablet: ns,
  SpacingResponsive3Mobile: rs,
  SpacingResponsive3Tablet: as,
  SpacingResponsive4Mobile: ss,
  SpacingResponsive4Tablet: os,
  SpacingResponsive5Mobile: is,
  SpacingResponsive5Tablet: ls,
  SpacingResponsive6Mobile: cs,
  SpacingResponsive6Tablet: us,
  SpacingResponsive7Mobile: ds,
  SpacingResponsive7Tablet: fs,
  SpacingResponsive8Mobile: ps,
  SpacingResponsive8Tablet: hs,
  SpacingResponsive9Mobile: ms,
  SpacingResponsive9Tablet: gs,
  StateDisabledBackground: Tx,
  StateDisabledBorder: Dx,
  StateDisabledText: $x,
  StateErrorBackground: gx,
  StateErrorBorder: xx,
  StateErrorText: bx,
  StateInfoBackground: Cx,
  StateInfoBorder: jx,
  StateInfoText: Nx,
  StateSuccessBackground: yx,
  StateSuccessBorder: vx,
  StateSuccessText: wx,
  StateWarningBackground: _x,
  StateWarningBorder: Sx,
  StateWarningText: kx,
  TransitionButtonDefault: xm,
  TransitionButtonShadow: bm,
  TransitionCardHover: vm,
  TransitionInputFocus: ym
}, Symbol.toStringTag, { value: "Module" })), Ob = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), zb = ({
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
), Wb = ({
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
), Ub = ({
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
), Gb = ({
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
), Vb = ({
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
), Yb = ({
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
), qb = ({
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
), Xb = ({
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
), Kb = ({
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
), Jb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: At.fontFamily,
      fontWeight: At.fontWeight,
      fontSize: At.fontSize.mobile,
      lineHeight: At.lineHeight,
      marginTop: At.marginTop,
      marginBottom: At.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Zb = () => $e(() => Vx, []), Qb = () => $e(() => ({
  // Border colors
  BorderColorDefault: pl,
  BorderColorForm: hl,
  BorderColorCard: ml,
  BorderColorCardHover: gl,
  BorderColorError: xl,
  // Primary colors
  ColorPrimaryBlue: bl,
  ColorPrimaryWhite: yl,
  ColorPrimaryBlack: vl,
  ColorPrimaryGreen: wl,
  ColorPrimaryPurple: _l,
  ColorPrimaryDarkPink: Sl,
  ColorPrimaryRed: kl,
  ColorPrimaryYellow: Cl,
  // Secondary colors
  ColorSecondaryPaleYellow: jl,
  ColorSecondaryWarmYellow: Nl,
  ColorSecondaryOrange: Tl,
  ColorSecondaryAquaGreen: Dl,
  ColorSecondaryPink: $l,
  // Grey scale
  ColorGrey1: Il,
  ColorGrey2: Ml,
  ColorGrey3: Ll,
  ColorGrey4: Pl,
  ColorGrey5: Fl
}), []), ey = () => $e(() => ({
  Spacing0: Yl,
  Spacing1: ql,
  Spacing2: Xl,
  Spacing3: Kl,
  Spacing4: Jl,
  Spacing5: Zl,
  Spacing6: Ql,
  Spacing7: ec,
  Spacing8: tc,
  Spacing9: nc
}), []), ty = () => $e(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Nr,
    Size16: $r,
    Size19: Lr,
    Size22: Ar,
    Size26: Br,
    Size36: zr,
    Size48: Gr
  },
  Tablet: {
    Size14: Tr,
    Size16: Ir,
    Size19: Pr,
    Size22: Er,
    Size26: Hr,
    Size36: Wr,
    Size48: Vr
  },
  Print: {
    Size14: Dr,
    Size16: Mr,
    Size19: Fr,
    Size22: Rr,
    Size26: Or,
    Size36: Ur,
    Size48: Yr
  },
  Family: {
    Base: wr,
    Fallback: _r,
    Print: Sr
  },
  Weight: {
    Normal: kr,
    Bold: Cr,
    Light: jr
  },
  Base: {
    Size: xs,
    LineHeight: bs
  },
  // Backward compatibility - individual exports
  FontFamilyBase: wr,
  FontFamilyFallback: _r,
  FontFamilyPrint: Sr,
  FontWeightNormal: kr,
  FontWeightBold: Cr,
  FontWeightLight: jr,
  FontSize14Mobile: Nr,
  FontSize14Tablet: Tr,
  FontSize14Print: Dr,
  FontSize16Mobile: $r,
  FontSize16Tablet: Ir,
  FontSize16Print: Mr,
  FontSize19Mobile: Lr,
  FontSize19Tablet: Pr,
  FontSize19Print: Fr,
  FontSize22Mobile: Ar,
  FontSize22Tablet: Er,
  FontSize22Print: Rr,
  FontSize26Mobile: Br,
  FontSize26Tablet: Hr,
  FontSize26Print: Or,
  FontSize36Mobile: zr,
  FontSize36Tablet: Wr,
  FontSize36Print: Ur,
  FontSize48Mobile: Gr,
  FontSize48Tablet: Vr,
  FontSize48Print: Yr,
  FontSizeBase: xs,
  FontLineHeightBase: bs
}), []), ny = () => $e(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Ja,
    Size1: Qa,
    Size2: ts,
    Size3: rs,
    Size4: ss,
    Size5: is,
    Size6: cs,
    Size7: ds,
    Size8: ps,
    Size9: ms
  },
  Tablet: {
    Size0: Za,
    Size1: es,
    Size2: ns,
    Size3: as,
    Size4: os,
    Size5: ls,
    Size6: us,
    Size7: fs,
    Size8: hs,
    Size9: gs
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Ja,
  SpacingResponsive0Tablet: Za,
  SpacingResponsive1Mobile: Qa,
  SpacingResponsive1Tablet: es,
  SpacingResponsive2Mobile: ts,
  SpacingResponsive2Tablet: ns,
  SpacingResponsive3Mobile: rs,
  SpacingResponsive3Tablet: as,
  SpacingResponsive4Mobile: ss,
  SpacingResponsive4Tablet: os,
  SpacingResponsive5Mobile: is,
  SpacingResponsive5Tablet: ls,
  SpacingResponsive6Mobile: cs,
  SpacingResponsive6Tablet: us,
  SpacingResponsive7Mobile: ds,
  SpacingResponsive7Tablet: fs,
  SpacingResponsive8Mobile: ps,
  SpacingResponsive8Tablet: hs,
  SpacingResponsive9Mobile: ms,
  SpacingResponsive9Tablet: gs
}), []), ry = () => $e(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Al,
  ButtonSpacingPaddingHorizontalMobile: El,
  ButtonSpacingPaddingVerticalDesktop: Rl,
  ButtonSpacingPaddingHorizontalDesktop: Bl,
  // Card spacing	
  CardSpacingPaddingMobile: Hl,
  CardSpacingPaddingDesktop: Ol,
  CardSpacingHeadingMargin: zl,
  // Form spacing
  FormSpacingInputPadding: Wl,
  FormSpacingInputMinHeight: Ul,
  FormSpacingCheckboxSize: Gl,
  FormSpacingCheckboxLabelPadding: Vl
}), []), ay = () => $e(() => ({
  xl: Nt,
  l: Tt,
  m: Dt,
  s: $t,
  xs: It
}), []), sy = () => $e(() => ({
  body: Mt,
  bodyLarge: Lt,
  bodySmall: Pt,
  ledeText: Ft,
  ledeTextSmall: At
}), []), oy = () => $e(() => ({
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
    bodySmall: Pt,
    ledeText: Ft,
    ledeTextSmall: At
  },
  fonts: {
    family: {
      base: wr,
      fallback: _r,
      print: Sr
    },
    weight: {
      normal: kr,
      bold: Cr,
      light: jr
    },
    sizes: {
      mobile: {
        size14: Nr,
        size16: $r,
        size19: Lr,
        size22: Ar,
        size26: Br,
        size36: zr,
        size48: Gr
      },
      tablet: {
        size14: Tr,
        size16: Ir,
        size19: Pr,
        size22: Er,
        size26: Hr,
        size36: Wr,
        size48: Vr
      },
      print: {
        size14: Dr,
        size16: Mr,
        size19: Fr,
        size22: Rr,
        size26: Or,
        size36: Ur,
        size48: Yr
      }
    }
  }
}), []);
function iy(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: r = "two-column" } = e, [a, s] = Y.useState(t), o = Y.useCallback(() => s("three-column"), []), i = Y.useCallback(() => s((u) => u === "three-column" ? r : u), [r]), l = Y.useCallback(() => s((u) => u === "three-column" ? r : "three-column"), [r]);
  return {
    forceLayout: a,
    setLayout: s,
    drillIn: o,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const rc = {
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
function ly(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...rc, ...e }, a = [];
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
function cy(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...rc, ...e };
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
const uy = '"Frutiger W01", Arial, Helvetica, sans-serif', dy = "Arial, Helvetica, sans-serif";
async function fy() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Vo as Account,
  Jx as ActionLink,
  jb as AdaptiveDataGrid,
  um as AnimationDurationFast,
  dm as AnimationDurationNormal,
  fm as AnimationDurationSlow,
  gm as AnimationEasingBounce,
  pm as AnimationEasingEaseIn,
  mm as AnimationEasingEaseInOut,
  hm as AnimationEasingEaseOut,
  Ti as AppointmentCard,
  Pb as AreaSeriesPrimitive,
  Gf as AriaDataGrid,
  za as AriaTabsDataGrid,
  jb as AriaTabsDataGridAdaptive,
  Bo as Axis,
  Fa as BackLink,
  Ab as BandScalesProvider,
  Fb as BarSeriesPrimitive,
  ml as BorderColorCard,
  gl as BorderColorCardHover,
  pl as BorderColorDefault,
  xl as BorderColorError,
  hl as BorderColorForm,
  Im as BorderRadiusLarge,
  $m as BorderRadiusMedium,
  Tm as BorderRadiusNone,
  Dm as BorderRadiusSmall,
  km as BorderWidthCardBottom,
  wm as BorderWidthDefault,
  _m as BorderWidthFormElement,
  Sm as BorderWidthFormElementError,
  Cm as BorderWidthPanel,
  Nm as BorderWidthTableCell,
  jm as BorderWidthTableHeader,
  Df as Breadcrumb,
  Oc as Breakpoint,
  dx as BreakpointDesktop,
  fx as BreakpointLargeDesktop,
  cx as BreakpointMobile,
  ux as BreakpointTablet,
  lt as Button,
  o0 as ButtonBorderRadius,
  s0 as ButtonBorderWidth,
  Yg as ButtonPrimaryBackgroundActive,
  Gg as ButtonPrimaryBackgroundDefault,
  qg as ButtonPrimaryBackgroundDisabled,
  Vg as ButtonPrimaryBackgroundHover,
  Jg as ButtonPrimaryBorderDefault,
  Zg as ButtonPrimaryBorderFocus,
  Xg as ButtonPrimaryTextDefault,
  Kg as ButtonPrimaryTextDisabled,
  n0 as ButtonSecondaryBackgroundActive,
  Qg as ButtonSecondaryBackgroundDefault,
  t0 as ButtonSecondaryBackgroundHover,
  e0 as ButtonSecondaryBackgroundSolid,
  a0 as ButtonSecondaryBorderDefault,
  r0 as ButtonSecondaryTextDefault,
  i0 as ButtonShadowSize,
  qo as ButtonSize,
  Bl as ButtonSpacingPaddingHorizontalDesktop,
  El as ButtonSpacingPaddingHorizontalMobile,
  Rl as ButtonSpacingPaddingVerticalDesktop,
  Al as ButtonSpacingPaddingVerticalMobile,
  l0 as ButtonTypographyWeight,
  Yo as ButtonVariant,
  Si as Card,
  c0 as CardBackgroundDefault,
  f0 as CardBorderBottom,
  u0 as CardBorderDefault,
  d0 as CardBorderHover,
  x0 as CardBorderWidthBottom,
  g0 as CardBorderWidthDefault,
  hb as CardGroup,
  mb as CardGroupItem,
  b0 as CardShadowDefault,
  y0 as CardShadowHover,
  zl as CardSpacingHeadingMargin,
  Ol as CardSpacingPaddingDesktop,
  Hl as CardSpacingPaddingMobile,
  h0 as CardTextDescription,
  p0 as CardTextHeading,
  m0 as CardTextLink,
  gb as CareCard,
  Zx as CharacterCount,
  Rb as ChartEnhancer,
  Eb as ChartNoScript,
  zp as ChartRoot,
  Tc as Checkbox,
  Mc as Checkboxes,
  zm as ColorBorderDefault,
  Wm as ColorBorderSecondary,
  gg as ColorButtonLoginActive,
  hg as ColorButtonLoginBackground,
  mg as ColorButtonLoginHover,
  xg as ColorButtonLoginShadow,
  Km as ColorButtonPrimaryActive,
  Ym as ColorButtonPrimaryBackground,
  Xm as ColorButtonPrimaryHover,
  Jm as ColorButtonPrimaryShadow,
  qm as ColorButtonPrimaryText,
  lg as ColorButtonReverseActive,
  sg as ColorButtonReverseBackground,
  ig as ColorButtonReverseHover,
  cg as ColorButtonReverseShadow,
  og as ColorButtonReverseText,
  rg as ColorButtonSecondaryActive,
  Zm as ColorButtonSecondaryBackground,
  Qm as ColorButtonSecondaryBackgroundSolid,
  eg as ColorButtonSecondaryBorder,
  ng as ColorButtonSecondaryHover,
  ag as ColorButtonSecondaryShadow,
  tg as ColorButtonSecondaryText,
  fg as ColorButtonWarningActive,
  ug as ColorButtonWarningBackground,
  dg as ColorButtonWarningHover,
  pg as ColorButtonWarningShadow,
  Um as ColorError,
  Hm as ColorFocusBackground,
  Om as ColorFocusText,
  Vm as ColorFormBackground,
  Gm as ColorFormBorder,
  Il as ColorGrey1,
  Ml as ColorGrey2,
  Ll as ColorGrey3,
  Pl as ColorGrey4,
  Fl as ColorGrey5,
  Rm as ColorLinkActive,
  Am as ColorLinkDefault,
  Em as ColorLinkHover,
  Bm as ColorLinkVisited,
  vl as ColorPrimaryBlack,
  bl as ColorPrimaryBlue,
  Sl as ColorPrimaryDarkPink,
  wl as ColorPrimaryGreen,
  _l as ColorPrimaryPurple,
  kl as ColorPrimaryRed,
  yl as ColorPrimaryWhite,
  Cl as ColorPrimaryYellow,
  Dl as ColorSecondaryAquaGreen,
  Tl as ColorSecondaryOrange,
  jl as ColorSecondaryPaleYellow,
  $l as ColorSecondaryPink,
  Nl as ColorSecondaryWarmYellow,
  Mm as ColorTextPrimary,
  Fm as ColorTextPrint,
  Pm as ColorTextReverse,
  Lm as ColorTextSecondary,
  Pn as Column,
  Wc as ColumnAlign,
  Hg as ComponentBlur,
  Mg as ComponentBreadcrumbChevronMarginLeft,
  Lg as ComponentBreadcrumbChevronMarginRight,
  Fg as ComponentBreadcrumbPaddingTopDesktop,
  Pg as ComponentBreadcrumbPaddingTopMobile,
  wg as ComponentButtonPaddingDesktopHorizontal,
  vg as ComponentButtonPaddingDesktopVertical,
  yg as ComponentButtonPaddingMobileHorizontal,
  bg as ComponentButtonPaddingMobileVertical,
  _g as ComponentButtonShadowSize,
  Dg as ComponentCardHeadingMargin,
  Tg as ComponentCardPaddingDesktop,
  Ng as ComponentCardPaddingMobile,
  zg as ComponentDetails,
  Wg as ComponentExpander,
  jg as ComponentFormCheckboxLabelPadding,
  Cg as ComponentFormCheckboxSize,
  Sg as ComponentFormInputMinHeight,
  kg as ComponentFormInputPadding,
  Og as ComponentLink,
  Ug as ComponentPagination,
  Ig as ComponentPanelPaddingDesktop,
  $g as ComponentPanelPaddingMobile,
  Bg as ComponentSpread,
  Eg as ComponentSummaryListCellPaddingHorizontal,
  Ag as ComponentSummaryListCellPaddingVertical,
  Rg as ComponentSummaryListRowMargin,
  Zo as Container,
  pb as ContentsList,
  rc as DEFAULT_FONT_CONFIG,
  Sb as DashboardSummaryGrid,
  ib as DateInput,
  Af as Details,
  Ef as DoDontList,
  Gx as ElevationHigh,
  Wx as ElevationLow,
  Ux as ElevationMedium,
  zx as ElevationNone,
  Gs as ErrorMessage,
  ob as ErrorSummary,
  Rf as Expander,
  dt as FRUTIGER_FONT_FILES,
  ws as Fieldset,
  zc as Float,
  Rx as FocusOutlineOffset,
  Bx as FocusOutlineStyle,
  Ex as FocusOutlineWidth,
  Ox as FocusShadowButton,
  Hx as FocusShadowInput,
  wr as FontFamilyBase,
  _r as FontFamilyFallback,
  Sr as FontFamilyPrint,
  bs as FontLineHeightBase,
  Nr as FontSize14Mobile,
  Dr as FontSize14Print,
  Tr as FontSize14Tablet,
  $r as FontSize16Mobile,
  Mr as FontSize16Print,
  Ir as FontSize16Tablet,
  Lr as FontSize19Mobile,
  Fr as FontSize19Print,
  Pr as FontSize19Tablet,
  Ar as FontSize22Mobile,
  Rr as FontSize22Print,
  Er as FontSize22Tablet,
  Br as FontSize26Mobile,
  Or as FontSize26Print,
  Hr as FontSize26Tablet,
  zr as FontSize36Mobile,
  Ur as FontSize36Print,
  Wr as FontSize36Tablet,
  Gr as FontSize48Mobile,
  Yr as FontSize48Print,
  Vr as FontSize48Tablet,
  xs as FontSizeBase,
  Cr as FontWeightBold,
  jr as FontWeightLight,
  kr as FontWeightNormal,
  ri as Footer,
  B0 as FormBorderRadius,
  E0 as FormBorderWidthDefault,
  R0 as FormBorderWidthError,
  P0 as FormErrorTextDefault,
  F0 as FormErrorTypographyWeight,
  A0 as FormHintTextDefault,
  v0 as FormInputBackgroundDefault,
  _0 as FormInputBackgroundDisabled,
  S0 as FormInputBackgroundError,
  w0 as FormInputBackgroundFocus,
  k0 as FormInputBorderDefault,
  N0 as FormInputBorderDisabled,
  j0 as FormInputBorderError,
  C0 as FormInputBorderFocus,
  T0 as FormInputTextDefault,
  $0 as FormInputTextDisabled,
  D0 as FormInputTextPlaceholder,
  I0 as FormLabelTextDefault,
  M0 as FormLabelTextRequired,
  L0 as FormLabelTypographyWeight,
  Vl as FormSpacingCheckboxLabelPadding,
  Gl as FormSpacingCheckboxSize,
  Ul as FormSpacingInputMinHeight,
  Wl as FormSpacingInputPadding,
  db as GanttChart,
  Aa as Grid,
  hx as GridGutter,
  mx as GridGutterHalf,
  Up as GridLines,
  px as GridPageWidth,
  tn as GridWidth,
  ni as Header,
  ub as HeaderSSR,
  eu as HeaderSearch,
  ni as HeaderStatic,
  Bt as Heading,
  Tt as HeadingsNhsukHeadingL,
  Dt as HeadingsNhsukHeadingM,
  $t as HeadingsNhsukHeadingS,
  Nt as HeadingsNhsukHeadingXl,
  It as HeadingsNhsukHeadingXs,
  nu as Hero,
  Ko as Hint,
  wb as Images,
  ys as Input,
  xb as InsetText,
  vs as Label,
  lx as LayoutColumnActions,
  ax as LayoutColumnFull,
  sx as LayoutColumnHalf,
  ix as LayoutColumnQuarter,
  ox as LayoutColumnThird,
  rx as LayoutContainerMaxWidth,
  Lb as Legend,
  Wp as LineScalesProvider,
  jh as LineSeriesPrimitive,
  Vc as List,
  Qo as MainWrapper,
  Di as MedicationCard,
  Dh as MetricCard,
  Yb as NHSBodyText,
  qb as NHSBodyTextLarge,
  Xb as NHSBodyTextSmall,
  zb as NHSHeading1,
  Wb as NHSHeading2,
  Ub as NHSHeading3,
  Gb as NHSHeading4,
  Vb as NHSHeading5,
  Kb as NHSLedeText,
  Jb as NHSLedeTextSmall,
  cb as NHSThemeProvider,
  dy as NHS_FALLBACK_FONT_STACK,
  uy as NHS_FONT_STACK,
  Lp as NavigationSplitView,
  Tb as PageTemplate,
  fb as Pagination,
  $f as Panel,
  Mt as ParagraphsBody,
  Lt as ParagraphsBodyLarge,
  Pt as ParagraphsBodySmall,
  Ft as ParagraphsLedeText,
  At as ParagraphsLedeTextSmall,
  Ni as PatientCard,
  Ap as ProductRoadmap,
  Qx as Radios,
  eb as RadiosServer,
  jb as ResponsiveDataGrid,
  Nb as ResponsiveDataGridDemo,
  nn as Row,
  Hb as SPC,
  om as SPCChart,
  Bb as SPCMetricCard,
  rr as Select,
  Ec as SelectOption,
  Ix as ShadowButtonDefault,
  Px as ShadowButtonFocus,
  Mx as ShadowButtonSecondary,
  Lx as ShadowButtonWarning,
  Fx as ShadowCardDefault,
  Ax as ShadowCardHover,
  nx as SizeButtonMinHeightDesktop,
  tx as SizeButtonMinHeightMobile,
  Y0 as SizeFormControlLarge,
  V0 as SizeFormControlMedium,
  G0 as SizeFormControlSmall,
  Q0 as SizeFormInputWidth2xl,
  ex as SizeFormInputWidth3xl,
  J0 as SizeFormInputWidthLg,
  K0 as SizeFormInputWidthMd,
  X0 as SizeFormInputWidthSm,
  Z0 as SizeFormInputWidthXl,
  q0 as SizeFormInputWidthXs,
  W0 as SizeIconExtraLarge,
  z0 as SizeIconLarge,
  O0 as SizeIconMedium,
  U0 as SizeIconNhsDefault,
  H0 as SizeIconSmall,
  _i as SkipLink,
  _b as SlotMatrix,
  kb as SortStatusControl,
  Yl as Spacing0,
  ql as Spacing1,
  Xl as Spacing2,
  Kl as Spacing3,
  Jl as Spacing4,
  Zl as Spacing5,
  Ql as Spacing6,
  ec as Spacing7,
  tc as Spacing8,
  nc as Spacing9,
  Ja as SpacingResponsive0Mobile,
  Za as SpacingResponsive0Tablet,
  Qa as SpacingResponsive1Mobile,
  es as SpacingResponsive1Tablet,
  ts as SpacingResponsive2Mobile,
  ns as SpacingResponsive2Tablet,
  rs as SpacingResponsive3Mobile,
  as as SpacingResponsive3Tablet,
  ss as SpacingResponsive4Mobile,
  os as SpacingResponsive4Tablet,
  is as SpacingResponsive5Mobile,
  ls as SpacingResponsive5Tablet,
  cs as SpacingResponsive6Mobile,
  us as SpacingResponsive6Tablet,
  ds as SpacingResponsive7Mobile,
  fs as SpacingResponsive7Tablet,
  ps as SpacingResponsive8Mobile,
  hs as SpacingResponsive8Tablet,
  ms as SpacingResponsive9Mobile,
  gs as SpacingResponsive9Tablet,
  tb as SpacingUtilities,
  Tx as StateDisabledBackground,
  Dx as StateDisabledBorder,
  $x as StateDisabledText,
  gx as StateErrorBackground,
  xx as StateErrorBorder,
  bx as StateErrorText,
  Cx as StateInfoBackground,
  jx as StateInfoBorder,
  Nx as StateInfoText,
  yx as StateSuccessBackground,
  vx as StateSuccessBorder,
  wx as StateSuccessText,
  _x as StateWarningBackground,
  Sx as StateWarningBorder,
  kx as StateWarningText,
  Uf as SummaryCard,
  bb as SummaryList,
  zt as Table,
  yb as Tabs,
  Oe as Tag,
  Bf as TaskList,
  Pc as Textarea,
  Mb as TooltipOverlay,
  Ch as TooltipProvider,
  Db as TransactionalPageTemplate,
  xm as TransitionButtonDefault,
  bm as TransitionButtonShadow,
  vm as TransitionCardHover,
  ym as TransitionInputFocus,
  Ib as VisibilityProvider,
  $i as VitalsCard,
  sb as WIDTH_FRACTIONS,
  vb as WarningCallout,
  Fi as WidthContainer,
  rb as WidthUtilities,
  fy as checkFrutigerLoaded,
  Ms as createGenericTabsConfig,
  Cb as createTCHTabsConfig,
  ly as generateFrutigerFontFace,
  Ob as getResponsiveStyles,
  nb as getSpacingClass,
  ab as getWidthClass,
  cy as preloadFrutigerFonts,
  np as tchDataConfig,
  Qb as useColors,
  ry as useComponentSpacing,
  ay as useNHSHeadings,
  sy as useNHSParagraphs,
  lb as useNHSTheme,
  oy as useNHSTypographySystem,
  iy as useNavigationSplitDrill,
  $p as useNavigationSplitUrlSync,
  Ei as useNhsFdpBreakpoints,
  ny as useResponsiveSpacing,
  $b as useResponsiveValue,
  ey as useSpacing,
  tm as useSpc,
  Zb as useTokens,
  ty as useTypography
};
//# sourceMappingURL=index.esm.js.map
