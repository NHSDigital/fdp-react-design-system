import * as G from "react";
import Ct, { useState as He, useEffect as Ze, useCallback as be, useRef as Ue, createElement as $i, useMemo as Pe, useContext as Zc, createContext as Qc, forwardRef as ar, useImperativeHandle as Mi, useReducer as Pi, memo as eu, useId as Lr } from "react";
import { createPortal as tu } from "react-dom";
function nu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Tr = { exports: {} }, or = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vo;
function ru() {
  if (vo) return or;
  vo = 1;
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
  return or.Fragment = t, or.jsx = n, or.jsxs = n, or;
}
var ir = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yo;
function au() {
  return yo || (yo = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(E) {
      if (E == null) return null;
      if (typeof E == "function")
        return E.$$typeof === D ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case m:
          return "Fragment";
        case x:
          return "Profiler";
        case p:
          return "StrictMode";
        case y:
          return "Suspense";
        case $:
          return "SuspenseList";
        case _:
          return "Activity";
      }
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case v:
            return "Portal";
          case P:
            return (E.displayName || "Context") + ".Provider";
          case C:
            return (E._context.displayName || "Context") + ".Consumer";
          case S:
            var O = E.render;
            return E = E.displayName, E || (E = O.displayName || O.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case T:
            return O = E.displayName || null, O !== null ? O : e(E.type) || "Memo";
          case N:
            O = E._payload, E = E._init;
            try {
              return e(E(O));
            } catch {
            }
        }
      return null;
    }
    function t(E) {
      return "" + E;
    }
    function n(E) {
      try {
        t(E);
        var O = !1;
      } catch {
        O = !0;
      }
      if (O) {
        O = console;
        var U = O.error, ae = typeof Symbol == "function" && Symbol.toStringTag && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return U.call(
          O,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ae
        ), t(E);
      }
    }
    function a(E) {
      if (E === m) return "<>";
      if (typeof E == "object" && E !== null && E.$$typeof === N)
        return "<...>";
      try {
        var O = e(E);
        return O ? "<" + O + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var E = k.A;
      return E === null ? null : E.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(E) {
      if (b.call(E, "key")) {
        var O = Object.getOwnPropertyDescriptor(E, "key").get;
        if (O && O.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function l(E, O) {
      function U() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          O
        ));
      }
      U.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: U,
        configurable: !0
      });
    }
    function u() {
      var E = e(this.type);
      return j[E] || (j[E] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), E = this.props.ref, E !== void 0 ? E : null;
    }
    function c(E, O, U, ae, W, le, Se, de) {
      return U = le.ref, E = {
        $$typeof: g,
        type: E,
        key: O,
        props: le,
        _owner: W
      }, (U !== void 0 ? U : null) !== null ? Object.defineProperty(E, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(E, "ref", { enumerable: !1, value: null }), E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(E, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(E, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Se
      }), Object.defineProperty(E, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: de
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    }
    function d(E, O, U, ae, W, le, Se, de) {
      var fe = O.children;
      if (fe !== void 0)
        if (ae)
          if (L(fe)) {
            for (ae = 0; ae < fe.length; ae++)
              f(fe[ae]);
            Object.freeze && Object.freeze(fe);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(fe);
      if (b.call(O, "key")) {
        fe = e(E);
        var Z = Object.keys(O).filter(function(pe) {
          return pe !== "key";
        });
        ae = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", V[fe + ae] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ae,
          fe,
          Z,
          fe
        ), V[fe + ae] = !0);
      }
      if (fe = null, U !== void 0 && (n(U), fe = "" + U), i(O) && (n(O.key), fe = "" + O.key), "key" in O) {
        U = {};
        for (var ne in O)
          ne !== "key" && (U[ne] = O[ne]);
      } else U = O;
      return fe && l(
        U,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), c(
        E,
        fe,
        le,
        W,
        o(),
        U,
        Se,
        de
      );
    }
    function f(E) {
      typeof E == "object" && E !== null && E.$$typeof === g && E._store && (E._store.validated = 1);
    }
    var h = Ct, g = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), P = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), k = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, b = Object.prototype.hasOwnProperty, L = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(E) {
        return E();
      }
    };
    var I, j = {}, M = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), te = w(a(s)), V = {};
    ir.Fragment = m, ir.jsx = function(E, O, U, ae, W) {
      var le = 1e4 > k.recentlyCreatedOwnerStacks++;
      return d(
        E,
        O,
        U,
        !1,
        ae,
        W,
        le ? Error("react-stack-top-frame") : M,
        le ? w(a(E)) : te
      );
    }, ir.jsxs = function(E, O, U, ae, W) {
      var le = 1e4 > k.recentlyCreatedOwnerStacks++;
      return d(
        E,
        O,
        U,
        !0,
        ae,
        W,
        le ? Error("react-stack-top-frame") : M,
        le ? w(a(E)) : te
      );
    };
  })()), ir;
}
var wo;
function su() {
  return wo || (wo = 1, process.env.NODE_ENV === "production" ? Tr.exports = ru() : Tr.exports = au()), Tr.exports;
}
var r = su(), za = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var _o;
function ou() {
  return _o || (_o = 1, (function(e) {
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
  })(za)), za.exports;
}
var iu = ou();
const we = /* @__PURE__ */ nu(iu), Zb = ({
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
}, Fi = ({
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
var Li = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(Li || {}), Ai = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(Ai || {});
function lu(e) {
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
const { forwardRef: cu, useCallback: hn, useState: Va } = G;
function uu(e, t) {
  const {
    children: n,
    variant: a = Li.Primary,
    size: o = Ai.Default,
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...u
  } = e, [c, d] = Va(!1), [f, h] = Va(!1), [g, v] = Va(!1), m = lu({
    variant: a,
    size: o,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in u ? u.href : void 0
  }), p = "disabled" in u ? u.disabled : u["aria-disabled"] === "true", x = {
    ...c && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...g && { "data-focused": "true" },
    ...p && { "data-disabled": "true" }
  }, C = hn(
    () => !p && d(!0),
    [p]
  ), P = hn(() => d(!1), []), S = hn(
    () => !p && h(!0),
    [p]
  ), y = hn(() => {
    h(!1), d(!1);
  }, []), $ = hn(() => v(!0), []), T = hn(() => v(!1), []), N = hn(
    (fe) => {
      fe.key === " " && ("href" in u || fe.currentTarget.getAttribute("role") === "button") && (fe.preventDefault(), fe.currentTarget.click());
    },
    [u]
  ), _ = hn(
    (fe) => {
      if (l) {
        const Z = fe.currentTarget;
        if (Z.getAttribute("data-processing") === "true") {
          fe.preventDefault();
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
      id: fe,
      style: Z,
      title: ne,
      ["aria-label"]: pe,
      ["aria-describedby"]: z,
      ["aria-labelledby"]: ce,
      tabIndex: F,
      ...R
    } = u, K = u;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: K.href,
        target: K.target,
        rel: K.rel,
        className: m.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...x,
        ...l && { "data-prevent-double-click": "true" },
        ...R,
        onKeyDown: (oe) => {
          K.onKeyDown?.(oe), N(oe);
        },
        onClick: (oe) => {
          K.onClick?.(oe), _(oe);
        },
        onMouseDown: (oe) => {
          K.onMouseDown?.(oe), C();
        },
        onMouseUp: (oe) => {
          K.onMouseUp?.(oe), P();
        },
        onMouseEnter: (oe) => {
          K.onMouseEnter?.(oe), S();
        },
        onMouseLeave: (oe) => {
          K.onMouseLeave?.(oe), y();
        },
        onFocus: (oe) => {
          K.onFocus?.(oe), $();
        },
        onBlur: (oe) => {
          K.onBlur?.(oe), T();
        },
        "aria-disabled": K["aria-disabled"],
        ...K["aria-disabled"] === "true" && { tabIndex: -1 },
        id: fe,
        style: Z,
        title: ne,
        "aria-label": pe,
        "aria-describedby": z,
        "aria-labelledby": ce,
        tabIndex: F,
        children: n
      }
    );
  }
  const {
    id: D,
    style: k,
    title: b,
    ["aria-label"]: L,
    ["aria-describedby"]: w,
    ["aria-labelledby"]: I,
    tabIndex: j,
    name: M,
    value: te,
    form: V,
    formAction: E,
    formEncType: O,
    formMethod: U,
    formNoValidate: ae,
    formTarget: W,
    autoFocus: le,
    ...Se
  } = u, de = u;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: de.type || "button",
      disabled: de.disabled,
      className: m.classes,
      "data-module": "nhs-button",
      ...x,
      ...l && { "data-prevent-double-click": "true" },
      ...de.disabled && { "aria-disabled": "true" },
      ...Se,
      onKeyDown: (fe) => {
        de.onKeyDown?.(fe), N(fe);
      },
      onClick: (fe) => {
        de.onClick?.(fe), _(fe);
      },
      onMouseDown: (fe) => {
        de.onMouseDown?.(fe), C();
      },
      onMouseUp: (fe) => {
        de.onMouseUp?.(fe), P();
      },
      onMouseEnter: (fe) => {
        de.onMouseEnter?.(fe), S();
      },
      onMouseLeave: (fe) => {
        de.onMouseLeave?.(fe), y();
      },
      onFocus: (fe) => {
        de.onFocus?.(fe), $();
      },
      onBlur: (fe) => {
        de.onBlur?.(fe), T();
      },
      id: D,
      style: k,
      title: b,
      "aria-label": L,
      "aria-describedby": w,
      "aria-labelledby": I,
      tabIndex: j,
      name: M,
      value: te,
      form: V,
      formAction: E,
      formEncType: O,
      formMethod: U,
      formNoValidate: ae,
      formTarget: W,
      autoFocus: le,
      children: n
    }
  );
}
const bt = cu(uu);
bt.displayName = "Button";
const us = ({
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
function du(e) {
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
const Je = ({
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
  const d = du({ color: a, noBorder: o, closable: s, disabled: l, className: u }), f = (h) => {
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
}, fu = ({
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
  attributes: g,
  ...v
}) => {
  const [m, p] = He(a), x = n !== void 0, C = x ? n : m;
  Ze(() => {
    x || p(a);
  }, [a, x]);
  const P = (N) => {
    const _ = N.target.checked;
    x || p(_), d?.(_, N);
  }, S = i ? `${e}-hint` : void 0, y = l ? `${e}-error` : void 0, $ = [S, y].filter(Boolean).join(" ") || void 0, T = we(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    u
  );
  return /* @__PURE__ */ r.jsx("div", { className: T, ...v, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: C,
        disabled: o,
        onChange: P,
        onBlur: f,
        onFocus: h,
        "aria-describedby": $,
        ...g
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ r.jsx("div", { id: S, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: y, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
fu.displayName = "Checkbox";
function Ri(e) {
  const n = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    n ? "nhsuk-input--range" : "",
    !n && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: n };
}
const Ks = ({
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
  inputMode: g,
  autoComplete: v,
  maxLength: m,
  minLength: p,
  pattern: x,
  step: C,
  min: P,
  max: S,
  showValueLabels: y = !1,
  showCurrentValue: $ = !1,
  valueLabels: T,
  onChange: N,
  onBlur: _,
  onFocus: D,
  onKeyDown: k,
  ...b
}) => {
  const [L, w] = He(a || o || (n === "range" ? P || "0" : ""));
  Ze(() => {
    a !== void 0 && w(a);
  }, [a]);
  const I = (W) => {
    const le = W.target;
    w(le.value), ("type" in W && W.nativeEvent || W.type === "keydown") && N?.(W);
  }, { classes: j, isRange: M } = Ri({ type: n, hasError: c, width: h, className: f }), te = a !== void 0, V = {
    id: e,
    name: t,
    type: n,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: u,
    "aria-describedby": d,
    inputMode: g,
    autoComplete: v,
    maxLength: m,
    minLength: p,
    pattern: x,
    step: C,
    min: P,
    max: S,
    onChange: I,
    onBlur: _,
    onFocus: D,
    onKeyDown: (W) => {
      if (M && /[0-9]/.test(W.key)) {
        const le = (L?.toString() || "") + W.key;
        W.target.value = le, I(W);
      }
      k?.(W);
    },
    ...b
  }, E = !te && o !== void 0 ? { defaultValue: o } : {}, O = te ? { value: a } : {}, U = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: j,
      ...O,
      ...E,
      "data-current-value": L,
      ...V
    }
  ), ae = M ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    y && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: T?.min || P || "0" }),
      U(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: T?.max || S || "100" })
    ] }),
    !y && U(),
    $ && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      T?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: L })
    ] }) })
  ] }) : null;
  return M ? ae : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: j,
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
      inputMode: g,
      autoComplete: v,
      maxLength: m,
      minLength: p,
      pattern: x,
      step: C,
      min: P,
      max: S,
      onChange: N,
      onBlur: _,
      onFocus: D,
      onKeyDown: k,
      ...b
    }
  );
};
function pu(e) {
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
const Js = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = pu({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
};
function hu(e) {
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
const Zs = ({
  children: e,
  legend: t,
  className: n,
  describedBy: a,
  ...o
}) => {
  const s = hu({
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
function mu(e) {
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
const gu = ({
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
  ...g
}) => {
  const [v, m] = He(
    e.filter((N) => N.checked).map((N) => N.value)
  ), p = n || t, x = i ? `${p}-hint` : void 0, C = l ? `${p}-error` : void 0, P = [x, C].filter(Boolean).join(" ") || void 0, S = (N, _) => {
    let D;
    _ ? D = [...v, N] : D = v.filter((k) => k !== N), m(D), d?.(D);
  }, y = () => e.map((N, _) => {
    const D = `${p}-${_ + 1}`, k = `${D}-conditional`, b = v.includes(N.value), L = N.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: D,
          name: t,
          type: "checkbox",
          value: N.value,
          checked: b,
          disabled: L,
          onChange: (w) => S(N.value, w.target.checked),
          "aria-describedby": N.hint ? `${D}-hint` : P,
          ...N.conditional && {
            "aria-controls": k,
            "aria-expanded": b ? "true" : "false"
          },
          ...N.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: D, children: N.text }),
      N.hint && /* @__PURE__ */ r.jsx("div", { id: `${D}-hint`, className: "nhsuk-checkboxes__hint", children: N.hint }),
      N.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: we("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !b
          }),
          id: k,
          children: typeof N.conditional == "object" && N.conditional !== null && "label" in N.conditional && "id" in N.conditional && "name" in N.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            N.conditional.label && /* @__PURE__ */ r.jsx(Js, { htmlFor: N.conditional.id, children: N.conditional.label }),
            /* @__PURE__ */ r.jsx(Ks, { ...N.conditional })
          ] }) : N.conditional
        }
      )
    ] }, N.value);
  }), { classes: $, formGroupClasses: T } = mu({ small: c, className: u, hasError: !!l });
  return /* @__PURE__ */ r.jsx("div", { className: T, ...h, ...g, children: /* @__PURE__ */ r.jsxs(
    Zs,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: P,
      ...f,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: x, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: C, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: $, children: y() })
      ]
    }
  ) });
};
gu.displayName = "Checkboxes";
function xu(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const bu = ({
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
  maxLength: g,
  minLength: v,
  wrap: m = "soft",
  resize: p = "vertical",
  autoComplete: x,
  spellCheck: C,
  onChange: P,
  onBlur: S,
  onFocus: y,
  onKeyDown: $,
  ...T
}) => {
  const { classes: N, describedBy: _ } = xu({ hasError: u, resize: p, className: d, describedBy: c });
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
      "aria-describedby": _,
      rows: f,
      cols: h,
      maxLength: g,
      minLength: v,
      wrap: m,
      autoComplete: x,
      spellCheck: C,
      onChange: P,
      onBlur: S,
      onFocus: y,
      onKeyDown: $,
      ...T
    }
  );
};
function vu(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Ei = ({ id: e, className: t, children: n, ...a }) => {
  const o = vu({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: o.classes, id: o.id, ...a, children: n });
}, Qb = ({
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
  const g = s ?? i ?? "", [v, m] = He(g), [p, x] = He(0), [C, P] = He(!1), [S, y] = He(!1), $ = be((b) => n ? b.trim() === "" ? 0 : b.trim().split(/\s+/).length : b.length, [n]);
  Ze(() => {
    const b = $(v), L = t || n || 0, w = L - b, I = Math.floor(L * (a / 100));
    x(w), P(b > L), y(b >= I || b > L), d && d(b, w);
  }, [v, t, n, a, $, d]);
  const T = (b) => {
    const L = b.target.value;
    m(L), f && f(b);
  }, N = () => {
    const b = t || n || 0, L = n ? "word" : "character", w = n ? "words" : "characters";
    if (!S)
      return `You can enter up to ${b} ${b === 1 ? L : w}`;
    if (C) {
      const I = Math.abs(p);
      return `You have ${I} ${I === 1 ? L : w} too many`;
    } else
      return `You have ${p} ${p === 1 ? L : w} remaining`;
  }, _ = we(
    "nhsuk-character-count",
    u
  ), D = we(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !S,
      "nhsuk-error-message": C
    },
    c?.classes
  ), k = we(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": C
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
          bu,
          {
            id: e,
            name: o,
            value: s !== void 0 ? v : void 0,
            defaultValue: s === void 0 ? i ?? v : void 0,
            rows: l,
            className: k,
            onChange: T,
            "aria-describedby": `${e}-info`,
            "aria-invalid": C || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ r.jsx(
          Ei,
          {
            id: `${e}-info`,
            className: D,
            role: "status",
            "aria-live": "polite",
            children: N()
          }
        )
      ]
    }
  );
};
function yu(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const wu = ({
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
}, _u = ({
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
  options: g,
  children: v,
  onChange: m,
  onBlur: p,
  onFocus: x,
  ...C
}) => {
  const { classes: P } = yu({ hasError: l, className: c }), S = () => g ? g.map(($, T) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: $.value,
      disabled: $.disabled,
      "data-initial-selected": $.selected || void 0,
      children: $.text
    },
    `${$.value}-${T}`
  )) : null, y = o === void 0 && a === void 0 && g ? g.find(($) => $.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: P,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: o !== void 0 ? o : y,
      disabled: s,
      required: i,
      "aria-describedby": u,
      multiple: d,
      size: f,
      autoComplete: h,
      onChange: m,
      onBlur: p,
      onFocus: x,
      ...C,
      children: v || S()
    }
  );
}, Ar = _u;
Ar.Option = wu;
function Su(e) {
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
    ...g
  } = e, {
    name: v,
    hasError: m = !1,
    describedBy: p,
    className: x,
    size: C = "normal",
    inline: P = !1,
    options: S,
    ...y
  } = g, { classes: $, describedBy: T } = Su({ hasError: m, size: C, inline: P, className: x, describedBy: p });
  return /* @__PURE__ */ r.jsx(Zs, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: $,
      ...y,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: S.map((N, _) => {
        const D = `${v}-${_}`, k = N.conditional ? `${D}-conditional` : void 0, b = n === N.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: D,
              name: v,
              type: "radio",
              value: N.value,
              disabled: N.disabled,
              ...t === "client" ? {
                checked: b,
                onChange: o,
                onBlur: s,
                onFocus: i,
                onKeyDown: l,
                ref: (L) => {
                  L && u && (u.current[_] = L);
                }
              } : {
                defaultChecked: b,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": T
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: D, children: N.text }),
          N.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: N.hint }),
          N.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: we("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !b
              }),
              id: k,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof N.conditional == "object" && N.conditional !== null && "label" in N.conditional && "id" in N.conditional && "name" in N.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                N.conditional.label && /* @__PURE__ */ r.jsx(
                  Js,
                  {
                    htmlFor: N.conditional.id,
                    children: N.conditional.label
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  c,
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
const ev = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s }) => {
  const [i, l] = He(e || t || ""), u = Ue([]), c = Ue(i), d = (g) => {
    const v = g.target.value;
    v !== c.current && (c.current = v, l(v), n?.(g));
  }, f = (g) => {
    o?.(g);
  }, h = be((g) => {
    const { key: v } = g;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(v)) return;
    g.preventDefault();
    const m = u.current.filter((P) => P && !P.disabled), p = m.indexOf(g.currentTarget);
    if (p === -1) return;
    let x = p;
    ["ArrowDown", "ArrowRight"].includes(v) ? x = (p + 1) % m.length : ["ArrowUp", "ArrowLeft"].includes(v) && (x = (p - 1 + m.length) % m.length);
    const C = m[x];
    C && (C.focus(), C.checked || C.click());
  }, []);
  return Bi(
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
      InputComponent: Ks
    }
  );
};
function ku(e) {
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
    width: g = "full",
    inputMode: v,
    autoComplete: m,
    maxLength: p,
    minLength: x,
    pattern: C,
    step: P,
    min: S,
    max: y,
    showValueLabels: $ = !1,
    showCurrentValue: T = !1,
    valueLabels: N,
    // Strip interactive handlers in server variant
    onChange: _,
    onBlur: D,
    onFocus: k,
    onKeyDown: b,
    ...L
  } = e, { classes: w, isRange: I } = Ri({
    type: a,
    hasError: d,
    width: g,
    className: h
  }), j = {
    id: t,
    name: n,
    type: a,
    placeholder: i,
    disabled: l,
    readOnly: u,
    required: c,
    "aria-describedby": f,
    inputMode: v,
    autoComplete: m,
    maxLength: p,
    minLength: x,
    pattern: C,
    step: P,
    min: S,
    max: y,
    ...L
  };
  if (I) {
    const M = o ?? s ?? (typeof S < "u" ? String(S) : "0"), te = /* @__PURE__ */ r.jsx(
      "input",
      {
        className: w,
        ...o !== void 0 ? { value: o } : {},
        ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
        "data-current-value": M,
        ...j
      }
    );
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      $ ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: N?.min || S || "0" }),
        te,
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: N?.max || y || "100" })
      ] }) : te,
      T && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        N?.current || "Current value:",
        " ",
        /* @__PURE__ */ r.jsx("strong", { children: M })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ r.jsx(
    "input",
    {
      className: w,
      ...o !== void 0 ? { value: o } : {},
      ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
      ...j
    }
  );
}
const tv = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return Bi(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: ku
    }
  );
};
var Dn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(Dn || {}), Cu = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(Cu || {}), Nu = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(Nu || {}), ju = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(ju || {});
const Hi = ({
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
}, In = ({
  children: e,
  className: t,
  style: n,
  ...a
}) => {
  const o = we("nhsuk-grid-row", t);
  return /* @__PURE__ */ r.jsx("div", { className: o, style: n, ...a, children: e });
}, hr = ({
  children: e,
  width: t = Dn.Full,
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
}, ds = ({
  children: e,
  className: t,
  style: n,
  ...a
}) => {
  const s = Ct.Children.toArray(e)[0], i = Ct.isValidElement(s) && (s.type === In || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ r.jsx(Hi, { className: t, style: n, ...a, children: i ? e : /* @__PURE__ */ r.jsx(In, { children: e }) });
}, Tu = ({
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
}, Du = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = we("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, Iu = Tu;
Iu.Item = Du;
const nv = ({
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
}, rv = {
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
}, av = ({
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
}, sv = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, ov = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Oi = ({
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
function $u(e) {
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
function Mu(e) {
  const t = e.level ?? $u(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const an = ({ level: e, className: t, text: n, html: a, children: o, size: s, marginBottom: i, ...l }) => {
  const u = Mu({ level: e, size: s, className: t, marginBottom: i }), c = o || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return $i(u.tag, { className: u.classes, style: u.style, ...l }, c);
};
function Pu(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const So = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...o }) => {
  const s = Pu({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, iv = ({
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
  Ze(() => {
    u.current && u.current.focus();
  }, []);
  const c = we(
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
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((g, v) => /* @__PURE__ */ r.jsx("li", { children: h(g) }, v)) })
        ] })
      ]
    }
  );
}, lv = ({
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
  })), [h, g] = He({}), v = (I) => I % 4 === 0 && I % 100 !== 0 || I % 400 === 0, m = (I, j) => {
    const M = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return I === 2 && v(j) ? 29 : M[I - 1];
  }, p = (I, j, M) => {
    if (!I) return;
    if (!/^\d+$/.test(I)) return "Day must be a number";
    const te = parseInt(I, 10);
    if (te < 1 || te > 31) return "Day must be between 1 and 31";
    if (j && M) {
      const V = parseInt(j, 10), E = parseInt(M, 10);
      if (!isNaN(V) && !isNaN(E) && V >= 1 && V <= 12) {
        const O = m(V, E);
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
          ][V - 1]} ${E} only has ${O} days`;
      }
    }
  }, x = (I) => {
    if (!I) return;
    if (!/^\d+$/.test(I)) return "Month must be a number";
    const j = parseInt(I, 10);
    if (j < 1 || j > 12) return "Month must be between 1 and 12";
  }, C = (I) => {
    if (!I) return;
    if (!/^\d+$/.test(I)) return "Year must be a number";
    const j = parseInt(I, 10), M = (/* @__PURE__ */ new Date()).getFullYear();
    if (j < 1900 || j > M + 10)
      return `Year must be between 1900 and ${M + 10}`;
  }, P = (I, j, M) => {
    if (!I || !j || !M) return;
    const te = parseInt(I, 10), V = parseInt(j, 10), E = parseInt(M, 10);
    if (isNaN(te) || isNaN(V) || isNaN(E) || V < 1 || V > 12 || E < 1900) return;
    const O = m(V, E);
    te < 1 || te > O;
  }, S = be((I, j) => {
    const M = {
      ...d,
      [I]: j
    };
    f(M), u && u(M);
  }, [d, u]), y = be((I) => {
    const j = d[I];
    let M;
    if (I === "day")
      M = p(j, d.month, d.year);
    else if (I === "month") {
      if (M = x(j), !M && d.day) {
        const te = p(d.day, j, d.year);
        g((V) => ({
          ...V,
          day: te
        }));
      }
    } else if (I === "year" && (M = C(j), !M && d.day && d.month)) {
      const te = p(d.day, d.month, j);
      g((V) => ({
        ...V,
        day: te
      }));
    }
    if (g((te) => ({
      ...te,
      [I]: M
    })), d.day && d.month && d.year) {
      const te = P(
        I === "day" ? j : d.day,
        I === "month" ? j : d.month,
        I === "year" ? j : d.year
      );
      te && g((V) => ({
        ...V,
        day: te
      }));
    }
  }, [d, p, x, C, P]), $ = Pe(() => [
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
  ], []), T = n || $;
  let N = s?.describedBy || "";
  const _ = i ? `${e}-hint` : "", D = l ? `${e}-error` : "";
  _ && (N = N ? `${N} ${_}` : _), D && (N = N ? `${N} ${D}` : D);
  const k = Object.values(h).some((I) => I), b = we(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || k
    }
  ), L = we(
    "nhsuk-date-input",
    t
  ), w = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(
      Ei,
      {
        id: _,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ r.jsx(
      So,
      {
        id: D,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(h).map(
      ([I, j]) => j ? /* @__PURE__ */ r.jsxs(
        So,
        {
          id: `${e}-${I}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            j
          ]
        },
        `${I}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx("div", { className: L, id: e, "data-testid": "date-input", ...c, children: T.map((I) => {
      const j = I.id || `${e}-${I.name}`, M = a ? `${a}[${I.name}]` : I.name, te = I.label || I.name.charAt(0).toUpperCase() + I.name.slice(1), V = h[I.name], E = d[I.name] || "";
      let O = N;
      if (V) {
        const U = `${e}-${I.name}-error`;
        O = O ? `${O} ${U}` : U;
      }
      return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ r.jsx(
          Js,
          {
            htmlFor: j,
            className: "nhsuk-date-input__label",
            children: te
          }
        ),
        /* @__PURE__ */ r.jsx(
          Ks,
          {
            id: j,
            name: M,
            value: E,
            className: we("nhsuk-date-input__input", I.classes, {
              "nhsuk-input--error": V
            }),
            inputMode: I.inputmode,
            autoComplete: I.autocomplete,
            pattern: I.pattern,
            "aria-describedby": O || void 0,
            hasError: !!V,
            onChange: (U) => S(I.name, U.target.value),
            onBlur: () => y(I.name)
          }
        )
      ] }, I.name);
    }) })
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: b, children: s ? /* @__PURE__ */ r.jsx(
    Zs,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: N || void 0,
      children: w()
    }
  ) : w() });
}, Ui = {
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
}, Wi = Qc(Ui), Fu = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...Ui, ...t };
  return /* @__PURE__ */ r.jsx(Wi.Provider, { value: n, children: e });
}, cv = () => {
  const e = Zc(Wi);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Lu() {
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
function Au() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Lu(), document.head.appendChild(e);
}
const uv = ({ children: e, theme: t }) => (Ze(() => {
  Au();
}, []), /* @__PURE__ */ r.jsx(Fu, { theme: t, children: e }));
function Ru(e, {
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
    service: g = {},
    serviceName: v,
    organisation: m,
    search: p,
    account: x,
    navigation: C,
    containerClasses: P,
    variant: S = "default",
    attributes: y = {},
    maxVisibleItems: $,
    // deprecated (ignored)
    responsiveNavigation: T = !0,
    ...N
  } = e, _ = {
    ...g,
    text: g?.text ?? v
  };
  "maxVisibleItems" in N && delete N.maxVisibleItems;
  const D = _.href && !h.href || _.href && _.href === h.href, k = D ? _.href : h.href, b = we(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": S === "organisation" || m,
      "nhsuk-header--white": S === "white"
    },
    f
  ), L = we(
    "nhsuk-header__container",
    P
  ), w = we(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": C?.white,
      "nhsuk-header__navigation--justified": C?.justified
    },
    C?.className
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
  ), j = () => h.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: h.src,
      width: "280",
      alt: h.ariaLabel || "NHS"
    }
  ) : I(), M = () => m ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      m.name,
      m.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        m.split
      ] })
    ] }),
    m.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: m.descriptor })
  ] }) : null, te = (O, U) => O ? U ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: U, children: O }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: O }) : null, V = (O) => O.active || O.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: O.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: O.html } }) : O.text }) : O.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: O.html } }) : O.text, E = () => /* @__PURE__ */ r.jsx(
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
  return C?.items, /* @__PURE__ */ r.jsxs(
    "header",
    {
      className: b,
      role: "banner",
      "data-module": "nhsuk-header",
      ...y,
      ...N,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: L, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            k ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: k, children: [
              j(),
              M(),
              D && te(_.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              j(),
              M(),
              D && te(_.text)
            ] }),
            _.text && !D && te(_.text, _.href)
          ] }),
          d ?? null,
          /* @__PURE__ */ r.jsx(
            Fi,
            {
              ...x,
              variant: S === "white" ? "white" : "default"
            }
          )
        ] }),
        C && C.items && C.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: w,
            "aria-label": C.ariaLabel || "Menu",
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
                  P
                ),
                ref: u,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: c,
                    children: [
                      (C?.items || []).map((O, U) => /* @__PURE__ */ r.jsx(
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
                            E()
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
        n && C && C.items && C.items.length > 0 && a && i && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: C.items.slice(s ?? 0).map((O, U) => /* @__PURE__ */ r.jsx(
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
const Eu = ({
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
  results: g = [],
  formAttributes: v = {},
  inputAttributes: m = {},
  buttonAttributes: p = {},
  preventDefaultSubmit: x = !1,
  debounceMs: C = 300,
  minQueryLength: P = 1
}) => {
  const [S, y] = He(""), [$, T] = He(!1), N = Ue(void 0), _ = Ue(null), D = Ue(null), k = e === "controlled" && o !== void 0, b = k ? o : S, L = be((ae) => {
    N.current && clearTimeout(N.current), N.current = setTimeout(() => {
      d.onChange && ae.length >= P && d.onChange(ae);
    }, C);
  }, [d.onChange, C, P]), w = be((ae) => {
    const W = ae.target.value;
    k || y(W), e !== "form" && L(W);
  }, [k, e, L]), I = be((ae) => {
    const W = b.trim(), le = {
      query: W,
      timestamp: Date.now(),
      formData: new FormData(ae.currentTarget)
    };
    e === "controlled" || e === "hybrid" && x ? (ae.preventDefault(), d.onSearch && W.length >= P && d.onSearch(le)) : e === "hybrid" && d.onSearch && W.length >= P && d.onSearch(le);
  }, [e, b, d.onSearch, x, P]), j = be(() => {
    T(!0), d.onFocus?.();
  }, [d.onFocus]), M = be(() => {
    T(!1), d.onBlur?.();
  }, [d.onBlur]), te = be(() => {
    k || y(""), d.onClear?.(), D.current?.focus();
  }, [k, d.onClear]);
  Ze(() => () => {
    N.current && clearTimeout(N.current);
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
  ), E = () => /* @__PURE__ */ r.jsx(
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
  ), O = () => !b || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: te,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ r.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ r.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), U = () => !h || !g.length || !$ ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: g.map((ae) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: ae.href ? /* @__PURE__ */ r.jsxs("a", { href: ae.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: ae.title }),
    ae.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: ae.description })
  ] }) : /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => d.onSearch?.({ query: ae.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: ae.title }),
        ae.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: ae.description })
      ]
    }
  ) }, ae.id)) });
  return /* @__PURE__ */ r.jsxs("div", { className: we("nhsuk-header__search", u, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": f,
    "nhsuk-header__search--focused": $,
    "nhsuk-header__search--has-results": h && g.length > 0
  }), children: [
    /* @__PURE__ */ r.jsxs(
      "form",
      {
        ref: _,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? n : void 0,
        role: "search",
        onSubmit: I,
        ...v,
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
                ref: D,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: b,
                onChange: w,
                onFocus: j,
                onBlur: M,
                disabled: c || f,
                ...h && g.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
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
              disabled: c || f || e !== "form" && b.length < P,
              ...p,
              children: [
                f ? E() : V(),
                /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    U()
  ] });
}, zi = ({
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
  const [f, h] = He(!1), [g, v] = He(!1), [m, p] = He(i?.items?.length || 0), [x, C] = He(!1), [P, S] = He(!1), y = Ue(null), $ = Ue(null), T = Ue(!1);
  Ze(() => {
    typeof window > "u" || S(!0);
  }, []), Ze(() => {
    if (typeof document > "u") return;
    const k = (b) => {
      b.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [f]);
  const N = Ue(null), _ = be(() => {
    if (!P || !i?.items || i.items.length === 0 || T.current) return;
    const k = y.current, b = $.current;
    if (!k || !b) return;
    T.current = !0, k.classList.add("nhsuk-header__navigation-container--measuring");
    const L = k.clientWidth, w = Array.from(b.children);
    if (!w.length) {
      k.classList.remove("nhsuk-header__navigation-container--measuring"), T.current = !1;
      return;
    }
    if (N.current == null) {
      const W = document.createElement("button");
      W.type = "button", W.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", W.style.position = "absolute", W.style.visibility = "hidden", W.style.pointerEvents = "none", W.innerHTML = "<span>More</span>", k.appendChild(W), N.current = W.getBoundingClientRect().width || 104, k.removeChild(W);
    }
    const I = N.current + 16;
    let j = 0, M = 0;
    const te = window.getComputedStyle(k), V = parseFloat(te.paddingLeft) || 0, E = parseFloat(te.paddingRight) || 0;
    let O = V + E;
    for (const W of w) {
      const le = W.getBoundingClientRect().width;
      if (j + le + I + O > L) break;
      j += le, M += 1;
    }
    const U = M < i.items.length, ae = U ? M : i.items.length;
    v((W) => W === U ? W : U), p((W) => W === ae ? W : ae), k.classList.remove("nhsuk-header__navigation-container--measuring"), T.current = !1;
  }, [P, i?.items]);
  Ze(() => {
    if (!P) return;
    const k = y.current;
    if (!k) return;
    let b = null;
    const L = () => {
      b == null && (b = window.requestAnimationFrame(() => {
        b = null, _();
      }));
    };
    _();
    const w = new ResizeObserver(() => L());
    return w.observe(k), $.current && w.observe($.current), () => {
      b != null && window.cancelAnimationFrame(b), w.disconnect();
    };
  }, [P, _]), Ze(() => {
    P && _();
  }, [i?.items?.length, P, _]);
  const D = (k) => {
    k && (k.preventDefault(), k.stopPropagation());
    const b = !f;
    h(b), C(b);
  };
  return Ru(
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
      isClient: P,
      menuOpen: f,
      showMoreButton: g,
      visibleItems: m,
      dropdownVisible: x,
      toggleMenu: D,
      navContainerRef: y,
      navListRef: $,
      // Provide interactive search node for client build only
      searchNode: o ? /* @__PURE__ */ r.jsx(Eu, { ...o }) : null
    }
  );
};
function Bu(e, { variant: t, isClient: n }) {
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
    maxVisibleItems: g,
    // deprecated (ignored)
    responsiveNavigation: v = !0,
    ...m
  } = e;
  "maxVisibleItems" in m && delete m.maxVisibleItems;
  const p = {
    ...s,
    text: s?.text ?? i
  }, x = p.href && !o.href || p.href && p.href === o.href, C = x ? p.href : o.href, P = we(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    a
  ), S = we("nhsuk-header__container", d), y = we(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": c?.white,
      "nhsuk-header__navigation--justified": c?.justified
    },
    c?.className
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
  ), T = () => o.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: o.src,
      width: "280",
      alt: o.ariaLabel || "NHS"
    }
  ) : $(), N = () => l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, _ = (w, I) => w ? I ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: I, children: w }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: w }) : null, D = (w) => w.active || w.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: w.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text }) : w.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text, k = c?.items && !v, b = k ? [] : c?.items, L = k ? c.items : [];
  return /* @__PURE__ */ r.jsxs("header", { className: P, role: "banner", "data-module": "nhsuk-header", ...h, ...m, children: [
    /* @__PURE__ */ r.jsxs("div", { className: S, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
        C ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: C, children: [
          T(),
          N(),
          x && _(p.text)
        ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          T(),
          N(),
          x && _(p.text)
        ] }),
        p.text && !x && _(p.text, p.href)
      ] }),
      /* @__PURE__ */ r.jsx(Fi, { ...u, variant: f === "white" ? "white" : "default" })
    ] }),
    c && c.items && c.items.length > 0 && /* @__PURE__ */ r.jsx("nav", { className: y, "aria-label": c.ariaLabel || "Menu", children: /* @__PURE__ */ r.jsx(
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
        children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__navigation-list", children: (b || []).map((w, I) => /* @__PURE__ */ r.jsx(
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
                children: D(w)
              }
            )
          },
          I
        )) })
      }
    ) }),
    k && L.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: L.map((w, I) => /* @__PURE__ */ r.jsx(
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
            children: D(w)
          }
        )
      },
      `overflow-server-${I}`
    )) }) })
  ] });
}
const dv = (e) => Bu(e, {
  variant: "server",
  isClient: !1
}), Hu = ({
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
  ].filter(Boolean).join(" "), g = u || e || a || o, v = () => {
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
        s && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: g && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          v(),
          u || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && g && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          v(),
          u || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Hu.displayName = "Hero";
const Vi = ({
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
  const f = (g, v = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: we("nhsuk-footer__list-item", {
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
function Pr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ou(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Qs(e) {
  let t, n, a;
  e.length !== 2 ? (t = Pr, n = (l, u) => Pr(e(l), u), a = (l, u) => e(l) - u) : (t = e === Pr || e === Ou ? e : Uu, n = e, a = e);
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
function Uu() {
  return 0;
}
function Wu(e) {
  return e === null ? NaN : +e;
}
const zu = Qs(Pr), Vu = zu.right;
Qs(Wu).center;
function Gi(e, t) {
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
class ko extends Map {
  constructor(t, n = qu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(Co(this, t));
  }
  has(t) {
    return super.has(Co(this, t));
  }
  set(t, n) {
    return super.set(Gu(this, t), n);
  }
  delete(t) {
    return super.delete(Yu(this, t));
  }
}
function Co({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function Gu({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function Yu({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function qu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Xu = Math.sqrt(50), Ku = Math.sqrt(10), Ju = Math.sqrt(2);
function Rr(e, t, n) {
  const a = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= Xu ? 10 : s >= Ku ? 5 : s >= Ju ? 2 : 1;
  let l, u, c;
  return o < 0 ? (c = Math.pow(10, -o) / i, l = Math.round(e * c), u = Math.round(t * c), l / c < e && ++l, u / c > t && --u, c = -c) : (c = Math.pow(10, o) * i, l = Math.round(e / c), u = Math.round(t / c), l * c < e && ++l, u * c > t && --u), u < l && 0.5 <= n && n < 2 ? Rr(e, t, n * 2) : [l, u, c];
}
function Zu(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, s, i] = a ? Rr(t, e, n) : Rr(e, t, n);
  if (!(s >= o)) return [];
  const l = s - o + 1, u = new Array(l);
  if (a)
    if (i < 0) for (let c = 0; c < l; ++c) u[c] = (s - c) / -i;
    else for (let c = 0; c < l; ++c) u[c] = (s - c) * i;
  else if (i < 0) for (let c = 0; c < l; ++c) u[c] = (o + c) / -i;
  else for (let c = 0; c < l; ++c) u[c] = (o + c) * i;
  return u;
}
function fs(e, t, n) {
  return t = +t, e = +e, n = +n, Rr(e, t, n)[2];
}
function ps(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, o = a ? fs(t, e, n) : fs(e, t, n);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function Qu(e, t, n) {
  e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var a = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, s = new Array(o); ++a < o; )
    s[a] = e + a * n;
  return s;
}
function Ta(e, t) {
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
const No = Symbol("implicit");
function Yi() {
  var e = new ko(), t = [], n = [], a = No;
  function o(s) {
    let i = e.get(s);
    if (i === void 0) {
      if (a !== No) return a;
      e.set(s, i = t.push(s) - 1);
    }
    return n[i % n.length];
  }
  return o.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new ko();
    for (const i of s)
      e.has(i) || e.set(i, t.push(i) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (n = Array.from(s), o) : n.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (a = s, o) : a;
  }, o.copy = function() {
    return Yi(t, n).unknown(a);
  }, Ta.apply(o, arguments), o;
}
function qi() {
  var e = Yi().unknown(void 0), t = e.domain, n = e.range, a = 0, o = 1, s, i, l = !1, u = 0, c = 0, d = 0.5;
  delete e.unknown;
  function f() {
    var h = t().length, g = o < a, v = g ? o : a, m = g ? a : o;
    s = (m - v) / Math.max(1, h - u + c * 2), l && (s = Math.floor(s)), v += (m - v - s * (h - u)) * d, i = s * (1 - u), l && (v = Math.round(v), i = Math.round(i));
    var p = Qu(h).map(function(x) {
      return v + s * x;
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
    return arguments.length ? (u = Math.min(1, c = +h), f()) : u;
  }, e.paddingInner = function(h) {
    return arguments.length ? (u = Math.min(1, h), f()) : u;
  }, e.paddingOuter = function(h) {
    return arguments.length ? (c = +h, f()) : c;
  }, e.align = function(h) {
    return arguments.length ? (d = Math.max(0, Math.min(1, h)), f()) : d;
  }, e.copy = function() {
    return qi(t(), [a, o]).round(l).paddingInner(u).paddingOuter(c).align(d);
  }, Ta.apply(f(), arguments);
}
function eo(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Xi(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function Sr() {
}
var mr = 0.7, Er = 1 / mr, Xn = "\\s*([+-]?\\d+)\\s*", gr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ed = /^#([0-9a-f]{3,8})$/, td = new RegExp(`^rgb\\(${Xn},${Xn},${Xn}\\)$`), nd = new RegExp(`^rgb\\(${Bt},${Bt},${Bt}\\)$`), rd = new RegExp(`^rgba\\(${Xn},${Xn},${Xn},${gr}\\)$`), ad = new RegExp(`^rgba\\(${Bt},${Bt},${Bt},${gr}\\)$`), sd = new RegExp(`^hsl\\(${gr},${Bt},${Bt}\\)$`), od = new RegExp(`^hsla\\(${gr},${Bt},${Bt},${gr}\\)$`), jo = {
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
eo(Sr, xr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: To,
  // Deprecated! Use color.formatHex.
  formatHex: To,
  formatHex8: id,
  formatHsl: ld,
  formatRgb: Do,
  toString: Do
});
function To() {
  return this.rgb().formatHex();
}
function id() {
  return this.rgb().formatHex8();
}
function ld() {
  return Ki(this).formatHsl();
}
function Do() {
  return this.rgb().formatRgb();
}
function xr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = ed.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Io(t) : n === 3 ? new Nt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Dr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Dr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = td.exec(e)) ? new Nt(t[1], t[2], t[3], 1) : (t = nd.exec(e)) ? new Nt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = rd.exec(e)) ? Dr(t[1], t[2], t[3], t[4]) : (t = ad.exec(e)) ? Dr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = sd.exec(e)) ? Po(t[1], t[2] / 100, t[3] / 100, 1) : (t = od.exec(e)) ? Po(t[1], t[2] / 100, t[3] / 100, t[4]) : jo.hasOwnProperty(e) ? Io(jo[e]) : e === "transparent" ? new Nt(NaN, NaN, NaN, 0) : null;
}
function Io(e) {
  return new Nt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Dr(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new Nt(e, t, n, a);
}
function cd(e) {
  return e instanceof Sr || (e = xr(e)), e ? (e = e.rgb(), new Nt(e.r, e.g, e.b, e.opacity)) : new Nt();
}
function hs(e, t, n, a) {
  return arguments.length === 1 ? cd(e) : new Nt(e, t, n, a ?? 1);
}
function Nt(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
eo(Nt, hs, Xi(Sr, {
  brighter(e) {
    return e = e == null ? Er : Math.pow(Er, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? mr : Math.pow(mr, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Nt(jn(this.r), jn(this.g), jn(this.b), Br(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: $o,
  // Deprecated! Use color.formatHex.
  formatHex: $o,
  formatHex8: ud,
  formatRgb: Mo,
  toString: Mo
}));
function $o() {
  return `#${Nn(this.r)}${Nn(this.g)}${Nn(this.b)}`;
}
function ud() {
  return `#${Nn(this.r)}${Nn(this.g)}${Nn(this.b)}${Nn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Mo() {
  const e = Br(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${jn(this.r)}, ${jn(this.g)}, ${jn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Br(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function jn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Nn(e) {
  return e = jn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Po(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ft(e, t, n, a);
}
function Ki(e) {
  if (e instanceof Ft) return new Ft(e.h, e.s, e.l, e.opacity);
  if (e instanceof Sr || (e = xr(e)), !e) return new Ft();
  if (e instanceof Ft) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), s = Math.max(t, n, a), i = NaN, l = s - o, u = (s + o) / 2;
  return l ? (t === s ? i = (n - a) / l + (n < a) * 6 : n === s ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= u < 0.5 ? s + o : 2 - s - o, i *= 60) : l = u > 0 && u < 1 ? 0 : i, new Ft(i, l, u, e.opacity);
}
function dd(e, t, n, a) {
  return arguments.length === 1 ? Ki(e) : new Ft(e, t, n, a ?? 1);
}
function Ft(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
eo(Ft, dd, Xi(Sr, {
  brighter(e) {
    return e = e == null ? Er : Math.pow(Er, e), new Ft(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? mr : Math.pow(mr, e), new Ft(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - a;
    return new Nt(
      Ga(e >= 240 ? e - 240 : e + 120, o, a),
      Ga(e, o, a),
      Ga(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Ft(Fo(this.h), Ir(this.s), Ir(this.l), Br(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Br(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Fo(this.h)}, ${Ir(this.s) * 100}%, ${Ir(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Fo(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ir(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ga(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const to = (e) => () => e;
function fd(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function pd(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function hd(e) {
  return (e = +e) == 1 ? Ji : function(t, n) {
    return n - t ? pd(t, n, e) : to(isNaN(t) ? n : t);
  };
}
function Ji(e, t) {
  var n = t - e;
  return n ? fd(e, n) : to(isNaN(e) ? t : e);
}
const Lo = (function e(t) {
  var n = hd(t);
  function a(o, s) {
    var i = n((o = hs(o)).r, (s = hs(s)).r), l = n(o.g, s.g), u = n(o.b, s.b), c = Ji(o.opacity, s.opacity);
    return function(d) {
      return o.r = i(d), o.g = l(d), o.b = u(d), o.opacity = c(d), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function md(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function gd(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function xd(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, o = new Array(a), s = new Array(n), i;
  for (i = 0; i < a; ++i) o[i] = no(e[i], t[i]);
  for (; i < n; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function bd(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function Hr(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function vd(e, t) {
  var n = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = no(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in n) a[o] = n[o](s);
    return a;
  };
}
var ms = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ya = new RegExp(ms.source, "g");
function yd(e) {
  return function() {
    return e;
  };
}
function wd(e) {
  return function(t) {
    return e(t) + "";
  };
}
function _d(e, t) {
  var n = ms.lastIndex = Ya.lastIndex = 0, a, o, s, i = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (a = ms.exec(e)) && (o = Ya.exec(t)); )
    (s = o.index) > n && (s = t.slice(n, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, u.push({ i, x: Hr(a, o) })), n = Ya.lastIndex;
  return n < t.length && (s = t.slice(n), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? u[0] ? wd(u[0].x) : yd(t) : (t = u.length, function(c) {
    for (var d = 0, f; d < t; ++d) l[(f = u[d]).i] = f.x(c);
    return l.join("");
  });
}
function no(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? to(t) : (n === "number" ? Hr : n === "string" ? (a = xr(t)) ? (t = a, Lo) : _d : t instanceof xr ? Lo : t instanceof Date ? bd : gd(t) ? md : Array.isArray(t) ? xd : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? vd : Hr)(e, t);
}
function Sd(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function kd(e) {
  return function() {
    return e;
  };
}
function Cd(e) {
  return +e;
}
var Ao = [0, 1];
function zn(e) {
  return e;
}
function gs(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : kd(isNaN(t) ? NaN : 0.5);
}
function Nd(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function jd(e, t, n) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = gs(o, a), s = n(i, s)) : (a = gs(a, o), s = n(s, i)), function(l) {
    return s(a(l));
  };
}
function Td(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = gs(e[i], e[i + 1]), s[i] = n(t[i], t[i + 1]);
  return function(l) {
    var u = Vu(e, l, 1, a) - 1;
    return s[u](o[u](l));
  };
}
function Zi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Dd() {
  var e = Ao, t = Ao, n = no, a, o, s, i = zn, l, u, c;
  function d() {
    var h = Math.min(e.length, t.length);
    return i !== zn && (i = Nd(e[0], e[h - 1])), l = h > 2 ? Td : jd, u = c = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? s : (u || (u = l(e.map(a), t, n)))(a(i(h)));
  }
  return f.invert = function(h) {
    return i(o((c || (c = l(t, e.map(a), Hr)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, Cd), d()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), d()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = Sd, d();
  }, f.clamp = function(h) {
    return arguments.length ? (i = h ? !0 : zn, d()) : i !== zn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, d()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (s = h, f) : s;
  }, function(h, g) {
    return a = h, o = g, d();
  };
}
function Qi() {
  return Dd()(zn, zn);
}
function Id(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Or(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function er(e) {
  return e = Or(Math.abs(e)), e ? e[1] : NaN;
}
function $d(e, t) {
  return function(n, a) {
    for (var o = n.length, s = [], i = 0, l = e[0], u = 0; o > 0 && l > 0 && (u + l + 1 > a && (l = Math.max(1, a - u)), s.push(n.substring(o -= l, o + l)), !((u += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function Md(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Pd = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ur(e) {
  if (!(t = Pd.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new ro({
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
Ur.prototype = ro.prototype;
function ro(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
ro.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Fd(e) {
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
var el;
function Ld(e, t) {
  var n = Or(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1], s = o - (el = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = a.length;
  return s === i ? a : s > i ? a + new Array(s - i + 1).join("0") : s > 0 ? a.slice(0, s) + "." + a.slice(s) : "0." + new Array(1 - s).join("0") + Or(e, Math.max(0, t + s - 1))[0];
}
function Ro(e, t) {
  var n = Or(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const Eo = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Id,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ro(e * 100, t),
  r: Ro,
  s: Ld,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Bo(e) {
  return e;
}
var Ho = Array.prototype.map, Oo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ad(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Bo : $d(Ho.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? Bo : Md(Ho.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = Ur(f);
    var h = f.fill, g = f.align, v = f.sign, m = f.symbol, p = f.zero, x = f.width, C = f.comma, P = f.precision, S = f.trim, y = f.type;
    y === "n" ? (C = !0, y = "g") : Eo[y] || (P === void 0 && (P = 12), S = !0, y = "g"), (p || h === "0" && g === "=") && (p = !0, h = "0", g = "=");
    var $ = m === "$" ? n : m === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "", T = m === "$" ? a : /[%p]/.test(y) ? i : "", N = Eo[y], _ = /[defgprs%]/.test(y);
    P = P === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, P)) : Math.max(0, Math.min(20, P));
    function D(k) {
      var b = $, L = T, w, I, j;
      if (y === "c")
        L = N(k) + L, k = "";
      else {
        k = +k;
        var M = k < 0 || 1 / k < 0;
        if (k = isNaN(k) ? u : N(Math.abs(k), P), S && (k = Fd(k)), M && +k == 0 && v !== "+" && (M = !1), b = (M ? v === "(" ? v : l : v === "-" || v === "(" ? "" : v) + b, L = (y === "s" ? Oo[8 + el / 3] : "") + L + (M && v === "(" ? ")" : ""), _) {
          for (w = -1, I = k.length; ++w < I; )
            if (j = k.charCodeAt(w), 48 > j || j > 57) {
              L = (j === 46 ? o + k.slice(w + 1) : k.slice(w)) + L, k = k.slice(0, w);
              break;
            }
        }
      }
      C && !p && (k = t(k, 1 / 0));
      var te = b.length + k.length + L.length, V = te < x ? new Array(x - te + 1).join(h) : "";
      switch (C && p && (k = t(V + k, V.length ? x - L.length : 1 / 0), V = ""), g) {
        case "<":
          k = b + k + L + V;
          break;
        case "=":
          k = b + V + k + L;
          break;
        case "^":
          k = V.slice(0, te = V.length >> 1) + b + k + L + V.slice(te);
          break;
        default:
          k = V + b + k + L;
          break;
      }
      return s(k);
    }
    return D.toString = function() {
      return f + "";
    }, D;
  }
  function d(f, h) {
    var g = c((f = Ur(f), f.type = "f", f)), v = Math.max(-8, Math.min(8, Math.floor(er(h) / 3))) * 3, m = Math.pow(10, -v), p = Oo[8 + v / 3];
    return function(x) {
      return g(m * x) + p;
    };
  }
  return {
    format: c,
    formatPrefix: d
  };
}
var $r, tl, nl;
Rd({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Rd(e) {
  return $r = Ad(e), tl = $r.format, nl = $r.formatPrefix, $r;
}
function Ed(e) {
  return Math.max(0, -er(Math.abs(e)));
}
function Bd(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(er(t) / 3))) * 3 - er(Math.abs(e)));
}
function Hd(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, er(t) - er(e)) + 1;
}
function Od(e, t, n, a) {
  var o = ps(e, t, n), s;
  switch (a = Ur(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(s = Bd(o, i)) && (a.precision = s), nl(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(s = Hd(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = s - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(s = Ed(o)) && (a.precision = s - (a.type === "%") * 2);
      break;
    }
  }
  return tl(a);
}
function Ud(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return Zu(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var o = t();
    return Od(o[0], o[o.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), o = 0, s = a.length - 1, i = a[o], l = a[s], u, c, d = 10;
    for (l < i && (c = i, i = l, l = c, c = o, o = s, s = c); d-- > 0; ) {
      if (c = fs(i, l, n), c === u)
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
function Wr() {
  var e = Qi();
  return e.copy = function() {
    return Zi(e, Wr());
  }, Ta.apply(e, arguments), Ud(e);
}
function Wd(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, o = e[n], s = e[a], i;
  return s < o && (i = n, n = a, a = i, i = o, o = s, s = i), e[n] = t.floor(o), e[a] = t.ceil(s), e;
}
const qa = /* @__PURE__ */ new Date(), Xa = /* @__PURE__ */ new Date();
function ut(e, t, n, a) {
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
  }, o.filter = (s) => ut((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), n && (o.count = (s, i) => (qa.setTime(+s), Xa.setTime(+i), e(qa), e(Xa), Math.floor(n(qa, Xa))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const zr = ut(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
zr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ut((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : zr);
zr.range;
const nn = 1e3, Pt = nn * 60, rn = Pt * 60, sn = rn * 24, ao = sn * 7, Uo = sn * 30, Ka = sn * 365, Vn = ut((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * nn);
}, (e, t) => (t - e) / nn, (e) => e.getUTCSeconds());
Vn.range;
const so = ut((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * nn);
}, (e, t) => {
  e.setTime(+e + t * Pt);
}, (e, t) => (t - e) / Pt, (e) => e.getMinutes());
so.range;
const zd = ut((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Pt);
}, (e, t) => (t - e) / Pt, (e) => e.getUTCMinutes());
zd.range;
const oo = ut((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * nn - e.getMinutes() * Pt);
}, (e, t) => {
  e.setTime(+e + t * rn);
}, (e, t) => (t - e) / rn, (e) => e.getHours());
oo.range;
const Vd = ut((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * rn);
}, (e, t) => (t - e) / rn, (e) => e.getUTCHours());
Vd.range;
const kr = ut(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Pt) / sn,
  (e) => e.getDate() - 1
);
kr.range;
const io = ut((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / sn, (e) => e.getUTCDate() - 1);
io.range;
const Gd = ut((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / sn, (e) => Math.floor(e / sn));
Gd.range;
function Pn(e) {
  return ut((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Pt) / ao);
}
const Da = Pn(0), Vr = Pn(1), Yd = Pn(2), qd = Pn(3), tr = Pn(4), Xd = Pn(5), Kd = Pn(6);
Da.range;
Vr.range;
Yd.range;
qd.range;
tr.range;
Xd.range;
Kd.range;
function Fn(e) {
  return ut((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / ao);
}
const rl = Fn(0), Gr = Fn(1), Jd = Fn(2), Zd = Fn(3), nr = Fn(4), Qd = Fn(5), ef = Fn(6);
rl.range;
Gr.range;
Jd.range;
Zd.range;
nr.range;
Qd.range;
ef.range;
const br = ut((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
br.range;
const tf = ut((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
tf.range;
const on = ut((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
on.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ut((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
on.range;
const $n = ut((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
$n.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ut((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
$n.range;
function nf(e, t, n, a, o, s) {
  const i = [
    [Vn, 1, nn],
    [Vn, 5, 5 * nn],
    [Vn, 15, 15 * nn],
    [Vn, 30, 30 * nn],
    [s, 1, Pt],
    [s, 5, 5 * Pt],
    [s, 15, 15 * Pt],
    [s, 30, 30 * Pt],
    [o, 1, rn],
    [o, 3, 3 * rn],
    [o, 6, 6 * rn],
    [o, 12, 12 * rn],
    [a, 1, sn],
    [a, 2, 2 * sn],
    [n, 1, ao],
    [t, 1, Uo],
    [t, 3, 3 * Uo],
    [e, 1, Ka]
  ];
  function l(c, d, f) {
    const h = d < c;
    h && ([c, d] = [d, c]);
    const g = f && typeof f.range == "function" ? f : u(c, d, f), v = g ? g.range(c, +d + 1) : [];
    return h ? v.reverse() : v;
  }
  function u(c, d, f) {
    const h = Math.abs(d - c) / f, g = Qs(([, , p]) => p).right(i, h);
    if (g === i.length) return e.every(ps(c / Ka, d / Ka, f));
    if (g === 0) return zr.every(Math.max(ps(c, d, f), 1));
    const [v, m] = i[h / i[g - 1][2] < i[g][2] / h ? g - 1 : g];
    return v.every(m);
  }
  return [l, u];
}
const [rf, af] = nf(on, br, Da, kr, oo, so);
function Ja(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Za(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function lr(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function sf(e) {
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, u = e.shortMonths, c = cr(o), d = ur(o), f = cr(s), h = ur(s), g = cr(i), v = ur(i), m = cr(l), p = ur(l), x = cr(u), C = ur(u), P = {
    a: M,
    A: te,
    b: V,
    B: E,
    c: null,
    d: qo,
    e: qo,
    f: Df,
    g: Bf,
    G: Of,
    H: Nf,
    I: jf,
    j: Tf,
    L: al,
    m: If,
    M: $f,
    p: O,
    q: U,
    Q: Jo,
    s: Zo,
    S: Mf,
    u: Pf,
    U: Ff,
    V: Lf,
    w: Af,
    W: Rf,
    x: null,
    X: null,
    y: Ef,
    Y: Hf,
    Z: Uf,
    "%": Ko
  }, S = {
    a: ae,
    A: W,
    b: le,
    B: Se,
    c: null,
    d: Xo,
    e: Xo,
    f: Gf,
    g: np,
    G: ap,
    H: Wf,
    I: zf,
    j: Vf,
    L: ol,
    m: Yf,
    M: qf,
    p: de,
    q: fe,
    Q: Jo,
    s: Zo,
    S: Xf,
    u: Kf,
    U: Jf,
    V: Zf,
    w: Qf,
    W: ep,
    x: null,
    X: null,
    y: tp,
    Y: rp,
    Z: sp,
    "%": Ko
  }, y = {
    a: D,
    A: k,
    b,
    B: L,
    c: w,
    d: Go,
    e: Go,
    f: _f,
    g: Vo,
    G: zo,
    H: Yo,
    I: Yo,
    j: bf,
    L: wf,
    m: xf,
    M: vf,
    p: _,
    q: gf,
    Q: kf,
    s: Cf,
    S: yf,
    u: df,
    U: ff,
    V: pf,
    w: uf,
    W: hf,
    x: I,
    X: j,
    y: Vo,
    Y: zo,
    Z: mf,
    "%": Sf
  };
  P.x = $(n, P), P.X = $(a, P), P.c = $(t, P), S.x = $(n, S), S.X = $(a, S), S.c = $(t, S);
  function $(Z, ne) {
    return function(pe) {
      var z = [], ce = -1, F = 0, R = Z.length, K, oe, ie;
      for (pe instanceof Date || (pe = /* @__PURE__ */ new Date(+pe)); ++ce < R; )
        Z.charCodeAt(ce) === 37 && (z.push(Z.slice(F, ce)), (oe = Wo[K = Z.charAt(++ce)]) != null ? K = Z.charAt(++ce) : oe = K === "e" ? " " : "0", (ie = ne[K]) && (K = ie(pe, oe)), z.push(K), F = ce + 1);
      return z.push(Z.slice(F, ce)), z.join("");
    };
  }
  function T(Z, ne) {
    return function(pe) {
      var z = lr(1900, void 0, 1), ce = N(z, Z, pe += "", 0), F, R;
      if (ce != pe.length) return null;
      if ("Q" in z) return new Date(z.Q);
      if ("s" in z) return new Date(z.s * 1e3 + ("L" in z ? z.L : 0));
      if (ne && !("Z" in z) && (z.Z = 0), "p" in z && (z.H = z.H % 12 + z.p * 12), z.m === void 0 && (z.m = "q" in z ? z.q : 0), "V" in z) {
        if (z.V < 1 || z.V > 53) return null;
        "w" in z || (z.w = 1), "Z" in z ? (F = Za(lr(z.y, 0, 1)), R = F.getUTCDay(), F = R > 4 || R === 0 ? Gr.ceil(F) : Gr(F), F = io.offset(F, (z.V - 1) * 7), z.y = F.getUTCFullYear(), z.m = F.getUTCMonth(), z.d = F.getUTCDate() + (z.w + 6) % 7) : (F = Ja(lr(z.y, 0, 1)), R = F.getDay(), F = R > 4 || R === 0 ? Vr.ceil(F) : Vr(F), F = kr.offset(F, (z.V - 1) * 7), z.y = F.getFullYear(), z.m = F.getMonth(), z.d = F.getDate() + (z.w + 6) % 7);
      } else ("W" in z || "U" in z) && ("w" in z || (z.w = "u" in z ? z.u % 7 : "W" in z ? 1 : 0), R = "Z" in z ? Za(lr(z.y, 0, 1)).getUTCDay() : Ja(lr(z.y, 0, 1)).getDay(), z.m = 0, z.d = "W" in z ? (z.w + 6) % 7 + z.W * 7 - (R + 5) % 7 : z.w + z.U * 7 - (R + 6) % 7);
      return "Z" in z ? (z.H += z.Z / 100 | 0, z.M += z.Z % 100, Za(z)) : Ja(z);
    };
  }
  function N(Z, ne, pe, z) {
    for (var ce = 0, F = ne.length, R = pe.length, K, oe; ce < F; ) {
      if (z >= R) return -1;
      if (K = ne.charCodeAt(ce++), K === 37) {
        if (K = ne.charAt(ce++), oe = y[K in Wo ? ne.charAt(ce++) : K], !oe || (z = oe(Z, pe, z)) < 0) return -1;
      } else if (K != pe.charCodeAt(z++))
        return -1;
    }
    return z;
  }
  function _(Z, ne, pe) {
    var z = c.exec(ne.slice(pe));
    return z ? (Z.p = d.get(z[0].toLowerCase()), pe + z[0].length) : -1;
  }
  function D(Z, ne, pe) {
    var z = g.exec(ne.slice(pe));
    return z ? (Z.w = v.get(z[0].toLowerCase()), pe + z[0].length) : -1;
  }
  function k(Z, ne, pe) {
    var z = f.exec(ne.slice(pe));
    return z ? (Z.w = h.get(z[0].toLowerCase()), pe + z[0].length) : -1;
  }
  function b(Z, ne, pe) {
    var z = x.exec(ne.slice(pe));
    return z ? (Z.m = C.get(z[0].toLowerCase()), pe + z[0].length) : -1;
  }
  function L(Z, ne, pe) {
    var z = m.exec(ne.slice(pe));
    return z ? (Z.m = p.get(z[0].toLowerCase()), pe + z[0].length) : -1;
  }
  function w(Z, ne, pe) {
    return N(Z, t, ne, pe);
  }
  function I(Z, ne, pe) {
    return N(Z, n, ne, pe);
  }
  function j(Z, ne, pe) {
    return N(Z, a, ne, pe);
  }
  function M(Z) {
    return i[Z.getDay()];
  }
  function te(Z) {
    return s[Z.getDay()];
  }
  function V(Z) {
    return u[Z.getMonth()];
  }
  function E(Z) {
    return l[Z.getMonth()];
  }
  function O(Z) {
    return o[+(Z.getHours() >= 12)];
  }
  function U(Z) {
    return 1 + ~~(Z.getMonth() / 3);
  }
  function ae(Z) {
    return i[Z.getUTCDay()];
  }
  function W(Z) {
    return s[Z.getUTCDay()];
  }
  function le(Z) {
    return u[Z.getUTCMonth()];
  }
  function Se(Z) {
    return l[Z.getUTCMonth()];
  }
  function de(Z) {
    return o[+(Z.getUTCHours() >= 12)];
  }
  function fe(Z) {
    return 1 + ~~(Z.getUTCMonth() / 3);
  }
  return {
    format: function(Z) {
      var ne = $(Z += "", P);
      return ne.toString = function() {
        return Z;
      }, ne;
    },
    parse: function(Z) {
      var ne = T(Z += "", !1);
      return ne.toString = function() {
        return Z;
      }, ne;
    },
    utcFormat: function(Z) {
      var ne = $(Z += "", S);
      return ne.toString = function() {
        return Z;
      }, ne;
    },
    utcParse: function(Z) {
      var ne = T(Z += "", !0);
      return ne.toString = function() {
        return Z;
      }, ne;
    }
  };
}
var Wo = { "-": "", _: " ", 0: "0" }, ht = /^\s*\d+/, of = /^%/, lf = /[\\^$*+?|[\]().{}]/g;
function Ve(e, t, n) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < n ? new Array(n - s + 1).join(t) + o : o);
}
function cf(e) {
  return e.replace(lf, "\\$&");
}
function cr(e) {
  return new RegExp("^(?:" + e.map(cf).join("|") + ")", "i");
}
function ur(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function uf(e, t, n) {
  var a = ht.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function df(e, t, n) {
  var a = ht.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function ff(e, t, n) {
  var a = ht.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function pf(e, t, n) {
  var a = ht.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function hf(e, t, n) {
  var a = ht.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function zo(e, t, n) {
  var a = ht.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function Vo(e, t, n) {
  var a = ht.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function mf(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function gf(e, t, n) {
  var a = ht.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function xf(e, t, n) {
  var a = ht.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Go(e, t, n) {
  var a = ht.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function bf(e, t, n) {
  var a = ht.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Yo(e, t, n) {
  var a = ht.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function vf(e, t, n) {
  var a = ht.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function yf(e, t, n) {
  var a = ht.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function wf(e, t, n) {
  var a = ht.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function _f(e, t, n) {
  var a = ht.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Sf(e, t, n) {
  var a = of.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function kf(e, t, n) {
  var a = ht.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Cf(e, t, n) {
  var a = ht.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function qo(e, t) {
  return Ve(e.getDate(), t, 2);
}
function Nf(e, t) {
  return Ve(e.getHours(), t, 2);
}
function jf(e, t) {
  return Ve(e.getHours() % 12 || 12, t, 2);
}
function Tf(e, t) {
  return Ve(1 + kr.count(on(e), e), t, 3);
}
function al(e, t) {
  return Ve(e.getMilliseconds(), t, 3);
}
function Df(e, t) {
  return al(e, t) + "000";
}
function If(e, t) {
  return Ve(e.getMonth() + 1, t, 2);
}
function $f(e, t) {
  return Ve(e.getMinutes(), t, 2);
}
function Mf(e, t) {
  return Ve(e.getSeconds(), t, 2);
}
function Pf(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Ff(e, t) {
  return Ve(Da.count(on(e) - 1, e), t, 2);
}
function sl(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? tr(e) : tr.ceil(e);
}
function Lf(e, t) {
  return e = sl(e), Ve(tr.count(on(e), e) + (on(e).getDay() === 4), t, 2);
}
function Af(e) {
  return e.getDay();
}
function Rf(e, t) {
  return Ve(Vr.count(on(e) - 1, e), t, 2);
}
function Ef(e, t) {
  return Ve(e.getFullYear() % 100, t, 2);
}
function Bf(e, t) {
  return e = sl(e), Ve(e.getFullYear() % 100, t, 2);
}
function Hf(e, t) {
  return Ve(e.getFullYear() % 1e4, t, 4);
}
function Of(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? tr(e) : tr.ceil(e), Ve(e.getFullYear() % 1e4, t, 4);
}
function Uf(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ve(t / 60 | 0, "0", 2) + Ve(t % 60, "0", 2);
}
function Xo(e, t) {
  return Ve(e.getUTCDate(), t, 2);
}
function Wf(e, t) {
  return Ve(e.getUTCHours(), t, 2);
}
function zf(e, t) {
  return Ve(e.getUTCHours() % 12 || 12, t, 2);
}
function Vf(e, t) {
  return Ve(1 + io.count($n(e), e), t, 3);
}
function ol(e, t) {
  return Ve(e.getUTCMilliseconds(), t, 3);
}
function Gf(e, t) {
  return ol(e, t) + "000";
}
function Yf(e, t) {
  return Ve(e.getUTCMonth() + 1, t, 2);
}
function qf(e, t) {
  return Ve(e.getUTCMinutes(), t, 2);
}
function Xf(e, t) {
  return Ve(e.getUTCSeconds(), t, 2);
}
function Kf(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Jf(e, t) {
  return Ve(rl.count($n(e) - 1, e), t, 2);
}
function il(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? nr(e) : nr.ceil(e);
}
function Zf(e, t) {
  return e = il(e), Ve(nr.count($n(e), e) + ($n(e).getUTCDay() === 4), t, 2);
}
function Qf(e) {
  return e.getUTCDay();
}
function ep(e, t) {
  return Ve(Gr.count($n(e) - 1, e), t, 2);
}
function tp(e, t) {
  return Ve(e.getUTCFullYear() % 100, t, 2);
}
function np(e, t) {
  return e = il(e), Ve(e.getUTCFullYear() % 100, t, 2);
}
function rp(e, t) {
  return Ve(e.getUTCFullYear() % 1e4, t, 4);
}
function ap(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? nr(e) : nr.ceil(e), Ve(e.getUTCFullYear() % 1e4, t, 4);
}
function sp() {
  return "+0000";
}
function Ko() {
  return "%";
}
function Jo(e) {
  return +e;
}
function Zo(e) {
  return Math.floor(+e / 1e3);
}
var Hn, ll;
op({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function op(e) {
  return Hn = sf(e), ll = Hn.format, Hn.parse, Hn.utcFormat, Hn.utcParse, Hn;
}
function ip(e) {
  return new Date(e);
}
function lp(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function cl(e, t, n, a, o, s, i, l, u, c) {
  var d = Qi(), f = d.invert, h = d.domain, g = c(".%L"), v = c(":%S"), m = c("%I:%M"), p = c("%I %p"), x = c("%a %d"), C = c("%b %d"), P = c("%B"), S = c("%Y");
  function y($) {
    return (u($) < $ ? g : l($) < $ ? v : i($) < $ ? m : s($) < $ ? p : a($) < $ ? o($) < $ ? x : C : n($) < $ ? P : S)($);
  }
  return d.invert = function($) {
    return new Date(f($));
  }, d.domain = function($) {
    return arguments.length ? h(Array.from($, lp)) : h().map(ip);
  }, d.ticks = function($) {
    var T = h();
    return e(T[0], T[T.length - 1], $ ?? 10);
  }, d.tickFormat = function($, T) {
    return T == null ? y : c(T);
  }, d.nice = function($) {
    var T = h();
    return (!$ || typeof $.range != "function") && ($ = t(T[0], T[T.length - 1], $ ?? 10)), $ ? h(Wd(T, $)) : d;
  }, d.copy = function() {
    return Zi(d, cl(e, t, n, a, o, s, i, l, u, c));
  }, d;
}
function lo() {
  return Ta.apply(cl(rf, af, on, br, Da, kr, oo, so, Vn, ll).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function cp({
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
  const c = Ue(null), [d, f] = He(!1), [h, g] = He(!1), v = t(e.start), m = t(e.end), p = Math.max(m - v, 20), x = () => {
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
  }, C = e.progress ? p * e.progress / 100 : 0, P = () => {
    n?.(e);
  }, S = () => {
    a?.(e);
  }, y = (b) => {
    b.key === "Enter" ? (b.preventDefault(), P()) : b.key === " " && (b.preventDefault(), S());
  }, $ = () => {
    f(!0);
  }, T = () => {
    f(!1);
  }, N = () => {
    g(!0), l?.();
  }, _ = () => {
    g(!1);
  }, D = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (h || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), k = {
    "--task-left": `${v}px`,
    "--task-width": `${p}px`,
    "--task-color": x(),
    left: `${v}px`,
    width: `${p}px`,
    backgroundColor: x()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": s,
      className: D,
      style: k,
      onClick: P,
      onDoubleClick: S,
      onKeyDown: y,
      onMouseDown: $,
      onMouseUp: T,
      onFocus: N,
      onBlur: _,
      "aria-label": u || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${C}px` }
          }
        ),
        /* @__PURE__ */ r.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function up({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let g = e.getTime(); g <= t.getTime(); g += 864e5)
    a.push(new Date(g));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = He(-1), u = Ue(null), c = (g) => {
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
      const v = u.current;
      v && v.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => h(0), 0));
  }, h = (g) => {
    const v = u.current?.querySelector(`[data-date-index="${g}"]`);
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
            ref: u,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": n,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: c,
            onFocus: f,
            children: a.map((g, v) => {
              const m = g.getTime() === s.getTime(), p = i === v;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": v,
                  className: `date-column ${m ? "today" : ""} ${p ? "focused" : ""}`,
                  tabIndex: p ? 0 : -1,
                  role: "button",
                  "aria-label": `${g.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${m ? " (Today)" : ""}`,
                  onFocus: () => l(v),
                  onKeyDown: c,
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
function dp({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, u] = He(!1), [c, d] = He(-1), f = Ue(null);
  Ze(() => {
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
        const C = Math.min(t.length - 1, c + 1);
        d(C), f.current?.querySelector(`[data-task-index="${C}"]`)?.focus();
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
  }, g = (m) => {
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
  }, v = (m) => {
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
            children: t.map((m, p) => /* @__PURE__ */ r.jsx(
              cp,
              {
                task: m,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && c === p,
                taskIndex: p,
                tabIndex: l && c === p ? 0 : -1,
                onFocus: () => v(p)
              },
              m.id
            ))
          }
        )
      ]
    }
  );
}
function fv({
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
  Ze(() => {
    if (!i.current || typeof window > "u") return;
    const m = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!m) return;
    const p = new m((x) => {
      const C = x[0];
      C && u(Math.max(C.contentRect.width - 220, 400));
    });
    return p.observe(i.current), () => p.disconnect();
  }, []);
  const h = Pe(
    () => lo().domain([c, d]).range([0, l]),
    [c, d, l]
  ), g = Pe(() => {
    const m = /* @__PURE__ */ new Map();
    return t.forEach((p) => {
      const x = m.get(p.resourceId) || [];
      x.push(p), m.set(p.resourceId, x);
    }), m;
  }, [t]), v = (m) => {
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
      onKeyDown: v,
      children: [
        /* @__PURE__ */ r.jsx(up, { viewStart: c, viewEnd: d, dateCount: f }),
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
              dp,
              {
                resource: m,
                tasks: g.get(m.id) || [],
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
const Yr = ({
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
) }), fp = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const u = () => t ? Ct.Children.toArray(t).filter(
    (p) => Ct.isValidElement(p) && (p.type === Yr || p.type?.displayName === "BreadcrumbItem")
  ).map((p) => ({
    text: typeof p.props.children == "string" ? p.props.children : String(p.props.children),
    href: p.props.href,
    active: p.props.active,
    attributes: p.props.attributes
  })) : [], c = () => t ? u() : o && s ? [{ href: o, text: s }] : e, d = () => {
    const m = c();
    if (m && m.length > 0) {
      const p = m.slice().reverse().find((x) => x.href && !x.active);
      if (p)
        return { href: p.href, text: p.text };
    }
    return { text: "Home" };
  }, f = c(), h = d(), g = we(
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
          Ct.Children.map(t, (m, p) => Ct.isValidElement(m) && (m.type === Yr || m.type?.displayName === "BreadcrumbItem") ? Ct.cloneElement(m, { key: p }) : null)
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
}, pp = fp;
pp.Item = Yr;
Yr.displayName = "BreadcrumbItem";
const ul = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [o, s] = He(!1);
  Ze(() => {
    s(!0);
  }, []), Ze(() => {
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
}, pv = ({
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
}, hv = ({
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
}, dl = Ct.forwardRef(({
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
  ].filter(Boolean).join(" "), g = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), v = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), m = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const C = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      an,
      {
        level: a,
        className: v,
        children: C()
      }
    );
  }, p = () => d.children ? d.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: s }) : null, x = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
        /* @__PURE__ */ r.jsxs("div", { className: g, children: [
          m(),
          p(),
          x()
        ] })
      ]
    }
  );
});
dl.displayName = "Card";
const mv = ({
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
}, gv = ({
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
}, xv = ({
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
  "aria-describedby": g
}) => {
  const v = [
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
    const C = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], P = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        C,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      an,
      {
        level: a,
        className: m,
        children: P
      }
    );
  }, x = () => u || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: v,
      "data-testid": c,
      id: d,
      "aria-label": f,
      "aria-labelledby": h,
      "aria-describedby": g,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          p(),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: x() })
      ]
    }
  );
}, hp = ({
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
  return /* @__PURE__ */ r.jsxs("div", { className: c, id: e, ...u, children: [
    d(),
    f()
  ] });
}, bv = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...o
}) => {
  const s = we("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: s, ...o, children: i() });
}, vv = ({
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
}, dr = { current: null }, mp = () => {
  if (dr.current) return dr.current;
  try {
    dr.current = require("prismjs");
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
    dr.current = null;
  }
  return dr.current;
}, gp = (e) => {
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
}, qr = (e, t, n) => {
  if (n || !t) return e;
  const a = mp();
  if (a && a.languages) {
    const o = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (o)
      try {
        return a.highlight(e, a.languages[o], o);
      } catch {
      }
  }
  return gp(e);
}, xp = ({
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
  "data-testid": g,
  columns: v,
  data: m,
  visuallyHiddenCaption: p = !1
}) => {
  const x = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), C = we(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    d
  ), P = we(f), S = (_, D) => {
    const k = we(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${_.format}`]: _.format
      },
      _.classes
    ), b = {
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
      const w = Array.isArray(_.code), I = w ? _.code.join(`
`) : _.code, j = w || I.includes(`
`), M = {
        className: we("nhsuk-table__code", _.codeClassName, {
          "nhsuk-table__code--block": j,
          "nhsuk-table__code--inline": !j
        }),
        ..._.codeLanguage ? { "data-language": _.codeLanguage } : {}
      }, te = qr(I, _.codeLanguage);
      L = j ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...M,
          dangerouslySetInnerHTML: { __html: te }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...M,
          dangerouslySetInnerHTML: { __html: te }
        }
      );
    } else
      L = _.text;
    return /* @__PURE__ */ r.jsx("th", { className: k, ...b, children: L }, D);
  }, y = (_, D, k) => {
    const b = o && k || _.rowHeader, L = we(
      b ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${b ? "header" : "cell"}--${_.format}`]: _.format
      },
      _.classes
    ), w = {
      ...b && { scope: "row" },
      ..._.colspan && { colSpan: _.colspan },
      ..._.rowspan && { rowSpan: _.rowspan },
      ...s && {
        role: b ? "rowheader" : "cell",
        ..._.header && { "data-label": _.header }
      },
      ..._.attributes
    };
    let I;
    if (_.node != null)
      I = /* @__PURE__ */ r.jsx(r.Fragment, { children: _.node });
    else if (_.html)
      I = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } });
    else if (_.code != null) {
      const te = Array.isArray(_.code), V = te ? _.code.join(`
`) : _.code, E = te || V.includes(`
`), O = {
        className: we("nhsuk-table__code", _.codeClassName, {
          "nhsuk-table__code--block": E,
          "nhsuk-table__code--inline": !E
        }),
        ..._.codeLanguage ? { "data-language": _.codeLanguage } : {}
      }, U = qr(
        V,
        _.codeLanguage,
        _.disableHighlight
      );
      I = E ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
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
      I = _.text;
    const j = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      s && _.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        _.header,
        " "
      ] }),
      I
    ] }), M = b ? "th" : "td";
    return /* @__PURE__ */ r.jsx(M, { className: L, ...w, children: j }, D);
  };
  let $ = t, T = e;
  !$ && v && v.length && ($ = v.map((_) => ({
    text: _.title,
    format: _.format,
    classes: _.headerClasses,
    attributes: _.headerAttributes
  }))), !T && v && m && m.length && (T = m.map((_, D) => v.map((k) => {
    const b = k.accessor ? k.accessor(_, D) : _[k.key];
    let L = { format: k.format, classes: k.cellClasses, attributes: k.cellAttributes };
    if (k.rowHeader && (L.rowHeader = !0), k.render) {
      const w = k.render(b, _, D, k);
      return w == null || typeof w == "boolean" ? { ...L, text: "" } : typeof w == "string" || typeof w == "number" ? { ...L, text: String(w) } : { ...L, ...w };
    }
    return { ...L, text: b != null ? String(b) : "" };
  })));
  const N = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: C,
      ...s && { role: "table" },
      ...h,
      ...g && { "data-testid": g },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: we(x, p && "nhsuk-u-visually-hidden"), children: n }),
        $ && $.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...s && { role: "row" }, children: $.map(
              (_, D) => S(_, D)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: T && T.map((_, D) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: _.map(
              (k, b) => y(k, b, b === 0)
            )
          },
          D
        )) })
      ]
    }
  );
  return u ? /* @__PURE__ */ r.jsxs(hp, { className: c, children: [
    i && /* @__PURE__ */ r.jsx(an, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    N()
  ] }) : P ? /* @__PURE__ */ r.jsx("div", { className: P, children: N() }) : N();
}, bp = ({
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
}, fl = ({
  responsive: e,
  className: t,
  children: n,
  ...a
}) => {
  const o = e ? { role: "row" } : {};
  return /* @__PURE__ */ r.jsx("tr", { className: t, ...o, ...a, children: n });
}, pl = ({
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
  as: g = "th"
}) => {
  const v = we(
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
    const C = Array.isArray(a), P = C ? a.join(`
`) : a, S = C || P.includes(`
`), y = {
      className: we("nhsuk-table__code", s, {
        "nhsuk-table__code--block": S,
        "nhsuk-table__code--inline": !S
      }),
      ...o ? { "data-language": o } : {}
    }, $ = qr(
      P,
      o,
      i
    );
    p = S ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...y,
        dangerouslySetInnerHTML: { __html: $ }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...y, dangerouslySetInnerHTML: { __html: $ } });
  } else p = e;
  const x = g;
  return /* @__PURE__ */ r.jsx(x, { className: v, ...m, children: p });
}, vp = ({
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
  rowHeader: g
}) => {
  const v = !!g, m = v ? "th" : "td", p = we(
    v ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${v ? "header" : "cell"}--${l}`,
    u
  ), x = {
    ...c && { colSpan: c },
    ...d && { rowSpan: d },
    ...v && { scope: "row" },
    ...h && { role: v ? "rowheader" : "cell" },
    ...f
  };
  let C;
  if (n != null) C = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) C = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const P = Array.isArray(a), S = P ? a.join(`
`) : a, y = P || S.includes(`
`), $ = {
      className: we("nhsuk-table__code", s, {
        "nhsuk-table__code--block": y,
        "nhsuk-table__code--inline": !y
      }),
      ...o ? { "data-language": o } : {}
    }, T = qr(S, o, i);
    C = y ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ...$, dangerouslySetInnerHTML: { __html: T } }) }) : /* @__PURE__ */ r.jsx("code", { ...$, dangerouslySetInnerHTML: { __html: T } });
  } else C = e;
  return /* @__PURE__ */ r.jsx(m, { className: p, ...x, children: C });
}, ln = xp;
ln.Caption = bp;
ln.BodyRow = fl;
ln.HeaderCell = pl;
ln.Cell = vp;
let Qo = !1, ei = !1;
Object.defineProperty(ln, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Qo && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), Qo = !0), fl;
  }
});
Object.defineProperty(ln, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !ei && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), ei = !0), pl;
  }
});
const yv = ar(({
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
  const g = n !== void 0, [v, m] = He(() => t || e[0]?.id || ""), p = g ? n : v, x = Ue(null), C = Ue(/* @__PURE__ */ new Map()), P = be((D) => {
    g || m(D), a?.(D);
  }, [g, a]), S = be((D) => {
    o?.(D), l && P(D);
  }, [o, l, P]), y = be((D, k) => {
    const b = e.filter((I) => !I.disabled).map((I) => I.id), L = b.indexOf(k);
    let w = null;
    switch (D.key) {
      case "ArrowLeft":
        w = L > 0 ? L - 1 : b.length - 1;
        break;
      case "ArrowRight":
        w = L < b.length - 1 ? L + 1 : 0;
        break;
      case "Home":
        w = 0;
        break;
      case "End":
        w = b.length - 1;
        break;
      case "Escape":
        D.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (w !== null) {
      D.preventDefault();
      const I = b[w], j = C.current.get(I);
      j && (j.focus(), S(I));
    }
  }, [e, S, i]), $ = be((D, k) => {
    k ? C.current.set(D, k) : C.current.delete(D);
  }, []), T = be((D) => {
    const k = C.current.get(D);
    k && k.focus();
  }, []);
  Mi(h, () => ({
    focusTab: T,
    getActiveTab: () => p,
    getTabListElement: () => x.current
  }), [T, p]);
  const N = be((D) => {
    const k = D.relatedTarget;
    x.current?.contains(k) || s?.();
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
            ref: x,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: N,
                children: e.map((D) => {
                  const k = D.id === p, b = D.disabled, L = we("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": k,
                    "nhsuk-tabs__list-item--disabled": b
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: L, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (w) => $(D.id, w),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": k,
                      "aria-controls": `${D.id}-panel`,
                      id: `${D.id}-tab`,
                      tabIndex: k ? 0 : -1,
                      disabled: b,
                      onClick: () => !b && P(D.id),
                      onKeyDown: (w) => !b && y(w, D.id),
                      onFocus: () => !b && S(D.id),
                      ...D.attributes,
                      children: D.label
                    }
                  ) }, D.id);
                })
              }
            )
          }
        ),
        e.map((D) => {
          const k = D.id === p;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${D.id}-tab`,
              id: `${D.id}-panel`,
              hidden: !k,
              children: D.content
            },
            D.id
          );
        })
      ]
    }
  );
}), yp = ar(
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
yp.displayName = "Details";
const wp = ar(
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
        className: u.join(" "),
        ...i,
        children: [
          h(),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: c.join(" "), role: "list", children: n.map((g, v) => /* @__PURE__ */ r.jsxs("li", { children: [
            d(),
            f(g.item)
          ] }, v)) }) })
        ]
      }
    );
  }
);
wp.displayName = "DoDontList";
const _p = ar(
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
_p.displayName = "Expander";
const Sp = ar(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, u) => {
      const c = u + 1, d = `${t}-${c}-hint`, f = `${t}-${c}-status`, h = !!l.href, g = [
        "nhsuk-task-list__item",
        h && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), v = [
        l.hint && d,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        kp,
        {
          item: l,
          itemClasses: g,
          hasLink: h,
          hintId: d,
          statusId: f,
          ariaDescribedBy: v
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
), kp = ({
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
    return e.status.tag ? d = /* @__PURE__ */ r.jsx(Je, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ r.jsx("div", { className: c, id: o, children: d });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    u()
  ] });
};
Sp.displayName = "TaskList";
const wv = ({
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
        $i(
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
}, _v = ({
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
}, Cp = ({
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
      Ar,
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
      Ar,
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
] }), Np = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(Je, { color: jp(n.status), text: n.label }) }, n.status)) });
function jp(e) {
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
const Sv = ({
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
  enableDefaultLegend: g = !0,
  legendPlacement: v = "bottom",
  onA11yModeChange: m
}) => {
  const [p, x] = He("grid"), C = i || p, [P, S] = He(a || []), y = n ?? P, $ = Pe(() => {
    const w = /* @__PURE__ */ new Set();
    return e.forEach((I) => w.add(new Date(I.start).getTime())), Array.from(w).sort((I, j) => I - j);
  }, [e]), T = Pe(() => {
    const w = {};
    return e.forEach((I) => {
      const j = new Date(I.start).getTime();
      w[j] || (w[j] = {});
      const M = I.capacity - I.booked - (I.held || 0);
      w[j][I.sessionId] = { slot: I, remaining: M };
    }), w;
  }, [e]), N = be((w) => {
    if (s === "single") {
      const I = [w.id];
      n || S(I), o?.(I, { lastAction: "select" });
    } else {
      const I = y.includes(w.id), j = I ? y.filter((M) => M !== w.id) : [...y, w.id];
      n || S(j), o?.(j, { lastAction: I ? "deselect" : "select" });
    }
  }, [s, y, n, o]), _ = Pe(() => h || (g ? Array.from(new Set(e.map((I) => I.status))).map((I) => ({
    status: I,
    label: I.charAt(0).toUpperCase() + I.slice(1)
  })) : void 0), [h, g, e]), D = _ ? /* @__PURE__ */ r.jsx(
    Np,
    {
      items: _,
      orientation: v === "left" || v === "right" ? "vertical" : "horizontal"
    }
  ) : null, k = (w) => {
    i || x(w), m?.(w);
  }, b = d || (f ? /* @__PURE__ */ r.jsx(
    Cp,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: C,
      onA11yModeChange: k
    }
  ) : null), L = /* @__PURE__ */ r.jsx("div", { style: u, className: we(l), children: /* @__PURE__ */ r.jsx(ds, { className: we("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(In, { children: /* @__PURE__ */ r.jsx(hr, { width: Dn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    b,
    v === "top" && D,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((w) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => N(w), "aria-pressed": y.includes(w.id), children: [
      fr(new Date(w.start)),
      " – ",
      fr(new Date(w.end)),
      " (",
      w.status,
      ")"
    ] }) }, w.id)) }),
    v === "bottom" && D
  ] }) }) }) }) });
  return C === "list" ? L : /* @__PURE__ */ r.jsx("div", { style: u, className: we(l), children: /* @__PURE__ */ r.jsx(ds, { className: we("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(In, { children: /* @__PURE__ */ r.jsx(hr, { width: Dn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    b,
    v === "top" && D,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": $.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((w) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${w.specialty}`, className: "nhs-slot-matrix__session-header", children: w.specialty }, w.id))
      ] }),
      $.map((w) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": fr(new Date(w)), children: fr(new Date(w)) }),
        t.map((I) => {
          const j = T[w]?.[I.id];
          if (!j)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, I.id);
          const { slot: M, remaining: te } = j, V = y.includes(M.id), E = c ? c(M) : `Slot ${fr(new Date(M.start))} ${M.status}${te === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": M.status,
              className: we("nhs-slot-matrix__cell", V && "nhs-slot-matrix__cell--selected"),
              "aria-label": E,
              "aria-selected": V || void 0,
              onClick: () => N(M),
              children: te > 0 ? `${te} left` : "Full"
            },
            M.id
          );
        })
      ] }, w))
    ] }),
    v === "bottom" && D
  ] }) }) }) }) });
};
function ti(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function fr(e) {
  return `${ti(e.getHours())}:${ti(e.getMinutes())}`;
}
const Tp = ({
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
    /* @__PURE__ */ r.jsx(an, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, kv = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(ds, { children: /* @__PURE__ */ r.jsx(In, { children: e.map((o, s) => /* @__PURE__ */ r.jsx(
    hr,
    {
      width: Dn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ r.jsx(Tp, { ...o })
    },
    s
  )) }) }) });
}, Dp = Ct.forwardRef(
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
    bordered: g = !1,
    striped: v = !1,
    responsive: m = !1,
    tableType: p = "default"
  }, x) => {
    const C = Ue(null), P = Ue(null), S = Ue(null);
    Ct.useImperativeHandle(x, () => C.current, []);
    const [y, $] = He(0), [T, N] = He(0), [_, D] = He("headers"), [k, b] = He("browse"), L = t.length, w = e.length, I = Pe(() => !n || n.length === 0 ? e : [...e].sort((U, ae) => {
      for (const { key: W, direction: le } of n) {
        const Se = U[W], de = ae[W];
        if (Se == null && de == null) continue;
        if (Se == null) return 1;
        if (de == null) return -1;
        let fe = 0;
        if (typeof Se == "number" && typeof de == "number" ? fe = Se - de : fe = String(Se).localeCompare(String(de)), fe !== 0)
          return le === "asc" ? fe : -fe;
      }
      return 0;
    }), [e, n]), j = be((U, ae) => {
      setTimeout(() => {
        const W = C.current?.querySelector(
          `tbody tr:nth-child(${U + 1}) td:nth-child(${ae + 1})`
        );
        W && (W.focus(), typeof W.scrollIntoView == "function" && W.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), M = be((U) => {
      setTimeout(() => {
        const ae = C.current?.querySelector(`th:nth-child(${U + 1})`);
        ae && (ae.focus(), typeof ae.scrollIntoView == "function" && ae.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), te = be((U) => {
      a?.(U);
    }, [a]), V = be((U) => {
      s?.(U);
    }, [s]), E = be((U) => {
      const { key: ae } = U;
      switch (ae) {
        case "Enter":
          if (U.preventDefault(), _ === "headers" && k === "browse")
            b("navigate"), M(T);
          else if (_ === "headers" && k === "navigate") {
            const W = t[T];
            W && te(W.key);
          } else _ === "cells" && k === "browse" ? (b("navigate"), j(y, T)) : _ === "cells" && k === "navigate" && V(y);
          break;
        case "Escape":
          U.preventDefault(), (_ === "headers" && k === "navigate" || _ === "cells" && k === "navigate") && b("browse");
          break;
        case "ArrowLeft":
          if (U.preventDefault(), k === "navigate" || k === "browse" && _ === "headers") {
            if (_ === "headers") {
              const W = Math.max(0, T - 1);
              N(W), M(W);
            } else if (_ === "cells") {
              const W = Math.max(0, T - 1);
              N(W), j(y, W);
            }
          }
          break;
        case "ArrowRight":
          if (U.preventDefault(), k === "navigate" || k === "browse" && _ === "headers") {
            if (_ === "headers") {
              const W = Math.min(L - 1, T + 1);
              N(W), M(W);
            } else if (_ === "cells") {
              const W = Math.min(L - 1, T + 1);
              N(W), j(y, W);
            }
          }
          break;
        case "ArrowUp":
          if (U.preventDefault(), _ === "cells") {
            if (k === "browse") {
              const W = Math.max(0, y - 1);
              $(W), j(W, 0), N(0);
            } else if (k === "navigate")
              if (y > 0) {
                const W = y - 1;
                $(W), j(W, T);
              } else
                D("headers"), b("browse"), M(T);
          }
          break;
        case "ArrowDown":
          if (U.preventDefault(), _ === "headers" && k === "browse")
            D("cells"), $(0), N(0), j(0, 0);
          else if (_ === "cells") {
            const W = w - 1;
            if (k === "browse") {
              const le = Math.min(W, y + 1);
              $(le), j(le, 0), N(0);
            } else if (k === "navigate" && y < W) {
              const le = y + 1;
              $(le), j(le, T);
            }
          }
          break;
        case "Home":
          U.preventDefault(), _ === "headers" ? (N(0), M(0)) : _ === "cells" && (U.ctrlKey ? ($(0), N(0), j(0, 0)) : (N(0), j(y, 0)));
          break;
        case "End":
          if (U.preventDefault(), _ === "headers") {
            const W = L - 1;
            N(W), M(W);
          } else if (_ === "cells")
            if (U.ctrlKey) {
              const W = w - 1, le = L - 1;
              $(W), N(le), j(W, le);
            } else {
              const W = L - 1;
              N(W), j(y, W);
            }
          break;
        case " ":
          if (U.preventDefault(), _ === "headers" && k === "navigate") {
            const W = t[T];
            W && te(W.key);
          } else _ === "cells" && k === "navigate" && V(y);
          break;
      }
    }, [
      _,
      k,
      T,
      y,
      L,
      w,
      t,
      j,
      M,
      te,
      V
    ]);
    Ze(() => {
      const U = C.current;
      if (U)
        return U.addEventListener("keydown", E), () => U.removeEventListener("keydown", E);
    }, [E]);
    const O = we(
      "nhsuk-table",
      h,
      {
        "nhsuk-table--responsive": m,
        "nhsuk-table--bordered": g,
        "nhsuk-table--striped": v,
        "nhsuk-table--compact": p === "compact"
      },
      f
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: C,
        className: O,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": u,
        "aria-labelledby": c,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: P, role: "row", children: t.map((U, ae) => {
            const W = n?.find((de) => de.key === U.key), le = !!W, Se = _ === "headers" && T === ae;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: we("sortable-header", {
                  "sortable-header--focused": Se
                }),
                role: "columnheader",
                tabIndex: Se ? 0 : -1,
                onClick: () => te(U.key),
                onKeyDown: (de) => {
                  (de.key === "Enter" || de.key === " ") && (de.preventDefault(), te(U.key));
                },
                "aria-sort": le ? W?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: U.label }),
                  le && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((de) => de.key === U.key) + 1 }),
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
          /* @__PURE__ */ r.jsx("tbody", { ref: S, className: "nhsuk-table__body", role: "rowgroup", children: I.map((U, ae) => {
            const W = o === ae, le = _ === "cells" && y === ae;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: we("data-row", {
                  "data-row--selected": W,
                  "data-row--focused": le
                }),
                "aria-selected": W,
                children: t.map((Se, de) => {
                  const fe = Se.tableRenderer ? Se.tableRenderer(U) : Se.render ? Se.render(U) : U[Se.key], Z = _ === "cells" && y === ae && T === de, ne = () => typeof fe == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: fe ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: fe ? "Yes" : "No" })
                  ] }) : String(fe ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: we("data-cell", {
                        "data-cell--focused": Z
                      }),
                      tabIndex: Z ? 0 : -1,
                      onClick: () => V(ae),
                      children: ne()
                    },
                    Se.key
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
Dp.displayName = "AriaDataGrid";
const hl = ({
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
  const f = Ue(null), h = Ue(null), g = Ue(null), v = be((_, D) => {
    u || (h.current = D, _.dataTransfer.effectAllowed = "move", _.dataTransfer.setData("text/plain", D));
  }, [u]), m = be((_, D) => {
    u || h.current === D || (_.preventDefault(), _.dataTransfer.dropEffect = "move", g.current = D);
  }, [u]), p = be((_, D) => {
    if (u) return;
    _.preventDefault();
    const k = h.current;
    if (!k || k === D) return;
    const b = e.findIndex((w) => w.key === k), L = e.findIndex((w) => w.key === D);
    if (b !== -1 && L !== -1) {
      const w = [...e], [I] = w.splice(b, 1);
      w.splice(L, 0, I), n(w);
    }
    h.current = null, g.current = null;
  }, [u, e, n]), x = be(() => {
    h.current = null, g.current = null;
  }, []), C = be((_) => {
    const D = t.find((k) => k.key === _);
    return D ? D.label : _;
  }, [t]), P = be((_) => ["red", "orange", "blue", "aqua-green", "grey"][_] || "grey", []), S = be((_) => {
    if (u) return;
    const D = e.map(
      (k) => k.key === _ ? { ...k, direction: k.direction === "asc" ? "desc" : "asc" } : k
    );
    n(D);
  }, [e, n, u]), y = be((_) => {
    if (u) return;
    const D = e.filter((k) => k.key !== _);
    n(D);
  }, [e, n, u]), $ = be(() => {
    u || n([]);
  }, [n, u]), T = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const _ = e.map((D, k) => {
      const b = D.direction === "asc" ? "ascending" : "descending";
      return `${k + 1}. ${C(D.key)} (${b})`;
    });
    if (_.length === 1)
      return `Sorted by: ${_[0]}`;
    if (_.length === 2)
      return `Sorted by: ${_.join(" and ")}`;
    {
      const D = _.pop();
      return `Sorted by: ${_.join(", ")}, and ${D}`;
    }
  }, N = Pe(() => {
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
        children: T()
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
          "aria-describedby": N,
          children: e.map((_, D) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !u,
              onDragStart: (k) => v(k, _.key),
              onDragOver: (k) => m(k, _.key),
              onDrop: (k) => p(k, _.key),
              onDragEnd: x,
              onClick: () => S(_.key),
              style: { cursor: u ? "default" : "pointer" },
              title: u ? "" : `Click to toggle sort direction. Currently ${_.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": _.key,
              children: /* @__PURE__ */ r.jsx(
                Je,
                {
                  color: P(D),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => y(_.key),
                  disabled: u,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${D + 1}`, children: D + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: C(_.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (k) => {
                          k.stopPropagation(), S(_.key);
                        },
                        disabled: u,
                        "aria-label": `Toggle sort direction for ${C(_.key)}. Currently ${_.direction === "asc" ? "ascending" : "descending"}`,
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
          onClick: $,
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
function Ip(e, t) {
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
const xs = ar(function(t, n) {
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
    id: g,
    isLoading: v = !1,
    loadingComponent: m,
    error: p = null,
    errorComponent: x,
    "data-testid": C,
    actions: P,
    actionsMinGap: S = 16,
    forceActionsAbove: y = !1
  } = t, T = Ue(
    g || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, N = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), _ = `${T}-description`, D = `${T}-navigation-help`, {
    dataComparator: k = (A, Y) => JSON.stringify(A) === JSON.stringify(Y),
    filterFunction: b = (A) => A,
    booleanRenderer: L = (A) => A ? "✓" : "✗"
  } = a || {}, w = s !== void 0, I = s ?? 0, [j, M] = He({
    focusArea: "tabs",
    focusedTabIndex: I,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), te = Pe(() => ({
    selectedIndex: I,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [I]), [V, E] = Pi(Ip, te);
  Ze(() => {
    const A = V.tabLoadingStates.length, Y = o.length;
    A !== Y && E({ type: "ADJUST_ARRAYS", payload: { newLength: Y } });
  }, [o.length]), Ze(() => {
    w && E({ type: "SET_SELECTED_INDEX", payload: I });
  }, [I, w]), Ze(() => {
    M((A) => ({
      ...A,
      focusArea: "tabs",
      focusedTabIndex: V.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [V.selectedIndex]), Ze(() => {
    l && l(V.globalSelectedRowData);
  }, [V.globalSelectedRowData, l]);
  const O = be(
    (A, Y) => k(A, Y),
    [k]
  ), U = be(
    (A) => {
      A >= 0 && A < o.length && !o[A].disabled && (E({ type: "SET_SELECTED_INDEX", payload: A }), M((Y) => ({
        ...Y,
        focusedTabIndex: A,
        focusArea: "tabs"
      })), i?.(A));
    },
    [o, i]
  ), ae = Ue(!1), W = be(
    (A, Y) => {
      if (!Y?.force && !ae.current && A === 0) {
        ae.current = !0;
        return;
      }
      ae.current = !0, setTimeout(() => {
        const Q = le.current[A], ee = Q?.parentElement;
        if (Q && ee) {
          const J = Q.offsetLeft, se = Q.offsetWidth, me = ee.clientWidth, ve = J - me / 2 + se / 2;
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
  ), le = Ue([]), Se = Ue([]), de = be(
    (A, Y) => {
      const Q = V.sortConfig || [], ee = Q.find(
        (me) => me.key === Y
      );
      let J;
      ee ? ee.direction === "asc" ? J = Q.map(
        (me) => me.key === Y ? { ...me, direction: "desc" } : me
      ) : J = Q.filter(
        (me) => me.key !== Y
      ) : J = [...Q, { key: Y, direction: "asc" }], E({
        type: "SET_SORT",
        payload: J
      }), o[A].onSort?.(Y);
    },
    [V.sortConfig, o]
  ), fe = be(
    (A) => {
      setTimeout(() => {
        const Y = document.querySelector(
          `[data-tab-panel="${V.selectedIndex}"] th:nth-child(${A + 1})`
        );
        Y && Y.focus();
      }, 0);
    },
    [V.selectedIndex]
  ), Z = be(
    (A) => L(A),
    [L]
  ), ne = be(
    (A, Y) => {
      setTimeout(() => {
        const Q = document.querySelector(
          `[data-tab-panel="${V.selectedIndex}"] tbody tr:nth-child(${A + 1}) td:nth-child(${Y + 1})`
        );
        Q && Q.focus();
      }, 0);
    },
    [V.selectedIndex]
  );
  Ze(() => {
    j.isGridActive && (j.focusArea === "headers" ? setTimeout(() => {
      fe(j.focusedHeaderIndex);
    }, 0) : j.focusArea === "cells" && setTimeout(() => {
      ne(
        j.focusedRowIndex,
        j.focusedColumnIndex
      );
    }, 0));
  }, [
    j.focusArea,
    j.isGridActive,
    j.focusedHeaderIndex,
    j.focusedRowIndex,
    j.focusedColumnIndex,
    fe,
    ne
  ]), Ze(() => {
    W(V.selectedIndex);
  }, [V.selectedIndex, W]);
  const pe = be(
    (A, Y) => {
      const { key: Q } = A, ee = o[V.selectedIndex], J = ee?.columns.length || 0;
      switch (Q) {
        case "ArrowLeft":
          A.preventDefault();
          const se = Math.max(0, Y - 1);
          M((je) => ({
            ...je,
            focusedHeaderIndex: se
          })), fe(se);
          break;
        case "ArrowRight":
          A.preventDefault();
          const me = Math.min(J - 1, Y + 1);
          M((je) => ({
            ...je,
            focusedHeaderIndex: me
          })), fe(me);
          break;
        case "ArrowUp":
          A.preventDefault(), M((je) => ({
            ...je,
            focusArea: "tabs",
            focusedTabIndex: V.selectedIndex
          })), W(V.selectedIndex), le.current[V.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          A.preventDefault(), M((je) => ({
            ...je,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: Y,
            isGridActive: !0
          }));
          break;
        case "Home":
          A.preventDefault(), M((je) => ({ ...je, focusedHeaderIndex: 0 })), fe(0);
          break;
        case "End":
          A.preventDefault();
          const ve = J - 1;
          M((je) => ({
            ...je,
            focusedHeaderIndex: ve
          })), fe(ve);
          break;
        case "Enter":
        case " ":
          A.preventDefault();
          const ye = ee?.columns[Y]?.key;
          ye && de(V.selectedIndex, ye);
          break;
      }
    },
    [
      o,
      V.selectedIndex,
      de,
      M,
      fe,
      ne,
      le
    ]
  ), z = be(
    (A, Y, Q) => {
      const { key: ee } = A, J = o[V.selectedIndex], se = J?.data.length || 0, me = J?.columns.length || 0;
      switch (ee) {
        case "ArrowUp":
          if (A.preventDefault(), Y === 0)
            M((ge) => ({
              ...ge,
              focusArea: "headers",
              focusedHeaderIndex: Q,
              isGridActive: !1
            })), fe(Q);
          else {
            const ge = Y - 1;
            M((Fe) => ({
              ...Fe,
              focusedRowIndex: ge
            })), ne(ge, Q);
          }
          break;
        case "ArrowDown":
          A.preventDefault();
          const ve = Math.min(se - 1, Y + 1);
          M((ge) => ({
            ...ge,
            focusedRowIndex: ve
          })), ne(ve, Q);
          break;
        case "ArrowLeft":
          A.preventDefault();
          const ye = Math.max(0, Q - 1);
          M((ge) => ({
            ...ge,
            focusedColumnIndex: ye
          })), ne(Y, ye);
          break;
        case "ArrowRight":
          A.preventDefault();
          const je = Math.min(me - 1, Q + 1);
          M((ge) => ({
            ...ge,
            focusedColumnIndex: je
          })), ne(Y, je);
          break;
        case "Home":
          A.preventDefault(), A.ctrlKey ? (M((ge) => ({
            ...ge,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), ne(0, 0)) : (M((ge) => ({ ...ge, focusedColumnIndex: 0 })), ne(Y, 0));
          break;
        case "End":
          if (A.preventDefault(), A.ctrlKey) {
            const ge = se - 1, Fe = me - 1;
            M((Ge) => ({
              ...Ge,
              focusedRowIndex: ge,
              focusedColumnIndex: Fe
            })), ne(ge, Fe);
          } else {
            const ge = me - 1;
            M((Fe) => ({
              ...Fe,
              focusedColumnIndex: ge
            })), ne(Y, ge);
          }
          break;
        case "Enter":
        case " ":
          if (A.preventDefault(), J && J.data[Y]) {
            const ge = J.data.some(
              (nt) => "ews_data" in nt
            ) ? b(J.data, V.filters) : J.data, Fe = V.sortConfig;
            let Ge = ge;
            if (Fe && Fe.length > 0 && (Ge = [...ge].sort((nt, Ye) => {
              for (const { key: dt, direction: At } of Fe) {
                let mt = nt[dt], Dt = Ye[dt];
                const it = J.columns.find(
                  (jt) => jt.key === dt
                );
                if (it?.tableRenderer ? (mt = it.tableRenderer(nt), Dt = it.tableRenderer(Ye)) : it?.render && (mt = it.render(nt), Dt = it.render(Ye)), mt == null && Dt == null) continue;
                if (mt == null) return At === "asc" ? -1 : 1;
                if (Dt == null) return At === "asc" ? 1 : -1;
                let Oe = 0;
                if (typeof mt == "number" && typeof Dt == "number" ? Oe = mt - Dt : Oe = String(mt).localeCompare(
                  String(Dt),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), Oe !== 0)
                  return At === "asc" ? Oe : -Oe;
              }
              return 0;
            })), Ge[Y]) {
              const nt = Ge[Y], dt = V.globalSelectedRowData && O(V.globalSelectedRowData, nt) ? null : nt;
              E({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: dt
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
      b,
      O,
      E,
      M,
      fe,
      ne
    ]
  ), ce = be(
    (A, Y) => b(A, Y),
    [b]
  );
  if (Mi(
    n,
    () => ({
      selectTab: (A) => {
        A >= 0 && A < o.length && (E({ type: "SET_SELECTED_INDEX", payload: A }), i?.(A));
      },
      refreshData: (A) => {
        console.log("Refreshing data for tab:", A ?? "all");
      },
      exportData: (A) => {
        const Y = A ?? V.selectedIndex, Q = o[Y];
        return Q ? Q.data : [];
      },
      getSelectedRows: (A) => V.globalSelectedRowData ? [] : [],
      clearSelection: (A) => {
        E({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (A) => {
        E({ type: "SET_FILTERS", payload: A });
      }
    }),
    [V.selectedIndex, V.selectedRows, o, i]
  ), v)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`,
        "data-testid": C,
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
        "data-testid": C,
        children: x || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: p })
        ] })
      }
    );
  const F = Ue(null), R = Ue(null), K = Ue(null), [oe, ie] = He(!0);
  Ze(() => {
    if (!P) {
      ie(!1);
      return;
    }
    if (y) {
      ie(!1);
      return;
    }
    function A() {
      if (!F.current || !R.current || !K.current) return;
      const ee = F.current.clientWidth, J = Array.from(
        R.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), se = J.reduce((je, ge) => je + ge.offsetWidth, 0), me = K.current.offsetWidth, ve = Math.max(8 * (J.length - 1), 0), ye = se + ve + me + S <= ee;
      ie(ye);
    }
    const Y = requestAnimationFrame(() => A()), Q = new ResizeObserver(() => A());
    return F.current && Q.observe(F.current), R.current && Q.observe(R.current), () => {
      cancelAnimationFrame(Y), Q.disconnect();
    };
  }, [P, S, y, o.length]);
  const he = K, ue = be(() => he.current ? Array.from(
    he.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((A) => !A.hasAttribute("disabled")) : [], []), H = be(
    (A) => {
      const Y = ue();
      if (!Y.length) return;
      const Q = Math.max(0, Math.min(A, Y.length - 1));
      Y[Q].focus(), M((ee) => ({ ...ee, focusArea: "actions", focusedActionIndex: Q }));
    },
    [ue]
  ), B = be(() => H(0), [H]), q = be(
    (A, Y) => {
      const { key: Q } = A, ee = o.length - 1;
      switch (Q) {
        case "ArrowUp": {
          P && !oe && (A.preventDefault(), B());
          break;
        }
        case "ArrowLeft": {
          A.preventDefault();
          const J = Y > 0 ? Y - 1 : ee;
          U(J), W(J), le.current[J]?.focus();
          break;
        }
        case "ArrowRight": {
          if (A.preventDefault(), Y === ee && P && oe) {
            B();
            return;
          }
          const J = Y < ee ? Y + 1 : 0;
          U(J), W(J), le.current[J]?.focus();
          break;
        }
        case "ArrowDown": {
          A.preventDefault(), M((J) => ({
            ...J,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          A.preventDefault(), U(0), W(0), le.current[0]?.focus();
          break;
        }
        case "End": {
          A.preventDefault(), U(ee), W(ee), le.current[ee]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          A.preventDefault(), U(Y);
          break;
        }
        case "Tab": {
          !A.shiftKey && Y === ee && P && oe && B();
          break;
        }
      }
    },
    [o.length, U, W, P, oe, B]
  ), X = be((A) => {
    const { key: Y } = A, Q = ue();
    if (!Q.length) return;
    const ee = Q.findIndex((J) => J === document.activeElement);
    switch (Y) {
      case "ArrowLeft": {
        if (oe)
          if (ee > 0)
            A.preventDefault(), H(ee - 1);
          else {
            A.preventDefault();
            const J = o.length - 1;
            U(J), W(J), le.current[J]?.focus(), M((se) => ({ ...se, focusArea: "tabs", focusedTabIndex: J }));
          }
        break;
      }
      case "ArrowRight": {
        oe && (ee < Q.length - 1 ? (A.preventDefault(), H(ee + 1)) : (A.preventDefault(), U(0), W(0), le.current[0]?.focus(), M((J) => ({ ...J, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (oe)
          A.preventDefault(), M((J) => ({ ...J, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          A.preventDefault();
          const J = V.selectedIndex;
          le.current[J]?.focus(), M((se) => ({ ...se, focusArea: "tabs", focusedTabIndex: J }));
        }
        break;
      }
    }
  }, [ue, oe, H, o.length, U, W, V.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${d}`,
      id: g,
      "data-testid": C,
      ref: F,
      children: [
        c && !N && /* @__PURE__ */ r.jsx("div", { id: _, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: D,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          hl,
          {
            sortConfig: V.sortConfig || [],
            columns: o.flatMap(
              (A) => A.columns.map((Y) => ({ key: Y.key, label: Y.label }))
            ).filter(
              (A, Y, Q) => Q.findIndex((ee) => ee.key === A.key) === Y
              // Remove duplicates
            ),
            onSortChange: (A) => {
              E({ type: "SET_SORT", payload: A });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        P && !oe && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: K,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: X,
            children: P
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${oe ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": u,
              "aria-describedby": c ? N ? c : _ : D,
              "aria-orientation": h,
              className: "aria-tabs-datagrid__tabs",
              ref: R,
              children: o.map((A, Y) => {
                const Q = Y === V.selectedIndex, ee = A.disabled || f;
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
                      le.current[Y] = J;
                    },
                    onClick: () => U(Y),
                    onKeyDown: (J) => q(J, Y),
                    disabled: ee,
                    className: [
                      "aria-tabs-datagrid__tab",
                      Q ? "aria-tabs-datagrid__tab--selected" : "",
                      ee ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: A.label }),
                      V.tabLoadingStates[Y] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      V.tabErrors[Y] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  A.id
                );
              })
            }
          ),
          P && oe && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: K,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: X,
              children: P
            }
          )
        ] }),
        o.map((A, Y) => {
          const Q = Y === V.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${A.id}`,
              "aria-labelledby": `tab-${A.id}`,
              tabIndex: 0,
              hidden: !Q,
              ref: (ee) => {
                Se.current[Y] = ee;
              },
              className: `aria-tabs-datagrid__panel ${A.className || ""}`,
              "data-tab-panel": Y,
              children: Q && (() => {
                const ee = A.data.some(
                  (se) => "ews_data" in se
                ) ? ce(A.data, V.filters) : A.data, J = Pe(() => {
                  const se = V.sortConfig;
                  return !se || se.length === 0 ? ee : [...ee].sort((me, ve) => {
                    for (const { key: ye, direction: je } of se) {
                      let ge = me[ye], Fe = ve[ye];
                      const Ge = A.columns.find(
                        (Ye) => Ye.key === ye
                      );
                      if (Ge?.tableRenderer ? (ge = Ge.tableRenderer(me), Fe = Ge.tableRenderer(ve)) : Ge?.render && (ge = Ge.render(me), Fe = Ge.render(ve)), ge == null && Fe == null) continue;
                      if (ge == null) return 1;
                      if (Fe == null) return -1;
                      let nt = 0;
                      if (typeof ge == "number" && typeof Fe == "number" ? nt = ge - Fe : typeof ge == "boolean" && typeof Fe == "boolean" ? nt = ge === Fe ? 0 : ge ? 1 : -1 : nt = String(ge).localeCompare(
                        String(Fe),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), nt !== 0)
                        return je === "asc" ? nt : -nt;
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
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: A.columns.map((se, me) => {
                        const ve = V.sortConfig?.find(
                          (ge) => ge.key === se.key
                        ), ye = !!ve, je = j.focusArea === "headers" && j.focusedHeaderIndex === me;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${je ? "sortable-header--focused" : ""} ${ye ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: je ? 0 : -1,
                            onClick: () => de(Y, se.key),
                            onKeyDown: (ge) => pe(ge, me),
                            "aria-sort": ye ? ve?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: se.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${ye ? `sort-indicator--${ve?.direction}` : ""}`,
                                  children: [
                                    V.sortConfig && V.sortConfig.length > 0 && V.sortConfig.findIndex(
                                      (ge) => ge.key === se.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${V.sortConfig.findIndex((ge) => ge.key === se.key) + 1}`,
                                        "data-priority": V.sortConfig.findIndex(
                                          (ge) => ge.key === se.key
                                        ) + 1,
                                        title: `Sort priority: ${V.sortConfig.findIndex((ge) => ge.key === se.key) + 1}`,
                                        children: V.sortConfig.findIndex(
                                          (ge) => ge.key === se.key
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
                          se.key
                        );
                      }) }) }),
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: J.map((se, me) => {
                        const ve = V.globalSelectedRowData && O(V.globalSelectedRowData, se), ye = j.focusArea === "cells" && j.focusedRowIndex === me;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ve ? "data-row--selected" : ""} ${ye ? "data-row--focused" : ""}`,
                            "aria-selected": ve,
                            children: A.columns.map((je, ge) => {
                              const Fe = se[je.key];
                              let Ge;
                              je.tableRenderer ? Ge = je.tableRenderer(se) : je.render ? Ge = je.render(se) : Ge = Fe;
                              const nt = j.focusArea === "cells" && j.focusedRowIndex === me && j.focusedColumnIndex === ge, Ye = () => {
                                if (je.customRenderer) {
                                  const dt = je.customRenderer(
                                    Fe,
                                    se
                                  );
                                  return /* @__PURE__ */ r.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: dt
                                    }
                                  );
                                }
                                return typeof Fe == "boolean" && Ge === Fe ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  Z(Fe),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: Fe ? "Yes" : "No" })
                                ] }) : Ct.isValidElement(Ge) || typeof Ge != "object" ? Ge ?? "" : Ge;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${nt ? "data-cell--focused" : ""}`,
                                  tabIndex: nt ? 0 : -1,
                                  onClick: () => {
                                    const At = V.globalSelectedRowData && O(
                                      V.globalSelectedRowData,
                                      se
                                    ) ? null : se;
                                    E({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: At
                                    });
                                  },
                                  onKeyDown: (dt) => z(dt, me, ge),
                                  children: Ye()
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
            A.id
          );
        })
      ]
    }
  );
}), Mr = {
  asc: "↑",
  desc: "↓"
}, $p = (e) => [...e].sort((t, n) => t.priority - n.priority);
function Qa(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function Mp(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Pp(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function Fp(e, t) {
  const n = t.find((o) => o.id === e), a = Mp(t);
  return n ? n.priority < a : !1;
}
const Cv = ({
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
  const d = Pe(() => $p(e), [e]), f = be((C) => {
    if (l) return;
    const P = e.map(
      (S) => S.id === C ? { ...S, direction: S.direction === "asc" ? "desc" : "asc" } : S
    );
    t(P);
  }, [e, t, l]), h = be((C) => {
    if (l) return;
    const P = e.findIndex((y) => y.id === C);
    if (P <= 0) return;
    const S = [...e];
    [S[P], S[P - 1]] = [S[P - 1], S[P]], t(Qa(S));
  }, [e, t, l]), g = be((C) => {
    if (l) return;
    const P = e.findIndex((y) => y.id === C);
    if (P >= e.length - 1 || P === -1) return;
    const S = [...e];
    [S[P], S[P + 1]] = [S[P + 1], S[P]], t(Qa(S));
  }, [e, t, l]), v = be((C) => {
    if (l) return;
    const P = e.filter((S) => S.id !== C);
    t(Qa(P));
  }, [e, t, l]), m = be(() => {
    l || t([]);
  }, [t, l]), p = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const C = d.map((P, S) => {
      const y = P.direction === "asc" ? "ascending" : "descending";
      return `${S + 1}. ${P.label} (${y})`;
    });
    if (C.length === 1)
      return `Sorted by: ${C[0]}`;
    if (C.length === 2)
      return `Sorted by: ${C.join(" and ")}`;
    {
      const P = C.pop();
      return `Sorted by: ${C.join(", ")}, and ${P}`;
    }
  }, x = Pe(() => {
    const C = ["sort-description"];
    return i && C.push("sort-help"), c && C.push(c), C.join(" ");
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
        "aria-describedby": x,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((C) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ r.jsx(
                Je,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => v(C.id),
                  disabled: l,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-priority", children: C.priority + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: C.label }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(C.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${C.label}. Currently ${C.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: C.direction === "asc" ? Mr.asc : Mr.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h(C.id),
                          disabled: l || !Pp(C.id, e),
                          "aria-label": `Move ${C.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => g(C.id),
                          disabled: l || !Fp(C.id, e),
                          "aria-label": `Move ${C.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            C.id
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
      Mr.asc,
      "/",
      Mr.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, co = (e, t) => t.map((n) => ({
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
})), bs = [
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
], Lp = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Ap = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, Rp = (e) => {
  if (typeof e == "boolean") {
    const n = bs.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = bs.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, Ep = (e) => `${e.name}-${e.bed_name}`, Bp = () => ({
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
}), Nv = (e) => {
  const t = Bp();
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
}, Hp = {
  dataComparator: Lp,
  filterFunction: Ap,
  booleanRenderer: Rp,
  getDataId: Ep
};
function ni(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: u,
    fieldRenderers: c = {},
    classPrefix: d = "adaptive-card"
  } = n, f = t.find((P) => P.key === a), h = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", g = () => o.filter((S) => !i.includes(S) && e[S]).slice(0, 3).map((S) => {
    const y = t.find((_) => _.key === S), $ = e[S], T = c[S] ? c[S]($, e) : y?.cardRenderer ? y.cardRenderer(e) : y?.render ? y.render(e) : $;
    return `${y?.label || S}: ${T}`;
  }).join(" • "), v = () => s.length === 0 ? null : s.filter((P) => e[P.fieldKey] !== void 0).map((P) => {
    const S = e[P.fieldKey], y = P.render ? P.render(S, e) : S;
    return `<span class="nhsuk-tag ${Op(P, S)}">${y}</span>`;
  }).join(""), m = () => u ? u(e) : l?.(e) === "high" ? "primary" : "default", p = v(), x = g(), C = p ? `${x}${p ? `<div class="adaptive-card__badges">${p}</div>` : ""}` : x;
  return {
    variant: m(),
    heading: String(h),
    descriptionHtml: C,
    className: `adaptive-card ${d}`,
    "aria-label": `Record for ${h}`
  };
}
function Op(e, t) {
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
const Up = {
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
}, ml = ({
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
            Je,
            {
              color: zp(vl(d)),
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
              onClick: (g) => {
                g.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ r.jsx(
            bt,
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
            bt,
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
}, gl = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        Je,
        {
          color: Vp(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ r.jsxs(
        Je,
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
] }), xl = ({
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
        Je,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ r.jsxs(
        Je,
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
] }), bl = ({
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
            s !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Wp(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ r.jsxs(
            Je,
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
function vl(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Wp(e) {
  return vl(e);
}
function zp(e) {
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
function Vp(e) {
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
const Gp = [
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
], yl = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Yp = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, qp = (e) => yl(e) === "high" || e.status === "urgent" ? "primary" : "default", Xp = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Kp = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Gp,
  hiddenFields: [],
  getPriority: yl,
  getStatus: Yp,
  getVariant: qp,
  fieldRenderers: Xp,
  classPrefix: "adaptive-card--healthcare"
}, Jp = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", o = n.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ r.jsx(
      ml,
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
      gl,
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
      xl,
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
      bl,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, Zp = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, ri = {
  name: "healthcare",
  defaultCardConfig: Kp,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Jp,
  fieldTypes: Zp
};
function ai(e) {
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
function si(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function Qp(e, t) {
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
function eh(e, t) {
  const [n, a] = He("cards");
  return Ze(() => {
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
function th(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function nh(e, t, n, a) {
  const o = a ? { ...a.defaultCardConfig, ...n } : { ...Up, ...n };
  if (a && a.cardTemplates) {
    const s = th(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), ni(e, t, o);
}
const jv = ({
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
  ariaLabel: g = "Data grid",
  ariaDescription: v,
  orientation: m = "horizontal",
  id: p,
  disabled: x = !1,
  className: C,
  ...P
}) => {
  const S = eh(e, t), y = f !== void 0, $ = f ?? 0, T = Pe(() => {
    if (c.some(
      (B) => B.data && B.data.length > 0 && si(B.data)
    )) {
      const B = ai(n);
      return {
        ...ri.defaultCardConfig,
        ...B
      };
    } else
      return ai(n);
  }, [n, c]), N = Pe(() => c.some(
    (B) => B.data && B.data.length > 0 && si(B.data)
  ) ? ri : void 0, [c]), _ = Pe(() => ({
    selectedIndex: $,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [$, c.length]), [D, k] = Pi(Qp, _), b = Ue([]), L = Ue([]), w = Ue([]), I = Ue(null), [j, M] = He({
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
  }), te = be((H) => {
    if (!H.current)
      return { columns: 1, rows: 0 };
    const B = H.current, q = B.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (q.length === 0)
      return { columns: 1, rows: 0 };
    const X = B.offsetWidth, Y = q[0].offsetWidth, Q = Math.floor(X / Y) || 1, ee = Math.ceil(q.length / Q);
    return { columns: Q, rows: ee };
  }, []), V = be((H, B) => ({
    row: Math.floor(H / B),
    col: H % B
  }), []), E = be((H, B, q) => H * q + B, []), O = be((H, B, q, X) => {
    const { row: A, col: Y } = V(H, X);
    let Q = A, ee = Y;
    switch (B) {
      case "up":
        Q = Math.max(0, A - 1);
        break;
      case "down":
        Q = Math.min(Math.floor((q - 1) / X), A + 1);
        break;
      case "left":
        ee = Math.max(0, Y - 1);
        break;
      case "right":
        ee = Math.min(X - 1, Y + 1);
        break;
    }
    const J = E(Q, ee, X);
    return Math.min(J, q - 1);
  }, [V, E]);
  Ze(() => {
    j.isCardNavigationActive && j.focusedCardElementIndex >= 0 && j.cardElements.length > 0 && setTimeout(() => {
      const H = j.cardElements[j.focusedCardElementIndex];
      H && (H.element.focus(), H.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [j.isCardNavigationActive, j.focusedCardElementIndex, j.cardElements.length]), Ze(() => {
    const H = () => {
      if (S === "cards" && I.current) {
        const { columns: X, rows: A } = te(I);
        M((Y) => ({
          ...Y,
          gridColumns: X,
          gridRows: A
        }));
      }
    }, B = setTimeout(H, 200), q = () => {
      setTimeout(H, 100);
    };
    return window.addEventListener("resize", q), () => {
      clearTimeout(B), window.removeEventListener("resize", q);
    };
  }, [S, c, te]), Ze(() => {
    const H = D.tabLoadingStates.length, B = c.length;
    H !== B && k({ type: "ADJUST_ARRAYS", payload: { newLength: B } });
  }, [c.length, D.tabLoadingStates.length]), Ze(() => {
    y && f !== D.selectedIndex && k({ type: "SET_SELECTED_INDEX", payload: f });
  }, [y, f, D.selectedIndex]);
  const U = be((H) => {
    H >= 0 && H < c.length && !c[H].disabled && (k({ type: "SET_SELECTED_INDEX", payload: H }), h?.(H));
  }, [c, h]), ae = be((H) => {
    console.log("Card selected:", H), k({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: H
    });
  }, []), W = be((H) => {
    const B = L.current[H];
    B && (B.focus(), B.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), le = be((H) => {
    const B = L.current[H];
    if (!B) return [];
    const q = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), X = B.querySelectorAll(q);
    return Array.from(X).map((A, Y) => ({
      id: A.id || `card-${H}-element-${Y}`,
      element: A,
      label: A.getAttribute("aria-label") || A.textContent?.trim() || A.getAttribute("title") || `Element ${Y + 1}`,
      type: A.tagName.toLowerCase() === "button" ? "button" : A.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(A.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), Se = Ue(null), de = be((H) => {
    const B = Se.current;
    if (!B) return;
    const q = document.createElement("div");
    q.setAttribute("aria-live", "polite"), q.setAttribute("aria-atomic", "true"), q.className = "sr-only", q.textContent = H, B.appendChild(q), setTimeout(() => {
      B.contains(q) && B.removeChild(q);
    }, 1e3);
  }, []), fe = be((H) => {
    const B = H.filter((X) => X.sortable !== !1), q = [
      { value: "", label: "Sort by..." }
    ];
    return B.forEach((X) => {
      const A = X.label || X.key;
      X.key === "name" ? q.push(
        { value: `${X.key}-asc`, label: `${A} (A-Z)` },
        { value: `${X.key}-desc`, label: `${A} (Z-A)` }
      ) : X.key === "ews_score" || X.key.includes("score") ? q.push(
        { value: `${X.key}-desc`, label: `${A} (High-Low)` },
        { value: `${X.key}-asc`, label: `${A} (Low-High)` }
      ) : X.key === "age" || X.key.includes("date") || X.key.includes("time") ? q.push(
        { value: `${X.key}-desc`, label: `${A} (Oldest-Youngest)` },
        { value: `${X.key}-asc`, label: `${A} (Youngest-Oldest)` }
      ) : q.push(
        { value: `${X.key}-asc`, label: `${A} (A-Z)` },
        { value: `${X.key}-desc`, label: `${A} (Z-A)` }
      );
    }), q;
  }, []), Z = be((H, B) => B ? [...H].sort((q, X) => {
    const A = q[B.key], Y = X[B.key];
    if (A == null && Y == null) return 0;
    if (A == null) return 1;
    if (Y == null) return -1;
    const Q = Number(A), ee = Number(Y);
    if (!isNaN(Q) && !isNaN(ee))
      return B.direction === "asc" ? Q - ee : ee - Q;
    const J = String(A).toLowerCase(), se = String(Y).toLowerCase(), me = J.localeCompare(se);
    return B.direction === "asc" ? me : -me;
  }) : H, []), ne = be((H) => {
    if (!H) {
      M((J) => ({ ...J, cardSortConfig: null })), de("Card sorting cleared");
      return;
    }
    const [B, q] = H.split("-"), X = { key: B, direction: q };
    M((J) => ({ ...J, cardSortConfig: X }));
    const Q = c[D.selectedIndex]?.columns.find((J) => J.key === B)?.label || B;
    de(`Cards sorted by ${Q} in ${q === "asc" ? "ascending" : "descending"} order`);
  }, [c, D.selectedIndex, de]), pe = be((H) => {
    const X = c[D.selectedIndex]?.columns.find((Y) => Y.key === H.key)?.label || H.key, A = H.direction === "asc" ? "ascending" : "descending";
    return `${X} (${A})`;
  }, [c, D.selectedIndex]), z = be((H) => {
    const B = c[D.selectedIndex];
    if (o) {
      const q = D.sortConfig;
      return !q || q.length === 0 ? H : [...H].sort((X, A) => {
        for (const { key: Y, direction: Q } of q) {
          let ee = X[Y], J = A[Y];
          const se = B?.columns.find((Fe) => Fe.key === Y);
          if (se?.cardRenderer ? (ee = se.cardRenderer(X), J = se.cardRenderer(A)) : se?.render && (ee = se.render(X), J = se.render(A)), ee == null && J == null) continue;
          if (ee == null) return Q === "asc" ? -1 : 1;
          if (J == null) return Q === "asc" ? 1 : -1;
          const me = Number(ee), ve = Number(J);
          if (!isNaN(me) && !isNaN(ve)) {
            const Fe = me - ve;
            if (Fe !== 0) return Q === "asc" ? Fe : -Fe;
            continue;
          }
          const ye = String(ee).toLowerCase(), je = String(J).toLowerCase(), ge = ye.localeCompare(je);
          if (ge !== 0) return Q === "asc" ? ge : -ge;
        }
        return 0;
      });
    } else
      return Z(H, j.cardSortConfig);
  }, [o, D.sortConfig, j.cardSortConfig, Z, c, D.selectedIndex]), ce = be((H, B) => {
    const q = le(H), X = q[B];
    if (X) {
      X.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const A = `Focused on ${X.label}, ${X.type} ${B + 1} of ${q.length} within card`;
      de(A);
    }
  }, [le, de]), F = be((H) => {
    b.current[H]?.focus();
  }, []), R = be(() => {
    const H = w.current[0];
    if (!H) return [];
    const B = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), q = H.querySelectorAll(B);
    return Array.from(q);
  }, []), K = be((H) => {
    if (H === 0) {
      const B = w.current[0], q = B?.querySelector(".sort-controls-row");
      if (q) {
        q.setAttribute("tabindex", "-1"), q.focus();
        const A = `Sort controls group with ${R().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        de(A);
      } else B && B.focus();
    } else {
      const B = R(), q = H - 1, X = B[q];
      if (X) {
        X.focus();
        const A = X.tagName.toLowerCase() === "select", Y = X.tagName.toLowerCase() === "button", Q = A ? "dropdown" : Y ? "button" : "control", ee = A ? ". Use Space key to open dropdown" : "", J = `${Q} ${q + 1} of ${B.length}${ee}`;
        de(J);
      }
    }
  }, [R, de]), oe = be((H, B) => {
    const { key: q } = H, X = c[D.selectedIndex], A = X?.data.length || 0;
    if (q === "ArrowLeft" && H.shiftKey) {
      H.preventDefault(), H.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (q === "ArrowRight" && H.shiftKey) {
      H.preventDefault(), H.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!j.isCardNavigationActive) {
      switch (q) {
        case "ArrowUp":
          if (H.preventDefault(), B === 0)
            M((J) => ({ ...J, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), K(0);
          else {
            const J = O(B, "up", A, j.gridColumns);
            J !== B && (M((se) => ({ ...se, focusedCardIndex: J })), W(J), de(`Moved to card ${J + 1} of ${A}`));
          }
          break;
        case "ArrowDown":
          H.preventDefault();
          const Y = O(B, "down", A, j.gridColumns);
          Y !== B && (M((J) => ({ ...J, focusedCardIndex: Y })), W(Y), de(`Moved to card ${Y + 1} of ${A}`));
          break;
        case "ArrowLeft":
          H.preventDefault();
          const Q = O(B, "left", A, j.gridColumns);
          Q !== B ? (M((J) => ({ ...J, focusedCardIndex: Q })), W(Q), de(`Moved to card ${Q + 1} of ${A}`)) : D.selectedIndex > 0 && (k({ type: "SET_SELECTED_INDEX", payload: D.selectedIndex - 1 }), M((J) => ({ ...J, focusArea: "tabs" })), setTimeout(() => F(D.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          H.preventDefault();
          const ee = O(B, "right", A, j.gridColumns);
          ee !== B ? (M((J) => ({ ...J, focusedCardIndex: ee })), W(ee), de(`Moved to card ${ee + 1} of ${A}`)) : D.selectedIndex < c.length - 1 && (k({ type: "SET_SELECTED_INDEX", payload: D.selectedIndex + 1 }), M((J) => ({ ...J, focusArea: "tabs" })), setTimeout(() => F(D.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (X?.data[B]) {
            H.preventDefault(), M((se) => ({
              ...se,
              selectedCardIndex: B
            }));
            const J = le(B);
            J.length > 0 ? (M((se) => ({
              ...se,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: J,
              selectedCardIndex: B
              // Ensure selection is maintained
            })), de(`Card ${B + 1} selected and navigation activated. ${J.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : de(`Card ${B + 1} selected.`);
          }
          break;
        case " ":
          if (X?.data[B]) {
            H.preventDefault(), M((se) => ({
              ...se,
              selectedCardIndex: se.selectedCardIndex === B ? -1 : B
            }));
            const J = j.selectedCardIndex === B;
            de(`Card ${B + 1} ${J ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (q) {
      case "ArrowUp":
      case "ArrowLeft":
        H.preventDefault();
        const Y = Math.max(0, j.focusedCardElementIndex - 1);
        M((se) => ({ ...se, focusedCardElementIndex: Y })), ce(B, Y);
        break;
      case "ArrowDown":
      case "ArrowRight":
        H.preventDefault();
        const Q = Math.min(j.cardElements.length - 1, j.focusedCardElementIndex + 1);
        M((se) => ({ ...se, focusedCardElementIndex: Q })), ce(B, Q);
        break;
      case "Enter":
        H.preventDefault();
        const ee = j.cardElements[j.focusedCardElementIndex];
        ee && (ee.element.click(), de(`Activated ${ee.label}`));
        break;
      case " ":
        H.preventDefault();
        const J = j.cardElements[j.focusedCardElementIndex];
        if (J) {
          const se = new MouseEvent("dblclick", { bubbles: !0 });
          J.element.dispatchEvent(se), de(`Double-clicked ${J.label}`);
        }
        break;
      case "Escape":
        H.preventDefault(), M((se) => ({
          ...se,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => W(B), 0), de("Exited card navigation, returned to card level");
        break;
      case "Home":
        H.preventDefault(), j.cardElements.length > 0 && (M((se) => ({ ...se, focusedCardElementIndex: 0 })), ce(B, 0));
        break;
      case "End":
        if (H.preventDefault(), j.cardElements.length > 0) {
          const se = j.cardElements.length - 1;
          M((me) => ({ ...me, focusedCardElementIndex: se })), ce(B, se);
        }
        break;
    }
  }, [j, D.selectedIndex, c, ae, W, F, M, le, ce, de]), ie = be((H) => {
    const B = b.current[H], q = B?.parentElement;
    if (!B || !q) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const X = B.getBoundingClientRect(), A = q.getBoundingClientRect();
    X.left >= A.left && X.right <= A.right || (console.log("Tab not visible, scrolling into view (mobile)"), B.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), he = be((H, B) => {
    if (S !== "cards")
      return;
    const { key: q } = H;
    switch (q) {
      case "ArrowLeft":
        H.preventDefault();
        const X = B > 0 ? B - 1 : c.length - 1;
        U(X), M((ee) => ({ ...ee, focusedTabIndex: X })), b.current[X]?.focus(), ie(X);
        break;
      case "ArrowRight":
        H.preventDefault();
        const A = B < c.length - 1 ? B + 1 : 0;
        U(A), M((ee) => ({ ...ee, focusedTabIndex: A })), b.current[A]?.focus(), ie(A);
        break;
      case "ArrowDown":
        H.preventDefault();
        const Y = c[D.selectedIndex];
        Y && Y.columns && Y.columns.length > 0 ? (M((ee) => ({
          ...ee,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), K(0)) : (M((ee) => ({
          ...ee,
          focusArea: "cards",
          focusedCardIndex: 0
        })), W(0));
        break;
      case "Home":
        H.preventDefault(), U(0), M((ee) => ({ ...ee, focusedTabIndex: 0 })), b.current[0]?.focus(), ie(0);
        break;
      case "End":
        H.preventDefault();
        const Q = c.length - 1;
        U(Q), M((ee) => ({ ...ee, focusedTabIndex: Q })), b.current[Q]?.focus(), ie(Q);
        break;
      case "Enter":
      case " ":
        H.preventDefault(), U(B);
        break;
    }
  }, [c.length, U, S, W, M, ie]), ue = be((H, B) => {
    if (S !== "cards")
      return;
    const { key: q } = H, X = c[D.selectedIndex];
    if (B === 0 && !j.isSortControlsActive) {
      switch (q) {
        case "ArrowUp":
          H.preventDefault(), M((Y) => ({
            ...Y,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), F(D.selectedIndex);
          break;
        case "ArrowDown":
          H.preventDefault(), X?.data && X.data.length > 0 && (M((Y) => ({
            ...Y,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), W(0));
          break;
        case "Enter":
        case " ":
          H.preventDefault();
          const A = R();
          if (A.length > 0) {
            M((Q) => ({
              ...Q,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), K(1);
            const Y = `Entered sort controls navigation mode. ${A.length} controls available. Use arrow keys to navigate between controls.`;
            de(Y);
          }
          break;
        case "Escape":
          H.preventDefault(), M((Y) => ({
            ...Y,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), F(D.selectedIndex);
          break;
      }
      return;
    }
    if (j.isSortControlsActive) {
      const Y = R().length;
      switch (q) {
        case "ArrowLeft":
          H.preventDefault();
          const Q = j.focusedSortControlIndex > 1 ? j.focusedSortControlIndex - 1 : Y;
          M((J) => ({ ...J, focusedSortControlIndex: Q })), K(Q);
          break;
        case "ArrowRight":
          H.preventDefault();
          const ee = j.focusedSortControlIndex < Y ? j.focusedSortControlIndex + 1 : 1;
          M((J) => ({ ...J, focusedSortControlIndex: ee })), K(ee);
          break;
        case "ArrowDown":
          if (H.preventDefault(), j.isSortControlsActive) {
            const J = j.focusedSortControlIndex < Y ? j.focusedSortControlIndex + 1 : 1;
            M((se) => ({ ...se, focusedSortControlIndex: J })), K(J);
          } else
            X?.data && X.data.length > 0 && (M((J) => ({
              ...J,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), W(0));
          break;
        case "ArrowUp":
          H.preventDefault(), M((J) => ({
            ...J,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), K(0);
          break;
        case "Escape":
          H.preventDefault(), M((J) => ({
            ...J,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), K(0);
          break;
      }
    }
  }, [S, c, D.selectedIndex, j.isSortControlsActive, j.focusedSortControlIndex, K, F, W, M, de]);
  if (S === "cards") {
    const H = c[D.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${C || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": g,
            "aria-describedby": `${v || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
            "aria-orientation": m,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((B, q) => {
              const X = q === D.selectedIndex, A = B.disabled || x;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${B.id}`,
                  "aria-controls": `panel-${B.id}`,
                  "aria-selected": X,
                  "aria-disabled": A,
                  tabIndex: X ? 0 : -1,
                  ref: (Y) => {
                    b.current[q] = Y;
                  },
                  onClick: () => U(q),
                  onKeyDown: (Y) => he(Y, q),
                  disabled: A,
                  className: [
                    "aria-tabs-datagrid__tab",
                    X ? "aria-tabs-datagrid__tab--selected" : "",
                    A ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: B.label }),
                    D.tabLoadingStates[q] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    D.tabErrors[q] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                B.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      H && H.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          hl,
          {
            sortConfig: D.sortConfig || [],
            columns: H.columns.map((B) => ({ key: B.key, label: B.label })),
            onSortChange: (B) => {
              k({ type: "SET_SORT", payload: B });
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
            tabIndex: j.focusArea === "sort-controls" ? 0 : -1,
            ref: (B) => {
              w.current[0] = B;
            },
            onKeyDown: (B) => ue(B, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${H.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  Ar,
                  {
                    id: `card-sort-${H.id}`,
                    name: `card-sort-${H.id}`,
                    value: j.cardSortConfig ? `${j.cardSortConfig.key}-${j.cardSortConfig.direction}` : "",
                    onChange: (B) => ne(B.target.value),
                    className: "sort-select",
                    children: fe(H.columns).map((B) => /* @__PURE__ */ r.jsx("option", { value: B.value, children: B.label }, B.value))
                  }
                )
              ] }),
              j.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  pe(j.cardSortConfig)
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
          ref: I,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${H?.label || "Data"} cards in ${j.gridRows} rows and ${j.gridColumns} columns`,
          "aria-rowcount": j.gridRows,
          "aria-colcount": j.gridColumns,
          id: `panel-${H?.id}`,
          "aria-labelledby": `tab-${H?.id}`,
          children: z(H?.data || []).map((B, q) => {
            const X = j.selectedCardIndex === q, A = j.focusedCardIndex === q && j.focusArea === "cards", Y = j.focusedCardIndex === q && j.focusArea === "card" && j.isCardNavigationActive, Q = q === 0 && j.focusArea !== "cards", ee = A || Q, J = V(q, j.gridColumns);
            if (n.cardTemplate) {
              const ve = n.cardTemplate(B, H.columns);
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
                        L.current[q] = ye;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        X ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        A ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        Y ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": J.col + 1,
                      "aria-selected": X,
                      "aria-expanded": Y,
                      "aria-description": Y ? `Card navigation active. ${j.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: ee ? 0 : -1,
                      onClick: () => {
                        M((ye) => ({
                          ...ye,
                          selectedCardIndex: ye.selectedCardIndex === q ? -1 : q
                        })), ae(B);
                      },
                      onKeyDown: (ye) => oe(ye, q),
                      onFocus: () => {
                        M((ye) => ye.isCardNavigationActive ? ye : ye.focusedCardIndex !== q || ye.focusArea !== "cards" ? {
                          ...ye,
                          focusedCardIndex: q,
                          focusArea: "cards"
                        } : ye);
                      },
                      children: ve
                    }
                  )
                },
                `card-${q}`
              );
            }
            const se = nh(B, H.columns, T, N), me = [
              se.className || "",
              X ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              A ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              Y ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
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
                      X ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      A ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      Y ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": J.col + 1,
                    "aria-selected": X,
                    "aria-expanded": Y,
                    onKeyDown: (ve) => {
                      ve.key === "Enter" && (ve.preventDefault(), M((ye) => ({
                        ...ye,
                        selectedCardIndex: q
                      }))), oe(ve, q);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      dl,
                      {
                        ...se,
                        ref: (ve) => {
                          L.current[q] = ve;
                        },
                        className: me,
                        "aria-label": `${se["aria-label"] || se.heading}. ${Y ? `Card navigation active with ${j.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: ee ? 0 : -1,
                        onClick: () => {
                          M((ve) => ({
                            ...ve,
                            selectedCardIndex: ve.selectedCardIndex === q ? -1 : q
                          })), ae(B);
                        },
                        onKeyDown: (ve) => oe(ve, q),
                        onFocus: () => {
                          j.isCardNavigationActive || M((ve) => ve.focusedCardIndex !== q || ve.focusArea !== "cards" ? {
                            ...ve,
                            focusedCardIndex: q,
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
              `card-${q}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: Se,
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
  return S === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${C || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      xs,
      {
        tabPanels: c,
        dataConfig: d,
        ariaLabel: g,
        ariaDescription: v,
        orientation: m,
        id: p,
        disabled: x,
        selectedIndex: f,
        onTabChange: h,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: u,
        ...P
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${C || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      xs,
      {
        tabPanels: c,
        dataConfig: d,
        ariaLabel: g,
        ariaDescription: v,
        orientation: m,
        id: p,
        disabled: x,
        selectedIndex: f,
        onTabChange: h,
        actions: l,
        forceActionsAbove: u,
        ...P
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, wl = (e) => {
  const t = bs.find((n) => n.value === e);
  return t ? t.icon : null;
}, rh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = n.discountedPrice || n.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => wl(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, ah = (e) => co(e, [
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
]), sh = {
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
  booleanRenderer: (e) => wl(e),
  getDataId: (e) => `financial-${e.id}`
}, oh = (e) => co(e, [
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
]), ih = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: rh,
    createTabs: ah
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: sh,
    createTabs: oh
  }
}, oi = (e, t) => {
  const n = ih[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, _l = [
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
], lh = [
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
], ch = [
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
], uh = [
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
], ii = [
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
], li = [
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
], ci = [
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
], dh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, fh = () => [
  {
    id: "patients",
    label: "Patients",
    data: _l,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      ml,
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
    data: lh,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      gl,
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
    data: ch,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      xl,
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
    data: uh,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      bl,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, a) => console.log("Vitals action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], ph = () => {
  const [e, t] = He("healthcare"), n = Pe(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: Hp,
      tabPanels: fh(),
      data: _l
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...oi("ecommerce", ii),
      data: ii
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...oi("financial", li),
      data: li
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: dh,
      tabPanels: co(ci, [
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
      data: ci
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
      xs,
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
}, Tv = ph, Sl = (e) => /* @__PURE__ */ r.jsx(Hi, { ...e }), Dv = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = Dn.TwoThirds,
  mainWrapperSize: o,
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  service: u,
  navigation: c,
  search: d,
  account: f,
  organisation: h,
  logo: g,
  className: v,
  ...m
}) => {
  const p = {
    service: u,
    navigation: c,
    search: d,
    account: f,
    organisation: h,
    logo: g,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(ul, { ...s }),
    /* @__PURE__ */ r.jsx(zi, { ...p }),
    /* @__PURE__ */ r.jsx(Sl, { className: v, ...m, children: /* @__PURE__ */ r.jsx(Oi, { size: o, children: /* @__PURE__ */ r.jsx(In, { children: /* @__PURE__ */ r.jsxs(hr, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(an, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(Vi, { ...l })
  ] });
}, Iv = ({
  children: e,
  title: t,
  pageHeadingProps: n,
  columnWidth: a = Dn.TwoThirds,
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
  ...g
}) => {
  const v = {
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
    /* @__PURE__ */ r.jsx(ul, { ...s }),
    /* @__PURE__ */ r.jsx(zi, { ...v }),
    /* @__PURE__ */ r.jsxs(Sl, { className: h, ...g, children: [
      u && /* @__PURE__ */ r.jsx(us, { ...u }),
      /* @__PURE__ */ r.jsx(Oi, { size: o, children: /* @__PURE__ */ r.jsx(In, { children: /* @__PURE__ */ r.jsxs(hr, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(an, { style: { marginTop: "3rem" }, size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(Vi, { ...l })
  ] });
}, kl = ({
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
kl.displayName = "ForwardLink";
const Un = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function ui() {
  return typeof window > "u" ? Un.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function Cl() {
  const [e, t] = G.useState(ui());
  G.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(ui());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const n = G.useCallback((s) => e >= Un[s], [e]), a = G.useCallback((s) => e < Un[s], [e]), o = G.useCallback((s, i) => e >= Un[s] && e < Un[i], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: o,
    /** Raw numeric values */
    values: Un
  };
}
function $v(e) {
  const { width: t, values: n } = Cl();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = n[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function hh(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = G.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = G.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return G.useEffect(() => {
    if (!t || typeof window > "u") return;
    const u = new URLSearchParams(window.location.search);
    o ? u.set(n, String(o)) : u.delete(n), u.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${u.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [o, i, t, n, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const mh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
), gh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
function xh(e) {
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
    emptyState: g,
    a11y: v,
    className: m,
    getId: p = (re) => re.id,
    orientation: x = "vertical",
    autoEnableThirdColumn: C = !0,
    onDrillChange: P,
    navigationInstructions: S = "Use arrow keys to navigate, Enter to open.",
    initialFocus: y = "first",
    skipFocusOnSelect: $ = !1,
    skipAnnouncements: T = !1,
    onFocusChange: N,
    syncUrl: _ = !1,
    urlParamSelected: D = "nsv",
    urlParamDrill: k = "nsvDrill",
    urlSyncDebounceMs: b = 0,
    lazySecondary: L = !1,
    navFooter: w,
    collapsibleNav: I = !1,
    navInitiallyCollapsed: j = !1,
    onNavCollapseChange: M,
    collapseToggleLabelShow: te = "Show navigation",
    collapseToggleLabelHide: V = "Hide navigation",
    collapseToggleIconShow: E,
    collapseToggleIconHide: O,
    persistNavCollapsed: U,
    navCollapsedStorageKey: ae = "nsvCollapsed",
    navCollapsedUrlParam: W = "nsvCollapsed",
    autoContentHeader: le,
    contentHeaderLevel: Se = 2,
    renderContentHeader: de,
    contentSubheader: fe,
    secondarySubheader: Z
  } = e, { up: ne } = Cl(), [pe, z] = G.useState(!1);
  G.useEffect(() => {
    z(!0);
  }, []);
  const ce = pe && ne("medium"), F = pe && ne("xlarge");
  let R;
  u ? R = u : ce ? R = "two-column" : R = "list", !u && C && l && F && (R = "three-column");
  const K = hh({
    enabled: _,
    paramSelected: D,
    paramDrill: k
  }), [oe, ie] = G.useState(
    () => K.selectedId !== void 0 ? K.selectedId : a
  ), he = n !== void 0 ? n : oe, ue = t.find((re) => p(re) === he), [H, B] = G.useState(
    void 0
  );
  G.useEffect(() => {
    if (he === void 0) return;
    B(he);
    const re = setTimeout(() => B(void 0), 220);
    return () => clearTimeout(re);
  }, [he]);
  const q = G.useRef(null), X = G.useRef(null), A = G.useRef(null), Y = G.useRef(null), [Q, ee] = G.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [J, se] = G.useState(() => "nav"), [me, ve] = G.useState(0), ye = () => [
    Y.current,
    X.current,
    A.current
  ].filter(Boolean), je = (re) => {
    const _e = ye(), xe = Math.max(0, Math.min(re, _e.length - 1));
    _e[xe]?.focus(), ve(xe);
  }, ge = G.useCallback(
    (re) => re ? Array.from(re.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (xe) => !xe.hasAttribute("disabled") && xe.tabIndex !== -1
    ) : [],
    []
  ), Fe = G.useCallback(
    (re) => {
      const _e = ge(X.current);
      if (!_e.length) {
        X.current?.focus();
        return;
      }
      const xe = Math.max(0, Math.min(re, _e.length - 1)), Ie = _e[xe];
      Ie.focus(), setTimeout(() => {
        document.activeElement !== Ie && (Ie.focus(), setTimeout(() => {
          document.activeElement !== Ie && Ie.click();
        }, 10));
      }, 10), ee((ze) => ({ ...ze, contentIndex: xe }));
      const qe = (ze) => {
        ze.key === "Escape" && (ze.preventDefault(), ze.stopPropagation(), X.current?.focus(), Ie.removeEventListener("keydown", qe));
      };
      _e.forEach((ze) => {
        const Be = ze._escapeHandler;
        Be && ze.removeEventListener("keydown", Be);
      }), Ie._escapeHandler = qe, Ie.addEventListener("keydown", qe);
    },
    [ge]
  ), Ge = G.useCallback(
    (re) => {
      const _e = ge(A.current);
      if (!_e.length) {
        A.current?.focus();
        return;
      }
      const xe = Math.max(0, Math.min(re, _e.length - 1)), Ie = _e[xe];
      Ie.focus(), setTimeout(() => {
        document.activeElement !== Ie && (Ie.focus(), setTimeout(() => {
          document.activeElement !== Ie && Ie.click();
        }, 10));
      }, 10), ee((ze) => ({ ...ze, secondaryIndex: xe }));
      const qe = (ze) => {
        ze.key === "Escape" && (ze.preventDefault(), ze.stopPropagation(), A.current?.focus(), Ie.removeEventListener("keydown", qe));
      };
      _e.forEach((ze) => {
        const Be = ze._escapeHandler;
        Be && ze.removeEventListener("keydown", Be);
      }), Ie._escapeHandler = qe, Ie.addEventListener("keydown", qe);
    },
    [ge]
  ), nt = (re) => {
    if (re.defaultPrevented) return;
    const _e = re.key, xe = re.target, Ie = !!lt.current && lt.current.contains(xe), qe = !!X.current && X.current.contains(xe), ze = !!A.current && A.current.contains(xe), Be = !!A.current, yt = xe === Y.current || xe === X.current || xe === A.current, _n = Ye && (R === "list" || R === "cards"), jr = qe && !!xe.closest(".nhs-navigation-split-view__header");
    if (J === "containers" && yt) {
      if (_e === "ArrowRight") {
        re.preventDefault();
        const Re = ye(), rt = Math.min(Re.length - 1, me + 1);
        je(rt);
        return;
      }
      if (_e === "ArrowLeft") {
        re.preventDefault();
        const Re = Math.max(0, me - 1);
        je(Re);
        return;
      }
      if (_e === "Home") {
        re.preventDefault(), je(0);
        return;
      }
      if (_e === "End") {
        re.preventDefault(), je(ye().length - 1);
        return;
      }
      if (_e === "Enter" || _e === " ") {
        if (re.preventDefault(), xe === Y.current) {
          if (se("nav"), lt.current) {
            const Re = Array.from(
              lt.current.querySelectorAll("[data-nav-item]")
            );
            (Re[st >= 0 ? st : 0] || Re[0])?.focus();
          }
        } else xe === X.current ? (se("content"), Fe(Q.contentIndex)) : xe === A.current && (se("secondary"), Ge(Q.secondaryIndex));
        return;
      }
      return;
    }
    if (_e === "Escape") {
      if (J === "content" || J === "secondary") {
        if (qe || ze) {
          if (re.preventDefault(), se("nav"), lt.current) {
            const rt = Array.from(
              lt.current.querySelectorAll("[data-nav-item]")
            )[st >= 0 ? st : 0];
            setTimeout(() => rt?.focus(), 10);
          }
        } else if ((xe === X.current || xe === A.current) && (re.preventDefault(), se("nav"), lt.current)) {
          const rt = Array.from(
            lt.current.querySelectorAll("[data-nav-item]")
          )[st >= 0 ? st : 0];
          setTimeout(() => rt?.focus(), 10);
        }
      }
      return;
    }
    if (_e === "Enter" || _e === " ") {
      if (xe.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (xe === X.current && J === "content") {
        re.preventDefault(), re.stopPropagation(), ge(X.current).length > 0 && setTimeout(() => {
          Fe(Q.contentIndex);
        }, 50);
        return;
      }
      if (xe === A.current && J === "secondary") {
        re.preventDefault(), re.stopPropagation(), ge(
          A.current
        ).length > 0 && setTimeout(() => {
          Ge(Q.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (_n && jr && !yt && (_e === "ArrowRight" || _e === "ArrowLeft")) {
      const Re = ge(X.current).filter(
        (rt) => rt.closest(".nhs-navigation-split-view__header")
      );
      if (Re.length > 1) {
        const rt = Re.indexOf(xe);
        if (rt >= 0) {
          const xo = (rt + (_e === "ArrowRight" ? 1 : -1) + Re.length) % Re.length;
          re.preventDefault(), Re[xo].focus();
          return;
        }
      }
    }
    if (_e === "ArrowRight") {
      if (Ie || J === "nav") {
        re.preventDefault(), se("content"), setTimeout(() => X.current?.focus(), 10);
        return;
      }
      if (qe || J === "content") {
        Be && (re.preventDefault(), se("secondary"), setTimeout(() => A.current?.focus(), 10));
        return;
      }
    }
    if (_e === "ArrowLeft") {
      if (ze || J === "secondary") {
        re.preventDefault(), se("content"), setTimeout(() => X.current?.focus(), 10);
        return;
      }
      if (qe || J === "content") {
        if (re.preventDefault(), se("nav"), lt.current) {
          const rt = Array.from(
            lt.current.querySelectorAll("[data-nav-item]")
          )[st >= 0 ? st : 0];
          setTimeout(() => rt?.focus(), 10);
        }
        return;
      }
    }
    if (_e === "Home" && !Ie && (re.preventDefault(), se("nav"), lt.current)) {
      const Re = Array.from(
        lt.current.querySelectorAll("[data-nav-item]")
      ), rt = Re[st >= 0 ? st : 0] || Re[0];
      setTimeout(() => rt?.focus(), 10);
    }
    if (_e === "End") {
      const Re = Be ? A.current : X.current;
      Re && !Re.contains(xe) && (re.preventDefault(), Be ? (se("secondary"), setTimeout(() => A.current?.focus(), 10)) : (se("content"), setTimeout(() => X.current?.focus(), 10)));
    }
    if (_e === "ArrowDown" || _e === "ArrowUp") {
      if (xe === X.current && _e === "ArrowDown") {
        re.preventDefault(), ge(X.current).length > 0 && Fe(0);
        return;
      }
      if (xe === A.current && _e === "ArrowDown") {
        re.preventDefault(), ge(
          A.current
        ).length > 0 && Ge(0);
        return;
      }
      if (qe) {
        const Re = ge(X.current);
        if (Re.length) {
          re.preventDefault();
          const rt = _e === "ArrowDown" ? 1 : -1, Rt = (Q.contentIndex + rt + Re.length) % Re.length;
          Fe(Rt);
        }
      } else if (ze) {
        const Re = ge(A.current);
        if (Re.length) {
          re.preventDefault();
          const rt = _e === "ArrowDown" ? 1 : -1, Rt = (Q.secondaryIndex + rt + Re.length) % Re.length;
          Ge(Rt);
        }
      }
    }
  }, Ye = !!ue && (R === "list" || R === "cards"), dt = G.useMemo(() => le === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : le === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : le === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: le.mobile !== void 0 ? le.mobile : !0,
    tablet: le.tablet || !1,
    desktop: le.desktop || !1
  }, [le]), At = pe && ne("medium") && !ne("xlarge"), mt = pe && ne("xlarge"), Dt = !!l, it = R === "three-column", [Oe, jt] = G.useState(!1);
  G.useEffect(() => {
    it && Oe && jt(!1);
  }, [it, Oe]), G.useEffect(() => {
    Oe && !it && (se("secondary"), ve(2), setTimeout(() => {
      A.current?.focus();
    }, 50));
  }, [Oe, it]), G.useEffect(() => {
    !Oe && !it && J === "secondary" && (se("content"), ve(1), setTimeout(() => {
      X.current?.focus();
    }, 50));
  }, [Oe, it, J]);
  const un = !!ue && (Ye && dt.mobile || !Ye && At && dt.tablet || !Ye && mt && dt.desktop) || Dt && !it, Ut = `h${Se}`, Rn = ue ? G.createElement(
    Ut,
    {
      style: {
        marginLeft: Ye ? 32 : 0,
        marginRight: Ye ? 32 : 0
      }
    },
    ue.label
  ) : null, En = Ye ? "mobile" : At ? "tablet" : "desktop", dn = Dt && !it && !Oe, vn = Ye && dt.mobile ? /* @__PURE__ */ r.jsx(
    us,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => pn(void 0, void 0)
    }
  ) : void 0, yn = dn ? /* @__PURE__ */ r.jsx(
    kl,
    {
      element: "button",
      text: f,
      onClick: () => {
        jt(!0);
      }
    }
  ) : void 0, Wt = !it && Oe ? /* @__PURE__ */ r.jsx(
    us,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => jt(!1)
    }
  ) : void 0, sr = G.useMemo(() => {
    if (!un || !ue) return null;
    if (de)
      return de({
        item: ue,
        detailActive: Ye,
        context: En,
        backLink: vn,
        defaultHeading: Rn
      });
    const re = ue && fe ? typeof fe == "function" ? fe(ue) : fe : null;
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
            Wt || vn,
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
                  Rn,
                  re && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: re })
                ]
              }
            )
          ]
        }
      ),
      yn && /* @__PURE__ */ r.jsx("div", { style: { marginLeft: "auto" }, children: yn })
    ] });
  }, [
    un,
    ue,
    de,
    Ye,
    En,
    vn,
    Wt,
    Rn,
    yn,
    fe
  ]);
  G.useEffect(() => {
    if (!_) return;
    const re = R === "three-column";
    let _e = !1;
    const xe = () => {
      _e || (K.selectedId !== he && K.setSelectedId(he), K.drilledIn !== re && K.setDrilledIn(re));
    };
    if (b && b > 0) {
      const Ie = setTimeout(xe, b);
      return () => {
        _e = !0, clearTimeout(Ie);
      };
    } else
      xe();
  }, [_, K, he, R, b]), G.useEffect(() => {
    if (!_) return;
    const re = () => {
      const _e = new URLSearchParams(window.location.search), xe = _e.get(D);
      _e.get(k), ie(xe === null ? void 0 : xe);
    };
    return window.addEventListener("popstate", re), () => window.removeEventListener("popstate", re);
  }, [
    _,
    D,
    k,
    u,
    l
  ]);
  const fn = G.useRef(0), Tt = G.useRef(
    null
  ), pn = G.useCallback(
    (re, _e) => {
      re !== he && (n === void 0 && ie(re), o?.(re, _e));
    },
    [n, o, he]
  );
  G.useEffect(() => {
    if (!$ && Ye && X.current) {
      const re = setTimeout(() => X.current?.focus(), 30);
      return () => clearTimeout(re);
    }
  }, [Ye, he, $]);
  const lt = G.useRef(null), [st, wn] = G.useState(
    () => y === "first" ? 0 : -1
  );
  G.useEffect(() => {
    if (st < 0 || !lt.current) return;
    const _e = Array.from(
      lt.current.querySelectorAll("[data-nav-item]")
    )[st];
    if (_e) {
      document.activeElement !== _e && _e.focus(), fn.current = st;
      const xe = t[st];
      N?.(
        xe ? p(xe) : void 0,
        xe,
        st
      );
    }
  }, [st, t, N, p]);
  const Ba = (re) => {
    const _e = x === "vertical" ? "ArrowDown" : "ArrowRight", xe = x === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (re.key === "ArrowRight" && x === "vertical") {
      re.preventDefault(), Oe ? (se("secondary"), setTimeout(() => {
        A.current?.focus();
      }, 10)) : (se("content"), setTimeout(() => {
        X.current?.focus();
      }, 10));
      return;
    }
    if (re.key === _e)
      re.preventDefault(), wn((Ie) => Math.min(t.length - 1, Ie + 1));
    else if (re.key === xe)
      re.preventDefault(), wn((Ie) => Math.max(0, Ie - 1));
    else if (re.key === "Home")
      re.preventDefault(), wn(0);
    else if (re.key === "End")
      re.preventDefault(), wn(t.length - 1);
    else if (re.key === "Enter" || re.key === " ") {
      re.preventDefault();
      const Ie = t[st];
      Ie && !Ie.disabled && pn(p(Ie), Ie);
    } else if (re.key.length === 1 && /[a-z0-9]/i.test(re.key)) {
      Tt.current || (Tt.current = { buffer: "", last: 0 });
      const Ie = Date.now(), qe = 700, ze = re.key.toLowerCase();
      Ie - Tt.current.last > qe ? Tt.current.buffer = ze : Tt.current.buffer += ze, Tt.current.last = Ie;
      let Be = Tt.current.buffer;
      const yt = Be.split("").every((Rt) => Rt === Be[0]), _n = t.map(
        (Rt) => String(Rt.label || "").toLowerCase()
      );
      let jr = 0;
      st >= 0 && (jr = (st + 1) % t.length);
      let Re;
      const rt = (Rt, xo) => {
        const bo = t.length;
        for (let Ua = 0; Ua < bo; Ua++) {
          const Wa = (jr + Ua) % bo;
          if (!t[Wa].disabled && _n[Wa].startsWith(Rt))
            return Wa;
        }
      };
      yt && Be.length > 1 ? Re = rt(Be[0]) : (Re = rt(Be), Re === void 0 && Be.length > 1 && (Re = rt(Be[Be.length - 1]), Re !== void 0 && Tt.current && (Tt.current.buffer = Be[Be.length - 1]))), Re !== void 0 && wn(Re);
    }
  }, Bn = G.useMemo(() => {
    if (U && (U === "url" || U === "both") && typeof window < "u") {
      const _e = new URLSearchParams(window.location.search).get(W);
      if (_e === "1") return !0;
      if (_e === "0") return !1;
    }
    if (U && (U === "localStorage" || U === "both") && typeof window < "u")
      try {
        const re = window.localStorage.getItem(ae);
        if (re === "1") return !0;
        if (re === "0") return !1;
      } catch {
      }
    return j;
  }, [
    U,
    j,
    ae,
    W
  ]), [It, Ha] = G.useState(Bn);
  G.useEffect(() => {
    M?.(It);
  }, [It, M]);
  const Oa = G.useCallback(() => {
    ce && I && Ha((re) => !re);
  }, [ce, I]);
  G.useEffect(() => {
    if (U && !(typeof window > "u")) {
      if (U === "localStorage" || U === "both")
        try {
          window.localStorage.setItem(
            ae,
            It ? "1" : "0"
          );
        } catch {
        }
      if (U === "url" || U === "both") {
        const re = new URLSearchParams(window.location.search);
        re.set(W, It ? "1" : "0");
        const _e = `${window.location.pathname}?${re.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", _e);
      }
    }
  }, [
    It,
    U,
    ae,
    W
  ]);
  const Te = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Ye ? "nhs-navigation-split-view--detail-active" : "",
    R === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    I && ce && It ? "nhs-navigation-split-view--nav-collapsed" : "",
    m
  ].filter(Boolean).join(" "), ke = G.useRef(null);
  G.useEffect(() => {
    if (!T && ke.current) {
      const re = ue ? `Selected ${ue.label}` : "Selection cleared";
      ke.current.textContent = re;
    }
  }, [ue, T]), G.useEffect(() => {
    !Ye && he == null && lt.current && lt.current.querySelectorAll("[data-nav-item]")[fn.current]?.focus();
  }, [Ye, he]);
  const Ee = R === "three-column", [Qe, De] = G.useState(!1);
  G.useEffect(() => {
    Ee && !Qe && De(!0);
  }, [Ee, Qe]);
  const vt = G.useRef(Ee);
  G.useEffect(() => {
    vt.current !== Ee && (P?.(Ee), vt.current = Ee);
  }, [Ee, P]);
  const et = () => {
    if (R === "cards")
      return /* @__PURE__ */ r.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": he ? String(he) : void 0,
          children: [
            t.map((xe) => {
              const Ie = p(xe), qe = Ie === he;
              return /* @__PURE__ */ r.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": qe,
                  children: /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      id: String(Ie),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": qe || void 0,
                      "data-disabled": xe.disabled || void 0,
                      disabled: xe.disabled,
                      onClick: () => !xe.disabled && pn(Ie, xe),
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
                children: g || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const re = "nsv-nav-instructions", _e = G.useMemo(() => G.memo(
      ({
        item: xe,
        idx: Ie,
        selected: qe,
        focused: ze
      }) => {
        const Be = p(xe), yt = xe.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: ze ? 0 : -1,
          onClick: () => {
            fn.current = Ie, pn(Be, xe);
          },
          onKeyDown: (_n) => {
            (_n.key === "Enter" || _n.key === " ") && (_n.preventDefault(), fn.current = Ie, pn(Be, xe));
          }
        };
        return /* @__PURE__ */ r.jsxs(
          "li",
          {
            id: String(Be),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": qe,
            "aria-current": qe ? "true" : void 0,
            "data-selected": qe || void 0,
            "data-disabled": xe.disabled || void 0,
            ...yt,
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
    ), [p, pn, s]);
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs(
        "ul",
        {
          ref: lt,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Ba,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": re,
          "aria-activedescendant": he ? String(he) : void 0,
          children: [
            t.map((xe, Ie) => /* @__PURE__ */ r.jsx(
              _e,
              {
                item: xe,
                idx: Ie,
                selected: p(xe) === he,
                focused: Ie === st || st === -1 && Ie === 0 && y === "first",
                "data-just-selected": p(xe) === H ? "true" : void 0
              },
              p(xe)
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
          id: re,
          style: {
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0 0 0 0)"
          },
          children: S
        }
      )
    ] });
  };
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: q,
      className: Te,
      "aria-label": v?.rootLabel,
      "data-layout": R,
      onKeyDown: nt,
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Ye || void 0,
            style: { transform: Ye ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: Y,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": v?.navigationLabel || "Items",
                  "data-collapsed": It || void 0,
                  tabIndex: 0,
                  children: [
                    I && ce && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Oa,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": It ? te : V,
                        title: It ? te : V,
                        children: It ? E || /* @__PURE__ */ r.jsx(gh, {}) : O || /* @__PURE__ */ r.jsx(mh, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: et() }),
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
                  ref: X,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": v?.contentLabel || "Content",
                  "data-has-selection": !!ue || void 0,
                  tabIndex: 0,
                  style: {
                    display: Oe && !it ? "none" : void 0
                  },
                  children: [
                    un && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: sr }),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(ue)
                      }
                    )
                  ]
                }
              ),
              R === "three-column" && (!L || Qe) || Oe && !it ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: A,
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
                        Oe && !it && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsx(
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
                                  Wt,
                                  /* @__PURE__ */ r.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: ue && typeof ue == "object" && "label" in ue ? ue.label : String(ue) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        ue && Z && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof Z == "function" ? Z(ue) : Z
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(ue) })
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
            ref: ke,
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
            children: Ee ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
xh.displayName = "NavigationSplitView";
const bh = typeof window < "u" && window.document ? G.useLayoutEffect : G.useEffect, di = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), vh = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: o, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, u = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, d = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), h = n && e.childItems && e.childItems.length > 0, g = (m) => {
    h && (m.preventDefault(), a?.(e));
  }, v = h ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": o || !1,
    onClick: g,
    onKeyDown: (m) => {
      (m.key === "Enter" || m.key === " ") && g(m), m.key === "Escape" && o && g(m);
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
      ...v,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          h && /* @__PURE__ */ r.jsx("span", { className: we("nhsuk-product-roadmap__item-expander", o && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, yh = eu(({
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
  const [d, f] = He(() => /* @__PURE__ */ new Set()), [h, g] = He(() => /* @__PURE__ */ new Set()), v = Ue(/* @__PURE__ */ new Set()), m = be((b) => d.has(b), [d]), p = be((b) => {
    f((L) => {
      const w = new Set(L);
      return w.has(b.id) ? (w.delete(b.id), g((I) => {
        const j = new Set(I);
        return j.add(b.id), j;
      }), setTimeout(() => g((I) => {
        const j = new Set(I);
        return j.delete(b.id), j;
      }), 240), l?.(b.id, !1)) : (w.add(b.id), l?.(b.id, !0)), w;
    });
  }, [l]);
  bh(() => {
    if (u !== "inline" || !i || typeof document > "u") return;
    const b = [];
    if (d.forEach((j) => {
      v.current.has(j) || b.push(j);
    }), v.current = new Set(d), !b.length) return;
    const L = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, w = b.map((j) => `.nhsuk-product-roadmap__inline-children[data-parent="${j}"] .nhsuk-product-roadmap__inline-child`).join(","), I = Array.from(document.querySelectorAll(w));
    if (I.length) {
      if (L) {
        I.forEach((j) => {
          j.style.opacity = "1", j.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((j) => {
        (j.gsap || j.default || j).to(I, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        I.forEach((j) => {
          j.style.opacity = "1", j.style.transform = "translateY(0)";
        });
      });
    }
  }, [d, u, i]);
  const x = be(() => {
    d.size && f(/* @__PURE__ */ new Set());
  }, [d]), C = we("nhsuk-product-roadmap", o), P = di(n, 120, 1200, 400), S = di(a, 1, 6, 2), y = Pe(() => e.map((b) => /* @__PURE__ */ new Date(b + " 01")), [e]), $ = Pe(() => {
    if (y.length === 0) {
      const w = /* @__PURE__ */ new Date();
      return [w, w];
    }
    const b = new Date(y[0]), L = br.offset(new Date(y[y.length - 1]), 1);
    return [b, L];
  }, [y]), T = Pe(() => lo().domain($).range([0, y.length * P]), [$, y.length, P]), N = be((b) => {
    if (b.startDate) {
      const V = new Date(b.startDate), E = new Date(b.endDate ?? b.startDate);
      E < V && E.setTime(V.getTime());
      const O = T(V), U = br.offset(new Date(E), 1);
      let ae = T(U);
      Number.isFinite(ae) || (ae = O + P);
      const W = Math.max(P * 0.25, ae - O), le = O / P, Se = W / P;
      return { ...b, _pxLeft: O, _pxWidth: W, _startFraction: le, _spanColumns: Se };
    }
    const L = b.date ?? 1, w = b.dateOffset ?? 0, I = b.length ?? 1, j = b.partialLength ?? 1, M = L - 1 + w, te = I - 1 + j;
    return { ...b, _pxLeft: M * P, _pxWidth: te * P, _startFraction: M, _spanColumns: te };
  }, [T, P]), _ = Pe(() => t.map((b) => {
    const w = b.roadmapItems.map((j) => {
      const M = !j.childItems && j.children ? { ...j, childItems: j.children } : { ...j };
      return N(M);
    }).sort((j, M) => j._pxLeft !== M._pxLeft ? j._pxLeft - M._pxLeft : M._pxWidth - j._pxWidth), I = [];
    return w.forEach((j) => {
      const M = j._pxLeft, te = j._pxLeft + j._pxWidth;
      let V = I.findIndex((E) => E <= M);
      V === -1 && (V = I.length, I.push(0)), I[V] = te, j.verticalPosition = V + 1;
    }), { ...b, roadmapItems: w, _laneCount: I.length };
  }), [t, N]), D = Pe(() => _.map((b) => b._laneCount || 1), [_]), k = Pe(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: C,
      style: { "--column-width": `${P}px`, gridTemplateColumns: k },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": _.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((b, L) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": L + 2, children: b }, `${b}-${L}`))
        ] }),
        _.map((b, L) => {
          const w = L + 2, I = D[L];
          let j, M = 0, te = [];
          i && u === "inline" && (te = b.roadmapItems.filter((U) => m(U.id) && U.childItems && U.childItems.length).map((U) => ({ id: U.id, lane: U.verticalPosition || 1, count: U.childItems.length })).sort((U, ae) => U.lane - ae.lane), M = te.reduce((U, ae) => U + ae.count, 0));
          const V = I + M;
          j = `calc((${V} * var(--roadmap-item-block-height)) + (max(0, ${V} - 1) * var(--roadmap-row-gap)))`;
          const E = {};
          let O = 0;
          return te.forEach((U) => {
            O += U.count, E[U.lane + 1] = O;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": w, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: b.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: j }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: b.roadmapItems.map((U, ae) => {
              const W = (U.verticalPosition || 1) - 1, le = te.filter((Z) => Z.lane - 1 < W).reduce((Z, ne) => Z + ne.count, 0), Se = W + le, de = m(U.id), fe = h.has(U.id);
              return /* @__PURE__ */ r.jsxs(Ct.Fragment, { children: [
                /* @__PURE__ */ r.jsx(vh, { item: U, maxLines: S, enableDrilldown: i, onExpand: p, isActive: de, topLaneIndex: Se, laneOffset: le }),
                i && u === "inline" && (de || fe) && U.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": U.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${U.title} child tasks`, children: U.childItems.map((Z, ne) => {
                  const pe = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let z = U._pxLeft, ce = U._pxWidth;
                  if (Z.startDate) {
                    const K = new Date(Z.startDate);
                    let oe = Z.endDate ? new Date(Z.endDate) : new Date(K);
                    oe < K && (oe = new Date(K));
                    const ie = new Date(oe);
                    ie.setDate(ie.getDate() + 1);
                    const he = T(K);
                    let ue = T(ie);
                    (!Number.isFinite(ue) || ue <= he) && (ue = he + 6), z = he, ce = Math.max(6, ue - he);
                  }
                  const R = Se + 1 + ne;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: we("nhsuk-product-roadmap__inline-child", Z.status && `nhsuk-product-roadmap__inline-child--status-${Z.status}`, !de && fe && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${z}px`, width: `${ce}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${R})`, height: pe, opacity: de ? 0 : void 0, transform: de ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: Z.title })
                      ]
                    },
                    Z.id ?? ne
                  );
                }) })
              ] }, U.id ?? ae);
            }) }) })
          ] }, `${b.heading}-${L}`);
        }),
        i && u === "overlay" && d.size === 1 && (() => {
          const b = Array.from(d)[0], L = t.flatMap((w) => w.roadmapItems).find((w) => w.id === b);
          return !L || !L.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${L.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: L.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: x, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: L.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: L.childItems.map((w, I) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: w.title }),
                w.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: w.content })
              ] }, w.id ?? I)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: x, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
yh.displayName = "ProductRoadmap";
function Nl(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Nl(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Xr() {
  for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Nl(e)) && (a && (a += " "), a += t);
  return a;
}
function ft(e) {
  return function() {
    return e;
  };
}
const vs = Math.PI, ys = 2 * vs, kn = 1e-6, wh = ys - kn;
function jl(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function _h(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return jl;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, s = a.length; o < s; ++o)
      this._ += Math.round(arguments[o] * n) / n + a[o];
  };
}
class Sh {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? jl : _h(t);
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
    else if (h > kn) if (!(Math.abs(f * u - c * d) > kn) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let g = a - i, v = o - l, m = u * u + c * c, p = g * g + v * v, x = Math.sqrt(m), C = Math.sqrt(h), P = s * Math.tan((vs - Math.acos((m + h - p) / (2 * x * C))) / 2), S = P / C, y = P / x;
      Math.abs(S - 1) > kn && this._append`L${t + S * d},${n + S * f}`, this._append`A${s},${s},0,0,${+(f * g > d * v)},${this._x1 = t + y * u},${this._y1 = n + y * c}`;
    }
  }
  arc(t, n, a, o, s, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(o), u = a * Math.sin(o), c = t + l, d = n + u, f = 1 ^ i, h = i ? o - s : s - o;
    this._x1 === null ? this._append`M${c},${d}` : (Math.abs(this._x1 - c) > kn || Math.abs(this._y1 - d) > kn) && this._append`L${c},${d}`, a && (h < 0 && (h = h % ys + ys), h > wh ? this._append`A${a},${a},0,1,${f},${t - l},${n - u}A${a},${a},0,1,${f},${this._x1 = c},${this._y1 = d}` : h > kn && this._append`A${a},${a},0,${+(h >= vs)},${f},${this._x1 = t + a * Math.cos(s)},${this._y1 = n + a * Math.sin(s)}`);
  }
  rect(t, n, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function Tl(e) {
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
  }, () => new Sh(t);
}
function Dl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Il(e) {
  this._context = e;
}
Il.prototype = {
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
function $l(e) {
  return new Il(e);
}
function Ml(e) {
  return e[0];
}
function Pl(e) {
  return e[1];
}
function Fl(e, t) {
  var n = ft(!0), a = null, o = $l, s = null, i = Tl(l);
  e = typeof e == "function" ? e : e === void 0 ? Ml : ft(e), t = typeof t == "function" ? t : t === void 0 ? Pl : ft(t);
  function l(u) {
    var c, d = (u = Dl(u)).length, f, h = !1, g;
    for (a == null && (s = o(g = i())), c = 0; c <= d; ++c)
      !(c < d && n(f = u[c], c, u)) === h && ((h = !h) ? s.lineStart() : s.lineEnd()), h && s.point(+e(f, c, u), +t(f, c, u));
    if (g) return s = null, g + "" || null;
  }
  return l.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : ft(+u), l) : e;
  }, l.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : ft(+u), l) : t;
  }, l.defined = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : ft(!!u), l) : n;
  }, l.curve = function(u) {
    return arguments.length ? (o = u, a != null && (s = o(a)), l) : o;
  }, l.context = function(u) {
    return arguments.length ? (u == null ? a = s = null : s = o(a = u), l) : a;
  }, l;
}
function ws(e, t, n) {
  var a = null, o = ft(!0), s = null, i = $l, l = null, u = Tl(c);
  e = typeof e == "function" ? e : e === void 0 ? Ml : ft(+e), t = typeof t == "function" ? t : ft(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? Pl : ft(+n);
  function c(f) {
    var h, g, v, m = (f = Dl(f)).length, p, x = !1, C, P = new Array(m), S = new Array(m);
    for (s == null && (l = i(C = u())), h = 0; h <= m; ++h) {
      if (!(h < m && o(p = f[h], h, f)) === x)
        if (x = !x)
          g = h, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), v = h - 1; v >= g; --v)
            l.point(P[v], S[v]);
          l.lineEnd(), l.areaEnd();
        }
      x && (P[h] = +e(p, h, f), S[h] = +t(p, h, f), l.point(a ? +a(p, h, f) : P[h], n ? +n(p, h, f) : S[h]));
    }
    if (C) return l = null, C + "" || null;
  }
  function d() {
    return Fl().defined(o).curve(i).context(s);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : ft(+f), a = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : ft(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : ft(+f), c) : a;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : ft(+f), n = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : ft(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : ft(+f), c) : n;
  }, c.lineX0 = c.lineY0 = function() {
    return d().x(e).y(t);
  }, c.lineY1 = function() {
    return d().x(e).y(n);
  }, c.lineX1 = function() {
    return d().x(a).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (o = typeof f == "function" ? f : ft(!!f), c) : o;
  }, c.curve = function(f) {
    return arguments.length ? (i = f, s != null && (l = i(s)), c) : i;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? s = l = null : l = i(s = f), c) : s;
  }, c;
}
function fi(e) {
  return e < 0 ? -1 : 1;
}
function pi(e, t, n) {
  var a = e._x1 - e._x0, o = t - e._x1, s = (e._y1 - e._y0) / (a || o < 0 && -0), i = (n - e._y1) / (o || a < 0 && -0), l = (s * o + i * a) / (a + o);
  return (fi(s) + fi(i)) * Math.min(Math.abs(s), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function hi(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function es(e, t, n) {
  var a = e._x0, o = e._y0, s = e._x1, i = e._y1, l = (s - a) / 3;
  e._context.bezierCurveTo(a + l, o + l * t, s - l, i - l * n, s, i);
}
function Kr(e) {
  this._context = e;
}
Kr.prototype = {
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
        es(this, this._t0, hi(this, this._t0));
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
          this._point = 3, es(this, hi(this, n = pi(this, e, t)), n);
          break;
        default:
          es(this, this._t0, n = pi(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(Kr.prototype).point = function(e, t) {
  Kr.prototype.point.call(this, t, e);
};
function Jr(e) {
  return new Kr(e);
}
function kh(e, t, n) {
  const a = Gi(e, t);
  return lo().domain(a).range(n);
}
function mi(e, t, n) {
  const [a, o] = Gi(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(o)))
    return Wr().domain([0, 0]).range(n);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const u = o - a, c = (u > 0 ? u : a) * 0.1;
    i = Math.max(0, a - c), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = o ?? 0;
  return Wr().domain([i, l]).nice().range(n);
}
function _s(e, t, n, a) {
  const o = Fl().x(t).y(n);
  return a?.smooth !== !1 && o.curve(Jr), o(e) ?? "";
}
function Ch(e = {}) {
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
const Ll = G.createContext(null);
function bn() {
  return G.useContext(Ll);
}
const Nh = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: o,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = Ch(t), u = { height: e, position: "relative" };
  return n !== void 0 && (u.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: u, role: s, "aria-label": i, children: /* @__PURE__ */ r.jsx(Ll.Provider, { value: l, children: o }) });
}, uo = G.createContext(null), Ln = () => G.useContext(uo), jh = ({
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
  const d = bn(), f = t ?? d?.innerWidth ?? 0, h = n ?? d?.innerHeight ?? 0, g = G.useMemo(() => e.flatMap((S) => S.data), [e]), v = G.useCallback((S) => {
    if (a) return a(S);
    const y = S.x;
    return y instanceof Date ? y : new Date(y);
  }, [a]), m = u ?? 6, p = c ?? 6, x = G.useMemo(() => kh(g, v, [m, Math.max(0, f - m)]), [g, v, f, m]), C = G.useMemo(() => {
    if (l) {
      const S = mi([], (y) => y.y, [Math.max(0, h - p), p]);
      return S.domain(l), S;
    }
    return mi(g, (S) => S.y, [Math.max(0, h - p), p]);
  }, [g, h, l]), P = G.useMemo(() => ({
    xScale: x,
    yScale: C,
    getXTicks: (S = s) => x.ticks(S),
    getYTicks: (S = i) => C.ticks(S)
  }), [x, C, s, i]);
  return /* @__PURE__ */ r.jsx(uo.Provider, { value: P, children: o });
}, gi = ({
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
  tickFormatPreset: g
}) => {
  const v = Ln(), m = bn(), p = t || (e === "x" ? v?.xScale : v?.yScale), x = n ?? (e === "x" ? 6 : 5), C = typeof o == "function", P = G.useMemo(() => {
    if (C || !g) return;
    const $ = (T) => new Intl.DateTimeFormat(void 0, T);
    switch (g) {
      case "dayShortMonth":
        return (T) => {
          const N = T instanceof Date ? T : new Date(T);
          return `${N.getDate()}
${$({ month: "short" }).format(N)}`;
        };
      case "dayShortMonthYear":
        return (T) => {
          const N = T instanceof Date ? T : new Date(T);
          return `${N.getDate()}
${$({ month: "short" }).format(N)} ${N.getFullYear()}`;
        };
      case "shortMonth":
        return (T) => {
          const N = T instanceof Date ? T : new Date(T);
          return $({ month: "short" }).format(N);
        };
      case "shortMonthYear":
        return (T) => {
          const N = T instanceof Date ? T : new Date(T);
          return `${$({ month: "short" }).format(N)} ${N.getFullYear()}`;
        };
      case "hourMinute":
        return (T) => {
          const N = T instanceof Date ? T : new Date(T);
          return $({ hour: "2-digit", minute: "2-digit" }).format(N);
        };
      default:
        return;
    }
  }, [C, g]);
  let S = C ? o : P || (($) => String($));
  const y = G.useMemo(() => a && Array.isArray(a) ? a : p ? typeof p.ticks == "function" ? p.ticks(x) : p.domain ? p.domain() : [] : [], [p, x, a]);
  if (e === "x" && !C && !g && y.length && y.every(($) => $ instanceof Date)) {
    const $ = y[0], T = y[y.length - 1], N = T.getTime() - $.getTime(), _ = 24 * 3600 * 1e3, D = 365 * _, k = $.getFullYear() === T.getFullYear(), b = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (N < 2 * _) {
      const L = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      S = (w) => L.format(w);
    } else if (N < 32 * _)
      S = (L) => {
        const w = L;
        return `${w.getDate()} ${b.format(w)}`;
      };
    else if (N < D && k)
      S = (L) => b.format(L);
    else if (N < 2 * D) {
      const L = /* @__PURE__ */ new Set();
      S = (w) => {
        const I = w, j = I.getMonth();
        return L.has(j) || L.add(j), `${b.format(I)} ${I.getFullYear()}`;
      };
    } else
      S = (L) => String(L.getFullYear());
  }
  if (!p || !m) return null;
  if (e === "x") {
    const $ = i ?? m.innerHeight, T = typeof p.bandwidth == "function", N = T ? p.bandwidth() : 0, _ = (b) => {
      const L = p(b);
      return T ? L + N / 2 : L;
    };
    let D = u ?? 0;
    if (d && u == null) {
      const b = y.map((w) => S(w).replace(/\n.*/g, "")), L = b.length ? b.reduce((w, I) => w + I.length, 0) / b.length : 0;
      D = Math.max(12, Math.round(L * 6 + 4));
    }
    const k = G.useMemo(() => {
      if (a && Array.isArray(a) || D <= 0) return y;
      const b = [];
      let L = -1 / 0;
      for (const w of y) {
        const I = _(w);
        I - L >= D && (b.push(w), L = I);
      }
      return b;
    }, [y, p, D, a, T, N]);
    return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${$})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ r.jsx("line", { x1: 0, x2: m.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      k.map((b, L) => {
        const w = S(b), I = c && w.length > c ? w.slice(0, Math.max(1, c - 1)) + "…" : w, j = h ? I.split(/\n/) : [I.replace(/\n/g, " ")], M = f < 0 ? "end" : f > 0 ? "start" : "middle";
        return /* @__PURE__ */ r.jsxs("g", { transform: `translate(${_(b)},0)`, children: [
          /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ r.jsxs("text", { y: 9, textAnchor: M, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: f ? `rotate(${f})` : void 0, fontFamily: "inherit", children: [
            j.map((te, V) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: V === 0 ? 0 : "1.1em", children: te }, V)),
            I !== w && /* @__PURE__ */ r.jsx("title", { children: w })
          ] })
        ] }, b?.toString?.() || L);
      })
    ] });
  }
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    y.map(($, T) => {
      const N = S($), _ = c && N.length > c ? N.slice(0, Math.max(1, c - 1)) + "…" : N, D = h ? _.split(/\n/) : [_.replace(/\n/g, " ")];
      return /* @__PURE__ */ r.jsxs("g", { transform: `translate(0,${p($)})`, children: [
        /* @__PURE__ */ r.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ r.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          D.map((k, b) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: b === 0 ? 0 : "1.1em", children: k }, b)),
          _ !== N && /* @__PURE__ */ r.jsx("title", { children: N })
        ] })
      ] }, $?.toString?.() || T);
    }),
    s && /* @__PURE__ */ r.jsx("text", { transform: "rotate(-90)", x: -m.innerHeight / 2, y: -m.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: s })
  ] });
}, Th = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: o
}) => {
  const s = Ln(), i = bn();
  if (!s || !i) return null;
  const l = e === "y" ? s.getYTicks(t) : s.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", o].filter(Boolean).join(" "), children: [
    e === "y" && l.map((u, c) => /* @__PURE__ */ r.jsx("line", { x1: 0, x2: i.innerWidth, y1: s.yScale(u), y2: s.yScale(u), stroke: n, strokeDasharray: a }, c)),
    e === "x" && l.map((u, c) => /* @__PURE__ */ r.jsx("line", { y1: 0, y2: i.innerHeight, x1: s.xScale(u), x2: s.xScale(u), stroke: n, strokeDasharray: a }, c))
  ] });
}, Dh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, Cr = {
  color: Dh
}, Ih = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Ia = {
  color: Ih
}, $h = [
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
let ts = null, ns = null, rs = null, Al = "optimized";
function Mh() {
  const e = { color: { ...Ia.color, ...Cr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
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
    return $h;
  }
}
function Ph() {
  return ts || (ts = Mh()), ts;
}
function Fh(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function as(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Lh(e, t, n) {
  const a = as(e), o = as(t), s = as(n), i = a * 0.4124 + o * 0.3576 + s * 0.1805, l = a * 0.2126 + o * 0.7152 + s * 0.0722, u = a * 0.0193 + o * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: u * 100 };
}
function Ah(e, t, n) {
  let i = e / 95.047, l = t / 100, u = n / 108.883;
  const c = (d) => d > 8856e-6 ? Math.cbrt(d) : 7.787 * d + 16 / 116;
  return i = c(i), l = c(l), u = c(u), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - u) };
}
function Rl(e) {
  const t = Fh(e);
  if (!t) return null;
  const n = Lh(t.r, t.g, t.b);
  return Ah(n.x, n.y, n.z);
}
function xi(e, t) {
  const n = e.L - t.L, a = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(n * n + a * a + o * o);
}
function Rh() {
  const e = Ph();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Rl(i));
  let n = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let u = 0, c = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (u += xi(l, t[f]), c++);
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
          const g = xi(c, h);
          g < d && (d = g);
        }
      }
      d > l && (l = d, i = u);
    }
    s.push(i), o.delete(i);
  }
  return s.map((i) => e[i]);
}
function Eh() {
  return ns || (ns = Rh()), ns;
}
function Bh(e, t, n) {
  const a = (e + 16) / 116, o = t / 500 + a, s = a - n / 200, i = (d) => {
    const f = d * d * d;
    return f > 8856e-6 ? f : (d - 16 / 116) / 7.787;
  }, l = i(o) * 95.047, u = i(a) * 100, c = i(s) * 108.883;
  return { X: l, Y: u, Z: c };
}
function Hh(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, o = e * -0.9689 + t * 1.8758 + n * 0.0415, s = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), o = Math.min(1, Math.max(0, i(o))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(a * 255), g: Math.round(o * 255), b: Math.round(s * 255) };
}
function Oh(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function Uh(e, t) {
  const n = Rl(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: o, Y: s, Z: i } = Bh(a, n.a, n.b), l = Hh(o, s, i);
  return Oh(l.r, l.g, l.b);
}
function Wh() {
  const e = Eh(), n = [12, -12, 24, -24].map((o) => e.map((s) => Uh(s, o))), a = [...e];
  return n.forEach((o) => a.push(...o)), a;
}
function zh() {
  return (!rs || Vh()) && (rs = Wh(), El = Al), rs;
}
let El = null;
function Vh() {
  return El !== Al;
}
function Ht(e) {
  const t = zh();
  return t[e % t.length];
}
let Kn = null, vr = null, yr = null, wr = null;
function Gh() {
  const e = Cr?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    Kn = [];
    for (let s = 1; s <= 12; s++) {
      const i = t[String(s)]?.$value || t[String(s)]?.value;
      Kn.push(typeof i == "string" ? i : "#212b32");
    }
    const n = e.region || {};
    vr = {}, Object.keys(n).forEach((s) => {
      const i = n[s]?.$value || n[s]?.value;
      typeof i == "string" && (vr[s] = i);
    });
    const a = e.severity || {}, o = e["org-level"] || {};
    wr = {}, Object.keys(o).forEach((s) => {
      const i = o[s]?.$value || o[s]?.value;
      typeof i == "string" && (wr[s] = i);
    }), yr = {}, Object.keys(a).forEach((s) => {
      const i = a[s]?.$value || a[s]?.value;
      typeof i == "string" && (yr[s] = i);
    });
  }
}
function $a() {
  (!Kn || !vr || !yr || !wr) && Gh();
}
function Mn(e) {
  return $a(), Kn ? Kn[e % Kn.length] : "#212b32";
}
function Yh(e) {
  return $a(), vr ? vr[e] : void 0;
}
function Zr(e, t) {
  return Yh(e) || Mn(t);
}
const Ss = ["low", "moderate", "high", "critical"];
let ss = null;
function qh() {
  const e = { color: { ...Ia.color, ...Cr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, u) => l ? l[u] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return Ss.forEach((a) => {
    const o = t(`color.data-viz.severity.${a}`);
    o && (n[a] = o);
  }), n;
}
function Bl() {
  return ss || (ss = qh()), ss;
}
function Xh(e) {
  return Bl()[e.toLowerCase()];
}
function Kh(e, t) {
  return Xh(e) || Bl()[Ss[t % Ss.length]] || Ht(t);
}
function Jh(e) {
  return $a(), yr ? yr[e] : void 0;
}
function Zh(e, t) {
  return Jh(e) || Mn(t);
}
const ks = ["trust", "ambulance", "icb", "region"];
let os = null;
function Qh() {
  const e = { color: { ...Ia.color, ...Cr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, u) => l ? l[u] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return ks.forEach((a) => {
    const o = t(`color.data-viz.org-level.${a}`);
    o && (n[a] = o);
  }), n;
}
function Hl() {
  return os || (os = Qh()), os;
}
function em(e) {
  return Hl()[e.toLowerCase()];
}
function tm(e, t) {
  return em(e) || Hl()[ks[t % ks.length]] || Ht(t);
}
function nm(e) {
  return $a(), wr ? wr[e] : void 0;
}
function rm(e, t) {
  return nm(e) || Mn(t);
}
let is = null;
const am = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function sm(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function om() {
  const e = { color: { ...Ia.color, ...Cr.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const i = o.split(".").reduce((u, c) => u ? u[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return am.forEach((o) => {
    const s = t(`color.data-viz.region.${o}`);
    s ? n[o] = s : a.push(o);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function im() {
  return is || (is = om()), is;
}
function lm(e) {
  return im()[sm(e)];
}
function Jn(e, t) {
  return lm(e) || Ht(t);
}
const Ol = G.createContext(null), Nr = () => G.useContext(Ol), Mv = ({
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
  return /* @__PURE__ */ r.jsx(Ol.Provider, { value: c, children: t });
}, Ul = G.createContext(null), cn = () => G.useContext(Ul), cm = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = Ln(), o = Nr(), [s, i] = G.useState(null), l = G.useRef(/* @__PURE__ */ new Map()), [u, c] = G.useState([]), d = G.useCallback(
    (T, N) => {
      l.current.set(T, N);
    },
    []
  ), f = G.useCallback((T) => {
    l.current.delete(T);
  }, []), h = G.useCallback(
    (T, N) => {
      if (!a) return;
      const { xScale: _, yScale: D } = a;
      let k = null, b = 1 / 0;
      l.current.forEach((L, w) => {
        L.forEach((I, j) => {
          const M = _(I.x), te = D(I.y), V = M - T, E = te - N, O = Math.sqrt(V * V + E * E);
          O < b && (b = O, k = {
            seriesId: w,
            index: j,
            x: I.x,
            y: I.y,
            clientX: M,
            clientY: te
          });
        });
      }), k && b <= t ? i(k) : i(null);
    },
    [a, t]
  ), g = G.useCallback(() => i(null), []);
  G.useEffect(() => {
    if (!s) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: T, yScale: N } = a, _ = [];
    l.current.forEach((D, k) => {
      D.forEach((b, L) => {
        (s.x instanceof Date && b.x instanceof Date ? b.x.getTime() === s.x.getTime() : b.x === s.x) && _.push({
          seriesId: k,
          index: L,
          x: b.x,
          y: b.y,
          clientX: T(b.x),
          clientY: N(b.y)
        });
      });
    }), _.sort((D, k) => D.seriesId.localeCompare(k.seriesId)), c(_);
  }, [s, a]);
  const v = G.useCallback(
    (T) => {
      if (!s) return;
      const N = l.current.get(s.seriesId);
      if (!N) return;
      let _ = s.index + T;
      if (_ < 0 || _ >= N.length) {
        if (!n) return;
        _ = (_ + N.length) % N.length;
      }
      const D = N[_];
      if (!a) return;
      const { xScale: k, yScale: b } = a;
      i({
        seriesId: s.seriesId,
        index: _,
        x: D.x,
        y: D.y,
        clientX: k(D.x),
        clientY: b(D.y)
      });
    },
    [s, a, n]
  ), m = G.useCallback(
    (T) => {
      let N = Array.from(l.current.keys());
      if (o && (N = N.filter((M) => !o.isHidden(M))), N.length === 0) return;
      if (!s) {
        const M = N[0], te = l.current.get(M);
        if (!te || !a) return;
        const { xScale: V, yScale: E } = a, O = te[0];
        i({
          seriesId: M,
          index: 0,
          x: O.x,
          y: O.y,
          clientX: V(O.x),
          clientY: E(O.y)
        });
        return;
      }
      const _ = N.indexOf(s.seriesId);
      if (_ === -1) return;
      let D = _ + T;
      if (D < 0 || D >= N.length) {
        if (!n) return;
        D = (D + N.length) % N.length;
      }
      const k = N[D], b = l.current.get(k);
      if (!b || !a) return;
      const L = Math.min(s.index, b.length - 1), w = b[L], { xScale: I, yScale: j } = a;
      i({
        seriesId: k,
        index: L,
        x: w.x,
        y: w.y,
        clientX: I(w.x),
        clientY: j(w.y)
      });
    },
    [s, a, n, o]
  ), p = G.useCallback(() => {
    let T = Array.from(l.current.keys());
    if (o && (T = T.filter((L) => !o.isHidden(L))), T.length === 0) return;
    const N = s ? s.seriesId : T[0], _ = l.current.get(N);
    if (!_ || _.length === 0 || !a) return;
    const D = _[0], { xScale: k, yScale: b } = a;
    i({
      seriesId: N,
      index: 0,
      x: D.x,
      y: D.y,
      clientX: k(D.x),
      clientY: b(D.y)
    });
  }, [s, a, o]), x = G.useCallback(() => {
    let T = Array.from(l.current.keys());
    if (o && (T = T.filter((w) => !o.isHidden(w))), T.length === 0) return;
    const N = s ? s.seriesId : T[0], _ = l.current.get(N);
    if (!_ || _.length === 0 || !a) return;
    const D = _.length - 1, k = _[D], { xScale: b, yScale: L } = a;
    i({
      seriesId: N,
      index: D,
      x: k.x,
      y: k.y,
      clientX: b(k.x),
      clientY: L(k.y)
    });
  }, [s, a, o]), C = G.useCallback(
    () => v(1),
    [v]
  ), P = G.useCallback(
    () => v(-1),
    [v]
  ), S = G.useCallback(
    () => m(1),
    [m]
  ), y = G.useCallback(
    () => m(-1),
    [m]
  ), $ = G.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: u,
      focusNearest: h,
      clear: g,
      registerSeries: d,
      unregisterSeries: f,
      focusNextPoint: C,
      focusPrevPoint: P,
      focusNextSeries: S,
      focusPrevSeries: y,
      focusFirstPoint: p,
      focusLastPoint: x
    }),
    [
      s,
      u,
      h,
      g,
      d,
      f,
      C,
      P,
      S,
      y,
      p,
      x
    ]
  );
  return /* @__PURE__ */ r.jsx(Ul.Provider, { value: $, children: e });
}, um = ({
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
  const h = Ln();
  if (!h) return null;
  const { xScale: g, yScale: v } = h, p = Nr()?.isHidden(e.id) ?? !1, x = p && l === "fade";
  if (p && l === "remove")
    return null;
  const C = cn();
  G.useEffect(() => {
    if (!C) return;
    const N = e.data.map((_) => ({ x: i(_), y: _.y }));
    return C.registerSeries(e.id, N), () => C.unregisterSeries(e.id);
  }, [C, e.id, e.data, i]);
  const P = G.useMemo(
    () => _s(
      e.data,
      (N) => g(i(N)),
      (N) => v(N.y),
      { smooth: c }
    ),
    [e.data, g, v, i, c]
  ), S = G.useMemo(() => {
    if (!e.data.length) return "";
    const [N] = v.domain(), _ = ws().x((D) => g(i(D))).y0(() => v(N)).y1((D) => v(D.y));
    return c && _.curve(Jr), _(e.data) || "";
  }, [e.data, g, v, i, c]), y = f && f[t], $ = e.color || y || (n === "region" ? Jn(e.id, t) : Ht(t)), T = n === "region" ? Zr(e.id, t) : Mn(t);
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: x ? 0.25 : 1,
      "aria-hidden": x ? !0 : void 0,
      children: [
        d && /* @__PURE__ */ r.jsx(
          "path",
          {
            d: S,
            fill: `url(#${d})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: P,
            fill: "none",
            stroke: $,
            strokeWidth: u,
            role: "presentation"
          }
        ),
        a && e.data.map((N, _) => {
          const D = g(i(N)), k = v(N.y), b = o ? 0 : -1, L = !x && (o && _ === s || C?.focused?.seriesId === e.id && C.focused.index === _), w = () => {
            C && !x && C.setFocused({
              seriesId: e.id,
              index: _,
              x: i(N),
              y: N.y,
              clientX: D,
              clientY: k
            });
          }, I = () => {
            C && C.focused?.seriesId === e.id && C.focused.index === _ && C.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: D,
              cy: k,
              r: L ? 5 : 3.5,
              stroke: L ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : T,
              strokeWidth: L ? 2 : 1,
              fill: L ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : $,
              className: "fdp-line-point",
              tabIndex: x ? -1 : b,
              "aria-label": `${e.label || e.id} ${i(N).toDateString()} value ${N.y}`,
              "data-series": e.id,
              "data-index": _,
              onMouseEnter: w,
              onFocus: w,
              onMouseLeave: I,
              onBlur: I
            },
            _
          );
        })
      ]
    }
  );
}, dm = ({ polite: e = !0, format: t }) => {
  const n = cn(), [a, o] = G.useState(""), s = G.useRef("");
  return G.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let u;
    if (l && l.length > 1) {
      const c = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      u = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      u = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : fm(i.seriesId, i.x, i.y, i.index);
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
function fm(e, t, n, a) {
  const o = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${o}, value ${n}`;
}
const Pv = () => {
  const e = cn(), t = bn();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: o, innerHeight: s } = t, i = Math.min(Math.max(n.clientX, 0), o), l = Math.min(Math.max(n.clientY, 0), s), u = i + 8, c = l - 8, d = a.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), h = d ? f : `${f} • ${n.y}`, g = /\d+$/.exec(n.seriesId || ""), v = g ? parseInt(g[0], 10) - 1 : 0, m = Ht(v >= 0 ? v : 0) || "#005eb8", p = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: p, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: p, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: m, stroke: "#fff", strokeWidth: 0.5 }),
    d ? (() => {
      const C = a.map((T) => `${T.seriesId}: ${T.y}`), P = [h, ...C], S = P.reduce((T, N) => Math.max(T, N.length), 0), y = Math.max(90, S * 6.2 + 16), $ = 16 * P.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: u, y: c - $, rx: 4, ry: 4, width: y, height: $, fill: "#212b32", opacity: 0.92 }),
        P.map((T, N) => /* @__PURE__ */ r.jsx("text", { x: u + 8, y: c - $ + 6 + 16 * (N + 0.7), fill: "#fff", fontSize: 12, children: T }, N))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: u, y: c - 24, rx: 4, ry: 4, width: Math.max(60, h.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: u + 8, y: c - 8, fill: "#fff", fontSize: 12, children: h })
    ] })
  ] });
}, Fv = ({
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
  const c = Nr(), d = !!(c && !a && !l && s === void 0), f = a || d, h = e || [], g = s !== void 0, [v, m] = G.useState(new Set(i)), p = g ? new Set(s) : v, [x, C] = G.useState(""), P = (S) => {
    if (d && c) {
      const b = c.isHidden(S);
      c.toggle(S);
      const w = h.find((j) => j.id === S)?.label || S, I = u ? u(S, b, w) : `${w} ${b ? "shown" : "hidden"}`;
      C(I);
      return;
    }
    if (!f) return;
    const y = new Set(p), $ = y.has(S);
    $ ? y.delete(S) : y.add(S), g || m(y);
    const T = h.filter((b) => !y.has(b.id)).map((b) => b.id), N = Array.from(y);
    l?.(T, N);
    const D = h.find((b) => b.id === S)?.label || S, k = u ? u(S, $, D) : `${D} ${$ ? "shown" : "hidden"}`;
    C(k);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: h.map((S, y) => {
      const $ = S.palette || t, T = S.color || ($ === "region" ? Jn(S.id, y) : $ === "severity" ? Kh(S.id, y) : $ === "org-level" ? tm(S.id, y) : Ht(y));
      let N = S.stroke || ($ === "region" ? Zr(S.id, y) : $ === "severity" ? Zh(S.id, y) : $ === "org-level" ? rm(S.id, y) : Mn(y));
      if (o && N) {
        const k = N.trim().toLowerCase();
        (k === "#fff" || k === "#ffffff" || k === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(k)) && (N = "#212b32");
      }
      const _ = d && c ? c.isHidden(S.id) : p.has(S.id), D = f ? {
        "aria-pressed": !_,
        "aria-label": `${S.label} (${_ ? "show" : "hide"})`,
        onClick: () => P(S.id)
      } : { "aria-label": S.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${_ ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: T,
              backgroundImage: S.patternDataUrl ? `url(${S.patternDataUrl})` : void 0,
              backgroundSize: S.patternDataUrl ? "auto" : void 0,
              borderColor: N
            },
            ...D
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: S.label })
      ] }, S.id);
    }) }),
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: x })
  ] });
}, Lv = ({
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
  const f = Ln();
  if (!f) return null;
  const { xScale: h, yScale: g } = f, m = Nr()?.isHidden(e.id) ?? !1, p = m && s === "fade";
  if (m && s === "remove") return null;
  const x = cn();
  G.useEffect(() => {
    if (!x) return;
    const T = e.data.map((N) => ({ x: a(N), y: N.y }));
    return x.registerSeries(e.id, T), () => x.unregisterSeries(e.id);
  }, [x, e.id, e.data, a]);
  const C = d && d[t], P = e.color || C || (n === "region" ? Jn(e.id, t) : Ht(t)), S = G.useMemo(() => u && u.length === e.data.length ? _s(
    e.data,
    (T) => h(a(T)),
    (T) => {
      const N = e.data.indexOf(T);
      return g(u[N].y1);
    },
    { smooth: l }
  ) : _s(
    e.data,
    (T) => h(a(T)),
    (T) => g(T.y),
    { smooth: l }
  ), [e.data, u, h, g, a, l]), y = G.useMemo(() => {
    if (u && u.length === e.data.length) {
      const k = ws().x((b) => h(a(b))).y0((b, L) => g(u[L].y0)).y1((b, L) => g(u[L].y1));
      return l && k.curve(Jr), k(e.data) || "";
    }
    const [T, N] = g.domain();
    let _ = i;
    _ < T ? _ = T : _ > N && (_ = N);
    const D = ws().x((k) => h(a(k))).y0(() => g(_)).y1((k) => g(k.y));
    return l && D.curve(Jr), D(e.data) || "";
  }, [e.data, u, h, g, a, i, l]), $ = G.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: p ? 0.25 : 1,
      "aria-hidden": p ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: $, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: P, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: P, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: y,
            fill: c ? `url(#${$})` : P,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !o && /* @__PURE__ */ r.jsx("path", { d: S, fill: "none", stroke: P, strokeWidth: 1 })
      ]
    }
  );
}, Av = ({
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
  allSeries: g,
  stacked: v,
  gapRatio: m = 0.15,
  minBarWidth: p,
  gradientFill: x = !0,
  gradientStrokeMatch: C = !0,
  opacity: P = 1,
  fadedOpacity: S = 0.25,
  flatFillOpacity: y = 1,
  colors: $
}) => {
  const T = Math.max(0, m), N = Ln(), _ = bn();
  if (!N || !_) return null;
  const { xScale: D, yScale: k } = N, L = Nr()?.isHidden(e.id) ?? !1, w = L && f === "fade";
  if (L && f === "remove") return null;
  const I = cn();
  G.useEffect(() => {
    if (!I) return;
    const Z = e.data.map((ne) => ({ x: o(ne), y: ne.y }));
    return I.registerSeries(e.id, Z), () => I.unregisterSeries(e.id);
  }, [I, e.id, e.data, o]);
  const j = typeof D.bandwidth == "function", M = j ? D.bandwidth() : void 0, te = G.useMemo(() => {
    if (M != null) return M;
    const Z = g && g.length ? g : [e], ne = [];
    Z.forEach((F) => {
      F.data.forEach((R) => {
        const K = D(o(R));
        Number.isFinite(K) && ne.push(K);
      });
    });
    const pe = ne.sort((F, R) => F - R);
    if (pe.length <= 1) return 40;
    const z = [];
    for (let F = 1; F < pe.length; F++)
      z.push(pe[F] - pe[F - 1]);
    return z.sort((F, R) => F - R), (z[Math.floor(z.length / 2)] || 40) * i;
  }, [e.data, g, D, o, i, M]), { basePerBar: V } = G.useMemo(() => {
    if (j) {
      const pe = te, z = Math.max(
        1,
        (pe - l * (n - 1)) / n
      ), ce = e.barWidth ?? u;
      let F = ce ? Math.min(ce, pe) : z;
      if (c) {
        const R = pe * Math.min(1, Math.max(0.05, d)), K = Math.max(
          1,
          (R - l * (n - 1)) / n
        );
        F = ce ? Math.min(F, K) : K;
      }
      return { basePerBar: F };
    }
    const Z = e.barWidth ?? u, ne = Math.max(
      1,
      (te - l * (n - 1)) / n
    );
    if (c) {
      const pe = g && g.length ? g : [e], z = [];
      pe.forEach(
        (ie) => ie.data.forEach((he) => {
          const ue = D(o(he));
          Number.isFinite(ue) && z.push(ue);
        })
      ), z.sort((ie, he) => ie - he);
      const ce = [];
      for (let ie = 1; ie < z.length; ie++)
        ce.push(z[ie] - z[ie - 1]);
      ce.sort((ie, he) => ie - he);
      const R = (ce[Math.floor(ce.length / 2)] || te) * Math.min(1, Math.max(0.05, d)), K = Math.max(
        1,
        (R - l * (n - 1)) / n
      );
      return { basePerBar: Z ? Math.min(Z, K) : K };
    }
    return Z ? { basePerBar: Math.min(Z, ne) } : { basePerBar: ne };
  }, [
    j,
    te,
    l,
    n,
    u,
    e.barWidth,
    c,
    d,
    g,
    D,
    o
  ]), E = G.useMemo(() => {
    if (j) return [];
    const Z = [];
    return (g && g.length ? g : [e]).forEach(
      (pe) => pe.data.forEach((z) => {
        const ce = D(o(z));
        Number.isFinite(ce) && Z.push(ce);
      })
    ), Z.sort((pe, z) => pe - z), Array.from(new Set(Z));
  }, [j, g, e, D, o]), O = G.useMemo(() => {
    if (j)
      return [];
    if (!E.length) return [];
    if (E.length === 1)
      return [
        { center: E[0], left: 0, right: _.innerWidth }
      ];
    const Z = [];
    for (let ne = 0; ne < E.length; ne++) {
      const pe = E[ne], z = ne === 0 ? 0 : (E[ne - 1] + pe) / 2, ce = ne === E.length - 1 ? _.innerWidth : (pe + E[ne + 1]) / 2;
      Z.push({
        center: pe,
        left: Math.max(0, z),
        right: Math.min(_.innerWidth, ce)
      });
    }
    return Z;
  }, [j, E, _.innerWidth]), U = G.useMemo(() => {
    if (j || !O.length)
      return;
    const Z = Math.min(1, Math.max(0.05, i)), ne = O.map((R) => Math.max(2, R.right - R.left)), pe = ne.map(
      (R) => Math.max(2, Math.min(R - 1, R * Z))
    );
    let z = Math.min(...pe);
    if (p)
      if (n <= 1) {
        const R = Math.min(...ne.map((K) => K - 1));
        R >= p && z < p && (z = Math.min(R, p));
      } else {
        const R = Math.min(...ne.map((oe) => oe - 1)), K = p * n + (n - 1) * (p * T);
        K <= R && z < K && (z = K);
      }
    if (n <= 1)
      return p && z < p && ne.every((K) => K >= p) ? { groupWidth: p, barWidth: p } : { groupWidth: z, barWidth: z };
    let ce = z / (n + (n - 1) * T);
    return ce < 1 && (ce = 1), p && ce < p && p * n + (n - 1) * (p * T) <= z && (ce = p), { groupWidth: ce * n + (n - 1) * (ce * T), barWidth: ce };
  }, [
    j,
    O,
    i,
    n,
    T,
    p
  ]), ae = $ && $[t] ? $[t] : void 0, W = e.color || ae || (a === "region" ? Jn(e.id, t) : Ht(t)), le = a === "region" ? Zr(e.id, t) : Mn(t), Se = C && (e.color || ae) ? W : le, de = Number.isFinite(k(0)) ? k(0) : k.range()[0], fe = G.useId();
  return v && v.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: w ? S : P,
      "aria-hidden": w ? !0 : void 0,
      children: [
        x && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: fe,
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
          const pe = o(Z), z = D(j ? Z.x : pe);
          let ce, F;
          if (j)
            ce = te, F = z;
          else {
            const q = O.find(
              (X) => Math.abs(X.center - z) < 0.5
            );
            if (!q || !U)
              ce = V, F = z - V / 2;
            else {
              const { groupWidth: X } = U;
              ce = X;
              let A = z - X / 2;
              A < q.left && (A = q.left), A + X > q.right && (A = Math.max(q.left, q.right - X)), F = A;
            }
          }
          const R = v[ne], K = k(R.y0), oe = k(R.y1), ie = Math.min(K, oe), he = Math.abs(oe - K) || 1;
          if (!j && p && ce < p) {
            const q = O.find(
              (X) => Math.abs(X.center - z) < 0.5
            );
            if (q) {
              const X = Math.max(2, q.right - q.left - 1), A = Math.min(X, p);
              A > ce && (ce = A, F = Math.max(
                q.left,
                Math.min(q.right - ce, z - ce / 2)
              ));
            }
          }
          const ue = !w && I?.focused?.seriesId === e.id && I.focused.index === ne, H = () => {
            !I || w || I.setFocused({
              seriesId: e.id,
              index: ne,
              x: pe,
              y: R.y1 - R.y0,
              clientX: F + ce / 2,
              clientY: ie
            });
          }, B = () => {
            I?.focused?.seriesId === e.id && I.focused.index === ne && I.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: F,
              y: ie,
              width: ce,
              height: he,
              fill: x ? `url(#${fe})` : W,
              ...x ? {} : { fillOpacity: y },
              stroke: ue ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : x && C ? W : void 0,
              strokeWidth: ue ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: w || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${pe instanceof Date ? pe.toDateString() : pe} value ${R.y1 - R.y0}`,
              onMouseEnter: H,
              onFocus: H,
              onMouseLeave: B,
              onBlur: B
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
      opacity: w ? S : P,
      "aria-hidden": w ? !0 : void 0,
      children: [
        x && /* @__PURE__ */ r.jsxs("defs", { children: [
          h === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: fe,
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
            const z = $ && $[ne] || (a === "region" ? Jn(String(Z.x), ne) : Ht(ne)), ce = `${fe}-${ne}`;
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
        e.data.map((Z, ne) => {
          const pe = o(Z), z = D(j ? Z.x : pe);
          let ce, F;
          if (j) {
            const Q = te;
            if (n <= 1)
              F = Q, ce = z;
            else {
              F = Math.max(
                1,
                Q / (n + (n - 1) * T)
              );
              const ee = F * T, J = F * n + ee * (n - 1);
              ce = z + (Q - J) / 2 + t * (F + ee);
            }
          } else {
            const Q = O.find((ee) => ee.center === z);
            if (!Q || !U)
              F = V, ce = z - V / 2, p && F < p && (F = p, ce = z - F / 2);
            else {
              const { barWidth: ee } = U;
              F = ee;
              const J = n > 1 ? ee * T : 0, se = F * n + J * (n - 1);
              let me = z - se / 2;
              me < Q.left && (me = Q.left), me + se > Q.right && (me = Math.max(Q.left, Q.right - se)), ce = me + t * (F + J);
            }
            if (p && F < p) {
              const ee = O.find(
                (J) => Math.abs(J.center - z) < 0.5
              );
              if (ee) {
                const J = Math.max(2, ee.right - ee.left - 1), se = Math.min(J, p);
                if (se > F)
                  if (n <= 1)
                    F = se, ce = Math.max(
                      ee.left,
                      Math.min(ee.right - F, z - F / 2)
                    );
                  else {
                    const me = se * T, ve = se * n + me * (n - 1);
                    if (ve <= ee.right - ee.left - 1) {
                      F = se;
                      const ye = ve;
                      let je = z - ye / 2;
                      je < ee.left && (je = ee.left), je + ye > ee.right && (je = Math.max(
                        ee.left,
                        ee.right - ye
                      )), ce = je + t * (F + me);
                    }
                  }
              }
            }
          }
          const R = ce + F / 2, K = k(Z.y), oe = Math.min(de, K), ie = Math.abs(de - K), he = !w && I?.focused?.seriesId === e.id && I.focused.index === ne, ue = () => {
            !I || w || I.setFocused({
              seriesId: e.id,
              index: ne,
              x: pe,
              y: Z.y,
              clientX: R,
              clientY: K
            });
          }, H = () => {
            I?.focused?.seriesId === e.id && I.focused.index === ne && I.clear();
          }, B = h === "category" && $ ? $[ne] : void 0, q = h === "category" ? B || (a === "region" ? Jn(String(Z.x), ne) : Ht(ne)) : W, X = h === "category" ? `${fe}-${ne}` : fe, A = x && C ? q : h === "category" ? a === "region" ? Zr(String(Z.x), ne) : Mn(ne) : Se, Y = he ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : A || q;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: ce,
              y: oe,
              width: F,
              height: ie || 1,
              fill: x ? `url(#${X})` : q,
              ...x ? {} : { fillOpacity: y },
              stroke: Y,
              strokeWidth: he ? 2 : 1,
              className: "fdp-bar",
              tabIndex: w || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${pe instanceof Date ? pe.toDateString() : pe} value ${Z.y}`,
              onMouseEnter: ue,
              onFocus: ue,
              onMouseLeave: H,
              onBlur: H
            },
            ne
          );
        })
      ]
    }
  );
}, Rv = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: o = 0.05,
  children: s,
  yTickCount: i = 5
}) => {
  const l = bn(), u = t ?? l?.innerWidth ?? 0, c = n ?? l?.innerHeight ?? 0, d = G.useMemo(() => e.flatMap((p) => p.data), [e]), f = G.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    return d.forEach((x) => p.add(x.x)), Array.from(p);
  }, [d]), h = G.useMemo(
    () => Math.max(0, ...d.map((p) => p.y)),
    [d]
  ), g = G.useMemo(
    () => qi().domain(f).range([0, u]).paddingInner(a).paddingOuter(o),
    [f, u, a, o]
  ), v = G.useMemo(
    () => Wr().domain([0, h]).nice().range([c, 0]),
    [h, c]
  ), m = G.useMemo(
    () => ({
      xScale: g,
      yScale: v,
      getXTicks: () => f,
      getYTicks: (p = i) => v.ticks(p)
    }),
    [g, v, f, i]
  );
  return /* @__PURE__ */ r.jsx(uo.Provider, { value: m, children: s });
}, Ev = ({
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
      className: Xr("fdp-chart fdp-chart--noscript", o),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": Xr(d, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ r.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ r.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
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
}, Bv = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
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
}, pm = ({
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
  style: g,
  id: v,
  announceDelta: m = !0,
  visual: p
}) => {
  const x = G.useId(), C = v || x, P = `${C}-label`, S = `${C}-value`, y = `${C}-delta`, $ = typeof t == "number" && !Number.isNaN(t), T = c ? "—" : d ? "" : $ ? f ? f(t) : t.toLocaleString() : t;
  let N, _ = "", D = "";
  if (a && !c && !d) {
    N = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const k = Math.abs(a.value), b = N === "up" ? `+${k}` : N === "down" ? `-${k}` : "0", L = a.isPercent ? "%" : "";
    if (_ = `${b}${L}`, a.ariaLabel)
      D = a.ariaLabel;
    else {
      const w = a.invert ? N === "down" : N === "up";
      D = `${N === "neutral" ? "no change" : N === "up" ? "up" : "down"} ${k}${L}${N === "neutral" ? "" : w ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: Xr(
        "fdp-metric-card",
        s && `fdp-metric-card--${s}`,
        o && `fdp-metric-card--status-${o}`,
        c && "fdp-metric-card--loading",
        d && "fdp-metric-card--error",
        h
      ),
      style: g,
      role: "group",
      "aria-labelledby": P,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ r.jsx("h3", { id: P, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ r.jsx("div", { id: S, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : d ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: d }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: T }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: y,
              "aria-label": D,
              className: Xr(
                "fdp-metric-card__delta",
                N && `fdp-metric-card__delta--${N}`
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
        m && a && !a.ariaLabel && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: D })
      ] })
    }
  );
};
let Cs = null;
try {
  Cs = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const Xe = (e, t) => {
  if (!Cs) return t;
  const n = e.split(".");
  let a = Cs;
  for (const s of n) {
    if (a == null) break;
    a = a[s];
  }
  const o = a;
  return o == null ? t : typeof o == "string" || typeof o == "number" ? String(o) : o.$value != null ? String(o.$value) : o.value != null ? String(o.value) : t;
}, Ma = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: Xe("gradient.stop.start-opacity", "0.12"),
  mid: Xe("gradient.stop.mid-opacity", "0.03"),
  end: Xe("gradient.stop.end-opacity", "0"),
  triStart: Xe(
    "gradient.stop.triangle-start-opacity",
    Xe("gradient.stop.start-opacity", "0.12")
  ),
  triMid: Xe(
    "gradient.stop.triangle-mid-opacity",
    Xe("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: Xe(
    "gradient.stop.triangle-end-opacity",
    Xe("gradient.stop.end-opacity", "0")
  )
});
var xt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(xt || {}), Ae = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Ae || {}), Le = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(Le || {}), zt = /* @__PURE__ */ ((e) => (e.SinglePoint = "single_point", e.TwoSigma = "two_sigma", e.Shift = "shift", e.Trend = "trend", e))(zt || {});
const fo = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
fo.reduce(
  (e, t, n) => (e[t] = n + 1, e),
  {}
);
const hm = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, mm = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, Wl = fo.reduce(
  (e, t, n) => (e[t] = {
    id: t,
    rank: n + 1,
    label: hm[t],
    category: mm[t],
    participatesInRanking: !0
  }, e),
  {}
);
fo.map(
  (e) => Wl[e]
);
var _t = /* @__PURE__ */ ((e) => (e.Up = "up", e.Down = "down", e))(_t || {}), wt = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(wt || {}), ot = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(ot || {}), $t = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))($t || {}), Fr = /* @__PURE__ */ ((e) => (e.Legacy = "legacy", e.DirectionalFirst = "directional_first", e))(Fr || {}), zl = /* @__PURE__ */ ((e) => (e.None = "none", e.SqlRankingV26a = "sql_ranking_v2_6a", e))(zl || {}), Wn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(Wn || {}), Vl = /* @__PURE__ */ ((e) => (e.Sql = "sql", e.Conflict = "conflict", e))(Vl || {}), pr = /* @__PURE__ */ ((e) => (e.ImprovementValueBeforePruning = "improvementValueBeforePruning", e.ConcernValueBeforePruning = "concernValueBeforePruning", e))(pr || {});
const Zn = {
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
function Pa(e) {
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
function Fa(e) {
  switch (e) {
    case Le.Improvement:
      return "Improvement signal";
    case Le.Concern:
      return "Concern signal";
    case Le.Neither:
      return "Common cause variation";
    case Le.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function Gl(e) {
  switch (e) {
    case ot.Pass:
      return "Target met";
    case ot.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function gm(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((n - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const Lt = {
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
function Yl(e) {
  return e ? Lt[e]?.token ?? Lt.neither.token : Lt.neither.token;
}
function xm(e) {
  return e ? Lt[e]?.hex ?? Lt.neither.hex : Lt.neither.hex;
}
var gn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(gn || {});
const bm = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, vm = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var at = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(at || {}), Me = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Me || {}), St = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(St || {}), Ne = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Ne || {});
const ym = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, o = parseInt(t.slice(4, 6), 16) / 255, s = [n, a, o].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
}, La = {
  special_cause_deteriorating: {
    hex: Lt.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: Lt.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: Lt.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: Lt.suppressed.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(La).forEach((e) => {
  e.text || (e.text = ym(e.hex));
});
const po = (e) => La[e], Aa = (e) => La[e].judgement || "none", bi = {
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
function wm(e, t) {
  let n;
  return e === "common_cause" ? n = bi.common : n = bi.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
var ct = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(ct || {}), xn = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(xn || {}), _r = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(_r || {});
const ql = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === Ae.Up ? at.HigherIsBetter : i.improvementDirection === Ae.Down ? at.LowerIsBetter : at.ContextDependent : i.polarity && (l = i.polarity);
    let u;
    switch (i.variationIcon) {
      case Le.Improvement:
        u = Ne.SpecialCauseImproving;
        break;
      case Le.Concern:
        u = Ne.SpecialCauseDeteriorating;
        break;
      case Le.Neither:
        u = i.specialCauseNeutral ? Ne.SpecialCauseNoJudgement : Ne.CommonCause;
        break;
      case Le.Suppressed:
      default:
        u = Ne.SpecialCauseNoJudgement;
        break;
    }
    let c = i.trend;
    return c || (u === Ne.SpecialCauseImproving ? c = l === at.LowerIsBetter ? Me.Lower : Me.Higher : u === Ne.SpecialCauseDeteriorating ? c = l === at.LowerIsBetter ? Me.Higher : Me.Lower : u === Ne.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? c = Me.Higher : i.lowSideSignal && !i.highSideSignal ? c = Me.Lower : c = Me.Higher : c = Me.Higher), { state: u, direction: c, polarity: l ?? at.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Ne.SpecialCauseImproving || i.state === Ne.SpecialCauseDeteriorating) && i.polarity && (i.state === Ne.SpecialCauseImproving ? l = i.polarity === at.LowerIsBetter ? Me.Lower : Me.Higher : l = i.polarity === at.LowerIsBetter ? Me.Higher : Me.Lower), l || (i.state === Ne.SpecialCauseImproving ? l = Me.Higher : i.state === Ne.SpecialCauseDeteriorating ? l = Me.Lower : l = Me.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? at.ContextDependent
    };
  }
  const n = e;
  t();
  const o = {
    [St.Improving]: Ne.SpecialCauseImproving,
    [St.Deteriorating]: Ne.SpecialCauseDeteriorating,
    [St.No_Judgement]: Ne.SpecialCauseNoJudgement,
    [St.None]: Ne.CommonCause
  }[n.judgement];
  let s;
  return n.judgement === St.Improving ? s = n.polarity === at.LowerIsBetter ? Me.Lower : Me.Higher : n.judgement === St.Deteriorating ? s = n.polarity === at.LowerIsBetter ? Me.Higher : Me.Lower : s = n.trend ?? Me.Higher, { state: o, direction: s, polarity: n.polarity };
};
function Xl(e, t) {
  const { state: n, direction: a, polarity: o } = ql(e), s = Aa(n), i = a === Me.Higher ? "above" : "below", l = a === Me.Higher ? "upwards" : "downwards", u = (() => {
    switch (o) {
      case at.HigherIsBetter:
        return "For this measure, higher values are better.";
      case at.LowerIsBetter:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  return [
    (() => {
      switch (s) {
        case St.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case St.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case St.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case St.None:
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
const ls = (e, t, n, a, o, s) => /* @__PURE__ */ r.jsxs("defs", { children: [
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
] }), Ra = ({
  data: e,
  size: t = 44,
  ariaLabel: n,
  showLetter: a = !0,
  dropShadow: o = !0,
  gradientWash: s = !1,
  variant: i = xn.Classic,
  runLength: l = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: u = _r.Polarity,
  letterOverride: c,
  ...d
}) => {
  const f = Lr(), h = Lr(), {
    start: g,
    mid: v,
    end: m,
    triStart: p,
    triMid: x,
    triEnd: C
  } = Ma(), { state: P, direction: S, polarity: y } = Pe(
    () => ql(e),
    [e]
  ), $ = Pe(() => po(P), [P]), T = Pe(() => Aa(P), [P]), N = T === St.Improving || T === St.Deteriorating;
  let _ = "";
  a && N && (u === _r.Polarity ? y === at.HigherIsBetter ? _ = "H" : y === at.LowerIsBetter ? _ = "L" : _ = "" : _ = S === Me.Higher ? "H" : "L"), c !== void 0 && (_ = c);
  const D = P !== Ne.CommonCause, k = P === Ne.SpecialCauseNoJudgement, b = Xe("common-cause", "#A6A6A6"), L = D ? $.hex : b, w = Pe(
    () => wm(P, S),
    [P, S]
  ), I = n || `${$.label}${_ ? S === Me.Higher ? " – Higher" : " – Lower" : ""}`, j = Xl(
    e
  );
  if (i === xn.TriangleWithRun) {
    const O = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], U = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let ae = null;
    P === Ne.SpecialCauseImproving || P === Ne.SpecialCauseDeteriorating ? ae = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (S === Me.Higher ? O : U).map((ce) => ce.join(",")).join(" "),
        fill: $.hex,
        stroke: $.hex,
        strokeWidth: 6,
        transform: S === Me.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : P === Ne.SpecialCauseNoJudgement && (ae = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: S === Me.Higher ? O.map((ce) => ce.join(",")).join(" ") : U.map((ce) => ce.join(",")).join(" "),
        fill: $.hex,
        stroke: $.hex,
        strokeWidth: 6,
        transform: S === Me.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const W = Math.max(0, Math.min(5, Math.floor(l || 0))), le = P === Ne.CommonCause ? 160 : S === Me.Higher ? 220 : 70, Se = 10, de = 26, fe = 150 - 2 * de, Z = P === Ne.SpecialCauseImproving ? Xe("improvement", "#00B0F0") : P === Ne.SpecialCauseDeteriorating ? Xe("concern", "#E46C0A") : b, ne = Array.from({ length: 5 }).map((ce, F) => {
      const K = (P === Ne.SpecialCauseImproving || P === Ne.SpecialCauseDeteriorating) && F >= 5 - W ? Z : b;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: fe + F * de,
          cy: le,
          r: Se,
          fill: K,
          stroke: K,
          strokeWidth: 1
        },
        F
      );
    }), pe = ls(
      $.hex,
      f,
      h,
      o,
      s,
      [
        { offset: "0%", opacity: p },
        { offset: "75%", opacity: x },
        { offset: "100%", opacity: C }
      ]
    ), z = P === Ne.CommonCause || S === Me.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": I,
        "aria-description": j,
        ...d,
        children: [
          pe,
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
            ae,
            _ && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: S === Me.Higher ? 155 : 145,
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
  if (i === xn.Triangle) {
    const O = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], U = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], ae = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let W = null;
    P === Ne.SpecialCauseImproving || P === Ne.SpecialCauseDeteriorating ? W = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (S === Me.Higher ? O : U).map((Se) => Se.join(",")).join(" "),
        fill: $.hex,
        stroke: $.hex,
        strokeWidth: 8,
        transform: S === Me.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : P === Ne.SpecialCauseNoJudgement ? W = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: S === Me.Higher ? O.map((Se) => Se.join(",")).join(" ") : U.map((Se) => Se.join(",")).join(" "),
        fill: $.hex,
        stroke: $.hex,
        strokeWidth: 8,
        transform: S === Me.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : P === Ne.CommonCause && (W = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: ae[0][0],
        y1: ae[0][1],
        x2: ae[1][0],
        y2: ae[1][1],
        stroke: $.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const le = ls(
      $.hex,
      f,
      h,
      o,
      s,
      [
        { offset: "0%", opacity: p },
        { offset: "65%", opacity: x },
        { offset: "100%", opacity: C }
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
        "aria-description": j,
        ...d,
        children: [
          le,
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
              stroke: $.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          W,
          _ && (P === Ne.SpecialCauseImproving || P === Ne.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: S === Me.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: _
            }
          )
        ]
      }
    );
  }
  const M = ls(
    $.hex,
    f,
    h,
    o,
    s,
    [
      { offset: "0%", opacity: g },
      { offset: "65%", opacity: v },
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
      "aria-label": I,
      "aria-description": j,
      ...d,
      children: [
        M,
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
            stroke: $.hex,
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
            fill: $.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: S === Me.Lower ? "340" : "155", children: _ })
          }
        ),
        k ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: $.hex,
            ...S === Me.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          w.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: b,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${w.map((te) => `${te.cx} ${te.cy}`).join(" L ")}`
            }
          ),
          w.map((te, V) => {
            const O = V >= w.length - 2 && D ? L : b, U = O;
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
Ra.displayName = "SPCVariationIcon";
const _m = {
  xs: { height: 24, pointR: 2, stroke: 1 },
  sm: { height: 32, pointR: 3, stroke: 1 },
  md: { height: 44, pointR: 4, stroke: 1 }
};
function Sm(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function km(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const n = t.reduce((i, l) => i + l.value, 0) / t.length, a = [...e].reverse().findIndex((i) => i.value != null), o = a >= 0 ? e.length - 1 - a : null, s = o != null ? e[o].value : null;
  return { mean: n, latestValue: s, latestIndex: o };
}
function Cm(e) {
  switch (e) {
    case Ne.SpecialCauseImproving:
      return Xe("improvement", "#00B0F0");
    case Ne.SpecialCauseDeteriorating:
      return Xe("concern", "#E46C0A");
    case Ne.SpecialCauseNoJudgement:
      return Xe("no-judgement", "#490092");
    case Ne.CommonCause:
      return Xe("common-cause", "#A6A6A6");
    default:
      return Xe("common-cause", "#A6A6A6");
  }
}
const Kl = ({
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
  size: g = "sm",
  ariaLabel: v,
  className: m,
  onPointClick: p,
  onClassification: x,
  maxPoints: C,
  thinningStrategy: P = "stride",
  colorPointsBySignal: S = !0,
  centerLine: y,
  controlLimits: $,
  sigmaBands: T,
  pointSignals: N,
  pointNeutralSpecialCause: _
}) => {
  const D = f, k = Pe(
    () => Sm(e, t),
    [e, t]
  ), b = Pe(() => km(k), [k]), L = _m[g], w = Math.max(k.length * 6, 60), I = L.height, j = 4, M = 2, te = Pe(() => (e?.length ?? 0) - (k?.length ?? 0), [e?.length, k?.length]), E = k.filter((H) => H.value != null).map((H) => H.value), O = y ?? b.mean, U = Pe(() => {
    if (O == null) return null;
    const H = [];
    if (T?.upperOne != null && H.push(Math.abs(T.upperOne - O)), T?.lowerOne != null && H.push(Math.abs(O - T.lowerOne)), H.length) return H.reduce((q, X) => q + X, 0) / H.length;
    const B = [];
    return $?.upper != null && B.push(Math.abs($.upper - O) / 3), $?.lower != null && B.push(Math.abs(O - $.lower) / 3), B.length ? B.reduce((q, X) => q + X, 0) / B.length : null;
  }, [T?.upperOne, T?.lowerOne, $?.upper, $?.lower, O]), ae = Pe(() => {
    if (U != null || !E.length || O == null || E.length < 2) return null;
    const H = [];
    for (let q = 1; q < E.length; q++) {
      const X = E[q - 1], A = E[q];
      X != null && A != null && H.push(Math.abs(A - X));
    }
    return H.length ? H.reduce((q, X) => q + X, 0) / H.length / 1.128 : null;
  }, [U, E.join(","), O]), W = U ?? ae, le = Pe(() => {
    if (!o) return null;
    if ($) return $;
    if (O == null || W == null) return null;
    const H = 3 * W;
    return { lower: O - H, upper: O + H };
  }, [o, O, W, $?.lower, $?.upper]), Se = Pe(() => {
    if (c)
      return {
        state: c,
        firedRules: [],
        mean: b.mean,
        stdDev: W
      };
    if (!d || !W || W === 0 || O == null || b.latestValue == null)
      return {
        state: Ne.CommonCause,
        firedRules: [],
        mean: b.mean,
        stdDev: W
      };
    const H = [], B = b.latestValue, q = $?.upper ?? (W != null && O != null ? O + 3 * W : null), X = $?.lower ?? (W != null && O != null ? O - 3 * W : null);
    q != null && X != null && (B > q || B < X) && H.push("point-beyond-3sigma");
    const A = E.slice(-8);
    if (A.length === 8) {
      const J = A.every((me) => me > O), se = A.every((me) => me < O);
      (J || se) && H.push("eight-point-run");
    }
    const Y = E.slice(-5);
    if (Y.length === 5) {
      const J = Y.every((ye, je, ge) => je === 0 || ye >= ge[je - 1]), se = Y.every((ye, je, ge) => je === 0 || ye <= ge[je - 1]), me = T?.upperOne ?? (W != null && O != null ? O + W : null), ve = T?.lowerOne ?? (W != null && O != null ? O - W : null);
      J && me != null && Y[Y.length - 1] > me && H.push("five-point-trend"), se && ve != null && Y[Y.length - 1] < ve && H.push("five-point-trend");
    }
    const Q = E.slice(-3);
    if (Q.length === 3 && (W != null || T)) {
      const J = T?.upperTwo ?? (O != null && W != null ? O + 2 * W : null), se = T?.lowerTwo ?? (O != null && W != null ? O - 2 * W : null);
      if (J != null && se != null) {
        const me = Q.filter((ye) => ye > J).length, ve = Q.filter((ye) => ye < se).length;
        me >= 2 && H.push("two-of-three-near-limit"), ve >= 2 && H.push("two-of-three-near-limit");
      }
    }
    let ee = Ne.CommonCause;
    if (H.includes("point-beyond-3sigma") ? ee = B > O ? Ne.SpecialCauseImproving : Ne.SpecialCauseDeteriorating : (H.includes("eight-point-run") || H.includes("five-point-trend") || H.includes("two-of-three-near-limit")) && (ee = E[E.length - 1] > O ? Ne.SpecialCauseImproving : Ne.SpecialCauseDeteriorating), d && !c && H.length === 1 && H[0] === "point-beyond-3sigma") {
      const J = E.slice(-9, -1);
      if (J.length >= 5) {
        const se = J.filter((ve) => ve > O).length, me = J.filter((ve) => ve < O).length;
        se > 0 && me > 0 && (ee = Ne.SpecialCauseNoJudgement);
      }
    }
    return {
      state: ee,
      firedRules: H,
      mean: O,
      stdDev: W,
      side: b.latestValue != null && O != null ? b.latestValue > O ? "above" : "below" : void 0
    };
  }, [
    c,
    d,
    W,
    O,
    b.latestValue,
    E.join(",")
  ]);
  Ct.useEffect(() => {
    d && !c && x && x(Se);
  }, [Se, d, c, x]);
  const de = Se.state, fe = Cm(de), Z = (H) => {
    const B = k.filter((Y) => Y.value != null);
    if (!B.length) return I / 2;
    const q = B.map((Y) => Y.value);
    le && (le.lower != null && q.push(le.lower), le.upper != null && q.push(le.upper));
    const X = Math.min(...q), A = Math.max(...q);
    return X === A ? I / 2 : I - (H - X) / (A - X) * (I - M * 2) - M;
  }, ne = Pe(() => {
    if (!C || k.length <= C)
      return k.map((Q, ee) => ee);
    if (P === "stride") {
      const Q = Math.max(2, C), ee = (k.length - 1) / (Q - 1), J = /* @__PURE__ */ new Set();
      for (let se = 0; se < Q; se++) J.add(Math.round(se * ee));
      return J.add(k.length - 1), Array.from(J).sort((se, me) => se - me);
    }
    const H = k.map((Q, ee) => ({ i: ee, v: Q.value }));
    function B(Q, ee, J) {
      const se = Q.i, me = Q.v ?? 0, ve = ee.i, ye = ee.v ?? 0, je = J.i, ge = J.v ?? 0, Fe = Math.abs((ge - ye) * se - (je - ve) * me + je * ye - ge * ve), Ge = Math.hypot(ge - ye, je - ve);
      return Ge === 0 ? 0 : Fe / Ge;
    }
    function q(Q, ee) {
      if (Q.length <= 2) return Q;
      let J = -1, se = -1;
      for (let me = 1; me < Q.length - 1; me++) {
        const ve = B(Q[me], Q[0], Q[Q.length - 1]);
        ve > J && (J = ve, se = me);
      }
      if (J > ee) {
        const me = q(Q.slice(0, se + 1), ee), ve = q(Q.slice(se), ee);
        return [...me.slice(0, -1), ...ve];
      }
      return [Q[0], Q[Q.length - 1]];
    }
    let X = 0.1, A = H;
    for (let Q = 0; Q < 8 && (A = q(H, X), !(A.length <= C)); Q++)
      X *= 1.6;
    const Y = new Set(A.map((Q) => Q.i));
    return Y.add(0), Y.add(k.length - 1), Array.from(Y).sort((Q, ee) => Q - ee);
  }, [k, C, P]), pe = Pe(
    () => ne.map((H) => k[H]),
    [ne, k]
  ), z = Pe(() => {
    let H = "";
    return pe.forEach((B, q) => {
      if (B.value == null) return;
      const X = Z(B.value), A = q / (pe.length - 1 || 1) * (w - j * 2) + j;
      H += H ? ` L ${A} ${X}` : `M ${A} ${X}`;
    }), H;
  }, [pe, w]), ce = b.latestIndex ?? -1, F = le, R = Ma(), K = Pe(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [k.length, h]
  ), oe = k.length >= (n || 0), ie = v || "SPC sparkline", he = (() => {
    if (!de) return;
    const H = D === Ae.Up ? at.HigherIsBetter : D === Ae.Down ? at.LowerIsBetter : at.ContextDependent, B = {
      variationIcon: de === Ne.SpecialCauseImproving ? "improvement" : de === Ne.SpecialCauseDeteriorating ? "concern" : de === Ne.SpecialCauseNoJudgement ? "none" : "neither",
      trend: D === Ae.Up ? Me.Higher : Me.Lower,
      polarity: H
    };
    try {
      return Xl(B);
    } catch {
      return;
    }
  })(), ue = Pe(() => {
    if (!oe) return 10;
    const H = [...k].reverse().filter((q) => q.value != null).slice(0, 6).map((q) => Z(q.value));
    return H.length && H.reduce((q, X) => q + X, 0) / H.length < I / 2 ? I : 10;
  }, [k, oe, I]);
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": ie,
      "aria-description": he,
      width: w,
      height: I,
      className: m,
      viewBox: `0 0 ${w} ${I}`,
      children: [
        h && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: K, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: fe,
                stopOpacity: Number(R.start)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: fe,
                stopOpacity: Number(R.mid)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: fe,
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
              height: I,
              fill: `url(#${K})`
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
              fill: fe,
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
              stroke: fe,
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
              stroke: fe,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          T && i && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            T.lowerTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: w,
                y1: Z(T.lowerTwo),
                y2: Z(T.lowerTwo),
                stroke: fe,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            T.lowerOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: w,
                y1: Z(T.lowerOne),
                y2: Z(T.lowerOne),
                stroke: fe,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            T.upperOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: w,
                y1: Z(T.upperOne),
                y2: Z(T.upperOne),
                stroke: fe,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            T.upperTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: w,
                y1: Z(T.upperTwo),
                y2: Z(T.upperTwo),
                stroke: fe,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        a && b.mean != null && /* @__PURE__ */ r.jsx(
          "line",
          {
            x1: 0,
            x2: w,
            y1: Z(b.mean),
            y2: Z(b.mean),
            stroke: Xe("common-cause", "#A6A6A6"),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: z,
            fill: "none",
            stroke: Xe("common-cause", "#A6A6A6"),
            strokeWidth: L.stroke,
            strokeLinecap: "round"
          }
        ),
        ne.map((H, B) => {
          const q = k[H];
          if (!q || q.value == null) return null;
          const X = Z(q.value), A = B / (pe.length - 1 || 1) * (w - j * 2) + j, Q = (H === ce && l ? L.pointR + 1 : L.pointR) - 0.5;
          let ee = Xe("common-cause", "#A6A6A6");
          if (S) {
            const J = N?.[te + H];
            if (J === "improvement")
              ee = Xe("improvement", "#00B0F0");
            else if (J === "concern")
              ee = Xe("concern", "#E46C0A");
            else if (_?.[te + H])
              ee = Xe("no-judgement", "#490092");
            else if (O != null) {
              const me = q.value, ve = $?.upper ?? (W != null ? O + 3 * W : null), ye = $?.lower ?? (W != null ? O - 3 * W : null);
              ve != null && me > ve ? ee = Xe("improvement", "#00B0F0") : ye != null && me < ye ? ee = Xe("concern", "#E46C0A") : ee = Xe("common-cause", "#A6A6A6");
            } else
              ee = Xe("common-cause", "#A6A6A6");
          }
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: A,
              cy: X,
              r: Q,
              fill: ee,
              stroke: "none",
              strokeWidth: 0,
              onClick: p ? () => p(H, q) : void 0,
              style: p ? { cursor: "pointer" } : void 0,
              "data-index": H,
              "data-signal-colour": S ? ee : void 0
            },
            H
          );
        }),
        u && oe && de && de !== Ne.CommonCause && D && /* @__PURE__ */ r.jsx(
          "text",
          {
            x: w - 4,
            y: ue,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: fe,
            "data-glyph-pos": ue < I / 2 ? "top" : "bottom",
            children: D === Ae.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
Kl.displayName = "SPCSpark";
const Ce = (e) => typeof e == "number" && Number.isFinite(e), Nm = (e) => e.reduce((t, n) => t + n, 0), Ot = (e) => e.length ? Nm(e) / e.length : NaN;
function Jl(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!t[o] && Ce(s)) {
      if (a !== null) {
        const i = e[a];
        n[o] = Ce(i) ? Math.abs(s - i) : null;
      }
      a = o;
    }
  }
  return n;
}
function Zl(e, t) {
  const n = e.filter((s) => Ce(s));
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = Ot(n), o = 3.267 * a;
  if (t) {
    const s = n.filter((i) => i <= o);
    s.length && s.length !== n.length && (a = Ot(s), o = 3.267 * a);
  }
  return { mrMean: a, mrUcl: o };
}
function jm(e, t) {
  if (!Ce(e) || !Ce(t))
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
const Tm = 0.2777, Dm = 3.6, Im = (e) => Ce(e) && e >= 0 ? Math.pow(e, Tm) : null, Sn = (e) => Ce(e) && e >= 0 ? Math.pow(e, Dm) : null;
function $m(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
const On = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function Mm(e) {
  if (!Ce(e) || e < 0)
    return {
      cl: null,
      lcl: null,
      ucl: null,
      oneLow: null,
      oneHigh: null,
      twoLow: null,
      twoHigh: null
    };
  const t = 1 / (e + 1), n = (d) => $m(d, t) - 1, a = n(0.5), o = Math.max(0, n(On.three.low)), s = n(On.three.high), i = Math.max(0, n(On.one.low)), l = n(On.one.high), u = Math.max(0, n(On.two.low)), c = n(On.two.high);
  return { cl: a, lcl: o, ucl: s, oneLow: i, oneHigh: l, twoLow: u, twoHigh: c };
}
function Pm(e, t, n) {
  const a = e.map((N) => Ce(N) ? Im(N) : null), o = Jl(a, t), { mrMean: s } = Zl(o, !!n), i = a.filter((N, _) => !t[_] && Ce(N)), l = i.length ? Ot(i) : NaN;
  if (!Ce(l) || !Ce(s))
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
  const u = 2.66, c = 2 / 3 * u, d = 1 / 3 * u, f = l + u * s, h = l - u * s, g = l + c * s, v = l - c * s, m = l + d * s, p = l - d * s, x = Sn(l), C = Sn(f), P = h <= 0 ? null : Sn(h), S = Sn(m), y = p <= 0 ? null : Sn(p), $ = Sn(g), T = v <= 0 ? null : Sn(v);
  return {
    center: x ?? null,
    upperProcessLimit: C ?? null,
    lowerProcessLimit: P ?? null,
    upperTwoSigma: $ ?? null,
    lowerTwoSigma: T ?? null,
    upperOneSigma: S ?? null,
    lowerOneSigma: y ?? null,
    mr: o,
    mrMean: s,
    mrUcl: Ce(s) ? 3.267 * s : null
  };
}
function Fm(e) {
  const {
    metricImprovement: t,
    capabilityMode: n,
    value: a,
    mean: o,
    upperProcessLimit: s,
    lowerProcessLimit: i,
    target: l
  } = e, u = (c) => typeof c == "number" && Number.isFinite(c);
  return !u(a) || o === null || !u(l) ? ot.None : n && u(s) && u(i) ? t === Ae.Up ? u(i) && i > l ? ot.Pass : u(s) && s < l ? ot.Fail : ot.None : t === Ae.Down ? u(s) && s < l ? ot.Pass : u(i) && i > l ? ot.Fail : ot.None : ot.None : t === Ae.Down ? a <= l ? ot.Pass : ot.Fail : t === Ae.Up ? a >= l ? ot.Pass : ot.Fail : ot.None;
}
function Lm(e, t) {
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
  let g = 0;
  for (let v = 0; v < e.length; v++) {
    const m = e[v];
    v > 0 && e[v - 1].partitionId !== m.partitionId && (g = v);
    const p = v > 0 && i(v - 1), x = v > 0 && l(v - 1), C = v > 0 && u(v - 1), P = v > 0 && c(v - 1), S = v > 0 && d(v - 1), y = v > 0 && f(v - 1), $ = i(v), T = l(v), N = u(v), _ = c(v), D = d(v), k = f(v), b = [];
    $ && !p && b.push({ reason: $t.Shift, index: v }), T && !x && b.push({ reason: $t.Shift, index: v }), N && !C && b.push({ reason: $t.Trend, index: v }), _ && !P && b.push({ reason: $t.Trend, index: v }), D && !S && b.push({ reason: $t.Point, index: v }), k && !y && b.push({ reason: $t.Point, index: v });
    for (const L of b) {
      if (L.index - g < a) continue;
      const w = Math.max(0, L.index - n), I = L.index - 1;
      if (I - w + 1 < n) continue;
      const j = L.index, M = L.index + n - 1;
      if (M >= e.length) continue;
      const te = e.slice(w, I + 1).map((z) => z.value).filter(
        (z) => typeof z == "number" && Number.isFinite(z)
      ), V = e.slice(j, M + 1).map((z) => z.value).filter(
        (z) => typeof z == "number" && Number.isFinite(z)
      );
      if (te.length < n || V.length < n) continue;
      const E = e[L.index];
      let O = null;
      if (typeof E.upperProcessLimit == "number" && typeof E.mean == "number") {
        const z = E.upperProcessLimit - E.mean;
        z > 0 && (O = z / 3);
      }
      if (!O || O <= 0) continue;
      const U = Ot(te), ae = Ot(V), W = ae - U;
      if (Math.abs(W) < o * O) continue;
      const Se = e.slice(j, M + 1).filter(
        (z) => z.variationIcon === Le.Concern
      ).length;
      if (Se > 1) continue;
      const de = (z) => {
        const ce = Ot(z);
        return z.length ? z.reduce((F, R) => F + (R - ce) * (R - ce), 0) / z.length : 0;
      }, fe = de(te), Z = de(V);
      let ne = L.reason === $t.Shift ? 90 : L.reason === $t.Trend ? 70 : 60;
      if (Z < fe && (ne += 10), ne -= Se * 15, ne < s) continue;
      const pe = h.find((z) => z.index === L.index);
      if (pe) {
        const z = (ce) => ce === $t.Shift ? 3 : ce === $t.Trend ? 2 : 1;
        (z(L.reason) > z(pe.reason) || ne > pe.score) && (pe.reason = L.reason, pe.score = ne, pe.deltaMean = W, pe.oldMean = U, pe.newMean = ae, pe.window = [j, M]);
      } else
        h.push({
          index: L.index,
          reason: L.reason,
          score: ne,
          deltaMean: W,
          oldMean: U,
          newMean: ae,
          window: [j, M]
        });
    }
  }
  return h.sort((v, m) => v.index - m.index), h;
}
function cs() {
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
var Et = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Et || {}), Qr = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Qr || {}), ea = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(ea || {});
function Am(e) {
  const t = [];
  let n = [];
  for (const a of e)
    a.baseline && n.length && (t.push(n), n = []), n.push(a);
  return n.length && t.push(n), t;
}
function Rm(e, t, n) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const o = e.map((d, f) => ({ idx: f, value: d.value })).filter((d) => Ce(d.value));
  if (o.length < a * 2) return;
  const s = n === Ae.Up || n === Ae.Neither, i = n === Ae.Down;
  function l(d, f) {
    const h = o.slice(d, f).map((g) => g.value);
    return h.length ? Ot(h) : NaN;
  }
  let u = null;
  if (o.length > 1) {
    const d = [];
    for (let h = 1; h < o.length; h++) d.push(Math.abs(o[h].value - o[h - 1].value));
    const f = Ot(d);
    Ce(f) && f > 0 && (u = f * (2.66 / 3));
  }
  if (!u || u <= 0) return;
  const c = t.autoRecalculateDeltaSigma ?? 0.5;
  for (let d = a; d <= o.length - a; d++) {
    const f = d - a, h = l(f, d), g = l(d, d + a);
    if (!Ce(h) || !Ce(g)) continue;
    const m = (g - h) / u;
    if (!(s ? m >= c : i ? -m >= c : Math.abs(m) >= c)) continue;
    const x = o.slice(d, d + a).map((S) => S.value);
    if (!(s ? x.every((S) => S > h) : i ? x.every((S) => S < h) : x.every((S) => s ? S > h : S < h))) continue;
    const P = o[d].idx;
    e[P].baseline || (e[P].baseline = !0);
    return;
  }
}
function Ql(e) {
  if (!e) return {};
  const t = e, n = e, a = n.rules ?? {}, o = n.precedence ?? {}, s = n.thresholds ?? {}, i = n.warnings ?? {}, l = n.rareEvent ?? {}, u = n.capability ?? {}, c = n.grace ?? {}, d = n.baselineSuggest ?? {}, f = n.autoRecalc ?? {}, h = c.emergingEnabled ?? n.emergingGraceEnabled ?? t.emergingGraceEnabled ?? t.emergingDirectionGrace, g = a.collapseWeakerClusterRules ?? n.collapseWeakerClusterRules ?? t.collapseWeakerClusterRules ?? t.collapseClusterRules;
  if (cs()) {
    if (t.emergingDirectionGrace !== void 0)
      throw new Error("[spc][phase4] emergingDirectionGrace is no longer supported. Use settings.grace.emergingEnabled.");
    if (t.collapseClusterRules !== void 0)
      throw new Error("[spc][phase4] collapseClusterRules is no longer supported. Use settings.rules.collapseWeakerClusterRules.");
  }
  const v = globalThis;
  !cs() && t.emergingDirectionGrace !== void 0 && n.emergingGraceEnabled === void 0 && c.emergingEnabled === void 0 && !v.__spc_warn_emergingDirectionGrace && (v.__spc_warn_emergingDirectionGrace = !0, console.warn("[spc] emergingDirectionGrace is deprecated; use grace.emergingEnabled")), !cs() && t.collapseClusterRules !== void 0 && a.collapseWeakerClusterRules === void 0 && n.collapseWeakerClusterRules === void 0 && !v.__spc_warn_collapseClusterRules && (v.__spc_warn_collapseClusterRules = !0, console.warn("[spc] collapseClusterRules is deprecated; use rules.collapseWeakerClusterRules"));
  const m = (C) => {
    const P = {};
    for (const S of Object.keys(C)) {
      const y = C[S];
      y !== void 0 && (P[S] = y);
    }
    return P;
  }, p = m({
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
  }), x = { ...p, ...m(t) };
  if (h !== void 0 && (x.emergingGraceEnabled = h, x.grace = { ...x.grace, emergingEnabled: h }), p.collapseWeakerClusterRules !== void 0) {
    const C = p.collapseWeakerClusterRules;
    x.collapseWeakerClusterRules = C, x.rules = { ...x.rules, collapseWeakerClusterRules: C };
  }
  return m(x);
}
function ec(e) {
  const {
    chartType: t,
    metricImprovement: n,
    data: a,
    settings: o = {}
  } = e, s = Ql(o), i = {
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
    precedenceStrategy: Fr.DirectionalFirst,
    emergingDirectionGrace: !1,
    rules: {},
    grace: {},
    ...s
  };
  if (!Array.isArray(a)) throw new Error("data must be an array of rows");
  const l = a.map((p, x) => ({
    rowId: x + 1,
    x: p.x,
    value: Ce(p.value) ? p.value : null,
    ghost: !!p.ghost,
    baseline: !!p.baseline,
    target: Ce(p.target) ? p.target : null
  }));
  if (s?.autoRecalculateAfterShift)
    try {
      Rm(l, s, n);
    } catch {
    }
  const u = Am(l), c = [], d = [], h = l.filter(
    (p) => !p.ghost && Ce(p.value)
  ).length >= (i.minimumPoints ?? 13);
  let g = 0;
  const v = {};
  for (const p of u) {
    g++;
    const x = p.map((b) => b.value), C = p.map((b) => b.ghost);
    let P = new Array(x.length).fill(null), S = NaN, y = NaN, $ = NaN, T = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      P = Jl(x, C);
      const b = x.filter(
        (w, I) => !C[I] && Ce(w)
      );
      S = b.length ? Ot(b) : NaN;
      const L = Zl(
        P,
        !!i.excludeMovingRangeOutliers
      );
      y = L.mrMean, $ = L.mrUcl, T = jm(S, y);
    } else if (t === "T") {
      const b = Pm(
        x,
        C,
        !!i.excludeMovingRangeOutliers
      );
      P = b.mr, y = b.mrMean ?? NaN, $ = b.mrUcl ?? NaN, S = b.center ?? NaN, T = {
        upperProcessLimit: b.upperProcessLimit,
        lowerProcessLimit: b.lowerProcessLimit,
        upperTwoSigma: b.upperTwoSigma,
        lowerTwoSigma: b.lowerTwoSigma,
        upperOneSigma: b.upperOneSigma,
        lowerOneSigma: b.lowerOneSigma
      };
    } else if (t === "G") {
      const b = x.filter(
        (I, j) => !C[j] && Ce(I)
      ), L = b.length ? Ot(b) : NaN, w = Mm(L);
      S = w.cl ?? NaN, T = {
        upperProcessLimit: w.ucl,
        lowerProcessLimit: w.lcl,
        upperTwoSigma: w.twoHigh,
        lowerTwoSigma: w.twoLow,
        upperOneSigma: w.oneHigh,
        lowerOneSigma: w.oneLow
      }, P = new Array(x.length).fill(null), y = NaN, $ = NaN;
    } else
      d.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const N = p.map((b, L) => {
      const w = !b.ghost && Ce(b.value) ? x.slice(0, L + 1).filter((te, V) => !C[V] && Ce(te)).length : 0, I = h, j = I ? T : {
        upperProcessLimit: null,
        lowerProcessLimit: null,
        upperTwoSigma: null,
        lowerTwoSigma: null,
        upperOneSigma: null,
        lowerOneSigma: null
      };
      return {
        rowId: b.rowId,
        x: b.x,
        value: Ce(b.value) ? b.value : null,
        ghost: b.ghost,
        partitionId: g,
        pointRank: w,
        mean: I && Ce(S) ? S : null,
        mr: Ce(P[L]) ? P[L] : null,
        mrMean: I && Ce(y) ? y : null,
        mrUcl: I && Ce($) ? $ : null,
        upperProcessLimit: Ce(j.upperProcessLimit) ? j.upperProcessLimit : null,
        lowerProcessLimit: Ce(j.lowerProcessLimit) ? j.lowerProcessLimit : null,
        upperTwoSigma: Ce(j.upperTwoSigma) ? j.upperTwoSigma : null,
        lowerTwoSigma: Ce(j.lowerTwoSigma) ? j.lowerTwoSigma : null,
        upperOneSigma: Ce(j.upperOneSigma) ? j.upperOneSigma : null,
        lowerOneSigma: Ce(j.lowerOneSigma) ? j.lowerOneSigma : null,
        target: Ce(b.target) ? b.target : null,
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
        variationIcon: Le.Suppressed,
        assuranceIcon: ot.None,
        upperBaseline: I && Ce(S) ? S : null,
        lowerBaseline: I && Ce(S) ? S : null,
        movingRangeHighPointValue: I && Ce($) ? $ : null,
        ghostValue: b.ghost && Ce(b.value) ? b.value : null,
        ghostFlag: !!b.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    v[g] = N.filter(
      (b) => !b.ghost && Ce(b.value)
    ).length;
    const _ = i.specialCauseShiftPoints ?? 6, D = i.specialCauseTrendPoints ?? 6, k = [];
    for (let b = 0; b < N.length; b++) {
      const L = N[b], w = L.value;
      if (!L.ghost && Ce(w) && k.push(b), !(Ce(L.mean) && Ce(L.upperProcessLimit) && Ce(L.lowerProcessLimit)) || L.ghost || !Ce(w)) {
        c.push(L);
        continue;
      }
      L.specialCauseSinglePointUp = Ce(L.upperProcessLimit) ? w > L.upperProcessLimit : !1, L.specialCauseSinglePointDown = Ce(L.lowerProcessLimit) ? w < L.lowerProcessLimit : !1, c.push(L);
    }
    if (k.length) {
      const b = (I) => N[I];
      let L = [], w = [];
      for (const I of k) {
        const j = b(I);
        if (!Ce(j.mean) || !Ce(j.value)) {
          L = [], w = [];
          continue;
        }
        if (j.value > j.mean ? (L.push(I), w = []) : j.value < j.mean ? (w.push(I), L = []) : (L = [], w = []), L.length >= _)
          for (const M of L) {
            const te = b(M);
            te.specialCauseShiftUp = !0;
          }
        if (w.length >= _)
          for (const M of w) {
            const te = b(M);
            te.specialCauseShiftDown = !0;
          }
      }
      for (let I = 0; I <= k.length - 3; I++) {
        const M = k.slice(I, I + 3).map(b);
        if (!M.every((de) => Ce(de.mean) && Ce(de.value))) continue;
        const te = M[0].mean, V = M.every((de) => de.value > te), E = M.every((de) => de.value < te);
        if (!V && !E) continue;
        const O = M[0].upperTwoSigma ?? 1 / 0, U = M[0].lowerTwoSigma ?? -1 / 0, ae = M[0].upperProcessLimit ?? 1 / 0, W = M[0].lowerProcessLimit ?? -1 / 0, le = M.filter((de) => de.value > O && de.value <= ae), Se = M.filter((de) => de.value < U && de.value >= W);
        if (V && le.length >= 2)
          for (const de of le)
            de.specialCauseTwoOfThreeUp = !0;
        if (E && Se.length >= 2)
          for (const de of Se)
            de.specialCauseTwoOfThreeDown = !0;
      }
      if (i.enableFourOfFiveRule)
        for (let I = 0; I <= k.length - 5; I++) {
          const M = k.slice(I, I + 5).map(b);
          if (!M.every((ae) => Ce(ae.mean) && Ce(ae.value))) continue;
          const te = M[0].mean;
          if (!M.every((ae) => ae.value > te) && !M.every((ae) => ae.value < te)) continue;
          const V = M[0].upperOneSigma ?? 1 / 0, E = M[0].lowerOneSigma ?? -1 / 0, O = M.filter((ae) => ae.value > V), U = M.filter((ae) => ae.value < E);
          if (M.every((ae) => ae.value > te) && O.length >= 4)
            for (const ae of O)
              ae.specialCauseFourOfFiveUp = !0;
          if (M.every((ae) => ae.value < te) && U.length >= 4)
            for (const ae of U)
              ae.specialCauseFourOfFiveDown = !0;
        }
      for (let I = 0; I <= k.length - D; I++) {
        const j = k.slice(I, I + D), M = j.map(b);
        if (!M.every((E) => Ce(E.value))) continue;
        let te = !0, V = !0;
        for (let E = 1; E < M.length && (M[E].value > M[E - 1].value || (te = !1), M[E].value < M[E - 1].value || (V = !1), !(!te && !V)); E++)
          ;
        if (te) for (const E of j) {
          const O = b(E);
          O.specialCauseTrendUp = !0;
        }
        if (V) for (const E of j) {
          const O = b(E);
          O.specialCauseTrendDown = !0;
        }
      }
      if (i.enableFifteenInInnerThirdRule) {
        let I = [];
        for (const j of k) {
          const M = b(j);
          if (!Ce(M.value) || !Ce(M.mean) || !Ce(M.upperOneSigma) || !Ce(M.lowerOneSigma)) {
            I = [];
            continue;
          }
          if (!(M.value < M.upperOneSigma && M.value > M.lowerOneSigma)) {
            I = [];
            continue;
          }
          if (I.push(j), I.length >= 15) {
            const V = I.map(b), E = V.some((U) => U.value > U.mean), O = V.some((U) => U.value < U.mean);
            if (E && O)
              for (const U of I) b(U).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition)) {
      const b = i.maximumPointsPartition;
      let L = 0;
      for (const w of c.filter((I) => I.partitionId === g))
        !w.ghost && Ce(w.value) && L++, L > b && (w.mean = w.upperProcessLimit = w.lowerProcessLimit = null, w.upperTwoSigma = w.lowerTwoSigma = w.upperOneSigma = w.lowerOneSigma = null);
    }
  }
  for (const p of c) {
    if (p.ruleTags && p.ruleTags.length) continue;
    const x = [];
    p.specialCauseShiftUp && x.push(wt.ShiftHigh), p.specialCauseShiftDown && x.push(wt.ShiftLow), p.specialCauseTrendUp && x.push(wt.TrendIncreasing), p.specialCauseTrendDown && x.push(wt.TrendDecreasing), p.specialCauseSinglePointUp && x.push(wt.SinglePointAbove), p.specialCauseSinglePointDown && x.push(wt.SinglePointBelow), p.specialCauseTwoOfThreeUp && x.push(wt.TwoOfThreeAbove), p.specialCauseTwoOfThreeDown && x.push(wt.TwoOfThreeBelow), p.specialCauseFourOfFiveUp && x.push(wt.FourOfFiveAbove), p.specialCauseFourOfFiveDown && x.push(wt.FourOfFiveBelow), p.specialCauseFifteenInnerThird && x.push(wt.FifteenInnerThird), x.length && (p.ruleTags = x);
  }
  for (let p = 0; p < c.length; p++) {
    const x = c[p];
    if (Object.prototype.hasOwnProperty.call(x, pr.ImprovementValueBeforePruning) || Object.defineProperty(x, pr.ImprovementValueBeforePruning, {
      get() {
        return x.originalSpecialCauseImprovementValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.prototype.hasOwnProperty.call(x, pr.ConcernValueBeforePruning) || Object.defineProperty(x, pr.ConcernValueBeforePruning, {
      get() {
        return x.originalSpecialCauseConcernValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), x.ghost || !Ce(x.value) || x.mean === null) {
      x.variationIcon = Le.Suppressed;
      continue;
    }
    const C = x.value > x.mean, P = x.value < x.mean;
    i.rules?.collapseWeakerClusterRules && (x.specialCauseTwoOfThreeUp && x.specialCauseFourOfFiveUp && (x.specialCauseTwoOfThreeUp = !1), x.specialCauseTwoOfThreeDown && x.specialCauseFourOfFiveDown && (x.specialCauseTwoOfThreeDown = !1));
    const S = x.specialCauseTrendUp && C, y = x.specialCauseTrendDown && P, $ = x.specialCauseSinglePointUp || x.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && x.specialCauseFourOfFiveUp || x.specialCauseShiftUp || S, T = x.specialCauseSinglePointDown || x.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && x.specialCauseFourOfFiveDown || x.specialCauseShiftDown || y;
    let N = !1;
    if (i.precedenceStrategy === Fr.DirectionalFirst && (i.grace?.emergingEnabled || i.emergingGraceEnabled || i.emergingDirectionGrace)) {
      const D = i.specialCauseTrendPoints || 6;
      if (D > 1 && !(x.specialCauseTrendUp || x.specialCauseTrendDown)) {
        const k = D - 1, b = [];
        for (let L = p; L >= 0 && b.length < k; L--) {
          const w = c[L];
          !w.ghost && Ce(w.value) && w.mean !== null && b.unshift(w);
        }
        if (b.length === k) {
          let L = !0;
          for (let w = 1; w < b.length && L; w++)
            n === Ae.Up ? b[w].value > b[w - 1].value || (L = !1) : n === Ae.Down && b[w].value < b[w - 1].value || (L = !1);
          N = L;
        }
      }
    }
    if (i.precedenceStrategy === Fr.DirectionalFirst) {
      const k = n === Ae.Up ? $ : n === Ae.Down ? T : !1, b = n === Ae.Up ? T : n === Ae.Down ? $ : !1;
      k && !b ? x.variationIcon = Le.Improvement : b && !k ? x.variationIcon = N ? Le.Neither : Le.Concern : k && b ? x.variationIcon = N || x.specialCauseTrendUp || x.specialCauseTrendDown ? Le.Improvement : Le.Neither : x.variationIcon = Le.Neither;
    } else
      n === Ae.Up ? x.variationIcon = $ ? Le.Improvement : T ? Le.Concern : Le.Neither : n === Ae.Down ? x.variationIcon = T ? Le.Improvement : $ ? Le.Concern : Le.Neither : x.variationIcon = Le.Neither;
    const _ = $ || T;
    if (x.specialCauseImprovementValue = _ && x.variationIcon === Le.Improvement ? x.value : null, x.specialCauseConcernValue = _ && x.variationIcon === Le.Concern ? x.value : null, x.specialCauseNeitherValue = _ && x.variationIcon === Le.Neither ? x.value : null, i.conflictPrecedenceMode === zl.SqlRankingV26a && x.specialCauseImprovementValue !== null && x.specialCauseConcernValue !== null) {
      const D = [];
      x.specialCauseSinglePointUp && D.push({ id: zt.SinglePoint, rank: 1, side: _t.Up }), x.specialCauseSinglePointDown && D.push({ id: zt.SinglePoint, rank: 1, side: _t.Down }), x.specialCauseTwoOfThreeUp && D.push({ id: zt.TwoSigma, rank: 2, side: _t.Up }), x.specialCauseTwoOfThreeDown && D.push({ id: zt.TwoSigma, rank: 2, side: _t.Down }), x.specialCauseShiftUp && D.push({ id: zt.Shift, rank: 3, side: _t.Up }), x.specialCauseShiftDown && D.push({ id: zt.Shift, rank: 3, side: _t.Down }), x.specialCauseTrendUp && D.push({ id: zt.Trend, rank: 4, side: _t.Up }), x.specialCauseTrendDown && D.push({ id: zt.Trend, rank: 4, side: _t.Down });
      const k = D.filter((V) => V.side === _t.Up).reduce((V, E) => Math.max(V, E.rank), 0), b = D.filter((V) => V.side === _t.Down).reduce((V, E) => Math.max(V, E.rank), 0);
      let L;
      k > b ? L = Wn.Upwards : b > k ? L = Wn.Downwards : L = Wn.Same;
      const w = x.specialCauseImprovementValue, I = x.specialCauseConcernValue;
      L === Wn.Upwards ? n === Ae.Up ? x.specialCauseConcernValue = null : n === Ae.Down && (x.specialCauseImprovementValue = null) : L === Wn.Downwards ? n === Ae.Up ? x.specialCauseImprovementValue = null : n === Ae.Down && (x.specialCauseConcernValue = null) : x.variationIcon === Le.Improvement ? x.specialCauseConcernValue = null : x.variationIcon === Le.Concern ? x.specialCauseImprovementValue = null : x.specialCauseConcernValue = null, x.specialCauseImprovementValue !== null && x.specialCauseConcernValue === null ? x.variationIcon = Le.Improvement : x.specialCauseConcernValue !== null && x.specialCauseImprovementValue === null ? x.variationIcon = Le.Concern : x.specialCauseImprovementValue === null && x.specialCauseConcernValue === null && (x.variationIcon = Le.Neither);
      const j = x.specialCauseImprovementValue !== null ? _t.Up : x.specialCauseConcernValue !== null ? _t.Down : void 0, M = j === _t.Up ? k : j === _t.Down ? b : Math.max(k, b), te = D.find((V) => V.rank === M && (!j || V.side === j));
      x.conflictPrimeDirection = L, x.conflictResolved = !0, x.conflictResolvedRank = M || void 0, te && (x.conflictResolvedByRuleId = te.id), x.pruningMode = Vl.Conflict, x.originalSpecialCauseImprovementValue = w, x.originalSpecialCauseConcernValue = I;
    }
    {
      const D = l[x.rowId - 1], k = Fm({
        metricImprovement: n,
        capabilityMode: i.assuranceCapabilityMode,
        value: x.value,
        mean: x.mean,
        upperProcessLimit: x.upperProcessLimit,
        lowerProcessLimit: x.lowerProcessLimit,
        target: Ce(D?.target) ? D.target : null
      });
      x.assuranceIcon = k;
    }
  }
  if ((i.minimumPointsWarning ?? !1) && !h) {
    const p = l.filter(
      (x) => !x.ghost && Ce(x.value)
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
      p.variationIcon === Le.Improvement && (p.specialCauseSinglePointUp || p.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && p.specialCauseFourOfFiveUp || p.specialCauseShiftUp || p.specialCauseTrendUp) && (p.specialCauseSinglePointDown || p.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && p.specialCauseFourOfFiveDown || p.specialCauseShiftDown || p.specialCauseTrendDown) && d.push({
        code: "variation_conflict_row",
        category: "logic",
        severity: "warning",
        message: `Row ${p.rowId}: simultaneous high/low special-cause signals – variation icon may be ambiguous.`,
        context: { rowId: p.rowId }
      });
  if (i.maximumPoints && Number.isFinite(i.maximumPoints)) {
    const p = i.maximumPoints;
    let x = 0;
    for (const C of c)
      !C.ghost && Ce(C.value) && x++, x > p && (C.mean = C.upperProcessLimit = C.lowerProcessLimit = null, C.upperTwoSigma = C.lowerTwoSigma = C.upperOneSigma = C.lowerOneSigma = null);
  }
  if (i.nullValueWarning && (t === xt.XmR || t === xt.G)) {
    const p = l.filter(
      (x) => !x.ghost && (x.value === null || x.value === void 0 || !Ce(x.value))
    ).length;
    p && d.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${p} null/missing value(s) excluded from calculations.`,
      context: { nullCount: p }
    });
  }
  if (i.targetSuppressedWarning && (t === xt.T || t === xt.G) && l.some((x) => Ce(x.target)) && d.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), i.ghostOnRareEventWarning && (t === xt.T || t === xt.G)) {
    const p = l.filter((x) => x.ghost).length;
    p && d.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${p} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: p }
    });
  }
  if (i.partitionSizeWarnings && Object.entries(v).forEach(([p, x]) => {
    x < i.minimumPointsPartition && d.push({
      code: "insufficient_points_partition",
      category: "partition",
      severity: "warning",
      message: `Partition ${p} has only ${x} non-ghost point(s); below recommended ${i.minimumPointsPartition}.`,
      context: {
        partitionId: Number(p),
        count: x,
        minimum: i.minimumPointsPartition
      }
    });
  }), i.baselineSpecialCauseWarning) {
    const p = [];
    c.forEach((x) => {
      l[x.rowId - 1].baseline && (x.specialCauseSinglePointUp || x.specialCauseSinglePointDown || x.specialCauseTwoOfThreeUp || x.specialCauseTwoOfThreeDown || x.specialCauseFourOfFiveUp || x.specialCauseFourOfFiveDown || x.specialCauseShiftUp || x.specialCauseShiftDown || x.specialCauseTrendUp || x.specialCauseTrendDown) && p.push(x.rowId);
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
    const p = i.baselineSuggestStabilityPoints, x = i.baselineSuggestMinGap, C = i.baselineSuggestMinDeltaSigma, P = i.baselineSuggestScoreThreshold;
    m = Lm(
      c.map((y) => ({
        value: y.value,
        partitionId: y.partitionId,
        variationIcon: y.variationIcon,
        mean: y.mean,
        upperProcessLimit: y.upperProcessLimit
      })),
      {
        W: p,
        minGap: x,
        minDeltaSigma: C,
        scoreThreshold: P,
        isShiftUpAt: (y) => !!c[y].specialCauseShiftUp,
        isShiftDownAt: (y) => !!c[y].specialCauseShiftDown,
        isTrendUpAt: (y) => !!c[y].specialCauseTrendUp,
        isTrendDownAt: (y) => !!c[y].specialCauseTrendDown,
        isSingleUpAt: (y) => !!c[y].specialCauseSinglePointUp,
        isSingleDownAt: (y) => !!c[y].specialCauseSinglePointDown
      }
    ).map((y) => ({
      index: y.index,
      reason: y.reason,
      score: y.score,
      deltaMean: y.deltaMean,
      oldMean: y.oldMean,
      newMean: y.newMean,
      window: y.window
    }));
  }
  return { rows: c, warnings: d, ...m ? { suggestedBaselines: m } : {} };
}
function vi(e, t) {
  return e === "improvement" ? Ne.SpecialCauseImproving : e === "concern" ? Ne.SpecialCauseDeteriorating : e === "suppressed" || e === "neither" && t ? Ne.SpecialCauseNoJudgement : e === "neither" ? Ne.CommonCause : null;
}
function Em(e, t) {
  return e === "improvement" || e === "concern" || e === "suppressed" || e === "neither" && !!t;
}
function Bm(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function Hm(e) {
  const {
    values: t,
    x: n,
    chartType: a = xt.XmR,
    metricImprovement: o = Ae.Neither,
    showLimits: s = !0,
    showLimitBand: i = !1,
    showInnerBands: l = !1,
    showMean: u = !1,
    autoClassify: c = !0
  } = e, d = G.useMemo(() => {
    const y = [];
    for (let $ = 0; $ < t.length; $++)
      y.push({ x: n?.[$], value: t[$] });
    return y;
  }, [t, n]), f = G.useMemo(() => {
    try {
      const y = d.map(($, T) => ({ x: $.x ?? T, value: $.value }));
      return ec({ chartType: a, metricImprovement: o, data: y, settings: {} });
    } catch {
      return null;
    }
  }, [d, a, o]), h = G.useMemo(() => {
    const y = f?.rows;
    if (!y || y.length === 0) return null;
    for (let $ = y.length - 1; $ >= 0; $--) {
      const T = y[$];
      if (T && T.value != null && !T.ghost) return T;
    }
    return y[y.length - 1] ?? null;
  }, [f]), g = G.useMemo(() => {
    const y = f?.rowsRepresentative ?? f?.rows;
    if (!y || !Array.isArray(y) || y.length === 0) return null;
    const $ = y[y.length - 1];
    return vi(
      $?.variationIcon,
      ($?.specialCauseNeitherValue ?? null) != null
    );
  }, [f]), v = G.useMemo(() => h?.mean ?? null, [h]), m = G.useMemo(() => {
    if (!h) return null;
    const y = h?.lowerProcessLimit ?? null, $ = h?.upperProcessLimit ?? null;
    return y == null && $ == null ? null : { lower: y, upper: $ };
  }, [h]), p = G.useMemo(() => h ? {
    upperOne: h?.upperOneSigma ?? null,
    upperTwo: h?.upperTwoSigma ?? null,
    lowerOne: h?.lowerOneSigma ?? null,
    lowerTwo: h?.lowerTwoSigma ?? null
  } : null, [h]), x = G.useMemo(() => {
    const y = f?.rows;
    if (!(!y || y.length === 0))
      return y.map(($) => {
        const T = !!$?.specialCauseSinglePointUp || !!$?.specialCauseTwoOfThreeUp || !!$?.specialCauseFourOfFiveUp || !!$?.specialCauseShiftUp || !!$?.specialCauseTrendUp, N = !!$?.specialCauseSinglePointDown || !!$?.specialCauseTwoOfThreeDown || !!$?.specialCauseFourOfFiveDown || !!$?.specialCauseShiftDown || !!$?.specialCauseTrendDown;
        switch (o) {
          case Ae.Up:
            return T ? "improvement" : N ? "concern" : "neither";
          case Ae.Down:
            return N ? "improvement" : T ? "concern" : "neither";
          case Ae.Neither:
          default:
            return "neither";
        }
      });
  }, [f, o]), C = G.useMemo(() => {
    const y = f?.rows;
    if (!(!y || y.length === 0))
      return y.map(($) => !!$?.specialCauseNeitherValue);
  }, [f]), P = G.useMemo(() => {
    let y = null;
    if (h && h.value != null && !h.ghost) {
      const L = h.variationIcon, w = (h?.specialCauseNeitherValue ?? null) != null;
      g === Ne.SpecialCauseNoJudgement ? y = Em(L, w) ? Ne.SpecialCauseNoJudgement : Ne.CommonCause : y = vi(L, w) ?? Ne.CommonCause;
    }
    const $ = y ?? Ne.CommonCause, T = La[$].hex, [N, _, D] = Bm(T), k = Ma();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${N}, ${_}, ${D}, ${k.start}) 0%, rgba(${N}, ${_}, ${D}, ${k.mid}) 50%, rgba(${N}, ${_}, ${D}, ${k.end}) 100%)`,
      "--fdp-metric-card-accent": T
    };
  }, [h, g]);
  return { sparkProps: G.useMemo(() => ({
    data: d,
    showMean: u,
    showLimits: s,
    showLimitBand: i,
    showInnerBands: l,
    metricImprovement: o,
    centerLine: v,
    controlLimits: m,
    sigmaBands: p,
    pointSignals: x,
    pointNeutralSpecialCause: C,
    variationState: g ?? void 0,
    autoClassify: !!(c && !g),
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
    g,
    v,
    m?.lower,
    m?.upper,
    p?.upperOne,
    p?.upperTwo,
    p?.lowerOne,
    p?.lowerTwo,
    x?.length,
    C?.length
  ]), metricCardStyle: P, latestState: g };
}
function yi(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function Om(e, t, n) {
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
function Um(e, t) {
  const n = e.filter(Boolean);
  if (n.length < 2) return t;
  const a = [];
  for (let u = 1; u < n.length; u++) a.push(n[u].getTime() - n[u - 1].getTime());
  const o = a.sort((u, c) => u - c), s = o[Math.floor(o.length / 2)], i = 3600 * 1e3, l = 24 * i;
  return s <= 2 * i ? "hourly" : s <= 2 * l ? "daily" : s <= 10 * l ? "weekly" : s <= 45 * l ? "monthly" : s <= 120 * l ? "quarterly" : "annually";
}
function wi(e, t) {
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
function Wm(e, t, n, a = "0-100") {
  if (t) return t;
  if (n) return n;
  const o = e.filter((l) => l != null);
  if (!o.length) return;
  const s = Math.min(...o), i = Math.max(...o);
  if (a === "0-1") {
    if (s >= 0 && i <= 1 && i > 0) return "%";
  } else if (s >= 0 && i <= 100 && i > 0) return "%";
}
function zm(e, t, n = 1) {
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
function tc(e) {
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
  let g = (n || []).map(yi);
  if (!g.some(Boolean)) {
    const _ = yi(o);
    _ && a ? g = Om(f.length, _, a) : g = new Array(f.length).fill(void 0);
  }
  const m = Um(g, a), p = Wm(f, s, i, e.percentHeuristic), x = l && h >= 0 && f[h] != null ? f[h] : void 0, C = { strategy: "previous", n: 1, absolute: !0, skipNulls: !0, ...d || {} };
  function P() {
    if (h < 0) return -1;
    if (C.strategy === "previous" || C.strategy === "n-points") {
      let L = h - (C.strategy === "previous" ? 1 : Math.max(1, C.n || 1));
      if (!C.skipNulls) return L;
      for (let w = L; w >= 0; w--) if (f[w] != null) return w;
      return -1;
    }
    const _ = g[h];
    if (!_) return -1;
    const D = new Date(_);
    D.setFullYear(D.getFullYear() - 1);
    let k = -1, b = 1 / 0;
    for (let L = 0; L < g.length; L++) {
      const w = g[L];
      if (!w || f[L] == null) continue;
      const I = Math.abs(w.getTime() - D.getTime());
      I < b && (b = I, k = L);
    }
    return k;
  }
  const S = P(), y = S >= 0 ? f[S] : null;
  let $;
  if (u && x != null && y != null) {
    const _ = x - y, D = C.absolute !== !1, k = D ? _ : y === 0 ? 0 : _ / Math.abs(y) * 100;
    $ = {
      value: Number.isFinite(k) ? Number(k.toFixed(2)) : 0,
      isPercent: D ? p === "%" : !0,
      period: `vs ${zm(m, a, C.strategy === "n-points" ? Math.max(1, C.n || 1) : 1)}`
    };
  }
  const T = h >= 0 ? g[h] : void 0, N = c && wi(T, m) ? `Latest: ${wi(T, m)}` : void 0;
  return { value: x, unit: p, delta: $, metadata: N, latestDate: T, frequency: m };
}
const Hv = ({
  sparkData: e,
  direction: t = Ae.Neither,
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
  startDate: g,
  deltaConfig: v,
  ...m
}) => {
  const p = Hm({
    values: e.map((T) => T.value ?? null),
    metricImprovement: t,
    showLimits: a,
    showLimitBand: o,
    showInnerBands: s,
    showMean: n,
    autoClassify: i
  }), x = /* @__PURE__ */ r.jsx(Kl, { ...p.sparkProps, maxPoints: l }), C = G.useMemo(() => tc({
    values: e.map((T) => typeof T.value == "number" ? T.value : null),
    dates: e.map((T) => T.date),
    intervalHint: h,
    startDate: g,
    providedUnit: m.unit,
    defaultUnit: f,
    autoValue: u,
    autoDelta: c,
    autoMetadata: d,
    deltaConfig: v
  }), [e, h, g, m.unit, f, u, c, d, v]), P = u && C.value != null ? C.value : m.value, S = c && C.delta ? C.delta : m.delta, y = C.unit || m.unit, $ = d && C.metadata ? C.metadata : m.metadata;
  return /* @__PURE__ */ r.jsx(
    pm,
    {
      ...m,
      value: P,
      unit: y,
      delta: S,
      metadata: $,
      visual: x,
      style: p.metricCardStyle
    }
  );
}, nc = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: o,
  dateFormatter: s,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const u = cn(), c = bn(), [d, f] = G.useState(null), [h, g] = G.useState(!1), v = G.useRef(null);
  G.useEffect(() => {
    if (u) {
      if (u.focused && (f(u.focused), v.current && (cancelAnimationFrame(v.current), v.current = null)), !u.focused && !h) {
        const ue = requestAnimationFrame(() => {
          f(null), v.current = null;
        });
        v.current = ue;
      }
      return () => {
        v.current && (cancelAnimationFrame(v.current), v.current = null);
      };
    }
  }, [u, u?.focused, h]);
  const m = u && (u.focused || (h ? d : null) || d), [p, x] = G.useState(!1);
  G.useEffect(() => {
    const ue = requestAnimationFrame(() => x(!0));
    return () => cancelAnimationFrame(ue);
  }, [m?.index]);
  const C = c?.innerWidth ?? 0, P = c?.innerHeight ?? 0, S = m ? Math.min(Math.max(m.clientX, 0), C) : 0, y = m ? Math.min(Math.max(m.clientY, 0), P) : 0, $ = c?.ref?.current || void 0;
  if (!m)
    return null;
  const T = e?.[m.index], _ = Pa(
    T ? {
      specialCauseSinglePointUp: !!T.rules.singlePoint.up,
      specialCauseSinglePointDown: !!T.rules.singlePoint.down,
      specialCauseTwoOfThreeUp: !!T.rules.twoOfThree.up,
      specialCauseTwoOfThreeDown: !!T.rules.twoOfThree.down,
      specialCauseFourOfFiveUp: !!T.rules.fourOfFive.up,
      specialCauseFourOfFiveDown: !!T.rules.fourOfFive.down,
      specialCauseShiftUp: !!T.rules.shift.up,
      specialCauseShiftDown: !!T.rules.shift.down,
      specialCauseTrendUp: !!T.rules.trend.up,
      specialCauseTrendDown: !!T.rules.trend.down
    } : null
  ).map((ue) => ({ id: ue, label: Zn[ue].tooltip })), D = m.x instanceof Date ? m.x : new Date(m.x), k = s ? s(D) : D.toDateString(), b = o ? `${o}` : "", L = a || b ? `${m.y}${b ? "" + b : " "}${a ? " " + a : ""}` : `${m.y}`, w = Fa(T?.classification?.variation), I = Gl(T?.classification?.assurance), j = gm(
    t.mean ?? null,
    t.sigma,
    m.y
  ), M = n ? n(m.index, { x: m.x, y: m.y }) : void 0, te = w || I || j, V = T?.rules.trend.up || T?.rules.trend.down, E = T?.classification?.variation === Le.Neither && V, O = l && E ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, U = _.length > 0, ae = T && "primeDirection" in T ? T.primeDirection : void 0, W = T && "primeRuleId" in T ? T.primeRuleId : void 0, le = i && T?.classification?.variation === Le.Neither && U, Se = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", de = Yl(T?.classification?.variation), fe = 6.2, ne = [
    M || "",
    `${k} • ${L}`
  ].filter(Boolean).reduce(
    (ue, H) => Math.max(ue, H.length * fe + 32),
    0
  ), pe = 200, z = 440, ce = Math.min(z, Math.max(pe, ne));
  let F = S + 12, K = (c.margin?.top ?? 0) + y + 16;
  F + ce > C && (F = S - -60 - ce), F < 0 && (F = Math.max(0, C - ce));
  const oe = m ? `spc-tooltip-${m.index}` : "spc-tooltip", ie = typeof m.index == "number" ? m.index : NaN, he = $ ? tu(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: oe,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (p ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: F,
          top: K,
          width: ce,
          maxWidth: z,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": p ? "false" : "true",
        "data-floating": !0,
        "data-placement": F + ce + 12 > C ? "left" : "right",
        onPointerEnter: () => {
          g(!0), v.current && (cancelAnimationFrame(v.current), v.current = null);
        },
        onPointerLeave: () => {
          if (g(!1), !u?.focused) {
            const ue = requestAnimationFrame(() => {
              f(null), v.current = null;
            });
            v.current = ue;
          }
        },
        children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--point", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Point" }) }),
            /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__primary-line", children: [
              "Index: ",
              ie
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: k })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: L })
          ] }),
          te && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: w?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              Je,
              {
                text: w,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : w?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              Je,
              {
                text: w,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : le ? /* @__PURE__ */ r.jsx(
              Je,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : w ? /* @__PURE__ */ r.jsx(
              Je,
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
              const ue = I.toLowerCase(), B = !(ue.includes("not met") || ue.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(ue);
              return /* @__PURE__ */ r.jsx(
                Je,
                {
                  text: I,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${B ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${I}`
                }
              );
            })() })
          ] }),
          j && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              Je,
              {
                text: (() => {
                  const ue = j.toLowerCase();
                  return ue.startsWith("within 1") ? "≤1σ" : ue.startsWith("1–2") ? "1–2σ" : ue.startsWith("2–3") ? "2–3σ" : ue.startsWith(">3") ? ">3σ" : j;
                })(),
                color: j.includes(">3") ? "orange" : j.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${j}`,
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
                children: _.map(({ id: ue, label: H }) => {
                  const B = String(ue), X = B === wt.TrendIncreasing || B === wt.TrendDecreasing ? "fdp-spc-tag--trend" : le ? "fdp-spc-tag--no-judgement" : w ? w.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : w.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    Je,
                    {
                      text: H,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${X}`,
                      "data-rule-id": B
                    },
                    B
                  );
                })
              }
            ),
            ae && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const ue = le ? "fdp-spc-tag--no-judgement" : w ? w.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : w.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", H = `${ae}${W ? ` (${W})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  Je,
                  {
                    text: H,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${ue}`,
                    "aria-label": `Prime direction ${ae}${W ? ` via ${W}` : ""}`
                  }
                );
              })()
            ] })
          ] })
        ] })
      }
    ),
    $
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
            cx: S,
            cy: y,
            r: 7,
            fill: "none",
            stroke: Se,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: S,
            cy: y,
            r: 5,
            fill: "#000",
            stroke: Se,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: S,
            cy: y,
            r: 2.5,
            fill: de,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        he
      ]
    }
  );
}, Ea = ({
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
  const c = Lr(), d = Lr(), { start: f, mid: h, end: g } = Ma(), v = o || bm[e], m = (i || vm[e]).slice(0, 2), p = n || `Assurance ${e}`;
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
            ...a ? { filter: `url(#${c})` } : {},
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
            children: /* @__PURE__ */ r.jsx("tspan", { x: 60, y: 184, children: m })
          }
        ),
        l && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          e === gn.Fail ? /* @__PURE__ */ r.jsx(
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
          ) : e === gn.Uncertain ? /* @__PURE__ */ r.jsx(
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
Ea.displayName = "SPCAssuranceIcon";
function Vm(e, t = !0) {
  if (!e?.length) return [];
  const n = [...e];
  if (t) {
    for (let s = 1; s < n.length - 1; s++)
      n[s] === ct.Common && n[s - 1] === n[s + 1] && n[s - 1] !== ct.Common && (n[s] = n[s - 1]);
    let o = 0;
    for (; o < n.length; ) {
      const s = n[o];
      let i = o + 1;
      for (; i < n.length && n[i] === s; ) i++;
      i - o === 1 && s !== ct.Common && (n[o] = ct.Common), o = i;
    }
  }
  const a = [];
  if (n.length) {
    let o = 0;
    for (let s = 1; s <= n.length; s++)
      if (s === n.length || n[s] !== n[o]) {
        const i = n[o], l = s - 1, u = l - o + 1;
        (i === ct.Common || u >= 2) && a.push({ start: o, end: l, category: i }), o = s;
      }
  }
  return a;
}
const Gm = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: a
}) => {
  const o = cn(), s = o?.focused ?? null, i = s?.index ?? null, l = typeof i == "number" && e ? e[i] : null, u = G.useMemo(
    () => l ? Pa({
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
      new Set(u.map((m) => Zn[m]?.narration).filter(Boolean))
    ),
    [u]
  ), d = l ? Fa(l.classification?.variation) : null, f = l ? Gl(l.classification?.assurance) : null, h = u.length > 0, g = l ? l.classification?.variation === Le.Neither && h : !1, v = G.useRef(null);
  return G.useEffect(() => {
    if (!a || !s || l == null) return;
    const m = `${s.seriesId}:${s.index}`;
    if (v.current !== m) {
      v.current = m;
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
                      Je,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : d?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
                      Je,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : g ? /* @__PURE__ */ r.jsx(
                      Je,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : d ? /* @__PURE__ */ r.jsx(
                      Je,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const m = f.toLowerCase(), x = !(m.includes("not met") || m.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(m);
                      return /* @__PURE__ */ r.jsx(
                        Je,
                        {
                          text: f,
                          color: "default",
                          className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${x ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
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
                  const p = String(m), C = p === wt.TrendIncreasing || p === wt.TrendDecreasing ? "fdp-spc-tag--trend" : g ? "fdp-spc-tag--no-judgement" : d ? d.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : d.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", P = Zn[m]?.tooltip || p;
                  return /* @__PURE__ */ r.jsx(
                    Je,
                    {
                      text: P,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${C}`,
                      "data-rule-id": p,
                      title: Zn[m]?.tooltip
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
var Mt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Mt || {}), We = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(We || {}), Ke = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(Ke || {}), tt = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(tt || {}), Tn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(Tn || {}), Cn = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(Cn || {}), Qn = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(Qn || {}), Gn = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(Gn || {}), gt = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(gt || {}), Vt = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(Vt || {});
const mn = {
  [tt.SinglePoint]: 1,
  [tt.TwoSigma]: 2,
  [tt.Shift]: 3,
  [tt.Trend]: 4
}, _i = 3.267, Ym = 2.66, Si = 0.2777;
function $e(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function Yn(e) {
  return e.reduce((t, n) => t + n, 0) / (e.length || 1);
}
function ki(e, t) {
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
function Ci(e, t) {
  const n = e.filter($e);
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = n.slice();
  if (t) {
    const s = Yn(a), i = _i * s;
    a = a.filter((l) => l <= i);
  }
  const o = Yn(a);
  return { mrMean: o, mrUcl: _i * o };
}
function Ni(e, t) {
  if (!$e(e) || !$e(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = Ym * t, a = 2 / 3 * n, o = 1 / 3 * n;
  return {
    upperProcessLimit: e + n,
    lowerProcessLimit: e - n,
    upperTwoSigma: e + a,
    lowerTwoSigma: e - a,
    upperOneSigma: e + o,
    lowerOneSigma: e - o
  };
}
function qm(e, t, n, a) {
  if (e === Mt.T) {
    const f = t.map((N) => $e(N) && N > 0 ? Math.pow(N, Si) : null), h = ki(f, n), g = Ci(h, a), v = f.filter((N, _) => !n[_] && $e(N)), m = v.length ? Yn(v) : NaN, p = Ni(m, g.mrMean), x = (N) => $e(N) && N > 0 ? Math.pow(N, 1 / Si) : null, C = $e(p.upperProcessLimit) ? x(p.upperProcessLimit) : null, P = $e(p.lowerProcessLimit) && p.lowerProcessLimit > 0 ? x(p.lowerProcessLimit) : null, S = $e(p.upperTwoSigma) ? x(p.upperTwoSigma) : null, y = $e(p.lowerTwoSigma) && p.lowerTwoSigma > 0 ? x(p.lowerTwoSigma) : null, $ = $e(p.upperOneSigma) ? x(p.upperOneSigma) : null, T = $e(p.lowerOneSigma) && p.lowerOneSigma > 0 ? x(p.lowerOneSigma) : null;
    return {
      mean: $e(m) && m > 0 ? x(m) : null,
      mr: h,
      mrMean: g.mrMean,
      mrUcl: g.mrUcl,
      upperProcessLimit: C,
      lowerProcessLimit: P,
      upperTwoSigma: S,
      lowerTwoSigma: y,
      upperOneSigma: $,
      lowerOneSigma: T
    };
  }
  if (e === Mt.G) {
    const f = t.filter((k, b) => !n[b] && $e(k)), h = f.length ? Yn(f) : NaN, g = $e(h) ? 1 / (h + 1) : NaN, v = (k) => {
      if (!$e(g) || g <= 0 || g >= 1) return NaN;
      const b = Math.ceil(Math.log(1 - k) / Math.log(1 - g)) - 1;
      return Math.max(0, b);
    }, m = 135e-5, p = 1 - 135e-5, x = 0.02275, C = 1 - 0.02275, P = 0.158655, S = 1 - 0.158655, y = v(p), $ = v(m), T = v(C), N = v(x), _ = v(S), D = v(P);
    return {
      mean: $e(h) ? h : null,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: $e(y) ? y : null,
      lowerProcessLimit: $e($) ? $ : null,
      upperTwoSigma: $e(T) ? T : null,
      lowerTwoSigma: $e(N) ? N : null,
      upperOneSigma: $e(_) ? _ : null,
      lowerOneSigma: $e(D) ? D : null
    };
  }
  if (e !== Mt.XmR)
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
  const o = ki(t, n), s = o.filter($e), i = s.length ? Yn(s) : NaN, l = $e(i) ? 3.267 * i : NaN;
  let u = NaN;
  {
    const f = [];
    for (let h = 0; h < t.length; h++) {
      const g = t[h];
      if (n[h] || !$e(g)) continue;
      if (!a) {
        f.push(g);
        continue;
      }
      const v = o[h];
      (v === null || !$e(l) || $e(v) && v <= l) && f.push(g);
    }
    u = f.length ? Yn(f) : NaN;
  }
  const c = Ci(o, a), d = Ni(u, c.mrMean);
  return {
    mean: u,
    mr: o,
    mrMean: c.mrMean,
    mrUcl: c.mrUcl,
    ...d
  };
}
function Xm(e, t) {
  const n = e.map((u, c) => c).filter((u) => !e[u].ghost && $e(e[u].value)), a = (u) => e[u], o = t.shiftPoints, s = t.trendPoints;
  let i = [], l = [];
  for (const u of n) {
    const c = a(u);
    if (!$e(c.mean) || !$e(c.value)) {
      i = [], l = [];
      continue;
    }
    if (c.value > c.mean ? (i.push(u), l = []) : c.value < c.mean ? (l.push(u), i = []) : (i = [], l = []), i.length >= o)
      for (const d of i) a(d).shiftUp = !0;
    if (l.length >= o)
      for (const d of l) a(d).shiftDown = !0;
  }
  for (let u = 0; u <= n.length - 3; u++) {
    const d = n.slice(u, u + 3).map(a);
    if (!d.every((S) => $e(S.value) && $e(S.mean))) continue;
    const f = d[0].mean, h = d.every((S) => S.value > f), g = d.every((S) => S.value < f);
    if (!h && !g) continue;
    const v = d[0].upperTwoSigma ?? 1 / 0, m = d[0].lowerTwoSigma ?? -1 / 0, p = d[0].upperProcessLimit ?? 1 / 0, x = d[0].lowerProcessLimit ?? -1 / 0, C = d.filter((S) => t.twoSigmaIncludeAboveThree ? S.value > v : S.value > v && S.value <= p), P = d.filter((S) => t.twoSigmaIncludeAboveThree ? S.value < m : S.value < m && S.value >= x);
    h && C.length >= 2 && C.forEach((S) => S.twoSigmaUp = !0), g && P.length >= 2 && P.forEach((S) => S.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let u = 0; u <= n.length - 5; u++) {
      const d = n.slice(u, u + 5).map(a);
      if (!d.every((C) => $e(C.value) && $e(C.mean))) continue;
      const f = d[0].mean, h = d.every((C) => C.value > f), g = d.every((C) => C.value < f);
      if (!h && !g) continue;
      const v = d[0].upperOneSigma ?? 1 / 0, m = d[0].lowerOneSigma ?? -1 / 0, p = d.filter((C) => C.value > v), x = d.filter((C) => C.value < m);
      h && p.length >= 4 && p.forEach((C) => C.fourOfFiveUp = !0), g && x.length >= 4 && x.forEach((C) => C.fourOfFiveDown = !0);
    }
  for (let u = 0; u <= n.length - s; u++) {
    const c = n.slice(u, u + s), d = c.map(a);
    if (!d.every((g) => $e(g.value))) continue;
    let f = !0, h = !0;
    for (let g = 1; g < d.length && (d[g].value > d[g - 1].value || (f = !1), d[g].value < d[g - 1].value || (h = !1), !(!f && !h)); g++)
      ;
    f && c.forEach((g) => a(g).trendUp = !0), h && c.forEach((g) => a(g).trendDown = !0);
  }
}
function rc(e) {
  const t = [], n = [];
  e.singlePointUp && t.push({
    id: tt.SinglePoint,
    rank: mn[tt.SinglePoint]
  }), e.singlePointDown && n.push({
    id: tt.SinglePoint,
    rank: mn[tt.SinglePoint]
  }), e.twoSigmaUp && t.push({
    id: tt.TwoSigma,
    rank: mn[tt.TwoSigma]
  }), e.twoSigmaDown && n.push({
    id: tt.TwoSigma,
    rank: mn[tt.TwoSigma]
  }), e.shiftUp && t.push({ id: tt.Shift, rank: mn[tt.Shift] }), e.shiftDown && n.push({ id: tt.Shift, rank: mn[tt.Shift] }), e.trendUp && t.push({ id: tt.Trend, rank: mn[tt.Trend] }), e.trendDown && n.push({ id: tt.Trend, rank: mn[tt.Trend] });
  const a = t.reduce((i, l) => Math.max(i, l.rank), 0), o = n.reduce((i, l) => Math.max(i, l.rank), 0), s = a > o ? Tn.Upwards : o > a ? Tn.Downwards : Tn.Same;
  return { up: t, dn: n, upMax: a, dnMax: o, primeDirection: s };
}
function ji(e, t) {
  const n = t === We.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === We.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, a = t === We.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === We.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: n, opposite: a };
}
function Ti(e, t, n, a = !1, o, s, i = !1) {
  const { up: l, dn: u, upMax: c, dnMax: d, primeDirection: f } = rc(e);
  e.primeDirection = f;
  const h = e.specialCauseImprovementValue, g = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && Km({ row: e, metric: t, metricConflictRule: n, preferImprovementWhenConflict: a, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: o, ruleHierarchy: s }), t === We.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? Ke.ImprovementHigh : e.specialCauseConcernValue !== null ? Ke.ConcernLow : Ke.CommonCause : t === We.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? Ke.ImprovementLow : e.specialCauseConcernValue !== null ? Ke.ConcernHigh : Ke.CommonCause : e.variationIcon = Ke.CommonCause;
  const v = e.specialCauseImprovementValue !== null ? Cn.Up : e.specialCauseConcernValue !== null ? Cn.Down : void 0, m = v === Cn.Up ? c : v === Cn.Down ? d : Math.max(c, d);
  e.primeRank = m || void 0;
  const p = v === Cn.Up ? l.find((x) => x.rank === m) : v === Cn.Down ? u.find((x) => x.rank === m) : void 0;
  return e.primeRuleId = p?.id, { originalImprovement: h, originalConcern: g };
}
function Km(e) {
  const {
    row: t,
    metric: n,
    metricConflictRule: a,
    preferImprovementWhenConflict: o,
    preferTrendWhenConflict: s,
    primeDirection: i = t.primeDirection ?? Tn.Same,
    conflictStrategy: l,
    ruleHierarchy: u
  } = e;
  if (s && t.specialCauseImprovementValue !== null && t.specialCauseConcernValue !== null) {
    const d = !!t.trendUp, f = !!t.trendDown;
    if (n === We.Up) {
      if (d && !f) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!d && f) {
        t.specialCauseImprovementValue = null;
        return;
      }
    } else if (n === We.Down) {
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
  const c = o ? Gn.PreferImprovement : l ?? Gn.SqlPrimeThenRule;
  if (c === Gn.PreferImprovement) {
    n === We.Up ? t.specialCauseConcernValue = null : n === We.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (c === Gn.RuleHierarchy) {
    const d = u ?? [tt.Trend, tt.Shift, tt.TwoSigma, tt.SinglePoint], { up: f, dn: h } = rc(t);
    for (const g of d) {
      const v = f.some((p) => p.id === g), m = h.some((p) => p.id === g);
      if (v && !m) {
        n === We.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (m && !v) {
        n === We.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (v && m) {
        (n === We.Up || n === We.Down) && (a === Qn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === Tn.Upwards ? n === We.Up ? t.specialCauseConcernValue = null : n === We.Down && (t.specialCauseImprovementValue = null) : i === Tn.Downwards ? n === We.Up ? t.specialCauseImprovementValue = null : n === We.Down && (t.specialCauseConcernValue = null) : a === Qn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
var Ns = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(Ns || {});
function Jm(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Zm(e) {
  const t = Jm(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function Di(e) {
  const t = [];
  let n = 0;
  for (; n < e.length; ) {
    const a = e[n];
    if (!a || a.value == null || a.ghost || !a.trendUp && !a.trendDown) {
      n++;
      continue;
    }
    const o = a.trendUp ? "Up" : a.trendDown ? "Down" : void 0;
    let s = n, i = n;
    for (; i < e.length; i++) {
      const v = e[i];
      if (!v || v.value == null || v.ghost || !(o === "Up" ? v.trendUp : v.trendDown)) break;
    }
    const l = i - 1, u = [];
    let c, d, f = 1 / 0, h = -1 / 0, g = 0;
    for (let v = s; v <= l; v++) {
      const m = e[v];
      if (m.value == null) continue;
      const p = m.value - (m.mean ?? 0), x = Zm(p);
      if (!x) {
        c !== void 0 && (u.push({
          trendDirection: o,
          start: c,
          end: v - 1,
          side: d,
          minValue: f,
          maxValue: h,
          maxAbsDeltaFromMean: g
        }), c = void 0, d = void 0, f = 1 / 0, h = -1 / 0, g = 0);
        continue;
      }
      if (c === void 0)
        c = v, d = x, f = m.value, h = m.value, g = Math.abs(p);
      else if (x !== d)
        u.push({
          trendDirection: o,
          start: c,
          end: v - 1,
          side: d,
          minValue: f,
          maxValue: h,
          maxAbsDeltaFromMean: g
        }), c = v, d = x, f = m.value, h = m.value, g = Math.abs(p);
      else {
        m.value < f && (f = m.value), m.value > h && (h = m.value);
        const C = Math.abs(p);
        C > g && (g = C);
      }
    }
    c !== void 0 && u.push({
      trendDirection: o,
      start: c,
      end: l,
      side: d,
      minValue: f,
      maxValue: h,
      maxAbsDeltaFromMean: g
    }), t.push({ trendDirection: o, start: s, end: l, segments: u }), n = l + 1;
  }
  return t;
}
function Qm(e) {
  if (e === We.Up) return "Above";
  if (e === We.Down) return "Below";
}
function eg(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function Ii(e, t) {
  const n = t.strategy ?? gt.CrossingAfterFavourable, a = Qm(t.metricImprovement), o = eg(a), s = [];
  for (const i of e) {
    if (!a) {
      if (n === gt.ExtremeFavourable || n === gt.CrossingAfterFavourable) {
        const l = i.segments;
        if (l.length === 0) continue;
        let u = l[0];
        for (const c of l)
          c.maxAbsDeltaFromMean > u.maxAbsDeltaFromMean && (u = c);
        s.push(u);
      }
      continue;
    }
    if (n === gt.FavourableSide) {
      s.push(...i.segments.filter((l) => l.side === a));
      continue;
    }
    if (n === gt.UnfavourableSide) {
      s.push(...i.segments.filter((l) => l.side === o));
      continue;
    }
    if (n === gt.CrossingAfterFavourable) {
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
    if (n === gt.CrossingAfterUnfavourable) {
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
    if (n === gt.ExtremeFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      const u = l.reduce(
        (c, d) => d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean ? d : c
      );
      s.push(u);
      continue;
    }
    if (n === gt.ExtremeUnfavourable) {
      const l = i.segments.filter((c) => c.side === o);
      if (l.length === 0) continue;
      const u = l.reduce((c, d) => d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean ? d : c);
      s.push(u);
      continue;
    }
    if (n === gt.FirstFavourable) {
      const l = i.segments.find((u) => u.side === a);
      l && s.push(l);
      continue;
    }
    if (n === gt.FirstUnfavourable) {
      const l = i.segments.find((u) => u.side === o);
      l && s.push(l);
      continue;
    }
    if (n === gt.LongestFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      const u = l.reduce(
        (c, d) => d.end - d.start > c.end - c.start ? d : c
      );
      s.push(u);
      continue;
    }
    if (n === gt.LongestUnfavourable) {
      const l = i.segments.filter((c) => c.side === o);
      if (l.length === 0) continue;
      const u = l.reduce((c, d) => d.end - d.start > c.end - c.start ? d : c);
      s.push(u);
      continue;
    }
    if (n === gt.LastFavourable) {
      const l = i.segments.filter((u) => u.side === a);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
    if (n === gt.LastUnfavourable) {
      const l = i.segments.filter((u) => u.side === o);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
  }
  return s;
}
var pt = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(pt || {}), rr = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(rr || {});
function tg(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), n = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: n };
}
function ho(e, t) {
  const n = t.metricImprovement, a = t.trendVisualMode ?? "Ungated", o = t.enableNeutralNoJudgement ?? !0;
  return e.map((s) => {
    if (!s || s.value == null || s.ghost) return "Common";
    const { upAny: i, downAny: l } = tg(s);
    if (i && l) return "Improvement";
    switch (s.variationIcon) {
      case Ke.ImprovementHigh:
      case Ke.ImprovementLow:
        return "Improvement";
      case Ke.ConcernHigh:
      case Ke.ConcernLow:
        return "Concern";
      case Ke.NeitherHigh:
      case Ke.NeitherLow: {
        if (a === "Ungated" && n !== We.Neither) {
          if (i && !l)
            return n === We.Up ? "Improvement" : "Concern";
          if (l && !i)
            return n === We.Down ? "Improvement" : "Concern";
        }
        return o ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function ng(e, t, n) {
  const a = n?.mode ?? "Disabled";
  if (!e.length) return [];
  let o = ho(e, {
    metricImprovement: t,
    trendVisualMode: rr.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (a !== "RecalcCrossing" || t === We.Neither) return o;
  const s = Math.max(0, n?.preWindow ?? 2), i = Math.max(0, n?.postWindow ?? 3), l = n?.prePolarity ?? "Opposite", u = (f, h) => {
    if (f < 0 || f >= o.length) return;
    const g = o[f];
    (g === pt.Common || g === pt.NoJudgement) && (o[f] = h);
  }, c = (f) => {
    if (f == null) return null;
    const h = [];
    for (const v of e)
      v.partitionId === f && typeof v.value == "number" && !v.ghost && h.push(v.value);
    return h.length ? h.reduce((v, m) => v + m, 0) / h.length : null;
  }, d = Array.isArray(n?.boundaryIndices) && n.boundaryIndices.length ? n.boundaryIndices.slice().filter((f) => Number.isFinite(f)) : (() => {
    const f = [];
    for (let h = 1; h < e.length; h++) {
      const g = e[h - 1], v = e[h];
      !g || !v || v.partitionId !== g.partitionId && f.push(h);
    }
    return f;
  })();
  for (const f of d) {
    const h = e[f - 1], g = e[f];
    if (!h || !g) continue;
    let v = null;
    for (let S = f - 1; S >= 0; S--) {
      const y = e[S];
      if (y.partitionId !== h.partitionId) break;
      if (typeof y.mean == "number") {
        v = y.mean;
        break;
      }
    }
    let m = null;
    for (let S = f; S < e.length; S++) {
      const y = e[S];
      if (y.partitionId !== g.partitionId) break;
      if (typeof y.mean == "number") {
        m = y.mean;
        break;
      }
    }
    if (v == null && (v = c(h.partitionId ?? null)), m == null && (m = c(g.partitionId ?? null)), v == null || m == null) continue;
    const p = m - v, x = t === We.Up ? p > 0 : p < 0, C = x ? pt.Improvement : pt.Concern, P = l === "Same" ? C : x ? pt.Concern : pt.Improvement;
    for (let S = 1; S <= s; S++) u(f - S, P);
    for (let S = 0; S < i; S++) u(f + S, C);
  }
  return o;
}
function ac(e) {
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
function mo(e) {
  const { chartType: t, metricImprovement: n, data: a } = e, o = ac(e.settings), s = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: !1,
    metricConflictRule: Qn.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    enableFourOfFiveRule: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: Gn.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: Vt.Off,
    trendSegmentationStrategy: gt.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...o
  }, i = o?.trendSegmentationMode || (o?.trendFavourableSegmentation === !0 ? Vt.Always : o?.trendFavourableSegmentation === !1 ? Vt.Off : s.trendSegmentationMode), l = a.map((m, p) => ({
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
  const d = [], f = (s.trendFavourableSegmentation || i !== Vt.Off) && !s.preferImprovementWhenConflict, h = l.filter((m) => !m.ghost && $e(m.value)).length, g = !!s.chartLevelEligibility && h >= s.minimumPoints;
  let v = 0;
  for (const m of u) {
    v++;
    const p = m.map((y) => y.value), x = m.map((y) => y.ghost), C = qm(
      t,
      p,
      x,
      !!s.excludeMovingRangeOutliers
    ), P = m.map((y, $) => {
      const T = !y.ghost && $e(y.value) ? p.slice(0, $ + 1).filter((_, D) => !x[D] && $e(_)).length : 0, N = g ? !0 : T >= s.minimumPoints;
      return {
        rowId: y.rowId,
        x: y.x,
        value: $e(y.value) ? y.value : null,
        ghost: y.ghost,
        partitionId: v,
        pointRank: T,
        mean: (N || g) && $e(C.mean) ? C.mean : null,
        upperProcessLimit: N || g ? C.upperProcessLimit : null,
        lowerProcessLimit: N || g ? C.lowerProcessLimit : null,
        upperTwoSigma: N || g ? C.upperTwoSigma : null,
        lowerTwoSigma: N || g ? C.lowerTwoSigma : null,
        upperOneSigma: N || g ? C.upperOneSigma : null,
        lowerOneSigma: N || g ? C.lowerOneSigma : null,
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
        variationIcon: Ke.CommonCause
      };
    });
    for (const y of P)
      y.ghost || !$e(y.value) || y.mean === null || ($e(y.upperProcessLimit) && y.value > y.upperProcessLimit && (y.singlePointUp = !0), $e(y.lowerProcessLimit) && y.value < y.lowerProcessLimit && (y.singlePointDown = !0));
    Xm(P, {
      shiftPoints: s.shiftPoints,
      trendPoints: s.trendPoints,
      twoSigmaIncludeAboveThree: !!s.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!s.enableFourOfFiveRule
    }), f && ((y) => {
      const $ = y.some(
        (k) => (k.singlePointUp || k.twoSigmaUp || k.shiftUp || k.trendUp) && (k.singlePointDown || k.twoSigmaDown || k.shiftDown || k.trendDown)
      );
      if (i === Vt.Off || i === Vt.AutoWhenConflict && !$)
        return;
      const T = Di(y), N = Ii(T, {
        metricImprovement: n,
        strategy: s.trendSegmentationStrategy
      }), _ = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
      for (const k of N)
        for (let b = k.start; b <= k.end; b++)
          k.trendDirection === Ns.Up ? _.add(b) : D.add(b);
      y.forEach((k, b) => {
        k.trendUp = _.has(b) ? k.trendUp : !1, k.trendDown = D.has(b) ? k.trendDown : !1, s.trendDominatesHighlightedWindow && (_.has(b) ? (k.singlePointDown = !1, k.twoSigmaDown = !1, k.shiftDown = !1) : D.has(b) && (k.singlePointUp = !1, k.twoSigmaUp = !1, k.shiftUp = !1));
      });
    })(P);
    for (const y of P) {
      if (y.ghost || !$e(y.value) || y.mean === null) {
        d.push(y);
        continue;
      }
      const { aligned: $, opposite: T } = ji(
        y,
        n
      );
      if (y.specialCauseImprovementValue = $ ? y.value : null, y.specialCauseConcernValue = T ? y.value : null, n === We.Neither) {
        const N = y.singlePointUp || y.twoSigmaUp || y.shiftUp || y.trendUp, _ = y.singlePointDown || y.twoSigmaDown || y.shiftDown || y.trendDown;
        y.variationIcon = N ? Ke.NeitherHigh : _ ? Ke.NeitherLow : Ke.CommonCause;
      } else
        Ti(y, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
      d.push(y);
    }
  }
  if (s.trendAcrossPartitions) {
    const m = d.map((p, x) => ({ idx: x, r: p })).filter(({ r: p }) => !p.ghost && $e(p.value));
    if (m.length >= s.trendPoints)
      for (let p = 0; p <= m.length - s.trendPoints; p++) {
        const x = m.slice(p, p + s.trendPoints).map((y) => y.idx), C = x.map((y) => d[y]);
        if (!C.every((y) => $e(y.value))) continue;
        let P = !0, S = !0;
        for (let y = 1; y < C.length && (C[y].value > C[y - 1].value || (P = !1), C[y].value < C[y - 1].value || (S = !1), !(!P && !S)); y++)
          ;
        P && x.forEach((y) => d[y].trendUp = !0), S && x.forEach((y) => d[y].trendDown = !0);
      }
  }
  if (s.trendAcrossPartitions) {
    if (f) {
      const m = d.some(
        (p) => (p.singlePointUp || p.twoSigmaUp || p.shiftUp || p.trendUp) && (p.singlePointDown || p.twoSigmaDown || p.shiftDown || p.trendDown)
      );
      if (i === Vt.Always || i === Vt.AutoWhenConflict && m) {
        const p = Di(d), x = Ii(p, { metricImprovement: n, strategy: s.trendSegmentationStrategy }), C = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Set();
        for (const S of x)
          for (let y = S.start; y <= S.end; y++)
            S.trendDirection === Ns.Up ? C.add(y) : P.add(y);
        d.forEach((S, y) => {
          S.trendUp = C.has(y) ? S.trendUp : !1, S.trendDown = P.has(y) ? S.trendDown : !1, s.trendDominatesHighlightedWindow && (C.has(y) ? (S.singlePointDown = !1, S.twoSigmaDown = !1, S.shiftDown = !1) : P.has(y) && (S.singlePointUp = !1, S.twoSigmaUp = !1, S.shiftUp = !1));
        });
      }
    }
    for (const m of d) {
      if (m.ghost || !$e(m.value) || m.mean === null || n === We.Neither) continue;
      const { aligned: p, opposite: x } = ji(m, n);
      m.specialCauseImprovementValue = p ? m.value : null, m.specialCauseConcernValue = x ? m.value : null, Ti(m, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
    }
  }
  return { rows: d };
}
function go(e, t) {
  const n = mo(e), a = ho(n.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? rr.Ungated,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), o = t?.boundaryWindows;
  if (!o || o.mode !== "RecalcCrossing") return { rows: n.rows, visuals: a };
  const s = o.directionOverride ?? e.metricImprovement, i = ng(n.rows, s, o), l = a.map((u, c) => {
    const d = i[c];
    if (u === pt.Common || u === pt.NoJudgement) {
      if (d === pt.Improvement) return pt.Improvement;
      if (d === pt.Concern) return pt.Concern;
    }
    return u;
  });
  return { rows: n.rows, visuals: l };
}
var sc = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(sc || {});
function rg(e, t, n) {
  const a = n?.trendVisualMode ?? rr.Ungated, o = n?.enableNeutralNoJudgement ?? !0, s = Array.isArray(e.data) ? e.data.map((f, h) => f?.baseline ? h : -1).filter((f) => f >= 0) : [];
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
  const { rows: l, visuals: u } = go(e, {
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
  return (t === "recalculations-recalculated" || t === "baselines-recalculated") && d > 0 && (c[d - 1] = pt.Common), { rows: l, visuals: c };
}
const oc = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: !1,
  metricConflictRule: Qn.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function ag(e) {
  return { ...oc, ...e ?? {} };
}
function sg(e) {
  const { rows: t } = mo(e), n = go(e);
  return { rows: t, visuals: n.visuals };
}
var qn = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(qn || {}), js = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(js || {});
function og(e) {
  const {
    ui: t,
    input: n,
    engine: a,
    data: o,
    targets: s,
    baselines: i,
    ghosts: l,
    settings: u,
    chartType: c,
    metricImprovement: d,
    gradientSequences: f,
    sequenceTransition: h,
    processLineWidth: g,
    showPartitionMarkers: v,
    showWarningsPanel: m,
    warningsFilter: p,
    enableNeutralNoJudgement: x,
    showTrendGatingExplanation: C,
    trendVisualMode: P,
    alwaysShowZeroY: S,
    alwaysShowHundredY: y,
    percentScale: $,
    showTrendStartMarkers: T,
    showFirstFavourableCrossMarkers: N,
    showTrendBridgeOverlay: _,
    showSignalsInspector: D,
    onSignalFocus: k,
    showIcons: b,
    showEmbeddedIcon: L,
    embeddedIconVariant: w,
    embeddedIconRunLength: I,
    showFocusIndicator: j
  } = e;
  process.env.NODE_ENV !== "production" && (!n && (s !== void 0 || i !== void 0 || l !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={ data, targets, baselines, ghosts } instead."
  ), !a && u !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={ chartType, metricImprovement, settings }."
  ));
  const M = n?.data ?? o ?? [], te = n?.targets ?? s, V = n?.baselines ?? i, E = n?.ghosts ?? l, O = a?.chartType ?? c ?? xt.XmR, U = a?.metricImprovement ?? d ?? Ae.Neither, ae = a?.settings ?? u, W = t?.axes?.alwaysShowZeroY ?? S ?? !0, le = t?.axes?.alwaysShowHundredY ?? y ?? !1, Se = t?.axes?.percentScale ?? $ ?? !1, de = t?.visuals?.gradientSequences ?? f ?? !1, fe = t?.visuals?.sequenceTransition ?? h ?? "slope", Z = t?.visuals?.processLineWidth ?? g ?? 2, ne = t?.visuals?.trend?.visualMode ?? P ?? "ungated", pe = t?.visuals?.trend?.showGatingExplanation ?? C ?? !0, z = t?.visuals?.rules?.enableNeutralNoJudgement ?? x ?? !0, ce = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, F = t?.overlays?.partitionMarkers ?? v ?? !1, R = t?.overlays?.trendStartMarkers ?? T ?? !1, K = t?.overlays?.firstFavourableCrossMarkers ?? N ?? !1, oe = t?.overlays?.trendBridge ?? _ ?? !1, ie = t?.inspector?.show ?? D ?? !1, he = t?.inspector?.onFocus ?? k, ue = t?.warnings?.show ?? m ?? !1, H = t?.warnings?.filter ?? p, B = t?.icons?.show ?? b ?? !1, q = t?.icons?.embedded?.show ?? L ?? !0, X = t?.icons?.embedded?.variant ?? w ?? xn.Classic, A = t?.icons?.embedded?.runLength ?? I, Y = t?.overlays?.focusIndicator ?? j ?? !0;
  return {
    effData: M,
    effTargets: te,
    effBaselines: V,
    effGhosts: E,
    effChartTypeCore: O,
    effMetricImprovementCore: U,
    effEngineSettings: ae,
    effAlwaysShowZeroY: W,
    effAlwaysShowHundredY: le,
    effPercentScale: Se,
    effGradientSequences: de,
    effSequenceTransition: fe,
    effProcessLineWidth: Z,
    effTrendVisualMode: ne,
    effShowTrendGatingExplanation: pe,
    effEnableNeutralNoJudgement: z,
    effEnableRules: ce,
    effShowPartitionMarkers: F,
    effShowTrendStartMarkers: R,
    effShowFirstFavourableCrossMarkers: K,
    effShowTrendBridgeOverlay: oe,
    effShowSignalsInspector: ie,
    effOnSignalFocus: he,
    effShowWarningsPanel: ue,
    effWarningsFilter: H,
    effShowIcons: B,
    effShowEmbeddedIcon: q,
    effEmbeddedIconVariant: X,
    effEmbeddedIconRunLength: A,
    effShowFocusIndicator: Y
  };
}
let ig = 0;
const lg = ({
  data: e,
  ariaLabel: t = "SPC chart",
  height: n = 260,
  showZones: a = !0,
  showPoints: o = !0,
  announceFocus: s = !1,
  className: i,
  unit: l,
  highlightOutOfControl: u = !0,
  chartType: c = xt.XmR,
  metricImprovement: d = Ae.Neither,
  enableRules: f = !0,
  showIcons: h = !1,
  showEmbeddedIcon: g = !0,
  embeddedIconVariant: v = xn.Classic,
  embeddedIconRunLength: m,
  targets: p,
  baselines: x,
  ghosts: C,
  settings: P,
  narrationContext: S,
  gradientSequences: y = !1,
  sequenceTransition: $ = qn.Slope,
  processLineWidth: T = 2,
  showWarningsPanel: N = !1,
  warningsFilter: _,
  enableNeutralNoJudgement: D = !0,
  showTrendGatingExplanation: k = !0,
  trendVisualMode: b = js.Ungated,
  disableTrendSideGating: L,
  source: w,
  alwaysShowZeroY: I = !0,
  alwaysShowHundredY: j = !1,
  percentScale: M = !1,
  showPartitionMarkers: te = !1,
  showTrendStartMarkers: V = !1,
  showFirstFavourableCrossMarkers: E = !1,
  showTrendBridgeOverlay: O = !1,
  showSignalsInspector: U = !1,
  onSignalFocus: ae,
  visualsScenario: W = sc.None,
  showFocusIndicator: le = !0,
  visualsEngineSettings: Se,
  ui: de,
  input: fe,
  engine: Z
}) => {
  const ne = G.useCallback(
    (Te) => String(Te).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Ee) => Ee.length ? Ee[0].toUpperCase() + Ee.slice(1) : Ee).join(" "),
    []
  ), pe = G.useCallback(
    (Te) => String(Te).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((ke) => ke.length ? ke[0].toUpperCase() + ke.slice(1) : ke).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && L !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const {
    effData: z,
    effTargets: ce,
    effBaselines: F,
    effGhosts: R,
    effChartTypeCore: K,
    effMetricImprovementCore: oe,
    effEngineSettings: ie,
    effAlwaysShowZeroY: he,
    effAlwaysShowHundredY: ue,
    effPercentScale: H,
    effGradientSequences: B,
    effSequenceTransition: q,
    effProcessLineWidth: X,
    effTrendVisualMode: A,
    effShowTrendGatingExplanation: Y,
    effEnableNeutralNoJudgement: Q,
    effEnableRules: ee,
    effShowPartitionMarkers: J,
    effShowTrendStartMarkers: se,
    effShowFirstFavourableCrossMarkers: me,
    effShowTrendBridgeOverlay: ve,
    effShowSignalsInspector: ye,
    effOnSignalFocus: je,
    effShowWarningsPanel: ge,
    effWarningsFilter: Fe,
    effShowIcons: Ge,
    effShowEmbeddedIcon: nt,
    effEmbeddedIconVariant: Ye,
    effEmbeddedIconRunLength: dt,
    effShowFocusIndicator: At
  } = og({
    data: e,
    targets: p,
    baselines: x,
    ghosts: C,
    settings: P,
    chartType: c,
    metricImprovement: d,
    enableRules: f,
    gradientSequences: y,
    sequenceTransition: $,
    processLineWidth: T,
    showPartitionMarkers: te,
    showWarningsPanel: N,
    warningsFilter: _,
    enableNeutralNoJudgement: D,
    showTrendGatingExplanation: k,
    trendVisualMode: b,
    alwaysShowZeroY: I,
    alwaysShowHundredY: j,
    percentScale: M,
    showTrendStartMarkers: V,
    showFirstFavourableCrossMarkers: E,
    showTrendBridgeOverlay: O,
    showSignalsInspector: U,
    onSignalFocus: ae,
    showIcons: h,
    showEmbeddedIcon: g,
    embeddedIconVariant: v,
    embeddedIconRunLength: m,
    showFocusIndicator: le,
    ui: de,
    input: fe,
    engine: Z
  }), mt = G.useMemo(() => z.map((Te, ke) => ({
    x: Te.x,
    value: Te.y,
    target: ce?.[ke] ?? void 0,
    baseline: F?.[ke] ?? void 0,
    ghost: R?.[ke] ?? void 0
  })), [z, ce, F, R]), Dt = G.useMemo(() => {
    try {
      const Te = ie?.minimumPointsPartition ?? ie?.minimumPoints, ke = {};
      typeof Te == "number" && !isNaN(Te) && (ke.minimumPoints = Te, mt.filter(
        (re) => !re.ghost && typeof re.value == "number"
      ).length >= Te && (ke.chartLevelEligibility = !0)), ie?.enableFourOfFiveRule != null && (ke.enableFourOfFiveRule = !!ie.enableFourOfFiveRule), Se && Object.assign(ke, Se);
      const Ee = (et) => {
        switch (et) {
          case xt.XmR:
            return Mt.XmR;
          case xt.T:
            return Mt.T;
          case xt.G:
            return Mt.G;
          default:
            return Mt.XmR;
        }
      }, Qe = (et) => {
        switch (et) {
          case Ae.Up:
            return We.Up;
          case Ae.Down:
            return We.Down;
          default:
            return We.Neither;
        }
      }, De = {
        chartType: Ee(K),
        metricImprovement: Qe(oe),
        data: mt,
        settings: Object.keys(ke).length ? ke : void 0
      }, { visuals: vt } = rg(De, W, {
        trendVisualMode: A === js.Ungated ? rr.Ungated : rr.Gated,
        enableNeutralNoJudgement: Q
      });
      return vt || [];
    } catch {
      return [];
    }
  }, [
    mt,
    K,
    oe,
    A,
    Q,
    ie,
    W,
    Se
  ]), Oe = G.useMemo(() => {
    try {
      const Te = ie?.minimumPointsPartition ?? ie?.minimumPoints, ke = {};
      typeof Te == "number" && !isNaN(Te) && (ke.minimumPoints = Te, mt.filter(
        (_e) => !_e.ghost && typeof _e.value == "number"
      ).length >= Te && (ke.chartLevelEligibility = !0)), ie?.enableFourOfFiveRule != null && (ke.enableFourOfFiveRule = !!ie.enableFourOfFiveRule), Se && Object.assign(ke, Se);
      const Ee = (re) => {
        switch (re) {
          case xt.XmR:
            return Mt.XmR;
          case xt.T:
            return Mt.T;
          case xt.G:
            return Mt.G;
          default:
            return Mt.XmR;
        }
      }, Qe = (re) => {
        switch (re) {
          case Ae.Up:
            return We.Up;
          case Ae.Down:
            return We.Down;
          default:
            return We.Neither;
        }
      }, De = {
        chartType: Ee(K),
        metricImprovement: Qe(oe),
        data: mt,
        settings: Object.keys(ke).length ? ke : void 0
      }, { rows: vt } = sg(De), et = (re) => {
        switch (re) {
          case Ke.ImprovementHigh:
          case Ke.ImprovementLow:
            return Le.Improvement;
          case Ke.ConcernHigh:
          case Ke.ConcernLow:
            return Le.Concern;
          case Ke.NeitherHigh:
          case Ke.NeitherLow:
            return Le.Neither;
          case Ke.CommonCause:
          default:
            return Le.Neither;
        }
      };
      return vt.map(
        (re, _e) => ({
          data: {
            value: re.value,
            ghost: !!re.ghost
          },
          partition: { id: re.partitionId },
          limits: {
            mean: re.mean,
            ucl: re.upperProcessLimit,
            lcl: re.lowerProcessLimit,
            oneSigma: { upper: re.upperOneSigma, lower: re.lowerOneSigma },
            twoSigma: { upper: re.upperTwoSigma, lower: re.lowerTwoSigma }
          },
          rules: {
            singlePoint: { up: !!re.singlePointUp, down: !!re.singlePointDown },
            twoOfThree: { up: !!re.twoSigmaUp, down: !!re.twoSigmaDown },
            fourOfFive: { up: !!re.fourOfFiveUp, down: !!re.fourOfFiveDown },
            shift: { up: !!re.shiftUp, down: !!re.shiftDown },
            trend: { up: !!re.trendUp, down: !!re.trendDown }
          },
          classification: {
            variation: et(re.variationIcon),
            neutralSpecialCauseValue: re.variationIcon === Ke.NeitherHigh || re.variationIcon === Ke.NeitherLow ? re.specialCauseImprovementValue ?? re.specialCauseConcernValue ?? 1 : null,
            assurance: void 0
          },
          target: mt[_e]?.target ?? null
        })
      );
    } catch {
      return null;
    }
  }, [mt, K, oe, ie, Se]) || null, jt = (Oe || []).slice().reverse().find((Te) => Te.limits.mean != null), An = jt?.limits.mean ?? null, un = G.useMemo(() => {
    const Te = [];
    try {
      const ke = Oe, Ee = ie?.minimumPoints ?? 13, Qe = ie?.minimumPointsPartition ?? 12;
      if (ke && ke.length) {
        const De = ke.filter(
          (et) => !et.data.ghost && et.data.value != null
        ).length;
        De < Ee && Te.push({
          code: ea.InsufficientPointsGlobal,
          severity: Et.Warning,
          category: Qr.Data,
          message: "Not enough non-ghost points to compute stable limits/icons.",
          context: { nonGhostCount: De, minimumPoints: Ee }
        });
        const vt = /* @__PURE__ */ new Map();
        for (const et of ke) {
          const re = et.partition.id ?? 0, _e = vt.get(re) || { size: 0, nonGhost: 0 };
          _e.size += 1, !et.data.ghost && et.data.value != null && (_e.nonGhost += 1), vt.set(re, _e);
        }
        for (const [et, re] of vt)
          re.nonGhost > 0 && re.nonGhost < Qe && Te.push({
            code: ea.InsufficientPointsPartition,
            severity: Et.Warning,
            category: Qr.Partition,
            message: "A partition/baseline segment has too few points for recommended stability.",
            context: {
              partitionId: et,
              nonGhostCount: re.nonGhost,
              minimumPointsPartition: Qe
            }
          });
      }
    } catch {
    }
    return Te;
  }, [Oe, ie?.minimumPoints, ie?.minimumPointsPartition]), Ut = G.useMemo(() => un.length ? Fe ? un.filter((Te) => !(Fe.severities && Te.severity && !Fe.severities.includes(Te.severity) || Fe.categories && Te.category && !Fe.categories.includes(Te.category) || Fe.codes && !Fe.codes.includes(Te.code))) : un : [], [un, Fe]), [Rn, En] = G.useState(""), dn = G.useRef("");
  G.useEffect(() => {
    if (!ge) {
      dn.current !== "" && (dn.current = "", En(""));
      return;
    }
    const Te = Ut.length;
    if (!Te) {
      const De = "Diagnostics: no warnings.";
      De !== dn.current && (dn.current = De, En(De));
      return;
    }
    const ke = {
      error: Ut.filter(
        (De) => De.severity === Et.Error
      ).length,
      warning: Ut.filter(
        (De) => De.severity === Et.Warning
      ).length,
      info: Ut.filter(
        (De) => De.severity === Et.Info
      ).length
    }, Ee = [];
    ke.error && Ee.push(
      `${ke.error} error${ke.error === 1 ? "" : "s"}`
    ), ke.warning && Ee.push(
      `${ke.warning} warning${ke.warning === 1 ? "" : "s"}`
    ), ke.info && Ee.push(`${ke.info} info`);
    const Qe = `Diagnostics updated: ${Te} warning${Te === 1 ? "" : "s"} (${Ee.join(", ")}).`;
    Qe !== dn.current && (dn.current = Qe, En(Qe));
  }, [ge, Ut]);
  const vn = jt?.limits.ucl ?? null, yn = jt?.limits.lcl ?? null, Wt = jt?.limits.oneSigma.upper ?? null, sr = jt?.limits.oneSigma.lower ?? null, fn = jt?.limits.twoSigma.upper ?? null, Tt = jt?.limits.twoSigma.lower ?? null, pn = An != null && Wt != null ? Math.abs(Wt - An) : 0, lt = G.useMemo(
    () => [{ id: "process", data: z, color: "#A6A6A6" }],
    [z]
  ), st = G.useMemo(() => {
    if (H) {
      const De = z.map((re) => re.y), vt = Math.max(100, ...De), et = Math.min(0, ...De);
      return [et < 0 ? et : 0, vt > 100 ? vt : 100];
    }
    const ke = [...z.map((De) => De.y)];
    if ([An, vn, yn, Wt, sr, fn, Tt].forEach((De) => {
      De != null && ke.push(De);
    }), ce && ce.forEach((De) => {
      typeof De == "number" && !isNaN(De) && ke.push(De);
    }), !ke.length) return;
    let Ee = Math.min(...ke), Qe = Math.max(...ke);
    return he && (Ee = Math.min(0, Ee)), ue && (Qe = Math.max(100, Qe)), [Ee, Qe];
  }, [
    z,
    An,
    vn,
    yn,
    Wt,
    sr,
    fn,
    Tt,
    ce,
    he,
    ue,
    H
  ]), wn = G.useMemo(() => {
    const Te = (ke) => {
      const Ee = ke.filter(
        (De) => typeof De == "number" && !isNaN(De)
      );
      if (!Ee.length) return null;
      const Qe = Ee[0];
      return Ee.every((De) => De === Qe) ? Qe : null;
    };
    if (Oe && Oe.length) {
      const ke = Te(Oe.map((Ee) => Ee.target));
      if (ke != null) return ke;
    }
    return ce && ce.length ? Te(ce) : null;
  }, [Oe, ce]), Ba = G.useMemo(() => {
    const Te = z.map((ke) => ke.x);
    return tc({
      values: z.map((ke) => ke.y),
      dates: Te,
      providedUnit: l || S?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [z, l, S?.measureUnit]), Bn = l ?? S?.measureUnit ?? Ba.unit, It = G.useMemo(() => Bn ? { ...S || {}, measureUnit: Bn } : S, [S, Bn]), Ha = G.useMemo(() => {
    if (!Oe) return [];
    const Te = [];
    for (let ke = 1; ke < Oe.length; ke++)
      Oe[ke].partition.id !== Oe[ke - 1].partition.id && Te.push(ke);
    return Te;
  }, [Oe]), Oa = G.useMemo(() => {
    if (!nt || !Oe?.length) return null;
    const Te = Oe, ke = ie?.minimumPoints ?? 13;
    if (Te.filter(
      (Be) => !Be.data.ghost && Be.data.value != null
    ).length < ke) return null;
    let Qe = -1;
    for (let Be = Te.length - 1; Be >= 0; Be--) {
      const yt = Te[Be];
      if (yt && yt.data.value != null && !yt.data.ghost) {
        Qe = Be;
        break;
      }
    }
    if (Qe === -1) return null;
    const De = Te[Qe], vt = De.classification?.variation, et = vt, re = De.classification?.assurance, _e = et === Le.Neither && !!De.classification?.neutralSpecialCauseValue, xe = re === ot.Pass ? gn.Pass : re === ot.Fail ? gn.Fail : gn.Uncertain;
    let Ie;
    if (et === Le.Suppressed) {
      const Be = !!De.rules.singlePoint.up, yt = !!De.rules.singlePoint.down;
      oe === Ae.Up ? Be ? Ie = Me.Higher : yt && (Ie = Me.Lower) : oe === Ae.Down ? yt ? Ie = Me.Lower : Be && (Ie = Me.Higher) : Ie = Me.Higher;
    } else if (et === Le.Neither && _e) {
      const Be = De.rules.singlePoint.up || De.rules.twoOfThree.up || De.rules.fourOfFive.up || De.rules.shift.up || De.rules.trend.up, yt = De.rules.singlePoint.down || De.rules.twoOfThree.down || De.rules.fourOfFive.down || De.rules.shift.down || De.rules.trend.down;
      Be && !yt ? Ie = Me.Higher : yt && !Be ? Ie = Me.Lower : Ie = Me.Higher;
    }
    let qe;
    oe === Ae.Up ? qe = at.HigherIsBetter : oe === Ae.Down ? qe = at.LowerIsBetter : qe = at.ContextDependent;
    const ze = 80;
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        style: { display: "flex", gap: 12, marginRight: 16 },
        children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-icon",
              "data-variation": String(et),
              "data-trend-raw": Ie ? String(Ie) : "none",
              "data-trend": Ie ? String(Ie) : "none",
              "data-polarity": String(qe ?? "unknown"),
              style: { width: ze, height: ze },
              children: /* @__PURE__ */ r.jsx(
                Ra,
                {
                  dropShadow: !1,
                  data: {
                    variationIcon: vt,
                    improvementDirection: oe,
                    polarity: qe,
                    specialCauseNeutral: _e,
                    highSideSignal: De.rules.singlePoint.up || De.rules.twoOfThree.up || De.rules.fourOfFive.up || De.rules.shift.up || De.rules.trend.up,
                    lowSideSignal: De.rules.singlePoint.down || De.rules.twoOfThree.down || De.rules.fourOfFive.down || De.rules.shift.down || De.rules.trend.down,
                    ...Ie ? { trend: Ie } : {}
                  },
                  letterMode: oe === Ae.Neither ? _r.Direction : _r.Polarity,
                  size: ze,
                  variant: Ye,
                  runLength: Ye === xn.TriangleWithRun ? dt : void 0
                }
              )
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-assurance-icon",
              "data-assurance": String(re),
              style: { width: ze, height: ze },
              children: /* @__PURE__ */ r.jsx(
                Ea,
                {
                  status: xe,
                  size: ze,
                  dropShadow: !1
                }
              )
            }
          )
        ]
      },
      `embedded-icon-${Qe}`
    );
  }, [
    nt,
    Oe,
    oe,
    ie?.minimumPoints,
    Ye,
    dt
  ]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: i ? `fdp-spc-chart-wrapper ${i}` : "fdp-spc-chart-wrapper",
      children: [
        nt && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__top-row",
            style: {
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 4
            },
            children: Oa
          }
        ),
        /* @__PURE__ */ r.jsx(
          Nh,
          {
            height: n,
            ariaLabel: t,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ r.jsx(jh, { series: lt, yDomain: st, children: /* @__PURE__ */ r.jsx(
              cg,
              {
                series: lt,
                showPoints: o,
                announceFocus: s,
                limits: { mean: An, ucl: vn, lcl: yn, sigma: pn, onePos: Wt, oneNeg: sr, twoPos: fn, twoNeg: Tt },
                showZones: a,
                highlightOutOfControl: u,
                engineRows: Oe,
                uniformTarget: wn,
                visualCategories: Dt,
                enableRules: ee,
                showIcons: Ge,
                narrationContext: It,
                gradientSequences: B,
                sequenceTransition: q,
                processLineWidth: X,
                effectiveUnit: Bn,
                partitionMarkers: J ? Ha : [],
                ariaLabel: t,
                enableNeutralNoJudgement: Q,
                showTrendGatingExplanation: Y,
                metricImprovement: oe,
                showTrendStartMarkers: se,
                showFirstFavourableCrossMarkers: me,
                showTrendBridgeOverlay: ve,
                showSignalsInspector: ye,
                onSignalFocus: je,
                showFocusIndicator: At
              }
            ) })
          }
        ),
        w && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof w == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          w
        ] }) : w }),
        ge && Rn && /* @__PURE__ */ r.jsx(
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
            children: Rn
          }
        ),
        ge && Ut.length > 0 && /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "fdp-spc-chart__warnings",
            role: "region",
            "aria-label": "SPC diagnostics",
            children: [
              /* @__PURE__ */ r.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
              /* @__PURE__ */ r.jsx(
                ln,
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
                  rows: Ut.map((Te) => {
                    let ke = "grey";
                    return Te.severity === Et.Error ? ke = "red" : Te.severity === Et.Warning ? ke = "orange" : Te.severity === Et.Info && (ke = "blue"), [
                      {
                        node: /* @__PURE__ */ r.jsx(
                          Je,
                          {
                            color: ke,
                            text: (Te.severity ? String(Te.severity) : "Info").replace(
                              /^[a-z]/,
                              (Ee) => Ee.toUpperCase()
                            )
                          }
                        ),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
                      },
                      {
                        node: Te.category ? /* @__PURE__ */ r.jsx(
                          Je,
                          {
                            color: "purple",
                            text: pe(Te.category)
                          }
                        ) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
                      },
                      {
                        node: /* @__PURE__ */ r.jsx(Je, { color: "grey", text: ne(Te.code) }),
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
}, cg = ({
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
  effectiveUnit: g,
  partitionMarkers: v,
  ariaLabel: m,
  metricImprovement: p,
  enableNeutralNoJudgement: x = !0,
  showTrendGatingExplanation: C = !0,
  showTrendStartMarkers: P = !1,
  showFirstFavourableCrossMarkers: S = !1,
  showTrendBridgeOverlay: y = !1,
  showSignalsInspector: $ = !1,
  onSignalFocus: T,
  visualCategories: N,
  uniformTarget: _,
  showFocusIndicator: D = !1
}) => {
  const k = Ln(), b = bn();
  if (!k) return null;
  const { xScale: L, yScale: w } = k, I = G.useRef(
    "spc-seq-" + ++ig
  ), j = cn(), M = e[0]?.data || [], te = G.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const F = /* @__PURE__ */ new Set();
    return M.forEach((R, K) => {
      typeof a.ucl == "number" && R.y > a.ucl && F.add(K), typeof a.lcl == "number" && R.y < a.lcl && F.add(K);
    }), F;
  }, [a.ucl, a.lcl, M]), V = G.useMemo(() => {
    if (!i || !i.length) return null;
    const F = [];
    return i.forEach((R, K) => {
      const oe = R.classification.variation === Le.Concern || R.classification.variation === Le.Improvement || !!R.classification.neutralSpecialCauseValue, ie = !!R.rules.singlePoint.up || !!R.rules.twoOfThree.up || !!R.rules.fourOfFive.up || !!R.rules.shift.up || !!R.rules.trend.up, he = !!R.rules.singlePoint.down || !!R.rules.twoOfThree.down || !!R.rules.fourOfFive.down || !!R.rules.shift.down || !!R.rules.trend.down;
      F[K] = {
        variation: R.classification.variation,
        assurance: R.classification.assurance,
        special: oe,
        concern: R.classification.variation === Le.Concern,
        improvement: R.classification.variation === Le.Improvement,
        trendUp: !!R.rules.trend.up,
        trendDown: !!R.rules.trend.down,
        upAny: ie,
        downAny: he,
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
  }, [i]), E = G.useMemo(() => (N || []).map((F) => F === pt.Improvement ? ct.Improvement : F === pt.Concern ? ct.Concern : F === pt.NoJudgement ? ct.NoJudgement : ct.Common), [N]), O = G.useMemo(() => !d || !E.length ? [] : Vm(E, !0), [d, E, m]), U = G.useMemo(
    () => M.map((F) => L(F.x instanceof Date ? F.x : new Date(F.x))),
    [M, L]
  ), ae = L.range()[1], W = G.useMemo(() => {
    if (!i || !i.length)
      return null;
    let F = Number.POSITIVE_INFINITY, R = Number.POSITIVE_INFINITY;
    if (i.forEach((B, q) => {
      B.rules.trend.up && (F = Math.min(F, q)), B.rules.trend.down && (R = Math.min(R, q));
    }), !Number.isFinite(F) && !Number.isFinite(R))
      return null;
    const K = F <= R, oe = K ? "up" : "down", ie = K ? F : R, he = (B) => p == null || p === Ae.Neither || B == null || typeof B.data.value != "number" || typeof B.limits.mean != "number" ? !1 : oe === "up" ? p === Ae.Up ? B.data.value > B.limits.mean : B.data.value < B.limits.mean : p === Ae.Down ? B.data.value < B.limits.mean : B.data.value > B.limits.mean;
    let ue = null;
    for (let B = ie; B < i.length; B++) {
      const q = i[B];
      if (!(K ? !!q.rules.trend.up : !!q.rules.trend.down)) break;
      if (he(q)) {
        ue = B;
        break;
      }
    }
    let H = !1;
    if (ue != null) {
      let B = 0;
      for (let q = ue; q < i.length; q++) {
        const X = i[q];
        if (!(K ? !!X.rules.trend.up : !!X.rules.trend.down)) break;
        he(X) && B++;
      }
      H = B >= 2;
    }
    return {
      direction: oe,
      detectedAt: ie,
      firstFavourableCrossAt: ue,
      persistedAcrossMean: H
    };
  }, [i, p]), le = G.useMemo(() => {
    if (!i || !i.length) return null;
    const F = (R) => {
      const K = [];
      let oe = null, ie = null;
      for (let he = 0; he < i.length; he++) {
        const ue = i[he], H = R(ue), B = typeof H == "number" && !isNaN(H) ? H : null;
        if (B == null) {
          oe !== null && ie != null && (K.push({
            x1: U[oe],
            x2: U[he - 1],
            y: w(ie)
          }), oe = null, ie = null);
          continue;
        }
        if (oe === null) {
          oe = he, ie = B;
          continue;
        }
        ie != null && Math.abs(B - ie) <= 1e-9 || (ie != null && K.push({
          x1: U[oe],
          x2: U[he - 1],
          y: w(ie)
        }), oe = he, ie = B);
      }
      return oe !== null && ie != null && K.push({
        x1: U[oe],
        x2: U[i.length - 1],
        y: w(ie)
      }), K;
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
  }, [i, U, w]), Se = G.useMemo(() => O.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
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
    O.map((F, R) => {
      const K = `${I.current}-grad-${R}`;
      let oe, ie = 0.28, he = 0.12, ue = 0.045;
      switch (F.category) {
        case ct.Concern:
          oe = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", ie = 0.28, he = 0.12, ue = 0.045;
          break;
        case ct.Improvement:
          oe = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", ie = 0.26, he = 0.11, ue = 0.045;
          break;
        case ct.NoJudgement:
          oe = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", ie = 0.26, he = 0.11, ue = 0.045;
          break;
        default:
          oe = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: K, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: oe, stopOpacity: ie }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: oe, stopOpacity: he }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: oe, stopOpacity: ue })
      ] }, K);
    })
  ] }) : null, [O]), de = G.useMemo(() => {
    if (!O.length) return null;
    const [F] = w.domain(), R = w(F), K = O.map((oe, ie) => {
      const { start: he, end: ue, category: H } = oe;
      if (he < 0 || ue >= U.length || he > ue)
        return null;
      const B = U[he], q = U[ue];
      let X = "";
      if (H === ct.Common) {
        const A = ie > 0 ? O[ie - 1] : null, Y = ie < O.length - 1 ? O[ie + 1] : null, Q = A ? U[A.end] : 0, ee = A ? w(M[A.end].y) : R, J = Y ? U[Y.start] : ae, se = Y ? w(M[Y.start].y) : R;
        X = `M ${Q} ${R}`, X += ` L ${Q} ${ee}`;
        for (let me = he; me <= ue; me++)
          X += ` L ${U[me]} ${w(M[me].y)}`;
        X += ` L ${J} ${se}`, X += ` L ${J} ${R} Z`;
      } else {
        const A = ie > 0 ? O[ie - 1] : null, Y = ie < O.length - 1 ? O[ie + 1] : null, Q = A && A.category !== ct.Common, ee = Y && Y.category !== ct.Common, J = w(M[he].y), se = w(M[ue].y);
        let me = B, ve = q;
        if (Q) {
          const ye = U[A.end], je = w(M[A.end].y), ge = M[he].y - M[A.end].y;
          f === qn.Slope && ge > 0 ? (X = `M ${ye} ${je} L ${B} ${J}`, me = ye) : (X = `M ${B} ${R} L ${B} ${J}`, me = B);
        } else
          X = `M ${B} ${R} L ${B} ${J}`;
        for (let ye = he + 1; ye <= ue; ye++)
          X += ` L ${U[ye]} ${w(M[ye].y)}`;
        if (X += ` L ${q} ${se}`, ee) {
          const ye = U[Y.start], je = w(M[Y.start].y), ge = M[Y.start].y - M[ue].y;
          (f === qn.Slope && ge <= 0 || f === qn.Extend) && (X += ` L ${ye} ${je}`, ve = ye);
        }
        if (X += ` L ${ve} ${R}`, X += ` L ${me} ${R} Z`, f === qn.Neutral && Q) {
          const ye = U[A.end], je = w(M[A.end].y), ge = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${ye} ${R} L ${ye} ${je} L ${B} ${J} L ${B} ${R} Z`,
              fill: `url(#${I.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${ie}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            ge,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: X,
                fill: `url(#${I.current}-grad-${ie})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${ie}`
            )
          ] }, `seq-group-${ie}`);
        }
      }
      return /* @__PURE__ */ r.jsx(
        "path",
        {
          d: X,
          fill: `url(#${I.current}-grad-${ie})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${ie}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: K });
  }, [O, U, ae, w, M, f]), fe = G.useMemo(() => {
    if (!c?.timeframe && M.length >= 2) {
      const F = M.map((ue) => ue.x instanceof Date ? ue.x : new Date(ue.x)), R = new Date(Math.min(...F.map((ue) => ue.getTime()))), K = new Date(Math.max(...F.map((ue) => ue.getTime()))), oe = Math.round((K.getTime() - R.getTime()) / 864e5) || 0;
      if (oe < 14)
        return `The chart shows a timeframe of ${oe + 1} days`;
      const ie = Math.round(oe / 7);
      return ie < 20 ? `The chart shows a timeframe of ${ie} weeks` : `The chart shows a timeframe of ${(K.getFullYear() - R.getFullYear()) * 12 + (K.getMonth() - R.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, M]), Z = (F) => {
    const R = F % 10, K = F % 100;
    return R === 1 && K !== 11 ? `${F}st` : R === 2 && K !== 12 ? `${F}nd` : R === 3 && K !== 13 ? `${F}rd` : `${F}th`;
  }, ne = (F) => `${Z(F.getDate())} ${F.toLocaleString("en-GB", { month: "long" })}, ${F.getFullYear()}`, pe = (F) => ({
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
      y: K
    }) => {
      const oe = i?.[F], ie = R instanceof Date ? R : new Date(R), he = ne(ie), ue = c?.measureUnit ? ` ${c.measureUnit}` : "", H = c?.measureName ? ` ${c.measureName}` : "";
      if (!oe)
        return `General summary is: ${fe ? fe + ". " : ""}Point ${F + 1}, ${he}, ${K}${ue}${H}`;
      const B = Fa(oe.classification?.variation) || "Variation", q = Pa(pe(oe)), X = q.length ? ` Rules: ${[...new Set(q.map((Y) => Zn[Y].narration))].join("; ")}.` : " No special cause rules.", A = [];
      return c?.measureName && A.push(`Measure: ${c.measureName}.`), c?.datasetContext && A.push(`${c.datasetContext}.`), c?.organisation && A.push(`Organisation: ${c.organisation}.`), c?.additionalNote && A.push(c.additionalNote), [
        "General summary is:",
        ...A,
        `Point ${F + 1} recorded on `,
        he + ",",
        `with a value of ${K} ${ue}${H}`,
        B + ".",
        X
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, fe]
  ), ce = G.useCallback(
    (F, R) => i?.[F] ? z({
      index: F,
      seriesId: "process",
      x: R.x instanceof Date ? R.x : new Date(R.x),
      y: R.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, z]
  );
  return /* @__PURE__ */ r.jsx(cm, { children: /* @__PURE__ */ r.jsxs(
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
            width: k.xScale.range()[1] + 56 + 16,
            height: k.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(gi, { type: "x" }),
              /* @__PURE__ */ r.jsx(gi, { type: "y" }),
              /* @__PURE__ */ r.jsx(Th, { axis: "y" }),
              Se,
              de,
              v.map((F, R) => {
                const K = M[F];
                if (!K) return null;
                const oe = L(K.x instanceof Date ? K.x : new Date(K.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: oe,
                    x2: oe,
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
              le?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                le.mean.map((F, R) => /* @__PURE__ */ r.jsx(
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
                le.mean.map((F, R) => {
                  if (R === le.mean.length - 1) return null;
                  const K = le.mean[R + 1];
                  if (!K || F.y === K.y) return null;
                  const ie = Math.max(4, K.x1 - F.x2 || 0) * 0.5, he = `M ${F.x2},${F.y} C ${F.x2 + ie},${F.y} ${K.x1 - ie},${K.y} ${K.x1},${K.y}`;
                  return /* @__PURE__ */ r.jsx(
                    "path",
                    {
                      className: "fdp-spc__cl fdp-spc__cl-join",
                      d: he,
                      fill: "none"
                    },
                    `mean-join-${R}`
                  );
                })
              ] }) : null,
              _ != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ r.jsx(r.Fragment, {}),
              le?.ucl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--ucl",
                  children: [
                    le.ucl.map((F, R) => /* @__PURE__ */ r.jsx(
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
                    le.ucl.map((F, R) => {
                      if (R === le.ucl.length - 1) return null;
                      const K = le.ucl[R + 1];
                      if (!K || F.y === K.y) return null;
                      const ie = Math.max(4, K.x1 - F.x2 || 0) * 0.5, he = `M ${F.x2},${F.y} C ${F.x2 + ie},${F.y} ${K.x1 - ie},${K.y} ${K.x1},${K.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join",
                          d: he,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `ucl-join-${R}`
                      );
                    })
                  ]
                }
              ) : null,
              le?.lcl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--lcl",
                  children: [
                    le.lcl.map((F, R) => /* @__PURE__ */ r.jsx(
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
                    le.lcl.map((F, R) => {
                      if (R === le.lcl.length - 1) return null;
                      const K = le.lcl[R + 1];
                      if (!K || F.y === K.y) return null;
                      const ie = Math.max(4, K.x1 - F.x2 || 0) * 0.5, he = `M ${F.x2},${F.y} C ${F.x2 + ie},${F.y} ${K.x1 - ie},${K.y} ${K.x1},${K.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join",
                          d: he,
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
                      g || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              o && le && le.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                le.onePos.map((F, R) => /* @__PURE__ */ r.jsx(
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
                le.oneNeg.map((F, R) => /* @__PURE__ */ r.jsx(
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
                le.twoPos.map((F, R) => /* @__PURE__ */ r.jsx(
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
                le.twoNeg.map((F, R) => /* @__PURE__ */ r.jsx(
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
              W && (P || S || y) && (() => {
                const F = W.detectedAt, R = W.firstFavourableCrossAt, K = M[F] ? L(
                  M[F].x instanceof Date ? M[F].x : new Date(M[F].x)
                ) : null, oe = M[F] ? w(M[F].y) : null, ie = R != null && M[R] ? L(
                  M[R].x instanceof Date ? M[R].x : new Date(M[R].x)
                ) : null, he = R != null && M[R] ? w(M[R].y) : null;
                return /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  y && K != null && oe != null && ie != null && he != null && /* @__PURE__ */ r.jsx(
                    "line",
                    {
                      x1: K,
                      y1: oe,
                      x2: ie,
                      y2: he,
                      stroke: "#888",
                      strokeDasharray: "4 4",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend bridge: start to first favourable-side point" })
                    }
                  ),
                  P && K != null && oe != null && /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: K,
                      cy: oe,
                      r: 6,
                      fill: "white",
                      stroke: "#555",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend start (run reached N)" })
                    }
                  ),
                  S && ie != null && he != null && /* @__PURE__ */ r.jsx("circle", { cx: ie, cy: he, r: 5, fill: "#555", children: /* @__PURE__ */ r.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ r.jsx(
                um,
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
              t && M.map((F, R) => {
                const K = L(F.x instanceof Date ? F.x : new Date(F.x)), oe = w(F.y), ie = te.has(R), he = V?.[R], ue = E[R], H = ue === ct.Improvement, B = ue === ct.Concern, q = ue === ct.NoJudgement, X = [
                  "fdp-spc__point",
                  ie && s ? "fdp-spc__point--ooc" : null,
                  l && B ? "fdp-spc__point--sc-concern" : null,
                  l && H ? "fdp-spc__point--sc-improvement" : null,
                  // Neutral special-cause (no-judgement) from category, when enabled
                  l && x && q ? "fdp-spc__point--sc-no-judgement" : null,
                  he?.assurance === ot.Pass ? "fdp-spc__point--assurance-pass" : null,
                  he?.assurance === ot.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), A = j?.focused?.index === R;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: K,
                    cy: oe,
                    r: 5,
                    className: X,
                    "data-variation": he?.variation,
                    "data-assurance": he?.assurance,
                    "aria-label": m,
                    ...A ? { "aria-describedby": `spc-tooltip-${R}` } : {}
                  },
                  R
                );
              }),
              D && $ && j?.focused && (() => {
                const F = j.focused, R = typeof F.index == "number" ? F.index : -1;
                if (R < 0 || !M[R]) return null;
                const K = L(
                  M[R].x instanceof Date ? M[R].x : new Date(M[R].x)
                ), oe = w(M[R].y), ie = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
                return /* @__PURE__ */ r.jsxs("g", { className: "fdp-spc__focus-indicator", "aria-hidden": "true", children: [
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: K,
                      cy: oe,
                      r: 7,
                      fill: "none",
                      stroke: ie,
                      strokeWidth: 3
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: K,
                      cy: oe,
                      r: 5,
                      fill: "#000",
                      stroke: ie,
                      strokeWidth: 1.5
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: K,
                      cy: oe,
                      r: 2.5,
                      fill: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
                      stroke: "#fff",
                      strokeWidth: 0.5
                    }
                  )
                ] });
              })(),
              u && l && V && M.map((F, R) => {
                const K = V[R];
                if (!K || !(K.concern || K.improvement)) return null;
                const oe = L(F.x instanceof Date ? F.x : new Date(F.x)), ie = w(F.y);
                let he = ie - 10;
                const ue = 12, H = w.range()[0] - 4;
                he < ue && (he = Math.min(ie + 16, H));
                const B = L.range()[1], q = Math.min(Math.max(oe, 0), B - 0);
                return /* @__PURE__ */ r.jsx(
                  "text",
                  {
                    x: q,
                    y: he,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${K.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: K.concern ? "!" : "★"
                  },
                  `icon-${R}`
                );
              }),
              b && /* @__PURE__ */ r.jsx(
                ug,
                {
                  width: L.range()[1],
                  height: w.range()[0]
                }
              ),
              !$ && /* @__PURE__ */ r.jsx(
                nc,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: ce,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (F) => ne(F),
                  enableNeutralNoJudgement: x,
                  showTrendGatingExplanation: C
                }
              )
            ] })
          }
        ),
        $ && /* @__PURE__ */ r.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ r.jsx(
          Gm,
          {
            engineRows: i,
            measureName: c?.measureName,
            measureUnit: g || c?.measureUnit,
            onSignalFocus: T
          }
        ) }),
        n && /* @__PURE__ */ r.jsx(
          dm,
          {
            format: (F) => z({ ...F, x: F.x instanceof Date ? F.x : new Date(F.x) })
          }
        )
      ]
    }
  ) });
}, ug = ({
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
}, dg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: gn,
  Direction: Me,
  MetricPolarity: at,
  SPCAssuranceIcon: Ea,
  SPCVariationIcon: Ra,
  VariationJudgement: St,
  VariationState: Ne,
  getVariationColour: po,
  getVariationTrend: Aa
}, Symbol.toStringTag, { value: "Module" })), Ov = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: ot,
  AssuranceResult: gn,
  BaselineSuggestionReason: $t,
  ChartType: xt,
  Direction: Me,
  Icons: dg,
  ImprovementDirection: Ae,
  MetricPolarity: at,
  PARITY_V26: oc,
  RULE_METADATA: Wl,
  SPCAssuranceIcon: Ea,
  SPCChart: lg,
  SPCTooltipOverlay: nc,
  SPCVariationIcon: Ra,
  SpcEmbeddedIconVariant: xn,
  SpcVisualCategory: pt,
  SpcWarningCategory: Qr,
  SpcWarningCode: ea,
  SpcWarningSeverity: Et,
  VARIATION_COLOR_TOKENS: Lt,
  VariationIcon: Le,
  VariationJudgement: St,
  VariationState: Ne,
  buildSpc: ec,
  buildSpcV26a: mo,
  buildSpcV26aWithVisuals: go,
  computeSpcVisualCategories: ho,
  extractRuleIds: Pa,
  getVariationColorHex: xm,
  getVariationColorToken: Yl,
  getVariationColour: po,
  getVariationTrend: Aa,
  normaliseSpcSettings: Ql,
  normaliseSpcSettingsV2: ac,
  ruleGlossary: Zn,
  variationLabel: Fa,
  withParityV26: ag
}, Symbol.toStringTag, { value: "Module" })), fg = "150ms", pg = "300ms", hg = "500ms", mg = "cubic-bezier(0.4, 0, 1, 1)", gg = "cubic-bezier(0, 0, 0.2, 1)", xg = "cubic-bezier(0.4, 0, 0.2, 1)", bg = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", vg = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", yg = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", wg = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", _g = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Sg = "1px", kg = "2px", Cg = "4px", Ng = "4px", jg = "4px", Tg = "2px", Dg = "1px", Ig = "0px", $g = "4px", Mg = "8px", Pg = "12px", ic = "#d8dde0", lc = "#4c6272", cc = "#d8dde0", uc = "#aeb7bd", dc = "#d5281b", fc = "#005eb8", pc = "#ffffff", hc = "#212b32", mc = "#007f3b", gc = "#330072", xc = "#7c2855", bc = "#d5281b", vc = "#ffeb3b", yc = "#fff9c4", wc = "#ffb81c", _c = "#ed8b00", Sc = "#00a499", kc = "#ae2573", Cc = "#4c6272", Nc = "#768692", jc = "#aeb7bd", Tc = "#d8dde0", Dc = "#f0f4f5", Fg = "#212b32", Lg = "#4c6272", Ag = "#ffffff", Rg = "#212b32", Eg = "#005eb8", Bg = "#7c2855", Hg = "#003087", Og = "#330072", Ug = "#ffeb3b", Wg = "#212b32", zg = "#d8dde0", Vg = "#ffffff33", Gg = "#d5281b", Yg = "#4c6272", qg = "#ffffff", Xg = "#007f3b", Kg = "#ffffff", Jg = "#006530", Zg = "#004021", Qg = "#004021", e0 = "#00000000", t0 = "#ffffff", n0 = "#005eb8", r0 = "#005eb8", a0 = "#d9e5f2", s0 = "#c7daf0", o0 = "#005eb8", i0 = "#ffffff", l0 = "#212b32", c0 = "#d9dde0", u0 = "#b3bcc2", d0 = "#b3bcc2", f0 = "#d5281b", p0 = "#aa2016", h0 = "#6a140e", m0 = "#6a140e", g0 = "#005eb8", x0 = "#004b93", b0 = "#002f5c", v0 = "#002f5c", y0 = "8px", w0 = "16px", _0 = "12px", S0 = "16px", k0 = "4px", C0 = "40px", N0 = "4px", j0 = "40px", T0 = "12px", D0 = "16px", I0 = "32px", $0 = "16px", M0 = "20px", P0 = "28px", F0 = "9px", L0 = "2px", A0 = "16px", R0 = "24px", E0 = "8px", B0 = "24px", H0 = "16px", O0 = "4px", U0 = "4px", W0 = "4px", z0 = "8px", V0 = "4px", G0 = "16px", Y0 = "#007f3b", q0 = "#006530", X0 = "#004021", K0 = "#d8dde0", J0 = "#ffffff", Z0 = "#768692", Q0 = "#00000000", ex = "#ffeb3b", tx = "#00000000", nx = "#ffffff", rx = "#d9e5f2", ax = "#c7daf0", sx = "#005eb8", ox = "#005eb8", Ic = "8px", $c = "16px", Mc = "12px", Pc = "16px", ix = "2px", lx = "4px", cx = "4px", ux = "600", dx = "#ffffff", fx = "#d8dde0", px = "#aeb7bd", hx = "#f0f4f5", mx = "#212b32", gx = "#212b32", xx = "#005eb8", Fc = "16px", Lc = "32px", Ac = "16px", bx = "1px", vx = "4px", yx = "none", wx = "0 2px 4px rgba(0, 0, 0, 0.1)", _x = "#ffffff", Sx = "#ffffff", kx = "#d8dde0", Cx = "#ffffff", Nx = "#4c6272", jx = "#ffeb3b", Tx = "#d5281b", Dx = "#aeb7bd", Ix = "#212b32", $x = "#4c6272", Mx = "#768692", Px = "#212b32", Fx = "#ffffff", Lx = "600", Ax = "#d5281b", Rx = "600", Ex = "#4c6272", Rc = "4px", Ec = "40px", Bc = "40px", Hc = "12px", Bx = "2px", Hx = "4px", Ox = "0px", Ux = "16px", Wx = "18px", zx = "24px", Vx = "32px", Gx = "34px", Yx = "32px", qx = "40px", Xx = "48px", Kx = "5.4ex", Jx = "7.2ex", Zx = "9ex", Qx = "10.8ex", eb = "20ex", tb = "38ex", nb = "56ex", rb = "44px", ab = "40px", sb = "1020px", ob = "100%", ib = "50%", lb = "33.333%", cb = "25%", ub = "20%", db = "320px", fb = "641px", pb = "1025px", hb = "1280px", mb = "960px", gb = "32px", xb = "16px", bb = "#d5281b", vb = "#d5281b", yb = "#ffffff", wb = "#007f3b", _b = "#007f3b", Sb = "#ffffff", kb = "#ffeb3b", Cb = "#ffeb3b", Nb = "#212b32", jb = "#005eb8", Tb = "#005eb8", Db = "#ffffff", Ib = "#d8dde0", $b = "#aeb7bd", Mb = "#768692", Pb = "0 4px 0 #004021", Fb = "0 4px 0 #005eb8", Lb = "0 4px 0 #6a140e", Ab = "0 4px 0 #ffeb3b", Rb = "none", Eb = "0 2px 4px rgba(0, 0, 0, 0.1)", Bb = "4px", Hb = "0px", Ob = "solid", Ub = "0 0 0 3px #ffeb3b", Wb = "0 0 0 3px #ffeb3b", zb = "none", Vb = "0 1px 3px rgba(0, 0, 0, 0.12)", Gb = "0 2px 6px rgba(0, 0, 0, 0.16)", Yb = "0 4px 12px rgba(0, 0, 0, 0.20)", Oc = "0", Uc = "4px", Wc = "8px", zc = "16px", Vc = "24px", Gc = "32px", Yc = "40px", qc = "48px", Xc = "56px", Kc = "64px", Ts = "0", Ds = "0", Is = "4px", $s = "4px", Ms = "8px", Ps = "8px", Fs = "8px", Ls = "16px", As = "16px", Rs = "24px", Es = "24px", Bs = "32px", Hs = "32px", Os = "40px", Us = "40px", Ws = "48px", zs = "48px", Vs = "56px", Gs = "56px", Ys = "64px", ta = "Frutiger W01", na = "Arial, Helvetica, sans-serif", ra = "sans-serif", aa = "400", sa = "600", oa = "400", ia = "12px", la = "14px", ca = "12pt", ua = "14px", da = "16px", fa = "12pt", pa = "16px", ha = "19px", ma = "13pt", ga = "19px", xa = "22px", ba = "15pt", va = "22px", ya = "26px", wa = "17pt", _a = "27px", Sa = "36px", ka = "20pt", Ca = "33px", Na = "48px", ja = "24pt", qs = "16px", Xs = "24px", Gt = {
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
}, Jt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Zt = {
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
}, qb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: fg,
  AnimationDurationNormal: pg,
  AnimationDurationSlow: hg,
  AnimationEasingBounce: bg,
  AnimationEasingEaseIn: mg,
  AnimationEasingEaseInOut: xg,
  AnimationEasingEaseOut: gg,
  BorderColorCard: cc,
  BorderColorCardHover: uc,
  BorderColorDefault: ic,
  BorderColorError: dc,
  BorderColorForm: lc,
  BorderRadiusLarge: Pg,
  BorderRadiusMedium: Mg,
  BorderRadiusNone: Ig,
  BorderRadiusSmall: $g,
  BorderWidthCardBottom: Ng,
  BorderWidthDefault: Sg,
  BorderWidthFormElement: kg,
  BorderWidthFormElementError: Cg,
  BorderWidthPanel: jg,
  BorderWidthTableCell: Dg,
  BorderWidthTableHeader: Tg,
  BreakpointDesktop: pb,
  BreakpointLargeDesktop: hb,
  BreakpointMobile: db,
  BreakpointTablet: fb,
  ButtonBorderRadius: lx,
  ButtonBorderWidth: ix,
  ButtonPrimaryBackgroundActive: X0,
  ButtonPrimaryBackgroundDefault: Y0,
  ButtonPrimaryBackgroundDisabled: K0,
  ButtonPrimaryBackgroundHover: q0,
  ButtonPrimaryBorderDefault: Q0,
  ButtonPrimaryBorderFocus: ex,
  ButtonPrimaryTextDefault: J0,
  ButtonPrimaryTextDisabled: Z0,
  ButtonSecondaryBackgroundActive: ax,
  ButtonSecondaryBackgroundDefault: tx,
  ButtonSecondaryBackgroundHover: rx,
  ButtonSecondaryBackgroundSolid: nx,
  ButtonSecondaryBorderDefault: ox,
  ButtonSecondaryTextDefault: sx,
  ButtonShadowSize: cx,
  ButtonSpacingPaddingHorizontalDesktop: Pc,
  ButtonSpacingPaddingHorizontalMobile: $c,
  ButtonSpacingPaddingVerticalDesktop: Mc,
  ButtonSpacingPaddingVerticalMobile: Ic,
  ButtonTypographyWeight: ux,
  CardBackgroundDefault: dx,
  CardBorderBottom: hx,
  CardBorderDefault: fx,
  CardBorderHover: px,
  CardBorderWidthBottom: vx,
  CardBorderWidthDefault: bx,
  CardShadowDefault: yx,
  CardShadowHover: wx,
  CardSpacingHeadingMargin: Ac,
  CardSpacingPaddingDesktop: Lc,
  CardSpacingPaddingMobile: Fc,
  CardTextDescription: gx,
  CardTextHeading: mx,
  CardTextLink: xx,
  ColorBorderDefault: zg,
  ColorBorderSecondary: Vg,
  ColorButtonLoginActive: b0,
  ColorButtonLoginBackground: g0,
  ColorButtonLoginHover: x0,
  ColorButtonLoginShadow: v0,
  ColorButtonPrimaryActive: Zg,
  ColorButtonPrimaryBackground: Xg,
  ColorButtonPrimaryHover: Jg,
  ColorButtonPrimaryShadow: Qg,
  ColorButtonPrimaryText: Kg,
  ColorButtonReverseActive: u0,
  ColorButtonReverseBackground: i0,
  ColorButtonReverseHover: c0,
  ColorButtonReverseShadow: d0,
  ColorButtonReverseText: l0,
  ColorButtonSecondaryActive: s0,
  ColorButtonSecondaryBackground: e0,
  ColorButtonSecondaryBackgroundSolid: t0,
  ColorButtonSecondaryBorder: n0,
  ColorButtonSecondaryHover: a0,
  ColorButtonSecondaryShadow: o0,
  ColorButtonSecondaryText: r0,
  ColorButtonWarningActive: h0,
  ColorButtonWarningBackground: f0,
  ColorButtonWarningHover: p0,
  ColorButtonWarningShadow: m0,
  ColorError: Gg,
  ColorFocusBackground: Ug,
  ColorFocusText: Wg,
  ColorFormBackground: qg,
  ColorFormBorder: Yg,
  ColorGrey1: Cc,
  ColorGrey2: Nc,
  ColorGrey3: jc,
  ColorGrey4: Tc,
  ColorGrey5: Dc,
  ColorLinkActive: Hg,
  ColorLinkDefault: Eg,
  ColorLinkHover: Bg,
  ColorLinkVisited: Og,
  ColorPrimaryBlack: hc,
  ColorPrimaryBlue: fc,
  ColorPrimaryDarkPink: xc,
  ColorPrimaryGreen: mc,
  ColorPrimaryPurple: gc,
  ColorPrimaryRed: bc,
  ColorPrimaryWhite: pc,
  ColorPrimaryYellow: vc,
  ColorSecondaryAquaGreen: Sc,
  ColorSecondaryOrange: _c,
  ColorSecondaryPaleYellow: yc,
  ColorSecondaryPink: kc,
  ColorSecondaryWarmYellow: wc,
  ColorTextPrimary: Fg,
  ColorTextPrint: Rg,
  ColorTextReverse: Ag,
  ColorTextSecondary: Lg,
  ComponentBlur: U0,
  ComponentBreadcrumbChevronMarginLeft: F0,
  ComponentBreadcrumbChevronMarginRight: L0,
  ComponentBreadcrumbPaddingTopDesktop: R0,
  ComponentBreadcrumbPaddingTopMobile: A0,
  ComponentButtonPaddingDesktopHorizontal: S0,
  ComponentButtonPaddingDesktopVertical: _0,
  ComponentButtonPaddingMobileHorizontal: w0,
  ComponentButtonPaddingMobileVertical: y0,
  ComponentButtonShadowSize: k0,
  ComponentCardHeadingMargin: $0,
  ComponentCardPaddingDesktop: I0,
  ComponentCardPaddingMobile: D0,
  ComponentDetails: z0,
  ComponentExpander: V0,
  ComponentFormCheckboxLabelPadding: T0,
  ComponentFormCheckboxSize: j0,
  ComponentFormInputMinHeight: C0,
  ComponentFormInputPadding: N0,
  ComponentLink: W0,
  ComponentPagination: G0,
  ComponentPanelPaddingDesktop: P0,
  ComponentPanelPaddingMobile: M0,
  ComponentSpread: O0,
  ComponentSummaryListCellPaddingHorizontal: B0,
  ComponentSummaryListCellPaddingVertical: E0,
  ComponentSummaryListRowMargin: H0,
  ElevationHigh: Yb,
  ElevationLow: Vb,
  ElevationMedium: Gb,
  ElevationNone: zb,
  FocusOutlineOffset: Hb,
  FocusOutlineStyle: Ob,
  FocusOutlineWidth: Bb,
  FocusShadowButton: Wb,
  FocusShadowInput: Ub,
  FontFamilyBase: ta,
  FontFamilyFallback: na,
  FontFamilyPrint: ra,
  FontLineHeightBase: Xs,
  FontSize14Mobile: ia,
  FontSize14Print: ca,
  FontSize14Tablet: la,
  FontSize16Mobile: ua,
  FontSize16Print: fa,
  FontSize16Tablet: da,
  FontSize19Mobile: pa,
  FontSize19Print: ma,
  FontSize19Tablet: ha,
  FontSize22Mobile: ga,
  FontSize22Print: ba,
  FontSize22Tablet: xa,
  FontSize26Mobile: va,
  FontSize26Print: wa,
  FontSize26Tablet: ya,
  FontSize36Mobile: _a,
  FontSize36Print: ka,
  FontSize36Tablet: Sa,
  FontSize48Mobile: Ca,
  FontSize48Print: ja,
  FontSize48Tablet: Na,
  FontSizeBase: qs,
  FontWeightBold: sa,
  FontWeightLight: oa,
  FontWeightNormal: aa,
  FormBorderRadius: Ox,
  FormBorderWidthDefault: Bx,
  FormBorderWidthError: Hx,
  FormErrorTextDefault: Ax,
  FormErrorTypographyWeight: Rx,
  FormHintTextDefault: Ex,
  FormInputBackgroundDefault: _x,
  FormInputBackgroundDisabled: kx,
  FormInputBackgroundError: Cx,
  FormInputBackgroundFocus: Sx,
  FormInputBorderDefault: Nx,
  FormInputBorderDisabled: Dx,
  FormInputBorderError: Tx,
  FormInputBorderFocus: jx,
  FormInputTextDefault: Ix,
  FormInputTextDisabled: Mx,
  FormInputTextPlaceholder: $x,
  FormLabelTextDefault: Px,
  FormLabelTextRequired: Fx,
  FormLabelTypographyWeight: Lx,
  FormSpacingCheckboxLabelPadding: Hc,
  FormSpacingCheckboxSize: Bc,
  FormSpacingInputMinHeight: Ec,
  FormSpacingInputPadding: Rc,
  GridGutter: gb,
  GridGutterHalf: xb,
  GridPageWidth: mb,
  HeadingsNhsukHeadingL: Yt,
  HeadingsNhsukHeadingM: qt,
  HeadingsNhsukHeadingS: Xt,
  HeadingsNhsukHeadingXl: Gt,
  HeadingsNhsukHeadingXs: Kt,
  LayoutColumnActions: ub,
  LayoutColumnFull: ob,
  LayoutColumnHalf: ib,
  LayoutColumnQuarter: cb,
  LayoutColumnThird: lb,
  LayoutContainerMaxWidth: sb,
  ParagraphsBody: Jt,
  ParagraphsBodyLarge: Zt,
  ParagraphsBodySmall: Qt,
  ParagraphsLedeText: en,
  ParagraphsLedeTextSmall: tn,
  ShadowButtonDefault: Pb,
  ShadowButtonFocus: Ab,
  ShadowButtonSecondary: Fb,
  ShadowButtonWarning: Lb,
  ShadowCardDefault: Rb,
  ShadowCardHover: Eb,
  SizeButtonMinHeightDesktop: ab,
  SizeButtonMinHeightMobile: rb,
  SizeFormControlLarge: Xx,
  SizeFormControlMedium: qx,
  SizeFormControlSmall: Yx,
  SizeFormInputWidth2xl: tb,
  SizeFormInputWidth3xl: nb,
  SizeFormInputWidthLg: Qx,
  SizeFormInputWidthMd: Zx,
  SizeFormInputWidthSm: Jx,
  SizeFormInputWidthXl: eb,
  SizeFormInputWidthXs: Kx,
  SizeIconExtraLarge: Vx,
  SizeIconLarge: zx,
  SizeIconMedium: Wx,
  SizeIconNhsDefault: Gx,
  SizeIconSmall: Ux,
  Spacing0: Oc,
  Spacing1: Uc,
  Spacing2: Wc,
  Spacing3: zc,
  Spacing4: Vc,
  Spacing5: Gc,
  Spacing6: Yc,
  Spacing7: qc,
  Spacing8: Xc,
  Spacing9: Kc,
  SpacingResponsive0Mobile: Ts,
  SpacingResponsive0Tablet: Ds,
  SpacingResponsive1Mobile: Is,
  SpacingResponsive1Tablet: $s,
  SpacingResponsive2Mobile: Ms,
  SpacingResponsive2Tablet: Ps,
  SpacingResponsive3Mobile: Fs,
  SpacingResponsive3Tablet: Ls,
  SpacingResponsive4Mobile: As,
  SpacingResponsive4Tablet: Rs,
  SpacingResponsive5Mobile: Es,
  SpacingResponsive5Tablet: Bs,
  SpacingResponsive6Mobile: Hs,
  SpacingResponsive6Tablet: Os,
  SpacingResponsive7Mobile: Us,
  SpacingResponsive7Tablet: Ws,
  SpacingResponsive8Mobile: zs,
  SpacingResponsive8Tablet: Vs,
  SpacingResponsive9Mobile: Gs,
  SpacingResponsive9Tablet: Ys,
  StateDisabledBackground: Ib,
  StateDisabledBorder: $b,
  StateDisabledText: Mb,
  StateErrorBackground: bb,
  StateErrorBorder: vb,
  StateErrorText: yb,
  StateInfoBackground: jb,
  StateInfoBorder: Tb,
  StateInfoText: Db,
  StateSuccessBackground: wb,
  StateSuccessBorder: _b,
  StateSuccessText: Sb,
  StateWarningBackground: kb,
  StateWarningBorder: Cb,
  StateWarningText: Nb,
  TransitionButtonDefault: vg,
  TransitionButtonShadow: yg,
  TransitionCardHover: _g,
  TransitionInputFocus: wg
}, Symbol.toStringTag, { value: "Module" })), Uv = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Wv = ({
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
), zv = ({
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
), Vv = ({
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
), Gv = ({
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
), Yv = ({
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
), qv = ({
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
), Xv = ({
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
), Kv = ({
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
), Jv = ({
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
), Zv = ({
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
), Qv = () => Pe(() => qb, []), ey = () => Pe(() => ({
  // Border colors
  BorderColorDefault: ic,
  BorderColorForm: lc,
  BorderColorCard: cc,
  BorderColorCardHover: uc,
  BorderColorError: dc,
  // Primary colors
  ColorPrimaryBlue: fc,
  ColorPrimaryWhite: pc,
  ColorPrimaryBlack: hc,
  ColorPrimaryGreen: mc,
  ColorPrimaryPurple: gc,
  ColorPrimaryDarkPink: xc,
  ColorPrimaryRed: bc,
  ColorPrimaryYellow: vc,
  // Secondary colors
  ColorSecondaryPaleYellow: yc,
  ColorSecondaryWarmYellow: wc,
  ColorSecondaryOrange: _c,
  ColorSecondaryAquaGreen: Sc,
  ColorSecondaryPink: kc,
  // Grey scale
  ColorGrey1: Cc,
  ColorGrey2: Nc,
  ColorGrey3: jc,
  ColorGrey4: Tc,
  ColorGrey5: Dc
}), []), ty = () => Pe(() => ({
  Spacing0: Oc,
  Spacing1: Uc,
  Spacing2: Wc,
  Spacing3: zc,
  Spacing4: Vc,
  Spacing5: Gc,
  Spacing6: Yc,
  Spacing7: qc,
  Spacing8: Xc,
  Spacing9: Kc
}), []), ny = () => Pe(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: ia,
    Size16: ua,
    Size19: pa,
    Size22: ga,
    Size26: va,
    Size36: _a,
    Size48: Ca
  },
  Tablet: {
    Size14: la,
    Size16: da,
    Size19: ha,
    Size22: xa,
    Size26: ya,
    Size36: Sa,
    Size48: Na
  },
  Print: {
    Size14: ca,
    Size16: fa,
    Size19: ma,
    Size22: ba,
    Size26: wa,
    Size36: ka,
    Size48: ja
  },
  Family: {
    Base: ta,
    Fallback: na,
    Print: ra
  },
  Weight: {
    Normal: aa,
    Bold: sa,
    Light: oa
  },
  Base: {
    Size: qs,
    LineHeight: Xs
  },
  // Backward compatibility - individual exports
  FontFamilyBase: ta,
  FontFamilyFallback: na,
  FontFamilyPrint: ra,
  FontWeightNormal: aa,
  FontWeightBold: sa,
  FontWeightLight: oa,
  FontSize14Mobile: ia,
  FontSize14Tablet: la,
  FontSize14Print: ca,
  FontSize16Mobile: ua,
  FontSize16Tablet: da,
  FontSize16Print: fa,
  FontSize19Mobile: pa,
  FontSize19Tablet: ha,
  FontSize19Print: ma,
  FontSize22Mobile: ga,
  FontSize22Tablet: xa,
  FontSize22Print: ba,
  FontSize26Mobile: va,
  FontSize26Tablet: ya,
  FontSize26Print: wa,
  FontSize36Mobile: _a,
  FontSize36Tablet: Sa,
  FontSize36Print: ka,
  FontSize48Mobile: Ca,
  FontSize48Tablet: Na,
  FontSize48Print: ja,
  FontSizeBase: qs,
  FontLineHeightBase: Xs
}), []), ry = () => Pe(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Ts,
    Size1: Is,
    Size2: Ms,
    Size3: Fs,
    Size4: As,
    Size5: Es,
    Size6: Hs,
    Size7: Us,
    Size8: zs,
    Size9: Gs
  },
  Tablet: {
    Size0: Ds,
    Size1: $s,
    Size2: Ps,
    Size3: Ls,
    Size4: Rs,
    Size5: Bs,
    Size6: Os,
    Size7: Ws,
    Size8: Vs,
    Size9: Ys
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Ts,
  SpacingResponsive0Tablet: Ds,
  SpacingResponsive1Mobile: Is,
  SpacingResponsive1Tablet: $s,
  SpacingResponsive2Mobile: Ms,
  SpacingResponsive2Tablet: Ps,
  SpacingResponsive3Mobile: Fs,
  SpacingResponsive3Tablet: Ls,
  SpacingResponsive4Mobile: As,
  SpacingResponsive4Tablet: Rs,
  SpacingResponsive5Mobile: Es,
  SpacingResponsive5Tablet: Bs,
  SpacingResponsive6Mobile: Hs,
  SpacingResponsive6Tablet: Os,
  SpacingResponsive7Mobile: Us,
  SpacingResponsive7Tablet: Ws,
  SpacingResponsive8Mobile: zs,
  SpacingResponsive8Tablet: Vs,
  SpacingResponsive9Mobile: Gs,
  SpacingResponsive9Tablet: Ys
}), []), ay = () => Pe(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Ic,
  ButtonSpacingPaddingHorizontalMobile: $c,
  ButtonSpacingPaddingVerticalDesktop: Mc,
  ButtonSpacingPaddingHorizontalDesktop: Pc,
  // Card spacing	
  CardSpacingPaddingMobile: Fc,
  CardSpacingPaddingDesktop: Lc,
  CardSpacingHeadingMargin: Ac,
  // Form spacing
  FormSpacingInputPadding: Rc,
  FormSpacingInputMinHeight: Ec,
  FormSpacingCheckboxSize: Bc,
  FormSpacingCheckboxLabelPadding: Hc
}), []), sy = () => Pe(() => ({
  xl: Gt,
  l: Yt,
  m: qt,
  s: Xt,
  xs: Kt
}), []), oy = () => Pe(() => ({
  body: Jt,
  bodyLarge: Zt,
  bodySmall: Qt,
  ledeText: en,
  ledeTextSmall: tn
}), []), iy = () => Pe(() => ({
  headings: {
    xl: Gt,
    l: Yt,
    m: qt,
    s: Xt,
    xs: Kt
  },
  paragraphs: {
    body: Jt,
    bodyLarge: Zt,
    bodySmall: Qt,
    ledeText: en,
    ledeTextSmall: tn
  },
  fonts: {
    family: {
      base: ta,
      fallback: na,
      print: ra
    },
    weight: {
      normal: aa,
      bold: sa,
      light: oa
    },
    sizes: {
      mobile: {
        size14: ia,
        size16: ua,
        size19: pa,
        size22: ga,
        size26: va,
        size36: _a,
        size48: Ca
      },
      tablet: {
        size14: la,
        size16: da,
        size19: ha,
        size22: xa,
        size26: ya,
        size36: Sa,
        size48: Na
      },
      print: {
        size14: ca,
        size16: fa,
        size19: ma,
        size22: ba,
        size26: wa,
        size36: ka,
        size48: ja
      }
    }
  }
}), []);
function ly(e = {}) {
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
const Jc = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, kt = {
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
function cy(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...Jc, ...e }, a = [];
  return n?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${kt.normal.eot}?#iefix") format("eot"),
       url("${t}${kt.normal.woff2}") format("woff2"),
       url("${t}${kt.normal.woff}") format("woff"),
       url("${t}${kt.normal.ttf}") format("truetype");
  src: url("${t}${kt.normal.eot}");
}`), n?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${kt.bold.eot}?#iefix") format("eot"),
       url("${t}${kt.bold.woff2}") format("woff2"),
       url("${t}${kt.bold.woff}") format("woff"),
       url("${t}${kt.bold.ttf}") format("truetype");
  src: url("${t}${kt.bold.eot}");
}`), a.join(`
`);
}
function uy(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...Jc, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${kt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${kt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${kt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${kt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const dy = '"Frutiger W01", Arial, Helvetica, sans-serif', fy = "Arial, Helvetica, sans-serif";
async function py() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Fi as Account,
  Zb as ActionLink,
  jv as AdaptiveDataGrid,
  fg as AnimationDurationFast,
  pg as AnimationDurationNormal,
  hg as AnimationDurationSlow,
  bg as AnimationEasingBounce,
  mg as AnimationEasingEaseIn,
  xg as AnimationEasingEaseInOut,
  gg as AnimationEasingEaseOut,
  gl as AppointmentCard,
  Lv as AreaSeriesPrimitive,
  Dp as AriaDataGrid,
  xs as AriaTabsDataGrid,
  jv as AriaTabsDataGridAdaptive,
  gi as Axis,
  us as BackLink,
  Rv as BandScalesProvider,
  Av as BarSeriesPrimitive,
  cc as BorderColorCard,
  uc as BorderColorCardHover,
  ic as BorderColorDefault,
  dc as BorderColorError,
  lc as BorderColorForm,
  Pg as BorderRadiusLarge,
  Mg as BorderRadiusMedium,
  Ig as BorderRadiusNone,
  $g as BorderRadiusSmall,
  Ng as BorderWidthCardBottom,
  Sg as BorderWidthDefault,
  kg as BorderWidthFormElement,
  Cg as BorderWidthFormElementError,
  jg as BorderWidthPanel,
  Dg as BorderWidthTableCell,
  Tg as BorderWidthTableHeader,
  pp as Breadcrumb,
  Cu as Breakpoint,
  pb as BreakpointDesktop,
  hb as BreakpointLargeDesktop,
  db as BreakpointMobile,
  fb as BreakpointTablet,
  bt as Button,
  lx as ButtonBorderRadius,
  ix as ButtonBorderWidth,
  X0 as ButtonPrimaryBackgroundActive,
  Y0 as ButtonPrimaryBackgroundDefault,
  K0 as ButtonPrimaryBackgroundDisabled,
  q0 as ButtonPrimaryBackgroundHover,
  Q0 as ButtonPrimaryBorderDefault,
  ex as ButtonPrimaryBorderFocus,
  J0 as ButtonPrimaryTextDefault,
  Z0 as ButtonPrimaryTextDisabled,
  ax as ButtonSecondaryBackgroundActive,
  tx as ButtonSecondaryBackgroundDefault,
  rx as ButtonSecondaryBackgroundHover,
  nx as ButtonSecondaryBackgroundSolid,
  ox as ButtonSecondaryBorderDefault,
  sx as ButtonSecondaryTextDefault,
  cx as ButtonShadowSize,
  Ai as ButtonSize,
  Pc as ButtonSpacingPaddingHorizontalDesktop,
  $c as ButtonSpacingPaddingHorizontalMobile,
  Mc as ButtonSpacingPaddingVerticalDesktop,
  Ic as ButtonSpacingPaddingVerticalMobile,
  ux as ButtonTypographyWeight,
  Li as ButtonVariant,
  dl as Card,
  dx as CardBackgroundDefault,
  hx as CardBorderBottom,
  fx as CardBorderDefault,
  px as CardBorderHover,
  vx as CardBorderWidthBottom,
  bx as CardBorderWidthDefault,
  mv as CardGroup,
  gv as CardGroupItem,
  yx as CardShadowDefault,
  wx as CardShadowHover,
  Ac as CardSpacingHeadingMargin,
  Lc as CardSpacingPaddingDesktop,
  Fc as CardSpacingPaddingMobile,
  gx as CardTextDescription,
  mx as CardTextHeading,
  xx as CardTextLink,
  xv as CareCard,
  Qb as CharacterCount,
  Bv as ChartEnhancer,
  Ev as ChartNoScript,
  Nh as ChartRoot,
  fu as Checkbox,
  gu as Checkboxes,
  zg as ColorBorderDefault,
  Vg as ColorBorderSecondary,
  b0 as ColorButtonLoginActive,
  g0 as ColorButtonLoginBackground,
  x0 as ColorButtonLoginHover,
  v0 as ColorButtonLoginShadow,
  Zg as ColorButtonPrimaryActive,
  Xg as ColorButtonPrimaryBackground,
  Jg as ColorButtonPrimaryHover,
  Qg as ColorButtonPrimaryShadow,
  Kg as ColorButtonPrimaryText,
  u0 as ColorButtonReverseActive,
  i0 as ColorButtonReverseBackground,
  c0 as ColorButtonReverseHover,
  d0 as ColorButtonReverseShadow,
  l0 as ColorButtonReverseText,
  s0 as ColorButtonSecondaryActive,
  e0 as ColorButtonSecondaryBackground,
  t0 as ColorButtonSecondaryBackgroundSolid,
  n0 as ColorButtonSecondaryBorder,
  a0 as ColorButtonSecondaryHover,
  o0 as ColorButtonSecondaryShadow,
  r0 as ColorButtonSecondaryText,
  h0 as ColorButtonWarningActive,
  f0 as ColorButtonWarningBackground,
  p0 as ColorButtonWarningHover,
  m0 as ColorButtonWarningShadow,
  Gg as ColorError,
  Ug as ColorFocusBackground,
  Wg as ColorFocusText,
  qg as ColorFormBackground,
  Yg as ColorFormBorder,
  Cc as ColorGrey1,
  Nc as ColorGrey2,
  jc as ColorGrey3,
  Tc as ColorGrey4,
  Dc as ColorGrey5,
  Hg as ColorLinkActive,
  Eg as ColorLinkDefault,
  Bg as ColorLinkHover,
  Og as ColorLinkVisited,
  hc as ColorPrimaryBlack,
  fc as ColorPrimaryBlue,
  xc as ColorPrimaryDarkPink,
  mc as ColorPrimaryGreen,
  gc as ColorPrimaryPurple,
  bc as ColorPrimaryRed,
  pc as ColorPrimaryWhite,
  vc as ColorPrimaryYellow,
  Sc as ColorSecondaryAquaGreen,
  _c as ColorSecondaryOrange,
  yc as ColorSecondaryPaleYellow,
  kc as ColorSecondaryPink,
  wc as ColorSecondaryWarmYellow,
  Fg as ColorTextPrimary,
  Rg as ColorTextPrint,
  Ag as ColorTextReverse,
  Lg as ColorTextSecondary,
  hr as Column,
  ju as ColumnAlign,
  U0 as ComponentBlur,
  F0 as ComponentBreadcrumbChevronMarginLeft,
  L0 as ComponentBreadcrumbChevronMarginRight,
  R0 as ComponentBreadcrumbPaddingTopDesktop,
  A0 as ComponentBreadcrumbPaddingTopMobile,
  S0 as ComponentButtonPaddingDesktopHorizontal,
  _0 as ComponentButtonPaddingDesktopVertical,
  w0 as ComponentButtonPaddingMobileHorizontal,
  y0 as ComponentButtonPaddingMobileVertical,
  k0 as ComponentButtonShadowSize,
  $0 as ComponentCardHeadingMargin,
  I0 as ComponentCardPaddingDesktop,
  D0 as ComponentCardPaddingMobile,
  z0 as ComponentDetails,
  V0 as ComponentExpander,
  T0 as ComponentFormCheckboxLabelPadding,
  j0 as ComponentFormCheckboxSize,
  C0 as ComponentFormInputMinHeight,
  N0 as ComponentFormInputPadding,
  W0 as ComponentLink,
  G0 as ComponentPagination,
  P0 as ComponentPanelPaddingDesktop,
  M0 as ComponentPanelPaddingMobile,
  O0 as ComponentSpread,
  B0 as ComponentSummaryListCellPaddingHorizontal,
  E0 as ComponentSummaryListCellPaddingVertical,
  H0 as ComponentSummaryListRowMargin,
  Hi as Container,
  hv as ContentsList,
  Jc as DEFAULT_FONT_CONFIG,
  kv as DashboardSummaryGrid,
  lv as DateInput,
  yp as Details,
  wp as DoDontList,
  Yb as ElevationHigh,
  Vb as ElevationLow,
  Gb as ElevationMedium,
  zb as ElevationNone,
  So as ErrorMessage,
  iv as ErrorSummary,
  _p as Expander,
  kt as FRUTIGER_FONT_FILES,
  Zs as Fieldset,
  Nu as Float,
  Hb as FocusOutlineOffset,
  Ob as FocusOutlineStyle,
  Bb as FocusOutlineWidth,
  Wb as FocusShadowButton,
  Ub as FocusShadowInput,
  ta as FontFamilyBase,
  na as FontFamilyFallback,
  ra as FontFamilyPrint,
  Xs as FontLineHeightBase,
  ia as FontSize14Mobile,
  ca as FontSize14Print,
  la as FontSize14Tablet,
  ua as FontSize16Mobile,
  fa as FontSize16Print,
  da as FontSize16Tablet,
  pa as FontSize19Mobile,
  ma as FontSize19Print,
  ha as FontSize19Tablet,
  ga as FontSize22Mobile,
  ba as FontSize22Print,
  xa as FontSize22Tablet,
  va as FontSize26Mobile,
  wa as FontSize26Print,
  ya as FontSize26Tablet,
  _a as FontSize36Mobile,
  ka as FontSize36Print,
  Sa as FontSize36Tablet,
  Ca as FontSize48Mobile,
  ja as FontSize48Print,
  Na as FontSize48Tablet,
  qs as FontSizeBase,
  sa as FontWeightBold,
  oa as FontWeightLight,
  aa as FontWeightNormal,
  Vi as Footer,
  Ox as FormBorderRadius,
  Bx as FormBorderWidthDefault,
  Hx as FormBorderWidthError,
  Ax as FormErrorTextDefault,
  Rx as FormErrorTypographyWeight,
  Ex as FormHintTextDefault,
  _x as FormInputBackgroundDefault,
  kx as FormInputBackgroundDisabled,
  Cx as FormInputBackgroundError,
  Sx as FormInputBackgroundFocus,
  Nx as FormInputBorderDefault,
  Dx as FormInputBorderDisabled,
  Tx as FormInputBorderError,
  jx as FormInputBorderFocus,
  Ix as FormInputTextDefault,
  Mx as FormInputTextDisabled,
  $x as FormInputTextPlaceholder,
  Px as FormLabelTextDefault,
  Fx as FormLabelTextRequired,
  Lx as FormLabelTypographyWeight,
  Hc as FormSpacingCheckboxLabelPadding,
  Bc as FormSpacingCheckboxSize,
  Ec as FormSpacingInputMinHeight,
  Rc as FormSpacingInputPadding,
  fv as GanttChart,
  ds as Grid,
  gb as GridGutter,
  xb as GridGutterHalf,
  Th as GridLines,
  mb as GridPageWidth,
  Dn as GridWidth,
  zi as Header,
  dv as HeaderSSR,
  Eu as HeaderSearch,
  zi as HeaderStatic,
  an as Heading,
  Yt as HeadingsNhsukHeadingL,
  qt as HeadingsNhsukHeadingM,
  Xt as HeadingsNhsukHeadingS,
  Gt as HeadingsNhsukHeadingXl,
  Kt as HeadingsNhsukHeadingXs,
  Hu as Hero,
  Ei as Hint,
  _v as Images,
  Ks as Input,
  bv as InsetText,
  Js as Label,
  ub as LayoutColumnActions,
  ob as LayoutColumnFull,
  ib as LayoutColumnHalf,
  cb as LayoutColumnQuarter,
  lb as LayoutColumnThird,
  sb as LayoutContainerMaxWidth,
  Fv as Legend,
  jh as LineScalesProvider,
  um as LineSeriesPrimitive,
  Iu as List,
  Oi as MainWrapper,
  xl as MedicationCard,
  pm as MetricCard,
  qv as NHSBodyText,
  Xv as NHSBodyTextLarge,
  Kv as NHSBodyTextSmall,
  Wv as NHSHeading1,
  zv as NHSHeading2,
  Vv as NHSHeading3,
  Gv as NHSHeading4,
  Yv as NHSHeading5,
  Jv as NHSLedeText,
  Zv as NHSLedeTextSmall,
  uv as NHSThemeProvider,
  fy as NHS_FALLBACK_FONT_STACK,
  dy as NHS_FONT_STACK,
  xh as NavigationSplitView,
  Dv as PageTemplate,
  pv as Pagination,
  hp as Panel,
  Jt as ParagraphsBody,
  Zt as ParagraphsBodyLarge,
  Qt as ParagraphsBodySmall,
  en as ParagraphsLedeText,
  tn as ParagraphsLedeTextSmall,
  ml as PatientCard,
  yh as ProductRoadmap,
  ev as Radios,
  tv as RadiosServer,
  jv as ResponsiveDataGrid,
  Tv as ResponsiveDataGridDemo,
  In as Row,
  Ov as SPC,
  lg as SPCChart,
  Hv as SPCMetricCard,
  Ar as Select,
  wu as SelectOption,
  Pb as ShadowButtonDefault,
  Ab as ShadowButtonFocus,
  Fb as ShadowButtonSecondary,
  Lb as ShadowButtonWarning,
  Rb as ShadowCardDefault,
  Eb as ShadowCardHover,
  ab as SizeButtonMinHeightDesktop,
  rb as SizeButtonMinHeightMobile,
  Xx as SizeFormControlLarge,
  qx as SizeFormControlMedium,
  Yx as SizeFormControlSmall,
  tb as SizeFormInputWidth2xl,
  nb as SizeFormInputWidth3xl,
  Qx as SizeFormInputWidthLg,
  Zx as SizeFormInputWidthMd,
  Jx as SizeFormInputWidthSm,
  eb as SizeFormInputWidthXl,
  Kx as SizeFormInputWidthXs,
  Vx as SizeIconExtraLarge,
  zx as SizeIconLarge,
  Wx as SizeIconMedium,
  Gx as SizeIconNhsDefault,
  Ux as SizeIconSmall,
  ul as SkipLink,
  Sv as SlotMatrix,
  Cv as SortStatusControl,
  Oc as Spacing0,
  Uc as Spacing1,
  Wc as Spacing2,
  zc as Spacing3,
  Vc as Spacing4,
  Gc as Spacing5,
  Yc as Spacing6,
  qc as Spacing7,
  Xc as Spacing8,
  Kc as Spacing9,
  Ts as SpacingResponsive0Mobile,
  Ds as SpacingResponsive0Tablet,
  Is as SpacingResponsive1Mobile,
  $s as SpacingResponsive1Tablet,
  Ms as SpacingResponsive2Mobile,
  Ps as SpacingResponsive2Tablet,
  Fs as SpacingResponsive3Mobile,
  Ls as SpacingResponsive3Tablet,
  As as SpacingResponsive4Mobile,
  Rs as SpacingResponsive4Tablet,
  Es as SpacingResponsive5Mobile,
  Bs as SpacingResponsive5Tablet,
  Hs as SpacingResponsive6Mobile,
  Os as SpacingResponsive6Tablet,
  Us as SpacingResponsive7Mobile,
  Ws as SpacingResponsive7Tablet,
  zs as SpacingResponsive8Mobile,
  Vs as SpacingResponsive8Tablet,
  Gs as SpacingResponsive9Mobile,
  Ys as SpacingResponsive9Tablet,
  nv as SpacingUtilities,
  Ib as StateDisabledBackground,
  $b as StateDisabledBorder,
  Mb as StateDisabledText,
  bb as StateErrorBackground,
  vb as StateErrorBorder,
  yb as StateErrorText,
  jb as StateInfoBackground,
  Tb as StateInfoBorder,
  Db as StateInfoText,
  wb as StateSuccessBackground,
  _b as StateSuccessBorder,
  Sb as StateSuccessText,
  kb as StateWarningBackground,
  Cb as StateWarningBorder,
  Nb as StateWarningText,
  Tp as SummaryCard,
  vv as SummaryList,
  ln as Table,
  yv as Tabs,
  Je as Tag,
  Sp as TaskList,
  bu as Textarea,
  Pv as TooltipOverlay,
  cm as TooltipProvider,
  Iv as TransactionalPageTemplate,
  vg as TransitionButtonDefault,
  yg as TransitionButtonShadow,
  _g as TransitionCardHover,
  wg as TransitionInputFocus,
  Mv as VisibilityProvider,
  bl as VitalsCard,
  ov as WIDTH_FRACTIONS,
  wv as WarningCallout,
  Sl as WidthContainer,
  av as WidthUtilities,
  py as checkFrutigerLoaded,
  co as createGenericTabsConfig,
  Nv as createTCHTabsConfig,
  cy as generateFrutigerFontFace,
  Uv as getResponsiveStyles,
  rv as getSpacingClass,
  sv as getWidthClass,
  uy as preloadFrutigerFonts,
  Hp as tchDataConfig,
  ey as useColors,
  ay as useComponentSpacing,
  sy as useNHSHeadings,
  oy as useNHSParagraphs,
  cv as useNHSTheme,
  iy as useNHSTypographySystem,
  ly as useNavigationSplitDrill,
  hh as useNavigationSplitUrlSync,
  Cl as useNhsFdpBreakpoints,
  ry as useResponsiveSpacing,
  $v as useResponsiveValue,
  ty as useSpacing,
  Hm as useSpc,
  Qv as useTokens,
  ny as useTypography
};
//# sourceMappingURL=index.esm.js.map
