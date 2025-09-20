import * as q from "react";
import Dt, { useState as Oe, useEffect as Ze, useCallback as ve, useRef as Ue, createElement as qi, useMemo as Le, useContext as ku, createContext as Cu, forwardRef as hr, useImperativeHandle as Xi, useReducer as Ki, memo as Nu, useId as ea } from "react";
import { createPortal as ju } from "react-dom";
function Tu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yr = { exports: {} }, wr = {};
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
function Du() {
  if (Ao) return wr;
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
  return wr.Fragment = t, wr.jsx = n, wr.jsxs = n, wr;
}
var _r = {};
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
function Iu() {
  return Eo || (Eo = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(B) {
      if (B == null) return null;
      if (typeof B == "function")
        return B.$$typeof === N ? null : B.displayName || B.name || null;
      if (typeof B == "string") return B;
      switch (B) {
        case g:
          return "Fragment";
        case x:
          return "Profiler";
        case p:
          return "StrictMode";
        case v:
          return "Suspense";
        case M:
          return "SuspenseList";
        case y:
          return "Activity";
      }
      if (typeof B == "object")
        switch (typeof B.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), B.$$typeof) {
          case b:
            return "Portal";
          case $:
            return (B.displayName || "Context") + ".Provider";
          case k:
            return (B._context.displayName || "Context") + ".Consumer";
          case T:
            var H = B.render;
            return B = B.displayName, B || (B = H.displayName || H.name || "", B = B !== "" ? "ForwardRef(" + B + ")" : "ForwardRef"), B;
          case D:
            return H = B.displayName || null, H !== null ? H : e(B.type) || "Memo";
          case P:
            H = B._payload, B = B._init;
            try {
              return e(B(H));
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
        var H = !1;
      } catch {
        H = !0;
      }
      if (H) {
        H = console;
        var O = H.error, ae = typeof Symbol == "function" && Symbol.toStringTag && B[Symbol.toStringTag] || B.constructor.name || "Object";
        return O.call(
          H,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ae
        ), t(B);
      }
    }
    function a(B) {
      if (B === g) return "<>";
      if (typeof B == "object" && B !== null && B.$$typeof === P)
        return "<...>";
      try {
        var H = e(B);
        return H ? "<" + H + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var B = w.A;
      return B === null ? null : B.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(B) {
      if (_.call(B, "key")) {
        var H = Object.getOwnPropertyDescriptor(B, "key").get;
        if (H && H.isReactWarning) return !1;
      }
      return B.key !== void 0;
    }
    function l(B, H) {
      function O() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          H
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(B, "key", {
        get: O,
        configurable: !0
      });
    }
    function u() {
      var B = e(this.type);
      return C[B] || (C[B] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), B = this.props.ref, B !== void 0 ? B : null;
    }
    function c(B, H, O, ae, W, ie, je, ce) {
      return O = ie.ref, B = {
        $$typeof: m,
        type: B,
        key: H,
        props: ie,
        _owner: W
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(B, "ref", {
        enumerable: !1,
        get: u
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
        value: je
      }), Object.defineProperty(B, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ce
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    }
    function d(B, H, O, ae, W, ie, je, ce) {
      var ue = H.children;
      if (ue !== void 0)
        if (ae)
          if (F(ue)) {
            for (ae = 0; ae < ue.length; ae++)
              f(ue[ae]);
            Object.freeze && Object.freeze(ue);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(ue);
      if (_.call(H, "key")) {
        ue = e(B);
        var J = Object.keys(H).filter(function(de) {
          return de !== "key";
        });
        ae = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", V[ue + ae] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), V[ue + ae] = !0);
      }
      if (ue = null, O !== void 0 && (n(O), ue = "" + O), i(H) && (n(H.key), ue = "" + H.key), "key" in H) {
        O = {};
        for (var ne in H)
          ne !== "key" && (O[ne] = H[ne]);
      } else O = H;
      return ue && l(
        O,
        typeof B == "function" ? B.displayName || B.name || "Unknown" : B
      ), c(
        B,
        ue,
        ie,
        W,
        o(),
        O,
        je,
        ce
      );
    }
    function f(B) {
      typeof B == "object" && B !== null && B.$$typeof === m && B._store && (B._store.validated = 1);
    }
    var h = Dt, m = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), $ = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), N = Symbol.for("react.client.reference"), w = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, F = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(B) {
        return B();
      }
    };
    var j, C = {}, I = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), te = S(a(s)), V = {};
    _r.Fragment = g, _r.jsx = function(B, H, O, ae, W) {
      var ie = 1e4 > w.recentlyCreatedOwnerStacks++;
      return d(
        B,
        H,
        O,
        !1,
        ae,
        W,
        ie ? Error("react-stack-top-frame") : I,
        ie ? S(a(B)) : te
      );
    }, _r.jsxs = function(B, H, O, ae, W) {
      var ie = 1e4 > w.recentlyCreatedOwnerStacks++;
      return d(
        B,
        H,
        O,
        !0,
        ae,
        W,
        ie ? Error("react-stack-top-frame") : I,
        ie ? S(a(B)) : te
      );
    };
  })()), _r;
}
var Ro;
function $u() {
  return Ro || (Ro = 1, process.env.NODE_ENV === "production" ? Yr.exports = Du() : Yr.exports = Iu()), Yr.exports;
}
var r = $u(), as = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Bo;
function Mu() {
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
var Pu = Mu();
const ye = /* @__PURE__ */ Tu(Pu), Cv = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: a,
  ...o
}) => {
  const s = ye(
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
      className: ye(
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
            className: ye(
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
function Lu(e) {
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
const { forwardRef: Fu, useCallback: kn, useState: ss } = q;
function Au(e, t) {
  const {
    children: n,
    variant: a = Zi.Primary,
    size: o = Qi.Default,
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...u
  } = e, [c, d] = ss(!1), [f, h] = ss(!1), [m, b] = ss(!1), g = Lu({
    variant: a,
    size: o,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in u ? u.href : void 0
  }), p = "disabled" in u ? u.disabled : u["aria-disabled"] === "true", x = {
    ...c && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...m && { "data-focused": "true" },
    ...p && { "data-disabled": "true" }
  }, k = kn(
    () => !p && d(!0),
    [p]
  ), $ = kn(() => d(!1), []), T = kn(
    () => !p && h(!0),
    [p]
  ), v = kn(() => {
    h(!1), d(!1);
  }, []), M = kn(() => b(!0), []), D = kn(() => b(!1), []), P = kn(
    (ue) => {
      ue.key === " " && ("href" in u || ue.currentTarget.getAttribute("role") === "button") && (ue.preventDefault(), ue.currentTarget.click());
    },
    [u]
  ), y = kn(
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
  if ("href" in u && u.href) {
    const {
      id: ue,
      style: J,
      title: ne,
      ["aria-label"]: de,
      ["aria-describedby"]: G,
      ["aria-labelledby"]: fe,
      tabIndex: oe,
      ...A
    } = u, R = u;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: R.href,
        target: R.target,
        rel: R.rel,
        className: g.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...x,
        ...l && { "data-prevent-double-click": "true" },
        ...A,
        onKeyDown: (Q) => {
          R.onKeyDown?.(Q), P(Q);
        },
        onClick: (Q) => {
          R.onClick?.(Q), y(Q);
        },
        onMouseDown: (Q) => {
          R.onMouseDown?.(Q), k();
        },
        onMouseUp: (Q) => {
          R.onMouseUp?.(Q), $();
        },
        onMouseEnter: (Q) => {
          R.onMouseEnter?.(Q), T();
        },
        onMouseLeave: (Q) => {
          R.onMouseLeave?.(Q), v();
        },
        onFocus: (Q) => {
          R.onFocus?.(Q), M();
        },
        onBlur: (Q) => {
          R.onBlur?.(Q), D();
        },
        "aria-disabled": R["aria-disabled"],
        ...R["aria-disabled"] === "true" && { tabIndex: -1 },
        id: ue,
        style: J,
        title: ne,
        "aria-label": de,
        "aria-describedby": G,
        "aria-labelledby": fe,
        tabIndex: oe,
        children: n
      }
    );
  }
  const {
    id: N,
    style: w,
    title: _,
    ["aria-label"]: F,
    ["aria-describedby"]: S,
    ["aria-labelledby"]: j,
    tabIndex: C,
    name: I,
    value: te,
    form: V,
    formAction: B,
    formEncType: H,
    formMethod: O,
    formNoValidate: ae,
    formTarget: W,
    autoFocus: ie,
    ...je
  } = u, ce = u;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: ce.type || "button",
      disabled: ce.disabled,
      className: g.classes,
      "data-module": "nhs-button",
      ...x,
      ...l && { "data-prevent-double-click": "true" },
      ...ce.disabled && { "aria-disabled": "true" },
      ...je,
      onKeyDown: (ue) => {
        ce.onKeyDown?.(ue), P(ue);
      },
      onClick: (ue) => {
        ce.onClick?.(ue), y(ue);
      },
      onMouseDown: (ue) => {
        ce.onMouseDown?.(ue), k();
      },
      onMouseUp: (ue) => {
        ce.onMouseUp?.(ue), $();
      },
      onMouseEnter: (ue) => {
        ce.onMouseEnter?.(ue), T();
      },
      onMouseLeave: (ue) => {
        ce.onMouseLeave?.(ue), v();
      },
      onFocus: (ue) => {
        ce.onFocus?.(ue), M();
      },
      onBlur: (ue) => {
        ce.onBlur?.(ue), D();
      },
      id: N,
      style: w,
      title: _,
      "aria-label": F,
      "aria-describedby": S,
      "aria-labelledby": j,
      tabIndex: C,
      name: I,
      value: te,
      form: V,
      formAction: B,
      formEncType: H,
      formMethod: O,
      formNoValidate: ae,
      formTarget: W,
      autoFocus: ie,
      children: n
    }
  );
}
const bt = Fu(Au);
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
  const l = ye(
    "nhsuk-back-link",
    a
  ), u = ye(
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
function Eu(e) {
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
  const d = Eu({ color: a, noBorder: o, closable: s, disabled: l, className: u }), f = (h) => {
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
}, Ru = ({
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
  attributes: m,
  ...b
}) => {
  const [g, p] = Oe(a), x = n !== void 0, k = x ? n : g;
  Ze(() => {
    x || p(a);
  }, [a, x]);
  const $ = (P) => {
    const y = P.target.checked;
    x || p(y), d?.(y, P);
  }, T = i ? `${e}-hint` : void 0, v = l ? `${e}-error` : void 0, M = [T, v].filter(Boolean).join(" ") || void 0, D = ye(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    u
  );
  return /* @__PURE__ */ r.jsx("div", { className: D, ...b, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
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
        onChange: $,
        onBlur: f,
        onFocus: h,
        "aria-describedby": M,
        ...m
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ r.jsx("div", { id: T, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: v, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
Ru.displayName = "Checkbox";
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
  inputMode: m,
  autoComplete: b,
  maxLength: g,
  minLength: p,
  pattern: x,
  step: k,
  min: $,
  max: T,
  showValueLabels: v = !1,
  showCurrentValue: M = !1,
  valueLabels: D,
  onChange: P,
  onBlur: y,
  onFocus: N,
  onKeyDown: w,
  ..._
}) => {
  const [F, S] = Oe(a || o || (n === "range" ? $ || "0" : ""));
  Ze(() => {
    a !== void 0 && S(a);
  }, [a]);
  const j = (W) => {
    const ie = W.target;
    S(ie.value), ("type" in W && W.nativeEvent || W.type === "keydown") && P?.(W);
  }, { classes: C, isRange: I } = el({ type: n, hasError: c, width: h, className: f }), te = a !== void 0, V = {
    id: e,
    name: t,
    type: n,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: u,
    "aria-describedby": d,
    inputMode: m,
    autoComplete: b,
    maxLength: g,
    minLength: p,
    pattern: x,
    step: k,
    min: $,
    max: T,
    onChange: j,
    onBlur: y,
    onFocus: N,
    onKeyDown: (W) => {
      if (I && /[0-9]/.test(W.key)) {
        const ie = (F?.toString() || "") + W.key;
        W.target.value = ie, j(W);
      }
      w?.(W);
    },
    ..._
  }, B = !te && o !== void 0 ? { defaultValue: o } : {}, H = te ? { value: a } : {}, O = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: C,
      ...H,
      ...B,
      "data-current-value": F,
      ...V
    }
  ), ae = I ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    v && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: D?.min || $ || "0" }),
      O(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: D?.max || T || "100" })
    ] }),
    !v && O(),
    M && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      D?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: F })
    ] }) })
  ] }) : null;
  return I ? ae : /* @__PURE__ */ r.jsx(
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
      required: u,
      "aria-describedby": d,
      inputMode: m,
      autoComplete: b,
      maxLength: g,
      minLength: p,
      pattern: x,
      step: k,
      min: $,
      max: T,
      onChange: P,
      onBlur: y,
      onFocus: N,
      onKeyDown: w,
      ..._
    }
  );
};
function Bu(e) {
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
  const i = Bu({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
};
function Hu(e) {
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
  const s = Hu({
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
function Ou(e) {
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
const Uu = ({
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
  ...m
}) => {
  const [b, g] = Oe(
    e.filter((P) => P.checked).map((P) => P.value)
  ), p = n || t, x = i ? `${p}-hint` : void 0, k = l ? `${p}-error` : void 0, $ = [x, k].filter(Boolean).join(" ") || void 0, T = (P, y) => {
    let N;
    y ? N = [...b, P] : N = b.filter((w) => w !== P), g(N), d?.(N);
  }, v = () => e.map((P, y) => {
    const N = `${p}-${y + 1}`, w = `${N}-conditional`, _ = b.includes(P.value), F = P.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: N,
          name: t,
          type: "checkbox",
          value: P.value,
          checked: _,
          disabled: F,
          onChange: (S) => T(P.value, S.target.checked),
          "aria-describedby": P.hint ? `${N}-hint` : $,
          ...P.conditional && {
            "aria-controls": w,
            "aria-expanded": _ ? "true" : "false"
          },
          ...P.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: N, children: P.text }),
      P.hint && /* @__PURE__ */ r.jsx("div", { id: `${N}-hint`, className: "nhsuk-checkboxes__hint", children: P.hint }),
      P.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: ye("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !_
          }),
          id: w,
          children: typeof P.conditional == "object" && P.conditional !== null && "label" in P.conditional && "id" in P.conditional && "name" in P.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            P.conditional.label && /* @__PURE__ */ r.jsx(fo, { htmlFor: P.conditional.id, children: P.conditional.label }),
            /* @__PURE__ */ r.jsx(uo, { ...P.conditional })
          ] }) : P.conditional
        }
      )
    ] }, P.value);
  }), { classes: M, formGroupClasses: D } = Ou({ small: c, className: u, hasError: !!l });
  return /* @__PURE__ */ r.jsx("div", { className: D, ...h, ...m, children: /* @__PURE__ */ r.jsxs(
    po,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: $,
      ...f,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: x, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: k, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: M, children: v() })
      ]
    }
  ) });
};
Uu.displayName = "Checkboxes";
function Wu(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const zu = ({
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
  maxLength: m,
  minLength: b,
  wrap: g = "soft",
  resize: p = "vertical",
  autoComplete: x,
  spellCheck: k,
  onChange: $,
  onBlur: T,
  onFocus: v,
  onKeyDown: M,
  ...D
}) => {
  const { classes: P, describedBy: y } = Wu({ hasError: u, resize: p, className: d, describedBy: c });
  return /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: P,
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
      maxLength: m,
      minLength: b,
      wrap: g,
      autoComplete: x,
      spellCheck: k,
      onChange: $,
      onBlur: T,
      onFocus: v,
      onKeyDown: M,
      ...D
    }
  );
};
function Vu(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const tl = ({ id: e, className: t, children: n, ...a }) => {
  const o = Vu({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: o.classes, id: o.id, ...a, children: n });
}, Nv = ({
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
  const m = s ?? i ?? "", [b, g] = Oe(m), [p, x] = Oe(0), [k, $] = Oe(!1), [T, v] = Oe(!1), M = ve((_) => n ? _.trim() === "" ? 0 : _.trim().split(/\s+/).length : _.length, [n]);
  Ze(() => {
    const _ = M(b), F = t || n || 0, S = F - _, j = Math.floor(F * (a / 100));
    x(S), $(_ > F), v(_ >= j || _ > F), d && d(_, S);
  }, [b, t, n, a, M, d]);
  const D = (_) => {
    const F = _.target.value;
    g(F), f && f(_);
  }, P = () => {
    const _ = t || n || 0, F = n ? "word" : "character", S = n ? "words" : "characters";
    if (!T)
      return `You can enter up to ${_} ${_ === 1 ? F : S}`;
    if (k) {
      const j = Math.abs(p);
      return `You have ${j} ${j === 1 ? F : S} too many`;
    } else
      return `You have ${p} ${p === 1 ? F : S} remaining`;
  }, y = ye(
    "nhsuk-character-count",
    u
  ), N = ye(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !T,
      "nhsuk-error-message": k
    },
    c?.classes
  ), w = ye(
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
          zu,
          {
            id: e,
            name: o,
            value: s !== void 0 ? b : void 0,
            defaultValue: s === void 0 ? i ?? b : void 0,
            rows: l,
            className: w,
            onChange: D,
            "aria-describedby": `${e}-info`,
            "aria-invalid": k || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ r.jsx(
          tl,
          {
            id: `${e}-info`,
            className: N,
            role: "status",
            "aria-live": "polite",
            children: P()
          }
        )
      ]
    }
  );
};
function Gu(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const Yu = ({
  value: e,
  disabled: t = !1,
  selected: n = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: o,
  ...s
}) => {
  const i = ye(
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
}, qu = ({
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
  options: m,
  children: b,
  onChange: g,
  onBlur: p,
  onFocus: x,
  ...k
}) => {
  const { classes: $ } = Gu({ hasError: l, className: c }), T = () => m ? m.map((M, D) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: M.value,
      disabled: M.disabled,
      "data-initial-selected": M.selected || void 0,
      children: M.text
    },
    `${M.value}-${D}`
  )) : null, v = o === void 0 && a === void 0 && m ? m.find((M) => M.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: $,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: o !== void 0 ? o : v,
      disabled: s,
      required: i,
      "aria-describedby": u,
      multiple: d,
      size: f,
      autoComplete: h,
      onChange: g,
      onBlur: p,
      onFocus: x,
      ...k,
      children: b || T()
    }
  );
}, ta = qu;
ta.Option = Yu;
function Xu(e) {
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
    ...m
  } = e, {
    name: b,
    hasError: g = !1,
    describedBy: p,
    className: x,
    size: k = "normal",
    inline: $ = !1,
    options: T,
    ...v
  } = m, { classes: M, describedBy: D } = Xu({ hasError: g, size: k, inline: $, className: x, describedBy: p });
  return /* @__PURE__ */ r.jsx(po, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: M,
      ...v,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: T.map((P, y) => {
        const N = `${b}-${y}`, w = P.conditional ? `${N}-conditional` : void 0, _ = n === P.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: N,
              name: b,
              type: "radio",
              value: P.value,
              disabled: P.disabled,
              ...t === "client" ? {
                checked: _,
                onChange: o,
                onBlur: s,
                onFocus: i,
                onKeyDown: l,
                ref: (F) => {
                  F && u && (u.current[y] = F);
                }
              } : {
                defaultChecked: _,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": D
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: N, children: P.text }),
          P.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: P.hint }),
          P.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: ye("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !_
              }),
              id: w,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof P.conditional == "object" && P.conditional !== null && "label" in P.conditional && "id" in P.conditional && "name" in P.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                P.conditional.label && /* @__PURE__ */ r.jsx(
                  fo,
                  {
                    htmlFor: P.conditional.id,
                    children: P.conditional.label
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  c,
                  {
                    ...P.conditional
                  }
                )
              ] }) : P.conditional
            }
          )
        ] }, P.value);
      })
    }
  ) });
}
const jv = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s }) => {
  const [i, l] = Oe(e || t || ""), u = Ue([]), c = Ue(i), d = (m) => {
    const b = m.target.value;
    b !== c.current && (c.current = b, l(b), n?.(m));
  }, f = (m) => {
    o?.(m);
  }, h = ve((m) => {
    const { key: b } = m;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(b)) return;
    m.preventDefault();
    const g = u.current.filter(($) => $ && !$.disabled), p = g.indexOf(m.currentTarget);
    if (p === -1) return;
    let x = p;
    ["ArrowDown", "ArrowRight"].includes(b) ? x = (p + 1) % g.length : ["ArrowUp", "ArrowLeft"].includes(b) && (x = (p - 1 + g.length) % g.length);
    const k = g[x];
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
function Ku(e) {
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
    width: m = "full",
    inputMode: b,
    autoComplete: g,
    maxLength: p,
    minLength: x,
    pattern: k,
    step: $,
    min: T,
    max: v,
    showValueLabels: M = !1,
    showCurrentValue: D = !1,
    valueLabels: P,
    // Strip interactive handlers in server variant
    onChange: y,
    onBlur: N,
    onFocus: w,
    onKeyDown: _,
    ...F
  } = e, { classes: S, isRange: j } = el({
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
    readOnly: u,
    required: c,
    "aria-describedby": f,
    inputMode: b,
    autoComplete: g,
    maxLength: p,
    minLength: x,
    pattern: k,
    step: $,
    min: T,
    max: v,
    ...F
  };
  if (j) {
    const I = o ?? s ?? (typeof T < "u" ? String(T) : "0"), te = /* @__PURE__ */ r.jsx(
      "input",
      {
        className: S,
        ...o !== void 0 ? { value: o } : {},
        ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
        "data-current-value": I,
        ...C
      }
    );
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      M ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: P?.min || T || "0" }),
        te,
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: P?.max || v || "100" })
      ] }) : te,
      D && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        P?.current || "Current value:",
        " ",
        /* @__PURE__ */ r.jsx("strong", { children: I })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ r.jsx(
    "input",
    {
      className: S,
      ...o !== void 0 ? { value: o } : {},
      ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
      ...C
    }
  );
}
const Tv = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return nl(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: Ku
    }
  );
};
var Bn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(Bn || {}), Ju = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(Ju || {}), Zu = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(Zu || {}), Qu = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Qu || {});
const rl = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: a,
  style: o,
  ...s
}) => {
  const i = ye(
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
  const o = ye("nhsuk-grid-row", t);
  return /* @__PURE__ */ r.jsx("div", { className: o, style: n, ...a, children: e });
}, Dr = ({
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
  const f = ye(
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
  const s = Dt.Children.toArray(e)[0], i = Dt.isValidElement(s) && (s.type === Hn || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ r.jsx(rl, { className: t, style: n, ...a, children: i ? e : /* @__PURE__ */ r.jsx(Hn, { children: e }) });
}, ed = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const u = i || (t === "number" ? "ol" : "ul"), c = ye(
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
}, td = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = ye("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, nd = ed;
nd.Item = td;
const Dv = ({
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
}, Iv = {
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
}, $v = ({
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
}, Mv = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Pv = [
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
function rd(e) {
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
function ad(e) {
  const t = e.level ?? rd(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const mn = ({ level: e, className: t, text: n, html: a, children: o, size: s, marginBottom: i, ...l }) => {
  const u = ad({ level: e, size: s, className: t, marginBottom: i }), c = o || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return qi(u.tag, { className: u.classes, style: u.style, ...l }, c);
};
function sd(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const Ho = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...o }) => {
  const s = sd({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, Lv = ({
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
  const c = ye(
    "nhsuk-error-summary",
    s
  ), d = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, h = (m) => {
    const b = m.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: m.html } }) : m.text;
    return m.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: m.href,
        ...m.attributes,
        children: b
      }
    ) : b;
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
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((m, b) => /* @__PURE__ */ r.jsx("li", { children: h(m) }, b)) })
        ] })
      ]
    }
  );
}, Fv = ({
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
  const [d, f] = Oe(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [h, m] = Oe({}), b = (j) => j % 4 === 0 && j % 100 !== 0 || j % 400 === 0, g = (j, C) => {
    const I = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return j === 2 && b(C) ? 29 : I[j - 1];
  }, p = (j, C, I) => {
    if (!j) return;
    if (!/^\d+$/.test(j)) return "Day must be a number";
    const te = parseInt(j, 10);
    if (te < 1 || te > 31) return "Day must be between 1 and 31";
    if (C && I) {
      const V = parseInt(C, 10), B = parseInt(I, 10);
      if (!isNaN(V) && !isNaN(B) && V >= 1 && V <= 12) {
        const H = g(V, B);
        if (te > H)
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
          ][V - 1]} ${B} only has ${H} days`;
      }
    }
  }, x = (j) => {
    if (!j) return;
    if (!/^\d+$/.test(j)) return "Month must be a number";
    const C = parseInt(j, 10);
    if (C < 1 || C > 12) return "Month must be between 1 and 12";
  }, k = (j) => {
    if (!j) return;
    if (!/^\d+$/.test(j)) return "Year must be a number";
    const C = parseInt(j, 10), I = (/* @__PURE__ */ new Date()).getFullYear();
    if (C < 1900 || C > I + 10)
      return `Year must be between 1900 and ${I + 10}`;
  }, $ = (j, C, I) => {
    if (!j || !C || !I) return;
    const te = parseInt(j, 10), V = parseInt(C, 10), B = parseInt(I, 10);
    if (isNaN(te) || isNaN(V) || isNaN(B) || V < 1 || V > 12 || B < 1900) return;
    const H = g(V, B);
    te < 1 || te > H;
  }, T = ve((j, C) => {
    const I = {
      ...d,
      [j]: C
    };
    f(I), u && u(I);
  }, [d, u]), v = ve((j) => {
    const C = d[j];
    let I;
    if (j === "day")
      I = p(C, d.month, d.year);
    else if (j === "month") {
      if (I = x(C), !I && d.day) {
        const te = p(d.day, C, d.year);
        m((V) => ({
          ...V,
          day: te
        }));
      }
    } else if (j === "year" && (I = k(C), !I && d.day && d.month)) {
      const te = p(d.day, d.month, C);
      m((V) => ({
        ...V,
        day: te
      }));
    }
    if (m((te) => ({
      ...te,
      [j]: I
    })), d.day && d.month && d.year) {
      const te = $(
        j === "day" ? C : d.day,
        j === "month" ? C : d.month,
        j === "year" ? C : d.year
      );
      te && m((V) => ({
        ...V,
        day: te
      }));
    }
  }, [d, p, x, k, $]), M = Le(() => [
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
  ], []), D = n || M;
  let P = s?.describedBy || "";
  const y = i ? `${e}-hint` : "", N = l ? `${e}-error` : "";
  y && (P = P ? `${P} ${y}` : y), N && (P = P ? `${P} ${N}` : N);
  const w = Object.values(h).some((j) => j), _ = ye(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || w
    }
  ), F = ye(
    "nhsuk-date-input",
    t
  ), S = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(
      tl,
      {
        id: y,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ r.jsx(
      Ho,
      {
        id: N,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(h).map(
      ([j, C]) => C ? /* @__PURE__ */ r.jsxs(
        Ho,
        {
          id: `${e}-${j}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            C
          ]
        },
        `${j}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx("div", { className: F, id: e, "data-testid": "date-input", ...c, children: D.map((j) => {
      const C = j.id || `${e}-${j.name}`, I = a ? `${a}[${j.name}]` : j.name, te = j.label || j.name.charAt(0).toUpperCase() + j.name.slice(1), V = h[j.name], B = d[j.name] || "";
      let H = P;
      if (V) {
        const O = `${e}-${j.name}-error`;
        H = H ? `${H} ${O}` : O;
      }
      return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ r.jsx(
          fo,
          {
            htmlFor: C,
            className: "nhsuk-date-input__label",
            children: te
          }
        ),
        /* @__PURE__ */ r.jsx(
          uo,
          {
            id: C,
            name: I,
            value: B,
            className: ye("nhsuk-date-input__input", j.classes, {
              "nhsuk-input--error": V
            }),
            inputMode: j.inputmode,
            autoComplete: j.autocomplete,
            pattern: j.pattern,
            "aria-describedby": H || void 0,
            hasError: !!V,
            onChange: (O) => T(j.name, O.target.value),
            onBlur: () => v(j.name)
          }
        )
      ] }, j.name);
    }) })
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: _, children: s ? /* @__PURE__ */ r.jsx(
    po,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: P || void 0,
      children: S()
    }
  ) : S() });
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
}, ol = Cu(sl), od = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...sl, ...t };
  return /* @__PURE__ */ r.jsx(ol.Provider, { value: n, children: e });
}, Av = () => {
  const e = ku(ol);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function id() {
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
function ld() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = id(), document.head.appendChild(e);
}
const Ev = ({ children: e, theme: t }) => (Ze(() => {
  ld();
}, []), /* @__PURE__ */ r.jsx(od, { theme: t, children: e }));
function cd(e, {
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
    service: m = {},
    serviceName: b,
    organisation: g,
    search: p,
    account: x,
    navigation: k,
    containerClasses: $,
    variant: T = "default",
    attributes: v = {},
    maxVisibleItems: M,
    // deprecated (ignored)
    responsiveNavigation: D = !0,
    ...P
  } = e, y = {
    ...m,
    text: m?.text ?? b
  };
  "maxVisibleItems" in P && delete P.maxVisibleItems;
  const N = y.href && !h.href || y.href && y.href === h.href, w = N ? y.href : h.href, _ = ye(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": T === "organisation" || g,
      "nhsuk-header--white": T === "white"
    },
    f
  ), F = ye(
    "nhsuk-header__container",
    $
  ), S = ye(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": k?.white,
      "nhsuk-header__navigation--justified": k?.justified
    },
    k?.className
  ), j = () => /* @__PURE__ */ r.jsxs(
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
  ) : j(), I = () => g ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      g.name,
      g.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        g.split
      ] })
    ] }),
    g.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: g.descriptor })
  ] }) : null, te = (H, O) => H ? O ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: O, children: H }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: H }) : null, V = (H) => H.active || H.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: H.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: H.html } }) : H.text }) : H.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: H.html } }) : H.text, B = () => /* @__PURE__ */ r.jsx(
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
      ...v,
      ...P,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: F, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            w ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: w, children: [
              C(),
              I(),
              N && te(y.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              C(),
              I(),
              N && te(y.text)
            ] }),
            y.text && !N && te(y.text, y.href)
          ] }),
          d ?? null,
          /* @__PURE__ */ r.jsx(
            Ji,
            {
              ...x,
              variant: T === "white" ? "white" : "default"
            }
          )
        ] }),
        k && k.items && k.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: S,
            "aria-label": k.ariaLabel || "Menu",
            children: /* @__PURE__ */ r.jsx(
              "div",
              {
                className: ye(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": n && t === "client",
                    "nhsuk-header__navigation-container--ssr": !n
                  },
                  $
                ),
                ref: u,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: c,
                    children: [
                      (k?.items || []).map((H, O) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: ye(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": H.active || H.current,
                              "nhsuk-header__navigation-item--hidden": o && s !== void 0 && O >= (s ?? 0)
                            },
                            H.className
                          ),
                          ...H.attributes || {},
                          children: /* @__PURE__ */ r.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: H.href,
                              ...H.active || H.current ? { "aria-current": H.current ? "page" : "true" } : {},
                              children: V(H)
                            }
                          )
                        },
                        O
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
                            B()
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
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: k.items.slice(s ?? 0).map((H, O) => /* @__PURE__ */ r.jsx(
              "li",
              {
                className: ye("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": H.active || H.current
                }),
                children: /* @__PURE__ */ r.jsx(
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
              `overflow-${(s ?? 0) + O}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const ud = ({
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
  results: m = [],
  formAttributes: b = {},
  inputAttributes: g = {},
  buttonAttributes: p = {},
  preventDefaultSubmit: x = !1,
  debounceMs: k = 300,
  minQueryLength: $ = 1
}) => {
  const [T, v] = Oe(""), [M, D] = Oe(!1), P = Ue(void 0), y = Ue(null), N = Ue(null), w = e === "controlled" && o !== void 0, _ = w ? o : T, F = ve(
    (ae) => {
      P.current && clearTimeout(P.current), P.current = setTimeout(() => {
        d.onChange && ae.length >= $ && d.onChange(ae);
      }, k);
    },
    [d.onChange, k, $]
  ), S = ve(
    (ae) => {
      const W = ae.target.value;
      w || v(W), e !== "form" && F(W);
    },
    [w, e, F]
  ), j = ve(
    (ae) => {
      const W = _.trim(), ie = {
        query: W,
        timestamp: Date.now(),
        formData: new FormData(ae.currentTarget)
      };
      e === "controlled" || e === "hybrid" && x ? (ae.preventDefault(), d.onSearch && W.length >= $ && d.onSearch(ie)) : e === "hybrid" && d.onSearch && W.length >= $ && d.onSearch(ie);
    },
    [
      e,
      _,
      d.onSearch,
      x,
      $
    ]
  ), C = ve(() => {
    D(!0), d.onFocus?.();
  }, [d.onFocus]), I = ve(() => {
    D(!1), d.onBlur?.();
  }, [d.onBlur]), te = ve(() => {
    w || v(""), d.onClear?.(), N.current?.focus();
  }, [w, d.onClear]);
  Ze(() => () => {
    P.current && clearTimeout(P.current);
  }, []);
  const V = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: ye("nhsuk-icon nhsuk-icon__search", {
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
  ), H = () => !_ || e === "form" ? null : /* @__PURE__ */ r.jsx(
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
  ), O = () => !h || !m.length || !M ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: m.map((ae) => /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsuk-header__search-result",
      role: "option",
      children: ae.href ? /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: ae.href,
          className: "nhsuk-header__search-result-link",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: ae.title }),
            ae.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: ae.description })
          ]
        }
      ) : /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "nhsuk-header__search-result-button",
          onClick: () => d.onSearch?.({
            query: ae.title,
            timestamp: Date.now()
          }),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: ae.title }),
            ae.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: ae.description })
          ]
        }
      )
    },
    ae.id
  )) });
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ye("nhsuk-header__search", u, {
        "nhsuk-header__search--controlled": e === "controlled",
        "nhsuk-header__search--hybrid": e === "hybrid",
        "nhsuk-header__search--loading": f,
        "nhsuk-header__search--focused": M,
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
            onSubmit: j,
            ...b,
            children: [
              /* @__PURE__ */ r.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: i }),
              /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    ref: N,
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: e !== "controlled" ? a : void 0,
                    type: "search",
                    placeholder: s,
                    autoComplete: "off",
                    value: _,
                    onChange: S,
                    onFocus: C,
                    onBlur: I,
                    disabled: c || f,
                    ...h && m.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                    ...g
                  }
                ),
                H()
              ] }),
              /* @__PURE__ */ r.jsxs(
                "button",
                {
                  className: "nhsuk-header__search-submit",
                  type: "submit",
                  disabled: c || f || e !== "form" && _.length < $,
                  ...p,
                  children: [
                    f ? B() : V(),
                    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
                  ]
                }
              )
            ]
          }
        ),
        O()
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
  const [f, h] = Oe(!1), [m, b] = Oe(!1), [g, p] = Oe(i?.items?.length || 0), [x, k] = Oe(!1), [$, T] = Oe(!1), v = Ue(null), M = Ue(null), D = Ue(!1);
  Ze(() => {
    typeof window > "u" || T(!0);
  }, []), Ze(() => {
    if (typeof document > "u") return;
    const w = (_) => {
      _.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
  }, [f]);
  const P = Ue(null), y = ve(() => {
    if (!$ || !i?.items || i.items.length === 0 || D.current) return;
    const w = v.current, _ = M.current;
    if (!w || !_) return;
    D.current = !0, w.classList.add("nhsuk-header__navigation-container--measuring");
    const F = w.clientWidth, S = Array.from(_.children);
    if (!S.length) {
      w.classList.remove("nhsuk-header__navigation-container--measuring"), D.current = !1;
      return;
    }
    if (P.current == null) {
      const W = document.createElement("button");
      W.type = "button", W.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", W.style.position = "absolute", W.style.visibility = "hidden", W.style.pointerEvents = "none", W.innerHTML = "<span>More</span>", w.appendChild(W), P.current = W.getBoundingClientRect().width || 104, w.removeChild(W);
    }
    const j = P.current + 16;
    let C = 0, I = 0;
    const te = window.getComputedStyle(w), V = parseFloat(te.paddingLeft) || 0, B = parseFloat(te.paddingRight) || 0;
    let H = V + B;
    for (const W of S) {
      const ie = W.getBoundingClientRect().width;
      if (C + ie + j + H > F) break;
      C += ie, I += 1;
    }
    const O = I < i.items.length, ae = O ? I : i.items.length;
    b((W) => W === O ? W : O), p((W) => W === ae ? W : ae), w.classList.remove("nhsuk-header__navigation-container--measuring"), D.current = !1;
  }, [$, i?.items]);
  Ze(() => {
    if (!$) return;
    const w = v.current;
    if (!w) return;
    let _ = null;
    const F = () => {
      _ == null && (_ = window.requestAnimationFrame(() => {
        _ = null, y();
      }));
    };
    y();
    const S = new ResizeObserver(() => F());
    return S.observe(w), M.current && S.observe(M.current), () => {
      _ != null && window.cancelAnimationFrame(_), S.disconnect();
    };
  }, [$, y]), Ze(() => {
    $ && y();
  }, [i?.items?.length, $, y]);
  const N = (w) => {
    w && (w.preventDefault(), w.stopPropagation());
    const _ = !f;
    h(_), k(_);
  };
  return cd(
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
      isClient: $,
      menuOpen: f,
      showMoreButton: m,
      visibleItems: g,
      dropdownVisible: x,
      toggleMenu: N,
      navContainerRef: v,
      navListRef: M,
      // Provide interactive search node for client build only
      searchNode: o ? /* @__PURE__ */ r.jsx(ud, { ...o }) : null
    }
  );
};
function dd(e, { variant: t, isClient: n }) {
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
    maxVisibleItems: m,
    // deprecated (ignored)
    responsiveNavigation: b = !0,
    ...g
  } = e;
  "maxVisibleItems" in g && delete g.maxVisibleItems;
  const p = {
    ...s,
    text: s?.text ?? i
  }, x = p.href && !o.href || p.href && p.href === o.href, k = x ? p.href : o.href, $ = ye(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    a
  ), T = ye("nhsuk-header__container", d), v = ye(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": c?.white,
      "nhsuk-header__navigation--justified": c?.justified
    },
    c?.className
  ), M = () => /* @__PURE__ */ r.jsxs(
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
  ), D = () => o.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: o.src,
      width: "280",
      alt: o.ariaLabel || "NHS"
    }
  ) : M(), P = () => l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, y = (S, j) => S ? j ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: j, children: S }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: S }) : null, N = (S) => S.active || S.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: S.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text }) : S.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text, w = c?.items && !b, _ = w ? [] : c?.items, F = w ? c.items : [];
  return /* @__PURE__ */ r.jsxs("header", { className: $, role: "banner", "data-module": "nhsuk-header", ...h, ...g, children: [
    /* @__PURE__ */ r.jsxs("div", { className: T, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
        k ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: k, children: [
          D(),
          P(),
          x && y(p.text)
        ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          D(),
          P(),
          x && y(p.text)
        ] }),
        p.text && !x && y(p.text, p.href)
      ] }),
      /* @__PURE__ */ r.jsx(Ji, { ...u, variant: f === "white" ? "white" : "default" })
    ] }),
    c && c.items && c.items.length > 0 && /* @__PURE__ */ r.jsx("nav", { className: v, "aria-label": c.ariaLabel || "Menu", children: /* @__PURE__ */ r.jsx(
      "div",
      {
        className: ye(
          "nhsuk-header_navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--ssr": !n
          },
          d
        ),
        children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__navigation-list", children: (_ || []).map((S, j) => /* @__PURE__ */ r.jsx(
          "li",
          {
            className: ye("nhsuk-header__navigation-item", {
              "nhsuk-header__navigation-item--current": S.active || S.current
            }, S.className),
            ...S.attributes || {},
            children: /* @__PURE__ */ r.jsx(
              "a",
              {
                className: "nhsuk-header__navigation-link",
                href: S.href,
                ...S.active || S.current ? { "aria-current": S.current ? "page" : "true" } : {},
                children: N(S)
              }
            )
          },
          j
        )) })
      }
    ) }),
    w && F.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: F.map((S, j) => /* @__PURE__ */ r.jsx(
      "li",
      {
        className: ye("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": S.active || S.current
        }),
        children: /* @__PURE__ */ r.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: S.href,
            ...S.active || S.current ? { "aria-current": S.current ? "page" : "true" } : {},
            children: N(S)
          }
        )
      },
      `overflow-server-${j}`
    )) }) })
  ] });
}
const Rv = (e) => dd(e, {
  variant: "server",
  isClient: !1
}), fd = ({
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
  ].filter(Boolean).join(" "), m = u || e || a || o, b = () => {
    if (!e) return null;
    const g = { className: h };
    switch (t) {
      case 1:
        return /* @__PURE__ */ r.jsx("h1", { ...g, children: e });
      case 2:
        return /* @__PURE__ */ r.jsx("h2", { ...g, children: e });
      case 3:
        return /* @__PURE__ */ r.jsx("h3", { ...g, children: e });
      case 4:
        return /* @__PURE__ */ r.jsx("h4", { ...g, children: e });
      case 5:
        return /* @__PURE__ */ r.jsx("h5", { ...g, children: e });
      case 6:
        return /* @__PURE__ */ r.jsx("h6", { ...g, children: e });
      default:
        return /* @__PURE__ */ r.jsx("h1", { ...g, children: e });
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
        s && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: m && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          b(),
          u || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && m && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          b(),
          u || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
fd.displayName = "Hero";
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
  const f = (m, b = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: ye("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": b
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
  return /* @__PURE__ */ r.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...u }, children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: ye("nhsuk-width-container", i),
        style: d,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: ye("nhsuk-footer", e), style: c, children: h ? (
            // Multi-column layout
            /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: t.map((m) => f(m)) }),
              n && n.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: n.map((m) => f(m)) }),
              a && a.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: a.map((m) => f(m)) }),
              o && o.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((m) => f(m)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((m) => f(m, !0)),
              (n || []).map((m) => f(m, !0)),
              (a || []).map((m) => f(m, !0)),
              (o || []).map((m) => f(m, !0))
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
function pd(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ho(e) {
  let t, n, a;
  e.length !== 2 ? (t = Zr, n = (l, u) => Zr(e(l), u), a = (l, u) => e(l) - u) : (t = e === Zr || e === pd ? e : hd, n = e, a = e);
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
function hd() {
  return 0;
}
function md(e) {
  return e === null ? NaN : +e;
}
const gd = ho(Zr), xd = gd.right;
ho(md).center;
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
  constructor(t, n = yd) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(Uo(this, t));
  }
  has(t) {
    return super.has(Uo(this, t));
  }
  set(t, n) {
    return super.set(bd(this, t), n);
  }
  delete(t) {
    return super.delete(vd(this, t));
  }
}
function Uo({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function bd({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function vd({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function yd(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const wd = Math.sqrt(50), _d = Math.sqrt(10), Sd = Math.sqrt(2);
function na(e, t, n) {
  const a = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= wd ? 10 : s >= _d ? 5 : s >= Sd ? 2 : 1;
  let l, u, c;
  return o < 0 ? (c = Math.pow(10, -o) / i, l = Math.round(e * c), u = Math.round(t * c), l / c < e && ++l, u / c > t && --u, c = -c) : (c = Math.pow(10, o) * i, l = Math.round(e / c), u = Math.round(t / c), l * c < e && ++l, u * c > t && --u), u < l && 0.5 <= n && n < 2 ? na(e, t, n * 2) : [l, u, c];
}
function kd(e, t, n) {
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
function Cd(e, t, n) {
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
    var h = t().length, m = o < a, b = m ? o : a, g = m ? a : o;
    s = (g - b) / Math.max(1, h - u + c * 2), l && (s = Math.floor(s)), b += (g - b - s * (h - u)) * d, i = s * (1 - u), l && (b = Math.round(b), i = Math.round(i));
    var p = Cd(h).map(function(x) {
      return b + s * x;
    });
    return n(m ? p.reverse() : p);
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
function Rr() {
}
var Ir = 0.7, ra = 1 / Ir, sr = "\\s*([+-]?\\d+)\\s*", $r = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", qt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Nd = /^#([0-9a-f]{3,8})$/, jd = new RegExp(`^rgb\\(${sr},${sr},${sr}\\)$`), Td = new RegExp(`^rgb\\(${qt},${qt},${qt}\\)$`), Dd = new RegExp(`^rgba\\(${sr},${sr},${sr},${$r}\\)$`), Id = new RegExp(`^rgba\\(${qt},${qt},${qt},${$r}\\)$`), $d = new RegExp(`^hsl\\(${$r},${qt},${qt}\\)$`), Md = new RegExp(`^hsla\\(${$r},${qt},${qt},${$r}\\)$`), zo = {
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
mo(Rr, Mr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Vo,
  // Deprecated! Use color.formatHex.
  formatHex: Vo,
  formatHex8: Pd,
  formatHsl: Ld,
  formatRgb: Go,
  toString: Go
});
function Vo() {
  return this.rgb().formatHex();
}
function Pd() {
  return this.rgb().formatHex8();
}
function Ld() {
  return pl(this).formatHsl();
}
function Go() {
  return this.rgb().formatRgb();
}
function Mr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Nd.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Yo(t) : n === 3 ? new It(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? qr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? qr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = jd.exec(e)) ? new It(t[1], t[2], t[3], 1) : (t = Td.exec(e)) ? new It(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Dd.exec(e)) ? qr(t[1], t[2], t[3], t[4]) : (t = Id.exec(e)) ? qr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = $d.exec(e)) ? Ko(t[1], t[2] / 100, t[3] / 100, 1) : (t = Md.exec(e)) ? Ko(t[1], t[2] / 100, t[3] / 100, t[4]) : zo.hasOwnProperty(e) ? Yo(zo[e]) : e === "transparent" ? new It(NaN, NaN, NaN, 0) : null;
}
function Yo(e) {
  return new It(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function qr(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new It(e, t, n, a);
}
function Fd(e) {
  return e instanceof Rr || (e = Mr(e)), e ? (e = e.rgb(), new It(e.r, e.g, e.b, e.opacity)) : new It();
}
function Ts(e, t, n, a) {
  return arguments.length === 1 ? Fd(e) : new It(e, t, n, a ?? 1);
}
function It(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
mo(It, Ts, fl(Rr, {
  brighter(e) {
    return e = e == null ? ra : Math.pow(ra, e), new It(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ir : Math.pow(Ir, e), new It(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new It(An(this.r), An(this.g), An(this.b), aa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: qo,
  // Deprecated! Use color.formatHex.
  formatHex: qo,
  formatHex8: Ad,
  formatRgb: Xo,
  toString: Xo
}));
function qo() {
  return `#${Fn(this.r)}${Fn(this.g)}${Fn(this.b)}`;
}
function Ad() {
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
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Wt(e, t, n, a);
}
function pl(e) {
  if (e instanceof Wt) return new Wt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Rr || (e = Mr(e)), !e) return new Wt();
  if (e instanceof Wt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), s = Math.max(t, n, a), i = NaN, l = s - o, u = (s + o) / 2;
  return l ? (t === s ? i = (n - a) / l + (n < a) * 6 : n === s ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= u < 0.5 ? s + o : 2 - s - o, i *= 60) : l = u > 0 && u < 1 ? 0 : i, new Wt(i, l, u, e.opacity);
}
function Ed(e, t, n, a) {
  return arguments.length === 1 ? pl(e) : new Wt(e, t, n, a ?? 1);
}
function Wt(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
mo(Wt, Ed, fl(Rr, {
  brighter(e) {
    return e = e == null ? ra : Math.pow(ra, e), new Wt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ir : Math.pow(Ir, e), new Wt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - a;
    return new It(
      os(e >= 240 ? e - 240 : e + 120, o, a),
      os(e, o, a),
      os(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Wt(Jo(this.h), Xr(this.s), Xr(this.l), aa(this.opacity));
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
function Rd(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Bd(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function Hd(e) {
  return (e = +e) == 1 ? hl : function(t, n) {
    return n - t ? Bd(t, n, e) : go(isNaN(t) ? n : t);
  };
}
function hl(e, t) {
  var n = t - e;
  return n ? Rd(e, n) : go(isNaN(e) ? t : e);
}
const Zo = (function e(t) {
  var n = Hd(t);
  function a(o, s) {
    var i = n((o = Ts(o)).r, (s = Ts(s)).r), l = n(o.g, s.g), u = n(o.b, s.b), c = hl(o.opacity, s.opacity);
    return function(d) {
      return o.r = i(d), o.g = l(d), o.b = u(d), o.opacity = c(d), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Od(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Ud(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Wd(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, o = new Array(a), s = new Array(n), i;
  for (i = 0; i < a; ++i) o[i] = xo(e[i], t[i]);
  for (; i < n; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function zd(e, t) {
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
function Vd(e, t) {
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
function Gd(e) {
  return function() {
    return e;
  };
}
function Yd(e) {
  return function(t) {
    return e(t) + "";
  };
}
function qd(e, t) {
  var n = Ds.lastIndex = is.lastIndex = 0, a, o, s, i = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (a = Ds.exec(e)) && (o = is.exec(t)); )
    (s = o.index) > n && (s = t.slice(n, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, u.push({ i, x: sa(a, o) })), n = is.lastIndex;
  return n < t.length && (s = t.slice(n), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? u[0] ? Yd(u[0].x) : Gd(t) : (t = u.length, function(c) {
    for (var d = 0, f; d < t; ++d) l[(f = u[d]).i] = f.x(c);
    return l.join("");
  });
}
function xo(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? go(t) : (n === "number" ? sa : n === "string" ? (a = Mr(t)) ? (t = a, Zo) : qd : t instanceof Mr ? Zo : t instanceof Date ? zd : Ud(t) ? Od : Array.isArray(t) ? Wd : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Vd : sa)(e, t);
}
function Xd(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Kd(e) {
  return function() {
    return e;
  };
}
function Jd(e) {
  return +e;
}
var Qo = [0, 1];
function er(e) {
  return e;
}
function Is(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Kd(isNaN(t) ? NaN : 0.5);
}
function Zd(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Qd(e, t, n) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = Is(o, a), s = n(i, s)) : (a = Is(a, o), s = n(s, i)), function(l) {
    return s(a(l));
  };
}
function ef(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = Is(e[i], e[i + 1]), s[i] = n(t[i], t[i + 1]);
  return function(l) {
    var u = xd(e, l, 1, a) - 1;
    return s[u](o[u](l));
  };
}
function ml(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function tf() {
  var e = Qo, t = Qo, n = xo, a, o, s, i = er, l, u, c;
  function d() {
    var h = Math.min(e.length, t.length);
    return i !== er && (i = Zd(e[0], e[h - 1])), l = h > 2 ? ef : Qd, u = c = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? s : (u || (u = l(e.map(a), t, n)))(a(i(h)));
  }
  return f.invert = function(h) {
    return i(o((c || (c = l(t, e.map(a), sa)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, Jd), d()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), d()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = Xd, d();
  }, f.clamp = function(h) {
    return arguments.length ? (i = h ? !0 : er, d()) : i !== er;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, d()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (s = h, f) : s;
  }, function(h, m) {
    return a = h, o = m, d();
  };
}
function gl() {
  return tf()(er, er);
}
function nf(e) {
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
function ur(e) {
  return e = oa(Math.abs(e)), e ? e[1] : NaN;
}
function rf(e, t) {
  return function(n, a) {
    for (var o = n.length, s = [], i = 0, l = e[0], u = 0; o > 0 && l > 0 && (u + l + 1 > a && (l = Math.max(1, a - u)), s.push(n.substring(o -= l, o + l)), !((u += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function af(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var sf = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ia(e) {
  if (!(t = sf.exec(e))) throw new Error("invalid format: " + e);
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
function of(e) {
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
function lf(e, t) {
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
  d: nf,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ei(e * 100, t),
  r: ei,
  s: lf,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function ni(e) {
  return e;
}
var ri = Array.prototype.map, ai = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function cf(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ni : rf(ri.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? ni : af(ri.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = ia(f);
    var h = f.fill, m = f.align, b = f.sign, g = f.symbol, p = f.zero, x = f.width, k = f.comma, $ = f.precision, T = f.trim, v = f.type;
    v === "n" ? (k = !0, v = "g") : ti[v] || ($ === void 0 && ($ = 12), T = !0, v = "g"), (p || h === "0" && m === "=") && (p = !0, h = "0", m = "=");
    var M = g === "$" ? n : g === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", D = g === "$" ? a : /[%p]/.test(v) ? i : "", P = ti[v], y = /[defgprs%]/.test(v);
    $ = $ === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
    function N(w) {
      var _ = M, F = D, S, j, C;
      if (v === "c")
        F = P(w) + F, w = "";
      else {
        w = +w;
        var I = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? u : P(Math.abs(w), $), T && (w = of(w)), I && +w == 0 && b !== "+" && (I = !1), _ = (I ? b === "(" ? b : l : b === "-" || b === "(" ? "" : b) + _, F = (v === "s" ? ai[8 + xl / 3] : "") + F + (I && b === "(" ? ")" : ""), y) {
          for (S = -1, j = w.length; ++S < j; )
            if (C = w.charCodeAt(S), 48 > C || C > 57) {
              F = (C === 46 ? o + w.slice(S + 1) : w.slice(S)) + F, w = w.slice(0, S);
              break;
            }
        }
      }
      k && !p && (w = t(w, 1 / 0));
      var te = _.length + w.length + F.length, V = te < x ? new Array(x - te + 1).join(h) : "";
      switch (k && p && (w = t(V + w, V.length ? x - F.length : 1 / 0), V = ""), m) {
        case "<":
          w = _ + w + F + V;
          break;
        case "=":
          w = _ + V + w + F;
          break;
        case "^":
          w = V.slice(0, te = V.length >> 1) + _ + w + F + V.slice(te);
          break;
        default:
          w = V + _ + w + F;
          break;
      }
      return s(w);
    }
    return N.toString = function() {
      return f + "";
    }, N;
  }
  function d(f, h) {
    var m = c((f = ia(f), f.type = "f", f)), b = Math.max(-8, Math.min(8, Math.floor(ur(h) / 3))) * 3, g = Math.pow(10, -b), p = ai[8 + b / 3];
    return function(x) {
      return m(g * x) + p;
    };
  }
  return {
    format: c,
    formatPrefix: d
  };
}
var Kr, bl, vl;
uf({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function uf(e) {
  return Kr = cf(e), bl = Kr.format, vl = Kr.formatPrefix, Kr;
}
function df(e) {
  return Math.max(0, -ur(Math.abs(e)));
}
function ff(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ur(t) / 3))) * 3 - ur(Math.abs(e)));
}
function pf(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, ur(t) - ur(e)) + 1;
}
function hf(e, t, n, a) {
  var o = js(e, t, n), s;
  switch (a = ia(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(s = ff(o, i)) && (a.precision = s), vl(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(s = pf(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = s - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(s = df(o)) && (a.precision = s - (a.type === "%") * 2);
      break;
    }
  }
  return bl(a);
}
function mf(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return kd(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var o = t();
    return hf(o[0], o[o.length - 1], n ?? 10, a);
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
  }, Ya.apply(e, arguments), mf(e);
}
function gf(e, t) {
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
const pn = 1e3, Ht = pn * 60, hn = Ht * 60, gn = hn * 24, vo = gn * 7, si = gn * 30, us = gn * 365, tr = pt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * pn);
}, (e, t) => (t - e) / pn, (e) => e.getUTCSeconds());
tr.range;
const yo = pt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * pn);
}, (e, t) => {
  e.setTime(+e + t * Ht);
}, (e, t) => (t - e) / Ht, (e) => e.getMinutes());
yo.range;
const xf = pt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ht);
}, (e, t) => (t - e) / Ht, (e) => e.getUTCMinutes());
xf.range;
const wo = pt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * pn - e.getMinutes() * Ht);
}, (e, t) => {
  e.setTime(+e + t * hn);
}, (e, t) => (t - e) / hn, (e) => e.getHours());
wo.range;
const bf = pt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * hn);
}, (e, t) => (t - e) / hn, (e) => e.getUTCHours());
bf.range;
const Br = pt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ht) / gn,
  (e) => e.getDate() - 1
);
Br.range;
const _o = pt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / gn, (e) => e.getUTCDate() - 1);
_o.range;
const vf = pt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / gn, (e) => Math.floor(e / gn));
vf.range;
function Wn(e) {
  return pt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ht) / vo);
}
const qa = Wn(0), ua = Wn(1), yf = Wn(2), wf = Wn(3), dr = Wn(4), _f = Wn(5), Sf = Wn(6);
qa.range;
ua.range;
yf.range;
wf.range;
dr.range;
_f.range;
Sf.range;
function zn(e) {
  return pt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / vo);
}
const yl = zn(0), da = zn(1), kf = zn(2), Cf = zn(3), fr = zn(4), Nf = zn(5), jf = zn(6);
yl.range;
da.range;
kf.range;
Cf.range;
fr.range;
Nf.range;
jf.range;
const Pr = pt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Pr.range;
const Tf = pt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Tf.range;
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
function Df(e, t, n, a, o, s) {
  const i = [
    [tr, 1, pn],
    [tr, 5, 5 * pn],
    [tr, 15, 15 * pn],
    [tr, 30, 30 * pn],
    [s, 1, Ht],
    [s, 5, 5 * Ht],
    [s, 15, 15 * Ht],
    [s, 30, 30 * Ht],
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
    const m = f && typeof f.range == "function" ? f : u(c, d, f), b = m ? m.range(c, +d + 1) : [];
    return h ? b.reverse() : b;
  }
  function u(c, d, f) {
    const h = Math.abs(d - c) / f, m = ho(([, , p]) => p).right(i, h);
    if (m === i.length) return e.every(js(c / us, d / us, f));
    if (m === 0) return ca.every(Math.max(js(c, d, f), 1));
    const [b, g] = i[h / i[m - 1][2] < i[m][2] / h ? m - 1 : m];
    return b.every(g);
  }
  return [l, u];
}
const [If, $f] = Df(xn, Pr, qa, Br, wo, yo);
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
function Sr(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Mf(e) {
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, u = e.shortMonths, c = kr(o), d = Cr(o), f = kr(s), h = Cr(s), m = kr(i), b = Cr(i), g = kr(l), p = Cr(l), x = kr(u), k = Cr(u), $ = {
    a: I,
    A: te,
    b: V,
    B,
    c: null,
    d: di,
    e: di,
    f: tp,
    g: dp,
    G: pp,
    H: Zf,
    I: Qf,
    j: ep,
    L: wl,
    m: np,
    M: rp,
    p: H,
    q: O,
    Q: hi,
    s: mi,
    S: ap,
    u: sp,
    U: op,
    V: ip,
    w: lp,
    W: cp,
    x: null,
    X: null,
    y: up,
    Y: fp,
    Z: hp,
    "%": pi
  }, T = {
    a: ae,
    A: W,
    b: ie,
    B: je,
    c: null,
    d: fi,
    e: fi,
    f: bp,
    g: Tp,
    G: Ip,
    H: mp,
    I: gp,
    j: xp,
    L: Sl,
    m: vp,
    M: yp,
    p: ce,
    q: ue,
    Q: hi,
    s: mi,
    S: wp,
    u: _p,
    U: Sp,
    V: kp,
    w: Cp,
    W: Np,
    x: null,
    X: null,
    y: jp,
    Y: Dp,
    Z: $p,
    "%": pi
  }, v = {
    a: N,
    A: w,
    b: _,
    B: F,
    c: S,
    d: ci,
    e: ci,
    f: qf,
    g: li,
    G: ii,
    H: ui,
    I: ui,
    j: zf,
    L: Yf,
    m: Wf,
    M: Vf,
    p: y,
    q: Uf,
    Q: Kf,
    s: Jf,
    S: Gf,
    u: Ef,
    U: Rf,
    V: Bf,
    w: Af,
    W: Hf,
    x: j,
    X: C,
    y: li,
    Y: ii,
    Z: Of,
    "%": Xf
  };
  $.x = M(n, $), $.X = M(a, $), $.c = M(t, $), T.x = M(n, T), T.X = M(a, T), T.c = M(t, T);
  function M(J, ne) {
    return function(de) {
      var G = [], fe = -1, oe = 0, A = J.length, R, Q, pe;
      for (de instanceof Date || (de = /* @__PURE__ */ new Date(+de)); ++fe < A; )
        J.charCodeAt(fe) === 37 && (G.push(J.slice(oe, fe)), (Q = oi[R = J.charAt(++fe)]) != null ? R = J.charAt(++fe) : Q = R === "e" ? " " : "0", (pe = ne[R]) && (R = pe(de, Q)), G.push(R), oe = fe + 1);
      return G.push(J.slice(oe, fe)), G.join("");
    };
  }
  function D(J, ne) {
    return function(de) {
      var G = Sr(1900, void 0, 1), fe = P(G, J, de += "", 0), oe, A;
      if (fe != de.length) return null;
      if ("Q" in G) return new Date(G.Q);
      if ("s" in G) return new Date(G.s * 1e3 + ("L" in G ? G.L : 0));
      if (ne && !("Z" in G) && (G.Z = 0), "p" in G && (G.H = G.H % 12 + G.p * 12), G.m === void 0 && (G.m = "q" in G ? G.q : 0), "V" in G) {
        if (G.V < 1 || G.V > 53) return null;
        "w" in G || (G.w = 1), "Z" in G ? (oe = fs(Sr(G.y, 0, 1)), A = oe.getUTCDay(), oe = A > 4 || A === 0 ? da.ceil(oe) : da(oe), oe = _o.offset(oe, (G.V - 1) * 7), G.y = oe.getUTCFullYear(), G.m = oe.getUTCMonth(), G.d = oe.getUTCDate() + (G.w + 6) % 7) : (oe = ds(Sr(G.y, 0, 1)), A = oe.getDay(), oe = A > 4 || A === 0 ? ua.ceil(oe) : ua(oe), oe = Br.offset(oe, (G.V - 1) * 7), G.y = oe.getFullYear(), G.m = oe.getMonth(), G.d = oe.getDate() + (G.w + 6) % 7);
      } else ("W" in G || "U" in G) && ("w" in G || (G.w = "u" in G ? G.u % 7 : "W" in G ? 1 : 0), A = "Z" in G ? fs(Sr(G.y, 0, 1)).getUTCDay() : ds(Sr(G.y, 0, 1)).getDay(), G.m = 0, G.d = "W" in G ? (G.w + 6) % 7 + G.W * 7 - (A + 5) % 7 : G.w + G.U * 7 - (A + 6) % 7);
      return "Z" in G ? (G.H += G.Z / 100 | 0, G.M += G.Z % 100, fs(G)) : ds(G);
    };
  }
  function P(J, ne, de, G) {
    for (var fe = 0, oe = ne.length, A = de.length, R, Q; fe < oe; ) {
      if (G >= A) return -1;
      if (R = ne.charCodeAt(fe++), R === 37) {
        if (R = ne.charAt(fe++), Q = v[R in oi ? ne.charAt(fe++) : R], !Q || (G = Q(J, de, G)) < 0) return -1;
      } else if (R != de.charCodeAt(G++))
        return -1;
    }
    return G;
  }
  function y(J, ne, de) {
    var G = c.exec(ne.slice(de));
    return G ? (J.p = d.get(G[0].toLowerCase()), de + G[0].length) : -1;
  }
  function N(J, ne, de) {
    var G = m.exec(ne.slice(de));
    return G ? (J.w = b.get(G[0].toLowerCase()), de + G[0].length) : -1;
  }
  function w(J, ne, de) {
    var G = f.exec(ne.slice(de));
    return G ? (J.w = h.get(G[0].toLowerCase()), de + G[0].length) : -1;
  }
  function _(J, ne, de) {
    var G = x.exec(ne.slice(de));
    return G ? (J.m = k.get(G[0].toLowerCase()), de + G[0].length) : -1;
  }
  function F(J, ne, de) {
    var G = g.exec(ne.slice(de));
    return G ? (J.m = p.get(G[0].toLowerCase()), de + G[0].length) : -1;
  }
  function S(J, ne, de) {
    return P(J, t, ne, de);
  }
  function j(J, ne, de) {
    return P(J, n, ne, de);
  }
  function C(J, ne, de) {
    return P(J, a, ne, de);
  }
  function I(J) {
    return i[J.getDay()];
  }
  function te(J) {
    return s[J.getDay()];
  }
  function V(J) {
    return u[J.getMonth()];
  }
  function B(J) {
    return l[J.getMonth()];
  }
  function H(J) {
    return o[+(J.getHours() >= 12)];
  }
  function O(J) {
    return 1 + ~~(J.getMonth() / 3);
  }
  function ae(J) {
    return i[J.getUTCDay()];
  }
  function W(J) {
    return s[J.getUTCDay()];
  }
  function ie(J) {
    return u[J.getUTCMonth()];
  }
  function je(J) {
    return l[J.getUTCMonth()];
  }
  function ce(J) {
    return o[+(J.getUTCHours() >= 12)];
  }
  function ue(J) {
    return 1 + ~~(J.getUTCMonth() / 3);
  }
  return {
    format: function(J) {
      var ne = M(J += "", $);
      return ne.toString = function() {
        return J;
      }, ne;
    },
    parse: function(J) {
      var ne = D(J += "", !1);
      return ne.toString = function() {
        return J;
      }, ne;
    },
    utcFormat: function(J) {
      var ne = M(J += "", T);
      return ne.toString = function() {
        return J;
      }, ne;
    },
    utcParse: function(J) {
      var ne = D(J += "", !0);
      return ne.toString = function() {
        return J;
      }, ne;
    }
  };
}
var oi = { "-": "", _: " ", 0: "0" }, gt = /^\s*\d+/, Pf = /^%/, Lf = /[\\^$*+?|[\]().{}]/g;
function Ge(e, t, n) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < n ? new Array(n - s + 1).join(t) + o : o);
}
function Ff(e) {
  return e.replace(Lf, "\\$&");
}
function kr(e) {
  return new RegExp("^(?:" + e.map(Ff).join("|") + ")", "i");
}
function Cr(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function Af(e, t, n) {
  var a = gt.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function Ef(e, t, n) {
  var a = gt.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function Rf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function Bf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function Hf(e, t, n) {
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
function Of(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function Uf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function Wf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function ci(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function zf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function ui(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function Vf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Gf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Yf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function qf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Xf(e, t, n) {
  var a = Pf.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Kf(e, t, n) {
  var a = gt.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Jf(e, t, n) {
  var a = gt.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function di(e, t) {
  return Ge(e.getDate(), t, 2);
}
function Zf(e, t) {
  return Ge(e.getHours(), t, 2);
}
function Qf(e, t) {
  return Ge(e.getHours() % 12 || 12, t, 2);
}
function ep(e, t) {
  return Ge(1 + Br.count(xn(e), e), t, 3);
}
function wl(e, t) {
  return Ge(e.getMilliseconds(), t, 3);
}
function tp(e, t) {
  return wl(e, t) + "000";
}
function np(e, t) {
  return Ge(e.getMonth() + 1, t, 2);
}
function rp(e, t) {
  return Ge(e.getMinutes(), t, 2);
}
function ap(e, t) {
  return Ge(e.getSeconds(), t, 2);
}
function sp(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function op(e, t) {
  return Ge(qa.count(xn(e) - 1, e), t, 2);
}
function _l(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? dr(e) : dr.ceil(e);
}
function ip(e, t) {
  return e = _l(e), Ge(dr.count(xn(e), e) + (xn(e).getDay() === 4), t, 2);
}
function lp(e) {
  return e.getDay();
}
function cp(e, t) {
  return Ge(ua.count(xn(e) - 1, e), t, 2);
}
function up(e, t) {
  return Ge(e.getFullYear() % 100, t, 2);
}
function dp(e, t) {
  return e = _l(e), Ge(e.getFullYear() % 100, t, 2);
}
function fp(e, t) {
  return Ge(e.getFullYear() % 1e4, t, 4);
}
function pp(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? dr(e) : dr.ceil(e), Ge(e.getFullYear() % 1e4, t, 4);
}
function hp(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ge(t / 60 | 0, "0", 2) + Ge(t % 60, "0", 2);
}
function fi(e, t) {
  return Ge(e.getUTCDate(), t, 2);
}
function mp(e, t) {
  return Ge(e.getUTCHours(), t, 2);
}
function gp(e, t) {
  return Ge(e.getUTCHours() % 12 || 12, t, 2);
}
function xp(e, t) {
  return Ge(1 + _o.count(On(e), e), t, 3);
}
function Sl(e, t) {
  return Ge(e.getUTCMilliseconds(), t, 3);
}
function bp(e, t) {
  return Sl(e, t) + "000";
}
function vp(e, t) {
  return Ge(e.getUTCMonth() + 1, t, 2);
}
function yp(e, t) {
  return Ge(e.getUTCMinutes(), t, 2);
}
function wp(e, t) {
  return Ge(e.getUTCSeconds(), t, 2);
}
function _p(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Sp(e, t) {
  return Ge(yl.count(On(e) - 1, e), t, 2);
}
function kl(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? fr(e) : fr.ceil(e);
}
function kp(e, t) {
  return e = kl(e), Ge(fr.count(On(e), e) + (On(e).getUTCDay() === 4), t, 2);
}
function Cp(e) {
  return e.getUTCDay();
}
function Np(e, t) {
  return Ge(da.count(On(e) - 1, e), t, 2);
}
function jp(e, t) {
  return Ge(e.getUTCFullYear() % 100, t, 2);
}
function Tp(e, t) {
  return e = kl(e), Ge(e.getUTCFullYear() % 100, t, 2);
}
function Dp(e, t) {
  return Ge(e.getUTCFullYear() % 1e4, t, 4);
}
function Ip(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? fr(e) : fr.ceil(e), Ge(e.getUTCFullYear() % 1e4, t, 4);
}
function $p() {
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
var Kn, Cl;
Mp({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Mp(e) {
  return Kn = Mf(e), Cl = Kn.format, Kn.parse, Kn.utcFormat, Kn.utcParse, Kn;
}
function Pp(e) {
  return new Date(e);
}
function Lp(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Nl(e, t, n, a, o, s, i, l, u, c) {
  var d = gl(), f = d.invert, h = d.domain, m = c(".%L"), b = c(":%S"), g = c("%I:%M"), p = c("%I %p"), x = c("%a %d"), k = c("%b %d"), $ = c("%B"), T = c("%Y");
  function v(M) {
    return (u(M) < M ? m : l(M) < M ? b : i(M) < M ? g : s(M) < M ? p : a(M) < M ? o(M) < M ? x : k : n(M) < M ? $ : T)(M);
  }
  return d.invert = function(M) {
    return new Date(f(M));
  }, d.domain = function(M) {
    return arguments.length ? h(Array.from(M, Lp)) : h().map(Pp);
  }, d.ticks = function(M) {
    var D = h();
    return e(D[0], D[D.length - 1], M ?? 10);
  }, d.tickFormat = function(M, D) {
    return D == null ? v : c(D);
  }, d.nice = function(M) {
    var D = h();
    return (!M || typeof M.range != "function") && (M = t(D[0], D[D.length - 1], M ?? 10)), M ? h(gf(D, M)) : d;
  }, d.copy = function() {
    return ml(d, Nl(e, t, n, a, o, s, i, l, u, c));
  }, d;
}
function So() {
  return Ya.apply(Nl(If, $f, xn, Pr, qa, Br, wo, yo, tr, Cl).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Fp({
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
  const c = Ue(null), [d, f] = Oe(!1), [h, m] = Oe(!1), b = t(e.start), g = t(e.end), p = Math.max(g - b, 20), x = () => {
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
  }, k = e.progress ? p * e.progress / 100 : 0, $ = () => {
    n?.(e);
  }, T = () => {
    a?.(e);
  }, v = (_) => {
    _.key === "Enter" ? (_.preventDefault(), $()) : _.key === " " && (_.preventDefault(), T());
  }, M = () => {
    f(!0);
  }, D = () => {
    f(!1);
  }, P = () => {
    m(!0), l?.();
  }, y = () => {
    m(!1);
  }, N = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (h || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), w = {
    "--task-left": `${b}px`,
    "--task-width": `${p}px`,
    "--task-color": x(),
    left: `${b}px`,
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
      className: N,
      style: w,
      onClick: $,
      onDoubleClick: T,
      onKeyDown: v,
      onMouseDown: M,
      onMouseUp: D,
      onFocus: P,
      onBlur: y,
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
function Ap({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let m = e.getTime(); m <= t.getTime(); m += 864e5)
    a.push(new Date(m));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = Oe(-1), u = Ue(null), c = (m) => {
    if (m.key === "ArrowLeft") {
      m.preventDefault();
      const b = Math.max(0, i === -1 ? 0 : i - 1);
      l(b), h(b);
    } else if (m.key === "ArrowRight") {
      m.preventDefault();
      const b = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(b), h(b);
    } else if (m.key === "ArrowDown")
      m.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (m.key === "Home")
      m.preventDefault(), l(0), h(0);
    else if (m.key === "End") {
      m.preventDefault();
      const b = a.length - 1;
      l(b), h(b);
    }
  }, d = (m) => {
    if (m.key === "ArrowDown")
      m.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .resource-label") : null)?.focus();
    else if (m.key === "ArrowRight") {
      m.preventDefault();
      const b = u.current;
      b && b.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => h(0), 0));
  }, h = (m) => {
    const b = u.current?.querySelector(`[data-date-index="${m}"]`);
    b && b.focus();
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
            children: a.map((m, b) => {
              const g = m.getTime() === s.getTime(), p = i === b;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": b,
                  className: `date-column ${g ? "today" : ""} ${p ? "focused" : ""}`,
                  tabIndex: p ? 0 : -1,
                  role: "button",
                  "aria-label": `${m.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${g ? " (Today)" : ""}`,
                  onFocus: () => l(b),
                  onKeyDown: c,
                  children: m.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                b
              );
            })
          }
        )
      ]
    }
  );
}
function Ep({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, u] = Oe(!1), [c, d] = Oe(-1), f = Ue(null);
  Ze(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
    }, 0);
  }, [l, c, t.length]);
  const h = (g) => {
    if (g.key === "ArrowLeft" && g.shiftKey) {
      g.preventDefault(), g.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (g.key === "ArrowRight" && g.shiftKey) {
      g.preventDefault(), g.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!l) {
      switch (g.key) {
        case "ArrowUp":
          g.preventDefault(), s === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-timeline") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 1}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowDown":
          g.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 3}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowLeft":
          g.preventDefault(), f.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (g.preventDefault(), u(!0), d(0));
          break;
      }
      return;
    }
    switch (g.key) {
      case "ArrowLeft":
        g.preventDefault();
        const p = Math.max(0, c - 1);
        d(p), f.current?.querySelector(`[data-task-index="${p}"]`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault();
        const k = Math.min(t.length - 1, c + 1);
        d(k), f.current?.querySelector(`[data-task-index="${k}"]`)?.focus();
        break;
      case "Enter":
        g.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        g.preventDefault(), c >= 0 && o?.(t[c]);
        break;
      case "Escape":
        g.preventDefault(), u(!1), d(-1), f.current?.focus();
        break;
    }
  }, m = (g) => {
    switch (g.key) {
      case "ArrowUp":
        g.preventDefault(), s === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-resource") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowDown":
        g.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault(), f.current?.focus();
        break;
    }
  }, b = (g) => {
    l && d(g);
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
            children: t.map((g, p) => /* @__PURE__ */ r.jsx(
              Fp,
              {
                task: g,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && c === p,
                taskIndex: p,
                tabIndex: l && c === p ? 0 : -1,
                onFocus: () => b(p)
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
function Bv({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = Ue(null), [l, u] = Oe(800), c = Le(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const g = new Date(n);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : g;
  }, [n]), d = Le(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const g = new Date(a);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : g;
  }, [a]), f = Le(() => Math.ceil((d.getTime() - c.getTime()) / 864e5) + 1, [c, d]);
  Ze(() => {
    if (!i.current || typeof window > "u") return;
    const g = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!g) return;
    const p = new g((x) => {
      const k = x[0];
      k && u(Math.max(k.contentRect.width - 220, 400));
    });
    return p.observe(i.current), () => p.disconnect();
  }, []);
  const h = Le(
    () => So().domain([c, d]).range([0, l]),
    [c, d, l]
  ), m = Le(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach((p) => {
      const x = g.get(p.resourceId) || [];
      x.push(p), g.set(p.resourceId, x);
    }), g;
  }, [t]), b = (g) => {
    if (g.target === g.currentTarget)
      switch (g.key) {
        case "ArrowDown":
          g.preventDefault(), typeof document < "u" && i.current?.querySelector(".gantt-row .resource-label")?.focus();
          break;
        case "Home":
          g.preventDefault(), typeof document < "u" && i.current?.querySelector(".header-resource")?.focus();
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
      onKeyDown: b,
      children: [
        /* @__PURE__ */ r.jsx(Ap, { viewStart: c, viewEnd: d, dateCount: f }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: i,
            className: "gantt-grid",
            role: "rowgroup",
            "aria-label": "Gantt chart data rows",
            tabIndex: 0,
            onKeyDown: (g) => {
              g.key === "ArrowLeft" && g.altKey ? (g.preventDefault(), i.current?.scrollBy({ left: -50, behavior: "smooth" })) : g.key === "ArrowRight" && g.altKey ? (g.preventDefault(), i.current?.scrollBy({ left: 50, behavior: "smooth" })) : g.key === "ArrowUp" && g.altKey ? (g.preventDefault(), i.current?.scrollBy({ top: -50, behavior: "smooth" })) : g.key === "ArrowDown" && g.altKey && (g.preventDefault(), i.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((g, p) => /* @__PURE__ */ r.jsx(
              Ep,
              {
                resource: g,
                tasks: m.get(g.id) || [],
                scale: h,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: p,
                dateCount: f
              },
              g.id
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
) }), Rp = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const u = () => t ? Dt.Children.toArray(t).filter(
    (p) => Dt.isValidElement(p) && (p.type === fa || p.type?.displayName === "BreadcrumbItem")
  ).map((p) => ({
    text: typeof p.props.children == "string" ? p.props.children : String(p.props.children),
    href: p.props.href,
    active: p.props.active,
    attributes: p.props.attributes
  })) : [], c = () => t ? u() : o && s ? [{ href: o, text: s }] : e, d = () => {
    const g = c();
    if (g && g.length > 0) {
      const p = g.slice().reverse().find((x) => x.href && !x.active);
      if (p)
        return { href: p.href, text: p.text };
    }
    return { text: "Home" };
  }, f = c(), h = d(), m = ye(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    n
  ), b = a;
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: m,
      "aria-label": b,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          Dt.Children.map(t, (g, p) => Dt.isValidElement(g) && (g.type === fa || g.type?.displayName === "BreadcrumbItem") ? Dt.cloneElement(g, { key: p }) : null)
        ) : (
          // Render from items array
          f?.filter((g) => g.active || !!g.href).map((g, p) => /* @__PURE__ */ r.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: g.active ? /* @__PURE__ */ r.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...g.attributes || {},
              children: g.text
            }
          ) : /* @__PURE__ */ r.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: g.href,
              role: "link",
              ...g.attributes || {},
              children: g.text
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
}, Bp = Rp;
Bp.Item = fa;
fa.displayName = "BreadcrumbItem";
const jl = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [o, s] = Oe(!1);
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
  const i = ye("nhsuk-skip-link", n);
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
}, Hv = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = ye("nhsuk-pagination", o);
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
}, Ov = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = ye("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ r.jsx(
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
}, Tl = Dt.forwardRef(({
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
  ].filter(Boolean).join(" "), m = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), b = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), g = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const k = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      mn,
      {
        level: a,
        className: b,
        children: k()
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
        /* @__PURE__ */ r.jsxs("div", { className: m, children: [
          g(),
          p(),
          x()
        ] })
      ]
    }
  );
});
Tl.displayName = "Card";
const Uv = ({
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
}, Wv = ({
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
}, zv = ({
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
  "aria-describedby": m
}) => {
  const b = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), g = [
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
    }[e], $ = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
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
        className: g,
        children: $
      }
    );
  }, x = () => u || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: b,
      "data-testid": c,
      id: d,
      "aria-label": f,
      "aria-labelledby": h,
      "aria-describedby": m,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          p(),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: x() })
      ]
    }
  );
}, Hp = ({
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
  const c = ye(
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
}, Vv = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...o
}) => {
  const s = ye("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: s, ...o, children: i() });
}, Gv = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...a
}) => {
  const o = ye(
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
}, Nr = { current: null }, Op = () => {
  if (Nr.current) return Nr.current;
  try {
    Nr.current = require("prismjs");
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
    Nr.current = null;
  }
  return Nr.current;
}, Up = (e) => {
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
  const a = Op();
  if (a && a.languages) {
    const o = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (o)
      try {
        return a.highlight(e, a.languages[o], o);
      } catch {
      }
  }
  return Up(e);
}, Wp = ({
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
  "data-testid": m,
  columns: b,
  data: g,
  visuallyHiddenCaption: p = !1
}) => {
  const x = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), k = ye(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    d
  ), $ = ye(f), T = (y, N) => {
    const w = ye(
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
      const S = Array.isArray(y.code), j = S ? y.code.join(`
`) : y.code, C = S || j.includes(`
`), I = {
        className: ye("nhsuk-table__code", y.codeClassName, {
          "nhsuk-table__code--block": C,
          "nhsuk-table__code--inline": !C
        }),
        ...y.codeLanguage ? { "data-language": y.codeLanguage } : {}
      }, te = pa(j, y.codeLanguage);
      F = C ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
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
      F = y.text;
    return /* @__PURE__ */ r.jsx("th", { className: w, ..._, children: F }, N);
  }, v = (y, N, w) => {
    const _ = o && w || y.rowHeader, F = ye(
      _ ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${_ ? "header" : "cell"}--${y.format}`]: y.format
      },
      y.classes
    ), S = {
      ..._ && { scope: "row" },
      ...y.colspan && { colSpan: y.colspan },
      ...y.rowspan && { rowSpan: y.rowspan },
      ...s && {
        role: _ ? "rowheader" : "cell",
        ...y.header && { "data-label": y.header }
      },
      ...y.attributes
    };
    let j;
    if (y.node != null)
      j = /* @__PURE__ */ r.jsx(r.Fragment, { children: y.node });
    else if (y.html)
      j = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } });
    else if (y.code != null) {
      const te = Array.isArray(y.code), V = te ? y.code.join(`
`) : y.code, B = te || V.includes(`
`), H = {
        className: ye("nhsuk-table__code", y.codeClassName, {
          "nhsuk-table__code--block": B,
          "nhsuk-table__code--inline": !B
        }),
        ...y.codeLanguage ? { "data-language": y.codeLanguage } : {}
      }, O = pa(
        V,
        y.codeLanguage,
        y.disableHighlight
      );
      j = B ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: O }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: O }
        }
      );
    } else
      j = y.text;
    const C = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      s && y.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        y.header,
        " "
      ] }),
      j
    ] }), I = _ ? "th" : "td";
    return /* @__PURE__ */ r.jsx(I, { className: F, ...S, children: C }, N);
  };
  let M = t, D = e;
  !M && b && b.length && (M = b.map((y) => ({
    text: y.title,
    format: y.format,
    classes: y.headerClasses,
    attributes: y.headerAttributes
  }))), !D && b && g && g.length && (D = g.map((y, N) => b.map((w) => {
    const _ = w.accessor ? w.accessor(y, N) : y[w.key];
    let F = { format: w.format, classes: w.cellClasses, attributes: w.cellAttributes };
    if (w.rowHeader && (F.rowHeader = !0), w.render) {
      const S = w.render(_, y, N, w);
      return S == null || typeof S == "boolean" ? { ...F, text: "" } : typeof S == "string" || typeof S == "number" ? { ...F, text: String(S) } : { ...F, ...S };
    }
    return { ...F, text: _ != null ? String(_) : "" };
  })));
  const P = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: k,
      ...s && { role: "table" },
      ...h,
      ...m && { "data-testid": m },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: ye(x, p && "nhsuk-u-visually-hidden"), children: n }),
        M && M.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...s && { role: "row" }, children: M.map(
              (y, N) => T(y, N)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: D && D.map((y, N) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: y.map(
              (w, _) => v(w, _, _ === 0)
            )
          },
          N
        )) })
      ]
    }
  );
  return u ? /* @__PURE__ */ r.jsxs(Hp, { className: c, children: [
    i && /* @__PURE__ */ r.jsx(mn, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    P()
  ] }) : $ ? /* @__PURE__ */ r.jsx("div", { className: $, children: P() }) : P();
}, zp = ({
  children: e,
  size: t,
  className: n
}) => {
  const a = ye(
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
  as: m = "th"
}) => {
  const b = ye(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    u
  ), g = {
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
    const k = Array.isArray(a), $ = k ? a.join(`
`) : a, T = k || $.includes(`
`), v = {
      className: ye("nhsuk-table__code", s, {
        "nhsuk-table__code--block": T,
        "nhsuk-table__code--inline": !T
      }),
      ...o ? { "data-language": o } : {}
    }, M = pa(
      $,
      o,
      i
    );
    p = T ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...v,
        dangerouslySetInnerHTML: { __html: M }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...v, dangerouslySetInnerHTML: { __html: M } });
  } else p = e;
  const x = m;
  return /* @__PURE__ */ r.jsx(x, { className: b, ...g, children: p });
}, Vp = ({
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
  rowHeader: m
}) => {
  const b = !!m, g = b ? "th" : "td", p = ye(
    b ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${b ? "header" : "cell"}--${l}`,
    u
  ), x = {
    ...c && { colSpan: c },
    ...d && { rowSpan: d },
    ...b && { scope: "row" },
    ...h && { role: b ? "rowheader" : "cell" },
    ...f
  };
  let k;
  if (n != null) k = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) k = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const $ = Array.isArray(a), T = $ ? a.join(`
`) : a, v = $ || T.includes(`
`), M = {
      className: ye("nhsuk-table__code", s, {
        "nhsuk-table__code--block": v,
        "nhsuk-table__code--inline": !v
      }),
      ...o ? { "data-language": o } : {}
    }, D = pa(T, o, i);
    k = v ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ...M, dangerouslySetInnerHTML: { __html: D } }) }) : /* @__PURE__ */ r.jsx("code", { ...M, dangerouslySetInnerHTML: { __html: D } });
  } else k = e;
  return /* @__PURE__ */ r.jsx(g, { className: p, ...x, children: k });
}, bn = Wp;
bn.Caption = zp;
bn.BodyRow = Dl;
bn.HeaderCell = Il;
bn.Cell = Vp;
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
const Yv = hr(({
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
  const m = n !== void 0, [b, g] = Oe(() => t || e[0]?.id || ""), p = m ? n : b, x = Ue(null), k = Ue(/* @__PURE__ */ new Map()), $ = ve((N) => {
    m || g(N), a?.(N);
  }, [m, a]), T = ve((N) => {
    o?.(N), l && $(N);
  }, [o, l, $]), v = ve((N, w) => {
    const _ = e.filter((j) => !j.disabled).map((j) => j.id), F = _.indexOf(w);
    let S = null;
    switch (N.key) {
      case "ArrowLeft":
        S = F > 0 ? F - 1 : _.length - 1;
        break;
      case "ArrowRight":
        S = F < _.length - 1 ? F + 1 : 0;
        break;
      case "Home":
        S = 0;
        break;
      case "End":
        S = _.length - 1;
        break;
      case "Escape":
        N.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (S !== null) {
      N.preventDefault();
      const j = _[S], C = k.current.get(j);
      C && (C.focus(), T(j));
    }
  }, [e, T, i]), M = ve((N, w) => {
    w ? k.current.set(N, w) : k.current.delete(N);
  }, []), D = ve((N) => {
    const w = k.current.get(N);
    w && w.focus();
  }, []);
  Xi(h, () => ({
    focusTab: D,
    getActiveTab: () => p,
    getTabListElement: () => x.current
  }), [D, p]);
  const P = ve((N) => {
    const w = N.relatedTarget;
    x.current?.contains(w) || s?.();
  }, [s]), y = ye("nhsuk-tabs", u);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: y,
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
                onBlur: P,
                children: e.map((N) => {
                  const w = N.id === p, _ = N.disabled, F = ye("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": w,
                    "nhsuk-tabs__list-item--disabled": _
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: F, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (S) => M(N.id, S),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": w,
                      "aria-controls": `${N.id}-panel`,
                      id: `${N.id}-tab`,
                      tabIndex: w ? 0 : -1,
                      disabled: _,
                      onClick: () => !_ && $(N.id),
                      onKeyDown: (S) => !_ && v(S, N.id),
                      onFocus: () => !_ && T(N.id),
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
          const w = N.id === p;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${N.id}-tab`,
              id: `${N.id}-panel`,
              hidden: !w,
              children: N.content
            },
            N.id
          );
        })
      ]
    }
  );
}), Gp = hr(
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
Gp.displayName = "Details";
const Yp = hr(
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
    ), f = (m) => t === "cross" && !a ? `do not ${m}` : m, h = () => /* @__PURE__ */ r.jsx(
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
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: c.join(" "), role: "list", children: n.map((m, b) => /* @__PURE__ */ r.jsxs("li", { children: [
            d(),
            f(m.item)
          ] }, b)) }) })
        ]
      }
    );
  }
);
Yp.displayName = "DoDontList";
const qp = hr(
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
qp.displayName = "Expander";
const Xp = hr(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, u) => {
      const c = u + 1, d = `${t}-${c}-hint`, f = `${t}-${c}-status`, h = !!l.href, m = [
        "nhsuk-task-list__item",
        h && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), b = [
        l.hint && d,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        Kp,
        {
          item: l,
          itemClasses: m,
          hasLink: h,
          hintId: d,
          statusId: f,
          ariaDescribedBy: b
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
), Kp = ({
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
Xp.displayName = "TaskList";
const qv = ({
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
}, Xv = ({
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
}, Jp = ({
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
] }), Zp = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(Je, { color: Qp(n.status), text: n.label }) }, n.status)) });
function Qp(e) {
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
const Kv = ({
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
  enableDefaultLegend: m = !0,
  legendPlacement: b = "bottom",
  onA11yModeChange: g
}) => {
  const [p, x] = Oe("grid"), k = i || p, [$, T] = Oe(a || []), v = n ?? $, M = Le(() => {
    const S = /* @__PURE__ */ new Set();
    return e.forEach((j) => S.add(new Date(j.start).getTime())), Array.from(S).sort((j, C) => j - C);
  }, [e]), D = Le(() => {
    const S = {};
    return e.forEach((j) => {
      const C = new Date(j.start).getTime();
      S[C] || (S[C] = {});
      const I = j.capacity - j.booked - (j.held || 0);
      S[C][j.sessionId] = { slot: j, remaining: I };
    }), S;
  }, [e]), P = ve((S) => {
    if (s === "single") {
      const j = [S.id];
      n || T(j), o?.(j, { lastAction: "select" });
    } else {
      const j = v.includes(S.id), C = j ? v.filter((I) => I !== S.id) : [...v, S.id];
      n || T(C), o?.(C, { lastAction: j ? "deselect" : "select" });
    }
  }, [s, v, n, o]), y = Le(() => h || (m ? Array.from(new Set(e.map((j) => j.status))).map((j) => ({
    status: j,
    label: j.charAt(0).toUpperCase() + j.slice(1)
  })) : void 0), [h, m, e]), N = y ? /* @__PURE__ */ r.jsx(
    Zp,
    {
      items: y,
      orientation: b === "left" || b === "right" ? "vertical" : "horizontal"
    }
  ) : null, w = (S) => {
    i || x(S), g?.(S);
  }, _ = d || (f ? /* @__PURE__ */ r.jsx(
    Jp,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: k,
      onA11yModeChange: w
    }
  ) : null), F = /* @__PURE__ */ r.jsx("div", { style: u, className: ye(l), children: /* @__PURE__ */ r.jsx(Cs, { className: ye("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Hn, { children: /* @__PURE__ */ r.jsx(Dr, { width: Bn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    _,
    b === "top" && N,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((S) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => P(S), "aria-pressed": v.includes(S.id), children: [
      jr(new Date(S.start)),
      " – ",
      jr(new Date(S.end)),
      " (",
      S.status,
      ")"
    ] }) }, S.id)) }),
    b === "bottom" && N
  ] }) }) }) }) });
  return k === "list" ? F : /* @__PURE__ */ r.jsx("div", { style: u, className: ye(l), children: /* @__PURE__ */ r.jsx(Cs, { className: ye("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Hn, { children: /* @__PURE__ */ r.jsx(Dr, { width: Bn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    _,
    b === "top" && N,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": M.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((S) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${S.specialty}`, className: "nhs-slot-matrix__session-header", children: S.specialty }, S.id))
      ] }),
      M.map((S) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": jr(new Date(S)), children: jr(new Date(S)) }),
        t.map((j) => {
          const C = D[S]?.[j.id];
          if (!C)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, j.id);
          const { slot: I, remaining: te } = C, V = v.includes(I.id), B = c ? c(I) : `Slot ${jr(new Date(I.start))} ${I.status}${te === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": I.status,
              className: ye("nhs-slot-matrix__cell", V && "nhs-slot-matrix__cell--selected"),
              "aria-label": B,
              "aria-selected": V || void 0,
              onClick: () => P(I),
              children: te > 0 ? `${te} left` : "Full"
            },
            I.id
          );
        })
      ] }, S))
    ] }),
    b === "bottom" && N
  ] }) }) }) }) });
};
function bi(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function jr(e) {
  return `${bi(e.getHours())}:${bi(e.getMinutes())}`;
}
const eh = ({
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
}, Jv = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(Cs, { children: /* @__PURE__ */ r.jsx(Hn, { children: e.map((o, s) => /* @__PURE__ */ r.jsx(
    Dr,
    {
      width: Bn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ r.jsx(eh, { ...o })
    },
    s
  )) }) }) });
}, th = Dt.forwardRef(
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
    bordered: m = !1,
    striped: b = !1,
    responsive: g = !1,
    tableType: p = "default"
  }, x) => {
    const k = Ue(null), $ = Ue(null), T = Ue(null);
    Dt.useImperativeHandle(x, () => k.current, []);
    const [v, M] = Oe(0), [D, P] = Oe(0), [y, N] = Oe("headers"), [w, _] = Oe("browse"), F = t.length, S = e.length, j = Le(() => !n || n.length === 0 ? e : [...e].sort((O, ae) => {
      for (const { key: W, direction: ie } of n) {
        const je = O[W], ce = ae[W];
        if (je == null && ce == null) continue;
        if (je == null) return 1;
        if (ce == null) return -1;
        let ue = 0;
        if (typeof je == "number" && typeof ce == "number" ? ue = je - ce : ue = String(je).localeCompare(String(ce)), ue !== 0)
          return ie === "asc" ? ue : -ue;
      }
      return 0;
    }), [e, n]), C = ve((O, ae) => {
      setTimeout(() => {
        const W = k.current?.querySelector(
          `tbody tr:nth-child(${O + 1}) td:nth-child(${ae + 1})`
        );
        W && (W.focus(), typeof W.scrollIntoView == "function" && W.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), I = ve((O) => {
      setTimeout(() => {
        const ae = k.current?.querySelector(`th:nth-child(${O + 1})`);
        ae && (ae.focus(), typeof ae.scrollIntoView == "function" && ae.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), te = ve((O) => {
      a?.(O);
    }, [a]), V = ve((O) => {
      s?.(O);
    }, [s]), B = ve((O) => {
      const { key: ae } = O;
      switch (ae) {
        case "Enter":
          if (O.preventDefault(), y === "headers" && w === "browse")
            _("navigate"), I(D);
          else if (y === "headers" && w === "navigate") {
            const W = t[D];
            W && te(W.key);
          } else y === "cells" && w === "browse" ? (_("navigate"), C(v, D)) : y === "cells" && w === "navigate" && V(v);
          break;
        case "Escape":
          O.preventDefault(), (y === "headers" && w === "navigate" || y === "cells" && w === "navigate") && _("browse");
          break;
        case "ArrowLeft":
          if (O.preventDefault(), w === "navigate" || w === "browse" && y === "headers") {
            if (y === "headers") {
              const W = Math.max(0, D - 1);
              P(W), I(W);
            } else if (y === "cells") {
              const W = Math.max(0, D - 1);
              P(W), C(v, W);
            }
          }
          break;
        case "ArrowRight":
          if (O.preventDefault(), w === "navigate" || w === "browse" && y === "headers") {
            if (y === "headers") {
              const W = Math.min(F - 1, D + 1);
              P(W), I(W);
            } else if (y === "cells") {
              const W = Math.min(F - 1, D + 1);
              P(W), C(v, W);
            }
          }
          break;
        case "ArrowUp":
          if (O.preventDefault(), y === "cells") {
            if (w === "browse") {
              const W = Math.max(0, v - 1);
              M(W), C(W, 0), P(0);
            } else if (w === "navigate")
              if (v > 0) {
                const W = v - 1;
                M(W), C(W, D);
              } else
                N("headers"), _("browse"), I(D);
          }
          break;
        case "ArrowDown":
          if (O.preventDefault(), y === "headers" && w === "browse")
            N("cells"), M(0), P(0), C(0, 0);
          else if (y === "cells") {
            const W = S - 1;
            if (w === "browse") {
              const ie = Math.min(W, v + 1);
              M(ie), C(ie, 0), P(0);
            } else if (w === "navigate" && v < W) {
              const ie = v + 1;
              M(ie), C(ie, D);
            }
          }
          break;
        case "Home":
          O.preventDefault(), y === "headers" ? (P(0), I(0)) : y === "cells" && (O.ctrlKey ? (M(0), P(0), C(0, 0)) : (P(0), C(v, 0)));
          break;
        case "End":
          if (O.preventDefault(), y === "headers") {
            const W = F - 1;
            P(W), I(W);
          } else if (y === "cells")
            if (O.ctrlKey) {
              const W = S - 1, ie = F - 1;
              M(W), P(ie), C(W, ie);
            } else {
              const W = F - 1;
              P(W), C(v, W);
            }
          break;
        case " ":
          if (O.preventDefault(), y === "headers" && w === "navigate") {
            const W = t[D];
            W && te(W.key);
          } else y === "cells" && w === "navigate" && V(v);
          break;
      }
    }, [
      y,
      w,
      D,
      v,
      F,
      S,
      t,
      C,
      I,
      te,
      V
    ]);
    Ze(() => {
      const O = k.current;
      if (O)
        return O.addEventListener("keydown", B), () => O.removeEventListener("keydown", B);
    }, [B]);
    const H = ye(
      "nhsuk-table",
      h,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": m,
        "nhsuk-table--striped": b,
        "nhsuk-table--compact": p === "compact"
      },
      f
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: k,
        className: H,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": u,
        "aria-labelledby": c,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: $, role: "row", children: t.map((O, ae) => {
            const W = n?.find((ce) => ce.key === O.key), ie = !!W, je = y === "headers" && D === ae;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: ye("sortable-header", {
                  "sortable-header--focused": je
                }),
                role: "columnheader",
                tabIndex: je ? 0 : -1,
                onClick: () => te(O.key),
                onKeyDown: (ce) => {
                  (ce.key === "Enter" || ce.key === " ") && (ce.preventDefault(), te(O.key));
                },
                "aria-sort": ie ? W?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: O.label }),
                  ie && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((ce) => ce.key === O.key) + 1 }),
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
              O.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: T, className: "nhsuk-table__body", role: "rowgroup", children: j.map((O, ae) => {
            const W = o === ae, ie = y === "cells" && v === ae;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: ye("data-row", {
                  "data-row--selected": W,
                  "data-row--focused": ie
                }),
                "aria-selected": W,
                children: t.map((je, ce) => {
                  const ue = je.tableRenderer ? je.tableRenderer(O) : je.render ? je.render(O) : O[je.key], J = y === "cells" && v === ae && D === ce, ne = () => typeof ue == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: ue ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: ue ? "Yes" : "No" })
                  ] }) : String(ue ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ye("data-cell", {
                        "data-cell--focused": J
                      }),
                      tabIndex: J ? 0 : -1,
                      onClick: () => V(ae),
                      children: ne()
                    },
                    je.key
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
th.displayName = "AriaDataGrid";
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
  const f = Ue(null), h = Ue(null), m = Ue(null), b = ve((y, N) => {
    u || (h.current = N, y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", N));
  }, [u]), g = ve((y, N) => {
    u || h.current === N || (y.preventDefault(), y.dataTransfer.dropEffect = "move", m.current = N);
  }, [u]), p = ve((y, N) => {
    if (u) return;
    y.preventDefault();
    const w = h.current;
    if (!w || w === N) return;
    const _ = e.findIndex((S) => S.key === w), F = e.findIndex((S) => S.key === N);
    if (_ !== -1 && F !== -1) {
      const S = [...e], [j] = S.splice(_, 1);
      S.splice(F, 0, j), n(S);
    }
    h.current = null, m.current = null;
  }, [u, e, n]), x = ve(() => {
    h.current = null, m.current = null;
  }, []), k = ve((y) => {
    const N = t.find((w) => w.key === y);
    return N ? N.label : y;
  }, [t]), $ = ve((y) => ["red", "orange", "blue", "aqua-green", "grey"][y] || "grey", []), T = ve((y) => {
    if (u) return;
    const N = e.map(
      (w) => w.key === y ? { ...w, direction: w.direction === "asc" ? "desc" : "asc" } : w
    );
    n(N);
  }, [e, n, u]), v = ve((y) => {
    if (u) return;
    const N = e.filter((w) => w.key !== y);
    n(N);
  }, [e, n, u]), M = ve(() => {
    u || n([]);
  }, [n, u]), D = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const y = e.map((N, w) => {
      const _ = N.direction === "asc" ? "ascending" : "descending";
      return `${w + 1}. ${k(N.key)} (${_})`;
    });
    if (y.length === 1)
      return `Sorted by: ${y[0]}`;
    if (y.length === 2)
      return `Sorted by: ${y.join(" and ")}`;
    {
      const N = y.pop();
      return `Sorted by: ${y.join(", ")}, and ${N}`;
    }
  }, P = Le(() => {
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
        children: D()
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
          "aria-describedby": P,
          children: e.map((y, N) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !u,
              onDragStart: (w) => b(w, y.key),
              onDragOver: (w) => g(w, y.key),
              onDrop: (w) => p(w, y.key),
              onDragEnd: x,
              onClick: () => T(y.key),
              style: { cursor: u ? "default" : "pointer" },
              title: u ? "" : `Click to toggle sort direction. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": y.key,
              children: /* @__PURE__ */ r.jsx(
                Je,
                {
                  color: $(N),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => v(y.key),
                  disabled: u,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${N + 1}`, children: N + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: k(y.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (w) => {
                          w.stopPropagation(), T(y.key);
                        },
                        disabled: u,
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
        bt,
        {
          variant: "secondary",
          onClick: M,
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
const $s = hr(function(t, n) {
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
    id: m,
    isLoading: b = !1,
    loadingComponent: g,
    error: p = null,
    errorComponent: x,
    "data-testid": k,
    actions: $,
    actionsMinGap: T = 16,
    forceActionsAbove: v = !1
  } = t, D = Ue(
    m || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, P = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), y = `${D}-description`, N = `${D}-navigation-help`, {
    dataComparator: w = (L, Y) => JSON.stringify(L) === JSON.stringify(Y),
    filterFunction: _ = (L) => L,
    booleanRenderer: F = (L) => L ? "✓" : "✗"
  } = a || {}, S = s !== void 0, j = s ?? 0, [C, I] = Oe({
    focusArea: "tabs",
    focusedTabIndex: j,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), te = Le(() => ({
    selectedIndex: j,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [j]), [V, B] = Ki(nh, te);
  Ze(() => {
    const L = V.tabLoadingStates.length, Y = o.length;
    L !== Y && B({ type: "ADJUST_ARRAYS", payload: { newLength: Y } });
  }, [o.length]), Ze(() => {
    S && B({ type: "SET_SELECTED_INDEX", payload: j });
  }, [j, S]), Ze(() => {
    I((L) => ({
      ...L,
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
  const H = ve(
    (L, Y) => w(L, Y),
    [w]
  ), O = ve(
    (L) => {
      L >= 0 && L < o.length && !o[L].disabled && (B({ type: "SET_SELECTED_INDEX", payload: L }), I((Y) => ({
        ...Y,
        focusedTabIndex: L,
        focusArea: "tabs"
      })), i?.(L));
    },
    [o, i]
  ), ae = Ue(!1), W = ve(
    (L, Y) => {
      if (!Y?.force && !ae.current && L === 0) {
        ae.current = !0;
        return;
      }
      ae.current = !0, setTimeout(() => {
        const Z = ie.current[L], ee = Z?.parentElement;
        if (Z && ee) {
          const K = Z.offsetLeft, re = Z.offsetWidth, me = ee.clientWidth, be = K - me / 2 + re / 2;
          try {
            ee.scrollTo({
              left: Math.max(0, be),
              behavior: "smooth"
            });
          } catch {
            Z.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!Z,
          tabListElementExists: !!ee
        });
      }, 50);
    },
    []
  ), ie = Ue([]), je = Ue([]), ce = ve(
    (L, Y) => {
      const Z = V.sortConfig || [], ee = Z.find(
        (me) => me.key === Y
      );
      let K;
      ee ? ee.direction === "asc" ? K = Z.map(
        (me) => me.key === Y ? { ...me, direction: "desc" } : me
      ) : K = Z.filter(
        (me) => me.key !== Y
      ) : K = [...Z, { key: Y, direction: "asc" }], B({
        type: "SET_SORT",
        payload: K
      }), o[L].onSort?.(Y);
    },
    [V.sortConfig, o]
  ), ue = ve(
    (L) => {
      setTimeout(() => {
        const Y = document.querySelector(
          `[data-tab-panel="${V.selectedIndex}"] th:nth-child(${L + 1})`
        );
        Y && Y.focus();
      }, 0);
    },
    [V.selectedIndex]
  ), J = ve(
    (L) => F(L),
    [F]
  ), ne = ve(
    (L, Y) => {
      setTimeout(() => {
        const Z = document.querySelector(
          `[data-tab-panel="${V.selectedIndex}"] tbody tr:nth-child(${L + 1}) td:nth-child(${Y + 1})`
        );
        Z && Z.focus();
      }, 0);
    },
    [V.selectedIndex]
  );
  Ze(() => {
    C.isGridActive && (C.focusArea === "headers" ? setTimeout(() => {
      ue(C.focusedHeaderIndex);
    }, 0) : C.focusArea === "cells" && setTimeout(() => {
      ne(
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
    ue,
    ne
  ]), Ze(() => {
    W(V.selectedIndex);
  }, [V.selectedIndex, W]);
  const de = ve(
    (L, Y) => {
      const { key: Z } = L, ee = o[V.selectedIndex], K = ee?.columns.length || 0;
      switch (Z) {
        case "ArrowLeft":
          L.preventDefault();
          const re = Math.max(0, Y - 1);
          I((we) => ({
            ...we,
            focusedHeaderIndex: re
          })), ue(re);
          break;
        case "ArrowRight":
          L.preventDefault();
          const me = Math.min(K - 1, Y + 1);
          I((we) => ({
            ...we,
            focusedHeaderIndex: me
          })), ue(me);
          break;
        case "ArrowUp":
          L.preventDefault(), I((we) => ({
            ...we,
            focusArea: "tabs",
            focusedTabIndex: V.selectedIndex
          })), W(V.selectedIndex), ie.current[V.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          L.preventDefault(), I((we) => ({
            ...we,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: Y,
            isGridActive: !0
          }));
          break;
        case "Home":
          L.preventDefault(), I((we) => ({ ...we, focusedHeaderIndex: 0 })), ue(0);
          break;
        case "End":
          L.preventDefault();
          const be = K - 1;
          I((we) => ({
            ...we,
            focusedHeaderIndex: be
          })), ue(be);
          break;
        case "Enter":
        case " ":
          L.preventDefault();
          const Ce = ee?.columns[Y]?.key;
          Ce && ce(V.selectedIndex, Ce);
          break;
      }
    },
    [
      o,
      V.selectedIndex,
      ce,
      I,
      ue,
      ne,
      ie
    ]
  ), G = ve(
    (L, Y, Z) => {
      const { key: ee } = L, K = o[V.selectedIndex], re = K?.data.length || 0, me = K?.columns.length || 0;
      switch (ee) {
        case "ArrowUp":
          if (L.preventDefault(), Y === 0)
            I((ge) => ({
              ...ge,
              focusArea: "headers",
              focusedHeaderIndex: Z,
              isGridActive: !1
            })), ue(Z);
          else {
            const ge = Y - 1;
            I((Pe) => ({
              ...Pe,
              focusedRowIndex: ge
            })), ne(ge, Z);
          }
          break;
        case "ArrowDown":
          L.preventDefault();
          const be = Math.min(re - 1, Y + 1);
          I((ge) => ({
            ...ge,
            focusedRowIndex: be
          })), ne(be, Z);
          break;
        case "ArrowLeft":
          L.preventDefault();
          const Ce = Math.max(0, Z - 1);
          I((ge) => ({
            ...ge,
            focusedColumnIndex: Ce
          })), ne(Y, Ce);
          break;
        case "ArrowRight":
          L.preventDefault();
          const we = Math.min(me - 1, Z + 1);
          I((ge) => ({
            ...ge,
            focusedColumnIndex: we
          })), ne(Y, we);
          break;
        case "Home":
          L.preventDefault(), L.ctrlKey ? (I((ge) => ({
            ...ge,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), ne(0, 0)) : (I((ge) => ({ ...ge, focusedColumnIndex: 0 })), ne(Y, 0));
          break;
        case "End":
          if (L.preventDefault(), L.ctrlKey) {
            const ge = re - 1, Pe = me - 1;
            I((We) => ({
              ...We,
              focusedRowIndex: ge,
              focusedColumnIndex: Pe
            })), ne(ge, Pe);
          } else {
            const ge = me - 1;
            I((Pe) => ({
              ...Pe,
              focusedColumnIndex: ge
            })), ne(Y, ge);
          }
          break;
        case "Enter":
        case " ":
          if (L.preventDefault(), K && K.data[Y]) {
            const ge = K.data.some(
              (at) => "ews_data" in at
            ) ? _(K.data, V.filters) : K.data, Pe = V.sortConfig;
            let We = ge;
            if (Pe && Pe.length > 0 && (We = [...ge].sort((at, ze) => {
              for (const { key: Qe, direction: Pt } of Pe) {
                let St = at[Qe], vt = ze[Qe];
                const st = K.columns.find(
                  (Jt) => Jt.key === Qe
                );
                if (st?.tableRenderer ? (St = st.tableRenderer(at), vt = st.tableRenderer(ze)) : st?.render && (St = st.render(at), vt = st.render(ze)), St == null && vt == null) continue;
                if (St == null) return Pt === "asc" ? -1 : 1;
                if (vt == null) return Pt === "asc" ? 1 : -1;
                let it = 0;
                if (typeof St == "number" && typeof vt == "number" ? it = St - vt : it = String(St).localeCompare(
                  String(vt),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), it !== 0)
                  return Pt === "asc" ? it : -it;
              }
              return 0;
            })), We[Y]) {
              const at = We[Y], Qe = V.globalSelectedRowData && H(V.globalSelectedRowData, at) ? null : at;
              B({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: Qe
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
      _,
      H,
      B,
      I,
      ue,
      ne
    ]
  ), fe = ve(
    (L, Y) => _(L, Y),
    [_]
  );
  if (Xi(
    n,
    () => ({
      selectTab: (L) => {
        L >= 0 && L < o.length && (B({ type: "SET_SELECTED_INDEX", payload: L }), i?.(L));
      },
      refreshData: (L) => {
        console.log("Refreshing data for tab:", L ?? "all");
      },
      exportData: (L) => {
        const Y = L ?? V.selectedIndex, Z = o[Y];
        return Z ? Z.data : [];
      },
      getSelectedRows: (L) => V.globalSelectedRowData ? [] : [],
      clearSelection: (L) => {
        B({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (L) => {
        B({ type: "SET_FILTERS", payload: L });
      }
    }),
    [V.selectedIndex, V.selectedRows, o, i]
  ), b)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`,
        "data-testid": k,
        children: g || /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ r.jsx(
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
        children: x || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: p })
        ] })
      }
    );
  const oe = Ue(null), A = Ue(null), R = Ue(null), [Q, pe] = Oe(!0);
  Ze(() => {
    if (!$) {
      pe(!1);
      return;
    }
    if (v) {
      pe(!1);
      return;
    }
    function L() {
      if (!oe.current || !A.current || !R.current) return;
      const ee = oe.current.clientWidth, K = Array.from(
        A.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), re = K.reduce((we, ge) => we + ge.offsetWidth, 0), me = R.current.offsetWidth, be = Math.max(8 * (K.length - 1), 0), Ce = re + be + me + T <= ee;
      pe(Ce);
    }
    const Y = requestAnimationFrame(() => L()), Z = new ResizeObserver(() => L());
    return oe.current && Z.observe(oe.current), A.current && Z.observe(A.current), () => {
      cancelAnimationFrame(Y), Z.disconnect();
    };
  }, [$, T, v, o.length]);
  const le = R, se = ve(() => le.current ? Array.from(
    le.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((L) => !L.hasAttribute("disabled")) : [], []), E = ve(
    (L) => {
      const Y = se();
      if (!Y.length) return;
      const Z = Math.max(0, Math.min(L, Y.length - 1));
      Y[Z].focus(), I((ee) => ({ ...ee, focusArea: "actions", focusedActionIndex: Z }));
    },
    [se]
  ), U = ve(() => E(0), [E]), z = ve(
    (L, Y) => {
      const { key: Z } = L, ee = o.length - 1;
      switch (Z) {
        case "ArrowUp": {
          $ && !Q && (L.preventDefault(), U());
          break;
        }
        case "ArrowLeft": {
          L.preventDefault();
          const K = Y > 0 ? Y - 1 : ee;
          O(K), W(K), ie.current[K]?.focus();
          break;
        }
        case "ArrowRight": {
          if (L.preventDefault(), Y === ee && $ && Q) {
            U();
            return;
          }
          const K = Y < ee ? Y + 1 : 0;
          O(K), W(K), ie.current[K]?.focus();
          break;
        }
        case "ArrowDown": {
          L.preventDefault(), I((K) => ({
            ...K,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          L.preventDefault(), O(0), W(0), ie.current[0]?.focus();
          break;
        }
        case "End": {
          L.preventDefault(), O(ee), W(ee), ie.current[ee]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          L.preventDefault(), O(Y);
          break;
        }
        case "Tab": {
          !L.shiftKey && Y === ee && $ && Q && U();
          break;
        }
      }
    },
    [o.length, O, W, $, Q, U]
  ), X = ve((L) => {
    const { key: Y } = L, Z = se();
    if (!Z.length) return;
    const ee = Z.findIndex((K) => K === document.activeElement);
    switch (Y) {
      case "ArrowLeft": {
        if (Q)
          if (ee > 0)
            L.preventDefault(), E(ee - 1);
          else {
            L.preventDefault();
            const K = o.length - 1;
            O(K), W(K), ie.current[K]?.focus(), I((re) => ({ ...re, focusArea: "tabs", focusedTabIndex: K }));
          }
        break;
      }
      case "ArrowRight": {
        Q && (ee < Z.length - 1 ? (L.preventDefault(), E(ee + 1)) : (L.preventDefault(), O(0), W(0), ie.current[0]?.focus(), I((K) => ({ ...K, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (Q)
          L.preventDefault(), I((K) => ({ ...K, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          L.preventDefault();
          const K = V.selectedIndex;
          ie.current[K]?.focus(), I((re) => ({ ...re, focusArea: "tabs", focusedTabIndex: K }));
        }
        break;
      }
    }
  }, [se, Q, E, o.length, O, W, V.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${d}`,
      id: m,
      "data-testid": k,
      ref: oe,
      children: [
        c && !P && /* @__PURE__ */ r.jsx("div", { id: y, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: N,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          $l,
          {
            sortConfig: V.sortConfig || [],
            columns: o.flatMap(
              (L) => L.columns.map((Y) => ({ key: Y.key, label: Y.label }))
            ).filter(
              (L, Y, Z) => Z.findIndex((ee) => ee.key === L.key) === Y
              // Remove duplicates
            ),
            onSortChange: (L) => {
              B({ type: "SET_SORT", payload: L });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        $ && !Q && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: R,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: X,
            children: $
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${Q ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": u,
              "aria-describedby": c ? P ? c : y : N,
              "aria-orientation": h,
              className: "aria-tabs-datagrid__tabs",
              ref: A,
              children: o.map((L, Y) => {
                const Z = Y === V.selectedIndex, ee = L.disabled || f;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${L.id}`,
                    "aria-controls": `panel-${L.id}`,
                    "aria-selected": Z,
                    "aria-disabled": ee,
                    tabIndex: Z ? 0 : -1,
                    ref: (K) => {
                      ie.current[Y] = K;
                    },
                    onClick: () => O(Y),
                    onKeyDown: (K) => z(K, Y),
                    disabled: ee,
                    className: [
                      "aria-tabs-datagrid__tab",
                      Z ? "aria-tabs-datagrid__tab--selected" : "",
                      ee ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: L.label }),
                      V.tabLoadingStates[Y] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      V.tabErrors[Y] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  L.id
                );
              })
            }
          ),
          $ && Q && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: R,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: X,
              children: $
            }
          )
        ] }),
        o.map((L, Y) => {
          const Z = Y === V.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${L.id}`,
              "aria-labelledby": `tab-${L.id}`,
              tabIndex: 0,
              hidden: !Z,
              ref: (ee) => {
                je.current[Y] = ee;
              },
              className: `aria-tabs-datagrid__panel ${L.className || ""}`,
              "data-tab-panel": Y,
              children: Z && (() => {
                const ee = L.data.some(
                  (re) => "ews_data" in re
                ) ? fe(L.data, V.filters) : L.data, K = Le(() => {
                  const re = V.sortConfig;
                  return !re || re.length === 0 ? ee : [...ee].sort((me, be) => {
                    for (const { key: Ce, direction: we } of re) {
                      let ge = me[Ce], Pe = be[Ce];
                      const We = L.columns.find(
                        (ze) => ze.key === Ce
                      );
                      if (We?.tableRenderer ? (ge = We.tableRenderer(me), Pe = We.tableRenderer(be)) : We?.render && (ge = We.render(me), Pe = We.render(be)), ge == null && Pe == null) continue;
                      if (ge == null) return 1;
                      if (Pe == null) return -1;
                      let at = 0;
                      if (typeof ge == "number" && typeof Pe == "number" ? at = ge - Pe : typeof ge == "boolean" && typeof Pe == "boolean" ? at = ge === Pe ? 0 : ge ? 1 : -1 : at = String(ge).localeCompare(
                        String(Pe),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), at !== 0)
                        return we === "asc" ? at : -at;
                    }
                    return 0;
                  });
                }, [ee, V.sortConfig, L.columns]);
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
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: L.columns.map((re, me) => {
                        const be = V.sortConfig?.find(
                          (ge) => ge.key === re.key
                        ), Ce = !!be, we = C.focusArea === "headers" && C.focusedHeaderIndex === me;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${we ? "sortable-header--focused" : ""} ${Ce ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: we ? 0 : -1,
                            onClick: () => ce(Y, re.key),
                            onKeyDown: (ge) => de(ge, me),
                            "aria-sort": Ce ? be?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: re.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${Ce ? `sort-indicator--${be?.direction}` : ""}`,
                                  children: [
                                    V.sortConfig && V.sortConfig.length > 0 && V.sortConfig.findIndex(
                                      (ge) => ge.key === re.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${V.sortConfig.findIndex((ge) => ge.key === re.key) + 1}`,
                                        "data-priority": V.sortConfig.findIndex(
                                          (ge) => ge.key === re.key
                                        ) + 1,
                                        title: `Sort priority: ${V.sortConfig.findIndex((ge) => ge.key === re.key) + 1}`,
                                        children: V.sortConfig.findIndex(
                                          (ge) => ge.key === re.key
                                        ) + 1
                                      }
                                    ),
                                    Ce && /* @__PURE__ */ r.jsx(
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
                          re.key
                        );
                      }) }) }),
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: K.map((re, me) => {
                        const be = V.globalSelectedRowData && H(V.globalSelectedRowData, re), Ce = C.focusArea === "cells" && C.focusedRowIndex === me;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${be ? "data-row--selected" : ""} ${Ce ? "data-row--focused" : ""}`,
                            "aria-selected": be,
                            children: L.columns.map((we, ge) => {
                              const Pe = re[we.key];
                              let We;
                              we.tableRenderer ? We = we.tableRenderer(re) : we.render ? We = we.render(re) : We = Pe;
                              const at = C.focusArea === "cells" && C.focusedRowIndex === me && C.focusedColumnIndex === ge, ze = () => {
                                if (we.customRenderer) {
                                  const Qe = we.customRenderer(
                                    Pe,
                                    re
                                  );
                                  return /* @__PURE__ */ r.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: Qe
                                    }
                                  );
                                }
                                return typeof Pe == "boolean" && We === Pe ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  J(Pe),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: Pe ? "Yes" : "No" })
                                ] }) : Dt.isValidElement(We) || typeof We != "object" ? We ?? "" : We;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${at ? "data-cell--focused" : ""}`,
                                  tabIndex: at ? 0 : -1,
                                  onClick: () => {
                                    const Pt = V.globalSelectedRowData && H(
                                      V.globalSelectedRowData,
                                      re
                                    ) ? null : re;
                                    B({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: Pt
                                    });
                                  },
                                  onKeyDown: (Qe) => G(Qe, me, ge),
                                  children: ze()
                                },
                                we.key
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
}), Jr = {
  asc: "↑",
  desc: "↓"
}, rh = (e) => [...e].sort((t, n) => t.priority - n.priority);
function ps(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function ah(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function sh(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function oh(e, t) {
  const n = t.find((o) => o.id === e), a = ah(t);
  return n ? n.priority < a : !1;
}
const Zv = ({
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
  const d = Le(() => rh(e), [e]), f = ve((k) => {
    if (l) return;
    const $ = e.map(
      (T) => T.id === k ? { ...T, direction: T.direction === "asc" ? "desc" : "asc" } : T
    );
    t($);
  }, [e, t, l]), h = ve((k) => {
    if (l) return;
    const $ = e.findIndex((v) => v.id === k);
    if ($ <= 0) return;
    const T = [...e];
    [T[$], T[$ - 1]] = [T[$ - 1], T[$]], t(ps(T));
  }, [e, t, l]), m = ve((k) => {
    if (l) return;
    const $ = e.findIndex((v) => v.id === k);
    if ($ >= e.length - 1 || $ === -1) return;
    const T = [...e];
    [T[$], T[$ + 1]] = [T[$ + 1], T[$]], t(ps(T));
  }, [e, t, l]), b = ve((k) => {
    if (l) return;
    const $ = e.filter((T) => T.id !== k);
    t(ps($));
  }, [e, t, l]), g = ve(() => {
    l || t([]);
  }, [t, l]), p = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const k = d.map(($, T) => {
      const v = $.direction === "asc" ? "ascending" : "descending";
      return `${T + 1}. ${$.label} (${v})`;
    });
    if (k.length === 1)
      return `Sorted by: ${k[0]}`;
    if (k.length === 2)
      return `Sorted by: ${k.join(" and ")}`;
    {
      const $ = k.pop();
      return `Sorted by: ${k.join(", ")}, and ${$}`;
    }
  }, x = Le(() => {
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
        "aria-describedby": x,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((k) => /* @__PURE__ */ r.jsx(
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
                  onClose: () => b(k.id),
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
                          disabled: l || !sh(k.id, e),
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
                          disabled: l || !oh(k.id, e),
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
        onClick: g,
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
], ih = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), lh = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, ch = (e) => {
  if (typeof e == "boolean") {
    const n = Ms.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = Ms.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, uh = (e) => `${e.name}-${e.bed_name}`, dh = () => ({
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
}), Qv = (e) => {
  const t = dh();
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
}, fh = {
  dataComparator: ih,
  filterFunction: lh,
  booleanRenderer: ch,
  getDataId: uh
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
  } = n, f = t.find(($) => $.key === a), h = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", m = () => o.filter((T) => !i.includes(T) && e[T]).slice(0, 3).map((T) => {
    const v = t.find((y) => y.key === T), M = e[T], D = c[T] ? c[T](M, e) : v?.cardRenderer ? v.cardRenderer(e) : v?.render ? v.render(e) : M;
    return `${v?.label || T}: ${D}`;
  }).join(" • "), b = () => s.length === 0 ? null : s.filter(($) => e[$.fieldKey] !== void 0).map(($) => {
    const T = e[$.fieldKey], v = $.render ? $.render(T, e) : T;
    return `<span class="nhsuk-tag ${ph($, T)}">${v}</span>`;
  }).join(""), g = () => u ? u(e) : l?.(e) === "high" ? "primary" : "default", p = b(), x = m(), k = p ? `${x}${p ? `<div class="adaptive-card__badges">${p}</div>` : ""}` : x;
  return {
    variant: g(),
    heading: String(h),
    descriptionHtml: k,
    className: `adaptive-card ${d}`,
    "aria-label": `Record for ${h}`
  };
}
function ph(e, t) {
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
const hh = {
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
            Je,
            {
              color: gh(Al(d)),
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
              onClick: (m) => {
                m.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ r.jsx(
            bt,
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
            bt,
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
}, Pl = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        Je,
        {
          color: xh(e.status || "active"),
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
            s !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${mh(s)}`, children: [
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
function Al(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function mh(e) {
  return Al(e);
}
function gh(e) {
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
function xh(e) {
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
const bh = [
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
], El = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", vh = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, yh = (e) => El(e) === "high" || e.status === "urgent" ? "primary" : "default", wh = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, _h = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: bh,
  hiddenFields: [],
  getPriority: El,
  getStatus: vh,
  getVariant: yh,
  fieldRenderers: wh,
  classPrefix: "adaptive-card--healthcare"
}, Sh = {
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
}, kh = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, yi = {
  name: "healthcare",
  defaultCardConfig: _h,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Sh,
  fieldTypes: kh
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
function Ch(e, t) {
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
function Nh(e, t) {
  const [n, a] = Oe("cards");
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
function jh(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Th(e, t, n, a) {
  const o = a ? { ...a.defaultCardConfig, ...n } : { ...hh, ...n };
  if (a && a.cardTemplates) {
    const s = jh(e);
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
const ey = ({
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
  ariaLabel: m = "Data grid",
  ariaDescription: b,
  orientation: g = "horizontal",
  id: p,
  disabled: x = !1,
  className: k,
  ...$
}) => {
  const T = Nh(e, t), v = f !== void 0, M = f ?? 0, D = Le(() => {
    if (c.some(
      (U) => U.data && U.data.length > 0 && _i(U.data)
    )) {
      const U = wi(n);
      return {
        ...yi.defaultCardConfig,
        ...U
      };
    } else
      return wi(n);
  }, [n, c]), P = Le(() => c.some(
    (U) => U.data && U.data.length > 0 && _i(U.data)
  ) ? yi : void 0, [c]), y = Le(() => ({
    selectedIndex: M,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [M, c.length]), [N, w] = Ki(Ch, y), _ = Ue([]), F = Ue([]), S = Ue([]), j = Ue(null), [C, I] = Oe({
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
  }), te = ve((E) => {
    if (!E.current)
      return { columns: 1, rows: 0 };
    const U = E.current, z = U.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (z.length === 0)
      return { columns: 1, rows: 0 };
    const X = U.offsetWidth, Y = z[0].offsetWidth, Z = Math.floor(X / Y) || 1, ee = Math.ceil(z.length / Z);
    return { columns: Z, rows: ee };
  }, []), V = ve((E, U) => ({
    row: Math.floor(E / U),
    col: E % U
  }), []), B = ve((E, U, z) => E * z + U, []), H = ve((E, U, z, X) => {
    const { row: L, col: Y } = V(E, X);
    let Z = L, ee = Y;
    switch (U) {
      case "up":
        Z = Math.max(0, L - 1);
        break;
      case "down":
        Z = Math.min(Math.floor((z - 1) / X), L + 1);
        break;
      case "left":
        ee = Math.max(0, Y - 1);
        break;
      case "right":
        ee = Math.min(X - 1, Y + 1);
        break;
    }
    const K = B(Z, ee, X);
    return Math.min(K, z - 1);
  }, [V, B]);
  Ze(() => {
    C.isCardNavigationActive && C.focusedCardElementIndex >= 0 && C.cardElements.length > 0 && setTimeout(() => {
      const E = C.cardElements[C.focusedCardElementIndex];
      E && (E.element.focus(), E.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [C.isCardNavigationActive, C.focusedCardElementIndex, C.cardElements.length]), Ze(() => {
    const E = () => {
      if (T === "cards" && j.current) {
        const { columns: X, rows: L } = te(j);
        I((Y) => ({
          ...Y,
          gridColumns: X,
          gridRows: L
        }));
      }
    }, U = setTimeout(E, 200), z = () => {
      setTimeout(E, 100);
    };
    return window.addEventListener("resize", z), () => {
      clearTimeout(U), window.removeEventListener("resize", z);
    };
  }, [T, c, te]), Ze(() => {
    const E = N.tabLoadingStates.length, U = c.length;
    E !== U && w({ type: "ADJUST_ARRAYS", payload: { newLength: U } });
  }, [c.length, N.tabLoadingStates.length]), Ze(() => {
    v && f !== N.selectedIndex && w({ type: "SET_SELECTED_INDEX", payload: f });
  }, [v, f, N.selectedIndex]);
  const O = ve((E) => {
    E >= 0 && E < c.length && !c[E].disabled && (w({ type: "SET_SELECTED_INDEX", payload: E }), h?.(E));
  }, [c, h]), ae = ve((E) => {
    console.log("Card selected:", E), w({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: E
    });
  }, []), W = ve((E) => {
    const U = F.current[E];
    U && (U.focus(), U.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), ie = ve((E) => {
    const U = F.current[E];
    if (!U) return [];
    const z = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), X = U.querySelectorAll(z);
    return Array.from(X).map((L, Y) => ({
      id: L.id || `card-${E}-element-${Y}`,
      element: L,
      label: L.getAttribute("aria-label") || L.textContent?.trim() || L.getAttribute("title") || `Element ${Y + 1}`,
      type: L.tagName.toLowerCase() === "button" ? "button" : L.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(L.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), je = Ue(null), ce = ve((E) => {
    const U = je.current;
    if (!U) return;
    const z = document.createElement("div");
    z.setAttribute("aria-live", "polite"), z.setAttribute("aria-atomic", "true"), z.className = "sr-only", z.textContent = E, U.appendChild(z), setTimeout(() => {
      U.contains(z) && U.removeChild(z);
    }, 1e3);
  }, []), ue = ve((E) => {
    const U = E.filter((X) => X.sortable !== !1), z = [
      { value: "", label: "Sort by..." }
    ];
    return U.forEach((X) => {
      const L = X.label || X.key;
      X.key === "name" ? z.push(
        { value: `${X.key}-asc`, label: `${L} (A-Z)` },
        { value: `${X.key}-desc`, label: `${L} (Z-A)` }
      ) : X.key === "ews_score" || X.key.includes("score") ? z.push(
        { value: `${X.key}-desc`, label: `${L} (High-Low)` },
        { value: `${X.key}-asc`, label: `${L} (Low-High)` }
      ) : X.key === "age" || X.key.includes("date") || X.key.includes("time") ? z.push(
        { value: `${X.key}-desc`, label: `${L} (Oldest-Youngest)` },
        { value: `${X.key}-asc`, label: `${L} (Youngest-Oldest)` }
      ) : z.push(
        { value: `${X.key}-asc`, label: `${L} (A-Z)` },
        { value: `${X.key}-desc`, label: `${L} (Z-A)` }
      );
    }), z;
  }, []), J = ve((E, U) => U ? [...E].sort((z, X) => {
    const L = z[U.key], Y = X[U.key];
    if (L == null && Y == null) return 0;
    if (L == null) return 1;
    if (Y == null) return -1;
    const Z = Number(L), ee = Number(Y);
    if (!isNaN(Z) && !isNaN(ee))
      return U.direction === "asc" ? Z - ee : ee - Z;
    const K = String(L).toLowerCase(), re = String(Y).toLowerCase(), me = K.localeCompare(re);
    return U.direction === "asc" ? me : -me;
  }) : E, []), ne = ve((E) => {
    if (!E) {
      I((K) => ({ ...K, cardSortConfig: null })), ce("Card sorting cleared");
      return;
    }
    const [U, z] = E.split("-"), X = { key: U, direction: z };
    I((K) => ({ ...K, cardSortConfig: X }));
    const Z = c[N.selectedIndex]?.columns.find((K) => K.key === U)?.label || U;
    ce(`Cards sorted by ${Z} in ${z === "asc" ? "ascending" : "descending"} order`);
  }, [c, N.selectedIndex, ce]), de = ve((E) => {
    const X = c[N.selectedIndex]?.columns.find((Y) => Y.key === E.key)?.label || E.key, L = E.direction === "asc" ? "ascending" : "descending";
    return `${X} (${L})`;
  }, [c, N.selectedIndex]), G = ve((E) => {
    const U = c[N.selectedIndex];
    if (o) {
      const z = N.sortConfig;
      return !z || z.length === 0 ? E : [...E].sort((X, L) => {
        for (const { key: Y, direction: Z } of z) {
          let ee = X[Y], K = L[Y];
          const re = U?.columns.find((Pe) => Pe.key === Y);
          if (re?.cardRenderer ? (ee = re.cardRenderer(X), K = re.cardRenderer(L)) : re?.render && (ee = re.render(X), K = re.render(L)), ee == null && K == null) continue;
          if (ee == null) return Z === "asc" ? -1 : 1;
          if (K == null) return Z === "asc" ? 1 : -1;
          const me = Number(ee), be = Number(K);
          if (!isNaN(me) && !isNaN(be)) {
            const Pe = me - be;
            if (Pe !== 0) return Z === "asc" ? Pe : -Pe;
            continue;
          }
          const Ce = String(ee).toLowerCase(), we = String(K).toLowerCase(), ge = Ce.localeCompare(we);
          if (ge !== 0) return Z === "asc" ? ge : -ge;
        }
        return 0;
      });
    } else
      return J(E, C.cardSortConfig);
  }, [o, N.sortConfig, C.cardSortConfig, J, c, N.selectedIndex]), fe = ve((E, U) => {
    const z = ie(E), X = z[U];
    if (X) {
      X.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const L = `Focused on ${X.label}, ${X.type} ${U + 1} of ${z.length} within card`;
      ce(L);
    }
  }, [ie, ce]), oe = ve((E) => {
    _.current[E]?.focus();
  }, []), A = ve(() => {
    const E = S.current[0];
    if (!E) return [];
    const U = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), z = E.querySelectorAll(U);
    return Array.from(z);
  }, []), R = ve((E) => {
    if (E === 0) {
      const U = S.current[0], z = U?.querySelector(".sort-controls-row");
      if (z) {
        z.setAttribute("tabindex", "-1"), z.focus();
        const L = `Sort controls group with ${A().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        ce(L);
      } else U && U.focus();
    } else {
      const U = A(), z = E - 1, X = U[z];
      if (X) {
        X.focus();
        const L = X.tagName.toLowerCase() === "select", Y = X.tagName.toLowerCase() === "button", Z = L ? "dropdown" : Y ? "button" : "control", ee = L ? ". Use Space key to open dropdown" : "", K = `${Z} ${z + 1} of ${U.length}${ee}`;
        ce(K);
      }
    }
  }, [A, ce]), Q = ve((E, U) => {
    const { key: z } = E, X = c[N.selectedIndex], L = X?.data.length || 0;
    if (z === "ArrowLeft" && E.shiftKey) {
      E.preventDefault(), E.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (z === "ArrowRight" && E.shiftKey) {
      E.preventDefault(), E.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!C.isCardNavigationActive) {
      switch (z) {
        case "ArrowUp":
          if (E.preventDefault(), U === 0)
            I((K) => ({ ...K, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), R(0);
          else {
            const K = H(U, "up", L, C.gridColumns);
            K !== U && (I((re) => ({ ...re, focusedCardIndex: K })), W(K), ce(`Moved to card ${K + 1} of ${L}`));
          }
          break;
        case "ArrowDown":
          E.preventDefault();
          const Y = H(U, "down", L, C.gridColumns);
          Y !== U && (I((K) => ({ ...K, focusedCardIndex: Y })), W(Y), ce(`Moved to card ${Y + 1} of ${L}`));
          break;
        case "ArrowLeft":
          E.preventDefault();
          const Z = H(U, "left", L, C.gridColumns);
          Z !== U ? (I((K) => ({ ...K, focusedCardIndex: Z })), W(Z), ce(`Moved to card ${Z + 1} of ${L}`)) : N.selectedIndex > 0 && (w({ type: "SET_SELECTED_INDEX", payload: N.selectedIndex - 1 }), I((K) => ({ ...K, focusArea: "tabs" })), setTimeout(() => oe(N.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          E.preventDefault();
          const ee = H(U, "right", L, C.gridColumns);
          ee !== U ? (I((K) => ({ ...K, focusedCardIndex: ee })), W(ee), ce(`Moved to card ${ee + 1} of ${L}`)) : N.selectedIndex < c.length - 1 && (w({ type: "SET_SELECTED_INDEX", payload: N.selectedIndex + 1 }), I((K) => ({ ...K, focusArea: "tabs" })), setTimeout(() => oe(N.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (X?.data[U]) {
            E.preventDefault(), I((re) => ({
              ...re,
              selectedCardIndex: U
            }));
            const K = ie(U);
            K.length > 0 ? (I((re) => ({
              ...re,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: K,
              selectedCardIndex: U
              // Ensure selection is maintained
            })), ce(`Card ${U + 1} selected and navigation activated. ${K.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : ce(`Card ${U + 1} selected.`);
          }
          break;
        case " ":
          if (X?.data[U]) {
            E.preventDefault(), I((re) => ({
              ...re,
              selectedCardIndex: re.selectedCardIndex === U ? -1 : U
            }));
            const K = C.selectedCardIndex === U;
            ce(`Card ${U + 1} ${K ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (z) {
      case "ArrowUp":
      case "ArrowLeft":
        E.preventDefault();
        const Y = Math.max(0, C.focusedCardElementIndex - 1);
        I((re) => ({ ...re, focusedCardElementIndex: Y })), fe(U, Y);
        break;
      case "ArrowDown":
      case "ArrowRight":
        E.preventDefault();
        const Z = Math.min(C.cardElements.length - 1, C.focusedCardElementIndex + 1);
        I((re) => ({ ...re, focusedCardElementIndex: Z })), fe(U, Z);
        break;
      case "Enter":
        E.preventDefault();
        const ee = C.cardElements[C.focusedCardElementIndex];
        ee && (ee.element.click(), ce(`Activated ${ee.label}`));
        break;
      case " ":
        E.preventDefault();
        const K = C.cardElements[C.focusedCardElementIndex];
        if (K) {
          const re = new MouseEvent("dblclick", { bubbles: !0 });
          K.element.dispatchEvent(re), ce(`Double-clicked ${K.label}`);
        }
        break;
      case "Escape":
        E.preventDefault(), I((re) => ({
          ...re,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => W(U), 0), ce("Exited card navigation, returned to card level");
        break;
      case "Home":
        E.preventDefault(), C.cardElements.length > 0 && (I((re) => ({ ...re, focusedCardElementIndex: 0 })), fe(U, 0));
        break;
      case "End":
        if (E.preventDefault(), C.cardElements.length > 0) {
          const re = C.cardElements.length - 1;
          I((me) => ({ ...me, focusedCardElementIndex: re })), fe(U, re);
        }
        break;
    }
  }, [C, N.selectedIndex, c, ae, W, oe, I, ie, fe, ce]), pe = ve((E) => {
    const U = _.current[E], z = U?.parentElement;
    if (!U || !z) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const X = U.getBoundingClientRect(), L = z.getBoundingClientRect();
    X.left >= L.left && X.right <= L.right || (console.log("Tab not visible, scrolling into view (mobile)"), U.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), le = ve((E, U) => {
    if (T !== "cards")
      return;
    const { key: z } = E;
    switch (z) {
      case "ArrowLeft":
        E.preventDefault();
        const X = U > 0 ? U - 1 : c.length - 1;
        O(X), I((ee) => ({ ...ee, focusedTabIndex: X })), _.current[X]?.focus(), pe(X);
        break;
      case "ArrowRight":
        E.preventDefault();
        const L = U < c.length - 1 ? U + 1 : 0;
        O(L), I((ee) => ({ ...ee, focusedTabIndex: L })), _.current[L]?.focus(), pe(L);
        break;
      case "ArrowDown":
        E.preventDefault();
        const Y = c[N.selectedIndex];
        Y && Y.columns && Y.columns.length > 0 ? (I((ee) => ({
          ...ee,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), R(0)) : (I((ee) => ({
          ...ee,
          focusArea: "cards",
          focusedCardIndex: 0
        })), W(0));
        break;
      case "Home":
        E.preventDefault(), O(0), I((ee) => ({ ...ee, focusedTabIndex: 0 })), _.current[0]?.focus(), pe(0);
        break;
      case "End":
        E.preventDefault();
        const Z = c.length - 1;
        O(Z), I((ee) => ({ ...ee, focusedTabIndex: Z })), _.current[Z]?.focus(), pe(Z);
        break;
      case "Enter":
      case " ":
        E.preventDefault(), O(U);
        break;
    }
  }, [c.length, O, T, W, I, pe]), se = ve((E, U) => {
    if (T !== "cards")
      return;
    const { key: z } = E, X = c[N.selectedIndex];
    if (U === 0 && !C.isSortControlsActive) {
      switch (z) {
        case "ArrowUp":
          E.preventDefault(), I((Y) => ({
            ...Y,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), oe(N.selectedIndex);
          break;
        case "ArrowDown":
          E.preventDefault(), X?.data && X.data.length > 0 && (I((Y) => ({
            ...Y,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), W(0));
          break;
        case "Enter":
        case " ":
          E.preventDefault();
          const L = A();
          if (L.length > 0) {
            I((Z) => ({
              ...Z,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), R(1);
            const Y = `Entered sort controls navigation mode. ${L.length} controls available. Use arrow keys to navigate between controls.`;
            ce(Y);
          }
          break;
        case "Escape":
          E.preventDefault(), I((Y) => ({
            ...Y,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), oe(N.selectedIndex);
          break;
      }
      return;
    }
    if (C.isSortControlsActive) {
      const Y = A().length;
      switch (z) {
        case "ArrowLeft":
          E.preventDefault();
          const Z = C.focusedSortControlIndex > 1 ? C.focusedSortControlIndex - 1 : Y;
          I((K) => ({ ...K, focusedSortControlIndex: Z })), R(Z);
          break;
        case "ArrowRight":
          E.preventDefault();
          const ee = C.focusedSortControlIndex < Y ? C.focusedSortControlIndex + 1 : 1;
          I((K) => ({ ...K, focusedSortControlIndex: ee })), R(ee);
          break;
        case "ArrowDown":
          if (E.preventDefault(), C.isSortControlsActive) {
            const K = C.focusedSortControlIndex < Y ? C.focusedSortControlIndex + 1 : 1;
            I((re) => ({ ...re, focusedSortControlIndex: K })), R(K);
          } else
            X?.data && X.data.length > 0 && (I((K) => ({
              ...K,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), W(0));
          break;
        case "ArrowUp":
          E.preventDefault(), I((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), R(0);
          break;
        case "Escape":
          E.preventDefault(), I((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), R(0);
          break;
      }
    }
  }, [T, c, N.selectedIndex, C.isSortControlsActive, C.focusedSortControlIndex, R, oe, W, I, ce]);
  if (T === "cards") {
    const E = c[N.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${k || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": m,
            "aria-describedby": `${b || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
            "aria-orientation": g,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((U, z) => {
              const X = z === N.selectedIndex, L = U.disabled || x;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${U.id}`,
                  "aria-controls": `panel-${U.id}`,
                  "aria-selected": X,
                  "aria-disabled": L,
                  tabIndex: X ? 0 : -1,
                  ref: (Y) => {
                    _.current[z] = Y;
                  },
                  onClick: () => O(z),
                  onKeyDown: (Y) => le(Y, z),
                  disabled: L,
                  className: [
                    "aria-tabs-datagrid__tab",
                    X ? "aria-tabs-datagrid__tab--selected" : "",
                    L ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: U.label }),
                    N.tabLoadingStates[z] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    N.tabErrors[z] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                U.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      E && E.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          $l,
          {
            sortConfig: N.sortConfig || [],
            columns: E.columns.map((U) => ({ key: U.key, label: U.label })),
            onSortChange: (U) => {
              w({ type: "SET_SORT", payload: U });
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
            ref: (U) => {
              S.current[0] = U;
            },
            onKeyDown: (U) => se(U, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${E.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  ta,
                  {
                    id: `card-sort-${E.id}`,
                    name: `card-sort-${E.id}`,
                    value: C.cardSortConfig ? `${C.cardSortConfig.key}-${C.cardSortConfig.direction}` : "",
                    onChange: (U) => ne(U.target.value),
                    className: "sort-select",
                    children: ue(E.columns).map((U) => /* @__PURE__ */ r.jsx("option", { value: U.value, children: U.label }, U.value))
                  }
                )
              ] }),
              C.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  de(C.cardSortConfig)
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
          ref: j,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${E?.label || "Data"} cards in ${C.gridRows} rows and ${C.gridColumns} columns`,
          "aria-rowcount": C.gridRows,
          "aria-colcount": C.gridColumns,
          id: `panel-${E?.id}`,
          "aria-labelledby": `tab-${E?.id}`,
          children: G(E?.data || []).map((U, z) => {
            const X = C.selectedCardIndex === z, L = C.focusedCardIndex === z && C.focusArea === "cards", Y = C.focusedCardIndex === z && C.focusArea === "card" && C.isCardNavigationActive, Z = z === 0 && C.focusArea !== "cards", ee = L || Z, K = V(z, C.gridColumns);
            if (n.cardTemplate) {
              const be = n.cardTemplate(U, E.columns);
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": K.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      ref: (Ce) => {
                        F.current[z] = Ce;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        X ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        L ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        Y ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": K.col + 1,
                      "aria-selected": X,
                      "aria-expanded": Y,
                      "aria-description": Y ? `Card navigation active. ${C.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: ee ? 0 : -1,
                      onClick: () => {
                        I((Ce) => ({
                          ...Ce,
                          selectedCardIndex: Ce.selectedCardIndex === z ? -1 : z
                        })), ae(U);
                      },
                      onKeyDown: (Ce) => Q(Ce, z),
                      onFocus: () => {
                        I((Ce) => Ce.isCardNavigationActive ? Ce : Ce.focusedCardIndex !== z || Ce.focusArea !== "cards" ? {
                          ...Ce,
                          focusedCardIndex: z,
                          focusArea: "cards"
                        } : Ce);
                      },
                      children: be
                    }
                  )
                },
                `card-${z}`
              );
            }
            const re = Th(U, E.columns, D, P), me = [
              re.className || "",
              X ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              L ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              Y ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": K.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      X ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      L ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      Y ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": K.col + 1,
                    "aria-selected": X,
                    "aria-expanded": Y,
                    onKeyDown: (be) => {
                      be.key === "Enter" && (be.preventDefault(), I((Ce) => ({
                        ...Ce,
                        selectedCardIndex: z
                      }))), Q(be, z);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      Tl,
                      {
                        ...re,
                        ref: (be) => {
                          F.current[z] = be;
                        },
                        className: me,
                        "aria-label": `${re["aria-label"] || re.heading}. ${Y ? `Card navigation active with ${C.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: ee ? 0 : -1,
                        onClick: () => {
                          I((be) => ({
                            ...be,
                            selectedCardIndex: be.selectedCardIndex === z ? -1 : z
                          })), ae(U);
                        },
                        onKeyDown: (be) => Q(be, z),
                        onFocus: () => {
                          C.isCardNavigationActive || I((be) => be.focusedCardIndex !== z || be.focusArea !== "cards" ? {
                            ...be,
                            focusedCardIndex: z,
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
              `card-${z}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: je,
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
  return T === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${k || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      $s,
      {
        tabPanels: c,
        dataConfig: d,
        ariaLabel: m,
        ariaDescription: b,
        orientation: g,
        id: p,
        disabled: x,
        selectedIndex: f,
        onTabChange: h,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: u,
        ...$
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
        ariaLabel: m,
        ariaDescription: b,
        orientation: g,
        id: p,
        disabled: x,
        selectedIndex: f,
        onTabChange: h,
        actions: l,
        forceActionsAbove: u,
        ...$
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, Rl = (e) => {
  const t = Ms.find((n) => n.value === e);
  return t ? t.icon : null;
}, Dh = {
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
}, Ih = (e) => ko(e, [
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
]), $h = {
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
}, Mh = (e) => ko(e, [
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
]), Ph = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: Dh,
    createTabs: Ih
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: $h,
    createTabs: Mh
  }
}, Si = (e, t) => {
  const n = Ph[e];
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
], Lh = [
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
], Fh = [
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
], Ah = [
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
], Eh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Rh = () => [
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
    data: Lh,
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
    data: Fh,
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
    data: Ah,
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
], Bh = () => {
  const [e, t] = Oe("healthcare"), n = Le(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: fh,
      tabPanels: Rh(),
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
      dataConfig: Eh,
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
}, ty = Bh, Hl = (e) => /* @__PURE__ */ r.jsx(rl, { ...e }), ny = ({
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
  logo: m,
  className: b,
  ...g
}) => {
  const p = {
    service: u,
    navigation: c,
    search: d,
    account: f,
    organisation: h,
    logo: m,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(jl, { ...s }),
    /* @__PURE__ */ r.jsx(il, { ...p }),
    /* @__PURE__ */ r.jsx(Hl, { className: b, ...g, children: /* @__PURE__ */ r.jsx(al, { size: o, children: /* @__PURE__ */ r.jsx(Hn, { children: /* @__PURE__ */ r.jsxs(Dr, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(mn, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(ll, { ...l })
  ] });
}, ry = ({
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
  ...m
}) => {
  const b = {
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
    /* @__PURE__ */ r.jsx(il, { ...b }),
    /* @__PURE__ */ r.jsxs(Hl, { className: h, ...m, children: [
      u && /* @__PURE__ */ r.jsx(ks, { ...u }),
      /* @__PURE__ */ r.jsx(al, { size: o, children: /* @__PURE__ */ r.jsx(Hn, { children: /* @__PURE__ */ r.jsxs(Dr, { width: a, children: [
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
  const l = ye("nhsuk-back-link", a), u = ye("nhsuk-back-link__link"), c = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
const Zn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function ji() {
  return typeof window > "u" ? Zn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function Ul() {
  const [e, t] = q.useState(ji());
  q.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(ji());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const n = q.useCallback((s) => e >= Zn[s], [e]), a = q.useCallback((s) => e < Zn[s], [e]), o = q.useCallback((s, i) => e >= Zn[s] && e < Zn[i], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: o,
    /** Raw numeric values */
    values: Zn
  };
}
function ay(e) {
  const { width: t, values: n } = Ul();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = n[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function Hh(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = q.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = q.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return q.useEffect(() => {
    if (!t || typeof window > "u") return;
    const u = new URLSearchParams(window.location.search);
    o ? u.set(n, String(o)) : u.delete(n), u.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${u.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [o, i, t, n, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const Oh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
), Uh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
function Wh(e) {
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
    emptyState: m,
    a11y: b,
    className: g,
    getId: p = (he) => he.id,
    orientation: x = "vertical",
    autoEnableThirdColumn: k = !0,
    onDrillChange: $,
    navigationInstructions: T = "Use arrow keys to navigate, Enter to open.",
    initialFocus: v = "first",
    skipFocusOnSelect: M = !1,
    skipAnnouncements: D = !1,
    onFocusChange: P,
    syncUrl: y = !1,
    urlParamSelected: N = "nsv",
    urlParamDrill: w = "nsvDrill",
    urlSyncDebounceMs: _ = 0,
    lazySecondary: F = !1,
    navFooter: S,
    collapsibleNav: j = !1,
    navInitiallyCollapsed: C = !1,
    onNavCollapseChange: I,
    collapseToggleLabelShow: te = "Show navigation",
    collapseToggleLabelHide: V = "Hide navigation",
    collapseToggleIconShow: B,
    collapseToggleIconHide: H,
    persistNavCollapsed: O,
    navCollapsedStorageKey: ae = "nsvCollapsed",
    navCollapsedUrlParam: W = "nsvCollapsed",
    autoContentHeader: ie,
    contentHeaderLevel: je = 2,
    renderContentHeader: ce,
    contentSubheader: ue,
    secondarySubheader: J
  } = e, { up: ne } = Ul(), [de, G] = q.useState(!1);
  q.useEffect(() => {
    G(!0);
  }, []);
  const fe = de && ne("medium"), oe = de && ne("xlarge");
  let A;
  u ? A = u : fe ? A = "two-column" : A = "list", !u && k && l && oe && (A = "three-column");
  const R = Hh({
    enabled: y,
    paramSelected: N,
    paramDrill: w
  }), [Q, pe] = q.useState(
    () => R.selectedId !== void 0 ? R.selectedId : a
  ), le = n !== void 0 ? n : Q, se = t.find((he) => p(he) === le), [E, U] = q.useState(
    void 0
  );
  q.useEffect(() => {
    if (le === void 0) return;
    U(le);
    const he = setTimeout(() => U(void 0), 220);
    return () => clearTimeout(he);
  }, [le]);
  const z = q.useRef(null), X = q.useRef(null), L = q.useRef(null), Y = q.useRef(null), [Z, ee] = q.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [K, re] = q.useState(() => "nav"), [me, be] = q.useState(0), Ce = () => [
    Y.current,
    X.current,
    L.current
  ].filter(Boolean), we = (he) => {
    const Te = Ce(), xe = Math.max(0, Math.min(he, Te.length - 1));
    Te[xe]?.focus(), be(xe);
  }, ge = q.useCallback(
    (he) => he ? Array.from(he.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (xe) => !xe.hasAttribute("disabled") && xe.tabIndex !== -1
    ) : [],
    []
  ), Pe = q.useCallback(
    (he) => {
      const Te = ge(X.current);
      if (!Te.length) {
        X.current?.focus();
        return;
      }
      const xe = Math.max(0, Math.min(he, Te.length - 1)), Fe = Te[xe];
      Fe.focus(), setTimeout(() => {
        document.activeElement !== Fe && (Fe.focus(), setTimeout(() => {
          document.activeElement !== Fe && Fe.click();
        }, 10));
      }, 10), ee((Ve) => ({ ...Ve, contentIndex: xe }));
      const et = (Ve) => {
        Ve.key === "Escape" && (Ve.preventDefault(), Ve.stopPropagation(), X.current?.focus(), Fe.removeEventListener("keydown", et));
      };
      Te.forEach((Ve) => {
        const qe = Ve._escapeHandler;
        qe && Ve.removeEventListener("keydown", qe);
      }), Fe._escapeHandler = et, Fe.addEventListener("keydown", et);
    },
    [ge]
  ), We = q.useCallback(
    (he) => {
      const Te = ge(L.current);
      if (!Te.length) {
        L.current?.focus();
        return;
      }
      const xe = Math.max(0, Math.min(he, Te.length - 1)), Fe = Te[xe];
      Fe.focus(), setTimeout(() => {
        document.activeElement !== Fe && (Fe.focus(), setTimeout(() => {
          document.activeElement !== Fe && Fe.click();
        }, 10));
      }, 10), ee((Ve) => ({ ...Ve, secondaryIndex: xe }));
      const et = (Ve) => {
        Ve.key === "Escape" && (Ve.preventDefault(), Ve.stopPropagation(), L.current?.focus(), Fe.removeEventListener("keydown", et));
      };
      Te.forEach((Ve) => {
        const qe = Ve._escapeHandler;
        qe && Ve.removeEventListener("keydown", qe);
      }), Fe._escapeHandler = et, Fe.addEventListener("keydown", et);
    },
    [ge]
  ), at = (he) => {
    if (he.defaultPrevented) return;
    const Te = he.key, xe = he.target, Fe = !!ut.current && ut.current.contains(xe), et = !!X.current && X.current.contains(xe), Ve = !!L.current && L.current.contains(xe), qe = !!L.current, Vt = xe === Y.current || xe === X.current || xe === L.current, $t = ze && (A === "list" || A === "cards"), Sn = et && !!xe.closest(".nhs-navigation-split-view__header");
    if (K === "containers" && Vt) {
      if (Te === "ArrowRight") {
        he.preventDefault();
        const Ee = Ce(), Xe = Math.min(Ee.length - 1, me + 1);
        we(Xe);
        return;
      }
      if (Te === "ArrowLeft") {
        he.preventDefault();
        const Ee = Math.max(0, me - 1);
        we(Ee);
        return;
      }
      if (Te === "Home") {
        he.preventDefault(), we(0);
        return;
      }
      if (Te === "End") {
        he.preventDefault(), we(Ce().length - 1);
        return;
      }
      if (Te === "Enter" || Te === " ") {
        if (he.preventDefault(), xe === Y.current) {
          if (re("nav"), ut.current) {
            const Ee = Array.from(
              ut.current.querySelectorAll("[data-nav-item]")
            );
            (Ee[nt >= 0 ? nt : 0] || Ee[0])?.focus();
          }
        } else xe === X.current ? (re("content"), Pe(Z.contentIndex)) : xe === L.current && (re("secondary"), We(Z.secondaryIndex));
        return;
      }
      return;
    }
    if (Te === "Escape") {
      if (K === "content" || K === "secondary") {
        if (et || Ve) {
          if (he.preventDefault(), re("nav"), ut.current) {
            const Xe = Array.from(
              ut.current.querySelectorAll("[data-nav-item]")
            )[nt >= 0 ? nt : 0];
            setTimeout(() => Xe?.focus(), 10);
          }
        } else if ((xe === X.current || xe === L.current) && (he.preventDefault(), re("nav"), ut.current)) {
          const Xe = Array.from(
            ut.current.querySelectorAll("[data-nav-item]")
          )[nt >= 0 ? nt : 0];
          setTimeout(() => Xe?.focus(), 10);
        }
      }
      return;
    }
    if (Te === "Enter" || Te === " ") {
      if (xe.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (xe === X.current && K === "content") {
        he.preventDefault(), he.stopPropagation(), ge(X.current).length > 0 && setTimeout(() => {
          Pe(Z.contentIndex);
        }, 50);
        return;
      }
      if (xe === L.current && K === "secondary") {
        he.preventDefault(), he.stopPropagation(), ge(
          L.current
        ).length > 0 && setTimeout(() => {
          We(Z.secondaryIndex);
        }, 50);
        return;
      }
    }
    if ($t && Sn && !Vt && (Te === "ArrowRight" || Te === "ArrowLeft")) {
      const Ee = ge(X.current).filter(
        (Xe) => Xe.closest(".nhs-navigation-split-view__header")
      );
      if (Ee.length > 1) {
        const Xe = Ee.indexOf(xe);
        if (Xe >= 0) {
          const vr = (Xe + (Te === "ArrowRight" ? 1 : -1) + Ee.length) % Ee.length;
          he.preventDefault(), Ee[vr].focus();
          return;
        }
      }
    }
    if (Te === "ArrowRight") {
      if (Fe || K === "nav") {
        he.preventDefault(), re("content"), setTimeout(() => X.current?.focus(), 10);
        return;
      }
      if (et || K === "content") {
        qe && (he.preventDefault(), re("secondary"), setTimeout(() => L.current?.focus(), 10));
        return;
      }
    }
    if (Te === "ArrowLeft") {
      if (Ve || K === "secondary") {
        he.preventDefault(), re("content"), setTimeout(() => X.current?.focus(), 10);
        return;
      }
      if (et || K === "content") {
        if (he.preventDefault(), re("nav"), ut.current) {
          const Xe = Array.from(
            ut.current.querySelectorAll("[data-nav-item]")
          )[nt >= 0 ? nt : 0];
          setTimeout(() => Xe?.focus(), 10);
        }
        return;
      }
    }
    if (Te === "Home" && !Fe && (he.preventDefault(), re("nav"), ut.current)) {
      const Ee = Array.from(
        ut.current.querySelectorAll("[data-nav-item]")
      ), Xe = Ee[nt >= 0 ? nt : 0] || Ee[0];
      setTimeout(() => Xe?.focus(), 10);
    }
    if (Te === "End") {
      const Ee = qe ? L.current : X.current;
      Ee && !Ee.contains(xe) && (he.preventDefault(), qe ? (re("secondary"), setTimeout(() => L.current?.focus(), 10)) : (re("content"), setTimeout(() => X.current?.focus(), 10)));
    }
    if (Te === "ArrowDown" || Te === "ArrowUp") {
      if (xe === X.current && Te === "ArrowDown") {
        he.preventDefault(), ge(X.current).length > 0 && Pe(0);
        return;
      }
      if (xe === L.current && Te === "ArrowDown") {
        he.preventDefault(), ge(
          L.current
        ).length > 0 && We(0);
        return;
      }
      if (et) {
        const Ee = ge(X.current);
        if (Ee.length) {
          he.preventDefault();
          const Xe = Te === "ArrowDown" ? 1 : -1, Et = (Z.contentIndex + Xe + Ee.length) % Ee.length;
          Pe(Et);
        }
      } else if (Ve) {
        const Ee = ge(L.current);
        if (Ee.length) {
          he.preventDefault();
          const Xe = Te === "ArrowDown" ? 1 : -1, Et = (Z.secondaryIndex + Xe + Ee.length) % Ee.length;
          We(Et);
        }
      }
    }
  }, ze = !!se && (A === "list" || A === "cards"), Qe = q.useMemo(() => ie === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : ie === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : ie === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: ie.mobile !== void 0 ? ie.mobile : !0,
    tablet: ie.tablet || !1,
    desktop: ie.desktop || !1
  }, [ie]), Pt = de && ne("medium") && !ne("xlarge"), St = de && ne("xlarge"), vt = !!l, st = A === "three-column", [it, Jt] = q.useState(!1);
  q.useEffect(() => {
    st && it && Jt(!1);
  }, [st, it]), q.useEffect(() => {
    it && !st && (re("secondary"), be(2), setTimeout(() => {
      L.current?.focus();
    }, 50));
  }, [it, st]), q.useEffect(() => {
    !it && !st && K === "secondary" && (re("content"), be(1), setTimeout(() => {
      X.current?.focus();
    }, 50));
  }, [it, st, K]);
  const Tn = !!se && (ze && Qe.mobile || !ze && Pt && Qe.tablet || !ze && St && Qe.desktop) || vt && !st, mr = `h${je}`, Dn = se ? q.createElement(
    mr,
    {
      style: {
        marginLeft: ze ? 32 : 0,
        marginRight: ze ? 32 : 0
      }
    },
    se.label
  ) : null, Gn = ze ? "mobile" : Pt ? "tablet" : "desktop", gr = vt && !st && !it, In = ze && Qe.mobile ? /* @__PURE__ */ r.jsx(
    ks,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => yn(void 0, void 0)
    }
  ) : void 0, $n = gr ? /* @__PURE__ */ r.jsx(
    Ol,
    {
      element: "button",
      text: f,
      onClick: () => {
        Jt(!0);
      }
    }
  ) : void 0, xr = !st && it ? /* @__PURE__ */ r.jsx(
    ks,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => Jt(!1)
    }
  ) : void 0, ts = q.useMemo(() => {
    if (!Tn || !se) return null;
    if (ce)
      return ce({
        item: se,
        detailActive: ze,
        context: Gn,
        backLink: In,
        defaultHeading: Dn
      });
    const he = se && ue ? typeof ue == "function" ? ue(se) : ue : null;
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
            xr || In,
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
      $n && /* @__PURE__ */ r.jsx("div", { style: { marginLeft: "auto" }, children: $n })
    ] });
  }, [
    Tn,
    se,
    ce,
    ze,
    Gn,
    In,
    xr,
    Dn,
    $n,
    ue
  ]);
  q.useEffect(() => {
    if (!y) return;
    const he = A === "three-column";
    let Te = !1;
    const xe = () => {
      Te || (R.selectedId !== le && R.setSelectedId(le), R.drilledIn !== he && R.setDrilledIn(he));
    };
    if (_ && _ > 0) {
      const Fe = setTimeout(xe, _);
      return () => {
        Te = !0, clearTimeout(Fe);
      };
    } else
      xe();
  }, [y, R, le, A, _]), q.useEffect(() => {
    if (!y) return;
    const he = () => {
      const Te = new URLSearchParams(window.location.search), xe = Te.get(N);
      Te.get(w), pe(xe === null ? void 0 : xe);
    };
    return window.addEventListener("popstate", he), () => window.removeEventListener("popstate", he);
  }, [
    y,
    N,
    w,
    u,
    l
  ]);
  const Mn = q.useRef(0), Lt = q.useRef(
    null
  ), yn = q.useCallback(
    (he, Te) => {
      he !== le && (n === void 0 && pe(he), o?.(he, Te));
    },
    [n, o, le]
  );
  q.useEffect(() => {
    if (!M && ze && X.current) {
      const he = setTimeout(() => X.current?.focus(), 30);
      return () => clearTimeout(he);
    }
  }, [ze, le, M]);
  const ut = q.useRef(null), [nt, Ft] = q.useState(
    () => v === "first" ? 0 : -1
  );
  q.useEffect(() => {
    if (nt < 0 || !ut.current) return;
    const Te = Array.from(
      ut.current.querySelectorAll("[data-nav-item]")
    )[nt];
    if (Te) {
      document.activeElement !== Te && Te.focus(), Mn.current = nt;
      const xe = t[nt];
      P?.(
        xe ? p(xe) : void 0,
        xe,
        nt
      );
    }
  }, [nt, t, P, p]);
  const ns = (he) => {
    const Te = x === "vertical" ? "ArrowDown" : "ArrowRight", xe = x === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (he.key === "ArrowRight" && x === "vertical") {
      he.preventDefault(), it ? (re("secondary"), setTimeout(() => {
        L.current?.focus();
      }, 10)) : (re("content"), setTimeout(() => {
        X.current?.focus();
      }, 10));
      return;
    }
    if (he.key === Te)
      he.preventDefault(), Ft((Fe) => Math.min(t.length - 1, Fe + 1));
    else if (he.key === xe)
      he.preventDefault(), Ft((Fe) => Math.max(0, Fe - 1));
    else if (he.key === "Home")
      he.preventDefault(), Ft(0);
    else if (he.key === "End")
      he.preventDefault(), Ft(t.length - 1);
    else if (he.key === "Enter" || he.key === " ") {
      he.preventDefault();
      const Fe = t[nt];
      Fe && !Fe.disabled && yn(p(Fe), Fe);
    } else if (he.key.length === 1 && /[a-z0-9]/i.test(he.key)) {
      Lt.current || (Lt.current = { buffer: "", last: 0 });
      const Fe = Date.now(), et = 700, Ve = he.key.toLowerCase();
      Fe - Lt.current.last > et ? Lt.current.buffer = Ve : Lt.current.buffer += Ve, Lt.current.last = Fe;
      let qe = Lt.current.buffer;
      const Vt = qe.split("").every((Et) => Et === qe[0]), $t = t.map(
        (Et) => String(Et.label || "").toLowerCase()
      );
      let Sn = 0;
      nt >= 0 && (Sn = (nt + 1) % t.length);
      let Ee;
      const Xe = (Et, vr) => {
        const Ot = t.length;
        for (let zr = 0; zr < Ot; zr++) {
          const Vr = (Sn + zr) % Ot;
          if (!t[Vr].disabled && $t[Vr].startsWith(Et))
            return Vr;
        }
      };
      Vt && qe.length > 1 ? Ee = Xe(qe[0]) : (Ee = Xe(qe), Ee === void 0 && qe.length > 1 && (Ee = Xe(qe[qe.length - 1]), Ee !== void 0 && Lt.current && (Lt.current.buffer = qe[qe.length - 1]))), Ee !== void 0 && Ft(Ee);
    }
  }, rs = q.useMemo(() => {
    if (O && (O === "url" || O === "both") && typeof window < "u") {
      const Te = new URLSearchParams(window.location.search).get(W);
      if (Te === "1") return !0;
      if (Te === "0") return !1;
    }
    if (O && (O === "localStorage" || O === "both") && typeof window < "u")
      try {
        const he = window.localStorage.getItem(ae);
        if (he === "1") return !0;
        if (he === "0") return !1;
      } catch {
      }
    return C;
  }, [
    O,
    C,
    ae,
    W
  ]), [At, Wr] = q.useState(rs);
  q.useEffect(() => {
    I?.(At);
  }, [At, I]);
  const wn = q.useCallback(() => {
    fe && j && Wr((he) => !he);
  }, [fe, j]);
  q.useEffect(() => {
    if (O && !(typeof window > "u")) {
      if (O === "localStorage" || O === "both")
        try {
          window.localStorage.setItem(
            ae,
            At ? "1" : "0"
          );
        } catch {
        }
      if (O === "url" || O === "both") {
        const he = new URLSearchParams(window.location.search);
        he.set(W, At ? "1" : "0");
        const Te = `${window.location.pathname}?${he.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", Te);
      }
    }
  }, [
    At,
    O,
    ae,
    W
  ]);
  const Yn = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    ze ? "nhs-navigation-split-view--detail-active" : "",
    A === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    j && fe && At ? "nhs-navigation-split-view--nav-collapsed" : "",
    g
  ].filter(Boolean).join(" "), _n = q.useRef(null);
  q.useEffect(() => {
    if (!D && _n.current) {
      const he = se ? `Selected ${se.label}` : "Selection cleared";
      _n.current.textContent = he;
    }
  }, [se, D]), q.useEffect(() => {
    !ze && le == null && ut.current && ut.current.querySelectorAll("[data-nav-item]")[Mn.current]?.focus();
  }, [ze, le]);
  const yt = A === "three-column", [br, Po] = q.useState(!1);
  q.useEffect(() => {
    yt && !br && Po(!0);
  }, [yt, br]);
  const dt = q.useRef(yt);
  q.useEffect(() => {
    dt.current !== yt && ($?.(yt), dt.current = yt);
  }, [yt, $]);
  const Zt = () => {
    if (A === "cards")
      return /* @__PURE__ */ r.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": le ? String(le) : void 0,
          children: [
            t.map((xe) => {
              const Fe = p(xe), et = Fe === le;
              return /* @__PURE__ */ r.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": et,
                  children: /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      id: String(Fe),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": et || void 0,
                      "data-disabled": xe.disabled || void 0,
                      disabled: xe.disabled,
                      onClick: () => !xe.disabled && yn(Fe, xe),
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
                Fe
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
    const he = "nsv-nav-instructions", Te = q.useMemo(() => q.memo(
      ({
        item: xe,
        idx: Fe,
        selected: et,
        focused: Ve
      }) => {
        const qe = p(xe), Vt = xe.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Ve ? 0 : -1,
          onClick: () => {
            Mn.current = Fe, yn(qe, xe);
          },
          onKeyDown: ($t) => {
            ($t.key === "Enter" || $t.key === " ") && ($t.preventDefault(), Mn.current = Fe, yn(qe, xe));
          }
        };
        return /* @__PURE__ */ r.jsxs(
          "li",
          {
            id: String(qe),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": et,
            "aria-current": et ? "true" : void 0,
            "data-selected": et || void 0,
            "data-disabled": xe.disabled || void 0,
            ...Vt,
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
    ), [p, yn, s]);
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
          "aria-activedescendant": le ? String(le) : void 0,
          children: [
            t.map((xe, Fe) => /* @__PURE__ */ r.jsx(
              Te,
              {
                item: xe,
                idx: Fe,
                selected: p(xe) === le,
                focused: Fe === nt || nt === -1 && Fe === 0 && v === "first",
                "data-just-selected": p(xe) === E ? "true" : void 0
              },
              p(xe)
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
          id: he,
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
      ref: z,
      className: Yn,
      "aria-label": b?.rootLabel,
      "data-layout": A,
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
                  ref: Y,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": b?.navigationLabel || "Items",
                  "data-collapsed": At || void 0,
                  tabIndex: 0,
                  children: [
                    j && fe && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: wn,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": At ? te : V,
                        title: At ? te : V,
                        children: At ? B || /* @__PURE__ */ r.jsx(Uh, {}) : H || /* @__PURE__ */ r.jsx(Oh, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: Zt() }),
                    S && /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: S
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
                  "aria-label": b?.contentLabel || "Content",
                  "data-has-selection": !!se || void 0,
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
                        children: i(se)
                      }
                    )
                  ]
                }
              ),
              A === "three-column" && (!F || br) || it && !st ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: L,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": b?.secondaryContentLabel || "Secondary",
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
                                  xr,
                                  /* @__PURE__ */ r.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: se && typeof se == "object" && "label" in se ? se.label : String(se) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        se && J && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof J == "function" ? J(se) : J
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(se) })
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
            ref: _n,
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
            children: yt ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
Wh.displayName = "NavigationSplitView";
const zh = typeof window < "u" && window.document ? q.useLayoutEffect : q.useEffect, Ti = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), Vh = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: o, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, u = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, d = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), h = n && e.childItems && e.childItems.length > 0, m = (g) => {
    h && (g.preventDefault(), a?.(e));
  }, b = h ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": o || !1,
    onClick: m,
    onKeyDown: (g) => {
      (g.key === "Enter" || g.key === " ") && m(g), g.key === "Escape" && o && m(g);
    }
  } : {};
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ye("nhsuk-product-roadmap__item", h && "nhsuk-product-roadmap__item--expandable", o && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: u, top: c, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": d,
      "aria-colspan": f,
      ...b,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          h && /* @__PURE__ */ r.jsx("span", { className: ye("nhsuk-product-roadmap__item-expander", o && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Gh = Nu(({
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
  const [d, f] = Oe(() => /* @__PURE__ */ new Set()), [h, m] = Oe(() => /* @__PURE__ */ new Set()), b = Ue(/* @__PURE__ */ new Set()), g = ve((_) => d.has(_), [d]), p = ve((_) => {
    f((F) => {
      const S = new Set(F);
      return S.has(_.id) ? (S.delete(_.id), m((j) => {
        const C = new Set(j);
        return C.add(_.id), C;
      }), setTimeout(() => m((j) => {
        const C = new Set(j);
        return C.delete(_.id), C;
      }), 240), l?.(_.id, !1)) : (S.add(_.id), l?.(_.id, !0)), S;
    });
  }, [l]);
  zh(() => {
    if (u !== "inline" || !i || typeof document > "u") return;
    const _ = [];
    if (d.forEach((C) => {
      b.current.has(C) || _.push(C);
    }), b.current = new Set(d), !_.length) return;
    const F = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, S = _.map((C) => `.nhsuk-product-roadmap__inline-children[data-parent="${C}"] .nhsuk-product-roadmap__inline-child`).join(","), j = Array.from(document.querySelectorAll(S));
    if (j.length) {
      if (F) {
        j.forEach((C) => {
          C.style.opacity = "1", C.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((C) => {
        (C.gsap || C.default || C).to(j, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        j.forEach((C) => {
          C.style.opacity = "1", C.style.transform = "translateY(0)";
        });
      });
    }
  }, [d, u, i]);
  const x = ve(() => {
    d.size && f(/* @__PURE__ */ new Set());
  }, [d]), k = ye("nhsuk-product-roadmap", o), $ = Ti(n, 120, 1200, 400), T = Ti(a, 1, 6, 2), v = Le(() => e.map((_) => /* @__PURE__ */ new Date(_ + " 01")), [e]), M = Le(() => {
    if (v.length === 0) {
      const S = /* @__PURE__ */ new Date();
      return [S, S];
    }
    const _ = new Date(v[0]), F = Pr.offset(new Date(v[v.length - 1]), 1);
    return [_, F];
  }, [v]), D = Le(() => So().domain(M).range([0, v.length * $]), [M, v.length, $]), P = ve((_) => {
    if (_.startDate) {
      const V = new Date(_.startDate), B = new Date(_.endDate ?? _.startDate);
      B < V && B.setTime(V.getTime());
      const H = D(V), O = Pr.offset(new Date(B), 1);
      let ae = D(O);
      Number.isFinite(ae) || (ae = H + $);
      const W = Math.max($ * 0.25, ae - H), ie = H / $, je = W / $;
      return { ..._, _pxLeft: H, _pxWidth: W, _startFraction: ie, _spanColumns: je };
    }
    const F = _.date ?? 1, S = _.dateOffset ?? 0, j = _.length ?? 1, C = _.partialLength ?? 1, I = F - 1 + S, te = j - 1 + C;
    return { ..._, _pxLeft: I * $, _pxWidth: te * $, _startFraction: I, _spanColumns: te };
  }, [D, $]), y = Le(() => t.map((_) => {
    const S = _.roadmapItems.map((C) => {
      const I = !C.childItems && C.children ? { ...C, childItems: C.children } : { ...C };
      return P(I);
    }).sort((C, I) => C._pxLeft !== I._pxLeft ? C._pxLeft - I._pxLeft : I._pxWidth - C._pxWidth), j = [];
    return S.forEach((C) => {
      const I = C._pxLeft, te = C._pxLeft + C._pxWidth;
      let V = j.findIndex((B) => B <= I);
      V === -1 && (V = j.length, j.push(0)), j[V] = te, C.verticalPosition = V + 1;
    }), { ..._, roadmapItems: S, _laneCount: j.length };
  }), [t, P]), N = Le(() => y.map((_) => _._laneCount || 1), [y]), w = Le(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: k,
      style: { "--column-width": `${$}px`, gridTemplateColumns: w },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": y.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((_, F) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": F + 2, children: _ }, `${_}-${F}`))
        ] }),
        y.map((_, F) => {
          const S = F + 2, j = N[F];
          let C, I = 0, te = [];
          i && u === "inline" && (te = _.roadmapItems.filter((O) => g(O.id) && O.childItems && O.childItems.length).map((O) => ({ id: O.id, lane: O.verticalPosition || 1, count: O.childItems.length })).sort((O, ae) => O.lane - ae.lane), I = te.reduce((O, ae) => O + ae.count, 0));
          const V = j + I;
          C = `calc((${V} * var(--roadmap-item-block-height)) + (max(0, ${V} - 1) * var(--roadmap-row-gap)))`;
          const B = {};
          let H = 0;
          return te.forEach((O) => {
            H += O.count, B[O.lane + 1] = H;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": S, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: _.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: C }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: _.roadmapItems.map((O, ae) => {
              const W = (O.verticalPosition || 1) - 1, ie = te.filter((J) => J.lane - 1 < W).reduce((J, ne) => J + ne.count, 0), je = W + ie, ce = g(O.id), ue = h.has(O.id);
              return /* @__PURE__ */ r.jsxs(Dt.Fragment, { children: [
                /* @__PURE__ */ r.jsx(Vh, { item: O, maxLines: T, enableDrilldown: i, onExpand: p, isActive: ce, topLaneIndex: je, laneOffset: ie }),
                i && u === "inline" && (ce || ue) && O.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": O.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${O.title} child tasks`, children: O.childItems.map((J, ne) => {
                  const de = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let G = O._pxLeft, fe = O._pxWidth;
                  if (J.startDate) {
                    const R = new Date(J.startDate);
                    let Q = J.endDate ? new Date(J.endDate) : new Date(R);
                    Q < R && (Q = new Date(R));
                    const pe = new Date(Q);
                    pe.setDate(pe.getDate() + 1);
                    const le = D(R);
                    let se = D(pe);
                    (!Number.isFinite(se) || se <= le) && (se = le + 6), G = le, fe = Math.max(6, se - le);
                  }
                  const A = je + 1 + ne;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: ye("nhsuk-product-roadmap__inline-child", J.status && `nhsuk-product-roadmap__inline-child--status-${J.status}`, !ce && ue && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${G}px`, width: `${fe}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${A})`, height: de, opacity: ce ? 0 : void 0, transform: ce ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: J.title })
                      ]
                    },
                    J.id ?? ne
                  );
                }) })
              ] }, O.id ?? ae);
            }) }) })
          ] }, `${_.heading}-${F}`);
        }),
        i && u === "overlay" && d.size === 1 && (() => {
          const _ = Array.from(d)[0], F = t.flatMap((S) => S.roadmapItems).find((S) => S.id === _);
          return !F || !F.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${F.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: F.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: x, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: F.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: F.childItems.map((S, j) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: S.title }),
                S.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: S.content })
              ] }, S.id ?? j)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: x, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Gh.displayName = "ProductRoadmap";
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
const Ps = Math.PI, Ls = 2 * Ps, Ln = 1e-6, Yh = Ls - Ln;
function zl(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function qh(e) {
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
class Xh {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? zl : qh(t);
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
      let m = a - i, b = o - l, g = u * u + c * c, p = m * m + b * b, x = Math.sqrt(g), k = Math.sqrt(h), $ = s * Math.tan((Ps - Math.acos((g + h - p) / (2 * x * k))) / 2), T = $ / k, v = $ / x;
      Math.abs(T - 1) > Ln && this._append`L${t + T * d},${n + T * f}`, this._append`A${s},${s},0,0,${+(f * m > d * b)},${this._x1 = t + v * u},${this._y1 = n + v * c}`;
    }
  }
  arc(t, n, a, o, s, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(o), u = a * Math.sin(o), c = t + l, d = n + u, f = 1 ^ i, h = i ? o - s : s - o;
    this._x1 === null ? this._append`M${c},${d}` : (Math.abs(this._x1 - c) > Ln || Math.abs(this._y1 - d) > Ln) && this._append`L${c},${d}`, a && (h < 0 && (h = h % Ls + Ls), h > Yh ? this._append`A${a},${a},0,1,${f},${t - l},${n - u}A${a},${a},0,1,${f},${this._x1 = c},${this._y1 = d}` : h > Ln && this._append`A${a},${a},0,${+(h >= Ps)},${f},${this._x1 = t + a * Math.cos(s)},${this._y1 = n + a * Math.sin(s)}`);
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
  }, () => new Xh(t);
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
    var c, d = (u = Gl(u)).length, f, h = !1, m;
    for (a == null && (s = o(m = i())), c = 0; c <= d; ++c)
      !(c < d && n(f = u[c], c, u)) === h && ((h = !h) ? s.lineStart() : s.lineEnd()), h && s.point(+e(f, c, u), +t(f, c, u));
    if (m) return s = null, m + "" || null;
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
    var h, m, b, g = (f = Gl(f)).length, p, x = !1, k, $ = new Array(g), T = new Array(g);
    for (s == null && (l = i(k = u())), h = 0; h <= g; ++h) {
      if (!(h < g && o(p = f[h], h, f)) === x)
        if (x = !x)
          m = h, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), b = h - 1; b >= m; --b)
            l.point($[b], T[b]);
          l.lineEnd(), l.areaEnd();
        }
      x && ($[h] = +e(p, h, f), T[h] = +t(p, h, f), l.point(a ? +a(p, h, f) : $[h], n ? +n(p, h, f) : T[h]));
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
function Kh(e, t, n) {
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
function Jh(e = {}) {
  const t = q.useRef(null), n = q.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, o] = q.useState({ width: 0, height: 0 });
  q.useLayoutEffect(() => {
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
const Zl = q.createContext(null);
function jn() {
  return q.useContext(Zl);
}
const Zh = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: o,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = Jh(t), u = { height: e, position: "relative" };
  return n !== void 0 && (u.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: u, role: s, "aria-label": i, children: /* @__PURE__ */ r.jsx(Zl.Provider, { value: l, children: o }) });
}, Co = q.createContext(null), Vn = () => q.useContext(Co), Qh = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  parseX: a,
  children: o,
  xTickCount: s = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: u,
  yPadding: c,
  yBottomGapPx: d
}) => {
  const f = jn(), h = t ?? f?.innerWidth ?? 0, m = n ?? f?.innerHeight ?? 0, b = q.useMemo(() => e.flatMap((v) => v.data), [e]), g = q.useCallback(
    (v) => {
      if (a) return a(v);
      const M = v.x;
      return M instanceof Date ? M : new Date(M);
    },
    [a]
  ), p = u ?? 6, x = c ?? 6, k = q.useMemo(
    () => Kh(b, g, [
      p,
      Math.max(0, h - p)
    ]),
    [b, g, h, p]
  ), $ = q.useMemo(() => {
    const v = Math.max(0, d ?? 0), M = Math.max(0, m - (x + v));
    if (l) {
      const D = Mi([], (P) => P.y, [
        M,
        x
      ]);
      return D.domain(l), D;
    }
    return Mi(b, (D) => D.y, [M, x]);
  }, [b, m, l, x, d]), T = q.useMemo(
    () => ({
      xScale: k,
      yScale: $,
      getXTicks: (v = s) => k.ticks(v),
      getYTicks: (v = i) => $.ticks(v)
    }),
    [k, $, s, i]
  );
  return /* @__PURE__ */ r.jsx(Co.Provider, { value: T, children: o });
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
  tickFormatPreset: m,
  showZeroAxisBreak: b = !1,
  zeroAxisBreakGapPx: g = 32,
  zeroAxisBreakTickBufferPx: p = 12
}) => {
  const x = Vn(), k = jn(), $ = t || (e === "x" ? x?.xScale : x?.yScale), T = n ?? (e === "x" ? 6 : 5), v = typeof o == "function", M = q.useMemo(() => {
    if (v || !m) return;
    const y = (N) => new Intl.DateTimeFormat(void 0, N);
    switch (m) {
      case "dayShortMonth":
        return (N) => {
          const w = N instanceof Date ? N : new Date(N);
          return `${w.getDate()}
${y({ month: "short" }).format(w)}`;
        };
      case "dayShortMonthYear":
        return (N) => {
          const w = N instanceof Date ? N : new Date(N);
          return `${w.getDate()}
${y({ month: "short" }).format(w)} ${w.getFullYear()}`;
        };
      case "shortMonth":
        return (N) => {
          const w = N instanceof Date ? N : new Date(N);
          return y({ month: "short" }).format(w);
        };
      case "shortMonthYear":
        return (N) => {
          const w = N instanceof Date ? N : new Date(N);
          return `${y({ month: "short" }).format(w)} ${w.getFullYear()}`;
        };
      case "hourMinute":
        return (N) => {
          const w = N instanceof Date ? N : new Date(N);
          return y({ hour: "2-digit", minute: "2-digit" }).format(w);
        };
      default:
        return;
    }
  }, [v, m]);
  let D = v ? o : M || ((y) => String(y));
  const P = q.useMemo(() => a && Array.isArray(a) ? a : $ ? typeof $.ticks == "function" ? $.ticks(T) : $.domain ? $.domain() : [] : [], [$, T, a]);
  if (e === "x" && !v && !m && P.length && P.every((y) => y instanceof Date)) {
    const y = P[0], N = P[P.length - 1], w = N.getTime() - y.getTime(), _ = 24 * 3600 * 1e3, F = 365 * _, S = y.getFullYear() === N.getFullYear(), j = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (w < 2 * _) {
      const C = new Intl.DateTimeFormat(void 0, {
        hour: "2-digit",
        minute: "2-digit"
      });
      D = (I) => C.format(I);
    } else if (w < 32 * _)
      D = (C) => {
        const I = C;
        return `${I.getDate()} ${j.format(I)}`;
      };
    else if (w < F && S)
      D = (C) => j.format(C);
    else if (w < 2 * F) {
      const C = /* @__PURE__ */ new Set();
      D = (I) => {
        const te = I, V = te.getMonth();
        return C.has(V) || C.add(V), `${j.format(te)} ${te.getFullYear()}`;
      };
    } else
      D = (C) => String(C.getFullYear());
  }
  if (!$ || !k) return null;
  if (e === "x") {
    const y = i ?? k.innerHeight, N = typeof $.bandwidth == "function", w = N ? $.bandwidth() : 0, _ = (j) => {
      const C = $(j);
      return N ? C + w / 2 : C;
    };
    let F = u ?? 0;
    if (d && u == null) {
      const j = P.map(
        (I) => D(I).replace(/\n.*/g, "")
      ), C = j.length ? j.reduce((I, te) => I + te.length, 0) / j.length : 0;
      F = Math.max(12, Math.round(C * 6 + 4));
    }
    const S = q.useMemo(() => {
      if (a && Array.isArray(a) || F <= 0) return P;
      const j = [];
      let C = -1 / 0;
      for (const I of P) {
        const te = _(I);
        te - C >= F && (j.push(I), C = te);
      }
      return j;
    }, [
      P,
      $,
      F,
      a,
      N,
      w
    ]);
    return /* @__PURE__ */ r.jsxs(
      "g",
      {
        className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "),
        transform: `translate(0,${y})`,
        fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
        children: [
          /* @__PURE__ */ r.jsx("line", { x1: 0, x2: k.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
          S.map((j, C) => {
            const I = D(j), te = c && I.length > c ? I.slice(0, Math.max(1, c - 1)) + "…" : I, V = h ? te.split(/\n/) : [te.replace(/\n/g, " ")], B = f < 0 ? "end" : f > 0 ? "start" : "middle";
            return /* @__PURE__ */ r.jsxs(
              "g",
              {
                transform: `translate(${_(j)},0)`,
                children: [
                  /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
                  /* @__PURE__ */ r.jsxs(
                    "text",
                    {
                      y: 9,
                      textAnchor: B,
                      className: "fdp-axis__tick",
                      dominantBaseline: "hanging",
                      transform: f ? `rotate(${f})` : void 0,
                      fontFamily: "inherit",
                      children: [
                        V.map((H, O) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: O === 0 ? 0 : "1.1em", children: H }, O)),
                        te !== I && /* @__PURE__ */ r.jsx("title", { children: I })
                      ]
                    }
                  )
                ]
              },
              j?.toString?.() || C
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
          if (!b)
            return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: k.innerHeight, stroke: "currentColor" });
          const y = Math.max(6, g), N = Math.max(0, k.innerHeight - y);
          return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: N, stroke: "currentColor" });
        })(),
        P.map((y, N) => {
          const w = D(y), _ = c && w.length > c ? w.slice(0, Math.max(1, c - 1)) + "…" : w, F = h ? _.split(/\n/) : [_.replace(/\n/g, " ")];
          if (b) {
            const S = Math.max(6, g), j = Math.max(0, k.innerHeight - S), C = $(y), I = Math.max(0, p);
            if (C > j - I) return null;
          }
          return /* @__PURE__ */ r.jsxs(
            "g",
            {
              transform: `translate(0,${$(y)})`,
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
                      F.map((S, j) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: j === 0 ? 0 : "1.1em", children: S }, j)),
                      _ !== w && /* @__PURE__ */ r.jsx("title", { children: w })
                    ]
                  }
                )
              ]
            },
            y?.toString?.() || N
          );
        }),
        b && (() => {
          const y = Math.max(6, g), N = k.innerHeight, _ = Math.max(0, N - y), F = _ + y / 2, S = Math.max(3, Math.min(8, Math.round(y * 0.18))), j = Math.max(3, Math.min(6, Math.floor(y / (2 * S)) || 3)), C = -S * j;
          let I = `M0,${C}`;
          for (let B = 0; B < j; B++)
            I += ` l-4,${S} l4,${S}`;
          const te = F + C - 2, V = F - C + 2;
          return /* @__PURE__ */ r.jsxs("g", { children: [
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: _, y2: te, stroke: "currentColor", strokeDasharray: "2 2" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${F})`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("path", { d: I, stroke: "currentColor", strokeLinecap: "square", fill: "none" }) }),
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: V, y2: N, stroke: "currentColor", strokeDasharray: "2 2" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${N})`, children: /* @__PURE__ */ r.jsx("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: "0" }) })
          ] });
        })(),
        s && /* @__PURE__ */ r.jsx(
          "text",
          {
            transform: "rotate(-90)",
            x: -k.innerHeight / 2,
            y: -k.margin.left + 12,
            textAnchor: "middle",
            className: "fdp-axis__label",
            fontFamily: "inherit",
            children: s
          }
        )
      ]
    }
  );
}, em = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: o,
  showZeroAxisBreak: s = !1,
  zeroAxisBreakGapPx: i = 32,
  zeroAxisBreakTickBufferPx: l = 12
}) => {
  const u = Vn(), c = jn();
  if (!u || !c) return null;
  const d = e === "y" ? u.getYTicks(t) : u.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", o].filter(Boolean).join(" "), children: [
    e === "y" && d.map((f, h) => {
      const m = u.yScale(f);
      if (s) {
        const b = Math.max(6, i), g = Math.max(0, c.innerHeight - b), p = Math.max(0, l);
        if (m > g - p) return null;
      }
      return /* @__PURE__ */ r.jsx(
        "line",
        {
          x1: 0,
          x2: c.innerWidth,
          y1: m,
          y2: m,
          stroke: n,
          strokeDasharray: a
        },
        h
      );
    }),
    e === "x" && d.map((f, h) => /* @__PURE__ */ r.jsx(
      "line",
      {
        y1: 0,
        y2: c.innerHeight,
        x1: u.xScale(f),
        x2: u.xScale(f),
        stroke: n,
        strokeDasharray: a
      },
      h
    ))
  ] });
}, tm = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, Hr = {
  color: tm
}, nm = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Xa = {
  color: nm
}, rm = [
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
function am() {
  const e = { color: { ...Xa.color, ...Hr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
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
    return rm;
  }
}
function sm() {
  return ms || (ms = am()), ms;
}
function om(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function bs(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function im(e, t, n) {
  const a = bs(e), o = bs(t), s = bs(n), i = a * 0.4124 + o * 0.3576 + s * 0.1805, l = a * 0.2126 + o * 0.7152 + s * 0.0722, u = a * 0.0193 + o * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: u * 100 };
}
function lm(e, t, n) {
  let i = e / 95.047, l = t / 100, u = n / 108.883;
  const c = (d) => d > 8856e-6 ? Math.cbrt(d) : 7.787 * d + 16 / 116;
  return i = c(i), l = c(l), u = c(u), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - u) };
}
function ec(e) {
  const t = om(e);
  if (!t) return null;
  const n = im(t.r, t.g, t.b);
  return lm(n.x, n.y, n.z);
}
function Li(e, t) {
  const n = e.L - t.L, a = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(n * n + a * a + o * o);
}
function cm() {
  const e = sm();
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
          const m = Li(c, h);
          m < d && (d = m);
        }
      }
      d > l && (l = d, i = u);
    }
    s.push(i), o.delete(i);
  }
  return s.map((i) => e[i]);
}
function um() {
  return gs || (gs = cm()), gs;
}
function dm(e, t, n) {
  const a = (e + 16) / 116, o = t / 500 + a, s = a - n / 200, i = (d) => {
    const f = d * d * d;
    return f > 8856e-6 ? f : (d - 16 / 116) / 7.787;
  }, l = i(o) * 95.047, u = i(a) * 100, c = i(s) * 108.883;
  return { X: l, Y: u, Z: c };
}
function fm(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, o = e * -0.9689 + t * 1.8758 + n * 0.0415, s = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), o = Math.min(1, Math.max(0, i(o))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(a * 255), g: Math.round(o * 255), b: Math.round(s * 255) };
}
function pm(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function hm(e, t) {
  const n = ec(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: o, Y: s, Z: i } = dm(a, n.a, n.b), l = fm(o, s, i);
  return pm(l.r, l.g, l.b);
}
function mm() {
  const e = um(), n = [12, -12, 24, -24].map((o) => e.map((s) => hm(s, o))), a = [...e];
  return n.forEach((o) => a.push(...o)), a;
}
function gm() {
  return (!xs || xm()) && (xs = mm(), tc = Ql), xs;
}
let tc = null;
function xm() {
  return tc !== Ql;
}
function Xt(e) {
  const t = gm();
  return t[e % t.length];
}
let or = null, Lr = null, Fr = null, Ar = null;
function bm() {
  const e = Hr?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    or = [];
    for (let s = 1; s <= 12; s++) {
      const i = t[String(s)]?.$value || t[String(s)]?.value;
      or.push(typeof i == "string" ? i : "#212b32");
    }
    const n = e.region || {};
    Lr = {}, Object.keys(n).forEach((s) => {
      const i = n[s]?.$value || n[s]?.value;
      typeof i == "string" && (Lr[s] = i);
    });
    const a = e.severity || {}, o = e["org-level"] || {};
    Ar = {}, Object.keys(o).forEach((s) => {
      const i = o[s]?.$value || o[s]?.value;
      typeof i == "string" && (Ar[s] = i);
    }), Fr = {}, Object.keys(a).forEach((s) => {
      const i = a[s]?.$value || a[s]?.value;
      typeof i == "string" && (Fr[s] = i);
    });
  }
}
function Ka() {
  (!or || !Lr || !Fr || !Ar) && bm();
}
function Un(e) {
  return Ka(), or ? or[e % or.length] : "#212b32";
}
function vm(e) {
  return Ka(), Lr ? Lr[e] : void 0;
}
function xa(e, t) {
  return vm(e) || Un(t);
}
const Es = ["low", "moderate", "high", "critical"];
let vs = null;
function ym() {
  const e = { color: { ...Xa.color, ...Hr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
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
  return vs || (vs = ym()), vs;
}
function wm(e) {
  return nc()[e.toLowerCase()];
}
function _m(e, t) {
  return wm(e) || nc()[Es[t % Es.length]] || Xt(t);
}
function Sm(e) {
  return Ka(), Fr ? Fr[e] : void 0;
}
function km(e, t) {
  return Sm(e) || Un(t);
}
const Rs = ["trust", "ambulance", "icb", "region"];
let ys = null;
function Cm() {
  const e = { color: { ...Xa.color, ...Hr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
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
  return ys || (ys = Cm()), ys;
}
function Nm(e) {
  return rc()[e.toLowerCase()];
}
function jm(e, t) {
  return Nm(e) || rc()[Rs[t % Rs.length]] || Xt(t);
}
function Tm(e) {
  return Ka(), Ar ? Ar[e] : void 0;
}
function Dm(e, t) {
  return Tm(e) || Un(t);
}
let ws = null;
const Im = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function $m(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Mm() {
  const e = { color: { ...Xa.color, ...Hr.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const i = o.split(".").reduce((u, c) => u ? u[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return Im.forEach((o) => {
    const s = t(`color.data-viz.region.${o}`);
    s ? n[o] = s : a.push(o);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function Pm() {
  return ws || (ws = Mm()), ws;
}
function Lm(e) {
  return Pm()[$m(e)];
}
function ir(e, t) {
  return Lm(e) || Xt(t);
}
const ac = q.createContext(null), Or = () => q.useContext(ac), sy = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [o, s] = q.useState(() => new Set(e)), i = n !== void 0, l = q.useMemo(() => i ? new Set(n) : o, [i, n, o]), u = q.useCallback((d) => {
    i || s(new Set(d)), a?.(Array.from(d));
  }, [i, a]), c = q.useMemo(() => ({
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
}, sc = q.createContext(null), vn = () => q.useContext(sc), Fm = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = Vn(), o = Or(), [s, i] = q.useState(null), l = q.useRef(/* @__PURE__ */ new Map()), [u, c] = q.useState([]), d = q.useCallback(
    (D, P) => {
      l.current.set(D, P);
    },
    []
  ), f = q.useCallback((D) => {
    l.current.delete(D);
  }, []), h = q.useCallback(
    (D, P) => {
      if (!a) return;
      const { xScale: y, yScale: N } = a;
      let w = null, _ = 1 / 0;
      l.current.forEach((F, S) => {
        F.forEach((j, C) => {
          const I = y(j.x), te = N(j.y), V = I - D, B = te - P, H = Math.sqrt(V * V + B * B);
          H < _ && (_ = H, w = {
            seriesId: S,
            index: C,
            x: j.x,
            y: j.y,
            clientX: I,
            clientY: te
          });
        });
      }), w && _ <= t ? i(w) : i(null);
    },
    [a, t]
  ), m = q.useCallback(() => i(null), []);
  q.useEffect(() => {
    if (!s) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: D, yScale: P } = a, y = [];
    l.current.forEach((N, w) => {
      N.forEach((_, F) => {
        (s.x instanceof Date && _.x instanceof Date ? _.x.getTime() === s.x.getTime() : _.x === s.x) && y.push({
          seriesId: w,
          index: F,
          x: _.x,
          y: _.y,
          clientX: D(_.x),
          clientY: P(_.y)
        });
      });
    }), y.sort((N, w) => N.seriesId.localeCompare(w.seriesId)), c(y);
  }, [s, a]);
  const b = q.useCallback(
    (D) => {
      if (!s) return;
      const P = l.current.get(s.seriesId);
      if (!P) return;
      let y = s.index + D;
      if (y < 0 || y >= P.length) {
        if (!n) return;
        y = (y + P.length) % P.length;
      }
      const N = P[y];
      if (!a) return;
      const { xScale: w, yScale: _ } = a;
      i({
        seriesId: s.seriesId,
        index: y,
        x: N.x,
        y: N.y,
        clientX: w(N.x),
        clientY: _(N.y)
      });
    },
    [s, a, n]
  ), g = q.useCallback(
    (D) => {
      let P = Array.from(l.current.keys());
      if (o && (P = P.filter((I) => !o.isHidden(I))), P.length === 0) return;
      if (!s) {
        const I = P[0], te = l.current.get(I);
        if (!te || !a) return;
        const { xScale: V, yScale: B } = a, H = te[0];
        i({
          seriesId: I,
          index: 0,
          x: H.x,
          y: H.y,
          clientX: V(H.x),
          clientY: B(H.y)
        });
        return;
      }
      const y = P.indexOf(s.seriesId);
      if (y === -1) return;
      let N = y + D;
      if (N < 0 || N >= P.length) {
        if (!n) return;
        N = (N + P.length) % P.length;
      }
      const w = P[N], _ = l.current.get(w);
      if (!_ || !a) return;
      const F = Math.min(s.index, _.length - 1), S = _[F], { xScale: j, yScale: C } = a;
      i({
        seriesId: w,
        index: F,
        x: S.x,
        y: S.y,
        clientX: j(S.x),
        clientY: C(S.y)
      });
    },
    [s, a, n, o]
  ), p = q.useCallback(() => {
    let D = Array.from(l.current.keys());
    if (o && (D = D.filter((F) => !o.isHidden(F))), D.length === 0) return;
    const P = s ? s.seriesId : D[0], y = l.current.get(P);
    if (!y || y.length === 0 || !a) return;
    const N = y[0], { xScale: w, yScale: _ } = a;
    i({
      seriesId: P,
      index: 0,
      x: N.x,
      y: N.y,
      clientX: w(N.x),
      clientY: _(N.y)
    });
  }, [s, a, o]), x = q.useCallback(() => {
    let D = Array.from(l.current.keys());
    if (o && (D = D.filter((S) => !o.isHidden(S))), D.length === 0) return;
    const P = s ? s.seriesId : D[0], y = l.current.get(P);
    if (!y || y.length === 0 || !a) return;
    const N = y.length - 1, w = y[N], { xScale: _, yScale: F } = a;
    i({
      seriesId: P,
      index: N,
      x: w.x,
      y: w.y,
      clientX: _(w.x),
      clientY: F(w.y)
    });
  }, [s, a, o]), k = q.useCallback(
    () => b(1),
    [b]
  ), $ = q.useCallback(
    () => b(-1),
    [b]
  ), T = q.useCallback(
    () => g(1),
    [g]
  ), v = q.useCallback(
    () => g(-1),
    [g]
  ), M = q.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: u,
      focusNearest: h,
      clear: m,
      registerSeries: d,
      unregisterSeries: f,
      focusNextPoint: k,
      focusPrevPoint: $,
      focusNextSeries: T,
      focusPrevSeries: v,
      focusFirstPoint: p,
      focusLastPoint: x
    }),
    [
      s,
      u,
      h,
      m,
      d,
      f,
      k,
      $,
      T,
      v,
      p,
      x
    ]
  );
  return /* @__PURE__ */ r.jsx(sc.Provider, { value: M, children: e });
}, Am = ({
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
  const { xScale: m, yScale: b } = h, p = Or()?.isHidden(e.id) ?? !1, x = p && l === "fade";
  if (p && l === "remove")
    return null;
  const k = vn();
  q.useEffect(() => {
    if (!k) return;
    const P = e.data.map((y) => ({ x: i(y), y: y.y }));
    return k.registerSeries(e.id, P), () => k.unregisterSeries(e.id);
  }, [k, e.id, e.data, i]);
  const $ = q.useMemo(
    () => As(
      e.data,
      (P) => m(i(P)),
      (P) => b(P.y),
      { smooth: c }
    ),
    [e.data, m, b, i, c]
  ), T = q.useMemo(() => {
    if (!e.data.length) return "";
    const [P] = b.domain(), y = Fs().x((N) => m(i(N))).y0(() => b(P)).y1((N) => b(N.y));
    return c && y.curve(ga), y(e.data) || "";
  }, [e.data, m, b, i, c]), v = f && f[t], M = e.color || v || (n === "region" ? ir(e.id, t) : Xt(t)), D = n === "region" ? xa(e.id, t) : Un(t);
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
            d: T,
            fill: `url(#${d})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: $,
            fill: "none",
            stroke: M,
            strokeWidth: u,
            role: "presentation"
          }
        ),
        a && e.data.map((P, y) => {
          const N = m(i(P)), w = b(P.y), _ = o ? 0 : -1, F = !x && (o && y === s || k?.focused?.seriesId === e.id && k.focused.index === y), S = () => {
            k && !x && k.setFocused({
              seriesId: e.id,
              index: y,
              x: i(P),
              y: P.y,
              clientX: N,
              clientY: w
            });
          }, j = () => {
            k && k.focused?.seriesId === e.id && k.focused.index === y && k.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: N,
              cy: w,
              r: F ? 5 : 3.5,
              stroke: F ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : D,
              strokeWidth: F ? 2 : 1,
              fill: F ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : M,
              className: "fdp-line-point",
              tabIndex: x ? -1 : _,
              "aria-label": `${e.label || e.id} ${i(P).toDateString()} value ${P.y}`,
              "data-series": e.id,
              "data-index": y,
              onMouseEnter: S,
              onFocus: S,
              onMouseLeave: j,
              onBlur: j
            },
            y
          );
        })
      ]
    }
  );
}, Em = ({ polite: e = !0, format: t }) => {
  const n = vn(), [a, o] = q.useState(""), s = q.useRef("");
  return q.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let u;
    if (l && l.length > 1) {
      const c = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      u = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      u = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : Rm(i.seriesId, i.x, i.y, i.index);
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
function Rm(e, t, n, a) {
  const o = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${o}, value ${n}`;
}
const oy = () => {
  const e = vn(), t = jn();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: o, innerHeight: s } = t, i = Math.min(Math.max(n.clientX, 0), o), l = Math.min(Math.max(n.clientY, 0), s), u = i + 8, c = l - 8, d = a.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), h = d ? f : `${f} • ${n.y}`, m = /\d+$/.exec(n.seriesId || ""), b = m ? parseInt(m[0], 10) - 1 : 0, g = Xt(b >= 0 ? b : 0) || "#005eb8", p = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: p, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: p, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: g, stroke: "#fff", strokeWidth: 0.5 }),
    d ? (() => {
      const k = a.map((D) => `${D.seriesId}: ${D.y}`), $ = [h, ...k], T = $.reduce((D, P) => Math.max(D, P.length), 0), v = Math.max(90, T * 6.2 + 16), M = 16 * $.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: u, y: c - M, rx: 4, ry: 4, width: v, height: M, fill: "#212b32", opacity: 0.92 }),
        $.map((D, P) => /* @__PURE__ */ r.jsx("text", { x: u + 8, y: c - M + 6 + 16 * (P + 0.7), fill: "#fff", fontSize: 12, children: D }, P))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: u, y: c - 24, rx: 4, ry: 4, width: Math.max(60, h.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: u + 8, y: c - 8, fill: "#fff", fontSize: 12, children: h })
    ] })
  ] });
}, iy = ({
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
  const c = Or(), d = !!(c && !a && !l && s === void 0), f = a || d, h = e || [], m = s !== void 0, [b, g] = q.useState(new Set(i)), p = m ? new Set(s) : b, [x, k] = q.useState(""), $ = (T) => {
    if (d && c) {
      const _ = c.isHidden(T);
      c.toggle(T);
      const S = h.find((C) => C.id === T)?.label || T, j = u ? u(T, _, S) : `${S} ${_ ? "shown" : "hidden"}`;
      k(j);
      return;
    }
    if (!f) return;
    const v = new Set(p), M = v.has(T);
    M ? v.delete(T) : v.add(T), m || g(v);
    const D = h.filter((_) => !v.has(_.id)).map((_) => _.id), P = Array.from(v);
    l?.(D, P);
    const N = h.find((_) => _.id === T)?.label || T, w = u ? u(T, M, N) : `${N} ${M ? "shown" : "hidden"}`;
    k(w);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: h.map((T, v) => {
      const M = T.palette || t, D = T.color || (M === "region" ? ir(T.id, v) : M === "severity" ? _m(T.id, v) : M === "org-level" ? jm(T.id, v) : Xt(v));
      let P = T.stroke || (M === "region" ? xa(T.id, v) : M === "severity" ? km(T.id, v) : M === "org-level" ? Dm(T.id, v) : Un(v));
      if (o && P) {
        const w = P.trim().toLowerCase();
        (w === "#fff" || w === "#ffffff" || w === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(w)) && (P = "#212b32");
      }
      const y = d && c ? c.isHidden(T.id) : p.has(T.id), N = f ? {
        "aria-pressed": !y,
        "aria-label": `${T.label} (${y ? "show" : "hide"})`,
        onClick: () => $(T.id)
      } : { "aria-label": T.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${y ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: D,
              backgroundImage: T.patternDataUrl ? `url(${T.patternDataUrl})` : void 0,
              backgroundSize: T.patternDataUrl ? "auto" : void 0,
              borderColor: P
            },
            ...N
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: T.label })
      ] }, T.id);
    }) }),
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: x })
  ] });
}, ly = ({
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
  const { xScale: h, yScale: m } = f, g = Or()?.isHidden(e.id) ?? !1, p = g && s === "fade";
  if (g && s === "remove") return null;
  const x = vn();
  q.useEffect(() => {
    if (!x) return;
    const D = e.data.map((P) => ({ x: a(P), y: P.y }));
    return x.registerSeries(e.id, D), () => x.unregisterSeries(e.id);
  }, [x, e.id, e.data, a]);
  const k = d && d[t], $ = e.color || k || (n === "region" ? ir(e.id, t) : Xt(t)), T = q.useMemo(() => u && u.length === e.data.length ? As(
    e.data,
    (D) => h(a(D)),
    (D) => {
      const P = e.data.indexOf(D);
      return m(u[P].y1);
    },
    { smooth: l }
  ) : As(
    e.data,
    (D) => h(a(D)),
    (D) => m(D.y),
    { smooth: l }
  ), [e.data, u, h, m, a, l]), v = q.useMemo(() => {
    if (u && u.length === e.data.length) {
      const w = Fs().x((_) => h(a(_))).y0((_, F) => m(u[F].y0)).y1((_, F) => m(u[F].y1));
      return l && w.curve(ga), w(e.data) || "";
    }
    const [D, P] = m.domain();
    let y = i;
    y < D ? y = D : y > P && (y = P);
    const N = Fs().x((w) => h(a(w))).y0(() => m(y)).y1((w) => m(w.y));
    return l && N.curve(ga), N(e.data) || "";
  }, [e.data, u, h, m, a, i, l]), M = q.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: p ? 0.25 : 1,
      "aria-hidden": p ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: M, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: $, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: $, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: v,
            fill: c ? `url(#${M})` : $,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !o && /* @__PURE__ */ r.jsx("path", { d: T, fill: "none", stroke: $, strokeWidth: 1 })
      ]
    }
  );
}, cy = ({
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
  allSeries: m,
  stacked: b,
  gapRatio: g = 0.15,
  minBarWidth: p,
  gradientFill: x = !0,
  gradientStrokeMatch: k = !0,
  opacity: $ = 1,
  fadedOpacity: T = 0.25,
  flatFillOpacity: v = 1,
  colors: M
}) => {
  const D = Math.max(0, g), P = Vn(), y = jn();
  if (!P || !y) return null;
  const { xScale: N, yScale: w } = P, F = Or()?.isHidden(e.id) ?? !1, S = F && f === "fade";
  if (F && f === "remove") return null;
  const j = vn();
  q.useEffect(() => {
    if (!j) return;
    const J = e.data.map((ne) => ({ x: o(ne), y: ne.y }));
    return j.registerSeries(e.id, J), () => j.unregisterSeries(e.id);
  }, [j, e.id, e.data, o]);
  const C = typeof N.bandwidth == "function", I = C ? N.bandwidth() : void 0, te = q.useMemo(() => {
    if (I != null) return I;
    const J = m && m.length ? m : [e], ne = [];
    J.forEach((oe) => {
      oe.data.forEach((A) => {
        const R = N(o(A));
        Number.isFinite(R) && ne.push(R);
      });
    });
    const de = ne.sort((oe, A) => oe - A);
    if (de.length <= 1) return 40;
    const G = [];
    for (let oe = 1; oe < de.length; oe++)
      G.push(de[oe] - de[oe - 1]);
    return G.sort((oe, A) => oe - A), (G[Math.floor(G.length / 2)] || 40) * i;
  }, [e.data, m, N, o, i, I]), { basePerBar: V } = q.useMemo(() => {
    if (C) {
      const de = te, G = Math.max(
        1,
        (de - l * (n - 1)) / n
      ), fe = e.barWidth ?? u;
      let oe = fe ? Math.min(fe, de) : G;
      if (c) {
        const A = de * Math.min(1, Math.max(0.05, d)), R = Math.max(
          1,
          (A - l * (n - 1)) / n
        );
        oe = fe ? Math.min(oe, R) : R;
      }
      return { basePerBar: oe };
    }
    const J = e.barWidth ?? u, ne = Math.max(
      1,
      (te - l * (n - 1)) / n
    );
    if (c) {
      const de = m && m.length ? m : [e], G = [];
      de.forEach(
        (pe) => pe.data.forEach((le) => {
          const se = N(o(le));
          Number.isFinite(se) && G.push(se);
        })
      ), G.sort((pe, le) => pe - le);
      const fe = [];
      for (let pe = 1; pe < G.length; pe++)
        fe.push(G[pe] - G[pe - 1]);
      fe.sort((pe, le) => pe - le);
      const A = (fe[Math.floor(fe.length / 2)] || te) * Math.min(1, Math.max(0.05, d)), R = Math.max(
        1,
        (A - l * (n - 1)) / n
      );
      return { basePerBar: J ? Math.min(J, R) : R };
    }
    return J ? { basePerBar: Math.min(J, ne) } : { basePerBar: ne };
  }, [
    C,
    te,
    l,
    n,
    u,
    e.barWidth,
    c,
    d,
    m,
    N,
    o
  ]), B = q.useMemo(() => {
    if (C) return [];
    const J = [];
    return (m && m.length ? m : [e]).forEach(
      (de) => de.data.forEach((G) => {
        const fe = N(o(G));
        Number.isFinite(fe) && J.push(fe);
      })
    ), J.sort((de, G) => de - G), Array.from(new Set(J));
  }, [C, m, e, N, o]), H = q.useMemo(() => {
    if (C)
      return [];
    if (!B.length) return [];
    if (B.length === 1)
      return [
        { center: B[0], left: 0, right: y.innerWidth }
      ];
    const J = [];
    for (let ne = 0; ne < B.length; ne++) {
      const de = B[ne], G = ne === 0 ? 0 : (B[ne - 1] + de) / 2, fe = ne === B.length - 1 ? y.innerWidth : (de + B[ne + 1]) / 2;
      J.push({
        center: de,
        left: Math.max(0, G),
        right: Math.min(y.innerWidth, fe)
      });
    }
    return J;
  }, [C, B, y.innerWidth]), O = q.useMemo(() => {
    if (C || !H.length)
      return;
    const J = Math.min(1, Math.max(0.05, i)), ne = H.map((A) => Math.max(2, A.right - A.left)), de = ne.map(
      (A) => Math.max(2, Math.min(A - 1, A * J))
    );
    let G = Math.min(...de);
    if (p)
      if (n <= 1) {
        const A = Math.min(...ne.map((R) => R - 1));
        A >= p && G < p && (G = Math.min(A, p));
      } else {
        const A = Math.min(...ne.map((Q) => Q - 1)), R = p * n + (n - 1) * (p * D);
        R <= A && G < R && (G = R);
      }
    if (n <= 1)
      return p && G < p && ne.every((R) => R >= p) ? { groupWidth: p, barWidth: p } : { groupWidth: G, barWidth: G };
    let fe = G / (n + (n - 1) * D);
    return fe < 1 && (fe = 1), p && fe < p && p * n + (n - 1) * (p * D) <= G && (fe = p), { groupWidth: fe * n + (n - 1) * (fe * D), barWidth: fe };
  }, [
    C,
    H,
    i,
    n,
    D,
    p
  ]), ae = M && M[t] ? M[t] : void 0, W = e.color || ae || (a === "region" ? ir(e.id, t) : Xt(t)), ie = a === "region" ? xa(e.id, t) : Un(t), je = k && (e.color || ae) ? W : ie, ce = Number.isFinite(w(0)) ? w(0) : w.range()[0], ue = q.useId();
  return b && b.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: S ? T : $,
      "aria-hidden": S ? !0 : void 0,
      children: [
        x && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: ue,
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
        e.data.map((J, ne) => {
          const de = o(J), G = N(C ? J.x : de);
          let fe, oe;
          if (C)
            fe = te, oe = G;
          else {
            const z = H.find(
              (X) => Math.abs(X.center - G) < 0.5
            );
            if (!z || !O)
              fe = V, oe = G - V / 2;
            else {
              const { groupWidth: X } = O;
              fe = X;
              let L = G - X / 2;
              L < z.left && (L = z.left), L + X > z.right && (L = Math.max(z.left, z.right - X)), oe = L;
            }
          }
          const A = b[ne], R = w(A.y0), Q = w(A.y1), pe = Math.min(R, Q), le = Math.abs(Q - R) || 1;
          if (!C && p && fe < p) {
            const z = H.find(
              (X) => Math.abs(X.center - G) < 0.5
            );
            if (z) {
              const X = Math.max(2, z.right - z.left - 1), L = Math.min(X, p);
              L > fe && (fe = L, oe = Math.max(
                z.left,
                Math.min(z.right - fe, G - fe / 2)
              ));
            }
          }
          const se = !S && j?.focused?.seriesId === e.id && j.focused.index === ne, E = () => {
            !j || S || j.setFocused({
              seriesId: e.id,
              index: ne,
              x: de,
              y: A.y1 - A.y0,
              clientX: oe + fe / 2,
              clientY: pe
            });
          }, U = () => {
            j?.focused?.seriesId === e.id && j.focused.index === ne && j.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: oe,
              y: pe,
              width: fe,
              height: le,
              fill: x ? `url(#${ue})` : W,
              ...x ? {} : { fillOpacity: v },
              stroke: se ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : x && k ? W : void 0,
              strokeWidth: se ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: S || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${A.y1 - A.y0}`,
              onMouseEnter: E,
              onFocus: E,
              onMouseLeave: U,
              onBlur: U
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
      opacity: S ? T : $,
      "aria-hidden": S ? !0 : void 0,
      children: [
        x && /* @__PURE__ */ r.jsxs("defs", { children: [
          h === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: ue,
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
          h === "category" && e.data.map((J, ne) => {
            const G = M && M[ne] || (a === "region" ? ir(String(J.x), ne) : Xt(ne)), fe = `${ue}-${ne}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: fe,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: G, stopOpacity: 0.3 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "60%", stopColor: G, stopOpacity: 0.14 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: G, stopOpacity: 0.06 })
                ]
              },
              fe
            );
          })
        ] }),
        e.data.map((J, ne) => {
          const de = o(J), G = N(C ? J.x : de);
          let fe, oe;
          if (C) {
            const Z = te;
            if (n <= 1)
              oe = Z, fe = G;
            else {
              oe = Math.max(
                1,
                Z / (n + (n - 1) * D)
              );
              const ee = oe * D, K = oe * n + ee * (n - 1);
              fe = G + (Z - K) / 2 + t * (oe + ee);
            }
          } else {
            const Z = H.find((ee) => ee.center === G);
            if (!Z || !O)
              oe = V, fe = G - V / 2, p && oe < p && (oe = p, fe = G - oe / 2);
            else {
              const { barWidth: ee } = O;
              oe = ee;
              const K = n > 1 ? ee * D : 0, re = oe * n + K * (n - 1);
              let me = G - re / 2;
              me < Z.left && (me = Z.left), me + re > Z.right && (me = Math.max(Z.left, Z.right - re)), fe = me + t * (oe + K);
            }
            if (p && oe < p) {
              const ee = H.find(
                (K) => Math.abs(K.center - G) < 0.5
              );
              if (ee) {
                const K = Math.max(2, ee.right - ee.left - 1), re = Math.min(K, p);
                if (re > oe)
                  if (n <= 1)
                    oe = re, fe = Math.max(
                      ee.left,
                      Math.min(ee.right - oe, G - oe / 2)
                    );
                  else {
                    const me = re * D, be = re * n + me * (n - 1);
                    if (be <= ee.right - ee.left - 1) {
                      oe = re;
                      const Ce = be;
                      let we = G - Ce / 2;
                      we < ee.left && (we = ee.left), we + Ce > ee.right && (we = Math.max(
                        ee.left,
                        ee.right - Ce
                      )), fe = we + t * (oe + me);
                    }
                  }
              }
            }
          }
          const A = fe + oe / 2, R = w(J.y), Q = Math.min(ce, R), pe = Math.abs(ce - R), le = !S && j?.focused?.seriesId === e.id && j.focused.index === ne, se = () => {
            !j || S || j.setFocused({
              seriesId: e.id,
              index: ne,
              x: de,
              y: J.y,
              clientX: A,
              clientY: R
            });
          }, E = () => {
            j?.focused?.seriesId === e.id && j.focused.index === ne && j.clear();
          }, U = h === "category" && M ? M[ne] : void 0, z = h === "category" ? U || (a === "region" ? ir(String(J.x), ne) : Xt(ne)) : W, X = h === "category" ? `${ue}-${ne}` : ue, L = x && k ? z : h === "category" ? a === "region" ? xa(String(J.x), ne) : Un(ne) : je, Y = le ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : L || z;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: fe,
              y: Q,
              width: oe,
              height: pe || 1,
              fill: x ? `url(#${X})` : z,
              ...x ? {} : { fillOpacity: v },
              stroke: Y,
              strokeWidth: le ? 2 : 1,
              className: "fdp-bar",
              tabIndex: S || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${J.y}`,
              onMouseEnter: se,
              onFocus: se,
              onMouseLeave: E,
              onBlur: E
            },
            ne
          );
        })
      ]
    }
  );
}, uy = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: o = 0.05,
  children: s,
  yTickCount: i = 5
}) => {
  const l = jn(), u = t ?? l?.innerWidth ?? 0, c = n ?? l?.innerHeight ?? 0, d = q.useMemo(() => e.flatMap((p) => p.data), [e]), f = q.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    return d.forEach((x) => p.add(x.x)), Array.from(p);
  }, [d]), h = q.useMemo(
    () => Math.max(0, ...d.map((p) => p.y)),
    [d]
  ), m = q.useMemo(
    () => dl().domain(f).range([0, u]).paddingInner(a).paddingOuter(o),
    [f, u, a, o]
  ), b = q.useMemo(
    () => la().domain([0, h]).nice().range([c, 0]),
    [h, c]
  ), g = q.useMemo(
    () => ({
      xScale: m,
      yScale: b,
      getXTicks: () => f,
      getYTicks: (p = i) => b.ticks(p)
    }),
    [m, b, f, i]
  );
  return /* @__PURE__ */ r.jsx(Co.Provider, { value: g, children: s });
}, dy = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: o,
  id: s,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const u = q.useId(), c = s || u, d = t ? `${c}-desc` : void 0, f = n ? `${c}-src` : void 0, h = typeof window < "u" && !l;
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
}, fy = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const o = q.useRef(null);
  return q.useEffect(() => {
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
}, Bm = ({
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
  style: m,
  id: b,
  announceDelta: g = !0,
  visual: p
}) => {
  const x = q.useId(), k = b || x, $ = `${k}-label`, T = `${k}-value`, v = `${k}-delta`, M = typeof t == "number" && !Number.isNaN(t), D = c ? "—" : d ? "" : M ? f ? f(t) : t.toLocaleString() : t;
  let P, y = "", N = "";
  if (a && !c && !d) {
    P = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const w = Math.abs(a.value), _ = P === "up" ? `+${w}` : P === "down" ? `-${w}` : "0", F = a.isPercent ? "%" : "";
    if (y = `${_}${F}`, a.ariaLabel)
      N = a.ariaLabel;
    else {
      const S = a.invert ? P === "down" : P === "up";
      N = `${P === "neutral" ? "no change" : P === "up" ? "up" : "down"} ${w}${F}${P === "neutral" ? "" : S ? " (improvement)" : " (worse)"}`;
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
      style: m,
      role: "group",
      "aria-labelledby": $,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ r.jsx("h3", { id: $, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ r.jsx("div", { id: T, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : d ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: d }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: D }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: v,
              "aria-label": N,
              className: ha(
                "fdp-metric-card__delta",
                P && `fdp-metric-card__delta--${P}`
              ),
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-value", children: y }),
                a.period && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          u && u.length > 0 && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        p && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: p }),
        g && a && !a.ariaLabel && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: N })
      ] })
    }
  );
};
let Bs = null;
try {
  Bs = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const Ke = (e, t) => {
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
  start: Ke("gradient.stop.start-opacity", "0.12"),
  mid: Ke("gradient.stop.mid-opacity", "0.03"),
  end: Ke("gradient.stop.end-opacity", "0"),
  triStart: Ke(
    "gradient.stop.triangle-start-opacity",
    Ke("gradient.stop.start-opacity", "0.12")
  ),
  triMid: Ke(
    "gradient.stop.triangle-mid-opacity",
    Ke("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: Ke(
    "gradient.stop.triangle-end-opacity",
    Ke("gradient.stop.end-opacity", "0")
  )
});
var _t = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(_t || {}), Re = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Re || {}), Ie = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(Ie || {}), en = /* @__PURE__ */ ((e) => (e.SinglePoint = "single_point", e.TwoSigma = "two_sigma", e.Shift = "shift", e.Trend = "trend", e))(en || {});
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
const Hm = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, Om = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, oc = No.reduce(
  (e, t, n) => (e[t] = {
    id: t,
    rank: n + 1,
    label: Hm[t],
    category: Om[t],
    participatesInRanking: !0
  }, e),
  {}
);
No.map(
  (e) => oc[e]
);
var Ct = /* @__PURE__ */ ((e) => (e.Up = "up", e.Down = "down", e))(Ct || {}), wt = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(wt || {}), ct = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(ct || {}), Bt = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(Bt || {}), Qr = /* @__PURE__ */ ((e) => (e.Legacy = "legacy", e.DirectionalFirst = "directional_first", e))(Qr || {}), ic = /* @__PURE__ */ ((e) => (e.None = "none", e.SqlRankingV26a = "sql_ranking_v2_6a", e))(ic || {}), Qn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(Qn || {}), lc = /* @__PURE__ */ ((e) => (e.Sql = "sql", e.Conflict = "conflict", e))(lc || {}), Tr = /* @__PURE__ */ ((e) => (e.ImprovementValueBeforePruning = "improvementValueBeforePruning", e.ConcernValueBeforePruning = "concernValueBeforePruning", e))(Tr || {});
const lr = {
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
    case Ie.Improvement:
      return "Improvement signal";
    case Ie.Concern:
      return "Concern signal";
    case Ie.Neither:
      return "Common cause variation";
    case Ie.Suppressed:
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
function Um(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((n - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const zt = {
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
  return e ? zt[e]?.token ?? zt.neither.token : zt.neither.token;
}
function Wm(e) {
  return e ? zt[e]?.hex ?? zt.neither.hex : zt.neither.hex;
}
var En = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(En || {});
const zm = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, Vm = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var ot = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(ot || {}), Me = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Me || {}), Tt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(Tt || {}), ke = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(ke || {});
const Gm = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, o = parseInt(t.slice(4, 6), 16) / 255, s = [n, a, o].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
}, es = {
  special_cause_deteriorating: {
    hex: zt.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: zt.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: zt.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: zt.suppressed.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(es).forEach((e) => {
  e.text || (e.text = Gm(e.hex));
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
function Ym(e, t) {
  let n;
  return e === "common_cause" ? n = Fi.common : n = Fi.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
var jt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(jt || {}), He = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(He || {}), Be = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(Be || {}), rt = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(rt || {}), Rn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(Rn || {}), Yt = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(Yt || {}), cr = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(cr || {}), nr = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(nr || {}), xt = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(xt || {}), tn = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(tn || {});
const Cn = {
  [rt.SinglePoint]: 1,
  [rt.TwoSigma]: 2,
  [rt.Shift]: 3,
  [rt.Trend]: 4
}, Ai = 3.267, qm = 2.66, Ei = 0.2777;
function $e(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function rr(e) {
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
    const s = rr(a), i = Ai * s;
    a = a.filter((l) => l <= i);
  }
  const o = rr(a);
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
  const n = qm * t, a = 2 / 3 * n, o = 1 / 3 * n;
  return {
    upperProcessLimit: e + n,
    lowerProcessLimit: e - n,
    upperTwoSigma: e + a,
    lowerTwoSigma: e - a,
    upperOneSigma: e + o,
    lowerOneSigma: e - o
  };
}
function Xm(e, t, n, a) {
  if (e === jt.T) {
    const f = t.map((P) => $e(P) && P > 0 ? Math.pow(P, Ei) : null), h = Ri(f, n), m = Bi(h, a), b = f.filter((P, y) => !n[y] && $e(P)), g = b.length ? rr(b) : NaN, p = Hi(g, m.mrMean), x = (P) => $e(P) && P > 0 ? Math.pow(P, 1 / Ei) : null, k = $e(p.upperProcessLimit) ? x(p.upperProcessLimit) : null, $ = $e(p.lowerProcessLimit) && p.lowerProcessLimit > 0 ? x(p.lowerProcessLimit) : null, T = $e(p.upperTwoSigma) ? x(p.upperTwoSigma) : null, v = $e(p.lowerTwoSigma) && p.lowerTwoSigma > 0 ? x(p.lowerTwoSigma) : null, M = $e(p.upperOneSigma) ? x(p.upperOneSigma) : null, D = $e(p.lowerOneSigma) && p.lowerOneSigma > 0 ? x(p.lowerOneSigma) : null;
    return {
      mean: $e(g) && g > 0 ? x(g) : null,
      mr: h,
      mrMean: m.mrMean,
      mrUcl: m.mrUcl,
      upperProcessLimit: k,
      lowerProcessLimit: $,
      upperTwoSigma: T,
      lowerTwoSigma: v,
      upperOneSigma: M,
      lowerOneSigma: D
    };
  }
  if (e === jt.G) {
    const f = t.filter((w, _) => !n[_] && $e(w)), h = f.length ? rr(f) : NaN, m = $e(h) ? 1 / (h + 1) : NaN, b = (w) => {
      if (!$e(m) || m <= 0 || m >= 1) return NaN;
      const _ = Math.ceil(Math.log(1 - w) / Math.log(1 - m)) - 1;
      return Math.max(0, _);
    }, g = 135e-5, p = 1 - 135e-5, x = 0.02275, k = 1 - 0.02275, $ = 0.158655, T = 1 - 0.158655, v = b(p), M = b(g), D = b(k), P = b(x), y = b(T), N = b($);
    return {
      mean: $e(h) ? h : null,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: $e(v) ? v : null,
      lowerProcessLimit: $e(M) ? M : null,
      upperTwoSigma: $e(D) ? D : null,
      lowerTwoSigma: $e(P) ? P : null,
      upperOneSigma: $e(y) ? y : null,
      lowerOneSigma: $e(N) ? N : null
    };
  }
  if (e !== jt.XmR)
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
  const o = Ri(t, n), s = o.filter($e), i = s.length ? rr(s) : NaN, l = $e(i) ? 3.267 * i : NaN;
  let u = NaN;
  {
    const f = t.reduce((h, m, b) => {
      if (n[b] || !$e(m)) return h;
      if (!a)
        return h.push(m), h;
      const g = o[b];
      return (g === null || !$e(l) || $e(g) && g <= l) && h.push(m), h;
    }, []);
    u = f.length ? rr(f) : NaN;
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
function Km(e, t) {
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
    if (!d.every((T) => $e(T.value) && $e(T.mean)))
      continue;
    const f = d[0].mean, h = d.every((T) => T.value > f), m = d.every((T) => T.value < f);
    if (!h && !m)
      continue;
    const b = d[0].upperTwoSigma ?? 1 / 0, g = d[0].lowerTwoSigma ?? -1 / 0, p = d[0].upperProcessLimit ?? 1 / 0, x = d[0].lowerProcessLimit ?? -1 / 0, k = d.filter((T) => t.twoSigmaIncludeAboveThree ? T.value > b : T.value > b && T.value <= p), $ = d.filter((T) => t.twoSigmaIncludeAboveThree ? T.value < g : T.value < g && T.value >= x);
    h && k.length >= 2 && k.forEach((T) => T.twoSigmaUp = !0), m && $.length >= 2 && $.forEach((T) => T.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let u = 0; u <= n.length - 5; u++) {
      const d = n.slice(u, u + 5).map(a);
      if (!d.every((k) => $e(k.value) && $e(k.mean)))
        continue;
      const f = d[0].mean, h = d.every((k) => k.value > f), m = d.every((k) => k.value < f);
      if (!h && !m)
        continue;
      const b = d[0].upperOneSigma ?? 1 / 0, g = d[0].lowerOneSigma ?? -1 / 0, p = d.filter((k) => k.value > b), x = d.filter((k) => k.value < g);
      h && p.length >= 4 && p.forEach((k) => k.fourOfFiveUp = !0), m && x.length >= 4 && x.forEach((k) => k.fourOfFiveDown = !0);
    }
  for (let u = 0; u <= n.length - s; u++) {
    const c = n.slice(u, u + s), d = c.map(a);
    if (!d.every((m) => $e(m.value)))
      continue;
    let f = !0, h = !0;
    for (let m = 1; m < d.length && (d[m].value > d[m - 1].value || (f = !1), d[m].value < d[m - 1].value || (h = !1), !(!f && !h)); m++)
      ;
    f && c.forEach((m) => a(m).trendUp = !0), h && c.forEach((m) => a(m).trendDown = !0);
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
  const n = t === He.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === He.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, a = t === He.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === He.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: n, opposite: a };
}
function Ui(e, t, n, a = !1, o, s, i = !1) {
  const { up: l, dn: u, upMax: c, dnMax: d, primeDirection: f } = fc(e);
  e.primeDirection = f;
  const h = e.specialCauseImprovementValue, m = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && Jm({ row: e, metric: t, metricConflictRule: n, preferImprovementWhenConflict: a, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: o, ruleHierarchy: s }), t === He.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? Be.ImprovementHigh : e.specialCauseConcernValue !== null ? Be.ConcernLow : Be.CommonCause : t === He.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? Be.ImprovementLow : e.specialCauseConcernValue !== null ? Be.ConcernHigh : Be.CommonCause : e.variationIcon = Be.CommonCause;
  const b = e.specialCauseImprovementValue !== null ? Yt.Up : e.specialCauseConcernValue !== null ? Yt.Down : void 0, g = b === Yt.Up ? c : b === Yt.Down ? d : Math.max(c, d);
  e.primeRank = g || void 0;
  const p = b === Yt.Up ? l.find((x) => x.rank === g) : b === Yt.Down ? u.find((x) => x.rank === g) : void 0;
  return e.primeRuleId = p?.id, { originalImprovement: h, originalConcern: m };
}
function Jm(e) {
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
  const c = o ? nr.PreferImprovement : l ?? nr.SqlPrimeThenRule;
  if (c === nr.PreferImprovement) {
    n === He.Up ? t.specialCauseConcernValue = null : n === He.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (c === nr.RuleHierarchy) {
    const d = u ?? [rt.Trend, rt.Shift, rt.TwoSigma, rt.SinglePoint], { up: f, dn: h } = fc(t);
    for (const m of d) {
      const b = f.some((p) => p.id === m), g = h.some((p) => p.id === m);
      if (b && !g) {
        n === He.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (g && !b) {
        n === He.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (b && g) {
        (n === He.Up || n === He.Down) && (a === cr.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === Rn.Upwards ? n === He.Up ? t.specialCauseConcernValue = null : n === He.Down && (t.specialCauseImprovementValue = null) : i === Rn.Downwards ? n === He.Up ? t.specialCauseImprovementValue = null : n === He.Down && (t.specialCauseConcernValue = null) : a === cr.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
var Hs = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(Hs || {});
function Zm(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Qm(e) {
  const t = Zm(e);
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
  }), o = (i, l, u, c, d, f, h, m) => {
    i.push({
      trendDirection: m,
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
      const x = e[c];
      if (!x || x.value == null || x.ghost || !(l === "Up" ? x.trendUp : x.trendDown)) break;
    }
    const d = c - 1, f = [];
    let h, m, b = 1 / 0, g = -1 / 0, p = 0;
    for (let x = u; x <= d; x++) {
      const k = e[x];
      if (k.value == null) continue;
      const $ = k.value - (k.mean ?? 0), T = Qm($);
      if (!T) {
        h !== void 0 && (o(f, h, x - 1, m, b, g, p, l), h = void 0, m = void 0, b = 1 / 0, g = -1 / 0, p = 0);
        continue;
      }
      if (h === void 0)
        ({ segStart: h, segSide: m, minV: b, maxV: g, maxAbsDelta: p } = (() => {
          const v = n(x, T, k.value);
          return {
            segStart: v.segStart,
            segSide: v.segSide,
            minV: v.minV,
            maxV: v.maxV,
            maxAbsDelta: Math.abs($)
          };
        })());
      else if (T !== m)
        o(f, h, x - 1, m, b, g, p, l), { segStart: h, segSide: m, minV: b, maxV: g, maxAbsDelta: p } = (() => {
          const v = n(x, T, k.value);
          return {
            segStart: v.segStart,
            segSide: v.segSide,
            minV: v.minV,
            maxV: v.maxV,
            maxAbsDelta: Math.abs($)
          };
        })();
      else {
        const v = a(k.value, Math.abs($), b, g, p);
        b = v.minV, g = v.maxV, p = v.maxAbsDelta;
      }
    }
    h !== void 0 && o(f, h, d, m, b, g, p, l), t.push({ trendDirection: l, start: u, end: d, segments: f }), s = d + 1;
  }
  return t;
}
function eg(e) {
  if (e === He.Up) return "Above";
  if (e === He.Down) return "Below";
}
function tg(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function zi(e, t) {
  const n = t.strategy ?? xt.CrossingAfterFavourable, a = eg(t.metricImprovement), o = tg(a), s = [];
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
var mt = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(mt || {}), pr = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(pr || {});
function ng(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), n = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: n };
}
function To(e, t) {
  const n = t.metricImprovement, a = t.trendVisualMode ?? "Ungated", o = t.enableNeutralNoJudgement ?? !0;
  return e.map((s) => {
    if (!s || s.value == null || s.ghost) return "Common";
    const { upAny: i, downAny: l } = ng(s);
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
function rg(e, t, n) {
  const a = n?.mode ?? "Disabled";
  if (!e.length) return [];
  let o = To(e, {
    metricImprovement: t,
    trendVisualMode: pr.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (a !== "RecalcCrossing" || t === He.Neither) return o;
  const s = Math.max(0, n?.preWindow ?? 2), i = Math.max(0, n?.postWindow ?? 3), l = n?.prePolarity ?? "Opposite", u = (f, h) => {
    if (f < 0 || f >= o.length) return;
    const m = o[f];
    (m === mt.Common || m === mt.NoJudgement) && (o[f] = h);
  }, c = (f) => {
    if (f == null) return null;
    const h = e.reduce((b, g) => (g.partitionId === f && typeof g.value == "number" && !g.ghost && b.push(g.value), b), []);
    return h.length ? h.reduce((b, g) => b + g, 0) / h.length : null;
  }, d = Array.isArray(n?.boundaryIndices) && n.boundaryIndices.length ? n.boundaryIndices.slice().filter((f) => Number.isFinite(f)) : e.reduce((f, h, m) => {
    if (m === 0) return f;
    const b = e[m - 1];
    return b && h && h.partitionId !== b.partitionId && f.push(m), f;
  }, []);
  for (const f of d) {
    const h = e[f - 1], m = e[f];
    if (!h || !m)
      continue;
    let b = f - 1;
    for (; b - 1 >= 0 && e[b - 1] && e[b - 1].partitionId === h.partitionId; )
      b--;
    let g = f;
    for (; g + 1 < e.length && e[g + 1] && e[g + 1].partitionId === m.partitionId; )
      g++;
    let p = null;
    for (let M = f - 1; M >= 0; M--) {
      const D = e[M];
      if (D.partitionId !== h.partitionId) break;
      if (typeof D.mean == "number") {
        p = D.mean;
        break;
      }
    }
    let x = null;
    for (let M = f; M < e.length; M++) {
      const D = e[M];
      if (D.partitionId !== m.partitionId) break;
      if (typeof D.mean == "number") {
        x = D.mean;
        break;
      }
    }
    if (p == null && (p = c(h.partitionId ?? null)), x == null && (x = c(m.partitionId ?? null)), p == null || x == null)
      continue;
    const k = x - p, $ = t === He.Up ? k > 0 : k < 0, T = $ ? mt.Improvement : mt.Concern, v = l === "Same" ? T : $ ? mt.Concern : mt.Improvement;
    for (let M = 1; M <= s; M++) {
      const D = f - M;
      if (D < b) break;
      u(D, v);
    }
    for (let M = 0; M < i; M++) {
      const D = f + M;
      if (D > g) break;
      u(D, T);
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
    metricConflictRule: cr.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    enableFourOfFiveRule: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: nr.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: tn.Off,
    trendSegmentationStrategy: xt.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...o
  }, i = o?.trendSegmentationMode || (o?.trendFavourableSegmentation === !0 ? tn.Always : o?.trendFavourableSegmentation === !1 ? tn.Off : s.trendSegmentationMode), l = a.map((g, p) => ({
    rowId: p + 1,
    x: g.x,
    value: $e(g.value) ? g.value : null,
    ghost: !!g.ghost,
    baseline: !!g.baseline,
    target: $e(g.target) ? g.target : null
  })), u = [];
  let c = [];
  for (const g of l)
    g.baseline && c.length && (u.push(c), c = []), c.push(g);
  c.length && u.push(c);
  const d = [], f = (s.trendFavourableSegmentation || i !== tn.Off) && !s.preferImprovementWhenConflict, h = l.filter((g) => !g.ghost && $e(g.value)).length, m = !!s.chartLevelEligibility && h >= s.minimumPoints;
  let b = 0;
  for (const g of u) {
    b++;
    const p = g.map((v) => v.value), x = g.map((v) => v.ghost), k = Xm(
      t,
      p,
      x,
      !!s.excludeMovingRangeOutliers
    ), $ = g.map((v, M) => {
      const D = !v.ghost && $e(v.value) ? p.slice(0, M + 1).filter((y, N) => !x[N] && $e(y)).length : 0, P = m ? !0 : D >= s.minimumPoints;
      return {
        rowId: v.rowId,
        x: v.x,
        value: $e(v.value) ? v.value : null,
        ghost: v.ghost,
        partitionId: b,
        pointRank: D,
        mean: (P || m) && $e(k.mean) ? k.mean : null,
        upperProcessLimit: P || m ? k.upperProcessLimit : null,
        lowerProcessLimit: P || m ? k.lowerProcessLimit : null,
        upperTwoSigma: P || m ? k.upperTwoSigma : null,
        lowerTwoSigma: P || m ? k.lowerTwoSigma : null,
        upperOneSigma: P || m ? k.upperOneSigma : null,
        lowerOneSigma: P || m ? k.lowerOneSigma : null,
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
    for (const v of $)
      v.ghost || !$e(v.value) || v.mean === null || ($e(v.upperProcessLimit) && v.value > v.upperProcessLimit && (v.singlePointUp = !0), $e(v.lowerProcessLimit) && v.value < v.lowerProcessLimit && (v.singlePointDown = !0));
    Km($, {
      shiftPoints: s.shiftPoints,
      trendPoints: s.trendPoints,
      twoSigmaIncludeAboveThree: !!s.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!s.enableFourOfFiveRule
    }), f && ((v) => {
      const M = v.some(
        (w) => (w.singlePointUp || w.twoSigmaUp || w.shiftUp || w.trendUp) && (w.singlePointDown || w.twoSigmaDown || w.shiftDown || w.trendDown)
      );
      if (i === tn.Off || i === tn.AutoWhenConflict && !M)
        return;
      const D = Wi(v), P = zi(D, {
        metricImprovement: n,
        strategy: s.trendSegmentationStrategy
      }), y = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set();
      for (const w of P)
        for (let _ = w.start; _ <= w.end; _++)
          w.trendDirection === Hs.Up ? y.add(_) : N.add(_);
      v.forEach((w, _) => {
        w.trendUp = y.has(_) ? w.trendUp : !1, w.trendDown = N.has(_) ? w.trendDown : !1, s.trendDominatesHighlightedWindow && (y.has(_) ? (w.singlePointDown = !1, w.twoSigmaDown = !1, w.shiftDown = !1) : N.has(_) && (w.singlePointUp = !1, w.twoSigmaUp = !1, w.shiftUp = !1));
      });
    })($);
    for (const v of $) {
      if (v.ghost || !$e(v.value) || v.mean === null) {
        d.push(v);
        continue;
      }
      const { aligned: M, opposite: D } = Oi(
        v,
        n
      );
      if (v.specialCauseImprovementValue = M ? v.value : null, v.specialCauseConcernValue = D ? v.value : null, n === He.Neither) {
        const P = v.singlePointUp || v.twoSigmaUp || v.shiftUp || v.trendUp, y = v.singlePointDown || v.twoSigmaDown || v.shiftDown || v.trendDown;
        v.variationIcon = P ? Be.NeitherHigh : y ? Be.NeitherLow : Be.CommonCause;
      } else
        Ui(v, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
      d.push(v);
    }
  }
  if (s.trendAcrossPartitions) {
    const g = d.map((p, x) => ({ idx: x, r: p })).filter(({ r: p }) => !p.ghost && $e(p.value));
    if (g.length >= s.trendPoints)
      for (let p = 0; p <= g.length - s.trendPoints; p++) {
        const x = g.slice(p, p + s.trendPoints).map((v) => v.idx), k = x.map((v) => d[v]);
        if (!k.every((v) => $e(v.value))) continue;
        let $ = !0, T = !0;
        for (let v = 1; v < k.length && (k[v].value > k[v - 1].value || ($ = !1), k[v].value < k[v - 1].value || (T = !1), !(!$ && !T)); v++)
          ;
        $ && x.forEach((v) => d[v].trendUp = !0), T && x.forEach((v) => d[v].trendDown = !0);
      }
  }
  if (s.trendAcrossPartitions) {
    if (f) {
      const g = d.some(
        (p) => (p.singlePointUp || p.twoSigmaUp || p.shiftUp || p.trendUp) && (p.singlePointDown || p.twoSigmaDown || p.shiftDown || p.trendDown)
      );
      if (i === tn.Always || i === tn.AutoWhenConflict && g) {
        const p = Wi(d), x = zi(p, { metricImprovement: n, strategy: s.trendSegmentationStrategy }), k = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set();
        for (const T of x)
          for (let v = T.start; v <= T.end; v++)
            T.trendDirection === Hs.Up ? k.add(v) : $.add(v);
        d.forEach((T, v) => {
          T.trendUp = k.has(v) ? T.trendUp : !1, T.trendDown = $.has(v) ? T.trendDown : !1, s.trendDominatesHighlightedWindow && (k.has(v) ? (T.singlePointDown = !1, T.twoSigmaDown = !1, T.shiftDown = !1) : $.has(v) && (T.singlePointUp = !1, T.twoSigmaUp = !1, T.shiftUp = !1));
        });
      }
    }
    for (const g of d) {
      if (g.ghost || !$e(g.value) || g.mean === null || n === He.Neither) continue;
      const { aligned: p, opposite: x } = Oi(g, n);
      g.specialCauseImprovementValue = p ? g.value : null, g.specialCauseConcernValue = x ? g.value : null, Ui(g, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
    }
  }
  return { rows: d };
}
function Io(e, t) {
  const n = Do(e), a = To(n.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? pr.Ungated,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), o = t?.boundaryWindows;
  if (!o || o.mode !== "RecalcCrossing") return { rows: n.rows, visuals: a };
  const s = o.directionOverride ?? e.metricImprovement, i = rg(n.rows, s, o), l = a.map((u, c) => {
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
function ag(e, t, n) {
  const a = n?.trendVisualMode ?? pr.Ungated, o = n?.enableNeutralNoJudgement ?? !0, s = Array.isArray(e.data) ? e.data.map((f, h) => f?.baseline ? h : -1).filter((f) => f >= 0) : [];
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
  metricConflictRule: cr.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function sg(e) {
  return { ...mc, ...e ?? {} };
}
var ft = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(ft || {}), Nn = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(Nn || {}), Er = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(Er || {});
const gc = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === He.Up ? ot.HigherIsBetter : i.improvementDirection === He.Down ? ot.LowerIsBetter : ot.ContextDependent : i.polarity && (l = i.polarity);
    let u;
    const c = i.variationIcon;
    if (c === Ie.Improvement || c === Ie.Concern || c === Ie.Neither || c === Ie.Suppressed)
      c === Ie.Improvement ? u = ke.SpecialCauseImproving : c === Ie.Concern ? u = ke.SpecialCauseDeteriorating : c === Ie.Neither ? u = ke.CommonCause : u = ke.SpecialCauseNoJudgement;
    else
      switch (i.variationIcon) {
        case Be.ImprovementHigh:
        case Be.ImprovementLow:
          u = ke.SpecialCauseImproving;
          break;
        case Be.ConcernHigh:
        case Be.ConcernLow:
          u = ke.SpecialCauseDeteriorating;
          break;
        case Be.NeitherHigh:
        case Be.NeitherLow:
          u = i.specialCauseNeutral ? ke.SpecialCauseNoJudgement : ke.CommonCause;
          break;
        case Be.CommonCause:
          u = ke.CommonCause;
          break;
        default:
          u = ke.SpecialCauseNoJudgement;
          break;
      }
    let d = i.trend;
    return d || (u === ke.SpecialCauseImproving ? d = l === ot.LowerIsBetter ? Me.Lower : Me.Higher : u === ke.SpecialCauseDeteriorating ? d = l === ot.LowerIsBetter ? Me.Higher : Me.Lower : u === ke.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? d = Me.Higher : i.lowSideSignal && !i.highSideSignal ? d = Me.Lower : d = Me.Higher : d = Me.Higher), { state: u, direction: d, polarity: l ?? ot.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === ke.SpecialCauseImproving || i.state === ke.SpecialCauseDeteriorating) && i.polarity && (i.state === ke.SpecialCauseImproving ? l = i.polarity === ot.LowerIsBetter ? Me.Lower : Me.Higher : l = i.polarity === ot.LowerIsBetter ? Me.Higher : Me.Lower), l || (i.state === ke.SpecialCauseImproving ? l = Me.Higher : i.state === ke.SpecialCauseDeteriorating ? l = Me.Lower : l = Me.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? ot.ContextDependent
    };
  }
  const n = e;
  t();
  const o = {
    [Tt.Improving]: ke.SpecialCauseImproving,
    [Tt.Deteriorating]: ke.SpecialCauseDeteriorating,
    [Tt.No_Judgement]: ke.SpecialCauseNoJudgement,
    [Tt.None]: ke.CommonCause
  }[n.judgement];
  let s;
  return n.judgement === Tt.Improving ? s = n.polarity === ot.LowerIsBetter ? Me.Lower : Me.Higher : n.judgement === Tt.Deteriorating ? s = n.polarity === ot.LowerIsBetter ? Me.Higher : Me.Lower : s = n.trend ?? Me.Higher, { state: o, direction: s, polarity: n.polarity };
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
        case Tt.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case Tt.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case Tt.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case Tt.None:
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
  letterMode: u = Er.Polarity,
  letterOverride: c,
  ...d
}) => {
  const f = ea(), h = ea(), {
    start: m,
    mid: b,
    end: g,
    triStart: p,
    triMid: x,
    triEnd: k
  } = Ja(), { state: $, direction: T, polarity: v } = Le(
    () => gc(e),
    [e]
  ), M = Le(() => dc($), [$]), D = Le(() => jo($), [$]), P = D === Tt.Improving || D === Tt.Deteriorating;
  let y = "";
  a && P && (u === Er.Polarity ? v === ot.HigherIsBetter ? y = "H" : v === ot.LowerIsBetter ? y = "L" : y = "" : y = T === Me.Higher ? "H" : "L"), c !== void 0 && (y = c);
  const N = $ !== ke.CommonCause, w = $ === ke.SpecialCauseNoJudgement, _ = Ke("common-cause", "#A6A6A6"), F = N ? M.hex : _, S = Le(
    () => Ym($, T),
    [$, T]
  ), j = n || `${M.label}${y ? T === Me.Higher ? " – Higher" : " – Lower" : ""}`, C = xc(
    e
  );
  if (i === Nn.TriangleWithRun) {
    const H = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], O = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let ae = null;
    $ === ke.SpecialCauseImproving || $ === ke.SpecialCauseDeteriorating ? ae = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (T === Me.Higher ? H : O).map((fe) => fe.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 6,
        transform: T === Me.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : $ === ke.SpecialCauseNoJudgement && (ae = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: T === Me.Higher ? H.map((fe) => fe.join(",")).join(" ") : O.map((fe) => fe.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 6,
        transform: T === Me.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const W = Math.max(0, Math.min(5, Math.floor(l || 0))), ie = $ === ke.CommonCause ? 160 : T === Me.Higher ? 220 : 70, je = 10, ce = 26, ue = 150 - 2 * ce, J = $ === ke.SpecialCauseImproving ? Ke("improvement", "#00B0F0") : $ === ke.SpecialCauseDeteriorating ? Ke("concern", "#E46C0A") : _, ne = Array.from({ length: 5 }).map((fe, oe) => {
      const R = ($ === ke.SpecialCauseImproving || $ === ke.SpecialCauseDeteriorating) && oe >= 5 - W ? J : _;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: ue + oe * ce,
          cy: ie,
          r: je,
          fill: R,
          stroke: R,
          strokeWidth: 1
        },
        oe
      );
    }), de = _s(
      M.hex,
      f,
      h,
      o,
      s,
      [
        { offset: "0%", opacity: p },
        { offset: "75%", opacity: x },
        { offset: "100%", opacity: k }
      ]
    ), G = $ === ke.CommonCause || T === Me.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": j,
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
              stroke: M.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsxs("g", { transform: G, children: [
            ae,
            y && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: T === Me.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: y
              }
            ),
            ne
          ] })
        ]
      }
    );
  }
  if (i === Nn.Triangle) {
    const H = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], O = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], ae = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let W = null;
    $ === ke.SpecialCauseImproving || $ === ke.SpecialCauseDeteriorating ? W = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (T === Me.Higher ? H : O).map((je) => je.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 8,
        transform: T === Me.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : $ === ke.SpecialCauseNoJudgement ? W = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: T === Me.Higher ? H.map((je) => je.join(",")).join(" ") : O.map((je) => je.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 8,
        transform: T === Me.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : $ === ke.CommonCause && (W = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: ae[0][0],
        y1: ae[0][1],
        x2: ae[1][0],
        y2: ae[1][1],
        stroke: M.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const ie = _s(
      M.hex,
      f,
      h,
      o,
      s,
      [
        { offset: "0%", opacity: p },
        { offset: "65%", opacity: x },
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
        "aria-label": j,
        "aria-description": C,
        ...d,
        children: [
          ie,
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
              stroke: M.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          W,
          y && ($ === ke.SpecialCauseImproving || $ === ke.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: T === Me.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: y
            }
          )
        ]
      }
    );
  }
  const I = _s(
    M.hex,
    f,
    h,
    o,
    s,
    [
      { offset: "0%", opacity: m },
      { offset: "65%", opacity: b },
      { offset: "100%", opacity: g }
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": j,
      "aria-description": C,
      ...d,
      children: [
        I,
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
            stroke: M.hex,
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
            fill: M.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: T === Me.Lower ? "340" : "155", children: y })
          }
        ),
        w ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: M.hex,
            ...T === Me.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          S.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: _,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${S.map((te) => `${te.cx} ${te.cy}`).join(" L ")}`
            }
          ),
          S.map((te, V) => {
            const H = V >= S.length - 2 && N ? F : _, O = H;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: O,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: H,
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
const og = {
  xs: { height: 24, pointR: 2, stroke: 1 },
  sm: { height: 32, pointR: 3, stroke: 1 },
  md: { height: 44, pointR: 4, stroke: 1 }
};
function ig(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function lg(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const n = t.reduce((i, l) => i + l.value, 0) / t.length, a = [...e].reverse().findIndex((i) => i.value != null), o = a >= 0 ? e.length - 1 - a : null, s = o != null ? e[o].value : null;
  return { mean: n, latestValue: s, latestIndex: o };
}
function cg(e) {
  switch (e) {
    case ke.SpecialCauseImproving:
      return Ke("improvement", "#00B0F0");
    case ke.SpecialCauseDeteriorating:
      return Ke("concern", "#E46C0A");
    case ke.SpecialCauseNoJudgement:
      return Ke("no-judgement", "#490092");
    case ke.CommonCause:
      return Ke("common-cause", "#A6A6A6");
    default:
      return Ke("common-cause", "#A6A6A6");
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
  size: m = "sm",
  ariaLabel: b,
  className: g,
  onPointClick: p,
  onClassification: x,
  maxPoints: k,
  thinningStrategy: $ = "stride",
  colorPointsBySignal: T = !0,
  centerLine: v,
  controlLimits: M,
  sigmaBands: D,
  pointSignals: P,
  pointNeutralSpecialCause: y
}) => {
  const N = f, w = Le(
    () => ig(e, t),
    [e, t]
  ), _ = Le(() => lg(w), [w]), F = og[m], S = Math.max(w.length * 6, 60), j = F.height, C = 4, I = 2, te = Le(() => (e?.length ?? 0) - (w?.length ?? 0), [e?.length, w?.length]), B = w.filter((E) => E.value != null).map((E) => E.value), H = v ?? _.mean, O = Le(() => {
    if (H == null) return null;
    const E = [];
    if (D?.upperOne != null && E.push(Math.abs(D.upperOne - H)), D?.lowerOne != null && E.push(Math.abs(H - D.lowerOne)), E.length) return E.reduce((z, X) => z + X, 0) / E.length;
    const U = [];
    return M?.upper != null && U.push(Math.abs(M.upper - H) / 3), M?.lower != null && U.push(Math.abs(H - M.lower) / 3), U.length ? U.reduce((z, X) => z + X, 0) / U.length : null;
  }, [D?.upperOne, D?.lowerOne, M?.upper, M?.lower, H]), ae = Le(() => {
    if (O != null || !B.length || H == null || B.length < 2) return null;
    const E = [];
    for (let z = 1; z < B.length; z++) {
      const X = B[z - 1], L = B[z];
      X != null && L != null && E.push(Math.abs(L - X));
    }
    return E.length ? E.reduce((z, X) => z + X, 0) / E.length / 1.128 : null;
  }, [O, B.join(","), H]), W = O ?? ae, ie = Le(() => {
    if (!o) return null;
    if (M) return M;
    if (H == null || W == null) return null;
    const E = 3 * W;
    return { lower: H - E, upper: H + E };
  }, [o, H, W, M?.lower, M?.upper]), je = Le(() => {
    if (c)
      return {
        state: c,
        firedRules: [],
        mean: _.mean,
        stdDev: W
      };
    if (!d || !W || W === 0 || H == null || _.latestValue == null)
      return {
        state: ke.CommonCause,
        firedRules: [],
        mean: _.mean,
        stdDev: W
      };
    const E = [], U = _.latestValue, z = M?.upper ?? (W != null && H != null ? H + 3 * W : null), X = M?.lower ?? (W != null && H != null ? H - 3 * W : null);
    z != null && X != null && (U > z || U < X) && E.push("point-beyond-3sigma");
    const L = B.slice(-8);
    if (L.length === 8) {
      const K = L.every((me) => me > H), re = L.every((me) => me < H);
      (K || re) && E.push("eight-point-run");
    }
    const Y = B.slice(-5);
    if (Y.length === 5) {
      const K = Y.every((Ce, we, ge) => we === 0 || Ce >= ge[we - 1]), re = Y.every((Ce, we, ge) => we === 0 || Ce <= ge[we - 1]), me = D?.upperOne ?? (W != null && H != null ? H + W : null), be = D?.lowerOne ?? (W != null && H != null ? H - W : null);
      K && me != null && Y[Y.length - 1] > me && E.push("five-point-trend"), re && be != null && Y[Y.length - 1] < be && E.push("five-point-trend");
    }
    const Z = B.slice(-3);
    if (Z.length === 3 && (W != null || D)) {
      const K = D?.upperTwo ?? (H != null && W != null ? H + 2 * W : null), re = D?.lowerTwo ?? (H != null && W != null ? H - 2 * W : null);
      if (K != null && re != null) {
        const me = Z.filter((Ce) => Ce > K).length, be = Z.filter((Ce) => Ce < re).length;
        me >= 2 && E.push("two-of-three-near-limit"), be >= 2 && E.push("two-of-three-near-limit");
      }
    }
    let ee = ke.CommonCause;
    if (E.includes("point-beyond-3sigma") ? ee = U > H ? ke.SpecialCauseImproving : ke.SpecialCauseDeteriorating : (E.includes("eight-point-run") || E.includes("five-point-trend") || E.includes("two-of-three-near-limit")) && (ee = B[B.length - 1] > H ? ke.SpecialCauseImproving : ke.SpecialCauseDeteriorating), d && !c && E.length === 1 && E[0] === "point-beyond-3sigma") {
      const K = B.slice(-9, -1);
      if (K.length >= 5) {
        const re = K.filter((be) => be > H).length, me = K.filter((be) => be < H).length;
        re > 0 && me > 0 && (ee = ke.SpecialCauseNoJudgement);
      }
    }
    return {
      state: ee,
      firedRules: E,
      mean: H,
      stdDev: W,
      side: _.latestValue != null && H != null ? _.latestValue > H ? "above" : "below" : void 0
    };
  }, [
    c,
    d,
    W,
    H,
    _.latestValue,
    B.join(",")
  ]);
  Dt.useEffect(() => {
    d && !c && x && x(je);
  }, [je, d, c, x]);
  const ce = je.state, ue = cg(ce), J = (E) => {
    const U = w.filter((Y) => Y.value != null);
    if (!U.length) return j / 2;
    const z = U.map((Y) => Y.value);
    ie && (ie.lower != null && z.push(ie.lower), ie.upper != null && z.push(ie.upper));
    const X = Math.min(...z), L = Math.max(...z);
    return X === L ? j / 2 : j - (E - X) / (L - X) * (j - I * 2) - I;
  }, ne = Le(() => {
    if (!k || w.length <= k)
      return w.map((Z, ee) => ee);
    if ($ === "stride") {
      const Z = Math.max(2, k), ee = (w.length - 1) / (Z - 1), K = /* @__PURE__ */ new Set();
      for (let re = 0; re < Z; re++) K.add(Math.round(re * ee));
      return K.add(w.length - 1), Array.from(K).sort((re, me) => re - me);
    }
    const E = w.map((Z, ee) => ({ i: ee, v: Z.value }));
    function U(Z, ee, K) {
      const re = Z.i, me = Z.v ?? 0, be = ee.i, Ce = ee.v ?? 0, we = K.i, ge = K.v ?? 0, Pe = Math.abs((ge - Ce) * re - (we - be) * me + we * Ce - ge * be), We = Math.hypot(ge - Ce, we - be);
      return We === 0 ? 0 : Pe / We;
    }
    function z(Z, ee) {
      if (Z.length <= 2) return Z;
      let K = -1, re = -1;
      for (let me = 1; me < Z.length - 1; me++) {
        const be = U(Z[me], Z[0], Z[Z.length - 1]);
        be > K && (K = be, re = me);
      }
      if (K > ee) {
        const me = z(Z.slice(0, re + 1), ee), be = z(Z.slice(re), ee);
        return [...me.slice(0, -1), ...be];
      }
      return [Z[0], Z[Z.length - 1]];
    }
    let X = 0.1, L = E;
    for (let Z = 0; Z < 8 && (L = z(E, X), !(L.length <= k)); Z++)
      X *= 1.6;
    const Y = new Set(L.map((Z) => Z.i));
    return Y.add(0), Y.add(w.length - 1), Array.from(Y).sort((Z, ee) => Z - ee);
  }, [w, k, $]), de = Le(
    () => ne.map((E) => w[E]),
    [ne, w]
  ), G = Le(() => {
    let E = "";
    return de.forEach((U, z) => {
      if (U.value == null) return;
      const X = J(U.value), L = z / (de.length - 1 || 1) * (S - C * 2) + C;
      E += E ? ` L ${L} ${X}` : `M ${L} ${X}`;
    }), E;
  }, [de, S]), fe = _.latestIndex ?? -1, oe = ie, A = Ja(), R = Le(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [w.length, h]
  ), Q = w.length >= (n || 0), pe = b || "SPC sparkline", le = (() => {
    if (!ce) return;
    const E = N === Re.Up ? ot.HigherIsBetter : N === Re.Down ? ot.LowerIsBetter : ot.ContextDependent, U = {
      variationIcon: ce === ke.SpecialCauseImproving ? "improvement" : ce === ke.SpecialCauseDeteriorating ? "concern" : ce === ke.SpecialCauseNoJudgement ? "none" : "neither",
      trend: N === Re.Up ? Me.Higher : Me.Lower,
      polarity: E
    };
    try {
      return xc(U);
    } catch {
      return;
    }
  })(), se = Le(() => {
    if (!Q) return 10;
    const E = [...w].reverse().filter((z) => z.value != null).slice(0, 6).map((z) => J(z.value));
    return E.length && E.reduce((z, X) => z + X, 0) / E.length < j / 2 ? j : 10;
  }, [w, Q, j]);
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": pe,
      "aria-description": le,
      width: S,
      height: j,
      className: g,
      viewBox: `0 0 ${S} ${j}`,
      children: [
        h && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: R, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: ue,
                stopOpacity: Number(A.start)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: ue,
                stopOpacity: Number(A.mid)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: ue,
                stopOpacity: Number(A.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: S,
              height: j,
              fill: `url(#${R})`
            }
          )
        ] }),
        oe && oe.lower != null && oe.upper != null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          s && /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                J(oe.upper),
                J(oe.lower)
              ),
              width: S,
              height: Math.abs(
                J(oe.upper) - J(oe.lower)
              ),
              fill: ue,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: S,
              y1: J(oe.lower),
              y2: J(oe.lower),
              stroke: ue,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: S,
              y1: J(oe.upper),
              y2: J(oe.upper),
              stroke: ue,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          D && i && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            D.lowerTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: S,
                y1: J(D.lowerTwo),
                y2: J(D.lowerTwo),
                stroke: ue,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            D.lowerOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: S,
                y1: J(D.lowerOne),
                y2: J(D.lowerOne),
                stroke: ue,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            D.upperOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: S,
                y1: J(D.upperOne),
                y2: J(D.upperOne),
                stroke: ue,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            D.upperTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: S,
                y1: J(D.upperTwo),
                y2: J(D.upperTwo),
                stroke: ue,
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
            x2: S,
            y1: J(_.mean),
            y2: J(_.mean),
            stroke: Ke("common-cause", "#A6A6A6"),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: G,
            fill: "none",
            stroke: Ke("common-cause", "#A6A6A6"),
            strokeWidth: F.stroke,
            strokeLinecap: "round"
          }
        ),
        ne.map((E, U) => {
          const z = w[E];
          if (!z || z.value == null) return null;
          const X = J(z.value), L = U / (de.length - 1 || 1) * (S - C * 2) + C, Z = (E === fe && l ? F.pointR + 1 : F.pointR) - 0.5;
          let ee = Ke("common-cause", "#A6A6A6");
          if (T) {
            const K = P?.[te + E];
            if (K === "improvement")
              ee = Ke("improvement", "#00B0F0");
            else if (K === "concern")
              ee = Ke("concern", "#E46C0A");
            else if (y?.[te + E])
              ee = Ke("no-judgement", "#490092");
            else if (H != null) {
              const me = z.value, be = M?.upper ?? (W != null ? H + 3 * W : null), Ce = M?.lower ?? (W != null ? H - 3 * W : null);
              be != null && me > be ? ee = Ke("improvement", "#00B0F0") : Ce != null && me < Ce ? ee = Ke("concern", "#E46C0A") : ee = Ke("common-cause", "#A6A6A6");
            } else
              ee = Ke("common-cause", "#A6A6A6");
          }
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: L,
              cy: X,
              r: Z,
              fill: ee,
              stroke: "none",
              strokeWidth: 0,
              onClick: p ? () => p(E, z) : void 0,
              style: p ? { cursor: "pointer" } : void 0,
              "data-index": E,
              "data-signal-colour": T ? ee : void 0
            },
            E
          );
        }),
        u && Q && ce && ce !== ke.CommonCause && N && /* @__PURE__ */ r.jsx(
          "text",
          {
            x: S - 4,
            y: se,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: ue,
            "data-glyph-pos": se < j / 2 ? "top" : "bottom",
            children: N === Re.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
bc.displayName = "SPCSpark";
const Se = (e) => typeof e == "number" && Number.isFinite(e), ug = (e) => e.reduce((t, n) => t + n, 0), Kt = (e) => e.length ? ug(e) / e.length : NaN;
function vc(e, t) {
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
function yc(e, t) {
  const n = e.filter((s) => Se(s));
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = Kt(n), o = 3.267 * a;
  if (t) {
    const s = n.filter((i) => i <= o);
    s.length && s.length !== n.length && (a = Kt(s), o = 3.267 * a);
  }
  return { mrMean: a, mrUcl: o };
}
function dg(e, t) {
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
const fg = 0.2777, pg = 3.6, hg = (e) => Se(e) && e >= 0 ? Math.pow(e, fg) : null, Pn = (e) => Se(e) && e >= 0 ? Math.pow(e, pg) : null;
function mg(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
const Jn = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function gg(e) {
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
  const t = 1 / (e + 1), n = (d) => mg(d, t) - 1, a = n(0.5), o = Math.max(0, n(Jn.three.low)), s = n(Jn.three.high), i = Math.max(0, n(Jn.one.low)), l = n(Jn.one.high), u = Math.max(0, n(Jn.two.low)), c = n(Jn.two.high);
  return { cl: a, lcl: o, ucl: s, oneLow: i, oneHigh: l, twoLow: u, twoHigh: c };
}
function xg(e, t, n) {
  const a = e.map((P) => Se(P) ? hg(P) : null), o = vc(a, t), { mrMean: s } = yc(o, !!n), i = a.filter((P, y) => !t[y] && Se(P)), l = i.length ? Kt(i) : NaN;
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
  const u = 2.66, c = 2 / 3 * u, d = 1 / 3 * u, f = l + u * s, h = l - u * s, m = l + c * s, b = l - c * s, g = l + d * s, p = l - d * s, x = Pn(l), k = Pn(f), $ = h <= 0 ? null : Pn(h), T = Pn(g), v = p <= 0 ? null : Pn(p), M = Pn(m), D = b <= 0 ? null : Pn(b);
  return {
    center: x ?? null,
    upperProcessLimit: k ?? null,
    lowerProcessLimit: $ ?? null,
    upperTwoSigma: M ?? null,
    lowerTwoSigma: D ?? null,
    upperOneSigma: T ?? null,
    lowerOneSigma: v ?? null,
    mr: o,
    mrMean: s,
    mrUcl: Se(s) ? 3.267 * s : null
  };
}
function bg(e) {
  const {
    metricImprovement: t,
    capabilityMode: n,
    value: a,
    mean: o,
    upperProcessLimit: s,
    lowerProcessLimit: i,
    target: l
  } = e, u = (c) => typeof c == "number" && Number.isFinite(c);
  return !u(a) || o === null || !u(l) ? ct.None : n && u(s) && u(i) ? t === Re.Up ? u(i) && i > l ? ct.Pass : u(s) && s < l ? ct.Fail : ct.None : t === Re.Down ? u(s) && s < l ? ct.Pass : u(i) && i > l ? ct.Fail : ct.None : ct.None : t === Re.Down ? a <= l ? ct.Pass : ct.Fail : t === Re.Up ? a >= l ? ct.Pass : ct.Fail : ct.None;
}
function vg(e, t) {
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
  let m = 0;
  for (let b = 0; b < e.length; b++) {
    const g = e[b];
    b > 0 && e[b - 1].partitionId !== g.partitionId && (m = b);
    const p = b > 0 && i(b - 1), x = b > 0 && l(b - 1), k = b > 0 && u(b - 1), $ = b > 0 && c(b - 1), T = b > 0 && d(b - 1), v = b > 0 && f(b - 1), M = i(b), D = l(b), P = u(b), y = c(b), N = d(b), w = f(b), _ = [];
    M && !p && _.push({ reason: Bt.Shift, index: b }), D && !x && _.push({ reason: Bt.Shift, index: b }), P && !k && _.push({ reason: Bt.Trend, index: b }), y && !$ && _.push({ reason: Bt.Trend, index: b }), N && !T && _.push({ reason: Bt.Point, index: b }), w && !v && _.push({ reason: Bt.Point, index: b });
    for (const F of _) {
      if (F.index - m < a) continue;
      const S = Math.max(0, F.index - n), j = F.index - 1;
      if (j - S + 1 < n) continue;
      const C = F.index, I = F.index + n - 1;
      if (I >= e.length) continue;
      const te = e.slice(S, j + 1).map((G) => G.value).filter(
        (G) => typeof G == "number" && Number.isFinite(G)
      ), V = e.slice(C, I + 1).map((G) => G.value).filter(
        (G) => typeof G == "number" && Number.isFinite(G)
      );
      if (te.length < n || V.length < n) continue;
      const B = e[F.index];
      let H = null;
      if (typeof B.upperProcessLimit == "number" && typeof B.mean == "number") {
        const G = B.upperProcessLimit - B.mean;
        G > 0 && (H = G / 3);
      }
      if (!H || H <= 0) continue;
      const O = Kt(te), ae = Kt(V), W = ae - O;
      if (Math.abs(W) < o * H) continue;
      const je = e.slice(C, I + 1).filter(
        (G) => G.variationIcon === Ie.Concern
      ).length;
      if (je > 1) continue;
      const ce = (G) => {
        const fe = Kt(G);
        return G.length ? G.reduce((oe, A) => oe + (A - fe) * (A - fe), 0) / G.length : 0;
      }, ue = ce(te), J = ce(V);
      let ne = F.reason === Bt.Shift ? 90 : F.reason === Bt.Trend ? 70 : 60;
      if (J < ue && (ne += 10), ne -= je * 15, ne < s) continue;
      const de = h.find((G) => G.index === F.index);
      if (de) {
        const G = (fe) => fe === Bt.Shift ? 3 : fe === Bt.Trend ? 2 : 1;
        (G(F.reason) > G(de.reason) || ne > de.score) && (de.reason = F.reason, de.score = ne, de.deltaMean = W, de.oldMean = O, de.newMean = ae, de.window = [C, I]);
      } else
        h.push({
          index: F.index,
          reason: F.reason,
          score: ne,
          deltaMean: W,
          oldMean: O,
          newMean: ae,
          window: [C, I]
        });
    }
  }
  return h.sort((b, g) => b.index - g.index), h;
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
var Gt = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Gt || {}), ba = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(ba || {}), va = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(va || {});
function yg(e) {
  const t = [];
  let n = [];
  for (const a of e)
    a.baseline && n.length && (t.push(n), n = []), n.push(a);
  return n.length && t.push(n), t;
}
function wg(e, t, n) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const o = e.map((d, f) => ({ idx: f, value: d.value })).filter((d) => Se(d.value));
  if (o.length < a * 2) return;
  const s = n === Re.Up || n === Re.Neither, i = n === Re.Down;
  function l(d, f) {
    const h = o.slice(d, f).map((m) => m.value);
    return h.length ? Kt(h) : NaN;
  }
  let u = null;
  if (o.length > 1) {
    const d = [];
    for (let h = 1; h < o.length; h++) d.push(Math.abs(o[h].value - o[h - 1].value));
    const f = Kt(d);
    Se(f) && f > 0 && (u = f * (2.66 / 3));
  }
  if (!u || u <= 0) return;
  const c = t.autoRecalculateDeltaSigma ?? 0.5;
  for (let d = a; d <= o.length - a; d++) {
    const f = d - a, h = l(f, d), m = l(d, d + a);
    if (!Se(h) || !Se(m)) continue;
    const g = (m - h) / u;
    if (!(s ? g >= c : i ? -g >= c : Math.abs(g) >= c)) continue;
    const x = o.slice(d, d + a).map((T) => T.value);
    if (!(s ? x.every((T) => T > h) : i ? x.every((T) => T < h) : x.every((T) => s ? T > h : T < h))) continue;
    const $ = o[d].idx;
    e[$].baseline || (e[$].baseline = !0);
    return;
  }
}
function wc(e) {
  if (!e) return {};
  const t = e, n = e, a = n.rules ?? {}, o = n.precedence ?? {}, s = n.thresholds ?? {}, i = n.warnings ?? {}, l = n.rareEvent ?? {}, u = n.capability ?? {}, c = n.grace ?? {}, d = n.baselineSuggest ?? {}, f = n.autoRecalc ?? {}, h = c.emergingEnabled ?? n.emergingGraceEnabled ?? t.emergingGraceEnabled ?? t.emergingDirectionGrace, m = a.collapseWeakerClusterRules ?? n.collapseWeakerClusterRules ?? t.collapseWeakerClusterRules ?? t.collapseClusterRules;
  if (Ss()) {
    if (t.emergingDirectionGrace !== void 0)
      throw new Error("[spc][phase4] emergingDirectionGrace is no longer supported. Use settings.grace.emergingEnabled.");
    if (t.collapseClusterRules !== void 0)
      throw new Error("[spc][phase4] collapseClusterRules is no longer supported. Use settings.rules.collapseWeakerClusterRules.");
  }
  const b = globalThis;
  !Ss() && t.emergingDirectionGrace !== void 0 && n.emergingGraceEnabled === void 0 && c.emergingEnabled === void 0 && !b.__spc_warn_emergingDirectionGrace && (b.__spc_warn_emergingDirectionGrace = !0, console.warn("[spc] emergingDirectionGrace is deprecated; use grace.emergingEnabled")), !Ss() && t.collapseClusterRules !== void 0 && a.collapseWeakerClusterRules === void 0 && n.collapseWeakerClusterRules === void 0 && !b.__spc_warn_collapseClusterRules && (b.__spc_warn_collapseClusterRules = !0, console.warn("[spc] collapseClusterRules is deprecated; use rules.collapseWeakerClusterRules"));
  const g = (k) => {
    const $ = {};
    for (const T of Object.keys(k)) {
      const v = k[T];
      v !== void 0 && ($[T] = v);
    }
    return $;
  }, p = g({
    // Rare event / MR
    excludeMovingRangeOutliers: l.excludeMovingRangeOutliers ?? t.excludeMovingRangeOutliers,
    // Rules
    specialCauseShiftPoints: a.shiftPoints ?? t.specialCauseShiftPoints,
    specialCauseTrendPoints: a.trendPoints ?? t.specialCauseTrendPoints,
    enableFourOfFiveRule: a.fourOfFiveEnabled ?? t.enableFourOfFiveRule,
    enableFifteenInInnerThirdRule: a.fifteenInnerThirdEnabled ?? t.enableFifteenInInnerThirdRule,
    collapseWeakerClusterRules: m ?? t.collapseWeakerClusterRules,
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
  }), x = { ...p, ...g(t) };
  if (h !== void 0 && (x.emergingGraceEnabled = h, x.grace = { ...x.grace, emergingEnabled: h }), p.collapseWeakerClusterRules !== void 0) {
    const k = p.collapseWeakerClusterRules;
    x.collapseWeakerClusterRules = k, x.rules = { ...x.rules, collapseWeakerClusterRules: k };
  }
  return g(x);
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
  const l = a.map((p, x) => ({
    rowId: x + 1,
    x: p.x,
    value: Se(p.value) ? p.value : null,
    ghost: !!p.ghost,
    baseline: !!p.baseline,
    target: Se(p.target) ? p.target : null
  }));
  if (s?.autoRecalculateAfterShift)
    try {
      wg(l, s, n);
    } catch {
    }
  const u = yg(l), c = [], d = [], h = l.filter(
    (p) => !p.ghost && Se(p.value)
  ).length >= (i.minimumPoints ?? 13);
  let m = 0;
  const b = {};
  for (const p of u) {
    m++;
    const x = p.map((_) => _.value), k = p.map((_) => _.ghost);
    let $ = new Array(x.length).fill(null), T = NaN, v = NaN, M = NaN, D = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      $ = vc(x, k);
      const _ = x.filter(
        (S, j) => !k[j] && Se(S)
      );
      T = _.length ? Kt(_) : NaN;
      const F = yc(
        $,
        !!i.excludeMovingRangeOutliers
      );
      v = F.mrMean, M = F.mrUcl, D = dg(T, v);
    } else if (t === "T") {
      const _ = xg(
        x,
        k,
        !!i.excludeMovingRangeOutliers
      );
      $ = _.mr, v = _.mrMean ?? NaN, M = _.mrUcl ?? NaN, T = _.center ?? NaN, D = {
        upperProcessLimit: _.upperProcessLimit,
        lowerProcessLimit: _.lowerProcessLimit,
        upperTwoSigma: _.upperTwoSigma,
        lowerTwoSigma: _.lowerTwoSigma,
        upperOneSigma: _.upperOneSigma,
        lowerOneSigma: _.lowerOneSigma
      };
    } else if (t === "G") {
      const _ = x.filter(
        (j, C) => !k[C] && Se(j)
      ), F = _.length ? Kt(_) : NaN, S = gg(F);
      T = S.cl ?? NaN, D = {
        upperProcessLimit: S.ucl,
        lowerProcessLimit: S.lcl,
        upperTwoSigma: S.twoHigh,
        lowerTwoSigma: S.twoLow,
        upperOneSigma: S.oneHigh,
        lowerOneSigma: S.oneLow
      }, $ = new Array(x.length).fill(null), v = NaN, M = NaN;
    } else
      d.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const P = p.map((_, F) => {
      const S = !_.ghost && Se(_.value) ? x.slice(0, F + 1).filter((te, V) => !k[V] && Se(te)).length : 0, j = h, C = j ? D : {
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
        pointRank: S,
        mean: j && Se(T) ? T : null,
        mr: Se($[F]) ? $[F] : null,
        mrMean: j && Se(v) ? v : null,
        mrUcl: j && Se(M) ? M : null,
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
        variationIcon: Ie.Suppressed,
        assuranceIcon: ct.None,
        upperBaseline: j && Se(T) ? T : null,
        lowerBaseline: j && Se(T) ? T : null,
        movingRangeHighPointValue: j && Se(M) ? M : null,
        ghostValue: _.ghost && Se(_.value) ? _.value : null,
        ghostFlag: !!_.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    b[m] = P.filter(
      (_) => !_.ghost && Se(_.value)
    ).length;
    const y = i.specialCauseShiftPoints ?? 6, N = i.specialCauseTrendPoints ?? 6, w = [];
    for (let _ = 0; _ < P.length; _++) {
      const F = P[_], S = F.value;
      if (!F.ghost && Se(S) && w.push(_), !(Se(F.mean) && Se(F.upperProcessLimit) && Se(F.lowerProcessLimit)) || F.ghost || !Se(S)) {
        c.push(F);
        continue;
      }
      F.specialCauseSinglePointUp = Se(F.upperProcessLimit) ? S > F.upperProcessLimit : !1, F.specialCauseSinglePointDown = Se(F.lowerProcessLimit) ? S < F.lowerProcessLimit : !1, c.push(F);
    }
    if (w.length) {
      const _ = (j) => P[j];
      let F = [], S = [];
      for (const j of w) {
        const C = _(j);
        if (!Se(C.mean) || !Se(C.value)) {
          F = [], S = [];
          continue;
        }
        if (C.value > C.mean ? (F.push(j), S = []) : C.value < C.mean ? (S.push(j), F = []) : (F = [], S = []), F.length >= y)
          for (const I of F) {
            const te = _(I);
            te.specialCauseShiftUp = !0;
          }
        if (S.length >= y)
          for (const I of S) {
            const te = _(I);
            te.specialCauseShiftDown = !0;
          }
      }
      for (let j = 0; j <= w.length - 3; j++) {
        const I = w.slice(j, j + 3).map(_);
        if (!I.every((ce) => Se(ce.mean) && Se(ce.value))) continue;
        const te = I[0].mean, V = I.every((ce) => ce.value > te), B = I.every((ce) => ce.value < te);
        if (!V && !B) continue;
        const H = I[0].upperTwoSigma ?? 1 / 0, O = I[0].lowerTwoSigma ?? -1 / 0, ae = I[0].upperProcessLimit ?? 1 / 0, W = I[0].lowerProcessLimit ?? -1 / 0, ie = I.filter((ce) => ce.value > H && ce.value <= ae), je = I.filter((ce) => ce.value < O && ce.value >= W);
        if (V && ie.length >= 2)
          for (const ce of ie)
            ce.specialCauseTwoOfThreeUp = !0;
        if (B && je.length >= 2)
          for (const ce of je)
            ce.specialCauseTwoOfThreeDown = !0;
      }
      if (i.enableFourOfFiveRule)
        for (let j = 0; j <= w.length - 5; j++) {
          const I = w.slice(j, j + 5).map(_);
          if (!I.every((ae) => Se(ae.mean) && Se(ae.value))) continue;
          const te = I[0].mean;
          if (!I.every((ae) => ae.value > te) && !I.every((ae) => ae.value < te)) continue;
          const V = I[0].upperOneSigma ?? 1 / 0, B = I[0].lowerOneSigma ?? -1 / 0, H = I.filter((ae) => ae.value > V), O = I.filter((ae) => ae.value < B);
          if (I.every((ae) => ae.value > te) && H.length >= 4)
            for (const ae of H)
              ae.specialCauseFourOfFiveUp = !0;
          if (I.every((ae) => ae.value < te) && O.length >= 4)
            for (const ae of O)
              ae.specialCauseFourOfFiveDown = !0;
        }
      for (let j = 0; j <= w.length - N; j++) {
        const C = w.slice(j, j + N), I = C.map(_);
        if (!I.every((B) => Se(B.value))) continue;
        let te = !0, V = !0;
        for (let B = 1; B < I.length && (I[B].value > I[B - 1].value || (te = !1), I[B].value < I[B - 1].value || (V = !1), !(!te && !V)); B++)
          ;
        if (te) for (const B of C) {
          const H = _(B);
          H.specialCauseTrendUp = !0;
        }
        if (V) for (const B of C) {
          const H = _(B);
          H.specialCauseTrendDown = !0;
        }
      }
      if (i.enableFifteenInInnerThirdRule) {
        let j = [];
        for (const C of w) {
          const I = _(C);
          if (!Se(I.value) || !Se(I.mean) || !Se(I.upperOneSigma) || !Se(I.lowerOneSigma)) {
            j = [];
            continue;
          }
          if (!(I.value < I.upperOneSigma && I.value > I.lowerOneSigma)) {
            j = [];
            continue;
          }
          if (j.push(C), j.length >= 15) {
            const V = j.map(_), B = V.some((O) => O.value > O.mean), H = V.some((O) => O.value < O.mean);
            if (B && H)
              for (const O of j) _(O).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition)) {
      const _ = i.maximumPointsPartition;
      let F = 0;
      for (const S of c.filter((j) => j.partitionId === m))
        !S.ghost && Se(S.value) && F++, F > _ && (S.mean = S.upperProcessLimit = S.lowerProcessLimit = null, S.upperTwoSigma = S.lowerTwoSigma = S.upperOneSigma = S.lowerOneSigma = null);
    }
  }
  for (const p of c) {
    if (p.ruleTags && p.ruleTags.length) continue;
    const x = [];
    p.specialCauseShiftUp && x.push(wt.ShiftHigh), p.specialCauseShiftDown && x.push(wt.ShiftLow), p.specialCauseTrendUp && x.push(wt.TrendIncreasing), p.specialCauseTrendDown && x.push(wt.TrendDecreasing), p.specialCauseSinglePointUp && x.push(wt.SinglePointAbove), p.specialCauseSinglePointDown && x.push(wt.SinglePointBelow), p.specialCauseTwoOfThreeUp && x.push(wt.TwoOfThreeAbove), p.specialCauseTwoOfThreeDown && x.push(wt.TwoOfThreeBelow), p.specialCauseFourOfFiveUp && x.push(wt.FourOfFiveAbove), p.specialCauseFourOfFiveDown && x.push(wt.FourOfFiveBelow), p.specialCauseFifteenInnerThird && x.push(wt.FifteenInnerThird), x.length && (p.ruleTags = x);
  }
  for (let p = 0; p < c.length; p++) {
    const x = c[p];
    if (Object.prototype.hasOwnProperty.call(x, Tr.ImprovementValueBeforePruning) || Object.defineProperty(x, Tr.ImprovementValueBeforePruning, {
      get() {
        return x.originalSpecialCauseImprovementValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.prototype.hasOwnProperty.call(x, Tr.ConcernValueBeforePruning) || Object.defineProperty(x, Tr.ConcernValueBeforePruning, {
      get() {
        return x.originalSpecialCauseConcernValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), x.ghost || !Se(x.value) || x.mean === null) {
      x.variationIcon = Ie.Suppressed;
      continue;
    }
    const k = x.value > x.mean, $ = x.value < x.mean;
    i.rules?.collapseWeakerClusterRules && (x.specialCauseTwoOfThreeUp && x.specialCauseFourOfFiveUp && (x.specialCauseTwoOfThreeUp = !1), x.specialCauseTwoOfThreeDown && x.specialCauseFourOfFiveDown && (x.specialCauseTwoOfThreeDown = !1));
    const T = x.specialCauseTrendUp && k, v = x.specialCauseTrendDown && $, M = x.specialCauseSinglePointUp || x.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && x.specialCauseFourOfFiveUp || x.specialCauseShiftUp || T, D = x.specialCauseSinglePointDown || x.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && x.specialCauseFourOfFiveDown || x.specialCauseShiftDown || v;
    let P = !1;
    if (i.precedenceStrategy === Qr.DirectionalFirst && (i.grace?.emergingEnabled || i.emergingGraceEnabled || i.emergingDirectionGrace)) {
      const N = i.specialCauseTrendPoints || 6;
      if (N > 1 && !(x.specialCauseTrendUp || x.specialCauseTrendDown)) {
        const w = N - 1, _ = [];
        for (let F = p; F >= 0 && _.length < w; F--) {
          const S = c[F];
          !S.ghost && Se(S.value) && S.mean !== null && _.unshift(S);
        }
        if (_.length === w) {
          let F = !0;
          for (let S = 1; S < _.length && F; S++)
            n === Re.Up ? _[S].value > _[S - 1].value || (F = !1) : n === Re.Down && _[S].value < _[S - 1].value || (F = !1);
          P = F;
        }
      }
    }
    if (i.precedenceStrategy === Qr.DirectionalFirst) {
      const w = n === Re.Up ? M : n === Re.Down ? D : !1, _ = n === Re.Up ? D : n === Re.Down ? M : !1;
      w && !_ ? x.variationIcon = Ie.Improvement : _ && !w ? x.variationIcon = P ? Ie.Neither : Ie.Concern : w && _ ? x.variationIcon = P || x.specialCauseTrendUp || x.specialCauseTrendDown ? Ie.Improvement : Ie.Neither : x.variationIcon = Ie.Neither;
    } else
      n === Re.Up ? x.variationIcon = M ? Ie.Improvement : D ? Ie.Concern : Ie.Neither : n === Re.Down ? x.variationIcon = D ? Ie.Improvement : M ? Ie.Concern : Ie.Neither : x.variationIcon = Ie.Neither;
    const y = M || D;
    if (x.specialCauseImprovementValue = y && x.variationIcon === Ie.Improvement ? x.value : null, x.specialCauseConcernValue = y && x.variationIcon === Ie.Concern ? x.value : null, x.specialCauseNeitherValue = y && x.variationIcon === Ie.Neither ? x.value : null, i.conflictPrecedenceMode === ic.SqlRankingV26a && x.specialCauseImprovementValue !== null && x.specialCauseConcernValue !== null) {
      const N = [];
      x.specialCauseSinglePointUp && N.push({ id: en.SinglePoint, rank: 1, side: Ct.Up }), x.specialCauseSinglePointDown && N.push({ id: en.SinglePoint, rank: 1, side: Ct.Down }), x.specialCauseTwoOfThreeUp && N.push({ id: en.TwoSigma, rank: 2, side: Ct.Up }), x.specialCauseTwoOfThreeDown && N.push({ id: en.TwoSigma, rank: 2, side: Ct.Down }), x.specialCauseShiftUp && N.push({ id: en.Shift, rank: 3, side: Ct.Up }), x.specialCauseShiftDown && N.push({ id: en.Shift, rank: 3, side: Ct.Down }), x.specialCauseTrendUp && N.push({ id: en.Trend, rank: 4, side: Ct.Up }), x.specialCauseTrendDown && N.push({ id: en.Trend, rank: 4, side: Ct.Down });
      const w = N.filter((V) => V.side === Ct.Up).reduce((V, B) => Math.max(V, B.rank), 0), _ = N.filter((V) => V.side === Ct.Down).reduce((V, B) => Math.max(V, B.rank), 0);
      let F;
      w > _ ? F = Qn.Upwards : _ > w ? F = Qn.Downwards : F = Qn.Same;
      const S = x.specialCauseImprovementValue, j = x.specialCauseConcernValue;
      F === Qn.Upwards ? n === Re.Up ? x.specialCauseConcernValue = null : n === Re.Down && (x.specialCauseImprovementValue = null) : F === Qn.Downwards ? n === Re.Up ? x.specialCauseImprovementValue = null : n === Re.Down && (x.specialCauseConcernValue = null) : x.variationIcon === Ie.Improvement ? x.specialCauseConcernValue = null : x.variationIcon === Ie.Concern ? x.specialCauseImprovementValue = null : x.specialCauseConcernValue = null, x.specialCauseImprovementValue !== null && x.specialCauseConcernValue === null ? x.variationIcon = Ie.Improvement : x.specialCauseConcernValue !== null && x.specialCauseImprovementValue === null ? x.variationIcon = Ie.Concern : x.specialCauseImprovementValue === null && x.specialCauseConcernValue === null && (x.variationIcon = Ie.Neither);
      const C = x.specialCauseImprovementValue !== null ? Ct.Up : x.specialCauseConcernValue !== null ? Ct.Down : void 0, I = C === Ct.Up ? w : C === Ct.Down ? _ : Math.max(w, _), te = N.find((V) => V.rank === I && (!C || V.side === C));
      x.conflictPrimeDirection = F, x.conflictResolved = !0, x.conflictResolvedRank = I || void 0, te && (x.conflictResolvedByRuleId = te.id), x.pruningMode = lc.Conflict, x.originalSpecialCauseImprovementValue = S, x.originalSpecialCauseConcernValue = j;
    }
    {
      const N = l[x.rowId - 1], w = bg({
        metricImprovement: n,
        capabilityMode: i.assuranceCapabilityMode,
        value: x.value,
        mean: x.mean,
        upperProcessLimit: x.upperProcessLimit,
        lowerProcessLimit: x.lowerProcessLimit,
        target: Se(N?.target) ? N.target : null
      });
      x.assuranceIcon = w;
    }
  }
  if ((i.minimumPointsWarning ?? !1) && !h) {
    const p = l.filter(
      (x) => !x.ghost && Se(x.value)
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
      p.variationIcon === Ie.Improvement && (p.specialCauseSinglePointUp || p.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && p.specialCauseFourOfFiveUp || p.specialCauseShiftUp || p.specialCauseTrendUp) && (p.specialCauseSinglePointDown || p.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && p.specialCauseFourOfFiveDown || p.specialCauseShiftDown || p.specialCauseTrendDown) && d.push({
        code: "variation_conflict_row",
        category: "logic",
        severity: "warning",
        message: `Row ${p.rowId}: simultaneous high/low special-cause signals – variation icon may be ambiguous.`,
        context: { rowId: p.rowId }
      });
  if (i.maximumPoints && Number.isFinite(i.maximumPoints)) {
    const p = i.maximumPoints;
    let x = 0;
    for (const k of c)
      !k.ghost && Se(k.value) && x++, x > p && (k.mean = k.upperProcessLimit = k.lowerProcessLimit = null, k.upperTwoSigma = k.lowerTwoSigma = k.upperOneSigma = k.lowerOneSigma = null);
  }
  if (i.nullValueWarning && (t === _t.XmR || t === _t.G)) {
    const p = l.filter(
      (x) => !x.ghost && (x.value === null || x.value === void 0 || !Se(x.value))
    ).length;
    p && d.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${p} null/missing value(s) excluded from calculations.`,
      context: { nullCount: p }
    });
  }
  if (i.targetSuppressedWarning && (t === _t.T || t === _t.G) && l.some((x) => Se(x.target)) && d.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), i.ghostOnRareEventWarning && (t === _t.T || t === _t.G)) {
    const p = l.filter((x) => x.ghost).length;
    p && d.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${p} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: p }
    });
  }
  if (i.partitionSizeWarnings && Object.entries(b).forEach(([p, x]) => {
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
  let g;
  if (i.baselineSuggest) {
    const p = i.baselineSuggestStabilityPoints, x = i.baselineSuggestMinGap, k = i.baselineSuggestMinDeltaSigma, $ = i.baselineSuggestScoreThreshold;
    g = vg(
      c.map((v) => ({
        value: v.value,
        partitionId: v.partitionId,
        variationIcon: v.variationIcon,
        mean: v.mean,
        upperProcessLimit: v.upperProcessLimit
      })),
      {
        W: p,
        minGap: x,
        minDeltaSigma: k,
        scoreThreshold: $,
        isShiftUpAt: (v) => !!c[v].specialCauseShiftUp,
        isShiftDownAt: (v) => !!c[v].specialCauseShiftDown,
        isTrendUpAt: (v) => !!c[v].specialCauseTrendUp,
        isTrendDownAt: (v) => !!c[v].specialCauseTrendDown,
        isSingleUpAt: (v) => !!c[v].specialCauseSinglePointUp,
        isSingleDownAt: (v) => !!c[v].specialCauseSinglePointDown
      }
    ).map((v) => ({
      index: v.index,
      reason: v.reason,
      score: v.score,
      deltaMean: v.deltaMean,
      oldMean: v.oldMean,
      newMean: v.newMean,
      window: v.window
    }));
  }
  return { rows: c, warnings: d, ...g ? { suggestedBaselines: g } : {} };
}
function Vi(e, t) {
  return e === "improvement" ? ke.SpecialCauseImproving : e === "concern" ? ke.SpecialCauseDeteriorating : e === "suppressed" || e === "neither" && t ? ke.SpecialCauseNoJudgement : e === "neither" ? ke.CommonCause : null;
}
function _g(e, t) {
  return e === "improvement" || e === "concern" || e === "suppressed" || e === "neither" && !!t;
}
function Sg(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function kg(e) {
  const {
    values: t,
    x: n,
    chartType: a = _t.XmR,
    metricImprovement: o = Re.Neither,
    showLimits: s = !0,
    showLimitBand: i = !1,
    showInnerBands: l = !1,
    showMean: u = !1,
    autoClassify: c = !0
  } = e, d = q.useMemo(() => {
    const v = [];
    for (let M = 0; M < t.length; M++)
      v.push({ x: n?.[M], value: t[M] });
    return v;
  }, [t, n]), f = q.useMemo(() => {
    try {
      const v = d.map((M, D) => ({ x: M.x ?? D, value: M.value }));
      return _c({ chartType: a, metricImprovement: o, data: v, settings: {} });
    } catch {
      return null;
    }
  }, [d, a, o]), h = q.useMemo(() => {
    const v = f?.rows;
    if (!v || v.length === 0) return null;
    for (let M = v.length - 1; M >= 0; M--) {
      const D = v[M];
      if (D && D.value != null && !D.ghost) return D;
    }
    return v[v.length - 1] ?? null;
  }, [f]), m = q.useMemo(() => {
    const v = f?.rowsRepresentative ?? f?.rows;
    if (!v || !Array.isArray(v) || v.length === 0) return null;
    const M = v[v.length - 1];
    return Vi(
      M?.variationIcon,
      (M?.specialCauseNeitherValue ?? null) != null
    );
  }, [f]), b = q.useMemo(() => h?.mean ?? null, [h]), g = q.useMemo(() => {
    if (!h) return null;
    const v = h?.lowerProcessLimit ?? null, M = h?.upperProcessLimit ?? null;
    return v == null && M == null ? null : { lower: v, upper: M };
  }, [h]), p = q.useMemo(() => h ? {
    upperOne: h?.upperOneSigma ?? null,
    upperTwo: h?.upperTwoSigma ?? null,
    lowerOne: h?.lowerOneSigma ?? null,
    lowerTwo: h?.lowerTwoSigma ?? null
  } : null, [h]), x = q.useMemo(() => {
    const v = f?.rows;
    if (!(!v || v.length === 0))
      return v.map((M) => {
        const D = !!M?.specialCauseSinglePointUp || !!M?.specialCauseTwoOfThreeUp || !!M?.specialCauseFourOfFiveUp || !!M?.specialCauseShiftUp || !!M?.specialCauseTrendUp, P = !!M?.specialCauseSinglePointDown || !!M?.specialCauseTwoOfThreeDown || !!M?.specialCauseFourOfFiveDown || !!M?.specialCauseShiftDown || !!M?.specialCauseTrendDown;
        switch (o) {
          case Re.Up:
            return D ? "improvement" : P ? "concern" : "neither";
          case Re.Down:
            return P ? "improvement" : D ? "concern" : "neither";
          case Re.Neither:
          default:
            return "neither";
        }
      });
  }, [f, o]), k = q.useMemo(() => {
    const v = f?.rows;
    if (!(!v || v.length === 0))
      return v.map((M) => !!M?.specialCauseNeitherValue);
  }, [f]), $ = q.useMemo(() => {
    let v = null;
    if (h && h.value != null && !h.ghost) {
      const F = h.variationIcon, S = (h?.specialCauseNeitherValue ?? null) != null;
      m === ke.SpecialCauseNoJudgement ? v = _g(F, S) ? ke.SpecialCauseNoJudgement : ke.CommonCause : v = Vi(F, S) ?? ke.CommonCause;
    }
    const M = v ?? ke.CommonCause, D = es[M].hex, [P, y, N] = Sg(D), w = Ja();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${P}, ${y}, ${N}, ${w.start}) 0%, rgba(${P}, ${y}, ${N}, ${w.mid}) 50%, rgba(${P}, ${y}, ${N}, ${w.end}) 100%)`,
      "--fdp-metric-card-accent": D
    };
  }, [h, m]);
  return { sparkProps: q.useMemo(() => ({
    data: d,
    showMean: u,
    showLimits: s,
    showLimitBand: i,
    showInnerBands: l,
    metricImprovement: o,
    centerLine: b,
    controlLimits: g,
    sigmaBands: p,
    pointSignals: x,
    pointNeutralSpecialCause: k,
    variationState: m ?? void 0,
    autoClassify: !!(c && !m),
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
    m,
    b,
    g?.lower,
    g?.upper,
    p?.upperOne,
    p?.upperTwo,
    p?.lowerOne,
    p?.lowerTwo,
    x?.length,
    k?.length
  ]), metricCardStyle: $, latestState: m };
}
function Gi(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function Cg(e, t, n) {
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
function Ng(e, t) {
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
function jg(e, t, n, a = "0-100") {
  if (t) return t;
  if (n) return n;
  const o = e.filter((l) => l != null);
  if (!o.length) return;
  const s = Math.min(...o), i = Math.max(...o);
  if (a === "0-1") {
    if (s >= 0 && i <= 1 && i > 0) return "%";
  } else if (s >= 0 && i <= 100 && i > 0) return "%";
}
function Tg(e, t, n = 1) {
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
  } = e, f = t.map((y) => typeof y == "number" ? y : y == null ? null : Number(y));
  let h = -1;
  for (let y = f.length - 1; y >= 0; y--)
    if (f[y] != null) {
      h = y;
      break;
    }
  let m = (n || []).map(Gi);
  if (!m.some(Boolean)) {
    const y = Gi(o);
    y && a ? m = Cg(f.length, y, a) : m = new Array(f.length).fill(void 0);
  }
  const g = Ng(m, a), p = jg(f, s, i, e.percentHeuristic), x = l && h >= 0 && f[h] != null ? f[h] : void 0, k = { strategy: "previous", n: 1, absolute: !0, skipNulls: !0, ...d || {} };
  function $() {
    if (h < 0) return -1;
    if (k.strategy === "previous" || k.strategy === "n-points") {
      let F = h - (k.strategy === "previous" ? 1 : Math.max(1, k.n || 1));
      if (!k.skipNulls) return F;
      for (let S = F; S >= 0; S--) if (f[S] != null) return S;
      return -1;
    }
    const y = m[h];
    if (!y) return -1;
    const N = new Date(y);
    N.setFullYear(N.getFullYear() - 1);
    let w = -1, _ = 1 / 0;
    for (let F = 0; F < m.length; F++) {
      const S = m[F];
      if (!S || f[F] == null) continue;
      const j = Math.abs(S.getTime() - N.getTime());
      j < _ && (_ = j, w = F);
    }
    return w;
  }
  const T = $(), v = T >= 0 ? f[T] : null;
  let M;
  if (u && x != null && v != null) {
    const y = x - v, N = k.absolute !== !1, w = N ? y : v === 0 ? 0 : y / Math.abs(v) * 100;
    M = {
      value: Number.isFinite(w) ? Number(w.toFixed(2)) : 0,
      isPercent: N ? p === "%" : !0,
      period: `vs ${Tg(g, a, k.strategy === "n-points" ? Math.max(1, k.n || 1) : 1)}`
    };
  }
  const D = h >= 0 ? m[h] : void 0, P = c && Yi(D, g) ? `Latest: ${Yi(D, g)}` : void 0;
  return { value: x, unit: p, delta: M, metadata: P, latestDate: D, frequency: g };
}
const py = ({
  sparkData: e,
  direction: t = Re.Neither,
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
  startDate: m,
  deltaConfig: b,
  ...g
}) => {
  const p = kg({
    values: e.map((D) => D.value ?? null),
    metricImprovement: t,
    showLimits: a,
    showLimitBand: o,
    showInnerBands: s,
    showMean: n,
    autoClassify: i
  }), x = /* @__PURE__ */ r.jsx(bc, { ...p.sparkProps, maxPoints: l }), k = q.useMemo(() => Sc({
    values: e.map((D) => typeof D.value == "number" ? D.value : null),
    dates: e.map((D) => D.date),
    intervalHint: h,
    startDate: m,
    providedUnit: g.unit,
    defaultUnit: f,
    autoValue: u,
    autoDelta: c,
    autoMetadata: d,
    deltaConfig: b
  }), [e, h, m, g.unit, f, u, c, d, b]), $ = u && k.value != null ? k.value : g.value, T = c && k.delta ? k.delta : g.delta, v = k.unit || g.unit, M = d && k.metadata ? k.metadata : g.metadata;
  return /* @__PURE__ */ r.jsx(
    Bm,
    {
      ...g,
      value: $,
      unit: v,
      delta: T,
      metadata: M,
      visual: x,
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
  const u = vn(), c = jn(), [d, f] = q.useState(null), [h, m] = q.useState(!1), b = q.useRef(null);
  q.useEffect(() => {
    if (u) {
      if (u.focused && (f(u.focused), b.current && (cancelAnimationFrame(b.current), b.current = null)), !u.focused && !h) {
        const se = requestAnimationFrame(() => {
          f(null), b.current = null;
        });
        b.current = se;
      }
      return () => {
        b.current && (cancelAnimationFrame(b.current), b.current = null);
      };
    }
  }, [u, u?.focused, h]);
  const g = u && (u.focused || (h ? d : null) || d), [p, x] = q.useState(!1);
  q.useEffect(() => {
    const se = requestAnimationFrame(() => x(!0));
    return () => cancelAnimationFrame(se);
  }, [g?.index]);
  const k = c?.innerWidth ?? 0, $ = c?.innerHeight ?? 0, T = g ? Math.min(Math.max(g.clientX, 0), k) : 0, v = g ? Math.min(Math.max(g.clientY, 0), $) : 0, M = c?.ref?.current || void 0;
  if (!g)
    return null;
  const D = e?.[g.index], y = Za(
    D ? {
      specialCauseSinglePointUp: !!D.rules.singlePoint.up,
      specialCauseSinglePointDown: !!D.rules.singlePoint.down,
      specialCauseTwoOfThreeUp: !!D.rules.twoOfThree.up,
      specialCauseTwoOfThreeDown: !!D.rules.twoOfThree.down,
      specialCauseFourOfFiveUp: !!D.rules.fourOfFive.up,
      specialCauseFourOfFiveDown: !!D.rules.fourOfFive.down,
      specialCauseShiftUp: !!D.rules.shift.up,
      specialCauseShiftDown: !!D.rules.shift.down,
      specialCauseTrendUp: !!D.rules.trend.up,
      specialCauseTrendDown: !!D.rules.trend.down
    } : null
  ).map((se) => ({ id: se, label: lr[se].tooltip })), N = g.x instanceof Date ? g.x : new Date(g.x), w = s ? s(N) : N.toDateString(), _ = o ? `${o}` : "", F = a || _ ? `${g.y}${_ ? "" + _ : " "}${a ? " " + a : ""}` : `${g.y}`, S = Qa(D?.classification?.variation), j = cc(D?.classification?.assurance), C = Um(
    t.mean ?? null,
    t.sigma,
    g.y
  ), I = n ? n(g.index, { x: g.x, y: g.y }) : void 0, te = S || j || C, V = D?.rules.trend.up || D?.rules.trend.down, B = D?.classification?.variation === Ie.Neither && V, H = l && B ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, O = y.length > 0, ae = D && "primeDirection" in D ? D.primeDirection : void 0, W = D && "primeRuleId" in D ? D.primeRuleId : void 0, ie = i && D?.classification?.variation === Ie.Neither && O, je = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", ce = uc(D?.classification?.variation), ue = 6.2, ne = [
    I || "",
    `${w} • ${F}`
  ].filter(Boolean).reduce(
    (se, E) => Math.max(se, E.length * ue + 32),
    0
  ), de = 200, G = 440, fe = Math.min(G, Math.max(de, ne));
  let oe = T + 12, R = (c.margin?.top ?? 0) + v + 16;
  oe + fe > k && (oe = T - -60 - fe), oe < 0 && (oe = Math.max(0, k - fe));
  const Q = g ? `spc-tooltip-${g.index}` : "spc-tooltip", pe = typeof g.index == "number" ? g.index : NaN, le = M ? ju(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: Q,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (p ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: oe,
          top: R,
          width: fe,
          maxWidth: G,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": p ? "false" : "true",
        "data-floating": !0,
        "data-placement": oe + fe + 12 > k ? "left" : "right",
        onPointerEnter: () => {
          m(!0), b.current && (cancelAnimationFrame(b.current), b.current = null);
        },
        onPointerLeave: () => {
          if (m(!1), !u?.focused) {
            const se = requestAnimationFrame(() => {
              f(null), b.current = null;
            });
            b.current = se;
          }
        },
        children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--point", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Point" }) }),
            /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__primary-line", children: [
              "Index: ",
              pe
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: w })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: F })
          ] }),
          te && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: S?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              Je,
              {
                text: S,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : S?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              Je,
              {
                text: S,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : ie ? /* @__PURE__ */ r.jsx(
              Je,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : S ? /* @__PURE__ */ r.jsx(
              Je,
              {
                text: S,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          j && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const se = j.toLowerCase(), U = !(se.includes("not met") || se.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(se);
              return /* @__PURE__ */ r.jsx(
                Je,
                {
                  text: j,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${U ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${j}`
                }
              );
            })() })
          ] }),
          C && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              Je,
              {
                text: (() => {
                  const se = C.toLowerCase();
                  return se.startsWith("within 1") ? "≤1σ" : se.startsWith("1–2") ? "1–2σ" : se.startsWith("2–3") ? "2–3σ" : se.startsWith(">3") ? ">3σ" : C;
                })(),
                color: C.includes(">3") ? "orange" : C.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${C}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          H && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: H })
          ] }),
          O && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: y.map(({ id: se, label: E }) => {
                  const U = String(se), X = U === wt.TrendIncreasing || U === wt.TrendDecreasing ? "fdp-spc-tag--trend" : ie ? "fdp-spc-tag--no-judgement" : S ? S.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : S.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    Je,
                    {
                      text: E,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${X}`,
                      "data-rule-id": U
                    },
                    U
                  );
                })
              }
            ),
            ae && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const se = ie ? "fdp-spc-tag--no-judgement" : S ? S.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : S.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", E = `${ae}${W ? ` (${W})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  Je,
                  {
                    text: E,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${se}`,
                    "aria-label": `Prime direction ${ae}${W ? ` via ${W}` : ""}`
                  }
                );
              })()
            ] })
          ] })
        ] })
      }
    ),
    M
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
            cy: v,
            r: 7,
            fill: "none",
            stroke: je,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: T,
            cy: v,
            r: 5,
            fill: "#000",
            stroke: je,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: T,
            cy: v,
            r: 2.5,
            fill: ce,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        le
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
  const c = ea(), d = ea(), { start: f, mid: h, end: m } = Ja(), b = o || zm[e], g = (i || Vm[e]).slice(0, 2), p = n || `Assurance ${e}`;
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
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: b, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: b, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(m) })
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
            fill: b,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            x: 0,
            y: 0,
            transform: "translate(121.01, 32) scale(0.5, 0.5)",
            textAnchor: "middle",
            children: /* @__PURE__ */ r.jsx("tspan", { x: 60, y: 184, children: g })
          }
        ),
        l && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          e === En.Fail ? /* @__PURE__ */ r.jsx(
            "path",
            {
              id: "fail-line",
              stroke: b,
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
              stroke: b,
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
              stroke: b,
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
function Dg(e, t = !0) {
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
const Ig = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: a
}) => {
  const o = vn(), s = o?.focused ?? null, i = s?.index ?? null, l = typeof i == "number" && e ? e[i] : null, u = q.useMemo(
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
  ), c = q.useMemo(
    () => Array.from(
      new Set(u.map((g) => lr[g]?.narration).filter(Boolean))
    ),
    [u]
  ), d = l ? Qa(l.classification?.variation) : null, f = l ? cc(l.classification?.assurance) : null, h = u.length > 0, m = l ? l.classification?.variation === Ie.Neither && h : !1, b = q.useRef(null);
  return q.useEffect(() => {
    if (!a || !s || l == null) return;
    const g = `${s.seriesId}:${s.index}`;
    if (b.current !== g) {
      b.current = g;
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
                    ) : m ? /* @__PURE__ */ r.jsx(
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
                      const g = f.toLowerCase(), x = !(g.includes("not met") || g.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(g);
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
                children: u.length === 0 ? /* @__PURE__ */ r.jsx("span", { children: " None" }) : u.map((g) => {
                  const p = String(g), k = p === wt.TrendIncreasing || p === wt.TrendDecreasing ? "fdp-spc-tag--trend" : m ? "fdp-spc-tag--no-judgement" : d ? d.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : d.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", $ = lr[g]?.tooltip || p;
                  return /* @__PURE__ */ r.jsx(
                    Je,
                    {
                      text: $,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${k}`,
                      "data-rule-id": p,
                      title: lr[g]?.tooltip
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
function $g(e) {
  const { rows: t } = Do(e), n = Io(e);
  return { rows: t, visuals: n.visuals };
}
var ar = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(ar || {}), Os = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(Os || {});
function Mg(e) {
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
    announceFocus: m,
    className: b,
    unit: g,
    targets: p,
    baselines: x,
    ghosts: k,
    settings: $,
    chartType: T,
    metricImprovement: v,
    gradientSequences: M,
    sequenceTransition: D,
    processLineWidth: P,
    showPartitionMarkers: y,
    showWarningsPanel: N,
    warningsFilter: w,
    enableNeutralNoJudgement: _,
    showTrendGatingExplanation: F,
    trendVisualMode: S,
    alwaysShowZeroY: j,
    alwaysShowHundredY: C,
    percentScale: I,
    showTrendStartMarkers: te,
    showFirstFavourableCrossMarkers: V,
    showTrendBridgeOverlay: B,
    showSignalsInspector: H,
    onSignalFocus: O,
    showIcons: ae,
    showEmbeddedIcon: W,
    embeddedIconVariant: ie,
    embeddedIconRunLength: je,
    showFocusIndicator: ce,
    visualsScenario: ue,
    visualsEngineSettings: J,
    source: ne,
    narrationContext: de,
    highlightOutOfControl: G
  } = e;
  process.env.NODE_ENV !== "production" && (!n && (p !== void 0 || x !== void 0 || k !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={{ data, targets, baselines, ghosts }} instead."
  ), !a && $ !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={{ chartType, metricImprovement, settings }}."
  ), !o && (d !== void 0 || b !== void 0) && console.warn(
    "SPCChart: Consider grouped container props. Use container={{ height, className }}."
  ), !s && (c !== void 0 || m !== void 0 || de !== void 0 || g !== void 0) && console.warn(
    "SPCChart: Consider grouped accessibility props. Use a11y={{ label, announceFocus, narrationContext, unit }}."
  ), !i && (ue !== void 0 || J !== void 0) && console.warn(
    "SPCChart: Consider grouped visuals engine props. Use visualsEngine={{ scenario, settings }}."
  ), t?.visuals === void 0 && (f !== void 0 || h !== void 0) && console.warn(
    "SPCChart: Visual toggles should be grouped. Use ui={{ visuals: { showZones, showPoints } }}."
  ), t?.visuals?.rules === void 0 && G !== void 0 && console.warn(
    "SPCChart: Prefer grouped rules toggle. Use ui={{ visuals: { rules: { highlightOutOfControl } } }}."
  ), !l && ne !== void 0 && console.warn(
    "SPCChart: Consider grouped meta. Use meta={{ source }}."
  ));
  const fe = n?.data ?? u ?? [], oe = n?.targets ?? p, A = n?.baselines ?? x, R = n?.ghosts ?? k, Q = a?.chartType ?? T ?? _t.XmR, pe = a?.metricImprovement ?? v ?? Re.Neither, le = a?.settings ?? $, se = a?.autoRecalc, E = t?.axes?.alwaysShowZeroY ?? j ?? !0, U = t?.axes?.alwaysShowHundredY ?? C ?? !1, z = t?.axes?.percentScale ?? I ?? !1, X = t?.visuals?.gradientSequences ?? M ?? !1, L = t?.visuals?.sequenceTransition ?? D ?? "slope", Y = t?.visuals?.processLineWidth ?? P ?? 2, Z = t?.visuals?.trend?.visualMode ?? S ?? "ungated", ee = t?.visuals?.trend?.showGatingExplanation ?? F ?? !0, K = t?.visuals?.rules?.enableNeutralNoJudgement ?? _ ?? !0, re = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, me = t?.visuals?.showZones, be = t?.visuals?.showPoints, Ce = t?.visuals?.rules?.highlightOutOfControl, we = o?.height, ge = o?.className, Pe = s?.label, We = s?.unit, at = s?.narrationContext, ze = i?.scenario, Qe = i?.settings, Pt = l?.source, St = t?.overlays?.partitionMarkers ?? y ?? !1, vt = t?.overlays?.trendStartMarkers ?? te ?? !1, st = t?.overlays?.firstFavourableCrossMarkers ?? V ?? !1, it = t?.overlays?.trendBridge ?? B ?? !1, Jt = t?.inspector?.show ?? H ?? !1, Ur = t?.inspector?.onFocus ?? O, Tn = t?.warnings?.show ?? N ?? !1, mr = t?.warnings?.filter ?? w, Dn = t?.icons?.show ?? ae ?? !1, Gn = t?.icons?.embedded?.show ?? W ?? !0, gr = t?.icons?.embedded?.variant ?? ie ?? Nn.Classic, In = t?.icons?.embedded?.runLength ?? je, $n = t?.overlays?.focusIndicator ?? ce ?? !0;
  return {
    effData: fe,
    effTargets: oe,
    effBaselines: A,
    effGhosts: R,
    effChartTypeCore: Q,
    effMetricImprovementCore: pe,
    effEngineSettings: le,
    effEngineAutoRecalc: se,
    effHeight: we,
    effClassName: ge,
    effAriaLabel: Pe,
    effUnit: We,
    effNarrationContext: at,
    effShowZones: me,
    effShowPoints: be,
    effHighlightOutOfControl: Ce,
    effVisualsScenario: ze,
    effVisualsEngineSettings: Qe,
    effSource: Pt,
    effAlwaysShowZeroY: E,
    effAlwaysShowHundredY: U,
    effPercentScale: z,
    effGradientSequences: X,
    effSequenceTransition: L,
    effProcessLineWidth: Y,
    effTrendVisualMode: Z,
    effShowTrendGatingExplanation: ee,
    effEnableNeutralNoJudgement: K,
    effEnableRules: re,
    effShowPartitionMarkers: St,
    effShowTrendStartMarkers: vt,
    effShowFirstFavourableCrossMarkers: st,
    effShowTrendBridgeOverlay: it,
    effShowSignalsInspector: Jt,
    effOnSignalFocus: Ur,
    effShowWarningsPanel: Tn,
    effWarningsFilter: mr,
    effShowIcons: Dn,
    effShowEmbeddedIcon: Gn,
    effEmbeddedIconVariant: gr,
    effEmbeddedIconRunLength: In,
    effShowFocusIndicator: $n
  };
}
function Pg(e, t) {
  if (!e?.length || t.chartType !== jt.XmR) return null;
  const n = Math.max(2, Math.floor(t.shiftLength ?? 6)), a = [];
  for (let m = 0; m < e.length; m++) {
    const b = e[m], g = b.value;
    b?.ghost || typeof g == "number" && Number.isFinite(g) && a.push({ idx: m, value: g });
  }
  if (a.length < n * 2) return null;
  let o = 0, s = 0;
  for (let m = 1; m < a.length; m++)
    o += Math.abs(a[m].value - a[m - 1].value), s++;
  if (s === 0) return null;
  const l = o / s * (2.66 / 3);
  if (!Number.isFinite(l) || l <= 0) return null;
  const u = Math.max(0, t.deltaSigma ?? 0.5), c = t.metricImprovement === He.Up, d = t.metricImprovement === He.Down, f = (() => {
    for (let m = e.length - 1; m >= 0; m--) if (e[m]?.baseline) return m;
    return -1;
  })();
  function h(m, b) {
    let g = 0, p = 0;
    for (let x = m; x < b; x++)
      g += a[x].value, p++;
    return p ? g / p : NaN;
  }
  for (let m = n; m <= a.length - n; m++) {
    const b = h(m - n, m), g = h(m, m + n);
    if (!Number.isFinite(b) || !Number.isFinite(g)) continue;
    const p = g - b, x = p / l;
    let k = !1, $ = !1;
    if (c ? (k = x >= u, $ = !0) : d ? (k = -x >= u, $ = !1) : (k = Math.abs(x) >= u, $ = p > 0), !k) continue;
    const T = (D) => $ ? D > b : D < b;
    let v = !0;
    for (let D = m; D < m + n; D++)
      if (!T(a[D].value)) {
        v = !1;
        break;
      }
    if (!v) continue;
    const M = a[m].idx;
    if (!(t.minGap && f >= 0 && M - f < t.minGap))
      return M;
  }
  return null;
}
function Lg(e, t) {
  const n = Pg(e, t);
  return n == null ? e.slice() : e.map((a, o) => o === n ? { ...a, baseline: !0 } : a);
}
let Fg = 0;
const Ag = ({
  data: e,
  ariaLabel: t = "SPC chart",
  height: n = 260,
  showZones: a = !0,
  showPoints: o = !0,
  announceFocus: s = !1,
  className: i,
  unit: l,
  highlightOutOfControl: u = !0,
  chartType: c = _t.XmR,
  metricImprovement: d = Re.Neither,
  enableRules: f = !0,
  showIcons: h = !1,
  showEmbeddedIcon: m = !0,
  embeddedIconVariant: b = Nn.Classic,
  embeddedIconRunLength: g,
  targets: p,
  baselines: x,
  ghosts: k,
  settings: $,
  narrationContext: T,
  gradientSequences: v = !1,
  sequenceTransition: M = ar.Slope,
  processLineWidth: D = 2,
  showWarningsPanel: P = !1,
  warningsFilter: y,
  enableNeutralNoJudgement: N = !0,
  showTrendGatingExplanation: w = !0,
  trendVisualMode: _ = Os.Ungated,
  disableTrendSideGating: F,
  source: S,
  alwaysShowZeroY: j = !0,
  alwaysShowHundredY: C = !1,
  percentScale: I = !1,
  showPartitionMarkers: te = !1,
  showTrendStartMarkers: V = !1,
  showFirstFavourableCrossMarkers: B = !1,
  showTrendBridgeOverlay: H = !1,
  showSignalsInspector: O = !1,
  onSignalFocus: ae,
  visualsScenario: W = hc.None,
  showFocusIndicator: ie = !0,
  visualsEngineSettings: je,
  ui: ce,
  input: ue,
  engine: J,
  // New grouped aliases
  container: ne,
  a11y: de,
  visualsEngine: G,
  meta: fe
}) => {
  const oe = q.useCallback(
    (Ne) => String(Ne).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Ye) => Ye.length ? Ye[0].toUpperCase() + Ye.slice(1) : Ye).join(" "),
    []
  ), A = q.useCallback(
    (Ne) => String(Ne).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((_e) => _e.length ? _e[0].toUpperCase() + _e.slice(1) : _e).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && F !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const {
    effData: R,
    effTargets: Q,
    effBaselines: pe,
    effGhosts: le,
    effChartTypeCore: se,
    effMetricImprovementCore: E,
    effEngineSettings: U,
    effAlwaysShowZeroY: z,
    effAlwaysShowHundredY: X,
    effPercentScale: L,
    effGradientSequences: Y,
    effSequenceTransition: Z,
    effProcessLineWidth: ee,
    effTrendVisualMode: K,
    effShowTrendGatingExplanation: re,
    effEnableNeutralNoJudgement: me,
    effEnableRules: be,
    effShowPartitionMarkers: Ce,
    effShowTrendStartMarkers: we,
    effShowFirstFavourableCrossMarkers: ge,
    effShowTrendBridgeOverlay: Pe,
    effShowSignalsInspector: We,
    effOnSignalFocus: at,
    effShowWarningsPanel: ze,
    effWarningsFilter: Qe,
    effShowIcons: Pt,
    effShowEmbeddedIcon: St,
    effEmbeddedIconVariant: vt,
    effEmbeddedIconRunLength: st,
    effShowFocusIndicator: it,
    effHeight: Jt,
    effClassName: Ur,
    effAriaLabel: Tn,
    effUnit: mr,
    effNarrationContext: Dn,
    effShowZones: Gn,
    effShowPoints: gr,
    effHighlightOutOfControl: In,
    effVisualsScenario: $n,
    effVisualsEngineSettings: xr,
    effSource: ts,
    effEngineAutoRecalc: Mn
  } = Mg({
    data: e,
    targets: p,
    baselines: x,
    ghosts: k,
    settings: $,
    chartType: c,
    metricImprovement: d,
    enableRules: f,
    gradientSequences: v,
    sequenceTransition: M,
    processLineWidth: D,
    showPartitionMarkers: te,
    showWarningsPanel: P,
    warningsFilter: y,
    enableNeutralNoJudgement: N,
    showTrendGatingExplanation: w,
    trendVisualMode: _,
    alwaysShowZeroY: j,
    alwaysShowHundredY: C,
    percentScale: I,
    showTrendStartMarkers: V,
    showFirstFavourableCrossMarkers: B,
    showTrendBridgeOverlay: H,
    showSignalsInspector: O,
    onSignalFocus: ae,
    showIcons: h,
    showEmbeddedIcon: m,
    embeddedIconVariant: b,
    embeddedIconRunLength: g,
    showFocusIndicator: ie,
    ui: ce,
    input: ue,
    engine: J,
    // pass grouped aliases through so normalize can prefer them
    container: ne,
    a11y: de,
    visualsEngine: G,
    meta: fe
  }), Lt = Tn ?? t, yn = Jt ?? n, ut = Ur ?? i, nt = mr ?? l, Ft = Dn ?? T, ns = Gn ?? a, rs = gr ?? o, At = In ?? u, Wr = $n ?? W, wn = xr ?? je, Yn = ts ?? S, _n = q.useMemo(() => R.map((Ne, _e) => ({
    x: Ne.x,
    value: Ne.y,
    target: Q?.[_e] ?? void 0,
    baseline: pe?.[_e] ?? void 0,
    ghost: le?.[_e] ?? void 0
  })), [R, Q, pe, le]), yt = q.useMemo(() => {
    try {
      const Ne = Mn;
      return Ne?.enabled ? Lg(_n, {
        chartType: se,
        metricImprovement: E,
        shiftLength: Ne.shiftLength,
        deltaSigma: Ne.deltaSigma,
        minGap: Ne.minGap
      }) : _n;
    } catch {
      return _n;
    }
  }, [_n, Mn, se, E]), br = q.useMemo(() => {
    try {
      const Ne = U?.minimumPointsPartition ?? U?.minimumPoints, _e = {};
      typeof Ne == "number" && !isNaN(Ne) && (_e.minimumPoints = Ne, yt.filter(
        (Ae) => !Ae.ghost && typeof Ae.value == "number"
      ).length >= Ne && (_e.chartLevelEligibility = !0)), U?.enableFourOfFiveRule != null && (_e.enableFourOfFiveRule = !!U.enableFourOfFiveRule), wn && Object.assign(_e, wn);
      const Ye = (tt) => {
        switch (tt) {
          case _t.XmR:
            return jt.XmR;
          case _t.T:
            return jt.T;
          case _t.G:
            return jt.G;
          default:
            return jt.XmR;
        }
      }, lt = (tt) => {
        switch (tt) {
          case Re.Up:
            return He.Up;
          case Re.Down:
            return He.Down;
          default:
            return He.Neither;
        }
      }, De = {
        chartType: Ye(se),
        metricImprovement: lt(E),
        data: yt,
        settings: Object.keys(_e).length ? _e : void 0
      }, { visuals: Ut } = ag(De, Wr, {
        trendVisualMode: K === Os.Ungated ? pr.Ungated : pr.Gated,
        enableNeutralNoJudgement: me
      });
      return Ut || [];
    } catch {
      return [];
    }
  }, [
    yt,
    se,
    E,
    K,
    me,
    U,
    Wr,
    wn
  ]), dt = q.useMemo(() => {
    try {
      const Ne = U?.minimumPointsPartition ?? U?.minimumPoints, _e = {};
      typeof Ne == "number" && !isNaN(Ne) && (_e.minimumPoints = Ne, yt.filter(
        (Rt) => !Rt.ghost && typeof Rt.value == "number"
      ).length >= Ne && (_e.chartLevelEligibility = !0)), U?.enableFourOfFiveRule != null && (_e.enableFourOfFiveRule = !!U.enableFourOfFiveRule), wn && Object.assign(_e, wn);
      const Ye = (Ae) => {
        switch (Ae) {
          case _t.XmR:
            return jt.XmR;
          case _t.T:
            return jt.T;
          case _t.G:
            return jt.G;
          default:
            return jt.XmR;
        }
      }, lt = (Ae) => {
        switch (Ae) {
          case Re.Up:
            return He.Up;
          case Re.Down:
            return He.Down;
          default:
            return He.Neither;
        }
      }, De = {
        chartType: Ye(se),
        metricImprovement: lt(E),
        data: yt,
        settings: Object.keys(_e).length ? _e : void 0
      }, { rows: Ut } = $g(De), tt = (Ae) => {
        switch (Ae) {
          case Be.ImprovementHigh:
          case Be.ImprovementLow:
            return Ie.Improvement;
          case Be.ConcernHigh:
          case Be.ConcernLow:
            return Ie.Concern;
          case Be.NeitherHigh:
          case Be.NeitherLow:
            return Ie.Neither;
          case Be.CommonCause:
          default:
            return Ie.Neither;
        }
      };
      return Ut.map(
        (Ae, Rt) => ({
          data: {
            value: Ae.value,
            ghost: !!Ae.ghost
          },
          partition: { id: Ae.partitionId },
          limits: {
            mean: Ae.mean,
            ucl: Ae.upperProcessLimit,
            lcl: Ae.lowerProcessLimit,
            oneSigma: { upper: Ae.upperOneSigma, lower: Ae.lowerOneSigma },
            twoSigma: { upper: Ae.upperTwoSigma, lower: Ae.lowerTwoSigma }
          },
          rules: {
            singlePoint: { up: !!Ae.singlePointUp, down: !!Ae.singlePointDown },
            twoOfThree: { up: !!Ae.twoSigmaUp, down: !!Ae.twoSigmaDown },
            fourOfFive: { up: !!Ae.fourOfFiveUp, down: !!Ae.fourOfFiveDown },
            shift: { up: !!Ae.shiftUp, down: !!Ae.shiftDown },
            trend: { up: !!Ae.trendUp, down: !!Ae.trendDown }
          },
          classification: {
            variation: tt(Ae.variationIcon),
            neutralSpecialCauseValue: Ae.variationIcon === Be.NeitherHigh || Ae.variationIcon === Be.NeitherLow ? Ae.specialCauseImprovementValue ?? Ae.specialCauseConcernValue ?? 1 : null,
            assurance: void 0
          },
          target: yt[Rt]?.target ?? null
        })
      );
    } catch {
      return null;
    }
  }, [yt, se, E, U, wn]) || null, Zt = (dt || []).slice().reverse().find((Ne) => Ne.limits.mean != null), he = Zt?.limits.mean ?? null, Te = q.useMemo(() => {
    const Ne = [];
    try {
      const _e = dt, Ye = U?.minimumPoints ?? 13, lt = U?.minimumPointsPartition ?? 12;
      if (_e && _e.length) {
        const De = _e.filter(
          (tt) => !tt.data.ghost && tt.data.value != null
        ).length;
        De < Ye && Ne.push({
          code: va.InsufficientPointsGlobal,
          severity: Gt.Warning,
          category: ba.Data,
          message: "Not enough non-ghost points to compute stable limits/icons.",
          context: { nonGhostCount: De, minimumPoints: Ye }
        });
        const Ut = /* @__PURE__ */ new Map();
        for (const tt of _e) {
          const Ae = tt.partition.id ?? 0, Rt = Ut.get(Ae) || { size: 0, nonGhost: 0 };
          Rt.size += 1, !tt.data.ghost && tt.data.value != null && (Rt.nonGhost += 1), Ut.set(Ae, Rt);
        }
        for (const [tt, Ae] of Ut)
          Ae.nonGhost > 0 && Ae.nonGhost < lt && Ne.push({
            code: va.InsufficientPointsPartition,
            severity: Gt.Warning,
            category: ba.Partition,
            message: "A partition/baseline segment has too few points for recommended stability.",
            context: {
              partitionId: tt,
              nonGhostCount: Ae.nonGhost,
              minimumPointsPartition: lt
            }
          });
      }
    } catch {
    }
    return Ne;
  }, [dt, U?.minimumPoints, U?.minimumPointsPartition]), xe = q.useMemo(() => Te.length ? Qe ? Te.filter((Ne) => !(Qe.severities && Ne.severity && !Qe.severities.includes(Ne.severity) || Qe.categories && Ne.category && !Qe.categories.includes(Ne.category) || Qe.codes && !Qe.codes.includes(Ne.code))) : Te : [], [Te, Qe]), [Fe, et] = q.useState(""), Ve = q.useRef("");
  q.useEffect(() => {
    if (!ze) {
      Ve.current !== "" && (Ve.current = "", et(""));
      return;
    }
    const Ne = xe.length;
    if (!Ne) {
      const De = "Diagnostics: no warnings.";
      De !== Ve.current && (Ve.current = De, et(De));
      return;
    }
    const _e = {
      error: xe.filter(
        (De) => De.severity === Gt.Error
      ).length,
      warning: xe.filter(
        (De) => De.severity === Gt.Warning
      ).length,
      info: xe.filter(
        (De) => De.severity === Gt.Info
      ).length
    }, Ye = [];
    _e.error && Ye.push(
      `${_e.error} error${_e.error === 1 ? "" : "s"}`
    ), _e.warning && Ye.push(
      `${_e.warning} warning${_e.warning === 1 ? "" : "s"}`
    ), _e.info && Ye.push(`${_e.info} info`);
    const lt = `Diagnostics updated: ${Ne} warning${Ne === 1 ? "" : "s"} (${Ye.join(", ")}).`;
    lt !== Ve.current && (Ve.current = lt, et(lt));
  }, [ze, xe]);
  const qe = Zt?.limits.ucl ?? null, Vt = Zt?.limits.lcl ?? null, $t = Zt?.limits.oneSigma.upper ?? null, Sn = Zt?.limits.oneSigma.lower ?? null, Ee = Zt?.limits.twoSigma.upper ?? null, Xe = Zt?.limits.twoSigma.lower ?? null, Et = he != null && $t != null ? Math.abs($t - he) : 0, vr = q.useMemo(
    () => [{ id: "process", data: R, color: "#A6A6A6" }],
    [R]
  ), Ot = q.useMemo(() => {
    if (L) {
      const De = R.map((Ae) => Ae.y), Ut = Math.max(100, ...De), tt = Math.min(0, ...De);
      return [tt < 0 ? tt : 0, Ut > 100 ? Ut : 100];
    }
    const _e = [...R.map((De) => De.y)];
    if ([he, qe, Vt, $t, Sn, Ee, Xe].forEach((De) => {
      De != null && _e.push(De);
    }), Q && Q.forEach((De) => {
      typeof De == "number" && !isNaN(De) && _e.push(De);
    }), !_e.length) return;
    let Ye = Math.min(..._e), lt = Math.max(..._e);
    return z && (Ye = Math.min(0, Ye)), X && (lt = Math.max(100, lt)), [Ye, lt];
  }, [
    R,
    he,
    qe,
    Vt,
    $t,
    Sn,
    Ee,
    Xe,
    Q,
    z,
    X,
    L
  ]), xu = q.useMemo(() => {
    try {
      if (!Ot || Ot.length < 2) return !1;
      const Ne = Math.min(Ot[0], Ot[1]), _e = Math.max(Ot[0], Ot[1]);
      return !(0 >= Ne && 0 <= _e);
    } catch {
      return !1;
    }
  }, [Ot]) ? 128 + 40 : 0, bu = q.useMemo(() => {
    const Ne = (_e) => {
      const Ye = _e.filter(
        (De) => typeof De == "number" && !isNaN(De)
      );
      if (!Ye.length) return null;
      const lt = Ye[0];
      return Ye.every((De) => De === lt) ? lt : null;
    };
    if (dt && dt.length) {
      const _e = Ne(dt.map((Ye) => Ye.target));
      if (_e != null) return _e;
    }
    return Q && Q.length ? Ne(Q) : null;
  }, [dt, Q]), vu = q.useMemo(() => {
    const Ne = R.map((_e) => _e.x);
    return Sc({
      values: R.map((_e) => _e.y),
      dates: Ne,
      providedUnit: nt || Ft?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [R, nt, Ft?.measureUnit]), Gr = nt ?? Ft?.measureUnit ?? vu.unit, yu = q.useMemo(() => Gr ? { ...Ft || {}, measureUnit: Gr } : Ft, [Ft, Gr]), wu = q.useMemo(() => {
    if (!dt) return [];
    const Ne = [];
    for (let _e = 1; _e < dt.length; _e++)
      dt[_e].partition.id !== dt[_e - 1].partition.id && Ne.push(_e);
    return Ne;
  }, [dt]), _u = q.useMemo(() => {
    if (!St || !dt?.length) return null;
    const Ne = dt, _e = U?.minimumPoints ?? 13;
    if (Ne.filter(
      (Mt) => !Mt.data.ghost && Mt.data.value != null
    ).length < _e) return null;
    let lt = -1;
    for (let Mt = Ne.length - 1; Mt >= 0; Mt--) {
      const Qt = Ne[Mt];
      if (Qt && Qt.data.value != null && !Qt.data.ghost) {
        lt = Mt;
        break;
      }
    }
    if (lt === -1) return null;
    const De = Ne[lt], tt = De.classification?.variation, Ae = De.classification?.assurance, Rt = tt === Ie.Neither && !!De.classification?.neutralSpecialCauseValue, Su = Ae === ct.Pass ? En.Pass : Ae === ct.Fail ? En.Fail : En.Uncertain;
    let kt;
    if (tt === Ie.Suppressed) {
      const Mt = !!De.rules.singlePoint.up, Qt = !!De.rules.singlePoint.down;
      E === Re.Up ? Mt ? kt = Me.Higher : Qt && (kt = Me.Lower) : E === Re.Down ? Qt ? kt = Me.Lower : Mt && (kt = Me.Higher) : kt = Me.Higher;
    } else if (tt === Ie.Neither && Rt) {
      const Mt = De.rules.singlePoint.up || De.rules.twoOfThree.up || De.rules.fourOfFive.up || De.rules.shift.up || De.rules.trend.up, Qt = De.rules.singlePoint.down || De.rules.twoOfThree.down || De.rules.fourOfFive.down || De.rules.shift.down || De.rules.trend.down;
      Mt && !Qt ? kt = Me.Higher : Qt && !Mt ? kt = Me.Lower : kt = Me.Higher;
    }
    let yr;
    E === Re.Up ? yr = ot.HigherIsBetter : E === Re.Down ? yr = ot.LowerIsBetter : yr = ot.ContextDependent;
    const qn = 80, Lo = De.rules.singlePoint.up || De.rules.twoOfThree.up || De.rules.fourOfFive.up || De.rules.shift.up || De.rules.trend.up, Fo = De.rules.singlePoint.down || De.rules.twoOfThree.down || De.rules.fourOfFive.down || De.rules.shift.down || De.rules.trend.down;
    let Xn = Be.CommonCause;
    return tt === Ie.Improvement ? Xn = Be.ImprovementHigh : tt === Ie.Concern ? Xn = Be.ConcernHigh : tt === Ie.Neither && (Rt ? kt === Me.Lower || Fo && !Lo ? Xn = Be.NeitherLow : Xn = Be.NeitherHigh : Xn = Be.CommonCause), /* @__PURE__ */ r.jsxs(
      "div",
      {
        style: { display: "flex", gap: 12, marginRight: 16 },
        children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-icon",
              "data-variation": String(tt),
              "data-trend-raw": kt ? String(kt) : "none",
              "data-trend": kt ? String(kt) : "none",
              "data-polarity": String(yr ?? "unknown"),
              style: { width: qn, height: qn },
              children: /* @__PURE__ */ r.jsx(
                $o,
                {
                  dropShadow: !1,
                  data: {
                    variationIcon: Xn,
                    improvementDirection: E,
                    polarity: yr,
                    specialCauseNeutral: Rt,
                    highSideSignal: Lo,
                    lowSideSignal: Fo,
                    ...kt ? { trend: kt } : {}
                  },
                  letterMode: E === Re.Neither ? Er.Direction : Er.Polarity,
                  size: qn,
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
              "data-assurance": String(Ae),
              style: { width: qn, height: qn },
              children: /* @__PURE__ */ r.jsx(
                Mo,
                {
                  status: Su,
                  size: qn,
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
    St,
    dt,
    E,
    U?.minimumPoints,
    vt,
    st
  ]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ut ? `fdp-spc-chart-wrapper ${ut}` : "fdp-spc-chart-wrapper",
      children: [
        St && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__top-row",
            style: {
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 4
            },
            children: _u
          }
        ),
        /* @__PURE__ */ r.jsx(
          Zh,
          {
            height: yn,
            ariaLabel: Lt,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ r.jsx(Qh, { series: vr, yDomain: Ot, yBottomGapPx: xu, children: /* @__PURE__ */ r.jsx(
              Eg,
              {
                series: vr,
                showPoints: rs,
                announceFocus: s,
                limits: { mean: he, ucl: qe, lcl: Vt, sigma: Et, onePos: $t, oneNeg: Sn, twoPos: Ee, twoNeg: Xe },
                showZones: ns,
                highlightOutOfControl: At,
                engineRows: dt,
                uniformTarget: bu,
                visualCategories: br,
                enableRules: be,
                showIcons: Pt,
                narrationContext: yu,
                gradientSequences: Y,
                sequenceTransition: Z,
                processLineWidth: ee,
                effectiveUnit: Gr,
                partitionMarkers: Ce ? wu : [],
                ariaLabel: Lt,
                enableNeutralNoJudgement: me,
                showTrendGatingExplanation: re,
                metricImprovement: E,
                showTrendStartMarkers: we,
                showFirstFavourableCrossMarkers: ge,
                showTrendBridgeOverlay: Pe,
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
        ze && Fe && /* @__PURE__ */ r.jsx(
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
            children: Fe
          }
        ),
        ze && xe.length > 0 && /* @__PURE__ */ r.jsxs(
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
                  rows: xe.map((Ne) => {
                    let _e = "grey";
                    return Ne.severity === Gt.Error ? _e = "red" : Ne.severity === Gt.Warning ? _e = "orange" : Ne.severity === Gt.Info && (_e = "blue"), [
                      {
                        node: /* @__PURE__ */ r.jsx(
                          Je,
                          {
                            color: _e,
                            text: (Ne.severity ? String(Ne.severity) : "Info").replace(
                              /^[a-z]/,
                              (Ye) => Ye.toUpperCase()
                            )
                          }
                        ),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
                      },
                      {
                        node: Ne.category ? /* @__PURE__ */ r.jsx(
                          Je,
                          {
                            color: "purple",
                            text: A(Ne.category)
                          }
                        ) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
                      },
                      {
                        node: /* @__PURE__ */ r.jsx(Je, { color: "grey", text: oe(Ne.code) }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
                      },
                      {
                        node: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                          /* @__PURE__ */ r.jsx("span", { children: Ne.message }),
                          Ne.context && Object.keys(Ne.context).length > 0 && /* @__PURE__ */ r.jsxs(
                            "details",
                            {
                              className: "fdp-spc-chart__warning-context",
                              style: { marginTop: 4 },
                              children: [
                                /* @__PURE__ */ r.jsx("summary", { children: "context" }),
                                /* @__PURE__ */ r.jsx("pre", { children: JSON.stringify(Ne.context, null, 2) })
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
}, Eg = ({
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
  effectiveUnit: m,
  partitionMarkers: b,
  ariaLabel: g,
  metricImprovement: p,
  enableNeutralNoJudgement: x = !0,
  showTrendGatingExplanation: k = !0,
  showTrendStartMarkers: $ = !1,
  showFirstFavourableCrossMarkers: T = !1,
  showTrendBridgeOverlay: v = !1,
  showSignalsInspector: M = !1,
  onSignalFocus: D,
  visualCategories: P,
  uniformTarget: y,
  showFocusIndicator: N = !1
}) => {
  const w = Vn(), _ = jn();
  if (!w) return null;
  const { xScale: F, yScale: S } = w, j = q.useRef(
    "spc-seq-" + ++Fg
  ), C = vn(), I = e[0]?.data || [], te = q.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const A = /* @__PURE__ */ new Set();
    return I.forEach((R, Q) => {
      typeof a.ucl == "number" && R.y > a.ucl && A.add(Q), typeof a.lcl == "number" && R.y < a.lcl && A.add(Q);
    }), A;
  }, [a.ucl, a.lcl, I]), V = q.useMemo(() => {
    if (!i || !i.length) return null;
    const A = [];
    return i.forEach((R, Q) => {
      const pe = R.classification.variation === Ie.Concern || R.classification.variation === Ie.Improvement || !!R.classification.neutralSpecialCauseValue, le = !!R.rules.singlePoint.up || !!R.rules.twoOfThree.up || !!R.rules.fourOfFive.up || !!R.rules.shift.up || !!R.rules.trend.up, se = !!R.rules.singlePoint.down || !!R.rules.twoOfThree.down || !!R.rules.fourOfFive.down || !!R.rules.shift.down || !!R.rules.trend.down;
      A[Q] = {
        variation: R.classification.variation,
        assurance: R.classification.assurance,
        special: pe,
        concern: R.classification.variation === Ie.Concern,
        improvement: R.classification.variation === Ie.Improvement,
        trendUp: !!R.rules.trend.up,
        trendDown: !!R.rules.trend.down,
        upAny: le,
        downAny: se,
        neutralSpecial: !!R.classification.neutralSpecialCauseValue,
        shiftUp: !!R.rules.shift.up,
        shiftDown: !!R.rules.shift.down,
        twoOfThreeUp: !!R.rules.twoOfThree.up,
        twoOfThreeDown: !!R.rules.twoOfThree.down,
        fourOfFiveUp: !!R.rules.fourOfFive.up,
        fourOfFiveDown: !!R.rules.fourOfFive.down,
        partitionId: R.partition.id ?? null
      };
    }), A;
  }, [i]), B = q.useMemo(() => (P || []).map((A) => A === mt.Improvement ? ft.Improvement : A === mt.Concern ? ft.Concern : A === mt.NoJudgement ? ft.NoJudgement : ft.Common), [P]), H = q.useMemo(() => !d || !B.length ? [] : Dg(B, !0), [d, B, g]), O = q.useMemo(
    () => I.map((A) => F(A.x instanceof Date ? A.x : new Date(A.x))),
    [I, F]
  ), ae = F.range()[1], W = q.useMemo(() => {
    if (!i || !i.length)
      return null;
    let A = Number.POSITIVE_INFINITY, R = Number.POSITIVE_INFINITY;
    if (i.forEach((z, X) => {
      z.rules.trend.up && (A = Math.min(A, X)), z.rules.trend.down && (R = Math.min(R, X));
    }), !Number.isFinite(A) && !Number.isFinite(R))
      return null;
    const Q = A <= R, pe = Q ? Yt.Up : Yt.Down, le = Q ? A : R, se = (z) => p == null || p === Re.Neither || z == null || typeof z.data.value != "number" || typeof z.limits.mean != "number" ? !1 : pe === Yt.Up ? p === Re.Up ? z.data.value > z.limits.mean : z.data.value < z.limits.mean : p === Re.Down ? z.data.value < z.limits.mean : z.data.value > z.limits.mean;
    let E = null;
    for (let z = le; z < i.length; z++) {
      const X = i[z];
      if (!(Q ? !!X.rules.trend.up : !!X.rules.trend.down)) break;
      if (se(X)) {
        E = z;
        break;
      }
    }
    let U = !1;
    if (E != null) {
      let z = 0;
      for (let X = E; X < i.length; X++) {
        const L = i[X];
        if (!(Q ? !!L.rules.trend.up : !!L.rules.trend.down)) break;
        se(L) && z++;
      }
      U = z >= 2;
    }
    return {
      direction: pe,
      detectedAt: le,
      firstFavourableCrossAt: E,
      persistedAcrossMean: U
    };
  }, [i, p]), ie = q.useMemo(() => {
    if (!i || !i.length) return null;
    const A = (R) => {
      const Q = [];
      let pe = null, le = null;
      for (let se = 0; se < i.length; se++) {
        const E = i[se], U = R(E), z = typeof U == "number" && !isNaN(U) ? U : null;
        if (z == null) {
          pe !== null && le != null && (Q.push({
            x1: O[pe],
            x2: O[se - 1],
            y: S(le)
          }), pe = null, le = null);
          continue;
        }
        if (pe === null) {
          pe = se, le = z;
          continue;
        }
        le != null && Math.abs(z - le) <= 1e-9 || (le != null && Q.push({
          x1: O[pe],
          x2: O[se - 1],
          y: S(le)
        }), pe = se, le = z);
      }
      return pe !== null && le != null && Q.push({
        x1: O[pe],
        x2: O[i.length - 1],
        y: S(le)
      }), Q;
    };
    return {
      mean: A((R) => R.limits.mean ?? null),
      ucl: A((R) => R.limits.ucl ?? null),
      lcl: A((R) => R.limits.lcl ?? null),
      onePos: A((R) => R.limits.oneSigma.upper ?? null),
      oneNeg: A((R) => R.limits.oneSigma.lower ?? null),
      twoPos: A((R) => R.limits.twoSigma.upper ?? null),
      twoNeg: A((R) => R.limits.twoSigma.lower ?? null)
    };
  }, [i, O, S]), je = q.useMemo(() => H.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
    /* @__PURE__ */ r.jsxs(
      "linearGradient",
      {
        id: `${j.current}-grad-common`,
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
    H.map((A, R) => {
      const Q = `${j.current}-grad-${R}`;
      let pe, le = 0.28, se = 0.12, E = 0.045;
      switch (A.category) {
        case ft.Concern:
          pe = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", le = 0.28, se = 0.12, E = 0.045;
          break;
        case ft.Improvement:
          pe = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", le = 0.26, se = 0.11, E = 0.045;
          break;
        case ft.NoJudgement:
          pe = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", le = 0.26, se = 0.11, E = 0.045;
          break;
        default:
          pe = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: Q, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: pe, stopOpacity: le }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: pe, stopOpacity: se }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: pe, stopOpacity: E })
      ] }, Q);
    })
  ] }) : null, [H]), ce = q.useMemo(() => {
    if (!H.length) return null;
    const [A] = S.domain(), R = S(A), Q = H.map((pe, le) => {
      const { start: se, end: E, category: U } = pe;
      if (se < 0 || E >= O.length || se > E)
        return null;
      const z = O[se], X = O[E];
      let L = "";
      if (U === ft.Common) {
        const Y = le > 0 ? H[le - 1] : null, Z = le < H.length - 1 ? H[le + 1] : null, ee = Y ? O[Y.end] : 0, K = Y ? S(I[Y.end].y) : R, re = Z ? O[Z.start] : ae, me = Z ? S(I[Z.start].y) : R;
        L = `M ${ee} ${R}`, L += ` L ${ee} ${K}`;
        for (let be = se; be <= E; be++)
          L += ` L ${O[be]} ${S(I[be].y)}`;
        L += ` L ${re} ${me}`, L += ` L ${re} ${R} Z`;
      } else {
        const Y = le > 0 ? H[le - 1] : null, Z = le < H.length - 1 ? H[le + 1] : null, ee = Y && Y.category !== ft.Common, K = Z && Z.category !== ft.Common, re = S(I[se].y), me = S(I[E].y);
        let be = z, Ce = X;
        if (ee) {
          const we = O[Y.end], ge = S(I[Y.end].y), Pe = I[se].y - I[Y.end].y;
          f === ar.Slope && Pe > 0 ? (L = `M ${we} ${ge} L ${z} ${re}`, be = we) : (L = `M ${z} ${R} L ${z} ${re}`, be = z);
        } else
          L = `M ${z} ${R} L ${z} ${re}`;
        for (let we = se + 1; we <= E; we++)
          L += ` L ${O[we]} ${S(I[we].y)}`;
        if (L += ` L ${X} ${me}`, K) {
          const we = O[Z.start], ge = S(I[Z.start].y), Pe = I[Z.start].y - I[E].y;
          (f === ar.Slope && Pe <= 0 || f === ar.Extend) && (L += ` L ${we} ${ge}`, Ce = we);
        }
        if (L += ` L ${Ce} ${R}`, L += ` L ${be} ${R} Z`, f === ar.Neutral && ee) {
          const we = O[Y.end], ge = S(I[Y.end].y), Pe = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${we} ${R} L ${we} ${ge} L ${z} ${re} L ${z} ${R} Z`,
              fill: `url(#${j.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${le}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            Pe,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: L,
                fill: `url(#${j.current}-grad-${le})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${le}`
            )
          ] }, `seq-group-${le}`);
        }
      }
      return /* @__PURE__ */ r.jsx(
        "path",
        {
          d: L,
          fill: `url(#${j.current}-grad-${le})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${le}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: Q });
  }, [H, O, ae, S, I, f]), ue = q.useMemo(() => {
    if (!c?.timeframe && I.length >= 2) {
      const A = I.map((E) => E.x instanceof Date ? E.x : new Date(E.x)), R = new Date(Math.min(...A.map((E) => E.getTime()))), Q = new Date(Math.max(...A.map((E) => E.getTime()))), pe = Math.round((Q.getTime() - R.getTime()) / 864e5) || 0;
      if (pe < 14)
        return `The chart shows a timeframe of ${pe + 1} days`;
      const le = Math.round(pe / 7);
      return le < 20 ? `The chart shows a timeframe of ${le} weeks` : `The chart shows a timeframe of ${(Q.getFullYear() - R.getFullYear()) * 12 + (Q.getMonth() - R.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, I]), J = (A) => {
    const R = A % 10, Q = A % 100;
    return R === 1 && Q !== 11 ? `${A}st` : R === 2 && Q !== 12 ? `${A}nd` : R === 3 && Q !== 13 ? `${A}rd` : `${A}th`;
  }, ne = (A) => `${J(A.getDate())} ${A.toLocaleString("en-GB", { month: "long" })}, ${A.getFullYear()}`, de = (A) => ({
    specialCauseSinglePointUp: !!A?.rules.singlePoint.up,
    specialCauseSinglePointDown: !!A?.rules.singlePoint.down,
    specialCauseTwoOfThreeUp: !!A?.rules.twoOfThree.up,
    specialCauseTwoOfThreeDown: !!A?.rules.twoOfThree.down,
    specialCauseFourOfFiveUp: !!A?.rules.fourOfFive.up,
    specialCauseFourOfFiveDown: !!A?.rules.fourOfFive.down,
    specialCauseShiftUp: !!A?.rules.shift.up,
    specialCauseShiftDown: !!A?.rules.shift.down,
    specialCauseTrendUp: !!A?.rules.trend.up,
    specialCauseTrendDown: !!A?.rules.trend.down
  }), G = q.useCallback(
    ({
      index: A,
      x: R,
      y: Q
    }) => {
      const pe = i?.[A], le = R instanceof Date ? R : new Date(R), se = ne(le), E = c?.measureUnit ? ` ${c.measureUnit}` : "", U = c?.measureName ? ` ${c.measureName}` : "";
      if (!pe)
        return `General summary is: ${ue ? ue + ". " : ""}Point ${A + 1}, ${se}, ${Q}${E}${U}`;
      const z = Qa(pe.classification?.variation) || "Variation", X = Za(de(pe)), L = X.length ? ` Rules: ${[...new Set(X.map((Z) => lr[Z].narration))].join("; ")}.` : " No special cause rules.", Y = [];
      return c?.measureName && Y.push(`Measure: ${c.measureName}.`), c?.datasetContext && Y.push(`${c.datasetContext}.`), c?.organisation && Y.push(`Organisation: ${c.organisation}.`), c?.additionalNote && Y.push(c.additionalNote), [
        "General summary is:",
        ...Y,
        `Point ${A + 1} recorded on `,
        se + ",",
        `with a value of ${Q} ${E}${U}`,
        z + ".",
        L
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, ue]
  ), fe = q.useCallback(
    (A, R) => i?.[A] ? G({
      index: A,
      seriesId: "process",
      x: R.x instanceof Date ? R.x : new Date(R.x),
      y: R.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, G]
  ), oe = q.useMemo(() => {
    try {
      const A = typeof S?.domain == "function" ? S.domain() : void 0;
      if (!A || !Array.isArray(A) || A.length < 2) return !1;
      const R = Math.min(A[0], A[1]), Q = Math.max(A[0], A[1]);
      return !(0 >= R && 0 <= Q);
    } catch {
      return !1;
    }
  }, [S]);
  return /* @__PURE__ */ r.jsx(Fm, { children: /* @__PURE__ */ r.jsxs(
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
            width: w.xScale.range()[1] + 56 + 16,
            height: w.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(Pi, { type: "x" }),
              /* @__PURE__ */ r.jsx(Pi, { type: "y", showZeroAxisBreak: oe, zeroAxisBreakGapPx: 32, zeroAxisBreakTickBufferPx: 40 }),
              /* @__PURE__ */ r.jsx(em, { axis: "y", showZeroAxisBreak: oe, zeroAxisBreakGapPx: 32, zeroAxisBreakTickBufferPx: 40 }),
              je,
              ce,
              b.map((A, R) => {
                const Q = I[A];
                if (!Q) return null;
                const pe = F(Q.x instanceof Date ? Q.x : new Date(Q.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: pe,
                    x2: pe,
                    y1: 0,
                    y2: S.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${R}`
                );
              }),
              ie?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                ie.mean.map((A, R) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__cl",
                    x1: A.x1,
                    x2: A.x2,
                    y1: A.y,
                    y2: A.y
                  },
                  `mean-${R}`
                )),
                ie.mean.map((A, R) => {
                  if (R === ie.mean.length - 1) return null;
                  const Q = ie.mean[R + 1];
                  if (!Q || A.y === Q.y) return null;
                  const le = Math.max(4, Q.x1 - A.x2 || 0) * 0.5, se = `M ${A.x2},${A.y} C ${A.x2 + le},${A.y} ${Q.x1 - le},${Q.y} ${Q.x1},${Q.y}`;
                  return /* @__PURE__ */ r.jsx(
                    "path",
                    {
                      className: "fdp-spc__cl fdp-spc__cl-join",
                      d: se,
                      fill: "none"
                    },
                    `mean-join-${R}`
                  );
                })
              ] }) : null,
              y != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ r.jsx(r.Fragment, {}),
              ie?.ucl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--ucl",
                  children: [
                    ie.ucl.map((A, R) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--ucl",
                        x1: A.x1,
                        x2: A.x2,
                        y1: A.y,
                        y2: A.y,
                        strokeWidth: 2
                      },
                      `ucl-${R}`
                    )),
                    ie.ucl.map((A, R) => {
                      if (R === ie.ucl.length - 1) return null;
                      const Q = ie.ucl[R + 1];
                      if (!Q || A.y === Q.y) return null;
                      const le = Math.max(4, Q.x1 - A.x2 || 0) * 0.5, se = `M ${A.x2},${A.y} C ${A.x2 + le},${A.y} ${Q.x1 - le},${Q.y} ${Q.x1},${Q.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join",
                          d: se,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `ucl-join-${R}`
                      );
                    })
                  ]
                }
              ) : null,
              ie?.lcl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--lcl",
                  children: [
                    ie.lcl.map((A, R) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--lcl",
                        x1: A.x1,
                        x2: A.x2,
                        y1: A.y,
                        y2: A.y,
                        strokeWidth: 2
                      },
                      `lcl-${R}`
                    )),
                    ie.lcl.map((A, R) => {
                      if (R === ie.lcl.length - 1) return null;
                      const Q = ie.lcl[R + 1];
                      if (!Q || A.y === Q.y) return null;
                      const le = Math.max(4, Q.x1 - A.x2 || 0) * 0.5, se = `M ${A.x2},${A.y} C ${A.x2 + le},${A.y} ${Q.x1 - le},${Q.y} ${Q.x1},${Q.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join",
                          d: se,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `lcl-join-${R}`
                      );
                    })
                  ]
                }
              ) : null,
              y != null && /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: F.range()[1],
                    y1: S(y),
                    y2: S(y),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: F.range()[0] - 7,
                    y: S(y) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      y,
                      " ",
                      m || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              o && ie && ie.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                ie.onePos.map((A, R) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: A.x1,
                    x2: A.x2,
                    y1: A.y,
                    y2: A.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${R}`
                )),
                ie.oneNeg.map((A, R) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: A.x1,
                    x2: A.x2,
                    y1: A.y,
                    y2: A.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${R}`
                )),
                ie.twoPos.map((A, R) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: A.x1,
                    x2: A.x2,
                    y1: A.y,
                    y2: A.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${R}`
                )),
                ie.twoNeg.map((A, R) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: A.x1,
                    x2: A.x2,
                    y1: A.y,
                    y2: A.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${R}`
                ))
              ] }),
              W && ($ || T || v) && (() => {
                const A = W.detectedAt, R = W.firstFavourableCrossAt, Q = I[A] ? F(
                  I[A].x instanceof Date ? I[A].x : new Date(I[A].x)
                ) : null, pe = I[A] ? S(I[A].y) : null, le = R != null && I[R] ? F(
                  I[R].x instanceof Date ? I[R].x : new Date(I[R].x)
                ) : null, se = R != null && I[R] ? S(I[R].y) : null;
                return /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  v && Q != null && pe != null && le != null && se != null && /* @__PURE__ */ r.jsx(
                    "line",
                    {
                      x1: Q,
                      y1: pe,
                      x2: le,
                      y2: se,
                      stroke: "#888",
                      strokeDasharray: "4 4",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend bridge: start to first favourable-side point" })
                    }
                  ),
                  $ && Q != null && pe != null && /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: Q,
                      cy: pe,
                      r: 6,
                      fill: "white",
                      stroke: "#555",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend start (run reached N)" })
                    }
                  ),
                  T && le != null && se != null && /* @__PURE__ */ r.jsx("circle", { cx: le, cy: se, r: 5, fill: "#555", children: /* @__PURE__ */ r.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ r.jsx(
                Am,
                {
                  series: e[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (A) => A.x instanceof Date ? A.x : new Date(A.x),
                  smooth: !1,
                  strokeWidth: h
                }
              ),
              t && I.map((A, R) => {
                const Q = F(A.x instanceof Date ? A.x : new Date(A.x)), pe = S(A.y), le = te.has(R), se = V?.[R], E = B[R], U = E === ft.Improvement, z = E === ft.Concern, X = E === ft.NoJudgement, L = [
                  "fdp-spc__point",
                  le && s ? "fdp-spc__point--ooc" : null,
                  l && z ? "fdp-spc__point--sc-concern" : null,
                  l && U ? "fdp-spc__point--sc-improvement" : null,
                  // Neutral special-cause (no-judgement) from category, when enabled
                  l && x && X ? "fdp-spc__point--sc-no-judgement" : null,
                  se?.assurance === ct.Pass ? "fdp-spc__point--assurance-pass" : null,
                  se?.assurance === ct.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), Y = C?.focused?.index === R;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: Q,
                    cy: pe,
                    r: 5,
                    className: L,
                    "data-variation": se?.variation,
                    "data-assurance": se?.assurance,
                    "aria-label": g,
                    ...Y ? { "aria-describedby": `spc-tooltip-${R}` } : {}
                  },
                  R
                );
              }),
              N && M && C?.focused && (() => {
                const A = C.focused, R = typeof A.index == "number" ? A.index : -1;
                if (R < 0 || !I[R]) return null;
                const Q = F(
                  I[R].x instanceof Date ? I[R].x : new Date(I[R].x)
                ), pe = S(I[R].y), le = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
                return /* @__PURE__ */ r.jsxs("g", { className: "fdp-spc__focus-indicator", "aria-hidden": "true", children: [
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: Q,
                      cy: pe,
                      r: 7,
                      fill: "none",
                      stroke: le,
                      strokeWidth: 3
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: Q,
                      cy: pe,
                      r: 5,
                      fill: "#000",
                      stroke: le,
                      strokeWidth: 1.5
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: Q,
                      cy: pe,
                      r: 2.5,
                      fill: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
                      stroke: "#fff",
                      strokeWidth: 0.5
                    }
                  )
                ] });
              })(),
              u && l && V && I.map((A, R) => {
                const Q = V[R];
                if (!Q || !(Q.concern || Q.improvement)) return null;
                const pe = F(A.x instanceof Date ? A.x : new Date(A.x)), le = S(A.y);
                let se = le - 10;
                const E = 12, U = S.range()[0] - 4;
                se < E && (se = Math.min(le + 16, U));
                const z = F.range()[1], X = Math.min(Math.max(pe, 0), z - 0);
                return /* @__PURE__ */ r.jsx(
                  "text",
                  {
                    x: X,
                    y: se,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${Q.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: Q.concern ? "!" : "★"
                  },
                  `icon-${R}`
                );
              }),
              _ && /* @__PURE__ */ r.jsx(
                Rg,
                {
                  width: F.range()[1],
                  height: S.range()[0]
                }
              ),
              !M && /* @__PURE__ */ r.jsx(
                kc,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: fe,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (A) => ne(A),
                  enableNeutralNoJudgement: x,
                  showTrendGatingExplanation: k
                }
              )
            ] })
          }
        ),
        M && /* @__PURE__ */ r.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ r.jsx(
          Ig,
          {
            engineRows: i,
            measureName: c?.measureName,
            measureUnit: m || c?.measureUnit,
            onSignalFocus: D
          }
        ) }),
        n && /* @__PURE__ */ r.jsx(
          Em,
          {
            format: (A) => G({ ...A, x: A.x instanceof Date ? A.x : new Date(A.x) })
          }
        )
      ]
    }
  ) });
}, Rg = ({
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
}, Bg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: En,
  Direction: Me,
  MetricPolarity: ot,
  SPCAssuranceIcon: Mo,
  SPCVariationIcon: $o,
  VariationJudgement: Tt,
  VariationState: ke,
  getVariationColour: dc,
  getVariationTrend: jo
}, Symbol.toStringTag, { value: "Module" })), hy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: ct,
  BaselineSuggestionReason: Bt,
  ChartType: jt,
  Icons: Bg,
  ImprovementDirection: He,
  PARITY_V26: mc,
  RULE_METADATA: oc,
  SPCChart: Ag,
  SPCTooltipOverlay: kc,
  SpcEmbeddedIconVariant: Nn,
  SpcVisualCategory: mt,
  SpcWarningCategory: ba,
  SpcWarningCode: va,
  SpcWarningSeverity: Gt,
  VARIATION_COLOR_TOKENS: zt,
  VariationIcon: Be,
  buildSpc: _c,
  buildSpcV26a: Do,
  buildSpcV26aWithVisuals: Io,
  computeSpcVisualCategories: To,
  extractRuleIds: Za,
  getVariationColorHex: Wm,
  getVariationColorToken: uc,
  normaliseSpcSettings: wc,
  normaliseSpcSettingsV2: pc,
  ruleGlossary: lr,
  variationLabel: Qa,
  withParityV26: sg
}, Symbol.toStringTag, { value: "Module" })), Hg = "150ms", Og = "300ms", Ug = "500ms", Wg = "cubic-bezier(0.4, 0, 1, 1)", zg = "cubic-bezier(0, 0, 0.2, 1)", Vg = "cubic-bezier(0.4, 0, 0.2, 1)", Gg = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Yg = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", qg = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Xg = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Kg = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Jg = "1px", Zg = "2px", Qg = "4px", e0 = "4px", t0 = "4px", n0 = "2px", r0 = "1px", a0 = "0px", s0 = "4px", o0 = "8px", i0 = "12px", Cc = "#d8dde0", Nc = "#4c6272", jc = "#d8dde0", Tc = "#aeb7bd", Dc = "#d5281b", Ic = "#005eb8", $c = "#ffffff", Mc = "#212b32", Pc = "#007f3b", Lc = "#330072", Fc = "#7c2855", Ac = "#d5281b", Ec = "#ffeb3b", Rc = "#fff9c4", Bc = "#ffb81c", Hc = "#ed8b00", Oc = "#00a499", Uc = "#ae2573", Wc = "#4c6272", zc = "#768692", Vc = "#aeb7bd", Gc = "#d8dde0", Yc = "#f0f4f5", l0 = "#212b32", c0 = "#4c6272", u0 = "#ffffff", d0 = "#212b32", f0 = "#005eb8", p0 = "#7c2855", h0 = "#003087", m0 = "#330072", g0 = "#ffeb3b", x0 = "#212b32", b0 = "#d8dde0", v0 = "#ffffff33", y0 = "#d5281b", w0 = "#4c6272", _0 = "#ffffff", S0 = "#007f3b", k0 = "#ffffff", C0 = "#006530", N0 = "#004021", j0 = "#004021", T0 = "#00000000", D0 = "#ffffff", I0 = "#005eb8", $0 = "#005eb8", M0 = "#d9e5f2", P0 = "#c7daf0", L0 = "#005eb8", F0 = "#ffffff", A0 = "#212b32", E0 = "#d9dde0", R0 = "#b3bcc2", B0 = "#b3bcc2", H0 = "#d5281b", O0 = "#aa2016", U0 = "#6a140e", W0 = "#6a140e", z0 = "#005eb8", V0 = "#004b93", G0 = "#002f5c", Y0 = "#002f5c", q0 = "8px", X0 = "16px", K0 = "12px", J0 = "16px", Z0 = "4px", Q0 = "40px", ex = "4px", tx = "40px", nx = "12px", rx = "16px", ax = "32px", sx = "16px", ox = "20px", ix = "28px", lx = "9px", cx = "2px", ux = "16px", dx = "24px", fx = "8px", px = "24px", hx = "16px", mx = "4px", gx = "4px", xx = "4px", bx = "8px", vx = "4px", yx = "16px", wx = "#007f3b", _x = "#006530", Sx = "#004021", kx = "#d8dde0", Cx = "#ffffff", Nx = "#768692", jx = "#00000000", Tx = "#ffeb3b", Dx = "#00000000", Ix = "#ffffff", $x = "#d9e5f2", Mx = "#c7daf0", Px = "#005eb8", Lx = "#005eb8", qc = "8px", Xc = "16px", Kc = "12px", Jc = "16px", Fx = "2px", Ax = "4px", Ex = "4px", Rx = "600", Bx = "#ffffff", Hx = "#d8dde0", Ox = "#aeb7bd", Ux = "#f0f4f5", Wx = "#212b32", zx = "#212b32", Vx = "#005eb8", Zc = "16px", Qc = "32px", eu = "16px", Gx = "1px", Yx = "4px", qx = "none", Xx = "0 2px 4px rgba(0, 0, 0, 0.1)", Kx = "#ffffff", Jx = "#ffffff", Zx = "#d8dde0", Qx = "#ffffff", eb = "#4c6272", tb = "#ffeb3b", nb = "#d5281b", rb = "#aeb7bd", ab = "#212b32", sb = "#4c6272", ob = "#768692", ib = "#212b32", lb = "#ffffff", cb = "600", ub = "#d5281b", db = "600", fb = "#4c6272", tu = "4px", nu = "40px", ru = "40px", au = "12px", pb = "2px", hb = "4px", mb = "0px", gb = "16px", xb = "18px", bb = "24px", vb = "32px", yb = "34px", wb = "32px", _b = "40px", Sb = "48px", kb = "5.4ex", Cb = "7.2ex", Nb = "9ex", jb = "10.8ex", Tb = "20ex", Db = "38ex", Ib = "56ex", $b = "44px", Mb = "40px", Pb = "1020px", Lb = "100%", Fb = "50%", Ab = "33.333%", Eb = "25%", Rb = "20%", Bb = "320px", Hb = "641px", Ob = "1025px", Ub = "1280px", Wb = "960px", zb = "32px", Vb = "16px", Gb = "#d5281b", Yb = "#d5281b", qb = "#ffffff", Xb = "#007f3b", Kb = "#007f3b", Jb = "#ffffff", Zb = "#ffeb3b", Qb = "#ffeb3b", ev = "#212b32", tv = "#005eb8", nv = "#005eb8", rv = "#ffffff", av = "#d8dde0", sv = "#aeb7bd", ov = "#768692", iv = "0 4px 0 #004021", lv = "0 4px 0 #005eb8", cv = "0 4px 0 #6a140e", uv = "0 4px 0 #ffeb3b", dv = "none", fv = "0 2px 4px rgba(0, 0, 0, 0.1)", pv = "4px", hv = "0px", mv = "solid", gv = "0 0 0 3px #ffeb3b", xv = "0 0 0 3px #ffeb3b", bv = "none", vv = "0 1px 3px rgba(0, 0, 0, 0.12)", yv = "0 2px 6px rgba(0, 0, 0, 0.16)", wv = "0 4px 12px rgba(0, 0, 0, 0.20)", su = "0", ou = "4px", iu = "8px", lu = "16px", cu = "24px", uu = "32px", du = "40px", fu = "48px", pu = "56px", hu = "64px", Us = "0", Ws = "0", zs = "4px", Vs = "4px", Gs = "8px", Ys = "8px", qs = "8px", Xs = "16px", Ks = "16px", Js = "24px", Zs = "24px", Qs = "32px", eo = "32px", to = "40px", no = "40px", ro = "48px", ao = "48px", so = "56px", oo = "56px", io = "64px", ya = "Frutiger W01", wa = "Arial, Helvetica, sans-serif", _a = "sans-serif", Sa = "400", ka = "600", Ca = "400", Na = "12px", ja = "14px", Ta = "12pt", Da = "14px", Ia = "16px", $a = "12pt", Ma = "16px", Pa = "19px", La = "13pt", Fa = "19px", Aa = "22px", Ea = "15pt", Ra = "22px", Ba = "26px", Ha = "17pt", Oa = "27px", Ua = "36px", Wa = "20pt", za = "33px", Va = "48px", Ga = "24pt", lo = "16px", co = "24px", nn = {
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
}, _v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Hg,
  AnimationDurationNormal: Og,
  AnimationDurationSlow: Ug,
  AnimationEasingBounce: Gg,
  AnimationEasingEaseIn: Wg,
  AnimationEasingEaseInOut: Vg,
  AnimationEasingEaseOut: zg,
  BorderColorCard: jc,
  BorderColorCardHover: Tc,
  BorderColorDefault: Cc,
  BorderColorError: Dc,
  BorderColorForm: Nc,
  BorderRadiusLarge: i0,
  BorderRadiusMedium: o0,
  BorderRadiusNone: a0,
  BorderRadiusSmall: s0,
  BorderWidthCardBottom: e0,
  BorderWidthDefault: Jg,
  BorderWidthFormElement: Zg,
  BorderWidthFormElementError: Qg,
  BorderWidthPanel: t0,
  BorderWidthTableCell: r0,
  BorderWidthTableHeader: n0,
  BreakpointDesktop: Ob,
  BreakpointLargeDesktop: Ub,
  BreakpointMobile: Bb,
  BreakpointTablet: Hb,
  ButtonBorderRadius: Ax,
  ButtonBorderWidth: Fx,
  ButtonPrimaryBackgroundActive: Sx,
  ButtonPrimaryBackgroundDefault: wx,
  ButtonPrimaryBackgroundDisabled: kx,
  ButtonPrimaryBackgroundHover: _x,
  ButtonPrimaryBorderDefault: jx,
  ButtonPrimaryBorderFocus: Tx,
  ButtonPrimaryTextDefault: Cx,
  ButtonPrimaryTextDisabled: Nx,
  ButtonSecondaryBackgroundActive: Mx,
  ButtonSecondaryBackgroundDefault: Dx,
  ButtonSecondaryBackgroundHover: $x,
  ButtonSecondaryBackgroundSolid: Ix,
  ButtonSecondaryBorderDefault: Lx,
  ButtonSecondaryTextDefault: Px,
  ButtonShadowSize: Ex,
  ButtonSpacingPaddingHorizontalDesktop: Jc,
  ButtonSpacingPaddingHorizontalMobile: Xc,
  ButtonSpacingPaddingVerticalDesktop: Kc,
  ButtonSpacingPaddingVerticalMobile: qc,
  ButtonTypographyWeight: Rx,
  CardBackgroundDefault: Bx,
  CardBorderBottom: Ux,
  CardBorderDefault: Hx,
  CardBorderHover: Ox,
  CardBorderWidthBottom: Yx,
  CardBorderWidthDefault: Gx,
  CardShadowDefault: qx,
  CardShadowHover: Xx,
  CardSpacingHeadingMargin: eu,
  CardSpacingPaddingDesktop: Qc,
  CardSpacingPaddingMobile: Zc,
  CardTextDescription: zx,
  CardTextHeading: Wx,
  CardTextLink: Vx,
  ColorBorderDefault: b0,
  ColorBorderSecondary: v0,
  ColorButtonLoginActive: G0,
  ColorButtonLoginBackground: z0,
  ColorButtonLoginHover: V0,
  ColorButtonLoginShadow: Y0,
  ColorButtonPrimaryActive: N0,
  ColorButtonPrimaryBackground: S0,
  ColorButtonPrimaryHover: C0,
  ColorButtonPrimaryShadow: j0,
  ColorButtonPrimaryText: k0,
  ColorButtonReverseActive: R0,
  ColorButtonReverseBackground: F0,
  ColorButtonReverseHover: E0,
  ColorButtonReverseShadow: B0,
  ColorButtonReverseText: A0,
  ColorButtonSecondaryActive: P0,
  ColorButtonSecondaryBackground: T0,
  ColorButtonSecondaryBackgroundSolid: D0,
  ColorButtonSecondaryBorder: I0,
  ColorButtonSecondaryHover: M0,
  ColorButtonSecondaryShadow: L0,
  ColorButtonSecondaryText: $0,
  ColorButtonWarningActive: U0,
  ColorButtonWarningBackground: H0,
  ColorButtonWarningHover: O0,
  ColorButtonWarningShadow: W0,
  ColorError: y0,
  ColorFocusBackground: g0,
  ColorFocusText: x0,
  ColorFormBackground: _0,
  ColorFormBorder: w0,
  ColorGrey1: Wc,
  ColorGrey2: zc,
  ColorGrey3: Vc,
  ColorGrey4: Gc,
  ColorGrey5: Yc,
  ColorLinkActive: h0,
  ColorLinkDefault: f0,
  ColorLinkHover: p0,
  ColorLinkVisited: m0,
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
  ColorTextPrimary: l0,
  ColorTextPrint: d0,
  ColorTextReverse: u0,
  ColorTextSecondary: c0,
  ComponentBlur: gx,
  ComponentBreadcrumbChevronMarginLeft: lx,
  ComponentBreadcrumbChevronMarginRight: cx,
  ComponentBreadcrumbPaddingTopDesktop: dx,
  ComponentBreadcrumbPaddingTopMobile: ux,
  ComponentButtonPaddingDesktopHorizontal: J0,
  ComponentButtonPaddingDesktopVertical: K0,
  ComponentButtonPaddingMobileHorizontal: X0,
  ComponentButtonPaddingMobileVertical: q0,
  ComponentButtonShadowSize: Z0,
  ComponentCardHeadingMargin: sx,
  ComponentCardPaddingDesktop: ax,
  ComponentCardPaddingMobile: rx,
  ComponentDetails: bx,
  ComponentExpander: vx,
  ComponentFormCheckboxLabelPadding: nx,
  ComponentFormCheckboxSize: tx,
  ComponentFormInputMinHeight: Q0,
  ComponentFormInputPadding: ex,
  ComponentLink: xx,
  ComponentPagination: yx,
  ComponentPanelPaddingDesktop: ix,
  ComponentPanelPaddingMobile: ox,
  ComponentSpread: mx,
  ComponentSummaryListCellPaddingHorizontal: px,
  ComponentSummaryListCellPaddingVertical: fx,
  ComponentSummaryListRowMargin: hx,
  ElevationHigh: wv,
  ElevationLow: vv,
  ElevationMedium: yv,
  ElevationNone: bv,
  FocusOutlineOffset: hv,
  FocusOutlineStyle: mv,
  FocusOutlineWidth: pv,
  FocusShadowButton: xv,
  FocusShadowInput: gv,
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
  FormBorderRadius: mb,
  FormBorderWidthDefault: pb,
  FormBorderWidthError: hb,
  FormErrorTextDefault: ub,
  FormErrorTypographyWeight: db,
  FormHintTextDefault: fb,
  FormInputBackgroundDefault: Kx,
  FormInputBackgroundDisabled: Zx,
  FormInputBackgroundError: Qx,
  FormInputBackgroundFocus: Jx,
  FormInputBorderDefault: eb,
  FormInputBorderDisabled: rb,
  FormInputBorderError: nb,
  FormInputBorderFocus: tb,
  FormInputTextDefault: ab,
  FormInputTextDisabled: ob,
  FormInputTextPlaceholder: sb,
  FormLabelTextDefault: ib,
  FormLabelTextRequired: lb,
  FormLabelTypographyWeight: cb,
  FormSpacingCheckboxLabelPadding: au,
  FormSpacingCheckboxSize: ru,
  FormSpacingInputMinHeight: nu,
  FormSpacingInputPadding: tu,
  GridGutter: zb,
  GridGutterHalf: Vb,
  GridPageWidth: Wb,
  HeadingsNhsukHeadingL: rn,
  HeadingsNhsukHeadingM: an,
  HeadingsNhsukHeadingS: sn,
  HeadingsNhsukHeadingXl: nn,
  HeadingsNhsukHeadingXs: on,
  LayoutColumnActions: Rb,
  LayoutColumnFull: Lb,
  LayoutColumnHalf: Fb,
  LayoutColumnQuarter: Eb,
  LayoutColumnThird: Ab,
  LayoutContainerMaxWidth: Pb,
  ParagraphsBody: ln,
  ParagraphsBodyLarge: cn,
  ParagraphsBodySmall: un,
  ParagraphsLedeText: dn,
  ParagraphsLedeTextSmall: fn,
  ShadowButtonDefault: iv,
  ShadowButtonFocus: uv,
  ShadowButtonSecondary: lv,
  ShadowButtonWarning: cv,
  ShadowCardDefault: dv,
  ShadowCardHover: fv,
  SizeButtonMinHeightDesktop: Mb,
  SizeButtonMinHeightMobile: $b,
  SizeFormControlLarge: Sb,
  SizeFormControlMedium: _b,
  SizeFormControlSmall: wb,
  SizeFormInputWidth2xl: Db,
  SizeFormInputWidth3xl: Ib,
  SizeFormInputWidthLg: jb,
  SizeFormInputWidthMd: Nb,
  SizeFormInputWidthSm: Cb,
  SizeFormInputWidthXl: Tb,
  SizeFormInputWidthXs: kb,
  SizeIconExtraLarge: vb,
  SizeIconLarge: bb,
  SizeIconMedium: xb,
  SizeIconNhsDefault: yb,
  SizeIconSmall: gb,
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
  StateDisabledBackground: av,
  StateDisabledBorder: sv,
  StateDisabledText: ov,
  StateErrorBackground: Gb,
  StateErrorBorder: Yb,
  StateErrorText: qb,
  StateInfoBackground: tv,
  StateInfoBorder: nv,
  StateInfoText: rv,
  StateSuccessBackground: Xb,
  StateSuccessBorder: Kb,
  StateSuccessText: Jb,
  StateWarningBackground: Zb,
  StateWarningBorder: Qb,
  StateWarningText: ev,
  TransitionButtonDefault: Yg,
  TransitionButtonShadow: qg,
  TransitionCardHover: Kg,
  TransitionInputFocus: Xg
}, Symbol.toStringTag, { value: "Module" })), my = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), gy = ({
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
), xy = ({
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
), by = ({
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
), vy = ({
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
), yy = ({
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
), wy = ({
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
), _y = ({
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
), Sy = ({
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
), ky = ({
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
), Cy = ({
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
), Ny = () => Le(() => _v, []), jy = () => Le(() => ({
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
}), []), Ty = () => Le(() => ({
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
}), []), Dy = () => Le(() => ({
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
}), []), Iy = () => Le(() => ({
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
}), []), $y = () => Le(() => ({
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
}), []), My = () => Le(() => ({
  xl: nn,
  l: rn,
  m: an,
  s: sn,
  xs: on
}), []), Py = () => Le(() => ({
  body: ln,
  bodyLarge: cn,
  bodySmall: un,
  ledeText: dn,
  ledeTextSmall: fn
}), []), Ly = () => Le(() => ({
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
function Fy(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, o] = q.useState(t), s = q.useCallback(() => o("three-column"), []), i = q.useCallback(() => o((u) => u === "three-column" ? n : u), [n]), l = q.useCallback(() => o((u) => u === "three-column" ? n : "three-column"), [n]);
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
}, Nt = {
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
function Ay(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...mu, ...e }, a = [];
  return n?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${Nt.normal.eot}?#iefix") format("eot"),
       url("${t}${Nt.normal.woff2}") format("woff2"),
       url("${t}${Nt.normal.woff}") format("woff"),
       url("${t}${Nt.normal.ttf}") format("truetype");
  src: url("${t}${Nt.normal.eot}");
}`), n?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${Nt.bold.eot}?#iefix") format("eot"),
       url("${t}${Nt.bold.woff2}") format("woff2"),
       url("${t}${Nt.bold.woff}") format("woff"),
       url("${t}${Nt.bold.ttf}") format("truetype");
  src: url("${t}${Nt.bold.eot}");
}`), a.join(`
`);
}
function Ey(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...mu, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${Nt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${Nt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${Nt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${Nt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const Ry = '"Frutiger W01", Arial, Helvetica, sans-serif', By = "Arial, Helvetica, sans-serif";
async function Hy() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Ji as Account,
  Cv as ActionLink,
  ey as AdaptiveDataGrid,
  Hg as AnimationDurationFast,
  Og as AnimationDurationNormal,
  Ug as AnimationDurationSlow,
  Gg as AnimationEasingBounce,
  Wg as AnimationEasingEaseIn,
  Vg as AnimationEasingEaseInOut,
  zg as AnimationEasingEaseOut,
  Pl as AppointmentCard,
  ly as AreaSeriesPrimitive,
  th as AriaDataGrid,
  $s as AriaTabsDataGrid,
  ey as AriaTabsDataGridAdaptive,
  Pi as Axis,
  ks as BackLink,
  uy as BandScalesProvider,
  cy as BarSeriesPrimitive,
  jc as BorderColorCard,
  Tc as BorderColorCardHover,
  Cc as BorderColorDefault,
  Dc as BorderColorError,
  Nc as BorderColorForm,
  i0 as BorderRadiusLarge,
  o0 as BorderRadiusMedium,
  a0 as BorderRadiusNone,
  s0 as BorderRadiusSmall,
  e0 as BorderWidthCardBottom,
  Jg as BorderWidthDefault,
  Zg as BorderWidthFormElement,
  Qg as BorderWidthFormElementError,
  t0 as BorderWidthPanel,
  r0 as BorderWidthTableCell,
  n0 as BorderWidthTableHeader,
  Bp as Breadcrumb,
  Ju as Breakpoint,
  Ob as BreakpointDesktop,
  Ub as BreakpointLargeDesktop,
  Bb as BreakpointMobile,
  Hb as BreakpointTablet,
  bt as Button,
  Ax as ButtonBorderRadius,
  Fx as ButtonBorderWidth,
  Sx as ButtonPrimaryBackgroundActive,
  wx as ButtonPrimaryBackgroundDefault,
  kx as ButtonPrimaryBackgroundDisabled,
  _x as ButtonPrimaryBackgroundHover,
  jx as ButtonPrimaryBorderDefault,
  Tx as ButtonPrimaryBorderFocus,
  Cx as ButtonPrimaryTextDefault,
  Nx as ButtonPrimaryTextDisabled,
  Mx as ButtonSecondaryBackgroundActive,
  Dx as ButtonSecondaryBackgroundDefault,
  $x as ButtonSecondaryBackgroundHover,
  Ix as ButtonSecondaryBackgroundSolid,
  Lx as ButtonSecondaryBorderDefault,
  Px as ButtonSecondaryTextDefault,
  Ex as ButtonShadowSize,
  Qi as ButtonSize,
  Jc as ButtonSpacingPaddingHorizontalDesktop,
  Xc as ButtonSpacingPaddingHorizontalMobile,
  Kc as ButtonSpacingPaddingVerticalDesktop,
  qc as ButtonSpacingPaddingVerticalMobile,
  Rx as ButtonTypographyWeight,
  Zi as ButtonVariant,
  Tl as Card,
  Bx as CardBackgroundDefault,
  Ux as CardBorderBottom,
  Hx as CardBorderDefault,
  Ox as CardBorderHover,
  Yx as CardBorderWidthBottom,
  Gx as CardBorderWidthDefault,
  Uv as CardGroup,
  Wv as CardGroupItem,
  qx as CardShadowDefault,
  Xx as CardShadowHover,
  eu as CardSpacingHeadingMargin,
  Qc as CardSpacingPaddingDesktop,
  Zc as CardSpacingPaddingMobile,
  zx as CardTextDescription,
  Wx as CardTextHeading,
  Vx as CardTextLink,
  zv as CareCard,
  Nv as CharacterCount,
  fy as ChartEnhancer,
  dy as ChartNoScript,
  Zh as ChartRoot,
  Ru as Checkbox,
  Uu as Checkboxes,
  b0 as ColorBorderDefault,
  v0 as ColorBorderSecondary,
  G0 as ColorButtonLoginActive,
  z0 as ColorButtonLoginBackground,
  V0 as ColorButtonLoginHover,
  Y0 as ColorButtonLoginShadow,
  N0 as ColorButtonPrimaryActive,
  S0 as ColorButtonPrimaryBackground,
  C0 as ColorButtonPrimaryHover,
  j0 as ColorButtonPrimaryShadow,
  k0 as ColorButtonPrimaryText,
  R0 as ColorButtonReverseActive,
  F0 as ColorButtonReverseBackground,
  E0 as ColorButtonReverseHover,
  B0 as ColorButtonReverseShadow,
  A0 as ColorButtonReverseText,
  P0 as ColorButtonSecondaryActive,
  T0 as ColorButtonSecondaryBackground,
  D0 as ColorButtonSecondaryBackgroundSolid,
  I0 as ColorButtonSecondaryBorder,
  M0 as ColorButtonSecondaryHover,
  L0 as ColorButtonSecondaryShadow,
  $0 as ColorButtonSecondaryText,
  U0 as ColorButtonWarningActive,
  H0 as ColorButtonWarningBackground,
  O0 as ColorButtonWarningHover,
  W0 as ColorButtonWarningShadow,
  y0 as ColorError,
  g0 as ColorFocusBackground,
  x0 as ColorFocusText,
  _0 as ColorFormBackground,
  w0 as ColorFormBorder,
  Wc as ColorGrey1,
  zc as ColorGrey2,
  Vc as ColorGrey3,
  Gc as ColorGrey4,
  Yc as ColorGrey5,
  h0 as ColorLinkActive,
  f0 as ColorLinkDefault,
  p0 as ColorLinkHover,
  m0 as ColorLinkVisited,
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
  l0 as ColorTextPrimary,
  d0 as ColorTextPrint,
  u0 as ColorTextReverse,
  c0 as ColorTextSecondary,
  Dr as Column,
  Qu as ColumnAlign,
  gx as ComponentBlur,
  lx as ComponentBreadcrumbChevronMarginLeft,
  cx as ComponentBreadcrumbChevronMarginRight,
  dx as ComponentBreadcrumbPaddingTopDesktop,
  ux as ComponentBreadcrumbPaddingTopMobile,
  J0 as ComponentButtonPaddingDesktopHorizontal,
  K0 as ComponentButtonPaddingDesktopVertical,
  X0 as ComponentButtonPaddingMobileHorizontal,
  q0 as ComponentButtonPaddingMobileVertical,
  Z0 as ComponentButtonShadowSize,
  sx as ComponentCardHeadingMargin,
  ax as ComponentCardPaddingDesktop,
  rx as ComponentCardPaddingMobile,
  bx as ComponentDetails,
  vx as ComponentExpander,
  nx as ComponentFormCheckboxLabelPadding,
  tx as ComponentFormCheckboxSize,
  Q0 as ComponentFormInputMinHeight,
  ex as ComponentFormInputPadding,
  xx as ComponentLink,
  yx as ComponentPagination,
  ix as ComponentPanelPaddingDesktop,
  ox as ComponentPanelPaddingMobile,
  mx as ComponentSpread,
  px as ComponentSummaryListCellPaddingHorizontal,
  fx as ComponentSummaryListCellPaddingVertical,
  hx as ComponentSummaryListRowMargin,
  rl as Container,
  Ov as ContentsList,
  mu as DEFAULT_FONT_CONFIG,
  Jv as DashboardSummaryGrid,
  Fv as DateInput,
  Gp as Details,
  Yp as DoDontList,
  wv as ElevationHigh,
  vv as ElevationLow,
  yv as ElevationMedium,
  bv as ElevationNone,
  Ho as ErrorMessage,
  Lv as ErrorSummary,
  qp as Expander,
  Nt as FRUTIGER_FONT_FILES,
  po as Fieldset,
  Zu as Float,
  hv as FocusOutlineOffset,
  mv as FocusOutlineStyle,
  pv as FocusOutlineWidth,
  xv as FocusShadowButton,
  gv as FocusShadowInput,
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
  mb as FormBorderRadius,
  pb as FormBorderWidthDefault,
  hb as FormBorderWidthError,
  ub as FormErrorTextDefault,
  db as FormErrorTypographyWeight,
  fb as FormHintTextDefault,
  Kx as FormInputBackgroundDefault,
  Zx as FormInputBackgroundDisabled,
  Qx as FormInputBackgroundError,
  Jx as FormInputBackgroundFocus,
  eb as FormInputBorderDefault,
  rb as FormInputBorderDisabled,
  nb as FormInputBorderError,
  tb as FormInputBorderFocus,
  ab as FormInputTextDefault,
  ob as FormInputTextDisabled,
  sb as FormInputTextPlaceholder,
  ib as FormLabelTextDefault,
  lb as FormLabelTextRequired,
  cb as FormLabelTypographyWeight,
  au as FormSpacingCheckboxLabelPadding,
  ru as FormSpacingCheckboxSize,
  nu as FormSpacingInputMinHeight,
  tu as FormSpacingInputPadding,
  Bv as GanttChart,
  Cs as Grid,
  zb as GridGutter,
  Vb as GridGutterHalf,
  em as GridLines,
  Wb as GridPageWidth,
  Bn as GridWidth,
  il as Header,
  Rv as HeaderSSR,
  ud as HeaderSearch,
  il as HeaderStatic,
  mn as Heading,
  rn as HeadingsNhsukHeadingL,
  an as HeadingsNhsukHeadingM,
  sn as HeadingsNhsukHeadingS,
  nn as HeadingsNhsukHeadingXl,
  on as HeadingsNhsukHeadingXs,
  fd as Hero,
  tl as Hint,
  Xv as Images,
  uo as Input,
  Vv as InsetText,
  fo as Label,
  Rb as LayoutColumnActions,
  Lb as LayoutColumnFull,
  Fb as LayoutColumnHalf,
  Eb as LayoutColumnQuarter,
  Ab as LayoutColumnThird,
  Pb as LayoutContainerMaxWidth,
  iy as Legend,
  Qh as LineScalesProvider,
  Am as LineSeriesPrimitive,
  nd as List,
  al as MainWrapper,
  Ll as MedicationCard,
  Bm as MetricCard,
  wy as NHSBodyText,
  _y as NHSBodyTextLarge,
  Sy as NHSBodyTextSmall,
  gy as NHSHeading1,
  xy as NHSHeading2,
  by as NHSHeading3,
  vy as NHSHeading4,
  yy as NHSHeading5,
  ky as NHSLedeText,
  Cy as NHSLedeTextSmall,
  Ev as NHSThemeProvider,
  By as NHS_FALLBACK_FONT_STACK,
  Ry as NHS_FONT_STACK,
  Wh as NavigationSplitView,
  ny as PageTemplate,
  Hv as Pagination,
  Hp as Panel,
  ln as ParagraphsBody,
  cn as ParagraphsBodyLarge,
  un as ParagraphsBodySmall,
  dn as ParagraphsLedeText,
  fn as ParagraphsLedeTextSmall,
  Ml as PatientCard,
  Gh as ProductRoadmap,
  jv as Radios,
  Tv as RadiosServer,
  ey as ResponsiveDataGrid,
  ty as ResponsiveDataGridDemo,
  Hn as Row,
  hy as SPC,
  Ag as SPCChart,
  py as SPCMetricCard,
  ta as Select,
  Yu as SelectOption,
  iv as ShadowButtonDefault,
  uv as ShadowButtonFocus,
  lv as ShadowButtonSecondary,
  cv as ShadowButtonWarning,
  dv as ShadowCardDefault,
  fv as ShadowCardHover,
  Mb as SizeButtonMinHeightDesktop,
  $b as SizeButtonMinHeightMobile,
  Sb as SizeFormControlLarge,
  _b as SizeFormControlMedium,
  wb as SizeFormControlSmall,
  Db as SizeFormInputWidth2xl,
  Ib as SizeFormInputWidth3xl,
  jb as SizeFormInputWidthLg,
  Nb as SizeFormInputWidthMd,
  Cb as SizeFormInputWidthSm,
  Tb as SizeFormInputWidthXl,
  kb as SizeFormInputWidthXs,
  vb as SizeIconExtraLarge,
  bb as SizeIconLarge,
  xb as SizeIconMedium,
  yb as SizeIconNhsDefault,
  gb as SizeIconSmall,
  jl as SkipLink,
  Kv as SlotMatrix,
  Zv as SortStatusControl,
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
  Dv as SpacingUtilities,
  av as StateDisabledBackground,
  sv as StateDisabledBorder,
  ov as StateDisabledText,
  Gb as StateErrorBackground,
  Yb as StateErrorBorder,
  qb as StateErrorText,
  tv as StateInfoBackground,
  nv as StateInfoBorder,
  rv as StateInfoText,
  Xb as StateSuccessBackground,
  Kb as StateSuccessBorder,
  Jb as StateSuccessText,
  Zb as StateWarningBackground,
  Qb as StateWarningBorder,
  ev as StateWarningText,
  eh as SummaryCard,
  Gv as SummaryList,
  bn as Table,
  Yv as Tabs,
  Je as Tag,
  Xp as TaskList,
  zu as Textarea,
  oy as TooltipOverlay,
  Fm as TooltipProvider,
  ry as TransactionalPageTemplate,
  Yg as TransitionButtonDefault,
  qg as TransitionButtonShadow,
  Kg as TransitionCardHover,
  Xg as TransitionInputFocus,
  sy as VisibilityProvider,
  Fl as VitalsCard,
  Pv as WIDTH_FRACTIONS,
  qv as WarningCallout,
  Hl as WidthContainer,
  $v as WidthUtilities,
  Hy as checkFrutigerLoaded,
  ko as createGenericTabsConfig,
  Qv as createTCHTabsConfig,
  Ay as generateFrutigerFontFace,
  my as getResponsiveStyles,
  Iv as getSpacingClass,
  Mv as getWidthClass,
  Ey as preloadFrutigerFonts,
  fh as tchDataConfig,
  jy as useColors,
  $y as useComponentSpacing,
  My as useNHSHeadings,
  Py as useNHSParagraphs,
  Av as useNHSTheme,
  Ly as useNHSTypographySystem,
  Fy as useNavigationSplitDrill,
  Hh as useNavigationSplitUrlSync,
  Ul as useNhsFdpBreakpoints,
  Iy as useResponsiveSpacing,
  ay as useResponsiveValue,
  Ty as useSpacing,
  kg as useSpc,
  Ny as useTokens,
  Dy as useTypography
};
//# sourceMappingURL=index.esm.js.map
