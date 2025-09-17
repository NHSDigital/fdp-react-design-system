import * as q from "react";
import bt, { useState as Fe, useEffect as We, useCallback as be, useRef as Ee, createElement as ui, useMemo as $e, useContext as Hc, createContext as Uc, forwardRef as Pn, useImperativeHandle as di, useReducer as fi, memo as Oc, useId as hr } from "react";
import { createPortal as Wc } from "react-dom";
function zc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ir = { exports: {} }, En = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo;
function Vc() {
  if (eo) return En;
  eo = 1;
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
  return En.Fragment = t, En.jsx = n, En.jsxs = n, En;
}
var Rn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var to;
function Gc() {
  return to || (to = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(B) {
      if (B == null) return null;
      if (typeof B == "function")
        return B.$$typeof === $ ? null : B.displayName || B.name || null;
      if (typeof B == "string") return B;
      switch (B) {
        case m:
          return "Fragment";
        case b:
          return "Profiler";
        case p:
          return "StrictMode";
        case j:
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
          case v:
            return "Portal";
          case L:
            return (B.displayName || "Context") + ".Provider";
          case T:
            return (B._context.displayName || "Context") + ".Consumer";
          case k:
            var H = B.render;
            return B = B.displayName, B || (B = H.displayName || H.name || "", B = B !== "" ? "ForwardRef(" + B + ")" : "ForwardRef"), B;
          case I:
            return H = B.displayName || null, H !== null ? H : e(B.type) || "Memo";
          case C:
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
        var V = H.error, se = typeof Symbol == "function" && Symbol.toStringTag && B[Symbol.toStringTag] || B.constructor.name || "Object";
        return V.call(
          H,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          se
        ), t(B);
      }
    }
    function a(B) {
      if (B === m) return "<>";
      if (typeof B == "object" && B !== null && B.$$typeof === C)
        return "<...>";
      try {
        var H = e(B);
        return H ? "<" + H + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var B = _.A;
      return B === null ? null : B.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(B) {
      if (x.call(B, "key")) {
        var H = Object.getOwnPropertyDescriptor(B, "key").get;
        if (H && H.isReactWarning) return !1;
      }
      return B.key !== void 0;
    }
    function l(B, H) {
      function V() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          H
        ));
      }
      V.isReactWarning = !0, Object.defineProperty(B, "key", {
        get: V,
        configurable: !0
      });
    }
    function u() {
      var B = e(this.type);
      return D[B] || (D[B] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), B = this.props.ref, B !== void 0 ? B : null;
    }
    function c(B, H, V, se, O, fe, we, ue) {
      return V = fe.ref, B = {
        $$typeof: g,
        type: B,
        key: H,
        props: fe,
        _owner: O
      }, (V !== void 0 ? V : null) !== null ? Object.defineProperty(B, "ref", {
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
        value: we
      }), Object.defineProperty(B, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ue
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    }
    function d(B, H, V, se, O, fe, we, ue) {
      var ce = H.children;
      if (ce !== void 0)
        if (se)
          if (P(ce)) {
            for (se = 0; se < ce.length; se++)
              f(ce[se]);
            Object.freeze && Object.freeze(ce);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(ce);
      if (x.call(H, "key")) {
        ce = e(B);
        var K = Object.keys(H).filter(function(de) {
          return de !== "key";
        });
        se = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", G[ce + se] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          se,
          ce,
          K,
          ce
        ), G[ce + se] = !0);
      }
      if (ce = null, V !== void 0 && (n(V), ce = "" + V), i(H) && (n(H.key), ce = "" + H.key), "key" in H) {
        V = {};
        for (var ae in H)
          ae !== "key" && (V[ae] = H[ae]);
      } else V = H;
      return ce && l(
        V,
        typeof B == "function" ? B.displayName || B.name || "Unknown" : B
      ), c(
        B,
        ce,
        fe,
        O,
        s(),
        V,
        we,
        ue
      );
    }
    function f(B) {
      typeof B == "object" && B !== null && B.$$typeof === g && B._store && (B._store.validated = 1);
    }
    var h = bt, g = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), L = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), _ = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = Object.prototype.hasOwnProperty, P = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(B) {
        return B();
      }
    };
    var S, D = {}, A = h.react_stack_bottom_frame.bind(
      h,
      o
    )(), re = N(a(o)), G = {};
    Rn.Fragment = m, Rn.jsx = function(B, H, V, se, O) {
      var fe = 1e4 > _.recentlyCreatedOwnerStacks++;
      return d(
        B,
        H,
        V,
        !1,
        se,
        O,
        fe ? Error("react-stack-top-frame") : A,
        fe ? N(a(B)) : re
      );
    }, Rn.jsxs = function(B, H, V, se, O) {
      var fe = 1e4 > _.recentlyCreatedOwnerStacks++;
      return d(
        B,
        H,
        V,
        !0,
        se,
        O,
        fe ? Error("react-stack-top-frame") : A,
        fe ? N(a(B)) : re
      );
    };
  })()), Rn;
}
var no;
function Yc() {
  return no || (no = 1, process.env.NODE_ENV === "production" ? ir.exports = Vc() : ir.exports = Gc()), ir.exports;
}
var r = Yc(), Da = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var ro;
function qc() {
  return ro || (ro = 1, (function(e) {
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
  })(Da)), Da.exports;
}
var Xc = qc();
const ve = /* @__PURE__ */ zc(Xc), Wb = ({
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
}, pi = ({
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
    ) : null, l = o.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: o.html } }) : o.text, u = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      i,
      l
    ] });
    return o.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: o.href,
        children: u
      }
    ) : o.action ? /* @__PURE__ */ r.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: o.action,
        method: o.method || "post",
        children: /* @__PURE__ */ r.jsx("button", { className: "nhsuk-account__button", type: "submit", role: "button", children: u })
      }
    ) : /* @__PURE__ */ r.jsx("span", { children: u });
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
var hi = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(hi || {}), mi = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(mi || {});
function Kc(e) {
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
const { forwardRef: Jc, useCallback: Zt, useState: Ta } = q;
function Zc(e, t) {
  const {
    children: n,
    variant: a = hi.Primary,
    size: s = mi.Default,
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...u
  } = e, [c, d] = Ta(!1), [f, h] = Ta(!1), [g, v] = Ta(!1), m = Kc({
    variant: a,
    size: s,
    fullWidth: o,
    className: i,
    preventDoubleClick: l,
    href: "href" in u ? u.href : void 0
  }), p = "disabled" in u ? u.disabled : u["aria-disabled"] === "true", b = {
    ...c && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...g && { "data-focused": "true" },
    ...p && { "data-disabled": "true" }
  }, T = Zt(
    () => !p && d(!0),
    [p]
  ), L = Zt(() => d(!1), []), k = Zt(
    () => !p && h(!0),
    [p]
  ), j = Zt(() => {
    h(!1), d(!1);
  }, []), M = Zt(() => v(!0), []), I = Zt(() => v(!1), []), C = Zt(
    (ce) => {
      ce.key === " " && ("href" in u || ce.currentTarget.getAttribute("role") === "button") && (ce.preventDefault(), ce.currentTarget.click());
    },
    [u]
  ), y = Zt(
    (ce) => {
      if (l) {
        const K = ce.currentTarget;
        if (K.getAttribute("data-processing") === "true") {
          ce.preventDefault();
          return;
        }
        K.setAttribute("data-processing", "true"), setTimeout(() => {
          K.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in u && u.href) {
    const {
      id: ce,
      style: K,
      title: ae,
      ["aria-label"]: de,
      ["aria-describedby"]: w,
      ["aria-labelledby"]: R,
      tabIndex: W,
      ...ne
    } = u, Z = u;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: Z.href,
        target: Z.target,
        rel: Z.rel,
        className: m.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...b,
        ...l && { "data-prevent-double-click": "true" },
        ...ne,
        onKeyDown: (oe) => {
          Z.onKeyDown?.(oe), C(oe);
        },
        onClick: (oe) => {
          Z.onClick?.(oe), y(oe);
        },
        onMouseDown: (oe) => {
          Z.onMouseDown?.(oe), T();
        },
        onMouseUp: (oe) => {
          Z.onMouseUp?.(oe), L();
        },
        onMouseEnter: (oe) => {
          Z.onMouseEnter?.(oe), k();
        },
        onMouseLeave: (oe) => {
          Z.onMouseLeave?.(oe), j();
        },
        onFocus: (oe) => {
          Z.onFocus?.(oe), M();
        },
        onBlur: (oe) => {
          Z.onBlur?.(oe), I();
        },
        "aria-disabled": Z["aria-disabled"],
        ...Z["aria-disabled"] === "true" && { tabIndex: -1 },
        id: ce,
        style: K,
        title: ae,
        "aria-label": de,
        "aria-describedby": w,
        "aria-labelledby": R,
        tabIndex: W,
        children: n
      }
    );
  }
  const {
    id: $,
    style: _,
    title: x,
    ["aria-label"]: P,
    ["aria-describedby"]: N,
    ["aria-labelledby"]: S,
    tabIndex: D,
    name: A,
    value: re,
    form: G,
    formAction: B,
    formEncType: H,
    formMethod: V,
    formNoValidate: se,
    formTarget: O,
    autoFocus: fe,
    ...we
  } = u, ue = u;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: ue.type || "button",
      disabled: ue.disabled,
      className: m.classes,
      "data-module": "nhs-button",
      ...b,
      ...l && { "data-prevent-double-click": "true" },
      ...ue.disabled && { "aria-disabled": "true" },
      ...we,
      onKeyDown: (ce) => {
        ue.onKeyDown?.(ce), C(ce);
      },
      onClick: (ce) => {
        ue.onClick?.(ce), y(ce);
      },
      onMouseDown: (ce) => {
        ue.onMouseDown?.(ce), T();
      },
      onMouseUp: (ce) => {
        ue.onMouseUp?.(ce), L();
      },
      onMouseEnter: (ce) => {
        ue.onMouseEnter?.(ce), k();
      },
      onMouseLeave: (ce) => {
        ue.onMouseLeave?.(ce), j();
      },
      onFocus: (ce) => {
        ue.onFocus?.(ce), M();
      },
      onBlur: (ce) => {
        ue.onBlur?.(ce), I();
      },
      id: $,
      style: _,
      title: x,
      "aria-label": P,
      "aria-describedby": N,
      "aria-labelledby": S,
      tabIndex: D,
      name: A,
      value: re,
      form: G,
      formAction: B,
      formEncType: H,
      formMethod: V,
      formNoValidate: se,
      formTarget: O,
      autoFocus: fe,
      children: n
    }
  );
}
const pt = Jc(Zc);
pt.displayName = "Button";
const qa = ({
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
  ), u = ve(
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
      className: u,
      onClick: o,
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
function Qc(e) {
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
const Oe = ({
  text: e,
  html: t,
  children: n,
  color: a = "default",
  noBorder: s = !1,
  closable: o = !1,
  onClose: i,
  disabled: l = !1,
  className: u,
  ...c
}) => {
  const d = Qc({ color: a, noBorder: s, closable: o, disabled: l, className: u }), f = (h) => {
    h.preventDefault(), h.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ r.jsxs("strong", { className: d.classes, ...c, children: [
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
}, eu = ({
  id: e,
  name: t,
  checked: n,
  defaultChecked: a = !1,
  disabled: s = !1,
  value: o = "true",
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
  const [m, p] = Fe(a), b = n !== void 0, T = b ? n : m;
  We(() => {
    b || p(a);
  }, [a, b]);
  const L = (C) => {
    const y = C.target.checked;
    b || p(y), d?.(y, C);
  }, k = i ? `${e}-hint` : void 0, j = l ? `${e}-error` : void 0, M = [k, j].filter(Boolean).join(" ") || void 0, I = ve(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    u
  );
  return /* @__PURE__ */ r.jsx("div", { className: I, ...v, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: o,
        checked: T,
        disabled: s,
        onChange: L,
        onBlur: f,
        onFocus: h,
        "aria-describedby": M,
        ...g
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ r.jsx("div", { id: k, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: j, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
eu.displayName = "Checkbox";
function gi(e) {
  const n = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    n ? "nhsuk-input--range" : "",
    !n && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: n };
}
const Ms = ({
  id: e,
  name: t,
  type: n = "text",
  value: a,
  defaultValue: s,
  placeholder: o,
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
  pattern: b,
  step: T,
  min: L,
  max: k,
  showValueLabels: j = !1,
  showCurrentValue: M = !1,
  valueLabels: I,
  onChange: C,
  onBlur: y,
  onFocus: $,
  onKeyDown: _,
  ...x
}) => {
  const [P, N] = Fe(a || s || (n === "range" ? L || "0" : ""));
  We(() => {
    a !== void 0 && N(a);
  }, [a]);
  const S = (O) => {
    const fe = O.target;
    N(fe.value), ("type" in O && O.nativeEvent || O.type === "keydown") && C?.(O);
  }, { classes: D, isRange: A } = gi({ type: n, hasError: c, width: h, className: f }), re = a !== void 0, G = {
    id: e,
    name: t,
    type: n,
    placeholder: o,
    disabled: i,
    readOnly: l,
    required: u,
    "aria-describedby": d,
    inputMode: g,
    autoComplete: v,
    maxLength: m,
    minLength: p,
    pattern: b,
    step: T,
    min: L,
    max: k,
    onChange: S,
    onBlur: y,
    onFocus: $,
    onKeyDown: (O) => {
      if (A && /[0-9]/.test(O.key)) {
        const fe = (P?.toString() || "") + O.key;
        O.target.value = fe, S(O);
      }
      _?.(O);
    },
    ...x
  }, B = !re && s !== void 0 ? { defaultValue: s } : {}, H = re ? { value: a } : {}, V = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: D,
      ...H,
      ...B,
      "data-current-value": P,
      ...G
    }
  ), se = A ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    j && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: I?.min || L || "0" }),
      V(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: I?.max || k || "100" })
    ] }),
    !j && V(),
    M && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      I?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: P })
    ] }) })
  ] }) : null;
  return A ? se : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: D,
      id: e,
      name: t,
      type: n,
      value: a,
      ...a === void 0 && s !== void 0 ? { defaultValue: s } : {},
      placeholder: o,
      disabled: i,
      readOnly: l,
      required: u,
      "aria-describedby": d,
      inputMode: g,
      autoComplete: v,
      maxLength: m,
      minLength: p,
      pattern: b,
      step: T,
      min: L,
      max: k,
      onChange: C,
      onBlur: y,
      onFocus: $,
      onKeyDown: _,
      ...x
    }
  );
};
function tu(e) {
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
const Ls = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: s,
  ...o
}) => {
  const i = tu({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...o, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: s }) : s });
};
function nu(e) {
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
  const o = nu({
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
function ru(e) {
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
const au = ({
  items: e,
  name: t,
  idPrefix: n,
  legend: a,
  isPageHeading: s = !1,
  legendSize: o = "l",
  hint: i,
  errorMessage: l,
  className: u = "",
  small: c = !1,
  onChange: d,
  fieldsetAttributes: f,
  attributes: h,
  ...g
}) => {
  const [v, m] = Fe(
    e.filter((C) => C.checked).map((C) => C.value)
  ), p = n || t, b = i ? `${p}-hint` : void 0, T = l ? `${p}-error` : void 0, L = [b, T].filter(Boolean).join(" ") || void 0, k = (C, y) => {
    let $;
    y ? $ = [...v, C] : $ = v.filter((_) => _ !== C), m($), d?.($);
  }, j = () => e.map((C, y) => {
    const $ = `${p}-${y + 1}`, _ = `${$}-conditional`, x = v.includes(C.value), P = C.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: $,
          name: t,
          type: "checkbox",
          value: C.value,
          checked: x,
          disabled: P,
          onChange: (N) => k(C.value, N.target.checked),
          "aria-describedby": C.hint ? `${$}-hint` : L,
          ...C.conditional && {
            "aria-controls": _,
            "aria-expanded": x ? "true" : "false"
          },
          ...C.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: $, children: C.text }),
      C.hint && /* @__PURE__ */ r.jsx("div", { id: `${$}-hint`, className: "nhsuk-checkboxes__hint", children: C.hint }),
      C.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: ve("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !x
          }),
          id: _,
          children: typeof C.conditional == "object" && C.conditional !== null && "label" in C.conditional && "id" in C.conditional && "name" in C.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            C.conditional.label && /* @__PURE__ */ r.jsx(Ls, { htmlFor: C.conditional.id, children: C.conditional.label }),
            /* @__PURE__ */ r.jsx(Ms, { ...C.conditional })
          ] }) : C.conditional
        }
      )
    ] }, C.value);
  }), { classes: M, formGroupClasses: I } = ru({ small: c, className: u, hasError: !!l });
  return /* @__PURE__ */ r.jsx("div", { className: I, ...h, ...g, children: /* @__PURE__ */ r.jsxs(
    Ps,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: L,
      ...f,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: b, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: T, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: M, children: j() })
      ]
    }
  ) });
};
au.displayName = "Checkboxes";
function su(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const ou = ({
  id: e,
  name: t,
  value: n,
  defaultValue: a,
  placeholder: s,
  disabled: o = !1,
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
  autoComplete: b,
  spellCheck: T,
  onChange: L,
  onBlur: k,
  onFocus: j,
  onKeyDown: M,
  ...I
}) => {
  const { classes: C, describedBy: y } = su({ hasError: u, resize: p, className: d, describedBy: c });
  return /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: C,
      id: e,
      name: t,
      value: n,
      defaultValue: a,
      placeholder: s,
      disabled: o,
      readOnly: i,
      required: l,
      "aria-describedby": y,
      rows: f,
      cols: h,
      maxLength: g,
      minLength: v,
      wrap: m,
      autoComplete: b,
      spellCheck: T,
      onChange: L,
      onBlur: k,
      onFocus: j,
      onKeyDown: M,
      ...I
    }
  );
};
function iu(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const xi = ({ id: e, className: t, children: n, ...a }) => {
  const s = iu({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: s.classes, id: s.id, ...a, children: n });
}, zb = ({
  id: e,
  maxLength: t,
  maxWords: n,
  threshold: a = 75,
  name: s,
  value: o,
  defaultValue: i,
  rows: l,
  className: u,
  countMessage: c,
  onCountChange: d,
  onChange: f,
  ...h
}) => {
  const g = o ?? i ?? "", [v, m] = Fe(g), [p, b] = Fe(0), [T, L] = Fe(!1), [k, j] = Fe(!1), M = be((x) => n ? x.trim() === "" ? 0 : x.trim().split(/\s+/).length : x.length, [n]);
  We(() => {
    const x = M(v), P = t || n || 0, N = P - x, S = Math.floor(P * (a / 100));
    b(N), L(x > P), j(x >= S || x > P), d && d(x, N);
  }, [v, t, n, a, M, d]);
  const I = (x) => {
    const P = x.target.value;
    m(P), f && f(x);
  }, C = () => {
    const x = t || n || 0, P = n ? "word" : "character", N = n ? "words" : "characters";
    if (!k)
      return `You can enter up to ${x} ${x === 1 ? P : N}`;
    if (T) {
      const S = Math.abs(p);
      return `You have ${S} ${S === 1 ? P : N} too many`;
    } else
      return `You have ${p} ${p === 1 ? P : N} remaining`;
  }, y = ve(
    "nhsuk-character-count",
    u
  ), $ = ve(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !k,
      "nhsuk-error-message": T
    },
    c?.classes
  ), _ = ve(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": T
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
          ou,
          {
            id: e,
            name: s,
            value: o !== void 0 ? v : void 0,
            defaultValue: o === void 0 ? i ?? v : void 0,
            rows: l,
            className: _,
            onChange: I,
            "aria-describedby": `${e}-info`,
            "aria-invalid": T || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ r.jsx(
          xi,
          {
            id: `${e}-info`,
            className: $,
            role: "status",
            "aria-live": "polite",
            children: C()
          }
        )
      ]
    }
  );
};
function lu(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const cu = ({
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
}, uu = ({
  id: e,
  name: t,
  ariaLabel: n,
  value: a,
  defaultValue: s,
  disabled: o = !1,
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
  onFocus: b,
  ...T
}) => {
  const { classes: L } = lu({ hasError: l, className: c }), k = () => g ? g.map((M, I) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: M.value,
      disabled: M.disabled,
      "data-initial-selected": M.selected || void 0,
      children: M.text
    },
    `${M.value}-${I}`
  )) : null, j = s === void 0 && a === void 0 && g ? g.find((M) => M.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: L,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: s !== void 0 ? s : j,
      disabled: o,
      required: i,
      "aria-describedby": u,
      multiple: d,
      size: f,
      autoComplete: h,
      onChange: m,
      onBlur: p,
      onFocus: b,
      ...T,
      children: v || k()
    }
  );
}, mr = uu;
mr.Option = cu;
function du(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function bi(e, {
  variant: t,
  selectedValue: n,
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
    onFocus: h,
    ...g
  } = e, {
    name: v,
    hasError: m = !1,
    describedBy: p,
    className: b,
    size: T = "normal",
    inline: L = !1,
    options: k,
    ...j
  } = g, { classes: M, describedBy: I } = du({ hasError: m, size: T, inline: L, className: b, describedBy: p });
  return /* @__PURE__ */ r.jsx(Ps, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: M,
      ...j,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: k.map((C, y) => {
        const $ = `${v}-${y}`, _ = C.conditional ? `${$}-conditional` : void 0, x = n === C.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: $,
              name: v,
              type: "radio",
              value: C.value,
              disabled: C.disabled,
              ...t === "client" ? {
                checked: x,
                onChange: s,
                onBlur: o,
                onFocus: i,
                onKeyDown: l,
                ref: (P) => {
                  P && u && (u.current[y] = P);
                }
              } : {
                defaultChecked: x,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": I
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: $, children: C.text }),
          C.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: C.hint }),
          C.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: ve("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !x
              }),
              id: _,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof C.conditional == "object" && C.conditional !== null && "label" in C.conditional && "id" in C.conditional && "name" in C.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                C.conditional.label && /* @__PURE__ */ r.jsx(
                  Ls,
                  {
                    htmlFor: C.conditional.id,
                    children: C.conditional.label
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  c,
                  {
                    ...C.conditional
                  }
                )
              ] }) : C.conditional
            }
          )
        ] }, C.value);
      })
    }
  ) });
}
const Vb = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: s, ...o }) => {
  const [i, l] = Fe(e || t || ""), u = Ee([]), c = Ee(i), d = (g) => {
    const v = g.target.value;
    v !== c.current && (c.current = v, l(v), n?.(g));
  }, f = (g) => {
    s?.(g);
  }, h = be((g) => {
    const { key: v } = g;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(v)) return;
    g.preventDefault();
    const m = u.current.filter((L) => L && !L.disabled), p = m.indexOf(g.currentTarget);
    if (p === -1) return;
    let b = p;
    ["ArrowDown", "ArrowRight"].includes(v) ? b = (p + 1) % m.length : ["ArrowUp", "ArrowLeft"].includes(v) && (b = (p - 1 + m.length) % m.length);
    const T = m[b];
    T && (T.focus(), T.checked || T.click());
  }, []);
  return bi(
    { value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: s, ...o },
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
      InputComponent: Ms
    }
  );
};
function fu(e) {
  const {
    id: t,
    name: n,
    type: a = "text",
    value: s,
    defaultValue: o,
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
    minLength: b,
    pattern: T,
    step: L,
    min: k,
    max: j,
    showValueLabels: M = !1,
    showCurrentValue: I = !1,
    valueLabels: C,
    // Strip interactive handlers in server variant
    onChange: y,
    onBlur: $,
    onFocus: _,
    onKeyDown: x,
    ...P
  } = e, { classes: N, isRange: S } = gi({
    type: a,
    hasError: d,
    width: g,
    className: h
  }), D = {
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
    minLength: b,
    pattern: T,
    step: L,
    min: k,
    max: j,
    ...P
  };
  if (S) {
    const A = s ?? o ?? (typeof k < "u" ? String(k) : "0"), re = /* @__PURE__ */ r.jsx(
      "input",
      {
        className: N,
        ...s !== void 0 ? { value: s } : {},
        ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
        "data-current-value": A,
        ...D
      }
    );
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      M ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: C?.min || k || "0" }),
        re,
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: C?.max || j || "100" })
      ] }) : re,
      I && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        C?.current || "Current value:",
        " ",
        /* @__PURE__ */ r.jsx("strong", { children: A })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ r.jsx(
    "input",
    {
      className: N,
      ...s !== void 0 ? { value: s } : {},
      ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
      ...D
    }
  );
}
const Gb = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return bi(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: fu
    }
  );
};
var fn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(fn || {}), pu = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(pu || {}), hu = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(hu || {}), mu = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(mu || {});
const yi = ({
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
}, pn = ({
  children: e,
  className: t,
  style: n,
  ...a
}) => {
  const s = ve("nhsuk-grid-row", t);
  return /* @__PURE__ */ r.jsx("div", { className: s, style: n, ...a, children: e });
}, Gn = ({
  children: e,
  width: t = fn.Full,
  mobileWidth: n,
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
  return /* @__PURE__ */ r.jsx("div", { className: f, style: u, ...d, children: e });
}, Xa = ({
  children: e,
  className: t,
  style: n,
  ...a
}) => {
  const o = bt.Children.toArray(e)[0], i = bt.isValidElement(o) && (o.type === pn || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ r.jsx(yi, { className: t, style: n, ...a, children: i ? e : /* @__PURE__ */ r.jsx(pn, { children: e }) });
}, gu = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
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
      [`nhsuk-list--${n}`]: n !== "medium"
    },
    s
  );
  return /* @__PURE__ */ r.jsx(u, { className: c, role: o, ...l, children: e });
}, xu = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = ve("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, bu = gu;
bu.Item = xu;
const Yb = ({
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
}, qb = {
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
}, Xb = ({
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
}, Kb = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Jb = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], vi = ({
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
function yu(e) {
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
function vu(e) {
  const t = e.level ?? yu(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const Gt = ({ level: e, className: t, text: n, html: a, children: s, size: o, marginBottom: i, ...l }) => {
  const u = vu({ level: e, size: o, className: t, marginBottom: i }), c = s || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return ui(u.tag, { className: u.classes, style: u.style, ...l }, c);
};
function wu(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const ao = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...s }) => {
  const o = wu({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: o.classes, id: o.id, ...s, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      o.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, Zb = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: a,
  errorList: s,
  className: o,
  children: i,
  ...l
}) => {
  const u = Ee(null);
  We(() => {
    u.current && u.current.focus();
  }, []);
  const c = ve(
    "nhsuk-error-summary",
    o
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
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((g, v) => /* @__PURE__ */ r.jsx("li", { children: h(g) }, v)) })
        ] })
      ]
    }
  );
}, Qb = ({
  id: e,
  className: t,
  items: n,
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
  })), [h, g] = Fe({}), v = (S) => S % 4 === 0 && S % 100 !== 0 || S % 400 === 0, m = (S, D) => {
    const A = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return S === 2 && v(D) ? 29 : A[S - 1];
  }, p = (S, D, A) => {
    if (!S) return;
    if (!/^\d+$/.test(S)) return "Day must be a number";
    const re = parseInt(S, 10);
    if (re < 1 || re > 31) return "Day must be between 1 and 31";
    if (D && A) {
      const G = parseInt(D, 10), B = parseInt(A, 10);
      if (!isNaN(G) && !isNaN(B) && G >= 1 && G <= 12) {
        const H = m(G, B);
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
          ][G - 1]} ${B} only has ${H} days`;
      }
    }
  }, b = (S) => {
    if (!S) return;
    if (!/^\d+$/.test(S)) return "Month must be a number";
    const D = parseInt(S, 10);
    if (D < 1 || D > 12) return "Month must be between 1 and 12";
  }, T = (S) => {
    if (!S) return;
    if (!/^\d+$/.test(S)) return "Year must be a number";
    const D = parseInt(S, 10), A = (/* @__PURE__ */ new Date()).getFullYear();
    if (D < 1900 || D > A + 10)
      return `Year must be between 1900 and ${A + 10}`;
  }, L = (S, D, A) => {
    if (!S || !D || !A) return;
    const re = parseInt(S, 10), G = parseInt(D, 10), B = parseInt(A, 10);
    if (isNaN(re) || isNaN(G) || isNaN(B) || G < 1 || G > 12 || B < 1900) return;
    const H = m(G, B);
    re < 1 || re > H;
  }, k = be((S, D) => {
    const A = {
      ...d,
      [S]: D
    };
    f(A), u && u(A);
  }, [d, u]), j = be((S) => {
    const D = d[S];
    let A;
    if (S === "day")
      A = p(D, d.month, d.year);
    else if (S === "month") {
      if (A = b(D), !A && d.day) {
        const re = p(d.day, D, d.year);
        g((G) => ({
          ...G,
          day: re
        }));
      }
    } else if (S === "year" && (A = T(D), !A && d.day && d.month)) {
      const re = p(d.day, d.month, D);
      g((G) => ({
        ...G,
        day: re
      }));
    }
    if (g((re) => ({
      ...re,
      [S]: A
    })), d.day && d.month && d.year) {
      const re = L(
        S === "day" ? D : d.day,
        S === "month" ? D : d.month,
        S === "year" ? D : d.year
      );
      re && g((G) => ({
        ...G,
        day: re
      }));
    }
  }, [d, p, b, T, L]), M = $e(() => [
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
  ], []), I = n || M;
  let C = o?.describedBy || "";
  const y = i ? `${e}-hint` : "", $ = l ? `${e}-error` : "";
  y && (C = C ? `${C} ${y}` : y), $ && (C = C ? `${C} ${$}` : $);
  const _ = Object.values(h).some((S) => S), x = ve(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || _
    }
  ), P = ve(
    "nhsuk-date-input",
    t
  ), N = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(
      xi,
      {
        id: y,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ r.jsx(
      ao,
      {
        id: $,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(h).map(
      ([S, D]) => D ? /* @__PURE__ */ r.jsxs(
        ao,
        {
          id: `${e}-${S}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            D
          ]
        },
        `${S}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx("div", { className: P, id: e, "data-testid": "date-input", ...c, children: I.map((S) => {
      const D = S.id || `${e}-${S.name}`, A = a ? `${a}[${S.name}]` : S.name, re = S.label || S.name.charAt(0).toUpperCase() + S.name.slice(1), G = h[S.name], B = d[S.name] || "";
      let H = C;
      if (G) {
        const V = `${e}-${S.name}-error`;
        H = H ? `${H} ${V}` : V;
      }
      return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ r.jsx(
          Ls,
          {
            htmlFor: D,
            className: "nhsuk-date-input__label",
            children: re
          }
        ),
        /* @__PURE__ */ r.jsx(
          Ms,
          {
            id: D,
            name: A,
            value: B,
            className: ve("nhsuk-date-input__input", S.classes, {
              "nhsuk-input--error": G
            }),
            inputMode: S.inputmode,
            autoComplete: S.autocomplete,
            pattern: S.pattern,
            "aria-describedby": H || void 0,
            hasError: !!G,
            onChange: (V) => k(S.name, V.target.value),
            onBlur: () => j(S.name)
          }
        )
      ] }, S.name);
    }) })
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: x, children: o ? /* @__PURE__ */ r.jsx(
    Ps,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: C || void 0,
      children: N()
    }
  ) : N() });
}, wi = {
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
}, _i = Uc(wi), _u = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...wi, ...t };
  return /* @__PURE__ */ r.jsx(_i.Provider, { value: n, children: e });
}, ey = () => {
  const e = Hc(_i);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Su() {
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
function ku() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Su(), document.head.appendChild(e);
}
const ty = ({ children: e, theme: t }) => (We(() => {
  ku();
}, []), /* @__PURE__ */ r.jsx(_u, { theme: t, children: e }));
function Cu(e, {
  variant: t,
  isClient: n,
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
    logo: h = {},
    service: g = {},
    serviceName: v,
    organisation: m,
    search: p,
    account: b,
    navigation: T,
    containerClasses: L,
    variant: k = "default",
    attributes: j = {},
    maxVisibleItems: M,
    // deprecated (ignored)
    responsiveNavigation: I = !0,
    ...C
  } = e, y = {
    ...g,
    text: g?.text ?? v
  };
  "maxVisibleItems" in C && delete C.maxVisibleItems;
  const $ = y.href && !h.href || y.href && y.href === h.href, _ = $ ? y.href : h.href, x = ve(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": k === "organisation" || m,
      "nhsuk-header--white": k === "white"
    },
    f
  ), P = ve(
    "nhsuk-header__container",
    L
  ), N = ve(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": T?.white,
      "nhsuk-header__navigation--justified": T?.justified
    },
    T?.className
  ), S = () => /* @__PURE__ */ r.jsxs(
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
  ), D = () => h.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: h.src,
      width: "280",
      alt: h.ariaLabel || "NHS"
    }
  ) : S(), A = () => m ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      m.name,
      m.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        m.split
      ] })
    ] }),
    m.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: m.descriptor })
  ] }) : null, re = (H, V) => H ? V ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: V, children: H }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: H }) : null, G = (H) => H.active || H.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: H.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: H.html } }) : H.text }) : H.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: H.html } }) : H.text, B = () => /* @__PURE__ */ r.jsx(
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
  return T?.items, /* @__PURE__ */ r.jsxs(
    "header",
    {
      className: x,
      role: "banner",
      "data-module": "nhsuk-header",
      ...j,
      ...C,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: P, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            _ ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: _, children: [
              D(),
              A(),
              $ && re(y.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              D(),
              A(),
              $ && re(y.text)
            ] }),
            y.text && !$ && re(y.text, y.href)
          ] }),
          d ?? null,
          /* @__PURE__ */ r.jsx(
            pi,
            {
              ...b,
              variant: k === "white" ? "white" : "default"
            }
          )
        ] }),
        T && T.items && T.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: N,
            "aria-label": T.ariaLabel || "Menu",
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
                  L
                ),
                ref: u,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: c,
                    children: [
                      (T?.items || []).map((H, V) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: ve(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": H.active || H.current,
                              "nhsuk-header__navigation-item--hidden": s && o !== void 0 && V >= (o ?? 0)
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
                              children: G(H)
                            }
                          )
                        },
                        V
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
        n && T && T.items && T.items.length > 0 && a && i && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: T.items.slice(o ?? 0).map((H, V) => /* @__PURE__ */ r.jsx(
              "li",
              {
                className: ve("nhsuk-header__dropdown-item", {
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
                    children: G(H)
                  }
                )
              },
              `overflow-${(o ?? 0) + V}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const ju = ({
  mode: e = "form",
  action: t = "/search",
  method: n = "get",
  name: a = "q",
  value: s,
  placeholder: o = "Search",
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
  preventDefaultSubmit: b = !1,
  debounceMs: T = 300,
  minQueryLength: L = 1
}) => {
  const [k, j] = Fe(""), [M, I] = Fe(!1), C = Ee(void 0), y = Ee(null), $ = Ee(null), _ = e === "controlled" && s !== void 0, x = _ ? s : k, P = be((se) => {
    C.current && clearTimeout(C.current), C.current = setTimeout(() => {
      d.onChange && se.length >= L && d.onChange(se);
    }, T);
  }, [d.onChange, T, L]), N = be((se) => {
    const O = se.target.value;
    _ || j(O), e !== "form" && P(O);
  }, [_, e, P]), S = be((se) => {
    const O = x.trim(), fe = {
      query: O,
      timestamp: Date.now(),
      formData: new FormData(se.currentTarget)
    };
    e === "controlled" || e === "hybrid" && b ? (se.preventDefault(), d.onSearch && O.length >= L && d.onSearch(fe)) : e === "hybrid" && d.onSearch && O.length >= L && d.onSearch(fe);
  }, [e, x, d.onSearch, b, L]), D = be(() => {
    I(!0), d.onFocus?.();
  }, [d.onFocus]), A = be(() => {
    I(!1), d.onBlur?.();
  }, [d.onBlur]), re = be(() => {
    _ || j(""), d.onClear?.(), $.current?.focus();
  }, [_, d.onClear]);
  We(() => () => {
    C.current && clearTimeout(C.current);
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
  ), H = () => !x || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: re,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ r.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ r.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), V = () => !h || !g.length || !M ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: g.map((se) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: se.href ? /* @__PURE__ */ r.jsxs("a", { href: se.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: se.title }),
    se.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: se.description })
  ] }) : /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => d.onSearch?.({ query: se.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: se.title }),
        se.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: se.description })
      ]
    }
  ) }, se.id)) });
  return /* @__PURE__ */ r.jsxs("div", { className: ve("nhsuk-header__search", u, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": f,
    "nhsuk-header__search--focused": M,
    "nhsuk-header__search--has-results": h && g.length > 0
  }), children: [
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
                ref: $,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: o,
                autoComplete: "off",
                value: x,
                onChange: N,
                onFocus: D,
                onBlur: A,
                disabled: c || f,
                ...h && g.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...m
              }
            ),
            H()
          ] }),
          /* @__PURE__ */ r.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || f || e !== "form" && x.length < L,
              ...p,
              children: [
                f ? B() : G(),
                /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    V()
  ] });
}, Si = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: a,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: u = "default",
  attributes: c = {},
  ...d
}) => {
  const [f, h] = Fe(!1), [g, v] = Fe(!1), [m, p] = Fe(i?.items?.length || 0), [b, T] = Fe(!1), [L, k] = Fe(!1), j = Ee(null), M = Ee(null), I = Ee(!1);
  We(() => {
    typeof window > "u" || k(!0);
  }, []), We(() => {
    if (typeof document > "u") return;
    const _ = (x) => {
      x.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [f]);
  const C = Ee(null), y = be(() => {
    if (!L || !i?.items || i.items.length === 0 || I.current) return;
    const _ = j.current, x = M.current;
    if (!_ || !x) return;
    I.current = !0, _.classList.add("nhsuk-header__navigation-container--measuring");
    const P = _.clientWidth, N = Array.from(x.children);
    if (!N.length) {
      _.classList.remove("nhsuk-header__navigation-container--measuring"), I.current = !1;
      return;
    }
    if (C.current == null) {
      const O = document.createElement("button");
      O.type = "button", O.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", O.style.position = "absolute", O.style.visibility = "hidden", O.style.pointerEvents = "none", O.innerHTML = "<span>More</span>", _.appendChild(O), C.current = O.getBoundingClientRect().width || 104, _.removeChild(O);
    }
    const S = C.current + 16;
    let D = 0, A = 0;
    const re = window.getComputedStyle(_), G = parseFloat(re.paddingLeft) || 0, B = parseFloat(re.paddingRight) || 0;
    let H = G + B;
    for (const O of N) {
      const fe = O.getBoundingClientRect().width;
      if (D + fe + S + H > P) break;
      D += fe, A += 1;
    }
    const V = A < i.items.length, se = V ? A : i.items.length;
    v((O) => O === V ? O : V), p((O) => O === se ? O : se), _.classList.remove("nhsuk-header__navigation-container--measuring"), I.current = !1;
  }, [L, i?.items]);
  We(() => {
    if (!L) return;
    const _ = j.current;
    if (!_) return;
    let x = null;
    const P = () => {
      x == null && (x = window.requestAnimationFrame(() => {
        x = null, y();
      }));
    };
    y();
    const N = new ResizeObserver(() => P());
    return N.observe(_), M.current && N.observe(M.current), () => {
      x != null && window.cancelAnimationFrame(x), N.disconnect();
    };
  }, [L, y]), We(() => {
    L && y();
  }, [i?.items?.length, L, y]);
  const $ = (_) => {
    _ && (_.preventDefault(), _.stopPropagation());
    const x = !f;
    h(x), T(x);
  };
  return Cu(
    {
      className: e,
      logo: t,
      service: n,
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
      isClient: L,
      menuOpen: f,
      showMoreButton: g,
      visibleItems: m,
      dropdownVisible: b,
      toggleMenu: $,
      navContainerRef: j,
      navListRef: M,
      // Provide interactive search node for client build only
      searchNode: s ? /* @__PURE__ */ r.jsx(ju, { ...s }) : null
    }
  );
};
function Nu(e, { variant: t, isClient: n }) {
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
    attributes: h = {},
    maxVisibleItems: g,
    // deprecated (ignored)
    responsiveNavigation: v = !0,
    ...m
  } = e;
  "maxVisibleItems" in m && delete m.maxVisibleItems;
  const p = {
    ...o,
    text: o?.text ?? i
  }, b = p.href && !s.href || p.href && p.href === s.href, T = b ? p.href : s.href, L = ve(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    a
  ), k = ve("nhsuk-header__container", d), j = ve(
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
  ), I = () => s.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: s.src,
      width: "280",
      alt: s.ariaLabel || "NHS"
    }
  ) : M(), C = () => l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, y = (N, S) => N ? S ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: S, children: N }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: N }) : null, $ = (N) => N.active || N.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: N.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: N.html } }) : N.text }) : N.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: N.html } }) : N.text, _ = c?.items && !v, x = _ ? [] : c?.items, P = _ ? c.items : [];
  return /* @__PURE__ */ r.jsxs("header", { className: L, role: "banner", "data-module": "nhsuk-header", ...h, ...m, children: [
    /* @__PURE__ */ r.jsxs("div", { className: k, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
        T ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: T, children: [
          I(),
          C(),
          b && y(p.text)
        ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          I(),
          C(),
          b && y(p.text)
        ] }),
        p.text && !b && y(p.text, p.href)
      ] }),
      /* @__PURE__ */ r.jsx(pi, { ...u, variant: f === "white" ? "white" : "default" })
    ] }),
    c && c.items && c.items.length > 0 && /* @__PURE__ */ r.jsx("nav", { className: j, "aria-label": c.ariaLabel || "Menu", children: /* @__PURE__ */ r.jsx(
      "div",
      {
        className: ve(
          "nhsuk-header_navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--ssr": !n
          },
          d
        ),
        children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__navigation-list", children: (x || []).map((N, S) => /* @__PURE__ */ r.jsx(
          "li",
          {
            className: ve("nhsuk-header__navigation-item", {
              "nhsuk-header__navigation-item--current": N.active || N.current
            }, N.className),
            ...N.attributes || {},
            children: /* @__PURE__ */ r.jsx(
              "a",
              {
                className: "nhsuk-header__navigation-link",
                href: N.href,
                ...N.active || N.current ? { "aria-current": N.current ? "page" : "true" } : {},
                children: $(N)
              }
            )
          },
          S
        )) })
      }
    ) }),
    _ && P.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: P.map((N, S) => /* @__PURE__ */ r.jsx(
      "li",
      {
        className: ve("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": N.active || N.current
        }),
        children: /* @__PURE__ */ r.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: N.href,
            ...N.active || N.current ? { "aria-current": N.current ? "page" : "true" } : {},
            children: $(N)
          }
        )
      },
      `overflow-server-${S}`
    )) }) })
  ] });
}
const ny = (e) => Nu(e, {
  variant: "server",
  isClient: !1
}), Du = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: n = "",
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
  ].filter(Boolean).join(" "), h = [
    "nhsuk-hero__heading",
    n,
    !u && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), g = u || e || a || s, v = () => {
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
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...c,
      children: [
        o && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: g && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          v(),
          u || (s ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && g && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          v(),
          u || (s ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Du.displayName = "Hero";
const ki = ({
  className: e,
  links: t = [],
  linksColumn2: n,
  linksColumn3: a,
  metaLinks: s,
  copyright: o = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: u,
  footerStyle: c,
  containerStyle: d
}) => {
  const f = (g, v = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: ve("nhsuk-footer__list-item", {
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
        className: ve("nhsuk-width-container", i),
        style: d,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: ve("nhsuk-footer", e), style: c, children: h ? (
            // Multi-column layout
            /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: t.map((g) => f(g)) }),
              n && n.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: n.map((g) => f(g)) }),
              a && a.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: a.map((g) => f(g)) }),
              s && s.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((g) => f(g)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((g) => f(g, !0)),
              (n || []).map((g) => f(g, !0)),
              (a || []).map((g) => f(g, !0)),
              (s || []).map((g) => f(g, !0))
            ] })
          ) }),
          !h && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: o }) })
        ]
      }
    ),
    h && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: o }) }) })
  ] }) });
};
function fr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Tu(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Fs(e) {
  let t, n, a;
  e.length !== 2 ? (t = fr, n = (l, u) => fr(e(l), u), a = (l, u) => e(l) - u) : (t = e === fr || e === Tu ? e : $u, n = e, a = e);
  function s(l, u, c = 0, d = l.length) {
    if (c < d) {
      if (t(u, u) !== 0) return d;
      do {
        const f = c + d >>> 1;
        n(l[f], u) < 0 ? c = f + 1 : d = f;
      } while (c < d);
    }
    return c;
  }
  function o(l, u, c = 0, d = l.length) {
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
    const f = s(l, u, c, d - 1);
    return f > c && a(l[f - 1], u) > -a(l[f], u) ? f - 1 : f;
  }
  return { left: s, center: i, right: o };
}
function $u() {
  return 0;
}
function Iu(e) {
  return e === null ? NaN : +e;
}
const Mu = Fs(fr), Lu = Mu.right;
Fs(Iu).center;
function Ci(e, t) {
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
class so extends Map {
  constructor(t, n = Au) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, s] of t) this.set(a, s);
  }
  get(t) {
    return super.get(oo(this, t));
  }
  has(t) {
    return super.has(oo(this, t));
  }
  set(t, n) {
    return super.set(Pu(this, t), n);
  }
  delete(t) {
    return super.delete(Fu(this, t));
  }
}
function oo({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function Pu({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function Fu({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function Au(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Eu = Math.sqrt(50), Ru = Math.sqrt(10), Bu = Math.sqrt(2);
function gr(e, t, n) {
  const a = (t - e) / Math.max(0, n), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= Eu ? 10 : o >= Ru ? 5 : o >= Bu ? 2 : 1;
  let l, u, c;
  return s < 0 ? (c = Math.pow(10, -s) / i, l = Math.round(e * c), u = Math.round(t * c), l / c < e && ++l, u / c > t && --u, c = -c) : (c = Math.pow(10, s) * i, l = Math.round(e / c), u = Math.round(t / c), l * c < e && ++l, u * c > t && --u), u < l && 0.5 <= n && n < 2 ? gr(e, t, n * 2) : [l, u, c];
}
function Hu(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [s, o, i] = a ? gr(t, e, n) : gr(e, t, n);
  if (!(o >= s)) return [];
  const l = o - s + 1, u = new Array(l);
  if (a)
    if (i < 0) for (let c = 0; c < l; ++c) u[c] = (o - c) / -i;
    else for (let c = 0; c < l; ++c) u[c] = (o - c) * i;
  else if (i < 0) for (let c = 0; c < l; ++c) u[c] = (s + c) / -i;
  else for (let c = 0; c < l; ++c) u[c] = (s + c) * i;
  return u;
}
function Ka(e, t, n) {
  return t = +t, e = +e, n = +n, gr(e, t, n)[2];
}
function Ja(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, s = a ? Ka(t, e, n) : Ka(e, t, n);
  return (a ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function Uu(e, t, n) {
  e = +e, t = +t, n = (s = arguments.length) < 2 ? (t = e, e = 0, 1) : s < 3 ? 1 : +n;
  for (var a = -1, s = Math.max(0, Math.ceil((t - e) / n)) | 0, o = new Array(s); ++a < s; )
    o[a] = e + a * n;
  return o;
}
function ia(e, t) {
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
const io = Symbol("implicit");
function ji() {
  var e = new so(), t = [], n = [], a = io;
  function s(o) {
    let i = e.get(o);
    if (i === void 0) {
      if (a !== io) return a;
      e.set(o, i = t.push(o) - 1);
    }
    return n[i % n.length];
  }
  return s.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [], e = new so();
    for (const i of o)
      e.has(i) || e.set(i, t.push(i) - 1);
    return s;
  }, s.range = function(o) {
    return arguments.length ? (n = Array.from(o), s) : n.slice();
  }, s.unknown = function(o) {
    return arguments.length ? (a = o, s) : a;
  }, s.copy = function() {
    return ji(t, n).unknown(a);
  }, ia.apply(s, arguments), s;
}
function Ni() {
  var e = ji().unknown(void 0), t = e.domain, n = e.range, a = 0, s = 1, o, i, l = !1, u = 0, c = 0, d = 0.5;
  delete e.unknown;
  function f() {
    var h = t().length, g = s < a, v = g ? s : a, m = g ? a : s;
    o = (m - v) / Math.max(1, h - u + c * 2), l && (o = Math.floor(o)), v += (m - v - o * (h - u)) * d, i = o * (1 - u), l && (v = Math.round(v), i = Math.round(i));
    var p = Uu(h).map(function(b) {
      return v + o * b;
    });
    return n(g ? p.reverse() : p);
  }
  return e.domain = function(h) {
    return arguments.length ? (t(h), f()) : t();
  }, e.range = function(h) {
    return arguments.length ? ([a, s] = h, a = +a, s = +s, f()) : [a, s];
  }, e.rangeRound = function(h) {
    return [a, s] = h, a = +a, s = +s, l = !0, f();
  }, e.bandwidth = function() {
    return i;
  }, e.step = function() {
    return o;
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
    return Ni(t(), [a, s]).round(l).paddingInner(u).paddingOuter(c).align(d);
  }, ia.apply(f(), arguments);
}
function As(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Di(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function tr() {
}
var Yn = 0.7, xr = 1 / Yn, Nn = "\\s*([+-]?\\d+)\\s*", qn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Tt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ou = /^#([0-9a-f]{3,8})$/, Wu = new RegExp(`^rgb\\(${Nn},${Nn},${Nn}\\)$`), zu = new RegExp(`^rgb\\(${Tt},${Tt},${Tt}\\)$`), Vu = new RegExp(`^rgba\\(${Nn},${Nn},${Nn},${qn}\\)$`), Gu = new RegExp(`^rgba\\(${Tt},${Tt},${Tt},${qn}\\)$`), Yu = new RegExp(`^hsl\\(${qn},${Tt},${Tt}\\)$`), qu = new RegExp(`^hsla\\(${qn},${Tt},${Tt},${qn}\\)$`), lo = {
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
As(tr, Xn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: co,
  // Deprecated! Use color.formatHex.
  formatHex: co,
  formatHex8: Xu,
  formatHsl: Ku,
  formatRgb: uo,
  toString: uo
});
function co() {
  return this.rgb().formatHex();
}
function Xu() {
  return this.rgb().formatHex8();
}
function Ku() {
  return Ti(this).formatHsl();
}
function uo() {
  return this.rgb().formatRgb();
}
function Xn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Ou.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? fo(t) : n === 3 ? new yt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? lr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? lr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Wu.exec(e)) ? new yt(t[1], t[2], t[3], 1) : (t = zu.exec(e)) ? new yt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Vu.exec(e)) ? lr(t[1], t[2], t[3], t[4]) : (t = Gu.exec(e)) ? lr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Yu.exec(e)) ? mo(t[1], t[2] / 100, t[3] / 100, 1) : (t = qu.exec(e)) ? mo(t[1], t[2] / 100, t[3] / 100, t[4]) : lo.hasOwnProperty(e) ? fo(lo[e]) : e === "transparent" ? new yt(NaN, NaN, NaN, 0) : null;
}
function fo(e) {
  return new yt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function lr(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new yt(e, t, n, a);
}
function Ju(e) {
  return e instanceof tr || (e = Xn(e)), e ? (e = e.rgb(), new yt(e.r, e.g, e.b, e.opacity)) : new yt();
}
function Za(e, t, n, a) {
  return arguments.length === 1 ? Ju(e) : new yt(e, t, n, a ?? 1);
}
function yt(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
As(yt, Za, Di(tr, {
  brighter(e) {
    return e = e == null ? xr : Math.pow(xr, e), new yt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Yn : Math.pow(Yn, e), new yt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new yt(cn(this.r), cn(this.g), cn(this.b), br(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: po,
  // Deprecated! Use color.formatHex.
  formatHex: po,
  formatHex8: Zu,
  formatRgb: ho,
  toString: ho
}));
function po() {
  return `#${ln(this.r)}${ln(this.g)}${ln(this.b)}`;
}
function Zu() {
  return `#${ln(this.r)}${ln(this.g)}${ln(this.b)}${ln((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ho() {
  const e = br(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${cn(this.r)}, ${cn(this.g)}, ${cn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function br(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function cn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ln(e) {
  return e = cn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function mo(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new St(e, t, n, a);
}
function Ti(e) {
  if (e instanceof St) return new St(e.h, e.s, e.l, e.opacity);
  if (e instanceof tr || (e = Xn(e)), !e) return new St();
  if (e instanceof St) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, s = Math.min(t, n, a), o = Math.max(t, n, a), i = NaN, l = o - s, u = (o + s) / 2;
  return l ? (t === o ? i = (n - a) / l + (n < a) * 6 : n === o ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= u < 0.5 ? o + s : 2 - o - s, i *= 60) : l = u > 0 && u < 1 ? 0 : i, new St(i, l, u, e.opacity);
}
function Qu(e, t, n, a) {
  return arguments.length === 1 ? Ti(e) : new St(e, t, n, a ?? 1);
}
function St(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
As(St, Qu, Di(tr, {
  brighter(e) {
    return e = e == null ? xr : Math.pow(xr, e), new St(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Yn : Math.pow(Yn, e), new St(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, s = 2 * n - a;
    return new yt(
      $a(e >= 240 ? e - 240 : e + 120, s, a),
      $a(e, s, a),
      $a(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new St(go(this.h), cr(this.s), cr(this.l), br(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = br(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${go(this.h)}, ${cr(this.s) * 100}%, ${cr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function go(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function cr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function $a(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Es = (e) => () => e;
function ed(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function td(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function nd(e) {
  return (e = +e) == 1 ? $i : function(t, n) {
    return n - t ? td(t, n, e) : Es(isNaN(t) ? n : t);
  };
}
function $i(e, t) {
  var n = t - e;
  return n ? ed(e, n) : Es(isNaN(e) ? t : e);
}
const xo = (function e(t) {
  var n = nd(t);
  function a(s, o) {
    var i = n((s = Za(s)).r, (o = Za(o)).r), l = n(s.g, o.g), u = n(s.b, o.b), c = $i(s.opacity, o.opacity);
    return function(d) {
      return s.r = i(d), s.g = l(d), s.b = u(d), s.opacity = c(d), s + "";
    };
  }
  return a.gamma = e, a;
})(1);
function rd(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), s;
  return function(o) {
    for (s = 0; s < n; ++s) a[s] = e[s] * (1 - o) + t[s] * o;
    return a;
  };
}
function ad(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function sd(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, s = new Array(a), o = new Array(n), i;
  for (i = 0; i < a; ++i) s[i] = Rs(e[i], t[i]);
  for (; i < n; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) o[i] = s[i](l);
    return o;
  };
}
function od(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function yr(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function id(e, t) {
  var n = {}, a = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? n[s] = Rs(e[s], t[s]) : a[s] = t[s];
  return function(o) {
    for (s in n) a[s] = n[s](o);
    return a;
  };
}
var Qa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ia = new RegExp(Qa.source, "g");
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
function ud(e, t) {
  var n = Qa.lastIndex = Ia.lastIndex = 0, a, s, o, i = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (a = Qa.exec(e)) && (s = Ia.exec(t)); )
    (o = s.index) > n && (o = t.slice(n, o), l[i] ? l[i] += o : l[++i] = o), (a = a[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, u.push({ i, x: yr(a, s) })), n = Ia.lastIndex;
  return n < t.length && (o = t.slice(n), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? u[0] ? cd(u[0].x) : ld(t) : (t = u.length, function(c) {
    for (var d = 0, f; d < t; ++d) l[(f = u[d]).i] = f.x(c);
    return l.join("");
  });
}
function Rs(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Es(t) : (n === "number" ? yr : n === "string" ? (a = Xn(t)) ? (t = a, xo) : ud : t instanceof Xn ? xo : t instanceof Date ? od : ad(t) ? rd : Array.isArray(t) ? sd : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? id : yr)(e, t);
}
function dd(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function fd(e) {
  return function() {
    return e;
  };
}
function pd(e) {
  return +e;
}
var bo = [0, 1];
function kn(e) {
  return e;
}
function es(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : fd(isNaN(t) ? NaN : 0.5);
}
function hd(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function md(e, t, n) {
  var a = e[0], s = e[1], o = t[0], i = t[1];
  return s < a ? (a = es(s, a), o = n(i, o)) : (a = es(a, s), o = n(o, i)), function(l) {
    return o(a(l));
  };
}
function gd(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, s = new Array(a), o = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    s[i] = es(e[i], e[i + 1]), o[i] = n(t[i], t[i + 1]);
  return function(l) {
    var u = Lu(e, l, 1, a) - 1;
    return o[u](s[u](l));
  };
}
function Ii(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function xd() {
  var e = bo, t = bo, n = Rs, a, s, o, i = kn, l, u, c;
  function d() {
    var h = Math.min(e.length, t.length);
    return i !== kn && (i = hd(e[0], e[h - 1])), l = h > 2 ? gd : md, u = c = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = l(e.map(a), t, n)))(a(i(h)));
  }
  return f.invert = function(h) {
    return i(s((c || (c = l(t, e.map(a), yr)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, pd), d()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), d()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = dd, d();
  }, f.clamp = function(h) {
    return arguments.length ? (i = h ? !0 : kn, d()) : i !== kn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, d()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, g) {
    return a = h, s = g, d();
  };
}
function Mi() {
  return xd()(kn, kn);
}
function bd(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function vr(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function In(e) {
  return e = vr(Math.abs(e)), e ? e[1] : NaN;
}
function yd(e, t) {
  return function(n, a) {
    for (var s = n.length, o = [], i = 0, l = e[0], u = 0; s > 0 && l > 0 && (u + l + 1 > a && (l = Math.max(1, a - u)), o.push(n.substring(s -= l, s + l)), !((u += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return o.reverse().join(t);
  };
}
function vd(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var wd = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function wr(e) {
  if (!(t = wd.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Bs({
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
wr.prototype = Bs.prototype;
function Bs(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Bs.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function _d(e) {
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
var Li;
function Sd(e, t) {
  var n = vr(e, t);
  if (!n) return e + "";
  var a = n[0], s = n[1], o = s - (Li = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, i = a.length;
  return o === i ? a : o > i ? a + new Array(o - i + 1).join("0") : o > 0 ? a.slice(0, o) + "." + a.slice(o) : "0." + new Array(1 - o).join("0") + vr(e, Math.max(0, t + o - 1))[0];
}
function yo(e, t) {
  var n = vr(e, t);
  if (!n) return e + "";
  var a = n[0], s = n[1];
  return s < 0 ? "0." + new Array(-s).join("0") + a : a.length > s + 1 ? a.slice(0, s + 1) + "." + a.slice(s + 1) : a + new Array(s - a.length + 2).join("0");
}
const vo = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: bd,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => yo(e * 100, t),
  r: yo,
  s: Sd,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function wo(e) {
  return e;
}
var _o = Array.prototype.map, So = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function kd(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? wo : yd(_o.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? wo : vd(_o.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = wr(f);
    var h = f.fill, g = f.align, v = f.sign, m = f.symbol, p = f.zero, b = f.width, T = f.comma, L = f.precision, k = f.trim, j = f.type;
    j === "n" ? (T = !0, j = "g") : vo[j] || (L === void 0 && (L = 12), k = !0, j = "g"), (p || h === "0" && g === "=") && (p = !0, h = "0", g = "=");
    var M = m === "$" ? n : m === "#" && /[boxX]/.test(j) ? "0" + j.toLowerCase() : "", I = m === "$" ? a : /[%p]/.test(j) ? i : "", C = vo[j], y = /[defgprs%]/.test(j);
    L = L === void 0 ? 6 : /[gprs]/.test(j) ? Math.max(1, Math.min(21, L)) : Math.max(0, Math.min(20, L));
    function $(_) {
      var x = M, P = I, N, S, D;
      if (j === "c")
        P = C(_) + P, _ = "";
      else {
        _ = +_;
        var A = _ < 0 || 1 / _ < 0;
        if (_ = isNaN(_) ? u : C(Math.abs(_), L), k && (_ = _d(_)), A && +_ == 0 && v !== "+" && (A = !1), x = (A ? v === "(" ? v : l : v === "-" || v === "(" ? "" : v) + x, P = (j === "s" ? So[8 + Li / 3] : "") + P + (A && v === "(" ? ")" : ""), y) {
          for (N = -1, S = _.length; ++N < S; )
            if (D = _.charCodeAt(N), 48 > D || D > 57) {
              P = (D === 46 ? s + _.slice(N + 1) : _.slice(N)) + P, _ = _.slice(0, N);
              break;
            }
        }
      }
      T && !p && (_ = t(_, 1 / 0));
      var re = x.length + _.length + P.length, G = re < b ? new Array(b - re + 1).join(h) : "";
      switch (T && p && (_ = t(G + _, G.length ? b - P.length : 1 / 0), G = ""), g) {
        case "<":
          _ = x + _ + P + G;
          break;
        case "=":
          _ = x + G + _ + P;
          break;
        case "^":
          _ = G.slice(0, re = G.length >> 1) + x + _ + P + G.slice(re);
          break;
        default:
          _ = G + x + _ + P;
          break;
      }
      return o(_);
    }
    return $.toString = function() {
      return f + "";
    }, $;
  }
  function d(f, h) {
    var g = c((f = wr(f), f.type = "f", f)), v = Math.max(-8, Math.min(8, Math.floor(In(h) / 3))) * 3, m = Math.pow(10, -v), p = So[8 + v / 3];
    return function(b) {
      return g(m * b) + p;
    };
  }
  return {
    format: c,
    formatPrefix: d
  };
}
var ur, Pi, Fi;
Cd({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Cd(e) {
  return ur = kd(e), Pi = ur.format, Fi = ur.formatPrefix, ur;
}
function jd(e) {
  return Math.max(0, -In(Math.abs(e)));
}
function Nd(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(In(t) / 3))) * 3 - In(Math.abs(e)));
}
function Dd(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, In(t) - In(e)) + 1;
}
function Td(e, t, n, a) {
  var s = Ja(e, t, n), o;
  switch (a = wr(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(o = Nd(s, i)) && (a.precision = o), Fi(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(o = Dd(s, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = o - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(o = jd(s)) && (a.precision = o - (a.type === "%") * 2);
      break;
    }
  }
  return Pi(a);
}
function $d(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return Hu(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var s = t();
    return Td(s[0], s[s.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), s = 0, o = a.length - 1, i = a[s], l = a[o], u, c, d = 10;
    for (l < i && (c = i, i = l, l = c, c = s, s = o, o = c); d-- > 0; ) {
      if (c = Ka(i, l, n), c === u)
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
function _r() {
  var e = Mi();
  return e.copy = function() {
    return Ii(e, _r());
  }, ia.apply(e, arguments), $d(e);
}
function Id(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, s = e[n], o = e[a], i;
  return o < s && (i = n, n = a, a = i, i = s, s = o, o = i), e[n] = t.floor(s), e[a] = t.ceil(o), e;
}
const Ma = /* @__PURE__ */ new Date(), La = /* @__PURE__ */ new Date();
function at(e, t, n, a) {
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
  }, s.filter = (o) => at((i) => {
    if (i >= i) for (; e(i), !o(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !o(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !o(i); )
          ;
  }), n && (s.count = (o, i) => (Ma.setTime(+o), La.setTime(+i), e(Ma), e(La), Math.floor(n(Ma, La))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(a ? (i) => a(i) % o === 0 : (i) => s.count(0, i) % o === 0) : s)), s;
}
const Sr = at(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Sr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? at((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Sr);
Sr.range;
const zt = 1e3, wt = zt * 60, Vt = wt * 60, Yt = Vt * 24, Hs = Yt * 7, ko = Yt * 30, Pa = Yt * 365, Cn = at((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * zt);
}, (e, t) => (t - e) / zt, (e) => e.getUTCSeconds());
Cn.range;
const Us = at((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * zt);
}, (e, t) => {
  e.setTime(+e + t * wt);
}, (e, t) => (t - e) / wt, (e) => e.getMinutes());
Us.range;
const Md = at((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * wt);
}, (e, t) => (t - e) / wt, (e) => e.getUTCMinutes());
Md.range;
const Os = at((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * zt - e.getMinutes() * wt);
}, (e, t) => {
  e.setTime(+e + t * Vt);
}, (e, t) => (t - e) / Vt, (e) => e.getHours());
Os.range;
const Ld = at((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Vt);
}, (e, t) => (t - e) / Vt, (e) => e.getUTCHours());
Ld.range;
const nr = at(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * wt) / Yt,
  (e) => e.getDate() - 1
);
nr.range;
const Ws = at((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Yt, (e) => e.getUTCDate() - 1);
Ws.range;
const Pd = at((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Yt, (e) => Math.floor(e / Yt));
Pd.range;
function gn(e) {
  return at((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * wt) / Hs);
}
const la = gn(0), kr = gn(1), Fd = gn(2), Ad = gn(3), Mn = gn(4), Ed = gn(5), Rd = gn(6);
la.range;
kr.range;
Fd.range;
Ad.range;
Mn.range;
Ed.range;
Rd.range;
function xn(e) {
  return at((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Hs);
}
const Ai = xn(0), Cr = xn(1), Bd = xn(2), Hd = xn(3), Ln = xn(4), Ud = xn(5), Od = xn(6);
Ai.range;
Cr.range;
Bd.range;
Hd.range;
Ln.range;
Ud.range;
Od.range;
const Kn = at((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Kn.range;
const Wd = at((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Wd.range;
const qt = at((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
qt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : at((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
qt.range;
const hn = at((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
hn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : at((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
hn.range;
function zd(e, t, n, a, s, o) {
  const i = [
    [Cn, 1, zt],
    [Cn, 5, 5 * zt],
    [Cn, 15, 15 * zt],
    [Cn, 30, 30 * zt],
    [o, 1, wt],
    [o, 5, 5 * wt],
    [o, 15, 15 * wt],
    [o, 30, 30 * wt],
    [s, 1, Vt],
    [s, 3, 3 * Vt],
    [s, 6, 6 * Vt],
    [s, 12, 12 * Vt],
    [a, 1, Yt],
    [a, 2, 2 * Yt],
    [n, 1, Hs],
    [t, 1, ko],
    [t, 3, 3 * ko],
    [e, 1, Pa]
  ];
  function l(c, d, f) {
    const h = d < c;
    h && ([c, d] = [d, c]);
    const g = f && typeof f.range == "function" ? f : u(c, d, f), v = g ? g.range(c, +d + 1) : [];
    return h ? v.reverse() : v;
  }
  function u(c, d, f) {
    const h = Math.abs(d - c) / f, g = Fs(([, , p]) => p).right(i, h);
    if (g === i.length) return e.every(Ja(c / Pa, d / Pa, f));
    if (g === 0) return Sr.every(Math.max(Ja(c, d, f), 1));
    const [v, m] = i[h / i[g - 1][2] < i[g][2] / h ? g - 1 : g];
    return v.every(m);
  }
  return [l, u];
}
const [Vd, Gd] = zd(qt, Kn, la, nr, Os, Us);
function Fa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Aa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Bn(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Yd(e) {
  var t = e.dateTime, n = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, u = e.shortMonths, c = Hn(s), d = Un(s), f = Hn(o), h = Un(o), g = Hn(i), v = Un(i), m = Hn(l), p = Un(l), b = Hn(u), T = Un(u), L = {
    a: A,
    A: re,
    b: G,
    B,
    c: null,
    d: $o,
    e: $o,
    f: xf,
    g: Nf,
    G: Tf,
    H: hf,
    I: mf,
    j: gf,
    L: Ei,
    m: bf,
    M: yf,
    p: H,
    q: V,
    Q: Lo,
    s: Po,
    S: vf,
    u: wf,
    U: _f,
    V: Sf,
    w: kf,
    W: Cf,
    x: null,
    X: null,
    y: jf,
    Y: Df,
    Z: $f,
    "%": Mo
  }, k = {
    a: se,
    A: O,
    b: fe,
    B: we,
    c: null,
    d: Io,
    e: Io,
    f: Pf,
    g: zf,
    G: Gf,
    H: If,
    I: Mf,
    j: Lf,
    L: Bi,
    m: Ff,
    M: Af,
    p: ue,
    q: ce,
    Q: Lo,
    s: Po,
    S: Ef,
    u: Rf,
    U: Bf,
    V: Hf,
    w: Uf,
    W: Of,
    x: null,
    X: null,
    y: Wf,
    Y: Vf,
    Z: Yf,
    "%": Mo
  }, j = {
    a: $,
    A: _,
    b: x,
    B: P,
    c: N,
    d: Do,
    e: Do,
    f: uf,
    g: No,
    G: jo,
    H: To,
    I: To,
    j: sf,
    L: cf,
    m: af,
    M: of,
    p: y,
    q: rf,
    Q: ff,
    s: pf,
    S: lf,
    u: Zd,
    U: Qd,
    V: ef,
    w: Jd,
    W: tf,
    x: S,
    X: D,
    y: No,
    Y: jo,
    Z: nf,
    "%": df
  };
  L.x = M(n, L), L.X = M(a, L), L.c = M(t, L), k.x = M(n, k), k.X = M(a, k), k.c = M(t, k);
  function M(K, ae) {
    return function(de) {
      var w = [], R = -1, W = 0, ne = K.length, Z, oe, xe;
      for (de instanceof Date || (de = /* @__PURE__ */ new Date(+de)); ++R < ne; )
        K.charCodeAt(R) === 37 && (w.push(K.slice(W, R)), (oe = Co[Z = K.charAt(++R)]) != null ? Z = K.charAt(++R) : oe = Z === "e" ? " " : "0", (xe = ae[Z]) && (Z = xe(de, oe)), w.push(Z), W = R + 1);
      return w.push(K.slice(W, R)), w.join("");
    };
  }
  function I(K, ae) {
    return function(de) {
      var w = Bn(1900, void 0, 1), R = C(w, K, de += "", 0), W, ne;
      if (R != de.length) return null;
      if ("Q" in w) return new Date(w.Q);
      if ("s" in w) return new Date(w.s * 1e3 + ("L" in w ? w.L : 0));
      if (ae && !("Z" in w) && (w.Z = 0), "p" in w && (w.H = w.H % 12 + w.p * 12), w.m === void 0 && (w.m = "q" in w ? w.q : 0), "V" in w) {
        if (w.V < 1 || w.V > 53) return null;
        "w" in w || (w.w = 1), "Z" in w ? (W = Aa(Bn(w.y, 0, 1)), ne = W.getUTCDay(), W = ne > 4 || ne === 0 ? Cr.ceil(W) : Cr(W), W = Ws.offset(W, (w.V - 1) * 7), w.y = W.getUTCFullYear(), w.m = W.getUTCMonth(), w.d = W.getUTCDate() + (w.w + 6) % 7) : (W = Fa(Bn(w.y, 0, 1)), ne = W.getDay(), W = ne > 4 || ne === 0 ? kr.ceil(W) : kr(W), W = nr.offset(W, (w.V - 1) * 7), w.y = W.getFullYear(), w.m = W.getMonth(), w.d = W.getDate() + (w.w + 6) % 7);
      } else ("W" in w || "U" in w) && ("w" in w || (w.w = "u" in w ? w.u % 7 : "W" in w ? 1 : 0), ne = "Z" in w ? Aa(Bn(w.y, 0, 1)).getUTCDay() : Fa(Bn(w.y, 0, 1)).getDay(), w.m = 0, w.d = "W" in w ? (w.w + 6) % 7 + w.W * 7 - (ne + 5) % 7 : w.w + w.U * 7 - (ne + 6) % 7);
      return "Z" in w ? (w.H += w.Z / 100 | 0, w.M += w.Z % 100, Aa(w)) : Fa(w);
    };
  }
  function C(K, ae, de, w) {
    for (var R = 0, W = ae.length, ne = de.length, Z, oe; R < W; ) {
      if (w >= ne) return -1;
      if (Z = ae.charCodeAt(R++), Z === 37) {
        if (Z = ae.charAt(R++), oe = j[Z in Co ? ae.charAt(R++) : Z], !oe || (w = oe(K, de, w)) < 0) return -1;
      } else if (Z != de.charCodeAt(w++))
        return -1;
    }
    return w;
  }
  function y(K, ae, de) {
    var w = c.exec(ae.slice(de));
    return w ? (K.p = d.get(w[0].toLowerCase()), de + w[0].length) : -1;
  }
  function $(K, ae, de) {
    var w = g.exec(ae.slice(de));
    return w ? (K.w = v.get(w[0].toLowerCase()), de + w[0].length) : -1;
  }
  function _(K, ae, de) {
    var w = f.exec(ae.slice(de));
    return w ? (K.w = h.get(w[0].toLowerCase()), de + w[0].length) : -1;
  }
  function x(K, ae, de) {
    var w = b.exec(ae.slice(de));
    return w ? (K.m = T.get(w[0].toLowerCase()), de + w[0].length) : -1;
  }
  function P(K, ae, de) {
    var w = m.exec(ae.slice(de));
    return w ? (K.m = p.get(w[0].toLowerCase()), de + w[0].length) : -1;
  }
  function N(K, ae, de) {
    return C(K, t, ae, de);
  }
  function S(K, ae, de) {
    return C(K, n, ae, de);
  }
  function D(K, ae, de) {
    return C(K, a, ae, de);
  }
  function A(K) {
    return i[K.getDay()];
  }
  function re(K) {
    return o[K.getDay()];
  }
  function G(K) {
    return u[K.getMonth()];
  }
  function B(K) {
    return l[K.getMonth()];
  }
  function H(K) {
    return s[+(K.getHours() >= 12)];
  }
  function V(K) {
    return 1 + ~~(K.getMonth() / 3);
  }
  function se(K) {
    return i[K.getUTCDay()];
  }
  function O(K) {
    return o[K.getUTCDay()];
  }
  function fe(K) {
    return u[K.getUTCMonth()];
  }
  function we(K) {
    return l[K.getUTCMonth()];
  }
  function ue(K) {
    return s[+(K.getUTCHours() >= 12)];
  }
  function ce(K) {
    return 1 + ~~(K.getUTCMonth() / 3);
  }
  return {
    format: function(K) {
      var ae = M(K += "", L);
      return ae.toString = function() {
        return K;
      }, ae;
    },
    parse: function(K) {
      var ae = I(K += "", !1);
      return ae.toString = function() {
        return K;
      }, ae;
    },
    utcFormat: function(K) {
      var ae = M(K += "", k);
      return ae.toString = function() {
        return K;
      }, ae;
    },
    utcParse: function(K) {
      var ae = I(K += "", !0);
      return ae.toString = function() {
        return K;
      }, ae;
    }
  };
}
var Co = { "-": "", _: " ", 0: "0" }, lt = /^\s*\d+/, qd = /^%/, Xd = /[\\^$*+?|[\]().{}]/g;
function Re(e, t, n) {
  var a = e < 0 ? "-" : "", s = (a ? -e : e) + "", o = s.length;
  return a + (o < n ? new Array(n - o + 1).join(t) + s : s);
}
function Kd(e) {
  return e.replace(Xd, "\\$&");
}
function Hn(e) {
  return new RegExp("^(?:" + e.map(Kd).join("|") + ")", "i");
}
function Un(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function Jd(e, t, n) {
  var a = lt.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function Zd(e, t, n) {
  var a = lt.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function Qd(e, t, n) {
  var a = lt.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function ef(e, t, n) {
  var a = lt.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function tf(e, t, n) {
  var a = lt.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function jo(e, t, n) {
  var a = lt.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function No(e, t, n) {
  var a = lt.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function nf(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function rf(e, t, n) {
  var a = lt.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function af(e, t, n) {
  var a = lt.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Do(e, t, n) {
  var a = lt.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function sf(e, t, n) {
  var a = lt.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function To(e, t, n) {
  var a = lt.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function of(e, t, n) {
  var a = lt.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function lf(e, t, n) {
  var a = lt.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function cf(e, t, n) {
  var a = lt.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function uf(e, t, n) {
  var a = lt.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function df(e, t, n) {
  var a = qd.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function ff(e, t, n) {
  var a = lt.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function pf(e, t, n) {
  var a = lt.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function $o(e, t) {
  return Re(e.getDate(), t, 2);
}
function hf(e, t) {
  return Re(e.getHours(), t, 2);
}
function mf(e, t) {
  return Re(e.getHours() % 12 || 12, t, 2);
}
function gf(e, t) {
  return Re(1 + nr.count(qt(e), e), t, 3);
}
function Ei(e, t) {
  return Re(e.getMilliseconds(), t, 3);
}
function xf(e, t) {
  return Ei(e, t) + "000";
}
function bf(e, t) {
  return Re(e.getMonth() + 1, t, 2);
}
function yf(e, t) {
  return Re(e.getMinutes(), t, 2);
}
function vf(e, t) {
  return Re(e.getSeconds(), t, 2);
}
function wf(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function _f(e, t) {
  return Re(la.count(qt(e) - 1, e), t, 2);
}
function Ri(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Mn(e) : Mn.ceil(e);
}
function Sf(e, t) {
  return e = Ri(e), Re(Mn.count(qt(e), e) + (qt(e).getDay() === 4), t, 2);
}
function kf(e) {
  return e.getDay();
}
function Cf(e, t) {
  return Re(kr.count(qt(e) - 1, e), t, 2);
}
function jf(e, t) {
  return Re(e.getFullYear() % 100, t, 2);
}
function Nf(e, t) {
  return e = Ri(e), Re(e.getFullYear() % 100, t, 2);
}
function Df(e, t) {
  return Re(e.getFullYear() % 1e4, t, 4);
}
function Tf(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Mn(e) : Mn.ceil(e), Re(e.getFullYear() % 1e4, t, 4);
}
function $f(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Re(t / 60 | 0, "0", 2) + Re(t % 60, "0", 2);
}
function Io(e, t) {
  return Re(e.getUTCDate(), t, 2);
}
function If(e, t) {
  return Re(e.getUTCHours(), t, 2);
}
function Mf(e, t) {
  return Re(e.getUTCHours() % 12 || 12, t, 2);
}
function Lf(e, t) {
  return Re(1 + Ws.count(hn(e), e), t, 3);
}
function Bi(e, t) {
  return Re(e.getUTCMilliseconds(), t, 3);
}
function Pf(e, t) {
  return Bi(e, t) + "000";
}
function Ff(e, t) {
  return Re(e.getUTCMonth() + 1, t, 2);
}
function Af(e, t) {
  return Re(e.getUTCMinutes(), t, 2);
}
function Ef(e, t) {
  return Re(e.getUTCSeconds(), t, 2);
}
function Rf(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Bf(e, t) {
  return Re(Ai.count(hn(e) - 1, e), t, 2);
}
function Hi(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ln(e) : Ln.ceil(e);
}
function Hf(e, t) {
  return e = Hi(e), Re(Ln.count(hn(e), e) + (hn(e).getUTCDay() === 4), t, 2);
}
function Uf(e) {
  return e.getUTCDay();
}
function Of(e, t) {
  return Re(Cr.count(hn(e) - 1, e), t, 2);
}
function Wf(e, t) {
  return Re(e.getUTCFullYear() % 100, t, 2);
}
function zf(e, t) {
  return e = Hi(e), Re(e.getUTCFullYear() % 100, t, 2);
}
function Vf(e, t) {
  return Re(e.getUTCFullYear() % 1e4, t, 4);
}
function Gf(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Ln(e) : Ln.ceil(e), Re(e.getUTCFullYear() % 1e4, t, 4);
}
function Yf() {
  return "+0000";
}
function Mo() {
  return "%";
}
function Lo(e) {
  return +e;
}
function Po(e) {
  return Math.floor(+e / 1e3);
}
var wn, Ui;
qf({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function qf(e) {
  return wn = Yd(e), Ui = wn.format, wn.parse, wn.utcFormat, wn.utcParse, wn;
}
function Xf(e) {
  return new Date(e);
}
function Kf(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Oi(e, t, n, a, s, o, i, l, u, c) {
  var d = Mi(), f = d.invert, h = d.domain, g = c(".%L"), v = c(":%S"), m = c("%I:%M"), p = c("%I %p"), b = c("%a %d"), T = c("%b %d"), L = c("%B"), k = c("%Y");
  function j(M) {
    return (u(M) < M ? g : l(M) < M ? v : i(M) < M ? m : o(M) < M ? p : a(M) < M ? s(M) < M ? b : T : n(M) < M ? L : k)(M);
  }
  return d.invert = function(M) {
    return new Date(f(M));
  }, d.domain = function(M) {
    return arguments.length ? h(Array.from(M, Kf)) : h().map(Xf);
  }, d.ticks = function(M) {
    var I = h();
    return e(I[0], I[I.length - 1], M ?? 10);
  }, d.tickFormat = function(M, I) {
    return I == null ? j : c(I);
  }, d.nice = function(M) {
    var I = h();
    return (!M || typeof M.range != "function") && (M = t(I[0], I[I.length - 1], M ?? 10)), M ? h(Id(I, M)) : d;
  }, d.copy = function() {
    return Ii(d, Oi(e, t, n, a, s, o, i, l, u, c));
  }, d;
}
function zs() {
  return ia.apply(Oi(Vd, Gd, qt, Kn, la, nr, Os, Us, Cn, Ui).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Jf({
  task: e,
  scale: t,
  onTaskClick: n,
  onTaskDoubleClick: a,
  isSelected: s = !1,
  taskIndex: o,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": u
}) {
  const c = Ee(null), [d, f] = Fe(!1), [h, g] = Fe(!1), v = t(e.start), m = t(e.end), p = Math.max(m - v, 20), b = () => {
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
  }, T = e.progress ? p * e.progress / 100 : 0, L = () => {
    n?.(e);
  }, k = () => {
    a?.(e);
  }, j = (x) => {
    x.key === "Enter" ? (x.preventDefault(), L()) : x.key === " " && (x.preventDefault(), k());
  }, M = () => {
    f(!0);
  }, I = () => {
    f(!1);
  }, C = () => {
    g(!0), l?.();
  }, y = () => {
    g(!1);
  }, $ = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (h || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), _ = {
    "--task-left": `${v}px`,
    "--task-width": `${p}px`,
    "--task-color": b(),
    left: `${v}px`,
    width: `${p}px`,
    backgroundColor: b()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": o,
      className: $,
      style: _,
      onClick: L,
      onDoubleClick: k,
      onKeyDown: j,
      onMouseDown: M,
      onMouseUp: I,
      onFocus: C,
      onBlur: y,
      "aria-label": u || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${T}px` }
          }
        ),
        /* @__PURE__ */ r.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function Zf({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let g = e.getTime(); g <= t.getTime(); g += 864e5)
    a.push(new Date(g));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = Fe(-1), u = Ee(null), c = (g) => {
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
              const m = g.getTime() === o.getTime(), p = i === v;
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
function Qf({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, u] = Fe(!1), [c, d] = Fe(-1), f = Ee(null);
  We(() => {
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
          m.preventDefault(), o === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-timeline") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 1}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowDown":
          m.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 3}"] .timeline-container`) : null)?.focus();
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
        const T = Math.min(t.length - 1, c + 1);
        d(T), f.current?.querySelector(`[data-task-index="${T}"]`)?.focus();
        break;
      case "Enter":
        m.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        m.preventDefault(), c >= 0 && s?.(t[c]);
        break;
      case "Escape":
        m.preventDefault(), u(!1), d(-1), f.current?.focus();
        break;
    }
  }, g = (m) => {
    switch (m.key) {
      case "ArrowUp":
        m.preventDefault(), o === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-resource") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowDown":
        m.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`) : null)?.focus();
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
              Jf,
              {
                task: m,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: s,
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
function ry({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: s,
  onTaskDoubleClick: o
}) {
  const i = Ee(null), [l, u] = Fe(800), c = $e(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const m = new Date(n);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : m;
  }, [n]), d = $e(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const m = new Date(a);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : m;
  }, [a]), f = $e(() => Math.ceil((d.getTime() - c.getTime()) / 864e5) + 1, [c, d]);
  We(() => {
    if (!i.current || typeof window > "u") return;
    const m = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!m) return;
    const p = new m((b) => {
      const T = b[0];
      T && u(Math.max(T.contentRect.width - 220, 400));
    });
    return p.observe(i.current), () => p.disconnect();
  }, []);
  const h = $e(
    () => zs().domain([c, d]).range([0, l]),
    [c, d, l]
  ), g = $e(() => {
    const m = /* @__PURE__ */ new Map();
    return t.forEach((p) => {
      const b = m.get(p.resourceId) || [];
      b.push(p), m.set(p.resourceId, b);
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
        /* @__PURE__ */ r.jsx(Zf, { viewStart: c, viewEnd: d, dateCount: f }),
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
              Qf,
              {
                resource: m,
                tasks: g.get(m.id) || [],
                scale: h,
                onTaskClick: s,
                onTaskDoubleClick: o,
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
const jr = ({
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
) }), ep = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: s,
  text: o,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const u = () => t ? bt.Children.toArray(t).filter(
    (p) => bt.isValidElement(p) && (p.type === jr || p.type?.displayName === "BreadcrumbItem")
  ).map((p) => ({
    text: typeof p.props.children == "string" ? p.props.children : String(p.props.children),
    href: p.props.href,
    active: p.props.active,
    attributes: p.props.attributes
  })) : [], c = () => t ? u() : s && o ? [{ href: s, text: o }] : e, d = () => {
    const m = c();
    if (m && m.length > 0) {
      const p = m.slice().reverse().find((b) => b.href && !b.active);
      if (p)
        return { href: p.href, text: p.text };
    }
    return { text: "Home" };
  }, f = c(), h = d(), g = ve(
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
          bt.Children.map(t, (m, p) => bt.isValidElement(m) && (m.type === jr || m.type?.displayName === "BreadcrumbItem") ? bt.cloneElement(m, { key: p }) : null)
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
}, tp = ep;
tp.Item = jr;
jr.displayName = "BreadcrumbItem";
const Wi = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [s, o] = Fe(!1);
  We(() => {
    o(!0);
  }, []), We(() => {
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
}, ay = ({
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
}, sy = ({
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
}, zi = bt.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: n,
  headingLevel: a = 2,
  headingClasses: s,
  description: o,
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
    s
  ].filter(Boolean).join(" "), m = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const T = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      Gt,
      {
        level: a,
        className: v,
        children: T()
      }
    );
  }, p = () => d.children ? d.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: o }) : null, b = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
          b()
        ] })
      ]
    }
  );
});
zi.displayName = "Card";
const oy = ({
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
}, iy = ({
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
}, ly = ({
  type: e,
  heading: t,
  headingHtml: n,
  headingLevel: a = 3,
  headingClasses: s,
  description: o,
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
    s
  ].filter(Boolean).join(" "), p = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const T = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], L = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        T,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      Gt,
      {
        level: a,
        className: m,
        children: L
      }
    );
  }, b = () => u || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
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
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: b() })
      ]
    }
  );
}, np = ({
  id: e,
  className: t,
  headingText: n,
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
  ), d = () => !n && !a && !l ? null : a ? /* @__PURE__ */ r.jsx(
    Gt,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    Gt,
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
  return /* @__PURE__ */ r.jsxs("div", { className: c, id: e, ...u, children: [
    d(),
    f()
  ] });
}, cy = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...s
}) => {
  const o = ve("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: o, ...s, children: i() });
}, uy = ({
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
  ), o = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((u, c) => /* @__PURE__ */ r.jsx(
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
            o(u),
            u.visuallyHiddenText && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: u.visuallyHiddenText })
          ]
        }
      )
    },
    c
  )) }) });
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ r.jsx("dl", { className: s, ...a, children: e.map((l, u) => /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ r.jsx("dt", { className: "nhsuk-summary-list__key", children: o(l.key) }),
    /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__value", children: o(l.value) }),
    i(l.actions)
  ] }, u)) }) });
}, On = { current: null }, rp = () => {
  if (On.current) return On.current;
  try {
    On.current = require("prismjs");
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
    On.current = null;
  }
  return On.current;
}, ap = (e) => {
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
}, Nr = (e, t, n) => {
  if (n || !t) return e;
  const a = rp();
  if (a && a.languages) {
    const s = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (s)
      try {
        return a.highlight(e, a.languages[s], s);
      } catch {
      }
  }
  return ap(e);
}, sp = ({
  rows: e,
  head: t,
  caption: n,
  captionSize: a,
  firstCellIsHeader: s = !1,
  responsive: o = !1,
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
  const b = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), T = ve(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    d
  ), L = ve(f), k = (y, $) => {
    const _ = ve(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${y.format}`]: y.format
      },
      y.classes
    ), x = {
      scope: "col",
      ...y.colspan && { colSpan: y.colspan },
      ...y.rowspan && { rowSpan: y.rowspan },
      ...o && { role: "columnheader" },
      ...y.attributes
    };
    let P;
    if (y.node != null)
      P = /* @__PURE__ */ r.jsx(r.Fragment, { children: y.node });
    else if (y.html)
      P = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } });
    else if (y.code != null) {
      const N = Array.isArray(y.code), S = N ? y.code.join(`
`) : y.code, D = N || S.includes(`
`), A = {
        className: ve("nhsuk-table__code", y.codeClassName, {
          "nhsuk-table__code--block": D,
          "nhsuk-table__code--inline": !D
        }),
        ...y.codeLanguage ? { "data-language": y.codeLanguage } : {}
      }, re = Nr(S, y.codeLanguage);
      P = D ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...A,
          dangerouslySetInnerHTML: { __html: re }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...A,
          dangerouslySetInnerHTML: { __html: re }
        }
      );
    } else
      P = y.text;
    return /* @__PURE__ */ r.jsx("th", { className: _, ...x, children: P }, $);
  }, j = (y, $, _) => {
    const x = s && _ || y.rowHeader, P = ve(
      x ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${x ? "header" : "cell"}--${y.format}`]: y.format
      },
      y.classes
    ), N = {
      ...x && { scope: "row" },
      ...y.colspan && { colSpan: y.colspan },
      ...y.rowspan && { rowSpan: y.rowspan },
      ...o && {
        role: x ? "rowheader" : "cell",
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
      const re = Array.isArray(y.code), G = re ? y.code.join(`
`) : y.code, B = re || G.includes(`
`), H = {
        className: ve("nhsuk-table__code", y.codeClassName, {
          "nhsuk-table__code--block": B,
          "nhsuk-table__code--inline": !B
        }),
        ...y.codeLanguage ? { "data-language": y.codeLanguage } : {}
      }, V = Nr(
        G,
        y.codeLanguage,
        y.disableHighlight
      );
      S = B ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: V }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: V }
        }
      );
    } else
      S = y.text;
    const D = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      o && y.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        y.header,
        " "
      ] }),
      S
    ] }), A = x ? "th" : "td";
    return /* @__PURE__ */ r.jsx(A, { className: P, ...N, children: D }, $);
  };
  let M = t, I = e;
  !M && v && v.length && (M = v.map((y) => ({
    text: y.title,
    format: y.format,
    classes: y.headerClasses,
    attributes: y.headerAttributes
  }))), !I && v && m && m.length && (I = m.map((y, $) => v.map((_) => {
    const x = _.accessor ? _.accessor(y, $) : y[_.key];
    let P = { format: _.format, classes: _.cellClasses, attributes: _.cellAttributes };
    if (_.rowHeader && (P.rowHeader = !0), _.render) {
      const N = _.render(x, y, $, _);
      return N == null || typeof N == "boolean" ? { ...P, text: "" } : typeof N == "string" || typeof N == "number" ? { ...P, text: String(N) } : { ...P, ...N };
    }
    return { ...P, text: x != null ? String(x) : "" };
  })));
  const C = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: T,
      ...o && { role: "table" },
      ...h,
      ...g && { "data-testid": g },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: ve(b, p && "nhsuk-u-visually-hidden"), children: n }),
        M && M.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...o && { role: "row" }, children: M.map(
              (y, $) => k(y, $)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: I && I.map((y, $) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: y.map(
              (_, x) => j(_, x, x === 0)
            )
          },
          $
        )) })
      ]
    }
  );
  return u ? /* @__PURE__ */ r.jsxs(np, { className: c, children: [
    i && /* @__PURE__ */ r.jsx(Gt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    C()
  ] }) : L ? /* @__PURE__ */ r.jsx("div", { className: L, children: C() }) : C();
}, op = ({
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
}, Vi = ({
  responsive: e,
  className: t,
  children: n,
  ...a
}) => {
  const s = e ? { role: "row" } : {};
  return /* @__PURE__ */ r.jsx("tr", { className: t, ...s, ...a, children: n });
}, Gi = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: s,
  codeClassName: o,
  disableHighlight: i,
  format: l,
  classes: u,
  colspan: c,
  rowspan: d,
  attributes: f,
  responsive: h,
  as: g = "th"
}) => {
  const v = ve(
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
    const T = Array.isArray(a), L = T ? a.join(`
`) : a, k = T || L.includes(`
`), j = {
      className: ve("nhsuk-table__code", o, {
        "nhsuk-table__code--block": k,
        "nhsuk-table__code--inline": !k
      }),
      ...s ? { "data-language": s } : {}
    }, M = Nr(
      L,
      s,
      i
    );
    p = k ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...j,
        dangerouslySetInnerHTML: { __html: M }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...j, dangerouslySetInnerHTML: { __html: M } });
  } else p = e;
  const b = g;
  return /* @__PURE__ */ r.jsx(b, { className: v, ...m, children: p });
}, ip = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: s,
  codeClassName: o,
  disableHighlight: i,
  format: l,
  classes: u,
  colspan: c,
  rowspan: d,
  attributes: f,
  responsive: h,
  rowHeader: g
}) => {
  const v = !!g, m = v ? "th" : "td", p = ve(
    v ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${v ? "header" : "cell"}--${l}`,
    u
  ), b = {
    ...c && { colSpan: c },
    ...d && { rowSpan: d },
    ...v && { scope: "row" },
    ...h && { role: v ? "rowheader" : "cell" },
    ...f
  };
  let T;
  if (n != null) T = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) T = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const L = Array.isArray(a), k = L ? a.join(`
`) : a, j = L || k.includes(`
`), M = {
      className: ve("nhsuk-table__code", o, {
        "nhsuk-table__code--block": j,
        "nhsuk-table__code--inline": !j
      }),
      ...s ? { "data-language": s } : {}
    }, I = Nr(k, s, i);
    T = j ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ...M, dangerouslySetInnerHTML: { __html: I } }) }) : /* @__PURE__ */ r.jsx("code", { ...M, dangerouslySetInnerHTML: { __html: I } });
  } else T = e;
  return /* @__PURE__ */ r.jsx(m, { className: p, ...b, children: T });
}, Xt = sp;
Xt.Caption = op;
Xt.BodyRow = Vi;
Xt.HeaderCell = Gi;
Xt.Cell = ip;
let Fo = !1, Ao = !1;
Object.defineProperty(Xt, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Fo && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), Fo = !0), Vi;
  }
});
Object.defineProperty(Xt, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Ao && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), Ao = !0), Gi;
  }
});
const dy = Pn(({
  items: e,
  defaultActiveTab: t,
  activeTab: n,
  onTabChange: a,
  onTabFocus: s,
  onTabListBlur: o,
  onEscape: i,
  autoActivate: l = !0,
  className: u,
  id: c,
  "data-testid": d,
  ...f
}, h) => {
  const g = n !== void 0, [v, m] = Fe(() => t || e[0]?.id || ""), p = g ? n : v, b = Ee(null), T = Ee(/* @__PURE__ */ new Map()), L = be(($) => {
    g || m($), a?.($);
  }, [g, a]), k = be(($) => {
    s?.($), l && L($);
  }, [s, l, L]), j = be(($, _) => {
    const x = e.filter((S) => !S.disabled).map((S) => S.id), P = x.indexOf(_);
    let N = null;
    switch ($.key) {
      case "ArrowLeft":
        N = P > 0 ? P - 1 : x.length - 1;
        break;
      case "ArrowRight":
        N = P < x.length - 1 ? P + 1 : 0;
        break;
      case "Home":
        N = 0;
        break;
      case "End":
        N = x.length - 1;
        break;
      case "Escape":
        $.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (N !== null) {
      $.preventDefault();
      const S = x[N], D = T.current.get(S);
      D && (D.focus(), k(S));
    }
  }, [e, k, i]), M = be(($, _) => {
    _ ? T.current.set($, _) : T.current.delete($);
  }, []), I = be(($) => {
    const _ = T.current.get($);
    _ && _.focus();
  }, []);
  di(h, () => ({
    focusTab: I,
    getActiveTab: () => p,
    getTabListElement: () => b.current
  }), [I, p]);
  const C = be(($) => {
    const _ = $.relatedTarget;
    b.current?.contains(_) || o?.();
  }, [o]), y = ve("nhsuk-tabs", u);
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
            ref: b,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: C,
                children: e.map(($) => {
                  const _ = $.id === p, x = $.disabled, P = ve("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": _,
                    "nhsuk-tabs__list-item--disabled": x
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: P, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (N) => M($.id, N),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": _,
                      "aria-controls": `${$.id}-panel`,
                      id: `${$.id}-tab`,
                      tabIndex: _ ? 0 : -1,
                      disabled: x,
                      onClick: () => !x && L($.id),
                      onKeyDown: (N) => !x && j(N, $.id),
                      onFocus: () => !x && k($.id),
                      ...$.attributes,
                      children: $.label
                    }
                  ) }, $.id);
                })
              }
            )
          }
        ),
        e.map(($) => {
          const _ = $.id === p;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${$.id}-tab`,
              id: `${$.id}-panel`,
              hidden: !_,
              children: $.content
            },
            $.id
          );
        })
      ]
    }
  );
}), lp = Pn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
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
        open: s,
        ...u,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
lp.displayName = "Details";
const cp = Pn(
  ({
    title: e,
    type: t,
    items: n,
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
      Gt,
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
cp.displayName = "DoDontList";
const up = Pn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
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
        open: s,
        ...u,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
up.displayName = "Expander";
const dp = Pn(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, s) => {
    const o = [
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
        fp,
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
        ref: s,
        className: o,
        ...a,
        children: e.map(i)
      }
    );
  }
), fp = ({
  item: e,
  itemClasses: t,
  hasLink: n,
  hintId: a,
  statusId: s,
  ariaDescribedBy: o
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
  ) : /* @__PURE__ */ r.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, u = () => {
    const c = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let d;
    return e.status.tag ? d = /* @__PURE__ */ r.jsx(Oe, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ r.jsx("div", { className: c, id: s, children: d });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    u()
  ] });
};
dp.displayName = "TaskList";
const fy = ({
  heading: e,
  headingLevel: t = 3,
  text: n,
  html: a,
  children: s,
  className: o,
  ...i
}) => {
  const l = /important/i.test(e), u = () => s || (a ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n ? /* @__PURE__ */ r.jsx("p", { children: n }) : null), c = [
    "nhsuk-warning-callout",
    o
  ].filter(Boolean).join(" "), d = `h${t}`;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: c,
      ...i,
      children: [
        ui(
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
}, py = ({
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
}, pp = ({
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
    /* @__PURE__ */ r.jsx(pt, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ r.jsx(pt, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ r.jsx(pt, { variant: "secondary", size: "small", onClick: n, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ r.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ r.jsx(
      mr,
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
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ r.jsx(
      mr,
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
] }), hp = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(Oe, { color: mp(n.status), text: n.label }) }, n.status)) });
function mp(e) {
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
const hy = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: n,
  defaultValue: a,
  onChange: s,
  selectionMode: o = "single",
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
  const [p, b] = Fe("grid"), T = i || p, [L, k] = Fe(a || []), j = n ?? L, M = $e(() => {
    const N = /* @__PURE__ */ new Set();
    return e.forEach((S) => N.add(new Date(S.start).getTime())), Array.from(N).sort((S, D) => S - D);
  }, [e]), I = $e(() => {
    const N = {};
    return e.forEach((S) => {
      const D = new Date(S.start).getTime();
      N[D] || (N[D] = {});
      const A = S.capacity - S.booked - (S.held || 0);
      N[D][S.sessionId] = { slot: S, remaining: A };
    }), N;
  }, [e]), C = be((N) => {
    if (o === "single") {
      const S = [N.id];
      n || k(S), s?.(S, { lastAction: "select" });
    } else {
      const S = j.includes(N.id), D = S ? j.filter((A) => A !== N.id) : [...j, N.id];
      n || k(D), s?.(D, { lastAction: S ? "deselect" : "select" });
    }
  }, [o, j, n, s]), y = $e(() => h || (g ? Array.from(new Set(e.map((S) => S.status))).map((S) => ({
    status: S,
    label: S.charAt(0).toUpperCase() + S.slice(1)
  })) : void 0), [h, g, e]), $ = y ? /* @__PURE__ */ r.jsx(
    hp,
    {
      items: y,
      orientation: v === "left" || v === "right" ? "vertical" : "horizontal"
    }
  ) : null, _ = (N) => {
    i || b(N), m?.(N);
  }, x = d || (f ? /* @__PURE__ */ r.jsx(
    pp,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: T,
      onA11yModeChange: _
    }
  ) : null), P = /* @__PURE__ */ r.jsx("div", { style: u, className: ve(l), children: /* @__PURE__ */ r.jsx(Xa, { className: ve("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(pn, { children: /* @__PURE__ */ r.jsx(Gn, { width: fn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    x,
    v === "top" && $,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((N) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => C(N), "aria-pressed": j.includes(N.id), children: [
      Wn(new Date(N.start)),
      " – ",
      Wn(new Date(N.end)),
      " (",
      N.status,
      ")"
    ] }) }, N.id)) }),
    v === "bottom" && $
  ] }) }) }) }) });
  return T === "list" ? P : /* @__PURE__ */ r.jsx("div", { style: u, className: ve(l), children: /* @__PURE__ */ r.jsx(Xa, { className: ve("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(pn, { children: /* @__PURE__ */ r.jsx(Gn, { width: fn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    x,
    v === "top" && $,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": M.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((N) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${N.specialty}`, className: "nhs-slot-matrix__session-header", children: N.specialty }, N.id))
      ] }),
      M.map((N) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Wn(new Date(N)), children: Wn(new Date(N)) }),
        t.map((S) => {
          const D = I[N]?.[S.id];
          if (!D)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, S.id);
          const { slot: A, remaining: re } = D, G = j.includes(A.id), B = c ? c(A) : `Slot ${Wn(new Date(A.start))} ${A.status}${re === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": A.status,
              className: ve("nhs-slot-matrix__cell", G && "nhs-slot-matrix__cell--selected"),
              "aria-label": B,
              "aria-selected": G || void 0,
              onClick: () => C(A),
              children: re > 0 ? `${re} left` : "Full"
            },
            A.id
          );
        })
      ] }, N))
    ] }),
    v === "bottom" && $
  ] }) }) }) }) });
};
function Eo(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Wn(e) {
  return `${Eo(e.getHours())}:${Eo(e.getMinutes())}`;
}
const gp = ({
  title: e,
  value: t,
  subtitle: n,
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
  ].filter(Boolean).join(" "), c = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Gt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    n && /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: n })
  ] });
  return s ? /* @__PURE__ */ r.jsx(
    "a",
    {
      className: `${u} nhs-fdp-summary-card--clickable`,
      href: s,
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
}, my = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(Xa, { children: /* @__PURE__ */ r.jsx(pn, { children: e.map((s, o) => /* @__PURE__ */ r.jsx(
    Gn,
    {
      width: fn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": o,
      children: /* @__PURE__ */ r.jsx(gp, { ...s })
    },
    o
  )) }) }) });
}, xp = bt.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: n,
    onSort: a,
    selectedRowIndex: s,
    onRowSelect: o,
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
  }, b) => {
    const T = Ee(null), L = Ee(null), k = Ee(null);
    bt.useImperativeHandle(b, () => T.current, []);
    const [j, M] = Fe(0), [I, C] = Fe(0), [y, $] = Fe("headers"), [_, x] = Fe("browse"), P = t.length, N = e.length, S = $e(() => !n || n.length === 0 ? e : [...e].sort((V, se) => {
      for (const { key: O, direction: fe } of n) {
        const we = V[O], ue = se[O];
        if (we == null && ue == null) continue;
        if (we == null) return 1;
        if (ue == null) return -1;
        let ce = 0;
        if (typeof we == "number" && typeof ue == "number" ? ce = we - ue : ce = String(we).localeCompare(String(ue)), ce !== 0)
          return fe === "asc" ? ce : -ce;
      }
      return 0;
    }), [e, n]), D = be((V, se) => {
      setTimeout(() => {
        const O = T.current?.querySelector(
          `tbody tr:nth-child(${V + 1}) td:nth-child(${se + 1})`
        );
        O && (O.focus(), typeof O.scrollIntoView == "function" && O.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), A = be((V) => {
      setTimeout(() => {
        const se = T.current?.querySelector(`th:nth-child(${V + 1})`);
        se && (se.focus(), typeof se.scrollIntoView == "function" && se.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), re = be((V) => {
      a?.(V);
    }, [a]), G = be((V) => {
      o?.(V);
    }, [o]), B = be((V) => {
      const { key: se } = V;
      switch (se) {
        case "Enter":
          if (V.preventDefault(), y === "headers" && _ === "browse")
            x("navigate"), A(I);
          else if (y === "headers" && _ === "navigate") {
            const O = t[I];
            O && re(O.key);
          } else y === "cells" && _ === "browse" ? (x("navigate"), D(j, I)) : y === "cells" && _ === "navigate" && G(j);
          break;
        case "Escape":
          V.preventDefault(), (y === "headers" && _ === "navigate" || y === "cells" && _ === "navigate") && x("browse");
          break;
        case "ArrowLeft":
          if (V.preventDefault(), _ === "navigate" || _ === "browse" && y === "headers") {
            if (y === "headers") {
              const O = Math.max(0, I - 1);
              C(O), A(O);
            } else if (y === "cells") {
              const O = Math.max(0, I - 1);
              C(O), D(j, O);
            }
          }
          break;
        case "ArrowRight":
          if (V.preventDefault(), _ === "navigate" || _ === "browse" && y === "headers") {
            if (y === "headers") {
              const O = Math.min(P - 1, I + 1);
              C(O), A(O);
            } else if (y === "cells") {
              const O = Math.min(P - 1, I + 1);
              C(O), D(j, O);
            }
          }
          break;
        case "ArrowUp":
          if (V.preventDefault(), y === "cells") {
            if (_ === "browse") {
              const O = Math.max(0, j - 1);
              M(O), D(O, 0), C(0);
            } else if (_ === "navigate")
              if (j > 0) {
                const O = j - 1;
                M(O), D(O, I);
              } else
                $("headers"), x("browse"), A(I);
          }
          break;
        case "ArrowDown":
          if (V.preventDefault(), y === "headers" && _ === "browse")
            $("cells"), M(0), C(0), D(0, 0);
          else if (y === "cells") {
            const O = N - 1;
            if (_ === "browse") {
              const fe = Math.min(O, j + 1);
              M(fe), D(fe, 0), C(0);
            } else if (_ === "navigate" && j < O) {
              const fe = j + 1;
              M(fe), D(fe, I);
            }
          }
          break;
        case "Home":
          V.preventDefault(), y === "headers" ? (C(0), A(0)) : y === "cells" && (V.ctrlKey ? (M(0), C(0), D(0, 0)) : (C(0), D(j, 0)));
          break;
        case "End":
          if (V.preventDefault(), y === "headers") {
            const O = P - 1;
            C(O), A(O);
          } else if (y === "cells")
            if (V.ctrlKey) {
              const O = N - 1, fe = P - 1;
              M(O), C(fe), D(O, fe);
            } else {
              const O = P - 1;
              C(O), D(j, O);
            }
          break;
        case " ":
          if (V.preventDefault(), y === "headers" && _ === "navigate") {
            const O = t[I];
            O && re(O.key);
          } else y === "cells" && _ === "navigate" && G(j);
          break;
      }
    }, [
      y,
      _,
      I,
      j,
      P,
      N,
      t,
      D,
      A,
      re,
      G
    ]);
    We(() => {
      const V = T.current;
      if (V)
        return V.addEventListener("keydown", B), () => V.removeEventListener("keydown", B);
    }, [B]);
    const H = ve(
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
        ref: T,
        className: H,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": u,
        "aria-labelledby": c,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: L, role: "row", children: t.map((V, se) => {
            const O = n?.find((ue) => ue.key === V.key), fe = !!O, we = y === "headers" && I === se;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: ve("sortable-header", {
                  "sortable-header--focused": we
                }),
                role: "columnheader",
                tabIndex: we ? 0 : -1,
                onClick: () => re(V.key),
                onKeyDown: (ue) => {
                  (ue.key === "Enter" || ue.key === " ") && (ue.preventDefault(), re(V.key));
                },
                "aria-sort": fe ? O?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: V.label }),
                  fe && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((ue) => ue.key === V.key) + 1 }),
                    /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: O?.direction === "asc" ? /* @__PURE__ */ r.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ r.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              V.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: k, className: "nhsuk-table__body", role: "rowgroup", children: S.map((V, se) => {
            const O = s === se, fe = y === "cells" && j === se;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: ve("data-row", {
                  "data-row--selected": O,
                  "data-row--focused": fe
                }),
                "aria-selected": O,
                children: t.map((we, ue) => {
                  const ce = we.tableRenderer ? we.tableRenderer(V) : we.render ? we.render(V) : V[we.key], K = y === "cells" && j === se && I === ue, ae = () => typeof ce == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: ce ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: ce ? "Yes" : "No" })
                  ] }) : String(ce ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ve("data-cell", {
                        "data-cell--focused": K
                      }),
                      tabIndex: K ? 0 : -1,
                      onClick: () => G(se),
                      children: ae()
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
xp.displayName = "AriaDataGrid";
const Yi = ({
  sortConfig: e,
  columns: t,
  onSortChange: n,
  className: a = "",
  emptyDescription: s = "No sorting applied",
  activeDescription: o,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: u = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const f = Ee(null), h = Ee(null), g = Ee(null), v = be((y, $) => {
    u || (h.current = $, y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", $));
  }, [u]), m = be((y, $) => {
    u || h.current === $ || (y.preventDefault(), y.dataTransfer.dropEffect = "move", g.current = $);
  }, [u]), p = be((y, $) => {
    if (u) return;
    y.preventDefault();
    const _ = h.current;
    if (!_ || _ === $) return;
    const x = e.findIndex((N) => N.key === _), P = e.findIndex((N) => N.key === $);
    if (x !== -1 && P !== -1) {
      const N = [...e], [S] = N.splice(x, 1);
      N.splice(P, 0, S), n(N);
    }
    h.current = null, g.current = null;
  }, [u, e, n]), b = be(() => {
    h.current = null, g.current = null;
  }, []), T = be((y) => {
    const $ = t.find((_) => _.key === y);
    return $ ? $.label : y;
  }, [t]), L = be((y) => ["red", "orange", "blue", "aqua-green", "grey"][y] || "grey", []), k = be((y) => {
    if (u) return;
    const $ = e.map(
      (_) => _.key === y ? { ..._, direction: _.direction === "asc" ? "desc" : "asc" } : _
    );
    n($);
  }, [e, n, u]), j = be((y) => {
    if (u) return;
    const $ = e.filter((_) => _.key !== y);
    n($);
  }, [e, n, u]), M = be(() => {
    u || n([]);
  }, [n, u]), I = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const y = e.map(($, _) => {
      const x = $.direction === "asc" ? "ascending" : "descending";
      return `${_ + 1}. ${T($.key)} (${x})`;
    });
    if (y.length === 1)
      return `Sorted by: ${y[0]}`;
    if (y.length === 2)
      return `Sorted by: ${y.join(" and ")}`;
    {
      const $ = y.pop();
      return `Sorted by: ${y.join(", ")}, and ${$}`;
    }
  }, C = $e(() => {
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
        children: I()
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
          "aria-describedby": C,
          children: e.map((y, $) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !u,
              onDragStart: (_) => v(_, y.key),
              onDragOver: (_) => m(_, y.key),
              onDrop: (_) => p(_, y.key),
              onDragEnd: b,
              onClick: () => k(y.key),
              style: { cursor: u ? "default" : "pointer" },
              title: u ? "" : `Click to toggle sort direction. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": y.key,
              children: /* @__PURE__ */ r.jsx(
                Oe,
                {
                  color: L($),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => j(y.key),
                  disabled: u,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${$ + 1}`, children: $ + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: T(y.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (_) => {
                          _.stopPropagation(), k(y.key);
                        },
                        disabled: u,
                        "aria-label": `Toggle sort direction for ${T(y.key)}. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
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
        pt,
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
function bp(e, t) {
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
const ts = Pn(function(t, n) {
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
    orientation: h = "horizontal",
    id: g,
    isLoading: v = !1,
    loadingComponent: m,
    error: p = null,
    errorComponent: b,
    "data-testid": T,
    actions: L,
    actionsMinGap: k = 16,
    forceActionsAbove: j = !1
  } = t, I = Ee(
    g || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, C = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), y = `${I}-description`, $ = `${I}-navigation-help`, {
    dataComparator: _ = (F, J) => JSON.stringify(F) === JSON.stringify(J),
    filterFunction: x = (F) => F,
    booleanRenderer: P = (F) => F ? "✓" : "✗"
  } = a || {}, N = o !== void 0, S = o ?? 0, [D, A] = Fe({
    focusArea: "tabs",
    focusedTabIndex: S,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), re = $e(() => ({
    selectedIndex: S,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [S]), [G, B] = fi(bp, re);
  We(() => {
    const F = G.tabLoadingStates.length, J = s.length;
    F !== J && B({ type: "ADJUST_ARRAYS", payload: { newLength: J } });
  }, [s.length]), We(() => {
    N && B({ type: "SET_SELECTED_INDEX", payload: S });
  }, [S, N]), We(() => {
    A((F) => ({
      ...F,
      focusArea: "tabs",
      focusedTabIndex: G.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [G.selectedIndex]), We(() => {
    l && l(G.globalSelectedRowData);
  }, [G.globalSelectedRowData, l]);
  const H = be(
    (F, J) => _(F, J),
    [_]
  ), V = be(
    (F) => {
      F >= 0 && F < s.length && !s[F].disabled && (B({ type: "SET_SELECTED_INDEX", payload: F }), A((J) => ({
        ...J,
        focusedTabIndex: F,
        focusArea: "tabs"
      })), i?.(F));
    },
    [s, i]
  ), se = Ee(!1), O = be(
    (F, J) => {
      if (!J?.force && !se.current && F === 0) {
        se.current = !0;
        return;
      }
      se.current = !0, setTimeout(() => {
        const ee = fe.current[F], te = ee?.parentElement;
        if (ee && te) {
          const U = ee.offsetLeft, X = ee.offsetWidth, le = te.clientWidth, he = U - le / 2 + X / 2;
          try {
            te.scrollTo({
              left: Math.max(0, he),
              behavior: "smooth"
            });
          } catch {
            ee.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!ee,
          tabListElementExists: !!te
        });
      }, 50);
    },
    []
  ), fe = Ee([]), we = Ee([]), ue = be(
    (F, J) => {
      const ee = G.sortConfig || [], te = ee.find(
        (le) => le.key === J
      );
      let U;
      te ? te.direction === "asc" ? U = ee.map(
        (le) => le.key === J ? { ...le, direction: "desc" } : le
      ) : U = ee.filter(
        (le) => le.key !== J
      ) : U = [...ee, { key: J, direction: "asc" }], B({
        type: "SET_SORT",
        payload: U
      }), s[F].onSort?.(J);
    },
    [G.sortConfig, s]
  ), ce = be(
    (F) => {
      setTimeout(() => {
        const J = document.querySelector(
          `[data-tab-panel="${G.selectedIndex}"] th:nth-child(${F + 1})`
        );
        J && J.focus();
      }, 0);
    },
    [G.selectedIndex]
  ), K = be(
    (F) => P(F),
    [P]
  ), ae = be(
    (F, J) => {
      setTimeout(() => {
        const ee = document.querySelector(
          `[data-tab-panel="${G.selectedIndex}"] tbody tr:nth-child(${F + 1}) td:nth-child(${J + 1})`
        );
        ee && ee.focus();
      }, 0);
    },
    [G.selectedIndex]
  );
  We(() => {
    D.isGridActive && (D.focusArea === "headers" ? setTimeout(() => {
      ce(D.focusedHeaderIndex);
    }, 0) : D.focusArea === "cells" && setTimeout(() => {
      ae(
        D.focusedRowIndex,
        D.focusedColumnIndex
      );
    }, 0));
  }, [
    D.focusArea,
    D.isGridActive,
    D.focusedHeaderIndex,
    D.focusedRowIndex,
    D.focusedColumnIndex,
    ce,
    ae
  ]), We(() => {
    O(G.selectedIndex);
  }, [G.selectedIndex, O]);
  const de = be(
    (F, J) => {
      const { key: ee } = F, te = s[G.selectedIndex], U = te?.columns.length || 0;
      switch (ee) {
        case "ArrowLeft":
          F.preventDefault();
          const X = Math.max(0, J - 1);
          A((Ce) => ({
            ...Ce,
            focusedHeaderIndex: X
          })), ce(X);
          break;
        case "ArrowRight":
          F.preventDefault();
          const le = Math.min(U - 1, J + 1);
          A((Ce) => ({
            ...Ce,
            focusedHeaderIndex: le
          })), ce(le);
          break;
        case "ArrowUp":
          F.preventDefault(), A((Ce) => ({
            ...Ce,
            focusArea: "tabs",
            focusedTabIndex: G.selectedIndex
          })), O(G.selectedIndex), fe.current[G.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          F.preventDefault(), A((Ce) => ({
            ...Ce,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: J,
            isGridActive: !0
          }));
          break;
        case "Home":
          F.preventDefault(), A((Ce) => ({ ...Ce, focusedHeaderIndex: 0 })), ce(0);
          break;
        case "End":
          F.preventDefault();
          const he = U - 1;
          A((Ce) => ({
            ...Ce,
            focusedHeaderIndex: he
          })), ce(he);
          break;
        case "Enter":
        case " ":
          F.preventDefault();
          const ie = te?.columns[J]?.key;
          ie && ue(G.selectedIndex, ie);
          break;
      }
    },
    [
      s,
      G.selectedIndex,
      ue,
      A,
      ce,
      ae,
      fe
    ]
  ), w = be(
    (F, J, ee) => {
      const { key: te } = F, U = s[G.selectedIndex], X = U?.data.length || 0, le = U?.columns.length || 0;
      switch (te) {
        case "ArrowUp":
          if (F.preventDefault(), J === 0)
            A((me) => ({
              ...me,
              focusArea: "headers",
              focusedHeaderIndex: ee,
              isGridActive: !1
            })), ce(ee);
          else {
            const me = J - 1;
            A((Ie) => ({
              ...Ie,
              focusedRowIndex: me
            })), ae(me, ee);
          }
          break;
        case "ArrowDown":
          F.preventDefault();
          const he = Math.min(X - 1, J + 1);
          A((me) => ({
            ...me,
            focusedRowIndex: he
          })), ae(he, ee);
          break;
        case "ArrowLeft":
          F.preventDefault();
          const ie = Math.max(0, ee - 1);
          A((me) => ({
            ...me,
            focusedColumnIndex: ie
          })), ae(J, ie);
          break;
        case "ArrowRight":
          F.preventDefault();
          const Ce = Math.min(le - 1, ee + 1);
          A((me) => ({
            ...me,
            focusedColumnIndex: Ce
          })), ae(J, Ce);
          break;
        case "Home":
          F.preventDefault(), F.ctrlKey ? (A((me) => ({
            ...me,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), ae(0, 0)) : (A((me) => ({ ...me, focusedColumnIndex: 0 })), ae(J, 0));
          break;
        case "End":
          if (F.preventDefault(), F.ctrlKey) {
            const me = X - 1, Ie = le - 1;
            A((Ae) => ({
              ...Ae,
              focusedRowIndex: me,
              focusedColumnIndex: Ie
            })), ae(me, Ie);
          } else {
            const me = le - 1;
            A((Ie) => ({
              ...Ie,
              focusedColumnIndex: me
            })), ae(J, me);
          }
          break;
        case "Enter":
        case " ":
          if (F.preventDefault(), U && U.data[J]) {
            const me = U.data.some(
              (ze) => "ews_data" in ze
            ) ? x(U.data, G.filters) : U.data, Ie = G.sortConfig;
            let Ae = me;
            if (Ie && Ie.length > 0 && (Ae = [...me].sort((ze, Le) => {
              for (const { key: Qe, direction: mt } of Ie) {
                let Ke = ze[Qe], tt = Le[Qe];
                const rt = U.columns.find(
                  (Fn) => Fn.key === Qe
                );
                if (rt?.tableRenderer ? (Ke = rt.tableRenderer(ze), tt = rt.tableRenderer(Le)) : rt?.render && (Ke = rt.render(ze), tt = rt.render(Le)), Ke == null && tt == null) continue;
                if (Ke == null) return mt === "asc" ? -1 : 1;
                if (tt == null) return mt === "asc" ? 1 : -1;
                let st = 0;
                if (typeof Ke == "number" && typeof tt == "number" ? st = Ke - tt : st = String(Ke).localeCompare(
                  String(tt),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), st !== 0)
                  return mt === "asc" ? st : -st;
              }
              return 0;
            })), Ae[J]) {
              const ze = Ae[J], Qe = G.globalSelectedRowData && H(G.globalSelectedRowData, ze) ? null : ze;
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
      s,
      G.selectedIndex,
      G.filters,
      G.sortConfig,
      x,
      H,
      B,
      A,
      ce,
      ae
    ]
  ), R = be(
    (F, J) => x(F, J),
    [x]
  );
  if (di(
    n,
    () => ({
      selectTab: (F) => {
        F >= 0 && F < s.length && (B({ type: "SET_SELECTED_INDEX", payload: F }), i?.(F));
      },
      refreshData: (F) => {
        console.log("Refreshing data for tab:", F ?? "all");
      },
      exportData: (F) => {
        const J = F ?? G.selectedIndex, ee = s[J];
        return ee ? ee.data : [];
      },
      getSelectedRows: (F) => G.globalSelectedRowData ? [] : [],
      clearSelection: (F) => {
        B({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (F) => {
        B({ type: "SET_FILTERS", payload: F });
      }
    }),
    [G.selectedIndex, G.selectedRows, s, i]
  ), v)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`,
        "data-testid": T,
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
        "data-testid": T,
        children: b || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: p })
        ] })
      }
    );
  const W = Ee(null), ne = Ee(null), Z = Ee(null), [oe, xe] = Fe(!0);
  We(() => {
    if (!L) {
      xe(!1);
      return;
    }
    if (j) {
      xe(!1);
      return;
    }
    function F() {
      if (!W.current || !ne.current || !Z.current) return;
      const te = W.current.clientWidth, U = Array.from(
        ne.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), X = U.reduce((Ce, me) => Ce + me.offsetWidth, 0), le = Z.current.offsetWidth, he = Math.max(8 * (U.length - 1), 0), ie = X + he + le + k <= te;
      xe(ie);
    }
    const J = requestAnimationFrame(() => F()), ee = new ResizeObserver(() => F());
    return W.current && ee.observe(W.current), ne.current && ee.observe(ne.current), () => {
      cancelAnimationFrame(J), ee.disconnect();
    };
  }, [L, k, j, s.length]);
  const _e = Z, pe = be(() => _e.current ? Array.from(
    _e.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((F) => !F.hasAttribute("disabled")) : [], []), E = be(
    (F) => {
      const J = pe();
      if (!J.length) return;
      const ee = Math.max(0, Math.min(F, J.length - 1));
      J[ee].focus(), A((te) => ({ ...te, focusArea: "actions", focusedActionIndex: ee }));
    },
    [pe]
  ), z = be(() => E(0), [E]), Y = be(
    (F, J) => {
      const { key: ee } = F, te = s.length - 1;
      switch (ee) {
        case "ArrowUp": {
          L && !oe && (F.preventDefault(), z());
          break;
        }
        case "ArrowLeft": {
          F.preventDefault();
          const U = J > 0 ? J - 1 : te;
          V(U), O(U), fe.current[U]?.focus();
          break;
        }
        case "ArrowRight": {
          if (F.preventDefault(), J === te && L && oe) {
            z();
            return;
          }
          const U = J < te ? J + 1 : 0;
          V(U), O(U), fe.current[U]?.focus();
          break;
        }
        case "ArrowDown": {
          F.preventDefault(), A((U) => ({
            ...U,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          F.preventDefault(), V(0), O(0), fe.current[0]?.focus();
          break;
        }
        case "End": {
          F.preventDefault(), V(te), O(te), fe.current[te]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          F.preventDefault(), V(J);
          break;
        }
        case "Tab": {
          !F.shiftKey && J === te && L && oe && z();
          break;
        }
      }
    },
    [s.length, V, O, L, oe, z]
  ), Q = be((F) => {
    const { key: J } = F, ee = pe();
    if (!ee.length) return;
    const te = ee.findIndex((U) => U === document.activeElement);
    switch (J) {
      case "ArrowLeft": {
        if (oe)
          if (te > 0)
            F.preventDefault(), E(te - 1);
          else {
            F.preventDefault();
            const U = s.length - 1;
            V(U), O(U), fe.current[U]?.focus(), A((X) => ({ ...X, focusArea: "tabs", focusedTabIndex: U }));
          }
        break;
      }
      case "ArrowRight": {
        oe && (te < ee.length - 1 ? (F.preventDefault(), E(te + 1)) : (F.preventDefault(), V(0), O(0), fe.current[0]?.focus(), A((U) => ({ ...U, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (oe)
          F.preventDefault(), A((U) => ({ ...U, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          F.preventDefault();
          const U = G.selectedIndex;
          fe.current[U]?.focus(), A((X) => ({ ...X, focusArea: "tabs", focusedTabIndex: U }));
        }
        break;
      }
    }
  }, [pe, oe, E, s.length, V, O, G.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${d}`,
      id: g,
      "data-testid": T,
      ref: W,
      children: [
        c && !C && /* @__PURE__ */ r.jsx("div", { id: y, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: $,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          Yi,
          {
            sortConfig: G.sortConfig || [],
            columns: s.flatMap(
              (F) => F.columns.map((J) => ({ key: J.key, label: J.label }))
            ).filter(
              (F, J, ee) => ee.findIndex((te) => te.key === F.key) === J
              // Remove duplicates
            ),
            onSortChange: (F) => {
              B({ type: "SET_SORT", payload: F });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        L && !oe && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: Z,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: Q,
            children: L
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${oe ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": u,
              "aria-describedby": c ? C ? c : y : $,
              "aria-orientation": h,
              className: "aria-tabs-datagrid__tabs",
              ref: ne,
              children: s.map((F, J) => {
                const ee = J === G.selectedIndex, te = F.disabled || f;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${F.id}`,
                    "aria-controls": `panel-${F.id}`,
                    "aria-selected": ee,
                    "aria-disabled": te,
                    tabIndex: ee ? 0 : -1,
                    ref: (U) => {
                      fe.current[J] = U;
                    },
                    onClick: () => V(J),
                    onKeyDown: (U) => Y(U, J),
                    disabled: te,
                    className: [
                      "aria-tabs-datagrid__tab",
                      ee ? "aria-tabs-datagrid__tab--selected" : "",
                      te ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: F.label }),
                      G.tabLoadingStates[J] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      G.tabErrors[J] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  F.id
                );
              })
            }
          ),
          L && oe && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: Z,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: Q,
              children: L
            }
          )
        ] }),
        s.map((F, J) => {
          const ee = J === G.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${F.id}`,
              "aria-labelledby": `tab-${F.id}`,
              tabIndex: 0,
              hidden: !ee,
              ref: (te) => {
                we.current[J] = te;
              },
              className: `aria-tabs-datagrid__panel ${F.className || ""}`,
              "data-tab-panel": J,
              children: ee && (() => {
                const te = F.data.some(
                  (X) => "ews_data" in X
                ) ? R(F.data, G.filters) : F.data, U = $e(() => {
                  const X = G.sortConfig;
                  return !X || X.length === 0 ? te : [...te].sort((le, he) => {
                    for (const { key: ie, direction: Ce } of X) {
                      let me = le[ie], Ie = he[ie];
                      const Ae = F.columns.find(
                        (Le) => Le.key === ie
                      );
                      if (Ae?.tableRenderer ? (me = Ae.tableRenderer(le), Ie = Ae.tableRenderer(he)) : Ae?.render && (me = Ae.render(le), Ie = Ae.render(he)), me == null && Ie == null) continue;
                      if (me == null) return 1;
                      if (Ie == null) return -1;
                      let ze = 0;
                      if (typeof me == "number" && typeof Ie == "number" ? ze = me - Ie : typeof me == "boolean" && typeof Ie == "boolean" ? ze = me === Ie ? 0 : me ? 1 : -1 : ze = String(me).localeCompare(
                        String(Ie),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), ze !== 0)
                        return Ce === "asc" ? ze : -ze;
                    }
                    return 0;
                  });
                }, [te, G.sortConfig, F.columns]);
                return /* @__PURE__ */ r.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": F.ariaLabel,
                    "aria-describedby": F.ariaDescription ? `panel-${F.id}-description` : void 0,
                    children: [
                      F.ariaDescription && /* @__PURE__ */ r.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${F.id}-description`,
                          children: F.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: F.columns.map((X, le) => {
                        const he = G.sortConfig?.find(
                          (me) => me.key === X.key
                        ), ie = !!he, Ce = D.focusArea === "headers" && D.focusedHeaderIndex === le;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${Ce ? "sortable-header--focused" : ""} ${ie ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: Ce ? 0 : -1,
                            onClick: () => ue(J, X.key),
                            onKeyDown: (me) => de(me, le),
                            "aria-sort": ie ? he?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: X.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${ie ? `sort-indicator--${he?.direction}` : ""}`,
                                  children: [
                                    G.sortConfig && G.sortConfig.length > 0 && G.sortConfig.findIndex(
                                      (me) => me.key === X.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${G.sortConfig.findIndex((me) => me.key === X.key) + 1}`,
                                        "data-priority": G.sortConfig.findIndex(
                                          (me) => me.key === X.key
                                        ) + 1,
                                        title: `Sort priority: ${G.sortConfig.findIndex((me) => me.key === X.key) + 1}`,
                                        children: G.sortConfig.findIndex(
                                          (me) => me.key === X.key
                                        ) + 1
                                      }
                                    ),
                                    ie && /* @__PURE__ */ r.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${he?.direction}`,
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
                          X.key
                        );
                      }) }) }),
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: U.map((X, le) => {
                        const he = G.globalSelectedRowData && H(G.globalSelectedRowData, X), ie = D.focusArea === "cells" && D.focusedRowIndex === le;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${he ? "data-row--selected" : ""} ${ie ? "data-row--focused" : ""}`,
                            "aria-selected": he,
                            children: F.columns.map((Ce, me) => {
                              const Ie = X[Ce.key];
                              let Ae;
                              Ce.tableRenderer ? Ae = Ce.tableRenderer(X) : Ce.render ? Ae = Ce.render(X) : Ae = Ie;
                              const ze = D.focusArea === "cells" && D.focusedRowIndex === le && D.focusedColumnIndex === me, Le = () => {
                                if (Ce.customRenderer) {
                                  const Qe = Ce.customRenderer(
                                    Ie,
                                    X
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
                                return typeof Ie == "boolean" && Ae === Ie ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  K(Ie),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: Ie ? "Yes" : "No" })
                                ] }) : bt.isValidElement(Ae) || typeof Ae != "object" ? Ae ?? "" : Ae;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${ze ? "data-cell--focused" : ""}`,
                                  tabIndex: ze ? 0 : -1,
                                  onClick: () => {
                                    const mt = G.globalSelectedRowData && H(
                                      G.globalSelectedRowData,
                                      X
                                    ) ? null : X;
                                    B({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: mt
                                    });
                                  },
                                  onKeyDown: (Qe) => w(Qe, le, me),
                                  children: Le()
                                },
                                Ce.key
                              );
                            })
                          },
                          le
                        );
                      }) })
                    ]
                  }
                );
              })()
            },
            F.id
          );
        })
      ]
    }
  );
}), dr = {
  asc: "↑",
  desc: "↓"
}, yp = (e) => [...e].sort((t, n) => t.priority - n.priority);
function Ea(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function vp(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function wp(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function _p(e, t) {
  const n = t.find((s) => s.id === e), a = vp(t);
  return n ? n.priority < a : !1;
}
const gy = ({
  sortConfig: e,
  onSortChange: t,
  className: n = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: s,
  showReset: o = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: u = "Sort configuration",
  ariaDescribedBy: c
}) => {
  const d = $e(() => yp(e), [e]), f = be((T) => {
    if (l) return;
    const L = e.map(
      (k) => k.id === T ? { ...k, direction: k.direction === "asc" ? "desc" : "asc" } : k
    );
    t(L);
  }, [e, t, l]), h = be((T) => {
    if (l) return;
    const L = e.findIndex((j) => j.id === T);
    if (L <= 0) return;
    const k = [...e];
    [k[L], k[L - 1]] = [k[L - 1], k[L]], t(Ea(k));
  }, [e, t, l]), g = be((T) => {
    if (l) return;
    const L = e.findIndex((j) => j.id === T);
    if (L >= e.length - 1 || L === -1) return;
    const k = [...e];
    [k[L], k[L + 1]] = [k[L + 1], k[L]], t(Ea(k));
  }, [e, t, l]), v = be((T) => {
    if (l) return;
    const L = e.filter((k) => k.id !== T);
    t(Ea(L));
  }, [e, t, l]), m = be(() => {
    l || t([]);
  }, [t, l]), p = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const T = d.map((L, k) => {
      const j = L.direction === "asc" ? "ascending" : "descending";
      return `${k + 1}. ${L.label} (${j})`;
    });
    if (T.length === 1)
      return `Sorted by: ${T[0]}`;
    if (T.length === 2)
      return `Sorted by: ${T.join(" and ")}`;
    {
      const L = T.pop();
      return `Sorted by: ${T.join(", ")}, and ${L}`;
    }
  }, b = $e(() => {
    const T = ["sort-description"];
    return i && T.push("sort-help"), c && T.push(c), T.join(" ");
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
        "aria-describedby": b,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((T) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ r.jsx(
                Oe,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => v(T.id),
                  disabled: l,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-priority", children: T.priority + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: T.label }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(T.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${T.label}. Currently ${T.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: T.direction === "asc" ? dr.asc : dr.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h(T.id),
                          disabled: l || !wp(T.id, e),
                          "aria-label": `Move ${T.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => g(T.id),
                          disabled: l || !_p(T.id, e),
                          "aria-label": `Move ${T.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            T.id
          ))
        ]
      }
    ),
    o && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
      pt,
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
      dr.asc,
      "/",
      dr.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Vs = (e, t) => t.map((n) => ({
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
], Sp = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), kp = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, s] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, Cp = (e) => {
  if (typeof e == "boolean") {
    const n = ns.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = ns.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, jp = (e) => `${e.name}-${e.bed_name}`, Np = () => ({
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
}), xy = (e) => {
  const t = Np();
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
}, Dp = {
  dataComparator: Sp,
  filterFunction: kp,
  booleanRenderer: Cp,
  getDataId: jp
};
function Ro(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: s = [],
    badges: o = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: u,
    fieldRenderers: c = {},
    classPrefix: d = "adaptive-card"
  } = n, f = t.find((L) => L.key === a), h = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", g = () => s.filter((k) => !i.includes(k) && e[k]).slice(0, 3).map((k) => {
    const j = t.find((y) => y.key === k), M = e[k], I = c[k] ? c[k](M, e) : j?.cardRenderer ? j.cardRenderer(e) : j?.render ? j.render(e) : M;
    return `${j?.label || k}: ${I}`;
  }).join(" • "), v = () => o.length === 0 ? null : o.filter((L) => e[L.fieldKey] !== void 0).map((L) => {
    const k = e[L.fieldKey], j = L.render ? L.render(k, e) : k;
    return `<span class="nhsuk-tag ${Tp(L, k)}">${j}</span>`;
  }).join(""), m = () => u ? u(e) : l?.(e) === "high" ? "primary" : "default", p = v(), b = g(), T = p ? `${b}${p ? `<div class="adaptive-card__badges">${p}</div>` : ""}` : b;
  return {
    variant: m(),
    heading: String(h),
    descriptionHtml: T,
    className: `adaptive-card ${d}`,
    "aria-label": `Record for ${h}`
  };
}
function Tp(e, t) {
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
const $p = {
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
}, qi = ({
  data: e,
  columns: t,
  onSelect: n,
  onAction: a,
  priority: s = "medium",
  status: o = "active"
}) => {
  const i = e.name, l = e.age, u = e.ward_name, c = e.bed_name, d = e.ews_score, f = e.speciality, h = e.consultant;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${s} healthcare-card--${o}`,
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
            Oe,
            {
              color: Mp(Zi(d)),
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
            pt,
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
            pt,
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
            pt,
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
}, Xi = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        Oe,
        {
          color: Lp(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ r.jsxs(
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
      pt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      pt,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), Ki = ({
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
        Oe,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ r.jsxs(
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
      pt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      pt,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), Ji = ({
  data: e,
  onSelect: t,
  onAction: n,
  priority: a = "medium"
}) => {
  const s = e.name, o = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, u = e.ews_data?.temperature, c = e.ews_data?.systolic_bp, d = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
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
            o !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Ip(o)}`, children: [
              "EWS: ",
              o
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ r.jsxs(
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
            pt,
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
            pt,
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
function Zi(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Ip(e) {
  return Zi(e);
}
function Mp(e) {
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
function Lp(e) {
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
const Pp = [
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
], Qi = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Fp = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Ap = (e) => Qi(e) === "high" || e.status === "urgent" ? "primary" : "default", Ep = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Rp = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Pp,
  hiddenFields: [],
  getPriority: Qi,
  getStatus: Fp,
  getVariant: Ap,
  fieldRenderers: Ep,
  classPrefix: "adaptive-card--healthcare"
}, Bp = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", s = n.getStatus?.(e) || "active", o = s === "urgent" ? "active" : s;
    return /* @__PURE__ */ r.jsx(
      qi,
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
      Xi,
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
      Ki,
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
      Ji,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (s) => console.log("Vitals selected:", s),
        onAction: (s, o) => console.log("Vitals action:", s, o)
      }
    );
  }
}, Hp = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Bo = {
  name: "healthcare",
  defaultCardConfig: Rp,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Bp,
  fieldTypes: Hp
};
function Ho(e) {
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
function Uo(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function Up(e, t) {
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
function Op(e, t) {
  const [n, a] = Fe("cards");
  return We(() => {
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
function Wp(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function zp(e, t, n, a) {
  const s = a ? { ...a.defaultCardConfig, ...n } : { ...$p, ...n };
  if (a && a.cardTemplates) {
    const o = Wp(e);
    if (o && a.cardTemplates[o]) {
      const i = a.cardTemplates[o](e, t, s);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return s.cardTemplate && s.cardTemplate(e, t, s), Ro(e, t, s);
}
const by = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: n = {},
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
  onTabChange: h,
  ariaLabel: g = "Data grid",
  ariaDescription: v,
  orientation: m = "horizontal",
  id: p,
  disabled: b = !1,
  className: T,
  ...L
}) => {
  const k = Op(e, t), j = f !== void 0, M = f ?? 0, I = $e(() => {
    if (c.some(
      (z) => z.data && z.data.length > 0 && Uo(z.data)
    )) {
      const z = Ho(n);
      return {
        ...Bo.defaultCardConfig,
        ...z
      };
    } else
      return Ho(n);
  }, [n, c]), C = $e(() => c.some(
    (z) => z.data && z.data.length > 0 && Uo(z.data)
  ) ? Bo : void 0, [c]), y = $e(() => ({
    selectedIndex: M,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [M, c.length]), [$, _] = fi(Up, y), x = Ee([]), P = Ee([]), N = Ee([]), S = Ee(null), [D, A] = Fe({
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
  }), re = be((E) => {
    if (!E.current)
      return { columns: 1, rows: 0 };
    const z = E.current, Y = z.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (Y.length === 0)
      return { columns: 1, rows: 0 };
    const Q = z.offsetWidth, J = Y[0].offsetWidth, ee = Math.floor(Q / J) || 1, te = Math.ceil(Y.length / ee);
    return { columns: ee, rows: te };
  }, []), G = be((E, z) => ({
    row: Math.floor(E / z),
    col: E % z
  }), []), B = be((E, z, Y) => E * Y + z, []), H = be((E, z, Y, Q) => {
    const { row: F, col: J } = G(E, Q);
    let ee = F, te = J;
    switch (z) {
      case "up":
        ee = Math.max(0, F - 1);
        break;
      case "down":
        ee = Math.min(Math.floor((Y - 1) / Q), F + 1);
        break;
      case "left":
        te = Math.max(0, J - 1);
        break;
      case "right":
        te = Math.min(Q - 1, J + 1);
        break;
    }
    const U = B(ee, te, Q);
    return Math.min(U, Y - 1);
  }, [G, B]);
  We(() => {
    D.isCardNavigationActive && D.focusedCardElementIndex >= 0 && D.cardElements.length > 0 && setTimeout(() => {
      const E = D.cardElements[D.focusedCardElementIndex];
      E && (E.element.focus(), E.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [D.isCardNavigationActive, D.focusedCardElementIndex, D.cardElements.length]), We(() => {
    const E = () => {
      if (k === "cards" && S.current) {
        const { columns: Q, rows: F } = re(S);
        A((J) => ({
          ...J,
          gridColumns: Q,
          gridRows: F
        }));
      }
    }, z = setTimeout(E, 200), Y = () => {
      setTimeout(E, 100);
    };
    return window.addEventListener("resize", Y), () => {
      clearTimeout(z), window.removeEventListener("resize", Y);
    };
  }, [k, c, re]), We(() => {
    const E = $.tabLoadingStates.length, z = c.length;
    E !== z && _({ type: "ADJUST_ARRAYS", payload: { newLength: z } });
  }, [c.length, $.tabLoadingStates.length]), We(() => {
    j && f !== $.selectedIndex && _({ type: "SET_SELECTED_INDEX", payload: f });
  }, [j, f, $.selectedIndex]);
  const V = be((E) => {
    E >= 0 && E < c.length && !c[E].disabled && (_({ type: "SET_SELECTED_INDEX", payload: E }), h?.(E));
  }, [c, h]), se = be((E) => {
    console.log("Card selected:", E), _({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: E
    });
  }, []), O = be((E) => {
    const z = P.current[E];
    z && (z.focus(), z.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), fe = be((E) => {
    const z = P.current[E];
    if (!z) return [];
    const Y = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), Q = z.querySelectorAll(Y);
    return Array.from(Q).map((F, J) => ({
      id: F.id || `card-${E}-element-${J}`,
      element: F,
      label: F.getAttribute("aria-label") || F.textContent?.trim() || F.getAttribute("title") || `Element ${J + 1}`,
      type: F.tagName.toLowerCase() === "button" ? "button" : F.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(F.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), we = Ee(null), ue = be((E) => {
    const z = we.current;
    if (!z) return;
    const Y = document.createElement("div");
    Y.setAttribute("aria-live", "polite"), Y.setAttribute("aria-atomic", "true"), Y.className = "sr-only", Y.textContent = E, z.appendChild(Y), setTimeout(() => {
      z.contains(Y) && z.removeChild(Y);
    }, 1e3);
  }, []), ce = be((E) => {
    const z = E.filter((Q) => Q.sortable !== !1), Y = [
      { value: "", label: "Sort by..." }
    ];
    return z.forEach((Q) => {
      const F = Q.label || Q.key;
      Q.key === "name" ? Y.push(
        { value: `${Q.key}-asc`, label: `${F} (A-Z)` },
        { value: `${Q.key}-desc`, label: `${F} (Z-A)` }
      ) : Q.key === "ews_score" || Q.key.includes("score") ? Y.push(
        { value: `${Q.key}-desc`, label: `${F} (High-Low)` },
        { value: `${Q.key}-asc`, label: `${F} (Low-High)` }
      ) : Q.key === "age" || Q.key.includes("date") || Q.key.includes("time") ? Y.push(
        { value: `${Q.key}-desc`, label: `${F} (Oldest-Youngest)` },
        { value: `${Q.key}-asc`, label: `${F} (Youngest-Oldest)` }
      ) : Y.push(
        { value: `${Q.key}-asc`, label: `${F} (A-Z)` },
        { value: `${Q.key}-desc`, label: `${F} (Z-A)` }
      );
    }), Y;
  }, []), K = be((E, z) => z ? [...E].sort((Y, Q) => {
    const F = Y[z.key], J = Q[z.key];
    if (F == null && J == null) return 0;
    if (F == null) return 1;
    if (J == null) return -1;
    const ee = Number(F), te = Number(J);
    if (!isNaN(ee) && !isNaN(te))
      return z.direction === "asc" ? ee - te : te - ee;
    const U = String(F).toLowerCase(), X = String(J).toLowerCase(), le = U.localeCompare(X);
    return z.direction === "asc" ? le : -le;
  }) : E, []), ae = be((E) => {
    if (!E) {
      A((U) => ({ ...U, cardSortConfig: null })), ue("Card sorting cleared");
      return;
    }
    const [z, Y] = E.split("-"), Q = { key: z, direction: Y };
    A((U) => ({ ...U, cardSortConfig: Q }));
    const ee = c[$.selectedIndex]?.columns.find((U) => U.key === z)?.label || z;
    ue(`Cards sorted by ${ee} in ${Y === "asc" ? "ascending" : "descending"} order`);
  }, [c, $.selectedIndex, ue]), de = be((E) => {
    const Q = c[$.selectedIndex]?.columns.find((J) => J.key === E.key)?.label || E.key, F = E.direction === "asc" ? "ascending" : "descending";
    return `${Q} (${F})`;
  }, [c, $.selectedIndex]), w = be((E) => {
    const z = c[$.selectedIndex];
    if (s) {
      const Y = $.sortConfig;
      return !Y || Y.length === 0 ? E : [...E].sort((Q, F) => {
        for (const { key: J, direction: ee } of Y) {
          let te = Q[J], U = F[J];
          const X = z?.columns.find((Ie) => Ie.key === J);
          if (X?.cardRenderer ? (te = X.cardRenderer(Q), U = X.cardRenderer(F)) : X?.render && (te = X.render(Q), U = X.render(F)), te == null && U == null) continue;
          if (te == null) return ee === "asc" ? -1 : 1;
          if (U == null) return ee === "asc" ? 1 : -1;
          const le = Number(te), he = Number(U);
          if (!isNaN(le) && !isNaN(he)) {
            const Ie = le - he;
            if (Ie !== 0) return ee === "asc" ? Ie : -Ie;
            continue;
          }
          const ie = String(te).toLowerCase(), Ce = String(U).toLowerCase(), me = ie.localeCompare(Ce);
          if (me !== 0) return ee === "asc" ? me : -me;
        }
        return 0;
      });
    } else
      return K(E, D.cardSortConfig);
  }, [s, $.sortConfig, D.cardSortConfig, K, c, $.selectedIndex]), R = be((E, z) => {
    const Y = fe(E), Q = Y[z];
    if (Q) {
      Q.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const F = `Focused on ${Q.label}, ${Q.type} ${z + 1} of ${Y.length} within card`;
      ue(F);
    }
  }, [fe, ue]), W = be((E) => {
    x.current[E]?.focus();
  }, []), ne = be(() => {
    const E = N.current[0];
    if (!E) return [];
    const z = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), Y = E.querySelectorAll(z);
    return Array.from(Y);
  }, []), Z = be((E) => {
    if (E === 0) {
      const z = N.current[0], Y = z?.querySelector(".sort-controls-row");
      if (Y) {
        Y.setAttribute("tabindex", "-1"), Y.focus();
        const F = `Sort controls group with ${ne().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        ue(F);
      } else z && z.focus();
    } else {
      const z = ne(), Y = E - 1, Q = z[Y];
      if (Q) {
        Q.focus();
        const F = Q.tagName.toLowerCase() === "select", J = Q.tagName.toLowerCase() === "button", ee = F ? "dropdown" : J ? "button" : "control", te = F ? ". Use Space key to open dropdown" : "", U = `${ee} ${Y + 1} of ${z.length}${te}`;
        ue(U);
      }
    }
  }, [ne, ue]), oe = be((E, z) => {
    const { key: Y } = E, Q = c[$.selectedIndex], F = Q?.data.length || 0;
    if (Y === "ArrowLeft" && E.shiftKey) {
      E.preventDefault(), E.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (Y === "ArrowRight" && E.shiftKey) {
      E.preventDefault(), E.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!D.isCardNavigationActive) {
      switch (Y) {
        case "ArrowUp":
          if (E.preventDefault(), z === 0)
            A((U) => ({ ...U, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), Z(0);
          else {
            const U = H(z, "up", F, D.gridColumns);
            U !== z && (A((X) => ({ ...X, focusedCardIndex: U })), O(U), ue(`Moved to card ${U + 1} of ${F}`));
          }
          break;
        case "ArrowDown":
          E.preventDefault();
          const J = H(z, "down", F, D.gridColumns);
          J !== z && (A((U) => ({ ...U, focusedCardIndex: J })), O(J), ue(`Moved to card ${J + 1} of ${F}`));
          break;
        case "ArrowLeft":
          E.preventDefault();
          const ee = H(z, "left", F, D.gridColumns);
          ee !== z ? (A((U) => ({ ...U, focusedCardIndex: ee })), O(ee), ue(`Moved to card ${ee + 1} of ${F}`)) : $.selectedIndex > 0 && (_({ type: "SET_SELECTED_INDEX", payload: $.selectedIndex - 1 }), A((U) => ({ ...U, focusArea: "tabs" })), setTimeout(() => W($.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          E.preventDefault();
          const te = H(z, "right", F, D.gridColumns);
          te !== z ? (A((U) => ({ ...U, focusedCardIndex: te })), O(te), ue(`Moved to card ${te + 1} of ${F}`)) : $.selectedIndex < c.length - 1 && (_({ type: "SET_SELECTED_INDEX", payload: $.selectedIndex + 1 }), A((U) => ({ ...U, focusArea: "tabs" })), setTimeout(() => W($.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (Q?.data[z]) {
            E.preventDefault(), A((X) => ({
              ...X,
              selectedCardIndex: z
            }));
            const U = fe(z);
            U.length > 0 ? (A((X) => ({
              ...X,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: U,
              selectedCardIndex: z
              // Ensure selection is maintained
            })), ue(`Card ${z + 1} selected and navigation activated. ${U.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : ue(`Card ${z + 1} selected.`);
          }
          break;
        case " ":
          if (Q?.data[z]) {
            E.preventDefault(), A((X) => ({
              ...X,
              selectedCardIndex: X.selectedCardIndex === z ? -1 : z
            }));
            const U = D.selectedCardIndex === z;
            ue(`Card ${z + 1} ${U ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (Y) {
      case "ArrowUp":
      case "ArrowLeft":
        E.preventDefault();
        const J = Math.max(0, D.focusedCardElementIndex - 1);
        A((X) => ({ ...X, focusedCardElementIndex: J })), R(z, J);
        break;
      case "ArrowDown":
      case "ArrowRight":
        E.preventDefault();
        const ee = Math.min(D.cardElements.length - 1, D.focusedCardElementIndex + 1);
        A((X) => ({ ...X, focusedCardElementIndex: ee })), R(z, ee);
        break;
      case "Enter":
        E.preventDefault();
        const te = D.cardElements[D.focusedCardElementIndex];
        te && (te.element.click(), ue(`Activated ${te.label}`));
        break;
      case " ":
        E.preventDefault();
        const U = D.cardElements[D.focusedCardElementIndex];
        if (U) {
          const X = new MouseEvent("dblclick", { bubbles: !0 });
          U.element.dispatchEvent(X), ue(`Double-clicked ${U.label}`);
        }
        break;
      case "Escape":
        E.preventDefault(), A((X) => ({
          ...X,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => O(z), 0), ue("Exited card navigation, returned to card level");
        break;
      case "Home":
        E.preventDefault(), D.cardElements.length > 0 && (A((X) => ({ ...X, focusedCardElementIndex: 0 })), R(z, 0));
        break;
      case "End":
        if (E.preventDefault(), D.cardElements.length > 0) {
          const X = D.cardElements.length - 1;
          A((le) => ({ ...le, focusedCardElementIndex: X })), R(z, X);
        }
        break;
    }
  }, [D, $.selectedIndex, c, se, O, W, A, fe, R, ue]), xe = be((E) => {
    const z = x.current[E], Y = z?.parentElement;
    if (!z || !Y) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const Q = z.getBoundingClientRect(), F = Y.getBoundingClientRect();
    Q.left >= F.left && Q.right <= F.right || (console.log("Tab not visible, scrolling into view (mobile)"), z.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), _e = be((E, z) => {
    if (k !== "cards")
      return;
    const { key: Y } = E;
    switch (Y) {
      case "ArrowLeft":
        E.preventDefault();
        const Q = z > 0 ? z - 1 : c.length - 1;
        V(Q), A((te) => ({ ...te, focusedTabIndex: Q })), x.current[Q]?.focus(), xe(Q);
        break;
      case "ArrowRight":
        E.preventDefault();
        const F = z < c.length - 1 ? z + 1 : 0;
        V(F), A((te) => ({ ...te, focusedTabIndex: F })), x.current[F]?.focus(), xe(F);
        break;
      case "ArrowDown":
        E.preventDefault();
        const J = c[$.selectedIndex];
        J && J.columns && J.columns.length > 0 ? (A((te) => ({
          ...te,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), Z(0)) : (A((te) => ({
          ...te,
          focusArea: "cards",
          focusedCardIndex: 0
        })), O(0));
        break;
      case "Home":
        E.preventDefault(), V(0), A((te) => ({ ...te, focusedTabIndex: 0 })), x.current[0]?.focus(), xe(0);
        break;
      case "End":
        E.preventDefault();
        const ee = c.length - 1;
        V(ee), A((te) => ({ ...te, focusedTabIndex: ee })), x.current[ee]?.focus(), xe(ee);
        break;
      case "Enter":
      case " ":
        E.preventDefault(), V(z);
        break;
    }
  }, [c.length, V, k, O, A, xe]), pe = be((E, z) => {
    if (k !== "cards")
      return;
    const { key: Y } = E, Q = c[$.selectedIndex];
    if (z === 0 && !D.isSortControlsActive) {
      switch (Y) {
        case "ArrowUp":
          E.preventDefault(), A((J) => ({
            ...J,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), W($.selectedIndex);
          break;
        case "ArrowDown":
          E.preventDefault(), Q?.data && Q.data.length > 0 && (A((J) => ({
            ...J,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), O(0));
          break;
        case "Enter":
        case " ":
          E.preventDefault();
          const F = ne();
          if (F.length > 0) {
            A((ee) => ({
              ...ee,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), Z(1);
            const J = `Entered sort controls navigation mode. ${F.length} controls available. Use arrow keys to navigate between controls.`;
            ue(J);
          }
          break;
        case "Escape":
          E.preventDefault(), A((J) => ({
            ...J,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), W($.selectedIndex);
          break;
      }
      return;
    }
    if (D.isSortControlsActive) {
      const J = ne().length;
      switch (Y) {
        case "ArrowLeft":
          E.preventDefault();
          const ee = D.focusedSortControlIndex > 1 ? D.focusedSortControlIndex - 1 : J;
          A((U) => ({ ...U, focusedSortControlIndex: ee })), Z(ee);
          break;
        case "ArrowRight":
          E.preventDefault();
          const te = D.focusedSortControlIndex < J ? D.focusedSortControlIndex + 1 : 1;
          A((U) => ({ ...U, focusedSortControlIndex: te })), Z(te);
          break;
        case "ArrowDown":
          if (E.preventDefault(), D.isSortControlsActive) {
            const U = D.focusedSortControlIndex < J ? D.focusedSortControlIndex + 1 : 1;
            A((X) => ({ ...X, focusedSortControlIndex: U })), Z(U);
          } else
            Q?.data && Q.data.length > 0 && (A((U) => ({
              ...U,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), O(0));
          break;
        case "ArrowUp":
          E.preventDefault(), A((U) => ({
            ...U,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), Z(0);
          break;
        case "Escape":
          E.preventDefault(), A((U) => ({
            ...U,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), Z(0);
          break;
      }
    }
  }, [k, c, $.selectedIndex, D.isSortControlsActive, D.focusedSortControlIndex, Z, W, O, A, ue]);
  if (k === "cards") {
    const E = c[$.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${T || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": g,
            "aria-describedby": `${v || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
            "aria-orientation": m,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((z, Y) => {
              const Q = Y === $.selectedIndex, F = z.disabled || b;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${z.id}`,
                  "aria-controls": `panel-${z.id}`,
                  "aria-selected": Q,
                  "aria-disabled": F,
                  tabIndex: Q ? 0 : -1,
                  ref: (J) => {
                    x.current[Y] = J;
                  },
                  onClick: () => V(Y),
                  onKeyDown: (J) => _e(J, Y),
                  disabled: F,
                  className: [
                    "aria-tabs-datagrid__tab",
                    Q ? "aria-tabs-datagrid__tab--selected" : "",
                    F ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: z.label }),
                    $.tabLoadingStates[Y] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    $.tabErrors[Y] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                z.id
              );
            })
          }
        ),
        o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: o })
      ] }),
      E && E.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: s ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          Yi,
          {
            sortConfig: $.sortConfig || [],
            columns: E.columns.map((z) => ({ key: z.key, label: z.label })),
            onSortChange: (z) => {
              _({ type: "SET_SORT", payload: z });
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
            tabIndex: D.focusArea === "sort-controls" ? 0 : -1,
            ref: (z) => {
              N.current[0] = z;
            },
            onKeyDown: (z) => pe(z, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${E.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  mr,
                  {
                    id: `card-sort-${E.id}`,
                    name: `card-sort-${E.id}`,
                    value: D.cardSortConfig ? `${D.cardSortConfig.key}-${D.cardSortConfig.direction}` : "",
                    onChange: (z) => ae(z.target.value),
                    className: "sort-select",
                    children: ce(E.columns).map((z) => /* @__PURE__ */ r.jsx("option", { value: z.value, children: z.label }, z.value))
                  }
                )
              ] }),
              D.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  de(D.cardSortConfig)
                ] }),
                /* @__PURE__ */ r.jsx(
                  pt,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => ae(""),
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
          "aria-label": `${E?.label || "Data"} cards in ${D.gridRows} rows and ${D.gridColumns} columns`,
          "aria-rowcount": D.gridRows,
          "aria-colcount": D.gridColumns,
          id: `panel-${E?.id}`,
          "aria-labelledby": `tab-${E?.id}`,
          children: w(E?.data || []).map((z, Y) => {
            const Q = D.selectedCardIndex === Y, F = D.focusedCardIndex === Y && D.focusArea === "cards", J = D.focusedCardIndex === Y && D.focusArea === "card" && D.isCardNavigationActive, ee = Y === 0 && D.focusArea !== "cards", te = F || ee, U = G(Y, D.gridColumns);
            if (n.cardTemplate) {
              const he = n.cardTemplate(z, E.columns);
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": U.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      ref: (ie) => {
                        P.current[Y] = ie;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        Q ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        F ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        J ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": U.col + 1,
                      "aria-selected": Q,
                      "aria-expanded": J,
                      "aria-description": J ? `Card navigation active. ${D.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: te ? 0 : -1,
                      onClick: () => {
                        A((ie) => ({
                          ...ie,
                          selectedCardIndex: ie.selectedCardIndex === Y ? -1 : Y
                        })), se(z);
                      },
                      onKeyDown: (ie) => oe(ie, Y),
                      onFocus: () => {
                        A((ie) => ie.isCardNavigationActive ? ie : ie.focusedCardIndex !== Y || ie.focusArea !== "cards" ? {
                          ...ie,
                          focusedCardIndex: Y,
                          focusArea: "cards"
                        } : ie);
                      },
                      children: he
                    }
                  )
                },
                `card-${Y}`
              );
            }
            const X = zp(z, E.columns, I, C), le = [
              X.className || "",
              Q ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              F ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              J ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": U.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      Q ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      F ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      J ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": U.col + 1,
                    "aria-selected": Q,
                    "aria-expanded": J,
                    onKeyDown: (he) => {
                      he.key === "Enter" && (he.preventDefault(), A((ie) => ({
                        ...ie,
                        selectedCardIndex: Y
                      }))), oe(he, Y);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      zi,
                      {
                        ...X,
                        ref: (he) => {
                          P.current[Y] = he;
                        },
                        className: le,
                        "aria-label": `${X["aria-label"] || X.heading}. ${J ? `Card navigation active with ${D.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: te ? 0 : -1,
                        onClick: () => {
                          A((he) => ({
                            ...he,
                            selectedCardIndex: he.selectedCardIndex === Y ? -1 : Y
                          })), se(z);
                        },
                        onKeyDown: (he) => oe(he, Y),
                        onFocus: () => {
                          D.isCardNavigationActive || A((he) => he.focusedCardIndex !== Y || he.focusArea !== "cards" ? {
                            ...he,
                            focusedCardIndex: Y,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : he);
                        }
                      }
                    )
                  }
                )
              },
              `card-${Y}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ r.jsx(
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
  return k === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${T || ""}`, children: [
    o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ r.jsx(
      ts,
      {
        tabPanels: c,
        dataConfig: d,
        ariaLabel: g,
        ariaDescription: v,
        orientation: m,
        id: p,
        disabled: b,
        selectedIndex: f,
        onTabChange: h,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: u,
        ...L
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${T || ""}`, children: [
    o && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ r.jsx(
      ts,
      {
        tabPanels: c,
        dataConfig: d,
        ariaLabel: g,
        ariaDescription: v,
        orientation: m,
        id: p,
        disabled: b,
        selectedIndex: f,
        onTabChange: h,
        actions: l,
        forceActionsAbove: u,
        ...L
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, el = (e) => {
  const t = ns.find((n) => n.value === e);
  return t ? t.icon : null;
}, Vp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, s] = t.priceRange, o = n.discountedPrice || n.price;
      if (o < a || o > s) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => el(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, Gp = (e) => Vs(e, [
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
]), Yp = {
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
  booleanRenderer: (e) => el(e),
  getDataId: (e) => `financial-${e.id}`
}, qp = (e) => Vs(e, [
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
]), Xp = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: Vp,
    createTabs: Gp
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Yp,
    createTabs: qp
  }
}, Oo = (e, t) => {
  const n = Xp[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, tl = [
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
], Kp = [
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
], Jp = [
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
], Zp = [
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
], Wo = [
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
], zo = [
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
], Vo = [
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
], Qp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, eh = () => [
  {
    id: "patients",
    label: "Patients",
    data: tl,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      qi,
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
    data: Kp,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Xi,
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
    data: Jp,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Ki,
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
    data: Zp,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Ji,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, a) => console.log("Vitals action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], th = () => {
  const [e, t] = Fe("healthcare"), n = $e(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: Dp,
      tabPanels: eh(),
      data: tl
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Oo("ecommerce", Wo),
      data: Wo
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Oo("financial", zo),
      data: zo
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Qp,
      tabPanels: Vs(Vo, [
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
      data: Vo
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
        pt,
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
}, yy = th, nl = (e) => /* @__PURE__ */ r.jsx(yi, { ...e }), vy = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = fn.TwoThirds,
  mainWrapperSize: s,
  skipLinkProps: o,
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
    /* @__PURE__ */ r.jsx(Wi, { ...o }),
    /* @__PURE__ */ r.jsx(Si, { ...p }),
    /* @__PURE__ */ r.jsx(nl, { className: v, ...m, children: /* @__PURE__ */ r.jsx(vi, { size: s, children: /* @__PURE__ */ r.jsx(pn, { children: /* @__PURE__ */ r.jsxs(Gn, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(Gt, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(ki, { ...l })
  ] });
}, wy = ({
  children: e,
  title: t,
  pageHeadingProps: n,
  columnWidth: a = fn.TwoThirds,
  mainWrapperSize: s = "small",
  // Default to small size for transactional forms
  skipLinkProps: o,
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
    /* @__PURE__ */ r.jsx(Wi, { ...o }),
    /* @__PURE__ */ r.jsx(Si, { ...v }),
    /* @__PURE__ */ r.jsxs(nl, { className: h, ...g, children: [
      u && /* @__PURE__ */ r.jsx(qa, { ...u }),
      /* @__PURE__ */ r.jsx(vi, { size: s, children: /* @__PURE__ */ r.jsx(pn, { children: /* @__PURE__ */ r.jsxs(Gn, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(Gt, { style: { marginTop: "3rem" }, size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(ki, { ...l })
  ] });
}, rl = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = ve("nhsuk-back-link", a), u = ve("nhsuk-back-link__link"), c = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ r.jsx("div", { className: l, children: s === "button" ? /* @__PURE__ */ r.jsx("button", { className: u, type: "button", onClick: o, ...i, children: c() }) : /* @__PURE__ */ r.jsx("a", { className: u, href: n, ...i, children: c() }) });
};
rl.displayName = "ForwardLink";
const Sn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function Go() {
  return typeof window > "u" ? Sn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function al() {
  const [e, t] = q.useState(Go());
  q.useEffect(() => {
    if (typeof window > "u") return;
    const o = () => t(Go());
    return window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, []);
  const n = q.useCallback((o) => e >= Sn[o], [e]), a = q.useCallback((o) => e < Sn[o], [e]), s = q.useCallback((o, i) => e >= Sn[o] && e < Sn[i], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: s,
    /** Raw numeric values */
    values: Sn
  };
}
function _y(e) {
  const { width: t, values: n } = al();
  let a = e.base;
  const s = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const o of s) {
    const i = n[o];
    t >= i && e[o] !== void 0 && (a = e[o]);
  }
  return a;
}
function nh(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [s, o] = q.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = q.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return q.useEffect(() => {
    if (!t || typeof window > "u") return;
    const u = new URLSearchParams(window.location.search);
    s ? u.set(n, String(s)) : u.delete(n), u.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${u.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [s, i, t, n, a]), { selectedId: s, setSelectedId: o, drilledIn: i, setDrilledIn: l };
}
const rh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
), ah = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
function sh(e) {
  const {
    items: t,
    selectedId: n,
    defaultSelectedId: a,
    onSelectionChange: s,
    renderItemContent: o,
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
    getId: p = (ge) => ge.id,
    orientation: b = "vertical",
    autoEnableThirdColumn: T = !0,
    onDrillChange: L,
    navigationInstructions: k = "Use arrow keys to navigate, Enter to open.",
    initialFocus: j = "first",
    skipFocusOnSelect: M = !1,
    skipAnnouncements: I = !1,
    onFocusChange: C,
    syncUrl: y = !1,
    urlParamSelected: $ = "nsv",
    urlParamDrill: _ = "nsvDrill",
    urlSyncDebounceMs: x = 0,
    lazySecondary: P = !1,
    navFooter: N,
    collapsibleNav: S = !1,
    navInitiallyCollapsed: D = !1,
    onNavCollapseChange: A,
    collapseToggleLabelShow: re = "Show navigation",
    collapseToggleLabelHide: G = "Hide navigation",
    collapseToggleIconShow: B,
    collapseToggleIconHide: H,
    persistNavCollapsed: V,
    navCollapsedStorageKey: se = "nsvCollapsed",
    navCollapsedUrlParam: O = "nsvCollapsed",
    autoContentHeader: fe,
    contentHeaderLevel: we = 2,
    renderContentHeader: ue,
    contentSubheader: ce,
    secondarySubheader: K
  } = e, { up: ae } = al(), [de, w] = q.useState(!1);
  q.useEffect(() => {
    w(!0);
  }, []);
  const R = de && ae("medium"), W = de && ae("xlarge");
  let ne;
  u ? ne = u : R ? ne = "two-column" : ne = "list", !u && T && l && W && (ne = "three-column");
  const Z = nh({
    enabled: y,
    paramSelected: $,
    paramDrill: _
  }), [oe, xe] = q.useState(
    () => Z.selectedId !== void 0 ? Z.selectedId : a
  ), _e = n !== void 0 ? n : oe, pe = t.find((ge) => p(ge) === _e), [E, z] = q.useState(
    void 0
  );
  q.useEffect(() => {
    if (_e === void 0) return;
    z(_e);
    const ge = setTimeout(() => z(void 0), 220);
    return () => clearTimeout(ge);
  }, [_e]);
  const Y = q.useRef(null), Q = q.useRef(null), F = q.useRef(null), J = q.useRef(null), [ee, te] = q.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [U, X] = q.useState(() => "nav"), [le, he] = q.useState(0), ie = () => [
    J.current,
    Q.current,
    F.current
  ].filter(Boolean), Ce = (ge) => {
    const je = ie(), ye = Math.max(0, Math.min(ge, je.length - 1));
    je[ye]?.focus(), he(ye);
  }, me = q.useCallback(
    (ge) => ge ? Array.from(ge.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (ye) => !ye.hasAttribute("disabled") && ye.tabIndex !== -1
    ) : [],
    []
  ), Ie = q.useCallback(
    (ge) => {
      const je = me(Q.current);
      if (!je.length) {
        Q.current?.focus();
        return;
      }
      const ye = Math.max(0, Math.min(ge, je.length - 1)), Me = je[ye];
      Me.focus(), setTimeout(() => {
        document.activeElement !== Me && (Me.focus(), setTimeout(() => {
          document.activeElement !== Me && Me.click();
        }, 10));
      }, 10), te((Ve) => ({ ...Ve, contentIndex: ye }));
      const Je = (Ve) => {
        Ve.key === "Escape" && (Ve.preventDefault(), Ve.stopPropagation(), Q.current?.focus(), Me.removeEventListener("keydown", Je));
      };
      je.forEach((Ve) => {
        const Ye = Ve._escapeHandler;
        Ye && Ve.removeEventListener("keydown", Ye);
      }), Me._escapeHandler = Je, Me.addEventListener("keydown", Je);
    },
    [me]
  ), Ae = q.useCallback(
    (ge) => {
      const je = me(F.current);
      if (!je.length) {
        F.current?.focus();
        return;
      }
      const ye = Math.max(0, Math.min(ge, je.length - 1)), Me = je[ye];
      Me.focus(), setTimeout(() => {
        document.activeElement !== Me && (Me.focus(), setTimeout(() => {
          document.activeElement !== Me && Me.click();
        }, 10));
      }, 10), te((Ve) => ({ ...Ve, secondaryIndex: ye }));
      const Je = (Ve) => {
        Ve.key === "Escape" && (Ve.preventDefault(), Ve.stopPropagation(), F.current?.focus(), Me.removeEventListener("keydown", Je));
      };
      je.forEach((Ve) => {
        const Ye = Ve._escapeHandler;
        Ye && Ve.removeEventListener("keydown", Ye);
      }), Me._escapeHandler = Je, Me.addEventListener("keydown", Je);
    },
    [me]
  ), ze = (ge) => {
    if (ge.defaultPrevented) return;
    const je = ge.key, ye = ge.target, Me = !!ct.current && ct.current.contains(ye), Je = !!Q.current && Q.current.contains(ye), Ve = !!F.current && F.current.contains(ye), Ye = !!F.current, vn = ye === J.current || ye === Q.current || ye === F.current, rn = Le && (ne === "list" || ne === "cards"), or = Je && !!ye.closest(".nhs-navigation-split-view__header");
    if (U === "containers" && vn) {
      if (je === "ArrowRight") {
        ge.preventDefault();
        const Pe = ie(), qe = Math.min(Pe.length - 1, le + 1);
        Ce(qe);
        return;
      }
      if (je === "ArrowLeft") {
        ge.preventDefault();
        const Pe = Math.max(0, le - 1);
        Ce(Pe);
        return;
      }
      if (je === "Home") {
        ge.preventDefault(), Ce(0);
        return;
      }
      if (je === "End") {
        ge.preventDefault(), Ce(ie().length - 1);
        return;
      }
      if (je === "Enter" || je === " ") {
        if (ge.preventDefault(), ye === J.current) {
          if (X("nav"), ct.current) {
            const Pe = Array.from(
              ct.current.querySelectorAll("[data-nav-item]")
            );
            (Pe[et >= 0 ? et : 0] || Pe[0])?.focus();
          }
        } else ye === Q.current ? (X("content"), Ie(ee.contentIndex)) : ye === F.current && (X("secondary"), Ae(ee.secondaryIndex));
        return;
      }
      return;
    }
    if (je === "Escape") {
      if (U === "content" || U === "secondary") {
        if (Je || Ve) {
          if (ge.preventDefault(), X("nav"), ct.current) {
            const qe = Array.from(
              ct.current.querySelectorAll("[data-nav-item]")
            )[et >= 0 ? et : 0];
            setTimeout(() => qe?.focus(), 10);
          }
        } else if ((ye === Q.current || ye === F.current) && (ge.preventDefault(), X("nav"), ct.current)) {
          const qe = Array.from(
            ct.current.querySelectorAll("[data-nav-item]")
          )[et >= 0 ? et : 0];
          setTimeout(() => qe?.focus(), 10);
        }
      }
      return;
    }
    if (je === "Enter" || je === " ") {
      if (ye.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (ye === Q.current && U === "content") {
        ge.preventDefault(), ge.stopPropagation(), me(Q.current).length > 0 && setTimeout(() => {
          Ie(ee.contentIndex);
        }, 50);
        return;
      }
      if (ye === F.current && U === "secondary") {
        ge.preventDefault(), ge.stopPropagation(), me(
          F.current
        ).length > 0 && setTimeout(() => {
          Ae(ee.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (rn && or && !vn && (je === "ArrowRight" || je === "ArrowLeft")) {
      const Pe = me(Q.current).filter(
        (qe) => qe.closest(".nhs-navigation-split-view__header")
      );
      if (Pe.length > 1) {
        const qe = Pe.indexOf(ye);
        if (qe >= 0) {
          const Zs = (qe + (je === "ArrowRight" ? 1 : -1) + Pe.length) % Pe.length;
          ge.preventDefault(), Pe[Zs].focus();
          return;
        }
      }
    }
    if (je === "ArrowRight") {
      if (Me || U === "nav") {
        ge.preventDefault(), X("content"), setTimeout(() => Q.current?.focus(), 10);
        return;
      }
      if (Je || U === "content") {
        Ye && (ge.preventDefault(), X("secondary"), setTimeout(() => F.current?.focus(), 10));
        return;
      }
    }
    if (je === "ArrowLeft") {
      if (Ve || U === "secondary") {
        ge.preventDefault(), X("content"), setTimeout(() => Q.current?.focus(), 10);
        return;
      }
      if (Je || U === "content") {
        if (ge.preventDefault(), X("nav"), ct.current) {
          const qe = Array.from(
            ct.current.querySelectorAll("[data-nav-item]")
          )[et >= 0 ? et : 0];
          setTimeout(() => qe?.focus(), 10);
        }
        return;
      }
    }
    if (je === "Home" && !Me && (ge.preventDefault(), X("nav"), ct.current)) {
      const Pe = Array.from(
        ct.current.querySelectorAll("[data-nav-item]")
      ), qe = Pe[et >= 0 ? et : 0] || Pe[0];
      setTimeout(() => qe?.focus(), 10);
    }
    if (je === "End") {
      const Pe = Ye ? F.current : Q.current;
      Pe && !Pe.contains(ye) && (ge.preventDefault(), Ye ? (X("secondary"), setTimeout(() => F.current?.focus(), 10)) : (X("content"), setTimeout(() => Q.current?.focus(), 10)));
    }
    if (je === "ArrowDown" || je === "ArrowUp") {
      if (ye === Q.current && je === "ArrowDown") {
        ge.preventDefault(), me(Q.current).length > 0 && Ie(0);
        return;
      }
      if (ye === F.current && je === "ArrowDown") {
        ge.preventDefault(), me(
          F.current
        ).length > 0 && Ae(0);
        return;
      }
      if (Je) {
        const Pe = me(Q.current);
        if (Pe.length) {
          ge.preventDefault();
          const qe = je === "ArrowDown" ? 1 : -1, Nt = (ee.contentIndex + qe + Pe.length) % Pe.length;
          Ie(Nt);
        }
      } else if (Ve) {
        const Pe = me(F.current);
        if (Pe.length) {
          ge.preventDefault();
          const qe = je === "ArrowDown" ? 1 : -1, Nt = (ee.secondaryIndex + qe + Pe.length) % Pe.length;
          Ae(Nt);
        }
      }
    }
  }, Le = !!pe && (ne === "list" || ne === "cards"), Qe = q.useMemo(() => fe === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : fe === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : fe === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: fe.mobile !== void 0 ? fe.mobile : !0,
    tablet: fe.tablet || !1,
    desktop: fe.desktop || !1
  }, [fe]), mt = de && ae("medium") && !ae("xlarge"), Ke = de && ae("xlarge"), tt = !!l, rt = ne === "three-column", [st, Fn] = q.useState(!1);
  q.useEffect(() => {
    rt && st && Fn(!1);
  }, [rt, st]), q.useEffect(() => {
    st && !rt && (X("secondary"), he(2), setTimeout(() => {
      F.current?.focus();
    }, 50));
  }, [st, rt]), q.useEffect(() => {
    !st && !rt && U === "secondary" && (X("content"), he(1), setTimeout(() => {
      Q.current?.focus();
    }, 50));
  }, [st, rt, U]);
  const ya = !!pe && (Le && Qe.mobile || !Le && mt && Qe.tablet || !Le && Ke && Qe.desktop) || tt && !rt, $c = `h${we}`, va = pe ? q.createElement(
    $c,
    {
      style: {
        marginLeft: Le ? 32 : 0,
        marginRight: Le ? 32 : 0
      }
    },
    pe.label
  ) : null, Ks = Le ? "mobile" : mt ? "tablet" : "desktop", Ic = tt && !rt && !st, wa = Le && Qe.mobile ? /* @__PURE__ */ r.jsx(
    qa,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => yn(void 0, void 0)
    }
  ) : void 0, _a = Ic ? /* @__PURE__ */ r.jsx(
    rl,
    {
      element: "button",
      text: f,
      onClick: () => {
        Fn(!0);
      }
    }
  ) : void 0, Sa = !rt && st ? /* @__PURE__ */ r.jsx(
    qa,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => Fn(!1)
    }
  ) : void 0, Mc = q.useMemo(() => {
    if (!ya || !pe) return null;
    if (ue)
      return ue({
        item: pe,
        detailActive: Le,
        context: Ks,
        backLink: wa,
        defaultHeading: va
      });
    const ge = pe && ce ? typeof ce == "function" ? ce(pe) : ce : null;
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
            Sa || wa,
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
                  va,
                  ge && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: ge })
                ]
              }
            )
          ]
        }
      ),
      _a && /* @__PURE__ */ r.jsx("div", { style: { marginLeft: "auto" }, children: _a })
    ] });
  }, [
    ya,
    pe,
    ue,
    Le,
    Ks,
    wa,
    Sa,
    va,
    _a,
    ce
  ]);
  q.useEffect(() => {
    if (!y) return;
    const ge = ne === "three-column";
    let je = !1;
    const ye = () => {
      je || (Z.selectedId !== _e && Z.setSelectedId(_e), Z.drilledIn !== ge && Z.setDrilledIn(ge));
    };
    if (x && x > 0) {
      const Me = setTimeout(ye, x);
      return () => {
        je = !0, clearTimeout(Me);
      };
    } else
      ye();
  }, [y, Z, _e, ne, x]), q.useEffect(() => {
    if (!y) return;
    const ge = () => {
      const je = new URLSearchParams(window.location.search), ye = je.get($);
      je.get(_), xe(ye === null ? void 0 : ye);
    };
    return window.addEventListener("popstate", ge), () => window.removeEventListener("popstate", ge);
  }, [
    y,
    $,
    _,
    u,
    l
  ]);
  const sr = q.useRef(0), Mt = q.useRef(
    null
  ), yn = q.useCallback(
    (ge, je) => {
      ge !== _e && (n === void 0 && xe(ge), s?.(ge, je));
    },
    [n, s, _e]
  );
  q.useEffect(() => {
    if (!M && Le && Q.current) {
      const ge = setTimeout(() => Q.current?.focus(), 30);
      return () => clearTimeout(ge);
    }
  }, [Le, _e, M]);
  const ct = q.useRef(null), [et, An] = q.useState(
    () => j === "first" ? 0 : -1
  );
  q.useEffect(() => {
    if (et < 0 || !ct.current) return;
    const je = Array.from(
      ct.current.querySelectorAll("[data-nav-item]")
    )[et];
    if (je) {
      document.activeElement !== je && je.focus(), sr.current = et;
      const ye = t[et];
      C?.(
        ye ? p(ye) : void 0,
        ye,
        et
      );
    }
  }, [et, t, C, p]);
  const Lc = (ge) => {
    const je = b === "vertical" ? "ArrowDown" : "ArrowRight", ye = b === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (ge.key === "ArrowRight" && b === "vertical") {
      ge.preventDefault(), st ? (X("secondary"), setTimeout(() => {
        F.current?.focus();
      }, 10)) : (X("content"), setTimeout(() => {
        Q.current?.focus();
      }, 10));
      return;
    }
    if (ge.key === je)
      ge.preventDefault(), An((Me) => Math.min(t.length - 1, Me + 1));
    else if (ge.key === ye)
      ge.preventDefault(), An((Me) => Math.max(0, Me - 1));
    else if (ge.key === "Home")
      ge.preventDefault(), An(0);
    else if (ge.key === "End")
      ge.preventDefault(), An(t.length - 1);
    else if (ge.key === "Enter" || ge.key === " ") {
      ge.preventDefault();
      const Me = t[et];
      Me && !Me.disabled && yn(p(Me), Me);
    } else if (ge.key.length === 1 && /[a-z0-9]/i.test(ge.key)) {
      Mt.current || (Mt.current = { buffer: "", last: 0 });
      const Me = Date.now(), Je = 700, Ve = ge.key.toLowerCase();
      Me - Mt.current.last > Je ? Mt.current.buffer = Ve : Mt.current.buffer += Ve, Mt.current.last = Me;
      let Ye = Mt.current.buffer;
      const vn = Ye.split("").every((Nt) => Nt === Ye[0]), rn = t.map(
        (Nt) => String(Nt.label || "").toLowerCase()
      );
      let or = 0;
      et >= 0 && (or = (et + 1) % t.length);
      let Pe;
      const qe = (Nt, Zs) => {
        const Qs = t.length;
        for (let ja = 0; ja < Qs; ja++) {
          const Na = (or + ja) % Qs;
          if (!t[Na].disabled && rn[Na].startsWith(Nt))
            return Na;
        }
      };
      vn && Ye.length > 1 ? Pe = qe(Ye[0]) : (Pe = qe(Ye), Pe === void 0 && Ye.length > 1 && (Pe = qe(Ye[Ye.length - 1]), Pe !== void 0 && Mt.current && (Mt.current.buffer = Ye[Ye.length - 1]))), Pe !== void 0 && An(Pe);
    }
  }, Pc = q.useMemo(() => {
    if (V && (V === "url" || V === "both") && typeof window < "u") {
      const je = new URLSearchParams(window.location.search).get(O);
      if (je === "1") return !0;
      if (je === "0") return !1;
    }
    if (V && (V === "localStorage" || V === "both") && typeof window < "u")
      try {
        const ge = window.localStorage.getItem(se);
        if (ge === "1") return !0;
        if (ge === "0") return !1;
      } catch {
      }
    return D;
  }, [
    V,
    D,
    se,
    O
  ]), [jt, Fc] = q.useState(Pc);
  q.useEffect(() => {
    A?.(jt);
  }, [jt, A]);
  const Ac = q.useCallback(() => {
    R && S && Fc((ge) => !ge);
  }, [R, S]);
  q.useEffect(() => {
    if (V && !(typeof window > "u")) {
      if (V === "localStorage" || V === "both")
        try {
          window.localStorage.setItem(
            se,
            jt ? "1" : "0"
          );
        } catch {
        }
      if (V === "url" || V === "both") {
        const ge = new URLSearchParams(window.location.search);
        ge.set(O, jt ? "1" : "0");
        const je = `${window.location.pathname}?${ge.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", je);
      }
    }
  }, [
    jt,
    V,
    se,
    O
  ]);
  const Ec = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Le ? "nhs-navigation-split-view--detail-active" : "",
    ne === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    S && R && jt ? "nhs-navigation-split-view--nav-collapsed" : "",
    m
  ].filter(Boolean).join(" "), ka = q.useRef(null);
  q.useEffect(() => {
    if (!I && ka.current) {
      const ge = pe ? `Selected ${pe.label}` : "Selection cleared";
      ka.current.textContent = ge;
    }
  }, [pe, I]), q.useEffect(() => {
    !Le && _e == null && ct.current && ct.current.querySelectorAll("[data-nav-item]")[sr.current]?.focus();
  }, [Le, _e]);
  const Jt = ne === "three-column", [Ca, Rc] = q.useState(!1);
  q.useEffect(() => {
    Jt && !Ca && Rc(!0);
  }, [Jt, Ca]);
  const Js = q.useRef(Jt);
  q.useEffect(() => {
    Js.current !== Jt && (L?.(Jt), Js.current = Jt);
  }, [Jt, L]);
  const Bc = () => {
    if (ne === "cards")
      return /* @__PURE__ */ r.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": _e ? String(_e) : void 0,
          children: [
            t.map((ye) => {
              const Me = p(ye), Je = Me === _e;
              return /* @__PURE__ */ r.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": Je,
                  children: /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      id: String(Me),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": Je || void 0,
                      "data-disabled": ye.disabled || void 0,
                      disabled: ye.disabled,
                      onClick: () => !ye.disabled && yn(Me, ye),
                      children: [
                        ye.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ye.icon }),
                        /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ye.label }),
                        ye.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ye.description }),
                        o?.(ye),
                        ye.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: ye.badge })
                      ]
                    }
                  )
                },
                Me
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
    const ge = "nsv-nav-instructions", je = q.useMemo(() => q.memo(
      ({
        item: ye,
        idx: Me,
        selected: Je,
        focused: Ve
      }) => {
        const Ye = p(ye), vn = ye.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Ve ? 0 : -1,
          onClick: () => {
            sr.current = Me, yn(Ye, ye);
          },
          onKeyDown: (rn) => {
            (rn.key === "Enter" || rn.key === " ") && (rn.preventDefault(), sr.current = Me, yn(Ye, ye));
          }
        };
        return /* @__PURE__ */ r.jsxs(
          "li",
          {
            id: String(Ye),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": Je,
            "aria-current": Je ? "true" : void 0,
            "data-selected": Je || void 0,
            "data-disabled": ye.disabled || void 0,
            ...vn,
            children: [
              ye.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ye.icon }),
              /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ye.label }),
                ye.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ye.description }),
                o?.(ye)
              ] }),
              ye.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: ye.badge })
            ]
          }
        );
      }
    ), [p, yn, o]);
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs(
        "ul",
        {
          ref: ct,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Lc,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": ge,
          "aria-activedescendant": _e ? String(_e) : void 0,
          children: [
            t.map((ye, Me) => /* @__PURE__ */ r.jsx(
              je,
              {
                item: ye,
                idx: Me,
                selected: p(ye) === _e,
                focused: Me === et || et === -1 && Me === 0 && j === "first",
                "data-just-selected": p(ye) === E ? "true" : void 0
              },
              p(ye)
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
          id: ge,
          style: {
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0 0 0 0)"
          },
          children: k
        }
      )
    ] });
  };
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: Y,
      className: Ec,
      "aria-label": v?.rootLabel,
      "data-layout": ne,
      onKeyDown: ze,
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Le || void 0,
            style: { transform: Le ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: J,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": v?.navigationLabel || "Items",
                  "data-collapsed": jt || void 0,
                  tabIndex: 0,
                  children: [
                    S && R && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Ac,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": jt ? re : G,
                        title: jt ? re : G,
                        children: jt ? B || /* @__PURE__ */ r.jsx(ah, {}) : H || /* @__PURE__ */ r.jsx(rh, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: Bc() }),
                    N && /* @__PURE__ */ r.jsx(
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
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: Q,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": v?.contentLabel || "Content",
                  "data-has-selection": !!pe || void 0,
                  tabIndex: 0,
                  style: {
                    display: st && !rt ? "none" : void 0
                  },
                  children: [
                    ya && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: Mc }),
                    /* @__PURE__ */ r.jsx(
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
              ne === "three-column" && (!P || Ca) || st && !rt ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: F,
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
                        st && !rt && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsx(
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
                                  Sa,
                                  /* @__PURE__ */ r.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: pe && typeof pe == "object" && "label" in pe ? pe.label : String(pe) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        pe && K && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof K == "function" ? K(pe) : K
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(pe) })
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
            children: Jt ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
sh.displayName = "NavigationSplitView";
const oh = typeof window < "u" && window.document ? q.useLayoutEffect : q.useEffect, Yo = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), ih = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: s, topLaneIndex: o }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, u = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${o})`, d = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), h = n && e.childItems && e.childItems.length > 0, g = (m) => {
    h && (m.preventDefault(), a?.(e));
  }, v = h ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": s || !1,
    onClick: g,
    onKeyDown: (m) => {
      (m.key === "Enter" || m.key === " ") && g(m), m.key === "Escape" && s && g(m);
    }
  } : {};
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ve("nhsuk-product-roadmap__item", h && "nhsuk-product-roadmap__item--expandable", s && "nhsuk-product-roadmap__item--active"),
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
          h && /* @__PURE__ */ r.jsx("span", { className: ve("nhsuk-product-roadmap__item-expander", s && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, lh = Oc(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: n = 400,
  itemMaxLines: a = 2,
  className: s,
  ariaLabel: o = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: u = "overlay",
  ...c
}) => {
  const [d, f] = Fe(() => /* @__PURE__ */ new Set()), [h, g] = Fe(() => /* @__PURE__ */ new Set()), v = Ee(/* @__PURE__ */ new Set()), m = be((x) => d.has(x), [d]), p = be((x) => {
    f((P) => {
      const N = new Set(P);
      return N.has(x.id) ? (N.delete(x.id), g((S) => {
        const D = new Set(S);
        return D.add(x.id), D;
      }), setTimeout(() => g((S) => {
        const D = new Set(S);
        return D.delete(x.id), D;
      }), 240), l?.(x.id, !1)) : (N.add(x.id), l?.(x.id, !0)), N;
    });
  }, [l]);
  oh(() => {
    if (u !== "inline" || !i || typeof document > "u") return;
    const x = [];
    if (d.forEach((D) => {
      v.current.has(D) || x.push(D);
    }), v.current = new Set(d), !x.length) return;
    const P = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, N = x.map((D) => `.nhsuk-product-roadmap__inline-children[data-parent="${D}"] .nhsuk-product-roadmap__inline-child`).join(","), S = Array.from(document.querySelectorAll(N));
    if (S.length) {
      if (P) {
        S.forEach((D) => {
          D.style.opacity = "1", D.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((D) => {
        (D.gsap || D.default || D).to(S, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        S.forEach((D) => {
          D.style.opacity = "1", D.style.transform = "translateY(0)";
        });
      });
    }
  }, [d, u, i]);
  const b = be(() => {
    d.size && f(/* @__PURE__ */ new Set());
  }, [d]), T = ve("nhsuk-product-roadmap", s), L = Yo(n, 120, 1200, 400), k = Yo(a, 1, 6, 2), j = $e(() => e.map((x) => /* @__PURE__ */ new Date(x + " 01")), [e]), M = $e(() => {
    if (j.length === 0) {
      const N = /* @__PURE__ */ new Date();
      return [N, N];
    }
    const x = new Date(j[0]), P = Kn.offset(new Date(j[j.length - 1]), 1);
    return [x, P];
  }, [j]), I = $e(() => zs().domain(M).range([0, j.length * L]), [M, j.length, L]), C = be((x) => {
    if (x.startDate) {
      const G = new Date(x.startDate), B = new Date(x.endDate ?? x.startDate);
      B < G && B.setTime(G.getTime());
      const H = I(G), V = Kn.offset(new Date(B), 1);
      let se = I(V);
      Number.isFinite(se) || (se = H + L);
      const O = Math.max(L * 0.25, se - H), fe = H / L, we = O / L;
      return { ...x, _pxLeft: H, _pxWidth: O, _startFraction: fe, _spanColumns: we };
    }
    const P = x.date ?? 1, N = x.dateOffset ?? 0, S = x.length ?? 1, D = x.partialLength ?? 1, A = P - 1 + N, re = S - 1 + D;
    return { ...x, _pxLeft: A * L, _pxWidth: re * L, _startFraction: A, _spanColumns: re };
  }, [I, L]), y = $e(() => t.map((x) => {
    const N = x.roadmapItems.map((D) => {
      const A = !D.childItems && D.children ? { ...D, childItems: D.children } : { ...D };
      return C(A);
    }).sort((D, A) => D._pxLeft !== A._pxLeft ? D._pxLeft - A._pxLeft : A._pxWidth - D._pxWidth), S = [];
    return N.forEach((D) => {
      const A = D._pxLeft, re = D._pxLeft + D._pxWidth;
      let G = S.findIndex((B) => B <= A);
      G === -1 && (G = S.length, S.push(0)), S[G] = re, D.verticalPosition = G + 1;
    }), { ...x, roadmapItems: N, _laneCount: S.length };
  }), [t, C]), $ = $e(() => y.map((x) => x._laneCount || 1), [y]), _ = $e(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: T,
      style: { "--column-width": `${L}px`, gridTemplateColumns: _ },
      role: "grid",
      "aria-label": o,
      "aria-colcount": e.length + 1,
      "aria-rowcount": y.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((x, P) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": P + 2, children: x }, `${x}-${P}`))
        ] }),
        y.map((x, P) => {
          const N = P + 2, S = $[P];
          let D, A = 0, re = [];
          i && u === "inline" && (re = x.roadmapItems.filter((V) => m(V.id) && V.childItems && V.childItems.length).map((V) => ({ id: V.id, lane: V.verticalPosition || 1, count: V.childItems.length })).sort((V, se) => V.lane - se.lane), A = re.reduce((V, se) => V + se.count, 0));
          const G = S + A;
          D = `calc((${G} * var(--roadmap-item-block-height)) + (max(0, ${G} - 1) * var(--roadmap-row-gap)))`;
          const B = {};
          let H = 0;
          return re.forEach((V) => {
            H += V.count, B[V.lane + 1] = H;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": N, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: x.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: D }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: x.roadmapItems.map((V, se) => {
              const O = (V.verticalPosition || 1) - 1, fe = re.filter((K) => K.lane - 1 < O).reduce((K, ae) => K + ae.count, 0), we = O + fe, ue = m(V.id), ce = h.has(V.id);
              return /* @__PURE__ */ r.jsxs(bt.Fragment, { children: [
                /* @__PURE__ */ r.jsx(ih, { item: V, maxLines: k, enableDrilldown: i, onExpand: p, isActive: ue, topLaneIndex: we, laneOffset: fe }),
                i && u === "inline" && (ue || ce) && V.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": V.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${V.title} child tasks`, children: V.childItems.map((K, ae) => {
                  const de = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let w = V._pxLeft, R = V._pxWidth;
                  if (K.startDate) {
                    const Z = new Date(K.startDate);
                    let oe = K.endDate ? new Date(K.endDate) : new Date(Z);
                    oe < Z && (oe = new Date(Z));
                    const xe = new Date(oe);
                    xe.setDate(xe.getDate() + 1);
                    const _e = I(Z);
                    let pe = I(xe);
                    (!Number.isFinite(pe) || pe <= _e) && (pe = _e + 6), w = _e, R = Math.max(6, pe - _e);
                  }
                  const ne = we + 1 + ae;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: ve("nhsuk-product-roadmap__inline-child", K.status && `nhsuk-product-roadmap__inline-child--status-${K.status}`, !ue && ce && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${w}px`, width: `${R}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${ne})`, height: de, opacity: ue ? 0 : void 0, transform: ue ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: K.title })
                      ]
                    },
                    K.id ?? ae
                  );
                }) })
              ] }, V.id ?? se);
            }) }) })
          ] }, `${x.heading}-${P}`);
        }),
        i && u === "overlay" && d.size === 1 && (() => {
          const x = Array.from(d)[0], P = t.flatMap((N) => N.roadmapItems).find((N) => N.id === x);
          return !P || !P.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${P.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: P.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: b, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: P.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: P.childItems.map((N, S) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: N.title }),
                N.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: N.content })
              ] }, N.id ?? S)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: b, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
lh.displayName = "ProductRoadmap";
function sl(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = sl(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Dr() {
  for (var e, t, n = 0, a = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = sl(e)) && (a && (a += " "), a += t);
  return a;
}
function ot(e) {
  return function() {
    return e;
  };
}
const rs = Math.PI, as = 2 * rs, sn = 1e-6, ch = as - sn;
function ol(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function uh(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return ol;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let s = 1, o = a.length; s < o; ++s)
      this._ += Math.round(arguments[s] * n) / n + a[s];
  };
}
class dh {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? ol : uh(t);
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
    let i = this._x1, l = this._y1, u = a - t, c = s - n, d = i - t, f = l - n, h = d * d + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (h > sn) if (!(Math.abs(f * u - c * d) > sn) || !o)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let g = a - i, v = s - l, m = u * u + c * c, p = g * g + v * v, b = Math.sqrt(m), T = Math.sqrt(h), L = o * Math.tan((rs - Math.acos((m + h - p) / (2 * b * T))) / 2), k = L / T, j = L / b;
      Math.abs(k - 1) > sn && this._append`L${t + k * d},${n + k * f}`, this._append`A${o},${o},0,0,${+(f * g > d * v)},${this._x1 = t + j * u},${this._y1 = n + j * c}`;
    }
  }
  arc(t, n, a, s, o, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(s), u = a * Math.sin(s), c = t + l, d = n + u, f = 1 ^ i, h = i ? s - o : o - s;
    this._x1 === null ? this._append`M${c},${d}` : (Math.abs(this._x1 - c) > sn || Math.abs(this._y1 - d) > sn) && this._append`L${c},${d}`, a && (h < 0 && (h = h % as + as), h > ch ? this._append`A${a},${a},0,1,${f},${t - l},${n - u}A${a},${a},0,1,${f},${this._x1 = c},${this._y1 = d}` : h > sn && this._append`A${a},${a},0,${+(h >= rs)},${f},${this._x1 = t + a * Math.cos(o)},${this._y1 = n + a * Math.sin(o)}`);
  }
  rect(t, n, a, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+s}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function il(e) {
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
  }, () => new dh(t);
}
function ll(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function cl(e) {
  this._context = e;
}
cl.prototype = {
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
function ul(e) {
  return new cl(e);
}
function dl(e) {
  return e[0];
}
function fl(e) {
  return e[1];
}
function pl(e, t) {
  var n = ot(!0), a = null, s = ul, o = null, i = il(l);
  e = typeof e == "function" ? e : e === void 0 ? dl : ot(e), t = typeof t == "function" ? t : t === void 0 ? fl : ot(t);
  function l(u) {
    var c, d = (u = ll(u)).length, f, h = !1, g;
    for (a == null && (o = s(g = i())), c = 0; c <= d; ++c)
      !(c < d && n(f = u[c], c, u)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+e(f, c, u), +t(f, c, u));
    if (g) return o = null, g + "" || null;
  }
  return l.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : ot(+u), l) : e;
  }, l.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : ot(+u), l) : t;
  }, l.defined = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : ot(!!u), l) : n;
  }, l.curve = function(u) {
    return arguments.length ? (s = u, a != null && (o = s(a)), l) : s;
  }, l.context = function(u) {
    return arguments.length ? (u == null ? a = o = null : o = s(a = u), l) : a;
  }, l;
}
function ss(e, t, n) {
  var a = null, s = ot(!0), o = null, i = ul, l = null, u = il(c);
  e = typeof e == "function" ? e : e === void 0 ? dl : ot(+e), t = typeof t == "function" ? t : ot(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? fl : ot(+n);
  function c(f) {
    var h, g, v, m = (f = ll(f)).length, p, b = !1, T, L = new Array(m), k = new Array(m);
    for (o == null && (l = i(T = u())), h = 0; h <= m; ++h) {
      if (!(h < m && s(p = f[h], h, f)) === b)
        if (b = !b)
          g = h, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), v = h - 1; v >= g; --v)
            l.point(L[v], k[v]);
          l.lineEnd(), l.areaEnd();
        }
      b && (L[h] = +e(p, h, f), k[h] = +t(p, h, f), l.point(a ? +a(p, h, f) : L[h], n ? +n(p, h, f) : k[h]));
    }
    if (T) return l = null, T + "" || null;
  }
  function d() {
    return pl().defined(s).curve(i).context(o);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : ot(+f), a = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : ot(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : ot(+f), c) : a;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : ot(+f), n = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : ot(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : ot(+f), c) : n;
  }, c.lineX0 = c.lineY0 = function() {
    return d().x(e).y(t);
  }, c.lineY1 = function() {
    return d().x(e).y(n);
  }, c.lineX1 = function() {
    return d().x(a).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : ot(!!f), c) : s;
  }, c.curve = function(f) {
    return arguments.length ? (i = f, o != null && (l = i(o)), c) : i;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? o = l = null : l = i(o = f), c) : o;
  }, c;
}
function qo(e) {
  return e < 0 ? -1 : 1;
}
function Xo(e, t, n) {
  var a = e._x1 - e._x0, s = t - e._x1, o = (e._y1 - e._y0) / (a || s < 0 && -0), i = (n - e._y1) / (s || a < 0 && -0), l = (o * s + i * a) / (a + s);
  return (qo(o) + qo(i)) * Math.min(Math.abs(o), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function Ko(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Ra(e, t, n) {
  var a = e._x0, s = e._y0, o = e._x1, i = e._y1, l = (o - a) / 3;
  e._context.bezierCurveTo(a + l, s + l * t, o - l, i - l * n, o, i);
}
function Tr(e) {
  this._context = e;
}
Tr.prototype = {
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
        Ra(this, this._t0, Ko(this, this._t0));
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
          this._point = 3, Ra(this, Ko(this, n = Xo(this, e, t)), n);
          break;
        default:
          Ra(this, this._t0, n = Xo(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(Tr.prototype).point = function(e, t) {
  Tr.prototype.point.call(this, t, e);
};
function $r(e) {
  return new Tr(e);
}
function fh(e, t, n) {
  const a = Ci(e, t);
  return zs().domain(a).range(n);
}
function Jo(e, t, n) {
  const [a, s] = Ci(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(s)))
    return _r().domain([0, 0]).range(n);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const u = s - a, c = (u > 0 ? u : a) * 0.1;
    i = Math.max(0, a - c), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = s ?? 0;
  return _r().domain([i, l]).nice().range(n);
}
function os(e, t, n, a) {
  const s = pl().x(t).y(n);
  return a?.smooth !== !1 && s.curve($r), s(e) ?? "";
}
function ph(e = {}) {
  const t = q.useRef(null), n = q.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, s] = q.useState({ width: 0, height: 0 });
  q.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((u) => {
      for (const c of u) {
        const { width: d, height: f } = c.contentRect;
        s({ width: d, height: f });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const o = Math.max(0, a.width - n.left - n.right), i = Math.max(0, a.height - n.top - n.bottom);
  return { width: a.width, height: a.height, innerWidth: o, innerHeight: i, margin: n, ref: t };
}
const hl = q.createContext(null);
function nn() {
  return q.useContext(hl);
}
const hh = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: s,
  role: o = "group",
  ariaLabel: i
}) => {
  const l = ph(t), u = { height: e, position: "relative" };
  return n !== void 0 && (u.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: u, role: o, "aria-label": i, children: /* @__PURE__ */ r.jsx(hl.Provider, { value: l, children: s }) });
}, Gs = q.createContext(null), bn = () => q.useContext(Gs), mh = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  parseX: a,
  children: s,
  xTickCount: o = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: u,
  yPadding: c
}) => {
  const d = nn(), f = t ?? d?.innerWidth ?? 0, h = n ?? d?.innerHeight ?? 0, g = q.useMemo(() => e.flatMap((k) => k.data), [e]), v = q.useCallback((k) => {
    if (a) return a(k);
    const j = k.x;
    return j instanceof Date ? j : new Date(j);
  }, [a]), m = u ?? 6, p = c ?? 6, b = q.useMemo(() => fh(g, v, [m, Math.max(0, f - m)]), [g, v, f, m]), T = q.useMemo(() => {
    if (l) {
      const k = Jo([], (j) => j.y, [Math.max(0, h - p), p]);
      return k.domain(l), k;
    }
    return Jo(g, (k) => k.y, [Math.max(0, h - p), p]);
  }, [g, h, l]), L = q.useMemo(() => ({
    xScale: b,
    yScale: T,
    getXTicks: (k = o) => b.ticks(k),
    getYTicks: (k = i) => T.ticks(k)
  }), [b, T, o, i]);
  return /* @__PURE__ */ r.jsx(Gs.Provider, { value: L, children: s });
}, Zo = ({
  type: e,
  scale: t,
  tickCount: n,
  tickValues: a,
  formatTick: s,
  label: o,
  offset: i,
  className: l,
  minLabelSpacing: u,
  maxTickLabelLength: c,
  autoMinLabelSpacing: d = e === "x",
  labelAngle: f = 0,
  allowLabelWrap: h = !0,
  tickFormatPreset: g
}) => {
  const v = bn(), m = nn(), p = t || (e === "x" ? v?.xScale : v?.yScale), b = n ?? (e === "x" ? 6 : 5), T = typeof s == "function", L = q.useMemo(() => {
    if (T || !g) return;
    const M = (I) => new Intl.DateTimeFormat(void 0, I);
    switch (g) {
      case "dayShortMonth":
        return (I) => {
          const C = I instanceof Date ? I : new Date(I);
          return `${C.getDate()}
${M({ month: "short" }).format(C)}`;
        };
      case "dayShortMonthYear":
        return (I) => {
          const C = I instanceof Date ? I : new Date(I);
          return `${C.getDate()}
${M({ month: "short" }).format(C)} ${C.getFullYear()}`;
        };
      case "shortMonth":
        return (I) => {
          const C = I instanceof Date ? I : new Date(I);
          return M({ month: "short" }).format(C);
        };
      case "shortMonthYear":
        return (I) => {
          const C = I instanceof Date ? I : new Date(I);
          return `${M({ month: "short" }).format(C)} ${C.getFullYear()}`;
        };
      case "hourMinute":
        return (I) => {
          const C = I instanceof Date ? I : new Date(I);
          return M({ hour: "2-digit", minute: "2-digit" }).format(C);
        };
      default:
        return;
    }
  }, [T, g]);
  let k = T ? s : L || ((M) => String(M));
  const j = q.useMemo(() => a && Array.isArray(a) ? a : p ? typeof p.ticks == "function" ? p.ticks(b) : p.domain ? p.domain() : [] : [], [p, b, a]);
  if (e === "x" && !T && !g && j.length && j.every((M) => M instanceof Date)) {
    const M = j[0], I = j[j.length - 1], C = I.getTime() - M.getTime(), y = 24 * 3600 * 1e3, $ = 365 * y, _ = M.getFullYear() === I.getFullYear(), x = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (C < 2 * y) {
      const P = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      k = (N) => P.format(N);
    } else if (C < 32 * y)
      k = (P) => {
        const N = P;
        return `${N.getDate()} ${x.format(N)}`;
      };
    else if (C < $ && _)
      k = (P) => x.format(P);
    else if (C < 2 * $) {
      const P = /* @__PURE__ */ new Set();
      k = (N) => {
        const S = N, D = S.getMonth();
        return P.has(D) || P.add(D), `${x.format(S)} ${S.getFullYear()}`;
      };
    } else
      k = (P) => String(P.getFullYear());
  }
  if (!p || !m) return null;
  if (e === "x") {
    const M = i ?? m.innerHeight, I = typeof p.bandwidth == "function", C = I ? p.bandwidth() : 0, y = (x) => {
      const P = p(x);
      return I ? P + C / 2 : P;
    };
    let $ = u ?? 0;
    if (d && u == null) {
      const x = j.map((N) => k(N).replace(/\n.*/g, "")), P = x.length ? x.reduce((N, S) => N + S.length, 0) / x.length : 0;
      $ = Math.max(12, Math.round(P * 6 + 4));
    }
    const _ = q.useMemo(() => {
      if (a && Array.isArray(a) || $ <= 0) return j;
      const x = [];
      let P = -1 / 0;
      for (const N of j) {
        const S = y(N);
        S - P >= $ && (x.push(N), P = S);
      }
      return x;
    }, [j, p, $, a, I, C]);
    return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${M})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ r.jsx("line", { x1: 0, x2: m.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      _.map((x, P) => {
        const N = k(x), S = c && N.length > c ? N.slice(0, Math.max(1, c - 1)) + "…" : N, D = h ? S.split(/\n/) : [S.replace(/\n/g, " ")], A = f < 0 ? "end" : f > 0 ? "start" : "middle";
        return /* @__PURE__ */ r.jsxs("g", { transform: `translate(${y(x)},0)`, children: [
          /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ r.jsxs("text", { y: 9, textAnchor: A, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: f ? `rotate(${f})` : void 0, fontFamily: "inherit", children: [
            D.map((re, G) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: G === 0 ? 0 : "1.1em", children: re }, G)),
            S !== N && /* @__PURE__ */ r.jsx("title", { children: N })
          ] })
        ] }, x?.toString?.() || P);
      })
    ] });
  }
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    j.map((M, I) => {
      const C = k(M), y = c && C.length > c ? C.slice(0, Math.max(1, c - 1)) + "…" : C, $ = h ? y.split(/\n/) : [y.replace(/\n/g, " ")];
      return /* @__PURE__ */ r.jsxs("g", { transform: `translate(0,${p(M)})`, children: [
        /* @__PURE__ */ r.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ r.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          $.map((_, x) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: x === 0 ? 0 : "1.1em", children: _ }, x)),
          y !== C && /* @__PURE__ */ r.jsx("title", { children: C })
        ] })
      ] }, M?.toString?.() || I);
    }),
    o && /* @__PURE__ */ r.jsx("text", { transform: "rotate(-90)", x: -m.innerHeight / 2, y: -m.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: o })
  ] });
}, gh = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: s
}) => {
  const o = bn(), i = nn();
  if (!o || !i) return null;
  const l = e === "y" ? o.getYTicks(t) : o.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", s].filter(Boolean).join(" "), children: [
    e === "y" && l.map((u, c) => /* @__PURE__ */ r.jsx("line", { x1: 0, x2: i.innerWidth, y1: o.yScale(u), y2: o.yScale(u), stroke: n, strokeDasharray: a }, c)),
    e === "x" && l.map((u, c) => /* @__PURE__ */ r.jsx("line", { y1: 0, y2: i.innerHeight, x1: o.xScale(u), x2: o.xScale(u), stroke: n, strokeDasharray: a }, c))
  ] });
}, xh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, rr = {
  color: xh
}, bh = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, ca = {
  color: bh
}, yh = [
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
let Ba = null, Ha = null, Ua = null, ml = "optimized";
function vh() {
  const e = { color: { ...ca.color, ...rr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, u) => l ? l[u] : void 0, e);
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
    return yh;
  }
}
function wh() {
  return Ba || (Ba = vh()), Ba;
}
function _h(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function Oa(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Sh(e, t, n) {
  const a = Oa(e), s = Oa(t), o = Oa(n), i = a * 0.4124 + s * 0.3576 + o * 0.1805, l = a * 0.2126 + s * 0.7152 + o * 0.0722, u = a * 0.0193 + s * 0.1192 + o * 0.9505;
  return { x: i * 100, y: l * 100, z: u * 100 };
}
function kh(e, t, n) {
  let i = e / 95.047, l = t / 100, u = n / 108.883;
  const c = (d) => d > 8856e-6 ? Math.cbrt(d) : 7.787 * d + 16 / 116;
  return i = c(i), l = c(l), u = c(u), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - u) };
}
function gl(e) {
  const t = _h(e);
  if (!t) return null;
  const n = Sh(t.r, t.g, t.b);
  return kh(n.x, n.y, n.z);
}
function Qo(e, t) {
  const n = e.L - t.L, a = e.a - t.a, s = e.b - t.b;
  return Math.sqrt(n * n + a * a + s * s);
}
function Ch() {
  const e = wh();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => gl(i));
  let n = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let u = 0, c = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (u += Qo(l, t[f]), c++);
    const d = u / Math.max(1, c);
    d > a && (a = d, n = i);
  }
  const s = new Set(e.map((i, l) => l)), o = [];
  for (o.push(n), s.delete(n); s.size; ) {
    let i = Array.from(s)[0], l = -1;
    for (const u of s) {
      const c = t[u];
      if (!c) continue;
      let d = 1 / 0;
      for (const f of o) {
        const h = t[f];
        if (h) {
          const g = Qo(c, h);
          g < d && (d = g);
        }
      }
      d > l && (l = d, i = u);
    }
    o.push(i), s.delete(i);
  }
  return o.map((i) => e[i]);
}
function jh() {
  return Ha || (Ha = Ch()), Ha;
}
function Nh(e, t, n) {
  const a = (e + 16) / 116, s = t / 500 + a, o = a - n / 200, i = (d) => {
    const f = d * d * d;
    return f > 8856e-6 ? f : (d - 16 / 116) / 7.787;
  }, l = i(s) * 95.047, u = i(a) * 100, c = i(o) * 108.883;
  return { X: l, Y: u, Z: c };
}
function Dh(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, s = e * -0.9689 + t * 1.8758 + n * 0.0415, o = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), s = Math.min(1, Math.max(0, i(s))), o = Math.min(1, Math.max(0, i(o))), { r: Math.round(a * 255), g: Math.round(s * 255), b: Math.round(o * 255) };
}
function Th(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function $h(e, t) {
  const n = gl(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: s, Y: o, Z: i } = Nh(a, n.a, n.b), l = Dh(s, o, i);
  return Th(l.r, l.g, l.b);
}
function Ih() {
  const e = jh(), n = [12, -12, 24, -24].map((s) => e.map((o) => $h(o, s))), a = [...e];
  return n.forEach((s) => a.push(...s)), a;
}
function Mh() {
  return (!Ua || Lh()) && (Ua = Ih(), xl = ml), Ua;
}
let xl = null;
function Lh() {
  return xl !== ml;
}
function $t(e) {
  const t = Mh();
  return t[e % t.length];
}
let Dn = null, Jn = null, Zn = null, Qn = null;
function Ph() {
  const e = rr?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    Dn = [];
    for (let o = 1; o <= 12; o++) {
      const i = t[String(o)]?.$value || t[String(o)]?.value;
      Dn.push(typeof i == "string" ? i : "#212b32");
    }
    const n = e.region || {};
    Jn = {}, Object.keys(n).forEach((o) => {
      const i = n[o]?.$value || n[o]?.value;
      typeof i == "string" && (Jn[o] = i);
    });
    const a = e.severity || {}, s = e["org-level"] || {};
    Qn = {}, Object.keys(s).forEach((o) => {
      const i = s[o]?.$value || s[o]?.value;
      typeof i == "string" && (Qn[o] = i);
    }), Zn = {}, Object.keys(a).forEach((o) => {
      const i = a[o]?.$value || a[o]?.value;
      typeof i == "string" && (Zn[o] = i);
    });
  }
}
function ua() {
  (!Dn || !Jn || !Zn || !Qn) && Ph();
}
function mn(e) {
  return ua(), Dn ? Dn[e % Dn.length] : "#212b32";
}
function Fh(e) {
  return ua(), Jn ? Jn[e] : void 0;
}
function Ir(e, t) {
  return Fh(e) || mn(t);
}
const is = ["low", "moderate", "high", "critical"];
let Wa = null;
function Ah() {
  const e = { color: { ...ca.color, ...rr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, u) => l ? l[u] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, n = {};
  return is.forEach((a) => {
    const s = t(`color.data-viz.severity.${a}`);
    s && (n[a] = s);
  }), n;
}
function bl() {
  return Wa || (Wa = Ah()), Wa;
}
function Eh(e) {
  return bl()[e.toLowerCase()];
}
function Rh(e, t) {
  return Eh(e) || bl()[is[t % is.length]] || $t(t);
}
function Bh(e) {
  return ua(), Zn ? Zn[e] : void 0;
}
function Hh(e, t) {
  return Bh(e) || mn(t);
}
const ls = ["trust", "ambulance", "icb", "region"];
let za = null;
function Uh() {
  const e = { color: { ...ca.color, ...rr.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, u) => l ? l[u] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, n = {};
  return ls.forEach((a) => {
    const s = t(`color.data-viz.org-level.${a}`);
    s && (n[a] = s);
  }), n;
}
function yl() {
  return za || (za = Uh()), za;
}
function Oh(e) {
  return yl()[e.toLowerCase()];
}
function Wh(e, t) {
  return Oh(e) || yl()[ls[t % ls.length]] || $t(t);
}
function zh(e) {
  return ua(), Qn ? Qn[e] : void 0;
}
function Vh(e, t) {
  return zh(e) || mn(t);
}
let Va = null;
const Gh = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function Yh(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function qh() {
  const e = { color: { ...ca.color, ...rr.color } }, t = (s, o = /* @__PURE__ */ new Set()) => {
    if (o.has(s)) return;
    o.add(s);
    const i = s.split(".").reduce((u, c) => u ? u[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), o) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return Gh.forEach((s) => {
    const o = t(`color.data-viz.region.${s}`);
    o ? n[s] = o : a.push(s);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function Xh() {
  return Va || (Va = qh()), Va;
}
function Kh(e) {
  return Xh()[Yh(e)];
}
function Tn(e, t) {
  return Kh(e) || $t(t);
}
const vl = q.createContext(null), ar = () => q.useContext(vl), Sy = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [s, o] = q.useState(() => new Set(e)), i = n !== void 0, l = q.useMemo(() => i ? new Set(n) : s, [i, n, s]), u = q.useCallback((d) => {
    i || o(new Set(d)), a?.(Array.from(d));
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
  return /* @__PURE__ */ r.jsx(vl.Provider, { value: c, children: t });
}, wl = q.createContext(null), Kt = () => q.useContext(wl), Jh = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = bn(), s = ar(), [o, i] = q.useState(null), l = q.useRef(/* @__PURE__ */ new Map()), [u, c] = q.useState([]), d = q.useCallback(
    (I, C) => {
      l.current.set(I, C);
    },
    []
  ), f = q.useCallback((I) => {
    l.current.delete(I);
  }, []), h = q.useCallback(
    (I, C) => {
      if (!a) return;
      const { xScale: y, yScale: $ } = a;
      let _ = null, x = 1 / 0;
      l.current.forEach((P, N) => {
        P.forEach((S, D) => {
          const A = y(S.x), re = $(S.y), G = A - I, B = re - C, H = Math.sqrt(G * G + B * B);
          H < x && (x = H, _ = {
            seriesId: N,
            index: D,
            x: S.x,
            y: S.y,
            clientX: A,
            clientY: re
          });
        });
      }), _ && x <= t ? i(_) : i(null);
    },
    [a, t]
  ), g = q.useCallback(() => i(null), []);
  q.useEffect(() => {
    if (!o) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: I, yScale: C } = a, y = [];
    l.current.forEach(($, _) => {
      $.forEach((x, P) => {
        (o.x instanceof Date && x.x instanceof Date ? x.x.getTime() === o.x.getTime() : x.x === o.x) && y.push({
          seriesId: _,
          index: P,
          x: x.x,
          y: x.y,
          clientX: I(x.x),
          clientY: C(x.y)
        });
      });
    }), y.sort(($, _) => $.seriesId.localeCompare(_.seriesId)), c(y);
  }, [o, a]);
  const v = q.useCallback(
    (I) => {
      if (!o) return;
      const C = l.current.get(o.seriesId);
      if (!C) return;
      let y = o.index + I;
      if (y < 0 || y >= C.length) {
        if (!n) return;
        y = (y + C.length) % C.length;
      }
      const $ = C[y];
      if (!a) return;
      const { xScale: _, yScale: x } = a;
      i({
        seriesId: o.seriesId,
        index: y,
        x: $.x,
        y: $.y,
        clientX: _($.x),
        clientY: x($.y)
      });
    },
    [o, a, n]
  ), m = q.useCallback(
    (I) => {
      let C = Array.from(l.current.keys());
      if (s && (C = C.filter((A) => !s.isHidden(A))), C.length === 0) return;
      if (!o) {
        const A = C[0], re = l.current.get(A);
        if (!re || !a) return;
        const { xScale: G, yScale: B } = a, H = re[0];
        i({
          seriesId: A,
          index: 0,
          x: H.x,
          y: H.y,
          clientX: G(H.x),
          clientY: B(H.y)
        });
        return;
      }
      const y = C.indexOf(o.seriesId);
      if (y === -1) return;
      let $ = y + I;
      if ($ < 0 || $ >= C.length) {
        if (!n) return;
        $ = ($ + C.length) % C.length;
      }
      const _ = C[$], x = l.current.get(_);
      if (!x || !a) return;
      const P = Math.min(o.index, x.length - 1), N = x[P], { xScale: S, yScale: D } = a;
      i({
        seriesId: _,
        index: P,
        x: N.x,
        y: N.y,
        clientX: S(N.x),
        clientY: D(N.y)
      });
    },
    [o, a, n, s]
  ), p = q.useCallback(() => {
    let I = Array.from(l.current.keys());
    if (s && (I = I.filter((P) => !s.isHidden(P))), I.length === 0) return;
    const C = o ? o.seriesId : I[0], y = l.current.get(C);
    if (!y || y.length === 0 || !a) return;
    const $ = y[0], { xScale: _, yScale: x } = a;
    i({
      seriesId: C,
      index: 0,
      x: $.x,
      y: $.y,
      clientX: _($.x),
      clientY: x($.y)
    });
  }, [o, a, s]), b = q.useCallback(() => {
    let I = Array.from(l.current.keys());
    if (s && (I = I.filter((N) => !s.isHidden(N))), I.length === 0) return;
    const C = o ? o.seriesId : I[0], y = l.current.get(C);
    if (!y || y.length === 0 || !a) return;
    const $ = y.length - 1, _ = y[$], { xScale: x, yScale: P } = a;
    i({
      seriesId: C,
      index: $,
      x: _.x,
      y: _.y,
      clientX: x(_.x),
      clientY: P(_.y)
    });
  }, [o, a, s]), T = q.useCallback(
    () => v(1),
    [v]
  ), L = q.useCallback(
    () => v(-1),
    [v]
  ), k = q.useCallback(
    () => m(1),
    [m]
  ), j = q.useCallback(
    () => m(-1),
    [m]
  ), M = q.useMemo(
    () => ({
      focused: o,
      setFocused: i,
      aggregated: u,
      focusNearest: h,
      clear: g,
      registerSeries: d,
      unregisterSeries: f,
      focusNextPoint: T,
      focusPrevPoint: L,
      focusNextSeries: k,
      focusPrevSeries: j,
      focusFirstPoint: p,
      focusLastPoint: b
    }),
    [
      o,
      u,
      h,
      g,
      d,
      f,
      T,
      L,
      k,
      j,
      p,
      b
    ]
  );
  return /* @__PURE__ */ r.jsx(wl.Provider, { value: M, children: e });
}, Zh = ({
  series: e,
  seriesIndex: t,
  palette: n,
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
  const h = bn();
  if (!h) return null;
  const { xScale: g, yScale: v } = h, p = ar()?.isHidden(e.id) ?? !1, b = p && l === "fade";
  if (p && l === "remove")
    return null;
  const T = Kt();
  q.useEffect(() => {
    if (!T) return;
    const C = e.data.map((y) => ({ x: i(y), y: y.y }));
    return T.registerSeries(e.id, C), () => T.unregisterSeries(e.id);
  }, [T, e.id, e.data, i]);
  const L = q.useMemo(
    () => os(
      e.data,
      (C) => g(i(C)),
      (C) => v(C.y),
      { smooth: c }
    ),
    [e.data, g, v, i, c]
  ), k = q.useMemo(() => {
    if (!e.data.length) return "";
    const [C] = v.domain(), y = ss().x(($) => g(i($))).y0(() => v(C)).y1(($) => v($.y));
    return c && y.curve($r), y(e.data) || "";
  }, [e.data, g, v, i, c]), j = f && f[t], M = e.color || j || (n === "region" ? Tn(e.id, t) : $t(t)), I = n === "region" ? Ir(e.id, t) : mn(t);
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: b ? 0.25 : 1,
      "aria-hidden": b ? !0 : void 0,
      children: [
        d && /* @__PURE__ */ r.jsx(
          "path",
          {
            d: k,
            fill: `url(#${d})`,
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
            stroke: M,
            strokeWidth: u,
            role: "presentation"
          }
        ),
        a && e.data.map((C, y) => {
          const $ = g(i(C)), _ = v(C.y), x = s ? 0 : -1, P = !b && (s && y === o || T?.focused?.seriesId === e.id && T.focused.index === y), N = () => {
            T && !b && T.setFocused({
              seriesId: e.id,
              index: y,
              x: i(C),
              y: C.y,
              clientX: $,
              clientY: _
            });
          }, S = () => {
            T && T.focused?.seriesId === e.id && T.focused.index === y && T.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: $,
              cy: _,
              r: P ? 5 : 3.5,
              stroke: P ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : I,
              strokeWidth: P ? 2 : 1,
              fill: P ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : M,
              className: "fdp-line-point",
              tabIndex: b ? -1 : x,
              "aria-label": `${e.label || e.id} ${i(C).toDateString()} value ${C.y}`,
              "data-series": e.id,
              "data-index": y,
              onMouseEnter: N,
              onFocus: N,
              onMouseLeave: S,
              onBlur: S
            },
            y
          );
        })
      ]
    }
  );
}, Qh = ({ polite: e = !0, format: t }) => {
  const n = Kt(), [a, s] = q.useState(""), o = q.useRef("");
  return q.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let u;
    if (l && l.length > 1) {
      const c = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      u = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      u = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : em(i.seriesId, i.x, i.y, i.index);
    if (u !== o.current) {
      o.current = u, s("");
      const c = setTimeout(() => s(u), 10);
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
function em(e, t, n, a) {
  const s = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${s}, value ${n}`;
}
const ky = () => {
  const e = Kt(), t = nn();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: s, innerHeight: o } = t, i = Math.min(Math.max(n.clientX, 0), s), l = Math.min(Math.max(n.clientY, 0), o), u = i + 8, c = l - 8, d = a.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), h = d ? f : `${f} • ${n.y}`, g = /\d+$/.exec(n.seriesId || ""), v = g ? parseInt(g[0], 10) - 1 : 0, m = $t(v >= 0 ? v : 0) || "#005eb8", p = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: p, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: p, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: m, stroke: "#fff", strokeWidth: 0.5 }),
    d ? (() => {
      const T = a.map((I) => `${I.seriesId}: ${I.y}`), L = [h, ...T], k = L.reduce((I, C) => Math.max(I, C.length), 0), j = Math.max(90, k * 6.2 + 16), M = 16 * L.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: u, y: c - M, rx: 4, ry: 4, width: j, height: M, fill: "#212b32", opacity: 0.92 }),
        L.map((I, C) => /* @__PURE__ */ r.jsx("text", { x: u + 8, y: c - M + 6 + 16 * (C + 0.7), fill: "#fff", fontSize: 12, children: I }, C))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: u, y: c - 24, rx: 4, ry: 4, width: Math.max(60, h.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: u + 8, y: c - 8, fill: "#fff", fontSize: 12, children: h })
    ] })
  ] });
}, Cy = ({
  items: e,
  palette: t = "categorical",
  direction: n = "row",
  interactive: a = !1,
  adjustStrokeForWhiteBackground: s = !0,
  hiddenIds: o,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: u
}) => {
  const c = ar(), d = !!(c && !a && !l && o === void 0), f = a || d, h = e || [], g = o !== void 0, [v, m] = q.useState(new Set(i)), p = g ? new Set(o) : v, [b, T] = q.useState(""), L = (k) => {
    if (d && c) {
      const x = c.isHidden(k);
      c.toggle(k);
      const N = h.find((D) => D.id === k)?.label || k, S = u ? u(k, x, N) : `${N} ${x ? "shown" : "hidden"}`;
      T(S);
      return;
    }
    if (!f) return;
    const j = new Set(p), M = j.has(k);
    M ? j.delete(k) : j.add(k), g || m(j);
    const I = h.filter((x) => !j.has(x.id)).map((x) => x.id), C = Array.from(j);
    l?.(I, C);
    const $ = h.find((x) => x.id === k)?.label || k, _ = u ? u(k, M, $) : `${$} ${M ? "shown" : "hidden"}`;
    T(_);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: h.map((k, j) => {
      const M = k.palette || t, I = k.color || (M === "region" ? Tn(k.id, j) : M === "severity" ? Rh(k.id, j) : M === "org-level" ? Wh(k.id, j) : $t(j));
      let C = k.stroke || (M === "region" ? Ir(k.id, j) : M === "severity" ? Hh(k.id, j) : M === "org-level" ? Vh(k.id, j) : mn(j));
      if (s && C) {
        const _ = C.trim().toLowerCase();
        (_ === "#fff" || _ === "#ffffff" || _ === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(_)) && (C = "#212b32");
      }
      const y = d && c ? c.isHidden(k.id) : p.has(k.id), $ = f ? {
        "aria-pressed": !y,
        "aria-label": `${k.label} (${y ? "show" : "hide"})`,
        onClick: () => L(k.id)
      } : { "aria-label": k.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${y ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: I,
              backgroundImage: k.patternDataUrl ? `url(${k.patternDataUrl})` : void 0,
              backgroundSize: k.patternDataUrl ? "auto" : void 0,
              borderColor: C
            },
            ...$
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: k.label })
      ] }, k.id);
    }) }),
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: b })
  ] });
}, jy = ({
  series: e,
  seriesIndex: t,
  palette: n,
  parseX: a,
  areaOnly: s = !1,
  visibilityMode: o = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: u,
  gradientFill: c = !0,
  colors: d
}) => {
  const f = bn();
  if (!f) return null;
  const { xScale: h, yScale: g } = f, m = ar()?.isHidden(e.id) ?? !1, p = m && o === "fade";
  if (m && o === "remove") return null;
  const b = Kt();
  q.useEffect(() => {
    if (!b) return;
    const I = e.data.map((C) => ({ x: a(C), y: C.y }));
    return b.registerSeries(e.id, I), () => b.unregisterSeries(e.id);
  }, [b, e.id, e.data, a]);
  const T = d && d[t], L = e.color || T || (n === "region" ? Tn(e.id, t) : $t(t)), k = q.useMemo(() => u && u.length === e.data.length ? os(
    e.data,
    (I) => h(a(I)),
    (I) => {
      const C = e.data.indexOf(I);
      return g(u[C].y1);
    },
    { smooth: l }
  ) : os(
    e.data,
    (I) => h(a(I)),
    (I) => g(I.y),
    { smooth: l }
  ), [e.data, u, h, g, a, l]), j = q.useMemo(() => {
    if (u && u.length === e.data.length) {
      const _ = ss().x((x) => h(a(x))).y0((x, P) => g(u[P].y0)).y1((x, P) => g(u[P].y1));
      return l && _.curve($r), _(e.data) || "";
    }
    const [I, C] = g.domain();
    let y = i;
    y < I ? y = I : y > C && (y = C);
    const $ = ss().x((_) => h(a(_))).y0(() => g(y)).y1((_) => g(_.y));
    return l && $.curve($r), $(e.data) || "";
  }, [e.data, u, h, g, a, i, l]), M = q.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: p ? 0.25 : 1,
      "aria-hidden": p ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: M, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: L, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: L, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: j,
            fill: c ? `url(#${M})` : L,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !s && /* @__PURE__ */ r.jsx("path", { d: k, fill: "none", stroke: L, strokeWidth: 1 })
      ]
    }
  );
}, Ny = ({
  series: e,
  seriesIndex: t,
  seriesCount: n,
  palette: a,
  parseX: s,
  focusable: o = !0,
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
  gradientFill: b = !0,
  gradientStrokeMatch: T = !0,
  opacity: L = 1,
  fadedOpacity: k = 0.25,
  flatFillOpacity: j = 1,
  colors: M
}) => {
  const I = Math.max(0, m), C = bn(), y = nn();
  if (!C || !y) return null;
  const { xScale: $, yScale: _ } = C, P = ar()?.isHidden(e.id) ?? !1, N = P && f === "fade";
  if (P && f === "remove") return null;
  const S = Kt();
  q.useEffect(() => {
    if (!S) return;
    const K = e.data.map((ae) => ({ x: s(ae), y: ae.y }));
    return S.registerSeries(e.id, K), () => S.unregisterSeries(e.id);
  }, [S, e.id, e.data, s]);
  const D = typeof $.bandwidth == "function", A = D ? $.bandwidth() : void 0, re = q.useMemo(() => {
    if (A != null) return A;
    const K = g && g.length ? g : [e], ae = [];
    K.forEach((W) => {
      W.data.forEach((ne) => {
        const Z = $(s(ne));
        Number.isFinite(Z) && ae.push(Z);
      });
    });
    const de = ae.sort((W, ne) => W - ne);
    if (de.length <= 1) return 40;
    const w = [];
    for (let W = 1; W < de.length; W++)
      w.push(de[W] - de[W - 1]);
    return w.sort((W, ne) => W - ne), (w[Math.floor(w.length / 2)] || 40) * i;
  }, [e.data, g, $, s, i, A]), { basePerBar: G } = q.useMemo(() => {
    if (D) {
      const de = re, w = Math.max(
        1,
        (de - l * (n - 1)) / n
      ), R = e.barWidth ?? u;
      let W = R ? Math.min(R, de) : w;
      if (c) {
        const ne = de * Math.min(1, Math.max(0.05, d)), Z = Math.max(
          1,
          (ne - l * (n - 1)) / n
        );
        W = R ? Math.min(W, Z) : Z;
      }
      return { basePerBar: W };
    }
    const K = e.barWidth ?? u, ae = Math.max(
      1,
      (re - l * (n - 1)) / n
    );
    if (c) {
      const de = g && g.length ? g : [e], w = [];
      de.forEach(
        (xe) => xe.data.forEach((_e) => {
          const pe = $(s(_e));
          Number.isFinite(pe) && w.push(pe);
        })
      ), w.sort((xe, _e) => xe - _e);
      const R = [];
      for (let xe = 1; xe < w.length; xe++)
        R.push(w[xe] - w[xe - 1]);
      R.sort((xe, _e) => xe - _e);
      const ne = (R[Math.floor(R.length / 2)] || re) * Math.min(1, Math.max(0.05, d)), Z = Math.max(
        1,
        (ne - l * (n - 1)) / n
      );
      return { basePerBar: K ? Math.min(K, Z) : Z };
    }
    return K ? { basePerBar: Math.min(K, ae) } : { basePerBar: ae };
  }, [
    D,
    re,
    l,
    n,
    u,
    e.barWidth,
    c,
    d,
    g,
    $,
    s
  ]), B = q.useMemo(() => {
    if (D) return [];
    const K = [];
    return (g && g.length ? g : [e]).forEach(
      (de) => de.data.forEach((w) => {
        const R = $(s(w));
        Number.isFinite(R) && K.push(R);
      })
    ), K.sort((de, w) => de - w), Array.from(new Set(K));
  }, [D, g, e, $, s]), H = q.useMemo(() => {
    if (D)
      return [];
    if (!B.length) return [];
    if (B.length === 1)
      return [
        { center: B[0], left: 0, right: y.innerWidth }
      ];
    const K = [];
    for (let ae = 0; ae < B.length; ae++) {
      const de = B[ae], w = ae === 0 ? 0 : (B[ae - 1] + de) / 2, R = ae === B.length - 1 ? y.innerWidth : (de + B[ae + 1]) / 2;
      K.push({
        center: de,
        left: Math.max(0, w),
        right: Math.min(y.innerWidth, R)
      });
    }
    return K;
  }, [D, B, y.innerWidth]), V = q.useMemo(() => {
    if (D || !H.length)
      return;
    const K = Math.min(1, Math.max(0.05, i)), ae = H.map((ne) => Math.max(2, ne.right - ne.left)), de = ae.map(
      (ne) => Math.max(2, Math.min(ne - 1, ne * K))
    );
    let w = Math.min(...de);
    if (p)
      if (n <= 1) {
        const ne = Math.min(...ae.map((Z) => Z - 1));
        ne >= p && w < p && (w = Math.min(ne, p));
      } else {
        const ne = Math.min(...ae.map((oe) => oe - 1)), Z = p * n + (n - 1) * (p * I);
        Z <= ne && w < Z && (w = Z);
      }
    if (n <= 1)
      return p && w < p && ae.every((Z) => Z >= p) ? { groupWidth: p, barWidth: p } : { groupWidth: w, barWidth: w };
    let R = w / (n + (n - 1) * I);
    return R < 1 && (R = 1), p && R < p && p * n + (n - 1) * (p * I) <= w && (R = p), { groupWidth: R * n + (n - 1) * (R * I), barWidth: R };
  }, [
    D,
    H,
    i,
    n,
    I,
    p
  ]), se = M && M[t] ? M[t] : void 0, O = e.color || se || (a === "region" ? Tn(e.id, t) : $t(t)), fe = a === "region" ? Ir(e.id, t) : mn(t), we = T && (e.color || se) ? O : fe, ue = Number.isFinite(_(0)) ? _(0) : _.range()[0], ce = q.useId();
  return v && v.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: N ? k : L,
      "aria-hidden": N ? !0 : void 0,
      children: [
        b && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: ce,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: O, stopOpacity: 0.3 }),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: O,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: O,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((K, ae) => {
          const de = s(K), w = $(D ? K.x : de);
          let R, W;
          if (D)
            R = re, W = w;
          else {
            const Y = H.find(
              (Q) => Math.abs(Q.center - w) < 0.5
            );
            if (!Y || !V)
              R = G, W = w - G / 2;
            else {
              const { groupWidth: Q } = V;
              R = Q;
              let F = w - Q / 2;
              F < Y.left && (F = Y.left), F + Q > Y.right && (F = Math.max(Y.left, Y.right - Q)), W = F;
            }
          }
          const ne = v[ae], Z = _(ne.y0), oe = _(ne.y1), xe = Math.min(Z, oe), _e = Math.abs(oe - Z) || 1;
          if (!D && p && R < p) {
            const Y = H.find(
              (Q) => Math.abs(Q.center - w) < 0.5
            );
            if (Y) {
              const Q = Math.max(2, Y.right - Y.left - 1), F = Math.min(Q, p);
              F > R && (R = F, W = Math.max(
                Y.left,
                Math.min(Y.right - R, w - R / 2)
              ));
            }
          }
          const pe = !N && S?.focused?.seriesId === e.id && S.focused.index === ae, E = () => {
            !S || N || S.setFocused({
              seriesId: e.id,
              index: ae,
              x: de,
              y: ne.y1 - ne.y0,
              clientX: W + R / 2,
              clientY: xe
            });
          }, z = () => {
            S?.focused?.seriesId === e.id && S.focused.index === ae && S.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: W,
              y: xe,
              width: R,
              height: _e,
              fill: b ? `url(#${ce})` : O,
              ...b ? {} : { fillOpacity: j },
              stroke: pe ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : b && T ? O : void 0,
              strokeWidth: pe ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: N || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${ne.y1 - ne.y0}`,
              onMouseEnter: E,
              onFocus: E,
              onMouseLeave: z,
              onBlur: z
            },
            ae
          );
        })
      ]
    }
  ) : /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: N ? k : L,
      "aria-hidden": N ? !0 : void 0,
      children: [
        b && /* @__PURE__ */ r.jsxs("defs", { children: [
          h === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: ce,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: O, stopOpacity: 0.3 }),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: O,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: O,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          h === "category" && e.data.map((K, ae) => {
            const w = M && M[ae] || (a === "region" ? Tn(String(K.x), ae) : $t(ae)), R = `${ce}-${ae}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: R,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: w, stopOpacity: 0.3 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "60%", stopColor: w, stopOpacity: 0.14 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: w, stopOpacity: 0.06 })
                ]
              },
              R
            );
          })
        ] }),
        e.data.map((K, ae) => {
          const de = s(K), w = $(D ? K.x : de);
          let R, W;
          if (D) {
            const ee = re;
            if (n <= 1)
              W = ee, R = w;
            else {
              W = Math.max(
                1,
                ee / (n + (n - 1) * I)
              );
              const te = W * I, U = W * n + te * (n - 1);
              R = w + (ee - U) / 2 + t * (W + te);
            }
          } else {
            const ee = H.find((te) => te.center === w);
            if (!ee || !V)
              W = G, R = w - G / 2, p && W < p && (W = p, R = w - W / 2);
            else {
              const { barWidth: te } = V;
              W = te;
              const U = n > 1 ? te * I : 0, X = W * n + U * (n - 1);
              let le = w - X / 2;
              le < ee.left && (le = ee.left), le + X > ee.right && (le = Math.max(ee.left, ee.right - X)), R = le + t * (W + U);
            }
            if (p && W < p) {
              const te = H.find(
                (U) => Math.abs(U.center - w) < 0.5
              );
              if (te) {
                const U = Math.max(2, te.right - te.left - 1), X = Math.min(U, p);
                if (X > W)
                  if (n <= 1)
                    W = X, R = Math.max(
                      te.left,
                      Math.min(te.right - W, w - W / 2)
                    );
                  else {
                    const le = X * I, he = X * n + le * (n - 1);
                    if (he <= te.right - te.left - 1) {
                      W = X;
                      const ie = he;
                      let Ce = w - ie / 2;
                      Ce < te.left && (Ce = te.left), Ce + ie > te.right && (Ce = Math.max(
                        te.left,
                        te.right - ie
                      )), R = Ce + t * (W + le);
                    }
                  }
              }
            }
          }
          const ne = R + W / 2, Z = _(K.y), oe = Math.min(ue, Z), xe = Math.abs(ue - Z), _e = !N && S?.focused?.seriesId === e.id && S.focused.index === ae, pe = () => {
            !S || N || S.setFocused({
              seriesId: e.id,
              index: ae,
              x: de,
              y: K.y,
              clientX: ne,
              clientY: Z
            });
          }, E = () => {
            S?.focused?.seriesId === e.id && S.focused.index === ae && S.clear();
          }, z = h === "category" && M ? M[ae] : void 0, Y = h === "category" ? z || (a === "region" ? Tn(String(K.x), ae) : $t(ae)) : O, Q = h === "category" ? `${ce}-${ae}` : ce, F = b && T ? Y : h === "category" ? a === "region" ? Ir(String(K.x), ae) : mn(ae) : we, J = _e ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : F || Y;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: R,
              y: oe,
              width: W,
              height: xe || 1,
              fill: b ? `url(#${Q})` : Y,
              ...b ? {} : { fillOpacity: j },
              stroke: J,
              strokeWidth: _e ? 2 : 1,
              className: "fdp-bar",
              tabIndex: N || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${K.y}`,
              onMouseEnter: pe,
              onFocus: pe,
              onMouseLeave: E,
              onBlur: E
            },
            ae
          );
        })
      ]
    }
  );
}, Dy = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: s = 0.05,
  children: o,
  yTickCount: i = 5
}) => {
  const l = nn(), u = t ?? l?.innerWidth ?? 0, c = n ?? l?.innerHeight ?? 0, d = q.useMemo(() => e.flatMap((p) => p.data), [e]), f = q.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    return d.forEach((b) => p.add(b.x)), Array.from(p);
  }, [d]), h = q.useMemo(
    () => Math.max(0, ...d.map((p) => p.y)),
    [d]
  ), g = q.useMemo(
    () => Ni().domain(f).range([0, u]).paddingInner(a).paddingOuter(s),
    [f, u, a, s]
  ), v = q.useMemo(
    () => _r().domain([0, h]).nice().range([c, 0]),
    [h, c]
  ), m = q.useMemo(
    () => ({
      xScale: g,
      yScale: v,
      getXTicks: () => f,
      getYTicks: (p = i) => v.ticks(p)
    }),
    [g, v, f, i]
  );
  return /* @__PURE__ */ r.jsx(Gs.Provider, { value: m, children: o });
}, Ty = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: s,
  id: o,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const u = q.useId(), c = o || u, d = t ? `${c}-desc` : void 0, f = n ? `${c}-src` : void 0, h = typeof window < "u" && !l;
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      id: c,
      className: Dr("fdp-chart fdp-chart--noscript", s),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": Dr(d, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ r.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ r.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ r.jsx("p", { id: d, className: "fdp-chart__description", children: t }),
        !h && /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ r.jsx("noscript", { children: /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ r.jsx(Xt, { ...a }) }) }),
          /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ r.jsx(Xt, { ...a }) })
        ] }),
        n && /* @__PURE__ */ r.jsx("figcaption", { className: "fdp-chart__caption", children: n && /* @__PURE__ */ r.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          n
        ] }) })
      ]
    }
  );
}, $y = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const s = q.useRef(null);
  return q.useEffect(() => {
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
    if (n > 0) {
      if (typeof window > "u") return;
      const l = window.setTimeout(i, n);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, n]), /* @__PURE__ */ r.jsx("div", { ref: s, children: a });
}, tm = ({
  label: e,
  value: t,
  unit: n,
  delta: a,
  status: s = "neutral",
  variant: o = "default",
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
  const b = q.useId(), T = v || b, L = `${T}-label`, k = `${T}-value`, j = `${T}-delta`, M = typeof t == "number" && !Number.isNaN(t), I = c ? "—" : d ? "" : M ? f ? f(t) : t.toLocaleString() : t;
  let C, y = "", $ = "";
  if (a && !c && !d) {
    C = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const _ = Math.abs(a.value), x = C === "up" ? `+${_}` : C === "down" ? `-${_}` : "0", P = a.isPercent ? "%" : "";
    if (y = `${x}${P}`, a.ariaLabel)
      $ = a.ariaLabel;
    else {
      const N = a.invert ? C === "down" : C === "up";
      $ = `${C === "neutral" ? "no change" : C === "up" ? "up" : "down"} ${_}${P}${C === "neutral" ? "" : N ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: Dr(
        "fdp-metric-card",
        o && `fdp-metric-card--${o}`,
        s && `fdp-metric-card--status-${s}`,
        c && "fdp-metric-card--loading",
        d && "fdp-metric-card--error",
        h
      ),
      style: g,
      role: "group",
      "aria-labelledby": L,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ r.jsx("h3", { id: L, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ r.jsx("div", { id: k, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : d ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: d }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: I }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: j,
              "aria-label": $,
              className: Dr(
                "fdp-metric-card__delta",
                C && `fdp-metric-card__delta--${C}`
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
        m && a && !a.ariaLabel && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: $ })
      ] })
    }
  );
};
let cs = null;
try {
  cs = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const Ue = (e, t) => {
  if (!cs) return t;
  const n = e.split(".");
  let a = cs;
  for (const o of n) {
    if (a == null) break;
    a = a[o];
  }
  const s = a;
  return s == null ? t : typeof s == "string" || typeof s == "number" ? String(s) : s.$value != null ? String(s.$value) : s.value != null ? String(s.value) : t;
}, da = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: Ue("gradient.stop.start-opacity", "0.12"),
  mid: Ue("gradient.stop.mid-opacity", "0.03"),
  end: Ue("gradient.stop.end-opacity", "0"),
  triStart: Ue(
    "gradient.stop.triangle-start-opacity",
    Ue("gradient.stop.start-opacity", "0.12")
  ),
  triMid: Ue(
    "gradient.stop.triangle-mid-opacity",
    Ue("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: Ue(
    "gradient.stop.triangle-end-opacity",
    Ue("gradient.stop.end-opacity", "0")
  )
});
var Dt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Dt || {}), De = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(De || {}), Te = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(Te || {}), ft = /* @__PURE__ */ ((e) => (e.SinglePoint = "single_point", e.TwoSigma = "two_sigma", e.Shift = "shift", e.Trend = "trend", e))(ft || {});
const Ys = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
], ei = Ys.reduce(
  (e, t, n) => (e[t] = n + 1, e),
  {}
), nm = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, rm = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, Mr = Ys.reduce(
  (e, t, n) => (e[t] = {
    id: t,
    rank: n + 1,
    label: nm[t],
    category: rm[t],
    participatesInRanking: !0
  }, e),
  {}
);
Ys.map(
  (e) => Mr[e]
);
var nt = /* @__PURE__ */ ((e) => (e.Up = "up", e.Down = "down", e))(nt || {}), ht = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(ht || {}), Ze = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(Ze || {}), vt = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(vt || {}), pr = /* @__PURE__ */ ((e) => (e.Legacy = "legacy", e.DirectionalFirst = "directional_first", e))(pr || {}), _l = /* @__PURE__ */ ((e) => (e.None = "none", e.SqlRankingV26a = "sql_ranking_v2_6a", e))(_l || {}), kt = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(kt || {}), qs = /* @__PURE__ */ ((e) => (e.Sql = "sql", e.Conflict = "conflict", e))(qs || {}), zn = /* @__PURE__ */ ((e) => (e.ImprovementValueBeforePruning = "improvementValueBeforePruning", e.ConcernValueBeforePruning = "concernValueBeforePruning", e))(zn || {});
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
function fa(e) {
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
function pa(e) {
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
function Sl(e) {
  switch (e) {
    case Ze.Pass:
      return "Target met";
    case Ze.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function am(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((n - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const Ct = {
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
function kl(e) {
  return e ? Ct[e]?.token ?? Ct.neither.token : Ct.neither.token;
}
function sm(e) {
  return e ? Ct[e]?.hex ?? Ct.neither.hex : Ct.neither.hex;
}
var tn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(tn || {});
const om = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, im = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var Xe = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Xe || {}), Ne = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Ne || {}), gt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(gt || {}), ke = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(ke || {});
const lm = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, s = parseInt(t.slice(4, 6), 16) / 255, o = [n, a, s].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2] < 0.55 ? "#ffffff" : "#212b32";
}, ha = {
  special_cause_deteriorating: {
    hex: Ct.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: Ct.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: Ct.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: Ct.suppressed.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(ha).forEach((e) => {
  e.text || (e.text = lm(e.hex));
});
const Xs = (e) => ha[e], ma = (e) => ha[e].judgement || "none", ti = {
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
function cm(e, t) {
  let n;
  return e === "common_cause" ? n = ti.common : n = ti.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
var ut = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(ut || {}), un = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(un || {}), er = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(er || {});
const Cl = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === De.Up ? Xe.HigherIsBetter : i.improvementDirection === De.Down ? Xe.LowerIsBetter : Xe.ContextDependent : i.polarity && (l = i.polarity);
    let u;
    switch (i.variationIcon) {
      case Te.Improvement:
        u = ke.SpecialCauseImproving;
        break;
      case Te.Concern:
        u = ke.SpecialCauseDeteriorating;
        break;
      case Te.Neither:
        u = i.specialCauseNeutral ? ke.SpecialCauseNoJudgement : ke.CommonCause;
        break;
      case Te.Suppressed:
      default:
        u = ke.SpecialCauseNoJudgement;
        break;
    }
    let c = i.trend;
    return c || (u === ke.SpecialCauseImproving ? c = l === Xe.LowerIsBetter ? Ne.Lower : Ne.Higher : u === ke.SpecialCauseDeteriorating ? c = l === Xe.LowerIsBetter ? Ne.Higher : Ne.Lower : u === ke.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? c = Ne.Higher : i.lowSideSignal && !i.highSideSignal ? c = Ne.Lower : c = Ne.Higher : c = Ne.Higher), { state: u, direction: c, polarity: l ?? Xe.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === ke.SpecialCauseImproving || i.state === ke.SpecialCauseDeteriorating) && i.polarity && (i.state === ke.SpecialCauseImproving ? l = i.polarity === Xe.LowerIsBetter ? Ne.Lower : Ne.Higher : l = i.polarity === Xe.LowerIsBetter ? Ne.Higher : Ne.Lower), l || (i.state === ke.SpecialCauseImproving ? l = Ne.Higher : i.state === ke.SpecialCauseDeteriorating ? l = Ne.Lower : l = Ne.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? Xe.ContextDependent
    };
  }
  const n = e;
  t();
  const s = {
    [gt.Improving]: ke.SpecialCauseImproving,
    [gt.Deteriorating]: ke.SpecialCauseDeteriorating,
    [gt.No_Judgement]: ke.SpecialCauseNoJudgement,
    [gt.None]: ke.CommonCause
  }[n.judgement];
  let o;
  return n.judgement === gt.Improving ? o = n.polarity === Xe.LowerIsBetter ? Ne.Lower : Ne.Higher : n.judgement === gt.Deteriorating ? o = n.polarity === Xe.LowerIsBetter ? Ne.Higher : Ne.Lower : o = n.trend ?? Ne.Higher, { state: s, direction: o, polarity: n.polarity };
};
function jl(e, t) {
  const { state: n, direction: a, polarity: s } = Cl(e), o = ma(n), i = a === Ne.Higher ? "above" : "below", l = a === Ne.Higher ? "upwards" : "downwards", u = (() => {
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
        case gt.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case gt.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case gt.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case gt.None:
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
const Ga = (e, t, n, a, s, o) => /* @__PURE__ */ r.jsxs("defs", { children: [
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
] }), ga = ({
  data: e,
  size: t = 44,
  ariaLabel: n,
  showLetter: a = !0,
  dropShadow: s = !0,
  gradientWash: o = !1,
  variant: i = un.Classic,
  runLength: l = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: u = er.Polarity,
  letterOverride: c,
  ...d
}) => {
  const f = hr(), h = hr(), {
    start: g,
    mid: v,
    end: m,
    triStart: p,
    triMid: b,
    triEnd: T
  } = da(), { state: L, direction: k, polarity: j } = $e(
    () => Cl(e),
    [e]
  ), M = $e(() => Xs(L), [L]), I = $e(() => ma(L), [L]), C = I === gt.Improving || I === gt.Deteriorating;
  let y = "";
  a && C && (u === er.Polarity ? j === Xe.HigherIsBetter ? y = "H" : j === Xe.LowerIsBetter ? y = "L" : y = "" : y = k === Ne.Higher ? "H" : "L"), c !== void 0 && (y = c);
  const $ = L !== ke.CommonCause, _ = L === ke.SpecialCauseNoJudgement, x = Ue("common-cause", "#A6A6A6"), P = $ ? M.hex : x, N = $e(
    () => cm(L, k),
    [L, k]
  ), S = n || `${M.label}${y ? k === Ne.Higher ? " – Higher" : " – Lower" : ""}`, D = jl(
    e
  );
  if (i === un.TriangleWithRun) {
    const H = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], V = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let se = null;
    L === ke.SpecialCauseImproving || L === ke.SpecialCauseDeteriorating ? se = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (k === Ne.Higher ? H : V).map((R) => R.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 6,
        transform: k === Ne.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : L === ke.SpecialCauseNoJudgement && (se = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: k === Ne.Higher ? H.map((R) => R.join(",")).join(" ") : V.map((R) => R.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 6,
        transform: k === Ne.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const O = Math.max(0, Math.min(5, Math.floor(l || 0))), fe = L === ke.CommonCause ? 160 : k === Ne.Higher ? 220 : 70, we = 10, ue = 26, ce = 150 - 2 * ue, K = L === ke.SpecialCauseImproving ? Ue("improvement", "#00B0F0") : L === ke.SpecialCauseDeteriorating ? Ue("concern", "#E46C0A") : x, ae = Array.from({ length: 5 }).map((R, W) => {
      const Z = (L === ke.SpecialCauseImproving || L === ke.SpecialCauseDeteriorating) && W >= 5 - O ? K : x;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: ce + W * ue,
          cy: fe,
          r: we,
          fill: Z,
          stroke: Z,
          strokeWidth: 1
        },
        W
      );
    }), de = Ga(
      M.hex,
      f,
      h,
      s,
      o,
      [
        { offset: "0%", opacity: p },
        { offset: "75%", opacity: b },
        { offset: "100%", opacity: T }
      ]
    ), w = L === ke.CommonCause || k === Ne.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": S,
        "aria-description": D,
        ...d,
        children: [
          de,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: o ? `url(#${h})` : "#ffffff",
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
          /* @__PURE__ */ r.jsxs("g", { transform: w, children: [
            se,
            y && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: k === Ne.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: y
              }
            ),
            ae
          ] })
        ]
      }
    );
  }
  if (i === un.Triangle) {
    const H = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], V = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], se = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let O = null;
    L === ke.SpecialCauseImproving || L === ke.SpecialCauseDeteriorating ? O = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (k === Ne.Higher ? H : V).map((we) => we.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 8,
        transform: k === Ne.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : L === ke.SpecialCauseNoJudgement ? O = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: k === Ne.Higher ? H.map((we) => we.join(",")).join(" ") : V.map((we) => we.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 8,
        transform: k === Ne.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : L === ke.CommonCause && (O = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: se[0][0],
        y1: se[0][1],
        x2: se[1][0],
        y2: se[1][1],
        stroke: M.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const fe = Ga(
      M.hex,
      f,
      h,
      s,
      o,
      [
        { offset: "0%", opacity: p },
        { offset: "65%", opacity: b },
        { offset: "100%", opacity: T }
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
        "aria-description": D,
        ...d,
        children: [
          fe,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: o ? `url(#${h})` : "#ffffff",
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
          O,
          y && (L === ke.SpecialCauseImproving || L === ke.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: k === Ne.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: y
            }
          )
        ]
      }
    );
  }
  const A = Ga(
    M.hex,
    f,
    h,
    s,
    o,
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
      "aria-label": S,
      "aria-description": D,
      ...d,
      children: [
        A,
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: o ? `url(#${h})` : "#ffffff",
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
        y && /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: M.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: k === Ne.Lower ? "340" : "155", children: y })
          }
        ),
        _ ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: M.hex,
            ...k === Ne.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          N.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: x,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${N.map((re) => `${re.cx} ${re.cy}`).join(" L ")}`
            }
          ),
          N.map((re, G) => {
            const H = G >= N.length - 2 && $ ? P : x, V = H;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: V,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: H,
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
ga.displayName = "SPCVariationIcon";
const um = {
  xs: { height: 24, pointR: 2, stroke: 1 },
  sm: { height: 32, pointR: 3, stroke: 1 },
  md: { height: 44, pointR: 4, stroke: 1 }
};
function dm(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function fm(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const n = t.reduce((i, l) => i + l.value, 0) / t.length, a = [...e].reverse().findIndex((i) => i.value != null), s = a >= 0 ? e.length - 1 - a : null, o = s != null ? e[s].value : null;
  return { mean: n, latestValue: o, latestIndex: s };
}
function pm(e) {
  switch (e) {
    case ke.SpecialCauseImproving:
      return Ue("improvement", "#00B0F0");
    case ke.SpecialCauseDeteriorating:
      return Ue("concern", "#E46C0A");
    case ke.SpecialCauseNoJudgement:
      return Ue("no-judgement", "#490092");
    case ke.CommonCause:
      return Ue("common-cause", "#A6A6A6");
    default:
      return Ue("common-cause", "#A6A6A6");
  }
}
const Nl = ({
  data: e,
  windowSize: t,
  minPointsForSignals: n = 13,
  showMean: a = !0,
  showLimits: s = !0,
  showLimitBand: o = !0,
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
  onClassification: b,
  maxPoints: T,
  thinningStrategy: L = "stride",
  colorPointsBySignal: k = !0,
  centerLine: j,
  controlLimits: M,
  sigmaBands: I,
  pointSignals: C,
  pointNeutralSpecialCause: y
}) => {
  const $ = f, _ = $e(
    () => dm(e, t),
    [e, t]
  ), x = $e(() => fm(_), [_]), P = um[g], N = Math.max(_.length * 6, 60), S = P.height, D = 4, A = 2, re = $e(() => (e?.length ?? 0) - (_?.length ?? 0), [e?.length, _?.length]), B = _.filter((E) => E.value != null).map((E) => E.value), H = j ?? x.mean, V = $e(() => {
    if (H == null) return null;
    const E = [];
    if (I?.upperOne != null && E.push(Math.abs(I.upperOne - H)), I?.lowerOne != null && E.push(Math.abs(H - I.lowerOne)), E.length) return E.reduce((Y, Q) => Y + Q, 0) / E.length;
    const z = [];
    return M?.upper != null && z.push(Math.abs(M.upper - H) / 3), M?.lower != null && z.push(Math.abs(H - M.lower) / 3), z.length ? z.reduce((Y, Q) => Y + Q, 0) / z.length : null;
  }, [I?.upperOne, I?.lowerOne, M?.upper, M?.lower, H]), se = $e(() => {
    if (V != null || !B.length || H == null || B.length < 2) return null;
    const E = [];
    for (let Y = 1; Y < B.length; Y++) {
      const Q = B[Y - 1], F = B[Y];
      Q != null && F != null && E.push(Math.abs(F - Q));
    }
    return E.length ? E.reduce((Y, Q) => Y + Q, 0) / E.length / 1.128 : null;
  }, [V, B.join(","), H]), O = V ?? se, fe = $e(() => {
    if (!s) return null;
    if (M) return M;
    if (H == null || O == null) return null;
    const E = 3 * O;
    return { lower: H - E, upper: H + E };
  }, [s, H, O, M?.lower, M?.upper]), we = $e(() => {
    if (c)
      return {
        state: c,
        firedRules: [],
        mean: x.mean,
        stdDev: O
      };
    if (!d || !O || O === 0 || H == null || x.latestValue == null)
      return {
        state: ke.CommonCause,
        firedRules: [],
        mean: x.mean,
        stdDev: O
      };
    const E = [], z = x.latestValue, Y = M?.upper ?? (O != null && H != null ? H + 3 * O : null), Q = M?.lower ?? (O != null && H != null ? H - 3 * O : null);
    Y != null && Q != null && (z > Y || z < Q) && E.push("point-beyond-3sigma");
    const F = B.slice(-8);
    if (F.length === 8) {
      const U = F.every((le) => le > H), X = F.every((le) => le < H);
      (U || X) && E.push("eight-point-run");
    }
    const J = B.slice(-5);
    if (J.length === 5) {
      const U = J.every((ie, Ce, me) => Ce === 0 || ie >= me[Ce - 1]), X = J.every((ie, Ce, me) => Ce === 0 || ie <= me[Ce - 1]), le = I?.upperOne ?? (O != null && H != null ? H + O : null), he = I?.lowerOne ?? (O != null && H != null ? H - O : null);
      U && le != null && J[J.length - 1] > le && E.push("five-point-trend"), X && he != null && J[J.length - 1] < he && E.push("five-point-trend");
    }
    const ee = B.slice(-3);
    if (ee.length === 3 && (O != null || I)) {
      const U = I?.upperTwo ?? (H != null && O != null ? H + 2 * O : null), X = I?.lowerTwo ?? (H != null && O != null ? H - 2 * O : null);
      if (U != null && X != null) {
        const le = ee.filter((ie) => ie > U).length, he = ee.filter((ie) => ie < X).length;
        le >= 2 && E.push("two-of-three-near-limit"), he >= 2 && E.push("two-of-three-near-limit");
      }
    }
    let te = ke.CommonCause;
    if (E.includes("point-beyond-3sigma") ? te = z > H ? ke.SpecialCauseImproving : ke.SpecialCauseDeteriorating : (E.includes("eight-point-run") || E.includes("five-point-trend") || E.includes("two-of-three-near-limit")) && (te = B[B.length - 1] > H ? ke.SpecialCauseImproving : ke.SpecialCauseDeteriorating), d && !c && E.length === 1 && E[0] === "point-beyond-3sigma") {
      const U = B.slice(-9, -1);
      if (U.length >= 5) {
        const X = U.filter((he) => he > H).length, le = U.filter((he) => he < H).length;
        X > 0 && le > 0 && (te = ke.SpecialCauseNoJudgement);
      }
    }
    return {
      state: te,
      firedRules: E,
      mean: H,
      stdDev: O,
      side: x.latestValue != null && H != null ? x.latestValue > H ? "above" : "below" : void 0
    };
  }, [
    c,
    d,
    O,
    H,
    x.latestValue,
    B.join(",")
  ]);
  bt.useEffect(() => {
    d && !c && b && b(we);
  }, [we, d, c, b]);
  const ue = we.state, ce = pm(ue), K = (E) => {
    const z = _.filter((J) => J.value != null);
    if (!z.length) return S / 2;
    const Y = z.map((J) => J.value);
    fe && (fe.lower != null && Y.push(fe.lower), fe.upper != null && Y.push(fe.upper));
    const Q = Math.min(...Y), F = Math.max(...Y);
    return Q === F ? S / 2 : S - (E - Q) / (F - Q) * (S - A * 2) - A;
  }, ae = $e(() => {
    if (!T || _.length <= T)
      return _.map((ee, te) => te);
    if (L === "stride") {
      const ee = Math.max(2, T), te = (_.length - 1) / (ee - 1), U = /* @__PURE__ */ new Set();
      for (let X = 0; X < ee; X++) U.add(Math.round(X * te));
      return U.add(_.length - 1), Array.from(U).sort((X, le) => X - le);
    }
    const E = _.map((ee, te) => ({ i: te, v: ee.value }));
    function z(ee, te, U) {
      const X = ee.i, le = ee.v ?? 0, he = te.i, ie = te.v ?? 0, Ce = U.i, me = U.v ?? 0, Ie = Math.abs((me - ie) * X - (Ce - he) * le + Ce * ie - me * he), Ae = Math.hypot(me - ie, Ce - he);
      return Ae === 0 ? 0 : Ie / Ae;
    }
    function Y(ee, te) {
      if (ee.length <= 2) return ee;
      let U = -1, X = -1;
      for (let le = 1; le < ee.length - 1; le++) {
        const he = z(ee[le], ee[0], ee[ee.length - 1]);
        he > U && (U = he, X = le);
      }
      if (U > te) {
        const le = Y(ee.slice(0, X + 1), te), he = Y(ee.slice(X), te);
        return [...le.slice(0, -1), ...he];
      }
      return [ee[0], ee[ee.length - 1]];
    }
    let Q = 0.1, F = E;
    for (let ee = 0; ee < 8 && (F = Y(E, Q), !(F.length <= T)); ee++)
      Q *= 1.6;
    const J = new Set(F.map((ee) => ee.i));
    return J.add(0), J.add(_.length - 1), Array.from(J).sort((ee, te) => ee - te);
  }, [_, T, L]), de = $e(
    () => ae.map((E) => _[E]),
    [ae, _]
  ), w = $e(() => {
    let E = "";
    return de.forEach((z, Y) => {
      if (z.value == null) return;
      const Q = K(z.value), F = Y / (de.length - 1 || 1) * (N - D * 2) + D;
      E += E ? ` L ${F} ${Q}` : `M ${F} ${Q}`;
    }), E;
  }, [de, N]), R = x.latestIndex ?? -1, W = fe, ne = da(), Z = $e(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [_.length, h]
  ), oe = _.length >= (n || 0), xe = v || "SPC sparkline", _e = (() => {
    if (!ue) return;
    const E = $ === De.Up ? Xe.HigherIsBetter : $ === De.Down ? Xe.LowerIsBetter : Xe.ContextDependent, z = {
      variationIcon: ue === ke.SpecialCauseImproving ? "improvement" : ue === ke.SpecialCauseDeteriorating ? "concern" : ue === ke.SpecialCauseNoJudgement ? "none" : "neither",
      trend: $ === De.Up ? Ne.Higher : Ne.Lower,
      polarity: E
    };
    try {
      return jl(z);
    } catch {
      return;
    }
  })(), pe = $e(() => {
    if (!oe) return 10;
    const E = [..._].reverse().filter((Y) => Y.value != null).slice(0, 6).map((Y) => K(Y.value));
    return E.length && E.reduce((Y, Q) => Y + Q, 0) / E.length < S / 2 ? S : 10;
  }, [_, oe, S]);
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": xe,
      "aria-description": _e,
      width: N,
      height: S,
      className: m,
      viewBox: `0 0 ${N} ${S}`,
      children: [
        h && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: Z, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: ce,
                stopOpacity: Number(ne.start)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: ce,
                stopOpacity: Number(ne.mid)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: ce,
                stopOpacity: Number(ne.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: N,
              height: S,
              fill: `url(#${Z})`
            }
          )
        ] }),
        W && W.lower != null && W.upper != null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          o && /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                K(W.upper),
                K(W.lower)
              ),
              width: N,
              height: Math.abs(
                K(W.upper) - K(W.lower)
              ),
              fill: ce,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: N,
              y1: K(W.lower),
              y2: K(W.lower),
              stroke: ce,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: N,
              y1: K(W.upper),
              y2: K(W.upper),
              stroke: ce,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          I && i && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            I.lowerTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: N,
                y1: K(I.lowerTwo),
                y2: K(I.lowerTwo),
                stroke: ce,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            I.lowerOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: N,
                y1: K(I.lowerOne),
                y2: K(I.lowerOne),
                stroke: ce,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            I.upperOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: N,
                y1: K(I.upperOne),
                y2: K(I.upperOne),
                stroke: ce,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            I.upperTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: N,
                y1: K(I.upperTwo),
                y2: K(I.upperTwo),
                stroke: ce,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        a && x.mean != null && /* @__PURE__ */ r.jsx(
          "line",
          {
            x1: 0,
            x2: N,
            y1: K(x.mean),
            y2: K(x.mean),
            stroke: Ue("common-cause", "#A6A6A6"),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: w,
            fill: "none",
            stroke: Ue("common-cause", "#A6A6A6"),
            strokeWidth: P.stroke,
            strokeLinecap: "round"
          }
        ),
        ae.map((E, z) => {
          const Y = _[E];
          if (!Y || Y.value == null) return null;
          const Q = K(Y.value), F = z / (de.length - 1 || 1) * (N - D * 2) + D, ee = (E === R && l ? P.pointR + 1 : P.pointR) - 0.5;
          let te = Ue("common-cause", "#A6A6A6");
          if (k) {
            const U = C?.[re + E];
            if (U === "improvement")
              te = Ue("improvement", "#00B0F0");
            else if (U === "concern")
              te = Ue("concern", "#E46C0A");
            else if (y?.[re + E])
              te = Ue("no-judgement", "#490092");
            else if (H != null) {
              const le = Y.value, he = M?.upper ?? (O != null ? H + 3 * O : null), ie = M?.lower ?? (O != null ? H - 3 * O : null);
              he != null && le > he ? te = Ue("improvement", "#00B0F0") : ie != null && le < ie ? te = Ue("concern", "#E46C0A") : te = Ue("common-cause", "#A6A6A6");
            } else
              te = Ue("common-cause", "#A6A6A6");
          }
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: F,
              cy: Q,
              r: ee,
              fill: te,
              stroke: "none",
              strokeWidth: 0,
              onClick: p ? () => p(E, Y) : void 0,
              style: p ? { cursor: "pointer" } : void 0,
              "data-index": E,
              "data-signal-colour": k ? te : void 0
            },
            E
          );
        }),
        u && oe && ue && ue !== ke.CommonCause && $ && /* @__PURE__ */ r.jsx(
          "text",
          {
            x: N - 4,
            y: pe,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: ce,
            "data-glyph-pos": pe < S / 2 ? "top" : "bottom",
            children: $ === De.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
Nl.displayName = "SPCSpark";
const Se = (e) => typeof e == "number" && Number.isFinite(e), hm = (e) => e.reduce((t, n) => t + n, 0), It = (e) => e.length ? hm(e) / e.length : NaN;
function Dl(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (!t[s] && Se(o)) {
      if (a !== null) {
        const i = e[a];
        n[s] = Se(i) ? Math.abs(o - i) : null;
      }
      a = s;
    }
  }
  return n;
}
function Tl(e, t) {
  const n = e.filter((o) => Se(o));
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = It(n), s = 3.267 * a;
  if (t) {
    const o = n.filter((i) => i <= s);
    o.length && o.length !== n.length && (a = It(o), s = 3.267 * a);
  }
  return { mrMean: a, mrUcl: s };
}
function mm(e, t) {
  if (!Se(e) || !Se(t))
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
const gm = 0.2777, xm = 3.6, bm = (e) => Se(e) && e >= 0 ? Math.pow(e, gm) : null, an = (e) => Se(e) && e >= 0 ? Math.pow(e, xm) : null;
function ym(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
const _n = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function vm(e) {
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
  const t = 1 / (e + 1), n = (d) => ym(d, t) - 1, a = n(0.5), s = Math.max(0, n(_n.three.low)), o = n(_n.three.high), i = Math.max(0, n(_n.one.low)), l = n(_n.one.high), u = Math.max(0, n(_n.two.low)), c = n(_n.two.high);
  return { cl: a, lcl: s, ucl: o, oneLow: i, oneHigh: l, twoLow: u, twoHigh: c };
}
function wm(e, t, n) {
  const a = e.map((C) => Se(C) ? bm(C) : null), s = Dl(a, t), { mrMean: o } = Tl(s, !!n), i = a.filter((C, y) => !t[y] && Se(C)), l = i.length ? It(i) : NaN;
  if (!Se(l) || !Se(o))
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
  const u = 2.66, c = 2 / 3 * u, d = 1 / 3 * u, f = l + u * o, h = l - u * o, g = l + c * o, v = l - c * o, m = l + d * o, p = l - d * o, b = an(l), T = an(f), L = h <= 0 ? null : an(h), k = an(m), j = p <= 0 ? null : an(p), M = an(g), I = v <= 0 ? null : an(v);
  return {
    center: b ?? null,
    upperProcessLimit: T ?? null,
    lowerProcessLimit: L ?? null,
    upperTwoSigma: M ?? null,
    lowerTwoSigma: I ?? null,
    upperOneSigma: k ?? null,
    lowerOneSigma: j ?? null,
    mr: s,
    mrMean: o,
    mrUcl: Se(o) ? 3.267 * o : null
  };
}
function _m(e) {
  const {
    metricImprovement: t,
    capabilityMode: n,
    value: a,
    mean: s,
    upperProcessLimit: o,
    lowerProcessLimit: i,
    target: l
  } = e, u = (c) => typeof c == "number" && Number.isFinite(c);
  return !u(a) || s === null || !u(l) ? Ze.None : n && u(o) && u(i) ? t === De.Up ? u(i) && i > l ? Ze.Pass : u(o) && o < l ? Ze.Fail : Ze.None : t === De.Down ? u(o) && o < l ? Ze.Pass : u(i) && i > l ? Ze.Fail : Ze.None : Ze.None : t === De.Down ? a <= l ? Ze.Pass : Ze.Fail : t === De.Up ? a >= l ? Ze.Pass : Ze.Fail : Ze.None;
}
function Sm(e, t) {
  const {
    W: n,
    minGap: a,
    minDeltaSigma: s,
    scoreThreshold: o,
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
    const p = v > 0 && i(v - 1), b = v > 0 && l(v - 1), T = v > 0 && u(v - 1), L = v > 0 && c(v - 1), k = v > 0 && d(v - 1), j = v > 0 && f(v - 1), M = i(v), I = l(v), C = u(v), y = c(v), $ = d(v), _ = f(v), x = [];
    M && !p && x.push({ reason: vt.Shift, index: v }), I && !b && x.push({ reason: vt.Shift, index: v }), C && !T && x.push({ reason: vt.Trend, index: v }), y && !L && x.push({ reason: vt.Trend, index: v }), $ && !k && x.push({ reason: vt.Point, index: v }), _ && !j && x.push({ reason: vt.Point, index: v });
    for (const P of x) {
      if (P.index - g < a) continue;
      const N = Math.max(0, P.index - n), S = P.index - 1;
      if (S - N + 1 < n) continue;
      const D = P.index, A = P.index + n - 1;
      if (A >= e.length) continue;
      const re = e.slice(N, S + 1).map((w) => w.value).filter(
        (w) => typeof w == "number" && Number.isFinite(w)
      ), G = e.slice(D, A + 1).map((w) => w.value).filter(
        (w) => typeof w == "number" && Number.isFinite(w)
      );
      if (re.length < n || G.length < n) continue;
      const B = e[P.index];
      let H = null;
      if (typeof B.upperProcessLimit == "number" && typeof B.mean == "number") {
        const w = B.upperProcessLimit - B.mean;
        w > 0 && (H = w / 3);
      }
      if (!H || H <= 0) continue;
      const V = It(re), se = It(G), O = se - V;
      if (Math.abs(O) < s * H) continue;
      const we = e.slice(D, A + 1).filter(
        (w) => w.variationIcon === Te.Concern
      ).length;
      if (we > 1) continue;
      const ue = (w) => {
        const R = It(w);
        return w.length ? w.reduce((W, ne) => W + (ne - R) * (ne - R), 0) / w.length : 0;
      }, ce = ue(re), K = ue(G);
      let ae = P.reason === vt.Shift ? 90 : P.reason === vt.Trend ? 70 : 60;
      if (K < ce && (ae += 10), ae -= we * 15, ae < o) continue;
      const de = h.find((w) => w.index === P.index);
      if (de) {
        const w = (R) => R === vt.Shift ? 3 : R === vt.Trend ? 2 : 1;
        (w(P.reason) > w(de.reason) || ae > de.score) && (de.reason = P.reason, de.score = ae, de.deltaMean = O, de.oldMean = V, de.newMean = se, de.window = [D, A]);
      } else
        h.push({
          index: P.index,
          reason: P.reason,
          score: ae,
          deltaMean: O,
          oldMean: V,
          newMean: se,
          window: [D, A]
        });
    }
  }
  return h.sort((v, m) => v.index - m.index), h;
}
function Ya() {
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
var en = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(en || {}), $l = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))($l || {}), Il = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Il || {});
function km(e) {
  const t = [], n = [];
  e.specialCauseSinglePointUp && t.push(ft.SinglePoint), e.specialCauseSinglePointDown && n.push(ft.SinglePoint), e.specialCauseTwoOfThreeUp && t.push(ft.TwoSigma), e.specialCauseTwoOfThreeDown && n.push(ft.TwoSigma), e.specialCauseShiftUp && t.push(ft.Shift), e.specialCauseShiftDown && n.push(ft.Shift), e.specialCauseTrendUp && t.push(ft.Trend), e.specialCauseTrendDown && n.push(ft.Trend);
  const a = t.reduce((o, i) => Math.max(o, Mr[i].rank), 0), s = n.reduce((o, i) => Math.max(o, Mr[i].rank), 0);
  return { upRules: t, downRules: n, upMax: a, downMax: s, hasUp: t.length > 0, hasDown: n.length > 0 };
}
function Cm(e) {
  const t = [];
  let n = [];
  for (const a of e)
    a.baseline && n.length && (t.push(n), n = []), n.push(a);
  return n.length && t.push(n), t;
}
function jm(e, t, n) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const s = e.map((d, f) => ({ idx: f, value: d.value })).filter((d) => Se(d.value));
  if (s.length < a * 2) return;
  const o = n === De.Up || n === De.Neither, i = n === De.Down;
  function l(d, f) {
    const h = s.slice(d, f).map((g) => g.value);
    return h.length ? It(h) : NaN;
  }
  let u = null;
  if (s.length > 1) {
    const d = [];
    for (let h = 1; h < s.length; h++) d.push(Math.abs(s[h].value - s[h - 1].value));
    const f = It(d);
    Se(f) && f > 0 && (u = f * (2.66 / 3));
  }
  if (!u || u <= 0) return;
  const c = t.autoRecalculateDeltaSigma ?? 0.5;
  for (let d = a; d <= s.length - a; d++) {
    const f = d - a, h = l(f, d), g = l(d, d + a);
    if (!Se(h) || !Se(g)) continue;
    const m = (g - h) / u;
    if (!(o ? m >= c : i ? -m >= c : Math.abs(m) >= c)) continue;
    const b = s.slice(d, d + a).map((k) => k.value);
    if (!(o ? b.every((k) => k > h) : i ? b.every((k) => k < h) : b.every((k) => o ? k > h : k < h))) continue;
    const L = s[d].idx;
    e[L].baseline || (e[L].baseline = !0);
    return;
  }
}
function Ml(e) {
  if (!e) return {};
  const t = e, n = e, a = n.rules ?? {}, s = n.precedence ?? {}, o = n.thresholds ?? {}, i = n.warnings ?? {}, l = n.rareEvent ?? {}, u = n.capability ?? {}, c = n.grace ?? {}, d = n.baselineSuggest ?? {}, f = n.autoRecalc ?? {}, h = c.emergingEnabled ?? n.emergingGraceEnabled ?? t.emergingGraceEnabled ?? t.emergingDirectionGrace, g = a.collapseWeakerClusterRules ?? n.collapseWeakerClusterRules ?? t.collapseWeakerClusterRules ?? t.collapseClusterRules;
  if (Ya()) {
    if (t.emergingDirectionGrace !== void 0)
      throw new Error("[spc][phase4] emergingDirectionGrace is no longer supported. Use settings.grace.emergingEnabled.");
    if (t.collapseClusterRules !== void 0)
      throw new Error("[spc][phase4] collapseClusterRules is no longer supported. Use settings.rules.collapseWeakerClusterRules.");
  }
  const v = globalThis;
  !Ya() && t.emergingDirectionGrace !== void 0 && n.emergingGraceEnabled === void 0 && c.emergingEnabled === void 0 && !v.__spc_warn_emergingDirectionGrace && (v.__spc_warn_emergingDirectionGrace = !0, console.warn("[spc] emergingDirectionGrace is deprecated; use grace.emergingEnabled")), !Ya() && t.collapseClusterRules !== void 0 && a.collapseWeakerClusterRules === void 0 && n.collapseWeakerClusterRules === void 0 && !v.__spc_warn_collapseClusterRules && (v.__spc_warn_collapseClusterRules = !0, console.warn("[spc] collapseClusterRules is deprecated; use rules.collapseWeakerClusterRules"));
  const m = (T) => {
    const L = {};
    for (const k of Object.keys(T)) {
      const j = T[k];
      j !== void 0 && (L[k] = j);
    }
    return L;
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
  }), b = { ...p, ...m(t) };
  if (h !== void 0 && (b.emergingGraceEnabled = h, b.grace = { ...b.grace, emergingEnabled: h }), p.collapseWeakerClusterRules !== void 0) {
    const T = p.collapseWeakerClusterRules;
    b.collapseWeakerClusterRules = T, b.rules = { ...b.rules, collapseWeakerClusterRules: T };
  }
  return m(b);
}
function xa(e) {
  const {
    chartType: t,
    metricImprovement: n,
    data: a,
    settings: s = {}
  } = e, o = Ml(s), i = {
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
    precedenceStrategy: pr.DirectionalFirst,
    emergingDirectionGrace: !1,
    rules: {},
    grace: {},
    ...o
  };
  if (!Array.isArray(a)) throw new Error("data must be an array of rows");
  const l = a.map((p, b) => ({
    rowId: b + 1,
    x: p.x,
    value: Se(p.value) ? p.value : null,
    ghost: !!p.ghost,
    baseline: !!p.baseline,
    target: Se(p.target) ? p.target : null
  }));
  if (o?.autoRecalculateAfterShift)
    try {
      jm(l, o, n);
    } catch {
    }
  const u = Cm(l), c = [], d = [], h = l.filter(
    (p) => !p.ghost && Se(p.value)
  ).length >= (i.minimumPoints ?? 13);
  let g = 0;
  const v = {};
  for (const p of u) {
    g++;
    const b = p.map((x) => x.value), T = p.map((x) => x.ghost);
    let L = new Array(b.length).fill(null), k = NaN, j = NaN, M = NaN, I = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      L = Dl(b, T);
      const x = b.filter(
        (N, S) => !T[S] && Se(N)
      );
      k = x.length ? It(x) : NaN;
      const P = Tl(
        L,
        !!i.excludeMovingRangeOutliers
      );
      j = P.mrMean, M = P.mrUcl, I = mm(k, j);
    } else if (t === "T") {
      const x = wm(
        b,
        T,
        !!i.excludeMovingRangeOutliers
      );
      L = x.mr, j = x.mrMean ?? NaN, M = x.mrUcl ?? NaN, k = x.center ?? NaN, I = {
        upperProcessLimit: x.upperProcessLimit,
        lowerProcessLimit: x.lowerProcessLimit,
        upperTwoSigma: x.upperTwoSigma,
        lowerTwoSigma: x.lowerTwoSigma,
        upperOneSigma: x.upperOneSigma,
        lowerOneSigma: x.lowerOneSigma
      };
    } else if (t === "G") {
      const x = b.filter(
        (S, D) => !T[D] && Se(S)
      ), P = x.length ? It(x) : NaN, N = vm(P);
      k = N.cl ?? NaN, I = {
        upperProcessLimit: N.ucl,
        lowerProcessLimit: N.lcl,
        upperTwoSigma: N.twoHigh,
        lowerTwoSigma: N.twoLow,
        upperOneSigma: N.oneHigh,
        lowerOneSigma: N.oneLow
      }, L = new Array(b.length).fill(null), j = NaN, M = NaN;
    } else
      d.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const C = p.map((x, P) => {
      const N = !x.ghost && Se(x.value) ? b.slice(0, P + 1).filter((re, G) => !T[G] && Se(re)).length : 0, S = h, D = S ? I : {
        upperProcessLimit: null,
        lowerProcessLimit: null,
        upperTwoSigma: null,
        lowerTwoSigma: null,
        upperOneSigma: null,
        lowerOneSigma: null
      };
      return {
        rowId: x.rowId,
        x: x.x,
        value: Se(x.value) ? x.value : null,
        ghost: x.ghost,
        partitionId: g,
        pointRank: N,
        mean: S && Se(k) ? k : null,
        mr: Se(L[P]) ? L[P] : null,
        mrMean: S && Se(j) ? j : null,
        mrUcl: S && Se(M) ? M : null,
        upperProcessLimit: Se(D.upperProcessLimit) ? D.upperProcessLimit : null,
        lowerProcessLimit: Se(D.lowerProcessLimit) ? D.lowerProcessLimit : null,
        upperTwoSigma: Se(D.upperTwoSigma) ? D.upperTwoSigma : null,
        lowerTwoSigma: Se(D.lowerTwoSigma) ? D.lowerTwoSigma : null,
        upperOneSigma: Se(D.upperOneSigma) ? D.upperOneSigma : null,
        lowerOneSigma: Se(D.lowerOneSigma) ? D.lowerOneSigma : null,
        target: Se(x.target) ? x.target : null,
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
        assuranceIcon: Ze.None,
        upperBaseline: S && Se(k) ? k : null,
        lowerBaseline: S && Se(k) ? k : null,
        movingRangeHighPointValue: S && Se(M) ? M : null,
        ghostValue: x.ghost && Se(x.value) ? x.value : null,
        ghostFlag: !!x.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    v[g] = C.filter(
      (x) => !x.ghost && Se(x.value)
    ).length;
    const y = i.specialCauseShiftPoints ?? 6, $ = i.specialCauseTrendPoints ?? 6, _ = [];
    for (let x = 0; x < C.length; x++) {
      const P = C[x], N = P.value;
      if (!P.ghost && Se(N) && _.push(x), !(Se(P.mean) && Se(P.upperProcessLimit) && Se(P.lowerProcessLimit)) || P.ghost || !Se(N)) {
        c.push(P);
        continue;
      }
      P.specialCauseSinglePointUp = Se(P.upperProcessLimit) ? N > P.upperProcessLimit : !1, P.specialCauseSinglePointDown = Se(P.lowerProcessLimit) ? N < P.lowerProcessLimit : !1, c.push(P);
    }
    if (_.length) {
      const x = (S) => C[S];
      let P = [], N = [];
      for (const S of _) {
        const D = x(S);
        if (!Se(D.mean) || !Se(D.value)) {
          P = [], N = [];
          continue;
        }
        if (D.value > D.mean ? (P.push(S), N = []) : D.value < D.mean ? (N.push(S), P = []) : (P = [], N = []), P.length >= y)
          for (const A of P) {
            const re = x(A);
            re.specialCauseShiftUp = !0;
          }
        if (N.length >= y)
          for (const A of N) {
            const re = x(A);
            re.specialCauseShiftDown = !0;
          }
      }
      for (let S = 0; S <= _.length - 3; S++) {
        const A = _.slice(S, S + 3).map(x);
        if (!A.every((ue) => Se(ue.mean) && Se(ue.value))) continue;
        const re = A[0].mean, G = A.every((ue) => ue.value > re), B = A.every((ue) => ue.value < re);
        if (!G && !B) continue;
        const H = A[0].upperTwoSigma ?? 1 / 0, V = A[0].lowerTwoSigma ?? -1 / 0, se = A[0].upperProcessLimit ?? 1 / 0, O = A[0].lowerProcessLimit ?? -1 / 0, fe = A.filter((ue) => ue.value > H && ue.value <= se), we = A.filter((ue) => ue.value < V && ue.value >= O);
        if (G && fe.length >= 2)
          for (const ue of fe)
            ue.specialCauseTwoOfThreeUp = !0;
        if (B && we.length >= 2)
          for (const ue of we)
            ue.specialCauseTwoOfThreeDown = !0;
      }
      if (i.enableFourOfFiveRule)
        for (let S = 0; S <= _.length - 5; S++) {
          const A = _.slice(S, S + 5).map(x);
          if (!A.every((se) => Se(se.mean) && Se(se.value))) continue;
          const re = A[0].mean;
          if (!A.every((se) => se.value > re) && !A.every((se) => se.value < re)) continue;
          const G = A[0].upperOneSigma ?? 1 / 0, B = A[0].lowerOneSigma ?? -1 / 0, H = A.filter((se) => se.value > G), V = A.filter((se) => se.value < B);
          if (A.every((se) => se.value > re) && H.length >= 4)
            for (const se of H)
              se.specialCauseFourOfFiveUp = !0;
          if (A.every((se) => se.value < re) && V.length >= 4)
            for (const se of V)
              se.specialCauseFourOfFiveDown = !0;
        }
      for (let S = 0; S <= _.length - $; S++) {
        const D = _.slice(S, S + $), A = D.map(x);
        if (!A.every((B) => Se(B.value))) continue;
        let re = !0, G = !0;
        for (let B = 1; B < A.length && (A[B].value > A[B - 1].value || (re = !1), A[B].value < A[B - 1].value || (G = !1), !(!re && !G)); B++)
          ;
        if (re) for (const B of D) {
          const H = x(B);
          H.specialCauseTrendUp = !0;
        }
        if (G) for (const B of D) {
          const H = x(B);
          H.specialCauseTrendDown = !0;
        }
      }
      if (i.enableFifteenInInnerThirdRule) {
        let S = [];
        for (const D of _) {
          const A = x(D);
          if (!Se(A.value) || !Se(A.mean) || !Se(A.upperOneSigma) || !Se(A.lowerOneSigma)) {
            S = [];
            continue;
          }
          if (!(A.value < A.upperOneSigma && A.value > A.lowerOneSigma)) {
            S = [];
            continue;
          }
          if (S.push(D), S.length >= 15) {
            const G = S.map(x), B = G.some((V) => V.value > V.mean), H = G.some((V) => V.value < V.mean);
            if (B && H)
              for (const V of S) x(V).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition)) {
      const x = i.maximumPointsPartition;
      let P = 0;
      for (const N of c.filter((S) => S.partitionId === g))
        !N.ghost && Se(N.value) && P++, P > x && (N.mean = N.upperProcessLimit = N.lowerProcessLimit = null, N.upperTwoSigma = N.lowerTwoSigma = N.upperOneSigma = N.lowerOneSigma = null);
    }
  }
  for (const p of c) {
    if (p.ruleTags && p.ruleTags.length) continue;
    const b = [];
    p.specialCauseShiftUp && b.push(ht.ShiftHigh), p.specialCauseShiftDown && b.push(ht.ShiftLow), p.specialCauseTrendUp && b.push(ht.TrendIncreasing), p.specialCauseTrendDown && b.push(ht.TrendDecreasing), p.specialCauseSinglePointUp && b.push(ht.SinglePointAbove), p.specialCauseSinglePointDown && b.push(ht.SinglePointBelow), p.specialCauseTwoOfThreeUp && b.push(ht.TwoOfThreeAbove), p.specialCauseTwoOfThreeDown && b.push(ht.TwoOfThreeBelow), p.specialCauseFourOfFiveUp && b.push(ht.FourOfFiveAbove), p.specialCauseFourOfFiveDown && b.push(ht.FourOfFiveBelow), p.specialCauseFifteenInnerThird && b.push(ht.FifteenInnerThird), b.length && (p.ruleTags = b);
  }
  for (let p = 0; p < c.length; p++) {
    const b = c[p];
    if (Object.prototype.hasOwnProperty.call(b, zn.ImprovementValueBeforePruning) || Object.defineProperty(b, zn.ImprovementValueBeforePruning, {
      get() {
        return b.originalSpecialCauseImprovementValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.prototype.hasOwnProperty.call(b, zn.ConcernValueBeforePruning) || Object.defineProperty(b, zn.ConcernValueBeforePruning, {
      get() {
        return b.originalSpecialCauseConcernValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), b.ghost || !Se(b.value) || b.mean === null) {
      b.variationIcon = Te.Suppressed;
      continue;
    }
    const T = b.value > b.mean, L = b.value < b.mean;
    i.rules?.collapseWeakerClusterRules && (b.specialCauseTwoOfThreeUp && b.specialCauseFourOfFiveUp && (b.specialCauseTwoOfThreeUp = !1), b.specialCauseTwoOfThreeDown && b.specialCauseFourOfFiveDown && (b.specialCauseTwoOfThreeDown = !1));
    const k = b.specialCauseTrendUp && T, j = b.specialCauseTrendDown && L, M = b.specialCauseSinglePointUp || b.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && b.specialCauseFourOfFiveUp || b.specialCauseShiftUp || k, I = b.specialCauseSinglePointDown || b.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && b.specialCauseFourOfFiveDown || b.specialCauseShiftDown || j;
    let C = !1;
    if (i.precedenceStrategy === pr.DirectionalFirst && (i.grace?.emergingEnabled || i.emergingGraceEnabled || i.emergingDirectionGrace)) {
      const $ = i.specialCauseTrendPoints || 6;
      if ($ > 1 && !(b.specialCauseTrendUp || b.specialCauseTrendDown)) {
        const _ = $ - 1, x = [];
        for (let P = p; P >= 0 && x.length < _; P--) {
          const N = c[P];
          !N.ghost && Se(N.value) && N.mean !== null && x.unshift(N);
        }
        if (x.length === _) {
          let P = !0;
          for (let N = 1; N < x.length && P; N++)
            n === De.Up ? x[N].value > x[N - 1].value || (P = !1) : n === De.Down && x[N].value < x[N - 1].value || (P = !1);
          C = P;
        }
      }
    }
    if (i.precedenceStrategy === pr.DirectionalFirst) {
      const _ = n === De.Up ? M : n === De.Down ? I : !1, x = n === De.Up ? I : n === De.Down ? M : !1;
      _ && !x ? b.variationIcon = Te.Improvement : x && !_ ? b.variationIcon = C ? Te.Neither : Te.Concern : _ && x ? b.variationIcon = C || b.specialCauseTrendUp || b.specialCauseTrendDown ? Te.Improvement : Te.Neither : b.variationIcon = Te.Neither;
    } else
      n === De.Up ? b.variationIcon = M ? Te.Improvement : I ? Te.Concern : Te.Neither : n === De.Down ? b.variationIcon = I ? Te.Improvement : M ? Te.Concern : Te.Neither : b.variationIcon = Te.Neither;
    const y = M || I;
    if (b.specialCauseImprovementValue = y && b.variationIcon === Te.Improvement ? b.value : null, b.specialCauseConcernValue = y && b.variationIcon === Te.Concern ? b.value : null, b.specialCauseNeitherValue = y && b.variationIcon === Te.Neither ? b.value : null, i.conflictPrecedenceMode === _l.SqlRankingV26a && b.specialCauseImprovementValue !== null && b.specialCauseConcernValue !== null) {
      const $ = [];
      b.specialCauseSinglePointUp && $.push({ id: ft.SinglePoint, rank: 1, side: nt.Up }), b.specialCauseSinglePointDown && $.push({ id: ft.SinglePoint, rank: 1, side: nt.Down }), b.specialCauseTwoOfThreeUp && $.push({ id: ft.TwoSigma, rank: 2, side: nt.Up }), b.specialCauseTwoOfThreeDown && $.push({ id: ft.TwoSigma, rank: 2, side: nt.Down }), b.specialCauseShiftUp && $.push({ id: ft.Shift, rank: 3, side: nt.Up }), b.specialCauseShiftDown && $.push({ id: ft.Shift, rank: 3, side: nt.Down }), b.specialCauseTrendUp && $.push({ id: ft.Trend, rank: 4, side: nt.Up }), b.specialCauseTrendDown && $.push({ id: ft.Trend, rank: 4, side: nt.Down });
      const _ = $.filter((G) => G.side === nt.Up).reduce((G, B) => Math.max(G, B.rank), 0), x = $.filter((G) => G.side === nt.Down).reduce((G, B) => Math.max(G, B.rank), 0);
      let P;
      _ > x ? P = kt.Upwards : x > _ ? P = kt.Downwards : P = kt.Same;
      const N = b.specialCauseImprovementValue, S = b.specialCauseConcernValue;
      P === kt.Upwards ? n === De.Up ? b.specialCauseConcernValue = null : n === De.Down && (b.specialCauseImprovementValue = null) : P === kt.Downwards ? n === De.Up ? b.specialCauseImprovementValue = null : n === De.Down && (b.specialCauseConcernValue = null) : b.variationIcon === Te.Improvement ? b.specialCauseConcernValue = null : b.variationIcon === Te.Concern ? b.specialCauseImprovementValue = null : b.specialCauseConcernValue = null, b.specialCauseImprovementValue !== null && b.specialCauseConcernValue === null ? b.variationIcon = Te.Improvement : b.specialCauseConcernValue !== null && b.specialCauseImprovementValue === null ? b.variationIcon = Te.Concern : b.specialCauseImprovementValue === null && b.specialCauseConcernValue === null && (b.variationIcon = Te.Neither);
      const D = b.specialCauseImprovementValue !== null ? nt.Up : b.specialCauseConcernValue !== null ? nt.Down : void 0, A = D === nt.Up ? _ : D === nt.Down ? x : Math.max(_, x), re = $.find((G) => G.rank === A && (!D || G.side === D));
      b.conflictPrimeDirection = P, b.conflictResolved = !0, b.conflictResolvedRank = A || void 0, re && (b.conflictResolvedByRuleId = re.id), b.pruningMode = qs.Conflict, b.originalSpecialCauseImprovementValue = N, b.originalSpecialCauseConcernValue = S;
    }
    {
      const $ = l[b.rowId - 1], _ = _m({
        metricImprovement: n,
        capabilityMode: i.assuranceCapabilityMode,
        value: b.value,
        mean: b.mean,
        upperProcessLimit: b.upperProcessLimit,
        lowerProcessLimit: b.lowerProcessLimit,
        target: Se($?.target) ? $.target : null
      });
      b.assuranceIcon = _;
    }
  }
  if ((i.minimumPointsWarning ?? !1) && !h) {
    const p = l.filter(
      (b) => !b.ghost && Se(b.value)
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
    let b = 0;
    for (const T of c)
      !T.ghost && Se(T.value) && b++, b > p && (T.mean = T.upperProcessLimit = T.lowerProcessLimit = null, T.upperTwoSigma = T.lowerTwoSigma = T.upperOneSigma = T.lowerOneSigma = null);
  }
  if (i.nullValueWarning && (t === Dt.XmR || t === Dt.G)) {
    const p = l.filter(
      (b) => !b.ghost && (b.value === null || b.value === void 0 || !Se(b.value))
    ).length;
    p && d.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${p} null/missing value(s) excluded from calculations.`,
      context: { nullCount: p }
    });
  }
  if (i.targetSuppressedWarning && (t === Dt.T || t === Dt.G) && l.some((b) => Se(b.target)) && d.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), i.ghostOnRareEventWarning && (t === Dt.T || t === Dt.G)) {
    const p = l.filter((b) => b.ghost).length;
    p && d.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${p} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: p }
    });
  }
  if (i.partitionSizeWarnings && Object.entries(v).forEach(([p, b]) => {
    b < i.minimumPointsPartition && d.push({
      code: "insufficient_points_partition",
      category: "partition",
      severity: "warning",
      message: `Partition ${p} has only ${b} non-ghost point(s); below recommended ${i.minimumPointsPartition}.`,
      context: {
        partitionId: Number(p),
        count: b,
        minimum: i.minimumPointsPartition
      }
    });
  }), i.baselineSpecialCauseWarning) {
    const p = [];
    c.forEach((b) => {
      l[b.rowId - 1].baseline && (b.specialCauseSinglePointUp || b.specialCauseSinglePointDown || b.specialCauseTwoOfThreeUp || b.specialCauseTwoOfThreeDown || b.specialCauseFourOfFiveUp || b.specialCauseFourOfFiveDown || b.specialCauseShiftUp || b.specialCauseShiftDown || b.specialCauseTrendUp || b.specialCauseTrendDown) && p.push(b.rowId);
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
    const p = i.baselineSuggestStabilityPoints, b = i.baselineSuggestMinGap, T = i.baselineSuggestMinDeltaSigma, L = i.baselineSuggestScoreThreshold;
    m = Sm(
      c.map((j) => ({
        value: j.value,
        partitionId: j.partitionId,
        variationIcon: j.variationIcon,
        mean: j.mean,
        upperProcessLimit: j.upperProcessLimit
      })),
      {
        W: p,
        minGap: b,
        minDeltaSigma: T,
        scoreThreshold: L,
        isShiftUpAt: (j) => !!c[j].specialCauseShiftUp,
        isShiftDownAt: (j) => !!c[j].specialCauseShiftDown,
        isTrendUpAt: (j) => !!c[j].specialCauseTrendUp,
        isTrendDownAt: (j) => !!c[j].specialCauseTrendDown,
        isSingleUpAt: (j) => !!c[j].specialCauseSinglePointUp,
        isSingleDownAt: (j) => !!c[j].specialCauseSinglePointDown
      }
    ).map((j) => ({
      index: j.index,
      reason: j.reason,
      score: j.score,
      deltaMean: j.deltaMean,
      oldMean: j.oldMean,
      newMean: j.newMean,
      window: j.window
    }));
  }
  return { rows: c, warnings: d, ...m ? { suggestedBaselines: m } : {} };
}
function Nm(e, t) {
  const n = km(e), a = n.upMax, s = n.downMax, o = n.upRules.map((m) => ({ id: m, rank: ei[m] })), i = n.downRules.map((m) => ({
    id: m,
    rank: ei[m]
  }));
  let l;
  a > s ? l = kt.Upwards : s > a ? l = kt.Downwards : l = kt.Same;
  const u = a > 0, c = s > 0, d = t === De.Up && u || t === De.Down && c ? e.value : null, f = t === De.Up && c || t === De.Down && u ? e.value : null;
  e.sqlOriginalImprovementValue = d, e.sqlOriginalConcernValue = f, d !== null && f !== null && (e.sqlPruned = !0, l === kt.Upwards ? t === De.Up || t === De.Down && (e.sqlOriginalImprovementValue = null) : l === kt.Downwards ? t === De.Up ? e.sqlOriginalImprovementValue = null : De.Down : d !== null ? e.sqlOriginalConcernValue = null : f !== null && (e.sqlOriginalImprovementValue = null)), e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = Te.Improvement : !e.sqlOriginalImprovementValue && e.sqlOriginalConcernValue ? e.variationIcon = Te.Concern : !e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = Te.Neither : e.variationIcon = Te.Improvement, e.primeDirection = l, e.primeRank = Math.max(a, s) || void 0, e.pruningMode = qs.Sql;
  const v = ((e.variationIcon === Te.Concern ? t === De.Up ? nt.Down : nt.Up : t === De.Up ? nt.Up : nt.Down) === nt.Up ? o : i).reduce(
    (m, p) => !m || p.rank > m.rank ? p : m,
    void 0
  );
  v && (e.primeRuleId = v.id);
}
function Ll(e) {
  const { chartType: t, metricImprovement: n, data: a, settings: s = {} } = e, o = xa({
    chartType: t,
    metricImprovement: n,
    data: a,
    settings: {
      ...s
    }
  }), i = o.rows.map((l) => ({ ...l }));
  for (const l of i)
    Nm(l, n);
  return { rows: i, warnings: o.warnings };
}
function ni(e, t) {
  return e === "improvement" ? ke.SpecialCauseImproving : e === "concern" ? ke.SpecialCauseDeteriorating : e === "suppressed" || e === "neither" && t ? ke.SpecialCauseNoJudgement : e === "neither" ? ke.CommonCause : null;
}
function Dm(e, t) {
  return e === "improvement" || e === "concern" || e === "suppressed" || e === "neither" && !!t;
}
function Tm(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function $m(e) {
  const {
    values: t,
    x: n,
    chartType: a = Dt.XmR,
    metricImprovement: s = De.Neither,
    useSqlCompatEngine: o = !1,
    showLimits: i = !0,
    showLimitBand: l = !1,
    showInnerBands: u = !1,
    showMean: c = !1,
    autoClassify: d = !0
  } = e, f = q.useMemo(() => {
    const M = [];
    for (let I = 0; I < t.length; I++)
      M.push({ x: n?.[I], value: t[I] });
    return M;
  }, [t, n]), h = q.useMemo(() => {
    try {
      const M = f.map((I, C) => ({ x: I.x ?? C, value: I.value }));
      return o ? Ll({ chartType: a, metricImprovement: s, data: M, settings: {} }) : xa({ chartType: a, metricImprovement: s, data: M, settings: {} });
    } catch {
      return null;
    }
  }, [f, a, s, o]), g = q.useMemo(() => {
    const M = h?.rows;
    if (!M || M.length === 0) return null;
    for (let I = M.length - 1; I >= 0; I--) {
      const C = M[I];
      if (C && C.value != null && !C.ghost) return C;
    }
    return M[M.length - 1] ?? null;
  }, [h]), v = q.useMemo(() => {
    const M = h?.rowsRepresentative ?? h?.rows;
    if (!M || !Array.isArray(M) || M.length === 0) return null;
    const I = M[M.length - 1];
    return ni(
      I?.variationIcon,
      (I?.specialCauseNeitherValue ?? null) != null
    );
  }, [h]), m = q.useMemo(() => g?.mean ?? null, [g]), p = q.useMemo(() => {
    if (!g) return null;
    const M = g?.lowerProcessLimit ?? null, I = g?.upperProcessLimit ?? null;
    return M == null && I == null ? null : { lower: M, upper: I };
  }, [g]), b = q.useMemo(() => g ? {
    upperOne: g?.upperOneSigma ?? null,
    upperTwo: g?.upperTwoSigma ?? null,
    lowerOne: g?.lowerOneSigma ?? null,
    lowerTwo: g?.lowerTwoSigma ?? null
  } : null, [g]), T = q.useMemo(() => {
    const M = h?.rows;
    if (!(!M || M.length === 0))
      return o ? M.map((I) => {
        const C = I?.variationIcon;
        return C === "improvement" ? "improvement" : C === "concern" ? "concern" : "neither";
      }) : M.map((I) => {
        const C = !!I?.specialCauseSinglePointUp || !!I?.specialCauseTwoOfThreeUp || !!I?.specialCauseFourOfFiveUp || !!I?.specialCauseShiftUp || !!I?.specialCauseTrendUp, y = !!I?.specialCauseSinglePointDown || !!I?.specialCauseTwoOfThreeDown || !!I?.specialCauseFourOfFiveDown || !!I?.specialCauseShiftDown || !!I?.specialCauseTrendDown;
        switch (s) {
          case De.Up:
            return C ? "improvement" : y ? "concern" : "neither";
          case De.Down:
            return y ? "improvement" : C ? "concern" : "neither";
          case De.Neither:
          default:
            return "neither";
        }
      });
  }, [h, s, o]), L = q.useMemo(() => {
    const M = h?.rows;
    if (!(!M || M.length === 0))
      return M.map((I) => !!I?.specialCauseNeitherValue);
  }, [h]), k = q.useMemo(() => {
    let M = null;
    if (g && g.value != null && !g.ghost) {
      const N = g.variationIcon, S = (g?.specialCauseNeitherValue ?? null) != null;
      v === ke.SpecialCauseNoJudgement ? M = Dm(N, S) ? ke.SpecialCauseNoJudgement : ke.CommonCause : M = ni(N, S) ?? ke.CommonCause;
    }
    const I = M ?? ke.CommonCause, C = ha[I].hex, [y, $, _] = Tm(C), x = da();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${y}, ${$}, ${_}, ${x.start}) 0%, rgba(${y}, ${$}, ${_}, ${x.mid}) 50%, rgba(${y}, ${$}, ${_}, ${x.end}) 100%)`,
      "--fdp-metric-card-accent": C
    };
  }, [g, v]);
  return { sparkProps: q.useMemo(() => ({
    data: f,
    showMean: c,
    showLimits: i,
    showLimitBand: l,
    showInnerBands: u,
    metricImprovement: s,
    centerLine: m,
    controlLimits: p,
    sigmaBands: b,
    pointSignals: T,
    pointNeutralSpecialCause: L,
    variationState: v ?? void 0,
    autoClassify: !!(d && !v),
    onClassification: () => {
    }
  }), [
    f,
    c,
    i,
    l,
    u,
    s,
    d,
    v,
    m,
    p?.lower,
    p?.upper,
    b?.upperOne,
    b?.upperTwo,
    b?.lowerOne,
    b?.lowerTwo,
    T?.length,
    L?.length
  ]), metricCardStyle: k, latestState: v };
}
function ri(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function Im(e, t, n) {
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
function Mm(e, t) {
  const n = e.filter(Boolean);
  if (n.length < 2) return t;
  const a = [];
  for (let u = 1; u < n.length; u++) a.push(n[u].getTime() - n[u - 1].getTime());
  const s = a.sort((u, c) => u - c), o = s[Math.floor(s.length / 2)], i = 3600 * 1e3, l = 24 * i;
  return o <= 2 * i ? "hourly" : o <= 2 * l ? "daily" : o <= 10 * l ? "weekly" : o <= 45 * l ? "monthly" : o <= 120 * l ? "quarterly" : "annually";
}
function ai(e, t) {
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
function Lm(e, t, n, a = "0-100") {
  if (t) return t;
  if (n) return n;
  const s = e.filter((l) => l != null);
  if (!s.length) return;
  const o = Math.min(...s), i = Math.max(...s);
  if (a === "0-1") {
    if (o >= 0 && i <= 1 && i > 0) return "%";
  } else if (o >= 0 && i <= 100 && i > 0) return "%";
}
function Pm(e, t, n = 1) {
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
function Pl(e) {
  const {
    values: t,
    dates: n,
    intervalHint: a,
    startDate: s,
    providedUnit: o,
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
  let g = (n || []).map(ri);
  if (!g.some(Boolean)) {
    const y = ri(s);
    y && a ? g = Im(f.length, y, a) : g = new Array(f.length).fill(void 0);
  }
  const m = Mm(g, a), p = Lm(f, o, i, e.percentHeuristic), b = l && h >= 0 && f[h] != null ? f[h] : void 0, T = { strategy: "previous", n: 1, absolute: !0, skipNulls: !0, ...d || {} };
  function L() {
    if (h < 0) return -1;
    if (T.strategy === "previous" || T.strategy === "n-points") {
      let P = h - (T.strategy === "previous" ? 1 : Math.max(1, T.n || 1));
      if (!T.skipNulls) return P;
      for (let N = P; N >= 0; N--) if (f[N] != null) return N;
      return -1;
    }
    const y = g[h];
    if (!y) return -1;
    const $ = new Date(y);
    $.setFullYear($.getFullYear() - 1);
    let _ = -1, x = 1 / 0;
    for (let P = 0; P < g.length; P++) {
      const N = g[P];
      if (!N || f[P] == null) continue;
      const S = Math.abs(N.getTime() - $.getTime());
      S < x && (x = S, _ = P);
    }
    return _;
  }
  const k = L(), j = k >= 0 ? f[k] : null;
  let M;
  if (u && b != null && j != null) {
    const y = b - j, $ = T.absolute !== !1, _ = $ ? y : j === 0 ? 0 : y / Math.abs(j) * 100;
    M = {
      value: Number.isFinite(_) ? Number(_.toFixed(2)) : 0,
      isPercent: $ ? p === "%" : !0,
      period: `vs ${Pm(m, a, T.strategy === "n-points" ? Math.max(1, T.n || 1) : 1)}`
    };
  }
  const I = h >= 0 ? g[h] : void 0, C = c && ai(I, m) ? `Latest: ${ai(I, m)}` : void 0;
  return { value: b, unit: p, delta: M, metadata: C, latestDate: I, frequency: m };
}
const Iy = ({
  sparkData: e,
  direction: t = De.Neither,
  useSqlCompatEngine: n = !0,
  showMean: a = !1,
  showLimits: s = !0,
  showLimitBand: o = !1,
  showInnerBands: i = !1,
  autoClassify: l = !0,
  maxPoints: u,
  autoValue: c = !0,
  autoDelta: d = !0,
  autoMetadata: f = !0,
  defaultUnit: h,
  intervalHint: g,
  startDate: v,
  deltaConfig: m,
  ...p
}) => {
  const b = $m({
    values: e.map((C) => C.value ?? null),
    metricImprovement: t,
    useSqlCompatEngine: n,
    showLimits: s,
    showLimitBand: o,
    showInnerBands: i,
    showMean: a,
    autoClassify: l
  }), T = /* @__PURE__ */ r.jsx(Nl, { ...b.sparkProps, maxPoints: u }), L = q.useMemo(() => Pl({
    values: e.map((C) => typeof C.value == "number" ? C.value : null),
    dates: e.map((C) => C.date),
    intervalHint: g,
    startDate: v,
    providedUnit: p.unit,
    defaultUnit: h,
    autoValue: c,
    autoDelta: d,
    autoMetadata: f,
    deltaConfig: m
  }), [e, g, v, p.unit, h, c, d, f, m]), k = c && L.value != null ? L.value : p.value, j = d && L.delta ? L.delta : p.delta, M = L.unit || p.unit, I = f && L.metadata ? L.metadata : p.metadata;
  return /* @__PURE__ */ r.jsx(
    tm,
    {
      ...p,
      value: k,
      unit: M,
      delta: j,
      metadata: I,
      visual: T,
      style: b.metricCardStyle
    }
  );
}, Fl = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: s,
  dateFormatter: o,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const u = Kt(), c = nn(), [d, f] = q.useState(null), [h, g] = q.useState(!1), v = q.useRef(null);
  q.useEffect(() => {
    if (u) {
      if (u.focused && (f(u.focused), v.current && (cancelAnimationFrame(v.current), v.current = null)), !u.focused && !h) {
        const E = requestAnimationFrame(() => {
          f(null), v.current = null;
        });
        v.current = E;
      }
      return () => {
        v.current && (cancelAnimationFrame(v.current), v.current = null);
      };
    }
  }, [u, u?.focused, h]);
  const m = u && (u.focused || (h ? d : null) || d), [p, b] = q.useState(!1);
  q.useEffect(() => {
    const E = requestAnimationFrame(() => b(!0));
    return () => cancelAnimationFrame(E);
  }, [m?.index]);
  const T = c?.innerWidth ?? 0, L = c?.innerHeight ?? 0, k = m ? Math.min(Math.max(m.clientX, 0), T) : 0, j = m ? Math.min(Math.max(m.clientY, 0), L) : 0, I = c.ref?.current;
  if (!m)
    return null;
  const C = e?.[m.index], $ = fa(C).map((E) => ({ id: E, label: $n[E].tooltip })), _ = m.x instanceof Date ? m.x : new Date(m.x), x = o ? o(_) : _.toDateString(), P = s ? `${s}` : "", N = a || P ? `${m.y}${P ? "" + P : " "}${a ? " " + a : ""}` : `${m.y}`, S = pa(C?.variationIcon), D = Sl(C?.assuranceIcon), A = am(
    t.mean ?? null,
    t.sigma,
    m.y
  ), re = n ? n(m.index, { x: m.x, y: m.y }) : void 0, G = S || D || A, B = C?.specialCauseTrendUp || C?.specialCauseTrendDown, H = C?.variationIcon === Te.Neither && B, V = l && H ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, se = $.length > 0, O = C?.primeDirection, fe = C?.primeRuleId, we = i && C?.variationIcon === Te.Neither && se, ue = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", ce = kl(C?.variationIcon), K = 6.2, de = [
    re || "",
    `${x} • ${N}`
  ].filter(Boolean).reduce(
    (E, z) => Math.max(E, z.length * K + 32),
    0
  ), w = 200, R = 440, W = Math.min(R, Math.max(w, de));
  let ne = k + 12, oe = (c.margin?.top ?? 0) + j + 16;
  ne + W > T && (ne = k - -60 - W), ne < 0 && (ne = Math.max(0, T - W));
  const xe = m ? `spc-tooltip-${m.index}` : "spc-tooltip", _e = typeof m.index == "number" ? m.index : NaN, pe = I ? Wc(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: xe,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (p ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: ne,
          top: oe,
          width: W,
          maxWidth: R,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": p ? "false" : "true",
        "data-floating": !0,
        "data-placement": ne + W + 12 > T ? "left" : "right",
        onPointerEnter: () => {
          g(!0), v.current && (cancelAnimationFrame(v.current), v.current = null);
        },
        onPointerLeave: () => {
          if (g(!1), !u?.focused) {
            const E = requestAnimationFrame(() => {
              f(null), v.current = null;
            });
            v.current = E;
          }
        },
        children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--point", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Point" }) }),
            /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__primary-line", children: [
              "Index: ",
              _e
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: x })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: N })
          ] }),
          G && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: S?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              Oe,
              {
                text: S,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : S?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              Oe,
              {
                text: S,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : we ? /* @__PURE__ */ r.jsx(
              Oe,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : S ? /* @__PURE__ */ r.jsx(
              Oe,
              {
                text: S,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          D && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const E = D.toLowerCase(), Y = !(E.includes("not met") || E.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(E);
              return /* @__PURE__ */ r.jsx(
                Oe,
                {
                  text: D,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${Y ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${D}`
                }
              );
            })() })
          ] }),
          A && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              Oe,
              {
                text: (() => {
                  const E = A.toLowerCase();
                  return E.startsWith("within 1") ? "≤1σ" : E.startsWith("1–2") ? "1–2σ" : E.startsWith("2–3") ? "2–3σ" : E.startsWith(">3") ? ">3σ" : A;
                })(),
                color: A.includes(">3") ? "orange" : A.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${A}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          V && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: V })
          ] }),
          se && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: $.map(({ id: E, label: z }) => {
                  const Y = String(E), F = Y === ht.TrendIncreasing || Y === ht.TrendDecreasing ? "fdp-spc-tag--trend" : we ? "fdp-spc-tag--no-judgement" : S ? S.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : S.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    Oe,
                    {
                      text: z,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${F}`,
                      "data-rule-id": Y
                    },
                    Y
                  );
                })
              }
            ),
            O && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const E = we ? "fdp-spc-tag--no-judgement" : S ? S.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : S.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", z = `${O}${fe ? ` (${fe})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  Oe,
                  {
                    text: z,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${E}`,
                    "aria-label": `Prime direction ${O}${fe ? ` via ${fe}` : ""}`
                  }
                );
              })()
            ] })
          ] })
        ] })
      }
    ),
    I
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
            cx: k,
            cy: j,
            r: 7,
            fill: "none",
            stroke: ue,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: k,
            cy: j,
            r: 5,
            fill: "#000",
            stroke: ue,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: k,
            cy: j,
            r: 2.5,
            fill: ce,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        pe
      ]
    }
  );
}, ba = ({
  status: e,
  size: t = 44,
  ariaLabel: n,
  dropShadow: a = !0,
  colourOverride: s,
  gradientWash: o = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...u
}) => {
  const c = hr(), d = hr(), { start: f, mid: h, end: g } = da(), v = s || om[e], m = (i || im[e]).slice(0, 2), p = n || `Assurance ${e}`;
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
          o && /* @__PURE__ */ r.jsxs("linearGradient", { id: d, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: v, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: v, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(g) })
          ] })
        ] }),
        /* @__PURE__ */ r.jsx(
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
          e === tn.Fail ? /* @__PURE__ */ r.jsx(
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
          ) : e === tn.Uncertain ? /* @__PURE__ */ r.jsx(
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
ba.displayName = "SPCAssuranceIcon";
const Fm = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: a
}) => {
  const s = Kt(), o = s?.focused ?? null, i = o?.index ?? null, l = typeof i == "number" && e ? e[i] : null, u = q.useMemo(() => l ? fa(l) : [], [l]), c = q.useMemo(
    () => Array.from(
      new Set(u.map((m) => $n[m]?.narration).filter(Boolean))
    ),
    [u]
  ), d = l ? pa(l.variationIcon) : null, f = l ? Sl(l.assuranceIcon) : null, h = u.length > 0, g = l ? l.variationIcon === Te.Neither && h : !1, v = q.useRef(null);
  return q.useEffect(() => {
    if (!a || !o || l == null) return;
    const m = `${o.seriesId}:${o.index}`;
    if (v.current !== m) {
      v.current = m;
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
  }, [o?.seriesId, o?.index, o?.x, o?.y, l, u, a]), /* @__PURE__ */ r.jsxs(
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
                      Oe,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : d?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
                      Oe,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : g ? /* @__PURE__ */ r.jsx(
                      Oe,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : d ? /* @__PURE__ */ r.jsx(
                      Oe,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const m = f.toLowerCase(), b = !(m.includes("not met") || m.includes("not achieved")) && /^|\b(met|achieved)\b|$/.test(m);
                      return /* @__PURE__ */ r.jsx(
                        Oe,
                        {
                          text: f,
                          color: "default",
                          className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${b ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
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
                  const p = String(m), T = p === ht.TrendIncreasing || p === ht.TrendDecreasing ? "fdp-spc-tag--trend" : g ? "fdp-spc-tag--no-judgement" : d ? d.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : d.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", L = $n[m]?.tooltip || p;
                  return /* @__PURE__ */ r.jsx(
                    Oe,
                    {
                      text: L,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${T}`,
                      "data-rule-id": p,
                      title: $n[m]?.tooltip
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
var Al = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Al || {}), He = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(He || {}), it = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(it || {}), Ge = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(Ge || {}), dn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(dn || {}), on = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(on || {}), Vn = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(Vn || {}), jn = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(jn || {}), dt = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(dt || {}), Lt = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(Lt || {});
const Qt = {
  [Ge.SinglePoint]: 1,
  [Ge.TwoSigma]: 2,
  [Ge.Shift]: 3,
  [Ge.Trend]: 4
}, si = 3.267, Am = 2.66;
function Be(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function Lr(e) {
  return e.reduce((t, n) => t + n, 0) / (e.length || 1);
}
function Em(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (!(t[s] || !Be(o))) {
      if (a !== null) {
        const i = e[a];
        Be(i) && (n[s] = Math.abs(o - i));
      }
      a = s;
    }
  }
  return n;
}
function Rm(e, t) {
  const n = e.filter(Be);
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = n.slice();
  if (t) {
    const o = Lr(a), i = si * o;
    a = a.filter((l) => l <= i);
  }
  const s = Lr(a);
  return { mrMean: s, mrUcl: si * s };
}
function Bm(e, t) {
  if (!Be(e) || !Be(t))
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
function Hm(e, t, n, a) {
  if (e !== Al.XmR)
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
  const s = Em(t, n), o = s.filter(Be), i = o.length ? Lr(o) : NaN, l = Be(i) ? 3.267 * i : NaN;
  let u = NaN;
  {
    const f = [];
    for (let h = 0; h < t.length; h++) {
      const g = t[h];
      if (n[h] || !Be(g)) continue;
      if (!a) {
        f.push(g);
        continue;
      }
      const v = s[h];
      (v === null || !Be(l) || Be(v) && v <= l) && f.push(g);
    }
    u = f.length ? Lr(f) : NaN;
  }
  const c = Rm(s, a), d = Bm(u, c.mrMean);
  return {
    mean: u,
    mr: s,
    mrMean: c.mrMean,
    mrUcl: c.mrUcl,
    ...d
  };
}
function Um(e, t) {
  const n = e.map((u, c) => c).filter((u) => !e[u].ghost && Be(e[u].value)), a = (u) => e[u], s = t.shiftPoints, o = t.trendPoints;
  let i = [], l = [];
  for (const u of n) {
    const c = a(u);
    if (!Be(c.mean) || !Be(c.value)) {
      i = [], l = [];
      continue;
    }
    if (c.value > c.mean ? (i.push(u), l = []) : c.value < c.mean ? (l.push(u), i = []) : (i = [], l = []), i.length >= s)
      for (const d of i) a(d).shiftUp = !0;
    if (l.length >= s)
      for (const d of l) a(d).shiftDown = !0;
  }
  for (let u = 0; u <= n.length - 3; u++) {
    const d = n.slice(u, u + 3).map(a);
    if (!d.every((k) => Be(k.value) && Be(k.mean))) continue;
    const f = d[0].mean, h = d.every((k) => k.value > f), g = d.every((k) => k.value < f);
    if (!h && !g) continue;
    const v = d[0].upperTwoSigma ?? 1 / 0, m = d[0].lowerTwoSigma ?? -1 / 0, p = d[0].upperProcessLimit ?? 1 / 0, b = d[0].lowerProcessLimit ?? -1 / 0, T = d.filter((k) => t.twoSigmaIncludeAboveThree ? k.value > v : k.value > v && k.value <= p), L = d.filter((k) => t.twoSigmaIncludeAboveThree ? k.value < m : k.value < m && k.value >= b);
    h && T.length >= 2 && T.forEach((k) => k.twoSigmaUp = !0), g && L.length >= 2 && L.forEach((k) => k.twoSigmaDown = !0);
  }
  for (let u = 0; u <= n.length - o; u++) {
    const c = n.slice(u, u + o), d = c.map(a);
    if (!d.every((g) => Be(g.value))) continue;
    let f = !0, h = !0;
    for (let g = 1; g < d.length && (d[g].value > d[g - 1].value || (f = !1), d[g].value < d[g - 1].value || (h = !1), !(!f && !h)); g++)
      ;
    f && c.forEach((g) => a(g).trendUp = !0), h && c.forEach((g) => a(g).trendDown = !0);
  }
}
function El(e) {
  const t = [], n = [];
  e.singlePointUp && t.push({
    id: Ge.SinglePoint,
    rank: Qt[Ge.SinglePoint]
  }), e.singlePointDown && n.push({
    id: Ge.SinglePoint,
    rank: Qt[Ge.SinglePoint]
  }), e.twoSigmaUp && t.push({
    id: Ge.TwoSigma,
    rank: Qt[Ge.TwoSigma]
  }), e.twoSigmaDown && n.push({
    id: Ge.TwoSigma,
    rank: Qt[Ge.TwoSigma]
  }), e.shiftUp && t.push({ id: Ge.Shift, rank: Qt[Ge.Shift] }), e.shiftDown && n.push({ id: Ge.Shift, rank: Qt[Ge.Shift] }), e.trendUp && t.push({ id: Ge.Trend, rank: Qt[Ge.Trend] }), e.trendDown && n.push({ id: Ge.Trend, rank: Qt[Ge.Trend] });
  const a = t.reduce((i, l) => Math.max(i, l.rank), 0), s = n.reduce((i, l) => Math.max(i, l.rank), 0), o = a > s ? dn.Upwards : s > a ? dn.Downwards : dn.Same;
  return { up: t, dn: n, upMax: a, dnMax: s, primeDirection: o };
}
function oi(e, t) {
  const n = t === He.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === He.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, a = t === He.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === He.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: n, opposite: a };
}
function ii(e, t, n, a = !1, s, o, i = !1) {
  const { up: l, dn: u, upMax: c, dnMax: d, primeDirection: f } = El(e);
  e.primeDirection = f;
  const h = e.specialCauseImprovementValue, g = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && Om({ row: e, metric: t, metricConflictRule: n, preferImprovementWhenConflict: a, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: s, ruleHierarchy: o }), t === He.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? it.ImprovementHigh : e.specialCauseConcernValue !== null ? it.ConcernLow : it.CommonCause : t === He.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? it.ImprovementLow : e.specialCauseConcernValue !== null ? it.ConcernHigh : it.CommonCause : e.variationIcon = it.CommonCause;
  const v = e.specialCauseImprovementValue !== null ? on.Up : e.specialCauseConcernValue !== null ? on.Down : void 0, m = v === on.Up ? c : v === on.Down ? d : Math.max(c, d);
  e.primeRank = m || void 0;
  const p = v === on.Up ? l.find((b) => b.rank === m) : v === on.Down ? u.find((b) => b.rank === m) : void 0;
  return e.primeRuleId = p?.id, { originalImprovement: h, originalConcern: g };
}
function Om(e) {
  const {
    row: t,
    metric: n,
    metricConflictRule: a,
    preferImprovementWhenConflict: s,
    preferTrendWhenConflict: o,
    primeDirection: i = t.primeDirection ?? dn.Same,
    conflictStrategy: l,
    ruleHierarchy: u
  } = e;
  if (o && t.specialCauseImprovementValue !== null && t.specialCauseConcernValue !== null) {
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
  const c = s ? jn.PreferImprovement : l ?? jn.SqlPrimeThenRule;
  if (c === jn.PreferImprovement) {
    n === He.Up ? t.specialCauseConcernValue = null : n === He.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (c === jn.RuleHierarchy) {
    const d = u ?? [Ge.Trend, Ge.Shift, Ge.TwoSigma, Ge.SinglePoint], { up: f, dn: h } = El(t);
    for (const g of d) {
      const v = f.some((p) => p.id === g), m = h.some((p) => p.id === g);
      if (v && !m) {
        n === He.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (m && !v) {
        n === He.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (v && m) {
        (n === He.Up || n === He.Down) && (a === Vn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === dn.Upwards ? n === He.Up ? t.specialCauseConcernValue = null : n === He.Down && (t.specialCauseImprovementValue = null) : i === dn.Downwards ? n === He.Up ? t.specialCauseImprovementValue = null : n === He.Down && (t.specialCauseConcernValue = null) : a === Vn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
function Wm(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function zm(e) {
  const t = Wm(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function li(e) {
  const t = [];
  let n = 0;
  for (; n < e.length; ) {
    const a = e[n];
    if (!a || a.value == null || a.ghost || !a.trendUp && !a.trendDown) {
      n++;
      continue;
    }
    const s = a.trendUp ? "Up" : a.trendDown ? "Down" : void 0;
    let o = n, i = n;
    for (; i < e.length; i++) {
      const v = e[i];
      if (!v || v.value == null || v.ghost || !(s === "Up" ? v.trendUp : v.trendDown)) break;
    }
    const l = i - 1, u = [];
    let c, d, f = 1 / 0, h = -1 / 0, g = 0;
    for (let v = o; v <= l; v++) {
      const m = e[v];
      if (m.value == null) continue;
      const p = m.value - (m.mean ?? 0), b = zm(p);
      if (!b) {
        c !== void 0 && (u.push({
          trendDirection: s,
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
        c = v, d = b, f = m.value, h = m.value, g = Math.abs(p);
      else if (b !== d)
        u.push({
          trendDirection: s,
          start: c,
          end: v - 1,
          side: d,
          minValue: f,
          maxValue: h,
          maxAbsDeltaFromMean: g
        }), c = v, d = b, f = m.value, h = m.value, g = Math.abs(p);
      else {
        m.value < f && (f = m.value), m.value > h && (h = m.value);
        const T = Math.abs(p);
        T > g && (g = T);
      }
    }
    c !== void 0 && u.push({
      trendDirection: s,
      start: c,
      end: l,
      side: d,
      minValue: f,
      maxValue: h,
      maxAbsDeltaFromMean: g
    }), t.push({ trendDirection: s, start: o, end: l, segments: u }), n = l + 1;
  }
  return t;
}
function Vm(e) {
  if (e === He.Up) return "Above";
  if (e === He.Down) return "Below";
}
function Gm(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function ci(e, t) {
  const n = t.strategy ?? dt.CrossingAfterFavourable, a = Vm(t.metricImprovement), s = Gm(a), o = [];
  for (const i of e) {
    if (!a) {
      if (n === dt.ExtremeFavourable || n === dt.CrossingAfterFavourable) {
        const l = i.segments;
        if (l.length === 0) continue;
        let u = l[0];
        for (const c of l)
          c.maxAbsDeltaFromMean > u.maxAbsDeltaFromMean && (u = c);
        o.push(u);
      }
      continue;
    }
    if (n === dt.FavourableSide) {
      o.push(...i.segments.filter((l) => l.side === a));
      continue;
    }
    if (n === dt.UnfavourableSide) {
      o.push(...i.segments.filter((l) => l.side === s));
      continue;
    }
    if (n === dt.CrossingAfterFavourable) {
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
      u && o.push(u);
      continue;
    }
    if (n === dt.CrossingAfterUnfavourable) {
      const l = i.segments;
      let u;
      for (let c = 0; c < l.length; c++) {
        const d = l[c];
        if (d.side === s && c > 0 && l[c - 1].side !== s) {
          u = d;
          break;
        }
      }
      if (!u) {
        const c = l.filter((d) => d.side === s);
        c.length > 0 && (u = c.reduce(
          (d, f) => f.end - f.start > d.end - d.start ? f : d,
          c[0]
        ));
      }
      u && o.push(u);
      continue;
    }
    if (n === dt.ExtremeFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      const u = l.reduce(
        (c, d) => d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean ? d : c
      );
      o.push(u);
      continue;
    }
    if (n === dt.ExtremeUnfavourable) {
      const l = i.segments.filter((c) => c.side === s);
      if (l.length === 0) continue;
      const u = l.reduce((c, d) => d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean ? d : c);
      o.push(u);
      continue;
    }
    if (n === dt.FirstFavourable) {
      const l = i.segments.find((u) => u.side === a);
      l && o.push(l);
      continue;
    }
    if (n === dt.FirstUnfavourable) {
      const l = i.segments.find((u) => u.side === s);
      l && o.push(l);
      continue;
    }
    if (n === dt.LongestFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      const u = l.reduce(
        (c, d) => d.end - d.start > c.end - c.start ? d : c
      );
      o.push(u);
      continue;
    }
    if (n === dt.LongestUnfavourable) {
      const l = i.segments.filter((c) => c.side === s);
      if (l.length === 0) continue;
      const u = l.reduce((c, d) => d.end - d.start > c.end - c.start ? d : c);
      o.push(u);
      continue;
    }
    if (n === dt.LastFavourable) {
      const l = i.segments.filter((u) => u.side === a);
      if (l.length === 0) continue;
      o.push(l[l.length - 1]);
      continue;
    }
    if (n === dt.LastUnfavourable) {
      const l = i.segments.filter((u) => u.side === s);
      if (l.length === 0) continue;
      o.push(l[l.length - 1]);
      continue;
    }
  }
  return o;
}
var _t = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(_t || {});
function Ym(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), n = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: n };
}
function Rl(e, t) {
  const n = t.metricImprovement, a = t.trendVisualMode ?? "Ungated", s = t.enableNeutralNoJudgement ?? !0;
  return e.map((o) => {
    if (!o || o.value == null || o.ghost) return "Common";
    const { upAny: i, downAny: l } = Ym(o);
    if (i && l) return "Improvement";
    switch (o.variationIcon) {
      case it.ImprovementHigh:
      case it.ImprovementLow:
        return "Improvement";
      case it.ConcernHigh:
      case it.ConcernLow:
        return "Concern";
      case it.NeitherHigh:
      case it.NeitherLow: {
        if (a === "Ungated" && n !== He.Neither) {
          if (i && !l)
            return n === He.Up ? "Improvement" : "Concern";
          if (l && !i)
            return n === He.Down ? "Improvement" : "Concern";
        }
        return s ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function qm(e, t, n) {
  const a = n?.mode ?? "Disabled";
  if (!e.length) return [];
  let s = Rl(e, {
    metricImprovement: t,
    trendVisualMode: "Ungated",
    enableNeutralNoJudgement: !0
  });
  if (a !== "RecalcCrossing" || t === He.Neither) return s;
  const o = Math.max(0, n?.preWindow ?? 2), i = Math.max(0, n?.postWindow ?? 3), l = n?.prePolarity ?? "Opposite", u = (d, f) => {
    if (d < 0 || d >= s.length) return;
    const h = s[d];
    (h === _t.Common || h === _t.NoJudgement) && (s[d] = f);
  }, c = (d) => {
    if (d == null) return null;
    const f = [];
    for (const g of e)
      g.partitionId === d && typeof g.value == "number" && !g.ghost && f.push(g.value);
    return f.length ? f.reduce((g, v) => g + v, 0) / f.length : null;
  };
  for (let d = 1; d < e.length; d++) {
    const f = e[d - 1], h = e[d];
    if (!f || !h || h.partitionId === f.partitionId) continue;
    const g = d;
    let v = null;
    for (let k = d - 1; k >= 0; k--) {
      const j = e[k];
      if (j.partitionId !== f.partitionId) break;
      if (typeof j.mean == "number") {
        v = j.mean;
        break;
      }
    }
    let m = null;
    for (let k = d; k < e.length; k++) {
      const j = e[k];
      if (j.partitionId !== h.partitionId) break;
      if (typeof j.mean == "number") {
        m = j.mean;
        break;
      }
    }
    if (v == null && (v = c(f.partitionId ?? null)), m == null && (m = c(h.partitionId ?? null)), v == null || m == null) continue;
    const p = m - v, b = t === He.Up ? p > 0 : p < 0, T = b ? _t.Improvement : _t.Concern, L = l === "Same" ? T : b ? _t.Concern : _t.Improvement;
    for (let k = 1; k <= o; k++) u(g - k, L);
    for (let k = 0; k < i; k++) u(g + k, T);
  }
  return s;
}
function Xm(e) {
  const { chartType: t, metricImprovement: n, data: a, settings: s } = e, o = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: !1,
    metricConflictRule: Vn.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: jn.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: Lt.Off,
    trendSegmentationStrategy: dt.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...s
  }, i = e.settings?.trendSegmentationMode ?? (e.settings?.trendFavourableSegmentation === !0 ? Lt.Always : e.settings?.trendFavourableSegmentation === !1 ? Lt.Off : o.trendSegmentationMode), l = a.map((m, p) => ({
    rowId: p + 1,
    x: m.x,
    value: Be(m.value) ? m.value : null,
    ghost: !!m.ghost,
    baseline: !!m.baseline,
    target: Be(m.target) ? m.target : null
  })), u = [];
  let c = [];
  for (const m of l)
    m.baseline && c.length && (u.push(c), c = []), c.push(m);
  c.length && u.push(c);
  const d = [], f = (o.trendFavourableSegmentation || i !== Lt.Off) && !o.preferImprovementWhenConflict, h = l.filter((m) => !m.ghost && Be(m.value)).length, g = !!o.chartLevelEligibility && h >= o.minimumPoints;
  let v = 0;
  for (const m of u) {
    v++;
    const p = m.map((j) => j.value), b = m.map((j) => j.ghost), T = Hm(
      t,
      p,
      b,
      !!o.excludeMovingRangeOutliers
    ), L = m.map((j, M) => {
      const I = !j.ghost && Be(j.value) ? p.slice(0, M + 1).filter((y, $) => !b[$] && Be(y)).length : 0, C = g ? !0 : I >= o.minimumPoints;
      return {
        rowId: j.rowId,
        x: j.x,
        value: Be(j.value) ? j.value : null,
        ghost: j.ghost,
        partitionId: v,
        pointRank: I,
        mean: (C || g) && Be(T.mean) ? T.mean : null,
        upperProcessLimit: C || g ? T.upperProcessLimit : null,
        lowerProcessLimit: C || g ? T.lowerProcessLimit : null,
        upperTwoSigma: C || g ? T.upperTwoSigma : null,
        lowerTwoSigma: C || g ? T.lowerTwoSigma : null,
        upperOneSigma: C || g ? T.upperOneSigma : null,
        lowerOneSigma: C || g ? T.lowerOneSigma : null,
        // rules
        singlePointUp: !1,
        singlePointDown: !1,
        twoSigmaUp: !1,
        twoSigmaDown: !1,
        shiftUp: !1,
        shiftDown: !1,
        trendUp: !1,
        trendDown: !1,
        // candidates
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        variationIcon: it.CommonCause
      };
    });
    for (const j of L)
      j.ghost || !Be(j.value) || j.mean === null || (Be(j.upperProcessLimit) && j.value > j.upperProcessLimit && (j.singlePointUp = !0), Be(j.lowerProcessLimit) && j.value < j.lowerProcessLimit && (j.singlePointDown = !0));
    Um(L, {
      shiftPoints: o.shiftPoints,
      trendPoints: o.trendPoints,
      twoSigmaIncludeAboveThree: !!o.twoSigmaIncludeAboveThree
    }), f && ((j) => {
      const M = j.some(
        (_) => (_.singlePointUp || _.twoSigmaUp || _.shiftUp || _.trendUp) && (_.singlePointDown || _.twoSigmaDown || _.shiftDown || _.trendDown)
      );
      if (i === Lt.Off || i === Lt.AutoWhenConflict && !M)
        return;
      const I = li(j), C = ci(I, {
        metricImprovement: n,
        strategy: o.trendSegmentationStrategy
      }), y = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set();
      for (const _ of C)
        for (let x = _.start; x <= _.end; x++)
          _.trendDirection === "Up" ? y.add(x) : $.add(x);
      j.forEach((_, x) => {
        _.trendUp = y.has(x) ? _.trendUp : !1, _.trendDown = $.has(x) ? _.trendDown : !1, o.trendDominatesHighlightedWindow && (y.has(x) ? (_.singlePointDown = !1, _.twoSigmaDown = !1, _.shiftDown = !1) : $.has(x) && (_.singlePointUp = !1, _.twoSigmaUp = !1, _.shiftUp = !1));
      });
    })(L);
    for (const j of L) {
      if (j.ghost || !Be(j.value) || j.mean === null) {
        d.push(j);
        continue;
      }
      const { aligned: M, opposite: I } = oi(
        j,
        n
      );
      if (j.specialCauseImprovementValue = M ? j.value : null, j.specialCauseConcernValue = I ? j.value : null, n === He.Neither) {
        const C = j.singlePointUp || j.twoSigmaUp || j.shiftUp || j.trendUp, y = j.singlePointDown || j.twoSigmaDown || j.shiftDown || j.trendDown;
        j.variationIcon = C ? it.NeitherHigh : y ? it.NeitherLow : it.CommonCause;
      } else
        ii(j, n, o.metricConflictRule, o.preferImprovementWhenConflict === !0, o.conflictStrategy, o.ruleHierarchy, o.preferTrendWhenConflict === !0);
      d.push(j);
    }
  }
  if (o.trendAcrossPartitions) {
    const m = d.map((p, b) => ({ idx: b, r: p })).filter(({ r: p }) => !p.ghost && Be(p.value));
    if (m.length >= o.trendPoints)
      for (let p = 0; p <= m.length - o.trendPoints; p++) {
        const b = m.slice(p, p + o.trendPoints).map((j) => j.idx), T = b.map((j) => d[j]);
        if (!T.every((j) => Be(j.value))) continue;
        let L = !0, k = !0;
        for (let j = 1; j < T.length && (T[j].value > T[j - 1].value || (L = !1), T[j].value < T[j - 1].value || (k = !1), !(!L && !k)); j++)
          ;
        L && b.forEach((j) => d[j].trendUp = !0), k && b.forEach((j) => d[j].trendDown = !0);
      }
  }
  if (o.trendAcrossPartitions) {
    if (f) {
      const m = d.some(
        (p) => (p.singlePointUp || p.twoSigmaUp || p.shiftUp || p.trendUp) && (p.singlePointDown || p.twoSigmaDown || p.shiftDown || p.trendDown)
      );
      if (i === Lt.Always || i === Lt.AutoWhenConflict && m) {
        const p = li(d), b = ci(p, { metricImprovement: n, strategy: o.trendSegmentationStrategy }), T = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
        for (const k of b)
          for (let j = k.start; j <= k.end; j++)
            k.trendDirection === "Up" ? T.add(j) : L.add(j);
        d.forEach((k, j) => {
          k.trendUp = T.has(j) ? k.trendUp : !1, k.trendDown = L.has(j) ? k.trendDown : !1, o.trendDominatesHighlightedWindow && (T.has(j) ? (k.singlePointDown = !1, k.twoSigmaDown = !1, k.shiftDown = !1) : L.has(j) && (k.singlePointUp = !1, k.twoSigmaUp = !1, k.shiftUp = !1));
        });
      }
    }
    for (const m of d) {
      if (m.ghost || !Be(m.value) || m.mean === null || n === He.Neither) continue;
      const { aligned: p, opposite: b } = oi(m, n);
      m.specialCauseImprovementValue = p ? m.value : null, m.specialCauseConcernValue = b ? m.value : null, ii(m, n, o.metricConflictRule, o.preferImprovementWhenConflict === !0, o.conflictStrategy, o.ruleHierarchy, o.preferTrendWhenConflict === !0);
    }
  }
  return { rows: d };
}
function Km(e, t) {
  const n = Xm(e), a = Rl(n.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), s = t?.boundaryWindows;
  if (!s || s.mode !== "RecalcCrossing") return { rows: n.rows, visuals: a };
  const o = s.directionOverride ?? e.metricImprovement, i = qm(n.rows, o, s), l = a.map((u, c) => {
    const d = i[c];
    if (u === _t.Common || u === _t.NoJudgement) {
      if (d === "Improvement") return _t.Improvement;
      if (d === "Concern") return _t.Concern;
    }
    return u;
  });
  return { rows: n.rows, visuals: l };
}
let Jm = 0;
const Zm = ({
  data: e,
  ariaLabel: t = "SPC chart",
  height: n = 260,
  showZones: a = !0,
  showPoints: s = !0,
  announceFocus: o = !1,
  className: i,
  unit: l,
  highlightOutOfControl: u = !0,
  chartType: c = Dt.XmR,
  metricImprovement: d = De.Neither,
  enableRules: f = !0,
  showIcons: h = !1,
  showEmbeddedIcon: g = !0,
  embeddedIconVariant: v = un.Classic,
  embeddedIconRunLength: m,
  targets: p,
  baselines: b,
  ghosts: T,
  settings: L,
  narrationContext: k,
  gradientSequences: j = !1,
  sequenceTransition: M = "slope",
  processLineWidth: I = 2,
  showWarningsPanel: C = !1,
  warningsFilter: y,
  enableNeutralNoJudgement: $ = !0,
  showTrendGatingExplanation: _ = !0,
  trendVisualMode: x = "ungated",
  disableTrendSideGating: P,
  source: N,
  alwaysShowZeroY: S = !1,
  alwaysShowHundredY: D = !1,
  percentScale: A = !1,
  useSqlCompatEngine: re = !0,
  showTrendStartMarkers: G = !1,
  showFirstFavourableCrossMarkers: B = !1,
  showTrendBridgeOverlay: H = !1,
  showSignalsInspector: V = !1,
  onSignalFocus: se
}) => {
  const O = q.useCallback(
    (U) => String(U).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((le) => le.length ? le[0].toUpperCase() + le.slice(1) : le).join(" "),
    []
  ), fe = q.useCallback(
    (U) => String(U).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((X) => X.length ? X[0].toUpperCase() + X.slice(1) : X).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && P !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const we = q.useMemo(() => {
    const U = e.map((X, le) => ({
      x: X.x,
      value: X.y,
      target: p?.[le] ?? void 0,
      baseline: b?.[le] ?? void 0,
      ghost: T?.[le] ?? void 0
    }));
    try {
      const X = L ? { ...L } : void 0;
      return re ? Ll({
        chartType: c,
        metricImprovement: d,
        data: U,
        settings: X
      }) : xa({ chartType: c, metricImprovement: d, data: U, settings: X });
    } catch {
      return null;
    }
  }, [
    e,
    p,
    b,
    T,
    c,
    d,
    L,
    re
  ]), ue = q.useMemo(() => {
    try {
      const U = e.map((Ae, ze) => ({
        x: Ae.x,
        value: Ae.y,
        target: p?.[ze] ?? void 0,
        baseline: b?.[ze] ?? void 0,
        ghost: T?.[ze] ?? void 0
      })), X = {
        chartType: c ?? "XmR",
        metricImprovement: d ?? "Neither",
        data: U
      }, le = (t || "").toLowerCase();
      let he = 1, ie = 3, Ce = "Opposite", me;
      le.includes("special cause crossing recalculations") && (Ce = "Same", le.includes("shift") ? (he = 2, ie = 4, me = "Down") : le.includes("trend") ? (he = 1, ie = 5, me = "Up") : le.includes("two-sigma") && (he = 1, ie = 1, me = "Down"));
      const { visuals: Ie } = Km(X, {
        trendVisualMode: x === "ungated" ? "Ungated" : "Gated",
        enableNeutralNoJudgement: $,
        boundaryWindows: {
          mode: "RecalcCrossing",
          preWindow: he,
          postWindow: ie,
          prePolarity: Ce,
          // Only override when dataset demands; otherwise default to chart metricImprovement
          directionOverride: me
        }
      });
      return Ie || [];
    } catch {
      return [];
    }
  }, [e, p, b, T, c, d, t, x, $]), ce = we?.rows.slice().reverse().find((U) => U.mean != null), K = ce?.mean ?? null, ae = we?.warnings || [], de = q.useMemo(() => ae.length ? y ? ae.filter((U) => !(y.severities && U.severity && !y.severities.includes(U.severity) || y.categories && U.category && !y.categories.includes(U.category) || y.codes && !y.codes.includes(U.code))) : ae : [], [ae, y]), [w, R] = q.useState(""), W = q.useRef("");
  q.useEffect(() => {
    if (!C) {
      W.current !== "" && (W.current = "", R(""));
      return;
    }
    const U = de.length;
    if (!U) {
      const ie = "Diagnostics: no warnings.";
      ie !== W.current && (W.current = ie, R(ie));
      return;
    }
    const X = {
      error: de.filter(
        (ie) => ie.severity === en.Error
      ).length,
      warning: de.filter(
        (ie) => ie.severity === en.Warning
      ).length,
      info: de.filter(
        (ie) => ie.severity === en.Info
      ).length
    }, le = [];
    X.error && le.push(
      `${X.error} error${X.error === 1 ? "" : "s"}`
    ), X.warning && le.push(
      `${X.warning} warning${X.warning === 1 ? "" : "s"}`
    ), X.info && le.push(`${X.info} info`);
    const he = `Diagnostics updated: ${U} warning${U === 1 ? "" : "s"} (${le.join(", ")}).`;
    he !== W.current && (W.current = he, R(he));
  }, [C, de]);
  const ne = ce?.upperProcessLimit ?? null, Z = ce?.lowerProcessLimit ?? null, oe = ce?.upperOneSigma ?? null, xe = ce?.lowerOneSigma ?? null, _e = ce?.upperTwoSigma ?? null, pe = ce?.lowerTwoSigma ?? null, E = K != null && oe != null ? Math.abs(oe - K) : 0, z = q.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), Y = q.useMemo(() => {
    if (A) {
      const ie = e.map((Ie) => Ie.y), Ce = Math.max(100, ...ie), me = Math.min(0, ...ie);
      return [me < 0 ? me : 0, Ce > 100 ? Ce : 100];
    }
    const X = [...e.map((ie) => ie.y)];
    if ([K, ne, Z, oe, xe, _e, pe].forEach((ie) => {
      ie != null && X.push(ie);
    }), p && p.forEach((ie) => {
      typeof ie == "number" && !isNaN(ie) && X.push(ie);
    }), !X.length) return;
    let le = Math.min(...X), he = Math.max(...X);
    return S && (le = Math.min(0, le)), D && (he = Math.max(100, he)), [le, he];
  }, [e, K, ne, Z, oe, xe, _e, pe, p, S, D, A]), Q = q.useMemo(() => {
    const U = e.map((X) => X.x instanceof Date || typeof X.x == "string" || typeof X.x == "number" ? X.x : void 0);
    return Pl({
      values: e.map((X) => X.y),
      dates: U,
      providedUnit: l || k?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [e, l, k?.measureUnit]), F = l ?? k?.measureUnit ?? Q.unit, J = q.useMemo(() => F ? { ...k || {}, measureUnit: F } : k, [k, F]), ee = q.useMemo(() => {
    if (!we?.rows) return [];
    const U = [];
    for (let X = 1; X < we.rows.length; X++)
      we.rows[X].partitionId !== we.rows[X - 1].partitionId && U.push(X);
    return U;
  }, [we?.rows]), te = q.useMemo(() => {
    if (!g || !we?.rows?.length) return null;
    const U = we.rows, X = L?.minimumPoints ?? 13;
    if (U.filter(
      (Ke) => !Ke.ghost && Ke.value != null
    ).length < X) return null;
    let he = -1;
    for (let Ke = U.length - 1; Ke >= 0; Ke--) {
      const tt = U[Ke];
      if (tt && tt.value != null && !tt.ghost) {
        he = Ke;
        break;
      }
    }
    if (he === -1) return null;
    const ie = U[he], Ce = ie.variationIcon, me = Ce, Ie = ie.assuranceIcon, Ae = me === Te.Neither && !!ie.specialCauseNeitherValue, ze = Ie === Ze.Pass ? tn.Pass : Ie === Ze.Fail ? tn.Fail : tn.Uncertain;
    let Le;
    if (me === Te.Suppressed) {
      const Ke = ie.specialCauseSinglePointUp, tt = ie.specialCauseSinglePointDown;
      d === De.Up ? Ke ? Le = Ne.Higher : tt && (Le = Ne.Lower) : d === De.Down ? tt ? Le = Ne.Lower : Ke && (Le = Ne.Higher) : Le = Ne.Higher;
    } else if (me === Te.Neither && Ae) {
      const Ke = ie.specialCauseSinglePointUp || ie.specialCauseTwoOfThreeUp || ie.specialCauseFourOfFiveUp || ie.specialCauseShiftUp || ie.specialCauseTrendUp, tt = ie.specialCauseSinglePointDown || ie.specialCauseTwoOfThreeDown || ie.specialCauseFourOfFiveDown || ie.specialCauseShiftDown || ie.specialCauseTrendDown;
      Ke && !tt ? Le = Ne.Higher : tt && !Ke ? Le = Ne.Lower : Le = Ne.Higher;
    }
    let Qe;
    d === De.Up ? Qe = Xe.HigherIsBetter : d === De.Down ? Qe = Xe.LowerIsBetter : Qe = Xe.ContextDependent;
    const mt = 80;
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        style: { display: "flex", gap: 12, marginRight: 16 },
        children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-icon",
              "data-variation": String(me),
              "data-trend-raw": Le ? String(Le) : "none",
              "data-trend": Le ? String(Le) : "none",
              "data-polarity": String(Qe ?? "unknown"),
              style: { width: mt, height: mt },
              children: /* @__PURE__ */ r.jsx(
                ga,
                {
                  dropShadow: !1,
                  data: {
                    variationIcon: Ce,
                    improvementDirection: d,
                    polarity: Qe,
                    specialCauseNeutral: Ae,
                    highSideSignal: ie.specialCauseSinglePointUp || ie.specialCauseTwoOfThreeUp || ie.specialCauseFourOfFiveUp || ie.specialCauseShiftUp || ie.specialCauseTrendUp,
                    lowSideSignal: ie.specialCauseSinglePointDown || ie.specialCauseTwoOfThreeDown || ie.specialCauseFourOfFiveDown || ie.specialCauseShiftDown || ie.specialCauseTrendDown,
                    ...Le ? { trend: Le } : {}
                  },
                  letterMode: d === De.Neither ? er.Direction : er.Polarity,
                  size: mt,
                  variant: v,
                  runLength: v === un.TriangleWithRun ? m : void 0
                }
              )
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-assurance-icon",
              "data-assurance": String(Ie),
              style: { width: mt, height: mt },
              children: /* @__PURE__ */ r.jsx(
                ba,
                {
                  status: ze,
                  size: mt,
                  dropShadow: !1
                }
              )
            }
          )
        ]
      },
      `embedded-icon-${he}`
    );
  }, [
    g,
    we?.rows,
    d,
    L?.minimumPoints,
    p,
    v,
    m
  ]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: i ? `fdp-spc-chart-wrapper ${i}` : "fdp-spc-chart-wrapper",
      children: [
        g && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__top-row",
            style: {
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 4
            },
            children: te
          }
        ),
        /* @__PURE__ */ r.jsx(
          hh,
          {
            height: n,
            ariaLabel: t,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ r.jsx(mh, { series: z, yDomain: Y, children: /* @__PURE__ */ r.jsx(
              Qm,
              {
                series: z,
                showPoints: s,
                announceFocus: o,
                limits: { mean: K, ucl: ne, lcl: Z, sigma: E, onePos: oe, oneNeg: xe, twoPos: _e, twoNeg: pe },
                showZones: a,
                highlightOutOfControl: u,
                engineRows: we?.rows || null,
                visualCategories: ue,
                enableRules: f,
                showIcons: h,
                narrationContext: J,
                gradientSequences: j,
                sequenceTransition: M,
                processLineWidth: I,
                effectiveUnit: F,
                partitionMarkers: ee,
                ariaLabel: t,
                enableNeutralNoJudgement: $,
                showTrendGatingExplanation: _,
                trendVisualMode: x,
                metricImprovement: d,
                showTrendStartMarkers: G,
                showFirstFavourableCrossMarkers: B,
                showTrendBridgeOverlay: H,
                showSignalsInspector: V,
                onSignalFocus: se
              }
            ) })
          }
        ),
        N && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof N == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          N
        ] }) : N }),
        C && w && /* @__PURE__ */ r.jsx(
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
            children: w
          }
        ),
        C && de.length > 0 && /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "fdp-spc-chart__warnings",
            role: "region",
            "aria-label": "SPC diagnostics",
            children: [
              /* @__PURE__ */ r.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
              /* @__PURE__ */ r.jsx(
                Xt,
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
                  rows: de.map((U) => {
                    let X = "grey";
                    return U.severity === en.Error ? X = "red" : U.severity === en.Warning ? X = "orange" : U.severity === en.Info && (X = "blue"), [
                      {
                        node: /* @__PURE__ */ r.jsx(
                          Oe,
                          {
                            color: X,
                            text: (U.severity ? String(U.severity) : "Info").replace(
                              /^[a-z]/,
                              (le) => le.toUpperCase()
                            )
                          }
                        ),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
                      },
                      {
                        node: U.category ? /* @__PURE__ */ r.jsx(
                          Oe,
                          {
                            color: "purple",
                            text: fe(U.category)
                          }
                        ) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
                      },
                      {
                        node: /* @__PURE__ */ r.jsx(Oe, { color: "grey", text: O(U.code) }),
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
}, Qm = ({
  series: e,
  showPoints: t,
  announceFocus: n,
  limits: a,
  showZones: s,
  highlightOutOfControl: o,
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
  enableNeutralNoJudgement: b = !0,
  showTrendGatingExplanation: T = !0,
  showTrendStartMarkers: L = !1,
  showFirstFavourableCrossMarkers: k = !1,
  showTrendBridgeOverlay: j = !1,
  showSignalsInspector: M = !1,
  onSignalFocus: I,
  visualCategories: C
}) => {
  const y = bn(), $ = nn();
  if (!y) return null;
  const { xScale: _, yScale: x } = y, P = q.useRef(
    "spc-seq-" + ++Jm
  ), N = Kt(), S = e[0]?.data || [], D = q.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const w = /* @__PURE__ */ new Set();
    return S.forEach((R, W) => {
      typeof a.ucl == "number" && R.y > a.ucl && w.add(W), typeof a.lcl == "number" && R.y < a.lcl && w.add(W);
    }), w;
  }, [a.ucl, a.lcl, S]), A = q.useMemo(() => {
    if (!i || !i.length) return null;
    const w = [];
    return i.forEach((R, W) => {
      const ne = !!(R.variationIcon === Te.Concern || R.variationIcon === Te.Improvement || R.specialCauseNeitherValue), Z = !!(R.specialCauseSinglePointUp || R.specialCauseTwoOfThreeUp || R.specialCauseFourOfFiveUp || R.specialCauseShiftUp || R.specialCauseTrendUp), oe = !!(R.specialCauseSinglePointDown || R.specialCauseTwoOfThreeDown || R.specialCauseFourOfFiveDown || R.specialCauseShiftDown || R.specialCauseTrendDown);
      w[W] = {
        variation: R.variationIcon,
        assurance: R.assuranceIcon,
        special: ne,
        concern: R.variationIcon === Te.Concern,
        improvement: R.variationIcon === Te.Improvement,
        trendUp: !!R.specialCauseTrendUp,
        trendDown: !!R.specialCauseTrendDown,
        upAny: Z,
        downAny: oe,
        neutralSpecial: !!R.specialCauseNeitherValue,
        shiftUp: !!R.specialCauseShiftUp,
        shiftDown: !!R.specialCauseShiftDown,
        twoOfThreeUp: !!R.specialCauseTwoOfThreeUp,
        twoOfThreeDown: !!R.specialCauseTwoOfThreeDown,
        fourOfFiveUp: !!R.specialCauseFourOfFiveUp,
        fourOfFiveDown: !!R.specialCauseFourOfFiveDown,
        partitionId: R.partitionId ?? null
      };
    }), w;
  }, [i]), re = q.useMemo(() => {
    if (!i || !i.length) return null;
    const w = [];
    for (const W of i)
      typeof W.target == "number" && !isNaN(W.target) && w.push(W.target);
    if (!w.length) return null;
    const R = w[0];
    return w.every((W) => W === R) ? R : null;
  }, [i]), G = q.useMemo(() => (C || []).map((w) => w === "Improvement" ? ut.Improvement : w === "Concern" ? ut.Concern : w === "NoJudgement" ? ut.NoJudgement : ut.Common), [C]), B = q.useMemo(() => {
    if (!d || !G.length)
      return [];
    const w = [...G];
    let R = 0;
    for (; R < w.length; ) {
      const Z = w[R];
      let oe = R + 1;
      for (; oe < w.length && w[oe] === Z; ) oe++;
      oe - R === 1 && Z !== ut.Common && (w[R] = ut.Common), R = oe;
    }
    const W = [];
    if (w.length) {
      let Z = 0;
      for (let oe = 1; oe <= w.length; oe++)
        if (oe === w.length || w[oe] !== w[Z]) {
          const xe = w[Z], _e = oe - 1, pe = _e - Z + 1;
          (xe === ut.Common || pe >= 2) && W.push({ start: Z, end: _e, category: xe }), Z = oe;
        }
    }
    return m?.includes("Rule Clash") && console.log(
      `[${m}] Final sequences:`,
      W.map((Z) => `${Z.start}-${Z.end}:${Z.category}`).join(", ")
    ), W;
  }, [d, G, m]), H = q.useMemo(
    () => S.map((w) => _(w.x instanceof Date ? w.x : new Date(w.x))),
    [S, _]
  ), V = _.range()[1], se = q.useMemo(() => {
    if (!i || !i.length) return null;
    let w = Number.POSITIVE_INFINITY, R = Number.POSITIVE_INFINITY;
    if (i.forEach((pe, E) => {
      pe.specialCauseTrendUp && (w = Math.min(w, E)), pe.specialCauseTrendDown && (R = Math.min(R, E));
    }), !Number.isFinite(w) && !Number.isFinite(R)) return null;
    const W = w <= R, ne = W ? "up" : "down", Z = W ? w : R, oe = (pe) => p == null || p === De.Neither || pe == null || typeof pe.value != "number" || typeof pe.mean != "number" ? !1 : ne === "up" ? p === De.Up ? pe.value > pe.mean : pe.value < pe.mean : p === De.Down ? pe.value < pe.mean : pe.value > pe.mean;
    let xe = null;
    for (let pe = Z; pe < i.length; pe++) {
      const E = i[pe];
      if (!(W ? !!E.specialCauseTrendUp : !!E.specialCauseTrendDown)) break;
      if (oe(E)) {
        xe = pe;
        break;
      }
    }
    let _e = !1;
    if (xe != null) {
      let pe = 0;
      for (let E = xe; E < i.length; E++) {
        const z = i[E];
        if (!(W ? !!z.specialCauseTrendUp : !!z.specialCauseTrendDown)) break;
        oe(z) && pe++;
      }
      _e = pe >= 2;
    }
    return { direction: ne, detectedAt: Z, firstFavourableCrossAt: xe, persistedAcrossMean: _e };
  }, [i, p]), O = q.useMemo(() => {
    if (!i || !i.length) return null;
    const w = (R) => {
      const W = [];
      let ne = null, Z = null;
      for (let oe = 0; oe < i.length; oe++) {
        const xe = i[oe], _e = typeof xe[R] == "number" ? xe[R] : null;
        if (_e == null || isNaN(_e)) {
          ne !== null && Z != null && (W.push({
            x1: H[ne],
            x2: H[oe - 1],
            y: x(Z)
          }), ne = null, Z = null);
          continue;
        }
        if (ne === null) {
          ne = oe, Z = _e;
          continue;
        }
        Z != null && Math.abs(_e - Z) <= 1e-9 || (Z != null && W.push({
          x1: H[ne],
          x2: H[oe - 1],
          y: x(Z)
        }), ne = oe, Z = _e);
      }
      return ne !== null && Z != null && W.push({
        x1: H[ne],
        x2: H[i.length - 1],
        y: x(Z)
      }), W;
    };
    return {
      mean: w("mean"),
      ucl: w("upperProcessLimit"),
      lcl: w("lowerProcessLimit"),
      onePos: w("upperOneSigma"),
      oneNeg: w("lowerOneSigma"),
      twoPos: w("upperTwoSigma"),
      twoNeg: w("lowerTwoSigma")
    };
  }, [i, H, x]), fe = q.useMemo(() => B.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
    /* @__PURE__ */ r.jsxs("linearGradient", { id: `${P.current}-grad-common`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.28 }),
      /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.12 }),
      /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.045 })
    ] }),
    B.map((w, R) => {
      const W = `${P.current}-grad-${R}`;
      let ne, Z = 0.28, oe = 0.12, xe = 0.045;
      switch (w.category) {
        case ut.Concern:
          ne = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", Z = 0.28, oe = 0.12, xe = 0.045;
          break;
        case ut.Improvement:
          ne = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", Z = 0.26, oe = 0.11, xe = 0.045;
          break;
        case ut.NoJudgement:
          ne = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", Z = 0.26, oe = 0.11, xe = 0.045;
          break;
        default:
          ne = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: W, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: ne, stopOpacity: Z }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: ne, stopOpacity: oe }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: ne, stopOpacity: xe })
      ] }, W);
    })
  ] }) : null, [B]), we = q.useMemo(() => {
    if (!B.length) return null;
    const [w] = x.domain(), R = x(w), W = B.map((ne, Z) => {
      const { start: oe, end: xe, category: _e } = ne;
      if (oe < 0 || xe >= H.length || oe > xe)
        return null;
      const pe = H[oe], E = H[xe];
      let z = "";
      if (_e === ut.Common) {
        const Y = Z > 0 ? B[Z - 1] : null, Q = Z < B.length - 1 ? B[Z + 1] : null, F = Y ? H[Y.end] : 0, J = Y ? x(S[Y.end].y) : R, ee = Q ? H[Q.start] : V, te = Q ? x(S[Q.start].y) : R;
        z = `M ${F} ${R}`, z += ` L ${F} ${J}`;
        for (let U = oe; U <= xe; U++)
          z += ` L ${H[U]} ${x(S[U].y)}`;
        z += ` L ${ee} ${te}`, z += ` L ${ee} ${R} Z`;
      } else {
        const Y = Z > 0 ? B[Z - 1] : null, Q = Z < B.length - 1 ? B[Z + 1] : null, F = Y && Y.category !== ut.Common, J = Q && Q.category !== ut.Common, ee = x(S[oe].y), te = x(S[xe].y);
        let U = pe, X = E;
        if (F) {
          const le = H[Y.end], he = x(S[Y.end].y), ie = S[oe].y - S[Y.end].y;
          f === "slope" && ie > 0 ? (z = `M ${le} ${he} L ${pe} ${ee}`, U = le) : (z = `M ${pe} ${R} L ${pe} ${ee}`, U = pe);
        } else
          z = `M ${pe} ${R} L ${pe} ${ee}`;
        for (let le = oe + 1; le <= xe; le++)
          z += ` L ${H[le]} ${x(S[le].y)}`;
        if (z += ` L ${E} ${te}`, J) {
          const le = H[Q.start], he = x(S[Q.start].y), ie = S[Q.start].y - S[xe].y;
          (f === "slope" && ie <= 0 || f === "extend") && (z += ` L ${le} ${he}`, X = le);
        }
        if (z += ` L ${X} ${R}`, z += ` L ${U} ${R} Z`, f === "neutral" && F) {
          const le = H[Y.end], he = x(S[Y.end].y), ie = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${le} ${R} L ${le} ${he} L ${pe} ${ee} L ${pe} ${R} Z`,
              fill: `url(#${P.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${Z}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            ie,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: z,
                fill: `url(#${P.current}-grad-${Z})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${Z}`
            )
          ] }, `seq-group-${Z}`);
        }
      }
      return /* @__PURE__ */ r.jsx(
        "path",
        {
          d: z,
          fill: `url(#${P.current}-grad-${Z})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${Z}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: W });
  }, [B, H, V, x, S, f]), ue = q.useMemo(() => {
    if (!c?.timeframe && S.length >= 2) {
      const w = S.map((xe) => xe.x instanceof Date ? xe.x : new Date(xe.x)), R = new Date(Math.min(...w.map((xe) => xe.getTime()))), W = new Date(Math.max(...w.map((xe) => xe.getTime()))), ne = Math.round((W.getTime() - R.getTime()) / 864e5) || 0;
      if (ne < 14)
        return `The chart shows a timeframe of ${ne + 1} days`;
      const Z = Math.round(ne / 7);
      return Z < 20 ? `The chart shows a timeframe of ${Z} weeks` : `The chart shows a timeframe of ${(W.getFullYear() - R.getFullYear()) * 12 + (W.getMonth() - R.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, S]), ce = (w) => {
    const R = w % 10, W = w % 100;
    return R === 1 && W !== 11 ? `${w}st` : R === 2 && W !== 12 ? `${w}nd` : R === 3 && W !== 13 ? `${w}rd` : `${w}th`;
  }, K = (w) => `${ce(w.getDate())} ${w.toLocaleString("en-GB", { month: "long" })}, ${w.getFullYear()}`, ae = q.useCallback(
    ({
      index: w,
      x: R,
      y: W
    }) => {
      const ne = i?.[w], Z = R instanceof Date ? R : new Date(R), oe = K(Z), xe = c?.measureUnit ? ` ${c.measureUnit}` : "", _e = c?.measureName ? ` ${c.measureName}` : "";
      if (!ne)
        return `General summary is: ${ue ? ue + ". " : ""}Point ${w + 1}, ${oe}, ${W}${xe}${_e}`;
      const pe = pa(ne.variationIcon) || "Variation", E = fa(ne), z = E.length ? ` Rules: ${[...new Set(E.map((Q) => $n[Q].narration))].join("; ")}.` : " No special cause rules.", Y = [];
      return c?.measureName && Y.push(`Measure: ${c.measureName}.`), c?.datasetContext && Y.push(`${c.datasetContext}.`), c?.organisation && Y.push(`Organisation: ${c.organisation}.`), c?.additionalNote && Y.push(c.additionalNote), [
        "General summary is:",
        ...Y,
        `Point ${w + 1} recorded on `,
        oe + ",",
        `with a value of ${W} ${xe}${_e}`,
        pe + ".",
        z
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, ue]
  ), de = q.useCallback(
    (w, R) => i?.[w] ? ae({
      index: w,
      seriesId: "process",
      x: R.x instanceof Date ? R.x : new Date(R.x),
      y: R.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, ae]
  );
  return /* @__PURE__ */ r.jsx(Jh, { children: /* @__PURE__ */ r.jsxs(
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
            width: y.xScale.range()[1] + 56 + 16,
            height: y.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(Zo, { type: "x" }),
              /* @__PURE__ */ r.jsx(Zo, { type: "y" }),
              /* @__PURE__ */ r.jsx(gh, { axis: "y" }),
              fe,
              we,
              v.map((w, R) => {
                const W = S[w];
                if (!W) return null;
                const ne = _(W.x instanceof Date ? W.x : new Date(W.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: ne,
                    x2: ne,
                    y1: 0,
                    y2: x.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${R}`
                );
              }),
              O?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                O.mean.map((w, R) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__cl", x1: w.x1, x2: w.x2, y1: w.y, y2: w.y }, `mean-${R}`)),
                O.mean.map((w, R) => {
                  if (R === O.mean.length - 1) return null;
                  const W = O.mean[R + 1];
                  if (!W || w.y === W.y) return null;
                  const Z = Math.max(4, W.x1 - w.x2 || 0) * 0.5, oe = `M ${w.x2},${w.y} C ${w.x2 + Z},${w.y} ${W.x1 - Z},${W.y} ${W.x1},${W.y}`;
                  return /* @__PURE__ */ r.jsx("path", { className: "fdp-spc__cl fdp-spc__cl-join", d: oe, fill: "none" }, `mean-join-${R}`);
                })
              ] }) : null,
              re != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ r.jsx(r.Fragment, {}),
              O?.ucl.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--ucl", children: [
                O.ucl.map((w, R) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--ucl", x1: w.x1, x2: w.x2, y1: w.y, y2: w.y, strokeWidth: 2 }, `ucl-${R}`)),
                O.ucl.map((w, R) => {
                  if (R === O.ucl.length - 1) return null;
                  const W = O.ucl[R + 1];
                  if (!W || w.y === W.y) return null;
                  const Z = Math.max(4, W.x1 - w.x2 || 0) * 0.5, oe = `M ${w.x2},${w.y} C ${w.x2 + Z},${w.y} ${W.x1 - Z},${W.y} ${W.x1},${W.y}`;
                  return /* @__PURE__ */ r.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join", d: oe, fill: "none", strokeWidth: 2 }, `ucl-join-${R}`);
                })
              ] }) : null,
              O?.lcl.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--lcl", children: [
                O.lcl.map((w, R) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--lcl", x1: w.x1, x2: w.x2, y1: w.y, y2: w.y, strokeWidth: 2 }, `lcl-${R}`)),
                O.lcl.map((w, R) => {
                  if (R === O.lcl.length - 1) return null;
                  const W = O.lcl[R + 1];
                  if (!W || w.y === W.y) return null;
                  const Z = Math.max(4, W.x1 - w.x2 || 0) * 0.5, oe = `M ${w.x2},${w.y} C ${w.x2 + Z},${w.y} ${W.x1 - Z},${W.y} ${W.x1},${W.y}`;
                  return /* @__PURE__ */ r.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join", d: oe, fill: "none", strokeWidth: 2 }, `lcl-join-${R}`);
                })
              ] }) : null,
              re != null && /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: _.range()[1],
                    y1: x(re),
                    y2: x(re),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: _.range()[0] - 7,
                    y: x(re) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      re,
                      " ",
                      g || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              s && O && O.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                O.onePos.map((w, R) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: w.x1,
                    x2: w.x2,
                    y1: w.y,
                    y2: w.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${R}`
                )),
                O.oneNeg.map((w, R) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: w.x1,
                    x2: w.x2,
                    y1: w.y,
                    y2: w.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${R}`
                )),
                O.twoPos.map((w, R) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: w.x1,
                    x2: w.x2,
                    y1: w.y,
                    y2: w.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${R}`
                )),
                O.twoNeg.map((w, R) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: w.x1,
                    x2: w.x2,
                    y1: w.y,
                    y2: w.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${R}`
                ))
              ] }),
              se && (L || k || j) && (() => {
                const w = se.detectedAt, R = se.firstFavourableCrossAt, W = S[w] ? _(S[w].x instanceof Date ? S[w].x : new Date(S[w].x)) : null, ne = S[w] ? x(S[w].y) : null, Z = R != null && S[R] ? _(S[R].x instanceof Date ? S[R].x : new Date(S[R].x)) : null, oe = R != null && S[R] ? x(S[R].y) : null;
                return /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  j && W != null && ne != null && Z != null && oe != null && /* @__PURE__ */ r.jsx("line", { x1: W, y1: ne, x2: Z, y2: oe, stroke: "#888", strokeDasharray: "4 4", strokeWidth: 2, children: /* @__PURE__ */ r.jsx("title", { children: "Trend bridge: start to first favourable-side point" }) }),
                  L && W != null && ne != null && /* @__PURE__ */ r.jsx("circle", { cx: W, cy: ne, r: 6, fill: "white", stroke: "#555", strokeWidth: 2, children: /* @__PURE__ */ r.jsx("title", { children: "Trend start (run reached N)" }) }),
                  k && Z != null && oe != null && /* @__PURE__ */ r.jsx("circle", { cx: Z, cy: oe, r: 5, fill: "#555", children: /* @__PURE__ */ r.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ r.jsx(
                Zh,
                {
                  series: e[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (w) => w.x instanceof Date ? w.x : new Date(w.x),
                  smooth: !1,
                  strokeWidth: h
                }
              ),
              t && S.map((w, R) => {
                const W = _(w.x instanceof Date ? w.x : new Date(w.x)), ne = x(w.y), Z = D.has(R), oe = A?.[R], xe = G[R], _e = xe === ut.Improvement, pe = xe === ut.Concern, E = xe === ut.NoJudgement, z = [
                  "fdp-spc__point",
                  Z && o ? "fdp-spc__point--ooc" : null,
                  l && pe ? "fdp-spc__point--sc-concern" : null,
                  l && _e ? "fdp-spc__point--sc-improvement" : null,
                  // Neutral special-cause (no-judgement) from category, when enabled
                  l && b && E ? "fdp-spc__point--sc-no-judgement" : null,
                  oe?.assurance === Ze.Pass ? "fdp-spc__point--assurance-pass" : null,
                  oe?.assurance === Ze.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), Y = N?.focused?.index === R;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: W,
                    cy: ne,
                    r: 5,
                    className: z,
                    "data-variation": oe?.variation,
                    "data-assurance": oe?.assurance,
                    "aria-label": m,
                    ...Y ? { "aria-describedby": `spc-tooltip-${R}` } : {}
                  },
                  R
                );
              }),
              u && l && A && S.map((w, R) => {
                const W = A[R];
                if (!W || !(W.concern || W.improvement)) return null;
                const ne = _(w.x instanceof Date ? w.x : new Date(w.x)), Z = x(w.y);
                let oe = Z - 10;
                const xe = 12, _e = x.range()[0] - 4;
                oe < xe && (oe = Math.min(Z + 16, _e));
                const pe = _.range()[1], E = Math.min(Math.max(ne, 0), pe - 0);
                return /* @__PURE__ */ r.jsx(
                  "text",
                  {
                    x: E,
                    y: oe,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${W.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: W.concern ? "!" : "★"
                  },
                  `icon-${R}`
                );
              }),
              $ && /* @__PURE__ */ r.jsx(
                eg,
                {
                  width: _.range()[1],
                  height: x.range()[0]
                }
              ),
              !M && /* @__PURE__ */ r.jsx(
                Fl,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: de,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (w) => K(w),
                  enableNeutralNoJudgement: b,
                  showTrendGatingExplanation: T
                }
              )
            ] })
          }
        ),
        M && /* @__PURE__ */ r.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ r.jsx(
          Fm,
          {
            engineRows: i,
            measureName: c?.measureName,
            measureUnit: g || c?.measureUnit,
            onSignalFocus: I
          }
        ) }),
        n && /* @__PURE__ */ r.jsx(
          Qh,
          {
            format: (w) => ae({ ...w, x: w.x instanceof Date ? w.x : new Date(w.x) })
          }
        )
      ]
    }
  ) });
}, eg = ({
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
}, tg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: tn,
  Direction: Ne,
  MetricPolarity: Xe,
  SPCAssuranceIcon: ba,
  SPCVariationIcon: ga,
  VariationJudgement: gt,
  VariationState: ke,
  getVariationColour: Xs,
  getVariationTrend: ma
}, Symbol.toStringTag, { value: "Module" })), My = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: Ze,
  AssuranceResult: tn,
  BaselineSuggestionReason: vt,
  ChartType: Dt,
  Direction: Ne,
  Icons: tg,
  ImprovementDirection: De,
  MetricPolarity: Xe,
  RULE_METADATA: Mr,
  SPCAssuranceIcon: ba,
  SPCChart: Zm,
  SPCTooltipOverlay: Fl,
  SPCVariationIcon: ga,
  SpcEmbeddedIconVariant: un,
  SpcWarningCategory: $l,
  SpcWarningCode: Il,
  SpcWarningSeverity: en,
  VARIATION_COLOR_TOKENS: Ct,
  VariationIcon: Te,
  VariationJudgement: gt,
  VariationState: ke,
  buildSpc: xa,
  extractRuleIds: fa,
  getVariationColorHex: sm,
  getVariationColorToken: kl,
  getVariationColour: Xs,
  getVariationTrend: ma,
  normaliseSpcSettings: Ml,
  ruleGlossary: $n,
  variationLabel: pa
}, Symbol.toStringTag, { value: "Module" })), ng = "150ms", rg = "300ms", ag = "500ms", sg = "cubic-bezier(0.4, 0, 1, 1)", og = "cubic-bezier(0, 0, 0.2, 1)", ig = "cubic-bezier(0.4, 0, 0.2, 1)", lg = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", cg = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", ug = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", dg = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", fg = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", pg = "1px", hg = "2px", mg = "4px", gg = "4px", xg = "4px", bg = "2px", yg = "1px", vg = "0px", wg = "4px", _g = "8px", Sg = "12px", Bl = "#d8dde0", Hl = "#4c6272", Ul = "#d8dde0", Ol = "#aeb7bd", Wl = "#d5281b", zl = "#005eb8", Vl = "#ffffff", Gl = "#212b32", Yl = "#007f3b", ql = "#330072", Xl = "#7c2855", Kl = "#d5281b", Jl = "#ffeb3b", Zl = "#fff9c4", Ql = "#ffb81c", ec = "#ed8b00", tc = "#00a499", nc = "#ae2573", rc = "#4c6272", ac = "#768692", sc = "#aeb7bd", oc = "#d8dde0", ic = "#f0f4f5", kg = "#212b32", Cg = "#4c6272", jg = "#ffffff", Ng = "#212b32", Dg = "#005eb8", Tg = "#7c2855", $g = "#003087", Ig = "#330072", Mg = "#ffeb3b", Lg = "#212b32", Pg = "#d8dde0", Fg = "#ffffff33", Ag = "#d5281b", Eg = "#4c6272", Rg = "#ffffff", Bg = "#007f3b", Hg = "#ffffff", Ug = "#006530", Og = "#004021", Wg = "#004021", zg = "#00000000", Vg = "#ffffff", Gg = "#005eb8", Yg = "#005eb8", qg = "#d9e5f2", Xg = "#c7daf0", Kg = "#005eb8", Jg = "#ffffff", Zg = "#212b32", Qg = "#d9dde0", e0 = "#b3bcc2", t0 = "#b3bcc2", n0 = "#d5281b", r0 = "#aa2016", a0 = "#6a140e", s0 = "#6a140e", o0 = "#005eb8", i0 = "#004b93", l0 = "#002f5c", c0 = "#002f5c", u0 = "8px", d0 = "16px", f0 = "12px", p0 = "16px", h0 = "4px", m0 = "40px", g0 = "4px", x0 = "40px", b0 = "12px", y0 = "16px", v0 = "32px", w0 = "16px", _0 = "20px", S0 = "28px", k0 = "9px", C0 = "2px", j0 = "16px", N0 = "24px", D0 = "8px", T0 = "24px", $0 = "16px", I0 = "4px", M0 = "4px", L0 = "4px", P0 = "8px", F0 = "4px", A0 = "16px", E0 = "#007f3b", R0 = "#006530", B0 = "#004021", H0 = "#d8dde0", U0 = "#ffffff", O0 = "#768692", W0 = "#00000000", z0 = "#ffeb3b", V0 = "#00000000", G0 = "#ffffff", Y0 = "#d9e5f2", q0 = "#c7daf0", X0 = "#005eb8", K0 = "#005eb8", lc = "8px", cc = "16px", uc = "12px", dc = "16px", J0 = "2px", Z0 = "4px", Q0 = "4px", ex = "600", tx = "#ffffff", nx = "#d8dde0", rx = "#aeb7bd", ax = "#f0f4f5", sx = "#212b32", ox = "#212b32", ix = "#005eb8", fc = "16px", pc = "32px", hc = "16px", lx = "1px", cx = "4px", ux = "none", dx = "0 2px 4px rgba(0, 0, 0, 0.1)", fx = "#ffffff", px = "#ffffff", hx = "#d8dde0", mx = "#ffffff", gx = "#4c6272", xx = "#ffeb3b", bx = "#d5281b", yx = "#aeb7bd", vx = "#212b32", wx = "#4c6272", _x = "#768692", Sx = "#212b32", kx = "#ffffff", Cx = "600", jx = "#d5281b", Nx = "600", Dx = "#4c6272", mc = "4px", gc = "40px", xc = "40px", bc = "12px", Tx = "2px", $x = "4px", Ix = "0px", Mx = "16px", Lx = "18px", Px = "24px", Fx = "32px", Ax = "34px", Ex = "32px", Rx = "40px", Bx = "48px", Hx = "5.4ex", Ux = "7.2ex", Ox = "9ex", Wx = "10.8ex", zx = "20ex", Vx = "38ex", Gx = "56ex", Yx = "44px", qx = "40px", Xx = "1020px", Kx = "100%", Jx = "50%", Zx = "33.333%", Qx = "25%", eb = "20%", tb = "320px", nb = "641px", rb = "1025px", ab = "1280px", sb = "960px", ob = "32px", ib = "16px", lb = "#d5281b", cb = "#d5281b", ub = "#ffffff", db = "#007f3b", fb = "#007f3b", pb = "#ffffff", hb = "#ffeb3b", mb = "#ffeb3b", gb = "#212b32", xb = "#005eb8", bb = "#005eb8", yb = "#ffffff", vb = "#d8dde0", wb = "#aeb7bd", _b = "#768692", Sb = "0 4px 0 #004021", kb = "0 4px 0 #005eb8", Cb = "0 4px 0 #6a140e", jb = "0 4px 0 #ffeb3b", Nb = "none", Db = "0 2px 4px rgba(0, 0, 0, 0.1)", Tb = "4px", $b = "0px", Ib = "solid", Mb = "0 0 0 3px #ffeb3b", Lb = "0 0 0 3px #ffeb3b", Pb = "none", Fb = "0 1px 3px rgba(0, 0, 0, 0.12)", Ab = "0 2px 6px rgba(0, 0, 0, 0.16)", Eb = "0 4px 12px rgba(0, 0, 0, 0.20)", yc = "0", vc = "4px", wc = "8px", _c = "16px", Sc = "24px", kc = "32px", Cc = "40px", jc = "48px", Nc = "56px", Dc = "64px", us = "0", ds = "0", fs = "4px", ps = "4px", hs = "8px", ms = "8px", gs = "8px", xs = "16px", bs = "16px", ys = "24px", vs = "24px", ws = "32px", _s = "32px", Ss = "40px", ks = "40px", Cs = "48px", js = "48px", Ns = "56px", Ds = "56px", Ts = "64px", Pr = "Frutiger W01", Fr = "Arial, Helvetica, sans-serif", Ar = "sans-serif", Er = "400", Rr = "600", Br = "400", Hr = "12px", Ur = "14px", Or = "12pt", Wr = "14px", zr = "16px", Vr = "12pt", Gr = "16px", Yr = "19px", qr = "13pt", Xr = "19px", Kr = "22px", Jr = "15pt", Zr = "22px", Qr = "26px", ea = "17pt", ta = "27px", na = "36px", ra = "20pt", aa = "33px", sa = "48px", oa = "24pt", $s = "16px", Is = "24px", Pt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ft = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, At = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Et = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Rt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Bt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ht = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Ut = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ot = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Rb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: ng,
  AnimationDurationNormal: rg,
  AnimationDurationSlow: ag,
  AnimationEasingBounce: lg,
  AnimationEasingEaseIn: sg,
  AnimationEasingEaseInOut: ig,
  AnimationEasingEaseOut: og,
  BorderColorCard: Ul,
  BorderColorCardHover: Ol,
  BorderColorDefault: Bl,
  BorderColorError: Wl,
  BorderColorForm: Hl,
  BorderRadiusLarge: Sg,
  BorderRadiusMedium: _g,
  BorderRadiusNone: vg,
  BorderRadiusSmall: wg,
  BorderWidthCardBottom: gg,
  BorderWidthDefault: pg,
  BorderWidthFormElement: hg,
  BorderWidthFormElementError: mg,
  BorderWidthPanel: xg,
  BorderWidthTableCell: yg,
  BorderWidthTableHeader: bg,
  BreakpointDesktop: rb,
  BreakpointLargeDesktop: ab,
  BreakpointMobile: tb,
  BreakpointTablet: nb,
  ButtonBorderRadius: Z0,
  ButtonBorderWidth: J0,
  ButtonPrimaryBackgroundActive: B0,
  ButtonPrimaryBackgroundDefault: E0,
  ButtonPrimaryBackgroundDisabled: H0,
  ButtonPrimaryBackgroundHover: R0,
  ButtonPrimaryBorderDefault: W0,
  ButtonPrimaryBorderFocus: z0,
  ButtonPrimaryTextDefault: U0,
  ButtonPrimaryTextDisabled: O0,
  ButtonSecondaryBackgroundActive: q0,
  ButtonSecondaryBackgroundDefault: V0,
  ButtonSecondaryBackgroundHover: Y0,
  ButtonSecondaryBackgroundSolid: G0,
  ButtonSecondaryBorderDefault: K0,
  ButtonSecondaryTextDefault: X0,
  ButtonShadowSize: Q0,
  ButtonSpacingPaddingHorizontalDesktop: dc,
  ButtonSpacingPaddingHorizontalMobile: cc,
  ButtonSpacingPaddingVerticalDesktop: uc,
  ButtonSpacingPaddingVerticalMobile: lc,
  ButtonTypographyWeight: ex,
  CardBackgroundDefault: tx,
  CardBorderBottom: ax,
  CardBorderDefault: nx,
  CardBorderHover: rx,
  CardBorderWidthBottom: cx,
  CardBorderWidthDefault: lx,
  CardShadowDefault: ux,
  CardShadowHover: dx,
  CardSpacingHeadingMargin: hc,
  CardSpacingPaddingDesktop: pc,
  CardSpacingPaddingMobile: fc,
  CardTextDescription: ox,
  CardTextHeading: sx,
  CardTextLink: ix,
  ColorBorderDefault: Pg,
  ColorBorderSecondary: Fg,
  ColorButtonLoginActive: l0,
  ColorButtonLoginBackground: o0,
  ColorButtonLoginHover: i0,
  ColorButtonLoginShadow: c0,
  ColorButtonPrimaryActive: Og,
  ColorButtonPrimaryBackground: Bg,
  ColorButtonPrimaryHover: Ug,
  ColorButtonPrimaryShadow: Wg,
  ColorButtonPrimaryText: Hg,
  ColorButtonReverseActive: e0,
  ColorButtonReverseBackground: Jg,
  ColorButtonReverseHover: Qg,
  ColorButtonReverseShadow: t0,
  ColorButtonReverseText: Zg,
  ColorButtonSecondaryActive: Xg,
  ColorButtonSecondaryBackground: zg,
  ColorButtonSecondaryBackgroundSolid: Vg,
  ColorButtonSecondaryBorder: Gg,
  ColorButtonSecondaryHover: qg,
  ColorButtonSecondaryShadow: Kg,
  ColorButtonSecondaryText: Yg,
  ColorButtonWarningActive: a0,
  ColorButtonWarningBackground: n0,
  ColorButtonWarningHover: r0,
  ColorButtonWarningShadow: s0,
  ColorError: Ag,
  ColorFocusBackground: Mg,
  ColorFocusText: Lg,
  ColorFormBackground: Rg,
  ColorFormBorder: Eg,
  ColorGrey1: rc,
  ColorGrey2: ac,
  ColorGrey3: sc,
  ColorGrey4: oc,
  ColorGrey5: ic,
  ColorLinkActive: $g,
  ColorLinkDefault: Dg,
  ColorLinkHover: Tg,
  ColorLinkVisited: Ig,
  ColorPrimaryBlack: Gl,
  ColorPrimaryBlue: zl,
  ColorPrimaryDarkPink: Xl,
  ColorPrimaryGreen: Yl,
  ColorPrimaryPurple: ql,
  ColorPrimaryRed: Kl,
  ColorPrimaryWhite: Vl,
  ColorPrimaryYellow: Jl,
  ColorSecondaryAquaGreen: tc,
  ColorSecondaryOrange: ec,
  ColorSecondaryPaleYellow: Zl,
  ColorSecondaryPink: nc,
  ColorSecondaryWarmYellow: Ql,
  ColorTextPrimary: kg,
  ColorTextPrint: Ng,
  ColorTextReverse: jg,
  ColorTextSecondary: Cg,
  ComponentBlur: M0,
  ComponentBreadcrumbChevronMarginLeft: k0,
  ComponentBreadcrumbChevronMarginRight: C0,
  ComponentBreadcrumbPaddingTopDesktop: N0,
  ComponentBreadcrumbPaddingTopMobile: j0,
  ComponentButtonPaddingDesktopHorizontal: p0,
  ComponentButtonPaddingDesktopVertical: f0,
  ComponentButtonPaddingMobileHorizontal: d0,
  ComponentButtonPaddingMobileVertical: u0,
  ComponentButtonShadowSize: h0,
  ComponentCardHeadingMargin: w0,
  ComponentCardPaddingDesktop: v0,
  ComponentCardPaddingMobile: y0,
  ComponentDetails: P0,
  ComponentExpander: F0,
  ComponentFormCheckboxLabelPadding: b0,
  ComponentFormCheckboxSize: x0,
  ComponentFormInputMinHeight: m0,
  ComponentFormInputPadding: g0,
  ComponentLink: L0,
  ComponentPagination: A0,
  ComponentPanelPaddingDesktop: S0,
  ComponentPanelPaddingMobile: _0,
  ComponentSpread: I0,
  ComponentSummaryListCellPaddingHorizontal: T0,
  ComponentSummaryListCellPaddingVertical: D0,
  ComponentSummaryListRowMargin: $0,
  ElevationHigh: Eb,
  ElevationLow: Fb,
  ElevationMedium: Ab,
  ElevationNone: Pb,
  FocusOutlineOffset: $b,
  FocusOutlineStyle: Ib,
  FocusOutlineWidth: Tb,
  FocusShadowButton: Lb,
  FocusShadowInput: Mb,
  FontFamilyBase: Pr,
  FontFamilyFallback: Fr,
  FontFamilyPrint: Ar,
  FontLineHeightBase: Is,
  FontSize14Mobile: Hr,
  FontSize14Print: Or,
  FontSize14Tablet: Ur,
  FontSize16Mobile: Wr,
  FontSize16Print: Vr,
  FontSize16Tablet: zr,
  FontSize19Mobile: Gr,
  FontSize19Print: qr,
  FontSize19Tablet: Yr,
  FontSize22Mobile: Xr,
  FontSize22Print: Jr,
  FontSize22Tablet: Kr,
  FontSize26Mobile: Zr,
  FontSize26Print: ea,
  FontSize26Tablet: Qr,
  FontSize36Mobile: ta,
  FontSize36Print: ra,
  FontSize36Tablet: na,
  FontSize48Mobile: aa,
  FontSize48Print: oa,
  FontSize48Tablet: sa,
  FontSizeBase: $s,
  FontWeightBold: Rr,
  FontWeightLight: Br,
  FontWeightNormal: Er,
  FormBorderRadius: Ix,
  FormBorderWidthDefault: Tx,
  FormBorderWidthError: $x,
  FormErrorTextDefault: jx,
  FormErrorTypographyWeight: Nx,
  FormHintTextDefault: Dx,
  FormInputBackgroundDefault: fx,
  FormInputBackgroundDisabled: hx,
  FormInputBackgroundError: mx,
  FormInputBackgroundFocus: px,
  FormInputBorderDefault: gx,
  FormInputBorderDisabled: yx,
  FormInputBorderError: bx,
  FormInputBorderFocus: xx,
  FormInputTextDefault: vx,
  FormInputTextDisabled: _x,
  FormInputTextPlaceholder: wx,
  FormLabelTextDefault: Sx,
  FormLabelTextRequired: kx,
  FormLabelTypographyWeight: Cx,
  FormSpacingCheckboxLabelPadding: bc,
  FormSpacingCheckboxSize: xc,
  FormSpacingInputMinHeight: gc,
  FormSpacingInputPadding: mc,
  GridGutter: ob,
  GridGutterHalf: ib,
  GridPageWidth: sb,
  HeadingsNhsukHeadingL: Ft,
  HeadingsNhsukHeadingM: At,
  HeadingsNhsukHeadingS: Et,
  HeadingsNhsukHeadingXl: Pt,
  HeadingsNhsukHeadingXs: Rt,
  LayoutColumnActions: eb,
  LayoutColumnFull: Kx,
  LayoutColumnHalf: Jx,
  LayoutColumnQuarter: Qx,
  LayoutColumnThird: Zx,
  LayoutContainerMaxWidth: Xx,
  ParagraphsBody: Bt,
  ParagraphsBodyLarge: Ht,
  ParagraphsBodySmall: Ut,
  ParagraphsLedeText: Ot,
  ParagraphsLedeTextSmall: Wt,
  ShadowButtonDefault: Sb,
  ShadowButtonFocus: jb,
  ShadowButtonSecondary: kb,
  ShadowButtonWarning: Cb,
  ShadowCardDefault: Nb,
  ShadowCardHover: Db,
  SizeButtonMinHeightDesktop: qx,
  SizeButtonMinHeightMobile: Yx,
  SizeFormControlLarge: Bx,
  SizeFormControlMedium: Rx,
  SizeFormControlSmall: Ex,
  SizeFormInputWidth2xl: Vx,
  SizeFormInputWidth3xl: Gx,
  SizeFormInputWidthLg: Wx,
  SizeFormInputWidthMd: Ox,
  SizeFormInputWidthSm: Ux,
  SizeFormInputWidthXl: zx,
  SizeFormInputWidthXs: Hx,
  SizeIconExtraLarge: Fx,
  SizeIconLarge: Px,
  SizeIconMedium: Lx,
  SizeIconNhsDefault: Ax,
  SizeIconSmall: Mx,
  Spacing0: yc,
  Spacing1: vc,
  Spacing2: wc,
  Spacing3: _c,
  Spacing4: Sc,
  Spacing5: kc,
  Spacing6: Cc,
  Spacing7: jc,
  Spacing8: Nc,
  Spacing9: Dc,
  SpacingResponsive0Mobile: us,
  SpacingResponsive0Tablet: ds,
  SpacingResponsive1Mobile: fs,
  SpacingResponsive1Tablet: ps,
  SpacingResponsive2Mobile: hs,
  SpacingResponsive2Tablet: ms,
  SpacingResponsive3Mobile: gs,
  SpacingResponsive3Tablet: xs,
  SpacingResponsive4Mobile: bs,
  SpacingResponsive4Tablet: ys,
  SpacingResponsive5Mobile: vs,
  SpacingResponsive5Tablet: ws,
  SpacingResponsive6Mobile: _s,
  SpacingResponsive6Tablet: Ss,
  SpacingResponsive7Mobile: ks,
  SpacingResponsive7Tablet: Cs,
  SpacingResponsive8Mobile: js,
  SpacingResponsive8Tablet: Ns,
  SpacingResponsive9Mobile: Ds,
  SpacingResponsive9Tablet: Ts,
  StateDisabledBackground: vb,
  StateDisabledBorder: wb,
  StateDisabledText: _b,
  StateErrorBackground: lb,
  StateErrorBorder: cb,
  StateErrorText: ub,
  StateInfoBackground: xb,
  StateInfoBorder: bb,
  StateInfoText: yb,
  StateSuccessBackground: db,
  StateSuccessBorder: fb,
  StateSuccessText: pb,
  StateWarningBackground: hb,
  StateWarningBorder: mb,
  StateWarningText: gb,
  TransitionButtonDefault: cg,
  TransitionButtonShadow: ug,
  TransitionCardHover: fg,
  TransitionInputFocus: dg
}, Symbol.toStringTag, { value: "Module" })), Ly = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Py = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: Pt.fontFamily,
      fontWeight: Pt.fontWeight,
      fontSize: Pt.fontSize.mobile,
      lineHeight: Pt.lineHeight,
      marginTop: Pt.marginTop,
      marginBottom: Pt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Fy = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h2",
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
), Ay = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: At.fontFamily,
      fontWeight: At.fontWeight,
      fontSize: At.fontSize.mobile,
      lineHeight: At.lineHeight,
      marginTop: At.marginTop,
      marginBottom: At.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Ey = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: Et.fontFamily,
      fontWeight: Et.fontWeight,
      fontSize: Et.fontSize.mobile,
      lineHeight: Et.lineHeight,
      marginTop: Et.marginTop,
      marginBottom: Et.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Ry = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h5",
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
), By = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
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
), Hy = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
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
), Uy = ({
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
), Oy = ({
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
), Wy = ({
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
), zy = () => $e(() => Rb, []), Vy = () => $e(() => ({
  // Border colors
  BorderColorDefault: Bl,
  BorderColorForm: Hl,
  BorderColorCard: Ul,
  BorderColorCardHover: Ol,
  BorderColorError: Wl,
  // Primary colors
  ColorPrimaryBlue: zl,
  ColorPrimaryWhite: Vl,
  ColorPrimaryBlack: Gl,
  ColorPrimaryGreen: Yl,
  ColorPrimaryPurple: ql,
  ColorPrimaryDarkPink: Xl,
  ColorPrimaryRed: Kl,
  ColorPrimaryYellow: Jl,
  // Secondary colors
  ColorSecondaryPaleYellow: Zl,
  ColorSecondaryWarmYellow: Ql,
  ColorSecondaryOrange: ec,
  ColorSecondaryAquaGreen: tc,
  ColorSecondaryPink: nc,
  // Grey scale
  ColorGrey1: rc,
  ColorGrey2: ac,
  ColorGrey3: sc,
  ColorGrey4: oc,
  ColorGrey5: ic
}), []), Gy = () => $e(() => ({
  Spacing0: yc,
  Spacing1: vc,
  Spacing2: wc,
  Spacing3: _c,
  Spacing4: Sc,
  Spacing5: kc,
  Spacing6: Cc,
  Spacing7: jc,
  Spacing8: Nc,
  Spacing9: Dc
}), []), Yy = () => $e(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Hr,
    Size16: Wr,
    Size19: Gr,
    Size22: Xr,
    Size26: Zr,
    Size36: ta,
    Size48: aa
  },
  Tablet: {
    Size14: Ur,
    Size16: zr,
    Size19: Yr,
    Size22: Kr,
    Size26: Qr,
    Size36: na,
    Size48: sa
  },
  Print: {
    Size14: Or,
    Size16: Vr,
    Size19: qr,
    Size22: Jr,
    Size26: ea,
    Size36: ra,
    Size48: oa
  },
  Family: {
    Base: Pr,
    Fallback: Fr,
    Print: Ar
  },
  Weight: {
    Normal: Er,
    Bold: Rr,
    Light: Br
  },
  Base: {
    Size: $s,
    LineHeight: Is
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Pr,
  FontFamilyFallback: Fr,
  FontFamilyPrint: Ar,
  FontWeightNormal: Er,
  FontWeightBold: Rr,
  FontWeightLight: Br,
  FontSize14Mobile: Hr,
  FontSize14Tablet: Ur,
  FontSize14Print: Or,
  FontSize16Mobile: Wr,
  FontSize16Tablet: zr,
  FontSize16Print: Vr,
  FontSize19Mobile: Gr,
  FontSize19Tablet: Yr,
  FontSize19Print: qr,
  FontSize22Mobile: Xr,
  FontSize22Tablet: Kr,
  FontSize22Print: Jr,
  FontSize26Mobile: Zr,
  FontSize26Tablet: Qr,
  FontSize26Print: ea,
  FontSize36Mobile: ta,
  FontSize36Tablet: na,
  FontSize36Print: ra,
  FontSize48Mobile: aa,
  FontSize48Tablet: sa,
  FontSize48Print: oa,
  FontSizeBase: $s,
  FontLineHeightBase: Is
}), []), qy = () => $e(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: us,
    Size1: fs,
    Size2: hs,
    Size3: gs,
    Size4: bs,
    Size5: vs,
    Size6: _s,
    Size7: ks,
    Size8: js,
    Size9: Ds
  },
  Tablet: {
    Size0: ds,
    Size1: ps,
    Size2: ms,
    Size3: xs,
    Size4: ys,
    Size5: ws,
    Size6: Ss,
    Size7: Cs,
    Size8: Ns,
    Size9: Ts
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: us,
  SpacingResponsive0Tablet: ds,
  SpacingResponsive1Mobile: fs,
  SpacingResponsive1Tablet: ps,
  SpacingResponsive2Mobile: hs,
  SpacingResponsive2Tablet: ms,
  SpacingResponsive3Mobile: gs,
  SpacingResponsive3Tablet: xs,
  SpacingResponsive4Mobile: bs,
  SpacingResponsive4Tablet: ys,
  SpacingResponsive5Mobile: vs,
  SpacingResponsive5Tablet: ws,
  SpacingResponsive6Mobile: _s,
  SpacingResponsive6Tablet: Ss,
  SpacingResponsive7Mobile: ks,
  SpacingResponsive7Tablet: Cs,
  SpacingResponsive8Mobile: js,
  SpacingResponsive8Tablet: Ns,
  SpacingResponsive9Mobile: Ds,
  SpacingResponsive9Tablet: Ts
}), []), Xy = () => $e(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: lc,
  ButtonSpacingPaddingHorizontalMobile: cc,
  ButtonSpacingPaddingVerticalDesktop: uc,
  ButtonSpacingPaddingHorizontalDesktop: dc,
  // Card spacing	
  CardSpacingPaddingMobile: fc,
  CardSpacingPaddingDesktop: pc,
  CardSpacingHeadingMargin: hc,
  // Form spacing
  FormSpacingInputPadding: mc,
  FormSpacingInputMinHeight: gc,
  FormSpacingCheckboxSize: xc,
  FormSpacingCheckboxLabelPadding: bc
}), []), Ky = () => $e(() => ({
  xl: Pt,
  l: Ft,
  m: At,
  s: Et,
  xs: Rt
}), []), Jy = () => $e(() => ({
  body: Bt,
  bodyLarge: Ht,
  bodySmall: Ut,
  ledeText: Ot,
  ledeTextSmall: Wt
}), []), Zy = () => $e(() => ({
  headings: {
    xl: Pt,
    l: Ft,
    m: At,
    s: Et,
    xs: Rt
  },
  paragraphs: {
    body: Bt,
    bodyLarge: Ht,
    bodySmall: Ut,
    ledeText: Ot,
    ledeTextSmall: Wt
  },
  fonts: {
    family: {
      base: Pr,
      fallback: Fr,
      print: Ar
    },
    weight: {
      normal: Er,
      bold: Rr,
      light: Br
    },
    sizes: {
      mobile: {
        size14: Hr,
        size16: Wr,
        size19: Gr,
        size22: Xr,
        size26: Zr,
        size36: ta,
        size48: aa
      },
      tablet: {
        size14: Ur,
        size16: zr,
        size19: Yr,
        size22: Kr,
        size26: Qr,
        size36: na,
        size48: sa
      },
      print: {
        size14: Or,
        size16: Vr,
        size19: qr,
        size22: Jr,
        size26: ea,
        size36: ra,
        size48: oa
      }
    }
  }
}), []);
function Qy(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, s] = q.useState(t), o = q.useCallback(() => s("three-column"), []), i = q.useCallback(() => s((u) => u === "three-column" ? n : u), [n]), l = q.useCallback(() => s((u) => u === "three-column" ? n : "three-column"), [n]);
  return {
    forceLayout: a,
    setLayout: s,
    drillIn: o,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const Tc = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, xt = {
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
function ev(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...Tc, ...e }, a = [];
  return n?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${xt.normal.eot}?#iefix") format("eot"),
       url("${t}${xt.normal.woff2}") format("woff2"),
       url("${t}${xt.normal.woff}") format("woff"),
       url("${t}${xt.normal.ttf}") format("truetype");
  src: url("${t}${xt.normal.eot}");
}`), n?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${xt.bold.eot}?#iefix") format("eot"),
       url("${t}${xt.bold.woff2}") format("woff2"),
       url("${t}${xt.bold.woff}") format("woff"),
       url("${t}${xt.bold.ttf}") format("truetype");
  src: url("${t}${xt.bold.eot}");
}`), a.join(`
`);
}
function tv(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...Tc, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${xt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${xt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${xt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${xt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((s) => {
    const o = document.createElement("link");
    o.rel = "preload", o.href = s.href, o.as = s.as, o.type = s.type, o.crossOrigin = "anonymous", document.head.appendChild(o);
  });
}
const nv = '"Frutiger W01", Arial, Helvetica, sans-serif', rv = "Arial, Helvetica, sans-serif";
async function av() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  pi as Account,
  Wb as ActionLink,
  by as AdaptiveDataGrid,
  ng as AnimationDurationFast,
  rg as AnimationDurationNormal,
  ag as AnimationDurationSlow,
  lg as AnimationEasingBounce,
  sg as AnimationEasingEaseIn,
  ig as AnimationEasingEaseInOut,
  og as AnimationEasingEaseOut,
  Xi as AppointmentCard,
  jy as AreaSeriesPrimitive,
  xp as AriaDataGrid,
  ts as AriaTabsDataGrid,
  by as AriaTabsDataGridAdaptive,
  Zo as Axis,
  qa as BackLink,
  Dy as BandScalesProvider,
  Ny as BarSeriesPrimitive,
  Ul as BorderColorCard,
  Ol as BorderColorCardHover,
  Bl as BorderColorDefault,
  Wl as BorderColorError,
  Hl as BorderColorForm,
  Sg as BorderRadiusLarge,
  _g as BorderRadiusMedium,
  vg as BorderRadiusNone,
  wg as BorderRadiusSmall,
  gg as BorderWidthCardBottom,
  pg as BorderWidthDefault,
  hg as BorderWidthFormElement,
  mg as BorderWidthFormElementError,
  xg as BorderWidthPanel,
  yg as BorderWidthTableCell,
  bg as BorderWidthTableHeader,
  tp as Breadcrumb,
  pu as Breakpoint,
  rb as BreakpointDesktop,
  ab as BreakpointLargeDesktop,
  tb as BreakpointMobile,
  nb as BreakpointTablet,
  pt as Button,
  Z0 as ButtonBorderRadius,
  J0 as ButtonBorderWidth,
  B0 as ButtonPrimaryBackgroundActive,
  E0 as ButtonPrimaryBackgroundDefault,
  H0 as ButtonPrimaryBackgroundDisabled,
  R0 as ButtonPrimaryBackgroundHover,
  W0 as ButtonPrimaryBorderDefault,
  z0 as ButtonPrimaryBorderFocus,
  U0 as ButtonPrimaryTextDefault,
  O0 as ButtonPrimaryTextDisabled,
  q0 as ButtonSecondaryBackgroundActive,
  V0 as ButtonSecondaryBackgroundDefault,
  Y0 as ButtonSecondaryBackgroundHover,
  G0 as ButtonSecondaryBackgroundSolid,
  K0 as ButtonSecondaryBorderDefault,
  X0 as ButtonSecondaryTextDefault,
  Q0 as ButtonShadowSize,
  mi as ButtonSize,
  dc as ButtonSpacingPaddingHorizontalDesktop,
  cc as ButtonSpacingPaddingHorizontalMobile,
  uc as ButtonSpacingPaddingVerticalDesktop,
  lc as ButtonSpacingPaddingVerticalMobile,
  ex as ButtonTypographyWeight,
  hi as ButtonVariant,
  zi as Card,
  tx as CardBackgroundDefault,
  ax as CardBorderBottom,
  nx as CardBorderDefault,
  rx as CardBorderHover,
  cx as CardBorderWidthBottom,
  lx as CardBorderWidthDefault,
  oy as CardGroup,
  iy as CardGroupItem,
  ux as CardShadowDefault,
  dx as CardShadowHover,
  hc as CardSpacingHeadingMargin,
  pc as CardSpacingPaddingDesktop,
  fc as CardSpacingPaddingMobile,
  ox as CardTextDescription,
  sx as CardTextHeading,
  ix as CardTextLink,
  ly as CareCard,
  zb as CharacterCount,
  $y as ChartEnhancer,
  Ty as ChartNoScript,
  hh as ChartRoot,
  eu as Checkbox,
  au as Checkboxes,
  Pg as ColorBorderDefault,
  Fg as ColorBorderSecondary,
  l0 as ColorButtonLoginActive,
  o0 as ColorButtonLoginBackground,
  i0 as ColorButtonLoginHover,
  c0 as ColorButtonLoginShadow,
  Og as ColorButtonPrimaryActive,
  Bg as ColorButtonPrimaryBackground,
  Ug as ColorButtonPrimaryHover,
  Wg as ColorButtonPrimaryShadow,
  Hg as ColorButtonPrimaryText,
  e0 as ColorButtonReverseActive,
  Jg as ColorButtonReverseBackground,
  Qg as ColorButtonReverseHover,
  t0 as ColorButtonReverseShadow,
  Zg as ColorButtonReverseText,
  Xg as ColorButtonSecondaryActive,
  zg as ColorButtonSecondaryBackground,
  Vg as ColorButtonSecondaryBackgroundSolid,
  Gg as ColorButtonSecondaryBorder,
  qg as ColorButtonSecondaryHover,
  Kg as ColorButtonSecondaryShadow,
  Yg as ColorButtonSecondaryText,
  a0 as ColorButtonWarningActive,
  n0 as ColorButtonWarningBackground,
  r0 as ColorButtonWarningHover,
  s0 as ColorButtonWarningShadow,
  Ag as ColorError,
  Mg as ColorFocusBackground,
  Lg as ColorFocusText,
  Rg as ColorFormBackground,
  Eg as ColorFormBorder,
  rc as ColorGrey1,
  ac as ColorGrey2,
  sc as ColorGrey3,
  oc as ColorGrey4,
  ic as ColorGrey5,
  $g as ColorLinkActive,
  Dg as ColorLinkDefault,
  Tg as ColorLinkHover,
  Ig as ColorLinkVisited,
  Gl as ColorPrimaryBlack,
  zl as ColorPrimaryBlue,
  Xl as ColorPrimaryDarkPink,
  Yl as ColorPrimaryGreen,
  ql as ColorPrimaryPurple,
  Kl as ColorPrimaryRed,
  Vl as ColorPrimaryWhite,
  Jl as ColorPrimaryYellow,
  tc as ColorSecondaryAquaGreen,
  ec as ColorSecondaryOrange,
  Zl as ColorSecondaryPaleYellow,
  nc as ColorSecondaryPink,
  Ql as ColorSecondaryWarmYellow,
  kg as ColorTextPrimary,
  Ng as ColorTextPrint,
  jg as ColorTextReverse,
  Cg as ColorTextSecondary,
  Gn as Column,
  mu as ColumnAlign,
  M0 as ComponentBlur,
  k0 as ComponentBreadcrumbChevronMarginLeft,
  C0 as ComponentBreadcrumbChevronMarginRight,
  N0 as ComponentBreadcrumbPaddingTopDesktop,
  j0 as ComponentBreadcrumbPaddingTopMobile,
  p0 as ComponentButtonPaddingDesktopHorizontal,
  f0 as ComponentButtonPaddingDesktopVertical,
  d0 as ComponentButtonPaddingMobileHorizontal,
  u0 as ComponentButtonPaddingMobileVertical,
  h0 as ComponentButtonShadowSize,
  w0 as ComponentCardHeadingMargin,
  v0 as ComponentCardPaddingDesktop,
  y0 as ComponentCardPaddingMobile,
  P0 as ComponentDetails,
  F0 as ComponentExpander,
  b0 as ComponentFormCheckboxLabelPadding,
  x0 as ComponentFormCheckboxSize,
  m0 as ComponentFormInputMinHeight,
  g0 as ComponentFormInputPadding,
  L0 as ComponentLink,
  A0 as ComponentPagination,
  S0 as ComponentPanelPaddingDesktop,
  _0 as ComponentPanelPaddingMobile,
  I0 as ComponentSpread,
  T0 as ComponentSummaryListCellPaddingHorizontal,
  D0 as ComponentSummaryListCellPaddingVertical,
  $0 as ComponentSummaryListRowMargin,
  yi as Container,
  sy as ContentsList,
  Tc as DEFAULT_FONT_CONFIG,
  my as DashboardSummaryGrid,
  Qb as DateInput,
  lp as Details,
  cp as DoDontList,
  Eb as ElevationHigh,
  Fb as ElevationLow,
  Ab as ElevationMedium,
  Pb as ElevationNone,
  ao as ErrorMessage,
  Zb as ErrorSummary,
  up as Expander,
  xt as FRUTIGER_FONT_FILES,
  Ps as Fieldset,
  hu as Float,
  $b as FocusOutlineOffset,
  Ib as FocusOutlineStyle,
  Tb as FocusOutlineWidth,
  Lb as FocusShadowButton,
  Mb as FocusShadowInput,
  Pr as FontFamilyBase,
  Fr as FontFamilyFallback,
  Ar as FontFamilyPrint,
  Is as FontLineHeightBase,
  Hr as FontSize14Mobile,
  Or as FontSize14Print,
  Ur as FontSize14Tablet,
  Wr as FontSize16Mobile,
  Vr as FontSize16Print,
  zr as FontSize16Tablet,
  Gr as FontSize19Mobile,
  qr as FontSize19Print,
  Yr as FontSize19Tablet,
  Xr as FontSize22Mobile,
  Jr as FontSize22Print,
  Kr as FontSize22Tablet,
  Zr as FontSize26Mobile,
  ea as FontSize26Print,
  Qr as FontSize26Tablet,
  ta as FontSize36Mobile,
  ra as FontSize36Print,
  na as FontSize36Tablet,
  aa as FontSize48Mobile,
  oa as FontSize48Print,
  sa as FontSize48Tablet,
  $s as FontSizeBase,
  Rr as FontWeightBold,
  Br as FontWeightLight,
  Er as FontWeightNormal,
  ki as Footer,
  Ix as FormBorderRadius,
  Tx as FormBorderWidthDefault,
  $x as FormBorderWidthError,
  jx as FormErrorTextDefault,
  Nx as FormErrorTypographyWeight,
  Dx as FormHintTextDefault,
  fx as FormInputBackgroundDefault,
  hx as FormInputBackgroundDisabled,
  mx as FormInputBackgroundError,
  px as FormInputBackgroundFocus,
  gx as FormInputBorderDefault,
  yx as FormInputBorderDisabled,
  bx as FormInputBorderError,
  xx as FormInputBorderFocus,
  vx as FormInputTextDefault,
  _x as FormInputTextDisabled,
  wx as FormInputTextPlaceholder,
  Sx as FormLabelTextDefault,
  kx as FormLabelTextRequired,
  Cx as FormLabelTypographyWeight,
  bc as FormSpacingCheckboxLabelPadding,
  xc as FormSpacingCheckboxSize,
  gc as FormSpacingInputMinHeight,
  mc as FormSpacingInputPadding,
  ry as GanttChart,
  Xa as Grid,
  ob as GridGutter,
  ib as GridGutterHalf,
  gh as GridLines,
  sb as GridPageWidth,
  fn as GridWidth,
  Si as Header,
  ny as HeaderSSR,
  ju as HeaderSearch,
  Si as HeaderStatic,
  Gt as Heading,
  Ft as HeadingsNhsukHeadingL,
  At as HeadingsNhsukHeadingM,
  Et as HeadingsNhsukHeadingS,
  Pt as HeadingsNhsukHeadingXl,
  Rt as HeadingsNhsukHeadingXs,
  Du as Hero,
  xi as Hint,
  py as Images,
  Ms as Input,
  cy as InsetText,
  Ls as Label,
  eb as LayoutColumnActions,
  Kx as LayoutColumnFull,
  Jx as LayoutColumnHalf,
  Qx as LayoutColumnQuarter,
  Zx as LayoutColumnThird,
  Xx as LayoutContainerMaxWidth,
  Cy as Legend,
  mh as LineScalesProvider,
  Zh as LineSeriesPrimitive,
  bu as List,
  vi as MainWrapper,
  Ki as MedicationCard,
  tm as MetricCard,
  By as NHSBodyText,
  Hy as NHSBodyTextLarge,
  Uy as NHSBodyTextSmall,
  Py as NHSHeading1,
  Fy as NHSHeading2,
  Ay as NHSHeading3,
  Ey as NHSHeading4,
  Ry as NHSHeading5,
  Oy as NHSLedeText,
  Wy as NHSLedeTextSmall,
  ty as NHSThemeProvider,
  rv as NHS_FALLBACK_FONT_STACK,
  nv as NHS_FONT_STACK,
  sh as NavigationSplitView,
  vy as PageTemplate,
  ay as Pagination,
  np as Panel,
  Bt as ParagraphsBody,
  Ht as ParagraphsBodyLarge,
  Ut as ParagraphsBodySmall,
  Ot as ParagraphsLedeText,
  Wt as ParagraphsLedeTextSmall,
  qi as PatientCard,
  lh as ProductRoadmap,
  Vb as Radios,
  Gb as RadiosServer,
  by as ResponsiveDataGrid,
  yy as ResponsiveDataGridDemo,
  pn as Row,
  My as SPC,
  Zm as SPCChart,
  Iy as SPCMetricCard,
  mr as Select,
  cu as SelectOption,
  Sb as ShadowButtonDefault,
  jb as ShadowButtonFocus,
  kb as ShadowButtonSecondary,
  Cb as ShadowButtonWarning,
  Nb as ShadowCardDefault,
  Db as ShadowCardHover,
  qx as SizeButtonMinHeightDesktop,
  Yx as SizeButtonMinHeightMobile,
  Bx as SizeFormControlLarge,
  Rx as SizeFormControlMedium,
  Ex as SizeFormControlSmall,
  Vx as SizeFormInputWidth2xl,
  Gx as SizeFormInputWidth3xl,
  Wx as SizeFormInputWidthLg,
  Ox as SizeFormInputWidthMd,
  Ux as SizeFormInputWidthSm,
  zx as SizeFormInputWidthXl,
  Hx as SizeFormInputWidthXs,
  Fx as SizeIconExtraLarge,
  Px as SizeIconLarge,
  Lx as SizeIconMedium,
  Ax as SizeIconNhsDefault,
  Mx as SizeIconSmall,
  Wi as SkipLink,
  hy as SlotMatrix,
  gy as SortStatusControl,
  yc as Spacing0,
  vc as Spacing1,
  wc as Spacing2,
  _c as Spacing3,
  Sc as Spacing4,
  kc as Spacing5,
  Cc as Spacing6,
  jc as Spacing7,
  Nc as Spacing8,
  Dc as Spacing9,
  us as SpacingResponsive0Mobile,
  ds as SpacingResponsive0Tablet,
  fs as SpacingResponsive1Mobile,
  ps as SpacingResponsive1Tablet,
  hs as SpacingResponsive2Mobile,
  ms as SpacingResponsive2Tablet,
  gs as SpacingResponsive3Mobile,
  xs as SpacingResponsive3Tablet,
  bs as SpacingResponsive4Mobile,
  ys as SpacingResponsive4Tablet,
  vs as SpacingResponsive5Mobile,
  ws as SpacingResponsive5Tablet,
  _s as SpacingResponsive6Mobile,
  Ss as SpacingResponsive6Tablet,
  ks as SpacingResponsive7Mobile,
  Cs as SpacingResponsive7Tablet,
  js as SpacingResponsive8Mobile,
  Ns as SpacingResponsive8Tablet,
  Ds as SpacingResponsive9Mobile,
  Ts as SpacingResponsive9Tablet,
  Yb as SpacingUtilities,
  vb as StateDisabledBackground,
  wb as StateDisabledBorder,
  _b as StateDisabledText,
  lb as StateErrorBackground,
  cb as StateErrorBorder,
  ub as StateErrorText,
  xb as StateInfoBackground,
  bb as StateInfoBorder,
  yb as StateInfoText,
  db as StateSuccessBackground,
  fb as StateSuccessBorder,
  pb as StateSuccessText,
  hb as StateWarningBackground,
  mb as StateWarningBorder,
  gb as StateWarningText,
  gp as SummaryCard,
  uy as SummaryList,
  Xt as Table,
  dy as Tabs,
  Oe as Tag,
  dp as TaskList,
  ou as Textarea,
  ky as TooltipOverlay,
  Jh as TooltipProvider,
  wy as TransactionalPageTemplate,
  cg as TransitionButtonDefault,
  ug as TransitionButtonShadow,
  fg as TransitionCardHover,
  dg as TransitionInputFocus,
  Sy as VisibilityProvider,
  Ji as VitalsCard,
  Jb as WIDTH_FRACTIONS,
  fy as WarningCallout,
  nl as WidthContainer,
  Xb as WidthUtilities,
  av as checkFrutigerLoaded,
  Vs as createGenericTabsConfig,
  xy as createTCHTabsConfig,
  ev as generateFrutigerFontFace,
  Ly as getResponsiveStyles,
  qb as getSpacingClass,
  Kb as getWidthClass,
  tv as preloadFrutigerFonts,
  Dp as tchDataConfig,
  Vy as useColors,
  Xy as useComponentSpacing,
  Ky as useNHSHeadings,
  Jy as useNHSParagraphs,
  ey as useNHSTheme,
  Zy as useNHSTypographySystem,
  Qy as useNavigationSplitDrill,
  nh as useNavigationSplitUrlSync,
  al as useNhsFdpBreakpoints,
  qy as useResponsiveSpacing,
  _y as useResponsiveValue,
  Gy as useSpacing,
  $m as useSpc,
  zy as useTokens,
  Yy as useTypography
};
//# sourceMappingURL=index.esm.js.map
