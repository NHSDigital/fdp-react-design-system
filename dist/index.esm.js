import * as Y from "react";
import ft, { useState as Le, useEffect as ze, useCallback as ge, useRef as Ee, createElement as Oo, useMemo as Me, useContext as fc, createContext as pc, forwardRef as Sn, useImperativeHandle as Wo, useReducer as Uo, memo as hc, useId as nr } from "react";
import { createPortal as mc } from "react-dom";
function gc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kn = { exports: {} }, jn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hs;
function xc() {
  if (Hs) return jn;
  Hs = 1;
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
function bc() {
  return zs || (zs = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(A) {
      if (A == null) return null;
      if (typeof A == "function")
        return A.$$typeof === T ? null : A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case y:
          return "Fragment";
        case g:
          return "Profiler";
        case p:
          return "StrictMode";
        case F:
          return "Suspense";
        case P:
          return "SuspenseList";
        case v:
          return "Activity";
      }
      if (typeof A == "object")
        switch (typeof A.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), A.$$typeof) {
          case w:
            return "Portal";
          case $:
            return (A.displayName || "Context") + ".Provider";
          case M:
            return (A._context.displayName || "Context") + ".Consumer";
          case N:
            var U = A.render;
            return A = A.displayName, A || (A = U.displayName || U.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
          case R:
            return U = A.displayName || null, U !== null ? U : e(A.type) || "Memo";
          case j:
            U = A._payload, A = A._init;
            try {
              return e(A(U));
            } catch {
            }
        }
      return null;
    }
    function t(A) {
      return "" + A;
    }
    function r(A) {
      try {
        t(A);
        var U = !1;
      } catch {
        U = !0;
      }
      if (U) {
        U = console;
        var H = U.error, ae = typeof Symbol == "function" && Symbol.toStringTag && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return H.call(
          U,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ae
        ), t(A);
      }
    }
    function a(A) {
      if (A === y) return "<>";
      if (typeof A == "object" && A !== null && A.$$typeof === j)
        return "<...>";
      try {
        var U = e(A);
        return U ? "<" + U + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var A = C.A;
      return A === null ? null : A.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(A) {
      if (h.call(A, "key")) {
        var U = Object.getOwnPropertyDescriptor(A, "key").get;
        if (U && U.isReactWarning) return !1;
      }
      return A.key !== void 0;
    }
    function l(A, U) {
      function H() {
        b || (b = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          U
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(A, "key", {
        get: H,
        configurable: !0
      });
    }
    function d() {
      var A = e(this.type);
      return S[A] || (S[A] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), A = this.props.ref, A !== void 0 ? A : null;
    }
    function c(A, U, H, ae, z, fe, ve, le) {
      return H = fe.ref, A = {
        $$typeof: _,
        type: A,
        key: U,
        props: fe,
        _owner: z
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(A, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(A, "ref", { enumerable: !1, value: null }), A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(A, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(A, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ve
      }), Object.defineProperty(A, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    }
    function u(A, U, H, ae, z, fe, ve, le) {
      var ue = U.children;
      if (ue !== void 0)
        if (ae)
          if (I(ue)) {
            for (ae = 0; ae < ue.length; ae++)
              f(ue[ae]);
            Object.freeze && Object.freeze(ue);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(ue);
      if (h.call(U, "key")) {
        ue = e(A);
        var J = Object.keys(U).filter(function(de) {
          return de !== "key";
        });
        ae = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", O[ue + ae] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), O[ue + ae] = !0);
      }
      if (ue = null, H !== void 0 && (r(H), ue = "" + H), i(U) && (r(U.key), ue = "" + U.key), "key" in U) {
        H = {};
        for (var te in U)
          te !== "key" && (H[te] = U[te]);
      } else H = U;
      return ue && l(
        H,
        typeof A == "function" ? A.displayName || A.name || "Unknown" : A
      ), c(
        A,
        ue,
        fe,
        z,
        s(),
        H,
        ve,
        le
      );
    }
    function f(A) {
      typeof A == "object" && A !== null && A.$$typeof === _ && A._store && (A._store.validated = 1);
    }
    var m = ft, _ = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), M = Symbol.for("react.consumer"), $ = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), v = Symbol.for("react.activity"), T = Symbol.for("react.client.reference"), C = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, h = Object.prototype.hasOwnProperty, I = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(A) {
        return A();
      }
    };
    var b, S = {}, D = m.react_stack_bottom_frame.bind(
      m,
      o
    )(), Q = k(a(o)), O = {};
    Nn.Fragment = y, Nn.jsx = function(A, U, H, ae, z) {
      var fe = 1e4 > C.recentlyCreatedOwnerStacks++;
      return u(
        A,
        U,
        H,
        !1,
        ae,
        z,
        fe ? Error("react-stack-top-frame") : D,
        fe ? k(a(A)) : Q
      );
    }, Nn.jsxs = function(A, U, H, ae, z) {
      var fe = 1e4 > C.recentlyCreatedOwnerStacks++;
      return u(
        A,
        U,
        H,
        !0,
        ae,
        z,
        fe ? Error("react-stack-top-frame") : D,
        fe ? k(a(A)) : Q
      );
    };
  })()), Nn;
}
var Os;
function yc() {
  return Os || (Os = 1, process.env.NODE_ENV === "production" ? Kn.exports = xc() : Kn.exports = bc()), Kn.exports;
}
var n = yc(), fa = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ws;
function vc() {
  return Ws || (Ws = 1, (function(e) {
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
  })(fa)), fa.exports;
}
var _c = vc();
const ye = /* @__PURE__ */ gc(_c), Ux = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...s
}) => {
  const o = ye(
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
}, Go = ({
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
    return o.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: o.href,
        children: d
      }
    ) : o.action ? /* @__PURE__ */ n.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: o.action,
        method: o.method || "post",
        children: /* @__PURE__ */ n.jsx("button", { className: "nhsuk-account__button", type: "submit", role: "button", children: d })
      }
    ) : /* @__PURE__ */ n.jsx("span", { children: d });
  };
  return /* @__PURE__ */ n.jsx(
    "nav",
    {
      className: ye(
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
            className: ye(
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
var Vo = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e))(Vo || {}), Yo = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(Yo || {});
function wc(e) {
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
const { forwardRef: Sc, useCallback: Gt, useState: pa } = Y;
function kc(e, t) {
  const {
    children: r,
    variant: a = Vo.Primary,
    size: s = Yo.Default,
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, u] = pa(!1), [f, m] = pa(!1), [_, w] = pa(!1), y = wc({
    variant: a,
    size: s,
    fullWidth: o,
    className: i,
    preventDoubleClick: l,
    href: "href" in d ? d.href : void 0
  }), p = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", g = {
    ...c && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ..._ && { "data-focused": "true" },
    ...p && { "data-disabled": "true" }
  }, M = Gt(
    () => !p && u(!0),
    [p]
  ), $ = Gt(() => u(!1), []), N = Gt(
    () => !p && m(!0),
    [p]
  ), F = Gt(() => {
    m(!1), u(!1);
  }, []), P = Gt(() => w(!0), []), R = Gt(() => w(!1), []), j = Gt(
    (ue) => {
      ue.key === " " && ("href" in d || ue.currentTarget.getAttribute("role") === "button") && (ue.preventDefault(), ue.currentTarget.click());
    },
    [d]
  ), v = Gt(
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
      title: te,
      ["aria-label"]: de,
      ["aria-describedby"]: x,
      ["aria-labelledby"]: E,
      tabIndex: B,
      ...Z
    } = d, V = d;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: V.href,
        target: V.target,
        rel: V.rel,
        className: y.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...g,
        ...l && { "data-prevent-double-click": "true" },
        ...Z,
        onKeyDown: (ne) => {
          V.onKeyDown?.(ne), j(ne);
        },
        onClick: (ne) => {
          V.onClick?.(ne), v(ne);
        },
        onMouseDown: (ne) => {
          V.onMouseDown?.(ne), M();
        },
        onMouseUp: (ne) => {
          V.onMouseUp?.(ne), $();
        },
        onMouseEnter: (ne) => {
          V.onMouseEnter?.(ne), N();
        },
        onMouseLeave: (ne) => {
          V.onMouseLeave?.(ne), F();
        },
        onFocus: (ne) => {
          V.onFocus?.(ne), P();
        },
        onBlur: (ne) => {
          V.onBlur?.(ne), R();
        },
        "aria-disabled": V["aria-disabled"],
        ...V["aria-disabled"] === "true" && { tabIndex: -1 },
        id: ue,
        style: J,
        title: te,
        "aria-label": de,
        "aria-describedby": x,
        "aria-labelledby": E,
        tabIndex: B,
        children: r
      }
    );
  }
  const {
    id: T,
    style: C,
    title: h,
    ["aria-label"]: I,
    ["aria-describedby"]: k,
    ["aria-labelledby"]: b,
    tabIndex: S,
    name: D,
    value: Q,
    form: O,
    formAction: A,
    formEncType: U,
    formMethod: H,
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
      className: y.classes,
      "data-module": "nhs-button",
      ...g,
      ...l && { "data-prevent-double-click": "true" },
      ...le.disabled && { "aria-disabled": "true" },
      ...ve,
      onKeyDown: (ue) => {
        le.onKeyDown?.(ue), j(ue);
      },
      onClick: (ue) => {
        le.onClick?.(ue), v(ue);
      },
      onMouseDown: (ue) => {
        le.onMouseDown?.(ue), M();
      },
      onMouseUp: (ue) => {
        le.onMouseUp?.(ue), $();
      },
      onMouseEnter: (ue) => {
        le.onMouseEnter?.(ue), N();
      },
      onMouseLeave: (ue) => {
        le.onMouseLeave?.(ue), F();
      },
      onFocus: (ue) => {
        le.onFocus?.(ue), P();
      },
      onBlur: (ue) => {
        le.onBlur?.(ue), R();
      },
      id: T,
      style: C,
      title: h,
      "aria-label": I,
      "aria-describedby": k,
      "aria-labelledby": b,
      tabIndex: S,
      name: D,
      value: Q,
      form: O,
      formAction: A,
      formEncType: U,
      formMethod: H,
      formNoValidate: ae,
      formTarget: z,
      autoFocus: fe,
      children: r
    }
  );
}
const it = Sc(kc);
it.displayName = "Button";
const Ma = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = ye(
    "nhsuk-back-link",
    a
  ), d = ye(
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
function Cc(e) {
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
  const u = Cc({ color: a, noBorder: s, closable: o, disabled: l, className: d }), f = (m) => {
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
}, jc = ({
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
  attributes: _,
  ...w
}) => {
  const [y, p] = Le(a), g = r !== void 0, M = g ? r : y;
  ze(() => {
    g || p(a);
  }, [a, g]);
  const $ = (j) => {
    const v = j.target.checked;
    g || p(v), u?.(v, j);
  }, N = i ? `${e}-hint` : void 0, F = l ? `${e}-error` : void 0, P = [N, F].filter(Boolean).join(" ") || void 0, R = ye(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ n.jsx("div", { className: R, ...w, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: o,
        checked: M,
        disabled: s,
        onChange: $,
        onBlur: f,
        onFocus: m,
        "aria-describedby": P,
        ..._
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ n.jsx("div", { id: N, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: F, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
jc.displayName = "Checkbox";
function qo(e) {
  const r = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    r ? "nhsuk-input--range" : "",
    !r && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: r };
}
const gs = ({
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
  inputMode: _,
  autoComplete: w,
  maxLength: y,
  minLength: p,
  pattern: g,
  step: M,
  min: $,
  max: N,
  showValueLabels: F = !1,
  showCurrentValue: P = !1,
  valueLabels: R,
  onChange: j,
  onBlur: v,
  onFocus: T,
  onKeyDown: C,
  ...h
}) => {
  const [I, k] = Le(a || s || (r === "range" ? $ || "0" : ""));
  ze(() => {
    a !== void 0 && k(a);
  }, [a]);
  const b = (z) => {
    const fe = z.target;
    k(fe.value), ("type" in z && z.nativeEvent || z.type === "keydown") && j?.(z);
  }, { classes: S, isRange: D } = qo({ type: r, hasError: c, width: m, className: f }), Q = a !== void 0, O = {
    id: e,
    name: t,
    type: r,
    placeholder: o,
    disabled: i,
    readOnly: l,
    required: d,
    "aria-describedby": u,
    inputMode: _,
    autoComplete: w,
    maxLength: y,
    minLength: p,
    pattern: g,
    step: M,
    min: $,
    max: N,
    onChange: b,
    onBlur: v,
    onFocus: T,
    onKeyDown: (z) => {
      if (D && /[0-9]/.test(z.key)) {
        const fe = (I?.toString() || "") + z.key;
        z.target.value = fe, b(z);
      }
      C?.(z);
    },
    ...h
  }, A = !Q && s !== void 0 ? { defaultValue: s } : {}, U = Q ? { value: a } : {}, H = () => /* @__PURE__ */ n.jsx(
    "input",
    {
      className: S,
      ...U,
      ...A,
      "data-current-value": I,
      ...O
    }
  ), ae = D ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    F && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: R?.min || $ || "0" }),
      H(),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: R?.max || N || "100" })
    ] }),
    !F && H(),
    P && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      R?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: I })
    ] }) })
  ] }) : null;
  return D ? ae : /* @__PURE__ */ n.jsx(
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
      inputMode: _,
      autoComplete: w,
      maxLength: y,
      minLength: p,
      pattern: g,
      step: M,
      min: $,
      max: N,
      onChange: j,
      onBlur: v,
      onFocus: T,
      onKeyDown: C,
      ...h
    }
  );
};
function Nc(e) {
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
const xs = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: s,
  ...o
}) => {
  const i = Nc({ size: a, isPageHeading: r, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ n.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...o, children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: s }) : s });
};
function Tc(e) {
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
const bs = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...s
}) => {
  const o = Tc({
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
function Dc(e) {
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
const $c = ({
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
  ..._
}) => {
  const [w, y] = Le(
    e.filter((j) => j.checked).map((j) => j.value)
  ), p = r || t, g = i ? `${p}-hint` : void 0, M = l ? `${p}-error` : void 0, $ = [g, M].filter(Boolean).join(" ") || void 0, N = (j, v) => {
    let T;
    v ? T = [...w, j] : T = w.filter((C) => C !== j), y(T), u?.(T);
  }, F = () => e.map((j, v) => {
    const T = `${p}-${v + 1}`, C = `${T}-conditional`, h = w.includes(j.value), I = j.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: T,
          name: t,
          type: "checkbox",
          value: j.value,
          checked: h,
          disabled: I,
          onChange: (k) => N(j.value, k.target.checked),
          "aria-describedby": j.hint ? `${T}-hint` : $,
          ...j.conditional && {
            "aria-controls": C,
            "aria-expanded": h ? "true" : "false"
          },
          ...j.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: T, children: j.text }),
      j.hint && /* @__PURE__ */ n.jsx("div", { id: `${T}-hint`, className: "nhsuk-checkboxes__hint", children: j.hint }),
      j.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: ye("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !h
          }),
          id: C,
          children: typeof j.conditional == "object" && j.conditional !== null && "label" in j.conditional && "id" in j.conditional && "name" in j.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            j.conditional.label && /* @__PURE__ */ n.jsx(xs, { htmlFor: j.conditional.id, children: j.conditional.label }),
            /* @__PURE__ */ n.jsx(gs, { ...j.conditional })
          ] }) : j.conditional
        }
      )
    ] }, j.value);
  }), { classes: P, formGroupClasses: R } = Dc({ small: c, className: d, hasError: !!l });
  return /* @__PURE__ */ n.jsx("div", { className: R, ...m, ..._, children: /* @__PURE__ */ n.jsxs(
    bs,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: $,
      ...f,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: g, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: M, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: P, children: F() })
      ]
    }
  ) });
};
$c.displayName = "Checkboxes";
function Ic(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
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
  maxLength: _,
  minLength: w,
  wrap: y = "soft",
  resize: p = "vertical",
  autoComplete: g,
  spellCheck: M,
  onChange: $,
  onBlur: N,
  onFocus: F,
  onKeyDown: P,
  ...R
}) => {
  const { classes: j, describedBy: v } = Ic({ hasError: d, resize: p, className: u, describedBy: c });
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
      maxLength: _,
      minLength: w,
      wrap: y,
      autoComplete: g,
      spellCheck: M,
      onChange: $,
      onBlur: N,
      onFocus: F,
      onKeyDown: P,
      ...R
    }
  );
};
function Lc(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Ko = ({ id: e, className: t, children: r, ...a }) => {
  const s = Lc({ id: e, className: t });
  return /* @__PURE__ */ n.jsx("div", { className: s.classes, id: s.id, ...a, children: r });
}, Gx = ({
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
  const _ = o ?? i ?? "", [w, y] = Le(_), [p, g] = Le(0), [M, $] = Le(!1), [N, F] = Le(!1), P = ge((h) => r ? h.trim() === "" ? 0 : h.trim().split(/\s+/).length : h.length, [r]);
  ze(() => {
    const h = P(w), I = t || r || 0, k = I - h, b = Math.floor(I * (a / 100));
    g(k), $(h > I), F(h >= b || h > I), u && u(h, k);
  }, [w, t, r, a, P, u]);
  const R = (h) => {
    const I = h.target.value;
    y(I), f && f(h);
  }, j = () => {
    const h = t || r || 0, I = r ? "word" : "character", k = r ? "words" : "characters";
    if (!N)
      return `You can enter up to ${h} ${h === 1 ? I : k}`;
    if (M) {
      const b = Math.abs(p);
      return `You have ${b} ${b === 1 ? I : k} too many`;
    } else
      return `You have ${p} ${p === 1 ? I : k} remaining`;
  }, v = ye(
    "nhsuk-character-count",
    d
  ), T = ye(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !N,
      "nhsuk-error-message": M
    },
    c?.classes
  ), C = ye(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": M
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
          Mc,
          {
            id: e,
            name: s,
            value: o !== void 0 ? w : void 0,
            defaultValue: o === void 0 ? i ?? w : void 0,
            rows: l,
            className: C,
            onChange: R,
            "aria-describedby": `${e}-info`,
            "aria-invalid": M || void 0,
            ...m
          }
        ),
        /* @__PURE__ */ n.jsx(
          Ko,
          {
            id: `${e}-info`,
            className: T,
            role: "status",
            "aria-live": "polite",
            children: j()
          }
        )
      ]
    }
  );
};
function Pc(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const Fc = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: s,
  ...o
}) => {
  const i = ye(
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
}, Ec = ({
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
  options: _,
  children: w,
  onChange: y,
  onBlur: p,
  onFocus: g,
  ...M
}) => {
  const { classes: $ } = Pc({ hasError: l, className: c }), N = () => _ ? _.map((P, R) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: P.value,
      disabled: P.disabled,
      "data-initial-selected": P.selected || void 0,
      children: P.text
    },
    `${P.value}-${R}`
  )) : null, F = s === void 0 && a === void 0 && _ ? _.find((P) => P.selected)?.value : void 0;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: $,
      id: e,
      name: t,
      "aria-label": r,
      value: a,
      defaultValue: s !== void 0 ? s : F,
      disabled: o,
      required: i,
      "aria-describedby": d,
      multiple: u,
      size: f,
      autoComplete: m,
      onChange: y,
      onBlur: p,
      onFocus: g,
      ...M,
      children: w || N()
    }
  );
}, rr = Ec;
rr.Option = Fc;
function Rc(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function Xo(e, {
  variant: t,
  selectedValue: r,
  enableBehaviourAttr: a,
  handleChange: s,
  handleBlur: o,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: d,
  InputComponent: c
}) {
  const {
    onChange: u,
    onBlur: f,
    onFocus: m,
    ..._
  } = e, {
    name: w,
    hasError: y = !1,
    describedBy: p,
    className: g,
    size: M = "normal",
    inline: $ = !1,
    options: N,
    ...F
  } = _, { classes: P, describedBy: R } = Rc({ hasError: y, size: M, inline: $, className: g, describedBy: p });
  return /* @__PURE__ */ n.jsx(bs, { children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: P,
      ...F,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: N.map((j, v) => {
        const T = `${w}-${v}`, C = j.conditional ? `${T}-conditional` : void 0, h = r === j.value;
        return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: T,
              name: w,
              type: "radio",
              value: j.value,
              disabled: j.disabled,
              ...t === "client" ? {
                checked: h,
                onChange: s,
                onBlur: o,
                onFocus: i,
                onKeyDown: l,
                ref: (I) => {
                  I && d && (d.current[v] = I);
                }
              } : {
                defaultChecked: h,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": R
            }
          ),
          /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: T, children: j.text }),
          j.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: j.hint }),
          j.conditional && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: ye("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !h
              }),
              id: C,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof j.conditional == "object" && j.conditional !== null && "label" in j.conditional && "id" in j.conditional && "name" in j.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
                j.conditional.label && /* @__PURE__ */ n.jsx(
                  xs,
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
const Vx = ({ value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: s, ...o }) => {
  const [i, l] = Le(e || t || ""), d = Ee([]), c = Ee(i), u = (_) => {
    const w = _.target.value;
    w !== c.current && (c.current = w, l(w), r?.(_));
  }, f = (_) => {
    s?.(_);
  }, m = ge((_) => {
    const { key: w } = _;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(w)) return;
    _.preventDefault();
    const y = d.current.filter(($) => $ && !$.disabled), p = y.indexOf(_.currentTarget);
    if (p === -1) return;
    let g = p;
    ["ArrowDown", "ArrowRight"].includes(w) ? g = (p + 1) % y.length : ["ArrowUp", "ArrowLeft"].includes(w) && (g = (p - 1 + y.length) % y.length);
    const M = y[g];
    M && (M.focus(), M.checked || M.click());
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
      itemsRef: d,
      InputComponent: gs
    }
  );
};
function Ac(e) {
  const {
    id: t,
    name: r,
    type: a = "text",
    value: s,
    defaultValue: o,
    placeholder: i,
    disabled: l = !1,
    readOnly: d = !1,
    required: c = !1,
    hasError: u = !1,
    describedBy: f,
    className: m,
    width: _ = "full",
    inputMode: w,
    autoComplete: y,
    maxLength: p,
    minLength: g,
    pattern: M,
    step: $,
    min: N,
    max: F,
    showValueLabels: P = !1,
    showCurrentValue: R = !1,
    valueLabels: j,
    // Strip interactive handlers in server variant
    onChange: v,
    onBlur: T,
    onFocus: C,
    onKeyDown: h,
    ...I
  } = e, { classes: k, isRange: b } = qo({
    type: a,
    hasError: u,
    width: _,
    className: m
  }), S = {
    id: t,
    name: r,
    type: a,
    placeholder: i,
    disabled: l,
    readOnly: d,
    required: c,
    "aria-describedby": f,
    inputMode: w,
    autoComplete: y,
    maxLength: p,
    minLength: g,
    pattern: M,
    step: $,
    min: N,
    max: F,
    ...I
  };
  if (b) {
    const D = s ?? o ?? (typeof N < "u" ? String(N) : "0"), Q = /* @__PURE__ */ n.jsx(
      "input",
      {
        className: k,
        ...s !== void 0 ? { value: s } : {},
        ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
        "data-current-value": D,
        ...S
      }
    );
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      P ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: j?.min || N || "0" }),
        Q,
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: j?.max || F || "100" })
      ] }) : Q,
      R && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        j?.current || "Current value:",
        " ",
        /* @__PURE__ */ n.jsx("strong", { children: D })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ n.jsx(
    "input",
    {
      className: k,
      ...s !== void 0 ? { value: s } : {},
      ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
      ...S
    }
  );
}
const Yx = ({ value: e, defaultValue: t, ...r }) => {
  const a = e || t || "";
  return Xo(
    { value: e, defaultValue: t, ...r },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: Ac
    }
  );
};
var tn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(tn || {}), Bc = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(Bc || {}), Hc = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(Hc || {}), zc = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(zc || {});
const Zo = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  style: s,
  ...o
}) => {
  const i = ye(
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
  const s = ye("nhsuk-grid-row", t);
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
  style: d,
  align: c,
  ...u
}) => {
  const f = ye(
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
  return /* @__PURE__ */ n.jsx("div", { className: f, style: d, ...u, children: e });
}, La = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const o = ft.Children.toArray(e)[0], i = ft.isValidElement(o) && (o.type === nn || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(Zo, { className: t, style: r, ...a, children: i ? e : /* @__PURE__ */ n.jsx(nn, { children: e }) });
}, Oc = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: s,
  role: o,
  as: i,
  ...l
}) => {
  const d = i || (t === "number" ? "ol" : "ul"), c = ye(
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
}, Wc = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = ye("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, Uc = Oc;
Uc.Item = Wc;
const qx = ({
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
}, Kx = {
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
}, Xx = ({
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
}, Zx = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Jx = [
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
function Gc(e) {
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
function Vc(e) {
  const t = e.level ?? Gc(e.size), r = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: r, style: a };
}
const Bt = ({ level: e, className: t, text: r, html: a, children: s, size: o, marginBottom: i, ...l }) => {
  const d = Vc({ level: e, size: o, className: t, marginBottom: i }), c = s || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r);
  return Oo(d.tag, { className: d.classes, style: d.style, ...l }, c);
};
function Yc(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const Us = ({ id: e, className: t, visuallyHiddenText: r = "Error:", children: a, ...s }) => {
  const o = Yc({ id: e, className: t, visuallyHiddenText: r });
  return /* @__PURE__ */ n.jsxs("span", { className: o.classes, id: o.id, ...s, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      o.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, Qx = ({
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
  const c = ye(
    "nhsuk-error-summary",
    o
  ), u = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, m = (_) => {
    const w = _.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } }) : _.text;
    return _.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: _.href,
        ..._.attributes,
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
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((_, w) => /* @__PURE__ */ n.jsx("li", { children: m(_) }, w)) })
        ] })
      ]
    }
  );
}, eb = ({
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
  })), [m, _] = Le({}), w = (b) => b % 4 === 0 && b % 100 !== 0 || b % 400 === 0, y = (b, S) => {
    const D = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return b === 2 && w(S) ? 29 : D[b - 1];
  }, p = (b, S, D) => {
    if (!b) return;
    if (!/^\d+$/.test(b)) return "Day must be a number";
    const Q = parseInt(b, 10);
    if (Q < 1 || Q > 31) return "Day must be between 1 and 31";
    if (S && D) {
      const O = parseInt(S, 10), A = parseInt(D, 10);
      if (!isNaN(O) && !isNaN(A) && O >= 1 && O <= 12) {
        const U = y(O, A);
        if (Q > U)
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
          ][O - 1]} ${A} only has ${U} days`;
      }
    }
  }, g = (b) => {
    if (!b) return;
    if (!/^\d+$/.test(b)) return "Month must be a number";
    const S = parseInt(b, 10);
    if (S < 1 || S > 12) return "Month must be between 1 and 12";
  }, M = (b) => {
    if (!b) return;
    if (!/^\d+$/.test(b)) return "Year must be a number";
    const S = parseInt(b, 10), D = (/* @__PURE__ */ new Date()).getFullYear();
    if (S < 1900 || S > D + 10)
      return `Year must be between 1900 and ${D + 10}`;
  }, $ = (b, S, D) => {
    if (!b || !S || !D) return;
    const Q = parseInt(b, 10), O = parseInt(S, 10), A = parseInt(D, 10);
    if (isNaN(Q) || isNaN(O) || isNaN(A) || O < 1 || O > 12 || A < 1900) return;
    const U = y(O, A);
    Q < 1 || Q > U;
  }, N = ge((b, S) => {
    const D = {
      ...u,
      [b]: S
    };
    f(D), d && d(D);
  }, [u, d]), F = ge((b) => {
    const S = u[b];
    let D;
    if (b === "day")
      D = p(S, u.month, u.year);
    else if (b === "month") {
      if (D = g(S), !D && u.day) {
        const Q = p(u.day, S, u.year);
        _((O) => ({
          ...O,
          day: Q
        }));
      }
    } else if (b === "year" && (D = M(S), !D && u.day && u.month)) {
      const Q = p(u.day, u.month, S);
      _((O) => ({
        ...O,
        day: Q
      }));
    }
    if (_((Q) => ({
      ...Q,
      [b]: D
    })), u.day && u.month && u.year) {
      const Q = $(
        b === "day" ? S : u.day,
        b === "month" ? S : u.month,
        b === "year" ? S : u.year
      );
      Q && _((O) => ({
        ...O,
        day: Q
      }));
    }
  }, [u, p, g, M, $]), P = Me(() => [
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
  ], []), R = r || P;
  let j = o?.describedBy || "";
  const v = i ? `${e}-hint` : "", T = l ? `${e}-error` : "";
  v && (j = j ? `${j} ${v}` : v), T && (j = j ? `${j} ${T}` : T);
  const C = Object.values(m).some((b) => b), h = ye(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || C
    }
  ), I = ye(
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
      Us,
      {
        id: T,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(m).map(
      ([b, S]) => S ? /* @__PURE__ */ n.jsxs(
        Us,
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
    /* @__PURE__ */ n.jsx("div", { className: I, id: e, "data-testid": "date-input", ...c, children: R.map((b) => {
      const S = b.id || `${e}-${b.name}`, D = a ? `${a}[${b.name}]` : b.name, Q = b.label || b.name.charAt(0).toUpperCase() + b.name.slice(1), O = m[b.name], A = u[b.name] || "";
      let U = j;
      if (O) {
        const H = `${e}-${b.name}-error`;
        U = U ? `${U} ${H}` : H;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          xs,
          {
            htmlFor: S,
            className: "nhsuk-date-input__label",
            children: Q
          }
        ),
        /* @__PURE__ */ n.jsx(
          gs,
          {
            id: S,
            name: D,
            value: A,
            className: ye("nhsuk-date-input__input", b.classes, {
              "nhsuk-input--error": O
            }),
            inputMode: b.inputmode,
            autoComplete: b.autocomplete,
            pattern: b.pattern,
            "aria-describedby": U || void 0,
            hasError: !!O,
            onChange: (H) => N(b.name, H.target.value),
            onBlur: () => F(b.name)
          }
        )
      ] }, b.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: h, children: o ? /* @__PURE__ */ n.jsx(
    bs,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: j || void 0,
      children: k()
    }
  ) : k() });
}, Qo = {
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
}, ei = pc(Qo), qc = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...Qo, ...t };
  return /* @__PURE__ */ n.jsx(ei.Provider, { value: r, children: e });
}, tb = () => {
  const e = fc(ei);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Kc() {
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
function Xc() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Kc(), document.head.appendChild(e);
}
const nb = ({ children: e, theme: t }) => (ze(() => {
  Xc();
}, []), /* @__PURE__ */ n.jsx(qc, { theme: t, children: e }));
function Zc(e, {
  variant: t,
  isClient: r,
  menuOpen: a = !1,
  showMoreButton: s = !1,
  visibleItems: o,
  dropdownVisible: i,
  toggleMenu: l,
  navContainerRef: d,
  navListRef: c,
  searchNode: u
}) {
  const {
    className: f,
    logo: m = {},
    service: _ = {},
    serviceName: w,
    organisation: y,
    search: p,
    account: g,
    navigation: M,
    containerClasses: $,
    variant: N = "default",
    attributes: F = {},
    maxVisibleItems: P,
    // deprecated (ignored)
    responsiveNavigation: R = !0,
    ...j
  } = e, v = {
    ..._,
    text: _?.text ?? w
  };
  "maxVisibleItems" in j && delete j.maxVisibleItems;
  const T = v.href && !m.href || v.href && v.href === m.href, C = T ? v.href : m.href, h = ye(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": N === "organisation" || y,
      "nhsuk-header--white": N === "white"
    },
    f
  ), I = ye(
    "nhsuk-header__container",
    $
  ), k = ye(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": M?.white,
      "nhsuk-header__navigation--justified": M?.justified
    },
    M?.className
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
  ), S = () => m.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: m.src,
      width: "280",
      alt: m.ariaLabel || "NHS"
    }
  ) : b(), D = () => y ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      y.name,
      y.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        y.split
      ] })
    ] }),
    y.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: y.descriptor })
  ] }) : null, Q = (U, H) => U ? H ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: H, children: U }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: U }) : null, O = (U) => U.active || U.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: U.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: U.html } }) : U.text }) : U.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: U.html } }) : U.text, A = () => /* @__PURE__ */ n.jsx(
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
  return M?.items, /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: h,
      role: "banner",
      "data-module": "nhsuk-header",
      ...F,
      ...j,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: I, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            C ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: C, children: [
              S(),
              D(),
              T && Q(v.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              S(),
              D(),
              T && Q(v.text)
            ] }),
            v.text && !T && Q(v.text, v.href)
          ] }),
          u ?? null,
          /* @__PURE__ */ n.jsx(
            Go,
            {
              ...g,
              variant: N === "white" ? "white" : "default"
            }
          )
        ] }),
        M && M.items && M.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: k,
            "aria-label": M.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: ye(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": r && t === "client",
                    "nhsuk-header__navigation-container--ssr": !r
                  },
                  $
                ),
                ref: d,
                children: /* @__PURE__ */ n.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: c,
                    children: [
                      (M?.items || []).map((U, H) => /* @__PURE__ */ n.jsx(
                        "li",
                        {
                          className: ye(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": U.active || U.current,
                              "nhsuk-header__navigation-item--hidden": s && o !== void 0 && H >= (o ?? 0)
                            },
                            U.className
                          ),
                          ...U.attributes || {},
                          children: /* @__PURE__ */ n.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: U.href,
                              ...U.active || U.current ? { "aria-current": U.current ? "page" : "true" } : {},
                              children: O(U)
                            }
                          )
                        },
                        H
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
                            A()
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
        r && M && M.items && M.items.length > 0 && a && i && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: M.items.slice(o ?? 0).map((U, H) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: ye("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": U.active || U.current
                }),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: U.href,
                    ...U.active || U.current ? { "aria-current": U.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: O(U)
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
const Jc = ({
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
  results: _ = [],
  formAttributes: w = {},
  inputAttributes: y = {},
  buttonAttributes: p = {},
  preventDefaultSubmit: g = !1,
  debounceMs: M = 300,
  minQueryLength: $ = 1
}) => {
  const [N, F] = Le(""), [P, R] = Le(!1), j = Ee(void 0), v = Ee(null), T = Ee(null), C = e === "controlled" && s !== void 0, h = C ? s : N, I = ge((ae) => {
    j.current && clearTimeout(j.current), j.current = setTimeout(() => {
      u.onChange && ae.length >= $ && u.onChange(ae);
    }, M);
  }, [u.onChange, M, $]), k = ge((ae) => {
    const z = ae.target.value;
    C || F(z), e !== "form" && I(z);
  }, [C, e, I]), b = ge((ae) => {
    const z = h.trim(), fe = {
      query: z,
      timestamp: Date.now(),
      formData: new FormData(ae.currentTarget)
    };
    e === "controlled" || e === "hybrid" && g ? (ae.preventDefault(), u.onSearch && z.length >= $ && u.onSearch(fe)) : e === "hybrid" && u.onSearch && z.length >= $ && u.onSearch(fe);
  }, [e, h, u.onSearch, g, $]), S = ge(() => {
    R(!0), u.onFocus?.();
  }, [u.onFocus]), D = ge(() => {
    R(!1), u.onBlur?.();
  }, [u.onBlur]), Q = ge(() => {
    C || F(""), u.onClear?.(), T.current?.focus();
  }, [C, u.onClear]);
  ze(() => () => {
    j.current && clearTimeout(j.current);
  }, []);
  const O = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: ye("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": f
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), A = () => /* @__PURE__ */ n.jsx(
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
  ), U = () => !h || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: Q,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), H = () => !m || !_.length || !P ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: _.map((ae) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: ae.href ? /* @__PURE__ */ n.jsxs("a", { href: ae.href, className: "nhsuk-header__search-result-link", children: [
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
  return /* @__PURE__ */ n.jsxs("div", { className: ye("nhsuk-header__search", d, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": f,
    "nhsuk-header__search--focused": P,
    "nhsuk-header__search--has-results": m && _.length > 0
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
                ref: T,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: o,
                autoComplete: "off",
                value: h,
                onChange: k,
                onFocus: S,
                onBlur: D,
                disabled: c || f,
                ...m && _.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...y
              }
            ),
            U()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || f || e !== "form" && h.length < $,
              ...p,
              children: [
                f ? A() : O(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    H()
  ] });
}, ti = ({
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
  const [f, m] = Le(!1), [_, w] = Le(!1), [y, p] = Le(i?.items?.length || 0), [g, M] = Le(!1), [$, N] = Le(!1), F = Ee(null), P = Ee(null), R = Ee(!1);
  ze(() => {
    typeof window > "u" || N(!0);
  }, []), ze(() => {
    if (typeof document > "u") return;
    const C = (h) => {
      h.key === "Escape" && f && m(!1);
    };
    if (f)
      return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
  }, [f]);
  const j = Ee(null), v = ge(() => {
    if (!$ || !i?.items || i.items.length === 0 || R.current) return;
    const C = F.current, h = P.current;
    if (!C || !h) return;
    R.current = !0, C.classList.add("nhsuk-header__navigation-container--measuring");
    const I = C.clientWidth, k = Array.from(h.children);
    if (!k.length) {
      C.classList.remove("nhsuk-header__navigation-container--measuring"), R.current = !1;
      return;
    }
    if (j.current == null) {
      const z = document.createElement("button");
      z.type = "button", z.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", z.style.position = "absolute", z.style.visibility = "hidden", z.style.pointerEvents = "none", z.innerHTML = "<span>More</span>", C.appendChild(z), j.current = z.getBoundingClientRect().width || 104, C.removeChild(z);
    }
    const b = j.current + 16;
    let S = 0, D = 0;
    const Q = window.getComputedStyle(C), O = parseFloat(Q.paddingLeft) || 0, A = parseFloat(Q.paddingRight) || 0;
    let U = O + A;
    for (const z of k) {
      const fe = z.getBoundingClientRect().width;
      if (S + fe + b + U > I) break;
      S += fe, D += 1;
    }
    const H = D < i.items.length, ae = H ? D : i.items.length;
    w((z) => z === H ? z : H), p((z) => z === ae ? z : ae), C.classList.remove("nhsuk-header__navigation-container--measuring"), R.current = !1;
  }, [$, i?.items]);
  ze(() => {
    if (!$) return;
    const C = F.current;
    if (!C) return;
    let h = null;
    const I = () => {
      h == null && (h = window.requestAnimationFrame(() => {
        h = null, v();
      }));
    };
    v();
    const k = new ResizeObserver(() => I());
    return k.observe(C), P.current && k.observe(P.current), () => {
      h != null && window.cancelAnimationFrame(h), k.disconnect();
    };
  }, [$, v]), ze(() => {
    $ && v();
  }, [i?.items?.length, $, v]);
  const T = (C) => {
    C && (C.preventDefault(), C.stopPropagation());
    const h = !f;
    m(h), M(h);
  };
  return Zc(
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
      isClient: $,
      menuOpen: f,
      showMoreButton: _,
      visibleItems: y,
      dropdownVisible: g,
      toggleMenu: T,
      navContainerRef: F,
      navListRef: P,
      // Provide interactive search node for client build only
      searchNode: s ? /* @__PURE__ */ n.jsx(Jc, { ...s }) : null
    }
  );
};
function Qc(e, { variant: t, isClient: r }) {
  const {
    className: a,
    logo: s = {},
    service: o = {},
    serviceName: i,
    organisation: l,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: d,
    navigation: c,
    containerClasses: u,
    variant: f = "default",
    attributes: m = {},
    maxVisibleItems: _,
    // deprecated (ignored)
    responsiveNavigation: w = !0,
    ...y
  } = e;
  "maxVisibleItems" in y && delete y.maxVisibleItems;
  const p = {
    ...o,
    text: o?.text ?? i
  }, g = p.href && !s.href || p.href && p.href === s.href, M = g ? p.href : s.href, $ = ye(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    a
  ), N = ye("nhsuk-header__container", u), F = ye(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": c?.white,
      "nhsuk-header__navigation--justified": c?.justified
    },
    c?.className
  ), P = () => /* @__PURE__ */ n.jsxs(
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
  ), R = () => s.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: s.src,
      width: "280",
      alt: s.ariaLabel || "NHS"
    }
  ) : P(), j = () => l ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, v = (k, b) => k ? b ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: b, children: k }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: k }) : null, T = (k) => k.active || k.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text }) : k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text, C = c?.items && !w, h = C ? [] : c?.items, I = C ? c.items : [];
  return /* @__PURE__ */ n.jsxs("header", { className: $, role: "banner", "data-module": "nhsuk-header", ...m, ...y, children: [
    /* @__PURE__ */ n.jsxs("div", { className: N, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
        M ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: M, children: [
          R(),
          j(),
          g && v(p.text)
        ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          R(),
          j(),
          g && v(p.text)
        ] }),
        p.text && !g && v(p.text, p.href)
      ] }),
      /* @__PURE__ */ n.jsx(Go, { ...d, variant: f === "white" ? "white" : "default" })
    ] }),
    c && c.items && c.items.length > 0 && /* @__PURE__ */ n.jsx("nav", { className: F, "aria-label": c.ariaLabel || "Menu", children: /* @__PURE__ */ n.jsx(
      "div",
      {
        className: ye(
          "nhsuk-header_navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--ssr": !r
          },
          u
        ),
        children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-list", children: (h || []).map((k, b) => /* @__PURE__ */ n.jsx(
          "li",
          {
            className: ye("nhsuk-header__navigation-item", {
              "nhsuk-header__navigation-item--current": k.active || k.current
            }, k.className),
            ...k.attributes || {},
            children: /* @__PURE__ */ n.jsx(
              "a",
              {
                className: "nhsuk-header__navigation-link",
                href: k.href,
                ...k.active || k.current ? { "aria-current": k.current ? "page" : "true" } : {},
                children: T(k)
              }
            )
          },
          b
        )) })
      }
    ) }),
    C && I.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: I.map((k, b) => /* @__PURE__ */ n.jsx(
      "li",
      {
        className: ye("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": k.active || k.current
        }),
        children: /* @__PURE__ */ n.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: k.href,
            ...k.active || k.current ? { "aria-current": k.current ? "page" : "true" } : {},
            children: T(k)
          }
        )
      },
      `overflow-server-${b}`
    )) }) })
  ] });
}
const rb = (e) => Qc(e, {
  variant: "server",
  isClient: !1
}), ed = ({
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
  ].filter(Boolean).join(" "), _ = d || e || a || s, w = () => {
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
      className: u,
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...c,
      children: [
        o && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: _ && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          w(),
          d || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && _ && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          w(),
          d || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
ed.displayName = "Hero";
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
  const f = (_, w = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: ye("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": w
      }),
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: _.URL,
          target: _.newWindow ? "_blank" : void 0,
          rel: _.newWindow ? "noopener noreferrer" : void 0,
          children: _.label
        }
      )
    },
    `${_.URL}-${_.label}`
  ), m = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...d }, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: ye("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ n.jsx("div", { className: ye("nhsuk-footer", e), style: c, children: m ? (
            // Multi-column layout
            /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((_) => f(_)) }),
              r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((_) => f(_)) }),
              a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((_) => f(_)) }),
              s && s.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((_) => f(_)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((_) => f(_, !0)),
              (r || []).map((_) => f(_, !0)),
              (a || []).map((_) => f(_, !0)),
              (s || []).map((_) => f(_, !0))
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
function td(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ys(e) {
  let t, r, a;
  e.length !== 2 ? (t = er, r = (l, d) => er(e(l), d), a = (l, d) => e(l) - d) : (t = e === er || e === td ? e : nd, r = e, a = e);
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
function nd() {
  return 0;
}
function rd(e) {
  return e === null ? NaN : +e;
}
const ad = ys(er), sd = ad.right;
ys(rd).center;
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
class Gs extends Map {
  constructor(t, r = ld) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [a, s] of t) this.set(a, s);
  }
  get(t) {
    return super.get(Vs(this, t));
  }
  has(t) {
    return super.has(Vs(this, t));
  }
  set(t, r) {
    return super.set(od(this, t), r);
  }
  delete(t) {
    return super.delete(id(this, t));
  }
}
function Vs({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : r;
}
function od({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : (e.set(a, r), r);
}
function id({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) && (r = e.get(a), e.delete(a)), r;
}
function ld(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const cd = Math.sqrt(50), dd = Math.sqrt(10), ud = Math.sqrt(2);
function ar(e, t, r) {
  const a = (t - e) / Math.max(0, r), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= cd ? 10 : o >= dd ? 5 : o >= ud ? 2 : 1;
  let l, d, c;
  return s < 0 ? (c = Math.pow(10, -s) / i, l = Math.round(e * c), d = Math.round(t * c), l / c < e && ++l, d / c > t && --d, c = -c) : (c = Math.pow(10, s) * i, l = Math.round(e / c), d = Math.round(t / c), l * c < e && ++l, d * c > t && --d), d < l && 0.5 <= r && r < 2 ? ar(e, t, r * 2) : [l, d, c];
}
function fd(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [s, o, i] = a ? ar(t, e, r) : ar(e, t, r);
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
  return t = +t, e = +e, r = +r, ar(e, t, r)[2];
}
function Fa(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, s = a ? Pa(t, e, r) : Pa(e, t, r);
  return (a ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function pd(e, t, r) {
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
const Ys = Symbol("implicit");
function ai() {
  var e = new Gs(), t = [], r = [], a = Ys;
  function s(o) {
    let i = e.get(o);
    if (i === void 0) {
      if (a !== Ys) return a;
      e.set(o, i = t.push(o) - 1);
    }
    return r[i % r.length];
  }
  return s.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [], e = new Gs();
    for (const i of o)
      e.has(i) || e.set(i, t.push(i) - 1);
    return s;
  }, s.range = function(o) {
    return arguments.length ? (r = Array.from(o), s) : r.slice();
  }, s.unknown = function(o) {
    return arguments.length ? (a = o, s) : a;
  }, s.copy = function() {
    return ai(t, r).unknown(a);
  }, qr.apply(s, arguments), s;
}
function si() {
  var e = ai().unknown(void 0), t = e.domain, r = e.range, a = 0, s = 1, o, i, l = !1, d = 0, c = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var m = t().length, _ = s < a, w = _ ? s : a, y = _ ? a : s;
    o = (y - w) / Math.max(1, m - d + c * 2), l && (o = Math.floor(o)), w += (y - w - o * (m - d)) * u, i = o * (1 - d), l && (w = Math.round(w), i = Math.round(i));
    var p = pd(m).map(function(g) {
      return w + o * g;
    });
    return r(_ ? p.reverse() : p);
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
  }, qr.apply(f(), arguments);
}
function vs(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function oi(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function Wn() {
}
var Fn = 0.7, sr = 1 / Fn, gn = "\\s*([+-]?\\d+)\\s*", En = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", hd = /^#([0-9a-f]{3,8})$/, md = new RegExp(`^rgb\\(${gn},${gn},${gn}\\)$`), gd = new RegExp(`^rgb\\(${wt},${wt},${wt}\\)$`), xd = new RegExp(`^rgba\\(${gn},${gn},${gn},${En}\\)$`), bd = new RegExp(`^rgba\\(${wt},${wt},${wt},${En}\\)$`), yd = new RegExp(`^hsl\\(${En},${wt},${wt}\\)$`), vd = new RegExp(`^hsla\\(${En},${wt},${wt},${En}\\)$`), qs = {
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
vs(Wn, Rn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ks,
  // Deprecated! Use color.formatHex.
  formatHex: Ks,
  formatHex8: _d,
  formatHsl: wd,
  formatRgb: Xs,
  toString: Xs
});
function Ks() {
  return this.rgb().formatHex();
}
function _d() {
  return this.rgb().formatHex8();
}
function wd() {
  return ii(this).formatHsl();
}
function Xs() {
  return this.rgb().formatRgb();
}
function Rn(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = hd.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Zs(t) : r === 3 ? new ut(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Xn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Xn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = md.exec(e)) ? new ut(t[1], t[2], t[3], 1) : (t = gd.exec(e)) ? new ut(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = xd.exec(e)) ? Xn(t[1], t[2], t[3], t[4]) : (t = bd.exec(e)) ? Xn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = yd.exec(e)) ? eo(t[1], t[2] / 100, t[3] / 100, 1) : (t = vd.exec(e)) ? eo(t[1], t[2] / 100, t[3] / 100, t[4]) : qs.hasOwnProperty(e) ? Zs(qs[e]) : e === "transparent" ? new ut(NaN, NaN, NaN, 0) : null;
}
function Zs(e) {
  return new ut(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Xn(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new ut(e, t, r, a);
}
function Sd(e) {
  return e instanceof Wn || (e = Rn(e)), e ? (e = e.rgb(), new ut(e.r, e.g, e.b, e.opacity)) : new ut();
}
function Ea(e, t, r, a) {
  return arguments.length === 1 ? Sd(e) : new ut(e, t, r, a ?? 1);
}
function ut(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
vs(ut, Ea, oi(Wn, {
  brighter(e) {
    return e = e == null ? sr : Math.pow(sr, e), new ut(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Fn : Math.pow(Fn, e), new ut(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ut(Qt(this.r), Qt(this.g), Qt(this.b), or(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Js,
  // Deprecated! Use color.formatHex.
  formatHex: Js,
  formatHex8: kd,
  formatRgb: Qs,
  toString: Qs
}));
function Js() {
  return `#${Jt(this.r)}${Jt(this.g)}${Jt(this.b)}`;
}
function kd() {
  return `#${Jt(this.r)}${Jt(this.g)}${Jt(this.b)}${Jt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Qs() {
  const e = or(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Qt(this.r)}, ${Qt(this.g)}, ${Qt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function or(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Qt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Jt(e) {
  return e = Qt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function eo(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new gt(e, t, r, a);
}
function ii(e) {
  if (e instanceof gt) return new gt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Wn || (e = Rn(e)), !e) return new gt();
  if (e instanceof gt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, s = Math.min(t, r, a), o = Math.max(t, r, a), i = NaN, l = o - s, d = (o + s) / 2;
  return l ? (t === o ? i = (r - a) / l + (r < a) * 6 : r === o ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= d < 0.5 ? o + s : 2 - o - s, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new gt(i, l, d, e.opacity);
}
function Cd(e, t, r, a) {
  return arguments.length === 1 ? ii(e) : new gt(e, t, r, a ?? 1);
}
function gt(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
vs(gt, Cd, oi(Wn, {
  brighter(e) {
    return e = e == null ? sr : Math.pow(sr, e), new gt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Fn : Math.pow(Fn, e), new gt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - a;
    return new ut(
      ha(e >= 240 ? e - 240 : e + 120, s, a),
      ha(e, s, a),
      ha(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new gt(to(this.h), Zn(this.s), Zn(this.l), or(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = or(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${to(this.h)}, ${Zn(this.s) * 100}%, ${Zn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function to(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Zn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ha(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const _s = (e) => () => e;
function jd(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Nd(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function Td(e) {
  return (e = +e) == 1 ? li : function(t, r) {
    return r - t ? Nd(t, r, e) : _s(isNaN(t) ? r : t);
  };
}
function li(e, t) {
  var r = t - e;
  return r ? jd(e, r) : _s(isNaN(e) ? t : e);
}
const no = (function e(t) {
  var r = Td(t);
  function a(s, o) {
    var i = r((s = Ea(s)).r, (o = Ea(o)).r), l = r(s.g, o.g), d = r(s.b, o.b), c = li(s.opacity, o.opacity);
    return function(u) {
      return s.r = i(u), s.g = l(u), s.b = d(u), s.opacity = c(u), s + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Dd(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), s;
  return function(o) {
    for (s = 0; s < r; ++s) a[s] = e[s] * (1 - o) + t[s] * o;
    return a;
  };
}
function $d(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Id(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, s = new Array(a), o = new Array(r), i;
  for (i = 0; i < a; ++i) s[i] = ws(e[i], t[i]);
  for (; i < r; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) o[i] = s[i](l);
    return o;
  };
}
function Md(e, t) {
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
function Ld(e, t) {
  var r = {}, a = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? r[s] = ws(e[s], t[s]) : a[s] = t[s];
  return function(o) {
    for (s in r) a[s] = r[s](o);
    return a;
  };
}
var Ra = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ma = new RegExp(Ra.source, "g");
function Pd(e) {
  return function() {
    return e;
  };
}
function Fd(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ed(e, t) {
  var r = Ra.lastIndex = ma.lastIndex = 0, a, s, o, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (a = Ra.exec(e)) && (s = ma.exec(t)); )
    (o = s.index) > r && (o = t.slice(r, o), l[i] ? l[i] += o : l[++i] = o), (a = a[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, d.push({ i, x: ir(a, s) })), r = ma.lastIndex;
  return r < t.length && (o = t.slice(r), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? d[0] ? Fd(d[0].x) : Pd(t) : (t = d.length, function(c) {
    for (var u = 0, f; u < t; ++u) l[(f = d[u]).i] = f.x(c);
    return l.join("");
  });
}
function ws(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? _s(t) : (r === "number" ? ir : r === "string" ? (a = Rn(t)) ? (t = a, no) : Ed : t instanceof Rn ? no : t instanceof Date ? Md : $d(t) ? Dd : Array.isArray(t) ? Id : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Ld : ir)(e, t);
}
function Rd(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Ad(e) {
  return function() {
    return e;
  };
}
function Bd(e) {
  return +e;
}
var ro = [0, 1];
function hn(e) {
  return e;
}
function Aa(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Ad(isNaN(t) ? NaN : 0.5);
}
function Hd(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function zd(e, t, r) {
  var a = e[0], s = e[1], o = t[0], i = t[1];
  return s < a ? (a = Aa(s, a), o = r(i, o)) : (a = Aa(a, s), o = r(o, i)), function(l) {
    return o(a(l));
  };
}
function Od(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, s = new Array(a), o = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    s[i] = Aa(e[i], e[i + 1]), o[i] = r(t[i], t[i + 1]);
  return function(l) {
    var d = sd(e, l, 1, a) - 1;
    return o[d](s[d](l));
  };
}
function ci(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Wd() {
  var e = ro, t = ro, r = ws, a, s, o, i = hn, l, d, c;
  function u() {
    var m = Math.min(e.length, t.length);
    return i !== hn && (i = Hd(e[0], e[m - 1])), l = m > 2 ? Od : zd, d = c = null, f;
  }
  function f(m) {
    return m == null || isNaN(m = +m) ? o : (d || (d = l(e.map(a), t, r)))(a(i(m)));
  }
  return f.invert = function(m) {
    return i(s((c || (c = l(t, e.map(a), ir)))(m)));
  }, f.domain = function(m) {
    return arguments.length ? (e = Array.from(m, Bd), u()) : e.slice();
  }, f.range = function(m) {
    return arguments.length ? (t = Array.from(m), u()) : t.slice();
  }, f.rangeRound = function(m) {
    return t = Array.from(m), r = Rd, u();
  }, f.clamp = function(m) {
    return arguments.length ? (i = m ? !0 : hn, u()) : i !== hn;
  }, f.interpolate = function(m) {
    return arguments.length ? (r = m, u()) : r;
  }, f.unknown = function(m) {
    return arguments.length ? (o = m, f) : o;
  }, function(m, _) {
    return a = m, s = _, u();
  };
}
function di() {
  return Wd()(hn, hn);
}
function Ud(e) {
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
function Gd(e, t) {
  return function(r, a) {
    for (var s = r.length, o = [], i = 0, l = e[0], d = 0; s > 0 && l > 0 && (d + l + 1 > a && (l = Math.max(1, a - d)), o.push(r.substring(s -= l, s + l)), !((d += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return o.reverse().join(t);
  };
}
function Vd(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var Yd = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function cr(e) {
  if (!(t = Yd.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Ss({
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
cr.prototype = Ss.prototype;
function Ss(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Ss.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function qd(e) {
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
function Kd(e, t) {
  var r = lr(e, t);
  if (!r) return e + "";
  var a = r[0], s = r[1], o = s - (ui = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, i = a.length;
  return o === i ? a : o > i ? a + new Array(o - i + 1).join("0") : o > 0 ? a.slice(0, o) + "." + a.slice(o) : "0." + new Array(1 - o).join("0") + lr(e, Math.max(0, t + o - 1))[0];
}
function ao(e, t) {
  var r = lr(e, t);
  if (!r) return e + "";
  var a = r[0], s = r[1];
  return s < 0 ? "0." + new Array(-s).join("0") + a : a.length > s + 1 ? a.slice(0, s + 1) + "." + a.slice(s + 1) : a + new Array(s - a.length + 2).join("0");
}
const so = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Ud,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ao(e * 100, t),
  r: ao,
  s: Kd,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function oo(e) {
  return e;
}
var io = Array.prototype.map, lo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Xd(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? oo : Gd(io.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? oo : Vd(io.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", d = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = cr(f);
    var m = f.fill, _ = f.align, w = f.sign, y = f.symbol, p = f.zero, g = f.width, M = f.comma, $ = f.precision, N = f.trim, F = f.type;
    F === "n" ? (M = !0, F = "g") : so[F] || ($ === void 0 && ($ = 12), N = !0, F = "g"), (p || m === "0" && _ === "=") && (p = !0, m = "0", _ = "=");
    var P = y === "$" ? r : y === "#" && /[boxX]/.test(F) ? "0" + F.toLowerCase() : "", R = y === "$" ? a : /[%p]/.test(F) ? i : "", j = so[F], v = /[defgprs%]/.test(F);
    $ = $ === void 0 ? 6 : /[gprs]/.test(F) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
    function T(C) {
      var h = P, I = R, k, b, S;
      if (F === "c")
        I = j(C) + I, C = "";
      else {
        C = +C;
        var D = C < 0 || 1 / C < 0;
        if (C = isNaN(C) ? d : j(Math.abs(C), $), N && (C = qd(C)), D && +C == 0 && w !== "+" && (D = !1), h = (D ? w === "(" ? w : l : w === "-" || w === "(" ? "" : w) + h, I = (F === "s" ? lo[8 + ui / 3] : "") + I + (D && w === "(" ? ")" : ""), v) {
          for (k = -1, b = C.length; ++k < b; )
            if (S = C.charCodeAt(k), 48 > S || S > 57) {
              I = (S === 46 ? s + C.slice(k + 1) : C.slice(k)) + I, C = C.slice(0, k);
              break;
            }
        }
      }
      M && !p && (C = t(C, 1 / 0));
      var Q = h.length + C.length + I.length, O = Q < g ? new Array(g - Q + 1).join(m) : "";
      switch (M && p && (C = t(O + C, O.length ? g - I.length : 1 / 0), O = ""), _) {
        case "<":
          C = h + C + I + O;
          break;
        case "=":
          C = h + O + C + I;
          break;
        case "^":
          C = O.slice(0, Q = O.length >> 1) + h + C + I + O.slice(Q);
          break;
        default:
          C = O + h + C + I;
          break;
      }
      return o(C);
    }
    return T.toString = function() {
      return f + "";
    }, T;
  }
  function u(f, m) {
    var _ = c((f = cr(f), f.type = "f", f)), w = Math.max(-8, Math.min(8, Math.floor(vn(m) / 3))) * 3, y = Math.pow(10, -w), p = lo[8 + w / 3];
    return function(g) {
      return _(y * g) + p;
    };
  }
  return {
    format: c,
    formatPrefix: u
  };
}
var Jn, fi, pi;
Zd({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Zd(e) {
  return Jn = Xd(e), fi = Jn.format, pi = Jn.formatPrefix, Jn;
}
function Jd(e) {
  return Math.max(0, -vn(Math.abs(e)));
}
function Qd(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(vn(t) / 3))) * 3 - vn(Math.abs(e)));
}
function eu(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, vn(t) - vn(e)) + 1;
}
function tu(e, t, r, a) {
  var s = Fa(e, t, r), o;
  switch (a = cr(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(o = Qd(s, i)) && (a.precision = o), pi(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(o = eu(s, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = o - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(o = Jd(s)) && (a.precision = o - (a.type === "%") * 2);
      break;
    }
  }
  return fi(a);
}
function nu(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var a = t();
    return fd(a[0], a[a.length - 1], r ?? 10);
  }, e.tickFormat = function(r, a) {
    var s = t();
    return tu(s[0], s[s.length - 1], r ?? 10, a);
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
function dr() {
  var e = di();
  return e.copy = function() {
    return ci(e, dr());
  }, qr.apply(e, arguments), nu(e);
}
function ru(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, s = e[r], o = e[a], i;
  return o < s && (i = r, r = a, a = i, i = s, s = o, o = i), e[r] = t.floor(s), e[a] = t.ceil(o), e;
}
const ga = /* @__PURE__ */ new Date(), xa = /* @__PURE__ */ new Date();
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
  }), r && (s.count = (o, i) => (ga.setTime(+o), xa.setTime(+i), e(ga), e(xa), Math.floor(r(ga, xa))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(a ? (i) => a(i) % o === 0 : (i) => s.count(0, i) % o === 0) : s)), s;
}
const ur = et(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ur.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? et((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : ur);
ur.range;
const Rt = 1e3, mt = Rt * 60, At = mt * 60, Ht = At * 24, ks = Ht * 7, co = Ht * 30, ba = Ht * 365, mn = et((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Rt);
}, (e, t) => (t - e) / Rt, (e) => e.getUTCSeconds());
mn.range;
const Cs = et((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Rt);
}, (e, t) => {
  e.setTime(+e + t * mt);
}, (e, t) => (t - e) / mt, (e) => e.getMinutes());
Cs.range;
const au = et((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * mt);
}, (e, t) => (t - e) / mt, (e) => e.getUTCMinutes());
au.range;
const js = et((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Rt - e.getMinutes() * mt);
}, (e, t) => {
  e.setTime(+e + t * At);
}, (e, t) => (t - e) / At, (e) => e.getHours());
js.range;
const su = et((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * At);
}, (e, t) => (t - e) / At, (e) => e.getUTCHours());
su.range;
const Un = et(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * mt) / Ht,
  (e) => e.getDate() - 1
);
Un.range;
const Ns = et((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ht, (e) => e.getUTCDate() - 1);
Ns.range;
const ou = et((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ht, (e) => Math.floor(e / Ht));
ou.range;
function sn(e) {
  return et((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * mt) / ks);
}
const Kr = sn(0), fr = sn(1), iu = sn(2), lu = sn(3), _n = sn(4), cu = sn(5), du = sn(6);
Kr.range;
fr.range;
iu.range;
lu.range;
_n.range;
cu.range;
du.range;
function on(e) {
  return et((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / ks);
}
const hi = on(0), pr = on(1), uu = on(2), fu = on(3), wn = on(4), pu = on(5), hu = on(6);
hi.range;
pr.range;
uu.range;
fu.range;
wn.range;
pu.range;
hu.range;
const An = et((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
An.range;
const mu = et((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
mu.range;
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
function gu(e, t, r, a, s, o) {
  const i = [
    [mn, 1, Rt],
    [mn, 5, 5 * Rt],
    [mn, 15, 15 * Rt],
    [mn, 30, 30 * Rt],
    [o, 1, mt],
    [o, 5, 5 * mt],
    [o, 15, 15 * mt],
    [o, 30, 30 * mt],
    [s, 1, At],
    [s, 3, 3 * At],
    [s, 6, 6 * At],
    [s, 12, 12 * At],
    [a, 1, Ht],
    [a, 2, 2 * Ht],
    [r, 1, ks],
    [t, 1, co],
    [t, 3, 3 * co],
    [e, 1, ba]
  ];
  function l(c, u, f) {
    const m = u < c;
    m && ([c, u] = [u, c]);
    const _ = f && typeof f.range == "function" ? f : d(c, u, f), w = _ ? _.range(c, +u + 1) : [];
    return m ? w.reverse() : w;
  }
  function d(c, u, f) {
    const m = Math.abs(u - c) / f, _ = ys(([, , p]) => p).right(i, m);
    if (_ === i.length) return e.every(Fa(c / ba, u / ba, f));
    if (_ === 0) return ur.every(Math.max(Fa(c, u, f), 1));
    const [w, y] = i[m / i[_ - 1][2] < i[_][2] / m ? _ - 1 : _];
    return w.every(y);
  }
  return [l, d];
}
const [xu, bu] = gu(zt, An, Kr, Un, js, Cs);
function ya(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function va(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Tn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function yu(e) {
  var t = e.dateTime, r = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = Dn(s), u = $n(s), f = Dn(o), m = $n(o), _ = Dn(i), w = $n(i), y = Dn(l), p = $n(l), g = Dn(d), M = $n(d), $ = {
    a: D,
    A: Q,
    b: O,
    B: A,
    c: null,
    d: go,
    e: go,
    f: Ou,
    g: Ju,
    G: ef,
    H: Bu,
    I: Hu,
    j: zu,
    L: mi,
    m: Wu,
    M: Uu,
    p: U,
    q: H,
    Q: yo,
    s: vo,
    S: Gu,
    u: Vu,
    U: Yu,
    V: qu,
    w: Ku,
    W: Xu,
    x: null,
    X: null,
    y: Zu,
    Y: Qu,
    Z: tf,
    "%": bo
  }, N = {
    a: ae,
    A: z,
    b: fe,
    B: ve,
    c: null,
    d: xo,
    e: xo,
    f: sf,
    g: gf,
    G: bf,
    H: nf,
    I: rf,
    j: af,
    L: xi,
    m: of,
    M: lf,
    p: le,
    q: ue,
    Q: yo,
    s: vo,
    S: cf,
    u: df,
    U: uf,
    V: ff,
    w: pf,
    W: hf,
    x: null,
    X: null,
    y: mf,
    Y: xf,
    Z: yf,
    "%": bo
  }, F = {
    a: T,
    A: C,
    b: h,
    B: I,
    c: k,
    d: ho,
    e: ho,
    f: Fu,
    g: po,
    G: fo,
    H: mo,
    I: mo,
    j: Iu,
    L: Pu,
    m: $u,
    M: Mu,
    p: v,
    q: Du,
    Q: Ru,
    s: Au,
    S: Lu,
    u: ku,
    U: Cu,
    V: ju,
    w: Su,
    W: Nu,
    x: b,
    X: S,
    y: po,
    Y: fo,
    Z: Tu,
    "%": Eu
  };
  $.x = P(r, $), $.X = P(a, $), $.c = P(t, $), N.x = P(r, N), N.X = P(a, N), N.c = P(t, N);
  function P(J, te) {
    return function(de) {
      var x = [], E = -1, B = 0, Z = J.length, V, ne, he;
      for (de instanceof Date || (de = /* @__PURE__ */ new Date(+de)); ++E < Z; )
        J.charCodeAt(E) === 37 && (x.push(J.slice(B, E)), (ne = uo[V = J.charAt(++E)]) != null ? V = J.charAt(++E) : ne = V === "e" ? " " : "0", (he = te[V]) && (V = he(de, ne)), x.push(V), B = E + 1);
      return x.push(J.slice(B, E)), x.join("");
    };
  }
  function R(J, te) {
    return function(de) {
      var x = Tn(1900, void 0, 1), E = j(x, J, de += "", 0), B, Z;
      if (E != de.length) return null;
      if ("Q" in x) return new Date(x.Q);
      if ("s" in x) return new Date(x.s * 1e3 + ("L" in x ? x.L : 0));
      if (te && !("Z" in x) && (x.Z = 0), "p" in x && (x.H = x.H % 12 + x.p * 12), x.m === void 0 && (x.m = "q" in x ? x.q : 0), "V" in x) {
        if (x.V < 1 || x.V > 53) return null;
        "w" in x || (x.w = 1), "Z" in x ? (B = va(Tn(x.y, 0, 1)), Z = B.getUTCDay(), B = Z > 4 || Z === 0 ? pr.ceil(B) : pr(B), B = Ns.offset(B, (x.V - 1) * 7), x.y = B.getUTCFullYear(), x.m = B.getUTCMonth(), x.d = B.getUTCDate() + (x.w + 6) % 7) : (B = ya(Tn(x.y, 0, 1)), Z = B.getDay(), B = Z > 4 || Z === 0 ? fr.ceil(B) : fr(B), B = Un.offset(B, (x.V - 1) * 7), x.y = B.getFullYear(), x.m = B.getMonth(), x.d = B.getDate() + (x.w + 6) % 7);
      } else ("W" in x || "U" in x) && ("w" in x || (x.w = "u" in x ? x.u % 7 : "W" in x ? 1 : 0), Z = "Z" in x ? va(Tn(x.y, 0, 1)).getUTCDay() : ya(Tn(x.y, 0, 1)).getDay(), x.m = 0, x.d = "W" in x ? (x.w + 6) % 7 + x.W * 7 - (Z + 5) % 7 : x.w + x.U * 7 - (Z + 6) % 7);
      return "Z" in x ? (x.H += x.Z / 100 | 0, x.M += x.Z % 100, va(x)) : ya(x);
    };
  }
  function j(J, te, de, x) {
    for (var E = 0, B = te.length, Z = de.length, V, ne; E < B; ) {
      if (x >= Z) return -1;
      if (V = te.charCodeAt(E++), V === 37) {
        if (V = te.charAt(E++), ne = F[V in uo ? te.charAt(E++) : V], !ne || (x = ne(J, de, x)) < 0) return -1;
      } else if (V != de.charCodeAt(x++))
        return -1;
    }
    return x;
  }
  function v(J, te, de) {
    var x = c.exec(te.slice(de));
    return x ? (J.p = u.get(x[0].toLowerCase()), de + x[0].length) : -1;
  }
  function T(J, te, de) {
    var x = _.exec(te.slice(de));
    return x ? (J.w = w.get(x[0].toLowerCase()), de + x[0].length) : -1;
  }
  function C(J, te, de) {
    var x = f.exec(te.slice(de));
    return x ? (J.w = m.get(x[0].toLowerCase()), de + x[0].length) : -1;
  }
  function h(J, te, de) {
    var x = g.exec(te.slice(de));
    return x ? (J.m = M.get(x[0].toLowerCase()), de + x[0].length) : -1;
  }
  function I(J, te, de) {
    var x = y.exec(te.slice(de));
    return x ? (J.m = p.get(x[0].toLowerCase()), de + x[0].length) : -1;
  }
  function k(J, te, de) {
    return j(J, t, te, de);
  }
  function b(J, te, de) {
    return j(J, r, te, de);
  }
  function S(J, te, de) {
    return j(J, a, te, de);
  }
  function D(J) {
    return i[J.getDay()];
  }
  function Q(J) {
    return o[J.getDay()];
  }
  function O(J) {
    return d[J.getMonth()];
  }
  function A(J) {
    return l[J.getMonth()];
  }
  function U(J) {
    return s[+(J.getHours() >= 12)];
  }
  function H(J) {
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
      var te = P(J += "", $);
      return te.toString = function() {
        return J;
      }, te;
    },
    parse: function(J) {
      var te = R(J += "", !1);
      return te.toString = function() {
        return J;
      }, te;
    },
    utcFormat: function(J) {
      var te = P(J += "", N);
      return te.toString = function() {
        return J;
      }, te;
    },
    utcParse: function(J) {
      var te = R(J += "", !0);
      return te.toString = function() {
        return J;
      }, te;
    }
  };
}
var uo = { "-": "", _: " ", 0: "0" }, at = /^\s*\d+/, vu = /^%/, _u = /[\\^$*+?|[\]().{}]/g;
function Ae(e, t, r) {
  var a = e < 0 ? "-" : "", s = (a ? -e : e) + "", o = s.length;
  return a + (o < r ? new Array(r - o + 1).join(t) + s : s);
}
function wu(e) {
  return e.replace(_u, "\\$&");
}
function Dn(e) {
  return new RegExp("^(?:" + e.map(wu).join("|") + ")", "i");
}
function $n(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Su(e, t, r) {
  var a = at.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function ku(e, t, r) {
  var a = at.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function Cu(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function ju(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function Nu(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function fo(e, t, r) {
  var a = at.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function po(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function Tu(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function Du(e, t, r) {
  var a = at.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function $u(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function ho(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function Iu(e, t, r) {
  var a = at.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function mo(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function Mu(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function Lu(e, t, r) {
  var a = at.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function Pu(e, t, r) {
  var a = at.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function Fu(e, t, r) {
  var a = at.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function Eu(e, t, r) {
  var a = vu.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function Ru(e, t, r) {
  var a = at.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Au(e, t, r) {
  var a = at.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function go(e, t) {
  return Ae(e.getDate(), t, 2);
}
function Bu(e, t) {
  return Ae(e.getHours(), t, 2);
}
function Hu(e, t) {
  return Ae(e.getHours() % 12 || 12, t, 2);
}
function zu(e, t) {
  return Ae(1 + Un.count(zt(e), e), t, 3);
}
function mi(e, t) {
  return Ae(e.getMilliseconds(), t, 3);
}
function Ou(e, t) {
  return mi(e, t) + "000";
}
function Wu(e, t) {
  return Ae(e.getMonth() + 1, t, 2);
}
function Uu(e, t) {
  return Ae(e.getMinutes(), t, 2);
}
function Gu(e, t) {
  return Ae(e.getSeconds(), t, 2);
}
function Vu(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Yu(e, t) {
  return Ae(Kr.count(zt(e) - 1, e), t, 2);
}
function gi(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? _n(e) : _n.ceil(e);
}
function qu(e, t) {
  return e = gi(e), Ae(_n.count(zt(e), e) + (zt(e).getDay() === 4), t, 2);
}
function Ku(e) {
  return e.getDay();
}
function Xu(e, t) {
  return Ae(fr.count(zt(e) - 1, e), t, 2);
}
function Zu(e, t) {
  return Ae(e.getFullYear() % 100, t, 2);
}
function Ju(e, t) {
  return e = gi(e), Ae(e.getFullYear() % 100, t, 2);
}
function Qu(e, t) {
  return Ae(e.getFullYear() % 1e4, t, 4);
}
function ef(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? _n(e) : _n.ceil(e), Ae(e.getFullYear() % 1e4, t, 4);
}
function tf(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ae(t / 60 | 0, "0", 2) + Ae(t % 60, "0", 2);
}
function xo(e, t) {
  return Ae(e.getUTCDate(), t, 2);
}
function nf(e, t) {
  return Ae(e.getUTCHours(), t, 2);
}
function rf(e, t) {
  return Ae(e.getUTCHours() % 12 || 12, t, 2);
}
function af(e, t) {
  return Ae(1 + Ns.count(rn(e), e), t, 3);
}
function xi(e, t) {
  return Ae(e.getUTCMilliseconds(), t, 3);
}
function sf(e, t) {
  return xi(e, t) + "000";
}
function of(e, t) {
  return Ae(e.getUTCMonth() + 1, t, 2);
}
function lf(e, t) {
  return Ae(e.getUTCMinutes(), t, 2);
}
function cf(e, t) {
  return Ae(e.getUTCSeconds(), t, 2);
}
function df(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function uf(e, t) {
  return Ae(hi.count(rn(e) - 1, e), t, 2);
}
function bi(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? wn(e) : wn.ceil(e);
}
function ff(e, t) {
  return e = bi(e), Ae(wn.count(rn(e), e) + (rn(e).getUTCDay() === 4), t, 2);
}
function pf(e) {
  return e.getUTCDay();
}
function hf(e, t) {
  return Ae(pr.count(rn(e) - 1, e), t, 2);
}
function mf(e, t) {
  return Ae(e.getUTCFullYear() % 100, t, 2);
}
function gf(e, t) {
  return e = bi(e), Ae(e.getUTCFullYear() % 100, t, 2);
}
function xf(e, t) {
  return Ae(e.getUTCFullYear() % 1e4, t, 4);
}
function bf(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? wn(e) : wn.ceil(e), Ae(e.getUTCFullYear() % 1e4, t, 4);
}
function yf() {
  return "+0000";
}
function bo() {
  return "%";
}
function yo(e) {
  return +e;
}
function vo(e) {
  return Math.floor(+e / 1e3);
}
var un, yi;
vf({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function vf(e) {
  return un = yu(e), yi = un.format, un.parse, un.utcFormat, un.utcParse, un;
}
function _f(e) {
  return new Date(e);
}
function wf(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function vi(e, t, r, a, s, o, i, l, d, c) {
  var u = di(), f = u.invert, m = u.domain, _ = c(".%L"), w = c(":%S"), y = c("%I:%M"), p = c("%I %p"), g = c("%a %d"), M = c("%b %d"), $ = c("%B"), N = c("%Y");
  function F(P) {
    return (d(P) < P ? _ : l(P) < P ? w : i(P) < P ? y : o(P) < P ? p : a(P) < P ? s(P) < P ? g : M : r(P) < P ? $ : N)(P);
  }
  return u.invert = function(P) {
    return new Date(f(P));
  }, u.domain = function(P) {
    return arguments.length ? m(Array.from(P, wf)) : m().map(_f);
  }, u.ticks = function(P) {
    var R = m();
    return e(R[0], R[R.length - 1], P ?? 10);
  }, u.tickFormat = function(P, R) {
    return R == null ? F : c(R);
  }, u.nice = function(P) {
    var R = m();
    return (!P || typeof P.range != "function") && (P = t(R[0], R[R.length - 1], P ?? 10)), P ? m(ru(R, P)) : u;
  }, u.copy = function() {
    return ci(u, vi(e, t, r, a, s, o, i, l, d, c));
  }, u;
}
function Ts() {
  return qr.apply(vi(xu, bu, zt, An, Kr, Un, js, Cs, mn, yi).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Sf({
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
  const c = Ee(null), [u, f] = Le(!1), [m, _] = Le(!1), w = t(e.start), y = t(e.end), p = Math.max(y - w, 20), g = () => {
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
  }, M = e.progress ? p * e.progress / 100 : 0, $ = () => {
    r?.(e);
  }, N = () => {
    a?.(e);
  }, F = (h) => {
    h.key === "Enter" ? (h.preventDefault(), $()) : h.key === " " && (h.preventDefault(), N());
  }, P = () => {
    f(!0);
  }, R = () => {
    f(!1);
  }, j = () => {
    _(!0), l?.();
  }, v = () => {
    _(!1);
  }, T = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (m || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), C = {
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
      className: T,
      style: C,
      onClick: $,
      onDoubleClick: N,
      onKeyDown: F,
      onMouseDown: P,
      onMouseUp: R,
      onFocus: j,
      onBlur: v,
      "aria-label": d || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${M}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function kf({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let _ = e.getTime(); _ <= t.getTime(); _ += 864e5)
    a.push(new Date(_));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = Le(-1), d = Ee(null), c = (_) => {
    if (_.key === "ArrowLeft") {
      _.preventDefault();
      const w = Math.max(0, i === -1 ? 0 : i - 1);
      l(w), m(w);
    } else if (_.key === "ArrowRight") {
      _.preventDefault();
      const w = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(w), m(w);
    } else if (_.key === "ArrowDown")
      _.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (_.key === "Home")
      _.preventDefault(), l(0), m(0);
    else if (_.key === "End") {
      _.preventDefault();
      const w = a.length - 1;
      l(w), m(w);
    }
  }, u = (_) => {
    if (_.key === "ArrowDown")
      _.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .resource-label") : null)?.focus();
    else if (_.key === "ArrowRight") {
      _.preventDefault();
      const w = d.current;
      w && w.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => m(0), 0));
  }, m = (_) => {
    const w = d.current?.querySelector(`[data-date-index="${_}"]`);
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
            children: a.map((_, w) => {
              const y = _.getTime() === o.getTime(), p = i === w;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": w,
                  className: `date-column ${y ? "today" : ""} ${p ? "focused" : ""}`,
                  tabIndex: p ? 0 : -1,
                  role: "button",
                  "aria-label": `${_.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${y ? " (Today)" : ""}`,
                  onFocus: () => l(w),
                  onKeyDown: c,
                  children: _.toLocaleDateString("en-GB", {
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
function Cf({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, d] = Le(!1), [c, u] = Le(-1), f = Ee(null);
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
          t.length > 0 && (y.preventDefault(), d(!0), u(0));
          break;
      }
      return;
    }
    switch (y.key) {
      case "ArrowLeft":
        y.preventDefault();
        const p = Math.max(0, c - 1);
        u(p), f.current?.querySelector(`[data-task-index="${p}"]`)?.focus();
        break;
      case "ArrowRight":
        y.preventDefault();
        const M = Math.min(t.length - 1, c + 1);
        u(M), f.current?.querySelector(`[data-task-index="${M}"]`)?.focus();
        break;
      case "Enter":
        y.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        y.preventDefault(), c >= 0 && s?.(t[c]);
        break;
      case "Escape":
        y.preventDefault(), d(!1), u(-1), f.current?.focus();
        break;
    }
  }, _ = (y) => {
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
  }, w = (y) => {
    l && u(y);
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
            onKeyDown: _,
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
            children: t.map((y, p) => /* @__PURE__ */ n.jsx(
              Sf,
              {
                task: y,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && c === p,
                taskIndex: p,
                tabIndex: l && c === p ? 0 : -1,
                onFocus: () => w(p)
              },
              y.id
            ))
          }
        )
      ]
    }
  );
}
function ab({
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
    const y = new Date(r);
    return isNaN(y.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : y;
  }, [r]), u = Me(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const y = new Date(a);
    return isNaN(y.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : y;
  }, [a]), f = Me(() => Math.ceil((u.getTime() - c.getTime()) / 864e5) + 1, [c, u]);
  ze(() => {
    if (!i.current || typeof window > "u") return;
    const y = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!y) return;
    const p = new y((g) => {
      const M = g[0];
      M && d(Math.max(M.contentRect.width - 220, 400));
    });
    return p.observe(i.current), () => p.disconnect();
  }, []);
  const m = Me(
    () => Ts().domain([c, u]).range([0, l]),
    [c, u, l]
  ), _ = Me(() => {
    const y = /* @__PURE__ */ new Map();
    return t.forEach((p) => {
      const g = y.get(p.resourceId) || [];
      g.push(p), y.set(p.resourceId, g);
    }), y;
  }, [t]), w = (y) => {
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
      onKeyDown: w,
      children: [
        /* @__PURE__ */ n.jsx(kf, { viewStart: c, viewEnd: u, dateCount: f }),
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
              Cf,
              {
                resource: y,
                tasks: _.get(y.id) || [],
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
) }), jf = ({
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
    (p) => ft.isValidElement(p) && (p.type === hr || p.type?.displayName === "BreadcrumbItem")
  ).map((p) => ({
    text: typeof p.props.children == "string" ? p.props.children : String(p.props.children),
    href: p.props.href,
    active: p.props.active,
    attributes: p.props.attributes
  })) : [], c = () => t ? d() : s && o ? [{ href: s, text: o }] : e, u = () => {
    const y = c();
    if (y && y.length > 0) {
      const p = y.slice().reverse().find((g) => g.href && !g.active);
      if (p)
        return { href: p.href, text: p.text };
    }
    return { text: "Home" };
  }, f = c(), m = u(), _ = ye(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), w = a;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: _,
      "aria-label": w,
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
}, Nf = jf;
Nf.Item = hr;
hr.displayName = "BreadcrumbItem";
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
        const f = typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(u) : null;
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
  const i = ye("nhsuk-skip-link", r);
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
}, sb = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: s,
  attributes: o = {}
}) => {
  const i = ye("nhsuk-pagination", s);
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
}, ob = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const s = ye("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
  ].filter(Boolean).join(" "), _ = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), w = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), y = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const M = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Bt,
      {
        level: a,
        className: w,
        children: M()
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
        /* @__PURE__ */ n.jsxs("div", { className: _, children: [
          y(),
          p(),
          g()
        ] })
      ]
    }
  );
});
wi.displayName = "Card";
const ib = ({
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
}, lb = ({
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
}, cb = ({
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
  "aria-describedby": _
}) => {
  const w = [
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
    const M = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], $ = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        M,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Bt,
      {
        level: a,
        className: y,
        children: $
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
      "aria-describedby": _,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          p(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: g() })
      ]
    }
  );
}, Tf = ({
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
  const c = ye(
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
}, db = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...s
}) => {
  const o = ye("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: o, ...s, children: i() });
}, ub = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const s = ye(
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
}, In = { current: null }, Df = () => {
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
}, $f = (e) => {
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
  const a = Df();
  if (a && a.languages) {
    const s = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (s)
      try {
        return a.highlight(e, a.languages[s], s);
      } catch {
      }
  }
  return $f(e);
}, If = ({
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
  "data-testid": _,
  columns: w,
  data: y,
  visuallyHiddenCaption: p = !1
}) => {
  const g = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), M = ye(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    u
  ), $ = ye(f), N = (v, T) => {
    const C = ye(
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
    let I;
    if (v.node != null)
      I = /* @__PURE__ */ n.jsx(n.Fragment, { children: v.node });
    else if (v.html)
      I = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } });
    else if (v.code != null) {
      const k = Array.isArray(v.code), b = k ? v.code.join(`
`) : v.code, S = k || b.includes(`
`), D = {
        className: ye("nhsuk-table__code", v.codeClassName, {
          "nhsuk-table__code--block": S,
          "nhsuk-table__code--inline": !S
        }),
        ...v.codeLanguage ? { "data-language": v.codeLanguage } : {}
      }, Q = mr(b, v.codeLanguage);
      I = S ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
        "code",
        {
          ...D,
          dangerouslySetInnerHTML: { __html: Q }
        }
      ) }) : /* @__PURE__ */ n.jsx(
        "code",
        {
          ...D,
          dangerouslySetInnerHTML: { __html: Q }
        }
      );
    } else
      I = v.text;
    return /* @__PURE__ */ n.jsx("th", { className: C, ...h, children: I }, T);
  }, F = (v, T, C) => {
    const h = s && C || v.rowHeader, I = ye(
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
      const Q = Array.isArray(v.code), O = Q ? v.code.join(`
`) : v.code, A = Q || O.includes(`
`), U = {
        className: ye("nhsuk-table__code", v.codeClassName, {
          "nhsuk-table__code--block": A,
          "nhsuk-table__code--inline": !A
        }),
        ...v.codeLanguage ? { "data-language": v.codeLanguage } : {}
      }, H = mr(
        O,
        v.codeLanguage,
        v.disableHighlight
      );
      b = A ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
        "code",
        {
          ...U,
          dangerouslySetInnerHTML: { __html: H }
        }
      ) }) : /* @__PURE__ */ n.jsx(
        "code",
        {
          ...U,
          dangerouslySetInnerHTML: { __html: H }
        }
      );
    } else
      b = v.text;
    const S = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      o && v.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        v.header,
        " "
      ] }),
      b
    ] }), D = h ? "th" : "td";
    return /* @__PURE__ */ n.jsx(D, { className: I, ...k, children: S }, T);
  };
  let P = t, R = e;
  !P && w && w.length && (P = w.map((v) => ({
    text: v.title,
    format: v.format,
    classes: v.headerClasses,
    attributes: v.headerAttributes
  }))), !R && w && y && y.length && (R = y.map((v, T) => w.map((C) => {
    const h = C.accessor ? C.accessor(v, T) : v[C.key];
    let I = { format: C.format, classes: C.cellClasses, attributes: C.cellAttributes };
    if (C.rowHeader && (I.rowHeader = !0), C.render) {
      const k = C.render(h, v, T, C);
      return k == null || typeof k == "boolean" ? { ...I, text: "" } : typeof k == "string" || typeof k == "number" ? { ...I, text: String(k) } : { ...I, ...k };
    }
    return { ...I, text: h != null ? String(h) : "" };
  })));
  const j = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: M,
      ...o && { role: "table" },
      ...m,
      ..._ && { "data-testid": _ },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: ye(g, p && "nhsuk-u-visually-hidden"), children: r }),
        P && P.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...o && { role: "row" }, children: P.map(
              (v, T) => N(v, T)
            ) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: R && R.map((v, T) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: v.map(
              (C, h) => F(C, h, h === 0)
            )
          },
          T
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ n.jsxs(Tf, { className: c, children: [
    i && /* @__PURE__ */ n.jsx(Bt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    j()
  ] }) : $ ? /* @__PURE__ */ n.jsx("div", { className: $, children: j() }) : j();
}, Mf = ({
  children: e,
  size: t,
  className: r
}) => {
  const a = ye(
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
  as: _ = "th"
}) => {
  const w = ye(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    d
  ), y = {
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
    const M = Array.isArray(a), $ = M ? a.join(`
`) : a, N = M || $.includes(`
`), F = {
      className: ye("nhsuk-table__code", o, {
        "nhsuk-table__code--block": N,
        "nhsuk-table__code--inline": !N
      }),
      ...s ? { "data-language": s } : {}
    }, P = mr(
      $,
      s,
      i
    );
    p = N ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
      "code",
      {
        ...F,
        dangerouslySetInnerHTML: { __html: P }
      }
    ) }) : /* @__PURE__ */ n.jsx("code", { ...F, dangerouslySetInnerHTML: { __html: P } });
  } else p = e;
  const g = _;
  return /* @__PURE__ */ n.jsx(g, { className: w, ...y, children: p });
}, Lf = ({
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
  rowHeader: _
}) => {
  const w = !!_, y = w ? "th" : "td", p = ye(
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
  let M;
  if (r != null) M = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) M = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const $ = Array.isArray(a), N = $ ? a.join(`
`) : a, F = $ || N.includes(`
`), P = {
      className: ye("nhsuk-table__code", o, {
        "nhsuk-table__code--block": F,
        "nhsuk-table__code--inline": !F
      }),
      ...s ? { "data-language": s } : {}
    }, R = mr(N, s, i);
    M = F ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx("code", { ...P, dangerouslySetInnerHTML: { __html: R } }) }) : /* @__PURE__ */ n.jsx("code", { ...P, dangerouslySetInnerHTML: { __html: R } });
  } else M = e;
  return /* @__PURE__ */ n.jsx(y, { className: p, ...g, children: M });
}, Ot = If;
Ot.Caption = Mf;
Ot.BodyRow = Si;
Ot.HeaderCell = ki;
Ot.Cell = Lf;
let _o = !1, wo = !1;
Object.defineProperty(Ot, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !_o && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), _o = !0), Si;
  }
});
Object.defineProperty(Ot, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !wo && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), wo = !0), ki;
  }
});
const fb = Sn(({
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
  const _ = r !== void 0, [w, y] = Le(() => t || e[0]?.id || ""), p = _ ? r : w, g = Ee(null), M = Ee(/* @__PURE__ */ new Map()), $ = ge((T) => {
    _ || y(T), a?.(T);
  }, [_, a]), N = ge((T) => {
    s?.(T), l && $(T);
  }, [s, l, $]), F = ge((T, C) => {
    const h = e.filter((b) => !b.disabled).map((b) => b.id), I = h.indexOf(C);
    let k = null;
    switch (T.key) {
      case "ArrowLeft":
        k = I > 0 ? I - 1 : h.length - 1;
        break;
      case "ArrowRight":
        k = I < h.length - 1 ? I + 1 : 0;
        break;
      case "Home":
        k = 0;
        break;
      case "End":
        k = h.length - 1;
        break;
      case "Escape":
        T.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (k !== null) {
      T.preventDefault();
      const b = h[k], S = M.current.get(b);
      S && (S.focus(), N(b));
    }
  }, [e, N, i]), P = ge((T, C) => {
    C ? M.current.set(T, C) : M.current.delete(T);
  }, []), R = ge((T) => {
    const C = M.current.get(T);
    C && C.focus();
  }, []);
  Wo(m, () => ({
    focusTab: R,
    getActiveTab: () => p,
    getTabListElement: () => g.current
  }), [R, p]);
  const j = ge((T) => {
    const C = T.relatedTarget;
    g.current?.contains(C) || o?.();
  }, [o]), v = ye("nhsuk-tabs", d);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: v,
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
                onBlur: j,
                children: e.map((T) => {
                  const C = T.id === p, h = T.disabled, I = ye("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": C,
                    "nhsuk-tabs__list-item--disabled": h
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: I, role: "presentation", children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (k) => P(T.id, k),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": C,
                      "aria-controls": `${T.id}-panel`,
                      id: `${T.id}-tab`,
                      tabIndex: C ? 0 : -1,
                      disabled: h,
                      onClick: () => !h && $(T.id),
                      onKeyDown: (k) => !h && F(k, T.id),
                      onFocus: () => !h && N(T.id),
                      ...T.attributes,
                      children: T.label
                    }
                  ) }, T.id);
                })
              }
            )
          }
        ),
        e.map((T) => {
          const C = T.id === p;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${T.id}-tab`,
              id: `${T.id}-panel`,
              hidden: !C,
              children: T.content
            },
            T.id
          );
        })
      ]
    }
  );
}), Pf = Sn(
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
Pf.displayName = "Details";
const Ff = Sn(
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
    ), f = (_) => t === "cross" && !a ? `do not ${_}` : _, m = () => /* @__PURE__ */ n.jsx(
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
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: c.join(" "), role: "list", children: r.map((_, w) => /* @__PURE__ */ n.jsxs("li", { children: [
            u(),
            f(_.item)
          ] }, w)) }) })
        ]
      }
    );
  }
);
Ff.displayName = "DoDontList";
const Ef = Sn(
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
Ef.displayName = "Expander";
const Rf = Sn(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, s) => {
    const o = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, d) => {
      const c = d + 1, u = `${t}-${c}-hint`, f = `${t}-${c}-status`, m = !!l.href, _ = [
        "nhsuk-task-list__item",
        m && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), w = [
        l.hint && u,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Af,
        {
          item: l,
          itemClasses: _,
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
), Af = ({
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
Rf.displayName = "TaskList";
const pb = ({
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
}, hb = ({
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
}, Bf = ({
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
      rr,
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
      rr,
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
] }), Hf = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ n.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((r) => /* @__PURE__ */ n.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ n.jsx(He, { color: zf(r.status), text: r.label }) }, r.status)) });
function zf(e) {
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
const mb = ({
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
  enableDefaultLegend: _ = !0,
  legendPlacement: w = "bottom",
  onA11yModeChange: y
}) => {
  const [p, g] = Le("grid"), M = i || p, [$, N] = Le(a || []), F = r ?? $, P = Me(() => {
    const k = /* @__PURE__ */ new Set();
    return e.forEach((b) => k.add(new Date(b.start).getTime())), Array.from(k).sort((b, S) => b - S);
  }, [e]), R = Me(() => {
    const k = {};
    return e.forEach((b) => {
      const S = new Date(b.start).getTime();
      k[S] || (k[S] = {});
      const D = b.capacity - b.booked - (b.held || 0);
      k[S][b.sessionId] = { slot: b, remaining: D };
    }), k;
  }, [e]), j = ge((k) => {
    if (o === "single") {
      const b = [k.id];
      r || N(b), s?.(b, { lastAction: "select" });
    } else {
      const b = F.includes(k.id), S = b ? F.filter((D) => D !== k.id) : [...F, k.id];
      r || N(S), s?.(S, { lastAction: b ? "deselect" : "select" });
    }
  }, [o, F, r, s]), v = Me(() => m || (_ ? Array.from(new Set(e.map((b) => b.status))).map((b) => ({
    status: b,
    label: b.charAt(0).toUpperCase() + b.slice(1)
  })) : void 0), [m, _, e]), T = v ? /* @__PURE__ */ n.jsx(
    Hf,
    {
      items: v,
      orientation: w === "left" || w === "right" ? "vertical" : "horizontal"
    }
  ) : null, C = (k) => {
    i || g(k), y?.(k);
  }, h = u || (f ? /* @__PURE__ */ n.jsx(
    Bf,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: M,
      onA11yModeChange: C
    }
  ) : null), I = /* @__PURE__ */ n.jsx("div", { style: d, className: ye(l), children: /* @__PURE__ */ n.jsx(La, { className: ye("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(nn, { children: /* @__PURE__ */ n.jsx(Pn, { width: tn.Full, children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    h,
    w === "top" && T,
    /* @__PURE__ */ n.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((k) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => j(k), "aria-pressed": F.includes(k.id), children: [
      Mn(new Date(k.start)),
      " – ",
      Mn(new Date(k.end)),
      " (",
      k.status,
      ")"
    ] }) }, k.id)) }),
    w === "bottom" && T
  ] }) }) }) }) });
  return M === "list" ? I : /* @__PURE__ */ n.jsx("div", { style: d, className: ye(l), children: /* @__PURE__ */ n.jsx(La, { className: ye("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(nn, { children: /* @__PURE__ */ n.jsx(Pn, { width: tn.Full, children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    h,
    w === "top" && T,
    /* @__PURE__ */ n.jsxs("div", { role: "grid", "aria-rowcount": P.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((k) => /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": `Session ${k.specialty}`, className: "nhs-slot-matrix__session-header", children: k.specialty }, k.id))
      ] }),
      P.map((k) => /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Mn(new Date(k)), children: Mn(new Date(k)) }),
        t.map((b) => {
          const S = R[k]?.[b.id];
          if (!S)
            return /* @__PURE__ */ n.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, b.id);
          const { slot: D, remaining: Q } = S, O = F.includes(D.id), A = c ? c(D) : `Slot ${Mn(new Date(D.start))} ${D.status}${Q === 0 ? " full" : ""}`;
          return /* @__PURE__ */ n.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": D.status,
              className: ye("nhs-slot-matrix__cell", O && "nhs-slot-matrix__cell--selected"),
              "aria-label": A,
              "aria-selected": O || void 0,
              onClick: () => j(D),
              children: Q > 0 ? `${Q} left` : "Full"
            },
            D.id
          );
        })
      ] }, k))
    ] }),
    w === "bottom" && T
  ] }) }) }) }) });
};
function So(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Mn(e) {
  return `${So(e.getHours())}:${So(e.getMinutes())}`;
}
const Of = ({
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
}, gb = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(La, { children: /* @__PURE__ */ n.jsx(nn, { children: e.map((s, o) => /* @__PURE__ */ n.jsx(
    Pn,
    {
      width: tn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": o,
      children: /* @__PURE__ */ n.jsx(Of, { ...s })
    },
    o
  )) }) }) });
}, Wf = ft.forwardRef(
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
    bordered: _ = !1,
    striped: w = !1,
    responsive: y = !1,
    tableType: p = "default"
  }, g) => {
    const M = Ee(null), $ = Ee(null), N = Ee(null);
    ft.useImperativeHandle(g, () => M.current, []);
    const [F, P] = Le(0), [R, j] = Le(0), [v, T] = Le("headers"), [C, h] = Le("browse"), I = t.length, k = e.length, b = Me(() => !r || r.length === 0 ? e : [...e].sort((H, ae) => {
      for (const { key: z, direction: fe } of r) {
        const ve = H[z], le = ae[z];
        if (ve == null && le == null) continue;
        if (ve == null) return 1;
        if (le == null) return -1;
        let ue = 0;
        if (typeof ve == "number" && typeof le == "number" ? ue = ve - le : ue = String(ve).localeCompare(String(le)), ue !== 0)
          return fe === "asc" ? ue : -ue;
      }
      return 0;
    }), [e, r]), S = ge((H, ae) => {
      setTimeout(() => {
        const z = M.current?.querySelector(
          `tbody tr:nth-child(${H + 1}) td:nth-child(${ae + 1})`
        );
        z && (z.focus(), typeof z.scrollIntoView == "function" && z.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), D = ge((H) => {
      setTimeout(() => {
        const ae = M.current?.querySelector(`th:nth-child(${H + 1})`);
        ae && (ae.focus(), typeof ae.scrollIntoView == "function" && ae.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Q = ge((H) => {
      a?.(H);
    }, [a]), O = ge((H) => {
      o?.(H);
    }, [o]), A = ge((H) => {
      const { key: ae } = H;
      switch (ae) {
        case "Enter":
          if (H.preventDefault(), v === "headers" && C === "browse")
            h("navigate"), D(R);
          else if (v === "headers" && C === "navigate") {
            const z = t[R];
            z && Q(z.key);
          } else v === "cells" && C === "browse" ? (h("navigate"), S(F, R)) : v === "cells" && C === "navigate" && O(F);
          break;
        case "Escape":
          H.preventDefault(), (v === "headers" && C === "navigate" || v === "cells" && C === "navigate") && h("browse");
          break;
        case "ArrowLeft":
          if (H.preventDefault(), C === "navigate" || C === "browse" && v === "headers") {
            if (v === "headers") {
              const z = Math.max(0, R - 1);
              j(z), D(z);
            } else if (v === "cells") {
              const z = Math.max(0, R - 1);
              j(z), S(F, z);
            }
          }
          break;
        case "ArrowRight":
          if (H.preventDefault(), C === "navigate" || C === "browse" && v === "headers") {
            if (v === "headers") {
              const z = Math.min(I - 1, R + 1);
              j(z), D(z);
            } else if (v === "cells") {
              const z = Math.min(I - 1, R + 1);
              j(z), S(F, z);
            }
          }
          break;
        case "ArrowUp":
          if (H.preventDefault(), v === "cells") {
            if (C === "browse") {
              const z = Math.max(0, F - 1);
              P(z), S(z, 0), j(0);
            } else if (C === "navigate")
              if (F > 0) {
                const z = F - 1;
                P(z), S(z, R);
              } else
                T("headers"), h("browse"), D(R);
          }
          break;
        case "ArrowDown":
          if (H.preventDefault(), v === "headers" && C === "browse")
            T("cells"), P(0), j(0), S(0, 0);
          else if (v === "cells") {
            const z = k - 1;
            if (C === "browse") {
              const fe = Math.min(z, F + 1);
              P(fe), S(fe, 0), j(0);
            } else if (C === "navigate" && F < z) {
              const fe = F + 1;
              P(fe), S(fe, R);
            }
          }
          break;
        case "Home":
          H.preventDefault(), v === "headers" ? (j(0), D(0)) : v === "cells" && (H.ctrlKey ? (P(0), j(0), S(0, 0)) : (j(0), S(F, 0)));
          break;
        case "End":
          if (H.preventDefault(), v === "headers") {
            const z = I - 1;
            j(z), D(z);
          } else if (v === "cells")
            if (H.ctrlKey) {
              const z = k - 1, fe = I - 1;
              P(z), j(fe), S(z, fe);
            } else {
              const z = I - 1;
              j(z), S(F, z);
            }
          break;
        case " ":
          if (H.preventDefault(), v === "headers" && C === "navigate") {
            const z = t[R];
            z && Q(z.key);
          } else v === "cells" && C === "navigate" && O(F);
          break;
      }
    }, [
      v,
      C,
      R,
      F,
      I,
      k,
      t,
      S,
      D,
      Q,
      O
    ]);
    ze(() => {
      const H = M.current;
      if (H)
        return H.addEventListener("keydown", A), () => H.removeEventListener("keydown", A);
    }, [A]);
    const U = ye(
      "nhsuk-table",
      m,
      {
        "nhsuk-table--responsive": y,
        "nhsuk-table--bordered": _,
        "nhsuk-table--striped": w,
        "nhsuk-table--compact": p === "compact"
      },
      f
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: M,
        className: U,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": c,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: $, role: "row", children: t.map((H, ae) => {
            const z = r?.find((le) => le.key === H.key), fe = !!z, ve = v === "headers" && R === ae;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: ye("sortable-header", {
                  "sortable-header--focused": ve
                }),
                role: "columnheader",
                tabIndex: ve ? 0 : -1,
                onClick: () => Q(H.key),
                onKeyDown: (le) => {
                  (le.key === "Enter" || le.key === " ") && (le.preventDefault(), Q(H.key));
                },
                "aria-sort": fe ? z?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: H.label }),
                  fe && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((le) => le.key === H.key) + 1 }),
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
              H.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: N, className: "nhsuk-table__body", role: "rowgroup", children: b.map((H, ae) => {
            const z = s === ae, fe = v === "cells" && F === ae;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: ye("data-row", {
                  "data-row--selected": z,
                  "data-row--focused": fe
                }),
                "aria-selected": z,
                children: t.map((ve, le) => {
                  const ue = ve.tableRenderer ? ve.tableRenderer(H) : ve.render ? ve.render(H) : H[ve.key], J = v === "cells" && F === ae && R === le, te = () => typeof ue == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: ue ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: ue ? "Yes" : "No" })
                  ] }) : String(ue ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ye("data-cell", {
                        "data-cell--focused": J
                      }),
                      tabIndex: J ? 0 : -1,
                      onClick: () => O(ae),
                      children: te()
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
Wf.displayName = "AriaDataGrid";
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
  const f = Ee(null), m = Ee(null), _ = Ee(null), w = ge((v, T) => {
    d || (m.current = T, v.dataTransfer.effectAllowed = "move", v.dataTransfer.setData("text/plain", T));
  }, [d]), y = ge((v, T) => {
    d || m.current === T || (v.preventDefault(), v.dataTransfer.dropEffect = "move", _.current = T);
  }, [d]), p = ge((v, T) => {
    if (d) return;
    v.preventDefault();
    const C = m.current;
    if (!C || C === T) return;
    const h = e.findIndex((k) => k.key === C), I = e.findIndex((k) => k.key === T);
    if (h !== -1 && I !== -1) {
      const k = [...e], [b] = k.splice(h, 1);
      k.splice(I, 0, b), r(k);
    }
    m.current = null, _.current = null;
  }, [d, e, r]), g = ge(() => {
    m.current = null, _.current = null;
  }, []), M = ge((v) => {
    const T = t.find((C) => C.key === v);
    return T ? T.label : v;
  }, [t]), $ = ge((v) => ["red", "orange", "blue", "aqua-green", "grey"][v] || "grey", []), N = ge((v) => {
    if (d) return;
    const T = e.map(
      (C) => C.key === v ? { ...C, direction: C.direction === "asc" ? "desc" : "asc" } : C
    );
    r(T);
  }, [e, r, d]), F = ge((v) => {
    if (d) return;
    const T = e.filter((C) => C.key !== v);
    r(T);
  }, [e, r, d]), P = ge(() => {
    d || r([]);
  }, [r, d]), R = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const v = e.map((T, C) => {
      const h = T.direction === "asc" ? "ascending" : "descending";
      return `${C + 1}. ${M(T.key)} (${h})`;
    });
    if (v.length === 1)
      return `Sorted by: ${v[0]}`;
    if (v.length === 2)
      return `Sorted by: ${v.join(" and ")}`;
    {
      const T = v.pop();
      return `Sorted by: ${v.join(", ")}, and ${T}`;
    }
  }, j = Me(() => {
    const v = ["sort-description"];
    return l && v.push("sort-help"), u && v.push(u), v.join(" ");
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
        children: R()
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
          children: e.map((v, T) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (C) => w(C, v.key),
              onDragOver: (C) => y(C, v.key),
              onDrop: (C) => p(C, v.key),
              onDragEnd: g,
              onClick: () => N(v.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${v.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": v.key,
              children: /* @__PURE__ */ n.jsx(
                He,
                {
                  color: $(T),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => F(v.key),
                  disabled: d,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${T + 1}`, children: T + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: M(v.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (C) => {
                          C.stopPropagation(), N(v.key);
                        },
                        disabled: d,
                        "aria-label": `Toggle sort direction for ${M(v.key)}. Currently ${v.direction === "asc" ? "ascending" : "descending"}`,
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
        it,
        {
          variant: "secondary",
          onClick: P,
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
function Uf(e, t) {
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
const Ba = Sn(function(t, r) {
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
    id: _,
    isLoading: w = !1,
    loadingComponent: y,
    error: p = null,
    errorComponent: g,
    "data-testid": M,
    actions: $,
    actionsMinGap: N = 16,
    forceActionsAbove: F = !1
  } = t, R = Ee(
    _ || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, j = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), v = `${R}-description`, T = `${R}-navigation-help`, {
    dataComparator: C = (L, X) => JSON.stringify(L) === JSON.stringify(X),
    filterFunction: h = (L) => L,
    booleanRenderer: I = (L) => L ? "✓" : "✗"
  } = a || {}, k = o !== void 0, b = o ?? 0, [S, D] = Le({
    focusArea: "tabs",
    focusedTabIndex: b,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), Q = Me(() => ({
    selectedIndex: b,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [b]), [O, A] = Uo(Uf, Q);
  ze(() => {
    const L = O.tabLoadingStates.length, X = s.length;
    L !== X && A({ type: "ADJUST_ARRAYS", payload: { newLength: X } });
  }, [s.length]), ze(() => {
    k && A({ type: "SET_SELECTED_INDEX", payload: b });
  }, [b, k]), ze(() => {
    D((L) => ({
      ...L,
      focusArea: "tabs",
      focusedTabIndex: O.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [O.selectedIndex]), ze(() => {
    l && l(O.globalSelectedRowData);
  }, [O.globalSelectedRowData, l]);
  const U = ge(
    (L, X) => C(L, X),
    [C]
  ), H = ge(
    (L) => {
      L >= 0 && L < s.length && !s[L].disabled && (A({ type: "SET_SELECTED_INDEX", payload: L }), D((X) => ({
        ...X,
        focusedTabIndex: L,
        focusArea: "tabs"
      })), i?.(L));
    },
    [s, i]
  ), ae = Ee(!1), z = ge(
    (L, X) => {
      if (!X?.force && !ae.current && L === 0) {
        ae.current = !0;
        return;
      }
      ae.current = !0, setTimeout(() => {
        const oe = fe.current[L], K = oe?.parentElement;
        if (oe && K) {
          const W = oe.offsetLeft, se = oe.offsetWidth, me = K.clientWidth, ce = W - me / 2 + se / 2;
          try {
            K.scrollTo({
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
          tabListElementExists: !!K
        });
      }, 50);
    },
    []
  ), fe = Ee([]), ve = Ee([]), le = ge(
    (L, X) => {
      const oe = O.sortConfig || [], K = oe.find(
        (me) => me.key === X
      );
      let W;
      K ? K.direction === "asc" ? W = oe.map(
        (me) => me.key === X ? { ...me, direction: "desc" } : me
      ) : W = oe.filter(
        (me) => me.key !== X
      ) : W = [...oe, { key: X, direction: "asc" }], A({
        type: "SET_SORT",
        payload: W
      }), s[L].onSort?.(X);
    },
    [O.sortConfig, s]
  ), ue = ge(
    (L) => {
      setTimeout(() => {
        const X = document.querySelector(
          `[data-tab-panel="${O.selectedIndex}"] th:nth-child(${L + 1})`
        );
        X && X.focus();
      }, 0);
    },
    [O.selectedIndex]
  ), J = ge(
    (L) => I(L),
    [I]
  ), te = ge(
    (L, X) => {
      setTimeout(() => {
        const oe = document.querySelector(
          `[data-tab-panel="${O.selectedIndex}"] tbody tr:nth-child(${L + 1}) td:nth-child(${X + 1})`
        );
        oe && oe.focus();
      }, 0);
    },
    [O.selectedIndex]
  );
  ze(() => {
    S.isGridActive && (S.focusArea === "headers" ? setTimeout(() => {
      ue(S.focusedHeaderIndex);
    }, 0) : S.focusArea === "cells" && setTimeout(() => {
      te(
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
    te
  ]), ze(() => {
    z(O.selectedIndex);
  }, [O.selectedIndex, z]);
  const de = ge(
    (L, X) => {
      const { key: oe } = L, K = s[O.selectedIndex], W = K?.columns.length || 0;
      switch (oe) {
        case "ArrowLeft":
          L.preventDefault();
          const se = Math.max(0, X - 1);
          D((je) => ({
            ...je,
            focusedHeaderIndex: se
          })), ue(se);
          break;
        case "ArrowRight":
          L.preventDefault();
          const me = Math.min(W - 1, X + 1);
          D((je) => ({
            ...je,
            focusedHeaderIndex: me
          })), ue(me);
          break;
        case "ArrowUp":
          L.preventDefault(), D((je) => ({
            ...je,
            focusArea: "tabs",
            focusedTabIndex: O.selectedIndex
          })), z(O.selectedIndex), fe.current[O.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          L.preventDefault(), D((je) => ({
            ...je,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: X,
            isGridActive: !0
          }));
          break;
        case "Home":
          L.preventDefault(), D((je) => ({ ...je, focusedHeaderIndex: 0 })), ue(0);
          break;
        case "End":
          L.preventDefault();
          const ce = W - 1;
          D((je) => ({
            ...je,
            focusedHeaderIndex: ce
          })), ue(ce);
          break;
        case "Enter":
        case " ":
          L.preventDefault();
          const ke = K?.columns[X]?.key;
          ke && le(O.selectedIndex, ke);
          break;
      }
    },
    [
      s,
      O.selectedIndex,
      le,
      D,
      ue,
      te,
      fe
    ]
  ), x = ge(
    (L, X, oe) => {
      const { key: K } = L, W = s[O.selectedIndex], se = W?.data.length || 0, me = W?.columns.length || 0;
      switch (K) {
        case "ArrowUp":
          if (L.preventDefault(), X === 0)
            D((be) => ({
              ...be,
              focusArea: "headers",
              focusedHeaderIndex: oe,
              isGridActive: !1
            })), ue(oe);
          else {
            const be = X - 1;
            D(($e) => ({
              ...$e,
              focusedRowIndex: be
            })), te(be, oe);
          }
          break;
        case "ArrowDown":
          L.preventDefault();
          const ce = Math.min(se - 1, X + 1);
          D((be) => ({
            ...be,
            focusedRowIndex: ce
          })), te(ce, oe);
          break;
        case "ArrowLeft":
          L.preventDefault();
          const ke = Math.max(0, oe - 1);
          D((be) => ({
            ...be,
            focusedColumnIndex: ke
          })), te(X, ke);
          break;
        case "ArrowRight":
          L.preventDefault();
          const je = Math.min(me - 1, oe + 1);
          D((be) => ({
            ...be,
            focusedColumnIndex: je
          })), te(X, je);
          break;
        case "Home":
          L.preventDefault(), L.ctrlKey ? (D((be) => ({
            ...be,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), te(0, 0)) : (D((be) => ({ ...be, focusedColumnIndex: 0 })), te(X, 0));
          break;
        case "End":
          if (L.preventDefault(), L.ctrlKey) {
            const be = se - 1, $e = me - 1;
            D((Be) => ({
              ...Be,
              focusedRowIndex: be,
              focusedColumnIndex: $e
            })), te(be, $e);
          } else {
            const be = me - 1;
            D(($e) => ({
              ...$e,
              focusedColumnIndex: be
            })), te(X, be);
          }
          break;
        case "Enter":
        case " ":
          if (L.preventDefault(), W && W.data[X]) {
            const be = W.data.some(
              (Fe) => "ews_data" in Fe
            ) ? h(W.data, O.filters) : W.data, $e = O.sortConfig;
            let Be = be;
            if ($e && $e.length > 0 && (Be = [...be].sort((Fe, Re) => {
              for (const { key: Ge, direction: Ve } of $e) {
                let Je = Fe[Ge], yt = Re[Ge];
                const Qe = W.columns.find(
                  (kn) => kn.key === Ge
                );
                if (Qe?.tableRenderer ? (Je = Qe.tableRenderer(Fe), yt = Qe.tableRenderer(Re)) : Qe?.render && (Je = Qe.render(Fe), yt = Qe.render(Re)), Je == null && yt == null) continue;
                if (Je == null) return Ve === "asc" ? -1 : 1;
                if (yt == null) return Ve === "asc" ? 1 : -1;
                let tt = 0;
                if (typeof Je == "number" && typeof yt == "number" ? tt = Je - yt : tt = String(Je).localeCompare(
                  String(yt),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), tt !== 0)
                  return Ve === "asc" ? tt : -tt;
              }
              return 0;
            })), Be[X]) {
              const Fe = Be[X], Ge = O.globalSelectedRowData && U(O.globalSelectedRowData, Fe) ? null : Fe;
              A({
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
      O.selectedIndex,
      O.filters,
      O.sortConfig,
      h,
      U,
      A,
      D,
      ue,
      te
    ]
  ), E = ge(
    (L, X) => h(L, X),
    [h]
  );
  if (Wo(
    r,
    () => ({
      selectTab: (L) => {
        L >= 0 && L < s.length && (A({ type: "SET_SELECTED_INDEX", payload: L }), i?.(L));
      },
      refreshData: (L) => {
        console.log("Refreshing data for tab:", L ?? "all");
      },
      exportData: (L) => {
        const X = L ?? O.selectedIndex, oe = s[X];
        return oe ? oe.data : [];
      },
      getSelectedRows: (L) => O.globalSelectedRowData ? [] : [],
      clearSelection: (L) => {
        A({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (L) => {
        A({ type: "SET_FILTERS", payload: L });
      }
    }),
    [O.selectedIndex, O.selectedRows, s, i]
  ), w)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": M,
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
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`,
        "data-testid": M,
        children: g || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ n.jsx("p", { children: p })
        ] })
      }
    );
  const B = Ee(null), Z = Ee(null), V = Ee(null), [ne, he] = Le(!0);
  ze(() => {
    if (!$) {
      he(!1);
      return;
    }
    if (F) {
      he(!1);
      return;
    }
    function L() {
      if (!B.current || !Z.current || !V.current) return;
      const K = B.current.clientWidth, W = Array.from(
        Z.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), se = W.reduce((je, be) => je + be.offsetWidth, 0), me = V.current.offsetWidth, ce = Math.max(8 * (W.length - 1), 0), ke = se + ce + me + N <= K;
      he(ke);
    }
    const X = requestAnimationFrame(() => L()), oe = new ResizeObserver(() => L());
    return B.current && oe.observe(B.current), Z.current && oe.observe(Z.current), () => {
      cancelAnimationFrame(X), oe.disconnect();
    };
  }, [$, N, F, s.length]);
  const we = V, ie = ge(() => we.current ? Array.from(
    we.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((L) => !L.hasAttribute("disabled")) : [], []), q = ge(
    (L) => {
      const X = ie();
      if (!X.length) return;
      const oe = Math.max(0, Math.min(L, X.length - 1));
      X[oe].focus(), D((K) => ({ ...K, focusArea: "actions", focusedActionIndex: oe }));
    },
    [ie]
  ), G = ge(() => q(0), [q]), re = ge(
    (L, X) => {
      const { key: oe } = L, K = s.length - 1;
      switch (oe) {
        case "ArrowUp": {
          $ && !ne && (L.preventDefault(), G());
          break;
        }
        case "ArrowLeft": {
          L.preventDefault();
          const W = X > 0 ? X - 1 : K;
          H(W), z(W), fe.current[W]?.focus();
          break;
        }
        case "ArrowRight": {
          if (L.preventDefault(), X === K && $ && ne) {
            G();
            return;
          }
          const W = X < K ? X + 1 : 0;
          H(W), z(W), fe.current[W]?.focus();
          break;
        }
        case "ArrowDown": {
          L.preventDefault(), D((W) => ({
            ...W,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          L.preventDefault(), H(0), z(0), fe.current[0]?.focus();
          break;
        }
        case "End": {
          L.preventDefault(), H(K), z(K), fe.current[K]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          L.preventDefault(), H(X);
          break;
        }
        case "Tab": {
          !L.shiftKey && X === K && $ && ne && G();
          break;
        }
      }
    },
    [s.length, H, z, $, ne, G]
  ), ee = ge((L) => {
    const { key: X } = L, oe = ie();
    if (!oe.length) return;
    const K = oe.findIndex((W) => W === document.activeElement);
    switch (X) {
      case "ArrowLeft": {
        if (ne)
          if (K > 0)
            L.preventDefault(), q(K - 1);
          else {
            L.preventDefault();
            const W = s.length - 1;
            H(W), z(W), fe.current[W]?.focus(), D((se) => ({ ...se, focusArea: "tabs", focusedTabIndex: W }));
          }
        break;
      }
      case "ArrowRight": {
        ne && (K < oe.length - 1 ? (L.preventDefault(), q(K + 1)) : (L.preventDefault(), H(0), z(0), fe.current[0]?.focus(), D((W) => ({ ...W, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (ne)
          L.preventDefault(), D((W) => ({ ...W, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          L.preventDefault();
          const W = O.selectedIndex;
          fe.current[W]?.focus(), D((se) => ({ ...se, focusArea: "tabs", focusedTabIndex: W }));
        }
        break;
      }
    }
  }, [ie, ne, q, s.length, H, z, O.selectedIndex]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${m} ${u}`,
      id: _,
      "data-testid": M,
      ref: B,
      children: [
        c && !j && /* @__PURE__ */ n.jsx("div", { id: v, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: T,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ n.jsx(
          Ci,
          {
            sortConfig: O.sortConfig || [],
            columns: s.flatMap(
              (L) => L.columns.map((X) => ({ key: X.key, label: X.label }))
            ).filter(
              (L, X, oe) => oe.findIndex((K) => K.key === L.key) === X
              // Remove duplicates
            ),
            onSortChange: (L) => {
              A({ type: "SET_SORT", payload: L });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        $ && !ne && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: V,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: ee,
            children: $
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${ne ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": c ? j ? c : v : T,
              "aria-orientation": m,
              className: "aria-tabs-datagrid__tabs",
              ref: Z,
              children: s.map((L, X) => {
                const oe = X === O.selectedIndex, K = L.disabled || f;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${L.id}`,
                    "aria-controls": `panel-${L.id}`,
                    "aria-selected": oe,
                    "aria-disabled": K,
                    tabIndex: oe ? 0 : -1,
                    ref: (W) => {
                      fe.current[X] = W;
                    },
                    onClick: () => H(X),
                    onKeyDown: (W) => re(W, X),
                    disabled: K,
                    className: [
                      "aria-tabs-datagrid__tab",
                      oe ? "aria-tabs-datagrid__tab--selected" : "",
                      K ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: L.label }),
                      O.tabLoadingStates[X] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      O.tabErrors[X] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  L.id
                );
              })
            }
          ),
          $ && ne && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: V,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: ee,
              children: $
            }
          )
        ] }),
        s.map((L, X) => {
          const oe = X === O.selectedIndex;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${L.id}`,
              "aria-labelledby": `tab-${L.id}`,
              tabIndex: 0,
              hidden: !oe,
              ref: (K) => {
                ve.current[X] = K;
              },
              className: `aria-tabs-datagrid__panel ${L.className || ""}`,
              "data-tab-panel": X,
              children: oe && (() => {
                const K = L.data.some(
                  (se) => "ews_data" in se
                ) ? E(L.data, O.filters) : L.data, W = Me(() => {
                  const se = O.sortConfig;
                  return !se || se.length === 0 ? K : [...K].sort((me, ce) => {
                    for (const { key: ke, direction: je } of se) {
                      let be = me[ke], $e = ce[ke];
                      const Be = L.columns.find(
                        (Re) => Re.key === ke
                      );
                      if (Be?.tableRenderer ? (be = Be.tableRenderer(me), $e = Be.tableRenderer(ce)) : Be?.render && (be = Be.render(me), $e = Be.render(ce)), be == null && $e == null) continue;
                      if (be == null) return 1;
                      if ($e == null) return -1;
                      let Fe = 0;
                      if (typeof be == "number" && typeof $e == "number" ? Fe = be - $e : typeof be == "boolean" && typeof $e == "boolean" ? Fe = be === $e ? 0 : be ? 1 : -1 : Fe = String(be).localeCompare(
                        String($e),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Fe !== 0)
                        return je === "asc" ? Fe : -Fe;
                    }
                    return 0;
                  });
                }, [K, O.sortConfig, L.columns]);
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
                        const ce = O.sortConfig?.find(
                          (be) => be.key === se.key
                        ), ke = !!ce, je = S.focusArea === "headers" && S.focusedHeaderIndex === me;
                        return /* @__PURE__ */ n.jsx(
                          "th",
                          {
                            className: `sortable-header ${je ? "sortable-header--focused" : ""} ${ke ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: je ? 0 : -1,
                            onClick: () => le(X, se.key),
                            onKeyDown: (be) => de(be, me),
                            "aria-sort": ke ? ce?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ n.jsx("span", { className: "header-label", children: se.label }),
                              /* @__PURE__ */ n.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${ke ? `sort-indicator--${ce?.direction}` : ""}`,
                                  children: [
                                    O.sortConfig && O.sortConfig.length > 0 && O.sortConfig.findIndex(
                                      (be) => be.key === se.key
                                    ) !== -1 && /* @__PURE__ */ n.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${O.sortConfig.findIndex((be) => be.key === se.key) + 1}`,
                                        "data-priority": O.sortConfig.findIndex(
                                          (be) => be.key === se.key
                                        ) + 1,
                                        title: `Sort priority: ${O.sortConfig.findIndex((be) => be.key === se.key) + 1}`,
                                        children: O.sortConfig.findIndex(
                                          (be) => be.key === se.key
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
                      /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: W.map((se, me) => {
                        const ce = O.globalSelectedRowData && U(O.globalSelectedRowData, se), ke = S.focusArea === "cells" && S.focusedRowIndex === me;
                        return /* @__PURE__ */ n.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ce ? "data-row--selected" : ""} ${ke ? "data-row--focused" : ""}`,
                            "aria-selected": ce,
                            children: L.columns.map((je, be) => {
                              const $e = se[je.key];
                              let Be;
                              je.tableRenderer ? Be = je.tableRenderer(se) : je.render ? Be = je.render(se) : Be = $e;
                              const Fe = S.focusArea === "cells" && S.focusedRowIndex === me && S.focusedColumnIndex === be, Re = () => {
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
                                ] }) : ft.isValidElement(Be) || typeof Be != "object" ? Be ?? "" : Be;
                              };
                              return /* @__PURE__ */ n.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Fe ? "data-cell--focused" : ""}`,
                                  tabIndex: Fe ? 0 : -1,
                                  onClick: () => {
                                    const Ve = O.globalSelectedRowData && U(
                                      O.globalSelectedRowData,
                                      se
                                    ) ? null : se;
                                    A({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: Ve
                                    });
                                  },
                                  onKeyDown: (Ge) => x(Ge, me, be),
                                  children: Re()
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
}, Gf = (e) => [...e].sort((t, r) => t.priority - r.priority);
function _a(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function Vf(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Yf(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function qf(e, t) {
  const r = t.find((s) => s.id === e), a = Vf(t);
  return r ? r.priority < a : !1;
}
const xb = ({
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
  const u = Me(() => Gf(e), [e]), f = ge((M) => {
    if (l) return;
    const $ = e.map(
      (N) => N.id === M ? { ...N, direction: N.direction === "asc" ? "desc" : "asc" } : N
    );
    t($);
  }, [e, t, l]), m = ge((M) => {
    if (l) return;
    const $ = e.findIndex((F) => F.id === M);
    if ($ <= 0) return;
    const N = [...e];
    [N[$], N[$ - 1]] = [N[$ - 1], N[$]], t(_a(N));
  }, [e, t, l]), _ = ge((M) => {
    if (l) return;
    const $ = e.findIndex((F) => F.id === M);
    if ($ >= e.length - 1 || $ === -1) return;
    const N = [...e];
    [N[$], N[$ + 1]] = [N[$ + 1], N[$]], t(_a(N));
  }, [e, t, l]), w = ge((M) => {
    if (l) return;
    const $ = e.filter((N) => N.id !== M);
    t(_a($));
  }, [e, t, l]), y = ge(() => {
    l || t([]);
  }, [t, l]), p = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const M = u.map(($, N) => {
      const F = $.direction === "asc" ? "ascending" : "descending";
      return `${N + 1}. ${$.label} (${F})`;
    });
    if (M.length === 1)
      return `Sorted by: ${M[0]}`;
    if (M.length === 2)
      return `Sorted by: ${M.join(" and ")}`;
    {
      const $ = M.pop();
      return `Sorted by: ${M.join(", ")}, and ${$}`;
    }
  }, g = Me(() => {
    const M = ["sort-description"];
    return i && M.push("sort-help"), c && M.push(c), M.join(" ");
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
          u.map((M) => /* @__PURE__ */ n.jsx(
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
                  onClose: () => w(M.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: M.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: M.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(M.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${M.label}. Currently ${M.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: M.direction === "asc" ? Qn.asc : Qn.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m(M.id),
                          disabled: l || !Yf(M.id, e),
                          "aria-label": `Move ${M.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => _(M.id),
                          disabled: l || !qf(M.id, e),
                          "aria-label": `Move ${M.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            M.id
          ))
        ]
      }
    ),
    o && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      it,
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
}, Ds = (e, t) => t.map((r) => ({
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
})), Ha = [
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
], Kf = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Xf = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, s] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, Zf = (e) => {
  if (typeof e == "boolean") {
    const r = Ha.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = Ha.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, Jf = (e) => `${e.name}-${e.bed_name}`, Qf = () => ({
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
}), bb = (e) => {
  const t = Qf();
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
}, ep = {
  dataComparator: Kf,
  filterFunction: Xf,
  booleanRenderer: Zf,
  getDataId: Jf
};
function ko(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: s = [],
    badges: o = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: d,
    fieldRenderers: c = {},
    classPrefix: u = "adaptive-card"
  } = r, f = t.find(($) => $.key === a), m = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", _ = () => s.filter((N) => !i.includes(N) && e[N]).slice(0, 3).map((N) => {
    const F = t.find((v) => v.key === N), P = e[N], R = c[N] ? c[N](P, e) : F?.cardRenderer ? F.cardRenderer(e) : F?.render ? F.render(e) : P;
    return `${F?.label || N}: ${R}`;
  }).join(" • "), w = () => o.length === 0 ? null : o.filter(($) => e[$.fieldKey] !== void 0).map(($) => {
    const N = e[$.fieldKey], F = $.render ? $.render(N, e) : N;
    return `<span class="nhsuk-tag ${tp($, N)}">${F}</span>`;
  }).join(""), y = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", p = w(), g = _(), M = p ? `${g}${p ? `<div class="adaptive-card__badges">${p}</div>` : ""}` : g;
  return {
    variant: y(),
    heading: String(m),
    descriptionHtml: M,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${m}`
  };
}
function tp(e, t) {
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
const np = {
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
              color: ap($i(u)),
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
              onClick: (_) => {
                _.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            it,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (_) => {
                _.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            it,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (_) => {
                _.stopPropagation(), a?.("view-full", e);
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
          color: sp(e.status || "active"),
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
            o !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${rp(o)}`, children: [
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
function rp(e) {
  return $i(e);
}
function ap(e) {
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
function sp(e) {
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
const op = [
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
], Ii = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", ip = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, lp = (e) => Ii(e) === "high" || e.status === "urgent" ? "primary" : "default", cp = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, dp = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: op,
  hiddenFields: [],
  getPriority: Ii,
  getStatus: ip,
  getVariant: lp,
  fieldRenderers: cp,
  classPrefix: "adaptive-card--healthcare"
}, up = {
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
}, fp = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Co = {
  name: "healthcare",
  defaultCardConfig: dp,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: up,
  fieldTypes: fp
};
function jo(e) {
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
function No(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function pp(e, t) {
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
function hp(e, t) {
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
function mp(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function gp(e, t, r, a) {
  const s = a ? { ...a.defaultCardConfig, ...r } : { ...np, ...r };
  if (a && a.cardTemplates) {
    const o = mp(e);
    if (o && a.cardTemplates[o]) {
      const i = a.cardTemplates[o](e, t, s);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return s.cardTemplate && s.cardTemplate(e, t, s), ko(e, t, s);
}
const yb = ({
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
  ariaLabel: _ = "Data grid",
  ariaDescription: w,
  orientation: y = "horizontal",
  id: p,
  disabled: g = !1,
  className: M,
  ...$
}) => {
  const N = hp(e, t), F = f !== void 0, P = f ?? 0, R = Me(() => {
    if (c.some(
      (G) => G.data && G.data.length > 0 && No(G.data)
    )) {
      const G = jo(r);
      return {
        ...Co.defaultCardConfig,
        ...G
      };
    } else
      return jo(r);
  }, [r, c]), j = Me(() => c.some(
    (G) => G.data && G.data.length > 0 && No(G.data)
  ) ? Co : void 0, [c]), v = Me(() => ({
    selectedIndex: P,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [P, c.length]), [T, C] = Uo(pp, v), h = Ee([]), I = Ee([]), k = Ee([]), b = Ee(null), [S, D] = Le({
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
  }), Q = ge((q) => {
    if (!q.current)
      return { columns: 1, rows: 0 };
    const G = q.current, re = G.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (re.length === 0)
      return { columns: 1, rows: 0 };
    const ee = G.offsetWidth, X = re[0].offsetWidth, oe = Math.floor(ee / X) || 1, K = Math.ceil(re.length / oe);
    return { columns: oe, rows: K };
  }, []), O = ge((q, G) => ({
    row: Math.floor(q / G),
    col: q % G
  }), []), A = ge((q, G, re) => q * re + G, []), U = ge((q, G, re, ee) => {
    const { row: L, col: X } = O(q, ee);
    let oe = L, K = X;
    switch (G) {
      case "up":
        oe = Math.max(0, L - 1);
        break;
      case "down":
        oe = Math.min(Math.floor((re - 1) / ee), L + 1);
        break;
      case "left":
        K = Math.max(0, X - 1);
        break;
      case "right":
        K = Math.min(ee - 1, X + 1);
        break;
    }
    const W = A(oe, K, ee);
    return Math.min(W, re - 1);
  }, [O, A]);
  ze(() => {
    S.isCardNavigationActive && S.focusedCardElementIndex >= 0 && S.cardElements.length > 0 && setTimeout(() => {
      const q = S.cardElements[S.focusedCardElementIndex];
      q && (q.element.focus(), q.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [S.isCardNavigationActive, S.focusedCardElementIndex, S.cardElements.length]), ze(() => {
    const q = () => {
      if (N === "cards" && b.current) {
        const { columns: ee, rows: L } = Q(b);
        D((X) => ({
          ...X,
          gridColumns: ee,
          gridRows: L
        }));
      }
    }, G = setTimeout(q, 200), re = () => {
      setTimeout(q, 100);
    };
    return window.addEventListener("resize", re), () => {
      clearTimeout(G), window.removeEventListener("resize", re);
    };
  }, [N, c, Q]), ze(() => {
    const q = T.tabLoadingStates.length, G = c.length;
    q !== G && C({ type: "ADJUST_ARRAYS", payload: { newLength: G } });
  }, [c.length, T.tabLoadingStates.length]), ze(() => {
    F && f !== T.selectedIndex && C({ type: "SET_SELECTED_INDEX", payload: f });
  }, [F, f, T.selectedIndex]);
  const H = ge((q) => {
    q >= 0 && q < c.length && !c[q].disabled && (C({ type: "SET_SELECTED_INDEX", payload: q }), m?.(q));
  }, [c, m]), ae = ge((q) => {
    console.log("Card selected:", q), C({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: q
    });
  }, []), z = ge((q) => {
    const G = I.current[q];
    G && (G.focus(), G.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), fe = ge((q) => {
    const G = I.current[q];
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
    ].join(", "), ee = G.querySelectorAll(re);
    return Array.from(ee).map((L, X) => ({
      id: L.id || `card-${q}-element-${X}`,
      element: L,
      label: L.getAttribute("aria-label") || L.textContent?.trim() || L.getAttribute("title") || `Element ${X + 1}`,
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
    const G = q.filter((ee) => ee.sortable !== !1), re = [
      { value: "", label: "Sort by..." }
    ];
    return G.forEach((ee) => {
      const L = ee.label || ee.key;
      ee.key === "name" ? re.push(
        { value: `${ee.key}-asc`, label: `${L} (A-Z)` },
        { value: `${ee.key}-desc`, label: `${L} (Z-A)` }
      ) : ee.key === "ews_score" || ee.key.includes("score") ? re.push(
        { value: `${ee.key}-desc`, label: `${L} (High-Low)` },
        { value: `${ee.key}-asc`, label: `${L} (Low-High)` }
      ) : ee.key === "age" || ee.key.includes("date") || ee.key.includes("time") ? re.push(
        { value: `${ee.key}-desc`, label: `${L} (Oldest-Youngest)` },
        { value: `${ee.key}-asc`, label: `${L} (Youngest-Oldest)` }
      ) : re.push(
        { value: `${ee.key}-asc`, label: `${L} (A-Z)` },
        { value: `${ee.key}-desc`, label: `${L} (Z-A)` }
      );
    }), re;
  }, []), J = ge((q, G) => G ? [...q].sort((re, ee) => {
    const L = re[G.key], X = ee[G.key];
    if (L == null && X == null) return 0;
    if (L == null) return 1;
    if (X == null) return -1;
    const oe = Number(L), K = Number(X);
    if (!isNaN(oe) && !isNaN(K))
      return G.direction === "asc" ? oe - K : K - oe;
    const W = String(L).toLowerCase(), se = String(X).toLowerCase(), me = W.localeCompare(se);
    return G.direction === "asc" ? me : -me;
  }) : q, []), te = ge((q) => {
    if (!q) {
      D((W) => ({ ...W, cardSortConfig: null })), le("Card sorting cleared");
      return;
    }
    const [G, re] = q.split("-"), ee = { key: G, direction: re };
    D((W) => ({ ...W, cardSortConfig: ee }));
    const oe = c[T.selectedIndex]?.columns.find((W) => W.key === G)?.label || G;
    le(`Cards sorted by ${oe} in ${re === "asc" ? "ascending" : "descending"} order`);
  }, [c, T.selectedIndex, le]), de = ge((q) => {
    const ee = c[T.selectedIndex]?.columns.find((X) => X.key === q.key)?.label || q.key, L = q.direction === "asc" ? "ascending" : "descending";
    return `${ee} (${L})`;
  }, [c, T.selectedIndex]), x = ge((q) => {
    const G = c[T.selectedIndex];
    if (s) {
      const re = T.sortConfig;
      return !re || re.length === 0 ? q : [...q].sort((ee, L) => {
        for (const { key: X, direction: oe } of re) {
          let K = ee[X], W = L[X];
          const se = G?.columns.find(($e) => $e.key === X);
          if (se?.cardRenderer ? (K = se.cardRenderer(ee), W = se.cardRenderer(L)) : se?.render && (K = se.render(ee), W = se.render(L)), K == null && W == null) continue;
          if (K == null) return oe === "asc" ? -1 : 1;
          if (W == null) return oe === "asc" ? 1 : -1;
          const me = Number(K), ce = Number(W);
          if (!isNaN(me) && !isNaN(ce)) {
            const $e = me - ce;
            if ($e !== 0) return oe === "asc" ? $e : -$e;
            continue;
          }
          const ke = String(K).toLowerCase(), je = String(W).toLowerCase(), be = ke.localeCompare(je);
          if (be !== 0) return oe === "asc" ? be : -be;
        }
        return 0;
      });
    } else
      return J(q, S.cardSortConfig);
  }, [s, T.sortConfig, S.cardSortConfig, J, c, T.selectedIndex]), E = ge((q, G) => {
    const re = fe(q), ee = re[G];
    if (ee) {
      ee.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const L = `Focused on ${ee.label}, ${ee.type} ${G + 1} of ${re.length} within card`;
      le(L);
    }
  }, [fe, le]), B = ge((q) => {
    h.current[q]?.focus();
  }, []), Z = ge(() => {
    const q = k.current[0];
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
      const G = k.current[0], re = G?.querySelector(".sort-controls-row");
      if (re) {
        re.setAttribute("tabindex", "-1"), re.focus();
        const L = `Sort controls group with ${Z().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        le(L);
      } else G && G.focus();
    } else {
      const G = Z(), re = q - 1, ee = G[re];
      if (ee) {
        ee.focus();
        const L = ee.tagName.toLowerCase() === "select", X = ee.tagName.toLowerCase() === "button", oe = L ? "dropdown" : X ? "button" : "control", K = L ? ". Use Space key to open dropdown" : "", W = `${oe} ${re + 1} of ${G.length}${K}`;
        le(W);
      }
    }
  }, [Z, le]), ne = ge((q, G) => {
    const { key: re } = q, ee = c[T.selectedIndex], L = ee?.data.length || 0;
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
            D((W) => ({ ...W, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), V(0);
          else {
            const W = U(G, "up", L, S.gridColumns);
            W !== G && (D((se) => ({ ...se, focusedCardIndex: W })), z(W), le(`Moved to card ${W + 1} of ${L}`));
          }
          break;
        case "ArrowDown":
          q.preventDefault();
          const X = U(G, "down", L, S.gridColumns);
          X !== G && (D((W) => ({ ...W, focusedCardIndex: X })), z(X), le(`Moved to card ${X + 1} of ${L}`));
          break;
        case "ArrowLeft":
          q.preventDefault();
          const oe = U(G, "left", L, S.gridColumns);
          oe !== G ? (D((W) => ({ ...W, focusedCardIndex: oe })), z(oe), le(`Moved to card ${oe + 1} of ${L}`)) : T.selectedIndex > 0 && (C({ type: "SET_SELECTED_INDEX", payload: T.selectedIndex - 1 }), D((W) => ({ ...W, focusArea: "tabs" })), setTimeout(() => B(T.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          q.preventDefault();
          const K = U(G, "right", L, S.gridColumns);
          K !== G ? (D((W) => ({ ...W, focusedCardIndex: K })), z(K), le(`Moved to card ${K + 1} of ${L}`)) : T.selectedIndex < c.length - 1 && (C({ type: "SET_SELECTED_INDEX", payload: T.selectedIndex + 1 }), D((W) => ({ ...W, focusArea: "tabs" })), setTimeout(() => B(T.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (ee?.data[G]) {
            q.preventDefault(), D((se) => ({
              ...se,
              selectedCardIndex: G
            }));
            const W = fe(G);
            W.length > 0 ? (D((se) => ({
              ...se,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: W,
              selectedCardIndex: G
              // Ensure selection is maintained
            })), le(`Card ${G + 1} selected and navigation activated. ${W.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : le(`Card ${G + 1} selected.`);
          }
          break;
        case " ":
          if (ee?.data[G]) {
            q.preventDefault(), D((se) => ({
              ...se,
              selectedCardIndex: se.selectedCardIndex === G ? -1 : G
            }));
            const W = S.selectedCardIndex === G;
            le(`Card ${G + 1} ${W ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (re) {
      case "ArrowUp":
      case "ArrowLeft":
        q.preventDefault();
        const X = Math.max(0, S.focusedCardElementIndex - 1);
        D((se) => ({ ...se, focusedCardElementIndex: X })), E(G, X);
        break;
      case "ArrowDown":
      case "ArrowRight":
        q.preventDefault();
        const oe = Math.min(S.cardElements.length - 1, S.focusedCardElementIndex + 1);
        D((se) => ({ ...se, focusedCardElementIndex: oe })), E(G, oe);
        break;
      case "Enter":
        q.preventDefault();
        const K = S.cardElements[S.focusedCardElementIndex];
        K && (K.element.click(), le(`Activated ${K.label}`));
        break;
      case " ":
        q.preventDefault();
        const W = S.cardElements[S.focusedCardElementIndex];
        if (W) {
          const se = new MouseEvent("dblclick", { bubbles: !0 });
          W.element.dispatchEvent(se), le(`Double-clicked ${W.label}`);
        }
        break;
      case "Escape":
        q.preventDefault(), D((se) => ({
          ...se,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => z(G), 0), le("Exited card navigation, returned to card level");
        break;
      case "Home":
        q.preventDefault(), S.cardElements.length > 0 && (D((se) => ({ ...se, focusedCardElementIndex: 0 })), E(G, 0));
        break;
      case "End":
        if (q.preventDefault(), S.cardElements.length > 0) {
          const se = S.cardElements.length - 1;
          D((me) => ({ ...me, focusedCardElementIndex: se })), E(G, se);
        }
        break;
    }
  }, [S, T.selectedIndex, c, ae, z, B, D, fe, E, le]), he = ge((q) => {
    const G = h.current[q], re = G?.parentElement;
    if (!G || !re) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const ee = G.getBoundingClientRect(), L = re.getBoundingClientRect();
    ee.left >= L.left && ee.right <= L.right || (console.log("Tab not visible, scrolling into view (mobile)"), G.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), we = ge((q, G) => {
    if (N !== "cards")
      return;
    const { key: re } = q;
    switch (re) {
      case "ArrowLeft":
        q.preventDefault();
        const ee = G > 0 ? G - 1 : c.length - 1;
        H(ee), D((K) => ({ ...K, focusedTabIndex: ee })), h.current[ee]?.focus(), he(ee);
        break;
      case "ArrowRight":
        q.preventDefault();
        const L = G < c.length - 1 ? G + 1 : 0;
        H(L), D((K) => ({ ...K, focusedTabIndex: L })), h.current[L]?.focus(), he(L);
        break;
      case "ArrowDown":
        q.preventDefault();
        const X = c[T.selectedIndex];
        X && X.columns && X.columns.length > 0 ? (D((K) => ({
          ...K,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), V(0)) : (D((K) => ({
          ...K,
          focusArea: "cards",
          focusedCardIndex: 0
        })), z(0));
        break;
      case "Home":
        q.preventDefault(), H(0), D((K) => ({ ...K, focusedTabIndex: 0 })), h.current[0]?.focus(), he(0);
        break;
      case "End":
        q.preventDefault();
        const oe = c.length - 1;
        H(oe), D((K) => ({ ...K, focusedTabIndex: oe })), h.current[oe]?.focus(), he(oe);
        break;
      case "Enter":
      case " ":
        q.preventDefault(), H(G);
        break;
    }
  }, [c.length, H, N, z, D, he]), ie = ge((q, G) => {
    if (N !== "cards")
      return;
    const { key: re } = q, ee = c[T.selectedIndex];
    if (G === 0 && !S.isSortControlsActive) {
      switch (re) {
        case "ArrowUp":
          q.preventDefault(), D((X) => ({
            ...X,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), B(T.selectedIndex);
          break;
        case "ArrowDown":
          q.preventDefault(), ee?.data && ee.data.length > 0 && (D((X) => ({
            ...X,
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
            D((oe) => ({
              ...oe,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), V(1);
            const X = `Entered sort controls navigation mode. ${L.length} controls available. Use arrow keys to navigate between controls.`;
            le(X);
          }
          break;
        case "Escape":
          q.preventDefault(), D((X) => ({
            ...X,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), B(T.selectedIndex);
          break;
      }
      return;
    }
    if (S.isSortControlsActive) {
      const X = Z().length;
      switch (re) {
        case "ArrowLeft":
          q.preventDefault();
          const oe = S.focusedSortControlIndex > 1 ? S.focusedSortControlIndex - 1 : X;
          D((W) => ({ ...W, focusedSortControlIndex: oe })), V(oe);
          break;
        case "ArrowRight":
          q.preventDefault();
          const K = S.focusedSortControlIndex < X ? S.focusedSortControlIndex + 1 : 1;
          D((W) => ({ ...W, focusedSortControlIndex: K })), V(K);
          break;
        case "ArrowDown":
          if (q.preventDefault(), S.isSortControlsActive) {
            const W = S.focusedSortControlIndex < X ? S.focusedSortControlIndex + 1 : 1;
            D((se) => ({ ...se, focusedSortControlIndex: W })), V(W);
          } else
            ee?.data && ee.data.length > 0 && (D((W) => ({
              ...W,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), z(0));
          break;
        case "ArrowUp":
          q.preventDefault(), D((W) => ({
            ...W,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), V(0);
          break;
        case "Escape":
          q.preventDefault(), D((W) => ({
            ...W,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), V(0);
          break;
      }
    }
  }, [N, c, T.selectedIndex, S.isSortControlsActive, S.focusedSortControlIndex, V, B, z, D, le]);
  if (N === "cards") {
    const q = c[T.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${M || ""}`, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": _,
            "aria-describedby": `${w || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
            "aria-orientation": y,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((G, re) => {
              const ee = re === T.selectedIndex, L = G.disabled || g;
              return /* @__PURE__ */ n.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${G.id}`,
                  "aria-controls": `panel-${G.id}`,
                  "aria-selected": ee,
                  "aria-disabled": L,
                  tabIndex: ee ? 0 : -1,
                  ref: (X) => {
                    h.current[re] = X;
                  },
                  onClick: () => H(re),
                  onKeyDown: (X) => we(X, re),
                  disabled: L,
                  className: [
                    "aria-tabs-datagrid__tab",
                    ee ? "aria-tabs-datagrid__tab--selected" : "",
                    L ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: G.label }),
                    T.tabLoadingStates[re] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    T.tabErrors[re] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
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
            sortConfig: T.sortConfig || [],
            columns: q.columns.map((G) => ({ key: G.key, label: G.label })),
            onSortChange: (G) => {
              C({ type: "SET_SORT", payload: G });
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
              k.current[0] = G;
            },
            onKeyDown: (G) => ie(G, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${q.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  rr,
                  {
                    id: `card-sort-${q.id}`,
                    name: `card-sort-${q.id}`,
                    value: S.cardSortConfig ? `${S.cardSortConfig.key}-${S.cardSortConfig.direction}` : "",
                    onChange: (G) => te(G.target.value),
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
            const ee = S.selectedCardIndex === re, L = S.focusedCardIndex === re && S.focusArea === "cards", X = S.focusedCardIndex === re && S.focusArea === "card" && S.isCardNavigationActive, oe = re === 0 && S.focusArea !== "cards", K = L || oe, W = O(re, S.gridColumns);
            if (r.cardTemplate) {
              const ce = r.cardTemplate(G, q.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": W.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ n.jsx(
                    "div",
                    {
                      ref: (ke) => {
                        I.current[re] = ke;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        ee ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        L ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        X ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": W.col + 1,
                      "aria-selected": ee,
                      "aria-expanded": X,
                      "aria-description": X ? `Card navigation active. ${S.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: K ? 0 : -1,
                      onClick: () => {
                        D((ke) => ({
                          ...ke,
                          selectedCardIndex: ke.selectedCardIndex === re ? -1 : re
                        })), ae(G);
                      },
                      onKeyDown: (ke) => ne(ke, re),
                      onFocus: () => {
                        D((ke) => ke.isCardNavigationActive ? ke : ke.focusedCardIndex !== re || ke.focusArea !== "cards" ? {
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
            const se = gp(G, q.columns, R, j), me = [
              se.className || "",
              ee ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              L ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              X ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": W.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      ee ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      L ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      X ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": W.col + 1,
                    "aria-selected": ee,
                    "aria-expanded": X,
                    onKeyDown: (ce) => {
                      ce.key === "Enter" && (ce.preventDefault(), D((ke) => ({
                        ...ke,
                        selectedCardIndex: re
                      }))), ne(ce, re);
                    },
                    children: /* @__PURE__ */ n.jsx(
                      wi,
                      {
                        ...se,
                        ref: (ce) => {
                          I.current[re] = ce;
                        },
                        className: me,
                        "aria-label": `${se["aria-label"] || se.heading}. ${X ? `Card navigation active with ${S.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: K ? 0 : -1,
                        onClick: () => {
                          D((ce) => ({
                            ...ce,
                            selectedCardIndex: ce.selectedCardIndex === re ? -1 : re
                          })), ae(G);
                        },
                        onKeyDown: (ce) => ne(ce, re),
                        onFocus: () => {
                          S.isCardNavigationActive || D((ce) => ce.focusedCardIndex !== re || ce.focusArea !== "cards" ? {
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
  return N === "hybrid" ? /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${M || ""}`, children: [
    o && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ n.jsx(
      Ba,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: _,
        ariaDescription: w,
        orientation: y,
        id: p,
        disabled: g,
        selectedIndex: f,
        onTabChange: m,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: d,
        ...$
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${M || ""}`, children: [
    o && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ n.jsx(
      Ba,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: _,
        ariaDescription: w,
        orientation: y,
        id: p,
        disabled: g,
        selectedIndex: f,
        onTabChange: m,
        actions: l,
        forceActionsAbove: d,
        ...$
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, Mi = (e) => {
  const t = Ha.find((r) => r.value === e);
  return t ? t.icon : null;
}, xp = {
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
}, bp = (e) => Ds(e, [
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
]), yp = {
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
}, vp = (e) => Ds(e, [
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
]), _p = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: xp,
    createTabs: bp
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: yp,
    createTabs: vp
  }
}, To = (e, t) => {
  const r = _p[e];
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
], wp = [
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
], Sp = [
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
], kp = [
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
], Do = [
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
], $o = [
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
], Io = [
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
], Cp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, jp = () => [
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
    data: wp,
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
    data: Sp,
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
    data: kp,
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
], Np = () => {
  const [e, t] = Le("healthcare"), r = Me(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: ep,
      tabPanels: jp(),
      data: Li
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...To("ecommerce", Do),
      data: Do
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...To("financial", $o),
      data: $o
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Cp,
      tabPanels: Ds(Io, [
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
      data: Io
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
      Ba,
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
}, vb = Np, Pi = (e) => /* @__PURE__ */ n.jsx(Zo, { ...e }), _b = ({
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
  logo: _,
  className: w,
  ...y
}) => {
  const p = {
    service: d,
    navigation: c,
    search: u,
    account: f,
    organisation: m,
    logo: _,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(_i, { ...o }),
    /* @__PURE__ */ n.jsx(ti, { ...p }),
    /* @__PURE__ */ n.jsx(Pi, { className: w, ...y, children: /* @__PURE__ */ n.jsx(Jo, { size: s, children: /* @__PURE__ */ n.jsx(nn, { children: /* @__PURE__ */ n.jsxs(Pn, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Bt, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(ni, { ...l })
  ] });
}, wb = ({
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
  ..._
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
    /* @__PURE__ */ n.jsxs(Pi, { className: m, ..._, children: [
      d && /* @__PURE__ */ n.jsx(Ma, { ...d }),
      /* @__PURE__ */ n.jsx(Jo, { size: s, children: /* @__PURE__ */ n.jsx(nn, { children: /* @__PURE__ */ n.jsxs(Pn, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Bt, { style: { marginTop: "3rem" }, size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(ni, { ...l })
  ] });
}, Fi = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = ye("nhsuk-back-link", a), d = ye("nhsuk-back-link__link"), c = () => /* @__PURE__ */ n.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
Fi.displayName = "ForwardLink";
const pn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function Mo() {
  return typeof window > "u" ? pn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function Ei() {
  const [e, t] = Y.useState(Mo());
  Y.useEffect(() => {
    if (typeof window > "u") return;
    const o = () => t(Mo());
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
function Sb(e) {
  const { width: t, values: r } = Ei();
  let a = e.base;
  const s = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const o of s) {
    const i = r[o];
    t >= i && e[o] !== void 0 && (a = e[o]);
  }
  return a;
}
function Tp(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [s, o] = Y.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = Y.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return Y.useEffect(() => {
    if (!t || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search);
    s ? d.set(r, String(s)) : d.delete(r), d.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${d.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [s, i, t, r, a]), { selectedId: s, setSelectedId: o, drilledIn: i, setDrilledIn: l };
}
const Dp = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
), $p = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
function Ip(e) {
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
    emptyState: _,
    a11y: w,
    className: y,
    getId: p = (pe) => pe.id,
    orientation: g = "vertical",
    autoEnableThirdColumn: M = !0,
    onDrillChange: $,
    navigationInstructions: N = "Use arrow keys to navigate, Enter to open.",
    initialFocus: F = "first",
    skipFocusOnSelect: P = !1,
    skipAnnouncements: R = !1,
    onFocusChange: j,
    syncUrl: v = !1,
    urlParamSelected: T = "nsv",
    urlParamDrill: C = "nsvDrill",
    urlSyncDebounceMs: h = 0,
    lazySecondary: I = !1,
    navFooter: k,
    collapsibleNav: b = !1,
    navInitiallyCollapsed: S = !1,
    onNavCollapseChange: D,
    collapseToggleLabelShow: Q = "Show navigation",
    collapseToggleLabelHide: O = "Hide navigation",
    collapseToggleIconShow: A,
    collapseToggleIconHide: U,
    persistNavCollapsed: H,
    navCollapsedStorageKey: ae = "nsvCollapsed",
    navCollapsedUrlParam: z = "nsvCollapsed",
    autoContentHeader: fe,
    contentHeaderLevel: ve = 2,
    renderContentHeader: le,
    contentSubheader: ue,
    secondarySubheader: J
  } = e, { up: te } = Ei(), [de, x] = Y.useState(!1);
  Y.useEffect(() => {
    x(!0);
  }, []);
  const E = de && te("medium"), B = de && te("xlarge");
  let Z;
  d ? Z = d : E ? Z = "two-column" : Z = "list", !d && M && l && B && (Z = "three-column");
  const V = Tp({
    enabled: v,
    paramSelected: T,
    paramDrill: C
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
  const re = Y.useRef(null), ee = Y.useRef(null), L = Y.useRef(null), X = Y.useRef(null), [oe, K] = Y.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [W, se] = Y.useState(() => "nav"), [me, ce] = Y.useState(0), ke = () => [
    X.current,
    ee.current,
    L.current
  ].filter(Boolean), je = (pe) => {
    const Se = ke(), xe = Math.max(0, Math.min(pe, Se.length - 1));
    Se[xe]?.focus(), ce(xe);
  }, be = Y.useCallback(
    (pe) => pe ? Array.from(pe.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (xe) => !xe.hasAttribute("disabled") && xe.tabIndex !== -1
    ) : [],
    []
  ), $e = Y.useCallback(
    (pe) => {
      const Se = be(ee.current);
      if (!Se.length) {
        ee.current?.focus();
        return;
      }
      const xe = Math.max(0, Math.min(pe, Se.length - 1)), De = Se[xe];
      De.focus(), setTimeout(() => {
        document.activeElement !== De && (De.focus(), setTimeout(() => {
          document.activeElement !== De && De.click();
        }, 10));
      }, 10), K((Oe) => ({ ...Oe, contentIndex: xe }));
      const Ye = (Oe) => {
        Oe.key === "Escape" && (Oe.preventDefault(), Oe.stopPropagation(), ee.current?.focus(), De.removeEventListener("keydown", Ye));
      };
      Se.forEach((Oe) => {
        const We = Oe._escapeHandler;
        We && Oe.removeEventListener("keydown", We);
      }), De._escapeHandler = Ye, De.addEventListener("keydown", Ye);
    },
    [be]
  ), Be = Y.useCallback(
    (pe) => {
      const Se = be(L.current);
      if (!Se.length) {
        L.current?.focus();
        return;
      }
      const xe = Math.max(0, Math.min(pe, Se.length - 1)), De = Se[xe];
      De.focus(), setTimeout(() => {
        document.activeElement !== De && (De.focus(), setTimeout(() => {
          document.activeElement !== De && De.click();
        }, 10));
      }, 10), K((Oe) => ({ ...Oe, secondaryIndex: xe }));
      const Ye = (Oe) => {
        Oe.key === "Escape" && (Oe.preventDefault(), Oe.stopPropagation(), L.current?.focus(), De.removeEventListener("keydown", Ye));
      };
      Se.forEach((Oe) => {
        const We = Oe._escapeHandler;
        We && Oe.removeEventListener("keydown", We);
      }), De._escapeHandler = Ye, De.addEventListener("keydown", Ye);
    },
    [be]
  ), Fe = (pe) => {
    if (pe.defaultPrevented) return;
    const Se = pe.key, xe = pe.target, De = !!st.current && st.current.contains(xe), Ye = !!ee.current && ee.current.contains(xe), Oe = !!L.current && L.current.contains(xe), We = !!L.current, dn = xe === X.current || xe === ee.current || xe === L.current, Kt = Re && (Z === "list" || Z === "cards"), qn = Ye && !!xe.closest(".nhs-navigation-split-view__header");
    if (W === "containers" && dn) {
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
        if (pe.preventDefault(), xe === X.current) {
          if (se("nav"), st.current) {
            const Ie = Array.from(
              st.current.querySelectorAll("[data-nav-item]")
            );
            (Ie[Ke >= 0 ? Ke : 0] || Ie[0])?.focus();
          }
        } else xe === ee.current ? (se("content"), $e(oe.contentIndex)) : xe === L.current && (se("secondary"), Be(oe.secondaryIndex));
        return;
      }
      return;
    }
    if (Se === "Escape") {
      if (W === "content" || W === "secondary") {
        if (Ye || Oe) {
          if (pe.preventDefault(), se("nav"), st.current) {
            const Ue = Array.from(
              st.current.querySelectorAll("[data-nav-item]")
            )[Ke >= 0 ? Ke : 0];
            setTimeout(() => Ue?.focus(), 10);
          }
        } else if ((xe === ee.current || xe === L.current) && (pe.preventDefault(), se("nav"), st.current)) {
          const Ue = Array.from(
            st.current.querySelectorAll("[data-nav-item]")
          )[Ke >= 0 ? Ke : 0];
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
      if (xe === ee.current && W === "content") {
        pe.preventDefault(), pe.stopPropagation(), be(ee.current).length > 0 && setTimeout(() => {
          $e(oe.contentIndex);
        }, 50);
        return;
      }
      if (xe === L.current && W === "secondary") {
        pe.preventDefault(), pe.stopPropagation(), be(
          L.current
        ).length > 0 && setTimeout(() => {
          Be(oe.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Kt && qn && !dn && (Se === "ArrowRight" || Se === "ArrowLeft")) {
      const Ie = be(ee.current).filter(
        (Ue) => Ue.closest(".nhs-navigation-split-view__header")
      );
      if (Ie.length > 1) {
        const Ue = Ie.indexOf(xe);
        if (Ue >= 0) {
          const As = (Ue + (Se === "ArrowRight" ? 1 : -1) + Ie.length) % Ie.length;
          pe.preventDefault(), Ie[As].focus();
          return;
        }
      }
    }
    if (Se === "ArrowRight") {
      if (De || W === "nav") {
        pe.preventDefault(), se("content"), setTimeout(() => ee.current?.focus(), 10);
        return;
      }
      if (Ye || W === "content") {
        We && (pe.preventDefault(), se("secondary"), setTimeout(() => L.current?.focus(), 10));
        return;
      }
    }
    if (Se === "ArrowLeft") {
      if (Oe || W === "secondary") {
        pe.preventDefault(), se("content"), setTimeout(() => ee.current?.focus(), 10);
        return;
      }
      if (Ye || W === "content") {
        if (pe.preventDefault(), se("nav"), st.current) {
          const Ue = Array.from(
            st.current.querySelectorAll("[data-nav-item]")
          )[Ke >= 0 ? Ke : 0];
          setTimeout(() => Ue?.focus(), 10);
        }
        return;
      }
    }
    if (Se === "Home" && !De && (pe.preventDefault(), se("nav"), st.current)) {
      const Ie = Array.from(
        st.current.querySelectorAll("[data-nav-item]")
      ), Ue = Ie[Ke >= 0 ? Ke : 0] || Ie[0];
      setTimeout(() => Ue?.focus(), 10);
    }
    if (Se === "End") {
      const Ie = We ? L.current : ee.current;
      Ie && !Ie.contains(xe) && (pe.preventDefault(), We ? (se("secondary"), setTimeout(() => L.current?.focus(), 10)) : (se("content"), setTimeout(() => ee.current?.focus(), 10)));
    }
    if (Se === "ArrowDown" || Se === "ArrowUp") {
      if (xe === ee.current && Se === "ArrowDown") {
        pe.preventDefault(), be(ee.current).length > 0 && $e(0);
        return;
      }
      if (xe === L.current && Se === "ArrowDown") {
        pe.preventDefault(), be(
          L.current
        ).length > 0 && Be(0);
        return;
      }
      if (Ye) {
        const Ie = be(ee.current);
        if (Ie.length) {
          pe.preventDefault();
          const Ue = Se === "ArrowDown" ? 1 : -1, _t = (oe.contentIndex + Ue + Ie.length) % Ie.length;
          $e(_t);
        }
      } else if (Oe) {
        const Ie = be(L.current);
        if (Ie.length) {
          pe.preventDefault();
          const Ue = Se === "ArrowDown" ? 1 : -1, _t = (oe.secondaryIndex + Ue + Ie.length) % Ie.length;
          Be(_t);
        }
      }
    }
  }, Re = !!ie && (Z === "list" || Z === "cards"), Ge = Y.useMemo(() => fe === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : fe === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : fe === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: fe.mobile !== void 0 ? fe.mobile : !0,
    tablet: fe.tablet || !1,
    desktop: fe.desktop || !1
  }, [fe]), Ve = de && te("medium") && !te("xlarge"), Je = de && te("xlarge"), yt = !!l, Qe = Z === "three-column", [tt, kn] = Y.useState(!1);
  Y.useEffect(() => {
    Qe && tt && kn(!1);
  }, [Qe, tt]), Y.useEffect(() => {
    tt && !Qe && (se("secondary"), ce(2), setTimeout(() => {
      L.current?.focus();
    }, 50));
  }, [tt, Qe]), Y.useEffect(() => {
    !tt && !Qe && W === "secondary" && (se("content"), ce(1), setTimeout(() => {
      ee.current?.focus();
    }, 50));
  }, [tt, Qe, W]);
  const ra = !!ie && (Re && Ge.mobile || !Re && Ve && Ge.tablet || !Re && Je && Ge.desktop) || yt && !Qe, nc = `h${ve}`, aa = ie ? Y.createElement(
    nc,
    {
      style: {
        marginLeft: Re ? 32 : 0,
        marginRight: Re ? 32 : 0
      }
    },
    ie.label
  ) : null, Es = Re ? "mobile" : Ve ? "tablet" : "desktop", rc = yt && !Qe && !tt, sa = Re && Ge.mobile ? /* @__PURE__ */ n.jsx(
    Ma,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => cn(void 0, void 0)
    }
  ) : void 0, oa = rc ? /* @__PURE__ */ n.jsx(
    Fi,
    {
      element: "button",
      text: f,
      onClick: () => {
        kn(!0);
      }
    }
  ) : void 0, ia = !Qe && tt ? /* @__PURE__ */ n.jsx(
    Ma,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => kn(!1)
    }
  ) : void 0, ac = Y.useMemo(() => {
    if (!ra || !ie) return null;
    if (le)
      return le({
        item: ie,
        detailActive: Re,
        context: Es,
        backLink: sa,
        defaultHeading: aa
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
            ia || sa,
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
                  aa,
                  pe && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: pe })
                ]
              }
            )
          ]
        }
      ),
      oa && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: oa })
    ] });
  }, [
    ra,
    ie,
    le,
    Re,
    Es,
    sa,
    ia,
    aa,
    oa,
    ue
  ]);
  Y.useEffect(() => {
    if (!v) return;
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
  }, [v, V, we, Z, h]), Y.useEffect(() => {
    if (!v) return;
    const pe = () => {
      const Se = new URLSearchParams(window.location.search), xe = Se.get(T);
      Se.get(C), he(xe === null ? void 0 : xe);
    };
    return window.addEventListener("popstate", pe), () => window.removeEventListener("popstate", pe);
  }, [
    v,
    T,
    C,
    d,
    l
  ]);
  const Yn = Y.useRef(0), Ct = Y.useRef(
    null
  ), cn = Y.useCallback(
    (pe, Se) => {
      pe !== we && (r === void 0 && he(pe), s?.(pe, Se));
    },
    [r, s, we]
  );
  Y.useEffect(() => {
    if (!P && Re && ee.current) {
      const pe = setTimeout(() => ee.current?.focus(), 30);
      return () => clearTimeout(pe);
    }
  }, [Re, we, P]);
  const st = Y.useRef(null), [Ke, Cn] = Y.useState(
    () => F === "first" ? 0 : -1
  );
  Y.useEffect(() => {
    if (Ke < 0 || !st.current) return;
    const Se = Array.from(
      st.current.querySelectorAll("[data-nav-item]")
    )[Ke];
    if (Se) {
      document.activeElement !== Se && Se.focus(), Yn.current = Ke;
      const xe = t[Ke];
      j?.(
        xe ? p(xe) : void 0,
        xe,
        Ke
      );
    }
  }, [Ke, t, j, p]);
  const sc = (pe) => {
    const Se = g === "vertical" ? "ArrowDown" : "ArrowRight", xe = g === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (pe.key === "ArrowRight" && g === "vertical") {
      pe.preventDefault(), tt ? (se("secondary"), setTimeout(() => {
        L.current?.focus();
      }, 10)) : (se("content"), setTimeout(() => {
        ee.current?.focus();
      }, 10));
      return;
    }
    if (pe.key === Se)
      pe.preventDefault(), Cn((De) => Math.min(t.length - 1, De + 1));
    else if (pe.key === xe)
      pe.preventDefault(), Cn((De) => Math.max(0, De - 1));
    else if (pe.key === "Home")
      pe.preventDefault(), Cn(0);
    else if (pe.key === "End")
      pe.preventDefault(), Cn(t.length - 1);
    else if (pe.key === "Enter" || pe.key === " ") {
      pe.preventDefault();
      const De = t[Ke];
      De && !De.disabled && cn(p(De), De);
    } else if (pe.key.length === 1 && /[a-z0-9]/i.test(pe.key)) {
      Ct.current || (Ct.current = { buffer: "", last: 0 });
      const De = Date.now(), Ye = 700, Oe = pe.key.toLowerCase();
      De - Ct.current.last > Ye ? Ct.current.buffer = Oe : Ct.current.buffer += Oe, Ct.current.last = De;
      let We = Ct.current.buffer;
      const dn = We.split("").every((_t) => _t === We[0]), Kt = t.map(
        (_t) => String(_t.label || "").toLowerCase()
      );
      let qn = 0;
      Ke >= 0 && (qn = (Ke + 1) % t.length);
      let Ie;
      const Ue = (_t, As) => {
        const Bs = t.length;
        for (let da = 0; da < Bs; da++) {
          const ua = (qn + da) % Bs;
          if (!t[ua].disabled && Kt[ua].startsWith(_t))
            return ua;
        }
      };
      dn && We.length > 1 ? Ie = Ue(We[0]) : (Ie = Ue(We), Ie === void 0 && We.length > 1 && (Ie = Ue(We[We.length - 1]), Ie !== void 0 && Ct.current && (Ct.current.buffer = We[We.length - 1]))), Ie !== void 0 && Cn(Ie);
    }
  }, oc = Y.useMemo(() => {
    if (H && (H === "url" || H === "both") && typeof window < "u") {
      const Se = new URLSearchParams(window.location.search).get(z);
      if (Se === "1") return !0;
      if (Se === "0") return !1;
    }
    if (H && (H === "localStorage" || H === "both") && typeof window < "u")
      try {
        const pe = window.localStorage.getItem(ae);
        if (pe === "1") return !0;
        if (pe === "0") return !1;
      } catch {
      }
    return S;
  }, [
    H,
    S,
    ae,
    z
  ]), [vt, ic] = Y.useState(oc);
  Y.useEffect(() => {
    D?.(vt);
  }, [vt, D]);
  const lc = Y.useCallback(() => {
    E && b && ic((pe) => !pe);
  }, [E, b]);
  Y.useEffect(() => {
    if (H && !(typeof window > "u")) {
      if (H === "localStorage" || H === "both")
        try {
          window.localStorage.setItem(
            ae,
            vt ? "1" : "0"
          );
        } catch {
        }
      if (H === "url" || H === "both") {
        const pe = new URLSearchParams(window.location.search);
        pe.set(z, vt ? "1" : "0");
        const Se = `${window.location.pathname}?${pe.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", Se);
      }
    }
  }, [
    vt,
    H,
    ae,
    z
  ]);
  const cc = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Re ? "nhs-navigation-split-view--detail-active" : "",
    Z === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    b && E && vt ? "nhs-navigation-split-view--nav-collapsed" : "",
    y
  ].filter(Boolean).join(" "), la = Y.useRef(null);
  Y.useEffect(() => {
    if (!R && la.current) {
      const pe = ie ? `Selected ${ie.label}` : "Selection cleared";
      la.current.textContent = pe;
    }
  }, [ie, R]), Y.useEffect(() => {
    !Re && we == null && st.current && st.current.querySelectorAll("[data-nav-item]")[Yn.current]?.focus();
  }, [Re, we]);
  const Ut = Z === "three-column", [ca, dc] = Y.useState(!1);
  Y.useEffect(() => {
    Ut && !ca && dc(!0);
  }, [Ut, ca]);
  const Rs = Y.useRef(Ut);
  Y.useEffect(() => {
    Rs.current !== Ut && ($?.(Ut), Rs.current = Ut);
  }, [Ut, $]);
  const uc = () => {
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
                children: _ || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
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
        focused: Oe
      }) => {
        const We = p(xe), dn = xe.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Oe ? 0 : -1,
          onClick: () => {
            Yn.current = De, cn(We, xe);
          },
          onKeyDown: (Kt) => {
            (Kt.key === "Enter" || Kt.key === " ") && (Kt.preventDefault(), Yn.current = De, cn(We, xe));
          }
        };
        return /* @__PURE__ */ n.jsxs(
          "li",
          {
            id: String(We),
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
    ), [p, cn, o]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: st,
          className: "nhs-navigation-split-view__list",
          onKeyDown: sc,
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
                focused: De === Ke || Ke === -1 && De === 0 && F === "first",
                "data-just-selected": p(xe) === q ? "true" : void 0
              },
              p(xe)
            )),
            t.length === 0 && !m && /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__list-item",
                "aria-disabled": "true",
                children: _ || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
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
          children: N
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
      "data-layout": Z,
      onKeyDown: Fe,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Re || void 0,
            style: { transform: Re ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: X,
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
                        "aria-label": vt ? Q : O,
                        title: vt ? Q : O,
                        children: vt ? A || /* @__PURE__ */ n.jsx($p, {}) : U || /* @__PURE__ */ n.jsx(Dp, {})
                      }
                    ) }),
                    /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: uc() }),
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
                  ref: ee,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": w?.contentLabel || "Content",
                  "data-has-selection": !!ie || void 0,
                  tabIndex: 0,
                  style: {
                    display: tt && !Qe ? "none" : void 0
                  },
                  children: [
                    ra && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: ac }),
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
              Z === "three-column" && (!I || ca) || tt && !Qe ? /* @__PURE__ */ n.jsx(
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
                                  ia,
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
            ref: la,
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
Ip.displayName = "NavigationSplitView";
const Mp = typeof window < "u" && window.document ? Y.useLayoutEffect : Y.useEffect, Lo = (e, t, r, a) => e == null || Number.isNaN(e) ? a : Math.min(r, Math.max(t, e)), Lp = ({ item: e, maxLines: t, enableDrilldown: r, onExpand: a, isActive: s, topLaneIndex: o }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, d = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${o})`, u = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), m = r && e.childItems && e.childItems.length > 0, _ = (y) => {
    m && (y.preventDefault(), a?.(e));
  }, w = m ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": s || !1,
    onClick: _,
    onKeyDown: (y) => {
      (y.key === "Enter" || y.key === " ") && _(y), y.key === "Escape" && s && _(y);
    }
  } : {};
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: ye("nhsuk-product-roadmap__item", m && "nhsuk-product-roadmap__item--expandable", s && "nhsuk-product-roadmap__item--active"),
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
          m && /* @__PURE__ */ n.jsx("span", { className: ye("nhsuk-product-roadmap__item-expander", s && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Pp = hc(({
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
  const [u, f] = Le(() => /* @__PURE__ */ new Set()), [m, _] = Le(() => /* @__PURE__ */ new Set()), w = Ee(/* @__PURE__ */ new Set()), y = ge((h) => u.has(h), [u]), p = ge((h) => {
    f((I) => {
      const k = new Set(I);
      return k.has(h.id) ? (k.delete(h.id), _((b) => {
        const S = new Set(b);
        return S.add(h.id), S;
      }), setTimeout(() => _((b) => {
        const S = new Set(b);
        return S.delete(h.id), S;
      }), 240), l?.(h.id, !1)) : (k.add(h.id), l?.(h.id, !0)), k;
    });
  }, [l]);
  Mp(() => {
    if (d !== "inline" || !i || typeof document > "u") return;
    const h = [];
    if (u.forEach((S) => {
      w.current.has(S) || h.push(S);
    }), w.current = new Set(u), !h.length) return;
    const I = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, k = h.map((S) => `.nhsuk-product-roadmap__inline-children[data-parent="${S}"] .nhsuk-product-roadmap__inline-child`).join(","), b = Array.from(document.querySelectorAll(k));
    if (b.length) {
      if (I) {
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
  }, [u]), M = ye("nhsuk-product-roadmap", s), $ = Lo(r, 120, 1200, 400), N = Lo(a, 1, 6, 2), F = Me(() => e.map((h) => /* @__PURE__ */ new Date(h + " 01")), [e]), P = Me(() => {
    if (F.length === 0) {
      const k = /* @__PURE__ */ new Date();
      return [k, k];
    }
    const h = new Date(F[0]), I = An.offset(new Date(F[F.length - 1]), 1);
    return [h, I];
  }, [F]), R = Me(() => Ts().domain(P).range([0, F.length * $]), [P, F.length, $]), j = ge((h) => {
    if (h.startDate) {
      const O = new Date(h.startDate), A = new Date(h.endDate ?? h.startDate);
      A < O && A.setTime(O.getTime());
      const U = R(O), H = An.offset(new Date(A), 1);
      let ae = R(H);
      Number.isFinite(ae) || (ae = U + $);
      const z = Math.max($ * 0.25, ae - U), fe = U / $, ve = z / $;
      return { ...h, _pxLeft: U, _pxWidth: z, _startFraction: fe, _spanColumns: ve };
    }
    const I = h.date ?? 1, k = h.dateOffset ?? 0, b = h.length ?? 1, S = h.partialLength ?? 1, D = I - 1 + k, Q = b - 1 + S;
    return { ...h, _pxLeft: D * $, _pxWidth: Q * $, _startFraction: D, _spanColumns: Q };
  }, [R, $]), v = Me(() => t.map((h) => {
    const k = h.roadmapItems.map((S) => {
      const D = !S.childItems && S.children ? { ...S, childItems: S.children } : { ...S };
      return j(D);
    }).sort((S, D) => S._pxLeft !== D._pxLeft ? S._pxLeft - D._pxLeft : D._pxWidth - S._pxWidth), b = [];
    return k.forEach((S) => {
      const D = S._pxLeft, Q = S._pxLeft + S._pxWidth;
      let O = b.findIndex((A) => A <= D);
      O === -1 && (O = b.length, b.push(0)), b[O] = Q, S.verticalPosition = O + 1;
    }), { ...h, roadmapItems: k, _laneCount: b.length };
  }), [t, j]), T = Me(() => v.map((h) => h._laneCount || 1), [v]), C = Me(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: M,
      style: { "--column-width": `${$}px`, gridTemplateColumns: C },
      role: "grid",
      "aria-label": o,
      "aria-colcount": e.length + 1,
      "aria-rowcount": v.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((h, I) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": I + 2, children: h }, `${h}-${I}`))
        ] }),
        v.map((h, I) => {
          const k = I + 2, b = T[I];
          let S, D = 0, Q = [];
          i && d === "inline" && (Q = h.roadmapItems.filter((H) => y(H.id) && H.childItems && H.childItems.length).map((H) => ({ id: H.id, lane: H.verticalPosition || 1, count: H.childItems.length })).sort((H, ae) => H.lane - ae.lane), D = Q.reduce((H, ae) => H + ae.count, 0));
          const O = b + D;
          S = `calc((${O} * var(--roadmap-item-block-height)) + (max(0, ${O} - 1) * var(--roadmap-row-gap)))`;
          const A = {};
          let U = 0;
          return Q.forEach((H) => {
            U += H.count, A[H.lane + 1] = U;
          }), /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": k, children: [
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: h.heading }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: S }, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: h.roadmapItems.map((H, ae) => {
              const z = (H.verticalPosition || 1) - 1, fe = Q.filter((J) => J.lane - 1 < z).reduce((J, te) => J + te.count, 0), ve = z + fe, le = y(H.id), ue = m.has(H.id);
              return /* @__PURE__ */ n.jsxs(ft.Fragment, { children: [
                /* @__PURE__ */ n.jsx(Lp, { item: H, maxLines: N, enableDrilldown: i, onExpand: p, isActive: le, topLaneIndex: ve, laneOffset: fe }),
                i && d === "inline" && (le || ue) && H.childItems && /* @__PURE__ */ n.jsx("div", { "data-parent": H.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${H.title} child tasks`, children: H.childItems.map((J, te) => {
                  const de = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let x = H._pxLeft, E = H._pxWidth;
                  if (J.startDate) {
                    const V = new Date(J.startDate);
                    let ne = J.endDate ? new Date(J.endDate) : new Date(V);
                    ne < V && (ne = new Date(V));
                    const he = new Date(ne);
                    he.setDate(he.getDate() + 1);
                    const we = R(V);
                    let ie = R(he);
                    (!Number.isFinite(ie) || ie <= we) && (ie = we + 6), x = we, E = Math.max(6, ie - we);
                  }
                  const Z = ve + 1 + te;
                  return /* @__PURE__ */ n.jsxs(
                    "div",
                    {
                      className: ye("nhsuk-product-roadmap__inline-child", J.status && `nhsuk-product-roadmap__inline-child--status-${J.status}`, !le && ue && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${x}px`, width: `${E}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${Z})`, height: de, opacity: le ? 0 : void 0, transform: le ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: J.title })
                      ]
                    },
                    J.id ?? te
                  );
                }) })
              ] }, H.id ?? ae);
            }) }) })
          ] }, `${h.heading}-${I}`);
        }),
        i && d === "overlay" && u.size === 1 && (() => {
          const h = Array.from(u)[0], I = t.flatMap((k) => k.roadmapItems).find((k) => k.id === h);
          return !I || !I.childItems ? null : /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${I.title} details`, children: [
            /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ n.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: I.title }),
                /* @__PURE__ */ n.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: g, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: I.content }),
              /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: I.childItems.map((k, b) => /* @__PURE__ */ n.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
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
Pp.displayName = "ProductRoadmap";
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
function rt(e) {
  return function() {
    return e;
  };
}
const za = Math.PI, Oa = 2 * za, Zt = 1e-6, Fp = Oa - Zt;
function Ai(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Ep(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Ai;
  const r = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let s = 1, o = a.length; s < o; ++s)
      this._ += Math.round(arguments[s] * r) / r + a[s];
  };
}
class Rp {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Ai : Ep(t);
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
    else if (m > Zt) if (!(Math.abs(f * d - c * u) > Zt) || !o)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let _ = a - i, w = s - l, y = d * d + c * c, p = _ * _ + w * w, g = Math.sqrt(y), M = Math.sqrt(m), $ = o * Math.tan((za - Math.acos((y + m - p) / (2 * g * M))) / 2), N = $ / M, F = $ / g;
      Math.abs(N - 1) > Zt && this._append`L${t + N * u},${r + N * f}`, this._append`A${o},${o},0,0,${+(f * _ > u * w)},${this._x1 = t + F * d},${this._y1 = r + F * c}`;
    }
  }
  arc(t, r, a, s, o, i) {
    if (t = +t, r = +r, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(s), d = a * Math.sin(s), c = t + l, u = r + d, f = 1 ^ i, m = i ? s - o : o - s;
    this._x1 === null ? this._append`M${c},${u}` : (Math.abs(this._x1 - c) > Zt || Math.abs(this._y1 - u) > Zt) && this._append`L${c},${u}`, a && (m < 0 && (m = m % Oa + Oa), m > Fp ? this._append`A${a},${a},0,1,${f},${t - l},${r - d}A${a},${a},0,1,${f},${this._x1 = c},${this._y1 = u}` : m > Zt && this._append`A${a},${a},0,${+(m >= za)},${f},${this._x1 = t + a * Math.cos(o)},${this._y1 = r + a * Math.sin(o)}`);
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
  }, () => new Rp(t);
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
function Oi(e) {
  return new zi(e);
}
function Wi(e) {
  return e[0];
}
function Ui(e) {
  return e[1];
}
function Gi(e, t) {
  var r = rt(!0), a = null, s = Oi, o = null, i = Bi(l);
  e = typeof e == "function" ? e : e === void 0 ? Wi : rt(e), t = typeof t == "function" ? t : t === void 0 ? Ui : rt(t);
  function l(d) {
    var c, u = (d = Hi(d)).length, f, m = !1, _;
    for (a == null && (o = s(_ = i())), c = 0; c <= u; ++c)
      !(c < u && r(f = d[c], c, d)) === m && ((m = !m) ? o.lineStart() : o.lineEnd()), m && o.point(+e(f, c, d), +t(f, c, d));
    if (_) return o = null, _ + "" || null;
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
function Wa(e, t, r) {
  var a = null, s = rt(!0), o = null, i = Oi, l = null, d = Bi(c);
  e = typeof e == "function" ? e : e === void 0 ? Wi : rt(+e), t = typeof t == "function" ? t : rt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Ui : rt(+r);
  function c(f) {
    var m, _, w, y = (f = Hi(f)).length, p, g = !1, M, $ = new Array(y), N = new Array(y);
    for (o == null && (l = i(M = d())), m = 0; m <= y; ++m) {
      if (!(m < y && s(p = f[m], m, f)) === g)
        if (g = !g)
          _ = m, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), w = m - 1; w >= _; --w)
            l.point($[w], N[w]);
          l.lineEnd(), l.areaEnd();
        }
      g && ($[m] = +e(p, m, f), N[m] = +t(p, m, f), l.point(a ? +a(p, m, f) : $[m], r ? +r(p, m, f) : N[m]));
    }
    if (M) return l = null, M + "" || null;
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
function Fo(e, t, r) {
  var a = e._x1 - e._x0, s = t - e._x1, o = (e._y1 - e._y0) / (a || s < 0 && -0), i = (r - e._y1) / (s || a < 0 && -0), l = (o * s + i * a) / (a + s);
  return (Po(o) + Po(i)) * Math.min(Math.abs(o), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function Eo(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function wa(e, t, r) {
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
        wa(this, this._t0, Eo(this, this._t0));
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
          this._point = 3, wa(this, Eo(this, r = Fo(this, e, t)), r);
          break;
        default:
          wa(this, this._t0, r = Fo(this, e, t));
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
function Ap(e, t, r) {
  const a = ri(e, t);
  return Ts().domain(a).range(r);
}
function Ro(e, t, r) {
  const [a, s] = ri(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(s)))
    return dr().domain([0, 0]).range(r);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const d = s - a, c = (d > 0 ? d : a) * 0.1;
    i = Math.max(0, a - c), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = s ?? 0;
  return dr().domain([i, l]).nice().range(r);
}
function Ua(e, t, r, a) {
  const s = Gi().x(t).y(r);
  return a?.smooth !== !1 && s.curve(br), s(e) ?? "";
}
function Bp(e = {}) {
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
const Hp = ({
  height: e = 240,
  margin: t,
  width: r,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: s,
  role: o = "group",
  ariaLabel: i
}) => {
  const l = Bp(t), d = { height: e, position: "relative" };
  return r !== void 0 && (d.width = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n.jsx("div", { ref: l.ref, className: a, style: d, role: o, "aria-label": i, children: /* @__PURE__ */ n.jsx(Vi.Provider, { value: l, children: s }) });
}, $s = Y.createContext(null), ln = () => Y.useContext($s), zp = ({
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
  const u = qt(), f = t ?? u?.innerWidth ?? 0, m = r ?? u?.innerHeight ?? 0, _ = Y.useMemo(() => e.flatMap((N) => N.data), [e]), w = Y.useCallback((N) => {
    if (a) return a(N);
    const F = N.x;
    return F instanceof Date ? F : new Date(F);
  }, [a]), y = d ?? 6, p = c ?? 6, g = Y.useMemo(() => Ap(_, w, [y, Math.max(0, f - y)]), [_, w, f, y]), M = Y.useMemo(() => {
    if (l) {
      const N = Ro([], (F) => F.y, [Math.max(0, m - p), p]);
      return N.domain(l), N;
    }
    return Ro(_, (N) => N.y, [Math.max(0, m - p), p]);
  }, [_, m, l]), $ = Y.useMemo(() => ({
    xScale: g,
    yScale: M,
    getXTicks: (N = o) => g.ticks(N),
    getYTicks: (N = i) => M.ticks(N)
  }), [g, M, o, i]);
  return /* @__PURE__ */ n.jsx($s.Provider, { value: $, children: s });
}, Ao = ({
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
  tickFormatPreset: _
}) => {
  const w = ln(), y = qt(), p = t || (e === "x" ? w?.xScale : w?.yScale), g = r ?? (e === "x" ? 6 : 5), M = typeof s == "function", $ = Y.useMemo(() => {
    if (M || !_) return;
    const P = (R) => new Intl.DateTimeFormat(void 0, R);
    switch (_) {
      case "dayShortMonth":
        return (R) => {
          const j = R instanceof Date ? R : new Date(R);
          return `${j.getDate()}
${P({ month: "short" }).format(j)}`;
        };
      case "dayShortMonthYear":
        return (R) => {
          const j = R instanceof Date ? R : new Date(R);
          return `${j.getDate()}
${P({ month: "short" }).format(j)} ${j.getFullYear()}`;
        };
      case "shortMonth":
        return (R) => {
          const j = R instanceof Date ? R : new Date(R);
          return P({ month: "short" }).format(j);
        };
      case "shortMonthYear":
        return (R) => {
          const j = R instanceof Date ? R : new Date(R);
          return `${P({ month: "short" }).format(j)} ${j.getFullYear()}`;
        };
      case "hourMinute":
        return (R) => {
          const j = R instanceof Date ? R : new Date(R);
          return P({ hour: "2-digit", minute: "2-digit" }).format(j);
        };
      default:
        return;
    }
  }, [M, _]);
  let N = M ? s : $ || ((P) => String(P));
  const F = Y.useMemo(() => a && Array.isArray(a) ? a : p ? typeof p.ticks == "function" ? p.ticks(g) : p.domain ? p.domain() : [] : [], [p, g, a]);
  if (e === "x" && !M && !_ && F.length && F.every((P) => P instanceof Date)) {
    const P = F[0], R = F[F.length - 1], j = R.getTime() - P.getTime(), v = 24 * 3600 * 1e3, T = 365 * v, C = P.getFullYear() === R.getFullYear(), h = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (j < 2 * v) {
      const I = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      N = (k) => I.format(k);
    } else if (j < 32 * v)
      N = (I) => {
        const k = I;
        return `${k.getDate()} ${h.format(k)}`;
      };
    else if (j < T && C)
      N = (I) => h.format(I);
    else if (j < 2 * T) {
      const I = /* @__PURE__ */ new Set();
      N = (k) => {
        const b = k, S = b.getMonth();
        return I.has(S) || I.add(S), `${h.format(b)} ${b.getFullYear()}`;
      };
    } else
      N = (I) => String(I.getFullYear());
  }
  if (!p || !y) return null;
  if (e === "x") {
    const P = i ?? y.innerHeight, R = typeof p.bandwidth == "function", j = R ? p.bandwidth() : 0, v = (h) => {
      const I = p(h);
      return R ? I + j / 2 : I;
    };
    let T = d ?? 0;
    if (u && d == null) {
      const h = F.map((k) => N(k).replace(/\n.*/g, "")), I = h.length ? h.reduce((k, b) => k + b.length, 0) / h.length : 0;
      T = Math.max(12, Math.round(I * 6 + 4));
    }
    const C = Y.useMemo(() => {
      if (a && Array.isArray(a) || T <= 0) return F;
      const h = [];
      let I = -1 / 0;
      for (const k of F) {
        const b = v(k);
        b - I >= T && (h.push(k), I = b);
      }
      return h;
    }, [F, p, T, a, R, j]);
    return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${P})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ n.jsx("line", { x1: 0, x2: y.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      C.map((h, I) => {
        const k = N(h), b = c && k.length > c ? k.slice(0, Math.max(1, c - 1)) + "…" : k, S = m ? b.split(/\n/) : [b.replace(/\n/g, " ")], D = f < 0 ? "end" : f > 0 ? "start" : "middle";
        return /* @__PURE__ */ n.jsxs("g", { transform: `translate(${v(h)},0)`, children: [
          /* @__PURE__ */ n.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ n.jsxs("text", { y: 9, textAnchor: D, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: f ? `rotate(${f})` : void 0, fontFamily: "inherit", children: [
            S.map((Q, O) => /* @__PURE__ */ n.jsx("tspan", { x: 0, dy: O === 0 ? 0 : "1.1em", children: Q }, O)),
            b !== k && /* @__PURE__ */ n.jsx("title", { children: k })
          ] })
        ] }, h?.toString?.() || I);
      })
    ] });
  }
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    F.map((P, R) => {
      const j = N(P), v = c && j.length > c ? j.slice(0, Math.max(1, c - 1)) + "…" : j, T = m ? v.split(/\n/) : [v.replace(/\n/g, " ")];
      return /* @__PURE__ */ n.jsxs("g", { transform: `translate(0,${p(P)})`, children: [
        /* @__PURE__ */ n.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ n.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          T.map((C, h) => /* @__PURE__ */ n.jsx("tspan", { x: -9, dy: h === 0 ? 0 : "1.1em", children: C }, h)),
          v !== j && /* @__PURE__ */ n.jsx("title", { children: j })
        ] })
      ] }, P?.toString?.() || R);
    }),
    o && /* @__PURE__ */ n.jsx("text", { transform: "rotate(-90)", x: -y.innerHeight / 2, y: -y.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: o })
  ] });
}, Op = ({
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
}, Wp = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, Gn = {
  color: Wp
}, Up = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Xr = {
  color: Up
}, Gp = [
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
let Sa = null, ka = null, Ca = null, Yi = "optimized";
function Vp() {
  const e = { color: { ...Xr.color, ...Gn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
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
    return Gp;
  }
}
function Yp() {
  return Sa || (Sa = Vp()), Sa;
}
function qp(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function ja(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Kp(e, t, r) {
  const a = ja(e), s = ja(t), o = ja(r), i = a * 0.4124 + s * 0.3576 + o * 0.1805, l = a * 0.2126 + s * 0.7152 + o * 0.0722, d = a * 0.0193 + s * 0.1192 + o * 0.9505;
  return { x: i * 100, y: l * 100, z: d * 100 };
}
function Xp(e, t, r) {
  let i = e / 95.047, l = t / 100, d = r / 108.883;
  const c = (u) => u > 8856e-6 ? Math.cbrt(u) : 7.787 * u + 16 / 116;
  return i = c(i), l = c(l), d = c(d), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - d) };
}
function qi(e) {
  const t = qp(e);
  if (!t) return null;
  const r = Kp(t.r, t.g, t.b);
  return Xp(r.x, r.y, r.z);
}
function Bo(e, t) {
  const r = e.L - t.L, a = e.a - t.a, s = e.b - t.b;
  return Math.sqrt(r * r + a * a + s * s);
}
function Zp() {
  const e = Yp();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => qi(i));
  let r = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let d = 0, c = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (d += Bo(l, t[f]), c++);
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
          const _ = Bo(c, m);
          _ < u && (u = _);
        }
      }
      u > l && (l = u, i = d);
    }
    o.push(i), s.delete(i);
  }
  return o.map((i) => e[i]);
}
function Jp() {
  return ka || (ka = Zp()), ka;
}
function Qp(e, t, r) {
  const a = (e + 16) / 116, s = t / 500 + a, o = a - r / 200, i = (u) => {
    const f = u * u * u;
    return f > 8856e-6 ? f : (u - 16 / 116) / 7.787;
  }, l = i(s) * 95.047, d = i(a) * 100, c = i(o) * 108.883;
  return { X: l, Y: d, Z: c };
}
function eh(e, t, r) {
  e /= 100, t /= 100, r /= 100;
  let a = e * 3.2406 + t * -1.5372 + r * -0.4986, s = e * -0.9689 + t * 1.8758 + r * 0.0415, o = e * 0.0557 + t * -0.204 + r * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), s = Math.min(1, Math.max(0, i(s))), o = Math.min(1, Math.max(0, i(o))), { r: Math.round(a * 255), g: Math.round(s * 255), b: Math.round(o * 255) };
}
function th(e, t, r) {
  return `#${[e, t, r].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function nh(e, t) {
  const r = qi(e);
  if (!r) return e;
  const a = Math.min(100, Math.max(0, r.L + t)), { X: s, Y: o, Z: i } = Qp(a, r.a, r.b), l = eh(s, o, i);
  return th(l.r, l.g, l.b);
}
function rh() {
  const e = Jp(), r = [12, -12, 24, -24].map((s) => e.map((o) => nh(o, s))), a = [...e];
  return r.forEach((s) => a.push(...s)), a;
}
function ah() {
  return (!Ca || sh()) && (Ca = rh(), Ki = Yi), Ca;
}
let Ki = null;
function sh() {
  return Ki !== Yi;
}
function St(e) {
  const t = ah();
  return t[e % t.length];
}
let xn = null, Bn = null, Hn = null, zn = null;
function oh() {
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
  (!xn || !Bn || !Hn || !zn) && oh();
}
function an(e) {
  return Zr(), xn ? xn[e % xn.length] : "#212b32";
}
function ih(e) {
  return Zr(), Bn ? Bn[e] : void 0;
}
function yr(e, t) {
  return ih(e) || an(t);
}
const Ga = ["low", "moderate", "high", "critical"];
let Na = null;
function lh() {
  const e = { color: { ...Xr.color, ...Gn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, r = {};
  return Ga.forEach((a) => {
    const s = t(`color.data-viz.severity.${a}`);
    s && (r[a] = s);
  }), r;
}
function Xi() {
  return Na || (Na = lh()), Na;
}
function ch(e) {
  return Xi()[e.toLowerCase()];
}
function dh(e, t) {
  return ch(e) || Xi()[Ga[t % Ga.length]] || St(t);
}
function uh(e) {
  return Zr(), Hn ? Hn[e] : void 0;
}
function fh(e, t) {
  return uh(e) || an(t);
}
const Va = ["trust", "ambulance", "icb", "region"];
let Ta = null;
function ph() {
  const e = { color: { ...Xr.color, ...Gn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, r = {};
  return Va.forEach((a) => {
    const s = t(`color.data-viz.org-level.${a}`);
    s && (r[a] = s);
  }), r;
}
function Zi() {
  return Ta || (Ta = ph()), Ta;
}
function hh(e) {
  return Zi()[e.toLowerCase()];
}
function mh(e, t) {
  return hh(e) || Zi()[Va[t % Va.length]] || St(t);
}
function gh(e) {
  return Zr(), zn ? zn[e] : void 0;
}
function xh(e, t) {
  return gh(e) || an(t);
}
let Da = null;
const bh = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function yh(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function vh() {
  const e = { color: { ...Xr.color, ...Gn.color } }, t = (s, o = /* @__PURE__ */ new Set()) => {
    if (o.has(s)) return;
    o.add(s);
    const i = s.split(".").reduce((d, c) => d ? d[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), o) : typeof l == "string" ? l : void 0;
  }, r = {}, a = [];
  return bh.forEach((s) => {
    const o = t(`color.data-viz.region.${s}`);
    o ? r[s] = o : a.push(s);
  }), process.env.NODE_ENV !== "production" && (Object.keys(r).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), r;
}
function _h() {
  return Da || (Da = vh()), Da;
}
function wh(e) {
  return _h()[yh(e)];
}
function bn(e, t) {
  return wh(e) || St(t);
}
const Ji = Y.createContext(null), Vn = () => Y.useContext(Ji), kb = ({
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
  return /* @__PURE__ */ n.jsx(Ji.Provider, { value: c, children: t });
}, Qi = Y.createContext(null), Wt = () => Y.useContext(Qi), Sh = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: r = !1
}) => {
  const a = ln(), s = Vn(), [o, i] = Y.useState(null), l = Y.useRef(/* @__PURE__ */ new Map()), [d, c] = Y.useState([]), u = Y.useCallback(
    (R, j) => {
      l.current.set(R, j);
    },
    []
  ), f = Y.useCallback((R) => {
    l.current.delete(R);
  }, []), m = Y.useCallback(
    (R, j) => {
      if (!a) return;
      const { xScale: v, yScale: T } = a;
      let C = null, h = 1 / 0;
      l.current.forEach((I, k) => {
        I.forEach((b, S) => {
          const D = v(b.x), Q = T(b.y), O = D - R, A = Q - j, U = Math.sqrt(O * O + A * A);
          U < h && (h = U, C = {
            seriesId: k,
            index: S,
            x: b.x,
            y: b.y,
            clientX: D,
            clientY: Q
          });
        });
      }), C && h <= t ? i(C) : i(null);
    },
    [a, t]
  ), _ = Y.useCallback(() => i(null), []);
  Y.useEffect(() => {
    if (!o) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: R, yScale: j } = a, v = [];
    l.current.forEach((T, C) => {
      T.forEach((h, I) => {
        (o.x instanceof Date && h.x instanceof Date ? h.x.getTime() === o.x.getTime() : h.x === o.x) && v.push({
          seriesId: C,
          index: I,
          x: h.x,
          y: h.y,
          clientX: R(h.x),
          clientY: j(h.y)
        });
      });
    }), v.sort((T, C) => T.seriesId.localeCompare(C.seriesId)), c(v);
  }, [o, a]);
  const w = Y.useCallback(
    (R) => {
      if (!o) return;
      const j = l.current.get(o.seriesId);
      if (!j) return;
      let v = o.index + R;
      if (v < 0 || v >= j.length) {
        if (!r) return;
        v = (v + j.length) % j.length;
      }
      const T = j[v];
      if (!a) return;
      const { xScale: C, yScale: h } = a;
      i({
        seriesId: o.seriesId,
        index: v,
        x: T.x,
        y: T.y,
        clientX: C(T.x),
        clientY: h(T.y)
      });
    },
    [o, a, r]
  ), y = Y.useCallback(
    (R) => {
      let j = Array.from(l.current.keys());
      if (s && (j = j.filter((D) => !s.isHidden(D))), j.length === 0) return;
      if (!o) {
        const D = j[0], Q = l.current.get(D);
        if (!Q || !a) return;
        const { xScale: O, yScale: A } = a, U = Q[0];
        i({
          seriesId: D,
          index: 0,
          x: U.x,
          y: U.y,
          clientX: O(U.x),
          clientY: A(U.y)
        });
        return;
      }
      const v = j.indexOf(o.seriesId);
      if (v === -1) return;
      let T = v + R;
      if (T < 0 || T >= j.length) {
        if (!r) return;
        T = (T + j.length) % j.length;
      }
      const C = j[T], h = l.current.get(C);
      if (!h || !a) return;
      const I = Math.min(o.index, h.length - 1), k = h[I], { xScale: b, yScale: S } = a;
      i({
        seriesId: C,
        index: I,
        x: k.x,
        y: k.y,
        clientX: b(k.x),
        clientY: S(k.y)
      });
    },
    [o, a, r, s]
  ), p = Y.useCallback(() => {
    let R = Array.from(l.current.keys());
    if (s && (R = R.filter((I) => !s.isHidden(I))), R.length === 0) return;
    const j = o ? o.seriesId : R[0], v = l.current.get(j);
    if (!v || v.length === 0 || !a) return;
    const T = v[0], { xScale: C, yScale: h } = a;
    i({
      seriesId: j,
      index: 0,
      x: T.x,
      y: T.y,
      clientX: C(T.x),
      clientY: h(T.y)
    });
  }, [o, a, s]), g = Y.useCallback(() => {
    let R = Array.from(l.current.keys());
    if (s && (R = R.filter((k) => !s.isHidden(k))), R.length === 0) return;
    const j = o ? o.seriesId : R[0], v = l.current.get(j);
    if (!v || v.length === 0 || !a) return;
    const T = v.length - 1, C = v[T], { xScale: h, yScale: I } = a;
    i({
      seriesId: j,
      index: T,
      x: C.x,
      y: C.y,
      clientX: h(C.x),
      clientY: I(C.y)
    });
  }, [o, a, s]), M = Y.useCallback(
    () => w(1),
    [w]
  ), $ = Y.useCallback(
    () => w(-1),
    [w]
  ), N = Y.useCallback(
    () => y(1),
    [y]
  ), F = Y.useCallback(
    () => y(-1),
    [y]
  ), P = Y.useMemo(
    () => ({
      focused: o,
      setFocused: i,
      aggregated: d,
      focusNearest: m,
      clear: _,
      registerSeries: u,
      unregisterSeries: f,
      focusNextPoint: M,
      focusPrevPoint: $,
      focusNextSeries: N,
      focusPrevSeries: F,
      focusFirstPoint: p,
      focusLastPoint: g
    }),
    [
      o,
      d,
      m,
      _,
      u,
      f,
      M,
      $,
      N,
      F,
      p,
      g
    ]
  );
  return /* @__PURE__ */ n.jsx(Qi.Provider, { value: P, children: e });
}, kh = ({
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
  const { xScale: _, yScale: w } = m, p = Vn()?.isHidden(e.id) ?? !1, g = p && l === "fade";
  if (p && l === "remove")
    return null;
  const M = Wt();
  Y.useEffect(() => {
    if (!M) return;
    const j = e.data.map((v) => ({ x: i(v), y: v.y }));
    return M.registerSeries(e.id, j), () => M.unregisterSeries(e.id);
  }, [M, e.id, e.data, i]);
  const $ = Y.useMemo(
    () => Ua(
      e.data,
      (j) => _(i(j)),
      (j) => w(j.y),
      { smooth: c }
    ),
    [e.data, _, w, i, c]
  ), N = Y.useMemo(() => {
    if (!e.data.length) return "";
    const [j] = w.domain(), v = Wa().x((T) => _(i(T))).y0(() => w(j)).y1((T) => w(T.y));
    return c && v.curve(br), v(e.data) || "";
  }, [e.data, _, w, i, c]), F = f && f[t], P = e.color || F || (r === "region" ? bn(e.id, t) : St(t)), R = r === "region" ? yr(e.id, t) : an(t);
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
            d: N,
            fill: `url(#${u})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            d: $,
            fill: "none",
            stroke: P,
            strokeWidth: d,
            role: "presentation"
          }
        ),
        a && e.data.map((j, v) => {
          const T = _(i(j)), C = w(j.y), h = s ? 0 : -1, I = !g && (s && v === o || M?.focused?.seriesId === e.id && M.focused.index === v), k = () => {
            M && !g && M.setFocused({
              seriesId: e.id,
              index: v,
              x: i(j),
              y: j.y,
              clientX: T,
              clientY: C
            });
          }, b = () => {
            M && M.focused?.seriesId === e.id && M.focused.index === v && M.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: T,
              cy: C,
              r: I ? 5 : 3.5,
              stroke: I ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : R,
              strokeWidth: I ? 2 : 1,
              fill: I ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : P,
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
}, Ch = ({ polite: e = !0, format: t }) => {
  const r = Wt(), [a, s] = Y.useState(""), o = Y.useRef("");
  return Y.useEffect(() => {
    if (!r?.focused) return;
    const { focused: i, aggregated: l } = r;
    let d;
    if (l && l.length > 1) {
      const c = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      d = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      d = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : jh(i.seriesId, i.x, i.y, i.index);
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
function jh(e, t, r, a) {
  const s = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${s}, value ${r}`;
}
const Cb = () => {
  const e = Wt(), t = qt();
  if (!e || !t || !e.focused) return null;
  const { focused: r, aggregated: a } = e, { innerWidth: s, innerHeight: o } = t, i = Math.min(Math.max(r.clientX, 0), s), l = Math.min(Math.max(r.clientY, 0), o), d = i + 8, c = l - 8, u = a.length > 1, f = r.x instanceof Date ? r.x.toDateString() : String(r.x), m = u ? f : `${f} • ${r.y}`, _ = /\d+$/.exec(r.seriesId || ""), w = _ ? parseInt(_[0], 10) - 1 : 0, y = St(w >= 0 ? w : 0) || "#005eb8", p = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ n.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: p, strokeWidth: 3 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: p, strokeWidth: 1.5 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 2.5, fill: y, stroke: "#fff", strokeWidth: 0.5 }),
    u ? (() => {
      const M = a.map((R) => `${R.seriesId}: ${R.y}`), $ = [m, ...M], N = $.reduce((R, j) => Math.max(R, j.length), 0), F = Math.max(90, N * 6.2 + 16), P = 16 * $.length + 8;
      return /* @__PURE__ */ n.jsxs("g", { children: [
        /* @__PURE__ */ n.jsx("rect", { x: d, y: c - P, rx: 4, ry: 4, width: F, height: P, fill: "#212b32", opacity: 0.92 }),
        $.map((R, j) => /* @__PURE__ */ n.jsx("text", { x: d + 8, y: c - P + 6 + 16 * (j + 0.7), fill: "#fff", fontSize: 12, children: R }, j))
      ] });
    })() : /* @__PURE__ */ n.jsxs("g", { children: [
      /* @__PURE__ */ n.jsx("rect", { x: d, y: c - 24, rx: 4, ry: 4, width: Math.max(60, m.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ n.jsx("text", { x: d + 8, y: c - 8, fill: "#fff", fontSize: 12, children: m })
    ] })
  ] });
}, jb = ({
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
  const c = Vn(), u = !!(c && !a && !l && o === void 0), f = a || u, m = e || [], _ = o !== void 0, [w, y] = Y.useState(new Set(i)), p = _ ? new Set(o) : w, [g, M] = Y.useState(""), $ = (N) => {
    if (u && c) {
      const h = c.isHidden(N);
      c.toggle(N);
      const k = m.find((S) => S.id === N)?.label || N, b = d ? d(N, h, k) : `${k} ${h ? "shown" : "hidden"}`;
      M(b);
      return;
    }
    if (!f) return;
    const F = new Set(p), P = F.has(N);
    P ? F.delete(N) : F.add(N), _ || y(F);
    const R = m.filter((h) => !F.has(h.id)).map((h) => h.id), j = Array.from(F);
    l?.(R, j);
    const T = m.find((h) => h.id === N)?.label || N, C = d ? d(N, P, T) : `${T} ${P ? "shown" : "hidden"}`;
    M(C);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ n.jsx("ul", { className: `fdp-legend fdp-legend--${r}`, children: m.map((N, F) => {
      const P = N.palette || t, R = N.color || (P === "region" ? bn(N.id, F) : P === "severity" ? dh(N.id, F) : P === "org-level" ? mh(N.id, F) : St(F));
      let j = N.stroke || (P === "region" ? yr(N.id, F) : P === "severity" ? fh(N.id, F) : P === "org-level" ? xh(N.id, F) : an(F));
      if (s && j) {
        const C = j.trim().toLowerCase();
        (C === "#fff" || C === "#ffffff" || C === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(C)) && (j = "#212b32");
      }
      const v = u && c ? c.isHidden(N.id) : p.has(N.id), T = f ? {
        "aria-pressed": !v,
        "aria-label": `${N.label} (${v ? "show" : "hide"})`,
        onClick: () => $(N.id)
      } : { "aria-label": N.label };
      return /* @__PURE__ */ n.jsxs("li", { className: `fdp-legend__item${v ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: R,
              backgroundImage: N.patternDataUrl ? `url(${N.patternDataUrl})` : void 0,
              backgroundSize: N.patternDataUrl ? "auto" : void 0,
              borderColor: j
            },
            ...T
          }
        ),
        /* @__PURE__ */ n.jsx("span", { className: "fdp-legend__label", children: N.label })
      ] }, N.id);
    }) }),
    f && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: g })
  ] });
}, Nb = ({
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
  const { xScale: m, yScale: _ } = f, y = Vn()?.isHidden(e.id) ?? !1, p = y && o === "fade";
  if (y && o === "remove") return null;
  const g = Wt();
  Y.useEffect(() => {
    if (!g) return;
    const R = e.data.map((j) => ({ x: a(j), y: j.y }));
    return g.registerSeries(e.id, R), () => g.unregisterSeries(e.id);
  }, [g, e.id, e.data, a]);
  const M = u && u[t], $ = e.color || M || (r === "region" ? bn(e.id, t) : St(t)), N = Y.useMemo(() => d && d.length === e.data.length ? Ua(
    e.data,
    (R) => m(a(R)),
    (R) => {
      const j = e.data.indexOf(R);
      return _(d[j].y1);
    },
    { smooth: l }
  ) : Ua(
    e.data,
    (R) => m(a(R)),
    (R) => _(R.y),
    { smooth: l }
  ), [e.data, d, m, _, a, l]), F = Y.useMemo(() => {
    if (d && d.length === e.data.length) {
      const C = Wa().x((h) => m(a(h))).y0((h, I) => _(d[I].y0)).y1((h, I) => _(d[I].y1));
      return l && C.curve(br), C(e.data) || "";
    }
    const [R, j] = _.domain();
    let v = i;
    v < R ? v = R : v > j && (v = j);
    const T = Wa().x((C) => m(a(C))).y0(() => _(v)).y1((C) => _(C.y));
    return l && T.curve(br), T(e.data) || "";
  }, [e.data, d, m, _, a, i, l]), P = Y.useId();
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: p ? 0.25 : 1,
      "aria-hidden": p ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs("linearGradient", { id: P, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: $, stopOpacity: 0.25 }),
          /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: $, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: F,
            fill: c ? `url(#${P})` : $,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !s && /* @__PURE__ */ n.jsx("path", { d: N, fill: "none", stroke: $, strokeWidth: 1 })
      ]
    }
  );
}, Tb = ({
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
  allSeries: _,
  stacked: w,
  gapRatio: y = 0.15,
  minBarWidth: p,
  gradientFill: g = !0,
  gradientStrokeMatch: M = !0,
  opacity: $ = 1,
  fadedOpacity: N = 0.25,
  flatFillOpacity: F = 1,
  colors: P
}) => {
  const R = Math.max(0, y), j = ln(), v = qt();
  if (!j || !v) return null;
  const { xScale: T, yScale: C } = j, I = Vn()?.isHidden(e.id) ?? !1, k = I && f === "fade";
  if (I && f === "remove") return null;
  const b = Wt();
  Y.useEffect(() => {
    if (!b) return;
    const J = e.data.map((te) => ({ x: s(te), y: te.y }));
    return b.registerSeries(e.id, J), () => b.unregisterSeries(e.id);
  }, [b, e.id, e.data, s]);
  const S = typeof T.bandwidth == "function", D = S ? T.bandwidth() : void 0, Q = Y.useMemo(() => {
    if (D != null) return D;
    const J = _ && _.length ? _ : [e], te = [];
    J.forEach((B) => {
      B.data.forEach((Z) => {
        const V = T(s(Z));
        Number.isFinite(V) && te.push(V);
      });
    });
    const de = te.sort((B, Z) => B - Z);
    if (de.length <= 1) return 40;
    const x = [];
    for (let B = 1; B < de.length; B++)
      x.push(de[B] - de[B - 1]);
    return x.sort((B, Z) => B - Z), (x[Math.floor(x.length / 2)] || 40) * i;
  }, [e.data, _, T, s, i, D]), { basePerBar: O } = Y.useMemo(() => {
    if (S) {
      const de = Q, x = Math.max(
        1,
        (de - l * (r - 1)) / r
      ), E = e.barWidth ?? d;
      let B = E ? Math.min(E, de) : x;
      if (c) {
        const Z = de * Math.min(1, Math.max(0.05, u)), V = Math.max(
          1,
          (Z - l * (r - 1)) / r
        );
        B = E ? Math.min(B, V) : V;
      }
      return { basePerBar: B };
    }
    const J = e.barWidth ?? d, te = Math.max(
      1,
      (Q - l * (r - 1)) / r
    );
    if (c) {
      const de = _ && _.length ? _ : [e], x = [];
      de.forEach(
        (he) => he.data.forEach((we) => {
          const ie = T(s(we));
          Number.isFinite(ie) && x.push(ie);
        })
      ), x.sort((he, we) => he - we);
      const E = [];
      for (let he = 1; he < x.length; he++)
        E.push(x[he] - x[he - 1]);
      E.sort((he, we) => he - we);
      const Z = (E[Math.floor(E.length / 2)] || Q) * Math.min(1, Math.max(0.05, u)), V = Math.max(
        1,
        (Z - l * (r - 1)) / r
      );
      return { basePerBar: J ? Math.min(J, V) : V };
    }
    return J ? { basePerBar: Math.min(J, te) } : { basePerBar: te };
  }, [
    S,
    Q,
    l,
    r,
    d,
    e.barWidth,
    c,
    u,
    _,
    T,
    s
  ]), A = Y.useMemo(() => {
    if (S) return [];
    const J = [];
    return (_ && _.length ? _ : [e]).forEach(
      (de) => de.data.forEach((x) => {
        const E = T(s(x));
        Number.isFinite(E) && J.push(E);
      })
    ), J.sort((de, x) => de - x), Array.from(new Set(J));
  }, [S, _, e, T, s]), U = Y.useMemo(() => {
    if (S)
      return [];
    if (!A.length) return [];
    if (A.length === 1)
      return [
        { center: A[0], left: 0, right: v.innerWidth }
      ];
    const J = [];
    for (let te = 0; te < A.length; te++) {
      const de = A[te], x = te === 0 ? 0 : (A[te - 1] + de) / 2, E = te === A.length - 1 ? v.innerWidth : (de + A[te + 1]) / 2;
      J.push({
        center: de,
        left: Math.max(0, x),
        right: Math.min(v.innerWidth, E)
      });
    }
    return J;
  }, [S, A, v.innerWidth]), H = Y.useMemo(() => {
    if (S || !U.length)
      return;
    const J = Math.min(1, Math.max(0.05, i)), te = U.map((Z) => Math.max(2, Z.right - Z.left)), de = te.map(
      (Z) => Math.max(2, Math.min(Z - 1, Z * J))
    );
    let x = Math.min(...de);
    if (p)
      if (r <= 1) {
        const Z = Math.min(...te.map((V) => V - 1));
        Z >= p && x < p && (x = Math.min(Z, p));
      } else {
        const Z = Math.min(...te.map((ne) => ne - 1)), V = p * r + (r - 1) * (p * R);
        V <= Z && x < V && (x = V);
      }
    if (r <= 1)
      return p && x < p && te.every((V) => V >= p) ? { groupWidth: p, barWidth: p } : { groupWidth: x, barWidth: x };
    let E = x / (r + (r - 1) * R);
    return E < 1 && (E = 1), p && E < p && p * r + (r - 1) * (p * R) <= x && (E = p), { groupWidth: E * r + (r - 1) * (E * R), barWidth: E };
  }, [
    S,
    U,
    i,
    r,
    R,
    p
  ]), ae = P && P[t] ? P[t] : void 0, z = e.color || ae || (a === "region" ? bn(e.id, t) : St(t)), fe = a === "region" ? yr(e.id, t) : an(t), ve = M && (e.color || ae) ? z : fe, le = Number.isFinite(C(0)) ? C(0) : C.range()[0], ue = Y.useId();
  return w && w.length === e.data.length ? /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: k ? N : $,
      "aria-hidden": k ? !0 : void 0,
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
        e.data.map((J, te) => {
          const de = s(J), x = T(S ? J.x : de);
          let E, B;
          if (S)
            E = Q, B = x;
          else {
            const re = U.find(
              (ee) => Math.abs(ee.center - x) < 0.5
            );
            if (!re || !H)
              E = O, B = x - O / 2;
            else {
              const { groupWidth: ee } = H;
              E = ee;
              let L = x - ee / 2;
              L < re.left && (L = re.left), L + ee > re.right && (L = Math.max(re.left, re.right - ee)), B = L;
            }
          }
          const Z = w[te], V = C(Z.y0), ne = C(Z.y1), he = Math.min(V, ne), we = Math.abs(ne - V) || 1;
          if (!S && p && E < p) {
            const re = U.find(
              (ee) => Math.abs(ee.center - x) < 0.5
            );
            if (re) {
              const ee = Math.max(2, re.right - re.left - 1), L = Math.min(ee, p);
              L > E && (E = L, B = Math.max(
                re.left,
                Math.min(re.right - E, x - E / 2)
              ));
            }
          }
          const ie = !k && b?.focused?.seriesId === e.id && b.focused.index === te, q = () => {
            !b || k || b.setFocused({
              seriesId: e.id,
              index: te,
              x: de,
              y: Z.y1 - Z.y0,
              clientX: B + E / 2,
              clientY: he
            });
          }, G = () => {
            b?.focused?.seriesId === e.id && b.focused.index === te && b.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: B,
              y: he,
              width: E,
              height: we,
              fill: g ? `url(#${ue})` : z,
              ...g ? {} : { fillOpacity: F },
              stroke: ie ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : g && M ? z : void 0,
              strokeWidth: ie ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: k || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${Z.y1 - Z.y0}`,
              onMouseEnter: q,
              onFocus: q,
              onMouseLeave: G,
              onBlur: G
            },
            te
          );
        })
      ]
    }
  ) : /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: k ? N : $,
      "aria-hidden": k ? !0 : void 0,
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
          m === "category" && e.data.map((J, te) => {
            const x = P && P[te] || (a === "region" ? bn(String(J.x), te) : St(te)), E = `${ue}-${te}`;
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
        e.data.map((J, te) => {
          const de = s(J), x = T(S ? J.x : de);
          let E, B;
          if (S) {
            const oe = Q;
            if (r <= 1)
              B = oe, E = x;
            else {
              B = Math.max(
                1,
                oe / (r + (r - 1) * R)
              );
              const K = B * R, W = B * r + K * (r - 1);
              E = x + (oe - W) / 2 + t * (B + K);
            }
          } else {
            const oe = U.find((K) => K.center === x);
            if (!oe || !H)
              B = O, E = x - O / 2, p && B < p && (B = p, E = x - B / 2);
            else {
              const { barWidth: K } = H;
              B = K;
              const W = r > 1 ? K * R : 0, se = B * r + W * (r - 1);
              let me = x - se / 2;
              me < oe.left && (me = oe.left), me + se > oe.right && (me = Math.max(oe.left, oe.right - se)), E = me + t * (B + W);
            }
            if (p && B < p) {
              const K = U.find(
                (W) => Math.abs(W.center - x) < 0.5
              );
              if (K) {
                const W = Math.max(2, K.right - K.left - 1), se = Math.min(W, p);
                if (se > B)
                  if (r <= 1)
                    B = se, E = Math.max(
                      K.left,
                      Math.min(K.right - B, x - B / 2)
                    );
                  else {
                    const me = se * R, ce = se * r + me * (r - 1);
                    if (ce <= K.right - K.left - 1) {
                      B = se;
                      const ke = ce;
                      let je = x - ke / 2;
                      je < K.left && (je = K.left), je + ke > K.right && (je = Math.max(
                        K.left,
                        K.right - ke
                      )), E = je + t * (B + me);
                    }
                  }
              }
            }
          }
          const Z = E + B / 2, V = C(J.y), ne = Math.min(le, V), he = Math.abs(le - V), we = !k && b?.focused?.seriesId === e.id && b.focused.index === te, ie = () => {
            !b || k || b.setFocused({
              seriesId: e.id,
              index: te,
              x: de,
              y: J.y,
              clientX: Z,
              clientY: V
            });
          }, q = () => {
            b?.focused?.seriesId === e.id && b.focused.index === te && b.clear();
          }, G = m === "category" && P ? P[te] : void 0, re = m === "category" ? G || (a === "region" ? bn(String(J.x), te) : St(te)) : z, ee = m === "category" ? `${ue}-${te}` : ue, L = g && M ? re : m === "category" ? a === "region" ? yr(String(J.x), te) : an(te) : ve, X = we ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : L || re;
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: E,
              y: ne,
              width: B,
              height: he || 1,
              fill: g ? `url(#${ee})` : re,
              ...g ? {} : { fillOpacity: F },
              stroke: X,
              strokeWidth: we ? 2 : 1,
              className: "fdp-bar",
              tabIndex: k || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${J.y}`,
              onMouseEnter: ie,
              onFocus: ie,
              onMouseLeave: q,
              onBlur: q
            },
            te
          );
        })
      ]
    }
  );
}, Db = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  paddingInner: a = 0.1,
  paddingOuter: s = 0.05,
  children: o,
  yTickCount: i = 5
}) => {
  const l = qt(), d = t ?? l?.innerWidth ?? 0, c = r ?? l?.innerHeight ?? 0, u = Y.useMemo(() => e.flatMap((p) => p.data), [e]), f = Y.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    return u.forEach((g) => p.add(g.x)), Array.from(p);
  }, [u]), m = Y.useMemo(
    () => Math.max(0, ...u.map((p) => p.y)),
    [u]
  ), _ = Y.useMemo(
    () => si().domain(f).range([0, d]).paddingInner(a).paddingOuter(s),
    [f, d, a, s]
  ), w = Y.useMemo(
    () => dr().domain([0, m]).nice().range([c, 0]),
    [m, c]
  ), y = Y.useMemo(
    () => ({
      xScale: _,
      yScale: w,
      getXTicks: () => f,
      getYTicks: (p = i) => w.ticks(p)
    }),
    [_, w, f, i]
  );
  return /* @__PURE__ */ n.jsx($s.Provider, { value: y, children: o });
}, $b = ({
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
      className: gr("fdp-chart fdp-chart--noscript", s),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": gr(u, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ n.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ n.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ n.jsx("p", { id: u, className: "fdp-chart__description", children: t }),
        !m && /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ n.jsx("noscript", { children: /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ n.jsx(Ot, { ...a }) }) }),
          /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ n.jsx(Ot, { ...a }) })
        ] }),
        r && /* @__PURE__ */ n.jsx("figcaption", { className: "fdp-chart__caption", children: r && /* @__PURE__ */ n.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          r
        ] }) })
      ]
    }
  );
}, Ib = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: r = 0, children: a }) => {
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
      if (typeof window > "u") return;
      const l = window.setTimeout(i, r);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, r]), /* @__PURE__ */ n.jsx("div", { ref: s, children: a });
}, Mb = ({
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
  id: _,
  announceDelta: w = !0
}) => {
  const y = Y.useId(), p = _ || y, g = `${p}-label`, M = `${p}-value`, $ = `${p}-delta`, N = typeof t == "number" && !Number.isNaN(t), F = c ? "—" : u ? "" : N ? f ? f(t) : t.toLocaleString() : t;
  let P, R = "", j = "";
  if (a && !c && !u) {
    P = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const v = Math.abs(a.value), T = P === "up" ? `+${v}` : P === "down" ? `-${v}` : "0", C = a.isPercent ? "%" : "";
    if (R = `${T}${C}`, a.ariaLabel)
      j = a.ariaLabel;
    else {
      const h = a.invert ? P === "down" : P === "up";
      j = `${P === "neutral" ? "no change" : P === "up" ? "up" : "down"} ${v}${C}${P === "neutral" ? "" : h ? " (improvement)" : " (worse)"}`;
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
            /* @__PURE__ */ n.jsx("div", { id: M, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : u ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: u }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__number", children: F }),
              r && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__unit", children: r })
            ] }) }),
            i && !c && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ n.jsxs(
            "div",
            {
              id: $,
              "aria-label": j,
              className: gr(
                "fdp-metric-card__delta",
                P && `fdp-metric-card__delta--${P}`
              ),
              children: [
                /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-value", children: R }),
                a.period && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          d && d.length > 0 && !c && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        w && a && !a.ariaLabel && !c && !u && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: j })
      ] })
    }
  );
};
var jt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(jt || {}), Ne = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Ne || {}), Ce = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(Ce || {}), ot = /* @__PURE__ */ ((e) => (e.SinglePoint = "single_point", e.TwoSigma = "two_sigma", e.Shift = "shift", e.Trend = "trend", e))(ot || {});
const Is = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
], Ho = Is.reduce(
  (e, t, r) => (e[t] = r + 1, e),
  {}
), Nh = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, Th = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, vr = Is.reduce(
  (e, t, r) => (e[t] = {
    id: t,
    rank: r + 1,
    label: Nh[t],
    category: Th[t],
    participatesInRanking: !0
  }, e),
  {}
);
Is.map(
  (e) => vr[e]
);
var Ze = /* @__PURE__ */ ((e) => (e.Up = "up", e.Down = "down", e))(Ze || {}), lt = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(lt || {}), qe = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(qe || {}), pt = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(pt || {}), tr = /* @__PURE__ */ ((e) => (e.Legacy = "legacy", e.DirectionalFirst = "directional_first", e))(tr || {}), el = /* @__PURE__ */ ((e) => (e.None = "none", e.SqlRankingV26a = "sql_ranking_v2_6a", e))(el || {}), xt = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(xt || {}), Ms = /* @__PURE__ */ ((e) => (e.Sql = "sql", e.Conflict = "conflict", e))(Ms || {}), Ln = /* @__PURE__ */ ((e) => (e.ImprovementValueBeforePruning = "improvementValueBeforePruning", e.ConcernValueBeforePruning = "concernValueBeforePruning", e))(Ln || {});
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
function Jr(e) {
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
function Qr(e) {
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
function Dh(e, t, r) {
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
function $h(e) {
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
  const d = Wt(), c = qt(), [u, f] = Y.useState(null), [m, _] = Y.useState(!1), w = Y.useRef(null);
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
  const y = d && (d.focused || (m ? u : null) || u), [p, g] = Y.useState(!1);
  Y.useEffect(() => {
    const ie = requestAnimationFrame(() => g(!0));
    return () => cancelAnimationFrame(ie);
  }, [y?.index]);
  const M = c?.innerWidth ?? 0, $ = c?.innerHeight ?? 0, N = y ? Math.min(Math.max(y.clientX, 0), M) : 0, F = y ? Math.min(Math.max(y.clientY, 0), $) : 0, R = c.ref?.current;
  if (!y)
    return null;
  const j = e?.[y.index], T = Jr(j).map((ie) => ({ id: ie, label: yn[ie].tooltip })), C = y.x instanceof Date ? y.x : new Date(y.x), h = o ? o(C) : C.toDateString(), I = s ? `${s}` : "", k = a || I ? `${y.y}${I ? "" + I : " "}${a ? " " + a : ""}` : `${y.y}`, b = Qr(j?.variationIcon), S = tl(j?.assuranceIcon), D = Dh(
    t.mean ?? null,
    t.sigma,
    y.y
  ), Q = r ? r(y.index, { x: y.x, y: y.y }) : void 0, O = b || S || D, A = j?.specialCauseTrendUp || j?.specialCauseTrendDown, U = j?.variationIcon === Ce.Neither && A, H = l && U ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, ae = T.length > 0, z = j?.primeDirection, fe = j?.primeRuleId, ve = i && j?.variationIcon === Ce.Neither && ae, le = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", ue = nl(j?.variationIcon), J = 6.2, de = [
    Q || "",
    `${h} • ${k}`
  ].filter(Boolean).reduce(
    (ie, q) => Math.max(ie, q.length * J + 32),
    0
  ), x = 200, E = 440, B = Math.min(E, Math.max(x, de));
  let Z = N + 12, ne = (c.margin?.top ?? 0) + F + 16;
  Z + B > M && (Z = N - -60 - B), Z < 0 && (Z = Math.max(0, M - B));
  const he = y ? `spc-tooltip-${y.index}` : "spc-tooltip", we = R ? mc(
    /* @__PURE__ */ n.jsx(
      "div",
      {
        id: he,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (p ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: Z,
          top: ne,
          width: B,
          maxWidth: E,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": p ? "false" : "true",
        "data-floating": !0,
        "data-placement": Z + B + 12 > M ? "left" : "right",
        onPointerEnter: () => {
          _(!0), w.current && (cancelAnimationFrame(w.current), w.current = null);
        },
        onPointerLeave: () => {
          if (_(!1), !d?.focused) {
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
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: k })
          ] }),
          O && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
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
          D && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ n.jsx(
              He,
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
          H && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: H })
          ] }),
          ae && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: T.map(({ id: ie, label: q }) => {
                  const G = String(ie), ee = G === lt.TrendIncreasing || G === lt.TrendDecreasing ? "fdp-spc-tag--trend" : ve ? "fdp-spc-tag--no-judgement" : b ? b.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : b.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ n.jsx(
                    He,
                    {
                      text: q,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${ee}`,
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
    R
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
            cx: N,
            cy: F,
            r: 7,
            fill: "none",
            stroke: le,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: N,
            cy: F,
            r: 5,
            fill: "#000",
            stroke: le,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: N,
            cy: F,
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
let Ya = null;
try {
  Ya = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const ht = (e, t) => {
  if (!Ya) return t;
  const r = e.split(".");
  let a = Ya;
  for (const o of r) {
    if (a == null) break;
    a = a[o];
  }
  const s = a;
  return s == null ? t : typeof s == "string" || typeof s == "number" ? String(s) : s.$value != null ? String(s.$value) : s.value != null ? String(s.value) : t;
}, al = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: ht("gradient.stop.start-opacity", "0.12"),
  mid: ht("gradient.stop.mid-opacity", "0.03"),
  end: ht("gradient.stop.end-opacity", "0"),
  triStart: ht(
    "gradient.stop.triangle-start-opacity",
    ht("gradient.stop.start-opacity", "0.12")
  ),
  triMid: ht(
    "gradient.stop.triangle-mid-opacity",
    ht("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: ht(
    "gradient.stop.triangle-end-opacity",
    ht("gradient.stop.end-opacity", "0")
  )
});
var Yt = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(Yt || {});
const Ih = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, Mh = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var Xe = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Xe || {}), Te = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Te || {}), ct = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(ct || {}), Pe = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Pe || {});
const Lh = (e) => {
  const t = e.replace("#", ""), r = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, s = parseInt(t.slice(4, 6), 16) / 255, o = [r, a, s].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2] < 0.55 ? "#ffffff" : "#212b32";
}, Ls = {
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
Object.values(Ls).forEach((e) => {
  e.text || (e.text = Lh(e.hex));
});
const Ps = (e) => Ls[e], ea = (e) => Ls[e].judgement || "none", zo = {
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
function Ph(e, t) {
  let r;
  return e === "common_cause" ? r = zo.common : r = zo.special[t === "lower" ? "lower" : "higher"], r.map((a) => ({ ...a }));
}
var nt = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(nt || {}), en = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(en || {}), On = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(On || {});
const sl = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === Ne.Up ? Xe.HigherIsBetter : i.improvementDirection === Ne.Down ? Xe.LowerIsBetter : Xe.ContextDependent : i.polarity && (l = i.polarity);
    let d;
    switch (i.variationIcon) {
      case Ce.Improvement:
        d = Pe.SpecialCauseImproving;
        break;
      case Ce.Concern:
        d = Pe.SpecialCauseDeteriorating;
        break;
      case Ce.Neither:
        d = i.specialCauseNeutral ? Pe.SpecialCauseNoJudgement : Pe.CommonCause;
        break;
      case Ce.Suppressed:
      default:
        d = Pe.SpecialCauseNoJudgement;
        break;
    }
    let c = i.trend;
    return c || (d === Pe.SpecialCauseImproving ? c = l === Xe.LowerIsBetter ? Te.Lower : Te.Higher : d === Pe.SpecialCauseDeteriorating ? c = l === Xe.LowerIsBetter ? Te.Higher : Te.Lower : d === Pe.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? c = Te.Higher : i.lowSideSignal && !i.highSideSignal ? c = Te.Lower : c = Te.Higher : c = Te.Higher), { state: d, direction: c, polarity: l ?? Xe.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Pe.SpecialCauseImproving || i.state === Pe.SpecialCauseDeteriorating) && i.polarity && (i.state === Pe.SpecialCauseImproving ? l = i.polarity === Xe.LowerIsBetter ? Te.Lower : Te.Higher : l = i.polarity === Xe.LowerIsBetter ? Te.Higher : Te.Lower), l || (i.state === Pe.SpecialCauseImproving ? l = Te.Higher : i.state === Pe.SpecialCauseDeteriorating ? l = Te.Lower : l = Te.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? Xe.ContextDependent
    };
  }
  const r = e;
  t();
  const s = {
    [ct.Improving]: Pe.SpecialCauseImproving,
    [ct.Deteriorating]: Pe.SpecialCauseDeteriorating,
    [ct.No_Judgement]: Pe.SpecialCauseNoJudgement,
    [ct.None]: Pe.CommonCause
  }[r.judgement];
  let o;
  return r.judgement === ct.Improving ? o = r.polarity === Xe.LowerIsBetter ? Te.Lower : Te.Higher : r.judgement === ct.Deteriorating ? o = r.polarity === Xe.LowerIsBetter ? Te.Higher : Te.Lower : o = r.trend ?? Te.Higher, { state: s, direction: o, polarity: r.polarity };
};
function Fh(e, t) {
  const { state: r, direction: a, polarity: s } = sl(e), o = ea(r), i = a === Te.Higher ? "above" : "below", l = a === Te.Higher ? "upwards" : "downwards", d = (() => {
    switch (s) {
      case Xe.HigherIsBetter:
        return "For this measure, higher values are better.";
      case Xe.LowerIsBetter:
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
const $a = (e, t, r, a, s, o) => /* @__PURE__ */ n.jsxs("defs", { children: [
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
] }), ta = ({
  data: e,
  size: t = 44,
  ariaLabel: r,
  showLetter: a = !0,
  dropShadow: s = !0,
  gradientWash: o = !1,
  variant: i = en.Classic,
  runLength: l = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: d = On.Polarity,
  letterOverride: c,
  ...u
}) => {
  const f = nr(), m = nr(), {
    start: _,
    mid: w,
    end: y,
    triStart: p,
    triMid: g,
    triEnd: M
  } = al(), { state: $, direction: N, polarity: F } = Me(
    () => sl(e),
    [e]
  ), P = Me(() => Ps($), [$]), R = Me(() => ea($), [$]), j = R === ct.Improving || R === ct.Deteriorating;
  let v = "";
  a && j && (d === On.Polarity ? F === Xe.HigherIsBetter ? v = "H" : F === Xe.LowerIsBetter ? v = "L" : v = "" : v = N === Te.Higher ? "H" : "L"), c !== void 0 && (v = c);
  const T = $ !== Pe.CommonCause, C = $ === Pe.SpecialCauseNoJudgement, h = ht("common-cause", "#A6A6A6"), I = T ? P.hex : h, k = Me(
    () => Ph($, N),
    [$, N]
  ), b = r || `${P.label}${v ? N === Te.Higher ? " – Higher" : " – Lower" : ""}`, S = Fh(
    e
  );
  if (i === en.TriangleWithRun) {
    const U = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], H = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let ae = null;
    $ === Pe.SpecialCauseImproving || $ === Pe.SpecialCauseDeteriorating ? ae = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (N === Te.Higher ? U : H).map((E) => E.join(",")).join(" "),
        fill: P.hex,
        stroke: P.hex,
        strokeWidth: 6,
        transform: N === Te.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : $ === Pe.SpecialCauseNoJudgement && (ae = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: N === Te.Higher ? U.map((E) => E.join(",")).join(" ") : H.map((E) => E.join(",")).join(" "),
        fill: P.hex,
        stroke: P.hex,
        strokeWidth: 6,
        transform: N === Te.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const z = Math.max(0, Math.min(5, Math.floor(l || 0))), fe = $ === Pe.CommonCause ? 160 : N === Te.Higher ? 220 : 70, ve = 10, le = 26, ue = 150 - 2 * le, J = $ === Pe.SpecialCauseImproving ? ht("improvement", "#00B0F0") : $ === Pe.SpecialCauseDeteriorating ? ht("concern", "#E46C0A") : h, te = Array.from({ length: 5 }).map((E, B) => {
      const V = ($ === Pe.SpecialCauseImproving || $ === Pe.SpecialCauseDeteriorating) && B >= 5 - z ? J : h;
      return /* @__PURE__ */ n.jsx(
        "circle",
        {
          cx: ue + B * le,
          cy: fe,
          r: ve,
          fill: V,
          stroke: V,
          strokeWidth: 1
        },
        B
      );
    }), de = $a(
      P.hex,
      f,
      m,
      s,
      o,
      [
        { offset: "0%", opacity: p },
        { offset: "75%", opacity: g },
        { offset: "100%", opacity: M }
      ]
    ), x = $ === Pe.CommonCause || N === Te.Higher ? "translate(0,-10)" : "translate(0,25)";
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
              stroke: P.hex,
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
            v && /* @__PURE__ */ n.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: N === Te.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: v
              }
            ),
            te
          ] })
        ]
      }
    );
  }
  if (i === en.Triangle) {
    const U = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], H = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], ae = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let z = null;
    $ === Pe.SpecialCauseImproving || $ === Pe.SpecialCauseDeteriorating ? z = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (N === Te.Higher ? U : H).map((ve) => ve.join(",")).join(" "),
        fill: P.hex,
        stroke: P.hex,
        strokeWidth: 8,
        transform: N === Te.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : $ === Pe.SpecialCauseNoJudgement ? z = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: N === Te.Higher ? U.map((ve) => ve.join(",")).join(" ") : H.map((ve) => ve.join(",")).join(" "),
        fill: P.hex,
        stroke: P.hex,
        strokeWidth: 8,
        transform: N === Te.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : $ === Pe.CommonCause && (z = /* @__PURE__ */ n.jsx(
      "line",
      {
        x1: ae[0][0],
        y1: ae[0][1],
        x2: ae[1][0],
        y2: ae[1][1],
        stroke: P.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const fe = $a(
      P.hex,
      f,
      m,
      s,
      o,
      [
        { offset: "0%", opacity: p },
        { offset: "65%", opacity: g },
        { offset: "100%", opacity: M }
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
              stroke: P.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          z,
          v && ($ === Pe.SpecialCauseImproving || $ === Pe.SpecialCauseDeteriorating) && /* @__PURE__ */ n.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: N === Te.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: v
            }
          )
        ]
      }
    );
  }
  const D = $a(
    P.hex,
    f,
    m,
    s,
    o,
    [
      { offset: "0%", opacity: _ },
      { offset: "65%", opacity: w },
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
      "aria-description": S,
      ...u,
      children: [
        D,
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
            stroke: P.hex,
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
            fill: P.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ n.jsx("tspan", { x: "120", y: N === Te.Lower ? "340" : "155", children: v })
          }
        ),
        C ? /* @__PURE__ */ n.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: P.hex,
            ...N === Te.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
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
              d: `M ${k.map((Q) => `${Q.cx} ${Q.cy}`).join(" L ")}`
            }
          ),
          k.map((Q, O) => {
            const U = O >= k.length - 2 && T ? I : h, H = U;
            return /* @__PURE__ */ n.jsx(
              "circle",
              {
                stroke: H,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: U,
                cx: Q.cx,
                cy: Q.cy,
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
ta.displayName = "SPCVariationIcon";
const na = ({
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
  const c = nr(), u = nr(), { start: f, mid: m, end: _ } = al(), w = s || Ih[e], y = (i || Mh[e]).slice(0, 2), p = r || `Assurance ${e}`;
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
            /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(_) })
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
            children: /* @__PURE__ */ n.jsx("tspan", { x: 60, y: 184, children: y })
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
na.displayName = "SPCAssuranceIcon";
const _e = (e) => typeof e == "number" && Number.isFinite(e), Eh = (e) => e.reduce((t, r) => t + r, 0), kt = (e) => e.length ? Eh(e) / e.length : NaN;
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
function Rh(e, t) {
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
const Ah = 0.2777, Bh = 3.6, Hh = (e) => _e(e) && e >= 0 ? Math.pow(e, Ah) : null, Xt = (e) => _e(e) && e >= 0 ? Math.pow(e, Bh) : null;
function zh(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
const fn = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function Oh(e) {
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
  const t = 1 / (e + 1), r = (u) => zh(u, t) - 1, a = r(0.5), s = Math.max(0, r(fn.three.low)), o = r(fn.three.high), i = Math.max(0, r(fn.one.low)), l = r(fn.one.high), d = Math.max(0, r(fn.two.low)), c = r(fn.two.high);
  return { cl: a, lcl: s, ucl: o, oneLow: i, oneHigh: l, twoLow: d, twoHigh: c };
}
function Wh(e, t, r) {
  const a = e.map((j) => _e(j) ? Hh(j) : null), s = ol(a, t), { mrMean: o } = il(s, !!r), i = a.filter((j, v) => !t[v] && _e(j)), l = i.length ? kt(i) : NaN;
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
  const d = 2.66, c = 2 / 3 * d, u = 1 / 3 * d, f = l + d * o, m = l - d * o, _ = l + c * o, w = l - c * o, y = l + u * o, p = l - u * o, g = Xt(l), M = Xt(f), $ = m <= 0 ? null : Xt(m), N = Xt(y), F = p <= 0 ? null : Xt(p), P = Xt(_), R = w <= 0 ? null : Xt(w);
  return {
    center: g ?? null,
    upperProcessLimit: M ?? null,
    lowerProcessLimit: $ ?? null,
    upperTwoSigma: P ?? null,
    lowerTwoSigma: R ?? null,
    upperOneSigma: N ?? null,
    lowerOneSigma: F ?? null,
    mr: s,
    mrMean: o,
    mrUcl: _e(o) ? 3.267 * o : null
  };
}
function Uh(e) {
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
function Gh(e, t) {
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
  let _ = 0;
  for (let w = 0; w < e.length; w++) {
    const y = e[w];
    w > 0 && e[w - 1].partitionId !== y.partitionId && (_ = w);
    const p = w > 0 && i(w - 1), g = w > 0 && l(w - 1), M = w > 0 && d(w - 1), $ = w > 0 && c(w - 1), N = w > 0 && u(w - 1), F = w > 0 && f(w - 1), P = i(w), R = l(w), j = d(w), v = c(w), T = u(w), C = f(w), h = [];
    P && !p && h.push({ reason: pt.Shift, index: w }), R && !g && h.push({ reason: pt.Shift, index: w }), j && !M && h.push({ reason: pt.Trend, index: w }), v && !$ && h.push({ reason: pt.Trend, index: w }), T && !N && h.push({ reason: pt.Point, index: w }), C && !F && h.push({ reason: pt.Point, index: w });
    for (const I of h) {
      if (I.index - _ < a) continue;
      const k = Math.max(0, I.index - r), b = I.index - 1;
      if (b - k + 1 < r) continue;
      const S = I.index, D = I.index + r - 1;
      if (D >= e.length) continue;
      const Q = e.slice(k, b + 1).map((x) => x.value).filter(
        (x) => typeof x == "number" && Number.isFinite(x)
      ), O = e.slice(S, D + 1).map((x) => x.value).filter(
        (x) => typeof x == "number" && Number.isFinite(x)
      );
      if (Q.length < r || O.length < r) continue;
      const A = e[I.index];
      let U = null;
      if (typeof A.upperProcessLimit == "number" && typeof A.mean == "number") {
        const x = A.upperProcessLimit - A.mean;
        x > 0 && (U = x / 3);
      }
      if (!U || U <= 0) continue;
      const H = kt(Q), ae = kt(O), z = ae - H;
      if (Math.abs(z) < s * U) continue;
      const ve = e.slice(S, D + 1).filter(
        (x) => x.variationIcon === Ce.Concern
      ).length;
      if (ve > 1) continue;
      const le = (x) => {
        const E = kt(x);
        return x.length ? x.reduce((B, Z) => B + (Z - E) * (Z - E), 0) / x.length : 0;
      }, ue = le(Q), J = le(O);
      let te = I.reason === pt.Shift ? 90 : I.reason === pt.Trend ? 70 : 60;
      if (J < ue && (te += 10), te -= ve * 15, te < o) continue;
      const de = m.find((x) => x.index === I.index);
      if (de) {
        const x = (E) => E === pt.Shift ? 3 : E === pt.Trend ? 2 : 1;
        (x(I.reason) > x(de.reason) || te > de.score) && (de.reason = I.reason, de.score = te, de.deltaMean = z, de.oldMean = H, de.newMean = ae, de.window = [S, D]);
      } else
        m.push({
          index: I.index,
          reason: I.reason,
          score: te,
          deltaMean: z,
          oldMean: H,
          newMean: ae,
          window: [S, D]
        });
    }
  }
  return m.sort((w, y) => w.index - y.index), m;
}
function Ia() {
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
function Vh(e) {
  const t = [], r = [];
  e.specialCauseSinglePointUp && t.push(ot.SinglePoint), e.specialCauseSinglePointDown && r.push(ot.SinglePoint), e.specialCauseTwoOfThreeUp && t.push(ot.TwoSigma), e.specialCauseTwoOfThreeDown && r.push(ot.TwoSigma), e.specialCauseShiftUp && t.push(ot.Shift), e.specialCauseShiftDown && r.push(ot.Shift), e.specialCauseTrendUp && t.push(ot.Trend), e.specialCauseTrendDown && r.push(ot.Trend);
  const a = t.reduce((o, i) => Math.max(o, vr[i].rank), 0), s = r.reduce((o, i) => Math.max(o, vr[i].rank), 0);
  return { upRules: t, downRules: r, upMax: a, downMax: s, hasUp: t.length > 0, hasDown: r.length > 0 };
}
function Yh(e) {
  const t = [];
  let r = [];
  for (const a of e)
    a.baseline && r.length && (t.push(r), r = []), r.push(a);
  return r.length && t.push(r), t;
}
function qh(e, t, r) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const s = e.map((u, f) => ({ idx: f, value: u.value })).filter((u) => _e(u.value));
  if (s.length < a * 2) return;
  const o = r === Ne.Up || r === Ne.Neither, i = r === Ne.Down;
  function l(u, f) {
    const m = s.slice(u, f).map((_) => _.value);
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
    const f = u - a, m = l(f, u), _ = l(u, u + a);
    if (!_e(m) || !_e(_)) continue;
    const y = (_ - m) / d;
    if (!(o ? y >= c : i ? -y >= c : Math.abs(y) >= c)) continue;
    const g = s.slice(u, u + a).map((N) => N.value);
    if (!(o ? g.every((N) => N > m) : i ? g.every((N) => N < m) : g.every((N) => o ? N > m : N < m))) continue;
    const $ = s[u].idx;
    e[$].baseline || (e[$].baseline = !0);
    return;
  }
}
function dl(e) {
  if (!e) return {};
  const t = e, r = e, a = r.rules ?? {}, s = r.precedence ?? {}, o = r.thresholds ?? {}, i = r.warnings ?? {}, l = r.rareEvent ?? {}, d = r.capability ?? {}, c = r.grace ?? {}, u = r.baselineSuggest ?? {}, f = r.autoRecalc ?? {}, m = c.emergingEnabled ?? r.emergingGraceEnabled ?? t.emergingGraceEnabled ?? t.emergingDirectionGrace, _ = a.collapseWeakerClusterRules ?? r.collapseWeakerClusterRules ?? t.collapseWeakerClusterRules ?? t.collapseClusterRules;
  if (Ia()) {
    if (t.emergingDirectionGrace !== void 0)
      throw new Error("[spc][phase4] emergingDirectionGrace is no longer supported. Use settings.grace.emergingEnabled.");
    if (t.collapseClusterRules !== void 0)
      throw new Error("[spc][phase4] collapseClusterRules is no longer supported. Use settings.rules.collapseWeakerClusterRules.");
  }
  const w = globalThis;
  !Ia() && t.emergingDirectionGrace !== void 0 && r.emergingGraceEnabled === void 0 && c.emergingEnabled === void 0 && !w.__spc_warn_emergingDirectionGrace && (w.__spc_warn_emergingDirectionGrace = !0, console.warn("[spc] emergingDirectionGrace is deprecated; use grace.emergingEnabled")), !Ia() && t.collapseClusterRules !== void 0 && a.collapseWeakerClusterRules === void 0 && r.collapseWeakerClusterRules === void 0 && !w.__spc_warn_collapseClusterRules && (w.__spc_warn_collapseClusterRules = !0, console.warn("[spc] collapseClusterRules is deprecated; use rules.collapseWeakerClusterRules"));
  const y = (M) => {
    const $ = {};
    for (const N of Object.keys(M)) {
      const F = M[N];
      F !== void 0 && ($[N] = F);
    }
    return $;
  }, p = y({
    // Rare event / MR
    excludeMovingRangeOutliers: l.excludeMovingRangeOutliers ?? t.excludeMovingRangeOutliers,
    // Rules
    specialCauseShiftPoints: a.shiftPoints ?? t.specialCauseShiftPoints,
    specialCauseTrendPoints: a.trendPoints ?? t.specialCauseTrendPoints,
    enableFourOfFiveRule: a.fourOfFiveEnabled ?? t.enableFourOfFiveRule,
    enableFifteenInInnerThirdRule: a.fifteenInnerThirdEnabled ?? t.enableFifteenInInnerThirdRule,
    collapseWeakerClusterRules: _ ?? t.collapseWeakerClusterRules,
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
  }), g = { ...p, ...y(t) };
  if (m !== void 0 && (g.emergingGraceEnabled = m, g.grace = { ...g.grace, emergingEnabled: m }), p.collapseWeakerClusterRules !== void 0) {
    const M = p.collapseWeakerClusterRules;
    g.collapseWeakerClusterRules = M, g.rules = { ...g.rules, collapseWeakerClusterRules: M };
  }
  return y(g);
}
function Fs(e) {
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
    value: _e(p.value) ? p.value : null,
    ghost: !!p.ghost,
    baseline: !!p.baseline,
    target: _e(p.target) ? p.target : null
  }));
  if (o?.autoRecalculateAfterShift)
    try {
      qh(l, o, r);
    } catch {
    }
  const d = Yh(l), c = [], u = [], m = l.filter(
    (p) => !p.ghost && _e(p.value)
  ).length >= (i.minimumPoints ?? 13);
  let _ = 0;
  const w = {};
  for (const p of d) {
    _++;
    const g = p.map((h) => h.value), M = p.map((h) => h.ghost);
    let $ = new Array(g.length).fill(null), N = NaN, F = NaN, P = NaN, R = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      $ = ol(g, M);
      const h = g.filter(
        (k, b) => !M[b] && _e(k)
      );
      N = h.length ? kt(h) : NaN;
      const I = il(
        $,
        !!i.excludeMovingRangeOutliers
      );
      F = I.mrMean, P = I.mrUcl, R = Rh(N, F);
    } else if (t === "T") {
      const h = Wh(
        g,
        M,
        !!i.excludeMovingRangeOutliers
      );
      $ = h.mr, F = h.mrMean ?? NaN, P = h.mrUcl ?? NaN, N = h.center ?? NaN, R = {
        upperProcessLimit: h.upperProcessLimit,
        lowerProcessLimit: h.lowerProcessLimit,
        upperTwoSigma: h.upperTwoSigma,
        lowerTwoSigma: h.lowerTwoSigma,
        upperOneSigma: h.upperOneSigma,
        lowerOneSigma: h.lowerOneSigma
      };
    } else if (t === "G") {
      const h = g.filter(
        (b, S) => !M[S] && _e(b)
      ), I = h.length ? kt(h) : NaN, k = Oh(I);
      N = k.cl ?? NaN, R = {
        upperProcessLimit: k.ucl,
        lowerProcessLimit: k.lcl,
        upperTwoSigma: k.twoHigh,
        lowerTwoSigma: k.twoLow,
        upperOneSigma: k.oneHigh,
        lowerOneSigma: k.oneLow
      }, $ = new Array(g.length).fill(null), F = NaN, P = NaN;
    } else
      u.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const j = p.map((h, I) => {
      const k = !h.ghost && _e(h.value) ? g.slice(0, I + 1).filter((Q, O) => !M[O] && _e(Q)).length : 0, b = m, S = b ? R : {
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
        partitionId: _,
        pointRank: k,
        mean: b && _e(N) ? N : null,
        mr: _e($[I]) ? $[I] : null,
        mrMean: b && _e(F) ? F : null,
        mrUcl: b && _e(P) ? P : null,
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
        upperBaseline: b && _e(N) ? N : null,
        lowerBaseline: b && _e(N) ? N : null,
        movingRangeHighPointValue: b && _e(P) ? P : null,
        ghostValue: h.ghost && _e(h.value) ? h.value : null,
        ghostFlag: !!h.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    w[_] = j.filter(
      (h) => !h.ghost && _e(h.value)
    ).length;
    const v = i.specialCauseShiftPoints ?? 6, T = i.specialCauseTrendPoints ?? 6, C = [];
    for (let h = 0; h < j.length; h++) {
      const I = j[h], k = I.value;
      if (!I.ghost && _e(k) && C.push(h), !(_e(I.mean) && _e(I.upperProcessLimit) && _e(I.lowerProcessLimit)) || I.ghost || !_e(k)) {
        c.push(I);
        continue;
      }
      I.specialCauseSinglePointUp = _e(I.upperProcessLimit) ? k > I.upperProcessLimit : !1, I.specialCauseSinglePointDown = _e(I.lowerProcessLimit) ? k < I.lowerProcessLimit : !1, c.push(I);
    }
    if (C.length) {
      const h = (b) => j[b];
      let I = [], k = [];
      for (const b of C) {
        const S = h(b);
        if (!_e(S.mean) || !_e(S.value)) {
          I = [], k = [];
          continue;
        }
        if (S.value > S.mean ? (I.push(b), k = []) : S.value < S.mean ? (k.push(b), I = []) : (I = [], k = []), I.length >= v)
          for (const D of I) {
            const Q = h(D);
            Q.specialCauseShiftUp = !0;
          }
        if (k.length >= v)
          for (const D of k) {
            const Q = h(D);
            Q.specialCauseShiftDown = !0;
          }
      }
      for (let b = 0; b <= C.length - 3; b++) {
        const D = C.slice(b, b + 3).map(h);
        if (!D.every((le) => _e(le.mean) && _e(le.value))) continue;
        const Q = D[0].mean, O = D.every((le) => le.value > Q), A = D.every((le) => le.value < Q);
        if (!O && !A) continue;
        const U = D[0].upperTwoSigma ?? 1 / 0, H = D[0].lowerTwoSigma ?? -1 / 0, ae = D[0].upperProcessLimit ?? 1 / 0, z = D[0].lowerProcessLimit ?? -1 / 0, fe = D.filter((le) => le.value > U && le.value <= ae), ve = D.filter((le) => le.value < H && le.value >= z);
        if (O && fe.length >= 2)
          for (const le of fe)
            le.specialCauseTwoOfThreeUp = !0;
        if (A && ve.length >= 2)
          for (const le of ve)
            le.specialCauseTwoOfThreeDown = !0;
      }
      if (i.enableFourOfFiveRule)
        for (let b = 0; b <= C.length - 5; b++) {
          const D = C.slice(b, b + 5).map(h);
          if (!D.every((ae) => _e(ae.mean) && _e(ae.value))) continue;
          const Q = D[0].mean;
          if (!D.every((ae) => ae.value > Q) && !D.every((ae) => ae.value < Q)) continue;
          const O = D[0].upperOneSigma ?? 1 / 0, A = D[0].lowerOneSigma ?? -1 / 0, U = D.filter((ae) => ae.value > O), H = D.filter((ae) => ae.value < A);
          if (D.every((ae) => ae.value > Q) && U.length >= 4)
            for (const ae of U)
              ae.specialCauseFourOfFiveUp = !0;
          if (D.every((ae) => ae.value < Q) && H.length >= 4)
            for (const ae of H)
              ae.specialCauseFourOfFiveDown = !0;
        }
      for (let b = 0; b <= C.length - T; b++) {
        const S = C.slice(b, b + T), D = S.map(h);
        if (!D.every((A) => _e(A.value))) continue;
        let Q = !0, O = !0;
        for (let A = 1; A < D.length && (D[A].value > D[A - 1].value || (Q = !1), D[A].value < D[A - 1].value || (O = !1), !(!Q && !O)); A++)
          ;
        if (Q) for (const A of S) {
          const U = h(A);
          U.specialCauseTrendUp = !0;
        }
        if (O) for (const A of S) {
          const U = h(A);
          U.specialCauseTrendDown = !0;
        }
      }
      if (i.enableFifteenInInnerThirdRule) {
        let b = [];
        for (const S of C) {
          const D = h(S);
          if (!_e(D.value) || !_e(D.mean) || !_e(D.upperOneSigma) || !_e(D.lowerOneSigma)) {
            b = [];
            continue;
          }
          if (!(D.value < D.upperOneSigma && D.value > D.lowerOneSigma)) {
            b = [];
            continue;
          }
          if (b.push(S), b.length >= 15) {
            const O = b.map(h), A = O.some((H) => H.value > H.mean), U = O.some((H) => H.value < H.mean);
            if (A && U)
              for (const H of b) h(H).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition)) {
      const h = i.maximumPointsPartition;
      let I = 0;
      for (const k of c.filter((b) => b.partitionId === _))
        !k.ghost && _e(k.value) && I++, I > h && (k.mean = k.upperProcessLimit = k.lowerProcessLimit = null, k.upperTwoSigma = k.lowerTwoSigma = k.upperOneSigma = k.lowerOneSigma = null);
    }
  }
  for (const p of c) {
    if (p.ruleTags && p.ruleTags.length) continue;
    const g = [];
    p.specialCauseShiftUp && g.push(lt.ShiftHigh), p.specialCauseShiftDown && g.push(lt.ShiftLow), p.specialCauseTrendUp && g.push(lt.TrendIncreasing), p.specialCauseTrendDown && g.push(lt.TrendDecreasing), p.specialCauseSinglePointUp && g.push(lt.SinglePointAbove), p.specialCauseSinglePointDown && g.push(lt.SinglePointBelow), p.specialCauseTwoOfThreeUp && g.push(lt.TwoOfThreeAbove), p.specialCauseTwoOfThreeDown && g.push(lt.TwoOfThreeBelow), p.specialCauseFourOfFiveUp && g.push(lt.FourOfFiveAbove), p.specialCauseFourOfFiveDown && g.push(lt.FourOfFiveBelow), p.specialCauseFifteenInnerThird && g.push(lt.FifteenInnerThird), g.length && (p.ruleTags = g);
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
    }), g.ghost || !_e(g.value) || g.mean === null) {
      g.variationIcon = Ce.Suppressed;
      continue;
    }
    const M = g.value > g.mean, $ = g.value < g.mean;
    i.rules?.collapseWeakerClusterRules && (g.specialCauseTwoOfThreeUp && g.specialCauseFourOfFiveUp && (g.specialCauseTwoOfThreeUp = !1), g.specialCauseTwoOfThreeDown && g.specialCauseFourOfFiveDown && (g.specialCauseTwoOfThreeDown = !1));
    const N = g.specialCauseTrendUp && M, F = g.specialCauseTrendDown && $, P = g.specialCauseSinglePointUp || g.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && g.specialCauseFourOfFiveUp || g.specialCauseShiftUp || N, R = g.specialCauseSinglePointDown || g.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && g.specialCauseFourOfFiveDown || g.specialCauseShiftDown || F;
    let j = !1;
    if (i.precedenceStrategy === tr.DirectionalFirst && (i.grace?.emergingEnabled || i.emergingGraceEnabled || i.emergingDirectionGrace)) {
      const T = i.specialCauseTrendPoints || 6;
      if (T > 1 && !(g.specialCauseTrendUp || g.specialCauseTrendDown)) {
        const C = T - 1, h = [];
        for (let I = p; I >= 0 && h.length < C; I--) {
          const k = c[I];
          !k.ghost && _e(k.value) && k.mean !== null && h.unshift(k);
        }
        if (h.length === C) {
          let I = !0;
          for (let k = 1; k < h.length && I; k++)
            r === Ne.Up ? h[k].value > h[k - 1].value || (I = !1) : r === Ne.Down && h[k].value < h[k - 1].value || (I = !1);
          j = I;
        }
      }
    }
    if (i.precedenceStrategy === tr.DirectionalFirst) {
      const C = r === Ne.Up ? P : r === Ne.Down ? R : !1, h = r === Ne.Up ? R : r === Ne.Down ? P : !1;
      C && !h ? g.variationIcon = Ce.Improvement : h && !C ? g.variationIcon = j ? Ce.Neither : Ce.Concern : C && h ? g.variationIcon = j || g.specialCauseTrendUp || g.specialCauseTrendDown ? Ce.Improvement : Ce.Neither : g.variationIcon = Ce.Neither;
    } else
      r === Ne.Up ? g.variationIcon = P ? Ce.Improvement : R ? Ce.Concern : Ce.Neither : r === Ne.Down ? g.variationIcon = R ? Ce.Improvement : P ? Ce.Concern : Ce.Neither : g.variationIcon = Ce.Neither;
    const v = P || R;
    if (g.specialCauseImprovementValue = v && g.variationIcon === Ce.Improvement ? g.value : null, g.specialCauseConcernValue = v && g.variationIcon === Ce.Concern ? g.value : null, g.specialCauseNeitherValue = v && g.variationIcon === Ce.Neither ? g.value : null, i.conflictPrecedenceMode === el.SqlRankingV26a && g.specialCauseImprovementValue !== null && g.specialCauseConcernValue !== null) {
      const T = [];
      g.specialCauseSinglePointUp && T.push({ id: ot.SinglePoint, rank: 1, side: Ze.Up }), g.specialCauseSinglePointDown && T.push({ id: ot.SinglePoint, rank: 1, side: Ze.Down }), g.specialCauseTwoOfThreeUp && T.push({ id: ot.TwoSigma, rank: 2, side: Ze.Up }), g.specialCauseTwoOfThreeDown && T.push({ id: ot.TwoSigma, rank: 2, side: Ze.Down }), g.specialCauseShiftUp && T.push({ id: ot.Shift, rank: 3, side: Ze.Up }), g.specialCauseShiftDown && T.push({ id: ot.Shift, rank: 3, side: Ze.Down }), g.specialCauseTrendUp && T.push({ id: ot.Trend, rank: 4, side: Ze.Up }), g.specialCauseTrendDown && T.push({ id: ot.Trend, rank: 4, side: Ze.Down });
      const C = T.filter((O) => O.side === Ze.Up).reduce((O, A) => Math.max(O, A.rank), 0), h = T.filter((O) => O.side === Ze.Down).reduce((O, A) => Math.max(O, A.rank), 0);
      let I;
      C > h ? I = xt.Upwards : h > C ? I = xt.Downwards : I = xt.Same;
      const k = g.specialCauseImprovementValue, b = g.specialCauseConcernValue;
      I === xt.Upwards ? r === Ne.Up ? g.specialCauseConcernValue = null : r === Ne.Down && (g.specialCauseImprovementValue = null) : I === xt.Downwards ? r === Ne.Up ? g.specialCauseImprovementValue = null : r === Ne.Down && (g.specialCauseConcernValue = null) : g.variationIcon === Ce.Improvement ? g.specialCauseConcernValue = null : g.variationIcon === Ce.Concern ? g.specialCauseImprovementValue = null : g.specialCauseConcernValue = null, g.specialCauseImprovementValue !== null && g.specialCauseConcernValue === null ? g.variationIcon = Ce.Improvement : g.specialCauseConcernValue !== null && g.specialCauseImprovementValue === null ? g.variationIcon = Ce.Concern : g.specialCauseImprovementValue === null && g.specialCauseConcernValue === null && (g.variationIcon = Ce.Neither);
      const S = g.specialCauseImprovementValue !== null ? Ze.Up : g.specialCauseConcernValue !== null ? Ze.Down : void 0, D = S === Ze.Up ? C : S === Ze.Down ? h : Math.max(C, h), Q = T.find((O) => O.rank === D && (!S || O.side === S));
      g.conflictPrimeDirection = I, g.conflictResolved = !0, g.conflictResolvedRank = D || void 0, Q && (g.conflictResolvedByRuleId = Q.id), g.pruningMode = Ms.Conflict, g.originalSpecialCauseImprovementValue = k, g.originalSpecialCauseConcernValue = b;
    }
    {
      const T = l[g.rowId - 1], C = Uh({
        metricImprovement: r,
        capabilityMode: i.assuranceCapabilityMode,
        value: g.value,
        mean: g.mean,
        upperProcessLimit: g.upperProcessLimit,
        lowerProcessLimit: g.lowerProcessLimit,
        target: _e(T?.target) ? T.target : null
      });
      g.assuranceIcon = C;
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
    for (const M of c)
      !M.ghost && _e(M.value) && g++, g > p && (M.mean = M.upperProcessLimit = M.lowerProcessLimit = null, M.upperTwoSigma = M.lowerTwoSigma = M.upperOneSigma = M.lowerOneSigma = null);
  }
  if (i.nullValueWarning && (t === jt.XmR || t === jt.G)) {
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
  if (i.targetSuppressedWarning && (t === jt.T || t === jt.G) && l.some((g) => _e(g.target)) && u.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), i.ghostOnRareEventWarning && (t === jt.T || t === jt.G)) {
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
  let y;
  if (i.baselineSuggest) {
    const p = i.baselineSuggestStabilityPoints, g = i.baselineSuggestMinGap, M = i.baselineSuggestMinDeltaSigma, $ = i.baselineSuggestScoreThreshold;
    y = Gh(
      c.map((F) => ({
        value: F.value,
        partitionId: F.partitionId,
        variationIcon: F.variationIcon,
        mean: F.mean,
        upperProcessLimit: F.upperProcessLimit
      })),
      {
        W: p,
        minGap: g,
        minDeltaSigma: M,
        scoreThreshold: $,
        isShiftUpAt: (F) => !!c[F].specialCauseShiftUp,
        isShiftDownAt: (F) => !!c[F].specialCauseShiftDown,
        isTrendUpAt: (F) => !!c[F].specialCauseTrendUp,
        isTrendDownAt: (F) => !!c[F].specialCauseTrendDown,
        isSingleUpAt: (F) => !!c[F].specialCauseSinglePointUp,
        isSingleDownAt: (F) => !!c[F].specialCauseSinglePointDown
      }
    ).map((F) => ({
      index: F.index,
      reason: F.reason,
      score: F.score,
      deltaMean: F.deltaMean,
      oldMean: F.oldMean,
      newMean: F.newMean,
      window: F.window
    }));
  }
  return { rows: c, warnings: u, ...y ? { suggestedBaselines: y } : {} };
}
function Kh(e, t) {
  const r = Vh(e), a = r.upMax, s = r.downMax, o = r.upRules.map((y) => ({ id: y, rank: Ho[y] })), i = r.downRules.map((y) => ({ id: y, rank: Ho[y] }));
  let l;
  a > s ? l = xt.Upwards : s > a ? l = xt.Downwards : l = xt.Same;
  const d = a > 0, c = s > 0, u = t === Ne.Up && d || t === Ne.Down && c ? e.value : null, f = t === Ne.Up && c || t === Ne.Down && d ? e.value : null;
  e.sqlOriginalImprovementValue = u, e.sqlOriginalConcernValue = f, u !== null && f !== null && (e.sqlPruned = !0, l === xt.Upwards ? t === Ne.Up || t === Ne.Down && (e.sqlOriginalImprovementValue = null) : l === xt.Downwards ? t === Ne.Up ? e.sqlOriginalImprovementValue = null : Ne.Down : u !== null ? e.sqlOriginalConcernValue = null : f !== null && (e.sqlOriginalImprovementValue = null)), e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = Ce.Improvement : !e.sqlOriginalImprovementValue && e.sqlOriginalConcernValue ? e.variationIcon = Ce.Concern : !e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = Ce.Neither : e.variationIcon = Ce.Improvement, e.primeDirection = l, e.primeRank = Math.max(a, s) || void 0, e.pruningMode = Ms.Sql;
  const w = ((e.variationIcon === Ce.Concern ? t === Ne.Up ? Ze.Down : Ze.Up : t === Ne.Up ? Ze.Up : Ze.Down) === Ze.Up ? o : i).reduce(
    (y, p) => !y || p.rank > y.rank ? p : y,
    void 0
  );
  w && (e.primeRuleId = w.id);
}
function Xh(e) {
  const {
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: s = {}
  } = e, o = Fs({
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: {
      ...s
    }
  }), i = o.rows.map((l) => ({ ...l }));
  for (const l of i)
    Kh(l, r);
  return { rows: i, warnings: o.warnings };
}
const Zh = ({
  engineRows: e,
  measureName: t,
  measureUnit: r,
  onSignalFocus: a
}) => {
  const s = Wt(), o = s?.focused ?? null, i = o?.index ?? null, l = typeof i == "number" && e ? e[i] : null, d = Y.useMemo(() => l ? Jr(l) : [], [l]), c = Y.useMemo(
    () => Array.from(
      new Set(d.map((y) => yn[y]?.narration).filter(Boolean))
    ),
    [d]
  ), u = l ? Qr(l.variationIcon) : null, f = l ? tl(l.assuranceIcon) : null, m = d.length > 0, _ = l ? l.variationIcon === Ce.Neither && m : !1, w = Y.useRef(null);
  return Y.useEffect(() => {
    if (!a || !o || l == null) return;
    const y = `${o.seriesId}:${o.index}`;
    if (w.current !== y) {
      w.current = y;
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
          (u || _ || f) && /* @__PURE__ */ n.jsx(
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
                    ) : _ ? /* @__PURE__ */ n.jsx(
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
                      const y = f.toLowerCase(), g = !(y.includes("not met") || y.includes("not achieved")) && /^|\b(met|achieved)\b|$/.test(y);
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
                children: d.length === 0 ? /* @__PURE__ */ n.jsx("span", { children: " None" }) : d.map((y) => {
                  const p = String(y), M = p === lt.TrendIncreasing || p === lt.TrendDecreasing ? "fdp-spc-tag--trend" : _ ? "fdp-spc-tag--no-judgement" : u ? u.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : u.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", $ = yn[y]?.tooltip || p;
                  return /* @__PURE__ */ n.jsx(
                    He,
                    {
                      text: $,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${M}`,
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
let Jh = 0;
const Qh = ({
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
  showEmbeddedIcon: _ = !0,
  embeddedIconVariant: w = en.Classic,
  embeddedIconRunLength: y,
  targets: p,
  baselines: g,
  ghosts: M,
  settings: $,
  narrationContext: N,
  gradientSequences: F = !1,
  sequenceTransition: P = "slope",
  processLineWidth: R = 2,
  showWarningsPanel: j = !1,
  warningsFilter: v,
  enableNeutralNoJudgement: T = !0,
  showTrendGatingExplanation: C = !0,
  trendVisualMode: h = "ungated",
  disableTrendSideGating: I,
  source: k,
  alwaysShowZeroY: b = !1,
  alwaysShowHundredY: S = !1,
  percentScale: D = !1,
  useSqlCompatEngine: Q = !1,
  showTrendStartMarkers: O = !1,
  showFirstFavourableCrossMarkers: A = !1,
  showTrendBridgeOverlay: U = !1,
  showSignalsInspector: H = !1,
  onSignalFocus: ae
}) => {
  const z = Y.useCallback(
    (K) => String(K).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((se) => se.length ? se[0].toUpperCase() + se.slice(1) : se).join(" "),
    []
  ), fe = Y.useCallback(
    (K) => String(K).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((W) => W.length ? W[0].toUpperCase() + W.slice(1) : W).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && I !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const ve = Y.useMemo(() => {
    const K = e.map((W, se) => ({
      x: W.x,
      value: W.y,
      target: p?.[se] ?? void 0,
      baseline: g?.[se] ?? void 0,
      ghost: M?.[se] ?? void 0
    }));
    try {
      const W = $ ? { ...$ } : void 0;
      return Q ? Xh({
        chartType: c,
        metricImprovement: u,
        data: K,
        settings: W
      }) : Fs({ chartType: c, metricImprovement: u, data: K, settings: W });
    } catch {
      return null;
    }
  }, [
    e,
    p,
    g,
    M,
    c,
    u,
    $,
    Q
  ]), le = ve?.rows.slice().reverse().find((K) => K.mean != null), ue = le?.mean ?? null, J = ve?.warnings || [], te = Y.useMemo(() => J.length ? v ? J.filter((K) => !(v.severities && K.severity && !v.severities.includes(K.severity) || v.categories && K.category && !v.categories.includes(K.category) || v.codes && !v.codes.includes(K.code))) : J : [], [J, v]), [de, x] = Y.useState(""), E = Y.useRef("");
  Y.useEffect(() => {
    if (!j) {
      E.current !== "" && (E.current = "", x(""));
      return;
    }
    const K = te.length;
    if (!K) {
      const ce = "Diagnostics: no warnings.";
      ce !== E.current && (E.current = ce, x(ce));
      return;
    }
    const W = {
      error: te.filter(
        (ce) => ce.severity === Vt.Error
      ).length,
      warning: te.filter(
        (ce) => ce.severity === Vt.Warning
      ).length,
      info: te.filter(
        (ce) => ce.severity === Vt.Info
      ).length
    }, se = [];
    W.error && se.push(
      `${W.error} error${W.error === 1 ? "" : "s"}`
    ), W.warning && se.push(
      `${W.warning} warning${W.warning === 1 ? "" : "s"}`
    ), W.info && se.push(`${W.info} info`);
    const me = `Diagnostics updated: ${K} warning${K === 1 ? "" : "s"} (${se.join(", ")}).`;
    me !== E.current && (E.current = me, x(me));
  }, [j, te]);
  const B = le?.upperProcessLimit ?? null, Z = le?.lowerProcessLimit ?? null, V = le?.upperOneSigma ?? null, ne = le?.lowerOneSigma ?? null, he = le?.upperTwoSigma ?? null, we = le?.lowerTwoSigma ?? null, ie = ue != null && V != null ? Math.abs(V - ue) : 0, q = Y.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), G = Y.useMemo(() => {
    if (D) {
      const ce = e.map((be) => be.y), ke = Math.max(100, ...ce), je = Math.min(0, ...ce);
      return [je < 0 ? je : 0, ke > 100 ? ke : 100];
    }
    const W = [...e.map((ce) => ce.y)];
    if ([ue, B, Z, V, ne, he, we].forEach((ce) => {
      ce != null && W.push(ce);
    }), p && p.forEach((ce) => {
      typeof ce == "number" && !isNaN(ce) && W.push(ce);
    }), !W.length) return;
    let se = Math.min(...W), me = Math.max(...W);
    return b && (se = Math.min(0, se)), S && (me = Math.max(100, me)), [se, me];
  }, [e, ue, B, Z, V, ne, he, we, p, b, S, D]), re = Y.useMemo(() => {
    if (!(l || N?.measureUnit) && e.length)
      return e.every((K) => K.y >= 0 && K.y <= 1) ? "%" : void 0;
  }, [l, N?.measureUnit, e]), ee = l ?? N?.measureUnit ?? re, L = Y.useMemo(() => ee ? { ...N || {}, measureUnit: ee } : N, [N, ee]), X = Y.useMemo(() => {
    if (!ve?.rows) return [];
    const K = [];
    for (let W = 1; W < ve.rows.length; W++)
      ve.rows[W].partitionId !== ve.rows[W - 1].partitionId && K.push(W);
    return K;
  }, [ve?.rows]), oe = Y.useMemo(() => {
    if (!_ || !ve?.rows?.length) return null;
    const K = ve.rows, W = $?.minimumPoints ?? 13;
    if (K.filter(
      (Ve) => !Ve.ghost && Ve.value != null
    ).length < W) return null;
    let me = -1;
    for (let Ve = K.length - 1; Ve >= 0; Ve--) {
      const Je = K[Ve];
      if (Je && Je.value != null && !Je.ghost) {
        me = Ve;
        break;
      }
    }
    if (me === -1) return null;
    const ce = K[me], ke = ce.variationIcon, je = ke, be = ce.assuranceIcon, $e = je === Ce.Neither && !!ce.specialCauseNeitherValue, Be = be === qe.Pass ? Yt.Pass : be === qe.Fail ? Yt.Fail : Yt.Uncertain;
    let Fe;
    if (je === Ce.Suppressed) {
      const Ve = ce.specialCauseSinglePointUp, Je = ce.specialCauseSinglePointDown;
      u === Ne.Up ? Ve ? Fe = Te.Higher : Je && (Fe = Te.Lower) : u === Ne.Down ? Je ? Fe = Te.Lower : Ve && (Fe = Te.Higher) : Fe = Te.Higher;
    } else if (je === Ce.Neither && $e) {
      const Ve = ce.specialCauseSinglePointUp || ce.specialCauseTwoOfThreeUp || ce.specialCauseFourOfFiveUp || ce.specialCauseShiftUp || ce.specialCauseTrendUp, Je = ce.specialCauseSinglePointDown || ce.specialCauseTwoOfThreeDown || ce.specialCauseFourOfFiveDown || ce.specialCauseShiftDown || ce.specialCauseTrendDown;
      Ve && !Je ? Fe = Te.Higher : Je && !Ve ? Fe = Te.Lower : Fe = Te.Higher;
    }
    let Re;
    u === Ne.Up ? Re = Xe.HigherIsBetter : u === Ne.Down ? Re = Xe.LowerIsBetter : Re = Xe.ContextDependent;
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
              "data-trend-raw": Fe ? String(Fe) : "none",
              "data-trend": Fe ? String(Fe) : "none",
              "data-polarity": String(Re ?? "unknown"),
              style: { width: Ge, height: Ge },
              children: /* @__PURE__ */ n.jsx(
                ta,
                {
                  dropShadow: !1,
                  data: {
                    variationIcon: ke,
                    improvementDirection: u,
                    polarity: Re,
                    specialCauseNeutral: $e,
                    highSideSignal: ce.specialCauseSinglePointUp || ce.specialCauseTwoOfThreeUp || ce.specialCauseFourOfFiveUp || ce.specialCauseShiftUp || ce.specialCauseTrendUp,
                    lowSideSignal: ce.specialCauseSinglePointDown || ce.specialCauseTwoOfThreeDown || ce.specialCauseFourOfFiveDown || ce.specialCauseShiftDown || ce.specialCauseTrendDown,
                    ...Fe ? { trend: Fe } : {}
                  },
                  letterMode: u === Ne.Neither ? On.Direction : On.Polarity,
                  size: Ge,
                  variant: w,
                  runLength: w === en.TriangleWithRun ? y : void 0
                }
              )
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-assurance-icon",
              "data-assurance": String(be),
              style: { width: Ge, height: Ge },
              children: /* @__PURE__ */ n.jsx(
                na,
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
    _,
    ve?.rows,
    u,
    $?.minimumPoints,
    p,
    w,
    y
  ]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: i ? `fdp-spc-chart-wrapper ${i}` : "fdp-spc-chart-wrapper",
      children: [
        _ && /* @__PURE__ */ n.jsx(
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
          Hp,
          {
            height: r,
            ariaLabel: t,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ n.jsx(zp, { series: q, yDomain: G, children: /* @__PURE__ */ n.jsx(
              em,
              {
                series: q,
                showPoints: s,
                announceFocus: o,
                limits: { mean: ue, ucl: B, lcl: Z, sigma: ie, onePos: V, oneNeg: ne, twoPos: he, twoNeg: we },
                showZones: a,
                highlightOutOfControl: d,
                engineRows: ve?.rows || null,
                enableRules: f,
                showIcons: m,
                narrationContext: L,
                gradientSequences: F,
                sequenceTransition: P,
                processLineWidth: R,
                effectiveUnit: ee,
                partitionMarkers: X,
                ariaLabel: t,
                enableNeutralNoJudgement: T,
                showTrendGatingExplanation: C,
                trendVisualMode: h,
                metricImprovement: u,
                showTrendStartMarkers: O,
                showFirstFavourableCrossMarkers: A,
                showTrendBridgeOverlay: U,
                showSignalsInspector: H,
                onSignalFocus: ae
              }
            ) })
          }
        ),
        k && /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof k == "string" ? /* @__PURE__ */ n.jsxs("small", { children: [
          "Source: ",
          k
        ] }) : k }),
        j && de && /* @__PURE__ */ n.jsx(
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
        j && te.length > 0 && /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "fdp-spc-chart__warnings",
            role: "region",
            "aria-label": "SPC diagnostics",
            children: [
              /* @__PURE__ */ n.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
              /* @__PURE__ */ n.jsx(
                Ot,
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
                  rows: te.map((K) => {
                    let W = "grey";
                    return K.severity === Vt.Error ? W = "red" : K.severity === Vt.Warning ? W = "orange" : K.severity === Vt.Info && (W = "blue"), [
                      {
                        node: /* @__PURE__ */ n.jsx(
                          He,
                          {
                            color: W,
                            text: (K.severity ? String(K.severity) : "Info").replace(
                              /^[a-z]/,
                              (se) => se.toUpperCase()
                            )
                          }
                        ),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
                      },
                      {
                        node: K.category ? /* @__PURE__ */ n.jsx(
                          He,
                          {
                            color: "purple",
                            text: fe(K.category)
                          }
                        ) : /* @__PURE__ */ n.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
                      },
                      {
                        node: /* @__PURE__ */ n.jsx(He, { color: "grey", text: z(K.code) }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
                      },
                      {
                        node: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                          /* @__PURE__ */ n.jsx("span", { children: K.message }),
                          K.context && Object.keys(K.context).length > 0 && /* @__PURE__ */ n.jsxs(
                            "details",
                            {
                              className: "fdp-spc-chart__warning-context",
                              style: { marginTop: 4 },
                              children: [
                                /* @__PURE__ */ n.jsx("summary", { children: "context" }),
                                /* @__PURE__ */ n.jsx("pre", { children: JSON.stringify(K.context, null, 2) })
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
}, em = ({
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
  effectiveUnit: _,
  partitionMarkers: w,
  ariaLabel: y,
  metricImprovement: p,
  enableNeutralNoJudgement: g = !0,
  showTrendGatingExplanation: M = !0,
  trendVisualMode: $ = "ungated",
  showTrendStartMarkers: N = !1,
  showFirstFavourableCrossMarkers: F = !1,
  showTrendBridgeOverlay: P = !1,
  showSignalsInspector: R = !1,
  onSignalFocus: j
}) => {
  const v = ln(), T = qt();
  if (!v) return null;
  const { xScale: C, yScale: h } = v, I = Y.useRef(
    "spc-seq-" + ++Jh
  ), k = Wt(), b = e[0]?.data || [], S = Y.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const x = /* @__PURE__ */ new Set();
    return b.forEach((E, B) => {
      (a.ucl != null && E.y > a.ucl || a.lcl != null && E.y < a.lcl) && x.add(B);
    }), x;
  }, [b, a.ucl, a.lcl]), D = Y.useMemo(() => {
    if (!i) return null;
    const x = {};
    return i.forEach((E, B) => {
      if (E.value == null || E.ghost) return;
      const Z = E.specialCauseSinglePointUp || E.specialCauseSinglePointDown || E.specialCauseTwoOfThreeUp || E.specialCauseTwoOfThreeDown || E.specialCauseFourOfFiveUp || E.specialCauseFourOfFiveDown || E.specialCauseShiftUp || E.specialCauseShiftDown || E.specialCauseTrendUp || E.specialCauseTrendDown;
      x[B] = {
        variation: E.variationIcon,
        assurance: E.assuranceIcon,
        special: Z,
        concern: E.variationIcon === Ce.Concern,
        improvement: E.variationIcon === Ce.Improvement,
        trendUp: !!E.specialCauseTrendUp,
        trendDown: !!E.specialCauseTrendDown
      };
    }), x;
  }, [i]), Q = Y.useMemo(() => {
    if (!i || !i.length) return null;
    const x = [];
    for (const B of i)
      typeof B.target == "number" && !isNaN(B.target) && x.push(B.target);
    if (!x.length) return null;
    const E = x[0];
    return x.every((B) => B === E) ? E : null;
  }, [i]), O = Y.useMemo(() => {
    if (!D || !b.length)
      return [];
    const x = b.map((B, Z) => {
      const V = D?.[Z];
      if (V?.concern) return nt.Concern;
      if (V?.improvement) return nt.Improvement;
      if (V?.special && V.variation === Ce.Neither) {
        if ($ === "ungated" && p && p !== Ne.Neither) {
          if (V.trendUp)
            return p === Ne.Up ? nt.Improvement : nt.Concern;
          if (V.trendDown)
            return p === Ne.Down ? nt.Improvement : nt.Concern;
        }
        if (g) return nt.NoJudgement;
      }
      return nt.Common;
    });
    return y?.includes("Rule Clash") && console.log(
      `[${y}] Raw categories:`,
      x.map((B, Z) => `${Z}:${B}(${b[Z].y})`).join(", ")
    ), x;
  }, [D, b, y, g, $, p]), A = Y.useMemo(() => {
    if (!u || !O.length)
      return [];
    const x = [...O];
    let E = 0;
    for (; E < x.length; ) {
      const V = x[E];
      let ne = E + 1;
      for (; ne < x.length && x[ne] === V; ) ne++;
      ne - E === 1 && V !== nt.Common && (x[E] = nt.Common), E = ne;
    }
    const B = [];
    if (x.length) {
      let V = 0;
      for (let ne = 1; ne <= x.length; ne++)
        if (ne === x.length || x[ne] !== x[V]) {
          const he = x[V], we = ne - 1, ie = we - V + 1;
          (he === nt.Common || ie >= 2) && B.push({ start: V, end: we, category: he }), V = ne;
        }
    }
    return y?.includes("Rule Clash") && console.log(
      `[${y}] Final sequences:`,
      B.map((V) => `${V.start}-${V.end}:${V.category}`).join(", ")
    ), B;
  }, [u, O, y]), U = Y.useMemo(
    () => b.map((x) => C(x.x instanceof Date ? x.x : new Date(x.x))),
    [b, C]
  ), H = C.range()[1], ae = Y.useMemo(() => {
    if (!i || !i.length) return null;
    let x = Number.POSITIVE_INFINITY, E = Number.POSITIVE_INFINITY;
    if (i.forEach((ie, q) => {
      ie.specialCauseTrendUp && (x = Math.min(x, q)), ie.specialCauseTrendDown && (E = Math.min(E, q));
    }), !Number.isFinite(x) && !Number.isFinite(E)) return null;
    const B = x <= E, Z = B ? "up" : "down", V = B ? x : E, ne = (ie) => p == null || p === Ne.Neither || ie == null || typeof ie.value != "number" || typeof ie.mean != "number" ? !1 : Z === "up" ? p === Ne.Up ? ie.value > ie.mean : ie.value < ie.mean : p === Ne.Down ? ie.value < ie.mean : ie.value > ie.mean;
    let he = null;
    for (let ie = V; ie < i.length; ie++) {
      const q = i[ie];
      if (!(B ? !!q.specialCauseTrendUp : !!q.specialCauseTrendDown)) break;
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
        if (!(B ? !!G.specialCauseTrendUp : !!G.specialCauseTrendDown)) break;
        ne(G) && ie++;
      }
      we = ie >= 2;
    }
    return { direction: Z, detectedAt: V, firstFavourableCrossAt: he, persistedAcrossMean: we };
  }, [i, p]), z = Y.useMemo(() => {
    if (!i || !i.length) return null;
    const x = (E) => {
      const B = [];
      let Z = null, V = null;
      for (let ne = 0; ne < i.length; ne++) {
        const he = i[ne], we = typeof he[E] == "number" ? he[E] : null;
        if (we == null || isNaN(we)) {
          Z !== null && V != null && (B.push({
            x1: U[Z],
            x2: U[ne - 1],
            y: h(V)
          }), Z = null, V = null);
          continue;
        }
        if (Z === null) {
          Z = ne, V = we;
          continue;
        }
        V != null && Math.abs(we - V) <= 1e-9 || (V != null && B.push({
          x1: U[Z],
          x2: U[ne - 1],
          y: h(V)
        }), Z = ne, V = we);
      }
      return Z !== null && V != null && B.push({
        x1: U[Z],
        x2: U[i.length - 1],
        y: h(V)
      }), B;
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
  }, [i, U, h]), fe = Y.useMemo(() => A.length ? /* @__PURE__ */ n.jsxs("defs", { children: [
    /* @__PURE__ */ n.jsxs("linearGradient", { id: `${I.current}-grad-common`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.28 }),
      /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.12 }),
      /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.045 })
    ] }),
    A.map((x, E) => {
      const B = `${I.current}-grad-${E}`;
      let Z, V = 0.28, ne = 0.12, he = 0.045;
      switch (x.category) {
        case nt.Concern:
          Z = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", V = 0.28, ne = 0.12, he = 0.045;
          break;
        case nt.Improvement:
          Z = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", V = 0.26, ne = 0.11, he = 0.045;
          break;
        case nt.NoJudgement:
          Z = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", V = 0.26, ne = 0.11, he = 0.045;
          break;
        default:
          Z = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ n.jsxs("linearGradient", { id: B, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: Z, stopOpacity: V }),
        /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: Z, stopOpacity: ne }),
        /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: Z, stopOpacity: he })
      ] }, B);
    })
  ] }) : null, [A]), ve = Y.useMemo(() => {
    if (!A.length) return null;
    const [x] = h.domain(), E = h(x), B = A.map((Z, V) => {
      const { start: ne, end: he, category: we } = Z;
      if (ne < 0 || he >= U.length || ne > he)
        return null;
      const ie = U[ne], q = U[he];
      let G = "";
      if (we === nt.Common) {
        const re = V > 0 ? A[V - 1] : null, ee = V < A.length - 1 ? A[V + 1] : null, L = re ? U[re.end] : 0, X = re ? h(b[re.end].y) : E, oe = ee ? U[ee.start] : H, K = ee ? h(b[ee.start].y) : E;
        G = `M ${L} ${E}`, G += ` L ${L} ${X}`;
        for (let W = ne; W <= he; W++)
          G += ` L ${U[W]} ${h(b[W].y)}`;
        G += ` L ${oe} ${K}`, G += ` L ${oe} ${E} Z`;
      } else {
        const re = V > 0 ? A[V - 1] : null, ee = V < A.length - 1 ? A[V + 1] : null, L = re && re.category !== nt.Common, X = ee && ee.category !== nt.Common, oe = h(b[ne].y), K = h(b[he].y);
        let W = ie, se = q;
        if (L) {
          const me = U[re.end], ce = h(b[re.end].y), ke = b[ne].y - b[re.end].y;
          f === "slope" && ke > 0 ? (G = `M ${me} ${ce} L ${ie} ${oe}`, W = me) : (G = `M ${ie} ${E} L ${ie} ${oe}`, W = ie);
        } else
          G = `M ${ie} ${E} L ${ie} ${oe}`;
        for (let me = ne + 1; me <= he; me++)
          G += ` L ${U[me]} ${h(b[me].y)}`;
        if (G += ` L ${q} ${K}`, X) {
          const me = U[ee.start], ce = h(b[ee.start].y), ke = b[ee.start].y - b[he].y;
          (f === "slope" && ke <= 0 || f === "extend") && (G += ` L ${me} ${ce}`, se = me);
        }
        if (G += ` L ${se} ${E}`, G += ` L ${W} ${E} Z`, f === "neutral" && L) {
          const me = U[re.end], ce = h(b[re.end].y), ke = /* @__PURE__ */ n.jsx(
            "path",
            {
              d: `M ${me} ${E} L ${me} ${ce} L ${ie} ${oe} L ${ie} ${E} Z`,
              fill: `url(#${I.current}-grad-common)`,
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
                fill: `url(#${I.current}-grad-${V})`,
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
          fill: `url(#${I.current}-grad-${V})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${V}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ n.jsx("g", { className: "fdp-spc__sequence-bgs", children: B });
  }, [A, U, H, h, b, f]), le = Y.useMemo(() => {
    if (!c?.timeframe && b.length >= 2) {
      const x = b.map((he) => he.x instanceof Date ? he.x : new Date(he.x)), E = new Date(Math.min(...x.map((he) => he.getTime()))), B = new Date(Math.max(...x.map((he) => he.getTime()))), Z = Math.round((B.getTime() - E.getTime()) / 864e5) || 0;
      if (Z < 14)
        return `The chart shows a timeframe of ${Z + 1} days`;
      const V = Math.round(Z / 7);
      return V < 20 ? `The chart shows a timeframe of ${V} weeks` : `The chart shows a timeframe of ${(B.getFullYear() - E.getFullYear()) * 12 + (B.getMonth() - E.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, b]), ue = (x) => {
    const E = x % 10, B = x % 100;
    return E === 1 && B !== 11 ? `${x}st` : E === 2 && B !== 12 ? `${x}nd` : E === 3 && B !== 13 ? `${x}rd` : `${x}th`;
  }, J = (x) => `${ue(x.getDate())} ${x.toLocaleString("en-GB", { month: "long" })}, ${x.getFullYear()}`, te = Y.useCallback(
    ({
      index: x,
      x: E,
      y: B
    }) => {
      const Z = i?.[x], V = E instanceof Date ? E : new Date(E), ne = J(V), he = c?.measureUnit ? ` ${c.measureUnit}` : "", we = c?.measureName ? ` ${c.measureName}` : "";
      if (!Z)
        return `General summary is: ${le ? le + ". " : ""}Point ${x + 1}, ${ne}, ${B}${he}${we}`;
      const ie = Qr(Z.variationIcon) || "Variation", q = Jr(Z), G = q.length ? ` Rules: ${[...new Set(q.map((ee) => yn[ee].narration))].join("; ")}.` : " No special cause rules.", re = [];
      return c?.measureName && re.push(`Measure: ${c.measureName}.`), c?.datasetContext && re.push(`${c.datasetContext}.`), c?.organisation && re.push(`Organisation: ${c.organisation}.`), c?.additionalNote && re.push(c.additionalNote), [
        "General summary is:",
        ...re,
        `Point ${x + 1} recorded on `,
        ne + ",",
        `with a value of ${B} ${he}${we}`,
        ie + ".",
        G
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, le]
  ), de = Y.useCallback(
    (x, E) => i?.[x] ? te({
      index: x,
      seriesId: "process",
      x: E.x instanceof Date ? E.x : new Date(E.x),
      y: E.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, te]
  );
  return /* @__PURE__ */ n.jsx(Sh, { children: /* @__PURE__ */ n.jsxs(
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
              /* @__PURE__ */ n.jsx(Ao, { type: "x" }),
              /* @__PURE__ */ n.jsx(Ao, { type: "y" }),
              /* @__PURE__ */ n.jsx(Op, { axis: "y" }),
              fe,
              ve,
              w.map((x, E) => {
                const B = b[x];
                if (!B) return null;
                const Z = C(B.x instanceof Date ? B.x : new Date(B.x));
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
                  const B = z.mean[E + 1];
                  if (!B || x.y === B.y) return null;
                  const V = Math.max(4, B.x1 - x.x2 || 0) * 0.5, ne = `M ${x.x2},${x.y} C ${x.x2 + V},${x.y} ${B.x1 - V},${B.y} ${B.x1},${B.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__cl fdp-spc__cl-join", d: ne, fill: "none" }, `mean-join-${E}`);
                })
              ] }) : null,
              Q != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ n.jsx(n.Fragment, {}),
              z?.ucl.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--ucl", children: [
                z.ucl.map((x, E) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--ucl", x1: x.x1, x2: x.x2, y1: x.y, y2: x.y, strokeWidth: 2 }, `ucl-${E}`)),
                z.ucl.map((x, E) => {
                  if (E === z.ucl.length - 1) return null;
                  const B = z.ucl[E + 1];
                  if (!B || x.y === B.y) return null;
                  const V = Math.max(4, B.x1 - x.x2 || 0) * 0.5, ne = `M ${x.x2},${x.y} C ${x.x2 + V},${x.y} ${B.x1 - V},${B.y} ${B.x1},${B.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join", d: ne, fill: "none", strokeWidth: 2 }, `ucl-join-${E}`);
                })
              ] }) : null,
              z?.lcl.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--lcl", children: [
                z.lcl.map((x, E) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--lcl", x1: x.x1, x2: x.x2, y1: x.y, y2: x.y, strokeWidth: 2 }, `lcl-${E}`)),
                z.lcl.map((x, E) => {
                  if (E === z.lcl.length - 1) return null;
                  const B = z.lcl[E + 1];
                  if (!B || x.y === B.y) return null;
                  const V = Math.max(4, B.x1 - x.x2 || 0) * 0.5, ne = `M ${x.x2},${x.y} C ${x.x2 + V},${x.y} ${B.x1 - V},${B.y} ${B.x1},${B.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join", d: ne, fill: "none", strokeWidth: 2 }, `lcl-join-${E}`);
                })
              ] }) : null,
              Q != null && /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: C.range()[1],
                    y1: h(Q),
                    y2: h(Q),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: C.range()[0] - 7,
                    y: h(Q) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      Q,
                      " ",
                      _ || c?.measureUnit || ""
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
              ae && (N || F || P) && (() => {
                const x = ae.detectedAt, E = ae.firstFavourableCrossAt, B = b[x] ? C(b[x].x instanceof Date ? b[x].x : new Date(b[x].x)) : null, Z = b[x] ? h(b[x].y) : null, V = E != null && b[E] ? C(b[E].x instanceof Date ? b[E].x : new Date(b[E].x)) : null, ne = E != null && b[E] ? h(b[E].y) : null;
                return /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  P && B != null && Z != null && V != null && ne != null && /* @__PURE__ */ n.jsx("line", { x1: B, y1: Z, x2: V, y2: ne, stroke: "#888", strokeDasharray: "4 4", strokeWidth: 2, children: /* @__PURE__ */ n.jsx("title", { children: "Trend bridge: start to first favourable-side point" }) }),
                  N && B != null && Z != null && /* @__PURE__ */ n.jsx("circle", { cx: B, cy: Z, r: 6, fill: "white", stroke: "#555", strokeWidth: 2, children: /* @__PURE__ */ n.jsx("title", { children: "Trend start (run reached N)" }) }),
                  F && V != null && ne != null && /* @__PURE__ */ n.jsx("circle", { cx: V, cy: ne, r: 5, fill: "#555", children: /* @__PURE__ */ n.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ n.jsx(
                kh,
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
                const B = C(x.x instanceof Date ? x.x : new Date(x.x)), Z = h(x.y), V = S.has(E), ne = D?.[E], he = $ === "ungated" && !!ne?.special && ne?.variation === Ce.Neither && p != null && p !== Ne.Neither, we = he && (ne?.trendUp && p === Ne.Up || ne?.trendDown && p === Ne.Down), ie = he && (ne?.trendUp && p === Ne.Down || ne?.trendDown && p === Ne.Up), q = !!(ne?.improvement || we), G = !!(ne?.concern || ie), re = [
                  "fdp-spc__point",
                  V && o ? "fdp-spc__point--ooc" : null,
                  l && ne?.special && G ? "fdp-spc__point--sc-concern" : null,
                  l && ne?.special && q ? "fdp-spc__point--sc-improvement" : null,
                  // Neutral (context-dependent) metrics: show purple when special cause present but neither improvement nor concern
                  l && g && ne?.special && ne.variation === Ce.Neither && !q && !G ? "fdp-spc__point--sc-no-judgement" : null,
                  ne?.assurance === qe.Pass ? "fdp-spc__point--assurance-pass" : null,
                  ne?.assurance === qe.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), ee = `Point ${E + 1} value ${x.y}` + (ne?.special ? " special cause" : "") + (ne?.variation === Ce.Improvement ? " improving" : ne?.variation === Ce.Concern ? " concern" : ""), L = k?.focused?.index === E;
                return /* @__PURE__ */ n.jsx(
                  "circle",
                  {
                    cx: B,
                    cy: Z,
                    r: 5,
                    className: re,
                    "data-variation": ne?.variation,
                    "data-assurance": ne?.assurance,
                    "aria-label": ee,
                    ...L ? { "aria-describedby": `spc-tooltip-${E}` } : {}
                  },
                  E
                );
              }),
              d && l && D && b.map((x, E) => {
                const B = D[E];
                if (!B || !(B.concern || B.improvement)) return null;
                const Z = C(x.x instanceof Date ? x.x : new Date(x.x)), V = h(x.y);
                let ne = V - 10;
                const he = 12, we = h.range()[0] - 4;
                ne < he && (ne = Math.min(V + 16, we));
                const ie = C.range()[1], q = Math.min(Math.max(Z, 0), ie - 0);
                return /* @__PURE__ */ n.jsx(
                  "text",
                  {
                    x: q,
                    y: ne,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${B.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: B.concern ? "!" : "★"
                  },
                  `icon-${E}`
                );
              }),
              T && /* @__PURE__ */ n.jsx(
                tm,
                {
                  width: C.range()[1],
                  height: h.range()[0]
                }
              ),
              !R && /* @__PURE__ */ n.jsx(
                rl,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: de,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (x) => J(x),
                  enableNeutralNoJudgement: g,
                  showTrendGatingExplanation: M
                }
              )
            ] })
          }
        ),
        R && /* @__PURE__ */ n.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ n.jsx(
          Zh,
          {
            engineRows: i,
            measureName: c?.measureName,
            measureUnit: _ || c?.measureUnit,
            onSignalFocus: j
          }
        ) }),
        r && /* @__PURE__ */ n.jsx(
          Ch,
          {
            format: (x) => te({ ...x, x: x.x instanceof Date ? x.x : new Date(x.x) })
          }
        )
      ]
    }
  ) });
}, tm = ({
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
}, nm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: Yt,
  Direction: Te,
  MetricPolarity: Xe,
  SPCAssuranceIcon: na,
  SPCVariationIcon: ta,
  VariationJudgement: ct,
  VariationState: Pe,
  getVariationColour: Ps,
  getVariationTrend: ea
}, Symbol.toStringTag, { value: "Module" })), Lb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: qe,
  AssuranceResult: Yt,
  BaselineSuggestionReason: pt,
  ChartType: jt,
  Direction: Te,
  Icons: nm,
  ImprovementDirection: Ne,
  MetricPolarity: Xe,
  RULE_METADATA: vr,
  SPCAssuranceIcon: na,
  SPCChart: Qh,
  SPCTooltipOverlay: rl,
  SPCVariationIcon: ta,
  SpcEmbeddedIconVariant: en,
  SpcWarningCategory: ll,
  SpcWarningCode: cl,
  SpcWarningSeverity: Vt,
  VARIATION_COLOR_TOKENS: bt,
  VariationIcon: Ce,
  VariationJudgement: ct,
  VariationState: Pe,
  buildSpc: Fs,
  extractRuleIds: Jr,
  getVariationColorHex: $h,
  getVariationColorToken: nl,
  getVariationColour: Ps,
  getVariationTrend: ea,
  normaliseSpcSettings: dl,
  ruleGlossary: yn,
  variationLabel: Qr
}, Symbol.toStringTag, { value: "Module" })), rm = "150ms", am = "300ms", sm = "500ms", om = "cubic-bezier(0.4, 0, 1, 1)", im = "cubic-bezier(0, 0, 0.2, 1)", lm = "cubic-bezier(0.4, 0, 0.2, 1)", cm = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", dm = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", um = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", fm = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", pm = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", hm = "1px", mm = "2px", gm = "4px", xm = "4px", bm = "4px", ym = "2px", vm = "1px", _m = "0px", wm = "4px", Sm = "8px", km = "12px", ul = "#d8dde0", fl = "#4c6272", pl = "#d8dde0", hl = "#aeb7bd", ml = "#d5281b", gl = "#005eb8", xl = "#ffffff", bl = "#212b32", yl = "#007f3b", vl = "#330072", _l = "#7c2855", wl = "#d5281b", Sl = "#ffeb3b", kl = "#fff9c4", Cl = "#ffb81c", jl = "#ed8b00", Nl = "#00a499", Tl = "#ae2573", Dl = "#4c6272", $l = "#768692", Il = "#aeb7bd", Ml = "#d8dde0", Ll = "#f0f4f5", Cm = "#212b32", jm = "#4c6272", Nm = "#ffffff", Tm = "#212b32", Dm = "#005eb8", $m = "#7c2855", Im = "#003087", Mm = "#330072", Lm = "#ffeb3b", Pm = "#212b32", Fm = "#d8dde0", Em = "#ffffff33", Rm = "#d5281b", Am = "#4c6272", Bm = "#ffffff", Hm = "#007f3b", zm = "#ffffff", Om = "#006530", Wm = "#004021", Um = "#004021", Gm = "#00000000", Vm = "#ffffff", Ym = "#005eb8", qm = "#005eb8", Km = "#d9e5f2", Xm = "#c7daf0", Zm = "#005eb8", Jm = "#ffffff", Qm = "#212b32", eg = "#d9dde0", tg = "#b3bcc2", ng = "#b3bcc2", rg = "#d5281b", ag = "#aa2016", sg = "#6a140e", og = "#6a140e", ig = "#005eb8", lg = "#004b93", cg = "#002f5c", dg = "#002f5c", ug = "8px", fg = "16px", pg = "12px", hg = "16px", mg = "4px", gg = "40px", xg = "4px", bg = "40px", yg = "12px", vg = "16px", _g = "32px", wg = "16px", Sg = "20px", kg = "28px", Cg = "9px", jg = "2px", Ng = "16px", Tg = "24px", Dg = "8px", $g = "24px", Ig = "16px", Mg = "4px", Lg = "4px", Pg = "4px", Fg = "8px", Eg = "4px", Rg = "16px", Ag = "#007f3b", Bg = "#006530", Hg = "#004021", zg = "#d8dde0", Og = "#ffffff", Wg = "#768692", Ug = "#00000000", Gg = "#ffeb3b", Vg = "#00000000", Yg = "#ffffff", qg = "#d9e5f2", Kg = "#c7daf0", Xg = "#005eb8", Zg = "#005eb8", Pl = "8px", Fl = "16px", El = "12px", Rl = "16px", Jg = "2px", Qg = "4px", e0 = "4px", t0 = "600", n0 = "#ffffff", r0 = "#d8dde0", a0 = "#aeb7bd", s0 = "#f0f4f5", o0 = "#212b32", i0 = "#212b32", l0 = "#005eb8", Al = "16px", Bl = "32px", Hl = "16px", c0 = "1px", d0 = "4px", u0 = "none", f0 = "0 2px 4px rgba(0, 0, 0, 0.1)", p0 = "#ffffff", h0 = "#ffffff", m0 = "#d8dde0", g0 = "#ffffff", x0 = "#4c6272", b0 = "#ffeb3b", y0 = "#d5281b", v0 = "#aeb7bd", _0 = "#212b32", w0 = "#4c6272", S0 = "#768692", k0 = "#212b32", C0 = "#ffffff", j0 = "600", N0 = "#d5281b", T0 = "600", D0 = "#4c6272", zl = "4px", Ol = "40px", Wl = "40px", Ul = "12px", $0 = "2px", I0 = "4px", M0 = "0px", L0 = "16px", P0 = "18px", F0 = "24px", E0 = "32px", R0 = "34px", A0 = "32px", B0 = "40px", H0 = "48px", z0 = "5.4ex", O0 = "7.2ex", W0 = "9ex", U0 = "10.8ex", G0 = "20ex", V0 = "38ex", Y0 = "56ex", q0 = "44px", K0 = "40px", X0 = "1020px", Z0 = "100%", J0 = "50%", Q0 = "33.333%", ex = "25%", tx = "20%", nx = "320px", rx = "641px", ax = "1025px", sx = "1280px", ox = "960px", ix = "32px", lx = "16px", cx = "#d5281b", dx = "#d5281b", ux = "#ffffff", fx = "#007f3b", px = "#007f3b", hx = "#ffffff", mx = "#ffeb3b", gx = "#ffeb3b", xx = "#212b32", bx = "#005eb8", yx = "#005eb8", vx = "#ffffff", _x = "#d8dde0", wx = "#aeb7bd", Sx = "#768692", kx = "0 4px 0 #004021", Cx = "0 4px 0 #005eb8", jx = "0 4px 0 #6a140e", Nx = "0 4px 0 #ffeb3b", Tx = "none", Dx = "0 2px 4px rgba(0, 0, 0, 0.1)", $x = "4px", Ix = "0px", Mx = "solid", Lx = "0 0 0 3px #ffeb3b", Px = "0 0 0 3px #ffeb3b", Fx = "none", Ex = "0 1px 3px rgba(0, 0, 0, 0.12)", Rx = "0 2px 6px rgba(0, 0, 0, 0.16)", Ax = "0 4px 12px rgba(0, 0, 0, 0.20)", Gl = "0", Vl = "4px", Yl = "8px", ql = "16px", Kl = "24px", Xl = "32px", Zl = "40px", Jl = "48px", Ql = "56px", ec = "64px", qa = "0", Ka = "0", Xa = "4px", Za = "4px", Ja = "8px", Qa = "8px", es = "8px", ts = "16px", ns = "16px", rs = "24px", as = "24px", ss = "32px", os = "32px", is = "40px", ls = "40px", cs = "48px", ds = "48px", us = "56px", fs = "56px", ps = "64px", _r = "Frutiger W01", wr = "Arial, Helvetica, sans-serif", Sr = "sans-serif", kr = "400", Cr = "600", jr = "400", Nr = "12px", Tr = "14px", Dr = "12pt", $r = "14px", Ir = "16px", Mr = "12pt", Lr = "16px", Pr = "19px", Fr = "13pt", Er = "19px", Rr = "22px", Ar = "15pt", Br = "22px", Hr = "26px", zr = "17pt", Or = "27px", Wr = "36px", Ur = "20pt", Gr = "33px", Vr = "48px", Yr = "24pt", hs = "16px", ms = "24px", Nt = {
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
}, Et = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Bx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: rm,
  AnimationDurationNormal: am,
  AnimationDurationSlow: sm,
  AnimationEasingBounce: cm,
  AnimationEasingEaseIn: om,
  AnimationEasingEaseInOut: lm,
  AnimationEasingEaseOut: im,
  BorderColorCard: pl,
  BorderColorCardHover: hl,
  BorderColorDefault: ul,
  BorderColorError: ml,
  BorderColorForm: fl,
  BorderRadiusLarge: km,
  BorderRadiusMedium: Sm,
  BorderRadiusNone: _m,
  BorderRadiusSmall: wm,
  BorderWidthCardBottom: xm,
  BorderWidthDefault: hm,
  BorderWidthFormElement: mm,
  BorderWidthFormElementError: gm,
  BorderWidthPanel: bm,
  BorderWidthTableCell: vm,
  BorderWidthTableHeader: ym,
  BreakpointDesktop: ax,
  BreakpointLargeDesktop: sx,
  BreakpointMobile: nx,
  BreakpointTablet: rx,
  ButtonBorderRadius: Qg,
  ButtonBorderWidth: Jg,
  ButtonPrimaryBackgroundActive: Hg,
  ButtonPrimaryBackgroundDefault: Ag,
  ButtonPrimaryBackgroundDisabled: zg,
  ButtonPrimaryBackgroundHover: Bg,
  ButtonPrimaryBorderDefault: Ug,
  ButtonPrimaryBorderFocus: Gg,
  ButtonPrimaryTextDefault: Og,
  ButtonPrimaryTextDisabled: Wg,
  ButtonSecondaryBackgroundActive: Kg,
  ButtonSecondaryBackgroundDefault: Vg,
  ButtonSecondaryBackgroundHover: qg,
  ButtonSecondaryBackgroundSolid: Yg,
  ButtonSecondaryBorderDefault: Zg,
  ButtonSecondaryTextDefault: Xg,
  ButtonShadowSize: e0,
  ButtonSpacingPaddingHorizontalDesktop: Rl,
  ButtonSpacingPaddingHorizontalMobile: Fl,
  ButtonSpacingPaddingVerticalDesktop: El,
  ButtonSpacingPaddingVerticalMobile: Pl,
  ButtonTypographyWeight: t0,
  CardBackgroundDefault: n0,
  CardBorderBottom: s0,
  CardBorderDefault: r0,
  CardBorderHover: a0,
  CardBorderWidthBottom: d0,
  CardBorderWidthDefault: c0,
  CardShadowDefault: u0,
  CardShadowHover: f0,
  CardSpacingHeadingMargin: Hl,
  CardSpacingPaddingDesktop: Bl,
  CardSpacingPaddingMobile: Al,
  CardTextDescription: i0,
  CardTextHeading: o0,
  CardTextLink: l0,
  ColorBorderDefault: Fm,
  ColorBorderSecondary: Em,
  ColorButtonLoginActive: cg,
  ColorButtonLoginBackground: ig,
  ColorButtonLoginHover: lg,
  ColorButtonLoginShadow: dg,
  ColorButtonPrimaryActive: Wm,
  ColorButtonPrimaryBackground: Hm,
  ColorButtonPrimaryHover: Om,
  ColorButtonPrimaryShadow: Um,
  ColorButtonPrimaryText: zm,
  ColorButtonReverseActive: tg,
  ColorButtonReverseBackground: Jm,
  ColorButtonReverseHover: eg,
  ColorButtonReverseShadow: ng,
  ColorButtonReverseText: Qm,
  ColorButtonSecondaryActive: Xm,
  ColorButtonSecondaryBackground: Gm,
  ColorButtonSecondaryBackgroundSolid: Vm,
  ColorButtonSecondaryBorder: Ym,
  ColorButtonSecondaryHover: Km,
  ColorButtonSecondaryShadow: Zm,
  ColorButtonSecondaryText: qm,
  ColorButtonWarningActive: sg,
  ColorButtonWarningBackground: rg,
  ColorButtonWarningHover: ag,
  ColorButtonWarningShadow: og,
  ColorError: Rm,
  ColorFocusBackground: Lm,
  ColorFocusText: Pm,
  ColorFormBackground: Bm,
  ColorFormBorder: Am,
  ColorGrey1: Dl,
  ColorGrey2: $l,
  ColorGrey3: Il,
  ColorGrey4: Ml,
  ColorGrey5: Ll,
  ColorLinkActive: Im,
  ColorLinkDefault: Dm,
  ColorLinkHover: $m,
  ColorLinkVisited: Mm,
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
  ColorTextPrimary: Cm,
  ColorTextPrint: Tm,
  ColorTextReverse: Nm,
  ColorTextSecondary: jm,
  ComponentBlur: Lg,
  ComponentBreadcrumbChevronMarginLeft: Cg,
  ComponentBreadcrumbChevronMarginRight: jg,
  ComponentBreadcrumbPaddingTopDesktop: Tg,
  ComponentBreadcrumbPaddingTopMobile: Ng,
  ComponentButtonPaddingDesktopHorizontal: hg,
  ComponentButtonPaddingDesktopVertical: pg,
  ComponentButtonPaddingMobileHorizontal: fg,
  ComponentButtonPaddingMobileVertical: ug,
  ComponentButtonShadowSize: mg,
  ComponentCardHeadingMargin: wg,
  ComponentCardPaddingDesktop: _g,
  ComponentCardPaddingMobile: vg,
  ComponentDetails: Fg,
  ComponentExpander: Eg,
  ComponentFormCheckboxLabelPadding: yg,
  ComponentFormCheckboxSize: bg,
  ComponentFormInputMinHeight: gg,
  ComponentFormInputPadding: xg,
  ComponentLink: Pg,
  ComponentPagination: Rg,
  ComponentPanelPaddingDesktop: kg,
  ComponentPanelPaddingMobile: Sg,
  ComponentSpread: Mg,
  ComponentSummaryListCellPaddingHorizontal: $g,
  ComponentSummaryListCellPaddingVertical: Dg,
  ComponentSummaryListRowMargin: Ig,
  ElevationHigh: Ax,
  ElevationLow: Ex,
  ElevationMedium: Rx,
  ElevationNone: Fx,
  FocusOutlineOffset: Ix,
  FocusOutlineStyle: Mx,
  FocusOutlineWidth: $x,
  FocusShadowButton: Px,
  FocusShadowInput: Lx,
  FontFamilyBase: _r,
  FontFamilyFallback: wr,
  FontFamilyPrint: Sr,
  FontLineHeightBase: ms,
  FontSize14Mobile: Nr,
  FontSize14Print: Dr,
  FontSize14Tablet: Tr,
  FontSize16Mobile: $r,
  FontSize16Print: Mr,
  FontSize16Tablet: Ir,
  FontSize19Mobile: Lr,
  FontSize19Print: Fr,
  FontSize19Tablet: Pr,
  FontSize22Mobile: Er,
  FontSize22Print: Ar,
  FontSize22Tablet: Rr,
  FontSize26Mobile: Br,
  FontSize26Print: zr,
  FontSize26Tablet: Hr,
  FontSize36Mobile: Or,
  FontSize36Print: Ur,
  FontSize36Tablet: Wr,
  FontSize48Mobile: Gr,
  FontSize48Print: Yr,
  FontSize48Tablet: Vr,
  FontSizeBase: hs,
  FontWeightBold: Cr,
  FontWeightLight: jr,
  FontWeightNormal: kr,
  FormBorderRadius: M0,
  FormBorderWidthDefault: $0,
  FormBorderWidthError: I0,
  FormErrorTextDefault: N0,
  FormErrorTypographyWeight: T0,
  FormHintTextDefault: D0,
  FormInputBackgroundDefault: p0,
  FormInputBackgroundDisabled: m0,
  FormInputBackgroundError: g0,
  FormInputBackgroundFocus: h0,
  FormInputBorderDefault: x0,
  FormInputBorderDisabled: v0,
  FormInputBorderError: y0,
  FormInputBorderFocus: b0,
  FormInputTextDefault: _0,
  FormInputTextDisabled: S0,
  FormInputTextPlaceholder: w0,
  FormLabelTextDefault: k0,
  FormLabelTextRequired: C0,
  FormLabelTypographyWeight: j0,
  FormSpacingCheckboxLabelPadding: Ul,
  FormSpacingCheckboxSize: Wl,
  FormSpacingInputMinHeight: Ol,
  FormSpacingInputPadding: zl,
  GridGutter: ix,
  GridGutterHalf: lx,
  GridPageWidth: ox,
  HeadingsNhsukHeadingL: Tt,
  HeadingsNhsukHeadingM: Dt,
  HeadingsNhsukHeadingS: $t,
  HeadingsNhsukHeadingXl: Nt,
  HeadingsNhsukHeadingXs: It,
  LayoutColumnActions: tx,
  LayoutColumnFull: Z0,
  LayoutColumnHalf: J0,
  LayoutColumnQuarter: ex,
  LayoutColumnThird: Q0,
  LayoutContainerMaxWidth: X0,
  ParagraphsBody: Mt,
  ParagraphsBodyLarge: Lt,
  ParagraphsBodySmall: Pt,
  ParagraphsLedeText: Ft,
  ParagraphsLedeTextSmall: Et,
  ShadowButtonDefault: kx,
  ShadowButtonFocus: Nx,
  ShadowButtonSecondary: Cx,
  ShadowButtonWarning: jx,
  ShadowCardDefault: Tx,
  ShadowCardHover: Dx,
  SizeButtonMinHeightDesktop: K0,
  SizeButtonMinHeightMobile: q0,
  SizeFormControlLarge: H0,
  SizeFormControlMedium: B0,
  SizeFormControlSmall: A0,
  SizeFormInputWidth2xl: V0,
  SizeFormInputWidth3xl: Y0,
  SizeFormInputWidthLg: U0,
  SizeFormInputWidthMd: W0,
  SizeFormInputWidthSm: O0,
  SizeFormInputWidthXl: G0,
  SizeFormInputWidthXs: z0,
  SizeIconExtraLarge: E0,
  SizeIconLarge: F0,
  SizeIconMedium: P0,
  SizeIconNhsDefault: R0,
  SizeIconSmall: L0,
  Spacing0: Gl,
  Spacing1: Vl,
  Spacing2: Yl,
  Spacing3: ql,
  Spacing4: Kl,
  Spacing5: Xl,
  Spacing6: Zl,
  Spacing7: Jl,
  Spacing8: Ql,
  Spacing9: ec,
  SpacingResponsive0Mobile: qa,
  SpacingResponsive0Tablet: Ka,
  SpacingResponsive1Mobile: Xa,
  SpacingResponsive1Tablet: Za,
  SpacingResponsive2Mobile: Ja,
  SpacingResponsive2Tablet: Qa,
  SpacingResponsive3Mobile: es,
  SpacingResponsive3Tablet: ts,
  SpacingResponsive4Mobile: ns,
  SpacingResponsive4Tablet: rs,
  SpacingResponsive5Mobile: as,
  SpacingResponsive5Tablet: ss,
  SpacingResponsive6Mobile: os,
  SpacingResponsive6Tablet: is,
  SpacingResponsive7Mobile: ls,
  SpacingResponsive7Tablet: cs,
  SpacingResponsive8Mobile: ds,
  SpacingResponsive8Tablet: us,
  SpacingResponsive9Mobile: fs,
  SpacingResponsive9Tablet: ps,
  StateDisabledBackground: _x,
  StateDisabledBorder: wx,
  StateDisabledText: Sx,
  StateErrorBackground: cx,
  StateErrorBorder: dx,
  StateErrorText: ux,
  StateInfoBackground: bx,
  StateInfoBorder: yx,
  StateInfoText: vx,
  StateSuccessBackground: fx,
  StateSuccessBorder: px,
  StateSuccessText: hx,
  StateWarningBackground: mx,
  StateWarningBorder: gx,
  StateWarningText: xx,
  TransitionButtonDefault: dm,
  TransitionButtonShadow: um,
  TransitionCardHover: pm,
  TransitionInputFocus: fm
}, Symbol.toStringTag, { value: "Module" })), Pb = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Fb = ({
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
), Eb = ({
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
), Rb = ({
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
), Ab = ({
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
), Bb = ({
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
), Hb = ({
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
), zb = ({
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
), Ob = ({
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
), Wb = ({
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
), Ub = ({
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
), Gb = () => Me(() => Bx, []), Vb = () => Me(() => ({
  // Border colors
  BorderColorDefault: ul,
  BorderColorForm: fl,
  BorderColorCard: pl,
  BorderColorCardHover: hl,
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
}), []), Yb = () => Me(() => ({
  Spacing0: Gl,
  Spacing1: Vl,
  Spacing2: Yl,
  Spacing3: ql,
  Spacing4: Kl,
  Spacing5: Xl,
  Spacing6: Zl,
  Spacing7: Jl,
  Spacing8: Ql,
  Spacing9: ec
}), []), qb = () => Me(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Nr,
    Size16: $r,
    Size19: Lr,
    Size22: Er,
    Size26: Br,
    Size36: Or,
    Size48: Gr
  },
  Tablet: {
    Size14: Tr,
    Size16: Ir,
    Size19: Pr,
    Size22: Rr,
    Size26: Hr,
    Size36: Wr,
    Size48: Vr
  },
  Print: {
    Size14: Dr,
    Size16: Mr,
    Size19: Fr,
    Size22: Ar,
    Size26: zr,
    Size36: Ur,
    Size48: Yr
  },
  Family: {
    Base: _r,
    Fallback: wr,
    Print: Sr
  },
  Weight: {
    Normal: kr,
    Bold: Cr,
    Light: jr
  },
  Base: {
    Size: hs,
    LineHeight: ms
  },
  // Backward compatibility - individual exports
  FontFamilyBase: _r,
  FontFamilyFallback: wr,
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
  FontSize22Mobile: Er,
  FontSize22Tablet: Rr,
  FontSize22Print: Ar,
  FontSize26Mobile: Br,
  FontSize26Tablet: Hr,
  FontSize26Print: zr,
  FontSize36Mobile: Or,
  FontSize36Tablet: Wr,
  FontSize36Print: Ur,
  FontSize48Mobile: Gr,
  FontSize48Tablet: Vr,
  FontSize48Print: Yr,
  FontSizeBase: hs,
  FontLineHeightBase: ms
}), []), Kb = () => Me(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: qa,
    Size1: Xa,
    Size2: Ja,
    Size3: es,
    Size4: ns,
    Size5: as,
    Size6: os,
    Size7: ls,
    Size8: ds,
    Size9: fs
  },
  Tablet: {
    Size0: Ka,
    Size1: Za,
    Size2: Qa,
    Size3: ts,
    Size4: rs,
    Size5: ss,
    Size6: is,
    Size7: cs,
    Size8: us,
    Size9: ps
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: qa,
  SpacingResponsive0Tablet: Ka,
  SpacingResponsive1Mobile: Xa,
  SpacingResponsive1Tablet: Za,
  SpacingResponsive2Mobile: Ja,
  SpacingResponsive2Tablet: Qa,
  SpacingResponsive3Mobile: es,
  SpacingResponsive3Tablet: ts,
  SpacingResponsive4Mobile: ns,
  SpacingResponsive4Tablet: rs,
  SpacingResponsive5Mobile: as,
  SpacingResponsive5Tablet: ss,
  SpacingResponsive6Mobile: os,
  SpacingResponsive6Tablet: is,
  SpacingResponsive7Mobile: ls,
  SpacingResponsive7Tablet: cs,
  SpacingResponsive8Mobile: ds,
  SpacingResponsive8Tablet: us,
  SpacingResponsive9Mobile: fs,
  SpacingResponsive9Tablet: ps
}), []), Xb = () => Me(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Pl,
  ButtonSpacingPaddingHorizontalMobile: Fl,
  ButtonSpacingPaddingVerticalDesktop: El,
  ButtonSpacingPaddingHorizontalDesktop: Rl,
  // Card spacing	
  CardSpacingPaddingMobile: Al,
  CardSpacingPaddingDesktop: Bl,
  CardSpacingHeadingMargin: Hl,
  // Form spacing
  FormSpacingInputPadding: zl,
  FormSpacingInputMinHeight: Ol,
  FormSpacingCheckboxSize: Wl,
  FormSpacingCheckboxLabelPadding: Ul
}), []), Zb = () => Me(() => ({
  xl: Nt,
  l: Tt,
  m: Dt,
  s: $t,
  xs: It
}), []), Jb = () => Me(() => ({
  body: Mt,
  bodyLarge: Lt,
  bodySmall: Pt,
  ledeText: Ft,
  ledeTextSmall: Et
}), []), Qb = () => Me(() => ({
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
    ledeTextSmall: Et
  },
  fonts: {
    family: {
      base: _r,
      fallback: wr,
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
        size22: Er,
        size26: Br,
        size36: Or,
        size48: Gr
      },
      tablet: {
        size14: Tr,
        size16: Ir,
        size19: Pr,
        size22: Rr,
        size26: Hr,
        size36: Wr,
        size48: Vr
      },
      print: {
        size14: Dr,
        size16: Mr,
        size19: Fr,
        size22: Ar,
        size26: zr,
        size36: Ur,
        size48: Yr
      }
    }
  }
}), []);
function ey(e = {}) {
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
function ty(e = {}) {
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
function ny(e = {}) {
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
const ry = '"Frutiger W01", Arial, Helvetica, sans-serif', ay = "Arial, Helvetica, sans-serif";
async function sy() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Go as Account,
  Ux as ActionLink,
  yb as AdaptiveDataGrid,
  rm as AnimationDurationFast,
  am as AnimationDurationNormal,
  sm as AnimationDurationSlow,
  cm as AnimationEasingBounce,
  om as AnimationEasingEaseIn,
  lm as AnimationEasingEaseInOut,
  im as AnimationEasingEaseOut,
  Ni as AppointmentCard,
  Nb as AreaSeriesPrimitive,
  Wf as AriaDataGrid,
  Ba as AriaTabsDataGrid,
  yb as AriaTabsDataGridAdaptive,
  Ao as Axis,
  Ma as BackLink,
  Db as BandScalesProvider,
  Tb as BarSeriesPrimitive,
  pl as BorderColorCard,
  hl as BorderColorCardHover,
  ul as BorderColorDefault,
  ml as BorderColorError,
  fl as BorderColorForm,
  km as BorderRadiusLarge,
  Sm as BorderRadiusMedium,
  _m as BorderRadiusNone,
  wm as BorderRadiusSmall,
  xm as BorderWidthCardBottom,
  hm as BorderWidthDefault,
  mm as BorderWidthFormElement,
  gm as BorderWidthFormElementError,
  bm as BorderWidthPanel,
  vm as BorderWidthTableCell,
  ym as BorderWidthTableHeader,
  Nf as Breadcrumb,
  Bc as Breakpoint,
  ax as BreakpointDesktop,
  sx as BreakpointLargeDesktop,
  nx as BreakpointMobile,
  rx as BreakpointTablet,
  it as Button,
  Qg as ButtonBorderRadius,
  Jg as ButtonBorderWidth,
  Hg as ButtonPrimaryBackgroundActive,
  Ag as ButtonPrimaryBackgroundDefault,
  zg as ButtonPrimaryBackgroundDisabled,
  Bg as ButtonPrimaryBackgroundHover,
  Ug as ButtonPrimaryBorderDefault,
  Gg as ButtonPrimaryBorderFocus,
  Og as ButtonPrimaryTextDefault,
  Wg as ButtonPrimaryTextDisabled,
  Kg as ButtonSecondaryBackgroundActive,
  Vg as ButtonSecondaryBackgroundDefault,
  qg as ButtonSecondaryBackgroundHover,
  Yg as ButtonSecondaryBackgroundSolid,
  Zg as ButtonSecondaryBorderDefault,
  Xg as ButtonSecondaryTextDefault,
  e0 as ButtonShadowSize,
  Yo as ButtonSize,
  Rl as ButtonSpacingPaddingHorizontalDesktop,
  Fl as ButtonSpacingPaddingHorizontalMobile,
  El as ButtonSpacingPaddingVerticalDesktop,
  Pl as ButtonSpacingPaddingVerticalMobile,
  t0 as ButtonTypographyWeight,
  Vo as ButtonVariant,
  wi as Card,
  n0 as CardBackgroundDefault,
  s0 as CardBorderBottom,
  r0 as CardBorderDefault,
  a0 as CardBorderHover,
  d0 as CardBorderWidthBottom,
  c0 as CardBorderWidthDefault,
  ib as CardGroup,
  lb as CardGroupItem,
  u0 as CardShadowDefault,
  f0 as CardShadowHover,
  Hl as CardSpacingHeadingMargin,
  Bl as CardSpacingPaddingDesktop,
  Al as CardSpacingPaddingMobile,
  i0 as CardTextDescription,
  o0 as CardTextHeading,
  l0 as CardTextLink,
  cb as CareCard,
  Gx as CharacterCount,
  Ib as ChartEnhancer,
  $b as ChartNoScript,
  Hp as ChartRoot,
  jc as Checkbox,
  $c as Checkboxes,
  Fm as ColorBorderDefault,
  Em as ColorBorderSecondary,
  cg as ColorButtonLoginActive,
  ig as ColorButtonLoginBackground,
  lg as ColorButtonLoginHover,
  dg as ColorButtonLoginShadow,
  Wm as ColorButtonPrimaryActive,
  Hm as ColorButtonPrimaryBackground,
  Om as ColorButtonPrimaryHover,
  Um as ColorButtonPrimaryShadow,
  zm as ColorButtonPrimaryText,
  tg as ColorButtonReverseActive,
  Jm as ColorButtonReverseBackground,
  eg as ColorButtonReverseHover,
  ng as ColorButtonReverseShadow,
  Qm as ColorButtonReverseText,
  Xm as ColorButtonSecondaryActive,
  Gm as ColorButtonSecondaryBackground,
  Vm as ColorButtonSecondaryBackgroundSolid,
  Ym as ColorButtonSecondaryBorder,
  Km as ColorButtonSecondaryHover,
  Zm as ColorButtonSecondaryShadow,
  qm as ColorButtonSecondaryText,
  sg as ColorButtonWarningActive,
  rg as ColorButtonWarningBackground,
  ag as ColorButtonWarningHover,
  og as ColorButtonWarningShadow,
  Rm as ColorError,
  Lm as ColorFocusBackground,
  Pm as ColorFocusText,
  Bm as ColorFormBackground,
  Am as ColorFormBorder,
  Dl as ColorGrey1,
  $l as ColorGrey2,
  Il as ColorGrey3,
  Ml as ColorGrey4,
  Ll as ColorGrey5,
  Im as ColorLinkActive,
  Dm as ColorLinkDefault,
  $m as ColorLinkHover,
  Mm as ColorLinkVisited,
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
  Cm as ColorTextPrimary,
  Tm as ColorTextPrint,
  Nm as ColorTextReverse,
  jm as ColorTextSecondary,
  Pn as Column,
  zc as ColumnAlign,
  Lg as ComponentBlur,
  Cg as ComponentBreadcrumbChevronMarginLeft,
  jg as ComponentBreadcrumbChevronMarginRight,
  Tg as ComponentBreadcrumbPaddingTopDesktop,
  Ng as ComponentBreadcrumbPaddingTopMobile,
  hg as ComponentButtonPaddingDesktopHorizontal,
  pg as ComponentButtonPaddingDesktopVertical,
  fg as ComponentButtonPaddingMobileHorizontal,
  ug as ComponentButtonPaddingMobileVertical,
  mg as ComponentButtonShadowSize,
  wg as ComponentCardHeadingMargin,
  _g as ComponentCardPaddingDesktop,
  vg as ComponentCardPaddingMobile,
  Fg as ComponentDetails,
  Eg as ComponentExpander,
  yg as ComponentFormCheckboxLabelPadding,
  bg as ComponentFormCheckboxSize,
  gg as ComponentFormInputMinHeight,
  xg as ComponentFormInputPadding,
  Pg as ComponentLink,
  Rg as ComponentPagination,
  kg as ComponentPanelPaddingDesktop,
  Sg as ComponentPanelPaddingMobile,
  Mg as ComponentSpread,
  $g as ComponentSummaryListCellPaddingHorizontal,
  Dg as ComponentSummaryListCellPaddingVertical,
  Ig as ComponentSummaryListRowMargin,
  Zo as Container,
  ob as ContentsList,
  tc as DEFAULT_FONT_CONFIG,
  gb as DashboardSummaryGrid,
  eb as DateInput,
  Pf as Details,
  Ff as DoDontList,
  Ax as ElevationHigh,
  Ex as ElevationLow,
  Rx as ElevationMedium,
  Fx as ElevationNone,
  Us as ErrorMessage,
  Qx as ErrorSummary,
  Ef as Expander,
  dt as FRUTIGER_FONT_FILES,
  bs as Fieldset,
  Hc as Float,
  Ix as FocusOutlineOffset,
  Mx as FocusOutlineStyle,
  $x as FocusOutlineWidth,
  Px as FocusShadowButton,
  Lx as FocusShadowInput,
  _r as FontFamilyBase,
  wr as FontFamilyFallback,
  Sr as FontFamilyPrint,
  ms as FontLineHeightBase,
  Nr as FontSize14Mobile,
  Dr as FontSize14Print,
  Tr as FontSize14Tablet,
  $r as FontSize16Mobile,
  Mr as FontSize16Print,
  Ir as FontSize16Tablet,
  Lr as FontSize19Mobile,
  Fr as FontSize19Print,
  Pr as FontSize19Tablet,
  Er as FontSize22Mobile,
  Ar as FontSize22Print,
  Rr as FontSize22Tablet,
  Br as FontSize26Mobile,
  zr as FontSize26Print,
  Hr as FontSize26Tablet,
  Or as FontSize36Mobile,
  Ur as FontSize36Print,
  Wr as FontSize36Tablet,
  Gr as FontSize48Mobile,
  Yr as FontSize48Print,
  Vr as FontSize48Tablet,
  hs as FontSizeBase,
  Cr as FontWeightBold,
  jr as FontWeightLight,
  kr as FontWeightNormal,
  ni as Footer,
  M0 as FormBorderRadius,
  $0 as FormBorderWidthDefault,
  I0 as FormBorderWidthError,
  N0 as FormErrorTextDefault,
  T0 as FormErrorTypographyWeight,
  D0 as FormHintTextDefault,
  p0 as FormInputBackgroundDefault,
  m0 as FormInputBackgroundDisabled,
  g0 as FormInputBackgroundError,
  h0 as FormInputBackgroundFocus,
  x0 as FormInputBorderDefault,
  v0 as FormInputBorderDisabled,
  y0 as FormInputBorderError,
  b0 as FormInputBorderFocus,
  _0 as FormInputTextDefault,
  S0 as FormInputTextDisabled,
  w0 as FormInputTextPlaceholder,
  k0 as FormLabelTextDefault,
  C0 as FormLabelTextRequired,
  j0 as FormLabelTypographyWeight,
  Ul as FormSpacingCheckboxLabelPadding,
  Wl as FormSpacingCheckboxSize,
  Ol as FormSpacingInputMinHeight,
  zl as FormSpacingInputPadding,
  ab as GanttChart,
  La as Grid,
  ix as GridGutter,
  lx as GridGutterHalf,
  Op as GridLines,
  ox as GridPageWidth,
  tn as GridWidth,
  ti as Header,
  rb as HeaderSSR,
  Jc as HeaderSearch,
  ti as HeaderStatic,
  Bt as Heading,
  Tt as HeadingsNhsukHeadingL,
  Dt as HeadingsNhsukHeadingM,
  $t as HeadingsNhsukHeadingS,
  Nt as HeadingsNhsukHeadingXl,
  It as HeadingsNhsukHeadingXs,
  ed as Hero,
  Ko as Hint,
  hb as Images,
  gs as Input,
  db as InsetText,
  xs as Label,
  tx as LayoutColumnActions,
  Z0 as LayoutColumnFull,
  J0 as LayoutColumnHalf,
  ex as LayoutColumnQuarter,
  Q0 as LayoutColumnThird,
  X0 as LayoutContainerMaxWidth,
  jb as Legend,
  zp as LineScalesProvider,
  kh as LineSeriesPrimitive,
  Uc as List,
  Jo as MainWrapper,
  Ti as MedicationCard,
  Mb as MetricCard,
  Hb as NHSBodyText,
  zb as NHSBodyTextLarge,
  Ob as NHSBodyTextSmall,
  Fb as NHSHeading1,
  Eb as NHSHeading2,
  Rb as NHSHeading3,
  Ab as NHSHeading4,
  Bb as NHSHeading5,
  Wb as NHSLedeText,
  Ub as NHSLedeTextSmall,
  nb as NHSThemeProvider,
  ay as NHS_FALLBACK_FONT_STACK,
  ry as NHS_FONT_STACK,
  Ip as NavigationSplitView,
  _b as PageTemplate,
  sb as Pagination,
  Tf as Panel,
  Mt as ParagraphsBody,
  Lt as ParagraphsBodyLarge,
  Pt as ParagraphsBodySmall,
  Ft as ParagraphsLedeText,
  Et as ParagraphsLedeTextSmall,
  ji as PatientCard,
  Pp as ProductRoadmap,
  Vx as Radios,
  Yx as RadiosServer,
  yb as ResponsiveDataGrid,
  vb as ResponsiveDataGridDemo,
  nn as Row,
  Lb as SPC,
  Qh as SPCChart,
  rr as Select,
  Fc as SelectOption,
  kx as ShadowButtonDefault,
  Nx as ShadowButtonFocus,
  Cx as ShadowButtonSecondary,
  jx as ShadowButtonWarning,
  Tx as ShadowCardDefault,
  Dx as ShadowCardHover,
  K0 as SizeButtonMinHeightDesktop,
  q0 as SizeButtonMinHeightMobile,
  H0 as SizeFormControlLarge,
  B0 as SizeFormControlMedium,
  A0 as SizeFormControlSmall,
  V0 as SizeFormInputWidth2xl,
  Y0 as SizeFormInputWidth3xl,
  U0 as SizeFormInputWidthLg,
  W0 as SizeFormInputWidthMd,
  O0 as SizeFormInputWidthSm,
  G0 as SizeFormInputWidthXl,
  z0 as SizeFormInputWidthXs,
  E0 as SizeIconExtraLarge,
  F0 as SizeIconLarge,
  P0 as SizeIconMedium,
  R0 as SizeIconNhsDefault,
  L0 as SizeIconSmall,
  _i as SkipLink,
  mb as SlotMatrix,
  xb as SortStatusControl,
  Gl as Spacing0,
  Vl as Spacing1,
  Yl as Spacing2,
  ql as Spacing3,
  Kl as Spacing4,
  Xl as Spacing5,
  Zl as Spacing6,
  Jl as Spacing7,
  Ql as Spacing8,
  ec as Spacing9,
  qa as SpacingResponsive0Mobile,
  Ka as SpacingResponsive0Tablet,
  Xa as SpacingResponsive1Mobile,
  Za as SpacingResponsive1Tablet,
  Ja as SpacingResponsive2Mobile,
  Qa as SpacingResponsive2Tablet,
  es as SpacingResponsive3Mobile,
  ts as SpacingResponsive3Tablet,
  ns as SpacingResponsive4Mobile,
  rs as SpacingResponsive4Tablet,
  as as SpacingResponsive5Mobile,
  ss as SpacingResponsive5Tablet,
  os as SpacingResponsive6Mobile,
  is as SpacingResponsive6Tablet,
  ls as SpacingResponsive7Mobile,
  cs as SpacingResponsive7Tablet,
  ds as SpacingResponsive8Mobile,
  us as SpacingResponsive8Tablet,
  fs as SpacingResponsive9Mobile,
  ps as SpacingResponsive9Tablet,
  qx as SpacingUtilities,
  _x as StateDisabledBackground,
  wx as StateDisabledBorder,
  Sx as StateDisabledText,
  cx as StateErrorBackground,
  dx as StateErrorBorder,
  ux as StateErrorText,
  bx as StateInfoBackground,
  yx as StateInfoBorder,
  vx as StateInfoText,
  fx as StateSuccessBackground,
  px as StateSuccessBorder,
  hx as StateSuccessText,
  mx as StateWarningBackground,
  gx as StateWarningBorder,
  xx as StateWarningText,
  Of as SummaryCard,
  ub as SummaryList,
  Ot as Table,
  fb as Tabs,
  He as Tag,
  Rf as TaskList,
  Mc as Textarea,
  Cb as TooltipOverlay,
  Sh as TooltipProvider,
  wb as TransactionalPageTemplate,
  dm as TransitionButtonDefault,
  um as TransitionButtonShadow,
  pm as TransitionCardHover,
  fm as TransitionInputFocus,
  kb as VisibilityProvider,
  Di as VitalsCard,
  Jx as WIDTH_FRACTIONS,
  pb as WarningCallout,
  Pi as WidthContainer,
  Xx as WidthUtilities,
  sy as checkFrutigerLoaded,
  Ds as createGenericTabsConfig,
  bb as createTCHTabsConfig,
  ty as generateFrutigerFontFace,
  Pb as getResponsiveStyles,
  Kx as getSpacingClass,
  Zx as getWidthClass,
  ny as preloadFrutigerFonts,
  ep as tchDataConfig,
  Vb as useColors,
  Xb as useComponentSpacing,
  Zb as useNHSHeadings,
  Jb as useNHSParagraphs,
  tb as useNHSTheme,
  Qb as useNHSTypographySystem,
  ey as useNavigationSplitDrill,
  Tp as useNavigationSplitUrlSync,
  Ei as useNhsFdpBreakpoints,
  Kb as useResponsiveSpacing,
  Sb as useResponsiveValue,
  Yb as useSpacing,
  Gb as useTokens,
  qb as useTypography
};
//# sourceMappingURL=index.esm.js.map
