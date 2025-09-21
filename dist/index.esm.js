import * as O from "react";
import bt, { useState as He, useEffect as Ve, useCallback as ge, useRef as ze, createElement as bi, useMemo as De, useContext as yi, createContext as vi, forwardRef as Hn, useImperativeHandle as wi, useReducer as Si, memo as Xc, useId as Sr } from "react";
import { createPortal as Qc } from "react-dom";
function Kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hr = { exports: {} }, On = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ao;
function ed() {
  if (ao) return On;
  ao = 1;
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
  return On.Fragment = t, On.jsx = n, On.jsxs = n, On;
}
var Un = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var so;
function td() {
  return so || (so = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === S ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case g:
          return "Fragment";
        case T:
          return "Profiler";
        case h:
          return "StrictMode";
        case x:
          return "Suspense";
        case M:
          return "SuspenseList";
        case b:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case y:
            return "Portal";
          case N:
            return (R.displayName || "Context") + ".Provider";
          case C:
            return (R._context.displayName || "Context") + ".Consumer";
          case j:
            var K = R.render;
            return R = R.displayName, R || (R = K.displayName || K.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case D:
            return K = R.displayName || null, K !== null ? K : e(R.type) || "Memo";
          case _:
            K = R._payload, R = R._init;
            try {
              return e(R(K));
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
        var K = !1;
      } catch {
        K = !0;
      }
      if (K) {
        K = console;
        var U = K.error, X = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return U.call(
          K,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          X
        ), t(R);
      }
    }
    function a(R) {
      if (R === g) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === _)
        return "<...>";
      try {
        var K = e(R);
        return K ? "<" + K + ">" : "<...>";
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
      if (L.call(R, "key")) {
        var K = Object.getOwnPropertyDescriptor(R, "key").get;
        if (K && K.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function l(R, K) {
      function U() {
        A || (A = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          K
        ));
      }
      U.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: U,
        configurable: !0
      });
    }
    function d() {
      var R = e(this.type);
      return I[R] || (I[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function c(R, K, U, X, Y, Q, ce, ie) {
      return U = Q.ref, R = {
        $$typeof: p,
        type: R,
        key: K,
        props: Q,
        _owner: Y
      }, (U !== void 0 ? U : null) !== null ? Object.defineProperty(R, "ref", {
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
        value: ce
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ie
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function u(R, K, U, X, Y, Q, ce, ie) {
      var ne = K.children;
      if (ne !== void 0)
        if (X)
          if (B(ne)) {
            for (X = 0; X < ne.length; X++)
              f(ne[X]);
            Object.freeze && Object.freeze(ne);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(ne);
      if (L.call(K, "key")) {
        ne = e(R);
        var ee = Object.keys(K).filter(function(se) {
          return se !== "key";
        });
        X = 0 < ee.length ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}", G[ne + X] || (ee = 0 < ee.length ? "{" + ee.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          X,
          ne,
          ee,
          ne
        ), G[ne + X] = !0);
      }
      if (ne = null, U !== void 0 && (n(U), ne = "" + U), i(K) && (n(K.key), ne = "" + K.key), "key" in K) {
        U = {};
        for (var te in K)
          te !== "key" && (U[te] = K[te]);
      } else U = K;
      return ne && l(
        U,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), c(
        R,
        ne,
        Q,
        Y,
        s(),
        U,
        ce,
        ie
      );
    }
    function f(R) {
      typeof R == "object" && R !== null && R.$$typeof === p && R._store && (R._store.validated = 1);
    }
    var m = bt, p = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), N = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), S = Symbol.for("react.client.reference"), k = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, B = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var A, I = {}, H = m.react_stack_bottom_frame.bind(
      m,
      o
    )(), re = $(a(o)), G = {};
    Un.Fragment = g, Un.jsx = function(R, K, U, X, Y) {
      var Q = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        R,
        K,
        U,
        !1,
        X,
        Y,
        Q ? Error("react-stack-top-frame") : H,
        Q ? $(a(R)) : re
      );
    }, Un.jsxs = function(R, K, U, X, Y) {
      var Q = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        R,
        K,
        U,
        !0,
        X,
        Y,
        Q ? Error("react-stack-top-frame") : H,
        Q ? $(a(R)) : re
      );
    };
  })()), Un;
}
var oo;
function nd() {
  return oo || (oo = 1, process.env.NODE_ENV === "production" ? hr.exports = ed() : hr.exports = td()), hr.exports;
}
var r = nd(), Ma = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var io;
function rd() {
  return io || (io = 1, (function(e) {
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
  })(Ma)), Ma.exports;
}
var ad = rd();
const ve = /* @__PURE__ */ Kc(ad), sy = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: a,
  ...s
}) => {
  const o = ve(
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
}, _i = ({
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
    return o.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: o.href,
        children: d
      }
    ) : o.action ? /* @__PURE__ */ r.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: o.action,
        method: o.method || "post",
        children: /* @__PURE__ */ r.jsx("button", { className: "nhsuk-account__button", type: "submit", role: "button", children: d })
      }
    ) : /* @__PURE__ */ r.jsx("span", { children: d });
  };
  return /* @__PURE__ */ r.jsx(
    "nav",
    {
      className: ve(
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
var ki = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(ki || {}), Ci = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(Ci || {});
function sd(e) {
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
const { forwardRef: od, useCallback: nn, useState: Ia } = O;
function id(e, t) {
  const {
    children: n,
    variant: a = ki.Primary,
    size: s = Ci.Default,
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, u] = Ia(!1), [f, m] = Ia(!1), [p, y] = Ia(!1), g = sd({
    variant: a,
    size: s,
    fullWidth: o,
    className: i,
    preventDoubleClick: l,
    href: "href" in d ? d.href : void 0
  }), h = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", T = {
    ...c && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...p && { "data-focused": "true" },
    ...h && { "data-disabled": "true" }
  }, C = nn(
    () => !h && u(!0),
    [h]
  ), N = nn(() => u(!1), []), j = nn(
    () => !h && m(!0),
    [h]
  ), x = nn(() => {
    m(!1), u(!1);
  }, []), M = nn(() => y(!0), []), D = nn(() => y(!1), []), _ = nn(
    (ne) => {
      ne.key === " " && ("href" in d || ne.currentTarget.getAttribute("role") === "button") && (ne.preventDefault(), ne.currentTarget.click());
    },
    [d]
  ), b = nn(
    (ne) => {
      if (l) {
        const ee = ne.currentTarget;
        if (ee.getAttribute("data-processing") === "true") {
          ne.preventDefault();
          return;
        }
        ee.setAttribute("data-processing", "true"), setTimeout(() => {
          ee.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in d && d.href) {
    const {
      id: ne,
      style: ee,
      title: te,
      ["aria-label"]: se,
      ["aria-describedby"]: z,
      ["aria-labelledby"]: oe,
      tabIndex: ae,
      ...ue
    } = d, de = d;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: de.href,
        target: de.target,
        rel: de.rel,
        className: g.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...T,
        ...l && { "data-prevent-double-click": "true" },
        ...ue,
        onKeyDown: (we) => {
          de.onKeyDown?.(we), _(we);
        },
        onClick: (we) => {
          de.onClick?.(we), b(we);
        },
        onMouseDown: (we) => {
          de.onMouseDown?.(we), C();
        },
        onMouseUp: (we) => {
          de.onMouseUp?.(we), N();
        },
        onMouseEnter: (we) => {
          de.onMouseEnter?.(we), j();
        },
        onMouseLeave: (we) => {
          de.onMouseLeave?.(we), x();
        },
        onFocus: (we) => {
          de.onFocus?.(we), M();
        },
        onBlur: (we) => {
          de.onBlur?.(we), D();
        },
        "aria-disabled": de["aria-disabled"],
        ...de["aria-disabled"] === "true" && { tabIndex: -1 },
        id: ne,
        style: ee,
        title: te,
        "aria-label": se,
        "aria-describedby": z,
        "aria-labelledby": oe,
        tabIndex: ae,
        children: n
      }
    );
  }
  const {
    id: S,
    style: k,
    title: L,
    ["aria-label"]: B,
    ["aria-describedby"]: $,
    ["aria-labelledby"]: A,
    tabIndex: I,
    name: H,
    value: re,
    form: G,
    formAction: R,
    formEncType: K,
    formMethod: U,
    formNoValidate: X,
    formTarget: Y,
    autoFocus: Q,
    ...ce
  } = d, ie = d;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: ie.type || "button",
      disabled: ie.disabled,
      className: g.classes,
      "data-module": "nhs-button",
      ...T,
      ...l && { "data-prevent-double-click": "true" },
      ...ie.disabled && { "aria-disabled": "true" },
      ...ce,
      onKeyDown: (ne) => {
        ie.onKeyDown?.(ne), _(ne);
      },
      onClick: (ne) => {
        ie.onClick?.(ne), b(ne);
      },
      onMouseDown: (ne) => {
        ie.onMouseDown?.(ne), C();
      },
      onMouseUp: (ne) => {
        ie.onMouseUp?.(ne), N();
      },
      onMouseEnter: (ne) => {
        ie.onMouseEnter?.(ne), j();
      },
      onMouseLeave: (ne) => {
        ie.onMouseLeave?.(ne), x();
      },
      onFocus: (ne) => {
        ie.onFocus?.(ne), M();
      },
      onBlur: (ne) => {
        ie.onBlur?.(ne), D();
      },
      id: S,
      style: k,
      title: L,
      "aria-label": B,
      "aria-describedby": $,
      "aria-labelledby": A,
      tabIndex: I,
      name: H,
      value: re,
      form: G,
      formAction: R,
      formEncType: K,
      formMethod: U,
      formNoValidate: X,
      formTarget: Y,
      autoFocus: Q,
      children: n
    }
  );
}
const gt = od(id);
gt.displayName = "Button";
const Ya = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = ve(
    "nhsuk-back-link",
    a
  ), d = ve(
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
function ld(e) {
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
const Ze = ({
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
  const u = ld({ color: a, noBorder: s, closable: o, disabled: l, className: d }), f = (m) => {
    m.preventDefault(), m.stopPropagation(), !l && i && i();
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
}, cd = ({
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
  onFocus: m,
  attributes: p,
  ...y
}) => {
  const [g, h] = He(a), T = n !== void 0, C = T ? n : g;
  Ve(() => {
    T || h(a);
  }, [a, T]);
  const N = (_) => {
    const b = _.target.checked;
    T || h(b), u?.(b, _);
  }, j = i ? `${e}-hint` : void 0, x = l ? `${e}-error` : void 0, M = [j, x].filter(Boolean).join(" ") || void 0, D = ve(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ r.jsx("div", { className: D, ...y, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: o,
        checked: C,
        disabled: s,
        onChange: N,
        onBlur: f,
        onFocus: m,
        "aria-describedby": M,
        ...p
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ r.jsx("div", { id: j, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: x, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
cd.displayName = "Checkbox";
function Ni(e) {
  const n = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    n ? "nhsuk-input--range" : "",
    !n && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: n };
}
const As = ({
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
  width: m = "full",
  inputMode: p,
  autoComplete: y,
  maxLength: g,
  minLength: h,
  pattern: T,
  step: C,
  min: N,
  max: j,
  showValueLabels: x = !1,
  showCurrentValue: M = !1,
  valueLabels: D,
  onChange: _,
  onBlur: b,
  onFocus: S,
  onKeyDown: k,
  ...L
}) => {
  const [B, $] = He(a || s || (n === "range" ? N || "0" : ""));
  Ve(() => {
    a !== void 0 && $(a);
  }, [a]);
  const A = (Y) => {
    const Q = Y.target;
    $(Q.value), ("type" in Y && Y.nativeEvent || Y.type === "keydown") && _?.(Y);
  }, { classes: I, isRange: H } = Ni({ type: n, hasError: c, width: m, className: f }), re = a !== void 0, G = {
    id: e,
    name: t,
    type: n,
    placeholder: o,
    disabled: i,
    readOnly: l,
    required: d,
    "aria-describedby": u,
    inputMode: p,
    autoComplete: y,
    maxLength: g,
    minLength: h,
    pattern: T,
    step: C,
    min: N,
    max: j,
    onChange: A,
    onBlur: b,
    onFocus: S,
    onKeyDown: (Y) => {
      if (H && /[0-9]/.test(Y.key)) {
        const Q = (B?.toString() || "") + Y.key;
        Y.target.value = Q, A(Y);
      }
      k?.(Y);
    },
    ...L
  }, R = !re && s !== void 0 ? { defaultValue: s } : {}, K = re ? { value: a } : {}, U = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: I,
      ...K,
      ...R,
      "data-current-value": B,
      ...G
    }
  ), X = H ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    x && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: D?.min || N || "0" }),
      U(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: D?.max || j || "100" })
    ] }),
    !x && U(),
    M && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      D?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: B })
    ] }) })
  ] }) : null;
  return H ? X : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: I,
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
      inputMode: p,
      autoComplete: y,
      maxLength: g,
      minLength: h,
      pattern: T,
      step: C,
      min: N,
      max: j,
      onChange: _,
      onBlur: b,
      onFocus: S,
      onKeyDown: k,
      ...L
    }
  );
};
function dd(e) {
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
const Es = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: s,
  ...o
}) => {
  const i = dd({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...o, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: s }) : s });
};
function ud(e) {
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
const Ps = ({
  children: e,
  legend: t,
  className: n,
  describedBy: a,
  ...s
}) => {
  const o = ud({
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
function fd(e) {
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
const pd = ({
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
  attributes: m,
  ...p
}) => {
  const [y, g] = He(
    e.filter((_) => _.checked).map((_) => _.value)
  ), h = n || t, T = i ? `${h}-hint` : void 0, C = l ? `${h}-error` : void 0, N = [T, C].filter(Boolean).join(" ") || void 0, j = (_, b) => {
    let S;
    b ? S = [...y, _] : S = y.filter((k) => k !== _), g(S), u?.(S);
  }, x = () => e.map((_, b) => {
    const S = `${h}-${b + 1}`, k = `${S}-conditional`, L = y.includes(_.value), B = _.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: S,
          name: t,
          type: "checkbox",
          value: _.value,
          checked: L,
          disabled: B,
          onChange: ($) => j(_.value, $.target.checked),
          "aria-describedby": _.hint ? `${S}-hint` : N,
          ..._.conditional && {
            "aria-controls": k,
            "aria-expanded": L ? "true" : "false"
          },
          ..._.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: S, children: _.text }),
      _.hint && /* @__PURE__ */ r.jsx("div", { id: `${S}-hint`, className: "nhsuk-checkboxes__hint", children: _.hint }),
      _.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: ve("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !L
          }),
          id: k,
          children: typeof _.conditional == "object" && _.conditional !== null && "label" in _.conditional && "id" in _.conditional && "name" in _.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            _.conditional.label && /* @__PURE__ */ r.jsx(Es, { htmlFor: _.conditional.id, children: _.conditional.label }),
            /* @__PURE__ */ r.jsx(As, { ..._.conditional })
          ] }) : _.conditional
        }
      )
    ] }, _.value);
  }), { classes: M, formGroupClasses: D } = fd({ small: c, className: d, hasError: !!l });
  return /* @__PURE__ */ r.jsx("div", { className: D, ...m, ...p, children: /* @__PURE__ */ r.jsxs(
    Ps,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: N,
      ...f,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: T, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: C, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: M, children: x() })
      ]
    }
  ) });
};
pd.displayName = "Checkboxes";
function hd(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const md = ({
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
  cols: m,
  maxLength: p,
  minLength: y,
  wrap: g = "soft",
  resize: h = "vertical",
  autoComplete: T,
  spellCheck: C,
  onChange: N,
  onBlur: j,
  onFocus: x,
  onKeyDown: M,
  ...D
}) => {
  const { classes: _, describedBy: b } = hd({ hasError: d, resize: h, className: u, describedBy: c });
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
      "aria-describedby": b,
      rows: f,
      cols: m,
      maxLength: p,
      minLength: y,
      wrap: g,
      autoComplete: T,
      spellCheck: C,
      onChange: N,
      onBlur: j,
      onFocus: x,
      onKeyDown: M,
      ...D
    }
  );
};
function gd(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const ji = ({
  id: e,
  className: t,
  children: n,
  ...a
}) => {
  const s = gd({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: s.classes, id: s.id, ...a, children: n });
}, oy = ({
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
  ...m
}) => {
  const p = o ?? i ?? "", [y, g] = He(p), [h, T] = He(0), [C, N] = He(!1), [j, x] = He(!1), M = ge((L) => n ? L.trim() === "" ? 0 : L.trim().split(/\s+/).length : L.length, [n]);
  Ve(() => {
    const L = M(y), B = t || n || 0, $ = B - L, A = Math.floor(B * (a / 100));
    T($), N(L > B), x(L >= A || L > B), u && u(L, $);
  }, [y, t, n, a, M, u]);
  const D = (L) => {
    const B = L.target.value;
    g(B), f && f(L);
  }, _ = () => {
    const L = t || n || 0, B = n ? "word" : "character", $ = n ? "words" : "characters";
    if (!j)
      return `You can enter up to ${L} ${L === 1 ? B : $}`;
    if (C) {
      const A = Math.abs(h);
      return `You have ${A} ${A === 1 ? B : $} too many`;
    } else
      return `You have ${h} ${h === 1 ? B : $} remaining`;
  }, b = ve(
    "nhsuk-character-count",
    d
  ), S = ve(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !j,
      "nhsuk-error-message": C
    },
    c?.classes
  ), k = ve(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": C
    }
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: b,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": n,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ r.jsx(
          md,
          {
            id: e,
            name: s,
            value: o !== void 0 ? y : void 0,
            defaultValue: o === void 0 ? i ?? y : void 0,
            rows: l,
            className: k,
            onChange: D,
            "aria-describedby": `${e}-info`,
            "aria-invalid": C || void 0,
            ...m
          }
        ),
        /* @__PURE__ */ r.jsx(
          ji,
          {
            id: `${e}-info`,
            className: S,
            role: "status",
            "aria-live": "polite",
            children: _()
          }
        )
      ]
    }
  );
};
function xd(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const bd = ({
  value: e,
  disabled: t = !1,
  selected: n = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: s,
  ...o
}) => {
  const i = ve(
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
}, yd = ({
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
  autoComplete: m,
  options: p,
  children: y,
  onChange: g,
  onBlur: h,
  onFocus: T,
  ...C
}) => {
  const { classes: N } = xd({ hasError: l, className: c }), j = () => p ? p.map((M, D) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: M.value,
      disabled: M.disabled,
      "data-initial-selected": M.selected || void 0,
      children: M.text
    },
    `${M.value}-${D}`
  )) : null, x = s === void 0 && a === void 0 && p ? p.find((M) => M.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: N,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: s !== void 0 ? s : x,
      disabled: o,
      required: i,
      "aria-describedby": d,
      multiple: u,
      size: f,
      autoComplete: m,
      onChange: g,
      onBlur: h,
      onFocus: T,
      ...C,
      children: y || j()
    }
  );
}, _r = yd;
_r.Option = bd;
function vd(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function Mi(e, {
  variant: t,
  selectedValue: n,
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
    ...p
  } = e, {
    name: y,
    hasError: g = !1,
    describedBy: h,
    className: T,
    size: C = "normal",
    inline: N = !1,
    options: j,
    ...x
  } = p, { classes: M, describedBy: D } = vd({ hasError: g, size: C, inline: N, className: T, describedBy: h });
  return /* @__PURE__ */ r.jsx(Ps, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: M,
      ...x,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: j.map((_, b) => {
        const S = `${y}-${b}`, k = _.conditional ? `${S}-conditional` : void 0, L = n === _.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: S,
              name: y,
              type: "radio",
              value: _.value,
              disabled: _.disabled,
              ...t === "client" ? {
                checked: L,
                onChange: s,
                onBlur: o,
                onFocus: i,
                onKeyDown: l,
                ref: (B) => {
                  B && d && (d.current[b] = B);
                }
              } : {
                defaultChecked: L,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": D
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: S, children: _.text }),
          _.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: _.hint }),
          _.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: ve("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !L
              }),
              id: k,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof _.conditional == "object" && _.conditional !== null && "label" in _.conditional && "id" in _.conditional && "name" in _.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                _.conditional.label && /* @__PURE__ */ r.jsx(
                  Es,
                  {
                    htmlFor: _.conditional.id,
                    children: _.conditional.label
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  c,
                  {
                    ..._.conditional
                  }
                )
              ] }) : _.conditional
            }
          )
        ] }, _.value);
      })
    }
  ) });
}
const iy = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: s, ...o }) => {
  const [i, l] = He(e || t || ""), d = ze([]), c = ze(i), u = (p) => {
    const y = p.target.value;
    y !== c.current && (c.current = y, l(y), n?.(p));
  }, f = (p) => {
    s?.(p);
  }, m = ge((p) => {
    const { key: y } = p;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(y)) return;
    p.preventDefault();
    const g = d.current.filter((N) => N && !N.disabled), h = g.indexOf(p.currentTarget);
    if (h === -1) return;
    let T = h;
    ["ArrowDown", "ArrowRight"].includes(y) ? T = (h + 1) % g.length : ["ArrowUp", "ArrowLeft"].includes(y) && (T = (h - 1 + g.length) % g.length);
    const C = g[T];
    C && (C.focus(), C.checked || C.click());
  }, []);
  return Mi(
    { value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: s, ...o },
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
      InputComponent: As
    }
  );
};
function wd(e) {
  const {
    id: t,
    name: n,
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
    width: p = "full",
    inputMode: y,
    autoComplete: g,
    maxLength: h,
    minLength: T,
    pattern: C,
    step: N,
    min: j,
    max: x,
    showValueLabels: M = !1,
    showCurrentValue: D = !1,
    valueLabels: _,
    // Strip interactive handlers in server variant
    onChange: b,
    onBlur: S,
    onFocus: k,
    onKeyDown: L,
    ...B
  } = e, { classes: $, isRange: A } = Ni({
    type: a,
    hasError: u,
    width: p,
    className: m
  }), I = {
    id: t,
    name: n,
    type: a,
    placeholder: i,
    disabled: l,
    readOnly: d,
    required: c,
    "aria-describedby": f,
    inputMode: y,
    autoComplete: g,
    maxLength: h,
    minLength: T,
    pattern: C,
    step: N,
    min: j,
    max: x,
    ...B
  };
  if (A) {
    const H = s ?? o ?? (typeof j < "u" ? String(j) : "0"), re = /* @__PURE__ */ r.jsx(
      "input",
      {
        className: $,
        ...s !== void 0 ? { value: s } : {},
        ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
        "data-current-value": H,
        ...I
      }
    );
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      M ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: _?.min || j || "0" }),
        re,
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: _?.max || x || "100" })
      ] }) : re,
      D && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        _?.current || "Current value:",
        " ",
        /* @__PURE__ */ r.jsx("strong", { children: H })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ r.jsx(
    "input",
    {
      className: $,
      ...s !== void 0 ? { value: s } : {},
      ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
      ...I
    }
  );
}
const ly = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return Mi(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: wd
    }
  );
};
var xn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(xn || {}), Sd = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(Sd || {}), _d = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(_d || {}), kd = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(kd || {});
const Ii = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: a,
  style: s,
  ...o
}) => {
  const i = ve(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), l = a ? { maxWidth: a, ...s || {} } : s;
  return /* @__PURE__ */ r.jsx("div", { className: i, style: l, ...o, children: e });
}, an = ({
  children: e,
  className: t,
  style: n,
  align: a,
  rowGap: s,
  ...o
}) => {
  const i = ve(
    "nhsuk-grid-row",
    // Row-specific alignment class to avoid column flex styles
    a ? `nhsuk-grid-row-align-${a}` : void 0,
    t
  );
  return /* @__PURE__ */ r.jsx("div", { className: i, style: n, ...o, children: e });
}, qn = ({
  children: e,
  width: t = xn.Full,
  mobileWidth: n,
  tabletWidth: a,
  desktopWidth: s,
  start: o,
  className: i,
  forceWidth: l = !1,
  style: d,
  align: c,
  ...u
}) => {
  const f = ve(
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
      ...c ? { [`nhsuk-grid-align-${c}`]: !0 } : {}
    },
    i
  );
  return /* @__PURE__ */ r.jsx("div", { className: f, style: d, ...u, children: e });
}, Za = ({
  children: e,
  className: t,
  style: n,
  rowGap: a = 8,
  ...s
}) => {
  const o = bt.Children.toArray(e), i = o[0], l = bt.isValidElement(i) && (i.type === an || typeof i.props == "object" && i.props && "className" in i.props && typeof i.props.className == "string" && i.props.className.includes("nhsuk-grid-row")), d = typeof a == "number" ? `${a}px` : a;
  let c = e;
  if (l)
    c = o.map((u, f) => {
      if (!bt.isValidElement(u)) return u;
      const m = u, p = m.props || {}, y = typeof p.className == "string" ? p.className : "";
      if (!(m.type === an || y.includes("nhsuk-grid-row"))) return u;
      const h = p.rowGap, T = h !== void 0 ? typeof h == "number" ? `${h}px` : h : d, C = f === 0 ? void 0 : T;
      if (!C) return u;
      const N = { ...p.style || {}, marginTop: C };
      return bt.cloneElement(m, { style: N });
    });
  else {
    const u = { marginTop: void 0 };
    c = /* @__PURE__ */ r.jsx(an, { style: u, children: e });
  }
  return /* @__PURE__ */ r.jsx(Ii, { className: t, style: n, ...s, children: c });
}, Cd = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: a = !1,
  className: s,
  role: o,
  as: i,
  ...l
}) => {
  const d = i || (t === "number" ? "ol" : "ul"), c = ve(
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
}, Nd = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = ve("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, jd = Cd;
jd.Item = Nd;
const cy = ({
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
}, dy = {
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
}, uy = ({
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
}, fy = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, py = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Di = ({
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
function Md(e) {
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
function Id(e) {
  const t = e.level ?? Md(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const Jt = ({ level: e, className: t, text: n, html: a, children: s, size: o, marginBottom: i, ...l }) => {
  const d = Id({ level: e, size: o, className: t, marginBottom: i }), c = s || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return bi(d.tag, { className: d.classes, style: d.style, ...l }, c);
};
function Dd(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const lo = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...s }) => {
  const o = Dd({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: o.classes, id: o.id, ...s, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      o.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, hy = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: a,
  errorList: s,
  className: o,
  children: i,
  ...l
}) => {
  const d = ze(null);
  Ve(() => {
    d.current && d.current.focus();
  }, []);
  const c = ve(
    "nhsuk-error-summary",
    o
  ), u = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, m = (p) => {
    const y = p.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: p.html } }) : p.text;
    return p.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: p.href,
        ...p.attributes,
        children: y
      }
    ) : y;
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
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((p, y) => /* @__PURE__ */ r.jsx("li", { children: m(p) }, y)) })
        ] })
      ]
    }
  );
}, my = ({
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
  const [u, f] = He(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [m, p] = He({}), y = (A) => A % 4 === 0 && A % 100 !== 0 || A % 400 === 0, g = (A, I) => {
    const H = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return A === 2 && y(I) ? 29 : H[A - 1];
  }, h = (A, I, H) => {
    if (!A) return;
    if (!/^\d+$/.test(A)) return "Day must be a number";
    const re = parseInt(A, 10);
    if (re < 1 || re > 31) return "Day must be between 1 and 31";
    if (I && H) {
      const G = parseInt(I, 10), R = parseInt(H, 10);
      if (!isNaN(G) && !isNaN(R) && G >= 1 && G <= 12) {
        const K = g(G, R);
        if (re > K)
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
          ][G - 1]} ${R} only has ${K} days`;
      }
    }
  }, T = (A) => {
    if (!A) return;
    if (!/^\d+$/.test(A)) return "Month must be a number";
    const I = parseInt(A, 10);
    if (I < 1 || I > 12) return "Month must be between 1 and 12";
  }, C = (A) => {
    if (!A) return;
    if (!/^\d+$/.test(A)) return "Year must be a number";
    const I = parseInt(A, 10), H = (/* @__PURE__ */ new Date()).getFullYear();
    if (I < 1900 || I > H + 10)
      return `Year must be between 1900 and ${H + 10}`;
  }, N = (A, I, H) => {
    if (!A || !I || !H) return;
    const re = parseInt(A, 10), G = parseInt(I, 10), R = parseInt(H, 10);
    if (isNaN(re) || isNaN(G) || isNaN(R) || G < 1 || G > 12 || R < 1900) return;
    const K = g(G, R);
    re < 1 || re > K;
  }, j = ge((A, I) => {
    const H = {
      ...u,
      [A]: I
    };
    f(H), d && d(H);
  }, [u, d]), x = ge((A) => {
    const I = u[A];
    let H;
    if (A === "day")
      H = h(I, u.month, u.year);
    else if (A === "month") {
      if (H = T(I), !H && u.day) {
        const re = h(u.day, I, u.year);
        p((G) => ({
          ...G,
          day: re
        }));
      }
    } else if (A === "year" && (H = C(I), !H && u.day && u.month)) {
      const re = h(u.day, u.month, I);
      p((G) => ({
        ...G,
        day: re
      }));
    }
    if (p((re) => ({
      ...re,
      [A]: H
    })), u.day && u.month && u.year) {
      const re = N(
        A === "day" ? I : u.day,
        A === "month" ? I : u.month,
        A === "year" ? I : u.year
      );
      re && p((G) => ({
        ...G,
        day: re
      }));
    }
  }, [u, h, T, C, N]), M = De(() => [
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
  let _ = o?.describedBy || "";
  const b = i ? `${e}-hint` : "", S = l ? `${e}-error` : "";
  b && (_ = _ ? `${_} ${b}` : b), S && (_ = _ ? `${_} ${S}` : S);
  const k = Object.values(m).some((A) => A), L = ve(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || k
    }
  ), B = ve(
    "nhsuk-date-input",
    t
  ), $ = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(
      ji,
      {
        id: b,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ r.jsx(
      lo,
      {
        id: S,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(m).map(
      ([A, I]) => I ? /* @__PURE__ */ r.jsxs(
        lo,
        {
          id: `${e}-${A}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            I
          ]
        },
        `${A}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx("div", { className: B, id: e, "data-testid": "date-input", ...c, children: D.map((A) => {
      const I = A.id || `${e}-${A.name}`, H = a ? `${a}[${A.name}]` : A.name, re = A.label || A.name.charAt(0).toUpperCase() + A.name.slice(1), G = m[A.name], R = u[A.name] || "";
      let K = _;
      if (G) {
        const U = `${e}-${A.name}-error`;
        K = K ? `${K} ${U}` : U;
      }
      return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ r.jsx(
          Es,
          {
            htmlFor: I,
            className: "nhsuk-date-input__label",
            children: re
          }
        ),
        /* @__PURE__ */ r.jsx(
          As,
          {
            id: I,
            name: H,
            value: R,
            className: ve("nhsuk-date-input__input", A.classes, {
              "nhsuk-input--error": G
            }),
            inputMode: A.inputmode,
            autoComplete: A.autocomplete,
            pattern: A.pattern,
            "aria-describedby": K || void 0,
            hasError: !!G,
            onChange: (U) => j(A.name, U.target.value),
            onBlur: () => x(A.name)
          }
        )
      ] }, A.name);
    }) })
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: L, children: o ? /* @__PURE__ */ r.jsx(
    Ps,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: _ || void 0,
      children: $()
    }
  ) : $() });
}, Ti = {
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
}, Li = vi(Ti), Td = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...Ti, ...t };
  return /* @__PURE__ */ r.jsx(Li.Provider, { value: n, children: e });
}, gy = () => {
  const e = yi(Li);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Ld() {
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
function $d() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Ld(), document.head.appendChild(e);
}
const xy = ({ children: e, theme: t }) => (Ve(() => {
  $d();
}, []), /* @__PURE__ */ r.jsx(Td, { theme: t, children: e })), Ad = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ28iPgogICAgPHJlY3QgaWQ9ImZkcGxvZ28tcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIAogICAgPHRleHQgIGZpbGw9InJnYigzNSwgMzEsIDMyKSIgZm9udC1mYW1pbHk9IkZydXRpZ2VyTFRQcm8tQm9sZCwgJ0ZydXRpZ2VyIExUIFBybycsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjQwIiB4PSIwIiB5PSI2NC44OSI+PHRzcGFuIHg9IjAiIHk9IjEwMi44OSI+RmVkZXJhdGVkIERhdGEgUGxhdGZvcm08L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg==", Ed = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcHR3b2xpbmUiPgogICAgPHJlY3QgaWQ9ImZkcHR3b2xpbmUtcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIDx0ZXh0ICBmaWxsPSJyZ2IoMzUsIDMxLCAzMikiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPjx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPkZlZGVyYXRlZCBEYXRhIAo8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIxNTAuODkiPlBsYXRmb3JtPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=", Pd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iZmRwdHdvbGluZWludmVyc2UiPgoJPHJlY3QgaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLXJlY3RhbmdsZSIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMzIsIDk1LCAxNzIpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+Cgk8cGF0aCBpZD0iZmRwdHdvbGluZWludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgoJPHBhdGggaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KCTxwYXRoIGlkPSJmZHB0d29saW5laW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+Cgk8dGV4dCBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPgoJCTx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPgoJCQlGZWRlcmF0ZWQgRGF0YQoJCTwvdHNwYW4+CgkJPHRzcGFuIHg9IjAiIHk9IjE1MC44OSI+CgkJCVBsYXRmb3JtCgkJPC90c3Bhbj4KCTwvdGV4dD4KPC9zdmc+Cg==", Fd = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ29pbnZlcnNlIj4KICAgIDxyZWN0IGlkPSJmZHBsb2dvaW52ZXJzZS1yZWN0YW5nbGUiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+CiAgICA8ZyBpZD0iZmRwbG9nb2ludmVyc2UtZ3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJmZHBsb2dvaW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+CiAgICAgICAgPHBhdGggaWQ9ImZkcGxvZ29pbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDAsIDk0LCAxODQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgICAgICA8cGF0aCBpZD0iZmRwbG9nb2ludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgogICAgPC9nPgogICAgCiAgICA8dGV4dCAgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBmb250LWZhbWlseT0iRnJ1dGlnZXJMVFByby1Cb2xkLCAnRnJ1dGlnZXIgTFQgUHJvJywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iNDAiIHg9IjAiIHk9IjY0Ljg5Ij48dHNwYW4geD0iMCIgeT0iMTAyLjg5Ij5GZWRlcmF0ZWQgRGF0YSBQbGF0Zm9ybTwvdHNwYW4+PC90ZXh0Pgo8L3N2Zz4K", Rd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='357'%20height='114'%20xml:space='preserve'%20id='fdpgraphic'%3e%3cdefs%3e%3clinearGradient%20id='fdpgraphic-gradient-rectangle2'%20x1='113.66'%20y1='27.99'%20x2='0.02'%20y2='27.99'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient2-clip'%20x1='243.8'%20y1='28.5'%20x2='113.64'%20y2='28.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient4-bezier4'%20x1='357.05'%20y1='85.21'%20x2='243.44'%20y2='85.21'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='fdpgraphic-group3'%3e%3cg%20id='fdpgraphic-squareGroup'%3e%3crect%20id='fdpgraphic-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='113.6'%20height='113.6'%20/%3e%3crect%20id='fdpgraphic-rectangle2'%20stroke='none'%20fill='url(%23fdpgraphic-gradient-rectangle2)'%20x='0'%20y='0'%20width='113.65'%20height='56'%20/%3e%3c/g%3e%3cg%20id='fdpgraphic-hexagonGroup'%3e%3cpath%20id='fdpgraphic-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%20146.15,-0%20L%20211.25,0%20243.8,57.03%20211.25,114.06%20146.15,114.06%20113.6,57.03%20146.15,-0%20Z%20M%20146.15,-0'%20/%3e%3cg%20id='fdpgraphic-hexagon'%3e%3cpath%20id='fdpgraphic-clip'%20stroke='none'%20fill='url(%23fdpgraphic-gradient2-clip)'%20d='M%20146.18,-0%20L%20113.64,57%20243.8,57%20211.26,-0%20146.18,-0%20Z%20M%20146.18,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdpgraphic-circleGroup'%3e%3ccircle%20id='fdpgraphic-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='300.25'%20cy='56.8'%20r='56.8'%20/%3e%3cpath%20id='fdpgraphic-bezier4'%20stroke='none'%20fill='url(%23fdpgraphic-gradient4-bezier4)'%20d='M%20300.25,56.8%20L%20243.45,56.8%20C%20243.45,88.18%20268.88,113.61%20300.25,113.61%20L%20300.25,113.61%20C%20331.62,113.61%20357.05,88.18%20357.05,56.8%20L%20357.05,56.8%20300.25,56.8%20Z%20M%20300.25,56.8'%20/%3e%3c/g%3e%3cpath%20id='fdpgraphic-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='2.49'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2054.9,56.9%20L%20301.64,56.9'%20/%3e%3c/g%3e%3c/svg%3e", Bd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogo'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogo-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogo-bezier7'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier8'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier9'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogo-bezier10'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier11'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogo-bezier12'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogo-group3'%3e%3cg%20id='fdplockuplogo-squareGroup'%3e%3crect%20id='fdplockuplogo-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogo-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogo-hexagonGroup'%3e%3cpath%20id='fdplockuplogo-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogo-hexagon'%3e%3cpath%20id='fdplockuplogo-clip'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogo-circleGroup'%3e%3cg%20id='fdplockuplogo-group'%3e%3ccircle%20id='fdplockuplogo-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogo-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogo-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e", Hd = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogoinverted'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogoinverted-bezier7'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier8'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier9'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier10'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier11'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier12'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogoinverted-group3'%3e%3cg%20id='fdplockuplogoinverted-squareGroup'%3e%3crect%20id='fdplockuplogoinverted-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogoinverted-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-hexagonGroup'%3e%3cpath%20id='fdplockuplogoinverted-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogoinverted-hexagon'%3e%3cpath%20id='fdplockuplogoinverted-clip'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-circleGroup'%3e%3cg%20id='fdplockuplogoinverted-group'%3e%3ccircle%20id='fdplockuplogoinverted-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogoinverted-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e";
var $i = /* @__PURE__ */ ((e) => (e.NHS = "nhs", e.FDP = "fdp", e))($i || {}), Ai = /* @__PURE__ */ ((e) => (e.Full = "full", e.Graphic = "graphic", e.Inverse = "inverse", e.TwoLine = "twoLine", e.TwoLineInverse = "twoLineInverse", e.Compact = "compact", e.CompactInverted = "compactInverted", e))(Ai || {});
const zd = {
  nhs: {},
  fdp: {
    full: {
      brand: "fdp",
      variant: "full",
      src: Ad,
      ariaLabel: "FDP"
    },
    graphic: {
      brand: "fdp",
      variant: "graphic",
      src: Rd,
      ariaLabel: "FDP"
    },
    inverse: {
      brand: "fdp",
      variant: "inverse",
      src: Fd,
      ariaLabel: "FDP"
    },
    twoLine: {
      brand: "fdp",
      variant: "twoLine",
      src: Ed,
      ariaLabel: "FDP"
    },
    twoLineInverse: {
      brand: "fdp",
      variant: "twoLineInverse",
      src: Pd,
      ariaLabel: "FDP"
    },
    compact: {
      brand: "fdp",
      variant: "compact",
      src: Bd,
      ariaLabel: "FDP"
    },
    compactInverted: {
      brand: "fdp",
      variant: "compactInverted",
      src: Hd,
      ariaLabel: "FDP"
    }
  }
};
function Od(e, t = "full") {
  return zd[e]?.[t];
}
function Ud(e, {
  variant: t,
  isClient: n,
  menuOpen: a = !1,
  showMoreButton: s = !1,
  visibleItems: o,
  dropdownVisible: i,
  toggleMenu: l,
  navContainerRef: d,
  navListRef: c,
  searchNode: u,
  brand: f
}) {
  const {
    className: m,
    logo: p = {},
    service: y = {},
    serviceName: g,
    organisation: h,
    search: T,
    account: C,
    navigation: N,
    containerClasses: j,
    variant: x = "default",
    attributes: M = {},
    maxVisibleItems: D,
    // deprecated (ignored)
    responsiveNavigation: _ = !0,
    logoVariant: b = Ai.Full,
    ...S
  } = e, k = {
    ...y,
    text: y?.text ?? g
  };
  "maxVisibleItems" in S && delete S.maxVisibleItems;
  const L = k.href && !p.href || k.href && k.href === p.href, B = L ? k.href : p.href, $ = ve(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": x === "organisation" || h,
      "nhsuk-header--white": x === "white"
    },
    m
  ), A = ve(
    "nhsuk-header__container",
    j
  ), I = ve(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": N?.white,
      "nhsuk-header__navigation--justified": N?.justified
    },
    N?.className
  ), re = f ?? (typeof document > "u" ? "nhs" : document.documentElement.getAttribute("data-brand") === "fdp" ? "fdp" : "nhs"), G = () => /* @__PURE__ */ r.jsxs(
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
  ), R = () => {
    if (p.src)
      return /* @__PURE__ */ r.jsx(
        "img",
        {
          className: "nhsuk-header__organisation-logo",
          src: p.src,
          width: "280",
          alt: p.ariaLabel || (re === "fdp" ? "FDP" : "NHS")
        }
      );
    if (re === "fdp") {
      const Q = Od($i.FDP, b);
      if (Q?.src)
        return /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: Q.src,
            "data-logo-variant": b,
            width: "280",
            alt: Q.ariaLabel || "FDP"
          }
        );
    }
    return G();
  }, K = () => h ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      h.name,
      h.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        h.split
      ] })
    ] }),
    h.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: h.descriptor })
  ] }) : null, U = (Q, ce) => Q ? ce ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: ce, children: Q }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: Q }) : null, X = (Q) => Q.active || Q.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: Q.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: Q.html } }) : Q.text }) : Q.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: Q.html } }) : Q.text, Y = () => /* @__PURE__ */ r.jsx(
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
  return N?.items, /* @__PURE__ */ r.jsxs(
    "header",
    {
      className: $,
      role: "banner",
      "data-module": "nhsuk-header",
      ...M,
      ...S,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: A, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            B ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: B, children: [
              R(),
              K(),
              L && U(k.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              R(),
              K(),
              L && U(k.text)
            ] }),
            k.text && !L && U(k.text, k.href)
          ] }),
          u ?? null,
          /* @__PURE__ */ r.jsx(
            _i,
            {
              ...C,
              variant: x === "white" ? "white" : "default"
            }
          )
        ] }),
        N && N.items && N.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: I,
            "aria-label": N.ariaLabel || "Menu",
            children: /* @__PURE__ */ r.jsx(
              "div",
              {
                className: ve(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": n && t === "client",
                    "nhsuk-header__navigation-container--ssr": !n
                  },
                  j
                ),
                ref: d,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: c,
                    children: [
                      (N?.items || []).map((Q, ce) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: ve(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": Q.active || Q.current,
                              "nhsuk-header__navigation-item--hidden": s && o !== void 0 && ce >= (o ?? 0)
                            },
                            Q.className
                          ),
                          ...Q.attributes || {},
                          children: /* @__PURE__ */ r.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: Q.href,
                              ...Q.active || Q.current ? { "aria-current": Q.current ? "page" : "true" } : {},
                              children: X(Q)
                            }
                          )
                        },
                        ce
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
                            Y()
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
        n && N && N.items && N.items.length > 0 && a && i && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: N.items.slice(o ?? 0).map((Q, ce) => /* @__PURE__ */ r.jsx(
              "li",
              {
                className: ve("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": Q.active || Q.current
                }),
                children: /* @__PURE__ */ r.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: Q.href,
                    ...Q.active || Q.current ? { "aria-current": Q.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: X(Q)
                  }
                )
              },
              `overflow-${(o ?? 0) + ce}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const Ja = vi(void 0);
function by({ brand: e = "nhs", scope: t = "document", children: n }) {
  const [a, s] = He(e);
  Ve(() => {
    s(e);
  }, [e]), Ve(() => {
    if (t === "document")
      return document.documentElement.setAttribute("data-brand", a), () => {
      };
  }, [a, t]);
  const o = De(() => ({ brand: a, setBrand: s }), [a]);
  return t === "local" ? /* @__PURE__ */ r.jsx(Ja.Provider, { value: o, children: /* @__PURE__ */ r.jsx("div", { "data-brand": a, children: n }) }) : /* @__PURE__ */ r.jsx(Ja.Provider, { value: o, children: n });
}
function Wd() {
  const e = yi(Ja);
  if (!e) throw new Error("useBrand must be used within BrandThemeProvider");
  return e;
}
const Gd = ({
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
  showResults: m = !1,
  results: p = [],
  formAttributes: y = {},
  inputAttributes: g = {},
  buttonAttributes: h = {},
  preventDefaultSubmit: T = !1,
  debounceMs: C = 300,
  minQueryLength: N = 1
}) => {
  const [j, x] = He(""), [M, D] = He(!1), _ = ze(void 0), b = ze(null), S = ze(null), k = e === "controlled" && s !== void 0, L = k ? s : j, B = ge(
    (X) => {
      _.current && clearTimeout(_.current), _.current = setTimeout(() => {
        u.onChange && X.length >= N && u.onChange(X);
      }, C);
    },
    [u.onChange, C, N]
  ), $ = ge(
    (X) => {
      const Y = X.target.value;
      k || x(Y), e !== "form" && B(Y);
    },
    [k, e, B]
  ), A = ge(
    (X) => {
      const Y = L.trim(), Q = {
        query: Y,
        timestamp: Date.now(),
        formData: new FormData(X.currentTarget)
      };
      e === "controlled" || e === "hybrid" && T ? (X.preventDefault(), u.onSearch && Y.length >= N && u.onSearch(Q)) : e === "hybrid" && u.onSearch && Y.length >= N && u.onSearch(Q);
    },
    [
      e,
      L,
      u.onSearch,
      T,
      N
    ]
  ), I = ge(() => {
    D(!0), u.onFocus?.();
  }, [u.onFocus]), H = ge(() => {
    D(!1), u.onBlur?.();
  }, [u.onBlur]), re = ge(() => {
    k || x(""), u.onClear?.(), S.current?.focus();
  }, [k, u.onClear]);
  Ve(() => () => {
    _.current && clearTimeout(_.current);
  }, []);
  const G = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: ve("nhsuk-icon nhsuk-icon__search", {
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
  ), K = () => !L || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: re,
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
  ), U = () => !m || !p.length || !M ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: p.map((X) => /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsuk-header__search-result",
      role: "option",
      children: X.href ? /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: X.href,
          className: "nhsuk-header__search-result-link",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: X.title }),
            X.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: X.description })
          ]
        }
      ) : /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "nhsuk-header__search-result-button",
          onClick: () => u.onSearch?.({
            query: X.title,
            timestamp: Date.now()
          }),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: X.title }),
            X.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: X.description })
          ]
        }
      )
    },
    X.id
  )) });
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ve("nhsuk-header__search", d, {
        "nhsuk-header__search--controlled": e === "controlled",
        "nhsuk-header__search--hybrid": e === "hybrid",
        "nhsuk-header__search--loading": f,
        "nhsuk-header__search--focused": M,
        "nhsuk-header__search--has-results": m && p.length > 0
      }),
      children: [
        /* @__PURE__ */ r.jsxs(
          "form",
          {
            ref: b,
            className: "nhsuk-header__search-form",
            id: "search",
            action: e !== "controlled" ? t : void 0,
            method: e !== "controlled" ? n : void 0,
            role: "search",
            onSubmit: A,
            ...y,
            children: [
              /* @__PURE__ */ r.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: i }),
              /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    ref: S,
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: e !== "controlled" ? a : void 0,
                    type: "search",
                    placeholder: o,
                    autoComplete: "off",
                    value: L,
                    onChange: $,
                    onFocus: I,
                    onBlur: H,
                    disabled: c || f,
                    ...m && p.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                    ...g
                  }
                ),
                K()
              ] }),
              /* @__PURE__ */ r.jsxs(
                "button",
                {
                  className: "nhsuk-header__search-submit",
                  type: "submit",
                  disabled: c || f || e !== "form" && L.length < N,
                  ...h,
                  children: [
                    f ? R() : G(),
                    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
                  ]
                }
              )
            ]
          }
        ),
        U()
      ]
    }
  );
}, Ei = ({
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
  const [f, m] = He(!1), [p, y] = He(!1), [g, h] = He(i?.items?.length || 0), [T, C] = He(!1), [N, j] = He(!1), x = ze(null), M = ze(null), D = ze(!1);
  Ve(() => {
    typeof window > "u" || j(!0);
  }, []), Ve(() => {
    if (typeof document > "u") return;
    const L = (B) => {
      B.key === "Escape" && f && m(!1);
    };
    if (f)
      return document.addEventListener("keydown", L), () => document.removeEventListener("keydown", L);
  }, [f]);
  const _ = ze(null), b = ge(() => {
    if (!N || !i?.items || i.items.length === 0 || D.current) return;
    const L = x.current, B = M.current;
    if (!L || !B) return;
    D.current = !0, L.classList.add("nhsuk-header__navigation-container--measuring");
    const $ = L.clientWidth, A = Array.from(B.children);
    if (!A.length) {
      L.classList.remove("nhsuk-header__navigation-container--measuring"), D.current = !1;
      return;
    }
    if (_.current == null) {
      const Q = document.createElement("button");
      Q.type = "button", Q.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", Q.style.position = "absolute", Q.style.visibility = "hidden", Q.style.pointerEvents = "none", Q.innerHTML = "<span>More</span>", L.appendChild(Q), _.current = Q.getBoundingClientRect().width || 104, L.removeChild(Q);
    }
    const I = _.current + 16;
    let H = 0, re = 0;
    const G = window.getComputedStyle(L), R = parseFloat(G.paddingLeft) || 0, K = parseFloat(G.paddingRight) || 0;
    let U = R + K;
    for (const Q of A) {
      const ce = Q.getBoundingClientRect().width;
      if (H + ce + I + U > $) break;
      H += ce, re += 1;
    }
    const X = re < i.items.length, Y = X ? re : i.items.length;
    y((Q) => Q === X ? Q : X), h((Q) => Q === Y ? Q : Y), L.classList.remove("nhsuk-header__navigation-container--measuring"), D.current = !1;
  }, [N, i?.items]);
  Ve(() => {
    if (!N) return;
    const L = x.current;
    if (!L) return;
    let B = null;
    const $ = () => {
      B == null && (B = window.requestAnimationFrame(() => {
        B = null, b();
      }));
    };
    b();
    const A = new ResizeObserver(() => $());
    return A.observe(L), M.current && A.observe(M.current), () => {
      B != null && window.cancelAnimationFrame(B), A.disconnect();
    };
  }, [N, b]), Ve(() => {
    N && b();
  }, [i?.items?.length, N, b]);
  const S = (L) => {
    L && (L.preventDefault(), L.stopPropagation());
    const B = !f;
    m(B), C(B);
  }, k = (() => {
    try {
      return Wd();
    } catch {
      return;
    }
  })();
  return Ud(
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
      isClient: N,
      menuOpen: f,
      showMoreButton: p,
      visibleItems: g,
      dropdownVisible: T,
      toggleMenu: S,
      navContainerRef: x,
      navListRef: M,
      // Provide interactive search node for client build only
      searchNode: s ? /* @__PURE__ */ r.jsx(Gd, { ...s }) : null,
      brand: k?.brand
    }
  );
};
function Vd(e, { variant: t, isClient: n }) {
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
    maxVisibleItems: p,
    // deprecated (ignored)
    responsiveNavigation: y = !0,
    ...g
  } = e;
  "maxVisibleItems" in g && delete g.maxVisibleItems;
  const h = {
    ...o,
    text: o?.text ?? i
  }, T = h.href && !s.href || h.href && h.href === s.href, C = T ? h.href : s.href, N = ve(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    a
  ), j = ve("nhsuk-header__container", u), x = ve(
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
  ), D = () => s.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: s.src,
      width: "280",
      alt: s.ariaLabel || "NHS"
    }
  ) : M(), _ = () => l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, b = ($, A) => $ ? A ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: A, children: $ }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: $ }) : null, S = ($) => $.active || $.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: $.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: $.html } }) : $.text }) : $.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: $.html } }) : $.text, k = c?.items && !y, L = k ? [] : c?.items, B = k ? c.items : [];
  return /* @__PURE__ */ r.jsxs("header", { className: N, role: "banner", "data-module": "nhsuk-header", ...m, ...g, children: [
    /* @__PURE__ */ r.jsxs("div", { className: j, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
        C ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: C, children: [
          D(),
          _(),
          T && b(h.text)
        ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          D(),
          _(),
          T && b(h.text)
        ] }),
        h.text && !T && b(h.text, h.href)
      ] }),
      /* @__PURE__ */ r.jsx(_i, { ...d, variant: f === "white" ? "white" : "default" })
    ] }),
    c && c.items && c.items.length > 0 && /* @__PURE__ */ r.jsx("nav", { className: x, "aria-label": c.ariaLabel || "Menu", children: /* @__PURE__ */ r.jsx(
      "div",
      {
        className: ve(
          "nhsuk-header_navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--ssr": !n
          },
          u
        ),
        children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__navigation-list", children: (L || []).map(($, A) => /* @__PURE__ */ r.jsx(
          "li",
          {
            className: ve("nhsuk-header__navigation-item", {
              "nhsuk-header__navigation-item--current": $.active || $.current
            }, $.className),
            ...$.attributes || {},
            children: /* @__PURE__ */ r.jsx(
              "a",
              {
                className: "nhsuk-header__navigation-link",
                href: $.href,
                ...$.active || $.current ? { "aria-current": $.current ? "page" : "true" } : {},
                children: S($)
              }
            )
          },
          A
        )) })
      }
    ) }),
    k && B.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: B.map(($, A) => /* @__PURE__ */ r.jsx(
      "li",
      {
        className: ve("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": $.active || $.current
        }),
        children: /* @__PURE__ */ r.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: $.href,
            ...$.active || $.current ? { "aria-current": $.current ? "page" : "true" } : {},
            children: S($)
          }
        )
      },
      `overflow-server-${A}`
    )) }) })
  ] });
}
const yy = (e) => Vd(e, {
  variant: "server",
  isClient: !1
}), Yd = ({
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
  ].filter(Boolean).join(" "), m = [
    "nhsuk-hero__heading",
    n,
    !d && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), p = d || e || a || s, y = () => {
    if (!e) return null;
    const g = { className: m };
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
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...c,
      children: [
        o && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: p && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          y(),
          d || (s ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && p && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          y(),
          d || (s ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Yd.displayName = "Hero";
const Pi = ({
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
  const f = (p, y = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: ve("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": y
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
  ), m = !!(n || a);
  return /* @__PURE__ */ r.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...d }, children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: ve("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: ve("nhsuk-footer", e), style: c, children: m ? (
            // Multi-column layout
            /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: t.map((p) => f(p)) }),
              n && n.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: n.map((p) => f(p)) }),
              a && a.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: a.map((p) => f(p)) }),
              s && s.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((p) => f(p)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((p) => f(p, !0)),
              (n || []).map((p) => f(p, !0)),
              (a || []).map((p) => f(p, !0)),
              (s || []).map((p) => f(p, !0))
            ] })
          ) }),
          !m && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: o }) })
        ]
      }
    ),
    m && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: o }) }) })
  ] }) });
};
function yr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Zd(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Fs(e) {
  let t, n, a;
  e.length !== 2 ? (t = yr, n = (l, d) => yr(e(l), d), a = (l, d) => e(l) - d) : (t = e === yr || e === Zd ? e : Jd, n = e, a = e);
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
function Jd() {
  return 0;
}
function qd(e) {
  return e === null ? NaN : +e;
}
const Xd = Fs(yr), Qd = Xd.right;
Fs(qd).center;
function Fi(e, t) {
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
class co extends Map {
  constructor(t, n = tu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, s] of t) this.set(a, s);
  }
  get(t) {
    return super.get(uo(this, t));
  }
  has(t) {
    return super.has(uo(this, t));
  }
  set(t, n) {
    return super.set(Kd(this, t), n);
  }
  delete(t) {
    return super.delete(eu(this, t));
  }
}
function uo({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function Kd({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function eu({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function tu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const nu = Math.sqrt(50), ru = Math.sqrt(10), au = Math.sqrt(2);
function kr(e, t, n) {
  const a = (t - e) / Math.max(0, n), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= nu ? 10 : o >= ru ? 5 : o >= au ? 2 : 1;
  let l, d, c;
  return s < 0 ? (c = Math.pow(10, -s) / i, l = Math.round(e * c), d = Math.round(t * c), l / c < e && ++l, d / c > t && --d, c = -c) : (c = Math.pow(10, s) * i, l = Math.round(e / c), d = Math.round(t / c), l * c < e && ++l, d * c > t && --d), d < l && 0.5 <= n && n < 2 ? kr(e, t, n * 2) : [l, d, c];
}
function su(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [s, o, i] = a ? kr(t, e, n) : kr(e, t, n);
  if (!(o >= s)) return [];
  const l = o - s + 1, d = new Array(l);
  if (a)
    if (i < 0) for (let c = 0; c < l; ++c) d[c] = (o - c) / -i;
    else for (let c = 0; c < l; ++c) d[c] = (o - c) * i;
  else if (i < 0) for (let c = 0; c < l; ++c) d[c] = (s + c) / -i;
  else for (let c = 0; c < l; ++c) d[c] = (s + c) * i;
  return d;
}
function qa(e, t, n) {
  return t = +t, e = +e, n = +n, kr(e, t, n)[2];
}
function Xa(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, s = a ? qa(t, e, n) : qa(e, t, n);
  return (a ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function ou(e, t, n) {
  e = +e, t = +t, n = (s = arguments.length) < 2 ? (t = e, e = 0, 1) : s < 3 ? 1 : +n;
  for (var a = -1, s = Math.max(0, Math.ceil((t - e) / n)) | 0, o = new Array(s); ++a < s; )
    o[a] = e + a * n;
  return o;
}
function ga(e, t) {
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
const fo = Symbol("implicit");
function Ri() {
  var e = new co(), t = [], n = [], a = fo;
  function s(o) {
    let i = e.get(o);
    if (i === void 0) {
      if (a !== fo) return a;
      e.set(o, i = t.push(o) - 1);
    }
    return n[i % n.length];
  }
  return s.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [], e = new co();
    for (const i of o)
      e.has(i) || e.set(i, t.push(i) - 1);
    return s;
  }, s.range = function(o) {
    return arguments.length ? (n = Array.from(o), s) : n.slice();
  }, s.unknown = function(o) {
    return arguments.length ? (a = o, s) : a;
  }, s.copy = function() {
    return Ri(t, n).unknown(a);
  }, ga.apply(s, arguments), s;
}
function Bi() {
  var e = Ri().unknown(void 0), t = e.domain, n = e.range, a = 0, s = 1, o, i, l = !1, d = 0, c = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var m = t().length, p = s < a, y = p ? s : a, g = p ? a : s;
    o = (g - y) / Math.max(1, m - d + c * 2), l && (o = Math.floor(o)), y += (g - y - o * (m - d)) * u, i = o * (1 - d), l && (y = Math.round(y), i = Math.round(i));
    var h = ou(m).map(function(T) {
      return y + o * T;
    });
    return n(p ? h.reverse() : h);
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
    return Bi(t(), [a, s]).round(l).paddingInner(d).paddingOuter(c).align(u);
  }, ga.apply(f(), arguments);
}
function Rs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Hi(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function or() {
}
var Xn = 0.7, Cr = 1 / Xn, Tn = "\\s*([+-]?\\d+)\\s*", Qn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Lt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", iu = /^#([0-9a-f]{3,8})$/, lu = new RegExp(`^rgb\\(${Tn},${Tn},${Tn}\\)$`), cu = new RegExp(`^rgb\\(${Lt},${Lt},${Lt}\\)$`), du = new RegExp(`^rgba\\(${Tn},${Tn},${Tn},${Qn}\\)$`), uu = new RegExp(`^rgba\\(${Lt},${Lt},${Lt},${Qn}\\)$`), fu = new RegExp(`^hsl\\(${Qn},${Lt},${Lt}\\)$`), pu = new RegExp(`^hsla\\(${Qn},${Lt},${Lt},${Qn}\\)$`), po = {
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
Rs(or, Kn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ho,
  // Deprecated! Use color.formatHex.
  formatHex: ho,
  formatHex8: hu,
  formatHsl: mu,
  formatRgb: mo,
  toString: mo
});
function ho() {
  return this.rgb().formatHex();
}
function hu() {
  return this.rgb().formatHex8();
}
function mu() {
  return zi(this).formatHsl();
}
function mo() {
  return this.rgb().formatRgb();
}
function Kn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = iu.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? go(t) : n === 3 ? new wt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? mr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? mr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = lu.exec(e)) ? new wt(t[1], t[2], t[3], 1) : (t = cu.exec(e)) ? new wt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = du.exec(e)) ? mr(t[1], t[2], t[3], t[4]) : (t = uu.exec(e)) ? mr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = fu.exec(e)) ? yo(t[1], t[2] / 100, t[3] / 100, 1) : (t = pu.exec(e)) ? yo(t[1], t[2] / 100, t[3] / 100, t[4]) : po.hasOwnProperty(e) ? go(po[e]) : e === "transparent" ? new wt(NaN, NaN, NaN, 0) : null;
}
function go(e) {
  return new wt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function mr(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new wt(e, t, n, a);
}
function gu(e) {
  return e instanceof or || (e = Kn(e)), e ? (e = e.rgb(), new wt(e.r, e.g, e.b, e.opacity)) : new wt();
}
function Qa(e, t, n, a) {
  return arguments.length === 1 ? gu(e) : new wt(e, t, n, a ?? 1);
}
function wt(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
Rs(wt, Qa, Hi(or, {
  brighter(e) {
    return e = e == null ? Cr : Math.pow(Cr, e), new wt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new wt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new wt(pn(this.r), pn(this.g), pn(this.b), Nr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: xo,
  // Deprecated! Use color.formatHex.
  formatHex: xo,
  formatHex8: xu,
  formatRgb: bo,
  toString: bo
}));
function xo() {
  return `#${fn(this.r)}${fn(this.g)}${fn(this.b)}`;
}
function xu() {
  return `#${fn(this.r)}${fn(this.g)}${fn(this.b)}${fn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function bo() {
  const e = Nr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${pn(this.r)}, ${pn(this.g)}, ${pn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Nr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function pn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function fn(e) {
  return e = pn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function yo(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ct(e, t, n, a);
}
function zi(e) {
  if (e instanceof Ct) return new Ct(e.h, e.s, e.l, e.opacity);
  if (e instanceof or || (e = Kn(e)), !e) return new Ct();
  if (e instanceof Ct) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, s = Math.min(t, n, a), o = Math.max(t, n, a), i = NaN, l = o - s, d = (o + s) / 2;
  return l ? (t === o ? i = (n - a) / l + (n < a) * 6 : n === o ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= d < 0.5 ? o + s : 2 - o - s, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new Ct(i, l, d, e.opacity);
}
function bu(e, t, n, a) {
  return arguments.length === 1 ? zi(e) : new Ct(e, t, n, a ?? 1);
}
function Ct(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Rs(Ct, bu, Hi(or, {
  brighter(e) {
    return e = e == null ? Cr : Math.pow(Cr, e), new Ct(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new Ct(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, s = 2 * n - a;
    return new wt(
      Da(e >= 240 ? e - 240 : e + 120, s, a),
      Da(e, s, a),
      Da(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new Ct(vo(this.h), gr(this.s), gr(this.l), Nr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Nr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${vo(this.h)}, ${gr(this.s) * 100}%, ${gr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function vo(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function gr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Da(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Bs = (e) => () => e;
function yu(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function vu(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function wu(e) {
  return (e = +e) == 1 ? Oi : function(t, n) {
    return n - t ? vu(t, n, e) : Bs(isNaN(t) ? n : t);
  };
}
function Oi(e, t) {
  var n = t - e;
  return n ? yu(e, n) : Bs(isNaN(e) ? t : e);
}
const wo = (function e(t) {
  var n = wu(t);
  function a(s, o) {
    var i = n((s = Qa(s)).r, (o = Qa(o)).r), l = n(s.g, o.g), d = n(s.b, o.b), c = Oi(s.opacity, o.opacity);
    return function(u) {
      return s.r = i(u), s.g = l(u), s.b = d(u), s.opacity = c(u), s + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Su(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), s;
  return function(o) {
    for (s = 0; s < n; ++s) a[s] = e[s] * (1 - o) + t[s] * o;
    return a;
  };
}
function _u(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function ku(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, s = new Array(a), o = new Array(n), i;
  for (i = 0; i < a; ++i) s[i] = Hs(e[i], t[i]);
  for (; i < n; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) o[i] = s[i](l);
    return o;
  };
}
function Cu(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function jr(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Nu(e, t) {
  var n = {}, a = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? n[s] = Hs(e[s], t[s]) : a[s] = t[s];
  return function(o) {
    for (s in n) a[s] = n[s](o);
    return a;
  };
}
var Ka = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ta = new RegExp(Ka.source, "g");
function ju(e) {
  return function() {
    return e;
  };
}
function Mu(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Iu(e, t) {
  var n = Ka.lastIndex = Ta.lastIndex = 0, a, s, o, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (a = Ka.exec(e)) && (s = Ta.exec(t)); )
    (o = s.index) > n && (o = t.slice(n, o), l[i] ? l[i] += o : l[++i] = o), (a = a[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, d.push({ i, x: jr(a, s) })), n = Ta.lastIndex;
  return n < t.length && (o = t.slice(n), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? d[0] ? Mu(d[0].x) : ju(t) : (t = d.length, function(c) {
    for (var u = 0, f; u < t; ++u) l[(f = d[u]).i] = f.x(c);
    return l.join("");
  });
}
function Hs(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Bs(t) : (n === "number" ? jr : n === "string" ? (a = Kn(t)) ? (t = a, wo) : Iu : t instanceof Kn ? wo : t instanceof Date ? Cu : _u(t) ? Su : Array.isArray(t) ? ku : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Nu : jr)(e, t);
}
function Du(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Tu(e) {
  return function() {
    return e;
  };
}
function Lu(e) {
  return +e;
}
var So = [0, 1];
function jn(e) {
  return e;
}
function es(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Tu(isNaN(t) ? NaN : 0.5);
}
function $u(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Au(e, t, n) {
  var a = e[0], s = e[1], o = t[0], i = t[1];
  return s < a ? (a = es(s, a), o = n(i, o)) : (a = es(a, s), o = n(o, i)), function(l) {
    return o(a(l));
  };
}
function Eu(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, s = new Array(a), o = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    s[i] = es(e[i], e[i + 1]), o[i] = n(t[i], t[i + 1]);
  return function(l) {
    var d = Qd(e, l, 1, a) - 1;
    return o[d](s[d](l));
  };
}
function Ui(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Pu() {
  var e = So, t = So, n = Hs, a, s, o, i = jn, l, d, c;
  function u() {
    var m = Math.min(e.length, t.length);
    return i !== jn && (i = $u(e[0], e[m - 1])), l = m > 2 ? Eu : Au, d = c = null, f;
  }
  function f(m) {
    return m == null || isNaN(m = +m) ? o : (d || (d = l(e.map(a), t, n)))(a(i(m)));
  }
  return f.invert = function(m) {
    return i(s((c || (c = l(t, e.map(a), jr)))(m)));
  }, f.domain = function(m) {
    return arguments.length ? (e = Array.from(m, Lu), u()) : e.slice();
  }, f.range = function(m) {
    return arguments.length ? (t = Array.from(m), u()) : t.slice();
  }, f.rangeRound = function(m) {
    return t = Array.from(m), n = Du, u();
  }, f.clamp = function(m) {
    return arguments.length ? (i = m ? !0 : jn, u()) : i !== jn;
  }, f.interpolate = function(m) {
    return arguments.length ? (n = m, u()) : n;
  }, f.unknown = function(m) {
    return arguments.length ? (o = m, f) : o;
  }, function(m, p) {
    return a = m, s = p, u();
  };
}
function Wi() {
  return Pu()(jn, jn);
}
function Fu(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Mr(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function Pn(e) {
  return e = Mr(Math.abs(e)), e ? e[1] : NaN;
}
function Ru(e, t) {
  return function(n, a) {
    for (var s = n.length, o = [], i = 0, l = e[0], d = 0; s > 0 && l > 0 && (d + l + 1 > a && (l = Math.max(1, a - d)), o.push(n.substring(s -= l, s + l)), !((d += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return o.reverse().join(t);
  };
}
function Bu(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Hu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ir(e) {
  if (!(t = Hu.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new zs({
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
Ir.prototype = zs.prototype;
function zs(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
zs.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function zu(e) {
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
var Gi;
function Ou(e, t) {
  var n = Mr(e, t);
  if (!n) return e + "";
  var a = n[0], s = n[1], o = s - (Gi = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, i = a.length;
  return o === i ? a : o > i ? a + new Array(o - i + 1).join("0") : o > 0 ? a.slice(0, o) + "." + a.slice(o) : "0." + new Array(1 - o).join("0") + Mr(e, Math.max(0, t + o - 1))[0];
}
function _o(e, t) {
  var n = Mr(e, t);
  if (!n) return e + "";
  var a = n[0], s = n[1];
  return s < 0 ? "0." + new Array(-s).join("0") + a : a.length > s + 1 ? a.slice(0, s + 1) + "." + a.slice(s + 1) : a + new Array(s - a.length + 2).join("0");
}
const ko = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Fu,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => _o(e * 100, t),
  r: _o,
  s: Ou,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Co(e) {
  return e;
}
var No = Array.prototype.map, jo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Uu(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Co : Ru(No.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? Co : Bu(No.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", d = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = Ir(f);
    var m = f.fill, p = f.align, y = f.sign, g = f.symbol, h = f.zero, T = f.width, C = f.comma, N = f.precision, j = f.trim, x = f.type;
    x === "n" ? (C = !0, x = "g") : ko[x] || (N === void 0 && (N = 12), j = !0, x = "g"), (h || m === "0" && p === "=") && (h = !0, m = "0", p = "=");
    var M = g === "$" ? n : g === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "", D = g === "$" ? a : /[%p]/.test(x) ? i : "", _ = ko[x], b = /[defgprs%]/.test(x);
    N = N === void 0 ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, N)) : Math.max(0, Math.min(20, N));
    function S(k) {
      var L = M, B = D, $, A, I;
      if (x === "c")
        B = _(k) + B, k = "";
      else {
        k = +k;
        var H = k < 0 || 1 / k < 0;
        if (k = isNaN(k) ? d : _(Math.abs(k), N), j && (k = zu(k)), H && +k == 0 && y !== "+" && (H = !1), L = (H ? y === "(" ? y : l : y === "-" || y === "(" ? "" : y) + L, B = (x === "s" ? jo[8 + Gi / 3] : "") + B + (H && y === "(" ? ")" : ""), b) {
          for ($ = -1, A = k.length; ++$ < A; )
            if (I = k.charCodeAt($), 48 > I || I > 57) {
              B = (I === 46 ? s + k.slice($ + 1) : k.slice($)) + B, k = k.slice(0, $);
              break;
            }
        }
      }
      C && !h && (k = t(k, 1 / 0));
      var re = L.length + k.length + B.length, G = re < T ? new Array(T - re + 1).join(m) : "";
      switch (C && h && (k = t(G + k, G.length ? T - B.length : 1 / 0), G = ""), p) {
        case "<":
          k = L + k + B + G;
          break;
        case "=":
          k = L + G + k + B;
          break;
        case "^":
          k = G.slice(0, re = G.length >> 1) + L + k + B + G.slice(re);
          break;
        default:
          k = G + L + k + B;
          break;
      }
      return o(k);
    }
    return S.toString = function() {
      return f + "";
    }, S;
  }
  function u(f, m) {
    var p = c((f = Ir(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(Pn(m) / 3))) * 3, g = Math.pow(10, -y), h = jo[8 + y / 3];
    return function(T) {
      return p(g * T) + h;
    };
  }
  return {
    format: c,
    formatPrefix: u
  };
}
var xr, Vi, Yi;
Wu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Wu(e) {
  return xr = Uu(e), Vi = xr.format, Yi = xr.formatPrefix, xr;
}
function Gu(e) {
  return Math.max(0, -Pn(Math.abs(e)));
}
function Vu(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Pn(t) / 3))) * 3 - Pn(Math.abs(e)));
}
function Yu(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Pn(t) - Pn(e)) + 1;
}
function Zu(e, t, n, a) {
  var s = Xa(e, t, n), o;
  switch (a = Ir(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(o = Vu(s, i)) && (a.precision = o), Yi(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(o = Yu(s, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = o - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(o = Gu(s)) && (a.precision = o - (a.type === "%") * 2);
      break;
    }
  }
  return Vi(a);
}
function Ju(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return su(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var s = t();
    return Zu(s[0], s[s.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), s = 0, o = a.length - 1, i = a[s], l = a[o], d, c, u = 10;
    for (l < i && (c = i, i = l, l = c, c = s, s = o, o = c); u-- > 0; ) {
      if (c = qa(i, l, n), c === d)
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
function Dr() {
  var e = Wi();
  return e.copy = function() {
    return Ui(e, Dr());
  }, ga.apply(e, arguments), Ju(e);
}
function qu(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, s = e[n], o = e[a], i;
  return o < s && (i = n, n = a, a = i, i = s, s = o, o = i), e[n] = t.floor(s), e[a] = t.ceil(o), e;
}
const La = /* @__PURE__ */ new Date(), $a = /* @__PURE__ */ new Date();
function ct(e, t, n, a) {
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
  }), n && (s.count = (o, i) => (La.setTime(+o), $a.setTime(+i), e(La), e($a), Math.floor(n(La, $a))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(a ? (i) => a(i) % o === 0 : (i) => s.count(0, i) % o === 0) : s)), s;
}
const Tr = ct(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Tr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ct((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Tr);
Tr.range;
const Yt = 1e3, _t = Yt * 60, Zt = _t * 60, qt = Zt * 24, Os = qt * 7, Mo = qt * 30, Aa = qt * 365, Mn = ct((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Yt);
}, (e, t) => (t - e) / Yt, (e) => e.getUTCSeconds());
Mn.range;
const Us = ct((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Yt);
}, (e, t) => {
  e.setTime(+e + t * _t);
}, (e, t) => (t - e) / _t, (e) => e.getMinutes());
Us.range;
const Xu = ct((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * _t);
}, (e, t) => (t - e) / _t, (e) => e.getUTCMinutes());
Xu.range;
const Ws = ct((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Yt - e.getMinutes() * _t);
}, (e, t) => {
  e.setTime(+e + t * Zt);
}, (e, t) => (t - e) / Zt, (e) => e.getHours());
Ws.range;
const Qu = ct((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Zt);
}, (e, t) => (t - e) / Zt, (e) => e.getUTCHours());
Qu.range;
const ir = ct(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * _t) / qt,
  (e) => e.getDate() - 1
);
ir.range;
const Gs = ct((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / qt, (e) => e.getUTCDate() - 1);
Gs.range;
const Ku = ct((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / qt, (e) => Math.floor(e / qt));
Ku.range;
function vn(e) {
  return ct((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * _t) / Os);
}
const xa = vn(0), Lr = vn(1), ef = vn(2), tf = vn(3), Fn = vn(4), nf = vn(5), rf = vn(6);
xa.range;
Lr.range;
ef.range;
tf.range;
Fn.range;
nf.range;
rf.range;
function wn(e) {
  return ct((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Os);
}
const Zi = wn(0), $r = wn(1), af = wn(2), sf = wn(3), Rn = wn(4), of = wn(5), lf = wn(6);
Zi.range;
$r.range;
af.range;
sf.range;
Rn.range;
of.range;
lf.range;
const er = ct((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
er.range;
const cf = ct((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
cf.range;
const Xt = ct((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Xt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ct((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Xt.range;
const bn = ct((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
bn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ct((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
bn.range;
function df(e, t, n, a, s, o) {
  const i = [
    [Mn, 1, Yt],
    [Mn, 5, 5 * Yt],
    [Mn, 15, 15 * Yt],
    [Mn, 30, 30 * Yt],
    [o, 1, _t],
    [o, 5, 5 * _t],
    [o, 15, 15 * _t],
    [o, 30, 30 * _t],
    [s, 1, Zt],
    [s, 3, 3 * Zt],
    [s, 6, 6 * Zt],
    [s, 12, 12 * Zt],
    [a, 1, qt],
    [a, 2, 2 * qt],
    [n, 1, Os],
    [t, 1, Mo],
    [t, 3, 3 * Mo],
    [e, 1, Aa]
  ];
  function l(c, u, f) {
    const m = u < c;
    m && ([c, u] = [u, c]);
    const p = f && typeof f.range == "function" ? f : d(c, u, f), y = p ? p.range(c, +u + 1) : [];
    return m ? y.reverse() : y;
  }
  function d(c, u, f) {
    const m = Math.abs(u - c) / f, p = Fs(([, , h]) => h).right(i, m);
    if (p === i.length) return e.every(Xa(c / Aa, u / Aa, f));
    if (p === 0) return Tr.every(Math.max(Xa(c, u, f), 1));
    const [y, g] = i[m / i[p - 1][2] < i[p][2] / m ? p - 1 : p];
    return y.every(g);
  }
  return [l, d];
}
const [uf, ff] = df(Xt, er, xa, ir, Ws, Us);
function Ea(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Pa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Wn(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function pf(e) {
  var t = e.dateTime, n = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = Gn(s), u = Vn(s), f = Gn(o), m = Vn(o), p = Gn(i), y = Vn(i), g = Gn(l), h = Vn(l), T = Gn(d), C = Vn(d), N = {
    a: H,
    A: re,
    b: G,
    B: R,
    c: null,
    d: Ao,
    e: Ao,
    f: Pf,
    g: Vf,
    G: Zf,
    H: $f,
    I: Af,
    j: Ef,
    L: Ji,
    m: Ff,
    M: Rf,
    p: K,
    q: U,
    Q: Fo,
    s: Ro,
    S: Bf,
    u: Hf,
    U: zf,
    V: Of,
    w: Uf,
    W: Wf,
    x: null,
    X: null,
    y: Gf,
    Y: Yf,
    Z: Jf,
    "%": Po
  }, j = {
    a: X,
    A: Y,
    b: Q,
    B: ce,
    c: null,
    d: Eo,
    e: Eo,
    f: Kf,
    g: cp,
    G: up,
    H: qf,
    I: Xf,
    j: Qf,
    L: Xi,
    m: ep,
    M: tp,
    p: ie,
    q: ne,
    Q: Fo,
    s: Ro,
    S: np,
    u: rp,
    U: ap,
    V: sp,
    w: op,
    W: ip,
    x: null,
    X: null,
    y: lp,
    Y: dp,
    Z: fp,
    "%": Po
  }, x = {
    a: S,
    A: k,
    b: L,
    B,
    c: $,
    d: Lo,
    e: Lo,
    f: If,
    g: To,
    G: Do,
    H: $o,
    I: $o,
    j: Cf,
    L: Mf,
    m: kf,
    M: Nf,
    p: b,
    q: _f,
    Q: Tf,
    s: Lf,
    S: jf,
    u: bf,
    U: yf,
    V: vf,
    w: xf,
    W: wf,
    x: A,
    X: I,
    y: To,
    Y: Do,
    Z: Sf,
    "%": Df
  };
  N.x = M(n, N), N.X = M(a, N), N.c = M(t, N), j.x = M(n, j), j.X = M(a, j), j.c = M(t, j);
  function M(ee, te) {
    return function(se) {
      var z = [], oe = -1, ae = 0, ue = ee.length, de, we, be;
      for (se instanceof Date || (se = /* @__PURE__ */ new Date(+se)); ++oe < ue; )
        ee.charCodeAt(oe) === 37 && (z.push(ee.slice(ae, oe)), (we = Io[de = ee.charAt(++oe)]) != null ? de = ee.charAt(++oe) : we = de === "e" ? " " : "0", (be = te[de]) && (de = be(se, we)), z.push(de), ae = oe + 1);
      return z.push(ee.slice(ae, oe)), z.join("");
    };
  }
  function D(ee, te) {
    return function(se) {
      var z = Wn(1900, void 0, 1), oe = _(z, ee, se += "", 0), ae, ue;
      if (oe != se.length) return null;
      if ("Q" in z) return new Date(z.Q);
      if ("s" in z) return new Date(z.s * 1e3 + ("L" in z ? z.L : 0));
      if (te && !("Z" in z) && (z.Z = 0), "p" in z && (z.H = z.H % 12 + z.p * 12), z.m === void 0 && (z.m = "q" in z ? z.q : 0), "V" in z) {
        if (z.V < 1 || z.V > 53) return null;
        "w" in z || (z.w = 1), "Z" in z ? (ae = Pa(Wn(z.y, 0, 1)), ue = ae.getUTCDay(), ae = ue > 4 || ue === 0 ? $r.ceil(ae) : $r(ae), ae = Gs.offset(ae, (z.V - 1) * 7), z.y = ae.getUTCFullYear(), z.m = ae.getUTCMonth(), z.d = ae.getUTCDate() + (z.w + 6) % 7) : (ae = Ea(Wn(z.y, 0, 1)), ue = ae.getDay(), ae = ue > 4 || ue === 0 ? Lr.ceil(ae) : Lr(ae), ae = ir.offset(ae, (z.V - 1) * 7), z.y = ae.getFullYear(), z.m = ae.getMonth(), z.d = ae.getDate() + (z.w + 6) % 7);
      } else ("W" in z || "U" in z) && ("w" in z || (z.w = "u" in z ? z.u % 7 : "W" in z ? 1 : 0), ue = "Z" in z ? Pa(Wn(z.y, 0, 1)).getUTCDay() : Ea(Wn(z.y, 0, 1)).getDay(), z.m = 0, z.d = "W" in z ? (z.w + 6) % 7 + z.W * 7 - (ue + 5) % 7 : z.w + z.U * 7 - (ue + 6) % 7);
      return "Z" in z ? (z.H += z.Z / 100 | 0, z.M += z.Z % 100, Pa(z)) : Ea(z);
    };
  }
  function _(ee, te, se, z) {
    for (var oe = 0, ae = te.length, ue = se.length, de, we; oe < ae; ) {
      if (z >= ue) return -1;
      if (de = te.charCodeAt(oe++), de === 37) {
        if (de = te.charAt(oe++), we = x[de in Io ? te.charAt(oe++) : de], !we || (z = we(ee, se, z)) < 0) return -1;
      } else if (de != se.charCodeAt(z++))
        return -1;
    }
    return z;
  }
  function b(ee, te, se) {
    var z = c.exec(te.slice(se));
    return z ? (ee.p = u.get(z[0].toLowerCase()), se + z[0].length) : -1;
  }
  function S(ee, te, se) {
    var z = p.exec(te.slice(se));
    return z ? (ee.w = y.get(z[0].toLowerCase()), se + z[0].length) : -1;
  }
  function k(ee, te, se) {
    var z = f.exec(te.slice(se));
    return z ? (ee.w = m.get(z[0].toLowerCase()), se + z[0].length) : -1;
  }
  function L(ee, te, se) {
    var z = T.exec(te.slice(se));
    return z ? (ee.m = C.get(z[0].toLowerCase()), se + z[0].length) : -1;
  }
  function B(ee, te, se) {
    var z = g.exec(te.slice(se));
    return z ? (ee.m = h.get(z[0].toLowerCase()), se + z[0].length) : -1;
  }
  function $(ee, te, se) {
    return _(ee, t, te, se);
  }
  function A(ee, te, se) {
    return _(ee, n, te, se);
  }
  function I(ee, te, se) {
    return _(ee, a, te, se);
  }
  function H(ee) {
    return i[ee.getDay()];
  }
  function re(ee) {
    return o[ee.getDay()];
  }
  function G(ee) {
    return d[ee.getMonth()];
  }
  function R(ee) {
    return l[ee.getMonth()];
  }
  function K(ee) {
    return s[+(ee.getHours() >= 12)];
  }
  function U(ee) {
    return 1 + ~~(ee.getMonth() / 3);
  }
  function X(ee) {
    return i[ee.getUTCDay()];
  }
  function Y(ee) {
    return o[ee.getUTCDay()];
  }
  function Q(ee) {
    return d[ee.getUTCMonth()];
  }
  function ce(ee) {
    return l[ee.getUTCMonth()];
  }
  function ie(ee) {
    return s[+(ee.getUTCHours() >= 12)];
  }
  function ne(ee) {
    return 1 + ~~(ee.getUTCMonth() / 3);
  }
  return {
    format: function(ee) {
      var te = M(ee += "", N);
      return te.toString = function() {
        return ee;
      }, te;
    },
    parse: function(ee) {
      var te = D(ee += "", !1);
      return te.toString = function() {
        return ee;
      }, te;
    },
    utcFormat: function(ee) {
      var te = M(ee += "", j);
      return te.toString = function() {
        return ee;
      }, te;
    },
    utcParse: function(ee) {
      var te = D(ee += "", !0);
      return te.toString = function() {
        return ee;
      }, te;
    }
  };
}
var Io = { "-": "", _: " ", 0: "0" }, ut = /^\s*\d+/, hf = /^%/, mf = /[\\^$*+?|[\]().{}]/g;
function Ue(e, t, n) {
  var a = e < 0 ? "-" : "", s = (a ? -e : e) + "", o = s.length;
  return a + (o < n ? new Array(n - o + 1).join(t) + s : s);
}
function gf(e) {
  return e.replace(mf, "\\$&");
}
function Gn(e) {
  return new RegExp("^(?:" + e.map(gf).join("|") + ")", "i");
}
function Vn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function xf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function bf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function yf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function vf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function wf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function Do(e, t, n) {
  var a = ut.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function To(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function Sf(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function _f(e, t, n) {
  var a = ut.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function kf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Lo(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function Cf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function $o(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function Nf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function jf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Mf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function If(e, t, n) {
  var a = ut.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Df(e, t, n) {
  var a = hf.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Tf(e, t, n) {
  var a = ut.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Lf(e, t, n) {
  var a = ut.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Ao(e, t) {
  return Ue(e.getDate(), t, 2);
}
function $f(e, t) {
  return Ue(e.getHours(), t, 2);
}
function Af(e, t) {
  return Ue(e.getHours() % 12 || 12, t, 2);
}
function Ef(e, t) {
  return Ue(1 + ir.count(Xt(e), e), t, 3);
}
function Ji(e, t) {
  return Ue(e.getMilliseconds(), t, 3);
}
function Pf(e, t) {
  return Ji(e, t) + "000";
}
function Ff(e, t) {
  return Ue(e.getMonth() + 1, t, 2);
}
function Rf(e, t) {
  return Ue(e.getMinutes(), t, 2);
}
function Bf(e, t) {
  return Ue(e.getSeconds(), t, 2);
}
function Hf(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function zf(e, t) {
  return Ue(xa.count(Xt(e) - 1, e), t, 2);
}
function qi(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Fn(e) : Fn.ceil(e);
}
function Of(e, t) {
  return e = qi(e), Ue(Fn.count(Xt(e), e) + (Xt(e).getDay() === 4), t, 2);
}
function Uf(e) {
  return e.getDay();
}
function Wf(e, t) {
  return Ue(Lr.count(Xt(e) - 1, e), t, 2);
}
function Gf(e, t) {
  return Ue(e.getFullYear() % 100, t, 2);
}
function Vf(e, t) {
  return e = qi(e), Ue(e.getFullYear() % 100, t, 2);
}
function Yf(e, t) {
  return Ue(e.getFullYear() % 1e4, t, 4);
}
function Zf(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Fn(e) : Fn.ceil(e), Ue(e.getFullYear() % 1e4, t, 4);
}
function Jf(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ue(t / 60 | 0, "0", 2) + Ue(t % 60, "0", 2);
}
function Eo(e, t) {
  return Ue(e.getUTCDate(), t, 2);
}
function qf(e, t) {
  return Ue(e.getUTCHours(), t, 2);
}
function Xf(e, t) {
  return Ue(e.getUTCHours() % 12 || 12, t, 2);
}
function Qf(e, t) {
  return Ue(1 + Gs.count(bn(e), e), t, 3);
}
function Xi(e, t) {
  return Ue(e.getUTCMilliseconds(), t, 3);
}
function Kf(e, t) {
  return Xi(e, t) + "000";
}
function ep(e, t) {
  return Ue(e.getUTCMonth() + 1, t, 2);
}
function tp(e, t) {
  return Ue(e.getUTCMinutes(), t, 2);
}
function np(e, t) {
  return Ue(e.getUTCSeconds(), t, 2);
}
function rp(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function ap(e, t) {
  return Ue(Zi.count(bn(e) - 1, e), t, 2);
}
function Qi(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Rn(e) : Rn.ceil(e);
}
function sp(e, t) {
  return e = Qi(e), Ue(Rn.count(bn(e), e) + (bn(e).getUTCDay() === 4), t, 2);
}
function op(e) {
  return e.getUTCDay();
}
function ip(e, t) {
  return Ue($r.count(bn(e) - 1, e), t, 2);
}
function lp(e, t) {
  return Ue(e.getUTCFullYear() % 100, t, 2);
}
function cp(e, t) {
  return e = Qi(e), Ue(e.getUTCFullYear() % 100, t, 2);
}
function dp(e, t) {
  return Ue(e.getUTCFullYear() % 1e4, t, 4);
}
function up(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Rn(e) : Rn.ceil(e), Ue(e.getUTCFullYear() % 1e4, t, 4);
}
function fp() {
  return "+0000";
}
function Po() {
  return "%";
}
function Fo(e) {
  return +e;
}
function Ro(e) {
  return Math.floor(+e / 1e3);
}
var Cn, Ki;
pp({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function pp(e) {
  return Cn = pf(e), Ki = Cn.format, Cn.parse, Cn.utcFormat, Cn.utcParse, Cn;
}
function hp(e) {
  return new Date(e);
}
function mp(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function el(e, t, n, a, s, o, i, l, d, c) {
  var u = Wi(), f = u.invert, m = u.domain, p = c(".%L"), y = c(":%S"), g = c("%I:%M"), h = c("%I %p"), T = c("%a %d"), C = c("%b %d"), N = c("%B"), j = c("%Y");
  function x(M) {
    return (d(M) < M ? p : l(M) < M ? y : i(M) < M ? g : o(M) < M ? h : a(M) < M ? s(M) < M ? T : C : n(M) < M ? N : j)(M);
  }
  return u.invert = function(M) {
    return new Date(f(M));
  }, u.domain = function(M) {
    return arguments.length ? m(Array.from(M, mp)) : m().map(hp);
  }, u.ticks = function(M) {
    var D = m();
    return e(D[0], D[D.length - 1], M ?? 10);
  }, u.tickFormat = function(M, D) {
    return D == null ? x : c(D);
  }, u.nice = function(M) {
    var D = m();
    return (!M || typeof M.range != "function") && (M = t(D[0], D[D.length - 1], M ?? 10)), M ? m(qu(D, M)) : u;
  }, u.copy = function() {
    return Ui(u, el(e, t, n, a, s, o, i, l, d, c));
  }, u;
}
function Vs() {
  return ga.apply(el(uf, ff, Xt, er, xa, ir, Ws, Us, Mn, Ki).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function gp({
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
  const c = ze(null), [u, f] = He(!1), [m, p] = He(!1), y = t(e.start), g = t(e.end), h = Math.max(g - y, 20), T = () => {
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
  }, C = e.progress ? h * e.progress / 100 : 0, N = () => {
    n?.(e);
  }, j = () => {
    a?.(e);
  }, x = (L) => {
    L.key === "Enter" ? (L.preventDefault(), N()) : L.key === " " && (L.preventDefault(), j());
  }, M = () => {
    f(!0);
  }, D = () => {
    f(!1);
  }, _ = () => {
    p(!0), l?.();
  }, b = () => {
    p(!1);
  }, S = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (m || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), k = {
    "--task-left": `${y}px`,
    "--task-width": `${h}px`,
    "--task-color": T(),
    left: `${y}px`,
    width: `${h}px`,
    backgroundColor: T()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": o,
      className: S,
      style: k,
      onClick: N,
      onDoubleClick: j,
      onKeyDown: x,
      onMouseDown: M,
      onMouseUp: D,
      onFocus: _,
      onBlur: b,
      "aria-label": d || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
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
function xp({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let p = e.getTime(); p <= t.getTime(); p += 864e5)
    a.push(new Date(p));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = He(-1), d = ze(null), c = (p) => {
    if (p.key === "ArrowLeft") {
      p.preventDefault();
      const y = Math.max(0, i === -1 ? 0 : i - 1);
      l(y), m(y);
    } else if (p.key === "ArrowRight") {
      p.preventDefault();
      const y = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(y), m(y);
    } else if (p.key === "ArrowDown")
      p.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (p.key === "Home")
      p.preventDefault(), l(0), m(0);
    else if (p.key === "End") {
      p.preventDefault();
      const y = a.length - 1;
      l(y), m(y);
    }
  }, u = (p) => {
    if (p.key === "ArrowDown")
      p.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .resource-label") : null)?.focus();
    else if (p.key === "ArrowRight") {
      p.preventDefault();
      const y = d.current;
      y && y.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => m(0), 0));
  }, m = (p) => {
    const y = d.current?.querySelector(`[data-date-index="${p}"]`);
    y && y.focus();
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
            children: a.map((p, y) => {
              const g = p.getTime() === o.getTime(), h = i === y;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": y,
                  className: `date-column ${g ? "today" : ""} ${h ? "focused" : ""}`,
                  tabIndex: h ? 0 : -1,
                  role: "button",
                  "aria-label": `${p.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${g ? " (Today)" : ""}`,
                  onFocus: () => l(y),
                  onKeyDown: c,
                  children: p.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                y
              );
            })
          }
        )
      ]
    }
  );
}
function bp({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, d] = He(!1), [c, u] = He(-1), f = ze(null);
  Ve(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
    }, 0);
  }, [l, c, t.length]);
  const m = (g) => {
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
          g.preventDefault(), o === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-timeline") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 1}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowDown":
          g.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 3}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowLeft":
          g.preventDefault(), f.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (g.preventDefault(), d(!0), u(0));
          break;
      }
      return;
    }
    switch (g.key) {
      case "ArrowLeft":
        g.preventDefault();
        const h = Math.max(0, c - 1);
        u(h), f.current?.querySelector(`[data-task-index="${h}"]`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault();
        const C = Math.min(t.length - 1, c + 1);
        u(C), f.current?.querySelector(`[data-task-index="${C}"]`)?.focus();
        break;
      case "Enter":
        g.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        g.preventDefault(), c >= 0 && s?.(t[c]);
        break;
      case "Escape":
        g.preventDefault(), d(!1), u(-1), f.current?.focus();
        break;
    }
  }, p = (g) => {
    switch (g.key) {
      case "ArrowUp":
        g.preventDefault(), o === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-resource") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowDown":
        g.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault(), f.current?.focus();
        break;
    }
  }, y = (g) => {
    l && u(g);
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
            onKeyDown: m,
            onFocus: () => {
              l || u(-1);
            },
            children: t.map((g, h) => /* @__PURE__ */ r.jsx(
              gp,
              {
                task: g,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && c === h,
                taskIndex: h,
                tabIndex: l && c === h ? 0 : -1,
                onFocus: () => y(h)
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
function vy({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: s,
  onTaskDoubleClick: o
}) {
  const i = ze(null), [l, d] = He(800), c = De(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const g = new Date(n);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : g;
  }, [n]), u = De(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const g = new Date(a);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : g;
  }, [a]), f = De(() => Math.ceil((u.getTime() - c.getTime()) / 864e5) + 1, [c, u]);
  Ve(() => {
    if (!i.current || typeof window > "u") return;
    const g = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!g) return;
    const h = new g((T) => {
      const C = T[0];
      C && d(Math.max(C.contentRect.width - 220, 400));
    });
    return h.observe(i.current), () => h.disconnect();
  }, []);
  const m = De(
    () => Vs().domain([c, u]).range([0, l]),
    [c, u, l]
  ), p = De(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach((h) => {
      const T = g.get(h.resourceId) || [];
      T.push(h), g.set(h.resourceId, T);
    }), g;
  }, [t]), y = (g) => {
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
      onKeyDown: y,
      children: [
        /* @__PURE__ */ r.jsx(xp, { viewStart: c, viewEnd: u, dateCount: f }),
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
            children: e.map((g, h) => /* @__PURE__ */ r.jsx(
              bp,
              {
                resource: g,
                tasks: p.get(g.id) || [],
                scale: m,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: h,
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
const Ar = ({
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
) }), yp = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: s,
  text: o,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const d = () => t ? bt.Children.toArray(t).filter(
    (h) => bt.isValidElement(h) && (h.type === Ar || h.type?.displayName === "BreadcrumbItem")
  ).map((h) => ({
    text: typeof h.props.children == "string" ? h.props.children : String(h.props.children),
    href: h.props.href,
    active: h.props.active,
    attributes: h.props.attributes
  })) : [], c = () => t ? d() : s && o ? [{ href: s, text: o }] : e, u = () => {
    const g = c();
    if (g && g.length > 0) {
      const h = g.slice().reverse().find((T) => T.href && !T.active);
      if (h)
        return { href: h.href, text: h.text };
    }
    return { text: "Home" };
  }, f = c(), m = u(), p = ve(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    n
  ), y = a;
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: p,
      "aria-label": y,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          bt.Children.map(t, (g, h) => bt.isValidElement(g) && (g.type === Ar || g.type?.displayName === "BreadcrumbItem") ? bt.cloneElement(g, { key: h }) : null)
        ) : (
          // Render from items array
          f?.filter((g) => g.active || !!g.href).map((g, h) => /* @__PURE__ */ r.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: g.active ? /* @__PURE__ */ r.jsx(
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
          ) }, h))
        ) }),
        m.href && /* @__PURE__ */ r.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ r.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: m.href,
            role: "link",
            "aria-label": `Back to ${m.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              m.text
            ]
          }
        ) })
      ]
    }
  );
}, vp = yp;
vp.Item = Ar;
Ar.displayName = "BreadcrumbItem";
const tl = ({
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
  const i = ve("nhsuk-skip-link", n);
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
}, wy = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: a,
  classes: s,
  attributes: o = {}
}) => {
  const i = ve("nhsuk-pagination", s);
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
}, Sy = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: a = {}
}) => {
  const s = ve("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ r.jsx(
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
}, nl = bt.forwardRef(({
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
  const m = [
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
  ].filter(Boolean).join(" "), y = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), g = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const C = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      Jt,
      {
        level: a,
        className: y,
        children: C()
      }
    );
  }, h = () => u.children ? u.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: o }) : null, T = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
      className: m,
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
        /* @__PURE__ */ r.jsxs("div", { className: p, children: [
          g(),
          h(),
          T()
        ] })
      ]
    }
  );
});
nl.displayName = "Card";
const _y = ({
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
}, ky = ({
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
}, Cy = ({
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
  "aria-labelledby": m,
  "aria-describedby": p
}) => {
  const y = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), g = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), h = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const C = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], N = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        C,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      Jt,
      {
        level: a,
        className: g,
        children: N
      }
    );
  }, T = () => d || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: y,
      "data-testid": c,
      id: u,
      "aria-label": f,
      "aria-labelledby": m,
      "aria-describedby": p,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          h(),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: T() })
      ]
    }
  );
}, wp = ({
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
  const c = ve(
    "nhsuk-panel",
    t
  ), u = () => !n && !a && !l ? null : a ? /* @__PURE__ */ r.jsx(
    Jt,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    Jt,
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
}, Ny = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...s
}) => {
  const o = ve("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: o, ...s, children: i() });
}, jy = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...a
}) => {
  const s = ve(
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
}, Yn = { current: null }, Sp = () => {
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
}, _p = (e) => {
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
}, Er = (e, t, n) => {
  if (n || !t) return e;
  const a = Sp();
  if (a && a.languages) {
    const s = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (s)
      try {
        return a.highlight(e, a.languages[s], s);
      } catch {
      }
  }
  return _p(e);
}, kp = ({
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
  attributes: m,
  "data-testid": p,
  columns: y,
  data: g,
  visuallyHiddenCaption: h = !1
}) => {
  const T = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), C = ve(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    u
  ), N = ve(f), j = (b, S) => {
    const k = ve(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${b.format}`]: b.format
      },
      b.classes
    ), L = {
      scope: "col",
      ...b.colspan && { colSpan: b.colspan },
      ...b.rowspan && { rowSpan: b.rowspan },
      ...o && { role: "columnheader" },
      ...b.attributes
    };
    let B;
    if (b.node != null)
      B = /* @__PURE__ */ r.jsx(r.Fragment, { children: b.node });
    else if (b.html)
      B = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } });
    else if (b.code != null) {
      const $ = Array.isArray(b.code), A = $ ? b.code.join(`
`) : b.code, I = $ || A.includes(`
`), H = {
        className: ve("nhsuk-table__code", b.codeClassName, {
          "nhsuk-table__code--block": I,
          "nhsuk-table__code--inline": !I
        }),
        ...b.codeLanguage ? { "data-language": b.codeLanguage } : {}
      }, re = Er(A, b.codeLanguage);
      B = I ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: re }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: re }
        }
      );
    } else
      B = b.text;
    return /* @__PURE__ */ r.jsx("th", { className: k, ...L, children: B }, S);
  }, x = (b, S, k) => {
    const L = s && k || b.rowHeader, B = ve(
      L ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${L ? "header" : "cell"}--${b.format}`]: b.format
      },
      b.classes
    ), $ = {
      ...L && { scope: "row" },
      ...b.colspan && { colSpan: b.colspan },
      ...b.rowspan && { rowSpan: b.rowspan },
      ...o && {
        role: L ? "rowheader" : "cell",
        ...b.header && { "data-label": b.header }
      },
      ...b.attributes
    };
    let A;
    if (b.node != null)
      A = /* @__PURE__ */ r.jsx(r.Fragment, { children: b.node });
    else if (b.html)
      A = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } });
    else if (b.code != null) {
      const re = Array.isArray(b.code), G = re ? b.code.join(`
`) : b.code, R = re || G.includes(`
`), K = {
        className: ve("nhsuk-table__code", b.codeClassName, {
          "nhsuk-table__code--block": R,
          "nhsuk-table__code--inline": !R
        }),
        ...b.codeLanguage ? { "data-language": b.codeLanguage } : {}
      }, U = Er(
        G,
        b.codeLanguage,
        b.disableHighlight
      );
      A = R ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...K,
          dangerouslySetInnerHTML: { __html: U }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...K,
          dangerouslySetInnerHTML: { __html: U }
        }
      );
    } else
      A = b.text;
    const I = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      o && b.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        b.header,
        " "
      ] }),
      A
    ] }), H = L ? "th" : "td";
    return /* @__PURE__ */ r.jsx(H, { className: B, ...$, children: I }, S);
  };
  let M = t, D = e;
  !M && y && y.length && (M = y.map((b) => ({
    text: b.title,
    format: b.format,
    classes: b.headerClasses,
    attributes: b.headerAttributes
  }))), !D && y && g && g.length && (D = g.map((b, S) => y.map((k) => {
    const L = k.accessor ? k.accessor(b, S) : b[k.key];
    let B = { format: k.format, classes: k.cellClasses, attributes: k.cellAttributes };
    if (k.rowHeader && (B.rowHeader = !0), k.render) {
      const $ = k.render(L, b, S, k);
      return $ == null || typeof $ == "boolean" ? { ...B, text: "" } : typeof $ == "string" || typeof $ == "number" ? { ...B, text: String($) } : { ...B, ...$ };
    }
    return { ...B, text: L != null ? String(L) : "" };
  })));
  const _ = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: C,
      ...o && { role: "table" },
      ...m,
      ...p && { "data-testid": p },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: ve(T, h && "nhsuk-u-visually-hidden"), children: n }),
        M && M.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...o && { role: "row" }, children: M.map(
              (b, S) => j(b, S)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: D && D.map((b, S) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: b.map(
              (k, L) => x(k, L, L === 0)
            )
          },
          S
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ r.jsxs(wp, { className: c, children: [
    i && /* @__PURE__ */ r.jsx(Jt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    _()
  ] }) : N ? /* @__PURE__ */ r.jsx("div", { className: N, children: _() }) : _();
}, Cp = ({
  children: e,
  size: t,
  className: n
}) => {
  const a = ve(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    n
  );
  return /* @__PURE__ */ r.jsx("caption", { className: a, children: e });
}, rl = ({
  responsive: e,
  className: t,
  children: n,
  ...a
}) => {
  const s = e ? { role: "row" } : {};
  return /* @__PURE__ */ r.jsx("tr", { className: t, ...s, ...a, children: n });
}, al = ({
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
  responsive: m,
  as: p = "th"
}) => {
  const y = ve(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    d
  ), g = {
    scope: "col",
    ...c && { colSpan: c },
    ...u && { rowSpan: u },
    ...m && { role: "columnheader" },
    ...f
  };
  let h;
  if (n != null) h = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) h = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const C = Array.isArray(a), N = C ? a.join(`
`) : a, j = C || N.includes(`
`), x = {
      className: ve("nhsuk-table__code", o, {
        "nhsuk-table__code--block": j,
        "nhsuk-table__code--inline": !j
      }),
      ...s ? { "data-language": s } : {}
    }, M = Er(
      N,
      s,
      i
    );
    h = j ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...x,
        dangerouslySetInnerHTML: { __html: M }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...x, dangerouslySetInnerHTML: { __html: M } });
  } else h = e;
  const T = p;
  return /* @__PURE__ */ r.jsx(T, { className: y, ...g, children: h });
}, Np = ({
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
  responsive: m,
  rowHeader: p
}) => {
  const y = !!p, g = y ? "th" : "td", h = ve(
    y ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${y ? "header" : "cell"}--${l}`,
    d
  ), T = {
    ...c && { colSpan: c },
    ...u && { rowSpan: u },
    ...y && { scope: "row" },
    ...m && { role: y ? "rowheader" : "cell" },
    ...f
  };
  let C;
  if (n != null) C = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) C = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const N = Array.isArray(a), j = N ? a.join(`
`) : a, x = N || j.includes(`
`), M = {
      className: ve("nhsuk-table__code", o, {
        "nhsuk-table__code--block": x,
        "nhsuk-table__code--inline": !x
      }),
      ...s ? { "data-language": s } : {}
    }, D = Er(j, s, i);
    C = x ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ...M, dangerouslySetInnerHTML: { __html: D } }) }) : /* @__PURE__ */ r.jsx("code", { ...M, dangerouslySetInnerHTML: { __html: D } });
  } else C = e;
  return /* @__PURE__ */ r.jsx(g, { className: h, ...T, children: C });
}, Qt = kp;
Qt.Caption = Cp;
Qt.BodyRow = rl;
Qt.HeaderCell = al;
Qt.Cell = Np;
let Bo = !1, Ho = !1;
Object.defineProperty(Qt, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Bo && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), Bo = !0), rl;
  }
});
Object.defineProperty(Qt, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Ho && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), Ho = !0), al;
  }
});
const My = Hn(({
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
}, m) => {
  const p = n !== void 0, [y, g] = He(() => t || e[0]?.id || ""), h = p ? n : y, T = ze(null), C = ze(/* @__PURE__ */ new Map()), N = ge((S) => {
    p || g(S), a?.(S);
  }, [p, a]), j = ge((S) => {
    s?.(S), l && N(S);
  }, [s, l, N]), x = ge((S, k) => {
    const L = e.filter((A) => !A.disabled).map((A) => A.id), B = L.indexOf(k);
    let $ = null;
    switch (S.key) {
      case "ArrowLeft":
        $ = B > 0 ? B - 1 : L.length - 1;
        break;
      case "ArrowRight":
        $ = B < L.length - 1 ? B + 1 : 0;
        break;
      case "Home":
        $ = 0;
        break;
      case "End":
        $ = L.length - 1;
        break;
      case "Escape":
        S.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if ($ !== null) {
      S.preventDefault();
      const A = L[$], I = C.current.get(A);
      I && (I.focus(), j(A));
    }
  }, [e, j, i]), M = ge((S, k) => {
    k ? C.current.set(S, k) : C.current.delete(S);
  }, []), D = ge((S) => {
    const k = C.current.get(S);
    k && k.focus();
  }, []);
  wi(m, () => ({
    focusTab: D,
    getActiveTab: () => h,
    getTabListElement: () => T.current
  }), [D, h]);
  const _ = ge((S) => {
    const k = S.relatedTarget;
    T.current?.contains(k) || o?.();
  }, [o]), b = ve("nhsuk-tabs", d);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: b,
      id: c,
      "data-testid": u,
      ...f,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: T,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: _,
                children: e.map((S) => {
                  const k = S.id === h, L = S.disabled, B = ve("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": k,
                    "nhsuk-tabs__list-item--disabled": L
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: B, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: ($) => M(S.id, $),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": k,
                      "aria-controls": `${S.id}-panel`,
                      id: `${S.id}-tab`,
                      tabIndex: k ? 0 : -1,
                      disabled: L,
                      onClick: () => !L && N(S.id),
                      onKeyDown: ($) => !L && x($, S.id),
                      onFocus: () => !L && j(S.id),
                      ...S.attributes,
                      children: S.label
                    }
                  ) }, S.id);
                })
              }
            )
          }
        ),
        e.map((S) => {
          const k = S.id === h;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${S.id}-tab`,
              id: `${S.id}-panel`,
              hidden: !k,
              children: S.content
            },
            S.id
          );
        })
      ]
    }
  );
}), jp = Hn(
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
    let m;
    return l ? m = l : a ? m = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (m = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: u,
        open: s,
        ...d,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
jp.displayName = "Details";
const Mp = Hn(
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
    ), f = (p) => t === "cross" && !a ? `do not ${p}` : p, m = () => /* @__PURE__ */ r.jsx(
      Jt,
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
          m(),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: c.join(" "), role: "list", children: n.map((p, y) => /* @__PURE__ */ r.jsxs("li", { children: [
            u(),
            f(p.item)
          ] }, y)) }) })
        ]
      }
    );
  }
);
Mp.displayName = "DoDontList";
const Ip = Hn(
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
    let m;
    return l ? m = l : a ? m = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (m = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: u,
        open: s,
        ...d,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
Ip.displayName = "Expander";
const Dp = Hn(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, s) => {
    const o = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, d) => {
      const c = d + 1, u = `${t}-${c}-hint`, f = `${t}-${c}-status`, m = !!l.href, p = [
        "nhsuk-task-list__item",
        m && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), y = [
        l.hint && u,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        Tp,
        {
          item: l,
          itemClasses: p,
          hasLink: m,
          hintId: u,
          statusId: f,
          ariaDescribedBy: y
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
), Tp = ({
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
    return e.status.tag ? u = /* @__PURE__ */ r.jsx(Ze, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ r.jsx("div", { className: c, id: s, children: u });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    d()
  ] });
};
Dp.displayName = "TaskList";
const Iy = ({
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
        bi(
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
}, Dy = ({
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
}, Lp = ({
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
    /* @__PURE__ */ r.jsx(gt, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ r.jsx(gt, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ r.jsx(gt, { variant: "secondary", size: "small", onClick: n, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ r.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ r.jsx(
      _r,
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
      _r,
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
] }), $p = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(Ze, { color: Ap(n.status), text: n.label }) }, n.status)) });
function Ap(e) {
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
const Ty = ({
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
  legendItems: m,
  enableDefaultLegend: p = !0,
  legendPlacement: y = "bottom",
  onA11yModeChange: g
}) => {
  const [h, T] = He("grid"), C = i || h, [N, j] = He(a || []), x = n ?? N, M = De(() => {
    const $ = /* @__PURE__ */ new Set();
    return e.forEach((A) => $.add(new Date(A.start).getTime())), Array.from($).sort((A, I) => A - I);
  }, [e]), D = De(() => {
    const $ = {};
    return e.forEach((A) => {
      const I = new Date(A.start).getTime();
      $[I] || ($[I] = {});
      const H = A.capacity - A.booked - (A.held || 0);
      $[I][A.sessionId] = { slot: A, remaining: H };
    }), $;
  }, [e]), _ = ge(($) => {
    if (o === "single") {
      const A = [$.id];
      n || j(A), s?.(A, { lastAction: "select" });
    } else {
      const A = x.includes($.id), I = A ? x.filter((H) => H !== $.id) : [...x, $.id];
      n || j(I), s?.(I, { lastAction: A ? "deselect" : "select" });
    }
  }, [o, x, n, s]), b = De(() => m || (p ? Array.from(new Set(e.map((A) => A.status))).map((A) => ({
    status: A,
    label: A.charAt(0).toUpperCase() + A.slice(1)
  })) : void 0), [m, p, e]), S = b ? /* @__PURE__ */ r.jsx(
    $p,
    {
      items: b,
      orientation: y === "left" || y === "right" ? "vertical" : "horizontal"
    }
  ) : null, k = ($) => {
    i || T($), g?.($);
  }, L = u || (f ? /* @__PURE__ */ r.jsx(
    Lp,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: C,
      onA11yModeChange: k
    }
  ) : null), B = /* @__PURE__ */ r.jsx("div", { style: d, className: ve(l), children: /* @__PURE__ */ r.jsx(Za, { className: ve("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(an, { children: /* @__PURE__ */ r.jsx(qn, { width: xn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    L,
    y === "top" && S,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map(($) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => _($), "aria-pressed": x.includes($.id), children: [
      Zn(new Date($.start)),
      " – ",
      Zn(new Date($.end)),
      " (",
      $.status,
      ")"
    ] }) }, $.id)) }),
    y === "bottom" && S
  ] }) }) }) }) });
  return C === "list" ? B : /* @__PURE__ */ r.jsx("div", { style: d, className: ve(l), children: /* @__PURE__ */ r.jsx(Za, { className: ve("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(an, { children: /* @__PURE__ */ r.jsx(qn, { width: xn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    L,
    y === "top" && S,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": M.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map(($) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${$.specialty}`, className: "nhs-slot-matrix__session-header", children: $.specialty }, $.id))
      ] }),
      M.map(($) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Zn(new Date($)), children: Zn(new Date($)) }),
        t.map((A) => {
          const I = D[$]?.[A.id];
          if (!I)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, A.id);
          const { slot: H, remaining: re } = I, G = x.includes(H.id), R = c ? c(H) : `Slot ${Zn(new Date(H.start))} ${H.status}${re === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": H.status,
              className: ve("nhs-slot-matrix__cell", G && "nhs-slot-matrix__cell--selected"),
              "aria-label": R,
              "aria-selected": G || void 0,
              onClick: () => _(H),
              children: re > 0 ? `${re} left` : "Full"
            },
            H.id
          );
        })
      ] }, $))
    ] }),
    y === "bottom" && S
  ] }) }) }) }) });
};
function zo(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Zn(e) {
  return `${zo(e.getHours())}:${zo(e.getMinutes())}`;
}
const Ep = ({
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
    /* @__PURE__ */ r.jsx(Jt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, Ly = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(Za, { children: /* @__PURE__ */ r.jsx(an, { children: e.map((s, o) => /* @__PURE__ */ r.jsx(
    qn,
    {
      width: xn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": o,
      children: /* @__PURE__ */ r.jsx(Ep, { ...s })
    },
    o
  )) }) }) });
}, Pp = bt.forwardRef(
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
    tableClassName: m,
    bordered: p = !1,
    striped: y = !1,
    responsive: g = !1,
    tableType: h = "default"
  }, T) => {
    const C = ze(null), N = ze(null), j = ze(null);
    bt.useImperativeHandle(T, () => C.current, []);
    const [x, M] = He(0), [D, _] = He(0), [b, S] = He("headers"), [k, L] = He("browse"), B = t.length, $ = e.length, A = De(() => !n || n.length === 0 ? e : [...e].sort((U, X) => {
      for (const { key: Y, direction: Q } of n) {
        const ce = U[Y], ie = X[Y];
        if (ce == null && ie == null) continue;
        if (ce == null) return 1;
        if (ie == null) return -1;
        let ne = 0;
        if (typeof ce == "number" && typeof ie == "number" ? ne = ce - ie : ne = String(ce).localeCompare(String(ie)), ne !== 0)
          return Q === "asc" ? ne : -ne;
      }
      return 0;
    }), [e, n]), I = ge((U, X) => {
      setTimeout(() => {
        const Y = C.current?.querySelector(
          `tbody tr:nth-child(${U + 1}) td:nth-child(${X + 1})`
        );
        Y && (Y.focus(), typeof Y.scrollIntoView == "function" && Y.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), H = ge((U) => {
      setTimeout(() => {
        const X = C.current?.querySelector(`th:nth-child(${U + 1})`);
        X && (X.focus(), typeof X.scrollIntoView == "function" && X.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), re = ge((U) => {
      a?.(U);
    }, [a]), G = ge((U) => {
      o?.(U);
    }, [o]), R = ge((U) => {
      const { key: X } = U;
      switch (X) {
        case "Enter":
          if (U.preventDefault(), b === "headers" && k === "browse")
            L("navigate"), H(D);
          else if (b === "headers" && k === "navigate") {
            const Y = t[D];
            Y && re(Y.key);
          } else b === "cells" && k === "browse" ? (L("navigate"), I(x, D)) : b === "cells" && k === "navigate" && G(x);
          break;
        case "Escape":
          U.preventDefault(), (b === "headers" && k === "navigate" || b === "cells" && k === "navigate") && L("browse");
          break;
        case "ArrowLeft":
          if (U.preventDefault(), k === "navigate" || k === "browse" && b === "headers") {
            if (b === "headers") {
              const Y = Math.max(0, D - 1);
              _(Y), H(Y);
            } else if (b === "cells") {
              const Y = Math.max(0, D - 1);
              _(Y), I(x, Y);
            }
          }
          break;
        case "ArrowRight":
          if (U.preventDefault(), k === "navigate" || k === "browse" && b === "headers") {
            if (b === "headers") {
              const Y = Math.min(B - 1, D + 1);
              _(Y), H(Y);
            } else if (b === "cells") {
              const Y = Math.min(B - 1, D + 1);
              _(Y), I(x, Y);
            }
          }
          break;
        case "ArrowUp":
          if (U.preventDefault(), b === "cells") {
            if (k === "browse") {
              const Y = Math.max(0, x - 1);
              M(Y), I(Y, 0), _(0);
            } else if (k === "navigate")
              if (x > 0) {
                const Y = x - 1;
                M(Y), I(Y, D);
              } else
                S("headers"), L("browse"), H(D);
          }
          break;
        case "ArrowDown":
          if (U.preventDefault(), b === "headers" && k === "browse")
            S("cells"), M(0), _(0), I(0, 0);
          else if (b === "cells") {
            const Y = $ - 1;
            if (k === "browse") {
              const Q = Math.min(Y, x + 1);
              M(Q), I(Q, 0), _(0);
            } else if (k === "navigate" && x < Y) {
              const Q = x + 1;
              M(Q), I(Q, D);
            }
          }
          break;
        case "Home":
          U.preventDefault(), b === "headers" ? (_(0), H(0)) : b === "cells" && (U.ctrlKey ? (M(0), _(0), I(0, 0)) : (_(0), I(x, 0)));
          break;
        case "End":
          if (U.preventDefault(), b === "headers") {
            const Y = B - 1;
            _(Y), H(Y);
          } else if (b === "cells")
            if (U.ctrlKey) {
              const Y = $ - 1, Q = B - 1;
              M(Y), _(Q), I(Y, Q);
            } else {
              const Y = B - 1;
              _(Y), I(x, Y);
            }
          break;
        case " ":
          if (U.preventDefault(), b === "headers" && k === "navigate") {
            const Y = t[D];
            Y && re(Y.key);
          } else b === "cells" && k === "navigate" && G(x);
          break;
      }
    }, [
      b,
      k,
      D,
      x,
      B,
      $,
      t,
      I,
      H,
      re,
      G
    ]);
    Ve(() => {
      const U = C.current;
      if (U)
        return U.addEventListener("keydown", R), () => U.removeEventListener("keydown", R);
    }, [R]);
    const K = ve(
      "nhsuk-table",
      m,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": p,
        "nhsuk-table--striped": y,
        "nhsuk-table--compact": h === "compact"
      },
      f
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: C,
        className: K,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": c,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: N, role: "row", children: t.map((U, X) => {
            const Y = n?.find((ie) => ie.key === U.key), Q = !!Y, ce = b === "headers" && D === X;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: ve("sortable-header", {
                  "sortable-header--focused": ce
                }),
                role: "columnheader",
                tabIndex: ce ? 0 : -1,
                onClick: () => re(U.key),
                onKeyDown: (ie) => {
                  (ie.key === "Enter" || ie.key === " ") && (ie.preventDefault(), re(U.key));
                },
                "aria-sort": Q ? Y?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: U.label }),
                  Q && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((ie) => ie.key === U.key) + 1 }),
                    /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: Y?.direction === "asc" ? /* @__PURE__ */ r.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ r.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              U.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: j, className: "nhsuk-table__body", role: "rowgroup", children: A.map((U, X) => {
            const Y = s === X, Q = b === "cells" && x === X;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: ve("data-row", {
                  "data-row--selected": Y,
                  "data-row--focused": Q
                }),
                "aria-selected": Y,
                children: t.map((ce, ie) => {
                  const ne = ce.tableRenderer ? ce.tableRenderer(U) : ce.render ? ce.render(U) : U[ce.key], ee = b === "cells" && x === X && D === ie, te = () => typeof ne == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: ne ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: ne ? "Yes" : "No" })
                  ] }) : String(ne ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ve("data-cell", {
                        "data-cell--focused": ee
                      }),
                      tabIndex: ee ? 0 : -1,
                      onClick: () => G(X),
                      children: te()
                    },
                    ce.key
                  );
                })
              },
              X
            );
          }) })
        ]
      }
    );
  }
);
Pp.displayName = "AriaDataGrid";
const sl = ({
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
  const f = ze(null), m = ze(null), p = ze(null), y = ge((b, S) => {
    d || (m.current = S, b.dataTransfer.effectAllowed = "move", b.dataTransfer.setData("text/plain", S));
  }, [d]), g = ge((b, S) => {
    d || m.current === S || (b.preventDefault(), b.dataTransfer.dropEffect = "move", p.current = S);
  }, [d]), h = ge((b, S) => {
    if (d) return;
    b.preventDefault();
    const k = m.current;
    if (!k || k === S) return;
    const L = e.findIndex(($) => $.key === k), B = e.findIndex(($) => $.key === S);
    if (L !== -1 && B !== -1) {
      const $ = [...e], [A] = $.splice(L, 1);
      $.splice(B, 0, A), n($);
    }
    m.current = null, p.current = null;
  }, [d, e, n]), T = ge(() => {
    m.current = null, p.current = null;
  }, []), C = ge((b) => {
    const S = t.find((k) => k.key === b);
    return S ? S.label : b;
  }, [t]), N = ge((b) => ["red", "orange", "blue", "aqua-green", "grey"][b] || "grey", []), j = ge((b) => {
    if (d) return;
    const S = e.map(
      (k) => k.key === b ? { ...k, direction: k.direction === "asc" ? "desc" : "asc" } : k
    );
    n(S);
  }, [e, n, d]), x = ge((b) => {
    if (d) return;
    const S = e.filter((k) => k.key !== b);
    n(S);
  }, [e, n, d]), M = ge(() => {
    d || n([]);
  }, [n, d]), D = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const b = e.map((S, k) => {
      const L = S.direction === "asc" ? "ascending" : "descending";
      return `${k + 1}. ${C(S.key)} (${L})`;
    });
    if (b.length === 1)
      return `Sorted by: ${b[0]}`;
    if (b.length === 2)
      return `Sorted by: ${b.join(" and ")}`;
    {
      const S = b.pop();
      return `Sorted by: ${b.join(", ")}, and ${S}`;
    }
  }, _ = De(() => {
    const b = ["sort-description"];
    return l && b.push("sort-help"), u && b.push(u), b.join(" ");
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
          "aria-describedby": _,
          children: e.map((b, S) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (k) => y(k, b.key),
              onDragOver: (k) => g(k, b.key),
              onDrop: (k) => h(k, b.key),
              onDragEnd: T,
              onClick: () => j(b.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": b.key,
              children: /* @__PURE__ */ r.jsx(
                Ze,
                {
                  color: N(S),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => x(b.key),
                  disabled: d,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${S + 1}`, children: S + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: C(b.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (k) => {
                          k.stopPropagation(), j(b.key);
                        },
                        disabled: d,
                        "aria-label": `Toggle sort direction for ${C(b.key)}. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ r.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${b.direction}`, children: /* @__PURE__ */ r.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${b.direction}`,
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
            b.key
          ))
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
        gt,
        {
          variant: "secondary",
          onClick: M,
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
const ts = Hn(function(t, n) {
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
    id: p,
    isLoading: y = !1,
    loadingComponent: g,
    error: h = null,
    errorComponent: T,
    "data-testid": C,
    actions: N,
    actionsMinGap: j = 16,
    forceActionsAbove: x = !1
  } = t, D = ze(
    p || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, _ = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), b = `${D}-description`, S = `${D}-navigation-help`, {
    dataComparator: k = (w, P) => JSON.stringify(w) === JSON.stringify(P),
    filterFunction: L = (w) => w,
    booleanRenderer: B = (w) => w ? "✓" : "✗"
  } = a || {}, $ = o !== void 0, A = o ?? 0, [I, H] = He({
    focusArea: "tabs",
    focusedTabIndex: A,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), re = De(() => ({
    selectedIndex: A,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [A]), [G, R] = Si(Fp, re);
  Ve(() => {
    const w = G.tabLoadingStates.length, P = s.length;
    w !== P && R({ type: "ADJUST_ARRAYS", payload: { newLength: P } });
  }, [s.length]), Ve(() => {
    $ && R({ type: "SET_SELECTED_INDEX", payload: A });
  }, [A, $]), Ve(() => {
    H((w) => ({
      ...w,
      focusArea: "tabs",
      focusedTabIndex: G.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [G.selectedIndex]), Ve(() => {
    l && l(G.globalSelectedRowData);
  }, [G.globalSelectedRowData, l]);
  const K = ge(
    (w, P) => k(w, P),
    [k]
  ), U = ge(
    (w) => {
      w >= 0 && w < s.length && !s[w].disabled && (R({ type: "SET_SELECTED_INDEX", payload: w }), H((P) => ({
        ...P,
        focusedTabIndex: w,
        focusArea: "tabs"
      })), i?.(w));
    },
    [s, i]
  ), X = ze(!1), Y = ge(
    (w, P) => {
      if (!P?.force && !X.current && w === 0) {
        X.current = !0;
        return;
      }
      X.current = !0, setTimeout(() => {
        const W = Q.current[w], V = W?.parentElement;
        if (W && V) {
          const J = W.offsetLeft, q = W.offsetWidth, he = V.clientWidth, pe = J - he / 2 + q / 2;
          try {
            V.scrollTo({
              left: Math.max(0, pe),
              behavior: "smooth"
            });
          } catch {
            W.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!W,
          tabListElementExists: !!V
        });
      }, 50);
    },
    []
  ), Q = ze([]), ce = ze([]), ie = ge(
    (w, P) => {
      const W = G.sortConfig || [], V = W.find(
        (he) => he.key === P
      );
      let J;
      V ? V.direction === "asc" ? J = W.map(
        (he) => he.key === P ? { ...he, direction: "desc" } : he
      ) : J = W.filter(
        (he) => he.key !== P
      ) : J = [...W, { key: P, direction: "asc" }], R({
        type: "SET_SORT",
        payload: J
      }), s[w].onSort?.(P);
    },
    [G.sortConfig, s]
  ), ne = ge(
    (w) => {
      setTimeout(() => {
        const P = document.querySelector(
          `[data-tab-panel="${G.selectedIndex}"] th:nth-child(${w + 1})`
        );
        P && P.focus();
      }, 0);
    },
    [G.selectedIndex]
  ), ee = ge(
    (w) => B(w),
    [B]
  ), te = ge(
    (w, P) => {
      setTimeout(() => {
        const W = document.querySelector(
          `[data-tab-panel="${G.selectedIndex}"] tbody tr:nth-child(${w + 1}) td:nth-child(${P + 1})`
        );
        W && W.focus();
      }, 0);
    },
    [G.selectedIndex]
  );
  Ve(() => {
    I.isGridActive && (I.focusArea === "headers" ? setTimeout(() => {
      ne(I.focusedHeaderIndex);
    }, 0) : I.focusArea === "cells" && setTimeout(() => {
      te(
        I.focusedRowIndex,
        I.focusedColumnIndex
      );
    }, 0));
  }, [
    I.focusArea,
    I.isGridActive,
    I.focusedHeaderIndex,
    I.focusedRowIndex,
    I.focusedColumnIndex,
    ne,
    te
  ]), Ve(() => {
    Y(G.selectedIndex);
  }, [G.selectedIndex, Y]);
  const se = ge(
    (w, P) => {
      const { key: W } = w, V = s[G.selectedIndex], J = V?.columns.length || 0;
      switch (W) {
        case "ArrowLeft":
          w.preventDefault();
          const q = Math.max(0, P - 1);
          H((_e) => ({
            ..._e,
            focusedHeaderIndex: q
          })), ne(q);
          break;
        case "ArrowRight":
          w.preventDefault();
          const he = Math.min(J - 1, P + 1);
          H((_e) => ({
            ..._e,
            focusedHeaderIndex: he
          })), ne(he);
          break;
        case "ArrowUp":
          w.preventDefault(), H((_e) => ({
            ..._e,
            focusArea: "tabs",
            focusedTabIndex: G.selectedIndex
          })), Y(G.selectedIndex), Q.current[G.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          w.preventDefault(), H((_e) => ({
            ..._e,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: P,
            isGridActive: !0
          }));
          break;
        case "Home":
          w.preventDefault(), H((_e) => ({ ..._e, focusedHeaderIndex: 0 })), ne(0);
          break;
        case "End":
          w.preventDefault();
          const pe = J - 1;
          H((_e) => ({
            ..._e,
            focusedHeaderIndex: pe
          })), ne(pe);
          break;
        case "Enter":
        case " ":
          w.preventDefault();
          const ye = V?.columns[P]?.key;
          ye && ie(G.selectedIndex, ye);
          break;
      }
    },
    [
      s,
      G.selectedIndex,
      ie,
      H,
      ne,
      te,
      Q
    ]
  ), z = ge(
    (w, P, W) => {
      const { key: V } = w, J = s[G.selectedIndex], q = J?.data.length || 0, he = J?.columns.length || 0;
      switch (V) {
        case "ArrowUp":
          if (w.preventDefault(), P === 0)
            H((me) => ({
              ...me,
              focusArea: "headers",
              focusedHeaderIndex: W,
              isGridActive: !1
            })), ne(W);
          else {
            const me = P - 1;
            H((Te) => ({
              ...Te,
              focusedRowIndex: me
            })), te(me, W);
          }
          break;
        case "ArrowDown":
          w.preventDefault();
          const pe = Math.min(q - 1, P + 1);
          H((me) => ({
            ...me,
            focusedRowIndex: pe
          })), te(pe, W);
          break;
        case "ArrowLeft":
          w.preventDefault();
          const ye = Math.max(0, W - 1);
          H((me) => ({
            ...me,
            focusedColumnIndex: ye
          })), te(P, ye);
          break;
        case "ArrowRight":
          w.preventDefault();
          const _e = Math.min(he - 1, W + 1);
          H((me) => ({
            ...me,
            focusedColumnIndex: _e
          })), te(P, _e);
          break;
        case "Home":
          w.preventDefault(), w.ctrlKey ? (H((me) => ({
            ...me,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), te(0, 0)) : (H((me) => ({ ...me, focusedColumnIndex: 0 })), te(P, 0));
          break;
        case "End":
          if (w.preventDefault(), w.ctrlKey) {
            const me = q - 1, Te = he - 1;
            H((Re) => ({
              ...Re,
              focusedRowIndex: me,
              focusedColumnIndex: Te
            })), te(me, Te);
          } else {
            const me = he - 1;
            H((Te) => ({
              ...Te,
              focusedColumnIndex: me
            })), te(P, me);
          }
          break;
        case "Enter":
        case " ":
          if (w.preventDefault(), J && J.data[P]) {
            const me = J.data.some(
              (Ge) => "ews_data" in Ge
            ) ? L(J.data, G.filters) : J.data, Te = G.sortConfig;
            let Re = me;
            if (Te && Te.length > 0 && (Re = [...me].sort((Ge, Be) => {
              for (const { key: nt, direction: Je } of Te) {
                let it = Ge[nt], st = Be[nt];
                const tt = J.columns.find(
                  (At) => At.key === nt
                );
                if (tt?.tableRenderer ? (it = tt.tableRenderer(Ge), st = tt.tableRenderer(Be)) : tt?.render && (it = tt.render(Ge), st = tt.render(Be)), it == null && st == null) continue;
                if (it == null) return Je === "asc" ? -1 : 1;
                if (st == null) return Je === "asc" ? 1 : -1;
                let Xe = 0;
                if (typeof it == "number" && typeof st == "number" ? Xe = it - st : Xe = String(it).localeCompare(
                  String(st),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), Xe !== 0)
                  return Je === "asc" ? Xe : -Xe;
              }
              return 0;
            })), Re[P]) {
              const Ge = Re[P], nt = G.globalSelectedRowData && K(G.globalSelectedRowData, Ge) ? null : Ge;
              R({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: nt
              });
            }
          }
          break;
      }
    },
    [
      s,
      G.selectedIndex,
      G.filters,
      G.sortConfig,
      L,
      K,
      R,
      H,
      ne,
      te
    ]
  ), oe = ge(
    (w, P) => L(w, P),
    [L]
  );
  if (wi(
    n,
    () => ({
      selectTab: (w) => {
        w >= 0 && w < s.length && (R({ type: "SET_SELECTED_INDEX", payload: w }), i?.(w));
      },
      refreshData: (w) => {
        console.log("Refreshing data for tab:", w ?? "all");
      },
      exportData: (w) => {
        const P = w ?? G.selectedIndex, W = s[P];
        return W ? W.data : [];
      },
      getSelectedRows: (w) => G.globalSelectedRowData ? [] : [],
      clearSelection: (w) => {
        R({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (w) => {
        R({ type: "SET_FILTERS", payload: w });
      }
    }),
    [G.selectedIndex, G.selectedRows, s, i]
  ), y)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": C,
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
  if (h)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`,
        "data-testid": C,
        children: T || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: h })
        ] })
      }
    );
  const ae = ze(null), ue = ze(null), de = ze(null), [we, be] = He(!0);
  Ve(() => {
    if (!N) {
      be(!1);
      return;
    }
    if (x) {
      be(!1);
      return;
    }
    function w() {
      if (!ae.current || !ue.current || !de.current) return;
      const V = ae.current.clientWidth, J = Array.from(
        ue.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), q = J.reduce((_e, me) => _e + me.offsetWidth, 0), he = de.current.offsetWidth, pe = Math.max(8 * (J.length - 1), 0), ye = q + pe + he + j <= V;
      be(ye);
    }
    const P = requestAnimationFrame(() => w()), W = new ResizeObserver(() => w());
    return ae.current && W.observe(ae.current), ue.current && W.observe(ue.current), () => {
      cancelAnimationFrame(P), W.disconnect();
    };
  }, [N, j, x, s.length]);
  const Se = de, le = ge(() => Se.current ? Array.from(
    Se.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((w) => !w.hasAttribute("disabled")) : [], []), Z = ge(
    (w) => {
      const P = le();
      if (!P.length) return;
      const W = Math.max(0, Math.min(w, P.length - 1));
      P[W].focus(), H((V) => ({ ...V, focusArea: "actions", focusedActionIndex: W }));
    },
    [le]
  ), v = ge(() => Z(0), [Z]), E = ge(
    (w, P) => {
      const { key: W } = w, V = s.length - 1;
      switch (W) {
        case "ArrowUp": {
          N && !we && (w.preventDefault(), v());
          break;
        }
        case "ArrowLeft": {
          w.preventDefault();
          const J = P > 0 ? P - 1 : V;
          U(J), Y(J), Q.current[J]?.focus();
          break;
        }
        case "ArrowRight": {
          if (w.preventDefault(), P === V && N && we) {
            v();
            return;
          }
          const J = P < V ? P + 1 : 0;
          U(J), Y(J), Q.current[J]?.focus();
          break;
        }
        case "ArrowDown": {
          w.preventDefault(), H((J) => ({
            ...J,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          w.preventDefault(), U(0), Y(0), Q.current[0]?.focus();
          break;
        }
        case "End": {
          w.preventDefault(), U(V), Y(V), Q.current[V]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          w.preventDefault(), U(P);
          break;
        }
        case "Tab": {
          !w.shiftKey && P === V && N && we && v();
          break;
        }
      }
    },
    [s.length, U, Y, N, we, v]
  ), F = ge((w) => {
    const { key: P } = w, W = le();
    if (!W.length) return;
    const V = W.findIndex((J) => J === document.activeElement);
    switch (P) {
      case "ArrowLeft": {
        if (we)
          if (V > 0)
            w.preventDefault(), Z(V - 1);
          else {
            w.preventDefault();
            const J = s.length - 1;
            U(J), Y(J), Q.current[J]?.focus(), H((q) => ({ ...q, focusArea: "tabs", focusedTabIndex: J }));
          }
        break;
      }
      case "ArrowRight": {
        we && (V < W.length - 1 ? (w.preventDefault(), Z(V + 1)) : (w.preventDefault(), U(0), Y(0), Q.current[0]?.focus(), H((J) => ({ ...J, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (we)
          w.preventDefault(), H((J) => ({ ...J, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          w.preventDefault();
          const J = G.selectedIndex;
          Q.current[J]?.focus(), H((q) => ({ ...q, focusArea: "tabs", focusedTabIndex: J }));
        }
        break;
      }
    }
  }, [le, we, Z, s.length, U, Y, G.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${m} ${u}`,
      id: p,
      "data-testid": C,
      ref: ae,
      children: [
        c && !_ && /* @__PURE__ */ r.jsx("div", { id: b, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: S,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          sl,
          {
            sortConfig: G.sortConfig || [],
            columns: s.flatMap(
              (w) => w.columns.map((P) => ({ key: P.key, label: P.label }))
            ).filter(
              (w, P, W) => W.findIndex((V) => V.key === w.key) === P
              // Remove duplicates
            ),
            onSortChange: (w) => {
              R({ type: "SET_SORT", payload: w });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        N && !we && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: de,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: F,
            children: N
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${we ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": c ? _ ? c : b : S,
              "aria-orientation": m,
              className: "aria-tabs-datagrid__tabs",
              ref: ue,
              children: s.map((w, P) => {
                const W = P === G.selectedIndex, V = w.disabled || f;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${w.id}`,
                    "aria-controls": `panel-${w.id}`,
                    "aria-selected": W,
                    "aria-disabled": V,
                    tabIndex: W ? 0 : -1,
                    ref: (J) => {
                      Q.current[P] = J;
                    },
                    onClick: () => U(P),
                    onKeyDown: (J) => E(J, P),
                    disabled: V,
                    className: [
                      "aria-tabs-datagrid__tab",
                      W ? "aria-tabs-datagrid__tab--selected" : "",
                      V ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: w.label }),
                      G.tabLoadingStates[P] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      G.tabErrors[P] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  w.id
                );
              })
            }
          ),
          N && we && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: de,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: F,
              children: N
            }
          )
        ] }),
        s.map((w, P) => {
          const W = P === G.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${w.id}`,
              "aria-labelledby": `tab-${w.id}`,
              tabIndex: 0,
              hidden: !W,
              ref: (V) => {
                ce.current[P] = V;
              },
              className: `aria-tabs-datagrid__panel ${w.className || ""}`,
              "data-tab-panel": P,
              children: W && (() => {
                const V = w.data.some(
                  (q) => "ews_data" in q
                ) ? oe(w.data, G.filters) : w.data, J = De(() => {
                  const q = G.sortConfig;
                  return !q || q.length === 0 ? V : [...V].sort((he, pe) => {
                    for (const { key: ye, direction: _e } of q) {
                      let me = he[ye], Te = pe[ye];
                      const Re = w.columns.find(
                        (Be) => Be.key === ye
                      );
                      if (Re?.tableRenderer ? (me = Re.tableRenderer(he), Te = Re.tableRenderer(pe)) : Re?.render && (me = Re.render(he), Te = Re.render(pe)), me == null && Te == null) continue;
                      if (me == null) return 1;
                      if (Te == null) return -1;
                      let Ge = 0;
                      if (typeof me == "number" && typeof Te == "number" ? Ge = me - Te : typeof me == "boolean" && typeof Te == "boolean" ? Ge = me === Te ? 0 : me ? 1 : -1 : Ge = String(me).localeCompare(
                        String(Te),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Ge !== 0)
                        return _e === "asc" ? Ge : -Ge;
                    }
                    return 0;
                  });
                }, [V, G.sortConfig, w.columns]);
                return /* @__PURE__ */ r.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": w.ariaLabel,
                    "aria-describedby": w.ariaDescription ? `panel-${w.id}-description` : void 0,
                    children: [
                      w.ariaDescription && /* @__PURE__ */ r.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${w.id}-description`,
                          children: w.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: w.columns.map((q, he) => {
                        const pe = G.sortConfig?.find(
                          (me) => me.key === q.key
                        ), ye = !!pe, _e = I.focusArea === "headers" && I.focusedHeaderIndex === he;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${_e ? "sortable-header--focused" : ""} ${ye ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: _e ? 0 : -1,
                            onClick: () => ie(P, q.key),
                            onKeyDown: (me) => se(me, he),
                            "aria-sort": ye ? pe?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: q.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${ye ? `sort-indicator--${pe?.direction}` : ""}`,
                                  children: [
                                    G.sortConfig && G.sortConfig.length > 0 && G.sortConfig.findIndex(
                                      (me) => me.key === q.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${G.sortConfig.findIndex((me) => me.key === q.key) + 1}`,
                                        "data-priority": G.sortConfig.findIndex(
                                          (me) => me.key === q.key
                                        ) + 1,
                                        title: `Sort priority: ${G.sortConfig.findIndex((me) => me.key === q.key) + 1}`,
                                        children: G.sortConfig.findIndex(
                                          (me) => me.key === q.key
                                        ) + 1
                                      }
                                    ),
                                    ye && /* @__PURE__ */ r.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${pe?.direction}`,
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
                          q.key
                        );
                      }) }) }),
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: J.map((q, he) => {
                        const pe = G.globalSelectedRowData && K(G.globalSelectedRowData, q), ye = I.focusArea === "cells" && I.focusedRowIndex === he;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${pe ? "data-row--selected" : ""} ${ye ? "data-row--focused" : ""}`,
                            "aria-selected": pe,
                            children: w.columns.map((_e, me) => {
                              const Te = q[_e.key];
                              let Re;
                              _e.tableRenderer ? Re = _e.tableRenderer(q) : _e.render ? Re = _e.render(q) : Re = Te;
                              const Ge = I.focusArea === "cells" && I.focusedRowIndex === he && I.focusedColumnIndex === me, Be = () => {
                                if (_e.customRenderer) {
                                  const nt = _e.customRenderer(
                                    Te,
                                    q
                                  );
                                  return /* @__PURE__ */ r.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: nt
                                    }
                                  );
                                }
                                return typeof Te == "boolean" && Re === Te ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  ee(Te),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: Te ? "Yes" : "No" })
                                ] }) : bt.isValidElement(Re) || typeof Re != "object" ? Re ?? "" : Re;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Ge ? "data-cell--focused" : ""}`,
                                  tabIndex: Ge ? 0 : -1,
                                  onClick: () => {
                                    const Je = G.globalSelectedRowData && K(
                                      G.globalSelectedRowData,
                                      q
                                    ) ? null : q;
                                    R({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: Je
                                    });
                                  },
                                  onKeyDown: (nt) => z(nt, he, me),
                                  children: Be()
                                },
                                _e.key
                              );
                            })
                          },
                          he
                        );
                      }) })
                    ]
                  }
                );
              })()
            },
            w.id
          );
        })
      ]
    }
  );
}), br = {
  asc: "↑",
  desc: "↓"
}, Rp = (e) => [...e].sort((t, n) => t.priority - n.priority);
function Fa(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function Bp(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Hp(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function zp(e, t) {
  const n = t.find((s) => s.id === e), a = Bp(t);
  return n ? n.priority < a : !1;
}
const $y = ({
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
  const u = De(() => Rp(e), [e]), f = ge((C) => {
    if (l) return;
    const N = e.map(
      (j) => j.id === C ? { ...j, direction: j.direction === "asc" ? "desc" : "asc" } : j
    );
    t(N);
  }, [e, t, l]), m = ge((C) => {
    if (l) return;
    const N = e.findIndex((x) => x.id === C);
    if (N <= 0) return;
    const j = [...e];
    [j[N], j[N - 1]] = [j[N - 1], j[N]], t(Fa(j));
  }, [e, t, l]), p = ge((C) => {
    if (l) return;
    const N = e.findIndex((x) => x.id === C);
    if (N >= e.length - 1 || N === -1) return;
    const j = [...e];
    [j[N], j[N + 1]] = [j[N + 1], j[N]], t(Fa(j));
  }, [e, t, l]), y = ge((C) => {
    if (l) return;
    const N = e.filter((j) => j.id !== C);
    t(Fa(N));
  }, [e, t, l]), g = ge(() => {
    l || t([]);
  }, [t, l]), h = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const C = u.map((N, j) => {
      const x = N.direction === "asc" ? "ascending" : "descending";
      return `${j + 1}. ${N.label} (${x})`;
    });
    if (C.length === 1)
      return `Sorted by: ${C[0]}`;
    if (C.length === 2)
      return `Sorted by: ${C.join(" and ")}`;
    {
      const N = C.pop();
      return `Sorted by: ${C.join(", ")}, and ${N}`;
    }
  }, T = De(() => {
    const C = ["sort-description"];
    return i && C.push("sort-help"), c && C.push(c), C.join(" ");
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
        "aria-describedby": T,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((C) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ r.jsx(
                Ze,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => y(C.id),
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
                        children: C.direction === "asc" ? br.asc : br.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m(C.id),
                          disabled: l || !Hp(C.id, e),
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
                          onClick: () => p(C.id),
                          disabled: l || !zp(C.id, e),
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
    o && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
      gt,
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
      br.asc,
      "/",
      br.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Ys = (e, t) => t.map((n) => ({
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
})), ns = [
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
], Op = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Up = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, s] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, Wp = (e) => {
  if (typeof e == "boolean") {
    const n = ns.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = ns.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, Gp = (e) => `${e.name}-${e.bed_name}`, Vp = () => ({
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
}), Ay = (e) => {
  const t = Vp();
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
}, Yp = {
  dataComparator: Op,
  filterFunction: Up,
  booleanRenderer: Wp,
  getDataId: Gp
};
function Oo(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: s = [],
    badges: o = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: d,
    fieldRenderers: c = {},
    classPrefix: u = "adaptive-card"
  } = n, f = t.find((N) => N.key === a), m = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", p = () => s.filter((j) => !i.includes(j) && e[j]).slice(0, 3).map((j) => {
    const x = t.find((b) => b.key === j), M = e[j], D = c[j] ? c[j](M, e) : x?.cardRenderer ? x.cardRenderer(e) : x?.render ? x.render(e) : M;
    return `${x?.label || j}: ${D}`;
  }).join(" • "), y = () => o.length === 0 ? null : o.filter((N) => e[N.fieldKey] !== void 0).map((N) => {
    const j = e[N.fieldKey], x = N.render ? N.render(j, e) : j;
    return `<span class="nhsuk-tag ${Zp(N, j)}">${x}</span>`;
  }).join(""), g = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", h = y(), T = p(), C = h ? `${T}${h ? `<div class="adaptive-card__badges">${h}</div>` : ""}` : T;
  return {
    variant: g(),
    heading: String(m),
    descriptionHtml: C,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${m}`
  };
}
function Zp(e, t) {
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
const Jp = {
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
}, ol = ({
  data: e,
  columns: t,
  onSelect: n,
  onAction: a,
  priority: s = "medium",
  status: o = "active"
}) => {
  const i = e.name, l = e.age, d = e.ward_name, c = e.bed_name, u = e.ews_score, f = e.speciality, m = e.consultant;
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
            Ze,
            {
              color: Xp(dl(u)),
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
            /* @__PURE__ */ r.jsx("dd", { children: m })
          ] })
        ] }) }),
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ r.jsx(
            gt,
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
            gt,
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
            gt,
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
}, il = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        Ze,
        {
          color: Qp(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ r.jsxs(
        Ze,
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
      gt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      gt,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), ll = ({
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
        Ze,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ r.jsxs(
        Ze,
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
      gt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      gt,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), cl = ({
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
            o !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${qp(o)}`, children: [
              "EWS: ",
              o
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ r.jsxs(
            Ze,
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
            gt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (m) => {
                m.stopPropagation(), n?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ r.jsx(
            gt,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (m) => {
                m.stopPropagation(), n?.("record-new", e);
              },
              children: "Record New"
            }
          )
        ] })
      ]
    }
  );
};
function dl(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function qp(e) {
  return dl(e);
}
function Xp(e) {
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
function Qp(e) {
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
], ul = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", eh = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, th = (e) => ul(e) === "high" || e.status === "urgent" ? "primary" : "default", nh = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, rh = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Kp,
  hiddenFields: [],
  getPriority: ul,
  getStatus: eh,
  getVariant: th,
  fieldRenderers: nh,
  classPrefix: "adaptive-card--healthcare"
}, ah = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", s = n.getStatus?.(e) || "active", o = s === "urgent" ? "active" : s;
    return /* @__PURE__ */ r.jsx(
      ol,
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
      il,
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
      ll,
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
      cl,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (s) => console.log("Vitals selected:", s),
        onAction: (s, o) => console.log("Vitals action:", s, o)
      }
    );
  }
}, sh = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Uo = {
  name: "healthcare",
  defaultCardConfig: rh,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: ah,
  fieldTypes: sh
};
function Wo(e) {
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
function Go(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function oh(e, t) {
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
function ih(e, t) {
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
function lh(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function ch(e, t, n, a) {
  const s = a ? { ...a.defaultCardConfig, ...n } : { ...Jp, ...n };
  if (a && a.cardTemplates) {
    const o = lh(e);
    if (o && a.cardTemplates[o]) {
      const i = a.cardTemplates[o](e, t, s);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return s.cardTemplate && s.cardTemplate(e, t, s), Oo(e, t, s);
}
const Ey = ({
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
  onTabChange: m,
  ariaLabel: p = "Data grid",
  ariaDescription: y,
  orientation: g = "horizontal",
  id: h,
  disabled: T = !1,
  className: C,
  ...N
}) => {
  const j = ih(e, t), x = f !== void 0, M = f ?? 0, D = De(() => {
    if (c.some(
      (v) => v.data && v.data.length > 0 && Go(v.data)
    )) {
      const v = Wo(n);
      return {
        ...Uo.defaultCardConfig,
        ...v
      };
    } else
      return Wo(n);
  }, [n, c]), _ = De(() => c.some(
    (v) => v.data && v.data.length > 0 && Go(v.data)
  ) ? Uo : void 0, [c]), b = De(() => ({
    selectedIndex: M,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [M, c.length]), [S, k] = Si(oh, b), L = ze([]), B = ze([]), $ = ze([]), A = ze(null), [I, H] = He({
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
  }), re = ge((Z) => {
    if (!Z.current)
      return { columns: 1, rows: 0 };
    const v = Z.current, E = v.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (E.length === 0)
      return { columns: 1, rows: 0 };
    const F = v.offsetWidth, P = E[0].offsetWidth, W = Math.floor(F / P) || 1, V = Math.ceil(E.length / W);
    return { columns: W, rows: V };
  }, []), G = ge((Z, v) => ({
    row: Math.floor(Z / v),
    col: Z % v
  }), []), R = ge((Z, v, E) => Z * E + v, []), K = ge((Z, v, E, F) => {
    const { row: w, col: P } = G(Z, F);
    let W = w, V = P;
    switch (v) {
      case "up":
        W = Math.max(0, w - 1);
        break;
      case "down":
        W = Math.min(Math.floor((E - 1) / F), w + 1);
        break;
      case "left":
        V = Math.max(0, P - 1);
        break;
      case "right":
        V = Math.min(F - 1, P + 1);
        break;
    }
    const J = R(W, V, F);
    return Math.min(J, E - 1);
  }, [G, R]);
  Ve(() => {
    I.isCardNavigationActive && I.focusedCardElementIndex >= 0 && I.cardElements.length > 0 && setTimeout(() => {
      const Z = I.cardElements[I.focusedCardElementIndex];
      Z && (Z.element.focus(), Z.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [I.isCardNavigationActive, I.focusedCardElementIndex, I.cardElements.length]), Ve(() => {
    const Z = () => {
      if (j === "cards" && A.current) {
        const { columns: F, rows: w } = re(A);
        H((P) => ({
          ...P,
          gridColumns: F,
          gridRows: w
        }));
      }
    }, v = setTimeout(Z, 200), E = () => {
      setTimeout(Z, 100);
    };
    return window.addEventListener("resize", E), () => {
      clearTimeout(v), window.removeEventListener("resize", E);
    };
  }, [j, c, re]), Ve(() => {
    const Z = S.tabLoadingStates.length, v = c.length;
    Z !== v && k({ type: "ADJUST_ARRAYS", payload: { newLength: v } });
  }, [c.length, S.tabLoadingStates.length]), Ve(() => {
    x && f !== S.selectedIndex && k({ type: "SET_SELECTED_INDEX", payload: f });
  }, [x, f, S.selectedIndex]);
  const U = ge((Z) => {
    Z >= 0 && Z < c.length && !c[Z].disabled && (k({ type: "SET_SELECTED_INDEX", payload: Z }), m?.(Z));
  }, [c, m]), X = ge((Z) => {
    console.log("Card selected:", Z), k({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: Z
    });
  }, []), Y = ge((Z) => {
    const v = B.current[Z];
    v && (v.focus(), v.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), Q = ge((Z) => {
    const v = B.current[Z];
    if (!v) return [];
    const E = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), F = v.querySelectorAll(E);
    return Array.from(F).map((w, P) => ({
      id: w.id || `card-${Z}-element-${P}`,
      element: w,
      label: w.getAttribute("aria-label") || w.textContent?.trim() || w.getAttribute("title") || `Element ${P + 1}`,
      type: w.tagName.toLowerCase() === "button" ? "button" : w.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(w.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), ce = ze(null), ie = ge((Z) => {
    const v = ce.current;
    if (!v) return;
    const E = document.createElement("div");
    E.setAttribute("aria-live", "polite"), E.setAttribute("aria-atomic", "true"), E.className = "sr-only", E.textContent = Z, v.appendChild(E), setTimeout(() => {
      v.contains(E) && v.removeChild(E);
    }, 1e3);
  }, []), ne = ge((Z) => {
    const v = Z.filter((F) => F.sortable !== !1), E = [
      { value: "", label: "Sort by..." }
    ];
    return v.forEach((F) => {
      const w = F.label || F.key;
      F.key === "name" ? E.push(
        { value: `${F.key}-asc`, label: `${w} (A-Z)` },
        { value: `${F.key}-desc`, label: `${w} (Z-A)` }
      ) : F.key === "ews_score" || F.key.includes("score") ? E.push(
        { value: `${F.key}-desc`, label: `${w} (High-Low)` },
        { value: `${F.key}-asc`, label: `${w} (Low-High)` }
      ) : F.key === "age" || F.key.includes("date") || F.key.includes("time") ? E.push(
        { value: `${F.key}-desc`, label: `${w} (Oldest-Youngest)` },
        { value: `${F.key}-asc`, label: `${w} (Youngest-Oldest)` }
      ) : E.push(
        { value: `${F.key}-asc`, label: `${w} (A-Z)` },
        { value: `${F.key}-desc`, label: `${w} (Z-A)` }
      );
    }), E;
  }, []), ee = ge((Z, v) => v ? [...Z].sort((E, F) => {
    const w = E[v.key], P = F[v.key];
    if (w == null && P == null) return 0;
    if (w == null) return 1;
    if (P == null) return -1;
    const W = Number(w), V = Number(P);
    if (!isNaN(W) && !isNaN(V))
      return v.direction === "asc" ? W - V : V - W;
    const J = String(w).toLowerCase(), q = String(P).toLowerCase(), he = J.localeCompare(q);
    return v.direction === "asc" ? he : -he;
  }) : Z, []), te = ge((Z) => {
    if (!Z) {
      H((J) => ({ ...J, cardSortConfig: null })), ie("Card sorting cleared");
      return;
    }
    const [v, E] = Z.split("-"), F = { key: v, direction: E };
    H((J) => ({ ...J, cardSortConfig: F }));
    const W = c[S.selectedIndex]?.columns.find((J) => J.key === v)?.label || v;
    ie(`Cards sorted by ${W} in ${E === "asc" ? "ascending" : "descending"} order`);
  }, [c, S.selectedIndex, ie]), se = ge((Z) => {
    const F = c[S.selectedIndex]?.columns.find((P) => P.key === Z.key)?.label || Z.key, w = Z.direction === "asc" ? "ascending" : "descending";
    return `${F} (${w})`;
  }, [c, S.selectedIndex]), z = ge((Z) => {
    const v = c[S.selectedIndex];
    if (s) {
      const E = S.sortConfig;
      return !E || E.length === 0 ? Z : [...Z].sort((F, w) => {
        for (const { key: P, direction: W } of E) {
          let V = F[P], J = w[P];
          const q = v?.columns.find((Te) => Te.key === P);
          if (q?.cardRenderer ? (V = q.cardRenderer(F), J = q.cardRenderer(w)) : q?.render && (V = q.render(F), J = q.render(w)), V == null && J == null) continue;
          if (V == null) return W === "asc" ? -1 : 1;
          if (J == null) return W === "asc" ? 1 : -1;
          const he = Number(V), pe = Number(J);
          if (!isNaN(he) && !isNaN(pe)) {
            const Te = he - pe;
            if (Te !== 0) return W === "asc" ? Te : -Te;
            continue;
          }
          const ye = String(V).toLowerCase(), _e = String(J).toLowerCase(), me = ye.localeCompare(_e);
          if (me !== 0) return W === "asc" ? me : -me;
        }
        return 0;
      });
    } else
      return ee(Z, I.cardSortConfig);
  }, [s, S.sortConfig, I.cardSortConfig, ee, c, S.selectedIndex]), oe = ge((Z, v) => {
    const E = Q(Z), F = E[v];
    if (F) {
      F.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const w = `Focused on ${F.label}, ${F.type} ${v + 1} of ${E.length} within card`;
      ie(w);
    }
  }, [Q, ie]), ae = ge((Z) => {
    L.current[Z]?.focus();
  }, []), ue = ge(() => {
    const Z = $.current[0];
    if (!Z) return [];
    const v = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), E = Z.querySelectorAll(v);
    return Array.from(E);
  }, []), de = ge((Z) => {
    if (Z === 0) {
      const v = $.current[0], E = v?.querySelector(".sort-controls-row");
      if (E) {
        E.setAttribute("tabindex", "-1"), E.focus();
        const w = `Sort controls group with ${ue().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        ie(w);
      } else v && v.focus();
    } else {
      const v = ue(), E = Z - 1, F = v[E];
      if (F) {
        F.focus();
        const w = F.tagName.toLowerCase() === "select", P = F.tagName.toLowerCase() === "button", W = w ? "dropdown" : P ? "button" : "control", V = w ? ". Use Space key to open dropdown" : "", J = `${W} ${E + 1} of ${v.length}${V}`;
        ie(J);
      }
    }
  }, [ue, ie]), we = ge((Z, v) => {
    const { key: E } = Z, F = c[S.selectedIndex], w = F?.data.length || 0;
    if (E === "ArrowLeft" && Z.shiftKey) {
      Z.preventDefault(), Z.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (E === "ArrowRight" && Z.shiftKey) {
      Z.preventDefault(), Z.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!I.isCardNavigationActive) {
      switch (E) {
        case "ArrowUp":
          if (Z.preventDefault(), v === 0)
            H((J) => ({ ...J, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), de(0);
          else {
            const J = K(v, "up", w, I.gridColumns);
            J !== v && (H((q) => ({ ...q, focusedCardIndex: J })), Y(J), ie(`Moved to card ${J + 1} of ${w}`));
          }
          break;
        case "ArrowDown":
          Z.preventDefault();
          const P = K(v, "down", w, I.gridColumns);
          P !== v && (H((J) => ({ ...J, focusedCardIndex: P })), Y(P), ie(`Moved to card ${P + 1} of ${w}`));
          break;
        case "ArrowLeft":
          Z.preventDefault();
          const W = K(v, "left", w, I.gridColumns);
          W !== v ? (H((J) => ({ ...J, focusedCardIndex: W })), Y(W), ie(`Moved to card ${W + 1} of ${w}`)) : S.selectedIndex > 0 && (k({ type: "SET_SELECTED_INDEX", payload: S.selectedIndex - 1 }), H((J) => ({ ...J, focusArea: "tabs" })), setTimeout(() => ae(S.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          Z.preventDefault();
          const V = K(v, "right", w, I.gridColumns);
          V !== v ? (H((J) => ({ ...J, focusedCardIndex: V })), Y(V), ie(`Moved to card ${V + 1} of ${w}`)) : S.selectedIndex < c.length - 1 && (k({ type: "SET_SELECTED_INDEX", payload: S.selectedIndex + 1 }), H((J) => ({ ...J, focusArea: "tabs" })), setTimeout(() => ae(S.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (F?.data[v]) {
            Z.preventDefault(), H((q) => ({
              ...q,
              selectedCardIndex: v
            }));
            const J = Q(v);
            J.length > 0 ? (H((q) => ({
              ...q,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: J,
              selectedCardIndex: v
              // Ensure selection is maintained
            })), ie(`Card ${v + 1} selected and navigation activated. ${J.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : ie(`Card ${v + 1} selected.`);
          }
          break;
        case " ":
          if (F?.data[v]) {
            Z.preventDefault(), H((q) => ({
              ...q,
              selectedCardIndex: q.selectedCardIndex === v ? -1 : v
            }));
            const J = I.selectedCardIndex === v;
            ie(`Card ${v + 1} ${J ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (E) {
      case "ArrowUp":
      case "ArrowLeft":
        Z.preventDefault();
        const P = Math.max(0, I.focusedCardElementIndex - 1);
        H((q) => ({ ...q, focusedCardElementIndex: P })), oe(v, P);
        break;
      case "ArrowDown":
      case "ArrowRight":
        Z.preventDefault();
        const W = Math.min(I.cardElements.length - 1, I.focusedCardElementIndex + 1);
        H((q) => ({ ...q, focusedCardElementIndex: W })), oe(v, W);
        break;
      case "Enter":
        Z.preventDefault();
        const V = I.cardElements[I.focusedCardElementIndex];
        V && (V.element.click(), ie(`Activated ${V.label}`));
        break;
      case " ":
        Z.preventDefault();
        const J = I.cardElements[I.focusedCardElementIndex];
        if (J) {
          const q = new MouseEvent("dblclick", { bubbles: !0 });
          J.element.dispatchEvent(q), ie(`Double-clicked ${J.label}`);
        }
        break;
      case "Escape":
        Z.preventDefault(), H((q) => ({
          ...q,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => Y(v), 0), ie("Exited card navigation, returned to card level");
        break;
      case "Home":
        Z.preventDefault(), I.cardElements.length > 0 && (H((q) => ({ ...q, focusedCardElementIndex: 0 })), oe(v, 0));
        break;
      case "End":
        if (Z.preventDefault(), I.cardElements.length > 0) {
          const q = I.cardElements.length - 1;
          H((he) => ({ ...he, focusedCardElementIndex: q })), oe(v, q);
        }
        break;
    }
  }, [I, S.selectedIndex, c, X, Y, ae, H, Q, oe, ie]), be = ge((Z) => {
    const v = L.current[Z], E = v?.parentElement;
    if (!v || !E) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const F = v.getBoundingClientRect(), w = E.getBoundingClientRect();
    F.left >= w.left && F.right <= w.right || (console.log("Tab not visible, scrolling into view (mobile)"), v.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), Se = ge((Z, v) => {
    if (j !== "cards")
      return;
    const { key: E } = Z;
    switch (E) {
      case "ArrowLeft":
        Z.preventDefault();
        const F = v > 0 ? v - 1 : c.length - 1;
        U(F), H((V) => ({ ...V, focusedTabIndex: F })), L.current[F]?.focus(), be(F);
        break;
      case "ArrowRight":
        Z.preventDefault();
        const w = v < c.length - 1 ? v + 1 : 0;
        U(w), H((V) => ({ ...V, focusedTabIndex: w })), L.current[w]?.focus(), be(w);
        break;
      case "ArrowDown":
        Z.preventDefault();
        const P = c[S.selectedIndex];
        P && P.columns && P.columns.length > 0 ? (H((V) => ({
          ...V,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), de(0)) : (H((V) => ({
          ...V,
          focusArea: "cards",
          focusedCardIndex: 0
        })), Y(0));
        break;
      case "Home":
        Z.preventDefault(), U(0), H((V) => ({ ...V, focusedTabIndex: 0 })), L.current[0]?.focus(), be(0);
        break;
      case "End":
        Z.preventDefault();
        const W = c.length - 1;
        U(W), H((V) => ({ ...V, focusedTabIndex: W })), L.current[W]?.focus(), be(W);
        break;
      case "Enter":
      case " ":
        Z.preventDefault(), U(v);
        break;
    }
  }, [c.length, U, j, Y, H, be]), le = ge((Z, v) => {
    if (j !== "cards")
      return;
    const { key: E } = Z, F = c[S.selectedIndex];
    if (v === 0 && !I.isSortControlsActive) {
      switch (E) {
        case "ArrowUp":
          Z.preventDefault(), H((P) => ({
            ...P,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), ae(S.selectedIndex);
          break;
        case "ArrowDown":
          Z.preventDefault(), F?.data && F.data.length > 0 && (H((P) => ({
            ...P,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), Y(0));
          break;
        case "Enter":
        case " ":
          Z.preventDefault();
          const w = ue();
          if (w.length > 0) {
            H((W) => ({
              ...W,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), de(1);
            const P = `Entered sort controls navigation mode. ${w.length} controls available. Use arrow keys to navigate between controls.`;
            ie(P);
          }
          break;
        case "Escape":
          Z.preventDefault(), H((P) => ({
            ...P,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), ae(S.selectedIndex);
          break;
      }
      return;
    }
    if (I.isSortControlsActive) {
      const P = ue().length;
      switch (E) {
        case "ArrowLeft":
          Z.preventDefault();
          const W = I.focusedSortControlIndex > 1 ? I.focusedSortControlIndex - 1 : P;
          H((J) => ({ ...J, focusedSortControlIndex: W })), de(W);
          break;
        case "ArrowRight":
          Z.preventDefault();
          const V = I.focusedSortControlIndex < P ? I.focusedSortControlIndex + 1 : 1;
          H((J) => ({ ...J, focusedSortControlIndex: V })), de(V);
          break;
        case "ArrowDown":
          if (Z.preventDefault(), I.isSortControlsActive) {
            const J = I.focusedSortControlIndex < P ? I.focusedSortControlIndex + 1 : 1;
            H((q) => ({ ...q, focusedSortControlIndex: J })), de(J);
          } else
            F?.data && F.data.length > 0 && (H((J) => ({
              ...J,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), Y(0));
          break;
        case "ArrowUp":
          Z.preventDefault(), H((J) => ({
            ...J,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), de(0);
          break;
        case "Escape":
          Z.preventDefault(), H((J) => ({
            ...J,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), de(0);
          break;
      }
    }
  }, [j, c, S.selectedIndex, I.isSortControlsActive, I.focusedSortControlIndex, de, ae, Y, H, ie]);
  if (j === "cards") {
    const Z = c[S.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${C || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": p,
            "aria-describedby": `${y || ""} ${h ? `${h}-navigation-help` : ""}`.trim(),
            "aria-orientation": g,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((v, E) => {
              const F = E === S.selectedIndex, w = v.disabled || T;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${v.id}`,
                  "aria-controls": `panel-${v.id}`,
                  "aria-selected": F,
                  "aria-disabled": w,
                  tabIndex: F ? 0 : -1,
                  ref: (P) => {
                    L.current[E] = P;
                  },
                  onClick: () => U(E),
                  onKeyDown: (P) => Se(P, E),
                  disabled: w,
                  className: [
                    "aria-tabs-datagrid__tab",
                    F ? "aria-tabs-datagrid__tab--selected" : "",
                    w ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: v.label }),
                    S.tabLoadingStates[E] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    S.tabErrors[E] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                v.id
              );
            })
          }
        ),
        o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: o })
      ] }),
      Z && Z.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: s ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          sl,
          {
            sortConfig: S.sortConfig || [],
            columns: Z.columns.map((v) => ({ key: v.key, label: v.label })),
            onSortChange: (v) => {
              k({ type: "SET_SORT", payload: v });
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
            tabIndex: I.focusArea === "sort-controls" ? 0 : -1,
            ref: (v) => {
              $.current[0] = v;
            },
            onKeyDown: (v) => le(v, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${Z.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  _r,
                  {
                    id: `card-sort-${Z.id}`,
                    name: `card-sort-${Z.id}`,
                    value: I.cardSortConfig ? `${I.cardSortConfig.key}-${I.cardSortConfig.direction}` : "",
                    onChange: (v) => te(v.target.value),
                    className: "sort-select",
                    children: ne(Z.columns).map((v) => /* @__PURE__ */ r.jsx("option", { value: v.value, children: v.label }, v.value))
                  }
                )
              ] }),
              I.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  se(I.cardSortConfig)
                ] }),
                /* @__PURE__ */ r.jsx(
                  gt,
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
          ref: A,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${Z?.label || "Data"} cards in ${I.gridRows} rows and ${I.gridColumns} columns`,
          "aria-rowcount": I.gridRows,
          "aria-colcount": I.gridColumns,
          id: `panel-${Z?.id}`,
          "aria-labelledby": `tab-${Z?.id}`,
          children: z(Z?.data || []).map((v, E) => {
            const F = I.selectedCardIndex === E, w = I.focusedCardIndex === E && I.focusArea === "cards", P = I.focusedCardIndex === E && I.focusArea === "card" && I.isCardNavigationActive, W = E === 0 && I.focusArea !== "cards", V = w || W, J = G(E, I.gridColumns);
            if (n.cardTemplate) {
              const pe = n.cardTemplate(v, Z.columns);
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
                        B.current[E] = ye;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        F ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        w ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        P ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": J.col + 1,
                      "aria-selected": F,
                      "aria-expanded": P,
                      "aria-description": P ? `Card navigation active. ${I.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: V ? 0 : -1,
                      onClick: () => {
                        H((ye) => ({
                          ...ye,
                          selectedCardIndex: ye.selectedCardIndex === E ? -1 : E
                        })), X(v);
                      },
                      onKeyDown: (ye) => we(ye, E),
                      onFocus: () => {
                        H((ye) => ye.isCardNavigationActive ? ye : ye.focusedCardIndex !== E || ye.focusArea !== "cards" ? {
                          ...ye,
                          focusedCardIndex: E,
                          focusArea: "cards"
                        } : ye);
                      },
                      children: pe
                    }
                  )
                },
                `card-${E}`
              );
            }
            const q = ch(v, Z.columns, D, _), he = [
              q.className || "",
              F ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              w ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              P ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
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
                      F ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      w ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      P ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": J.col + 1,
                    "aria-selected": F,
                    "aria-expanded": P,
                    onKeyDown: (pe) => {
                      pe.key === "Enter" && (pe.preventDefault(), H((ye) => ({
                        ...ye,
                        selectedCardIndex: E
                      }))), we(pe, E);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      nl,
                      {
                        ...q,
                        ref: (pe) => {
                          B.current[E] = pe;
                        },
                        className: he,
                        "aria-label": `${q["aria-label"] || q.heading}. ${P ? `Card navigation active with ${I.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: V ? 0 : -1,
                        onClick: () => {
                          H((pe) => ({
                            ...pe,
                            selectedCardIndex: pe.selectedCardIndex === E ? -1 : E
                          })), X(v);
                        },
                        onKeyDown: (pe) => we(pe, E),
                        onFocus: () => {
                          I.isCardNavigationActive || H((pe) => pe.focusedCardIndex !== E || pe.focusArea !== "cards" ? {
                            ...pe,
                            focusedCardIndex: E,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : pe);
                        }
                      }
                    )
                  }
                )
              },
              `card-${E}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: ce,
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
  return j === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${C || ""}`, children: [
    o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ r.jsx(
      ts,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: p,
        ariaDescription: y,
        orientation: g,
        id: h,
        disabled: T,
        selectedIndex: f,
        onTabChange: m,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: d,
        ...N
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${C || ""}`, children: [
    o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ r.jsx(
      ts,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: p,
        ariaDescription: y,
        orientation: g,
        id: h,
        disabled: T,
        selectedIndex: f,
        onTabChange: m,
        actions: l,
        forceActionsAbove: d,
        ...N
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, fl = (e) => {
  const t = ns.find((n) => n.value === e);
  return t ? t.icon : null;
}, dh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, s] = t.priceRange, o = n.discountedPrice || n.price;
      if (o < a || o > s) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => fl(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, uh = (e) => Ys(e, [
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
]), fh = {
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
  booleanRenderer: (e) => fl(e),
  getDataId: (e) => `financial-${e.id}`
}, ph = (e) => Ys(e, [
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
]), hh = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: dh,
    createTabs: uh
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: fh,
    createTabs: ph
  }
}, Vo = (e, t) => {
  const n = hh[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, pl = [
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
], mh = [
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
], gh = [
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
], xh = [
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
], Yo = [
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
], Zo = [
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
], Jo = [
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
], bh = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, yh = () => [
  {
    id: "patients",
    label: "Patients",
    data: pl,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      ol,
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
    data: mh,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      il,
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
    data: gh,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      ll,
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
    data: xh,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      cl,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, a) => console.log("Vitals action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], vh = () => {
  const [e, t] = He("healthcare"), n = De(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: Yp,
      tabPanels: yh(),
      data: pl
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Vo("ecommerce", Yo),
      data: Yo
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Vo("financial", Zo),
      data: Zo
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: bh,
      tabPanels: Ys(Jo, [
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
      data: Jo
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
        gt,
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
      ts,
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
}, Py = vh, hl = (e) => /* @__PURE__ */ r.jsx(Ii, { ...e }), Fy = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = xn.TwoThirds,
  mainWrapperSize: s,
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  service: d,
  navigation: c,
  search: u,
  account: f,
  organisation: m,
  logo: p,
  className: y,
  ...g
}) => {
  const h = {
    service: d,
    navigation: c,
    search: u,
    account: f,
    organisation: m,
    logo: p,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(tl, { ...o }),
    /* @__PURE__ */ r.jsx(Ei, { ...h }),
    /* @__PURE__ */ r.jsx(hl, { className: y, ...g, children: /* @__PURE__ */ r.jsx(Di, { size: s, children: /* @__PURE__ */ r.jsx(an, { children: /* @__PURE__ */ r.jsxs(qn, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(Jt, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(Pi, { ...l })
  ] });
}, Ry = ({
  children: e,
  title: t,
  pageHeadingProps: n,
  columnWidth: a = xn.TwoThirds,
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
  ...p
}) => {
  const y = {
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
    /* @__PURE__ */ r.jsx(tl, { ...o }),
    /* @__PURE__ */ r.jsx(Ei, { ...y }),
    /* @__PURE__ */ r.jsxs(hl, { className: m, ...p, children: [
      d && /* @__PURE__ */ r.jsx(Ya, { ...d }),
      /* @__PURE__ */ r.jsx(Di, { size: s, children: /* @__PURE__ */ r.jsx(an, { children: /* @__PURE__ */ r.jsxs(qn, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(Jt, { style: { marginTop: "3rem" }, size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(Pi, { ...l })
  ] });
}, ml = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = ve("nhsuk-back-link", a), d = ve("nhsuk-back-link__link"), c = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
ml.displayName = "ForwardLink";
const Nn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function qo() {
  return typeof window > "u" ? Nn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function gl() {
  const [e, t] = O.useState(qo());
  O.useEffect(() => {
    if (typeof window > "u") return;
    const o = () => t(qo());
    return window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, []);
  const n = O.useCallback((o) => e >= Nn[o], [e]), a = O.useCallback((o) => e < Nn[o], [e]), s = O.useCallback((o, i) => e >= Nn[o] && e < Nn[i], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: s,
    /** Raw numeric values */
    values: Nn
  };
}
function By(e) {
  const { width: t, values: n } = gl();
  let a = e.base;
  const s = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const o of s) {
    const i = n[o];
    t >= i && e[o] !== void 0 && (a = e[o]);
  }
  return a;
}
function wh(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [s, o] = O.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = O.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return O.useEffect(() => {
    if (!t || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search);
    s ? d.set(n, String(s)) : d.delete(n), d.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${d.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [s, i, t, n, a]), { selectedId: s, setSelectedId: o, drilledIn: i, setDrilledIn: l };
}
const Sh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
), _h = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
function kh(e) {
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
    isLoading: m = !1,
    emptyState: p,
    a11y: y,
    className: g,
    getId: h = (fe) => fe.id,
    orientation: T = "vertical",
    autoEnableThirdColumn: C = !0,
    onDrillChange: N,
    navigationInstructions: j = "Use arrow keys to navigate, Enter to open.",
    initialFocus: x = "first",
    skipFocusOnSelect: M = !1,
    skipAnnouncements: D = !1,
    onFocusChange: _,
    syncUrl: b = !1,
    urlParamSelected: S = "nsv",
    urlParamDrill: k = "nsvDrill",
    urlSyncDebounceMs: L = 0,
    lazySecondary: B = !1,
    navFooter: $,
    collapsibleNav: A = !1,
    navInitiallyCollapsed: I = !1,
    onNavCollapseChange: H,
    collapseToggleLabelShow: re = "Show navigation",
    collapseToggleLabelHide: G = "Hide navigation",
    collapseToggleIconShow: R,
    collapseToggleIconHide: K,
    persistNavCollapsed: U,
    navCollapsedStorageKey: X = "nsvCollapsed",
    navCollapsedUrlParam: Y = "nsvCollapsed",
    autoContentHeader: Q,
    contentHeaderLevel: ce = 2,
    renderContentHeader: ie,
    contentSubheader: ne,
    secondarySubheader: ee
  } = e, { up: te } = gl(), [se, z] = O.useState(!1);
  O.useEffect(() => {
    z(!0);
  }, []);
  const oe = se && te("medium"), ae = se && te("xlarge");
  let ue;
  d ? ue = d : oe ? ue = "two-column" : ue = "list", !d && C && l && ae && (ue = "three-column");
  const de = wh({
    enabled: b,
    paramSelected: S,
    paramDrill: k
  }), [we, be] = O.useState(
    () => de.selectedId !== void 0 ? de.selectedId : a
  ), Se = n !== void 0 ? n : we, le = t.find((fe) => h(fe) === Se), [Z, v] = O.useState(
    void 0
  );
  O.useEffect(() => {
    if (Se === void 0) return;
    v(Se);
    const fe = setTimeout(() => v(void 0), 220);
    return () => clearTimeout(fe);
  }, [Se]);
  const E = O.useRef(null), F = O.useRef(null), w = O.useRef(null), P = O.useRef(null), [W, V] = O.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [J, q] = O.useState(() => "nav"), [he, pe] = O.useState(0), ye = () => [
    P.current,
    F.current,
    w.current
  ].filter(Boolean), _e = (fe) => {
    const Ne = ye(), xe = Math.max(0, Math.min(fe, Ne.length - 1));
    Ne[xe]?.focus(), pe(xe);
  }, me = O.useCallback(
    (fe) => fe ? Array.from(fe.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (xe) => !xe.hasAttribute("disabled") && xe.tabIndex !== -1
    ) : [],
    []
  ), Te = O.useCallback(
    (fe) => {
      const Ne = me(F.current);
      if (!Ne.length) {
        F.current?.focus();
        return;
      }
      const xe = Math.max(0, Math.min(fe, Ne.length - 1)), Le = Ne[xe];
      Le.focus(), setTimeout(() => {
        document.activeElement !== Le && (Le.focus(), setTimeout(() => {
          document.activeElement !== Le && Le.click();
        }, 10));
      }, 10), V((qe) => ({ ...qe, contentIndex: xe }));
      const rt = (qe) => {
        qe.key === "Escape" && (qe.preventDefault(), qe.stopPropagation(), F.current?.focus(), Le.removeEventListener("keydown", rt));
      };
      Ne.forEach((qe) => {
        const Ke = qe._escapeHandler;
        Ke && qe.removeEventListener("keydown", Ke);
      }), Le._escapeHandler = rt, Le.addEventListener("keydown", rt);
    },
    [me]
  ), Re = O.useCallback(
    (fe) => {
      const Ne = me(w.current);
      if (!Ne.length) {
        w.current?.focus();
        return;
      }
      const xe = Math.max(0, Math.min(fe, Ne.length - 1)), Le = Ne[xe];
      Le.focus(), setTimeout(() => {
        document.activeElement !== Le && (Le.focus(), setTimeout(() => {
          document.activeElement !== Le && Le.click();
        }, 10));
      }, 10), V((qe) => ({ ...qe, secondaryIndex: xe }));
      const rt = (qe) => {
        qe.key === "Escape" && (qe.preventDefault(), qe.stopPropagation(), w.current?.focus(), Le.removeEventListener("keydown", rt));
      };
      Ne.forEach((qe) => {
        const Ke = qe._escapeHandler;
        Ke && qe.removeEventListener("keydown", Ke);
      }), Le._escapeHandler = rt, Le.addEventListener("keydown", rt);
    },
    [me]
  ), Ge = (fe) => {
    if (fe.defaultPrevented) return;
    const Ne = fe.key, xe = fe.target, Le = !!pt.current && pt.current.contains(xe), rt = !!F.current && F.current.contains(xe), qe = !!w.current && w.current.contains(xe), Ke = !!w.current, kn = xe === P.current || xe === F.current || xe === w.current, dn = Be && (ue === "list" || ue === "cards"), pr = rt && !!xe.closest(".nhs-navigation-split-view__header");
    if (J === "containers" && kn) {
      if (Ne === "ArrowRight") {
        fe.preventDefault();
        const Fe = ye(), et = Math.min(Fe.length - 1, he + 1);
        _e(et);
        return;
      }
      if (Ne === "ArrowLeft") {
        fe.preventDefault();
        const Fe = Math.max(0, he - 1);
        _e(Fe);
        return;
      }
      if (Ne === "Home") {
        fe.preventDefault(), _e(0);
        return;
      }
      if (Ne === "End") {
        fe.preventDefault(), _e(ye().length - 1);
        return;
      }
      if (Ne === "Enter" || Ne === " ") {
        if (fe.preventDefault(), xe === P.current) {
          if (q("nav"), pt.current) {
            const Fe = Array.from(
              pt.current.querySelectorAll("[data-nav-item]")
            );
            (Fe[at >= 0 ? at : 0] || Fe[0])?.focus();
          }
        } else xe === F.current ? (q("content"), Te(W.contentIndex)) : xe === w.current && (q("secondary"), Re(W.secondaryIndex));
        return;
      }
      return;
    }
    if (Ne === "Escape") {
      if (J === "content" || J === "secondary") {
        if (rt || qe) {
          if (fe.preventDefault(), q("nav"), pt.current) {
            const et = Array.from(
              pt.current.querySelectorAll("[data-nav-item]")
            )[at >= 0 ? at : 0];
            setTimeout(() => et?.focus(), 10);
          }
        } else if ((xe === F.current || xe === w.current) && (fe.preventDefault(), q("nav"), pt.current)) {
          const et = Array.from(
            pt.current.querySelectorAll("[data-nav-item]")
          )[at >= 0 ? at : 0];
          setTimeout(() => et?.focus(), 10);
        }
      }
      return;
    }
    if (Ne === "Enter" || Ne === " ") {
      if (xe.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (xe === F.current && J === "content") {
        fe.preventDefault(), fe.stopPropagation(), me(F.current).length > 0 && setTimeout(() => {
          Te(W.contentIndex);
        }, 50);
        return;
      }
      if (xe === w.current && J === "secondary") {
        fe.preventDefault(), fe.stopPropagation(), me(
          w.current
        ).length > 0 && setTimeout(() => {
          Re(W.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (dn && pr && !kn && (Ne === "ArrowRight" || Ne === "ArrowLeft")) {
      const Fe = me(F.current).filter(
        (et) => et.closest(".nhs-navigation-split-view__header")
      );
      if (Fe.length > 1) {
        const et = Fe.indexOf(xe);
        if (et >= 0) {
          const no = (et + (Ne === "ArrowRight" ? 1 : -1) + Fe.length) % Fe.length;
          fe.preventDefault(), Fe[no].focus();
          return;
        }
      }
    }
    if (Ne === "ArrowRight") {
      if (Le || J === "nav") {
        fe.preventDefault(), q("content"), setTimeout(() => F.current?.focus(), 10);
        return;
      }
      if (rt || J === "content") {
        Ke && (fe.preventDefault(), q("secondary"), setTimeout(() => w.current?.focus(), 10));
        return;
      }
    }
    if (Ne === "ArrowLeft") {
      if (qe || J === "secondary") {
        fe.preventDefault(), q("content"), setTimeout(() => F.current?.focus(), 10);
        return;
      }
      if (rt || J === "content") {
        if (fe.preventDefault(), q("nav"), pt.current) {
          const et = Array.from(
            pt.current.querySelectorAll("[data-nav-item]")
          )[at >= 0 ? at : 0];
          setTimeout(() => et?.focus(), 10);
        }
        return;
      }
    }
    if (Ne === "Home" && !Le && (fe.preventDefault(), q("nav"), pt.current)) {
      const Fe = Array.from(
        pt.current.querySelectorAll("[data-nav-item]")
      ), et = Fe[at >= 0 ? at : 0] || Fe[0];
      setTimeout(() => et?.focus(), 10);
    }
    if (Ne === "End") {
      const Fe = Ke ? w.current : F.current;
      Fe && !Fe.contains(xe) && (fe.preventDefault(), Ke ? (q("secondary"), setTimeout(() => w.current?.focus(), 10)) : (q("content"), setTimeout(() => F.current?.focus(), 10)));
    }
    if (Ne === "ArrowDown" || Ne === "ArrowUp") {
      if (xe === F.current && Ne === "ArrowDown") {
        fe.preventDefault(), me(F.current).length > 0 && Te(0);
        return;
      }
      if (xe === w.current && Ne === "ArrowDown") {
        fe.preventDefault(), me(
          w.current
        ).length > 0 && Re(0);
        return;
      }
      if (rt) {
        const Fe = me(F.current);
        if (Fe.length) {
          fe.preventDefault();
          const et = Ne === "ArrowDown" ? 1 : -1, It = (W.contentIndex + et + Fe.length) % Fe.length;
          Te(It);
        }
      } else if (qe) {
        const Fe = me(w.current);
        if (Fe.length) {
          fe.preventDefault();
          const et = Ne === "ArrowDown" ? 1 : -1, It = (W.secondaryIndex + et + Fe.length) % Fe.length;
          Re(It);
        }
      }
    }
  }, Be = !!le && (ue === "list" || ue === "cards"), nt = O.useMemo(() => Q === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : Q === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : Q === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: Q.mobile !== void 0 ? Q.mobile : !0,
    tablet: Q.tablet || !1,
    desktop: Q.desktop || !1
  }, [Q]), Je = se && te("medium") && !te("xlarge"), it = se && te("xlarge"), st = !!l, tt = ue === "three-column", [Xe, At] = O.useState(!1);
  O.useEffect(() => {
    tt && Xe && At(!1);
  }, [tt, Xe]), O.useEffect(() => {
    Xe && !tt && (q("secondary"), pe(2), setTimeout(() => {
      w.current?.focus();
    }, 50));
  }, [Xe, tt]), O.useEffect(() => {
    !Xe && !tt && J === "secondary" && (q("content"), pe(1), setTimeout(() => {
      F.current?.focus();
    }, 50));
  }, [Xe, tt, J]);
  const cn = !!le && (Be && nt.mobile || !Be && Je && nt.tablet || !Be && it && nt.desktop) || st && !tt, $e = `h${ce}`, Pe = le ? O.createElement(
    $e,
    {
      style: {
        marginLeft: Be ? 32 : 0,
        marginRight: Be ? 32 : 0
      }
    },
    le.label
  ) : null, Ie = Be ? "mobile" : Je ? "tablet" : "desktop", xt = st && !tt && !Xe, ft = Be && nt.mobile ? /* @__PURE__ */ r.jsx(
    Ya,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => _n(void 0, void 0)
    }
  ) : void 0, kt = xt ? /* @__PURE__ */ r.jsx(
    ml,
    {
      element: "button",
      text: f,
      onClick: () => {
        At(!0);
      }
    }
  ) : void 0, Ee = !tt && Xe ? /* @__PURE__ */ r.jsx(
    Ya,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => At(!1)
    }
  ) : void 0, jt = O.useMemo(() => {
    if (!cn || !le) return null;
    if (ie)
      return ie({
        item: le,
        detailActive: Be,
        context: Ie,
        backLink: ft,
        defaultHeading: Pe
      });
    const fe = le && ne ? typeof ne == "function" ? ne(le) : ne : null;
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
            Ee || ft,
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
                  Pe,
                  fe && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: fe })
                ]
              }
            )
          ]
        }
      ),
      kt && /* @__PURE__ */ r.jsx("div", { style: { marginLeft: "auto" }, children: kt })
    ] });
  }, [
    cn,
    le,
    ie,
    Be,
    Ie,
    ft,
    Ee,
    Pe,
    kt,
    ne
  ]);
  O.useEffect(() => {
    if (!b) return;
    const fe = ue === "three-column";
    let Ne = !1;
    const xe = () => {
      Ne || (de.selectedId !== Se && de.setSelectedId(Se), de.drilledIn !== fe && de.setDrilledIn(fe));
    };
    if (L && L > 0) {
      const Le = setTimeout(xe, L);
      return () => {
        Ne = !0, clearTimeout(Le);
      };
    } else
      xe();
  }, [b, de, Se, ue, L]), O.useEffect(() => {
    if (!b) return;
    const fe = () => {
      const Ne = new URLSearchParams(window.location.search), xe = Ne.get(S);
      Ne.get(k), be(xe === null ? void 0 : xe);
    };
    return window.addEventListener("popstate", fe), () => window.removeEventListener("popstate", fe);
  }, [
    b,
    S,
    k,
    d,
    l
  ]);
  const en = O.useRef(0), Et = O.useRef(
    null
  ), _n = O.useCallback(
    (fe, Ne) => {
      fe !== Se && (n === void 0 && be(fe), s?.(fe, Ne));
    },
    [n, s, Se]
  );
  O.useEffect(() => {
    if (!M && Be && F.current) {
      const fe = setTimeout(() => F.current?.focus(), 30);
      return () => clearTimeout(fe);
    }
  }, [Be, Se, M]);
  const pt = O.useRef(null), [at, zn] = O.useState(
    () => x === "first" ? 0 : -1
  );
  O.useEffect(() => {
    if (at < 0 || !pt.current) return;
    const Ne = Array.from(
      pt.current.querySelectorAll("[data-nav-item]")
    )[at];
    if (Ne) {
      document.activeElement !== Ne && Ne.focus(), en.current = at;
      const xe = t[at];
      _?.(
        xe ? h(xe) : void 0,
        xe,
        at
      );
    }
  }, [at, t, _, h]);
  const Wc = (fe) => {
    const Ne = T === "vertical" ? "ArrowDown" : "ArrowRight", xe = T === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (fe.key === "ArrowRight" && T === "vertical") {
      fe.preventDefault(), Xe ? (q("secondary"), setTimeout(() => {
        w.current?.focus();
      }, 10)) : (q("content"), setTimeout(() => {
        F.current?.focus();
      }, 10));
      return;
    }
    if (fe.key === Ne)
      fe.preventDefault(), zn((Le) => Math.min(t.length - 1, Le + 1));
    else if (fe.key === xe)
      fe.preventDefault(), zn((Le) => Math.max(0, Le - 1));
    else if (fe.key === "Home")
      fe.preventDefault(), zn(0);
    else if (fe.key === "End")
      fe.preventDefault(), zn(t.length - 1);
    else if (fe.key === "Enter" || fe.key === " ") {
      fe.preventDefault();
      const Le = t[at];
      Le && !Le.disabled && _n(h(Le), Le);
    } else if (fe.key.length === 1 && /[a-z0-9]/i.test(fe.key)) {
      Et.current || (Et.current = { buffer: "", last: 0 });
      const Le = Date.now(), rt = 700, qe = fe.key.toLowerCase();
      Le - Et.current.last > rt ? Et.current.buffer = qe : Et.current.buffer += qe, Et.current.last = Le;
      let Ke = Et.current.buffer;
      const kn = Ke.split("").every((It) => It === Ke[0]), dn = t.map(
        (It) => String(It.label || "").toLowerCase()
      );
      let pr = 0;
      at >= 0 && (pr = (at + 1) % t.length);
      let Fe;
      const et = (It, no) => {
        const ro = t.length;
        for (let Na = 0; Na < ro; Na++) {
          const ja = (pr + Na) % ro;
          if (!t[ja].disabled && dn[ja].startsWith(It))
            return ja;
        }
      };
      kn && Ke.length > 1 ? Fe = et(Ke[0]) : (Fe = et(Ke), Fe === void 0 && Ke.length > 1 && (Fe = et(Ke[Ke.length - 1]), Fe !== void 0 && Et.current && (Et.current.buffer = Ke[Ke.length - 1]))), Fe !== void 0 && zn(Fe);
    }
  }, Gc = O.useMemo(() => {
    if (U && (U === "url" || U === "both") && typeof window < "u") {
      const Ne = new URLSearchParams(window.location.search).get(Y);
      if (Ne === "1") return !0;
      if (Ne === "0") return !1;
    }
    if (U && (U === "localStorage" || U === "both") && typeof window < "u")
      try {
        const fe = window.localStorage.getItem(X);
        if (fe === "1") return !0;
        if (fe === "0") return !1;
      } catch {
      }
    return I;
  }, [
    U,
    I,
    X,
    Y
  ]), [Mt, Vc] = O.useState(Gc);
  O.useEffect(() => {
    H?.(Mt);
  }, [Mt, H]);
  const Yc = O.useCallback(() => {
    oe && A && Vc((fe) => !fe);
  }, [oe, A]);
  O.useEffect(() => {
    if (U && !(typeof window > "u")) {
      if (U === "localStorage" || U === "both")
        try {
          window.localStorage.setItem(
            X,
            Mt ? "1" : "0"
          );
        } catch {
        }
      if (U === "url" || U === "both") {
        const fe = new URLSearchParams(window.location.search);
        fe.set(Y, Mt ? "1" : "0");
        const Ne = `${window.location.pathname}?${fe.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", Ne);
      }
    }
  }, [
    Mt,
    U,
    X,
    Y
  ]);
  const Zc = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Be ? "nhs-navigation-split-view--detail-active" : "",
    ue === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    A && oe && Mt ? "nhs-navigation-split-view--nav-collapsed" : "",
    g
  ].filter(Boolean).join(" "), ka = O.useRef(null);
  O.useEffect(() => {
    if (!D && ka.current) {
      const fe = le ? `Selected ${le.label}` : "Selection cleared";
      ka.current.textContent = fe;
    }
  }, [le, D]), O.useEffect(() => {
    !Be && Se == null && pt.current && pt.current.querySelectorAll("[data-nav-item]")[en.current]?.focus();
  }, [Be, Se]);
  const tn = ue === "three-column", [Ca, Jc] = O.useState(!1);
  O.useEffect(() => {
    tn && !Ca && Jc(!0);
  }, [tn, Ca]);
  const to = O.useRef(tn);
  O.useEffect(() => {
    to.current !== tn && (N?.(tn), to.current = tn);
  }, [tn, N]);
  const qc = () => {
    if (ue === "cards")
      return /* @__PURE__ */ r.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": Se ? String(Se) : void 0,
          children: [
            t.map((xe) => {
              const Le = h(xe), rt = Le === Se;
              return /* @__PURE__ */ r.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": rt,
                  children: /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      id: String(Le),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": rt || void 0,
                      "data-disabled": xe.disabled || void 0,
                      disabled: xe.disabled,
                      onClick: () => !xe.disabled && _n(Le, xe),
                      children: [
                        xe.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: xe.icon }),
                        /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: xe.label }),
                        xe.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: xe.description }),
                        o?.(xe),
                        xe.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: xe.badge })
                      ]
                    }
                  )
                },
                Le
              );
            }),
            t.length === 0 && !m && /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                "aria-disabled": "true",
                children: p || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const fe = "nsv-nav-instructions", Ne = O.useMemo(() => O.memo(
      ({
        item: xe,
        idx: Le,
        selected: rt,
        focused: qe
      }) => {
        const Ke = h(xe), kn = xe.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: qe ? 0 : -1,
          onClick: () => {
            en.current = Le, _n(Ke, xe);
          },
          onKeyDown: (dn) => {
            (dn.key === "Enter" || dn.key === " ") && (dn.preventDefault(), en.current = Le, _n(Ke, xe));
          }
        };
        return /* @__PURE__ */ r.jsxs(
          "li",
          {
            id: String(Ke),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": rt,
            "aria-current": rt ? "true" : void 0,
            "data-selected": rt || void 0,
            "data-disabled": xe.disabled || void 0,
            ...kn,
            children: [
              xe.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: xe.icon }),
              /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: xe.label }),
                xe.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: xe.description }),
                o?.(xe)
              ] }),
              xe.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: xe.badge })
            ]
          }
        );
      }
    ), [h, _n, o]);
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs(
        "ul",
        {
          ref: pt,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Wc,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": fe,
          "aria-activedescendant": Se ? String(Se) : void 0,
          children: [
            t.map((xe, Le) => /* @__PURE__ */ r.jsx(
              Ne,
              {
                item: xe,
                idx: Le,
                selected: h(xe) === Se,
                focused: Le === at || at === -1 && Le === 0 && x === "first",
                "data-just-selected": h(xe) === Z ? "true" : void 0
              },
              h(xe)
            )),
            t.length === 0 && !m && /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__list-item",
                "aria-disabled": "true",
                children: p || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          id: fe,
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
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: E,
      className: Zc,
      "aria-label": y?.rootLabel,
      "data-layout": ue,
      onKeyDown: Ge,
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Be || void 0,
            style: { transform: Be ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: P,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": y?.navigationLabel || "Items",
                  "data-collapsed": Mt || void 0,
                  tabIndex: 0,
                  children: [
                    A && oe && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Yc,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": Mt ? re : G,
                        title: Mt ? re : G,
                        children: Mt ? R || /* @__PURE__ */ r.jsx(_h, {}) : K || /* @__PURE__ */ r.jsx(Sh, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: qc() }),
                    $ && /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: $
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: F,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": y?.contentLabel || "Content",
                  "data-has-selection": !!le || void 0,
                  tabIndex: 0,
                  style: {
                    display: Xe && !tt ? "none" : void 0
                  },
                  children: [
                    cn && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: jt }),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(le)
                      }
                    )
                  ]
                }
              ),
              ue === "three-column" && (!B || Ca) || Xe && !tt ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: w,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": y?.secondaryContentLabel || "Secondary",
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
                        Xe && !tt && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsx(
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
                                  Ee,
                                  /* @__PURE__ */ r.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: le && typeof le == "object" && "label" in le ? le.label : String(le) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        le && ee && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof ee == "function" ? ee(le) : ee
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(le) })
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
            ref: ka,
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
            children: tn ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
kh.displayName = "NavigationSplitView";
const Ch = typeof window < "u" && window.document ? O.useLayoutEffect : O.useEffect, Xo = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), Nh = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: s, topLaneIndex: o }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, d = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${o})`, u = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), m = n && e.childItems && e.childItems.length > 0, p = (g) => {
    m && (g.preventDefault(), a?.(e));
  }, y = m ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": s || !1,
    onClick: p,
    onKeyDown: (g) => {
      (g.key === "Enter" || g.key === " ") && p(g), g.key === "Escape" && s && p(g);
    }
  } : {};
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ve("nhsuk-product-roadmap__item", m && "nhsuk-product-roadmap__item--expandable", s && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: d, top: c, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": u,
      "aria-colspan": f,
      ...y,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          m && /* @__PURE__ */ r.jsx("span", { className: ve("nhsuk-product-roadmap__item-expander", s && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, jh = Xc(({
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
  const [u, f] = He(() => /* @__PURE__ */ new Set()), [m, p] = He(() => /* @__PURE__ */ new Set()), y = ze(/* @__PURE__ */ new Set()), g = ge((L) => u.has(L), [u]), h = ge((L) => {
    f((B) => {
      const $ = new Set(B);
      return $.has(L.id) ? ($.delete(L.id), p((A) => {
        const I = new Set(A);
        return I.add(L.id), I;
      }), setTimeout(() => p((A) => {
        const I = new Set(A);
        return I.delete(L.id), I;
      }), 240), l?.(L.id, !1)) : ($.add(L.id), l?.(L.id, !0)), $;
    });
  }, [l]);
  Ch(() => {
    if (d !== "inline" || !i || typeof document > "u") return;
    const L = [];
    if (u.forEach((I) => {
      y.current.has(I) || L.push(I);
    }), y.current = new Set(u), !L.length) return;
    const B = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, $ = L.map((I) => `.nhsuk-product-roadmap__inline-children[data-parent="${I}"] .nhsuk-product-roadmap__inline-child`).join(","), A = Array.from(document.querySelectorAll($));
    if (A.length) {
      if (B) {
        A.forEach((I) => {
          I.style.opacity = "1", I.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((I) => {
        (I.gsap || I.default || I).to(A, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        A.forEach((I) => {
          I.style.opacity = "1", I.style.transform = "translateY(0)";
        });
      });
    }
  }, [u, d, i]);
  const T = ge(() => {
    u.size && f(/* @__PURE__ */ new Set());
  }, [u]), C = ve("nhsuk-product-roadmap", s), N = Xo(n, 120, 1200, 400), j = Xo(a, 1, 6, 2), x = De(() => e.map((L) => /* @__PURE__ */ new Date(L + " 01")), [e]), M = De(() => {
    if (x.length === 0) {
      const $ = /* @__PURE__ */ new Date();
      return [$, $];
    }
    const L = new Date(x[0]), B = er.offset(new Date(x[x.length - 1]), 1);
    return [L, B];
  }, [x]), D = De(() => Vs().domain(M).range([0, x.length * N]), [M, x.length, N]), _ = ge((L) => {
    if (L.startDate) {
      const G = new Date(L.startDate), R = new Date(L.endDate ?? L.startDate);
      R < G && R.setTime(G.getTime());
      const K = D(G), U = er.offset(new Date(R), 1);
      let X = D(U);
      Number.isFinite(X) || (X = K + N);
      const Y = Math.max(N * 0.25, X - K), Q = K / N, ce = Y / N;
      return { ...L, _pxLeft: K, _pxWidth: Y, _startFraction: Q, _spanColumns: ce };
    }
    const B = L.date ?? 1, $ = L.dateOffset ?? 0, A = L.length ?? 1, I = L.partialLength ?? 1, H = B - 1 + $, re = A - 1 + I;
    return { ...L, _pxLeft: H * N, _pxWidth: re * N, _startFraction: H, _spanColumns: re };
  }, [D, N]), b = De(() => t.map((L) => {
    const $ = L.roadmapItems.map((I) => {
      const H = !I.childItems && I.children ? { ...I, childItems: I.children } : { ...I };
      return _(H);
    }).sort((I, H) => I._pxLeft !== H._pxLeft ? I._pxLeft - H._pxLeft : H._pxWidth - I._pxWidth), A = [];
    return $.forEach((I) => {
      const H = I._pxLeft, re = I._pxLeft + I._pxWidth;
      let G = A.findIndex((R) => R <= H);
      G === -1 && (G = A.length, A.push(0)), A[G] = re, I.verticalPosition = G + 1;
    }), { ...L, roadmapItems: $, _laneCount: A.length };
  }), [t, _]), S = De(() => b.map((L) => L._laneCount || 1), [b]), k = De(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: C,
      style: { "--column-width": `${N}px`, gridTemplateColumns: k },
      role: "grid",
      "aria-label": o,
      "aria-colcount": e.length + 1,
      "aria-rowcount": b.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((L, B) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": B + 2, children: L }, `${L}-${B}`))
        ] }),
        b.map((L, B) => {
          const $ = B + 2, A = S[B];
          let I, H = 0, re = [];
          i && d === "inline" && (re = L.roadmapItems.filter((U) => g(U.id) && U.childItems && U.childItems.length).map((U) => ({ id: U.id, lane: U.verticalPosition || 1, count: U.childItems.length })).sort((U, X) => U.lane - X.lane), H = re.reduce((U, X) => U + X.count, 0));
          const G = A + H;
          I = `calc((${G} * var(--roadmap-item-block-height)) + (max(0, ${G} - 1) * var(--roadmap-row-gap)))`;
          const R = {};
          let K = 0;
          return re.forEach((U) => {
            K += U.count, R[U.lane + 1] = K;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": $, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: L.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: I }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: L.roadmapItems.map((U, X) => {
              const Y = (U.verticalPosition || 1) - 1, Q = re.filter((ee) => ee.lane - 1 < Y).reduce((ee, te) => ee + te.count, 0), ce = Y + Q, ie = g(U.id), ne = m.has(U.id);
              return /* @__PURE__ */ r.jsxs(bt.Fragment, { children: [
                /* @__PURE__ */ r.jsx(Nh, { item: U, maxLines: j, enableDrilldown: i, onExpand: h, isActive: ie, topLaneIndex: ce, laneOffset: Q }),
                i && d === "inline" && (ie || ne) && U.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": U.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${U.title} child tasks`, children: U.childItems.map((ee, te) => {
                  const se = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let z = U._pxLeft, oe = U._pxWidth;
                  if (ee.startDate) {
                    const de = new Date(ee.startDate);
                    let we = ee.endDate ? new Date(ee.endDate) : new Date(de);
                    we < de && (we = new Date(de));
                    const be = new Date(we);
                    be.setDate(be.getDate() + 1);
                    const Se = D(de);
                    let le = D(be);
                    (!Number.isFinite(le) || le <= Se) && (le = Se + 6), z = Se, oe = Math.max(6, le - Se);
                  }
                  const ue = ce + 1 + te;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: ve("nhsuk-product-roadmap__inline-child", ee.status && `nhsuk-product-roadmap__inline-child--status-${ee.status}`, !ie && ne && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${z}px`, width: `${oe}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${ue})`, height: se, opacity: ie ? 0 : void 0, transform: ie ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: ee.title })
                      ]
                    },
                    ee.id ?? te
                  );
                }) })
              ] }, U.id ?? X);
            }) }) })
          ] }, `${L.heading}-${B}`);
        }),
        i && d === "overlay" && u.size === 1 && (() => {
          const L = Array.from(u)[0], B = t.flatMap(($) => $.roadmapItems).find(($) => $.id === L);
          return !B || !B.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${B.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: B.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: T, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: B.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: B.childItems.map(($, A) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: $.title }),
                $.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: $.content })
              ] }, $.id ?? A)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: T, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
jh.displayName = "ProductRoadmap";
function xl(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = xl(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Pr() {
  for (var e, t, n = 0, a = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = xl(e)) && (a && (a += " "), a += t);
  return a;
}
function dt(e) {
  return function() {
    return e;
  };
}
const rs = Math.PI, as = 2 * rs, un = 1e-6, Mh = as - un;
function bl(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Ih(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return bl;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let s = 1, o = a.length; s < o; ++s)
      this._ += Math.round(arguments[s] * n) / n + a[s];
  };
}
class Dh {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? bl : Ih(t);
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
    let i = this._x1, l = this._y1, d = a - t, c = s - n, u = i - t, f = l - n, m = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (m > un) if (!(Math.abs(f * d - c * u) > un) || !o)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let p = a - i, y = s - l, g = d * d + c * c, h = p * p + y * y, T = Math.sqrt(g), C = Math.sqrt(m), N = o * Math.tan((rs - Math.acos((g + m - h) / (2 * T * C))) / 2), j = N / C, x = N / T;
      Math.abs(j - 1) > un && this._append`L${t + j * u},${n + j * f}`, this._append`A${o},${o},0,0,${+(f * p > u * y)},${this._x1 = t + x * d},${this._y1 = n + x * c}`;
    }
  }
  arc(t, n, a, s, o, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(s), d = a * Math.sin(s), c = t + l, u = n + d, f = 1 ^ i, m = i ? s - o : o - s;
    this._x1 === null ? this._append`M${c},${u}` : (Math.abs(this._x1 - c) > un || Math.abs(this._y1 - u) > un) && this._append`L${c},${u}`, a && (m < 0 && (m = m % as + as), m > Mh ? this._append`A${a},${a},0,1,${f},${t - l},${n - d}A${a},${a},0,1,${f},${this._x1 = c},${this._y1 = u}` : m > un && this._append`A${a},${a},0,${+(m >= rs)},${f},${this._x1 = t + a * Math.cos(o)},${this._y1 = n + a * Math.sin(o)}`);
  }
  rect(t, n, a, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+s}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function yl(e) {
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
  }, () => new Dh(t);
}
function vl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function wl(e) {
  this._context = e;
}
wl.prototype = {
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
function Sl(e) {
  return new wl(e);
}
function _l(e) {
  return e[0];
}
function kl(e) {
  return e[1];
}
function Cl(e, t) {
  var n = dt(!0), a = null, s = Sl, o = null, i = yl(l);
  e = typeof e == "function" ? e : e === void 0 ? _l : dt(e), t = typeof t == "function" ? t : t === void 0 ? kl : dt(t);
  function l(d) {
    var c, u = (d = vl(d)).length, f, m = !1, p;
    for (a == null && (o = s(p = i())), c = 0; c <= u; ++c)
      !(c < u && n(f = d[c], c, d)) === m && ((m = !m) ? o.lineStart() : o.lineEnd()), m && o.point(+e(f, c, d), +t(f, c, d));
    if (p) return o = null, p + "" || null;
  }
  return l.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : dt(+d), l) : e;
  }, l.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : dt(+d), l) : t;
  }, l.defined = function(d) {
    return arguments.length ? (n = typeof d == "function" ? d : dt(!!d), l) : n;
  }, l.curve = function(d) {
    return arguments.length ? (s = d, a != null && (o = s(a)), l) : s;
  }, l.context = function(d) {
    return arguments.length ? (d == null ? a = o = null : o = s(a = d), l) : a;
  }, l;
}
function ss(e, t, n) {
  var a = null, s = dt(!0), o = null, i = Sl, l = null, d = yl(c);
  e = typeof e == "function" ? e : e === void 0 ? _l : dt(+e), t = typeof t == "function" ? t : dt(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? kl : dt(+n);
  function c(f) {
    var m, p, y, g = (f = vl(f)).length, h, T = !1, C, N = new Array(g), j = new Array(g);
    for (o == null && (l = i(C = d())), m = 0; m <= g; ++m) {
      if (!(m < g && s(h = f[m], m, f)) === T)
        if (T = !T)
          p = m, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), y = m - 1; y >= p; --y)
            l.point(N[y], j[y]);
          l.lineEnd(), l.areaEnd();
        }
      T && (N[m] = +e(h, m, f), j[m] = +t(h, m, f), l.point(a ? +a(h, m, f) : N[m], n ? +n(h, m, f) : j[m]));
    }
    if (C) return l = null, C + "" || null;
  }
  function u() {
    return Cl().defined(s).curve(i).context(o);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : dt(+f), a = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : dt(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : dt(+f), c) : a;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : dt(+f), n = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : dt(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : dt(+f), c) : n;
  }, c.lineX0 = c.lineY0 = function() {
    return u().x(e).y(t);
  }, c.lineY1 = function() {
    return u().x(e).y(n);
  }, c.lineX1 = function() {
    return u().x(a).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : dt(!!f), c) : s;
  }, c.curve = function(f) {
    return arguments.length ? (i = f, o != null && (l = i(o)), c) : i;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? o = l = null : l = i(o = f), c) : o;
  }, c;
}
function Qo(e) {
  return e < 0 ? -1 : 1;
}
function Ko(e, t, n) {
  var a = e._x1 - e._x0, s = t - e._x1, o = (e._y1 - e._y0) / (a || s < 0 && -0), i = (n - e._y1) / (s || a < 0 && -0), l = (o * s + i * a) / (a + s);
  return (Qo(o) + Qo(i)) * Math.min(Math.abs(o), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function ei(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Ra(e, t, n) {
  var a = e._x0, s = e._y0, o = e._x1, i = e._y1, l = (o - a) / 3;
  e._context.bezierCurveTo(a + l, s + l * t, o - l, i - l * n, o, i);
}
function Fr(e) {
  this._context = e;
}
Fr.prototype = {
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
        Ra(this, this._t0, ei(this, this._t0));
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
          this._point = 3, Ra(this, ei(this, n = Ko(this, e, t)), n);
          break;
        default:
          Ra(this, this._t0, n = Ko(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(Fr.prototype).point = function(e, t) {
  Fr.prototype.point.call(this, t, e);
};
function Rr(e) {
  return new Fr(e);
}
function Th(e, t, n) {
  const a = Fi(e, t);
  return Vs().domain(a).range(n);
}
function ti(e, t, n) {
  const [a, s] = Fi(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(s)))
    return Dr().domain([0, 0]).range(n);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const d = s - a, c = (d > 0 ? d : a) * 0.1;
    i = Math.max(0, a - c), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = s ?? 0;
  return Dr().domain([i, l]).nice().range(n);
}
function os(e, t, n, a) {
  const s = Cl().x(t).y(n);
  return a?.smooth !== !1 && s.curve(Rr), s(e) ?? "";
}
function Lh(e = {}) {
  const t = O.useRef(null), n = O.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, s] = O.useState({ width: 0, height: 0 });
  O.useLayoutEffect(() => {
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
const Nl = O.createContext(null);
function ln() {
  return O.useContext(Nl);
}
const $h = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: s,
  role: o = "group",
  ariaLabel: i
}) => {
  const l = Lh(t), d = { height: e, position: "relative" };
  return n !== void 0 && (d.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: d, role: o, "aria-label": i, children: /* @__PURE__ */ r.jsx(Nl.Provider, { value: l, children: s }) });
}, Zs = O.createContext(null), Sn = () => O.useContext(Zs), Ah = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  parseX: a,
  children: s,
  xTickCount: o = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: d,
  yPadding: c,
  yBottomGapPx: u
}) => {
  const f = ln(), m = t ?? f?.innerWidth ?? 0, p = n ?? f?.innerHeight ?? 0, y = O.useMemo(() => e.flatMap((x) => x.data), [e]), g = O.useCallback(
    (x) => {
      if (a) return a(x);
      const M = x.x;
      return M instanceof Date ? M : new Date(M);
    },
    [a]
  ), h = d ?? 6, T = c ?? 6, C = O.useMemo(
    () => Th(y, g, [
      h,
      Math.max(0, m - h)
    ]),
    [y, g, m, h]
  ), N = O.useMemo(() => {
    const x = Math.max(0, u ?? 0), M = Math.max(0, p - (T + x));
    if (l) {
      const D = ti([], (_) => _.y, [
        M,
        T
      ]);
      return D.domain(l), D;
    }
    return ti(y, (D) => D.y, [M, T]);
  }, [y, p, l, T, u]), j = O.useMemo(
    () => ({
      xScale: C,
      yScale: N,
      getXTicks: (x = o) => C.ticks(x),
      getYTicks: (x = i) => N.ticks(x)
    }),
    [C, N, o, i]
  );
  return /* @__PURE__ */ r.jsx(Zs.Provider, { value: j, children: s });
}, vr = 16, wr = 6, Eh = 16, Ph = 4, Fh = 6, Rh = 3, Bh = void 0, ni = ({
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
  allowLabelWrap: m = !0,
  tickFormatPreset: p,
  yZeroBreak: y
}) => {
  const g = Sn(), h = ln(), T = t || (e === "x" ? g?.xScale : g?.yScale), C = n ?? (e === "x" ? 6 : 5), N = typeof s == "function", j = O.useMemo(() => {
    if (N || !p) return;
    const D = (_) => new Intl.DateTimeFormat(void 0, _);
    switch (p) {
      case "dayShortMonth":
        return (_) => {
          const b = _ instanceof Date ? _ : new Date(_);
          return `${b.getDate()}
${D({ month: "short" }).format(b)}`;
        };
      case "dayShortMonthYear":
        return (_) => {
          const b = _ instanceof Date ? _ : new Date(_);
          return `${b.getDate()}
${D({ month: "short" }).format(b)} ${b.getFullYear()}`;
        };
      case "shortMonth":
        return (_) => {
          const b = _ instanceof Date ? _ : new Date(_);
          return D({ month: "short" }).format(b);
        };
      case "shortMonthYear":
        return (_) => {
          const b = _ instanceof Date ? _ : new Date(_);
          return `${D({ month: "short" }).format(b)} ${b.getFullYear()}`;
        };
      case "hourMinute":
        return (_) => {
          const b = _ instanceof Date ? _ : new Date(_);
          return D({ hour: "2-digit", minute: "2-digit" }).format(b);
        };
      default:
        return;
    }
  }, [N, p]);
  let x = N ? s : j || ((D) => String(D));
  const M = O.useMemo(() => a && Array.isArray(a) ? a : T ? typeof T.ticks == "function" ? T.ticks(C) : T.domain ? T.domain() : [] : [], [T, C, a]);
  if (e === "x" && !N && !p && M.length && M.every((D) => D instanceof Date)) {
    const D = M[0], _ = M[M.length - 1], b = _.getTime() - D.getTime(), S = 24 * 3600 * 1e3, k = 365 * S, L = D.getFullYear() === _.getFullYear(), B = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (b < 2 * S) {
      const $ = new Intl.DateTimeFormat(void 0, {
        hour: "2-digit",
        minute: "2-digit"
      });
      x = (A) => $.format(A);
    } else if (b < 32 * S)
      x = ($) => {
        const A = $;
        return `${A.getDate()} ${B.format(A)}`;
      };
    else if (b < k && L)
      x = ($) => B.format($);
    else if (b < 2 * k) {
      const $ = /* @__PURE__ */ new Set();
      x = (A) => {
        const I = A, H = I.getMonth();
        return $.has(H) || $.add(H), `${B.format(I)} ${I.getFullYear()}`;
      };
    } else
      x = ($) => String($.getFullYear());
  }
  if (!T || !h) return null;
  if (e === "x") {
    const D = i ?? h.innerHeight, _ = typeof T.bandwidth == "function", b = _ ? T.bandwidth() : 0, S = (B) => {
      const $ = T(B);
      return _ ? $ + b / 2 : $;
    };
    let k = d ?? 0;
    if (u && d == null) {
      const B = M.map(
        (A) => x(A).replace(/\n.*/g, "")
      ), $ = B.length ? B.reduce((A, I) => A + I.length, 0) / B.length : 0;
      k = Math.max(12, Math.round($ * 6 + 4));
    }
    const L = O.useMemo(() => {
      if (a && Array.isArray(a) || k <= 0) return M;
      const B = [];
      let $ = -1 / 0;
      for (const A of M) {
        const I = S(A);
        I - $ >= k && (B.push(A), $ = I);
      }
      return B;
    }, [
      M,
      T,
      k,
      a,
      _,
      b
    ]);
    return /* @__PURE__ */ r.jsxs(
      "g",
      {
        className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "),
        transform: `translate(0,${D})`,
        fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
        children: [
          /* @__PURE__ */ r.jsx("line", { x1: 0, x2: h.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
          L.map((B, $) => {
            const A = x(B), I = c && A.length > c ? A.slice(0, Math.max(1, c - 1)) + "…" : A, H = m ? I.split(/\n/) : [I.replace(/\n/g, " ")], re = f < 0 ? "end" : f > 0 ? "start" : "middle";
            return /* @__PURE__ */ r.jsxs(
              "g",
              {
                transform: `translate(${S(B)},0)`,
                children: [
                  /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
                  /* @__PURE__ */ r.jsxs(
                    "text",
                    {
                      y: 9,
                      textAnchor: re,
                      className: "fdp-axis__tick",
                      dominantBaseline: "hanging",
                      transform: f ? `rotate(${f})` : void 0,
                      fontFamily: "inherit",
                      children: [
                        H.map((G, R) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: R === 0 ? 0 : "1.1em", children: G }, R)),
                        I !== A && /* @__PURE__ */ r.jsx("title", { children: A })
                      ]
                    }
                  )
                ]
              },
              B?.toString?.() || $
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
          const D = !!y?.enabled, _ = Math.max(wr, y?.gapPx ?? vr);
          if (!D)
            return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: h.innerHeight, stroke: "currentColor" });
          const b = Math.max(0, h.innerHeight - _);
          return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: b, stroke: "currentColor" });
        })(),
        M.map((D, _) => {
          const b = x(D), S = c && b.length > c ? b.slice(0, Math.max(1, c - 1)) + "…" : b, k = m ? S.split(/\n/) : [S.replace(/\n/g, " ")];
          if (!!y?.enabled) {
            const B = Math.max(wr, y?.gapPx ?? vr), $ = Math.max(0, h.innerHeight - B);
            if (T(D) > $ - 1) return null;
          }
          return /* @__PURE__ */ r.jsxs(
            "g",
            {
              transform: `translate(0,${T(D)})`,
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
                      k.map((B, $) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: $ === 0 ? 0 : "1.1em", children: B }, $)),
                      S !== b && /* @__PURE__ */ r.jsx("title", { children: b })
                    ]
                  }
                )
              ]
            },
            D?.toString?.() || _
          );
        }),
        !!y?.enabled && (() => {
          const D = Math.max(wr, y?.gapPx ?? vr), _ = h.innerHeight, S = Math.max(0, _ - D), k = S, B = Math.max(4, _ - k), $ = Ph, A = Fh, I = Math.max(1, Math.round(y?.zigZag?.amplitudePx ?? $)), H = Math.max(1, Math.round(y?.zigZag?.stepXPx ?? Rh)), re = y?.zigZag?.heightPx ?? Bh, G = Math.max(4, Math.round(re ?? 0));
          let R, K;
          if (y?.zigZag?.heightPx && y.zigZag.heightPx > 0) {
            const ne = Math.max(4, Math.min(B - 2, G));
            R = Math.max(1, Math.floor(ne / (2 * I))), K = Math.max(0, Math.min(ne, R * 2 * I));
          } else typeof y?.zigZag?.cycles == "number" && y?.zigZag?.cycles > 0 ? (R = Math.max(1, Math.round(y.zigZag.cycles)), K = R * 2 * I, K = Math.min(K, B - 2), R = Math.max(1, Math.floor(K / (2 * I)))) : (R = A, K = Math.min(B - 2, R * 2 * I), R = Math.max(1, Math.floor(K / (2 * I))));
          const U = k + (B - K) / 2, X = U + K;
          let Y = "M0,0";
          const Q = K > 0 ? Math.max(0, Math.floor((K - I) / (2 * I))) : 0, ce = Math.max(0, (K - Q * 2 * I) / 2), ie = I > 0 ? H * (ce / I) : 0;
          ce > 0 && (Y += ` l${ie},${ce}`);
          for (let ne = 0; ne < Q; ne++)
            Y += ` l-${H},${I} l${H},${I}`;
          return ce > 0 && (Y += ` l-${ie},${ce}`), /* @__PURE__ */ r.jsxs("g", { children: [
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: S, y2: U, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${U})`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("path", { d: Y, stroke: "currentColor", fill: "none" }) }),
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: X, y2: _, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${_})`, children: /* @__PURE__ */ r.jsx("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: "0" }) })
          ] });
        })(),
        o && /* @__PURE__ */ r.jsx(
          "text",
          {
            transform: "rotate(-90)",
            x: -h.innerHeight / 2,
            y: -h.margin.left + 12,
            textAnchor: "middle",
            className: "fdp-axis__label",
            fontFamily: "inherit",
            children: o
          }
        )
      ]
    }
  );
}, Hh = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: s
}) => {
  const o = Sn(), i = ln();
  if (!o || !i) return null;
  const l = e === "y" ? o.getYTicks(t) : o.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", s].filter(Boolean).join(" "), children: [
    e === "y" && l.map((d, c) => /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: 0,
        x2: i.innerWidth,
        y1: o.yScale(d),
        y2: o.yScale(d),
        stroke: n,
        strokeDasharray: a
      },
      c
    )),
    e === "x" && l.map((d, c) => /* @__PURE__ */ r.jsx(
      "line",
      {
        y1: 0,
        y2: i.innerHeight,
        x1: o.xScale(d),
        x2: o.xScale(d),
        stroke: n,
        strokeDasharray: a
      },
      c
    ))
  ] });
}, zh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, lr = {
  color: zh
}, Oh = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, ba = {
  color: Oh
}, Uh = [
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
let Ba = null, Ha = null, za = null, jl = "optimized";
function Wh() {
  const e = { color: { ...ba.color, ...lr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
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
    return Uh;
  }
}
function Gh() {
  return Ba || (Ba = Wh()), Ba;
}
function Vh(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function Oa(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Yh(e, t, n) {
  const a = Oa(e), s = Oa(t), o = Oa(n), i = a * 0.4124 + s * 0.3576 + o * 0.1805, l = a * 0.2126 + s * 0.7152 + o * 0.0722, d = a * 0.0193 + s * 0.1192 + o * 0.9505;
  return { x: i * 100, y: l * 100, z: d * 100 };
}
function Zh(e, t, n) {
  let i = e / 95.047, l = t / 100, d = n / 108.883;
  const c = (u) => u > 8856e-6 ? Math.cbrt(u) : 7.787 * u + 16 / 116;
  return i = c(i), l = c(l), d = c(d), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - d) };
}
function Ml(e) {
  const t = Vh(e);
  if (!t) return null;
  const n = Yh(t.r, t.g, t.b);
  return Zh(n.x, n.y, n.z);
}
function ri(e, t) {
  const n = e.L - t.L, a = e.a - t.a, s = e.b - t.b;
  return Math.sqrt(n * n + a * a + s * s);
}
function Jh() {
  const e = Gh();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Ml(i));
  let n = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let d = 0, c = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (d += ri(l, t[f]), c++);
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
        const m = t[f];
        if (m) {
          const p = ri(c, m);
          p < u && (u = p);
        }
      }
      u > l && (l = u, i = d);
    }
    o.push(i), s.delete(i);
  }
  return o.map((i) => e[i]);
}
function qh() {
  return Ha || (Ha = Jh()), Ha;
}
function Xh(e, t, n) {
  const a = (e + 16) / 116, s = t / 500 + a, o = a - n / 200, i = (u) => {
    const f = u * u * u;
    return f > 8856e-6 ? f : (u - 16 / 116) / 7.787;
  }, l = i(s) * 95.047, d = i(a) * 100, c = i(o) * 108.883;
  return { X: l, Y: d, Z: c };
}
function Qh(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, s = e * -0.9689 + t * 1.8758 + n * 0.0415, o = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), s = Math.min(1, Math.max(0, i(s))), o = Math.min(1, Math.max(0, i(o))), { r: Math.round(a * 255), g: Math.round(s * 255), b: Math.round(o * 255) };
}
function Kh(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function em(e, t) {
  const n = Ml(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: s, Y: o, Z: i } = Xh(a, n.a, n.b), l = Qh(s, o, i);
  return Kh(l.r, l.g, l.b);
}
function tm() {
  const e = qh(), n = [12, -12, 24, -24].map((s) => e.map((o) => em(o, s))), a = [...e];
  return n.forEach((s) => a.push(...s)), a;
}
function nm() {
  return (!za || rm()) && (za = tm(), Il = jl), za;
}
let Il = null;
function rm() {
  return Il !== jl;
}
function $t(e) {
  const t = nm();
  return t[e % t.length];
}
let Ln = null, tr = null, nr = null, rr = null;
function am() {
  const e = lr?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    Ln = [];
    for (let o = 1; o <= 12; o++) {
      const i = t[String(o)]?.$value || t[String(o)]?.value;
      Ln.push(typeof i == "string" ? i : "#212b32");
    }
    const n = e.region || {};
    tr = {}, Object.keys(n).forEach((o) => {
      const i = n[o]?.$value || n[o]?.value;
      typeof i == "string" && (tr[o] = i);
    });
    const a = e.severity || {}, s = e["org-level"] || {};
    rr = {}, Object.keys(s).forEach((o) => {
      const i = s[o]?.$value || s[o]?.value;
      typeof i == "string" && (rr[o] = i);
    }), nr = {}, Object.keys(a).forEach((o) => {
      const i = a[o]?.$value || a[o]?.value;
      typeof i == "string" && (nr[o] = i);
    });
  }
}
function ya() {
  (!Ln || !tr || !nr || !rr) && am();
}
function yn(e) {
  return ya(), Ln ? Ln[e % Ln.length] : "#212b32";
}
function sm(e) {
  return ya(), tr ? tr[e] : void 0;
}
function Br(e, t) {
  return sm(e) || yn(t);
}
const is = ["low", "moderate", "high", "critical"];
let Ua = null;
function om() {
  const e = { color: { ...ba.color, ...lr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, n = {};
  return is.forEach((a) => {
    const s = t(`color.data-viz.severity.${a}`);
    s && (n[a] = s);
  }), n;
}
function Dl() {
  return Ua || (Ua = om()), Ua;
}
function im(e) {
  return Dl()[e.toLowerCase()];
}
function lm(e, t) {
  return im(e) || Dl()[is[t % is.length]] || $t(t);
}
function cm(e) {
  return ya(), nr ? nr[e] : void 0;
}
function dm(e, t) {
  return cm(e) || yn(t);
}
const ls = ["trust", "ambulance", "icb", "region"];
let Wa = null;
function um() {
  const e = { color: { ...ba.color, ...lr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, n = {};
  return ls.forEach((a) => {
    const s = t(`color.data-viz.org-level.${a}`);
    s && (n[a] = s);
  }), n;
}
function Tl() {
  return Wa || (Wa = um()), Wa;
}
function fm(e) {
  return Tl()[e.toLowerCase()];
}
function pm(e, t) {
  return fm(e) || Tl()[ls[t % ls.length]] || $t(t);
}
function hm(e) {
  return ya(), rr ? rr[e] : void 0;
}
function mm(e, t) {
  return hm(e) || yn(t);
}
let Ga = null;
const gm = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function xm(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function bm() {
  const e = { color: { ...ba.color, ...lr.color } }, t = (s, o = /* @__PURE__ */ new Set()) => {
    if (o.has(s)) return;
    o.add(s);
    const i = s.split(".").reduce((d, c) => d ? d[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), o) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return gm.forEach((s) => {
    const o = t(`color.data-viz.region.${s}`);
    o ? n[s] = o : a.push(s);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function ym() {
  return Ga || (Ga = bm()), Ga;
}
function vm(e) {
  return ym()[xm(e)];
}
function $n(e, t) {
  return vm(e) || $t(t);
}
const Ll = O.createContext(null), cr = () => O.useContext(Ll), Hy = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [s, o] = O.useState(() => new Set(e)), i = n !== void 0, l = O.useMemo(() => i ? new Set(n) : s, [i, n, s]), d = O.useCallback((u) => {
    i || o(new Set(u)), a?.(Array.from(u));
  }, [i, a]), c = O.useMemo(() => ({
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
  return /* @__PURE__ */ r.jsx(Ll.Provider, { value: c, children: t });
}, $l = O.createContext(null), Kt = () => O.useContext($l), wm = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = Sn(), s = cr(), [o, i] = O.useState(null), l = O.useRef(/* @__PURE__ */ new Map()), [d, c] = O.useState([]), u = O.useCallback(
    (D, _) => {
      l.current.set(D, _);
    },
    []
  ), f = O.useCallback((D) => {
    l.current.delete(D);
  }, []), m = O.useCallback(
    (D, _) => {
      if (!a) return;
      const { xScale: b, yScale: S } = a;
      let k = null, L = 1 / 0;
      l.current.forEach((B, $) => {
        B.forEach((A, I) => {
          const H = b(A.x), re = S(A.y), G = H - D, R = re - _, K = Math.sqrt(G * G + R * R);
          K < L && (L = K, k = {
            seriesId: $,
            index: I,
            x: A.x,
            y: A.y,
            clientX: H,
            clientY: re
          });
        });
      }), k && L <= t ? i(k) : i(null);
    },
    [a, t]
  ), p = O.useCallback(() => i(null), []);
  O.useEffect(() => {
    if (!o) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: D, yScale: _ } = a, b = [];
    l.current.forEach((S, k) => {
      S.forEach((L, B) => {
        (o.x instanceof Date && L.x instanceof Date ? L.x.getTime() === o.x.getTime() : L.x === o.x) && b.push({
          seriesId: k,
          index: B,
          x: L.x,
          y: L.y,
          clientX: D(L.x),
          clientY: _(L.y)
        });
      });
    }), b.sort((S, k) => S.seriesId.localeCompare(k.seriesId)), c(b);
  }, [o, a]);
  const y = O.useCallback(
    (D) => {
      if (!o) return;
      const _ = l.current.get(o.seriesId);
      if (!_) return;
      let b = o.index + D;
      if (b < 0 || b >= _.length) {
        if (!n) return;
        b = (b + _.length) % _.length;
      }
      const S = _[b];
      if (!a) return;
      const { xScale: k, yScale: L } = a;
      i({
        seriesId: o.seriesId,
        index: b,
        x: S.x,
        y: S.y,
        clientX: k(S.x),
        clientY: L(S.y)
      });
    },
    [o, a, n]
  ), g = O.useCallback(
    (D) => {
      let _ = Array.from(l.current.keys());
      if (s && (_ = _.filter((H) => !s.isHidden(H))), _.length === 0) return;
      if (!o) {
        const H = _[0], re = l.current.get(H);
        if (!re || !a) return;
        const { xScale: G, yScale: R } = a, K = re[0];
        i({
          seriesId: H,
          index: 0,
          x: K.x,
          y: K.y,
          clientX: G(K.x),
          clientY: R(K.y)
        });
        return;
      }
      const b = _.indexOf(o.seriesId);
      if (b === -1) return;
      let S = b + D;
      if (S < 0 || S >= _.length) {
        if (!n) return;
        S = (S + _.length) % _.length;
      }
      const k = _[S], L = l.current.get(k);
      if (!L || !a) return;
      const B = Math.min(o.index, L.length - 1), $ = L[B], { xScale: A, yScale: I } = a;
      i({
        seriesId: k,
        index: B,
        x: $.x,
        y: $.y,
        clientX: A($.x),
        clientY: I($.y)
      });
    },
    [o, a, n, s]
  ), h = O.useCallback(() => {
    let D = Array.from(l.current.keys());
    if (s && (D = D.filter((B) => !s.isHidden(B))), D.length === 0) return;
    const _ = o ? o.seriesId : D[0], b = l.current.get(_);
    if (!b || b.length === 0 || !a) return;
    const S = b[0], { xScale: k, yScale: L } = a;
    i({
      seriesId: _,
      index: 0,
      x: S.x,
      y: S.y,
      clientX: k(S.x),
      clientY: L(S.y)
    });
  }, [o, a, s]), T = O.useCallback(() => {
    let D = Array.from(l.current.keys());
    if (s && (D = D.filter(($) => !s.isHidden($))), D.length === 0) return;
    const _ = o ? o.seriesId : D[0], b = l.current.get(_);
    if (!b || b.length === 0 || !a) return;
    const S = b.length - 1, k = b[S], { xScale: L, yScale: B } = a;
    i({
      seriesId: _,
      index: S,
      x: k.x,
      y: k.y,
      clientX: L(k.x),
      clientY: B(k.y)
    });
  }, [o, a, s]), C = O.useCallback(
    () => y(1),
    [y]
  ), N = O.useCallback(
    () => y(-1),
    [y]
  ), j = O.useCallback(
    () => g(1),
    [g]
  ), x = O.useCallback(
    () => g(-1),
    [g]
  ), M = O.useMemo(
    () => ({
      focused: o,
      setFocused: i,
      aggregated: d,
      focusNearest: m,
      clear: p,
      registerSeries: u,
      unregisterSeries: f,
      focusNextPoint: C,
      focusPrevPoint: N,
      focusNextSeries: j,
      focusPrevSeries: x,
      focusFirstPoint: h,
      focusLastPoint: T
    }),
    [
      o,
      d,
      m,
      p,
      u,
      f,
      C,
      N,
      j,
      x,
      h,
      T
    ]
  );
  return /* @__PURE__ */ r.jsx($l.Provider, { value: M, children: e });
}, Sm = ({
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
  const m = Sn();
  if (!m) return null;
  const { xScale: p, yScale: y } = m, h = cr()?.isHidden(e.id) ?? !1, T = h && l === "fade";
  if (h && l === "remove")
    return null;
  const C = Kt();
  O.useEffect(() => {
    if (!C) return;
    const _ = e.data.map((b) => ({ x: i(b), y: b.y }));
    return C.registerSeries(e.id, _), () => C.unregisterSeries(e.id);
  }, [C, e.id, e.data, i]);
  const N = O.useMemo(
    () => os(
      e.data,
      (_) => p(i(_)),
      (_) => y(_.y),
      { smooth: c }
    ),
    [e.data, p, y, i, c]
  ), j = O.useMemo(() => {
    if (!e.data.length) return "";
    const [_] = y.domain(), b = ss().x((S) => p(i(S))).y0(() => y(_)).y1((S) => y(S.y));
    return c && b.curve(Rr), b(e.data) || "";
  }, [e.data, p, y, i, c]), x = f && f[t], M = e.color || x || (n === "region" ? $n(e.id, t) : $t(t)), D = n === "region" ? Br(e.id, t) : yn(t);
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: T ? 0.25 : 1,
      "aria-hidden": T ? !0 : void 0,
      children: [
        u && /* @__PURE__ */ r.jsx(
          "path",
          {
            d: j,
            fill: `url(#${u})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: N,
            fill: "none",
            stroke: M,
            strokeWidth: d,
            role: "presentation"
          }
        ),
        a && e.data.map((_, b) => {
          const S = p(i(_)), k = y(_.y), L = s ? 0 : -1, B = !T && (s && b === o || C?.focused?.seriesId === e.id && C.focused.index === b), $ = () => {
            C && !T && C.setFocused({
              seriesId: e.id,
              index: b,
              x: i(_),
              y: _.y,
              clientX: S,
              clientY: k
            });
          }, A = () => {
            C && C.focused?.seriesId === e.id && C.focused.index === b && C.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: S,
              cy: k,
              r: B ? 5 : 3.5,
              stroke: B ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : D,
              strokeWidth: B ? 2 : 1,
              fill: B ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : M,
              className: "fdp-line-point",
              tabIndex: T ? -1 : L,
              "aria-label": `${e.label || e.id} ${i(_).toDateString()} value ${_.y}`,
              "data-series": e.id,
              "data-index": b,
              onMouseEnter: $,
              onFocus: $,
              onMouseLeave: A,
              onBlur: A
            },
            b
          );
        })
      ]
    }
  );
}, _m = ({ polite: e = !0, format: t }) => {
  const n = Kt(), [a, s] = O.useState(""), o = O.useRef("");
  return O.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let d;
    if (l && l.length > 1) {
      const c = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      d = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      d = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : km(i.seriesId, i.x, i.y, i.index);
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
function km(e, t, n, a) {
  const s = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${s}, value ${n}`;
}
const zy = () => {
  const e = Kt(), t = ln();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: s, innerHeight: o } = t, i = Math.min(Math.max(n.clientX, 0), s), l = Math.min(Math.max(n.clientY, 0), o), d = i + 8, c = l - 8, u = a.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), m = u ? f : `${f} • ${n.y}`, p = /\d+$/.exec(n.seriesId || ""), y = p ? parseInt(p[0], 10) - 1 : 0, g = $t(y >= 0 ? y : 0) || "#005eb8", h = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: h, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: h, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: g, stroke: "#fff", strokeWidth: 0.5 }),
    u ? (() => {
      const C = a.map((D) => `${D.seriesId}: ${D.y}`), N = [m, ...C], j = N.reduce((D, _) => Math.max(D, _.length), 0), x = Math.max(90, j * 6.2 + 16), M = 16 * N.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: d, y: c - M, rx: 4, ry: 4, width: x, height: M, fill: "#212b32", opacity: 0.92 }),
        N.map((D, _) => /* @__PURE__ */ r.jsx("text", { x: d + 8, y: c - M + 6 + 16 * (_ + 0.7), fill: "#fff", fontSize: 12, children: D }, _))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: d, y: c - 24, rx: 4, ry: 4, width: Math.max(60, m.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: d + 8, y: c - 8, fill: "#fff", fontSize: 12, children: m })
    ] })
  ] });
}, Oy = ({
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
  const c = cr(), u = !!(c && !a && !l && o === void 0), f = a || u, m = e || [], p = o !== void 0, [y, g] = O.useState(new Set(i)), h = p ? new Set(o) : y, [T, C] = O.useState(""), N = (j) => {
    if (u && c) {
      const L = c.isHidden(j);
      c.toggle(j);
      const $ = m.find((I) => I.id === j)?.label || j, A = d ? d(j, L, $) : `${$} ${L ? "shown" : "hidden"}`;
      C(A);
      return;
    }
    if (!f) return;
    const x = new Set(h), M = x.has(j);
    M ? x.delete(j) : x.add(j), p || g(x);
    const D = m.filter((L) => !x.has(L.id)).map((L) => L.id), _ = Array.from(x);
    l?.(D, _);
    const S = m.find((L) => L.id === j)?.label || j, k = d ? d(j, M, S) : `${S} ${M ? "shown" : "hidden"}`;
    C(k);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: m.map((j, x) => {
      const M = j.palette || t, D = j.color || (M === "region" ? $n(j.id, x) : M === "severity" ? lm(j.id, x) : M === "org-level" ? pm(j.id, x) : $t(x));
      let _ = j.stroke || (M === "region" ? Br(j.id, x) : M === "severity" ? dm(j.id, x) : M === "org-level" ? mm(j.id, x) : yn(x));
      if (s && _) {
        const k = _.trim().toLowerCase();
        (k === "#fff" || k === "#ffffff" || k === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(k)) && (_ = "#212b32");
      }
      const b = u && c ? c.isHidden(j.id) : h.has(j.id), S = f ? {
        "aria-pressed": !b,
        "aria-label": `${j.label} (${b ? "show" : "hide"})`,
        onClick: () => N(j.id)
      } : { "aria-label": j.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${b ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: D,
              backgroundImage: j.patternDataUrl ? `url(${j.patternDataUrl})` : void 0,
              backgroundSize: j.patternDataUrl ? "auto" : void 0,
              borderColor: _
            },
            ...S
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: j.label })
      ] }, j.id);
    }) }),
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: T })
  ] });
}, Uy = ({
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
  const f = Sn();
  if (!f) return null;
  const { xScale: m, yScale: p } = f, g = cr()?.isHidden(e.id) ?? !1, h = g && o === "fade";
  if (g && o === "remove") return null;
  const T = Kt();
  O.useEffect(() => {
    if (!T) return;
    const D = e.data.map((_) => ({ x: a(_), y: _.y }));
    return T.registerSeries(e.id, D), () => T.unregisterSeries(e.id);
  }, [T, e.id, e.data, a]);
  const C = u && u[t], N = e.color || C || (n === "region" ? $n(e.id, t) : $t(t)), j = O.useMemo(() => d && d.length === e.data.length ? os(
    e.data,
    (D) => m(a(D)),
    (D) => {
      const _ = e.data.indexOf(D);
      return p(d[_].y1);
    },
    { smooth: l }
  ) : os(
    e.data,
    (D) => m(a(D)),
    (D) => p(D.y),
    { smooth: l }
  ), [e.data, d, m, p, a, l]), x = O.useMemo(() => {
    if (d && d.length === e.data.length) {
      const k = ss().x((L) => m(a(L))).y0((L, B) => p(d[B].y0)).y1((L, B) => p(d[B].y1));
      return l && k.curve(Rr), k(e.data) || "";
    }
    const [D, _] = p.domain();
    let b = i;
    b < D ? b = D : b > _ && (b = _);
    const S = ss().x((k) => m(a(k))).y0(() => p(b)).y1((k) => p(k.y));
    return l && S.curve(Rr), S(e.data) || "";
  }, [e.data, d, m, p, a, i, l]), M = O.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: h ? 0.25 : 1,
      "aria-hidden": h ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: M, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: N, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: N, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: x,
            fill: c ? `url(#${M})` : N,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !s && /* @__PURE__ */ r.jsx("path", { d: j, fill: "none", stroke: N, strokeWidth: 1 })
      ]
    }
  );
}, Wy = ({
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
  colorMode: m = "series",
  allSeries: p,
  stacked: y,
  gapRatio: g = 0.15,
  minBarWidth: h,
  gradientFill: T = !0,
  gradientStrokeMatch: C = !0,
  opacity: N = 1,
  fadedOpacity: j = 0.25,
  flatFillOpacity: x = 1,
  colors: M
}) => {
  const D = Math.max(0, g), _ = Sn(), b = ln();
  if (!_ || !b) return null;
  const { xScale: S, yScale: k } = _, B = cr()?.isHidden(e.id) ?? !1, $ = B && f === "fade";
  if (B && f === "remove") return null;
  const A = Kt();
  O.useEffect(() => {
    if (!A) return;
    const ee = e.data.map((te) => ({ x: s(te), y: te.y }));
    return A.registerSeries(e.id, ee), () => A.unregisterSeries(e.id);
  }, [A, e.id, e.data, s]);
  const I = typeof S.bandwidth == "function", H = I ? S.bandwidth() : void 0, re = O.useMemo(() => {
    if (H != null) return H;
    const ee = p && p.length ? p : [e], te = [];
    ee.forEach((ae) => {
      ae.data.forEach((ue) => {
        const de = S(s(ue));
        Number.isFinite(de) && te.push(de);
      });
    });
    const se = te.sort((ae, ue) => ae - ue);
    if (se.length <= 1) return 40;
    const z = [];
    for (let ae = 1; ae < se.length; ae++)
      z.push(se[ae] - se[ae - 1]);
    return z.sort((ae, ue) => ae - ue), (z[Math.floor(z.length / 2)] || 40) * i;
  }, [e.data, p, S, s, i, H]), { basePerBar: G } = O.useMemo(() => {
    if (I) {
      const se = re, z = Math.max(
        1,
        (se - l * (n - 1)) / n
      ), oe = e.barWidth ?? d;
      let ae = oe ? Math.min(oe, se) : z;
      if (c) {
        const ue = se * Math.min(1, Math.max(0.05, u)), de = Math.max(
          1,
          (ue - l * (n - 1)) / n
        );
        ae = oe ? Math.min(ae, de) : de;
      }
      return { basePerBar: ae };
    }
    const ee = e.barWidth ?? d, te = Math.max(
      1,
      (re - l * (n - 1)) / n
    );
    if (c) {
      const se = p && p.length ? p : [e], z = [];
      se.forEach(
        (be) => be.data.forEach((Se) => {
          const le = S(s(Se));
          Number.isFinite(le) && z.push(le);
        })
      ), z.sort((be, Se) => be - Se);
      const oe = [];
      for (let be = 1; be < z.length; be++)
        oe.push(z[be] - z[be - 1]);
      oe.sort((be, Se) => be - Se);
      const ue = (oe[Math.floor(oe.length / 2)] || re) * Math.min(1, Math.max(0.05, u)), de = Math.max(
        1,
        (ue - l * (n - 1)) / n
      );
      return { basePerBar: ee ? Math.min(ee, de) : de };
    }
    return ee ? { basePerBar: Math.min(ee, te) } : { basePerBar: te };
  }, [
    I,
    re,
    l,
    n,
    d,
    e.barWidth,
    c,
    u,
    p,
    S,
    s
  ]), R = O.useMemo(() => {
    if (I) return [];
    const ee = [];
    return (p && p.length ? p : [e]).forEach(
      (se) => se.data.forEach((z) => {
        const oe = S(s(z));
        Number.isFinite(oe) && ee.push(oe);
      })
    ), ee.sort((se, z) => se - z), Array.from(new Set(ee));
  }, [I, p, e, S, s]), K = O.useMemo(() => {
    if (I)
      return [];
    if (!R.length) return [];
    if (R.length === 1)
      return [
        { center: R[0], left: 0, right: b.innerWidth }
      ];
    const ee = [];
    for (let te = 0; te < R.length; te++) {
      const se = R[te], z = te === 0 ? 0 : (R[te - 1] + se) / 2, oe = te === R.length - 1 ? b.innerWidth : (se + R[te + 1]) / 2;
      ee.push({
        center: se,
        left: Math.max(0, z),
        right: Math.min(b.innerWidth, oe)
      });
    }
    return ee;
  }, [I, R, b.innerWidth]), U = O.useMemo(() => {
    if (I || !K.length)
      return;
    const ee = Math.min(1, Math.max(0.05, i)), te = K.map((ue) => Math.max(2, ue.right - ue.left)), se = te.map(
      (ue) => Math.max(2, Math.min(ue - 1, ue * ee))
    );
    let z = Math.min(...se);
    if (h)
      if (n <= 1) {
        const ue = Math.min(...te.map((de) => de - 1));
        ue >= h && z < h && (z = Math.min(ue, h));
      } else {
        const ue = Math.min(...te.map((we) => we - 1)), de = h * n + (n - 1) * (h * D);
        de <= ue && z < de && (z = de);
      }
    if (n <= 1)
      return h && z < h && te.every((de) => de >= h) ? { groupWidth: h, barWidth: h } : { groupWidth: z, barWidth: z };
    let oe = z / (n + (n - 1) * D);
    return oe < 1 && (oe = 1), h && oe < h && h * n + (n - 1) * (h * D) <= z && (oe = h), { groupWidth: oe * n + (n - 1) * (oe * D), barWidth: oe };
  }, [
    I,
    K,
    i,
    n,
    D,
    h
  ]), X = M && M[t] ? M[t] : void 0, Y = e.color || X || (a === "region" ? $n(e.id, t) : $t(t)), Q = a === "region" ? Br(e.id, t) : yn(t), ce = C && (e.color || X) ? Y : Q, ie = Number.isFinite(k(0)) ? k(0) : k.range()[0], ne = O.useId();
  return y && y.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: $ ? j : N,
      "aria-hidden": $ ? !0 : void 0,
      children: [
        T && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: ne,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: Y, stopOpacity: 0.3 }),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: Y,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: Y,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((ee, te) => {
          const se = s(ee), z = S(I ? ee.x : se);
          let oe, ae;
          if (I)
            oe = re, ae = z;
          else {
            const E = K.find(
              (F) => Math.abs(F.center - z) < 0.5
            );
            if (!E || !U)
              oe = G, ae = z - G / 2;
            else {
              const { groupWidth: F } = U;
              oe = F;
              let w = z - F / 2;
              w < E.left && (w = E.left), w + F > E.right && (w = Math.max(E.left, E.right - F)), ae = w;
            }
          }
          const ue = y[te], de = k(ue.y0), we = k(ue.y1), be = Math.min(de, we), Se = Math.abs(we - de) || 1;
          if (!I && h && oe < h) {
            const E = K.find(
              (F) => Math.abs(F.center - z) < 0.5
            );
            if (E) {
              const F = Math.max(2, E.right - E.left - 1), w = Math.min(F, h);
              w > oe && (oe = w, ae = Math.max(
                E.left,
                Math.min(E.right - oe, z - oe / 2)
              ));
            }
          }
          const le = !$ && A?.focused?.seriesId === e.id && A.focused.index === te, Z = () => {
            !A || $ || A.setFocused({
              seriesId: e.id,
              index: te,
              x: se,
              y: ue.y1 - ue.y0,
              clientX: ae + oe / 2,
              clientY: be
            });
          }, v = () => {
            A?.focused?.seriesId === e.id && A.focused.index === te && A.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: ae,
              y: be,
              width: oe,
              height: Se,
              fill: T ? `url(#${ne})` : Y,
              ...T ? {} : { fillOpacity: x },
              stroke: le ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : T && C ? Y : void 0,
              strokeWidth: le ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: $ || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${se instanceof Date ? se.toDateString() : se} value ${ue.y1 - ue.y0}`,
              onMouseEnter: Z,
              onFocus: Z,
              onMouseLeave: v,
              onBlur: v
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
      opacity: $ ? j : N,
      "aria-hidden": $ ? !0 : void 0,
      children: [
        T && /* @__PURE__ */ r.jsxs("defs", { children: [
          m === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: ne,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: Y, stopOpacity: 0.3 }),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: Y,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: Y,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          m === "category" && e.data.map((ee, te) => {
            const z = M && M[te] || (a === "region" ? $n(String(ee.x), te) : $t(te)), oe = `${ne}-${te}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: oe,
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
              oe
            );
          })
        ] }),
        e.data.map((ee, te) => {
          const se = s(ee), z = S(I ? ee.x : se);
          let oe, ae;
          if (I) {
            const W = re;
            if (n <= 1)
              ae = W, oe = z;
            else {
              ae = Math.max(
                1,
                W / (n + (n - 1) * D)
              );
              const V = ae * D, J = ae * n + V * (n - 1);
              oe = z + (W - J) / 2 + t * (ae + V);
            }
          } else {
            const W = K.find((V) => V.center === z);
            if (!W || !U)
              ae = G, oe = z - G / 2, h && ae < h && (ae = h, oe = z - ae / 2);
            else {
              const { barWidth: V } = U;
              ae = V;
              const J = n > 1 ? V * D : 0, q = ae * n + J * (n - 1);
              let he = z - q / 2;
              he < W.left && (he = W.left), he + q > W.right && (he = Math.max(W.left, W.right - q)), oe = he + t * (ae + J);
            }
            if (h && ae < h) {
              const V = K.find(
                (J) => Math.abs(J.center - z) < 0.5
              );
              if (V) {
                const J = Math.max(2, V.right - V.left - 1), q = Math.min(J, h);
                if (q > ae)
                  if (n <= 1)
                    ae = q, oe = Math.max(
                      V.left,
                      Math.min(V.right - ae, z - ae / 2)
                    );
                  else {
                    const he = q * D, pe = q * n + he * (n - 1);
                    if (pe <= V.right - V.left - 1) {
                      ae = q;
                      const ye = pe;
                      let _e = z - ye / 2;
                      _e < V.left && (_e = V.left), _e + ye > V.right && (_e = Math.max(
                        V.left,
                        V.right - ye
                      )), oe = _e + t * (ae + he);
                    }
                  }
              }
            }
          }
          const ue = oe + ae / 2, de = k(ee.y), we = Math.min(ie, de), be = Math.abs(ie - de), Se = !$ && A?.focused?.seriesId === e.id && A.focused.index === te, le = () => {
            !A || $ || A.setFocused({
              seriesId: e.id,
              index: te,
              x: se,
              y: ee.y,
              clientX: ue,
              clientY: de
            });
          }, Z = () => {
            A?.focused?.seriesId === e.id && A.focused.index === te && A.clear();
          }, v = m === "category" && M ? M[te] : void 0, E = m === "category" ? v || (a === "region" ? $n(String(ee.x), te) : $t(te)) : Y, F = m === "category" ? `${ne}-${te}` : ne, w = T && C ? E : m === "category" ? a === "region" ? Br(String(ee.x), te) : yn(te) : ce, P = Se ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : w || E;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: oe,
              y: we,
              width: ae,
              height: be || 1,
              fill: T ? `url(#${F})` : E,
              ...T ? {} : { fillOpacity: x },
              stroke: P,
              strokeWidth: Se ? 2 : 1,
              className: "fdp-bar",
              tabIndex: $ || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${se instanceof Date ? se.toDateString() : se} value ${ee.y}`,
              onMouseEnter: le,
              onFocus: le,
              onMouseLeave: Z,
              onBlur: Z
            },
            te
          );
        })
      ]
    }
  );
}, Gy = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: s = 0.05,
  children: o,
  yTickCount: i = 5
}) => {
  const l = ln(), d = t ?? l?.innerWidth ?? 0, c = n ?? l?.innerHeight ?? 0, u = O.useMemo(() => e.flatMap((h) => h.data), [e]), f = O.useMemo(() => {
    const h = /* @__PURE__ */ new Set();
    return u.forEach((T) => h.add(T.x)), Array.from(h);
  }, [u]), m = O.useMemo(
    () => Math.max(0, ...u.map((h) => h.y)),
    [u]
  ), p = O.useMemo(
    () => Bi().domain(f).range([0, d]).paddingInner(a).paddingOuter(s),
    [f, d, a, s]
  ), y = O.useMemo(
    () => Dr().domain([0, m]).nice().range([c, 0]),
    [m, c]
  ), g = O.useMemo(
    () => ({
      xScale: p,
      yScale: y,
      getXTicks: () => f,
      getYTicks: (h = i) => y.ticks(h)
    }),
    [p, y, f, i]
  );
  return /* @__PURE__ */ r.jsx(Zs.Provider, { value: g, children: o });
}, Vy = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: s,
  id: o,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const d = O.useId(), c = o || d, u = t ? `${c}-desc` : void 0, f = n ? `${c}-src` : void 0, m = typeof window < "u" && !l;
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      id: c,
      className: Pr("fdp-chart fdp-chart--noscript", s),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": Pr(u, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ r.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ r.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ r.jsx("p", { id: u, className: "fdp-chart__description", children: t }),
        !m && /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ r.jsx("noscript", { children: /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ r.jsx(Qt, { ...a }) }) }),
          /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ r.jsx(Qt, { ...a }) })
        ] }),
        n && /* @__PURE__ */ r.jsx("figcaption", { className: "fdp-chart__caption", children: n && /* @__PURE__ */ r.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          n
        ] }) })
      ]
    }
  );
}, Yy = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const s = O.useRef(null);
  return O.useEffect(() => {
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
      if (typeof window > "u") return;
      const l = window.setTimeout(i, n);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, n]), /* @__PURE__ */ r.jsx("div", { ref: s, children: a });
}, Cm = ({
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
  className: m,
  style: p,
  id: y,
  announceDelta: g = !0,
  visual: h
}) => {
  const T = O.useId(), C = y || T, N = `${C}-label`, j = `${C}-value`, x = `${C}-delta`, M = typeof t == "number" && !Number.isNaN(t), D = c ? "—" : u ? "" : M ? f ? f(t) : t.toLocaleString() : t;
  let _, b = "", S = "";
  if (a && !c && !u) {
    _ = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const k = Math.abs(a.value), L = _ === "up" ? `+${k}` : _ === "down" ? `-${k}` : "0", B = a.isPercent ? "%" : "";
    if (b = `${L}${B}`, a.ariaLabel)
      S = a.ariaLabel;
    else {
      const $ = a.invert ? _ === "down" : _ === "up";
      S = `${_ === "neutral" ? "no change" : _ === "up" ? "up" : "down"} ${k}${B}${_ === "neutral" ? "" : $ ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: Pr(
        "fdp-metric-card",
        o && `fdp-metric-card--${o}`,
        s && `fdp-metric-card--status-${s}`,
        c && "fdp-metric-card--loading",
        u && "fdp-metric-card--error",
        m
      ),
      style: p,
      role: "group",
      "aria-labelledby": N,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ r.jsx("h3", { id: N, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ r.jsx("div", { id: j, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : u ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: u }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: D }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !c && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: x,
              "aria-label": S,
              className: Pr(
                "fdp-metric-card__delta",
                _ && `fdp-metric-card__delta--${_}`
              ),
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-value", children: b }),
                a.period && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          d && d.length > 0 && !c && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        h && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: h }),
        g && a && !a.ariaLabel && !c && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: S })
      ] })
    }
  );
};
var mt = /* @__PURE__ */ ((e) => (e.Xs = "xs", e.Sm = "sm", e.Md = "md", e.Lg = "lg", e.Xl = "xl", e.Full = "full", e))(mt || {});
let cs = null;
try {
  cs = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const Ye = (e, t) => {
  if (!cs) return t;
  const n = e.split(".");
  let a = cs;
  for (const o of n) {
    if (a == null) break;
    a = a[o];
  }
  const s = a;
  return s == null ? t : typeof s == "string" || typeof s == "number" ? String(s) : s.$value != null ? String(s.$value) : s.value != null ? String(s.value) : t;
}, va = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: Ye("gradient.stop.start-opacity", "0.12"),
  mid: Ye("gradient.stop.mid-opacity", "0.03"),
  end: Ye("gradient.stop.end-opacity", "0"),
  triStart: Ye(
    "gradient.stop.triangle-start-opacity",
    Ye("gradient.stop.start-opacity", "0.12")
  ),
  triMid: Ye(
    "gradient.stop.triangle-mid-opacity",
    Ye("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: Ye(
    "gradient.stop.triangle-end-opacity",
    Ye("gradient.stop.end-opacity", "0")
  )
});
var Al = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Al || {}), sn = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(sn || {}), Oe = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(Oe || {});
const Js = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
Js.reduce(
  (e, t, n) => (e[t] = n + 1, e),
  {}
);
const Nm = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, jm = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, El = Js.reduce(
  (e, t, n) => (e[t] = {
    id: t,
    rank: n + 1,
    label: Nm[t],
    category: jm[t],
    participatesInRanking: !0
  }, e),
  {}
);
Js.map(
  (e) => El[e]
);
var ar = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(ar || {}), on = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(on || {}), Pl = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(Pl || {});
const An = {
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
function wa(e) {
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
function Sa(e) {
  switch (e) {
    case Oe.Improvement:
      return "Improvement signal";
    case Oe.Concern:
      return "Concern signal";
    case Oe.Neither:
      return "Common cause variation";
    case Oe.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function Fl(e) {
  switch (e) {
    case on.Pass:
      return "Target met";
    case on.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Mm(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((n - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const Nt = {
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
function Rl(e) {
  return e ? Nt[e]?.token ?? Nt.neither.token : Nt.neither.token;
}
function Im(e) {
  return e ? Nt[e]?.hex ?? Nt.neither.hex : Nt.neither.hex;
}
var hn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(hn || {});
const Dm = {
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
var ot = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(ot || {}), Me = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Me || {}), vt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(vt || {}), Ce = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Ce || {});
const Lm = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, s = parseInt(t.slice(4, 6), 16) / 255, o = [n, a, s].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2] < 0.55 ? "#ffffff" : "#212b32";
}, _a = {
  special_cause_deteriorating: {
    hex: Nt.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: Nt.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: Nt.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: Nt.suppressed.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(_a).forEach((e) => {
  e.text || (e.text = Lm(e.hex));
});
const Bl = (e) => _a[e], qs = (e) => _a[e].judgement || "none", ai = {
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
function $m(e, t) {
  let n;
  return e === "common_cause" ? n = ai.common : n = ai.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
var St = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(St || {}), Ae = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Ae || {}), ke = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(ke || {}), Qe = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(Qe || {}), mn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(mn || {}), Dt = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(Dt || {}), En = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(En || {}), In = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(In || {}), ht = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(ht || {}), Pt = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(Pt || {}), Tt = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Tt || {}), Hr = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Hr || {}), zr = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(zr || {});
const rn = {
  [Qe.SinglePoint]: 1,
  [Qe.TwoSigma]: 2,
  [Qe.Shift]: 3,
  [Qe.Trend]: 4
}, si = 3.267, Am = 2.66, oi = 0.2777;
function je(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function Dn(e) {
  return e.reduce((t, n) => t + n, 0) / (e.length || 1);
}
function ii(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (!(t[s] || !je(o))) {
      if (a !== null) {
        const i = e[a];
        je(i) && (n[s] = Math.abs(o - i));
      }
      a = s;
    }
  }
  return n;
}
function li(e, t) {
  const n = e.filter(je);
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = n.slice();
  if (t) {
    const o = Dn(a), i = si * o;
    a = a.filter((l) => l <= i);
  }
  const s = Dn(a);
  return { mrMean: s, mrUcl: si * s };
}
function ci(e, t) {
  if (!je(e) || !je(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = Am * t, a = 2 / 3 * n, s = 1 / 3 * n;
  return {
    upperProcessLimit: e + n,
    lowerProcessLimit: e - n,
    upperTwoSigma: e + a,
    lowerTwoSigma: e - a,
    upperOneSigma: e + s,
    lowerOneSigma: e - s
  };
}
function Em(e, t, n, a) {
  if (e === St.T) {
    const f = t.map((_) => je(_) && _ > 0 ? Math.pow(_, oi) : null), m = ii(f, n), p = li(m, a), y = f.filter((_, b) => !n[b] && je(_)), g = y.length ? Dn(y) : NaN, h = ci(g, p.mrMean), T = (_) => je(_) && _ > 0 ? Math.pow(_, 1 / oi) : null, C = je(h.upperProcessLimit) ? T(h.upperProcessLimit) : null, N = je(h.lowerProcessLimit) && h.lowerProcessLimit > 0 ? T(h.lowerProcessLimit) : null, j = je(h.upperTwoSigma) ? T(h.upperTwoSigma) : null, x = je(h.lowerTwoSigma) && h.lowerTwoSigma > 0 ? T(h.lowerTwoSigma) : null, M = je(h.upperOneSigma) ? T(h.upperOneSigma) : null, D = je(h.lowerOneSigma) && h.lowerOneSigma > 0 ? T(h.lowerOneSigma) : null;
    return {
      mean: je(g) && g > 0 ? T(g) : null,
      mr: m,
      mrMean: p.mrMean,
      mrUcl: p.mrUcl,
      upperProcessLimit: C,
      lowerProcessLimit: N,
      upperTwoSigma: j,
      lowerTwoSigma: x,
      upperOneSigma: M,
      lowerOneSigma: D
    };
  }
  if (e === St.G) {
    const f = t.filter((k, L) => !n[L] && je(k)), m = f.length ? Dn(f) : NaN, p = je(m) ? 1 / (m + 1) : NaN, y = (k) => {
      if (!je(p) || p <= 0 || p >= 1) return NaN;
      const L = Math.ceil(Math.log(1 - k) / Math.log(1 - p)) - 1;
      return Math.max(0, L);
    }, g = 135e-5, h = 1 - 135e-5, T = 0.02275, C = 1 - 0.02275, N = 0.158655, j = 1 - 0.158655, x = y(h), M = y(g), D = y(C), _ = y(T), b = y(j), S = y(N);
    return {
      mean: je(m) ? m : null,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: je(x) ? x : null,
      lowerProcessLimit: je(M) ? M : null,
      upperTwoSigma: je(D) ? D : null,
      lowerTwoSigma: je(_) ? _ : null,
      upperOneSigma: je(b) ? b : null,
      lowerOneSigma: je(S) ? S : null
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
  const s = ii(t, n), o = s.filter(je), i = o.length ? Dn(o) : NaN, l = je(i) ? 3.267 * i : NaN;
  let d = NaN;
  {
    const f = t.reduce((m, p, y) => {
      if (n[y] || !je(p)) return m;
      if (!a)
        return m.push(p), m;
      const g = s[y];
      return (g === null || !je(l) || je(g) && g <= l) && m.push(p), m;
    }, []);
    d = f.length ? Dn(f) : NaN;
  }
  const c = li(s, a), u = ci(d, c.mrMean);
  return {
    mean: d,
    mr: s,
    mrMean: c.mrMean,
    mrUcl: c.mrUcl,
    ...u
  };
}
function Pm(e, t) {
  const n = e.map((d, c) => c).filter((d) => !e[d].ghost && je(e[d].value)), a = (d) => e[d], s = t.shiftPoints, o = t.trendPoints;
  let i = [], l = [];
  for (const d of n) {
    const c = a(d);
    if (!je(c.mean) || !je(c.value) ? (i = [], l = []) : c.value > c.mean ? (i.push(d), l = []) : c.value < c.mean ? (l.push(d), i = []) : (i = [], l = []), i.length >= s)
      for (const u of i) a(u).shiftUp = !0;
    if (l.length >= s)
      for (const u of l) a(u).shiftDown = !0;
  }
  for (let d = 0; d <= n.length - 3; d++) {
    const u = n.slice(d, d + 3).map(a);
    if (!u.every((j) => je(j.value) && je(j.mean)))
      continue;
    const f = u[0].mean, m = u.every((j) => j.value > f), p = u.every((j) => j.value < f);
    if (!m && !p)
      continue;
    const y = u[0].upperTwoSigma ?? 1 / 0, g = u[0].lowerTwoSigma ?? -1 / 0, h = u[0].upperProcessLimit ?? 1 / 0, T = u[0].lowerProcessLimit ?? -1 / 0, C = u.filter((j) => t.twoSigmaIncludeAboveThree ? j.value > y : j.value > y && j.value <= h), N = u.filter((j) => t.twoSigmaIncludeAboveThree ? j.value < g : j.value < g && j.value >= T);
    m && C.length >= 2 && C.forEach((j) => j.twoSigmaUp = !0), p && N.length >= 2 && N.forEach((j) => j.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let d = 0; d <= n.length - 5; d++) {
      const u = n.slice(d, d + 5).map(a);
      if (!u.every((C) => je(C.value) && je(C.mean)))
        continue;
      const f = u[0].mean, m = u.every((C) => C.value > f), p = u.every((C) => C.value < f);
      if (!m && !p)
        continue;
      const y = u[0].upperOneSigma ?? 1 / 0, g = u[0].lowerOneSigma ?? -1 / 0, h = u.filter((C) => C.value > y), T = u.filter((C) => C.value < g);
      m && h.length >= 4 && h.forEach((C) => C.fourOfFiveUp = !0), p && T.length >= 4 && T.forEach((C) => C.fourOfFiveDown = !0);
    }
  for (let d = 0; d <= n.length - o; d++) {
    const c = n.slice(d, d + o), u = c.map(a);
    if (!u.every((p) => je(p.value)))
      continue;
    let f = !0, m = !0;
    for (let p = 1; p < u.length && (u[p].value > u[p - 1].value || (f = !1), u[p].value < u[p - 1].value || (m = !1), !(!f && !m)); p++)
      ;
    f && c.forEach((p) => a(p).trendUp = !0), m && c.forEach((p) => a(p).trendDown = !0);
  }
}
function Hl(e) {
  const t = [], n = [];
  e.singlePointUp && t.push({
    id: Qe.SinglePoint,
    rank: rn[Qe.SinglePoint]
  }), e.singlePointDown && n.push({
    id: Qe.SinglePoint,
    rank: rn[Qe.SinglePoint]
  }), e.twoSigmaUp && t.push({
    id: Qe.TwoSigma,
    rank: rn[Qe.TwoSigma]
  }), e.twoSigmaDown && n.push({
    id: Qe.TwoSigma,
    rank: rn[Qe.TwoSigma]
  }), e.shiftUp && t.push({ id: Qe.Shift, rank: rn[Qe.Shift] }), e.shiftDown && n.push({ id: Qe.Shift, rank: rn[Qe.Shift] }), e.trendUp && t.push({ id: Qe.Trend, rank: rn[Qe.Trend] }), e.trendDown && n.push({ id: Qe.Trend, rank: rn[Qe.Trend] });
  const a = t.reduce((i, l) => Math.max(i, l.rank), 0), s = n.reduce((i, l) => Math.max(i, l.rank), 0), o = a > s ? mn.Upwards : s > a ? mn.Downwards : mn.Same;
  return { up: t, dn: n, upMax: a, dnMax: s, primeDirection: o };
}
function di(e, t) {
  const n = t === Ae.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === Ae.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, a = t === Ae.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === Ae.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: n, opposite: a };
}
function ui(e, t, n, a = !1, s, o, i = !1) {
  const { up: l, dn: d, upMax: c, dnMax: u, primeDirection: f } = Hl(e);
  e.primeDirection = f;
  const m = e.specialCauseImprovementValue, p = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && Fm({ row: e, metric: t, metricConflictRule: n, preferImprovementWhenConflict: a, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: s, ruleHierarchy: o }), t === Ae.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? ke.ImprovementHigh : e.specialCauseConcernValue !== null ? ke.ConcernLow : ke.CommonCause : t === Ae.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? ke.ImprovementLow : e.specialCauseConcernValue !== null ? ke.ConcernHigh : ke.CommonCause : e.variationIcon = ke.CommonCause;
  const y = e.specialCauseImprovementValue !== null ? Dt.Up : e.specialCauseConcernValue !== null ? Dt.Down : void 0, g = y === Dt.Up ? c : y === Dt.Down ? u : Math.max(c, u);
  e.primeRank = g || void 0;
  const h = y === Dt.Up ? l.find((T) => T.rank === g) : y === Dt.Down ? d.find((T) => T.rank === g) : void 0;
  return e.primeRuleId = h?.id, { originalImprovement: m, originalConcern: p };
}
function Fm(e) {
  const {
    row: t,
    metric: n,
    metricConflictRule: a,
    preferImprovementWhenConflict: s,
    preferTrendWhenConflict: o,
    primeDirection: i = t.primeDirection ?? mn.Same,
    conflictStrategy: l,
    ruleHierarchy: d
  } = e;
  if (o && t.specialCauseImprovementValue !== null && t.specialCauseConcernValue !== null) {
    const u = !!t.trendUp, f = !!t.trendDown;
    if (n === Ae.Up) {
      if (u && !f) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!u && f) {
        t.specialCauseImprovementValue = null;
        return;
      }
    } else if (n === Ae.Down) {
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
  const c = s ? In.PreferImprovement : l ?? In.SqlPrimeThenRule;
  if (c === In.PreferImprovement) {
    n === Ae.Up ? t.specialCauseConcernValue = null : n === Ae.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (c === In.RuleHierarchy) {
    const u = d ?? [Qe.Trend, Qe.Shift, Qe.TwoSigma, Qe.SinglePoint], { up: f, dn: m } = Hl(t);
    for (const p of u) {
      const y = f.some((h) => h.id === p), g = m.some((h) => h.id === p);
      if (y && !g) {
        n === Ae.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (g && !y) {
        n === Ae.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (y && g) {
        (n === Ae.Up || n === Ae.Down) && (a === En.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === mn.Upwards ? n === Ae.Up ? t.specialCauseConcernValue = null : n === Ae.Down && (t.specialCauseImprovementValue = null) : i === mn.Downwards ? n === Ae.Up ? t.specialCauseImprovementValue = null : n === Ae.Down && (t.specialCauseConcernValue = null) : a === En.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
var ds = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(ds || {});
function Rm(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Bm(e) {
  const t = Rm(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function fi(e) {
  const t = [], n = (i, l, d) => ({
    segStart: i,
    segSide: l,
    minV: d,
    maxV: d,
    maxAbsDelta: 0
    // caller sets initial delta immediately after
  }), a = (i, l, d, c, u) => ({
    minV: Math.min(d, i),
    maxV: Math.max(c, i),
    maxAbsDelta: Math.max(u, l)
  }), s = (i, l, d, c, u, f, m, p) => {
    i.push({
      trendDirection: p,
      start: l,
      end: d,
      side: c,
      minValue: u,
      maxValue: f,
      maxAbsDeltaFromMean: m
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
    let d = o, c = o;
    for (; c < e.length; c++) {
      const T = e[c];
      if (!T || T.value == null || T.ghost || !(l === "Up" ? T.trendUp : T.trendDown)) break;
    }
    const u = c - 1, f = [];
    let m, p, y = 1 / 0, g = -1 / 0, h = 0;
    for (let T = d; T <= u; T++) {
      const C = e[T];
      if (C.value == null) continue;
      const N = C.value - (C.mean ?? 0), j = Bm(N);
      if (!j) {
        m !== void 0 && (s(f, m, T - 1, p, y, g, h, l), m = void 0, p = void 0, y = 1 / 0, g = -1 / 0, h = 0);
        continue;
      }
      if (m === void 0)
        ({ segStart: m, segSide: p, minV: y, maxV: g, maxAbsDelta: h } = (() => {
          const x = n(T, j, C.value);
          return {
            segStart: x.segStart,
            segSide: x.segSide,
            minV: x.minV,
            maxV: x.maxV,
            maxAbsDelta: Math.abs(N)
          };
        })());
      else if (j !== p)
        s(f, m, T - 1, p, y, g, h, l), { segStart: m, segSide: p, minV: y, maxV: g, maxAbsDelta: h } = (() => {
          const x = n(T, j, C.value);
          return {
            segStart: x.segStart,
            segSide: x.segSide,
            minV: x.minV,
            maxV: x.maxV,
            maxAbsDelta: Math.abs(N)
          };
        })();
      else {
        const x = a(C.value, Math.abs(N), y, g, h);
        y = x.minV, g = x.maxV, h = x.maxAbsDelta;
      }
    }
    m !== void 0 && s(f, m, u, p, y, g, h, l), t.push({ trendDirection: l, start: d, end: u, segments: f }), o = u + 1;
  }
  return t;
}
function Hm(e) {
  if (e === Ae.Up) return "Above";
  if (e === Ae.Down) return "Below";
}
function zm(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function pi(e, t) {
  const n = t.strategy ?? ht.CrossingAfterFavourable, a = Hm(t.metricImprovement), s = zm(a), o = [];
  for (const i of e) {
    if (!a) {
      if (n === ht.ExtremeFavourable || n === ht.CrossingAfterFavourable) {
        const l = i.segments;
        if (l.length === 0) continue;
        let d = l[0];
        for (const c of l)
          c.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean && (d = c);
        o.push(d);
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
      let d;
      for (let c = 0; c < l.length; c++) {
        const u = l[c];
        if (u.side === a && c > 0 && l[c - 1].side !== a) {
          d = u;
          break;
        }
      }
      if (!d) {
        const c = l.filter((u) => u.side === a);
        c.length > 0 && (d = c.reduce(
          (u, f) => f.end - f.start > u.end - u.start ? f : u,
          c[0]
        ));
      }
      d && o.push(d);
      continue;
    }
    if (n === ht.CrossingAfterUnfavourable) {
      const l = i.segments;
      let d;
      for (let c = 0; c < l.length; c++) {
        const u = l[c];
        if (u.side === s && c > 0 && l[c - 1].side !== s) {
          d = u;
          break;
        }
      }
      if (!d) {
        const c = l.filter((u) => u.side === s);
        c.length > 0 && (d = c.reduce(
          (u, f) => f.end - f.start > u.end - u.start ? f : u,
          c[0]
        ));
      }
      d && o.push(d);
      continue;
    }
    if (n === ht.ExtremeFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      const d = l.reduce(
        (c, u) => u.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean ? u : c
      );
      o.push(d);
      continue;
    }
    if (n === ht.ExtremeUnfavourable) {
      const l = i.segments.filter((c) => c.side === s);
      if (l.length === 0) continue;
      const d = l.reduce((c, u) => u.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean ? u : c);
      o.push(d);
      continue;
    }
    if (n === ht.FirstFavourable) {
      const l = i.segments.find((d) => d.side === a);
      l && o.push(l);
      continue;
    }
    if (n === ht.FirstUnfavourable) {
      const l = i.segments.find((d) => d.side === s);
      l && o.push(l);
      continue;
    }
    if (n === ht.LongestFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      const d = l.reduce(
        (c, u) => u.end - u.start > c.end - c.start ? u : c
      );
      o.push(d);
      continue;
    }
    if (n === ht.LongestUnfavourable) {
      const l = i.segments.filter((c) => c.side === s);
      if (l.length === 0) continue;
      const d = l.reduce((c, u) => u.end - u.start > c.end - c.start ? u : c);
      o.push(d);
      continue;
    }
    if (n === ht.LastFavourable) {
      const l = i.segments.filter((d) => d.side === a);
      if (l.length === 0) continue;
      o.push(l[l.length - 1]);
      continue;
    }
    if (n === ht.LastUnfavourable) {
      const l = i.segments.filter((d) => d.side === s);
      if (l.length === 0) continue;
      o.push(l[l.length - 1]);
      continue;
    }
  }
  return o;
}
var We = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(We || {}), Bn = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(Bn || {});
function Om(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), n = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: n };
}
function dr(e, t) {
  const n = t.metricImprovement, a = t.trendVisualMode ?? "Ungated", s = t.enableNeutralNoJudgement ?? !0;
  return e.map((o) => {
    if (!o || o.value == null || o.ghost) return "Common";
    const { upAny: i, downAny: l } = Om(o);
    if (i && l) return "Improvement";
    switch (o.variationIcon) {
      case ke.ImprovementHigh:
      case ke.ImprovementLow:
        return "Improvement";
      case ke.ConcernHigh:
      case ke.ConcernLow:
        return "Concern";
      case ke.NeitherHigh:
      case ke.NeitherLow: {
        if (a === "Ungated" && n !== Ae.Neither) {
          if (i && !l)
            return n === Ae.Up ? "Improvement" : "Concern";
          if (l && !i)
            return n === Ae.Down ? "Improvement" : "Concern";
        }
        return s ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function Um(e, t, n) {
  const a = n?.mode ?? "Disabled";
  if (!e.length) return [];
  let s = dr(e, {
    metricImprovement: t,
    trendVisualMode: Bn.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (a !== "RecalcCrossing" || t === Ae.Neither) return s;
  const o = Math.max(0, n?.preWindow ?? 2), i = Math.max(0, n?.postWindow ?? 3), l = n?.prePolarity ?? "Opposite", d = (f, m) => {
    if (f < 0 || f >= s.length) return;
    const p = s[f];
    (p === We.Common || p === We.NoJudgement) && (s[f] = m);
  }, c = (f) => {
    if (f == null) return null;
    const m = e.reduce((y, g) => (g.partitionId === f && typeof g.value == "number" && !g.ghost && y.push(g.value), y), []);
    return m.length ? m.reduce((y, g) => y + g, 0) / m.length : null;
  }, u = Array.isArray(n?.boundaryIndices) && n.boundaryIndices.length ? n.boundaryIndices.slice().filter((f) => Number.isFinite(f)) : e.reduce((f, m, p) => {
    if (p === 0) return f;
    const y = e[p - 1];
    return y && m && m.partitionId !== y.partitionId && f.push(p), f;
  }, []);
  for (const f of u) {
    const m = e[f - 1], p = e[f];
    if (!m || !p)
      continue;
    let y = f - 1;
    for (; y - 1 >= 0 && e[y - 1] && e[y - 1].partitionId === m.partitionId; )
      y--;
    let g = f;
    for (; g + 1 < e.length && e[g + 1] && e[g + 1].partitionId === p.partitionId; )
      g++;
    let h = null;
    for (let M = f - 1; M >= 0; M--) {
      const D = e[M];
      if (D.partitionId !== m.partitionId) break;
      if (typeof D.mean == "number") {
        h = D.mean;
        break;
      }
    }
    let T = null;
    for (let M = f; M < e.length; M++) {
      const D = e[M];
      if (D.partitionId !== p.partitionId) break;
      if (typeof D.mean == "number") {
        T = D.mean;
        break;
      }
    }
    if (h == null && (h = c(m.partitionId ?? null)), T == null && (T = c(p.partitionId ?? null)), h == null || T == null)
      continue;
    const C = T - h, N = t === Ae.Up ? C > 0 : C < 0, j = N ? We.Improvement : We.Concern, x = l === "Same" ? j : N ? We.Concern : We.Improvement;
    for (let M = 1; M <= o; M++) {
      const D = f - M;
      if (D < y) break;
      d(D, x);
    }
    for (let M = 0; M < i; M++) {
      const D = f + M;
      if (D > g) break;
      d(D, j);
    }
  }
  return s;
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
function ur(e) {
  const { chartType: t, metricImprovement: n, data: a } = e, s = zl(e.settings), o = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: !1,
    metricConflictRule: En.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    enableFourOfFiveRule: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: In.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: Pt.Off,
    trendSegmentationStrategy: ht.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...s
  }, i = s?.trendSegmentationMode || (s?.trendFavourableSegmentation === !0 ? Pt.Always : s?.trendFavourableSegmentation === !1 ? Pt.Off : o.trendSegmentationMode), l = a.map((g, h) => ({
    rowId: h + 1,
    x: g.x,
    value: je(g.value) ? g.value : null,
    ghost: !!g.ghost,
    baseline: !!g.baseline,
    target: je(g.target) ? g.target : null
  })), d = [];
  let c = [];
  for (const g of l)
    g.baseline && c.length && (d.push(c), c = []), c.push(g);
  c.length && d.push(c);
  const u = [], f = (o.trendFavourableSegmentation || i !== Pt.Off) && !o.preferImprovementWhenConflict, m = l.filter((g) => !g.ghost && je(g.value)).length, p = !!o.chartLevelEligibility && m >= o.minimumPoints;
  let y = 0;
  for (const g of d) {
    y++;
    const h = g.map((x) => x.value), T = g.map((x) => x.ghost), C = Em(
      t,
      h,
      T,
      !!o.excludeMovingRangeOutliers
    ), N = g.map((x, M) => {
      const D = !x.ghost && je(x.value) ? h.slice(0, M + 1).filter((b, S) => !T[S] && je(b)).length : 0, _ = p ? !0 : D >= o.minimumPoints;
      return {
        rowId: x.rowId,
        x: x.x,
        value: je(x.value) ? x.value : null,
        ghost: x.ghost,
        partitionId: y,
        pointRank: D,
        mean: (_ || p) && je(C.mean) ? C.mean : null,
        upperProcessLimit: _ || p ? C.upperProcessLimit : null,
        lowerProcessLimit: _ || p ? C.lowerProcessLimit : null,
        upperTwoSigma: _ || p ? C.upperTwoSigma : null,
        lowerTwoSigma: _ || p ? C.lowerTwoSigma : null,
        upperOneSigma: _ || p ? C.upperOneSigma : null,
        lowerOneSigma: _ || p ? C.lowerOneSigma : null,
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
        variationIcon: ke.CommonCause
      };
    });
    for (const x of N)
      x.ghost || !je(x.value) || x.mean === null || (je(x.upperProcessLimit) && x.value > x.upperProcessLimit && (x.singlePointUp = !0), je(x.lowerProcessLimit) && x.value < x.lowerProcessLimit && (x.singlePointDown = !0));
    Pm(N, {
      shiftPoints: o.shiftPoints,
      trendPoints: o.trendPoints,
      twoSigmaIncludeAboveThree: !!o.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!o.enableFourOfFiveRule
    }), f && ((x) => {
      const M = x.some(
        (k) => (k.singlePointUp || k.twoSigmaUp || k.shiftUp || k.trendUp) && (k.singlePointDown || k.twoSigmaDown || k.shiftDown || k.trendDown)
      );
      if (i === Pt.Off || i === Pt.AutoWhenConflict && !M)
        return;
      const D = fi(x), _ = pi(D, {
        metricImprovement: n,
        strategy: o.trendSegmentationStrategy
      }), b = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Set();
      for (const k of _)
        for (let L = k.start; L <= k.end; L++)
          k.trendDirection === ds.Up ? b.add(L) : S.add(L);
      x.forEach((k, L) => {
        k.trendUp = b.has(L) ? k.trendUp : !1, k.trendDown = S.has(L) ? k.trendDown : !1, o.trendDominatesHighlightedWindow && (b.has(L) ? (k.singlePointDown = !1, k.twoSigmaDown = !1, k.shiftDown = !1) : S.has(L) && (k.singlePointUp = !1, k.twoSigmaUp = !1, k.shiftUp = !1));
      });
    })(N);
    for (const x of N) {
      if (x.ghost || !je(x.value) || x.mean === null) {
        u.push(x);
        continue;
      }
      const { aligned: M, opposite: D } = di(
        x,
        n
      );
      if (x.specialCauseImprovementValue = M ? x.value : null, x.specialCauseConcernValue = D ? x.value : null, n === Ae.Neither) {
        const _ = x.singlePointUp || x.twoSigmaUp || x.shiftUp || x.trendUp, b = x.singlePointDown || x.twoSigmaDown || x.shiftDown || x.trendDown;
        x.variationIcon = _ ? ke.NeitherHigh : b ? ke.NeitherLow : ke.CommonCause;
      } else
        ui(x, n, o.metricConflictRule, o.preferImprovementWhenConflict === !0, o.conflictStrategy, o.ruleHierarchy, o.preferTrendWhenConflict === !0);
      u.push(x);
    }
  }
  if (o.trendAcrossPartitions) {
    const g = u.map((h, T) => ({ idx: T, r: h })).filter(({ r: h }) => !h.ghost && je(h.value));
    if (g.length >= o.trendPoints)
      for (let h = 0; h <= g.length - o.trendPoints; h++) {
        const T = g.slice(h, h + o.trendPoints).map((x) => x.idx), C = T.map((x) => u[x]);
        if (!C.every((x) => je(x.value))) continue;
        let N = !0, j = !0;
        for (let x = 1; x < C.length && (C[x].value > C[x - 1].value || (N = !1), C[x].value < C[x - 1].value || (j = !1), !(!N && !j)); x++)
          ;
        N && T.forEach((x) => u[x].trendUp = !0), j && T.forEach((x) => u[x].trendDown = !0);
      }
  }
  if (o.trendAcrossPartitions) {
    if (f) {
      const g = u.some(
        (h) => (h.singlePointUp || h.twoSigmaUp || h.shiftUp || h.trendUp) && (h.singlePointDown || h.twoSigmaDown || h.shiftDown || h.trendDown)
      );
      if (i === Pt.Always || i === Pt.AutoWhenConflict && g) {
        const h = fi(u), T = pi(h, { metricImprovement: n, strategy: o.trendSegmentationStrategy }), C = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set();
        for (const j of T)
          for (let x = j.start; x <= j.end; x++)
            j.trendDirection === ds.Up ? C.add(x) : N.add(x);
        u.forEach((j, x) => {
          j.trendUp = C.has(x) ? j.trendUp : !1, j.trendDown = N.has(x) ? j.trendDown : !1, o.trendDominatesHighlightedWindow && (C.has(x) ? (j.singlePointDown = !1, j.twoSigmaDown = !1, j.shiftDown = !1) : N.has(x) && (j.singlePointUp = !1, j.twoSigmaUp = !1, j.shiftUp = !1));
        });
      }
    }
    for (const g of u) {
      if (g.ghost || !je(g.value) || g.mean === null || n === Ae.Neither) continue;
      const { aligned: h, opposite: T } = di(g, n);
      g.specialCauseImprovementValue = h ? g.value : null, g.specialCauseConcernValue = T ? g.value : null, ui(g, n, o.metricConflictRule, o.preferImprovementWhenConflict === !0, o.conflictStrategy, o.ruleHierarchy, o.preferTrendWhenConflict === !0);
    }
  }
  return { rows: u };
}
function Xs(e, t) {
  const n = ur(e), a = dr(n.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? Bn.Ungated,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), s = t?.boundaryWindows;
  if (!s || s.mode !== "RecalcCrossing") return { rows: n.rows, visuals: a };
  const o = s.directionOverride ?? e.metricImprovement, i = Um(n.rows, o, s), l = a.map((d, c) => {
    const u = i[c];
    if (d === We.Common || d === We.NoJudgement) {
      if (u === We.Improvement) return We.Improvement;
      if (u === We.Concern) return We.Concern;
    }
    return d;
  });
  return { rows: n.rows, visuals: l };
}
var Ol = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(Ol || {});
function Wm(e, t, n) {
  const a = n?.trendVisualMode ?? Bn.Ungated, s = n?.enableNeutralNoJudgement ?? !0, o = Array.isArray(e.data) ? e.data.map((f, m) => f?.baseline ? m : -1).filter((f) => f >= 0) : [];
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
  const { rows: l, visuals: d } = Xs(e, {
    trendVisualMode: a,
    enableNeutralNoJudgement: s,
    boundaryWindows: i
  });
  let c = d.slice(), u = o.length ? o[0] : -1;
  if (u < 0) {
    for (let f = 1; f < l.length; f++)
      if (l[f].partitionId !== l[f - 1].partitionId) {
        u = f;
        break;
      }
  }
  return (t === "recalculations-recalculated" || t === "baselines-recalculated") && u > 0 && (c[u - 1] = We.Common), { rows: l, visuals: c };
}
const Ul = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: !1,
  metricConflictRule: En.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function Gm(e) {
  return { ...Ul, ...e ?? {} };
}
var lt = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(lt || {}), gn = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(gn || {}), sr = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(sr || {});
const Wl = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === Ae.Up ? ot.HigherIsBetter : i.improvementDirection === Ae.Down ? ot.LowerIsBetter : ot.ContextDependent : i.polarity && (l = i.polarity);
    let d;
    const c = i.variationIcon;
    if (c === Oe.Improvement || c === Oe.Concern || c === Oe.Neither || c === Oe.Suppressed)
      c === Oe.Improvement ? d = Ce.SpecialCauseImproving : c === Oe.Concern ? d = Ce.SpecialCauseDeteriorating : c === Oe.Neither ? d = Ce.CommonCause : d = Ce.SpecialCauseNoJudgement;
    else
      switch (i.variationIcon) {
        case ke.ImprovementHigh:
        case ke.ImprovementLow:
          d = Ce.SpecialCauseImproving;
          break;
        case ke.ConcernHigh:
        case ke.ConcernLow:
          d = Ce.SpecialCauseDeteriorating;
          break;
        case ke.NeitherHigh:
        case ke.NeitherLow:
          d = i.specialCauseNeutral ? Ce.SpecialCauseNoJudgement : Ce.CommonCause;
          break;
        case ke.CommonCause:
          d = Ce.CommonCause;
          break;
        default:
          d = Ce.SpecialCauseNoJudgement;
          break;
      }
    let u = i.trend;
    return u || (d === Ce.SpecialCauseImproving ? u = l === ot.LowerIsBetter ? Me.Lower : Me.Higher : d === Ce.SpecialCauseDeteriorating ? u = l === ot.LowerIsBetter ? Me.Higher : Me.Lower : d === Ce.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? u = Me.Higher : i.lowSideSignal && !i.highSideSignal ? u = Me.Lower : u = Me.Higher : u = Me.Higher), { state: d, direction: u, polarity: l ?? ot.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Ce.SpecialCauseImproving || i.state === Ce.SpecialCauseDeteriorating) && i.polarity && (i.state === Ce.SpecialCauseImproving ? l = i.polarity === ot.LowerIsBetter ? Me.Lower : Me.Higher : l = i.polarity === ot.LowerIsBetter ? Me.Higher : Me.Lower), l || (i.state === Ce.SpecialCauseImproving ? l = Me.Higher : i.state === Ce.SpecialCauseDeteriorating ? l = Me.Lower : l = Me.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? ot.ContextDependent
    };
  }
  const n = e;
  t();
  const s = {
    [vt.Improving]: Ce.SpecialCauseImproving,
    [vt.Deteriorating]: Ce.SpecialCauseDeteriorating,
    [vt.No_Judgement]: Ce.SpecialCauseNoJudgement,
    [vt.None]: Ce.CommonCause
  }[n.judgement];
  let o;
  return n.judgement === vt.Improving ? o = n.polarity === ot.LowerIsBetter ? Me.Lower : Me.Higher : n.judgement === vt.Deteriorating ? o = n.polarity === ot.LowerIsBetter ? Me.Higher : Me.Lower : o = n.trend ?? Me.Higher, { state: s, direction: o, polarity: n.polarity };
};
function Gl(e, t) {
  const { state: n, direction: a, polarity: s } = Wl(e), o = qs(n), i = a === Me.Higher ? "above" : "below", l = a === Me.Higher ? "upwards" : "downwards", d = (() => {
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
        case vt.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case vt.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case vt.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case vt.None:
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
const Va = (e, t, n, a, s, o) => /* @__PURE__ */ r.jsxs("defs", { children: [
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
] }), Qs = ({
  data: e,
  size: t = 44,
  ariaLabel: n,
  showLetter: a = !0,
  dropShadow: s = !0,
  gradientWash: o = !1,
  variant: i = gn.Classic,
  runLength: l = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: d = sr.Polarity,
  letterOverride: c,
  ...u
}) => {
  const f = Sr(), m = Sr(), {
    start: p,
    mid: y,
    end: g,
    triStart: h,
    triMid: T,
    triEnd: C
  } = va(), { state: N, direction: j, polarity: x } = De(
    () => Wl(e),
    [e]
  ), M = De(() => Bl(N), [N]), D = De(() => qs(N), [N]), _ = D === vt.Improving || D === vt.Deteriorating;
  let b = "";
  a && _ && (d === sr.Polarity ? x === ot.HigherIsBetter ? b = "H" : x === ot.LowerIsBetter ? b = "L" : b = "" : b = j === Me.Higher ? "H" : "L"), c !== void 0 && (b = c);
  const S = N !== Ce.CommonCause, k = N === Ce.SpecialCauseNoJudgement, L = Ye("common-cause", "#A6A6A6"), B = S ? M.hex : L, $ = De(
    () => $m(N, j),
    [N, j]
  ), A = n || `${M.label}${b ? j === Me.Higher ? " – Higher" : " – Lower" : ""}`, I = Gl(
    e
  );
  if (i === gn.TriangleWithRun) {
    const K = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], U = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let X = null;
    N === Ce.SpecialCauseImproving || N === Ce.SpecialCauseDeteriorating ? X = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (j === Me.Higher ? K : U).map((oe) => oe.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 6,
        transform: j === Me.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : N === Ce.SpecialCauseNoJudgement && (X = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: j === Me.Higher ? K.map((oe) => oe.join(",")).join(" ") : U.map((oe) => oe.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 6,
        transform: j === Me.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const Y = Math.max(0, Math.min(5, Math.floor(l || 0))), Q = N === Ce.CommonCause ? 160 : j === Me.Higher ? 220 : 70, ce = 10, ie = 26, ne = 150 - 2 * ie, ee = N === Ce.SpecialCauseImproving ? Ye("improvement", "#00B0F0") : N === Ce.SpecialCauseDeteriorating ? Ye("concern", "#E46C0A") : L, te = Array.from({ length: 5 }).map((oe, ae) => {
      const de = (N === Ce.SpecialCauseImproving || N === Ce.SpecialCauseDeteriorating) && ae >= 5 - Y ? ee : L;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: ne + ae * ie,
          cy: Q,
          r: ce,
          fill: de,
          stroke: de,
          strokeWidth: 1
        },
        ae
      );
    }), se = Va(
      M.hex,
      f,
      m,
      s,
      o,
      [
        { offset: "0%", opacity: h },
        { offset: "75%", opacity: T },
        { offset: "100%", opacity: C }
      ]
    ), z = N === Ce.CommonCause || j === Me.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": A,
        "aria-description": I,
        ...u,
        children: [
          se,
          /* @__PURE__ */ r.jsx(
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
          /* @__PURE__ */ r.jsxs("g", { transform: z, children: [
            X,
            b && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: j === Me.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: b
              }
            ),
            te
          ] })
        ]
      }
    );
  }
  if (i === gn.Triangle) {
    const K = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], U = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], X = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let Y = null;
    N === Ce.SpecialCauseImproving || N === Ce.SpecialCauseDeteriorating ? Y = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (j === Me.Higher ? K : U).map((ce) => ce.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 8,
        transform: j === Me.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : N === Ce.SpecialCauseNoJudgement ? Y = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: j === Me.Higher ? K.map((ce) => ce.join(",")).join(" ") : U.map((ce) => ce.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 8,
        transform: j === Me.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : N === Ce.CommonCause && (Y = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: X[0][0],
        y1: X[0][1],
        x2: X[1][0],
        y2: X[1][1],
        stroke: M.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const Q = Va(
      M.hex,
      f,
      m,
      s,
      o,
      [
        { offset: "0%", opacity: h },
        { offset: "65%", opacity: T },
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
        "aria-label": A,
        "aria-description": I,
        ...u,
        children: [
          Q,
          /* @__PURE__ */ r.jsx(
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
          Y,
          b && (N === Ce.SpecialCauseImproving || N === Ce.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: j === Me.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: b
            }
          )
        ]
      }
    );
  }
  const H = Va(
    M.hex,
    f,
    m,
    s,
    o,
    [
      { offset: "0%", opacity: p },
      { offset: "65%", opacity: y },
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
      "aria-label": A,
      "aria-description": I,
      ...u,
      children: [
        H,
        /* @__PURE__ */ r.jsx(
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
        b && /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: M.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: j === Me.Lower ? "340" : "155", children: b })
          }
        ),
        k ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: M.hex,
            ...j === Me.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          $.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: L,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${$.map((re) => `${re.cx} ${re.cy}`).join(" L ")}`
            }
          ),
          $.map((re, G) => {
            const K = G >= $.length - 2 && S ? B : L, U = K;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: U,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: K,
                cx: re.cx,
                cy: re.cy,
                r: 16
              },
              G
            );
          })
        ] })
      ]
    }
  );
};
Qs.displayName = "SPCVariationIcon";
const Vm = {
  [mt.Xs]: { height: 24, pointR: 2, stroke: 1 },
  [mt.Sm]: { height: 32, pointR: 3, stroke: 1 },
  [mt.Md]: { height: 44, pointR: 4, stroke: 1 },
  [mt.Lg]: { height: 56, pointR: 5, stroke: 1 },
  [mt.Xl]: { height: 72, pointR: 6, stroke: 1 },
  // Full uses Md metrics for points; height adapts via 'height' attribute below
  [mt.Full]: { height: 44, pointR: 4, stroke: 1 }
};
function Ym(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function Zm(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const n = t.reduce((i, l) => i + l.value, 0) / t.length, a = [...e].reverse().findIndex((i) => i.value != null), s = a >= 0 ? e.length - 1 - a : null, o = s != null ? e[s].value : null;
  return { mean: n, latestValue: o, latestIndex: s };
}
function Jm(e) {
  switch (e) {
    case Ce.SpecialCauseImproving:
      return Ye("improvement", "#00B0F0");
    case Ce.SpecialCauseDeteriorating:
      return Ye("concern", "#E46C0A");
    case Ce.SpecialCauseNoJudgement:
      return Ye("no-judgement", "#490092");
    case Ce.CommonCause:
      return Ye("common-cause", "#A6A6A6");
    default:
      return Ye("common-cause", "#A6A6A6");
  }
}
const Vl = ({
  data: e,
  windowSize: t,
  minPointsForSignals: n = 13,
  showMean: a = !0,
  showLimits: s = !0,
  showLimitBand: o = !0,
  showInnerBands: i = !1,
  showLatestMarker: l = !0,
  showStateGlyph: d = !0,
  variationState: c,
  metricImprovement: u,
  gradientWash: f = !1,
  size: m = mt.Sm,
  ariaLabel: p,
  className: y,
  onPointClick: g,
  maxPoints: h,
  thinningStrategy: T = "stride",
  colorPointsBySignal: C = !0,
  centerLine: N,
  controlLimits: j,
  sigmaBands: x,
  pointSignals: M,
  pointNeutralSpecialCause: D,
  visualCategories: _
}) => {
  const b = u, S = De(
    () => Ym(e, t),
    [e, t]
  ), k = De(() => Zm(S), [S]), L = (() => {
    if (typeof m == "string")
      switch (m) {
        case "xs":
          return mt.Xs;
        case "sm":
          return mt.Sm;
        case "md":
          return mt.Md;
        case "lg":
          return mt.Lg;
        case "xl":
          return mt.Xl;
        case "full":
          return mt.Full;
        default:
          return mt.Sm;
      }
    return m ?? mt.Sm;
  })(), B = Vm[L], $ = Math.max(S.length * 6, 60), A = $, I = L === mt.Full ? "100%" : $, H = B.height, re = 4, G = 2, R = De(() => (e?.length ?? 0) - (S?.length ?? 0), [e?.length, S?.length]), K = N ?? k.mean ?? null, U = De(() => {
    if (!s) return null;
    if (j) return j;
    const be = S.filter((v) => typeof v.value == "number");
    if (!be.length || K == null) return null;
    const Se = be.map((v) => v.value), le = Math.min(...Se), Z = Math.max(...Se);
    return { lower: le, upper: Z };
  }, [s, j?.lower, j?.upper, S, K]), Y = De(() => ({
    state: c ?? Ce.CommonCause,
    firedRules: [],
    mean: K ?? null,
    stdDev: null,
    side: k.latestValue != null && K != null ? k.latestValue > K ? "above" : "below" : void 0
  }), [c, K, k.latestValue]).state, Q = Jm(Y), ce = (be) => {
    const Se = S.filter((E) => E.value != null);
    if (!Se.length) return H / 2;
    const le = Se.map((E) => E.value);
    U && (U.lower != null && le.push(U.lower), U.upper != null && le.push(U.upper));
    const Z = Math.min(...le), v = Math.max(...le);
    return Z === v ? H / 2 : H - (be - Z) / (v - Z) * (H - G * 2) - G;
  }, ie = De(() => {
    if (!h || S.length <= h)
      return S.map((F, w) => w);
    if (T === "stride") {
      const F = Math.max(2, h), w = (S.length - 1) / (F - 1), P = /* @__PURE__ */ new Set();
      for (let W = 0; W < F; W++) P.add(Math.round(W * w));
      return P.add(S.length - 1), Array.from(P).sort((W, V) => W - V);
    }
    const be = S.map((F, w) => ({ i: w, v: F.value }));
    function Se(F, w, P) {
      const W = F.i, V = F.v ?? 0, J = w.i, q = w.v ?? 0, he = P.i, pe = P.v ?? 0, ye = Math.abs((pe - q) * W - (he - J) * V + he * q - pe * J), _e = Math.hypot(pe - q, he - J);
      return _e === 0 ? 0 : ye / _e;
    }
    function le(F, w) {
      if (F.length <= 2) return F;
      let P = -1, W = -1;
      for (let V = 1; V < F.length - 1; V++) {
        const J = Se(F[V], F[0], F[F.length - 1]);
        J > P && (P = J, W = V);
      }
      if (P > w) {
        const V = le(F.slice(0, W + 1), w), J = le(F.slice(W), w);
        return [...V.slice(0, -1), ...J];
      }
      return [F[0], F[F.length - 1]];
    }
    let Z = 0.1, v = be;
    for (let F = 0; F < 8 && (v = le(be, Z), !(v.length <= h)); F++)
      Z *= 1.6;
    const E = new Set(v.map((F) => F.i));
    return E.add(0), E.add(S.length - 1), Array.from(E).sort((F, w) => F - w);
  }, [S, h, T]), ne = De(
    () => ie.map((be) => S[be]),
    [ie, S]
  ), ee = De(() => {
    let be = "";
    return ne.forEach((Se, le) => {
      if (Se.value == null) return;
      const Z = ce(Se.value), v = le / (ne.length - 1 || 1) * (A - re * 2) + re;
      be += be ? ` L ${v} ${Z}` : `M ${v} ${Z}`;
    }), be;
  }, [ne, A]), te = k.latestIndex ?? -1, se = U, z = va(), oe = De(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [S.length, f]
  ), ae = S.length >= (n || 0), ue = p || "SPC sparkline", de = (() => {
    if (!Y) return;
    const be = b === Ae.Up ? ot.HigherIsBetter : b === Ae.Down ? ot.LowerIsBetter : ot.ContextDependent, Se = {
      variationIcon: Y === Ce.SpecialCauseImproving ? "improvement" : Y === Ce.SpecialCauseDeteriorating ? "concern" : Y === Ce.SpecialCauseNoJudgement ? "none" : "neither",
      trend: b === Ae.Up ? Me.Higher : Me.Lower,
      polarity: be
    };
    try {
      return Gl(Se);
    } catch {
      return;
    }
  })(), we = De(() => {
    if (!ae) return 10;
    const be = [...S].reverse().filter((le) => le.value != null).slice(0, 6).map((le) => ce(le.value));
    return be.length && be.reduce((le, Z) => le + Z, 0) / be.length < H / 2 ? H : 10;
  }, [S, ae, H]);
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": ue,
      "aria-description": de,
      width: I,
      height: H,
      className: y,
      viewBox: `0 0 ${A} ${H}`,
      children: [
        f && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: oe, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: Q,
                stopOpacity: Number(z.start)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: Q,
                stopOpacity: Number(z.mid)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: Q,
                stopOpacity: Number(z.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: A,
              height: H,
              fill: `url(#${oe})`
            }
          )
        ] }),
        se && se.lower != null && se.upper != null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          o && /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                ce(se.upper),
                ce(se.lower)
              ),
              width: A,
              height: Math.abs(
                ce(se.upper) - ce(se.lower)
              ),
              fill: Q,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: A,
              y1: ce(se.lower),
              y2: ce(se.lower),
              stroke: Q,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: A,
              y1: ce(se.upper),
              y2: ce(se.upper),
              stroke: Q,
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
                x2: A,
                y1: ce(x.lowerTwo),
                y2: ce(x.lowerTwo),
                stroke: Q,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            x.lowerOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: A,
                y1: ce(x.lowerOne),
                y2: ce(x.lowerOne),
                stroke: Q,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            x.upperOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: A,
                y1: ce(x.upperOne),
                y2: ce(x.upperOne),
                stroke: Q,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            x.upperTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: A,
                y1: ce(x.upperTwo),
                y2: ce(x.upperTwo),
                stroke: Q,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        a && K != null && /* @__PURE__ */ r.jsx(
          "line",
          {
            x1: 0,
            x2: A,
            y1: ce(K),
            y2: ce(K),
            stroke: Ye("common-cause", "#A6A6A6"),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: ee,
            fill: "none",
            stroke: Ye("common-cause", "#A6A6A6"),
            strokeWidth: B.stroke,
            strokeLinecap: "round"
          }
        ),
        ie.map((be, Se) => {
          const le = S[be];
          if (!le || le.value == null) return null;
          const Z = ce(le.value), v = Se / (ne.length - 1 || 1) * (A - re * 2) + re, F = (be === te && l ? B.pointR + 1 : B.pointR) - 0.5;
          let w = Ye("common-cause", "#A6A6A6");
          if (C) {
            const P = _?.[R + be];
            if (P != null)
              switch (P) {
                case We.Improvement:
                  w = Ye("improvement", "#00B0F0");
                  break;
                case We.Concern:
                  w = Ye("concern", "#E46C0A");
                  break;
                case We.NoJudgement:
                  w = Ye("no-judgement", "#490092");
                  break;
                case We.Common:
                default:
                  w = Ye("common-cause", "#A6A6A6");
              }
            else {
              const W = M?.[R + be];
              W === "improvement" ? w = Ye("improvement", "#00B0F0") : W === "concern" ? w = Ye("concern", "#E46C0A") : w = D?.[R + be] ? Ye("no-judgement", "#490092") : Ye("common-cause", "#A6A6A6");
            }
          }
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: v,
              cy: Z,
              r: F,
              fill: w,
              stroke: "none",
              strokeWidth: 0,
              onClick: g ? () => g(be, le) : void 0,
              style: g ? { cursor: "pointer" } : void 0,
              "data-index": be,
              "data-signal-colour": C ? w : void 0
            },
            be
          );
        }),
        d && ae && Y && Y !== Ce.CommonCause && b && /* @__PURE__ */ r.jsx(
          "text",
          {
            x: A - 4,
            y: we,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: Q,
            "data-glyph-pos": we < H / 2 ? "top" : "bottom",
            children: b === Ae.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
Vl.displayName = "SPCSpark";
function Or(e) {
  switch (e) {
    case ke.ImprovementHigh:
    case ke.ImprovementLow:
      return Ce.SpecialCauseImproving;
    case ke.ConcernHigh:
    case ke.ConcernLow:
      return Ce.SpecialCauseDeteriorating;
    case ke.NeitherHigh:
    case ke.NeitherLow:
      return Ce.SpecialCauseNoJudgement;
    case ke.CommonCause:
      return Ce.CommonCause;
    default:
      return null;
  }
}
function Yl(e) {
  return e === ke.ImprovementHigh || e === ke.ImprovementLow || e === ke.ConcernHigh || e === ke.ConcernLow || e === ke.NeitherHigh || e === ke.NeitherLow;
}
function qm(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function Xm(e) {
  const {
    values: t,
    x: n,
    chartType: a = St.XmR,
    metricImprovement: s = Ae.Neither,
    showLimits: o = !0,
    showLimitBand: i = !1,
    showInnerBands: l = !1,
    showMean: d = !1
    // autoClassify = true,
  } = e, c = O.useMemo(() => {
    const x = [];
    for (let M = 0; M < t.length; M++)
      x.push({ x: n?.[M], value: t[M] });
    return x;
  }, [t, n]), u = O.useMemo(() => {
    try {
      const x = c.map((b, S) => ({ x: b.x ?? S, value: b.value })), M = 13, D = x.filter((b) => typeof b.value == "number").length, _ = { minimumPoints: M };
      return D >= M && (_.chartLevelEligibility = !0), ur({ chartType: a, metricImprovement: s, data: x, settings: _ });
    } catch {
      return null;
    }
  }, [c, a, s]), f = O.useMemo(() => {
    const x = u?.rows;
    if (!x || x.length === 0) return null;
    for (let M = x.length - 1; M >= 0; M--) {
      const D = x[M];
      if (D && D.value != null && !D.ghost) return D;
    }
    return x[x.length - 1] ?? null;
  }, [u]), m = O.useMemo(() => {
    const x = u?.rows;
    if (!x || x.length === 0) return null;
    let M = x[x.length - 1];
    for (let D = x.length - 1; D >= 0; D--) {
      const _ = x[D];
      if (_ && _.value != null && !_.ghost) {
        M = _;
        break;
      }
    }
    return Or(M?.variationIcon);
  }, [u]), p = O.useMemo(() => f?.mean ?? null, [f]), y = O.useMemo(() => {
    if (!f) return null;
    const x = f?.lowerProcessLimit ?? null, M = f?.upperProcessLimit ?? null;
    return x == null && M == null ? null : { lower: x, upper: M };
  }, [f]), g = O.useMemo(() => f ? {
    upperOne: f?.upperOneSigma ?? null,
    upperTwo: f?.upperTwoSigma ?? null,
    lowerOne: f?.lowerOneSigma ?? null,
    lowerTwo: f?.lowerTwoSigma ?? null
  } : null, [f]), h = O.useMemo(() => {
    const x = u?.rows;
    if (!(!x || x.length === 0))
      try {
        return dr(x, {
          metricImprovement: s,
          enableNeutralNoJudgement: !0
        });
      } catch {
        return;
      }
  }, [u, s]), T = O.useMemo(() => {
    if (!(!h || h.length === 0))
      return h.map((x) => {
        switch (x) {
          case We.Improvement:
            return "improvement";
          case We.Concern:
            return "concern";
          case We.NoJudgement:
            return "neither";
          case We.Common:
          default:
            return null;
        }
      });
  }, [h?.length]), C = O.useMemo(() => {
    if (!(!h || h.length === 0))
      return h.map((x) => x === We.NoJudgement);
  }, [h?.length]), N = O.useMemo(() => {
    let x = null;
    if (f && f.value != null && !f.ghost) {
      const B = f.variationIcon;
      m === Ce.SpecialCauseNoJudgement ? x = Yl(B) ? Ce.SpecialCauseNoJudgement : Ce.CommonCause : x = Or(B) ?? Ce.CommonCause;
    }
    const M = x ?? Ce.CommonCause, D = _a[M].hex, [_, b, S] = qm(D), k = va();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${_}, ${b}, ${S}, ${k.start}) 0%, rgba(${_}, ${b}, ${S}, ${k.mid}) 50%, rgba(${_}, ${b}, ${S}, ${k.end}) 100%)`,
      "--fdp-metric-card-accent": D
    };
  }, [f, m]);
  return { sparkProps: O.useMemo(() => ({
    data: c,
    showMean: d,
    showLimits: o,
    showLimitBand: i,
    showInnerBands: l,
    metricImprovement: s,
    centerLine: p,
    controlLimits: y,
    sigmaBands: g,
    pointSignals: T,
    pointNeutralSpecialCause: C,
    visualCategories: h,
    variationState: m ?? void 0
  }), [
    c,
    d,
    o,
    i,
    l,
    s,
    m,
    p,
    y?.lower,
    y?.upper,
    g?.upperTwo,
    g?.lowerOne,
    g?.lowerTwo,
    T?.length,
    C?.length,
    h?.length
  ]), metricCardStyle: N, latestState: m };
}
function hi(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function Qm(e, t, n) {
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
function Km(e, t) {
  const n = e.filter(Boolean);
  if (n.length < 2) return t;
  const a = [];
  for (let d = 1; d < n.length; d++)
    a.push(n[d].getTime() - n[d - 1].getTime());
  const s = a.sort((d, c) => d - c), o = s[Math.floor(s.length / 2)], i = 3600 * 1e3, l = 24 * i;
  return o <= 2 * i ? "hourly" : o <= 2 * l ? "daily" : o <= 10 * l ? "weekly" : o <= 45 * l ? "monthly" : o <= 120 * l ? "quarterly" : "annually";
}
function mi(e, t) {
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
function eg(e, t, n, a = "0-100") {
  if (t) return t;
  if (n) return n;
  const s = e.filter((l) => l != null);
  if (!s.length) return;
  const o = Math.min(...s), i = Math.max(...s);
  if (a === "0-1") {
    if (o >= 0 && i <= 1 && i > 0) return "%";
  } else if (o >= 0 && i <= 100 && i > 0) return "%";
}
function tg(e, t, n = 1) {
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
function Zl(e) {
  const {
    values: t,
    dates: n,
    intervalHint: a,
    startDate: s,
    providedUnit: o,
    defaultUnit: i,
    autoValue: l = !0,
    autoDelta: d = !0,
    autoMetadata: c = !0,
    deltaConfig: u
  } = e, f = t.map(
    (b) => typeof b == "number" ? b : b == null ? null : Number(b)
  );
  let m = -1;
  for (let b = f.length - 1; b >= 0; b--)
    if (f[b] != null) {
      m = b;
      break;
    }
  let p = (n || []).map(hi);
  if (!p.some(Boolean)) {
    const b = hi(s);
    b && a ? p = Qm(f.length, b, a) : p = new Array(f.length).fill(void 0);
  }
  const g = Km(p, a), h = eg(
    f,
    o,
    i,
    e.percentHeuristic
  ), T = l && m >= 0 && f[m] != null ? f[m] : void 0, C = {
    strategy: "previous",
    n: 1,
    absolute: !0,
    skipNulls: !0,
    ...u || {}
  };
  function N() {
    if (m < 0) return -1;
    if (C.strategy === "previous" || C.strategy === "n-points") {
      let B = m - (C.strategy === "previous" ? 1 : Math.max(1, C.n || 1));
      if (!C.skipNulls) return B;
      for (let $ = B; $ >= 0; $--) if (f[$] != null) return $;
      return -1;
    }
    const b = p[m];
    if (!b) return -1;
    const S = new Date(b);
    S.setFullYear(S.getFullYear() - 1);
    let k = -1, L = 1 / 0;
    for (let B = 0; B < p.length; B++) {
      const $ = p[B];
      if (!$ || f[B] == null) continue;
      const A = Math.abs($.getTime() - S.getTime());
      A < L && (L = A, k = B);
    }
    return k;
  }
  const j = N(), x = j >= 0 ? f[j] : null;
  let M;
  if (d && T != null && x != null) {
    const b = T - x, S = C.absolute !== !1, k = S ? b : x === 0 ? 0 : b / Math.abs(x) * 100;
    M = {
      value: Number.isFinite(k) ? Number(k.toFixed(2)) : 0,
      isPercent: S ? h === "%" : !0,
      period: `vs ${tg(g, a, C.strategy === "n-points" ? Math.max(1, C.n || 1) : 1)}`
    };
  }
  const D = m >= 0 ? p[m] : void 0, _ = c && mi(D, g) ? `Latest: ${mi(D, g)}` : void 0;
  return { value: T, unit: h, delta: M, metadata: _, latestDate: D, frequency: g };
}
const Zy = ({
  sparkData: e,
  direction: t = Ae.Neither,
  showMean: n = !1,
  showLimits: a = !0,
  showLimitBand: s = !1,
  showInnerBands: o = !1,
  maxPoints: i,
  autoValue: l = !0,
  autoDelta: d = !0,
  autoMetadata: c = !0,
  defaultUnit: u,
  intervalHint: f,
  startDate: m,
  deltaConfig: p,
  ...y
}) => {
  const g = Xm({
    values: e.map((M) => M.value ?? null),
    metricImprovement: t,
    showLimits: a,
    showLimitBand: s,
    showInnerBands: o,
    showMean: n
  }), h = /* @__PURE__ */ r.jsx(Vl, { ...g.sparkProps, maxPoints: i }), T = O.useMemo(() => Zl({
    values: e.map((M) => typeof M.value == "number" ? M.value : null),
    dates: e.map((M) => M.date),
    intervalHint: f,
    startDate: m,
    providedUnit: y.unit,
    defaultUnit: u,
    autoValue: l,
    autoDelta: d,
    autoMetadata: c,
    deltaConfig: p
  }), [e, f, m, y.unit, u, l, d, c, p]), C = l && T.value != null ? T.value : y.value, N = d && T.delta ? T.delta : y.delta, j = T.unit || y.unit, x = c && T.metadata ? T.metadata : y.metadata;
  return /* @__PURE__ */ r.jsx(
    Cm,
    {
      ...y,
      value: C,
      unit: j,
      delta: N,
      metadata: x,
      visual: h,
      style: g.metricCardStyle
    }
  );
};
function ng({
  warnings: e,
  show: t,
  formatWarningCategory: n,
  formatWarningCode: a
}) {
  const [s, o] = O.useState(""), i = O.useRef("");
  return O.useEffect(() => {
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
    const d = {
      error: e.filter((f) => f.severity === Tt.Error).length,
      warning: e.filter((f) => f.severity === Tt.Warning).length,
      info: e.filter((f) => f.severity === Tt.Info).length
    }, c = [];
    d.error && c.push(`${d.error} error${d.error === 1 ? "" : "s"}`), d.warning && c.push(`${d.warning} warning${d.warning === 1 ? "" : "s"}`), d.info && c.push(`${d.info} info`);
    const u = `Diagnostics updated: ${l} warning${l === 1 ? "" : "s"} (${c.join(", ")}).`;
    u !== i.current && (i.current = u, o(u));
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
        Qt,
        {
          firstCellIsHeader: !1,
          panel: !1,
          responsive: !1,
          head: [{ text: "Severity" }, { text: "Category" }, { text: "Code" }, { text: "Details" }],
          rows: e.map((l) => {
            let d = "grey";
            return l.severity === Tt.Error ? d = "red" : l.severity === Tt.Warning ? d = "orange" : l.severity === Tt.Info && (d = "blue"), [
              {
                node: /* @__PURE__ */ r.jsx(Ze, { color: d, text: (l.severity ? String(l.severity) : "Info").replace(/^[a-z]/, (c) => c.toUpperCase()) }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
              },
              {
                node: l.category ? /* @__PURE__ */ r.jsx(Ze, { color: "purple", text: n(l.category) }) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
              },
              {
                node: /* @__PURE__ */ r.jsx(Ze, { color: "grey", text: a(l.code) }),
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
function rg({
  variationNode: e,
  assuranceNode: t,
  show: n
}) {
  return n ? /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: [
    e,
    t
  ] }) : null;
}
const Ks = ({
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
  const c = Sr(), u = Sr(), { start: f, mid: m, end: p } = va(), y = s || Dm[e], g = (i || Tm[e]).slice(0, 2), h = n || `Assurance ${e}`;
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
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: y, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: y, stopOpacity: parseFloat(m) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(p) })
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
            fill: y,
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
          e === hn.Fail ? /* @__PURE__ */ r.jsx(
            "path",
            {
              id: "fail-line",
              stroke: y,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 33,143 L 268,143"
            }
          ) : e === hn.Uncertain ? /* @__PURE__ */ r.jsx(
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
              stroke: y,
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
              stroke: y,
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
Ks.displayName = "SPCAssuranceIcon";
const ag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: hn,
  Direction: Me,
  MetricPolarity: ot,
  SPCAssuranceIcon: Ks,
  SPCVariationIcon: Qs,
  VariationJudgement: vt,
  VariationState: Ce,
  getVariationColour: Bl,
  getVariationTrend: qs
}, Symbol.toStringTag, { value: "Module" }));
function sg(e) {
  const { show: t, rowsForUi: n, minPoints: a, metricImprovement: s, variant: o, runLength: i } = e;
  if (!t || !n?.length) return null;
  const l = n, d = typeof a == "number" && !isNaN(a) ? a : 13;
  if (l.filter(
    (x) => !x.data.ghost && x.data.value != null
  ).length < d) return null;
  let u = -1;
  for (let x = l.length - 1; x >= 0; x--) {
    const M = l[x];
    if (M && M.data.value != null && !M.data.ghost) {
      u = x;
      break;
    }
  }
  if (u === -1) return null;
  const f = l[u], m = f.classification?.variation, p = f.classification?.assurance, y = m === Oe.Neither && !!f.classification?.neutralSpecialCauseValue, g = p === on.Pass ? hn.Pass : p === on.Fail ? hn.Fail : hn.Uncertain;
  let h;
  if (m === Oe.Suppressed) {
    const x = !!f.rules.singlePoint.up, M = !!f.rules.singlePoint.down;
    s === sn.Up ? x ? h = Me.Higher : M && (h = Me.Lower) : s === sn.Down ? M ? h = Me.Lower : x && (h = Me.Higher) : h = Me.Higher;
  } else if (m === Oe.Neither && y) {
    const x = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, M = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
    x && !M ? h = Me.Higher : M && !x ? h = Me.Lower : h = Me.Higher;
  }
  const T = 80, C = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, N = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
  let j = ke.CommonCause;
  return m === Oe.Improvement ? j = ke.ImprovementHigh : m === Oe.Concern ? j = ke.ConcernHigh : m === Oe.Neither && (y ? h === Me.Lower || N && !C ? j = ke.NeitherLow : j = ke.NeitherHigh : j = ke.CommonCause), /* @__PURE__ */ r.jsxs(
    "div",
    {
      style: { display: "flex", gap: 12, marginRight: 16 },
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-icon",
            "data-variation": String(m),
            "data-trend": h ? String(h) : "none",
            style: { width: T, height: T },
            children: /* @__PURE__ */ r.jsx(
              Qs,
              {
                dropShadow: !1,
                data: {
                  variationIcon: j,
                  improvementDirection: s,
                  specialCauseNeutral: y,
                  highSideSignal: C,
                  lowSideSignal: N,
                  ...h ? { trend: h } : {}
                },
                letterMode: s === sn.Neither ? sr.Direction : sr.Polarity,
                size: T,
                variant: o,
                runLength: o === gn.TriangleWithRun ? i : void 0
              }
            )
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-assurance-icon",
            "data-assurance": String(p),
            style: { width: T, height: T },
            children: /* @__PURE__ */ r.jsx(
              Ks,
              {
                status: g,
                size: T,
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
const Jl = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: s,
  dateFormatter: o,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const d = Kt(), c = ln(), [u, f] = O.useState(null), [m, p] = O.useState(!1), y = O.useRef(null);
  O.useEffect(() => {
    if (d) {
      if (d.focused && (f(d.focused), y.current && (cancelAnimationFrame(y.current), y.current = null)), !d.focused && !m) {
        const le = requestAnimationFrame(() => {
          f(null), y.current = null;
        });
        y.current = le;
      }
      return () => {
        y.current && (cancelAnimationFrame(y.current), y.current = null);
      };
    }
  }, [d, d?.focused, m]);
  const g = d && (d.focused || (m ? u : null) || u), [h, T] = O.useState(!1);
  O.useEffect(() => {
    const le = requestAnimationFrame(() => T(!0));
    return () => cancelAnimationFrame(le);
  }, [g?.index]);
  const C = c?.innerWidth ?? 0, N = c?.innerHeight ?? 0, j = g ? Math.min(Math.max(g.clientX, 0), C) : 0, x = g ? Math.min(Math.max(g.clientY, 0), N) : 0, M = c?.ref?.current || void 0;
  if (!g)
    return null;
  const D = e?.[g.index], b = wa(
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
  ).map((le) => ({ id: le, label: An[le].tooltip })), S = g.x instanceof Date ? g.x : new Date(g.x), k = o ? o(S) : S.toDateString(), L = s ? `${s}` : "", B = a || L ? `${g.y}${L ? "" + L : " "}${a ? " " + a : ""}` : `${g.y}`, $ = Sa(D?.classification?.variation), A = Fl(D?.classification?.assurance), I = Mm(
    t.mean ?? null,
    t.sigma,
    g.y
  ), H = n ? n(g.index, { x: g.x, y: g.y }) : void 0, re = $ || A || I, G = D?.rules.trend.up || D?.rules.trend.down, R = D?.classification?.variation === Oe.Neither && G, K = l && R ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, U = b.length > 0, X = D && "primeDirection" in D ? D.primeDirection : void 0, Y = D && "primeRuleId" in D ? D.primeRuleId : void 0, Q = i && D?.classification?.variation === Oe.Neither && U, ce = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", ie = Rl(D?.classification?.variation), ne = 6.2, te = [
    H || "",
    `${k} • ${B}`
  ].filter(Boolean).reduce(
    (le, Z) => Math.max(le, Z.length * ne + 32),
    0
  ), se = 200, z = 440, oe = Math.min(z, Math.max(se, te));
  let ae = j + 12, de = (c.margin?.top ?? 0) + x + 16;
  ae + oe > C && (ae = j - -60 - oe), ae < 0 && (ae = Math.max(0, C - oe));
  const we = g ? `spc-tooltip-${g.index}` : "spc-tooltip", be = typeof g.index == "number" ? g.index : NaN, Se = M ? Qc(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: we,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (h ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: ae,
          top: de,
          width: oe,
          maxWidth: z,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": h ? "false" : "true",
        "data-floating": !0,
        "data-placement": ae + oe + 12 > C ? "left" : "right",
        onPointerEnter: () => {
          p(!0), y.current && (cancelAnimationFrame(y.current), y.current = null);
        },
        onPointerLeave: () => {
          if (p(!1), !d?.focused) {
            const le = requestAnimationFrame(() => {
              f(null), y.current = null;
            });
            y.current = le;
          }
        },
        children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--point", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Point" }) }),
            /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__primary-line", children: [
              "Index: ",
              be
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: k })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: B })
          ] }),
          re && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: $?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              Ze,
              {
                text: $,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : $?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              Ze,
              {
                text: $,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : Q ? /* @__PURE__ */ r.jsx(
              Ze,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : $ ? /* @__PURE__ */ r.jsx(
              Ze,
              {
                text: $,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          A && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const le = A.toLowerCase(), v = !(le.includes("not met") || le.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(le);
              return /* @__PURE__ */ r.jsx(
                Ze,
                {
                  text: A,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${v ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${A}`
                }
              );
            })() })
          ] }),
          I && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              Ze,
              {
                text: (() => {
                  const le = I.toLowerCase();
                  return le.startsWith("within 1") ? "≤1σ" : le.startsWith("1–2") ? "1–2σ" : le.startsWith("2–3") ? "2–3σ" : le.startsWith(">3") ? ">3σ" : I;
                })(),
                color: I.includes(">3") ? "orange" : I.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${I}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          K && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: K })
          ] }),
          U && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: b.map(({ id: le, label: Z }) => {
                  const v = String(le), F = v === ar.TrendIncreasing || v === ar.TrendDecreasing ? "fdp-spc-tag--trend" : Q ? "fdp-spc-tag--no-judgement" : $ ? $.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : $.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    Ze,
                    {
                      text: Z,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${F}`,
                      "data-rule-id": v
                    },
                    v
                  );
                })
              }
            ),
            X && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const le = Q ? "fdp-spc-tag--no-judgement" : $ ? $.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : $.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", Z = `${X}${Y ? ` (${Y})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  Ze,
                  {
                    text: Z,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${le}`,
                    "aria-label": `Prime direction ${X}${Y ? ` via ${Y}` : ""}`
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
            cx: j,
            cy: x,
            r: 7,
            fill: "none",
            stroke: ce,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: j,
            cy: x,
            r: 5,
            fill: "#000",
            stroke: ce,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: j,
            cy: x,
            r: 2.5,
            fill: ie,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        Se
      ]
    }
  );
}, og = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: a
}) => {
  const s = Kt(), o = s?.focused ?? null, i = o?.index ?? null, l = typeof i == "number" && e ? e[i] : null, d = O.useMemo(
    () => l ? wa({
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
  ), c = O.useMemo(
    () => Array.from(
      new Set(d.map((g) => An[g]?.narration).filter(Boolean))
    ),
    [d]
  ), u = l ? Sa(l.classification?.variation) : null, f = l ? Fl(l.classification?.assurance) : null, m = d.length > 0, p = l ? l.classification?.variation === Oe.Neither && m : !1, y = O.useRef(null);
  return O.useEffect(() => {
    if (!a || !o || l == null) return;
    const g = `${o.seriesId}:${o.index}`;
    if (y.current !== g) {
      y.current = g;
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
  }, [o?.seriesId, o?.index, o?.x, o?.y, l, d, a]), /* @__PURE__ */ r.jsxs(
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
                      Ze,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : u?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
                      Ze,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : p ? /* @__PURE__ */ r.jsx(
                      Ze,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : u ? /* @__PURE__ */ r.jsx(
                      Ze,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const g = f.toLowerCase(), T = !(g.includes("not met") || g.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(g);
                      return /* @__PURE__ */ r.jsx(
                        Ze,
                        {
                          text: f,
                          color: "default",
                          className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${T ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
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
                children: d.length === 0 ? /* @__PURE__ */ r.jsx("span", { children: " None" }) : d.map((g) => {
                  const h = String(g), C = h === ar.TrendIncreasing || h === ar.TrendDecreasing ? "fdp-spc-tag--trend" : p ? "fdp-spc-tag--no-judgement" : u ? u.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : u.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", N = An[g]?.tooltip || h;
                  return /* @__PURE__ */ r.jsx(
                    Ze,
                    {
                      text: N,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${C}`,
                      "data-rule-id": h,
                      title: An[g]?.tooltip
                    },
                    h
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
function ig(e, t = !0) {
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
        const i = n[s], l = o - 1, d = l - s + 1;
        (i === lt.Common || d >= 2) && a.push({ start: s, end: l, category: i }), s = o;
      }
  }
  return a;
}
var Jn = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(Jn || {}), ql = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(ql || {});
function lg(e) {
  const {
    ui: t,
    input: n,
    engine: a,
    container: s,
    a11y: o,
    visualsEngine: i,
    meta: l,
    data: d,
    ariaLabel: c,
    height: u,
    showZones: f,
    showPoints: m,
    announceFocus: p,
    className: y,
    unit: g,
    targets: h,
    baselines: T,
    ghosts: C,
    settings: N,
    chartType: j,
    metricImprovement: x,
    gradientSequences: M,
    sequenceTransition: D,
    processLineWidth: _,
    showPartitionMarkers: b,
    showWarningsPanel: S,
    warningsFilter: k,
    enableNeutralNoJudgement: L,
    showTrendGatingExplanation: B,
    trendVisualMode: $,
    alwaysShowZeroY: A,
    alwaysShowHundredY: I,
    percentScale: H,
    showTrendStartMarkers: re,
    showFirstFavourableCrossMarkers: G,
    showTrendBridgeOverlay: R,
    showSignalsInspector: K,
    onSignalFocus: U,
    showIcons: X,
    showEmbeddedIcon: Y,
    embeddedIconVariant: Q,
    embeddedIconRunLength: ce,
    showFocusIndicator: ie,
    visualsScenario: ne,
    visualsEngineSettings: ee,
    source: te,
    narrationContext: se,
    highlightOutOfControl: z,
    precomputed: oe
  } = e;
  process.env.NODE_ENV !== "production" && (!n && (h !== void 0 || T !== void 0 || C !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={{ data, targets, baselines, ghosts }} instead."
  ), !a && N !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={{ chartType, metricImprovement, settings }}."
  ), !s && (u !== void 0 || y !== void 0) && console.warn(
    "SPCChart: Consider grouped container props. Use container={{ height, className }}."
  ), !o && (c !== void 0 || p !== void 0 || se !== void 0 || g !== void 0) && console.warn(
    "SPCChart: Consider grouped accessibility props. Use a11y={{ label, announceFocus, narrationContext, unit }}."
  ), !i && (ne !== void 0 || ee !== void 0) && console.warn(
    "SPCChart: Consider grouped visuals engine props. Use visualsEngine={{ scenario, settings }}."
  ), t?.visuals === void 0 && (f !== void 0 || m !== void 0) && console.warn(
    "SPCChart: Visual toggles should be grouped. Use ui={{ visuals: { showZones, showPoints } }}."
  ), t?.visuals?.rules === void 0 && z !== void 0 && console.warn(
    "SPCChart: Prefer grouped rules toggle. Use ui={{ visuals: { rules: { highlightOutOfControl } } }}."
  ), !l && te !== void 0 && console.warn(
    "SPCChart: Consider grouped meta. Use meta={{ source }}."
  ));
  const ae = n?.data ?? d ?? [], ue = n?.targets ?? h, de = n?.baselines ?? T, we = n?.ghosts ?? C, be = a?.chartType ?? j ?? Al.XmR, Se = a?.metricImprovement ?? x ?? sn.Neither, le = a?.settings ?? N, Z = a?.autoRecalc, v = t?.axes?.alwaysShowZeroY ?? A ?? !1, E = t?.axes?.alwaysShowHundredY ?? I ?? !1, F = t?.axes?.percentScale ?? H ?? !1, w = t?.visuals?.gradientSequences ?? M ?? !0, P = t?.visuals?.sequenceTransition ?? D ?? "slope", W = t?.visuals?.processLineWidth ?? _ ?? 2, V = t?.visuals?.trend?.visualMode ?? $ ?? "ungated", J = t?.visuals?.trend?.showGatingExplanation ?? B ?? !0, q = t?.visuals?.rules?.enableNeutralNoJudgement ?? L ?? !0, he = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, pe = t?.visuals?.showZones, ye = t?.visuals?.showPoints, _e = t?.visuals?.rules?.highlightOutOfControl, me = s?.height, Te = s?.className, Re = o?.label, Ge = o?.unit, Be = o?.narrationContext, nt = i?.scenario, Je = i?.settings, it = l?.source, st = t?.overlays?.partitionMarkers ?? b ?? !1, tt = t?.overlays?.trendStartMarkers ?? re ?? !1, Xe = t?.overlays?.firstFavourableCrossMarkers ?? G ?? !1, At = t?.overlays?.trendBridge ?? R ?? !1, fr = t?.inspector?.show ?? K ?? !1, cn = t?.inspector?.onFocus ?? U, $e = t?.warnings?.show ?? S ?? !1, Pe = t?.warnings?.filter ?? k, Ie = t?.icons?.show ?? X ?? !1, xt = t?.icons?.embedded?.show ?? Y ?? !0, ft = t?.icons?.embedded?.variant ?? Q ?? gn.Classic, kt = t?.icons?.embedded?.runLength ?? ce, Ee = t?.overlays?.focusIndicator ?? ie ?? !0;
  return {
    effData: ae,
    effTargets: ue,
    effBaselines: de,
    effGhosts: we,
    effChartTypeCore: be,
    effMetricImprovementCore: Se,
    effEngineSettings: le,
    effEngineAutoRecalc: Z,
    effHeight: me,
    effClassName: Te,
    effAriaLabel: Re,
    effUnit: Ge,
    effNarrationContext: Be,
    effShowZones: pe,
    effShowPoints: ye,
    effHighlightOutOfControl: _e,
    effVisualsScenario: nt,
    effVisualsEngineSettings: Je,
    effPrecomputedVisuals: oe,
    effSource: it,
    effAlwaysShowZeroY: v,
    effAlwaysShowHundredY: E,
    effPercentScale: F,
    effGradientSequences: w,
    effSequenceTransition: P,
    effProcessLineWidth: W,
    effTrendVisualMode: V,
    effShowTrendGatingExplanation: J,
    effEnableNeutralNoJudgement: q,
    effEnableRules: he,
    effShowPartitionMarkers: st,
    effShowTrendStartMarkers: tt,
    effShowFirstFavourableCrossMarkers: Xe,
    effShowTrendBridgeOverlay: At,
    effShowSignalsInspector: fr,
    effOnSignalFocus: cn,
    effShowWarningsPanel: $e,
    effWarningsFilter: Pe,
    effShowIcons: Ie,
    effShowEmbeddedIcon: xt,
    effEmbeddedIconVariant: ft,
    effEmbeddedIconRunLength: kt,
    effShowFocusIndicator: Ee
  };
}
let cg = 0;
const dg = ({ data: e, targets: t, visuals: n, a11y: a, axis: s, compute: o }) => {
  const {
    series: i,
    engineRows: l,
    visualCategories: d,
    partitionMarkers: c
  } = e, { limits: u, uniformTarget: f } = t, {
    showPoints: m,
    showZones: p,
    highlightOutOfControl: y,
    gradientSequences: g,
    sequenceTransition: h,
    processLineWidth: T,
    showFocusIndicator: C = !1,
    enableRules: N,
    enableNeutralNoJudgement: j = !0,
    showTrendStartMarkers: x = !1,
    showFirstFavourableCrossMarkers: M = !1,
    showTrendBridgeOverlay: D = !1
  } = n, {
    announceFocus: _,
    ariaLabel: b,
    narrationContext: S,
    showSignalsInspector: k = !1,
    onSignalFocus: L,
    showTrendGatingExplanation: B = !0
  } = a, { zeroBreakSlotGapPx: $ } = s, { metricImprovement: A, effectiveUnit: I } = o, H = Sn(), re = ln();
  if (!H) return null;
  const { xScale: G, yScale: R } = H, K = O.useRef(
    "spc-seq-" + ++cg
  ), U = Kt(), X = i[0]?.data || [], Y = O.useMemo(() => {
    if (!u.ucl && !u.lcl) return /* @__PURE__ */ new Set();
    const v = /* @__PURE__ */ new Set();
    return X.forEach((E, F) => {
      typeof u.ucl == "number" && E.y > u.ucl && v.add(F), typeof u.lcl == "number" && E.y < u.lcl && v.add(F);
    }), v;
  }, [u.ucl, u.lcl, X]), Q = O.useMemo(() => {
    if (!l || !l.length) return null;
    const v = [];
    return l.forEach((E, F) => {
      const w = E.classification.variation === Oe.Concern || E.classification.variation === Oe.Improvement || !!E.classification.neutralSpecialCauseValue, P = !!E.rules.singlePoint.up || !!E.rules.twoOfThree.up || !!E.rules.fourOfFive.up || !!E.rules.shift.up || !!E.rules.trend.up, W = !!E.rules.singlePoint.down || !!E.rules.twoOfThree.down || !!E.rules.fourOfFive.down || !!E.rules.shift.down || !!E.rules.trend.down;
      v[F] = {
        variation: E.classification.variation,
        assurance: E.classification.assurance,
        special: w,
        concern: E.classification.variation === Oe.Concern,
        improvement: E.classification.variation === Oe.Improvement,
        trendUp: !!E.rules.trend.up,
        trendDown: !!E.rules.trend.down,
        upAny: P,
        downAny: W,
        neutralSpecial: !!E.classification.neutralSpecialCauseValue,
        shiftUp: !!E.rules.shift.up,
        shiftDown: !!E.rules.shift.down,
        twoOfThreeUp: !!E.rules.twoOfThree.up,
        twoOfThreeDown: !!E.rules.twoOfThree.down,
        fourOfFiveUp: !!E.rules.fourOfFive.up,
        fourOfFiveDown: !!E.rules.fourOfFive.down,
        partitionId: E.partition.id ?? null
      };
    }), v;
  }, [l]), ce = O.useMemo(() => (d || []).map((v) => v === We.Improvement ? lt.Improvement : v === We.Concern ? lt.Concern : v === We.NoJudgement ? lt.NoJudgement : lt.Common), [d]), ie = O.useMemo(() => !g || !ce.length ? [] : ig(ce, !0), [g, ce, b]), ne = O.useMemo(
    () => X.map((v) => G(v.x instanceof Date ? v.x : new Date(v.x))),
    [X, G]
  ), ee = G.range()[1], te = G.range()[0], se = O.useMemo(() => {
    if (!l || !l.length)
      return null;
    let v = Number.POSITIVE_INFINITY, E = Number.POSITIVE_INFINITY;
    if (l.forEach((q, he) => {
      q.rules.trend.up && (v = Math.min(v, he)), q.rules.trend.down && (E = Math.min(E, he));
    }), !Number.isFinite(v) && !Number.isFinite(E))
      return null;
    const F = v <= E, w = F ? Dt.Up : Dt.Down, P = F ? v : E, W = (q) => A == null || A === sn.Neither || q == null || typeof q.data.value != "number" || typeof q.limits.mean != "number" ? !1 : w === Dt.Up ? A === sn.Up ? q.data.value > q.limits.mean : q.data.value < q.limits.mean : A === sn.Down ? q.data.value < q.limits.mean : q.data.value > q.limits.mean;
    let V = null;
    for (let q = P; q < l.length; q++) {
      const he = l[q];
      if (!(F ? !!he.rules.trend.up : !!he.rules.trend.down)) break;
      if (W(he)) {
        V = q;
        break;
      }
    }
    let J = !1;
    if (V != null) {
      let q = 0;
      for (let he = V; he < l.length; he++) {
        const pe = l[he];
        if (!(F ? !!pe.rules.trend.up : !!pe.rules.trend.down)) break;
        W(pe) && q++;
      }
      J = q >= 2;
    }
    return {
      direction: w,
      detectedAt: P,
      firstFavourableCrossAt: V,
      persistedAcrossMean: J
    };
  }, [l, A]), z = O.useMemo(() => {
    if (!l || !l.length) return null;
    const v = (E) => {
      const F = [];
      let w = null, P = null;
      for (let W = 0; W < l.length; W++) {
        const V = l[W], J = E(V), q = typeof J == "number" && !isNaN(J) ? J : null;
        if (q == null) {
          w !== null && P != null && (F.push({
            x1: ne[w],
            x2: ne[W - 1],
            y: R(P)
          }), w = null, P = null);
          continue;
        }
        if (w === null) {
          w = W, P = q;
          continue;
        }
        P != null && Math.abs(q - P) <= 1e-9 || (P != null && F.push({
          x1: ne[w],
          x2: ne[W - 1],
          y: R(P)
        }), w = W, P = q);
      }
      return w !== null && P != null && F.push({
        x1: ne[w],
        x2: ne[l.length - 1],
        y: R(P)
      }), F;
    };
    return {
      mean: v((E) => E.limits.mean ?? null),
      ucl: v((E) => E.limits.ucl ?? null),
      lcl: v((E) => E.limits.lcl ?? null),
      onePos: v((E) => E.limits.oneSigma.upper ?? null),
      oneNeg: v((E) => E.limits.oneSigma.lower ?? null),
      twoPos: v((E) => E.limits.twoSigma.upper ?? null),
      twoNeg: v((E) => E.limits.twoSigma.lower ?? null)
    };
  }, [l, ne, R]), oe = O.useMemo(() => ie.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
    /* @__PURE__ */ r.jsxs(
      "linearGradient",
      {
        id: `${K.current}-grad-common`,
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
    ie.map((v, E) => {
      const F = `${K.current}-grad-${E}`;
      let w, P = 0.28, W = 0.12, V = 0.045;
      switch (v.category) {
        case lt.Concern:
          w = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", P = 0.28, W = 0.12, V = 0.045;
          break;
        case lt.Improvement:
          w = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", P = 0.26, W = 0.11, V = 0.045;
          break;
        case lt.NoJudgement:
          w = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", P = 0.26, W = 0.11, V = 0.045;
          break;
        default:
          w = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: F, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: w, stopOpacity: P }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: w, stopOpacity: W }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: w, stopOpacity: V })
      ] }, F);
    })
  ] }) : null, [ie]), ae = O.useMemo(() => {
    if (!ie.length) return null;
    const [v] = R.domain(), E = R(v), F = ie.map((w, P) => {
      const { start: W, end: V, category: J } = w;
      if (W < 0 || V >= ne.length || W > V)
        return null;
      const q = ne[W], he = ne[V];
      let pe = "";
      if (J === lt.Common) {
        const ye = P > 0 ? ie[P - 1] : null, _e = P < ie.length - 1 ? ie[P + 1] : null, me = ye ? ne[ye.end] : te, Te = ye ? R(X[ye.end].y) : E, Re = _e ? ne[_e.start] : ee, Ge = _e ? R(X[_e.start].y) : E;
        pe = `M ${me} ${E}`, pe += ` L ${me} ${Te}`;
        for (let Be = W; Be <= V; Be++)
          pe += ` L ${ne[Be]} ${R(X[Be].y)}`;
        pe += ` L ${Re} ${Ge}`, pe += ` L ${Re} ${E} Z`;
      } else {
        const ye = P > 0 ? ie[P - 1] : null, _e = P < ie.length - 1 ? ie[P + 1] : null, me = ye && ye.category !== lt.Common, Te = _e && _e.category !== lt.Common, Re = R(X[W].y), Ge = R(X[V].y);
        let Be = q, nt = he;
        if (me) {
          const Je = ne[ye.end], it = R(X[ye.end].y), st = X[W].y - X[ye.end].y;
          h === Jn.Slope && st > 0 ? (pe = `M ${Je} ${it} L ${q} ${Re}`, Be = Je) : (pe = `M ${q} ${E} L ${q} ${Re}`, Be = q);
        } else
          pe = `M ${q} ${E} L ${q} ${Re}`;
        for (let Je = W + 1; Je <= V; Je++)
          pe += ` L ${ne[Je]} ${R(X[Je].y)}`;
        if (pe += ` L ${he} ${Ge}`, Te) {
          const Je = ne[_e.start], it = R(X[_e.start].y), st = X[_e.start].y - X[V].y;
          (h === Jn.Slope && st <= 0 || h === Jn.Extend) && (pe += ` L ${Je} ${it}`, nt = Je);
        }
        if (pe += ` L ${nt} ${E}`, pe += ` L ${Be} ${E} Z`, h === Jn.Neutral && me) {
          const Je = ne[ye.end], it = R(X[ye.end].y), st = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${Je} ${E} L ${Je} ${it} L ${q} ${Re} L ${q} ${E} Z`,
              fill: `url(#${K.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${P}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            st,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: pe,
                fill: `url(#${K.current}-grad-${P})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${P}`
            )
          ] }, `seq-group-${P}`);
        }
      }
      return /* @__PURE__ */ r.jsx(
        "path",
        {
          d: pe,
          fill: `url(#${K.current}-grad-${P})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${P}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: F });
  }, [ie, ne, ee, R, X, h]), ue = O.useMemo(() => {
    if (!S?.timeframe && X.length >= 2) {
      const v = X.map((V) => V.x instanceof Date ? V.x : new Date(V.x)), E = new Date(Math.min(...v.map((V) => V.getTime()))), F = new Date(Math.max(...v.map((V) => V.getTime()))), w = Math.round((F.getTime() - E.getTime()) / 864e5) || 0;
      if (w < 14)
        return `The chart shows a timeframe of ${w + 1} days`;
      const P = Math.round(w / 7);
      return P < 20 ? `The chart shows a timeframe of ${P} weeks` : `The chart shows a timeframe of ${(F.getFullYear() - E.getFullYear()) * 12 + (F.getMonth() - E.getMonth()) + 1} months`;
    }
    if (S?.timeframe)
      return `The chart shows a timeframe of ${S.timeframe}`;
  }, [S?.timeframe, X]), de = (v) => {
    const E = v % 10, F = v % 100;
    return E === 1 && F !== 11 ? `${v}st` : E === 2 && F !== 12 ? `${v}nd` : E === 3 && F !== 13 ? `${v}rd` : `${v}th`;
  }, we = (v) => `${de(v.getDate())} ${v.toLocaleString("en-GB", { month: "long" })}, ${v.getFullYear()}`, be = (v) => ({
    specialCauseSinglePointUp: !!v?.rules.singlePoint.up,
    specialCauseSinglePointDown: !!v?.rules.singlePoint.down,
    specialCauseTwoOfThreeUp: !!v?.rules.twoOfThree.up,
    specialCauseTwoOfThreeDown: !!v?.rules.twoOfThree.down,
    specialCauseFourOfFiveUp: !!v?.rules.fourOfFive.up,
    specialCauseFourOfFiveDown: !!v?.rules.fourOfFive.down,
    specialCauseShiftUp: !!v?.rules.shift.up,
    specialCauseShiftDown: !!v?.rules.shift.down,
    specialCauseTrendUp: !!v?.rules.trend.up,
    specialCauseTrendDown: !!v?.rules.trend.down
  }), Se = O.useCallback(
    ({
      index: v,
      x: E,
      y: F
    }) => {
      const w = l?.[v], P = E instanceof Date ? E : new Date(E), W = we(P), V = S?.measureUnit ? ` ${S.measureUnit}` : "", J = S?.measureName ? ` ${S.measureName}` : "";
      if (!w)
        return `General summary is: ${ue ? ue + ". " : ""}Point ${v + 1}, ${W}, ${F}${V}${J}`;
      const q = Sa(w.classification?.variation) || "Variation", he = wa(be(w)), pe = he.length ? ` Rules: ${[...new Set(he.map((_e) => An[_e].narration))].join("; ")}.` : " No special cause rules.", ye = [];
      return S?.measureName && ye.push(`Measure: ${S.measureName}.`), S?.datasetContext && ye.push(`${S.datasetContext}.`), S?.organisation && ye.push(`Organisation: ${S.organisation}.`), S?.additionalNote && ye.push(S.additionalNote), [
        "General summary is:",
        ...ye,
        `Point ${v + 1} recorded on `,
        W + ",",
        `with a value of ${F} ${V}${J}`,
        q + ".",
        pe
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [l, S, ue]
  ), le = O.useCallback(
    (v, E) => l?.[v] ? Se({
      index: v,
      seriesId: "process",
      x: E.x instanceof Date ? E.x : new Date(E.x),
      y: E.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [l, Se]
  ), Z = O.useMemo(() => {
    try {
      const v = typeof R?.domain == "function" ? R.domain() : void 0;
      if (!v || !Array.isArray(v) || v.length < 2) return !1;
      const E = Math.min(v[0], v[1]), F = Math.max(v[0], v[1]);
      return !(0 >= E && 0 <= F);
    } catch {
      return !1;
    }
  }, [R]);
  return /* @__PURE__ */ r.jsx(wm, { children: /* @__PURE__ */ r.jsxs(
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
            width: H.xScale.range()[1] + 56 + 16,
            height: (re?.innerHeight ?? H.yScale.range()[0]) + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(ni, { type: "x" }),
              /* @__PURE__ */ r.jsx(
                ni,
                {
                  type: "y",
                  yZeroBreak: {
                    enabled: Z,
                    gapPx: $,
                    zigZag: { heightPx: 64, amplitudePx: 4, cycles: 6, stepXPx: 3 }
                  }
                }
              ),
              /* @__PURE__ */ r.jsx(Hh, { axis: "y" }),
              oe,
              ae,
              c.map((v, E) => {
                const F = X[v];
                if (!F) return null;
                const w = G(F.x instanceof Date ? F.x : new Date(F.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: w,
                    x2: w,
                    y1: 0,
                    y2: R.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${E}`
                );
              }),
              z?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                z.mean.map((v, E) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__cl",
                    x1: v.x1,
                    x2: v.x2,
                    y1: v.y,
                    y2: v.y
                  },
                  `mean-${E}`
                )),
                z.mean.map((v, E) => {
                  if (E === z.mean.length - 1) return null;
                  const F = z.mean[E + 1];
                  if (!F || v.y === F.y) return null;
                  const P = Math.max(4, F.x1 - v.x2 || 0) * 0.5, W = `M ${v.x2},${v.y} C ${v.x2 + P},${v.y} ${F.x1 - P},${F.y} ${F.x1},${F.y}`;
                  return /* @__PURE__ */ r.jsx(
                    "path",
                    {
                      className: "fdp-spc__cl fdp-spc__cl-join",
                      d: W,
                      fill: "none"
                    },
                    `mean-join-${E}`
                  );
                })
              ] }) : null,
              f != null && /* @__PURE__ */ r.jsx(r.Fragment, {}),
              z?.ucl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--ucl",
                  children: [
                    z.ucl.map((v, E) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--ucl",
                        x1: v.x1,
                        x2: v.x2,
                        y1: v.y,
                        y2: v.y,
                        strokeWidth: 2
                      },
                      `ucl-${E}`
                    )),
                    z.ucl.map((v, E) => {
                      if (E === z.ucl.length - 1) return null;
                      const F = z.ucl[E + 1];
                      if (!F || v.y === F.y) return null;
                      const P = Math.max(4, F.x1 - v.x2 || 0) * 0.5, W = `M ${v.x2},${v.y} C ${v.x2 + P},${v.y} ${F.x1 - P},${F.y} ${F.x1},${F.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join",
                          d: W,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `ucl-join-${E}`
                      );
                    })
                  ]
                }
              ) : null,
              z?.lcl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--lcl",
                  children: [
                    z.lcl.map((v, E) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--lcl",
                        x1: v.x1,
                        x2: v.x2,
                        y1: v.y,
                        y2: v.y,
                        strokeWidth: 2
                      },
                      `lcl-${E}`
                    )),
                    z.lcl.map((v, E) => {
                      if (E === z.lcl.length - 1) return null;
                      const F = z.lcl[E + 1];
                      if (!F || v.y === F.y) return null;
                      const P = Math.max(4, F.x1 - v.x2 || 0) * 0.5, W = `M ${v.x2},${v.y} C ${v.x2 + P},${v.y} ${F.x1 - P},${F.y} ${F.x1},${F.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join",
                          d: W,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `lcl-join-${E}`
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
                    x2: G.range()[1],
                    y1: R(f),
                    y2: R(f),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: G.range()[0] - 7,
                    y: R(f) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      f,
                      " ",
                      I || S?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              p && z && z.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                z.onePos.map((v, E) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: v.x1,
                    x2: v.x2,
                    y1: v.y,
                    y2: v.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${E}`
                )),
                z.oneNeg.map((v, E) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: v.x1,
                    x2: v.x2,
                    y1: v.y,
                    y2: v.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${E}`
                )),
                z.twoPos.map((v, E) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: v.x1,
                    x2: v.x2,
                    y1: v.y,
                    y2: v.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${E}`
                )),
                z.twoNeg.map((v, E) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: v.x1,
                    x2: v.x2,
                    y1: v.y,
                    y2: v.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${E}`
                ))
              ] }),
              se && (x || M || D) && (() => {
                const v = se.detectedAt, E = se.firstFavourableCrossAt, F = X[v] ? G(
                  X[v].x instanceof Date ? X[v].x : new Date(X[v].x)
                ) : null, w = X[v] ? R(X[v].y) : null, P = E != null && X[E] ? G(
                  X[E].x instanceof Date ? X[E].x : new Date(X[E].x)
                ) : null, W = E != null && X[E] ? R(X[E].y) : null;
                return /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  D && F != null && w != null && P != null && W != null && /* @__PURE__ */ r.jsx(
                    "line",
                    {
                      x1: F,
                      y1: w,
                      x2: P,
                      y2: W,
                      stroke: "#888",
                      strokeDasharray: "4 4",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend bridge: start to first favourable-side point" })
                    }
                  ),
                  x && F != null && w != null && /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: F,
                      cy: w,
                      r: 6,
                      fill: "white",
                      stroke: "#555",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend start (run reached N)" })
                    }
                  ),
                  M && P != null && W != null && /* @__PURE__ */ r.jsx("circle", { cx: P, cy: W, r: 5, fill: "#555", children: /* @__PURE__ */ r.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ r.jsx(
                Sm,
                {
                  series: i[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (v) => v.x instanceof Date ? v.x : new Date(v.x),
                  smooth: !1,
                  strokeWidth: T
                }
              ),
              m && X.map((v, E) => {
                const F = G(v.x instanceof Date ? v.x : new Date(v.x)), w = R(v.y), P = Y.has(E), W = Q?.[E], V = ce[E], J = V === lt.Improvement, q = V === lt.Concern, he = V === lt.NoJudgement, pe = [
                  "fdp-spc__point",
                  P && y ? "fdp-spc__point--ooc" : null,
                  N && q ? "fdp-spc__point--sc-concern" : null,
                  N && J ? "fdp-spc__point--sc-improvement" : null,
                  N && j && he ? "fdp-spc__point--sc-no-judgement" : null,
                  W?.assurance === on.Pass ? "fdp-spc__point--assurance-pass" : null,
                  W?.assurance === on.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), ye = U?.focused?.index === E;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: F,
                    cy: w,
                    r: 5,
                    className: pe,
                    "data-variation": W?.variation,
                    "data-assurance": W?.assurance,
                    "aria-label": b,
                    ...ye ? { "aria-describedby": `spc-tooltip-${E}` } : {}
                  },
                  E
                );
              }),
              C && k && U?.focused && (() => {
                const v = U.focused, E = typeof v.index == "number" ? v.index : -1;
                if (E < 0 || !X[E]) return null;
                const F = G(
                  X[E].x instanceof Date ? X[E].x : new Date(X[E].x)
                ), w = R(X[E].y), P = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
                return /* @__PURE__ */ r.jsxs("g", { className: "fdp-spc__focus-indicator", "aria-hidden": "true", children: [
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: F,
                      cy: w,
                      r: 7,
                      fill: "none",
                      stroke: P,
                      strokeWidth: 3
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: F,
                      cy: w,
                      r: 5,
                      fill: "#000",
                      stroke: P,
                      strokeWidth: 1.5
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: F,
                      cy: w,
                      r: 2.5,
                      fill: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
                      stroke: "#fff",
                      strokeWidth: 0.5
                    }
                  )
                ] });
              })(),
              re && /* @__PURE__ */ r.jsx(
                ug,
                {
                  width: G.range()[1],
                  height: R.range()[0]
                }
              ),
              !k && /* @__PURE__ */ r.jsx(
                Jl,
                {
                  engineRows: l,
                  limits: { mean: u.mean, sigma: u.sigma },
                  pointDescriber: le,
                  measureName: S?.measureName,
                  measureUnit: S?.measureUnit,
                  dateFormatter: (v) => we(v),
                  enableNeutralNoJudgement: j,
                  showTrendGatingExplanation: B
                }
              )
            ] })
          }
        ),
        k && /* @__PURE__ */ r.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ r.jsx(
          og,
          {
            engineRows: l,
            measureName: S?.measureName,
            measureUnit: I || S?.measureUnit,
            onSignalFocus: L
          }
        ) }),
        _ && /* @__PURE__ */ r.jsx(
          _m,
          {
            format: (v) => Se({ ...v, x: v.x instanceof Date ? v.x : new Date(v.x) })
          }
        )
      ]
    }
  ) });
}, ug = ({
  width: e,
  height: t
}) => {
  const n = Kt();
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
function fg(e) {
  const { rows: t } = ur(e), n = Xs(e);
  return { rows: t, visuals: n.visuals };
}
const eo = 13;
function Xl(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => {
      switch (t) {
        case We.Improvement:
          return "improvement";
        case We.Concern:
          return "concern";
        case We.NoJudgement:
          return "neither";
        default:
          return null;
      }
    });
}
function Ql(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => t === We.NoJudgement);
}
function gi(e, t) {
  const n = e === St.G ? St.G : e === St.T ? St.T : St.XmR, a = t === Ae.Up ? Ae.Up : t === Ae.Down ? Ae.Down : Ae.Neither;
  return { chartType: n, metricImprovement: a };
}
function xi(e, t, n) {
  const a = typeof e?.minimumPoints == "number" && !isNaN(e.minimumPoints) ? e.minimumPoints : eo, s = { minimumPoints: a };
  return t.filter(
    (i) => !i.ghost && typeof i.value == "number"
  ).length >= a && (s.chartLevelEligibility = !0), e?.enableFourOfFiveRule != null && (s.enableFourOfFiveRule = !!e.enableFourOfFiveRule), n && Object.assign(s, n), Object.keys(s).length ? s : void 0;
}
function pg(e, t, n) {
  const a = O.useMemo(() => {
    if (!e || e.length < 2) return !1;
    const i = Math.min(e[0], e[1]), l = Math.max(e[0], e[1]);
    return !(0 >= i && 0 <= l);
  }, [e]), { slotPx: s, totalReservedPx: o } = O.useMemo(() => {
    if (!a) return { slotPx: 0, totalReservedPx: 0 };
    const l = (t ?? 260) - 60, d = vr, u = d + Eh, f = n?.maxFraction, m = Math.max(
      wr,
      Math.floor(l * f)
    ), p = Math.min(u, m);
    return { slotPx: Math.min(d, p), totalReservedPx: p };
  }, [a, t, n?.maxFraction]);
  return { show: a, slotPx: s, totalReservedPx: o };
}
function hg(e, t, n, a) {
  if (n.percentScale) {
    const d = e.map((f) => f.y), c = Math.max(100, ...d), u = Math.min(0, ...d);
    return [u < 0 ? u : 0, c > 100 ? c : 100];
  }
  const s = e.map((d) => d.y), o = (d) => {
    d != null && s.push(d);
  };
  if (o(t.mean), o(t.ucl), o(t.lcl), o(t.onePos), o(t.oneNeg), o(t.twoPos), o(t.twoNeg), a && a.length)
    for (const d of a)
      typeof d == "number" && !isNaN(d) && s.push(d);
  if (!s.length) return;
  let i = Math.min(...s), l = Math.max(...s);
  return n.alwaysShowZeroY && (i = Math.min(0, i)), n.alwaysShowHundredY && (l = Math.max(100, l)), [i, l];
}
function us(e, t) {
  if (!e?.length || t.chartType !== St.XmR) return null;
  const n = Math.max(2, Math.floor(t.shiftLength ?? 6)), a = [];
  for (let p = 0; p < e.length; p++) {
    const y = e[p], g = y.value;
    y?.ghost || typeof g == "number" && Number.isFinite(g) && a.push({ idx: p, value: g });
  }
  if (a.length < n * 2) return null;
  let s = 0, o = 0;
  for (let p = 1; p < a.length; p++)
    s += Math.abs(a[p].value - a[p - 1].value), o++;
  if (o === 0) return null;
  const l = s / o * (2.66 / 3);
  if (!Number.isFinite(l) || l <= 0) return null;
  const d = Math.max(0, t.deltaSigma ?? 0.5), c = t.metricImprovement === Ae.Up, u = t.metricImprovement === Ae.Down, f = (() => {
    for (let p = e.length - 1; p >= 0; p--) if (e[p]?.baseline) return p;
    return -1;
  })();
  function m(p, y) {
    let g = 0, h = 0;
    for (let T = p; T < y; T++)
      g += a[T].value, h++;
    return h ? g / h : NaN;
  }
  for (let p = n; p <= a.length - n; p++) {
    const y = m(p - n, p), g = m(p, p + n);
    if (!Number.isFinite(y) || !Number.isFinite(g)) continue;
    const h = g - y, T = h / l;
    let C = !1, N = !1;
    if (c ? (C = T >= d, N = !0) : u ? (C = -T >= d, N = !1) : (C = Math.abs(T) >= d, N = h > 0), !C) continue;
    const j = (D) => N ? D > y : D < y;
    let x = !0;
    for (let D = p; D < p + n; D++)
      if (!j(a[D].value)) {
        x = !1;
        break;
      }
    if (!x) continue;
    const M = a[p].idx;
    if (!(t.minGap && f >= 0 && M - f < t.minGap))
      return M;
  }
  return null;
}
function mg(e, t) {
  const n = us(e, t);
  return n == null ? e.slice() : e.map((a, s) => s === n ? { ...a, baseline: !0 } : a);
}
function gg(e, t) {
  const n = Math.max(1, Math.floor(t.maxInsertions ?? 1));
  if (n <= 1) return mg(e, t);
  let a = e.slice(), s = 0;
  const o = Math.max(1, t.minGap ?? 0);
  for (; s < n; ) {
    const i = us(a, { ...t, minGap: o });
    if (i == null) break;
    if (a[i]?.baseline) {
      const l = us(a, { ...t, minGap: o + 1 });
      if (l == null || l === i) break;
      a = a.map((d, c) => c === l ? { ...d, baseline: !0 } : d), s++;
      continue;
    }
    a = a.map((l, d) => d === i ? { ...l, baseline: !0 } : l), s++;
  }
  return a;
}
const xg = (e) => {
  const t = O.useCallback(
    ($e) => String($e).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Ie) => Ie.length ? Ie[0].toUpperCase() + Ie.slice(1) : Ie).join(" "),
    []
  ), n = O.useCallback(
    ($e) => String($e).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Pe) => Pe.length ? Pe[0].toUpperCase() + Pe.slice(1) : Pe).join(" "),
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
    effMetricImprovementCore: d,
    effEngineSettings: c,
    effAlwaysShowZeroY: u,
    effAlwaysShowHundredY: f,
    effPercentScale: m,
    effGradientSequences: p,
    effSequenceTransition: y,
    effProcessLineWidth: g,
    effTrendVisualMode: h,
    effShowTrendGatingExplanation: T,
    effEnableNeutralNoJudgement: C,
    effEnableRules: N,
    effShowPartitionMarkers: j,
    effShowTrendStartMarkers: x,
    effShowFirstFavourableCrossMarkers: M,
    effShowTrendBridgeOverlay: D,
    effShowSignalsInspector: _,
    effOnSignalFocus: b,
    effShowWarningsPanel: S,
    effWarningsFilter: k,
    effShowEmbeddedIcon: L,
    effEmbeddedIconVariant: B,
    effEmbeddedIconRunLength: $,
    effShowFocusIndicator: A,
    effHeight: I,
    effClassName: H,
    effAriaLabel: re,
    effUnit: G,
    effNarrationContext: R,
    effShowZones: K,
    effShowPoints: U,
    effHighlightOutOfControl: X,
    effVisualsScenario: Y,
    effVisualsEngineSettings: Q,
    effSource: ce,
    effPrecomputedVisuals: ie,
    effEngineAutoRecalc: ne
  } = lg(e), ee = re ?? e.ariaLabel, te = I ?? e.height ?? 260, se = H ?? e.className, z = G ?? e.unit, oe = R ?? e.narrationContext, ae = K ?? e.showZones, ue = U ?? e.showPoints, de = X ?? e.highlightOutOfControl, we = Y ?? e.visualsScenario ?? Ol.None, be = Q ?? e.visualsEngineSettings, Se = ce ?? e.source, le = e.a11y?.announceFocus ?? e.announceFocus ?? !1, Z = O.useMemo(() => a.map(($e, Pe) => ({
    x: $e.x,
    value: $e.y,
    target: s?.[Pe] ?? void 0,
    baseline: o?.[Pe] ?? void 0,
    ghost: i?.[Pe] ?? void 0
  })), [a, s, o, i]), v = O.useMemo(() => {
    try {
      const $e = ne;
      return $e?.enabled ? gg(Z, {
        chartType: l,
        metricImprovement: d,
        shiftLength: $e.shiftLength,
        deltaSigma: $e.deltaSigma,
        minGap: $e.minGap,
        maxInsertions: $e.maxInsertions
      }) : Z;
    } catch {
      return Z;
    }
  }, [Z, ne, l, d]), E = O.useMemo(() => {
    if (ie?.visuals) return ie.visuals;
    try {
      const $e = xi(
        c,
        v,
        be
      ), { chartType: Pe, metricImprovement: Ie } = gi(
        l,
        d
      ), xt = {
        chartType: Pe,
        metricImprovement: Ie,
        data: v,
        settings: $e
      }, { visuals: ft } = Wm(xt, we, {
        trendVisualMode: h === ql.Ungated ? Bn.Ungated : Bn.Gated,
        enableNeutralNoJudgement: C
      });
      return ft || [];
    } catch {
      return [];
    }
  }, [
    ie?.visuals?.length,
    v,
    l,
    d,
    h,
    C,
    c,
    we,
    be
  ]), w = O.useMemo(() => {
    if (ie?.rows)
      try {
        const $e = ie.rows, Pe = (Ie) => {
          switch (Ie) {
            case ke.ImprovementHigh:
            case ke.ImprovementLow:
              return Oe.Improvement;
            case ke.ConcernHigh:
            case ke.ConcernLow:
              return Oe.Concern;
            case ke.NeitherHigh:
            case ke.NeitherLow:
              return Oe.Neither;
            case ke.CommonCause:
            default:
              return Oe.Neither;
          }
        };
        return $e.map(
          (Ie, xt) => ({
            data: {
              value: Ie.value,
              ghost: !!Ie.ghost
            },
            partition: { id: Ie.partitionId },
            limits: {
              mean: Ie.mean,
              ucl: Ie.upperProcessLimit,
              lcl: Ie.lowerProcessLimit,
              oneSigma: { upper: Ie.upperOneSigma, lower: Ie.lowerOneSigma },
              twoSigma: { upper: Ie.upperTwoSigma, lower: Ie.lowerTwoSigma }
            },
            rules: {
              singlePoint: { up: !!Ie.singlePointUp, down: !!Ie.singlePointDown },
              twoOfThree: { up: !!Ie.twoSigmaUp, down: !!Ie.twoSigmaDown },
              fourOfFive: { up: !!Ie.fourOfFiveUp, down: !!Ie.fourOfFiveDown },
              shift: { up: !!Ie.shiftUp, down: !!Ie.shiftDown },
              trend: { up: !!Ie.trendUp, down: !!Ie.trendDown }
            },
            classification: {
              variation: Pe(Ie.variationIcon),
              neutralSpecialCauseValue: Ie.variationIcon === ke.NeitherHigh || Ie.variationIcon === ke.NeitherLow ? Ie.specialCauseImprovementValue ?? Ie.specialCauseConcernValue ?? 1 : null,
              assurance: void 0
            },
            target: v[xt]?.target ?? null
          })
        );
      } catch {
        return null;
      }
    try {
      const $e = xi(
        c,
        v,
        be
      ), { chartType: Pe, metricImprovement: Ie } = gi(
        l,
        d
      ), xt = {
        chartType: Pe,
        metricImprovement: Ie,
        data: v,
        settings: $e
      }, { rows: ft } = fg(xt), kt = (Ee) => {
        switch (Ee) {
          case ke.ImprovementHigh:
          case ke.ImprovementLow:
            return Oe.Improvement;
          case ke.ConcernHigh:
          case ke.ConcernLow:
            return Oe.Concern;
          case ke.NeitherHigh:
          case ke.NeitherLow:
            return Oe.Neither;
          case ke.CommonCause:
          default:
            return Oe.Neither;
        }
      };
      return ft.map(
        (Ee, jt) => ({
          data: {
            value: Ee.value,
            ghost: !!Ee.ghost
          },
          partition: { id: Ee.partitionId },
          limits: {
            mean: Ee.mean,
            ucl: Ee.upperProcessLimit,
            lcl: Ee.lowerProcessLimit,
            oneSigma: { upper: Ee.upperOneSigma, lower: Ee.lowerOneSigma },
            twoSigma: { upper: Ee.upperTwoSigma, lower: Ee.lowerTwoSigma }
          },
          rules: {
            singlePoint: { up: !!Ee.singlePointUp, down: !!Ee.singlePointDown },
            twoOfThree: { up: !!Ee.twoSigmaUp, down: !!Ee.twoSigmaDown },
            fourOfFive: { up: !!Ee.fourOfFiveUp, down: !!Ee.fourOfFiveDown },
            shift: { up: !!Ee.shiftUp, down: !!Ee.shiftDown },
            trend: { up: !!Ee.trendUp, down: !!Ee.trendDown }
          },
          classification: {
            variation: kt(Ee.variationIcon),
            neutralSpecialCauseValue: Ee.variationIcon === ke.NeitherHigh || Ee.variationIcon === ke.NeitherLow ? Ee.specialCauseImprovementValue ?? Ee.specialCauseConcernValue ?? 1 : null,
            assurance: void 0
          },
          target: v[jt]?.target ?? null
        })
      );
    } catch {
      return null;
    }
  }, [
    ie?.rows?.length,
    v,
    l,
    d,
    c,
    be
  ]) || null, P = (w || []).slice().reverse().find(($e) => $e.limits.mean != null), W = P?.limits.mean ?? null, V = O.useMemo(() => {
    const $e = [];
    try {
      const Pe = w, Ie = c?.minimumPoints ?? 13, xt = c?.minimumPoints ?? 12;
      if (Pe && Pe.length) {
        const ft = Pe.filter(
          (Ee) => !Ee.data.ghost && Ee.data.value != null
        ).length;
        ft < Ie && $e.push({
          code: zr.InsufficientPointsGlobal,
          severity: Tt.Warning,
          category: Hr.Data,
          message: "Not enough non-ghost points to compute stable limits/icons.",
          context: { nonGhostCount: ft, minimumPoints: Ie }
        });
        const kt = /* @__PURE__ */ new Map();
        for (const Ee of Pe) {
          const jt = Ee.partition.id ?? 0, en = kt.get(jt) || { size: 0, nonGhost: 0 };
          en.size += 1, !Ee.data.ghost && Ee.data.value != null && (en.nonGhost += 1), kt.set(jt, en);
        }
        for (const [Ee, jt] of kt)
          jt.nonGhost > 0 && jt.nonGhost < xt && $e.push({
            code: zr.InsufficientPointsPartition,
            severity: Tt.Warning,
            category: Hr.Partition,
            message: "A partition/baseline segment has too few points for recommended stability.",
            context: {
              partitionId: Ee,
              nonGhostCount: jt.nonGhost,
              minimumPointsPartition: xt
            }
          });
      }
    } catch {
    }
    return $e;
  }, [w, c?.minimumPoints]), J = O.useMemo(() => V.length ? k ? V.filter(($e) => !(k.severities && $e.severity && !k.severities.includes($e.severity) || k.categories && $e.category && !k.categories.includes($e.category) || k.codes && !k.codes.includes($e.code))) : V : [], [V, k]), q = P?.limits.ucl ?? null, he = P?.limits.lcl ?? null, pe = P?.limits.oneSigma.upper ?? null, ye = P?.limits.oneSigma.lower ?? null, _e = P?.limits.twoSigma.upper ?? null, me = P?.limits.twoSigma.lower ?? null, Te = W != null && pe != null ? Math.abs(pe - W) : 0, Re = O.useMemo(
    () => [{ id: "process", data: a, color: "#A6A6A6" }],
    [a]
  ), Ge = O.useMemo(
    () => hg(
      a,
      { mean: W, ucl: q, lcl: he, onePos: pe, oneNeg: ye, twoPos: _e, twoNeg: me },
      {
        alwaysShowZeroY: !!u,
        alwaysShowHundredY: !!f,
        percentScale: !!m
      },
      s ?? null
    ),
    [
      a,
      W,
      q,
      he,
      pe,
      ye,
      _e,
      me,
      s,
      u,
      f,
      m
    ]
  ), Be = O.useMemo(() => {
    const $e = (Pe) => {
      const Ie = Pe.filter(
        (ft) => typeof ft == "number" && !isNaN(ft)
      );
      if (!Ie.length) return null;
      const xt = Ie[0];
      return Ie.every((ft) => ft === xt) ? xt : null;
    };
    if (w && w.length) {
      const Pe = $e(w.map((Ie) => Ie.target));
      if (Pe != null) return Pe;
    }
    return s && s.length ? $e(s) : null;
  }, [w, s]), { show: nt, slotPx: Je, totalReservedPx: it } = pg(
    Ge,
    te,
    { maxFraction: 0.35 }
  ), st = nt ? it : 0, tt = O.useMemo(() => {
    const $e = a.map((Pe) => Pe.x);
    return Zl({
      values: a.map((Pe) => Pe.y),
      dates: $e,
      providedUnit: z || oe?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [a, z, oe?.measureUnit]), Xe = z ?? oe?.measureUnit ?? tt.unit, At = O.useMemo(() => Xe ? { ...oe || {}, measureUnit: Xe } : oe, [oe, Xe]), fr = O.useMemo(() => {
    if (!w) return [];
    const $e = [];
    for (let Pe = 1; Pe < w.length; Pe++)
      w[Pe].partition.id !== w[Pe - 1].partition.id && $e.push(Pe);
    return $e;
  }, [w]), cn = O.useMemo(
    () => sg({
      show: !!L,
      rowsForUi: w,
      minPoints: c?.minimumPoints ?? 13,
      metricImprovement: d,
      variant: B,
      runLength: $
    }),
    [
      L,
      w,
      c?.minimumPoints,
      d,
      B,
      $
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: se ? `fdp-spc-chart-wrapper ${se}` : "fdp-spc-chart-wrapper",
      children: [
        /* @__PURE__ */ r.jsx(
          rg,
          {
            show: !!L,
            variationNode: cn,
            assuranceNode: null
          }
        ),
        /* @__PURE__ */ r.jsx(
          $h,
          {
            height: te,
            ariaLabel: ee,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            children: /* @__PURE__ */ r.jsx(Ah, { series: Re, yDomain: Ge, yBottomGapPx: st, children: (() => {
              const $e = {
                data: {
                  series: Re,
                  engineRows: w,
                  visualCategories: E,
                  partitionMarkers: j ? fr : []
                },
                targets: {
                  limits: { mean: W, ucl: q, lcl: he, sigma: Te, onePos: pe, oneNeg: ye, twoPos: _e, twoNeg: me },
                  uniformTarget: Be
                },
                visuals: {
                  showPoints: ue,
                  showZones: ae,
                  highlightOutOfControl: de,
                  gradientSequences: p,
                  sequenceTransition: y,
                  processLineWidth: g,
                  showFocusIndicator: A,
                  enableRules: N,
                  enableNeutralNoJudgement: C,
                  showTrendStartMarkers: x,
                  showFirstFavourableCrossMarkers: M,
                  showTrendBridgeOverlay: D
                },
                a11y: {
                  announceFocus: le,
                  ariaLabel: ee,
                  narrationContext: At,
                  showSignalsInspector: _,
                  onSignalFocus: b,
                  showTrendGatingExplanation: T
                },
                axis: { zeroBreakSlotGapPx: Je },
                compute: { effectiveUnit: Xe, metricImprovement: d }
              };
              return /* @__PURE__ */ r.jsx(dg, { ...$e });
            })() })
          }
        ),
        Se && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof Se == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          Se
        ] }) : Se }),
        /* @__PURE__ */ r.jsx(
          ng,
          {
            show: !!S,
            warnings: J,
            formatWarningCategory: n,
            formatWarningCode: t
          }
        )
      ]
    }
  );
};
function bg(e, t) {
  const {
    chartType: n = St.XmR,
    metricImprovement: a,
    minimumPoints: s = eo,
    enableNeutralNoJudgement: o = !0,
    includeSignalFallbacks: i = !0
  } = t, l = e.map((C) => ({ x: C.x, value: C.value ?? C.y ?? null }));
  let d = null;
  try {
    const C = l.filter(
      (j) => typeof j.value == "number"
    ).length, N = { minimumPoints: s };
    C >= s && (N.chartLevelEligibility = !0), d = ur({ chartType: n, metricImprovement: a, data: l, settings: N });
  } catch {
    d = null;
  }
  const c = d?.rows ?? [];
  let u = c[c.length - 1] ?? null;
  for (let C = c.length - 1; C >= 0; C--) {
    const N = c[C];
    if (N && N.value != null && !N.ghost) {
      u = N;
      break;
    }
  }
  let f = [];
  try {
    f = dr(c, {
      metricImprovement: a,
      enableNeutralNoJudgement: o
    });
  } catch {
    f = [];
  }
  const m = Or(
    u?.variationIcon
  ), p = u?.mean ?? null, y = u ? {
    lower: u?.lowerProcessLimit ?? null,
    upper: u?.upperProcessLimit ?? null
  } : null, g = u ? {
    upperOne: u?.upperOneSigma ?? null,
    upperTwo: u?.upperTwoSigma ?? null,
    lowerOne: u?.lowerOneSigma ?? null,
    lowerTwo: u?.lowerTwoSigma ?? null
  } : null;
  let h, T;
  return i && (h = Xl(f), T = Ql(f)), {
    rows: c,
    visuals: f,
    latestState: m,
    centerLine: p,
    controlLimits: y,
    sigmaBands: g,
    pointSignals: h,
    pointNeutralSpecialCause: T
  };
}
const Jy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: on,
  BaselineSuggestionReason: Pl,
  ChartType: St,
  DEFAULT_MIN_POINTS: eo,
  Icons: ag,
  ImprovementDirection: Ae,
  PARITY_V26: Ul,
  RULE_METADATA: El,
  SPCChart: xg,
  SPCTooltipOverlay: Jl,
  SpcEmbeddedIconVariant: gn,
  SpcVisualCategory: We,
  SpcWarningCategory: Hr,
  SpcWarningCode: zr,
  SpcWarningSeverity: Tt,
  VARIATION_COLOR_TOKENS: Nt,
  VariationIcon: ke,
  buildSpcV26a: ur,
  buildSpcV26aWithVisuals: Xs,
  computeSpcPrecomputed: bg,
  computeSpcVisualCategories: dr,
  extractRuleIds: wa,
  getVariationColorHex: Im,
  getVariationColorToken: Rl,
  isSpecialCauseIcon: Yl,
  mapIconToVariation: Or,
  normaliseSpcSettingsV2: zl,
  ruleGlossary: An,
  variationLabel: Sa,
  visualsToNeutralFlags: Ql,
  visualsToPointSignals: Xl,
  withParityV26: Gm
}, Symbol.toStringTag, { value: "Module" })), yg = "150ms", vg = "300ms", wg = "500ms", Sg = "cubic-bezier(0.4, 0, 1, 1)", _g = "cubic-bezier(0, 0, 0.2, 1)", kg = "cubic-bezier(0.4, 0, 0.2, 1)", Cg = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Ng = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", jg = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Mg = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Ig = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Dg = "1px", Tg = "2px", Lg = "4px", $g = "4px", Ag = "4px", Eg = "2px", Pg = "1px", Fg = "0px", Rg = "4px", Bg = "8px", Hg = "12px", Kl = "#d8dde0", ec = "#4c6272", tc = "#d8dde0", nc = "#aeb7bd", rc = "#d5281b", ac = "#005eb8", sc = "#ffffff", oc = "#212b32", ic = "#007f3b", lc = "#330072", cc = "#7c2855", dc = "#d5281b", uc = "#ffeb3b", fc = "#fff9c4", pc = "#ffb81c", hc = "#ed8b00", mc = "#00a499", gc = "#ae2573", xc = "#4c6272", bc = "#768692", yc = "#aeb7bd", vc = "#d8dde0", wc = "#f0f4f5", zg = "#212b32", Og = "#4c6272", Ug = "#ffffff", Wg = "#212b32", Gg = "#005eb8", Vg = "#7c2855", Yg = "#003087", Zg = "#330072", Jg = "#ffeb3b", qg = "#212b32", Xg = "#d8dde0", Qg = "#ffffff33", Kg = "#d5281b", e0 = "#4c6272", t0 = "#ffffff", n0 = "#007f3b", r0 = "#ffffff", a0 = "#006530", s0 = "#004021", o0 = "#004021", i0 = "#00000000", l0 = "#ffffff", c0 = "#005eb8", d0 = "#005eb8", u0 = "#d9e5f2", f0 = "#c7daf0", p0 = "#005eb8", h0 = "#ffffff", m0 = "#212b32", g0 = "#d9dde0", x0 = "#b3bcc2", b0 = "#b3bcc2", y0 = "#d5281b", v0 = "#aa2016", w0 = "#6a140e", S0 = "#6a140e", _0 = "#005eb8", k0 = "#004b93", C0 = "#002f5c", N0 = "#002f5c", j0 = "8px", M0 = "16px", I0 = "12px", D0 = "16px", T0 = "4px", L0 = "40px", $0 = "4px", A0 = "40px", E0 = "12px", P0 = "16px", F0 = "32px", R0 = "16px", B0 = "20px", H0 = "28px", z0 = "9px", O0 = "2px", U0 = "16px", W0 = "24px", G0 = "8px", V0 = "24px", Y0 = "16px", Z0 = "4px", J0 = "4px", q0 = "4px", X0 = "8px", Q0 = "4px", K0 = "16px", ex = "#007f3b", tx = "#006530", nx = "#004021", rx = "#d8dde0", ax = "#ffffff", sx = "#768692", ox = "#00000000", ix = "#ffeb3b", lx = "#00000000", cx = "#ffffff", dx = "#d9e5f2", ux = "#c7daf0", fx = "#005eb8", px = "#005eb8", Sc = "8px", _c = "16px", kc = "12px", Cc = "16px", hx = "2px", mx = "4px", gx = "4px", xx = "600", bx = "#ffffff", yx = "#d8dde0", vx = "#aeb7bd", wx = "#f0f4f5", Sx = "#212b32", _x = "#212b32", kx = "#005eb8", Nc = "16px", jc = "32px", Mc = "16px", Cx = "1px", Nx = "4px", jx = "none", Mx = "0 2px 4px rgba(0, 0, 0, 0.1)", Ix = "#ffffff", Dx = "#ffffff", Tx = "#d8dde0", Lx = "#ffffff", $x = "#4c6272", Ax = "#ffeb3b", Ex = "#d5281b", Px = "#aeb7bd", Fx = "#212b32", Rx = "#4c6272", Bx = "#768692", Hx = "#212b32", zx = "#ffffff", Ox = "600", Ux = "#d5281b", Wx = "600", Gx = "#4c6272", Ic = "4px", Dc = "40px", Tc = "40px", Lc = "12px", Vx = "2px", Yx = "4px", Zx = "0px", Jx = "16px", qx = "18px", Xx = "24px", Qx = "32px", Kx = "34px", eb = "32px", tb = "40px", nb = "48px", rb = "5.4ex", ab = "7.2ex", sb = "9ex", ob = "10.8ex", ib = "20ex", lb = "38ex", cb = "56ex", db = "44px", ub = "40px", fb = "1020px", pb = "100%", hb = "50%", mb = "33.333%", gb = "25%", xb = "20%", bb = "320px", yb = "641px", vb = "1025px", wb = "1280px", Sb = "960px", _b = "32px", kb = "16px", Cb = "#d5281b", Nb = "#d5281b", jb = "#ffffff", Mb = "#007f3b", Ib = "#007f3b", Db = "#ffffff", Tb = "#ffeb3b", Lb = "#ffeb3b", $b = "#212b32", Ab = "#005eb8", Eb = "#005eb8", Pb = "#ffffff", Fb = "#d8dde0", Rb = "#aeb7bd", Bb = "#768692", Hb = "0 4px 0 #004021", zb = "0 4px 0 #005eb8", Ob = "0 4px 0 #6a140e", Ub = "0 4px 0 #ffeb3b", Wb = "none", Gb = "0 2px 4px rgba(0, 0, 0, 0.1)", Vb = "4px", Yb = "0px", Zb = "solid", Jb = "0 0 0 3px #ffeb3b", qb = "0 0 0 3px #ffeb3b", Xb = "none", Qb = "0 1px 3px rgba(0, 0, 0, 0.12)", Kb = "0 2px 6px rgba(0, 0, 0, 0.16)", ey = "0 4px 12px rgba(0, 0, 0, 0.20)", $c = "0", Ac = "4px", Ec = "8px", Pc = "16px", Fc = "24px", Rc = "32px", Bc = "40px", Hc = "48px", zc = "56px", Oc = "64px", fs = "0", ps = "0", hs = "4px", ms = "4px", gs = "8px", xs = "8px", bs = "8px", ys = "16px", vs = "16px", ws = "24px", Ss = "24px", _s = "32px", ks = "32px", Cs = "40px", Ns = "40px", js = "48px", Ms = "48px", Is = "56px", Ds = "56px", Ts = "64px", Ur = "Frutiger W01", Wr = "Arial, Helvetica, sans-serif", Gr = "sans-serif", Vr = "400", Yr = "600", Zr = "400", Jr = "12px", qr = "14px", Xr = "12pt", Qr = "14px", Kr = "16px", ea = "12pt", ta = "16px", na = "19px", ra = "13pt", aa = "19px", sa = "22px", oa = "15pt", ia = "22px", la = "26px", ca = "17pt", da = "27px", ua = "36px", fa = "20pt", pa = "33px", ha = "48px", ma = "24pt", Ls = "16px", $s = "24px", Ft = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Rt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Bt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ht = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, zt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ot = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ut = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Gt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Vt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, ty = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: yg,
  AnimationDurationNormal: vg,
  AnimationDurationSlow: wg,
  AnimationEasingBounce: Cg,
  AnimationEasingEaseIn: Sg,
  AnimationEasingEaseInOut: kg,
  AnimationEasingEaseOut: _g,
  BorderColorCard: tc,
  BorderColorCardHover: nc,
  BorderColorDefault: Kl,
  BorderColorError: rc,
  BorderColorForm: ec,
  BorderRadiusLarge: Hg,
  BorderRadiusMedium: Bg,
  BorderRadiusNone: Fg,
  BorderRadiusSmall: Rg,
  BorderWidthCardBottom: $g,
  BorderWidthDefault: Dg,
  BorderWidthFormElement: Tg,
  BorderWidthFormElementError: Lg,
  BorderWidthPanel: Ag,
  BorderWidthTableCell: Pg,
  BorderWidthTableHeader: Eg,
  BreakpointDesktop: vb,
  BreakpointLargeDesktop: wb,
  BreakpointMobile: bb,
  BreakpointTablet: yb,
  ButtonBorderRadius: mx,
  ButtonBorderWidth: hx,
  ButtonPrimaryBackgroundActive: nx,
  ButtonPrimaryBackgroundDefault: ex,
  ButtonPrimaryBackgroundDisabled: rx,
  ButtonPrimaryBackgroundHover: tx,
  ButtonPrimaryBorderDefault: ox,
  ButtonPrimaryBorderFocus: ix,
  ButtonPrimaryTextDefault: ax,
  ButtonPrimaryTextDisabled: sx,
  ButtonSecondaryBackgroundActive: ux,
  ButtonSecondaryBackgroundDefault: lx,
  ButtonSecondaryBackgroundHover: dx,
  ButtonSecondaryBackgroundSolid: cx,
  ButtonSecondaryBorderDefault: px,
  ButtonSecondaryTextDefault: fx,
  ButtonShadowSize: gx,
  ButtonSpacingPaddingHorizontalDesktop: Cc,
  ButtonSpacingPaddingHorizontalMobile: _c,
  ButtonSpacingPaddingVerticalDesktop: kc,
  ButtonSpacingPaddingVerticalMobile: Sc,
  ButtonTypographyWeight: xx,
  CardBackgroundDefault: bx,
  CardBorderBottom: wx,
  CardBorderDefault: yx,
  CardBorderHover: vx,
  CardBorderWidthBottom: Nx,
  CardBorderWidthDefault: Cx,
  CardShadowDefault: jx,
  CardShadowHover: Mx,
  CardSpacingHeadingMargin: Mc,
  CardSpacingPaddingDesktop: jc,
  CardSpacingPaddingMobile: Nc,
  CardTextDescription: _x,
  CardTextHeading: Sx,
  CardTextLink: kx,
  ColorBorderDefault: Xg,
  ColorBorderSecondary: Qg,
  ColorButtonLoginActive: C0,
  ColorButtonLoginBackground: _0,
  ColorButtonLoginHover: k0,
  ColorButtonLoginShadow: N0,
  ColorButtonPrimaryActive: s0,
  ColorButtonPrimaryBackground: n0,
  ColorButtonPrimaryHover: a0,
  ColorButtonPrimaryShadow: o0,
  ColorButtonPrimaryText: r0,
  ColorButtonReverseActive: x0,
  ColorButtonReverseBackground: h0,
  ColorButtonReverseHover: g0,
  ColorButtonReverseShadow: b0,
  ColorButtonReverseText: m0,
  ColorButtonSecondaryActive: f0,
  ColorButtonSecondaryBackground: i0,
  ColorButtonSecondaryBackgroundSolid: l0,
  ColorButtonSecondaryBorder: c0,
  ColorButtonSecondaryHover: u0,
  ColorButtonSecondaryShadow: p0,
  ColorButtonSecondaryText: d0,
  ColorButtonWarningActive: w0,
  ColorButtonWarningBackground: y0,
  ColorButtonWarningHover: v0,
  ColorButtonWarningShadow: S0,
  ColorError: Kg,
  ColorFocusBackground: Jg,
  ColorFocusText: qg,
  ColorFormBackground: t0,
  ColorFormBorder: e0,
  ColorGrey1: xc,
  ColorGrey2: bc,
  ColorGrey3: yc,
  ColorGrey4: vc,
  ColorGrey5: wc,
  ColorLinkActive: Yg,
  ColorLinkDefault: Gg,
  ColorLinkHover: Vg,
  ColorLinkVisited: Zg,
  ColorPrimaryBlack: oc,
  ColorPrimaryBlue: ac,
  ColorPrimaryDarkPink: cc,
  ColorPrimaryGreen: ic,
  ColorPrimaryPurple: lc,
  ColorPrimaryRed: dc,
  ColorPrimaryWhite: sc,
  ColorPrimaryYellow: uc,
  ColorSecondaryAquaGreen: mc,
  ColorSecondaryOrange: hc,
  ColorSecondaryPaleYellow: fc,
  ColorSecondaryPink: gc,
  ColorSecondaryWarmYellow: pc,
  ColorTextPrimary: zg,
  ColorTextPrint: Wg,
  ColorTextReverse: Ug,
  ColorTextSecondary: Og,
  ComponentBlur: J0,
  ComponentBreadcrumbChevronMarginLeft: z0,
  ComponentBreadcrumbChevronMarginRight: O0,
  ComponentBreadcrumbPaddingTopDesktop: W0,
  ComponentBreadcrumbPaddingTopMobile: U0,
  ComponentButtonPaddingDesktopHorizontal: D0,
  ComponentButtonPaddingDesktopVertical: I0,
  ComponentButtonPaddingMobileHorizontal: M0,
  ComponentButtonPaddingMobileVertical: j0,
  ComponentButtonShadowSize: T0,
  ComponentCardHeadingMargin: R0,
  ComponentCardPaddingDesktop: F0,
  ComponentCardPaddingMobile: P0,
  ComponentDetails: X0,
  ComponentExpander: Q0,
  ComponentFormCheckboxLabelPadding: E0,
  ComponentFormCheckboxSize: A0,
  ComponentFormInputMinHeight: L0,
  ComponentFormInputPadding: $0,
  ComponentLink: q0,
  ComponentPagination: K0,
  ComponentPanelPaddingDesktop: H0,
  ComponentPanelPaddingMobile: B0,
  ComponentSpread: Z0,
  ComponentSummaryListCellPaddingHorizontal: V0,
  ComponentSummaryListCellPaddingVertical: G0,
  ComponentSummaryListRowMargin: Y0,
  ElevationHigh: ey,
  ElevationLow: Qb,
  ElevationMedium: Kb,
  ElevationNone: Xb,
  FocusOutlineOffset: Yb,
  FocusOutlineStyle: Zb,
  FocusOutlineWidth: Vb,
  FocusShadowButton: qb,
  FocusShadowInput: Jb,
  FontFamilyBase: Ur,
  FontFamilyFallback: Wr,
  FontFamilyPrint: Gr,
  FontLineHeightBase: $s,
  FontSize14Mobile: Jr,
  FontSize14Print: Xr,
  FontSize14Tablet: qr,
  FontSize16Mobile: Qr,
  FontSize16Print: ea,
  FontSize16Tablet: Kr,
  FontSize19Mobile: ta,
  FontSize19Print: ra,
  FontSize19Tablet: na,
  FontSize22Mobile: aa,
  FontSize22Print: oa,
  FontSize22Tablet: sa,
  FontSize26Mobile: ia,
  FontSize26Print: ca,
  FontSize26Tablet: la,
  FontSize36Mobile: da,
  FontSize36Print: fa,
  FontSize36Tablet: ua,
  FontSize48Mobile: pa,
  FontSize48Print: ma,
  FontSize48Tablet: ha,
  FontSizeBase: Ls,
  FontWeightBold: Yr,
  FontWeightLight: Zr,
  FontWeightNormal: Vr,
  FormBorderRadius: Zx,
  FormBorderWidthDefault: Vx,
  FormBorderWidthError: Yx,
  FormErrorTextDefault: Ux,
  FormErrorTypographyWeight: Wx,
  FormHintTextDefault: Gx,
  FormInputBackgroundDefault: Ix,
  FormInputBackgroundDisabled: Tx,
  FormInputBackgroundError: Lx,
  FormInputBackgroundFocus: Dx,
  FormInputBorderDefault: $x,
  FormInputBorderDisabled: Px,
  FormInputBorderError: Ex,
  FormInputBorderFocus: Ax,
  FormInputTextDefault: Fx,
  FormInputTextDisabled: Bx,
  FormInputTextPlaceholder: Rx,
  FormLabelTextDefault: Hx,
  FormLabelTextRequired: zx,
  FormLabelTypographyWeight: Ox,
  FormSpacingCheckboxLabelPadding: Lc,
  FormSpacingCheckboxSize: Tc,
  FormSpacingInputMinHeight: Dc,
  FormSpacingInputPadding: Ic,
  GridGutter: _b,
  GridGutterHalf: kb,
  GridPageWidth: Sb,
  HeadingsNhsukHeadingL: Rt,
  HeadingsNhsukHeadingM: Bt,
  HeadingsNhsukHeadingS: Ht,
  HeadingsNhsukHeadingXl: Ft,
  HeadingsNhsukHeadingXs: zt,
  LayoutColumnActions: xb,
  LayoutColumnFull: pb,
  LayoutColumnHalf: hb,
  LayoutColumnQuarter: gb,
  LayoutColumnThird: mb,
  LayoutContainerMaxWidth: fb,
  ParagraphsBody: Ot,
  ParagraphsBodyLarge: Ut,
  ParagraphsBodySmall: Wt,
  ParagraphsLedeText: Gt,
  ParagraphsLedeTextSmall: Vt,
  ShadowButtonDefault: Hb,
  ShadowButtonFocus: Ub,
  ShadowButtonSecondary: zb,
  ShadowButtonWarning: Ob,
  ShadowCardDefault: Wb,
  ShadowCardHover: Gb,
  SizeButtonMinHeightDesktop: ub,
  SizeButtonMinHeightMobile: db,
  SizeFormControlLarge: nb,
  SizeFormControlMedium: tb,
  SizeFormControlSmall: eb,
  SizeFormInputWidth2xl: lb,
  SizeFormInputWidth3xl: cb,
  SizeFormInputWidthLg: ob,
  SizeFormInputWidthMd: sb,
  SizeFormInputWidthSm: ab,
  SizeFormInputWidthXl: ib,
  SizeFormInputWidthXs: rb,
  SizeIconExtraLarge: Qx,
  SizeIconLarge: Xx,
  SizeIconMedium: qx,
  SizeIconNhsDefault: Kx,
  SizeIconSmall: Jx,
  Spacing0: $c,
  Spacing1: Ac,
  Spacing2: Ec,
  Spacing3: Pc,
  Spacing4: Fc,
  Spacing5: Rc,
  Spacing6: Bc,
  Spacing7: Hc,
  Spacing8: zc,
  Spacing9: Oc,
  SpacingResponsive0Mobile: fs,
  SpacingResponsive0Tablet: ps,
  SpacingResponsive1Mobile: hs,
  SpacingResponsive1Tablet: ms,
  SpacingResponsive2Mobile: gs,
  SpacingResponsive2Tablet: xs,
  SpacingResponsive3Mobile: bs,
  SpacingResponsive3Tablet: ys,
  SpacingResponsive4Mobile: vs,
  SpacingResponsive4Tablet: ws,
  SpacingResponsive5Mobile: Ss,
  SpacingResponsive5Tablet: _s,
  SpacingResponsive6Mobile: ks,
  SpacingResponsive6Tablet: Cs,
  SpacingResponsive7Mobile: Ns,
  SpacingResponsive7Tablet: js,
  SpacingResponsive8Mobile: Ms,
  SpacingResponsive8Tablet: Is,
  SpacingResponsive9Mobile: Ds,
  SpacingResponsive9Tablet: Ts,
  StateDisabledBackground: Fb,
  StateDisabledBorder: Rb,
  StateDisabledText: Bb,
  StateErrorBackground: Cb,
  StateErrorBorder: Nb,
  StateErrorText: jb,
  StateInfoBackground: Ab,
  StateInfoBorder: Eb,
  StateInfoText: Pb,
  StateSuccessBackground: Mb,
  StateSuccessBorder: Ib,
  StateSuccessText: Db,
  StateWarningBackground: Tb,
  StateWarningBorder: Lb,
  StateWarningText: $b,
  TransitionButtonDefault: Ng,
  TransitionButtonShadow: jg,
  TransitionCardHover: Ig,
  TransitionInputFocus: Mg
}, Symbol.toStringTag, { value: "Module" })), qy = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Xy = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: Ft.fontFamily,
      fontWeight: Ft.fontWeight,
      fontSize: Ft.fontSize.mobile,
      lineHeight: Ft.lineHeight,
      marginTop: Ft.marginTop,
      marginBottom: Ft.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Qy = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: Rt.fontFamily,
      fontWeight: Rt.fontWeight,
      fontSize: Rt.fontSize.mobile,
      lineHeight: Rt.lineHeight,
      marginTop: Rt.marginTop,
      marginBottom: Rt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Ky = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h3",
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
), e1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h4",
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
), t1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h5",
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
), n1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
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
), r1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
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
), a1 = ({
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
), s1 = ({
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
), o1 = ({
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
), i1 = () => De(() => ty, []), l1 = () => De(() => ({
  // Border colors
  BorderColorDefault: Kl,
  BorderColorForm: ec,
  BorderColorCard: tc,
  BorderColorCardHover: nc,
  BorderColorError: rc,
  // Primary colors
  ColorPrimaryBlue: ac,
  ColorPrimaryWhite: sc,
  ColorPrimaryBlack: oc,
  ColorPrimaryGreen: ic,
  ColorPrimaryPurple: lc,
  ColorPrimaryDarkPink: cc,
  ColorPrimaryRed: dc,
  ColorPrimaryYellow: uc,
  // Secondary colors
  ColorSecondaryPaleYellow: fc,
  ColorSecondaryWarmYellow: pc,
  ColorSecondaryOrange: hc,
  ColorSecondaryAquaGreen: mc,
  ColorSecondaryPink: gc,
  // Grey scale
  ColorGrey1: xc,
  ColorGrey2: bc,
  ColorGrey3: yc,
  ColorGrey4: vc,
  ColorGrey5: wc
}), []), c1 = () => De(() => ({
  Spacing0: $c,
  Spacing1: Ac,
  Spacing2: Ec,
  Spacing3: Pc,
  Spacing4: Fc,
  Spacing5: Rc,
  Spacing6: Bc,
  Spacing7: Hc,
  Spacing8: zc,
  Spacing9: Oc
}), []), d1 = () => De(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Jr,
    Size16: Qr,
    Size19: ta,
    Size22: aa,
    Size26: ia,
    Size36: da,
    Size48: pa
  },
  Tablet: {
    Size14: qr,
    Size16: Kr,
    Size19: na,
    Size22: sa,
    Size26: la,
    Size36: ua,
    Size48: ha
  },
  Print: {
    Size14: Xr,
    Size16: ea,
    Size19: ra,
    Size22: oa,
    Size26: ca,
    Size36: fa,
    Size48: ma
  },
  Family: {
    Base: Ur,
    Fallback: Wr,
    Print: Gr
  },
  Weight: {
    Normal: Vr,
    Bold: Yr,
    Light: Zr
  },
  Base: {
    Size: Ls,
    LineHeight: $s
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Ur,
  FontFamilyFallback: Wr,
  FontFamilyPrint: Gr,
  FontWeightNormal: Vr,
  FontWeightBold: Yr,
  FontWeightLight: Zr,
  FontSize14Mobile: Jr,
  FontSize14Tablet: qr,
  FontSize14Print: Xr,
  FontSize16Mobile: Qr,
  FontSize16Tablet: Kr,
  FontSize16Print: ea,
  FontSize19Mobile: ta,
  FontSize19Tablet: na,
  FontSize19Print: ra,
  FontSize22Mobile: aa,
  FontSize22Tablet: sa,
  FontSize22Print: oa,
  FontSize26Mobile: ia,
  FontSize26Tablet: la,
  FontSize26Print: ca,
  FontSize36Mobile: da,
  FontSize36Tablet: ua,
  FontSize36Print: fa,
  FontSize48Mobile: pa,
  FontSize48Tablet: ha,
  FontSize48Print: ma,
  FontSizeBase: Ls,
  FontLineHeightBase: $s
}), []), u1 = () => De(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: fs,
    Size1: hs,
    Size2: gs,
    Size3: bs,
    Size4: vs,
    Size5: Ss,
    Size6: ks,
    Size7: Ns,
    Size8: Ms,
    Size9: Ds
  },
  Tablet: {
    Size0: ps,
    Size1: ms,
    Size2: xs,
    Size3: ys,
    Size4: ws,
    Size5: _s,
    Size6: Cs,
    Size7: js,
    Size8: Is,
    Size9: Ts
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: fs,
  SpacingResponsive0Tablet: ps,
  SpacingResponsive1Mobile: hs,
  SpacingResponsive1Tablet: ms,
  SpacingResponsive2Mobile: gs,
  SpacingResponsive2Tablet: xs,
  SpacingResponsive3Mobile: bs,
  SpacingResponsive3Tablet: ys,
  SpacingResponsive4Mobile: vs,
  SpacingResponsive4Tablet: ws,
  SpacingResponsive5Mobile: Ss,
  SpacingResponsive5Tablet: _s,
  SpacingResponsive6Mobile: ks,
  SpacingResponsive6Tablet: Cs,
  SpacingResponsive7Mobile: Ns,
  SpacingResponsive7Tablet: js,
  SpacingResponsive8Mobile: Ms,
  SpacingResponsive8Tablet: Is,
  SpacingResponsive9Mobile: Ds,
  SpacingResponsive9Tablet: Ts
}), []), f1 = () => De(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Sc,
  ButtonSpacingPaddingHorizontalMobile: _c,
  ButtonSpacingPaddingVerticalDesktop: kc,
  ButtonSpacingPaddingHorizontalDesktop: Cc,
  // Card spacing	
  CardSpacingPaddingMobile: Nc,
  CardSpacingPaddingDesktop: jc,
  CardSpacingHeadingMargin: Mc,
  // Form spacing
  FormSpacingInputPadding: Ic,
  FormSpacingInputMinHeight: Dc,
  FormSpacingCheckboxSize: Tc,
  FormSpacingCheckboxLabelPadding: Lc
}), []), p1 = () => De(() => ({
  xl: Ft,
  l: Rt,
  m: Bt,
  s: Ht,
  xs: zt
}), []), h1 = () => De(() => ({
  body: Ot,
  bodyLarge: Ut,
  bodySmall: Wt,
  ledeText: Gt,
  ledeTextSmall: Vt
}), []), m1 = () => De(() => ({
  headings: {
    xl: Ft,
    l: Rt,
    m: Bt,
    s: Ht,
    xs: zt
  },
  paragraphs: {
    body: Ot,
    bodyLarge: Ut,
    bodySmall: Wt,
    ledeText: Gt,
    ledeTextSmall: Vt
  },
  fonts: {
    family: {
      base: Ur,
      fallback: Wr,
      print: Gr
    },
    weight: {
      normal: Vr,
      bold: Yr,
      light: Zr
    },
    sizes: {
      mobile: {
        size14: Jr,
        size16: Qr,
        size19: ta,
        size22: aa,
        size26: ia,
        size36: da,
        size48: pa
      },
      tablet: {
        size14: qr,
        size16: Kr,
        size19: na,
        size22: sa,
        size26: la,
        size36: ua,
        size48: ha
      },
      print: {
        size14: Xr,
        size16: ea,
        size19: ra,
        size22: oa,
        size26: ca,
        size36: fa,
        size48: ma
      }
    }
  }
}), []);
function g1(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, s] = O.useState(t), o = O.useCallback(() => s("three-column"), []), i = O.useCallback(() => s((d) => d === "three-column" ? n : d), [n]), l = O.useCallback(() => s((d) => d === "three-column" ? n : "three-column"), [n]);
  return {
    forceLayout: a,
    setLayout: s,
    drillIn: o,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const Uc = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, yt = {
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
function x1(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...Uc, ...e }, a = [];
  return n?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${yt.normal.eot}?#iefix") format("eot"),
       url("${t}${yt.normal.woff2}") format("woff2"),
       url("${t}${yt.normal.woff}") format("woff"),
       url("${t}${yt.normal.ttf}") format("truetype");
  src: url("${t}${yt.normal.eot}");
}`), n?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${yt.bold.eot}?#iefix") format("eot"),
       url("${t}${yt.bold.woff2}") format("woff2"),
       url("${t}${yt.bold.woff}") format("woff"),
       url("${t}${yt.bold.ttf}") format("truetype");
  src: url("${t}${yt.bold.eot}");
}`), a.join(`
`);
}
function b1(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...Uc, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${yt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${yt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${yt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${yt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((s) => {
    const o = document.createElement("link");
    o.rel = "preload", o.href = s.href, o.as = s.as, o.type = s.type, o.crossOrigin = "anonymous", document.head.appendChild(o);
  });
}
const y1 = '"Frutiger W01", Arial, Helvetica, sans-serif', v1 = "Arial, Helvetica, sans-serif";
async function w1() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Eh as AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX,
  vr as AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX,
  wr as AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
  Ph as AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX,
  Fh as AXIS_ZIGZAG_DEFAULT_CYCLES,
  Bh as AXIS_ZIGZAG_DEFAULT_HEIGHT_PX,
  Rh as AXIS_ZIGZAG_DEFAULT_STEP_X_PX,
  _i as Account,
  sy as ActionLink,
  Ey as AdaptiveDataGrid,
  yg as AnimationDurationFast,
  vg as AnimationDurationNormal,
  wg as AnimationDurationSlow,
  Cg as AnimationEasingBounce,
  Sg as AnimationEasingEaseIn,
  kg as AnimationEasingEaseInOut,
  _g as AnimationEasingEaseOut,
  il as AppointmentCard,
  Uy as AreaSeriesPrimitive,
  Pp as AriaDataGrid,
  ts as AriaTabsDataGrid,
  Ey as AriaTabsDataGridAdaptive,
  ni as Axis,
  Ya as BackLink,
  Gy as BandScalesProvider,
  Wy as BarSeriesPrimitive,
  tc as BorderColorCard,
  nc as BorderColorCardHover,
  Kl as BorderColorDefault,
  rc as BorderColorError,
  ec as BorderColorForm,
  Hg as BorderRadiusLarge,
  Bg as BorderRadiusMedium,
  Fg as BorderRadiusNone,
  Rg as BorderRadiusSmall,
  $g as BorderWidthCardBottom,
  Dg as BorderWidthDefault,
  Tg as BorderWidthFormElement,
  Lg as BorderWidthFormElementError,
  Ag as BorderWidthPanel,
  Pg as BorderWidthTableCell,
  Eg as BorderWidthTableHeader,
  by as BrandThemeProvider,
  vp as Breadcrumb,
  Sd as Breakpoint,
  vb as BreakpointDesktop,
  wb as BreakpointLargeDesktop,
  bb as BreakpointMobile,
  yb as BreakpointTablet,
  gt as Button,
  mx as ButtonBorderRadius,
  hx as ButtonBorderWidth,
  nx as ButtonPrimaryBackgroundActive,
  ex as ButtonPrimaryBackgroundDefault,
  rx as ButtonPrimaryBackgroundDisabled,
  tx as ButtonPrimaryBackgroundHover,
  ox as ButtonPrimaryBorderDefault,
  ix as ButtonPrimaryBorderFocus,
  ax as ButtonPrimaryTextDefault,
  sx as ButtonPrimaryTextDisabled,
  ux as ButtonSecondaryBackgroundActive,
  lx as ButtonSecondaryBackgroundDefault,
  dx as ButtonSecondaryBackgroundHover,
  cx as ButtonSecondaryBackgroundSolid,
  px as ButtonSecondaryBorderDefault,
  fx as ButtonSecondaryTextDefault,
  gx as ButtonShadowSize,
  Ci as ButtonSize,
  Cc as ButtonSpacingPaddingHorizontalDesktop,
  _c as ButtonSpacingPaddingHorizontalMobile,
  kc as ButtonSpacingPaddingVerticalDesktop,
  Sc as ButtonSpacingPaddingVerticalMobile,
  xx as ButtonTypographyWeight,
  ki as ButtonVariant,
  nl as Card,
  bx as CardBackgroundDefault,
  wx as CardBorderBottom,
  yx as CardBorderDefault,
  vx as CardBorderHover,
  Nx as CardBorderWidthBottom,
  Cx as CardBorderWidthDefault,
  _y as CardGroup,
  ky as CardGroupItem,
  jx as CardShadowDefault,
  Mx as CardShadowHover,
  Mc as CardSpacingHeadingMargin,
  jc as CardSpacingPaddingDesktop,
  Nc as CardSpacingPaddingMobile,
  _x as CardTextDescription,
  Sx as CardTextHeading,
  kx as CardTextLink,
  Cy as CareCard,
  oy as CharacterCount,
  Yy as ChartEnhancer,
  Vy as ChartNoScript,
  $h as ChartRoot,
  cd as Checkbox,
  pd as Checkboxes,
  Xg as ColorBorderDefault,
  Qg as ColorBorderSecondary,
  C0 as ColorButtonLoginActive,
  _0 as ColorButtonLoginBackground,
  k0 as ColorButtonLoginHover,
  N0 as ColorButtonLoginShadow,
  s0 as ColorButtonPrimaryActive,
  n0 as ColorButtonPrimaryBackground,
  a0 as ColorButtonPrimaryHover,
  o0 as ColorButtonPrimaryShadow,
  r0 as ColorButtonPrimaryText,
  x0 as ColorButtonReverseActive,
  h0 as ColorButtonReverseBackground,
  g0 as ColorButtonReverseHover,
  b0 as ColorButtonReverseShadow,
  m0 as ColorButtonReverseText,
  f0 as ColorButtonSecondaryActive,
  i0 as ColorButtonSecondaryBackground,
  l0 as ColorButtonSecondaryBackgroundSolid,
  c0 as ColorButtonSecondaryBorder,
  u0 as ColorButtonSecondaryHover,
  p0 as ColorButtonSecondaryShadow,
  d0 as ColorButtonSecondaryText,
  w0 as ColorButtonWarningActive,
  y0 as ColorButtonWarningBackground,
  v0 as ColorButtonWarningHover,
  S0 as ColorButtonWarningShadow,
  Kg as ColorError,
  Jg as ColorFocusBackground,
  qg as ColorFocusText,
  t0 as ColorFormBackground,
  e0 as ColorFormBorder,
  xc as ColorGrey1,
  bc as ColorGrey2,
  yc as ColorGrey3,
  vc as ColorGrey4,
  wc as ColorGrey5,
  Yg as ColorLinkActive,
  Gg as ColorLinkDefault,
  Vg as ColorLinkHover,
  Zg as ColorLinkVisited,
  oc as ColorPrimaryBlack,
  ac as ColorPrimaryBlue,
  cc as ColorPrimaryDarkPink,
  ic as ColorPrimaryGreen,
  lc as ColorPrimaryPurple,
  dc as ColorPrimaryRed,
  sc as ColorPrimaryWhite,
  uc as ColorPrimaryYellow,
  mc as ColorSecondaryAquaGreen,
  hc as ColorSecondaryOrange,
  fc as ColorSecondaryPaleYellow,
  gc as ColorSecondaryPink,
  pc as ColorSecondaryWarmYellow,
  zg as ColorTextPrimary,
  Wg as ColorTextPrint,
  Ug as ColorTextReverse,
  Og as ColorTextSecondary,
  qn as Column,
  kd as ColumnAlign,
  J0 as ComponentBlur,
  z0 as ComponentBreadcrumbChevronMarginLeft,
  O0 as ComponentBreadcrumbChevronMarginRight,
  W0 as ComponentBreadcrumbPaddingTopDesktop,
  U0 as ComponentBreadcrumbPaddingTopMobile,
  D0 as ComponentButtonPaddingDesktopHorizontal,
  I0 as ComponentButtonPaddingDesktopVertical,
  M0 as ComponentButtonPaddingMobileHorizontal,
  j0 as ComponentButtonPaddingMobileVertical,
  T0 as ComponentButtonShadowSize,
  R0 as ComponentCardHeadingMargin,
  F0 as ComponentCardPaddingDesktop,
  P0 as ComponentCardPaddingMobile,
  X0 as ComponentDetails,
  Q0 as ComponentExpander,
  E0 as ComponentFormCheckboxLabelPadding,
  A0 as ComponentFormCheckboxSize,
  L0 as ComponentFormInputMinHeight,
  $0 as ComponentFormInputPadding,
  q0 as ComponentLink,
  K0 as ComponentPagination,
  H0 as ComponentPanelPaddingDesktop,
  B0 as ComponentPanelPaddingMobile,
  Z0 as ComponentSpread,
  V0 as ComponentSummaryListCellPaddingHorizontal,
  G0 as ComponentSummaryListCellPaddingVertical,
  Y0 as ComponentSummaryListRowMargin,
  Ii as Container,
  Sy as ContentsList,
  Uc as DEFAULT_FONT_CONFIG,
  Ly as DashboardSummaryGrid,
  my as DateInput,
  jp as Details,
  Mp as DoDontList,
  ey as ElevationHigh,
  Qb as ElevationLow,
  Kb as ElevationMedium,
  Xb as ElevationNone,
  lo as ErrorMessage,
  hy as ErrorSummary,
  Ip as Expander,
  yt as FRUTIGER_FONT_FILES,
  Ps as Fieldset,
  _d as Float,
  Yb as FocusOutlineOffset,
  Zb as FocusOutlineStyle,
  Vb as FocusOutlineWidth,
  qb as FocusShadowButton,
  Jb as FocusShadowInput,
  Ur as FontFamilyBase,
  Wr as FontFamilyFallback,
  Gr as FontFamilyPrint,
  $s as FontLineHeightBase,
  Jr as FontSize14Mobile,
  Xr as FontSize14Print,
  qr as FontSize14Tablet,
  Qr as FontSize16Mobile,
  ea as FontSize16Print,
  Kr as FontSize16Tablet,
  ta as FontSize19Mobile,
  ra as FontSize19Print,
  na as FontSize19Tablet,
  aa as FontSize22Mobile,
  oa as FontSize22Print,
  sa as FontSize22Tablet,
  ia as FontSize26Mobile,
  ca as FontSize26Print,
  la as FontSize26Tablet,
  da as FontSize36Mobile,
  fa as FontSize36Print,
  ua as FontSize36Tablet,
  pa as FontSize48Mobile,
  ma as FontSize48Print,
  ha as FontSize48Tablet,
  Ls as FontSizeBase,
  Yr as FontWeightBold,
  Zr as FontWeightLight,
  Vr as FontWeightNormal,
  Pi as Footer,
  Zx as FormBorderRadius,
  Vx as FormBorderWidthDefault,
  Yx as FormBorderWidthError,
  Ux as FormErrorTextDefault,
  Wx as FormErrorTypographyWeight,
  Gx as FormHintTextDefault,
  Ix as FormInputBackgroundDefault,
  Tx as FormInputBackgroundDisabled,
  Lx as FormInputBackgroundError,
  Dx as FormInputBackgroundFocus,
  $x as FormInputBorderDefault,
  Px as FormInputBorderDisabled,
  Ex as FormInputBorderError,
  Ax as FormInputBorderFocus,
  Fx as FormInputTextDefault,
  Bx as FormInputTextDisabled,
  Rx as FormInputTextPlaceholder,
  Hx as FormLabelTextDefault,
  zx as FormLabelTextRequired,
  Ox as FormLabelTypographyWeight,
  Lc as FormSpacingCheckboxLabelPadding,
  Tc as FormSpacingCheckboxSize,
  Dc as FormSpacingInputMinHeight,
  Ic as FormSpacingInputPadding,
  vy as GanttChart,
  Za as Grid,
  _b as GridGutter,
  kb as GridGutterHalf,
  Hh as GridLines,
  Sb as GridPageWidth,
  xn as GridWidth,
  Ei as Header,
  yy as HeaderSSR,
  Gd as HeaderSearch,
  Ei as HeaderStatic,
  Jt as Heading,
  Rt as HeadingsNhsukHeadingL,
  Bt as HeadingsNhsukHeadingM,
  Ht as HeadingsNhsukHeadingS,
  Ft as HeadingsNhsukHeadingXl,
  zt as HeadingsNhsukHeadingXs,
  Yd as Hero,
  ji as Hint,
  Dy as Images,
  As as Input,
  Ny as InsetText,
  Es as Label,
  xb as LayoutColumnActions,
  pb as LayoutColumnFull,
  hb as LayoutColumnHalf,
  gb as LayoutColumnQuarter,
  mb as LayoutColumnThird,
  fb as LayoutContainerMaxWidth,
  Oy as Legend,
  Ah as LineScalesProvider,
  Sm as LineSeriesPrimitive,
  jd as List,
  Di as MainWrapper,
  ll as MedicationCard,
  Cm as MetricCard,
  n1 as NHSBodyText,
  r1 as NHSBodyTextLarge,
  a1 as NHSBodyTextSmall,
  Xy as NHSHeading1,
  Qy as NHSHeading2,
  Ky as NHSHeading3,
  e1 as NHSHeading4,
  t1 as NHSHeading5,
  s1 as NHSLedeText,
  o1 as NHSLedeTextSmall,
  xy as NHSThemeProvider,
  v1 as NHS_FALLBACK_FONT_STACK,
  y1 as NHS_FONT_STACK,
  kh as NavigationSplitView,
  Fy as PageTemplate,
  wy as Pagination,
  wp as Panel,
  Ot as ParagraphsBody,
  Ut as ParagraphsBodyLarge,
  Wt as ParagraphsBodySmall,
  Gt as ParagraphsLedeText,
  Vt as ParagraphsLedeTextSmall,
  ol as PatientCard,
  jh as ProductRoadmap,
  iy as Radios,
  ly as RadiosServer,
  Ey as ResponsiveDataGrid,
  Py as ResponsiveDataGridDemo,
  an as Row,
  Jy as SPC,
  xg as SPCChart,
  Zy as SPCMetricCard,
  _r as Select,
  bd as SelectOption,
  Hb as ShadowButtonDefault,
  Ub as ShadowButtonFocus,
  zb as ShadowButtonSecondary,
  Ob as ShadowButtonWarning,
  Wb as ShadowCardDefault,
  Gb as ShadowCardHover,
  ub as SizeButtonMinHeightDesktop,
  db as SizeButtonMinHeightMobile,
  nb as SizeFormControlLarge,
  tb as SizeFormControlMedium,
  eb as SizeFormControlSmall,
  lb as SizeFormInputWidth2xl,
  cb as SizeFormInputWidth3xl,
  ob as SizeFormInputWidthLg,
  sb as SizeFormInputWidthMd,
  ab as SizeFormInputWidthSm,
  ib as SizeFormInputWidthXl,
  rb as SizeFormInputWidthXs,
  Qx as SizeIconExtraLarge,
  Xx as SizeIconLarge,
  qx as SizeIconMedium,
  Kx as SizeIconNhsDefault,
  Jx as SizeIconSmall,
  tl as SkipLink,
  Ty as SlotMatrix,
  $y as SortStatusControl,
  $c as Spacing0,
  Ac as Spacing1,
  Ec as Spacing2,
  Pc as Spacing3,
  Fc as Spacing4,
  Rc as Spacing5,
  Bc as Spacing6,
  Hc as Spacing7,
  zc as Spacing8,
  Oc as Spacing9,
  fs as SpacingResponsive0Mobile,
  ps as SpacingResponsive0Tablet,
  hs as SpacingResponsive1Mobile,
  ms as SpacingResponsive1Tablet,
  gs as SpacingResponsive2Mobile,
  xs as SpacingResponsive2Tablet,
  bs as SpacingResponsive3Mobile,
  ys as SpacingResponsive3Tablet,
  vs as SpacingResponsive4Mobile,
  ws as SpacingResponsive4Tablet,
  Ss as SpacingResponsive5Mobile,
  _s as SpacingResponsive5Tablet,
  ks as SpacingResponsive6Mobile,
  Cs as SpacingResponsive6Tablet,
  Ns as SpacingResponsive7Mobile,
  js as SpacingResponsive7Tablet,
  Ms as SpacingResponsive8Mobile,
  Is as SpacingResponsive8Tablet,
  Ds as SpacingResponsive9Mobile,
  Ts as SpacingResponsive9Tablet,
  cy as SpacingUtilities,
  Fb as StateDisabledBackground,
  Rb as StateDisabledBorder,
  Bb as StateDisabledText,
  Cb as StateErrorBackground,
  Nb as StateErrorBorder,
  jb as StateErrorText,
  Ab as StateInfoBackground,
  Eb as StateInfoBorder,
  Pb as StateInfoText,
  Mb as StateSuccessBackground,
  Ib as StateSuccessBorder,
  Db as StateSuccessText,
  Tb as StateWarningBackground,
  Lb as StateWarningBorder,
  $b as StateWarningText,
  Ep as SummaryCard,
  jy as SummaryList,
  Qt as Table,
  My as Tabs,
  Ze as Tag,
  Dp as TaskList,
  md as Textarea,
  zy as TooltipOverlay,
  wm as TooltipProvider,
  Ry as TransactionalPageTemplate,
  Ng as TransitionButtonDefault,
  jg as TransitionButtonShadow,
  Ig as TransitionCardHover,
  Mg as TransitionInputFocus,
  Hy as VisibilityProvider,
  cl as VitalsCard,
  py as WIDTH_FRACTIONS,
  Iy as WarningCallout,
  hl as WidthContainer,
  uy as WidthUtilities,
  w1 as checkFrutigerLoaded,
  Ys as createGenericTabsConfig,
  Ay as createTCHTabsConfig,
  x1 as generateFrutigerFontFace,
  qy as getResponsiveStyles,
  dy as getSpacingClass,
  fy as getWidthClass,
  b1 as preloadFrutigerFonts,
  Yp as tchDataConfig,
  Wd as useBrand,
  l1 as useColors,
  f1 as useComponentSpacing,
  p1 as useNHSHeadings,
  h1 as useNHSParagraphs,
  gy as useNHSTheme,
  m1 as useNHSTypographySystem,
  g1 as useNavigationSplitDrill,
  wh as useNavigationSplitUrlSync,
  gl as useNhsFdpBreakpoints,
  u1 as useResponsiveSpacing,
  By as useResponsiveValue,
  c1 as useSpacing,
  Xm as useSpc,
  i1 as useTokens,
  d1 as useTypography
};
//# sourceMappingURL=index.esm.js.map
