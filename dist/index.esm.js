import * as q from "react";
import Ke, { useState as ze, useEffect as Qe, useCallback as me, useRef as We, createElement as Di, useMemo as Ae, useContext as Ti, createContext as Li, forwardRef as Hn, useImperativeHandle as $i, useReducer as Ai, memo as rd, useId as Nr } from "react";
import { createPortal as ad } from "react-dom";
function od(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mr = { exports: {} }, zn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ps;
function sd() {
  if (ps) return zn;
  ps = 1;
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
  return zn.Fragment = t, zn.jsx = n, zn.jsxs = n, zn;
}
var On = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ms;
function id() {
  return ms || (ms = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(H) {
      if (H == null) return null;
      if (typeof H == "function")
        return H.$$typeof === v ? null : H.displayName || H.name || null;
      if (typeof H == "string") return H;
      switch (H) {
        case g:
          return "Fragment";
        case I:
          return "Profiler";
        case m:
          return "StrictMode";
        case x:
          return "Suspense";
        case _:
          return "SuspenseList";
        case y:
          return "Activity";
      }
      if (typeof H == "object")
        switch (typeof H.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), H.$$typeof) {
          case b:
            return "Portal";
          case $:
            return (H.displayName || "Context") + ".Provider";
          case L:
            return (H._context.displayName || "Context") + ".Consumer";
          case N:
            var O = H.render;
            return H = H.displayName, H || (H = O.displayName || O.name || "", H = H !== "" ? "ForwardRef(" + H + ")" : "ForwardRef"), H;
          case M:
            return O = H.displayName || null, O !== null ? O : e(H.type) || "Memo";
          case w:
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
        var W = O.error, B = typeof Symbol == "function" && Symbol.toStringTag && H[Symbol.toStringTag] || H.constructor.name || "Object";
        return W.call(
          O,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          B
        ), t(H);
      }
    }
    function a(H) {
      if (H === g) return "<>";
      if (typeof H == "object" && H !== null && H.$$typeof === w)
        return "<...>";
      try {
        var O = e(H);
        return O ? "<" + O + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var H = j.A;
      return H === null ? null : H.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(H) {
      if (T.call(H, "key")) {
        var O = Object.getOwnPropertyDescriptor(H, "key").get;
        if (O && O.isReactWarning) return !1;
      }
      return H.key !== void 0;
    }
    function l(H, O) {
      function W() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          O
        ));
      }
      W.isReactWarning = !0, Object.defineProperty(H, "key", {
        get: W,
        configurable: !0
      });
    }
    function c() {
      var H = e(this.type);
      return E[H] || (E[H] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), H = this.props.ref, H !== void 0 ? H : null;
    }
    function d(H, O, W, B, ee, R, ne, te) {
      return W = R.ref, H = {
        $$typeof: p,
        type: H,
        key: O,
        props: R,
        _owner: ee
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(H, "ref", {
        enumerable: !1,
        get: c
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
        value: ne
      }), Object.defineProperty(H, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: te
      }), Object.freeze && (Object.freeze(H.props), Object.freeze(H)), H;
    }
    function u(H, O, W, B, ee, R, ne, te) {
      var Z = O.children;
      if (Z !== void 0)
        if (B)
          if (P(Z)) {
            for (B = 0; B < Z.length; B++)
              f(Z[B]);
            Object.freeze && Object.freeze(Z);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(Z);
      if (T.call(O, "key")) {
        Z = e(H);
        var X = Object.keys(O).filter(function(de) {
          return de !== "key";
        });
        B = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", J[Z + B] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          B,
          Z,
          X,
          Z
        ), J[Z + B] = !0);
      }
      if (Z = null, W !== void 0 && (n(W), Z = "" + W), i(O) && (n(O.key), Z = "" + O.key), "key" in O) {
        W = {};
        for (var re in O)
          re !== "key" && (W[re] = O[re]);
      } else W = O;
      return Z && l(
        W,
        typeof H == "function" ? H.displayName || H.name || "Unknown" : H
      ), d(
        H,
        Z,
        R,
        ee,
        o(),
        W,
        ne,
        te
      );
    }
    function f(H) {
      typeof H == "object" && H !== null && H.$$typeof === p && H._store && (H._store.validated = 1);
    }
    var h = Ke, p = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), $ = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), v = Symbol.for("react.client.reference"), j = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, T = Object.prototype.hasOwnProperty, P = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(H) {
        return H();
      }
    };
    var S, E = {}, F = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), z = k(a(s)), J = {};
    On.Fragment = g, On.jsx = function(H, O, W, B, ee) {
      var R = 1e4 > j.recentlyCreatedOwnerStacks++;
      return u(
        H,
        O,
        W,
        !1,
        B,
        ee,
        R ? Error("react-stack-top-frame") : F,
        R ? k(a(H)) : z
      );
    }, On.jsxs = function(H, O, W, B, ee) {
      var R = 1e4 > j.recentlyCreatedOwnerStacks++;
      return u(
        H,
        O,
        W,
        !0,
        B,
        ee,
        R ? Error("react-stack-top-frame") : F,
        R ? k(a(H)) : z
      );
    };
  })()), On;
}
var gs;
function ld() {
  return gs || (gs = 1, process.env.NODE_ENV === "production" ? mr.exports = sd() : mr.exports = id()), mr.exports;
}
var r = ld(), Aa = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var xs;
function cd() {
  return xs || (xs = 1, (function(e) {
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
  })(Aa)), Aa.exports;
}
var dd = cd();
const we = /* @__PURE__ */ od(dd), My = ({
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
}, Ei = ({
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
var Fi = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(Fi || {}), Pi = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(Pi || {});
function ud(e) {
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
const { forwardRef: fd, useCallback: nn, useState: Ea } = q;
function hd(e, t) {
  const {
    children: n,
    variant: a = Fi.Primary,
    size: o = Pi.Default,
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [d, u] = Ea(!1), [f, h] = Ea(!1), [p, b] = Ea(!1), g = ud({
    variant: a,
    size: o,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in c ? c.href : void 0
  }), m = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", I = {
    ...d && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...p && { "data-focused": "true" },
    ...m && { "data-disabled": "true" }
  }, L = nn(
    () => !m && u(!0),
    [m]
  ), $ = nn(() => u(!1), []), N = nn(
    () => !m && h(!0),
    [m]
  ), x = nn(() => {
    h(!1), u(!1);
  }, []), _ = nn(() => b(!0), []), M = nn(() => b(!1), []), w = nn(
    (Z) => {
      Z.key === " " && ("href" in c || Z.currentTarget.getAttribute("role") === "button") && (Z.preventDefault(), Z.currentTarget.click());
    },
    [c]
  ), y = nn(
    (Z) => {
      if (l) {
        const X = Z.currentTarget;
        if (X.getAttribute("data-processing") === "true") {
          Z.preventDefault();
          return;
        }
        X.setAttribute("data-processing", "true"), setTimeout(() => {
          X.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in c && c.href) {
    const {
      id: Z,
      style: X,
      title: re,
      ["aria-label"]: de,
      ["aria-describedby"]: Y,
      ["aria-labelledby"]: le,
      tabIndex: se,
      ...fe
    } = c, ue = c;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: ue.href,
        target: ue.target,
        rel: ue.rel,
        className: g.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...I,
        ...l && { "data-prevent-double-click": "true" },
        ...fe,
        onKeyDown: (he) => {
          ue.onKeyDown?.(he), w(he);
        },
        onClick: (he) => {
          ue.onClick?.(he), y(he);
        },
        onMouseDown: (he) => {
          ue.onMouseDown?.(he), L();
        },
        onMouseUp: (he) => {
          ue.onMouseUp?.(he), $();
        },
        onMouseEnter: (he) => {
          ue.onMouseEnter?.(he), N();
        },
        onMouseLeave: (he) => {
          ue.onMouseLeave?.(he), x();
        },
        onFocus: (he) => {
          ue.onFocus?.(he), _();
        },
        onBlur: (he) => {
          ue.onBlur?.(he), M();
        },
        "aria-disabled": ue["aria-disabled"],
        ...ue["aria-disabled"] === "true" && { tabIndex: -1 },
        id: Z,
        style: X,
        title: re,
        "aria-label": de,
        "aria-describedby": Y,
        "aria-labelledby": le,
        tabIndex: se,
        children: n
      }
    );
  }
  const {
    id: v,
    style: j,
    title: T,
    ["aria-label"]: P,
    ["aria-describedby"]: k,
    ["aria-labelledby"]: S,
    tabIndex: E,
    name: F,
    value: z,
    form: J,
    formAction: H,
    formEncType: O,
    formMethod: W,
    formNoValidate: B,
    formTarget: ee,
    autoFocus: R,
    ...ne
  } = c, te = c;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: te.type || "button",
      disabled: te.disabled,
      className: g.classes,
      "data-module": "nhs-button",
      ...I,
      ...l && { "data-prevent-double-click": "true" },
      ...te.disabled && { "aria-disabled": "true" },
      ...ne,
      onKeyDown: (Z) => {
        te.onKeyDown?.(Z), w(Z);
      },
      onClick: (Z) => {
        te.onClick?.(Z), y(Z);
      },
      onMouseDown: (Z) => {
        te.onMouseDown?.(Z), L();
      },
      onMouseUp: (Z) => {
        te.onMouseUp?.(Z), $();
      },
      onMouseEnter: (Z) => {
        te.onMouseEnter?.(Z), N();
      },
      onMouseLeave: (Z) => {
        te.onMouseLeave?.(Z), x();
      },
      onFocus: (Z) => {
        te.onFocus?.(Z), _();
      },
      onBlur: (Z) => {
        te.onBlur?.(Z), M();
      },
      id: v,
      style: j,
      title: T,
      "aria-label": P,
      "aria-describedby": k,
      "aria-labelledby": S,
      tabIndex: E,
      name: F,
      value: z,
      form: J,
      formAction: H,
      formEncType: O,
      formMethod: W,
      formNoValidate: B,
      formTarget: ee,
      autoFocus: R,
      children: n
    }
  );
}
const bt = fd(hd);
bt.displayName = "Button";
const Jn = ({
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
  ), c = we(
    "nhsuk-back-link__link"
  ), d = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
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
      children: d()
    }
  ) : /* @__PURE__ */ r.jsx(
    "a",
    {
      className: c,
      href: n,
      ...i,
      children: d()
    }
  ) });
};
function pd(e) {
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
const nt = ({
  text: e,
  html: t,
  children: n,
  color: a = "default",
  noBorder: o = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: c,
  ...d
}) => {
  const u = pd({ color: a, noBorder: o, closable: s, disabled: l, className: c }), f = (h) => {
    h.preventDefault(), h.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ r.jsxs("strong", { className: u.classes, ...d, children: [
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
}, md = ({
  id: e,
  name: t,
  checked: n,
  defaultChecked: a = !1,
  disabled: o = !1,
  value: s = "true",
  hint: i,
  errorMessage: l,
  className: c,
  children: d,
  onChange: u,
  onBlur: f,
  onFocus: h,
  attributes: p,
  ...b
}) => {
  const [g, m] = ze(a), I = n !== void 0, L = I ? n : g;
  Qe(() => {
    I || m(a);
  }, [a, I]);
  const $ = (w) => {
    const y = w.target.checked;
    I || m(y), u?.(y, w);
  }, N = i ? `${e}-hint` : void 0, x = l ? `${e}-error` : void 0, _ = [N, x].filter(Boolean).join(" ") || void 0, M = we(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ r.jsx("div", { className: M, ...b, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: L,
        disabled: o,
        onChange: $,
        onBlur: f,
        onFocus: h,
        "aria-describedby": _,
        ...p
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: d }),
    i && /* @__PURE__ */ r.jsx("div", { id: N, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: x, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
md.displayName = "Checkbox";
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
const Oo = ({
  id: e,
  name: t,
  type: n = "text",
  value: a,
  defaultValue: o,
  placeholder: s,
  disabled: i = !1,
  readOnly: l = !1,
  required: c = !1,
  hasError: d = !1,
  describedBy: u,
  className: f,
  width: h = "full",
  inputMode: p,
  autoComplete: b,
  maxLength: g,
  minLength: m,
  pattern: I,
  step: L,
  min: $,
  max: N,
  showValueLabels: x = !1,
  showCurrentValue: _ = !1,
  valueLabels: M,
  onChange: w,
  onBlur: y,
  onFocus: v,
  onKeyDown: j,
  ...T
}) => {
  const [P, k] = ze(a || o || (n === "range" ? $ || "0" : ""));
  Qe(() => {
    a !== void 0 && k(a);
  }, [a]);
  const S = (ee) => {
    const R = ee.target;
    k(R.value), ("type" in ee && ee.nativeEvent || ee.type === "keydown") && w?.(ee);
  }, { classes: E, isRange: F } = Ri({ type: n, hasError: d, width: h, className: f }), z = a !== void 0, J = {
    id: e,
    name: t,
    type: n,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: c,
    "aria-describedby": u,
    inputMode: p,
    autoComplete: b,
    maxLength: g,
    minLength: m,
    pattern: I,
    step: L,
    min: $,
    max: N,
    onChange: S,
    onBlur: y,
    onFocus: v,
    onKeyDown: (ee) => {
      if (F && /[0-9]/.test(ee.key)) {
        const R = (P?.toString() || "") + ee.key;
        ee.target.value = R, S(ee);
      }
      j?.(ee);
    },
    ...T
  }, H = !z && o !== void 0 ? { defaultValue: o } : {}, O = z ? { value: a } : {}, W = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: E,
      ...O,
      ...H,
      "data-current-value": P,
      ...J
    }
  ), B = F ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    x && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: M?.min || $ || "0" }),
      W(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: M?.max || N || "100" })
    ] }),
    !x && W(),
    _ && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      M?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: P })
    ] }) })
  ] }) : null;
  return F ? B : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: E,
      id: e,
      name: t,
      type: n,
      value: a,
      ...a === void 0 && o !== void 0 ? { defaultValue: o } : {},
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: c,
      "aria-describedby": u,
      inputMode: p,
      autoComplete: b,
      maxLength: g,
      minLength: m,
      pattern: I,
      step: L,
      min: $,
      max: N,
      onChange: w,
      onBlur: y,
      onFocus: v,
      onKeyDown: j,
      ...T
    }
  );
};
function gd(e) {
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
const Uo = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = gd({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
};
function xd(e) {
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
const Wo = ({
  children: e,
  legend: t,
  className: n,
  describedBy: a,
  ...o
}) => {
  const s = xd({
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
function bd(e) {
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
const yd = ({
  items: e,
  name: t,
  idPrefix: n,
  legend: a,
  isPageHeading: o = !1,
  legendSize: s = "l",
  hint: i,
  errorMessage: l,
  className: c = "",
  small: d = !1,
  onChange: u,
  fieldsetAttributes: f,
  attributes: h,
  ...p
}) => {
  const [b, g] = ze(
    e.filter((w) => w.checked).map((w) => w.value)
  ), m = n || t, I = i ? `${m}-hint` : void 0, L = l ? `${m}-error` : void 0, $ = [I, L].filter(Boolean).join(" ") || void 0, N = (w, y) => {
    let v;
    y ? v = [...b, w] : v = b.filter((j) => j !== w), g(v), u?.(v);
  }, x = () => e.map((w, y) => {
    const v = `${m}-${y + 1}`, j = `${v}-conditional`, T = b.includes(w.value), P = w.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: v,
          name: t,
          type: "checkbox",
          value: w.value,
          checked: T,
          disabled: P,
          onChange: (k) => N(w.value, k.target.checked),
          "aria-describedby": w.hint ? `${v}-hint` : $,
          ...w.conditional && {
            "aria-controls": j,
            "aria-expanded": T ? "true" : "false"
          },
          ...w.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: v, children: w.text }),
      w.hint && /* @__PURE__ */ r.jsx("div", { id: `${v}-hint`, className: "nhsuk-checkboxes__hint", children: w.hint }),
      w.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: we("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !T
          }),
          id: j,
          children: typeof w.conditional == "object" && w.conditional !== null && "label" in w.conditional && "id" in w.conditional && "name" in w.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            w.conditional.label && /* @__PURE__ */ r.jsx(Uo, { htmlFor: w.conditional.id, children: w.conditional.label }),
            /* @__PURE__ */ r.jsx(Oo, { ...w.conditional })
          ] }) : w.conditional
        }
      )
    ] }, w.value);
  }), { classes: _, formGroupClasses: M } = bd({ small: d, className: c, hasError: !!l });
  return /* @__PURE__ */ r.jsx("div", { className: M, ...h, ...p, children: /* @__PURE__ */ r.jsxs(
    Wo,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: $,
      ...f,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: I, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: L, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: _, children: x() })
      ]
    }
  ) });
};
yd.displayName = "Checkboxes";
function vd(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const wd = ({
  id: e,
  name: t,
  value: n,
  defaultValue: a,
  placeholder: o,
  disabled: s = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: c = !1,
  describedBy: d,
  className: u,
  rows: f = 5,
  cols: h,
  maxLength: p,
  minLength: b,
  wrap: g = "soft",
  resize: m = "vertical",
  autoComplete: I,
  spellCheck: L,
  onChange: $,
  onBlur: N,
  onFocus: x,
  onKeyDown: _,
  ...M
}) => {
  const { classes: w, describedBy: y } = vd({ hasError: c, resize: m, className: u, describedBy: d });
  return /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: w,
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
      maxLength: p,
      minLength: b,
      wrap: g,
      autoComplete: I,
      spellCheck: L,
      onChange: $,
      onBlur: N,
      onFocus: x,
      onKeyDown: _,
      ...M
    }
  );
};
function Sd(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Bi = ({
  id: e,
  className: t,
  children: n,
  ...a
}) => {
  const o = Sd({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: o.classes, id: o.id, ...a, children: n });
}, Iy = ({
  id: e,
  maxLength: t,
  maxWords: n,
  threshold: a = 75,
  name: o,
  value: s,
  defaultValue: i,
  rows: l,
  className: c,
  countMessage: d,
  onCountChange: u,
  onChange: f,
  ...h
}) => {
  const p = s ?? i ?? "", [b, g] = ze(p), [m, I] = ze(0), [L, $] = ze(!1), [N, x] = ze(!1), _ = me((T) => n ? T.trim() === "" ? 0 : T.trim().split(/\s+/).length : T.length, [n]);
  Qe(() => {
    const T = _(b), P = t || n || 0, k = P - T, S = Math.floor(P * (a / 100));
    I(k), $(T > P), x(T >= S || T > P), u && u(T, k);
  }, [b, t, n, a, _, u]);
  const M = (T) => {
    const P = T.target.value;
    g(P), f && f(T);
  }, w = () => {
    const T = t || n || 0, P = n ? "word" : "character", k = n ? "words" : "characters";
    if (!N)
      return `You can enter up to ${T} ${T === 1 ? P : k}`;
    if (L) {
      const S = Math.abs(m);
      return `You have ${S} ${S === 1 ? P : k} too many`;
    } else
      return `You have ${m} ${m === 1 ? P : k} remaining`;
  }, y = we(
    "nhsuk-character-count",
    c
  ), v = we(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !N,
      "nhsuk-error-message": L
    },
    d?.classes
  ), j = we(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": L
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
          wd,
          {
            id: e,
            name: o,
            value: s !== void 0 ? b : void 0,
            defaultValue: s === void 0 ? i ?? b : void 0,
            rows: l,
            className: j,
            onChange: M,
            "aria-describedby": `${e}-info`,
            "aria-invalid": L || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ r.jsx(
          Bi,
          {
            id: `${e}-info`,
            className: v,
            role: "status",
            "aria-live": "polite",
            children: w()
          }
        )
      ]
    }
  );
};
function _d(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const kd = ({
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
}, Cd = ({
  id: e,
  name: t,
  ariaLabel: n,
  value: a,
  defaultValue: o,
  disabled: s = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: c,
  className: d,
  multiple: u = !1,
  size: f,
  autoComplete: h,
  options: p,
  children: b,
  onChange: g,
  onBlur: m,
  onFocus: I,
  ...L
}) => {
  const { classes: $ } = _d({ hasError: l, className: d }), N = () => p ? p.map((_, M) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: _.value,
      disabled: _.disabled,
      "data-initial-selected": _.selected || void 0,
      children: _.text
    },
    `${_.value}-${M}`
  )) : null, x = o === void 0 && a === void 0 && p ? p.find((_) => _.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: $,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: o !== void 0 ? o : x,
      disabled: s,
      required: i,
      "aria-describedby": c,
      multiple: u,
      size: f,
      autoComplete: h,
      onChange: g,
      onBlur: m,
      onFocus: I,
      ...L,
      children: b || N()
    }
  );
}, jr = Cd;
jr.Option = kd;
function Nd(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function Hi(e, {
  variant: t,
  selectedValue: n,
  enableBehaviourAttr: a,
  handleChange: o,
  handleBlur: s,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: c,
  InputComponent: d
}) {
  const {
    onChange: u,
    onBlur: f,
    onFocus: h,
    ...p
  } = e, {
    name: b,
    hasError: g = !1,
    describedBy: m,
    className: I,
    size: L = "normal",
    inline: $ = !1,
    options: N,
    ...x
  } = p, { classes: _, describedBy: M } = Nd({ hasError: g, size: L, inline: $, className: I, describedBy: m });
  return /* @__PURE__ */ r.jsx(Wo, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: _,
      ...x,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: N.map((w, y) => {
        const v = `${b}-${y}`, j = w.conditional ? `${v}-conditional` : void 0, T = n === w.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: v,
              name: b,
              type: "radio",
              value: w.value,
              disabled: w.disabled,
              ...t === "client" ? {
                checked: T,
                onChange: o,
                onBlur: s,
                onFocus: i,
                onKeyDown: l,
                ref: (P) => {
                  P && c && (c.current[y] = P);
                }
              } : {
                defaultChecked: T,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": M
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: v, children: w.text }),
          w.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: w.hint }),
          w.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: we("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !T
              }),
              id: j,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof w.conditional == "object" && w.conditional !== null && "label" in w.conditional && "id" in w.conditional && "name" in w.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                w.conditional.label && /* @__PURE__ */ r.jsx(
                  Uo,
                  {
                    htmlFor: w.conditional.id,
                    children: w.conditional.label
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  d,
                  {
                    ...w.conditional
                  }
                )
              ] }) : w.conditional
            }
          )
        ] }, w.value);
      })
    }
  ) });
}
const Dy = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s }) => {
  const [i, l] = ze(e || t || ""), c = We([]), d = We(i), u = (p) => {
    const b = p.target.value;
    b !== d.current && (d.current = b, l(b), n?.(p));
  }, f = (p) => {
    o?.(p);
  }, h = me((p) => {
    const { key: b } = p;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(b)) return;
    p.preventDefault();
    const g = c.current.filter(($) => $ && !$.disabled), m = g.indexOf(p.currentTarget);
    if (m === -1) return;
    let I = m;
    ["ArrowDown", "ArrowRight"].includes(b) ? I = (m + 1) % g.length : ["ArrowUp", "ArrowLeft"].includes(b) && (I = (m - 1 + g.length) % g.length);
    const L = g[I];
    L && (L.focus(), L.checked || L.click());
  }, []);
  return Hi(
    { value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: u,
      handleBlur: a,
      handleFocus: f,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: h,
      itemsRef: c,
      InputComponent: Oo
    }
  );
};
function jd(e) {
  const {
    id: t,
    name: n,
    type: a = "text",
    value: o,
    defaultValue: s,
    placeholder: i,
    disabled: l = !1,
    readOnly: c = !1,
    required: d = !1,
    hasError: u = !1,
    describedBy: f,
    className: h,
    width: p = "full",
    inputMode: b,
    autoComplete: g,
    maxLength: m,
    minLength: I,
    pattern: L,
    step: $,
    min: N,
    max: x,
    showValueLabels: _ = !1,
    showCurrentValue: M = !1,
    valueLabels: w,
    // Strip interactive handlers in server variant
    onChange: y,
    onBlur: v,
    onFocus: j,
    onKeyDown: T,
    ...P
  } = e, { classes: k, isRange: S } = Ri({
    type: a,
    hasError: u,
    width: p,
    className: h
  }), E = {
    id: t,
    name: n,
    type: a,
    placeholder: i,
    disabled: l,
    readOnly: c,
    required: d,
    "aria-describedby": f,
    inputMode: b,
    autoComplete: g,
    maxLength: m,
    minLength: I,
    pattern: L,
    step: $,
    min: N,
    max: x,
    ...P
  };
  if (S) {
    const F = o ?? s ?? (typeof N < "u" ? String(N) : "0"), z = /* @__PURE__ */ r.jsx(
      "input",
      {
        className: k,
        ...o !== void 0 ? { value: o } : {},
        ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
        "data-current-value": F,
        ...E
      }
    );
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      _ ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: w?.min || N || "0" }),
        z,
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: w?.max || x || "100" })
      ] }) : z,
      M && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        w?.current || "Current value:",
        " ",
        /* @__PURE__ */ r.jsx("strong", { children: F })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ r.jsx(
    "input",
    {
      className: k,
      ...o !== void 0 ? { value: o } : {},
      ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
      ...E
    }
  );
}
const Ty = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return Hi(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: jd
    }
  );
};
var xn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(xn || {}), Md = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(Md || {}), Id = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(Id || {}), Dd = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Dd || {});
const zi = ({
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
}, on = ({
  children: e,
  className: t,
  style: n,
  align: a,
  rowGap: o,
  ...s
}) => {
  const i = we(
    "nhsuk-grid-row",
    // Row-specific alignment class to avoid column flex styles
    a ? `nhsuk-grid-row-align-${a}` : void 0,
    t
  );
  return /* @__PURE__ */ r.jsx("div", { className: i, style: n, ...s, children: e });
}, Xn = ({
  children: e,
  width: t = xn.Full,
  mobileWidth: n,
  tabletWidth: a,
  desktopWidth: o,
  start: s,
  className: i,
  forceWidth: l = !1,
  style: c,
  align: d,
  ...u
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
      ...d ? { [`nhsuk-grid-align-${d}`]: !0 } : {}
    },
    i
  );
  return /* @__PURE__ */ r.jsx("div", { className: f, style: c, ...u, children: e });
}, Qa = ({
  children: e,
  className: t,
  style: n,
  rowGap: a = 8,
  ...o
}) => {
  const s = Ke.Children.toArray(e), i = s[0], l = Ke.isValidElement(i) && (i.type === on || typeof i.props == "object" && i.props && "className" in i.props && typeof i.props.className == "string" && i.props.className.includes("nhsuk-grid-row")), c = typeof a == "number" ? `${a}px` : a;
  let d = e;
  if (l)
    d = s.map((u, f) => {
      if (!Ke.isValidElement(u)) return u;
      const h = u, p = h.props || {}, b = typeof p.className == "string" ? p.className : "";
      if (!(h.type === on || b.includes("nhsuk-grid-row"))) return u;
      const m = p.rowGap, I = m !== void 0 ? typeof m == "number" ? `${m}px` : m : c, L = f === 0 ? void 0 : I;
      if (!L) return u;
      const $ = { ...p.style || {}, marginTop: L };
      return Ke.cloneElement(h, { style: $ });
    });
  else {
    const u = { marginTop: void 0 };
    d = /* @__PURE__ */ r.jsx(on, { style: u, children: e });
  }
  return /* @__PURE__ */ r.jsx(zi, { className: t, style: n, ...o, children: d });
}, Td = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), d = we(
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
  return /* @__PURE__ */ r.jsx(c, { className: d, role: s, ...l, children: e });
}, Ld = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = we("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, $d = Td;
$d.Item = Ld;
const Ly = ({
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
}, $y = {
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
}, Ay = ({
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
}, Ey = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Fy = [
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
function Ad(e) {
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
function Ed(e) {
  const t = e.level ?? Ad(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const Xt = ({ level: e, className: t, text: n, html: a, children: o, size: s, marginBottom: i, ...l }) => {
  const c = Ed({ level: e, size: s, className: t, marginBottom: i }), d = o || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return Di(c.tag, { className: c.classes, style: c.style, ...l }, d);
};
function Fd(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const bs = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...o }) => {
  const s = Fd({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, Py = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const c = We(null);
  Qe(() => {
    c.current && c.current.focus();
  }, []);
  const d = we(
    "nhsuk-error-summary",
    s
  ), u = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, h = (p) => {
    const b = p.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: p.html } }) : p.text;
    return p.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: p.href,
        ...p.attributes,
        children: b
      }
    ) : b;
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: c,
      className: d,
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
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((p, b) => /* @__PURE__ */ r.jsx("li", { children: h(p) }, b)) })
        ] })
      ]
    }
  );
}, Ry = ({
  id: e,
  className: t,
  items: n,
  namePrefix: a,
  values: o = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: c,
  ...d
}) => {
  const [u, f] = ze(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [h, p] = ze({}), b = (S) => S % 4 === 0 && S % 100 !== 0 || S % 400 === 0, g = (S, E) => {
    const F = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return S === 2 && b(E) ? 29 : F[S - 1];
  }, m = (S, E, F) => {
    if (!S) return;
    if (!/^\d+$/.test(S)) return "Day must be a number";
    const z = parseInt(S, 10);
    if (z < 1 || z > 31) return "Day must be between 1 and 31";
    if (E && F) {
      const J = parseInt(E, 10), H = parseInt(F, 10);
      if (!isNaN(J) && !isNaN(H) && J >= 1 && J <= 12) {
        const O = g(J, H);
        if (z > O)
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
          ][J - 1]} ${H} only has ${O} days`;
      }
    }
  }, I = (S) => {
    if (!S) return;
    if (!/^\d+$/.test(S)) return "Month must be a number";
    const E = parseInt(S, 10);
    if (E < 1 || E > 12) return "Month must be between 1 and 12";
  }, L = (S) => {
    if (!S) return;
    if (!/^\d+$/.test(S)) return "Year must be a number";
    const E = parseInt(S, 10), F = (/* @__PURE__ */ new Date()).getFullYear();
    if (E < 1900 || E > F + 10)
      return `Year must be between 1900 and ${F + 10}`;
  }, $ = (S, E, F) => {
    if (!S || !E || !F) return;
    const z = parseInt(S, 10), J = parseInt(E, 10), H = parseInt(F, 10);
    if (isNaN(z) || isNaN(J) || isNaN(H) || J < 1 || J > 12 || H < 1900) return;
    const O = g(J, H);
    z < 1 || z > O;
  }, N = me(
    (S, E) => {
      const F = {
        ...u,
        [S]: E
      };
      f(F), c && c(F);
    },
    [u, c]
  ), x = me(
    (S) => {
      const E = u[S];
      let F;
      if (S === "day")
        F = m(
          E,
          u.month,
          u.year
        );
      else if (S === "month") {
        if (F = I(E), !F && u.day) {
          const z = m(
            u.day,
            E,
            u.year
          );
          p((J) => ({
            ...J,
            day: z
          }));
        }
      } else if (S === "year" && (F = L(E), !F && u.day && u.month)) {
        const z = m(
          u.day,
          u.month,
          E
        );
        p((J) => ({
          ...J,
          day: z
        }));
      }
      if (p((z) => ({
        ...z,
        [S]: F
      })), u.day && u.month && u.year) {
        const z = $(
          S === "day" ? E : u.day,
          S === "month" ? E : u.month,
          S === "year" ? E : u.year
        );
        z && p((J) => ({
          ...J,
          day: z
        }));
      }
    },
    [u, m, I, L, $]
  ), _ = Ae(
    () => [
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
    ],
    []
  ), M = n || _;
  let w = s?.describedBy || "";
  const y = i ? `${e}-hint` : "", v = l ? `${e}-error` : "";
  y && (w = w ? `${w} ${y}` : y), v && (w = w ? `${w} ${v}` : v);
  const j = Object.values(h).some((S) => S), T = we("nhsuk-form-group", {
    "nhsuk-form-group--error": l || j
  }), P = we("nhsuk-date-input", t), k = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(Bi, { id: y, className: i.classes, children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text }),
    l && /* @__PURE__ */ r.jsx(bs, { id: v, className: l.classes, children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text }),
    Object.entries(h).map(
      ([S, E]) => E ? /* @__PURE__ */ r.jsxs(
        bs,
        {
          id: `${e}-${S}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            E
          ]
        },
        `${S}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: P,
        id: e,
        "data-testid": "date-input",
        ...d,
        children: M.map((S) => {
          const E = S.id || `${e}-${S.name}`, F = a ? `${a}[${S.name}]` : S.name, z = S.label || S.name.charAt(0).toUpperCase() + S.name.slice(1), J = h[S.name], H = u[S.name] || "";
          let O = w;
          if (J) {
            const W = `${e}-${S.name}-error`;
            O = O ? `${O} ${W}` : W;
          }
          return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
            /* @__PURE__ */ r.jsx(Uo, { htmlFor: E, className: "nhsuk-date-input__label", children: z }),
            /* @__PURE__ */ r.jsx(
              Oo,
              {
                id: E,
                name: F,
                value: H,
                className: we("nhsuk-date-input__input", S.classes, {
                  "nhsuk-input--error": J
                }),
                inputMode: S.inputmode,
                autoComplete: S.autocomplete,
                pattern: S.pattern,
                "aria-describedby": O || void 0,
                hasError: !!J,
                onChange: (W) => N(S.name, W.target.value),
                onBlur: () => x(S.name)
              }
            )
          ] }, S.name);
        })
      }
    )
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: T, children: s ? /* @__PURE__ */ r.jsx(
    Wo,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: w || void 0,
      children: k()
    }
  ) : k() });
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
}, Wi = Li(Ui), Pd = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...Ui, ...t };
  return /* @__PURE__ */ r.jsx(Wi.Provider, { value: n, children: e });
}, By = () => {
  const e = Ti(Wi);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Rd() {
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
function Bd() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Rd(), document.head.appendChild(e);
}
const Hy = ({ children: e, theme: t }) => (Qe(() => {
  Bd();
}, []), /* @__PURE__ */ r.jsx(Pd, { theme: t, children: e })), Hd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ28iPgogICAgPHJlY3QgaWQ9ImZkcGxvZ28tcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIAogICAgPHRleHQgIGZpbGw9InJnYigzNSwgMzEsIDMyKSIgZm9udC1mYW1pbHk9IkZydXRpZ2VyTFRQcm8tQm9sZCwgJ0ZydXRpZ2VyIExUIFBybycsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjQwIiB4PSIwIiB5PSI2NC44OSI+PHRzcGFuIHg9IjAiIHk9IjEwMi44OSI+RmVkZXJhdGVkIERhdGEgUGxhdGZvcm08L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg==", zd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcHR3b2xpbmUiPgogICAgPHJlY3QgaWQ9ImZkcHR3b2xpbmUtcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIDx0ZXh0ICBmaWxsPSJyZ2IoMzUsIDMxLCAzMikiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPjx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPkZlZGVyYXRlZCBEYXRhIAo8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIxNTAuODkiPlBsYXRmb3JtPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=", Od = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iZmRwdHdvbGluZWludmVyc2UiPgoJPHJlY3QgaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLXJlY3RhbmdsZSIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMzIsIDk1LCAxNzIpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+Cgk8cGF0aCBpZD0iZmRwdHdvbGluZWludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgoJPHBhdGggaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KCTxwYXRoIGlkPSJmZHB0d29saW5laW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+Cgk8dGV4dCBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPgoJCTx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPgoJCQlGZWRlcmF0ZWQgRGF0YQoJCTwvdHNwYW4+CgkJPHRzcGFuIHg9IjAiIHk9IjE1MC44OSI+CgkJCVBsYXRmb3JtCgkJPC90c3Bhbj4KCTwvdGV4dD4KPC9zdmc+Cg==", Ud = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ29pbnZlcnNlIj4KICAgIDxyZWN0IGlkPSJmZHBsb2dvaW52ZXJzZS1yZWN0YW5nbGUiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+CiAgICA8ZyBpZD0iZmRwbG9nb2ludmVyc2UtZ3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJmZHBsb2dvaW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+CiAgICAgICAgPHBhdGggaWQ9ImZkcGxvZ29pbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDAsIDk0LCAxODQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgICAgICA8cGF0aCBpZD0iZmRwbG9nb2ludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgogICAgPC9nPgogICAgCiAgICA8dGV4dCAgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBmb250LWZhbWlseT0iRnJ1dGlnZXJMVFByby1Cb2xkLCAnRnJ1dGlnZXIgTFQgUHJvJywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iNDAiIHg9IjAiIHk9IjY0Ljg5Ij48dHNwYW4geD0iMCIgeT0iMTAyLjg5Ij5GZWRlcmF0ZWQgRGF0YSBQbGF0Zm9ybTwvdHNwYW4+PC90ZXh0Pgo8L3N2Zz4K", Wd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='357'%20height='114'%20xml:space='preserve'%20id='fdpgraphic'%3e%3cdefs%3e%3clinearGradient%20id='fdpgraphic-gradient-rectangle2'%20x1='113.66'%20y1='27.99'%20x2='0.02'%20y2='27.99'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient2-clip'%20x1='243.8'%20y1='28.5'%20x2='113.64'%20y2='28.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient4-bezier4'%20x1='357.05'%20y1='85.21'%20x2='243.44'%20y2='85.21'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='fdpgraphic-group3'%3e%3cg%20id='fdpgraphic-squareGroup'%3e%3crect%20id='fdpgraphic-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='113.6'%20height='113.6'%20/%3e%3crect%20id='fdpgraphic-rectangle2'%20stroke='none'%20fill='url(%23fdpgraphic-gradient-rectangle2)'%20x='0'%20y='0'%20width='113.65'%20height='56'%20/%3e%3c/g%3e%3cg%20id='fdpgraphic-hexagonGroup'%3e%3cpath%20id='fdpgraphic-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%20146.15,-0%20L%20211.25,0%20243.8,57.03%20211.25,114.06%20146.15,114.06%20113.6,57.03%20146.15,-0%20Z%20M%20146.15,-0'%20/%3e%3cg%20id='fdpgraphic-hexagon'%3e%3cpath%20id='fdpgraphic-clip'%20stroke='none'%20fill='url(%23fdpgraphic-gradient2-clip)'%20d='M%20146.18,-0%20L%20113.64,57%20243.8,57%20211.26,-0%20146.18,-0%20Z%20M%20146.18,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdpgraphic-circleGroup'%3e%3ccircle%20id='fdpgraphic-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='300.25'%20cy='56.8'%20r='56.8'%20/%3e%3cpath%20id='fdpgraphic-bezier4'%20stroke='none'%20fill='url(%23fdpgraphic-gradient4-bezier4)'%20d='M%20300.25,56.8%20L%20243.45,56.8%20C%20243.45,88.18%20268.88,113.61%20300.25,113.61%20L%20300.25,113.61%20C%20331.62,113.61%20357.05,88.18%20357.05,56.8%20L%20357.05,56.8%20300.25,56.8%20Z%20M%20300.25,56.8'%20/%3e%3c/g%3e%3cpath%20id='fdpgraphic-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='2.49'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2054.9,56.9%20L%20301.64,56.9'%20/%3e%3c/g%3e%3c/svg%3e", Gd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogo'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogo-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogo-bezier7'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier8'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier9'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogo-bezier10'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier11'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogo-bezier12'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogo-group3'%3e%3cg%20id='fdplockuplogo-squareGroup'%3e%3crect%20id='fdplockuplogo-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogo-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogo-hexagonGroup'%3e%3cpath%20id='fdplockuplogo-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogo-hexagon'%3e%3cpath%20id='fdplockuplogo-clip'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogo-circleGroup'%3e%3cg%20id='fdplockuplogo-group'%3e%3ccircle%20id='fdplockuplogo-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogo-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogo-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e", Yd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogoinverted'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogoinverted-bezier7'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier8'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier9'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier10'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier11'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier12'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogoinverted-group3'%3e%3cg%20id='fdplockuplogoinverted-squareGroup'%3e%3crect%20id='fdplockuplogoinverted-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogoinverted-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-hexagonGroup'%3e%3cpath%20id='fdplockuplogoinverted-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogoinverted-hexagon'%3e%3cpath%20id='fdplockuplogoinverted-clip'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-circleGroup'%3e%3cg%20id='fdplockuplogoinverted-group'%3e%3ccircle%20id='fdplockuplogoinverted-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogoinverted-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e";
var Gi = /* @__PURE__ */ ((e) => (e.NHS = "nhs", e.FDP = "fdp", e))(Gi || {}), Yi = /* @__PURE__ */ ((e) => (e.Full = "full", e.Graphic = "graphic", e.Inverse = "inverse", e.TwoLine = "twoLine", e.TwoLineInverse = "twoLineInverse", e.Compact = "compact", e.CompactInverted = "compactInverted", e))(Yi || {});
const Vd = {
  nhs: {},
  fdp: {
    full: {
      brand: "fdp",
      variant: "full",
      src: Hd,
      ariaLabel: "FDP"
    },
    graphic: {
      brand: "fdp",
      variant: "graphic",
      src: Wd,
      ariaLabel: "FDP"
    },
    inverse: {
      brand: "fdp",
      variant: "inverse",
      src: Ud,
      ariaLabel: "FDP"
    },
    twoLine: {
      brand: "fdp",
      variant: "twoLine",
      src: zd,
      ariaLabel: "FDP"
    },
    twoLineInverse: {
      brand: "fdp",
      variant: "twoLineInverse",
      src: Od,
      ariaLabel: "FDP"
    },
    compact: {
      brand: "fdp",
      variant: "compact",
      src: Gd,
      ariaLabel: "FDP"
    },
    compactInverted: {
      brand: "fdp",
      variant: "compactInverted",
      src: Yd,
      ariaLabel: "FDP"
    }
  }
};
function Zd(e, t = "full") {
  return Vd[e]?.[t];
}
function qd(e, {
  variant: t,
  isClient: n,
  menuOpen: a = !1,
  showMoreButton: o = !1,
  visibleItems: s,
  dropdownVisible: i,
  toggleMenu: l,
  navContainerRef: c,
  navListRef: d,
  searchNode: u,
  brand: f
}) {
  const {
    className: h,
    logo: p = {},
    service: b = {},
    serviceName: g,
    organisation: m,
    search: I,
    account: L,
    navigation: $,
    containerClasses: N,
    variant: x = "default",
    attributes: _ = {},
    maxVisibleItems: M,
    // deprecated (ignored)
    responsiveNavigation: w = !0,
    logoVariant: y = Yi.Full,
    ...v
  } = e, j = {
    ...b,
    text: b?.text ?? g
  };
  "maxVisibleItems" in v && delete v.maxVisibleItems;
  const T = j.href && !p.href || j.href && j.href === p.href, P = T ? j.href : p.href, k = we(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": x === "organisation" || m,
      "nhsuk-header--white": x === "white"
    },
    h
  ), S = we(
    "nhsuk-header__container",
    N
  ), E = we(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": $?.white,
      "nhsuk-header__navigation--justified": $?.justified
    },
    $?.className
  ), z = f ?? (typeof document > "u" ? "nhs" : document.documentElement.getAttribute("data-brand") === "fdp" ? "fdp" : "nhs"), J = () => /* @__PURE__ */ r.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": p.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ r.jsx("title", { children: p.ariaLabel || "NHS" }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), H = () => {
    if (p.src)
      return /* @__PURE__ */ r.jsx(
        "img",
        {
          className: "nhsuk-header__organisation-logo",
          src: p.src,
          width: "280",
          alt: p.ariaLabel || (z === "fdp" ? "FDP" : "NHS")
        }
      );
    if (z === "fdp") {
      const R = Zd(Gi.FDP, y);
      if (R?.src)
        return /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: R.src,
            "data-logo-variant": y,
            width: "280",
            alt: R.ariaLabel || "FDP"
          }
        );
    }
    return J();
  }, O = () => m ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      m.name,
      m.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        m.split
      ] })
    ] }),
    m.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: m.descriptor })
  ] }) : null, W = (R, ne) => R ? ne ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: ne, children: R }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: R }) : null, B = (R) => R.active || R.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: R.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: R.html } }) : R.text }) : R.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: R.html } }) : R.text, ee = () => /* @__PURE__ */ r.jsx(
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
  return $?.items, /* @__PURE__ */ r.jsxs(
    "header",
    {
      className: k,
      role: "banner",
      "data-module": "nhsuk-header",
      ..._,
      ...v,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: S, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            P ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: P, children: [
              H(),
              O(),
              T && W(j.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              H(),
              O(),
              T && W(j.text)
            ] }),
            j.text && !T && W(j.text, j.href)
          ] }),
          u ?? null,
          /* @__PURE__ */ r.jsx(
            Ei,
            {
              ...L,
              variant: x === "white" ? "white" : "default"
            }
          )
        ] }),
        $ && $.items && $.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: E,
            "aria-label": $.ariaLabel || "Menu",
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
                  N
                ),
                ref: c,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: d,
                    children: [
                      ($?.items || []).map((R, ne) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: we(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": R.active || R.current,
                              "nhsuk-header__navigation-item--hidden": o && s !== void 0 && ne >= (s ?? 0)
                            },
                            R.className
                          ),
                          ...R.attributes || {},
                          children: /* @__PURE__ */ r.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: R.href,
                              ...R.active || R.current ? { "aria-current": R.current ? "page" : "true" } : {},
                              children: B(R)
                            }
                          )
                        },
                        ne
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
                            ee()
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
        n && $ && $.items && $.items.length > 0 && a && i && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: $.items.slice(s ?? 0).map((R, ne) => /* @__PURE__ */ r.jsx(
              "li",
              {
                className: we("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": R.active || R.current
                }),
                children: /* @__PURE__ */ r.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: R.href,
                    ...R.active || R.current ? { "aria-current": R.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: B(R)
                  }
                )
              },
              `overflow-${(s ?? 0) + ne}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const eo = Li(void 0);
function zy({ brand: e = "nhs", scope: t = "document", children: n }) {
  const [a, o] = ze(e);
  Qe(() => {
    o(e);
  }, [e]), Qe(() => {
    if (t === "document")
      return document.documentElement.setAttribute("data-brand", a), () => {
      };
  }, [a, t]);
  const s = Ae(() => ({ brand: a, setBrand: o }), [a]);
  return t === "local" ? /* @__PURE__ */ r.jsx(eo.Provider, { value: s, children: /* @__PURE__ */ r.jsx("div", { "data-brand": a, children: n }) }) : /* @__PURE__ */ r.jsx(eo.Provider, { value: s, children: n });
}
function Jd() {
  const e = Ti(eo);
  if (!e) throw new Error("useBrand must be used within BrandThemeProvider");
  return e;
}
const Xd = ({
  mode: e = "form",
  action: t = "/search",
  method: n = "get",
  name: a = "q",
  value: o,
  placeholder: s = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: c,
  disabled: d = !1,
  callbacks: u = {},
  isLoading: f = !1,
  showResults: h = !1,
  results: p = [],
  formAttributes: b = {},
  inputAttributes: g = {},
  buttonAttributes: m = {},
  preventDefaultSubmit: I = !1,
  debounceMs: L = 300,
  minQueryLength: $ = 1
}) => {
  const [N, x] = ze(""), [_, M] = ze(!1), w = We(void 0), y = We(null), v = We(null), j = e === "controlled" && o !== void 0, T = j ? o : N, P = me(
    (B) => {
      w.current && clearTimeout(w.current), w.current = setTimeout(() => {
        u.onChange && B.length >= $ && u.onChange(B);
      }, L);
    },
    [u.onChange, L, $]
  ), k = me(
    (B) => {
      const ee = B.target.value;
      j || x(ee), e !== "form" && P(ee);
    },
    [j, e, P]
  ), S = me(
    (B) => {
      const ee = T.trim(), R = {
        query: ee,
        timestamp: Date.now(),
        formData: new FormData(B.currentTarget)
      };
      e === "controlled" || e === "hybrid" && I ? (B.preventDefault(), u.onSearch && ee.length >= $ && u.onSearch(R)) : e === "hybrid" && u.onSearch && ee.length >= $ && u.onSearch(R);
    },
    [
      e,
      T,
      u.onSearch,
      I,
      $
    ]
  ), E = me(() => {
    M(!0), u.onFocus?.();
  }, [u.onFocus]), F = me(() => {
    M(!1), u.onBlur?.();
  }, [u.onBlur]), z = me(() => {
    j || x(""), u.onClear?.(), v.current?.focus();
  }, [j, u.onClear]);
  Qe(() => () => {
    w.current && clearTimeout(w.current);
  }, []);
  const J = () => /* @__PURE__ */ r.jsx(
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
  ), O = () => !T || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: z,
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
  ), W = () => !h || !p.length || !_ ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: p.map((B) => /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsuk-header__search-result",
      role: "option",
      children: B.href ? /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: B.href,
          className: "nhsuk-header__search-result-link",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: B.title }),
            B.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: B.description })
          ]
        }
      ) : /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "nhsuk-header__search-result-button",
          onClick: () => u.onSearch?.({
            query: B.title,
            timestamp: Date.now()
          }),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: B.title }),
            B.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: B.description })
          ]
        }
      )
    },
    B.id
  )) });
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: we("nhsuk-header__search", c, {
        "nhsuk-header__search--controlled": e === "controlled",
        "nhsuk-header__search--hybrid": e === "hybrid",
        "nhsuk-header__search--loading": f,
        "nhsuk-header__search--focused": _,
        "nhsuk-header__search--has-results": h && p.length > 0
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
            onSubmit: S,
            ...b,
            children: [
              /* @__PURE__ */ r.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: i }),
              /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    ref: v,
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: e !== "controlled" ? a : void 0,
                    type: "search",
                    placeholder: s,
                    autoComplete: "off",
                    value: T,
                    onChange: k,
                    onFocus: E,
                    onBlur: F,
                    disabled: d || f,
                    ...h && p.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                    ...g
                  }
                ),
                O()
              ] }),
              /* @__PURE__ */ r.jsxs(
                "button",
                {
                  className: "nhsuk-header__search-submit",
                  type: "submit",
                  disabled: d || f || e !== "form" && T.length < $,
                  ...m,
                  children: [
                    f ? H() : J(),
                    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
                  ]
                }
              )
            ]
          }
        ),
        W()
      ]
    }
  );
}, Vi = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: d = {},
  ...u
}) => {
  const [f, h] = ze(!1), [p, b] = ze(!1), [g, m] = ze(i?.items?.length || 0), [I, L] = ze(!1), [$, N] = ze(!1), x = We(null), _ = We(null), M = We(!1);
  Qe(() => {
    typeof window > "u" || N(!0);
  }, []), Qe(() => {
    if (typeof document > "u") return;
    const T = (P) => {
      P.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [f]);
  const w = We(null), y = me(() => {
    if (!$ || !i?.items || i.items.length === 0 || M.current) return;
    const T = x.current, P = _.current;
    if (!T || !P) return;
    M.current = !0, T.classList.add("nhsuk-header__navigation-container--measuring");
    const k = T.clientWidth, S = Array.from(P.children);
    if (!S.length) {
      T.classList.remove("nhsuk-header__navigation-container--measuring"), M.current = !1;
      return;
    }
    if (w.current == null) {
      const R = document.createElement("button");
      R.type = "button", R.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", R.style.position = "absolute", R.style.visibility = "hidden", R.style.pointerEvents = "none", R.innerHTML = "<span>More</span>", T.appendChild(R), w.current = R.getBoundingClientRect().width || 104, T.removeChild(R);
    }
    const E = w.current + 16;
    let F = 0, z = 0;
    const J = window.getComputedStyle(T), H = parseFloat(J.paddingLeft) || 0, O = parseFloat(J.paddingRight) || 0;
    let W = H + O;
    for (const R of S) {
      const ne = R.getBoundingClientRect().width;
      if (F + ne + E + W > k) break;
      F += ne, z += 1;
    }
    const B = z < i.items.length, ee = B ? z : i.items.length;
    b((R) => R === B ? R : B), m((R) => R === ee ? R : ee), T.classList.remove("nhsuk-header__navigation-container--measuring"), M.current = !1;
  }, [$, i?.items]);
  Qe(() => {
    if (!$) return;
    const T = x.current;
    if (!T) return;
    let P = null;
    const k = () => {
      P == null && (P = window.requestAnimationFrame(() => {
        P = null, y();
      }));
    };
    y();
    const S = new ResizeObserver(() => k());
    return S.observe(T), _.current && S.observe(_.current), () => {
      P != null && window.cancelAnimationFrame(P), S.disconnect();
    };
  }, [$, y]), Qe(() => {
    $ && y();
  }, [i?.items?.length, $, y]);
  const v = (T) => {
    T && (T.preventDefault(), T.stopPropagation());
    const P = !f;
    h(P), L(P);
  }, j = (() => {
    try {
      return Jd();
    } catch {
      return;
    }
  })();
  return qd(
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
      attributes: d,
      ...u
    },
    {
      variant: "client",
      isClient: $,
      menuOpen: f,
      showMoreButton: p,
      visibleItems: g,
      dropdownVisible: I,
      toggleMenu: v,
      navContainerRef: x,
      navListRef: _,
      // Provide interactive search node for client build only
      searchNode: o ? /* @__PURE__ */ r.jsx(Xd, { ...o }) : null,
      brand: j?.brand
    }
  );
};
function Kd(e, { variant: t, isClient: n }) {
  const {
    className: a,
    logo: o = {},
    service: s = {},
    serviceName: i,
    organisation: l,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: c,
    navigation: d,
    containerClasses: u,
    variant: f = "default",
    attributes: h = {},
    maxVisibleItems: p,
    // deprecated (ignored)
    responsiveNavigation: b = !0,
    ...g
  } = e;
  "maxVisibleItems" in g && delete g.maxVisibleItems;
  const m = {
    ...s,
    text: s?.text ?? i
  }, I = m.href && !o.href || m.href && m.href === o.href, L = I ? m.href : o.href, $ = we(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    a
  ), N = we("nhsuk-header__container", u), x = we(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": d?.white,
      "nhsuk-header__navigation--justified": d?.justified
    },
    d?.className
  ), _ = () => /* @__PURE__ */ r.jsxs(
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
  ), M = () => o.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: o.src,
      width: "280",
      alt: o.ariaLabel || "NHS"
    }
  ) : _(), w = () => l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, y = (k, S) => k ? S ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: S, children: k }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: k }) : null, v = (k) => k.active || k.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: k.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text }) : k.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text, j = d?.items && !b, T = j ? [] : d?.items, P = j ? d.items : [];
  return /* @__PURE__ */ r.jsxs("header", { className: $, role: "banner", "data-module": "nhsuk-header", ...h, ...g, children: [
    /* @__PURE__ */ r.jsxs("div", { className: N, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
        L ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: L, children: [
          M(),
          w(),
          I && y(m.text)
        ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          M(),
          w(),
          I && y(m.text)
        ] }),
        m.text && !I && y(m.text, m.href)
      ] }),
      /* @__PURE__ */ r.jsx(Ei, { ...c, variant: f === "white" ? "white" : "default" })
    ] }),
    d && d.items && d.items.length > 0 && /* @__PURE__ */ r.jsx("nav", { className: x, "aria-label": d.ariaLabel || "Menu", children: /* @__PURE__ */ r.jsx(
      "div",
      {
        className: we(
          "nhsuk-header_navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--ssr": !n
          },
          u
        ),
        children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__navigation-list", children: (T || []).map((k, S) => /* @__PURE__ */ r.jsx(
          "li",
          {
            className: we("nhsuk-header__navigation-item", {
              "nhsuk-header__navigation-item--current": k.active || k.current
            }, k.className),
            ...k.attributes || {},
            children: /* @__PURE__ */ r.jsx(
              "a",
              {
                className: "nhsuk-header__navigation-link",
                href: k.href,
                ...k.active || k.current ? { "aria-current": k.current ? "page" : "true" } : {},
                children: v(k)
              }
            )
          },
          S
        )) })
      }
    ) }),
    j && P.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: P.map((k, S) => /* @__PURE__ */ r.jsx(
      "li",
      {
        className: we("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": k.active || k.current
        }),
        children: /* @__PURE__ */ r.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: k.href,
            ...k.active || k.current ? { "aria-current": k.current ? "page" : "true" } : {},
            children: v(k)
          }
        )
      },
      `overflow-server-${S}`
    )) }) })
  ] });
}
const Oy = (e) => Kd(e, {
  variant: "server",
  isClient: !1
}), Qd = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: n = "",
  text: a,
  html: o,
  imageURL: s,
  containerClasses: i = "",
  classes: l = "",
  children: c,
  ...d
}) => {
  const u = [
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
  ].filter(Boolean).join(" "), p = c || e || a || o, b = () => {
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
      className: u,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...d,
      children: [
        s && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: p && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          b(),
          c || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && p && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          b(),
          c || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Qd.displayName = "Hero";
const Zi = ({
  className: e,
  links: t = [],
  linksColumn2: n,
  linksColumn3: a,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: c,
  footerStyle: d,
  containerStyle: u
}) => {
  const f = (p, b = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: we("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": b
      }),
      children: /* @__PURE__ */ r.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: p.URL,
          target: p.newWindow ? "_blank" : void 0,
          rel: p.newWindow ? "noopener noreferrer" : void 0,
          children: p.label
        }
      )
    },
    `${p.URL}-${p.label}`
  ), h = !!(n || a);
  return /* @__PURE__ */ r.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...c }, children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: we("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: we("nhsuk-footer", e), style: d, children: h ? (
            // Multi-column layout
            /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: t.map((p) => f(p)) }),
              n && n.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: n.map((p) => f(p)) }),
              a && a.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: a.map((p) => f(p)) }),
              o && o.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((p) => f(p)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((p) => f(p, !0)),
              (n || []).map((p) => f(p, !0)),
              (a || []).map((p) => f(p, !0)),
              (o || []).map((p) => f(p, !0))
            ] })
          ) }),
          !h && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    h && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function Sr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function eu(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Go(e) {
  let t, n, a;
  e.length !== 2 ? (t = Sr, n = (l, c) => Sr(e(l), c), a = (l, c) => e(l) - c) : (t = e === Sr || e === eu ? e : tu, n = e, a = e);
  function o(l, c, d = 0, u = l.length) {
    if (d < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = d + u >>> 1;
        n(l[f], c) < 0 ? d = f + 1 : u = f;
      } while (d < u);
    }
    return d;
  }
  function s(l, c, d = 0, u = l.length) {
    if (d < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = d + u >>> 1;
        n(l[f], c) <= 0 ? d = f + 1 : u = f;
      } while (d < u);
    }
    return d;
  }
  function i(l, c, d = 0, u = l.length) {
    const f = o(l, c, d, u - 1);
    return f > d && a(l[f - 1], c) > -a(l[f], c) ? f - 1 : f;
  }
  return { left: o, center: i, right: s };
}
function tu() {
  return 0;
}
function nu(e) {
  return e === null ? NaN : +e;
}
const ru = Go(Sr), au = ru.right;
Go(nu).center;
function qi(e, t) {
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
class ys extends Map {
  constructor(t, n = iu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(vs(this, t));
  }
  has(t) {
    return super.has(vs(this, t));
  }
  set(t, n) {
    return super.set(ou(this, t), n);
  }
  delete(t) {
    return super.delete(su(this, t));
  }
}
function vs({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function ou({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function su({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function iu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const lu = Math.sqrt(50), cu = Math.sqrt(10), du = Math.sqrt(2);
function Mr(e, t, n) {
  const a = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= lu ? 10 : s >= cu ? 5 : s >= du ? 2 : 1;
  let l, c, d;
  return o < 0 ? (d = Math.pow(10, -o) / i, l = Math.round(e * d), c = Math.round(t * d), l / d < e && ++l, c / d > t && --c, d = -d) : (d = Math.pow(10, o) * i, l = Math.round(e / d), c = Math.round(t / d), l * d < e && ++l, c * d > t && --c), c < l && 0.5 <= n && n < 2 ? Mr(e, t, n * 2) : [l, c, d];
}
function uu(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, s, i] = a ? Mr(t, e, n) : Mr(e, t, n);
  if (!(s >= o)) return [];
  const l = s - o + 1, c = new Array(l);
  if (a)
    if (i < 0) for (let d = 0; d < l; ++d) c[d] = (s - d) / -i;
    else for (let d = 0; d < l; ++d) c[d] = (s - d) * i;
  else if (i < 0) for (let d = 0; d < l; ++d) c[d] = (o + d) / -i;
  else for (let d = 0; d < l; ++d) c[d] = (o + d) * i;
  return c;
}
function to(e, t, n) {
  return t = +t, e = +e, n = +n, Mr(e, t, n)[2];
}
function no(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, o = a ? to(t, e, n) : to(e, t, n);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function fu(e, t, n) {
  e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var a = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, s = new Array(o); ++a < o; )
    s[a] = e + a * n;
  return s;
}
function va(e, t) {
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
const ws = Symbol("implicit");
function Ji() {
  var e = new ys(), t = [], n = [], a = ws;
  function o(s) {
    let i = e.get(s);
    if (i === void 0) {
      if (a !== ws) return a;
      e.set(s, i = t.push(s) - 1);
    }
    return n[i % n.length];
  }
  return o.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new ys();
    for (const i of s)
      e.has(i) || e.set(i, t.push(i) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (n = Array.from(s), o) : n.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (a = s, o) : a;
  }, o.copy = function() {
    return Ji(t, n).unknown(a);
  }, va.apply(o, arguments), o;
}
function Xi() {
  var e = Ji().unknown(void 0), t = e.domain, n = e.range, a = 0, o = 1, s, i, l = !1, c = 0, d = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var h = t().length, p = o < a, b = p ? o : a, g = p ? a : o;
    s = (g - b) / Math.max(1, h - c + d * 2), l && (s = Math.floor(s)), b += (g - b - s * (h - c)) * u, i = s * (1 - c), l && (b = Math.round(b), i = Math.round(i));
    var m = fu(h).map(function(I) {
      return b + s * I;
    });
    return n(p ? m.reverse() : m);
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
    return arguments.length ? (c = Math.min(1, d = +h), f()) : c;
  }, e.paddingInner = function(h) {
    return arguments.length ? (c = Math.min(1, h), f()) : c;
  }, e.paddingOuter = function(h) {
    return arguments.length ? (d = +h, f()) : d;
  }, e.align = function(h) {
    return arguments.length ? (u = Math.max(0, Math.min(1, h)), f()) : u;
  }, e.copy = function() {
    return Xi(t(), [a, o]).round(l).paddingInner(c).paddingOuter(d).align(u);
  }, va.apply(f(), arguments);
}
function Yo(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ki(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function ir() {
}
var Kn = 0.7, Ir = 1 / Kn, Dn = "\\s*([+-]?\\d+)\\s*", Qn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ft = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", hu = /^#([0-9a-f]{3,8})$/, pu = new RegExp(`^rgb\\(${Dn},${Dn},${Dn}\\)$`), mu = new RegExp(`^rgb\\(${Ft},${Ft},${Ft}\\)$`), gu = new RegExp(`^rgba\\(${Dn},${Dn},${Dn},${Qn}\\)$`), xu = new RegExp(`^rgba\\(${Ft},${Ft},${Ft},${Qn}\\)$`), bu = new RegExp(`^hsl\\(${Qn},${Ft},${Ft}\\)$`), yu = new RegExp(`^hsla\\(${Qn},${Ft},${Ft},${Qn}\\)$`), Ss = {
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
Yo(ir, er, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: _s,
  // Deprecated! Use color.formatHex.
  formatHex: _s,
  formatHex8: vu,
  formatHsl: wu,
  formatRgb: ks,
  toString: ks
});
function _s() {
  return this.rgb().formatHex();
}
function vu() {
  return this.rgb().formatHex8();
}
function wu() {
  return Qi(this).formatHsl();
}
function ks() {
  return this.rgb().formatRgb();
}
function er(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = hu.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Cs(t) : n === 3 ? new kt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? gr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? gr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = pu.exec(e)) ? new kt(t[1], t[2], t[3], 1) : (t = mu.exec(e)) ? new kt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = gu.exec(e)) ? gr(t[1], t[2], t[3], t[4]) : (t = xu.exec(e)) ? gr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = bu.exec(e)) ? Ms(t[1], t[2] / 100, t[3] / 100, 1) : (t = yu.exec(e)) ? Ms(t[1], t[2] / 100, t[3] / 100, t[4]) : Ss.hasOwnProperty(e) ? Cs(Ss[e]) : e === "transparent" ? new kt(NaN, NaN, NaN, 0) : null;
}
function Cs(e) {
  return new kt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function gr(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new kt(e, t, n, a);
}
function Su(e) {
  return e instanceof ir || (e = er(e)), e ? (e = e.rgb(), new kt(e.r, e.g, e.b, e.opacity)) : new kt();
}
function ro(e, t, n, a) {
  return arguments.length === 1 ? Su(e) : new kt(e, t, n, a ?? 1);
}
function kt(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
Yo(kt, ro, Ki(ir, {
  brighter(e) {
    return e = e == null ? Ir : Math.pow(Ir, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Kn : Math.pow(Kn, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new kt(hn(this.r), hn(this.g), hn(this.b), Dr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ns,
  // Deprecated! Use color.formatHex.
  formatHex: Ns,
  formatHex8: _u,
  formatRgb: js,
  toString: js
}));
function Ns() {
  return `#${fn(this.r)}${fn(this.g)}${fn(this.b)}`;
}
function _u() {
  return `#${fn(this.r)}${fn(this.g)}${fn(this.b)}${fn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function js() {
  const e = Dr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${hn(this.r)}, ${hn(this.g)}, ${hn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Dr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function hn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function fn(e) {
  return e = hn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ms(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Dt(e, t, n, a);
}
function Qi(e) {
  if (e instanceof Dt) return new Dt(e.h, e.s, e.l, e.opacity);
  if (e instanceof ir || (e = er(e)), !e) return new Dt();
  if (e instanceof Dt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), s = Math.max(t, n, a), i = NaN, l = s - o, c = (s + o) / 2;
  return l ? (t === s ? i = (n - a) / l + (n < a) * 6 : n === s ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= c < 0.5 ? s + o : 2 - s - o, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new Dt(i, l, c, e.opacity);
}
function ku(e, t, n, a) {
  return arguments.length === 1 ? Qi(e) : new Dt(e, t, n, a ?? 1);
}
function Dt(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Yo(Dt, ku, Ki(ir, {
  brighter(e) {
    return e = e == null ? Ir : Math.pow(Ir, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Kn : Math.pow(Kn, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - a;
    return new kt(
      Fa(e >= 240 ? e - 240 : e + 120, o, a),
      Fa(e, o, a),
      Fa(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Dt(Is(this.h), xr(this.s), xr(this.l), Dr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Dr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Is(this.h)}, ${xr(this.s) * 100}%, ${xr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Is(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function xr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Fa(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Vo = (e) => () => e;
function Cu(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Nu(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function ju(e) {
  return (e = +e) == 1 ? el : function(t, n) {
    return n - t ? Nu(t, n, e) : Vo(isNaN(t) ? n : t);
  };
}
function el(e, t) {
  var n = t - e;
  return n ? Cu(e, n) : Vo(isNaN(e) ? t : e);
}
const Ds = (function e(t) {
  var n = ju(t);
  function a(o, s) {
    var i = n((o = ro(o)).r, (s = ro(s)).r), l = n(o.g, s.g), c = n(o.b, s.b), d = el(o.opacity, s.opacity);
    return function(u) {
      return o.r = i(u), o.g = l(u), o.b = c(u), o.opacity = d(u), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Mu(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Iu(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Du(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, o = new Array(a), s = new Array(n), i;
  for (i = 0; i < a; ++i) o[i] = Zo(e[i], t[i]);
  for (; i < n; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Tu(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function Tr(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Lu(e, t) {
  var n = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Zo(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in n) a[o] = n[o](s);
    return a;
  };
}
var ao = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Pa = new RegExp(ao.source, "g");
function $u(e) {
  return function() {
    return e;
  };
}
function Au(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Eu(e, t) {
  var n = ao.lastIndex = Pa.lastIndex = 0, a, o, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = ao.exec(e)) && (o = Pa.exec(t)); )
    (s = o.index) > n && (s = t.slice(n, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, c.push({ i, x: Tr(a, o) })), n = Pa.lastIndex;
  return n < t.length && (s = t.slice(n), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? Au(c[0].x) : $u(t) : (t = c.length, function(d) {
    for (var u = 0, f; u < t; ++u) l[(f = c[u]).i] = f.x(d);
    return l.join("");
  });
}
function Zo(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Vo(t) : (n === "number" ? Tr : n === "string" ? (a = er(t)) ? (t = a, Ds) : Eu : t instanceof er ? Ds : t instanceof Date ? Tu : Iu(t) ? Mu : Array.isArray(t) ? Du : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Lu : Tr)(e, t);
}
function Fu(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Pu(e) {
  return function() {
    return e;
  };
}
function Ru(e) {
  return +e;
}
var Ts = [0, 1];
function Nn(e) {
  return e;
}
function oo(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Pu(isNaN(t) ? NaN : 0.5);
}
function Bu(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Hu(e, t, n) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = oo(o, a), s = n(i, s)) : (a = oo(a, o), s = n(s, i)), function(l) {
    return s(a(l));
  };
}
function zu(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = oo(e[i], e[i + 1]), s[i] = n(t[i], t[i + 1]);
  return function(l) {
    var c = au(e, l, 1, a) - 1;
    return s[c](o[c](l));
  };
}
function tl(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ou() {
  var e = Ts, t = Ts, n = Zo, a, o, s, i = Nn, l, c, d;
  function u() {
    var h = Math.min(e.length, t.length);
    return i !== Nn && (i = Bu(e[0], e[h - 1])), l = h > 2 ? zu : Hu, c = d = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? s : (c || (c = l(e.map(a), t, n)))(a(i(h)));
  }
  return f.invert = function(h) {
    return i(o((d || (d = l(t, e.map(a), Tr)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, Ru), u()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), u()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = Fu, u();
  }, f.clamp = function(h) {
    return arguments.length ? (i = h ? !0 : Nn, u()) : i !== Nn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, u()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (s = h, f) : s;
  }, function(h, p) {
    return a = h, o = p, u();
  };
}
function nl() {
  return Ou()(Nn, Nn);
}
function Uu(e) {
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
function En(e) {
  return e = Lr(Math.abs(e)), e ? e[1] : NaN;
}
function Wu(e, t) {
  return function(n, a) {
    for (var o = n.length, s = [], i = 0, l = e[0], c = 0; o > 0 && l > 0 && (c + l + 1 > a && (l = Math.max(1, a - c)), s.push(n.substring(o -= l, o + l)), !((c += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function Gu(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Yu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function $r(e) {
  if (!(t = Yu.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new qo({
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
$r.prototype = qo.prototype;
function qo(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
qo.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Vu(e) {
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
var rl;
function Zu(e, t) {
  var n = Lr(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1], s = o - (rl = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = a.length;
  return s === i ? a : s > i ? a + new Array(s - i + 1).join("0") : s > 0 ? a.slice(0, s) + "." + a.slice(s) : "0." + new Array(1 - s).join("0") + Lr(e, Math.max(0, t + s - 1))[0];
}
function Ls(e, t) {
  var n = Lr(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const $s = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Uu,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ls(e * 100, t),
  r: Ls,
  s: Zu,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function As(e) {
  return e;
}
var Es = Array.prototype.map, Fs = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function qu(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? As : Wu(Es.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? As : Gu(Es.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function d(f) {
    f = $r(f);
    var h = f.fill, p = f.align, b = f.sign, g = f.symbol, m = f.zero, I = f.width, L = f.comma, $ = f.precision, N = f.trim, x = f.type;
    x === "n" ? (L = !0, x = "g") : $s[x] || ($ === void 0 && ($ = 12), N = !0, x = "g"), (m || h === "0" && p === "=") && (m = !0, h = "0", p = "=");
    var _ = g === "$" ? n : g === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "", M = g === "$" ? a : /[%p]/.test(x) ? i : "", w = $s[x], y = /[defgprs%]/.test(x);
    $ = $ === void 0 ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
    function v(j) {
      var T = _, P = M, k, S, E;
      if (x === "c")
        P = w(j) + P, j = "";
      else {
        j = +j;
        var F = j < 0 || 1 / j < 0;
        if (j = isNaN(j) ? c : w(Math.abs(j), $), N && (j = Vu(j)), F && +j == 0 && b !== "+" && (F = !1), T = (F ? b === "(" ? b : l : b === "-" || b === "(" ? "" : b) + T, P = (x === "s" ? Fs[8 + rl / 3] : "") + P + (F && b === "(" ? ")" : ""), y) {
          for (k = -1, S = j.length; ++k < S; )
            if (E = j.charCodeAt(k), 48 > E || E > 57) {
              P = (E === 46 ? o + j.slice(k + 1) : j.slice(k)) + P, j = j.slice(0, k);
              break;
            }
        }
      }
      L && !m && (j = t(j, 1 / 0));
      var z = T.length + j.length + P.length, J = z < I ? new Array(I - z + 1).join(h) : "";
      switch (L && m && (j = t(J + j, J.length ? I - P.length : 1 / 0), J = ""), p) {
        case "<":
          j = T + j + P + J;
          break;
        case "=":
          j = T + J + j + P;
          break;
        case "^":
          j = J.slice(0, z = J.length >> 1) + T + j + P + J.slice(z);
          break;
        default:
          j = J + T + j + P;
          break;
      }
      return s(j);
    }
    return v.toString = function() {
      return f + "";
    }, v;
  }
  function u(f, h) {
    var p = d((f = $r(f), f.type = "f", f)), b = Math.max(-8, Math.min(8, Math.floor(En(h) / 3))) * 3, g = Math.pow(10, -b), m = Fs[8 + b / 3];
    return function(I) {
      return p(g * I) + m;
    };
  }
  return {
    format: d,
    formatPrefix: u
  };
}
var br, al, ol;
Ju({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ju(e) {
  return br = qu(e), al = br.format, ol = br.formatPrefix, br;
}
function Xu(e) {
  return Math.max(0, -En(Math.abs(e)));
}
function Ku(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(En(t) / 3))) * 3 - En(Math.abs(e)));
}
function Qu(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, En(t) - En(e)) + 1;
}
function ef(e, t, n, a) {
  var o = no(e, t, n), s;
  switch (a = $r(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(s = Ku(o, i)) && (a.precision = s), ol(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(s = Qu(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = s - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(s = Xu(o)) && (a.precision = s - (a.type === "%") * 2);
      break;
    }
  }
  return al(a);
}
function tf(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return uu(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var o = t();
    return ef(o[0], o[o.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), o = 0, s = a.length - 1, i = a[o], l = a[s], c, d, u = 10;
    for (l < i && (d = i, i = l, l = d, d = o, o = s, s = d); u-- > 0; ) {
      if (d = to(i, l, n), d === c)
        return a[o] = i, a[s] = l, t(a);
      if (d > 0)
        i = Math.floor(i / d) * d, l = Math.ceil(l / d) * d;
      else if (d < 0)
        i = Math.ceil(i * d) / d, l = Math.floor(l * d) / d;
      else
        break;
      c = d;
    }
    return e;
  }, e;
}
function Ar() {
  var e = nl();
  return e.copy = function() {
    return tl(e, Ar());
  }, va.apply(e, arguments), tf(e);
}
function nf(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, o = e[n], s = e[a], i;
  return s < o && (i = n, n = a, a = i, i = o, o = s, s = i), e[n] = t.floor(o), e[a] = t.ceil(s), e;
}
const Ra = /* @__PURE__ */ new Date(), Ba = /* @__PURE__ */ new Date();
function pt(e, t, n, a) {
  function o(s) {
    return e(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return o.floor = (s) => (e(s = /* @__PURE__ */ new Date(+s)), s), o.ceil = (s) => (e(s = new Date(s - 1)), t(s, 1), e(s), s), o.round = (s) => {
    const i = o(s), l = o.ceil(s);
    return s - i < l - s ? i : l;
  }, o.offset = (s, i) => (t(s = /* @__PURE__ */ new Date(+s), i == null ? 1 : Math.floor(i)), s), o.range = (s, i, l) => {
    const c = [];
    if (s = o.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < i) || !(l > 0)) return c;
    let d;
    do
      c.push(d = /* @__PURE__ */ new Date(+s)), t(s, l), e(s);
    while (d < s && s < i);
    return c;
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
  }), n && (o.count = (s, i) => (Ra.setTime(+s), Ba.setTime(+i), e(Ra), e(Ba), Math.floor(n(Ra, Ba))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const Er = pt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Er.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? pt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Er);
Er.range;
const qt = 1e3, Mt = qt * 60, Jt = Mt * 60, Kt = Jt * 24, Jo = Kt * 7, Ps = Kt * 30, Ha = Kt * 365, jn = pt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * qt);
}, (e, t) => (t - e) / qt, (e) => e.getUTCSeconds());
jn.range;
const Xo = pt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * qt);
}, (e, t) => {
  e.setTime(+e + t * Mt);
}, (e, t) => (t - e) / Mt, (e) => e.getMinutes());
Xo.range;
const rf = pt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Mt);
}, (e, t) => (t - e) / Mt, (e) => e.getUTCMinutes());
rf.range;
const Ko = pt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * qt - e.getMinutes() * Mt);
}, (e, t) => {
  e.setTime(+e + t * Jt);
}, (e, t) => (t - e) / Jt, (e) => e.getHours());
Ko.range;
const af = pt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Jt);
}, (e, t) => (t - e) / Jt, (e) => e.getUTCHours());
af.range;
const lr = pt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Mt) / Kt,
  (e) => e.getDate() - 1
);
lr.range;
const Qo = pt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Kt, (e) => e.getUTCDate() - 1);
Qo.range;
const of = pt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Kt, (e) => Math.floor(e / Kt));
of.range;
function vn(e) {
  return pt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Mt) / Jo);
}
const wa = vn(0), Fr = vn(1), sf = vn(2), lf = vn(3), Fn = vn(4), cf = vn(5), df = vn(6);
wa.range;
Fr.range;
sf.range;
lf.range;
Fn.range;
cf.range;
df.range;
function wn(e) {
  return pt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Jo);
}
const sl = wn(0), Pr = wn(1), uf = wn(2), ff = wn(3), Pn = wn(4), hf = wn(5), pf = wn(6);
sl.range;
Pr.range;
uf.range;
ff.range;
Pn.range;
hf.range;
pf.range;
const tr = pt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
tr.range;
const mf = pt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
mf.range;
const Qt = pt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Qt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : pt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Qt.range;
const bn = pt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
bn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : pt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
bn.range;
function gf(e, t, n, a, o, s) {
  const i = [
    [jn, 1, qt],
    [jn, 5, 5 * qt],
    [jn, 15, 15 * qt],
    [jn, 30, 30 * qt],
    [s, 1, Mt],
    [s, 5, 5 * Mt],
    [s, 15, 15 * Mt],
    [s, 30, 30 * Mt],
    [o, 1, Jt],
    [o, 3, 3 * Jt],
    [o, 6, 6 * Jt],
    [o, 12, 12 * Jt],
    [a, 1, Kt],
    [a, 2, 2 * Kt],
    [n, 1, Jo],
    [t, 1, Ps],
    [t, 3, 3 * Ps],
    [e, 1, Ha]
  ];
  function l(d, u, f) {
    const h = u < d;
    h && ([d, u] = [u, d]);
    const p = f && typeof f.range == "function" ? f : c(d, u, f), b = p ? p.range(d, +u + 1) : [];
    return h ? b.reverse() : b;
  }
  function c(d, u, f) {
    const h = Math.abs(u - d) / f, p = Go(([, , m]) => m).right(i, h);
    if (p === i.length) return e.every(no(d / Ha, u / Ha, f));
    if (p === 0) return Er.every(Math.max(no(d, u, f), 1));
    const [b, g] = i[h / i[p - 1][2] < i[p][2] / h ? p - 1 : p];
    return b.every(g);
  }
  return [l, c];
}
const [xf, bf] = gf(Qt, tr, wa, lr, Ko, Xo);
function za(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Oa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Un(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function yf(e) {
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, d = Wn(o), u = Gn(o), f = Wn(s), h = Gn(s), p = Wn(i), b = Gn(i), g = Wn(l), m = Gn(l), I = Wn(c), L = Gn(c), $ = {
    a: F,
    A: z,
    b: J,
    B: H,
    c: null,
    d: Us,
    e: Us,
    f: Of,
    g: Kf,
    G: eh,
    H: Bf,
    I: Hf,
    j: zf,
    L: il,
    m: Uf,
    M: Wf,
    p: O,
    q: W,
    Q: Ys,
    s: Vs,
    S: Gf,
    u: Yf,
    U: Vf,
    V: Zf,
    w: qf,
    W: Jf,
    x: null,
    X: null,
    y: Xf,
    Y: Qf,
    Z: th,
    "%": Gs
  }, N = {
    a: B,
    A: ee,
    b: R,
    B: ne,
    c: null,
    d: Ws,
    e: Ws,
    f: oh,
    g: mh,
    G: xh,
    H: nh,
    I: rh,
    j: ah,
    L: cl,
    m: sh,
    M: ih,
    p: te,
    q: Z,
    Q: Ys,
    s: Vs,
    S: lh,
    u: ch,
    U: dh,
    V: uh,
    w: fh,
    W: hh,
    x: null,
    X: null,
    y: ph,
    Y: gh,
    Z: bh,
    "%": Gs
  }, x = {
    a: v,
    A: j,
    b: T,
    B: P,
    c: k,
    d: zs,
    e: zs,
    f: Ef,
    g: Hs,
    G: Bs,
    H: Os,
    I: Os,
    j: Tf,
    L: Af,
    m: Df,
    M: Lf,
    p: y,
    q: If,
    Q: Pf,
    s: Rf,
    S: $f,
    u: kf,
    U: Cf,
    V: Nf,
    w: _f,
    W: jf,
    x: S,
    X: E,
    y: Hs,
    Y: Bs,
    Z: Mf,
    "%": Ff
  };
  $.x = _(n, $), $.X = _(a, $), $.c = _(t, $), N.x = _(n, N), N.X = _(a, N), N.c = _(t, N);
  function _(X, re) {
    return function(de) {
      var Y = [], le = -1, se = 0, fe = X.length, ue, he, Ee;
      for (de instanceof Date || (de = /* @__PURE__ */ new Date(+de)); ++le < fe; )
        X.charCodeAt(le) === 37 && (Y.push(X.slice(se, le)), (he = Rs[ue = X.charAt(++le)]) != null ? ue = X.charAt(++le) : he = ue === "e" ? " " : "0", (Ee = re[ue]) && (ue = Ee(de, he)), Y.push(ue), se = le + 1);
      return Y.push(X.slice(se, le)), Y.join("");
    };
  }
  function M(X, re) {
    return function(de) {
      var Y = Un(1900, void 0, 1), le = w(Y, X, de += "", 0), se, fe;
      if (le != de.length) return null;
      if ("Q" in Y) return new Date(Y.Q);
      if ("s" in Y) return new Date(Y.s * 1e3 + ("L" in Y ? Y.L : 0));
      if (re && !("Z" in Y) && (Y.Z = 0), "p" in Y && (Y.H = Y.H % 12 + Y.p * 12), Y.m === void 0 && (Y.m = "q" in Y ? Y.q : 0), "V" in Y) {
        if (Y.V < 1 || Y.V > 53) return null;
        "w" in Y || (Y.w = 1), "Z" in Y ? (se = Oa(Un(Y.y, 0, 1)), fe = se.getUTCDay(), se = fe > 4 || fe === 0 ? Pr.ceil(se) : Pr(se), se = Qo.offset(se, (Y.V - 1) * 7), Y.y = se.getUTCFullYear(), Y.m = se.getUTCMonth(), Y.d = se.getUTCDate() + (Y.w + 6) % 7) : (se = za(Un(Y.y, 0, 1)), fe = se.getDay(), se = fe > 4 || fe === 0 ? Fr.ceil(se) : Fr(se), se = lr.offset(se, (Y.V - 1) * 7), Y.y = se.getFullYear(), Y.m = se.getMonth(), Y.d = se.getDate() + (Y.w + 6) % 7);
      } else ("W" in Y || "U" in Y) && ("w" in Y || (Y.w = "u" in Y ? Y.u % 7 : "W" in Y ? 1 : 0), fe = "Z" in Y ? Oa(Un(Y.y, 0, 1)).getUTCDay() : za(Un(Y.y, 0, 1)).getDay(), Y.m = 0, Y.d = "W" in Y ? (Y.w + 6) % 7 + Y.W * 7 - (fe + 5) % 7 : Y.w + Y.U * 7 - (fe + 6) % 7);
      return "Z" in Y ? (Y.H += Y.Z / 100 | 0, Y.M += Y.Z % 100, Oa(Y)) : za(Y);
    };
  }
  function w(X, re, de, Y) {
    for (var le = 0, se = re.length, fe = de.length, ue, he; le < se; ) {
      if (Y >= fe) return -1;
      if (ue = re.charCodeAt(le++), ue === 37) {
        if (ue = re.charAt(le++), he = x[ue in Rs ? re.charAt(le++) : ue], !he || (Y = he(X, de, Y)) < 0) return -1;
      } else if (ue != de.charCodeAt(Y++))
        return -1;
    }
    return Y;
  }
  function y(X, re, de) {
    var Y = d.exec(re.slice(de));
    return Y ? (X.p = u.get(Y[0].toLowerCase()), de + Y[0].length) : -1;
  }
  function v(X, re, de) {
    var Y = p.exec(re.slice(de));
    return Y ? (X.w = b.get(Y[0].toLowerCase()), de + Y[0].length) : -1;
  }
  function j(X, re, de) {
    var Y = f.exec(re.slice(de));
    return Y ? (X.w = h.get(Y[0].toLowerCase()), de + Y[0].length) : -1;
  }
  function T(X, re, de) {
    var Y = I.exec(re.slice(de));
    return Y ? (X.m = L.get(Y[0].toLowerCase()), de + Y[0].length) : -1;
  }
  function P(X, re, de) {
    var Y = g.exec(re.slice(de));
    return Y ? (X.m = m.get(Y[0].toLowerCase()), de + Y[0].length) : -1;
  }
  function k(X, re, de) {
    return w(X, t, re, de);
  }
  function S(X, re, de) {
    return w(X, n, re, de);
  }
  function E(X, re, de) {
    return w(X, a, re, de);
  }
  function F(X) {
    return i[X.getDay()];
  }
  function z(X) {
    return s[X.getDay()];
  }
  function J(X) {
    return c[X.getMonth()];
  }
  function H(X) {
    return l[X.getMonth()];
  }
  function O(X) {
    return o[+(X.getHours() >= 12)];
  }
  function W(X) {
    return 1 + ~~(X.getMonth() / 3);
  }
  function B(X) {
    return i[X.getUTCDay()];
  }
  function ee(X) {
    return s[X.getUTCDay()];
  }
  function R(X) {
    return c[X.getUTCMonth()];
  }
  function ne(X) {
    return l[X.getUTCMonth()];
  }
  function te(X) {
    return o[+(X.getUTCHours() >= 12)];
  }
  function Z(X) {
    return 1 + ~~(X.getUTCMonth() / 3);
  }
  return {
    format: function(X) {
      var re = _(X += "", $);
      return re.toString = function() {
        return X;
      }, re;
    },
    parse: function(X) {
      var re = M(X += "", !1);
      return re.toString = function() {
        return X;
      }, re;
    },
    utcFormat: function(X) {
      var re = _(X += "", N);
      return re.toString = function() {
        return X;
      }, re;
    },
    utcParse: function(X) {
      var re = M(X += "", !0);
      return re.toString = function() {
        return X;
      }, re;
    }
  };
}
var Rs = { "-": "", _: " ", 0: "0" }, gt = /^\s*\d+/, vf = /^%/, wf = /[\\^$*+?|[\]().{}]/g;
function et(e, t, n) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < n ? new Array(n - s + 1).join(t) + o : o);
}
function Sf(e) {
  return e.replace(wf, "\\$&");
}
function Wn(e) {
  return new RegExp("^(?:" + e.map(Sf).join("|") + ")", "i");
}
function Gn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function _f(e, t, n) {
  var a = gt.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function kf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function Cf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function Nf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function jf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function Bs(e, t, n) {
  var a = gt.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function Hs(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function Mf(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function If(e, t, n) {
  var a = gt.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function Df(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function zs(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function Tf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Os(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function Lf(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function $f(e, t, n) {
  var a = gt.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Af(e, t, n) {
  var a = gt.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function Ef(e, t, n) {
  var a = gt.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Ff(e, t, n) {
  var a = vf.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Pf(e, t, n) {
  var a = gt.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Rf(e, t, n) {
  var a = gt.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Us(e, t) {
  return et(e.getDate(), t, 2);
}
function Bf(e, t) {
  return et(e.getHours(), t, 2);
}
function Hf(e, t) {
  return et(e.getHours() % 12 || 12, t, 2);
}
function zf(e, t) {
  return et(1 + lr.count(Qt(e), e), t, 3);
}
function il(e, t) {
  return et(e.getMilliseconds(), t, 3);
}
function Of(e, t) {
  return il(e, t) + "000";
}
function Uf(e, t) {
  return et(e.getMonth() + 1, t, 2);
}
function Wf(e, t) {
  return et(e.getMinutes(), t, 2);
}
function Gf(e, t) {
  return et(e.getSeconds(), t, 2);
}
function Yf(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Vf(e, t) {
  return et(wa.count(Qt(e) - 1, e), t, 2);
}
function ll(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Fn(e) : Fn.ceil(e);
}
function Zf(e, t) {
  return e = ll(e), et(Fn.count(Qt(e), e) + (Qt(e).getDay() === 4), t, 2);
}
function qf(e) {
  return e.getDay();
}
function Jf(e, t) {
  return et(Fr.count(Qt(e) - 1, e), t, 2);
}
function Xf(e, t) {
  return et(e.getFullYear() % 100, t, 2);
}
function Kf(e, t) {
  return e = ll(e), et(e.getFullYear() % 100, t, 2);
}
function Qf(e, t) {
  return et(e.getFullYear() % 1e4, t, 4);
}
function eh(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Fn(e) : Fn.ceil(e), et(e.getFullYear() % 1e4, t, 4);
}
function th(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + et(t / 60 | 0, "0", 2) + et(t % 60, "0", 2);
}
function Ws(e, t) {
  return et(e.getUTCDate(), t, 2);
}
function nh(e, t) {
  return et(e.getUTCHours(), t, 2);
}
function rh(e, t) {
  return et(e.getUTCHours() % 12 || 12, t, 2);
}
function ah(e, t) {
  return et(1 + Qo.count(bn(e), e), t, 3);
}
function cl(e, t) {
  return et(e.getUTCMilliseconds(), t, 3);
}
function oh(e, t) {
  return cl(e, t) + "000";
}
function sh(e, t) {
  return et(e.getUTCMonth() + 1, t, 2);
}
function ih(e, t) {
  return et(e.getUTCMinutes(), t, 2);
}
function lh(e, t) {
  return et(e.getUTCSeconds(), t, 2);
}
function ch(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function dh(e, t) {
  return et(sl.count(bn(e) - 1, e), t, 2);
}
function dl(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Pn(e) : Pn.ceil(e);
}
function uh(e, t) {
  return e = dl(e), et(Pn.count(bn(e), e) + (bn(e).getUTCDay() === 4), t, 2);
}
function fh(e) {
  return e.getUTCDay();
}
function hh(e, t) {
  return et(Pr.count(bn(e) - 1, e), t, 2);
}
function ph(e, t) {
  return et(e.getUTCFullYear() % 100, t, 2);
}
function mh(e, t) {
  return e = dl(e), et(e.getUTCFullYear() % 100, t, 2);
}
function gh(e, t) {
  return et(e.getUTCFullYear() % 1e4, t, 4);
}
function xh(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Pn(e) : Pn.ceil(e), et(e.getUTCFullYear() % 1e4, t, 4);
}
function bh() {
  return "+0000";
}
function Gs() {
  return "%";
}
function Ys(e) {
  return +e;
}
function Vs(e) {
  return Math.floor(+e / 1e3);
}
var kn, ul;
yh({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function yh(e) {
  return kn = yf(e), ul = kn.format, kn.parse, kn.utcFormat, kn.utcParse, kn;
}
function vh(e) {
  return new Date(e);
}
function wh(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function fl(e, t, n, a, o, s, i, l, c, d) {
  var u = nl(), f = u.invert, h = u.domain, p = d(".%L"), b = d(":%S"), g = d("%I:%M"), m = d("%I %p"), I = d("%a %d"), L = d("%b %d"), $ = d("%B"), N = d("%Y");
  function x(_) {
    return (c(_) < _ ? p : l(_) < _ ? b : i(_) < _ ? g : s(_) < _ ? m : a(_) < _ ? o(_) < _ ? I : L : n(_) < _ ? $ : N)(_);
  }
  return u.invert = function(_) {
    return new Date(f(_));
  }, u.domain = function(_) {
    return arguments.length ? h(Array.from(_, wh)) : h().map(vh);
  }, u.ticks = function(_) {
    var M = h();
    return e(M[0], M[M.length - 1], _ ?? 10);
  }, u.tickFormat = function(_, M) {
    return M == null ? x : d(M);
  }, u.nice = function(_) {
    var M = h();
    return (!_ || typeof _.range != "function") && (_ = t(M[0], M[M.length - 1], _ ?? 10)), _ ? h(nf(M, _)) : u;
  }, u.copy = function() {
    return tl(u, fl(e, t, n, a, o, s, i, l, c, d));
  }, u;
}
function es() {
  return va.apply(fl(xf, bf, Qt, tr, wa, lr, Ko, Xo, jn, ul).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Sh({
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
  const d = We(null), [u, f] = ze(!1), [h, p] = ze(!1), b = t(e.start), g = t(e.end), m = Math.max(g - b, 20), I = () => {
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
  }, L = e.progress ? m * e.progress / 100 : 0, $ = () => {
    n?.(e);
  }, N = () => {
    a?.(e);
  }, x = (T) => {
    T.key === "Enter" ? (T.preventDefault(), $()) : T.key === " " && (T.preventDefault(), N());
  }, _ = () => {
    f(!0);
  }, M = () => {
    f(!1);
  }, w = () => {
    p(!0), l?.();
  }, y = () => {
    p(!1);
  }, v = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (h || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), j = {
    "--task-left": `${b}px`,
    "--task-width": `${m}px`,
    "--task-color": I(),
    left: `${b}px`,
    width: `${m}px`,
    backgroundColor: I()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: d,
      "data-task-index": s,
      className: v,
      style: j,
      onClick: $,
      onDoubleClick: N,
      onKeyDown: x,
      onMouseDown: _,
      onMouseUp: M,
      onFocus: w,
      onBlur: y,
      "aria-label": c || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${L}px` }
          }
        ),
        /* @__PURE__ */ r.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function _h({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let p = e.getTime(); p <= t.getTime(); p += 864e5)
    a.push(new Date(p));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = ze(-1), c = We(null), d = (p) => {
    if (p.key === "ArrowLeft") {
      p.preventDefault();
      const b = Math.max(0, i === -1 ? 0 : i - 1);
      l(b), h(b);
    } else if (p.key === "ArrowRight") {
      p.preventDefault();
      const b = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(b), h(b);
    } else if (p.key === "ArrowDown")
      p.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (p.key === "Home")
      p.preventDefault(), l(0), h(0);
    else if (p.key === "End") {
      p.preventDefault();
      const b = a.length - 1;
      l(b), h(b);
    }
  }, u = (p) => {
    if (p.key === "ArrowDown")
      p.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .resource-label") : null)?.focus();
    else if (p.key === "ArrowRight") {
      p.preventDefault();
      const b = c.current;
      b && b.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => h(0), 0));
  }, h = (p) => {
    const b = c.current?.querySelector(`[data-date-index="${p}"]`);
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
            onKeyDown: u,
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
            onKeyDown: d,
            onFocus: f,
            children: a.map((p, b) => {
              const g = p.getTime() === s.getTime(), m = i === b;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": b,
                  className: `date-column ${g ? "today" : ""} ${m ? "focused" : ""}`,
                  tabIndex: m ? 0 : -1,
                  role: "button",
                  "aria-label": `${p.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${g ? " (Today)" : ""}`,
                  onFocus: () => l(b),
                  onKeyDown: d,
                  children: p.toLocaleDateString("en-GB", {
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
function kh({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, c] = ze(!1), [d, u] = ze(-1), f = We(null);
  Qe(() => {
    l && d >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${d}"]`)?.focus();
    }, 0);
  }, [l, d, t.length]);
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
          t.length > 0 && (g.preventDefault(), c(!0), u(0));
          break;
      }
      return;
    }
    switch (g.key) {
      case "ArrowLeft":
        g.preventDefault();
        const m = Math.max(0, d - 1);
        u(m), f.current?.querySelector(`[data-task-index="${m}"]`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault();
        const L = Math.min(t.length - 1, d + 1);
        u(L), f.current?.querySelector(`[data-task-index="${L}"]`)?.focus();
        break;
      case "Enter":
        g.preventDefault(), d >= 0 && a?.(t[d]);
        break;
      case " ":
        g.preventDefault(), d >= 0 && o?.(t[d]);
        break;
      case "Escape":
        g.preventDefault(), c(!1), u(-1), f.current?.focus();
        break;
    }
  }, p = (g) => {
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
    l && u(g);
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
            onKeyDown: p,
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
              l || u(-1);
            },
            children: t.map((g, m) => /* @__PURE__ */ r.jsx(
              Sh,
              {
                task: g,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && d === m,
                taskIndex: m,
                tabIndex: l && d === m ? 0 : -1,
                onFocus: () => b(m)
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
function Uy({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = We(null), [l, c] = ze(800), d = Ae(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const g = new Date(n);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : g;
  }, [n]), u = Ae(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const g = new Date(a);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : g;
  }, [a]), f = Ae(() => Math.ceil((u.getTime() - d.getTime()) / 864e5) + 1, [d, u]);
  Qe(() => {
    if (!i.current || typeof window > "u") return;
    const g = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!g) return;
    const m = new g((I) => {
      const L = I[0];
      L && c(Math.max(L.contentRect.width - 220, 400));
    });
    return m.observe(i.current), () => m.disconnect();
  }, []);
  const h = Ae(
    () => es().domain([d, u]).range([0, l]),
    [d, u, l]
  ), p = Ae(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach((m) => {
      const I = g.get(m.resourceId) || [];
      I.push(m), g.set(m.resourceId, I);
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
        /* @__PURE__ */ r.jsx(_h, { viewStart: d, viewEnd: u, dateCount: f }),
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
            children: e.map((g, m) => /* @__PURE__ */ r.jsx(
              kh,
              {
                resource: g,
                tasks: p.get(g.id) || [],
                scale: h,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: m,
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
const Rr = ({
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
) }), Ch = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? Ke.Children.toArray(t).filter(
    (m) => Ke.isValidElement(m) && (m.type === Rr || m.type?.displayName === "BreadcrumbItem")
  ).map((m) => ({
    text: typeof m.props.children == "string" ? m.props.children : String(m.props.children),
    href: m.props.href,
    active: m.props.active,
    attributes: m.props.attributes
  })) : [], d = () => t ? c() : o && s ? [{ href: o, text: s }] : e, u = () => {
    const g = d();
    if (g && g.length > 0) {
      const m = g.slice().reverse().find((I) => I.href && !I.active);
      if (m)
        return { href: m.href, text: m.text };
    }
    return { text: "Home" };
  }, f = d(), h = u(), p = we(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    n
  ), b = a;
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: p,
      "aria-label": b,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          Ke.Children.map(t, (g, m) => Ke.isValidElement(g) && (g.type === Rr || g.type?.displayName === "BreadcrumbItem") ? Ke.cloneElement(g, { key: m }) : null)
        ) : (
          // Render from items array
          f?.filter((g) => g.active || !!g.href).map((g, m) => /* @__PURE__ */ r.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: g.active ? /* @__PURE__ */ r.jsx(
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
          ) }, m))
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
}, hl = Ch;
hl.Item = Rr;
Rr.displayName = "BreadcrumbItem";
const pl = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const o = we("nhsuk-skip-link", n);
  return /* @__PURE__ */ r.jsx(
    "a",
    {
      className: o,
      href: t,
      "data-module": "nhsuk-skip-link",
      ...a,
      children: e
    }
  );
}, Wy = ({
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
}, Gy = ({
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
}, ml = Ke.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: n,
  headingLevel: a = 2,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  href: l,
  imgURL: c,
  imgAlt: d,
  ...u
}, f) => {
  const h = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    u.className
  ].filter(Boolean).join(" "), p = [
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
    const L = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      Xt,
      {
        level: a,
        className: b,
        children: L()
      }
    );
  }, m = () => u.children ? u.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: s }) : null, I = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
      className: h,
      ref: f,
      children: [
        c && /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: c,
            alt: d || ""
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: p, children: [
          g(),
          m(),
          I()
        ] })
      ]
    }
  );
});
ml.displayName = "Card";
const Yy = ({
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
}, Vy = ({
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
}, Zy = ({
  type: e,
  heading: t,
  headingHtml: n,
  headingLevel: a = 3,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  className: l,
  children: c,
  "data-testid": d,
  id: u,
  "aria-label": f,
  "aria-labelledby": h,
  "aria-describedby": p
}) => {
  const b = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), g = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), m = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const L = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], $ = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        L,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      Xt,
      {
        level: a,
        className: g,
        children: $
      }
    );
  }, I = () => c || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: b,
      "data-testid": d,
      id: u,
      "aria-label": f,
      "aria-labelledby": h,
      "aria-describedby": p,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          m(),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: I() })
      ]
    }
  );
}, Nh = ({
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
  const d = we(
    "nhsuk-panel",
    t
  ), u = () => !n && !a && !l ? null : a ? /* @__PURE__ */ r.jsx(
    Xt,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    Xt,
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
  return /* @__PURE__ */ r.jsxs("div", { className: d, id: e, ...c, children: [
    u(),
    f()
  ] });
}, qy = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...o
}) => {
  const s = we("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: s, ...o, children: i() });
}, Jy = ({
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
  ), s = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((c, d) => /* @__PURE__ */ r.jsx(
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
    d
  )) }) });
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ r.jsx("dl", { className: o, ...a, children: e.map((l, c) => /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ r.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, c)) }) });
}, Yn = { current: null }, jh = () => {
  if (Yn.current) return Yn.current;
  try {
    Yn.current = require("prismjs");
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
    Yn.current = null;
  }
  return Yn.current;
}, Mh = (e) => {
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
}, Br = (e, t, n) => {
  if (n || !t) return e;
  const a = jh();
  if (a && a.languages) {
    const o = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (o)
      try {
        return a.highlight(e, a.languages[o], o);
      } catch {
      }
  }
  return Mh(e);
}, Ih = ({
  rows: e,
  head: t,
  caption: n,
  captionSize: a,
  firstCellIsHeader: o = !1,
  responsive: s = !1,
  heading: i,
  headingLevel: l = 3,
  panel: c = !1,
  panelClasses: d,
  tableClasses: u,
  classes: f,
  attributes: h,
  "data-testid": p,
  columns: b,
  data: g,
  visuallyHiddenCaption: m = !1
}) => {
  const I = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), L = we(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    u
  ), $ = we(f), N = (y, v) => {
    const j = we(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${y.format}`]: y.format
      },
      y.classes
    ), T = {
      scope: "col",
      ...y.colspan && { colSpan: y.colspan },
      ...y.rowspan && { rowSpan: y.rowspan },
      ...s && { role: "columnheader" },
      ...y.attributes
    };
    let P;
    if (y.node != null)
      P = /* @__PURE__ */ r.jsx(r.Fragment, { children: y.node });
    else if (y.html)
      P = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } });
    else if (y.code != null) {
      const k = Array.isArray(y.code), S = k ? y.code.join(`
`) : y.code, E = k || S.includes(`
`), F = {
        className: we("nhsuk-table__code", y.codeClassName, {
          "nhsuk-table__code--block": E,
          "nhsuk-table__code--inline": !E
        }),
        ...y.codeLanguage ? { "data-language": y.codeLanguage } : {}
      }, z = Br(S, y.codeLanguage);
      P = E ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...F,
          dangerouslySetInnerHTML: { __html: z }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...F,
          dangerouslySetInnerHTML: { __html: z }
        }
      );
    } else
      P = y.text;
    return /* @__PURE__ */ r.jsx("th", { className: j, ...T, children: P }, v);
  }, x = (y, v, j) => {
    const T = o && j || y.rowHeader, P = we(
      T ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${T ? "header" : "cell"}--${y.format}`]: y.format
      },
      y.classes
    ), k = {
      ...T && { scope: "row" },
      ...y.colspan && { colSpan: y.colspan },
      ...y.rowspan && { rowSpan: y.rowspan },
      ...s && {
        role: T ? "rowheader" : "cell",
        ...y.header && { "data-label": y.header }
      },
      ...y.attributes
    };
    let S;
    if (y.node != null)
      S = /* @__PURE__ */ r.jsx(r.Fragment, { children: y.node });
    else if (y.html)
      S = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } });
    else if (y.code != null) {
      const z = Array.isArray(y.code), J = z ? y.code.join(`
`) : y.code, H = z || J.includes(`
`), O = {
        className: we("nhsuk-table__code", y.codeClassName, {
          "nhsuk-table__code--block": H,
          "nhsuk-table__code--inline": !H
        }),
        ...y.codeLanguage ? { "data-language": y.codeLanguage } : {}
      }, W = Br(
        J,
        y.codeLanguage,
        y.disableHighlight
      );
      S = H ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...O,
          dangerouslySetInnerHTML: { __html: W }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...O,
          dangerouslySetInnerHTML: { __html: W }
        }
      );
    } else
      S = y.text;
    const E = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      s && y.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        y.header,
        " "
      ] }),
      S
    ] }), F = T ? "th" : "td";
    return /* @__PURE__ */ r.jsx(F, { className: P, ...k, children: E }, v);
  };
  let _ = t, M = e;
  !_ && b && b.length && (_ = b.map((y) => ({
    text: y.title,
    format: y.format,
    classes: y.headerClasses,
    attributes: y.headerAttributes
  }))), !M && b && g && g.length && (M = g.map((y, v) => b.map((j) => {
    const T = j.accessor ? j.accessor(y, v) : y[j.key];
    let P = { format: j.format, classes: j.cellClasses, attributes: j.cellAttributes };
    if (j.rowHeader && (P.rowHeader = !0), j.render) {
      const k = j.render(T, y, v, j);
      return k == null || typeof k == "boolean" ? { ...P, text: "" } : typeof k == "string" || typeof k == "number" ? { ...P, text: String(k) } : { ...P, ...k };
    }
    return { ...P, text: T != null ? String(T) : "" };
  })));
  const w = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: L,
      ...s && { role: "table" },
      ...h,
      ...p && { "data-testid": p },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: we(I, m && "nhsuk-u-visually-hidden"), children: n }),
        _ && _.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...s && { role: "row" }, children: _.map(
              (y, v) => N(y, v)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: M && M.map((y, v) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: y.map(
              (j, T) => x(j, T, T === 0)
            )
          },
          v
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ r.jsxs(Nh, { className: d, children: [
    i && /* @__PURE__ */ r.jsx(Xt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    w()
  ] }) : $ ? /* @__PURE__ */ r.jsx("div", { className: $, children: w() }) : w();
}, Dh = ({
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
}, gl = ({
  responsive: e,
  className: t,
  children: n,
  ...a
}) => {
  const o = e ? { role: "row" } : {};
  return /* @__PURE__ */ r.jsx("tr", { className: t, ...o, ...a, children: n });
}, xl = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: o,
  codeClassName: s,
  disableHighlight: i,
  format: l,
  classes: c,
  colspan: d,
  rowspan: u,
  attributes: f,
  responsive: h,
  as: p = "th"
}) => {
  const b = we(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    c
  ), g = {
    scope: "col",
    ...d && { colSpan: d },
    ...u && { rowSpan: u },
    ...h && { role: "columnheader" },
    ...f
  };
  let m;
  if (n != null) m = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) m = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const L = Array.isArray(a), $ = L ? a.join(`
`) : a, N = L || $.includes(`
`), x = {
      className: we("nhsuk-table__code", s, {
        "nhsuk-table__code--block": N,
        "nhsuk-table__code--inline": !N
      }),
      ...o ? { "data-language": o } : {}
    }, _ = Br(
      $,
      o,
      i
    );
    m = N ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...x,
        dangerouslySetInnerHTML: { __html: _ }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...x, dangerouslySetInnerHTML: { __html: _ } });
  } else m = e;
  const I = p;
  return /* @__PURE__ */ r.jsx(I, { className: b, ...g, children: m });
}, Th = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: o,
  codeClassName: s,
  disableHighlight: i,
  format: l,
  classes: c,
  colspan: d,
  rowspan: u,
  attributes: f,
  responsive: h,
  rowHeader: p
}) => {
  const b = !!p, g = b ? "th" : "td", m = we(
    b ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${b ? "header" : "cell"}--${l}`,
    c
  ), I = {
    ...d && { colSpan: d },
    ...u && { rowSpan: u },
    ...b && { scope: "row" },
    ...h && { role: b ? "rowheader" : "cell" },
    ...f
  };
  let L;
  if (n != null) L = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) L = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const $ = Array.isArray(a), N = $ ? a.join(`
`) : a, x = $ || N.includes(`
`), _ = {
      className: we("nhsuk-table__code", s, {
        "nhsuk-table__code--block": x,
        "nhsuk-table__code--inline": !x
      }),
      ...o ? { "data-language": o } : {}
    }, M = Br(N, o, i);
    L = x ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ..._, dangerouslySetInnerHTML: { __html: M } }) }) : /* @__PURE__ */ r.jsx("code", { ..._, dangerouslySetInnerHTML: { __html: M } });
  } else L = e;
  return /* @__PURE__ */ r.jsx(g, { className: m, ...I, children: L });
}, en = Ih;
en.Caption = Dh;
en.BodyRow = gl;
en.HeaderCell = xl;
en.Cell = Th;
let Zs = !1, qs = !1;
Object.defineProperty(en, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Zs && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), Zs = !0), gl;
  }
});
Object.defineProperty(en, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !qs && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), qs = !0), xl;
  }
});
const Xy = Hn(({
  items: e,
  defaultActiveTab: t,
  activeTab: n,
  onTabChange: a,
  onTabFocus: o,
  onTabListBlur: s,
  onEscape: i,
  autoActivate: l = !0,
  className: c,
  id: d,
  "data-testid": u,
  ...f
}, h) => {
  const p = n !== void 0, [b, g] = ze(() => t || e[0]?.id || ""), m = p ? n : b, I = We(null), L = We(/* @__PURE__ */ new Map()), $ = me((v) => {
    p || g(v), a?.(v);
  }, [p, a]), N = me((v) => {
    o?.(v), l && $(v);
  }, [o, l, $]), x = me((v, j) => {
    const T = e.filter((S) => !S.disabled).map((S) => S.id), P = T.indexOf(j);
    let k = null;
    switch (v.key) {
      case "ArrowLeft":
        k = P > 0 ? P - 1 : T.length - 1;
        break;
      case "ArrowRight":
        k = P < T.length - 1 ? P + 1 : 0;
        break;
      case "Home":
        k = 0;
        break;
      case "End":
        k = T.length - 1;
        break;
      case "Escape":
        v.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (k !== null) {
      v.preventDefault();
      const S = T[k], E = L.current.get(S);
      E && (E.focus(), N(S));
    }
  }, [e, N, i]), _ = me((v, j) => {
    j ? L.current.set(v, j) : L.current.delete(v);
  }, []), M = me((v) => {
    const j = L.current.get(v);
    j && j.focus();
  }, []);
  $i(h, () => ({
    focusTab: M,
    getActiveTab: () => m,
    getTabListElement: () => I.current
  }), [M, m]);
  const w = me((v) => {
    const j = v.relatedTarget;
    I.current?.contains(j) || s?.();
  }, [s]), y = we("nhsuk-tabs", c);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: y,
      id: d,
      "data-testid": u,
      ...f,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: I,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: w,
                children: e.map((v) => {
                  const j = v.id === m, T = v.disabled, P = we("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": j,
                    "nhsuk-tabs__list-item--disabled": T
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: P, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (k) => _(v.id, k),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": j,
                      "aria-controls": `${v.id}-panel`,
                      id: `${v.id}-tab`,
                      tabIndex: j ? 0 : -1,
                      disabled: T,
                      onClick: () => !T && $(v.id),
                      onKeyDown: (k) => !T && x(k, v.id),
                      onFocus: () => !T && N(v.id),
                      ...v.attributes,
                      children: v.label
                    }
                  ) }, v.id);
                })
              }
            )
          }
        ),
        e.map((v) => {
          const j = v.id === m;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${v.id}-tab`,
              id: `${v.id}-panel`,
              hidden: !j,
              children: v.content
            },
            v.id
          );
        })
      ]
    }
  );
}), Lh = Hn(
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
  }, d) => {
    const u = [
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
        ref: d,
        id: i,
        className: u,
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
Lh.displayName = "Details";
const $h = Hn(
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
    const d = [
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
    ), f = (p) => t === "cross" && !a ? `do not ${p}` : p, h = () => /* @__PURE__ */ r.jsx(
      Xt,
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
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: d.join(" "), role: "list", children: n.map((p, b) => /* @__PURE__ */ r.jsxs("li", { children: [
            u(),
            f(p.item)
          ] }, b)) }) })
        ]
      }
    );
  }
);
$h.displayName = "DoDontList";
const Ah = Hn(
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
  }, d) => {
    const u = [
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
        ref: d,
        id: i,
        className: u,
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
Ah.displayName = "Expander";
const Eh = Hn(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, c) => {
      const d = c + 1, u = `${t}-${d}-hint`, f = `${t}-${d}-status`, h = !!l.href, p = [
        "nhsuk-task-list__item",
        h && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), b = [
        l.hint && u,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        Fh,
        {
          item: l,
          itemClasses: p,
          hasLink: h,
          hintId: u,
          statusId: f,
          ariaDescribedBy: b
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
), Fh = ({
  item: e,
  itemClasses: t,
  hasLink: n,
  hintId: a,
  statusId: o,
  ariaDescribedBy: s
}) => {
  const i = () => {
    const d = e.title.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, u = [
      n ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return n ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: u,
        href: e.href,
        "aria-describedby": s,
        children: d
      }
    ) : /* @__PURE__ */ r.jsx("div", { className: e.title.classes || "", children: d });
  }, l = () => e.hint ? e.hint.html ? /* @__PURE__ */ r.jsx(
    "div",
    {
      id: a,
      className: "nhsuk-task-list__hint",
      dangerouslySetInnerHTML: { __html: e.hint.html }
    }
  ) : /* @__PURE__ */ r.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, c = () => {
    const d = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let u;
    return e.status.tag ? u = /* @__PURE__ */ r.jsx(nt, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ r.jsx("div", { className: d, id: o, children: u });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
Eh.displayName = "TaskList";
const Ky = ({
  heading: e,
  headingLevel: t = 3,
  text: n,
  html: a,
  children: o,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), c = () => o || (a ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n ? /* @__PURE__ */ r.jsx("p", { children: n }) : null), d = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), u = `h${t}`;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: d,
      ...i,
      children: [
        Di(
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
        c()
      ]
    }
  );
}, Qy = ({
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
}, Ph = ({
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
      jr,
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
      jr,
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
] }), Rh = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(nt, { color: Bh(n.status), text: n.label }) }, n.status)) });
function Bh(e) {
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
const e1 = ({
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
  getSlotAriaLabel: d,
  toolbar: u,
  enableDefaultToolbar: f = !0,
  legendItems: h,
  enableDefaultLegend: p = !0,
  legendPlacement: b = "bottom",
  onA11yModeChange: g
}) => {
  const [m, I] = ze("grid"), L = i || m, [$, N] = ze(a || []), x = n ?? $, _ = Ae(() => {
    const k = /* @__PURE__ */ new Set();
    return e.forEach((S) => k.add(new Date(S.start).getTime())), Array.from(k).sort((S, E) => S - E);
  }, [e]), M = Ae(() => {
    const k = {};
    return e.forEach((S) => {
      const E = new Date(S.start).getTime();
      k[E] || (k[E] = {});
      const F = S.capacity - S.booked - (S.held || 0);
      k[E][S.sessionId] = { slot: S, remaining: F };
    }), k;
  }, [e]), w = me((k) => {
    if (s === "single") {
      const S = [k.id];
      n || N(S), o?.(S, { lastAction: "select" });
    } else {
      const S = x.includes(k.id), E = S ? x.filter((F) => F !== k.id) : [...x, k.id];
      n || N(E), o?.(E, { lastAction: S ? "deselect" : "select" });
    }
  }, [s, x, n, o]), y = Ae(() => h || (p ? Array.from(new Set(e.map((S) => S.status))).map((S) => ({
    status: S,
    label: S.charAt(0).toUpperCase() + S.slice(1)
  })) : void 0), [h, p, e]), v = y ? /* @__PURE__ */ r.jsx(
    Rh,
    {
      items: y,
      orientation: b === "left" || b === "right" ? "vertical" : "horizontal"
    }
  ) : null, j = (k) => {
    i || I(k), g?.(k);
  }, T = u || (f ? /* @__PURE__ */ r.jsx(
    Ph,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: L,
      onA11yModeChange: j
    }
  ) : null), P = /* @__PURE__ */ r.jsx("div", { style: c, className: we(l), children: /* @__PURE__ */ r.jsx(Qa, { className: we("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(on, { children: /* @__PURE__ */ r.jsx(Xn, { width: xn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    T,
    b === "top" && v,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((k) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => w(k), "aria-pressed": x.includes(k.id), children: [
      Vn(new Date(k.start)),
      " – ",
      Vn(new Date(k.end)),
      " (",
      k.status,
      ")"
    ] }) }, k.id)) }),
    b === "bottom" && v
  ] }) }) }) }) });
  return L === "list" ? P : /* @__PURE__ */ r.jsx("div", { style: c, className: we(l), children: /* @__PURE__ */ r.jsx(Qa, { className: we("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(on, { children: /* @__PURE__ */ r.jsx(Xn, { width: xn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    T,
    b === "top" && v,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": _.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((k) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${k.specialty}`, className: "nhs-slot-matrix__session-header", children: k.specialty }, k.id))
      ] }),
      _.map((k) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Vn(new Date(k)), children: Vn(new Date(k)) }),
        t.map((S) => {
          const E = M[k]?.[S.id];
          if (!E)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, S.id);
          const { slot: F, remaining: z } = E, J = x.includes(F.id), H = d ? d(F) : `Slot ${Vn(new Date(F.start))} ${F.status}${z === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": F.status,
              className: we("nhs-slot-matrix__cell", J && "nhs-slot-matrix__cell--selected"),
              "aria-label": H,
              "aria-selected": J || void 0,
              onClick: () => w(F),
              children: z > 0 ? `${z} left` : "Full"
            },
            F.id
          );
        })
      ] }, k))
    ] }),
    b === "bottom" && v
  ] }) }) }) }) });
};
function Js(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Vn(e) {
  return `${Js(e.getHours())}:${Js(e.getMinutes())}`;
}
function bl(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = bl(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Et() {
  for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = bl(e)) && (a && (a += " "), a += t);
  return a;
}
const Hh = ({ level: e, children: t, className: n }) => {
  const a = `h${e}`;
  return Ke.createElement(a, { className: n }, t);
}, zh = ({ href: e, children: t, className: n, ...a }) => /* @__PURE__ */ r.jsx("a", { href: e, className: n, ...a, children: t });
function yr(e, t) {
  return /* @__PURE__ */ r.jsx("span", { className: Et("nhs-step-nav__title", { "nhs-step-nav__title--current": t }), children: e.title });
}
const t1 = ({
  id: e,
  className: t,
  ariaLabel: n = "Step by step",
  heading: a,
  summary: o,
  headingLevel: s = 3,
  variant: i = "full-width",
  items: l,
  numbered: c = !0,
  currentStepId: d,
  renderLink: u,
  collapsible: f = !0,
  singleOpen: h = !1,
  defaultExpandedIds: p,
  expandedIds: b,
  onToggle: g,
  showAllControls: m = !1,
  autoFocusExpanded: I = !1
}) => {
  const L = u ?? zh, $ = i === "sidebar" ? { as: "aside", className: "nhs-step-nav nhs-step-nav--sidebar" } : { as: "nav", className: "nhs-step-nav nhs-step-nav--full" }, N = $.as === "aside" ? "aside" : "nav", x = b === void 0, [_, M] = ze(
    () => new Set(p ?? [])
  ), w = Ae(() => x ? _ : new Set(b), [x, _, b]), y = Ae(
    () => l.some((k) => k.description || k.items && k.items.length > 0),
    [l]
  ), v = me((k) => w.has(k), [w]), j = me((k, S) => {
    x && M((E) => {
      if (h)
        return S ? /* @__PURE__ */ new Set([k]) : /* @__PURE__ */ new Set();
      const F = new Set(E);
      return S ? F.add(k) : F.delete(k), F;
    }), g?.(k, S);
  }, [x, g, h]), T = me((k) => {
    const S = l.filter((E) => E.description || E.items && E.items.length > 0).map((E) => E.id);
    x && M(() => k ? h ? new Set(S.slice(0, 1)) : new Set(S) : /* @__PURE__ */ new Set()), S.forEach((E) => g?.(E, k));
  }, [l, x, g, h]), P = me((k, S) => {
    const E = !v(k.id);
    if (j(k.id, E), E && I) {
      const F = document.getElementById(`sbs-${k.id}-panel`);
      F && F.querySelector(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )?.focus();
    } else
      S?.focus();
  }, [I, v, j]);
  return Ke.createElement(
    N,
    { id: e, "aria-label": n, className: Et($.className, t) },
    /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      i === "full-width" && (a || o) && /* @__PURE__ */ r.jsxs("div", { className: "nhs-step-nav__intro", children: [
        a && /* @__PURE__ */ r.jsx(Hh, { level: s, className: "nhs-step-nav__heading", children: a }),
        o && /* @__PURE__ */ r.jsx("p", { className: "nhs-step-nav__summary", children: o }),
        f && !h && m && y && /* @__PURE__ */ r.jsxs("div", { className: "nhs-step-nav__controls", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhs-step-nav__control", onClick: () => T(!0), children: "Show all" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhs-step-nav__control", onClick: () => T(!1), children: "Hide all" })
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("ol", { className: Et("nhs-step-nav__list", { "nhs-step-nav__list--numbered": c }), children: l.map((k, S) => {
        const E = d === k.id, F = Et(
          "nhs-step-nav__item",
          E && "nhs-step-nav__item--current",
          k.status && `nhs-step-nav__item--${k.status}`
        ), z = k.href ? /* @__PURE__ */ r.jsx(L, { href: k.href, className: "nhs-step-nav__link", "aria-current": E ? "step" : void 0, children: yr(k, E) }) : yr(k, E), J = !!(k.description || k.items && k.items.length > 0), H = f && J ? v(k.id) : !0, O = `sbs-${k.id}-header`, W = `sbs-${k.id}-panel`;
        return /* @__PURE__ */ r.jsxs("li", { className: F, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhs-step-nav__header", children: [
            z,
            (k.optional || k.duration || k.meta) && /* @__PURE__ */ r.jsxs("div", { className: "nhs-step-nav__meta", children: [
              k.optional && /* @__PURE__ */ r.jsx("span", { className: "nhs-step-nav__optional", "aria-label": "Optional", children: "Optional" }),
              k.duration && /* @__PURE__ */ r.jsx("span", { className: "nhs-step-nav__duration", children: k.duration }),
              k.meta
            ] }),
            f && J && /* @__PURE__ */ r.jsx(
              "button",
              {
                id: O,
                type: "button",
                className: "nhs-step-nav__toggle",
                "aria-expanded": H,
                "aria-controls": W,
                onClick: (B) => P(k, B.currentTarget),
                "aria-label": (H ? "Hide" : "Show") + ` details for ${typeof k.title == "string" ? k.title : "this step"}`,
                children: /* @__PURE__ */ r.jsx("span", { className: "nhs-step-nav__toggle-icon", "aria-hidden": "true" })
              }
            )
          ] }),
          J && (!f || H) && /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: W,
              role: "region",
              "aria-labelledby": f ? O : void 0,
              className: Et("nhs-step-nav__content"),
              children: [
                k.description && /* @__PURE__ */ r.jsx("p", { className: "nhs-step-nav__description", children: k.description }),
                k.items && k.items.length > 0 && /* @__PURE__ */ r.jsx("ol", { className: "nhs-step-nav__sublist", children: k.items.map((B) => {
                  const ee = d === B.id, R = B.href ? /* @__PURE__ */ r.jsx(L, { href: B.href, className: "nhs-step-nav__sublink", "aria-current": ee ? "step" : void 0, children: yr(B, ee) }) : yr(B, ee);
                  return /* @__PURE__ */ r.jsx("li", { className: Et("nhs-step-nav__subitem", B.status && `nhs-step-nav__subitem--${B.status}`), children: R }, B.id);
                }) })
              ]
            }
          )
        ] }, k.id || S);
      }) })
    ] })
  );
}, Oh = ({
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
  ].filter(Boolean).join(" "), d = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Xt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
      children: d
    }
  ) : /* @__PURE__ */ r.jsx(
    "div",
    {
      className: c,
      "aria-label": i,
      ...l,
      children: d
    }
  );
}, n1 = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(Qa, { children: /* @__PURE__ */ r.jsx(on, { children: e.map((o, s) => /* @__PURE__ */ r.jsx(
    Xn,
    {
      width: xn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ r.jsx(Oh, { ...o })
    },
    s
  )) }) }) });
};
var _r = /* @__PURE__ */ ((e) => (e.String = "string", e.Number = "number", e.Boolean = "boolean", e.Date = "date", e.Custom = "custom", e))(_r || {}), Rn = /* @__PURE__ */ ((e) => (e.First = "first", e.Last = "last", e))(Rn || {}), Zn = /* @__PURE__ */ ((e) => (e.TrueFirst = "trueFirst", e.FalseFirst = "falseFirst", e))(Zn || {});
function Xs(e) {
  if (e == null) return null;
  const n = (e instanceof Date ? e : new Date(e)).getTime();
  return Number.isNaN(n) ? null : n;
}
const Uh = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
function Wh(e, t) {
  return Uh.compare(String(e), String(t));
}
function Ks(e, t) {
  if (t.sortAccessor) return t.sortAccessor(e);
  if (t.useRendererForSort) {
    if (t.tableRenderer) return t.tableRenderer(e);
    if (t.render) return t.render(e);
  }
  return e[t.key];
}
function Gh(e, t, n, a) {
  if (n?.sortComparator)
    return n.sortComparator(e, t);
  const o = n?.sortType;
  if (o === _r.Number) {
    const s = Number(e), i = Number(t), l = Number.isNaN(s), c = Number.isNaN(i);
    return l && c ? 0 : l ? 1 : c ? -1 : s - i;
  }
  if (o === _r.Boolean) {
    const s = !!e, i = !!t, l = n?.booleanOrder ?? a?.booleanOrder ?? Zn.FalseFirst;
    return s === i ? 0 : l === Zn.TrueFirst ? s ? -1 : 1 : s ? 1 : -1;
  }
  if (o === _r.Date) {
    const s = Xs(e), i = Xs(t);
    return s == null && i == null ? 0 : s == null ? 1 : i == null ? -1 : s - i;
  }
  if (typeof e == "number" && typeof t == "number") {
    const s = Number.isNaN(e), i = Number.isNaN(t);
    return s && i ? 0 : s ? 1 : i ? -1 : e - t;
  }
  if (typeof e == "boolean" && typeof t == "boolean") {
    const s = n?.booleanOrder ?? a?.booleanOrder ?? Zn.FalseFirst;
    return e === t ? 0 : s === Zn.TrueFirst ? e ? -1 : 1 : e ? 1 : -1;
  }
  return Wh(e, t);
}
function so(e, t, n = Rn.Last, a) {
  const o = new Map(e.map((i) => [i.key, i])), s = t ?? [];
  return (i, l) => {
    if (!s.length) return 0;
    for (const { key: c, direction: d } of s) {
      const u = o.get(c), f = u ? Ks(i, u) : i[c], h = u ? Ks(l, u) : l[c], p = f == null, b = h == null;
      if (p || b) {
        if (p && b) continue;
        return (u?.nullsPosition ?? a?.nullsPosition ?? n) === Rn.First ? p ? -1 : 1 : p ? 1 : -1;
      }
      let g = Gh(f, h, u, a);
      if (g !== 0) return d === "asc" ? g : -g;
    }
    if (a?.stable) {
      const c = i.__originalIndex__ ?? i.originalIndex ?? void 0, d = l.__originalIndex__ ?? l.originalIndex ?? void 0;
      if (typeof c == "number" && typeof d == "number")
        return c - d;
    }
    return 0;
  };
}
const Yh = Ke.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: n,
    onSort: a,
    sortingOptions: o,
    selectedRowIndex: s,
    onRowSelect: i,
    id: l,
    testId: c,
    ariaLabel: d,
    ariaLabelledby: u,
    ariaDescribedby: f,
    className: h,
    tableClassName: p,
    bordered: b = !1,
    striped: g = !1,
    responsive: m = !1,
    tableType: I = "default"
  }, L) => {
    const $ = We(null), N = We(null), x = We(null);
    Ke.useImperativeHandle(L, () => $.current, []);
    const [_, M] = ze(0), [w, y] = ze(0), [v, j] = ze("headers"), [T, P] = ze("browse"), k = t.length, S = e.length, E = Ae(() => {
      if (!n || n.length === 0) return e;
      const B = so(t, n, Rn.Last, o);
      return [...e].sort(B);
    }, [e, n, t, o]), F = me((B, ee) => {
      setTimeout(() => {
        const R = $.current?.querySelector(
          `tbody tr:nth-child(${B + 1}) td:nth-child(${ee + 1})`
        );
        R && (R.focus(), typeof R.scrollIntoView == "function" && R.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), z = me((B) => {
      setTimeout(() => {
        const ee = $.current?.querySelector(`th:nth-child(${B + 1})`);
        ee && (ee.focus(), typeof ee.scrollIntoView == "function" && ee.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), J = me((B) => {
      a?.(B);
    }, [a]), H = me((B) => {
      i?.(B);
    }, [i]), O = me((B) => {
      const { key: ee } = B;
      switch (ee) {
        case "Enter":
          if (B.preventDefault(), v === "headers" && T === "browse")
            P("navigate"), z(w);
          else if (v === "headers" && T === "navigate") {
            const R = t[w];
            R && J(R.key);
          } else v === "cells" && T === "browse" ? (P("navigate"), F(_, w)) : v === "cells" && T === "navigate" && H(_);
          break;
        case "Escape":
          B.preventDefault(), (v === "headers" && T === "navigate" || v === "cells" && T === "navigate") && P("browse");
          break;
        case "ArrowLeft":
          if (B.preventDefault(), T === "navigate" || T === "browse" && v === "headers") {
            if (v === "headers") {
              const R = Math.max(0, w - 1);
              y(R), z(R);
            } else if (v === "cells") {
              const R = Math.max(0, w - 1);
              y(R), F(_, R);
            }
          }
          break;
        case "ArrowRight":
          if (B.preventDefault(), T === "navigate" || T === "browse" && v === "headers") {
            if (v === "headers") {
              const R = Math.min(k - 1, w + 1);
              y(R), z(R);
            } else if (v === "cells") {
              const R = Math.min(k - 1, w + 1);
              y(R), F(_, R);
            }
          }
          break;
        case "ArrowUp":
          if (B.preventDefault(), v === "cells") {
            if (T === "browse") {
              const R = Math.max(0, _ - 1);
              M(R), F(R, 0), y(0);
            } else if (T === "navigate")
              if (_ > 0) {
                const R = _ - 1;
                M(R), F(R, w);
              } else
                j("headers"), P("browse"), z(w);
          }
          break;
        case "ArrowDown":
          if (B.preventDefault(), v === "headers" && T === "browse")
            j("cells"), M(0), y(0), F(0, 0);
          else if (v === "cells") {
            const R = S - 1;
            if (T === "browse") {
              const ne = Math.min(R, _ + 1);
              M(ne), F(ne, 0), y(0);
            } else if (T === "navigate" && _ < R) {
              const ne = _ + 1;
              M(ne), F(ne, w);
            }
          }
          break;
        case "Home":
          B.preventDefault(), v === "headers" ? (y(0), z(0)) : v === "cells" && (B.ctrlKey ? (M(0), y(0), F(0, 0)) : (y(0), F(_, 0)));
          break;
        case "End":
          if (B.preventDefault(), v === "headers") {
            const R = k - 1;
            y(R), z(R);
          } else if (v === "cells")
            if (B.ctrlKey) {
              const R = S - 1, ne = k - 1;
              M(R), y(ne), F(R, ne);
            } else {
              const R = k - 1;
              y(R), F(_, R);
            }
          break;
        case " ":
          if (B.preventDefault(), v === "headers" && T === "navigate") {
            const R = t[w];
            R && J(R.key);
          } else v === "cells" && T === "navigate" && H(_);
          break;
      }
    }, [
      v,
      T,
      w,
      _,
      k,
      S,
      t,
      F,
      z,
      J,
      H
    ]);
    Qe(() => {
      const B = $.current;
      if (B)
        return B.addEventListener("keydown", O), () => B.removeEventListener("keydown", O);
    }, [O]);
    const W = we(
      "nhsuk-table",
      p,
      {
        "nhsuk-table--responsive": m,
        "nhsuk-table--bordered": b,
        "nhsuk-table--striped": g,
        "nhsuk-table--compact": I === "compact"
      },
      h
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: $,
        className: W,
        id: l,
        "data-testid": c,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": u,
        "aria-describedby": f,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: N, role: "row", children: t.map((B, ee) => {
            const R = n?.find((Z) => Z.key === B.key), ne = !!R, te = v === "headers" && w === ee;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: we("sortable-header", {
                  "sortable-header--focused": te
                }),
                role: "columnheader",
                tabIndex: te ? 0 : -1,
                onClick: () => J(B.key),
                onKeyDown: (Z) => {
                  (Z.key === "Enter" || Z.key === " ") && (Z.preventDefault(), J(B.key));
                },
                "aria-sort": ne ? R?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: B.label }),
                  ne && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((Z) => Z.key === B.key) + 1 }),
                    /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: R?.direction === "asc" ? /* @__PURE__ */ r.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ r.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              B.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: x, className: "nhsuk-table__body", role: "rowgroup", children: E.map((B, ee) => {
            const R = s === ee, ne = v === "cells" && _ === ee;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: we("data-row", {
                  "data-row--selected": R,
                  "data-row--focused": ne
                }),
                "aria-selected": R,
                children: t.map((te, Z) => {
                  const X = te.tableRenderer ? te.tableRenderer(B) : te.render ? te.render(B) : B[te.key], re = v === "cells" && _ === ee && w === Z, de = () => typeof X == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: X ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: X ? "Yes" : "No" })
                  ] }) : String(X ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: we("data-cell", {
                        "data-cell--focused": re
                      }),
                      tabIndex: re ? 0 : -1,
                      onClick: () => H(ee),
                      children: de()
                    },
                    te.key
                  );
                })
              },
              ee
            );
          }) })
        ]
      }
    );
  }
);
Yh.displayName = "AriaDataGrid";
const yl = ({
  sortConfig: e,
  columns: t,
  onSortChange: n,
  className: a = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: c = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const f = We(null), h = We(null), p = We(null), b = me((y, v) => {
    c || (h.current = v, y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", v));
  }, [c]), g = me((y, v) => {
    c || h.current === v || (y.preventDefault(), y.dataTransfer.dropEffect = "move", p.current = v);
  }, [c]), m = me((y, v) => {
    if (c) return;
    y.preventDefault();
    const j = h.current;
    if (!j || j === v) return;
    const T = e.findIndex((k) => k.key === j), P = e.findIndex((k) => k.key === v);
    if (T !== -1 && P !== -1) {
      const k = [...e], [S] = k.splice(T, 1);
      k.splice(P, 0, S), n(k);
    }
    h.current = null, p.current = null;
  }, [c, e, n]), I = me(() => {
    h.current = null, p.current = null;
  }, []), L = me((y) => {
    const v = t.find((j) => j.key === y);
    return v ? v.label : y;
  }, [t]), $ = me((y) => ["red", "orange", "blue", "aqua-green", "grey"][y] || "grey", []), N = me((y) => {
    if (c) return;
    const v = e.map(
      (j) => j.key === y ? { ...j, direction: j.direction === "asc" ? "desc" : "asc" } : j
    );
    n(v);
  }, [e, n, c]), x = me((y) => {
    if (c) return;
    const v = e.filter((j) => j.key !== y);
    n(v);
  }, [e, n, c]), _ = me(() => {
    c || n([]);
  }, [n, c]), M = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const y = e.map((v, j) => {
      const T = v.direction === "asc" ? "ascending" : "descending";
      return `${j + 1}. ${L(v.key)} (${T})`;
    });
    if (y.length === 1)
      return `Sorted by: ${y[0]}`;
    if (y.length === 2)
      return `Sorted by: ${y.join(" and ")}`;
    {
      const v = y.pop();
      return `Sorted by: ${y.join(", ")}, and ${v}`;
    }
  }, w = Ae(() => {
    const y = ["sort-description"];
    return l && y.push("sort-help"), u && y.push(u), y.join(" ");
  }, [l, u]);
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
        children: M()
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: f,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": d,
          "aria-describedby": w,
          children: e.map((y, v) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (j) => b(j, y.key),
              onDragOver: (j) => g(j, y.key),
              onDrop: (j) => m(j, y.key),
              onDragEnd: I,
              onClick: () => N(y.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": y.key,
              children: /* @__PURE__ */ r.jsx(
                nt,
                {
                  color: $(v),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => x(y.key),
                  disabled: c,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${v + 1}`, children: v + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: L(y.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (j) => {
                          j.stopPropagation(), N(y.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${L(y.key)}. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
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
          onClick: _,
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
function Vh(e, t) {
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
      for (let d = 0; d < Math.min(e.tabLoadingStates.length, s); d++)
        i[d] = e.tabLoadingStates[d], l[d] = e.tabErrors[d], c[d] = e.selectedRows[d];
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
const io = Hn(function(t, n) {
  const {
    dataConfig: a = {},
    tabPanels: o,
    selectedIndex: s,
    onTabChange: i,
    onGlobalRowSelectionChange: l,
    ariaLabel: c,
    ariaDescription: d,
    className: u = "",
    disabled: f = !1,
    orientation: h = "horizontal",
    id: p,
    isLoading: b = !1,
    loadingComponent: g,
    error: m = null,
    errorComponent: I,
    "data-testid": L,
    actions: $,
    actionsMinGap: N = 16,
    forceActionsAbove: x = !1,
    hideTabsIfSingle: _ = !1
  } = t, M = _ && o.length === 1, y = We(
    p || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, v = typeof d == "string" && d.trim() !== "" && !/\s/.test(d), j = `${y}-description`, T = `${y}-navigation-help`, {
    dataComparator: P = (A, U) => JSON.stringify(A) === JSON.stringify(U),
    filterFunction: k = (A) => A,
    booleanRenderer: S = (A) => A ? "✓" : "✗"
  } = a || {}, E = s !== void 0, F = s ?? 0, [z, J] = ze({
    focusArea: M ? "headers" : "tabs",
    focusedTabIndex: F,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), H = Ae(() => ({
    selectedIndex: F,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [F]), [O, W] = Ai(Vh, H);
  Qe(() => {
    const A = O.tabLoadingStates.length, U = o.length;
    A !== U && W({ type: "ADJUST_ARRAYS", payload: { newLength: U } });
  }, [o.length]), Qe(() => {
    E && W({ type: "SET_SELECTED_INDEX", payload: F });
  }, [F, E]), Qe(() => {
    J((A) => ({
      ...A,
      focusArea: M ? "headers" : "tabs",
      focusedTabIndex: O.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [O.selectedIndex, M]), Qe(() => {
    l && l(O.globalSelectedRowData);
  }, [O.globalSelectedRowData, l]);
  const B = me(
    (A, U) => P(A, U),
    [P]
  ), ee = me(
    (A) => {
      A >= 0 && A < o.length && !o[A].disabled && (W({ type: "SET_SELECTED_INDEX", payload: A }), J((U) => ({
        ...U,
        focusedTabIndex: A,
        focusArea: "tabs"
      })), i?.(A));
    },
    [o, i]
  ), R = We(!1), ne = me(
    (A, U) => {
      if (!U?.force && !R.current && A === 0) {
        R.current = !0;
        return;
      }
      R.current = !0, setTimeout(() => {
        const oe = te.current[A], K = oe?.parentElement;
        if (oe && K) {
          const ae = oe.offsetLeft, ce = oe.offsetWidth, pe = K.clientWidth, ye = ae - pe / 2 + ce / 2;
          try {
            K.scrollTo({
              left: Math.max(0, ye),
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
          tabListElementExists: !!K
        });
      }, 50);
    },
    []
  ), te = We([]), Z = We([]), X = me(
    (A, U) => {
      const oe = O.sortConfig || [], K = oe.find(
        (pe) => pe.key === U
      );
      let ae;
      K ? K.direction === "asc" ? ae = oe.map(
        (pe) => pe.key === U ? { ...pe, direction: "desc" } : pe
      ) : ae = oe.filter(
        (pe) => pe.key !== U
      ) : ae = [...oe, { key: U, direction: "asc" }], W({
        type: "SET_SORT",
        payload: ae
      }), o[A].onSort?.(U);
    },
    [O.sortConfig, o]
  ), re = me(
    (A) => {
      setTimeout(() => {
        const U = document.querySelector(
          `[data-tab-panel="${O.selectedIndex}"] th:nth-child(${A + 1})`
        );
        U && U.focus();
      }, 0);
    },
    [O.selectedIndex]
  ), de = me(
    (A) => S(A),
    [S]
  ), Y = me(
    (A, U) => {
      setTimeout(() => {
        const oe = document.querySelector(
          `[data-tab-panel="${O.selectedIndex}"] tbody tr:nth-child(${A + 1}) td:nth-child(${U + 1})`
        );
        oe && oe.focus();
      }, 0);
    },
    [O.selectedIndex]
  );
  Qe(() => {
    z.isGridActive && (z.focusArea === "headers" ? setTimeout(() => {
      re(z.focusedHeaderIndex);
    }, 0) : z.focusArea === "cells" && setTimeout(() => {
      Y(
        z.focusedRowIndex,
        z.focusedColumnIndex
      );
    }, 0));
  }, [
    z.focusArea,
    z.isGridActive,
    z.focusedHeaderIndex,
    z.focusedRowIndex,
    z.focusedColumnIndex,
    re,
    Y
  ]), Qe(() => {
    M || ne(O.selectedIndex);
  }, [O.selectedIndex, ne, M]);
  const le = me(
    (A, U) => {
      const { key: oe } = A, K = o[O.selectedIndex], ae = K?.columns.length || 0;
      switch (oe) {
        case "ArrowLeft":
          A.preventDefault();
          const ce = Math.max(0, U - 1);
          J((Re) => ({
            ...Re,
            focusedHeaderIndex: ce
          })), re(ce);
          break;
        case "ArrowRight":
          A.preventDefault();
          const pe = Math.min(ae - 1, U + 1);
          J((Re) => ({
            ...Re,
            focusedHeaderIndex: pe
          })), re(pe);
          break;
        case "ArrowUp":
          A.preventDefault(), M ? $ && setTimeout(() => {
            const Re = Ee.current;
            if (!Re) return;
            Re.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )?.focus();
          }, 0) : (J((Re) => ({
            ...Re,
            focusArea: "tabs",
            focusedTabIndex: O.selectedIndex
          })), ne(O.selectedIndex), te.current[O.selectedIndex]?.focus());
          break;
        case "ArrowDown":
          A.preventDefault(), J((Re) => ({
            ...Re,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: U,
            isGridActive: !0
          }));
          break;
        case "Home":
          A.preventDefault(), J((Re) => ({ ...Re, focusedHeaderIndex: 0 })), re(0);
          break;
        case "End":
          A.preventDefault();
          const ye = ae - 1;
          J((Re) => ({
            ...Re,
            focusedHeaderIndex: ye
          })), re(ye);
          break;
        case "Enter":
        case " ":
          A.preventDefault();
          const Te = K?.columns[U]?.key;
          Te && X(O.selectedIndex, Te);
          break;
      }
    },
    [
      o,
      O.selectedIndex,
      X,
      J,
      re,
      Y,
      te
    ]
  ), se = me(
    (A, U, oe) => {
      const { key: K } = A, ae = o[O.selectedIndex], ce = ae?.data.length || 0, pe = ae?.columns.length || 0;
      switch (K) {
        case "ArrowUp":
          if (A.preventDefault(), U === 0)
            J((be) => ({
              ...be,
              focusArea: "headers",
              focusedHeaderIndex: oe,
              isGridActive: !1
            })), re(oe);
          else {
            const be = U - 1;
            J((Xe) => ({
              ...Xe,
              focusedRowIndex: be
            })), Y(be, oe);
          }
          break;
        case "ArrowDown":
          A.preventDefault();
          const ye = Math.min(ce - 1, U + 1);
          J((be) => ({
            ...be,
            focusedRowIndex: ye
          })), Y(ye, oe);
          break;
        case "ArrowLeft":
          A.preventDefault();
          const Te = Math.max(0, oe - 1);
          J((be) => ({
            ...be,
            focusedColumnIndex: Te
          })), Y(U, Te);
          break;
        case "ArrowRight":
          A.preventDefault();
          const Re = Math.min(pe - 1, oe + 1);
          J((be) => ({
            ...be,
            focusedColumnIndex: Re
          })), Y(U, Re);
          break;
        case "Home":
          A.preventDefault(), A.ctrlKey ? (J((be) => ({
            ...be,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), Y(0, 0)) : (J((be) => ({ ...be, focusedColumnIndex: 0 })), Y(U, 0));
          break;
        case "End":
          if (A.preventDefault(), A.ctrlKey) {
            const be = ce - 1, Xe = pe - 1;
            J((tt) => ({
              ...tt,
              focusedRowIndex: be,
              focusedColumnIndex: Xe
            })), Y(be, Xe);
          } else {
            const be = pe - 1;
            J((Xe) => ({
              ...Xe,
              focusedColumnIndex: be
            })), Y(U, be);
          }
          break;
        case "Enter":
        case " ":
          if (A.preventDefault(), ae && ae.data[U]) {
            const be = ae.data.some(
              (ie) => "ews_data" in ie
            ) ? k(ae.data, O.filters) : ae.data, Xe = O.sortConfig;
            let tt = be;
            if (Xe && Xe.length > 0) {
              const ie = so(ae.columns, Xe, Rn.Last, a?.sortingOptions);
              tt = [...be].sort(ie);
            }
            if (tt[U]) {
              const ie = tt[U], xe = O.globalSelectedRowData && B(O.globalSelectedRowData, ie) ? null : ie;
              W({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: xe
              });
            }
          }
          break;
      }
    },
    [
      o,
      O.selectedIndex,
      O.filters,
      O.sortConfig,
      k,
      B,
      W,
      J,
      re,
      Y
    ]
  ), fe = me(
    (A, U) => k(A, U),
    [k]
  );
  if ($i(
    n,
    () => ({
      selectTab: (A) => {
        A >= 0 && A < o.length && (W({ type: "SET_SELECTED_INDEX", payload: A }), i?.(A));
      },
      refreshData: (A) => {
        console.log("Refreshing data for tab:", A ?? "all");
      },
      exportData: (A) => {
        const U = A ?? O.selectedIndex, oe = o[U];
        return oe ? oe.data : [];
      },
      getSelectedRows: (A) => O.globalSelectedRowData ? [] : [],
      clearSelection: (A) => {
        W({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (A) => {
        W({ type: "SET_FILTERS", payload: A });
      }
    }),
    [O.selectedIndex, O.selectedRows, o, i]
  ), b)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": L,
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
  if (m)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`,
        "data-testid": L,
        children: I || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: m })
        ] })
      }
    );
  const ue = We(null), he = We(null), Ee = We(null), [_e, Ne] = ze(!0);
  Qe(() => {
    if (!$) {
      Ne(!1);
      return;
    }
    if (M || x) {
      Ne(!1);
      return;
    }
    function A() {
      if (!ue.current || !he.current || !Ee.current) return;
      const K = ue.current.clientWidth, ae = Array.from(
        he.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), ce = ae.reduce((Re, be) => Re + be.offsetWidth, 0), pe = Ee.current.offsetWidth, ye = Math.max(8 * (ae.length - 1), 0), Te = ce + ye + pe + N <= K;
      Ne(Te);
    }
    const U = requestAnimationFrame(() => A()), oe = new ResizeObserver(() => A());
    return ue.current && oe.observe(ue.current), he.current && oe.observe(he.current), () => {
      cancelAnimationFrame(U), oe.disconnect();
    };
  }, [$, N, x, o.length, M]);
  const ge = Ee, C = me(() => ge.current ? Array.from(
    ge.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((A) => !A.hasAttribute("disabled")) : [], []), D = me(
    (A) => {
      const U = C();
      if (!U.length) return;
      const oe = Math.max(0, Math.min(A, U.length - 1));
      U[oe].focus(), J((K) => ({ ...K, focusArea: "actions", focusedActionIndex: oe }));
    },
    [C]
  ), G = me(() => D(0), [D]), V = me(
    (A, U) => {
      const { key: oe } = A, K = o.length - 1;
      switch (oe) {
        case "ArrowUp": {
          $ && !_e && (A.preventDefault(), G());
          break;
        }
        case "ArrowLeft": {
          A.preventDefault();
          const ae = U > 0 ? U - 1 : K;
          ee(ae), ne(ae), te.current[ae]?.focus();
          break;
        }
        case "ArrowRight": {
          if (A.preventDefault(), U === K && $ && _e) {
            G();
            return;
          }
          const ae = U < K ? U + 1 : 0;
          ee(ae), ne(ae), te.current[ae]?.focus();
          break;
        }
        case "ArrowDown": {
          A.preventDefault(), J((ae) => ({
            ...ae,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          A.preventDefault(), ee(0), ne(0), te.current[0]?.focus();
          break;
        }
        case "End": {
          A.preventDefault(), ee(K), ne(K), te.current[K]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          A.preventDefault(), ee(U);
          break;
        }
        case "Tab": {
          !A.shiftKey && U === K && $ && _e && G();
          break;
        }
      }
    },
    [o.length, ee, ne, $, _e, G]
  ), Q = me((A) => {
    const { key: U } = A, oe = C();
    if (!oe.length) return;
    const K = oe.findIndex((ae) => ae === document.activeElement);
    switch (U) {
      case "ArrowLeft": {
        if (_e)
          if (K > 0)
            A.preventDefault(), D(K - 1);
          else {
            A.preventDefault();
            const ae = o.length - 1;
            ee(ae), ne(ae), te.current[ae]?.focus(), J((ce) => ({ ...ce, focusArea: "tabs", focusedTabIndex: ae }));
          }
        break;
      }
      case "ArrowRight": {
        _e && (K < oe.length - 1 ? (A.preventDefault(), D(K + 1)) : (A.preventDefault(), ee(0), ne(0), te.current[0]?.focus(), J((ae) => ({ ...ae, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (_e)
          A.preventDefault(), J((ae) => ({ ...ae, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          A.preventDefault();
          const ae = O.selectedIndex;
          te.current[ae]?.focus(), J((ce) => ({ ...ce, focusArea: "tabs", focusedTabIndex: ae }));
        }
        break;
      }
    }
  }, [C, _e, D, o.length, ee, ne, O.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${u}`,
      id: p,
      "data-testid": L,
      ref: ue,
      children: [
        d && !v && /* @__PURE__ */ r.jsx("div", { id: j, className: "nhsuk-u-visually-hidden", children: d }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: T,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          yl,
          {
            sortConfig: O.sortConfig || [],
            columns: o.flatMap(
              (A) => A.columns.map((U) => ({ key: U.key, label: U.label }))
            ).filter(
              (A, U, oe) => oe.findIndex((K) => K.key === A.key) === U
              // Remove duplicates
            ),
            onSortChange: (A) => {
              W({ type: "SET_SORT", payload: A });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        $ && (!_e || M) && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: Ee,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: Q,
            children: $
          }
        ),
        !M && /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${_e ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": d ? v ? d : j : T,
              "aria-orientation": h,
              className: "aria-tabs-datagrid__tabs",
              ref: he,
              children: o.map((A, U) => {
                const oe = U === O.selectedIndex, K = A.disabled || f;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${A.id}`,
                    "aria-controls": `panel-${A.id}`,
                    "aria-selected": oe,
                    "aria-disabled": K,
                    tabIndex: oe ? 0 : -1,
                    ref: (ae) => {
                      te.current[U] = ae;
                    },
                    onClick: () => ee(U),
                    onKeyDown: (ae) => V(ae, U),
                    disabled: K,
                    className: [
                      "aria-tabs-datagrid__tab",
                      oe ? "aria-tabs-datagrid__tab--selected" : "",
                      K ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: A.label }),
                      O.tabLoadingStates[U] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      O.tabErrors[U] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  A.id
                );
              })
            }
          ),
          $ && _e && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: Ee,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: Q,
              children: $
            }
          )
        ] }),
        o.map((A, U) => {
          const oe = M ? U === 0 : U === O.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: M ? void 0 : "tabpanel",
              id: M ? void 0 : `panel-${A.id}`,
              "aria-labelledby": M ? void 0 : `tab-${A.id}`,
              tabIndex: 0,
              hidden: !oe,
              ref: (K) => {
                Z.current[U] = K;
              },
              className: `aria-tabs-datagrid__panel ${A.className || ""}`,
              "data-tab-panel": U,
              children: oe && (() => {
                const K = A.data.some(
                  (ce) => "ews_data" in ce
                ) ? fe(A.data, O.filters) : A.data, ae = Ae(() => {
                  const ce = O.sortConfig;
                  if (!ce || ce.length === 0) return K;
                  const pe = so(A.columns, ce, Rn.Last, a?.sortingOptions);
                  return [...K].sort(pe);
                }, [K, O.sortConfig, A.columns, a?.sortingOptions]);
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
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: A.columns.map((ce, pe) => {
                        const ye = O.sortConfig?.find(
                          (be) => be.key === ce.key
                        ), Te = !!ye, Re = z.focusArea === "headers" && z.focusedHeaderIndex === pe;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${Re ? "sortable-header--focused" : ""} ${Te ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: Re ? 0 : -1,
                            onClick: () => X(U, ce.key),
                            onKeyDown: (be) => le(be, pe),
                            "aria-sort": Te ? ye?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: ce.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${Te ? `sort-indicator--${ye?.direction}` : ""}`,
                                  children: [
                                    O.sortConfig && O.sortConfig.length > 0 && O.sortConfig.findIndex(
                                      (be) => be.key === ce.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${O.sortConfig.findIndex((be) => be.key === ce.key) + 1}`,
                                        "data-priority": O.sortConfig.findIndex(
                                          (be) => be.key === ce.key
                                        ) + 1,
                                        title: `Sort priority: ${O.sortConfig.findIndex((be) => be.key === ce.key) + 1}`,
                                        children: O.sortConfig.findIndex(
                                          (be) => be.key === ce.key
                                        ) + 1
                                      }
                                    ),
                                    Te && /* @__PURE__ */ r.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${ye?.direction}`,
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
                          ce.key
                        );
                      }) }) }),
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: ae.map((ce, pe) => {
                        const ye = O.globalSelectedRowData && B(O.globalSelectedRowData, ce), Te = z.focusArea === "cells" && z.focusedRowIndex === pe;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ye ? "data-row--selected" : ""} ${Te ? "data-row--focused" : ""}`,
                            "aria-selected": ye,
                            children: A.columns.map((Re, be) => {
                              const Xe = ce[Re.key];
                              let tt;
                              Re.tableRenderer ? tt = Re.tableRenderer(ce) : Re.render ? tt = Re.render(ce) : tt = Xe;
                              const ie = z.focusArea === "cells" && z.focusedRowIndex === pe && z.focusedColumnIndex === be, je = () => {
                                if (Re.customRenderer) {
                                  const xe = Re.customRenderer(
                                    Xe,
                                    ce
                                  );
                                  return /* @__PURE__ */ r.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: xe
                                    }
                                  );
                                }
                                return typeof Xe == "boolean" && tt === Xe ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  de(Xe),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: Xe ? "Yes" : "No" })
                                ] }) : Ke.isValidElement(tt) || typeof tt != "object" ? tt ?? "" : tt;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${ie ? "data-cell--focused" : ""}`,
                                  tabIndex: ie ? 0 : -1,
                                  onClick: () => {
                                    const ke = O.globalSelectedRowData && B(
                                      O.globalSelectedRowData,
                                      ce
                                    ) ? null : ce;
                                    W({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: ke
                                    });
                                  },
                                  onKeyDown: (xe) => se(xe, pe, be),
                                  children: je()
                                },
                                Re.key
                              );
                            })
                          },
                          pe
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
}), vr = {
  asc: "↑",
  desc: "↓"
}, Zh = (e) => [...e].sort((t, n) => t.priority - n.priority);
function Ua(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function qh(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Jh(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function Xh(e, t) {
  const n = t.find((o) => o.id === e), a = qh(t);
  return n ? n.priority < a : !1;
}
const r1 = ({
  sortConfig: e,
  onSortChange: t,
  className: n = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: o,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const u = Ae(() => Zh(e), [e]), f = me((L) => {
    if (l) return;
    const $ = e.map(
      (N) => N.id === L ? { ...N, direction: N.direction === "asc" ? "desc" : "asc" } : N
    );
    t($);
  }, [e, t, l]), h = me((L) => {
    if (l) return;
    const $ = e.findIndex((x) => x.id === L);
    if ($ <= 0) return;
    const N = [...e];
    [N[$], N[$ - 1]] = [N[$ - 1], N[$]], t(Ua(N));
  }, [e, t, l]), p = me((L) => {
    if (l) return;
    const $ = e.findIndex((x) => x.id === L);
    if ($ >= e.length - 1 || $ === -1) return;
    const N = [...e];
    [N[$], N[$ + 1]] = [N[$ + 1], N[$]], t(Ua(N));
  }, [e, t, l]), b = me((L) => {
    if (l) return;
    const $ = e.filter((N) => N.id !== L);
    t(Ua($));
  }, [e, t, l]), g = me(() => {
    l || t([]);
  }, [t, l]), m = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const L = u.map(($, N) => {
      const x = $.direction === "asc" ? "ascending" : "descending";
      return `${N + 1}. ${$.label} (${x})`;
    });
    if (L.length === 1)
      return `Sorted by: ${L[0]}`;
    if (L.length === 2)
      return `Sorted by: ${L.join(" and ")}`;
    {
      const $ = L.pop();
      return `Sorted by: ${L.join(", ")}, and ${$}`;
    }
  }, I = Ae(() => {
    const L = ["sort-description"];
    return i && L.push("sort-help"), d && L.push(d), L.join(" ");
  }, [i, d]);
  return e.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: `sort-status-control sort-status-control--empty ${n}`, children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: m()
    }
  ) }) : /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${n}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: m()
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": c,
        "aria-describedby": I,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((L) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ r.jsx(
                nt,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => b(L.id),
                  disabled: l,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-priority", children: L.priority + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: L.label }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(L.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${L.label}. Currently ${L.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: L.direction === "asc" ? vr.asc : vr.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h(L.id),
                          disabled: l || !Jh(L.id, e),
                          "aria-label": `Move ${L.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(L.id),
                          disabled: l || !Xh(L.id, e),
                          "aria-label": `Move ${L.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            L.id
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
      vr.asc,
      "/",
      vr.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, ts = (e, t) => t.map((n) => ({
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
})), lo = [
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
], Kh = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Qh = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, ep = (e) => {
  if (typeof e == "boolean") {
    const n = lo.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = lo.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, tp = (e) => `${e.name}-${e.bed_name}`, np = () => ({
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
}), a1 = (e) => {
  const t = np();
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
}, rp = {
  dataComparator: Kh,
  filterFunction: Qh,
  booleanRenderer: ep,
  getDataId: tp
};
function Qs(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: d = {},
    classPrefix: u = "adaptive-card"
  } = n, f = t.find(($) => $.key === a), h = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", p = () => o.filter((N) => !i.includes(N) && e[N]).slice(0, 3).map((N) => {
    const x = t.find((y) => y.key === N), _ = e[N], M = d[N] ? d[N](_, e) : x?.cardRenderer ? x.cardRenderer(e) : x?.render ? x.render(e) : _;
    return `${x?.label || N}: ${M}`;
  }).join(" • "), b = () => s.length === 0 ? null : s.filter(($) => e[$.fieldKey] !== void 0).map(($) => {
    const N = e[$.fieldKey], x = $.render ? $.render(N, e) : N;
    return `<span class="nhsuk-tag ${ap($, N)}">${x}</span>`;
  }).join(""), g = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", m = b(), I = p(), L = m ? `${I}${m ? `<div class="adaptive-card__badges">${m}</div>` : ""}` : I;
  return {
    variant: g(),
    heading: String(h),
    descriptionHtml: L,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${h}`
  };
}
function ap(e, t) {
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
const op = {
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
}, vl = ({
  data: e,
  columns: t,
  onSelect: n,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, c = e.ward_name, d = e.bed_name, u = e.ews_score, f = e.speciality, h = e.consultant;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${o} healthcare-card--${s}`,
      onClick: () => n?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${i}, Age ${l}, Ward ${c}, Bed ${d}`,
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
            nt,
            {
              color: ip(kl(u)),
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
            /* @__PURE__ */ r.jsx("dd", { children: c })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Bed" }),
            /* @__PURE__ */ r.jsx("dd", { children: d })
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
              onClick: (p) => {
                p.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ r.jsx(
            bt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (p) => {
                p.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ r.jsx(
            bt,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (p) => {
                p.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, wl = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        nt,
        {
          color: lp(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ r.jsxs(
        nt,
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
] }), Sl = ({
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
        nt,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ r.jsxs(
        nt,
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
] }), _l = ({
  data: e,
  onSelect: t,
  onAction: n,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, c = e.ews_data?.temperature, d = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
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
            s !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${sp(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ r.jsxs(
            nt,
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
          d !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-value", children: d })
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
function kl(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function sp(e) {
  return kl(e);
}
function ip(e) {
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
function lp(e) {
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
const cp = [
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
], Cl = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", dp = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, up = (e) => Cl(e) === "high" || e.status === "urgent" ? "primary" : "default", fp = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, hp = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: cp,
  hiddenFields: [],
  getPriority: Cl,
  getStatus: dp,
  getVariant: up,
  fieldRenderers: fp,
  classPrefix: "adaptive-card--healthcare"
}, pp = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", o = n.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ r.jsx(
      vl,
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
      wl,
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
      Sl,
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
      _l,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, mp = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, ei = {
  name: "healthcare",
  defaultCardConfig: hp,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: pp,
  fieldTypes: mp
};
function ti(e) {
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
function ni(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function gp(e, t) {
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
      for (let d = 0; d < Math.min(e.tabLoadingStates.length, s); d++)
        i[d] = e.tabLoadingStates[d], l[d] = e.tabErrors[d], c[d] = e.selectedRows[d];
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
function xp(e, t) {
  const [n, a] = ze("cards");
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
function bp(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function yp(e, t, n, a) {
  const o = a ? { ...a.defaultCardConfig, ...n } : { ...op, ...n };
  if (a && a.cardTemplates) {
    const s = bp(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), Qs(e, t, o);
}
const o1 = ({
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
  hideTabsIfSingle: d,
  // Standard AriaTabsDataGrid props
  tabPanels: u,
  dataConfig: f,
  selectedIndex: h,
  onTabChange: p,
  ariaLabel: b = "Data grid",
  ariaDescription: g,
  orientation: m = "horizontal",
  id: I,
  disabled: L = !1,
  className: $,
  ...N
}) => {
  const x = xp(e, t), _ = h !== void 0, M = h ?? 0, w = Ae(() => {
    if (u.some(
      (D) => D.data && D.data.length > 0 && ni(D.data)
    )) {
      const D = ti(n);
      return {
        ...ei.defaultCardConfig,
        ...D
      };
    } else
      return ti(n);
  }, [n, u]), y = Ae(() => u.some(
    (D) => D.data && D.data.length > 0 && ni(D.data)
  ) ? ei : void 0, [u]), v = Ae(() => ({
    selectedIndex: M,
    tabLoadingStates: new Array(u.length).fill(!1),
    tabErrors: new Array(u.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(u.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [M, u.length]), [j, T] = Ai(gp, v), P = We([]), k = We([]), S = We([]), E = We(null), [F, z] = ze({
    // If tabs are hidden (single panel), default focus to sort-controls; otherwise start at tabs
    focusArea: d && u.length === 1 ? "sort-controls" : "tabs",
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
  }), J = me((C) => {
    if (!C.current)
      return { columns: 1, rows: 0 };
    const D = C.current, G = D.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (G.length === 0)
      return { columns: 1, rows: 0 };
    const V = D.offsetWidth, A = G[0].offsetWidth, U = Math.floor(V / A) || 1, oe = Math.ceil(G.length / U);
    return { columns: U, rows: oe };
  }, []), H = me((C, D) => ({
    row: Math.floor(C / D),
    col: C % D
  }), []), O = me((C, D, G) => C * G + D, []), W = me((C, D, G, V) => {
    const { row: Q, col: A } = H(C, V);
    let U = Q, oe = A;
    switch (D) {
      case "up":
        U = Math.max(0, Q - 1);
        break;
      case "down":
        U = Math.min(Math.floor((G - 1) / V), Q + 1);
        break;
      case "left":
        oe = Math.max(0, A - 1);
        break;
      case "right":
        oe = Math.min(V - 1, A + 1);
        break;
    }
    const K = O(U, oe, V);
    return Math.min(K, G - 1);
  }, [H, O]);
  Qe(() => {
    F.isCardNavigationActive && F.focusedCardElementIndex >= 0 && F.cardElements.length > 0 && setTimeout(() => {
      const C = F.cardElements[F.focusedCardElementIndex];
      C && (C.element.focus(), C.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [F.isCardNavigationActive, F.focusedCardElementIndex, F.cardElements.length]), Qe(() => {
    const C = () => {
      if (x === "cards" && E.current) {
        const { columns: V, rows: Q } = J(E);
        z((A) => ({
          ...A,
          gridColumns: V,
          gridRows: Q
        }));
      }
    }, D = setTimeout(C, 200), G = () => {
      setTimeout(C, 100);
    };
    return window.addEventListener("resize", G), () => {
      clearTimeout(D), window.removeEventListener("resize", G);
    };
  }, [x, u, J]), Qe(() => {
    const C = j.tabLoadingStates.length, D = u.length;
    C !== D && T({ type: "ADJUST_ARRAYS", payload: { newLength: D } });
  }, [u.length, j.tabLoadingStates.length]), Qe(() => {
    _ && h !== j.selectedIndex && T({ type: "SET_SELECTED_INDEX", payload: h });
  }, [_, h, j.selectedIndex]);
  const B = me((C) => {
    C >= 0 && C < u.length && !u[C].disabled && (T({ type: "SET_SELECTED_INDEX", payload: C }), p?.(C));
  }, [u, p]), ee = me((C) => {
    console.log("Card selected:", C), T({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: C
    });
  }, []), R = me((C) => {
    const D = k.current[C];
    D && (D.focus(), D.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), ne = me((C) => {
    const D = k.current[C];
    if (!D) return [];
    const G = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), V = D.querySelectorAll(G);
    return Array.from(V).map((Q, A) => ({
      id: Q.id || `card-${C}-element-${A}`,
      element: Q,
      label: Q.getAttribute("aria-label") || Q.textContent?.trim() || Q.getAttribute("title") || `Element ${A + 1}`,
      type: Q.tagName.toLowerCase() === "button" ? "button" : Q.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(Q.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), te = We(null), Z = me((C) => {
    const D = te.current;
    if (!D) return;
    const G = document.createElement("div");
    G.setAttribute("aria-live", "polite"), G.setAttribute("aria-atomic", "true"), G.className = "sr-only", G.textContent = C, D.appendChild(G), setTimeout(() => {
      D.contains(G) && D.removeChild(G);
    }, 1e3);
  }, []), X = me((C) => {
    const D = C.filter((V) => V.sortable !== !1), G = [
      { value: "", label: "Sort by..." }
    ];
    return D.forEach((V) => {
      const Q = V.label || V.key;
      V.key === "name" ? G.push(
        { value: `${V.key}-asc`, label: `${Q} (A-Z)` },
        { value: `${V.key}-desc`, label: `${Q} (Z-A)` }
      ) : V.key === "ews_score" || V.key.includes("score") ? G.push(
        { value: `${V.key}-desc`, label: `${Q} (High-Low)` },
        { value: `${V.key}-asc`, label: `${Q} (Low-High)` }
      ) : V.key === "age" || V.key.includes("date") || V.key.includes("time") ? G.push(
        { value: `${V.key}-desc`, label: `${Q} (Oldest-Youngest)` },
        { value: `${V.key}-asc`, label: `${Q} (Youngest-Oldest)` }
      ) : G.push(
        { value: `${V.key}-asc`, label: `${Q} (A-Z)` },
        { value: `${V.key}-desc`, label: `${Q} (Z-A)` }
      );
    }), G;
  }, []), re = me((C, D) => D ? [...C].sort((G, V) => {
    const Q = G[D.key], A = V[D.key];
    if (Q == null && A == null) return 0;
    if (Q == null) return 1;
    if (A == null) return -1;
    const U = Number(Q), oe = Number(A);
    if (!isNaN(U) && !isNaN(oe))
      return D.direction === "asc" ? U - oe : oe - U;
    const K = String(Q).toLowerCase(), ae = String(A).toLowerCase(), ce = K.localeCompare(ae);
    return D.direction === "asc" ? ce : -ce;
  }) : C, []), de = me((C) => {
    if (!C) {
      z((K) => ({ ...K, cardSortConfig: null })), Z("Card sorting cleared");
      return;
    }
    const [D, G] = C.split("-"), V = { key: D, direction: G };
    z((K) => ({ ...K, cardSortConfig: V }));
    const U = u[j.selectedIndex]?.columns.find((K) => K.key === D)?.label || D;
    Z(`Cards sorted by ${U} in ${G === "asc" ? "ascending" : "descending"} order`);
  }, [u, j.selectedIndex, Z]), Y = me((C) => {
    const V = u[j.selectedIndex]?.columns.find((A) => A.key === C.key)?.label || C.key, Q = C.direction === "asc" ? "ascending" : "descending";
    return `${V} (${Q})`;
  }, [u, j.selectedIndex]), le = me((C) => {
    const D = u[j.selectedIndex];
    if (o) {
      const G = j.sortConfig;
      return !G || G.length === 0 ? C : [...C].sort((V, Q) => {
        for (const { key: A, direction: U } of G) {
          let oe = V[A], K = Q[A];
          const ae = D?.columns.find((be) => be.key === A);
          if (ae?.cardRenderer ? (oe = ae.cardRenderer(V), K = ae.cardRenderer(Q)) : ae?.render && (oe = ae.render(V), K = ae.render(Q)), oe == null && K == null) continue;
          if (oe == null) return U === "asc" ? -1 : 1;
          if (K == null) return U === "asc" ? 1 : -1;
          const ce = Number(oe), pe = Number(K);
          if (!isNaN(ce) && !isNaN(pe)) {
            const be = ce - pe;
            if (be !== 0) return U === "asc" ? be : -be;
            continue;
          }
          const ye = String(oe).toLowerCase(), Te = String(K).toLowerCase(), Re = ye.localeCompare(Te);
          if (Re !== 0) return U === "asc" ? Re : -Re;
        }
        return 0;
      });
    } else
      return re(C, F.cardSortConfig);
  }, [o, j.sortConfig, F.cardSortConfig, re, u, j.selectedIndex]), se = me((C, D) => {
    const G = ne(C), V = G[D];
    if (V) {
      V.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const Q = `Focused on ${V.label}, ${V.type} ${D + 1} of ${G.length} within card`;
      Z(Q);
    }
  }, [ne, Z]), fe = me((C) => {
    P.current[C]?.focus();
  }, []), ue = me(() => {
    const C = S.current[0];
    if (!C) return [];
    const D = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), G = C.querySelectorAll(D);
    return Array.from(G);
  }, []), he = me((C) => {
    if (C === 0) {
      const D = S.current[0], G = D?.querySelector(".sort-controls-row");
      if (G) {
        G.setAttribute("tabindex", "-1"), G.focus();
        const Q = `Sort controls group with ${ue().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        Z(Q);
      } else D && D.focus();
    } else {
      const D = ue(), G = C - 1, V = D[G];
      if (V) {
        V.focus();
        const Q = V.tagName.toLowerCase() === "select", A = V.tagName.toLowerCase() === "button", U = Q ? "dropdown" : A ? "button" : "control", oe = Q ? ". Use Space key to open dropdown" : "", K = `${U} ${G + 1} of ${D.length}${oe}`;
        Z(K);
      }
    }
  }, [ue, Z]), Ee = me((C, D) => {
    const { key: G } = C, V = u[j.selectedIndex], Q = V?.data.length || 0;
    if (G === "ArrowLeft" && C.shiftKey) {
      C.preventDefault(), C.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (G === "ArrowRight" && C.shiftKey) {
      C.preventDefault(), C.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!F.isCardNavigationActive) {
      switch (G) {
        case "ArrowUp":
          if (C.preventDefault(), D === 0)
            z((K) => ({ ...K, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), he(0);
          else {
            const K = W(D, "up", Q, F.gridColumns);
            K !== D && (z((ae) => ({ ...ae, focusedCardIndex: K })), R(K), Z(`Moved to card ${K + 1} of ${Q}`));
          }
          break;
        case "ArrowDown":
          C.preventDefault();
          const A = W(D, "down", Q, F.gridColumns);
          A !== D && (z((K) => ({ ...K, focusedCardIndex: A })), R(A), Z(`Moved to card ${A + 1} of ${Q}`));
          break;
        case "ArrowLeft":
          C.preventDefault();
          const U = W(D, "left", Q, F.gridColumns);
          U !== D ? (z((K) => ({ ...K, focusedCardIndex: U })), R(U), Z(`Moved to card ${U + 1} of ${Q}`)) : j.selectedIndex > 0 && (T({ type: "SET_SELECTED_INDEX", payload: j.selectedIndex - 1 }), z((K) => ({ ...K, focusArea: "tabs" })), setTimeout(() => fe(j.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          C.preventDefault();
          const oe = W(D, "right", Q, F.gridColumns);
          oe !== D ? (z((K) => ({ ...K, focusedCardIndex: oe })), R(oe), Z(`Moved to card ${oe + 1} of ${Q}`)) : j.selectedIndex < u.length - 1 && (T({ type: "SET_SELECTED_INDEX", payload: j.selectedIndex + 1 }), z((K) => ({ ...K, focusArea: "tabs" })), setTimeout(() => fe(j.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (V?.data[D]) {
            C.preventDefault(), z((ae) => ({
              ...ae,
              selectedCardIndex: D
            }));
            const K = ne(D);
            K.length > 0 ? (z((ae) => ({
              ...ae,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: K,
              selectedCardIndex: D
              // Ensure selection is maintained
            })), Z(`Card ${D + 1} selected and navigation activated. ${K.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : Z(`Card ${D + 1} selected.`);
          }
          break;
        case " ":
          if (V?.data[D]) {
            C.preventDefault(), z((ae) => ({
              ...ae,
              selectedCardIndex: ae.selectedCardIndex === D ? -1 : D
            }));
            const K = F.selectedCardIndex === D;
            Z(`Card ${D + 1} ${K ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (G) {
      case "ArrowUp":
      case "ArrowLeft":
        C.preventDefault();
        const A = Math.max(0, F.focusedCardElementIndex - 1);
        z((ae) => ({ ...ae, focusedCardElementIndex: A })), se(D, A);
        break;
      case "ArrowDown":
      case "ArrowRight":
        C.preventDefault();
        const U = Math.min(F.cardElements.length - 1, F.focusedCardElementIndex + 1);
        z((ae) => ({ ...ae, focusedCardElementIndex: U })), se(D, U);
        break;
      case "Enter":
        C.preventDefault();
        const oe = F.cardElements[F.focusedCardElementIndex];
        oe && (oe.element.click(), Z(`Activated ${oe.label}`));
        break;
      case " ":
        C.preventDefault();
        const K = F.cardElements[F.focusedCardElementIndex];
        if (K) {
          const ae = new MouseEvent("dblclick", { bubbles: !0 });
          K.element.dispatchEvent(ae), Z(`Double-clicked ${K.label}`);
        }
        break;
      case "Escape":
        C.preventDefault(), z((ae) => ({
          ...ae,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => R(D), 0), Z("Exited card navigation, returned to card level");
        break;
      case "Home":
        C.preventDefault(), F.cardElements.length > 0 && (z((ae) => ({ ...ae, focusedCardElementIndex: 0 })), se(D, 0));
        break;
      case "End":
        if (C.preventDefault(), F.cardElements.length > 0) {
          const ae = F.cardElements.length - 1;
          z((ce) => ({ ...ce, focusedCardElementIndex: ae })), se(D, ae);
        }
        break;
    }
  }, [F, j.selectedIndex, u, ee, R, fe, z, ne, se, Z]), _e = me((C) => {
    const D = P.current[C], G = D?.parentElement;
    if (!D || !G) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const V = D.getBoundingClientRect(), Q = G.getBoundingClientRect();
    V.left >= Q.left && V.right <= Q.right || (console.log("Tab not visible, scrolling into view (mobile)"), D.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), Ne = me((C, D) => {
    if (x !== "cards")
      return;
    const { key: G } = C;
    switch (G) {
      case "ArrowLeft":
        C.preventDefault();
        const V = D > 0 ? D - 1 : u.length - 1;
        B(V), z((oe) => ({ ...oe, focusedTabIndex: V })), P.current[V]?.focus(), _e(V);
        break;
      case "ArrowRight":
        C.preventDefault();
        const Q = D < u.length - 1 ? D + 1 : 0;
        B(Q), z((oe) => ({ ...oe, focusedTabIndex: Q })), P.current[Q]?.focus(), _e(Q);
        break;
      case "ArrowDown":
        C.preventDefault();
        const A = u[j.selectedIndex];
        A && A.columns && A.columns.length > 0 ? (z((oe) => ({
          ...oe,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), he(0)) : (z((oe) => ({
          ...oe,
          focusArea: "cards",
          focusedCardIndex: 0
        })), R(0));
        break;
      case "Home":
        C.preventDefault(), B(0), z((oe) => ({ ...oe, focusedTabIndex: 0 })), P.current[0]?.focus(), _e(0);
        break;
      case "End":
        C.preventDefault();
        const U = u.length - 1;
        B(U), z((oe) => ({ ...oe, focusedTabIndex: U })), P.current[U]?.focus(), _e(U);
        break;
      case "Enter":
      case " ":
        C.preventDefault(), B(D);
        break;
    }
  }, [u.length, B, x, R, z, _e]), ge = me((C, D) => {
    if (x !== "cards")
      return;
    const { key: G } = C, V = u[j.selectedIndex];
    if (D === 0 && !F.isSortControlsActive) {
      switch (G) {
        case "ArrowUp":
          C.preventDefault(), z((A) => ({
            ...A,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), fe(j.selectedIndex);
          break;
        case "ArrowDown":
          C.preventDefault(), V?.data && V.data.length > 0 && (z((A) => ({
            ...A,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), R(0));
          break;
        case "Enter":
        case " ":
          C.preventDefault();
          const Q = ue();
          if (Q.length > 0) {
            z((U) => ({
              ...U,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), he(1);
            const A = `Entered sort controls navigation mode. ${Q.length} controls available. Use arrow keys to navigate between controls.`;
            Z(A);
          }
          break;
        case "Escape":
          C.preventDefault(), z((A) => ({
            ...A,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), fe(j.selectedIndex);
          break;
      }
      return;
    }
    if (F.isSortControlsActive) {
      const A = ue().length;
      switch (G) {
        case "ArrowLeft":
          C.preventDefault();
          const U = F.focusedSortControlIndex > 1 ? F.focusedSortControlIndex - 1 : A;
          z((K) => ({ ...K, focusedSortControlIndex: U })), he(U);
          break;
        case "ArrowRight":
          C.preventDefault();
          const oe = F.focusedSortControlIndex < A ? F.focusedSortControlIndex + 1 : 1;
          z((K) => ({ ...K, focusedSortControlIndex: oe })), he(oe);
          break;
        case "ArrowDown":
          if (C.preventDefault(), F.isSortControlsActive) {
            const K = F.focusedSortControlIndex < A ? F.focusedSortControlIndex + 1 : 1;
            z((ae) => ({ ...ae, focusedSortControlIndex: K })), he(K);
          } else
            V?.data && V.data.length > 0 && (z((K) => ({
              ...K,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), R(0));
          break;
        case "ArrowUp":
          C.preventDefault(), z((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), he(0);
          break;
        case "Escape":
          C.preventDefault(), z((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), he(0);
          break;
      }
    }
  }, [x, u, j.selectedIndex, F.isSortControlsActive, F.focusedSortControlIndex, he, fe, R, z, Z]);
  if (x === "cards") {
    const C = !!d && u.length === 1, D = C ? u[0] : u[j.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${$ || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        !C && /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": b,
            "aria-describedby": `${g || ""} ${I ? `${I}-navigation-help` : ""}`.trim(),
            "aria-orientation": m,
            className: "aria-tabs-datagrid__tabs",
            children: u.map((G, V) => {
              const Q = V === j.selectedIndex, A = G.disabled || L;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${G.id}`,
                  "aria-controls": `panel-${G.id}`,
                  "aria-selected": Q,
                  "aria-disabled": A,
                  tabIndex: Q ? 0 : -1,
                  ref: (U) => {
                    P.current[V] = U;
                  },
                  onClick: () => B(V),
                  onKeyDown: (U) => Ne(U, V),
                  disabled: A,
                  className: [
                    "aria-tabs-datagrid__tab",
                    Q ? "aria-tabs-datagrid__tab--selected" : "",
                    A ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: G.label }),
                    j.tabLoadingStates[V] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    j.tabErrors[V] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                G.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      D && D.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          yl,
          {
            sortConfig: j.sortConfig || [],
            columns: D.columns.map((G) => ({ key: G.key, label: G.label })),
            onSortChange: (G) => {
              T({ type: "SET_SORT", payload: G });
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
            tabIndex: F.focusArea === "sort-controls" ? 0 : -1,
            ref: (G) => {
              S.current[0] = G;
            },
            onKeyDown: (G) => ge(G, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${D.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  jr,
                  {
                    id: `card-sort-${D.id}`,
                    name: `card-sort-${D.id}`,
                    value: F.cardSortConfig ? `${F.cardSortConfig.key}-${F.cardSortConfig.direction}` : "",
                    onChange: (G) => de(G.target.value),
                    className: "sort-select",
                    children: X(D.columns).map((G) => /* @__PURE__ */ r.jsx("option", { value: G.value, children: G.label }, G.value))
                  }
                )
              ] }),
              F.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  Y(F.cardSortConfig)
                ] }),
                /* @__PURE__ */ r.jsx(
                  bt,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => de(""),
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
          ref: E,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${D?.label || "Data"} cards in ${F.gridRows} rows and ${F.gridColumns} columns`,
          "aria-rowcount": F.gridRows,
          "aria-colcount": F.gridColumns,
          id: `panel-${D?.id}`,
          "aria-labelledby": `tab-${D?.id}`,
          children: le(D?.data || []).map((G, V) => {
            const Q = F.selectedCardIndex === V, A = F.focusedCardIndex === V && F.focusArea === "cards", U = F.focusedCardIndex === V && F.focusArea === "card" && F.isCardNavigationActive, oe = V === 0 && F.focusArea !== "cards", K = A || oe, ae = H(V, F.gridColumns);
            if (n.cardTemplate) {
              const ye = n.cardTemplate(G, D.columns);
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": ae.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      ref: (Te) => {
                        k.current[V] = Te;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        Q ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        A ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        U ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": ae.col + 1,
                      "aria-selected": Q,
                      "aria-expanded": U,
                      "aria-description": U ? `Card navigation active. ${F.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: K ? 0 : -1,
                      onClick: () => {
                        z((Te) => ({
                          ...Te,
                          selectedCardIndex: Te.selectedCardIndex === V ? -1 : V
                        })), ee(G);
                      },
                      onKeyDown: (Te) => Ee(Te, V),
                      onFocus: () => {
                        z((Te) => Te.isCardNavigationActive ? Te : Te.focusedCardIndex !== V || Te.focusArea !== "cards" ? {
                          ...Te,
                          focusedCardIndex: V,
                          focusArea: "cards"
                        } : Te);
                      },
                      children: ye
                    }
                  )
                },
                `card-${V}`
              );
            }
            const ce = yp(G, D.columns, w, y), pe = [
              ce.className || "",
              Q ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              A ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              U ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": ae.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      Q ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      A ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      U ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": ae.col + 1,
                    "aria-selected": Q,
                    "aria-expanded": U,
                    onKeyDown: (ye) => {
                      ye.key === "Enter" && (ye.preventDefault(), z((Te) => ({
                        ...Te,
                        selectedCardIndex: V
                      }))), Ee(ye, V);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      ml,
                      {
                        ...ce,
                        ref: (ye) => {
                          k.current[V] = ye;
                        },
                        className: pe,
                        "aria-label": `${ce["aria-label"] || ce.heading}. ${U ? `Card navigation active with ${F.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: K ? 0 : -1,
                        onClick: () => {
                          z((ye) => ({
                            ...ye,
                            selectedCardIndex: ye.selectedCardIndex === V ? -1 : V
                          })), ee(G);
                        },
                        onKeyDown: (ye) => Ee(ye, V),
                        onFocus: () => {
                          F.isCardNavigationActive || z((ye) => ye.focusedCardIndex !== V || ye.focusArea !== "cards" ? {
                            ...ye,
                            focusedCardIndex: V,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : ye);
                        }
                      }
                    )
                  }
                )
              },
              `card-${V}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: te,
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
  return x === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${$ || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      io,
      {
        tabPanels: u,
        dataConfig: f,
        ariaLabel: b,
        ariaDescription: g,
        orientation: m,
        id: I,
        disabled: L,
        selectedIndex: h,
        onTabChange: p,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: c,
        hideTabsIfSingle: d,
        ...N
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${$ || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      io,
      {
        tabPanels: u,
        dataConfig: f,
        ariaLabel: b,
        ariaDescription: g,
        orientation: m,
        id: I,
        disabled: L,
        selectedIndex: h,
        onTabChange: p,
        actions: l,
        forceActionsAbove: c,
        hideTabsIfSingle: d,
        ...N
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, Nl = (e) => {
  const t = lo.find((n) => n.value === e);
  return t ? t.icon : null;
}, vp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = n.discountedPrice || n.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => Nl(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, wp = (e) => ts(e, [
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
]), Sp = {
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
  booleanRenderer: (e) => Nl(e),
  getDataId: (e) => `financial-${e.id}`
}, _p = (e) => ts(e, [
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
]), kp = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: vp,
    createTabs: wp
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Sp,
    createTabs: _p
  }
}, ri = (e, t) => {
  const n = kp[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, jl = [
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
], Cp = [
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
], Np = [
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
], ai = [
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
], oi = [
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
], si = [
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
], Mp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Ip = () => [
  {
    id: "patients",
    label: "Patients",
    data: jl,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      vl,
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
    data: Cp,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      wl,
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
    data: Np,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Sl,
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
    data: jp,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      _l,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, a) => console.log("Vitals action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], Dp = () => {
  const [e, t] = ze("healthcare"), n = Ae(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: rp,
      tabPanels: Ip(),
      data: jl
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...ri("ecommerce", ai),
      data: ai
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...ri("financial", oi),
      data: oi
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Mp,
      tabPanels: ts(si, [
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
      data: si
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
      io,
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
}, s1 = Dp, Ml = (e) => /* @__PURE__ */ r.jsx(zi, { ...e }), i1 = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = xn.TwoThirds,
  mainWrapperSize: o,
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  service: c,
  navigation: d,
  search: u,
  account: f,
  organisation: h,
  logo: p,
  className: b,
  ...g
}) => {
  const m = {
    service: c,
    navigation: d,
    search: u,
    account: f,
    organisation: h,
    logo: p,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(pl, { ...s }),
    /* @__PURE__ */ r.jsx(Vi, { ...m }),
    /* @__PURE__ */ r.jsx(Ml, { className: b, ...g, children: /* @__PURE__ */ r.jsx(Oi, { size: o, children: /* @__PURE__ */ r.jsx(on, { children: /* @__PURE__ */ r.jsxs(Xn, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(Xt, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(Zi, { ...l })
  ] });
}, l1 = ({
  children: e,
  title: t,
  pageHeadingProps: n,
  columnWidth: a = xn.TwoThirds,
  mainWrapperSize: o = "small",
  // Default to small size for transactional forms
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  backLinkProps: c,
  serviceName: d,
  serviceHref: u,
  logo: f,
  className: h,
  ...p
}) => {
  const b = {
    service: {
      text: d,
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
    /* @__PURE__ */ r.jsx(pl, { ...s }),
    /* @__PURE__ */ r.jsx(Vi, { ...b }),
    /* @__PURE__ */ r.jsxs(Ml, { className: h, ...p, children: [
      c && /* @__PURE__ */ r.jsx(Jn, { ...c }),
      /* @__PURE__ */ r.jsx(Oi, { size: o, children: /* @__PURE__ */ r.jsx(on, { children: /* @__PURE__ */ r.jsxs(Xn, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(Xt, { style: { marginTop: "3rem" }, size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(Zi, { ...l })
  ] });
};
function Tp(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = q.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = q.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return q.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    o ? c.set(n, String(o)) : c.delete(n), c.set(a, i ? "1" : "0");
    const d = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", d);
  }, [o, i, t, n, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const Lp = ({
  className: e
}) => /* @__PURE__ */ r.jsx(
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
), $p = ({
  className: e
}) => /* @__PURE__ */ r.jsx(
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
), Hr = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = we("nhsuk-back-link", a), c = we("nhsuk-back-link__link"), d = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ r.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ r.jsx("button", { className: c, type: "button", onClick: s, ...i, children: d() }) : /* @__PURE__ */ r.jsx("a", { className: c, href: n, ...i, children: d() }) });
};
Hr.displayName = "ForwardLink";
const Ap = ({
  show: e,
  label: t,
  contentHeaderLevel: n,
  detailActive: a,
  headerContext: o,
  backLabel: s,
  nextLabel: i,
  onBack: l,
  onForward: c,
  renderContentHeader: d,
  item: u,
  contentSubheader: f,
  tertiaryInlineActive: h
}) => {
  if (!e || !u) return null;
  const p = `h${n}`, b = t ? q.createElement(
    p,
    {
      style: {
        marginLeft: a ? 32 : 0,
        marginRight: a ? 32 : 0
      }
    },
    t
  ) : null, g = a ? /* @__PURE__ */ r.jsx(
    Jn,
    {
      element: "button",
      text: s,
      style: { marginRight: 16 },
      onClick: l
    }
  ) : void 0, m = h ? void 0 : /* @__PURE__ */ r.jsx(Hr, { element: "button", text: i, onClick: c });
  if (d)
    return /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: d({
      item: u,
      detailActive: a,
      context: o,
      backLink: g,
      defaultHeading: b
    }) });
  const I = u && f ? typeof f == "function" ? f(u) : f : null;
  return /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", width: "100%" }, children: [
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
          g,
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
                b,
                I && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: I })
              ]
            }
          )
        ]
      }
    ),
    m && /* @__PURE__ */ r.jsx("div", { style: { marginLeft: "auto" }, children: m })
  ] }) });
};
function Ep({
  layout: e,
  items: t,
  getId: n,
  selectedId: a,
  isLoading: o,
  emptyState: s,
  renderItemContent: i,
  onSelect: l,
  orientation: c,
  initialFocus: d,
  onFocusChange: u,
  justSelectedId: f,
  listRef: h,
  onKeyDownList: p,
  navigationInstructions: b,
  controlledFocusedIndex: g
}) {
  const [m, I] = q.useState(
    () => d === "first" ? 0 : -1
  ), L = q.useRef(0);
  q.useEffect(() => {
    if (typeof g == "number" || m < 0 || !h?.current) return;
    const M = Array.from(
      h.current.querySelectorAll("[data-nav-item]")
    )[m];
    if (M) {
      document.activeElement !== M && M.focus(), L.current = m;
      const w = t[m];
      u?.(w ? n(w) : void 0, w, m);
    }
  }, [g, m, t, u, n, h]);
  const $ = (_) => {
    if (p) return p(_);
    const M = c === "vertical" ? "ArrowDown" : "ArrowRight", w = c === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (_.key === M)
      _.preventDefault(), I((y) => Math.min(t.length - 1, y + 1));
    else if (_.key === w)
      _.preventDefault(), I((y) => Math.max(0, y - 1));
    else if (_.key === "Home")
      _.preventDefault(), I(0);
    else if (_.key === "End")
      _.preventDefault(), I(t.length - 1);
    else if (_.key === "Enter" || _.key === " ") {
      _.preventDefault();
      const y = t[m];
      y && !y.disabled && l(n(y), y, m);
    }
  };
  if (e === "cards")
    return /* @__PURE__ */ r.jsxs(
      "ul",
      {
        className: "nhs-navigation-split-view__cards",
        role: "listbox",
        "aria-activedescendant": a ? String(a) : void 0,
        children: [
          t.map((_, M) => {
            const w = n(_), y = w === a;
            return /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                role: "option",
                "aria-selected": y,
                children: /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    id: String(w),
                    type: "button",
                    className: "nhs-navigation-split-view__card",
                    "data-selected": y || void 0,
                    "data-disabled": _.disabled || void 0,
                    disabled: _.disabled,
                    onClick: () => !_.disabled && l(w, _, M),
                    children: [
                      _.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: _.icon }),
                      /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: _.label }),
                      _.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: _.description }),
                      i?.(_),
                      _.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: _.badge })
                    ]
                  }
                )
              },
              String(w)
            );
          }),
          t.length === 0 && !o && /* @__PURE__ */ r.jsx(
            "li",
            {
              className: "nhs-navigation-split-view__card-item",
              "aria-disabled": "true",
              children: s || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
            }
          )
        ]
      }
    );
  const N = "nsv-nav-instructions", x = q.useMemo(() => q.memo(
    ({
      item: _,
      idx: M,
      selected: w,
      focused: y
    }) => {
      const v = n(_), j = _.disabled ? { "aria-disabled": !0, tabIndex: -1 } : {
        tabIndex: y ? 0 : -1,
        onClick: () => {
          L.current = M, l(v, _, M);
        },
        onKeyDown: (T) => {
          (T.key === "Enter" || T.key === " ") && (T.preventDefault(), L.current = M, l(v, _, M));
        }
      };
      return /* @__PURE__ */ r.jsxs(
        "li",
        {
          id: String(v),
          "data-nav-item": !0,
          className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
          role: "option",
          "aria-selected": w,
          "aria-current": w ? "true" : void 0,
          "data-selected": w || void 0,
          "data-disabled": _.disabled || void 0,
          ...j,
          children: [
            _.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: _.icon }),
            /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
              /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: _.label }),
              _.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: _.description }),
              i?.(_)
            ] }),
            _.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: _.badge })
          ]
        }
      );
    }
  ), [n, l, i]);
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs(
      "ul",
      {
        ref: h,
        className: "nhs-navigation-split-view__list",
        onKeyDown: $,
        role: "listbox",
        "aria-label": "Navigation items",
        "aria-describedby": N,
        "aria-activedescendant": a ? String(a) : void 0,
        children: [
          t.map((_, M) => /* @__PURE__ */ r.jsx(
            x,
            {
              item: _,
              idx: M,
              selected: n(_) === a,
              focused: /* @__PURE__ */ (() => {
                const w = typeof g == "number" ? g : m;
                return M === w || w === -1 && M === 0 && d === "first";
              })(),
              "data-just-selected": n(_) === f ? "true" : void 0
            },
            String(n(_))
          )),
          t.length === 0 && !o && /* @__PURE__ */ r.jsx(
            "li",
            {
              className: "nhs-navigation-split-view__list-item",
              "aria-disabled": "true",
              children: s || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: N,
        style: {
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)"
        },
        children: b || "Use arrow keys to navigate, Enter to open."
      }
    )
  ] });
}
const Cn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function ii() {
  return typeof window > "u" ? Cn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function ns() {
  const [e, t] = q.useState(ii());
  q.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(ii());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const n = q.useCallback((s) => e >= Cn[s], [e]), a = q.useCallback((s) => e < Cn[s], [e]), o = q.useCallback((s, i) => e >= Cn[s] && e < Cn[i], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: o,
    /** Raw numeric values */
    values: Cn
  };
}
function c1(e) {
  const { width: t, values: n } = ns();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = n[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function Fp(e, t, n) {
  const { up: a } = ns(), [o, s] = q.useState(!1);
  q.useEffect(() => s(!0), []);
  const i = o && a("medium"), l = o && a("xlarge");
  let c;
  return e ? c = e : i ? c = "two-column" : c = "list", !e && t && n && l && (c = "three-column"), { effectiveLayout: c, hydrated: o, isAtLeastMedium: i, isAtLeastXlarge: l };
}
function Pp(e) {
  const {
    enabled: t,
    isAtLeastMedium: n,
    initiallyCollapsed: a,
    persist: o,
    storageKey: s,
    urlParam: i,
    onChange: l
  } = e, c = q.useMemo(() => {
    if (o && (o === "url" || o === "both") && typeof window < "u") {
      const p = new URLSearchParams(window.location.search).get(i);
      if (p === "1") return !0;
      if (p === "0") return !1;
    }
    if (o && (o === "localStorage" || o === "both") && typeof window < "u")
      try {
        const h = window.localStorage.getItem(s);
        if (h === "1") return !0;
        if (h === "0") return !1;
      } catch {
      }
    return a;
  }, [o, a, s, i]), [d, u] = q.useState(c);
  q.useEffect(() => {
    l?.(d);
  }, [d, l]);
  const f = q.useCallback(() => {
    t && n && u((h) => !h);
  }, [t, n]);
  return q.useEffect(() => {
    if (!(!o || typeof window > "u")) {
      if (o === "localStorage" || o === "both")
        try {
          window.localStorage.setItem(s, d ? "1" : "0");
        } catch {
        }
      if (o === "url" || o === "both") {
        const h = new URLSearchParams(window.location.search);
        h.set(i, d ? "1" : "0");
        const p = `${window.location.pathname}?${h.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", p);
      }
    }
  }, [d, o, s, i]), { collapsed: d, toggle: f };
}
function Rp(e) {
  const {
    items: t,
    selectedId: n,
    defaultSelectedId: a,
    onSelectionChange: o,
    renderItemContent: s,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: c,
    animated: d = !0,
    backLabel: u = "Back",
    nextLabel: f = "Next",
    isLoading: h = !1,
    emptyState: p,
    a11y: b,
    className: g,
    getId: m = (ve) => ve.id,
    orientation: I = "vertical",
    autoEnableThirdColumn: L = !0,
    onDrillChange: $,
    navigationInstructions: N = "Use arrow keys to navigate, Enter to open.",
    initialFocus: x = "first",
    skipFocusOnSelect: _ = !1,
    skipAnnouncements: M = !1,
    onFocusChange: w,
    syncUrl: y = !1,
    urlParamSelected: v = "nsv",
    urlParamDrill: j = "nsvDrill",
    urlSyncDebounceMs: T = 0,
    lazySecondary: P = !1,
    navFooter: k,
    collapsibleNav: S = !1,
    navInitiallyCollapsed: E = !1,
    onNavCollapseChange: F,
    collapseToggleLabelShow: z = "Show navigation",
    collapseToggleLabelHide: J = "Hide navigation",
    collapseToggleIconShow: H,
    collapseToggleIconHide: O,
    persistNavCollapsed: W,
    navCollapsedStorageKey: B = "nsvCollapsed",
    navCollapsedUrlParam: ee = "nsvCollapsed",
    autoContentHeader: R,
    contentHeaderLevel: ne = 2,
    renderContentHeader: te,
    contentSubheader: Z,
    secondarySubheader: X
  } = e, { effectiveLayout: re, hydrated: de, isAtLeastMedium: Y } = Fp(
    c,
    L,
    !!l
  ), le = Tp({
    enabled: y,
    paramSelected: v,
    paramDrill: j
  }), [se, fe] = q.useState(
    () => le.selectedId !== void 0 ? le.selectedId : a
  ), ue = n !== void 0 ? n : se, he = t.find((ve) => m(ve) === ue), [Ee, _e] = q.useState(
    void 0
  );
  q.useEffect(() => {
    if (ue === void 0) return;
    _e(ue);
    const ve = setTimeout(() => _e(void 0), 220);
    return () => clearTimeout(ve);
  }, [ue]);
  const Ne = q.useRef(null), ge = q.useRef(null), C = q.useRef(null), D = q.useRef(null), [G, V] = q.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [Q, A] = q.useState(() => "nav"), [U, oe] = q.useState(0), K = () => [
    D.current,
    ge.current,
    C.current
  ].filter(Boolean), ae = (ve) => {
    const $e = K(), Oe = Math.max(0, Math.min(ve, $e.length - 1));
    pe($e[Oe]), oe(Oe);
  }, ce = q.useCallback(
    (ve) => ve ? Array.from(ve.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (Oe) => !Oe.hasAttribute("disabled") && Oe.tabIndex !== -1
    ) : [],
    []
  ), pe = q.useCallback((ve) => {
    if (ve)
      try {
        ve.focus({ preventScroll: !0 });
      } catch {
        ve.focus();
      }
  }, []), ye = q.useCallback(
    (ve) => {
      const $e = ce(ge.current);
      if (!$e.length) {
        pe(ge.current);
        return;
      }
      const Oe = Math.max(0, Math.min(ve, $e.length - 1)), Je = $e[Oe];
      Je.focus(), setTimeout(() => {
        document.activeElement !== Je && (Je.focus(), setTimeout(() => {
          document.activeElement !== Je && Je.click();
        }, 10));
      }, 10), V((st) => ({ ...st, contentIndex: Oe }));
      const vt = (st) => {
        st.key === "Escape" && (st.preventDefault(), st.stopPropagation(), pe(ge.current), Je.removeEventListener("keydown", vt));
      };
      $e.forEach((st) => {
        const dt = st._escapeHandler;
        dt && st.removeEventListener("keydown", dt);
      }), Je._escapeHandler = vt, Je.addEventListener("keydown", vt);
    },
    [ce]
  ), Te = q.useCallback(
    (ve) => {
      const $e = ce(C.current);
      if (!$e.length) {
        pe(C.current);
        return;
      }
      const Oe = Math.max(0, Math.min(ve, $e.length - 1)), Je = $e[Oe];
      Je.focus(), setTimeout(() => {
        document.activeElement !== Je && (Je.focus(), setTimeout(() => {
          document.activeElement !== Je && Je.click();
        }, 10));
      }, 10), V((st) => ({ ...st, secondaryIndex: Oe }));
      const vt = (st) => {
        st.key === "Escape" && (st.preventDefault(), st.stopPropagation(), pe(C.current), Je.removeEventListener("keydown", vt));
      };
      $e.forEach((st) => {
        const dt = st._escapeHandler;
        dt && st.removeEventListener("keydown", dt);
      }), Je._escapeHandler = vt, Je.addEventListener("keydown", vt);
    },
    [ce]
  ), Re = (ve) => {
    if (ve.defaultPrevented) return;
    const $e = ve.key, Oe = ve.target, Je = !!Se.current && Se.current.contains(Oe), vt = !!ge.current && ge.current.contains(Oe), st = !!C.current && C.current.contains(Oe), dt = !!C.current, hr = Oe === D.current || Oe === ge.current || Oe === C.current, Ta = be && (re === "list" || re === "cards"), pr = vt && !!Oe.closest(".nhs-navigation-split-view__header");
    if (Q === "containers" && hr) {
      if ($e === "ArrowRight") {
        ve.preventDefault();
        const Ze = K(), it = Math.min(Ze.length - 1, U + 1);
        ae(it);
        return;
      }
      if ($e === "ArrowLeft") {
        ve.preventDefault();
        const Ze = Math.max(0, U - 1);
        ae(Ze);
        return;
      }
      if ($e === "Home") {
        ve.preventDefault(), ae(0);
        return;
      }
      if ($e === "End") {
        ve.preventDefault(), ae(K().length - 1);
        return;
      }
      if ($e === "Enter" || $e === " ") {
        if (ve.preventDefault(), Oe === D.current) {
          if (A("nav"), Se.current) {
            const Ze = Array.from(
              Se.current.querySelectorAll("[data-nav-item]")
            );
            (Ze[qe >= 0 ? qe : 0] || Ze[0])?.focus();
          }
        } else Oe === ge.current ? (A("content"), ye(G.contentIndex)) : Oe === C.current && (A("secondary"), Te(G.secondaryIndex));
        return;
      }
      return;
    }
    if ($e === "Escape") {
      if (Q === "content" || Q === "secondary") {
        if (vt || st) {
          if (ve.preventDefault(), A("nav"), Se.current) {
            const it = Array.from(
              Se.current.querySelectorAll("[data-nav-item]")
            )[qe >= 0 ? qe : 0];
            setTimeout(() => it?.focus(), 10);
          }
        } else if ((Oe === ge.current || Oe === C.current) && (ve.preventDefault(), A("nav"), Se.current)) {
          const it = Array.from(
            Se.current.querySelectorAll("[data-nav-item]")
          )[qe >= 0 ? qe : 0];
          setTimeout(() => it?.focus(), 10);
        }
      }
      return;
    }
    if ($e === "Enter" || $e === " ") {
      if (Oe.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (Oe === ge.current && Q === "content") {
        ve.preventDefault(), ve.stopPropagation(), ce(ge.current).length > 0 && setTimeout(() => {
          ye(G.contentIndex);
        }, 50);
        return;
      }
      if (Oe === C.current && Q === "secondary") {
        ve.preventDefault(), ve.stopPropagation(), ce(
          C.current
        ).length > 0 && setTimeout(() => {
          Te(G.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Ta && pr && !hr && ($e === "ArrowRight" || $e === "ArrowLeft")) {
      const Ze = ce(ge.current).filter(
        (it) => it.closest(".nhs-navigation-split-view__header")
      );
      if (Ze.length > 1) {
        const it = Ze.indexOf(Oe);
        if (it >= 0) {
          const fs = (it + ($e === "ArrowRight" ? 1 : -1) + Ze.length) % Ze.length;
          ve.preventDefault(), Ze[fs].focus();
          return;
        }
      }
    }
    if ($e === "ArrowRight") {
      if (Je || Q === "nav") {
        ve.preventDefault(), A("content"), setTimeout(() => pe(ge.current), 10);
        return;
      }
      if (vt || Q === "content") {
        dt && (ve.preventDefault(), A("secondary"), setTimeout(() => pe(C.current), 10));
        return;
      }
    }
    if ($e === "ArrowLeft") {
      if (st || Q === "secondary") {
        ve.preventDefault(), A("content"), setTimeout(() => pe(ge.current), 10);
        return;
      }
      if (vt || Q === "content") {
        if (ve.preventDefault(), A("nav"), Se.current) {
          const it = Array.from(
            Se.current.querySelectorAll("[data-nav-item]")
          )[qe >= 0 ? qe : 0];
          setTimeout(() => pe(it), 10);
        }
        return;
      }
    }
    if ($e === "Home" && !Je && (ve.preventDefault(), A("nav"), Se.current)) {
      const Ze = Array.from(
        Se.current.querySelectorAll("[data-nav-item]")
      ), it = Ze[qe >= 0 ? qe : 0] || Ze[0];
      setTimeout(() => pe(it), 10);
    }
    if ($e === "End") {
      const Ze = dt ? C.current : ge.current;
      Ze && !Ze.contains(Oe) && (ve.preventDefault(), dt ? (A("secondary"), setTimeout(() => pe(C.current), 10)) : (A("content"), setTimeout(() => pe(ge.current), 10)));
    }
    if ($e === "ArrowDown" || $e === "ArrowUp") {
      if (Oe === ge.current && $e === "ArrowDown") {
        ve.preventDefault(), ce(ge.current).length > 0 && ye(0);
        return;
      }
      if (Oe === C.current && $e === "ArrowDown") {
        ve.preventDefault(), ce(
          C.current
        ).length > 0 && Te(0);
        return;
      }
      if (vt) {
        const Ze = ce(ge.current);
        if (Ze.length) {
          ve.preventDefault();
          const it = $e === "ArrowDown" ? 1 : -1, Lt = (G.contentIndex + it + Ze.length) % Ze.length;
          ye(Lt);
        }
      } else if (st) {
        const Ze = ce(C.current);
        if (Ze.length) {
          ve.preventDefault();
          const it = $e === "ArrowDown" ? 1 : -1, Lt = (G.secondaryIndex + it + Ze.length) % Ze.length;
          Te(Lt);
        }
      }
    }
  }, be = !!he && (re === "list" || re === "cards"), Xe = q.useMemo(() => R === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : R === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : R === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: R.mobile !== void 0 ? R.mobile : !0,
    tablet: R.tablet || !1,
    desktop: R.desktop || !1
  }, [R]), tt = de && Y && re !== "three-column", ie = de && re === "three-column", je = !!l, xe = re === "three-column", [ke, Ye] = q.useState(!1);
  q.useEffect(() => {
    xe && ke && Ye(!1);
  }, [xe, ke]), q.useEffect(() => {
    ke && !xe && (A("secondary"), oe(2), setTimeout(() => {
      pe(C.current);
    }, 50));
  }, [ke, xe]), q.useEffect(() => {
    !ke && !xe && Q === "secondary" && (A("content"), oe(1), setTimeout(() => {
      pe(ge.current);
    }, 50));
  }, [ke, xe, Q]);
  const Ve = !!he && (be && Xe.mobile || !be && tt && Xe.tablet || !be && ie && Xe.desktop) || je && !xe, Ge = be ? "mobile" : tt ? "tablet" : "desktop";
  q.useEffect(() => {
    if (!y) return;
    const ve = re === "three-column";
    let $e = !1;
    const Oe = () => {
      $e || (le.selectedId !== ue && le.setSelectedId(ue), le.drilledIn !== ve && le.setDrilledIn(ve));
    };
    if (T && T > 0) {
      const Je = setTimeout(Oe, T);
      return () => {
        $e = !0, clearTimeout(Je);
      };
    } else
      Oe();
  }, [y, le, ue, re, T]), q.useEffect(() => {
    if (!y) return;
    const ve = () => {
      const $e = new URLSearchParams(window.location.search), Oe = $e.get(v);
      $e.get(j), fe(Oe === null ? void 0 : Oe);
    };
    return window.addEventListener("popstate", ve), () => window.removeEventListener("popstate", ve);
  }, [
    y,
    v,
    j,
    c,
    l
  ]);
  const rt = q.useRef(0), Ce = q.useRef(
    null
  ), Le = q.useCallback(
    (ve, $e) => {
      ve !== ue && (n === void 0 && fe(ve), o?.(ve, $e));
    },
    [n, o, ue]
  );
  q.useEffect(() => {
    if (!_ && be && ge.current) {
      const ve = setTimeout(() => pe(ge.current), 30);
      return () => clearTimeout(ve);
    }
  }, [be, ue, _]);
  const Se = q.useRef(null), [qe, lt] = q.useState(
    () => x === "first" ? 0 : -1
  );
  q.useEffect(() => {
    if (qe < 0 || !Se.current) return;
    const $e = Array.from(
      Se.current.querySelectorAll("[data-nav-item]")
    )[qe];
    if ($e) {
      document.activeElement !== $e && pe($e), rt.current = qe;
      const Oe = t[qe];
      w?.(
        Oe ? m(Oe) : void 0,
        Oe,
        qe
      );
    }
  }, [qe, t, w, m]);
  const jt = (ve) => {
    const $e = I === "vertical" ? "ArrowDown" : "ArrowRight", Oe = I === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (ve.key === "ArrowRight" && I === "vertical") {
      ve.preventDefault(), ke ? (A("secondary"), setTimeout(() => {
        pe(C.current);
      }, 10)) : (A("content"), setTimeout(() => {
        pe(ge.current);
      }, 10));
      return;
    }
    if (ve.key === $e)
      ve.preventDefault(), lt((Je) => Math.min(t.length - 1, Je + 1));
    else if (ve.key === Oe)
      ve.preventDefault(), lt((Je) => Math.max(0, Je - 1));
    else if (ve.key === "Home")
      ve.preventDefault(), lt(0);
    else if (ve.key === "End")
      ve.preventDefault(), lt(t.length - 1);
    else if (ve.key === "Enter" || ve.key === " ") {
      ve.preventDefault();
      const Je = t[qe];
      Je && !Je.disabled && Le(m(Je), Je);
    } else if (ve.key.length === 1 && /[a-z0-9]/i.test(ve.key)) {
      Ce.current || (Ce.current = { buffer: "", last: 0 });
      const Je = Date.now(), vt = 700, st = ve.key.toLowerCase();
      Je - Ce.current.last > vt ? Ce.current.buffer = st : Ce.current.buffer += st, Ce.current.last = Je;
      let dt = Ce.current.buffer;
      const hr = dt.split("").every((Lt) => Lt === dt[0]), Ta = t.map(
        (Lt) => String(Lt.label || "").toLowerCase()
      );
      let pr = 0;
      qe >= 0 && (pr = (qe + 1) % t.length);
      let Ze;
      const it = (Lt, fs) => {
        const hs = t.length;
        for (let La = 0; La < hs; La++) {
          const $a = (pr + La) % hs;
          if (!t[$a].disabled && Ta[$a].startsWith(Lt))
            return $a;
        }
      };
      hr && dt.length > 1 ? Ze = it(dt[0]) : (Ze = it(dt), Ze === void 0 && dt.length > 1 && (Ze = it(dt[dt.length - 1]), Ze !== void 0 && Ce.current && (Ce.current.buffer = dt[dt.length - 1]))), Ze !== void 0 && lt(Ze);
    }
  }, { collapsed: De, toggle: wt } = Pp({
    enabled: S,
    isAtLeastMedium: Y,
    initiallyCollapsed: E,
    persist: W,
    storageKey: B,
    urlParam: ee,
    onChange: F
  }), Ct = [
    "nhs-navigation-split-view",
    d ? "nhs-navigation-split-view--animated" : "",
    be ? "nhs-navigation-split-view--detail-active" : "",
    re === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    S && Y && De ? "nhs-navigation-split-view--nav-collapsed" : "",
    g
  ].filter(Boolean).join(" "), _n = q.useRef(null);
  q.useEffect(() => {
    if (!M && _n.current) {
      const ve = he ? `Selected ${he.label}` : "Selection cleared";
      _n.current.textContent = ve;
    }
  }, [he, M]), q.useEffect(() => {
    if (!be && ue == null && Se.current) {
      const $e = Se.current.querySelectorAll("[data-nav-item]")[rt.current];
      pe($e);
    }
  }, [be, ue]);
  const It = re === "three-column", [Da, nd] = q.useState(!1);
  q.useEffect(() => {
    It && !Da && nd(!0);
  }, [It, Da]);
  const us = q.useRef(It);
  return q.useEffect(() => {
    us.current !== It && ($?.(It), us.current = It);
  }, [It, $]), /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: Ne,
      className: Ct,
      "aria-label": b?.rootLabel,
      "data-layout": re,
      onKeyDown: Re,
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": be || void 0,
            style: { transform: be ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: D,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": b?.navigationLabel || "Items",
                  "data-collapsed": De || void 0,
                  tabIndex: 0,
                  children: [
                    S && Y && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: wt,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": De ? z : J,
                        title: De ? z : J,
                        children: De ? H || /* @__PURE__ */ r.jsx($p, {}) : O || /* @__PURE__ */ r.jsx(Lp, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: /* @__PURE__ */ r.jsx(
                      Ep,
                      {
                        layout: re === "cards" ? "cards" : "list",
                        items: t,
                        getId: m,
                        selectedId: ue,
                        isLoading: h,
                        emptyState: p,
                        renderItemContent: s,
                        onSelect: (ve, $e, Oe) => {
                          rt.current = Oe, Le(ve, $e);
                        },
                        orientation: I,
                        initialFocus: x,
                        onFocusChange: w,
                        justSelectedId: Ee,
                        listRef: Se,
                        onKeyDownList: jt,
                        navigationInstructions: N,
                        controlledFocusedIndex: qe
                      }
                    ) }),
                    k && /* @__PURE__ */ r.jsx(
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
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: ge,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": b?.contentLabel || "Content",
                  "data-has-selection": !!he || void 0,
                  tabIndex: 0,
                  style: {
                    display: ke && !xe ? "none" : void 0
                  },
                  children: [
                    Ve && /* @__PURE__ */ r.jsx(
                      Ap,
                      {
                        show: Ve,
                        label: he ? he.label : void 0,
                        contentHeaderLevel: ne,
                        detailActive: be,
                        headerContext: Ge,
                        backLabel: u,
                        nextLabel: f,
                        onBack: () => Le(void 0, void 0),
                        onForward: () => Ye(!0),
                        renderContentHeader: te,
                        item: he,
                        contentSubheader: Z,
                        tertiaryInlineActive: ke
                      }
                    ),
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
              re === "three-column" && (!P || Da) || ke && !xe ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: C,
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
                        ke && !xe && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsx(
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
                                  /* @__PURE__ */ r.jsx(
                                    Jn,
                                    {
                                      element: "button",
                                      text: u,
                                      style: { marginRight: 16 },
                                      onClick: () => Ye(!1)
                                    }
                                  ),
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
                        he && X && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof X == "function" ? X(he) : X
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
            children: It ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
Rp.displayName = "NavigationSplitView";
function Bp({
  steps: e,
  currentIndex: t,
  onNavigate: n,
  renderCard: a,
  className: o,
  ariaLabel: s = "Steps"
}) {
  const i = q.useRef(null), l = (c) => {
    if (e?.length)
      if (c.key === "ArrowLeft" || c.key === "ArrowUp") {
        c.preventDefault();
        const d = Math.max(0, t - 1);
        d !== t && n?.(d);
      } else if (c.key === "ArrowRight" || c.key === "ArrowDown") {
        c.preventDefault();
        const d = Math.min(e.length - 1, t + 1);
        d !== t && n?.(d);
      } else c.key === "Home" ? (c.preventDefault(), n?.(0)) : c.key === "End" && (c.preventDefault(), n?.(e.length - 1));
  };
  return /* @__PURE__ */ r.jsx("div", { className: o, "aria-label": s, role: "region", children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsfdp-cards-viewport",
      role: "group",
      "aria-roledescription": "steps",
      tabIndex: 0,
      onKeyDown: l,
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: i,
          className: "nhsfdp-cards-track",
          style: { transform: `translate3d(-${Math.max(0, t) * 100}%, 0, 0)` },
          children: e.map((c, d) => {
            const u = d === t;
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "nhsfdp-pane mobile-pane" + (u ? " is-current" : ""),
                role: "group",
                "aria-roledescription": "step",
                "aria-label": (c.label ?? `Step ${d + 1}`).toString(),
                "aria-hidden": !u,
                onClick: (f) => {
                  if (f.defaultPrevented) return;
                  const h = f.target;
                  h && h.closest(
                    'button, a, input, select, textarea, [role="button"], [role="link"], [contenteditable="true"], [data-prevent-card-click]'
                  ) || n?.(d);
                },
                children: a(c, d, u)
              },
              d
            );
          })
        }
      )
    }
  ) });
}
function Hp({
  steps: e,
  currentIndex: t,
  onNavigate: n,
  renderLabel: a,
  ariaLabel: o = "Breadcrumbs",
  className: s,
  style: i
}) {
  const l = e.map((d, u) => {
    const f = u === t, h = u < t, p = a ? a(d, u) : d.label ?? `Step ${u + 1}`;
    return {
      text: String(p),
      href: h ? "#" : void 0,
      active: f,
      attributes: h ? { "data-index": String(u) } : void 0
    };
  }), c = (d) => {
    const f = d.target.closest("a.nhsuk-breadcrumb__link, a.nhsuk-breadcrumb__backlink");
    if (!f) return;
    if (f.classList.contains("nhsuk-breadcrumb__backlink")) {
      d.preventDefault();
      const p = Math.max(0, t - 1);
      p !== t && n?.(p);
      return;
    }
    const h = f.getAttribute("data-index");
    if (h != null) {
      d.preventDefault();
      const p = parseInt(h, 10);
      Number.isNaN(p) || n?.(p);
    }
  };
  return /* @__PURE__ */ r.jsx("div", { style: i, onClick: c, children: /* @__PURE__ */ r.jsx(hl, { labelText: o, classes: s, items: l }) });
}
function zp(e) {
  const { up: t } = ns(), [n, a] = q.useState(!1);
  q.useEffect(() => a(!0), []);
  const o = n && t("medium") && !t("xlarge"), s = n && t("xlarge"), i = s ? "desktop" : o ? "tablet" : "mobile", l = q.useMemo(() => {
    if (!e.step || !e.layoutForStep)
      return i === "mobile" ? { panes: 1, showPrimaryNav: !1, showSecondaryNav: !1 } : i === "tablet" ? { panes: 2, showPrimaryNav: !0, showSecondaryNav: !1 } : { panes: 3, showPrimaryNav: !0, showSecondaryNav: !0 };
    try {
      return e.layoutForStep({
        step: e.step,
        index: e.index,
        breakpoint: i
      }) || {};
    } catch {
      return {};
    }
  }, [e.step, e.index, e.layoutForStep, i]);
  return { hydrated: n, breakpoint: i, isTablet: o, isDesktop: s, paneConfig: l };
}
function d1(e) {
  const {
    steps: t,
    currentStepId: n,
    defaultStepId: a,
    onStepChange: o,
    layoutForStep: s,
    renderStepCard: i,
    renderStepContent: l,
    renderSecondaryContent: c,
    renderSecondaryNav: d,
    renderBreadcrumbs: u,
    className: f,
    getId: h = (ie) => ie.id,
    enableTabletGrid: p = !1,
    isStepComplete: b,
    showMobileControls: g,
    currentSectionId: m,
    defaultSectionIdForStep: I,
    onSectionChange: L
  } = e, $ = typeof window < "u" && !!window.__WSV_DEBUG_FOCUS || !1, N = (...ie) => {
    $ && console.log("[WorkflowSplitView]", ...ie);
  }, x = () => {
    if (typeof document > "u") return {};
    const ie = document.activeElement, je = ie?.getAttribute?.("role");
    return {
      activeTag: ie?.tagName,
      activeId: ie?.id,
      activeRole: je,
      activeClasses: ie?.className
    };
  }, [_, M] = ze(
    a ?? (t[0] ? h(t[0]) : void 0)
  ), w = n ?? _, y = t.findIndex((ie) => h(ie) === w), v = y >= 0 ? t[y] : t[0], [j, T] = ze({}), P = (ie) => ie ? String(h(ie)) : "", k = me((ie) => {
    if (!ie) return;
    try {
      const xe = I?.(ie);
      if (xe !== void 0) return xe;
    } catch {
    }
    const je = ie.sections && ie.sections[0];
    return je ? je.id : void 0;
  }, [I]), S = m ?? j[P(v)] ?? k(v), E = v && v.sections ? v.sections : void 0, F = E?.find((ie) => ie.id === S), z = (ie) => {
    if (v) {
      const je = P(v);
      m === void 0 && T((xe) => ({ ...xe, [je]: ie })), L?.(ie, E?.find((xe) => xe.id === ie), v);
    }
  }, J = (ie) => {
    N("navigateTo", String(ie)), n === void 0 && M(ie);
    const je = t.find((xe) => h(xe) === ie);
    je && o && o(ie, je);
  }, H = u ? u({ steps: t, current: v, onNavigate: J }) : /* @__PURE__ */ r.jsx(
    Hp,
    {
      steps: t,
      currentIndex: Math.max(0, y),
      onNavigate: (ie) => {
        const je = t[ie];
        je && J(h(je));
      }
    }
  ), { hydrated: O, breakpoint: W, paneConfig: B } = zp({
    step: v,
    index: y,
    layoutForStep: s
  }), ee = n !== void 0 || a !== void 0 && t.length > 0 && t[0] && a !== h(t[0]), R = We(null), ne = We(null), te = We(null), Z = We(null), X = We(null), re = We(0), de = We(!1), Y = We(!1), le = We(null), [se, fe] = ze("nav"), ue = We("nav");
  Qe(() => {
    ue.current = se, se !== "nav" && C(!1), se !== "content" && G(!1), se !== "secondary" && Q(!1);
  }, [se]);
  const [he, Ee] = ze(0), [_e, Ne] = ze(
    () => Math.max(0, y)
  ), [ge, C] = ze(!1), [D, G] = ze(!1), [V, Q] = ze(!1), A = me((ie) => {
    if (ie) {
      try {
        ie.focus({ preventScroll: !0 });
      } catch {
        ie.focus();
      }
      N("focusEl", { to: ie.tagName, id: ie.id, class: ie.className });
    }
  }, []), U = me(() => {
    const ie = () => te.current;
    let je = 0;
    const xe = () => {
      const ke = ie();
      ke && document.activeElement !== ke && A(ke), je += 1, je < 6 && document.activeElement !== ie() && setTimeout(xe, 0);
    };
    N("focusContentSoon:start", { attempts: je }), xe(), typeof queueMicrotask == "function" && queueMicrotask(xe), requestAnimationFrame(xe);
  }, [A]), oe = me((ie) => ie ? Array.from(ie.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
    (xe) => !xe.hasAttribute("disabled") && xe.tabIndex !== -1
  ) : [], []), K = () => [
    ne.current,
    te.current,
    Z.current
  ].filter(Boolean), ae = (ie, je) => {
    if (!ie) return;
    const xe = typeof document < "u" ? document.activeElement : null;
    if (xe && ie.contains(xe))
      try {
        xe.blur(), N("blurActiveIfInside", { label: je, root: ie.getAttribute("aria-label") || ie.tagName });
      } catch {
      }
  }, ce = () => {
    const ie = typeof document < "u" ? document.activeElement : null;
    if (ie && ne.current && ne.current.contains(ie))
      try {
        ie.blur(), N("blurActiveIfInNav: blurred active element inside nav");
      } catch {
      }
  }, pe = (ie) => {
    const je = K(), xe = Math.max(0, Math.min(ie, je.length - 1));
    N("focusContainerByIndex", { idx: ie, clamped: xe }), A(je[xe]), Ee(xe);
  }, ye = me(
    (ie) => {
      let je = 0;
      const xe = ie ?? _e, ke = () => {
        const Be = X.current;
        if (!Be) return null;
        const Ve = Array.from(Be.querySelectorAll("[data-nav-item]"));
        return Ve[xe] || Ve[0] || null;
      }, Ye = () => {
        if (ue.current !== "nav") {
          N("focusNavItemSoon: abort (mode changed)", { mode: ue.current });
          return;
        }
        const Be = ke();
        Be && document.activeElement !== Be && A(Be), je += 1, je < 6 && document.activeElement !== Be && setTimeout(Ye, 0);
      };
      N("focusNavItemSoon:start", { index: xe, ...x() }), Ye(), typeof queueMicrotask == "function" && queueMicrotask(Ye), requestAnimationFrame(Ye);
    },
    [A, _e]
  );
  Qe(() => {
    if (!O) return;
    W === "desktop" || p && W === "tablet" ? ee ? (fe("nav"), Ee(0), N("init: grid preselected → mode=nav", { containerIndex: 0 })) : (fe("containers"), Ee(0), N("init: grid default → mode=containers", { containerIndex: 0 })) : (fe("nav"), N("init: non-grid → mode=nav"));
  }, [O, W, ee, p]), Qe(() => () => {
    le.current != null && (clearTimeout(le.current), le.current = null, N("cleanup: cleared nav bootstrap timeout"));
  }, []), Qe(() => {
    const ie = Math.max(0, y);
    Ne(ie), N("sync navFocusedIndex with currentIndex", { currentIndex: y, navFocusedIndex: ie });
  }, [y]), Qe(() => {
    N("paneFocusMode →", se, x());
  }, [se]);
  const Te = (ie) => {
    if (!(O && (W === "desktop" || p && W === "tablet"))) return;
    const xe = ie.key, ke = ie.target, Ye = ke.tagName.toLowerCase(), Be = Ye === "input" || Ye === "textarea" || Ye === "select", Ve = ke.getAttribute("role"), Ge = Ve === "textbox" || Ve === "searchbox" || Ve === "combobox", rt = ke.getAttribute("contenteditable"), Ce = Be || Ge || rt && rt !== "false";
    if (N("onRootKeyDown", { key: xe, tag: Ye, role: Ve, isEditable: Ce, paneFocusMode: se, containerIndex: he, ...x() }), Ce && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(xe))
      return;
    const Le = !!X.current && X.current.contains(ke), Se = !!te.current && te.current.contains(ke), qe = !!Z.current && Z.current.contains(ke), lt = ke === ne.current || ke === te.current || ke === Z.current, jt = !!Z.current;
    if (lt) {
      if (xe === "ArrowLeft" && ke === te.current) {
        ie.preventDefault(), N("container: ArrowLeft on content container → nav item"), fe("nav"), ae(te.current, "from-content"), re.current = _e, ye(_e);
        return;
      }
      if (xe === "ArrowRight" && ke === te.current && jt) {
        ie.preventDefault(), N("container: ArrowRight on content container → secondary"), fe("secondary"), ae(te.current, "from-content"), G(!1), setTimeout(() => A(Z.current), 10);
        return;
      }
      if (xe === "ArrowRight" && ke === ne.current) {
        ie.preventDefault(), N("container: ArrowRight on nav container → content"), fe("content"), ae(ne.current, "from-nav"), C(!1), U();
        return;
      }
      if (xe === "ArrowLeft" && ke === Z.current) {
        ie.preventDefault(), N("container: ArrowLeft on secondary container → content"), fe("content"), ae(Z.current, "from-secondary"), Q(!1), U();
        return;
      }
      if (xe === "ArrowRight") {
        ie.preventDefault(), N("container: ArrowRight → next container"), ae(ke, "container-roving"), ke === ne.current && C(!1), ke === te.current && G(!1), ke === Z.current && Q(!1), pe(he + 1);
        return;
      }
      if (xe === "ArrowLeft") {
        ie.preventDefault(), N("container: ArrowLeft → prev container"), ae(ke, "container-roving"), ke === ne.current && C(!1), ke === te.current && G(!1), ke === Z.current && Q(!1), pe(he - 1);
        return;
      }
      if (xe === "Home") {
        ie.preventDefault(), N("container: Home → first container"), ae(ke, "container-roving"), ke === ne.current && C(!1), ke === te.current && G(!1), ke === Z.current && Q(!1), pe(0);
        return;
      }
      if (xe === "End") {
        ie.preventDefault(), N("container: End → last container"), ae(ke, "container-roving"), ke === ne.current && C(!1), ke === te.current && G(!1), ke === Z.current && Q(!1), pe(K().length - 1);
        return;
      }
      if (xe === "Enter" || xe === " ") {
        if (ie.preventDefault(), ke === ne.current)
          fe("nav"), N("container: Enter/Space on nav → focus nav item", { navFocusedIndex: _e }), re.current = _e, Y.current = !0, ye(_e);
        else if (ke === te.current) {
          fe("content"), ae(te.current, "descend-content"), G(!1);
          const De = oe(te.current);
          N("container: Enter/Space on content → focus first focusable", { count: De.length }), (De[0] || te.current)?.focus();
        } else if (ke === Z.current) {
          fe("secondary"), ae(Z.current, "descend-secondary"), Q(!1);
          const De = oe(Z.current);
          N("container: Enter/Space on secondary → focus first focusable", { count: De.length }), (De[0] || Z.current)?.focus();
        }
        return;
      }
    }
    if (xe === "Escape") {
      if (Se || qe) {
        ie.preventDefault(), fe("containers"), N("Escape: from", Se ? "content" : "secondary", "→ containers (focus container)"), Se && ae(te.current, "escape-ascend"), qe && ae(Z.current, "escape-ascend"), Se && setTimeout(() => A(te.current), 10), qe && setTimeout(() => A(Z.current), 10);
        return;
      }
      if (Le) {
        ie.preventDefault(), fe("containers"), N("Escape: from nav → containers (focus nav container)"), ce(), A(ne.current);
        return;
      }
      if (lt) {
        ie.preventDefault(), fe("containers"), N("Escape: on container (stay in containers)");
        return;
      }
    }
    if (xe === "Enter" || xe === " ") {
      if (ke === te.current && se === "content") {
        ie.preventDefault(), ae(te.current, "descend-content");
        const De = oe(te.current);
        N("Enter/Space on content container in content mode"), (De[0] || te.current)?.focus();
        return;
      }
      if (ke === Z.current && se === "secondary") {
        ie.preventDefault(), ae(Z.current, "descend-secondary");
        const De = oe(Z.current);
        N("Enter/Space on secondary container in secondary mode"), (De[0] || Z.current)?.focus();
        return;
      }
    }
    if (xe === "ArrowRight") {
      if (Le || se === "nav") {
        ie.preventDefault(), fe("content"), N("ArrowRight: from nav → content (focus content)"), ae(ne.current, "from-nav"), C(!1), U();
        return;
      }
      if (Se || se === "content") {
        jt && (ie.preventDefault(), fe("secondary"), N("ArrowRight: from content → secondary (focus secondary)"), ae(te.current, "from-content"), G(!1), setTimeout(() => A(Z.current), 10));
        return;
      }
    }
    if (xe === "ArrowLeft") {
      if (qe || se === "secondary") {
        ie.preventDefault(), N("ArrowLeft: from secondary → content (focus content)"), ae(Z.current, "from-secondary"), Q(!1), U();
        return;
      }
      if (Se || se === "content") {
        ie.preventDefault(), fe("nav"), N("ArrowLeft: from content → nav (focus nav item)", { navFocusedIndex: _e }), re.current = _e, ae(te.current, "from-content"), G(!1), ye(_e);
        return;
      }
    }
    if ((xe === "Enter" || xe === " ") && (Le || se === "nav")) {
      ie.preventDefault();
      const De = X.current, wt = De ? Array.from(De.querySelectorAll("[data-nav-item]")) : [];
      let Ct = re.current ?? _e;
      if (wt.length) {
        const _n = document.activeElement, It = _n ? wt.indexOf(_n) : -1;
        It >= 0 && (Ct = It);
      }
      Ct = Math.max(0, Math.min(Ct, wt.length - 1)), Ne(Ct), re.current = Ct, N("Root: Enter/Space activate from nav context", { idx: Ct }), J(h(t[Ct])), fe("content"), ue.current = "content", de.current = !0, ce(), U();
      return;
    }
  }, Re = () => {
    const ie = () => {
      de.current = !1, Y.current = !1;
    }, je = (Be) => {
      if (!X.current) return;
      const Ve = Array.from(X.current.querySelectorAll("[data-nav-item]"));
      if (Ve.length) {
        if (Be.key === "ArrowDown") {
          Be.preventDefault(), Be.stopPropagation(), Y.current = !1, fe("nav");
          const Ge = re.current ?? _e, rt = Math.min(Ve.length - 1, Ge + 1);
          Ne(rt), re.current = rt, ye(rt), N("PrimaryNav: ArrowDown", { from: Ge, to: rt });
        } else if (Be.key === "ArrowUp") {
          Be.preventDefault(), Be.stopPropagation(), Y.current = !1, fe("nav");
          const Ge = re.current ?? _e, rt = Math.max(0, Ge - 1);
          Ne(rt), re.current = rt, ye(rt), N("PrimaryNav: ArrowUp", { from: Ge, to: rt });
        } else if (Be.key === "Home") {
          Be.preventDefault(), Be.stopPropagation(), Y.current = !1;
          const Ge = 0;
          Ne(Ge), re.current = Ge, ye(Ge), N("PrimaryNav: Home", { to: Ge });
        } else if (Be.key === "End") {
          Be.preventDefault(), Be.stopPropagation(), Y.current = !1;
          const Ge = Ve.length - 1;
          Ne(Ge), re.current = Ge, ye(Ge), N("PrimaryNav: End", { to: Ge });
        }
      }
    }, xe = (Be) => {
    }, ke = (Be) => {
      if (Be.key !== "Enter" && Be.key !== " " || !X.current) return;
      const Ve = Array.from(X.current.querySelectorAll("[data-nav-item]"));
      if (!Ve.length) return;
      Be.preventDefault();
      let Ge = -1;
      const Ce = Be.target?.closest?.("[data-nav-item]");
      Ce && (Ge = Ve.indexOf(Ce)), Ge < 0 && (Ge = re.current ?? _e), Ge = Math.max(0, Math.min(Ge, Ve.length - 1)), Ne(Ge), re.current = Ge, N("PrimaryNav: Enter/Space activate (capture)", { idx: Ge }), J(h(t[Ge])), fe("content"), ue.current = "content", de.current = !0, le.current != null && (clearTimeout(le.current), le.current = null), ce(), U();
    }, Ye = (Be) => {
      if (Be.defaultPrevented) return;
      de.current = !1;
      const Ve = Be.target;
      if (!Ve) return;
      const Ge = Ve.closest("[data-nav-item]");
      if (!Ge || !X.current || !X.current.contains(Ge)) return;
      const Ce = Array.from(X.current.querySelectorAll("[data-nav-item]")).indexOf(Ge);
      Ce < 0 || (Ne(Ce), re.current = Ce, N("PrimaryNav: click delegate activate", { idx: Ce }), J(h(t[Ce])), fe("content"), ce(), le.current != null && (clearTimeout(le.current), le.current = null), U());
    };
    return /* @__PURE__ */ r.jsx(
      "ul",
      {
        ref: X,
        className: "nhsfdp-primary-nav",
        role: "listbox",
        "aria-activedescendant": String(h(t[Math.max(0, _e)])),
        onKeyDownCapture: ke,
        onKeyDown: je,
        onKeyUp: xe,
        onPointerDown: ie,
        onMouseDown: ie,
        onClick: Ye,
        children: t.map((Be, Ve) => {
          const Ge = h(Be), rt = Ve === y, Ce = se === "nav" && Ve === _e;
          return /* @__PURE__ */ r.jsx("li", { id: String(Ge), role: "option", "aria-selected": rt, children: /* @__PURE__ */ r.jsx(
            "button",
            {
              "data-nav-item": !0,
              tabIndex: Ce ? 0 : -1,
              type: "button",
              className: "nhsfdp-primary-nav__item" + (rt ? " is-current" : "") + (Ce ? " is-focused" : ""),
              "aria-current": rt ? "step" : void 0,
              onPointerDown: ie,
              onMouseDown: ie,
              onKeyDown: (Le) => {
                if (Le.key === "Enter" || Le.key === " ") {
                  if (Le.preventDefault(), Y.current) {
                    Y.current = !1;
                    return;
                  }
                  re.current = Ve, de.current = !0, N("NavItem: onKeyDown activate", { i: Ve, id: String(h(t[Ve])) }), J(h(t[Ve])), fe("content"), ue.current = "content", le.current != null && (clearTimeout(le.current), le.current = null), ce(), U();
                }
              },
              onKeyUp: (Le) => {
                if (Le.key === "Enter" || Le.key === " ") {
                  if (Y.current) {
                    Y.current = !1;
                    return;
                  }
                  re.current = Ve, N("NavItem: onKeyUp activate (fallback)", { i: Ve, id: String(h(t[Ve])) }), J(h(t[Ve])), fe("content"), ue.current = "content", le.current != null && (clearTimeout(le.current), le.current = null), ce(), U();
                }
              },
              onClick: (Le) => {
                if (de.current) {
                  de.current = !1, Le.preventDefault(), Le.stopPropagation(), N("NavItem: ignored synthetic click after keyboard activation", { i: Ve });
                  return;
                }
                Ne(Ve), re.current = Ve, N("NavItem: onClick select", { i: Ve, id: String(Ge) }), J(Ge), fe("content"), ue.current = "content", le.current != null && (clearTimeout(le.current), le.current = null), ce(), U();
              },
              children: Be.label
            }
          ) }, String(Ge));
        })
      }
    );
  }, be = () => {
    const ie = Math.max(0, y), je = ie > 0, xe = ie < t.length - 1, ke = g ? g(v) : b ? b(v) : !0;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-workflow-mobile", children: [
      W === "tablet" ? H : null,
      ke && /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-mobile-controls", "aria-label": "Step navigation", children: [
        je ? /* @__PURE__ */ r.jsx(
          Jn,
          {
            element: "button",
            text: "Back",
            onClick: () => {
              const Ye = t[ie - 1];
              Ye && J(h(Ye));
            }
          }
        ) : (
          // Keep space to avoid layout shift when back is not available
          /* @__PURE__ */ r.jsx(Jn, { element: "button", text: "Back", "aria-hidden": "true", style: { visibility: "hidden" } })
        ),
        xe ? /* @__PURE__ */ r.jsx(
          Hr,
          {
            element: "button",
            text: "Next",
            onClick: () => {
              const Ye = t[ie + 1];
              Ye && J(h(Ye));
            }
          }
        ) : (
          // Keep space to avoid layout shift when next is not available
          /* @__PURE__ */ r.jsx(Hr, { element: "button", text: "Next", "aria-hidden": "true", style: { visibility: "hidden" } })
        )
      ] }),
      /* @__PURE__ */ r.jsx(
        Bp,
        {
          steps: t,
          currentIndex: ie,
          onNavigate: (Ye) => {
            const Be = t[Ye];
            Be && J(h(Be));
          },
          renderCard: (Ye, Be, Ve) => i ? i(Ye) : l(Ye)
        }
      )
    ] });
  }, Xe = (ie) => /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsfdp-workflow-grid panes-" + (ie.panes ?? 2),
      onKeyDown: Te,
      ref: R,
      role: "grid",
      "aria-rowcount": 1,
      "aria-colcount": (ie.showPrimaryNav ? 1 : 0) + 1 + (ie.showSecondaryNav ? 1 : 0),
      "aria-label": "Workflow layout",
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-workflow-body", role: "row", children: [
        ie.showPrimaryNav && /* @__PURE__ */ r.jsx(
          "aside",
          {
            ref: ne,
            className: "nhsfdp-pane primary-nav" + (ge ? " is-active-pane" : ""),
            "aria-label": "Primary navigation",
            role: "gridcell",
            tabIndex: 0,
            onFocus: (je) => {
              je.target === ne.current && C(!0);
            },
            onBlur: (je) => {
              je.target === ne.current && C(!1);
            },
            children: /* @__PURE__ */ r.jsx("section", { role: "complementary", "aria-label": "Primary navigation", children: /* @__PURE__ */ r.jsx(Re, {}) })
          }
        ),
        /* @__PURE__ */ r.jsxs(
          "main",
          {
            ref: te,
            className: "nhsfdp-pane content" + (D ? " is-active-pane" : ""),
            "aria-live": "polite",
            role: "gridcell",
            tabIndex: 0,
            onFocus: (je) => {
              je.target === te.current && G(!0);
            },
            onBlur: (je) => {
              je.target === te.current && G(!1);
            },
            children: [
              H,
              /* @__PURE__ */ r.jsx("div", { role: "main", children: l(v, F) })
            ]
          }
        ),
        (() => {
          const je = d ? d(v, E, F, (Ye) => z(Ye)) : E && E.length > 0 ? /* @__PURE__ */ r.jsx("ul", { className: "nhsfdp-secondary-nav", role: "listbox", "aria-label": "Sections", children: E.map((Ye) => {
            const Be = S === Ye.id;
            return /* @__PURE__ */ r.jsx("li", { role: "option", "aria-selected": Be, children: /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                className: "nhsfdp-secondary-nav__item" + (Be ? " is-current" : ""),
                "data-sec-item": !0,
                onClick: () => z(Ye.id),
                children: Ye.label
              }
            ) }, String(Ye.id));
          }) }) : void 0, xe = c?.(v, F);
          return ie.showSecondaryNav && (je || xe) ? /* @__PURE__ */ r.jsx(
            "aside",
            {
              ref: Z,
              className: "nhsfdp-pane secondary-nav" + (V ? " is-active-pane" : ""),
              "aria-label": "Secondary navigation",
              role: "gridcell",
              tabIndex: 0,
              onFocus: (Ye) => {
                Ye.target === Z.current && Q(!0);
              },
              onBlur: (Ye) => {
                Ye.target === Z.current && Q(!1);
              },
              children: /* @__PURE__ */ r.jsxs("section", { role: "complementary", "aria-label": "Secondary navigation", children: [
                je,
                xe
              ] })
            }
          ) : null;
        })()
      ] })
    }
  );
  return O ? W === "mobile" || !p && W === "tablet" || (B.panes ?? 1) === 1 ? /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: be() }) : /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: Xe(B) }) : /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow-body", children: /* @__PURE__ */ r.jsxs("main", { className: "nhsfdp-pane content", children: [
    u ? u({ steps: t, current: v, onNavigate: J }) : null,
    v ? l(v, v?.sections?.find((ie) => ie.id === (I?.(v) ?? v?.sections?.[0]?.id))) : null
  ] }) }) });
}
const Op = typeof window < "u" && window.document ? q.useLayoutEffect : q.useEffect, li = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), Up = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: o, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, c = `${e._pxWidth}px`, d = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, u = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), h = n && e.childItems && e.childItems.length > 0, p = (g) => {
    h && (g.preventDefault(), a?.(e));
  }, b = h ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": o || !1,
    onClick: p,
    onKeyDown: (g) => {
      (g.key === "Enter" || g.key === " ") && p(g), g.key === "Escape" && o && p(g);
    }
  } : {};
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: we("nhsuk-product-roadmap__item", h && "nhsuk-product-roadmap__item--expandable", o && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: c, top: d, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": u,
      "aria-colspan": f,
      ...b,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          h && /* @__PURE__ */ r.jsx("span", { className: we("nhsuk-product-roadmap__item-expander", o && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Wp = rd(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: n = 400,
  itemMaxLines: a = 2,
  className: o,
  ariaLabel: s = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: c = "overlay",
  ...d
}) => {
  const [u, f] = ze(() => /* @__PURE__ */ new Set()), [h, p] = ze(() => /* @__PURE__ */ new Set()), b = We(/* @__PURE__ */ new Set()), g = me((T) => u.has(T), [u]), m = me((T) => {
    f((P) => {
      const k = new Set(P);
      return k.has(T.id) ? (k.delete(T.id), p((S) => {
        const E = new Set(S);
        return E.add(T.id), E;
      }), setTimeout(() => p((S) => {
        const E = new Set(S);
        return E.delete(T.id), E;
      }), 240), l?.(T.id, !1)) : (k.add(T.id), l?.(T.id, !0)), k;
    });
  }, [l]);
  Op(() => {
    if (c !== "inline" || !i || typeof document > "u") return;
    const T = [];
    if (u.forEach((E) => {
      b.current.has(E) || T.push(E);
    }), b.current = new Set(u), !T.length) return;
    const P = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, k = T.map((E) => `.nhsuk-product-roadmap__inline-children[data-parent="${E}"] .nhsuk-product-roadmap__inline-child`).join(","), S = Array.from(document.querySelectorAll(k));
    if (S.length) {
      if (P) {
        S.forEach((E) => {
          E.style.opacity = "1", E.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((E) => {
        (E.gsap || E.default || E).to(S, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        S.forEach((E) => {
          E.style.opacity = "1", E.style.transform = "translateY(0)";
        });
      });
    }
  }, [u, c, i]);
  const I = me(() => {
    u.size && f(/* @__PURE__ */ new Set());
  }, [u]), L = we("nhsuk-product-roadmap", o), $ = li(n, 120, 1200, 400), N = li(a, 1, 6, 2), x = Ae(() => e.map((T) => /* @__PURE__ */ new Date(T + " 01")), [e]), _ = Ae(() => {
    if (x.length === 0) {
      const k = /* @__PURE__ */ new Date();
      return [k, k];
    }
    const T = new Date(x[0]), P = tr.offset(new Date(x[x.length - 1]), 1);
    return [T, P];
  }, [x]), M = Ae(() => es().domain(_).range([0, x.length * $]), [_, x.length, $]), w = me((T) => {
    if (T.startDate) {
      const J = new Date(T.startDate), H = new Date(T.endDate ?? T.startDate);
      H < J && H.setTime(J.getTime());
      const O = M(J), W = tr.offset(new Date(H), 1);
      let B = M(W);
      Number.isFinite(B) || (B = O + $);
      const ee = Math.max($ * 0.25, B - O), R = O / $, ne = ee / $;
      return { ...T, _pxLeft: O, _pxWidth: ee, _startFraction: R, _spanColumns: ne };
    }
    const P = T.date ?? 1, k = T.dateOffset ?? 0, S = T.length ?? 1, E = T.partialLength ?? 1, F = P - 1 + k, z = S - 1 + E;
    return { ...T, _pxLeft: F * $, _pxWidth: z * $, _startFraction: F, _spanColumns: z };
  }, [M, $]), y = Ae(() => t.map((T) => {
    const k = T.roadmapItems.map((E) => {
      const F = !E.childItems && E.children ? { ...E, childItems: E.children } : { ...E };
      return w(F);
    }).sort((E, F) => E._pxLeft !== F._pxLeft ? E._pxLeft - F._pxLeft : F._pxWidth - E._pxWidth), S = [];
    return k.forEach((E) => {
      const F = E._pxLeft, z = E._pxLeft + E._pxWidth;
      let J = S.findIndex((H) => H <= F);
      J === -1 && (J = S.length, S.push(0)), S[J] = z, E.verticalPosition = J + 1;
    }), { ...T, roadmapItems: k, _laneCount: S.length };
  }), [t, w]), v = Ae(() => y.map((T) => T._laneCount || 1), [y]), j = Ae(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: L,
      style: { "--column-width": `${$}px`, gridTemplateColumns: j },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": y.length + 1,
      ...d,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((T, P) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": P + 2, children: T }, `${T}-${P}`))
        ] }),
        y.map((T, P) => {
          const k = P + 2, S = v[P];
          let E, F = 0, z = [];
          i && c === "inline" && (z = T.roadmapItems.filter((W) => g(W.id) && W.childItems && W.childItems.length).map((W) => ({ id: W.id, lane: W.verticalPosition || 1, count: W.childItems.length })).sort((W, B) => W.lane - B.lane), F = z.reduce((W, B) => W + B.count, 0));
          const J = S + F;
          E = `calc((${J} * var(--roadmap-item-block-height)) + (max(0, ${J} - 1) * var(--roadmap-row-gap)))`;
          const H = {};
          let O = 0;
          return z.forEach((W) => {
            O += W.count, H[W.lane + 1] = O;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": k, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: T.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: E }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: T.roadmapItems.map((W, B) => {
              const ee = (W.verticalPosition || 1) - 1, R = z.filter((X) => X.lane - 1 < ee).reduce((X, re) => X + re.count, 0), ne = ee + R, te = g(W.id), Z = h.has(W.id);
              return /* @__PURE__ */ r.jsxs(Ke.Fragment, { children: [
                /* @__PURE__ */ r.jsx(Up, { item: W, maxLines: N, enableDrilldown: i, onExpand: m, isActive: te, topLaneIndex: ne, laneOffset: R }),
                i && c === "inline" && (te || Z) && W.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": W.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${W.title} child tasks`, children: W.childItems.map((X, re) => {
                  const de = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let Y = W._pxLeft, le = W._pxWidth;
                  if (X.startDate) {
                    const ue = new Date(X.startDate);
                    let he = X.endDate ? new Date(X.endDate) : new Date(ue);
                    he < ue && (he = new Date(ue));
                    const Ee = new Date(he);
                    Ee.setDate(Ee.getDate() + 1);
                    const _e = M(ue);
                    let Ne = M(Ee);
                    (!Number.isFinite(Ne) || Ne <= _e) && (Ne = _e + 6), Y = _e, le = Math.max(6, Ne - _e);
                  }
                  const fe = ne + 1 + re;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: we("nhsuk-product-roadmap__inline-child", X.status && `nhsuk-product-roadmap__inline-child--status-${X.status}`, !te && Z && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${Y}px`, width: `${le}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${fe})`, height: de, opacity: te ? 0 : void 0, transform: te ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: X.title })
                      ]
                    },
                    X.id ?? re
                  );
                }) })
              ] }, W.id ?? B);
            }) }) })
          ] }, `${T.heading}-${P}`);
        }),
        i && c === "overlay" && u.size === 1 && (() => {
          const T = Array.from(u)[0], P = t.flatMap((k) => k.roadmapItems).find((k) => k.id === T);
          return !P || !P.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${P.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: P.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: I, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: P.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: P.childItems.map((k, S) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: k.title }),
                k.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: k.content })
              ] }, k.id ?? S)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: I, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Wp.displayName = "ProductRoadmap";
function mt(e) {
  return function() {
    return e;
  };
}
const co = Math.PI, uo = 2 * co, dn = 1e-6, Gp = uo - dn;
function Il(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Yp(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Il;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, s = a.length; o < s; ++o)
      this._ += Math.round(arguments[o] * n) / n + a[o];
  };
}
class Vp {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Il : Yp(t);
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
    let i = this._x1, l = this._y1, c = a - t, d = o - n, u = i - t, f = l - n, h = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (h > dn) if (!(Math.abs(f * c - d * u) > dn) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let p = a - i, b = o - l, g = c * c + d * d, m = p * p + b * b, I = Math.sqrt(g), L = Math.sqrt(h), $ = s * Math.tan((co - Math.acos((g + h - m) / (2 * I * L))) / 2), N = $ / L, x = $ / I;
      Math.abs(N - 1) > dn && this._append`L${t + N * u},${n + N * f}`, this._append`A${s},${s},0,0,${+(f * p > u * b)},${this._x1 = t + x * c},${this._y1 = n + x * d}`;
    }
  }
  arc(t, n, a, o, s, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(o), c = a * Math.sin(o), d = t + l, u = n + c, f = 1 ^ i, h = i ? o - s : s - o;
    this._x1 === null ? this._append`M${d},${u}` : (Math.abs(this._x1 - d) > dn || Math.abs(this._y1 - u) > dn) && this._append`L${d},${u}`, a && (h < 0 && (h = h % uo + uo), h > Gp ? this._append`A${a},${a},0,1,${f},${t - l},${n - c}A${a},${a},0,1,${f},${this._x1 = d},${this._y1 = u}` : h > dn && this._append`A${a},${a},0,${+(h >= co)},${f},${this._x1 = t + a * Math.cos(s)},${this._y1 = n + a * Math.sin(s)}`);
  }
  rect(t, n, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function Dl(e) {
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
  }, () => new Vp(t);
}
function Tl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Ll(e) {
  this._context = e;
}
Ll.prototype = {
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
  return new Ll(e);
}
function Al(e) {
  return e[0];
}
function El(e) {
  return e[1];
}
function Fl(e, t) {
  var n = mt(!0), a = null, o = $l, s = null, i = Dl(l);
  e = typeof e == "function" ? e : e === void 0 ? Al : mt(e), t = typeof t == "function" ? t : t === void 0 ? El : mt(t);
  function l(c) {
    var d, u = (c = Tl(c)).length, f, h = !1, p;
    for (a == null && (s = o(p = i())), d = 0; d <= u; ++d)
      !(d < u && n(f = c[d], d, c)) === h && ((h = !h) ? s.lineStart() : s.lineEnd()), h && s.point(+e(f, d, c), +t(f, d, c));
    if (p) return s = null, p + "" || null;
  }
  return l.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : mt(+c), l) : e;
  }, l.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : mt(+c), l) : t;
  }, l.defined = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : mt(!!c), l) : n;
  }, l.curve = function(c) {
    return arguments.length ? (o = c, a != null && (s = o(a)), l) : o;
  }, l.context = function(c) {
    return arguments.length ? (c == null ? a = s = null : s = o(a = c), l) : a;
  }, l;
}
function fo(e, t, n) {
  var a = null, o = mt(!0), s = null, i = $l, l = null, c = Dl(d);
  e = typeof e == "function" ? e : e === void 0 ? Al : mt(+e), t = typeof t == "function" ? t : mt(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? El : mt(+n);
  function d(f) {
    var h, p, b, g = (f = Tl(f)).length, m, I = !1, L, $ = new Array(g), N = new Array(g);
    for (s == null && (l = i(L = c())), h = 0; h <= g; ++h) {
      if (!(h < g && o(m = f[h], h, f)) === I)
        if (I = !I)
          p = h, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), b = h - 1; b >= p; --b)
            l.point($[b], N[b]);
          l.lineEnd(), l.areaEnd();
        }
      I && ($[h] = +e(m, h, f), N[h] = +t(m, h, f), l.point(a ? +a(m, h, f) : $[h], n ? +n(m, h, f) : N[h]));
    }
    if (L) return l = null, L + "" || null;
  }
  function u() {
    return Fl().defined(o).curve(i).context(s);
  }
  return d.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : mt(+f), a = null, d) : e;
  }, d.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : mt(+f), d) : e;
  }, d.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : mt(+f), d) : a;
  }, d.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : mt(+f), n = null, d) : t;
  }, d.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : mt(+f), d) : t;
  }, d.y1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : mt(+f), d) : n;
  }, d.lineX0 = d.lineY0 = function() {
    return u().x(e).y(t);
  }, d.lineY1 = function() {
    return u().x(e).y(n);
  }, d.lineX1 = function() {
    return u().x(a).y(t);
  }, d.defined = function(f) {
    return arguments.length ? (o = typeof f == "function" ? f : mt(!!f), d) : o;
  }, d.curve = function(f) {
    return arguments.length ? (i = f, s != null && (l = i(s)), d) : i;
  }, d.context = function(f) {
    return arguments.length ? (f == null ? s = l = null : l = i(s = f), d) : s;
  }, d;
}
function ci(e) {
  return e < 0 ? -1 : 1;
}
function di(e, t, n) {
  var a = e._x1 - e._x0, o = t - e._x1, s = (e._y1 - e._y0) / (a || o < 0 && -0), i = (n - e._y1) / (o || a < 0 && -0), l = (s * o + i * a) / (a + o);
  return (ci(s) + ci(i)) * Math.min(Math.abs(s), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function ui(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Wa(e, t, n) {
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
        Wa(this, this._t0, ui(this, this._t0));
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
          this._point = 3, Wa(this, ui(this, n = di(this, e, t)), n);
          break;
        default:
          Wa(this, this._t0, n = di(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(zr.prototype).point = function(e, t) {
  zr.prototype.point.call(this, t, e);
};
function Or(e) {
  return new zr(e);
}
function Zp(e, t, n) {
  const a = qi(e, t);
  return es().domain(a).range(n);
}
function fi(e, t, n) {
  const [a, o] = qi(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(o)))
    return Ar().domain([0, 0]).range(n);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const c = o - a, d = (c > 0 ? c : a) * 0.1;
    i = Math.max(0, a - d), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = o ?? 0;
  return Ar().domain([i, l]).nice().range(n);
}
function ho(e, t, n, a) {
  const o = Fl().x(t).y(n);
  return a?.smooth !== !1 && o.curve(Or), o(e) ?? "";
}
function qp(e = {}) {
  const t = q.useRef(null), n = q.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, o] = q.useState({ width: 0, height: 0 });
  q.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((c) => {
      for (const d of c) {
        const { width: u, height: f } = d.contentRect;
        o({ width: u, height: f });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const s = Math.max(0, a.width - n.left - n.right), i = Math.max(0, a.height - n.top - n.bottom);
  return { width: a.width, height: a.height, innerWidth: s, innerHeight: i, margin: n, ref: t };
}
const Pl = q.createContext(null);
function cn() {
  return q.useContext(Pl);
}
const Jp = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: o,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = qp(t), c = { height: e, position: "relative" };
  return n !== void 0 && (c.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: c, role: s, "aria-label": i, children: /* @__PURE__ */ r.jsx(Pl.Provider, { value: l, children: o }) });
}, rs = q.createContext(null), Sn = () => q.useContext(rs), Xp = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  parseX: a,
  children: o,
  xTickCount: s = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: c,
  yPadding: d,
  yBottomGapPx: u
}) => {
  const f = cn(), h = t ?? f?.innerWidth ?? 0, p = n ?? f?.innerHeight ?? 0, b = q.useMemo(() => e.flatMap((x) => x.data), [e]), g = q.useCallback(
    (x) => {
      if (a) return a(x);
      const _ = x.x;
      return _ instanceof Date ? _ : new Date(_);
    },
    [a]
  ), m = c ?? 6, I = d ?? 6, L = q.useMemo(
    () => Zp(b, g, [
      m,
      Math.max(0, h - m)
    ]),
    [b, g, h, m]
  ), $ = q.useMemo(() => {
    const x = Math.max(0, u ?? 0), _ = Math.max(0, p - (I + x));
    if (l) {
      const M = fi([], (w) => w.y, [
        _,
        I
      ]);
      return M.domain(l), M;
    }
    return fi(b, (M) => M.y, [_, I]);
  }, [b, p, l, I, u]), N = q.useMemo(
    () => ({
      xScale: L,
      yScale: $,
      getXTicks: (x = s) => L.ticks(x),
      getYTicks: (x = i) => $.ticks(x)
    }),
    [L, $, s, i]
  );
  return /* @__PURE__ */ r.jsx(rs.Provider, { value: N, children: o });
}, kr = 16, Cr = 6, Kp = 16, Qp = 4, em = 6, tm = 3, nm = void 0, hi = ({
  type: e,
  scale: t,
  tickCount: n,
  tickValues: a,
  formatTick: o,
  label: s,
  offset: i,
  className: l,
  minLabelSpacing: c,
  maxTickLabelLength: d,
  autoMinLabelSpacing: u = e === "x",
  labelAngle: f = 0,
  allowLabelWrap: h = !0,
  tickFormatPreset: p,
  yZeroBreak: b
}) => {
  const g = Sn(), m = cn(), I = t || (e === "x" ? g?.xScale : g?.yScale), L = n ?? (e === "x" ? 6 : 5), $ = typeof o == "function", N = q.useMemo(() => {
    if ($ || !p) return;
    const M = (w) => new Intl.DateTimeFormat(void 0, w);
    switch (p) {
      case "dayShortMonth":
        return (w) => {
          const y = w instanceof Date ? w : new Date(w);
          return `${y.getDate()}
${M({ month: "short" }).format(y)}`;
        };
      case "dayShortMonthYear":
        return (w) => {
          const y = w instanceof Date ? w : new Date(w);
          return `${y.getDate()}
${M({ month: "short" }).format(y)} ${y.getFullYear()}`;
        };
      case "shortMonth":
        return (w) => {
          const y = w instanceof Date ? w : new Date(w);
          return M({ month: "short" }).format(y);
        };
      case "shortMonthYear":
        return (w) => {
          const y = w instanceof Date ? w : new Date(w);
          return `${M({ month: "short" }).format(y)} ${y.getFullYear()}`;
        };
      case "hourMinute":
        return (w) => {
          const y = w instanceof Date ? w : new Date(w);
          return M({ hour: "2-digit", minute: "2-digit" }).format(y);
        };
      default:
        return;
    }
  }, [$, p]);
  let x = $ ? o : N || ((M) => String(M));
  const _ = q.useMemo(() => a && Array.isArray(a) ? a : I ? typeof I.ticks == "function" ? I.ticks(L) : I.domain ? I.domain() : [] : [], [I, L, a]);
  if (e === "x" && !$ && !p && _.length && _.every((M) => M instanceof Date)) {
    const M = _[0], w = _[_.length - 1], y = w.getTime() - M.getTime(), v = 24 * 3600 * 1e3, j = 365 * v, T = M.getFullYear() === w.getFullYear(), P = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (y < 2 * v) {
      const k = new Intl.DateTimeFormat(void 0, {
        hour: "2-digit",
        minute: "2-digit"
      });
      x = (S) => k.format(S);
    } else if (y < 32 * v)
      x = (k) => {
        const S = k;
        return `${S.getDate()} ${P.format(S)}`;
      };
    else if (y < j && T)
      x = (k) => P.format(k);
    else if (y < 2 * j) {
      const k = /* @__PURE__ */ new Set();
      x = (S) => {
        const E = S, F = E.getMonth();
        return k.has(F) || k.add(F), `${P.format(E)} ${E.getFullYear()}`;
      };
    } else
      x = (k) => String(k.getFullYear());
  }
  if (!I || !m) return null;
  if (e === "x") {
    const M = i ?? m.innerHeight, w = typeof I.bandwidth == "function", y = w ? I.bandwidth() : 0, v = (P) => {
      const k = I(P);
      return w ? k + y / 2 : k;
    };
    let j = c ?? 0;
    if (u && c == null) {
      const P = _.map(
        (S) => x(S).replace(/\n.*/g, "")
      ), k = P.length ? P.reduce((S, E) => S + E.length, 0) / P.length : 0;
      j = Math.max(12, Math.round(k * 6 + 4));
    }
    const T = q.useMemo(() => {
      if (a && Array.isArray(a) || j <= 0) return _;
      const P = [];
      let k = -1 / 0;
      for (const S of _) {
        const E = v(S);
        E - k >= j && (P.push(S), k = E);
      }
      return P;
    }, [
      _,
      I,
      j,
      a,
      w,
      y
    ]);
    return /* @__PURE__ */ r.jsxs(
      "g",
      {
        className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "),
        transform: `translate(0,${M})`,
        fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
        children: [
          /* @__PURE__ */ r.jsx("line", { x1: 0, x2: m.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
          T.map((P, k) => {
            const S = x(P), E = d && S.length > d ? S.slice(0, Math.max(1, d - 1)) + "…" : S, F = h ? E.split(/\n/) : [E.replace(/\n/g, " ")], z = f < 0 ? "end" : f > 0 ? "start" : "middle";
            return /* @__PURE__ */ r.jsxs(
              "g",
              {
                transform: `translate(${v(P)},0)`,
                children: [
                  /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
                  /* @__PURE__ */ r.jsxs(
                    "text",
                    {
                      y: 9,
                      textAnchor: z,
                      className: "fdp-axis__tick",
                      dominantBaseline: "hanging",
                      transform: f ? `rotate(${f})` : void 0,
                      fontFamily: "inherit",
                      children: [
                        F.map((J, H) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: H === 0 ? 0 : "1.1em", children: J }, H)),
                        E !== S && /* @__PURE__ */ r.jsx("title", { children: S })
                      ]
                    }
                  )
                ]
              },
              P?.toString?.() || k
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
          const M = !!b?.enabled, w = Math.max(Cr, b?.gapPx ?? kr);
          if (!M)
            return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: m.innerHeight, stroke: "currentColor" });
          const y = Math.max(0, m.innerHeight - w);
          return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: y, stroke: "currentColor" });
        })(),
        _.map((M, w) => {
          const y = x(M), v = d && y.length > d ? y.slice(0, Math.max(1, d - 1)) + "…" : y, j = h ? v.split(/\n/) : [v.replace(/\n/g, " ")];
          if (!!b?.enabled) {
            const P = Math.max(Cr, b?.gapPx ?? kr), k = Math.max(0, m.innerHeight - P);
            if (I(M) > k - 1) return null;
          }
          return /* @__PURE__ */ r.jsxs(
            "g",
            {
              transform: `translate(0,${I(M)})`,
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
                      j.map((P, k) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: k === 0 ? 0 : "1.1em", children: P }, k)),
                      v !== y && /* @__PURE__ */ r.jsx("title", { children: y })
                    ]
                  }
                )
              ]
            },
            M?.toString?.() || w
          );
        }),
        !!b?.enabled && (() => {
          const M = Math.max(Cr, b?.gapPx ?? kr), w = m.innerHeight, v = Math.max(0, w - M), j = v, P = Math.max(4, w - j), k = Qp, S = em, E = Math.max(1, Math.round(b?.zigZag?.amplitudePx ?? k)), F = Math.max(1, Math.round(b?.zigZag?.stepXPx ?? tm)), z = b?.zigZag?.heightPx ?? nm, J = Math.max(4, Math.round(z ?? 0));
          let H, O;
          if (b?.zigZag?.heightPx && b.zigZag.heightPx > 0) {
            const Z = Math.max(4, Math.min(P - 2, J));
            H = Math.max(1, Math.floor(Z / (2 * E))), O = Math.max(0, Math.min(Z, H * 2 * E));
          } else typeof b?.zigZag?.cycles == "number" && b?.zigZag?.cycles > 0 ? (H = Math.max(1, Math.round(b.zigZag.cycles)), O = H * 2 * E, O = Math.min(O, P - 2), H = Math.max(1, Math.floor(O / (2 * E)))) : (H = S, O = Math.min(P - 2, H * 2 * E), H = Math.max(1, Math.floor(O / (2 * E))));
          const W = j + (P - O) / 2, B = W + O;
          let ee = "M0,0";
          const R = O > 0 ? Math.max(0, Math.floor((O - E) / (2 * E))) : 0, ne = Math.max(0, (O - R * 2 * E) / 2), te = E > 0 ? F * (ne / E) : 0;
          ne > 0 && (ee += ` l${te},${ne}`);
          for (let Z = 0; Z < R; Z++)
            ee += ` l-${F},${E} l${F},${E}`;
          return ne > 0 && (ee += ` l-${te},${ne}`), /* @__PURE__ */ r.jsxs("g", { children: [
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: v, y2: W, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${W})`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("path", { d: ee, stroke: "currentColor", fill: "none" }) }),
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: B, y2: w, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${w})`, children: /* @__PURE__ */ r.jsx("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: "0" }) })
          ] });
        })(),
        s && /* @__PURE__ */ r.jsx(
          "text",
          {
            transform: "rotate(-90)",
            x: -m.innerHeight / 2,
            y: -m.margin.left + 12,
            textAnchor: "middle",
            className: "fdp-axis__label",
            fontFamily: "inherit",
            children: s
          }
        )
      ]
    }
  );
}, rm = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: o
}) => {
  const s = Sn(), i = cn();
  if (!s || !i) return null;
  const l = e === "y" ? s.getYTicks(t) : s.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", o].filter(Boolean).join(" "), children: [
    e === "y" && l.map((c, d) => /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: 0,
        x2: i.innerWidth,
        y1: s.yScale(c),
        y2: s.yScale(c),
        stroke: n,
        strokeDasharray: a
      },
      d
    )),
    e === "x" && l.map((c, d) => /* @__PURE__ */ r.jsx(
      "line",
      {
        y1: 0,
        y2: i.innerHeight,
        x1: s.xScale(c),
        x2: s.xScale(c),
        stroke: n,
        strokeDasharray: a
      },
      d
    ))
  ] });
}, am = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, cr = {
  color: am
}, om = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Sa = {
  color: om
}, sm = [
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
let Ga = null, Ya = null, Va = null, Rl = "optimized";
function im() {
  const e = { color: { ...Sa.color, ...cr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
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
    return sm;
  }
}
function lm() {
  return Ga || (Ga = im()), Ga;
}
function cm(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function Za(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function dm(e, t, n) {
  const a = Za(e), o = Za(t), s = Za(n), i = a * 0.4124 + o * 0.3576 + s * 0.1805, l = a * 0.2126 + o * 0.7152 + s * 0.0722, c = a * 0.0193 + o * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: c * 100 };
}
function um(e, t, n) {
  let i = e / 95.047, l = t / 100, c = n / 108.883;
  const d = (u) => u > 8856e-6 ? Math.cbrt(u) : 7.787 * u + 16 / 116;
  return i = d(i), l = d(l), c = d(c), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - c) };
}
function Bl(e) {
  const t = cm(e);
  if (!t) return null;
  const n = dm(t.r, t.g, t.b);
  return um(n.x, n.y, n.z);
}
function pi(e, t) {
  const n = e.L - t.L, a = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(n * n + a * a + o * o);
}
function fm() {
  const e = lm();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Bl(i));
  let n = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let c = 0, d = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (c += pi(l, t[f]), d++);
    const u = c / Math.max(1, d);
    u > a && (a = u, n = i);
  }
  const o = new Set(e.map((i, l) => l)), s = [];
  for (s.push(n), o.delete(n); o.size; ) {
    let i = Array.from(o)[0], l = -1;
    for (const c of o) {
      const d = t[c];
      if (!d) continue;
      let u = 1 / 0;
      for (const f of s) {
        const h = t[f];
        if (h) {
          const p = pi(d, h);
          p < u && (u = p);
        }
      }
      u > l && (l = u, i = c);
    }
    s.push(i), o.delete(i);
  }
  return s.map((i) => e[i]);
}
function hm() {
  return Ya || (Ya = fm()), Ya;
}
function pm(e, t, n) {
  const a = (e + 16) / 116, o = t / 500 + a, s = a - n / 200, i = (u) => {
    const f = u * u * u;
    return f > 8856e-6 ? f : (u - 16 / 116) / 7.787;
  }, l = i(o) * 95.047, c = i(a) * 100, d = i(s) * 108.883;
  return { X: l, Y: c, Z: d };
}
function mm(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, o = e * -0.9689 + t * 1.8758 + n * 0.0415, s = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), o = Math.min(1, Math.max(0, i(o))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(a * 255), g: Math.round(o * 255), b: Math.round(s * 255) };
}
function gm(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function xm(e, t) {
  const n = Bl(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: o, Y: s, Z: i } = pm(a, n.a, n.b), l = mm(o, s, i);
  return gm(l.r, l.g, l.b);
}
function bm() {
  const e = hm(), n = [12, -12, 24, -24].map((o) => e.map((s) => xm(s, o))), a = [...e];
  return n.forEach((o) => a.push(...o)), a;
}
function ym() {
  return (!Va || vm()) && (Va = bm(), Hl = Rl), Va;
}
let Hl = null;
function vm() {
  return Hl !== Rl;
}
function Pt(e) {
  const t = ym();
  return t[e % t.length];
}
let Tn = null, nr = null, rr = null, ar = null;
function wm() {
  const e = cr?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    Tn = [];
    for (let s = 1; s <= 12; s++) {
      const i = t[String(s)]?.$value || t[String(s)]?.value;
      Tn.push(typeof i == "string" ? i : "#212b32");
    }
    const n = e.region || {};
    nr = {}, Object.keys(n).forEach((s) => {
      const i = n[s]?.$value || n[s]?.value;
      typeof i == "string" && (nr[s] = i);
    });
    const a = e.severity || {}, o = e["org-level"] || {};
    ar = {}, Object.keys(o).forEach((s) => {
      const i = o[s]?.$value || o[s]?.value;
      typeof i == "string" && (ar[s] = i);
    }), rr = {}, Object.keys(a).forEach((s) => {
      const i = a[s]?.$value || a[s]?.value;
      typeof i == "string" && (rr[s] = i);
    });
  }
}
function _a() {
  (!Tn || !nr || !rr || !ar) && wm();
}
function yn(e) {
  return _a(), Tn ? Tn[e % Tn.length] : "#212b32";
}
function Sm(e) {
  return _a(), nr ? nr[e] : void 0;
}
function Ur(e, t) {
  return Sm(e) || yn(t);
}
const po = ["low", "moderate", "high", "critical"];
let qa = null;
function _m() {
  const e = { color: { ...Sa.color, ...cr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return po.forEach((a) => {
    const o = t(`color.data-viz.severity.${a}`);
    o && (n[a] = o);
  }), n;
}
function zl() {
  return qa || (qa = _m()), qa;
}
function km(e) {
  return zl()[e.toLowerCase()];
}
function Cm(e, t) {
  return km(e) || zl()[po[t % po.length]] || Pt(t);
}
function Nm(e) {
  return _a(), rr ? rr[e] : void 0;
}
function jm(e, t) {
  return Nm(e) || yn(t);
}
const mo = ["trust", "ambulance", "icb", "region"];
let Ja = null;
function Mm() {
  const e = { color: { ...Sa.color, ...cr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return mo.forEach((a) => {
    const o = t(`color.data-viz.org-level.${a}`);
    o && (n[a] = o);
  }), n;
}
function Ol() {
  return Ja || (Ja = Mm()), Ja;
}
function Im(e) {
  return Ol()[e.toLowerCase()];
}
function Dm(e, t) {
  return Im(e) || Ol()[mo[t % mo.length]] || Pt(t);
}
function Tm(e) {
  return _a(), ar ? ar[e] : void 0;
}
function Lm(e, t) {
  return Tm(e) || yn(t);
}
let Xa = null;
const $m = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function Am(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Em() {
  const e = { color: { ...Sa.color, ...cr.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const i = o.split(".").reduce((c, d) => c ? c[d] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return $m.forEach((o) => {
    const s = t(`color.data-viz.region.${o}`);
    s ? n[o] = s : a.push(o);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function Fm() {
  return Xa || (Xa = Em()), Xa;
}
function Pm(e) {
  return Fm()[Am(e)];
}
function Ln(e, t) {
  return Pm(e) || Pt(t);
}
const Ul = q.createContext(null), dr = () => q.useContext(Ul), u1 = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [o, s] = q.useState(() => new Set(e)), i = n !== void 0, l = q.useMemo(() => i ? new Set(n) : o, [i, n, o]), c = q.useCallback((u) => {
    i || s(new Set(u)), a?.(Array.from(u));
  }, [i, a]), d = q.useMemo(() => ({
    hiddenIds: l,
    isHidden: (u) => l.has(u),
    toggle: (u) => {
      const f = new Set(l);
      f.has(u) ? f.delete(u) : f.add(u), c(f);
    },
    showOnly: (u) => {
      c(/* @__PURE__ */ new Set());
    },
    showAll: () => c(/* @__PURE__ */ new Set()),
    setHidden: (u) => c(new Set(Array.isArray(u) ? u : Array.from(u)))
  }), [l, c]);
  return /* @__PURE__ */ r.jsx(Ul.Provider, { value: d, children: t });
}, Wl = q.createContext(null), tn = () => q.useContext(Wl), Rm = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = Sn(), o = dr(), [s, i] = q.useState(null), l = q.useRef(/* @__PURE__ */ new Map()), [c, d] = q.useState([]), u = q.useCallback(
    (M, w) => {
      l.current.set(M, w);
    },
    []
  ), f = q.useCallback((M) => {
    l.current.delete(M);
  }, []), h = q.useCallback(
    (M, w) => {
      if (!a) return;
      const { xScale: y, yScale: v } = a;
      let j = null, T = 1 / 0;
      l.current.forEach((P, k) => {
        P.forEach((S, E) => {
          const F = y(S.x), z = v(S.y), J = F - M, H = z - w, O = Math.sqrt(J * J + H * H);
          O < T && (T = O, j = {
            seriesId: k,
            index: E,
            x: S.x,
            y: S.y,
            clientX: F,
            clientY: z
          });
        });
      }), j && T <= t ? i(j) : i(null);
    },
    [a, t]
  ), p = q.useCallback(() => i(null), []);
  q.useEffect(() => {
    if (!s) {
      d([]);
      return;
    }
    if (!a) return;
    const { xScale: M, yScale: w } = a, y = [];
    l.current.forEach((v, j) => {
      v.forEach((T, P) => {
        (s.x instanceof Date && T.x instanceof Date ? T.x.getTime() === s.x.getTime() : T.x === s.x) && y.push({
          seriesId: j,
          index: P,
          x: T.x,
          y: T.y,
          clientX: M(T.x),
          clientY: w(T.y)
        });
      });
    }), y.sort((v, j) => v.seriesId.localeCompare(j.seriesId)), d(y);
  }, [s, a]);
  const b = q.useCallback(
    (M) => {
      if (!s) return;
      const w = l.current.get(s.seriesId);
      if (!w) return;
      let y = s.index + M;
      if (y < 0 || y >= w.length) {
        if (!n) return;
        y = (y + w.length) % w.length;
      }
      const v = w[y];
      if (!a) return;
      const { xScale: j, yScale: T } = a;
      i({
        seriesId: s.seriesId,
        index: y,
        x: v.x,
        y: v.y,
        clientX: j(v.x),
        clientY: T(v.y)
      });
    },
    [s, a, n]
  ), g = q.useCallback(
    (M) => {
      let w = Array.from(l.current.keys());
      if (o && (w = w.filter((F) => !o.isHidden(F))), w.length === 0) return;
      if (!s) {
        const F = w[0], z = l.current.get(F);
        if (!z || !a) return;
        const { xScale: J, yScale: H } = a, O = z[0];
        i({
          seriesId: F,
          index: 0,
          x: O.x,
          y: O.y,
          clientX: J(O.x),
          clientY: H(O.y)
        });
        return;
      }
      const y = w.indexOf(s.seriesId);
      if (y === -1) return;
      let v = y + M;
      if (v < 0 || v >= w.length) {
        if (!n) return;
        v = (v + w.length) % w.length;
      }
      const j = w[v], T = l.current.get(j);
      if (!T || !a) return;
      const P = Math.min(s.index, T.length - 1), k = T[P], { xScale: S, yScale: E } = a;
      i({
        seriesId: j,
        index: P,
        x: k.x,
        y: k.y,
        clientX: S(k.x),
        clientY: E(k.y)
      });
    },
    [s, a, n, o]
  ), m = q.useCallback(() => {
    let M = Array.from(l.current.keys());
    if (o && (M = M.filter((P) => !o.isHidden(P))), M.length === 0) return;
    const w = s ? s.seriesId : M[0], y = l.current.get(w);
    if (!y || y.length === 0 || !a) return;
    const v = y[0], { xScale: j, yScale: T } = a;
    i({
      seriesId: w,
      index: 0,
      x: v.x,
      y: v.y,
      clientX: j(v.x),
      clientY: T(v.y)
    });
  }, [s, a, o]), I = q.useCallback(() => {
    let M = Array.from(l.current.keys());
    if (o && (M = M.filter((k) => !o.isHidden(k))), M.length === 0) return;
    const w = s ? s.seriesId : M[0], y = l.current.get(w);
    if (!y || y.length === 0 || !a) return;
    const v = y.length - 1, j = y[v], { xScale: T, yScale: P } = a;
    i({
      seriesId: w,
      index: v,
      x: j.x,
      y: j.y,
      clientX: T(j.x),
      clientY: P(j.y)
    });
  }, [s, a, o]), L = q.useCallback(
    () => b(1),
    [b]
  ), $ = q.useCallback(
    () => b(-1),
    [b]
  ), N = q.useCallback(
    () => g(1),
    [g]
  ), x = q.useCallback(
    () => g(-1),
    [g]
  ), _ = q.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: c,
      focusNearest: h,
      clear: p,
      registerSeries: u,
      unregisterSeries: f,
      focusNextPoint: L,
      focusPrevPoint: $,
      focusNextSeries: N,
      focusPrevSeries: x,
      focusFirstPoint: m,
      focusLastPoint: I
    }),
    [
      s,
      c,
      h,
      p,
      u,
      f,
      L,
      $,
      N,
      x,
      m,
      I
    ]
  );
  return /* @__PURE__ */ r.jsx(Wl.Provider, { value: _, children: e });
}, Bm = ({
  series: e,
  seriesIndex: t,
  palette: n,
  showPoints: a,
  focusablePoints: o,
  focusIndex: s,
  parseX: i,
  visibilityMode: l = "remove",
  strokeWidth: c = 1,
  smooth: d = !0,
  gradientFillId: u,
  colors: f
}) => {
  const h = Sn();
  if (!h) return null;
  const { xScale: p, yScale: b } = h, m = dr()?.isHidden(e.id) ?? !1, I = m && l === "fade";
  if (m && l === "remove")
    return null;
  const L = tn();
  q.useEffect(() => {
    if (!L) return;
    const w = e.data.map((y) => ({ x: i(y), y: y.y }));
    return L.registerSeries(e.id, w), () => L.unregisterSeries(e.id);
  }, [L, e.id, e.data, i]);
  const $ = q.useMemo(
    () => ho(
      e.data,
      (w) => p(i(w)),
      (w) => b(w.y),
      { smooth: d }
    ),
    [e.data, p, b, i, d]
  ), N = q.useMemo(() => {
    if (!e.data.length) return "";
    const [w] = b.domain(), y = fo().x((v) => p(i(v))).y0(() => b(w)).y1((v) => b(v.y));
    return d && y.curve(Or), y(e.data) || "";
  }, [e.data, p, b, i, d]), x = f && f[t], _ = e.color || x || (n === "region" ? Ln(e.id, t) : Pt(t)), M = n === "region" ? Ur(e.id, t) : yn(t);
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: I ? 0.25 : 1,
      "aria-hidden": I ? !0 : void 0,
      children: [
        u && /* @__PURE__ */ r.jsx(
          "path",
          {
            d: N,
            fill: `url(#${u})`,
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
            stroke: _,
            strokeWidth: c,
            role: "presentation"
          }
        ),
        a && e.data.map((w, y) => {
          const v = p(i(w)), j = b(w.y), T = o ? 0 : -1, P = !I && (o && y === s || L?.focused?.seriesId === e.id && L.focused.index === y), k = () => {
            L && !I && L.setFocused({
              seriesId: e.id,
              index: y,
              x: i(w),
              y: w.y,
              clientX: v,
              clientY: j
            });
          }, S = () => {
            L && L.focused?.seriesId === e.id && L.focused.index === y && L.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: v,
              cy: j,
              r: P ? 5 : 3.5,
              stroke: P ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : M,
              strokeWidth: P ? 2 : 1,
              fill: P ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : _,
              className: "fdp-line-point",
              tabIndex: I ? -1 : T,
              "aria-label": `${e.label || e.id} ${i(w).toDateString()} value ${w.y}`,
              "data-series": e.id,
              "data-index": y,
              onMouseEnter: k,
              onFocus: k,
              onMouseLeave: S,
              onBlur: S
            },
            y
          );
        })
      ]
    }
  );
}, Hm = ({ polite: e = !0, format: t }) => {
  const n = tn(), [a, o] = q.useState(""), s = q.useRef("");
  return q.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let c;
    if (l && l.length > 1) {
      const d = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      c = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${d}`;
    } else
      c = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : zm(i.seriesId, i.x, i.y, i.index);
    if (c !== s.current) {
      s.current = c, o("");
      const d = setTimeout(() => o(c), 10);
      return () => clearTimeout(d);
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
function zm(e, t, n, a) {
  const o = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${o}, value ${n}`;
}
const f1 = () => {
  const e = tn(), t = cn();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: o, innerHeight: s } = t, i = Math.min(Math.max(n.clientX, 0), o), l = Math.min(Math.max(n.clientY, 0), s), c = i + 8, d = l - 8, u = a.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), h = u ? f : `${f} • ${n.y}`, p = /\d+$/.exec(n.seriesId || ""), b = p ? parseInt(p[0], 10) - 1 : 0, g = Pt(b >= 0 ? b : 0) || "#005eb8", m = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: m, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: m, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: g, stroke: "#fff", strokeWidth: 0.5 }),
    u ? (() => {
      const L = a.map((M) => `${M.seriesId}: ${M.y}`), $ = [h, ...L], N = $.reduce((M, w) => Math.max(M, w.length), 0), x = Math.max(90, N * 6.2 + 16), _ = 16 * $.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: c, y: d - _, rx: 4, ry: 4, width: x, height: _, fill: "#212b32", opacity: 0.92 }),
        $.map((M, w) => /* @__PURE__ */ r.jsx("text", { x: c + 8, y: d - _ + 6 + 16 * (w + 0.7), fill: "#fff", fontSize: 12, children: M }, w))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: c, y: d - 24, rx: 4, ry: 4, width: Math.max(60, h.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: c + 8, y: d - 8, fill: "#fff", fontSize: 12, children: h })
    ] })
  ] });
}, h1 = ({
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
  const d = dr(), u = !!(d && !a && !l && s === void 0), f = a || u, h = e || [], p = s !== void 0, [b, g] = q.useState(new Set(i)), m = p ? new Set(s) : b, [I, L] = q.useState(""), $ = (N) => {
    if (u && d) {
      const T = d.isHidden(N);
      d.toggle(N);
      const k = h.find((E) => E.id === N)?.label || N, S = c ? c(N, T, k) : `${k} ${T ? "shown" : "hidden"}`;
      L(S);
      return;
    }
    if (!f) return;
    const x = new Set(m), _ = x.has(N);
    _ ? x.delete(N) : x.add(N), p || g(x);
    const M = h.filter((T) => !x.has(T.id)).map((T) => T.id), w = Array.from(x);
    l?.(M, w);
    const v = h.find((T) => T.id === N)?.label || N, j = c ? c(N, _, v) : `${v} ${_ ? "shown" : "hidden"}`;
    L(j);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: h.map((N, x) => {
      const _ = N.palette || t, M = N.color || (_ === "region" ? Ln(N.id, x) : _ === "severity" ? Cm(N.id, x) : _ === "org-level" ? Dm(N.id, x) : Pt(x));
      let w = N.stroke || (_ === "region" ? Ur(N.id, x) : _ === "severity" ? jm(N.id, x) : _ === "org-level" ? Lm(N.id, x) : yn(x));
      if (o && w) {
        const j = w.trim().toLowerCase();
        (j === "#fff" || j === "#ffffff" || j === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(j)) && (w = "#212b32");
      }
      const y = u && d ? d.isHidden(N.id) : m.has(N.id), v = f ? {
        "aria-pressed": !y,
        "aria-label": `${N.label} (${y ? "show" : "hide"})`,
        onClick: () => $(N.id)
      } : { "aria-label": N.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${y ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: M,
              backgroundImage: N.patternDataUrl ? `url(${N.patternDataUrl})` : void 0,
              backgroundSize: N.patternDataUrl ? "auto" : void 0,
              borderColor: w
            },
            ...v
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: N.label })
      ] }, N.id);
    }) }),
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: I })
  ] });
}, p1 = ({
  series: e,
  seriesIndex: t,
  palette: n,
  parseX: a,
  areaOnly: o = !1,
  visibilityMode: s = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: c,
  gradientFill: d = !0,
  colors: u
}) => {
  const f = Sn();
  if (!f) return null;
  const { xScale: h, yScale: p } = f, g = dr()?.isHidden(e.id) ?? !1, m = g && s === "fade";
  if (g && s === "remove") return null;
  const I = tn();
  q.useEffect(() => {
    if (!I) return;
    const M = e.data.map((w) => ({ x: a(w), y: w.y }));
    return I.registerSeries(e.id, M), () => I.unregisterSeries(e.id);
  }, [I, e.id, e.data, a]);
  const L = u && u[t], $ = e.color || L || (n === "region" ? Ln(e.id, t) : Pt(t)), N = q.useMemo(() => c && c.length === e.data.length ? ho(
    e.data,
    (M) => h(a(M)),
    (M) => {
      const w = e.data.indexOf(M);
      return p(c[w].y1);
    },
    { smooth: l }
  ) : ho(
    e.data,
    (M) => h(a(M)),
    (M) => p(M.y),
    { smooth: l }
  ), [e.data, c, h, p, a, l]), x = q.useMemo(() => {
    if (c && c.length === e.data.length) {
      const j = fo().x((T) => h(a(T))).y0((T, P) => p(c[P].y0)).y1((T, P) => p(c[P].y1));
      return l && j.curve(Or), j(e.data) || "";
    }
    const [M, w] = p.domain();
    let y = i;
    y < M ? y = M : y > w && (y = w);
    const v = fo().x((j) => h(a(j))).y0(() => p(y)).y1((j) => p(j.y));
    return l && v.curve(Or), v(e.data) || "";
  }, [e.data, c, h, p, a, i, l]), _ = q.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: m ? 0.25 : 1,
      "aria-hidden": m ? !0 : void 0,
      children: [
        d && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: _, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: $, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: $, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: x,
            fill: d ? `url(#${_})` : $,
            ...d ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !o && /* @__PURE__ */ r.jsx("path", { d: N, fill: "none", stroke: $, strokeWidth: 1 })
      ]
    }
  );
}, m1 = ({
  series: e,
  seriesIndex: t,
  seriesCount: n,
  palette: a,
  parseX: o,
  focusable: s = !0,
  widthFactor: i = 0.8,
  groupGap: l = 2,
  barWidth: c,
  adaptive: d = !1,
  adaptiveGroupOccupancy: u = 0.9,
  visibilityMode: f = "remove",
  colorMode: h = "series",
  allSeries: p,
  stacked: b,
  gapRatio: g = 0.15,
  minBarWidth: m,
  gradientFill: I = !1,
  gradientStrokeMatch: L = !0,
  opacity: $ = 1,
  fadedOpacity: N = 0.25,
  flatFillOpacity: x = 1,
  colors: _
}) => {
  const M = Math.max(0, g), w = Sn(), y = cn();
  if (!w || !y) return null;
  const { xScale: v, yScale: j } = w, P = dr()?.isHidden(e.id) ?? !1, k = P && f === "fade";
  if (P && f === "remove") return null;
  const S = tn();
  q.useEffect(() => {
    if (!S) return;
    const X = e.data.map((re) => ({ x: o(re), y: re.y }));
    return S.registerSeries(e.id, X), () => S.unregisterSeries(e.id);
  }, [S, e.id, e.data, o]);
  const E = typeof v.bandwidth == "function", F = E ? v.bandwidth() : void 0, z = q.useMemo(() => {
    if (F != null) return F;
    const X = p && p.length ? p : [e], re = [];
    X.forEach((se) => {
      se.data.forEach((fe) => {
        const ue = v(o(fe));
        Number.isFinite(ue) && re.push(ue);
      });
    });
    const de = re.sort((se, fe) => se - fe);
    if (de.length <= 1) return 40;
    const Y = [];
    for (let se = 1; se < de.length; se++)
      Y.push(de[se] - de[se - 1]);
    return Y.sort((se, fe) => se - fe), (Y[Math.floor(Y.length / 2)] || 40) * i;
  }, [e.data, p, v, o, i, F]), { basePerBar: J } = q.useMemo(() => {
    if (E) {
      const de = z, Y = Math.max(
        1,
        (de - l * (n - 1)) / n
      ), le = e.barWidth ?? c;
      let se = le ? Math.min(le, de) : Y;
      if (d) {
        const fe = de * Math.min(1, Math.max(0.05, u)), ue = Math.max(
          1,
          (fe - l * (n - 1)) / n
        );
        se = le ? Math.min(se, ue) : ue;
      }
      return { basePerBar: se };
    }
    const X = e.barWidth ?? c, re = Math.max(
      1,
      (z - l * (n - 1)) / n
    );
    if (d) {
      const de = p && p.length ? p : [e], Y = [];
      de.forEach(
        (Ee) => Ee.data.forEach((_e) => {
          const Ne = v(o(_e));
          Number.isFinite(Ne) && Y.push(Ne);
        })
      ), Y.sort((Ee, _e) => Ee - _e);
      const le = [];
      for (let Ee = 1; Ee < Y.length; Ee++)
        le.push(Y[Ee] - Y[Ee - 1]);
      le.sort((Ee, _e) => Ee - _e);
      const fe = (le[Math.floor(le.length / 2)] || z) * Math.min(1, Math.max(0.05, u)), ue = Math.max(
        1,
        (fe - l * (n - 1)) / n
      );
      return { basePerBar: X ? Math.min(X, ue) : ue };
    }
    return X ? { basePerBar: Math.min(X, re) } : { basePerBar: re };
  }, [
    E,
    z,
    l,
    n,
    c,
    e.barWidth,
    d,
    u,
    p,
    v,
    o
  ]), H = q.useMemo(() => {
    if (E) return [];
    const X = [];
    return (p && p.length ? p : [e]).forEach(
      (de) => de.data.forEach((Y) => {
        const le = v(o(Y));
        Number.isFinite(le) && X.push(le);
      })
    ), X.sort((de, Y) => de - Y), Array.from(new Set(X));
  }, [E, p, e, v, o]), O = q.useMemo(() => {
    if (E)
      return [];
    if (!H.length) return [];
    if (H.length === 1)
      return [
        { center: H[0], left: 0, right: y.innerWidth }
      ];
    const X = [];
    for (let re = 0; re < H.length; re++) {
      const de = H[re], Y = re === 0 ? 0 : (H[re - 1] + de) / 2, le = re === H.length - 1 ? y.innerWidth : (de + H[re + 1]) / 2;
      X.push({
        center: de,
        left: Math.max(0, Y),
        right: Math.min(y.innerWidth, le)
      });
    }
    return X;
  }, [E, H, y.innerWidth]), W = q.useMemo(() => {
    if (E || !O.length)
      return;
    const X = Math.min(1, Math.max(0.05, i)), re = O.map((fe) => Math.max(2, fe.right - fe.left)), de = re.map(
      (fe) => Math.max(2, Math.min(fe - 1, fe * X))
    );
    let Y = Math.min(...de);
    if (m)
      if (n <= 1) {
        const fe = Math.min(...re.map((ue) => ue - 1));
        fe >= m && Y < m && (Y = Math.min(fe, m));
      } else {
        const fe = Math.min(...re.map((he) => he - 1)), ue = m * n + (n - 1) * (m * M);
        ue <= fe && Y < ue && (Y = ue);
      }
    if (n <= 1)
      return m && Y < m && re.every((ue) => ue >= m) ? { groupWidth: m, barWidth: m } : { groupWidth: Y, barWidth: Y };
    let le = Y / (n + (n - 1) * M);
    return le < 1 && (le = 1), m && le < m && m * n + (n - 1) * (m * M) <= Y && (le = m), { groupWidth: le * n + (n - 1) * (le * M), barWidth: le };
  }, [
    E,
    O,
    i,
    n,
    M,
    m
  ]), B = _ && _[t] ? _[t] : void 0, ee = e.color || B || (a === "region" ? Ln(e.id, t) : Pt(t)), R = a === "region" ? Ur(e.id, t) : yn(t), ne = L && (e.color || B) ? ee : R, te = Number.isFinite(j(0)) ? j(0) : j.range()[0], Z = q.useId();
  return b && b.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: k ? N : $,
      "aria-hidden": k ? !0 : void 0,
      children: [
        I && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: Z,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: ee, stopOpacity: 0.3 }),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: ee,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: ee,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((X, re) => {
          const de = o(X), Y = v(E ? X.x : de);
          let le, se;
          if (E)
            le = z, se = Y;
          else {
            const D = O.find(
              (G) => Math.abs(G.center - Y) < 0.5
            );
            if (!D || !W)
              le = J, se = Y - J / 2;
            else {
              const { groupWidth: G } = W;
              le = G;
              let V = Y - G / 2;
              V < D.left && (V = D.left), V + G > D.right && (V = Math.max(D.left, D.right - G)), se = V;
            }
          }
          const fe = b[re], ue = j(fe.y0), he = j(fe.y1), Ee = Math.min(ue, he), _e = Math.abs(he - ue) || 1;
          if (!E && m && le < m) {
            const D = O.find(
              (G) => Math.abs(G.center - Y) < 0.5
            );
            if (D) {
              const G = Math.max(2, D.right - D.left - 1), V = Math.min(G, m);
              V > le && (le = V, se = Math.max(
                D.left,
                Math.min(D.right - le, Y - le / 2)
              ));
            }
          }
          const Ne = !k && S?.focused?.seriesId === e.id && S.focused.index === re, ge = () => {
            !S || k || S.setFocused({
              seriesId: e.id,
              index: re,
              x: de,
              y: fe.y1 - fe.y0,
              clientX: se + le / 2,
              clientY: Ee
            });
          }, C = () => {
            S?.focused?.seriesId === e.id && S.focused.index === re && S.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: se,
              y: Ee,
              width: le,
              height: _e,
              fill: I ? `url(#${Z})` : ee,
              ...I ? {} : { fillOpacity: x },
              stroke: Ne ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : I && L ? ee : void 0,
              strokeWidth: Ne ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: k || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${fe.y1 - fe.y0}`,
              onMouseEnter: ge,
              onFocus: ge,
              onMouseLeave: C,
              onBlur: C
            },
            re
          );
        })
      ]
    }
  ) : /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: k ? N : $,
      "aria-hidden": k ? !0 : void 0,
      children: [
        I && /* @__PURE__ */ r.jsxs("defs", { children: [
          h === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: Z,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: ee, stopOpacity: 0.3 }),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: ee,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: ee,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          h === "category" && e.data.map((X, re) => {
            const Y = _ && _[re] || (a === "region" ? Ln(String(X.x), re) : Pt(re)), le = `${Z}-${re}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: le,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: Y, stopOpacity: 0.3 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "60%", stopColor: Y, stopOpacity: 0.14 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: Y, stopOpacity: 0.06 })
                ]
              },
              le
            );
          })
        ] }),
        e.data.map((X, re) => {
          const de = o(X), Y = v(E ? X.x : de);
          let le, se;
          if (E) {
            const A = z;
            if (n <= 1)
              se = A, le = Y;
            else {
              se = Math.max(
                1,
                A / (n + (n - 1) * M)
              );
              const U = se * M, oe = se * n + U * (n - 1);
              le = Y + (A - oe) / 2 + t * (se + U);
            }
          } else {
            const A = O.find((U) => U.center === Y);
            if (!A || !W)
              se = J, le = Y - J / 2, m && se < m && (se = m, le = Y - se / 2);
            else {
              const { barWidth: U } = W;
              se = U;
              const oe = n > 1 ? U * M : 0, K = se * n + oe * (n - 1);
              let ae = Y - K / 2;
              ae < A.left && (ae = A.left), ae + K > A.right && (ae = Math.max(A.left, A.right - K)), le = ae + t * (se + oe);
            }
            if (m && se < m) {
              const U = O.find(
                (oe) => Math.abs(oe.center - Y) < 0.5
              );
              if (U) {
                const oe = Math.max(2, U.right - U.left - 1), K = Math.min(oe, m);
                if (K > se)
                  if (n <= 1)
                    se = K, le = Math.max(
                      U.left,
                      Math.min(U.right - se, Y - se / 2)
                    );
                  else {
                    const ae = K * M, ce = K * n + ae * (n - 1);
                    if (ce <= U.right - U.left - 1) {
                      se = K;
                      const pe = ce;
                      let ye = Y - pe / 2;
                      ye < U.left && (ye = U.left), ye + pe > U.right && (ye = Math.max(
                        U.left,
                        U.right - pe
                      )), le = ye + t * (se + ae);
                    }
                  }
              }
            }
          }
          const fe = le + se / 2, ue = j(X.y), he = Math.min(te, ue), Ee = Math.abs(te - ue), _e = !k && S?.focused?.seriesId === e.id && S.focused.index === re, Ne = () => {
            !S || k || S.setFocused({
              seriesId: e.id,
              index: re,
              x: de,
              y: X.y,
              clientX: fe,
              clientY: ue
            });
          }, ge = () => {
            S?.focused?.seriesId === e.id && S.focused.index === re && S.clear();
          }, C = h === "category" && _ ? _[re] : void 0, D = h === "category" ? C || (a === "region" ? Ln(String(X.x), re) : Pt(re)) : ee, G = h === "category" ? `${Z}-${re}` : Z, V = I && L ? D : h === "category" ? a === "region" ? Ur(String(X.x), re) : yn(re) : ne, Q = _e ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : V || D;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: le,
              y: he,
              width: se,
              height: Ee || 1,
              fill: I ? `url(#${G})` : D,
              ...I ? {} : { fillOpacity: x },
              stroke: Q,
              strokeWidth: _e ? 2 : 1,
              className: "fdp-bar",
              tabIndex: k || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${X.y}`,
              onMouseEnter: Ne,
              onFocus: Ne,
              onMouseLeave: ge,
              onBlur: ge
            },
            re
          );
        })
      ]
    }
  );
}, g1 = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: o = 0.05,
  children: s,
  yTickCount: i = 5
}) => {
  const l = cn(), c = t ?? l?.innerWidth ?? 0, d = n ?? l?.innerHeight ?? 0, u = q.useMemo(() => e.flatMap((m) => m.data), [e]), f = q.useMemo(() => {
    const m = /* @__PURE__ */ new Set();
    return u.forEach((I) => m.add(I.x)), Array.from(m);
  }, [u]), h = q.useMemo(
    () => Math.max(0, ...u.map((m) => m.y)),
    [u]
  ), p = q.useMemo(
    () => Xi().domain(f).range([0, c]).paddingInner(a).paddingOuter(o),
    [f, c, a, o]
  ), b = q.useMemo(
    () => Ar().domain([0, h]).nice().range([d, 0]),
    [h, d]
  ), g = q.useMemo(
    () => ({
      xScale: p,
      yScale: b,
      getXTicks: () => f,
      getYTicks: (m = i) => b.ticks(m)
    }),
    [p, b, f, i]
  );
  return /* @__PURE__ */ r.jsx(rs.Provider, { value: g, children: s });
}, x1 = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: o,
  id: s,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const c = q.useId(), d = s || c, u = t ? `${d}-desc` : void 0, f = n ? `${d}-src` : void 0, h = typeof window < "u" && !l;
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      id: d,
      className: Et("fdp-chart fdp-chart--noscript", o),
      "aria-labelledby": `${d}-title`,
      "aria-describedby": Et(u, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ r.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ r.jsx("h3", { id: `${d}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ r.jsx("p", { id: u, className: "fdp-chart__description", children: t }),
        !h && /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ r.jsx("noscript", { children: /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ r.jsx(en, { ...a }) }) }),
          /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ r.jsx(en, { ...a }) })
        ] }),
        n && /* @__PURE__ */ r.jsx("figcaption", { className: "fdp-chart__caption", children: n && /* @__PURE__ */ r.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          n
        ] }) })
      ]
    }
  );
}, b1 = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const o = q.useRef(null);
  return q.useEffect(() => {
    const s = o.current;
    if (!s) return;
    const i = () => {
      const l = Array.from(s.querySelectorAll(e));
      if (l.length === 0) return;
      const c = [];
      l.forEach((d) => {
        d.classList.contains("fdp-chart--enhanced") || (d.classList.add("fdp-chart--enhanced"), c.push(d));
      }), c.length && t && t(c);
    };
    if (n > 0) {
      if (typeof window > "u") return;
      const l = window.setTimeout(i, n);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, n]), /* @__PURE__ */ r.jsx("div", { ref: o, children: a });
}, Om = ({
  label: e,
  value: t,
  unit: n,
  delta: a,
  status: o = "neutral",
  variant: s = "default",
  subtitle: i,
  metadata: l,
  trendData: c,
  loading: d = !1,
  error: u,
  valueFormatter: f,
  className: h,
  style: p,
  id: b,
  announceDelta: g = !0,
  visual: m
}) => {
  const I = q.useId(), L = b || I, $ = `${L}-label`, N = `${L}-value`, x = `${L}-delta`, _ = typeof t == "number" && !Number.isNaN(t), M = d ? "—" : u ? "" : _ ? f ? f(t) : t.toLocaleString() : t;
  let w, y = "", v = "";
  if (a && !d && !u) {
    w = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const j = Math.abs(a.value), T = w === "up" ? `+${j}` : w === "down" ? `-${j}` : "0", P = a.isPercent ? "%" : "";
    if (y = `${T}${P}`, a.ariaLabel)
      v = a.ariaLabel;
    else {
      const k = a.invert ? w === "down" : w === "up";
      v = `${w === "neutral" ? "no change" : w === "up" ? "up" : "down"} ${j}${P}${w === "neutral" ? "" : k ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: Et(
        "fdp-metric-card",
        s && `fdp-metric-card--${s}`,
        o && `fdp-metric-card--status-${o}`,
        d && "fdp-metric-card--loading",
        u && "fdp-metric-card--error",
        h
      ),
      style: p,
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
            /* @__PURE__ */ r.jsx("div", { id: N, className: "fdp-metric-card__value", children: d ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : u ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: u }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: M }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: x,
              "aria-label": v,
              className: Et(
                "fdp-metric-card__delta",
                w && `fdp-metric-card__delta--${w}`
              ),
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-value", children: y }),
                a.period && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          c && c.length > 0 && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        m && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: m }),
        g && a && !a.ariaLabel && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: v })
      ] })
    }
  );
};
var ut = /* @__PURE__ */ ((e) => (e.Xs = "xs", e.Sm = "sm", e.Md = "md", e.Lg = "lg", e.Xl = "xl", e.Full = "full", e))(ut || {}), Gl = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Gl || {}), sn = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(sn || {}), He = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(He || {});
const as = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
as.reduce(
  (e, t, n) => (e[t] = n + 1, e),
  {}
);
const Um = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, Wm = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, Yl = as.reduce(
  (e, t, n) => (e[t] = {
    id: t,
    rank: n + 1,
    label: Um[t],
    category: Wm[t],
    participatesInRanking: !0
  }, e),
  {}
);
as.map(
  (e) => Yl[e]
);
var or = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(or || {}), ln = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(ln || {}), Vl = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(Vl || {});
const $n = {
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
function ka(e) {
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
function Ca(e) {
  switch (e) {
    case He.Improvement:
      return "Improvement signal";
    case He.Concern:
      return "Concern signal";
    case He.Neither:
      return "Common cause variation";
    case He.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function Zl(e) {
  switch (e) {
    case ln.Pass:
      return "Target met";
    case ln.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Gm(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((n - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const Tt = {
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
function ql(e) {
  return e ? Tt[e]?.token ?? Tt.neither.token : Tt.neither.token;
}
function Ym(e) {
  return e ? Tt[e]?.hex ?? Tt.neither.hex : Tt.neither.hex;
}
var pn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(pn || {});
const Vm = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, Zm = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var ft = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(ft || {}), Pe = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Pe || {}), _t = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(_t || {}), Ie = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Ie || {});
const qm = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, o = parseInt(t.slice(4, 6), 16) / 255, s = [n, a, o].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
}, Na = {
  special_cause_deteriorating: {
    hex: Tt.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: Tt.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: Tt.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: Tt.suppressed.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(Na).forEach((e) => {
  e.text || (e.text = qm(e.hex));
});
const Jl = (e) => Na[e], os = (e) => Na[e].judgement || "none", mi = {
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
function Jm(e, t) {
  let n;
  return e === "common_cause" ? n = mi.common : n = mi.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
let go = null;
try {
  go = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const yt = (e, t) => {
  if (!go) return t;
  const n = e.split(".");
  let a = go;
  for (const s of n) {
    if (a == null) break;
    a = a[s];
  }
  const o = a;
  return o == null ? t : typeof o == "string" || typeof o == "number" ? String(o) : o.$value != null ? String(o.$value) : o.value != null ? String(o.value) : t;
}, ja = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: yt("gradient.stop.start-opacity", "0.12"),
  mid: yt("gradient.stop.mid-opacity", "0.03"),
  end: yt("gradient.stop.end-opacity", "0"),
  triStart: yt(
    "gradient.stop.triangle-start-opacity",
    yt("gradient.stop.start-opacity", "0.12")
  ),
  triMid: yt(
    "gradient.stop.triangle-mid-opacity",
    yt("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: yt(
    "gradient.stop.triangle-end-opacity",
    yt("gradient.stop.end-opacity", "0")
  )
}), Ma = {
  improvement: "improvement",
  concern: "concern",
  noJudgement: "no-judgement",
  common: "common-cause"
}, Ia = {
  improvement: "#00B0F0",
  concern: "#E46C0A",
  noJudgement: "#490092",
  common: "#A6A6A6"
}, Xl = () => yt(Ma.improvement, Ia.improvement), Kl = () => yt(Ma.concern, Ia.concern), Xm = () => yt(Ma.noJudgement, Ia.noJudgement), un = () => yt(Ma.common, Ia.common);
function wr(e) {
  switch (e) {
    case He.Improvement:
      return Xl();
    case He.Concern:
      return Kl();
    case He.Neither:
    case He.Suppressed:
    default:
      return un();
  }
}
function Ql(e) {
  switch (e) {
    case Ie.SpecialCauseImproving:
      return Xl();
    case Ie.SpecialCauseDeteriorating:
      return Kl();
    case Ie.SpecialCauseNoJudgement:
      return Xm();
    case Ie.CommonCause:
    default:
      return un();
  }
}
var Nt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Nt || {}), Ue = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Ue || {}), Me = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(Me || {}), ot = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(ot || {}), mn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(mn || {}), $t = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))($t || {}), An = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(An || {}), Mn = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(Mn || {}), xt = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(xt || {}), Rt = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(Rt || {}), At = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(At || {}), Wr = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Wr || {}), Gr = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Gr || {});
const rn = {
  [ot.SinglePoint]: 1,
  [ot.TwoSigma]: 2,
  [ot.Shift]: 3,
  [ot.Trend]: 4
}, gi = 3.267, Km = 2.66, xi = 0.2777;
function Fe(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function In(e) {
  return e.reduce((t, n) => t + n, 0) / (e.length || 1);
}
function bi(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!(t[o] || !Fe(s))) {
      if (a !== null) {
        const i = e[a];
        Fe(i) && (n[o] = Math.abs(s - i));
      }
      a = o;
    }
  }
  return n;
}
function yi(e, t) {
  const n = e.filter(Fe);
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = n.slice();
  if (t) {
    const s = In(a), i = gi * s;
    a = a.filter((l) => l <= i);
  }
  const o = In(a);
  return { mrMean: o, mrUcl: gi * o };
}
function vi(e, t) {
  if (!Fe(e) || !Fe(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = Km * t, a = 2 / 3 * n, o = 1 / 3 * n;
  return {
    upperProcessLimit: e + n,
    lowerProcessLimit: e - n,
    upperTwoSigma: e + a,
    lowerTwoSigma: e - a,
    upperOneSigma: e + o,
    lowerOneSigma: e - o
  };
}
function Qm(e, t, n, a) {
  if (e === Nt.T) {
    const f = t.map((w) => Fe(w) && w > 0 ? Math.pow(w, xi) : null), h = bi(f, n), p = yi(h, a), b = f.filter((w, y) => !n[y] && Fe(w)), g = b.length ? In(b) : NaN, m = vi(g, p.mrMean), I = (w) => Fe(w) && w > 0 ? Math.pow(w, 1 / xi) : null, L = Fe(m.upperProcessLimit) ? I(m.upperProcessLimit) : null, $ = Fe(m.lowerProcessLimit) && m.lowerProcessLimit > 0 ? I(m.lowerProcessLimit) : null, N = Fe(m.upperTwoSigma) ? I(m.upperTwoSigma) : null, x = Fe(m.lowerTwoSigma) && m.lowerTwoSigma > 0 ? I(m.lowerTwoSigma) : null, _ = Fe(m.upperOneSigma) ? I(m.upperOneSigma) : null, M = Fe(m.lowerOneSigma) && m.lowerOneSigma > 0 ? I(m.lowerOneSigma) : null;
    return {
      mean: Fe(g) && g > 0 ? I(g) : null,
      mr: h,
      mrMean: p.mrMean,
      mrUcl: p.mrUcl,
      upperProcessLimit: L,
      lowerProcessLimit: $,
      upperTwoSigma: N,
      lowerTwoSigma: x,
      upperOneSigma: _,
      lowerOneSigma: M
    };
  }
  if (e === Nt.G) {
    const f = t.filter((j, T) => !n[T] && Fe(j)), h = f.length ? In(f) : NaN, p = Fe(h) ? 1 / (h + 1) : NaN, b = (j) => {
      if (!Fe(p) || p <= 0 || p >= 1) return NaN;
      const T = Math.ceil(Math.log(1 - j) / Math.log(1 - p)) - 1;
      return Math.max(0, T);
    }, g = 135e-5, m = 1 - 135e-5, I = 0.02275, L = 1 - 0.02275, $ = 0.158655, N = 1 - 0.158655, x = b(m), _ = b(g), M = b(L), w = b(I), y = b(N), v = b($);
    return {
      mean: Fe(h) ? h : null,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: Fe(x) ? x : null,
      lowerProcessLimit: Fe(_) ? _ : null,
      upperTwoSigma: Fe(M) ? M : null,
      lowerTwoSigma: Fe(w) ? w : null,
      upperOneSigma: Fe(y) ? y : null,
      lowerOneSigma: Fe(v) ? v : null
    };
  }
  if (e !== Nt.XmR)
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
  const o = bi(t, n), s = o.filter(Fe), i = s.length ? In(s) : NaN, l = Fe(i) ? 3.267 * i : NaN;
  let c = NaN;
  {
    const f = t.reduce((h, p, b) => {
      if (n[b] || !Fe(p)) return h;
      if (!a)
        return h.push(p), h;
      const g = o[b];
      return (g === null || !Fe(l) || Fe(g) && g <= l) && h.push(p), h;
    }, []);
    c = f.length ? In(f) : NaN;
  }
  const d = yi(o, a), u = vi(c, d.mrMean);
  return {
    mean: c,
    mr: o,
    mrMean: d.mrMean,
    mrUcl: d.mrUcl,
    ...u
  };
}
function eg(e, t) {
  const n = e.map((c, d) => d).filter((c) => !e[c].ghost && Fe(e[c].value)), a = (c) => e[c], o = t.shiftPoints, s = t.trendPoints;
  let i = [], l = [];
  for (const c of n) {
    const d = a(c);
    if (!Fe(d.mean) || !Fe(d.value) ? (i = [], l = []) : d.value > d.mean ? (i.push(c), l = []) : d.value < d.mean ? (l.push(c), i = []) : (i = [], l = []), i.length >= o)
      for (const u of i) a(u).shiftUp = !0;
    if (l.length >= o)
      for (const u of l) a(u).shiftDown = !0;
  }
  for (let c = 0; c <= n.length - 3; c++) {
    const u = n.slice(c, c + 3).map(a);
    if (!u.every((N) => Fe(N.value) && Fe(N.mean)))
      continue;
    const f = u[0].mean, h = u.every((N) => N.value > f), p = u.every((N) => N.value < f);
    if (!h && !p)
      continue;
    const b = u[0].upperTwoSigma ?? 1 / 0, g = u[0].lowerTwoSigma ?? -1 / 0, m = u[0].upperProcessLimit ?? 1 / 0, I = u[0].lowerProcessLimit ?? -1 / 0, L = u.filter((N) => t.twoSigmaIncludeAboveThree ? N.value > b : N.value > b && N.value <= m), $ = u.filter((N) => t.twoSigmaIncludeAboveThree ? N.value < g : N.value < g && N.value >= I);
    h && L.length >= 2 && L.forEach((N) => N.twoSigmaUp = !0), p && $.length >= 2 && $.forEach((N) => N.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let c = 0; c <= n.length - 5; c++) {
      const u = n.slice(c, c + 5).map(a);
      if (!u.every((L) => Fe(L.value) && Fe(L.mean)))
        continue;
      const f = u[0].mean, h = u.every((L) => L.value > f), p = u.every((L) => L.value < f);
      if (!h && !p)
        continue;
      const b = u[0].upperOneSigma ?? 1 / 0, g = u[0].lowerOneSigma ?? -1 / 0, m = u.filter((L) => L.value > b), I = u.filter((L) => L.value < g);
      h && m.length >= 4 && m.forEach((L) => L.fourOfFiveUp = !0), p && I.length >= 4 && I.forEach((L) => L.fourOfFiveDown = !0);
    }
  for (let c = 0; c <= n.length - s; c++) {
    const d = n.slice(c, c + s), u = d.map(a);
    if (!u.every((p) => Fe(p.value)))
      continue;
    let f = !0, h = !0;
    for (let p = 1; p < u.length && (u[p].value > u[p - 1].value || (f = !1), u[p].value < u[p - 1].value || (h = !1), !(!f && !h)); p++)
      ;
    f && d.forEach((p) => a(p).trendUp = !0), h && d.forEach((p) => a(p).trendDown = !0);
  }
}
function ec(e) {
  const t = [], n = [];
  e.singlePointUp && t.push({
    id: ot.SinglePoint,
    rank: rn[ot.SinglePoint]
  }), e.singlePointDown && n.push({
    id: ot.SinglePoint,
    rank: rn[ot.SinglePoint]
  }), e.twoSigmaUp && t.push({
    id: ot.TwoSigma,
    rank: rn[ot.TwoSigma]
  }), e.twoSigmaDown && n.push({
    id: ot.TwoSigma,
    rank: rn[ot.TwoSigma]
  }), e.shiftUp && t.push({ id: ot.Shift, rank: rn[ot.Shift] }), e.shiftDown && n.push({ id: ot.Shift, rank: rn[ot.Shift] }), e.trendUp && t.push({ id: ot.Trend, rank: rn[ot.Trend] }), e.trendDown && n.push({ id: ot.Trend, rank: rn[ot.Trend] });
  const a = t.reduce((i, l) => Math.max(i, l.rank), 0), o = n.reduce((i, l) => Math.max(i, l.rank), 0), s = a > o ? mn.Upwards : o > a ? mn.Downwards : mn.Same;
  return { up: t, dn: n, upMax: a, dnMax: o, primeDirection: s };
}
function wi(e, t) {
  const n = t === Ue.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === Ue.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, a = t === Ue.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === Ue.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: n, opposite: a };
}
function Si(e, t, n, a = !1, o, s, i = !1) {
  const { up: l, dn: c, upMax: d, dnMax: u, primeDirection: f } = ec(e);
  e.primeDirection = f;
  const h = e.specialCauseImprovementValue, p = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && tg({ row: e, metric: t, metricConflictRule: n, preferImprovementWhenConflict: a, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: o, ruleHierarchy: s }), t === Ue.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? Me.ImprovementHigh : e.specialCauseConcernValue !== null ? Me.ConcernLow : Me.CommonCause : t === Ue.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? Me.ImprovementLow : e.specialCauseConcernValue !== null ? Me.ConcernHigh : Me.CommonCause : e.variationIcon = Me.CommonCause;
  const b = e.specialCauseImprovementValue !== null ? $t.Up : e.specialCauseConcernValue !== null ? $t.Down : void 0, g = b === $t.Up ? d : b === $t.Down ? u : Math.max(d, u);
  e.primeRank = g || void 0;
  const m = b === $t.Up ? l.find((I) => I.rank === g) : b === $t.Down ? c.find((I) => I.rank === g) : void 0;
  return e.primeRuleId = m?.id, { originalImprovement: h, originalConcern: p };
}
function tg(e) {
  const {
    row: t,
    metric: n,
    metricConflictRule: a,
    preferImprovementWhenConflict: o,
    preferTrendWhenConflict: s,
    primeDirection: i = t.primeDirection ?? mn.Same,
    conflictStrategy: l,
    ruleHierarchy: c
  } = e;
  if (s && t.specialCauseImprovementValue !== null && t.specialCauseConcernValue !== null) {
    const u = !!t.trendUp, f = !!t.trendDown;
    if (n === Ue.Up) {
      if (u && !f) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!u && f) {
        t.specialCauseImprovementValue = null;
        return;
      }
    } else if (n === Ue.Down) {
      if (f && !u) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!f && u) {
        t.specialCauseImprovementValue = null;
        return;
      }
    }
  }
  const d = o ? Mn.PreferImprovement : l ?? Mn.SqlPrimeThenRule;
  if (d === Mn.PreferImprovement) {
    n === Ue.Up ? t.specialCauseConcernValue = null : n === Ue.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (d === Mn.RuleHierarchy) {
    const u = c ?? [ot.Trend, ot.Shift, ot.TwoSigma, ot.SinglePoint], { up: f, dn: h } = ec(t);
    for (const p of u) {
      const b = f.some((m) => m.id === p), g = h.some((m) => m.id === p);
      if (b && !g) {
        n === Ue.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (g && !b) {
        n === Ue.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (b && g) {
        (n === Ue.Up || n === Ue.Down) && (a === An.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === mn.Upwards ? n === Ue.Up ? t.specialCauseConcernValue = null : n === Ue.Down && (t.specialCauseImprovementValue = null) : i === mn.Downwards ? n === Ue.Up ? t.specialCauseImprovementValue = null : n === Ue.Down && (t.specialCauseConcernValue = null) : a === An.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
var xo = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(xo || {});
function ng(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function rg(e) {
  const t = ng(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function _i(e) {
  const t = [], n = (i, l, c) => ({
    segStart: i,
    segSide: l,
    minV: c,
    maxV: c,
    maxAbsDelta: 0
    // caller sets initial delta immediately after
  }), a = (i, l, c, d, u) => ({
    minV: Math.min(c, i),
    maxV: Math.max(d, i),
    maxAbsDelta: Math.max(u, l)
  }), o = (i, l, c, d, u, f, h, p) => {
    i.push({
      trendDirection: p,
      start: l,
      end: c,
      side: d,
      minValue: u,
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
    let c = s, d = s;
    for (; d < e.length; d++) {
      const I = e[d];
      if (!I || I.value == null || I.ghost || !(l === "Up" ? I.trendUp : I.trendDown)) break;
    }
    const u = d - 1, f = [];
    let h, p, b = 1 / 0, g = -1 / 0, m = 0;
    for (let I = c; I <= u; I++) {
      const L = e[I];
      if (L.value == null) continue;
      const $ = L.value - (L.mean ?? 0), N = rg($);
      if (!N) {
        h !== void 0 && (o(f, h, I - 1, p, b, g, m, l), h = void 0, p = void 0, b = 1 / 0, g = -1 / 0, m = 0);
        continue;
      }
      if (h === void 0)
        ({ segStart: h, segSide: p, minV: b, maxV: g, maxAbsDelta: m } = (() => {
          const x = n(I, N, L.value);
          return {
            segStart: x.segStart,
            segSide: x.segSide,
            minV: x.minV,
            maxV: x.maxV,
            maxAbsDelta: Math.abs($)
          };
        })());
      else if (N !== p)
        o(f, h, I - 1, p, b, g, m, l), { segStart: h, segSide: p, minV: b, maxV: g, maxAbsDelta: m } = (() => {
          const x = n(I, N, L.value);
          return {
            segStart: x.segStart,
            segSide: x.segSide,
            minV: x.minV,
            maxV: x.maxV,
            maxAbsDelta: Math.abs($)
          };
        })();
      else {
        const x = a(L.value, Math.abs($), b, g, m);
        b = x.minV, g = x.maxV, m = x.maxAbsDelta;
      }
    }
    h !== void 0 && o(f, h, u, p, b, g, m, l), t.push({ trendDirection: l, start: c, end: u, segments: f }), s = u + 1;
  }
  return t;
}
function ag(e) {
  if (e === Ue.Up) return "Above";
  if (e === Ue.Down) return "Below";
}
function og(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function ki(e, t) {
  const n = t.strategy ?? xt.CrossingAfterFavourable, a = ag(t.metricImprovement), o = og(a), s = [];
  for (const i of e) {
    if (!a) {
      if (n === xt.ExtremeFavourable || n === xt.CrossingAfterFavourable) {
        const l = i.segments;
        if (l.length === 0) continue;
        let c = l[0];
        for (const d of l)
          d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean && (c = d);
        s.push(c);
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
      let c;
      for (let d = 0; d < l.length; d++) {
        const u = l[d];
        if (u.side === a && d > 0 && l[d - 1].side !== a) {
          c = u;
          break;
        }
      }
      if (!c) {
        const d = l.filter((u) => u.side === a);
        d.length > 0 && (c = d.reduce(
          (u, f) => f.end - f.start > u.end - u.start ? f : u,
          d[0]
        ));
      }
      c && s.push(c);
      continue;
    }
    if (n === xt.CrossingAfterUnfavourable) {
      const l = i.segments;
      let c;
      for (let d = 0; d < l.length; d++) {
        const u = l[d];
        if (u.side === o && d > 0 && l[d - 1].side !== o) {
          c = u;
          break;
        }
      }
      if (!c) {
        const d = l.filter((u) => u.side === o);
        d.length > 0 && (c = d.reduce(
          (u, f) => f.end - f.start > u.end - u.start ? f : u,
          d[0]
        ));
      }
      c && s.push(c);
      continue;
    }
    if (n === xt.ExtremeFavourable) {
      const l = i.segments.filter((d) => d.side === a);
      if (l.length === 0) continue;
      const c = l.reduce(
        (d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d
      );
      s.push(c);
      continue;
    }
    if (n === xt.ExtremeUnfavourable) {
      const l = i.segments.filter((d) => d.side === o);
      if (l.length === 0) continue;
      const c = l.reduce((d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d);
      s.push(c);
      continue;
    }
    if (n === xt.FirstFavourable) {
      const l = i.segments.find((c) => c.side === a);
      l && s.push(l);
      continue;
    }
    if (n === xt.FirstUnfavourable) {
      const l = i.segments.find((c) => c.side === o);
      l && s.push(l);
      continue;
    }
    if (n === xt.LongestFavourable) {
      const l = i.segments.filter((d) => d.side === a);
      if (l.length === 0) continue;
      const c = l.reduce(
        (d, u) => u.end - u.start > d.end - d.start ? u : d
      );
      s.push(c);
      continue;
    }
    if (n === xt.LongestUnfavourable) {
      const l = i.segments.filter((d) => d.side === o);
      if (l.length === 0) continue;
      const c = l.reduce((d, u) => u.end - u.start > d.end - d.start ? u : d);
      s.push(c);
      continue;
    }
    if (n === xt.LastFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
    if (n === xt.LastUnfavourable) {
      const l = i.segments.filter((c) => c.side === o);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
  }
  return s;
}
var at = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(at || {}), Bn = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(Bn || {});
function sg(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), n = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: n };
}
function ur(e, t) {
  const n = t.metricImprovement, a = t.trendVisualMode ?? "Ungated", o = t.enableNeutralNoJudgement ?? !0;
  return e.map((s) => {
    if (!s || s.value == null || s.ghost) return "Common";
    const { upAny: i, downAny: l } = sg(s);
    if (i && l) return "Improvement";
    switch (s.variationIcon) {
      case Me.ImprovementHigh:
      case Me.ImprovementLow:
        return "Improvement";
      case Me.ConcernHigh:
      case Me.ConcernLow:
        return "Concern";
      case Me.NeitherHigh:
      case Me.NeitherLow: {
        if (a === "Ungated" && n !== Ue.Neither) {
          if (i && !l)
            return n === Ue.Up ? "Improvement" : "Concern";
          if (l && !i)
            return n === Ue.Down ? "Improvement" : "Concern";
        }
        return o ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function ig(e, t, n) {
  const a = n?.mode ?? "Disabled";
  if (!e.length) return [];
  let o = ur(e, {
    metricImprovement: t,
    trendVisualMode: Bn.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (a !== "RecalcCrossing" || t === Ue.Neither) return o;
  const s = Math.max(0, n?.preWindow ?? 2), i = Math.max(0, n?.postWindow ?? 3), l = n?.prePolarity ?? "Opposite", c = (f, h) => {
    if (f < 0 || f >= o.length) return;
    const p = o[f];
    (p === at.Common || p === at.NoJudgement) && (o[f] = h);
  }, d = (f) => {
    if (f == null) return null;
    const h = e.reduce((b, g) => (g.partitionId === f && typeof g.value == "number" && !g.ghost && b.push(g.value), b), []);
    return h.length ? h.reduce((b, g) => b + g, 0) / h.length : null;
  }, u = Array.isArray(n?.boundaryIndices) && n.boundaryIndices.length ? n.boundaryIndices.slice().filter((f) => Number.isFinite(f)) : e.reduce((f, h, p) => {
    if (p === 0) return f;
    const b = e[p - 1];
    return b && h && h.partitionId !== b.partitionId && f.push(p), f;
  }, []);
  for (const f of u) {
    const h = e[f - 1], p = e[f];
    if (!h || !p)
      continue;
    let b = f - 1;
    for (; b - 1 >= 0 && e[b - 1] && e[b - 1].partitionId === h.partitionId; )
      b--;
    let g = f;
    for (; g + 1 < e.length && e[g + 1] && e[g + 1].partitionId === p.partitionId; )
      g++;
    let m = null;
    for (let _ = f - 1; _ >= 0; _--) {
      const M = e[_];
      if (M.partitionId !== h.partitionId) break;
      if (typeof M.mean == "number") {
        m = M.mean;
        break;
      }
    }
    let I = null;
    for (let _ = f; _ < e.length; _++) {
      const M = e[_];
      if (M.partitionId !== p.partitionId) break;
      if (typeof M.mean == "number") {
        I = M.mean;
        break;
      }
    }
    if (m == null && (m = d(h.partitionId ?? null)), I == null && (I = d(p.partitionId ?? null)), m == null || I == null)
      continue;
    const L = I - m, $ = t === Ue.Up ? L > 0 : L < 0, N = $ ? at.Improvement : at.Concern, x = l === "Same" ? N : $ ? at.Concern : at.Improvement;
    for (let _ = 1; _ <= s; _++) {
      const M = f - _;
      if (M < b) break;
      c(M, x);
    }
    for (let _ = 0; _ < i; _++) {
      const M = f + _;
      if (M > g) break;
      c(M, N);
    }
  }
  return o;
}
function tc(e) {
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
function fr(e) {
  const { chartType: t, metricImprovement: n, data: a } = e, o = tc(e.settings), s = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: !1,
    metricConflictRule: An.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    enableFourOfFiveRule: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: Mn.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: Rt.Off,
    trendSegmentationStrategy: xt.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...o
  }, i = o?.trendSegmentationMode || (o?.trendFavourableSegmentation === !0 ? Rt.Always : o?.trendFavourableSegmentation === !1 ? Rt.Off : s.trendSegmentationMode), l = a.map((g, m) => ({
    rowId: m + 1,
    x: g.x,
    value: Fe(g.value) ? g.value : null,
    ghost: !!g.ghost,
    baseline: !!g.baseline,
    target: Fe(g.target) ? g.target : null
  })), c = [];
  let d = [];
  for (const g of l)
    g.baseline && d.length && (c.push(d), d = []), d.push(g);
  d.length && c.push(d);
  const u = [], f = (s.trendFavourableSegmentation || i !== Rt.Off) && !s.preferImprovementWhenConflict, h = l.filter((g) => !g.ghost && Fe(g.value)).length, p = !!s.chartLevelEligibility && h >= s.minimumPoints;
  let b = 0;
  for (const g of c) {
    b++;
    const m = g.map((x) => x.value), I = g.map((x) => x.ghost), L = Qm(
      t,
      m,
      I,
      !!s.excludeMovingRangeOutliers
    ), $ = g.map((x, _) => {
      const M = !x.ghost && Fe(x.value) ? m.slice(0, _ + 1).filter((y, v) => !I[v] && Fe(y)).length : 0, w = p ? !0 : M >= s.minimumPoints;
      return {
        rowId: x.rowId,
        x: x.x,
        value: Fe(x.value) ? x.value : null,
        ghost: x.ghost,
        partitionId: b,
        pointRank: M,
        mean: (w || p) && Fe(L.mean) ? L.mean : null,
        upperProcessLimit: w || p ? L.upperProcessLimit : null,
        lowerProcessLimit: w || p ? L.lowerProcessLimit : null,
        upperTwoSigma: w || p ? L.upperTwoSigma : null,
        lowerTwoSigma: w || p ? L.lowerTwoSigma : null,
        upperOneSigma: w || p ? L.upperOneSigma : null,
        lowerOneSigma: w || p ? L.lowerOneSigma : null,
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
        variationIcon: Me.CommonCause
      };
    });
    for (const x of $)
      x.ghost || !Fe(x.value) || x.mean === null || (Fe(x.upperProcessLimit) && x.value > x.upperProcessLimit && (x.singlePointUp = !0), Fe(x.lowerProcessLimit) && x.value < x.lowerProcessLimit && (x.singlePointDown = !0));
    eg($, {
      shiftPoints: s.shiftPoints,
      trendPoints: s.trendPoints,
      twoSigmaIncludeAboveThree: !!s.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!s.enableFourOfFiveRule
    }), f && ((x) => {
      const _ = x.some(
        (j) => (j.singlePointUp || j.twoSigmaUp || j.shiftUp || j.trendUp) && (j.singlePointDown || j.twoSigmaDown || j.shiftDown || j.trendDown)
      );
      if (i === Rt.Off || i === Rt.AutoWhenConflict && !_)
        return;
      const M = _i(x), w = ki(M, {
        metricImprovement: n,
        strategy: s.trendSegmentationStrategy
      }), y = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set();
      for (const j of w)
        for (let T = j.start; T <= j.end; T++)
          j.trendDirection === xo.Up ? y.add(T) : v.add(T);
      x.forEach((j, T) => {
        j.trendUp = y.has(T) ? j.trendUp : !1, j.trendDown = v.has(T) ? j.trendDown : !1, s.trendDominatesHighlightedWindow && (y.has(T) ? (j.singlePointDown = !1, j.twoSigmaDown = !1, j.shiftDown = !1) : v.has(T) && (j.singlePointUp = !1, j.twoSigmaUp = !1, j.shiftUp = !1));
      });
    })($);
    for (const x of $) {
      if (x.ghost || !Fe(x.value) || x.mean === null) {
        u.push(x);
        continue;
      }
      const { aligned: _, opposite: M } = wi(
        x,
        n
      );
      if (x.specialCauseImprovementValue = _ ? x.value : null, x.specialCauseConcernValue = M ? x.value : null, n === Ue.Neither) {
        const w = x.singlePointUp || x.twoSigmaUp || x.shiftUp || x.trendUp, y = x.singlePointDown || x.twoSigmaDown || x.shiftDown || x.trendDown;
        x.variationIcon = w ? Me.NeitherHigh : y ? Me.NeitherLow : Me.CommonCause;
      } else
        Si(x, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
      u.push(x);
    }
  }
  if (s.trendAcrossPartitions) {
    const g = u.map((m, I) => ({ idx: I, r: m })).filter(({ r: m }) => !m.ghost && Fe(m.value));
    if (g.length >= s.trendPoints)
      for (let m = 0; m <= g.length - s.trendPoints; m++) {
        const I = g.slice(m, m + s.trendPoints).map((x) => x.idx), L = I.map((x) => u[x]);
        if (!L.every((x) => Fe(x.value))) continue;
        let $ = !0, N = !0;
        for (let x = 1; x < L.length && (L[x].value > L[x - 1].value || ($ = !1), L[x].value < L[x - 1].value || (N = !1), !(!$ && !N)); x++)
          ;
        $ && I.forEach((x) => u[x].trendUp = !0), N && I.forEach((x) => u[x].trendDown = !0);
      }
  }
  if (s.trendAcrossPartitions) {
    if (f) {
      const g = u.some(
        (m) => (m.singlePointUp || m.twoSigmaUp || m.shiftUp || m.trendUp) && (m.singlePointDown || m.twoSigmaDown || m.shiftDown || m.trendDown)
      );
      if (i === Rt.Always || i === Rt.AutoWhenConflict && g) {
        const m = _i(u), I = ki(m, { metricImprovement: n, strategy: s.trendSegmentationStrategy }), L = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set();
        for (const N of I)
          for (let x = N.start; x <= N.end; x++)
            N.trendDirection === xo.Up ? L.add(x) : $.add(x);
        u.forEach((N, x) => {
          N.trendUp = L.has(x) ? N.trendUp : !1, N.trendDown = $.has(x) ? N.trendDown : !1, s.trendDominatesHighlightedWindow && (L.has(x) ? (N.singlePointDown = !1, N.twoSigmaDown = !1, N.shiftDown = !1) : $.has(x) && (N.singlePointUp = !1, N.twoSigmaUp = !1, N.shiftUp = !1));
        });
      }
    }
    for (const g of u) {
      if (g.ghost || !Fe(g.value) || g.mean === null || n === Ue.Neither) continue;
      const { aligned: m, opposite: I } = wi(g, n);
      g.specialCauseImprovementValue = m ? g.value : null, g.specialCauseConcernValue = I ? g.value : null, Si(g, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
    }
  }
  return { rows: u };
}
function ss(e, t) {
  const n = fr(e), a = ur(n.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? Bn.Ungated,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), o = t?.boundaryWindows;
  if (!o || o.mode !== "RecalcCrossing") return { rows: n.rows, visuals: a };
  const s = o.directionOverride ?? e.metricImprovement, i = ig(n.rows, s, o), l = a.map((c, d) => {
    const u = i[d];
    if (c === at.Common || c === at.NoJudgement) {
      if (u === at.Improvement) return at.Improvement;
      if (u === at.Concern) return at.Concern;
    }
    return c;
  });
  return { rows: n.rows, visuals: l };
}
var nc = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(nc || {});
function lg(e, t, n) {
  const a = n?.trendVisualMode ?? Bn.Ungated, o = n?.enableNeutralNoJudgement ?? !0, s = Array.isArray(e.data) ? e.data.map((f, h) => f?.baseline ? h : -1).filter((f) => f >= 0) : [];
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
  const { rows: l, visuals: c } = ss(e, {
    trendVisualMode: a,
    enableNeutralNoJudgement: o,
    boundaryWindows: i
  });
  let d = c.slice(), u = s.length ? s[0] : -1;
  if (u < 0) {
    for (let f = 1; f < l.length; f++)
      if (l[f].partitionId !== l[f - 1].partitionId) {
        u = f;
        break;
      }
  }
  return (t === "recalculations-recalculated" || t === "baselines-recalculated") && u > 0 && (d[u - 1] = at.Common), { rows: l, visuals: d };
}
const rc = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: !1,
  metricConflictRule: An.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function cg(e) {
  return { ...rc, ...e ?? {} };
}
var ht = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(ht || {}), gn = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(gn || {}), sr = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(sr || {});
const bo = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === Ue.Up ? ft.HigherIsBetter : i.improvementDirection === Ue.Down ? ft.LowerIsBetter : ft.ContextDependent : i.polarity && (l = i.polarity);
    let c;
    const d = i.variationIcon;
    if (d === He.Improvement || d === He.Concern || d === He.Neither || d === He.Suppressed)
      d === He.Improvement ? c = Ie.SpecialCauseImproving : d === He.Concern ? c = Ie.SpecialCauseDeteriorating : d === He.Neither ? c = Ie.CommonCause : c = Ie.SpecialCauseNoJudgement;
    else
      switch (i.variationIcon) {
        case Me.ImprovementHigh:
        case Me.ImprovementLow:
          c = Ie.SpecialCauseImproving;
          break;
        case Me.ConcernHigh:
        case Me.ConcernLow:
          c = Ie.SpecialCauseDeteriorating;
          break;
        case Me.NeitherHigh:
        case Me.NeitherLow:
          c = i.specialCauseNeutral ? Ie.SpecialCauseNoJudgement : Ie.CommonCause;
          break;
        case Me.CommonCause:
          c = Ie.CommonCause;
          break;
        default:
          c = Ie.SpecialCauseNoJudgement;
          break;
      }
    let u = i.trend;
    return u || (c === Ie.SpecialCauseImproving ? u = l === ft.LowerIsBetter ? Pe.Lower : Pe.Higher : c === Ie.SpecialCauseDeteriorating ? u = l === ft.LowerIsBetter ? Pe.Higher : Pe.Lower : c === Ie.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? u = Pe.Higher : i.lowSideSignal && !i.highSideSignal ? u = Pe.Lower : u = Pe.Higher : u = Pe.Higher), { state: c, direction: u, polarity: l ?? ft.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Ie.SpecialCauseImproving || i.state === Ie.SpecialCauseDeteriorating) && i.polarity && (i.state === Ie.SpecialCauseImproving ? l = i.polarity === ft.LowerIsBetter ? Pe.Lower : Pe.Higher : l = i.polarity === ft.LowerIsBetter ? Pe.Higher : Pe.Lower), l || (i.state === Ie.SpecialCauseImproving ? l = Pe.Higher : i.state === Ie.SpecialCauseDeteriorating ? l = Pe.Lower : l = Pe.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? ft.ContextDependent
    };
  }
  const n = e;
  t();
  const o = {
    [_t.Improving]: Ie.SpecialCauseImproving,
    [_t.Deteriorating]: Ie.SpecialCauseDeteriorating,
    [_t.No_Judgement]: Ie.SpecialCauseNoJudgement,
    [_t.None]: Ie.CommonCause
  }[n.judgement];
  let s;
  return n.judgement === _t.Improving ? s = n.polarity === ft.LowerIsBetter ? Pe.Lower : Pe.Higher : n.judgement === _t.Deteriorating ? s = n.polarity === ft.LowerIsBetter ? Pe.Higher : Pe.Lower : s = n.trend ?? Pe.Higher, { state: o, direction: s, polarity: n.polarity };
};
function ac(e, t) {
  const { state: n, direction: a, polarity: o } = bo(e), s = os(n), i = a === Pe.Higher ? "above" : "below", l = a === Pe.Higher ? "upwards" : "downwards", c = (() => {
    switch (o) {
      case ft.HigherIsBetter:
        return "For this measure, higher values are better.";
      case ft.LowerIsBetter:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  return [
    (() => {
      switch (s) {
        case _t.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case _t.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case _t.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case _t.None:
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
const Ka = (e, t, n, a, o, s) => /* @__PURE__ */ r.jsxs("defs", { children: [
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
] }), is = ({
  data: e,
  precomputed: t,
  improvementDirection: n,
  size: a = 44,
  ariaLabel: o,
  showLetter: s = !0,
  dropShadow: i = !0,
  gradientWash: l = !1,
  variant: c = gn.Classic,
  runLength: d = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: u = sr.Polarity,
  letterOverride: f,
  ...h
}) => {
  const p = Nr(), b = Nr(), {
    start: g,
    mid: m,
    end: I,
    triStart: L,
    triMid: $,
    triEnd: N
  } = ja(), { state: x, direction: _, polarity: M, ariaInput: w } = Ae(() => {
    if (t && t.lastVariationIcon !== void 0) {
      const ee = {
        variationIcon: t.lastVariationIcon,
        improvementDirection: n ?? Ue.Neither,
        // Infer neutral special-cause when VariationState was mapped as Neither from engine NeitherHigh/Low
        specialCauseNeutral: t.latestState === Ie.SpecialCauseNoJudgement
        // Side hints not strictly needed for improvement/concern, only for neutral arrow orientation
      }, { state: R, direction: ne, polarity: te } = bo(ee);
      return { state: R, direction: ne, polarity: te, ariaInput: ee };
    }
    const { state: O, direction: W, polarity: B } = bo(e);
    return { state: O, direction: W, polarity: B, ariaInput: e };
  }, [e, t, n]), y = Ae(() => Jl(x), [x]), v = Ae(() => os(x), [x]), j = v === _t.Improving || v === _t.Deteriorating;
  let T = "";
  s && j && (u === sr.Polarity ? M === ft.HigherIsBetter ? T = "H" : M === ft.LowerIsBetter ? T = "L" : T = "" : T = _ === Pe.Higher ? "H" : "L"), f !== void 0 && (T = f);
  const P = x !== Ie.CommonCause, k = x === Ie.SpecialCauseNoJudgement, S = yt("common-cause", "#A6A6A6"), E = P ? y.hex : S, F = Ae(
    () => Jm(x, _),
    [x, _]
  ), z = o || `${y.label}${T ? _ === Pe.Higher ? " – Higher" : " – Lower" : ""}`, J = ac(w);
  if (c === gn.TriangleWithRun) {
    const ee = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], R = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let ne = null;
    x === Ie.SpecialCauseImproving || x === Ie.SpecialCauseDeteriorating ? ne = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (_ === Pe.Higher ? ee : R).map((ue) => ue.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 6,
        transform: _ === Pe.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : x === Ie.SpecialCauseNoJudgement && (ne = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: _ === Pe.Higher ? ee.map((ue) => ue.join(",")).join(" ") : R.map((ue) => ue.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 6,
        transform: _ === Pe.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const te = Math.max(0, Math.min(5, Math.floor(d || 0))), Z = x === Ie.CommonCause ? 160 : _ === Pe.Higher ? 220 : 70, X = 10, re = 26, de = 150 - 2 * re, Y = x === Ie.CommonCause ? S : Ql(x), le = Array.from({ length: 5 }).map((ue, he) => {
      const _e = (x === Ie.SpecialCauseImproving || x === Ie.SpecialCauseDeteriorating) && he >= 5 - te ? Y : S;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: de + he * re,
          cy: Z,
          r: X,
          fill: _e,
          stroke: _e,
          strokeWidth: 1
        },
        he
      );
    }), se = Ka(
      y.hex,
      p,
      b,
      i,
      l,
      [
        { offset: "0%", opacity: L },
        { offset: "75%", opacity: $ },
        { offset: "100%", opacity: N }
      ]
    ), fe = x === Ie.CommonCause || _ === Pe.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: a,
        height: a,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": z,
        "aria-description": J,
        ...h,
        children: [
          se,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: l ? `url(#${b})` : "#ffffff",
              ...i ? { filter: `url(#${p})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: y.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsxs("g", { transform: fe, children: [
            ne,
            T && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: _ === Pe.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: T
              }
            ),
            le
          ] })
        ]
      }
    );
  }
  if (c === gn.Triangle) {
    const ee = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], R = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], ne = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let te = null;
    x === Ie.SpecialCauseImproving || x === Ie.SpecialCauseDeteriorating ? te = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (_ === Pe.Higher ? ee : R).map((X) => X.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 8,
        transform: _ === Pe.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : x === Ie.SpecialCauseNoJudgement ? te = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: _ === Pe.Higher ? ee.map((X) => X.join(",")).join(" ") : R.map((X) => X.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 8,
        transform: _ === Pe.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : x === Ie.CommonCause && (te = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: ne[0][0],
        y1: ne[0][1],
        x2: ne[1][0],
        y2: ne[1][1],
        stroke: y.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const Z = Ka(
      y.hex,
      p,
      b,
      i,
      l,
      [
        { offset: "0%", opacity: L },
        { offset: "65%", opacity: $ },
        { offset: "100%", opacity: N }
      ]
    );
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: a,
        height: a,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": z,
        "aria-description": J,
        ...h,
        children: [
          Z,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: l ? `url(#${b})` : "#ffffff",
              ...i ? { filter: `url(#${p})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: y.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          te,
          T && (x === Ie.SpecialCauseImproving || x === Ie.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: _ === Pe.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: T
            }
          )
        ]
      }
    );
  }
  const H = Ka(
    y.hex,
    p,
    b,
    i,
    l,
    [
      { offset: "0%", opacity: g },
      { offset: "65%", opacity: m },
      { offset: "100%", opacity: I }
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: a,
      height: a,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": z,
      "aria-description": J,
      ...h,
      children: [
        H,
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: l ? `url(#${b})` : "#ffffff",
            ...i ? { filter: `url(#${p})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: y.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        T && /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: y.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: _ === Pe.Lower ? "340" : "155", children: T })
          }
        ),
        k ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: y.hex,
            ..._ === Pe.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          F.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: S,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${F.map((O) => `${O.cx} ${O.cy}`).join(" L ")}`
            }
          ),
          F.map((O, W) => {
            const ee = W >= F.length - 2 && P ? E : S, R = ee;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: R,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: ee,
                cx: O.cx,
                cy: O.cy,
                r: 16
              },
              W
            );
          })
        ] })
      ]
    }
  );
};
is.displayName = "SPCVariationIcon";
const dg = {
  [ut.Xs]: { height: 24, pointR: 2, stroke: 1 },
  [ut.Sm]: { height: 32, pointR: 3, stroke: 1 },
  [ut.Md]: { height: 44, pointR: 4, stroke: 1 },
  [ut.Lg]: { height: 56, pointR: 5, stroke: 1 },
  [ut.Xl]: { height: 72, pointR: 6, stroke: 1 },
  // Full: maintain aspect ratio at container width with smaller point radius for precision
  [ut.Full]: { height: 44, pointR: 2, stroke: 1 }
};
function ug(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function fg(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const n = t.reduce((i, l) => i + l.value, 0) / t.length, a = [...e].reverse().findIndex((i) => i.value != null), o = a >= 0 ? e.length - 1 - a : null, s = o != null ? e[o].value : null;
  return { mean: n, latestValue: s, latestIndex: o };
}
const hg = (e) => Ql(e), oc = ({
  data: e,
  windowSize: t,
  minPointsForSignals: n = 13,
  showMean: a = !0,
  showLimits: o = !0,
  showLimitBand: s = !0,
  showInnerBands: i = !1,
  showLatestMarker: l = !0,
  showStateGlyph: c = !0,
  variationState: d,
  metricImprovement: u,
  gradientWash: f = !1,
  size: h = ut.Sm,
  ariaLabel: p,
  className: b,
  onPointClick: g,
  maxPoints: m,
  thinningStrategy: I = "stride",
  colorPointsBySignal: L = !0,
  centerLine: $,
  controlLimits: N,
  sigmaBands: x,
  pointSignals: _,
  pointNeutralSpecialCause: M,
  visualCategories: w
}) => {
  const y = u, v = Ae(
    () => ug(e, t),
    [e, t]
  ), j = Ae(() => fg(v), [v]), T = (() => {
    if (typeof h == "string")
      switch (h) {
        case "xs":
          return ut.Xs;
        case "sm":
          return ut.Sm;
        case "md":
          return ut.Md;
        case "lg":
          return ut.Lg;
        case "xl":
          return ut.Xl;
        case "full":
          return ut.Full;
        default:
          return ut.Sm;
      }
    return h ?? ut.Sm;
  })(), P = dg[T], k = Math.max(v.length * 6, 60), S = k, E = T === ut.Full ? "100%" : k, F = P.height, z = Ae(() => {
    if (T === ut.Full)
      return {
        width: "100%",
        height: "auto",
        // Maintain the internal viewBox aspect ratio as the element scales with container width
        aspectRatio: `${S} / ${F}`,
        display: "block"
      };
  }, [T, S, F]), J = Math.max(6, P.pointR + 3), H = Math.max(4, P.pointR + 3), O = Ae(() => (e?.length ?? 0) - (v?.length ?? 0), [e?.length, v?.length]), W = $ ?? j.mean ?? null, B = Ae(() => {
    if (!o) return null;
    if (N) return N;
    const ge = v.filter((V) => typeof V.value == "number");
    if (!ge.length || W == null) return null;
    const C = ge.map((V) => V.value), D = Math.min(...C), G = Math.max(...C);
    return { lower: D, upper: G };
  }, [o, N?.lower, N?.upper, v, W]), R = Ae(() => ({
    state: d ?? Ie.CommonCause,
    firedRules: [],
    mean: W ?? null,
    stdDev: null,
    side: j.latestValue != null && W != null ? j.latestValue > W ? "above" : "below" : void 0
  }), [d, W, j.latestValue]).state, ne = hg(R), te = (ge) => {
    const C = v.filter((Q) => Q.value != null);
    if (!C.length) return F / 2;
    const D = C.map((Q) => Q.value);
    B && (B.lower != null && D.push(B.lower), B.upper != null && D.push(B.upper));
    const G = Math.min(...D), V = Math.max(...D);
    return G === V ? F / 2 : F - (ge - G) / (V - G) * (F - H * 2) - H;
  }, Z = Ae(() => {
    if (!m || v.length <= m)
      return v.map((A, U) => U);
    if (I === "stride") {
      const A = Math.max(2, m), U = (v.length - 1) / (A - 1), oe = /* @__PURE__ */ new Set();
      for (let K = 0; K < A; K++) oe.add(Math.round(K * U));
      return oe.add(v.length - 1), Array.from(oe).sort((K, ae) => K - ae);
    }
    const ge = v.map((A, U) => ({ i: U, v: A.value }));
    function C(A, U, oe) {
      const K = A.i, ae = A.v ?? 0, ce = U.i, pe = U.v ?? 0, ye = oe.i, Te = oe.v ?? 0, Re = Math.abs((Te - pe) * K - (ye - ce) * ae + ye * pe - Te * ce), be = Math.hypot(Te - pe, ye - ce);
      return be === 0 ? 0 : Re / be;
    }
    function D(A, U) {
      if (A.length <= 2) return A;
      let oe = -1, K = -1;
      for (let ae = 1; ae < A.length - 1; ae++) {
        const ce = C(A[ae], A[0], A[A.length - 1]);
        ce > oe && (oe = ce, K = ae);
      }
      if (oe > U) {
        const ae = D(A.slice(0, K + 1), U), ce = D(A.slice(K), U);
        return [...ae.slice(0, -1), ...ce];
      }
      return [A[0], A[A.length - 1]];
    }
    let G = 0.1, V = ge;
    for (let A = 0; A < 8 && (V = D(ge, G), !(V.length <= m)); A++)
      G *= 1.6;
    const Q = new Set(V.map((A) => A.i));
    return Q.add(0), Q.add(v.length - 1), Array.from(Q).sort((A, U) => A - U);
  }, [v, m, I]), X = Ae(
    () => Z.map((ge) => v[ge]),
    [Z, v]
  ), re = Ae(() => Math.max(1, S - J * 2), [S, J]), de = Ae(() => {
    const ge = Math.max(1, X.length - 1);
    return (C) => C / ge * re + J;
  }, [X.length, re, J]), Y = Ae(() => {
    let ge = "";
    return X.forEach((C, D) => {
      if (C.value == null) return;
      const G = te(C.value), V = de(D);
      ge += ge ? ` L ${V} ${G}` : `M ${V} ${G}`;
    }), ge;
  }, [X, de]), le = j.latestIndex ?? -1, se = B, fe = ja(), ue = Ae(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [v.length, f]
  ), he = v.length >= (n || 0), Ee = p || "SPC sparkline", _e = (() => {
    if (!R) return;
    const ge = y === Ue.Up ? ft.HigherIsBetter : y === Ue.Down ? ft.LowerIsBetter : ft.ContextDependent, C = {
      variationIcon: R === Ie.SpecialCauseImproving ? He.Improvement : R === Ie.SpecialCauseDeteriorating ? He.Concern : R === Ie.SpecialCauseNoJudgement ? He.Suppressed : He.Neither,
      trend: y === Ue.Up ? Pe.Higher : Pe.Lower,
      polarity: ge
    };
    try {
      return ac(C);
    } catch {
      return;
    }
  })(), Ne = Ae(() => {
    if (!he) return 10;
    const ge = [...v].reverse().filter((D) => D.value != null).slice(0, 6).map((D) => te(D.value));
    return ge.length && ge.reduce((D, G) => D + G, 0) / ge.length < F / 2 ? F : 10;
  }, [v, he, F]);
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": Ee,
      "aria-description": _e,
      width: T === ut.Full ? void 0 : E,
      height: T === ut.Full ? void 0 : F,
      style: z,
      className: b,
      viewBox: `0 0 ${S} ${F}`,
      children: [
        f && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: ue, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: ne,
                stopOpacity: Number(fe.start)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: ne,
                stopOpacity: Number(fe.mid)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: ne,
                stopOpacity: Number(fe.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: S,
              height: F,
              fill: `url(#${ue})`
            }
          )
        ] }),
        se && se.lower != null && se.upper != null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          s && /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                te(se.upper),
                te(se.lower)
              ),
              width: S,
              height: Math.abs(
                te(se.upper) - te(se.lower)
              ),
              fill: ne,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: S,
              y1: te(se.lower),
              y2: te(se.lower),
              stroke: ne,
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
              y1: te(se.upper),
              y2: te(se.upper),
              stroke: ne,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          x && i && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            x.lowerTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: S,
                y1: te(x.lowerTwo),
                y2: te(x.lowerTwo),
                stroke: ne,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            x.lowerOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: S,
                y1: te(x.lowerOne),
                y2: te(x.lowerOne),
                stroke: ne,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            x.upperOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: S,
                y1: te(x.upperOne),
                y2: te(x.upperOne),
                stroke: ne,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            x.upperTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: S,
                y1: te(x.upperTwo),
                y2: te(x.upperTwo),
                stroke: ne,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        a && W != null && /* @__PURE__ */ r.jsx(
          "line",
          {
            x1: 0,
            x2: S,
            y1: te(W),
            y2: te(W),
            stroke: un(),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: Y,
            fill: "none",
            stroke: un(),
            strokeWidth: P.stroke,
            strokeLinecap: "round"
          }
        ),
        Z.map((ge, C) => {
          const D = v[ge];
          if (!D || D.value == null) return null;
          const G = te(D.value), V = de(C), A = (ge === le && l ? P.pointR + 1 : P.pointR) - 0.5;
          let U = un();
          if (L) {
            const oe = w?.[O + ge];
            if (oe != null)
              oe === at.Improvement ? U = wr(He.Improvement) : oe === at.Concern ? U = wr(He.Concern) : oe === at.NoJudgement ? U = yt("no-judgement", "#490092") : U = un();
            else {
              const K = _?.[O + ge];
              K === He.Improvement || K === He.Concern ? U = wr(K) : U = M?.[O + ge] ? yt("no-judgement", "#490092") : un();
            }
          }
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: V,
              cy: G,
              r: A,
              fill: U,
              stroke: "none",
              strokeWidth: 0,
              onClick: g ? () => g(ge, D) : void 0,
              style: g ? { cursor: "pointer" } : void 0,
              "data-index": ge,
              "data-signal-colour": L ? U : void 0
            },
            ge
          );
        }),
        c && he && R && R !== Ie.CommonCause && y && /* @__PURE__ */ r.jsx(
          "text",
          {
            x: S - 4,
            y: Ne,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: ne,
            "data-glyph-pos": Ne < F / 2 ? "top" : "bottom",
            children: y === Ue.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
oc.displayName = "SPCSpark";
function Yr(e) {
  switch (e) {
    case Me.ImprovementHigh:
    case Me.ImprovementLow:
      return Ie.SpecialCauseImproving;
    case Me.ConcernHigh:
    case Me.ConcernLow:
      return Ie.SpecialCauseDeteriorating;
    case Me.NeitherHigh:
    case Me.NeitherLow:
      return Ie.SpecialCauseNoJudgement;
    case Me.CommonCause:
      return Ie.CommonCause;
    default:
      return null;
  }
}
function sc(e) {
  return e === Me.ImprovementHigh || e === Me.ImprovementLow || e === Me.ConcernHigh || e === Me.ConcernLow || e === Me.NeitherHigh || e === Me.NeitherLow;
}
function pg({
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
      error: e.filter((f) => f.severity === At.Error).length,
      warning: e.filter((f) => f.severity === At.Warning).length,
      info: e.filter((f) => f.severity === At.Info).length
    }, d = [];
    c.error && d.push(`${c.error} error${c.error === 1 ? "" : "s"}`), c.warning && d.push(`${c.warning} warning${c.warning === 1 ? "" : "s"}`), c.info && d.push(`${c.info} info`);
    const u = `Diagnostics updated: ${l} warning${l === 1 ? "" : "s"} (${d.join(", ")}).`;
    u !== i.current && (i.current = u, s(u));
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
        en,
        {
          firstCellIsHeader: !1,
          panel: !1,
          responsive: !1,
          head: [{ text: "Severity" }, { text: "Category" }, { text: "Code" }, { text: "Details" }],
          rows: e.map((l) => {
            let c = "grey";
            return l.severity === At.Error ? c = "red" : l.severity === At.Warning ? c = "orange" : l.severity === At.Info && (c = "blue"), [
              {
                node: /* @__PURE__ */ r.jsx(nt, { color: c, text: (l.severity ? String(l.severity) : "Info").replace(/^[a-z]/, (d) => d.toUpperCase()) }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
              },
              {
                node: l.category ? /* @__PURE__ */ r.jsx(nt, { color: "purple", text: n(l.category) }) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
              },
              {
                node: /* @__PURE__ */ r.jsx(nt, { color: "grey", text: a(l.code) }),
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
function mg({
  variationNode: e,
  assuranceNode: t,
  show: n
}) {
  return n ? /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: [
    e,
    t
  ] }) : null;
}
const ls = ({
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
  const d = Nr(), u = Nr(), { start: f, mid: h, end: p } = ja(), b = o || Vm[e], g = (i || Zm[e]).slice(0, 2), m = n || `Assurance ${e}`;
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": m,
      ...c,
      children: [
        /* @__PURE__ */ r.jsxs("defs", { children: [
          a && /* @__PURE__ */ r.jsxs("filter", { id: d, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ r.jsx("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ r.jsx("feOffset", { dx: "-1", dy: "15", result: "blur" }),
            /* @__PURE__ */ r.jsx("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }),
            /* @__PURE__ */ r.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ r.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          s && /* @__PURE__ */ r.jsxs("linearGradient", { id: u, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: b, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: b, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(p) })
          ] })
        ] }),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: s ? `url(#${u})` : "#ffffff",
            ...a ? { filter: `url(#${d})` } : {},
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
          e === pn.Fail ? /* @__PURE__ */ r.jsx(
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
          ) : e === pn.Uncertain ? /* @__PURE__ */ r.jsx(
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
ls.displayName = "SPCAssuranceIcon";
const gg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: pn,
  Direction: Pe,
  MetricPolarity: ft,
  SPCAssuranceIcon: ls,
  SPCVariationIcon: is,
  VariationJudgement: _t,
  VariationState: Ie,
  getVariationColour: Jl,
  getVariationTrend: os
}, Symbol.toStringTag, { value: "Module" }));
function xg(e) {
  const { show: t, rowsForUi: n, minPoints: a, metricImprovement: o, variant: s, runLength: i } = e;
  if (!t || !n?.length) return null;
  const l = n, c = typeof a == "number" && !isNaN(a) ? a : 13;
  if (l.filter(
    (x) => !x.data.ghost && x.data.value != null
  ).length < c) return null;
  let u = -1;
  for (let x = l.length - 1; x >= 0; x--) {
    const _ = l[x];
    if (_ && _.data.value != null && !_.data.ghost) {
      u = x;
      break;
    }
  }
  if (u === -1) return null;
  const f = l[u], h = f.classification?.variation, p = f.classification?.assurance, b = h === He.Neither && !!f.classification?.neutralSpecialCauseValue, g = p === ln.Pass ? pn.Pass : p === ln.Fail ? pn.Fail : pn.Uncertain;
  let m;
  if (h === He.Suppressed) {
    const x = !!f.rules.singlePoint.up, _ = !!f.rules.singlePoint.down;
    o === sn.Up ? x ? m = Pe.Higher : _ && (m = Pe.Lower) : o === sn.Down ? _ ? m = Pe.Lower : x && (m = Pe.Higher) : m = Pe.Higher;
  } else if (h === He.Neither && b) {
    const x = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, _ = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
    x && !_ ? m = Pe.Higher : _ && !x ? m = Pe.Lower : m = Pe.Higher;
  }
  const I = 80, L = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, $ = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
  let N = Me.CommonCause;
  return h === He.Improvement ? N = Me.ImprovementHigh : h === He.Concern ? N = Me.ConcernHigh : h === He.Neither && (b ? m === Pe.Lower || $ && !L ? N = Me.NeitherLow : N = Me.NeitherHigh : N = Me.CommonCause), /* @__PURE__ */ r.jsxs(
    "div",
    {
      style: { display: "flex", gap: 12, marginRight: 16 },
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-icon",
            "data-variation": String(h),
            "data-trend": m ? String(m) : "none",
            style: { width: I, height: I },
            children: /* @__PURE__ */ r.jsx(
              is,
              {
                dropShadow: !1,
                data: {
                  variationIcon: N,
                  improvementDirection: o,
                  specialCauseNeutral: b,
                  highSideSignal: L,
                  lowSideSignal: $,
                  ...m ? { trend: m } : {}
                },
                letterMode: o === sn.Neither ? sr.Direction : sr.Polarity,
                size: I,
                variant: s,
                runLength: s === gn.TriangleWithRun ? i : void 0
              }
            )
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-assurance-icon",
            "data-assurance": String(p),
            style: { width: I, height: I },
            children: /* @__PURE__ */ r.jsx(
              ls,
              {
                status: g,
                size: I,
                dropShadow: !1
              }
            )
          }
        )
      ]
    },
    `embedded-icon-${u}`
  );
}
const ic = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: o,
  dateFormatter: s,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const c = tn(), d = cn(), [u, f] = q.useState(null), [h, p] = q.useState(!1), b = q.useRef(null);
  q.useEffect(() => {
    if (c) {
      if (c.focused && (f(c.focused), b.current && (cancelAnimationFrame(b.current), b.current = null)), !c.focused && !h) {
        const Ne = requestAnimationFrame(() => {
          f(null), b.current = null;
        });
        b.current = Ne;
      }
      return () => {
        b.current && (cancelAnimationFrame(b.current), b.current = null);
      };
    }
  }, [c, c?.focused, h]);
  const g = c && (c.focused || (h ? u : null) || u), [m, I] = q.useState(!1);
  q.useEffect(() => {
    const Ne = requestAnimationFrame(() => I(!0));
    return () => cancelAnimationFrame(Ne);
  }, [g?.index]);
  const L = d?.innerWidth ?? 0, $ = d?.innerHeight ?? 0, N = g ? Math.min(Math.max(g.clientX, 0), L) : 0, x = g ? Math.min(Math.max(g.clientY, 0), $) : 0, _ = d?.ref?.current || void 0;
  if (!g)
    return null;
  const M = e?.[g.index], y = ka(
    M ? {
      specialCauseSinglePointUp: !!M.rules.singlePoint.up,
      specialCauseSinglePointDown: !!M.rules.singlePoint.down,
      specialCauseTwoOfThreeUp: !!M.rules.twoOfThree.up,
      specialCauseTwoOfThreeDown: !!M.rules.twoOfThree.down,
      specialCauseFourOfFiveUp: !!M.rules.fourOfFive.up,
      specialCauseFourOfFiveDown: !!M.rules.fourOfFive.down,
      specialCauseShiftUp: !!M.rules.shift.up,
      specialCauseShiftDown: !!M.rules.shift.down,
      specialCauseTrendUp: !!M.rules.trend.up,
      specialCauseTrendDown: !!M.rules.trend.down
    } : null
  ).map((Ne) => ({ id: Ne, label: $n[Ne].tooltip })), v = g.x instanceof Date ? g.x : new Date(g.x), j = s ? s(v) : v.toDateString(), T = o ? `${o}` : "", P = a || T ? `${g.y}${T ? "" + T : " "}${a ? " " + a : ""}` : `${g.y}`, k = Ca(M?.classification?.variation), S = Zl(M?.classification?.assurance), E = Gm(
    t.mean ?? null,
    t.sigma,
    g.y
  ), F = n ? n(g.index, { x: g.x, y: g.y }) : void 0, z = k || S || E, J = M?.rules.trend.up || M?.rules.trend.down, H = M?.classification?.variation === He.Neither && J, O = l && H ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, W = y.length > 0, B = M && "primeDirection" in M ? M.primeDirection : void 0, ee = M && "primeRuleId" in M ? M.primeRuleId : void 0, R = i && M?.classification?.variation === He.Neither && W, ne = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", te = ql(M?.classification?.variation), Z = 6.2, re = [
    F || "",
    `${j} • ${P}`
  ].filter(Boolean).reduce(
    (Ne, ge) => Math.max(Ne, ge.length * Z + 32),
    0
  ), de = 200, Y = 440, le = Math.min(Y, Math.max(de, re));
  let se = N + 12, ue = (d.margin?.top ?? 0) + x + 16;
  se + le > L && (se = N - -60 - le), se < 0 && (se = Math.max(0, L - le));
  const he = g ? `spc-tooltip-${g.index}` : "spc-tooltip", Ee = typeof g.index == "number" ? g.index : NaN, _e = _ ? ad(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: he,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (m ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: se,
          top: ue,
          width: le,
          maxWidth: Y,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": m ? "false" : "true",
        "data-floating": !0,
        "data-placement": se + le + 12 > L ? "left" : "right",
        onPointerEnter: () => {
          p(!0), b.current && (cancelAnimationFrame(b.current), b.current = null);
        },
        onPointerLeave: () => {
          if (p(!1), !c?.focused) {
            const Ne = requestAnimationFrame(() => {
              f(null), b.current = null;
            });
            b.current = Ne;
          }
        },
        children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--point", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Point" }) }),
            /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__primary-line", children: [
              "Index: ",
              Ee
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: j })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: P })
          ] }),
          z && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: k?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              nt,
              {
                text: k,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : k?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              nt,
              {
                text: k,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : R ? /* @__PURE__ */ r.jsx(
              nt,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : k ? /* @__PURE__ */ r.jsx(
              nt,
              {
                text: k,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          S && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const Ne = S.toLowerCase(), C = !(Ne.includes("not met") || Ne.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(Ne);
              return /* @__PURE__ */ r.jsx(
                nt,
                {
                  text: S,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${C ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${S}`
                }
              );
            })() })
          ] }),
          E && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              nt,
              {
                text: (() => {
                  const Ne = E.toLowerCase();
                  return Ne.startsWith("within 1") ? "≤1σ" : Ne.startsWith("1–2") ? "1–2σ" : Ne.startsWith("2–3") ? "2–3σ" : Ne.startsWith(">3") ? ">3σ" : E;
                })(),
                color: E.includes(">3") ? "orange" : E.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${E}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          O && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: O })
          ] }),
          W && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: y.map(({ id: Ne, label: ge }) => {
                  const C = String(Ne), G = C === or.TrendIncreasing || C === or.TrendDecreasing ? "fdp-spc-tag--trend" : R ? "fdp-spc-tag--no-judgement" : k ? k.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : k.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    nt,
                    {
                      text: ge,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${G}`,
                      "data-rule-id": C
                    },
                    C
                  );
                })
              }
            ),
            B && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const Ne = R ? "fdp-spc-tag--no-judgement" : k ? k.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : k.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", ge = `${B}${ee ? ` (${ee})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  nt,
                  {
                    text: ge,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${Ne}`,
                    "aria-label": `Prime direction ${B}${ee ? ` via ${ee}` : ""}`
                  }
                );
              })()
            ] })
          ] })
        ] })
      }
    ),
    _
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
            cx: N,
            cy: x,
            r: 7,
            fill: "none",
            stroke: ne,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: N,
            cy: x,
            r: 5,
            fill: "#000",
            stroke: ne,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: N,
            cy: x,
            r: 2.5,
            fill: te,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        _e
      ]
    }
  );
}, bg = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: a
}) => {
  const o = tn(), s = o?.focused ?? null, i = s?.index ?? null, l = typeof i == "number" && e ? e[i] : null, c = q.useMemo(
    () => l ? ka({
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
  ), d = q.useMemo(
    () => Array.from(
      new Set(c.map((g) => $n[g]?.narration).filter(Boolean))
    ),
    [c]
  ), u = l ? Ca(l.classification?.variation) : null, f = l ? Zl(l.classification?.assurance) : null, h = c.length > 0, p = l ? l.classification?.variation === He.Neither && h : !1, b = q.useRef(null);
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
          (u || p || f) && /* @__PURE__ */ r.jsx(
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
                    u?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
                      nt,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : u?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
                      nt,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : p ? /* @__PURE__ */ r.jsx(
                      nt,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : u ? /* @__PURE__ */ r.jsx(
                      nt,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const g = f.toLowerCase(), I = !(g.includes("not met") || g.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(g);
                      return /* @__PURE__ */ r.jsx(
                        nt,
                        {
                          text: f,
                          color: "default",
                          className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${I ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
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
                children: c.length === 0 ? /* @__PURE__ */ r.jsx("span", { children: " None" }) : c.map((g) => {
                  const m = String(g), L = m === or.TrendIncreasing || m === or.TrendDecreasing ? "fdp-spc-tag--trend" : p ? "fdp-spc-tag--no-judgement" : u ? u.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : u.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", $ = $n[g]?.tooltip || m;
                  return /* @__PURE__ */ r.jsx(
                    nt,
                    {
                      text: $,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${L}`,
                      "data-rule-id": m,
                      title: $n[g]?.tooltip
                    },
                    m
                  );
                })
              }
            )
          ] }),
          d.length > 0 && /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: "fdp-spc-inspector__narration",
              style: { marginTop: 8 },
              children: [
                /* @__PURE__ */ r.jsx("strong", { children: "Summary:" }),
                " ",
                d.join("; ")
              ]
            }
          )
        ] })
      ]
    }
  );
};
function yg(e, t = !0) {
  if (!e?.length) return [];
  const n = [...e];
  if (t) {
    for (let s = 1; s < n.length - 1; s++)
      n[s] === ht.Common && n[s - 1] === n[s + 1] && n[s - 1] !== ht.Common && (n[s] = n[s - 1]);
    let o = 0;
    for (; o < n.length; ) {
      const s = n[o];
      let i = o + 1;
      for (; i < n.length && n[i] === s; ) i++;
      i - o === 1 && s !== ht.Common && (n[o] = ht.Common), o = i;
    }
  }
  const a = [];
  if (n.length) {
    let o = 0;
    for (let s = 1; s <= n.length; s++)
      if (s === n.length || n[s] !== n[o]) {
        const i = n[o], l = s - 1, c = l - o + 1;
        (i === ht.Common || c >= 2) && a.push({ start: o, end: l, category: i }), o = s;
      }
  }
  return a;
}
var qn = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(qn || {}), lc = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(lc || {});
function vg(e) {
  const {
    ui: t,
    input: n,
    engine: a,
    container: o,
    a11y: s,
    visualsEngine: i,
    meta: l,
    data: c,
    ariaLabel: d,
    height: u,
    showZones: f,
    showPoints: h,
    announceFocus: p,
    className: b,
    unit: g,
    targets: m,
    baselines: I,
    ghosts: L,
    settings: $,
    chartType: N,
    metricImprovement: x,
    gradientSequences: _,
    sequenceTransition: M,
    processLineWidth: w,
    showPartitionMarkers: y,
    showWarningsPanel: v,
    warningsFilter: j,
    enableNeutralNoJudgement: T,
    showTrendGatingExplanation: P,
    trendVisualMode: k,
    alwaysShowZeroY: S,
    alwaysShowHundredY: E,
    percentScale: F,
    showTrendStartMarkers: z,
    showFirstFavourableCrossMarkers: J,
    showTrendBridgeOverlay: H,
    showSignalsInspector: O,
    onSignalFocus: W,
    showIcons: B,
    showEmbeddedIcon: ee,
    embeddedIconVariant: R,
    embeddedIconRunLength: ne,
    showFocusIndicator: te,
    visualsScenario: Z,
    visualsEngineSettings: X,
    source: re,
    narrationContext: de,
    highlightOutOfControl: Y,
    precomputed: le
  } = e;
  process.env.NODE_ENV !== "production" && (!n && (m !== void 0 || I !== void 0 || L !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={{ data, targets, baselines, ghosts }} instead."
  ), !a && $ !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={{ chartType, metricImprovement, settings }}."
  ), !o && (u !== void 0 || b !== void 0) && console.warn(
    "SPCChart: Consider grouped container props. Use container={{ height, className }}."
  ), !s && (d !== void 0 || p !== void 0 || de !== void 0 || g !== void 0) && console.warn(
    "SPCChart: Consider grouped accessibility props. Use a11y={{ label, announceFocus, narrationContext, unit }}."
  ), !i && (Z !== void 0 || X !== void 0) && console.warn(
    "SPCChart: Consider grouped visuals engine props. Use visualsEngine={{ scenario, settings }}."
  ), t?.visuals === void 0 && (f !== void 0 || h !== void 0) && console.warn(
    "SPCChart: Visual toggles should be grouped. Use ui={{ visuals: { showZones, showPoints } }}."
  ), t?.visuals?.rules === void 0 && Y !== void 0 && console.warn(
    "SPCChart: Prefer grouped rules toggle. Use ui={{ visuals: { rules: { highlightOutOfControl } } }}."
  ), !l && re !== void 0 && console.warn(
    "SPCChart: Consider grouped meta. Use meta={{ source }}."
  ));
  const se = n?.data ?? c ?? [], fe = n?.targets ?? m, ue = n?.baselines ?? I, he = n?.ghosts ?? L, Ee = a?.chartType ?? N ?? Gl.XmR, _e = a?.metricImprovement ?? x ?? sn.Neither, Ne = a?.settings ?? $, ge = a?.autoRecalc, C = t?.axes?.alwaysShowZeroY ?? S ?? !1, D = t?.axes?.alwaysShowHundredY ?? E ?? !1, G = t?.axes?.percentScale ?? F ?? !1, V = t?.visuals?.gradientSequences ?? _ ?? !0, Q = t?.visuals?.sequenceTransition ?? M ?? "slope", A = t?.visuals?.processLineWidth ?? w ?? 2, U = t?.visuals?.trend?.visualMode ?? k ?? "ungated", oe = t?.visuals?.trend?.showGatingExplanation ?? P ?? !0, K = t?.visuals?.rules?.enableNeutralNoJudgement ?? T ?? !0, ae = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, ce = t?.visuals?.showZones, pe = t?.visuals?.showPoints, ye = t?.visuals?.rules?.highlightOutOfControl, Te = o?.height, Re = o?.className, be = s?.label, Xe = s?.unit, tt = s?.narrationContext, ie = i?.scenario, je = i?.settings, xe = l?.source, ke = t?.overlays?.partitionMarkers ?? y ?? !1, Ye = t?.overlays?.trendStartMarkers ?? z ?? !1, Be = t?.overlays?.firstFavourableCrossMarkers ?? J ?? !1, Ve = t?.overlays?.trendBridge ?? H ?? !1, Ge = t?.inspector?.show ?? O ?? !1, rt = t?.inspector?.onFocus ?? W, Ce = t?.warnings?.show ?? v ?? !1, Le = t?.warnings?.filter ?? j, Se = t?.icons?.show ?? B ?? !1, qe = t?.icons?.embedded?.show ?? ee ?? !0, lt = t?.icons?.embedded?.variant ?? R ?? gn.Classic, jt = t?.icons?.embedded?.runLength ?? ne, De = t?.overlays?.focusIndicator ?? te ?? !0;
  return {
    effData: se,
    effTargets: fe,
    effBaselines: ue,
    effGhosts: he,
    effChartTypeCore: Ee,
    effMetricImprovementCore: _e,
    effEngineSettings: Ne,
    effEngineAutoRecalc: ge,
    effHeight: Te,
    effClassName: Re,
    effAriaLabel: be,
    effUnit: Xe,
    effNarrationContext: tt,
    effShowZones: ce,
    effShowPoints: pe,
    effHighlightOutOfControl: ye,
    effVisualsScenario: ie,
    effVisualsEngineSettings: je,
    effPrecomputedVisuals: le,
    effSource: xe,
    effAlwaysShowZeroY: C,
    effAlwaysShowHundredY: D,
    effPercentScale: G,
    effGradientSequences: V,
    effSequenceTransition: Q,
    effProcessLineWidth: A,
    effTrendVisualMode: U,
    effShowTrendGatingExplanation: oe,
    effEnableNeutralNoJudgement: K,
    effEnableRules: ae,
    effShowPartitionMarkers: ke,
    effShowTrendStartMarkers: Ye,
    effShowFirstFavourableCrossMarkers: Be,
    effShowTrendBridgeOverlay: Ve,
    effShowSignalsInspector: Ge,
    effOnSignalFocus: rt,
    effShowWarningsPanel: Ce,
    effWarningsFilter: Le,
    effShowIcons: Se,
    effShowEmbeddedIcon: qe,
    effEmbeddedIconVariant: lt,
    effEmbeddedIconRunLength: jt,
    effShowFocusIndicator: De
  };
}
let wg = 0;
const Sg = ({ data: e, targets: t, visuals: n, a11y: a, axis: o, compute: s }) => {
  const {
    series: i,
    engineRows: l,
    visualCategories: c,
    partitionMarkers: d
  } = e, { limits: u, uniformTarget: f } = t, {
    showPoints: h,
    showZones: p,
    highlightOutOfControl: b,
    gradientSequences: g,
    sequenceTransition: m,
    processLineWidth: I,
    showFocusIndicator: L = !1,
    enableRules: $,
    enableNeutralNoJudgement: N = !0,
    showTrendStartMarkers: x = !1,
    showFirstFavourableCrossMarkers: _ = !1,
    showTrendBridgeOverlay: M = !1
  } = n, {
    announceFocus: w,
    ariaLabel: y,
    narrationContext: v,
    showSignalsInspector: j = !1,
    onSignalFocus: T,
    showTrendGatingExplanation: P = !0
  } = a, { zeroBreakSlotGapPx: k } = o, { metricImprovement: S, effectiveUnit: E } = s, F = Sn(), z = cn();
  if (!F) return null;
  const { xScale: J, yScale: H } = F, O = q.useRef(
    "spc-seq-" + ++wg
  ), W = tn(), B = i[0]?.data || [], ee = q.useMemo(() => {
    if (!u.ucl && !u.lcl) return /* @__PURE__ */ new Set();
    const C = /* @__PURE__ */ new Set();
    return B.forEach((D, G) => {
      typeof u.ucl == "number" && D.y > u.ucl && C.add(G), typeof u.lcl == "number" && D.y < u.lcl && C.add(G);
    }), C;
  }, [u.ucl, u.lcl, B]), R = q.useMemo(() => {
    if (!l || !l.length) return null;
    const C = [];
    return l.forEach((D, G) => {
      const V = D.classification.variation === He.Concern || D.classification.variation === He.Improvement || !!D.classification.neutralSpecialCauseValue, Q = !!D.rules.singlePoint.up || !!D.rules.twoOfThree.up || !!D.rules.fourOfFive.up || !!D.rules.shift.up || !!D.rules.trend.up, A = !!D.rules.singlePoint.down || !!D.rules.twoOfThree.down || !!D.rules.fourOfFive.down || !!D.rules.shift.down || !!D.rules.trend.down;
      C[G] = {
        variation: D.classification.variation,
        assurance: D.classification.assurance,
        special: V,
        concern: D.classification.variation === He.Concern,
        improvement: D.classification.variation === He.Improvement,
        trendUp: !!D.rules.trend.up,
        trendDown: !!D.rules.trend.down,
        upAny: Q,
        downAny: A,
        neutralSpecial: !!D.classification.neutralSpecialCauseValue,
        shiftUp: !!D.rules.shift.up,
        shiftDown: !!D.rules.shift.down,
        twoOfThreeUp: !!D.rules.twoOfThree.up,
        twoOfThreeDown: !!D.rules.twoOfThree.down,
        fourOfFiveUp: !!D.rules.fourOfFive.up,
        fourOfFiveDown: !!D.rules.fourOfFive.down,
        partitionId: D.partition.id ?? null
      };
    }), C;
  }, [l]), ne = q.useMemo(() => (c || []).map((C) => C === at.Improvement ? ht.Improvement : C === at.Concern ? ht.Concern : C === at.NoJudgement ? ht.NoJudgement : ht.Common), [c]), te = q.useMemo(() => !g || !ne.length ? [] : yg(ne, !0), [g, ne, y]), Z = q.useMemo(
    () => B.map((C) => J(C.x instanceof Date ? C.x : new Date(C.x))),
    [B, J]
  ), X = J.range()[1], re = J.range()[0], de = q.useMemo(() => {
    if (!l || !l.length)
      return null;
    let C = Number.POSITIVE_INFINITY, D = Number.POSITIVE_INFINITY;
    if (l.forEach((K, ae) => {
      K.rules.trend.up && (C = Math.min(C, ae)), K.rules.trend.down && (D = Math.min(D, ae));
    }), !Number.isFinite(C) && !Number.isFinite(D))
      return null;
    const G = C <= D, V = G ? $t.Up : $t.Down, Q = G ? C : D, A = (K) => S == null || S === sn.Neither || K == null || typeof K.data.value != "number" || typeof K.limits.mean != "number" ? !1 : V === $t.Up ? S === sn.Up ? K.data.value > K.limits.mean : K.data.value < K.limits.mean : S === sn.Down ? K.data.value < K.limits.mean : K.data.value > K.limits.mean;
    let U = null;
    for (let K = Q; K < l.length; K++) {
      const ae = l[K];
      if (!(G ? !!ae.rules.trend.up : !!ae.rules.trend.down)) break;
      if (A(ae)) {
        U = K;
        break;
      }
    }
    let oe = !1;
    if (U != null) {
      let K = 0;
      for (let ae = U; ae < l.length; ae++) {
        const ce = l[ae];
        if (!(G ? !!ce.rules.trend.up : !!ce.rules.trend.down)) break;
        A(ce) && K++;
      }
      oe = K >= 2;
    }
    return {
      direction: V,
      detectedAt: Q,
      firstFavourableCrossAt: U,
      persistedAcrossMean: oe
    };
  }, [l, S]), Y = q.useMemo(() => {
    if (!l || !l.length) return null;
    const C = (D) => {
      const G = [];
      let V = null, Q = null;
      for (let A = 0; A < l.length; A++) {
        const U = l[A], oe = D(U), K = typeof oe == "number" && !isNaN(oe) ? oe : null;
        if (K == null) {
          V !== null && Q != null && (G.push({
            x1: Z[V],
            x2: Z[A - 1],
            y: H(Q)
          }), V = null, Q = null);
          continue;
        }
        if (V === null) {
          V = A, Q = K;
          continue;
        }
        Q != null && Math.abs(K - Q) <= 1e-9 || (Q != null && G.push({
          x1: Z[V],
          x2: Z[A - 1],
          y: H(Q)
        }), V = A, Q = K);
      }
      return V !== null && Q != null && G.push({
        x1: Z[V],
        x2: Z[l.length - 1],
        y: H(Q)
      }), G;
    };
    return {
      mean: C((D) => D.limits.mean ?? null),
      ucl: C((D) => D.limits.ucl ?? null),
      lcl: C((D) => D.limits.lcl ?? null),
      onePos: C((D) => D.limits.oneSigma.upper ?? null),
      oneNeg: C((D) => D.limits.oneSigma.lower ?? null),
      twoPos: C((D) => D.limits.twoSigma.upper ?? null),
      twoNeg: C((D) => D.limits.twoSigma.lower ?? null)
    };
  }, [l, Z, H]), le = q.useMemo(() => te.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
    /* @__PURE__ */ r.jsxs(
      "linearGradient",
      {
        id: `${O.current}-grad-common`,
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
    te.map((C, D) => {
      const G = `${O.current}-grad-${D}`;
      let V, Q = 0.28, A = 0.12, U = 0.045;
      switch (C.category) {
        case ht.Concern:
          V = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", Q = 0.28, A = 0.12, U = 0.045;
          break;
        case ht.Improvement:
          V = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", Q = 0.26, A = 0.11, U = 0.045;
          break;
        case ht.NoJudgement:
          V = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", Q = 0.26, A = 0.11, U = 0.045;
          break;
        default:
          V = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: G, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: V, stopOpacity: Q }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: V, stopOpacity: A }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: V, stopOpacity: U })
      ] }, G);
    })
  ] }) : null, [te]), se = q.useMemo(() => {
    if (!te.length) return null;
    const [C] = H.domain(), D = H(C), G = te.map((V, Q) => {
      const { start: A, end: U, category: oe } = V;
      if (A < 0 || U >= Z.length || A > U)
        return null;
      const K = Z[A], ae = Z[U];
      let ce = "";
      if (oe === ht.Common) {
        const pe = Q > 0 ? te[Q - 1] : null, ye = Q < te.length - 1 ? te[Q + 1] : null, Te = pe ? Z[pe.end] : re, Re = pe ? H(B[pe.end].y) : D, be = ye ? Z[ye.start] : X, Xe = ye ? H(B[ye.start].y) : D;
        ce = `M ${Te} ${D}`, ce += ` L ${Te} ${Re}`;
        for (let tt = A; tt <= U; tt++)
          ce += ` L ${Z[tt]} ${H(B[tt].y)}`;
        ce += ` L ${be} ${Xe}`, ce += ` L ${be} ${D} Z`;
      } else {
        const pe = Q > 0 ? te[Q - 1] : null, ye = Q < te.length - 1 ? te[Q + 1] : null, Te = pe && pe.category !== ht.Common, Re = ye && ye.category !== ht.Common, be = H(B[A].y), Xe = H(B[U].y);
        let tt = K, ie = ae;
        if (Te) {
          const je = Z[pe.end], xe = H(B[pe.end].y), ke = B[A].y - B[pe.end].y;
          m === qn.Slope && ke > 0 ? (ce = `M ${je} ${xe} L ${K} ${be}`, tt = je) : (ce = `M ${K} ${D} L ${K} ${be}`, tt = K);
        } else
          ce = `M ${K} ${D} L ${K} ${be}`;
        for (let je = A + 1; je <= U; je++)
          ce += ` L ${Z[je]} ${H(B[je].y)}`;
        if (ce += ` L ${ae} ${Xe}`, Re) {
          const je = Z[ye.start], xe = H(B[ye.start].y), ke = B[ye.start].y - B[U].y;
          (m === qn.Slope && ke <= 0 || m === qn.Extend) && (ce += ` L ${je} ${xe}`, ie = je);
        }
        if (ce += ` L ${ie} ${D}`, ce += ` L ${tt} ${D} Z`, m === qn.Neutral && Te) {
          const je = Z[pe.end], xe = H(B[pe.end].y), ke = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${je} ${D} L ${je} ${xe} L ${K} ${be} L ${K} ${D} Z`,
              fill: `url(#${O.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${Q}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            ke,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: ce,
                fill: `url(#${O.current}-grad-${Q})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${Q}`
            )
          ] }, `seq-group-${Q}`);
        }
      }
      return /* @__PURE__ */ r.jsx(
        "path",
        {
          d: ce,
          fill: `url(#${O.current}-grad-${Q})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${Q}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: G });
  }, [te, Z, X, H, B, m]), fe = q.useMemo(() => {
    if (!v?.timeframe && B.length >= 2) {
      const C = B.map((U) => U.x instanceof Date ? U.x : new Date(U.x)), D = new Date(Math.min(...C.map((U) => U.getTime()))), G = new Date(Math.max(...C.map((U) => U.getTime()))), V = Math.round((G.getTime() - D.getTime()) / 864e5) || 0;
      if (V < 14)
        return `The chart shows a timeframe of ${V + 1} days`;
      const Q = Math.round(V / 7);
      return Q < 20 ? `The chart shows a timeframe of ${Q} weeks` : `The chart shows a timeframe of ${(G.getFullYear() - D.getFullYear()) * 12 + (G.getMonth() - D.getMonth()) + 1} months`;
    }
    if (v?.timeframe)
      return `The chart shows a timeframe of ${v.timeframe}`;
  }, [v?.timeframe, B]), ue = (C) => {
    const D = C % 10, G = C % 100;
    return D === 1 && G !== 11 ? `${C}st` : D === 2 && G !== 12 ? `${C}nd` : D === 3 && G !== 13 ? `${C}rd` : `${C}th`;
  }, he = (C) => `${ue(C.getDate())} ${C.toLocaleString("en-GB", { month: "long" })}, ${C.getFullYear()}`, Ee = (C) => ({
    specialCauseSinglePointUp: !!C?.rules.singlePoint.up,
    specialCauseSinglePointDown: !!C?.rules.singlePoint.down,
    specialCauseTwoOfThreeUp: !!C?.rules.twoOfThree.up,
    specialCauseTwoOfThreeDown: !!C?.rules.twoOfThree.down,
    specialCauseFourOfFiveUp: !!C?.rules.fourOfFive.up,
    specialCauseFourOfFiveDown: !!C?.rules.fourOfFive.down,
    specialCauseShiftUp: !!C?.rules.shift.up,
    specialCauseShiftDown: !!C?.rules.shift.down,
    specialCauseTrendUp: !!C?.rules.trend.up,
    specialCauseTrendDown: !!C?.rules.trend.down
  }), _e = q.useCallback(
    ({
      index: C,
      x: D,
      y: G
    }) => {
      const V = l?.[C], Q = D instanceof Date ? D : new Date(D), A = he(Q), U = v?.measureUnit ? ` ${v.measureUnit}` : "", oe = v?.measureName ? ` ${v.measureName}` : "";
      if (!V)
        return `General summary is: ${fe ? fe + ". " : ""}Point ${C + 1}, ${A}, ${G}${U}${oe}`;
      const K = Ca(V.classification?.variation) || "Variation", ae = ka(Ee(V)), ce = ae.length ? ` Rules: ${[...new Set(ae.map((ye) => $n[ye].narration))].join("; ")}.` : " No special cause rules.", pe = [];
      return v?.measureName && pe.push(`Measure: ${v.measureName}.`), v?.datasetContext && pe.push(`${v.datasetContext}.`), v?.organisation && pe.push(`Organisation: ${v.organisation}.`), v?.additionalNote && pe.push(v.additionalNote), [
        "General summary is:",
        ...pe,
        `Point ${C + 1} recorded on `,
        A + ",",
        `with a value of ${G} ${U}${oe}`,
        K + ".",
        ce
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [l, v, fe]
  ), Ne = q.useCallback(
    (C, D) => l?.[C] ? _e({
      index: C,
      seriesId: "process",
      x: D.x instanceof Date ? D.x : new Date(D.x),
      y: D.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [l, _e]
  ), ge = q.useMemo(() => {
    try {
      const C = typeof H?.domain == "function" ? H.domain() : void 0;
      if (!C || !Array.isArray(C) || C.length < 2) return !1;
      const D = Math.min(C[0], C[1]), G = Math.max(C[0], C[1]);
      return !(0 >= D && 0 <= G);
    } catch {
      return !1;
    }
  }, [H]);
  return /* @__PURE__ */ r.jsx(Rm, { children: /* @__PURE__ */ r.jsxs(
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
            width: F.xScale.range()[1] + 56 + 16,
            height: (z?.innerHeight ?? F.yScale.range()[0]) + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(hi, { type: "x" }),
              /* @__PURE__ */ r.jsx(
                hi,
                {
                  type: "y",
                  yZeroBreak: {
                    enabled: ge,
                    gapPx: k,
                    zigZag: { heightPx: 64, amplitudePx: 4, cycles: 6, stepXPx: 3 }
                  }
                }
              ),
              /* @__PURE__ */ r.jsx(rm, { axis: "y" }),
              le,
              se,
              d.map((C, D) => {
                const G = B[C];
                if (!G) return null;
                const V = J(G.x instanceof Date ? G.x : new Date(G.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: V,
                    x2: V,
                    y1: 0,
                    y2: H.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${D}`
                );
              }),
              Y?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                Y.mean.map((C, D) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__cl",
                    x1: C.x1,
                    x2: C.x2,
                    y1: C.y,
                    y2: C.y
                  },
                  `mean-${D}`
                )),
                Y.mean.map((C, D) => {
                  if (D === Y.mean.length - 1) return null;
                  const G = Y.mean[D + 1];
                  if (!G || C.y === G.y) return null;
                  const Q = Math.max(4, G.x1 - C.x2 || 0) * 0.5, A = `M ${C.x2},${C.y} C ${C.x2 + Q},${C.y} ${G.x1 - Q},${G.y} ${G.x1},${G.y}`;
                  return /* @__PURE__ */ r.jsx(
                    "path",
                    {
                      className: "fdp-spc__cl fdp-spc__cl-join",
                      d: A,
                      fill: "none"
                    },
                    `mean-join-${D}`
                  );
                })
              ] }) : null,
              f != null && /* @__PURE__ */ r.jsx(r.Fragment, {}),
              Y?.ucl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--ucl",
                  children: [
                    Y.ucl.map((C, D) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--ucl",
                        x1: C.x1,
                        x2: C.x2,
                        y1: C.y,
                        y2: C.y,
                        strokeWidth: 2
                      },
                      `ucl-${D}`
                    )),
                    Y.ucl.map((C, D) => {
                      if (D === Y.ucl.length - 1) return null;
                      const G = Y.ucl[D + 1];
                      if (!G || C.y === G.y) return null;
                      const Q = Math.max(4, G.x1 - C.x2 || 0) * 0.5, A = `M ${C.x2},${C.y} C ${C.x2 + Q},${C.y} ${G.x1 - Q},${G.y} ${G.x1},${G.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join",
                          d: A,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `ucl-join-${D}`
                      );
                    })
                  ]
                }
              ) : null,
              Y?.lcl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--lcl",
                  children: [
                    Y.lcl.map((C, D) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--lcl",
                        x1: C.x1,
                        x2: C.x2,
                        y1: C.y,
                        y2: C.y,
                        strokeWidth: 2
                      },
                      `lcl-${D}`
                    )),
                    Y.lcl.map((C, D) => {
                      if (D === Y.lcl.length - 1) return null;
                      const G = Y.lcl[D + 1];
                      if (!G || C.y === G.y) return null;
                      const Q = Math.max(4, G.x1 - C.x2 || 0) * 0.5, A = `M ${C.x2},${C.y} C ${C.x2 + Q},${C.y} ${G.x1 - Q},${G.y} ${G.x1},${G.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join",
                          d: A,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `lcl-join-${D}`
                      );
                    })
                  ]
                }
              ) : null,
              f != null && /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: J.range()[1],
                    y1: H(f),
                    y2: H(f),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: J.range()[0] - 7,
                    y: H(f) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      f,
                      " ",
                      E || v?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              p && Y && Y.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                Y.onePos.map((C, D) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: C.x1,
                    x2: C.x2,
                    y1: C.y,
                    y2: C.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${D}`
                )),
                Y.oneNeg.map((C, D) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: C.x1,
                    x2: C.x2,
                    y1: C.y,
                    y2: C.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${D}`
                )),
                Y.twoPos.map((C, D) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: C.x1,
                    x2: C.x2,
                    y1: C.y,
                    y2: C.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${D}`
                )),
                Y.twoNeg.map((C, D) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: C.x1,
                    x2: C.x2,
                    y1: C.y,
                    y2: C.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${D}`
                ))
              ] }),
              de && (x || _ || M) && (() => {
                const C = de.detectedAt, D = de.firstFavourableCrossAt, G = B[C] ? J(
                  B[C].x instanceof Date ? B[C].x : new Date(B[C].x)
                ) : null, V = B[C] ? H(B[C].y) : null, Q = D != null && B[D] ? J(
                  B[D].x instanceof Date ? B[D].x : new Date(B[D].x)
                ) : null, A = D != null && B[D] ? H(B[D].y) : null;
                return /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  M && G != null && V != null && Q != null && A != null && /* @__PURE__ */ r.jsx(
                    "line",
                    {
                      x1: G,
                      y1: V,
                      x2: Q,
                      y2: A,
                      stroke: "#888",
                      strokeDasharray: "4 4",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend bridge: start to first favourable-side point" })
                    }
                  ),
                  x && G != null && V != null && /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: G,
                      cy: V,
                      r: 6,
                      fill: "white",
                      stroke: "#555",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend start (run reached N)" })
                    }
                  ),
                  _ && Q != null && A != null && /* @__PURE__ */ r.jsx("circle", { cx: Q, cy: A, r: 5, fill: "#555", children: /* @__PURE__ */ r.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ r.jsx(
                Bm,
                {
                  series: i[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (C) => C.x instanceof Date ? C.x : new Date(C.x),
                  smooth: !1,
                  strokeWidth: I
                }
              ),
              h && B.map((C, D) => {
                const G = J(C.x instanceof Date ? C.x : new Date(C.x)), V = H(C.y), Q = ee.has(D), A = R?.[D], U = ne[D], oe = U === ht.Improvement, K = U === ht.Concern, ae = U === ht.NoJudgement, ce = [
                  "fdp-spc__point",
                  Q && b ? "fdp-spc__point--ooc" : null,
                  $ && K ? "fdp-spc__point--sc-concern" : null,
                  $ && oe ? "fdp-spc__point--sc-improvement" : null,
                  $ && N && ae ? "fdp-spc__point--sc-no-judgement" : null,
                  A?.assurance === ln.Pass ? "fdp-spc__point--assurance-pass" : null,
                  A?.assurance === ln.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), pe = W?.focused?.index === D;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: G,
                    cy: V,
                    r: 5,
                    className: ce,
                    "data-variation": A?.variation,
                    "data-assurance": A?.assurance,
                    "aria-label": y,
                    ...pe ? { "aria-describedby": `spc-tooltip-${D}` } : {}
                  },
                  D
                );
              }),
              L && j && W?.focused && (() => {
                const C = W.focused, D = typeof C.index == "number" ? C.index : -1;
                if (D < 0 || !B[D]) return null;
                const G = J(
                  B[D].x instanceof Date ? B[D].x : new Date(B[D].x)
                ), V = H(B[D].y), Q = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
                return /* @__PURE__ */ r.jsxs("g", { className: "fdp-spc__focus-indicator", "aria-hidden": "true", children: [
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: G,
                      cy: V,
                      r: 7,
                      fill: "none",
                      stroke: Q,
                      strokeWidth: 3
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: G,
                      cy: V,
                      r: 5,
                      fill: "#000",
                      stroke: Q,
                      strokeWidth: 1.5
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: G,
                      cy: V,
                      r: 2.5,
                      fill: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
                      stroke: "#fff",
                      strokeWidth: 0.5
                    }
                  )
                ] });
              })(),
              z && /* @__PURE__ */ r.jsx(
                _g,
                {
                  width: J.range()[1],
                  height: H.range()[0]
                }
              ),
              !j && /* @__PURE__ */ r.jsx(
                ic,
                {
                  engineRows: l,
                  limits: { mean: u.mean, sigma: u.sigma },
                  pointDescriber: Ne,
                  measureName: v?.measureName,
                  measureUnit: v?.measureUnit,
                  dateFormatter: (C) => he(C),
                  enableNeutralNoJudgement: N,
                  showTrendGatingExplanation: P
                }
              )
            ] })
          }
        ),
        j && /* @__PURE__ */ r.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ r.jsx(
          bg,
          {
            engineRows: l,
            measureName: v?.measureName,
            measureUnit: E || v?.measureUnit,
            onSignalFocus: T
          }
        ) }),
        w && /* @__PURE__ */ r.jsx(
          Hm,
          {
            format: (C) => _e({ ...C, x: C.x instanceof Date ? C.x : new Date(C.x) })
          }
        )
      ]
    }
  ) });
}, _g = ({
  width: e,
  height: t
}) => {
  const n = tn();
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
function Ci(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function kg(e, t, n) {
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
function Cg(e, t) {
  const n = e.filter(Boolean);
  if (n.length < 2) return t;
  const a = [];
  for (let c = 1; c < n.length; c++)
    a.push(n[c].getTime() - n[c - 1].getTime());
  const o = a.sort((c, d) => c - d), s = o[Math.floor(o.length / 2)], i = 3600 * 1e3, l = 24 * i;
  return s <= 2 * i ? "hourly" : s <= 2 * l ? "daily" : s <= 10 * l ? "weekly" : s <= 45 * l ? "monthly" : s <= 120 * l ? "quarterly" : "annually";
}
function Ni(e, t) {
  if (e)
    try {
      switch (t) {
        case "hourly":
          return new Intl.DateTimeFormat(void 0, {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "short",
            year: "numeric"
          }).format(e);
        case "daily":
          return new Intl.DateTimeFormat(void 0, {
            day: "2-digit",
            month: "short",
            year: "numeric"
          }).format(e);
        case "weekly":
          return `Week of ${new Intl.DateTimeFormat(void 0, { day: "2-digit", month: "short", year: "numeric" }).format(e)}`;
        case "monthly":
          return new Intl.DateTimeFormat(void 0, {
            month: "short",
            year: "numeric"
          }).format(e);
        case "quarterly":
          return `Q${Math.floor(e.getMonth() / 3) + 1} ${e.getFullYear()}`;
        case "annually":
          return `${e.getFullYear()}`;
        default:
          return new Intl.DateTimeFormat(void 0, {
            day: "2-digit",
            month: "short",
            year: "numeric"
          }).format(e);
      }
    } catch {
      return;
    }
}
function Ng(e, t, n, a = "0-100") {
  if (t) return t;
  if (n) return n;
  const o = e.filter((l) => l != null);
  if (!o.length) return;
  const s = Math.min(...o), i = Math.max(...o);
  if (a === "0-1") {
    if (s >= 0 && i <= 1 && i > 0) return "%";
  } else if (s >= 0 && i <= 100 && i > 0) return "%";
}
function jg(e, t, n = 1) {
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
function cc(e) {
  const {
    values: t,
    dates: n,
    intervalHint: a,
    startDate: o,
    providedUnit: s,
    defaultUnit: i,
    autoValue: l = !0,
    autoDelta: c = !0,
    autoMetadata: d = !0,
    deltaConfig: u
  } = e, f = t.map(
    (y) => typeof y == "number" ? y : y == null ? null : Number(y)
  );
  let h = -1;
  for (let y = f.length - 1; y >= 0; y--)
    if (f[y] != null) {
      h = y;
      break;
    }
  let p = (n || []).map(Ci);
  if (!p.some(Boolean)) {
    const y = Ci(o);
    y && a ? p = kg(f.length, y, a) : p = new Array(f.length).fill(void 0);
  }
  const g = Cg(p, a), m = Ng(
    f,
    s,
    i,
    e.percentHeuristic
  ), I = l && h >= 0 && f[h] != null ? f[h] : void 0, L = {
    strategy: "previous",
    n: 1,
    absolute: !0,
    skipNulls: !0,
    ...u || {}
  };
  function $() {
    if (h < 0) return -1;
    if (L.strategy === "previous" || L.strategy === "n-points") {
      let P = h - (L.strategy === "previous" ? 1 : Math.max(1, L.n || 1));
      if (!L.skipNulls) return P;
      for (let k = P; k >= 0; k--) if (f[k] != null) return k;
      return -1;
    }
    const y = p[h];
    if (!y) return -1;
    const v = new Date(y);
    v.setFullYear(v.getFullYear() - 1);
    let j = -1, T = 1 / 0;
    for (let P = 0; P < p.length; P++) {
      const k = p[P];
      if (!k || f[P] == null) continue;
      const S = Math.abs(k.getTime() - v.getTime());
      S < T && (T = S, j = P);
    }
    return j;
  }
  const N = $(), x = N >= 0 ? f[N] : null;
  let _;
  if (c && I != null && x != null) {
    const y = I - x, v = L.absolute !== !1, j = v ? y : x === 0 ? 0 : y / Math.abs(x) * 100;
    _ = {
      value: Number.isFinite(j) ? Number(j.toFixed(2)) : 0,
      isPercent: v ? m === "%" : !0,
      period: `vs ${jg(g, a, L.strategy === "n-points" ? Math.max(1, L.n || 1) : 1)}`
    };
  }
  const M = h >= 0 ? p[h] : void 0, w = d && Ni(M, g) ? `Latest: ${Ni(M, g)}` : void 0;
  return { value: I, unit: m, delta: _, metadata: w, latestDate: M, frequency: g };
}
function Mg(e) {
  const { rows: t } = fr(e), n = ss(e);
  return { rows: t, visuals: n.visuals };
}
const cs = 13;
function ds(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => {
      switch (t) {
        case at.Improvement:
          return He.Improvement;
        case at.Concern:
          return He.Concern;
        case at.NoJudgement:
          return He.Neither;
        default:
          return null;
      }
    });
}
function dc(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => t === at.NoJudgement);
}
function ji(e, t) {
  const n = e === Nt.G ? Nt.G : e === Nt.T ? Nt.T : Nt.XmR, a = t === Ue.Up ? Ue.Up : t === Ue.Down ? Ue.Down : Ue.Neither;
  return { chartType: n, metricImprovement: a };
}
function Mi(e, t, n) {
  const a = typeof e?.minimumPoints == "number" && !isNaN(e.minimumPoints) ? e.minimumPoints : cs, o = { minimumPoints: a };
  return t.filter(
    (i) => !i.ghost && typeof i.value == "number"
  ).length >= a && (o.chartLevelEligibility = !0), e?.enableFourOfFiveRule != null && (o.enableFourOfFiveRule = !!e.enableFourOfFiveRule), n && Object.assign(o, n), Object.keys(o).length ? o : void 0;
}
function Ig(e, t, n) {
  const a = q.useMemo(() => {
    if (!e || e.length < 2) return !1;
    const i = Math.min(e[0], e[1]), l = Math.max(e[0], e[1]);
    return !(0 >= i && 0 <= l);
  }, [e]), { slotPx: o, totalReservedPx: s } = q.useMemo(() => {
    if (!a) return { slotPx: 0, totalReservedPx: 0 };
    const l = (t ?? 260) - 60, c = kr, u = c + Kp, f = n?.maxFraction, h = Math.max(
      Cr,
      Math.floor(l * f)
    ), p = Math.min(u, h);
    return { slotPx: Math.min(c, p), totalReservedPx: p };
  }, [a, t, n?.maxFraction]);
  return { show: a, slotPx: o, totalReservedPx: s };
}
function Dg(e, t, n, a) {
  if (n.percentScale) {
    const c = e.map((f) => f.y), d = Math.max(100, ...c), u = Math.min(0, ...c);
    return [u < 0 ? u : 0, d > 100 ? d : 100];
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
function yo(e, t) {
  if (!e?.length || t.chartType !== Nt.XmR) return null;
  const n = Math.max(2, Math.floor(t.shiftLength ?? 6)), a = [];
  for (let p = 0; p < e.length; p++) {
    const b = e[p], g = b.value;
    b?.ghost || typeof g == "number" && Number.isFinite(g) && a.push({ idx: p, value: g });
  }
  if (a.length < n * 2) return null;
  let o = 0, s = 0;
  for (let p = 1; p < a.length; p++)
    o += Math.abs(a[p].value - a[p - 1].value), s++;
  if (s === 0) return null;
  const l = o / s * (2.66 / 3);
  if (!Number.isFinite(l) || l <= 0) return null;
  const c = Math.max(0, t.deltaSigma ?? 0.5), d = t.metricImprovement === Ue.Up, u = t.metricImprovement === Ue.Down, f = (() => {
    for (let p = e.length - 1; p >= 0; p--) if (e[p]?.baseline) return p;
    return -1;
  })();
  function h(p, b) {
    let g = 0, m = 0;
    for (let I = p; I < b; I++)
      g += a[I].value, m++;
    return m ? g / m : NaN;
  }
  for (let p = n; p <= a.length - n; p++) {
    const b = h(p - n, p), g = h(p, p + n);
    if (!Number.isFinite(b) || !Number.isFinite(g)) continue;
    const m = g - b, I = m / l;
    let L = !1, $ = !1;
    if (d ? (L = I >= c, $ = !0) : u ? (L = -I >= c, $ = !1) : (L = Math.abs(I) >= c, $ = m > 0), !L) continue;
    const N = (M) => $ ? M > b : M < b;
    let x = !0;
    for (let M = p; M < p + n; M++)
      if (!N(a[M].value)) {
        x = !1;
        break;
      }
    if (!x) continue;
    const _ = a[p].idx;
    if (!(t.minGap && f >= 0 && _ - f < t.minGap))
      return _;
  }
  return null;
}
function Tg(e, t) {
  const n = yo(e, t);
  return n == null ? e.slice() : e.map((a, o) => o === n ? { ...a, baseline: !0 } : a);
}
function Lg(e, t) {
  const n = Math.max(1, Math.floor(t.maxInsertions ?? 1));
  if (n <= 1) return Tg(e, t);
  let a = e.slice(), o = 0;
  const s = Math.max(1, t.minGap ?? 0);
  for (; o < n; ) {
    const i = yo(a, { ...t, minGap: s });
    if (i == null) break;
    if (a[i]?.baseline) {
      const l = yo(a, { ...t, minGap: s + 1 });
      if (l == null || l === i) break;
      a = a.map((c, d) => d === l ? { ...c, baseline: !0 } : c), o++;
      continue;
    }
    a = a.map((l, c) => c === i ? { ...l, baseline: !0 } : l), o++;
  }
  return a;
}
const $g = (e) => {
  const t = q.useCallback(
    (Ce) => String(Ce).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Se) => Se.length ? Se[0].toUpperCase() + Se.slice(1) : Se).join(" "),
    []
  ), n = q.useCallback(
    (Ce) => String(Ce).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Le) => Le.length ? Le[0].toUpperCase() + Le.slice(1) : Le).join(" "),
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
    effEngineSettings: d,
    effAlwaysShowZeroY: u,
    effAlwaysShowHundredY: f,
    effPercentScale: h,
    effGradientSequences: p,
    effSequenceTransition: b,
    effProcessLineWidth: g,
    effTrendVisualMode: m,
    effShowTrendGatingExplanation: I,
    effEnableNeutralNoJudgement: L,
    effEnableRules: $,
    effShowPartitionMarkers: N,
    effShowTrendStartMarkers: x,
    effShowFirstFavourableCrossMarkers: _,
    effShowTrendBridgeOverlay: M,
    effShowSignalsInspector: w,
    effOnSignalFocus: y,
    effShowWarningsPanel: v,
    effWarningsFilter: j,
    effShowEmbeddedIcon: T,
    effEmbeddedIconVariant: P,
    effEmbeddedIconRunLength: k,
    effShowFocusIndicator: S,
    effHeight: E,
    effClassName: F,
    effAriaLabel: z,
    effUnit: J,
    effNarrationContext: H,
    effShowZones: O,
    effShowPoints: W,
    effHighlightOutOfControl: B,
    effVisualsScenario: ee,
    effVisualsEngineSettings: R,
    effSource: ne,
    effPrecomputedVisuals: te,
    effEngineAutoRecalc: Z
  } = vg(e), X = z ?? e.ariaLabel, re = E ?? e.height ?? 260, de = F ?? e.className, Y = J ?? e.unit, le = H ?? e.narrationContext, se = O ?? e.showZones, fe = W ?? e.showPoints, ue = B ?? e.highlightOutOfControl, he = ee ?? e.visualsScenario ?? nc.None, Ee = R ?? e.visualsEngineSettings, _e = ne ?? e.source, Ne = e.a11y?.announceFocus ?? e.announceFocus ?? !1, ge = q.useMemo(() => a.map((Ce, Le) => ({
    x: Ce.x,
    value: Ce.y,
    target: o?.[Le] ?? void 0,
    baseline: s?.[Le] ?? void 0,
    ghost: i?.[Le] ?? void 0
  })), [a, o, s, i]), C = q.useMemo(() => {
    try {
      const Ce = Z;
      return Ce?.enabled ? Lg(ge, {
        chartType: l,
        metricImprovement: c,
        shiftLength: Ce.shiftLength,
        deltaSigma: Ce.deltaSigma,
        minGap: Ce.minGap,
        maxInsertions: Ce.maxInsertions
      }) : ge;
    } catch {
      return ge;
    }
  }, [ge, Z, l, c]), D = q.useMemo(() => {
    if (te?.visuals) return te.visuals;
    try {
      const Ce = Mi(
        d,
        C,
        Ee
      ), { chartType: Le, metricImprovement: Se } = ji(
        l,
        c
      ), qe = {
        chartType: Le,
        metricImprovement: Se,
        data: C,
        settings: Ce
      }, { visuals: lt } = lg(qe, he, {
        trendVisualMode: m === lc.Ungated ? Bn.Ungated : Bn.Gated,
        enableNeutralNoJudgement: L
      });
      return lt || [];
    } catch {
      return [];
    }
  }, [
    te?.visuals?.length,
    C,
    l,
    c,
    m,
    L,
    d,
    he,
    Ee
  ]), V = q.useMemo(() => {
    if (te?.rows)
      try {
        const Ce = te.rows, Le = (Se) => {
          switch (Se) {
            case Me.ImprovementHigh:
            case Me.ImprovementLow:
              return He.Improvement;
            case Me.ConcernHigh:
            case Me.ConcernLow:
              return He.Concern;
            case Me.NeitherHigh:
            case Me.NeitherLow:
              return He.Neither;
            case Me.CommonCause:
            default:
              return He.Neither;
          }
        };
        return Ce.map(
          (Se, qe) => ({
            data: {
              value: Se.value,
              ghost: !!Se.ghost
            },
            partition: { id: Se.partitionId },
            limits: {
              mean: Se.mean,
              ucl: Se.upperProcessLimit,
              lcl: Se.lowerProcessLimit,
              oneSigma: { upper: Se.upperOneSigma, lower: Se.lowerOneSigma },
              twoSigma: { upper: Se.upperTwoSigma, lower: Se.lowerTwoSigma }
            },
            rules: {
              singlePoint: { up: !!Se.singlePointUp, down: !!Se.singlePointDown },
              twoOfThree: { up: !!Se.twoSigmaUp, down: !!Se.twoSigmaDown },
              fourOfFive: { up: !!Se.fourOfFiveUp, down: !!Se.fourOfFiveDown },
              shift: { up: !!Se.shiftUp, down: !!Se.shiftDown },
              trend: { up: !!Se.trendUp, down: !!Se.trendDown }
            },
            classification: {
              variation: Le(Se.variationIcon),
              neutralSpecialCauseValue: Se.variationIcon === Me.NeitherHigh || Se.variationIcon === Me.NeitherLow ? Se.specialCauseImprovementValue ?? Se.specialCauseConcernValue ?? 1 : null,
              assurance: void 0
            },
            target: C[qe]?.target ?? null
          })
        );
      } catch {
        return null;
      }
    try {
      const Ce = Mi(
        d,
        C,
        Ee
      ), { chartType: Le, metricImprovement: Se } = ji(
        l,
        c
      ), qe = {
        chartType: Le,
        metricImprovement: Se,
        data: C,
        settings: Ce
      }, { rows: lt } = Mg(qe), jt = (De) => {
        switch (De) {
          case Me.ImprovementHigh:
          case Me.ImprovementLow:
            return He.Improvement;
          case Me.ConcernHigh:
          case Me.ConcernLow:
            return He.Concern;
          case Me.NeitherHigh:
          case Me.NeitherLow:
            return He.Neither;
          case Me.CommonCause:
          default:
            return He.Neither;
        }
      };
      return lt.map(
        (De, wt) => ({
          data: {
            value: De.value,
            ghost: !!De.ghost
          },
          partition: { id: De.partitionId },
          limits: {
            mean: De.mean,
            ucl: De.upperProcessLimit,
            lcl: De.lowerProcessLimit,
            oneSigma: { upper: De.upperOneSigma, lower: De.lowerOneSigma },
            twoSigma: { upper: De.upperTwoSigma, lower: De.lowerTwoSigma }
          },
          rules: {
            singlePoint: { up: !!De.singlePointUp, down: !!De.singlePointDown },
            twoOfThree: { up: !!De.twoSigmaUp, down: !!De.twoSigmaDown },
            fourOfFive: { up: !!De.fourOfFiveUp, down: !!De.fourOfFiveDown },
            shift: { up: !!De.shiftUp, down: !!De.shiftDown },
            trend: { up: !!De.trendUp, down: !!De.trendDown }
          },
          classification: {
            variation: jt(De.variationIcon),
            neutralSpecialCauseValue: De.variationIcon === Me.NeitherHigh || De.variationIcon === Me.NeitherLow ? De.specialCauseImprovementValue ?? De.specialCauseConcernValue ?? 1 : null,
            assurance: void 0
          },
          target: C[wt]?.target ?? null
        })
      );
    } catch {
      return null;
    }
  }, [
    te?.rows?.length,
    C,
    l,
    c,
    d,
    Ee
  ]) || null, Q = (V || []).slice().reverse().find((Ce) => Ce.limits.mean != null), A = Q?.limits.mean ?? null, U = q.useMemo(() => {
    const Ce = [];
    try {
      const Le = V, Se = d?.minimumPoints ?? 13, qe = d?.minimumPoints ?? 12;
      if (Le && Le.length) {
        const lt = Le.filter(
          (De) => !De.data.ghost && De.data.value != null
        ).length;
        lt < Se && Ce.push({
          code: Gr.InsufficientPointsGlobal,
          severity: At.Warning,
          category: Wr.Data,
          message: "Not enough non-ghost points to compute stable limits/icons.",
          context: { nonGhostCount: lt, minimumPoints: Se }
        });
        const jt = /* @__PURE__ */ new Map();
        for (const De of Le) {
          const wt = De.partition.id ?? 0, Ct = jt.get(wt) || { size: 0, nonGhost: 0 };
          Ct.size += 1, !De.data.ghost && De.data.value != null && (Ct.nonGhost += 1), jt.set(wt, Ct);
        }
        for (const [De, wt] of jt)
          wt.nonGhost > 0 && wt.nonGhost < qe && Ce.push({
            code: Gr.InsufficientPointsPartition,
            severity: At.Warning,
            category: Wr.Partition,
            message: "A partition/baseline segment has too few points for recommended stability.",
            context: {
              partitionId: De,
              nonGhostCount: wt.nonGhost,
              minimumPointsPartition: qe
            }
          });
      }
    } catch {
    }
    return Ce;
  }, [V, d?.minimumPoints]), oe = q.useMemo(() => U.length ? j ? U.filter((Ce) => !(j.severities && Ce.severity && !j.severities.includes(Ce.severity) || j.categories && Ce.category && !j.categories.includes(Ce.category) || j.codes && !j.codes.includes(Ce.code))) : U : [], [U, j]), K = Q?.limits.ucl ?? null, ae = Q?.limits.lcl ?? null, ce = Q?.limits.oneSigma.upper ?? null, pe = Q?.limits.oneSigma.lower ?? null, ye = Q?.limits.twoSigma.upper ?? null, Te = Q?.limits.twoSigma.lower ?? null, Re = A != null && ce != null ? Math.abs(ce - A) : 0, be = q.useMemo(
    () => [{ id: "process", data: a, color: "#A6A6A6" }],
    [a]
  ), Xe = q.useMemo(
    () => Dg(
      a,
      { mean: A, ucl: K, lcl: ae, onePos: ce, oneNeg: pe, twoPos: ye, twoNeg: Te },
      {
        alwaysShowZeroY: !!u,
        alwaysShowHundredY: !!f,
        percentScale: !!h
      },
      o ?? null
    ),
    [
      a,
      A,
      K,
      ae,
      ce,
      pe,
      ye,
      Te,
      o,
      u,
      f,
      h
    ]
  ), tt = q.useMemo(() => {
    const Ce = (Le) => {
      const Se = Le.filter(
        (lt) => typeof lt == "number" && !isNaN(lt)
      );
      if (!Se.length) return null;
      const qe = Se[0];
      return Se.every((lt) => lt === qe) ? qe : null;
    };
    if (V && V.length) {
      const Le = Ce(V.map((Se) => Se.target));
      if (Le != null) return Le;
    }
    return o && o.length ? Ce(o) : null;
  }, [V, o]), { show: ie, slotPx: je, totalReservedPx: xe } = Ig(
    Xe,
    re,
    { maxFraction: 0.35 }
  ), ke = ie ? xe : 0, Ye = q.useMemo(() => {
    const Ce = a.map((Le) => Le.x);
    return cc({
      values: a.map((Le) => Le.y),
      dates: Ce,
      providedUnit: Y || le?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [a, Y, le?.measureUnit]), Be = Y ?? le?.measureUnit ?? Ye.unit, Ve = q.useMemo(() => Be ? { ...le || {}, measureUnit: Be } : le, [le, Be]), Ge = q.useMemo(() => {
    if (!V) return [];
    const Ce = [];
    for (let Le = 1; Le < V.length; Le++)
      V[Le].partition.id !== V[Le - 1].partition.id && Ce.push(Le);
    return Ce;
  }, [V]), rt = q.useMemo(
    () => xg({
      show: !!T,
      rowsForUi: V,
      minPoints: d?.minimumPoints ?? 13,
      metricImprovement: c,
      variant: P,
      runLength: k
    }),
    [
      T,
      V,
      d?.minimumPoints,
      c,
      P,
      k
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: de ? `fdp-spc-chart-wrapper ${de}` : "fdp-spc-chart-wrapper",
      children: [
        /* @__PURE__ */ r.jsx(
          mg,
          {
            show: !!T,
            variationNode: rt,
            assuranceNode: null
          }
        ),
        /* @__PURE__ */ r.jsx(
          Jp,
          {
            height: re,
            ariaLabel: X,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            children: /* @__PURE__ */ r.jsx(Xp, { series: be, yDomain: Xe, yBottomGapPx: ke, children: (() => {
              const Ce = {
                data: {
                  series: be,
                  engineRows: V,
                  visualCategories: D,
                  partitionMarkers: N ? Ge : []
                },
                targets: {
                  limits: { mean: A, ucl: K, lcl: ae, sigma: Re, onePos: ce, oneNeg: pe, twoPos: ye, twoNeg: Te },
                  uniformTarget: tt
                },
                visuals: {
                  showPoints: fe,
                  showZones: se,
                  highlightOutOfControl: ue,
                  gradientSequences: p,
                  sequenceTransition: b,
                  processLineWidth: g,
                  showFocusIndicator: S,
                  enableRules: $,
                  enableNeutralNoJudgement: L,
                  showTrendStartMarkers: x,
                  showFirstFavourableCrossMarkers: _,
                  showTrendBridgeOverlay: M
                },
                a11y: {
                  announceFocus: Ne,
                  ariaLabel: X,
                  narrationContext: Ve,
                  showSignalsInspector: w,
                  onSignalFocus: y,
                  showTrendGatingExplanation: I
                },
                axis: { zeroBreakSlotGapPx: je },
                compute: { effectiveUnit: Be, metricImprovement: c }
              };
              return /* @__PURE__ */ r.jsx(Sg, { ...Ce });
            })() })
          }
        ),
        _e && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof _e == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          _e
        ] }) : _e }),
        /* @__PURE__ */ r.jsx(
          pg,
          {
            show: !!v,
            warnings: oe,
            formatWarningCategory: n,
            formatWarningCode: t
          }
        )
      ]
    }
  );
};
function Ag(e, t) {
  const {
    chartType: n = Nt.XmR,
    metricImprovement: a,
    minimumPoints: o = cs,
    enableNeutralNoJudgement: s = !0,
    includeSignalFallbacks: i = !0
  } = t, l = e.map(($) => ({ x: $.x, value: $.value ?? $.y ?? null }));
  let c = null;
  try {
    const $ = l.filter(
      (x) => typeof x.value == "number"
    ).length, N = { minimumPoints: o };
    $ >= o && (N.chartLevelEligibility = !0), c = fr({ chartType: n, metricImprovement: a, data: l, settings: N });
  } catch {
    c = null;
  }
  const d = c?.rows ?? [];
  let u = d[d.length - 1] ?? null;
  for (let $ = d.length - 1; $ >= 0; $--) {
    const N = d[$];
    if (N && N.value != null && !N.ghost) {
      u = N;
      break;
    }
  }
  let f = [];
  try {
    f = ur(d, {
      metricImprovement: a,
      enableNeutralNoJudgement: s
    });
  } catch {
    f = [];
  }
  const h = Yr(
    u?.variationIcon
  ), p = u?.variationIcon ?? null, b = u?.mean ?? null, g = u ? {
    lower: u?.lowerProcessLimit ?? null,
    upper: u?.upperProcessLimit ?? null
  } : null, m = u ? {
    upperOne: u?.upperOneSigma ?? null,
    upperTwo: u?.upperTwoSigma ?? null,
    lowerOne: u?.lowerOneSigma ?? null,
    lowerTwo: u?.lowerTwoSigma ?? null
  } : null;
  let I, L;
  return i && (I = ds(f), L = dc(f)), {
    rows: d,
    visuals: f,
    latestState: h,
    lastVariationIcon: p,
    centerLine: b,
    controlLimits: g,
    sigmaBands: m,
    pointSignals: I,
    pointNeutralSpecialCause: L
  };
}
const y1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: ln,
  BaselineSuggestionReason: Vl,
  ChartType: Nt,
  DEFAULT_MIN_POINTS: cs,
  Icons: gg,
  ImprovementDirection: Ue,
  PARITY_V26: rc,
  RULE_METADATA: Yl,
  SPCChart: $g,
  SPCTooltipOverlay: ic,
  SpcEmbeddedIconVariant: gn,
  SpcVisualCategory: at,
  SpcWarningCategory: Wr,
  SpcWarningCode: Gr,
  SpcWarningSeverity: At,
  VARIATION_COLOR_TOKENS: Tt,
  VariationIcon: Me,
  buildSpcV26a: fr,
  buildSpcV26aWithVisuals: ss,
  computeSpcPrecomputed: Ag,
  computeSpcVisualCategories: ur,
  extractRuleIds: ka,
  getVariationColorHex: Ym,
  getVariationColorToken: ql,
  isSpecialCauseIcon: sc,
  mapIconToVariation: Yr,
  normaliseSpcSettingsV2: tc,
  ruleGlossary: $n,
  variationLabel: Ca,
  visualsToNeutralFlags: dc,
  visualsToPointSignals: ds,
  withParityV26: cg
}, Symbol.toStringTag, { value: "Module" }));
function Eg(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function Fg(e) {
  const {
    values: t,
    x: n,
    chartType: a = Nt.XmR,
    metricImprovement: o = Ue.Neither,
    showLimits: s = !0,
    showLimitBand: i = !1,
    showInnerBands: l = !1,
    showMean: c = !1
    // autoClassify = true,
  } = e, d = q.useMemo(() => {
    const x = [];
    for (let _ = 0; _ < t.length; _++)
      x.push({ x: n?.[_], value: t[_] });
    return x;
  }, [t, n]), u = q.useMemo(() => {
    try {
      const x = d.map((y, v) => ({ x: y.x ?? v, value: y.value })), _ = 13, M = x.filter((y) => typeof y.value == "number").length, w = { minimumPoints: _ };
      return M >= _ && (w.chartLevelEligibility = !0), fr({ chartType: a, metricImprovement: o, data: x, settings: w });
    } catch {
      return null;
    }
  }, [d, a, o]), f = q.useMemo(() => {
    const x = u?.rows;
    if (!x || x.length === 0) return null;
    for (let _ = x.length - 1; _ >= 0; _--) {
      const M = x[_];
      if (M && M.value != null && !M.ghost) return M;
    }
    return x[x.length - 1] ?? null;
  }, [u]), h = q.useMemo(() => {
    const x = u?.rows;
    if (!x || x.length === 0) return null;
    let _ = x[x.length - 1];
    for (let M = x.length - 1; M >= 0; M--) {
      const w = x[M];
      if (w && w.value != null && !w.ghost) {
        _ = w;
        break;
      }
    }
    return Yr(_?.variationIcon);
  }, [u]), p = q.useMemo(() => f?.mean ?? null, [f]), b = q.useMemo(() => {
    if (!f) return null;
    const x = f?.lowerProcessLimit ?? null, _ = f?.upperProcessLimit ?? null;
    return x == null && _ == null ? null : { lower: x, upper: _ };
  }, [f]), g = q.useMemo(() => f ? {
    upperOne: f?.upperOneSigma ?? null,
    upperTwo: f?.upperTwoSigma ?? null,
    lowerOne: f?.lowerOneSigma ?? null,
    lowerTwo: f?.lowerTwoSigma ?? null
  } : null, [f]), m = q.useMemo(() => {
    const x = u?.rows;
    if (!(!x || x.length === 0))
      try {
        return ur(x, {
          metricImprovement: o,
          enableNeutralNoJudgement: !0
        });
      } catch {
        return;
      }
  }, [u, o]), I = q.useMemo(() => ds(m), [m?.length]), L = q.useMemo(() => {
    if (!(!m || m.length === 0))
      return m.map((x) => x === at.NoJudgement);
  }, [m?.length]), $ = q.useMemo(() => {
    let x = null;
    if (f && f.value != null && !f.ghost) {
      const P = f.variationIcon;
      h === Ie.SpecialCauseNoJudgement ? x = sc(P) ? Ie.SpecialCauseNoJudgement : Ie.CommonCause : x = Yr(P) ?? Ie.CommonCause;
    }
    const _ = x ?? Ie.CommonCause, M = Na[_].hex, [w, y, v] = Eg(M), j = ja();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${w}, ${y}, ${v}, ${j.start}) 0%, rgba(${w}, ${y}, ${v}, ${j.mid}) 50%, rgba(${w}, ${y}, ${v}, ${j.end}) 100%)`,
      "--fdp-metric-card-accent": M
    };
  }, [f, h]);
  return { sparkProps: q.useMemo(() => ({
    data: d,
    showMean: c,
    showLimits: s,
    showLimitBand: i,
    showInnerBands: l,
    metricImprovement: o,
    centerLine: p,
    controlLimits: b,
    sigmaBands: g,
    pointSignals: I,
    pointNeutralSpecialCause: L,
    visualCategories: m,
    variationState: h ?? void 0
  }), [
    d,
    c,
    s,
    i,
    l,
    o,
    h,
    p,
    b?.lower,
    b?.upper,
    g?.upperTwo,
    g?.lowerOne,
    g?.lowerTwo,
    I?.length,
    L?.length,
    m?.length
  ]), metricCardStyle: $, latestState: h };
}
const v1 = ({
  sparkData: e,
  direction: t = Ue.Neither,
  showMean: n = !1,
  showLimits: a = !0,
  showLimitBand: o = !1,
  showInnerBands: s = !1,
  maxPoints: i,
  autoValue: l = !0,
  autoDelta: c = !0,
  autoMetadata: d = !0,
  defaultUnit: u,
  intervalHint: f,
  startDate: h,
  deltaConfig: p,
  ...b
}) => {
  const g = Fg({
    values: e.map((_) => _.value ?? null),
    metricImprovement: t,
    showLimits: a,
    showLimitBand: o,
    showInnerBands: s,
    showMean: n
  }), m = /* @__PURE__ */ r.jsx(oc, { ...g.sparkProps, maxPoints: i }), I = q.useMemo(() => cc({
    values: e.map((_) => typeof _.value == "number" ? _.value : null),
    dates: e.map((_) => _.date),
    intervalHint: f,
    startDate: h,
    providedUnit: b.unit,
    defaultUnit: u,
    autoValue: l,
    autoDelta: c,
    autoMetadata: d,
    deltaConfig: p
  }), [e, f, h, b.unit, u, l, c, d, p]), L = l && I.value != null ? I.value : b.value, $ = c && I.delta ? I.delta : b.delta, N = I.unit || b.unit, x = d && I.metadata ? I.metadata : b.metadata;
  return /* @__PURE__ */ r.jsx(
    Om,
    {
      ...b,
      value: L,
      unit: N,
      delta: $,
      metadata: x,
      visual: m,
      style: g.metricCardStyle
    }
  );
};
function Pg(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function Rg(e = "auto") {
  const [t, n] = Ke.useState(
    !1
  );
  return Ke.useEffect(() => {
    if (e !== "auto" || typeof window > "u" || !window.matchMedia) return;
    const a = window.matchMedia("(prefers-reduced-motion: reduce)"), o = () => n(a.matches);
    return o(), a.addEventListener?.("change", o), () => a.removeEventListener?.("change", o);
  }, [e]), e === "off" ? !1 : t;
}
function Ii(e, t) {
  return t[Math.floor(e() * t.length)];
}
function an(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Bg(e, t) {
  const n = e.seed ?? 1, a = Pg(n), o = Math.max(6, Math.min(48, Math.round(e.density ?? 18))), s = ["circle", "hexagon", "rect"], i = [], l = e.gradients && e.gradients.length > 0 ? e.gradients : [
    "nhs-fdp-gradient-blue",
    "nhs-fdp-gradient-aqua",
    "nhs-fdp-gradient-green"
  ], d = (typeof e.callout.width == "number" ? e.callout.width : void 0) ?? Math.min(520, t * 0.7), u = (t - d) / 2, f = u + d, h = {
    left: u / t * 100,
    right: f / t * 100,
    top: 20,
    bottom: 80
  }, p = (g, m) => !(g > h.left - 6 && g < h.right + 6 && m > h.top - 10 && m < h.bottom + 10);
  let b = 0;
  for (; i.length < o && b < o * 50; ) {
    b++;
    const g = Ii(a, s), m = an(a() * 1, 0.15, 0.95), I = 24 + a() * 72, L = a() * 100, $ = a() * 100;
    if (!p(L, $)) continue;
    const N = Ii(a, l);
    if (g === "rect") {
      const x = 0.6 + a() * 0.8;
      i.push({
        kind: g,
        width: I * x,
        height: I,
        x: L,
        y: $,
        depth: m,
        fillToken: N,
        shadow: "soft"
      });
    } else
      i.push({
        kind: g,
        size: I,
        x: L,
        y: $,
        depth: m,
        fillToken: N,
        shadow: "soft"
      });
  }
  return i;
}
const w1 = (e) => {
  const {
    seed: t = 1,
    mode: n = "scroll",
    axis: a = "xy",
    height: o = 520,
    strength: s = 120,
    scrub: i = 0.3,
    scrollStart: l = "top bottom",
    scrollEnd: c = "bottom top",
    debugMarkers: d = !1,
    pin: u = !1,
    pinSpacing: f = !0,
    reducedMotion: h = "auto",
    callout: p,
    className: b,
    style: g
  } = e, m = Ke.useRef(null), [I, L] = Ke.useState({
    w: 1e3,
    h: 520
  }), $ = Rg(h), N = e.direction ?? "se", x = Ke.useMemo(() => {
    switch (N) {
      case "ne":
        return { x: 1, y: -1 };
      case "nw":
        return { x: -1, y: -1 };
      case "sw":
        return { x: -1, y: 1 };
      case "se":
      default:
        return { x: 1, y: 1 };
    }
  }, [N]);
  Ke.useLayoutEffect(() => {
    if (!m.current) return;
    const P = new ResizeObserver((k) => {
      for (const S of k) {
        const E = S.contentRect;
        L({ w: E.width, h: E.height });
      }
    });
    return P.observe(m.current), () => P.disconnect();
  }, []);
  const _ = Ke.useMemo(() => e.shapes && e.shapes.length ? e.shapes : Bg(e, I.w), [t, I.w, I.h]), [M, w] = Ke.useState(0), [y, v] = Ke.useState(null);
  Ke.useEffect(() => {
    if (n !== "scroll" || $) return;
    let P;
    return (async () => {
      if (typeof window > "u") return;
      const k = m.current;
      if (k)
        try {
          const S = await import("./index-C_MjGuuK.js"), E = await import("./ScrollTrigger-7ivQEezo.js"), F = S.default ?? S.gsap ?? S, z = E.ScrollTrigger ?? E.default ?? E;
          F.registerPlugin(z);
          const J = z.create({
            trigger: k,
            start: l,
            end: c,
            markers: d,
            pin: u,
            pinSpacing: f,
            scrub: i,
            invalidateOnRefresh: !0,
            onUpdate: (H) => w(H.progress)
          });
          v((H) => H === null ? J.progress ?? 0.5 : H), d && window && (window.__parallaxRefresh = () => {
            try {
              z.refresh();
            } catch {
            }
          }), P = () => {
            try {
              J.kill();
            } catch {
            }
          };
        } catch {
          const E = () => {
            const F = k.getBoundingClientRect(), z = window.innerHeight || document.documentElement.clientHeight, J = F.height + z, H = z - F.top, O = an(H / J, 0, 1);
            v((W) => W === null ? O : W), w(O);
          };
          E(), window.addEventListener("scroll", E, { passive: !0 }), window.addEventListener("resize", E), P = () => {
            window.removeEventListener("scroll", E), window.removeEventListener("resize", E);
          };
        }
    })(), () => {
      P && P();
    };
  }, [n, $, l, c, d, u, f, i]), Ke.useEffect(() => {
    if (n !== "timed" || $) return;
    let P = 0, k = performance.now();
    const S = 8e3, E = (F) => {
      const J = (F - k) % S / S;
      w(J), P = requestAnimationFrame(E);
    };
    return P = requestAnimationFrame(E), () => cancelAnimationFrame(P);
  }, [n, $]);
  const j = (P) => 0.15 + (P ?? 0.5) * 0.6, T = {
    position: "absolute",
    left: "50%",
    top: "50%",
    bottom: void 0,
    right: void 0,
    transform: "translate(-50%, -50%)",
    width: typeof p.width == "number" ? `${p.width}px` : p.width || "min(520px, 70%)"
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: m,
      className: ["nhs-parallax-scene", b].filter(Boolean).join(" "),
      style: {
        position: "relative",
        height: typeof o == "number" ? `${o}px` : o,
        overflow: "hidden",
        ...g
      },
      "aria-hidden": !0,
      children: [
        /* @__PURE__ */ r.jsxs(
          "svg",
          {
            className: "nhs-parallax-canvas",
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            "aria-hidden": !0,
            children: [
              /* @__PURE__ */ r.jsxs("defs", { children: [
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-blue", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#2E61A5" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#1B3E73" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-aqua", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#1DC6D2" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#117E8A" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-green", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#2BC06A" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#1A874A" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-dark-blue", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#005eb8" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#003087" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-light-blue", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#005eb8" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#60b2e2" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-purple", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#ac98cb" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#d6cce3" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-green-palette", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#007f3b" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#63a691" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-grey", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#4c6272" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#768692" })
                ] })
              ] }),
              /* @__PURE__ */ r.jsx("g", { className: "nhs-parallax-connectors", children: _.map((P, k) => {
                const S = P.x, E = P.y, F = (P.width ?? P.size ?? 40) / I.w * 100 * 1, z = (P.height ?? P.size ?? 40) / I.h * 100 * 1, J = P.kind === "circle" ? [
                  [S, E - z / 2],
                  [S + F / 2, E],
                  [S, E + z / 2],
                  [S - F / 2, E]
                ] : P.kind === "rect" || P.kind === "svg" ? [
                  [S - F / 2, E - z / 2],
                  [S + F / 2, E - z / 2],
                  [S + F / 2, E + z / 2],
                  [S - F / 2, E + z / 2]
                ] : (
                  // hexagon approx points
                  [
                    [S - F / 2, E],
                    [S - F / 4, E - z / 2],
                    [S + F / 4, E - z / 2],
                    [S + F / 2, E],
                    [S + F / 4, E + z / 2],
                    [S - F / 4, E + z / 2]
                  ]
                ), H = j(P.depth), B = (u ? M : M - (y ?? 0.5)) * s * H, ee = a === "x" ? B : a === "xy" ? B * x.x : 0, R = a === "y" ? B : a === "xy" ? B * x.y : 0;
                return J.map((ne, te) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: an(ne[0] + ee, 0, 100),
                    y1: an(ne[1] + R, 0, 100),
                    x2: an(50 + ee * 0.2, 0, 100),
                    y2: an(50 + R * 0.2, 0, 100),
                    className: "nhs-parallax-connector"
                  },
                  `c-${k}-${te}`
                ));
              }) }),
              /* @__PURE__ */ r.jsx("g", { className: "nhs-parallax-shapes", children: _.map((P, k) => {
                const S = j(P.depth), z = (u ? M : M - (y ?? 0.5)) * s * S, J = a === "x" ? z : a === "xy" ? z * x.x : 0, H = a === "y" ? z : a === "xy" ? z * x.y : 0, O = an(P.x + J, 0, 100), W = an(P.y + H, 0, 100), B = P.rotate ?? 0, ee = [
                  "nhs-parallax-shape",
                  P.fillToken,
                  P.shadow && `nhs-parallax-shadow--${P.shadow}`
                ].filter(Boolean).join(" ");
                if (P.kind === "circle") {
                  const Z = (P.size ?? 40) / I.w * 100 * 0.5;
                  return /* @__PURE__ */ r.jsx("circle", { cx: O, cy: W, r: Z, className: ee }, k);
                }
                if (P.kind === "rect") {
                  const Z = (P.width ?? 48) / I.w * 100, X = (P.height ?? 36) / I.h * 100;
                  return /* @__PURE__ */ r.jsx(
                    "rect",
                    {
                      x: O - Z / 2,
                      y: W - X / 2,
                      width: Z,
                      height: X,
                      transform: `rotate(${B} ${O} ${W})`,
                      className: ee
                    },
                    k
                  );
                }
                if (P.kind === "svg" && P.src) {
                  const Z = (P.width ?? 48) / I.w * 100, X = (P.height ?? 48) / I.h * 100;
                  return /* @__PURE__ */ r.jsx(
                    "image",
                    {
                      href: P.src,
                      x: O - Z / 2,
                      y: W - X / 2,
                      width: Z,
                      height: X,
                      preserveAspectRatio: "xMidYMid meet",
                      transform: `rotate(${B} ${O} ${W})`,
                      className: ee
                    },
                    k
                  );
                }
                const R = (P.size ?? 40) / I.w * 100, ne = R * 0.866, te = [
                  [O - R / 2, W],
                  [O - R / 4, W - ne / 2],
                  [O + R / 4, W - ne / 2],
                  [O + R / 2, W],
                  [O + R / 4, W + ne / 2],
                  [O - R / 4, W + ne / 2]
                ].map((Z) => Z.join(",")).join(" ");
                return /* @__PURE__ */ r.jsx("polygon", { points: te, className: ee }, k);
              }) })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhs-parallax-callout",
            style: T,
            "aria-hidden": !1,
            children: /* @__PURE__ */ r.jsxs(
              "div",
              {
                className: ["nhs-parallax-callout-inner", p.backgroundToken].filter(Boolean).join(" "),
                children: [
                  " ",
                  p.content,
                  " "
                ]
              }
            )
          }
        )
      ]
    }
  );
};
function Hg(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function ct(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function zg(e, t, n, a, o, s, i, l, c, d, u, f) {
  const h = Hg(e), p = [], b = [], g = ["rect", "hex", "circle"], m = { x: 50, y: 50 }, I = a, L = 1200, $ = 400, N = 1.2, x = {
    left: m.x - I.w / 2,
    right: m.x + I.w / 2,
    top: m.y - I.h / 2,
    bottom: m.y + I.h / 2
  }, _ = !c && !!u && u.r > 0, M = !c && !!f && (f.rx > 0 || f.ry > 0), w = (E, F) => {
    if (!_) return !1;
    const z = E - m.x, J = F - m.y;
    return z * z + J * J <= u.r * u.r;
  }, y = (E, F) => {
    if (!M) return !1;
    const z = Math.max(1e-6, f.rx || 0), J = Math.max(1e-6, f.ry || 0), H = (E - m.x) / z, O = (F - m.y) / J;
    return H * H + O * O <= 1;
  }, v = (E, F) => !(E.right < F.left || E.left > F.right || E.bottom < F.top || E.top > F.bottom), j = (E) => E.left >= 0 && E.top >= 0 && E.right <= 100 && E.bottom <= 100, T = (E, F, z, J, H, O) => {
    let W = 0, B = 0;
    if (E === "rect") {
      const ee = J ?? 48, R = H ?? 36;
      W = ee / L * 100, B = R / $ * 100;
    } else if (E === "circle") {
      const ee = O ?? 40;
      W = ee / L * 100, B = ee / $ * 100;
    } else {
      const ee = O ?? 40;
      W = ee / L * 100, B = ee * s / $ * 100;
    }
    return {
      left: F - W / 2 - N,
      right: F + W / 2 + N,
      top: z - B / 2 - N,
      bottom: z + B / 2 + N
    };
  };
  let P = 0;
  const k = ct(Math.round(t), 4, 48);
  let S = null;
  if (d) {
    const E = Math.ceil(Math.sqrt(k)), F = Math.ceil(k / E);
    S = [];
    for (let z = 0; z < F; z++)
      for (let J = 0; J < E && !(S.length >= k); J++) {
        const H = (J + 0.5) / E * 100, O = (z + 0.5) / F * 100;
        S.push({ x: H, y: O });
      }
  }
  for (; p.length < k && P < k * 120; ) {
    P++;
    const E = g[Math.floor(h() * g.length)];
    let F, z;
    if (d && S && S.length) {
      const W = p.length % S.length;
      F = S[W].x, z = S[W].y;
    } else {
      const W = ct(o ?? 0, 0, 1), B = () => h() * 100, ee = () => {
        const ne = Math.max(h(), 1e-6), te = Math.max(h(), 1e-6), Z = Math.sqrt(-2 * Math.log(ne)), X = 2 * Math.PI * te;
        return 50 + Z * Math.cos(X) * 12.5;
      }, R = (ne, te, Z) => ne * (1 - Z) + te * Z;
      F = ct(R(B(), ee(), W), 0, 100), z = ct(R(B(), ee(), W), 0, 100);
    }
    const J = T(E, F, z, 32, 24, 28);
    if (!j(J)) continue;
    const H = ct(h(), 0.15, 0.95), O = 0;
    if (E === "rect") {
      const W = 40 + h() * 80, B = 28 + h() * 64, ee = T(E, F, z, W, B);
      if (!c && (v(ee, x) || w(F, z) || y(F, z)))
        continue;
      if (!i) {
        let ne = !1;
        for (let te = 0; te < b.length; te++)
          if (v(ee, b[te])) {
            ne = !0;
            break;
          }
        if (ne) continue;
      }
      let R;
      if (i) {
        const ne = /* @__PURE__ */ new Set();
        for (let Z = 0; Z < b.length; Z++)
          if (v(ee, b[Z])) {
            const X = p[Z].fill;
            X && ne.add(X);
          }
        const te = n.filter((Z) => !ne.has(Z));
        if (te.length === 0) {
          if (l === "skip") continue;
          R = n[Math.floor(h() * n.length)];
        } else
          R = te[Math.floor(h() * te.length)];
      } else
        R = n[Math.floor(h() * n.length)];
      b.push(ee), p.push({ kind: E, x: F, y: z, width: W, height: B, rotate: O, depth: H, fill: R, shadow: "soft" });
    } else if (E === "circle") {
      const W = 24 + h() * 80, B = T(E, F, z, void 0, void 0, W);
      if (!c && (v(B, x) || w(F, z) || y(F, z)))
        continue;
      if (!i) {
        let R = !1;
        for (let ne = 0; ne < b.length; ne++)
          if (v(B, b[ne])) {
            R = !0;
            break;
          }
        if (R) continue;
      }
      let ee;
      if (i) {
        const R = /* @__PURE__ */ new Set();
        for (let te = 0; te < b.length; te++)
          if (v(B, b[te])) {
            const Z = p[te].fill;
            Z && R.add(Z);
          }
        const ne = n.filter((te) => !R.has(te));
        if (ne.length === 0) {
          if (l === "skip") continue;
          ee = n[Math.floor(h() * n.length)];
        } else
          ee = ne[Math.floor(h() * ne.length)];
      } else
        ee = n[Math.floor(h() * n.length)];
      b.push(B), p.push({ kind: E, x: F, y: z, size: W, rotate: O, depth: H, fill: ee, shadow: "soft" });
    } else {
      const W = 28 + h() * 72, B = T(E, F, z, void 0, void 0, W);
      if (!c && (v(B, x) || w(F, z) || y(F, z)))
        continue;
      if (!i) {
        let R = !1;
        for (let ne = 0; ne < b.length; ne++)
          if (v(B, b[ne])) {
            R = !0;
            break;
          }
        if (R) continue;
      }
      let ee;
      if (i) {
        const R = /* @__PURE__ */ new Set();
        for (let te = 0; te < b.length; te++)
          if (v(B, b[te])) {
            const Z = p[te].fill;
            Z && R.add(Z);
          }
        const ne = n.filter((te) => !R.has(te));
        if (ne.length === 0) {
          if (l === "skip") continue;
          ee = n[Math.floor(h() * n.length)];
        } else
          ee = ne[Math.floor(h() * ne.length)];
      } else
        ee = n[Math.floor(h() * n.length)];
      b.push(B), p.push({ kind: E, x: F, y: z, size: W, rotate: O, depth: H, fill: ee, shadow: "soft" });
    }
  }
  return p;
}
const S1 = ({
  seed: e = 1,
  width: t = "100%",
  height: n = 400,
  density: a = 16,
  centrality: o = 0,
  gradients: s = [
    "pb-grad-aqua-green",
    "pb-grad-purple",
    "pb-grad-blue",
    "pb-grad-grey",
    "pb-grad-azure"
  ],
  shapes: i,
  neighbors: l = 1,
  connectorColor: c,
  connectorWidth: d,
  connectorDasharray: u,
  hexAspectRatio: f = Math.sqrt(3) / 2,
  allowOverlaps: h = !1,
  overlapColorPolicy: p = "recolor",
  feature: b,
  featureWidth: g = "min(640px, 80%)",
  featureLayer: m = "over",
  excludeBoxPct: I = { w: 50, h: 36 },
  excludeCirclePct: L,
  excludeEllipsePct: $,
  uniformDistribution: N = !1,
  className: x,
  style: _
}) => {
  const M = Ke.useRef(null), [w, y] = Ke.useState({ w: 1200, h: 400 });
  Ke.useLayoutEffect(() => {
    if (!M.current) return;
    const S = new ResizeObserver((E) => {
      for (const F of E) {
        const z = F.contentRect;
        y({ w: z.width, h: z.height });
      }
    });
    return S.observe(M.current), () => S.disconnect();
  }, []);
  const v = Ke.useMemo(() => i?.length ? i : zg(
    e,
    a,
    s,
    I,
    o,
    f,
    h,
    p,
    m === "over" || N,
    N,
    L,
    $
  ), [
    e,
    a,
    s.join(","),
    I.w,
    I.h,
    o,
    f,
    h,
    p,
    m,
    N,
    L?.r,
    $?.rx,
    $?.ry,
    i
  ]), j = 100, T = 100, P = Math.sqrt(3) / 2, k = (S, E, F) => {
    const z = (F ?? 40) / 2, J = S / 100 * w.w, H = E / 100 * w.h, O = f / P;
    return [Math.PI, 2 * Math.PI / 3, Math.PI / 3, 0, -Math.PI / 3, -(2 * Math.PI) / 3].map((B) => {
      const ee = J + z * Math.cos(B), R = H + z * Math.sin(B) * O;
      return [ct(ee / w.w * 100, 0, 100), ct(R / w.h * 100, 0, 100)];
    });
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: M,
      className: [
        "nhs-pattern-banner",
        m === "under" ? "nhs-pattern-banner--feature-under" : "nhs-pattern-banner--feature-over",
        x
      ].filter(Boolean).join(" "),
      style: {
        width: typeof t == "number" ? `${t}px` : t,
        height: typeof n == "number" ? `${n}px` : n,
        ..._
      },
      "aria-hidden": !0,
      children: [
        /* @__PURE__ */ r.jsxs(
          "svg",
          {
            className: "nhs-pattern-banner__svg",
            viewBox: `0 0 ${j} ${T}`,
            preserveAspectRatio: "none",
            "aria-hidden": !0,
            children: [
              /* @__PURE__ */ r.jsxs("defs", { children: [
                /* @__PURE__ */ r.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-aqua-green",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(0, 163, 151)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(11, 148, 71)" })
                    ]
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-purple",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "0",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(214, 203, 226)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "0.72", stopColor: "rgb(192, 177, 213)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(171, 151, 199)" })
                    ]
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-blue",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(38, 58, 127)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(34, 94, 171)" })
                    ]
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-grey",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(66, 85, 101)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(112, 132, 147)" })
                    ]
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-azure",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(96, 178, 226)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "0.51", stopColor: "rgb(34, 94, 172)" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsx("g", { children: (() => {
                const S = (W) => W / w.w * 100, E = (W) => W / w.h * 100, F = v.map((W) => {
                  const B = ct(W.x, 0, 100), ee = ct(W.y, 0, 100);
                  if (W.kind === "circle") return [[B, ee]];
                  if (W.kind === "rect") {
                    const R = S(W.width ?? 48), ne = E(W.height ?? 36);
                    return [
                      [B - R / 2, ee - ne / 2],
                      [B + R / 2, ee - ne / 2],
                      [B + R / 2, ee + ne / 2],
                      [B - R / 2, ee + ne / 2]
                    ];
                  }
                  if (W.kind === "svg") {
                    const R = S(W.width ?? 48), ne = E(W.height ?? 48);
                    return [
                      [B - R / 2, ee - ne / 2],
                      [B + R / 2, ee - ne / 2],
                      [B + R / 2, ee + ne / 2],
                      [B - R / 2, ee + ne / 2]
                    ];
                  }
                  return k(B, ee, W.size ?? 40);
                }), z = Math.max(1, Math.floor(l ?? 1)), J = /* @__PURE__ */ new Set(), H = [];
                for (let W = 0; W < v.length; W++) {
                  const B = [];
                  for (let R = 0; R < v.length; R++) {
                    if (W === R) continue;
                    const ne = v[W].x - v[R].x, te = v[W].y - v[R].y;
                    B.push({ j: R, d2: ne * ne + te * te });
                  }
                  B.sort((R, ne) => R.d2 - ne.d2);
                  const ee = Math.min(z, B.length);
                  for (let R = 0; R < ee; R++) {
                    const ne = B[R].j, te = Math.min(W, ne), Z = Math.max(W, ne), X = `${te}-${Z}`;
                    J.has(X) || (J.add(X), H.push([te, Z]));
                  }
                }
                const O = [];
                for (const [W, B] of H) {
                  const ee = F[W], R = F[B];
                  let ne = null;
                  for (const te of ee)
                    for (const Z of R) {
                      const X = te[0] - Z[0], re = te[1] - Z[1], de = X * X + re * re;
                      (!ne || de < ne.d2) && (ne = { p: te, q: Z, d2: de });
                    }
                  ne && O.push(
                    /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        x1: ct(ne.p[0], 0, 100),
                        y1: ct(ne.p[1], 0, 100),
                        x2: ct(ne.q[0], 0, 100),
                        y2: ct(ne.q[1], 0, 100),
                        className: "nhs-pattern-banner-connector",
                        style: {
                          stroke: c,
                          strokeWidth: d,
                          strokeDasharray: u
                        }
                      },
                      `nn-line-${W}-${B}`
                    )
                  );
                }
                return O;
              })() }),
              /* @__PURE__ */ r.jsx("g", { children: v.map((S, E) => {
                const F = ["nhs-pattern-banner-shape", S.fill].filter(Boolean).join(" ");
                if (S.kind === "circle") {
                  const W = (S.size ?? 40) / w.w * 100 * 0.5, B = w.w / w.h, ee = W * B;
                  return /* @__PURE__ */ r.jsx(
                    "ellipse",
                    {
                      cx: ct(S.x, 0, 100),
                      cy: ct(S.y, 0, 100),
                      rx: W,
                      ry: ee,
                      className: F
                    },
                    E
                  );
                }
                if (S.kind === "rect") {
                  const W = (S.width ?? 48) / w.w * 100, B = (S.height ?? 36) / w.h * 100, ee = ct(S.x - W / 2, 0, 100), R = ct(S.y - B / 2, 0, 100);
                  return /* @__PURE__ */ r.jsx(
                    "rect",
                    {
                      x: ee,
                      y: R,
                      width: W,
                      height: B,
                      className: F
                    },
                    E
                  );
                }
                if (S.kind === "svg" && S.src) {
                  const W = (S.width ?? 48) / w.w * 100, B = (S.height ?? 48) / w.h * 100, ee = ct(S.x - W / 2, 0, 100), R = ct(S.y - B / 2, 0, 100);
                  return /* @__PURE__ */ r.jsx(
                    "image",
                    {
                      href: S.src,
                      x: ee,
                      y: R,
                      width: W,
                      height: B,
                      preserveAspectRatio: "xMidYMid meet",
                      className: F
                    },
                    E
                  );
                }
                const z = ct(S.x, 0, 100), J = ct(S.y, 0, 100), O = k(z, J, S.size ?? 40).map((W) => W.join(",")).join(" ");
                return /* @__PURE__ */ r.jsx("polygon", { points: O, className: F }, E);
              }) })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhs-pattern-banner__feature",
            style: {
              width: typeof g == "number" ? `${g}px` : g
            },
            children: b
          }
        )
      ]
    }
  );
}, Og = "150ms", Ug = "300ms", Wg = "500ms", Gg = "cubic-bezier(0.4, 0, 1, 1)", Yg = "cubic-bezier(0, 0, 0.2, 1)", Vg = "cubic-bezier(0.4, 0, 0.2, 1)", Zg = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", qg = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Jg = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Xg = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Kg = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Qg = "1px", e0 = "2px", t0 = "4px", n0 = "4px", r0 = "4px", a0 = "2px", o0 = "1px", s0 = "0px", i0 = "4px", l0 = "8px", c0 = "12px", uc = "#d8dde0", fc = "#4c6272", hc = "#d8dde0", pc = "#aeb7bd", mc = "#d5281b", gc = "#005eb8", xc = "#ffffff", bc = "#212b32", yc = "#007f3b", vc = "#330072", wc = "#7c2855", Sc = "#d5281b", _c = "#ffeb3b", kc = "#fff9c4", Cc = "#ffb81c", Nc = "#ed8b00", jc = "#00a499", Mc = "#ae2573", Ic = "#4c6272", Dc = "#768692", Tc = "#aeb7bd", Lc = "#d8dde0", $c = "#f0f4f5", d0 = "#212b32", u0 = "#4c6272", f0 = "#ffffff", h0 = "#212b32", p0 = "#005eb8", m0 = "#7c2855", g0 = "#003087", x0 = "#330072", b0 = "#ffeb3b", y0 = "#212b32", v0 = "#d8dde0", w0 = "#ffffff33", S0 = "#d5281b", _0 = "#4c6272", k0 = "#ffffff", C0 = "#007f3b", N0 = "#ffffff", j0 = "#006530", M0 = "#004021", I0 = "#004021", D0 = "#00000000", T0 = "#ffffff", L0 = "#005eb8", $0 = "#005eb8", A0 = "#d9e5f2", E0 = "#c7daf0", F0 = "#005eb8", P0 = "#ffffff", R0 = "#212b32", B0 = "#d9dde0", H0 = "#b3bcc2", z0 = "#b3bcc2", O0 = "#d5281b", U0 = "#aa2016", W0 = "#6a140e", G0 = "#6a140e", Y0 = "#005eb8", V0 = "#004b93", Z0 = "#002f5c", q0 = "#002f5c", J0 = "8px", X0 = "16px", K0 = "12px", Q0 = "16px", ex = "4px", tx = "40px", nx = "4px", rx = "40px", ax = "12px", ox = "16px", sx = "32px", ix = "16px", lx = "20px", cx = "28px", dx = "9px", ux = "2px", fx = "16px", hx = "24px", px = "8px", mx = "24px", gx = "16px", xx = "4px", bx = "4px", yx = "4px", vx = "8px", wx = "4px", Sx = "16px", _x = "#007f3b", kx = "#006530", Cx = "#004021", Nx = "#d8dde0", jx = "#ffffff", Mx = "#768692", Ix = "#00000000", Dx = "#ffeb3b", Tx = "#00000000", Lx = "#ffffff", $x = "#d9e5f2", Ax = "#c7daf0", Ex = "#005eb8", Fx = "#005eb8", Ac = "8px", Ec = "16px", Fc = "12px", Pc = "16px", Px = "2px", Rx = "4px", Bx = "4px", Hx = "600", zx = "#ffffff", Ox = "#d8dde0", Ux = "#aeb7bd", Wx = "#f0f4f5", Gx = "#212b32", Yx = "#212b32", Vx = "#005eb8", Rc = "16px", Bc = "32px", Hc = "16px", Zx = "1px", qx = "4px", Jx = "none", Xx = "0 2px 4px rgba(0, 0, 0, 0.1)", Kx = "#ffffff", Qx = "#ffffff", eb = "#d8dde0", tb = "#ffffff", nb = "#4c6272", rb = "#ffeb3b", ab = "#d5281b", ob = "#aeb7bd", sb = "#212b32", ib = "#4c6272", lb = "#768692", cb = "#212b32", db = "#ffffff", ub = "600", fb = "#d5281b", hb = "600", pb = "#4c6272", zc = "4px", Oc = "40px", Uc = "40px", Wc = "12px", mb = "2px", gb = "4px", xb = "0px", bb = "16px", yb = "18px", vb = "24px", wb = "32px", Sb = "34px", _b = "32px", kb = "40px", Cb = "48px", Nb = "5.4ex", jb = "7.2ex", Mb = "9ex", Ib = "10.8ex", Db = "20ex", Tb = "38ex", Lb = "56ex", $b = "44px", Ab = "40px", Eb = "1020px", Fb = "100%", Pb = "50%", Rb = "33.333%", Bb = "25%", Hb = "20%", zb = "320px", Ob = "641px", Ub = "1025px", Wb = "1280px", Gb = "960px", Yb = "32px", Vb = "16px", Zb = "#d5281b", qb = "#d5281b", Jb = "#ffffff", Xb = "#007f3b", Kb = "#007f3b", Qb = "#ffffff", ey = "#ffeb3b", ty = "#ffeb3b", ny = "#212b32", ry = "#005eb8", ay = "#005eb8", oy = "#ffffff", sy = "#d8dde0", iy = "#aeb7bd", ly = "#768692", cy = "0 4px 0 #004021", dy = "0 4px 0 #005eb8", uy = "0 4px 0 #6a140e", fy = "0 4px 0 #ffeb3b", hy = "none", py = "0 2px 4px rgba(0, 0, 0, 0.1)", my = "4px", gy = "0px", xy = "solid", by = "0 0 0 3px #ffeb3b", yy = "0 0 0 3px #ffeb3b", vy = "none", wy = "0 1px 3px rgba(0, 0, 0, 0.12)", Sy = "0 2px 6px rgba(0, 0, 0, 0.16)", _y = "0 4px 12px rgba(0, 0, 0, 0.20)", Gc = "0", Yc = "4px", Vc = "8px", Zc = "16px", qc = "24px", Jc = "32px", Xc = "40px", Kc = "48px", Qc = "56px", ed = "64px", vo = "0", wo = "0", So = "4px", _o = "4px", ko = "8px", Co = "8px", No = "8px", jo = "16px", Mo = "16px", Io = "24px", Do = "24px", To = "32px", Lo = "32px", $o = "40px", Ao = "40px", Eo = "48px", Fo = "48px", Po = "56px", Ro = "56px", Bo = "64px", Vr = "Frutiger W01", Zr = "Arial, Helvetica, sans-serif", qr = "sans-serif", Jr = "400", Xr = "600", Kr = "400", Qr = "12px", ea = "14px", ta = "12pt", na = "14px", ra = "16px", aa = "12pt", oa = "16px", sa = "19px", ia = "13pt", la = "19px", ca = "22px", da = "15pt", ua = "22px", fa = "26px", ha = "17pt", pa = "27px", ma = "36px", ga = "20pt", xa = "33px", ba = "48px", ya = "24pt", Ho = "16px", zo = "24px", Bt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ht = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, zt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ot = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ut = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Gt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Yt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Vt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Zt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, ky = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Og,
  AnimationDurationNormal: Ug,
  AnimationDurationSlow: Wg,
  AnimationEasingBounce: Zg,
  AnimationEasingEaseIn: Gg,
  AnimationEasingEaseInOut: Vg,
  AnimationEasingEaseOut: Yg,
  BorderColorCard: hc,
  BorderColorCardHover: pc,
  BorderColorDefault: uc,
  BorderColorError: mc,
  BorderColorForm: fc,
  BorderRadiusLarge: c0,
  BorderRadiusMedium: l0,
  BorderRadiusNone: s0,
  BorderRadiusSmall: i0,
  BorderWidthCardBottom: n0,
  BorderWidthDefault: Qg,
  BorderWidthFormElement: e0,
  BorderWidthFormElementError: t0,
  BorderWidthPanel: r0,
  BorderWidthTableCell: o0,
  BorderWidthTableHeader: a0,
  BreakpointDesktop: Ub,
  BreakpointLargeDesktop: Wb,
  BreakpointMobile: zb,
  BreakpointTablet: Ob,
  ButtonBorderRadius: Rx,
  ButtonBorderWidth: Px,
  ButtonPrimaryBackgroundActive: Cx,
  ButtonPrimaryBackgroundDefault: _x,
  ButtonPrimaryBackgroundDisabled: Nx,
  ButtonPrimaryBackgroundHover: kx,
  ButtonPrimaryBorderDefault: Ix,
  ButtonPrimaryBorderFocus: Dx,
  ButtonPrimaryTextDefault: jx,
  ButtonPrimaryTextDisabled: Mx,
  ButtonSecondaryBackgroundActive: Ax,
  ButtonSecondaryBackgroundDefault: Tx,
  ButtonSecondaryBackgroundHover: $x,
  ButtonSecondaryBackgroundSolid: Lx,
  ButtonSecondaryBorderDefault: Fx,
  ButtonSecondaryTextDefault: Ex,
  ButtonShadowSize: Bx,
  ButtonSpacingPaddingHorizontalDesktop: Pc,
  ButtonSpacingPaddingHorizontalMobile: Ec,
  ButtonSpacingPaddingVerticalDesktop: Fc,
  ButtonSpacingPaddingVerticalMobile: Ac,
  ButtonTypographyWeight: Hx,
  CardBackgroundDefault: zx,
  CardBorderBottom: Wx,
  CardBorderDefault: Ox,
  CardBorderHover: Ux,
  CardBorderWidthBottom: qx,
  CardBorderWidthDefault: Zx,
  CardShadowDefault: Jx,
  CardShadowHover: Xx,
  CardSpacingHeadingMargin: Hc,
  CardSpacingPaddingDesktop: Bc,
  CardSpacingPaddingMobile: Rc,
  CardTextDescription: Yx,
  CardTextHeading: Gx,
  CardTextLink: Vx,
  ColorBorderDefault: v0,
  ColorBorderSecondary: w0,
  ColorButtonLoginActive: Z0,
  ColorButtonLoginBackground: Y0,
  ColorButtonLoginHover: V0,
  ColorButtonLoginShadow: q0,
  ColorButtonPrimaryActive: M0,
  ColorButtonPrimaryBackground: C0,
  ColorButtonPrimaryHover: j0,
  ColorButtonPrimaryShadow: I0,
  ColorButtonPrimaryText: N0,
  ColorButtonReverseActive: H0,
  ColorButtonReverseBackground: P0,
  ColorButtonReverseHover: B0,
  ColorButtonReverseShadow: z0,
  ColorButtonReverseText: R0,
  ColorButtonSecondaryActive: E0,
  ColorButtonSecondaryBackground: D0,
  ColorButtonSecondaryBackgroundSolid: T0,
  ColorButtonSecondaryBorder: L0,
  ColorButtonSecondaryHover: A0,
  ColorButtonSecondaryShadow: F0,
  ColorButtonSecondaryText: $0,
  ColorButtonWarningActive: W0,
  ColorButtonWarningBackground: O0,
  ColorButtonWarningHover: U0,
  ColorButtonWarningShadow: G0,
  ColorError: S0,
  ColorFocusBackground: b0,
  ColorFocusText: y0,
  ColorFormBackground: k0,
  ColorFormBorder: _0,
  ColorGrey1: Ic,
  ColorGrey2: Dc,
  ColorGrey3: Tc,
  ColorGrey4: Lc,
  ColorGrey5: $c,
  ColorLinkActive: g0,
  ColorLinkDefault: p0,
  ColorLinkHover: m0,
  ColorLinkVisited: x0,
  ColorPrimaryBlack: bc,
  ColorPrimaryBlue: gc,
  ColorPrimaryDarkPink: wc,
  ColorPrimaryGreen: yc,
  ColorPrimaryPurple: vc,
  ColorPrimaryRed: Sc,
  ColorPrimaryWhite: xc,
  ColorPrimaryYellow: _c,
  ColorSecondaryAquaGreen: jc,
  ColorSecondaryOrange: Nc,
  ColorSecondaryPaleYellow: kc,
  ColorSecondaryPink: Mc,
  ColorSecondaryWarmYellow: Cc,
  ColorTextPrimary: d0,
  ColorTextPrint: h0,
  ColorTextReverse: f0,
  ColorTextSecondary: u0,
  ComponentBlur: bx,
  ComponentBreadcrumbChevronMarginLeft: dx,
  ComponentBreadcrumbChevronMarginRight: ux,
  ComponentBreadcrumbPaddingTopDesktop: hx,
  ComponentBreadcrumbPaddingTopMobile: fx,
  ComponentButtonPaddingDesktopHorizontal: Q0,
  ComponentButtonPaddingDesktopVertical: K0,
  ComponentButtonPaddingMobileHorizontal: X0,
  ComponentButtonPaddingMobileVertical: J0,
  ComponentButtonShadowSize: ex,
  ComponentCardHeadingMargin: ix,
  ComponentCardPaddingDesktop: sx,
  ComponentCardPaddingMobile: ox,
  ComponentDetails: vx,
  ComponentExpander: wx,
  ComponentFormCheckboxLabelPadding: ax,
  ComponentFormCheckboxSize: rx,
  ComponentFormInputMinHeight: tx,
  ComponentFormInputPadding: nx,
  ComponentLink: yx,
  ComponentPagination: Sx,
  ComponentPanelPaddingDesktop: cx,
  ComponentPanelPaddingMobile: lx,
  ComponentSpread: xx,
  ComponentSummaryListCellPaddingHorizontal: mx,
  ComponentSummaryListCellPaddingVertical: px,
  ComponentSummaryListRowMargin: gx,
  ElevationHigh: _y,
  ElevationLow: wy,
  ElevationMedium: Sy,
  ElevationNone: vy,
  FocusOutlineOffset: gy,
  FocusOutlineStyle: xy,
  FocusOutlineWidth: my,
  FocusShadowButton: yy,
  FocusShadowInput: by,
  FontFamilyBase: Vr,
  FontFamilyFallback: Zr,
  FontFamilyPrint: qr,
  FontLineHeightBase: zo,
  FontSize14Mobile: Qr,
  FontSize14Print: ta,
  FontSize14Tablet: ea,
  FontSize16Mobile: na,
  FontSize16Print: aa,
  FontSize16Tablet: ra,
  FontSize19Mobile: oa,
  FontSize19Print: ia,
  FontSize19Tablet: sa,
  FontSize22Mobile: la,
  FontSize22Print: da,
  FontSize22Tablet: ca,
  FontSize26Mobile: ua,
  FontSize26Print: ha,
  FontSize26Tablet: fa,
  FontSize36Mobile: pa,
  FontSize36Print: ga,
  FontSize36Tablet: ma,
  FontSize48Mobile: xa,
  FontSize48Print: ya,
  FontSize48Tablet: ba,
  FontSizeBase: Ho,
  FontWeightBold: Xr,
  FontWeightLight: Kr,
  FontWeightNormal: Jr,
  FormBorderRadius: xb,
  FormBorderWidthDefault: mb,
  FormBorderWidthError: gb,
  FormErrorTextDefault: fb,
  FormErrorTypographyWeight: hb,
  FormHintTextDefault: pb,
  FormInputBackgroundDefault: Kx,
  FormInputBackgroundDisabled: eb,
  FormInputBackgroundError: tb,
  FormInputBackgroundFocus: Qx,
  FormInputBorderDefault: nb,
  FormInputBorderDisabled: ob,
  FormInputBorderError: ab,
  FormInputBorderFocus: rb,
  FormInputTextDefault: sb,
  FormInputTextDisabled: lb,
  FormInputTextPlaceholder: ib,
  FormLabelTextDefault: cb,
  FormLabelTextRequired: db,
  FormLabelTypographyWeight: ub,
  FormSpacingCheckboxLabelPadding: Wc,
  FormSpacingCheckboxSize: Uc,
  FormSpacingInputMinHeight: Oc,
  FormSpacingInputPadding: zc,
  GridGutter: Yb,
  GridGutterHalf: Vb,
  GridPageWidth: Gb,
  HeadingsNhsukHeadingL: Ht,
  HeadingsNhsukHeadingM: zt,
  HeadingsNhsukHeadingS: Ot,
  HeadingsNhsukHeadingXl: Bt,
  HeadingsNhsukHeadingXs: Ut,
  LayoutColumnActions: Hb,
  LayoutColumnFull: Fb,
  LayoutColumnHalf: Pb,
  LayoutColumnQuarter: Bb,
  LayoutColumnThird: Rb,
  LayoutContainerMaxWidth: Eb,
  ParagraphsBody: Wt,
  ParagraphsBodyLarge: Gt,
  ParagraphsBodySmall: Yt,
  ParagraphsLedeText: Vt,
  ParagraphsLedeTextSmall: Zt,
  ShadowButtonDefault: cy,
  ShadowButtonFocus: fy,
  ShadowButtonSecondary: dy,
  ShadowButtonWarning: uy,
  ShadowCardDefault: hy,
  ShadowCardHover: py,
  SizeButtonMinHeightDesktop: Ab,
  SizeButtonMinHeightMobile: $b,
  SizeFormControlLarge: Cb,
  SizeFormControlMedium: kb,
  SizeFormControlSmall: _b,
  SizeFormInputWidth2xl: Tb,
  SizeFormInputWidth3xl: Lb,
  SizeFormInputWidthLg: Ib,
  SizeFormInputWidthMd: Mb,
  SizeFormInputWidthSm: jb,
  SizeFormInputWidthXl: Db,
  SizeFormInputWidthXs: Nb,
  SizeIconExtraLarge: wb,
  SizeIconLarge: vb,
  SizeIconMedium: yb,
  SizeIconNhsDefault: Sb,
  SizeIconSmall: bb,
  Spacing0: Gc,
  Spacing1: Yc,
  Spacing2: Vc,
  Spacing3: Zc,
  Spacing4: qc,
  Spacing5: Jc,
  Spacing6: Xc,
  Spacing7: Kc,
  Spacing8: Qc,
  Spacing9: ed,
  SpacingResponsive0Mobile: vo,
  SpacingResponsive0Tablet: wo,
  SpacingResponsive1Mobile: So,
  SpacingResponsive1Tablet: _o,
  SpacingResponsive2Mobile: ko,
  SpacingResponsive2Tablet: Co,
  SpacingResponsive3Mobile: No,
  SpacingResponsive3Tablet: jo,
  SpacingResponsive4Mobile: Mo,
  SpacingResponsive4Tablet: Io,
  SpacingResponsive5Mobile: Do,
  SpacingResponsive5Tablet: To,
  SpacingResponsive6Mobile: Lo,
  SpacingResponsive6Tablet: $o,
  SpacingResponsive7Mobile: Ao,
  SpacingResponsive7Tablet: Eo,
  SpacingResponsive8Mobile: Fo,
  SpacingResponsive8Tablet: Po,
  SpacingResponsive9Mobile: Ro,
  SpacingResponsive9Tablet: Bo,
  StateDisabledBackground: sy,
  StateDisabledBorder: iy,
  StateDisabledText: ly,
  StateErrorBackground: Zb,
  StateErrorBorder: qb,
  StateErrorText: Jb,
  StateInfoBackground: ry,
  StateInfoBorder: ay,
  StateInfoText: oy,
  StateSuccessBackground: Xb,
  StateSuccessBorder: Kb,
  StateSuccessText: Qb,
  StateWarningBackground: ey,
  StateWarningBorder: ty,
  StateWarningText: ny,
  TransitionButtonDefault: qg,
  TransitionButtonShadow: Jg,
  TransitionCardHover: Kg,
  TransitionInputFocus: Xg
}, Symbol.toStringTag, { value: "Module" })), _1 = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), k1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: Bt.fontFamily,
      fontWeight: Bt.fontWeight,
      fontSize: Bt.fontSize.mobile,
      lineHeight: Bt.lineHeight,
      marginTop: Bt.marginTop,
      marginBottom: Bt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), C1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: Ht.fontFamily,
      fontWeight: Ht.fontWeight,
      fontSize: Ht.fontSize.mobile,
      lineHeight: Ht.lineHeight,
      marginTop: Ht.marginTop,
      marginBottom: Ht.marginBottom.mobile,
      ...n
    },
    children: e
  }
), N1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: zt.fontFamily,
      fontWeight: zt.fontWeight,
      fontSize: zt.fontSize.mobile,
      lineHeight: zt.lineHeight,
      marginTop: zt.marginTop,
      marginBottom: zt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), j1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: Ot.fontFamily,
      fontWeight: Ot.fontWeight,
      fontSize: Ot.fontSize.mobile,
      lineHeight: Ot.lineHeight,
      marginTop: Ot.marginTop,
      marginBottom: Ot.marginBottom.mobile,
      ...n
    },
    children: e
  }
), M1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: Ut.fontFamily,
      fontWeight: Ut.fontWeight,
      fontSize: Ut.fontSize.mobile,
      lineHeight: Ut.lineHeight,
      marginTop: Ut.marginTop,
      marginBottom: Ut.marginBottom.mobile,
      ...n
    },
    children: e
  }
), I1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Wt.fontFamily,
      fontWeight: Wt.fontWeight,
      fontSize: Wt.fontSize.mobile,
      lineHeight: Wt.lineHeight,
      marginTop: Wt.marginTop,
      marginBottom: Wt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), D1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
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
), T1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
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
), L1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Vt.fontFamily,
      fontWeight: Vt.fontWeight,
      fontSize: Vt.fontSize.mobile,
      lineHeight: Vt.lineHeight,
      marginTop: Vt.marginTop,
      marginBottom: Vt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), $1 = ({
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
), A1 = () => Ae(() => ky, []), E1 = () => Ae(() => ({
  // Border colors
  BorderColorDefault: uc,
  BorderColorForm: fc,
  BorderColorCard: hc,
  BorderColorCardHover: pc,
  BorderColorError: mc,
  // Primary colors
  ColorPrimaryBlue: gc,
  ColorPrimaryWhite: xc,
  ColorPrimaryBlack: bc,
  ColorPrimaryGreen: yc,
  ColorPrimaryPurple: vc,
  ColorPrimaryDarkPink: wc,
  ColorPrimaryRed: Sc,
  ColorPrimaryYellow: _c,
  // Secondary colors
  ColorSecondaryPaleYellow: kc,
  ColorSecondaryWarmYellow: Cc,
  ColorSecondaryOrange: Nc,
  ColorSecondaryAquaGreen: jc,
  ColorSecondaryPink: Mc,
  // Grey scale
  ColorGrey1: Ic,
  ColorGrey2: Dc,
  ColorGrey3: Tc,
  ColorGrey4: Lc,
  ColorGrey5: $c
}), []), F1 = () => Ae(() => ({
  Spacing0: Gc,
  Spacing1: Yc,
  Spacing2: Vc,
  Spacing3: Zc,
  Spacing4: qc,
  Spacing5: Jc,
  Spacing6: Xc,
  Spacing7: Kc,
  Spacing8: Qc,
  Spacing9: ed
}), []), P1 = () => Ae(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Qr,
    Size16: na,
    Size19: oa,
    Size22: la,
    Size26: ua,
    Size36: pa,
    Size48: xa
  },
  Tablet: {
    Size14: ea,
    Size16: ra,
    Size19: sa,
    Size22: ca,
    Size26: fa,
    Size36: ma,
    Size48: ba
  },
  Print: {
    Size14: ta,
    Size16: aa,
    Size19: ia,
    Size22: da,
    Size26: ha,
    Size36: ga,
    Size48: ya
  },
  Family: {
    Base: Vr,
    Fallback: Zr,
    Print: qr
  },
  Weight: {
    Normal: Jr,
    Bold: Xr,
    Light: Kr
  },
  Base: {
    Size: Ho,
    LineHeight: zo
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Vr,
  FontFamilyFallback: Zr,
  FontFamilyPrint: qr,
  FontWeightNormal: Jr,
  FontWeightBold: Xr,
  FontWeightLight: Kr,
  FontSize14Mobile: Qr,
  FontSize14Tablet: ea,
  FontSize14Print: ta,
  FontSize16Mobile: na,
  FontSize16Tablet: ra,
  FontSize16Print: aa,
  FontSize19Mobile: oa,
  FontSize19Tablet: sa,
  FontSize19Print: ia,
  FontSize22Mobile: la,
  FontSize22Tablet: ca,
  FontSize22Print: da,
  FontSize26Mobile: ua,
  FontSize26Tablet: fa,
  FontSize26Print: ha,
  FontSize36Mobile: pa,
  FontSize36Tablet: ma,
  FontSize36Print: ga,
  FontSize48Mobile: xa,
  FontSize48Tablet: ba,
  FontSize48Print: ya,
  FontSizeBase: Ho,
  FontLineHeightBase: zo
}), []), R1 = () => Ae(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: vo,
    Size1: So,
    Size2: ko,
    Size3: No,
    Size4: Mo,
    Size5: Do,
    Size6: Lo,
    Size7: Ao,
    Size8: Fo,
    Size9: Ro
  },
  Tablet: {
    Size0: wo,
    Size1: _o,
    Size2: Co,
    Size3: jo,
    Size4: Io,
    Size5: To,
    Size6: $o,
    Size7: Eo,
    Size8: Po,
    Size9: Bo
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: vo,
  SpacingResponsive0Tablet: wo,
  SpacingResponsive1Mobile: So,
  SpacingResponsive1Tablet: _o,
  SpacingResponsive2Mobile: ko,
  SpacingResponsive2Tablet: Co,
  SpacingResponsive3Mobile: No,
  SpacingResponsive3Tablet: jo,
  SpacingResponsive4Mobile: Mo,
  SpacingResponsive4Tablet: Io,
  SpacingResponsive5Mobile: Do,
  SpacingResponsive5Tablet: To,
  SpacingResponsive6Mobile: Lo,
  SpacingResponsive6Tablet: $o,
  SpacingResponsive7Mobile: Ao,
  SpacingResponsive7Tablet: Eo,
  SpacingResponsive8Mobile: Fo,
  SpacingResponsive8Tablet: Po,
  SpacingResponsive9Mobile: Ro,
  SpacingResponsive9Tablet: Bo
}), []), B1 = () => Ae(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Ac,
  ButtonSpacingPaddingHorizontalMobile: Ec,
  ButtonSpacingPaddingVerticalDesktop: Fc,
  ButtonSpacingPaddingHorizontalDesktop: Pc,
  // Card spacing	
  CardSpacingPaddingMobile: Rc,
  CardSpacingPaddingDesktop: Bc,
  CardSpacingHeadingMargin: Hc,
  // Form spacing
  FormSpacingInputPadding: zc,
  FormSpacingInputMinHeight: Oc,
  FormSpacingCheckboxSize: Uc,
  FormSpacingCheckboxLabelPadding: Wc
}), []), H1 = () => Ae(() => ({
  xl: Bt,
  l: Ht,
  m: zt,
  s: Ot,
  xs: Ut
}), []), z1 = () => Ae(() => ({
  body: Wt,
  bodyLarge: Gt,
  bodySmall: Yt,
  ledeText: Vt,
  ledeTextSmall: Zt
}), []), O1 = () => Ae(() => ({
  headings: {
    xl: Bt,
    l: Ht,
    m: zt,
    s: Ot,
    xs: Ut
  },
  paragraphs: {
    body: Wt,
    bodyLarge: Gt,
    bodySmall: Yt,
    ledeText: Vt,
    ledeTextSmall: Zt
  },
  fonts: {
    family: {
      base: Vr,
      fallback: Zr,
      print: qr
    },
    weight: {
      normal: Jr,
      bold: Xr,
      light: Kr
    },
    sizes: {
      mobile: {
        size14: Qr,
        size16: na,
        size19: oa,
        size22: la,
        size26: ua,
        size36: pa,
        size48: xa
      },
      tablet: {
        size14: ea,
        size16: ra,
        size19: sa,
        size22: ca,
        size26: fa,
        size36: ma,
        size48: ba
      },
      print: {
        size14: ta,
        size16: aa,
        size19: ia,
        size22: da,
        size26: ha,
        size36: ga,
        size48: ya
      }
    }
  }
}), []);
function U1(e = {}) {
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
const td = {
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
function W1(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...td, ...e }, a = [];
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
function G1(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...td, ...e };
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
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const Y1 = '"Frutiger W01", Arial, Helvetica, sans-serif', V1 = "Arial, Helvetica, sans-serif";
async function Z1() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Kp as AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX,
  kr as AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX,
  Cr as AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
  Qp as AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX,
  em as AXIS_ZIGZAG_DEFAULT_CYCLES,
  nm as AXIS_ZIGZAG_DEFAULT_HEIGHT_PX,
  tm as AXIS_ZIGZAG_DEFAULT_STEP_X_PX,
  Ei as Account,
  My as ActionLink,
  o1 as AdaptiveDataGrid,
  Og as AnimationDurationFast,
  Ug as AnimationDurationNormal,
  Wg as AnimationDurationSlow,
  Zg as AnimationEasingBounce,
  Gg as AnimationEasingEaseIn,
  Vg as AnimationEasingEaseInOut,
  Yg as AnimationEasingEaseOut,
  wl as AppointmentCard,
  p1 as AreaSeriesPrimitive,
  Yh as AriaDataGrid,
  io as AriaTabsDataGrid,
  o1 as AriaTabsDataGridAdaptive,
  hi as Axis,
  Jn as BackLink,
  g1 as BandScalesProvider,
  m1 as BarSeriesPrimitive,
  hc as BorderColorCard,
  pc as BorderColorCardHover,
  uc as BorderColorDefault,
  mc as BorderColorError,
  fc as BorderColorForm,
  c0 as BorderRadiusLarge,
  l0 as BorderRadiusMedium,
  s0 as BorderRadiusNone,
  i0 as BorderRadiusSmall,
  n0 as BorderWidthCardBottom,
  Qg as BorderWidthDefault,
  e0 as BorderWidthFormElement,
  t0 as BorderWidthFormElementError,
  r0 as BorderWidthPanel,
  o0 as BorderWidthTableCell,
  a0 as BorderWidthTableHeader,
  zy as BrandThemeProvider,
  hl as Breadcrumb,
  Md as Breakpoint,
  Ub as BreakpointDesktop,
  Wb as BreakpointLargeDesktop,
  zb as BreakpointMobile,
  Ob as BreakpointTablet,
  bt as Button,
  Rx as ButtonBorderRadius,
  Px as ButtonBorderWidth,
  Cx as ButtonPrimaryBackgroundActive,
  _x as ButtonPrimaryBackgroundDefault,
  Nx as ButtonPrimaryBackgroundDisabled,
  kx as ButtonPrimaryBackgroundHover,
  Ix as ButtonPrimaryBorderDefault,
  Dx as ButtonPrimaryBorderFocus,
  jx as ButtonPrimaryTextDefault,
  Mx as ButtonPrimaryTextDisabled,
  Ax as ButtonSecondaryBackgroundActive,
  Tx as ButtonSecondaryBackgroundDefault,
  $x as ButtonSecondaryBackgroundHover,
  Lx as ButtonSecondaryBackgroundSolid,
  Fx as ButtonSecondaryBorderDefault,
  Ex as ButtonSecondaryTextDefault,
  Bx as ButtonShadowSize,
  Pi as ButtonSize,
  Pc as ButtonSpacingPaddingHorizontalDesktop,
  Ec as ButtonSpacingPaddingHorizontalMobile,
  Fc as ButtonSpacingPaddingVerticalDesktop,
  Ac as ButtonSpacingPaddingVerticalMobile,
  Hx as ButtonTypographyWeight,
  Fi as ButtonVariant,
  ml as Card,
  zx as CardBackgroundDefault,
  Wx as CardBorderBottom,
  Ox as CardBorderDefault,
  Ux as CardBorderHover,
  qx as CardBorderWidthBottom,
  Zx as CardBorderWidthDefault,
  Yy as CardGroup,
  Vy as CardGroupItem,
  Jx as CardShadowDefault,
  Xx as CardShadowHover,
  Hc as CardSpacingHeadingMargin,
  Bc as CardSpacingPaddingDesktop,
  Rc as CardSpacingPaddingMobile,
  Yx as CardTextDescription,
  Gx as CardTextHeading,
  Vx as CardTextLink,
  Zy as CareCard,
  Iy as CharacterCount,
  b1 as ChartEnhancer,
  x1 as ChartNoScript,
  Jp as ChartRoot,
  md as Checkbox,
  yd as Checkboxes,
  v0 as ColorBorderDefault,
  w0 as ColorBorderSecondary,
  Z0 as ColorButtonLoginActive,
  Y0 as ColorButtonLoginBackground,
  V0 as ColorButtonLoginHover,
  q0 as ColorButtonLoginShadow,
  M0 as ColorButtonPrimaryActive,
  C0 as ColorButtonPrimaryBackground,
  j0 as ColorButtonPrimaryHover,
  I0 as ColorButtonPrimaryShadow,
  N0 as ColorButtonPrimaryText,
  H0 as ColorButtonReverseActive,
  P0 as ColorButtonReverseBackground,
  B0 as ColorButtonReverseHover,
  z0 as ColorButtonReverseShadow,
  R0 as ColorButtonReverseText,
  E0 as ColorButtonSecondaryActive,
  D0 as ColorButtonSecondaryBackground,
  T0 as ColorButtonSecondaryBackgroundSolid,
  L0 as ColorButtonSecondaryBorder,
  A0 as ColorButtonSecondaryHover,
  F0 as ColorButtonSecondaryShadow,
  $0 as ColorButtonSecondaryText,
  W0 as ColorButtonWarningActive,
  O0 as ColorButtonWarningBackground,
  U0 as ColorButtonWarningHover,
  G0 as ColorButtonWarningShadow,
  S0 as ColorError,
  b0 as ColorFocusBackground,
  y0 as ColorFocusText,
  k0 as ColorFormBackground,
  _0 as ColorFormBorder,
  Ic as ColorGrey1,
  Dc as ColorGrey2,
  Tc as ColorGrey3,
  Lc as ColorGrey4,
  $c as ColorGrey5,
  g0 as ColorLinkActive,
  p0 as ColorLinkDefault,
  m0 as ColorLinkHover,
  x0 as ColorLinkVisited,
  bc as ColorPrimaryBlack,
  gc as ColorPrimaryBlue,
  wc as ColorPrimaryDarkPink,
  yc as ColorPrimaryGreen,
  vc as ColorPrimaryPurple,
  Sc as ColorPrimaryRed,
  xc as ColorPrimaryWhite,
  _c as ColorPrimaryYellow,
  jc as ColorSecondaryAquaGreen,
  Nc as ColorSecondaryOrange,
  kc as ColorSecondaryPaleYellow,
  Mc as ColorSecondaryPink,
  Cc as ColorSecondaryWarmYellow,
  d0 as ColorTextPrimary,
  h0 as ColorTextPrint,
  f0 as ColorTextReverse,
  u0 as ColorTextSecondary,
  Xn as Column,
  Dd as ColumnAlign,
  bx as ComponentBlur,
  dx as ComponentBreadcrumbChevronMarginLeft,
  ux as ComponentBreadcrumbChevronMarginRight,
  hx as ComponentBreadcrumbPaddingTopDesktop,
  fx as ComponentBreadcrumbPaddingTopMobile,
  Q0 as ComponentButtonPaddingDesktopHorizontal,
  K0 as ComponentButtonPaddingDesktopVertical,
  X0 as ComponentButtonPaddingMobileHorizontal,
  J0 as ComponentButtonPaddingMobileVertical,
  ex as ComponentButtonShadowSize,
  ix as ComponentCardHeadingMargin,
  sx as ComponentCardPaddingDesktop,
  ox as ComponentCardPaddingMobile,
  vx as ComponentDetails,
  wx as ComponentExpander,
  ax as ComponentFormCheckboxLabelPadding,
  rx as ComponentFormCheckboxSize,
  tx as ComponentFormInputMinHeight,
  nx as ComponentFormInputPadding,
  yx as ComponentLink,
  Sx as ComponentPagination,
  cx as ComponentPanelPaddingDesktop,
  lx as ComponentPanelPaddingMobile,
  xx as ComponentSpread,
  mx as ComponentSummaryListCellPaddingHorizontal,
  px as ComponentSummaryListCellPaddingVertical,
  gx as ComponentSummaryListRowMargin,
  zi as Container,
  Gy as ContentsList,
  td as DEFAULT_FONT_CONFIG,
  n1 as DashboardSummaryGrid,
  Ry as DateInput,
  Lh as Details,
  $h as DoDontList,
  _y as ElevationHigh,
  wy as ElevationLow,
  Sy as ElevationMedium,
  vy as ElevationNone,
  bs as ErrorMessage,
  Py as ErrorSummary,
  Ah as Expander,
  St as FRUTIGER_FONT_FILES,
  Wo as Fieldset,
  Id as Float,
  gy as FocusOutlineOffset,
  xy as FocusOutlineStyle,
  my as FocusOutlineWidth,
  yy as FocusShadowButton,
  by as FocusShadowInput,
  Vr as FontFamilyBase,
  Zr as FontFamilyFallback,
  qr as FontFamilyPrint,
  zo as FontLineHeightBase,
  Qr as FontSize14Mobile,
  ta as FontSize14Print,
  ea as FontSize14Tablet,
  na as FontSize16Mobile,
  aa as FontSize16Print,
  ra as FontSize16Tablet,
  oa as FontSize19Mobile,
  ia as FontSize19Print,
  sa as FontSize19Tablet,
  la as FontSize22Mobile,
  da as FontSize22Print,
  ca as FontSize22Tablet,
  ua as FontSize26Mobile,
  ha as FontSize26Print,
  fa as FontSize26Tablet,
  pa as FontSize36Mobile,
  ga as FontSize36Print,
  ma as FontSize36Tablet,
  xa as FontSize48Mobile,
  ya as FontSize48Print,
  ba as FontSize48Tablet,
  Ho as FontSizeBase,
  Xr as FontWeightBold,
  Kr as FontWeightLight,
  Jr as FontWeightNormal,
  Zi as Footer,
  xb as FormBorderRadius,
  mb as FormBorderWidthDefault,
  gb as FormBorderWidthError,
  fb as FormErrorTextDefault,
  hb as FormErrorTypographyWeight,
  pb as FormHintTextDefault,
  Kx as FormInputBackgroundDefault,
  eb as FormInputBackgroundDisabled,
  tb as FormInputBackgroundError,
  Qx as FormInputBackgroundFocus,
  nb as FormInputBorderDefault,
  ob as FormInputBorderDisabled,
  ab as FormInputBorderError,
  rb as FormInputBorderFocus,
  sb as FormInputTextDefault,
  lb as FormInputTextDisabled,
  ib as FormInputTextPlaceholder,
  cb as FormLabelTextDefault,
  db as FormLabelTextRequired,
  ub as FormLabelTypographyWeight,
  Wc as FormSpacingCheckboxLabelPadding,
  Uc as FormSpacingCheckboxSize,
  Oc as FormSpacingInputMinHeight,
  zc as FormSpacingInputPadding,
  Uy as GanttChart,
  Qa as Grid,
  Yb as GridGutter,
  Vb as GridGutterHalf,
  rm as GridLines,
  Gb as GridPageWidth,
  xn as GridWidth,
  Vi as Header,
  Oy as HeaderSSR,
  Xd as HeaderSearch,
  Vi as HeaderStatic,
  Xt as Heading,
  Ht as HeadingsNhsukHeadingL,
  zt as HeadingsNhsukHeadingM,
  Ot as HeadingsNhsukHeadingS,
  Bt as HeadingsNhsukHeadingXl,
  Ut as HeadingsNhsukHeadingXs,
  Qd as Hero,
  Bi as Hint,
  Qy as Images,
  Oo as Input,
  qy as InsetText,
  Uo as Label,
  Hb as LayoutColumnActions,
  Fb as LayoutColumnFull,
  Pb as LayoutColumnHalf,
  Bb as LayoutColumnQuarter,
  Rb as LayoutColumnThird,
  Eb as LayoutContainerMaxWidth,
  h1 as Legend,
  Xp as LineScalesProvider,
  Bm as LineSeriesPrimitive,
  $d as List,
  Oi as MainWrapper,
  Sl as MedicationCard,
  Om as MetricCard,
  I1 as NHSBodyText,
  D1 as NHSBodyTextLarge,
  T1 as NHSBodyTextSmall,
  k1 as NHSHeading1,
  C1 as NHSHeading2,
  N1 as NHSHeading3,
  j1 as NHSHeading4,
  M1 as NHSHeading5,
  L1 as NHSLedeText,
  $1 as NHSLedeTextSmall,
  Hy as NHSThemeProvider,
  V1 as NHS_FALLBACK_FONT_STACK,
  Y1 as NHS_FONT_STACK,
  Rp as NavigationSplitView,
  i1 as PageTemplate,
  Wy as Pagination,
  Nh as Panel,
  Wt as ParagraphsBody,
  Gt as ParagraphsBodyLarge,
  Yt as ParagraphsBodySmall,
  Vt as ParagraphsLedeText,
  Zt as ParagraphsLedeTextSmall,
  w1 as ParallaxScene,
  vl as PatientCard,
  S1 as PatternBanner,
  Wp as ProductRoadmap,
  Dy as Radios,
  Ty as RadiosServer,
  o1 as ResponsiveDataGrid,
  s1 as ResponsiveDataGridDemo,
  on as Row,
  y1 as SPC,
  $g as SPCChart,
  v1 as SPCMetricCard,
  jr as Select,
  kd as SelectOption,
  cy as ShadowButtonDefault,
  fy as ShadowButtonFocus,
  dy as ShadowButtonSecondary,
  uy as ShadowButtonWarning,
  hy as ShadowCardDefault,
  py as ShadowCardHover,
  Ab as SizeButtonMinHeightDesktop,
  $b as SizeButtonMinHeightMobile,
  Cb as SizeFormControlLarge,
  kb as SizeFormControlMedium,
  _b as SizeFormControlSmall,
  Tb as SizeFormInputWidth2xl,
  Lb as SizeFormInputWidth3xl,
  Ib as SizeFormInputWidthLg,
  Mb as SizeFormInputWidthMd,
  jb as SizeFormInputWidthSm,
  Db as SizeFormInputWidthXl,
  Nb as SizeFormInputWidthXs,
  wb as SizeIconExtraLarge,
  vb as SizeIconLarge,
  yb as SizeIconMedium,
  Sb as SizeIconNhsDefault,
  bb as SizeIconSmall,
  pl as SkipLink,
  e1 as SlotMatrix,
  r1 as SortStatusControl,
  Gc as Spacing0,
  Yc as Spacing1,
  Vc as Spacing2,
  Zc as Spacing3,
  qc as Spacing4,
  Jc as Spacing5,
  Xc as Spacing6,
  Kc as Spacing7,
  Qc as Spacing8,
  ed as Spacing9,
  vo as SpacingResponsive0Mobile,
  wo as SpacingResponsive0Tablet,
  So as SpacingResponsive1Mobile,
  _o as SpacingResponsive1Tablet,
  ko as SpacingResponsive2Mobile,
  Co as SpacingResponsive2Tablet,
  No as SpacingResponsive3Mobile,
  jo as SpacingResponsive3Tablet,
  Mo as SpacingResponsive4Mobile,
  Io as SpacingResponsive4Tablet,
  Do as SpacingResponsive5Mobile,
  To as SpacingResponsive5Tablet,
  Lo as SpacingResponsive6Mobile,
  $o as SpacingResponsive6Tablet,
  Ao as SpacingResponsive7Mobile,
  Eo as SpacingResponsive7Tablet,
  Fo as SpacingResponsive8Mobile,
  Po as SpacingResponsive8Tablet,
  Ro as SpacingResponsive9Mobile,
  Bo as SpacingResponsive9Tablet,
  Ly as SpacingUtilities,
  sy as StateDisabledBackground,
  iy as StateDisabledBorder,
  ly as StateDisabledText,
  Zb as StateErrorBackground,
  qb as StateErrorBorder,
  Jb as StateErrorText,
  ry as StateInfoBackground,
  ay as StateInfoBorder,
  oy as StateInfoText,
  Xb as StateSuccessBackground,
  Kb as StateSuccessBorder,
  Qb as StateSuccessText,
  ey as StateWarningBackground,
  ty as StateWarningBorder,
  ny as StateWarningText,
  t1 as StepByStepNavigation,
  Oh as SummaryCard,
  Jy as SummaryList,
  en as Table,
  Xy as Tabs,
  nt as Tag,
  Eh as TaskList,
  wd as Textarea,
  f1 as TooltipOverlay,
  Rm as TooltipProvider,
  l1 as TransactionalPageTemplate,
  qg as TransitionButtonDefault,
  Jg as TransitionButtonShadow,
  Kg as TransitionCardHover,
  Xg as TransitionInputFocus,
  u1 as VisibilityProvider,
  _l as VitalsCard,
  Fy as WIDTH_FRACTIONS,
  Ky as WarningCallout,
  Ml as WidthContainer,
  Ay as WidthUtilities,
  d1 as WorkflowSplitView,
  Z1 as checkFrutigerLoaded,
  ts as createGenericTabsConfig,
  a1 as createTCHTabsConfig,
  W1 as generateFrutigerFontFace,
  _1 as getResponsiveStyles,
  $y as getSpacingClass,
  Ey as getWidthClass,
  G1 as preloadFrutigerFonts,
  rp as tchDataConfig,
  Jd as useBrand,
  E1 as useColors,
  B1 as useComponentSpacing,
  H1 as useNHSHeadings,
  z1 as useNHSParagraphs,
  By as useNHSTheme,
  O1 as useNHSTypographySystem,
  U1 as useNavigationSplitDrill,
  Tp as useNavigationSplitUrlSync,
  ns as useNhsFdpBreakpoints,
  R1 as useResponsiveSpacing,
  c1 as useResponsiveValue,
  F1 as useSpacing,
  Fg as useSpc,
  A1 as useTokens,
  P1 as useTypography
};
//# sourceMappingURL=index.esm.js.map
