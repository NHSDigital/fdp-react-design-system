import * as X from "react";
import st, { useState as Ie, useEffect as Be, useCallback as he, useRef as Ae, createElement as To, useMemo as De, useContext as ql, createContext as Xl, forwardRef as gn, useImperativeHandle as $o, useReducer as Do, memo as Kl, useLayoutEffect as Zl, useId as Vn } from "react";
import { createPortal as Jl } from "react-dom";
function Ql(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hn = { exports: {} }, yn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $s;
function ec() {
  if ($s) return yn;
  $s = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(a, o, s) {
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
  return yn.Fragment = t, yn.jsx = r, yn.jsxs = r, yn;
}
var vn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ds;
function tc() {
  return Ds || (Ds = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(z) {
      if (z == null) return null;
      if (typeof z == "function")
        return z.$$typeof === S ? null : z.displayName || z.name || null;
      if (typeof z == "string") return z;
      switch (z) {
        case p:
          return "Fragment";
        case R:
          return "Profiler";
        case u:
          return "StrictMode";
        case M:
          return "Suspense";
        case T:
          return "SuspenseList";
        case b:
          return "Activity";
      }
      if (typeof z == "object")
        switch (typeof z.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), z.$$typeof) {
          case N:
            return "Portal";
          case D:
            return (z.displayName || "Context") + ".Provider";
          case F:
            return (z._context.displayName || "Context") + ".Consumer";
          case $:
            var U = z.render;
            return z = z.displayName, z || (z = U.displayName || U.name || "", z = z !== "" ? "ForwardRef(" + z + ")" : "ForwardRef"), z;
          case L:
            return U = z.displayName || null, U !== null ? U : e(z.type) || "Memo";
          case w:
            U = z._payload, z = z._init;
            try {
              return e(z(U));
            } catch {
            }
        }
      return null;
    }
    function t(z) {
      return "" + z;
    }
    function r(z) {
      try {
        t(z);
        var U = !1;
      } catch {
        U = !0;
      }
      if (U) {
        U = console;
        var B = U.error, se = typeof Symbol == "function" && Symbol.toStringTag && z[Symbol.toStringTag] || z.constructor.name || "Object";
        return B.call(
          U,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          se
        ), t(z);
      }
    }
    function a(z) {
      if (z === p) return "<>";
      if (typeof z == "object" && z !== null && z.$$typeof === w)
        return "<...>";
      try {
        var U = e(z);
        return U ? "<" + U + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var z = m.A;
      return z === null ? null : z.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(z) {
      if (_.call(z, "key")) {
        var U = Object.getOwnPropertyDescriptor(z, "key").get;
        if (U && U.isReactWarning) return !1;
      }
      return z.key !== void 0;
    }
    function l(z, U) {
      function B() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          U
        ));
      }
      B.isReactWarning = !0, Object.defineProperty(z, "key", {
        get: B,
        configurable: !0
      });
    }
    function d() {
      var z = e(this.type);
      return x[z] || (x[z] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), z = this.props.ref, z !== void 0 ? z : null;
    }
    function c(z, U, B, se, y, P, Z, te) {
      return B = P.ref, z = {
        $$typeof: v,
        type: z,
        key: U,
        props: P,
        _owner: y
      }, (B !== void 0 ? B : null) !== null ? Object.defineProperty(z, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(z, "ref", { enumerable: !1, value: null }), z._store = {}, Object.defineProperty(z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(z, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(z, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(z, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: te
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    }
    function f(z, U, B, se, y, P, Z, te) {
      var V = U.children;
      if (V !== void 0)
        if (se)
          if (I(V)) {
            for (se = 0; se < V.length; se++)
              h(V[se]);
            Object.freeze && Object.freeze(V);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(V);
      if (_.call(U, "key")) {
        V = e(z);
        var A = Object.keys(U).filter(function(oe) {
          return oe !== "key";
        });
        se = 0 < A.length ? "{key: someKey, " + A.join(": ..., ") + ": ...}" : "{key: someKey}", H[V + se] || (A = 0 < A.length ? "{" + A.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          se,
          V,
          A,
          V
        ), H[V + se] = !0);
      }
      if (V = null, B !== void 0 && (r(B), V = "" + B), i(U) && (r(U.key), V = "" + U.key), "key" in U) {
        B = {};
        for (var W in U)
          W !== "key" && (B[W] = U[W]);
      } else B = U;
      return V && l(
        B,
        typeof z == "function" ? z.displayName || z.name || "Unknown" : z
      ), c(
        z,
        V,
        P,
        y,
        o(),
        B,
        Z,
        te
      );
    }
    function h(z) {
      typeof z == "object" && z !== null && z.$$typeof === v && z._store && (z._store.validated = 1);
    }
    var g = st, v = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), D = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), S = Symbol.for("react.client.reference"), m = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, I = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(z) {
        return z();
      }
    };
    var C, x = {}, E = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), ee = k(a(s)), H = {};
    vn.Fragment = p, vn.jsx = function(z, U, B, se, y) {
      var P = 1e4 > m.recentlyCreatedOwnerStacks++;
      return f(
        z,
        U,
        B,
        !1,
        se,
        y,
        P ? Error("react-stack-top-frame") : E,
        P ? k(a(z)) : ee
      );
    }, vn.jsxs = function(z, U, B, se, y) {
      var P = 1e4 > m.recentlyCreatedOwnerStacks++;
      return f(
        z,
        U,
        B,
        !0,
        se,
        y,
        P ? Error("react-stack-top-frame") : E,
        P ? k(a(z)) : ee
      );
    };
  })()), vn;
}
var Is;
function nc() {
  return Is || (Is = 1, process.env.NODE_ENV === "production" ? Hn.exports = ec() : Hn.exports = tc()), Hn.exports;
}
var n = nc(), Qr = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ms;
function rc() {
  return Ms || (Ms = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
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
          return r.apply(null, s);
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
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  })(Qr)), Qr.exports;
}
var ac = rc();
const xe = /* @__PURE__ */ Ql(ac), px = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...o
}) => {
  const s = xe(
    "nhsuk-action-link__link",
    a
  );
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ n.jsxs(
    "a",
    {
      className: s,
      href: t,
      target: r ? "_blank" : void 0,
      rel: r ? "noopener noreferrer" : void 0,
      ...o,
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
}, sc = ({
  ariaLabel: e = "Account",
  items: t = [],
  className: r,
  variant: a = "default"
}) => {
  if (!t || t.length === 0)
    return null;
  const o = (s) => {
    const i = s.icon ? /* @__PURE__ */ n.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        "aria-label": s.icon === !0 ? "User" : void 0,
        children: /* @__PURE__ */ n.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, l = s.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: s.html } }) : s.text, d = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      i,
      l
    ] });
    return s.href ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-account__link nhsuk-header__account-link", href: s.href, children: d }) : s.action ? /* @__PURE__ */ n.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: s.action,
        method: s.method || "post",
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
      className: xe(
        "nhsuk-account",
        {
          "nhsuk-account--white": a === "white"
        },
        r
      ),
      "aria-label": e,
      children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-account__list", children: t.map((s, i) => s && /* @__PURE__ */ n.jsx(
        "li",
        {
          className: xe("nhsuk-account__item nhsuk-header__account-item", s.className),
          children: o(s)
        },
        i
      )) })
    }
  );
};
function oc(e) {
  const t = e.variant || "primary", r = e.size || "default", a = !!e.fullWidth, o = [
    "nhs-aria-button",
    `nhs-aria-button--${t}`,
    r !== "default" ? `nhs-aria-button--${r}` : "",
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
const { forwardRef: ic, useCallback: Et, useState: ea } = X;
function lc(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, f] = ea(!1), [h, g] = ea(!1), [v, N] = ea(!1), p = oc({
    variant: a,
    size: o,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in d ? d.href : void 0
  }), u = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", R = {
    ...c && { "data-pressed": "true" },
    ...h && { "data-hovered": "true" },
    ...v && { "data-focused": "true" },
    ...u && { "data-disabled": "true" }
  }, F = Et(
    () => !u && f(!0),
    [u]
  ), D = Et(() => f(!1), []), $ = Et(
    () => !u && g(!0),
    [u]
  ), M = Et(() => {
    g(!1), f(!1);
  }, []), T = Et(() => N(!0), []), L = Et(() => N(!1), []), w = Et(
    (V) => {
      V.key === " " && ("href" in d || V.currentTarget.getAttribute("role") === "button") && (V.preventDefault(), V.currentTarget.click());
    },
    [d]
  ), b = Et(
    (V) => {
      if (l) {
        const A = V.currentTarget;
        if (A.getAttribute("data-processing") === "true") {
          V.preventDefault();
          return;
        }
        A.setAttribute("data-processing", "true"), setTimeout(() => {
          A.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in d && d.href) {
    const {
      id: V,
      style: A,
      title: W,
      ["aria-label"]: oe,
      ["aria-describedby"]: O,
      ["aria-labelledby"]: ce,
      tabIndex: re,
      ...le
    } = d, de = d;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: de.href,
        target: de.target,
        rel: de.rel,
        className: p.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...R,
        ...l && { "data-prevent-double-click": "true" },
        ...le,
        onKeyDown: (be) => {
          de.onKeyDown?.(be), w(be);
        },
        onClick: (be) => {
          de.onClick?.(be), b(be);
        },
        onMouseDown: (be) => {
          de.onMouseDown?.(be), F();
        },
        onMouseUp: (be) => {
          de.onMouseUp?.(be), D();
        },
        onMouseEnter: (be) => {
          de.onMouseEnter?.(be), $();
        },
        onMouseLeave: (be) => {
          de.onMouseLeave?.(be), M();
        },
        onFocus: (be) => {
          de.onFocus?.(be), T();
        },
        onBlur: (be) => {
          de.onBlur?.(be), L();
        },
        "aria-disabled": de["aria-disabled"],
        ...de["aria-disabled"] === "true" && { tabIndex: -1 },
        id: V,
        style: A,
        title: W,
        "aria-label": oe,
        "aria-describedby": O,
        "aria-labelledby": ce,
        tabIndex: re,
        children: r
      }
    );
  }
  const {
    id: S,
    style: m,
    title: _,
    ["aria-label"]: I,
    ["aria-describedby"]: k,
    ["aria-labelledby"]: C,
    tabIndex: x,
    name: E,
    value: ee,
    form: H,
    formAction: z,
    formEncType: U,
    formMethod: B,
    formNoValidate: se,
    formTarget: y,
    autoFocus: P,
    ...Z
  } = d, te = d;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: te.type || "button",
      disabled: te.disabled,
      className: p.classes,
      "data-module": "nhs-button",
      ...R,
      ...l && { "data-prevent-double-click": "true" },
      ...te.disabled && { "aria-disabled": "true" },
      ...Z,
      onKeyDown: (V) => {
        te.onKeyDown?.(V), w(V);
      },
      onClick: (V) => {
        te.onClick?.(V), b(V);
      },
      onMouseDown: (V) => {
        te.onMouseDown?.(V), F();
      },
      onMouseUp: (V) => {
        te.onMouseUp?.(V), D();
      },
      onMouseEnter: (V) => {
        te.onMouseEnter?.(V), $();
      },
      onMouseLeave: (V) => {
        te.onMouseLeave?.(V), M();
      },
      onFocus: (V) => {
        te.onFocus?.(V), T();
      },
      onBlur: (V) => {
        te.onBlur?.(V), L();
      },
      id: S,
      style: m,
      title: _,
      "aria-label": I,
      "aria-describedby": k,
      "aria-labelledby": C,
      tabIndex: x,
      name: E,
      value: ee,
      form: H,
      formAction: z,
      formEncType: U,
      formMethod: B,
      formNoValidate: se,
      formTarget: y,
      autoFocus: P,
      children: r
    }
  );
}
const et = ic(lc);
et.displayName = "Button";
const ba = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = xe(
    "nhsuk-back-link",
    a
  ), d = xe(
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
  return /* @__PURE__ */ n.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ n.jsx(
    "button",
    {
      className: d,
      onClick: s,
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
function cc(e) {
  const { color: t = "default", noBorder: r, closable: a, disabled: o, className: s } = e;
  return { classes: [
    "nhsuk-tag",
    t !== "default" ? `nhsuk-tag--${t}` : "",
    r ? "nhsuk-tag--no-border" : "",
    a ? "nhsuk-tag--closable" : "",
    o ? "nhsuk-tag--disabled" : "",
    s || ""
  ].filter(Boolean).join(" "), showClose: !!a, disabled: !!o };
}
const Ge = ({
  text: e,
  html: t,
  children: r,
  color: a = "default",
  noBorder: o = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: d,
  ...c
}) => {
  const f = cc({ color: a, noBorder: o, closable: s, disabled: l, className: d }), h = (g) => {
    g.preventDefault(), g.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: f.classes, ...c, children: [
    r || (t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    s && /* @__PURE__ */ n.jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: h,
        disabled: l,
        "aria-label": "Remove",
        title: "Remove",
        children: "×"
      }
    )
  ] });
}, dc = ({
  id: e,
  name: t,
  checked: r,
  defaultChecked: a = !1,
  disabled: o = !1,
  value: s = "true",
  hint: i,
  errorMessage: l,
  className: d,
  children: c,
  onChange: f,
  onBlur: h,
  onFocus: g,
  attributes: v,
  ...N
}) => {
  const [p, u] = Ie(a), R = r !== void 0, F = R ? r : p;
  Be(() => {
    R || u(a);
  }, [a, R]);
  const D = (w) => {
    const b = w.target.checked;
    R || u(b), f?.(b, w);
  }, $ = i ? `${e}-hint` : void 0, M = l ? `${e}-error` : void 0, T = [$, M].filter(Boolean).join(" ") || void 0, L = xe(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ n.jsx("div", { className: L, ...N, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: F,
        disabled: o,
        onChange: D,
        onBlur: h,
        onFocus: g,
        "aria-describedby": T,
        ...v
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ n.jsx("div", { id: $, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: M, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
dc.displayName = "Checkbox";
function uc(e) {
  const r = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    r ? "nhsuk-input--range" : "",
    !r && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: r };
}
const rs = ({
  id: e,
  name: t,
  type: r = "text",
  value: a,
  defaultValue: o,
  placeholder: s,
  disabled: i = !1,
  readOnly: l = !1,
  required: d = !1,
  hasError: c = !1,
  describedBy: f,
  className: h,
  width: g = "full",
  inputMode: v,
  autoComplete: N,
  maxLength: p,
  minLength: u,
  pattern: R,
  step: F,
  min: D,
  max: $,
  showValueLabels: M = !1,
  showCurrentValue: T = !1,
  valueLabels: L,
  onChange: w,
  onBlur: b,
  onFocus: S,
  onKeyDown: m,
  ..._
}) => {
  const [I, k] = Ie(a || o || (r === "range" ? D || "0" : ""));
  Be(() => {
    a !== void 0 && k(a);
  }, [a]);
  const C = (y) => {
    const P = y.target;
    k(P.value), ("type" in y && y.nativeEvent || y.type === "keydown") && w?.(y);
  }, { classes: x, isRange: E } = uc({ type: r, hasError: c, width: g, className: h }), ee = a !== void 0, H = {
    id: e,
    name: t,
    type: r,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: d,
    "aria-describedby": f,
    inputMode: v,
    autoComplete: N,
    maxLength: p,
    minLength: u,
    pattern: R,
    step: F,
    min: D,
    max: $,
    onChange: C,
    onBlur: b,
    onFocus: S,
    onKeyDown: (y) => {
      if (E && /[0-9]/.test(y.key)) {
        const P = (I?.toString() || "") + y.key;
        y.target.value = P, C(y);
      }
      m?.(y);
    },
    ..._
  }, z = !ee && o !== void 0 ? { defaultValue: o } : {}, U = ee ? { value: a } : {}, B = () => /* @__PURE__ */ n.jsx(
    "input",
    {
      className: x,
      ...U,
      ...z,
      "data-current-value": I,
      ...H
    }
  ), se = E ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    M && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: L?.min || D || "0" }),
      B(),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: L?.max || $ || "100" })
    ] }),
    !M && B(),
    T && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      L?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: I })
    ] }) })
  ] }) : null;
  return E ? se : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: x,
      id: e,
      name: t,
      type: r,
      value: a,
      ...a === void 0 && o !== void 0 ? { defaultValue: o } : {},
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: d,
      "aria-describedby": f,
      inputMode: v,
      autoComplete: N,
      maxLength: p,
      minLength: u,
      pattern: R,
      step: F,
      min: D,
      max: $,
      onChange: w,
      onBlur: b,
      onFocus: S,
      onKeyDown: m,
      ..._
    }
  );
};
function fc(e) {
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
const as = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = fc({ size: a, isPageHeading: r, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ n.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
}, ss = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...o
}) => {
  const s = xe(
    "nhsuk-fieldset",
    r
  ), i = xe(
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
      className: s,
      "aria-describedby": a,
      ...o,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ n.jsx("legend", { className: i, children: l() }),
        e
      ]
    }
  );
}, hc = ({
  items: e,
  name: t,
  idPrefix: r,
  legend: a,
  isPageHeading: o = !1,
  legendSize: s = "l",
  hint: i,
  errorMessage: l,
  className: d = "",
  small: c = !1,
  onChange: f,
  fieldsetAttributes: h,
  attributes: g,
  ...v
}) => {
  const [N, p] = Ie(
    e.filter((w) => w.checked).map((w) => w.value)
  ), u = r || t, R = i ? `${u}-hint` : void 0, F = l ? `${u}-error` : void 0, D = [R, F].filter(Boolean).join(" ") || void 0, $ = (w, b) => {
    let S;
    b ? S = [...N, w] : S = N.filter((m) => m !== w), p(S), f?.(S);
  }, M = () => e.map((w, b) => {
    const S = `${u}-${b + 1}`, m = `${S}-conditional`, _ = N.includes(w.value), I = w.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: S,
          name: t,
          type: "checkbox",
          value: w.value,
          checked: _,
          disabled: I,
          onChange: (k) => $(w.value, k.target.checked),
          "aria-describedby": w.hint ? `${S}-hint` : D,
          ...w.conditional && {
            "aria-controls": m,
            "aria-expanded": _ ? "true" : "false"
          },
          ...w.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: S, children: w.text }),
      w.hint && /* @__PURE__ */ n.jsx("div", { id: `${S}-hint`, className: "nhsuk-checkboxes__hint", children: w.hint }),
      w.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: xe("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !_
          }),
          id: m,
          children: typeof w.conditional == "object" && w.conditional !== null && "label" in w.conditional && "id" in w.conditional && "name" in w.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            w.conditional.label && /* @__PURE__ */ n.jsx(as, { htmlFor: w.conditional.id, children: w.conditional.label }),
            /* @__PURE__ */ n.jsx(rs, { ...w.conditional })
          ] }) : w.conditional
        }
      )
    ] }, w.value);
  }), T = xe(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": c
    },
    d
  ), L = xe("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: L, ...g, ...v, children: /* @__PURE__ */ n.jsxs(
    ss,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: D,
      ...h,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: R, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: F, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: T, children: M() })
      ]
    }
  ) });
};
hc.displayName = "Checkboxes";
const pc = ({
  id: e,
  name: t,
  value: r,
  defaultValue: a,
  placeholder: o,
  disabled: s = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: d = !1,
  describedBy: c,
  className: f,
  rows: h = 5,
  cols: g,
  maxLength: v,
  minLength: N,
  wrap: p = "soft",
  resize: u = "vertical",
  autoComplete: R,
  spellCheck: F,
  onChange: D,
  onBlur: $,
  onFocus: M,
  onKeyDown: T,
  ...L
}) => {
  const w = xe(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": d,
      [`nhsuk-textarea--resize-${u}`]: u !== "vertical"
    },
    f
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: w,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      placeholder: o,
      disabled: s,
      readOnly: i,
      required: l,
      "aria-describedby": c,
      rows: h,
      cols: g,
      maxLength: v,
      minLength: N,
      wrap: p,
      autoComplete: R,
      spellCheck: F,
      onChange: D,
      onBlur: $,
      onFocus: M,
      onKeyDown: T,
      ...L
    }
  );
};
function mc(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Io = ({ id: e, className: t, children: r, ...a }) => {
  const o = mc({ id: e, className: t });
  return /* @__PURE__ */ n.jsx("div", { className: o.classes, id: o.id, ...a, children: r });
}, mx = ({
  id: e,
  maxLength: t,
  maxWords: r,
  threshold: a = 75,
  name: o,
  value: s,
  defaultValue: i,
  rows: l,
  className: d,
  countMessage: c,
  onCountChange: f,
  onChange: h,
  ...g
}) => {
  const v = s ?? i ?? "", [N, p] = Ie(v), [u, R] = Ie(0), [F, D] = Ie(!1), [$, M] = Ie(!1), T = he((_) => r ? _.trim() === "" ? 0 : _.trim().split(/\s+/).length : _.length, [r]);
  Be(() => {
    const _ = T(N), I = t || r || 0, k = I - _, C = Math.floor(I * (a / 100));
    R(k), D(_ > I), M(_ >= C || _ > I), f && f(_, k);
  }, [N, t, r, a, T, f]);
  const L = (_) => {
    const I = _.target.value;
    p(I), h && h(_);
  }, w = () => {
    const _ = t || r || 0, I = r ? "word" : "character", k = r ? "words" : "characters";
    if (!$)
      return `You can enter up to ${_} ${_ === 1 ? I : k}`;
    if (F) {
      const C = Math.abs(u);
      return `You have ${C} ${C === 1 ? I : k} too many`;
    } else
      return `You have ${u} ${u === 1 ? I : k} remaining`;
  }, b = xe(
    "nhsuk-character-count",
    d
  ), S = xe(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !$,
      "nhsuk-error-message": F
    },
    c?.classes
  ), m = xe(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": F
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: b,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          pc,
          {
            id: e,
            name: o,
            value: s !== void 0 ? N : void 0,
            defaultValue: s === void 0 ? i ?? N : void 0,
            rows: l,
            className: m,
            onChange: L,
            "aria-describedby": `${e}-info`,
            "aria-invalid": F || void 0,
            ...g
          }
        ),
        /* @__PURE__ */ n.jsx(
          Io,
          {
            id: `${e}-info`,
            className: S,
            role: "status",
            "aria-live": "polite",
            children: w()
          }
        )
      ]
    }
  );
}, gc = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: o,
  ...s
}) => {
  const i = xe(
    "nhsuk-select__option",
    a
  );
  return /* @__PURE__ */ n.jsx(
    "option",
    {
      className: i,
      value: e,
      disabled: t,
      ...s,
      children: o
    }
  );
}, xc = ({
  id: e,
  name: t,
  ariaLabel: r,
  value: a,
  defaultValue: o,
  disabled: s = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: d,
  className: c,
  multiple: f = !1,
  size: h,
  autoComplete: g,
  options: v,
  children: N,
  onChange: p,
  onBlur: u,
  onFocus: R,
  ...F
}) => {
  const D = xe(
    "nhsuk-select",
    {
      "nhsuk-select--error": l
    },
    c
  ), $ = () => v ? v.map((T, L) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: T.value,
      disabled: T.disabled,
      "data-initial-selected": T.selected || void 0,
      children: T.text
    },
    `${T.value}-${L}`
  )) : null, M = o === void 0 && a === void 0 && v ? v.find((T) => T.selected)?.value : void 0;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: D,
      id: e,
      name: t,
      "aria-label": r,
      value: a,
      defaultValue: o !== void 0 ? o : M,
      disabled: s,
      required: i,
      "aria-describedby": d,
      multiple: f,
      size: h,
      autoComplete: g,
      onChange: p,
      onBlur: u,
      onFocus: R,
      ...F,
      children: N || $()
    }
  );
}, Yn = xc;
Yn.Option = gc;
function Mo(e, {
  variant: t,
  selectedValue: r,
  enableBehaviourAttr: a,
  handleChange: o,
  handleBlur: s,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: d
}) {
  const { onChange: c, onBlur: f, onFocus: h, ...g } = e, {
    name: v,
    hasError: N = !1,
    describedBy: p,
    className: u,
    size: R = "normal",
    inline: F = !1,
    options: D,
    ...$
  } = g, M = xe(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": N,
      "nhsuk-radios--small": R === "small",
      "nhsuk-radios--inline": F
    },
    u
  );
  return /* @__PURE__ */ n.jsx(ss, { children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: M,
      ...$,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: D.map((T, L) => {
        const w = `${v}-${L}`, b = T.conditional ? `${w}-conditional` : void 0, S = r === T.value;
        return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: w,
              name: v,
              type: "radio",
              value: T.value,
              disabled: T.disabled,
              ...t === "client" ? { checked: S, onChange: o, onBlur: s, onFocus: i, onKeyDown: l, ref: (m) => {
                m && d && (d.current[L] = m);
              } } : { defaultChecked: S, "data-nhs-radios-input": !0 },
              "aria-describedby": p
            }
          ),
          /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: w, children: T.text }),
          T.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: T.hint }),
          T.conditional && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: xe("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !S
              }),
              id: b,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof T.conditional == "object" && T.conditional !== null && "label" in T.conditional && "id" in T.conditional && "name" in T.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
                T.conditional.label && /* @__PURE__ */ n.jsx(as, { htmlFor: T.conditional.id, children: T.conditional.label }),
                /* @__PURE__ */ n.jsx(rs, { ...T.conditional })
              ] }) : T.conditional
            }
          )
        ] }, T.value);
      })
    }
  ) });
}
const gx = ({ value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: o, ...s }) => {
  const [i, l] = Ie(e || t || ""), d = Ae([]), c = Ae(i), f = (v) => {
    const N = v.target.value;
    N !== c.current && (c.current = N, l(N), r?.(v));
  }, h = (v) => {
    o?.(v);
  }, g = he((v) => {
    const { key: N } = v;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(N)) return;
    v.preventDefault();
    const p = d.current.filter((D) => D && !D.disabled), u = p.indexOf(v.currentTarget);
    if (u === -1) return;
    let R = u;
    ["ArrowDown", "ArrowRight"].includes(N) ? R = (u + 1) % p.length : ["ArrowUp", "ArrowLeft"].includes(N) && (R = (u - 1 + p.length) % p.length);
    const F = p[R];
    F && (F.focus(), F.checked || F.click());
  }, []);
  return Mo(
    { value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: o, ...s },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: f,
      handleBlur: a,
      handleFocus: h,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: g,
      itemsRef: d
    }
  );
}, xx = ({ value: e, defaultValue: t, ...r }) => {
  const a = e || t || "";
  return Mo(
    { value: e, defaultValue: t, ...r },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0
    }
  );
}, Lo = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  style: o,
  ...s
}) => {
  const i = xe(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), l = a ? { maxWidth: a, ...o || {} } : o;
  return /* @__PURE__ */ n.jsx("div", { className: i, style: l, ...s, children: e });
}, qt = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const o = xe("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: o, style: r, ...a, children: e });
}, jn = ({
  children: e,
  width: t = "full",
  mobileWidth: r,
  tabletWidth: a,
  desktopWidth: o,
  start: s,
  className: i,
  forceWidth: l = !1,
  style: d,
  ...c
}) => {
  const f = xe(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${t}`]: !l,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${t}`]: l,
      // Responsive width overrides
      [`nhsuk-u-${r}-mobile`]: r,
      [`nhsuk-u-${a}-tablet`]: a,
      [`nhsuk-u-${o}-desktop`]: o,
      // Grid positioning
      [`nhsuk-grid-column-start-${s}`]: s && s >= 1 && s <= 7
    },
    i
  );
  return /* @__PURE__ */ n.jsx("div", { className: f, style: d, ...c, children: e });
}, ya = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const s = st.Children.toArray(e)[0], i = st.isValidElement(s) && (s.type === qt || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(Lo, { className: t, style: r, ...a, children: i ? e : /* @__PURE__ */ n.jsx(qt, { children: e }) });
}, bc = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const d = i || (t === "number" ? "ol" : "ul"), c = xe(
    "nhsuk-list",
    {
      "nhsuk-list--bullet": t === "bullet",
      "nhsuk-list--number": t === "number",
      "nhsuk-list--none": t === "none",
      "nhsuk-list--border": a,
      [`nhsuk-list--${r}`]: r !== "medium"
    },
    o
  );
  return /* @__PURE__ */ n.jsx(d, { className: c, role: s, ...l, children: e });
}, yc = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = xe("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, vc = bc;
vc.Item = yc;
const bx = ({
  debug: e = !1,
  className: t,
  children: r,
  ...a
}) => {
  if (!r)
    return null;
  const o = [
    "nhsuk-spacing-utilities",
    e && "nhsuk-spacing-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: o, ...a, children: r });
}, yx = {
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
}, vx = ({
  debug: e = !1,
  className: t,
  children: r,
  ...a
}) => {
  if (!r)
    return null;
  const o = [
    "nhsuk-width-utilities",
    e && "nhsuk-width-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: o, ...a, children: r });
}, _x = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, wx = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Ao = ({
  as: e = "main",
  size: t = "default",
  className: r,
  children: a,
  ...o
}) => {
  const s = [
    "nhsuk-main-wrapper",
    t === "large" && "nhsuk-main-wrapper--l",
    t === "small" && "nhsuk-main-wrapper--s",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx(e, { className: s, ...o, children: a });
};
function _c(e) {
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
function wc(e) {
  const t = e.level ?? _c(e.size), r = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: r, style: a };
}
const Mt = ({ level: e, className: t, text: r, html: a, children: o, size: s, marginBottom: i, ...l }) => {
  const d = wc({ level: e, size: s, className: t, marginBottom: i }), c = o || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r);
  return To(d.tag, { className: d.classes, style: d.style, ...l }, c);
};
function Sc(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const Ls = ({ id: e, className: t, visuallyHiddenText: r = "Error:", children: a, ...o }) => {
  const s = Sc({ id: e, className: t, visuallyHiddenText: r });
  return /* @__PURE__ */ n.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, Sx = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const d = Ae(null);
  Be(() => {
    d.current && d.current.focus();
  }, []);
  const c = xe(
    "nhsuk-error-summary",
    s
  ), f = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, h = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, g = (v) => {
    const N = v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text;
    return v.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: v.href,
        ...v.attributes,
        children: N
      }
    ) : N;
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
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: f() }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: i }),
          !i && (r || a) && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: h() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((v, N) => /* @__PURE__ */ n.jsx("li", { children: g(v) }, N)) })
        ] })
      ]
    }
  );
}, kx = ({
  id: e,
  className: t,
  items: r,
  namePrefix: a,
  values: o = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: d,
  ...c
}) => {
  const [f, h] = Ie(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [g, v] = Ie({}), N = (C) => C % 4 === 0 && C % 100 !== 0 || C % 400 === 0, p = (C, x) => {
    const E = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return C === 2 && N(x) ? 29 : E[C - 1];
  }, u = (C, x, E) => {
    if (!C) return;
    if (!/^\d+$/.test(C)) return "Day must be a number";
    const ee = parseInt(C, 10);
    if (ee < 1 || ee > 31) return "Day must be between 1 and 31";
    if (x && E) {
      const H = parseInt(x, 10), z = parseInt(E, 10);
      if (!isNaN(H) && !isNaN(z) && H >= 1 && H <= 12) {
        const U = p(H, z);
        if (ee > U)
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
          ][H - 1]} ${z} only has ${U} days`;
      }
    }
  }, R = (C) => {
    if (!C) return;
    if (!/^\d+$/.test(C)) return "Month must be a number";
    const x = parseInt(C, 10);
    if (x < 1 || x > 12) return "Month must be between 1 and 12";
  }, F = (C) => {
    if (!C) return;
    if (!/^\d+$/.test(C)) return "Year must be a number";
    const x = parseInt(C, 10), E = (/* @__PURE__ */ new Date()).getFullYear();
    if (x < 1900 || x > E + 10)
      return `Year must be between 1900 and ${E + 10}`;
  }, D = (C, x, E) => {
    if (!C || !x || !E) return;
    const ee = parseInt(C, 10), H = parseInt(x, 10), z = parseInt(E, 10);
    if (isNaN(ee) || isNaN(H) || isNaN(z) || H < 1 || H > 12 || z < 1900) return;
    const U = p(H, z);
    ee < 1 || ee > U;
  }, $ = he((C, x) => {
    const E = {
      ...f,
      [C]: x
    };
    h(E), d && d(E);
  }, [f, d]), M = he((C) => {
    const x = f[C];
    let E;
    if (C === "day")
      E = u(x, f.month, f.year);
    else if (C === "month") {
      if (E = R(x), !E && f.day) {
        const ee = u(f.day, x, f.year);
        v((H) => ({
          ...H,
          day: ee
        }));
      }
    } else if (C === "year" && (E = F(x), !E && f.day && f.month)) {
      const ee = u(f.day, f.month, x);
      v((H) => ({
        ...H,
        day: ee
      }));
    }
    if (v((ee) => ({
      ...ee,
      [C]: E
    })), f.day && f.month && f.year) {
      const ee = D(
        C === "day" ? x : f.day,
        C === "month" ? x : f.month,
        C === "year" ? x : f.year
      );
      ee && v((H) => ({
        ...H,
        day: ee
      }));
    }
  }, [f, u, R, F, D]), T = De(() => [
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
  let w = s?.describedBy || "";
  const b = i ? `${e}-hint` : "", S = l ? `${e}-error` : "";
  b && (w = w ? `${w} ${b}` : b), S && (w = w ? `${w} ${S}` : S);
  const m = Object.values(g).some((C) => C), _ = xe(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || m
    }
  ), I = xe(
    "nhsuk-date-input",
    t
  ), k = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Io,
      {
        id: b,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      Ls,
      {
        id: S,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(g).map(
      ([C, x]) => x ? /* @__PURE__ */ n.jsxs(
        Ls,
        {
          id: `${e}-${C}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            x
          ]
        },
        `${C}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: I, id: e, "data-testid": "date-input", ...c, children: L.map((C) => {
      const x = C.id || `${e}-${C.name}`, E = a ? `${a}[${C.name}]` : C.name, ee = C.label || C.name.charAt(0).toUpperCase() + C.name.slice(1), H = g[C.name], z = f[C.name] || "";
      let U = w;
      if (H) {
        const B = `${e}-${C.name}-error`;
        U = U ? `${U} ${B}` : B;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          as,
          {
            htmlFor: x,
            className: "nhsuk-date-input__label",
            children: ee
          }
        ),
        /* @__PURE__ */ n.jsx(
          rs,
          {
            id: x,
            name: E,
            value: z,
            className: xe("nhsuk-date-input__input", C.classes, {
              "nhsuk-input--error": H
            }),
            inputMode: C.inputmode,
            autoComplete: C.autocomplete,
            pattern: C.pattern,
            "aria-describedby": U || void 0,
            hasError: !!H,
            onChange: (B) => $(C.name, B.target.value),
            onBlur: () => M(C.name)
          }
        )
      ] }, C.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: _, children: s ? /* @__PURE__ */ n.jsx(
    ss,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: w || void 0,
      children: k()
    }
  ) : k() });
}, Fo = {
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
}, Bo = Xl(Fo), kc = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...Fo, ...t };
  return /* @__PURE__ */ n.jsx(Bo.Provider, { value: r, children: e });
}, Cx = () => {
  const e = ql(Bo);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Cc() {
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
function jc() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Cc(), document.head.appendChild(e);
}
const jx = ({ children: e, theme: t }) => (Be(() => {
  jc();
}, []), /* @__PURE__ */ n.jsx(kc, { theme: t, children: e })), Nc = ({
  mode: e = "form",
  action: t = "/search",
  method: r = "get",
  name: a = "q",
  value: o,
  placeholder: s = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: d,
  disabled: c = !1,
  callbacks: f = {},
  isLoading: h = !1,
  showResults: g = !1,
  results: v = [],
  formAttributes: N = {},
  inputAttributes: p = {},
  buttonAttributes: u = {},
  preventDefaultSubmit: R = !1,
  debounceMs: F = 300,
  minQueryLength: D = 1
}) => {
  const [$, M] = Ie(""), [T, L] = Ie(!1), w = Ae(void 0), b = Ae(null), S = Ae(null), m = e === "controlled" && o !== void 0, _ = m ? o : $, I = he((se) => {
    w.current && clearTimeout(w.current), w.current = setTimeout(() => {
      f.onChange && se.length >= D && f.onChange(se);
    }, F);
  }, [f.onChange, F, D]), k = he((se) => {
    const y = se.target.value;
    m || M(y), e !== "form" && I(y);
  }, [m, e, I]), C = he((se) => {
    const y = _.trim(), P = {
      query: y,
      timestamp: Date.now(),
      formData: new FormData(se.currentTarget)
    };
    e === "controlled" || e === "hybrid" && R ? (se.preventDefault(), f.onSearch && y.length >= D && f.onSearch(P)) : e === "hybrid" && f.onSearch && y.length >= D && f.onSearch(P);
  }, [e, _, f.onSearch, R, D]), x = he(() => {
    L(!0), f.onFocus?.();
  }, [f.onFocus]), E = he(() => {
    L(!1), f.onBlur?.();
  }, [f.onBlur]), ee = he(() => {
    m || M(""), f.onClear?.(), S.current?.focus();
  }, [m, f.onClear]);
  Be(() => () => {
    w.current && clearTimeout(w.current);
  }, []);
  const H = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: xe("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": h
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), z = () => /* @__PURE__ */ n.jsx(
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
  ), U = () => !_ || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: ee,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), B = () => !g || !v.length || !T ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: v.map((se) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: se.href ? /* @__PURE__ */ n.jsxs("a", { href: se.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: se.title }),
    se.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: se.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => f.onSearch?.({ query: se.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: se.title }),
        se.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: se.description })
      ]
    }
  ) }, se.id)) });
  return /* @__PURE__ */ n.jsxs("div", { className: xe("nhsuk-header__search", d, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": h,
    "nhsuk-header__search--focused": T,
    "nhsuk-header__search--has-results": g && v.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: b,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        role: "search",
        onSubmit: C,
        ...N,
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
                ref: S,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: _,
                onChange: k,
                onFocus: x,
                onBlur: E,
                disabled: c || h,
                ...g && v.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...p
              }
            ),
            U()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || h || e !== "form" && _.length < D,
              ...u,
              children: [
                h ? z() : H(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: h ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    B()
  ] });
};
function Eo(e, {
  variant: t,
  isClient: r,
  menuOpen: a = !1,
  showMoreButton: o = !1,
  visibleItems: s,
  dropdownVisible: i,
  toggleMenu: l,
  navContainerRef: d,
  navListRef: c
}) {
  const {
    className: f,
    logo: h = {},
    service: g = {},
    organisation: v,
    search: N,
    account: p,
    navigation: u,
    containerClasses: R,
    variant: F = "default",
    attributes: D = {},
    maxVisibleItems: $,
    // deprecated (ignored)
    responsiveNavigation: M = !0,
    ...T
  } = e;
  "maxVisibleItems" in T && delete T.maxVisibleItems;
  const L = g.href && !h.href || g.href && g.href === h.href, w = L ? g.href : h.href, b = xe(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": F === "organisation" || v,
      "nhsuk-header--white": F === "white"
    },
    f
  ), S = xe(
    "nhsuk-header__container",
    R
  ), m = xe(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": u?.white,
      "nhsuk-header__navigation--justified": u?.justified
    },
    u?.className
  ), _ = () => /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsx("title", { children: h.ariaLabel || "NHS" }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), I = () => h.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: h.src,
      width: "280",
      alt: h.ariaLabel || "NHS"
    }
  ) : _(), k = () => v ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      v.name,
      v.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        v.split
      ] })
    ] }),
    v.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: v.descriptor })
  ] }) : null, C = (U, B) => U ? B ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: B, children: U }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: U }) : null, x = (U) => U.active || U.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: U.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: U.html } }) : U.text }) : U.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: U.html } }) : U.text, E = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), ee = t === "server" && u?.items && !M, H = ee ? [] : u?.items, z = ee ? u.items : [];
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: b,
      role: "banner",
      "data-module": "nhsuk-header",
      ...D,
      ...T,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: S, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            w ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: w, children: [
              I(),
              k(),
              L && C(g.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              I(),
              k(),
              L && C(g.text)
            ] }),
            g.text && !L && C(g.text, g.href)
          ] }),
          N && /* @__PURE__ */ n.jsx(Nc, { ...N }),
          /* @__PURE__ */ n.jsx(
            sc,
            {
              ...p,
              variant: F === "white" ? "white" : "default"
            }
          )
        ] }),
        u && u.items && u.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: m,
            "aria-label": u.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: xe(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": r && t === "client",
                    "nhsuk-header__navigation-container--ssr": !r
                  },
                  R
                ),
                ref: t === "client" ? d : void 0,
                children: /* @__PURE__ */ n.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: t === "client" ? c : void 0,
                    children: [
                      (t === "server" ? H || [] : u?.items || []).map((U, B) => /* @__PURE__ */ n.jsx(
                        "li",
                        {
                          className: xe(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": U.active || U.current,
                              "nhsuk-header__navigation-item--hidden": t === "client" && o && s !== void 0 && B >= (s ?? 0)
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
                              children: x(U)
                            }
                          )
                        },
                        B
                      )),
                      t === "client" && o && s !== void 0 && /* @__PURE__ */ n.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ n.jsxs(
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
        t === "client" && r && u && u.items && u.items.length > 0 && a && i && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: u.items.slice(s ?? 0).map((U, B) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: xe("nhsuk-header__dropdown-item", {
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
                    children: x(U)
                  }
                )
              },
              `overflow-${(s ?? 0) + B}`
            )) })
          }
        ),
        t === "server" && ee && z.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: z.map((U, B) => /* @__PURE__ */ n.jsx(
          "li",
          {
            className: xe("nhsuk-header__dropdown-item", {
              "nhsuk-header__dropdown-item--current": U.active || U.current
            }),
            children: /* @__PURE__ */ n.jsx(
              "a",
              {
                className: "nhsuk-header__dropdown-link",
                href: U.href,
                ...U.active || U.current ? { "aria-current": U.current ? "page" : "true" } : {},
                children: x(U)
              }
            )
          },
          `overflow-server-${B}`
        )) }) })
      ]
    }
  );
}
const Po = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: d = "default",
  attributes: c = {},
  ...f
}) => {
  const [h, g] = Ie(!1), [v, N] = Ie(!1), [p, u] = Ie(i?.items?.length || 0), [R, F] = Ie(!1), [D, $] = Ie(!1), M = Ae(null), T = Ae(null), L = Ae(!1);
  Be(() => {
    typeof window > "u" || $(!0);
  }, []), Be(() => {
    if (typeof document > "u") return;
    const m = (_) => {
      _.key === "Escape" && h && g(!1);
    };
    if (h)
      return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [h]);
  const w = Ae(null), b = he(() => {
    if (!D || !i?.items || i.items.length === 0 || L.current) return;
    const m = M.current, _ = T.current;
    if (!m || !_) return;
    L.current = !0, m.classList.add("nhsuk-header__navigation-container--measuring");
    const I = m.clientWidth, k = Array.from(_.children);
    if (!k.length) {
      m.classList.remove("nhsuk-header__navigation-container--measuring"), L.current = !1;
      return;
    }
    if (w.current == null) {
      const y = document.createElement("button");
      y.type = "button", y.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", y.style.position = "absolute", y.style.visibility = "hidden", y.style.pointerEvents = "none", y.innerHTML = "<span>More</span>", m.appendChild(y), w.current = y.getBoundingClientRect().width || 104, m.removeChild(y);
    }
    const C = w.current + 16;
    let x = 0, E = 0;
    const ee = window.getComputedStyle(m), H = parseFloat(ee.paddingLeft) || 0, z = parseFloat(ee.paddingRight) || 0;
    let U = H + z;
    for (const y of k) {
      const P = y.getBoundingClientRect().width;
      if (x + P + C + U > I) break;
      x += P, E += 1;
    }
    const B = E < i.items.length, se = B ? E : i.items.length;
    N((y) => y === B ? y : B), u((y) => y === se ? y : se), m.classList.remove("nhsuk-header__navigation-container--measuring"), L.current = !1;
  }, [D, i?.items]);
  Be(() => {
    if (!D) return;
    const m = M.current;
    if (!m) return;
    let _ = null;
    const I = () => {
      _ == null && (_ = window.requestAnimationFrame(() => {
        _ = null, b();
      }));
    };
    b();
    const k = new ResizeObserver(() => I());
    return k.observe(m), T.current && k.observe(T.current), () => {
      _ != null && window.cancelAnimationFrame(_), k.disconnect();
    };
  }, [D, b]), Be(() => {
    D && b();
  }, [i?.items?.length, D, b]);
  const S = (m) => {
    m && (m.preventDefault(), m.stopPropagation());
    const _ = !h;
    g(_), F(_);
  };
  return Eo(
    {
      className: e,
      logo: t,
      service: r,
      organisation: a,
      search: o,
      account: s,
      navigation: i,
      containerClasses: l,
      variant: d,
      attributes: c,
      ...f
    },
    {
      variant: "client",
      isClient: D,
      menuOpen: h,
      showMoreButton: v,
      visibleItems: p,
      dropdownVisible: R,
      toggleMenu: S,
      navContainerRef: M,
      navListRef: T
    }
  );
}, Nx = (e) => Eo(e, {
  variant: "server",
  isClient: !1
}), Tc = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: r = "",
  text: a,
  html: o,
  imageURL: s,
  containerClasses: i = "",
  classes: l = "",
  children: d,
  ...c
}) => {
  const f = [
    "nhsuk-hero",
    s && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    s && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), h = [
    "nhsuk-width-container",
    i,
    s ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), g = [
    "nhsuk-hero__heading",
    r,
    !d && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), v = d || e || a || o, N = () => {
    if (!e) return null;
    const p = { className: g };
    switch (t) {
      case 1:
        return /* @__PURE__ */ n.jsx("h1", { ...p, children: e });
      case 2:
        return /* @__PURE__ */ n.jsx("h2", { ...p, children: e });
      case 3:
        return /* @__PURE__ */ n.jsx("h3", { ...p, children: e });
      case 4:
        return /* @__PURE__ */ n.jsx("h4", { ...p, children: e });
      case 5:
        return /* @__PURE__ */ n.jsx("h5", { ...p, children: e });
      case 6:
        return /* @__PURE__ */ n.jsx("h6", { ...p, children: e });
      default:
        return /* @__PURE__ */ n.jsx("h1", { ...p, children: e });
    }
  };
  return /* @__PURE__ */ n.jsxs(
    "section",
    {
      className: f,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...c,
      children: [
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: v && /* @__PURE__ */ n.jsx("div", { className: h, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          N(),
          d || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && v && /* @__PURE__ */ n.jsx("div", { className: h, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          N(),
          d || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Tc.displayName = "Hero";
const Ro = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: a,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: d,
  footerStyle: c,
  containerStyle: f
}) => {
  const h = (v, N = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: xe("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": N
      }),
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: v.URL,
          target: v.newWindow ? "_blank" : void 0,
          rel: v.newWindow ? "noopener noreferrer" : void 0,
          children: v.label
        }
      )
    },
    `${v.URL}-${v.label}`
  ), g = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...d }, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: xe("nhsuk-width-container", i),
        style: f,
        children: [
          /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ n.jsx("div", { className: xe("nhsuk-footer", e), style: c, children: g ? (
            // Multi-column layout
            /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((v) => h(v)) }),
              r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((v) => h(v)) }),
              a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((v) => h(v)) }),
              o && o.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((v) => h(v)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((v) => h(v, !0)),
              (r || []).map((v) => h(v, !0)),
              (a || []).map((v) => h(v, !0)),
              (o || []).map((v) => h(v, !0))
            ] })
          ) }),
          !g && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    g && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function Gn(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function $c(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function os(e) {
  let t, r, a;
  e.length !== 2 ? (t = Gn, r = (l, d) => Gn(e(l), d), a = (l, d) => e(l) - d) : (t = e === Gn || e === $c ? e : Dc, r = e, a = e);
  function o(l, d, c = 0, f = l.length) {
    if (c < f) {
      if (t(d, d) !== 0) return f;
      do {
        const h = c + f >>> 1;
        r(l[h], d) < 0 ? c = h + 1 : f = h;
      } while (c < f);
    }
    return c;
  }
  function s(l, d, c = 0, f = l.length) {
    if (c < f) {
      if (t(d, d) !== 0) return f;
      do {
        const h = c + f >>> 1;
        r(l[h], d) <= 0 ? c = h + 1 : f = h;
      } while (c < f);
    }
    return c;
  }
  function i(l, d, c = 0, f = l.length) {
    const h = o(l, d, c, f - 1);
    return h > c && a(l[h - 1], d) > -a(l[h], d) ? h - 1 : h;
  }
  return { left: o, center: i, right: s };
}
function Dc() {
  return 0;
}
function Ic(e) {
  return e === null ? NaN : +e;
}
const Mc = os(Gn), Lc = Mc.right;
os(Ic).center;
function Ho(e, t) {
  let r, a;
  if (t === void 0)
    for (const o of e)
      o != null && (r === void 0 ? o >= o && (r = a = o) : (r > o && (r = o), a < o && (a = o)));
  else {
    let o = -1;
    for (let s of e)
      (s = t(s, ++o, e)) != null && (r === void 0 ? s >= s && (r = a = s) : (r > s && (r = s), a < s && (a = s)));
  }
  return [r, a];
}
class As extends Map {
  constructor(t, r = Bc) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(Fs(this, t));
  }
  has(t) {
    return super.has(Fs(this, t));
  }
  set(t, r) {
    return super.set(Ac(this, t), r);
  }
  delete(t) {
    return super.delete(Fc(this, t));
  }
}
function Fs({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : r;
}
function Ac({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : (e.set(a, r), r);
}
function Fc({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) && (r = e.get(a), e.delete(a)), r;
}
function Bc(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Ec = Math.sqrt(50), Pc = Math.sqrt(10), Rc = Math.sqrt(2);
function qn(e, t, r) {
  const a = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= Ec ? 10 : s >= Pc ? 5 : s >= Rc ? 2 : 1;
  let l, d, c;
  return o < 0 ? (c = Math.pow(10, -o) / i, l = Math.round(e * c), d = Math.round(t * c), l / c < e && ++l, d / c > t && --d, c = -c) : (c = Math.pow(10, o) * i, l = Math.round(e / c), d = Math.round(t / c), l * c < e && ++l, d * c > t && --d), d < l && 0.5 <= r && r < 2 ? qn(e, t, r * 2) : [l, d, c];
}
function Hc(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, s, i] = a ? qn(t, e, r) : qn(e, t, r);
  if (!(s >= o)) return [];
  const l = s - o + 1, d = new Array(l);
  if (a)
    if (i < 0) for (let c = 0; c < l; ++c) d[c] = (s - c) / -i;
    else for (let c = 0; c < l; ++c) d[c] = (s - c) * i;
  else if (i < 0) for (let c = 0; c < l; ++c) d[c] = (o + c) / -i;
  else for (let c = 0; c < l; ++c) d[c] = (o + c) * i;
  return d;
}
function va(e, t, r) {
  return t = +t, e = +e, r = +r, qn(e, t, r)[2];
}
function _a(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, o = a ? va(t, e, r) : va(e, t, r);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function zc(e, t, r) {
  e = +e, t = +t, r = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +r;
  for (var a = -1, o = Math.max(0, Math.ceil((t - e) / r)) | 0, s = new Array(o); ++a < o; )
    s[a] = e + a * r;
  return s;
}
function Er(e, t) {
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
const Bs = Symbol("implicit");
function zo() {
  var e = new As(), t = [], r = [], a = Bs;
  function o(s) {
    let i = e.get(s);
    if (i === void 0) {
      if (a !== Bs) return a;
      e.set(s, i = t.push(s) - 1);
    }
    return r[i % r.length];
  }
  return o.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new As();
    for (const i of s)
      e.has(i) || e.set(i, t.push(i) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (r = Array.from(s), o) : r.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (a = s, o) : a;
  }, o.copy = function() {
    return zo(t, r).unknown(a);
  }, Er.apply(o, arguments), o;
}
function Oo() {
  var e = zo().unknown(void 0), t = e.domain, r = e.range, a = 0, o = 1, s, i, l = !1, d = 0, c = 0, f = 0.5;
  delete e.unknown;
  function h() {
    var g = t().length, v = o < a, N = v ? o : a, p = v ? a : o;
    s = (p - N) / Math.max(1, g - d + c * 2), l && (s = Math.floor(s)), N += (p - N - s * (g - d)) * f, i = s * (1 - d), l && (N = Math.round(N), i = Math.round(i));
    var u = zc(g).map(function(R) {
      return N + s * R;
    });
    return r(v ? u.reverse() : u);
  }
  return e.domain = function(g) {
    return arguments.length ? (t(g), h()) : t();
  }, e.range = function(g) {
    return arguments.length ? ([a, o] = g, a = +a, o = +o, h()) : [a, o];
  }, e.rangeRound = function(g) {
    return [a, o] = g, a = +a, o = +o, l = !0, h();
  }, e.bandwidth = function() {
    return i;
  }, e.step = function() {
    return s;
  }, e.round = function(g) {
    return arguments.length ? (l = !!g, h()) : l;
  }, e.padding = function(g) {
    return arguments.length ? (d = Math.min(1, c = +g), h()) : d;
  }, e.paddingInner = function(g) {
    return arguments.length ? (d = Math.min(1, g), h()) : d;
  }, e.paddingOuter = function(g) {
    return arguments.length ? (c = +g, h()) : c;
  }, e.align = function(g) {
    return arguments.length ? (f = Math.max(0, Math.min(1, g)), h()) : f;
  }, e.copy = function() {
    return Oo(t(), [a, o]).round(l).paddingInner(d).paddingOuter(c).align(f);
  }, Er.apply(h(), arguments);
}
function is(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Wo(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function An() {
}
var Nn = 0.7, Xn = 1 / Nn, dn = "\\s*([+-]?\\d+)\\s*", Tn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", mt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Oc = /^#([0-9a-f]{3,8})$/, Wc = new RegExp(`^rgb\\(${dn},${dn},${dn}\\)$`), Uc = new RegExp(`^rgb\\(${mt},${mt},${mt}\\)$`), Gc = new RegExp(`^rgba\\(${dn},${dn},${dn},${Tn}\\)$`), Vc = new RegExp(`^rgba\\(${mt},${mt},${mt},${Tn}\\)$`), Yc = new RegExp(`^hsl\\(${Tn},${mt},${mt}\\)$`), qc = new RegExp(`^hsla\\(${Tn},${mt},${mt},${Tn}\\)$`), Es = {
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
is(An, $n, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ps,
  // Deprecated! Use color.formatHex.
  formatHex: Ps,
  formatHex8: Xc,
  formatHsl: Kc,
  formatRgb: Rs,
  toString: Rs
});
function Ps() {
  return this.rgb().formatHex();
}
function Xc() {
  return this.rgb().formatHex8();
}
function Kc() {
  return Uo(this).formatHsl();
}
function Rs() {
  return this.rgb().formatRgb();
}
function $n(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Oc.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Hs(t) : r === 3 ? new at(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? zn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? zn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Wc.exec(e)) ? new at(t[1], t[2], t[3], 1) : (t = Uc.exec(e)) ? new at(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Gc.exec(e)) ? zn(t[1], t[2], t[3], t[4]) : (t = Vc.exec(e)) ? zn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Yc.exec(e)) ? Ws(t[1], t[2] / 100, t[3] / 100, 1) : (t = qc.exec(e)) ? Ws(t[1], t[2] / 100, t[3] / 100, t[4]) : Es.hasOwnProperty(e) ? Hs(Es[e]) : e === "transparent" ? new at(NaN, NaN, NaN, 0) : null;
}
function Hs(e) {
  return new at(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function zn(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new at(e, t, r, a);
}
function Zc(e) {
  return e instanceof An || (e = $n(e)), e ? (e = e.rgb(), new at(e.r, e.g, e.b, e.opacity)) : new at();
}
function wa(e, t, r, a) {
  return arguments.length === 1 ? Zc(e) : new at(e, t, r, a ?? 1);
}
function at(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
is(at, wa, Wo(An, {
  brighter(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new at(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Nn : Math.pow(Nn, e), new at(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new at(Yt(this.r), Yt(this.g), Yt(this.b), Kn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: zs,
  // Deprecated! Use color.formatHex.
  formatHex: zs,
  formatHex8: Jc,
  formatRgb: Os,
  toString: Os
}));
function zs() {
  return `#${Vt(this.r)}${Vt(this.g)}${Vt(this.b)}`;
}
function Jc() {
  return `#${Vt(this.r)}${Vt(this.g)}${Vt(this.b)}${Vt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Os() {
  const e = Kn(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Yt(this.r)}, ${Yt(this.g)}, ${Yt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Kn(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Yt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Vt(e) {
  return e = Yt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ws(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new lt(e, t, r, a);
}
function Uo(e) {
  if (e instanceof lt) return new lt(e.h, e.s, e.l, e.opacity);
  if (e instanceof An || (e = $n(e)), !e) return new lt();
  if (e instanceof lt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, o = Math.min(t, r, a), s = Math.max(t, r, a), i = NaN, l = s - o, d = (s + o) / 2;
  return l ? (t === s ? i = (r - a) / l + (r < a) * 6 : r === s ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= d < 0.5 ? s + o : 2 - s - o, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new lt(i, l, d, e.opacity);
}
function Qc(e, t, r, a) {
  return arguments.length === 1 ? Uo(e) : new lt(e, t, r, a ?? 1);
}
function lt(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
is(lt, Qc, Wo(An, {
  brighter(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new lt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Nn : Math.pow(Nn, e), new lt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - a;
    return new at(
      ta(e >= 240 ? e - 240 : e + 120, o, a),
      ta(e, o, a),
      ta(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new lt(Us(this.h), On(this.s), On(this.l), Kn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Kn(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Us(this.h)}, ${On(this.s) * 100}%, ${On(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Us(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function On(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ta(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const ls = (e) => () => e;
function ed(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function td(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function nd(e) {
  return (e = +e) == 1 ? Go : function(t, r) {
    return r - t ? td(t, r, e) : ls(isNaN(t) ? r : t);
  };
}
function Go(e, t) {
  var r = t - e;
  return r ? ed(e, r) : ls(isNaN(e) ? t : e);
}
const Gs = (function e(t) {
  var r = nd(t);
  function a(o, s) {
    var i = r((o = wa(o)).r, (s = wa(s)).r), l = r(o.g, s.g), d = r(o.b, s.b), c = Go(o.opacity, s.opacity);
    return function(f) {
      return o.r = i(f), o.g = l(f), o.b = d(f), o.opacity = c(f), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function rd(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function ad(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function sd(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, o = new Array(a), s = new Array(r), i;
  for (i = 0; i < a; ++i) o[i] = cs(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function od(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function Zn(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function id(e, t) {
  var r = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = cs(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in r) a[o] = r[o](s);
    return a;
  };
}
var Sa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, na = new RegExp(Sa.source, "g");
function ld(e) {
  return function() {
    return e;
  };
}
function cd(e) {
  return function(t) {
    return e(t) + "";
  };
}
function dd(e, t) {
  var r = Sa.lastIndex = na.lastIndex = 0, a, o, s, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (a = Sa.exec(e)) && (o = na.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, d.push({ i, x: Zn(a, o) })), r = na.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? d[0] ? cd(d[0].x) : ld(t) : (t = d.length, function(c) {
    for (var f = 0, h; f < t; ++f) l[(h = d[f]).i] = h.x(c);
    return l.join("");
  });
}
function cs(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? ls(t) : (r === "number" ? Zn : r === "string" ? (a = $n(t)) ? (t = a, Gs) : dd : t instanceof $n ? Gs : t instanceof Date ? od : ad(t) ? rd : Array.isArray(t) ? sd : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? id : Zn)(e, t);
}
function ud(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function fd(e) {
  return function() {
    return e;
  };
}
function hd(e) {
  return +e;
}
var Vs = [0, 1];
function ln(e) {
  return e;
}
function ka(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : fd(isNaN(t) ? NaN : 0.5);
}
function pd(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function md(e, t, r) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = ka(o, a), s = r(i, s)) : (a = ka(a, o), s = r(s, i)), function(l) {
    return s(a(l));
  };
}
function gd(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = ka(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var d = Lc(e, l, 1, a) - 1;
    return s[d](o[d](l));
  };
}
function Vo(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function xd() {
  var e = Vs, t = Vs, r = cs, a, o, s, i = ln, l, d, c;
  function f() {
    var g = Math.min(e.length, t.length);
    return i !== ln && (i = pd(e[0], e[g - 1])), l = g > 2 ? gd : md, d = c = null, h;
  }
  function h(g) {
    return g == null || isNaN(g = +g) ? s : (d || (d = l(e.map(a), t, r)))(a(i(g)));
  }
  return h.invert = function(g) {
    return i(o((c || (c = l(t, e.map(a), Zn)))(g)));
  }, h.domain = function(g) {
    return arguments.length ? (e = Array.from(g, hd), f()) : e.slice();
  }, h.range = function(g) {
    return arguments.length ? (t = Array.from(g), f()) : t.slice();
  }, h.rangeRound = function(g) {
    return t = Array.from(g), r = ud, f();
  }, h.clamp = function(g) {
    return arguments.length ? (i = g ? !0 : ln, f()) : i !== ln;
  }, h.interpolate = function(g) {
    return arguments.length ? (r = g, f()) : r;
  }, h.unknown = function(g) {
    return arguments.length ? (s = g, h) : s;
  }, function(g, v) {
    return a = g, o = v, f();
  };
}
function Yo() {
  return xd()(ln, ln);
}
function bd(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Jn(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, a = e.slice(0, r);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(r + 1)
  ];
}
function hn(e) {
  return e = Jn(Math.abs(e)), e ? e[1] : NaN;
}
function yd(e, t) {
  return function(r, a) {
    for (var o = r.length, s = [], i = 0, l = e[0], d = 0; o > 0 && l > 0 && (d + l + 1 > a && (l = Math.max(1, a - d)), s.push(r.substring(o -= l, o + l)), !((d += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function vd(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var _d = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Qn(e) {
  if (!(t = _d.exec(e))) throw new Error("invalid format: " + e);
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
Qn.prototype = ds.prototype;
function ds(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
ds.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function wd(e) {
  e: for (var t = e.length, r = 1, a = -1, o; r < t; ++r)
    switch (e[r]) {
      case ".":
        a = o = r;
        break;
      case "0":
        a === 0 && (a = r), o = r;
        break;
      default:
        if (!+e[r]) break e;
        a > 0 && (a = 0);
        break;
    }
  return a > 0 ? e.slice(0, a) + e.slice(o + 1) : e;
}
var qo;
function Sd(e, t) {
  var r = Jn(e, t);
  if (!r) return e + "";
  var a = r[0], o = r[1], s = o - (qo = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = a.length;
  return s === i ? a : s > i ? a + new Array(s - i + 1).join("0") : s > 0 ? a.slice(0, s) + "." + a.slice(s) : "0." + new Array(1 - s).join("0") + Jn(e, Math.max(0, t + s - 1))[0];
}
function Ys(e, t) {
  var r = Jn(e, t);
  if (!r) return e + "";
  var a = r[0], o = r[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const qs = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: bd,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ys(e * 100, t),
  r: Ys,
  s: Sd,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Xs(e) {
  return e;
}
var Ks = Array.prototype.map, Zs = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function kd(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Xs : yd(Ks.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? Xs : vd(Ks.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", d = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(h) {
    h = Qn(h);
    var g = h.fill, v = h.align, N = h.sign, p = h.symbol, u = h.zero, R = h.width, F = h.comma, D = h.precision, $ = h.trim, M = h.type;
    M === "n" ? (F = !0, M = "g") : qs[M] || (D === void 0 && (D = 12), $ = !0, M = "g"), (u || g === "0" && v === "=") && (u = !0, g = "0", v = "=");
    var T = p === "$" ? r : p === "#" && /[boxX]/.test(M) ? "0" + M.toLowerCase() : "", L = p === "$" ? a : /[%p]/.test(M) ? i : "", w = qs[M], b = /[defgprs%]/.test(M);
    D = D === void 0 ? 6 : /[gprs]/.test(M) ? Math.max(1, Math.min(21, D)) : Math.max(0, Math.min(20, D));
    function S(m) {
      var _ = T, I = L, k, C, x;
      if (M === "c")
        I = w(m) + I, m = "";
      else {
        m = +m;
        var E = m < 0 || 1 / m < 0;
        if (m = isNaN(m) ? d : w(Math.abs(m), D), $ && (m = wd(m)), E && +m == 0 && N !== "+" && (E = !1), _ = (E ? N === "(" ? N : l : N === "-" || N === "(" ? "" : N) + _, I = (M === "s" ? Zs[8 + qo / 3] : "") + I + (E && N === "(" ? ")" : ""), b) {
          for (k = -1, C = m.length; ++k < C; )
            if (x = m.charCodeAt(k), 48 > x || x > 57) {
              I = (x === 46 ? o + m.slice(k + 1) : m.slice(k)) + I, m = m.slice(0, k);
              break;
            }
        }
      }
      F && !u && (m = t(m, 1 / 0));
      var ee = _.length + m.length + I.length, H = ee < R ? new Array(R - ee + 1).join(g) : "";
      switch (F && u && (m = t(H + m, H.length ? R - I.length : 1 / 0), H = ""), v) {
        case "<":
          m = _ + m + I + H;
          break;
        case "=":
          m = _ + H + m + I;
          break;
        case "^":
          m = H.slice(0, ee = H.length >> 1) + _ + m + I + H.slice(ee);
          break;
        default:
          m = H + _ + m + I;
          break;
      }
      return s(m);
    }
    return S.toString = function() {
      return h + "";
    }, S;
  }
  function f(h, g) {
    var v = c((h = Qn(h), h.type = "f", h)), N = Math.max(-8, Math.min(8, Math.floor(hn(g) / 3))) * 3, p = Math.pow(10, -N), u = Zs[8 + N / 3];
    return function(R) {
      return v(p * R) + u;
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}
var Wn, Xo, Ko;
Cd({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Cd(e) {
  return Wn = kd(e), Xo = Wn.format, Ko = Wn.formatPrefix, Wn;
}
function jd(e) {
  return Math.max(0, -hn(Math.abs(e)));
}
function Nd(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(hn(t) / 3))) * 3 - hn(Math.abs(e)));
}
function Td(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, hn(t) - hn(e)) + 1;
}
function $d(e, t, r, a) {
  var o = _a(e, t, r), s;
  switch (a = Qn(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(s = Nd(o, i)) && (a.precision = s), Ko(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(s = Td(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = s - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(s = jd(o)) && (a.precision = s - (a.type === "%") * 2);
      break;
    }
  }
  return Xo(a);
}
function Dd(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var a = t();
    return Hc(a[0], a[a.length - 1], r ?? 10);
  }, e.tickFormat = function(r, a) {
    var o = t();
    return $d(o[0], o[o.length - 1], r ?? 10, a);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var a = t(), o = 0, s = a.length - 1, i = a[o], l = a[s], d, c, f = 10;
    for (l < i && (c = i, i = l, l = c, c = o, o = s, s = c); f-- > 0; ) {
      if (c = va(i, l, r), c === d)
        return a[o] = i, a[s] = l, t(a);
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
function er() {
  var e = Yo();
  return e.copy = function() {
    return Vo(e, er());
  }, Er.apply(e, arguments), Dd(e);
}
function Id(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, o = e[r], s = e[a], i;
  return s < o && (i = r, r = a, a = i, i = o, o = s, s = i), e[r] = t.floor(o), e[a] = t.ceil(s), e;
}
const ra = /* @__PURE__ */ new Date(), aa = /* @__PURE__ */ new Date();
function Xe(e, t, r, a) {
  function o(s) {
    return e(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return o.floor = (s) => (e(s = /* @__PURE__ */ new Date(+s)), s), o.ceil = (s) => (e(s = new Date(s - 1)), t(s, 1), e(s), s), o.round = (s) => {
    const i = o(s), l = o.ceil(s);
    return s - i < l - s ? i : l;
  }, o.offset = (s, i) => (t(s = /* @__PURE__ */ new Date(+s), i == null ? 1 : Math.floor(i)), s), o.range = (s, i, l) => {
    const d = [];
    if (s = o.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < i) || !(l > 0)) return d;
    let c;
    do
      d.push(c = /* @__PURE__ */ new Date(+s)), t(s, l), e(s);
    while (c < s && s < i);
    return d;
  }, o.filter = (s) => Xe((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), r && (o.count = (s, i) => (ra.setTime(+s), aa.setTime(+i), e(ra), e(aa), Math.floor(r(ra, aa))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const tr = Xe(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
tr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Xe((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : tr);
tr.range;
const Dt = 1e3, it = Dt * 60, It = it * 60, Lt = It * 24, us = Lt * 7, Js = Lt * 30, sa = Lt * 365, cn = Xe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Dt);
}, (e, t) => (t - e) / Dt, (e) => e.getUTCSeconds());
cn.range;
const fs = Xe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Dt);
}, (e, t) => {
  e.setTime(+e + t * it);
}, (e, t) => (t - e) / it, (e) => e.getMinutes());
fs.range;
const Md = Xe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * it);
}, (e, t) => (t - e) / it, (e) => e.getUTCMinutes());
Md.range;
const hs = Xe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Dt - e.getMinutes() * it);
}, (e, t) => {
  e.setTime(+e + t * It);
}, (e, t) => (t - e) / It, (e) => e.getHours());
hs.range;
const Ld = Xe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * It);
}, (e, t) => (t - e) / It, (e) => e.getUTCHours());
Ld.range;
const Fn = Xe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * it) / Lt,
  (e) => e.getDate() - 1
);
Fn.range;
const ps = Xe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Lt, (e) => e.getUTCDate() - 1);
ps.range;
const Ad = Xe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Lt, (e) => Math.floor(e / Lt));
Ad.range;
function Zt(e) {
  return Xe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * it) / us);
}
const Pr = Zt(0), nr = Zt(1), Fd = Zt(2), Bd = Zt(3), pn = Zt(4), Ed = Zt(5), Pd = Zt(6);
Pr.range;
nr.range;
Fd.range;
Bd.range;
pn.range;
Ed.range;
Pd.range;
function Jt(e) {
  return Xe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / us);
}
const Zo = Jt(0), rr = Jt(1), Rd = Jt(2), Hd = Jt(3), mn = Jt(4), zd = Jt(5), Od = Jt(6);
Zo.range;
rr.range;
Rd.range;
Hd.range;
mn.range;
zd.range;
Od.range;
const Dn = Xe((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Dn.range;
const Wd = Xe((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Wd.range;
const At = Xe((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
At.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Xe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
At.range;
const Xt = Xe((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Xt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Xe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Xt.range;
function Ud(e, t, r, a, o, s) {
  const i = [
    [cn, 1, Dt],
    [cn, 5, 5 * Dt],
    [cn, 15, 15 * Dt],
    [cn, 30, 30 * Dt],
    [s, 1, it],
    [s, 5, 5 * it],
    [s, 15, 15 * it],
    [s, 30, 30 * it],
    [o, 1, It],
    [o, 3, 3 * It],
    [o, 6, 6 * It],
    [o, 12, 12 * It],
    [a, 1, Lt],
    [a, 2, 2 * Lt],
    [r, 1, us],
    [t, 1, Js],
    [t, 3, 3 * Js],
    [e, 1, sa]
  ];
  function l(c, f, h) {
    const g = f < c;
    g && ([c, f] = [f, c]);
    const v = h && typeof h.range == "function" ? h : d(c, f, h), N = v ? v.range(c, +f + 1) : [];
    return g ? N.reverse() : N;
  }
  function d(c, f, h) {
    const g = Math.abs(f - c) / h, v = os(([, , u]) => u).right(i, g);
    if (v === i.length) return e.every(_a(c / sa, f / sa, h));
    if (v === 0) return tr.every(Math.max(_a(c, f, h), 1));
    const [N, p] = i[g / i[v - 1][2] < i[v][2] / g ? v - 1 : v];
    return N.every(p);
  }
  return [l, d];
}
const [Gd, Vd] = Ud(At, Dn, Pr, Fn, hs, fs);
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
function _n(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Yd(e) {
  var t = e.dateTime, r = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = wn(o), f = Sn(o), h = wn(s), g = Sn(s), v = wn(i), N = Sn(i), p = wn(l), u = Sn(l), R = wn(d), F = Sn(d), D = {
    a: E,
    A: ee,
    b: H,
    B: z,
    c: null,
    d: ao,
    e: ao,
    f: gu,
    g: ju,
    G: Tu,
    H: hu,
    I: pu,
    j: mu,
    L: Jo,
    m: xu,
    M: bu,
    p: U,
    q: B,
    Q: io,
    s: lo,
    S: yu,
    u: vu,
    U: _u,
    V: wu,
    w: Su,
    W: ku,
    x: null,
    X: null,
    y: Cu,
    Y: Nu,
    Z: $u,
    "%": oo
  }, $ = {
    a: se,
    A: y,
    b: P,
    B: Z,
    c: null,
    d: so,
    e: so,
    f: Lu,
    g: Wu,
    G: Gu,
    H: Du,
    I: Iu,
    j: Mu,
    L: ei,
    m: Au,
    M: Fu,
    p: te,
    q: V,
    Q: io,
    s: lo,
    S: Bu,
    u: Eu,
    U: Pu,
    V: Ru,
    w: Hu,
    W: zu,
    x: null,
    X: null,
    y: Ou,
    Y: Uu,
    Z: Vu,
    "%": oo
  }, M = {
    a: S,
    A: m,
    b: _,
    B: I,
    c: k,
    d: no,
    e: no,
    f: cu,
    g: to,
    G: eo,
    H: ro,
    I: ro,
    j: su,
    L: lu,
    m: au,
    M: ou,
    p: b,
    q: ru,
    Q: uu,
    s: fu,
    S: iu,
    u: Jd,
    U: Qd,
    V: eu,
    w: Zd,
    W: tu,
    x: C,
    X: x,
    y: to,
    Y: eo,
    Z: nu,
    "%": du
  };
  D.x = T(r, D), D.X = T(a, D), D.c = T(t, D), $.x = T(r, $), $.X = T(a, $), $.c = T(t, $);
  function T(A, W) {
    return function(oe) {
      var O = [], ce = -1, re = 0, le = A.length, de, be, Te;
      for (oe instanceof Date || (oe = /* @__PURE__ */ new Date(+oe)); ++ce < le; )
        A.charCodeAt(ce) === 37 && (O.push(A.slice(re, ce)), (be = Qs[de = A.charAt(++ce)]) != null ? de = A.charAt(++ce) : be = de === "e" ? " " : "0", (Te = W[de]) && (de = Te(oe, be)), O.push(de), re = ce + 1);
      return O.push(A.slice(re, ce)), O.join("");
    };
  }
  function L(A, W) {
    return function(oe) {
      var O = _n(1900, void 0, 1), ce = w(O, A, oe += "", 0), re, le;
      if (ce != oe.length) return null;
      if ("Q" in O) return new Date(O.Q);
      if ("s" in O) return new Date(O.s * 1e3 + ("L" in O ? O.L : 0));
      if (W && !("Z" in O) && (O.Z = 0), "p" in O && (O.H = O.H % 12 + O.p * 12), O.m === void 0 && (O.m = "q" in O ? O.q : 0), "V" in O) {
        if (O.V < 1 || O.V > 53) return null;
        "w" in O || (O.w = 1), "Z" in O ? (re = ia(_n(O.y, 0, 1)), le = re.getUTCDay(), re = le > 4 || le === 0 ? rr.ceil(re) : rr(re), re = ps.offset(re, (O.V - 1) * 7), O.y = re.getUTCFullYear(), O.m = re.getUTCMonth(), O.d = re.getUTCDate() + (O.w + 6) % 7) : (re = oa(_n(O.y, 0, 1)), le = re.getDay(), re = le > 4 || le === 0 ? nr.ceil(re) : nr(re), re = Fn.offset(re, (O.V - 1) * 7), O.y = re.getFullYear(), O.m = re.getMonth(), O.d = re.getDate() + (O.w + 6) % 7);
      } else ("W" in O || "U" in O) && ("w" in O || (O.w = "u" in O ? O.u % 7 : "W" in O ? 1 : 0), le = "Z" in O ? ia(_n(O.y, 0, 1)).getUTCDay() : oa(_n(O.y, 0, 1)).getDay(), O.m = 0, O.d = "W" in O ? (O.w + 6) % 7 + O.W * 7 - (le + 5) % 7 : O.w + O.U * 7 - (le + 6) % 7);
      return "Z" in O ? (O.H += O.Z / 100 | 0, O.M += O.Z % 100, ia(O)) : oa(O);
    };
  }
  function w(A, W, oe, O) {
    for (var ce = 0, re = W.length, le = oe.length, de, be; ce < re; ) {
      if (O >= le) return -1;
      if (de = W.charCodeAt(ce++), de === 37) {
        if (de = W.charAt(ce++), be = M[de in Qs ? W.charAt(ce++) : de], !be || (O = be(A, oe, O)) < 0) return -1;
      } else if (de != oe.charCodeAt(O++))
        return -1;
    }
    return O;
  }
  function b(A, W, oe) {
    var O = c.exec(W.slice(oe));
    return O ? (A.p = f.get(O[0].toLowerCase()), oe + O[0].length) : -1;
  }
  function S(A, W, oe) {
    var O = v.exec(W.slice(oe));
    return O ? (A.w = N.get(O[0].toLowerCase()), oe + O[0].length) : -1;
  }
  function m(A, W, oe) {
    var O = h.exec(W.slice(oe));
    return O ? (A.w = g.get(O[0].toLowerCase()), oe + O[0].length) : -1;
  }
  function _(A, W, oe) {
    var O = R.exec(W.slice(oe));
    return O ? (A.m = F.get(O[0].toLowerCase()), oe + O[0].length) : -1;
  }
  function I(A, W, oe) {
    var O = p.exec(W.slice(oe));
    return O ? (A.m = u.get(O[0].toLowerCase()), oe + O[0].length) : -1;
  }
  function k(A, W, oe) {
    return w(A, t, W, oe);
  }
  function C(A, W, oe) {
    return w(A, r, W, oe);
  }
  function x(A, W, oe) {
    return w(A, a, W, oe);
  }
  function E(A) {
    return i[A.getDay()];
  }
  function ee(A) {
    return s[A.getDay()];
  }
  function H(A) {
    return d[A.getMonth()];
  }
  function z(A) {
    return l[A.getMonth()];
  }
  function U(A) {
    return o[+(A.getHours() >= 12)];
  }
  function B(A) {
    return 1 + ~~(A.getMonth() / 3);
  }
  function se(A) {
    return i[A.getUTCDay()];
  }
  function y(A) {
    return s[A.getUTCDay()];
  }
  function P(A) {
    return d[A.getUTCMonth()];
  }
  function Z(A) {
    return l[A.getUTCMonth()];
  }
  function te(A) {
    return o[+(A.getUTCHours() >= 12)];
  }
  function V(A) {
    return 1 + ~~(A.getUTCMonth() / 3);
  }
  return {
    format: function(A) {
      var W = T(A += "", D);
      return W.toString = function() {
        return A;
      }, W;
    },
    parse: function(A) {
      var W = L(A += "", !1);
      return W.toString = function() {
        return A;
      }, W;
    },
    utcFormat: function(A) {
      var W = T(A += "", $);
      return W.toString = function() {
        return A;
      }, W;
    },
    utcParse: function(A) {
      var W = L(A += "", !0);
      return W.toString = function() {
        return A;
      }, W;
    }
  };
}
var Qs = { "-": "", _: " ", 0: "0" }, Je = /^\s*\d+/, qd = /^%/, Xd = /[\\^$*+?|[\]().{}]/g;
function Fe(e, t, r) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function Kd(e) {
  return e.replace(Xd, "\\$&");
}
function wn(e) {
  return new RegExp("^(?:" + e.map(Kd).join("|") + ")", "i");
}
function Sn(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Zd(e, t, r) {
  var a = Je.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function Jd(e, t, r) {
  var a = Je.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function Qd(e, t, r) {
  var a = Je.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function eu(e, t, r) {
  var a = Je.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function tu(e, t, r) {
  var a = Je.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function eo(e, t, r) {
  var a = Je.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function to(e, t, r) {
  var a = Je.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function nu(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function ru(e, t, r) {
  var a = Je.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function au(e, t, r) {
  var a = Je.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function no(e, t, r) {
  var a = Je.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function su(e, t, r) {
  var a = Je.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function ro(e, t, r) {
  var a = Je.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function ou(e, t, r) {
  var a = Je.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function iu(e, t, r) {
  var a = Je.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function lu(e, t, r) {
  var a = Je.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function cu(e, t, r) {
  var a = Je.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function du(e, t, r) {
  var a = qd.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function uu(e, t, r) {
  var a = Je.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function fu(e, t, r) {
  var a = Je.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function ao(e, t) {
  return Fe(e.getDate(), t, 2);
}
function hu(e, t) {
  return Fe(e.getHours(), t, 2);
}
function pu(e, t) {
  return Fe(e.getHours() % 12 || 12, t, 2);
}
function mu(e, t) {
  return Fe(1 + Fn.count(At(e), e), t, 3);
}
function Jo(e, t) {
  return Fe(e.getMilliseconds(), t, 3);
}
function gu(e, t) {
  return Jo(e, t) + "000";
}
function xu(e, t) {
  return Fe(e.getMonth() + 1, t, 2);
}
function bu(e, t) {
  return Fe(e.getMinutes(), t, 2);
}
function yu(e, t) {
  return Fe(e.getSeconds(), t, 2);
}
function vu(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function _u(e, t) {
  return Fe(Pr.count(At(e) - 1, e), t, 2);
}
function Qo(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? pn(e) : pn.ceil(e);
}
function wu(e, t) {
  return e = Qo(e), Fe(pn.count(At(e), e) + (At(e).getDay() === 4), t, 2);
}
function Su(e) {
  return e.getDay();
}
function ku(e, t) {
  return Fe(nr.count(At(e) - 1, e), t, 2);
}
function Cu(e, t) {
  return Fe(e.getFullYear() % 100, t, 2);
}
function ju(e, t) {
  return e = Qo(e), Fe(e.getFullYear() % 100, t, 2);
}
function Nu(e, t) {
  return Fe(e.getFullYear() % 1e4, t, 4);
}
function Tu(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? pn(e) : pn.ceil(e), Fe(e.getFullYear() % 1e4, t, 4);
}
function $u(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Fe(t / 60 | 0, "0", 2) + Fe(t % 60, "0", 2);
}
function so(e, t) {
  return Fe(e.getUTCDate(), t, 2);
}
function Du(e, t) {
  return Fe(e.getUTCHours(), t, 2);
}
function Iu(e, t) {
  return Fe(e.getUTCHours() % 12 || 12, t, 2);
}
function Mu(e, t) {
  return Fe(1 + ps.count(Xt(e), e), t, 3);
}
function ei(e, t) {
  return Fe(e.getUTCMilliseconds(), t, 3);
}
function Lu(e, t) {
  return ei(e, t) + "000";
}
function Au(e, t) {
  return Fe(e.getUTCMonth() + 1, t, 2);
}
function Fu(e, t) {
  return Fe(e.getUTCMinutes(), t, 2);
}
function Bu(e, t) {
  return Fe(e.getUTCSeconds(), t, 2);
}
function Eu(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Pu(e, t) {
  return Fe(Zo.count(Xt(e) - 1, e), t, 2);
}
function ti(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? mn(e) : mn.ceil(e);
}
function Ru(e, t) {
  return e = ti(e), Fe(mn.count(Xt(e), e) + (Xt(e).getUTCDay() === 4), t, 2);
}
function Hu(e) {
  return e.getUTCDay();
}
function zu(e, t) {
  return Fe(rr.count(Xt(e) - 1, e), t, 2);
}
function Ou(e, t) {
  return Fe(e.getUTCFullYear() % 100, t, 2);
}
function Wu(e, t) {
  return e = ti(e), Fe(e.getUTCFullYear() % 100, t, 2);
}
function Uu(e, t) {
  return Fe(e.getUTCFullYear() % 1e4, t, 4);
}
function Gu(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? mn(e) : mn.ceil(e), Fe(e.getUTCFullYear() % 1e4, t, 4);
}
function Vu() {
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
var nn, ni;
Yu({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Yu(e) {
  return nn = Yd(e), ni = nn.format, nn.parse, nn.utcFormat, nn.utcParse, nn;
}
function qu(e) {
  return new Date(e);
}
function Xu(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function ri(e, t, r, a, o, s, i, l, d, c) {
  var f = Yo(), h = f.invert, g = f.domain, v = c(".%L"), N = c(":%S"), p = c("%I:%M"), u = c("%I %p"), R = c("%a %d"), F = c("%b %d"), D = c("%B"), $ = c("%Y");
  function M(T) {
    return (d(T) < T ? v : l(T) < T ? N : i(T) < T ? p : s(T) < T ? u : a(T) < T ? o(T) < T ? R : F : r(T) < T ? D : $)(T);
  }
  return f.invert = function(T) {
    return new Date(h(T));
  }, f.domain = function(T) {
    return arguments.length ? g(Array.from(T, Xu)) : g().map(qu);
  }, f.ticks = function(T) {
    var L = g();
    return e(L[0], L[L.length - 1], T ?? 10);
  }, f.tickFormat = function(T, L) {
    return L == null ? M : c(L);
  }, f.nice = function(T) {
    var L = g();
    return (!T || typeof T.range != "function") && (T = t(L[0], L[L.length - 1], T ?? 10)), T ? g(Id(L, T)) : f;
  }, f.copy = function() {
    return Vo(f, ri(e, t, r, a, o, s, i, l, d, c));
  }, f;
}
function ms() {
  return Er.apply(ri(Gd, Vd, At, Dn, Pr, Fn, hs, fs, cn, ni).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Ku({
  task: e,
  scale: t,
  onTaskClick: r,
  onTaskDoubleClick: a,
  isSelected: o = !1,
  taskIndex: s,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": d
}) {
  const c = Ae(null), [f, h] = Ie(!1), [g, v] = Ie(!1), N = t(e.start), p = t(e.end), u = Math.max(p - N, 20), R = () => {
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
  }, F = e.progress ? u * e.progress / 100 : 0, D = () => {
    r?.(e);
  }, $ = () => {
    a?.(e);
  }, M = (_) => {
    _.key === "Enter" ? (_.preventDefault(), D()) : _.key === " " && (_.preventDefault(), $());
  }, T = () => {
    h(!0);
  }, L = () => {
    h(!1);
  }, w = () => {
    v(!0), l?.();
  }, b = () => {
    v(!1);
  }, S = [
    "gantt-task-bar",
    f && "gantt-task-bar--pressed",
    (g || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), m = {
    "--task-left": `${N}px`,
    "--task-width": `${u}px`,
    "--task-color": R(),
    left: `${N}px`,
    width: `${u}px`,
    backgroundColor: R()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": s,
      className: S,
      style: m,
      onClick: D,
      onDoubleClick: $,
      onKeyDown: M,
      onMouseDown: T,
      onMouseUp: L,
      onFocus: w,
      onBlur: b,
      "aria-label": d || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
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
function Zu({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let v = e.getTime(); v <= t.getTime(); v += 864e5)
    a.push(new Date(v));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = Ie(-1), d = Ae(null), c = (v) => {
    if (v.key === "ArrowLeft") {
      v.preventDefault();
      const N = Math.max(0, i === -1 ? 0 : i - 1);
      l(N), g(N);
    } else if (v.key === "ArrowRight") {
      v.preventDefault();
      const N = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(N), g(N);
    } else if (v.key === "ArrowDown") {
      v.preventDefault();
      const N = document.querySelector(".gantt-row .timeline-container");
      N && N.focus();
    } else if (v.key === "Home")
      v.preventDefault(), l(0), g(0);
    else if (v.key === "End") {
      v.preventDefault();
      const N = a.length - 1;
      l(N), g(N);
    }
  }, f = (v) => {
    if (v.key === "ArrowDown") {
      v.preventDefault();
      const N = document.querySelector(".gantt-row .resource-label");
      N && N.focus();
    } else if (v.key === "ArrowRight") {
      v.preventDefault();
      const N = d.current;
      N && N.focus();
    }
  }, h = () => {
    i === -1 && (l(0), setTimeout(() => g(0), 0));
  }, g = (v) => {
    const N = d.current?.querySelector(`[data-date-index="${v}"]`);
    N && N.focus();
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
            onKeyDown: f,
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
            onFocus: h,
            children: a.map((v, N) => {
              const p = v.getTime() === s.getTime(), u = i === N;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": N,
                  className: `date-column ${p ? "today" : ""} ${u ? "focused" : ""}`,
                  tabIndex: u ? 0 : -1,
                  role: "button",
                  "aria-label": `${v.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${p ? " (Today)" : ""}`,
                  onFocus: () => l(N),
                  onKeyDown: c,
                  children: v.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                N
              );
            })
          }
        )
      ]
    }
  );
}
function Ju({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, d] = Ie(!1), [c, f] = Ie(-1), h = Ae(null);
  Be(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      h.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
    }, 0);
  }, [l, c, t.length]);
  const g = (p) => {
    if (p.key === "ArrowLeft" && p.shiftKey) {
      p.preventDefault(), p.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (p.key === "ArrowRight" && p.shiftKey) {
      p.preventDefault(), p.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!l) {
      switch (p.key) {
        case "ArrowUp":
          p.preventDefault(), s === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          p.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .timeline-container`)?.focus();
          break;
        case "ArrowLeft":
          p.preventDefault(), h.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (p.preventDefault(), d(!0), f(0));
          break;
      }
      return;
    }
    switch (p.key) {
      case "ArrowLeft":
        p.preventDefault();
        const u = Math.max(0, c - 1);
        f(u), h.current?.querySelector(`[data-task-index="${u}"]`)?.focus();
        break;
      case "ArrowRight":
        p.preventDefault();
        const F = Math.min(t.length - 1, c + 1);
        f(F), h.current?.querySelector(`[data-task-index="${F}"]`)?.focus();
        break;
      case "Enter":
        p.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        p.preventDefault(), c >= 0 && o?.(t[c]);
        break;
      case "Escape":
        p.preventDefault(), d(!1), f(-1), h.current?.focus();
        break;
    }
  }, v = (p) => {
    switch (p.key) {
      case "ArrowUp":
        p.preventDefault(), s === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        p.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        p.preventDefault(), h.current?.focus();
        break;
    }
  }, N = (p) => {
    l && f(p);
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: "gantt-row",
      role: "row",
      "aria-rowindex": s + 2,
      children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "resource-label",
            role: "gridcell",
            "aria-colindex": 1,
            tabIndex: 0,
            "aria-label": `Resource: ${e.label}`,
            onKeyDown: v,
            children: e.label
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: h,
            className: `timeline-container ${l ? "timeline-active" : ""}`,
            role: "gridcell",
            "aria-colindex": 2,
            "aria-colspan": i,
            tabIndex: 0,
            "aria-label": `Timeline for ${e.label} with ${t.length} task${t.length !== 1 ? "s" : ""}. Press Enter to activate task navigation, then use arrow keys to navigate, Enter to select, Space to activate, Escape to exit`,
            onKeyDown: g,
            onFocus: () => {
              l || f(-1);
            },
            children: t.map((p, u) => /* @__PURE__ */ n.jsx(
              Ku,
              {
                task: p,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && c === u,
                taskIndex: u,
                tabIndex: l && c === u ? 0 : -1,
                onFocus: () => N(u)
              },
              p.id
            ))
          }
        )
      ]
    }
  );
}
function Tx({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = Ae(null), [l, d] = Ie(800), c = De(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const p = new Date(r);
    return isNaN(p.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : p;
  }, [r]), f = De(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const p = new Date(a);
    return isNaN(p.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : p;
  }, [a]), h = De(() => Math.ceil((f.getTime() - c.getTime()) / 864e5) + 1, [c, f]);
  Be(() => {
    if (!i.current) return;
    const p = new ResizeObserver((u) => {
      const R = u[0];
      R && d(Math.max(R.contentRect.width - 220, 400));
    });
    return p.observe(i.current), () => p.disconnect();
  }, []);
  const g = De(
    () => ms().domain([c, f]).range([0, l]),
    [c, f, l]
  ), v = De(() => {
    const p = /* @__PURE__ */ new Map();
    return t.forEach((u) => {
      const R = p.get(u.resourceId) || [];
      R.push(u), p.set(u.resourceId, R);
    }), p;
  }, [t]), N = (p) => {
    if (p.target === p.currentTarget)
      switch (p.key) {
        case "ArrowDown":
          p.preventDefault();
          const u = i.current?.querySelector(".gantt-row .resource-label");
          u && u.focus();
          break;
        case "Home":
          p.preventDefault();
          const R = i.current?.querySelector(".header-resource");
          R && R.focus();
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
      "aria-colcount": h + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: N,
      children: [
        /* @__PURE__ */ n.jsx(Zu, { viewStart: c, viewEnd: f, dateCount: h }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: i,
            className: "gantt-grid",
            role: "rowgroup",
            "aria-label": "Gantt chart data rows",
            tabIndex: 0,
            onKeyDown: (p) => {
              p.key === "ArrowLeft" && p.altKey ? (p.preventDefault(), i.current?.scrollBy({ left: -50, behavior: "smooth" })) : p.key === "ArrowRight" && p.altKey ? (p.preventDefault(), i.current?.scrollBy({ left: 50, behavior: "smooth" })) : p.key === "ArrowUp" && p.altKey ? (p.preventDefault(), i.current?.scrollBy({ top: -50, behavior: "smooth" })) : p.key === "ArrowDown" && p.altKey && (p.preventDefault(), i.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((p, u) => /* @__PURE__ */ n.jsx(
              Ju,
              {
                resource: p,
                tasks: v.get(p.id) || [],
                scale: g,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: u,
                dateCount: h
              },
              p.id
            ))
          }
        )
      ]
    }
  );
}
const ar = ({
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
) }), Qu = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const d = () => t ? st.Children.toArray(t).filter(
    (u) => st.isValidElement(u) && (u.type === ar || u.type?.displayName === "BreadcrumbItem")
  ).map((u) => ({
    text: typeof u.props.children == "string" ? u.props.children : String(u.props.children),
    href: u.props.href,
    active: u.props.active,
    attributes: u.props.attributes
  })) : [], c = () => t ? d() : o && s ? [{ href: o, text: s }] : e, f = () => {
    const p = c();
    if (p && p.length > 0) {
      const u = p.slice().reverse().find((R) => R.href && !R.active);
      if (u)
        return { href: u.href, text: u.text };
    }
    return { text: "Home" };
  }, h = c(), g = f(), v = xe(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), N = a;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: v,
      "aria-label": N,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          st.Children.map(t, (p, u) => st.isValidElement(p) && (p.type === ar || p.type?.displayName === "BreadcrumbItem") ? st.cloneElement(p, { key: u }) : null)
        ) : (
          // Render from items array
          h?.filter((p) => p.active || !!p.href).map((p, u) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: p.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...p.attributes || {},
              children: p.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: p.href,
              role: "link",
              ...p.attributes || {},
              children: p.text
            }
          ) }, u))
        ) }),
        g.href && /* @__PURE__ */ n.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ n.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: g.href,
            role: "link",
            "aria-label": `Back to ${g.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              g.text
            ]
          }
        ) })
      ]
    }
  );
}, ef = Qu;
ef.Item = ar;
ar.displayName = "BreadcrumbItem";
const ai = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [o, s] = Ie(!1);
  Be(() => {
    s(!0);
  }, []), Be(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (d) => {
      const c = d.target, f = c.getAttribute("href");
      if (f && f.startsWith("#")) {
        const h = document.querySelector(f);
        if (h) {
          h.hasAttribute("tabindex") || h.setAttribute("tabindex", "-1"), h.focus(), h.classList.add("nhsuk-skip-link-focused-element");
          const g = window.setTimeout(() => {
            h.classList.remove("nhsuk-skip-link-focused-element"), h.getAttribute("tabindex") === "-1" && h.removeAttribute("tabindex");
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
            const f = c.__nhsSkipLinkTimeout;
            f && window.clearTimeout && window.clearTimeout(f);
          });
        } catch (c) {
          console.warn("SkipLink cleanup error:", c);
        }
      };
    } catch (d) {
      return console.warn("SkipLink initialization error:", d), () => {
      };
    }
  }, [o]);
  const i = xe("nhsuk-skip-link", r);
  return /* @__PURE__ */ n.jsx(
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
}, $x = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = xe("nhsuk-pagination", o);
  return /* @__PURE__ */ n.jsx(
    "nav",
    {
      className: i,
      role: "navigation",
      "aria-label": "Pagination",
      ...s,
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
}, Dx = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = xe("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
      className: o,
      role: "navigation",
      "aria-label": r,
      ...a,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Contents" }),
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-contents-list__list", children: e.map((i, l) => s(i, l)) })
      ]
    }
  );
}, si = st.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: r,
  headingLevel: a = 2,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  href: l,
  imgURL: d,
  imgAlt: c,
  ...f
}, h) => {
  const g = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    f.className
  ].filter(Boolean).join(" "), v = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), N = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), p = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const F = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Mt,
      {
        level: a,
        className: N,
        children: F()
      }
    );
  }, u = () => f.children ? f.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null, R = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      ...f,
      className: g,
      ref: h,
      children: [
        d && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: d,
            alt: c || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: v, children: [
          p(),
          u(),
          R()
        ] })
      ]
    }
  );
});
si.displayName = "Card";
const Ix = ({
  className: e,
  children: t,
  "data-testid": r,
  id: a
}) => {
  const o = ["nhsuk-card-group", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx(
    "ul",
    {
      className: o,
      "data-testid": r,
      id: a,
      children: t
    }
  );
}, Mx = ({
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
}, Lx = ({
  type: e,
  heading: t,
  headingHtml: r,
  headingLevel: a = 3,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  className: l,
  children: d,
  "data-testid": c,
  id: f,
  "aria-label": h,
  "aria-labelledby": g,
  "aria-describedby": v
}) => {
  const N = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), p = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), u = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const F = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], D = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        F,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Mt,
      {
        level: a,
        className: p,
        children: D
      }
    );
  }, R = () => d || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: N,
      "data-testid": c,
      id: f,
      "aria-label": h,
      "aria-labelledby": g,
      "aria-describedby": v,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          u(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: R() })
      ]
    }
  );
}, tf = ({
  id: e,
  className: t,
  headingText: r,
  headingHtml: a,
  headingLevel: o = 2,
  bodyText: s,
  bodyHtml: i,
  children: l,
  ...d
}) => {
  const c = xe(
    "nhsuk-panel",
    t
  ), f = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    Mt,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Mt,
    {
      level: o,
      className: "nhsuk-panel__heading",
      text: r,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, h = () => l ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: l }) : i ? /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : s ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ n.jsx("p", { children: s }) }) : null;
  return /* @__PURE__ */ n.jsxs("div", { className: c, id: e, ...d, children: [
    f(),
    h()
  ] });
}, Ax = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...o
}) => {
  const s = xe("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: i() });
}, Fx = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const o = xe(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    r
  ), s = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((d, c) => /* @__PURE__ */ n.jsx(
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
            s(d),
            d.visuallyHiddenText && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: d.visuallyHiddenText })
          ]
        }
      )
    },
    c
  )) }) });
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ n.jsx("dl", { className: o, ...a, children: e.map((l, d) => /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ n.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, d)) }) });
}, kn = { current: null }, nf = () => {
  if (kn.current) return kn.current;
  try {
    kn.current = require("prismjs");
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
    kn.current = null;
  }
  return kn.current;
}, rf = (e) => {
  const t = [
    { regex: /\b(import|from|export|const|let|var|return|if|else|for|while|switch|case|break|new|throw|try|catch|finally|class|extends|implements|interface|type|as|async|await|function)\b/g, cls: "kw" },
    { regex: /(['"`])(?:\\.|(?!\1).)*\1/g, cls: "str" },
    { regex: /\/\*[^]*?\*\/|\/\/.*$/gm, cls: "com" },
    { regex: /\b([0-9]+(?:\.[0-9]+)?)\b/g, cls: "num" }
  ];
  let r = e;
  return t.forEach((a) => {
    r = r.replace(a.regex, (o) => `<span class="nhsuk-code-${a.cls}">${o}</span>`);
  }), r;
}, sr = (e, t, r) => {
  if (r || !t) return e;
  const a = nf();
  if (a && a.languages) {
    const o = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (o)
      try {
        return a.highlight(e, a.languages[o], o);
      } catch {
      }
  }
  return rf(e);
}, af = ({
  rows: e,
  head: t,
  caption: r,
  captionSize: a,
  firstCellIsHeader: o = !1,
  responsive: s = !1,
  heading: i,
  headingLevel: l = 3,
  panel: d = !1,
  panelClasses: c,
  tableClasses: f,
  classes: h,
  attributes: g,
  "data-testid": v,
  columns: N,
  data: p,
  visuallyHiddenCaption: u = !1
}) => {
  const R = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), F = xe(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    f
  ), D = xe(h), $ = (b, S) => {
    const m = xe(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${b.format}`]: b.format
      },
      b.classes
    ), _ = {
      scope: "col",
      ...b.colspan && { colSpan: b.colspan },
      ...b.rowspan && { rowSpan: b.rowspan },
      ...s && { role: "columnheader" },
      ...b.attributes
    };
    let I;
    if (b.node != null)
      I = /* @__PURE__ */ n.jsx(n.Fragment, { children: b.node });
    else if (b.html)
      I = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } });
    else if (b.code != null) {
      const k = Array.isArray(b.code), C = k ? b.code.join(`
`) : b.code, x = k || C.includes(`
`), E = {
        className: xe("nhsuk-table__code", b.codeClassName, {
          "nhsuk-table__code--block": x,
          "nhsuk-table__code--inline": !x
        }),
        ...b.codeLanguage ? { "data-language": b.codeLanguage } : {}
      }, ee = sr(C, b.codeLanguage);
      I = x ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
        "code",
        {
          ...E,
          dangerouslySetInnerHTML: { __html: ee }
        }
      ) }) : /* @__PURE__ */ n.jsx(
        "code",
        {
          ...E,
          dangerouslySetInnerHTML: { __html: ee }
        }
      );
    } else
      I = b.text;
    return /* @__PURE__ */ n.jsx("th", { className: m, ..._, children: I }, S);
  }, M = (b, S, m) => {
    const _ = o && m || b.rowHeader, I = xe(
      _ ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${_ ? "header" : "cell"}--${b.format}`]: b.format
      },
      b.classes
    ), k = {
      ..._ && { scope: "row" },
      ...b.colspan && { colSpan: b.colspan },
      ...b.rowspan && { rowSpan: b.rowspan },
      ...s && {
        role: _ ? "rowheader" : "cell",
        ...b.header && { "data-label": b.header }
      },
      ...b.attributes
    };
    let C;
    if (b.node != null)
      C = /* @__PURE__ */ n.jsx(n.Fragment, { children: b.node });
    else if (b.html)
      C = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } });
    else if (b.code != null) {
      const ee = Array.isArray(b.code), H = ee ? b.code.join(`
`) : b.code, z = ee || H.includes(`
`), U = {
        className: xe("nhsuk-table__code", b.codeClassName, {
          "nhsuk-table__code--block": z,
          "nhsuk-table__code--inline": !z
        }),
        ...b.codeLanguage ? { "data-language": b.codeLanguage } : {}
      }, B = sr(
        H,
        b.codeLanguage,
        b.disableHighlight
      );
      C = z ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
        "code",
        {
          ...U,
          dangerouslySetInnerHTML: { __html: B }
        }
      ) }) : /* @__PURE__ */ n.jsx(
        "code",
        {
          ...U,
          dangerouslySetInnerHTML: { __html: B }
        }
      );
    } else
      C = b.text;
    const x = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && b.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        b.header,
        " "
      ] }),
      C
    ] }), E = _ ? "th" : "td";
    return /* @__PURE__ */ n.jsx(E, { className: I, ...k, children: x }, S);
  };
  let T = t, L = e;
  !T && N && N.length && (T = N.map((b) => ({
    text: b.title,
    format: b.format,
    classes: b.headerClasses,
    attributes: b.headerAttributes
  }))), !L && N && p && p.length && (L = p.map((b, S) => N.map((m) => {
    const _ = m.accessor ? m.accessor(b, S) : b[m.key];
    let I = { format: m.format, classes: m.cellClasses, attributes: m.cellAttributes };
    if (m.rowHeader && (I.rowHeader = !0), m.render) {
      const k = m.render(_, b, S, m);
      return k == null || typeof k == "boolean" ? { ...I, text: "" } : typeof k == "string" || typeof k == "number" ? { ...I, text: String(k) } : { ...I, ...k };
    }
    return { ...I, text: _ != null ? String(_) : "" };
  })));
  const w = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: F,
      ...s && { role: "table" },
      ...g,
      ...v && { "data-testid": v },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: xe(R, u && "nhsuk-u-visually-hidden"), children: r }),
        T && T.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: T.map(
              (b, S) => $(b, S)
            ) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: L && L.map((b, S) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: b.map(
              (m, _) => M(m, _, _ === 0)
            )
          },
          S
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ n.jsxs(tf, { className: c, children: [
    i && /* @__PURE__ */ n.jsx(Mt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    w()
  ] }) : D ? /* @__PURE__ */ n.jsx("div", { className: D, children: w() }) : w();
}, sf = ({
  children: e,
  size: t,
  className: r
}) => {
  const a = xe(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    r
  );
  return /* @__PURE__ */ n.jsx("caption", { className: a, children: e });
}, oi = ({
  responsive: e,
  className: t,
  children: r,
  ...a
}) => {
  const o = e ? { role: "row" } : {};
  return /* @__PURE__ */ n.jsx("tr", { className: t, ...o, ...a, children: r });
}, ii = ({
  text: e,
  html: t,
  node: r,
  code: a,
  codeLanguage: o,
  codeClassName: s,
  disableHighlight: i,
  format: l,
  classes: d,
  colspan: c,
  rowspan: f,
  attributes: h,
  responsive: g,
  as: v = "th"
}) => {
  const N = xe(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    d
  ), p = {
    scope: "col",
    ...c && { colSpan: c },
    ...f && { rowSpan: f },
    ...g && { role: "columnheader" },
    ...h
  };
  let u;
  if (r != null) u = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) u = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const F = Array.isArray(a), D = F ? a.join(`
`) : a, $ = F || D.includes(`
`), M = {
      className: xe("nhsuk-table__code", s, {
        "nhsuk-table__code--block": $,
        "nhsuk-table__code--inline": !$
      }),
      ...o ? { "data-language": o } : {}
    }, T = sr(
      D,
      o,
      i
    );
    u = $ ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
      "code",
      {
        ...M,
        dangerouslySetInnerHTML: { __html: T }
      }
    ) }) : /* @__PURE__ */ n.jsx("code", { ...M, dangerouslySetInnerHTML: { __html: T } });
  } else u = e;
  const R = v;
  return /* @__PURE__ */ n.jsx(R, { className: N, ...p, children: u });
}, of = ({
  text: e,
  html: t,
  node: r,
  code: a,
  codeLanguage: o,
  codeClassName: s,
  disableHighlight: i,
  format: l,
  classes: d,
  colspan: c,
  rowspan: f,
  attributes: h,
  responsive: g,
  rowHeader: v
}) => {
  const N = !!v, p = N ? "th" : "td", u = xe(
    N ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${N ? "header" : "cell"}--${l}`,
    d
  ), R = {
    ...c && { colSpan: c },
    ...f && { rowSpan: f },
    ...N && { scope: "row" },
    ...g && { role: N ? "rowheader" : "cell" },
    ...h
  };
  let F;
  if (r != null) F = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) F = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const D = Array.isArray(a), $ = D ? a.join(`
`) : a, M = D || $.includes(`
`), T = {
      className: xe("nhsuk-table__code", s, {
        "nhsuk-table__code--block": M,
        "nhsuk-table__code--inline": !M
      }),
      ...o ? { "data-language": o } : {}
    }, L = sr($, o, i);
    F = M ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx("code", { ...T, dangerouslySetInnerHTML: { __html: L } }) }) : /* @__PURE__ */ n.jsx("code", { ...T, dangerouslySetInnerHTML: { __html: L } });
  } else F = e;
  return /* @__PURE__ */ n.jsx(p, { className: u, ...R, children: F });
}, dt = af;
dt.Caption = sf;
dt.BodyRow = oi;
dt.HeaderCell = ii;
dt.Cell = of;
dt.Row = oi;
dt.TH = ii;
process.env.NODE_ENV !== "production" && (dt.Row && console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), dt.TH && console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."));
const Bx = gn(({
  items: e,
  defaultActiveTab: t,
  activeTab: r,
  onTabChange: a,
  onTabFocus: o,
  onTabListBlur: s,
  onEscape: i,
  autoActivate: l = !0,
  className: d,
  id: c,
  "data-testid": f,
  ...h
}, g) => {
  const v = r !== void 0, [N, p] = Ie(() => t || e[0]?.id || ""), u = v ? r : N, R = Ae(null), F = Ae(/* @__PURE__ */ new Map()), D = he((S) => {
    v || p(S), a?.(S);
  }, [v, a]), $ = he((S) => {
    o?.(S), l && D(S);
  }, [o, l, D]), M = he((S, m) => {
    const _ = e.filter((C) => !C.disabled).map((C) => C.id), I = _.indexOf(m);
    let k = null;
    switch (S.key) {
      case "ArrowLeft":
        k = I > 0 ? I - 1 : _.length - 1;
        break;
      case "ArrowRight":
        k = I < _.length - 1 ? I + 1 : 0;
        break;
      case "Home":
        k = 0;
        break;
      case "End":
        k = _.length - 1;
        break;
      case "Escape":
        S.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (k !== null) {
      S.preventDefault();
      const C = _[k], x = F.current.get(C);
      x && (x.focus(), $(C));
    }
  }, [e, $, i]), T = he((S, m) => {
    m ? F.current.set(S, m) : F.current.delete(S);
  }, []), L = he((S) => {
    const m = F.current.get(S);
    m && m.focus();
  }, []);
  $o(g, () => ({
    focusTab: L,
    getActiveTab: () => u,
    getTabListElement: () => R.current
  }), [L, u]);
  const w = he((S) => {
    const m = S.relatedTarget;
    R.current?.contains(m) || s?.();
  }, [s]), b = xe("nhsuk-tabs", d);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: b,
      id: c,
      "data-testid": f,
      ...h,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: R,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: w,
                children: e.map((S) => {
                  const m = S.id === u, _ = S.disabled, I = xe("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": m,
                    "nhsuk-tabs__list-item--disabled": _
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: I, role: "presentation", children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (k) => T(S.id, k),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": m,
                      "aria-controls": `${S.id}-panel`,
                      id: `${S.id}-tab`,
                      tabIndex: m ? 0 : -1,
                      disabled: _,
                      onClick: () => !_ && D(S.id),
                      onKeyDown: (k) => !_ && M(k, S.id),
                      onFocus: () => !_ && $(S.id),
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
          const m = S.id === u;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${S.id}-tab`,
              id: `${S.id}-panel`,
              hidden: !m,
              children: S.content
            },
            S.id
          );
        })
      ]
    }
  );
}), lf = gn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...d
  }, c) => {
    const f = [
      "nhsuk-details",
      s
    ].filter(Boolean).join(" "), h = t ? /* @__PURE__ */ n.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let g;
    return l ? g = l : a ? g = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (g = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: f,
        open: o,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: h }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: g })
        ]
      }
    );
  }
);
lf.displayName = "Details";
const cf = gn(
  ({
    title: e,
    type: t,
    items: r,
    hidePrefix: a = !1,
    headingLevel: o = 3,
    className: s,
    ...i
  }, l) => {
    const d = ["nhsuk-do-dont-list"];
    s && d.push(s);
    const c = [
      "nhsuk-list",
      t === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ], f = () => t === "cross" ? /* @__PURE__ */ n.jsxs(
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
    ), h = (v) => t === "cross" && !a ? `do not ${v}` : v, g = () => /* @__PURE__ */ n.jsx(
      Mt,
      {
        level: o,
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
          g(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: c.join(" "), role: "list", children: r.map((v, N) => /* @__PURE__ */ n.jsxs("li", { children: [
            f(),
            h(v.item)
          ] }, N)) }) })
        ]
      }
    );
  }
);
cf.displayName = "DoDontList";
const df = gn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...d
  }, c) => {
    const f = [
      "nhsuk-expander",
      s
    ].filter(Boolean).join(" "), h = t ? /* @__PURE__ */ n.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let g;
    return l ? g = l : a ? g = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (g = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: f,
        open: o,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: h }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: g })
        ]
      }
    );
  }
);
df.displayName = "Expander";
const uf = gn(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, d) => {
      const c = d + 1, f = `${t}-${c}-hint`, h = `${t}-${c}-status`, g = !!l.href, v = [
        "nhsuk-task-list__item",
        g && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), N = [
        l.hint && f,
        h
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        ff,
        {
          item: l,
          itemClasses: v,
          hasLink: g,
          hintId: f,
          statusId: h,
          ariaDescribedBy: N
        },
        d
      );
    };
    return /* @__PURE__ */ n.jsx(
      "ul",
      {
        ref: o,
        className: s,
        ...a,
        children: e.map(i)
      }
    );
  }
), ff = ({
  item: e,
  itemClasses: t,
  hasLink: r,
  hintId: a,
  statusId: o,
  ariaDescribedBy: s
}) => {
  const i = () => {
    const c = e.title.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, f = [
      r ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return r ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: f,
        href: e.href,
        "aria-describedby": s,
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
    let f;
    return e.status.tag ? f = /* @__PURE__ */ n.jsx(Ge, { ...e.status.tag }) : e.status.html ? f = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : f = e.status.text, /* @__PURE__ */ n.jsx("div", { className: c, id: o, children: f });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    d()
  ] });
};
uf.displayName = "TaskList";
const Ex = ({
  heading: e,
  headingLevel: t = 3,
  text: r,
  html: a,
  children: o,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), d = () => o || (a ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r ? /* @__PURE__ */ n.jsx("p", { children: r }) : null), c = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), f = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: c,
      ...i,
      children: [
        To(
          f,
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
}, Px = ({
  src: e,
  alt: t,
  caption: r,
  sizes: a,
  srcset: o,
  className: s,
  ...i
}) => {
  const l = [
    "nhsuk-image",
    s
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
            ...a && o ? { sizes: a, srcSet: o } : {}
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
}, hf = ({
  dateRange: e,
  onPrev: t,
  onNext: r,
  onToday: a,
  density: o,
  onDensityChange: s,
  a11yMode: i,
  onA11yModeChange: l
}) => /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar", role: "group", "aria-label": "Slot matrix controls", children: [
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx(et, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ n.jsx(et, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ n.jsx(et, { variant: "secondary", size: "small", onClick: r, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ n.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ n.jsx(
      Yn,
      {
        id: "slot-matrix-density-select",
        name: "slot-matrix-density",
        ariaLabel: "Change density",
        value: o,
        onChange: (d) => s?.(d.target.value),
        options: [
          { value: "comfortable", text: "Comfortable" },
          { value: "compact", text: "Compact" }
        ]
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ n.jsx(
      Yn,
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
] }), pf = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ n.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((r) => /* @__PURE__ */ n.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ n.jsx(Ge, { color: mf(r.status), text: r.label }) }, r.status)) });
function mf(e) {
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
const Rx = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: r,
  defaultValue: a,
  onChange: o,
  selectionMode: s = "single",
  a11yMode: i,
  className: l,
  style: d,
  getSlotAriaLabel: c,
  toolbar: f,
  enableDefaultToolbar: h = !0,
  legendItems: g,
  enableDefaultLegend: v = !0,
  legendPlacement: N = "bottom",
  onA11yModeChange: p
}) => {
  const [u, R] = Ie("grid"), F = i || u, [D, $] = Ie(a || []), M = r ?? D, T = De(() => {
    const k = /* @__PURE__ */ new Set();
    return e.forEach((C) => k.add(new Date(C.start).getTime())), Array.from(k).sort((C, x) => C - x);
  }, [e]), L = De(() => {
    const k = {};
    return e.forEach((C) => {
      const x = new Date(C.start).getTime();
      k[x] || (k[x] = {});
      const E = C.capacity - C.booked - (C.held || 0);
      k[x][C.sessionId] = { slot: C, remaining: E };
    }), k;
  }, [e]), w = he((k) => {
    if (s === "single") {
      const C = [k.id];
      r || $(C), o?.(C, { lastAction: "select" });
    } else {
      const C = M.includes(k.id), x = C ? M.filter((E) => E !== k.id) : [...M, k.id];
      r || $(x), o?.(x, { lastAction: C ? "deselect" : "select" });
    }
  }, [s, M, r, o]), b = De(() => g || (v ? Array.from(new Set(e.map((C) => C.status))).map((C) => ({
    status: C,
    label: C.charAt(0).toUpperCase() + C.slice(1)
  })) : void 0), [g, v, e]), S = b ? /* @__PURE__ */ n.jsx(
    pf,
    {
      items: b,
      orientation: N === "left" || N === "right" ? "vertical" : "horizontal"
    }
  ) : null, m = (k) => {
    i || R(k), p?.(k);
  }, _ = f || (h ? /* @__PURE__ */ n.jsx(
    hf,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: F,
      onA11yModeChange: m
    }
  ) : null), I = /* @__PURE__ */ n.jsx("div", { style: d, className: xe(l), children: /* @__PURE__ */ n.jsx(ya, { className: xe("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(qt, { children: /* @__PURE__ */ n.jsx(jn, { width: "full", children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    _,
    N === "top" && S,
    /* @__PURE__ */ n.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((k) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => w(k), "aria-pressed": M.includes(k.id), children: [
      Cn(new Date(k.start)),
      " – ",
      Cn(new Date(k.end)),
      " (",
      k.status,
      ")"
    ] }) }, k.id)) }),
    N === "bottom" && S
  ] }) }) }) }) });
  return F === "list" ? I : /* @__PURE__ */ n.jsx("div", { style: d, className: xe(l), children: /* @__PURE__ */ n.jsx(ya, { className: xe("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(qt, { children: /* @__PURE__ */ n.jsx(jn, { width: "full", children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    _,
    N === "top" && S,
    /* @__PURE__ */ n.jsxs("div", { role: "grid", "aria-rowcount": T.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((k) => /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": `Session ${k.specialty}`, className: "nhs-slot-matrix__session-header", children: k.specialty }, k.id))
      ] }),
      T.map((k) => /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Cn(new Date(k)), children: Cn(new Date(k)) }),
        t.map((C) => {
          const x = L[k]?.[C.id];
          if (!x)
            return /* @__PURE__ */ n.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, C.id);
          const { slot: E, remaining: ee } = x, H = M.includes(E.id), z = c ? c(E) : `Slot ${Cn(new Date(E.start))} ${E.status}${ee === 0 ? " full" : ""}`;
          return /* @__PURE__ */ n.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": E.status,
              className: xe("nhs-slot-matrix__cell", H && "nhs-slot-matrix__cell--selected"),
              "aria-label": z,
              "aria-selected": H || void 0,
              onClick: () => w(E),
              children: ee > 0 ? `${ee} left` : "Full"
            },
            E.id
          );
        })
      ] }, k))
    ] }),
    N === "bottom" && S
  ] }) }) }) }) });
};
function co(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Cn(e) {
  return `${co(e.getHours())}:${co(e.getMinutes())}`;
}
const gf = ({
  title: e,
  value: t,
  subtitle: r,
  variant: a = "default",
  href: o,
  className: s = "",
  ariaLabel: i,
  ...l
}) => {
  const d = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${a}`,
    s
  ].filter(Boolean).join(" "), c = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Mt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    r && /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: r })
  ] });
  return o ? /* @__PURE__ */ n.jsx(
    "a",
    {
      className: `${d} nhs-fdp-summary-card--clickable`,
      href: o,
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
}, Hx = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(ya, { children: /* @__PURE__ */ n.jsx(qt, { children: e.map((o, s) => /* @__PURE__ */ n.jsx(
    jn,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ n.jsx(gf, { ...o })
    },
    s
  )) }) }) });
}, xf = st.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: r,
    onSort: a,
    selectedRowIndex: o,
    onRowSelect: s,
    id: i,
    testId: l,
    ariaLabel: d,
    ariaLabelledby: c,
    ariaDescribedby: f,
    className: h,
    tableClassName: g,
    bordered: v = !1,
    striped: N = !1,
    responsive: p = !1,
    tableType: u = "default"
  }, R) => {
    const F = Ae(null), D = Ae(null), $ = Ae(null);
    st.useImperativeHandle(R, () => F.current, []);
    const [M, T] = Ie(0), [L, w] = Ie(0), [b, S] = Ie("headers"), [m, _] = Ie("browse"), I = t.length, k = e.length, C = De(() => !r || r.length === 0 ? e : [...e].sort((B, se) => {
      for (const { key: y, direction: P } of r) {
        const Z = B[y], te = se[y];
        if (Z == null && te == null) continue;
        if (Z == null) return 1;
        if (te == null) return -1;
        let V = 0;
        if (typeof Z == "number" && typeof te == "number" ? V = Z - te : V = String(Z).localeCompare(String(te)), V !== 0)
          return P === "asc" ? V : -V;
      }
      return 0;
    }), [e, r]), x = he((B, se) => {
      setTimeout(() => {
        const y = F.current?.querySelector(
          `tbody tr:nth-child(${B + 1}) td:nth-child(${se + 1})`
        );
        y && (y.focus(), typeof y.scrollIntoView == "function" && y.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), E = he((B) => {
      setTimeout(() => {
        const se = F.current?.querySelector(`th:nth-child(${B + 1})`);
        se && (se.focus(), typeof se.scrollIntoView == "function" && se.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ee = he((B) => {
      a?.(B);
    }, [a]), H = he((B) => {
      s?.(B);
    }, [s]), z = he((B) => {
      const { key: se } = B;
      switch (se) {
        case "Enter":
          if (B.preventDefault(), b === "headers" && m === "browse")
            _("navigate"), E(L);
          else if (b === "headers" && m === "navigate") {
            const y = t[L];
            y && ee(y.key);
          } else b === "cells" && m === "browse" ? (_("navigate"), x(M, L)) : b === "cells" && m === "navigate" && H(M);
          break;
        case "Escape":
          B.preventDefault(), (b === "headers" && m === "navigate" || b === "cells" && m === "navigate") && _("browse");
          break;
        case "ArrowLeft":
          if (B.preventDefault(), m === "navigate" || m === "browse" && b === "headers") {
            if (b === "headers") {
              const y = Math.max(0, L - 1);
              w(y), E(y);
            } else if (b === "cells") {
              const y = Math.max(0, L - 1);
              w(y), x(M, y);
            }
          }
          break;
        case "ArrowRight":
          if (B.preventDefault(), m === "navigate" || m === "browse" && b === "headers") {
            if (b === "headers") {
              const y = Math.min(I - 1, L + 1);
              w(y), E(y);
            } else if (b === "cells") {
              const y = Math.min(I - 1, L + 1);
              w(y), x(M, y);
            }
          }
          break;
        case "ArrowUp":
          if (B.preventDefault(), b === "cells") {
            if (m === "browse") {
              const y = Math.max(0, M - 1);
              T(y), x(y, 0), w(0);
            } else if (m === "navigate")
              if (M > 0) {
                const y = M - 1;
                T(y), x(y, L);
              } else
                S("headers"), _("browse"), E(L);
          }
          break;
        case "ArrowDown":
          if (B.preventDefault(), b === "headers" && m === "browse")
            S("cells"), T(0), w(0), x(0, 0);
          else if (b === "cells") {
            const y = k - 1;
            if (m === "browse") {
              const P = Math.min(y, M + 1);
              T(P), x(P, 0), w(0);
            } else if (m === "navigate" && M < y) {
              const P = M + 1;
              T(P), x(P, L);
            }
          }
          break;
        case "Home":
          B.preventDefault(), b === "headers" ? (w(0), E(0)) : b === "cells" && (B.ctrlKey ? (T(0), w(0), x(0, 0)) : (w(0), x(M, 0)));
          break;
        case "End":
          if (B.preventDefault(), b === "headers") {
            const y = I - 1;
            w(y), E(y);
          } else if (b === "cells")
            if (B.ctrlKey) {
              const y = k - 1, P = I - 1;
              T(y), w(P), x(y, P);
            } else {
              const y = I - 1;
              w(y), x(M, y);
            }
          break;
        case " ":
          if (B.preventDefault(), b === "headers" && m === "navigate") {
            const y = t[L];
            y && ee(y.key);
          } else b === "cells" && m === "navigate" && H(M);
          break;
      }
    }, [
      b,
      m,
      L,
      M,
      I,
      k,
      t,
      x,
      E,
      ee,
      H
    ]);
    Be(() => {
      const B = F.current;
      if (B)
        return B.addEventListener("keydown", z), () => B.removeEventListener("keydown", z);
    }, [z]);
    const U = xe(
      "nhsuk-table",
      g,
      {
        "nhsuk-table--responsive": p,
        "nhsuk-table--bordered": v,
        "nhsuk-table--striped": N,
        "nhsuk-table--compact": u === "compact"
      },
      h
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: F,
        className: U,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": c,
        "aria-describedby": f,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: D, role: "row", children: t.map((B, se) => {
            const y = r?.find((te) => te.key === B.key), P = !!y, Z = b === "headers" && L === se;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: xe("sortable-header", {
                  "sortable-header--focused": Z
                }),
                role: "columnheader",
                tabIndex: Z ? 0 : -1,
                onClick: () => ee(B.key),
                onKeyDown: (te) => {
                  (te.key === "Enter" || te.key === " ") && (te.preventDefault(), ee(B.key));
                },
                "aria-sort": P ? y?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: B.label }),
                  P && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((te) => te.key === B.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: y?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              B.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: $, className: "nhsuk-table__body", role: "rowgroup", children: C.map((B, se) => {
            const y = o === se, P = b === "cells" && M === se;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: xe("data-row", {
                  "data-row--selected": y,
                  "data-row--focused": P
                }),
                "aria-selected": y,
                children: t.map((Z, te) => {
                  const V = Z.tableRenderer ? Z.tableRenderer(B) : Z.render ? Z.render(B) : B[Z.key], A = b === "cells" && M === se && L === te, W = () => typeof V == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: V ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: V ? "Yes" : "No" })
                  ] }) : String(V ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: xe("data-cell", {
                        "data-cell--focused": A
                      }),
                      tabIndex: A ? 0 : -1,
                      onClick: () => H(se),
                      children: W()
                    },
                    Z.key
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
xf.displayName = "AriaDataGrid";
const li = ({
  sortConfig: e,
  columns: t,
  onSortChange: r,
  className: a = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: d = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: f
}) => {
  const h = Ae(null), g = Ae(null), v = Ae(null), N = he((b, S) => {
    d || (g.current = S, b.dataTransfer.effectAllowed = "move", b.dataTransfer.setData("text/plain", S));
  }, [d]), p = he((b, S) => {
    d || g.current === S || (b.preventDefault(), b.dataTransfer.dropEffect = "move", v.current = S);
  }, [d]), u = he((b, S) => {
    if (d) return;
    b.preventDefault();
    const m = g.current;
    if (!m || m === S) return;
    const _ = e.findIndex((k) => k.key === m), I = e.findIndex((k) => k.key === S);
    if (_ !== -1 && I !== -1) {
      const k = [...e], [C] = k.splice(_, 1);
      k.splice(I, 0, C), r(k);
    }
    g.current = null, v.current = null;
  }, [d, e, r]), R = he(() => {
    g.current = null, v.current = null;
  }, []), F = he((b) => {
    const S = t.find((m) => m.key === b);
    return S ? S.label : b;
  }, [t]), D = he((b) => ["red", "orange", "blue", "aqua-green", "grey"][b] || "grey", []), $ = he((b) => {
    if (d) return;
    const S = e.map(
      (m) => m.key === b ? { ...m, direction: m.direction === "asc" ? "desc" : "asc" } : m
    );
    r(S);
  }, [e, r, d]), M = he((b) => {
    if (d) return;
    const S = e.filter((m) => m.key !== b);
    r(S);
  }, [e, r, d]), T = he(() => {
    d || r([]);
  }, [r, d]), L = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const b = e.map((S, m) => {
      const _ = S.direction === "asc" ? "ascending" : "descending";
      return `${m + 1}. ${F(S.key)} (${_})`;
    });
    if (b.length === 1)
      return `Sorted by: ${b[0]}`;
    if (b.length === 2)
      return `Sorted by: ${b.join(" and ")}`;
    {
      const S = b.pop();
      return `Sorted by: ${b.join(", ")}, and ${S}`;
    }
  }, w = De(() => {
    const b = ["sort-description"];
    return l && b.push("sort-help"), f && b.push(f), b.join(" ");
  }, [l, f]);
  return e.length === 0 ? /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${a}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description",
        id: "sort-description",
        "aria-live": "polite",
        children: o
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
          ref: h,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": c,
          "aria-describedby": w,
          children: e.map((b, S) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (m) => N(m, b.key),
              onDragOver: (m) => p(m, b.key),
              onDrop: (m) => u(m, b.key),
              onDragEnd: R,
              onClick: () => $(b.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": b.key,
              children: /* @__PURE__ */ n.jsx(
                Ge,
                {
                  color: D(S),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => M(b.key),
                  disabled: d,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${S + 1}`, children: S + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: F(b.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (m) => {
                          m.stopPropagation(), $(b.key);
                        },
                        disabled: d,
                        "aria-label": `Toggle sort direction for ${F(b.key)}. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${b.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${b.direction}`,
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
            b.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        et,
        {
          variant: "secondary",
          onClick: T,
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
function bf(e, t) {
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
      const o = [...e.selectedRows];
      return o[t.payload.tabIndex] = t.payload.rowIndices, { ...e, selectedRows: o };
    case "SET_GLOBAL_SELECTED_ROW_DATA":
      return { ...e, globalSelectedRowData: t.payload };
    case "SET_FILTERS":
      return { ...e, filters: t.payload };
    case "ADJUST_ARRAYS":
      const { newLength: s } = t.payload, i = new Array(s).fill(!1), l = new Array(s).fill(null), d = new Array(s).fill([]);
      for (let c = 0; c < Math.min(e.tabLoadingStates.length, s); c++)
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
const Ca = gn(function(t, r) {
  const {
    dataConfig: a = {},
    tabPanels: o,
    selectedIndex: s,
    onTabChange: i,
    onGlobalRowSelectionChange: l,
    ariaLabel: d,
    ariaDescription: c,
    className: f = "",
    disabled: h = !1,
    orientation: g = "horizontal",
    id: v,
    isLoading: N = !1,
    loadingComponent: p,
    error: u = null,
    errorComponent: R,
    "data-testid": F,
    actions: D,
    actionsMinGap: $ = 16,
    forceActionsAbove: M = !1
  } = t, L = Ae(
    v || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, w = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), b = `${L}-description`, S = `${L}-navigation-help`, {
    dataComparator: m = (j, Y) => JSON.stringify(j) === JSON.stringify(Y),
    filterFunction: _ = (j) => j,
    booleanRenderer: I = (j) => j ? "✓" : "✗"
  } = a || {}, k = s !== void 0, C = s ?? 0, [x, E] = Ie({
    focusArea: "tabs",
    focusedTabIndex: C,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), ee = De(() => ({
    selectedIndex: C,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [C]), [H, z] = Do(bf, ee);
  Be(() => {
    const j = H.tabLoadingStates.length, Y = o.length;
    j !== Y && z({ type: "ADJUST_ARRAYS", payload: { newLength: Y } });
  }, [o.length]), Be(() => {
    k && z({ type: "SET_SELECTED_INDEX", payload: C });
  }, [C, k]), Be(() => {
    E((j) => ({
      ...j,
      focusArea: "tabs",
      focusedTabIndex: H.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [H.selectedIndex]), Be(() => {
    l && l(H.globalSelectedRowData);
  }, [H.globalSelectedRowData, l]);
  const U = he(
    (j, Y) => m(j, Y),
    [m]
  ), B = he(
    (j) => {
      j >= 0 && j < o.length && !o[j].disabled && (z({ type: "SET_SELECTED_INDEX", payload: j }), E((Y) => ({
        ...Y,
        focusedTabIndex: j,
        focusArea: "tabs"
      })), i?.(j));
    },
    [o, i]
  ), se = Ae(!1), y = he(
    (j, Y) => {
      if (!Y?.force && !se.current && j === 0) {
        se.current = !0;
        return;
      }
      se.current = !0, setTimeout(() => {
        const ae = P.current[j], q = ae?.parentElement;
        if (ae && q) {
          const Q = ae.offsetLeft, ie = ae.offsetWidth, _e = q.clientWidth, ke = Q - _e / 2 + ie / 2;
          try {
            q.scrollTo({
              left: Math.max(0, ke),
              behavior: "smooth"
            });
          } catch {
            ae.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!ae,
          tabListElementExists: !!q
        });
      }, 50);
    },
    []
  ), P = Ae([]), Z = Ae([]), te = he(
    (j, Y) => {
      const ae = H.sortConfig || [], q = ae.find(
        (_e) => _e.key === Y
      );
      let Q;
      q ? q.direction === "asc" ? Q = ae.map(
        (_e) => _e.key === Y ? { ..._e, direction: "desc" } : _e
      ) : Q = ae.filter(
        (_e) => _e.key !== Y
      ) : Q = [...ae, { key: Y, direction: "asc" }], z({
        type: "SET_SORT",
        payload: Q
      }), o[j].onSort?.(Y);
    },
    [H.sortConfig, o]
  ), V = he(
    (j) => {
      setTimeout(() => {
        const Y = document.querySelector(
          `[data-tab-panel="${H.selectedIndex}"] th:nth-child(${j + 1})`
        );
        Y && Y.focus();
      }, 0);
    },
    [H.selectedIndex]
  ), A = he(
    (j) => I(j),
    [I]
  ), W = he(
    (j, Y) => {
      setTimeout(() => {
        const ae = document.querySelector(
          `[data-tab-panel="${H.selectedIndex}"] tbody tr:nth-child(${j + 1}) td:nth-child(${Y + 1})`
        );
        ae && ae.focus();
      }, 0);
    },
    [H.selectedIndex]
  );
  Be(() => {
    x.isGridActive && (x.focusArea === "headers" ? setTimeout(() => {
      V(x.focusedHeaderIndex);
    }, 0) : x.focusArea === "cells" && setTimeout(() => {
      W(
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
    V,
    W
  ]), Be(() => {
    y(H.selectedIndex);
  }, [H.selectedIndex, y]);
  const oe = he(
    (j, Y) => {
      const { key: ae } = j, q = o[H.selectedIndex], Q = q?.columns.length || 0;
      switch (ae) {
        case "ArrowLeft":
          j.preventDefault();
          const ie = Math.max(0, Y - 1);
          E((Ce) => ({
            ...Ce,
            focusedHeaderIndex: ie
          })), V(ie);
          break;
        case "ArrowRight":
          j.preventDefault();
          const _e = Math.min(Q - 1, Y + 1);
          E((Ce) => ({
            ...Ce,
            focusedHeaderIndex: _e
          })), V(_e);
          break;
        case "ArrowUp":
          j.preventDefault(), E((Ce) => ({
            ...Ce,
            focusArea: "tabs",
            focusedTabIndex: H.selectedIndex
          })), y(H.selectedIndex), P.current[H.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          j.preventDefault(), E((Ce) => ({
            ...Ce,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: Y,
            isGridActive: !0
          }));
          break;
        case "Home":
          j.preventDefault(), E((Ce) => ({ ...Ce, focusedHeaderIndex: 0 })), V(0);
          break;
        case "End":
          j.preventDefault();
          const ke = Q - 1;
          E((Ce) => ({
            ...Ce,
            focusedHeaderIndex: ke
          })), V(ke);
          break;
        case "Enter":
        case " ":
          j.preventDefault();
          const ye = q?.columns[Y]?.key;
          ye && te(H.selectedIndex, ye);
          break;
      }
    },
    [
      o,
      H.selectedIndex,
      te,
      E,
      V,
      W,
      P
    ]
  ), O = he(
    (j, Y, ae) => {
      const { key: q } = j, Q = o[H.selectedIndex], ie = Q?.data.length || 0, _e = Q?.columns.length || 0;
      switch (q) {
        case "ArrowUp":
          if (j.preventDefault(), Y === 0)
            E((me) => ({
              ...me,
              focusArea: "headers",
              focusedHeaderIndex: ae,
              isGridActive: !1
            })), V(ae);
          else {
            const me = Y - 1;
            E((we) => ({
              ...we,
              focusedRowIndex: me
            })), W(me, ae);
          }
          break;
        case "ArrowDown":
          j.preventDefault();
          const ke = Math.min(ie - 1, Y + 1);
          E((me) => ({
            ...me,
            focusedRowIndex: ke
          })), W(ke, ae);
          break;
        case "ArrowLeft":
          j.preventDefault();
          const ye = Math.max(0, ae - 1);
          E((me) => ({
            ...me,
            focusedColumnIndex: ye
          })), W(Y, ye);
          break;
        case "ArrowRight":
          j.preventDefault();
          const Ce = Math.min(_e - 1, ae + 1);
          E((me) => ({
            ...me,
            focusedColumnIndex: Ce
          })), W(Y, Ce);
          break;
        case "Home":
          j.preventDefault(), j.ctrlKey ? (E((me) => ({
            ...me,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), W(0, 0)) : (E((me) => ({ ...me, focusedColumnIndex: 0 })), W(Y, 0));
          break;
        case "End":
          if (j.preventDefault(), j.ctrlKey) {
            const me = ie - 1, we = _e - 1;
            E((Le) => ({
              ...Le,
              focusedRowIndex: me,
              focusedColumnIndex: we
            })), W(me, we);
          } else {
            const me = _e - 1;
            E((we) => ({
              ...we,
              focusedColumnIndex: me
            })), W(Y, me);
          }
          break;
        case "Enter":
        case " ":
          if (j.preventDefault(), Q && Q.data[Y]) {
            const me = Q.data.some(
              (Ve) => "ews_data" in Ve
            ) ? _(Q.data, H.filters) : Q.data, we = H.sortConfig;
            let Le = me;
            if (we && we.length > 0 && (Le = [...me].sort((Ve, Ee) => {
              for (const { key: tt, direction: Ft } of we) {
                let xt = Ve[tt], ut = Ee[tt];
                const qe = Q.columns.find(
                  (xn) => xn.key === tt
                );
                if (qe?.tableRenderer ? (xt = qe.tableRenderer(Ve), ut = qe.tableRenderer(Ee)) : qe?.render && (xt = qe.render(Ve), ut = qe.render(Ee)), xt == null && ut == null) continue;
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
            })), Le[Y]) {
              const Ve = Le[Y], tt = H.globalSelectedRowData && U(H.globalSelectedRowData, Ve) ? null : Ve;
              z({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: tt
              });
            }
          }
          break;
      }
    },
    [
      o,
      H.selectedIndex,
      H.filters,
      H.sortConfig,
      _,
      U,
      z,
      E,
      V,
      W
    ]
  ), ce = he(
    (j, Y) => _(j, Y),
    [_]
  );
  if ($o(
    r,
    () => ({
      selectTab: (j) => {
        j >= 0 && j < o.length && (z({ type: "SET_SELECTED_INDEX", payload: j }), i?.(j));
      },
      refreshData: (j) => {
        console.log("Refreshing data for tab:", j ?? "all");
      },
      exportData: (j) => {
        const Y = j ?? H.selectedIndex, ae = o[Y];
        return ae ? ae.data : [];
      },
      getSelectedRows: (j) => H.globalSelectedRowData ? [] : [],
      clearSelection: (j) => {
        z({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (j) => {
        z({ type: "SET_FILTERS", payload: j });
      }
    }),
    [H.selectedIndex, H.selectedRows, o, i]
  ), N)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${f}`,
        "data-testid": F,
        children: p || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx(
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
  if (u)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${f}`,
        "data-testid": F,
        children: R || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ n.jsx("p", { children: u })
        ] })
      }
    );
  const re = Ae(null), le = Ae(null), de = Ae(null), [be, Te] = Ie(!0);
  Be(() => {
    if (!D) {
      Te(!1);
      return;
    }
    if (M) {
      Te(!1);
      return;
    }
    function j() {
      if (!re.current || !le.current || !de.current) return;
      const q = re.current.clientWidth, Q = Array.from(
        le.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), ie = Q.reduce((Ce, me) => Ce + me.offsetWidth, 0), _e = de.current.offsetWidth, ke = Math.max(8 * (Q.length - 1), 0), ye = ie + ke + _e + $ <= q;
      Te(ye);
    }
    const Y = requestAnimationFrame(() => j()), ae = new ResizeObserver(() => j());
    return re.current && ae.observe(re.current), le.current && ae.observe(le.current), () => {
      cancelAnimationFrame(Y), ae.disconnect();
    };
  }, [D, $, M, o.length]);
  const Se = de, pe = he(() => Se.current ? Array.from(
    Se.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((j) => !j.hasAttribute("disabled")) : [], []), J = he(
    (j) => {
      const Y = pe();
      if (!Y.length) return;
      const ae = Math.max(0, Math.min(j, Y.length - 1));
      Y[ae].focus(), E((q) => ({ ...q, focusArea: "actions", focusedActionIndex: ae }));
    },
    [pe]
  ), K = he(() => J(0), [J]), ne = he(
    (j, Y) => {
      const { key: ae } = j, q = o.length - 1;
      switch (ae) {
        case "ArrowUp": {
          D && !be && (j.preventDefault(), K());
          break;
        }
        case "ArrowLeft": {
          j.preventDefault();
          const Q = Y > 0 ? Y - 1 : q;
          B(Q), y(Q), P.current[Q]?.focus();
          break;
        }
        case "ArrowRight": {
          if (j.preventDefault(), Y === q && D && be) {
            K();
            return;
          }
          const Q = Y < q ? Y + 1 : 0;
          B(Q), y(Q), P.current[Q]?.focus();
          break;
        }
        case "ArrowDown": {
          j.preventDefault(), E((Q) => ({
            ...Q,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          j.preventDefault(), B(0), y(0), P.current[0]?.focus();
          break;
        }
        case "End": {
          j.preventDefault(), B(q), y(q), P.current[q]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          j.preventDefault(), B(Y);
          break;
        }
        case "Tab": {
          !j.shiftKey && Y === q && D && be && K();
          break;
        }
      }
    },
    [o.length, B, y, D, be, K]
  ), G = he((j) => {
    const { key: Y } = j, ae = pe();
    if (!ae.length) return;
    const q = ae.findIndex((Q) => Q === document.activeElement);
    switch (Y) {
      case "ArrowLeft": {
        if (be)
          if (q > 0)
            j.preventDefault(), J(q - 1);
          else {
            j.preventDefault();
            const Q = o.length - 1;
            B(Q), y(Q), P.current[Q]?.focus(), E((ie) => ({ ...ie, focusArea: "tabs", focusedTabIndex: Q }));
          }
        break;
      }
      case "ArrowRight": {
        be && (q < ae.length - 1 ? (j.preventDefault(), J(q + 1)) : (j.preventDefault(), B(0), y(0), P.current[0]?.focus(), E((Q) => ({ ...Q, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (be)
          j.preventDefault(), E((Q) => ({ ...Q, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          j.preventDefault();
          const Q = H.selectedIndex;
          P.current[Q]?.focus(), E((ie) => ({ ...ie, focusArea: "tabs", focusedTabIndex: Q }));
        }
        break;
      }
    }
  }, [pe, be, J, o.length, B, y, H.selectedIndex]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${g} ${f}`,
      id: v,
      "data-testid": F,
      ref: re,
      children: [
        c && !w && /* @__PURE__ */ n.jsx("div", { id: b, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: S,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ n.jsx(
          li,
          {
            sortConfig: H.sortConfig || [],
            columns: o.flatMap(
              (j) => j.columns.map((Y) => ({ key: Y.key, label: Y.label }))
            ).filter(
              (j, Y, ae) => ae.findIndex((q) => q.key === j.key) === Y
              // Remove duplicates
            ),
            onSortChange: (j) => {
              z({ type: "SET_SORT", payload: j });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        D && !be && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: de,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: G,
            children: D
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${be ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": c ? w ? c : b : S,
              "aria-orientation": g,
              className: "aria-tabs-datagrid__tabs",
              ref: le,
              children: o.map((j, Y) => {
                const ae = Y === H.selectedIndex, q = j.disabled || h;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${j.id}`,
                    "aria-controls": `panel-${j.id}`,
                    "aria-selected": ae,
                    "aria-disabled": q,
                    tabIndex: ae ? 0 : -1,
                    ref: (Q) => {
                      P.current[Y] = Q;
                    },
                    onClick: () => B(Y),
                    onKeyDown: (Q) => ne(Q, Y),
                    disabled: q,
                    className: [
                      "aria-tabs-datagrid__tab",
                      ae ? "aria-tabs-datagrid__tab--selected" : "",
                      q ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: j.label }),
                      H.tabLoadingStates[Y] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      H.tabErrors[Y] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  j.id
                );
              })
            }
          ),
          D && be && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: de,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: G,
              children: D
            }
          )
        ] }),
        o.map((j, Y) => {
          const ae = Y === H.selectedIndex;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${j.id}`,
              "aria-labelledby": `tab-${j.id}`,
              tabIndex: 0,
              hidden: !ae,
              ref: (q) => {
                Z.current[Y] = q;
              },
              className: `aria-tabs-datagrid__panel ${j.className || ""}`,
              "data-tab-panel": Y,
              children: ae && (() => {
                const q = j.data.some(
                  (ie) => "ews_data" in ie
                ) ? ce(j.data, H.filters) : j.data, Q = De(() => {
                  const ie = H.sortConfig;
                  return !ie || ie.length === 0 ? q : [...q].sort((_e, ke) => {
                    for (const { key: ye, direction: Ce } of ie) {
                      let me = _e[ye], we = ke[ye];
                      const Le = j.columns.find(
                        (Ee) => Ee.key === ye
                      );
                      if (Le?.tableRenderer ? (me = Le.tableRenderer(_e), we = Le.tableRenderer(ke)) : Le?.render && (me = Le.render(_e), we = Le.render(ke)), me == null && we == null) continue;
                      if (me == null) return 1;
                      if (we == null) return -1;
                      let Ve = 0;
                      if (typeof me == "number" && typeof we == "number" ? Ve = me - we : typeof me == "boolean" && typeof we == "boolean" ? Ve = me === we ? 0 : me ? 1 : -1 : Ve = String(me).localeCompare(
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
                }, [q, H.sortConfig, j.columns]);
                return /* @__PURE__ */ n.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": j.ariaLabel,
                    "aria-describedby": j.ariaDescription ? `panel-${j.id}-description` : void 0,
                    children: [
                      j.ariaDescription && /* @__PURE__ */ n.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${j.id}-description`,
                          children: j.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: j.columns.map((ie, _e) => {
                        const ke = H.sortConfig?.find(
                          (me) => me.key === ie.key
                        ), ye = !!ke, Ce = x.focusArea === "headers" && x.focusedHeaderIndex === _e;
                        return /* @__PURE__ */ n.jsx(
                          "th",
                          {
                            className: `sortable-header ${Ce ? "sortable-header--focused" : ""} ${ye ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: Ce ? 0 : -1,
                            onClick: () => te(Y, ie.key),
                            onKeyDown: (me) => oe(me, _e),
                            "aria-sort": ye ? ke?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ n.jsx("span", { className: "header-label", children: ie.label }),
                              /* @__PURE__ */ n.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${ye ? `sort-indicator--${ke?.direction}` : ""}`,
                                  children: [
                                    H.sortConfig && H.sortConfig.length > 0 && H.sortConfig.findIndex(
                                      (me) => me.key === ie.key
                                    ) !== -1 && /* @__PURE__ */ n.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${H.sortConfig.findIndex((me) => me.key === ie.key) + 1}`,
                                        "data-priority": H.sortConfig.findIndex(
                                          (me) => me.key === ie.key
                                        ) + 1,
                                        title: `Sort priority: ${H.sortConfig.findIndex((me) => me.key === ie.key) + 1}`,
                                        children: H.sortConfig.findIndex(
                                          (me) => me.key === ie.key
                                        ) + 1
                                      }
                                    ),
                                    ye && /* @__PURE__ */ n.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${ke?.direction}`,
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
                          ie.key
                        );
                      }) }) }),
                      /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: Q.map((ie, _e) => {
                        const ke = H.globalSelectedRowData && U(H.globalSelectedRowData, ie), ye = x.focusArea === "cells" && x.focusedRowIndex === _e;
                        return /* @__PURE__ */ n.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ke ? "data-row--selected" : ""} ${ye ? "data-row--focused" : ""}`,
                            "aria-selected": ke,
                            children: j.columns.map((Ce, me) => {
                              const we = ie[Ce.key];
                              let Le;
                              Ce.tableRenderer ? Le = Ce.tableRenderer(ie) : Ce.render ? Le = Ce.render(ie) : Le = we;
                              const Ve = x.focusArea === "cells" && x.focusedRowIndex === _e && x.focusedColumnIndex === me, Ee = () => {
                                if (Ce.customRenderer) {
                                  const tt = Ce.customRenderer(
                                    we,
                                    ie
                                  );
                                  return /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: tt
                                    }
                                  );
                                }
                                return typeof we == "boolean" && Le === we ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  A(we),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: we ? "Yes" : "No" })
                                ] }) : st.isValidElement(Le) || typeof Le != "object" ? Le ?? "" : Le;
                              };
                              return /* @__PURE__ */ n.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Ve ? "data-cell--focused" : ""}`,
                                  tabIndex: Ve ? 0 : -1,
                                  onClick: () => {
                                    const Ft = H.globalSelectedRowData && U(
                                      H.globalSelectedRowData,
                                      ie
                                    ) ? null : ie;
                                    z({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: Ft
                                    });
                                  },
                                  onKeyDown: (tt) => O(tt, _e, me),
                                  children: Ee()
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
}), Un = {
  asc: "↑",
  desc: "↓"
}, yf = (e) => [...e].sort((t, r) => t.priority - r.priority);
function la(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function vf(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function _f(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function wf(e, t) {
  const r = t.find((o) => o.id === e), a = vf(t);
  return r ? r.priority < a : !1;
}
const zx = ({
  sortConfig: e,
  onSortChange: t,
  className: r = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: o,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: c
}) => {
  const f = De(() => yf(e), [e]), h = he((F) => {
    if (l) return;
    const D = e.map(
      ($) => $.id === F ? { ...$, direction: $.direction === "asc" ? "desc" : "asc" } : $
    );
    t(D);
  }, [e, t, l]), g = he((F) => {
    if (l) return;
    const D = e.findIndex((M) => M.id === F);
    if (D <= 0) return;
    const $ = [...e];
    [$[D], $[D - 1]] = [$[D - 1], $[D]], t(la($));
  }, [e, t, l]), v = he((F) => {
    if (l) return;
    const D = e.findIndex((M) => M.id === F);
    if (D >= e.length - 1 || D === -1) return;
    const $ = [...e];
    [$[D], $[D + 1]] = [$[D + 1], $[D]], t(la($));
  }, [e, t, l]), N = he((F) => {
    if (l) return;
    const D = e.filter(($) => $.id !== F);
    t(la(D));
  }, [e, t, l]), p = he(() => {
    l || t([]);
  }, [t, l]), u = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const F = f.map((D, $) => {
      const M = D.direction === "asc" ? "ascending" : "descending";
      return `${$ + 1}. ${D.label} (${M})`;
    });
    if (F.length === 1)
      return `Sorted by: ${F[0]}`;
    if (F.length === 2)
      return `Sorted by: ${F.join(" and ")}`;
    {
      const D = F.pop();
      return `Sorted by: ${F.join(", ")}, and ${D}`;
    }
  }, R = De(() => {
    const F = ["sort-description"];
    return i && F.push("sort-help"), c && F.push(c), F.join(" ");
  }, [i, c]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: u()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: u()
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": d,
        "aria-describedby": R,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          f.map((F) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                Ge,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => N(F.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: F.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: F.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => h(F.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${F.label}. Currently ${F.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: F.direction === "asc" ? Un.asc : Un.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => g(F.id),
                          disabled: l || !_f(F.id, e),
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
                          onClick: () => v(F.id),
                          disabled: l || !wf(F.id, e),
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
    s && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      et,
      {
        variant: "secondary",
        onClick: p,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsxs("small", { children: [
      "Click ",
      Un.asc,
      "/",
      Un.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, gs = (e, t) => t.map((r) => ({
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
})), ja = [
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
], Sf = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), kf = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, Cf = (e) => {
  if (typeof e == "boolean") {
    const r = ja.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = ja.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, jf = (e) => `${e.name}-${e.bed_name}`, Nf = () => ({
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
}), Ox = (e) => {
  const t = Nf();
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
}, Tf = {
  dataComparator: Sf,
  filterFunction: kf,
  booleanRenderer: Cf,
  getDataId: jf
};
function uo(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: d,
    fieldRenderers: c = {},
    classPrefix: f = "adaptive-card"
  } = r, h = t.find((D) => D.key === a), g = h?.cardRenderer ? h.cardRenderer(e) : h?.render ? h.render(e) : e[a || "name"] || "Untitled", v = () => o.filter(($) => !i.includes($) && e[$]).slice(0, 3).map(($) => {
    const M = t.find((b) => b.key === $), T = e[$], L = c[$] ? c[$](T, e) : M?.cardRenderer ? M.cardRenderer(e) : M?.render ? M.render(e) : T;
    return `${M?.label || $}: ${L}`;
  }).join(" • "), N = () => s.length === 0 ? null : s.filter((D) => e[D.fieldKey] !== void 0).map((D) => {
    const $ = e[D.fieldKey], M = D.render ? D.render($, e) : $;
    return `<span class="nhsuk-tag ${$f(D, $)}">${M}</span>`;
  }).join(""), p = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", u = N(), R = v(), F = u ? `${R}${u ? `<div class="adaptive-card__badges">${u}</div>` : ""}` : R;
  return {
    variant: p(),
    heading: String(g),
    descriptionHtml: F,
    className: `adaptive-card ${f}`,
    "aria-label": `Record for ${g}`
  };
}
function $f(e, t) {
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
const Df = {
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
  onSelect: r,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, d = e.ward_name, c = e.bed_name, f = e.ews_score, h = e.speciality, g = e.consultant;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${o} healthcare-card--${s}`,
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
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: f !== void 0 && /* @__PURE__ */ n.jsxs(
            Ge,
            {
              color: Mf(hi(f)),
              className: "healthcare-card__alert",
              children: [
                "EWS: ",
                f
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
            /* @__PURE__ */ n.jsx("dd", { children: h })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ n.jsx("dd", { children: g })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            et,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (v) => {
                v.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            et,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (v) => {
                v.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            et,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (v) => {
                v.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, di = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        Ge,
        {
          color: Lf(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
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
      et,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
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
        Ge,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
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
      et,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
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
  onAction: r,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, d = e.ews_data?.temperature, c = e.ews_data?.systolic_bp, f = e.ews_data?.heart_rate, h = e.ews_data?.avpu;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--vitals healthcare-card--${a}`,
      onClick: () => t?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Vital signs for ${o}, EWS Score ${s}`,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vitals-summary", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__patient-name", children: o }),
            s !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${If(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: h && /* @__PURE__ */ n.jsxs(
            Ge,
            {
              color: "blue",
              className: "healthcare-card__avpu",
              children: [
                "AVPU: ",
                h.toUpperCase()
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
          f !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Heart Rate" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              f,
              " bpm"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            et,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (g) => {
                g.stopPropagation(), r?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ n.jsx(
            et,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (g) => {
                g.stopPropagation(), r?.("record-new", e);
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
function If(e) {
  return hi(e);
}
function Mf(e) {
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
function Lf(e) {
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
const Af = [
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
], pi = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Ff = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Bf = (e) => pi(e) === "high" || e.status === "urgent" ? "primary" : "default", Ef = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Pf = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Af,
  hiddenFields: [],
  getPriority: pi,
  getStatus: Ff,
  getVariant: Bf,
  fieldRenderers: Ef,
  classPrefix: "adaptive-card--healthcare"
}, Rf = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", o = r.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ n.jsx(
      ci,
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
  appointment: (e, t, r) => {
    const a = r.getStatus?.(e) || "pending", o = a === "urgent" ? "pending" : a;
    return /* @__PURE__ */ n.jsx(
      di,
      {
        data: e,
        columns: t,
        status: o,
        onSelect: (s) => console.log("Appointment selected:", s),
        onAction: (s, i) => console.log("Appointment action:", s, i)
      }
    );
  },
  medication: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium";
    return /* @__PURE__ */ n.jsx(
      ui,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Medication selected:", o),
        onAction: (o, s) => console.log("Medication action:", o, s)
      }
    );
  },
  vitals: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium";
    return /* @__PURE__ */ n.jsx(
      fi,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, Hf = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, fo = {
  name: "healthcare",
  defaultCardConfig: Pf,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Rf,
  fieldTypes: Hf
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
    cardTemplate: e?.cardTemplate ? (t, r, a) => e.cardTemplate(t, r) : void 0,
    classPrefix: "adaptive-card--generic"
  };
}
function po(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function zf(e, t) {
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
      const o = [...e.selectedRows];
      return o[t.payload.tabIndex] = t.payload.rowIndices, { ...e, selectedRows: o };
    case "SET_GLOBAL_SELECTED_ROW_DATA":
      return { ...e, globalSelectedRowData: t.payload };
    case "SET_FILTERS":
      return { ...e, filters: t.payload };
    case "ADJUST_ARRAYS":
      const { newLength: s } = t.payload, i = new Array(s).fill(!1), l = new Array(s).fill(null), d = new Array(s).fill([]);
      for (let c = 0; c < Math.min(e.tabLoadingStates.length, s); c++)
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
function Of(e, t) {
  const [r, a] = Ie("cards");
  return Be(() => {
    if (t) {
      a(t);
      return;
    }
    const o = () => {
      const s = window.innerWidth;
      s < e.mobile ? a("cards") : s < e.desktop ? a("hybrid") : a("table");
    };
    return o(), window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, [e, t]), r;
}
function Wf(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Uf(e, t, r, a) {
  const o = a ? { ...a.defaultCardConfig, ...r } : { ...Df, ...r };
  if (a && a.cardTemplates) {
    const s = Wf(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), uo(e, t, o);
}
const Wx = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: r = {},
  experimental: a = {},
  enableAdvancedSorting: o = !1,
  topActions: s,
  bottomActions: i,
  gridActions: l,
  forceGridActionsAbove: d,
  // Standard AriaTabsDataGrid props
  tabPanels: c,
  dataConfig: f,
  selectedIndex: h,
  onTabChange: g,
  ariaLabel: v = "Data grid",
  ariaDescription: N,
  orientation: p = "horizontal",
  id: u,
  disabled: R = !1,
  className: F,
  ...D
}) => {
  const $ = Of(e, t), M = h !== void 0, T = h ?? 0, L = De(() => {
    if (c.some(
      (K) => K.data && K.data.length > 0 && po(K.data)
    )) {
      const K = ho(r);
      return {
        ...fo.defaultCardConfig,
        ...K
      };
    } else
      return ho(r);
  }, [r, c]), w = De(() => c.some(
    (K) => K.data && K.data.length > 0 && po(K.data)
  ) ? fo : void 0, [c]), b = De(() => ({
    selectedIndex: T,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [T, c.length]), [S, m] = Do(zf, b), _ = Ae([]), I = Ae([]), k = Ae([]), C = Ae(null), [x, E] = Ie({
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
  }), ee = he((J) => {
    if (!J.current)
      return { columns: 1, rows: 0 };
    const K = J.current, ne = K.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (ne.length === 0)
      return { columns: 1, rows: 0 };
    const G = K.offsetWidth, Y = ne[0].offsetWidth, ae = Math.floor(G / Y) || 1, q = Math.ceil(ne.length / ae);
    return { columns: ae, rows: q };
  }, []), H = he((J, K) => ({
    row: Math.floor(J / K),
    col: J % K
  }), []), z = he((J, K, ne) => J * ne + K, []), U = he((J, K, ne, G) => {
    const { row: j, col: Y } = H(J, G);
    let ae = j, q = Y;
    switch (K) {
      case "up":
        ae = Math.max(0, j - 1);
        break;
      case "down":
        ae = Math.min(Math.floor((ne - 1) / G), j + 1);
        break;
      case "left":
        q = Math.max(0, Y - 1);
        break;
      case "right":
        q = Math.min(G - 1, Y + 1);
        break;
    }
    const Q = z(ae, q, G);
    return Math.min(Q, ne - 1);
  }, [H, z]);
  Be(() => {
    x.isCardNavigationActive && x.focusedCardElementIndex >= 0 && x.cardElements.length > 0 && setTimeout(() => {
      const J = x.cardElements[x.focusedCardElementIndex];
      J && (J.element.focus(), J.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [x.isCardNavigationActive, x.focusedCardElementIndex, x.cardElements.length]), Be(() => {
    const J = () => {
      if ($ === "cards" && C.current) {
        const { columns: G, rows: j } = ee(C);
        E((Y) => ({
          ...Y,
          gridColumns: G,
          gridRows: j
        }));
      }
    }, K = setTimeout(J, 200), ne = () => {
      setTimeout(J, 100);
    };
    return window.addEventListener("resize", ne), () => {
      clearTimeout(K), window.removeEventListener("resize", ne);
    };
  }, [$, c, ee]), Be(() => {
    const J = S.tabLoadingStates.length, K = c.length;
    J !== K && m({ type: "ADJUST_ARRAYS", payload: { newLength: K } });
  }, [c.length, S.tabLoadingStates.length]), Be(() => {
    M && h !== S.selectedIndex && m({ type: "SET_SELECTED_INDEX", payload: h });
  }, [M, h, S.selectedIndex]);
  const B = he((J) => {
    J >= 0 && J < c.length && !c[J].disabled && (m({ type: "SET_SELECTED_INDEX", payload: J }), g?.(J));
  }, [c, g]), se = he((J) => {
    console.log("Card selected:", J), m({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: J
    });
  }, []), y = he((J) => {
    const K = I.current[J];
    K && (K.focus(), K.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), P = he((J) => {
    const K = I.current[J];
    if (!K) return [];
    const ne = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), G = K.querySelectorAll(ne);
    return Array.from(G).map((j, Y) => ({
      id: j.id || `card-${J}-element-${Y}`,
      element: j,
      label: j.getAttribute("aria-label") || j.textContent?.trim() || j.getAttribute("title") || `Element ${Y + 1}`,
      type: j.tagName.toLowerCase() === "button" ? "button" : j.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(j.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), Z = Ae(null), te = he((J) => {
    const K = Z.current;
    if (!K) return;
    const ne = document.createElement("div");
    ne.setAttribute("aria-live", "polite"), ne.setAttribute("aria-atomic", "true"), ne.className = "sr-only", ne.textContent = J, K.appendChild(ne), setTimeout(() => {
      K.contains(ne) && K.removeChild(ne);
    }, 1e3);
  }, []), V = he((J) => {
    const K = J.filter((G) => G.sortable !== !1), ne = [
      { value: "", label: "Sort by..." }
    ];
    return K.forEach((G) => {
      const j = G.label || G.key;
      G.key === "name" ? ne.push(
        { value: `${G.key}-asc`, label: `${j} (A-Z)` },
        { value: `${G.key}-desc`, label: `${j} (Z-A)` }
      ) : G.key === "ews_score" || G.key.includes("score") ? ne.push(
        { value: `${G.key}-desc`, label: `${j} (High-Low)` },
        { value: `${G.key}-asc`, label: `${j} (Low-High)` }
      ) : G.key === "age" || G.key.includes("date") || G.key.includes("time") ? ne.push(
        { value: `${G.key}-desc`, label: `${j} (Oldest-Youngest)` },
        { value: `${G.key}-asc`, label: `${j} (Youngest-Oldest)` }
      ) : ne.push(
        { value: `${G.key}-asc`, label: `${j} (A-Z)` },
        { value: `${G.key}-desc`, label: `${j} (Z-A)` }
      );
    }), ne;
  }, []), A = he((J, K) => K ? [...J].sort((ne, G) => {
    const j = ne[K.key], Y = G[K.key];
    if (j == null && Y == null) return 0;
    if (j == null) return 1;
    if (Y == null) return -1;
    const ae = Number(j), q = Number(Y);
    if (!isNaN(ae) && !isNaN(q))
      return K.direction === "asc" ? ae - q : q - ae;
    const Q = String(j).toLowerCase(), ie = String(Y).toLowerCase(), _e = Q.localeCompare(ie);
    return K.direction === "asc" ? _e : -_e;
  }) : J, []), W = he((J) => {
    if (!J) {
      E((Q) => ({ ...Q, cardSortConfig: null })), te("Card sorting cleared");
      return;
    }
    const [K, ne] = J.split("-"), G = { key: K, direction: ne };
    E((Q) => ({ ...Q, cardSortConfig: G }));
    const ae = c[S.selectedIndex]?.columns.find((Q) => Q.key === K)?.label || K;
    te(`Cards sorted by ${ae} in ${ne === "asc" ? "ascending" : "descending"} order`);
  }, [c, S.selectedIndex, te]), oe = he((J) => {
    const G = c[S.selectedIndex]?.columns.find((Y) => Y.key === J.key)?.label || J.key, j = J.direction === "asc" ? "ascending" : "descending";
    return `${G} (${j})`;
  }, [c, S.selectedIndex]), O = he((J) => {
    const K = c[S.selectedIndex];
    if (o) {
      const ne = S.sortConfig;
      return !ne || ne.length === 0 ? J : [...J].sort((G, j) => {
        for (const { key: Y, direction: ae } of ne) {
          let q = G[Y], Q = j[Y];
          const ie = K?.columns.find((we) => we.key === Y);
          if (ie?.cardRenderer ? (q = ie.cardRenderer(G), Q = ie.cardRenderer(j)) : ie?.render && (q = ie.render(G), Q = ie.render(j)), q == null && Q == null) continue;
          if (q == null) return ae === "asc" ? -1 : 1;
          if (Q == null) return ae === "asc" ? 1 : -1;
          const _e = Number(q), ke = Number(Q);
          if (!isNaN(_e) && !isNaN(ke)) {
            const we = _e - ke;
            if (we !== 0) return ae === "asc" ? we : -we;
            continue;
          }
          const ye = String(q).toLowerCase(), Ce = String(Q).toLowerCase(), me = ye.localeCompare(Ce);
          if (me !== 0) return ae === "asc" ? me : -me;
        }
        return 0;
      });
    } else
      return A(J, x.cardSortConfig);
  }, [o, S.sortConfig, x.cardSortConfig, A, c, S.selectedIndex]), ce = he((J, K) => {
    const ne = P(J), G = ne[K];
    if (G) {
      G.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const j = `Focused on ${G.label}, ${G.type} ${K + 1} of ${ne.length} within card`;
      te(j);
    }
  }, [P, te]), re = he((J) => {
    _.current[J]?.focus();
  }, []), le = he(() => {
    const J = k.current[0];
    if (!J) return [];
    const K = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), ne = J.querySelectorAll(K);
    return Array.from(ne);
  }, []), de = he((J) => {
    if (J === 0) {
      const K = k.current[0], ne = K?.querySelector(".sort-controls-row");
      if (ne) {
        ne.setAttribute("tabindex", "-1"), ne.focus();
        const j = `Sort controls group with ${le().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        te(j);
      } else K && K.focus();
    } else {
      const K = le(), ne = J - 1, G = K[ne];
      if (G) {
        G.focus();
        const j = G.tagName.toLowerCase() === "select", Y = G.tagName.toLowerCase() === "button", ae = j ? "dropdown" : Y ? "button" : "control", q = j ? ". Use Space key to open dropdown" : "", Q = `${ae} ${ne + 1} of ${K.length}${q}`;
        te(Q);
      }
    }
  }, [le, te]), be = he((J, K) => {
    const { key: ne } = J, G = c[S.selectedIndex], j = G?.data.length || 0;
    if (ne === "ArrowLeft" && J.shiftKey) {
      J.preventDefault(), J.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (ne === "ArrowRight" && J.shiftKey) {
      J.preventDefault(), J.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!x.isCardNavigationActive) {
      switch (ne) {
        case "ArrowUp":
          if (J.preventDefault(), K === 0)
            E((Q) => ({ ...Q, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), de(0);
          else {
            const Q = U(K, "up", j, x.gridColumns);
            Q !== K && (E((ie) => ({ ...ie, focusedCardIndex: Q })), y(Q), te(`Moved to card ${Q + 1} of ${j}`));
          }
          break;
        case "ArrowDown":
          J.preventDefault();
          const Y = U(K, "down", j, x.gridColumns);
          Y !== K && (E((Q) => ({ ...Q, focusedCardIndex: Y })), y(Y), te(`Moved to card ${Y + 1} of ${j}`));
          break;
        case "ArrowLeft":
          J.preventDefault();
          const ae = U(K, "left", j, x.gridColumns);
          ae !== K ? (E((Q) => ({ ...Q, focusedCardIndex: ae })), y(ae), te(`Moved to card ${ae + 1} of ${j}`)) : S.selectedIndex > 0 && (m({ type: "SET_SELECTED_INDEX", payload: S.selectedIndex - 1 }), E((Q) => ({ ...Q, focusArea: "tabs" })), setTimeout(() => re(S.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          J.preventDefault();
          const q = U(K, "right", j, x.gridColumns);
          q !== K ? (E((Q) => ({ ...Q, focusedCardIndex: q })), y(q), te(`Moved to card ${q + 1} of ${j}`)) : S.selectedIndex < c.length - 1 && (m({ type: "SET_SELECTED_INDEX", payload: S.selectedIndex + 1 }), E((Q) => ({ ...Q, focusArea: "tabs" })), setTimeout(() => re(S.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (G?.data[K]) {
            J.preventDefault(), E((ie) => ({
              ...ie,
              selectedCardIndex: K
            }));
            const Q = P(K);
            Q.length > 0 ? (E((ie) => ({
              ...ie,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: Q,
              selectedCardIndex: K
              // Ensure selection is maintained
            })), te(`Card ${K + 1} selected and navigation activated. ${Q.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : te(`Card ${K + 1} selected.`);
          }
          break;
        case " ":
          if (G?.data[K]) {
            J.preventDefault(), E((ie) => ({
              ...ie,
              selectedCardIndex: ie.selectedCardIndex === K ? -1 : K
            }));
            const Q = x.selectedCardIndex === K;
            te(`Card ${K + 1} ${Q ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (ne) {
      case "ArrowUp":
      case "ArrowLeft":
        J.preventDefault();
        const Y = Math.max(0, x.focusedCardElementIndex - 1);
        E((ie) => ({ ...ie, focusedCardElementIndex: Y })), ce(K, Y);
        break;
      case "ArrowDown":
      case "ArrowRight":
        J.preventDefault();
        const ae = Math.min(x.cardElements.length - 1, x.focusedCardElementIndex + 1);
        E((ie) => ({ ...ie, focusedCardElementIndex: ae })), ce(K, ae);
        break;
      case "Enter":
        J.preventDefault();
        const q = x.cardElements[x.focusedCardElementIndex];
        q && (q.element.click(), te(`Activated ${q.label}`));
        break;
      case " ":
        J.preventDefault();
        const Q = x.cardElements[x.focusedCardElementIndex];
        if (Q) {
          const ie = new MouseEvent("dblclick", { bubbles: !0 });
          Q.element.dispatchEvent(ie), te(`Double-clicked ${Q.label}`);
        }
        break;
      case "Escape":
        J.preventDefault(), E((ie) => ({
          ...ie,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => y(K), 0), te("Exited card navigation, returned to card level");
        break;
      case "Home":
        J.preventDefault(), x.cardElements.length > 0 && (E((ie) => ({ ...ie, focusedCardElementIndex: 0 })), ce(K, 0));
        break;
      case "End":
        if (J.preventDefault(), x.cardElements.length > 0) {
          const ie = x.cardElements.length - 1;
          E((_e) => ({ ..._e, focusedCardElementIndex: ie })), ce(K, ie);
        }
        break;
    }
  }, [x, S.selectedIndex, c, se, y, re, E, P, ce, te]), Te = he((J) => {
    const K = _.current[J], ne = K?.parentElement;
    if (!K || !ne) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const G = K.getBoundingClientRect(), j = ne.getBoundingClientRect();
    G.left >= j.left && G.right <= j.right || (console.log("Tab not visible, scrolling into view (mobile)"), K.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), Se = he((J, K) => {
    if ($ !== "cards")
      return;
    const { key: ne } = J;
    switch (ne) {
      case "ArrowLeft":
        J.preventDefault();
        const G = K > 0 ? K - 1 : c.length - 1;
        B(G), E((q) => ({ ...q, focusedTabIndex: G })), _.current[G]?.focus(), Te(G);
        break;
      case "ArrowRight":
        J.preventDefault();
        const j = K < c.length - 1 ? K + 1 : 0;
        B(j), E((q) => ({ ...q, focusedTabIndex: j })), _.current[j]?.focus(), Te(j);
        break;
      case "ArrowDown":
        J.preventDefault();
        const Y = c[S.selectedIndex];
        Y && Y.columns && Y.columns.length > 0 ? (E((q) => ({
          ...q,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), de(0)) : (E((q) => ({
          ...q,
          focusArea: "cards",
          focusedCardIndex: 0
        })), y(0));
        break;
      case "Home":
        J.preventDefault(), B(0), E((q) => ({ ...q, focusedTabIndex: 0 })), _.current[0]?.focus(), Te(0);
        break;
      case "End":
        J.preventDefault();
        const ae = c.length - 1;
        B(ae), E((q) => ({ ...q, focusedTabIndex: ae })), _.current[ae]?.focus(), Te(ae);
        break;
      case "Enter":
      case " ":
        J.preventDefault(), B(K);
        break;
    }
  }, [c.length, B, $, y, E, Te]), pe = he((J, K) => {
    if ($ !== "cards")
      return;
    const { key: ne } = J, G = c[S.selectedIndex];
    if (K === 0 && !x.isSortControlsActive) {
      switch (ne) {
        case "ArrowUp":
          J.preventDefault(), E((Y) => ({
            ...Y,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), re(S.selectedIndex);
          break;
        case "ArrowDown":
          J.preventDefault(), G?.data && G.data.length > 0 && (E((Y) => ({
            ...Y,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), y(0));
          break;
        case "Enter":
        case " ":
          J.preventDefault();
          const j = le();
          if (j.length > 0) {
            E((ae) => ({
              ...ae,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), de(1);
            const Y = `Entered sort controls navigation mode. ${j.length} controls available. Use arrow keys to navigate between controls.`;
            te(Y);
          }
          break;
        case "Escape":
          J.preventDefault(), E((Y) => ({
            ...Y,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), re(S.selectedIndex);
          break;
      }
      return;
    }
    if (x.isSortControlsActive) {
      const Y = le().length;
      switch (ne) {
        case "ArrowLeft":
          J.preventDefault();
          const ae = x.focusedSortControlIndex > 1 ? x.focusedSortControlIndex - 1 : Y;
          E((Q) => ({ ...Q, focusedSortControlIndex: ae })), de(ae);
          break;
        case "ArrowRight":
          J.preventDefault();
          const q = x.focusedSortControlIndex < Y ? x.focusedSortControlIndex + 1 : 1;
          E((Q) => ({ ...Q, focusedSortControlIndex: q })), de(q);
          break;
        case "ArrowDown":
          if (J.preventDefault(), x.isSortControlsActive) {
            const Q = x.focusedSortControlIndex < Y ? x.focusedSortControlIndex + 1 : 1;
            E((ie) => ({ ...ie, focusedSortControlIndex: Q })), de(Q);
          } else
            G?.data && G.data.length > 0 && (E((Q) => ({
              ...Q,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), y(0));
          break;
        case "ArrowUp":
          J.preventDefault(), E((Q) => ({
            ...Q,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), de(0);
          break;
        case "Escape":
          J.preventDefault(), E((Q) => ({
            ...Q,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), de(0);
          break;
      }
    }
  }, [$, c, S.selectedIndex, x.isSortControlsActive, x.focusedSortControlIndex, de, re, y, E, te]);
  if ($ === "cards") {
    const J = c[S.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${F || ""}`, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": v,
            "aria-describedby": `${N || ""} ${u ? `${u}-navigation-help` : ""}`.trim(),
            "aria-orientation": p,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((K, ne) => {
              const G = ne === S.selectedIndex, j = K.disabled || R;
              return /* @__PURE__ */ n.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${K.id}`,
                  "aria-controls": `panel-${K.id}`,
                  "aria-selected": G,
                  "aria-disabled": j,
                  tabIndex: G ? 0 : -1,
                  ref: (Y) => {
                    _.current[ne] = Y;
                  },
                  onClick: () => B(ne),
                  onKeyDown: (Y) => Se(Y, ne),
                  disabled: j,
                  className: [
                    "aria-tabs-datagrid__tab",
                    G ? "aria-tabs-datagrid__tab--selected" : "",
                    j ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: K.label }),
                    S.tabLoadingStates[ne] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    S.tabErrors[ne] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                K.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      J && J.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          li,
          {
            sortConfig: S.sortConfig || [],
            columns: J.columns.map((K) => ({ key: K.key, label: K.label })),
            onSortChange: (K) => {
              m({ type: "SET_SORT", payload: K });
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
            tabIndex: x.focusArea === "sort-controls" ? 0 : -1,
            ref: (K) => {
              k.current[0] = K;
            },
            onKeyDown: (K) => pe(K, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${J.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  Yn,
                  {
                    id: `card-sort-${J.id}`,
                    name: `card-sort-${J.id}`,
                    value: x.cardSortConfig ? `${x.cardSortConfig.key}-${x.cardSortConfig.direction}` : "",
                    onChange: (K) => W(K.target.value),
                    className: "sort-select",
                    children: V(J.columns).map((K) => /* @__PURE__ */ n.jsx("option", { value: K.value, children: K.label }, K.value))
                  }
                )
              ] }),
              x.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  oe(x.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  et,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => W(""),
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
          ref: C,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${J?.label || "Data"} cards in ${x.gridRows} rows and ${x.gridColumns} columns`,
          "aria-rowcount": x.gridRows,
          "aria-colcount": x.gridColumns,
          id: `panel-${J?.id}`,
          "aria-labelledby": `tab-${J?.id}`,
          children: O(J?.data || []).map((K, ne) => {
            const G = x.selectedCardIndex === ne, j = x.focusedCardIndex === ne && x.focusArea === "cards", Y = x.focusedCardIndex === ne && x.focusArea === "card" && x.isCardNavigationActive, ae = ne === 0 && x.focusArea !== "cards", q = j || ae, Q = H(ne, x.gridColumns);
            if (r.cardTemplate) {
              const ke = r.cardTemplate(K, J.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": Q.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ n.jsx(
                    "div",
                    {
                      ref: (ye) => {
                        I.current[ne] = ye;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        G ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        j ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        Y ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": Q.col + 1,
                      "aria-selected": G,
                      "aria-expanded": Y,
                      "aria-description": Y ? `Card navigation active. ${x.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: q ? 0 : -1,
                      onClick: () => {
                        E((ye) => ({
                          ...ye,
                          selectedCardIndex: ye.selectedCardIndex === ne ? -1 : ne
                        })), se(K);
                      },
                      onKeyDown: (ye) => be(ye, ne),
                      onFocus: () => {
                        E((ye) => ye.isCardNavigationActive ? ye : ye.focusedCardIndex !== ne || ye.focusArea !== "cards" ? {
                          ...ye,
                          focusedCardIndex: ne,
                          focusArea: "cards"
                        } : ye);
                      },
                      children: ke
                    }
                  )
                },
                `card-${ne}`
              );
            }
            const ie = Uf(K, J.columns, L, w), _e = [
              ie.className || "",
              G ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              j ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              Y ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": Q.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      G ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      j ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      Y ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": Q.col + 1,
                    "aria-selected": G,
                    "aria-expanded": Y,
                    onKeyDown: (ke) => {
                      ke.key === "Enter" && (ke.preventDefault(), E((ye) => ({
                        ...ye,
                        selectedCardIndex: ne
                      }))), be(ke, ne);
                    },
                    children: /* @__PURE__ */ n.jsx(
                      si,
                      {
                        ...ie,
                        ref: (ke) => {
                          I.current[ne] = ke;
                        },
                        className: _e,
                        "aria-label": `${ie["aria-label"] || ie.heading}. ${Y ? `Card navigation active with ${x.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: q ? 0 : -1,
                        onClick: () => {
                          E((ke) => ({
                            ...ke,
                            selectedCardIndex: ke.selectedCardIndex === ne ? -1 : ne
                          })), se(K);
                        },
                        onKeyDown: (ke) => be(ke, ne),
                        onFocus: () => {
                          x.isCardNavigationActive || E((ke) => ke.focusedCardIndex !== ne || ke.focusArea !== "cards" ? {
                            ...ke,
                            focusedCardIndex: ne,
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
              `card-${ne}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: Z,
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
  return $ === "hybrid" ? /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${F || ""}`, children: [
    s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ n.jsx(
      Ca,
      {
        tabPanels: c,
        dataConfig: f,
        ariaLabel: v,
        ariaDescription: N,
        orientation: p,
        id: u,
        disabled: R,
        selectedIndex: h,
        onTabChange: g,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: d,
        ...D
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${F || ""}`, children: [
    s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ n.jsx(
      Ca,
      {
        tabPanels: c,
        dataConfig: f,
        ariaLabel: v,
        ariaDescription: N,
        orientation: p,
        id: u,
        disabled: R,
        selectedIndex: h,
        onTabChange: g,
        actions: l,
        forceActionsAbove: d,
        ...D
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, mi = (e) => {
  const t = ja.find((r) => r.value === e);
  return t ? t.icon : null;
}, Gf = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = r.discountedPrice || r.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => mi(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, Vf = (e) => gs(e, [
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
]), Yf = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.dateRange) {
      const [a, o] = t.dateRange;
      if (r.date < a || r.date > o) return !1;
    }
    if (t.amountRange) {
      const [a, o] = t.amountRange;
      if (Math.abs(r.amount) < a || Math.abs(r.amount) > o) return !1;
    }
    return !(t.types && t.types.length > 0 && !t.types.includes(r.type) || t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.pending !== void 0 && r.pending !== t.pending);
  }) : e,
  booleanRenderer: (e) => mi(e),
  getDataId: (e) => `financial-${e.id}`
}, qf = (e) => gs(e, [
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
]), Xf = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: Gf,
    createTabs: Vf
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Yf,
    createTabs: qf
  }
}, mo = (e, t) => {
  const r = Xf[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
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
], Kf = [
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
], Zf = [
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
], Jf = [
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
], Qf = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, eh = () => [
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
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ci,
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
    data: Kf,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      di,
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
    data: Zf,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ui,
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
    data: Jf,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      fi,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], th = () => {
  const [e, t] = Ie("healthcare"), r = De(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: Tf,
      tabPanels: eh(),
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
      dataConfig: Qf,
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
      data: bo
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
      }, children: Object.keys(r).map((o) => /* @__PURE__ */ n.jsx(
        et,
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
      Ca,
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
}, Ux = th, xi = (e) => /* @__PURE__ */ n.jsx(Lo, { ...e }), Gx = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = "two-thirds",
  mainWrapperSize: o,
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  service: d,
  navigation: c,
  search: f,
  account: h,
  organisation: g,
  logo: v,
  className: N,
  ...p
}) => {
  const u = {
    service: d,
    navigation: c,
    search: f,
    account: h,
    organisation: g,
    logo: v,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(ai, { ...s }),
    /* @__PURE__ */ n.jsx(Po, { ...u }),
    /* @__PURE__ */ n.jsx(xi, { className: N, ...p, children: /* @__PURE__ */ n.jsx(Ao, { size: o, children: /* @__PURE__ */ n.jsx(qt, { children: /* @__PURE__ */ n.jsxs(jn, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Mt, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(Ro, { ...l })
  ] });
}, Vx = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = "two-thirds",
  mainWrapperSize: o = "small",
  // Default to small size for transactional forms
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  backLinkProps: d,
  serviceName: c,
  serviceHref: f,
  logo: h,
  className: g,
  ...v
}) => {
  const N = {
    service: {
      text: c,
      href: f
    },
    logo: h,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(ai, { ...s }),
    /* @__PURE__ */ n.jsx(Po, { ...N }),
    /* @__PURE__ */ n.jsxs(xi, { className: g, ...v, children: [
      d && /* @__PURE__ */ n.jsx(ba, { ...d }),
      /* @__PURE__ */ n.jsx(Ao, { size: o, children: /* @__PURE__ */ n.jsx(qt, { children: /* @__PURE__ */ n.jsxs(jn, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Mt, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(Ro, { ...l })
  ] });
}, bi = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = xe("nhsuk-back-link", a), d = xe("nhsuk-back-link__link"), c = () => /* @__PURE__ */ n.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ n.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ n.jsx("button", { className: d, type: "button", onClick: s, ...i, children: c() }) : /* @__PURE__ */ n.jsx("a", { className: d, href: r, ...i, children: c() }) });
};
bi.displayName = "ForwardLink";
const an = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function yo() {
  return typeof window > "u" ? an.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function yi() {
  const [e, t] = X.useState(yo());
  X.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(yo());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const r = X.useCallback((s) => e >= an[s], [e]), a = X.useCallback((s) => e < an[s], [e]), o = X.useCallback((s, i) => e >= an[s] && e < an[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: o,
    /** Raw numeric values */
    values: an
  };
}
function Yx(e) {
  const { width: t, values: r } = yi();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = r[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function nh(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = X.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = X.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return X.useEffect(() => {
    if (!t || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search);
    o ? d.set(r, String(o)) : d.delete(r), d.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${d.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [o, i, t, r, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const rh = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
), ah = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
function sh(e) {
  const {
    items: t,
    selectedId: r,
    defaultSelectedId: a,
    onSelectionChange: o,
    renderItemContent: s,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: d,
    animated: c = !0,
    backLabel: f = "Back",
    nextLabel: h = "Next",
    isLoading: g = !1,
    emptyState: v,
    a11y: N,
    className: p,
    getId: u = (ue) => ue.id,
    orientation: R = "vertical",
    autoEnableThirdColumn: F = !0,
    onDrillChange: D,
    navigationInstructions: $ = "Use arrow keys to navigate, Enter to open.",
    initialFocus: M = "first",
    skipFocusOnSelect: T = !1,
    skipAnnouncements: L = !1,
    onFocusChange: w,
    syncUrl: b = !1,
    urlParamSelected: S = "nsv",
    urlParamDrill: m = "nsvDrill",
    urlSyncDebounceMs: _ = 0,
    lazySecondary: I = !1,
    navFooter: k,
    collapsibleNav: C = !1,
    navInitiallyCollapsed: x = !1,
    onNavCollapseChange: E,
    collapseToggleLabelShow: ee = "Show navigation",
    collapseToggleLabelHide: H = "Hide navigation",
    collapseToggleIconShow: z,
    collapseToggleIconHide: U,
    persistNavCollapsed: B,
    navCollapsedStorageKey: se = "nsvCollapsed",
    navCollapsedUrlParam: y = "nsvCollapsed",
    autoContentHeader: P,
    contentHeaderLevel: Z = 2,
    renderContentHeader: te,
    contentSubheader: V,
    secondarySubheader: A
  } = e, { up: W } = yi(), [oe, O] = X.useState(!1);
  X.useEffect(() => {
    O(!0);
  }, []);
  const ce = oe && W("medium"), re = oe && W("xlarge");
  let le;
  d ? le = d : ce ? le = "two-column" : le = "list", !d && F && l && re && (le = "three-column");
  const de = nh({
    enabled: b,
    paramSelected: S,
    paramDrill: m
  }), [be, Te] = X.useState(
    () => de.selectedId !== void 0 ? de.selectedId : a
  ), Se = r !== void 0 ? r : be, pe = t.find((ue) => u(ue) === Se), [J, K] = X.useState(
    void 0
  );
  X.useEffect(() => {
    if (Se === void 0) return;
    K(Se);
    const ue = setTimeout(() => K(void 0), 220);
    return () => clearTimeout(ue);
  }, [Se]);
  const ne = X.useRef(null), G = X.useRef(null), j = X.useRef(null), Y = X.useRef(null), [ae, q] = X.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [Q, ie] = X.useState(() => "nav"), [_e, ke] = X.useState(0), ye = () => [
    Y.current,
    G.current,
    j.current
  ].filter(Boolean), Ce = (ue) => {
    const ve = ye(), ge = Math.max(0, Math.min(ue, ve.length - 1));
    ve[ge]?.focus(), ke(ge);
  }, me = X.useCallback(
    (ue) => ue ? Array.from(ue.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (ge) => !ge.hasAttribute("disabled") && ge.tabIndex !== -1
    ) : [],
    []
  ), we = X.useCallback(
    (ue) => {
      const ve = me(G.current);
      if (!ve.length) {
        G.current?.focus();
        return;
      }
      const ge = Math.max(0, Math.min(ue, ve.length - 1)), Ne = ve[ge];
      Ne.focus(), setTimeout(() => {
        document.activeElement !== Ne && (Ne.focus(), setTimeout(() => {
          document.activeElement !== Ne && Ne.click();
        }, 10));
      }, 10), q((Pe) => ({ ...Pe, contentIndex: ge }));
      const Oe = (Pe) => {
        Pe.key === "Escape" && (Pe.preventDefault(), Pe.stopPropagation(), G.current?.focus(), Ne.removeEventListener("keydown", Oe));
      };
      ve.forEach((Pe) => {
        const He = Pe._escapeHandler;
        He && Pe.removeEventListener("keydown", He);
      }), Ne._escapeHandler = Oe, Ne.addEventListener("keydown", Oe);
    },
    [me]
  ), Le = X.useCallback(
    (ue) => {
      const ve = me(j.current);
      if (!ve.length) {
        j.current?.focus();
        return;
      }
      const ge = Math.max(0, Math.min(ue, ve.length - 1)), Ne = ve[ge];
      Ne.focus(), setTimeout(() => {
        document.activeElement !== Ne && (Ne.focus(), setTimeout(() => {
          document.activeElement !== Ne && Ne.click();
        }, 10));
      }, 10), q((Pe) => ({ ...Pe, secondaryIndex: ge }));
      const Oe = (Pe) => {
        Pe.key === "Escape" && (Pe.preventDefault(), Pe.stopPropagation(), j.current?.focus(), Ne.removeEventListener("keydown", Oe));
      };
      ve.forEach((Pe) => {
        const He = Pe._escapeHandler;
        He && Pe.removeEventListener("keydown", He);
      }), Ne._escapeHandler = Oe, Ne.addEventListener("keydown", Oe);
    },
    [me]
  ), Ve = (ue) => {
    if (ue.defaultPrevented) return;
    const ve = ue.key, ge = ue.target, Ne = !!Qe.current && Qe.current.contains(ge), Oe = !!G.current && G.current.contains(ge), Pe = !!j.current && j.current.contains(ge), He = !!j.current, tn = ge === Y.current || ge === G.current || ge === j.current, Wt = Ee && (le === "list" || le === "cards"), Rn = Oe && !!ge.closest(".nhs-navigation-split-view__header");
    if (Q === "containers" && tn) {
      if (ve === "ArrowRight") {
        ue.preventDefault();
        const $e = ye(), ze = Math.min($e.length - 1, _e + 1);
        Ce(ze);
        return;
      }
      if (ve === "ArrowLeft") {
        ue.preventDefault();
        const $e = Math.max(0, _e - 1);
        Ce($e);
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
        if (ue.preventDefault(), ge === Y.current) {
          if (ie("nav"), Qe.current) {
            const $e = Array.from(
              Qe.current.querySelectorAll("[data-nav-item]")
            );
            ($e[We >= 0 ? We : 0] || $e[0])?.focus();
          }
        } else ge === G.current ? (ie("content"), we(ae.contentIndex)) : ge === j.current && (ie("secondary"), Le(ae.secondaryIndex));
        return;
      }
      return;
    }
    if (ve === "Escape") {
      if (Q === "content" || Q === "secondary") {
        if (Oe || Pe) {
          if (ue.preventDefault(), ie("nav"), Qe.current) {
            const ze = Array.from(
              Qe.current.querySelectorAll("[data-nav-item]")
            )[We >= 0 ? We : 0];
            setTimeout(() => ze?.focus(), 10);
          }
        } else if ((ge === G.current || ge === j.current) && (ue.preventDefault(), ie("nav"), Qe.current)) {
          const ze = Array.from(
            Qe.current.querySelectorAll("[data-nav-item]")
          )[We >= 0 ? We : 0];
          setTimeout(() => ze?.focus(), 10);
        }
      }
      return;
    }
    if (ve === "Enter" || ve === " ") {
      if (ge.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (ge === G.current && Q === "content") {
        ue.preventDefault(), ue.stopPropagation(), me(G.current).length > 0 && setTimeout(() => {
          we(ae.contentIndex);
        }, 50);
        return;
      }
      if (ge === j.current && Q === "secondary") {
        ue.preventDefault(), ue.stopPropagation(), me(
          j.current
        ).length > 0 && setTimeout(() => {
          Le(ae.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Wt && Rn && !tn && (ve === "ArrowRight" || ve === "ArrowLeft")) {
      const $e = me(G.current).filter(
        (ze) => ze.closest(".nhs-navigation-split-view__header")
      );
      if ($e.length > 1) {
        const ze = $e.indexOf(ge);
        if (ze >= 0) {
          const Ns = (ze + (ve === "ArrowRight" ? 1 : -1) + $e.length) % $e.length;
          ue.preventDefault(), $e[Ns].focus();
          return;
        }
      }
    }
    if (ve === "ArrowRight") {
      if (Ne || Q === "nav") {
        ue.preventDefault(), ie("content"), setTimeout(() => G.current?.focus(), 10);
        return;
      }
      if (Oe || Q === "content") {
        He && (ue.preventDefault(), ie("secondary"), setTimeout(() => j.current?.focus(), 10));
        return;
      }
    }
    if (ve === "ArrowLeft") {
      if (Pe || Q === "secondary") {
        ue.preventDefault(), ie("content"), setTimeout(() => G.current?.focus(), 10);
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
      const $e = Array.from(
        Qe.current.querySelectorAll("[data-nav-item]")
      ), ze = $e[We >= 0 ? We : 0] || $e[0];
      setTimeout(() => ze?.focus(), 10);
    }
    if (ve === "End") {
      const $e = He ? j.current : G.current;
      $e && !$e.contains(ge) && (ue.preventDefault(), He ? (ie("secondary"), setTimeout(() => j.current?.focus(), 10)) : (ie("content"), setTimeout(() => G.current?.focus(), 10)));
    }
    if (ve === "ArrowDown" || ve === "ArrowUp") {
      if (ge === G.current && ve === "ArrowDown") {
        ue.preventDefault(), me(G.current).length > 0 && we(0);
        return;
      }
      if (ge === j.current && ve === "ArrowDown") {
        ue.preventDefault(), me(
          j.current
        ).length > 0 && Le(0);
        return;
      }
      if (Oe) {
        const $e = me(G.current);
        if ($e.length) {
          ue.preventDefault();
          const ze = ve === "ArrowDown" ? 1 : -1, ht = (ae.contentIndex + ze + $e.length) % $e.length;
          we(ht);
        }
      } else if (Pe) {
        const $e = me(j.current);
        if ($e.length) {
          ue.preventDefault();
          const ze = ve === "ArrowDown" ? 1 : -1, ht = (ae.secondaryIndex + ze + $e.length) % $e.length;
          Le(ht);
        }
      }
    }
  }, Ee = !!pe && (le === "list" || le === "cards"), tt = X.useMemo(() => P === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : P === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : P === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: P.mobile !== void 0 ? P.mobile : !0,
    tablet: P.tablet || !1,
    desktop: P.desktop || !1
  }, [P]), Ft = oe && W("medium") && !W("xlarge"), xt = oe && W("xlarge"), ut = !!l, qe = le === "three-column", [Ke, xn] = X.useState(!1);
  X.useEffect(() => {
    qe && Ke && xn(!1);
  }, [qe, Ke]), X.useEffect(() => {
    Ke && !qe && (ie("secondary"), ke(2), setTimeout(() => {
      j.current?.focus();
    }, 50));
  }, [Ke, qe]), X.useEffect(() => {
    !Ke && !qe && Q === "secondary" && (ie("content"), ke(1), setTimeout(() => {
      G.current?.focus();
    }, 50));
  }, [Ke, qe, Q]);
  const Ur = !!pe && (Ee && tt.mobile || !Ee && Ft && tt.tablet || !Ee && xt && tt.desktop) || ut && !qe, Pl = `h${Z}`, Gr = pe ? X.createElement(
    Pl,
    {
      style: {
        marginLeft: Ee ? 32 : 0,
        marginRight: Ee ? 32 : 0
      }
    },
    pe.label
  ) : null, Cs = Ee ? "mobile" : Ft ? "tablet" : "desktop", Rl = ut && !qe && !Ke, Vr = Ee && tt.mobile ? /* @__PURE__ */ n.jsx(
    ba,
    {
      element: "button",
      text: f,
      style: { marginRight: 16 },
      onClick: () => en(void 0, void 0)
    }
  ) : void 0, Yr = Rl ? /* @__PURE__ */ n.jsx(
    bi,
    {
      element: "button",
      text: h,
      onClick: () => {
        xn(!0);
      }
    }
  ) : void 0, qr = !qe && Ke ? /* @__PURE__ */ n.jsx(
    ba,
    {
      element: "button",
      text: f,
      style: { marginRight: 16 },
      onClick: () => xn(!1)
    }
  ) : void 0, Hl = X.useMemo(() => {
    if (!Ur || !pe) return null;
    if (te)
      return te({
        item: pe,
        detailActive: Ee,
        context: Cs,
        backLink: Vr,
        defaultHeading: Gr
      });
    const ue = pe && V ? typeof V == "function" ? V(pe) : V : null;
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
            qr || Vr,
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
                  Gr,
                  ue && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: ue })
                ]
              }
            )
          ]
        }
      ),
      Yr && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: Yr })
    ] });
  }, [
    Ur,
    pe,
    te,
    Ee,
    Cs,
    Vr,
    qr,
    Gr,
    Yr,
    V
  ]);
  X.useEffect(() => {
    if (!b) return;
    const ue = le === "three-column";
    let ve = !1;
    const ge = () => {
      ve || (de.selectedId !== Se && de.setSelectedId(Se), de.drilledIn !== ue && de.setDrilledIn(ue));
    };
    if (_ && _ > 0) {
      const Ne = setTimeout(ge, _);
      return () => {
        ve = !0, clearTimeout(Ne);
      };
    } else
      ge();
  }, [b, de, Se, le, _]), X.useEffect(() => {
    if (!b) return;
    const ue = () => {
      const ve = new URLSearchParams(window.location.search), ge = ve.get(S);
      ve.get(m), Te(ge === null ? void 0 : ge);
    };
    return window.addEventListener("popstate", ue), () => window.removeEventListener("popstate", ue);
  }, [
    b,
    S,
    m,
    d,
    l
  ]);
  const Pn = X.useRef(0), bt = X.useRef(
    null
  ), en = X.useCallback(
    (ue, ve) => {
      ue !== Se && (r === void 0 && Te(ue), o?.(ue, ve));
    },
    [r, o, Se]
  );
  X.useEffect(() => {
    if (!T && Ee && G.current) {
      const ue = setTimeout(() => G.current?.focus(), 30);
      return () => clearTimeout(ue);
    }
  }, [Ee, Se, T]);
  const Qe = X.useRef(null), [We, bn] = X.useState(
    () => M === "first" ? 0 : -1
  );
  X.useEffect(() => {
    if (We < 0 || !Qe.current) return;
    const ve = Array.from(
      Qe.current.querySelectorAll("[data-nav-item]")
    )[We];
    if (ve) {
      document.activeElement !== ve && ve.focus(), Pn.current = We;
      const ge = t[We];
      w?.(
        ge ? u(ge) : void 0,
        ge,
        We
      );
    }
  }, [We, t, w, u]);
  const zl = (ue) => {
    const ve = R === "vertical" ? "ArrowDown" : "ArrowRight", ge = R === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (ue.key === "ArrowRight" && R === "vertical") {
      ue.preventDefault(), Ke ? (ie("secondary"), setTimeout(() => {
        j.current?.focus();
      }, 10)) : (ie("content"), setTimeout(() => {
        G.current?.focus();
      }, 10));
      return;
    }
    if (ue.key === ve)
      ue.preventDefault(), bn((Ne) => Math.min(t.length - 1, Ne + 1));
    else if (ue.key === ge)
      ue.preventDefault(), bn((Ne) => Math.max(0, Ne - 1));
    else if (ue.key === "Home")
      ue.preventDefault(), bn(0);
    else if (ue.key === "End")
      ue.preventDefault(), bn(t.length - 1);
    else if (ue.key === "Enter" || ue.key === " ") {
      ue.preventDefault();
      const Ne = t[We];
      Ne && !Ne.disabled && en(u(Ne), Ne);
    } else if (ue.key.length === 1 && /[a-z0-9]/i.test(ue.key)) {
      bt.current || (bt.current = { buffer: "", last: 0 });
      const Ne = Date.now(), Oe = 700, Pe = ue.key.toLowerCase();
      Ne - bt.current.last > Oe ? bt.current.buffer = Pe : bt.current.buffer += Pe, bt.current.last = Ne;
      let He = bt.current.buffer;
      const tn = He.split("").every((ht) => ht === He[0]), Wt = t.map(
        (ht) => String(ht.label || "").toLowerCase()
      );
      let Rn = 0;
      We >= 0 && (Rn = (We + 1) % t.length);
      let $e;
      const ze = (ht, Ns) => {
        const Ts = t.length;
        for (let Zr = 0; Zr < Ts; Zr++) {
          const Jr = (Rn + Zr) % Ts;
          if (!t[Jr].disabled && Wt[Jr].startsWith(ht))
            return Jr;
        }
      };
      tn && He.length > 1 ? $e = ze(He[0]) : ($e = ze(He), $e === void 0 && He.length > 1 && ($e = ze(He[He.length - 1]), $e !== void 0 && bt.current && (bt.current.buffer = He[He.length - 1]))), $e !== void 0 && bn($e);
    }
  }, Ol = X.useMemo(() => {
    if (B && (B === "url" || B === "both") && typeof window < "u") {
      const ve = new URLSearchParams(window.location.search).get(y);
      if (ve === "1") return !0;
      if (ve === "0") return !1;
    }
    if (B && (B === "localStorage" || B === "both") && typeof window < "u")
      try {
        const ue = window.localStorage.getItem(se);
        if (ue === "1") return !0;
        if (ue === "0") return !1;
      } catch {
      }
    return x;
  }, [
    B,
    x,
    se,
    y
  ]), [ft, Wl] = X.useState(Ol);
  X.useEffect(() => {
    E?.(ft);
  }, [ft, E]);
  const Ul = X.useCallback(() => {
    ce && C && Wl((ue) => !ue);
  }, [ce, C]);
  X.useEffect(() => {
    if (B && !(typeof window > "u")) {
      if (B === "localStorage" || B === "both")
        try {
          window.localStorage.setItem(
            se,
            ft ? "1" : "0"
          );
        } catch {
        }
      if (B === "url" || B === "both") {
        const ue = new URLSearchParams(window.location.search);
        ue.set(y, ft ? "1" : "0");
        const ve = `${window.location.pathname}?${ue.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", ve);
      }
    }
  }, [
    ft,
    B,
    se,
    y
  ]);
  const Gl = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Ee ? "nhs-navigation-split-view--detail-active" : "",
    le === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    C && ce && ft ? "nhs-navigation-split-view--nav-collapsed" : "",
    p
  ].filter(Boolean).join(" "), Xr = X.useRef(null);
  X.useEffect(() => {
    if (!L && Xr.current) {
      const ue = pe ? `Selected ${pe.label}` : "Selection cleared";
      Xr.current.textContent = ue;
    }
  }, [pe, L]), X.useEffect(() => {
    !Ee && Se == null && Qe.current && Qe.current.querySelectorAll("[data-nav-item]")[Pn.current]?.focus();
  }, [Ee, Se]);
  const Bt = le === "three-column", [Kr, Vl] = X.useState(!1);
  X.useEffect(() => {
    Bt && !Kr && Vl(!0);
  }, [Bt, Kr]);
  const js = X.useRef(Bt);
  X.useEffect(() => {
    js.current !== Bt && (D?.(Bt), js.current = Bt);
  }, [Bt, D]);
  const Yl = () => {
    if (le === "cards")
      return /* @__PURE__ */ n.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": Se ? String(Se) : void 0,
          children: [
            t.map((ge) => {
              const Ne = u(ge), Oe = Ne === Se;
              return /* @__PURE__ */ n.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": Oe,
                  children: /* @__PURE__ */ n.jsxs(
                    "button",
                    {
                      id: String(Ne),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": Oe || void 0,
                      "data-disabled": ge.disabled || void 0,
                      disabled: ge.disabled,
                      onClick: () => !ge.disabled && en(Ne, ge),
                      children: [
                        ge.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ge.icon }),
                        /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ge.label }),
                        ge.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ge.description }),
                        s?.(ge),
                        ge.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: ge.badge })
                      ]
                    }
                  )
                },
                Ne
              );
            }),
            t.length === 0 && !g && /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                "aria-disabled": "true",
                children: v || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const ue = "nsv-nav-instructions", ve = X.useMemo(() => X.memo(
      ({
        item: ge,
        idx: Ne,
        selected: Oe,
        focused: Pe
      }) => {
        const He = u(ge), tn = ge.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Pe ? 0 : -1,
          onClick: () => {
            Pn.current = Ne, en(He, ge);
          },
          onKeyDown: (Wt) => {
            (Wt.key === "Enter" || Wt.key === " ") && (Wt.preventDefault(), Pn.current = Ne, en(He, ge));
          }
        };
        return /* @__PURE__ */ n.jsxs(
          "li",
          {
            id: String(He),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": Oe,
            "aria-current": Oe ? "true" : void 0,
            "data-selected": Oe || void 0,
            "data-disabled": ge.disabled || void 0,
            ...tn,
            children: [
              ge.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ge.icon }),
              /* @__PURE__ */ n.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ge.label }),
                ge.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ge.description }),
                s?.(ge)
              ] }),
              ge.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: ge.badge })
            ]
          }
        );
      }
    ), [u, en, s]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: Qe,
          className: "nhs-navigation-split-view__list",
          onKeyDown: zl,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": ue,
          "aria-activedescendant": Se ? String(Se) : void 0,
          children: [
            t.map((ge, Ne) => /* @__PURE__ */ n.jsx(
              ve,
              {
                item: ge,
                idx: Ne,
                selected: u(ge) === Se,
                focused: Ne === We || We === -1 && Ne === 0 && M === "first",
                "data-just-selected": u(ge) === J ? "true" : void 0
              },
              u(ge)
            )),
            t.length === 0 && !g && /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__list-item",
                "aria-disabled": "true",
                children: v || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ n.jsx(
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
          children: $
        }
      )
    ] });
  };
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: ne,
      className: Gl,
      "aria-label": N?.rootLabel,
      "data-layout": le,
      onKeyDown: Ve,
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
                  ref: Y,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": N?.navigationLabel || "Items",
                  "data-collapsed": ft || void 0,
                  tabIndex: 0,
                  children: [
                    C && ce && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Ul,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": ft ? ee : H,
                        title: ft ? ee : H,
                        children: ft ? z || /* @__PURE__ */ n.jsx(ah, {}) : U || /* @__PURE__ */ n.jsx(rh, {})
                      }
                    ) }),
                    /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: Yl() }),
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
                  ref: G,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": N?.contentLabel || "Content",
                  "data-has-selection": !!pe || void 0,
                  tabIndex: 0,
                  style: {
                    display: Ke && !qe ? "none" : void 0
                  },
                  children: [
                    Ur && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: Hl }),
                    /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(pe)
                      }
                    )
                  ]
                }
              ),
              le === "three-column" && (!I || Kr) || Ke && !qe ? /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: j,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": N?.secondaryContentLabel || "Secondary",
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
                        Ke && !qe && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ n.jsx(
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
                                  qr,
                                  /* @__PURE__ */ n.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ n.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: pe && typeof pe == "object" && "label" in pe ? pe.label : String(pe) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        pe && A && /* @__PURE__ */ n.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof A == "function" ? A(pe) : A
                          }
                        ),
                        /* @__PURE__ */ n.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(pe) })
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
            children: Bt ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
sh.displayName = "NavigationSplitView";
const vo = (e, t, r, a) => e == null || Number.isNaN(e) ? a : Math.min(r, Math.max(t, e)), oh = ({ item: e, maxLines: t, enableDrilldown: r, onExpand: a, isActive: o, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, d = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, f = Math.floor(e._startFraction) + 2, h = Math.max(1, Math.round(e._spanColumns)), g = r && e.childItems && e.childItems.length > 0, v = (p) => {
    g && (p.preventDefault(), a?.(e));
  }, N = g ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": o || !1,
    onClick: v,
    onKeyDown: (p) => {
      (p.key === "Enter" || p.key === " ") && v(p), p.key === "Escape" && o && v(p);
    }
  } : {};
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: xe("nhsuk-product-roadmap__item", g && "nhsuk-product-roadmap__item--expandable", o && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: d, top: c, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": f,
      "aria-colspan": h,
      ...N,
      children: [
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          g && /* @__PURE__ */ n.jsx("span", { className: xe("nhsuk-product-roadmap__item-expander", o && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, ih = Kl(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: r = 400,
  itemMaxLines: a = 2,
  className: o,
  ariaLabel: s = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: d = "overlay",
  ...c
}) => {
  const [f, h] = Ie(() => /* @__PURE__ */ new Set()), [g, v] = Ie(() => /* @__PURE__ */ new Set()), N = Ae(/* @__PURE__ */ new Set()), p = he((_) => f.has(_), [f]), u = he((_) => {
    h((I) => {
      const k = new Set(I);
      return k.has(_.id) ? (k.delete(_.id), v((C) => {
        const x = new Set(C);
        return x.add(_.id), x;
      }), setTimeout(() => v((C) => {
        const x = new Set(C);
        return x.delete(_.id), x;
      }), 240), l?.(_.id, !1)) : (k.add(_.id), l?.(_.id, !0)), k;
    });
  }, [l]);
  Zl(() => {
    if (d !== "inline" || !i) return;
    const _ = [];
    if (f.forEach((x) => {
      N.current.has(x) || _.push(x);
    }), N.current = new Set(f), !_.length) return;
    const I = typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches, k = _.map((x) => `.nhsuk-product-roadmap__inline-children[data-parent="${x}"] .nhsuk-product-roadmap__inline-child`).join(","), C = Array.from(document.querySelectorAll(k));
    if (C.length) {
      if (I) {
        C.forEach((x) => {
          x.style.opacity = "1", x.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((x) => {
        (x.gsap || x.default || x).to(C, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        C.forEach((x) => {
          x.style.opacity = "1", x.style.transform = "translateY(0)";
        });
      });
    }
  }, [f, d, i]);
  const R = he(() => {
    f.size && h(/* @__PURE__ */ new Set());
  }, [f]), F = xe("nhsuk-product-roadmap", o), D = vo(r, 120, 1200, 400), $ = vo(a, 1, 6, 2), M = De(() => e.map((_) => /* @__PURE__ */ new Date(_ + " 01")), [e]), T = De(() => {
    if (M.length === 0) {
      const k = /* @__PURE__ */ new Date();
      return [k, k];
    }
    const _ = new Date(M[0]), I = Dn.offset(new Date(M[M.length - 1]), 1);
    return [_, I];
  }, [M]), L = De(() => ms().domain(T).range([0, M.length * D]), [T, M.length, D]), w = he((_) => {
    if (_.startDate) {
      const H = new Date(_.startDate), z = new Date(_.endDate ?? _.startDate);
      z < H && z.setTime(H.getTime());
      const U = L(H), B = Dn.offset(new Date(z), 1);
      let se = L(B);
      Number.isFinite(se) || (se = U + D);
      const y = Math.max(D * 0.25, se - U), P = U / D, Z = y / D;
      return { ..._, _pxLeft: U, _pxWidth: y, _startFraction: P, _spanColumns: Z };
    }
    const I = _.date ?? 1, k = _.dateOffset ?? 0, C = _.length ?? 1, x = _.partialLength ?? 1, E = I - 1 + k, ee = C - 1 + x;
    return { ..._, _pxLeft: E * D, _pxWidth: ee * D, _startFraction: E, _spanColumns: ee };
  }, [L, D]), b = De(() => t.map((_) => {
    const k = _.roadmapItems.map((x) => {
      const E = !x.childItems && x.children ? { ...x, childItems: x.children } : { ...x };
      return w(E);
    }).sort((x, E) => x._pxLeft !== E._pxLeft ? x._pxLeft - E._pxLeft : E._pxWidth - x._pxWidth), C = [];
    return k.forEach((x) => {
      const E = x._pxLeft, ee = x._pxLeft + x._pxWidth;
      let H = C.findIndex((z) => z <= E);
      H === -1 && (H = C.length, C.push(0)), C[H] = ee, x.verticalPosition = H + 1;
    }), { ..._, roadmapItems: k, _laneCount: C.length };
  }), [t, w]), S = De(() => b.map((_) => _._laneCount || 1), [b]), m = De(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: F,
      style: { "--column-width": `${D}px`, gridTemplateColumns: m },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": b.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((_, I) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": I + 2, children: _ }, `${_}-${I}`))
        ] }),
        b.map((_, I) => {
          const k = I + 2, C = S[I];
          let x, E = 0, ee = [];
          i && d === "inline" && (ee = _.roadmapItems.filter((B) => p(B.id) && B.childItems && B.childItems.length).map((B) => ({ id: B.id, lane: B.verticalPosition || 1, count: B.childItems.length })).sort((B, se) => B.lane - se.lane), E = ee.reduce((B, se) => B + se.count, 0));
          const H = C + E;
          x = `calc((${H} * var(--roadmap-item-block-height)) + (max(0, ${H} - 1) * var(--roadmap-row-gap)))`;
          const z = {};
          let U = 0;
          return ee.forEach((B) => {
            U += B.count, z[B.lane + 1] = U;
          }), /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": k, children: [
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: _.heading }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: x }, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: _.roadmapItems.map((B, se) => {
              const y = (B.verticalPosition || 1) - 1, P = ee.filter((A) => A.lane - 1 < y).reduce((A, W) => A + W.count, 0), Z = y + P, te = p(B.id), V = g.has(B.id);
              return /* @__PURE__ */ n.jsxs(st.Fragment, { children: [
                /* @__PURE__ */ n.jsx(oh, { item: B, maxLines: $, enableDrilldown: i, onExpand: u, isActive: te, topLaneIndex: Z, laneOffset: P }),
                i && d === "inline" && (te || V) && B.childItems && /* @__PURE__ */ n.jsx("div", { "data-parent": B.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${B.title} child tasks`, children: B.childItems.map((A, W) => {
                  const oe = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let O = B._pxLeft, ce = B._pxWidth;
                  if (A.startDate) {
                    const de = new Date(A.startDate);
                    let be = A.endDate ? new Date(A.endDate) : new Date(de);
                    be < de && (be = new Date(de));
                    const Te = new Date(be);
                    Te.setDate(Te.getDate() + 1);
                    const Se = L(de);
                    let pe = L(Te);
                    (!Number.isFinite(pe) || pe <= Se) && (pe = Se + 6), O = Se, ce = Math.max(6, pe - Se);
                  }
                  const le = Z + 1 + W;
                  return /* @__PURE__ */ n.jsxs(
                    "div",
                    {
                      className: xe("nhsuk-product-roadmap__inline-child", A.status && `nhsuk-product-roadmap__inline-child--status-${A.status}`, !te && V && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${O}px`, width: `${ce}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${le})`, height: oe, opacity: te ? 0 : void 0, transform: te ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: A.title })
                      ]
                    },
                    A.id ?? W
                  );
                }) })
              ] }, B.id ?? se);
            }) }) })
          ] }, `${_.heading}-${I}`);
        }),
        i && d === "overlay" && f.size === 1 && (() => {
          const _ = Array.from(f)[0], I = t.flatMap((k) => k.roadmapItems).find((k) => k.id === _);
          return !I || !I.childItems ? null : /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${I.title} details`, children: [
            /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ n.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: I.title }),
                /* @__PURE__ */ n.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: R, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: I.content }),
              /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: I.childItems.map((k, C) => /* @__PURE__ */ n.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: k.title }),
                k.content && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: k.content })
              ] }, k.id ?? C)) })
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: R, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
ih.displayName = "ProductRoadmap";
function vi(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = vi(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function or() {
  for (var e, t, r = 0, a = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = vi(e)) && (a && (a += " "), a += t);
  return a;
}
function Ze(e) {
  return function() {
    return e;
  };
}
const Na = Math.PI, Ta = 2 * Na, Gt = 1e-6, lh = Ta - Gt;
function _i(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function ch(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return _i;
  const r = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, s = a.length; o < s; ++o)
      this._ += Math.round(arguments[o] * r) / r + a[o];
  };
}
class dh {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? _i : ch(t);
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
  quadraticCurveTo(t, r, a, o) {
    this._append`Q${+t},${+r},${this._x1 = +a},${this._y1 = +o}`;
  }
  bezierCurveTo(t, r, a, o, s, i) {
    this._append`C${+t},${+r},${+a},${+o},${this._x1 = +s},${this._y1 = +i}`;
  }
  arcTo(t, r, a, o, s) {
    if (t = +t, r = +r, a = +a, o = +o, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let i = this._x1, l = this._y1, d = a - t, c = o - r, f = i - t, h = l - r, g = f * f + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (g > Gt) if (!(Math.abs(h * d - c * f) > Gt) || !s)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let v = a - i, N = o - l, p = d * d + c * c, u = v * v + N * N, R = Math.sqrt(p), F = Math.sqrt(g), D = s * Math.tan((Na - Math.acos((p + g - u) / (2 * R * F))) / 2), $ = D / F, M = D / R;
      Math.abs($ - 1) > Gt && this._append`L${t + $ * f},${r + $ * h}`, this._append`A${s},${s},0,0,${+(h * v > f * N)},${this._x1 = t + M * d},${this._y1 = r + M * c}`;
    }
  }
  arc(t, r, a, o, s, i) {
    if (t = +t, r = +r, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(o), d = a * Math.sin(o), c = t + l, f = r + d, h = 1 ^ i, g = i ? o - s : s - o;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > Gt || Math.abs(this._y1 - f) > Gt) && this._append`L${c},${f}`, a && (g < 0 && (g = g % Ta + Ta), g > lh ? this._append`A${a},${a},0,1,${h},${t - l},${r - d}A${a},${a},0,1,${h},${this._x1 = c},${this._y1 = f}` : g > Gt && this._append`A${a},${a},0,${+(g >= Na)},${h},${this._x1 = t + a * Math.cos(s)},${this._y1 = r + a * Math.sin(s)}`);
  }
  rect(t, r, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function wi(e) {
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
  }, () => new dh(t);
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
  var r = Ze(!0), a = null, o = Ci, s = null, i = wi(l);
  e = typeof e == "function" ? e : e === void 0 ? ji : Ze(e), t = typeof t == "function" ? t : t === void 0 ? Ni : Ze(t);
  function l(d) {
    var c, f = (d = Si(d)).length, h, g = !1, v;
    for (a == null && (s = o(v = i())), c = 0; c <= f; ++c)
      !(c < f && r(h = d[c], c, d)) === g && ((g = !g) ? s.lineStart() : s.lineEnd()), g && s.point(+e(h, c, d), +t(h, c, d));
    if (v) return s = null, v + "" || null;
  }
  return l.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Ze(+d), l) : e;
  }, l.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Ze(+d), l) : t;
  }, l.defined = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : Ze(!!d), l) : r;
  }, l.curve = function(d) {
    return arguments.length ? (o = d, a != null && (s = o(a)), l) : o;
  }, l.context = function(d) {
    return arguments.length ? (d == null ? a = s = null : s = o(a = d), l) : a;
  }, l;
}
function $a(e, t, r) {
  var a = null, o = Ze(!0), s = null, i = Ci, l = null, d = wi(c);
  e = typeof e == "function" ? e : e === void 0 ? ji : Ze(+e), t = typeof t == "function" ? t : Ze(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Ni : Ze(+r);
  function c(h) {
    var g, v, N, p = (h = Si(h)).length, u, R = !1, F, D = new Array(p), $ = new Array(p);
    for (s == null && (l = i(F = d())), g = 0; g <= p; ++g) {
      if (!(g < p && o(u = h[g], g, h)) === R)
        if (R = !R)
          v = g, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), N = g - 1; N >= v; --N)
            l.point(D[N], $[N]);
          l.lineEnd(), l.areaEnd();
        }
      R && (D[g] = +e(u, g, h), $[g] = +t(u, g, h), l.point(a ? +a(u, g, h) : D[g], r ? +r(u, g, h) : $[g]));
    }
    if (F) return l = null, F + "" || null;
  }
  function f() {
    return Ti().defined(o).curve(i).context(s);
  }
  return c.x = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Ze(+h), a = null, c) : e;
  }, c.x0 = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Ze(+h), c) : e;
  }, c.x1 = function(h) {
    return arguments.length ? (a = h == null ? null : typeof h == "function" ? h : Ze(+h), c) : a;
  }, c.y = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : Ze(+h), r = null, c) : t;
  }, c.y0 = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : Ze(+h), c) : t;
  }, c.y1 = function(h) {
    return arguments.length ? (r = h == null ? null : typeof h == "function" ? h : Ze(+h), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return f().x(e).y(t);
  }, c.lineY1 = function() {
    return f().x(e).y(r);
  }, c.lineX1 = function() {
    return f().x(a).y(t);
  }, c.defined = function(h) {
    return arguments.length ? (o = typeof h == "function" ? h : Ze(!!h), c) : o;
  }, c.curve = function(h) {
    return arguments.length ? (i = h, s != null && (l = i(s)), c) : i;
  }, c.context = function(h) {
    return arguments.length ? (h == null ? s = l = null : l = i(s = h), c) : s;
  }, c;
}
function _o(e) {
  return e < 0 ? -1 : 1;
}
function wo(e, t, r) {
  var a = e._x1 - e._x0, o = t - e._x1, s = (e._y1 - e._y0) / (a || o < 0 && -0), i = (r - e._y1) / (o || a < 0 && -0), l = (s * o + i * a) / (a + o);
  return (_o(s) + _o(i)) * Math.min(Math.abs(s), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function So(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function ca(e, t, r) {
  var a = e._x0, o = e._y0, s = e._x1, i = e._y1, l = (s - a) / 3;
  e._context.bezierCurveTo(a + l, o + l * t, s - l, i - l * r, s, i);
}
function ir(e) {
  this._context = e;
}
ir.prototype = {
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
          this._point = 3, ca(this, So(this, r = wo(this, e, t)), r);
          break;
        default:
          ca(this, this._t0, r = wo(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
Object.create(ir.prototype).point = function(e, t) {
  ir.prototype.point.call(this, t, e);
};
function lr(e) {
  return new ir(e);
}
function uh(e, t, r) {
  const a = Ho(e, t);
  return ms().domain(a).range(r);
}
function ko(e, t, r) {
  const [a, o] = Ho(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(o)))
    return er().domain([0, 0]).range(r);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const d = o - a, c = (d > 0 ? d : a) * 0.1;
    i = Math.max(0, a - c), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = o ?? 0;
  return er().domain([i, l]).nice().range(r);
}
function Da(e, t, r, a) {
  const o = Ti().x(t).y(r);
  return a?.smooth !== !1 && o.curve(lr), o(e) ?? "";
}
function fh(e = {}) {
  const t = X.useRef(null), r = X.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, o] = X.useState({ width: 0, height: 0 });
  X.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((d) => {
      for (const c of d) {
        const { width: f, height: h } = c.contentRect;
        o({ width: f, height: h });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const s = Math.max(0, a.width - r.left - r.right), i = Math.max(0, a.height - r.top - r.bottom);
  return { width: a.width, height: a.height, innerWidth: s, innerHeight: i, margin: r, ref: t };
}
const $i = X.createContext(null);
function zt() {
  return X.useContext($i);
}
const hh = ({
  height: e = 240,
  margin: t,
  width: r,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: o,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = fh(t), d = { height: e, position: "relative" };
  return r !== void 0 && (d.width = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n.jsx("div", { ref: l.ref, className: a, style: d, role: s, "aria-label": i, children: /* @__PURE__ */ n.jsx($i.Provider, { value: l, children: o }) });
}, xs = X.createContext(null), Qt = () => X.useContext(xs), ph = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  parseX: a,
  children: o,
  xTickCount: s = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: d,
  yPadding: c
}) => {
  const f = zt(), h = t ?? f?.innerWidth ?? 0, g = r ?? f?.innerHeight ?? 0, v = X.useMemo(() => e.flatMap(($) => $.data), [e]), N = X.useCallback(($) => {
    if (a) return a($);
    const M = $.x;
    return M instanceof Date ? M : new Date(M);
  }, [a]), p = d ?? 6, u = c ?? 6, R = X.useMemo(() => uh(v, N, [p, Math.max(0, h - p)]), [v, N, h, p]), F = X.useMemo(() => {
    if (l) {
      const $ = ko([], (M) => M.y, [Math.max(0, g - u), u]);
      return $.domain(l), $;
    }
    return ko(v, ($) => $.y, [Math.max(0, g - u), u]);
  }, [v, g, l]), D = X.useMemo(() => ({
    xScale: R,
    yScale: F,
    getXTicks: ($ = s) => R.ticks($),
    getYTicks: ($ = i) => F.ticks($)
  }), [R, F, s, i]);
  return /* @__PURE__ */ n.jsx(xs.Provider, { value: D, children: o });
}, Co = ({
  type: e,
  scale: t,
  tickCount: r,
  tickValues: a,
  formatTick: o,
  label: s,
  offset: i,
  className: l,
  minLabelSpacing: d,
  maxTickLabelLength: c,
  autoMinLabelSpacing: f = e === "x",
  labelAngle: h = 0,
  allowLabelWrap: g = !0,
  tickFormatPreset: v
}) => {
  const N = Qt(), p = zt(), u = t || (e === "x" ? N?.xScale : N?.yScale), R = r ?? (e === "x" ? 6 : 5), F = typeof o == "function", D = X.useMemo(() => {
    if (F || !v) return;
    const T = (L) => new Intl.DateTimeFormat(void 0, L);
    switch (v) {
      case "dayShortMonth":
        return (L) => {
          const w = L instanceof Date ? L : new Date(L);
          return `${w.getDate()}
${T({ month: "short" }).format(w)}`;
        };
      case "dayShortMonthYear":
        return (L) => {
          const w = L instanceof Date ? L : new Date(L);
          return `${w.getDate()}
${T({ month: "short" }).format(w)} ${w.getFullYear()}`;
        };
      case "shortMonth":
        return (L) => {
          const w = L instanceof Date ? L : new Date(L);
          return T({ month: "short" }).format(w);
        };
      case "shortMonthYear":
        return (L) => {
          const w = L instanceof Date ? L : new Date(L);
          return `${T({ month: "short" }).format(w)} ${w.getFullYear()}`;
        };
      case "hourMinute":
        return (L) => {
          const w = L instanceof Date ? L : new Date(L);
          return T({ hour: "2-digit", minute: "2-digit" }).format(w);
        };
      default:
        return;
    }
  }, [F, v]);
  let $ = F ? o : D || ((T) => String(T));
  const M = X.useMemo(() => a && Array.isArray(a) ? a : u ? typeof u.ticks == "function" ? u.ticks(R) : u.domain ? u.domain() : [] : [], [u, R, a]);
  if (e === "x" && !F && !v && M.length && M.every((T) => T instanceof Date)) {
    const T = M[0], L = M[M.length - 1], w = L.getTime() - T.getTime(), b = 24 * 3600 * 1e3, S = 365 * b, m = T.getFullYear() === L.getFullYear(), _ = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (w < 2 * b) {
      const I = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      $ = (k) => I.format(k);
    } else if (w < 32 * b)
      $ = (I) => {
        const k = I;
        return `${k.getDate()} ${_.format(k)}`;
      };
    else if (w < S && m)
      $ = (I) => _.format(I);
    else if (w < 2 * S) {
      const I = /* @__PURE__ */ new Set();
      $ = (k) => {
        const C = k, x = C.getMonth();
        return I.has(x) || I.add(x), `${_.format(C)} ${C.getFullYear()}`;
      };
    } else
      $ = (I) => String(I.getFullYear());
  }
  if (!u || !p) return null;
  if (e === "x") {
    const T = i ?? p.innerHeight, L = typeof u.bandwidth == "function", w = L ? u.bandwidth() : 0, b = (_) => {
      const I = u(_);
      return L ? I + w / 2 : I;
    };
    let S = d ?? 0;
    if (f && d == null) {
      const _ = M.map((k) => $(k).replace(/\n.*/g, "")), I = _.length ? _.reduce((k, C) => k + C.length, 0) / _.length : 0;
      S = Math.max(12, Math.round(I * 6 + 4));
    }
    const m = X.useMemo(() => {
      if (a && Array.isArray(a) || S <= 0) return M;
      const _ = [];
      let I = -1 / 0;
      for (const k of M) {
        const C = b(k);
        C - I >= S && (_.push(k), I = C);
      }
      return _;
    }, [M, u, S, a, L, w]);
    return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${T})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ n.jsx("line", { x1: 0, x2: p.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      m.map((_, I) => {
        const k = $(_), C = c && k.length > c ? k.slice(0, Math.max(1, c - 1)) + "…" : k, x = g ? C.split(/\n/) : [C.replace(/\n/g, " ")], E = h < 0 ? "end" : h > 0 ? "start" : "middle";
        return /* @__PURE__ */ n.jsxs("g", { transform: `translate(${b(_)},0)`, children: [
          /* @__PURE__ */ n.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ n.jsxs("text", { y: 9, textAnchor: E, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: h ? `rotate(${h})` : void 0, fontFamily: "inherit", children: [
            x.map((ee, H) => /* @__PURE__ */ n.jsx("tspan", { x: 0, dy: H === 0 ? 0 : "1.1em", children: ee }, H)),
            C !== k && /* @__PURE__ */ n.jsx("title", { children: k })
          ] })
        ] }, _?.toString?.() || I);
      })
    ] });
  }
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    M.map((T, L) => {
      const w = $(T), b = c && w.length > c ? w.slice(0, Math.max(1, c - 1)) + "…" : w, S = g ? b.split(/\n/) : [b.replace(/\n/g, " ")];
      return /* @__PURE__ */ n.jsxs("g", { transform: `translate(0,${u(T)})`, children: [
        /* @__PURE__ */ n.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ n.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          S.map((m, _) => /* @__PURE__ */ n.jsx("tspan", { x: -9, dy: _ === 0 ? 0 : "1.1em", children: m }, _)),
          b !== w && /* @__PURE__ */ n.jsx("title", { children: w })
        ] })
      ] }, T?.toString?.() || L);
    }),
    s && /* @__PURE__ */ n.jsx("text", { transform: "rotate(-90)", x: -p.innerHeight / 2, y: -p.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: s })
  ] });
}, mh = ({
  axis: e = "y",
  tickCount: t,
  stroke: r = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: o
}) => {
  const s = Qt(), i = zt();
  if (!s || !i) return null;
  const l = e === "y" ? s.getYTicks(t) : s.getXTicks(t);
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-grid", o].filter(Boolean).join(" "), children: [
    e === "y" && l.map((d, c) => /* @__PURE__ */ n.jsx("line", { x1: 0, x2: i.innerWidth, y1: s.yScale(d), y2: s.yScale(d), stroke: r, strokeDasharray: a }, c)),
    e === "x" && l.map((d, c) => /* @__PURE__ */ n.jsx("line", { y1: 0, y2: i.innerHeight, x1: s.xScale(d), x2: s.xScale(d), stroke: r, strokeDasharray: a }, c))
  ] });
}, gh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, Bn = {
  color: gh
}, xh = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Rr = {
  color: xh
}, bh = [
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
let da = null, ua = null, fa = null, Di = "optimized";
function yh() {
  const e = { color: { ...Rr.color, ...Bn.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    if (typeof i == "string" && /^\{.+\}$/.test(i))
      return t(i.slice(1, -1), o);
    if (typeof i == "string") return i;
  }, r = [];
  try {
    for (let a = 1; a <= 12; a++) {
      const o = `color.data-viz.categorical.${a}`, s = t(o);
      if (!s) throw new Error(`Missing token ${o}`);
      r.push(s);
    }
    return r;
  } catch {
    return bh;
  }
}
function vh() {
  return da || (da = yh()), da;
}
function _h(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function ha(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function wh(e, t, r) {
  const a = ha(e), o = ha(t), s = ha(r), i = a * 0.4124 + o * 0.3576 + s * 0.1805, l = a * 0.2126 + o * 0.7152 + s * 0.0722, d = a * 0.0193 + o * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: d * 100 };
}
function Sh(e, t, r) {
  let i = e / 95.047, l = t / 100, d = r / 108.883;
  const c = (f) => f > 8856e-6 ? Math.cbrt(f) : 7.787 * f + 16 / 116;
  return i = c(i), l = c(l), d = c(d), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - d) };
}
function Ii(e) {
  const t = _h(e);
  if (!t) return null;
  const r = wh(t.r, t.g, t.b);
  return Sh(r.x, r.y, r.z);
}
function jo(e, t) {
  const r = e.L - t.L, a = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(r * r + a * a + o * o);
}
function kh() {
  const e = vh();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Ii(i));
  let r = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let d = 0, c = 0;
    for (let h = 0; h < e.length; h++) i !== h && t[h] && (d += jo(l, t[h]), c++);
    const f = d / Math.max(1, c);
    f > a && (a = f, r = i);
  }
  const o = new Set(e.map((i, l) => l)), s = [];
  for (s.push(r), o.delete(r); o.size; ) {
    let i = Array.from(o)[0], l = -1;
    for (const d of o) {
      const c = t[d];
      if (!c) continue;
      let f = 1 / 0;
      for (const h of s) {
        const g = t[h];
        if (g) {
          const v = jo(c, g);
          v < f && (f = v);
        }
      }
      f > l && (l = f, i = d);
    }
    s.push(i), o.delete(i);
  }
  return s.map((i) => e[i]);
}
function Ch() {
  return ua || (ua = kh()), ua;
}
function jh(e, t, r) {
  const a = (e + 16) / 116, o = t / 500 + a, s = a - r / 200, i = (f) => {
    const h = f * f * f;
    return h > 8856e-6 ? h : (f - 16 / 116) / 7.787;
  }, l = i(o) * 95.047, d = i(a) * 100, c = i(s) * 108.883;
  return { X: l, Y: d, Z: c };
}
function Nh(e, t, r) {
  e /= 100, t /= 100, r /= 100;
  let a = e * 3.2406 + t * -1.5372 + r * -0.4986, o = e * -0.9689 + t * 1.8758 + r * 0.0415, s = e * 0.0557 + t * -0.204 + r * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), o = Math.min(1, Math.max(0, i(o))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(a * 255), g: Math.round(o * 255), b: Math.round(s * 255) };
}
function Th(e, t, r) {
  return `#${[e, t, r].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function $h(e, t) {
  const r = Ii(e);
  if (!r) return e;
  const a = Math.min(100, Math.max(0, r.L + t)), { X: o, Y: s, Z: i } = jh(a, r.a, r.b), l = Nh(o, s, i);
  return Th(l.r, l.g, l.b);
}
function Dh() {
  const e = Ch(), r = [12, -12, 24, -24].map((o) => e.map((s) => $h(s, o))), a = [...e];
  return r.forEach((o) => a.push(...o)), a;
}
function Ih() {
  return (!fa || Mh()) && (fa = Dh(), Mi = Di), fa;
}
let Mi = null;
function Mh() {
  return Mi !== Di;
}
function gt(e) {
  const t = Ih();
  return t[e % t.length];
}
let un = null, In = null, Mn = null, Ln = null;
function Lh() {
  const e = Bn?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    un = [];
    for (let s = 1; s <= 12; s++) {
      const i = t[String(s)]?.$value || t[String(s)]?.value;
      un.push(typeof i == "string" ? i : "#212b32");
    }
    const r = e.region || {};
    In = {}, Object.keys(r).forEach((s) => {
      const i = r[s]?.$value || r[s]?.value;
      typeof i == "string" && (In[s] = i);
    });
    const a = e.severity || {}, o = e["org-level"] || {};
    Ln = {}, Object.keys(o).forEach((s) => {
      const i = o[s]?.$value || o[s]?.value;
      typeof i == "string" && (Ln[s] = i);
    }), Mn = {}, Object.keys(a).forEach((s) => {
      const i = a[s]?.$value || a[s]?.value;
      typeof i == "string" && (Mn[s] = i);
    });
  }
}
function Hr() {
  (!un || !In || !Mn || !Ln) && Lh();
}
function Kt(e) {
  return Hr(), un ? un[e % un.length] : "#212b32";
}
function Ah(e) {
  return Hr(), In ? In[e] : void 0;
}
function cr(e, t) {
  return Ah(e) || Kt(t);
}
const Ia = ["low", "moderate", "high", "critical"];
let pa = null;
function Fh() {
  const e = { color: { ...Rr.color, ...Bn.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, r = {};
  return Ia.forEach((a) => {
    const o = t(`color.data-viz.severity.${a}`);
    o && (r[a] = o);
  }), r;
}
function Li() {
  return pa || (pa = Fh()), pa;
}
function Bh(e) {
  return Li()[e.toLowerCase()];
}
function Eh(e, t) {
  return Bh(e) || Li()[Ia[t % Ia.length]] || gt(t);
}
function Ph(e) {
  return Hr(), Mn ? Mn[e] : void 0;
}
function Rh(e, t) {
  return Ph(e) || Kt(t);
}
const Ma = ["trust", "ambulance", "icb", "region"];
let ma = null;
function Hh() {
  const e = { color: { ...Rr.color, ...Bn.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, r = {};
  return Ma.forEach((a) => {
    const o = t(`color.data-viz.org-level.${a}`);
    o && (r[a] = o);
  }), r;
}
function Ai() {
  return ma || (ma = Hh()), ma;
}
function zh(e) {
  return Ai()[e.toLowerCase()];
}
function Oh(e, t) {
  return zh(e) || Ai()[Ma[t % Ma.length]] || gt(t);
}
function Wh(e) {
  return Hr(), Ln ? Ln[e] : void 0;
}
function Uh(e, t) {
  return Wh(e) || Kt(t);
}
let ga = null;
const Gh = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function Vh(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Yh() {
  const e = { color: { ...Rr.color, ...Bn.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const i = o.split(".").reduce((d, c) => d ? d[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, r = {}, a = [];
  return Gh.forEach((o) => {
    const s = t(`color.data-viz.region.${o}`);
    s ? r[o] = s : a.push(o);
  }), process.env.NODE_ENV !== "production" && (Object.keys(r).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), r;
}
function qh() {
  return ga || (ga = Yh()), ga;
}
function Xh(e) {
  return qh()[Vh(e)];
}
function fn(e, t) {
  return Xh(e) || gt(t);
}
const Fi = X.createContext(null), En = () => X.useContext(Fi), qx = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: r,
  onChange: a
}) => {
  const [o, s] = X.useState(() => new Set(e)), i = r !== void 0, l = X.useMemo(() => i ? new Set(r) : o, [i, r, o]), d = X.useCallback((f) => {
    i || s(new Set(f)), a?.(Array.from(f));
  }, [i, a]), c = X.useMemo(() => ({
    hiddenIds: l,
    isHidden: (f) => l.has(f),
    toggle: (f) => {
      const h = new Set(l);
      h.has(f) ? h.delete(f) : h.add(f), d(h);
    },
    showOnly: (f) => {
      d(/* @__PURE__ */ new Set());
    },
    showAll: () => d(/* @__PURE__ */ new Set()),
    setHidden: (f) => d(new Set(Array.isArray(f) ? f : Array.from(f)))
  }), [l, d]);
  return /* @__PURE__ */ n.jsx(Fi.Provider, { value: c, children: t });
}, Bi = X.createContext(null), Ot = () => X.useContext(Bi), Kh = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: r = !1
}) => {
  const a = Qt(), o = En(), [s, i] = X.useState(null), l = X.useRef(/* @__PURE__ */ new Map()), [d, c] = X.useState([]), f = X.useCallback(
    (L, w) => {
      l.current.set(L, w);
    },
    []
  ), h = X.useCallback((L) => {
    l.current.delete(L);
  }, []), g = X.useCallback(
    (L, w) => {
      if (!a) return;
      const { xScale: b, yScale: S } = a;
      let m = null, _ = 1 / 0;
      l.current.forEach((I, k) => {
        I.forEach((C, x) => {
          const E = b(C.x), ee = S(C.y), H = E - L, z = ee - w, U = Math.sqrt(H * H + z * z);
          U < _ && (_ = U, m = {
            seriesId: k,
            index: x,
            x: C.x,
            y: C.y,
            clientX: E,
            clientY: ee
          });
        });
      }), m && _ <= t ? i(m) : i(null);
    },
    [a, t]
  ), v = X.useCallback(() => i(null), []);
  X.useEffect(() => {
    if (!s) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: L, yScale: w } = a, b = [];
    l.current.forEach((S, m) => {
      S.forEach((_, I) => {
        (s.x instanceof Date && _.x instanceof Date ? _.x.getTime() === s.x.getTime() : _.x === s.x) && b.push({
          seriesId: m,
          index: I,
          x: _.x,
          y: _.y,
          clientX: L(_.x),
          clientY: w(_.y)
        });
      });
    }), b.sort((S, m) => S.seriesId.localeCompare(m.seriesId)), c(b);
  }, [s, a]);
  const N = X.useCallback(
    (L) => {
      if (!s) return;
      const w = l.current.get(s.seriesId);
      if (!w) return;
      let b = s.index + L;
      if (b < 0 || b >= w.length) {
        if (!r) return;
        b = (b + w.length) % w.length;
      }
      const S = w[b];
      if (!a) return;
      const { xScale: m, yScale: _ } = a;
      i({
        seriesId: s.seriesId,
        index: b,
        x: S.x,
        y: S.y,
        clientX: m(S.x),
        clientY: _(S.y)
      });
    },
    [s, a, r]
  ), p = X.useCallback(
    (L) => {
      let w = Array.from(l.current.keys());
      if (o && (w = w.filter((E) => !o.isHidden(E))), w.length === 0) return;
      if (!s) {
        const E = w[0], ee = l.current.get(E);
        if (!ee || !a) return;
        const { xScale: H, yScale: z } = a, U = ee[0];
        i({
          seriesId: E,
          index: 0,
          x: U.x,
          y: U.y,
          clientX: H(U.x),
          clientY: z(U.y)
        });
        return;
      }
      const b = w.indexOf(s.seriesId);
      if (b === -1) return;
      let S = b + L;
      if (S < 0 || S >= w.length) {
        if (!r) return;
        S = (S + w.length) % w.length;
      }
      const m = w[S], _ = l.current.get(m);
      if (!_ || !a) return;
      const I = Math.min(s.index, _.length - 1), k = _[I], { xScale: C, yScale: x } = a;
      i({
        seriesId: m,
        index: I,
        x: k.x,
        y: k.y,
        clientX: C(k.x),
        clientY: x(k.y)
      });
    },
    [s, a, r, o]
  ), u = X.useCallback(() => {
    let L = Array.from(l.current.keys());
    if (o && (L = L.filter((I) => !o.isHidden(I))), L.length === 0) return;
    const w = s ? s.seriesId : L[0], b = l.current.get(w);
    if (!b || b.length === 0 || !a) return;
    const S = b[0], { xScale: m, yScale: _ } = a;
    i({
      seriesId: w,
      index: 0,
      x: S.x,
      y: S.y,
      clientX: m(S.x),
      clientY: _(S.y)
    });
  }, [s, a, o]), R = X.useCallback(() => {
    let L = Array.from(l.current.keys());
    if (o && (L = L.filter((k) => !o.isHidden(k))), L.length === 0) return;
    const w = s ? s.seriesId : L[0], b = l.current.get(w);
    if (!b || b.length === 0 || !a) return;
    const S = b.length - 1, m = b[S], { xScale: _, yScale: I } = a;
    i({
      seriesId: w,
      index: S,
      x: m.x,
      y: m.y,
      clientX: _(m.x),
      clientY: I(m.y)
    });
  }, [s, a, o]), F = X.useCallback(
    () => N(1),
    [N]
  ), D = X.useCallback(
    () => N(-1),
    [N]
  ), $ = X.useCallback(
    () => p(1),
    [p]
  ), M = X.useCallback(
    () => p(-1),
    [p]
  ), T = X.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: d,
      focusNearest: g,
      clear: v,
      registerSeries: f,
      unregisterSeries: h,
      focusNextPoint: F,
      focusPrevPoint: D,
      focusNextSeries: $,
      focusPrevSeries: M,
      focusFirstPoint: u,
      focusLastPoint: R
    }),
    [
      s,
      d,
      g,
      v,
      f,
      h,
      F,
      D,
      $,
      M,
      u,
      R
    ]
  );
  return /* @__PURE__ */ n.jsx(Bi.Provider, { value: T, children: e });
}, Zh = ({
  series: e,
  seriesIndex: t,
  palette: r,
  showPoints: a,
  focusablePoints: o,
  focusIndex: s,
  parseX: i,
  visibilityMode: l = "remove",
  strokeWidth: d = 1,
  smooth: c = !0,
  gradientFillId: f,
  colors: h
}) => {
  const g = Qt();
  if (!g) return null;
  const { xScale: v, yScale: N } = g, u = En()?.isHidden(e.id) ?? !1, R = u && l === "fade";
  if (u && l === "remove")
    return null;
  const F = Ot();
  X.useEffect(() => {
    if (!F) return;
    const w = e.data.map((b) => ({ x: i(b), y: b.y }));
    return F.registerSeries(e.id, w), () => F.unregisterSeries(e.id);
  }, [F, e.id, e.data, i]);
  const D = X.useMemo(
    () => Da(
      e.data,
      (w) => v(i(w)),
      (w) => N(w.y),
      { smooth: c }
    ),
    [e.data, v, N, i, c]
  ), $ = X.useMemo(() => {
    if (!e.data.length) return "";
    const [w] = N.domain(), b = $a().x((S) => v(i(S))).y0(() => N(w)).y1((S) => N(S.y));
    return c && b.curve(lr), b(e.data) || "";
  }, [e.data, v, N, i, c]), M = h && h[t], T = e.color || M || (r === "region" ? fn(e.id, t) : gt(t)), L = r === "region" ? cr(e.id, t) : Kt(t);
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: R ? 0.25 : 1,
      "aria-hidden": R ? !0 : void 0,
      children: [
        f && /* @__PURE__ */ n.jsx(
          "path",
          {
            d: $,
            fill: `url(#${f})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            d: D,
            fill: "none",
            stroke: T,
            strokeWidth: d,
            role: "presentation"
          }
        ),
        a && e.data.map((w, b) => {
          const S = v(i(w)), m = N(w.y), _ = o ? 0 : -1, I = !R && (o && b === s || F?.focused?.seriesId === e.id && F.focused.index === b), k = () => {
            F && !R && F.setFocused({
              seriesId: e.id,
              index: b,
              x: i(w),
              y: w.y,
              clientX: S,
              clientY: m
            });
          }, C = () => {
            F && F.focused?.seriesId === e.id && F.focused.index === b && F.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: S,
              cy: m,
              r: I ? 5 : 3.5,
              stroke: I ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : L,
              strokeWidth: I ? 2 : 1,
              fill: I ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : T,
              className: "fdp-line-point",
              tabIndex: R ? -1 : _,
              "aria-label": `${e.label || e.id} ${i(w).toDateString()} value ${w.y}`,
              "data-series": e.id,
              "data-index": b,
              onMouseEnter: k,
              onFocus: k,
              onMouseLeave: C,
              onBlur: C
            },
            b
          );
        })
      ]
    }
  );
}, Jh = ({ polite: e = !0, format: t }) => {
  const r = Ot(), [a, o] = X.useState(""), s = X.useRef("");
  return X.useEffect(() => {
    if (!r?.focused) return;
    const { focused: i, aggregated: l } = r;
    let d;
    if (l && l.length > 1) {
      const c = l.map((h) => `${h.seriesId} ${h.y}`).join("; ");
      d = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      d = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : Qh(i.seriesId, i.x, i.y, i.index);
    if (d !== s.current) {
      s.current = d, o("");
      const c = setTimeout(() => o(d), 10);
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
function Qh(e, t, r, a) {
  const o = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${o}, value ${r}`;
}
const Xx = () => {
  const e = Ot(), t = zt();
  if (!e || !t || !e.focused) return null;
  const { focused: r, aggregated: a } = e, { innerWidth: o, innerHeight: s } = t, i = Math.min(Math.max(r.clientX, 0), o), l = Math.min(Math.max(r.clientY, 0), s), d = i + 8, c = l - 8, f = a.length > 1, h = r.x instanceof Date ? r.x.toDateString() : String(r.x), g = f ? h : `${h} • ${r.y}`, v = /\d+$/.exec(r.seriesId || ""), N = v ? parseInt(v[0], 10) - 1 : 0, p = gt(N >= 0 ? N : 0) || "#005eb8", u = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ n.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: u, strokeWidth: 3 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: u, strokeWidth: 1.5 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 2.5, fill: p, stroke: "#fff", strokeWidth: 0.5 }),
    f ? (() => {
      const F = a.map((L) => `${L.seriesId}: ${L.y}`), D = [g, ...F], $ = D.reduce((L, w) => Math.max(L, w.length), 0), M = Math.max(90, $ * 6.2 + 16), T = 16 * D.length + 8;
      return /* @__PURE__ */ n.jsxs("g", { children: [
        /* @__PURE__ */ n.jsx("rect", { x: d, y: c - T, rx: 4, ry: 4, width: M, height: T, fill: "#212b32", opacity: 0.92 }),
        D.map((L, w) => /* @__PURE__ */ n.jsx("text", { x: d + 8, y: c - T + 6 + 16 * (w + 0.7), fill: "#fff", fontSize: 12, children: L }, w))
      ] });
    })() : /* @__PURE__ */ n.jsxs("g", { children: [
      /* @__PURE__ */ n.jsx("rect", { x: d, y: c - 24, rx: 4, ry: 4, width: Math.max(60, g.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ n.jsx("text", { x: d + 8, y: c - 8, fill: "#fff", fontSize: 12, children: g })
    ] })
  ] });
}, Kx = ({
  items: e,
  palette: t = "categorical",
  direction: r = "row",
  interactive: a = !1,
  adjustStrokeForWhiteBackground: o = !0,
  hiddenIds: s,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: d
}) => {
  const c = En(), f = !!(c && !a && !l && s === void 0), h = a || f, g = e || [], v = s !== void 0, [N, p] = X.useState(new Set(i)), u = v ? new Set(s) : N, [R, F] = X.useState(""), D = ($) => {
    if (f && c) {
      const _ = c.isHidden($);
      c.toggle($);
      const k = g.find((x) => x.id === $)?.label || $, C = d ? d($, _, k) : `${k} ${_ ? "shown" : "hidden"}`;
      F(C);
      return;
    }
    if (!h) return;
    const M = new Set(u), T = M.has($);
    T ? M.delete($) : M.add($), v || p(M);
    const L = g.filter((_) => !M.has(_.id)).map((_) => _.id), w = Array.from(M);
    l?.(L, w);
    const S = g.find((_) => _.id === $)?.label || $, m = d ? d($, T, S) : `${S} ${T ? "shown" : "hidden"}`;
    F(m);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ n.jsx("ul", { className: `fdp-legend fdp-legend--${r}`, children: g.map(($, M) => {
      const T = $.palette || t, L = $.color || (T === "region" ? fn($.id, M) : T === "severity" ? Eh($.id, M) : T === "org-level" ? Oh($.id, M) : gt(M));
      let w = $.stroke || (T === "region" ? cr($.id, M) : T === "severity" ? Rh($.id, M) : T === "org-level" ? Uh($.id, M) : Kt(M));
      if (o && w) {
        const m = w.trim().toLowerCase();
        (m === "#fff" || m === "#ffffff" || m === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(m)) && (w = "#212b32");
      }
      const b = f && c ? c.isHidden($.id) : u.has($.id), S = h ? {
        "aria-pressed": !b,
        "aria-label": `${$.label} (${b ? "show" : "hide"})`,
        onClick: () => D($.id)
      } : { "aria-label": $.label };
      return /* @__PURE__ */ n.jsxs("li", { className: `fdp-legend__item${b ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: L,
              backgroundImage: $.patternDataUrl ? `url(${$.patternDataUrl})` : void 0,
              backgroundSize: $.patternDataUrl ? "auto" : void 0,
              borderColor: w
            },
            ...S
          }
        ),
        /* @__PURE__ */ n.jsx("span", { className: "fdp-legend__label", children: $.label })
      ] }, $.id);
    }) }),
    h && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: R })
  ] });
}, Zx = ({
  series: e,
  seriesIndex: t,
  palette: r,
  parseX: a,
  areaOnly: o = !1,
  visibilityMode: s = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: d,
  gradientFill: c = !0,
  colors: f
}) => {
  const h = Qt();
  if (!h) return null;
  const { xScale: g, yScale: v } = h, p = En()?.isHidden(e.id) ?? !1, u = p && s === "fade";
  if (p && s === "remove") return null;
  const R = Ot();
  X.useEffect(() => {
    if (!R) return;
    const L = e.data.map((w) => ({ x: a(w), y: w.y }));
    return R.registerSeries(e.id, L), () => R.unregisterSeries(e.id);
  }, [R, e.id, e.data, a]);
  const F = f && f[t], D = e.color || F || (r === "region" ? fn(e.id, t) : gt(t)), $ = X.useMemo(() => d && d.length === e.data.length ? Da(
    e.data,
    (L) => g(a(L)),
    (L) => {
      const w = e.data.indexOf(L);
      return v(d[w].y1);
    },
    { smooth: l }
  ) : Da(
    e.data,
    (L) => g(a(L)),
    (L) => v(L.y),
    { smooth: l }
  ), [e.data, d, g, v, a, l]), M = X.useMemo(() => {
    if (d && d.length === e.data.length) {
      const m = $a().x((_) => g(a(_))).y0((_, I) => v(d[I].y0)).y1((_, I) => v(d[I].y1));
      return l && m.curve(lr), m(e.data) || "";
    }
    const [L, w] = v.domain();
    let b = i;
    b < L ? b = L : b > w && (b = w);
    const S = $a().x((m) => g(a(m))).y0(() => v(b)).y1((m) => v(m.y));
    return l && S.curve(lr), S(e.data) || "";
  }, [e.data, d, g, v, a, i, l]), T = X.useId();
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: u ? 0.25 : 1,
      "aria-hidden": u ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs("linearGradient", { id: T, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: D, stopOpacity: 0.25 }),
          /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: D, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: M,
            fill: c ? `url(#${T})` : D,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !o && /* @__PURE__ */ n.jsx("path", { d: $, fill: "none", stroke: D, strokeWidth: 1 })
      ]
    }
  );
}, Jx = ({
  series: e,
  seriesIndex: t,
  seriesCount: r,
  palette: a,
  parseX: o,
  focusable: s = !0,
  widthFactor: i = 0.8,
  groupGap: l = 2,
  barWidth: d,
  adaptive: c = !1,
  adaptiveGroupOccupancy: f = 0.9,
  visibilityMode: h = "remove",
  colorMode: g = "series",
  allSeries: v,
  stacked: N,
  gapRatio: p = 0.15,
  minBarWidth: u,
  gradientFill: R = !0,
  gradientStrokeMatch: F = !0,
  opacity: D = 1,
  fadedOpacity: $ = 0.25,
  flatFillOpacity: M = 1,
  colors: T
}) => {
  const L = Math.max(0, p), w = Qt(), b = zt();
  if (!w || !b) return null;
  const { xScale: S, yScale: m } = w, I = En()?.isHidden(e.id) ?? !1, k = I && h === "fade";
  if (I && h === "remove") return null;
  const C = Ot();
  X.useEffect(() => {
    if (!C) return;
    const A = e.data.map((W) => ({ x: o(W), y: W.y }));
    return C.registerSeries(e.id, A), () => C.unregisterSeries(e.id);
  }, [C, e.id, e.data, o]);
  const x = typeof S.bandwidth == "function", E = x ? S.bandwidth() : void 0, ee = X.useMemo(() => {
    if (E != null) return E;
    const A = v && v.length ? v : [e], W = [];
    A.forEach((re) => {
      re.data.forEach((le) => {
        const de = S(o(le));
        Number.isFinite(de) && W.push(de);
      });
    });
    const oe = W.sort((re, le) => re - le);
    if (oe.length <= 1) return 40;
    const O = [];
    for (let re = 1; re < oe.length; re++)
      O.push(oe[re] - oe[re - 1]);
    return O.sort((re, le) => re - le), (O[Math.floor(O.length / 2)] || 40) * i;
  }, [e.data, v, S, o, i, E]), { basePerBar: H } = X.useMemo(() => {
    if (x) {
      const oe = ee, O = Math.max(
        1,
        (oe - l * (r - 1)) / r
      ), ce = e.barWidth ?? d;
      let re = ce ? Math.min(ce, oe) : O;
      if (c) {
        const le = oe * Math.min(1, Math.max(0.05, f)), de = Math.max(
          1,
          (le - l * (r - 1)) / r
        );
        re = ce ? Math.min(re, de) : de;
      }
      return { basePerBar: re };
    }
    const A = e.barWidth ?? d, W = Math.max(
      1,
      (ee - l * (r - 1)) / r
    );
    if (c) {
      const oe = v && v.length ? v : [e], O = [];
      oe.forEach(
        (Te) => Te.data.forEach((Se) => {
          const pe = S(o(Se));
          Number.isFinite(pe) && O.push(pe);
        })
      ), O.sort((Te, Se) => Te - Se);
      const ce = [];
      for (let Te = 1; Te < O.length; Te++)
        ce.push(O[Te] - O[Te - 1]);
      ce.sort((Te, Se) => Te - Se);
      const le = (ce[Math.floor(ce.length / 2)] || ee) * Math.min(1, Math.max(0.05, f)), de = Math.max(
        1,
        (le - l * (r - 1)) / r
      );
      return { basePerBar: A ? Math.min(A, de) : de };
    }
    return A ? { basePerBar: Math.min(A, W) } : { basePerBar: W };
  }, [
    x,
    ee,
    l,
    r,
    d,
    e.barWidth,
    c,
    f,
    v,
    S,
    o
  ]), z = X.useMemo(() => {
    if (x) return [];
    const A = [];
    return (v && v.length ? v : [e]).forEach(
      (oe) => oe.data.forEach((O) => {
        const ce = S(o(O));
        Number.isFinite(ce) && A.push(ce);
      })
    ), A.sort((oe, O) => oe - O), Array.from(new Set(A));
  }, [x, v, e, S, o]), U = X.useMemo(() => {
    if (x)
      return [];
    if (!z.length) return [];
    if (z.length === 1)
      return [
        { center: z[0], left: 0, right: b.innerWidth }
      ];
    const A = [];
    for (let W = 0; W < z.length; W++) {
      const oe = z[W], O = W === 0 ? 0 : (z[W - 1] + oe) / 2, ce = W === z.length - 1 ? b.innerWidth : (oe + z[W + 1]) / 2;
      A.push({
        center: oe,
        left: Math.max(0, O),
        right: Math.min(b.innerWidth, ce)
      });
    }
    return A;
  }, [x, z, b.innerWidth]), B = X.useMemo(() => {
    if (x || !U.length)
      return;
    const A = Math.min(1, Math.max(0.05, i)), W = U.map((le) => Math.max(2, le.right - le.left)), oe = W.map(
      (le) => Math.max(2, Math.min(le - 1, le * A))
    );
    let O = Math.min(...oe);
    if (u)
      if (r <= 1) {
        const le = Math.min(...W.map((de) => de - 1));
        le >= u && O < u && (O = Math.min(le, u));
      } else {
        const le = Math.min(...W.map((be) => be - 1)), de = u * r + (r - 1) * (u * L);
        de <= le && O < de && (O = de);
      }
    if (r <= 1)
      return u && O < u && W.every((de) => de >= u) ? { groupWidth: u, barWidth: u } : { groupWidth: O, barWidth: O };
    let ce = O / (r + (r - 1) * L);
    return ce < 1 && (ce = 1), u && ce < u && u * r + (r - 1) * (u * L) <= O && (ce = u), { groupWidth: ce * r + (r - 1) * (ce * L), barWidth: ce };
  }, [
    x,
    U,
    i,
    r,
    L,
    u
  ]), se = T && T[t] ? T[t] : void 0, y = e.color || se || (a === "region" ? fn(e.id, t) : gt(t)), P = a === "region" ? cr(e.id, t) : Kt(t), Z = F && (e.color || se) ? y : P, te = Number.isFinite(m(0)) ? m(0) : m.range()[0], V = X.useId();
  return N && N.length === e.data.length ? /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: k ? $ : D,
      "aria-hidden": k ? !0 : void 0,
      children: [
        R && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs(
          "linearGradient",
          {
            id: V,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: y, stopOpacity: 0.3 }),
              /* @__PURE__ */ n.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: y,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ n.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: y,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((A, W) => {
          const oe = o(A), O = S(x ? A.x : oe);
          let ce, re;
          if (x)
            ce = ee, re = O;
          else {
            const ne = U.find(
              (G) => Math.abs(G.center - O) < 0.5
            );
            if (!ne || !B)
              ce = H, re = O - H / 2;
            else {
              const { groupWidth: G } = B;
              ce = G;
              let j = O - G / 2;
              j < ne.left && (j = ne.left), j + G > ne.right && (j = Math.max(ne.left, ne.right - G)), re = j;
            }
          }
          const le = N[W], de = m(le.y0), be = m(le.y1), Te = Math.min(de, be), Se = Math.abs(be - de) || 1;
          if (!x && u && ce < u) {
            const ne = U.find(
              (G) => Math.abs(G.center - O) < 0.5
            );
            if (ne) {
              const G = Math.max(2, ne.right - ne.left - 1), j = Math.min(G, u);
              j > ce && (ce = j, re = Math.max(
                ne.left,
                Math.min(ne.right - ce, O - ce / 2)
              ));
            }
          }
          const pe = !k && C?.focused?.seriesId === e.id && C.focused.index === W, J = () => {
            !C || k || C.setFocused({
              seriesId: e.id,
              index: W,
              x: oe,
              y: le.y1 - le.y0,
              clientX: re + ce / 2,
              clientY: Te
            });
          }, K = () => {
            C?.focused?.seriesId === e.id && C.focused.index === W && C.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: re,
              y: Te,
              width: ce,
              height: Se,
              fill: R ? `url(#${V})` : y,
              ...R ? {} : { fillOpacity: M },
              stroke: pe ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : R && F ? y : void 0,
              strokeWidth: pe ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: k || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${oe instanceof Date ? oe.toDateString() : oe} value ${le.y1 - le.y0}`,
              onMouseEnter: J,
              onFocus: J,
              onMouseLeave: K,
              onBlur: K
            },
            W
          );
        })
      ]
    }
  ) : /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: k ? $ : D,
      "aria-hidden": k ? !0 : void 0,
      children: [
        R && /* @__PURE__ */ n.jsxs("defs", { children: [
          g === "series" && /* @__PURE__ */ n.jsxs(
            "linearGradient",
            {
              id: V,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: y, stopOpacity: 0.3 }),
                /* @__PURE__ */ n.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: y,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: y,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          g === "category" && e.data.map((A, W) => {
            const O = T && T[W] || (a === "region" ? fn(String(A.x), W) : gt(W)), ce = `${V}-${W}`;
            return /* @__PURE__ */ n.jsxs(
              "linearGradient",
              {
                id: ce,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: O, stopOpacity: 0.3 }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "60%", stopColor: O, stopOpacity: 0.14 }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: O, stopOpacity: 0.06 })
                ]
              },
              ce
            );
          })
        ] }),
        e.data.map((A, W) => {
          const oe = o(A), O = S(x ? A.x : oe);
          let ce, re;
          if (x) {
            const ae = ee;
            if (r <= 1)
              re = ae, ce = O;
            else {
              re = Math.max(
                1,
                ae / (r + (r - 1) * L)
              );
              const q = re * L, Q = re * r + q * (r - 1);
              ce = O + (ae - Q) / 2 + t * (re + q);
            }
          } else {
            const ae = U.find((q) => q.center === O);
            if (!ae || !B)
              re = H, ce = O - H / 2, u && re < u && (re = u, ce = O - re / 2);
            else {
              const { barWidth: q } = B;
              re = q;
              const Q = r > 1 ? q * L : 0, ie = re * r + Q * (r - 1);
              let _e = O - ie / 2;
              _e < ae.left && (_e = ae.left), _e + ie > ae.right && (_e = Math.max(ae.left, ae.right - ie)), ce = _e + t * (re + Q);
            }
            if (u && re < u) {
              const q = U.find(
                (Q) => Math.abs(Q.center - O) < 0.5
              );
              if (q) {
                const Q = Math.max(2, q.right - q.left - 1), ie = Math.min(Q, u);
                if (ie > re)
                  if (r <= 1)
                    re = ie, ce = Math.max(
                      q.left,
                      Math.min(q.right - re, O - re / 2)
                    );
                  else {
                    const _e = ie * L, ke = ie * r + _e * (r - 1);
                    if (ke <= q.right - q.left - 1) {
                      re = ie;
                      const ye = ke;
                      let Ce = O - ye / 2;
                      Ce < q.left && (Ce = q.left), Ce + ye > q.right && (Ce = Math.max(
                        q.left,
                        q.right - ye
                      )), ce = Ce + t * (re + _e);
                    }
                  }
              }
            }
          }
          const le = ce + re / 2, de = m(A.y), be = Math.min(te, de), Te = Math.abs(te - de), Se = !k && C?.focused?.seriesId === e.id && C.focused.index === W, pe = () => {
            !C || k || C.setFocused({
              seriesId: e.id,
              index: W,
              x: oe,
              y: A.y,
              clientX: le,
              clientY: de
            });
          }, J = () => {
            C?.focused?.seriesId === e.id && C.focused.index === W && C.clear();
          }, K = g === "category" && T ? T[W] : void 0, ne = g === "category" ? K || (a === "region" ? fn(String(A.x), W) : gt(W)) : y, G = g === "category" ? `${V}-${W}` : V, j = R && F ? ne : g === "category" ? a === "region" ? cr(String(A.x), W) : Kt(W) : Z, Y = Se ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : j || ne;
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: ce,
              y: be,
              width: re,
              height: Te || 1,
              fill: R ? `url(#${G})` : ne,
              ...R ? {} : { fillOpacity: M },
              stroke: Y,
              strokeWidth: Se ? 2 : 1,
              className: "fdp-bar",
              tabIndex: k || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${oe instanceof Date ? oe.toDateString() : oe} value ${A.y}`,
              onMouseEnter: pe,
              onFocus: pe,
              onMouseLeave: J,
              onBlur: J
            },
            W
          );
        })
      ]
    }
  );
}, Qx = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  paddingInner: a = 0.1,
  paddingOuter: o = 0.05,
  children: s,
  yTickCount: i = 5
}) => {
  const l = zt(), d = t ?? l?.innerWidth ?? 0, c = r ?? l?.innerHeight ?? 0, f = X.useMemo(() => e.flatMap((u) => u.data), [e]), h = X.useMemo(() => {
    const u = /* @__PURE__ */ new Set();
    return f.forEach((R) => u.add(R.x)), Array.from(u);
  }, [f]), g = X.useMemo(
    () => Math.max(0, ...f.map((u) => u.y)),
    [f]
  ), v = X.useMemo(
    () => Oo().domain(h).range([0, d]).paddingInner(a).paddingOuter(o),
    [h, d, a, o]
  ), N = X.useMemo(
    () => er().domain([0, g]).nice().range([c, 0]),
    [g, c]
  ), p = X.useMemo(
    () => ({
      xScale: v,
      yScale: N,
      getXTicks: () => h,
      getYTicks: (u = i) => N.ticks(u)
    }),
    [v, N, h, i]
  );
  return /* @__PURE__ */ n.jsx(xs.Provider, { value: p, children: s });
}, eb = ({
  title: e,
  description: t,
  source: r,
  table: a,
  className: o,
  id: s,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const d = X.useId(), c = s || d, f = t ? `${c}-desc` : void 0, h = r ? `${c}-src` : void 0, g = typeof window < "u" && !l;
  return /* @__PURE__ */ n.jsxs(
    "figure",
    {
      id: c,
      className: or("fdp-chart fdp-chart--noscript", o),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": or(f, h),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ n.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ n.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ n.jsx("p", { id: f, className: "fdp-chart__description", children: t }),
        !g && /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ n.jsx("noscript", { children: /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ n.jsx(dt, { ...a }) }) }),
          /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ n.jsx(dt, { ...a }) })
        ] }),
        r && /* @__PURE__ */ n.jsx("figcaption", { className: "fdp-chart__caption", children: r && /* @__PURE__ */ n.jsxs("small", { id: h, className: "fdp-chart__source", children: [
          "Source: ",
          r
        ] }) })
      ]
    }
  );
}, tb = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: r = 0, children: a }) => {
  const o = X.useRef(null);
  return X.useEffect(() => {
    const s = o.current;
    if (!s) return;
    const i = () => {
      const l = Array.from(s.querySelectorAll(e));
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
  }, [e, t, r]), /* @__PURE__ */ n.jsx("div", { ref: o, children: a });
}, nb = ({
  label: e,
  value: t,
  unit: r,
  delta: a,
  status: o = "neutral",
  variant: s = "default",
  subtitle: i,
  metadata: l,
  trendData: d,
  loading: c = !1,
  error: f,
  valueFormatter: h,
  className: g,
  id: v,
  announceDelta: N = !0
}) => {
  const p = X.useId(), u = v || p, R = `${u}-label`, F = `${u}-value`, D = `${u}-delta`, $ = typeof t == "number" && !Number.isNaN(t), M = c ? "—" : f ? "" : $ ? h ? h(t) : t.toLocaleString() : t;
  let T, L = "", w = "";
  if (a && !c && !f) {
    T = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const b = Math.abs(a.value), S = T === "up" ? `+${b}` : T === "down" ? `-${b}` : "0", m = a.isPercent ? "%" : "";
    if (L = `${S}${m}`, a.ariaLabel)
      w = a.ariaLabel;
    else {
      const _ = a.invert ? T === "down" : T === "up";
      w = `${T === "neutral" ? "no change" : T === "up" ? "up" : "down"} ${b}${m}${T === "neutral" ? "" : _ ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: or(
        "fdp-metric-card",
        s && `fdp-metric-card--${s}`,
        o && `fdp-metric-card--status-${o}`,
        c && "fdp-metric-card--loading",
        f && "fdp-metric-card--error",
        g
      ),
      role: "group",
      "aria-labelledby": R,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ n.jsx("h3", { id: R, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ n.jsx("div", { id: F, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : f ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: f }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__number", children: M }),
              r && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__unit", children: r })
            ] }) }),
            i && !c && !f && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !f && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ n.jsxs(
            "div",
            {
              id: D,
              "aria-label": w,
              className: or(
                "fdp-metric-card__delta",
                T && `fdp-metric-card__delta--${T}`
              ),
              children: [
                /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-value", children: L }),
                a.period && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          d && d.length > 0 && !c && !f && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        N && a && !a.ariaLabel && !c && !f && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: w })
      ] })
    }
  );
};
var sn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(sn || {});
function ep(e) {
  const t = [], r = [], a = (o, s) => {
    o.push({ id: s, rank: rp[s] });
  };
  return e.specialCauseSinglePointAbove && a(t, yt.SinglePoint), e.specialCauseSinglePointBelow && a(r, yt.SinglePoint), e.specialCauseTwoOfThreeAbove && a(t, yt.TwoSigma), e.specialCauseTwoOfThreeBelow && a(r, yt.TwoSigma), e.specialCauseShiftHigh && a(t, yt.Shift), e.specialCauseShiftLow && a(r, yt.Shift), e.specialCauseTrendIncreasing && a(t, yt.Trend), e.specialCauseTrendDecreasing && a(r, yt.Trend), { high: t, low: r };
}
function tp(e, t) {
  const { high: r, low: a } = ep(e), o = r.reduce((N, p) => Math.max(N, p.rank), 0), s = a.reduce((N, p) => Math.max(N, p.rank), 0);
  let i;
  o > s ? i = "Upwards" : s > o ? i = "Downwards" : i = "Same";
  const l = o > 0, d = s > 0, c = t === Ye.Up && l || t === Ye.Down && d ? e.value : null, f = t === Ye.Up && d || t === Ye.Down && l ? e.value : null;
  e.sqlOriginalImprovementValue = c, e.sqlOriginalConcernValue = f, c !== null && f !== null && (e.sqlPruned = !0, i === "Upwards" ? t === Ye.Up || t === Ye.Down && (e.sqlOriginalImprovementValue = null) : i === "Downwards" ? t === Ye.Up ? e.sqlOriginalImprovementValue = null : Ye.Down : c !== null ? e.sqlOriginalConcernValue = null : f !== null && (e.sqlOriginalImprovementValue = null)), e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = Re.Improvement : !e.sqlOriginalImprovementValue && e.sqlOriginalConcernValue ? e.variationIcon = Re.Concern : !e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = Re.Neither : e.variationIcon = Re.Improvement, e.primeDirection = i, e.primeRank = Math.max(o, s) || void 0;
  const v = ((e.variationIcon === Re.Concern ? t === Ye.Up ? on.Down : on.Up : t === Ye.Up ? on.Up : on.Down) === on.Up ? r : a).reduce(
    (N, p) => !N || p.rank > N.rank ? p : N,
    void 0
  );
  v && (e.primeRuleId = v.id);
}
function np(e) {
  const {
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: o = {},
    disableTrendSideGating: s
  } = e, i = ys({
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: {
      ...o,
      trendSideGatingEnabled: s ? !1 : o.trendSideGatingEnabled ?? !0,
      conflictPrecedenceMode: Ei.None
    }
  }), l = i.rows.map((d) => ({ ...d }));
  for (const d of l)
    tp(d, r);
  return { rows: l, warnings: i.warnings };
}
var bs = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(bs || {}), Ye = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Ye || {}), Re = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.None = "none", e))(Re || {}), yt = /* @__PURE__ */ ((e) => (e.SinglePoint = "single_point", e.TwoSigma = "two_sigma", e.Shift = "shift", e.Trend = "trend", e))(yt || {}), on = /* @__PURE__ */ ((e) => (e.Up = "up", e.Down = "down", e))(on || {}), La = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(La || {});
const rp = {
  single_point: 1,
  two_sigma: 2,
  shift: 3,
  trend: 4
};
var Ht = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(Ht || {}), Ei = /* @__PURE__ */ ((e) => (e.None = "none", e.SqlRankingV26a = "sql_ranking_v2_6a", e))(Ei || {}), Pt = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Pt || {}), Pi = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Pi || {}), Ri = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Ri || {}), Hi = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(Hi || {});
const fe = (e) => typeof e == "number" && Number.isFinite(e), ap = (e) => e.reduce((t, r) => t + r, 0), pt = (e) => e.length ? ap(e) / e.length : NaN;
function sp(e) {
  const t = [];
  let r = [];
  for (const a of e)
    a.baseline && r.length && (t.push(r), r = []), r.push(a);
  return r.length && t.push(r), t;
}
function op(e, t, r) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const o = e.map((f, h) => ({ idx: h, value: f.value })).filter((f) => fe(f.value));
  if (o.length < a * 2) return;
  const s = r === "Up" || r === "Neither", i = r === "Down";
  function l(f, h) {
    const g = o.slice(f, h).map((v) => v.value);
    return g.length ? pt(g) : NaN;
  }
  let d = null;
  if (o.length > 1) {
    const f = [];
    for (let g = 1; g < o.length; g++) f.push(Math.abs(o[g].value - o[g - 1].value));
    const h = pt(f);
    fe(h) && h > 0 && (d = h * (2.66 / 3));
  }
  if (!d || d <= 0) return;
  const c = t.autoRecalculateDeltaSigma ?? 0.5;
  for (let f = a; f <= o.length - a; f++) {
    const h = f - a, g = l(h, f), v = l(f, f + a);
    if (!fe(g) || !fe(v)) continue;
    const p = (v - g) / d;
    if (!(s ? p >= c : i ? -p >= c : Math.abs(p) >= c)) continue;
    const R = o.slice(f, f + a).map(($) => $.value);
    if (!(s ? R.every(($) => $ > g) : i ? R.every(($) => $ < g) : R.every(($) => s ? $ > g : $ < g))) continue;
    const D = o[f].idx;
    e[D].baseline || (e[D].baseline = !0);
    return;
  }
}
function zi(e, t) {
  const r = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!t[o] && fe(s)) {
      if (a !== null) {
        const i = e[a];
        r[o] = fe(i) ? Math.abs(s - i) : null;
      }
      a = o;
    }
  }
  return r;
}
function Oi(e, t) {
  const r = e.filter((s) => fe(s));
  if (!r.length) return { mrMean: NaN, mrUcl: NaN };
  let a = pt(r), o = 3.267 * a;
  if (t) {
    const s = r.filter((i) => i <= o);
    s.length && s.length !== r.length && (a = pt(s), o = 3.267 * a);
  }
  return { mrMean: a, mrUcl: o };
}
function ip(e, t) {
  if (!fe(e) || !fe(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const r = 2.66, a = 2 / 3 * r, o = 1 / 3 * r;
  return {
    upperProcessLimit: e + r * t,
    lowerProcessLimit: e - r * t,
    upperTwoSigma: e + a * t,
    lowerTwoSigma: e - a * t,
    upperOneSigma: e + o * t,
    lowerOneSigma: e - o * t
  };
}
const lp = 0.2777, cp = 3.6, dp = (e) => fe(e) && e >= 0 ? Math.pow(e, lp) : null, Ut = (e) => fe(e) && e >= 0 ? Math.pow(e, cp) : null, rn = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function up(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
function fp(e) {
  if (!fe(e) || e < 0)
    return {
      cl: null,
      lcl: null,
      ucl: null,
      oneLow: null,
      oneHigh: null,
      twoLow: null,
      twoHigh: null
    };
  const t = 1 / (e + 1), r = (f) => up(f, t) - 1, a = r(0.5), o = Math.max(0, r(rn.three.low)), s = r(rn.three.high), i = Math.max(0, r(rn.one.low)), l = r(rn.one.high), d = Math.max(0, r(rn.two.low)), c = r(rn.two.high);
  return {
    cl: a,
    lcl: o,
    ucl: s,
    oneLow: i,
    oneHigh: l,
    twoLow: d,
    twoHigh: c
  };
}
function hp(e, t, r) {
  const a = e.map((w) => fe(w) ? dp(w) : null), o = zi(a, t), {
    mrMean: s
    /*, mrUcl: _mrUclY_raw*/
  } = Oi(o, !!r), i = a.filter((w, b) => !t[b] && fe(w)), l = i.length ? pt(i) : NaN;
  if (!fe(l) || !fe(s))
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
  const d = 2.66, c = 2 / 3 * d, f = 1 / 3 * d, h = l + d * s, g = l - d * s, v = l + c * s, N = l - c * s, p = l + f * s, u = l - f * s, R = Ut(l), F = Ut(h), D = g <= 0 ? null : Ut(g), $ = Ut(p), M = u <= 0 ? null : Ut(u), T = Ut(v), L = N <= 0 ? null : Ut(N);
  return {
    center: R ?? null,
    upperProcessLimit: F ?? null,
    lowerProcessLimit: D ?? null,
    upperTwoSigma: T ?? null,
    lowerTwoSigma: L ?? null,
    upperOneSigma: $ ?? null,
    lowerOneSigma: M ?? null,
    mr: o,
    mrMean: s,
    mrUcl: fe(s) ? 3.267 * s : null
  };
}
function ys(e) {
  const {
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: o = {}
  } = e, s = {
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
    collapseClusterRules: !0,
    baselineSuggest: !1,
    baselineSuggestMinDeltaSigma: 0.5,
    baselineSuggestStabilityPoints: 5,
    baselineSuggestMinGap: 12,
    baselineSuggestScoreThreshold: 50,
    precedenceStrategy: "legacy",
    emergingDirectionGrace: !1,
    trendSideGatingEnabled: !0,
    ...o
  };
  if (!Array.isArray(a)) throw new Error("data must be an array of rows");
  const i = a.map((p, u) => ({
    rowId: u + 1,
    x: p.x,
    value: fe(p.value) ? p.value : null,
    ghost: !!p.ghost,
    baseline: !!p.baseline,
    target: fe(p.target) ? p.target : null
  }));
  if (o?.autoRecalculateAfterShift)
    try {
      op(i, o, r);
    } catch {
    }
  const l = sp(i), d = [], c = [], h = i.filter(
    (p) => !p.ghost && fe(p.value)
  ).length >= (s.minimumPoints ?? 13);
  let g = 0;
  const v = {};
  for (const p of l) {
    g++;
    const u = p.map((m) => m.value), R = p.map((m) => m.ghost);
    let F = new Array(u.length).fill(null), D = NaN, $ = NaN, M = NaN, T = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      F = zi(u, R);
      const m = u.filter(
        (I, k) => !R[k] && fe(I)
      );
      D = m.length ? pt(m) : NaN;
      const _ = Oi(
        F,
        !!s.excludeMovingRangeOutliers
      );
      $ = _.mrMean, M = _.mrUcl, T = ip(D, $);
    } else if (t === "T") {
      const m = hp(
        u,
        R,
        !!s.excludeMovingRangeOutliers
      );
      F = m.mr, $ = m.mrMean ?? NaN, M = m.mrUcl ?? NaN, D = m.center ?? NaN, T = {
        upperProcessLimit: m.upperProcessLimit,
        lowerProcessLimit: m.lowerProcessLimit,
        upperTwoSigma: m.upperTwoSigma,
        lowerTwoSigma: m.lowerTwoSigma,
        upperOneSigma: m.upperOneSigma,
        lowerOneSigma: m.lowerOneSigma
      };
    } else if (t === "G") {
      const m = u.filter(
        (k, C) => !R[C] && fe(k)
      ), _ = m.length ? pt(m) : NaN, I = fp(_);
      D = I.cl ?? NaN, T = {
        upperProcessLimit: I.ucl,
        lowerProcessLimit: I.lcl,
        upperTwoSigma: I.twoHigh,
        lowerTwoSigma: I.twoLow,
        upperOneSigma: I.oneHigh,
        lowerOneSigma: I.oneLow
      }, F = new Array(u.length).fill(null), $ = NaN, M = NaN;
    } else
      c.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const L = p.map((m, _) => {
      const I = !m.ghost && fe(m.value) ? u.slice(0, _ + 1).filter((E, ee) => !R[ee] && fe(E)).length : 0, k = h, C = k ? T : {
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
        value: fe(m.value) ? m.value : null,
        ghost: m.ghost,
        partitionId: g,
        pointRank: I,
        mean: k && fe(D) ? D : null,
        mr: fe(F[_]) ? F[_] : null,
        mrMean: k && fe($) ? $ : null,
        mrUcl: k && fe(M) ? M : null,
        upperProcessLimit: fe(C.upperProcessLimit) ? C.upperProcessLimit : null,
        lowerProcessLimit: fe(C.lowerProcessLimit) ? C.lowerProcessLimit : null,
        upperTwoSigma: fe(C.upperTwoSigma) ? C.upperTwoSigma : null,
        lowerTwoSigma: fe(C.lowerTwoSigma) ? C.lowerTwoSigma : null,
        upperOneSigma: fe(C.upperOneSigma) ? C.upperOneSigma : null,
        lowerOneSigma: fe(C.lowerOneSigma) ? C.lowerOneSigma : null,
        target: fe(m.target) ? m.target : null,
        specialCauseSinglePointAbove: !1,
        specialCauseSinglePointBelow: !1,
        specialCauseTwoOfThreeAbove: !1,
        specialCauseTwoOfThreeBelow: !1,
        specialCauseFourOfFiveAbove: !1,
        specialCauseFourOfFiveBelow: !1,
        specialCauseShiftHigh: !1,
        specialCauseShiftLow: !1,
        specialCauseTrendIncreasing: !1,
        specialCauseTrendDecreasing: !1,
        specialCauseFifteenInnerThird: !1,
        variationIcon: "none",
        assuranceIcon: "none",
        upperBaseline: k && fe(D) ? D : null,
        lowerBaseline: k && fe(D) ? D : null,
        movingRangeHighPointValue: k && fe(M) ? M : null,
        ghostValue: m.ghost && fe(m.value) ? m.value : null,
        ghostFlag: !!m.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    v[g] = L.filter(
      (m) => !m.ghost && fe(m.value)
    ).length;
    const w = s.specialCauseShiftPoints ?? 6, b = s.specialCauseTrendPoints ?? 6, S = [];
    for (let m = 0; m < L.length; m++) {
      const _ = L[m], I = _.value;
      if (!_.ghost && fe(I) && S.push(m), !(fe(_.mean) && fe(_.upperProcessLimit) && fe(_.lowerProcessLimit)) || _.ghost || !fe(I)) {
        d.push(_);
        continue;
      }
      _.specialCauseSinglePointAbove = fe(_.upperProcessLimit) ? I > _.upperProcessLimit : !1, _.specialCauseSinglePointBelow = fe(_.lowerProcessLimit) ? I < _.lowerProcessLimit : !1, d.push(_);
    }
    if (S.length) {
      const m = (k) => L[k];
      let _ = [], I = [];
      for (const k of S) {
        const C = m(k);
        if (!fe(C.mean) || !fe(C.value)) {
          _ = [], I = [];
          continue;
        }
        if (C.value > C.mean ? (_.push(k), I = []) : C.value < C.mean ? (I.push(k), _ = []) : (_ = [], I = []), _.length >= w)
          for (const x of _) m(x).specialCauseShiftHigh = !0;
        if (I.length >= w)
          for (const x of I) m(x).specialCauseShiftLow = !0;
      }
      for (let k = 0; k <= S.length - 3; k++) {
        const x = S.slice(k, k + 3).map(m);
        if (!x.every((Z) => fe(Z.mean) && fe(Z.value))) continue;
        const E = x[0].mean, ee = x.every((Z) => Z.value > E), H = x.every((Z) => Z.value < E);
        if (!ee && !H) continue;
        const z = x[0].upperTwoSigma ?? 1 / 0, U = x[0].lowerTwoSigma ?? -1 / 0, B = x[0].upperProcessLimit ?? 1 / 0, se = x[0].lowerProcessLimit ?? -1 / 0, y = x.filter((Z) => Z.value > z && Z.value <= B), P = x.filter((Z) => Z.value < U && Z.value >= se);
        if (ee && y.length >= 2)
          for (const Z of y) Z.specialCauseTwoOfThreeAbove = !0;
        if (H && P.length >= 2)
          for (const Z of P) Z.specialCauseTwoOfThreeBelow = !0;
      }
      if (s.enableFourOfFiveRule)
        for (let k = 0; k <= S.length - 5; k++) {
          const x = S.slice(k, k + 5).map(m);
          if (!x.every((B) => fe(B.mean) && fe(B.value))) continue;
          const E = x[0].mean;
          if (!x.every((B) => B.value > E) && !x.every((B) => B.value < E)) continue;
          const ee = x[0].upperOneSigma ?? 1 / 0, H = x[0].lowerOneSigma ?? -1 / 0, z = x.filter((B) => B.value > ee), U = x.filter((B) => B.value < H);
          if (x.every((B) => B.value > E) && z.length >= 4)
            for (const B of z) B.specialCauseFourOfFiveAbove = !0;
          if (x.every((B) => B.value < E) && U.length >= 4)
            for (const B of U) B.specialCauseFourOfFiveBelow = !0;
        }
      for (let k = 0; k <= S.length - b; k++) {
        const C = S.slice(k, k + b), x = C.map(m);
        if (!x.every((H) => fe(H.value))) continue;
        let E = !0, ee = !0;
        for (let H = 1; H < x.length && (x[H].value > x[H - 1].value || (E = !1), x[H].value < x[H - 1].value || (ee = !1), !(!E && !ee)); H++)
          ;
        if (E) for (const H of C) m(H).specialCauseTrendIncreasing = !0;
        if (ee) for (const H of C) m(H).specialCauseTrendDecreasing = !0;
      }
      if (s.enableFifteenInInnerThirdRule) {
        let k = [];
        for (const C of S) {
          const x = m(C);
          if (!fe(x.value) || !fe(x.mean) || !fe(x.upperOneSigma) || !fe(x.lowerOneSigma)) {
            k = [];
            continue;
          }
          if (!(x.value < x.upperOneSigma && x.value > x.lowerOneSigma)) {
            k = [];
            continue;
          }
          if (k.push(C), k.length >= 15) {
            const ee = k.map(m), H = ee.some((U) => U.value > U.mean), z = ee.some((U) => U.value < U.mean);
            if (H && z)
              for (const U of k) m(U).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (s.maximumPointsPartition && Number.isFinite(s.maximumPointsPartition)) {
      const m = s.maximumPointsPartition;
      let _ = 0;
      for (const I of d.filter((k) => k.partitionId === g))
        !I.ghost && fe(I.value) && _++, _ > m && (I.mean = I.upperProcessLimit = I.lowerProcessLimit = null, I.upperTwoSigma = I.lowerTwoSigma = I.upperOneSigma = I.lowerOneSigma = null);
    }
  }
  for (const p of d) {
    if (p.ruleTags && p.ruleTags.length) continue;
    const u = [];
    p.specialCauseShiftHigh && u.push(
      "shift_high"
      /* ShiftHigh */
    ), p.specialCauseShiftLow && u.push(
      "shift_low"
      /* ShiftLow */
    ), p.specialCauseTrendIncreasing && u.push(
      "trend_inc"
      /* TrendIncreasing */
    ), p.specialCauseTrendDecreasing && u.push(
      "trend_dec"
      /* TrendDecreasing */
    ), p.specialCauseSinglePointAbove && u.push(
      "single_above"
      /* SinglePointAbove */
    ), p.specialCauseSinglePointBelow && u.push(
      "single_below"
      /* SinglePointBelow */
    ), p.specialCauseTwoOfThreeAbove && u.push(
      "two_of_three_above"
      /* TwoOfThreeAbove */
    ), p.specialCauseTwoOfThreeBelow && u.push(
      "two_of_three_below"
      /* TwoOfThreeBelow */
    ), p.specialCauseFourOfFiveAbove && u.push(
      "four_of_five_above"
      /* FourOfFiveAbove */
    ), p.specialCauseFourOfFiveBelow && u.push(
      "four_of_five_below"
      /* FourOfFiveBelow */
    ), p.specialCauseFifteenInnerThird && u.push(
      "fifteen_inner_third"
      /* FifteenInnerThird */
    ), u.length && (p.ruleTags = u);
  }
  for (let p = 0; p < d.length; p++) {
    const u = d[p];
    if (u.ghost || !fe(u.value) || u.mean === null) {
      u.variationIcon = "none";
      continue;
    }
    const R = fe(u.value) && fe(u.mean) && u.value > u.mean, F = fe(u.value) && fe(u.mean) && u.value < u.mean;
    s.collapseClusterRules && (u.specialCauseTwoOfThreeAbove && u.specialCauseFourOfFiveAbove && (u.specialCauseTwoOfThreeAbove = !1), u.specialCauseTwoOfThreeBelow && u.specialCauseFourOfFiveBelow && (u.specialCauseTwoOfThreeBelow = !1));
    const D = u.specialCauseTrendIncreasing && (s.trendSideGatingEnabled ? R : !0), $ = u.specialCauseTrendDecreasing && (s.trendSideGatingEnabled ? F : !0), M = u.specialCauseSinglePointAbove || u.specialCauseTwoOfThreeAbove || s.enableFourOfFiveRule && u.specialCauseFourOfFiveAbove || u.specialCauseShiftHigh || D, T = u.specialCauseSinglePointBelow || u.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && u.specialCauseFourOfFiveBelow || u.specialCauseShiftLow || $;
    let L = !1;
    if (s.precedenceStrategy === "directional_first" && s.emergingDirectionGrace) {
      const b = s.specialCauseTrendPoints || 6;
      if (b > 1 && !(u.specialCauseTrendIncreasing || u.specialCauseTrendDecreasing)) {
        const S = b - 1, m = [];
        for (let _ = p; _ >= 0 && m.length < S; _--) {
          const I = d[_];
          !I.ghost && fe(I.value) && I.mean !== null && m.unshift(I);
        }
        if (m.length === S) {
          let _ = !0;
          for (let I = 1; I < m.length && _; I++)
            r === "Up" ? m[I].value > m[I - 1].value || (_ = !1) : r === "Down" && m[I].value < m[I - 1].value || (_ = !1);
          L = _;
        }
      }
    }
    if (s.precedenceStrategy === "directional_first") {
      const b = r === "Up" ? M : r === "Down" ? T : !1, S = r === "Up" ? T : r === "Down" ? M : !1;
      b && !S ? u.variationIcon = "improvement" : S && !b ? u.variationIcon = L ? "neither" : "concern" : b && S ? u.variationIcon = L || u.specialCauseTrendIncreasing || u.specialCauseTrendDecreasing ? "improvement" : "neither" : u.variationIcon = "neither";
    } else
      r === "Up" ? u.variationIcon = M ? "improvement" : T ? "concern" : "neither" : r === "Down" ? u.variationIcon = T ? "improvement" : M ? "concern" : "neither" : u.variationIcon = "neither";
    const w = M || T;
    if (u.specialCauseImprovementValue = w && u.variationIcon === "improvement" ? u.value : null, u.specialCauseConcernValue = w && u.variationIcon === "concern" ? u.value : null, u.specialCauseNeitherValue = w && u.variationIcon === "neither" ? u.value : null, s.conflictPrecedenceMode === "sql_ranking_v2_6a" && u.specialCauseImprovementValue !== null && u.specialCauseConcernValue !== null) {
      const b = [];
      u.specialCauseSinglePointAbove && b.push({
        id: "single_point",
        rank: 1,
        side: "up"
        /* Up */
      }), u.specialCauseSinglePointBelow && b.push({
        id: "single_point",
        rank: 1,
        side: "down"
        /* Down */
      }), u.specialCauseTwoOfThreeAbove && b.push({
        id: "two_sigma",
        rank: 2,
        side: "up"
        /* Up */
      }), u.specialCauseTwoOfThreeBelow && b.push({
        id: "two_sigma",
        rank: 2,
        side: "down"
        /* Down */
      }), u.specialCauseShiftHigh && b.push({
        id: "shift",
        rank: 3,
        side: "up"
        /* Up */
      }), u.specialCauseShiftLow && b.push({
        id: "shift",
        rank: 3,
        side: "down"
        /* Down */
      }), u.specialCauseTrendIncreasing && b.push({
        id: "trend",
        rank: 4,
        side: "up"
        /* Up */
      }), u.specialCauseTrendDecreasing && b.push({
        id: "trend",
        rank: 4,
        side: "down"
        /* Down */
      });
      const S = b.filter(
        (ee) => ee.side === "up"
        /* Up */
      ).reduce((ee, H) => Math.max(ee, H.rank), 0), m = b.filter(
        (ee) => ee.side === "down"
        /* Down */
      ).reduce((ee, H) => Math.max(ee, H.rank), 0);
      let _;
      S > m ? _ = sn.Upwards : m > S ? _ = sn.Downwards : _ = sn.Same;
      const I = u.specialCauseImprovementValue, k = u.specialCauseConcernValue;
      _ === sn.Upwards ? r === "Up" ? u.specialCauseConcernValue = null : r === "Down" && (u.specialCauseImprovementValue = null) : _ === sn.Downwards ? r === "Up" ? u.specialCauseImprovementValue = null : r === "Down" && (u.specialCauseConcernValue = null) : u.variationIcon === "improvement" ? u.specialCauseConcernValue = null : u.variationIcon === "concern" ? u.specialCauseImprovementValue = null : u.specialCauseConcernValue = null, u.specialCauseImprovementValue !== null && u.specialCauseConcernValue === null ? u.variationIcon = "improvement" : u.specialCauseConcernValue !== null && u.specialCauseImprovementValue === null ? u.variationIcon = "concern" : u.specialCauseImprovementValue === null && u.specialCauseConcernValue === null && (u.variationIcon = "neither");
      const C = u.specialCauseImprovementValue !== null ? "up" : u.specialCauseConcernValue !== null ? "down" : void 0, x = C === "up" ? S : C === "down" ? m : Math.max(S, m), E = b.find((ee) => ee.rank === x && (!C || ee.side === C));
      u.conflictPrimeDirection = _, u.conflictResolved = !0, u.conflictResolvedRank = x || void 0, E && (u.conflictResolvedByRuleId = E.id), u.originalSpecialCauseImprovementValue = I, u.originalSpecialCauseConcernValue = k;
    }
    if (fe(u.value) && u.mean !== null) {
      u.assuranceIcon = "none";
      const b = i[u.rowId - 1];
      if (fe(b.target)) {
        const S = b.target;
        s.assuranceCapabilityMode && fe(u.upperProcessLimit) && fe(u.lowerProcessLimit) ? r === "Up" ? u.lowerProcessLimit !== null && u.lowerProcessLimit > S ? u.assuranceIcon = "pass" : u.upperProcessLimit !== null && u.upperProcessLimit < S ? u.assuranceIcon = "fail" : u.assuranceIcon = "none" : r === "Down" ? u.upperProcessLimit !== null && u.upperProcessLimit < S ? u.assuranceIcon = "pass" : u.lowerProcessLimit !== null && u.lowerProcessLimit > S ? u.assuranceIcon = "fail" : u.assuranceIcon = "none" : u.assuranceIcon = "none" : r === "Down" ? u.assuranceIcon = u.value <= S ? "pass" : "fail" : r === "Up" ? u.assuranceIcon = u.value >= S ? "pass" : "fail" : u.assuranceIcon = "none";
      }
    }
  }
  if ((s.minimumPointsWarning ?? !1) && !h) {
    const p = i.filter(
      (u) => !u.ghost && fe(u.value)
    ).length;
    c.push({
      code: "insufficient_points_global",
      category: "data",
      severity: "warning",
      message: `Only ${p} non-ghost points available; minimum required is ${s.minimumPoints}. Limits and icons suppressed.`,
      context: { available: p, minimumRequired: s.minimumPoints }
    });
  }
  if (s.variationIconConflictWarning)
    for (const p of d)
      p.variationIcon === "improvement" && (p.specialCauseSinglePointAbove || p.specialCauseTwoOfThreeAbove || s.enableFourOfFiveRule && p.specialCauseFourOfFiveAbove || p.specialCauseShiftHigh || p.specialCauseTrendIncreasing) && (p.specialCauseSinglePointBelow || p.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && p.specialCauseFourOfFiveBelow || p.specialCauseShiftLow || p.specialCauseTrendDecreasing) && c.push({
        code: "variation_conflict_row",
        category: "logic",
        severity: "warning",
        message: `Row ${p.rowId}: simultaneous high/low special-cause signals – variation icon may be ambiguous.`,
        context: { rowId: p.rowId }
      });
  if (s.maximumPoints && Number.isFinite(s.maximumPoints)) {
    const p = s.maximumPoints;
    let u = 0;
    for (const R of d)
      !R.ghost && fe(R.value) && u++, u > p && (R.mean = R.upperProcessLimit = R.lowerProcessLimit = null, R.upperTwoSigma = R.lowerTwoSigma = R.upperOneSigma = R.lowerOneSigma = null);
  }
  if (s.nullValueWarning && (t === "XmR" || t === "G")) {
    const p = i.filter(
      (u) => !u.ghost && (u.value === null || u.value === void 0 || !fe(u.value))
    ).length;
    p && c.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${p} null/missing value(s) excluded from calculations.`,
      context: { nullCount: p }
    });
  }
  if (s.targetSuppressedWarning && (t === "T" || t === "G") && i.some((u) => fe(u.target)) && c.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), s.ghostOnRareEventWarning && (t === "T" || t === "G")) {
    const p = i.filter((u) => u.ghost).length;
    p && c.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${p} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: p }
    });
  }
  if (s.partitionSizeWarnings && Object.entries(v).forEach(([p, u]) => {
    u < s.minimumPointsPartition && c.push({
      code: "insufficient_points_partition",
      category: "partition",
      severity: "warning",
      message: `Partition ${p} has only ${u} non-ghost point(s); below recommended ${s.minimumPointsPartition}.`,
      context: {
        partitionId: Number(p),
        count: u,
        minimum: s.minimumPointsPartition
      }
    });
  }), s.baselineSpecialCauseWarning) {
    const p = [];
    d.forEach((u) => {
      i[u.rowId - 1].baseline && (u.specialCauseSinglePointAbove || u.specialCauseSinglePointBelow || u.specialCauseTwoOfThreeAbove || u.specialCauseTwoOfThreeBelow || u.specialCauseFourOfFiveAbove || u.specialCauseFourOfFiveBelow || u.specialCauseShiftHigh || u.specialCauseShiftLow || u.specialCauseTrendIncreasing || u.specialCauseTrendDecreasing) && p.push(u.rowId);
    }), p.length && c.push({
      code: "baseline_with_special_cause",
      category: "baseline",
      severity: "warning",
      message: `Baseline set with special-cause present at row(s): ${p.join(", ")}.`,
      context: { rows: p }
    });
  }
  s.maximumPointsWarnings && (s.maximumPointsPartition && Number.isFinite(s.maximumPointsPartition) && c.push({
    code: "partition_cap_applied",
    category: "limits",
    severity: "info",
    message: `Limits suppressed after ${s.maximumPointsPartition} non-ghost points per partition.`,
    context: { cap: s.maximumPointsPartition }
  }), s.maximumPoints && Number.isFinite(s.maximumPoints) && c.push({
    code: "global_cap_applied",
    category: "limits",
    severity: "info",
    message: `Limits suppressed after global cap of ${s.maximumPoints} non-ghost points.`,
    context: { cap: s.maximumPoints }
  }));
  let N;
  if (s.baselineSuggest) {
    const p = d, u = s.baselineSuggestStabilityPoints, R = s.baselineSuggestMinGap, F = s.baselineSuggestMinDeltaSigma, D = s.baselineSuggestScoreThreshold, $ = [];
    let M = 0;
    for (let T = 0; T < p.length; T++) {
      let L = function(m) {
        return !!w[m] && !b?.[m];
      };
      const w = p[T];
      T > 0 && p[T - 1].partitionId !== w.partitionId && (M = T);
      const b = p[T - 1], S = [];
      (L("specialCauseShiftHigh") || L("specialCauseShiftLow")) && S.push({ reason: "shift", index: T }), (L("specialCauseTrendIncreasing") || L("specialCauseTrendDecreasing")) && S.push({ reason: "trend", index: T }), (L("specialCauseSinglePointAbove") || L("specialCauseSinglePointBelow")) && S.push({ reason: "point", index: T });
      for (const m of S) {
        if (m.index - M < R) continue;
        const _ = Math.max(0, m.index - u), I = m.index - 1;
        if (I - _ + 1 < u) continue;
        const k = m.index, C = m.index + u - 1;
        if (C >= p.length) continue;
        const x = p.slice(_, I + 1).map((W) => W.value).filter(fe), E = p.slice(k, C + 1).map((W) => W.value).filter(fe);
        if (x.length < u || E.length < u) continue;
        const ee = p[m.index];
        let H = null;
        if (fe(ee.upperProcessLimit) && fe(ee.mean)) {
          const W = ee.upperProcessLimit - ee.mean;
          W > 0 && (H = W / 3);
        }
        if (!H || H <= 0) continue;
        const z = pt(x), U = pt(E), B = U - z;
        if (Math.abs(B) < F * H) continue;
        const y = p.slice(k, C + 1).filter(
          (W) => W.variationIcon === "concern"
          /* Concern */
        ).length;
        if (y > 1) continue;
        const P = (W) => {
          const oe = pt(W);
          return W.length ? W.reduce((O, ce) => O + (ce - oe) * (ce - oe), 0) / W.length : 0;
        }, Z = P(x), te = P(E);
        let V = m.reason === "shift" ? 90 : m.reason === "trend" ? 70 : 60;
        if (te < Z && (V += 10), V -= y * 15, V < D) continue;
        const A = $.find((W) => W.index === m.index);
        if (A) {
          const W = (oe) => oe === "shift" ? 3 : oe === "trend" ? 2 : 1;
          (W(m.reason) > W(A.reason) || V > A.score) && (A.reason = m.reason, A.score = V, A.deltaMean = B, A.oldMean = z, A.newMean = U, A.window = [k, C]);
        } else
          $.push({
            index: m.index,
            reason: m.reason,
            score: V,
            deltaMean: B,
            oldMean: z,
            newMean: U,
            window: [k, C]
          });
      }
      T > 0 && p[T - 1].partitionId !== p[T].partitionId && (M = T);
    }
    $.sort((T, L) => T.index - L.index), N = $;
  }
  return { rows: d, warnings: c, ...N ? { suggestedBaselines: N } : {} };
}
const vs = {
  singlePointAbove: {
    tooltip: "Single point above upper control limit",
    narration: "Single point beyond a control limit"
  },
  singlePointBelow: {
    tooltip: "Single point below lower control limit",
    narration: "Single point beyond a control limit"
  },
  twoOfThreeAbove: {
    tooltip: "Two of three points beyond +2σ",
    narration: "Two of three points beyond two sigma (same side)"
  },
  twoOfThreeBelow: {
    tooltip: "Two of three points beyond -2σ",
    narration: "Two of three points beyond two sigma (same side)"
  },
  fourOfFiveAbove: {
    tooltip: "Four of five points beyond +1σ",
    narration: "Four of five points beyond one sigma (same side)"
  },
  fourOfFiveBelow: {
    tooltip: "Four of five points beyond -1σ",
    narration: "Four of five points beyond one sigma (same side)"
  },
  shiftHigh: {
    tooltip: "Shift: run of points above centre line",
    narration: "Shift (run on one side of mean)"
  },
  shiftLow: {
    tooltip: "Shift: run of points below centre line",
    narration: "Shift (run on one side of mean)"
  },
  trendIncreasing: {
    tooltip: "Trend: consecutive increasing points",
    narration: "Trend (consecutive increases)"
  },
  trendDecreasing: {
    tooltip: "Trend: consecutive decreasing points",
    narration: "Trend (consecutive decreases)"
  }
};
function _s(e) {
  if (!e) return [];
  const t = [];
  return e.specialCauseSinglePointAbove && t.push(
    "singlePointAbove"
    /* SinglePointAbove */
  ), e.specialCauseSinglePointBelow && t.push(
    "singlePointBelow"
    /* SinglePointBelow */
  ), e.specialCauseTwoOfThreeAbove && t.push(
    "twoOfThreeAbove"
    /* TwoOfThreeAbove */
  ), e.specialCauseTwoOfThreeBelow && t.push(
    "twoOfThreeBelow"
    /* TwoOfThreeBelow */
  ), e.specialCauseFourOfFiveAbove && t.push(
    "fourOfFiveAbove"
    /* FourOfFiveAbove */
  ), e.specialCauseFourOfFiveBelow && t.push(
    "fourOfFiveBelow"
    /* FourOfFiveBelow */
  ), e.specialCauseShiftHigh && t.push(
    "shiftHigh"
    /* ShiftHigh */
  ), e.specialCauseShiftLow && t.push(
    "shiftLow"
    /* ShiftLow */
  ), e.specialCauseTrendIncreasing && t.push(
    "trendIncreasing"
    /* TrendIncreasing */
  ), e.specialCauseTrendDecreasing && t.push(
    "trendDecreasing"
    /* TrendDecreasing */
  ), t;
}
function ws(e) {
  switch (e) {
    case Re.Improvement:
      return "Improvement signal";
    case Re.Concern:
      return "Concern signal";
    case Re.Neither:
      return "Common cause variation";
    case Re.None:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function pp(e) {
  switch (e) {
    case Ht.Pass:
      return "Target met";
    case Ht.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function mp(e, t, r) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((r - e) / t);
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
function Wi(e) {
  return e ? ct[e]?.token ?? ct.neither.token : ct.neither.token;
}
function gp(e) {
  return e ? ct[e]?.hex ?? ct.neither.hex : ct.neither.hex;
}
const Ui = ({
  engineRows: e,
  limits: t,
  pointDescriber: r,
  measureName: a,
  measureUnit: o,
  dateFormatter: s,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const d = Ot(), c = zt(), [f, h] = X.useState(null), [g, v] = X.useState(!1), N = X.useRef(null);
  X.useEffect(() => {
    if (d) {
      if (d.focused && (h(d.focused), N.current && (cancelAnimationFrame(N.current), N.current = null)), !d.focused && !g) {
        const pe = requestAnimationFrame(() => {
          h(null), N.current = null;
        });
        N.current = pe;
      }
      return () => {
        N.current && (cancelAnimationFrame(N.current), N.current = null);
      };
    }
  }, [d, d?.focused, g]);
  const p = d && (d.focused || (g ? f : null) || f), [u, R] = X.useState(!1);
  X.useEffect(() => {
    const pe = requestAnimationFrame(() => R(!0));
    return () => cancelAnimationFrame(pe);
  }, [p?.index]);
  const F = c?.innerWidth ?? 0, D = c?.innerHeight ?? 0, $ = p ? Math.min(Math.max(p.clientX, 0), F) : 0, M = p ? Math.min(Math.max(p.clientY, 0), D) : 0, L = c.ref?.current;
  if (!p)
    return null;
  const w = e?.[p.index], S = _s(w).map((pe) => ({ id: pe, label: vs[pe].tooltip })), m = p.x instanceof Date ? p.x : new Date(p.x), _ = s ? s(m) : m.toDateString(), I = o ? `${o}` : "", k = a || I ? `${p.y}${I ? "" + I : " "}${a ? " " + a : ""}` : `${p.y}`, C = ws(w?.variationIcon), x = pp(w?.assuranceIcon), E = mp(
    t.mean ?? null,
    t.sigma,
    p.y
  ), ee = r ? r(p.index, { x: p.x, y: p.y }) : void 0, H = C || x || E, z = w?.specialCauseTrendIncreasing || w?.specialCauseTrendDecreasing, U = w?.variationIcon === Re.Neither && z, B = l && U ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, se = S.length > 0, y = w?.primeDirection, P = w?.primeRuleId, Z = i && w?.variationIcon === Re.Neither && se, te = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", V = Wi(w?.variationIcon), A = 6.2, oe = [
    ee || "",
    `${_} • ${k}`
  ].filter(Boolean).reduce(
    (pe, J) => Math.max(pe, J.length * A + 32),
    0
  ), O = 200, ce = 440, re = Math.min(ce, Math.max(O, oe));
  let le = $ + 12, be = (c.margin?.top ?? 0) + M + 16;
  le + re > F && (le = $ - -60 - re), le < 0 && (le = Math.max(0, F - re));
  const Te = p ? `spc-tooltip-${p.index}` : "spc-tooltip", Se = L ? Jl(
    /* @__PURE__ */ n.jsx(
      "div",
      {
        id: Te,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (u ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: le,
          top: be,
          width: re,
          maxWidth: ce,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": u ? "false" : "true",
        "data-floating": !0,
        "data-placement": le + re + 12 > F ? "left" : "right",
        onPointerEnter: () => {
          v(!0), N.current && (cancelAnimationFrame(N.current), N.current = null);
        },
        onPointerLeave: () => {
          if (v(!1), !d?.focused) {
            const pe = requestAnimationFrame(() => {
              h(null), N.current = null;
            });
            N.current = pe;
          }
        },
        children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: _ })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: k })
          ] }),
          H && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: C?.toLowerCase().includes("concern") ? /* @__PURE__ */ n.jsx(
              Ge,
              {
                text: C,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : C?.toLowerCase().includes("improvement") ? /* @__PURE__ */ n.jsx(
              Ge,
              {
                text: C,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : Z ? /* @__PURE__ */ n.jsx(
              Ge,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : C ? /* @__PURE__ */ n.jsx(
              Ge,
              {
                text: C,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          x && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const pe = x.toLowerCase(), K = !(pe.includes("not met") || pe.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(pe);
              return /* @__PURE__ */ n.jsx(
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
          E && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ n.jsx(
              Ge,
              {
                text: (() => {
                  const pe = E.toLowerCase();
                  return pe.startsWith("within 1") ? "≤1σ" : pe.startsWith("1–2") ? "1–2σ" : pe.startsWith("2–3") ? "2–3σ" : pe.startsWith(">3") ? ">3σ" : E;
                })(),
                color: E.includes(">3") ? "orange" : E.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${E}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          B && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: B })
          ] }),
          se && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: S.map(({ id: pe, label: J }) => {
                  const K = String(pe), G = K === La.TrendIncreasing || K === La.TrendDecreasing ? "fdp-spc-tag--trend" : Z ? "fdp-spc-tag--no-judgement" : C ? C.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : C.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ n.jsx(
                    Ge,
                    {
                      text: J,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${G}`,
                      "data-rule-id": K
                    },
                    K
                  );
                })
              }
            ),
            y && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ n.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const pe = Z ? "fdp-spc-tag--no-judgement" : C ? C.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : C.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", J = `${y}${P ? ` (${P})` : ""}`;
                return /* @__PURE__ */ n.jsx(
                  Ge,
                  {
                    text: J,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${pe}`,
                    "aria-label": `Prime direction ${y}${P ? ` via ${P}` : ""}`
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
            cx: $,
            cy: M,
            r: 7,
            fill: "none",
            stroke: te,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: $,
            cy: M,
            r: 5,
            fill: "#000",
            stroke: te,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: $,
            cy: M,
            r: 2.5,
            fill: V,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        Se
      ]
    }
  );
};
let Aa = null;
try {
  Aa = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const ot = (e, t) => {
  if (!Aa) return t;
  const r = e.split(".");
  let a = Aa;
  for (const s of r) {
    if (a == null) break;
    a = a[s];
  }
  const o = a;
  return o == null ? t : typeof o == "string" || typeof o == "number" ? String(o) : o.$value != null ? String(o.$value) : o.value != null ? String(o.value) : t;
}, Gi = () => ({
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
const xp = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, bp = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var Ue = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Ue || {}), je = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(je || {}), nt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(nt || {}), Me = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Me || {});
const yp = (e) => {
  const t = e.replace("#", ""), r = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, o = parseInt(t.slice(4, 6), 16) / 255, s = [r, a, o].map((l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4));
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
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
  e.text || (e.text = yp(e.hex));
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
function vp(e, t) {
  let r;
  return e === "common_cause" ? r = No.common : r = No.special[t === "lower" ? "lower" : "higher"], r.map((a) => ({ ...a }));
}
const Vi = (e) => {
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
      case Re.Improvement:
        d = Me.SpecialCauseImproving;
        break;
      case Re.Concern:
        d = Me.SpecialCauseDeteriorating;
        break;
      case Re.Neither:
        d = i.specialCauseNeutral ? Me.SpecialCauseNoJudgement : Me.CommonCause;
        break;
      case Re.None:
      default:
        d = Me.SpecialCauseNoJudgement;
        break;
    }
    let c = i.trend;
    return c || (d === Me.SpecialCauseImproving ? c = l === Ue.LowerIsBetter ? je.Lower : je.Higher : d === Me.SpecialCauseDeteriorating ? c = l === Ue.LowerIsBetter ? je.Higher : je.Lower : d === Me.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? c = je.Higher : i.lowSideSignal && !i.highSideSignal ? c = je.Lower : c = je.Higher : c = je.Higher), { state: d, direction: c, polarity: l ?? Ue.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Me.SpecialCauseImproving || i.state === Me.SpecialCauseDeteriorating) && i.polarity && (i.state === Me.SpecialCauseImproving ? l = i.polarity === Ue.LowerIsBetter ? je.Lower : je.Higher : l = i.polarity === Ue.LowerIsBetter ? je.Higher : je.Lower), l || (i.state === Me.SpecialCauseImproving ? l = je.Higher : i.state === Me.SpecialCauseDeteriorating ? l = je.Lower : l = je.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? Ue.ContextDependent
    };
  }
  const r = e;
  t();
  const o = {
    [nt.Improving]: Me.SpecialCauseImproving,
    [nt.Deteriorating]: Me.SpecialCauseDeteriorating,
    [nt.No_Judgement]: Me.SpecialCauseNoJudgement,
    [nt.None]: Me.CommonCause
  }[r.judgement];
  let s;
  return r.judgement === nt.Improving ? s = r.polarity === Ue.LowerIsBetter ? je.Lower : je.Higher : r.judgement === nt.Deteriorating ? s = r.polarity === Ue.LowerIsBetter ? je.Higher : je.Lower : s = r.trend ?? je.Higher, { state: o, direction: s, polarity: r.polarity };
};
function _p(e, t) {
  const { state: r, direction: a, polarity: o } = Vi(e), s = zr(r), i = a === je.Higher ? "above" : "below", l = a === je.Higher ? "upwards" : "downwards", d = (() => {
    switch (o) {
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
      switch (s) {
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
const xa = (e, t, r, a, o, s) => /* @__PURE__ */ n.jsxs("defs", { children: [
  a && /* @__PURE__ */ n.jsxs("filter", { id: t, filterUnits: "objectBoundingBox", children: [
    /* @__PURE__ */ n.jsx("feGaussianBlur", { stdDeviation: "3" }),
    /* @__PURE__ */ n.jsx("feOffset", { dx: "0", dy: "15", result: "blur" }),
    /* @__PURE__ */ n.jsx("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }),
    /* @__PURE__ */ n.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
    /* @__PURE__ */ n.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
  ] }),
  o && /* @__PURE__ */ n.jsx("linearGradient", { id: r, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: s.map((i) => /* @__PURE__ */ n.jsx(
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
  ariaLabel: r,
  showLetter: a = !0,
  dropShadow: o = !0,
  gradientWash: s = !1,
  variant: i = "classic",
  runLength: l = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: d = "polarity",
  letterOverride: c,
  ...f
}) => {
  const h = Vn(), g = Vn(), {
    start: v,
    mid: N,
    end: p,
    triStart: u,
    triMid: R,
    triEnd: F
  } = Gi(), { state: D, direction: $, polarity: M } = De(
    () => Vi(e),
    [e]
  ), T = De(() => ks(D), [D]), L = De(() => zr(D), [D]), w = L === nt.Improving || L === nt.Deteriorating;
  let b = "";
  a && w && (d === "polarity" ? M === Ue.HigherIsBetter ? b = "H" : M === Ue.LowerIsBetter ? b = "L" : b = "" : b = $ === je.Higher ? "H" : "L"), c !== void 0 && (b = c);
  const S = D !== Me.CommonCause, m = D === Me.SpecialCauseNoJudgement, _ = ot("common-cause", "#A6A6A6"), I = S ? T.hex : _, k = De(
    () => vp(D, $),
    [D, $]
  ), C = r || `${T.label}${b ? $ === je.Higher ? " – Higher" : " – Lower" : ""}`, x = _p(
    e
  );
  if (i === "triangleWithRun") {
    const U = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], B = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let se = null;
    D === Me.SpecialCauseImproving || D === Me.SpecialCauseDeteriorating ? se = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: ($ === je.Higher ? U : B).map((ce) => ce.join(",")).join(" "),
        fill: T.hex,
        stroke: T.hex,
        strokeWidth: 6,
        transform: $ === je.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : D === Me.SpecialCauseNoJudgement && (se = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: $ === je.Higher ? U.map((ce) => ce.join(",")).join(" ") : B.map((ce) => ce.join(",")).join(" "),
        fill: T.hex,
        stroke: T.hex,
        strokeWidth: 6,
        transform: $ === je.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const y = Math.max(0, Math.min(5, Math.floor(l || 0))), P = D === Me.CommonCause ? 160 : $ === je.Higher ? 220 : 70, Z = 10, te = 26, V = 150 - 2 * te, A = D === Me.SpecialCauseImproving ? ot("improvement", "#00B0F0") : D === Me.SpecialCauseDeteriorating ? ot("concern", "#E46C0A") : _, W = Array.from({ length: 5 }).map((ce, re) => {
      const de = (D === Me.SpecialCauseImproving || D === Me.SpecialCauseDeteriorating) && re >= 5 - y ? A : _;
      return /* @__PURE__ */ n.jsx(
        "circle",
        {
          cx: V + re * te,
          cy: P,
          r: Z,
          fill: de,
          stroke: de,
          strokeWidth: 1
        },
        re
      );
    }), oe = xa(
      T.hex,
      h,
      g,
      o,
      s,
      [
        { offset: "0%", opacity: u },
        { offset: "75%", opacity: R },
        { offset: "100%", opacity: F }
      ]
    ), O = D === Me.CommonCause || $ === je.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": C,
        "aria-description": x,
        ...f,
        children: [
          oe,
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: "none",
              fill: s ? `url(#${g})` : "#ffffff",
              ...o ? { filter: `url(#${h})` } : {},
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
          /* @__PURE__ */ n.jsxs("g", { transform: O, children: [
            se,
            b && /* @__PURE__ */ n.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: $ === je.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: b
              }
            ),
            W
          ] })
        ]
      }
    );
  }
  if (i === "triangle") {
    const U = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], B = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], se = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let y = null;
    D === Me.SpecialCauseImproving || D === Me.SpecialCauseDeteriorating ? y = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: ($ === je.Higher ? U : B).map((Z) => Z.join(",")).join(" "),
        fill: T.hex,
        stroke: T.hex,
        strokeWidth: 8,
        transform: $ === je.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : D === Me.SpecialCauseNoJudgement ? y = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: $ === je.Higher ? U.map((Z) => Z.join(",")).join(" ") : B.map((Z) => Z.join(",")).join(" "),
        fill: T.hex,
        stroke: T.hex,
        strokeWidth: 8,
        transform: $ === je.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : D === Me.CommonCause && (y = /* @__PURE__ */ n.jsx(
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
    const P = xa(
      T.hex,
      h,
      g,
      o,
      s,
      [
        { offset: "0%", opacity: u },
        { offset: "65%", opacity: R },
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
        "aria-label": C,
        "aria-description": x,
        ...f,
        children: [
          P,
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: "none",
              fill: s ? `url(#${g})` : "#ffffff",
              ...o ? { filter: `url(#${h})` } : {},
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
          y,
          b && (D === Me.SpecialCauseImproving || D === Me.SpecialCauseDeteriorating) && /* @__PURE__ */ n.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: $ === je.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: b
            }
          )
        ]
      }
    );
  }
  const E = xa(
    T.hex,
    h,
    g,
    o,
    s,
    [
      { offset: "0%", opacity: v },
      { offset: "65%", opacity: N },
      { offset: "100%", opacity: p }
    ]
  );
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": C,
      "aria-description": x,
      ...f,
      children: [
        E,
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: "none",
            fill: s ? `url(#${g})` : "#ffffff",
            ...o ? { filter: `url(#${h})` } : {},
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
        b && /* @__PURE__ */ n.jsx(
          "text",
          {
            fill: T.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ n.jsx("tspan", { x: "120", y: $ === je.Lower ? "340" : "155", children: b })
          }
        ),
        m ? /* @__PURE__ */ n.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: T.hex,
            ...$ === je.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          k.length === 5 && /* @__PURE__ */ n.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: _,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${k.map((ee) => `${ee.cx} ${ee.cy}`).join(" L ")}`
            }
          ),
          k.map((ee, H) => {
            const U = H >= k.length - 2 && S ? I : _, B = U;
            return /* @__PURE__ */ n.jsx(
              "circle",
              {
                stroke: B,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: U,
                cx: ee.cx,
                cy: ee.cy,
                r: 16
              },
              H
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
  ariaLabel: r,
  dropShadow: a = !0,
  colourOverride: o,
  gradientWash: s = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...d
}) => {
  const c = Vn(), f = Vn(), { start: h, mid: g, end: v } = Gi(), N = o || xp[e], p = (i || bp[e]).slice(0, 2), u = r || `Assurance ${e}`;
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": u,
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
          s && /* @__PURE__ */ n.jsxs("linearGradient", { id: f, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: N, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "65%", stopColor: N, stopOpacity: parseFloat(g) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(v) })
          ] })
        ] }),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: "none",
            fill: s ? `url(#${f})` : "#ffffff",
            ...a ? { filter: `url(#${c})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "text",
          {
            fill: N,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            x: 0,
            y: 0,
            transform: "translate(121.01, 32) scale(0.5, 0.5)",
            textAnchor: "middle",
            children: /* @__PURE__ */ n.jsx("tspan", { x: 60, y: 184, children: p })
          }
        ),
        l && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          e === Rt.Fail ? /* @__PURE__ */ n.jsx(
            "path",
            {
              id: "fail-line",
              stroke: N,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 33,143 L 268,143"
            }
          ) : e === Rt.Uncertain ? /* @__PURE__ */ n.jsx(
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
              stroke: N,
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
              stroke: N,
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
let wp = 0;
const Sp = ({
  data: e,
  ariaLabel: t = "SPC chart",
  height: r = 260,
  showZones: a = !0,
  showPoints: o = !0,
  announceFocus: s = !1,
  className: i,
  unit: l,
  highlightOutOfControl: d = !0,
  chartType: c = bs.XmR,
  metricImprovement: f = Ye.Neither,
  enableRules: h = !0,
  showIcons: g = !1,
  showEmbeddedIcon: v = !0,
  embeddedIconVariant: N = "classic",
  embeddedIconRunLength: p,
  targets: u,
  baselines: R,
  ghosts: F,
  settings: D,
  narrationContext: $,
  gradientSequences: M = !1,
  sequenceTransition: T = "slope",
  processLineWidth: L = 2,
  showWarningsPanel: w = !1,
  warningsFilter: b,
  enableNeutralNoJudgement: S = !0,
  showTrendGatingExplanation: m = !0,
  enableTrendSideGating: _,
  disableTrendSideGating: I,
  source: k,
  alwaysShowZeroY: C = !1,
  alwaysShowHundredY: x = !1,
  percentScale: E = !1,
  useSqlCompatEngine: ee = !1
}) => {
  const H = X.useCallback(
    (G) => String(G).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Y) => Y.length ? Y[0].toUpperCase() + Y.slice(1) : Y).join(" "),
    []
  ), z = X.useCallback(
    (G) => String(G).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((j) => j.length ? j[0].toUpperCase() + j.slice(1) : j).join(" "),
    []
  ), U = _ ?? (I !== void 0 ? !I : !1);
  process.env.NODE_ENV !== "production" && I !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' is deprecated. Use 'enableTrendSideGating' instead (inverted semantics)."
  );
  const B = X.useMemo(() => {
    const G = e.map((j, Y) => ({
      x: j.x,
      value: j.y,
      target: u?.[Y] ?? void 0,
      baseline: R?.[Y] ?? void 0,
      ghost: F?.[Y] ?? void 0
    }));
    try {
      const j = D ? { ...D, trendSideGatingEnabled: D.trendSideGatingEnabled ?? U } : { trendSideGatingEnabled: U };
      return ee ? np({
        chartType: c,
        metricImprovement: f,
        data: G,
        disableTrendSideGating: j.trendSideGatingEnabled === !1,
        settings: j
      }) : ys({ chartType: c, metricImprovement: f, data: G, settings: j });
    } catch {
      return null;
    }
  }, [
    e,
    u,
    R,
    F,
    c,
    f,
    D,
    _,
    I,
    ee
  ]), se = B?.rows.slice().reverse().find((G) => G.mean != null), y = se?.mean ?? null, P = B?.warnings || [], Z = X.useMemo(() => P.length ? b ? P.filter((G) => !(b.severities && G.severity && !b.severities.includes(G.severity) || b.categories && G.category && !b.categories.includes(G.category) || b.codes && !b.codes.includes(G.code))) : P : [], [P, b]), [te, V] = X.useState(""), A = X.useRef("");
  X.useEffect(() => {
    if (!w) {
      A.current !== "" && (A.current = "", V(""));
      return;
    }
    const G = Z.length;
    if (!G) {
      const q = "Diagnostics: no warnings.";
      q !== A.current && (A.current = q, V(q));
      return;
    }
    const j = {
      error: Z.filter(
        (q) => q.severity === Pt.Error
      ).length,
      warning: Z.filter(
        (q) => q.severity === Pt.Warning
      ).length,
      info: Z.filter(
        (q) => q.severity === Pt.Info
      ).length
    }, Y = [];
    j.error && Y.push(
      `${j.error} error${j.error === 1 ? "" : "s"}`
    ), j.warning && Y.push(
      `${j.warning} warning${j.warning === 1 ? "" : "s"}`
    ), j.info && Y.push(`${j.info} info`);
    const ae = `Diagnostics updated: ${G} warning${G === 1 ? "" : "s"} (${Y.join(", ")}).`;
    ae !== A.current && (A.current = ae, V(ae));
  }, [w, Z]);
  const W = se?.upperProcessLimit ?? null, oe = se?.lowerProcessLimit ?? null, O = se?.upperOneSigma ?? null, ce = se?.lowerOneSigma ?? null, re = se?.upperTwoSigma ?? null, le = se?.lowerTwoSigma ?? null, de = y != null && O != null ? Math.abs(O - y) : 0, be = X.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), Te = X.useMemo(() => {
    if (E) {
      const q = e.map((_e) => _e.y), Q = Math.max(100, ...q), ie = Math.min(0, ...q);
      return [ie < 0 ? ie : 0, Q > 100 ? Q : 100];
    }
    const j = [...e.map((q) => q.y)];
    if ([y, W, oe, O, ce, re, le].forEach((q) => {
      q != null && j.push(q);
    }), u && u.forEach((q) => {
      typeof q == "number" && !isNaN(q) && j.push(q);
    }), !j.length) return;
    let Y = Math.min(...j), ae = Math.max(...j);
    return C && (Y = Math.min(0, Y)), x && (ae = Math.max(100, ae)), [Y, ae];
  }, [e, y, W, oe, O, ce, re, le, u, C, x, E]), Se = X.useMemo(() => {
    if (!(l || $?.measureUnit) && e.length)
      return e.every((G) => G.y >= 0 && G.y <= 1) ? "%" : void 0;
  }, [l, $?.measureUnit, e]), pe = l ?? $?.measureUnit ?? Se, J = X.useMemo(() => pe ? { ...$ || {}, measureUnit: pe } : $, [$, pe]), K = X.useMemo(() => {
    if (!B?.rows) return [];
    const G = [];
    for (let j = 1; j < B.rows.length; j++)
      B.rows[j].partitionId !== B.rows[j - 1].partitionId && G.push(j);
    return G;
  }, [B?.rows]), ne = X.useMemo(() => {
    if (!v || !B?.rows?.length) return null;
    const G = B.rows, j = D?.minimumPoints ?? 13;
    if (G.filter(
      (we) => !we.ghost && we.value != null
    ).length < j) return null;
    let ae = -1;
    for (let we = G.length - 1; we >= 0; we--) {
      const Le = G[we];
      if (Le && Le.value != null && !Le.ghost) {
        ae = we;
        break;
      }
    }
    if (ae === -1) return null;
    const q = G[ae], Q = q.variationIcon, ie = q.assuranceIcon, _e = Q === Re.Neither && !!q.specialCauseNeitherValue, ke = ie === Ht.Pass ? Rt.Pass : ie === Ht.Fail ? Rt.Fail : Rt.Uncertain;
    let ye;
    if (Q === Re.None) {
      const we = q.specialCauseSinglePointAbove, Le = q.specialCauseSinglePointBelow;
      f === Ye.Up ? we ? ye = je.Higher : Le && (ye = je.Lower) : f === Ye.Down ? Le ? ye = je.Lower : we && (ye = je.Higher) : ye = je.Higher;
    } else if (Q === Re.Neither && _e) {
      const we = q.specialCauseSinglePointAbove || q.specialCauseTwoOfThreeAbove || q.specialCauseFourOfFiveAbove || q.specialCauseShiftHigh || q.specialCauseTrendIncreasing, Le = q.specialCauseSinglePointBelow || q.specialCauseTwoOfThreeBelow || q.specialCauseFourOfFiveBelow || q.specialCauseShiftLow || q.specialCauseTrendDecreasing;
      we && !Le ? ye = je.Higher : Le && !we ? ye = je.Lower : ye = je.Higher;
    }
    let Ce;
    f === Ye.Up ? Ce = Ue.HigherIsBetter : f === Ye.Down ? Ce = Ue.LowerIsBetter : Ce = Ue.ContextDependent;
    const me = 80;
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        style: { display: "flex", gap: 12, marginRight: 16 },
        children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-icon",
              "data-variation": String(Q),
              "data-trend-raw": ye ? String(ye) : "none",
              "data-trend": ye ? String(ye) : "none",
              "data-polarity": String(Ce ?? "unknown"),
              style: { width: me, height: me },
              children: /* @__PURE__ */ n.jsx(
                Or,
                {
                  dropShadow: !1,
                  data: {
                    variationIcon: Q,
                    improvementDirection: f,
                    polarity: Ce,
                    specialCauseNeutral: _e,
                    highSideSignal: q.specialCauseSinglePointAbove || q.specialCauseTwoOfThreeAbove || q.specialCauseFourOfFiveAbove || q.specialCauseShiftHigh || q.specialCauseTrendIncreasing,
                    lowSideSignal: q.specialCauseSinglePointBelow || q.specialCauseTwoOfThreeBelow || q.specialCauseFourOfFiveBelow || q.specialCauseShiftLow || q.specialCauseTrendDecreasing,
                    ...ye ? { trend: ye } : {}
                  },
                  letterMode: f === Ye.Neither ? "direction" : "polarity",
                  size: me,
                  variant: N,
                  runLength: N === "triangleWithRun" ? p : void 0
                }
              )
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-assurance-icon",
              "data-assurance": String(ie),
              style: { width: me, height: me },
              children: /* @__PURE__ */ n.jsx(
                Wr,
                {
                  status: ke,
                  size: me,
                  dropShadow: !1
                }
              )
            }
          )
        ]
      },
      `embedded-icon-${ae}`
    );
  }, [
    v,
    B?.rows,
    f,
    D?.minimumPoints,
    u,
    N,
    p
  ]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: i ? `fdp-spc-chart-wrapper ${i}` : "fdp-spc-chart-wrapper",
      children: [
        v && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "fdp-spc-chart__top-row",
            style: {
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 4
            },
            children: ne
          }
        ),
        /* @__PURE__ */ n.jsx(
          hh,
          {
            height: r,
            ariaLabel: t,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ n.jsx(ph, { series: be, yDomain: Te, children: /* @__PURE__ */ n.jsx(
              kp,
              {
                series: be,
                showPoints: o,
                announceFocus: s,
                limits: { mean: y, ucl: W, lcl: oe, sigma: de, onePos: O, oneNeg: ce, twoPos: re, twoNeg: le },
                showZones: a,
                highlightOutOfControl: d,
                engineRows: B?.rows || null,
                enableRules: h,
                showIcons: g,
                narrationContext: J,
                metricImprovement: f,
                gradientSequences: M,
                sequenceTransition: T,
                processLineWidth: L,
                effectiveUnit: pe,
                partitionMarkers: K,
                ariaLabel: t,
                enableNeutralNoJudgement: S,
                showTrendGatingExplanation: m
              }
            ) })
          }
        ),
        k && /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof k == "string" ? /* @__PURE__ */ n.jsxs("small", { children: [
          "Source: ",
          k
        ] }) : k }),
        w && te && /* @__PURE__ */ n.jsx(
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
            children: te
          }
        ),
        w && Z.length > 0 && /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "fdp-spc-chart__warnings",
            role: "region",
            "aria-label": "SPC diagnostics",
            children: [
              /* @__PURE__ */ n.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
              /* @__PURE__ */ n.jsx(
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
                  rows: Z.map((G) => {
                    let j = "grey";
                    return G.severity === Pt.Error ? j = "red" : G.severity === Pt.Warning ? j = "orange" : G.severity === Pt.Info && (j = "blue"), [
                      {
                        node: /* @__PURE__ */ n.jsx(
                          Ge,
                          {
                            color: j,
                            text: (G.severity ? String(G.severity) : "Info").replace(
                              /^[a-z]/,
                              (Y) => Y.toUpperCase()
                            )
                          }
                        ),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
                      },
                      {
                        node: G.category ? /* @__PURE__ */ n.jsx(
                          Ge,
                          {
                            color: "purple",
                            text: z(G.category)
                          }
                        ) : /* @__PURE__ */ n.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
                      },
                      {
                        node: /* @__PURE__ */ n.jsx(Ge, { color: "grey", text: H(G.code) }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
                      },
                      {
                        node: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                          /* @__PURE__ */ n.jsx("span", { children: G.message }),
                          G.context && Object.keys(G.context).length > 0 && /* @__PURE__ */ n.jsxs(
                            "details",
                            {
                              className: "fdp-spc-chart__warning-context",
                              style: { marginTop: 4 },
                              children: [
                                /* @__PURE__ */ n.jsx("summary", { children: "context" }),
                                /* @__PURE__ */ n.jsx("pre", { children: JSON.stringify(G.context, null, 2) })
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
}, kp = ({
  series: e,
  showPoints: t,
  announceFocus: r,
  limits: a,
  showZones: o,
  highlightOutOfControl: s,
  engineRows: i,
  enableRules: l,
  showIcons: d,
  narrationContext: c,
  gradientSequences: f,
  sequenceTransition: h,
  processLineWidth: g,
  effectiveUnit: v,
  partitionMarkers: N,
  ariaLabel: p,
  enableNeutralNoJudgement: u = !0,
  showTrendGatingExplanation: R = !0
}) => {
  const F = Qt(), D = zt();
  if (!F) return null;
  const { xScale: $, yScale: M } = F, T = X.useRef(
    "spc-seq-" + ++wp
  ), L = Ot(), w = e[0]?.data || [], b = X.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const y = /* @__PURE__ */ new Set();
    return w.forEach((P, Z) => {
      (a.ucl != null && P.y > a.ucl || a.lcl != null && P.y < a.lcl) && y.add(Z);
    }), y;
  }, [w, a.ucl, a.lcl]), S = X.useMemo(() => {
    if (!i) return null;
    const y = {};
    return i.forEach((P, Z) => {
      if (P.value == null || P.ghost) return;
      const te = P.specialCauseSinglePointAbove || P.specialCauseSinglePointBelow || P.specialCauseTwoOfThreeAbove || P.specialCauseTwoOfThreeBelow || P.specialCauseFourOfFiveAbove || P.specialCauseFourOfFiveBelow || P.specialCauseShiftHigh || P.specialCauseShiftLow || P.specialCauseTrendIncreasing || P.specialCauseTrendDecreasing;
      y[Z] = {
        variation: P.variationIcon,
        assurance: P.assuranceIcon,
        special: te,
        concern: P.variationIcon === Re.Concern,
        improvement: P.variationIcon === Re.Improvement
      };
    }), y;
  }, [i]), m = X.useMemo(() => {
    if (!i || !i.length) return null;
    const y = [];
    for (const Z of i)
      typeof Z.target == "number" && !isNaN(Z.target) && y.push(Z.target);
    if (!y.length) return null;
    const P = y[0];
    return y.every((Z) => Z === P) ? P : null;
  }, [i]), _ = X.useMemo(() => {
    if (!S || !w.length)
      return [];
    const y = w.map((Z, te) => {
      const V = S?.[te];
      return V?.concern ? "concern" : V?.improvement ? "improvement" : u && V?.special && V.variation === Re.Neither ? "noJudgement" : "common";
    });
    return p?.includes("Rule Clash") && console.log(
      `[${p}] Raw categories:`,
      y.map((Z, te) => `${te}:${Z}(${w[te].y})`).join(", ")
    ), y;
  }, [S, w, p, u]), I = X.useMemo(() => {
    if (!f || !_.length)
      return [];
    const y = [..._];
    let P = 0;
    for (; P < y.length; ) {
      const V = y[P];
      let A = P + 1;
      for (; A < y.length && y[A] === V; ) A++;
      A - P === 1 && V !== "common" && (y[P] = "common"), P = A;
    }
    const Z = [];
    if (y.length) {
      let V = 0;
      for (let A = 1; A <= y.length; A++)
        if (A === y.length || y[A] !== y[V]) {
          const W = y[V], oe = A - 1, O = oe - V + 1;
          (W === "common" || O >= 2) && Z.push({ start: V, end: oe, category: W }), V = A;
        }
    }
    return p?.includes("Rule Clash") && console.log(
      `[${p}] Final sequences:`,
      Z.map((V) => `${V.start}-${V.end}:${V.category}`).join(", ")
    ), Z;
  }, [f, _, p]), k = X.useMemo(
    () => w.map((y) => $(y.x instanceof Date ? y.x : new Date(y.x))),
    [w, $]
  ), C = $.range()[1], x = X.useMemo(() => {
    if (!i || !i.length) return null;
    const y = (P) => {
      const Z = [];
      let te = null, V = null;
      for (let A = 0; A < i.length; A++) {
        const W = i[A], oe = typeof W[P] == "number" ? W[P] : null;
        if (oe == null || isNaN(oe)) {
          te !== null && V != null && (Z.push({
            x1: k[te],
            x2: k[A - 1],
            y: M(V)
          }), te = null, V = null);
          continue;
        }
        if (te === null) {
          te = A, V = oe;
          continue;
        }
        V != null && Math.abs(oe - V) <= 1e-9 || (V != null && Z.push({
          x1: k[te],
          x2: k[A - 1],
          y: M(V)
        }), te = A, V = oe);
      }
      return te !== null && V != null && Z.push({
        x1: k[te],
        x2: k[i.length - 1],
        y: M(V)
      }), Z;
    };
    return {
      mean: y("mean"),
      ucl: y("upperProcessLimit"),
      lcl: y("lowerProcessLimit"),
      onePos: y("upperOneSigma"),
      oneNeg: y("lowerOneSigma"),
      twoPos: y("upperTwoSigma"),
      twoNeg: y("lowerTwoSigma")
    };
  }, [i, k, M]), E = X.useMemo(() => I.length ? /* @__PURE__ */ n.jsxs("defs", { children: [
    /* @__PURE__ */ n.jsxs("linearGradient", { id: `${T.current}-grad-common`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.28 }),
      /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.12 }),
      /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.045 })
    ] }),
    I.map((y, P) => {
      const Z = `${T.current}-grad-${P}`;
      let te, V = 0.28, A = 0.12, W = 0.045;
      switch (y.category) {
        case "concern":
          te = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", V = 0.28, A = 0.12, W = 0.045;
          break;
        case "improvement":
          te = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", V = 0.26, A = 0.11, W = 0.045;
          break;
        case "noJudgement":
          te = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", V = 0.26, A = 0.11, W = 0.045;
          break;
        default:
          te = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ n.jsxs("linearGradient", { id: Z, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: te, stopOpacity: V }),
        /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: te, stopOpacity: A }),
        /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: te, stopOpacity: W })
      ] }, Z);
    })
  ] }) : null, [I]), ee = X.useMemo(() => {
    if (!I.length) return null;
    const [y] = M.domain(), P = M(y), Z = I.map((te, V) => {
      const { start: A, end: W, category: oe } = te;
      if (A < 0 || W >= k.length || A > W)
        return null;
      const O = k[A], ce = k[W];
      let re = "";
      if (oe === "common") {
        const le = V > 0 ? I[V - 1] : null, de = V < I.length - 1 ? I[V + 1] : null, be = le ? k[le.end] : 0, Te = le ? M(w[le.end].y) : P, Se = de ? k[de.start] : C, pe = de ? M(w[de.start].y) : P;
        re = `M ${be} ${P}`, re += ` L ${be} ${Te}`;
        for (let J = A; J <= W; J++)
          re += ` L ${k[J]} ${M(w[J].y)}`;
        re += ` L ${Se} ${pe}`, re += ` L ${Se} ${P} Z`;
      } else {
        const le = V > 0 ? I[V - 1] : null, de = V < I.length - 1 ? I[V + 1] : null, be = le && le.category !== "common", Te = de && de.category !== "common", Se = M(w[A].y), pe = M(w[W].y);
        let J = O, K = ce;
        if (be) {
          const ne = k[le.end], G = M(w[le.end].y), j = w[A].y - w[le.end].y;
          h === "slope" && j > 0 ? (re = `M ${ne} ${G} L ${O} ${Se}`, J = ne) : (re = `M ${O} ${P} L ${O} ${Se}`, J = O);
        } else
          re = `M ${O} ${P} L ${O} ${Se}`;
        for (let ne = A + 1; ne <= W; ne++)
          re += ` L ${k[ne]} ${M(w[ne].y)}`;
        if (re += ` L ${ce} ${pe}`, Te) {
          const ne = k[de.start], G = M(w[de.start].y), j = w[de.start].y - w[W].y;
          (h === "slope" && j <= 0 || h === "extend") && (re += ` L ${ne} ${G}`, K = ne);
        }
        if (re += ` L ${K} ${P}`, re += ` L ${J} ${P} Z`, h === "neutral" && be) {
          const ne = k[le.end], G = M(w[le.end].y), j = /* @__PURE__ */ n.jsx(
            "path",
            {
              d: `M ${ne} ${P} L ${ne} ${G} L ${O} ${Se} L ${O} ${P} Z`,
              fill: `url(#${T.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${V}`
          );
          return /* @__PURE__ */ n.jsxs("g", { children: [
            j,
            /* @__PURE__ */ n.jsx(
              "path",
              {
                d: re,
                fill: `url(#${T.current}-grad-${V})`,
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
          d: re,
          fill: `url(#${T.current}-grad-${V})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${V}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ n.jsx("g", { className: "fdp-spc__sequence-bgs", children: Z });
  }, [I, k, C, M, w, h]), H = X.useMemo(() => {
    if (!c?.timeframe && w.length >= 2) {
      const y = w.map((W) => W.x instanceof Date ? W.x : new Date(W.x)), P = new Date(Math.min(...y.map((W) => W.getTime()))), Z = new Date(Math.max(...y.map((W) => W.getTime()))), te = Math.round((Z.getTime() - P.getTime()) / 864e5) || 0;
      if (te < 14)
        return `The chart shows a timeframe of ${te + 1} days`;
      const V = Math.round(te / 7);
      return V < 20 ? `The chart shows a timeframe of ${V} weeks` : `The chart shows a timeframe of ${(Z.getFullYear() - P.getFullYear()) * 12 + (Z.getMonth() - P.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, w]), z = (y) => {
    const P = y % 10, Z = y % 100;
    return P === 1 && Z !== 11 ? `${y}st` : P === 2 && Z !== 12 ? `${y}nd` : P === 3 && Z !== 13 ? `${y}rd` : `${y}th`;
  }, U = (y) => `${z(y.getDate())} ${y.toLocaleString("en-GB", { month: "long" })}, ${y.getFullYear()}`, B = X.useCallback(
    ({
      index: y,
      x: P,
      y: Z
    }) => {
      const te = i?.[y], V = P instanceof Date ? P : new Date(P), A = U(V), W = c?.measureUnit ? ` ${c.measureUnit}` : "", oe = c?.measureName ? ` ${c.measureName}` : "";
      if (!te)
        return `General summary is: ${H ? H + ". " : ""}Point ${y + 1}, ${A}, ${Z}${W}${oe}`;
      const O = ws(te.variationIcon) || "Variation", ce = _s(te), re = ce.length ? ` Rules: ${[...new Set(ce.map((de) => vs[de].narration))].join("; ")}.` : " No special cause rules.", le = [];
      return c?.measureName && le.push(`Measure: ${c.measureName}.`), c?.datasetContext && le.push(`${c.datasetContext}.`), c?.organisation && le.push(`Organisation: ${c.organisation}.`), c?.additionalNote && le.push(c.additionalNote), [
        "General summary is:",
        ...le,
        `Point ${y + 1} recorded on `,
        A + ",",
        `with a value of ${Z} ${W}${oe}`,
        O + ".",
        re
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, H]
  ), se = X.useCallback(
    (y, P) => i?.[y] ? B({
      index: y,
      seriesId: "process",
      x: P.x instanceof Date ? P.x : new Date(P.x),
      y: P.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, B]
  );
  return /* @__PURE__ */ n.jsx(Kh, { children: /* @__PURE__ */ n.jsxs(
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
            width: F.xScale.range()[1] + 56 + 16,
            height: F.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ n.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ n.jsx(Co, { type: "x" }),
              /* @__PURE__ */ n.jsx(Co, { type: "y" }),
              /* @__PURE__ */ n.jsx(mh, { axis: "y" }),
              E,
              ee,
              N.map((y, P) => {
                const Z = w[y];
                if (!Z) return null;
                const te = $(Z.x instanceof Date ? Z.x : new Date(Z.x));
                return /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    x1: te,
                    x2: te,
                    y1: 0,
                    y2: M.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${P}`
                );
              }),
              x?.mean.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                x.mean.map((y, P) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__cl", x1: y.x1, x2: y.x2, y1: y.y, y2: y.y }, `mean-${P}`)),
                x.mean.map((y, P) => {
                  if (P === x.mean.length - 1) return null;
                  const Z = x.mean[P + 1];
                  if (!Z || y.y === Z.y) return null;
                  const V = Math.max(4, Z.x1 - y.x2 || 0) * 0.5, A = `M ${y.x2},${y.y} C ${y.x2 + V},${y.y} ${Z.x1 - V},${Z.y} ${Z.x1},${Z.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__cl fdp-spc__cl-join", d: A, fill: "none" }, `mean-join-${P}`);
                })
              ] }) : null,
              m != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ n.jsx(n.Fragment, {}),
              x?.ucl.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--ucl", children: [
                x.ucl.map((y, P) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--ucl", x1: y.x1, x2: y.x2, y1: y.y, y2: y.y, strokeWidth: 2 }, `ucl-${P}`)),
                x.ucl.map((y, P) => {
                  if (P === x.ucl.length - 1) return null;
                  const Z = x.ucl[P + 1];
                  if (!Z || y.y === Z.y) return null;
                  const V = Math.max(4, Z.x1 - y.x2 || 0) * 0.5, A = `M ${y.x2},${y.y} C ${y.x2 + V},${y.y} ${Z.x1 - V},${Z.y} ${Z.x1},${Z.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join", d: A, fill: "none", strokeWidth: 2 }, `ucl-join-${P}`);
                })
              ] }) : null,
              x?.lcl.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--lcl", children: [
                x.lcl.map((y, P) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--lcl", x1: y.x1, x2: y.x2, y1: y.y, y2: y.y, strokeWidth: 2 }, `lcl-${P}`)),
                x.lcl.map((y, P) => {
                  if (P === x.lcl.length - 1) return null;
                  const Z = x.lcl[P + 1];
                  if (!Z || y.y === Z.y) return null;
                  const V = Math.max(4, Z.x1 - y.x2 || 0) * 0.5, A = `M ${y.x2},${y.y} C ${y.x2 + V},${y.y} ${Z.x1 - V},${Z.y} ${Z.x1},${Z.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join", d: A, fill: "none", strokeWidth: 2 }, `lcl-join-${P}`);
                })
              ] }) : null,
              m != null && /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: $.range()[1],
                    y1: M(m),
                    y2: M(m),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: $.range()[0] - 7,
                    y: M(m) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      m,
                      " ",
                      v || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              o && x && x.mean.length > 0 && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                x.onePos.map((y, P) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: y.x1,
                    x2: y.x2,
                    y1: y.y,
                    y2: y.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${P}`
                )),
                x.oneNeg.map((y, P) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: y.x1,
                    x2: y.x2,
                    y1: y.y,
                    y2: y.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${P}`
                )),
                x.twoPos.map((y, P) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: y.x1,
                    x2: y.x2,
                    y1: y.y,
                    y2: y.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${P}`
                )),
                x.twoNeg.map((y, P) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: y.x1,
                    x2: y.x2,
                    y1: y.y,
                    y2: y.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${P}`
                ))
              ] }),
              /* @__PURE__ */ n.jsx(
                Zh,
                {
                  series: e[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (y) => y.x instanceof Date ? y.x : new Date(y.x),
                  smooth: !1,
                  strokeWidth: g
                }
              ),
              t && w.map((y, P) => {
                const Z = $(y.x instanceof Date ? y.x : new Date(y.x)), te = M(y.y), V = b.has(P), A = S?.[P], W = [
                  "fdp-spc__point",
                  V && s ? "fdp-spc__point--ooc" : null,
                  l && A?.special && A.concern ? "fdp-spc__point--sc-concern" : null,
                  l && A?.special && A.improvement ? "fdp-spc__point--sc-improvement" : null,
                  // Neutral (context-dependent) metrics: show purple when special cause present but neither improvement nor concern
                  l && u && A?.special && A.variation === Re.Neither ? "fdp-spc__point--sc-no-judgement" : null,
                  A?.assurance === Ht.Pass ? "fdp-spc__point--assurance-pass" : null,
                  A?.assurance === Ht.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), oe = `Point ${P + 1} value ${y.y}` + (A?.special ? " special cause" : "") + (A?.variation === Re.Improvement ? " improving" : A?.variation === Re.Concern ? " concern" : ""), O = L?.focused?.index === P;
                return /* @__PURE__ */ n.jsx(
                  "circle",
                  {
                    cx: Z,
                    cy: te,
                    r: 5,
                    className: W,
                    "data-variation": A?.variation,
                    "data-assurance": A?.assurance,
                    "aria-label": oe,
                    ...O ? { "aria-describedby": `spc-tooltip-${P}` } : {}
                  },
                  P
                );
              }),
              d && l && S && w.map((y, P) => {
                const Z = S[P];
                if (!Z || !(Z.concern || Z.improvement)) return null;
                const te = $(y.x instanceof Date ? y.x : new Date(y.x)), V = M(y.y);
                let A = V - 10;
                const W = 12, oe = M.range()[0] - 4;
                A < W && (A = Math.min(V + 16, oe));
                const O = $.range()[1], ce = Math.min(Math.max(te, 0), O - 0);
                return /* @__PURE__ */ n.jsx(
                  "text",
                  {
                    x: ce,
                    y: A,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${Z.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: Z.concern ? "!" : "★"
                  },
                  `icon-${P}`
                );
              }),
              D && /* @__PURE__ */ n.jsx(
                Cp,
                {
                  width: $.range()[1],
                  height: M.range()[0]
                }
              ),
              /* @__PURE__ */ n.jsx(
                Ui,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: se,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (y) => U(y),
                  enableNeutralNoJudgement: u,
                  showTrendGatingExplanation: R
                }
              )
            ] })
          }
        ),
        r && /* @__PURE__ */ n.jsx(
          Jh,
          {
            format: (y) => B({ ...y, x: y.x instanceof Date ? y.x : new Date(y.x) })
          }
        )
      ]
    }
  ) });
}, Cp = ({
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
        const s = a.currentTarget.getBoundingClientRect(), i = a.clientX - s.left, l = a.clientY - s.top;
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
}, jp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: Rt,
  Direction: je,
  MetricPolarity: Ue,
  SPCAssuranceIcon: Wr,
  SPCVariationIcon: Or,
  VariationJudgement: nt,
  VariationState: Me,
  getVariationColour: ks,
  getVariationTrend: zr
}, Symbol.toStringTag, { value: "Module" })), rb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: Ht,
  AssuranceResult: Rt,
  BaselineSuggestionReason: Hi,
  ChartType: bs,
  Direction: je,
  Icons: jp,
  ImprovementDirection: Ye,
  MetricPolarity: Ue,
  SPCAssuranceIcon: Wr,
  SPCChart: Sp,
  SPCTooltipOverlay: Ui,
  SPCVariationIcon: Or,
  SpcWarningCategory: Pi,
  SpcWarningCode: Ri,
  SpcWarningSeverity: Pt,
  VARIATION_COLOR_TOKENS: ct,
  VariationIcon: Re,
  VariationJudgement: nt,
  VariationState: Me,
  buildSpc: ys,
  extractRuleIds: _s,
  getVariationColorHex: gp,
  getVariationColorToken: Wi,
  getVariationColour: ks,
  getVariationTrend: zr,
  ruleGlossary: vs,
  variationLabel: ws
}, Symbol.toStringTag, { value: "Module" })), Np = "150ms", Tp = "300ms", $p = "500ms", Dp = "cubic-bezier(0.4, 0, 1, 1)", Ip = "cubic-bezier(0, 0, 0.2, 1)", Mp = "cubic-bezier(0.4, 0, 0.2, 1)", Lp = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Ap = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Fp = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Bp = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Ep = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Pp = "1px", Rp = "2px", Hp = "4px", zp = "4px", Op = "4px", Wp = "2px", Up = "1px", Gp = "0px", Vp = "4px", Yp = "8px", qp = "12px", Yi = "#d8dde0", qi = "#4c6272", Xi = "#d8dde0", Ki = "#aeb7bd", Zi = "#d5281b", Ji = "#005eb8", Qi = "#ffffff", el = "#212b32", tl = "#007f3b", nl = "#330072", rl = "#7c2855", al = "#d5281b", sl = "#ffeb3b", ol = "#fff9c4", il = "#ffb81c", ll = "#ed8b00", cl = "#00a499", dl = "#ae2573", ul = "#4c6272", fl = "#768692", hl = "#aeb7bd", pl = "#d8dde0", ml = "#f0f4f5", Xp = "#212b32", Kp = "#4c6272", Zp = "#ffffff", Jp = "#212b32", Qp = "#005eb8", em = "#7c2855", tm = "#003087", nm = "#330072", rm = "#ffeb3b", am = "#212b32", sm = "#d8dde0", om = "#ffffff33", im = "#d5281b", lm = "#4c6272", cm = "#ffffff", dm = "#007f3b", um = "#ffffff", fm = "#006530", hm = "#004021", pm = "#004021", mm = "#00000000", gm = "#ffffff", xm = "#005eb8", bm = "#005eb8", ym = "#d9e5f2", vm = "#c7daf0", _m = "#005eb8", wm = "#ffffff", Sm = "#212b32", km = "#d9dde0", Cm = "#b3bcc2", jm = "#b3bcc2", Nm = "#d5281b", Tm = "#aa2016", $m = "#6a140e", Dm = "#6a140e", Im = "#005eb8", Mm = "#004b93", Lm = "#002f5c", Am = "#002f5c", Fm = "8px", Bm = "16px", Em = "12px", Pm = "16px", Rm = "4px", Hm = "40px", zm = "4px", Om = "40px", Wm = "12px", Um = "16px", Gm = "32px", Vm = "16px", Ym = "20px", qm = "28px", Xm = "9px", Km = "2px", Zm = "16px", Jm = "24px", Qm = "8px", eg = "24px", tg = "16px", ng = "4px", rg = "4px", ag = "4px", sg = "8px", og = "4px", ig = "16px", lg = "#007f3b", cg = "#006530", dg = "#004021", ug = "#d8dde0", fg = "#ffffff", hg = "#768692", pg = "#00000000", mg = "#ffeb3b", gg = "#00000000", xg = "#ffffff", bg = "#d9e5f2", yg = "#c7daf0", vg = "#005eb8", _g = "#005eb8", gl = "8px", xl = "16px", bl = "12px", yl = "16px", wg = "2px", Sg = "4px", kg = "4px", Cg = "600", jg = "#ffffff", Ng = "#d8dde0", Tg = "#aeb7bd", $g = "#f0f4f5", Dg = "#212b32", Ig = "#212b32", Mg = "#005eb8", vl = "16px", _l = "32px", wl = "16px", Lg = "1px", Ag = "4px", Fg = "none", Bg = "0 2px 4px rgba(0, 0, 0, 0.1)", Eg = "#ffffff", Pg = "#ffffff", Rg = "#d8dde0", Hg = "#ffffff", zg = "#4c6272", Og = "#ffeb3b", Wg = "#d5281b", Ug = "#aeb7bd", Gg = "#212b32", Vg = "#4c6272", Yg = "#768692", qg = "#212b32", Xg = "#ffffff", Kg = "600", Zg = "#d5281b", Jg = "600", Qg = "#4c6272", Sl = "4px", kl = "40px", Cl = "40px", jl = "12px", e0 = "2px", t0 = "4px", n0 = "0px", r0 = "16px", a0 = "18px", s0 = "24px", o0 = "32px", i0 = "34px", l0 = "32px", c0 = "40px", d0 = "48px", u0 = "5.4ex", f0 = "7.2ex", h0 = "9ex", p0 = "10.8ex", m0 = "20ex", g0 = "38ex", x0 = "56ex", b0 = "44px", y0 = "40px", v0 = "1020px", _0 = "100%", w0 = "50%", S0 = "33.333%", k0 = "25%", C0 = "20%", j0 = "320px", N0 = "641px", T0 = "1025px", $0 = "1280px", D0 = "960px", I0 = "32px", M0 = "16px", L0 = "#d5281b", A0 = "#d5281b", F0 = "#ffffff", B0 = "#007f3b", E0 = "#007f3b", P0 = "#ffffff", R0 = "#ffeb3b", H0 = "#ffeb3b", z0 = "#212b32", O0 = "#005eb8", W0 = "#005eb8", U0 = "#ffffff", G0 = "#d8dde0", V0 = "#aeb7bd", Y0 = "#768692", q0 = "0 4px 0 #004021", X0 = "0 4px 0 #005eb8", K0 = "0 4px 0 #6a140e", Z0 = "0 4px 0 #ffeb3b", J0 = "none", Q0 = "0 2px 4px rgba(0, 0, 0, 0.1)", ex = "4px", tx = "0px", nx = "solid", rx = "0 0 0 3px #ffeb3b", ax = "0 0 0 3px #ffeb3b", sx = "none", ox = "0 1px 3px rgba(0, 0, 0, 0.12)", ix = "0 2px 6px rgba(0, 0, 0, 0.16)", lx = "0 4px 12px rgba(0, 0, 0, 0.20)", Nl = "0", Tl = "4px", $l = "8px", Dl = "16px", Il = "24px", Ml = "32px", Ll = "40px", Al = "48px", Fl = "56px", Bl = "64px", Fa = "0", Ba = "0", Ea = "4px", Pa = "4px", Ra = "8px", Ha = "8px", za = "8px", Oa = "16px", Wa = "16px", Ua = "24px", Ga = "24px", Va = "32px", Ya = "32px", qa = "40px", Xa = "40px", Ka = "48px", Za = "48px", Ja = "56px", Qa = "56px", es = "64px", dr = "Frutiger W01", ur = "Arial, Helvetica, sans-serif", fr = "sans-serif", hr = "400", pr = "600", mr = "400", gr = "12px", xr = "14px", br = "12pt", yr = "14px", vr = "16px", _r = "12pt", wr = "16px", Sr = "19px", kr = "13pt", Cr = "19px", jr = "22px", Nr = "15pt", Tr = "22px", $r = "26px", Dr = "17pt", Ir = "27px", Mr = "36px", Lr = "20pt", Ar = "33px", Fr = "48px", Br = "24pt", ts = "16px", ns = "24px", vt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, _t = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, St = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, kt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ct = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, jt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Nt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Tt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, $t = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, cx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Np,
  AnimationDurationNormal: Tp,
  AnimationDurationSlow: $p,
  AnimationEasingBounce: Lp,
  AnimationEasingEaseIn: Dp,
  AnimationEasingEaseInOut: Mp,
  AnimationEasingEaseOut: Ip,
  BorderColorCard: Xi,
  BorderColorCardHover: Ki,
  BorderColorDefault: Yi,
  BorderColorError: Zi,
  BorderColorForm: qi,
  BorderRadiusLarge: qp,
  BorderRadiusMedium: Yp,
  BorderRadiusNone: Gp,
  BorderRadiusSmall: Vp,
  BorderWidthCardBottom: zp,
  BorderWidthDefault: Pp,
  BorderWidthFormElement: Rp,
  BorderWidthFormElementError: Hp,
  BorderWidthPanel: Op,
  BorderWidthTableCell: Up,
  BorderWidthTableHeader: Wp,
  BreakpointDesktop: T0,
  BreakpointLargeDesktop: $0,
  BreakpointMobile: j0,
  BreakpointTablet: N0,
  ButtonBorderRadius: Sg,
  ButtonBorderWidth: wg,
  ButtonPrimaryBackgroundActive: dg,
  ButtonPrimaryBackgroundDefault: lg,
  ButtonPrimaryBackgroundDisabled: ug,
  ButtonPrimaryBackgroundHover: cg,
  ButtonPrimaryBorderDefault: pg,
  ButtonPrimaryBorderFocus: mg,
  ButtonPrimaryTextDefault: fg,
  ButtonPrimaryTextDisabled: hg,
  ButtonSecondaryBackgroundActive: yg,
  ButtonSecondaryBackgroundDefault: gg,
  ButtonSecondaryBackgroundHover: bg,
  ButtonSecondaryBackgroundSolid: xg,
  ButtonSecondaryBorderDefault: _g,
  ButtonSecondaryTextDefault: vg,
  ButtonShadowSize: kg,
  ButtonSpacingPaddingHorizontalDesktop: yl,
  ButtonSpacingPaddingHorizontalMobile: xl,
  ButtonSpacingPaddingVerticalDesktop: bl,
  ButtonSpacingPaddingVerticalMobile: gl,
  ButtonTypographyWeight: Cg,
  CardBackgroundDefault: jg,
  CardBorderBottom: $g,
  CardBorderDefault: Ng,
  CardBorderHover: Tg,
  CardBorderWidthBottom: Ag,
  CardBorderWidthDefault: Lg,
  CardShadowDefault: Fg,
  CardShadowHover: Bg,
  CardSpacingHeadingMargin: wl,
  CardSpacingPaddingDesktop: _l,
  CardSpacingPaddingMobile: vl,
  CardTextDescription: Ig,
  CardTextHeading: Dg,
  CardTextLink: Mg,
  ColorBorderDefault: sm,
  ColorBorderSecondary: om,
  ColorButtonLoginActive: Lm,
  ColorButtonLoginBackground: Im,
  ColorButtonLoginHover: Mm,
  ColorButtonLoginShadow: Am,
  ColorButtonPrimaryActive: hm,
  ColorButtonPrimaryBackground: dm,
  ColorButtonPrimaryHover: fm,
  ColorButtonPrimaryShadow: pm,
  ColorButtonPrimaryText: um,
  ColorButtonReverseActive: Cm,
  ColorButtonReverseBackground: wm,
  ColorButtonReverseHover: km,
  ColorButtonReverseShadow: jm,
  ColorButtonReverseText: Sm,
  ColorButtonSecondaryActive: vm,
  ColorButtonSecondaryBackground: mm,
  ColorButtonSecondaryBackgroundSolid: gm,
  ColorButtonSecondaryBorder: xm,
  ColorButtonSecondaryHover: ym,
  ColorButtonSecondaryShadow: _m,
  ColorButtonSecondaryText: bm,
  ColorButtonWarningActive: $m,
  ColorButtonWarningBackground: Nm,
  ColorButtonWarningHover: Tm,
  ColorButtonWarningShadow: Dm,
  ColorError: im,
  ColorFocusBackground: rm,
  ColorFocusText: am,
  ColorFormBackground: cm,
  ColorFormBorder: lm,
  ColorGrey1: ul,
  ColorGrey2: fl,
  ColorGrey3: hl,
  ColorGrey4: pl,
  ColorGrey5: ml,
  ColorLinkActive: tm,
  ColorLinkDefault: Qp,
  ColorLinkHover: em,
  ColorLinkVisited: nm,
  ColorPrimaryBlack: el,
  ColorPrimaryBlue: Ji,
  ColorPrimaryDarkPink: rl,
  ColorPrimaryGreen: tl,
  ColorPrimaryPurple: nl,
  ColorPrimaryRed: al,
  ColorPrimaryWhite: Qi,
  ColorPrimaryYellow: sl,
  ColorSecondaryAquaGreen: cl,
  ColorSecondaryOrange: ll,
  ColorSecondaryPaleYellow: ol,
  ColorSecondaryPink: dl,
  ColorSecondaryWarmYellow: il,
  ColorTextPrimary: Xp,
  ColorTextPrint: Jp,
  ColorTextReverse: Zp,
  ColorTextSecondary: Kp,
  ComponentBlur: rg,
  ComponentBreadcrumbChevronMarginLeft: Xm,
  ComponentBreadcrumbChevronMarginRight: Km,
  ComponentBreadcrumbPaddingTopDesktop: Jm,
  ComponentBreadcrumbPaddingTopMobile: Zm,
  ComponentButtonPaddingDesktopHorizontal: Pm,
  ComponentButtonPaddingDesktopVertical: Em,
  ComponentButtonPaddingMobileHorizontal: Bm,
  ComponentButtonPaddingMobileVertical: Fm,
  ComponentButtonShadowSize: Rm,
  ComponentCardHeadingMargin: Vm,
  ComponentCardPaddingDesktop: Gm,
  ComponentCardPaddingMobile: Um,
  ComponentDetails: sg,
  ComponentExpander: og,
  ComponentFormCheckboxLabelPadding: Wm,
  ComponentFormCheckboxSize: Om,
  ComponentFormInputMinHeight: Hm,
  ComponentFormInputPadding: zm,
  ComponentLink: ag,
  ComponentPagination: ig,
  ComponentPanelPaddingDesktop: qm,
  ComponentPanelPaddingMobile: Ym,
  ComponentSpread: ng,
  ComponentSummaryListCellPaddingHorizontal: eg,
  ComponentSummaryListCellPaddingVertical: Qm,
  ComponentSummaryListRowMargin: tg,
  ElevationHigh: lx,
  ElevationLow: ox,
  ElevationMedium: ix,
  ElevationNone: sx,
  FocusOutlineOffset: tx,
  FocusOutlineStyle: nx,
  FocusOutlineWidth: ex,
  FocusShadowButton: ax,
  FocusShadowInput: rx,
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
  FontSize26Print: Dr,
  FontSize26Tablet: $r,
  FontSize36Mobile: Ir,
  FontSize36Print: Lr,
  FontSize36Tablet: Mr,
  FontSize48Mobile: Ar,
  FontSize48Print: Br,
  FontSize48Tablet: Fr,
  FontSizeBase: ts,
  FontWeightBold: pr,
  FontWeightLight: mr,
  FontWeightNormal: hr,
  FormBorderRadius: n0,
  FormBorderWidthDefault: e0,
  FormBorderWidthError: t0,
  FormErrorTextDefault: Zg,
  FormErrorTypographyWeight: Jg,
  FormHintTextDefault: Qg,
  FormInputBackgroundDefault: Eg,
  FormInputBackgroundDisabled: Rg,
  FormInputBackgroundError: Hg,
  FormInputBackgroundFocus: Pg,
  FormInputBorderDefault: zg,
  FormInputBorderDisabled: Ug,
  FormInputBorderError: Wg,
  FormInputBorderFocus: Og,
  FormInputTextDefault: Gg,
  FormInputTextDisabled: Yg,
  FormInputTextPlaceholder: Vg,
  FormLabelTextDefault: qg,
  FormLabelTextRequired: Xg,
  FormLabelTypographyWeight: Kg,
  FormSpacingCheckboxLabelPadding: jl,
  FormSpacingCheckboxSize: Cl,
  FormSpacingInputMinHeight: kl,
  FormSpacingInputPadding: Sl,
  GridGutter: I0,
  GridGutterHalf: M0,
  GridPageWidth: D0,
  HeadingsNhsukHeadingL: _t,
  HeadingsNhsukHeadingM: wt,
  HeadingsNhsukHeadingS: St,
  HeadingsNhsukHeadingXl: vt,
  HeadingsNhsukHeadingXs: kt,
  LayoutColumnActions: C0,
  LayoutColumnFull: _0,
  LayoutColumnHalf: w0,
  LayoutColumnQuarter: k0,
  LayoutColumnThird: S0,
  LayoutContainerMaxWidth: v0,
  ParagraphsBody: Ct,
  ParagraphsBodyLarge: jt,
  ParagraphsBodySmall: Nt,
  ParagraphsLedeText: Tt,
  ParagraphsLedeTextSmall: $t,
  ShadowButtonDefault: q0,
  ShadowButtonFocus: Z0,
  ShadowButtonSecondary: X0,
  ShadowButtonWarning: K0,
  ShadowCardDefault: J0,
  ShadowCardHover: Q0,
  SizeButtonMinHeightDesktop: y0,
  SizeButtonMinHeightMobile: b0,
  SizeFormControlLarge: d0,
  SizeFormControlMedium: c0,
  SizeFormControlSmall: l0,
  SizeFormInputWidth2xl: g0,
  SizeFormInputWidth3xl: x0,
  SizeFormInputWidthLg: p0,
  SizeFormInputWidthMd: h0,
  SizeFormInputWidthSm: f0,
  SizeFormInputWidthXl: m0,
  SizeFormInputWidthXs: u0,
  SizeIconExtraLarge: o0,
  SizeIconLarge: s0,
  SizeIconMedium: a0,
  SizeIconNhsDefault: i0,
  SizeIconSmall: r0,
  Spacing0: Nl,
  Spacing1: Tl,
  Spacing2: $l,
  Spacing3: Dl,
  Spacing4: Il,
  Spacing5: Ml,
  Spacing6: Ll,
  Spacing7: Al,
  Spacing8: Fl,
  Spacing9: Bl,
  SpacingResponsive0Mobile: Fa,
  SpacingResponsive0Tablet: Ba,
  SpacingResponsive1Mobile: Ea,
  SpacingResponsive1Tablet: Pa,
  SpacingResponsive2Mobile: Ra,
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
  StateDisabledBackground: G0,
  StateDisabledBorder: V0,
  StateDisabledText: Y0,
  StateErrorBackground: L0,
  StateErrorBorder: A0,
  StateErrorText: F0,
  StateInfoBackground: O0,
  StateInfoBorder: W0,
  StateInfoText: U0,
  StateSuccessBackground: B0,
  StateSuccessBorder: E0,
  StateSuccessText: P0,
  StateWarningBackground: R0,
  StateWarningBorder: H0,
  StateWarningText: z0,
  TransitionButtonDefault: Ap,
  TransitionButtonShadow: Fp,
  TransitionCardHover: Ep,
  TransitionInputFocus: Bp
}, Symbol.toStringTag, { value: "Module" })), ab = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), sb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: vt.fontFamily,
      fontWeight: vt.fontWeight,
      fontSize: vt.fontSize.mobile,
      lineHeight: vt.lineHeight,
      marginTop: vt.marginTop,
      marginBottom: vt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), ob = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: _t.fontFamily,
      fontWeight: _t.fontWeight,
      fontSize: _t.fontSize.mobile,
      lineHeight: _t.lineHeight,
      marginTop: _t.marginTop,
      marginBottom: _t.marginBottom.mobile,
      ...r
    },
    children: e
  }
), ib = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: wt.fontFamily,
      fontWeight: wt.fontWeight,
      fontSize: wt.fontSize.mobile,
      lineHeight: wt.lineHeight,
      marginTop: wt.marginTop,
      marginBottom: wt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), lb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: St.fontFamily,
      fontWeight: St.fontWeight,
      fontSize: St.fontSize.mobile,
      lineHeight: St.lineHeight,
      marginTop: St.marginTop,
      marginBottom: St.marginBottom.mobile,
      ...r
    },
    children: e
  }
), cb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: kt.fontFamily,
      fontWeight: kt.fontWeight,
      fontSize: kt.fontSize.mobile,
      lineHeight: kt.lineHeight,
      marginTop: kt.marginTop,
      marginBottom: kt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), db = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), ub = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), fb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), hb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), pb = ({
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
), mb = () => De(() => cx, []), gb = () => De(() => ({
  // Border colors
  BorderColorDefault: Yi,
  BorderColorForm: qi,
  BorderColorCard: Xi,
  BorderColorCardHover: Ki,
  BorderColorError: Zi,
  // Primary colors
  ColorPrimaryBlue: Ji,
  ColorPrimaryWhite: Qi,
  ColorPrimaryBlack: el,
  ColorPrimaryGreen: tl,
  ColorPrimaryPurple: nl,
  ColorPrimaryDarkPink: rl,
  ColorPrimaryRed: al,
  ColorPrimaryYellow: sl,
  // Secondary colors
  ColorSecondaryPaleYellow: ol,
  ColorSecondaryWarmYellow: il,
  ColorSecondaryOrange: ll,
  ColorSecondaryAquaGreen: cl,
  ColorSecondaryPink: dl,
  // Grey scale
  ColorGrey1: ul,
  ColorGrey2: fl,
  ColorGrey3: hl,
  ColorGrey4: pl,
  ColorGrey5: ml
}), []), xb = () => De(() => ({
  Spacing0: Nl,
  Spacing1: Tl,
  Spacing2: $l,
  Spacing3: Dl,
  Spacing4: Il,
  Spacing5: Ml,
  Spacing6: Ll,
  Spacing7: Al,
  Spacing8: Fl,
  Spacing9: Bl
}), []), bb = () => De(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: gr,
    Size16: yr,
    Size19: wr,
    Size22: Cr,
    Size26: Tr,
    Size36: Ir,
    Size48: Ar
  },
  Tablet: {
    Size14: xr,
    Size16: vr,
    Size19: Sr,
    Size22: jr,
    Size26: $r,
    Size36: Mr,
    Size48: Fr
  },
  Print: {
    Size14: br,
    Size16: _r,
    Size19: kr,
    Size22: Nr,
    Size26: Dr,
    Size36: Lr,
    Size48: Br
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
  FontSize26Tablet: $r,
  FontSize26Print: Dr,
  FontSize36Mobile: Ir,
  FontSize36Tablet: Mr,
  FontSize36Print: Lr,
  FontSize48Mobile: Ar,
  FontSize48Tablet: Fr,
  FontSize48Print: Br,
  FontSizeBase: ts,
  FontLineHeightBase: ns
}), []), yb = () => De(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Fa,
    Size1: Ea,
    Size2: Ra,
    Size3: za,
    Size4: Wa,
    Size5: Ga,
    Size6: Ya,
    Size7: Xa,
    Size8: Za,
    Size9: Qa
  },
  Tablet: {
    Size0: Ba,
    Size1: Pa,
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
  SpacingResponsive0Mobile: Fa,
  SpacingResponsive0Tablet: Ba,
  SpacingResponsive1Mobile: Ea,
  SpacingResponsive1Tablet: Pa,
  SpacingResponsive2Mobile: Ra,
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
}), []), vb = () => De(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: gl,
  ButtonSpacingPaddingHorizontalMobile: xl,
  ButtonSpacingPaddingVerticalDesktop: bl,
  ButtonSpacingPaddingHorizontalDesktop: yl,
  // Card spacing	
  CardSpacingPaddingMobile: vl,
  CardSpacingPaddingDesktop: _l,
  CardSpacingHeadingMargin: wl,
  // Form spacing
  FormSpacingInputPadding: Sl,
  FormSpacingInputMinHeight: kl,
  FormSpacingCheckboxSize: Cl,
  FormSpacingCheckboxLabelPadding: jl
}), []), _b = () => De(() => ({
  xl: vt,
  l: _t,
  m: wt,
  s: St,
  xs: kt
}), []), wb = () => De(() => ({
  body: Ct,
  bodyLarge: jt,
  bodySmall: Nt,
  ledeText: Tt,
  ledeTextSmall: $t
}), []), Sb = () => De(() => ({
  headings: {
    xl: vt,
    l: _t,
    m: wt,
    s: St,
    xs: kt
  },
  paragraphs: {
    body: Ct,
    bodyLarge: jt,
    bodySmall: Nt,
    ledeText: Tt,
    ledeTextSmall: $t
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
        size36: Ir,
        size48: Ar
      },
      tablet: {
        size14: xr,
        size16: vr,
        size19: Sr,
        size22: jr,
        size26: $r,
        size36: Mr,
        size48: Fr
      },
      print: {
        size14: br,
        size16: _r,
        size19: kr,
        size22: Nr,
        size26: Dr,
        size36: Lr,
        size48: Br
      }
    }
  }
}), []);
function kb(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: r = "two-column" } = e, [a, o] = X.useState(t), s = X.useCallback(() => o("three-column"), []), i = X.useCallback(() => o((d) => d === "three-column" ? r : d), [r]), l = X.useCallback(() => o((d) => d === "three-column" ? r : "three-column"), [r]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const El = {
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
function Cb(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...El, ...e }, a = [];
  return r?.includes(400) && a.push(`
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
}`), r?.includes(600) && a.push(`
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
function jb(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...El, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${rt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${rt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${rt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${rt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const Nb = '"Frutiger W01", Arial, Helvetica, sans-serif', Tb = "Arial, Helvetica, sans-serif";
async function $b() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  sc as Account,
  px as ActionLink,
  Wx as AdaptiveDataGrid,
  Np as AnimationDurationFast,
  Tp as AnimationDurationNormal,
  $p as AnimationDurationSlow,
  Lp as AnimationEasingBounce,
  Dp as AnimationEasingEaseIn,
  Mp as AnimationEasingEaseInOut,
  Ip as AnimationEasingEaseOut,
  di as AppointmentCard,
  Zx as AreaSeriesPrimitive,
  xf as AriaDataGrid,
  Ca as AriaTabsDataGrid,
  Wx as AriaTabsDataGridAdaptive,
  Co as Axis,
  ba as BackLink,
  Qx as BandScalesProvider,
  Jx as BarSeriesPrimitive,
  Xi as BorderColorCard,
  Ki as BorderColorCardHover,
  Yi as BorderColorDefault,
  Zi as BorderColorError,
  qi as BorderColorForm,
  qp as BorderRadiusLarge,
  Yp as BorderRadiusMedium,
  Gp as BorderRadiusNone,
  Vp as BorderRadiusSmall,
  zp as BorderWidthCardBottom,
  Pp as BorderWidthDefault,
  Rp as BorderWidthFormElement,
  Hp as BorderWidthFormElementError,
  Op as BorderWidthPanel,
  Up as BorderWidthTableCell,
  Wp as BorderWidthTableHeader,
  ef as Breadcrumb,
  T0 as BreakpointDesktop,
  $0 as BreakpointLargeDesktop,
  j0 as BreakpointMobile,
  N0 as BreakpointTablet,
  et as Button,
  Sg as ButtonBorderRadius,
  wg as ButtonBorderWidth,
  dg as ButtonPrimaryBackgroundActive,
  lg as ButtonPrimaryBackgroundDefault,
  ug as ButtonPrimaryBackgroundDisabled,
  cg as ButtonPrimaryBackgroundHover,
  pg as ButtonPrimaryBorderDefault,
  mg as ButtonPrimaryBorderFocus,
  fg as ButtonPrimaryTextDefault,
  hg as ButtonPrimaryTextDisabled,
  yg as ButtonSecondaryBackgroundActive,
  gg as ButtonSecondaryBackgroundDefault,
  bg as ButtonSecondaryBackgroundHover,
  xg as ButtonSecondaryBackgroundSolid,
  _g as ButtonSecondaryBorderDefault,
  vg as ButtonSecondaryTextDefault,
  kg as ButtonShadowSize,
  yl as ButtonSpacingPaddingHorizontalDesktop,
  xl as ButtonSpacingPaddingHorizontalMobile,
  bl as ButtonSpacingPaddingVerticalDesktop,
  gl as ButtonSpacingPaddingVerticalMobile,
  Cg as ButtonTypographyWeight,
  si as Card,
  jg as CardBackgroundDefault,
  $g as CardBorderBottom,
  Ng as CardBorderDefault,
  Tg as CardBorderHover,
  Ag as CardBorderWidthBottom,
  Lg as CardBorderWidthDefault,
  Ix as CardGroup,
  Mx as CardGroupItem,
  Fg as CardShadowDefault,
  Bg as CardShadowHover,
  wl as CardSpacingHeadingMargin,
  _l as CardSpacingPaddingDesktop,
  vl as CardSpacingPaddingMobile,
  Ig as CardTextDescription,
  Dg as CardTextHeading,
  Mg as CardTextLink,
  Lx as CareCard,
  mx as CharacterCount,
  tb as ChartEnhancer,
  eb as ChartNoScript,
  hh as ChartRoot,
  dc as Checkbox,
  hc as Checkboxes,
  sm as ColorBorderDefault,
  om as ColorBorderSecondary,
  Lm as ColorButtonLoginActive,
  Im as ColorButtonLoginBackground,
  Mm as ColorButtonLoginHover,
  Am as ColorButtonLoginShadow,
  hm as ColorButtonPrimaryActive,
  dm as ColorButtonPrimaryBackground,
  fm as ColorButtonPrimaryHover,
  pm as ColorButtonPrimaryShadow,
  um as ColorButtonPrimaryText,
  Cm as ColorButtonReverseActive,
  wm as ColorButtonReverseBackground,
  km as ColorButtonReverseHover,
  jm as ColorButtonReverseShadow,
  Sm as ColorButtonReverseText,
  vm as ColorButtonSecondaryActive,
  mm as ColorButtonSecondaryBackground,
  gm as ColorButtonSecondaryBackgroundSolid,
  xm as ColorButtonSecondaryBorder,
  ym as ColorButtonSecondaryHover,
  _m as ColorButtonSecondaryShadow,
  bm as ColorButtonSecondaryText,
  $m as ColorButtonWarningActive,
  Nm as ColorButtonWarningBackground,
  Tm as ColorButtonWarningHover,
  Dm as ColorButtonWarningShadow,
  im as ColorError,
  rm as ColorFocusBackground,
  am as ColorFocusText,
  cm as ColorFormBackground,
  lm as ColorFormBorder,
  ul as ColorGrey1,
  fl as ColorGrey2,
  hl as ColorGrey3,
  pl as ColorGrey4,
  ml as ColorGrey5,
  tm as ColorLinkActive,
  Qp as ColorLinkDefault,
  em as ColorLinkHover,
  nm as ColorLinkVisited,
  el as ColorPrimaryBlack,
  Ji as ColorPrimaryBlue,
  rl as ColorPrimaryDarkPink,
  tl as ColorPrimaryGreen,
  nl as ColorPrimaryPurple,
  al as ColorPrimaryRed,
  Qi as ColorPrimaryWhite,
  sl as ColorPrimaryYellow,
  cl as ColorSecondaryAquaGreen,
  ll as ColorSecondaryOrange,
  ol as ColorSecondaryPaleYellow,
  dl as ColorSecondaryPink,
  il as ColorSecondaryWarmYellow,
  Xp as ColorTextPrimary,
  Jp as ColorTextPrint,
  Zp as ColorTextReverse,
  Kp as ColorTextSecondary,
  jn as Column,
  rg as ComponentBlur,
  Xm as ComponentBreadcrumbChevronMarginLeft,
  Km as ComponentBreadcrumbChevronMarginRight,
  Jm as ComponentBreadcrumbPaddingTopDesktop,
  Zm as ComponentBreadcrumbPaddingTopMobile,
  Pm as ComponentButtonPaddingDesktopHorizontal,
  Em as ComponentButtonPaddingDesktopVertical,
  Bm as ComponentButtonPaddingMobileHorizontal,
  Fm as ComponentButtonPaddingMobileVertical,
  Rm as ComponentButtonShadowSize,
  Vm as ComponentCardHeadingMargin,
  Gm as ComponentCardPaddingDesktop,
  Um as ComponentCardPaddingMobile,
  sg as ComponentDetails,
  og as ComponentExpander,
  Wm as ComponentFormCheckboxLabelPadding,
  Om as ComponentFormCheckboxSize,
  Hm as ComponentFormInputMinHeight,
  zm as ComponentFormInputPadding,
  ag as ComponentLink,
  ig as ComponentPagination,
  qm as ComponentPanelPaddingDesktop,
  Ym as ComponentPanelPaddingMobile,
  ng as ComponentSpread,
  eg as ComponentSummaryListCellPaddingHorizontal,
  Qm as ComponentSummaryListCellPaddingVertical,
  tg as ComponentSummaryListRowMargin,
  Lo as Container,
  Dx as ContentsList,
  El as DEFAULT_FONT_CONFIG,
  Hx as DashboardSummaryGrid,
  kx as DateInput,
  lf as Details,
  cf as DoDontList,
  lx as ElevationHigh,
  ox as ElevationLow,
  ix as ElevationMedium,
  sx as ElevationNone,
  Ls as ErrorMessage,
  Sx as ErrorSummary,
  df as Expander,
  rt as FRUTIGER_FONT_FILES,
  ss as Fieldset,
  tx as FocusOutlineOffset,
  nx as FocusOutlineStyle,
  ex as FocusOutlineWidth,
  ax as FocusShadowButton,
  rx as FocusShadowInput,
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
  Dr as FontSize26Print,
  $r as FontSize26Tablet,
  Ir as FontSize36Mobile,
  Lr as FontSize36Print,
  Mr as FontSize36Tablet,
  Ar as FontSize48Mobile,
  Br as FontSize48Print,
  Fr as FontSize48Tablet,
  ts as FontSizeBase,
  pr as FontWeightBold,
  mr as FontWeightLight,
  hr as FontWeightNormal,
  Ro as Footer,
  n0 as FormBorderRadius,
  e0 as FormBorderWidthDefault,
  t0 as FormBorderWidthError,
  Zg as FormErrorTextDefault,
  Jg as FormErrorTypographyWeight,
  Qg as FormHintTextDefault,
  Eg as FormInputBackgroundDefault,
  Rg as FormInputBackgroundDisabled,
  Hg as FormInputBackgroundError,
  Pg as FormInputBackgroundFocus,
  zg as FormInputBorderDefault,
  Ug as FormInputBorderDisabled,
  Wg as FormInputBorderError,
  Og as FormInputBorderFocus,
  Gg as FormInputTextDefault,
  Yg as FormInputTextDisabled,
  Vg as FormInputTextPlaceholder,
  qg as FormLabelTextDefault,
  Xg as FormLabelTextRequired,
  Kg as FormLabelTypographyWeight,
  jl as FormSpacingCheckboxLabelPadding,
  Cl as FormSpacingCheckboxSize,
  kl as FormSpacingInputMinHeight,
  Sl as FormSpacingInputPadding,
  Tx as GanttChart,
  ya as Grid,
  I0 as GridGutter,
  M0 as GridGutterHalf,
  mh as GridLines,
  D0 as GridPageWidth,
  Po as Header,
  Nx as HeaderSSR,
  Nc as HeaderSearch,
  Po as HeaderStatic,
  Mt as Heading,
  _t as HeadingsNhsukHeadingL,
  wt as HeadingsNhsukHeadingM,
  St as HeadingsNhsukHeadingS,
  vt as HeadingsNhsukHeadingXl,
  kt as HeadingsNhsukHeadingXs,
  Tc as Hero,
  Io as Hint,
  Px as Images,
  rs as Input,
  Ax as InsetText,
  as as Label,
  C0 as LayoutColumnActions,
  _0 as LayoutColumnFull,
  w0 as LayoutColumnHalf,
  k0 as LayoutColumnQuarter,
  S0 as LayoutColumnThird,
  v0 as LayoutContainerMaxWidth,
  Kx as Legend,
  ph as LineScalesProvider,
  Zh as LineSeriesPrimitive,
  vc as List,
  Ao as MainWrapper,
  ui as MedicationCard,
  nb as MetricCard,
  db as NHSBodyText,
  ub as NHSBodyTextLarge,
  fb as NHSBodyTextSmall,
  sb as NHSHeading1,
  ob as NHSHeading2,
  ib as NHSHeading3,
  lb as NHSHeading4,
  cb as NHSHeading5,
  hb as NHSLedeText,
  pb as NHSLedeTextSmall,
  jx as NHSThemeProvider,
  Tb as NHS_FALLBACK_FONT_STACK,
  Nb as NHS_FONT_STACK,
  sh as NavigationSplitView,
  Gx as PageTemplate,
  $x as Pagination,
  tf as Panel,
  Ct as ParagraphsBody,
  jt as ParagraphsBodyLarge,
  Nt as ParagraphsBodySmall,
  Tt as ParagraphsLedeText,
  $t as ParagraphsLedeTextSmall,
  ci as PatientCard,
  ih as ProductRoadmap,
  gx as Radios,
  xx as RadiosServer,
  Wx as ResponsiveDataGrid,
  Ux as ResponsiveDataGridDemo,
  qt as Row,
  rb as SPC,
  Sp as SPCChart,
  Yn as Select,
  gc as SelectOption,
  q0 as ShadowButtonDefault,
  Z0 as ShadowButtonFocus,
  X0 as ShadowButtonSecondary,
  K0 as ShadowButtonWarning,
  J0 as ShadowCardDefault,
  Q0 as ShadowCardHover,
  y0 as SizeButtonMinHeightDesktop,
  b0 as SizeButtonMinHeightMobile,
  d0 as SizeFormControlLarge,
  c0 as SizeFormControlMedium,
  l0 as SizeFormControlSmall,
  g0 as SizeFormInputWidth2xl,
  x0 as SizeFormInputWidth3xl,
  p0 as SizeFormInputWidthLg,
  h0 as SizeFormInputWidthMd,
  f0 as SizeFormInputWidthSm,
  m0 as SizeFormInputWidthXl,
  u0 as SizeFormInputWidthXs,
  o0 as SizeIconExtraLarge,
  s0 as SizeIconLarge,
  a0 as SizeIconMedium,
  i0 as SizeIconNhsDefault,
  r0 as SizeIconSmall,
  ai as SkipLink,
  Rx as SlotMatrix,
  zx as SortStatusControl,
  Nl as Spacing0,
  Tl as Spacing1,
  $l as Spacing2,
  Dl as Spacing3,
  Il as Spacing4,
  Ml as Spacing5,
  Ll as Spacing6,
  Al as Spacing7,
  Fl as Spacing8,
  Bl as Spacing9,
  Fa as SpacingResponsive0Mobile,
  Ba as SpacingResponsive0Tablet,
  Ea as SpacingResponsive1Mobile,
  Pa as SpacingResponsive1Tablet,
  Ra as SpacingResponsive2Mobile,
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
  bx as SpacingUtilities,
  G0 as StateDisabledBackground,
  V0 as StateDisabledBorder,
  Y0 as StateDisabledText,
  L0 as StateErrorBackground,
  A0 as StateErrorBorder,
  F0 as StateErrorText,
  O0 as StateInfoBackground,
  W0 as StateInfoBorder,
  U0 as StateInfoText,
  B0 as StateSuccessBackground,
  E0 as StateSuccessBorder,
  P0 as StateSuccessText,
  R0 as StateWarningBackground,
  H0 as StateWarningBorder,
  z0 as StateWarningText,
  gf as SummaryCard,
  Fx as SummaryList,
  dt as Table,
  Bx as Tabs,
  Ge as Tag,
  uf as TaskList,
  pc as Textarea,
  Xx as TooltipOverlay,
  Kh as TooltipProvider,
  Vx as TransactionalPageTemplate,
  Ap as TransitionButtonDefault,
  Fp as TransitionButtonShadow,
  Ep as TransitionCardHover,
  Bp as TransitionInputFocus,
  qx as VisibilityProvider,
  fi as VitalsCard,
  wx as WIDTH_FRACTIONS,
  Ex as WarningCallout,
  xi as WidthContainer,
  vx as WidthUtilities,
  $b as checkFrutigerLoaded,
  gs as createGenericTabsConfig,
  Ox as createTCHTabsConfig,
  Cb as generateFrutigerFontFace,
  ab as getResponsiveStyles,
  yx as getSpacingClass,
  _x as getWidthClass,
  jb as preloadFrutigerFonts,
  Tf as tchDataConfig,
  gb as useColors,
  vb as useComponentSpacing,
  _b as useNHSHeadings,
  wb as useNHSParagraphs,
  Cx as useNHSTheme,
  Sb as useNHSTypographySystem,
  kb as useNavigationSplitDrill,
  nh as useNavigationSplitUrlSync,
  yi as useNhsFdpBreakpoints,
  yb as useResponsiveSpacing,
  Yx as useResponsiveValue,
  xb as useSpacing,
  mb as useTokens,
  bb as useTypography
};
//# sourceMappingURL=index.esm.js.map
